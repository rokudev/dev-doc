/**
 * Code-fence rules for docs-lint.
 *
 * Rules and severity:
 *   error    brightscript-fence-required   Bare ``` fence whose body classifies as BrightScript.
 *
 * The classifier lives in ../lib/code-fence-classifier.mjs and is shared with
 * the one-shot sweep tool that initially populated the BRS tags.
 */

import { visit } from 'unist-util-visit';
import { classifyFence } from '../lib/code-fence-classifier.mjs';

export const id = 'code-fences';

export function check({ file, mdast, reporter }) {
  visit(mdast, 'code', (node) => {
    // Bare fence = no info string (`lang` is null/empty after trim).
    const lang = node.lang ? String(node.lang).trim() : '';
    if (lang) return;

    const body = node.value ?? '';
    const result = classifyFence(body);

    if (result.lang === 'brightscript' && result.confidence >= 0.7) {
      const why = result.signals.slice(0, 3).join(', ');
      reporter.add({
        file,
        line: node.position?.start.line,
        col: node.position?.start.column ?? 1,
        rule: 'brightscript-fence-required',
        severity: 'error',
        message: `bare \`\`\` fence with BrightScript content; tag it as \`\`\`brightscript (${why})`,
      });
    }
  });
}
