---
title: ifDeviceInfo
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
## Implemented by

| Name                             | Description                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| [roDeviceInfo](doc:rodeviceinfo) | The roDeviceInfo component provides an interface to obtain attributes about the device |

## Supported methods

#### Device properties

### GetModel() as String

#### Description

Returns the model name of the Roku device. See the [Hardware Specification](/docs/specs/hardware.md) for the list of the current, updatable, and legacy Roku models.

#### Return Values

A five-character alphanumeric string (for example, "3050X") .

### GetModelDisplayName() as String

#### Description

Returns the model display name of the Roku device.

#### Return Values

The model display name (for example, "Roku 2 XD")

### GetModelType() as String

#### Description

Returns a string describing the type of device. For future compatibility, the caller should by default assume "STB" when anything other than described value is returned

#### Return Values

The device type, which may be one of the following values:

* "STB": Set-top box.
* "TV": Roku TV.

### GetModelDetails() as Object

#### Description

Returns detailed information about the device model.

#### Return Values

An associative array containing the following information about the device model:

| Name          | Type   | Description               |
| ------------- | ------ | ------------------------- |
| VendorName    | String | The model vendor.         |
| ModelNumber   | String | The model number.         |
| VendorUSBName | String | The USB vendor.           |
| ScreenSize    | String | The size of the Roku TV.  |
| Manufacturer  | String | Manufacturer information. |

### GetFriendlyName() as String

#### Description

Returns a string describing the device that may be used for network device selection.  The string is subject to change and should not be used as a persistent key or ID

#### Return Values

A user-assigned device name or a description of the device such as model name and/or serial number.

### GetOSVersion() As Object

#### Description

Returns an roAssociativeArray containing the **major**, **minor**, **revision**, and **build** numbers of the Roku OS running on the device.

#### Return Values

An roAssociativeArray containing the following fields:

| Name     | Type   | Description                                   |
| -------- | ------ | --------------------------------------------- |
| major    | string | The major version number (for example, 9)     |
| minor    | string | The minor version number (for example, 2)     |
| revision | string | The firmware revision number (for example, 6) |
| build    | string | The build number (for example, 4127)          |
