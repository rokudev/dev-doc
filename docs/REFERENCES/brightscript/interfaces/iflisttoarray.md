---
title: "ifListToArray"
excerpt: 'Interface providing ToArray() to convert a list into an roArray object'
deprecated: false
hidden: false
metadata:
  title: 'ifListToArray'
  description: 'Documents the ifListToArray interface, which provides the ToArray() method that returns an roArray containing the same elements as the list.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name      | Description |
| --------- | ----------- |
| [roList](doc:rolist) | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members |
| [roXMLList](doc:roxmllist)| Contains a list of roXML objects |


## Supported methods

### ToArray() As Object

> This function is available in [Roku OS 8.0](doc:release-notes#roku-os-8) or later

#### Description

Returns an roArray containing the same elements as the list.

#### Return Value

 An element list as an array.