---
title: "StandardKeyboardDialog"
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

The **StandardKeyboardDialog** node enables text and voice entry of strings consisting of alphanumeric characters as well as many commonly used symbols. It is similar to the legacy [KeyboardDialog](/docs/references/scenegraph/dialog-nodes/keyboarddialog.md) node, but includes voice entry functionality, which is provided through its internal **DynamicKeyboard** node.

![roku815px - keyboard-dialog](https://image.roku.com/ZHZscHItMTc2/keyboard-dialog.jpg)

## Structure

The StandardKeyboardDialog is comprised of the following areas and building block nodes:

- StdDlgTitleArea.
- StdDlgContentArea, which may contain the following items:
  - Zero or more StdDlgTextItem nodes.
  - One StdDlgKeyboardItem containing a DynamicKeyboard node
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
<td>The internal VoiceTextEditBox node used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node.</td>
</tr>
<tr>
<td>keyboardDomain</td>
<td>string</td>
<td>"generic"</td>
<td>READ_WRITE</td>
<td>The type of text to be entered. This may be used by the keyboard to modify the voice entry method and to determine when a valid string has been entered. This may be one of the following values:<br /><ul><li>"email": letter-by-letter dictation for emails.</li><li>"numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.</li><li>"alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.</li><li>"generic": Full word input for search queries or other sequences of numbers, letters and symbols.</li><li>"password": letter-by-letter dication for passwords.</li></ul></td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string.</td>
</tr>
</tbody>
</table>





## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a standard keyboard dialog.