---
title: "StandardMessageDialog"
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




Extends [StandardDialog](doc:standard-dialog)

The **StandardMessageDialog** node is used to displays a message to the user. It is similar to the legacy [Dialog](doc:dialog) node. It may contain the following items (from top to bottom):

- One or more blocks of text at the top.
- One bulleted / numbered list.
- One or more blocks of text at the bottom.

![roku815px - standard-message-dialog](https://image.roku.com/ZHZscHItMTc2/standard-message-dialog.jpg)

## Structure

The StandardMessageDialog is comprised of the following areas and building block nodes:

- StdDlgTitleArea.
- StdDlgContentArea, which may contain the following items:
  - Zero or more StdDlgTextItem nodes (the block(s) of text with the main message).
  - Zero or more StdDlgBulletTextItem nodes (bulleted/numbered list).
  - Zero or more StdDlgTextItem nodes (the block(s) of text with the bottom message).
- StdDlgButtonArea, which may contain zero or more StdDlgButton nodes. 

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
<td>title</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>The title to be displayed at the top of the dialog.</td>
</tr>
<tr>
<td>message</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>One or more blocks of informational text displayed at the top of the dialog's content area. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks.<br /><blockquote><p>To separate lines of text, add each line as an element in the array. Do not use newline characters.</p></blockquote></td>
</tr>
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
<td>If the <strong>bulletText</strong> field is set, specifies the type of list item delimiter, which may be one of the following:<br /><ul><li>"bullet" (this is the default)</li><li>"numbered"</li><li>"lettered"</li></ul>.</td>
</tr>
<tr>
<td>bottomMessage</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>One or more blocks of informational text displayed at the bottom of the dialog's content area. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks.<br /><blockquote><p>To separate lines of text, add each line as an element in the array. Do not use newline characters.</p></blockquote></td>
</tr>
<tr>
<td>buttons</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area.<br /><blockquote><p>Minimize the number of buttons in the dialog to ensure they are all visible when the dialog is displayed.</p></blockquote></td>
</tr>
</tbody>
</table>






## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a standard message dialog.