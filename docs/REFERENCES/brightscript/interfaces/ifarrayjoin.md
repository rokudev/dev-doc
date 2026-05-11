---
title: "ifArrayJoin"
excerpt: 'Interface providing Join to concatenate array elements into a single string'
deprecated: false
hidden: false
metadata:
  title: 'ifArrayJoin'
  description: 'The ifArrayJoin interface provides the Join method, which concatenates all string elements of an array into a single string separated by a specified separator.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
|  [roArray](doc:roarray)   | Returns information about the application |


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

```
    a = ["ant","bat","cat"]
    s = a.Join(",")
    print """" + s + """"
    ' "ant,bat,cat"

    a = "abc".Split("")
    s = a.Join("--")
    print """" + s + """"
    ' "a--b--c"
```


