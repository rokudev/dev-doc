---
title: Standard Keyboard Dialog
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

# StandardKeyboardDialog



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

| Field          | Type                  | Default                                   | Access Permission | Description                                                  |
| :------------- | :-------------------- | :---------------------------------------- | :---------------- | :----------------------------------------------------------- |
| title          | string                | ""                                        | READ_WRITE        | The title to be displayed at the top of the dialog.          |
| message        | array of strings       | [ ]                                       | READ_WRITE        | One or more blocks of text, which are typically used to describe information about the data to be entered. Each string in the array is displayed as a separate block of text with the standard amount of space left between the blocks.<br />${bq-message-note} |
| buttons        | array of strings       | [ ]                                       | READ_WRITE        | List of buttons to be displayed in the button area at the bottom of the dialog. Each string in the buttons array adds a new button to the button area.<br />${bq-buttons-note} |
| textEditBox    | VoiceTextEditBox node | The keyboard item's VoiceTextEditBox node | READ              | The internal VoiceTextEditBox node used by this dialog's internal keyboard. This field should be used only to access the fields of this internal node. |
| keyboardDomain | string                | "generic"                                 | READ_WRITE        | The type of text to be entered. This may be used by the keyboard to modify the voice entry method and to determine when a valid string has been entered. This may be one of the following values:<br />${keyboard-domain-values} |
| text           | string                | ""                                        | READ_WRITE        | The default string to be displayed in the keyboard's text edit box. When the user enters the text, this field is updated with the currently entered string. |

{#bq-message-note}

> Minimize the message length to avoid having a scrollbar automatically added to the content area. If multiple strings are specified or any string is too long, the dialog may not be able to fit within the height of the display.

{#bq-buttons-note}

> Minimize the number of buttons in the dialog to ensure that all buttons are visible without the user having to scroll up and down. 

{#keyboard-domain-values}

- "email": letter-by-letter dictation for emails.
- "numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.
- "alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.
- "generic": Full word input for search queries or other sequences of numbers, letters and symbols.
- "password": letter-by-letter dication for passwords.

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a standard keyboard dialog.