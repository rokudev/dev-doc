---
title: "ifArraySort"
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


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roArray](doc:roarray) | An array stores an indexed collection of BrightScript objects. Each entry of an array can be a different type, or they may all of the same type. |


## Supported methods

### Sort(flags as String = "") as Void

#### Description

 Performs a stable sort on an array. 

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| flags | Dynamic | Items are arbitrarily grouped by comparable type of number or string, and are sorted within the group with a logical comparison.<br/><br/>If "r" is included in flags, a reverse sort is performed. If "i" is included in flags, a case-insensitive sort is performed. If invalid flags are specified, the sort is not performed. |

#### Examples

~~~
    a=[3, 1, 2] 
    a.Sort()
    print a  
    REM sets the array to [1, 2, 3]

    a=[3, 1, 2.5] 
    a.Sort("r")  REM reverse order sort
    print a
    REM sets the array to [3, 2.5, 1]

    a=["cat", "DOG", "bee"] 
    a.Sort()  REM case-sensitive sort by default
    print a
    REM sets the array to ["DOG", "bee", "cat"]

    a=["cat", "DOG", "bee"]  
    a.Sort("i")  REM case-insensitive sort
    print a
    REM sets the array to ["bee", "cat", "DOG"]

    a=["cat", "DOG", "bee"]  
    a.Sort("ir")  REM case-insensitive, reverse order sort
    print a
    REM sets the array to ["DOG", "cat", "bee"]
~~~

### SortBy(fieldName as String, flags as String = "") as Void

#### Description

Performs a stable sort of an array of associative arrays by value of a common field.

#### Parameters

| Name      | Type    | Description                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| fieldName | String  | The field to be used for sorting.                            |
| flags     | Dynamic | Items are arbitrarily grouped by comparable type of number or string, and are sorted within the group with a logical comparison.<br/><br/>If "r" is included in flags, a reverse sort is performed. If "i" is included in flags, a case-insensitive sort is performed. If invalid flags are specified, the sort is not performed. |

#### Examples

~~~
    a=[ {id:3, name:"Betty"}, {id:1, name:"Carol"}, {id:2, name:"Anne"} ]
    a.SortBy("name") 
    REM sets the array to [ {id:2, name:"Anne"}, {id:3, name:"Betty"}, {id:1, name:"Carol"} ]
    a.SortBy("id") 
    REM sets the array to [ {id:1, name:"Carol"}, {id:2, name:"Anne"}, {id:3, name:"Betty"} ]
    a.SortBy("name", "r")  REM reverse order sort
    REM sets the array to [ {id:1, name:"Carol"}, {id:3, name:"Betty"}, {id:2, name:"Anne"} ]
~~~

### Reverse() as Void

#### Description

Reverses the order of elements in an array.

#### Example

~~~
    a=[1, "one", 2, "two"] 
    a.Reverse() 
    REM sets the array to ["two", 2, "one", 1]
~~~
