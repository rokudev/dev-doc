---
title: "StdDlgItemGroup"
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

The **StdDlgItemGroup** node is used to visually group a set of StdDlgAreaBase child nodes in a custom dialog. Developers can use this node to reduce the vertical spacing between the StdDlgItemBase child nodes. For [**StdDlgActionCardItem**](doc:std-dlg-action-card-item) nodes, the **StdDlgItemGroup** node enforces the rule that when multiple items **StdDlgActionCardItem** nodes have their **iconType** field set to "radiobutton", only one may have its **selected** status be set to "true".

The **StdDlgItemGroup** node may contain one or more [**StdDlgItemBase**](doc:std-dlg-item-base) child nodes (for example, StdDlgTextItem, StdDlgGraphicItem, and so on) as its children. It will visually group those child **StdDlgItemBase** nodes by reducing the amount of vertical space between them. However, the primary benefit of the StdDlgItemGroup node is managing **StdDlgActionCardItem** child nodes that have their **iconType** field set to "radiobutton".

![roku815px - actionCards-radio-checkbox-items](https://image.roku.com/ZHZscHItMTc2/actionCards-radio-checkbox-items.jpg)

> See the [**stdDlgActionCardItem** documentation](doc:std-dlg-action-card-item) for code demonstarting how to use the **StdDlgItemGroup** node in a custom dialog.

#### Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>selectedIndex</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>The index of the currently selected <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-area-base.md">StdDlgAreaBase</a> child node. This field is updated when the user selects any of the <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md">StdDlgActionCardItem</a> child nodes.<br /><br />This field can also be updated via BrightScript to change which child node in the StdDlgItemGroup is selected.<br /><br />When this field is updated and it corresponds to a <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md">StdDlgActionCardItem</a> node that has its <strong>iconType</strong> field set to "radiobutton", the <strong>StdDlgItemGroup</strong> node enforces the "only 1 of <em>n</em>" rule for radio buttons by setting the <strong>iconStatus</strong> field of the other radio button action card items to "false".</td>
</tr>
</tbody>
</table>


## Sample app

You can download and install a [sample app](https://github.com/rokudev/standard-dialog-framework) that demonstrates how to create a custom dialog that includes action card items in an item group.