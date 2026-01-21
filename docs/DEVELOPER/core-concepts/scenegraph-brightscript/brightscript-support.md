---
title: "BrightScript support"
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


Several BrightScript functions and components cannot be used in
SceneGraph component scripts. Many of the BrightScript components that
cannot be used provide duplicate rendering functionality as SceneGraph
nodes, and cannot be used for that reason. You should use the equivalent
SceneGraph nodes instead, if available. Other BrightScript functions and
components can only be used in SceneGraph applications in a
[Task](doc:task) node.

The following are the BrightScript functions and components that cannot or should not
be used in the component scripts of a SceneGraph application, with
additional information for many, such as:

  - SceneGraph nodes to use instead, if available
  - a function or component that can only be used in a Task node
