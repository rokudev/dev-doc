---
title: "Displaying video ads"
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

# Displaying video ads

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit10-video-ads-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit10-video-ads.png" width="720" height="480" controls />

## About this lesson

This lesson explains how to monetize content on the Roku platform through video ads. It describes how to implement the [Roku Advertising Framework (RAF)](/docs/developer-program/advertising/roku-advertising-framework.md) in order to seamlessly insert video ads into content. It highlights the different client and server-side ad insertion and stitching solutions provided by RAF, and explains how to get started with RAF in order to display video ads in your app.  

This lesson then guides you through implementing Roku's [client-side ad stitching solution](/docs/developer-program/advertising/csas.md) to combine content with video ads into a single playlist. This solution makes it so that the videos and ads play back-to-back without any buffering. This lesson also discusses [certification criteria for displaying ads](/docs/developer-program/certification/certification.md#1-advertising) on the Roku platform, including requirements related to privacy, ad measurement, and child-directed content.

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Video ads sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/VideoAds) | Download and review the code used in this lesson to insert video ads in an app. |
| [Sideloading apps](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) | Sideload and test the Video Ads app created in this lesson. |
| [Video advertisements overview](/docs/features/monetization/video-advertisements.md) | Read an overview of video advertisements on the Roku platform. |
| [Roku partner payouts program](/developer/billing)           | Enroll in the Roku partner payouts program. Provide a payout method and tax information to monetize ad-supported content. |
| [Certification criteria for ad-supported apps](/docs/developer-program/certification/certification.md#1-advertising) | Read the certification criteria for apps displaying ads on the Roku platform. |
| [Roku Advertising Framework overview](/docs/developer-program/advertising/roku-advertising-framework.md) | Learn more about implementing Roku's client and server-side ad insertion solutions. |
| [Roku genres](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#roku-genre-tags) | Read the list of valid genres that may be passed to RAF for proper audience measurement. |
| [Client-side ad stitching integration guide](/docs/developer-program/advertising/csas.md) | Read how to combine content and ads into a single playlist and then render the playlist. This optimizes the video playback experience by eliminating buffering between content and ads. |

## Related

[Integrating the Roku Advertising Framework](/docs/developer-program/advertising/integrating-roku-advertising-framework.md)

[RAF API Reference](/docs/developer-program/advertising/raf-api.md)

[Task node](/docs/references/scenegraph/control-nodes/task.md)

[Video node](/docs/references/scenegraph/media-playback-nodes/video.md)

[Content meta data](/docs/developer-program/getting-started/architecture/content-metadata.md)

[Handing application events](/docs/developer-program/core-concepts/handling-application-events.md)

[Event loops](/docs/developer-program/core-concepts/event-loops.md)

[OnKeyEvent()](/docs/references/scenegraph/component-functions/onkeyevent.md)

[ifSGNodeChildren interface](/docs/references/brightscript/interfaces/ifsgnodechildren.md)

[Channel manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md#launch-requirement-attributes)

## How to watch

Play the embedded video above or go to [SceneGraph: Displaying video ads](https://youtu.be/YMd-SEyPCX0) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.
