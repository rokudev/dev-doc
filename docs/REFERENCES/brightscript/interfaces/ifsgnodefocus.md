---
title: "ifSGNodeFocus"
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


The ifSGNodeFocus interface is used to query and manipulate the remote control focus of the nodes in a SceneGraph node tree.

## Implemented by

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| [roSGNode](doc:rosgnode)  | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |


## Supported methods

### setFocus(on as Boolean) as Boolean

#### Description

Sets the current remote control focus to the subject node.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>on</td>
<td>Boolean</td>
<td>True = Sets the current remote control focus to the subject node. This also automatically removes focus from the node on which it was previously set. <br />False = Removes focus from the subject node if it had it. Setting the remote control focus to false is rarely necessary, and can lead to unexpected behavior.</td>
</tr>
</tbody>
</table>


#### Return Value

A flag indicating whether focus on the subject node has successfully been updated. 

### hasFocus() as Boolean

#### Description

Checks whether the subject node has the remote control focus.

#### Return Value

A flag indicating whether the subject node has the remote control focus.

### isInFocusChain() as Boolean

#### Description

Checks whether the subject node or any of its descendants in the SceneGraph node tree have remote control focus.

#### Return Value

A flag indicating whether the subject node or any of its descendants in the SceneGraph node tree have the remote control focus.