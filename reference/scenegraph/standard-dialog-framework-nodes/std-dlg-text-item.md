---
title: Std Dlg Text Item
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

# StdDlgTextItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgTextItem** node is used to display a block of text. It should only be used as a child of a [**StdDlgContentArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node.

![roku815px - StdDlgTextItem](https://image.roku.com/ZHZscHItMTc2/std-dlg-text-item.jpg)

> To separate lines of text, use multiple **StdDlgTextItem** nodes. Do not use newline characters.

## Fields

| Field          | Type   | Default  | Access Permission | Description                                                  |
| :------------- | :----- | :------- | :---------------- | :----------------------------------------------------------- |
| text           | string | ""       | READ_WRITE        | Specifies the text to be displayed. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines. |
| namedTextStyle | string | "normal" | READ_WRITE        | Specifies a named style to be used for the displayed text's color and font. The supported styles include:<br />${named-text-style-table} |
| audioGuideText | string | ""       | READ_WRITE        | Specifies the string to be spoken when the screen reader reads the text item. By default, the screen reader reads the string specified in the **text** field. |

{#named-text-style-table}

| Style Name  | Palette Color            | Font                |
| :---------- | :----------------------- | :------------------ |
| "normal"    | DialogTextColor          | SmallSystemFont     |
| "secondary" | DialogSecondaryTextColor | SmallestSystemFont  |
| "bold"      | DialogTextColor          | SmallBoldSystemFont |

## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that uses the text item.