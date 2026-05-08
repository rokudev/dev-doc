---
title: "ifString"
excerpt: 'Interface equivalent for the intrinsic String type'
deprecated: false
hidden: false
metadata:
  title: 'ifString'
  description: 'The ifString interface is the interface equivalent for the intrinsic String type, providing GetString, SetString, and IsEmpty methods on String objects.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name                | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [roChannelStoreEvent](doc:rochannelstoreevent) | The roChannelStore sends an roChannelStoreEvent in response to a call to any of several Get* methods in ifChannelStore |
| [roPath](doc:ropath)            | The roPath component provides developers an easy way to create valid file system paths                                 |
| [roString](doc:rostring)            | Object equivalent for intrinsic type 'String'                                                                          |
| [roUrlEvent](doc:rourlevent)         | The roUrlTransfer component sends the roUrlEvent component                                                             |

## Supported methods

Interface equivalent for intrinsic type String.

Also implemented by selected objects that can return a string representation.

### GetString() As String

#### Description

Gets the string value stored in the calling String object. 

#### Return Value

The string value stored in the calling String object. 

### SetString(value As String) As Void

#### Description

Sets the calling String object to the specified string value. 

#### Parameters

| Name  | Type   | Description                                              |
| ----- | ------ | -------------------------------------------------------- |
| value | String | The string value to be set on the calling String object. |

### IsEmpty() as Boolean

#### Description

Checks whether a string is empty.

#### Return Value

A flag indicating whether the string is empty (true), or contains characters (false).

#### Example

```
a = "myString"
b = ""

print a.isEmpty() ' --> false
print b.isEmpty() ' --> true
```