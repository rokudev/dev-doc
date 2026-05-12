---
title: Release notes
excerpt: 'Developer-facing API, tools, and media playback changes by Roku OS version'
deprecated: false
hidden: false
metadata:
  title: 'Release notes | Roku Developer Docs'
  description: 'Cumulative developer release notes for Roku OS, covering new APIs, media playback features, debugging tools, and deprecated functions from OS 5.0 through 15.2.'
  robots: index
next:
  description: ''
---
# Roku OS developer release notes

> [Join the Roku beta program](https://rokutestingportal.centercode.com/key/rdbp) to implement new features in the latest Roku OS before the general release.

## Roku OS 15.2

Roku OS 15.2 enhances Roku’s Perfetto-based app tracing tool, which can now visualize the BrightScript heap graph to inform developers which SceneGraph and BrightScript objects consume the most memory.

Developers can now get raw Linux CPU and processing statistics with the **chanperf** ECP command and integrate it into their first-party app monitoring tools. Other new Developer Tool features include new Debug Protocol virtual variables for retrieving **roInputEvent**, **roUrlEvent**, and **roDateTime** values.

In addition, this release includes new BrightScript APIs that expand low-memory event notifications, get remote control repeat delay/rate information, and support AES-GCM cyphers.

Here is the list of key developer-facing Roku OS 15.2 updates:

#### BrightScript APIs

##### Configurable low-memory events

Apps subscribed to low-memory events with the  [**roAppMemoryMonitor** component](doc:roappmemorymonitor) will now receive [roAppMemoryNotificationEvent](doc:roappmemorynotificationevent) alerts when memory usage exceeds or falls below specific thresholds (currently 80%, 85%, 90%, 95% of the per-app limit).

##### roDeviceInfo remote control repeat delay/rate APIs

The [roDeviceInfo component](doc:rodeviceinfo) includes functions for querying and monitoring [EN 301 549 accessibility-related remote repeat settings](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)

##### roEVPCipher AES-GCM support

To support AES-GCM (authenticated encryption mode), the [roEVPCipher](doc:roevpcipher) component include new **setTag** and **getTag** functions.

##### roUtils.HasComponent function

The [roUtils component](doc:routils) now includes the following **hasComponent** function that developers can call to verify whether a component name is registered before trying to create an instance.

#### Developer and debugging tools

##### BrightScript heap graph visualization in Perfetto

Roku’s [Perfetto-based app tracing tool](doc:app-tracing) can now visualize the BrightScript heap graph to inform developers which SceneGraph and BrightScript objects consume the most memory.

##### ECP chanperf command returns raw Linux performance stats

The [ECP](doc:external-control-api) **chanperf** command returns a new **\<proc-stat>** field that reports the raw Linux CPU and processing status information ([/proc/pid/stat](https://www.man7.org/linux/man-pages//man5/proc_pid_stat.5.html)).  Developers can use this data in their own monitoring and debugging tools to optimize app performance.

##### Debug protocol support for new virtual variables

Developers can now retrieve **roInputEvent**, **roUrlEvent**, and **roDateTime** values with the [Debug Protocol](doc:socket-based-debugger). This improves stepping performance when these virtual variables are expanded.

## Roku OS 15.1

Roku OS 15.1 includes support for app tracing with Perfetto, new media playback and content metadata features, and a deprecated API.

Here is the list of key developer-facing Roku OS 15.1 updates:

#### Media playback and content metadata

##### New seek mode based on HLS Manifest

The [**Video.seekMode** field](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) supports a new “manifest” mode that seeks to the start offset time specified in the EXT-X-START tag of the HLS manifest.

#### Developer and debugging tools

##### Perfetto app tracing

You can use [Perfetto](https://perfetto.dev/docs/) to record, analyze, and visualize traces of your Roku apps to pinpoint where you can reduce resource consumption and optimize performance.  Tracing captures and visualizes the events in your app on a timeline, which provides you with a detailed graphical view of what your app is doing over time.

With Roku ECP and a Websocket client, you can launch your app, record and save a trace, and then open it in Perfetto. You can then explore the trace in Perfetto by using the WASD keys on your keyboard to zoom and pan, and your mouse to expand process tracks (rows) into their constituent thread tracks. You can also execute SQL-based queries in Perfetto.

For more information on using Perfetto to trace your Roku apps, click [here](/docs/developer-program/dev-tools/app-tracing.md).

#### Deprecations

###### roString.AppendString(s as String, len as Integer) as Void

This function has been deprecated. Use the [SetString() function](/docs/references/brightscript/interfaces/ifstringops.md#setstrings-as-string-len-as-integer-as-void) instead.

## Roku OS 15.0

Roku OS 15.0 features major BrightScript updates, including new APIs for transferring node data and handling references, improved JSON parsing with reduced memory overhead, and more robust functions for getting the system uptime and date/time.

In addition, this release includes new media playback and content metadata features and enhancements to the Roku Resource Monitor.

Here is the list of key developer-facing Roku OS 15.0 updates:

#### BrightScript APIs

##### Optimized data transfer and reference handling APIs

This release features a set of new APIs for transferring node data more efficiently than copying. These APIs let you move data in and out of fields, access data by reference, and queue the messages to be consumed by handlers on the render thread. This improves app performance by minimizing memory consumption, especially for handling larger objects.

> Click [here](/docs/developer-program/performance-guide/data-transfer-apis.md) for detailed information on using these APIs.

##### roArray.ifArraySizeInfo()

The new **ifArraySizeInfo()** interface includes set of functions that provide developers with more control over array capacities. These functions reduce the memory overhead when using the [**ParseJSON()** function](/docs/references/brightscript/language/global-utility-functions.md#parsejsonjsonstring-as-string-flags---as-string-as-object) on large JSON body data sets.

###### IsResizable() As Boolean

Returns a flag indicating whether the array will automatically expand to store new items.

###### Capacity() As Integer

Returns the current storage capacity of the array (specifically, how many items could be stored without allocating additional storage).

The return value may be 0 if the array is empty and no storage has been allocated yet.

###### Reserve(minSize As Integer)

Sends a request to allocate or increase storage capacity of the array to hold at least the specified number of items.

Returns true if the potential capacity update can hold the specified number of items. Otherwise, returns false if the array is not resizable or storage allocation fails.

> The updated capacity of the array may be more than was requested if the extra capacity already existed or how storage was implemented.

###### ShrinkToFit() As Boolean

Request to free or decrease storage to the minimum needed to store the current number of items.

Returns true unless the array is not resizable or storage reallocation fails.

> The updated capacity of the array may be more than the exact number of items in it based on the storage implementation.

##### roDeviceInfo.GetUptimeMillisecondsAsLong() as Long

The **GetUptimeMillisecondsAsLong()** function returns the system's uptime since the last reboot (in milliseconds as a Long). This function is similar to the [global utility Uptime function](/docs/references/brightscript/language/global-utility-functions.md#uptimedummy-as-integer-as-float), but makes it easier for developers to handle monotonic milliseconds.

##### roDateTime.AsMillisecondsLong() as Long

The **roDateTime.AsMillisecondsLong()** function returns a Long representing the date/time as the number of milliseconds from the Unix epoch (00:00:00 1/1/1970 GMT).

#### Media playback and content metadata

##### Widevine license wrapping - license challenge URL support

The [**contentNode.drmParams.requestField**](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes), which was introduced in Roku OS 14.6, now supports the LICENSE_CHALLENGE field being provided as a URL (in addition to a text string).  The Roku OS automatically follows the challenge URLs properly.

##### roDeviceInfo.IsAutoAdjustRefreshRateEnabled()

The **roDeviceInfo.IsAutoAdjustRefreshRateEnabled()** function checks whether the Auto Adjust Display Refresh Rate setting is enabled on a device.

#### Developer and debugging tools

##### ECP commands for checking CEC settings on Roku streaming players

Developers can now use [ECP](/docs/developer-program/dev-tools/external-control-api.md) to check whether CEC settings (TV power and volume control) have been enabled on a Roku streaming player.

The [**query-device-info** command](/docs/developer-program/dev-tools/external-control-api.md#querydevice-info-example) now returns the following fields that indicate whether TV power and audio volume control have been enabled on a player:

* supports-tv-power-control
* supports-audio-volume-control

##### Roku Resource Monitor 4.2

[Roku Resource Monitor 4.2](/docs/developer-program/dev-tools/resource-monitor.md) features a new **Data Collection Mode** that enables developers to integrate a headless version of the tool into their CLI pipelines. This provides developers with automated data collection and performance monitoring without having to use the RRM UI. The collected data can be used to detect memory leaks, analyze resource utilization trends, and debug issues.

* To download the tool, click [here](https://devtools.web.roku.com/#rrm-tool).
* For more information, read the [Roku Resource Monitor documentation](/docs/developer-program/dev-tools/resource-monitor.md).

## Roku OS 14.6

Roku OS 14.6 includes BrightScript updates, new media playback and content metadata features, and enhancements to the Roku Resource Monitor and debugging tools. Here is the list of key developer-facing Roku OS 14.6 updates:

#### BrightScript APIs

##### ParseJson() support for double precision numbers

The [parseJson() function](/docs/references/brightscript/language/global-utility-functions.md#parsejsonjsonstring-as-string-flags---as-string-as-object) includes a new “**d”** flag that changes floating point number parsing to use double-precision floating point values (roDouble), when needed, to improve the precision of the parsed numbers. This helps developers handle JSON payloads from server-side ad insertion (SSAI) providers that use floating-point values to represent time values.

#### Media playback and content metadata

##### Widevine license wrapping

The [contentNode.drmParams field](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes) includes four new parameters that enable developers to wrap the Widevine license challenge payload in the request format (JSON or XML) required by their license server proxy:

#### Developer and debugging tools

##### Roku Resource Monitor 4.1

[Roku Resource Monitor 4.1 (RRM 4.1)](https://devtools.web.roku.com/#rrm-tool) improves scrollbar behavior and provides additional support for large session files. The **SceneGraph nodes** panel now includes shallow memory usage summaries, and the **BrightScript objects** panel now includes object counts and memory usage per thread.

* To download the tool, click [here](https://devtools.web.roku.com/#rrm-tool).
* For more information, read the [Roku Resource Monitor documentation](/docs/developer-program/dev-tools/resource-monitor.md).

##### Cross-component backtrace in debug console and debug protocol

The debug console and debug protocol both now include cross-component backtraces. This means that you can now navigate and inspect function context frames from different SceneGraph components, instead of just from the active component, if the call chain includes observer callbacks or functions called via `callFunc`

For example, if roSgNode A calls into roSgNode B on the same thread (for example, via [CallFunc](/docs/developer-program/core-concepts/handling-application-events.md#functional-fields)) and then B breaks into the call, you can now view the calls belonging to both A and B in the backtrace of the thread.

###### Debug console

You can use the existing `backtrace`, `up`, `down`, `over`, and `out` commands in the [debug console](/docs/developer-program/debugging/debugging-channels.md) on stack frames entered via `callFunc` or an observer callback, in addition to a normal BrightScript function call.

###### Debug protocol

You can now use the STEP command in the [BrightScript debug protocol](/docs/developer-program/debugging/socket-based-debugger.md) to step over and out of SceneGraph observer callbacks and functions called via `callFunc`.

#### Deprecations

##### Blowfish ciphers

Blowfish (bf*) ciphers are now marked as obsolete in the [roEVPCipher document](/docs/references/brightscript/components/roevpcipher.md). Support for these ciphers may be removed in future Roku OS releases.

## Roku OS 14.5

Roku OS 14.5 includes major updates to Roku Developer Tools, including the Roku Resource Monitor and BrightScript Profiler. Here is the list of key developer-facing Roku OS 14.5 updates:

#### Roku Developer Tools

Essential updates have been made to the following Roku Developer Tools to ensure compatibility and reliability across modern platforms:

* Roku Advanced Layout Editor
* Roku Remote Tool
* Roku DeepLinking Tester
* Roku Stream Tester

This release provides the following improvements, critical bug fixes, and updates to the dependency stack to improve support for current and upcoming operating systems:

* **Updated dependencies**: All major libraries and components have been upgraded to support the latest macOS (incl. Sequoia), Linux, and Windows 11 environments.
* **Signed macOS build**: Package signing has been updated so tools now launch without warnings on MacOS systems.
* **Improved cross-platform support**: Enhanced performance and system integration across macOS, Linux distributions, and Windows.
* **Bug fixes**: Resolved various issues and improved user experience.

##### Roku Resource Monitor 4.0

[Roku Resource Monitor 4.0 (RRM 4.0)](https://devtools.web.roku.com/#rrm-tool) introduces several UI enhancements, including the ability to disable specific metric panels for your channel. This feature stops monitoring and hides the selected metric, allowing for a more streamlined and customized monitoring experience.  Additionally, RRM 4.0 automatically saves your view configuration, ensuring your preferred layout is retained the next time you launch the tool.

RRM 4.0 also consolidates the BrightScript Objects panels into one graph and adds an option for displaying the memory used by different objects, breaks out the SceneGraph metrics into the different node types (similar to the BrightScript Objects panel), and lets you drill down into the source code associated with a rendezvous event.

* To download the tool, click [here](https://devtools.web.roku.com/#rrm-tool).
* For more information, read the [Roku Resource Monitor documentation](/docs/developer-program/dev-tools/resource-monitor.md).

##### BrightScript Profiler

The BrightScript Profiler features improved performance and stability. The tool uses less CPU and memory resources; therefore, it stays performant as you use it for longer sessions or switch tabs during a session.

* To download the tool, click [here](https://devtools.web.roku.com/#brs-profiler-tool).
* For more information, read the [BrightScript profiler documentation](/docs/developer-program/dev-tools/brightscript-profiler.md).

#### Media playback and content metadata

The [**drmParams** parameter](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes) now includes an **ignoreInitDataPssh** control attribute that ignores the PSSH in the initialization segment. This enables support for Harmonic/DTV-GO DASH-IOP v5.0.0 streams with In-Band Key-Rotation Signaling without breaking legacy streams/apps that do not provide the `<ContentProtection>` element with PSSH info in the DASH manifest.

#### Roku SceneGraph (RSG) 1.1 apps sunset

Support for apps using SceneGraph 1.1 (RSG 1.1) has ended on Roku OS 14.5. Apps claiming "rsg_version=1.1" in the manifest file will execute as if rsg_version=1.2 was specified and therefore may stop functioning properly on Roku OS 14.5. Developers must migrate their RSG 1.1 apps to RSG 1.2 to ensure they run on Roku OS 14.5.

In the Roku OS 9.0 release, the **eval()** function was deprecated and developers were instructed to use RSG 1.2 by setting the **rsg_version** flag in their manifest file to “rsg_version=1.2” in order to optimize load time performance and memory usage. In the Roku OS 9.3 release, the **eval()** function was sunset and it was noted that developers had to either remove all usage of the **eval()** function or update the **rsg_version** flag to “rsgversion=1.1”. With the release of Roku OS 14.5, the "rsg_version=1.1" manifest value is no longer an option and will be ignored.

## Roku OS 14.0

**Initial rollout date**: September 24, 2024

Roku OS 14.0 includes new SceneGraph features for displaying monospaced text in your apps. Developers can use the new [**MonospaceLabel** node](/docs/references/scenegraph/label-nodes/monospace-label.md) to draw a single line of text with all characters spaced at a fixed distance from each other. This functions as an alternative to using a monospace font with the **Label** node. In addition, the [**LabelBase** node](/docs/references/scenegraph/abstract-nodes/labelbase.md) includes a new [**monospacedDigits** field](/docs/references/scenegraph/abstract-nodes/labelbase.md#fields) that enables the rendering of tabular digits in overhang time values and countdowns.

In addition, Roku OS 14.0 includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.

Here is the list of key developer-facing Roku OS 14.0 updates:

* [**MonospaceLabel**](/docs/references/scenegraph/label-nodes/monospace-label.md) — The [**MonospaceLabel** node](/docs/references/scenegraph/label-nodes/monospace-label.md) is used to draw a single line of text with all characters spaced at a fixed distance from each other. It transforms proportional fonts into monospaced fonts. It is a substitute for using a monospace font with the **Label** node.
* [**LabelBase.monospacedDigits**](/docs/references/scenegraph/abstract-nodes/labelbase.md#fields) — The LabelBase.monospacedDigits field is used to render monospaced digits.

## Roku OS 13.0

**Initial rollout date**: April 10, 2024

Roku OS 13.0 includes a new [**contentClassifier** content metadata attribute](/docs/developer-program/getting-started/architecture/content-metadata.md#content-classification-attributes) that lets developers optimize the sound and picture on Roku TVs based on different content genres. This helps developers increase app engagement by giving customers a simple, convenient way to optimize their playback experience. Other media enhancements include new **Video** node attributes that provide developers with accessibility information about audio and subtitle tracks.

New BrightScript APIs help developers monitor and debug memory issues. The [**roAppMemoryMonitor** node](/docs/references/brightscript/interfaces/ifappmemorymonitor.md#getchannelmemorylimit-as-object) includes a new function that returns the maximum amount of background and foreground memory an app may use, and the [**roAppManager** node](/docs/references/brightscript/interfaces/ifappmanager.md#getlastexitinfo-as-object) includes a function that lists the reason an app was terminated. In addition, this release includes new APIs that let developers check whether autoplay is enabled on a device and whether the system clock is valid.

For tools, ECP includes new [**exit-app**](/docs/developer-program/dev-tools/external-control-api.md#exit-app-example) and [**query-app-state**](/docs/developer-program/dev-tools/external-control-api.md#queryapp-state-example) commands that help developers automate the testing of apps that support Instant Resume and a new [**query/app-object-counts** command](/docs/developer-program/dev-tools/external-control-api.md#queryapp-object-counts-example) that helps developers associate memory and CPU usage with changes in BrightScript node object counts in their apps.

Here is the list of key developer-facing Roku OS 13.0 updates:

#### BrightScript APIs

* [**Maximum available memory query**](/docs/references/brightscript/interfaces/ifappmemorymonitor.md#getchannelmemorylimit-as-object) —  The **roAppMemoryMonitor** component includes a new [**GetChannelMemoryLimit** () function](/docs/references/brightscript/interfaces/ifappmemorymonitor.md#getchannelmemorylimit-as-object) that returns how much foreground and background memory the app may use and the maximum amount of memory that the RokuOS may allocate on behalf of the app (the memory that shows up in the app's heap memory statistics ). This helps developers debug memory issues and find out the maximum available memory for scenarios such as when their app has been suspended and is in the background, is playing a video, and so on.

* [**App exit query**](/docs/references/brightscript/interfaces/ifappmanager.md#getlastexitinfo-as-object) — The **roAppManager** component includes a new [**GetLastExitInfo**() function](/docs/references/brightscript/interfaces/ifappmanager.md#getlastexitinfo-as-object) that returns an exit code indicating why an app was terminated. This helps developers monitor and debug memory issues with their apps. The last exit information is provided for only the 10 most recent exits across all apps, and exit information does not persist across device reboots.

* [**Autoplay-enabled query**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isautoplayenabled-as-boolean) — The **roDeviceInfo** component includes a new [**IsAutoplayEnabled**() function](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isautoplayenabled-as-boolean) that lets developers check whether autoplay is enabled on a device. This lets developers ensure that their apps respect this device setting when customers browse content in their app.

* [**Hands-free voice remote check**](/docs/references/brightscript/interfaces/ifremoteinfo.md#hasfeaturefeature-as-string-remoteindex-as-integer-as-boolean) — The [**roRemoteInfo.hasFeature()** function](/docs/references/brightscript/interfaces/ifremoteinfo.md#hasfeaturefeature-as-string-remoteindex-as-integer-as-boolean) now takes a "hasMuteSwitch" parameter, which enables developers to check whether a Roku remote control includes a hands-free voice switch.

#### Media, DRM, and content metadata updates

* [**Optimized sound and picture for Roku TVs based on content genre**](/docs/developer-program/getting-started/architecture/content-metadata.md#content-classification-attributes) — Developers can use the new [**contentClassifier** content metadata attribute](/docs/developer-program/getting-started/architecture/content-metadata.md#content-classification-attributes) to specify the genre of their content (for example, action, sports, or comedy), and the Roku OS will use this attribute to automatically adjust the sound and picture on Roku TVs (if auto mode is selected for the picture or sound settings).

* [**Accessibility information for audio and subtitle tracks**](/docs/references/scenegraph/media-playback-nodes/video.md#closed-caption-fields) —  The **Video** node's [**availableAudioTracks**](/docs/references/scenegraph/media-playback-nodes/video.md#closed-caption-fields) and [**availableSubtitleTracks**](/docs/references/scenegraph/media-playback-nodes/video.md#audio-fields) fields include new key-value pairs that provide accessibility information for audio and subtitle tracks. This helps developers identify whether a given track is an audio description.

* [**Seamless audio track selection**](/docs/references/scenegraph/media-playback-nodes/video.md#audio-fields) — The **Video** node includes a new [**seamlessAudioTrackSelection** field](/docs/references/scenegraph/media-playback-nodes/video.md#audio-fields) that enables apps to continuously play video content when the audio track is switched (provided that the audio format remains the same). This gives developers the choice when the audio track is changed to either pause the video for approximately 1 second (current default behavior) or continue video playback. This feature currently supports HLS only.

#### Tools

**New ECP commands**

Developers can leverage the following ECP new commands in their tools and web services:

* [**Suspend/terminate app command and app state query**](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) — A new [**exit-app** command](/docs/developer-program/dev-tools/external-control-api.md#exit-app-example) enables developers to suspend or terminate their running app, and a new [**query-app-state** command](/docs/developer-program/dev-tools/external-control-api.md#querychannel-state-example) lets developers check whether their app is active, suspended (background), or inactive. These two commands help developers automate the testing of apps that support [Instant Resume](/docs/developer-program/media-playback/instant-resume.md).

* [**BrightScript object counts query**](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) — ECP includes a new [**query/app-object-counts** command](/docs/developer-program/dev-tools/external-control-api.md#queryapp-object-counts-example) that helps developers determine counts of each type of object held by their BrightScript app.

#### Deprecated APIs

* The [**roAppInfo.getSubtitle()** function has been deprecated](/docs/references/deprecated-apis.md#roappinfogetsubtitle).

## Roku OS 12.5

**Initial rollout date**: September 12, 2023

Roku OS 12.5 includes new APIs for monitoring the current amount of available memory for an app and getting the device user agent. This release also includes features that generally enhance the performance of media playback such as prebuffering for live content, improved closed captioning through ad breaks, and pre-playback audio and subtitle track selection.

Here is the list of key developer-facing Roku OS 12.5 updates:

#### BrightScript APIs

* [**Available memory query**](/docs/references/brightscript/interfaces/ifurltransfer.md#getuseragent-as-string) — The [**roAppMemoryMonitor** node](/docs/references/brightscript/components/roappmemorymonitor.md) includes a new **GetChannelAvailableMemory()** function that provides developers with the estimated kilobytes (Kb) of memory available for their app. This helps developers identify when to release memory when their app receives low-memory warnings.

* [**Device user agent**](/docs/references/brightscript/interfaces/ifurltransfer.md#getuseragent-as-string) — The [**roUrlTransfer** node](/docs/references/brightscript/components/rourltransfer.md) includes a new **GetUserAgent()** function that returns the device user agent. This provides developers with a direct method for getting the user agent in order to pass it into server-side ad requests.

#### Media, DRM, and content metadata updates

* **Prebuffering for live content **— Roku's media player now includes support for prebuffering live content. For video-on-demand (VOD) content, the media player now requires less data to be prebuffered.

* **Improved support for maintaining closed captioning through ad breaks **— If the start-time of a video ad occurs between the buffering and closed captioning start times, Roku's media player now maintains the closed captioning information. This helps recover any close caption sentences that may be missed after an ad break finishes. This is particularly useful for CEA 608/708 caption formatting because caption data is received from video content before ad breaks.

* **Representation filtering based on HDCP level** — When a 4K-capable Roku device is connected to an HD display, the Roku media player now filters out 4K representations to prevent DRM-based decryption failures.

* [**Pre-playback audio and closed captioning track selection **](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields)— The [**Video** node](/docs/references/scenegraph/media-playback-nodes/video.md) includes new fields for specifying the priority order of different audio track and subtitle track selections.

#### Deprecated APIs

* [**run_as_process** manifest attribute](/docs/references/deprecated-apis.md#run_as_process-channel-manifest-attribute) has been deprecated — All apps now run in a separate process, regardless if the **run_as_process** attribute has been specified in the manifest.

* [Support for the Windows Media Audio (wma) file format on the Roku platform has been sunset](/docs/references/deprecated-apis.md#audio-node-windows-media-audio). The WMA audio format was originally deprecated in the Roku OS 10.5 release.

## Roku OS 12.0

**Initial rollout date**: March 8, 2023

Roku OS 12.0 includes a new BrightScript API for getting localized times and Instant Resume support for apps that do not have exit confirmation dialogs. For tools, this release features new External Control Protocol (ECP) query commands, and it enables developers using the BrightScript Debug Protocol to add breakpoints while the script is running.

Here is the list of key developer-facing Roku OS 12.0 updates:

#### BrightScript APIs

* [**Localized date and time formats**](/docs/references/brightscript/interfaces/ifdatetime.md#asdatestringlocformat-as-string-as-string) — The [roDateTime](https://developer.roku.com/docs/references/brightscript/components/rodatetime.md) component includes new **asDateStringLoc()** and **asTimeStringLoc()** methods that developers can use to get the localized date and time of a device. These new methods also enable developers to construct their own custom date and time formats.

* [**IPv6 addresses returned by roDeviceInfo.getConnectionInfo() method**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getconnectioninfo-as-object) — The [roDeviceInfo.getConnectionInfo() method](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getconnectioninfo-as-object) now returns an **ipv6** field, which is an array listing the IPv6 addresses used for the device connection.

#### Integrations

* [**Extended Instant Resume support for apps without exit confirmation dialogs**](/docs/developer-program/media-playback/instant-resume.md) — For apps implementing [Instant Resume](/docs/developer-program/media-playback/instant-resume.md), an interruption event is now generated when the customer exits the app by pressing the back button. For apps that do not have an exit confirmation dialog, developers can now call the **customSuspend** handler when this occurs to save the current app state.

#### Tools

* [**New ECP commands**](/docs/developer-program/dev-tools/external-control-api.md) — [ECP](/docs/developer-program/dev-tools/external-control-api.md) includes a new **query/graphic-frame-rate** command that gets the graphics rendering frame rate, and app and media events can now be now tracked via a set of new **query/fwbeacons** commands (fwbeacons/track, fwbeacons/untrack and query/fwbeacons).

  In addition, calling the **query/registry** ECP command now returns a new **space-available** field that provides developers with the amount of storage currently available in the device's registry, and the **query/sgnodes** command now returns a tree structure representing the app's UI, rather than a flat list of nodes.

  Developers can leverage these commands in their tools and web services.

* [**BrightScript debug protocol (version 3.2)**](/docs/developer-program/debugging/socket-based-debugger.md) — The [BrightScript debug protocol](/docs/developer-program/debugging/socket-based-debugger.md) now supports **ADD_CONDITIONAL_BREAKPOINTS** requests while the script is running. When this occurs, the breakpoints are registered, queued, and then applied as soon as processing allows. This eliminates the need to wait for the script to be paused in order to apply breakpoints. Instead, the breakpoints can now be applied based on the current device state. Developers should now use the **ADD_CONDITIONAL_BREAKPOINTS** command instead of **ADD_BREAKPOINTS** because ADD_CONDITIONAL_BREAKPOINTS is a strict superset of ADD_BREAKPOINTS.

## Roku OS 11.5

**Initial rollout date**: September 12, 2022

Roku OS 11.5 includes new SceneGraph [Video](/docs/references/scenegraph/media-playback-nodes/video.md) and [Content](/docs/developer-program/getting-started/architecture/content-metadata.md) node fields that enhance the trickplay and pause screen experiences during video playback. This release also adds [device attestation tokens](/docs/references/scenegraph/control-nodes/channelstore.md#getdeviceattestationtoken) that developers can incorporate in their web services to verify that messages originated from authentic Roku devices.

In addition, Roku OS 11.5 includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.

For tools, this release features the [Roku Resource Monitor](/docs/developer-program/dev-tools/resource-monitor.md): a new developer tool that tracks and visualizes the system memory, graphics memory, CPU, and SceneGraph nodes used by an app. Developers can use this tool to test the different screens in their app and identify consumption trends and patterns. In addition, this release includes new [External Control Protocol (ECP) query commands](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) that return rendezvous events and the entries in the device registry. Developers can incorporate these new queries in their test labs for debugging and performance monitoring. The [BrightScript Debug Protocol](/docs/developer-program/debugging/socket-based-debugger.md) now includes events for conditional breakpoints, compile errors in the main application and in component libraries, and improved breakpoint support for component libraries.

It is important to note that Roku OS 11.5 sunsets the [SDK1 visual screen components that were originally deprecated in 2017](https://blog.roku.com/developer/legacy-sdk); these components have been completely removed from the Roku OS. In addition, the **roUrlTransfer.enableFreshConnection()** function has been deprecated—apps should always reuse connections.

Here is the list of key developer-facing Roku OS 11.5 updates:

#### SceneGraph APIs

* **Playback UX** — Roku's SceneGraph [Video](/docs/references/scenegraph/media-playback-nodes/video.md) and [Content](/docs/developer-program/getting-started/architecture/content-metadata.md) nodes include new fields that enable developers to integrate playback features for the trickplay and pause screen experiences such as audio and subtitle selection, playlist features such as skip, next, and queues, and autoplay recommendation features such "More like this"/"Because you watched". Customers have become accustomed to this playback experience on The Roku Channel, and it is now available to apps across the platform.

* **[Content.secondaryTitle](/docs/developer-program/getting-started/architecture/content-metadata.md#descriptive-attributes)**. Adds a secondary title for the video content. This field can be used to display the release year of movies, for example.

* [**Video.playbackActionButtons**](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields). Shows the buttons and other specified UI elements on the pause screen at the start of playback. This field includes properties for the button text, icon, and status (enabled/disabled). Related fields identify which pause screen button is selected and has key focus, and sets the button color, text color, and background color based on whether the button has key focus.

* [**Video.pivotNode**](/docs/references/scenegraph/media-playback-nodes/video.md#ui-fields). Adds a generic renderable node that can be used to display any SceneGraph component.

* [**Video.trickPlayBackgroundOverlay**](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields). Specifies the background overlay to be displayed whenever the playback UI is visible during the video playback experience.

* [**Option to disable focus animations in ArrayGrid nodes**](/docs/references/scenegraph/abstract-nodes/arraygrid.md) — Developers can use the new **ArrayGrid.skipFocusAnimations** field to completely disable animations on ArrayGrid child nodes such as the **MarkupGrid** and **MarkupList** components. For apps implementing custom focus logic, this field can be used to eliminate the reported ~300ms period in which no component has focus after a keypress.

* [**Device attestation token**](/docs/references/scenegraph/control-nodes/channelstore.md#getdeviceattestationtoken) — Developers can use the new [**ChannelStore** **getDeviceAttestationToken** command](/docs/references/scenegraph/control-nodes/channelstore.md#getdeviceattestationtoken) to generate a signed JSON web token (JWT) in the Roku cloud and return it to the application. This token can then be passed to the publisher's web services to verify that messages originated from genuine Roku devices. A [**getDeviceAttestation()** function](/docs/references/brightscript/interfaces/ifchannelstore.md#getdeviceattestationtokennonce-as-string-as-object) has also been added to **roChannelStore** component. This token is meant to replace the functionality previously provided by the device client certificates.

#### BrightScript APIs

* [**Continue statements**](/docs/references/brightscript/language/program-statements.md#continue-for--continue-while) — Developers can now insert `continue` statements in `for` and `while` loops. This terminates the execution of the statements in the current iteration of the loop, and then continues execution of the loop with the next iteration.

#### Tools

* [**Roku Resource Monitor**](/docs/developer-program/dev-tools/resource-monitor.md) — The Roku Resource Monitor tracks and visualizes the system memory, graphics memory, CPU, and SceneGraph nodes used by an app. This enables developers to test the different screens in their app and identify consumption trends and patterns. This new developer tool is intended to be used in conjunction with the BrightScript Profiler to improve app performance. For example, if the Roku Resource Monitor consistently shows increased consumption with a specific action on a screen, developers can use the BrightScript Profiler to further drill down into the application and pinpoint where to optimize the code.

* [**New ECP query commands for performance monitoring and debugging apps**](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) — Developers can use the following new ECP query commands to monitor the performance of their apps and debug the apps: **query/sgrendezvous** and **query/registry**. These queries return rendezvous events and the entries in the device registry, respectively. Developers can leverage these commands, which were previously only available via the debug console, in their tools and web services.

* [**Enhanced ECP query commands**](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) — The following ECP commands have been improved for the Roku OS 11.5 release:

  * **query/r2d2-bitmaps**. This command now returns the file name for any asset in texture memory that cannot be attributed directly to a plug-in. In Roku OS 11.0, assets that could not be associated with a plug-in were omitted from the response.

  * **query/sgnodes**. This command can now be called with a specific **channel-id**, which enables it to be used on background apps. The response now includes a **node-count** field.

* [**BrightScript debug protocol updates**](/docs/developer-program/debugging/socket-based-debugger.md) — The BrightScript debug protocol (version 3.1) now includes events for compile errors in the main application and in component libraries, conditional breakpoints, and improved breakpoint support for component libraries.

* [**Improved app compression from** **Development Application Installer**](/docs/developer-program/publishing/packaging-channels.md#packaging-with-the-development-application-installer) — The default compression algorithm in the Development Application installer has been changed to **squashfs (zstd)** from **gzip** for sideloaded apps. In addition, the conversion option **squashfs (gzip)** has been changed to **gzip**. This generally reduces the package file size.

#### Architecture

* **Fonts** — The system fonts have been updated to provide better support for monospaced numerals. As a result, the width of characters may have changed slightly. Developers should make sure to leave space for text to expand or collapse some percentage in their app UI. Developers should not rely on exact font metrics to avoid Label nodes from being truncated or multi-line labels having varied line wrapping.

#### Deprecated/Sunset APIs

* [**SDK1 visual screen components sunset**](/docs/references/deprecated-apis.md#deprecated-components-january-1-2018) — The [SDK1 visual screen components that were deprecated in 2017](https://blog.roku.com/developer/legacy-sdk) have been completely removed from the Roku OS. As a result, apps that still had these [sunset components](https://developer.roku.com/docs/references/deprecated-apis.md#deprecated-components-january-1-2018) as of August 22nd were disabled and removed from the Streaming Store. These apps can no longer be installed or launched unless they were migrated to SDK2 (SceneGraph).

* **[roUrlTransfer.enableFreshConnection()](/docs/references/deprecated-apis.md#rourltransferenablefreshconnection)** — The Roku OS no longer supports the [**roUrlTransfer.enableFreshConnection()** function](/docs/references/brightscript/interfaces/ifurltransfer.md#enablefreshconnectionenable-as-boolean-as-boolean). Apps should always reuse connections because it is more efficient (new connections impact app performance by increasing latency and consuming more CPU).

## Roku OS 11.0

**Initial rollout date**: March 22, 2022

Roku OS 11.0 features new SceneGraph standard dialog framework components for adding multi-style text, images/notes, and button and checkbox icons to custom dialogs; BrightScript optional chaining operators for efficiently accessing possible undefined values; and ChannelStore APIs for displaying a customer's information in the Request for Information (RFI) sign-up screen. Developers of authenticated free and advertising-based video on demand (AVOD) apps can now display the RFI screen without having to first enroll in the Roku Partner Payouts Program.

In addition, Roku OS 11.0 improves trick play for live linear streams, and it includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.

For tools, this release adds new External Control Protocol (ECP) query commands for debugging apps that developers can incorporate in their web services and then leverage in their test suite, and minor updates to the BrightScript debug protocol.

Below is a list of key developer-facing Roku OS 11.0 updates:

#### SceneGraph APIs

* **New standard dialog framework nodes** — Roku's Standard Dialog Framework includes the following new nodes that enable developers to decorate or annotate custom dialogs and highlight the grouping of radio button and checkbox options in them:

  * **[StdDlgMultiStyleTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-multi-style-text-item.md)**. A line of text with multiple styles in the content area of a custom dialog. The text may include, for example, plain and bold characters, different fonts, multiple colors, and/or emojis.

  * [**StdDlgSideCardArea**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-side-card-area.md).  A freeform area on the right or left side of a custom dialog that developers can use to display images or notes.

  * **[StdDlgActionCardItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-action-card-item.md)**. Highlighting for the child items in the content area of a custom dialog. This node enables developers to add a "more info" arrow icon, radio button icon, or check box icon to the items in the content area.

  * [**StdDlgItemGroup**](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-group.md). Visual grouping for a set of StdDlgAreaBase child nodes in a custom dialog. Developers can use this node to reduce the vertical spacing between the StdDlgItemBase child nodes in the dialog.

* **[Option for Label and TextEditBox nodes to display the end of overflowing text](/docs/references/scenegraph/label-nodes/label.md#fields)** — The [**Label**](/docs/references/scenegraph/label-nodes/label.md#fields) and [**TextEditBox**](docs/references/scenegraph/widget-nodes/texteditbox.md) nodes now include a **leadingEllipsis** flag that enables developers to specify whether to show the end or beginning of text that overflows its available width. When this flag is set to true, the end of the text is shown. For example, "the quick brown fox jumps over the lazy dog" would be truncated to "...jumps over the lazy dog". When the flag is false, the start of the text is shown ("the quick brown fox jumps...").

* [**Voice keyboard enhancements**](/docs/references/scenegraph/abstract-nodes/dynamic-keyboard-base.md#fields) — The SceneGraph [**DynamicKeyboardBase**](/docs/references/scenegraph/abstract-nodes/dynamic-keyboard-base.md#fields)) node class now includes a **hideTextBox** flag that enables developers to hide a voice keyboard's VoiceTextEditBox.

#### BrightScript APIs

* [**BrightScript optional chaining operators**](/docs/references/brightscript/language/expressions-variables-types.md#optional-chaining-operators) — Developers can use optional chaining operators, "?.", "?@", "?[", and "?(", in their BrightScript code to access possibly invalid values. This enables developers to execute more concise, higher-performing code. The optional chaining operators are used to read the value of a property nested within a chain of connected objects without having to first check whether each reference in the chain does not return the BrightScript value of "invalid". If testing a reference results in "invalid", the expression short-circuits and returns "invalid".

* [**Tagging of unused variables**](/docs/references/brightscript/language/expressions-variables-types.md#types) — Developers can now explicitly mark variables as unused in their BrightScript code by prepending an underscore to the value (for example, sub myTask(__x_)). This enables developers to avoid compilation errors when the unused variable has a valid purpose.

#### Roku Pay APIs

* [**RFI sign-up screen option to display requested customer information**](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdatainfo) — The [**ChannelStore.requestedUserDataInfo**](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdatainfo) associative array now includes an optional **forceShowData** flag. When this flag is enabled, the RFI sign-up screen displays the actual customer information values to be shared with the app instead of just the types of information. For example, if the email address, first name, and last name are requested for sign-ups and the **forceShowData** flag is enabled, the "Let's create your account" RFI screen explicitly lists the customer's actual email address and name in bold text (for example, **Bob** **Smith**, **[bsmith@roku.com](mailto:bsmith@roku.com)**). If this flag is disabled and the customer is in the United States, the RFI screen displays "share your name and email address".

* **Direct access to RFI screen for authenticated free and AVOD apps** — Developers of authenticated free and AVOD apps can now use the ChannelStore [**getUserData**](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) and [**getPartialUserData**](/docs/references/brightscript/interfaces/ifchannelstore.md#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object) APIs to display an RFI screen when customers sign up or sign in to the app—without having to first enroll in the [Roku Partner Payouts Program](/docs/developer-program/roku-pay/quickstart/partner-payouts.md). In this case, the RFI sign-up screen can request or display the customer's email address, phone number, and zip code; the RFI sign-in screen can request or display the customer's email address and phone number.

#### Media, DRM, and content metadata updates

* **Improved trick play for live linear streams** — The [**Video**](/docs/references/scenegraph/media-playback-nodes/video.md) node includes the following new fields to help developers improve the user experience for trick play during live linear streams:

  * A [**trickplay.liveFilledBarBlendColor**](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields) field that lets developers specify the color for the trick play progress bar during live linear streams. This color is blended with the **filledBarImageUri**.

  * An [**enableLiveAvailabilityWindow**](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) field that lets developers enable scrubbing of the trick play bar during the availability window of live linear streams.

  * An [**enableThumbnailTilesDuringLive**](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) flag that lets developers specify whether the **Video** node should report the thumbnail tiles in the **thumbnailTiles** field for live linear streams (the **thumbnailTiles** field will be added to the Video node documentation as part of the Roku OS 11.0 release).

* [**Video decoder statistics**](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields) — The [**Video**](/docs/references/scenegraph/media-playback-nodes/video.md) node includes a new **decoderStats** field that provides developers with additional video playback information such as the number of frames rendered, repeated, and dropped, and the number of bit stream errors since playback started. Also included is a new **enableDecoderStats** field that allows the **decoderStats** field to receive updates.

* [**Muting of audio during video playback**](/docs/references/brightscript/interfaces/ifvideoplayer.md#setenableaudioenable-as-boolean-as-void) — The [**roVideoPlayer**](/docs/references/brightscript/interfaces/ifvideoplayer.md#setenableaudioenable-as-boolean-as-void) component now includes a **SetEnableAudio()** function that enables developers to mute the audio during video playback. This is useful, for example, for implementing a video preview feature in an app.

* [**Check whether the TV screen is on/off**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdisplayproperties-as-object) — The [**ifDeviceInfo.GetDisplayProperties()**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdisplayproperties-as-object) function now returns a new **visible** field that enables developers to check whether the TV screen is on/off. Customers can turn off their TV display while streaming an app in order to continue listening to the audio (for example, when playing music videos, conferences, or podcasts).

* **ttp:timebase support added for DASH/TTML** — The Roku OS now supports ttp:timebase for activating subtitles.

#### Tools

* [**ECP query commands for debugging channels**](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands) — Developers can use the following new ECP query commands to help debug their apps: [**query/chanperf**](/docs/developer-program/dev-tools/external-control-api.md#querychanperf-example), [**query/r2d2-bitmaps**](/docs/developer-program/dev-tools/external-control-api.md#queryr2d2-bitmaps-example), **and [query/sgnodes/[all | root | nodes?node-id=_nodeId_]](/docs/developer-program/dev-tools/external-control-api.md#querysgnodesall-example)**. Developers can leverage these debugging commands, which were previously only available via the debug console, in their web services.

* [**BrightScript debug protocol updates**](/docs/developer-program/debugging/socket-based-debugger.md#debugging-target-startup-sequence) — The BrightScript debug protocol includes the following new features: a **platform_revision_timestamp** field for the initial handshake, a **packet_length** field that is included with all packets from the debugger, and runtime errors for the [EXECUTE debug response format](/docs/developer-program/debugging/socket-based-debugger.md#debugger-response-format).

## Roku OS 10.5

**Initial rollout date**: September 20, 2021

Roku OS 10.5 includes a SceneGraph component for creating lines of text with different fonts, colors, and sizes; a SceneGraph component for displaying help with app settings; and ChannelStore APIs for checking whether a subscription should be placed on hold because it is in recovery.

This release includes several enhancements to Roku Voice. For apps that include a profile selection screen, Roku Voice can be used to ask the viewer to select a profile and handle a voice command with the name or position of the profile. Voice keyboards include improved dictation that lets developers determine when a user has finished talking and specify which characters the keyboard accepts or blocks. The individual keys on voice keyboards can now be enabled only once the user has entered complete information (for example, all five digits in a zip code).

In addition, this release includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.

For tools, this release adds more detailed "type mismatch" reporting to the BrightScript Debug Console and an **Execute** command to the BrightScript Debug Protocol that lets developers execute code in a specific stack frame and therefore evaluate and run expressions.

Below is a list of key developer-facing Roku OS 10.5 updates:

#### Roku OS APIs

* [**MultiStyleLabel SceneGraph component for styling lines of text with different fonts, colors, sizes**](/docs/references/scenegraph/label-nodes/multi-style-label.md) — Developers can use the new **MultiStyleLabel** node class to create labels with multiple fonts, colors, and sizes. This enables developers to, for example, bold and/or color important text within a label and display emojis.

  > As part of the Roku OS 10.5 release, a LabelBase node has been introduced to provide a single base class for the [Label](/docs/references/scenegraph/label-nodes/label.md) node and the MultiStyleLabel node. The Label node now inherits most of its functionality from LabelBase node class. Developers, however, do not need to update their code to account for this refactoring.

* [**InfoPane SceneGraph component for displaying context-sensitive help with app settings**](/docs/references/scenegraph/label-nodes/info-pane.md) — Developers can use the new **InfoPane** node class to display an opaque, white-bordered, rounded rectangular label with text providing help for a specific setting. This component can be used to help customers successfully configure settings related to their account profile, closed captioning, parental controls, and so on.

* [**RowList.currFocusColumn field for implementing horizontal pagination**](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md#fields) — A new **currFocusColumn** field has been added to the **RowList** node to indicate which column of the currently-focused row in a RowList component currently has focus. Developers can use this field to implement a horizontal pagination mechanism for the currently focused row.

* [**Elliptic-curve cryptography for generating digital signatures**](/docs/references/brightscript/components/rodsa.md) — Developers can use the new **roDSA** component, which provides support for the ECDSA and EdDSA (with Ed25519 form) digital signature algorithms, to provide cryptographically signed evidence that an ad request originated from an actual Roku device.

#### Roku Pay APIs

* [**ChannelStore subscription recovery**](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases) (also available in Roku OS 10.0) — Developers can now directly use the ChannelStore API to check whether a subscription is in recovery. When a subscritpion is in recovery, Roku Pay notifies the customer once a day for multiple consecutive days (typically three) to update their method of payment in order to renew the subscription, and it attempts to charge the customer's method of payment to ensure collection of payment and continuation of service. The [**ChannelStore.getAllPurchases**](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) and [**getPurchases**](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases) commands now return a **status** field and an **inDunning** flag to determine whether a subscription is in the dunning state and therefore should be placed on hold. Previously, developers had to pass the **transactionId** returned by the **getAllPurchases** and **getPurchases** commands into a Roku Pay **validate-transaction** API call to determine whether a subscription was in recovery.

* [**Instant Signup purchase flag for Roku Pay APIs**](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases) (also available in Roku OS 10.0) — Developers can now identify whether Roku Pay subscription purchases originated from Instant Signup. The ChannelStore node [**getPurchases**](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases) and [**getAllPurchases**](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases)) commands, [**roChannelStore.getPurchases**](/docs/references/brightscript/interfaces/ifchannelstore.md#getpurchases-as-void) function, [Roku Pay **validate-transaction** web service](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction), and [Roku Pay **Sale** push notification](/docs/developer-program/roku-pay/implementation/push-notifications.md#sale) all include a new **purchaseChannel** field that is set to "web" and a **purchaseContext** field that is set to "isu" to indicate that a purchase was made via Instant Signup (for on-device purchases, these fields would be set to "device" and "iap", respectively).

#### Roku Voice APIs

* [**Voice support for profile selection screens**](/docs/developer-program/media-playback/voice-controls/voice-profile-selector.md) — Apps with a profile selection screen can audibly and visually prompt the viewer to select a user profile and then handle a voice request with the name or position of the selected profile. This entails integrating the following APIs included in this release:
  * The [**roAppManager.StartVoiceActionSelectionRequest()**](/docs/references/brightscript/interfaces/ifappmanager.md#startvoiceactionselectionrequest-as-void) function can be called upon app launch to trigger a voice request for the viewer to select a user profile on devices that are paired with a hands-free Roku Voice remote control.
  * The [**roAppManager.SetVoiceActionStrings()**](/docs/references/brightscript/interfaces/ifappmanager.md#setvoiceactionstringsactions-as-object-as-void) function can be used by the app to register a list of text strings, such as user profile names, that can be matched to voice requests. When the name uttered by the user matches the registered text string, the matched text string is provided to the app via an roInput voice command handler (via a new **text** field included in the associative array returned by the [**roInputEvent.GetInfo()**](/docs/references/brightscript/events/roinputevent.md#getinfo-as-object) method).
  * The [roInput voice command handler](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean) has also been enhanced to support profile selection via ordinal numbers. For example, when a user says "first", "number one", "pick the first", "select the first", "choose the first", and so on to select a user profile within a row, the app will receive a value of "1" (via a new **ordinal** field included in the associative array returned by the [**roInputEvent.GetInfo()**](/docs/references/brightscript/events/roinputevent.md#getinfo-as-object) method) that can be used to select the corresponding profile. Ordinal numbers between 1–6 are supported.

* [**Device paired with hands-free remote flag**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#hasfeaturefeature-as-string-as-boolean) — Developers can call the roDeviceInfo.HasFeature("handsfree_voice") function to check whether a Roku device is paired with a hands-free Roku remote control such as the Roku Voice Remote Pro. Developers can call this function before calling the [**roAppManager.StartVoiceActionSelectionRequest()**](/docs/references/brightscript/interfaces/ifappmanager.md#startvoiceactionselectionrequest-as-void) function and having Roku Voice prompt the viewer to select a user profile. In addition, this function enables developers to tailor the in-app user experience for viewers with hands-free Roku remote controls (for example, displaying voice tips and tricks in the UI).

* [**Enhanced dictation for voice keyboards**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) — Developers can use the new **isDictating** field of the [VoiceTextEditBox node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) to check whether the user is currently dictating to the keyboard. This enables developers, for example, to determine whether users are done dictating and therefore can advance to the next step/screen in the UI. In addition, developers can use the new **voiceInputRegexFilter** field of the **VoiceTextEditBox** node to specify which characters may or may not be entered on the keyboard via dictation. For example, setting this field to "^[A-Za-z0-9_-]*$" prevents any special characters from being entered.

* [**Disabling and enabling of individual keys on voice keyboards**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md) — Developers can use the new **disableKey** and **enableKey** fields of the [DynamicKeyGrid node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md) to control the availability of specific keys in the node's underlying [Key Definition File](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md). For example, if the user is entering their zip code in an address keyboard, the "Next" key could be disabled (m.keyboard.keyGrid.disableKey = "Next") until all five digits have been entered. Once all five digits have been entered, the "Next" key could be enabled (m.keyboard.keyGrid.enableKey = "Next"). This eliminates the need to use [multiple grid modes in a Key Definition File](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md#grid) to provide this functionality.

* [**New Voice control manifest flags**](/docs/developer-program/getting-started/architecture/channel-manifest.md) — Developers can now declare whether their app supports voice controls (**supports_voice_roinput=1**) and whether it displays a hands-free voice profile selection screen upon launch (**voice_action_launch_screen=1**).

#### Media, DRM, and content metadata updates

* [**CDN switch event notifications**](/docs/references/scenegraph/media-playback-nodes/video.md#cdn-fields) — The [SceneGraph Video node](/docs/references/scenegraph/media-playback-nodes/video.md#cdn-fields) includes a new **cdnSwitch** field that enables developers to receive event-based notifications when the CDN is switched during content playback.

* [**DRM error code now provided when a video player error occurs**](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields) — The [SceneGraph Video node's **error_info** associative array](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields) includes a new **drmerrcode** field that contains any error code returned by the DRM system when a video player error occurs.

* [**Randomizing of Widevine DRM license renewal time**](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes) — A new **lic_acq_window** field has been added to the [Content metadata DRM control attributes](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes) to help developers prevent their app's Widevine license server from being flooded with simultaneous requests. This **lic_acq_window** field is used to set the maximum amount of time (in milliseconds) that an app waits before rotating its Widevine DRM keys. The app can generate a random wait time between 0 and the value specified in the **lic_acq_window** field, and use the random wait time to instruct when the Video node should make its next Widevine license request.

* The [**Video.timedMetaData**](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) field can now be used to read ID3 tags embedded in an audio stream.

* [**New hdrMode field for getting the HDR playback state of content**](/docs/references/brightscript/events/rovideoplayerevent.md#isstreamsegmentinfo-as-boolean) — The [roVideoPlayerEvent.isStreamSegmentInfo](/docs/references/brightscript/events/rovideoplayerevent.md#isstreamsegmentinfo-as-boolean) function now provides the HDR playback state. An **hdrMode** field is now returned by the event's **GetInfo()** method. This field indicates whether playback is in SDR, HDR10, Dolby Vision, HLG10, HDR10+, or advanced HDR.

* [**Initial segment format for multi-period server-stitched DASH manifest**](/docs/specs/media/dash-if.md#updates) — Support for DASH-IF in the Roku OS has been expanded to include the initial segment format for server-stitched manifests formatted with multi-periods.

* [**SegmentTimeline for calculating time/duration in a DASH stream**](/docs/specs/media/dash-if.md#updates) — Support for DASH-IF in the Roku OS now includes using the SegmentTimeline to precisely identify segment availability. This supports the in-progress playback of content while it is being recorded. Specifically, the Roku OS DASH implementation now supports:

  * Initialization element with sourceURL attribute in under SegmentBase element.
  * RepresentationIndex element.
  * Index segments in a different file than the media segments.
  * Index segments from multiple representations in the same file.
  * Media segments from multiple representations in the same file.
  * Non-standard AudioChannelConfiguration schema: "urn:dolby:dash:audio_channel_configuration:2011".

#### Architecture

* [**New "screensaver" and "homelist" ad source parameters**](/docs/developer-program/getting-started/architecture/dev-environment.md#source-parameter) — The Roku OS now includes "ad:screensaver" and "ad:homelist" source parameters, which enable developers to attribute app launches to these specific ad types. Previously, a single "ad" source parameter was used for all the different ad types (homelist [mini], screensaver, and home screen banner ads). The "ad" source parameter now denotes an app launch from a home screen banner ad only.

* [**Memory exceeded lastExitOrTerminationReasons parameters**](/docs/developer-program/getting-started/architecture/dev-environment.md#lastexitorterminationreason-parameter) — Developers can now check whether an app was exited because it exceeded per-channel memory limits while running in the foreground (EXIT_CHANNEL_MEM_LIMIT_FG) or background (EXIT_CHANNEL_MEM_LIMIT_BG).

* [**Memory usage event notifications**](/docs/references/brightscript/components/roappmemorymonitor.md) — Developers can now receive an event notification if their app is approaching the per-app memory usage threshold. A new [**roAppMemoryMonitor**](/docs/references/brightscript/components/roappmemorymonitor.md) component has been added to support this feature. It has an [**EnableMemoryWarningEvent()**](/docs/references/brightscript/interfaces/ifappmemorymonitor.md#enablememorywarningeventenable-as-boolean-as-boolean) function that notifies an app when it has reached 80% of its memory usage limit, and a [**GetMemoryLimitPercent()**](/docs/references/brightscript/interfaces/ifappmemorymonitor.md#getmemorylimitpercent-as-int) function returns the memory limit for the app. Developers can then use the new [**roAppMemoryMonitorEvent**](/docs/references/brightscript/events/roappmemorynotificationevent.md) to get the percentage of the allocated per-app memory that has been used.

#### Tools

* [**Detailed "type mismatch" error reporting in BrightScript debug console**](/docs/developer-program/debugging/debugging-channels.md#accessing-the-debug-console) — The BrightScript debug console now provides more specific reporting of "type mismatch" errors to help developers identify and resolve these types of bugs in their code. For example, attempting to evaluate whether an integer value equals a string in an expression (for example, if 12 = "number") now results in the following error message: `Type mismatch. Operator "=" cannot be applied to "Integer" and "String"`.

* [**Execute debugging command added to BrightScript debug protocol**](/docs/developer-program/debugging/socket-based-debugger.md#debugging-commands) — The **Execute** debugging command (command_code = 10) enables developers to execute code in a specific stack frame and therefore evaluate and run expressions.

#### Deprecations

* [**wma and wmapro**](/docs/references/deprecated-apis.md#audio-node-windows-media-audio). The Roku platform no longer supports the Windows Media Audio (**wma**) and **WMApro** audio formats. See the [Audio node](/docs/references/scenegraph/media-playback-nodes/audio.md) for the current list of audio formats supported by the Roku platform.

## Roku OS 10.0

**Initial rollout date**: April 13, 2021

Roku OS 10.0 adds a new [**chanperf** command](/docs/developer-program/debugging/debugging-channels.md#scenegraph-debug-server-port-8080-commands) to the debug console that displays the memory and CPU usage of a sideloaded app. This provides developers with a quick, convenient way to find performance issues in different parts of their application.

In addition, developers can now upgrade the keyboards, mini keyboards, PIN pads in their apps to the new [dynamic voice-enabled keyboards](doc:dynamic-voice-keyboard-nodes), which allow customers to use their voice to enter information. This release also makes Roku's [standard dialog framework](doc:standard-dialog-framework-nodes) available to developers, which provides enhanced pre-built dialogs and the flexibility to design custom dialogs.

Other highlights include an enhancement to the [ChannelStore API](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdatainfo) that optimizes the text displayed in the [Request for Information (RFI) screen](/docs/developer-program/roku-pay/implementation/channel-store.md#getuserdata) based on whether the customer is signing up for a subscription or signing in to their account, updates to the [ChannelStore API](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdata) for getting additional customer information such as their birth, gender, and location (country, state, zip code), and new functions for checking the internet connectivity status on a Roku device.

This release also includes features that enhance the performance of media playback, app installation, and Roku devices in general, and it provides expanded platform support for industry standards covering content and meta-data, as well as additional and improved facilities to expedite the monitoring of app performance and memory usage.

Below is a list of key developer-facing Roku OS 10.0 updates:

#### API

* **[Request for Information (RFI) screen enhanced with optimized displays for sign-ins and sign-ups](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdatainfo)** — Developers can now specify whether the Roku Pay RFI screen displays sign-up or sign-in-related information. For example, if the RFI screen is configured for sign-ins, it displays a "Sign in" title and lists only the customer's email address and/or phone number. Apps using SceneGraph ChannelStore node can use the **[requestedUserDataInfo](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdatainfo)** field when sending the [**getUserData** command](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) to configure the RFI screen for sign-ins; apps using the roChannelStore component can set the new “requestInfo” parameter in the [**GetPartialUserData()** method](/docs/references/brightscript/interfaces/ifchannelstore.md#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object). No additional steps are required for displaying sign-up information on the RFI screen.

* **[New "birth" and "gender" return values added to ChannelStore](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdata)** — The **[ChannelStore.requestedUserData](/docs/references/scenegraph/control-nodes/channelstore.md#requesteduserdata)** field now lets developers request the birthdate (MM/YY) and gender associated with the customer's Roku account, and return these values in the **[userData](/docs/references/scenegraph/control-nodes/channelstore.md#userdata)** field. Similarly, the roChannelStore **[GetUserData()](/docs/references/brightscript/interfaces/ifchannelstore.md#getuserdata-as-object) and [GetPartialUserData()](/docs/references/brightscript/interfaces/ifchannelstore.md#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object)** methods can now be used to retrieve the customer's birthdate and gender.

* **[roChannelStore.getUserRegionData() method for getting customer's location](/docs/references/brightscript/interfaces/ifchannelstore.md#getuserregiondata-as-object)** — The **[roChannelStore.getUserRegionData()](/docs/references/brightscript/interfaces/ifchannelstore.md#getuserregiondata-as-object)** method can be used to retrieve the state, zip code, and country associated with the customer's Roku account. (Also available in Roku OS 9.4)

* **[New "error.generic" status added to roInput.EventResponse() method for unhandled voice commands](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean)**. The [roInput.EventResponse()](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean) method now takes an "error.generic" status that can be used when an app does not have any media to fulfill a voice command (for example, if the app receives a "forward" or "next" command, but there is no content to fast forward or play next, respectively). Passing this status displays "That is not available" in the Roku Voice heads-up display.

* **[roDeviceInfo internet connectivity status methods](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enableinternetstatuseventenable-as-boolean-as-boolean)** — **[EnableInternetStatusEvent()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enableinternetstatuseventenable-as-boolean-as-boolean)**, **[GetInternetStatus()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getinternetstatus-as-boolean)**, and **[ForceInternetStatusCheck()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#forceinternetstatuscheck-as-boolean)** can all be used to retrieve the connectivity status of the device.

* [**The time reported by ifDateTime.toISOString() now resolves to milliseconds**](/docs/references/brightscript/interfaces/ifdatetime.md#toisostring-as-string)**.** (Also available in Roku OS 9.4)

#### Media, DRM, and content meta-data updates

* **Media Player performance enhancements** — Video start times have been shortened, re-buffering reduced, and picture quality improved.

* **Roku SceneGraph (RSG) performance enhancements** — Various RSG data structures have been optimized, and off-screen content nodes are now being managed on an app's behalf. This reduces app memory consumption, allowing internal cache mechanisms to be more effective in improving performance.

* **[Support for UTCTiming in DASH](/docs/specs/media/dash-if.md#utctiming)** — The UTCTiming element is used in DASH manifests to allow the clocks employed by the server and player to remain in close synchronization. Without this, when there is a timing discrepancy of even as little as 100ms between the local and server clocks live video play can freeze, and audio and video can fall out of sync, as the player requests unavailable, out-of-window segments.

* [**ForwardDashQueryStringParams content metadata field**](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes) — This field enables apps to forward DASH manifest query parameters to segment URLS.

* **[Video node seekMode field allows apps to specify maximum available seek accuracy](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields).** The app can set this field to "accurate," in order to achieve accuracy to the exact requested time, if supported by the player; otherwise seek is accurate to the nearest sync frame. (Also available in Roku OS 9.4)

* **[Seek-to-pause is now supported through Video node enhancements](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields).** The bufferingStatus field now includes boolean prebufferDone and time element actualStart, which are used in conjunction with seekMode and playStart to facilitate pausing at a particular point, and resuming playback from that point. (Also available in Roku OS 9.4)

* **[SceneGraph Video node PlayStartInfo field now contains additional timestamp information](/docs/references/scenegraph/media-playback-nodes/video.md#playback-fields)** for start of manifest and DRM loading, DRM license acquisition, and pre-buffering, which supplements already available duration information for those processes.

* **[New SceneGraph Animation node field willBeSkipped](/docs/references/scenegraph/animation-nodes/animation.md#fields)**. This field indicates whether an animation runs or jumps to the end (effectively skipping the animation and rendering it in its final state).

* **[DRM is no longer required for AES-128 key exchange using HLS and DASH](/docs/specs/media/content-protection.md).**

* **[The HLS ASSOC-LANGUAGE audio rendition attribute is now supported](/docs/developer-program/media-playback/trick-mode/hls-and-dash.md#assoc-language-audio-rendition-attribute).** This **optional** attribute is used, for example, to specify that a particular rendition's audio, provided in a given spoken language dialect (e.g., Cantonese/"yue"), is represented in forced subtitles by a different but associated language (e.g., Traditional Chinese/"zh_HANT").

* **The DASH Role and Accessibility attributes may now be used in Adaptation Sets to make various audio tracks available for viewer selection.** This brings Roku OS into closer conformance with the DASH-IF specification.

* **[UI graphics resolution available through External Control Protocol (ECP)](/docs/developer-program/dev-tools/external-control-api.md#general-ecp-commands)** —The [`query/device-info` ECP command](/docs/developer-program/dev-tools/external-control-api.md#querydevice-info-example) now provides a UI-resolution field. (Also available in Roku OS 9.4)

#### Architecture

* **[Dynamic voice-enabled keyboards](/docs/references/scenegraph/abstract-nodes/dynamic-keyboard-base.md)** — Developers can create keyboards, mini keyboards, and pin pads that can be controlled by voice. This helps speed up on-device sign-ups and sign-ins by enabling customers to speak their PIN codes when subscribing to apps and their passwords when logging in. A sample app demonstrating this feature is available [here](https://github.com/rokudev/dynamic-voice-enabled-keyboards).

* **[Standard dialog framework](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog-framework-overview.md)** — Developers can use new pre-built modal pop-up dialogs and build custom ones. A sample app demonstrating this feature is available [here](https://github.com/rokudev/standard-dialog-framework).

  These new pre-built and custom standard keyboards are summarized as follows:

  * **New pre-built message, keyboard, pin pad, and progress dialogs**. These new dialogs feature updated graphics and color palette support that enable developers to provide a consistent user experience across the dialogs in their app and across the Roku platform (developers can easily adopt the new design of Roku OS system dialogs). In addition, the keyboard and pin pad dialogs include voice entry support for faster and more convenient information entry. These new dialog nodes deprecate the [legacy versions](/docs/references/scenegraph/dialog-nodes/dialog.md).

  * **Developer-defined custom dialogs**. Developers can design custom dialogs that may include a combination of text, buttons, bulleted lists, keyboards, loading indicators, and other building blocks. Custom dialogs also include all the features provided by the pre-built dialogs (voice, custom layout, and graphics). This provides developers with the flexibility to build and configure dialogs to meet their app's requirements.

    Some fields used to set options on the Dynamic voice-enabled keyboards and the StandardDialog nodes always print their value as “invalid” in BrightScript. Equality comparisons of these field values will also not work correctly. Setting the value of these fields from either BrightScript or XML does work correctly. These fields include:

    The **voiceEntryType** field of the [VoiceTextEditBox](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) node.<br /> The **domain** field of the [DynamicKeyboardBase](/docs/references/scenegraph/abstract-nodes/dynamic-keyboard-base.md) node.<br /> The **keyboardDomain** field of the [StandardKeyboardDialog](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-keyboard-dialog.md) node.<br /> The **bulletType** field of the [StdDlgBulletTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-bullet-text-item.md) node.<br /> The **graphicAlign** field of the [StdDlgGraphicItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md) node.<br /> The **keyLayout** field of the [StdDlgKeyboardItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-keyboard-item.md) node.<br /> The **namedTextStyle** field of the [StdDlgTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md) node.

* **[Enhanced Visual Search Results for Roku Voice](/docs/developer-program/discovery/search/implementing-search.md#visual-search-results-for-roku-voice)** - When users ask for content while in an app, the Roku UI displays a partial overlay with content matching the search request. Content from within the active app is listed in the first row of the display if the active app participates in Roku Search. The rows below include matches from other apps.

* [**Instant Resume**](/docs/developer-program/media-playback/instant-resume.md) — Developers can implement Instant Resume in their app to save their current state upon exit and then continue playback upon relaunch. This improves the user experience by letting viewers quickly get back to the content they were watching without having to find it first.

* **[The number of concurrent threads per running instance of an app is now limited to 100](/docs/developer-program/core-concepts/threads.md#thread-limits)** — When the instance exceeds 50 concurrent threads, Roku displays a warning on the port 8085 console. When the instance exceeds 100 threads, a “too many threads” error exception (&h29) is raised; if the app does not catch this exception, app operation is terminated, along with a corresponding stack trace. Task threads that have properly terminated and are no longer running will not count towards the limit, even if the task object itself is still valid (e.g., the state is stopped or done). As a best practice, developers should take steps to ensure that their apps always remain well under the 50-thread "warning" limit.

* [**New manifest attribute pause_aware**](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) **and corresponding [pause button event](/docs/references/scenegraph/component-functions/onkeyevent.md)**— Use the new key event when the app strictly needs to pause, and not toggle between play and pause (as might happen, for example, during trickplay, in situations where the proper behavior is to leave fast-forward or rewind mode but _not_ immediately begin playing).

#### Tools

This release includes three new or updated port 8080 commands:

* **[New chanperf command](/docs/developer-program/debugging/debugging-channels.md#scenegraph-debug-server-port-8080-commands)** displays memory and CPU utilization of a side-loaded app.

* **[New remove_plugin command](/docs/developer-program/debugging/debugging-channels.md#scenegraph-debug-server-port-8080-commands)** that deletes a particular app from the local device _as well as from other devices_ on the same Roku account. The local device, on which the remove_plugin command is executed, must be linked to a Roku account, and deletions elsewhere don't take effect until a device synchronizes with the Streaming Store. Some system capabilities, such as RAF, can be implemented/augmented by the installation of special apps. Especially in beta-test situations, the developer can delete old versions of such channels before installing more recent (or production) versions.

* **["sgnodes all" command extended to detail whether reference counts are held by the OS or the app's scripts](/docs/developer-program/debugging/debugging-channels.md#scenegraph-debug-server-port-8080-commands)** — A sample app demonstrating this feature is available [here](https://github.com/rokudev/sgnodes-all-demo).

#### Deprecated APIs

* **[SteadyMaxMemPoints removed from signal beacon performance measurements](/docs/references/deprecated-apis.md#signal-beacon-steadymaxmempoints)** — As the **chanperf** command now reports actual memory figures, the **SteadyMaxMemPoints** app performance metric is no longer reported in the debugging logs when an app is exited.

* **[roDeviceInfo.GetVersion()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getversion-as-string)** — Use the [**roDeviceInfo.GetOsVersion()** function](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getosversion-as-object) instead, which was introduced in Roku 9.2 OS, to get the **major**, **minor**, **revision**, and **build** numbers of the Roku OS running on a device.

* Apps must replace all **file://** URLs with **pkg:/** URLs.

## Roku OS 9.4

**Initial rollout date**: September 29, 2020

Roku OS 9.4 introduces formal BrightScript exception handling via TRY/CATCH/THROW statements, and it adds a number of media playback features such as whitelisting/blacklisting of audio and caption tracks for different countries; support for OpenSSL 1.1.1, Widevine v16 DRM, and the WebP image format; and enhancements to DASH thumbnails for trick mode.

Below is a list of key developer-facing Roku OS 9.4 updates:

#### API

* **[BrightScript now supports exception handling](/docs/references/brightscript/language/error-handling.md)** — Developers can use TRY/CATCH blocks and THROW expressions for handling exceptions in their apps. Developers can define code that may potentially generate errors within a TRY statement, and then provide error handling, such as printing out the error type and message, in a CATCH statement. Developers can also create custom errors with the THROW expression.

* [**New getUserRegionData command added to SceneGraph ChannelStore node**](/docs/references/scenegraph/control-nodes/channelstore.md#getuserregiondata) — The ChannelStore node now includes a **getUserRegionData** command for retrieving the state, zip code, and country associated with the customer's Roku account. Developers can use the location information returned by this command to determine a customer's eligibility for regional-specific subscription products and content.

* **[doOrder command status fixed](/docs/references/scenegraph/control-nodes/channelstore.md#doorder)** — The SceneGraph ChannelStore **doOrder** command now only returns a status of 2 ("interrupted") if the back button is pressed from a "Confirm Purchase" dialog.

* **[ParseJson and FormatJson now accept "flags" parameter as a String](/docs/references/brightscript/language/global-utility-functions.md#parsejsonjsonstring-as-string-flags---as-string-as-object)** — The BrightScript ParseJson and FormatJson global utility functions now accept a String parameter, flags, for specifying the functions' options. (Note that FormatJson already accepted flags as an Integer and now accepts the String version as well.)

#### Media, DRM, and content meta-data updates

* **Enhanced media player performance** — Numerous improvements in media player performance to minimize video start time, re-buffering, and playback failure rates.

* **[Content-specific whitelisting/blacklisting of audio and caption tracks for different languages](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes)** —  Audio and captioning tracks can now be blacklisted or whitelisted dynamically for individual content items. The new metadata attributes, **audioBlacklist**, **audioWhitelist**, **captionBlacklist**, and **captionWhitelist**, can be used to make resources in various languages available or unavailable dynamically, under app control, affecting the options that a viewer sees in the UI.

* **Open SSL 1.1.1** — Roku OS now supports Open SSL 1.1.1. The OpenSSL version that was previously supported by Roku (1.0.2h) has reached end of life. OpenSSL 1.1.1 offers better performance and greater security, among other benefits.

* **[Widevine v16](/docs/specs/media/content-protection.md#widevine)** — Roku OS now supports Widevine v16 DRM, including on older supported platforms.

* **[WebP image format](/docs/specs/media/streaming-specifications.md#supported-image-formats)** — The Roku platform now supports the WebP image format, which provides smaller compressed image files and faster decoding and rendering.

* **[DRM security level reporting](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdrminfoex-as-object)** — The **ifDeviceInfo.GetDrmInfoEx()** method now returns the security levels of Widevine and PlayReady DRMs.

* **[DASH thumbnail improvements](/docs/developer-program/media-playback/trick-mode/hls-and-dash.md#dash-standard-thumbnail-tiles)** — The DASH manifest information is now provided more efficiently to the Roku Media Player, especially benefiting low-end devices.

* **HLS and DASH trickplay thumbnails in SSAI apps now remain in sync** — A bug in the handling of discontinuities (insertion breaks) for trickplay thumbnails in apps with ads inserted server-side (SSAI) previously caused thumbnails to fall out of synch with the video content over time during playback, as more discontinuities were processed. This bug is resolved in Roku OS 9.4 for HLS and DASH streaming with standard thumbnails, but it remains a problem for apps that use BIF thumbnails. Roku recommends that developers who can switch to standard thumbnails in the context of HLS or DASH streaming should do so.

* **[Video node includes DASH manifest information](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields)** — The DASH manifest is exposed through the SceneGraph Video node and is updated efficiently during live-streams, especially benefitting low-end devices.

* [**HDCP status reporting for HDMI connections improved**](/docs/references/brightscript/interfaces/ifhdmistatus.md#gethdcpversion-as-string) — The **roHdmiStatus.getHdcpVersion()** method now returns an empty string if HDCP is disabled.

> Adobe has discontinued support for Adobe DRM. Roku OS 9.4 is the last firmware release that will support it. apps should switch to one of the following [Roku-supported DRMs](/docs/specs/media/content-protection.md) to protect content: Widevine, PlayReady, or AES-128.

#### Tools

* **[Component library compilation errors on port 8085](/docs/references/scenegraph/control-nodes/componentlibrary.md#loading-component-libraries)** — Compilation info/failure messages for Roku SceneGraph component libraries when running side-loaded apps now appear on port 8085 of the debug console.

#### Deprecated APIs

* The following keys in the [**manifestData** field of the SceneGraph Video node](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) are deprecated as of Roku OS 9.4: **mpd** and **periods**. Developers can use the **xml** key to acquire information that was provided via the deprecated fields.

## Roku OS 9.3

**Initial rollout date**: April 7, 2020

Roku OS 9.3 includes features to enhance the performance of media playback and Roku devices in general, and expand platform support for industry standards covering content and meta-data. This release also features additional and improved facilities to expedite troubleshooting, performance monitoring, automated testing, and debugging of apps.

Finally, the Roku SceneGraph version defaults to version 1.2 as of Roku OS 9.3. As a result, **use of eval() will result in a compilation error.**

> Apps using eval() will not run on Roku OS 9.3 (unless rsg_version has been set to 1.1, which is **not** recommended).
>
> Developers **must** take immediate action to ensure that their apps do not use the eval() function, if at all possible. See "Architecture," below, for more details.

Here is a list of key developer-facing Roku OS 9.3 updates:

#### API

* **[New signal beacon for login and user selection dialogs](/docs/developer-program/performance-guide/measuring-channel-performance.md#measuring-channel-launch-times) ** — Developers can now measure loading times for dialogs and screens that are displayed before the app's home page (for example, login, user selection, and network error dialogs/screens).
* **[HasFeature() now allows checking for soundbar hardware](/docs/references/brightscript/interfaces/ifdeviceinfo.md#hasfeaturefeature-as-string-as-boolean) ** — ifDeviceInfo.HasFeature() now accepts the feature string "soundbar_hardware". HasFeature() will return **true** if the device has soundbar hardware (i.e., speakers, the master volume of which can be changed directly by program control) but is _not_ a Roku TV.
* **[ifDeviceInfo.GetOSVersion() now includes a "revision" field](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getosversion-as-object) ** in the associative array returned by the method. This field corresponds to the third octet in the return value of the legacy GetVersion() method.
* **[The SceneGraph RowList node now supports a fixedFocus option](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md#fields) ** for the rowFocusAnimationStyle field. This option is similar to the existing fixedFocusWrap option, but _without_ the latter's wrapping behavior during navigation.
* **[Single-field observers can capture multiple-field "snapshots"](/docs/references/brightscript/interfaces/ifsgnodefield.md#setfieldfieldname-as-string-value-as-object-as-boolean) ** — The observeField() and observeFieldScoped() methods of SceneGraph nodes can now specify a list of additional fields (that are located in the same node as the primary field), the values of which will be captured when the state of the primary field changes. The corresponding roSGNodeEvent will provide those additional values via its GetInfo() method.
  <br />

#### Media, DRM, and content meta-data updates

* **Performance enhancements** — These include an increase in effective video bitrate, and reductions in the rates of video start time, re-buffering, and playback failure.
* **[Get media-player state information using ECP query/media-player](/docs/developer-program/dev-tools/external-control-api.md#querymedia-player-example) ** — This External Control Protocol query returns a collection of information about the state of the media player, which can be useful in debugging and general troubleshooting.
* **[Support for industry standard thumbnail tiles](/docs/developer-program/media-playback/trick-mode/hls-and-dash.md) ** — For Roku SceneGraph apps, Roku OS now supports the "[DASH Interop spec v4.3](https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf) , Section 6.2.6. Tiles of thumbnail images." VideoNode now has a standard Roku OS rendered UI for DASH or HLS trickplay on VOD content.
* **[HTTP header control for DRM key/license requests](/docs/developer-program/getting-started/architecture/content-metadata.md#drmhttpagent-for-handling-drm-keylicense-requests-separately) ** — Apps now have the ability to set HTTP headers on DRM key/license requests, independently of other HTTP headers.
* **[SceneGraph Video node trickplay fields now include positionInfo](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) ** — This read-only Associative Array contains the positions of the last-rendered video and audio samples, respectively. Both positions are expressed as double(-floats), and the unit is one second.
* **[New content meta-data drmParams attribute to support Widevine](/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes) ** — The serviceCert attribute allows setting the Widevine service certificate.
* **More granular DASH MPD Manifest data now accessible** — Apps can now obtain all relevant data from the DASH MPD Manifest.
* **[Verimatrix DRM is deprecated](/docs/specs/media/content-protection.md) ** — As of Roku OS 9.3, support for Verimatrix DRM has been removed from the firmware. Make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click [here](/docs/specs/media/content-protection.md)  for more information on implementing these DRMs.
* **[Adobe DRM is deprecated](/docs/specs/media/content-protection.md) ** — As of Roku OS 9.3, support for Adobe DRM is deprecated.  The plugin will be removed from Roku OS in our Fall firmware update. Please make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click [here](/docs/specs/media/content-protection.md)  for more information on implementing these DRMs.

#### Architecture

* **[rsg_version manifest flag defaults to 1.2](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) ** — The **rsg_version** attribute in the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes)  now defaults to 1.2 (**rsg_version=1.2**). As of Roku OS 9.0, setting the **rsg_version** attribute to 1.2 enables an internal mechanism for processing component \<script> tags that optimizes the resulting compiled script code. This results in a reduced initial startup time and lesser memory usage while preserving compatibility.<br /><br />The deprecated **eval()** function is not compatible with **rsg_version 1.2**; therefore, developers must do one of the following to keep their apps running if their apps use this function:<br /><br />1. (Recommended) Remove all usage of the deprecated **eval()** function. If you are using the **eval()** function to initialize data, use the [parseJSON()](/docs/references/brightscript/language/global-utility-functions.md#parsejsonjsonstring-as-string-as-object)  function instead.<br /><br />2. Update the **rsg_version** attribute in the manifest to **1.1** (**rsgversion=1.1**).
  <br />

#### Tools

* **[Dynamic breakpoints and step commands added to BrightScript Debug Protocol](/docs/developer-program/debugging/socket-based-debugger.md) ** — The socket-based BrightScript debug protocol now includes dynamic breakpoints and step commands. Integrated Development Environments (IDEs) tightly integrated with the BrightScript debug protocol can be enhanced with these features, which enable developers to navigate through and inspect the state of the application and view its execution flow.

#### Miscellaneous

* **[Visual Search Results for Roku Voice](/docs/developer-program/discovery/search/implementing-search.md#roku-voice-search-results) ** (U.S. only) — This new aspect of Roku Voice provides developers who participate in Roku Search with enhanced discovery opportunities. When using Roku Voice to search for movies, shows or popular genres, users will now see a more visual, easy to browse display of movie and TV show artwork rather than a text-based list of options. This new search results screen orders the results in categorized rows that include relevant movies, shows, short-form content and more for simple navigation and quick discovery of entertainment. Once a user selects the specific movie or show they want to watch, they'll see an unbiased list of apps that offer that title, ordered by price (including free when available), so they can choose the viewing option that's best for them.

## Roku OS 9.2

**Initial rollout date**: September 24, 2019

Roku OS 9.2 includes a variety of media updates that allow developers to optimize playback and further secure their protected content. This firmware update also introduces APIs that enable developers to further customize app UIs.

A list of key developer-facing Roku OS 9.2 updates is included below.

#### API

* **[ZoomRowList enhancement](/docs/references/scenegraph/list-and-grid-nodes/zoomrowlist.md#row-decoration-component-fields) ** — Developers can draw a custom row decoration under the items in a ZoomRowList.
* **[File System last mounted times](/docs/references/brightscript/interfaces/iffilesystem.md#getvolumeinfopath-as-string-as-object) ** — Developers can get the time when a USB drive was last mounted on a Roku device.
* [**New API for getting Roku OS version**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getosversion-as-object)  — Developers can call the **roDeviceInfo.GetOSVersion()** method to get the Roku OS running on a device.

#### Media playback

* **[CDN switching](/docs/developer-program/getting-started/architecture/content-metadata.md#cdn-switching) ** — Developers can switch Content Delivery Networks (CDNs) during playback to load balance traffic and failover to different servers in order to help optimize performance.
* **Forced narrative subtitles** — The Roku OS now supports the display of forced narrative subtitles on the video player. This enables a dialog or on-screen text (for example, newspaper headlines, street signs, and so on) to be translated into alternate languages to help viewers understand the words being spoken or displayed.
* **Support for templated DASH streams that have Widevine** — The Roku media player now supports playback of DASH streams that have both templated representation and Widevines licenses.
* **DASH/HLS multi-license support** — Developers can protect content with resolution-specific licenses. This means developers can, for example, secure the 4K version of content with a Widevine level 1 license, and the FHD and lower versions with a Widevine level 2 license.

#### Deprecated APIs

* **Roku device MAC Address via roDeviceInfo.GetConnectionInfo** — The [roDeviceInfo.GetConnectionInfo() ](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getconnectioninfo-as-object) method no longer returns a device's MAC address. Developers can use the [roDeviceInfo.GetChannelClientId ](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string) method to uniquely identify devices.
* **AudioLanguageSelected attribute** — The [AudioLanguageSelected](/docs/developer-program/getting-started/architecture/content-metadata.md#track-id-attributesUsers)  content metadata attribute no longer  can be used to specify the language track to be used when content has multiple language tracks. Users can select their preferred audio language on-device in the **Settings > Audio > Audio Preferred Language** screen.

## Roku OS 9.1

**Initial rollout date:** April 9, 2019

Roku OS 9.1 adds new line-level debugging to the BrightScript Profiler tool, which enables developers to better pinpoint high memory and CPU usage. In addition, this update adds signal beacons to measure video start time, app change time, and app exit times, which helps developers verify that their app's performance meets certification requirements.

Below is a list of new APIs, media updates, and tools for developers. Changes to deprecated APIs are listed as well.

> The `roDeviceInfo.GetDeviceUniqueId()` function now returns all zeros instead of a device ID.  Apps that are still using this function in an authentication flow will fail until an app update is published. Developers should migrate to the [`roDeviceInfo.GetChannelClientId()`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#GetChannelClientId)  function to get a device ID for their app.
>
> > Key Roku OS 9.1 features:

#### APIs

* [**Encryption/decryption API**](/docs/references/brightscript/components/rodevicecrypto.md)  – Developers can now encrypt and decrypt data on a device using a key that is unique per app, device, or model. Using an app key, for example, developers can encrypt data for an app so that it may only be decrypted by that same app. In this case, a developer could provision credentials or an API key from the cloud to devices securely. With a device key, for example, a developer could implement a secure-storage algorithm.
* [**Performance testing**](/docs/developer-program/performance-guide/measuring-channel-performance.md)  – Developers can now measure the performance of user-initiated actions on their apps to validate that their apps meet certification requirements. The Roku OS automatically records key app performance metrics such as video start time, app change time, and app exit times via signal beacons (markers for the start and stop points of user-initiated actions). In addition, developers can manually add signal beacons to their applications to measure and record app launch times, which cannot be detected automatically by the Roku OS.  Developers can then use the debug console to view log entries for these app performance metrics.
* [**Voice command handling**](/docs/developer-program/media-playback/voice-controls/transport-controls.md)  – Developers can implement voice controls to respond to voice commands such as "fast forward", "rewind", "pause", "resume", "start over", "replay", and so on. These voice commands may be sent from the Roku voice remote, Roku mobile app, or a virtual assistant such as Amazon Alexa or Google Assistant.
* [**Purchase history API**](/docs/references/scenegraph/control-nodes/channelstore.md#getAllPurchases)  – Developers can now get a customer's purchase history, which makes it easier to determine free-trial eligibility in subscription renewal flows.
* [**Enhanced partner account creation**](/docs/references/scenegraph/control-nodes/channelstore.md#storechannelcreddata)  – Developers can now use the ChannelNode to store an OAuth token, custom token, or other custom data and then retrieve the credential during authentication. This is the same functionality that has been available with the roChannelStore SDK1 component since firmware release 8.1.
* [**Audio/video codec change detection**](/docs/references/brightscript/events/rodeviceinfoevent.md)  – Developers can now detect when the audio or video codec has changed (for example, the Roku is plugged into a different A/V receiver or TV)  and then check the current audio/video playback capability.

#### Media, DRM, and content meta-data updates

* [**Media player error and diagnostics reporting**](/docs/references/scenegraph/media-playback-nodes/video.md)  – Developers now have access to more detailed error reporting to help diagnose video play errors. When an error occurs, the new reporting will explain why media playback failed and, if applicable, which syntax or feature in the content is incompatible.

#### BrightScript Profiler features

* [**Line-level memory and CPU usage diagnostics**](/docs/developer-program/dev-tools/brightscript-doc.md#line-level-profiling)  — Developers can now collect profile data for each line of BrightScript source code to more clearly identify where memory or CPU usage is high.

#### Changes to Deprecated APIs

* [**roDeviceInfo.GetDeviceUniqueId()**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdeviceuniqueid-as-string)  – The `roDeviceInfo.GetDeviceUniqueId()` method now returns a string of zeroes instead of the 12-character alphanumeric string for the device serial number. Developers should use the [`roDeviceInfo.GetChannelClientId()`](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string)  method to get a 12-character device ID for their app. For an overview of the consumer features added in Roku OS 9.1, visit the Roku Blog.

## Roku OS 9

**Initial rollout date:** October 23, 2018

Roku OS 9 introduces a new manifest flag which adds drastic improvements to the memory footprint and launch times of Roku SceneGraph (RSG) apps. All RSG apps should set the "rsg_version=1.2" manifest entry to run the new, higher performing SceneGraph update. This update also adds memory profiling capabilities to the BrightScript Profiler tool, enabling developers to better identify memory leaks in their apps.

Below is a list of new APIs, tools, performance enhancements, and media updates for developers.

#### SceneGraph enhancements

* **New manifest flag for "rsg_version=1.2"** — By adding this new manifest entry, developers enable tremendous memory savings and app launch time improvements in RSG apps. [The "rsg_version=1.2" manifest entry](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes)  enables a new internal mechanism for processing component \<script> tags that optimizes the resulting compiled script code. This results in a major reduction in the app's initial startup time and uses dramatically less memory while preserving total compatibility. Initial startup time is typically reduced by approximately 30% when this manifest flag is set. Memory savings range from 10 - 20MiB in a moderately complex app, with up to 40MiB saved in a complex app with extensive component hierarchies.
* **eval() is no longer supported for "rsg_version=1.2"** — In order to realize the load time performance and memory benefits enabled by the "rsg_version=1.2" entry, eval() can no longer be supported. Any use of eval() will cause compilation and runtime errors if "rsg_version=1.2" is in the app’s manifest.
* **Faster AssociativeArray access** — Read and write access into and out of AssociativeArray fields on nodes, and retrieval of AssociativeArrays using roSGNodeEvent.getData() has been made 5x faster. The semantics of AssociativeArray fields are copy on read and write, and copy on roSGNodeEvent.getData(). Apps that heavily use AAs can expect dramatic speed increases that directly translate to user-perceivable operations.
* **Faster rendezvous** — This change enables an auxiliary thread to handle rendezvous operations when the render thread is occupied with tasks that don't need rendezvous protection. The result is dramatic speed-ups for rendezvous operations, particularly on Roku devices with lesser processing power.
* **Faster component creation** — Node creation times have been improved in Roku OS 9.
* **ZoomRowList component** — [ZoomRowList](/docs/references/scenegraph/list-and-grid-nodes/zoomrowlist.md) , a RowList component where the focused item is zoomed in, is now available for developers.
* **roSGNode.threadInfo() method** — A new diagnostic function, [threadInfo()](/docs/references/brightscript/interfaces/ifsgnodefield.md) , has been added to the [ifSGNodeField](/docs/references/brightscript/interfaces/ifsgnodefield.md)  interface. With few exceptions, this function may be called from any component, on any thread, in any function, at any time.

#### New BrightScript Profiler features

The [BrightScript Profiler](/docs/developer-program/dev-tools/brightscript-profiler.md)  now includes a memory profiling tool that can be used to help developers identify memory leaks or memory that is allocated during app operation without ever being freed. Roku OS 9 also adds support for streaming of profiling data to a local network host.

#### Media, DRM, and content meta-data updates

* **Dash EventStream** - Dash EventStream elements are supported in Roku OS 9.
* **[BETA] Opening Widevine DRM CBCS decryption mode** — Roku OS 9 adds CBCS decryption support for [Widevine DRM](/docs/specs/media/content-protection.md#widevine)  in DASH and HLS streams. At this stage, Widevine support is considered in beta on the Roku platform.
* **[BETA] DASH XLink support** -  Roku OS 9 adds DASH XLink support, including EventStream events that are surfaced to the app through the [timedMetaData](/docs/references/scenegraph/media-playback-nodes/video.md#fields)  field.
* **Widevine key rotation** - Roku OS 9 also adds support for Widevine key rotation and license renewal for Dash and HLS content.

#### Miscellaneous

* New manifest entry for a "game" app — Developers can now set the ["game" manifest entry](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes)  (game=1) to avoid audio delays in their game apps.
* roList indexing is no longer disturbed by array index access — The behavior of roList indexing has been modified to yield more intuitive results and resolve bugs. As of Roku OS 9, when implementing roList, ifEnum enumeration and ifList enumeration will use a separate and independent internal 'pointers' to the current element, instead of a "current integer index" variable. This has been done to ensure the ifList index position does not corrupt the roList index when the array read/write operators are used.
* Programmatic access to BIFs through BrightScript — Two new fields, getNearestFrame and nearestFrame, have been added to the [BifDisplay](/docs/references/scenegraph/media-playback-nodes/video.md#fields)  component so that developers can now access BIFs programmatically in their apps. Previously a BrightScript app had to use the built-in trickplay UI to access these BIFs.

For an overview of the consumer features added in Roku OS 9, visit the [Roku Blog](https://blog.roku.com/os-9-release-notes) .

## Roku OS 8.2

**Initial rollout date:** September 26, 2018

Roku OS 8.2 is a firmware update focused primarily on firmware optimizations and bug fixes, along with new features that will enable Roku TV models to work seamlessly with the upcoming Roku TV Wireless Speakers. This update introduces no new features, APIs, console logs, or tooling about which developers should be mindful.

For our consumer release notes, [see here](https://support.roku.com/article/228844467-roku-os-software-release-notes).

## Roku OS 8.1

**Initial rollout date:** May 1, 2018

#### Media, DRM, and content meta-data updates

* **PlayReady 3 Update** — All Roku devices with MStar chips update to the [PlayReady 3](/docs/specs/media/content-protection.md#playready) library with Roku OS 8.1. Previously they included PlayReady 2.5.
* **[BETA] Opening Access to Widevine DRM** — Roku OS 8.1 adds support for [Widevine DRM](/docs/specs/media/content-protection.md#widevine) for DASH streams. At this stage, Widevine support is considered in beta on the Roku platform.
* **Digital Rights Management (DRM) control attributes** — [Content metadata control attributes](doc:content-metadata#digital-rights-management-drm-control-attributes) for DRM have been added to the Roku OS.
* **Passing custom HTTP headers to licensing requests** — Developers looking to pass custom HTTP headers with a licensing request can now set those headers using the [ifHttpAgent](/docs/references/brightscript/interfaces/ifhttpagent.md) interface methods on the [Video](/docs/references/scenegraph/media-playback-nodes/video.md) node.
* **Media Player content metadata updates** — Two content metadata attributes of the Media Player have been updated and three new attributes have been added:
  * [PlayDuration](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes) is no longer used by the media player.
  * [BookmarkPosition](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes) is being deprecated.
    * The existing PlayStart attribute should be used instead as it has been modified to allow apps to seek to positions prior to PlayStart. the Roku OS will continue to support BookmarkPosition to maintain the backward compatibility, but apps should plan a migration to use PlayStart.
  * A new content meta-data attribute, [ClipStart](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes), sets the clip start position.
  * A new content meta-data attribute, [ClipEnd](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes), sets the clip end position.
  * A new content meta-data attribute, [LiveBoundsPauseBehavior](/docs/developer-program/getting-started/architecture/content-metadata.md#playback-configuration-attributes), allows an app to customize Media Player behavior on live streams when playing in the earliest part of a DVR buffer.

#### Deprecated APIs

Five [roDeviceInfo](/docs/references/brightscript/components/rodeviceinfo.md) methods are being deprecated and replaced with similar APIs (as seen in the chart below).

The deprecated APIs will remain in the Roku OS and continue to work for one year; they will be removed from the Roku OS in the Spring 2019 OS update. **Developers must update their apps to use the new APIs within the next year.**

Below is a complete list of the APIs deprecated as of Roku OS 8.1.

| Deprecated API           | Replacement API                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| GetDrmInfo()             | [GetDrmInfoEx()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdrminfoex-as-object)                       |
| GetAdvertisingId()       | [GetRIDA()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string)                                 |
| IsAdIdTrackingDisabled() | [IsRIDADisabled()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean)                  |
| GetClientTrackingId()    | [GetChannelClientId()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string)           |
| GetDeviceUniqueId()      | N/A — Use [GetChannelClientId()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string) |

#### General API Enhancements

* **Memory-level notification** — This release adds a memory-level notification API ([generalMemoryLevel](/docs/references/brightscript/components/rodeviceinfo.md)) to roDeviceInfoEvent to fire notifications to the app. Apps can also query the memory level directly using [two new methods](/docs/references/brightscript/interfaces/ifdeviceinfo.md#enablelowgeneralmemoryeventenabled-as-boolean-as-dynamic) of the [roDeviceInfo](/docs/references/brightscript/components/rodeviceinfo.md) component.
* **GetUserCountryCode() API** — To determine the country associated with a user’s Roku account, a new method [GetUserCountryCode()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getusercountrycode-as-string) as String was added to [roDeviceInfo](/docs/references/brightscript/components/rodeviceinfo.md).
* **roRegex.MatchAll()** — A new method [MatchAll()](/docs/references/brightscript/interfaces/ifregex.md#matchallstr-as-string-as-object), has been added to [roRegex](/docs/references/brightscript/components/roregex.md). This adds the ability to return all matches of a specific regular expression pattern in the target string.
* **Getting captions mode from device event** — The developer can now call GetInfo() on a device event to know the current global setting for closed caption mode property using [isCaptionModeChanged()](/docs/references/brightscript/events/rodeviceinfoevent.md).
* **API to determine if a Roku TV is Energy Star Compliant** — Developers can determine if a Roku powered TV is Energy Star Compliant by using the [roDeviceInfo.HasFeature("energy_star_compliant")](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getusercountrycode-as-string) API.
* **storeChannelCredData API** — This OS update introduces a new roChannelStore method, [StoreChannelCredData()](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md), that allows apps to store information in our backend which they can retrieve later using GetChannelCred(). Calling this new API allows developers to store OAuth tokens for a signed-in user so that when the app is launched on a new Roku device, the app can request the stored information, identify their customer, and automatically sign them in.

#### SceneGraph Updates

* **ReplaceChildren() ignores extra items in the replace list** — When using [replaceChildren()](doc:ifsgnodechildren#replacechildrenchild_nodes-as-object-index-as-integer-as-boolean) to update the content of each item in a [markupGrid](/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md), if the developer supplies more items than there are in the original list (going from 4 items to 5), the 'extra' items are ignored and not added as children.
* **Mobile or ECP keypress events now appear in onKeyEvent()** — Literal key keypress events (such as keyboard letters, and so forth) that are sent to  via the mobile app or [ECP](/docs/developer-program/dev-tools/external-control-api.md) keydown/keyup commands, now go to the [onKeyEvent()](doc:onkeyevent) handler. Previously, only keys that corresponded to remote keys went to the onKeyEvent handler.
* **SimpleLabel** - Roku OS version 8.1 introduces [SimpleLabel](/docs/references/scenegraph/renderable-nodes/simplelabel.md) which is a lightweight complement node to the [Label](/docs/references/scenegraph/label-nodes/label.md) node. It supports simplified font style specification and is more memory efficient than the Label node.

## Roku OS 8

**Initial rollout date:** October 2, 2017

#### Performance & optimization

* **fps_display command** — A new command, [fps_display](/docs/developer-program/debugging/debugging-channels.md) , has been added to Telnet port 8080 to display frames-per-second and free memory on-screen. Developers can leverage this tool to optimize their app UI.
* **Registry ReadMulti and WriteMulti APIs** — [roRegistrySection](/docs/references/brightscript/components/roregistrysection.md)  adds two new APIs, **WriteMulti** and **ReadMulti** — to allow apps to read/write multiple keys at a time.
* **[BETA] New file system for data caching** — A new file system, [cachefs:](/docs/developer-program/getting-started/architecture/file-system.md) , has been introduced to allow applications to cache data to volatile or persistent storage. Users who extend the persistent storage available on their device by adding an SD card will see the biggest benefit as application data will survive reboots and benefit from additional cache space to improve performance. Users without extended storage will also benefit from the use of a shared in-memory cache that is automatically managed by the system to optimize for the most recently used assets.
* **RSG platform performance improvements** — Many improvements have been built into the Roku OS itself, enabling better support for low-end devices. All apps automatically inherit these benefits, with no action required from the developer.
  * \<script> include files no longer incur an expensive copy for each component that includes it.
  * The time penalty for rendezvous has been reduced.
  * The per-node memory penalty has been significantly reduced.
  * Image caching has been added for all apps.
  <br />

#### SceneGraph updates

* **Support for RSG 1.0 functionality is deprecated** — Starting with Roku OS 8, support for the “[rsg_version=1.0](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) ” manifest flag is deprecated. This deprecation means that the 1.0 features continue to work in Roku OS 8, but will no longer be supported (and thus should not be expected to work) starting with our next major firmware release. Apps affected by the change in Roku’s [observer callback model](/docs/developer-program/core-concepts/handling-application-events.md)  introduced in Roku OS 7.5 should be updated accordingly.
* **Video node updates** — Many new fields have been added to the [Video](/docs/references/scenegraph/media-playback-nodes/video.md)  node:
  * **captionStyle** allows apps to style closed captions.
  * **contentBlocked** determines whether the current content is blocked.
  * **supplementaryAudioVolume** sets the volume of the description tracks separately from the main audio track.
  * **availableAudioTracks** has been updated to return/include audio description tracks, which are typically seen on broadcast TV.
  * **itemHasFocus field for item components** — A new optional field "itemHasFocus" has been added for RSG item components: [MarkupList](/docs/references/scenegraph/layout-group-nodes/markuplist.md) , [MarkupGrid](/docs/references/scenegraph/list-and-grid-nodes/markupgrid.md) , [RowList](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md)  and [TargetGroup](/docs/references/scenegraph/layout-group-nodes/targetgroup.md) . It stores a boolean value that indicates whether the item component currently is the focused item. Only one item component of any of the nodes should have itemHasFocus set to true.
  * **ParentalControlPinPad** — Roku OS 8 contains a new node, [ParentalControlPinPad](/docs/references/scenegraph/renderable-nodes/rectangle.md) . It is a variant of the PinPad component, but with a few key differences:
    * The pin, pinLength, and secureModefields are made private.
    * If the user enters the correct pin, a 2-hour override of content blocking begins, similar to the system behavior on Roku TV.
    * If the user enters an incorrect PIN, the text fields are cleared automatically.
    * A new field, pinSuccess, exists for blocking content.
  * **Rectangle node blendingEnabled support** — A blendingEnabled field has been added to the RSG [Rectangle](/docs/references/scenegraph/renderable-nodes/rectangle.md)  component that specifies if the rectangle should be alpha blended with the nodes behind it.

#### System overlay & closed caption updates

* **Improvements to the system overlay** — The behavior of the Roku system overlay has been modified, such that the system overlay now slides in whenever the * button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.
* **System overlay notification event** — A new notification has been added to [roDeviceInfo](/docs/references/brightscript/components/rodeviceinfo.md) . Apps can get notified when a system overlay is displayed.
* **roDeviceInfoEvent update** — A new event, isCaptionModeChangedEvent, has been added to [roDeviceInfoEvent](/docs/references/brightscript/events/rodeviceinfoevent.md)  to enable developers to check if the user changes the closed caption mode or track.
* **Closed caption track selection** — It is no longer necessary for a app to partake in the CC track selection, apart from adding any tracks to the list of available tracks. the Roku OS now selects a CC track based on the preferred caption language selection in the system preferences. When the selected language is not available, it defaults to the system's UI language.

#### Miscellaneous

* **Case-preserving quoted keys in Associative Arrays** — The quoted keys in [Associative Array](/docs/references/brightscript/components/roassociativearray.md) literals are now case-preserving. This change improves the readability of your code and is compatible with JSON usage.
* **CEC status events** — A [roCECStatusEvent](/docs/references/brightscript/events/rocecstatusevent.md)  has been added for set-top-boxes to determine their active display source status. Apps subscribing to the event will be notified when the active-source status of the device changes per the CEC message traffic.

## Roku OS 7.7

**Initial rollout date:** June 20, 2017

Roku OS 7.7 focuses mainly on bug fixes and firmware optimizations to increase performance of Roku SceneGraph (RSG) apps.

#### SceneGraph additions and modifications

* **New event added for DASH manifest updates** — A new field, `manifestData`, has been added to the [Video node](/docs/references/scenegraph/media-playback-nodes/video.md) to detect the periods in a DASH manifest before they are played back. One major use case for this is to display ad markers in the trickplay progress bar.

* **New field to reflect current design resolution** — A read-only field, [`currentDesignResolution`](/docs/references/scenegraph/scene.md), has been added to Scene nodes to determine which of the supported design resolutions is currently being used by RSG.

* **UI changes to the RowList & ArrayGrid components** — Two new fields have been added to the [RowList](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md) and [ArrayGrid](/docs/references/scenegraph/abstract-nodes/arraygrid.md) components to provide greater control over the UX:

  * **RowList** — `rowCounterRightOffset`  
    Used to specify the location of the right edge of the row counter relative to right edge of the RowList's clipping rectangle.
  * **RowList** — `showRowCounterForShortRows`  
    Determines whether the row counter is shown for all rows.
  * **ArrayGrid** — `fadeFocusFeedbackWhenAutoScrolling`  
    Determines whether to fade the focus feedback indicator while scrolling multiple items.
  * **ArrayGrid** — `currFocusFeedbackOpacity` Provides access to the current opacity of the focus feedback indicator.

* **New field to play animations in reverse** — A "reverse" boolean field has been added to the [`FloatFieldInterpolator`](/docs/references/scenegraph/animation-nodes/floatfieldinterpolator.md), [`ColorFieldInterpolator`](/docs/references/scenegraph/animation-nodes/colorfieldinterpolator.md), and [`Vector2DFieldInterpolator`](/docs/references/scenegraph/animation-nodes/vector2Dfieldinterpolator.md) RSG nodes to allow for interpolated values to be computed in reverse.

* **Component compile time optimizations** — Roku OS 7.7 includes several BrightScript compile time optimizations that significantly improve app launch times. In particular, RSG apps defining many components with the same script files will benefit from the largest app launch time enhancements.

  > These optimizations are in the Roku OS and require no action from the developer.

#### Additional updates

* **Manifest addition for confirming app launches** — An optional field, "[confirm_partner_button](/docs/developer-program/getting-started/architecture/channel-manifest.md#launch-requirement-attributes)", has been added to the manifest to confirm app launches before leaving the current app after a partner button was pressed on the Roku remote. Use this feature to minimize the number of unintended app launches after a user accidentally hits a partner button while fast forwarding or rewinding content.

* **Manifest entry for overriding network connectivity HUD** — Roku OS 7.7 introduces a system-level display for indicating when media playback is interrupted due to network connection failures. However, apps that have designed their own error dialogue for these interruptions can suppress this pop-up HUD by including a new flag in their manifest. The manifest entry to override the HUD is “[suppress_unconnected_hud=1](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes)”.

  > For more information on the **connectivity HUD**, please read the related [support article.](https://support.roku.com/article/208755728-what-to-do-if-you-can)

* **New logTypes added to ifSystemLog** — [`ifSystemLog`](/docs/references/brightscript/interfaces/ifsystemlog.md) now supports a new logType: "http.complete". When enabled, the “http.complete” events will be sent to Roku after an http transfer is completed for adaptive streams. This event consolidates information related to a cURL transfer such as:

  * DNS look up time,
  * connection latency,
  * transfer speed
  * and number of bytes.

While Roku OS 7.7 is focused almost entirely on bug fixes and developer optimizations, it does include a few new consumer features.

For our consumer release notes, visit the [Roku Blog](https://blog.roku.com/roku-os-7-7-release-notes/).

<HTMLBlock>{`
<h2 id="roku-os-7-5">Roku OS 7.5</h2>
<p><strong>Initial rollout date:</strong> November 1, 2016</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li><p>[Thread rendezvous](doc:threads#task-node-thread-rendezvous-timeout)
no longer timeout and will wait indefinitely.  </p>
</li>
<li><p>New components:</p>
<ul>
<li>[TargetGroup](doc:targetgroup)</li>
<li>[TargetList](doc:targetlist)</li>
<li>[TargetSet](doc:targetset)</li>
<li>[SoundEffect](doc:soundeffect) node  </li>
</ul>
</li>
<li><p>New and updated fields:</p>
<ul>
<li>[<interface\>](doc:interface):
added roArray, rect2D, and rect2DArray
types</li>
<li>[LayoutGroup](doc:layoutgroup):
&quot;custom&quot; alignment value for horizAlignment and vertAlignment to
explicitly set translation values for each child layout</li>
<li>[Poster](doc:poster) node:
bitmapMargins - set to an associative array containing margin
information for 9-patch images</li>
<li>[Animation](doc:animation):
optional - set to true to skip animations on lower performing
devices</li>
<li>[Functional Fields](doc:handling-application-events#HandlingApplicationEvents-FunctionalFields)<ul>
<li>procedural functions that can be called on components directly</li>
</ul>
</li>
<li>[Overhang](doc:overhang) -
added optionsText and optionsMaxWidth to customize the text next
to the options (<img src="images/icons/emoticons/star_yellow.png" alt="roku815px - (star)">) symbol</li>
<li>[RowList](doc:rowlist):
rowTitleComponentName - specify an XML component to render text
in place of the row label</li>
<li>findNode() arguments and nodeType fields are now case
insensitive</li>
<li>ChannelStore node commands have been serialized to ensure that
one command finishes before the next begins</li>
<li>Components in [Component Libraries](doc:componentlibrary)
can be extended</li>
<li>Component Libraries can be unsigned if delivered over HTTPS</li>
<li>New [Dialog](doc:dialog)
fields: titleColor, titleFont, numberedBullets, bulletText,
graphicWidth, graphicHeight, width, maxHeight</li>
<li>New [ifSGNodeField](doc:ifsgnodefield) methods:
observeFieldScoped(), unobserveFieldScoped()</li>
</ul>
</li>
</ul>
<h4 id="brightscript-updates">BrightScript updates</h4>
<ul>
<li>New components:<ul>
<li>[roAudioGuide](doc:roaudioguide)
[ifAudioGuide](doc:ifaudioguide)</li>
</ul>
</li>
</ul>
<ul>
<li>Updated components:<ul>
<li>ifChannelStore: [GetIdentity()](doc:ifchannelstore#getidentity-as-integer) -
returns a unique number for this object that can be used to
identify whether events originated from this object by comparing
with [roChannelStoreEvent](doc:rochannelstoreevent).GetSourceIdentity().</li>
<li>[ifTuner](doc:iftuner#getchannelinfo-channel_id-as-string-asobject):
GetChannelInfo().delivery_system, source_data.network_id,
source_data.transport_stream_id</li>
<li>ifAppManager: [SetAutomaticAudioGuideEnabled(enabled as Boolean)](doc:ifappmanager#setautomaticaudioguideenabledenabled-as-boolean-as-void)<ul>
<li>enable/disable automatic Audio Guide and override any manifest
setting</li>
</ul>
</li>
<li>Content Meta-Data - [Playback Configuration Attributes](doc:content-metadata#playback-configuration-attributes):<ul>
<li>ForwardQueryStringParams - controls whether query string
parameters from initial HLS stream manifest requests are
forwarded to subsequent segment download requests</li>
<li>IgnoreStreamErrors - continue playback when encountering any
streaming related errors</li>
<li>AdaptiveMinStartBitrate - minimum startup bitrate to start
streaming with a variant equal to or greater than the value
specified</li>
<li>AdaptiveMaxStartBitrate - maximum startup bitrate to start
streaming with a variant less than or equal to the value
specified</li>
<li>PlayStart - cannot be overridden by a seek operation</li>
<li>BookmarkPosition - can be overridden by a seek operation;
this value takes precedence over PlayStart</li>
</ul>
</li>
<li>[roVideoPlayerEvent](doc:rovideoplayerevent):<ul>
<li>isStreamSegmentInfo.GetMessage() - supports segment
information for HLS, DASH, and Smooth streams</li>
<li>isRequestFailed().GetInfo():<ul>
<li>ClipIdx - The zero starting index of the item in the
content list this event is related to</li>
<li>Ignored - true if the error was ignored and the player
skipped to the next item in the content list</li>
</ul>
</li>
<li>isPlaybackPosition().GetInfo():<ul>
<li>ClipIdx - The zero starting index of the item in the
content list this event is related to</li>
<li>ClipPos - player position relative to the start of the
clip in milliseconds</li>
</ul>
</li>
</ul>
</li>
<li>[ifVideoPlayer](doc:ifvideoplayer):<ul>
<li>[Play()](doc:ifvideoplayer#play-as-boolean)<ul>
<li>starts playback at the seek position if seek was
called prior to play. If seek was not called, the player
advances its current position to the next item in the
content list and starts playing that item</li>
</ul>
</li>
<li>[Stop()](doc:ifvideoplayer#stop-as-boolean)<ul>
<li>stops playback and resets the seek position, keeping the player’s current position unchanged</li>
</ul>
</li>
<li>[SetContentList()](doc:ifvideoplayer#setcontentlistcontentlist-as-object-as-void)<ul>
<li>Resets the current player position, the next time Play()
is called playback will start at the first item of the
content list (Unless Seek() is called prior); prefetching
updates</li>
</ul>
</li>
</ul>
</li>
<li>[ifDeviceInfo](doc:ifdeviceinfo):<ul>
<li>[EnableScreensaverExitedEvent()](doc:ifdeviceinfo#enablescreensaverexitedeventenable-as-boolean-as-dynamic) -
set to true to enable events to indicate when the user has exited the screensaver</li>
<li>[IsAudioGuideEnabled()](doc:ifdeviceinfo#isaudioguideenabled-as-dynamic)-
returns true if Audio Guide is enabled on a supported device</li>
<li>[EnableAudioGuideChangedEvent()](doc:ifdeviceinfo#enableaudioguidechangedeventenable-as-boolean-as-dynamic)-
set to true to receive Audio Guide events</li>
</ul>
</li>
<li>[roDeviceInfoEvent](doc:rodeviceinfoevent):<ul>
<li>GetInfo().audioGuideEnabled</li>
<li>GetInfo().exitedScreensaver</li>
</ul>
</li>
<li>[ifStringOps](doc:ifstringops):
Escape(), Unescape(), EncodeUri(), DecodeUri(),
EncodeUriComponent(),
DecodeUriComponent()</li>
<li>[ifTextToSpeech](doc:iftexttospeech):
GetRate(), SetRate(), GetPitch(), SetPitch()</li>
<li>[ifAssociativeArray](doc:ifassociativearray): Items()<ul>
<li>Returns an array containing the associative array key/value
pairs in lexicographical order of key. Each item is in the
returned array is an associative array with &#39;key&#39; and &#39;value&#39;
fields.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="new-manifest-https-github-com-rokudev-docs-blob-master-develop-specifications-manifest-md-entries">New <a href="https://github.com/rokudev/docs/blob/master/develop/specifications/manifest.md">manifest</a> entries</h4>
<ul>
<li>automatic_audio_guide_disabled: disable Audio Guide within an app</li>
<li>usb_media_handler: auto launch apps when a USB device is inserted</li>
<li>rsg_version: change the type of [observer callback model](doc:handling-application-events#HandlingApplicationEvents-ObserverCallbackModels)
used</li>
</ul>
<h4 id="brightscript-debugger-updates">BrightScript debugger updates</h4>
<ul>
<li>Port 8085 now provides context for all threads and port 8089-8093 will no longer be used.<ul>
<li>STOP, breaks, and continue will stop/resume all threads. Prior to 7.5, only one thread would stop/resume.</li>
<li>See the overview on <a href="https://github.com/rokudev/docs/blob/master/develop/guides/debugging.md#scenegraph-applications">Debugging SceneGraph applications</a> for more details.</li>
</ul>
</li>
<li>New 8085 commands:<ul>
<li>threads: list all current executed suspended threads</li>
<li>thread <id\>: select a suspended thread to debug</li>
</ul>
</li>
<li>New 8080 commands:<ul>
<li>loaded_textures: display the current set of images loaded into
texture memory</li>
<li>sgversion: change the [observer callback model](doc:handling-application-events#HandlingApplicationEvents-ObserverCallbackModels)</li>
</ul>
</li>
</ul>
<h4 id="external-control-protocol-additions">External Control Protocol additions</h4>
<ul>
<li>[Roku TV commands](doc:external-control-api): query/tv-channels, query/tv-active-channel, launch/tvinput.dtv</li>
<li>[search commands](doc:external-control-api): query and launch Roku Search-driven content</li>
</ul>
<h4 id="media-player-updates">Media Player updates</h4>
<ul>
<li>Fast Video Start can now prebuffer from non-zero positions, allowing
for prebuffering of content in “Continue Watching” lists</li>
<li>Live DASH streaming support</li>
<li>The Roku MediaPlayer now automatically detects and plays a video
even if the file type is not specified. All major file types — HLS,
DASH, Smooth and MP4 — are detected</li>
<li>Video player automatically scales when changing to a different
stream with different aspect ratios</li>
</ul>
<h2 id="roku-os-7-2">Roku OS 7.2</h2>
<p><strong>Initial rollout date:</strong> June 21, 2016</p>
<p>This release adds two notable features. A text to speech feature has
been added to allow all Roku applications to provide audible spoken
versions of the user interface. Also, an option to buffer a video stream
without actually playing it is now included, to provide a &quot;fast start&quot;
video playback capability to your applications. You can use this option
to begin buffering the video stream while a user is reading a
description of the video, and then start the actual playback when the
user selects it. Roku SceneGraph also supports this new option, as well
as built-in support for Audio and Video node playlists, improved HTTPS
support, improved debugging, and several other new features.</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li>A prebuffer option has been added to the control field of the Audio
and Video nodes to allow buffering of media playback prior to the
user starting the media item ([Audio](doc:audio),
[Video](doc:video), <a href="Playing-Videos_1608528.html">Playing
Videos</a>).</li>
<li>Screensavers can now be created in SceneGraph
([Screensavers](doc:screensavers)).</li>
<li>New debugging commands are available (<a href="Debugging-SceneGraph-Applications_3736509.html">Debugging SceneGraph
Applications</a>,
[ifSGNodeChildren](doc:ifsgnodechildren)).</li>
<li>The ChannelStore node class has been added for in-app purchase
support in SceneGraph applications
([ChannelStore](doc:channelstore)).</li>
<li>The Task node has been modified ([Task](doc:task),
[SceneGraph Threads](doc:threads)).</li>
<li>A bufferingStatus field has been added to the Audio node
([Audio](doc:audio)).</li>
<li>Timed meta-data is now supported for both Audio and Video node
playback ([Audio](doc:audio), [Video](doc:video)).</li>
<li>Audio and Video nodes now have built-in support for playlists that
can play several media items in sequence
([Audio](doc:audio), [Video](doc:video)).</li>
<li>HTTPS support is now available for all SceneGraph nodes
([roHttpAgent](doc:rohttpagent)).</li>
<li>A MaxVideoDecodeResolution field has been added to the Video node
([Video](doc:video)).</li>
<li>New fields have been added to the Video node to allow customizing
the internal ProgressBar node ([Video](doc:video)).</li>
<li>New fields have been added to the Video node to allow customizing
the internal TrickPlayBar node ([Video](doc:video)).</li>
<li>The order of field setting of component-based lists and grids has
changed ([MarkupList](doc:markuplist),
[MarkupGrid](doc:markupgrid),
[RowList](doc:rowlist)).</li>
<li>Several new methods have been added to the ifSGNodeChildren
interface ([ifSGNodeChildren](doc:ifsgnodechildren)).</li>
</ul>
<h4 id="component-updates">Component updates</h4>
<ul>
<li>roVideoPlayer and roVideoScreen interface Prebuffer() method
added to allow buffering of video playback prior to the user
starting the video ([ifVideoPlayer](doc:ifvideoplayer),
[ifVideoScreen](doc:ifvideoscreen), <a href="Fast-Video-Start_4262645.html">Fast Video
Start</a>).</li>
<li>A text-to-speech component has been added to support audible spoken
versions of the user interface
([roTextToSpeech](doc:rotexttospeech),
[ifTextToSpeech](doc:iftexttospeech),
[roTextToSpeechEvent](doc:rotexttospeechevent), [Text to Speech](doc:text-to-speech)).</li>
<li>New methods have been added to roUniversalControlEvent that improve
distinguishing between remote control and keyboard key presses, and
the key press and release events ([roUniversalControlEvent](doc:rouniversalcontrolevent)).</li>
</ul>
<h4 id="brightscript-debugger-updates">BrightScript debugger updates</h4>
<ul>
<li>Commands to step over and out of functions have been added
([Debugging Your Application](doc:debugging)).</li>
<li>Special commands to debug SceneGraph applications have been added
(<a href="Debugging-SceneGraph-Applications_3736509.html">Debugging SceneGraph Applications</a>).</li>
</ul>
<h2 id="roku-os-7-1">Roku OS 7.1</h2>
<p><strong>Initial rollout date:</strong> April 5, 2016</p>
<p>The 7.1 firmware release incorporates several BrightScript and
BrightScript component improvements. There is now support for playing
broadcast and cable content on a Roku TV which includes a tuner.
SceneGraph has numerous improvements to the Video node, and new
capabilities such as passing global data between components, passing
parameters to callback functions, localization, and downloading
libraries of SceneGraph components.</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li>Libraries of SceneGraph components can now be loaded and used at the
start of a SceneGraph application
([<strong>ComponentLibrary</strong>](doc:componentlibrary))</li>
<li>SceneGraph components can now be extended from other custom
components (<a href="Creating-Custom-Components_4260778.html"><strong>Creating Custom Components</strong></a>).</li>
<li>A <code>uri</code> field type has been added to better support URL resolution
and features like certificates and cookies ([<strong>Content Meta-Data</strong>](doc:content-metadata)).</li>
<li>Support for localization/internationalization string translations
and automatic localized graphic image insertion ([<strong>SceneGraph Localization</strong>](doc:localization)).</li>
<li>Automatic scaling of image files to a specified size on download,
with aspect ratio preserving
options ([<strong>Poster</strong>](doc:poster),
[<strong>PosterGrid</strong>](doc:postergrid)).</li>
<li>Parameters can now be passed to observer callback
functions ([<strong>ifSGNodeField</strong>](doc:ifsgnodefield)).</li>
<li>Global application data can now be more easily shared between
components, using an <code>m.global</code> object reference ([<strong>SceneGraph Data Scoping</strong>](doc:data-scoping)).</li>
<li>Support for node identity
comparison ([<strong>ifSGNodeDict</strong>](doc:ifsgnodedict)).</li>
<li>Support for dynamic additions to interface fields for all nodes,
allowing all node fields to be
observed ([<strong>ifSGNodeField</strong>](doc:ifsgnodefield),
[<strong>Node</strong>](doc:node)).</li>
<li>Video node class includes several new fields to configure trick play
and other playback features ([<strong>Video</strong>](doc:video)).</li>
<li>Focus indicators for list and grids can now be customized by
blending the indicator colors
([<strong>ArrayGrid</strong>](doc:arraygrid)).</li>
<li>New XML markup component interfaces:<ul>
<li>onChange takes an associative array and a function
name (<strong><a href="interface_1608549.html"><interface\></a></strong>)</li>
<li>calling functions from an associative array is now
supported (<strong><a href="interface_1608549.html"><interface\></a></strong>)</li>
</ul>
</li>
</ul>
<h4 id="brightscript-language-updates">BrightScript language updates</h4>
<p>added increment (<code>++</code>) and decrement (<code>–</code>) operators to allow integer
increment and decrement operations to have effect on a variable
([<strong>Expressions, Variables, and Types</strong>](doc:expressions-variables-types))</p>
<p>added the following assignment operators to support mathematical and
bitshift operations with numeric operands ([<strong>Expressions, Variables, and Types</strong>](doc:expressions-variables-types)):</p>
<ul>
<li>+=</li>
<li>-=</li>
<li>*=</li>
<li>/=</li>
<li>\=</li>
<li>&lt;&lt;=</li>
<li>>>=<span style="color: rgb(255,0,0);"><br></span></li>
</ul>
<p>ReadAsciiFile() now supports UTF-16 files ([<strong>Global Utility Functions</strong>](doc:global-utility-functions))</p>
<h4 id="brightscript-language-fixes">BrightScript language fixes</h4>
<ul>
<li>Print now always explicitly prints the component type for enumerable
objects. Previously, it would just print the contents of enumerable
objects, and did not identify the container object itself, which
could lead to confusion ([<strong>Program Statements</strong>](doc:program-statements)).</li>
<li><p>Print and FormatJSON no longer have side effects on enumation state
when accessing enumerable objects (associative array, array, list,
and so forth) ([<strong>Program Statements</strong>](doc:program-statements), [<strong>Global Utility Functions</strong>](doc:global-utility-functions))  </p>
<p>Example:  </p>
<p>aa={a:2,b:1,c:3} : for each x in aa : print x;&quot; from &quot;;aa : end
for  </p>
<p>Previously:</p>
<p>a from &#39; ...  </p>
<p>Now:  </p>
<p>a from &#39; ...<br>c from &#39; ...<br>b from &#39; ...</p>
</li>
</ul>
<h4 id="component-changes">Component changes</h4>
<ul>
<li>roTuner and associated interfaces have been added to support playing
broadcast and cable content from a tuner
(<strong><a href="/pages/createpage.action?spaceKey=sdkdoc&amp;title=roTuner&amp;linkCreation=true&amp;fromPageId=1611545">roTuner</a></strong>)</li>
<li>roProgramGuide and associated interfaces have been added to support
broadcast content program guide data
(<strong><a href="/pages/createpage.action?spaceKey=sdkdoc&amp;title=roProgramGuide&amp;linkCreation=true&amp;fromPageId=1611545">roProgramGuide</a></strong>)</li>
<li>roSlideShow SetLoop
added (<strong>[roSlideShow](doc:roslideshow)</strong>)</li>
<li>roTextureManager ifHttpAgent
added (<strong>[roTextureManager](doc:rotexturemanager)</strong>)</li>
<li>roUrlTransfer GetToString(), AsyncGetToString() now support UTF-16
files (<strong>[roUrlTransfer](doc:rourltransfer)</strong>)</li>
<li>roAppManager/ifAppManager SetUserSignedIn() method added to indicate
that a user has signed into the app
(<strong>[roAppManager](doc:roappmanager)</strong>)</li>
<li>roArray/ifArraySort Sort() method was
added (<strong>[roArray](doc:roarray)</strong>)</li>
<li>roArray/ifArraySort SortBy() method was
added (<strong>[roArray](doc:roarray)</strong>)</li>
<li>roArray/ifArraySort Reverse() method was
added (<strong>[roArray](doc:roarray)</strong></li>
<li>roString/ifStringOps Split() method was
added (<strong>[roString](doc:rostring)</strong>)</li>
</ul>
<h2 id="roku-os-7-0">Roku OS 7.0</h2>
<p><strong>Initial rollout date:</strong> November 6, 2015</p>
<h5 id="scenegraph-xml-api">SceneGraph XML API</h5>
<p>A new user interface programming API has been added. Information on this
new API can be found in:</p>
<ul>
<li>[SceneGraph XML Guide](doc:overview)</li>
<li>[SceneGraph Reference](doc:core-concepts)</li>
<li>[SceneGraph XML Tutorial](doc:overview)</li>
</ul>
<h4 id="roku-search-and-follow">Roku Search and follow</h4>
<p>Users can now follow content from the Roku homescreen <strong>Search</strong> in
addition to <strong>My Feed</strong>. This allows you to have users who choose to
follow a particular search term (a movie, director, or an actor) to
receive automatic updates when your latest content includes that term.</p>
<h4 id="roku-4-support">Roku 4 support</h4>
<p>Support is now included for the Roku 4 Streaming Media Player. This Roku
Player features greatly enhanced video resolution output up to
2160p (ultra-high definition, or UHD). This Roku Player also allows
the creation and use of user interfaces with 1080p (full
high-definition, or FHD) resolution. The Roku 4 Streaming Media Player
includes a much more powerful quad core ARM processor and decoding
support for the HEVC (high-efficiency video code) codec to allow
efficient streaming of 2160p video content.</p>
<h4 id="ecp-install-command">ECP install command</h4>
<p>An install command has been added to the ECP to allow deep-linking to
uninstalled apps.</p>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>Associative array literals can now specify key names as string
literals (quoted strings).</li>
<li>added aa.Keys to return the keys for an associative array</li>
<li>added a 64-bit LongInteger type</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<p><strong>roAssociativeArray</strong></p>
<ul>
<li>added Function Keys() As Object</li>
</ul>
<p><strong>roDeviceInfo</strong></p>
<ul>
<li>added Functions [CanDecodeVideo()](doc:ifdeviceinfo#candecodevideovideo_format-as-object-as-object),
[CanDecodeAudio()](doc:ifdeviceinfo#candecodeaudioaudio_format-as-object-as-object),
and [GetDrmInfo()](doc:ifdeviceinfo#getdrminfo-as-object)
to [ifDeviceInfo](doc:ifdeviceinfo) interface.</li>
</ul>
<h2 id="roku-os-6-2">Roku OS 6.2</h2>
<p><strong>Initial rollout date:</strong> April 9, 2015</p>
<h4 id="roku-advertising-framework">Roku Advertising Framework</h4>
<ul>
<li>Added the [Roku Advertising Framework](doc:advertising) to natively integrate advertising capabilities</li>
</ul>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>Now supports embedded quotation mark characters in string literals</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<h5 id="ifdatetime-changes">ifDateTime changes</h5>
<ul>
<li>Added [GetDayOfWeek()](doc:ifdatetime#getdayofweek-as-integer) as Integer</li>
<li>Added [GetTimeZoneOffset()](doc:ifdatetime#gettimezoneoffset-as-integer) as Integer</li>
<li>Added [ToISOString()](doc:ifdatetime#toisostring-as-string) as String</li>
</ul>
<h5 id="ifdraw2d-changes">ifDraw2D changes</h5>
<ul>
<li>Added [DrawPoint(x as Integer, y as Integer, size as Float, rgba as Integer) as Void](doc:ifdraw2d#drawpointrgba-as-integer-size-as-float-x-as-integer-y-as-integer-as-void)</li>
</ul>
<h2 id="roku-os-6-1">Roku OS 6.1</h2>
<p><strong>Initial rollout date:</strong> December 4, 2014</p>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>now supports integer division operator &#39;\&#39;</li>
<li>now supports integer bitshift operators &#39;&lt;&lt;&#39; and &#39;>>&#39;</li>
<li>roAssociativeArray Count function was added</li>
<li>parameter validation diagnostics have been added to core components</li>
<li>roString Replace method was added.</li>
<li>ParseJSON bug fixes</li>
<li>FormatJSON bug fixes</li>
<li>global function FindMemberFunction was added.</li>
<li>floats are now auto-boxed for method calls</li>
<li>global function Val has a new overload for parsing from hexadecimal
strings etc.</li>
<li>global function StrI has a new overload for formatting hexadecimal
strings etc.</li>
</ul>
<h4 id="brightscript-debugger">BrightScript debugger</h4>
<ul>
<li>bscs &#39;Summarize BrightScript Component instances&#39; command was added</li>
<li>brkd &#39;Break on BrightScript diagnostics&#39; command was added</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<h5 id="rodeviceinfo-changes">roDeviceInfo changes</h5>
<ul>
<li>Added Function GetModelDetails() As Object</li>
<li>Added Function GetFriendlyName() As String</li>
<li>Added Function GetCreationTime(Void) As String</li>
<li>Added Function GetAudioDecodeInfo(Void) As Object</li>
<li>Added Function GetVideoDecodeInfo(Void) As Object</li>
<li>Added Function GetAdvertisingId(Void) As String</li>
<li>Added Function IsAdIdTrackingDisabled(Void) As Boolean</li>
<li>Added Function GetPublisherId(Void) As String</li>
<li>Added Function GetRandomUUID(Void) As String</li>
</ul>
<h5 id="romessagedialog-changes">roMessageDialog changes</h5>
<ul>
<li>Added Function UpdateButton(id As Integer, title As String) As Boolean</li>
</ul>
<h2 id="roku-os-5-4">Roku OS 5.4</h2>
<p><strong>Initial rollout date:</strong> April 14, 2014</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Two new content metadata structures for controlling closed captions:
SubtitleConfig and SubtitleTracks. Details of how to use these to
control captions [can be found here](doc:closed-caption).</li>
<li>Two new caption renderer functions for retrieving all caption tracks
in a stream and for setting the current track:
ifCaptionRenderer.GetSubtitleTracks() and ChangeSubtitleTrack().
Details about these two new functions [can be found here](doc:ifcaptionrenderer#getsubtitletracks-as-object).</li>
<li>Bug fix: On the 2450X and 2500X platforms, the
ifChannelStore.DoOrder() function was always returning false even if
the corresponding purchase was successful.</li>
</ul>
<h2 id="roku-os-5-3">Roku OS 5.3</h2>
<p><strong>Initial rollout date:</strong> December 17, 2013</p>
<p>Version 5.3 introduced user configurable closed caption settings. The
Roku settings UI now includes controls for turning captions on or off at
the system level. These settings control closed caption behavior for
all apps. Closed captions on instant replay are also controlled
from these settings.</p>
<h2 id="roku-os-5-2">Roku OS 5.2</h2>
<p><strong>Initial rollout date:</strong> October 8, 2013</p>
<p>Version 5.2 introduced a new security model for sideloading apps.
Accessing the web interface for the device now requires a userid and
password to log in. Please see the article here for more details:
<a href="http://blog.roku.com/developer/2013/10/08/security-enhancements-added-to-channel-development">http://blog.roku.com/developer/2013/10/08/security-enhancements-added-to-channel-development</a></p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Security enhancements to app sideloading</p>
</li>
<li><p>roListScreen.SetUpBehaviorAtTopRow()</p>
</li>
<li><p><span>Closed Captioning support added to </span>roVideoPlayer,
roCaptionRenderer added</p>
</li>
<li><p>HLS ID3 events added to BrightScript</p>
</li>
</ul>
<h2 id="roku-os-5-1">Roku OS 5.1</h2>
<p><strong>Initial rollout date:</strong> August 5, 2013</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>In-stream 608 captions support</p>
</li>
<li><p>updates to roVideoScreen events</p>
</li>
<li><p>FLAC container support (local playback)</p>
</li>
</ul>
<h2 id="roku-os-5-0">Roku OS 5.0</h2>
<p><strong>Initial rollout date:</strong> June 5, 2013</p>
<p>Version 5.0 of the Roku OS was released to all second and later
generation devices. The home screen introduces a completely new look
and feel for navigating my apps, the app store, and settings.
This release does not introduce any new screens or templates to the SDK.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Updated home screen user interface</p>
</li>
<li><p>Increase Brightscript function limit beyond 1024</p>
</li>
<li><p>Miscellaneous fixes for gaming remotes</p>
</li>
<li><p>Memory improvements to the OS</p>
</li>
<li><p>Improved ECP security</p>
</li>
</ul>
<h2 id="roku-os-4-9">Roku OS 4.9</h2>
<p><strong>Initial rollout date:</strong> November 12, 2012</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Roku billing - in-app subscription support in BrightScript</p>
</li>
<li><p>SMPTE TT CC (MP4, HLS, Smooth Streaming)</p>
</li>
<li><p>RoTextureManager 2D component</p>
</li>
</ul>
<h2 id="roku-os-4-8">Roku OS 4.8</h2>
<p><strong>Initial rollout date:</strong> July 3, 2011</p>
<p>We&#39;ve had our heads down working diligently on new firmware features and
supporting new hardware. Hello Streaming Stick! In v4.8, we have some
new developer SDK features to share with you. We are continuing our
Roku OS version numbering scheme with v3.1 currently released to all
&quot;Classic&quot; or &quot;Roku1&quot; models and major version 4.8 coming soon to all
Roku2 models.</p>
<p>We are maturing as a company, and with that comes new legal
requirements. In v4.8, we are asking our development community to agree
to the development terms directly on the box before it can sideload and
apps. As soon as your developer mode box updates to v4.8, you may
find you are unable to sideload apps. You will need to re-enable
developer mode by entering the following remote control sequence: 3x
Home, 2x Up, Right, Left, Right, Left, Right. After entering &quot;Enable
Installer&quot; on the secret screen, it will present you with the developer
terms that you must read and scroll through and then click down to &quot;I
Agree&quot;. The box will then reboot with the sideloading installer
enabled.</p>
<p>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Internationalization and Localization support. (Currently
localizing to en_US, fr_CA, es_ES, de_DE)</span></li>
<li>Smooth Streaming with PlayReady Support</li>
<li>In-app purchasing of new content, upgrades, features.</li>
<li>Native, fast [ParseJSON()](doc:global-utility-functions#parsejsonjsonstring-as-string-as-object)
function.  </li>
</ul>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>Remember to re-enable developer mode in v4.8!</p>
<h2 id="roku-os-4-1">Roku OS 4.1</h2>
<p><strong>Initial rollout date:</strong> December 21, 2011</p>
<p>With v4.1, Roku is now supporting the “Roku 2” generation of boxes.
We’ve tried to keep the Roku SDK compatible across all the different
models and have highlighted hardware and SDK differences in a new
Section 1.4 of the Developer Guide. Our Roku OS version
numbering requires a little explanation as major version 3 is currently
released to all “Classic” models and major version 4 is release to all
“Currently Selling” models. We continue to have minor releases planned
on both of these major release branches. All features from the v3.0 beta
have made it into the final v3.0 and 4.1.</p>
<p>We understand that we haven’t exposed all the functionality the Roku 2
platform has to offer to the entire Roku Developer Community. Roku has a
good track record of taking security issues seriously. There are many
such issues to work through before we can expose low level OpenGL
interfaces in a secure manner that the content owners in our community
are also comfortable with. We are working diligently toward that end.</p>
<p>We appreciate all the hard work the Roku Developer Community has put
into developing some great applications on the Roku platform. We are
happy that the Roku 2 has been well received by the market and are
looking forward to continued shared success with the Roku Developer
Community and all the great new apps you can create.</p>
<h4 id="new-in-this-release">New in this release</h4>
<p>• Roku 2 platform support.<br>• Brightscript Plugin for Eclipse<br>• Updated videoPlayer sample application<br>• All v3.0 beta features are now fully supported on classic models running v3.0 and Roku 2 models running v4.1:</p>
<ul>
<li>BrightScript v3.0 that includes:<ul>
<li>performance improvements</li>
<li>typed values in function parameters and returns</li>
<li>improved auto-boxing and type promotion</li>
<li>explicit programmer controlled garbage collection</li>
<li>better statement stepping in source level debugger</li>
<li>collections can include intrinsic values rather than only
objects</li>
<li>2D Graphics APIs:<br>• roScreen<br>• roBitmap<br>• roRegion<br>• roCompositor<br>• roSprite<br>• roAudioResource<br>• roFont<br>• roFontRegistry<br>• roFontMetrics</li>
</ul>
</li>
<li>New Platform Components<ul>
<li>roSocketAddress</li>
<li>roStreamSocket</li>
<li>roDataGramSocket</li>
</ul>
</li>
<li>New ECP “input” command to pass user defined input parameters to
your app.</li>
</ul>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>Please note that we have deprecated support for Macrovision and WMV
video. We still have support for CGMS (Copy Guard Management System)
protection for analog outputs and HDCP protection for digital output.
There has been very little use of WMV video, and if anyone has content
out there it can be converted to MP4 with several transcoding
applications, including ffmeg (please see our encoding guide for example
usage).</p>
<h2 id="roku-os-3-0">Roku OS 3.0</h2>
<p><strong>Initial rollout date:</strong> April 18, 2011</p>
<p>We’re making the 3.0 Beta firmware available to all developers who
request it. If your box isn’t already part of the developer beta group,
send a private developer forum message to RokuKevin. Include the serial
number of the Roku units you would like to run the 3.0 beta on.<br>It is very important that all developers regression test their
applications on version 3.0 and note any incompatibilities. You may need
to publish an update to your application to make it compatible with
v3.0.</p>
<p>There are some exciting new features in the v3.0 SDK that will support
developers building 2D games for the Roku box. We encourage all game
developers to support both HD and SD modes. About half of the Roku’s out
there still run in SD mode. We’ve added screen level scaling to support
developers using one set of graphics assets and a single game engine
running in both HD and SD modes. Although v3.0 has not been released to
end users yet, we are now encouraging discussion about v3.0 features on
the developer forum.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>BrightScript v3.0 that includes:<ul>
<li>performance improvements</li>
<li>typed values in function parameters and returns</li>
<li>improved auto-boxing and type promotion</li>
<li>explicit programmer controlled garbage collection </li>
<li>better statement stepping in source level debugger</li>
<li>collections can include intrinsic values rather than only
objects</li>
<li>2D Graphics APIs:<ul>
<li>roScreen</li>
<li>roBitmap</li>
<li>roRegion</li>
<li>roCompositor</li>
<li>roSprite</li>
<li>roAudioResource</li>
<li>roFont</li>
<li>roFontRegistry</li>
<li>roFontMetrics</li>
</ul>
</li>
</ul>
</li>
<li>New Platform Components<ul>
<li>roSocketAddress</li>
<li>roStreamSocket</li>
<li>roDataGramSocket</li>
</ul>
</li>
<li>New ECP “input” command to pass user defined input parameters to
your app.</li>
</ul>
<p>The new 2D Graphics components are considered part of the core
BrightScript language and are documented in the BrightScript Reference.
The new platform components are documented in the Component Reference.
New v3.0 components have their own sections and new methods on
previously existing components are called out with their own “Since
v3.0” sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>BrightScript v3.0 is stricter in some ways than BrightScript v2.0. Areas
in your app with variables that are used before initialized, or return
statements that return a different type than specified in the function
declaration may cause runtime errors in v.30 that may have run
successfully in v2.0.</p>
<p>It is very important that all developers regression test their
applications on version 3.0 and note any incompatibilities. You may need
to publish an update to your application to make it compatible with
v3.0.</p>
<h2 id="roku-os-2-9">Roku OS 2.9</h2>
<p><strong>Initial rollout date:</strong> March 31, 2011</p>
<p>With the release of firmware v2.9 build 1553, we are excited to share
our latest Developer documentation. We have added several new features that
developers can take advantage of. Many of you have already seen the new
Premium Developer Program. With a premium developer account you can
charge for applications in the Roku app store and Roku will handle
the billing for you. To sign up for a premium developer account you
simply need to provide your tax id and agree to the new terms and
conditions. Our new v2.9 SDK helps support paid applications with the
ability to launch the app store to purchase your application. You
can create a free “Lite” app that includes a banner ad that up-sells to
a premium app. When the user clicks on the ad, the “Buy” page is
launched in the app store. There is an example of this in the
roPosterScreen section of the component reference.</p>
<p>Please refer to the Component Reference Section 7 for an introduction to
the two new components in v2.9. The roAudioMetadata component gives you
access to metadata included in many audio files. It recognizes ID3 tags
and supports cover art. The roImageMetadata component gives you access
to metadata in image files.</p>
<p>Version 2.9 updates the grid component by letting the developer control
the “Up” button behavior and giving developers the ability to stack grid
screens without a lot of extraneous code.</p>
<p>Thanks for all  you’ve developed so far. We’re looking
forward to all the new ones you’re busy working on.</p>
<p>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>MKV playback on local USB devices.</li>
<li>Developer control of the Up button behavior on the top row of the
Grid Screen.</li>
<li>Stackable Grid Screens.</li>
<li>Streaming Store can be launched to purchase “Premium” app from
within “Lite” app</li>
<li>Get ID3 tags and other metadata from your audio files</li>
<li>Get EXIF and other metadata from your image files</li>
</ul>
<p>New v2.9 components have their own section in the reference and new
methods on previously existing components are called out with their own
“Since v2.9” sections.</p>
<h2 id="roku-os-2-8">Roku OS 2.8</h2>
<p><strong>Initial rollout date:</strong> November 18, 2010</p>
<p>It’s been a short time since we last updated you, but we still have a
few things worth sharing in this release of the SDK. We’ve added
developer specified HLS stream switching strategies, new commands in the
External Control API, and customizable GridScreen layouts.</p>
<p>We appreciate your support of the Roku platform and always welcome your
feedback.<br>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Developer controlled HLS stream switching strategies for improved
playback ability.</li>
<li>Multiple Grid layouts: flat-movie, flat-portrait, flat-landscape,
flat-square, and flat-16x9</li>
<li>Developer customized Grid Focused Border image, and Grid Descripton
callout box image.</li>
<li>Use .png and .gif images as Grid posters.</li>
<li>Ability to get the Roku’s IPAddress within your app. This will
enable the External Control API to be utilized directly within your
app.</li>
</ul>
<p>New v2.8 components have their own section in the reference and new
methods on previously existing components are called out with their own
“Since v2.8” sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>We have maintained backward compatibility with the v2.7 SDK. Some have
experienced video playback issues with their HLS streams. The number one
issue was incorrect aspect ratios and resolutions. We’ve addressed most
of these issues with a new v2.8 build (1158), but we have requested that
any other HLS playback regression issues from v2.7 be posted to a sticky
thread on our forum. We will attempt to address them all in a timely
manner.</p>
<h2 id="roku-os-2-7">Roku OS 2.7</h2>
<p><strong>Initial rollout date:</strong> November 7, 2010</p>
<p>This release brings several new features to the Roku SDK, as well as
support for the additional hardware capabilities of the new Roku models.
The new models add 1080p playback capability and a new 12 button remote
control. The new remote control will come with the Roku XD and Roku XDS.
The Roku HD will continue to ship a 9 button remote. However, the 12
button remote will be available for purchase separately. The 12 button
remote will also work on the older Roku models, providing the installed
base access to the new button capabilities with only a remote control
purchase. While not all users will have the 12 button remote, we are
strongly encouraging developers to add support for the three new remote
control buttons.</p>
<p>The “Instant Replay”, is implemented entirely in the Roku OS and will
work on all apps during video playback without any changes to
developer apps. The “Back” button works by default on most screens,
but needs to be enabled on dialogs if the screen close behavior is
desired. The “Info” button is intended to provide additional contextual
information at various points within apps. It is up to developers to
use the new features in the roMessageDialog and support the “Info”
button usage pattern of launching context menus and dialogs. We have
included a simpleinfo sample app in this release that illustrates the
info button usage.</p>
<p>We are also introducing 1080p video playback support on the Roku XD and
XDS models. Updated Information on supported encoding resolutions is
included in the new Encoding Guide. We encourage developers to add 1080p
streaming content at bitrates below 4.0Mbps.</p>
<p>A much anticipated addition to the SDK is the new roGridScreen component
which presents the user with a scrolling grid as an alternative to the
poster screen interface. The simplegrid sample app demonstrates how to
use this new feature.</p>
<p>Below is the complete list of new features in this release.</p>
<p>We appreciate your support of the Roku platform and welcome your
feedback.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Support for new Remote Buttons - “Back”, “Instant Replay”, and
“Info” buttons support ease of use, better trick play, and
contextual menus.</li>
<li>1080p playback support – When the user sets his display to 1080p,
any content with meta data parameters for FullHD and a FrameRate of
24 or 30 will playback at 1080p 24 fps or 1080p 30 fps.</li>
<li>Grid Component – The grid screen enables users to easily navigate
large collections of content.</li>
<li>External Control Protocol – The ability to control the Roku over the
network. It’s now possible to create sophisticated iPhone, Android,
and Blackberry apps.</li>
<li>Paragraph Screen Default Menu Item – You can now control the button
that is highlighted on the paragraph screen so that selection
dialogs work as expected.</li>
<li>Message Dialog Overlay Support – Expected to be popular when used in
conjunction with the “Info” button to display contextual
information.</li>
<li>Content Meta-Data parameters – New parameters provide more control
over video playback: min/max bandwidth, and audio stream selection.</li>
<li>New Documentation Guides – The External Control Guide illustrates
how to create remote control apps that work over the network. The
Encoding Guide gives useful guidelines for encoding video content
that is compatible with the Roku Streaming Player.</li>
<li>Simpleinfo sample application - shows how to use the roMessageDialog
with overlay on top of a roPosterScreen when the “Info” button is
pressed.</li>
<li>SimpleGrid sample application – shows how to use the roGridScreen
component to display many rows of items.</li>
<li>AudioApp sample application – adds an application screensaver.</li>
</ul>
<p>New v2.7 components have their own section in the reference and new
methods on v2.4 components are called out with their own “Since v2.7”
sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>We have maintained backward compatibility with the v2.7 SDK. However,
developers need to be aware of the new hardware models and update their
apps to take advantage of the new features. If your back end
services do any type of authentication based on model numbers, or you
have any code that is based on model numbers you will need to update
your code.  </p>
<p>If any of your BrightScript code is enabling certain features based on
model number, we have a new roDeviceInfo.HasFeature() method that will
enable you to code this logic in a more forward-looking manner.If you
don’t account for the new “Back” and “Info” buttons in your code, users
may think your app does not behave correctly.</p>
<p>On most screens, the back button will automatically send an event that
matches the isScreenClosed() predicate. However, this behavior would
break many modal dialogs that do not expect to receive an
isScreenClosed()event because they are waiting for a state change or
reacting to user input that must be answered. We chose not to break
these apps and instead did not enable the back button by default on
the roMessageDialog component. We did provide a method to enable the
back button on roMessageDialogs that can successfully
handle an isScreenClosed() event. You should survey your app for any
roMessageDialog components that should enable the back button with
EnableBackButton(true). The “Info” button will enable you to pop-up any
screen of your choosing. There are two new events added to support this
new button. Events matching isButtonInfo()return the button focus of any
on screen buttons in when the Info remote key is pressed. Events
matching isListItemInfo()return the index of the focused poster when the
Info remote key is pressed. The simpleinfo sample application shows
basic support for the “Info” button that also demonstrates an overlay
dialog on a poster screen. When isRemoteKey()events are propogated to
your script, the event.GetIndex() for the Info key is 10.</p>
<h2 id="roku-os-2-6">Roku OS 2.6</h2>
<p><strong>Initial rollout date:</strong> June 28, 2010</p>
<p>The 2.6 SDK release adds a number of new components to the Roku Platform
SDK and introduces a new user interface for developers on the Streaming
Store for managing your apps.</p>
<p>The Streaming Store Developer Site now provides support for managing
application dependencies based on minimum required Roku OS version or
hardware capabilities. For example, if your application requires the
features of a specific firmware release or a hardware feature, you can
specify this dependency and ensure your application is only published to
the correct systems. We recommend studying the App Packaging and
Publishing Guide for more information about the Streaming Store versioning
support.</p>
<p>We have added a number of new components to the SDK and expanded the
API’s for some of our existing components. Be sure to check out the
new roImageCanvas component, which allows much greater freedom for
laying out custom types of screens. We’ve also added API’s to open up
the USB port on the Roku XR for developers, support for HTTP Live
Streaming, plus many other new features.</p>
<p>We hope you enjoy these new features and we’re anxious to see the new
types of applications that you develop with these capabilities. Thanks
again for your support.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>The 2.6 SDK release adds additional events. Please be sure your event
loops ignore unknown events. If your code is exiting event loops rather
than just ignoring unknown events your application may have undefined
behavior.</p>
<p>Important Notes</p>
<ul>
<li>Please review the App Packaging and Publishing guide for more
information about the new versioning support and how it impacts your
application deployments in the Streaming Store.</li>
<li>We have changed the behavior of the Home remote control key. In
v2.6, it now immediately kills your application and returns to the
home screen. If your app was previously relying on a graceful
application exit to do cleanup and bookkeeping, you will need to
modify your application. You will want to modify your app to
periodically update playback positions, positions in poster screens,
search results, etc. This should not wait until application exit, as
that could happen to you at any time.  </li>
</ul>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>HTTP Live Streaming (HLS) – This is Roku’s implementation of Apple’s
adaptive bitrate streaming solution. This feature provides support
for both windowed, “live” and adaptive bit-rate VOD streaming
capabilities.</li>
<li>Image Canvas Screen – A clean slate for creating custom screens.
This object will allow you to place text and graphics wherever on
the screen you desire. You can see an example in the SDK clock
sample app.</li>
<li>Custom Font Support – Include your own TrueType (TTF) or Open Type
(OTF) fonts in your application for use on the Image Canvas.</li>
<li>CA-Cert Bundle – For applications that refer to many different
feeds, we’ve included a collection of CA-Certs that is the trusted
set from the Firefox browser in a common filesystem. Any application
can now easily trust this same set without increasing the size
of its package.</li>
<li>Customizable Video Player – A video player that allows you play a
video in a region on the screen and/or programmatically control
playback. When used in conjunction with Image Canvas, you can
combine video, images and text on a single screen.</li>
<li>USB support – For those of you that have Roku XR boxes or want to
develop applications that make use of USB storage. Basic support for
USB hotplug events and automounting of USB volumes is included in
v2.6. Support for a variety of USB devices and the VFAT, NTFS, HFS
and HFS Plus file systems.</li>
<li>File System access – You will be able to enumerate available file
systems and access the content stored on them.</li>
<li>SRT subtitle support – If the content you are playing has an
available SRT file for subtitles, enabling subtitle display will be
as simple as specifying a path to the SRT file.</li>
<li>ScreenSavers – Create standalone screen saver applications that can
run whenever the Roku Streaming Player is idle or create a custom
screen saver for your app.</li>
<li>Perl-Compatible Regular Expressions – String manipulation just got a
whole lot easier!</li>
<li>Application Logging Support – It’s now easier to gather statistics
in your application and send them back to your own logging server.</li>
</ul>
<p>There are lots of other changes in this release and these are just some
highlights that we wanted to specifically mention. Please check the
Component Reference for additional details. New v2.6 components have
their own section in the reference and new methods on v2.4 components
are called out with their own “Since v2.6” sections.</p>
<h2 id="roku-os-2-4">Roku OS 2.4</h2>
<p><strong>Initial rollout date:</strong> December 17, 2009</p>
<p>This release unites our Streaming Store development activities with the
SDK. There are a few implications for developers during the transition
that we’d like to highlight. Our legacy applications will not appear on
the player until it syncs to our Streaming Store. The Streaming Store is not
yet deployed in Production, so Netflix and Amazon will not appear on
your player after the upgrade. These apps will eventually reappear on
your players as the backend services are upgraded.</p>
<p>We’ve provided this firmware update early so that you have an
opportunity to develop with this release before the Streaming Store beta
is available. After you update your software build, the only features
that will be visible on the home screen will be Settings and any
developer application that you’ve installed manually. We plan to
distribute at least one more SDK release before we get to feature
complete for the
launch, so we’re still adding more features and fixes on your behalf. We
think that most of these enhancements are things that will be useful to
a wide variety of developers.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>There have been significant changes to our file system APIs. We’ve
implemented these changes so that they are backward compatible for a
limited time. Any deprecated API calls will be displayed in the debugger
with a warning message. The samples applications were updated to use the
new file specification format. Please refer to the BrightScript and
Component Reference manuals for more information. Backward compatibility
will be removed in the next release, so please update as soon as
possible.</p>
<h4 id="update-instructions">Update instructions</h4>
<p>The Roku player will automatically update to the new version within the
next 1-2 days.</p>
<p>We hope you force your player to download the new version immediately by
following these steps<br>1) Press the HOME button on the remote control.<br>2) Use the arrow keys to highlight the “settings” icon and press the
SELECT button.<br>3) Press the right arrow several times until you see “player info” and
press SELECT.<br>4) Highlight “check for update” and press SELECT.<br>5) SELECT “yes”.<br>5) Wait for the software to download, and then SELECT “ok” to
restart.<br>Note: If you already have the new version, a message will appear letting
you know your version is current.</p>
<h4 id="important-notes">Important notes</h4>
<ul>
<li>This release includes new tools for packaging your application for
deployment. Included in the SDK is the ChannelPackagingAndPublishing
document. This document provides a step-by-step guide to the
packaging process. Please be sure to review this document, since it
will answer many questions about how applications will be deployed
onto the Streaming Store.</li>
<li>The Streaming Store linking screen is included in this release and
there are a few situations you could encounter it and get stuck. If
you reset your box to factory defaults or change your network
settings, this could occur. We don’t want you to link your box
at this time, so we’ve provided the following instructions to help
you bypass this screen if necessary.</li>
</ul>
<p>Display the secret screen using the following key sequence:</p>
<p>Home 5x, FastForward 3x, Rewind 2x</p>
<p>After pressing this key sequence, the “secret screen” will appear.
Select the “cycle channel store server” option until the text “<bypass
account linking\>” is displayed and then press the “back” button to exit
the screen.</p>
<p>The software update options on this screen are controlled via the server
and are not functional for developers. Just ignore these options, since
they won’t work anyway.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Documentation: There continue to be lots of changes to the
documentation set, mostly to the Component Reference manual. The
documentation has been reformatted with section numbers to make
cross-referencing easier. New features have been added
and additional details were provided on some video playback topics.
The new file system changes are included as well as lots of API
updates. There are several new docs in the set, such as the Channel
Packaging and Publishing document mentioned above.</li>
<li>More Theme Attributes – We added quite a few more attributes
changing colors within the UI. The paragraph and registration
screens now support color attributes, as well as font color changes
to the buttons and filter banners. These still work the same way
as they have in the past and allow you to set an HTML Hex color
value to override the default color scheme.</li>
<li>Flexible Image Scaling – We’ve added new scaling options for artwork
that’s used in the Poster Screen, Slide Show or Banner Ads. The new
options allow you to specify how you’d like odd-sized artwork scaled
to file the destination area.</li>
<li>Image Styles – We’ve added additional styles to several screens for
16x9 and square aspect ratio artwork. There are more changes in the
works in this area, which will be coming soon. Many of you have
different size and aspect ratio artwork and providing more types of
frames, plus better scaling capabilities will help to take advantage
of all the existing artwork out there.</li>
<li>Display Mode API – Many developers have asked how they can find out
the current display mode for the device. Check out the roDeviceInfo
component for new APIs to access info about the users display
settings.</li>
</ul>
<p>There are lots of other changes in this release and these are just some
highlights that we wanted to specifically mention. Please check the
documentation for additional details.</p>
`}</HTMLBlock>

<br />
