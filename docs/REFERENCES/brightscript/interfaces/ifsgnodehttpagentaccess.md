---
title: "ifSGNodeHttpAgentAccess"
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


The ifSGNodeHttpAgentAccess interface allows you to get an [roHttpAgent](/docs/references/brightscript/components/rohttpagent.md "roHttpAgent") object from a SceneGraph node, and set an roHttpAgent object for a nod

## Implemented by

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| [roSGNode](/docs/references/brightscript/components/rosgnode.md "roSGNode") | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |


## Supported methods

### getHttpAgent() as Object

#### Description

Returns the roHttpAgent object for the node.

#### Return Value

The roHttpAgent object for the node, which may be one of the following:

- the node roHttpAgent object, if it was set using setHttpAgent()
- the roHttpAgent object of the closest ancestor node that has an roHttpAgent set
- the default roHttpAgent object for the application that contains the node

### setHttpAgent(HTTP_agent as Object) as Boolean

Sets an roHttpAgent object for the node. 

#### Parameters

| Name       | Type   | Description                                    |
| ---------- | ------ | ---------------------------------------------- |
| HTTP_agent | Object | The roHttpAgent object to be set for the node. |

#### Return Value

A flag indicating whether the roHttpAgent object was successfully set.