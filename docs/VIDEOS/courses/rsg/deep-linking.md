---
title: "Deep linking"
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

# Deep linking

## Part 1

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking-v3-part1.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking.png" width="720" height="480" controls />



## Part 2

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking-v3-part2.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit12-deep-linking.png" width="720" height="480" controls />

## About this lesson

This lesson describes how to implement deep linking in an app to get users to their content as fast as possible. When a user tells their Roku device to play a movie, or searches for a TV show, series, or other content, the app must deep link directly to the requested content instead of just launching the app's home page. For example, when a movie is selected from Roku Search, a deep link is used to launch the app and play the film immediately without any navigation. In addition, if the user has already started watching the movie, deep linking resumes it right at the playback position bookmarked by the app.

This lesson details how to program your app to accept and process deep links upon being launched and while it is already running. It lists the different playback experiences required for the various types of content in the app's feed.

It explains how to create bookmarks by storing the user's playback position in the device registry or backend system, and how to use smart bookmarks to launch the most appropriate episode in a TV series  based on the user's viewing history with the series.

This lesson concludes by demonstrating how to use the Roku Deep Linking Tester and cURL commands to test your app's deep linking implementation.

## Sample app notes

To keep the app demonstration segments in this lesson concise and make them more comprehensible, the pre-roll ads that you will see when deep linking into content in the sample app have been edited out.

As described in the [document for the Subscriptions video](/videos/courses/rsg/subscriptions.md#steps-required-to-play-content), you need to create an app and then configure the app and your developer account for testing in order to play the videos in the [Deep linking sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/DeepLinking).

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Deep linking sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/DeepLinking) | Download and review the code used in this lesson to accept and process deep links into an app. |
| [Sideloading apps](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) | Sideload and test the DeepLinking app created in this lesson. |
| [Deep linking implementation guide](/docs/developer-program/discovery/implementing-deep-linking.md) | Read how to implement deep linking in an app. This document highlights how deep linking works, details the required app behavior based on the media type included in the deep link, and provides code samples demonstrating how to handle deep links upon launching the app and while it is already running. It explains how to use the Deep Linking Tester and cURL commands to verify that an app is programmed correctly to handle deep links. |
| [Certification criteria for deep linking](/docs/developer-program/certification/certification.md#5-deep-linking) | Read the certification criteria for handling deep links in an app. |
| [Roku Deep Linking Tester](http://devtools.web.roku.com/DeepLinkingTester) | Use the Deep Linking Tester tool to verify that your app is handling deep links correctly. This tool provides a UI for configuring, saving, import/exporting, and executing deep linking test cases. |
| [Bookmarking implementation guide](/docs/developer-program/media-playback/bookmarking.md) | Read how to record and retrieve the user's playback position for the content in your app. Learn how bookmarking enables users to continue watching content precisely where they stopped. |

## Related

[roInput](/docs/references/brightscript/components/roinput.md)

[Device registry](/docs/references/brightscript/components/roregistry.md)

[Registry section](/docs/references/brightscript/components/roregistrysection.md)

[External Control Protocol (ECP)](/docs/developer-program/debugging/external-control-api.md)

[Measuring app performance](/docs/developer-program/performance-guide/measuring-channel-performance.md)

[Handing application events](/docs/developer-program/core-concepts/handling-application-events.md)

[Event loops](/docs/developer-program/core-concepts/event-loops.md)

[OnKeyEvent()](/docs/references/scenegraph/component-functions/onkeyevent.md)

[ifSGNodeChildren interface](/docs/references/brightscript/interfaces/ifsgnodechildren.md)

## How to watch

Play the embedded video above or go to [SceneGraph: Deep linking](https://youtu.be/2pqdzg0Rziw) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.