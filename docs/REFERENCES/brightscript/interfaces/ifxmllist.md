---
title: "ifXMLList"
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

| Name      | Description |
| --------- | ----------- |
| [roXMLList](doc:roxmllist) | Contains a list of roXML objects |


## Supported methods

### GetNamedElements(name As String) As Object

#### Description

Returns a new XMLList that contains all roXMLElements that matched the passed in name (case-sensitive matching is used). This is the same as using the dot operator on an roXMLList.

#### Parameters

| Name | Type   | Description                                 |
| ---- | ------ | ------------------------------------------- |
| Name | String | The XML element to be used to find matches. |

#### Return Value

An XMLList that contains the matches. 

### GetNamedElementsCi(name As String) As Object

#### Description

Returns a new XMLList that contains all roXMLElements that matched the passed in name (case-insensitive matching is used). This is the same as using the dot operator on an roXMLList.

#### Parameters

| Name | Type   | Description                                 |
| ---- | ------ | ------------------------------------------- |
| Name | String | The XML element to be used to find matches. |

#### Return Value

An XMLList that contains the matches. 

### Simplify() As Object

#### Description

If the list contains exactly one item, this function returns that item. Otherwise, it returns itself.

#### Return Value

The object item.

### GetAttributes() As Object

#### Description

If the list contains exactly one item, this function returns the attributes of that item. Otherwise it returns invalid.

#### Return Value

The object item.

### GetText() As String

#### Description

If the list contains exactly one item, this function returns the text of that item. Otherwise, it returns an empty string.

#### Return Value

The object string.

### GetChildElements() As Object

#### Description

If the list contains exactly one item, this function returns the child elements of that item. Otherwise it returns invalid. 

> This function does not return the items contained in the roXMLList. Use [ifList](doc:iflist) functions to access those items.

#### Return Value

The object item.