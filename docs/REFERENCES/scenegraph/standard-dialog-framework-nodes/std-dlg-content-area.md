---
title: "StdDlgContentArea"
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




Extends [StdDlgAreaBase](doc:std-dlg-area-base)

The **StdDlgContentArea** node contains the main body of the dialog. It is positioned between the title area and the button area.

It contains zero or more child nodes that extend [**StdDlgItemBase**](doc:std-dlg-item-base) (for example, [**StdDlgTextItem**](doc:std-dlg-text-item), [**StdDlgProgressItem**](doc:std-dlg-progress-item), [**StdDlgGraphicItem**](doc:std-dlg-graphic-item), and other dialog building blocks). The layout and position of the [**StdDlgItemBase** nodes](doc:std-dlg-item-base) are based on the dialog's width; the nodes are arranged vertically from top to bottom in the content area based on the order in which they are listed. The content area should contain only [**StdDlgItemBase** nodes](doc:std-dlg-item-base); otherwise, its layout and rendering are undefined.

![roku815px - content-area](https://image.roku.com/ZHZscHItMTc2/content-area.jpg)

## Fields

The **StdDlgContentArea** node does not have any fields.