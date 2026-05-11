---
title: "ifArraySlice"
excerpt: 'Interface providing the Slice method for extracting portions of an array'
deprecated: false
hidden: false
metadata:
  title: 'ifArraySlice'
  description: 'Documents the ifArraySlice interface, which provides the Slice method for copying a specified portion of an array into a new array object using 0-based indices.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roArray](doc:roarray) | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type. |
| [roByteArray](doc:ifbytearray) | The byte array component is used to contain and manipulate an arbitrary array of bytes |

## Supported methods

### Slice([start_pos as Integer[, end_pos as Integer]]) As Object

#### Description

Returns a new array object with a shallow copy of the specified portion of the array. 

The **start_pos** and **end_pos** fields specify the 0-based indices of items in the array, where the **end_pos** field represents the position **past** the last element to be copied.

#### Parameters

| Name      | Type    | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| start_pos | Integer | The 0-based index of first element to copy. A negative index specifies an offset from the end of the array. The default value is 0. |
| end_pos   | Integer | The 0-based index past last element to copy. A negative index indicates an offset from the end of the array. The default value is the array length. |

#### Examples

```
'      0       1     2      3      4      5
arr = ["ape", "bat", "cow", "dog", "elk"]

' get the 3rd (index 2) and subsequent elements
arr2 = arr.Slice(2)
print FormatJSON(arr2)
' => ["cow","dog","elk"]

' get the 2nd (index 1) through 3rd (index 2) elements
arr2 = arr.Slice(1, 3)
print FormatJSON(arr2)
' => ["bat","cow"]

' get the last 2 elements
arr2 = arr.Slice(-2)
print FormatJSON(arr2)
' => ["dog","elk"]

' empty range
arr2 = arr.Slice(1, 1)
print FormatJSON(arr2)
' => []
```





####  