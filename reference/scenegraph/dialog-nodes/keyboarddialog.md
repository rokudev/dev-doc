---
title: Keyboarddialog
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

# KeyboardDialog

> Roku OS 10.0 introduced a new [StandardKeyboardDialog node](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md "**Standard Keyboard Dialog**"), which features updated graphics, color palette support, and voice entry support. This enables developers to provide a consistent user experience across the keyboard dialogs in their app, and help speed up customer sign-ups and sign-ins. Developers must replace the legacy KeyboardDialog nodes in their app with the new [StandardKeyboardDialog node](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md "**Standard Keyboard Dialog**"). 
>
> To upgrade a legacy keyboard dialog to the standard version, prepend "Standard" to the node type. For example, change `      keyboarddialog = createObject("roSGNode", "KeyboardDialog")` to `      keyboarddialog = createObject("roSGNode", "StandardKeyboardDialog")`.

Extends [**Dialog**](/docs/references/scenegraph/dialog-nodes/dialog.md "**Dialog**")

The KeyboardDialog node class is a special type of Dialog node that prompts the user to enter an alphanumeric text string. The KeyboardDialog node class includes an interrnal Keyboard node to allow the user to enter the string.

The KeyboardDialog allows you to add a title (by setting the Dialog title field), a help message (by setting the Dialog message field), and a set of action buttons (by setting the Dialog node buttons field). The bulletText and graphicUrl fields of the Dialog node should not be set. If those Dialog node fields are set, the layout of the dialog will likely not look correct.

Also, the KeyboardDialog node class inherits the behavior of the interrnal [Keyboard](/docs/references/scenegraph/widget-nodes/keyboard.md "Keyboard") node when the Options remote key is pressed. The Keyboard node class toggles between uppercase and lowercase letters when the Options remote key is pressed, to speed the entry of mixed-case strings by the user. Therefore, the optionsDialog field of the Dialog node class should not be set to true.

Typically, you will want to set the KeyboardDialog node title field to prompt the user to enter the string, and add "OK" and "Cancel" buttons by setting the Dialog node buttons field to [ "OK", "Cancel" ], then observe the Dialog node class buttonSelected field to react when the user presses one of those buttons. At any time, the text field can be accessed to obtain the string entered by the user.

Another typical usage of the KeyboardDialog node class adds a "Hide Text" button, with an observer function set up to toggle the secureMode field of the Keyboard node internal TextEditBox node (that is, by toggling the value of the keyboard.textEditBox.secureMode field).

## Fields

| Field                  | Type              | Default                                   | Access Permission | Description           |
| ---------------------- | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| text                   | string            | ""                                        | READ_WRITE        | Can be used to explicitly set the internal Keyboard node text string, as well as to access the string entered by the user |
| keyboard               | Keyboard node     | system default                            | READ_ONLY         | Provides access to the internal Keyboard node. The field is read-only, but the fields of the Keyboard node it refers to can be read and written, allowing you to fully customize the Keyboard node appearance and behavior |

## Sample app
[KeyboardDialogExample](https://github.com/rokudev/samples/tree/master/ux%20components/dialogs/KeyboardDialogExample) is a sample app demonstrating KeyboardDialog in action.
