---
title: "StandardPinPadDialog"
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




Extends [StandardDialog](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md "**Standard Dialog**")

The **StandardPinPadDialog** node enables text and voice entry of numeric characters—typically, short numeric PIN codes. It is similar to the legacy [PinDialog](/docs/references/scenegraph/dialog-nodes/pindialog.md) node, but includes additional voice entry of the numeric digits. This additional functionality is provided through the node's internal DynamicPinPad and VoiceTextEditBox nodes.

![roku815px - pin-pad-dialog](https://image.roku.com/ZHZscHItMTc2/pin-pad-dialog.jpg)

## Structure

The StandardKeyboardDialog is comprised of the following areas and building block nodes:

- StdDlgTitleArea.
- StdDlgContentArea, which may contain the following items:
  - Zero or more StdDlgTextItem nodes.
  - One StdDlgKeyboardItem containing a DynamicPinPad node
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
<td>One or more blocks of text, which are typically used to describe information about the data to be entered. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks.<br /><blockquote><p>Minimize the message length to avoid having a scrollbar automatically added to the content area. If multiple strings are specified or any string is too long, the dialog may not be able to fit within the height of the display.</p></blockquote></td>
</tr>
<tr>
<td>buttons</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area.<br /><blockquote><p>Minimize the number of buttons in the dialog to ensure that all buttons are visible without the user having to scroll up and down.</p></blockquote></td>
</tr>
<tr>
<td>textEditBox</td>
<td>VoiceTextEditBox node</td>
<td>The keyboard item's VoiceTextEditBox node</td>
<td>READ</td>
<td>The internal VoiceTextEditBox node used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node<br /><blockquote><p>Use the <strong>textEditBox.maxTextLength</strong> field to limit the length of the pin to be entered.</p></blockquote></td>
</tr>
<tr>
<td>pin</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Displays the entered PIN number in the text edit box. As the user enters each numeric digit, this field is updated with the currently entered value.</td>
</tr>
</tbody>
</table>





## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a standard PINPad dialog.