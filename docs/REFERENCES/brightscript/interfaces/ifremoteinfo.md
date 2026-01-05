---
title: "ifRemoteInfo"
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

# ifRemoteInfo

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roRemoteInfo](/docs/references/brightscript/components/roremoteinfo.md "roRemoteInfo") | The roRemoteInfo component provides an interface to obtain attributes about the Roku remote control that is currently connected to the Roku device. Note that a Roku remote control device that is paired with a device, may not be the one that is currently connected (a single remote is typically connected to a device at a time). |


## Supported methods

### GetModel(remoteIndex as Integer) as Integer

Returns the model number of the specified Roku remote control. For example, this function returns 135 for an RC135 remote that is connected to the Roku device.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| remoteIndex | Integer | The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br />${remote-index-values} |

{#remote-index-values}  

- -1: The most recently used remote. 
- 0: The first connected remote (this is typically the only remote that is connected to the device).

#### Return Values

The model number of the specified Roku remote control, or 0 if the specified remote does not exist. 

### IsAwake(remoteIndex as Integer) as Boolean

Checks whether the specified Roku remote control is awake. 

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| remoteIndex | Integer | The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br />${remote-index-values} |

#### Return Values

A flag indicating whether the specified Roku remote control is awake.

### HasFeature(feature as String, remoteIndex as Integer) as Boolean

#### Description

Checks if the specified Roku remote control supports the passed in feature string.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| feature     | String  | The feature to be checked, which may be one of the following values: ${remote-feature-list} |
| remoteIndex | Integer | The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br />${remote-index-values} |

#### Return Values

A flag indicating whether the Roku remote control supports the passed in feature string.

{#remote-feature-list}

- "bluetooth"
- "wifi"
- "motion"
- "audio"
- "voicecapture"
- "findremote"
- "hasMuteSwitch" (*Available since Roku OS 13.0*; enables developers to check whether a Roku remote control includes a hands-free voice switch). 