---
title: "roPath"
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

# roPath


The roPath component provides developers an easy way to create valid file system paths. 

The roPath component is a convenience class that implements [ifString](/docs/references/brightscript/interfaces/ifstring.md "ifString") while providing additional validation and path inspection functionality. See [File System](/docs/developer-program/getting-started/architecture/file-system.md "File System") for more information about valid path names.

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

- [ifPath](/docs/references/brightscript/interfaces/ifpath.md "ifPath")
- [ifString](/docs/references/brightscript/interfaces/ifstring.md "ifString")