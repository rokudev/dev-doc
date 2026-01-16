---
title: "SceneGraph XML"
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

# SceneGraph XML

The term SceneGraph refers to a design algorithm and associated
programming constructs that are widely used in computer graphics
systems, such as video games. A SceneGraph uses a tree structure of
image element *nodes* to define an interactive scene that is traversed
to render an image, with the position of each node in the tree
determining the z-axis rendering of the node image element; nodes lower
in the tree structure are rendered over nodes higher in the tree. Each
node in the tree structure is an object whose state is stored as
attributes in a set of *fields*. As the tree is traversed, the rendering
state is accumulated, so that the state of a parent node can control how
the child nodes are rendered.
