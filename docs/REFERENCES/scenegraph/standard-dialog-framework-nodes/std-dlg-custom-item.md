---
title: "StdDlgCustomItem"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---




Extends [StdDlgItemBase](doc:std-dlg-item-base)

The **StdDlgCustomItem** node is used to display free-form dialog items in the content area that require a custom layout.

![roku400px -  - custom-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-custom-item-multi-column.jpeg)

## Fields

| Field           | Type  | Default | Access Permission | Description                                                  |
| :-------------- | :---- | :------ | :---------------- | :----------------------------------------------------------- |
| widthField      | float | 0       | READ_ONLY         | The width of the custom item, which is enforced by the content area's layout algorithm. |
| fixedWidthField | float | 0       | READ_WRITE        | Specifies the desired width of the custom item, which is passed to the content area's layout algorithm. This field is typically specified when the custom item includes a [DynamicCustomKeyboard node](doc:dynamic-custom-keyboard), which has a width that is determined by the KDF file of the custom keyboard. |

> To enable a **StdDlgCustomItem** node to gain focus (for example, if it includes a custom keyboard node), set its **focusable** field to true (this field is inherited from the base [Node class](doc:node)).

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses a custom item.