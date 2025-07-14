---
title: How apps work
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
The Roku platform has thousands of apps, streaming billions of hours of content to our audience per year. As the industry leader in streaming devices and app offerings, it’s helpful to understand how a Roku app is developed and distributed to users around the world.

### New app requirements

The three main requirements for creating a Roku app are:

* Original and/or licensed video content.
* A place to [host your content](#content-hosting) on the web (for example, an OVP, CDN, and so on).
* A [feed](#playing-hosted-videos-in-a-roku-channel), which brings your content onto the Roku platform.

### Content hosting

Before creating an app, an important step is to decide how and where to host your videos or other content. Here are some common solutions:

OVP (Online Video Platforms):

* Zype
* Wistia
* Vimeo Pro
* Ooyala
* Brightcove
* Kaltura

CDN (Content Delivery Networks):

* Akamai
* Scale Engine
* Limelight Networks
* EdgeCast
* BitGravity
* Comcast Technology Solutions
* Amazon Web Services (AWS)

![roku815px - videoplayback](https://image.roku.com/ZHZscHItMTc2/videoplayback.png "videoplayback")

### Playing hosted videos in a Roku app

Once you have your content uploaded to a hosting solution, the next step is to create and export a "feed" to describe your content to the Roku platform so it can handle each content item correctly. The feed is typically in an RSS, XML, or JSON file that contains detailed information about each content item (file format, bitrate, etc.), and the content itself (title, artwork, etc.). This constitutes your app's catalog.

The video playback flow in a Roku app is:

* Video is uploaded to a content hosting solution, which provides customers with a basic "feed" of all the hosted content
* The content feed (RSS, XML, or JSON file) is added to the app, containing the metadata for the hosted media (video, audio, etc.):
  * Title
  * Descriptions
  * Keywords/Categories
  * Artwork
  * URLs to indicate where the media will be downloaded from
* A Roku app plays the content. The app's implementation can be created using the scripting language, BrightScript, and its UI framework, SceneGraph

After you've successfully set up your hosting server(s), you'll need to consider which of Roku's [two app development models](/docs/features/channel-development-models.md) you'll want to use. This will determine a tremendous amount about your app, including the schema used for your content feed. To learn more, [read on](/docs/features/channel-development-models.md)!
