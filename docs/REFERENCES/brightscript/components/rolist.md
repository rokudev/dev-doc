---
title: "roList"
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


The list object implements the interfaces: ifList, ifArray, ifEnum and therefore can behave like an array that can dynamically add members. The array operator [ ] can be used to access any element in the ordered list.

**Example**

Implementation:

```
list = CreateObject("roList")
list.AddTail("a")
list.AddTail("b")
list.AddTail("c")
list.AddTail("d")
list.ResetIndex()
x= list.GetIndex()
while x <> invalid
    print x
    x = list.GetIndex()
end while
 
 
print list[2]
```

Output:

```
a
b
c
d
c 
```


## Supported Interfaces

- [ifList](doc:iflist)
- [ifArray](doc:ifarray)
- [ifArrayGet](doc:ifarrayget)
- [ifArraySet](doc:ifarrayset)
- [ifEnum](doc:ifenum)
- [ifListToArray](doc:iflisttoarray)

