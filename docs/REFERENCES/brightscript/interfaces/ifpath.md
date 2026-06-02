---
title: "ifPath"
excerpt: 'Interface methods for validating and manipulating file system paths'
deprecated: false
hidden: false
metadata:
  title: 'ifPath'
  description: 'Documents the ifPath interface, which provides Change, IsValid, and Split methods for working with relative and absolute file system paths.'
  robots: index
next:
  description: ''
---


| Name   | Description                                                                            |
| ------ | -------------------------------------------------------------------------------------- |
| [roPath](doc:ropath) | The roPath component provides developers an easy way to create valid file system paths |

## Supported methods

### Change(path as String) as Boolean

#### Description

Modifies or changes the current path via the specified relative or absolute path.


<table>
<thead>
<tr>
<th>Name</th>
<th>Return Type</th>
<th>Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Change</td>
<td>Boolean</td>
<td>$&#123;changeparamTable&#125;</td>
<td>Returns true if the resulting path is valid, otherwise false</td>
<td></td>
</tr>
</tbody>
</table>


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

Returns an [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md) containing keys for the parent directories, extensions, and file name in the file path.

#### Return Value

An [roAssociativeArray](doc:roassociativearray) that contains the following keys: <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>basename</td><td>String</td><td>The filename, without parent directories or extension.</td></tr><tr><td>extension</td><td>String</td><td>The filename, with extension, without parent directories.</td></tr><tr><td>filename</td><td>String</td><td>The filename.</td></tr><tr><td>parent</td><td>String</td><td>The parent directory, or empty if in a root directory.</td></tr><tr><td>phy</td><td>String</td><td>The PHY volume.</td></tr></tbody></table>


#### Example (Brightscript Debugger Interactive Shell)

```bash
> mypath = CreateObject("roPath", "pkg:/source/appMain.brs")
> ? myPath.Split()
parent: pkg:/source/
extension: .brs
phy: pkg:
basename: appMain
filename: appMain.brs
```