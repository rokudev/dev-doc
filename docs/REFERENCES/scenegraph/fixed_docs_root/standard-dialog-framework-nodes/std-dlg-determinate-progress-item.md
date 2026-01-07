---
title: "StdDlgDeterminateProgressItem"
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

# StdDlgDeterminateProgressItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgDeterminateProgressItem** node is used to display a progress indicator in the dialog's content area. It provides the percentage of progress that has been completed for a task that takes a limited amount of time. It should only be used as a child of a [**StdDlgContentArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node.

![roku815px - std-dlg-determinate-progress-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-determinate-progress-item-2.jpg)

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>percent</td>
<td>string</td>
<td>"0"</td>
<td>READ_WRITE</td>
<td>Specifies the current completion percentage text and graphic to be displayed (for example "35%" with more than a third of the indicator filled). <br /><br />If this is set to a number less than 0 or greater than 100, the progress indicator will display "0%" or "100%" completion, respectively.</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the text to be displayed next to the progress graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.</td>
</tr>
</tbody>
</table>


## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the determinate progress item.