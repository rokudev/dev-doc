---
title: Std Dlg Keyboard Item
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

# StdDlgKeyboardItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgKeyboardItem** node is used to display a keyboard or PINpad in the dialog's content area. It provides text and voice entry of strings containing alphanumeric characters and symbols or numeric digits. It should only be used as a child of a [**StdDlgContentArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node.

![roku815px - std-dlg-keyboard-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-keyboard-item.jpg)

## Fields

| Field       | Type                  | Default                                                      | Access Permission | Description                                                  |
| :---------- | :-------------------- | :----------------------------------------------------------- | :---------------- | :----------------------------------------------------------- |
| keyLayout   | string                | "unspecified"                                                | READ_WRITE        | Specifies the type of keyboard to be displayed:<br />${key-layout-list} |
| text        | string                | ""                                                           | READ_WRITE        | The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string. |
| textEditBox | VoiceTextEditBox node | The [**VoiceTextEditBox**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) associated with the keyboard | READ              | The internal [**VoiceTextEditBox** node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node. |

{#key-layout-list}

- "unspecified": no keyboard is displayed.
- "keyboard": A [**DynamicKeyboard**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md) node is displayed.
- "pinpad": A [**DynamicPinPad**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md) node is displayed.

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom keyboard dialog that uses the keyboard item.