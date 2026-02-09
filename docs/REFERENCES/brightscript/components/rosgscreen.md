---
title: "roSGScreen"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---


The roSGScreen object is a SceneGraph canvas that displays the
contents of a SceneGraph Scene node instance. The object is created
by calling:

`CreateObject("roSGScreen")`

`CreateScene()` takes one argument, the name of the scene component.  An
app will typically extend Scene to define its own app-specific
Scene type (such as MyScene, etc.)  This Scene component name is passed
to `CreateScene().`

**roSGScreen typical usage example**

```
screen = CreateObject("roSGScreen")
scene  = screen.CreateScene("Scene")
screen.show()
```

## Supported interfaces

- [ifSgScreen](doc:ifsgscreen)


## Supported events

- [roSGScreenEvent](doc:rosgscreenevent)             
