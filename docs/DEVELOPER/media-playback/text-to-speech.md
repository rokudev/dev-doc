---
title: "Text to speech"
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

# Text to speech

> This feature is only available on the following devices: Roku
Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku
Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku
TV running Roku OS 7.2 and later.

-----

## Text to speech components

*Components available since Roku OS 7.2*

Text to speech (TTS) allows the developer to provide an audible spoken version of
the strings shown to the user in the app. For platforms that
are required to comply with the [FCC Communications and Video Accessibility Act of 2010 (CVAA)](https://www.fcc.gov/consumers/guides/21st-century-communications-and-video-accessibility-act-cvaa),
this capability can be used as part of compliance with CVAA, and the
current text to speech flite\_tts library is built into the image. The
Roku text to speech capability supports different languages, voices,
rates of speech, volume of speech, and other aspects of text to speech.
Roku provides text to speech support in the following components,
interfaces, and events:

  - [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md)
  - [ifTextToSpeech](/docs/references/brightscript/interfaces/iftexttospeech.md)
  - [roTextToSpeechEvent](/docs/references/brightscript/events/rotexttospeechevent.md)

Components available since Roku OS 7.5

  - [roAudioGuide](/docs/references/brightscript/components/roaudioguide.md)
  - [ifAudioGuide](/docs/references/brightscript/interfaces/ifaudioguide.md)

## Screen reader behavior for SceneGraph nodes

  - **[ArrayGrid](/docs/references/scenegraph/abstract-nodes/arraygrid.md)**: speaks focused item ([ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)), followed by navigation hint, then ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any).


  - **[Button](/docs/references/scenegraph/widget-nodes/button.md)**: text of button is spoken only if focused


  - **[ButtonGroup](/docs/references/scenegraph/layout-group-nodes/buttongroup.md#fields)**: speaks focused [Button](/docs/references/scenegraph/widget-nodes/button.md), followed
    by navigation hint (“button 1 of 4”), followed by button-specific hint, if any (Button-specific hint is spoken only for StarRatingButton).


  - **[CheckList](/docs/references/scenegraph/list-and-grid-nodes/checklist.md)**:
    speaks focused item (ContentMetaData::AUDIO\_GUIDE\_TEXT if any;
    otherwise
    [ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes))
    followed by navigation hint (“checkbox, checked, 1 of 4”)


  - **[Dialog](/docs/references/scenegraph/dialog-nodes/dialog.md)**:
    speaks `title`, `message`, and `bulletText` (if any), then reads focused button


  - **[Keyboard](/docs/references/scenegraph/widget-nodes/keyboard.md)**:
    speaks hint about caps lock toggling (once), then speaks focused key


  - **[KeyboardDialog](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md)**:
    speaks title, then keyboard


  - **[Label](/docs/references/scenegraph/label-nodes/label.md)**:
    speaks `text` field


  - **[LabelList](/docs/references/scenegraph/list-and-grid-nodes/labellist.md)**:
    speaks focused ContentMetaData::AUDIO\_GUIDE\_TEXT if any; otherwise speaks
    [ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes), followed by navigation hint.


  - **[MarkupGrid](/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md)**:
    speaks focused ContentMetaData::AUDIO\_GUIDE\_TEXT if any; otherwise speaks [ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes), followed by navigation hint, then
    ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any), then MEDIA speech (see below)


  - **[MarkupList](/docs/references/scenegraph/list-and-grid-nodes/markuplist.md)**: speaks focused item
    ([ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)), followed by navigation hint, then ContentMetaData::AUDIO\_GUIDE\_SUFFIX (if any).


  - **[MiniKeyboard](/docs/references/scenegraph/widget-nodes/minikeyboard.md)**:
    speaks focused key


  - **[PinDialog](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md)**:
    speaks dialog title, whether in key pad, then focused key or button


  - **[PinPad](/docs/references/scenegraph/widget-nodes/pinpad.md)**:
    speaks focused key


  - **[Poster](/docs/references/scenegraph/renderable-nodes/poster.md)**: if focused, speaks `audioGuideText` field (if set)


  - **[PosterGrid](/docs/references/scenegraph/list-and-grid-nodes/postergrid.md)**:
    speaks focused item
    ([ContentMetaData::TITLE](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)), followed by navigation hint.


  - **[ProgressDialog](/docs/references/scenegraph/dialog-nodes/progressdialog.md)**:
    speaks dialog `title`, `message`, and `bulletText` every 15
    seconds. Speaks focused button if there is
    any.


  - **[RadioButtonList](/docs/references/scenegraph/list-and-grid-nodes/radiobuttonlist.md)**:
    speaks focused item (ContentMetaData::AUDIO\_GUIDE\_TEXT if  any;
    otherwise, ContentMetaData::TITLE), followed by navigation and
    selection
    hint


  - **RenderableNode**:
    if speaking focused item (depends on context), will speak focused
    descendant; otherwise, will speak all descendants


  - **[RowList](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md)**:
    speaks row label (when row becomes focused), then speaks focused
    **[PosterGrid](/docs/references/scenegraph/list-and-grid-nodes/postergrid.md)**
    or
    **[MarkupGrid](/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md)**
    (MarkupGrid is used if itemComponentName is
    non-empty)


  - **[ScrollableText](/docs/references/scenegraph/typographic-nodes/scrollabletext.md)**:
    speaks `text`
    field


  - **[ScrollingLabel](/docs/references/scenegraph/typographic-nodes/scrollinglabel.md)**:
    speaks `text` field


  - **[Video](/docs/references/scenegraph/media-playback-nodes/video.md)**:  speaks
    HUD if displayed by user

