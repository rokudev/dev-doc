---
title: ifSGNodeChildren
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

The ifSGNodeChildren interface allows querying and manipulation of nodes in a SceneGraph node tree, such as creating new nodes, placing them at certain positions in the tree, and removing them.

## Implemented by

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| [roSGNode](/docs/references/brightscript/components/rosgnode.md "roSGNode") | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |

To use the methods in this interface to manipulate child nodes at the scene level, the subject nodes must be wrapped in another element, typically a Group node. For example:

~~~~
<?xml version="1.0" encoding="utf-8" ?>
<component name = "myScene" extends = "Scene" >
  <script type = "text/brightscript" >
    <![CDATA[
    sub init()
      m.myGroup = m.top.FindNode("myGroup")
      m.label = m.myGroup.getChild(0)
    end sub
    ]]>
  </script>

  <children>
    <Group id = "myGroup">
      <Label id = "myLabel" ... />
    </Group>
  </children>
</component>
~~~~

In the example above, m.label will contain the roSGNode corresponding to the Label node after the getChild() call. On the other hand, the following will not work:

~~~~
<?xml version="1.0" encoding="utf-8" ?>
<component name = "myScene" extends = "Scene" >
  <script type = "text/brightscript" >
    <![CDATA[
    sub init()
      m.label = m.top.getChild(0)
    end sub
    ]]>
  </script>

  <children>
    <Label id = "myLabel" ... />
  </children>
</component>
~~~~

The Scene node children are hidden elements used by the SceneGraph framework. Thus, despite the fact that the Label node is in the scene \<children\> element, it will not be retrieved by getChild() .

>Removing or replacing a node in a SceneGraph node tree can cause that node to be destroyed entirely if there are no more references to it.

## Supported methods

### appendChild(child as roSGNode) as Boolean

#### Description

Adds a child node to the end of the subject node list of children so that it is traversed last (of those children) during render.

#### Parameters

| Name  | Type     | Description                                           |
| ----- | -------- | ----------------------------------------------------- |
| child | roSGNode | The child node to be appended to the end of the list. |

#### Return Value

A flag indicating whether the child node was successfully appended.

### createChild(nodeType as String) as Object

#### Description

Creates a child node of type nodeType, and adds the new node to the end of the subject node list of children.

#### Parameters

| Name     | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| nodeType | String | The node class to be created. |

#### Return Value

The child node that was created.

### insertChild(child as roSGNode, index as Integer) as Boolean

#### Description

Inserts a previously-created child node at the position index in the subject node list of children, so that this is the position that the new child node is traversed during render.

#### Parameters

| Name  | Type     | Description                                               |
| ----- | -------- | --------------------------------------------------------- |
| child | roSGNode | The child node to be added to the child tree.             |
| index | Integer  | The postion index where the child node is to be inserted. |

#### Return Value

A flag indicating whether the child node that was successfully inserted.

### removeChild(child as roSGNode) as Boolean

#### Description

Finds a child node in the subject node list of children, and if found, remove it from the list of children. The match is made on the basis of actual object identity, that is, the value of the pointer to the child node.

#### Parameters

| Name  | Type     | Description                                       |
| ----- | -------- | ------------------------------------------------- |
| child | roSGNode | The child node to be removed from the child tree. |

#### Return Value

A flag indicating whether the child node that was successfully removed.

### removeChildIndex(index as Integer) as Boolean

#### Description

If the subject node has a child node in the index position, removes that child node from the subject node list of children.

#### Parameters

| Name  | Type    | Description                                               |
| ----- | ------- | --------------------------------------------------------- |
| index | Integer | The position in the tree of the child node to be removed. |

#### Return Value

A flag indicating whether the child node that was successfully removed.

### replaceChild(newChild as roSGNode, index as Integer) as Boolean

#### Description

If the subject node has a child node in the index position, replace that child node with the newChild node in the subject node list of children, otherwise do nothing.

#### Parameters

| Name     | Type     | Description                                               |
| -------- | -------- | --------------------------------------------------------- |
| newChild | roSGNode | The child node to replace the one specified by the index. |
| index    | Integer  | The index of the child node to be replaced.               |

#### Return Value

A flag indicating whether the child node that was successfully replaced.

### getChild(index as Integer) as Dynamic

