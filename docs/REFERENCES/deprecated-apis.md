---
title: Deprecated APIs
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
Roku periodically deprecates nodes, functions, fields, and attributes when releasing new or updated APIs.

Deprecated APIs should no longer be used because they may be removed from future Roku OS releases, and they may also cause your app to fail [certification testing](doc:certification). Proactively updating your app code with the latest APIs ensures that your app is unaffected by the deprecation process.

The [Roku OS release notes](doc:release-notes) document which APIs are being deprecated with each release.

> Do not use deprecated APIs. Roku's [Static Analysis tool](doc:static-analysis-tool), which is used for [certification testing](doc:certification) of apps, detects and reports any deprecated APIs in the app code as errors. All reported errors in the app code (including those resulting from the use of deprecated APIs) must be resolved to pass Static Analysis testing and publish the app.

## Roku SceneGraph (RSG) 1.1 apps

As of the Roku OS 14.5 release (April 10, 2025), support for apps using SceneGraph 1.1 (RSG 1.1) has ended on Roku OS 14.5. Apps claiming "rsg_version=1.1" in the manifest file will execute as if rsg_version=1.2 was specified and therefore may stop functioning properly on Roku OS 14.5. Developers must migrate their RSG 1.1 apps to RSG 1.2 to ensure they run on Roku OS 14.5.

In the Roku OS 9.0 release, the **eval()** function was deprecated and developers were instructed to use RSG 1.2 by setting the **rsg_version** flag in their manifest file to “rsg_version=1.2” in order to optimize load time performance and memory usage. In the Roku OS 9.3 release, the **eval()** function was sunset and it was noted that developers had to either remove all usage of the **eval()** function or update the **rsg_version** flag to “rsgversion=1.1”. With the release of Roku OS 14.5, the "rsg_version=1.1" manifest value is no longer an option and will be ignored.

## roAppManager.ShowChannelStoreSpringboard()

As of February 10, 2025, the **roAppManager.ShowChannelStoreSpringboard()** function is deprecated. Static Analysis will block the publishing of new or updated apps that use this function.

## [roUrlTransfer.enableFreshConnection()](doc:ifurltransfer)

Since Roku OS 11.5 (September 2022), the Roku OS no longer supports the **roUrlTransfer.enableFreshConnection()** function. Apps should always reuse connections because it is more efficient (new connections impact app performance by increasing latency and consuming more CPU).

## [Audio node Windows Media Audio](doc:audio)

Since Roku OS 10.5 (September 2021), the Windows Media Audio (**wma**) and WMApro (**wmapro**) audio formats are no longer supported. Both formats were officially sunset as part of the Roku OS 12.5 release in September 2023. See the [Audio node](doc:audio) for the current list of audio formats supported by the Roku platform.

## [Signal beacon SteadyMaxMemPoints](doc:measuring-channel-performance)

Since Roku OS 10.0 (April 2021), the **SteadyMaxMemPoints** metric has been removed from the signal beacon performance measurements. It is no longer reported in the debugging logs when an app is exited. Use the [**chanperf**](doc:debugging) SceneGraph debug console command to measure an app's memory consumption.

## File:// URLs

As of Roku OS 10.0 (April 2021), apps must replace all **file://** URLs with **pkg:/** URLs.

### Nielsen DAR APIs

Developers should use the [general audience measurement APIs](doc:raf-api) instead of calling the enableNielsenDAR() and setNielsenProgramId() methods.

## [SceneGraph Video node manifestData fields](doc:video)

Since Roku OS 9.4 (September 2020), the `manifestData[periods]` and `manifestData[mpd]` fields were deprecated. Those fields were replaced by `manifestData[xml],`which provided access to the same information and more. However, since then, access to the **Video.manifestData** field itself has been restricted and is no longer externally documented because it is not compatible across all device platforms (particularly, lower-end devices).

## [Eval()](doc:runtime-functions)

Since Roku OS 9.3 (April 2020)**,** the [Eval()](doc:runtime-functions) function has been sunset and is no longer in the Roku OS. Do not use this function; it will cause compilation or runtime errors. This completes a deprecation process that began with the Roku OS 9.0 release (October 2018).

Developers using the **eval()** function to initialize data should use the [parseJSON()](doc:global-utility-functions) function instead.

As described in [Manifest file](doc:channel-manifest):

* In Roku OS 9.0 with rsg_version=1.2, use of the runtime function Eval() will result in a compile-time error.
* In Roku OS 9.0 other usage of Eval() is not thread-safe and may result in runtime errors.

## [DRM](doc:content-protection)

The following DRMs are no longer supported:

* Verimatrix DRM (deprecated in Roku OS 9.3).
* Adobe DRM (deprecated in Roku OS 9.3).

Make sure that content in your app is protected using a Roku-supported DRM such as Widevine, PlayReady, or AES-128.

## [roDeviceInfo.GetVersion()](doc:ifdeviceinfo)

Use the [**roDeviceInfo.GetOsVersion()** function](doc:ifdeviceinfo) instead, which was introduced in Roku 9.2 OS (September 2019), to get the **major**, **minor**, **revision**, and **build** numbers of the Roku OS running on a device.

## [ifDeviceInfo](doc:ifdeviceinfo)

### [GetConnectionInfo() MAC address field](doc:ifdeviceinfo)

