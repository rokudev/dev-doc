---
title: "ifArrayJoin"
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

# ifArrayJoin


## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
|  [roArray](/docs/references/brightscript/components/roarray.md "roArray")   | Returns information about the application |


## Supported methods

### Join(separator as String) as String

#### Description

Creates a string by joining all array elements together separated by the specified separator. All elements must be of type string; otherwise, an empty string is returned

#### Parameters

| Name      | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| separator | String | The string used to separate elements in an array. |

#### Return Value

A String containing the array elements. 

#### Examples

~~~
    a = ["ant","bat","cat"] 
    s = a.Join(",")
    print """" + s + """"
    REM "ant,bat,cat"
    
    a = "abc".Split("")
    s = a.Join("--")
    print """" + s + """"
    REM "a--b--c"
~~~
