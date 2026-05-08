---
title: Creating the content feed
excerpt: 'Learn how the content feed loads and organizes content in the app UI'
deprecated: false
hidden: false
metadata:
  title: 'Creating the content feed | Roku Developer Docs'
  description: 'Video lesson explaining how the content feed is used to load and organize content in the app UI, including tips for creating and hosting your own feed.'
  robots: index
next:
  description: ''
---
<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit4-contentFeed-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit4-content-feed.png" width="720" height="480" controls />

## About this lesson

This lesson explains how the content feed is used to load and organize content in the app UI. It describes how the SceneGraph [Content node](doc:contentnode) maps metadata in your content feed to components in your app UI, and it provides a few tips for creating and hosting your own feed.

## Resources

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><a href="/dev/docs/search-feed">Sample content feed</a></td>
      <td>Examine the content feed used by the sample app for this course. This content feed includes three content types: shortFormVideos, series, and movies.  <br /><ul><li>The <strong>shortFormVideos</strong> object in the feed contains the shorter Roku developer videos.</li><li>The <strong>series</strong> object contains an <strong>RSG</strong> series all the videos in this SceneGraph Developer's course, and it includes a Roku Tips and Tricks series, with videos highlighting Roku products and features.</li><li>The <strong>movies</strong> object contains the longer Roku developer videos.</li></ul><br />Each video in the feed includes a unique ID, name, description, thumbnail image, and URL used to populate the app UI. In addition, each video includes a genre field that is used to categorize the videos into rows of related content.</td>
    </tr>

    <tr>
      <td>[Feed specification](doc:search-feed)</td>
      <td>You can use the Roku Direct Publisher feed spec as the guideline for your content feed, and then configure it as needed. The sample content feed, which is used by the sample app in this course, is based on this spec. SceneGraph apps built with the Roku SDK, however, are not required to follow a certain feed specification.</td>
    </tr>

    <tr>
      <td>[Roku third-party developers](doc:third-party-devs)</td>
      <td>Publishers needing help developing their app or creating their content feed can contact one of Roku's third-party developers listed in this document. Each  studio in the list has successfully developer and launched Roku apps.</td>
    </tr>

    <tr>
      <td>[Content Delivery Networks (CDNs) and Online Video Platforms (OVPs)](doc:how-channels-work#content-hosting)</td>
      <td>If you need help hosting your content feed, you can contact one of the CDNs or OVPs listed in this document. Each platform has been used by publishers to host content for their Roku apps.</td>
    </tr>
  </tbody>
</table>

## Related

[Content node](doc:contentnode)

[Content meta data](doc:content-metadata)

## How to watch

Play the embedded video above or go to [SceneGraph: Creating the content feed](https://youtu.be/M0YD4lCzHyg) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.
