---
title: "roPath"
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



The roPath component provides developers an easy way to create valid file system paths. 

The roPath component is a convenience class that implements [ifString](doc:ifstring) while providing additional validation and path inspection functionality. See [File System](doc:file-system) for more information about valid path names.

This object is created with a string that represents the initial path:

``CreateObject("roPath", "ext1:/vid")``


**Example**

~~~
path = CreateObject("roPath", filename)
parts = path.Split()
if parts.phy = "tmp:" then print "this is a temp file"
if parts.extension = ".bmp" then print "this is a bitmap file"
~~~


## Supported interfaces

- [ifPath](doc:ifpath)
- [ifString](doc:ifstring)