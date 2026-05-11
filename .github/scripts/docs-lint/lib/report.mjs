/**
 * Shared reporter for docs-lint.
 *
 * Each rule pushes issues onto a single `Reporter`. The orchestrator handles
 * grouping, summary printing, GitHub Actions annotations, and exit codes.
 */

const inActions = process.env.GITHUB_ACTIONS === 'true'

export class Reporter {
  constructor() {
    this.issues = []
  }

  add({ file, line, col, rule, severity, message }) {
    this.issues.push({
      file,
      line: line ?? 0,
      col: col ?? 0,
      rule,
      severity: severity ?? 'warning',
      message,
    })
  }

  errorCount() {
    return this.issues.filter((i) => i.severity === 'error').length
  }
}

/** Emit a GitHub Actions workflow command for a single issue. */
export function emitAnnotation(issue) {
  const msg = `[${issue.rule}] ${issue.message}`
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A')
  console.log(
    `::${issue.severity} file=${issue.file},line=${issue.line},col=${issue.col},title=docs-lint::${msg}`
  )
}

/** Print a human-readable report and (in CI) emit annotations. */
export function printReport(reporter) {
  const { issues } = reporter
  if (issues.length === 0) return

  const byRule = {}
  const byFile = {}
  for (const i of issues) {
    byRule[i.rule] = (byRule[i.rule] ?? 0) + 1
    ;(byFile[i.file] ||= []).push(i)
    if (inActions) emitAnnotation(i)
  }

  for (const file of Object.keys(byFile).sort()) {
    console.log(file)
    for (const i of byFile[file]) {
      console.log(`  ${i.line}:${i.col}  [${i.severity}] [${i.rule}]  ${i.message}`)
    }
  }

  console.log('\n=== Summary ===')
  for (const rule of Object.keys(byRule).sort()) {
    const sev = issues.find((i) => i.rule === rule).severity
    console.log(`  ${rule.padEnd(24)} ${String(byRule[rule]).padStart(5)}  ${sev}`)
  }
  console.log(
    `  ${'TOTAL'.padEnd(24)} ${String(issues.length).padStart(5)}  ${reporter.errorCount()} errors across ${Object.keys(byFile).length} file(s)`
  )
}
