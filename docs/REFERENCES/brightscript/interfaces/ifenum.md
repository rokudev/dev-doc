---
title: "ifEnum"
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


## Implemented by

| Name               | Description |
| ------------------ | ----------- |
| [roArray](doc:roarray)            | An array stores an indexed collection of BrightScript objects |
| [roAssociativeArray](doc:roassociativearray) | An associative array (also known as a map, dictionary or hash table) allows objects to be associated with string keys |
| [roByteArray](doc:robytearray)        | The byte array component is used to contain and manipulate an arbitrary array of bytes |
| [roList](doc:rolist)             | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members |
| [roMessagePort](doc:romessageport)      | A Message Port is the place messages (events) are sent |
| [roXMLList](doc:roxmllist)          | Contains a list of roXML objects |


## Supported methods

### Reset() as Void

#### Description

Resets the current position to the first element of the enumeration.

### Next() as Dynamic

#### Description

Increments the position of an enumeration. If the last element of the enumeration is returned, this method sets the current position to indicate that it is now past the end. 

#### Return Value

The value at the current position of the enumeration. If the current position is already past the end (that is, the last element has already been returned by a previous call to this method), "invalid" is returned.

### IsNext() as Boolean

#### Description

Checks whether the current position is not past the end of the enumeration.

#### Return Value

A flag indicating whether the current position is not past the end (true), or is past the end (false). 

### IsEmpty() as Boolean

#### Description

Checks whether the enumeration contains no elements.

#### Return Value

A flag indicating whether the enumeration contains no elements (true), or contains elements (false). 