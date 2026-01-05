---
title: "ifEnum"
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

# ifEnum

## Implemented by

| Name               | Description |
| ------------------ | ----------- |
| [roArray](/docs/references/brightscript/components/roarray.md "roArray")            | An array stores an indexed collection of BrightScript objects |
| [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md "roAssociativeArray") | An associative array (also known as a map, dictionary or hash table) allows objects to be associated with string keys |
| [roByteArray](/docs/references/brightscript/components/robytearray.md "roByteArray")        | The byte array component is used to contain and manipulate an arbitrary array of bytes |
| [roList](/docs/references/brightscript/components/rolist.md "roList")             | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members |
| [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort")      | A Message Port is the place messages (events) are sent |
| [roXMLList](/docs/references/brightscript/components/roxmllist.md "roXMLList")          | Contains a list of roXML objects |


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