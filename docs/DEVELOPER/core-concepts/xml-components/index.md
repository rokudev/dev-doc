---
title: "XML components overview"
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


An XML-based markup language has been added to the SceneGraph API that
allows new SceneGraph components to be defined consisting of a set of
SceneGraph nodes loaded from a declarative description, with interactive
or animated behaviors added using Brightscript, similar to how HTML and
Javascript are used in web development.

Once a XML component has been defined, it can be used just like any of
the built-in SceneGraph node types. For example, if a XML component
named `Gizmo` has been defined, an instance of the component can be
created by either declaring it in another XML component file:

```xml
<Gizmo id="MyGizmo" />
```

Or using the `createObject()` function to create an
[**roSGNode**](doc:rosgnode) object:

```brightscript
createObject("roSGNode", "Gizmo")
```

Each component XML file defines a top-level
[**\<component\>**](doc:component) XML element that may contain
an **[\<interface\>](doc:interface)** element, zero or more
**[\<script\>](doc:script)** elements, and zero or more
elements defining child SceneGraph nodes.