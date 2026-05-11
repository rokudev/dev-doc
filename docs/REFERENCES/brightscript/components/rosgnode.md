---
title: "roSGNode"
excerpt: 'BrightScript object for creating SceneGraph nodes via CreateObject'
deprecated: false
hidden: false
metadata:
  title: 'roSGNode'
  description: 'roSGNode is the BrightScript equivalent of SceneGraph XML node creation, created via CreateObject with a nodetype string such as Poster.'
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
Reference](doc:node).

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

* [ifAssociativeArray](doc:ifassociativearray)
* [ifSGNodeChildren](doc:ifsgnodechildren)
* [ifSGNodeField](doc:ifsgnodefield)
* [ifSGNodeDict](doc:ifsgnodedict)
* [ifSGNodeFocus](doc:ifsgnodefocus)
* [ifSGNodeBoundingRect](doc:ifsgnodeboundingrect)
* [ifSGNodeHttpAgentAccess](doc:ifsgnodehttpagentaccess)

## Supported Events

* [roSGNodeEvent](doc:rosgnodeevent)
