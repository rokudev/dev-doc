---
title: "ifCECStatus"
excerpt: 'Interface providing active source status detection via IsActiveSource'
deprecated: false
hidden: false
metadata:
  title: 'ifCECStatus'
  description: 'Documents the ifCECStatus interface, which provides the IsActiveSource method to determine whether the device is the active source.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name                                                         | Description                                        |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [roCECStatus](doc:rocecstatus) | Identifies the active source status for set boxes. |


## Supported methods

### IsActiveSource() As Boolean

#### Description

Indicates whether the device is the active source.

#### Return Value

A flag indicating whether the device is the active source (true). If the device is not the active source, this flag is set to false.