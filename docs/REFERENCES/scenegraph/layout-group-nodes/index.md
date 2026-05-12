---
title: "Layout group nodes"
excerpt: 'SceneGraph group nodes for arranging child nodes: Group, LayoutGroup, ButtonGroup, and TargetGroup'
deprecated: false
hidden: false
metadata:
  title: 'Layout group nodes'
  description: 'Group nodes act as containers for other SceneGraph nodes. This page covers Group, LayoutGroup, ButtonGroup, and TargetGroup, and explains how they relate to each other.'
  robots: index
next:
  description: ''
---
Group nodes act as containers for other SceneGraph nodes. They define a local coordinate system, control the position and visibility of their children, and (in the case of LayoutGroup) automatically arrange children in a row or column.

## Choosing a node

| Node | Use case |
| :--- | :--- |
| [Group](doc:group) | The foundational container node. Provides translation, rotation, scale, opacity, and visibility for itself and its children. Every renderable node ultimately extends Group. |
| [LayoutGroup](doc:layoutgroup) | Automatically arranges its children in a horizontal row or vertical column with configurable spacing and alignment. |
| [ButtonGroup](doc:buttongroup) | A specialized LayoutGroup for managing a set of [Button](doc:button) nodes, with built-in focus and selection handling. |
| [TargetGroup](doc:targetgroup) | Maps children to a [TargetSet](doc:targetset) of rectangular regions, animating items between target positions as focus moves. |

## Inheritance

ButtonGroup extends [LayoutGroup](doc:layoutgroup), so its fields include everything LayoutGroup offers plus button-specific behavior. TargetGroup extends [Group](doc:group) directly and uses a TargetSet to position children, so it does not share LayoutGroup's row/column model.

## How positioning is calculated

LayoutGroup and ButtonGroup arrange children based on each child's bounding rectangle: the rendered footprint of the child including any of its own children, images, or text. The fields on each node (`itemSpacings`, `horizAlignment`, `vertAlignment`, and so on) operate on those bounding rectangles, not on raw `width`/`height` values you set directly.

For details on how a bounding rectangle is computed for any node, and notes on when it's safe to read (typically after images load and layout settles), see [ifSGNodeBoundingRect](doc:ifsgnodeboundingrect).

## Looking for something else?

* **For built-in lists or grids of items** with focus and selection handling, see [List and grid nodes](doc:list-and-grid-nodes) (LabelList, MarkupList, PosterGrid, MarkupGrid, RowList, and others).
* **For a freely positioned set of children** without automatic layout, use a plain [Group](doc:group) and set each child's `translation` field directly.
