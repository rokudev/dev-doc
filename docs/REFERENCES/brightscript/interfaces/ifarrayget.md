---
title: "ifArrayGet"
excerpt: 'Interface supporting the array indexing operator and index-based entry retrieval'
deprecated: false
hidden: false
metadata:
  title: 'ifArrayGet'
  description: 'The ifArrayGet interface supports the array indexing operator [ ] and provides GetEntry, which returns an array entry by index or invalid if not set.'
  robots: index
next:
  description: ''
---


The ifArrayGet interface supports the array indexing operator [ ]

(See [Array Operator](doc:expressions-variables-types))


## Implemented by

| Name        | Description |
| ----------- | ----------- |
| [roArray](doc:roarray)     | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type            |
| [roByteArray](doc:robytearray) | The byte array component is used to contain and manipulate an arbitrary array of bytes            |
| [roList](doc:rolist)      | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members            |
| [roXMLList](doc:roxmllist)   | Contains a list of roXML objects            |


## Supported methods

### GetEntry(index As Integer) As Dynamic

#### Description

Returns an array entry based on the provided index.

#### Parameters

| Name  | Type    | Description                                  |
| ----- | ------- | -------------------------------------------- |
| index | Integer | The index of the array entry to be returned. |

#### Return Value

The array entry corresponding to the provided index, or invalid if the entry has not been set.  