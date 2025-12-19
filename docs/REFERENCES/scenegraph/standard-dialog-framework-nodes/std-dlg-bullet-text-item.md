---
title: Std Dlg Bullet Text Item
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

# StdDlgBulletTextItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgBulletTextItem** node is used to display a bulleted list of text in the dialog's content area. It should only be used as a child of a [**StdDlgContentArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node. 

![roku815px - StdDlgBulletTextItem](https://image.roku.com/ZHZscHItMTc2/StdDlgBulletTextItem-v2.jpg)

## Fields

| Field      | Type            | Default  | Access Permission | Description                                                  |
| :--------- | :-------------- | :------- | :---------------- | :----------------------------------------------------------- |
| bulletText | array of strings | [ ]      | READ_WRITE        | An array of strings displayed as a bulleted or numbered list. The list is displayed in the content area below the message and above the bottom message. |
| bulletType | string          | "bullet" | READ_WRITE        | Specifies the type of list item delimiter, which may be one of the following:<br />${bullet-type-list} |

{#bullet-type-list}

- "bullet"
- "numbered"
- "lettered"

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the bullet text item.