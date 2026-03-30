---
title: "ifSGNodeDict"
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


The ifSGNodeDict interface allows you access information about the nodes in a SceneGraph node tree, and find and return a node with a specific ID.

## Implemented by

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| [roSGNode](doc:rosgnode) | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |


## Supported methods

### findNode(name as String) as Object

#### Description

Returns the node that is a descendant of the nearest component ancestor of the subject node (possibly the subject node itself) and whose id field is set to name. The search for the descendant node is a breadth-first search that includes child nodes in nodes that are declared as custom components defined in other XML component files. These together allow finding siblings and cousins of a node within the context of a component. If a node with the specified name is not found, an invalid object is returned

#### Parameters

| Name | Type   | Description                           |
| ---- | ------ | ------------------------------------- |
| name | String | The name of the node to be retrieved. |

#### Return Value

The node that is a descendant of the nearest component ancestor of the subject node.

### subtype() as String

#### Description

Returns the subtype of the subject node as specified when it was created.

#### Return Value

The subtype of the subject node. 

### parentSubtype(nodeType as String) as String

#### Description

Returns the subtype of the parent of the nodeType in the SceneGraph node class hierarchy. 

> This method does not actually reference the subject node.

#### Parameters

| Name     | Type   | Description                       |
| -------- | ------ | --------------------------------- |
| nodeType | String | The node type of the parent node. |

#### Return Value

The subtype of the parent node.

### isSubtype(nodeType as String) as Boolean

#### Description

Checks whether the subtype of the subject node is a descendant of the subtype nodeType in the SceneGraph node class hierarchy.

#### Parameters

| Name     | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| nodeType | String | The node type of the subject node. |

#### Return Value

A flag indicating whether the subtype of the subject node is a descendant of the subtype nodeType.

### isSameNode(RoSGNode as Object) as Boolean

#### Description

Checks whether a specific roSGNode refers to the same SceneGraph node object as the subject node.

This can be useful when the RoSGNode objects come from two different sources, for example when one is stored in an associative array, and the other is obtained from an RoSGNode interface method that returns an RoSGNode object, like getChild(). It may be that the application needs to know whether the two RoSGNode objects are actually referring to the same underlying SceneGraph node. 

| Name       | Return Type    | Parameters              | Return Value | Description           |
| ---------- | ------- | ----------------------- | --------------- | --------------------- |
| isSameNode | Boolean | <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>RoSGNode</td><td>Object</td><td>The roSGNode to be checked.</td></tr></tbody></table> | True/False      | Returns a Boolean value indicating whether the RoSGNode parameter refers to the same SceneGraph node object as the subject node |


#### Return Value

A flag indicating whether the nodes refer to the same SceneGraph node object.

#### Example:

The following example should print "same":

~~~
n = createObject("roSGNode", "Node")
c = n.createChild("Node")
if c.isSameNode(n.getChild(0)) then print "same"
~~~

### clone(isDeepCopy as Boolean) as Object

Returns a copy of the entire node tree or just a shallow copy.



<table>
<thead>
<tr>
<th>Name</th>
<th>Return Type</th>
<th>Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>clone</td>
<td>Object</td>
<td><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>isDeepCopy</td><td>Boolean</td><td>True = return a copy of the entire node tree. <br />False = return a shallow copy of the node tree.</td></tr></tbody></table></td>
<td>Node tree</td>
<td></td>
</tr>
</tbody>
</table>



#### Return Value

A node tree.

### callFunc(funcName as String, ...) as Dynamic

callFunc() is a synchronized interface on roSGNode. It always executes in the component's owning ScriptEngine and thread (by rendezvous if necessary), and it will always use the m and m.top of the owning component. Any context from the caller can be passed via one or more method parameters, which may be of any type (previously, callFunc() only supported a single associative array parameter).

To call the function, use the `callFunc` field with the required method signature. A return value, if any, can be an object that is similarly arbitrary. The method being called must determine how to interpret the parameters included in the `callFunc` field.

**Functional field declaration**

```
<interface>
    <function name="addSomeValue" />
</interface>
```

**Function definition**

```
function addSomeValue(params as Object) as Object
    passedDataLabel = m.top.findNode("passedDataLabel")
    passedDataLabel.text = params.passedString
    result = &#123;
        resultString : "Returned Value " + stri(params.passedInt + 4)
    &#125;

    return result
end function
```

**callFunc with parameters**

```
params = &#123;passedString:"", passedInt:12&#125;
result = node.callFunc("addSomeValue", params)
```

### hasFunc(callableFunc as String) as Boolean

Checks whether the specified callable function exists.

#### Return Value

A flag indicating whether the specified callable function exists.