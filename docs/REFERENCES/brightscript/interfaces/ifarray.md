---
title: ifArray
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
# ifArray

## Implemented by

| Name                                                                                                                                | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <Anchor label="roArray" title="roArray" href="/docs/references/brightscript/components/roarray.md">roArray</Anchor>                 | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type |
| <Anchor label="roByteArray" title="roByteArray" href="/docs/references/brightscript/components/robytearray.md">roByteArray</Anchor> | The byte array component is used to contain and manipulate an arbitrary array of bytes                                                          |
| <Anchor label="roList" title="roList" href="/docs/references/brightscript/components/rolist.md">roList</Anchor>                     | The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members      |
| <Anchor label="roXMLList" title="roXMLList" href="/docs/references/brightscript/components/roxmllist.md">roXMLList</Anchor>         | Contains a list of roXML objects                                                                                                                |

## Supported methods

### Peek() As Dynamic

#### Description

Returns the last (highest index) array entry without removing it. If the array is empty, returns invalid

#### Return Value

Invalid

### Pop() As Dynamic

#### Description

Returns the last entry (highest index) from the array and removes it from the array. If the array is empty, returns invalid and does not change the array.

#### Return Value

The last (highest index) array entry.

### Push(tvalue As Dynamic) As Void

#### Description

Adds the specified value to the end of the array.

#### Parameters

| Name   | Type    | Description                                    |
| ------ | ------- | ---------------------------------------------- |
| tvalue | Dynamic | The value to be added to the end of the array. |

### Shift() As Dynamic

#### Description

Removes the first entry (zero index) from the beginning of the array and shifts the other entries up. This method is similar to the [Pop method](#pushtvalue-as-dynamic-as-void), but removes the first entry in the array instead of the last one.

#### Return Value

The first entry (zero index) removed from the array.

### Unshift(tvalue As Dynamic) As Void

#### Description

Adds the specified value to the beginning of the array (at the zero index) and shifts the other entries down. This method is similar to the [Push method](#push-as-dynamic), but adds the new entry to the beginning of the array instead of to the end.

#### Parameters

| Name   | Type    | Description                                          |
| ------ | ------- | ---------------------------------------------------- |
| tvalue | Dynamic | The value to be added to the beginning of the array. |

### Delete(index as Integer) As Boolean

#### Description

Deletes the indicated array entry, and shifts all entries up. This decreases the array length by one.

#### Parameters

| Name  | Type    | Description                             |
| ----- | ------- | --------------------------------------- |
| index | Integer | The entry to be removed from the array. |

#### Return Value

A flag indicating whether the specified array entry has been removed.  If the entry was successfully deleted, returns true. If index is out of range, returns false and does not change the array.

### Count() As Integer

#### Description

Returns the length of the array, which is one more than the index of highest entry.

#### Return Value

The length of the array.

### Clear() As Void

#### Description

Deletes all the entries in the array.

### Append(array As Object) As Void

#### Description

Appends the entries in one **roArray** to another. If the passed array contains entries that have not been set to a value, they are not appended.

#### Parameters

| Name  | Type   | Description                                         |
| ----- | ------ | --------------------------------------------------- |
| array | Object | The **roArray** to be appended to the target array. |
