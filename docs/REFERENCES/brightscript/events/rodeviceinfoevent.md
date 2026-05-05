---
title: roDeviceInfoEvent
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

The roDeviceInfo component sends the roDeviceInfoEvent with the following predicates that indicate its valid event types:

## Supported methods

### isStatusMessage() as Boolean

Checks if the device status has changed. This method returns true if the device status has changed; otherwise, it returns false.

#### GetInfo() as Object

Checks the current status of the device. This method returns an roAssociativeArray containing one of the following members:

<Table>
  <thead>
    <tr>
      <th>
        Member
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        audioGuideEnabled
      </td>
      <td>
        Boolean
      </td>
      <td>
        True if the screen reader is enabled. The audioGuideEnabled event will only ever get fired if <Anchor label="ifDeviceInfo.EnableAudioGuideChangedEvent(true)" title="ifDeviceInfo.EnableAudioGuideChangedEvent(true)" href="https://roku-ent.readme.io/dev/docs/ifdeviceinfo#enableaudioguidechangedeventenable-as-boolean-as-dynamic">ifDeviceInfo.EnableAudioGuideChangedEvent(true)</Anchor> called before entering the message loop
      </td>
    </tr>
    <tr>
      <td>
        exitedScreensaver
      </td>
      <td>
        Boolean
      </td>
      <td>
        True if the screensaver was exited. The exitedScreensaver event will only ever get fired if <Anchor label="ifDeviceInfo.EnableScreensaverExitedEvent(true)" title="ifDeviceInfo.EnableScreensaverExitedEvent(true)" href="https://roku-ent.readme.io/dev/docs/ifdeviceinfo#enablescreensaverexitedeventenable-as-boolean-as-dynamic">ifDeviceInfo.EnableScreensaverExitedEvent(true)</Anchor> is called before entering the message loop
      </td>
    </tr>
    <tr>
      <td>
        appFocused
      </td>
      <td>
        Boolean
      </td>
      <td>
        It is set to False when the System Overlay takes focus and True when the app regains focus
      </td>
    </tr>
    <tr>
      <td>
        linkStatus
      </td>
      <td>
        Boolean
      </td>
      <td>
        True if the device currently seems to have an active network connection. The linkStatus event will only ever get fired if <Anchor label="ifDeviceInfo.EnableLinkStatusEvent(true)" title="ifDeviceInfo.EnableLinkStatusEvent(true)" href="https://roku-ent.readme.io/dev/docs/ifdeviceinfo#enablelinkstatuseventenable-as-boolean-as-boolean">ifDeviceInfo.EnableLinkStatusEvent(true)</Anchor>  is called before entering the message loop
      </td>
    </tr>
    <tr>
      <td>
        generalMemoryLevel
      </td>
      <td>
        String
      </td>
      <td>
        Fires notifications to the app about memory levels. This event will be sent first when the OS transitions from "normal" to "low" state and will continue to be sent while in "low" or "critical" states.<br /><br />The events will be throttled so as to not overwhelm the application listening for these events. The application may voluntarily free up memory by invalidating references to objects (e.g. release ContentNodes held in a cache, release offscreen renderable nodes, etc.). <br /><br />The "low" and "critical" events will be sent to the OS forces the application to exit.  

        * "normal" means that the general memory is within acceptable levels
        * "low" means that the general memory is below acceptable levels but not critical
        * "critical" means that general memory are at dangerously low level and that the OS may force terminate the application
      </td>
    </tr>
    <tr>
      <td>
        audioCodecCapabilityChanged
      </td>
      <td>
        Boolean
      </td>
      <td>
        The audio codec capability has changed if true. If your application receives this event, you can check the current audio playback capability using the [`roDeviceInfo.CanDecodeAudio`](doc:ifdeviceinfo)asObject) and [`roDeviceInfo.GetAudioDecodeInfo`](doc:ifdeviceinfo)asObject) methods. <br /><br />This event is only fired if the [`ifDeviceInfo.EnableCodecCapChangedEvent(true)`](doc:ifdeviceinfo)) is called before entering the message loop.
      </td>
    </tr>
    <tr>
      <td>
        videoCodecCapabilityChanged
      </td>
      <td>
        Boolean
      </td>
      <td>
        The video codec capability has changed if true. If your application receives this event, you can check the current video playback capability using the [`roDeviceInfo.CanDecodeVideo`](doc:ifdeviceinfo)asObject) method.<br /><br />This event is only fired if [`ifDeviceInfo.EnableCodecCapChangedEvent(true)`](doc:ifdeviceinfo)) is called before entering the message loop.
      </td>
    </tr>
  </tbody>
</Table>

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
