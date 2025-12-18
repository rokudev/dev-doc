---
title: Layoutgroup
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

# LayoutGroup

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The LayoutGroup node class manages the position of its child nodes by arranging them in a row from left to right (horizontal layout), or in a column from top to bottom (vertical layout). Fields provide options to control the spacing between children, the horizontal and vertical alignment, and the margins around the edges of the group.

## Fields

| Field                    | Type            | Default | Access Permission | Description                                                  |
| ------------------------ | --------------- | ------- | ----------------- | ------------------------------------------------------------ |
| layoutDirection          | string          | vert    | READ_WRITE        | Controls the layout direction ${layoutDirection}             |
| horizAlignment           | string          | left    | READ_WRITE        | Specifies the alignment point in the horizontal direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert ${horizAlignment} |
| vertAlignment            | string          | top     | READ_WRITE        | Specifies the alignment point in the vertical direction. The effect of the value set depends on the whether the layoutDirection field value is set to either horiz or vert ${vertAlignment} |
| itemSpacings             | array of floats | [ ]     | READ_WRITE        | Controls the spacing before or after each child in the layout direction. By default, no space is added between the children |
| addItemSpacingAfterChild | Boolean         | true    | READ_WRITE        | Controls how the spaces specified in the itemSpacings field are inserted. By default, the field value is set to true. This causes the specified spaces to be inserted after the child is positioned. If the field value is set to false, the specified item space is inserted before the child is positioned |

{#layoutDirection}

| Value | Use                                                   |
| ---- | ---------------------------------------------------- |
| horiz | Positions the children in a row from left to right    |
| vert  | Positions the children in a column from top to bottom |

{#horizAlignment}

| Value  | layoutDirection | Use                                                          |
| ----- | -------------- | ----------------------------------------------------------- |
| left   | vert            | Aligns the left edges of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the left edge of the children |
| left   | horiz           | Sets the LayoutGroup node local x-coordinate origin at the left edge of the first child |
| center | vert            | Aligns the centers of each child in the column, and sets the LayoutGroup node local x-coordinate origin at the center alignment point |
| center | horiz           | Sets the LayoutGroup node local x-coordinate origin at the center of the horizontal row of children |
| right  | vert            | Aligns the right edges of each child in the column, and sets the **LayoutGroup** node local x-coordinate origin is at the right edge of the children |
| right  | horiz           | Sets the LayoutGroup node local x-coordinate origin at the right edge of the last child |
| custom | vert            | Explicitly set the x translation of each child of the LayoutGroup. If the layoutDirection is "horiz", custom will not be a valid setting. Instead, "left" will be used to do the child layout. |


{#vertAlignment}

| Value  | layoutDirection | Use                                                          |
| ----- | -------------- | ----------------------------------------------------------- |
| top    | horiz  | Aligns the top edges of each child in the row, and sets the **LayoutGroup** node local y-coordinate origin at the top edge of the children |
| top    | vert            | Sets the LayoutGroup node local y-coordinate origin at the top edge of the first child |
| center | horiz    | Aligns the centers of each child in the row, and sets the LayoutGroup node local y-coordinate origin at the center alignment point |
| center | vert            | Sets the **LayoutGroup** node local y-coordinate origin at the center of the vertical column of children |
| bottom | horiz   | Aligns the bottom edges of each child in the row, and sets the **LayoutGroup** node local y-coordinate origin at the bottom edge of the children |
| bottom | vert            | Sets the LayoutGroup node local y-coordinate origin at the bottom edge of the last child |
| custom | horiz | Explicitly set the y translation of each child of the LayoutGroup. If the layoutDirection is "vert", custom will not be a valid setting. Instead, "top" will be used to do the child layout.|
