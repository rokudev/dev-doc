---
title: "ifPath"
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

# ifPath

| Name   | Description                                                                            |
| ------ | -------------------------------------------------------------------------------------- |
| [roPath](/docs/references/brightscript/components/ropath.md "roPath") | The roPath component provides developers an easy way to create valid file system paths |

## Supported methods

### Change(path as String) as Boolean

#### Description

Modifies or changes the current path via the specified relative or absolute path.

| Name   | Return Type    | Parameters          | Return Value                                              | Description           |
| ------ | ------- | ------------------- | ------------------------------------------------------------ | --------------------- |
| Change | Boolean | ${changeparamTable} | Returns true if the resulting path is valid, otherwise false |  |

#### Parameters

| Name | Type   | Description                                               |
| ---- | ------ | --------------------------------------------------------- |
| path | String | The new relative or absolute file system path to be used. |

#### Return Value

A flag indicating whether the path was successfully changed. 

### IsValid() as Boolean

#### Description

Checks whether the current path is valid (the path is correctly formed). This does not check whether the file actually exists.

#### Return Value

A flag indicating whether the current path is valid. 

### Split() as Object

#### Description

Returns an [roAssociativeArray](https://sdkdocs-archive.staging.web.roku.com/roAssociativeArray_1611481.html) containing keys for the parent directories, extensions, and file name in the file path.

#### Return Value

An [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md "roAssociativeArray") that contains the following keys: ${SplitValues}

{#SplitValues}

| Name      | Type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| basename  | String | The filename, without parent directories or extension.    |
| extension | String | The filename, with extension, without parent directories. |
| filename  | String | The filename.                                             |
| parent    | String | The parent directory, or empty if in a root directory.    |
| phy       | String | The PHY volume.                                           |

#### Example (Brightscript Debugger Interactive Shell)

~~~
> mypath = CreateObject("roPath", "pkg:/source/appMain.brs")
> ? myPath.Split()
parent: pkg:/source/
extension: .brs
phy: pkg:
basename: appMain
filename: appMain.brs
~~~

