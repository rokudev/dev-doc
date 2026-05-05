#!/usr/bin/env node
/**
 * One-shot fixer for the html-blank-row rule.
 *
 * For each .md file in the synced paths, find blank lines between sibling <tr>s
 * (i.e. </tr> on line N, blank line(s), then <tr> on a later line within the
 * same table). Remove the blanks. Skip lines inside fenced code blocks.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { glob } from 'glob'

const SYNC_PATHS = [
  'docs/**/*.md',
  'reference/**/*.md',
  'custom_pages/**/*.md',
  'custom_blocks/**/*.md',
]

function buildCodeFenceMask(lines) {
  const mask = new Array(lines.length).fill(false)
  let inFence = false
  let marker = null
  for (let i = 0; i < lines.length; i++) {
    const stripped = lines[i].trimStart()
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

async function fixFile(file) {
  const source = await readFile(file, 'utf8')
  const lines = source.split('\n')
  const fence = buildCodeFenceMask(lines)
  const out = []
  let inTable = false
  let removed = 0

  for (let i = 0; i < lines.length; i++) {
    if (fence[i]) {
      out.push(lines[i])
      continue
    }
    const line = lines[i]
    const opensHere = /<table[\s>]/i.test(line)
    const closesHere = /<\/table\s*>/i.test(line)
    if (!inTable) {
      if (opensHere && !closesHere) inTable = true
      out.push(line)
      continue
    }
    if (closesHere) {
      inTable = false
      out.push(line)
      continue
    }
    // Blank line inside a table: drop it iff prev non-blank ends with `>` AND
    // next non-blank (within the table) starts with `<`. Catches blanks between
    // sibling <tr>/<td>/<th> tags but preserves intentional blank lines inside
    // cell text content.
    if (line.trim() === '') {
      let prev = ''
      for (let j = out.length - 1; j >= 0; j--) {
        if (out[j].trim() !== '') {
          prev = out[j].trimEnd()
          break
        }
      }
      let next = ''
      for (let j = i + 1; j < lines.length; j++) {
        if (fence[j]) continue
        if (lines[j].trim() !== '') {
          next = lines[j].trimStart()
          break
        }
      }
      if (prev.endsWith('>') && next.startsWith('<')) {
        removed++
        continue
      }
    }
    out.push(line)
  }

  if (removed > 0) {
    await writeFile(file, out.join('\n'))
  }
  return removed
}

async function main() {
  const files = (await Promise.all(SYNC_PATHS.map((p) => glob(p)))).flat().sort()

  let totalRemoved = 0
  let filesChanged = 0
  for (const f of files) {
    const removed = await fixFile(f)
    if (removed > 0) {
      console.log(`${f}: removed ${removed} blank line(s)`)
      totalRemoved += removed
      filesChanged++
    }
  }

  console.log(`\nDone. ${totalRemoved} blank line(s) removed across ${filesChanged} file(s).`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
