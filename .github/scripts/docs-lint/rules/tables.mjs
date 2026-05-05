/**
 * Table rules for docs-lint.
 *
 * Rules and severity:
 *   error    pipe-col-count         Pipe row has different column count than header.
 *   error    pipe-no-blank-above    Pipe table has no blank line before it (won't render).
 *   error    escaped-html-in-cell   Cell content like \<ul> renders as literal text.
 *   warning  adjacent-tables        Two pipe tables with same column count and no heading between them.
 *   warning  html-blank-row         Blank line after </tr> breaks GitHub/IDE preview.
 */

import { visit } from 'unist-util-visit'

export const id = 'tables'

export function check({ file, sourceLines, mdast, codeFenceMask, reporter }) {
  checkPipe(mdast, file, sourceLines, reporter)
  checkHtml(file, sourceLines, codeFenceMask, reporter)
}

function checkPipe(mdast, file, sourceLines, reporter) {
  visit(mdast, 'table', (node, index, parent) => {
    // 1. column count
    const headerRow = node.children[0]
    const expected = headerRow ? headerRow.children.length : 0
    for (const row of node.children.slice(1)) {
      if (row.children.length !== expected) {
        reporter.add({
          file,
          line: row.position?.start.line,
          col: row.position?.start.column,
          rule: 'pipe-col-count',
          severity: 'error',
          message: `row has ${row.children.length} cells; header has ${expected}`,
        })
      }
    }

    // 2. blank line above
    if (parent && index > 0) {
      const prev = parent.children[index - 1]
      const gap = node.position.start.line - prev.position.end.line
      if (gap < 2) {
        reporter.add({
          file,
          line: node.position.start.line,
          col: 1,
          rule: 'pipe-no-blank-above',
          severity: 'error',
          message: 'pipe table missing blank line above',
        })
      }
    }

    // 3. adjacent tables with the same shape — sometimes a true split, sometimes
    //    distinct tables that should have a heading between them. Either way the
    //    reader sees two unintroduced tables stacked, so flag it.
    if (parent && index > 0) {
      const prev = parent.children[index - 1]
      if (prev.type === 'table' && prev.children[0].children.length === expected) {
        reporter.add({
          file,
          line: node.position.start.line,
          col: 1,
          rule: 'adjacent-tables',
          severity: 'warning',
          message:
            'pipe table follows another with the same column count — likely missing a heading between them, or a single table accidentally split by a blank line',
        })
      }
    }

    // 4. escaped HTML in cells — scan raw source (markdown strips the backslash before AST text)
    const startLine = node.position.start.line
    const endLine = node.position.end.line
    for (let lineNum = startLine; lineNum <= endLine; lineNum++) {
      const src = sourceLines[lineNum - 1] ?? ''
      const m = src.match(/\\<\/?[A-Za-z][\w-]*/)
      if (m) {
        reporter.add({
          file,
          line: lineNum,
          col: (m.index ?? 0) + 1,
          rule: 'escaped-html-in-cell',
          severity: 'error',
          message: `escaped HTML "${m[0]}" in cell — renders as literal text`,
        })
      }
    }
  })
}

function checkHtml(file, sourceLines, codeFenceMask, reporter) {
  // Source-text scan: any blank line inside an HTML <table> block. CommonMark/GFM
  // ends an HTML block at the first blank line, so a blank inside a <table> breaks
  // the rest of the block in stricter renderers (GitHub, IDE previews) regardless
  // of what surrounds it. We split this into two rules so the fixer can auto-handle
  // the easy case and surface the harder one for manual review:
  //
  //   html-blank-between-tags  prev ends with `>` AND next starts with `<` — safe
  //                            to delete (auto-fixable).
  //   html-blank-in-cell       blank between cell content (text/blockquote/list) —
  //                            needs editorial judgment to convert to <br />,
  //                            inline emphasis, etc.
  //
  // Remark fragments multi-line HTML on blank lines into separate `html` nodes, so
  // AST walks miss this — direct source scan is simpler and more reliable.
  let inTable = false
  for (let i = 0; i < sourceLines.length; i++) {
    if (codeFenceMask[i]) continue
    const line = sourceLines[i]
    const opensHere = /<table[\s>]/i.test(line)
    const closesHere = /<\/table\s*>/i.test(line)
    if (!inTable) {
      // A single-line <table>...</table> opens and closes on the same line —
      // don't enter inTable state.
      if (opensHere && !closesHere) inTable = true
      continue
    }
    if (closesHere) {
      inTable = false
      continue
    }
    if (line.trim() !== '') continue

    let prev = ''
    for (let j = i - 1; j >= 0; j--) {
      if (codeFenceMask[j]) continue
      if (sourceLines[j].trim() !== '') {
        prev = sourceLines[j].trimEnd()
        break
      }
    }
    let next = ''
    for (let j = i + 1; j < sourceLines.length; j++) {
      if (codeFenceMask[j]) continue
      if (sourceLines[j].trim() !== '') {
        next = sourceLines[j].trimStart()
        break
      }
    }

    if (prev.endsWith('>') && next.startsWith('<')) {
      reporter.add({
        file,
        line: i + 1,
        col: 1,
        rule: 'html-blank-between-tags',
        severity: 'warning',
        message: 'blank line between tags inside HTML table (breaks GitHub/IDE preview)',
      })
    } else {
      reporter.add({
        file,
        line: i + 1,
        col: 1,
        rule: 'html-blank-in-cell',
        severity: 'warning',
        message:
          'blank line inside HTML table cell content (breaks GitHub/IDE preview) — replace with <br /> or restructure',
      })
    }
  }
}
