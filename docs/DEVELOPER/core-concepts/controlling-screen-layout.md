---
title: "Controlling screen layout"
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

# Controlling screen layout

Screen element layout is accomplished in several different ways in
SceneGraph applications:

  - setting the `translation` fields of nodes or groups of nodes
  - controlling the z-order of the renderable nodes in SceneGraph trees
    to place nodes over or under each other
  - controlling the parent-child relationship of renderable nodes in
    SceneGraph trees, to allow grouping of several renderable nodes
    together
  - grouping renderable nodes together using the **Group** and
    **LayoutGroup** node classes

More complex SceneGraph node classes, such as the list and grid node
classes, automatically control the spacing and layout of the items in
the node. Many times, this layout control is configured in special data
bindings for the node, and you can configure the layout by reading the
layout data from XML or JSON files on your server.