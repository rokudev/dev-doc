---
title: Pindialog
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

# PinDialog

> Roku OS 10.0 introduced a new [StandardPinPadDialog node](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md "**Standard PinPad Dialog**"), which features updated graphics, color palette support, and voice entry support. This enables developers to provide a consistent user experience across the PIN pad dialogs in their app, and help speed up customer sign-ups and sign-ins. Developers must replace the legacy PinDialog nodes in their app with the new [StandardPinPadDialog node](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-pinpad-dialog.md "**Standard PinPad Dialog**"). 
>
> To upgrade a legacy pinpad dialog to the standard version, prepend "Standard" to the node type. For example, change `      pindialog = createObject("roSGNode", "PinDialog")` to `      pindialog = createObject("roSGNode", "StandardPinDialog")`.

Extends [**Dialog**](/docs/references/scenegraph/dialog-nodes/dialog.md "**Dialog**")

The PinDialog node class is a special type of Dialog node that prompts the user to enter a numeric string. The PinDialog node class includes an internal [PinPad](/docs/references/scenegraph/widget-nodes/pinpad.md "PinPad") node to allow the user to input a numeric value, such as a PIN.

The PinDialog node class allows you to add a title (by setting the Dialog node title field), a message (by setting the Dialog node message field), and a set of action buttons (by setting the Dialog node buttons field). The bulletText and graphicUrl fields of the Dialog node should not be set. If those fields are set, the layout of the PinDialog node will likely not look correct.

Typically, you will want to set the Dialog node title field to prompt the user to enter a PIN, and add "OK" and "Cancel" buttons by setting the Dialog node buttons field to [ "OK", "Cancel" ], then observe the Dialog node buttonSelected field to react when the user presses one of those buttons. At any time, the PinDialog node pin field can be accessed to obtain the PIN value entered by the user.

The PinDialog node displays a privacy hint at the bottom of the dialog instructing the user how to show/hide the PinPad node focus indicator with the Options remote key. This provides more privacy for the user when entering a PIN. You should not override this default behavior of the Options remote key in the PinDialog node.

## Fields

| Field            | Type        | Default        | Access Permission | Description                                                  |
| ---------------- | ----------- | -------------- | ----------------- | ------------------------------------------------------------ |
| pin              | string      | ""             | READ_WRITE        | Can be used to explicitly set the internal PinPad node PIN value, as well as to access the PIN value entered by the user |
| pinPad           | PinPad node | system default | READ_ONLY         | Provides access to the PinDialog node internal PinPad node. The field is read-only, but the fields of the PinPad node it refers to can be read and written, allowing you to fully customize the PinPad node appearance and behavior |
| privacyHintColor | color       | system default | READ_WRITE        | When set, the color of the privacy hint shown at the bottom of the dialog |
| pinPadFocused    | boolean     | true           | READ_WRITE        | Specifies whether or not PinPad will be focused when PinDialog is created |

## Sample app
[PinDialogExample](https://github.com/rokudev/samples/tree/master/ux%20components/dialogs/PinDialogExample) is a sample app demonstrating PinDialog in action.
