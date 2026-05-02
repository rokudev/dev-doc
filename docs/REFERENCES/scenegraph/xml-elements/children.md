---
hidden: false
---
The \<children\> element contains the SceneGraph node XML markup elements. The \<children\> element allows XML schema validation of your SceneGraph XML components using XSD by wrapping them in a container element (XSD requires that the order of elements be deterministic, and so for validation to work, SceneGraph node elements must be contained in an element themselves).

The SceneGraph node markup elements contained in the \<children\> element may include a special XML element attribute, `role`. The `role` attribute allows a node element to be defined as a child node of a parent node, and the child node to be assigned as the value of the parent node field identified by the `role` attribute value:

```xml
<ParentNode >
  <ChildNode
    role = "parentnode_fieldname"
    ... />
</ParentNode>
```