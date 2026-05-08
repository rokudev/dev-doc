---
title: "ifBoolean"
excerpt: 'Interface for getting and setting boolean values on boolean objects'
deprecated: false
hidden: false
metadata:
  title: 'ifBoolean'
  description: 'Documents the ifBoolean interface, which provides GetBoolean and SetBoolean methods for getting and setting the boolean value stored in a boolean object.'
  robots: index
next:
  description: ''
---


Interface equivalent for intrinsic type Boolean.

## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
| [roBoolean](doc:roboolean) | Object equivalent for intrinsic type Boolean |


## Supported methods

### GetBoolean() As Boolean

#### Description

Gets the boolean value stored in the calling boolean object. 

#### Return Value

The boolean value stored in the calling boolean object. 

### SetBoolean(value As Boolean) As Void

#### Description

Sets the calling boolean object to the specified true/false value. 

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| value | Boolean | True/false. |