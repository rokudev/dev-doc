---
title: Autoplay
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
Apps may launch video playback automatically within their apps to drive subscriptions, increase engagement, and provide a more immersive user experience. These autoplay experiences include:

* **App launch:** Play a video or sizzle reel highlighting the app's content when the app is launched by an unauthenticated or unsubscribed user.
* **Browsing:** Play content previews when customers browse VOD and live content within category rows and EPGs.
* **Content details screens:** Start playback or previews on content detail screens before the customer explicitly initiates playback (via keypress or voice command).

Apps that launch directly to a full-screen playback experience and require explicit customer interaction to initiate the app navigation experience are exempt from this requirement.

Starting with Roku OS 12.5.5, users can disable these in-app autoplay experiences by toggling **Settings > Accessibility > Auto-play** **video** to "Off" on their Roku device.

> **Certification Requirement**: If autoplay is disabled on a device, apps may not begin video playback until the user navigates to a video or explicitly starts playback. Once playback begins, apps may continue playing the video until the user navigates away from it, pauses it, turns the device off, or a screensaver starts. Apps must adhere to this requirement to pass certification (Effective October 1, 2024).
>
> Developers can use the [**roDeviceInfo.isAutoPlayEnabled()** function](doc:ifdeviceinfo#isautoplayenabled-as-boolean) to check whether auto-play video is enabled or disabled on a device. This function returns a flag indicating the current state of the auto-play setting. Developers can use this function to ensure that the auto-play device setting is respected when customers browse content in their apps.
