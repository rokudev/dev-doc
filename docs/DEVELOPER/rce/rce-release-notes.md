---
title: Roku Cloud Emulator Release Notes
excerpt: 'Known issues for the Roku Cloud Emulator, including critical, major, and minor severity items'
deprecated: false
hidden: false
metadata:
  title: 'Roku Cloud Emulator Release Notes'
  description: 'Current known issues for the Roku Cloud Emulator (RCE), grouped by severity, including snapshot creation, log uploads, DevMode reboot, and third-party app playback.'
  robots: index
next:
  description: ''
---

# Roku Cloud Emulator — Release Notes

**Date:** September 22, 2026

**Known Issues**  

Critical

- Initial Snapshot creation can fail for some devices and may be unexpectedly overwritten.
- Log files may fail to upload or may be unavailable for download after long-running sessions.

Major

- In FW 16.0, DevMode reboot intermittently fails. Manual reboot may be requried to enter a device into DevMode.
- The device viewer may intermittently show a blank screen when opened or after being idle.  Workaround is to use the Wake Device button
- Some third-party channels may block sign-in or playback because the emulator's network connection is not recognized or permitted. Please review [Roku Cloud Emulator User’s Guide](https://developer.roku.com/dev/docs/rce) for allowed IP-list
- An edited device may temporarily disappear from the Devices list.
- Editing a device label may move it to a different position in the list.
- The on-screen remote may stop responding after extended use.
- Loss of network connectivity is not clearly surfaced in the interface.
- Duplicate snapshot names are permitted.
- Some third-party channels may have playback issues such as synchronization drift, visible controls, image artifacts, or unexpected exit from full screen.
- Some third-party channels may fail to launch, play content, respond to navigation, or display captions continuously.

Minor

- Long email addresses may overflow the sign-in verification card.
- On newly activated devices, the home screen may briefly appear before the splash screen.
- Highlighting can jump unexpectedly on some settings screens, and some controls are misaligned.
- Channels that require companion hardware on the same local network are not supported.

©2026 Roku, Inc. All rights reserved. Roku, the Roku logo, and the purple d-pad design are trademarks or registered trademarks of Roku, Inc. in the United States and other countries. All other trademarks are the property of their respective owners. This document contains confidential and proprietary information of Roku, Inc. Reproduction in whole or in part without written permission is prohibited. (edited) 