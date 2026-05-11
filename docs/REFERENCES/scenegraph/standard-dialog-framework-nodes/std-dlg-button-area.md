---
title: "StdDlgButtonArea"
excerpt: 'Node that holds StdDlgButton children at the bottom of a StandardDialog'
deprecated: false
hidden: false
metadata:
  title: 'StdDlgButtonArea'
  description: 'StdDlgButtonArea is a node positioned at the bottom of a StandardDialog, containing zero or more StdDlgButton child nodes arranged vertically.'
  robots: index
next:
  description: ''
---




Extends [StdDlgAreaBase](doc:std-dlg-area-base)

The **StdDlgButtonArea** node is always positioned at the bottom of the [StandardDialog](doc:standard-dialog). It contains zero or more child nodes of type [**StdDlgButton**](doc:std-dlg-button) or a type that extends **StdDlgButton**. Each of the **StdDlgButton** nodes provides an option to perform some task related to the purpose of the dialog. For example, dialogs often have "Continue" and "Cancel" buttons in the bottom area. The buttons are positioned and sized so that they are arranged vertically in the order in which their **StdDlgButton** child nodes are listed.

A dialog may only have a single button area, and the button area is optional.

![roku815px - std-dlg-button-area](https://image.roku.com/ZHZscHItMTc2/std-dlg-button-area.jpg)

## Fields

The **StdDlgButtonArea** node does not have any fields.