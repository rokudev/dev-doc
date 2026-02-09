---
title: "ifArraySet"
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


The ifArraySet interface supports the array indexing operator [].

(See ArrayOperator)


## Implemented by

| Name        | Description |
| ----------- | ----------- |
| [roArray](doc:roarray)     | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type            |
| [roByteArray](doc:robytearray) | The byte array component is used to contain and manipulate an arbitrary array of bytes            |
| [roList](doc:rolist)      | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members            |
| [roXMLList](doc:roxmllist)   | Contains a list of roXML objects            |


## Supported methods

### SetEntry(index As Integer, tvalue As Dynamic) As Void

#### Description

Sets an entry at a given index to the passed value. If index is beyond the bounds of the array, the array is expanded to accommodate it.

#### Parameters

| Name   | Type    | Description                            |
| ------ | ------- | -------------------------------------- |
| index  | Integer | The entry to be updated.               |
| tvalue | Dynamic | The new value for the specified entry. |


