---
title: "StdDlgProgressItem"
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

The **StdDlgProgressItem** node is used to display a spinning progress indicator in the dialog's content area. It provides the status of a task that takes an indeterminate amount of time. It should only be used as a child of a [**StdDlgContentArea**](doc:std-dlg-content-area) node.

![roku815px - std-dlg-progress-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-progress-item.jpg)

## Fields

| Field | Type   | Default | Access Permission | Description                                                  |
| :---- | :----- | :------ | :---------------- | :----------------------------------------------------------- |
| text  | string | ""      | READ_WRITE        | Specifies the text to be displayed next to the progress graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines. |

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the progress item.