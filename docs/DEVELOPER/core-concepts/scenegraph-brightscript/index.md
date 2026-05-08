---
title: SceneGraph BrightScript
excerpt: 'Using roSGScreen and roSGNode to integrate SceneGraph into BrightScript'
deprecated: false
hidden: false
metadata:
  title: 'SceneGraph BrightScript | Roku Developer Docs'
  description: 'Reference page for SceneGraph BrightScript. Two BrightScript objects, roSGScreen and roSGNode, enable SceneGraph scripting.'
  robots: index
next:
  description: ''
---

Two BrightScript objects, [roSGScreen](doc:rosgscreen) and [roSGNode](doc:rosgnode), are defined to allow our SceneGraph technology to be used in scripting.

## BrightScript SceneGraph Scene creation

Currently, a fairly strict ordering must be used in BrightScript to
create a screen and set up its Scene node.

```
screen = CreateObject("roSGScreen")     ' create the roSGScreen
m.port = CreateObject("roMessagePort")
screen.setMessagePort(m.port)
scene = screen.CreateScene("Scene")     ' create a Scene node
screen.show()                           ' display the screen
```