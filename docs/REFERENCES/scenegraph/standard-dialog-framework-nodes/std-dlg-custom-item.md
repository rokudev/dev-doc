---
title: "StdDlgCustomItem"
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

# StdDlgCustomItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgCustomItem** node is used to display free-form dialog items in the content area that require a custom layout.

![roku400px -  - custom-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-custom-item-multi-column.jpeg)

## Fields

| Field           | Type  | Default | Access Permission | Description                                                  |
| :-------------- | :---- | :------ | :---------------- | :----------------------------------------------------------- |
| widthField      | float | 0       | READ_ONLY         | The width of the custom item, which is enforced by the content area's layout algorithm. |
| fixedWidthField | float | 0       | READ_WRITE        | Specifies the desired width of the custom item, which is passed to the content area's layout algorithm. This field is typically specified when the custom item includes a [DynamicCustomKeyboard node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md), which has a width that is determined by the KDF file of the custom keyboard. |

> To enable a **StdDlgCustomItem** node to gain focus (for example, if it includes a custom keyboard node), set its **focusable** field to true (this field is inherited from the base [Node class](/docs/references/scenegraph/node.md)).

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses a custom item.