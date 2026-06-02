---
title: "ifToStr"
excerpt: 'Interface providing ToStr() methods for converting values to formatted strings'
deprecated: false
hidden: false
metadata:
  title: 'ifToStr'
  description: 'Documents the ifToStr interface, which provides ToStr() methods to convert object values to strings, with optional printf-like format string support.'
  robots: index
next:
  description: ''
---



## Implemented by


| Name          | Description |
| ------------- | ----------- |
| [roBoolean](doc:roboolean)   | Object equivalent for intrinsic type Boolean            |
| [roDouble](doc:rodouble)      | Object equivalent for intrinsic type 'Double'            |
| [roFloat](doc:rofloat)       | Object equivalent for intrinsic type 'Float'            |
| [roFunction](doc:rofunction)    | Object equivalent for intrinsic type Function            |
| [roInt](doc:roint)         | Object equivalent for intrinsic type Integer            |
| [roInvalid](doc:roinvalid)     | Object equivalent for intrinsic type 'Invalid'            |
| [roLongInteger](doc:rolonginteger) | Object equivalent for intrinsic type LongInteger            |
| [roString](doc:rostring)      | Object equivalent for intrinsic type 'String'            |

## Supported methods

### ToStr() As String

#### Description

Returns the value as a string.

#### Return Value

The string.

### ToStr(format As String) As String

#### Description

Returns the object's value formatted as a string according to the specified printf-like [format string](doc:global-string-functions).

The object's value can be considered as an implicit parameter to be converted in the formatting for each placeholder parameter.

The format specifier must match the value's data type (for example, *"%d"* would be valid for an integer value, but not for a string value).

#### Return Value

The formatted string.

#### Support

Format-string support (the `ifToStr` interface) is implemented by the following types:

- Integer (roInt)
- LongInteger (roLongInteger)
- Float (roFloat)
- Double (roDouble)
- String (roString) 
- Boolean (roBoolean) 



#### Examples

##### Integer (Decimal)

```brightscript
print 123.ToStr("%d")
'=> "123"

n = 300 + 45
print n.ToStr("The value is %d.")
'=> "The value is 345."

month = 7
print month.ToStr("%2d")
'=> " 7"

month = 8
print month.ToStr("%02d")
'=> "08"

month = 9
print month.ToStr("%-4d")
'=> "9   "
```

##### Integer (Hexadecimal)

```brightscript
hexy = 32767 - 1
print hexy.ToStr("%08X")
'=> "00007FFE"

print hexy.ToStr("%06x")
'=> "007ffe"

big_num = &H100000000&
print big_num.ToStr("%d = 0x%0X")
'=> "4294967296 = 0x100000000"
```

##### Float

```brightscript
f = 3.141592
print f.ToStr("%f")
'=> "3.141592"

print f.ToStr("%.3f")
'=> "3.142"

print f.ToStr("%4.2f")
'=> "3.14"
```

##### String

```brightscript
s = "123"
print s.ToStr("[%s]")
'=> "[123]"

print s.ToStr("<%5s>")
'=> "<  123>"

print s.ToStr("<%-5s>")
'=> "<123  >"
```