#!/usr/bin/env node
/**
 * docs-lint — orchestrator for documentation lint rules.
 *
 * Usage:
 *   node .github/scripts/docs-lint/index.mjs              # lint all synced doc paths
 *   node .github/scripts/docs-lint/index.mjs file [...]   # lint specific files
 *
 * When run inside GitHub Actions (GITHUB_ACTIONS=true), emits ::error / ::warning
 * workflow commands so issues appear inline as PR annotations.
 *
 * Adding a new rule module:
 *   1. Drop a file in ./rules/ that exports `id` and `check({file, sourceLines, mdast, codeFenceMask, reporter})`.
 *   2. Import + register it below.
 */

import { readFile } from 'node:fs/promises'
import { glob } from 'glob'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'

import { Reporter, printReport } from './lib/report.mjs'
import * as tables from './rules/tables.mjs'
import * as links from './rules/links.mjs'

const RULES = [tables, links]

const SYNC_PATHS = [
  'docs/**/*.md',
  'reference/**/*.md',
  'custom_pages/**/*.md',
  'custom_blocks/**/*.md',
]

const mdProcessor = unified().use(remarkParse).use(remarkGfm)

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

async function lintFile(file, reporter) {
  const source = await readFile(file, 'utf8')
  const sourceLines = source.split('\n')
  const codeFenceMask = buildCodeFenceMask(sourceLines)
  const mdast = mdProcessor.parse(source)

  const ctx = { file, sourceLines, mdast, codeFenceMask, reporter }
  for (const rule of RULES) {
    rule.check(ctx)
  }
}

async function main() {
  const argv = process.argv.slice(2)
  let files
  if (argv.length > 0) {
    // Filter to .md files in synced paths so the workflow can pass the full PR
    // change set without us needing to filter externally.
    files = argv.filter(
      (f) => /\.md$/i.test(f) && SYNC_PATHS.some((p) => f.startsWith(p.split('/')[0] + '/'))
    )
  } else {
    files = (await Promise.all(SYNC_PATHS.map((p) => glob(p)))).flat()
  }
  files = files.sort()

  if (files.length === 0) {
    console.log('No markdown files in synced paths to lint.')
    return
  }

  const reporter = new Reporter()
  for (const f of files) {
    try {
      await lintFile(f, reporter)
    } catch (e) {
      console.error(`Error linting ${f}: ${e.message}`)
    }
  }

  if (reporter.issues.length === 0) {
    console.log(`No issues found across ${files.length} file(s).`)
    return
  }

  printReport(reporter)
  if (reporter.errorCount() > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(2)
})
