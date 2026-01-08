---
title: "Reverting Roku beta OS to production on devices"
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

# Reverting Roku beta OS to production on devices

Developers enrolled in the Roku beta program can revert their devices running a beta OS back to the latest production build in a self-serve manner.

## Switching from beta to production Roku OS

To switch from beta to production, use your Roku remote control to access the OS update screen (press Home x 5, FFWD x 3, RWD x 2; 🏠🏠🏠🏠🏠, ⏩⏩⏩, ⏪⏪) navigate to the **Cycle software update server** option, press the **Options** (*) button, and then select the displayed production build. The Roku OS on your device will be downgraded to the latest production version. Your device will stay on the production build until the next time it calls Roku’s servers for a system update.

![roku-beta-os-rollback roku815px](https://image.roku.com/ZHZscHItMTc2/roku-beta-os-rollback.jpg)

> Roku devices typically call for a system update only when idle; the updates seldom occur during an active session. If your device fails or reboots, it will default back to the beta build. As a result, you will need to manually revert the device back to production, if required (for example, if you are attempting to resolve a production bug).

## Switching back from production to beta Roku OS

To switch back to the latest beta build, do a system update by navigating to **Settings > System > System Update**.

## Accessing Roku OS beta builds

To get access to Roku beta OS builds, [join the Roku beta program](https://rokutestingportal.centercode.com/key/rdbp). Participating in the beta program enables developers to regression test their apps against the forthcoming OS before it ships to production, as well as get a head start in implementing new features or removing deprecated APIs in the latest Roku OS before the general release.