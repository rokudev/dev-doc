---
title: Scene
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

Extends [**Group**](doc:group)

The **Scene** node class serves as the root of a SceneGraph node tree. Every **roSGScreen** object must have a **Scene** node, or a node that derives from the **Scene** node class as its root, including an XML markup component that extends the Scene node class or subclass. That node must be created using the **roSGScreen** createScene() function, with an argument that is a string of the name of the **Scene** node object created. For example:

~~~
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("Scene")
~~~

While it is technically possible to have more than one scene per app, we recommend you only have one **roSGScreen** and one **Scene** node. Child nodes of the scene can be treated as different "scenes" where you can then implement transitions between them.

## Fields

