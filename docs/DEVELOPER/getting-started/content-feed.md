---
title: Creating a content feed
excerpt: 'Build a cloud-hosted content feed to connect your catalog to your Roku app'
deprecated: false
hidden: false
metadata:
  title: 'Creating a content feed | Roku Developer Docs'
  description: 'Learn how to create and host a content feed for your Roku app, including metadata fields like title, description, artwork, and URL for each catalog item.'
  robots: index
next:
  description: ''
---
Every Roku app has a content feed. The content feed is a cloud-hosted file that typically contains hundreds to thousands of titles in a publisher's catalog and detailed metadata about each title such as its unique ID, name, description, artwork, and URL.

The content metadata in the feed is used to transfer the video and audio content from your catalog to your Roku app. It tells your app where to find the movie, television show, or song to be played, and the title, description, artwork, and other information to be used when displaying it.

The following example demonstrates the types of metadata included in the feed for a single content item:

```json
{
    "id": "dev-summit-21-keynote-welcome-address",
    "title": "Keynote - Welcome address",
    "shortDescription": "The Roku content team recaps the past year in streaming and highlights key industry trends for the upcoming year.",
    "longDescription": "The Roku content team recaps the past year in streaming and highlights key industry trends for the upcoming year.",
    "thumbnail": "https://my-roku-image.com/dev-summit-21-welcome.png",
    "releaseDate": "2021-10-26",
    "genres": [
        "educational"
    ],
    "tags": [
        "dev-summit-21"
    ],
    "content": {
        "duration": 699,
        "videos": [{
            "videoType": "MP4",
            "url": "https://my-roku-video.com/2-keynote-address.mp4",
            "quality": "HD"
        }],
        "language": "en-us",
        "rating": {
            "rating": "G",
            "ratingSource": "USA_PR"
        },
        "dateAdded": "2021-10-26T00:00:00Z"
    }
}
```

## Configuring the content feed

To create the content feed, you first want to determine which metadata you want to surface to users. Consider which metadata items are the most important for users to find and select content in your app. You should also review the [Content Metadata documentation](doc:content-metadata) for the descriptive, playback, and DRM fields you might want to include. Use your analysis to create a template with the selected metadata fields.

## Hosting the content feed

When you are done creating the feed, you need to host it on your website, a content delivery network (CDN), online video platform (OVP), or other hosting solution. You can also contact one of Roku's preferred feed creation partners below to create and host your feed.

### Content Delivery Networks (CDNs)

Content is typically hosted on a CDN, which is a group of servers located around the world. Using a CDN ensures that your content can be streamlined to many users at different locations at the same time without any bottlenecks. Apps can use any CDN that is able to stream content. The following list includes some of the CDNs that publishers have used to host content for their Roku apps:

* AdvergentCDN
* Akamai
* Amazon Web Services (AWS)
* BitGravity
* Boxcast
* Brightcove
* Comcast Technology Solutions
* EdgeCast
* Level 3
* Limelight Networks
* Scale Engine

### Online Video Platforms (OVPs)

Content may also be hosted in an OVP, which partner with CDNs to provide hosting, but also provide specialized, easy-to-use tools for managing video content. The following list includes some of the OVPs that publishers have used to host content for their Roku apps:

* Brightcove
* Kaltura
* Ooyala
* Vimeo Pro
* Wistia
* Zype

## Using the content feed to link your catalog to your app

You can use the content metadata in your feed to programmatically populate your app UI with the titles in your catalog. To do this, you create a [ContentNode](doc:contentnode), set its attributes to the metadata in your feed, and then add the ContentNode to the SceneGraph UI components in your app. For example, to populate a grid on your app's home page with your movie catalog, you would do the following:

* create a single root [ContentNode](doc:contentnode).
* iterate through the content feed to add the row title and then thumbnail image, title, description, and other descriptive attributes for each movie in the row to a series of child content nodes.
* Add the root content node to the grid.
