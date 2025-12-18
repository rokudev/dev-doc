---
title: Designing For Device Capabilities
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

# Designing for devices

Every public app on the Roku platform is certified on all
currently-supported Roku models before being published. The list of
supported devices includes a wide range of product classes, from our
entry-level set-top-boxes to 4K HDR TVs, and everything in between. This variance signifies that some devices are more powerful than the others.
The complete list of supported Roku devices and their product specs can
be found in the [Hardware specifications](/docs/specs/hardware.md) page.

It's very important that developers remain mindful of these different
product capabilities while building their apps. It is a best practice
to build dynamic apps that are conditional to the product specs of
the model being used. Take full advantage of the extra "horsepower" of a
Roku Premiere, but be sure to gracefully degrade the lower experience on
older Roku devices that have been in the market for a few years.

For example, your image management can be handled server-side and serve
down the highest-resolution artwork that the device in use can handle.
Be strategic about how much data fetching is required on each screen of
your app — if a user is on an older Roku device, consider rendering
fewer content items on each browsing panel, but display more content on
the same page on a higher-end product.

Other optimization techniques include:

  - Limiting animations
  - Limiting the number of overdraws
  - Lower video resolution or kill video playback altogether when the
    user enters a browsing page

Device model numbers can be found in the [Hardware Specifications](/docs/specs/hardware.md) page.

The best practices are outlined in further detail in the [SceneGraph Performance Guide](/docs/developer-program/performance-guide/development-tips.md).

The "[Best Practices for Roku Cross-Platform UX](https://devtools.web.roku.com/files/Roku%20Best%20Practices%20for%20Cross-Platform%20UX.pptx)" presentation
summarizes this concept of designing for high-end devices and gracefully
degrading for lower-end devices. [Download]https://devtools.web.roku.com/files/Roku%20Best%20Practices%20for%20Cross-Platform%20UX.pptx) and
leverage this guide for your app.
