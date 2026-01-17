---
title: SceneGraph BrightScript
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

Two BrightScript objects, [roSGScreen](/docs/references/brightscript/components/rosgscreen.md) and [roSGNode](/docs/references/brightscript/components/rosgnode.md), are defined to allow our SceneGraph technology to be used in scripting.

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