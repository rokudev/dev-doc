---
title: "ifByteArray"
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

# ifByteArray

## Implemented by

| Name        | Description                               |
| ----------- | ----------------------------------------- |
| [roByteArray](/docs/references/brightscript/components/robytearray.md "roByteArray") | The byte array component is used to contain and manipulate an arbitrary array of bytes |


## Supported methods

### WriteFile(path as String) As Boolean

#### Description

Writes the bytes contained in the Byte Array to the specified file.

#### Parameters

| Name | Type   | Description                                                |
| ---- | ------ | ---------------------------------------------------------- |
| path | String | The path to the file to which the bytes are to be written. |

#### Return Value

A flag indicating whether the bytes were successfully written to the file.

### WriteFile(path as String, start_index as Integer, length as Integer) As Boolean

#### Description

Writes a subset of the bytes contained in the Byte Array to the specified file.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| path        | String  | The path to the file to which the bytes are to be written.   |
| start_index | Integer | The index of the calling ByteArray from which to start writing bytes. |
| length      | Integer | The length of the bytes to be written to the file, starting from the specified index. |

#### Return Value

A flag indicating whether the bytes were successfully written to the file.

### ReadFile(path as String) As Boolean

#### Description

Reads the specified file into the Byte Array. Any data currently in the Byte Array is discarded.

#### Parameters

| Name | Type   | Description                      |
| ---- | ------ | -------------------------------- |
| path | String | The path to the file to be read. |

#### Return Value

A flag indicating whether the bytes were successfully read into the Byte Array.

### ReadFile(path as String, start_pos as Integer, length as Integer) As Boolean

#### Description

Reads the specified file into the Byte Array. Any data currently in the Byte Array is discarded.

#### Parameters

| Name      | Type    | Description                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| path      | String  | The path to the file to be read.                             |
| start_pos | Integer | The index of the file from which to start reading bytes.     |
| length    | Integer | The length of the bytes to be read from the file, starting from the specified starting position. |

#### Return Value

A flag indicating whether the bytes were successfully read into the Byte Array.

## Slice([start_pos as Integer[, end_pos as Integer]]) As Object

#### Description

Returns a new array object with a shallow copy of the specified portion of the array. 

The **start_pos** and **end_pos** fields specify the 0-based indices of items in the array, where the **end_pos** field represents the position **past** the last element to be copied.

#### Parameters

| Name      | Type    | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| start_pos | Integer | The 0-based index of first element to copy. A negative index specifies an offset from the end of the array. The default value is 0. |
| end_pos   | Integer | The 0-based index past last element to copy. A negative index indicates an offset from the end of the array. The default value is the array length. |

#### Example

```
'          0   1   2   3   4   5
byteArr = [99, 26, 26, 36, 42]

' get the 3rd (index 2) and subsequent elements
byteArr2 = byteArr.Slice(2)
? FormatJSON(byteArr2)
' => [26,36,42]

' get the 2nd (index 1) through 3rd (index 2) elements
byteArr2 = byteArr.Slice(1, 3)
? FormatJSON(byteArr2)
' => [26,26]

' get the last 2 elements
byteArr2 = byteArr.Slice(-2)
? FormatJSON(byteArr2)
' => [36,42]

' empty range
byteArr2 = byteArr.Slice(1, 1)
? FormatJSON(byteArr2)
' => []
```



### AppendFile(path as String) As Boolean

#### Description

Appends the contents of the Byte Array to the specified file.

#### Parameters

| Name | Type   | Description                                           |
| ---- | ------ | ----------------------------------------------------- |
| path | String | The path to the file to be appended to the ByteArray. |

#### Return Value

A flag indicating whether the file was successfully appended to the calling ByteArray.


### AppendFile(path as String, start_pos as Integer, length as Integer) As Boolean

#### Description

Appends the contents of the Byte Array to the specified file.

#### Parameters

| Name      | Type    | Description                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| path      | String  | The path to the file to be appended to the Byte Array.       |
| start_pos | Integer | The position in the file from which to start appending bytes. |
| length    | Integer | The length of the bytes to be appended to the Byte Array, starting from the specified starting position. |

#### Return Value

A flag indicating whether the file was successfully appended to the calling ByteArray.

### SetResize(min_size as Integer, auto_resize as Boolean) As Void

#### Description

If the size of the Byte Array is less than min_size, expands the Byte Array to min_size. Also sets the auto-resize attribute of the Byte Array to the specified value.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| min_size    | Integer | The minimum size to which the calling Byte Array is to be expanded. |
| auto_resize | Boolean | A flag specifying whether auto resize is enabled on the calling Byte Array. |

### ToHexString() As String

#### Description

Returns a hexadecimal string representing the contents of the Byte Array, two digits per byte.

#### Return Value

A hexadecimal string.

### FromHexString(hexstring as String) As Void

#### Description

Sets the contents of the Byte Array to the specified value. Any data currently in the Byte Array is discarded.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| hexstring | String | An even number of hexadecimal digits. The string must contain valid hexadecimal digits, or the result is undefined |

### ToBase64String() As String

#### Description

Returns a base-64 string representing the contents of the Byte Array.

#### Return Value

A base-64 string representing the contents of the Byte Array.

### FromBase64String(s as String) As Void

#### Description

Sets the contents of the Byte Array to the specified value. Any data currently in the Byte Array is discarded.

#### Parameters

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| s    | String | A valid base-64 encoding |

### ToAsciiString() As String

#### Description

Returns the contents of the Byte Array as a string. The contents must be valid UTF-8 (or ASCII subset), or the result is undefined

#### Return Value

A String containing the contents of the ByteArray.

### FromAsciiString(s as String)

#### Description

Sets the contents of the Byte Array to the specified string using UTF-8 encoding. Any data currently in the Byte Array is discarded.

#### Parameters

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| s    | String | The string to which the ByteArray is to be set. |

### GetSignedByte(index as Integer) As Integer

#### Description

Returns the signed byte at the specified zero-based index in the Byte Array<br /><br />Use the [ifArrayGet.GetEntry()](/docs/references/brightscript/interfaces/ifarrayget.md#getentryindex-as-integer-as-dynamic) method or the [ ] array operator to read an unsigned byte in the Byte Array.

#### Parameters

| Name  | Type    | Description                                  |
| ----- | ------- | -------------------------------------------- |
| index | Integer | The index of the signed byte to be returned. |

#### Return Value

The signed byte at the specified zero-based index in the Byte Array.

### GetSignedLong(index as Integer) As Integer

#### Description

Returns the signed long (four bytes) starting at the specified zero-based index in the Byte Array.

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| index | Integer | The index of the ByteArray from which to start retrieving the signed long. |

#### Return Value

A signed long. 

### GetCRC32() as Integer

#### Description

Calculates a CRC-32 of the contents of the Byte Array.

#### Return Value

The calculated CRC-32 checksum. 

#### Example

~~~
    ba = CreateObject("roByteArray") 
    ba.FromAsciiString("Hello world!")
    n = ba.GetCrc32()
    print n, "0x" ; StrI(n, 16)
    REM 461707669 0x1b851995
~~~

### GetCRC32(start as Integer, length as Integer) As Integer

#### Description

Calculates a CRC-32 of a subset of bytes within the Byte Array.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| start  | Integer | The starting index of the subset of bytes to be used in the CRC-32 calculation. |
| length | Integer | The length of the bytes to be included.                      |

#### Return Value

The calculated CRC-32 checksum. 

### IsLittleEndianCPU() As Boolean

#### Description

Returns true if the CPU architecture is little-endian.

#### Return Value

A flag indicating whether the CPU architecture is little-endian.







