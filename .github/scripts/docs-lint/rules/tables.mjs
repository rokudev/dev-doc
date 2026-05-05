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
  // Source-text scan: a </tr> immediately followed by a blank line within a table block.
  // Remark fragments multi-line HTML on blank lines into separate `html` nodes, so AST
  // walks miss this. Direct source scan is simpler and more reliable.
  let prevTrCloseLine = 0
  for (let i = 0; i < sourceLines.length; i++) {
    if (codeFenceMask[i]) continue
    const line = sourceLines[i]
    if (/<\/tr\s*>/i.test(line)) {
      prevTrCloseLine = i + 1
      continue
    }
    if (prevTrCloseLine && line.trim() === '') {
      let inTable = false
      for (let j = i + 1; j < sourceLines.length; j++) {
        const ahead = sourceLines[j]
        if (/<\/table\s*>/i.test(ahead)) break
        if (/<tr[\s>]/i.test(ahead)) {
          inTable = true
          break
        }
        if (ahead.trim() !== '' && !/<\/?\w+/.test(ahead)) break
      }
      if (inTable) {
        reporter.add({
          file,
          line: i + 1,
          col: 1,
          rule: 'html-blank-row',
          severity: 'warning',
          message: `blank line after </tr> on line ${prevTrCloseLine} (breaks GitHub/IDE preview)`,
        })
      }
      prevTrCloseLine = 0
    } else if (line.trim() !== '') {
      prevTrCloseLine = 0
    }
  }
}
