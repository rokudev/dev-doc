---
title: "Controlling screen layout"
excerpt: 'Techniques for positioning and grouping renderable nodes on screen'
deprecated: false
hidden: false
metadata:
  title: 'Controlling screen layout | Roku Developer Docs'
  description: 'Learn how screen layout is controlled using translation fields, z-order, parent-child relationships, and Group or LayoutGroup node classes in your app.'
  robots: index
next:
  description: ''
---


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