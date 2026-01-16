---
title: "Creating the content feed"
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

# Creating the content feed

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit4-contentFeed-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit4-content-feed.png" width="720" height="480" controls />


## About this lesson

This lesson explains how the content feed is used to load and organize content in the app UI. It describes how the SceneGraph [Content node](/docs/references/scenegraph/control-nodes/contentnode.md) maps metadata in your content feed to components in your app UI, and it provides a few tips for creating and hosting your own feed.

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Sample content feed](https://go.roku.com/Bul0OWXct)         | Examine the content feed used by the sample app for this course. This content feed includes three content types: shortFormVideos, series, and movies.  <br />${sample-content-feed}<br />Each video in the feed includes a unique ID, name, description, thumbnail image, and URL used to populate the app UI. In addition, each video includes a genre field that is used to categorize the videos into rows of related content. |
| [Feed specification](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md) | You can use the Roku Direct Publisher feed spec as the guideline for your content feed, and then configure it as needed. The sample content feed, which is used by the sample app in this course, is based on this spec. SceneGraph apps built with the Roku SDK, however, are not required to follow a certain feed specification. |
| [Roku third-party developers](/docs/developer-program/third-party-devs.md) | Publishers needing help developing their app or creating their content feed can contact one of Roku's third-party developers listed in this document. Each  studio in the list has successfully developer and launched Roku apps. |
| [Content Delivery Networks (CDNs) and Online Video Platforms (OVPs)](/docs/features/how-channels-work.md#content-hosting) | If you need help hosting your content feed, you can contact one of the CDNs or OVPs listed in this document. Each platform has been used by publishers to host content for their Roku apps. |

{#sample-content-feed}

- The **shortFormVideos** object in the feed contains the shorter Roku developer videos.
- The **series** object contains an **RSG** series all the videos in this SceneGraph Developer's course, and it includes a Roku Tips and Tricks series, with videos highlighting Roku products and features.
- The **movies** object contains the longer Roku developer videos.

## Related

[Content node](/docs/references/scenegraph/control-nodes/contentnode.md)  

[Content meta data](/docs/developer-program/getting-started/architecture/content-metadata.md)

## How to watch

Play the embedded video above or go to [SceneGraph: Creating the content feed](https://youtu.be/M0YD4lCzHyg) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.
