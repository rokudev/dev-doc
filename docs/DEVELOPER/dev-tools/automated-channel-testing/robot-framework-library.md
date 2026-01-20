---
title: Roku Robot Framework Library
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
<HTMLBlock>{`
<div class="markdown-body developer-content-body"><h1 id="roku-robot-framework-library">Roku Robot Framework Library</h1>
<p>Roku's Robot Framework Library enables keyword-driven testing of apps. The library resides in a Python class that has methods that map directly to keyword names. The keywords take the same arguments as the methods implementing them. The keywords report failures with exceptions, create logs by writing to standard output, and return values using the <code>return</code> statement.</p>
<h2 id="instantiating-the-library">Instantiating the library</h2>
<p>To create an instance of the Roku Framework Robot Library, provide the following four arguments:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">ip</td>
<td class="long-line">The IP address of the device to be used for testing.</td>
</tr>
<tr>
<td class="short-line">path</td>
<td class="short-line">The path to the Roku WebDriver.</td>
</tr>
<tr>
<td class="short-line">timeout</td>
<td class="long-line">The amount of time (in milliseconds) that commands are allowed to run.</td>
</tr>
<tr>
<td class="short-line">pressDelay</td>
<td class="long-line">The amount of time (in milliseconds) between keypress commands. This argument works with the <strong>Send keys</strong> command.</td>
</tr>
</tbody>
</table></div>
<p>The following example demonstrates how to instantiate the Roku Robot Framework Library:</p>
<pre><code>*** Settings ***
Library ./../Library/RobotLibrary.py  $\{ip_address}  $\{timeout}  $\{pressDelay}   $\{server_path}
`}</HTMLBlock>

<br />