**Screen reader behavior for built-in SceneGraph panels and scenes:**

  - **[GridPanel](/docs/references/scenegraph/sliding-panels-nodes/gridpanel.md)**:
     speaks panel, then **leftLabel**


  - **[ListPanel](/docs/references/scenegraph/sliding-panels-nodes/listpanel.md)**:
     speaks panel, then **leftLabel**


  - **[PanelSet](/docs/references/scenegraph/sliding-panels-nodes/panelset.md)**:
      - If left panel is focused, speaks focused left panel, then
        unfocused right panel (if any)
      - If right panel is focused, speaks unfocused left panel, then
        focused right panel
      - If no panel is focused, speaks unfocused left panel, then
        unfocused right panel (if
        any)


  - **[OverhangPanelSetScene](/docs/references/scenegraph/sliding-panels-nodes/overhangpanelsetscene.md)**:
    uses
    **[Overhang](/docs/references/scenegraph/sliding-panels-nodes/overhang.md)**
    title when speaking location


  - **[Scene](/docs/references/scenegraph/scene.md)**: speaks
    dialog (if any); otherwise speaks
    [PanelSet](/docs/references/scenegraph/sliding-panels-nodes/panelset.md) (if
    any); otherwise speaks as
    RenderableNode

**MEDIA speech is spoken in the following order:**

  - [ContentMetaData::TEXT](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)
  - [ContentMetaData::DESCRIPTION](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)
  - [ContentMetaData::DIRECTORS](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)
  - [ContentMetaData::PRODUCERS](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)
  - [ContentMetaData::ACTORS](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)

 **There is no additional speech for the following nodes (they will behave the same as RenderableNode):**

  - [BifDisplay](/docs/references/scenegraph/media-playback-nodes/video.md#fields)
  - [BusySpinner](/docs/references/scenegraph/widget-nodes/busyspinner.md)
  - [LayoutGroup](/docs/references/scenegraph/layout-group-nodes/layoutgroup.md)
  - [Overhang](/docs/references/scenegraph/sliding-panels-nodes/overhang.md)
  - [Panel](/docs/references/scenegraph/sliding-panels-nodes/panel.md)
  - [ProgressBar](/docs/references/scenegraph/media-playback-nodes/video.md#fields)
  - [Rectangle](/docs/references/scenegraph/renderable-nodes/rectangle.md)
  - [TextEditBox](/docs/references/scenegraph/widget-nodes/texteditbox.md)
  - [TrickPlayBar](/docs/references/scenegraph/media-playback-nodes/video.md#fields)

## Implementation tips

### TTS interruptions

Many UI elements have default TTS behavior. It is possible that
speech triggered by these implementations can interrupt your TTS
implementation at times. You should keep track of the IDs of your TTS
utterances, as returned by say() and silence(), and handle interruptions
accordingly.

### Other TTS implementation changes

Other TTS implementations may change the current voice, the current
language, the current volume, the current pitch, and/or the current
speech rate. You should keep track of how these parameters might change.

### Long text delays

A long text string to be spoken by TTS may have a noticeable delay
before starting the speech, at least for the first speech of the long
string. For long text strings, you can break up the text string so that
the first speech is a reasonably short sentence, followed by longer
sentences as needed. You should not break up the long text string into
individual words, as it will affect phrasing without improving the
perceived delay in any noticeable way.
