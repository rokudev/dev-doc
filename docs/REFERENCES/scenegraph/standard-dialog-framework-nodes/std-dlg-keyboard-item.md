---
title: "StdDlgKeyboardItem"
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

The **StdDlgKeyboardItem** node is used to display a keyboard or PINpad in the dialog's content area. It provides text and voice entry of strings containing alphanumeric characters and symbols or numeric digits. It should only be used as a child of a [**StdDlgContentArea**](doc:std-dlg-content-area) node.

![roku815px - std-dlg-keyboard-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-keyboard-item.jpg)

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
<td>keyLayout</td>
<td>string</td>
<td>"unspecified"</td>
<td>READ_WRITE</td>
<td>Specifies the type of keyboard to be displayed:<br /><ul><li>"unspecified": no keyboard is displayed.</li><li>"keyboard": A <a href="/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md"><strong>DynamicKeyboard</strong></a> node is displayed.</li><li>"pinpad": A <a href="/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md"><strong>DynamicPinPad</strong></a> node is displayed.</li></ul></td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string.</td>
</tr>
<tr>
<td>textEditBox</td>
<td>VoiceTextEditBox node</td>
<td>The <a href="/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md"><strong>VoiceTextEditBox</strong></a> associated with the keyboard</td>
<td>READ</td>
<td>The internal <a href="/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md"><strong>VoiceTextEditBox</strong> node</a> used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node.</td>
</tr>
</tbody>
</table>



## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom keyboard dialog that uses the keyboard item.