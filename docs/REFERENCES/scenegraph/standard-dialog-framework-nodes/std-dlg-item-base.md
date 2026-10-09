---
title: StdDlgItemBase
excerpt: Base class providing common functionality for all StdDlg item nodes
deprecated: false
hidden: false
metadata:
  title: StdDlgItemBase
  description: >-
    Reference page for StdDlgItemBase. StdDlgItemBase is the base class for all
    content area items.
  robots: index
next:
  description: ''
---
Extends [Group](doc:group)

**StdDlgItemBase** is the base class for all the content area items. It provides the common functionality for all StdDlg[_x_]Item nodes (for example, [**StdDlgBulletTextItem**](doc:std-dlg-bullet-text-item), [**StdDlgTextItem**](doc:std-dlg-text-item), [**StdDlgKeyboardItem**](doc:std-dlg-keyboard-item), [**StdDlgProgressItem**](doc:std-dlg-progress-item), [**StdDlgGraphicItem**](doc:std-dlg-graphic-item), and the other dialog building block nodes).

## Fields

| Field      | Type    | Default | Access Permission | Description                                                                                                                                                                                                                      |
| :--------- | :------ | :------ | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scrollable | boolean | false   | READ_WRITE        | Indicates whether the item can be scrolled vertically by the user. The StandardDialog layout algorithm reduces the height of a scrollable item as needed if the overall height of the dialog is too large to fit on the display. |
