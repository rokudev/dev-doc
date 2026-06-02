/**
 * Classify a code-fence body to a likely language.
 *
 * Returns: { lang, confidence, signals }
 *   lang: 'brightscript' | 'xml' | 'json' | 'c' | 'bash' | 'http' | 'text' | 'unknown' | 'empty'
 *   confidence: 0..1 -- only act on a classification when >= 0.7
 *   signals: string[] -- explanations of what tipped the classifier
 *
 * Conservative by design: prefers 'unknown' over guessing. The
 * `brightscript-fence-required` lint rule and the one-shot sweep tool
 * both import this so they agree on what "looks like BRS" means.
 */

// ---------------------------------------------------------------------------
// Hard, single-signal classifications run first. Their match is decisive.
// ---------------------------------------------------------------------------

function tryHardSignals(text, lines) {
  // Single URL line: bare http(s)://... with no other content
  if (/^https?:\/\/\S+\s*$/.test(text) && lines.length === 1) {
    return { lang: 'text', confidence: 0.95, signals: ['single URL line'] };
  }

  // Base64 / JWT / long token: one or two lines, all `[A-Za-z0-9+/=._-]`, >= 120 chars
  const noWS = text.replace(/\s+/g, '');
  if (noWS.length >= 120 && /^[A-Za-z0-9+/=._-]+$/.test(noWS) && lines.length <= 3) {
    return { lang: 'text', confidence: 0.9, signals: ['long base64-like token'] };
  }

  // XML declaration
  if (/^\s*<\?xml/.test(text)) {
    return { lang: 'xml', confidence: 1.0, signals: ['<?xml declaration'] };
  }

  // BRS debug-dump format: `<Component: roAssociativeArray> = { ... }`. Not XML.
  // Match BEFORE the XML detector below so we don't misroute these.
  if (/^\s*<\s*Component\s*:\s*\w+/.test(text)) {
    return {
      lang: 'text',
      confidence: 0.9,
      signals: ['<Component: ...> BRS debug-dump (not XML)'],
    };
  }

  // SceneGraph / known XML root tags. Require a real tag boundary
  // (whitespace + attribute, or self-close, or close angle bracket) so we
  // do NOT match `<Component: ...>` BRS dumps.
  const sgTagNames = [
    'component', 'interface', 'script', 'children', 'field', 'customization',
    'MainScene', 'Group', 'Rectangle', 'Label', 'Poster', 'Animation',
    'StandardDialog', 'RowList', 'MarkupGrid', 'MarkupList', 'Task',
    'TimeGrid', 'ChannelStore', 'Scene', 'Overhang', 'Video', 'Audio',
    'Button', 'ButtonGroup', 'RadioButtonList', 'CheckList', 'Keyboard',
    'KeyboardDialog', 'MiniKeyboard', 'StandardMessageDialog',
    'StandardKeyboardDialog', 'StandardProgressDialog', 'MultiVoiceKey',
    'VoiceKey', 'TextEditBox', 'TextEditBoxDialog', 'VoiceTextEditBox',
    'VoiceTextEditBoxDialog',
  ].join('|');
  const sgTagRE = new RegExp(`^\\s*<\\s*(${sgTagNames})(\\s+\\w+\\s*=|\\s*/?>|\\s*$)`, 'i');
  if (sgTagRE.test(text)) {
    return { lang: 'xml', confidence: 0.95, signals: ['SceneGraph XML opener'] };
  }

  // Generic XML: a majority of non-empty lines look like opening or closing tags
  const nonEmpty = lines.filter((l) => l.trim().length > 0);
  if (nonEmpty.length >= 3) {
    const xmlLines = nonEmpty.filter((l) => /^\s*<\/?\w/.test(l)).length;
    if (xmlLines / nonEmpty.length >= 0.6) {
      return {
        lang: 'xml',
        confidence: 0.85,
        signals: [`${xmlLines}/${nonEmpty.length} XML-tag lines`],
      };
    }
  }

  // C struct / enum (used in DEVELOPER/debugging/socket-based-debugger.md)
  if (/^\s*(struct|enum)\s+\w+\s*\{/m.test(text)) {
    return { lang: 'c', confidence: 0.95, signals: ['C struct/enum declaration'] };
  }

  // Shebang or shell prompt
  if (/^\s*#!\s*\//m.test(text) || /^\s*\$\s+\w/m.test(text)) {
    return { lang: 'bash', confidence: 0.9, signals: ['shell prompt or shebang'] };
  }

  // Roku channel `manifest` file: every non-empty line is `key=value` AND at
  // least one line is a known manifest key.
  const MANIFEST_KEYS = /^(title|subtitle|major_version|minor_version|build_version|mm_icon_focus_(hd|fhd|uhd|sd)|splash_screen_(hd|fhd|uhd|sd)|splash_color|splash_min_time|ui_resolutions|hidden|requires_audioguide|supports_input_launch|bs_libs_required|sg_component_libs_required|usage_type|version|run_on_startup|game_keymap|playback_intent|requires_internet|requires_persistent_storage|launch_priority|requires_verimatrix_drm|requires_verimatrix_version|requires_widevine_drm|requires_playready_drm|drm_levels)\s*=/;
  const nonEmptyLinesMan = lines.filter((l) => l.trim().length > 0);
  if (
    nonEmptyLinesMan.length >= 1 &&
    nonEmptyLinesMan.every((l) => /^[a-zA-Z_][a-zA-Z0-9_]*\s*=/.test(l)) &&
    nonEmptyLinesMan.some((l) => MANIFEST_KEYS.test(l))
  ) {
    return { lang: 'text', confidence: 0.85, signals: ['Roku manifest key=value line(s)'] };
  }

  // HTTP request line (path-form: `GET /foo` or URL-form: `POST https://...`)
  if (/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\s+(\/|https?:\/\/)\S/m.test(text)) {
    return { lang: 'http', confidence: 0.9, signals: ['HTTP request line'] };
  }

  return null;
}

// ---------------------------------------------------------------------------
// BrightScript: a single strong signal is enough. Many signals are unique to
// BRS (m.top, CreateObject("ro...), as String, end sub, BrightScript> REPL
// prompt) so false positives are rare.
//
// IMPORTANT: BRS check runs BEFORE the generic JSON check, because BRS
// associative-array literals can look JSON-ish ({ key: "val" }). We let any
// BRS signal short-circuit the JSON check.
// ---------------------------------------------------------------------------

const BRS_PATTERNS = [
  [/\bsub\s+\w+\s*\(/i, 'sub keyword'],
  [/\bfunction\s+\w+\s*\(/i, 'function keyword'],
  [/\bend\s*sub\b/i, 'end sub'],
  [/\bend\s*function\b/i, 'end function'],
  [/\bend\s*if\b/i, 'endif'],
  [/\bend\s*while\b/i, 'endwhile'],
  [/\bend\s*for\b/i, 'endfor'],
  [/\bas\s+(String|Integer|Boolean|Object|Dynamic|Float|Double|LongInteger|Void|Function|Interface)\b/, 'as Type annotation'],
  [/\b[cC]reateObject\s*\(\s*"[Rr]o[A-Za-z]/, 'CreateObject("ro...")'],
  [/\bm\.(top|global|video)\b/, 'm.top/global/video'],
  [/(^|[^.\w])m\.\w+\s*=/m, 'm.field assignment'],
  [/(^|[^.\w])m\.\w+\.\w+\s*\(/m, 'm.field.method() call'],
  [/(^|[^.\w])m\.\w+/m, 'm. field reference'],
  [/\bLibrary\s+"[\w./]+\.brs"/i, 'Library "...brs" statement'],
  [/\bRoku_Ads(_SG)?\s*\(/, 'Roku_Ads() framework call'],
  [/(^|[^.\w])tr\s*\(\s*"/, 'tr() translation call'],
  [/\.observeFieldScoped\s*\(/i, 'observeFieldScoped'],
  [/\.callFunc(tion)?\s*\(/i, 'callFunc()'],
  [
    /\bro(SGNode|MessagePort|ByteArray|UrlTransfer|Regex|DeviceInfo|AppInfo|Timespan|FontRegistry|Screen|Bitmap|FileSystem|AssociativeArray|Region|VideoPlayer|AudioPlayer|RegistrySection|ChannelStore|Path|Sprite|Compositor|TextureManager|UniversalControlEvent|InputEvent|HdmiStatus|AudioGuide|TextToSpeech|TextToSpeechEvent|Font|XMLElement|DateTime|List|Array|String|Int|Float|Invalid|VideoEvent|AudioEvent|UrlEvent|ChannelStoreEvent|InvalidPort|AppManager|FileSystem|FilesystemEvent|SystemLog|SystemLogEvent|DeviceCryptoEvent|DeviceCrypto|DeviceInfoEvent|AppMemoryMonitor|AppMemoryMonitorEvent|EVPCipher|EVPDigest|HMAC|HttpAgent|Registry|Bitmap|RegionList|ProgramGuide|ImageMetadata|AudioMetadata|VideoMetadata|MetadataElement|ContentMetadata|MessageDialog|Dialog|TextWidget|TextScreen|ParagraphScreen|MessageBox|PinEntryDialog|GridScreen|PosterScreen|ListScreen|VideoScreen|AudioPlayerScreen|SearchScreen|SearchHistory|KeyboardScreen|SpringboardScreen|VirtualKeyboard|UrlTransfer|UrlEvent|StreamSocket|StreamSocketEvent|InternalAudioMixer|InternalAudio)\b/,
    'ro-prefixed object',
  ],
  [/\bBrightScript\s*>\s/, 'BRS REPL prompt'],
  [/^\s*print\s+["'\w&]/im, 'print statement'],
  [/^\s*'/m, "BRS comment '"],
  [/\b&h[0-9a-fA-F]+\b/, 'hex literal &h...'],
  [/\bwait\s*\(\s*\d/, 'wait()'],
  [/^\s*Dim\s+\w+/m, 'Dim'],
  [/\b[Tt]hrow\s/, 'THROW'],
  [/\bfor\s+each\s+\w+\s+in\b/i, 'for each ... in'],
  [/\bif\s+.+\s+then\b/i, 'if-then'],
  [/\belse\s+if\b/i, 'else if'],
  [/\b[Nn]ext\s*$/m, 'next'],
  [/^\s*\w+\s*=\s*[cC]reateObject\s*\(/m, 'CreateObject assignment'],
  [/\b(stop|STOP)\s*$/m, 'stop statement'],
  [/\bonKeyEvent\b/, 'onKeyEvent handler'],
  [/\b(observeField|unobserveField|observeFieldScoped|setField|getField|callFunc|callfunc)\b/, 'SceneGraph node method'],
  [/\b(rsg|RSG)\.\w+/, 'rsg. namespace'],
  [/\bobjFun\b/, 'objFun'],
  [/^\s*[A-Za-z]\w*:\s*$/m, 'GOTO label'],
];

function tryBrightScript(text) {
  // Skip BRS detection inside obvious non-BRS contexts (C struct, XML body).
  // Those are already classified by tryHardSignals if applicable.
  if (/\b(uint8|uint16|uint32|uint64|int8|int16|int32|int64|utf8z)\b/.test(text)) {
    // C int types. Skip BRS unless there's an unambiguous BRS keyword too.
    const hasStrongBRS =
      /\b[cC]reateObject\s*\(\s*"ro/.test(text) ||
      /\bm\.(top|global|video)\b/.test(text) ||
      /\bend\s*sub\b/i.test(text) ||
      /\bend\s*function\b/i.test(text) ||
      /\bas\s+(String|Integer|Boolean|Object|Dynamic|Float|Double|Void)\b/.test(text);
    if (!hasStrongBRS) return null;
  }

  const hits = [];
  for (const [pat, label] of BRS_PATTERNS) {
    if (pat.test(text)) hits.push(label);
  }
  if (hits.length === 0) return null;

  // Two or more signals -> very confident.
  // One signal -> confident only if the signal is high-specificity.
  const HIGH_SPECIFICITY = [
    'as Type annotation',
    'CreateObject("ro...")',
    'm.top/global/video',
    'm.field assignment',
    'm.field.method() call',
    'm. field reference',
    'ro-prefixed object',
    'BRS REPL prompt',
    'end sub',
    'end function',
    'sub keyword',
    'function keyword',
    'SceneGraph node method',
    'onKeyEvent handler',
    "BRS comment '",
    'Library "...brs" statement',
    'Roku_Ads() framework call',
    'observeFieldScoped',
    'callFunc()',
  ];
  const hasHighSpec = hits.some((h) => HIGH_SPECIFICITY.includes(h));
  let confidence;
  if (hits.length >= 2) confidence = 0.95;
  else if (hasHighSpec) confidence = 0.85;
  else confidence = 0.6; // 1 weak signal: keep below the 0.7 act-threshold

  return { lang: 'brightscript', confidence, signals: hits };
}

// ---------------------------------------------------------------------------
// JSON: object/array literal with quoted keys. Runs AFTER BRS so BRS
// associative-array literals don't get misclassified.
// ---------------------------------------------------------------------------

function tryJson(text) {
  if (!/^\s*[\{\[]/.test(text)) return null;
  // Need quoted keys, no BRS line comments (`'`).
  if (!/"[\w$-]+"\s*:\s*/.test(text)) return null;
  if (/^\s*'/m.test(text)) return null;
  if (/^\s+'/.test(text)) return null;
  return { lang: 'json', confidence: 0.85, signals: ['object/array with quoted keys'] };
}

// ---------------------------------------------------------------------------
// Bash: command-style content.
// ---------------------------------------------------------------------------

function tryBashLight(text, lines) {
  if (lines.length > 8) return null;
  if (/^\s*(curl|wget|cd|ls|sudo|brew|npm|node|python3?|pip3?|export|chmod|mkdir|rm|cp|mv|tar|git)\s/m.test(text)) {
    return { lang: 'bash', confidence: 0.8, signals: ['bash command'] };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Public entry point.
// ---------------------------------------------------------------------------

export function classifyFence(body) {
  const text = (body ?? '').replace(/\s+$/, '');
  if (!text.trim()) return { lang: 'empty', confidence: 1.0, signals: [] };
  const lines = text.split('\n');

  const hard = tryHardSignals(text, lines);
  if (hard) return hard;

  const brs = tryBrightScript(text);
  if (brs && brs.confidence >= 0.7) return brs;

  const json = tryJson(text);
  if (json) return json;

  const bash = tryBashLight(text, lines);
  if (bash) return bash;

  // BRS scored 1 weak signal -> still return brightscript with low confidence
  // so callers can see it; sweep + lint both gate on >= 0.7.
  if (brs) return brs;

  return { lang: 'unknown', confidence: 0.0, signals: [] };
}

/** Convenience helper used by the lint rule. */
export function looksLikeBrightScript(body) {
  const result = classifyFence(body);
  return result.lang === 'brightscript' && result.confidence >= 0.7;
}
