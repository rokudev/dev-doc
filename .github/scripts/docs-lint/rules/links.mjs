/**
 * Link rules for docs-lint.
 *
 * Rules and severity:
 *   error  confluence-html-link
 *     Link target matches Confluence-export filename pattern
 *     `<Name>_<digits>.html` (e.g. `children_1608551.html`). These are
 *     dead artifacts from the original Confluence-to-Markdown migration.
 *     Either the link should be repointed at the current in-repo doc, or
 *     the target should be hosted somewhere that still resolves.
 *
 * Detects both relative (`children_1608551.html`) and absolute
 * (`/.../children_1608551.html`) forms. Also catches external URLs to
 * the `sdkdocs-archive.staging.web.roku.com` Confluence-archive host.
 */

import { visit } from 'unist-util-visit';

export const id = 'links';

// `<Name>_<digits>.html` pattern, anywhere in the URL path. Trailing
// `#anchor` is tolerated by the parser; we test against just the path.
const CONFLUENCE_EXPORT_RE = /[^\s/]+_\d+\.html(\?[^#\s]*)?(#\S*)?$/i;
const CONFLUENCE_ARCHIVE_HOST_RE = /^https?:\/\/sdkdocs-archive\.staging\.web\.roku\.com\//i;

function isConfluenceLink(url) {
  if (!url) return false;
  if (CONFLUENCE_ARCHIVE_HOST_RE.test(url)) return true;
  // Strip query + hash, then test the path portion
  const pathPart = url.split('#')[0].split('?')[0];
  // Skip true external URLs (already handled by archive-host check above)
  if (/^https?:\/\//i.test(url) && !CONFLUENCE_ARCHIVE_HOST_RE.test(url)) return false;
  // mailto / tel / doc:slug -- skip
  if (/^(mailto|tel|doc):/i.test(url)) return false;
  return CONFLUENCE_EXPORT_RE.test(pathPart);
}

export function check({ file, mdast, reporter }) {
  visit(mdast, (node) => {
    if (node.type !== 'link' && node.type !== 'image' && node.type !== 'definition') return;
    if (!isConfluenceLink(node.url)) return;
    reporter.add({
      file,
      line: node.position?.start.line,
      col: node.position?.start.column ?? 1,
      rule: 'confluence-html-link',
      severity: 'error',
      message: `Confluence-export link target \`${node.url}\` -- the original Confluence page is gone; repoint at the current in-repo doc`,
    });
  });
}
