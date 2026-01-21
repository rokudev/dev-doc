---
title: "StdDlgBulletTextItem"
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

The **StdDlgBulletTextItem** node is used to display a bulleted list of text in the dialog's content area. It should only be used as a child of a [**StdDlgContentArea**](doc:std-dlg-content-area) node. 

![roku815px - StdDlgBulletTextItem](https://image.roku.com/ZHZscHItMTc2/StdDlgBulletTextItem-v2.jpg)

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
<td>bulletText</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>An array of strings displayed as a bulleted or numbered list. The list is displayed in the content area below the message and above the bottom message.</td>
</tr>
<tr>
<td>bulletType</td>
<td>string</td>
<td>"bullet"</td>
<td>READ_WRITE</td>
<td>Specifies the type of list item delimiter, which may be one of the following:<br /><ul><li>"bullet"</li><li>"numbered"</li><li>"lettered"</li></ul></td>
</tr>
</tbody>
</table>



## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the bullet text item.