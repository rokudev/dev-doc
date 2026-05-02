---
title: "roByteArray"
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


The byte array component is used to contain and manipulate an arbitrary array of bytes. 

This object contains functions to convert strings to or from a byte array, as well as to or from ascii hex or ascii base 64. Note that if you are converting a byte array to a string, and the byte array contains a zero, the string conversion will end at that point. roByteArray will autosize to become larger as needed. If you wish to turn off this behavior, then use the SetResize() function. If you read an uninitialized index, "invalid" is returned. 
roByteArray supports the [ifArray](doc:ifarray) interface, and so can be accessed with the array [] operator. The byte array is always accessed as unsigned bytes when using this interface. roByteArray also supports the ifEnum interface, and so can be used with a "for each" statement.

**Example**

```
ba=CreateObject("roByteArray")
ba.FromAsciiString("leasure.")
if ba.ToBase64String()<>"bGVhc3VyZS4=" then stop
  
ba=CreateObject("roByteArray")
ba.fromhexstring("00FF1001")
if ba[0]<>0 or ba[1]<>255 or ba[2]<>16 or ba[3]<>1 then stop
  
ba=CreateObject("roByteArray")
for x=0 to 4000
    ba.push(x)
end for
 
ba.WriteFile("tmp:/ByteArrayTestFile")
ba2=CreateObject("roByteArray")
ba2.ReadFile("tmp:/ByteArrayTestFile")
if ba.Count()<>ba2.Count() then stop
for x=0 to 4000
    if ba[x]<>ba2[x] then stop
end for

ba2.ReadFile("tmp:/ByteArrayTestFile", 10, 100)
if ba2.count()<>100 then stop
for x=10 to 100
    if ba2[x-10]<>x then stop
end for
```


## Supported interfaces

- [ifByteArray](doc:ifbytearray)
- [ifArray](doc:ifarray)
- [ifArrayGet](doc:ifarrayget)
- [ifArraySet](doc:ifarrayset)
- [ifArraySlice](doc:ifarrayslice)
- [ifEnum](doc:ifenum)