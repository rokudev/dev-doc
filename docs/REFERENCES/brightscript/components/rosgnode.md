---
title: "roSGNode"
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


The roSGNode object is the BrightScript equivalent of SceneGraph XML
file node creation. To create an roSGNode object for a specific node
class, call:

`CreateObject("roSGNode", "nodetype") `

Where nodetype is a string specifying the node class to be created.
For example, the following creates an object of the SceneGraph
Poster node class:

`CreateObject("roSGNode", "Poster") `

Reference information on all SceneGraph node classes can be found in
[SceneGraph API
Reference](/docs/references/scenegraph/node.md).

Prior to creating an roSGScreen object and calling its `show()`
function, creating roSGNode objects and using their interfaces is
not guaranteed to work correctly. If you need to create some
roSGNode objects and/or use roSGNode interfaces prior to calling
an roSGScreen object `show()` function, you can use an
roSGScreen object `createScene()` function to create an instance of
a SceneGraph XML component that does any required setup and
initialization prior to the roSGScreen object being displayed.

In addition, roSGNode implements the ifAssociativeArray interface as a wrapper for ifSGNodeFIeld so that the convenient node.field notation may be using for setting, getting, and observing fields.

## Supported Interfaces

* [ifAssociativeArray](/docs/references/brightscript/interfaces/ifassociativearray.md)
* [ifSGNodeChildren](/docs/references/brightscript/interfaces/ifsgnodechildren.md)
* [ifSGNodeField](/docs/references/brightscript/interfaces/ifsgnodefield.md)
* [ifSGNodeDict](/docs/references/brightscript/interfaces/ifsgnodedict.md)
* [ifSGNodeFocus](/docs/references/brightscript/interfaces/ifsgnodefocus.md)
* [ifSGNodeBoundingRect](/docs/references/brightscript/interfaces/ifsgnodeboundingrect.md)
* [ifSGNodeHttpAgentAccess](/docs/references/brightscript/interfaces/ifsgnodehttpagentaccess.md)

## Supported Events

* [roSGNodeEvent](/docs/references/brightscript/events/rosgnodeevent.md)
