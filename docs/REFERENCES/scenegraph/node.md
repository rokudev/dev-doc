---
title: Node
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
The abstract base class of all SceneGraph nodes and the equivalent of the BrightScript roSGNode component. See <Anchor label="roSGNode" title="roSGNode" href="https://roku-ent.readme.io/dev/docs/rosgnode">roSGNode</Anchor> for supported interfaces.

**Node** class objects do not draw anything and are skipped in the render traversal of the SceneGraph node tree. The Node class provides the core parenting and key focus management functionality used by all nodes.

## Fields

<HTMLBlock>{`
<table><tr><td>Field</td><td>Type</td><td>Default</td><td>Access Permission</td><td>Description</td></tr><tr><td>id</td><td>string</td><td>&quot;&quot;</td><td>READ_WRITE</td><td>Adds a dictionary entry that allows the node to be retrieved with [ifSGNodeDict](doc:ifsgnodedict) findNode() function.</td></tr><tr><td>focusedChild</td><td>N/A</td><td>N/A</td><td>READ_WRITE</td><td>When a node or one of its children gains or loses the keyboard focus, the focusedChild field will be set and call its observer functions. In the observer function, typically, you use [ifSGNodeFocus](doc:ifsgnodefocus) functions to query whether this node or some other node has the key focus or is in the key focus chain. Accessing the value of the field will result in script errors.</td></tr><tr><td>focusable</td><td>Boolean</td><td>false</td><td>READ_WRITE</td><td>Provides a hint as to whether or not this node can take the key focus.</td></tr><tr><td>change</td><td>associative array</td><td>\{ Index1: 0, Index2: 0, Operation: none \}</td><td>READ_ONLY</td><td>Operations affecting the set of children of a Node are recorded in this field if, and only if, this field has been observed. The field associative array indicates the operation and two indexes, index1 and index 2, involved in the change. The operation is denoted by these value strings:<table><tr><td>Value</td><td>Meaning</td></tr><tr><td>none</td><td>No operation on the children nodes since the change field was observed, indexes are irrelevant</td></tr><tr><td>insert</td><td>A child node was inserted at *index1*. If multiple child nodes were inserted (for example, via the [insertChildren() function](doc:ifsgnodechildren)), the last inserted child node is stored at *index2*.</td></tr><tr><td>add</td><td>A child node was added to the end of the children node tree (at *index 1*). If multiple child nodes were added (for example, via the [appendChildren() function](doc:ifsgnodechildren)), the last added child node is stored at *index2*.</td></tr><tr><td>remove</td><td>A child node was removed from position *index1*, and if *index2*&gt;*index1*, all the children nodes between *index1* and *index2* inclusive were removed</td></tr><tr><td>set</td><td>The child node at position *index1* was replaced with a new child node</td></tr><tr><td>clear</td><td>All the children nodes were removed</td></tr><tr><td>move</td><td>The child node at position *index1* was moved to the new position *index2*</td></tr><tr><td>setall</td><td>All the children nodes were replaced</td></tr><tr><td>modify</td><td>A pre-defined content meta-data field of a **ContentNode** node child at *index1* was changed (*only* set for **ContentNode** node children when a pre-defined content meta-data field changes)</td></tr></table></td></tr></table>
`}</HTMLBlock>

<br />
