/**
 * Table rules for docs-lint.
 *
 * Rules and severity:
 *   error    pipe-col-count                  Pipe row has different column count than header.
 *   error    pipe-no-blank-above             Pipe table has no blank line before it (won't render).
 *   error    escaped-html-in-cell            Cell content like \<ul> renders as literal text.
 *   error    empty-table-header-cell        Empty <th></th> creates a phantom column when rendered.
 *   error    html-row-cell-count-mismatch    A row in an HTML table has a different number of cells than the first row.
 *   warning  adjacent-tables                 Two pipe tables with same column count and no heading between them.
 *   warning  html-blank-between-tags         Blank line between tags inside an HTML <table>.
 *   warning  html-blank-in-cell              Blank line inside an HTML cell content block.
 */

import { visit } from 'unist-util-visit'

export const id = 'tables'

export function check({ file, sourceLines, mdast, codeFenceMask, reporter }) {
  checkPipe(mdast, file, sourceLines, reporter)
  checkHtml(file, sourceLines, codeFenceMask, reporter)
  checkHtmlCells(file, sourceLines, codeFenceMask, reporter)
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
  let inPre = false
  for (let i = 0; i < sourceLines.length; i++) {
    if (codeFenceMask[i]) continue
    const line = sourceLines[i]
    const opensTable = /<table[\s>]/i.test(line)
    const closesTable = /<\/table\s*>/i.test(line)
    const opensPre = /<pre[\s>]/i.test(line)
    const closesPre = /<\/pre\s*>/i.test(line)
    if (!inTable) {
      if (opensTable && !closesTable) inTable = true
      continue
    }
    if (closesTable) {
      inTable = false
      inPre = false
      continue
    }
    // Track <pre> separately. CommonMark HTML block type 1 (<pre>/<script>/
    // <style>) does NOT terminate at a blank line, so blanks inside a <pre>
    // are valid (typically code formatting). Skip them.
    if (!inPre) {
      if (opensPre && !closesPre) {
        inPre = true
        continue
      }
    } else {
      if (closesPre) inPre = false
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

function checkHtmlCells(file, sourceLines, codeFenceMask, reporter) {
  // Two related HTML-table bugs that aren't caught by the AST-based pipe rules:
  //
  //   empty-table-header-cell       <th></th> (whitespace-only). Even one creates
  //                                 a phantom blank column in the rendered table.
  //                                 ArrayGrid hit this with 8 trailing empty <th>
  //                                 cells (May 11 fix).
  //   html-row-cell-count-mismatch  <tr> rows in the same table with different
  //                                 cell counts. Fallback for the same class of
  //                                 bug when the rogue cells aren't empty.
  //
  // Row-header table exception: a table that uses <th scope="row"> in its body
  // rows is a comparison/cross-tab table where the top-left corner cell is the
  // intersection of column-headers and row-headers. An empty <th> there is the
  // semantically correct corner cell, not a phantom column. Skip empty-th flags
  // for tables that use scope="row".
  //
  // Rule B is conservative: skipped on tables that contain nested <table> elements,
  // since counting cells per row would otherwise sweep in nested-table cells.

  // Build single string with code fences blanked; preserves line numbers.
  const source = sourceLines.map((line, i) => (codeFenceMask[i] ? '' : line)).join('\n')
  const lineOf = (idx) => source.slice(0, idx).split('\n').length

  for (const t of findTopLevelTables(source)) {
    const inner = source.slice(t.start, t.end)

    // Row-header table heuristic: any <th scope="row"...> inside the table.
    const isRowHeaderTable = /<th\s[^>]*scope\s*=\s*["']?row["']?/i.test(inner)

    // Rule A: empty <th>. Skip on row-header tables.
    if (!isRowHeaderTable) {
      const thPattern = /<th(?:\s[^>]*)?>([\s\S]*?)<\/th\s*>/gi
      let m
      while ((m = thPattern.exec(inner)) !== null) {
        if (m[1].trim() === '') {
          const lineWithinInner = inner.slice(0, m.index).split('\n').length - 1
          reporter.add({
            file,
            line: lineOf(t.start) + lineWithinInner,
            col: 1,
            rule: 'empty-table-header-cell',
            severity: 'error',
            message: 'empty <th> creates a phantom column when rendered',
          })
        }
      }
    }

    // Rule B: cell count mismatch. Skip if nested tables would confuse the count,
    // or if the table uses rowspan/colspan > 1 (legitimate cell merging that a
    // raw cell-count comparison can't reason about).
    if (t.hasNesting) continue
    if (/\b(?:row|col)span\s*=\s*["']?(?!0|1["'\s>])/i.test(inner)) continue
    const trPattern = /<tr(?:\s[^>]*)?>([\s\S]*?)<\/tr\s*>/gi
    const rows = []
    let tr
    while ((tr = trPattern.exec(inner)) !== null) {
      const cellCount = (tr[1].match(/<t[hd][\s>]/gi) || []).length
      const lineWithinInner = inner.slice(0, tr.index).split('\n').length - 1
      rows.push({ line: lineOf(t.start) + lineWithinInner, count: cellCount })
    }
    if (rows.length < 2) continue
    const expected = rows[0].count
    for (const row of rows.slice(1)) {
      if (row.count !== expected) {
        reporter.add({
          file,
          line: row.line,
          col: 1,
          rule: 'html-row-cell-count-mismatch',
          severity: 'error',
          message: `row has ${row.count} cells; first row of table has ${expected}`,
        })
      }
    }
  }
}

function findTopLevelTables(source) {
  // Walk <table>/</table> tags tracking depth. Records each top-level
  // (depth==1) <table>...</table> span and whether nesting was observed inside.
  const tables = []
  const tagRegex = /<(\/?)table[\s>]/gi
  let depth = 0
  let openStart = -1
  let maxDepth = 0
  let m
  while ((m = tagRegex.exec(source)) !== null) {
    const isClose = m[1] === '/'
    if (!isClose) {
      depth++
      if (depth === 1) {
        openStart = m.index
        maxDepth = 1
      } else if (depth > maxDepth) {
        maxDepth = depth
      }
    } else {
      if (depth === 1) {
        const endIdx = source.indexOf('>', m.index) + 1
        tables.push({ start: openStart, end: endIdx, hasNesting: maxDepth > 1 })
        openStart = -1
      }
      depth--
    }
  }
  return tables
}
