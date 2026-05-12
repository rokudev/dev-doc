---
title: Dialog Nodes
excerpt: 'The legacy dialog node classes: Dialog, KeyboardDialog, PinDialog, and ProgressDialog. Superseded by the Standard dialog framework.'
deprecated: false
hidden: false
metadata:
  title: 'Dialog Nodes'
  description: 'The legacy dialog nodes let you display modal pop-up dialogs in your SceneGraph app. This page covers Dialog, KeyboardDialog, PinDialog, and ProgressDialog, and points to the Standard dialog framework that replaces them.'
  robots: index
next:
  description: ''
---
> The dialog nodes documented in this section have been superseded by the [Standard dialog framework](doc:standard-dialog-framework-nodes), which provides updated graphics, color palette support, voice entry, and a more flexible structure. New apps should use the standard dialog nodes; this section is preserved for reference and for apps maintaining the legacy implementation.

A dialog is a modal pop-up that can include a title, message, bullet text, a graphic, and a group of buttons. It intercepts all key events except the Home and Back keys, and only one dialog can be visible at a time.

## Choosing a node

| Node | Use case |
| :--- | :--- |
| [Dialog](doc:dialog) | The base modal dialog. Supports title, message, bullet list, graphic, and buttons. |
| [KeyboardDialog](doc:keyboarddialog) | A dialog with an embedded keyboard for alphanumeric text entry. |
| [PinDialog](doc:pindialog) | A dialog with an embedded pin pad for numeric entry. |
| [ProgressDialog](doc:progressdialog) | A dialog displaying a spinning progress indicator. |

KeyboardDialog, PinDialog, and ProgressDialog all extend [Dialog](doc:dialog), so the fields documented on the Dialog page are inherited by each.

## Looking for something else?

* **Building a new dialog?** Use the [Standard dialog framework](doc:standard-dialog-framework-nodes). It provides pre-built [StandardMessageDialog](doc:standard-message-dialog), [StandardKeyboardDialog](doc:standard-keyboard-dialog), [StandardPinPadDialog](doc:standard-pinpad-dialog), and [StandardProgressDialog](doc:standard-progress-dialog) nodes, plus building blocks for composing custom dialogs.
* **Adding voice entry to a keyboard or pin pad dialog?** Voice entry is supported only by the [Standard dialog framework](doc:standard-dialog-framework-nodes) nodes, not the legacy variants in this section.
