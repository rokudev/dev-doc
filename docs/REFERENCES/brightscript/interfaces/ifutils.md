---
title: IfUtils
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
_Available since Roku OS 15.0_

## Implemented by

| Name                   | Description                                                                                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [roUtils](doc:routils) | The **roUtils** component provides a unique namespace for a library of global functions, including the **DeepCopy()** function for copying objects and their nested objects and the **isSameObject()** function for checking whether two BrightScript objects refer to the same instance. |

### DeepCopy(data as Object) as Object

#### Description

Performs a deep copy of a node object (it copies the obejct and all of its nested objects). If the object contains items that are not copyable, they are skipped.

#### Parameters

| **Name** | **Type** | **Description**         |
| :------- | :------- | :---------------------- |
| data     | Object   | The object to be copied |

#### Return Value

This function returns a copy of the specified object.

#### Example

```
utils = CreateObject("roUtils")
    di = CreateObject("roDeviceInfo")
    aa = &#123; a: 1, b: &#123; b1: 42 &#125;, c: di &#125;
    new_aa = utils.DeepCopy(aa)
    ? "IsSameObject", utils.IsSameObject(aa, new_aa)
    ? "new_aa.a", new_aa.a
    ? "new_aa.b", new_aa.b
    ? "new_aa.c", new_aa.c ' invalid, roDeviceInfo is not copyable
```

This code will output the following on the port 8085 console:

```
IsSameObject    false
new_aa.a         1
new_aa.b        <Component: roAssociativeArray> =
&#123;
    b1: 42
&#125;
new_aa.c        invalid
```

### IsSameObject(data1 as Object, data2 as Object) as Boolean

#### Description

Checks whether two BrightScript objects refer to the same instance and returns a flag indicating the result.

#### Parameters

| **Name** | **Type** | **Description** |
| :------- | :------- | :-------------- |
| data1    | Object   | First object    |
| data2    | Object   | Second object   |

#### Return Value

Returns true if **data1** and **data2** reference the same object; otherwise, this returns false.

#### Example

```
shared = &#123;&#125;
    aa = &#123;"a": shared, "b": shared&#125;
    utils = CreateObject("roUtils")
    utils.isSameObject(aa, aa)   ' returns true
    utils.isSameObject(aa, &#123;&#125;)   ' returns false
    utils.isSameObject(aa.a, aa.b)  ' returns true
```
