---
title: "ifArraySizeInfo"
excerpt: 'Interface exposing array capacity controls implemented by roArray'
deprecated: false
hidden: false
metadata:
  title: 'ifArraySizeInfo'
  description: 'The ifArraySizeInfo interface provides functions that control array capacity, including IsResizable, Capacity, Reserve, and ShrinkToFit for roArray storage.'
  robots: index
next:
  description: ''
---


*Available since [Roku OS 15.0](doc:release-notes#roku-os-150)*

The **ifArraySizeInfo()** interface includes set of functions that provide developers with more control over array capacities. These functions reduce the memory overhead when using the [**ParseJSON()** function](doc:global-utility-functions) on large JSON body data sets. 

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roArray](doc:roarray) | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type. |

## Supported methods

### IsResizable() As Boolean

#### Description

Returns a flag indicating whether the array will automatically expand to store new items.

#### Return Value

A flag indicating whether the array will automatically expand to store new items.

### Capacity() As Integer

#### Description

Returns the current storage capacity of the array (specifically, how many items could be stored without allocating additional storage).

The return value may be 0 if the array is empty and no storage has been allocated yet.

#### Return Value

An integer indicating the  current storage capacity of the array.

### Reserve(minSize As Integer) As Boolean

> *As of [Roku OS 15.0](doc:release-notes#roku-os-150), the roByteArray node does not support this function.*

#### Description

Sends a request to allocate or increase storage capacity of the array to hold at least the specified number of items. 

#### Parameters

| Name    | Type    | Description                                          |
| ------- | ------- | ---------------------------------------------------- |
| minSize | Integer | The specified number of items the array is to store. |

#### Return Value

Returns true if the potential capacity update can hold the specified number of items. Otherwise, returns false if the array is not resizable or storage allocation fails.

>  The updated capacity of the array may be more than was requested if the extra capacity already existed or how storage was implemented.

### ShrinkToFit() As Boolean

> *As of [Roku OS 15.0](doc:release-notes#roku-os-150), the roByteArray node does not support this function.*

#### Description

Sends a request to free or decrease storage to the minimum needed to store the current number of items.

#### Return Value

Returns true unless the array is not resizable or storage reallocation fails.

> The updated capacity of the array may be more than the exact number of items in it based on the storage implementation.