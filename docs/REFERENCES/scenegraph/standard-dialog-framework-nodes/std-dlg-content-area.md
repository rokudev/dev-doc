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

# StdDlgContentArea



Extends [StdDlgAreaBase](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md "**StdDlgAreaBase**")

The **StdDlgContentArea** node contains the main body of the dialog. It is positioned between the title area and the button area.

It contains zero or more child nodes that extend [**StdDlgItemBase**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md) (for example, [**StdDlgTextItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md), [**StdDlgProgressItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md), [**StdDlgGraphicItem**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md), and other dialog building blocks). The layout and position of the [**StdDlgItemBase** nodes](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md) are based on the dialog's width; the nodes are arranged vertically from top to bottom in the content area based on the order in which they are listed. The content area should contain only [**StdDlgItemBase** nodes](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md); otherwise, its layout and rendering are undefined.

![roku815px - content-area](https://image.roku.com/ZHZscHItMTc2/content-area.jpg)

## Fields

The **StdDlgContentArea** node does not have any fields.
