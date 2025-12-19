---
title: Std Dlg Title Area
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

# StdDlgTitleArea



Extends [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md "**StdDlgAreaBase**")

The **StdDlgTitleArea** node contains the dialog's title information, which is always displayed at the top of the dialog. The title area may also include optional icons that appear left or right justified. The **StdDlgTitleArea** should only be used as a child node of a [**StandardDialog**](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md). 

A dialog may contain a single title area, and the title area is optional (but is typically used in nearly all cases)

![roku815px - title-area-icon](https://image.roku.com/ZHZscHItMTc2/title-area-icon.jpg)

## Fields

| Field                   | Type   | Default | Access Permission | Description                                                  |
| :---------------------- | :----- | :------ | :---------------- | :----------------------------------------------------------- |
| primaryTitle            | string | ""      | READ_WRITE        | Specifies the title to be displayed in the dialog's title area. |
| primaryIcon             | URL    | ""      | READ_WRITE        | Specifies a bitmap to be displayed at the left edge of the dialog's title area (to the left of dialog's primary title). |
| primaryIconVertOffset   | float  | 0.0f    | READ_WRITE        | Adjusts the vertical position of the primary icon relative to the baseline of the dialog's primary title. By default, the bottom of the primary icon is aligned with the primary title's baseline. |
| secondaryIcon           | URL    | ""      | READ_WRITE        | Specifies a bitmap to be displayed at the right edge of the dialog's title area. |
| secondaryIconVertOffset | float  | 0.0f    | READ_WRITE        | Adjusts the vertical position of the secondary icon relative to the baseline of the dialog's primary title. By default, the bottom of the secondary icon is aligned with the primary title's baseline. |