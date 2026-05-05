#!/usr/bin/env node
/**
 * Markdown table linter.
 *
 * Usage:
 *   node .github/scripts/lint-tables.mjs              # lint all synced doc paths
 *   node .github/scripts/lint-tables.mjs file [...]   # lint specific files
 *
 * When run inside GitHub Actions (GITHUB_ACTIONS=true), also emits workflow
 * commands so issues appear inline as PR annotations.
 *
 * Rules and severity:
 *   error    pipe-col-count         Pipe row has different column count than header.
 *   error    pipe-no-blank-above    Pipe table has no blank line before it (won't render).
 *   error    pipe-split             Pipe table split by a blank line.
 *   error    escaped-html-in-cell   Cell contains escaped HTML (e.g. \<ul>) — renders as literal.
 *   warning  html-blank-row         Blank line after </tr> — breaks GitHub/IDE preview.
 */

import { readFile } from 'node:fs/promises'
import { glob } from 'glob'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

const SYNC_PATHS = [
  'docs/**/*.md',
  'reference/**/*.md',
  'custom_pages/**/*.md',
  'custom_blocks/**/*.md',
]

const SEVERITY = {
  'pipe-col-count': 'error',
  'pipe-no-blank-above': 'error',
  'pipe-split': 'error',
  'escaped-html-in-cell': 'error',
  'html-blank-row': 'warning',
}

const inActions = process.env.GITHUB_ACTIONS === 'true'
const issues = []

function report(file, line, col, rule, message) {
  issues.push({ file, line: line ?? 0, col: col ?? 0, rule, message })
}

// ---------- mdast checks ----------

function checkPipe(mdast, file, sourceLines) {
  visit(mdast, 'table', (node, index, parent) => {
    // 1. column count
    const headerRow = node.children[0]
    const expected = headerRow ? headerRow.children.length : 0
    for (const row of node.children.slice(1)) {
      if (row.children.length !== expected) {
        report(
          file,
          row.position?.start.line,
          row.position?.start.column,
          'pipe-col-count',
          `row has ${row.children.length} cells; header has ${expected}`
        )
      }
    }

    // 2. blank line above
    if (parent && index > 0) {
      const prev = parent.children[index - 1]
      const gap = node.position.start.line - prev.position.end.line
      if (gap < 2) {
        report(
          file,
          node.position.start.line,
          1,
          'pipe-no-blank-above',
          'pipe table missing blank line above'
        )
      }
    }

    // 3. consecutive tables (split)
    if (parent && index > 0) {
      const prev = parent.children[index - 1]
      if (prev.type === 'table' && prev.children[0].children.length === expected) {
        report(
          file,
          node.position.start.line,
          1,
          'pipe-split',
          'pipe table immediately follows another with same column count — likely a single table split by a blank line'
        )
      }
    }

    // 4. escaped HTML in cells — scan raw source (markdown strips the backslash before AST text)
    const startLine = node.position.start.line
    const endLine = node.position.end.line
    for (let lineNum = startLine; lineNum <= endLine; lineNum++) {
      const src = sourceLines[lineNum - 1] ?? ''
      const m = src.match(/\\<\/?[A-Za-z][\w-]*/)
      if (m) {
        report(
          file,
          lineNum,
          (m.index ?? 0) + 1,
          'escaped-html-in-cell',
          `escaped HTML "${m[0]}" in cell — renders as literal text`
        )
      }
    }
  })
}

// ---------- hast checks ----------

function checkHtml(file, sourceLines, codeFenceMask) {
  // Source-text scan: a </tr> immediately followed by a blank line within a table block.
  // (Remark fragments multi-line HTML on blank lines into separate `html` nodes, so AST
  //  walks miss this. Direct source scan is simpler and more reliable.)
  let prevTrCloseLine = 0
  for (let i = 0; i < sourceLines.length; i++) {
    if (codeFenceMask[i]) continue
    const line = sourceLines[i]
    if (/<\/tr\s*>/i.test(line)) {
      prevTrCloseLine = i + 1
      continue
    }
    if (prevTrCloseLine && line.trim() === '') {
      // Only flag if this blank is followed (eventually) by another <tr>, so we know
      // we're inside an HTML table and not at the end of one.
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
        report(
          file,
          i + 1,
          1,
          'html-blank-row',
          `blank line after </tr> on line ${prevTrCloseLine} (breaks GitHub/IDE preview)`
        )
      }
      prevTrCloseLine = 0
    } else if (line.trim() !== '') {
      prevTrCloseLine = 0
    }
  }
}

