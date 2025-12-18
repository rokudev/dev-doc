---
title: Std Dlg Graphic Item
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

# StdDlgGraphicItem



Extends [StdDlgItemBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md "**StdDlgItemBase**")

The **StdDlgGraphicItem** node is used to display an image in the dialog's content area with an optional text label displayed to the left, right, above, or below the image. It should only be used as a child of a [**StdDlgContentArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-content-area.md) node.

![roku815px - std-dlg-graphic-item](https://image.roku.com/ZHZscHItMTc2/std-dlg-graphic-item.jpg)

## Fields

| Field         | Type   | Default | Access Permission | Description                                                  |
| :------------ | :----- | :------ | :---------------- | :----------------------------------------------------------- |
| text          | string | ""      | READ_WRITE        | Specifies the text to be displayed next to the graphic. If the text width does not fit within the width of the content area, the text will wrap onto multiple lines. |
| graphicUri    | uri    | ""      | READ_WRITE        | The URI of the image to be displayed.                        |
| graphicWidth  | float  | 0       | READ_WRITE        | The image width to be used instead of the image's actual width. |
| graphicHeight | float  | 0       | READ_WRITE        | The image height to be used instead of the image's actual height. |
| graphicAlign  | string | "left"  | READ_WRITE        | Specifies where to position and align the graphic and its text label, relative to the content area. This may be one of the following values:<br />${graphic-align-table} |

{#graphic-align-table}

| Value        | Text Position                                                |
| :----------- | :----------------------------------------------------------- |
| left         | The graphic is left-aligned in the content area.<br />The text label is positioned horizontally to the right of the graphic, and centered vertically. |
| right        | The graphic is right-aligned in the content area.<br />The text label is positioned horizontally to the left of the graphic, and centered vertically. |
| center_below | The graphic and text label are centered horizontally in the content area.<br />The graphic is positioned below the text label. |
| center_above | The graphic and text label are centered horizontally in the content area.<br />The graphic is positioned above the text label. |