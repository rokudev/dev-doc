---
title: "ifIntOps"
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

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| [roInt](doc:roint)     | Object equivalent for intrinsic type Integer |

> To verify whether an object is of an integer type, you can pass the object and this interface into the [GetInterface() method](doc:global-utility-functions):
>
> ```
> if (GetInterface(someInteger, "ifIntOps") <> invalid)
> 	...
> End if
> ```

## Supported methods

### ToStr() As String

#### Description

Returns the integer value formatted as a decimal string. No leading space is appended for non-negative numbers.

#### Return Value

A decimal string.

#### Example

`5.ToStr() = "5", (-5).ToStr() = "-5"`