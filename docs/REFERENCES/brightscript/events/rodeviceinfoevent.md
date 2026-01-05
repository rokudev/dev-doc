---
title: "roDeviceInfoEvent"
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

# roDeviceInfoEvent

The roDeviceInfo component sends the roDeviceInfoEvent with the following predicates that indicate its valid event types:

## Supported methods

### isStatusMessage() as Boolean

Checks if the device status has changed. This method returns true if the device status has changed; otherwise, it returns false.

#### GetInfo() as Object

Checks the current status of the device. This method returns an roAssociativeArray containing one of the following members:

| Member                      | Type    | Description                                                  |
| --------------------------- | ------- | ------------------------------------------------------------ |
| audioGuideEnabled           | Boolean | True if the screen reader is enabled. The audioGuideEnabled event will only ever get fired if [ifDeviceInfo.EnableAudioGuideChangedEvent(true)](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enableaudioguidechangedeventenable-as-boolean-as-dynamic "ifDeviceInfo.EnableAudioGuideChangedEvent(true)") called before entering the message loop |
| exitedScreensaver           | Boolean | True if the screensaver was exited. The exitedScreensaver event will only ever get fired if [ifDeviceInfo.EnableScreensaverExitedEvent(true)](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enablescreensaverexitedeventenable-as-boolean-as-dynamic "ifDeviceInfo.EnableScreensaverExitedEvent(true)") is called before entering the message loop |
| appFocused                  | Boolean | It is set to False when the System Overlay takes focus and True when the app regains focus |
| linkStatus                  | Boolean | True if the device currently seems to have an active network connection. The linkStatus event will only ever get fired if [ifDeviceInfo.EnableLinkStatusEvent(true)](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enablelinkstatuseventenable-as-boolean-as-boolean "ifDeviceInfo.EnableLinkStatusEvent(true)")  is called before entering the message loop |
| generalMemoryLevel          | String  | Fires notifications to the app about memory levels. This event will be sent first when the OS transitions from "normal" to "low" state and will continue to be sent while in "low" or "critical" states.<br /><br />The events will be throttled so as to not overwhelm the application listening for these events. The application may voluntarily free up memory by invalidating references to objects (e.g. release ContentNodes held in a cache, release offscreen renderable nodes, etc.). <br /><br />The "low" and "critical" events will be sent to the OS forces the application to exit. ${depgeneralMemoryLevel} |
| audioCodecCapabilityChanged | Boolean | The audio codec capability has changed if true. If your application receives this event, you can check the current audio playback capability using the [`roDeviceInfo.CanDecodeAudio`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#ifDeviceInfo-CanDecodeAudio\(audio_formatasObject\)asObject) and [`roDeviceInfo.GetAudioDecodeInfo`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#ifDeviceInfo-GetAudioDecodeInfo\(\)asObject) methods. <br/><br/>This event is only fired if the [`ifDeviceInfo.EnableCodecCapChangedEvent(true)`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#ifDeviceInfo-EnableAudioGuideChangedEvent\(enableasBoolean\)) is called before entering the message loop. |
| videoCodecCapabilityChanged | Boolean | The video codec capability has changed if true. If your application receives this event, you can check the current video playback capability using the [`roDeviceInfo.CanDecodeVideo`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#ifDeviceInfo-CanDecodeVideo\(video_formatasObject\)asObject) method.<br/><br/>This event is only fired if [`ifDeviceInfo.EnableCodecCapChangedEvent(true)`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#ifDeviceInfoEnableAudioGuideChangedEvent\(enableasBoolean\)) is called before entering the message loop. |

{#depgeneralMemoryLevel}

- "normal" means that the general memory is within acceptable levels
- "low" means that the general memory is below acceptable levels but not critical
- "critical" means that general memory are at dangerously low level and that the OS may force terminate the application

### isCaptionModeChanged() as Boolean

Indicates whether the user has changed the closed caption mode or track.  This method returns true if the caption mode changed; otherwise, it returns false.

Call the [GetInfo()](#getinfo-as-object) method to get the caption mode.

#### GetInfo() as Object

Indicates the current global setting for the Mode property, which may be one of the following values:

* "On"
* "Off"
* "Instant replay"
* "When mute" (Only returned for a TV; this option is not available on STBs).

### EnableValidClockEvent(enable as Boolean)

Indicates whether the RokuOS has successfully connected to the network and contacted the timeserver in order to set the device's clock. Call the [GetInfo()](#getinfo-as-object) method to confirm that the system clock is valid.

#### GetInfo() as Object

This method returns an roAssociativeArray containing a **validClock** field that indicates whether the system clock is valid. 

| Member     | Type    | Description                        |
| ---------- | ------- | ---------------------------------- |
| validClock | Boolean | True if the system clock is valid. |
