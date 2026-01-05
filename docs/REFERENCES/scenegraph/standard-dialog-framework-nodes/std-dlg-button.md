---
title: "StdDlgButton"
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

# StdDlgButton



Extends [Group](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

**StdDlgButton** is the class used for each button in the [button area](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog-framework-overview.md#structure). The buttons are displayed in the order in which they are listed as children of the [**StdDlgButtonArea** node](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md). The size and layout of each button are controlled by the StandardDialog layout algorithm. **StdDlgButton** nodes should only be used as children of a **StdDlgButtonArea** node. 

![roku815px - std-dlg-button](https://image.roku.com/ZHZscHItMTc2/std-dlg-button-3.jpg)

## Fields

| Field    | Type    | Default | Access Permission | Description                                                  |
| :------- | :------ | :------ | :---------------- | :----------------------------------------------------------- |
| text     | string  | ""      | READ_WRITE        | The text to be displayed on the button                       |
| disabled | boolean | false   | READ_WRITE        | Specifies whether the button can receive focus. If this field is set to true, the button has an inactive appearance and is unable to receive focus. |