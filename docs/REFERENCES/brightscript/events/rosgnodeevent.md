---
title: "roSGNodeEvent"
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


An roSGNode object sends roSGNodeEvent messages to a specified port when changes occur in nodes.  An roSGNodeEvent is also sent as the argument of field observer callback functions.  Both of these cases allow a SceneGraph application to respond to events.  roSGNodeEvent supports the following methods.

## Supported methods

### getData() as Dynamic

Retrieves the new field value at the time of the change.

### getField() as Dynamic

Retrieves the name of the field that changed.

### getRoSGNode() as Dynamic

Retrieves a pointer to the node. This can be used for nodes without an ID.

### getNode() as Dynamic

Retrieves the ID of the node that changed.

### getInfo() as Object

Retrieves an AA that contains the values of selected "context" fields, which
were [specified in an earlier-executed call](/docs/references/brightscript/interfaces/ifsgnodefield.md#event-field-aggregation) to `observeField()` or `observeFieldScoped()`.
(If no such "context" fields were designated previously, `getInfo()` returns an empty AA.)
The array is keyed on the names of the "context" fields, and the entry values are the
instantaneous values of the corresponding fields,
at the point when the observed field changed.