---
title: "SceneGraph coordinate systems"
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

# SceneGraph coordinate systems

Each renderable node has a local coordinate system associated with it
with an origin at (0,0) with x increasing left-to-right and y increasing
top-to-bottom. Each node can also have a 2D transformation specified
that transform its local coordinate system into a transformed coordinate
system. In the Roku SceneGraph implementation a node transformation
matrix is specified by setting the values of four
fields:

| Field             | Description                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| translation       | 2D vector that describes an \[x, y\] offset of the local coordinate system origin                                                                                                       |
| scale             | 2D vectors that describes an \[x, y\] scaling of the local coordinate system                                                                                                            |
| rotation          | Floating point value that describes a Z-axis rotation of the local coordinate system. The value is specified in radians with positive values representing a counter-clockwise rotation. |
| scaleRotateCenter | 2D vector that describes a point in the local coordinate system that serves as the center of scaling and rotation                                                                       |

Each of these fields can be combined into an overall 2D transformation
for the node by first applying these steps:

1.  Translate by the inverse of the scale/rotate center
2.  Multiplying by the scale amount
3.  Apply the Z-axis rotation
4.  Translate by the scale/rotate center
5.  Translate by the translation amount.

In matrix math, the overall matrix is:

``` 
   M = C(-1) S R C T
```

Where M is the total matrix, C is a 2D translation matrix that describes
the location of the scale/rotation center in the node local coordinate
system, C(-1) is the inverse of C, S is a 2D scaling matrix, R is a 2D
rotation matrix, and T is a 2D translation matrix.

As the SceneGraph is traversed, 2D transformations are accumulated so
that each child local coordinate system is transformed not only by its
own 2D transformation matrix, but also the accumulated transformation
matrix of all of its ancestors in the tree structure. This allows
logical groupings of nodes to be positioned/animated by changing the
transformation fields of nodes at various levels in the tree.

The transformation accumulation allows node classes to be developed
without regard to their absolute pixel coordinates. Instead, each node
can be have a layout relative to its local coordinate system, with its
absolute on-screen position, size and orientation determined by the
accumulated transformation matrix. For example, in a
[PanelSet](/docs/references/scenegraph/sliding-panels-nodes/panelset.md) node screen, each
[Panel](/docs/references/scenegraph/sliding-panels-nodes/panel.md) node has a local origin of (0,0) at the
top/left corner of the panel.
The PanelSet node is the
parent of each Panel node in
the tree hierarchy, and animates the translation field of the Panel
nodes to cause them to slide on/off screen. Each Panel node has a
subtree of nodes that draw its contents. Since these nodes inherit the
Panel node translation, they all slide together as the Panel
node translation field is modified. 