#### Description

Returns the child node specified by the index.

#### Parameters

| Name  | Type    | Description                                  |
| ----- | ------- | -------------------------------------------- |
| index | Integer | The index of the child node to be retrieved. |

#### Return Value

The child node at the index position; otherwise, "invalid".

### getParent() as roSGNode

#### Description

Returns the parent node of a node has been added to a list of children.

#### Return Value

The parent node; otherwise, "invalid".

### getChildCount() as Integer

#### Description

Returns the current number of children in the subject node list of children. This is always a non-negative number.

#### Return Value

The number of child nodes in the tree.

### reparent(newParent as roSGNode, adjustTransform as Boolean) as Boolean

#### Description

Moves the subject node to another parent node.

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
<td>newParent</td>
<td>roSGNode</td>
<td>The new parent node where the child node is to be moved.</td>
</tr>
<tr>
<td>adjustTransform</td>
<td>Boolean</td>
<td>Specifies whether the translation, rotation, and scale of the node are adjusted so that the node has the same transformation factors relative to the screen as it previously did.<br /><br />If <strong>adjustTransform</strong> is true, the subject node transformation factor fields (translation/rotation/scale) are adjusted so that the node has the same transformation factors relative to the screen as it previously did.<br /><br />If <strong>adjustTransform</strong> is false, the subject node is simply parented to the new node without adjusting its transformation factor fields, in which case, the reparenting operation could cause the node to jump to a new position on the screen.</td>
</tr>
</tbody>
</table>

=======
| Name            | Type     | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| newParent       | roSGNode | The new parent node where the child node is to be moved.     |
| adjustTransform | Boolean  | Specifies whether the translation, rotation, and scale of the node are adjusted so that the node has the same transformation factors relative to the screen as it previously did.<br /><br />If **adjustTransform** is true, the subject node transformation factor fields (translation/rotation/scale) are adjusted so that the node has the same transformation factors relative to the screen as it previously did.<br /><br />If **adjustTransform** is false, the subject node is simply parented to the new node without adjusting its transformation factor fields, in which case, the reparenting operation could cause the node to jump to a new position on the screen. |

#### Return Value

A flag indicating whether the node that was successfully moved to another parent node.

### appendChildren(child_nodes as Object) as Boolean

#### Description

Appends an array of children nodes to the subject node.

#### Parameters

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| child_nodes | Object | An roArray of child nodes to be appended to the subject node. |

#### Return Value

A flag indicating whether the children nodes were successfully appended.

### insertChildren(child_nodes as Object, index as Integer) as Boolean

#### Description

Inserts an array of child nodes to the subject node, starting at a specific position.

#### Parameters

| Name        | Type    | Description                                               |
| ----------- | ------- | --------------------------------------------------------- |
| child_nodes | Object  | An roArray of child nodes to be inserted in the tree.     |
| index       | Integer | The position in the tree where to insert the child nodes. |

#### Return Value

A flag indicating whether the children nodes were successfully inserted.

### removeChildren(child_nodes as Object) as Boolean

#### Description

Removes an array of child nodes from the subject node.

#### Parameters

| Name        | Type   | Description                                        |
| ----------- | ------ | -------------------------------------------------- |
| child_nodes | Object | An roArray of child nodes to removed from the tree |

#### Return Value

A flag indicating whether the children nodes were successfully removed.

### removeChildrenIndex(num_children as Integer, index as Integer ) as Boolean

#### Description

Removes a specific number of child nodes from the subject node starting at a specific position.

#### Parameters

| Name         | Type    | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| num_children | Integer | The number of child nodes to be removed.                     |
| index        | Integer | The starting position in the child node tree where the specified number of nodes are to be removed. |

#### Return Value

A flag indicating whether the children nodes were successfully removed.

### update(fields as roAssociativeArray[, addFields as Boolean]) as Void

#### Description

Takes the key-value pairs in an roAssociativeArray and maps the values to the respective field name in the calling node.

#### Parameters

| Name   | Type               | Description                                                  |
| ------ | ------------------ | ------------------------------------------------------------ |
| fields | roAssociativeArray | Contains key-value pairs corresponding to the fields in the subject node to be updated. |
| addFields    | Boolean                    | optional (default = false). If true, and a specified key is not yet present, add it and value to the node.|

