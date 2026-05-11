---
title: "roInt"
excerpt: 'Object wrapper for the intrinsic Integer type with ifInt and ifIntOps support'
deprecated: false
hidden: false
metadata:
  title: 'roInt'
  description: 'roInt is the object equivalent of the intrinsic Integer type, exposing the ifInt, ifIntOps, and ifToStr interfaces for integer operations.'
  robots: index
next:
  description: ''
---


roInt is the object equivalent for intrinsic type Integer.

This is useful in the following situations:

- When an object is needed, instead of an intrinsic value. For example, "roList" maintains a list of objects. If an Integer is added to roList, it will be automatically wrapped in an roInt by the language interpreter. When a function that expects a BrightScript Component as a parameter is passed an int, BrightScript automatically creates the equivalent BrightScript Component.
- If any object exposes the ifInt interface, that object can be used in any expression that expects an intrinsic value. For example, in this way an roTouchEvent can be used as an integer whose value is the userid of the roTouchEvent.

> If o is an roInt, then the following statements have the following effects

> print o ' prints o.GetInt()

> i%=o ' assigns the integer i% the value of o.GetInt()

> k=o 'presumably k is dynamic typed, so it becomes another reference to the roInt o

> o=5 'this is NOT the same as o.SetInt(5). Instead it releases o, and 'changes the type of o to Integer (o is dynamically typed). And assigns it to 5.


**Example**

```
BrightScript> o=CreateObject("roInt")
BrightScript> o.SetInt(555)
BrightScript> print o
555
BrightScript> print o.GetInt()
555
BrightScript> print o-55
500
```


## Supported interfaces

- [ifInt](doc:ifint)
- [ifIntOps](doc:ifintops)
- [ifToStr](doc:iftostr)
