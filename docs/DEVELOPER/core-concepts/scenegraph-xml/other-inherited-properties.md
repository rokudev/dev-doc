---
title: "Other inherited properties"
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


In addition to inheriting a transform matrix from its parent, each node
in the SceneGraph also inherits visibility and opacity information.
(Opacity is the opposite of transparency: 75% opacity is the same as 25%
transparency.) The visible field stores a Boolean value that provides a
way to switch rendering of the node and all of its descendants on and
off. The opacity field specifies an opacity value that is multiplied
with the accumulated opacity of its parents to allow branches of the
SceneGraph to fade in and out.