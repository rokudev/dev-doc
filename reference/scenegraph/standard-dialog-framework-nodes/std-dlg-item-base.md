---
title: Std Dlg Item Base
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

# StdDlgItemBase



Extends [Group](/docs/references/scenegraph/layout-group-nodes/group.md)

**StdDlgItemBase** is the base class for all the content area items. It provides the common functionality for all StdDlg[*x*]Item nodes (for example, [**StdDlgBulletTextItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-bullet-text-item.md), [**StdDlgTextItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md), [**StdDlgKeyboardItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-keyboard-item.md), [**StdDlgProgressItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md), [**StdDlgGraphicItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md), and the other dialog building block nodes).

## Fields

| Field      | Type    | Default | Access Permission | Description                                                  |
| :--------- | :------ | :------ | :---------------- | :----------------------------------------------------------- |
| scrollable | boolean | false   | READ_WRITE        | Indicates whether the item can be scrolled vertically by the user. The StandardDialog layout algorithm reduces the height of a scrollable item as needed if the overall height of the dialog is too large to fit on the display. |