#### Example

The following example demonstrates how to use this method:

```
aa = {"a":"1", "b":"2", "c":"3", "d":"4"}
cn = createObject("roSGNode", "contentNode")
cn.addfield("a","string",false)
cn.addfield("b","string",false)
cn.addfield("c","string",false)
cn.update(aa,false)
'At this point, cn would contain the following:

<Component: roSGNode> =
{
    change: <Component: roAssociativeArray>
    focusable: false
    focusedChild: <Component: roInvalid>
    id: ""
    a: "1"
    b: "2"
    c: "3"
}
```

### replaceChildren(child_nodes as Object, index as Integer) as Boolean

#### Description

Replaces the child nodes in the subject node, starting at the position specified by index, with new child nodes specified by child_nodes

> Starting from Roku OS 8.1, when using this method to update the content of each item in a markupGrid, if more items are supplied than there are in the original list (going from 4 items to 5), the 'extra' items are ignored and not added as children. The [appendChildren()](#appendchildchild-as-rosgnode-as-boolean) function can be used to add the extra items.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| child_nodes | Object  | An roArray of child nodes to replace the nodes in the tree.  |
| index       | Integer | The starting position in the tree from where to replace the child nodes. |

#### Return Value

A flag indicating whether the children nodes were successfully replaced.

### getChildren(num_children as Integer, index as Integer) as Object

#### Description

Retrieves a specific number of child nodes from the subject node, starting at a specific position.

#### Parameters

| Name         | Type    | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| num_children | Integer | The number of child nodes to be retrieved.                   |
| index        | Integer | The starting position in the child node tree where the specified number of nodes are to be retrieved. |

#### Return Value

An roArray containing the child nodes retrieved. If num_children is -1, all the child nodes are returned.

### createChildren(num_children as Integer, subtype as String ) as Object

#### Description

Creates a specific number of new child nodes of a specific type or extended type.

#### Parameters

| Name         | Type    | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| num_children | Integer | Number of new child nodes to be created.                     |
| subtype      | String  | Node type or extended type of the new child nodes to be created. |

#### Return Value

An roArray containing the new child nodes created.

### getScene() as roSGNode

#### Description

Returns the node's root Scene. This returns a valid Scene even if the node is not parented.

#### Return Value

The node's root Scene.

## Debugging-only Methods

The following methods can be called on any subject node and return the same global results. They can be used in a development app for debugging purposes, but should not be used in a production app.


<p>>These methods are similar to the debugger sgnodes commands. See <a href="/docs/developer-program/debugging/debugging-channels.md#special-scenegraph-debugging-commands">Special SceneGraph Debugging Commands</a> for information on the debugger sgnodes commands. Also please note that calling these functions from code should only be done for debugging purposes. Any calls to <a href="#getall-as-object">getAll()</a>, <a href="#getroots-as-object">getRoots()</a>, <a href="#getrootsmeta-as-object">getRootsMeta()</a> and <a href="#getallmeta-as-object">getAllMeta()</a> should be removed from your production channels. |</p>


### getAll() as Object

#### Description

Returns an array with every existing node created by the currently running app.

#### Return Value

An roArray with the all the existing nodes created by the app.

### getRoots() as Object

#### Description

Returns an array with every existing node without a parent created by the currently running app.

The existence of these unparented nodes means they are being kept alive by direct BrightScript references. These could be in variables local to a function, arrays, or associative arrays, including a component global m or an associative array field of a node.

#### Return Type

An roArray with every existing node without a parent created by the currently running app

### getRootsMeta() as Object

#### Description

Returns a string with every existing node without a parent created by the currently running app.

The existence of these unparented nodes means they are being kept alive by direct BrightScript references. These could be in variables local to a function, arrays, or associative arrays, including a component global m or an associative array field of a node. These unparented nodes are organized as an XML forest of trees.

#### Return Value

A string with every existing node without a parent created by the currently running app.

### getAllMeta() as Object

#### Description

Returns a string with every existing node created by the currently running app (similar to the [getAll()](#getall-as-object) method) organized as an XML forest of trees according to the usual parent-child node relationship. Cycles are handled with a reference entry in the tree rather than indefinite recursion.

#### Return Value

A string with the all the existing nodes created by the app.