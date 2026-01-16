---
title: "The Roku Channel live linear ingest specifications (OVP)"
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

# The Roku Channel live linear ingest specifications (OVP)

*Version 3.2*

## Overview

This specification describes the ingest specifications and EPG requirements required for your channel's content catalog to be included in [The Roku Channel](https://www.roku.com/whats-on/the-roku-channel). A catalog is the set of movies, series, TV specials, short-form videos or linear stream your channel provides, along with the artwork that represents it in the UI. A catalog feed (JSON) or Gracenote channel ID (aka ProgSrvID) includes the metadata that describes each asset so Roku can index it, categorize it, and present it to users. **Note: Gracenote channel id support is currently limited to linear channels with live sports only.**

The Roku Channel feed format follows the JSON-Schema Draft 4. All the properties in the schema are case sensitive. Before submitting a feed, make sure it is a valid JSON file. You can do that by using an IDE or free online tools, such as [JSON Schema Validator](https://www.jsonschemavalidator.net/) or [JSON Schema Lint](https://jsonschemalint.com/#!/version/draft-07/markup/json).

For guidelines about presenting your channel's EPG, see [EPG on The Roku Channel](/trc-docs/live-linear/epg-on-trc.md).

### A note about deduplication of metadata

Roku augments metadata and artwork that appears in The Roku Channel on Roku devices, web browsers, mobile applications, and other off-platform players with data supplied from Gracenote’s database where available. The Gracenote data aids in a unified experience of a title across platforms as well as on the greater Roku ecosystem. Roku will attempt to match all content delivered by our Partners to a corresponding record in Gracenote’s database. *At this time all metadata and artwork that appears on The Roku Channel is sourced from Gracenote if that content is found in Gracenote’s database.*

Our systems use a combination of methods to match a title its correct Gracenote record. Partners can aid in the matching to a Gracenote record by providing accurate metadata including:

- Exact title of a series, movie, TV special, or short form video

- Release dates that are accurate to the year the title was originally released on any platform

- Accurate season and episode numbers according to the original release order

- Accurate TMS (Gracenote) IDs or IMDB IDs by content type

  - Content classified as an episode with Gracenote must be delivered as an Episode to Roku

  - Content classified as a movie with Gracenote must be delivered as a movie to Roku

  - Content classified as a TV Special with Gracenote can be delivered as a movie to Roku

## Inclusion in The Roku Channel

In order for your content to be surfaced in The Roku Channel, you must adhere to this specification. If you already have a channel powered by Direct Publisher and you want its content to appear in The Roku Channel, you must ensure your feed meets the requirements described in this specification. Likewise, if you've built a channel using our developer program, then you must provide Roku with a separate feed adhering to this specification. The new feed must contain only assets that are available for display in The Roku Channel.

** Note that participation in The Roku Channel is currently limited to select partners. Configuring your feed to meet this specification is a prerequisite to be reviewed for inclusion. To submit a feed for approval into The Roku Channel, contact your Roku representative.*

All Linear Partners must utilize one of the **Linear** **Certified Partners** for their stream and EPG distribution: **Amagi, Wurl, Frequency, OTTera,** **Xumo, Akta, or Zype**. Exceptions will only be considered if the partner can agree to abiding by all rules and requirements as outlined in the linear certification agreement which can be provided if such an exemption is necessary.

### Error Reporting

Stream and EPG issue reports go directly to the LCPs. Stream issues and high priority EPG issues are reported as needed. Comprehensive EPG issue reports go out weekly to all LCPs. 

## Roku OVP

Roku now requires all live linear channels on TRC to run through their Online Video Platform (OVP). Below are the ingest specifications and input data template that needs to be filled out and provided to Roku Live Operations for all new live linear channels.

### Collection of Linear Channel Input Data

Please fill out the Excel template located here:

https://roku.box.com/v/roku-linear-channel-input-data

### **Supported Video and Audio Tech Specs**

The following outlines what we support. A preferred video set up is outlined in the referenced column.

| **Description**                     | **Specification**                                            | **Preferred**                 |
| ----------------------------------- | ------------------------------------------------------------ | ----------------------------- |
| Delivery Method                     | ${deliverymethod}<br />**Support AES Decryption*             | AWS Media Connect Entitlement |
| Container                           | TS over IP                                                   | TS over IP                    |
| Video Codec                         | ${videocodec}                                                | H.264                         |
| Audio Codec                         | ${audiocodec}                                                | AAC                           |
| Video Resolution                    | ${videores}                                                  | HD - 1920 x 1080              |
| Video Frame Rate                    | ${videoframe}                                                | any                           |
| Audio Bitrate                       | ${audiobitrate}                                              | within range                  |
| Overall Bitrate                     | ${overallbitrate}                                            | Above 12 Mbps                 |
| Bitrate Mode                        | CBR                                                          | CBR                           |
| Video Interlacing                   | Progressive Scan                                             | Progressive Scan              |
| Audio Sampling Rate                 | 48 kHz                                                       | 48 kHz                        |
| Audio Channels                      | Stereo                                                       | Stereo                        |
| Closed Captions                     | CEA 608/708 (embedded)                                       | CEA 608/708 (embedded)        |
| Aspect Ratio                        | ${aspectratio}                                               | HD - 16:9                     |
| Ad Insertion Points (if applicable) | SCTE-35 Markers In Stream via any of the following:<br />${adinsertion} | Splice_Insertion              |
| Special ad support                  | Squeezebacks* (coming soon) <br />***Requires Roku approval** |                               |
| Ad policy                           | ${adpolicy}<br />*** Do not include pixels, third-party tags, or Software Development Kits of any kind without express prior written approval and certification by Roku.* |                               |
| Ad queue points quality             | ${adqueuepoints}                                             |                               |

{#deliverymethod}

- AWS Media Connect Entitlement*
- Zixi Push*
- SRT*
  - Push IP and Port number will be provided to LCP/partner
- RTP w/FEC Push
- RTMP Push
  - Push URL will be provided to LCP/partner

{#videocodec}

- MPEG-2
- H.264
- H.265

{#audiocodec}

- AAC
- MPEG Audio
- Dolby Digital (AC3 2.0 + 5.1)
- PCM

{#videores}

- HD - 1920 x 1080
- SD 720 x 480

{#videoframe}

- 23.97
- 24
- 25
- 29.97
- 30 
- 59.94
- 60

{#audiobitrate}

- 128 Kbps (min)
- 320 Kbps (max)

{#overallbitrate}

- HD - 12 Mbps (min)
- SD - 6 Mbps (min)

{#aspectratio}

- HD - 16:9
- SD - 4:3

{#adinsertion}

- **Splice_Insertion**
  - Start and Duration is required
  - If scte35:SpliceInsert, outOfNetworkIndicator must be set to **true**
- **Time Signal**
  - Start and Duration is required
  - If scte35:TimeSignal, then accompany by scte35:SegmentationDescriptor scte35:SegmentationUpid with segmentationTypeId set to **one** of the following cue-out numbers:
    - 0x22 (start break)
    - 0x30 (provider advertisement start)
    - 0x32 (distributor advertisement start)
    - 0x34 (provider placement opportunity start)
    - 0x36 (distributor placement opportunity start)

{#adpolicy}

- Partners should not serve any ads in the channel other than the ones returned by the Roku SSAI, unless explicitly agreed in the contract.

- Partners should adhere to the below ad length requirements:
  - General Audience
    - 8 minutes of ads per hour
    - Minimum 4 ads and maximum of 6 ads per pod
    - Ad pod length of 2 minutes
    - Duration between ad breaks of at least 10 minutes
  - Kids
    - 6 minutes of ads per hour
    - Minimum 3 ads and maximum of 6 ads per pods
    - Ad pod length of 90 seconds
    - Duration between ad breaks of at least 10 minutes
    - Bumper/lead-in identifying ad break before AND after ad pods occur (6 second maximum)
      - Example: "We'll be right back after this break", "Now back to the show"
  - Flexibility around the ad policy is provided during live events. Please discuss this with your Roku rep.
  
  {#adqueuepoints}
  
  - Avoid placing ad breaks that interrupt dialogue
  - Avoid ad breaks that interrupt a major action/dramatic scene
  - Ad breaks should be placed with frame accuracy in logical ad break points (ex. fades to black, scene transitions, etc)

## Live Events

The following additional details are required for Roku discrete live events (DLEs) and insertion into Roku owned and operated linear channels.

- All live events must have both a primary and backup source
  - **SRT or Zixi Push preferred;** HLS and RTMP are not supported
- Live events intended for Roku O&Os must include program start/stop SCTE messages
  - **Splice Insert messages are preferred**; Time Signal message type must include a splice command 

### Metadata

- Ensure all event metadata is delivered to your Roku rep for the event as early as possible
  - **A Gracenote TMS ID for the event is preferred**
  - Metadata fields can be found here based on event type: https://developer.roku.com/en-gb/trc-docs/live-linear/epg-on-trc.md#metadata-by-content-type

### Recurring events

- Roku has the ability to access third party APIs for recurring events. **Ask your Roku rep for details.**

![roku400px - livespecs-1](https://image.roku.com/ZHZscHItMTc2/live-events-graph-1.png)

# Direct Publisher Feed Schema

These are the properties for the root object of your EPG feed. It contains basic information such as your company's name, when the feed was last updated, and other objects that will describe all your content in detail. The URL for your feed should have the form "https://*[yourfeeddomain.com](http://yourfeeddomain.com/)*".

The format of the feed is a comma-separated list with each property enclosed in double quotes. You must assign each asset (object) its own reference ID, which is a string. **Note**: The ID for an asset must not exceed 50 characters.

***Note:*** Partners should not make programming updates to content scheduled to air within **48 hours** of live broadcast.  

| **Field/Root Property** | **Content Type**                                      | **Required** | **Description**                                              |
| ----------------------- | ----------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| providerName            | string                                                | Required     | The name of the feed provider. For instance, “Acme Productions” as shown in the template below. |
| lastUpdated             | string                                                | Required     | The date that the feed was last modified in the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm)format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. For instance, "2015-11-11T22:21:37+00:00" as shown in the template below. |
| language                | string                                                | Required     | The language the channel uses for all its information and descriptions in an ISO 639 alpha-2 or alpha-3 language code string. For instance, “en-US” as shown in the template below. |
| liveFeeds               | [LiveFeed Object](#livefeed-content-type)             | Required     | A list of one or more live linear schedules.<br />***Generally, only one liveFeed schedule per channel delivery should be present in the JSON. For bulk channel deliveries, please consult your Roku rep.*** |
| movies                  | [Movie Object](#movie-content-type)                   | Required*    | A list of one or more movies.                                |
| series                  | [Series Object](#series-content-type)                 | Required*    | A list of one or more series. Series are episodic in nature and would include TV shows and daily or weekly ongoing shows. |
| shortFormVideos         | [ShortFormVideo Object](#shortformvideo-content-type) | Required*    | A list of one or more short-form videos. Short-form videos are usually less than 20 minutes long and are not TV shows or movies. |
| tvSpecials              | [TV Special Object](#tvspecial-content-type)          | Required*    | A list of one or more TV specials. TV specials are one-time TV programs that are not part of a series. |

> **At least one of these content types is required*

The Roku Channel Feed Root Object Template:

```
{ "providerName": "Acme Productions", "lastUpdated": "2015-11-11T22:21:37+00:00", "language": "en-US", "categories": [ ... ], "playlists": [ ... ], "movies": [ ... ], "series": [ ... ], "shortFormVideos": [ ... ], "tvSpecials": [ ... ],"liveFeeds": [ ... ]
 }
```

## Artwork for all content

Each image must be delivered in the JPEG format (.jpg or .jpeg file extension). 

**Make sure your CDN is using the following ContentType headers**

- image/jpeg
- image/jpg

| **Image Type** | **Description**            | **Resolution** | **Aspect Ratio** | **Required/Optional**                 |
| -------------- | -------------------------- | -------------- | ---------------- | ------------------------------------- |
| key art        | Image with title treatment | 1920x1080      | 16:9             | Movie: Required<br />Series: Required |

### Artwork content guidelines

- Key art (graphic with the full title of the asset visible)

- No sexually explicit or graphically violent artwork
- Artwork should be post-theatrical and not include language such as “In Theaters Now” or “Coming Soon”
- Artwork designed specifically for digital delivery is preferred
- Artwork for international territories should be localized for each territory

**For content on TRC, Roku will not accept branded artwork without prior approval for any individual video asset nor for season/series entities.

Object Example:

```
thumbnail: "http://thumbnail.jpg"
```

## Linear Channel Branding and Policies

- Partners are permitted to have Logos, bugs and lower thirds in their channels

#### Content Expectations

- *Content Hours*: minimum of **150 hours of content**
- *Content per Hour:* minimum of **50 minutes per hour** of content
- *Daily Refresh:* **2 hours** minimum of refreshed content daily 
- Content Recommendation
  - *Content Loop:* minimum of **8 hours of content before loop**

#### Content Policy

- Content rated R and TV-MA is allowed only **between 9pm-5am Eastern Time**
- Public policy and political issues must be presented with accuracy, honesty and fairness
- Foreign Language Programming
  - *On English-language channels, subtitles **must** be included.*
  - *No foreign-language (subtitled) programming allowed on Kids & Family channels.*
- **Every program must have a rating**. If a program has an MPAA rating, the partner must use the MPAA rating for the program. If the program does not have an MPAA rating, the partner must use a TV Ratings (USA_PR) rating. See [Advisory Ratings object](#advisoryratings-property)

#### Slate Requirements

- Must be animated & have audio
- Must include the linear channel logo/branding
- Must include a countdown timer for the duration of the ad break
  - *Note: Countdown timer does not satisfy the animation requirement* 

- Must include messaging to indicate a break is in progress and programming will resume shortly
- No CTA
- Cannot promote a channel outside of TRC

#### LiveFeed Promotion Guidelines

- Partners are not allowed to promote Partner content without explicit permission from TRC.
- Calls to action (CTAs) or links to external platforms or sites (including QR codes) are not permissible and must be removed from the video prior to delivery to Roku.

## Content types

### LiveFeed Content Type

Child object of root property liveFeeds. 

This object represents a live linear stream. Please contact your Roku representative if you want to create a channel that streams live linear content.

| Field               | Type                                                 | Required  | Description                                                  |
| :------------------ | :--------------------------------------------------- | :-------- | :----------------------------------------------------------- |
| id                  | string                                               | Required  | Your immutable string reference ID for the live linear stream. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. **Note**: The ID for an asset must not exceed 50 characters. |
| title               | string                                               | Required  | The live stream's title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. |
| content             | [Content Object](#content-properties)                | Required  | Additional details about the livefeed, including the **program schedule**. |
| thumbnail           | string                                               | Required  | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${contentthumbnaillist} |
| shortDescription    | string                                               | Required  | A live stream description that does not exceed 200 characters. The text will be clipped if longer. No emojis. |
| longDescription     | string                                               | Required  | A longer live stream description that does not exceed 500 characters. The text will be clipped if longer. Must be different from shortDescription. No emojis. |
| validityPeriodStart | string                                               | Optional  | The date when the content should become available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2018-11-11T22:21:37+00:00 |
| validityPeriodEnd   | string                                               | Optional  | The date when the content is no longer available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2018-11-11T22:21:37+00:00 (set to a perpetuity date if possible) |
| advisoryRatings     | [Advisory Ratings object](#advisoryratings-property) | Required* | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements |
| genres              | string                                               | Required  | Array of genre strings for the channel. Must be one or more of the values listed in [genres](#genres-property). |
| tags                | string                                               | Optional  | One or more optional tags. Each tag is a string and is limited to 20 characters.*See [Kids-Directed content](#kids-directed-content) for tag requirements |

{#contentthumbnaillist}

- image/jpeg
- image/jpg

Live Feed Object Example:

{ "id": "1509428502953", "title": "Sample Stream", "content": { ... }, "language": { "en" }, "thumbnail": "[https://example.org/cdn/thumbnails/1509428502952/1](https://example.org/cdn/thumbnails/1509428502952/2)", "shortDescription": "A live description", "longDescription": "A longer description of a live stream","genres": [ "drama", "comedy", "horror" ],"tags": [ "kidsdirected" ] }

### Movie content type

Child object of root property `movies`.

This object represents a movie.

#### Movie ad policy

- No adBreaks should be listed during the first 10 minutes of program start
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 10 minutes between each adBreak
- No adBreaks within 10 minutes of end credits.

| **Field**        | **Type**                                             | **Required** | **Description**                                              |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the movie. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br />**Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| title            | string                                               | Required     | Movie title. Roku uses this value for matching in Roku Search. Please use plain text and do not include extra information like year, version label, etc. No Emojis. Mixed case. |
| genres           | string                                               | Required     | Array of genre strings for the movie. Must be one or more of the values listed in [genres](#genres-property). |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${moviethumbnaillist} |
| releaseDate      | string                                               | Required     | The date the movie was initially released or first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm)format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11 |
| shortDescription | string                                               | Required     | A movie description that does not exceed 110 characters. The text will be clipped if longer. No emojis. |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the movie.         |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements |
| externalIds      | [External IDs Object](#externalids-property)         | Optional     | One or more third-party metadata provider IDs.               |

{#moviethumbnaillist}

- image/jpeg
- image/jpg

Movie Object Example:

```
{ "id": "1509428502952", "title": "Sample Movie", "content": { ... }, "genres": [ "drama", "comedy", "horror" ], "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "releaseDate": "2016-01-01", "shortDescription": "Incredible movie description", "longDescription": "Even more incredible and longer movie description", "tags": [ "amazing", "drama", "comedy", "horror" ] }

```

### Series content type

Child object of root property `series`.

This object represents a series, such as a season of a TV show or a mini-series.

| **Field**        | **Type**                                             | **Required** | **Description**                                              |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the series. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br />**Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| title            | string                                               | Required     | The title of the series. Roku uses this field for matching in Roku Search. No Emojis. Mixed case. |
| seasons          | [Season Object](#season-content-type)                | Required*    | One or more seasons of the series. Seasons should be used if episodes are grouped by seasons. |
| episodes         | [Episode Object](#episode-content-type)              | Required*    | One or more episodes of the series. Episodes should be used if they are not grouped by seasons (e.g., a mini-series). |
| genres           | string                                               | Required     | Array of genre strings for the series. Must be one or more of the values listed in [genres](#genres-property). |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${seriesthumbnaillist} |
| releaseDate      | string                                               | Required     | The date the series first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11 |
| shortDescription | string                                               | Required     | A description of the series that does not exceed 110 characters. The text will be clipped if longer. No emojis. |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the series.        |
| externalIds      | [External IDs Object](#externalids-property)         | Optional     | One or more third-party metadata provider IDs.               |

{#seriesthumbnaillist}

- image/jpeg
- image/jpg

> **Must have either* *`seasons`* *or* *`episodes`*

Series Object Example (seasons):

```
{ "id": "1509428502952", "title": "The Amazing Series with Seasons!", "seasons": [ ... ], "genres": [ "educational", "science fiction", "thriller", ], "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Wondrous series seasons." }
```

Series Object Example (mini-series):

```
{ "id": "1509428502952", "title": "The Amazing Series with Episodes Only!", "episodes": [ ... ], "genres": [ "fashion", "romance", "technology", ], "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Unbelievables series episodes." }
```

### Season content type

Child object of property `series -> seasons`.

This object represents a single season of a series.

| **Field**    | **Type**                                | **Required** | **Description**                                 |
| ------------ | --------------------------------------- | ------------ | ----------------------------------------------- |
| seasonNumber | integer                                 | Required     | Sequential season number. e.g.: 3 or 2015.      |
| episodes     | [Episode Object](#episode-content-type) | Required     | One or more episodes of this particular season. |

Season Object Example:

```
{ "seasonNumber": 1, "episodes": [ ... ] }
```

### Episode content type

Child object of property:

- `series -> episodes`
- `series -> seasons -> episodes`

This object represents a single episode in a series or a season.

#### Episode ad policy

Content length longer than 15 minutes:

- No adBreaks should be listed during the first 4 mins of program start
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 6 mins between each adBreak
- No adBreaks within the last 4 minutes of end credits

| **Field**        | **Type**                                             | **Required** | **Description**                                              |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the episode. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br />**Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| title            | string                                               | Required     | Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case. |
| thumbnail        | string                                               | Required     | The URL of the thumbnail for the episode. This is used within your channel as a backup to series artwork and in search results where applicable.<br /><br />Landscape untitled key art in a JPEG file. Recommended image dimensions: 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${episodethumbnaillist} |
| releaseDate      | string                                               | Required     | The date the episode first aired. Used to match program data to Gracenote counterpart. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11 |
| episodeNumber    | integer                                              | Required     | Sequential episode number. e.g.: 3                           |
| shortDescription | string                                               | Required     | An episode description that does not exceed 110 characters. The text will be clipped if longer. No emojis. |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the episode.       |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements |
| externalIds      | [External Property](#externalids-property)           | Optional     | One or more third-party metadata provider IDs.               |

{#episodethumbnaillist}

- image/jpeg
- image/jpg

Episode Object Example:

```
{ "id": "1509428502952", "title": "The Amazing First Episode Title", "content": { ... }, "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "episodeNumber": 1, "shortDescription": "Marvelous episode description" }
```

### ShortFormVideo content type

Child object of root property `shortFormVideos`.

Short-form videos are generally less than 15 minutes long, and are not TV Shows or Movies. Must be included in a composite EPG block of 15 mins or greater.

| **Field**        | **Type**                                             | **Required** | **Description**                                              |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the video. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br />**Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| title            | string                                               | Required     | Video title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case. |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${shortformthumbnaillist} |
| shortDescription | string                                               | Required     | A description of the video that does not exceed 110 characters. The text will be clipped if longer. No emojis. |
| releaseDate      | string                                               | Required     | The date the video first became available. Used to sort programs chronologically and grouping related content in Roku Search.<br />Conforms to the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm)format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11 |
| genres           | string                                               | Optional     | Array of genre strings for the video. Must be one or more of the values listed in [genres](#genres-property). |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the video.         |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | A parental rating for the content.<br />*See [Kids-Directed content ](#kids-directed-content)for rating requirements |

{#shortformthumbnaillist}

- image/jpeg
- image/jpg

Short-form Video Object Example:

```
{ "id": "1509428502952", "title": "The Amazing Short-form Video", "content": { ... }, "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Astonishing short-form video", "releaseDate": "2016-01-01" }
```

### TvSpecial content type

Child object of root property `tvSpecials`.

#### TvSpecial ad policy

Content length longer than 15 minutes:

- No adBreaks should be listed during the first 4 mins of program start
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 6 mins between each adBreak
- No adBreaks within the last 4 minutes of end credits

| **Field**        | **Type**                                             | **Required** | **Description**                                              |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the TV Special. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br />**Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| title            | string                                               | Required     | Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case. |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />${tvspecialthumbnaillist} |
| genres           | string                                               | Required     | Array of genre strings for the special. Must be one or more of the values listed in [genres](#genres-property). |
| releaseDate      | string                                               | Required     | The date the TV Special first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11 |
| shortDescription | string                                               | Required     | A description of the special that does not exceed 110 characters. The text will be clipped if longer. No emojis. |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the TV special.    |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | A parental rating for the content.<br />*See [Kids-Directed content ](#kids-directed-content)for rating requirements |
| externalIds      | [External IDs Property](#externalids-property)       | Optional     | One or more third-party metadata provider IDs.               |

{#tvspecialthumbnaillist}

- image/jpeg
- image/jpg

TV Special Object Example:

```
{ "id": "1509428502952", "title": "The Amazing First Episode Title", "content": { ... }, "genres": [ "animals", "animated", "fantasy", ], "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Unusual episode description" }
```

### **Schedule object**

All linear feeds require a schedule as part of the livefeed content object.

| Field             | Type    | Required    | Description                                                  |
| ----------------- | ------- | ----------- | ------------------------------------------------------------ |
| id                | string  | Required    | Your immutable string reference ID to the program's content ID from its respective content type section. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. **Note**: The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| durationInSeconds | integer | Required    | the duration in seconds that the program will run.           |
| isLive            | boolean | Required    | true OR false - Identifies a program as a true live event.   |
| date              | string  | Required    | Scheduled date for program to play. All times are UTC. Format: {YYYY}-{MM}-{DD} |
| times             | string  | Required    | An array of start times in the particular day the program will start [ "HH:MM:SS" ] |
| attributes        | enum    | Recommended | May denote a number of badges to appear in the EPG UI next to a program's title. Currently, only "CC" for Closed Captions is supported. |

Schedule object example

    {
        "id": "programId",
    
        "isLive": false,
    
        "date": "2020-01-13",
    
        "times": [
    
            "21:30"
    
        ],
    
        "durationInSeconds": 2760,
    
        "attributes": [
    
            "CC"
    
        ]
    }

### EPG

EPG Requirement

8 days of full data (1 week forward and 24 Hours back) to populate the EPG

15-minute minimum duration for content block

For full details and guidance on constructing your EPG, please refer this this guide.

https://developer.roku.com/en-ot/trc-docs/live-linear/epg-on-trc.md

Notes:

- Please include the liveFeed as the first item in a feed.
- Only a title or a **TMS** ExternalID is required for programs referenced in a schedule. We will reject anything that's not a **valid** ExternalID.
- When referencing an episode, the parent items must also be in included ([series](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md#series) and [season](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md#season) when applicable). These parent items must be **<u>fully populated with required fields</u>** as specified in the [Roku Direct Published feed specification](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md) or the series item must contain a valid External **TMS** id.

![roku400px - feedspecs-1](https://image.roku.com/ZHZscHItMTc2/feed-specs-1-v2.jpg)

#### EPG logos

**To be provided via .zip file to Roku**

| Logo                                     | Required | Resolution                               | Notes                                    |
| ---------------------------------------- | -------- | ---------------------------------------- | ---------------------------------------- |
| Program Guide channel Identifier (light) | Required | 114x60 pixels                            | Needs to read well on a black background |
| Program Guide channel Identifier (dark)  | Required | 114x60 pixels                            | Needs to read well on a white background |
| Info HUD channel Identifier              | Required | 260x147 (**MUST** be hex color #efefef ) |                                          |

For EPG Spine

- 1 logo for white background, 1 for black background (can be the same image if reads well on both backgrounds).
- Logos need to be transparent PNGs
- 114 pixels wide x 60 pixels tall
- Center aligned on the horizontal & vertical axis
- 3 pixel top and bottom border

For Info HUD

- Logos need to be transparent PNGs
- Logos need to be monochromatic hex #efefef 
- 260 pixels wide x 147 pixels tall
- 1x logo center aligned

Feed Example:

```
{
    "liveFeeds": [
        {
            "id": "providerx-live",
            "title": "Provider X Live",
            "content": {
                "dateAdded": "2019-06-01",
                "language": "en",
                "schedule": [
                    {
                        "id": "movie-id-1",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "10:00"                       
                        ]                       
                    },
                    {
                        "id": "episode-id-1",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [                           
                            "12:00",                           
                            "16:00"
                        ]                       
                    },
                    {
                        "id": "shortformvideo-id-1",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [                   
                            "14:00"                           
                        ]                       
                    },
                    {
                        "id": "tvspecial-id-1",
                        "durationInSeconds": 7200,
                        "isLive": true,
                        "date": "2018-04-05",
                        "times": [
                            "18:00"
                        ]                       
                    },
                    {
                        "id": "movie-id-2",
                        "durationInSeconds": 3600,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "20:00"
                        ]                       
                    },
                    {
                        "id": "movie-id-3",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "21:00"
                        ]                       
                    }
                ]
            },
            "thumbnail": "https://<imageUrl>.jpg",
            "shortDescription": "Live business and national news, with top executives interviews and coverage of the technologies transforming our lives and economy.",
            "longDescription": "Live business and national news, with top executives interviews and coverage of the technologies transforming our lives and economy."           
        }
    ],
    "movies": [
        {
        "id": "movie-id-1",
        "title": "Between Worlds",
        "externalIds": [
            {
                "id": "MV015001100000",
                "idType": "TMS"
                }
            ]
        },
        {
            "id": "movie-id-2",
            "title": "Between Worlds 2",
            "thumbnail": "https://<imageUrl>.jpg",
            "shortDescription": "A truck driver whose life spirals out of control after the spirit of his deceased wife comes to life.",
            "advisoryRatings": [
                {
                "source": "MPAA",
                "value": "R"
                },
                {
                "source": "CPR",
                "value": "14+"
                }
                  ],
            "genres":
                [
                "animals",
                "animated",
                "fantasy",
                ]
        },        
    ],
    "series": [
        {
            "id": "series-id-1",
            "title": "series1",
            "seasons": [
                {
                     "seasonNumber": 6,
                        "episodes": [
                        {
                            "id": "episode-id-1",
                            "title": "episode1",
                            "episodeNumber": 59
                        }                       
                    ]
                }
            ]
        }
    ],
    "tvSpecials": [
        {
            "id": "tvspecial-id-1",
            "title": "tvspecial1"
        }
    ],
    "shortFormVideos": [
        {
            "id": "shortformvideo-id-1",
            "title": "shortformvideo1"
        }
    ]
}
```

## Kids-directed content

“**Kids-Directed Content**” means content that either: (i) is directed to children as defined by the applicable law of the jurisdiction in which the content is shown (e.g., The Children's Online Privacy Protection Act); or (ii) was made for viewing primarily by children within the jurisdiction in which the content is shown.

You may NOT submit or distribute Kids-Directed Content unless you have Roku’s express written approval. 

The following additional obligations apply to all Kids-Directed Content:

| **Field**       | **Type**                                             | **Required** | **Description**                                              |
| --------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| tags            | string                                               | Required     | Include a "kidsdirected" tag into the tags string **all lowercase*<br />${tagslist0} |
| advisoryRatings | [Advisory Ratings Object](#advisoryratings-property) | Required     | A parental rating for the content. (MPAA or TV Rating).<br />${ratingslist0} |

{#tagslist0}

- This is how you flag to Roku that the content is Kids-Directed Content
- Do not include this tag in non-Kids-Directed Content

{#ratingslist0}

- 'Unrated' and "Not Rated" are not accepted ratings for Kids-Directed Content

The following additional obligations apply to all live linear streams that include Kids-Directed Content:

- You will only include Kids-Directed Content in a live linear stream if that live linear stream is (and will always be) comprised exclusively of Kids-Directed Content. Do not mingle Kids-Directed Content and non-Kids-Directed Content in a live linear feed.

- You will provide a single TV content rating in the [Rating Object ](#rating-property)reflecting the most restrictive rating of all Kids-Directed Content that will be available on the live linear feed.

**Additional kidsdirected guidelines**

A `kidsdirected` tag should be inserted for any channel that is directed to children, based on a variety of factors, including the following:

- Ratings which designate the content as designed to be appropriate for children 
  - Allowable ratings: Rating = TVPG, PG, TVY, TVY7, TVG, G
  - TVY and TVY7 are reserved for kidsDirected channels only
- Content subject matter (e.g., teaching the alphabet)
- Visual content (e.g., unicorns)
- Use of animated characters (e.g., My Little Pony)
- Child-oriented activities and incentives
- Music or other audio content designed for children (e.g., nursery rhymes)
- Young age of models (e.g., toddlers)
- Presence of child celebrities or celebrities who appeal to children
- Language or other characteristics of the content that target children
- Whether advertising appearing with the content is directed to children
- Whether your intended audience for the content is children
- Whether you have competent and reliable empirical evidence that your audience composes primarily of children

## Content properties

### Content property

Child object of property:

- `liveFeed`

This object represents the details about the liveFeed

| **Field**           | **Type**                            | **Required** | **Description**                                              |
| ------------------- | ----------------------------------- | ------------ | ------------------------------------------------------------ |
| dateAdded           | string                              | Required     | The date the liveFeed was added to the library in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00 This information is used to generate the “Recently Added” category. |
| language            | string                              | Required     | The language in which the feed is intended (e.g., “en”, “en-US”, “es”, etc). ISO 639 alpha-2 or alpha-3 language code string. |
| validityPeriodStart | string                              | Optional     | The date when the content should become available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm)format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00 |
| validityPeriodEnd   | string                              | Optional     | The date when the content is no longer available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm)format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00 |
| schedule            | [Schedule Object](#schedule-object) | Required     | A chronological listing of program start times and durations referencing objects in other content type sections (movies, series, shortFormVideos, tvSpecials) |

Content Object Example:

```
{ "dateAdded": "2015-11-11T22:21:37+00:00", "language": "es", "schedule": [...], "validityPeriodStart": "2020-03-13", "validityPeriodEnd": "2100-03-12"}
```

### Genres property

The following genres are supported:

|      1.       |      2.       |      3.       |      4.       |      5.       |      6.       |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| ${genreList1} | ${genreList2} | ${genreList3} | ${genreList4} | ${genreList5} | ${genreList6} |

{#genreList1}

- action
- action sports
- adventure
- aerobics
- agriculture
- animals
- animated
- anime
- anthology
- archery
- arm wrestling
- art
- arts/crafts
- artistic gymnastics
- artistic swimming
- athletics
- auction
- auto
- auto racing
- aviation
- awards
- badminton
- ballet
- baseball
- basketball
- 3x3 basketball
- beach soccer
- beach volleyball
- biathlon
- bicycle
- bicycle racing
- billiards
- biography
- blackjack
- bmx racing
- boat
- boat racing
- bobsled

{#genreList2}

- bodybuilding
- bowling
- boxing
- bullfighting
- bus./financial
- canoe
- card games
- ceremony
- cheerleading
- children
- children-music
- children-special
- children-talk
- collectibles
- comedy
- comedy drama
- community
- computers
- canoe/kayak
- consumer
- cooking
- cricket
- crime
- crime drama
- curling
- cycling
- dance
- dark comedy
- darts
- debate
- diving
- docudrama
- documentary
- dog racing
- dog show
- dog sled
- drag racing
- drama

{#genreList3}

- educational
- entertainment
- environment
- equestrian
- erotic
- event
- exercise
- fantasy
- faith
- fashion
- fencing
- field hockey
- figure skating
- fishing
- football
- food
- fundraiser
- gaelic football
- game show
- gaming
- gay/lesbian
- golf
- gymnastics
- handball
- health
- historical drama
- history
- hockey
- holiday
- holiday music
- holiday music special
- holiday special
- holiday-children
- holiday-children special
- home improvement
- horror
- horse
- house/garden

{#genreList4}

- how-to
- hunting
- hurling
- hydroplane racing
- indoor soccer
- interview
- intl soccer
- judo
- karate
- kayaking
- lacrosse
- law
- live
- luge
- martial arts
- medical
- military
- miniseries
- mixed martial arts
- modern pentathlon
- motorcycle
- motorcycle racing
- motorsports
- mountain biking
- music
- music special
- music talk
- musical
- musical comedy
- mystery
- nature
- news
- newsmagazine
- olympics
- opera
- outdoors
- parade
- paranormal

{#genreList5}

- parenting
- performing arts
- playoff sports
- poker
- politics
- polo
- pool
- pro wrestling
- public affairs
- racquet
- reality
- religious
- ringuette
- road cycling
- rodeo
- roller derby
- romance
- romantic comedy
- rowing
- rugby
- running
- rhythmic gymnastics
- sailing
- science
- science fiction
- self improvement
- shooting
- shopping
- sitcom
- skateboarding
- skating
- skeleton
- skiing
- snooker
- snowboarding
- snowmobile
- soap
- soap special

{#genreList6}

- soap talk
- soccer
- softball
- special
- speed skating
- sport climbing
- sports
- sports talk
- squash
- standup
- sumo wrestling
- surfing
- suspense
- swimming
- table tennis
- taekwondo
- talk
- technology
- tennis
- theater
- thriller
- track/field
- track cycling
- travel
- trampoline
- triathlon
- variety
- volleyball
- war
- water polo
- water skiing
- watersports
- weather
- weightlifting
- western
- wrestling
- yacht racing

### ExternalIds property

Child object of property:

- `movie`
- `series`
- `series -> episodes -> episode`
- `series -> seasons -> episodes -> episode`
- `shortFormVideo`
- `tvSpecial`

This object represents a third-party metadata provider ID (such as TMS, Rovi, IMDB, EIDR) that can provide more information about a specific video content. This metadata optimizes the opportunity for your content to be discovered by Roku search and to provide more details to users.

| **Field** | **Type** | **Required** | **Description**                                              |
| --------- | -------- | ------------ | ------------------------------------------------------------ |
| id        | string   | Required     | The third-party metadata provider ID for your video content. For example, in the case of IMDB you would use the last part of the URL of a movie such as "http://www.imdb.com/title/tt0371724". |
| idType    | enum     | Required     | Must be one of the following:<br />${externalIdsList}        |

{#externalIdsList}

- TMS – A Tribune Metadata Service ID for the content. Roku recommends using TMS and will associate these IDs for you.
- ROVI - A Rovi ID for the content
- IMDB – An Internet Movie Database ID
- EIDR – An Entertainment Identifier Registry ID

External IDs Object Example:

```
{ "id": "123456789", "idType": "TMS" }, 

{ "id": "tt0371724", "idType": "IMDB" }, 

{ "id": "10.5240/48A5-E3C5-6B11-D874-FD2B-V", "idType": "EIDR" }
```

### AdvisoryRatings property

Child object of property:

- `movie`
- `series -> episodes -> episode`
- `shortFormVideo`
- `tvSpecial`
- `livefeed`

This object represents the ratings across multiple territories for the video content. You can define the parental rating, as well as the source (USA Parental Rating, UK Content Provider, etc). See Parental Ratings and Rating Sources for acceptable values.

| Field  | Type | Required | Description                                                  |
| ------ | ---- | -------- | ------------------------------------------------------------ |
| value  | enum | Required | Must be a value listed in [Parental Ratings](#parental-ratings-property).<br />Do not include any content targeted specifically to children. |
| source | enum | Required | Must be one or more of the following:<br />${sourcelist0}    |

{#sourcelist0}

- BBFC**
- CHVRS
- CPR
- MPAA
- USA_PR
- RTC
- ACB
- CLASSIND

** UK content - rating is **required**. If there is no BBFC rating, please note a content rating of 'NR'

Rating Object Example:

```
"advisoryRatings": [
        {
          "source": "MPAA",
          "value": "PG13"
        },
        {
          "source": "CPR",
          "value": "14+"
        }
      ],
```

### Accepted parental ratings

The following parental ratings can be used to better help your viewers find age-appropriate content.

Note: No content can be targeted specifically to children. No pornographic or porn industry-related content is allowed.

| Source     | USA_PR (USA Parental Rating)                                 | MPAA (Motion Picture Association of America)    | CHVRS (Canadian Home Video Rating System) | CPR (Canadian Parental Rating)                   |
| ---------- | ------------------------------------------------------------ | ----------------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| Rating     | ${parentalList1}                                             | ${parentalList2}                                | ${parentalList3}                          | ${parentalList4}                                 |
| **Source** | **RTC (General Directorate of Radio Television and Cinematography) - Mexico** | **BBFC (British Board of Film Classification)** | **ACB (Australian Classification Board)** | **CLASSIND (Classificação Indicativa) - Brazil** |
| Rating     | ${parentalList5}                                             | ${parentalList6}                                | ${parentalList7}                          | ${parentalList8}                                 |

{#parentalList1}

- TV-Y
- TVY
- TV-Y7
- TVY7
- TV-G
- TVG
- TV-PG
- TVPG
- TV-14
- TV14
- TV-MA
- TVMA

{#parentalList2}

- G
- PG
- PG13
- PG-13
- R
- NC-17
- NC17
- UR

{#parentalList3}

- G
- PG
- 14A
- 14-A
- 18A
- 18-A
- R
- E

{#parentalList4}

- 14+
- 18+
- C
- C8
- C-8
- G
- PG
- E

{#parentalList5}

- AA
- A
- B
- B-15
- B15
- C
- D

{#parentalList6}

- U
- PG
- 12A
- 12-A
- 12
- 15
- 18
- R18
- R-18

{#parentalList7}

- E
- G
- PG
- M
- MA 15+
- R 18+
- X 18+
- AV 15+
- C
- NC
- RC

{#parentalList8}

- L
- 10
- 12
- 14
- 16
- 18
- AL
- A10
- A12
- A14
- A16
- A18

### Rating source property

These are the accepted values for the `ratingSource` property:

- BBFC - British Board of Film Classification
- CHVRS - Canadian Home Video Rating System
- CPR - Canadian Parental Rating
- MPAA - Motion Picture Association of America
- USA_PR - USA Parental Rating
- RTC - General Directorate of Radio Television and Cinematography - Mexico
- ACB - Australian Classification Board
- CLASSIND - Classificação Indicativa - Brazil

### Credit property

Child object of property:

- `movie`
- `series`
- `series -> episodes -> episode`
- `shortFormVideo`
- `tvSpecial`

This object represents a single person in the credits of a video content.

| Field | Type   | Required | Description                                                  |
| ----- | ------ | -------- | ------------------------------------------------------------ |
| name  | string | required | name of the person                                           |
| role  | enum   | required | role of the person - must be one of the following values:<br />${roleList} |

{#roleList}

- actor
- anchor
- host
- narrator
- voice
- director
- producer
- screenwriter

Credit Object Example:

```
{ "name": "Douglas N. Adams", "role": "screenwriter", "birthDate": "1952-03-11" }
```