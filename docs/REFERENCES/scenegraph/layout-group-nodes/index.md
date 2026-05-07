---
title: "Layout group nodes"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---


Extends [**Group**](doc:group)

The LayoutGroup node class manages the position of its child nodes by arranging them in a row from left to right (horizontal layout), or in a column from top to bottom (vertical layout). Fields provide options to control the spacing between children, the horizontal and vertical alignment, and the margins around the edges of the group.

## Fields


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
<td>layoutDirection</td>
<td>string</td>
<td>vert</td>
<td>READ_WRITE</td>
<td>Controls the layout direction <table><thead><tr><th>Value</th><th>Use</th></tr></thead><tbody><tr><td>horiz</td><td>Positions the children in a row from left to right</td></tr><tr><td>vert</td><td>Positions the children in a column from top to bottom</td></tr></tbody></table></td>
</tr>
<tr>
<td>horizAlignment</td>
<td>string</td>
<td>left</td>
<td>READ_WRITE</td>
<td>Specifies the alignment point in the horizontal direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert <table><thead><tr><th>Value</th><th>layoutDirection</th><th>Use</th></tr></thead><tbody><tr><td>left</td><td>vert</td><td>Aligns the left edges of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the left edge of the children</td></tr><tr><td>left</td><td>horiz</td><td>Sets the LayoutGroup node local x-coordinate origin at the left edge of the first child</td></tr><tr><td>center</td><td>vert</td><td>Aligns the centers of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the center alignment point</td></tr><tr><td>center</td><td>horiz</td><td>Sets the LayoutGroup node local x-coordinate origin at the center of the horizontal row of children</td></tr><tr><td>right</td><td>vert</td><td>Aligns the right edges of each child in the column, and sets the <strong>LayoutGroup</strong> node local x-coordinate origin is at the right edge of the children</td></tr><tr><td>right</td><td>horiz</td><td>Sets the LayoutGroup node local x-coordinate origin at the right edge of the last child</td></tr><tr><td>custom</td><td>vert</td><td>Explicitly set the x translation of each child of the LayoutGroup. If the layoutDirection is "horiz", custom will not be a valid setting. Instead, "left" will be used to do the child layout.</td></tr></tbody></table></td>
</tr>
<tr>
<td>vertAlignment</td>
<td>string</td>
<td>top</td>
<td>READ_WRITE</td>
<td>Specifies the alignment point in the vertical direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert <table><thead><tr><th>Value</th><th>layoutDirection</th><th>Use</th></tr></thead><tbody><tr><td>top</td><td>horiz</td><td>Aligns the top edges of each child in the row, and sets the <strong>LayoutGroup</strong> node local y-coordinate origin at the top edge of the children</td></tr><tr><td>top</td><td>vert</td><td>Sets the LayoutGroup node local y-coordinate origin at the top edge of the first child</td></tr><tr><td>center</td><td>horiz</td><td>Aligns the centers of each child in the row, and sets the LayoutGroup node local y-coordinate origin at the center alignment point</td></tr><tr><td>center</td><td>vert</td><td>Sets the <strong>LayoutGroup</strong> node local y-coordinate origin at the center of the vertical column of children</td></tr><tr><td>bottom</td><td>horiz</td><td>Aligns the bottom edges of each child in the row, and sets the <strong>LayoutGroup</strong> node local y-coordinate origin at the bottom edge of the children</td></tr><tr><td>bottom</td><td>vert</td><td>Sets the LayoutGroup node local y-coordinate origin at the bottom edge of the last child</td></tr><tr><td>custom</td><td>horiz</td><td>Explicitly set the y translation of each child of the LayoutGroup. If the layoutDirection is "vert", custom will not be a valid setting. Instead, "top" will be used to do the child layout.</td></tr></tbody></table></td>
</tr>
<tr>
<td>itemSpacings</td>
<td>array of floats</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Controls the spacing before or after each child in the layout direction. By default, no space is added between the children</td>
</tr>
<tr>
<td>addItemSpacingAfterChild</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>Controls how the spaces specified in the itemSpacings field are inserted. By default, the field value is set to true. This causes the specified spaces to be inserted after the child is positioned. If the field value is set to false, the specified item space is inserted before the child is positioned</td>
</tr>
</tbody>
</table>


