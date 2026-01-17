---
title: "ifIntOps"
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


## Implemented by

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| [roInt](/docs/references/brightscript/components/roint.md "roInt")     | Object equivalent for intrinsic type Integer |

> To verify whether an object is of an integer type, you can pass the object and this interface into the [GetInterface() method](/docs/references/brightscript/language/global-utility-functions.md#getinterfaceobject-as-object-ifname-as-string-as-interface):
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