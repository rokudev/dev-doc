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


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roRemoteInfo](doc:roremoteinfo) | The roRemoteInfo component provides an interface to obtain attributes about the Roku remote control that is currently connected to the Roku device. Note that a Roku remote control device that is paired with a device, may not be the one that is currently connected (a single remote is typically connected to a device at a time). |


## Supported methods

### GetModel(remoteIndex as Integer) as Integer

Returns the model number of the specified Roku remote control. For example, this function returns 135 for an RC135 remote that is connected to the Roku device.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>remoteIndex</td>
<td>Integer</td>
<td>The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br /><ul><li>-1: The most recently used remote. </li><li>0: The first connected remote (this is typically the only remote that is connected to the device).</li></ul></td>
</tr>
</tbody>
</table>



#### Return Values

The model number of the specified Roku remote control, or 0 if the specified remote does not exist. 

### IsAwake(remoteIndex as Integer) as Boolean

Checks whether the specified Roku remote control is awake. 

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>remoteIndex</td>
<td>Integer</td>
<td>The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br /><ul><li>-1: The most recently used remote. </li><li>0: The first connected remote (this is typically the only remote that is connected to the device).</li></ul></td>
</tr>
</tbody>
</table>


#### Return Values

A flag indicating whether the specified Roku remote control is awake.

### HasFeature(feature as String, remoteIndex as Integer) as Boolean

#### Description

Checks if the specified Roku remote control supports the passed in feature string.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>feature</td>
<td>String</td>
<td>The feature to be checked, which may be one of the following values: <ul><li>"bluetooth"</li><li>"wifi"</li><li>"motion"</li><li>"audio"</li><li>"voicecapture"</li><li>"findremote"</li><li>"hasMuteSwitch" (<em>Available since Roku OS 13.0</em>; enables developers to check whether a Roku remote control includes a hands-free voice switch).</li></ul></td>
</tr>
<tr>
<td>remoteIndex</td>
<td>Integer</td>
<td>The index for a Roku remote control that is currently connected to the Roku device. In addition to specific remote index, the following values may be specified:<br /><ul><li>-1: The most recently used remote. </li><li>0: The first connected remote (this is typically the only remote that is connected to the device).</li></ul></td>
</tr>
</tbody>
</table>


#### Return Values

A flag indicating whether the Roku remote control supports the passed in feature string.