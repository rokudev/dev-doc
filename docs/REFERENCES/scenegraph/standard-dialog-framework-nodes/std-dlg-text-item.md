---
title: "StdDlgTextItem"
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




Extends [StdDlgItemBase](doc:std-dlg-item-base)

The **StdDlgTextItem** node is used to display a block of text. It should only be used as a child of a [**StdDlgContentArea**](doc:std-dlg-content-area) node.

![roku815px - StdDlgTextItem](https://image.roku.com/ZHZscHItMTc2/std-dlg-text-item.jpg)

> To separate lines of text, use multiple **StdDlgTextItem** nodes. Do not use newline characters.

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
<td>text</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the text to be displayed. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines.</td>
</tr>
<tr>
<td>namedTextStyle</td>
<td>string</td>
<td>"normal"</td>
<td>READ_WRITE</td>
<td>Specifies a named style to be used for the displayed text's color and font. The supported styles include:<br /><table><thead><tr><th>Style Name</th><th>Palette Color</th><th>Font</th></tr></thead><tbody><tr><td>"normal"</td><td>DialogTextColor</td><td>SmallSystemFont</td></tr><tr><td>"secondary"</td><td>DialogSecondaryTextColor</td><td>SmallestSystemFont</td></tr><tr><td>"bold"</td><td>DialogTextColor</td><td>SmallBoldSystemFont</td></tr></tbody></table></td>
</tr>
<tr>
<td>audioGuideText</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the string to be spoken when the screen reader reads the text item. By default, the screen reader reads the string specified in the <strong>text</strong> field.</td>
</tr>
</tbody>
</table>



## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the text item.