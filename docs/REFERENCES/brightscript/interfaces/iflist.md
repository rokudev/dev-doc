---
title: "ifList"
excerpt: 'Interface for linked-list operations including head, tail, and index management'
deprecated: false
hidden: false
metadata:
  title: 'ifList'
  description: 'Documents the ifList interface, which provides methods to add, remove, and retrieve elements at the head or tail of a list, and to manage the current index.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name      | Description |
| --------- | ----------- |
| [roList](doc:rolist)    | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members |
| [roXMLList](doc:roxmllist) | Contains a list of roXML objects |


## Supported methods

### ResetIndex() As Boolean

#### Description

Resets the current index or position in list to the head element.

#### Return Value

A flag indicating whether the index has been reset.

### AddTail(tval As Dynamic) As Void

#### Description

Adds an element to the tail of the list.

#### Parameters

| Name    | Type    | Description                      |
| ------- | ---- | -------------------------------- |
| AddTail | Dynamic | The element to be added to the tail of the list. |

### AddHead(tval As Dynamic) As Void

#### Description

Adds an element to the head of the list.

#### Parameters

| Name    | Type    | Description                                      |
| ------- | ------- | ------------------------------------------------ |
| AddHead | Dynamic | The element to be added to the head of the list. |

### RemoveIndex() As Dynamic

#### Description

Removes the entry at the current index or position from the list and increments the index or position in the list.

#### Return Value

The entry removed from the list. This method returns invalid if the end of the list is reached.

### GetIndex() As Dynamic

#### Description

Gets the entry at current index or position from the list and increments the index or position in the list.

#### Return Value

The entry retrieved from the list. This method returns invalid if the end of the list is reached.

### RemoveTail() As Dynamic

#### Description

Removes the entry at the tail of the list.

#### Return Value

The entry removed from the tail of the list. 

### RemoveHead() As Dynamic

#### Description

Removes the entry at the head of the list.

#### Return Value

The entry removed from the head of the list. 

### GetTail() As Dynamic

#### Description

Retrieves the entry at the tail of the list.

#### Return Value

The entry retrieved from the tail of the list. 

### GetHead() As Dynamic

#### Description

Retrieves the entry at the head of the list.

#### Return Value

The entry retrieved from the head of the list. 

### Count() As Integer

#### Description

Returns the number of elements in the list.

#### Return Value

The number of elements in the list. 


### Clear() As Void

Removes all elements from the list