The [roDeviceInfo.GetConnectionInfo() ](doc:ifdeviceinfo)method no longer returns a device's MAC address (it returns a string of zeros). Developers can use the [roDeviceInfo.GetChannelClientId ](doc:ifdeviceinfo)method to uniquely identify devices.

### [isHDMIConnected()](doc:ifdeviceinfo)

The [roDeviceInfo.isHDMIConnected()](doc:ifdeviceinfo) method is deprecated. Use the [roHdmiStatus.IsConnected()](doc:ifhdmistatus) method instead.

### [GetAudioDecodeInfo()](doc:ifdeviceinfo)

The [GetAudioDecodeInfo()](doc:ifdeviceinfo) method is deprecated. Use the [CanDecodeAudio()](doc:ifdeviceinfo) method instead.

### Other deprecated ifDeviceInfo methods

Several properties of ifDeviceInfo were deprecated with the release of Roku OS 8.1 (May 2018) and were ultimately removed from the firmware in Roku OS 9.1 (April 2019).

Those deprecated methods of [ifDeviceInfo](doc:ifdeviceinfo) were replaced with similar methods in Roku OS 8.1 (May 2018).

| **Deprecated method**          | **Replacement method**                   |
| ------------------------------ | ---------------------------------------- |
| GetDrmInfo()                   | [GetDrmInfoEx()](doc:ifdeviceinfo)       |
| GetAdvertisingId()             | [GetRIDA()](doc:ifdeviceinfo)            |
| IsAdIdTrackingDisabled()       | [IsRIDADisabled()](doc:ifdeviceinfo)     |
| GetClientTrackingId()          | [GetChannelClientId()](doc:ifdeviceinfo) |
| GetDeviceUniqueId()            | [GetChannelClientId()](doc:ifdeviceinfo) |
| GetVideoDecodeInfo() as Object | [CanDecodeVideo()](doc:ifdeviceinfo)     |

### [ifUrlTransfer](doc:ifurltransfer)

Deprecated prior to September 2018: UrlEncode(url as String)

### [roVideoPlayerEvent.IsStatusMessage() status values](doc:rovideoplayerevent)

The following status values returned by the [roVideoPlayerEvent.IsStatusMessage()](doc:rovideoplayerevent) method are deprecated:

* "end of stream"
* "end of playlist"

### [Content metadata](doc:content-metadata)

Several attributes have been deprecated:

* AudioLanguageSelected  (deprecated in Roku OS 9.2). Users can select their preferred audio language on-device in the Settings > Audio > Audio Preferred Language screen.
* AudioPIDPref. (users can select their preferred audio language on-device in the Settings > Audio > Audio Preferred Language screen).
* PlayDuration (deprecated in Roku OS 8.1)
* encodingKey (use licenseServerURL)
* encodingType  (use licenseServerURL)
* "wmv" as a value for the streamformat field.

Consult the linked documentation page for details.

### [roScreen SD mode](doc:roscreen)

Using the [roScreen](doc:roscreen) node in SD mode has been deprecated. Developers should develop games in HD mode.

### [Roku manifest](doc:channel-manifest)

Several attributes have been deprecated; consult the linked documentation page for details.

### roAppInfo.getSubtitle()

**roAppInfo.getSubtitle()** function has been deprecated since around Roku OS 5.0.

## Deprecated Components: January 1, 2018

As of this date, all newly published or re-published apps were required to use SceneGraph or Direct Publisher. Accordingly, all legacy visual screen components and associated event components were deprecated.

> These components were sunset as part of the Roku OS 11.5 release (September 12, 2022). The documentation for these components and events has been removed.

Below is the list of relevant sunset components and events:

| **Legacy component**     | **Associated event**          |
| ------------------------ | ----------------------------- |
| roCaptionRenderer        | roCaptionRendererEvent        |
| roCodeRegistrationScreen | roCodeRegistrationScreenEvent |
| roFontMetrics            |                               |
| roGridScreen             | roGridScreenEvent             |
| roKeyboardScreen         | roKeyboardScreenEvent         |
| roImageCanvas            | roImageCanvasEvent            |
| roListScreen             | roListScreenEvent             |
| roMessageDialog          | roMessageDialogEvent          |
| roOneLineDialog          | roOneLineDialogEvent          |
| roParagraphScreen        | roParagraphScreenEvent        |
| roPinEntryDialog         | roPinEntryDialogEvent         |
| roPosterScreen           | roPosterScreenEvent           |
| roSearchHistory          |                               |
| roSearchScreen           | roSearchScreenEvent           |
| roSlideShow              | roSlideShowEvent              |
| roSpringboardScreen      | roSpringboardScreenEvent      |
| roTextScreen             | roTextScreenEvent             |
| roVideoScreen            | roVideoScreenEvent            |

## Deprecated interfaces: July 1, 2017

Since July 1, 2017, the interfaces listed below have been deprecated and apps using them have been rejected during certification for publication or re-publication.

> These interfaces were sunset as part of the Roku OS 11.5 release (September 12, 2022).  The documentation for these interfaces has been removed.

ifCaptionRenderer

ifCodeRegistrationScreen

ifFontMetrics

ifGridScreen

ifImageCanvas

ifKeyboardScreen

ifListScreen

ifMessageDialog

ifOneLineDialog

ifParagraphScreen

ifPinEntryDialog

ifPosterScreen

ifSearchHistory

ifSearchScreen

ifSlideShow

ifSpringboardScreen

ifTextScreen

ifVideoScreen