function buildCodeFenceMask(sourceLines) {
  const mask = new Array(sourceLines.length).fill(false)
  let inFence = false
  let marker = null
  for (let i = 0; i < sourceLines.length; i++) {
    const stripped = sourceLines[i].trimStart()
    if (!inFence) {
      const m = stripped.match(/^(```+|~~~+)/)
      if (m) {
        inFence = true
        marker = m[1][0].repeat(3)
        mask[i] = true
        continue
      }
    } else {
      mask[i] = true
      if (stripped.startsWith(marker)) {
        inFence = false
        marker = null
      }
    }
  }
  return mask
}

// ---------- runner ----------

const mdProcessor = unified().use(remarkParse).use(remarkGfm)

async function lintFile(file) {
  const source = await readFile(file, 'utf8')
  const sourceLines = source.split('\n')
  const codeFenceMask = buildCodeFenceMask(sourceLines)
  const mdast = mdProcessor.parse(source)
  checkPipe(mdast, file, sourceLines)
  checkHtml(file, sourceLines, codeFenceMask)
}

function emitAnnotation(issue) {
  // GitHub workflow command. Backslashes / newlines / commas in the message must be escaped.
  const sev = SEVERITY[issue.rule] ?? 'warning'
  const msg = `[${issue.rule}] ${issue.message}`
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
  console.log(
    `::${sev} file=${issue.file},line=${issue.line},col=${issue.col},title=table-lint::${msg}`
  )
}

async function main() {
  const argv = process.argv.slice(2)
  let files
  if (argv.length > 0) {
    // Accept explicit file list; filter to .md files in synced paths so workflow can pass
    // the full PR change set without us needing to filter externally.
    files = argv.filter((f) => /\.md$/i.test(f) && SYNC_PATHS.some((p) => f.startsWith(p.split('/')[0] + '/')))
  } else {
    files = (await Promise.all(SYNC_PATHS.map((p) => glob(p)))).flat()
  }
  files = files.sort()

  if (files.length === 0) {
    console.log('No markdown files in synced paths to lint.')
    return
  }

  for (const f of files) {
    try {
      await lintFile(f)
    } catch (e) {
      console.error(`Error linting ${f}: ${e.message}`)
    }
  }

  if (issues.length === 0) {
    console.log(`No table issues found across ${files.length} file(s).`)
    return
  }

  const byRule = {}
  const byFile = {}
  let errorCount = 0
  for (const i of issues) {
    byRule[i.rule] = (byRule[i.rule] ?? 0) + 1
    ;(byFile[i.file] ||= []).push(i)
    if ((SEVERITY[i.rule] ?? 'warning') === 'error') errorCount++
    if (inActions) emitAnnotation(i)
  }

  for (const file of Object.keys(byFile).sort()) {
    console.log(file)
    for (const i of byFile[file]) {
      const sev = SEVERITY[i.rule] ?? 'warning'
      console.log(`  ${i.line}:${i.col}  [${sev}] [${i.rule}]  ${i.message}`)
    }
  }

  console.log('\n=== Summary ===')
  for (const rule of Object.keys(byRule).sort()) {
    const sev = SEVERITY[rule] ?? 'warning'
    console.log(`  ${rule.padEnd(24)} ${String(byRule[rule]).padStart(5)}  ${sev}`)
  }
  console.log(
    `  ${'TOTAL'.padEnd(24)} ${String(issues.length).padStart(5)}  ${errorCount} errors across ${Object.keys(byFile).length} file(s)`
  )

  if (errorCount > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(2)
})
