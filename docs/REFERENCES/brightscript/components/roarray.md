---
title: "roArray"
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


An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type.

An roArray is created with two parameters:

**CreateObject("roArray", size as Integer, resize as Boolean)**

Size is the initial number of elements allocated for the array. If resize is true, the array will be resized if needed to accommodate more elements. If the array is large, this might be slow.
The "dim" statement may be used instead of CreateObject to allocate a new array. Dim has the advantage in that it automatically creates arrays of arrays for multi-dimensional arrays.

## Supported interfaces

- [ifArray](doc:ifarray)
- [ifArrayGet](doc:ifarrayget)
- [ifArraySet](doc:ifarrayset)
- [ifEnum](doc:ifenum)
- [ifArrayJoin](doc:ifarrayjoin)
- [ifArraySizeInfo](doc:ifarraysizeinfo)
- [ifArraySort](doc:ifarraysort)
- [ifArraySlice](doc:ifarrayslice)
