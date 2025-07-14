---
title: Roku OS 14.5 available to developers for beta testing
fullscreen: false
hidden: false
metadata:
  title: ''
  description: ''
---
<Image align="center" src="https://files.readme.io/93e71e1c9d87d30b82d945efbebf42849181fc1e521e1e179afcc27d42e12cc5-Roku-OS-Lifestyle-14-5-beta.png" />

<br />

Roku OS 14.5, which is being shared with developer beta partners under non-disclosure agreements (NDAs), includes major updates to the forthcoming Roku Resource Monitor and BrightScript Profiler releases. Here is the list of key developer-facing Roku OS 14.5 updates:

## Roku Resource Monitor 4.0

Roku Resource Monitor 4.0 (RRM 4.0) introduces several UI enhancements, including the ability to disable specific metric panels for your channel. This feature stops monitoring and hides the selected metric, allowing for a more streamlined and customized monitoring experience.  Additionally, RRM 4.0 automatically saves your view configuration, ensuring your preferred layout is retained the next time you launch the tool.

RRM 4.0 also consolidates the BrightScript Objects panels into one graph and adds an option for displaying the memory used by different object types, breaks out the SceneGraph metrics into the different node types (similar to the BrightScript Objects panel), and lets you drill down into the source code associated with a rendezvous event.

## BrightScript Profiler

The BrightScript Profiler features improved performance and stability. The tool uses less CPU and memory resources; therefore, it stays performant as you use it for longer sessions or switch tabs during a session.

## Media playback and content metadata

The **drmParams** parameter now includes a **ignoreInitDataPssh** control attribute that ignores the PSSH in the initialization segment. This enables support for Harmonic/DTV-GO DASH-IOP v5.0.0 streams with In-Band Key-Rotation Signaling without breaking legacy streams/apps that do not provide the `<ContentProtection>` element with PSSH info in the DASH manifest.

## Roku SceneGraph (RSG) 1.1 apps sunset

Support for apps using SceneGraph 1.1 (RSG 1.1) has ended on Roku OS 14.5. Apps claiming "rsg\_version=1.1" in the manifest file will execute as if rsg\_version=1.2 was specified and therefore may stop functioning properly on Roku OS 14.5. Developers must migrate their RSG 1.1 apps to RSG 1.2 to ensure they run on Roku OS 14.5.

In the Roku OS 9.0 release, the **eval()** function was deprecated and developers were instructed to use RSG 1.2 by setting the **rsg\_version** flag in their manifest file to “rsg\_version=1.2” in order to optimize load time performance and memory usage. In the Roku OS 9.3 release, the **eval()** function was sunset and it was noted that developers had to either remove all usage of the **eval()** function or update the **rsg\_version** flag to “rsgversion=1.1”. With the release of Roku OS 14.5, the "rsg\_version=1.1" manifest value is no longer an option and will be ignored.

***

To learn about all the new developer features included in Roku OS 14.5, click [here](https://developer.roku.com/docs/developer-program/release-notes/roku-os-release-notes.md#roku-os-145-beta). To get started testing Roku OS 14.5, [join the Roku beta program](https://www.roku.com/betatesting). Participating in the beta program enables developers to implement new features in the latest Roku OS before the general release and remove any deprecated APIs.
