---
title: The Roku Channel live linear ingest specifications (OVP)
deprecated: false
hidden: false
robots: index
---
_Version 3.2_

## Overview

This specification describes the ingest specifications and EPG requirements required for your channel's content catalog to be included in [The Roku Channel](https://www.roku.com/whats-on/the-roku-channel). A catalog is the set of movies, series, TV specials, short-form videos or linear stream your channel provides, along with the artwork that represents it in the UI. A catalog feed (JSON) or Gracenote channel ID (aka ProgSrvID) includes the metadata that describes each asset so Roku can index it, categorize it, and present it to users. **Note: Gracenote channel id support is currently limited to linear channels with live sports only.**

The Roku Channel feed format follows the JSON-Schema Draft 4. All the properties in the schema are case sensitive. Before submitting a feed, make sure it is a valid JSON file. You can do that by using an IDE or free online tools, such as [JSON Schema Validator](https://www.jsonschemavalidator.net/) or [JSON Schema Lint](https://jsonschemalint.com/#!/version/draft-07/markup/json).

For guidelines about presenting your channel's EPG, see [EPG on The Roku Channel](/trc-docs/live-linear/epg-on-trc.md).

### A note about deduplication of metadata

Roku augments metadata and artwork that appears in The Roku Channel on Roku devices, web browsers, mobile applications, and other off-platform players with data supplied from Gracenote’s database where available. The Gracenote data aids in a unified experience of a title across platforms as well as on the greater Roku ecosystem. Roku will attempt to match all content delivered by our Partners to a corresponding record in Gracenote’s database. _At this time all metadata and artwork that appears on The Roku Channel is sourced from Gracenote if that content is found in Gracenote’s database._

Our systems use a combination of methods to match a title its correct Gracenote record. Partners can aid in the matching to a Gracenote record by providing accurate metadata including:

* Exact title of a series, movie, TV special, or short form video

* Release dates that are accurate to the year the title was originally released on any platform

* Accurate season and episode numbers according to the original release order

* Accurate TMS (Gracenote) IDs or IMDB IDs by content type

  * Content classified as an episode with Gracenote must be delivered as an Episode to Roku

  * Content classified as a movie with Gracenote must be delivered as a movie to Roku

  * Content classified as a TV Special with Gracenote can be delivered as a movie to Roku

## Inclusion in The Roku Channel

In order for your content to be surfaced in The Roku Channel, you must adhere to this specification. If you already have a channel powered by Direct Publisher and you want its content to appear in The Roku Channel, you must ensure your feed meets the requirements described in this specification. Likewise, if you've built a channel using our developer program, then you must provide Roku with a separate feed adhering to this specification. The new feed must contain only assets that are available for display in The Roku Channel.

**Note that participation in The Roku Channel is currently limited to select partners. Configuring your feed to meet this specification is a prerequisite to be reviewed for inclusion. To submit a feed for approval into The Roku Channel, contact your Roku representative.**

All Linear Partners must utilize one of the **Linear Certified Partners** for their stream and EPG distribution: **Amagi, Wurl, Frequency, OTTera, Xumo, Akta, Zype, Evrideo, or Stenna**. Exceptions will only be considered if the partner can agree to abiding by all rules and requirements as outlined in the linear certification agreement which can be provided if such an exemption is necessary.

### Error Reporting

Stream and EPG issue reports go directly to the LCPs. Stream issues and high priority EPG issues are reported as needed. Comprehensive EPG issue reports go out weekly to all LCPs.

## Roku OVP

Roku now requires all live linear channels on TRC to run through their Online Video Platform (OVP). Below are the ingest specifications and input data template that needs to be filled out and provided to Roku Live Operations for all new live linear channels.

### Collection of Linear Channel Input Data

Roku Live Operations team provides templates to LCPs for channel acquisition details.

For Live events and Special integrations, a custom ingest document will be provided.

### **Supported Video and Audio Tech Specs**

The following outlines what we support. A preferred video set up is outlined in the referenced column.

<HTMLBlock>{`
<table>
  <thead>
    <tr>
      <th>
        **Description**
      </th>
      <th>
        **Specification**
      </th>
      <th>
        **Preferred**
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Delivery Method
      </td>
      <td>
        <ul>
          <li>AWS Media Connect Entitlement*</li>
          <li>Zixi Push*</li>
          <li>SRT<ul>
              <li>Push IP and Port number will be provided to LCP/partner</li>
            </ul></li>
          <li>RTP w/FEC Push</li>
          <li>RTMP Push<ul>
              <li>Push URL will be provided to LCP/partner</li>
            </ul></li>
        </ul>
        <em>*Support AES Decryption</em>
      </td>
      <td>
        AWS Media Connect Entitlement
      </td>
    </tr>
    <tr>
      <td>
        Container
      </td>
      <td>
        TS over IP
      </td>
      <td>
        TS over IP
      </td>
    </tr>
    <tr>
      <td>
        Video Codec
      </td>
      <td>
        * MPEG-2
        * H.264
        * H.265
      </td>
      <td>
        H.264
      </td>
    </tr>
    <tr>
      <td>
        Audio Codec
      </td>
      <td>
        * AAC
        * MPEG Audio
        * Dolby Digital (AC3 2.0 + 5.1)
        * PCM
      </td>
      <td>
        AAC
      </td>
    </tr>
    <tr>
      <td>
        Video Resolution
      </td>
      <td>
        * HD - 1920 x 1080
        * SD 720 x 480
      </td>
      <td>
        HD - 1920 x 1080
      </td>
    </tr>
    <tr>
      <td>
        Video Frame Rate
      </td>
      <td>
        * 23.97
        * 24
        * 25
        * 29.97
        * 30
        * 59.94
        * 60
      </td>
      <td>
        any
      </td>
    </tr>
    <tr>
      <td>
        Audio Bitrate
      </td>
      <td>
        * 128 Kbps (min)
        * 320 Kbps (max)
      </td>
      <td>
        within range
      </td>
    </tr>
    <tr>
      <td>
        Overall Bitrate
      </td>
      <td>
        * HD - 12 Mbps (min)
        * SD - 6 Mbps (min)
      </td>
      <td>
        Above 12 Mbps
      </td>
    </tr>
    <tr>
      <td>
        Bitrate Mode
      </td>
      <td>
        CBR
      </td>
      <td>
        CBR
      </td>
    </tr>
    <tr>
      <td>
        Video Interlacing
      </td>
      <td>
        Progressive Scan
      </td>
      <td>
        Progressive Scan
      </td>
    </tr>
    <tr>
      <td>
        Audio Sampling Rate
      </td>
      <td>
        48 kHz
      </td>
      <td>
        48 kHz
      </td>
    </tr>
    <tr>
      <td>
        Audio Channels
      </td>
      <td>
        Stereo
      </td>
      <td>
        Stereo
      </td>
    </tr>
    <tr>
      <td>
        Closed Captions
      </td>
      <td>
        CEA 608/708 (embedded)
      </td>
      <td>
        CEA 608/708 (embedded)
      </td>
    </tr>
    <tr>
      <td>
        Aspect Ratio
      </td>
      <td>
        * HD - 16:9
        * SD - 4:3
      </td>
      <td>
        HD - 16:9
      </td>
    </tr>
    <tr>
      <td>
        Other video details
      </td>
      <td>
        * Content should be free of the following technical errors:
          * Windowboxing and stretching
          * Excess video content such as excessive black screen and color bars
          * Visible interlacing and artifacts/macroblocking
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        Ad Insertion Points (if applicable)
      </td>
      <td>
        SCTE-35 Markers In Stream via any of the following:
        <br /><br />
        <ul>
          <li><strong>Splice_Insertion</strong><ul>
              <li>Start and Duration is required</li>
              <li>If scte35:SpliceInsert, outOfNetworkIndicator must be set to <strong>true</strong></li>
            </ul></li>
          <li><strong>Time Signal</strong><ul>
              <li>Start and Duration is required</li>
              <li>If scte35:TimeSignal, then accompany by scte35:SegmentationDescriptor scte35:SegmentationUpid with segmentationTypeId set to <strong>one</strong> of the following cue-out numbers:<ul>
                  <li>0x22 (start break)</li>
                  <li>0x30 (provider advertisement start)</li>
                  <li>0x32 (distributor advertisement start)</li>
                  <li>0x34 (provider placement opportunity start)</li>
                  <li>0x36 (distributor placement opportunity start)</li>
                </ul></li>
            </ul></li>
        </ul>
      </td>
      <td>
        Splice_Insertion
      </td>
    </tr>
    <tr>
      <td>
        Special ad support
      </td>
      <td>
        TripleLift DBI support*
        <br /><br />
        <em>*Requires Roku approval</em>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        Ad policy
      </td>
      <td>
        <ul>
          <li>Partners should not serve any ads in the channel other than the ones returned by the Roku SSAI, unless explicitly agreed in the contract.</li>
          <li>Partners should adhere to the below ad length requirements:<ul>
              <li>General Audience<ul>
                  <li>8 minutes of ads per hour</li>
                  <li>Minimum 4 ads and maximum of 6 ads per pod</li>
                  <li>Ad pod length of 2 minutes</li>
                </ul></li>
              <li>Kids<ul>
                  <li>6 minutes of ads per hour</li>
                  <li>Minimum 3 ads and maximum of 6 ads per pods</li>
                  <li>Ad pod length of 90 seconds</li>
                  <li>Bumper/lead-in identifying ad break before AND after ad pods occur (6 second maximum)<ul>
                      <li>Example: "We'll be right back after this break", "Now back to the show"</li>
                    </ul></li>
                  <li>Flexibility around the ad policy is provided during live events. Please discuss this with your Roku rep.</li>
                </ul></li>
            </ul></li>
        </ul>
        <em>**Do not include pixels, third-party tags, or Software Development Kits of any kind without express prior written approval and certification by Roku.</em>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        Ad queue points quality
      </td>
      <td>
        - Avoid placing ad breaks that interrupt dialogue<br />- Avoid ad breaks that interrupt a major action/dramatic scene<br />- Ad breaks should be placed with frame accuracy in logical ad break points (ex. fades to black, scene transitions, etc)<br />** * Do not include pixels, third-party tags, or Software Development Kits of any kind without express prior written approval and certification by Roku.*
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        Blackouts and Regional restrictions
      </td>
      <td>
        * Roku supports regional restrictions on a channel level basis
          * Currently US ZIP codes only
        * SCTE 224 support for program level blackouts and restrictions (coming soon)
      </td>
      <td>
      </td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

## Live Events

The following additional details are required for Roku discrete live events (DLEs) and insertion into Roku owned and operated linear channels.

* All live events must have both a primary and backup source
  * **SRT or Zixi Push preferred;** HLS and RTMP are not supported
* Live events intended for Roku O&Os must include program start/stop SCTE messages
  * **Splice Insert messages are preferred**; Time Signal message type must include a splice command

### Metadata

* Ensure all event metadata is delivered to your Roku rep for the event as early as possible
  * **A Gracenote TMS ID for the event is preferred**
  * Metadata fields can be found here based on event type: [https://developer.roku.com/en-gb/trc-docs/live-linear/epg-on-trc.md#metadata-by-content-type](https://developer.roku.com/en-gb/trc-docs/live-linear/epg-on-trc.md#metadata-by-content-type)

### Recurring events

* Roku has the ability to access third party APIs for recurring events. **Ask your Roku rep for details.**

![roku400px - livespecs-1](https://image.roku.com/ZHZscHItMTc2/live-events-graph-1.png)

# Direct Publisher Feed Schema

These are the properties for the root object of your EPG feed. It contains basic information such as your company's name, when the feed was last updated, and other objects that will describe all your content in detail. The URL for your feed should have the form "https://_[yourfeeddomain.com](http://yourfeeddomain.com/)_".

The format of the feed is a comma-separated list with each property enclosed in double quotes. You must assign each asset (object) its own reference ID, which is a string. **Note**: The ID for an asset must not exceed 50 characters.

_**Note:**_ Partners should not make programming updates to content scheduled to air within **48 hours** of live broadcast.

| **Field/Root Property** | **Content Type**                                      | **Required** | **Description**                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| providerName            | string                                                | Required     | The name of the feed provider. For instance, “Acme Productions” as shown in the template below.                                                                                                                                               |
| lastUpdated             | string                                                | Required     | The date that the feed was last modified in the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. For instance, "2015-11-11T22:21:37+00:00" as shown in the template below. |
| language                | string                                                | Required     | The language the channel uses for all its information and descriptions in an ISO 639 alpha-2 or alpha-3 language code string. For instance, “en-US” as shown in the template below.                                                           |
| liveFeeds               | [LiveFeed Object](#livefeed-content-type)             | Required     | A list of one or more live linear schedules.<br />**Generally, only one liveFeed schedule per channel delivery should be present in the JSON. For bulk channel deliveries, please consult your Roku rep.**                                    |
| movies                  | [Movie Object](#movie-content-type)                   | Required*    | A list of one or more movies.                                                                                                                                                                                                                 |
| series                  | [Series Object](#series-content-type)                 | Required*    | A list of one or more series. Series are episodic in nature and would include TV shows and daily or weekly ongoing shows.                                                                                                                     |
| shortFormVideos         | [ShortFormVideo Object](#shortformvideo-content-type) | Required*    | A list of one or more short-form videos. Short-form videos are usually less than 20 minutes long and are not TV shows or movies.                                                                                                              |
| tvSpecials              | [TV Special Object](#tvspecial-content-type)          | Required*    | A list of one or more TV specials. TV specials are one-time TV programs that are not part of a series.                                                                                                                                        |

> *_At least one of these content types is required_

The Roku Channel Feed Root Object Template:

```json
{ "providerName": "Acme Productions", "lastUpdated": "2015-11-11T22:21:37+00:00", "language": "en-US", "categories": [ ... ], "playlists": [ ... ], "movies": [ ... ], "series": [ ... ], "shortFormVideos": [ ... ], "tvSpecials": [ ... ],"liveFeeds": [ ... ]
 }
```

## Artwork for all content

Each image must be delivered in the JPEG format (.jpg or .jpeg file extension).

**Make sure your CDN is using the following ContentType headers**

* image/jpeg
* image/jpg

| **Image Type** | **Description**            | **Resolution** | **Aspect Ratio** | **Required/Optional**                 |
| -------------- | -------------------------- | -------------- | ---------------- | ------------------------------------- |
| key art        | Image with title treatment | 1920x1080      | 16:9             | Movie: Required<br />Series: Required |

### Artwork content guidelines

* Key art (graphic with the full title of the asset visible)

* No sexually explicit or graphically violent artwork

* Artwork should be post-theatrical and not include language such as “In Theaters Now” or “Coming Soon”

* Artwork designed specifically for digital delivery is preferred

* Artwork for international territories should be localized for each territory

**For content on TRC, Roku will not accept branded artwork without prior approval for any individual video asset nor for season/series entities.**

Object Example:

```json
{
  "thumbnail": "http://thumbnail.jpg"
}
```

## Linear Channel Branding and Policies

* Partners are permitted to have Logos, bugs and lower thirds in their channels

#### Content Expectations

* _Content Hours_: minimum of **150 hours of content**
* _Content per Hour:_ minimum of **50 minutes per hour** of content
* _Daily Refresh:_ **2 hours** minimum of refreshed content daily
* Content Recommendation
  * _Content Loop:_ minimum of **8 hours of content before loop**

#### Content Policy

* Content rated R and TV-MA is allowed only **between 9pm-5am Eastern Time**
* Public policy and political issues must be presented with accuracy, honesty and fairness
* Foreign Language Programming
  * _On English-language channels, subtitles **must** be included._
  * _No foreign-language (subtitled) programming allowed on Kids & Family channels._
* **Every program must have a rating**. If a program has an MPAA rating, the partner must use the MPAA rating for the program. If the program does not have an MPAA rating, the partner must use a TV Ratings (USA_PR) rating. See [Advisory Ratings object](#advisoryratings-property)

#### Slate Requirements

* Must be animated & have audio

* Must include the linear channel logo/branding

* Must include a countdown timer for the duration of the ad break
  * _Note: Countdown timer does not satisfy the animation requirement_

* Must include messaging to indicate a break is in progress and programming will resume shortly

* No CTA

* Cannot promote a channel outside of TRC

#### LiveFeed Promotion Guidelines

* Partners are not allowed to promote Partner content without explicit permission from TRC.
* Calls to action (CTAs) or links to external platforms or sites (including QR codes) are not permissible and must be removed from the video prior to delivery to Roku.

## Content types

### LiveFeed Content Type

Child object of root property liveFeeds.

This object represents a live linear stream. Please contact your Roku representative if you want to create a channel that streams live linear content.

| Field               | Type                                                 | Required  | Description                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ---------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | string                                               | Required  | Your immutable string reference ID for the live linear stream. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. **Note** : The ID for an asset must not exceed 50 characters.                                                                                                                                                    |
| title               | string                                               | Required  | The live stream's title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc.                                                                                                                                                                                                                                           |
| content             | [Content Object](#content-properties)                | Required  | Additional details about the livefeed, including the **program schedule** .                                                                                                                                                                                                                                                                                                                |
| thumbnail           | string                                               | Required  | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| shortDescription    | string                                               | Required  | A live stream description that does not exceed 200 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                              |
| longDescription     | string                                               | Required  | A longer live stream description that does not exceed 500 characters. The text will be clipped if longer. Must be different from shortDescription. No emojis.                                                                                                                                                                                                                              |
| validityPeriodStart | string                                               | Optional  | The date when the content should become available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. E.g.: 2018-11-11T22:21:37+00:00                                                                                                                                                                                |
| validityPeriodEnd   | string                                               | Optional  | The date when the content is no longer available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. E.g.: 2018-11-11T22:21:37+00:00 (set to a perpetuity date if possible)                                                                                                                                          |
| advisoryRatings     | [Advisory Ratings object](#advisoryratings-property) | Required* | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                            |
| genres              | string                                               | Required  | Array of genre strings for the channel. Must be one or more of the values listed in [genres](#genres-property) .                                                                                                                                                                                                                                                                           |
| tags                | string                                               | Optional  | One or more optional tags. Each tag is a string and is limited to 20 characters.*See [Kids-Directed content](#kids-directed-content) for tag requirements                                                                                                                                                                                                                                  |

Live Feed Object Example:

```
{
   "id":"1509428502953",
   "title":"Sample Stream",
   "content":{
      "..."
   },
   "language":{
      "en"
   },
   "thumbnail":"[https://example.org/cdn/thumbnails/1509428502952/1](https://example.org/cdn/thumbnails/1509428502952/2) ",
   "shortDescription":"A live description",
   "longDescription":"A longer description of a live stream",
   "genres":[
      "drama",
      "comedy",
      "horror"
   ],
   "tags":[
     "kidsdirected"
}
```

### Movie content type

Child object of root property `movies`.

This object represents a movie.

#### Movie ad policy

* No adBreaks should be listed during the first 10 minutes of program start
* No pre-roll adBreak should be listed - 00:00:00
* adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
* There should be no less than 10 minutes between each adBreak
* No adBreaks within 10 minutes of end credits.

| **Field**        | **Type**                                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the movie. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales and feeds from the same provider.<br />**Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric.                                                                                                        |
| title            | string                                               | Required     | Movie title. Roku uses this value for matching in Roku Search. Please use plain text and do not include extra information like year, version label, etc. No Emojis. Mixed case.                                                                                                                                                                                                            |
| genres           | string                                               | Required     | Array of genre strings for the movie. Must be one or more of the values listed in [genres](#genres-property) .                                                                                                                                                                                                                                                                             |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| releaseDate      | string                                               | Required     | The date the movie was initially released or first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}. E.g.: 2015-11-11                                                                                                                  |
| shortDescription | string                                               | Required     | A movie description that does not exceed 110 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                                    |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the movie.                                                                                                                                                                                                                                                                                                                                       |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                            |
| externalIds      | [External IDs Object](#externalids-property)         | Optional     | One or more third-party metadata provider IDs.                                                                                                                                                                                                                                                                                                                                             |

Movie Object Example:

```
{
   "id":"1509428502953",
   "title":"Sample Stream",
   "content":{
      "..."
   },
   "language":{
      "en"
   },
   "thumbnail":"https://example.org/cdn/thumbnails/1509428502952/1",
   "shortDescription":"A live description",
   "longDescription":"A longer description of a live stream",
   "genres":[
      "drama",
      "comedy",
      "horror"
   ],
   "tags":[
      "kidsdirected"
   ]
}

```

### Series content type

Child object of root property `series`.

This object represents a series, such as a season of a TV show or a mini-series.

| **Field**        | **Type**                                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the series. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales and feeds from the same provider.<br />**Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric.                                                                                                       |
| title            | string                                               | Required     | The title of the series. Roku uses this field for matching in Roku Search. No Emojis. Mixed case.                                                                                                                                                                                                                                                                                          |
| seasons          | [Season Object](#season-content-type)                | Required*    | One or more seasons of the series. Seasons should be used if episodes are grouped by seasons.                                                                                                                                                                                                                                                                                              |
| episodes         | [Episode Object](#episode-content-type)              | Required*    | One or more episodes of the series. Episodes should be used if they are not grouped by seasons (e.g., a mini-series).                                                                                                                                                                                                                                                                      |
| genres           | string                                               | Required     | Array of genre strings for the series. Must be one or more of the values listed in [genres](#genres-property) .                                                                                                                                                                                                                                                                            |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| releaseDate      | string                                               | Required     | The date the series first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}. E.g.: 2015-11-11                                                                                                                                            |
| shortDescription | string                                               | Required     | A description of the series that does not exceed 110 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                            |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                            |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the series.                                                                                                                                                                                                                                                                                                                                      |
| externalIds      | [External IDs Object](#externalids-property)         | Optional     | One or more third-party metadata provider IDs.                                                                                                                                                                                                                                                                                                                                             |

<Callout icon="🚧">
   *Must have either `seasons` or `episodes`
</Callout>

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

```json
{ "seasonNumber": 1, "episodes": [ ... ] }
```

### Episode content type

Child object of property:

* `series -> episodes`
* `series -> seasons -> episodes`

This object represents a single episode in a series or a season.

#### Episode ad policy

Content length longer than 15 minutes:

* No adBreaks should be listed during the first 4 mins of program start
* No pre-roll adBreak should be listed - 00:00:00
* adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
* There should be no less than 6 mins between each adBreak
* No adBreaks within the last 4 minutes of end credits

| **Field**        | **Type**                                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | string                                               | Required     | Your immutable string reference ID for the episode. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales and feeds from the same provider.<br />**Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric.                                                                                                              |
| title            | string                                               | Required     | Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.                                                                                                                                                                                                                                      |
| thumbnail        | string                                               | Required     | The URL of the thumbnail for the episode. This is used within your channel as a backup to series artwork and in search results where applicable.<br /><br />Landscape untitled key art in a JPEG file. Recommended image dimensions: 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| releaseDate      | string                                               | Required     | The date the episode first aired. Used to match program data to Gracenote counterpart. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}. E.g.: 2015-11-11                                                                                                                                                                                 |
| episodeNumber    | integer                                              | Required     | Sequential episode number. e.g.: 3                                                                                                                                                                                                                                                                                                                                                                 |
| shortDescription | string                                               | Required     | An episode description that does not exceed 110 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                                         |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the episode.                                                                                                                                                                                                                                                                                                                                             |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | An array of parental ratings for the content.<br />*See [Kids-Directed content](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                                    |
| externalIds      | [External Property](#externalids-property)           | Optional     | One or more third-party metadata provider IDs.                                                                                                                                                                                                                                                                                                                                                     |

Episode Object Example:

```
{ "id": "1509428502952", "title": "The Amazing First Episode Title", "content": { ... }, "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "episodeNumber": 1, "shortDescription": "Marvelous episode description" }
```

### ShortFormVideo content type

Child object of root property `shortFormVideos`.

Short-form videos are generally less than 15 minutes long, and are not TV Shows or Movies. Must be included in a composite EPG block of 15 mins or greater.

| **Field**        | **Type**                                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the video. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales and feeds from the same provider.<br />**Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric.                                                                                                        |
| title            | string                                               | Required     | Video title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.                                                                                                                                                                                                                                |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| shortDescription | string                                               | Required     | A description of the video that does not exceed 110 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                             |
| releaseDate      | string                                               | Required     | The date the video first became available. Used to sort programs chronologically and grouping related content in Roku Search.<br />Conforms to the [ISO 8601 ](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}. E.g.: 2015-11-11                                                                                                                            |
| genres           | string                                               | Optional     | Array of genre strings for the video. Must be one or more of the values listed in [genres](#genres-property) .                                                                                                                                                                                                                                                                             |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the video.                                                                                                                                                                                                                                                                                                                                       |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | A parental rating for the content.<br />*See [Kids-Directed content ](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                                      |

Short-form Video Object Example:

```
{ "id": "1509428502952", "title": "The Amazing Short-form Video", "content": { ... }, "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Astonishing short-form video", "releaseDate": "2016-01-01" }
```

### TvSpecial content type

Child object of root property `tvSpecials`.

#### TvSpecial ad policy

Content length longer than 15 minutes:

* No adBreaks should be listed during the first 4 mins of program start
* No pre-roll adBreak should be listed - 00:00:00
* adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
* There should be no less than 6 mins between each adBreak
* No adBreaks within the last 4 minutes of end credits

| **Field**        | **Type**                                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id               | string                                               | Required     | Your immutable string reference ID for the TV Special. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales and feeds from the same provider.<br />**Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric.                                                                                                   |
| title            | string                                               | Required     | Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.                                                                                                                                                                                                                              |
| thumbnail        | string                                               | Required     | The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br />**Make sure your CDN is using the following ContentType headers**<br />- image/jpeg<br />- image/jpg |
| genres           | string                                               | Required     | Array of genre strings for the special. Must be one or more of the values listed in [genres](#genres-property) .                                                                                                                                                                                                                                                                           |
| releaseDate      | string                                               | Required     | The date the TV Special first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}. E.g.: 2015-11-11                                                                                                                                        |
| shortDescription | string                                               | Required     | A description of the special that does not exceed 110 characters. The text will be clipped if longer. No emojis.                                                                                                                                                                                                                                                                           |
| credits          | [Credit Object](#credit-property)                    | Optional     | One or more credits. The cast and crew of the TV special.                                                                                                                                                                                                                                                                                                                                  |
| advisoryRatings  | [Advisory Ratings Object](#advisoryratings-property) | Required*    | A parental rating for the content.<br />*See [Kids-Directed content ](#kids-directed-content) for rating requirements                                                                                                                                                                                                                                                                      |
| externalIds      | [External IDs Property](#externalids-property)       | Optional     | One or more third-party metadata provider IDs.                                                                                                                                                                                                                                                                                                                                             |

TV Special Object Example:

```
{ "id": "1509428502952", "title": "The Amazing First Episode Title", "content": { ... }, "genres": [ "animals", "animated", "fantasy", ], "thumbnail": "https://example.org/cdn/thumbnails/1509428502952/1", "shortDescription": "Unusual episode description" }
```

### **Schedule object**

All linear feeds require a schedule as part of the livefeed content object.

| Field             | Type    | Required    | Description                                                                                                                                                                                                                                                                                                |
| ----------------- | ------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                | string  | Required    | Your immutable string reference ID to the program's content ID from its respective content type section. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. **Note** : The ID for an asset must not exceed 50 characters and must be alphanumeric. |
| durationInSeconds | integer | Required    | the duration in seconds that the program will run.                                                                                                                                                                                                                                                         |
| isLive            | boolean | Required    | true OR false - Identifies a program as a true live event.                                                                                                                                                                                                                                                 |
| date              | string  | Required    | Scheduled date for program to play. All times are UTC. Format: \{YYYY}-\{MM}-\{DD}                                                                                                                                                                                                                         |
| times             | string  | Required    | An array of start times in the particular day the program will start [ "HH:MM:SS" ]                                                                                                                                                                                                                        |
| attributes        | enum    | Recommended | May denote a number of badges to appear in the EPG UI next to a program's title. Currently, only "CC" for Closed Captions is supported.                                                                                                                                                                    |

Schedule object example

```json
{
    "id": "programId",
    "isLive": false,
    "date": "2020-01-13",
    "times": [
        "21:30:00"
    ],
    "durationInSeconds": 2760,
    "attributes": [
        "CC"
    ]
}
```

### EPG

EPG Requirement

8 days of full data (1 week forward and 24 Hours back) to populate the EPG

15-minute minimum duration for content block

For full details and guidance on constructing your EPG, please refer to this guide.

[https://developer.roku.com/en-ot/trc-docs/live-linear/epg-on-trc.md](https://developer.roku.com/en-ot/trc-docs/live-linear/epg-on-trc.md)

Notes:

* Please include the liveFeed as the first item in a feed.
* Only a title or a **TMS** ExternalID is required for programs referenced in a schedule. We will reject anything that's not a **valid** ExternalID.
* When referencing an episode, the parent items must also be in included ([series](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md#series) and [season](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md#season) when applicable). These parent items must be <strong><u>fully populated with required fields</u></strong> as specified in the [Roku Direct Publisher feed specification](/docs/specs/direct-publisher-feed-specs/json-dp-spec.md) or the series item must contain a valid External **TMS** id.

![roku400px - feedspecs-1](https://image.roku.com/ZHZscHItMTc2/feed-specs-1-v2.jpg)

#### EPG logos

**To be provided via .zip file to Roku**

| Logo                                     | Required | Resolution                               | Notes                                    |
| ---------------------------------------- | -------- | ---------------------------------------- | ---------------------------------------- |
| Program Guide channel Identifier (light) | Required | 114x60 pixels                            | Needs to read well on a black background |
| Program Guide channel Identifier (dark)  | Required | 114x60 pixels                            | Needs to read well on a white background |
| Info HUD channel Identifier              | Required | 260x147 (**MUST** be hex color #efefef ) |                                          |

For EPG Spine

* 1 logo for white background, 1 for black background (can be the same image if reads well on both backgrounds).
* Logos need to be transparent PNGs
* 114 pixels wide x 60 pixels tall
* Center aligned on the horizontal & vertical axis
* 3 pixel top and bottom border

For Info HUD

* Logos need to be transparent PNGs
* Logos need to be monochromatic hex #efefef
* 260 pixels wide x 147 pixels tall
* 1x logo center aligned

Feed Example:

```json
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
                            "10:00:00"
                        ]
                    },
                    {
                        "id": "episode-id-1",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "12:00:00",
                            "16:00:00"
                        ]
                    },
                    {
                        "id": "shortformvideo-id-1",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "14:00:00"
                        ]
                    },
                    {
                        "id": "tvspecial-id-1",
                        "durationInSeconds": 7200,
                        "isLive": true,
                        "date": "2018-04-05",
                        "times": [
                            "18:00:00"
                        ]
                    },
                    {
                        "id": "movie-id-2",
                        "durationInSeconds": 3600,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "20:00:00"
                        ]
                    },
                    {
                        "id": "movie-id-3",
                        "durationInSeconds": 7200,
                        "isLive": false,
                        "date": "2018-04-05",
                        "times": [
                            "21:00:00"
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
            "releaseDate": "1999-02-13",
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
            "genres": [
                "animals",
                "animated",
                "fantasy"
            ]
        }
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

| **Field**       | **Type**                                             | **Required** | **Description**                                                                                                                                                                                               |
| --------------- | ---------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tags            | string                                               | Required     | Include a "kidsdirected" tag into the tags string * _all lowercase_<br />- This is how you flag to Roku that the content is Kids-Directed Content<br />- Do not include this tag in non-Kids-Directed Content |
| advisoryRatings | [Advisory Ratings Object](#advisoryratings-property) | Required     | A parental rating for the content. (MPAA or TV Rating).<br />- 'Unrated' and "Not Rated" are not accepted ratings for Kids-Directed Content                                                                   |

The following additional obligations apply to all live linear streams that include Kids-Directed Content:

You will only include Kids-Directed Content in a live linear stream if that live linear stream is (and will always be) comprised exclusively of Kids-Directed Content. Do not mingle Kids-Directed Content and non-Kids-Directed Content in a live linear feed.

You will provide a single TV content rating in the Rating Object reflecting the most restrictive rating of all Kids-Directed Content that will be available on the live linear feed.

Additional kidsdirected guidelines

A `kidsdirected` tag should be inserted for any channel that is directed to children, based on a variety of factors, including the following:

Ratings which designate the content as designed to be appropriate for children

Allowable ratings: Rating = TVPG, PG, TVY, TVY7, TVG, G TVY and TVY7 are reserved for kidsDirected channels only Content subject matter (e.g., teaching the alphabet) Visual content (e.g., unicorns) Use of animated characters (e.g., My Little Pony) Child-oriented activities and incentives Music or other audio content designed for children (e.g., nursery rhymes) Young age of models (e.g., toddlers) Presence of child celebrities or celebrities who appeal to children Language or other characteristics of the content that target children Whether advertising appearing with the content is directed to children Whether your intended audience for the content is children Whether you have competent and reliable empirical evidence that your audience composes primarily of children

## Content properties

### Content property

Child object of property:

* `liveFeed`

This object represents the details about the liveFeed

| **Field**           | **Type**                            | **Required** | **Description**                                                                                                                                                                                                                                                              |
| ------------------- | ----------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateAdded           | string                              | Required     | The date the liveFeed was added to the library in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. E.g.: 2015-11-11T22:21:37+00:00 This information is used to generate the “Recently Added” category. |
| language            | string                              | Required     | The language in which the feed is intended (e.g., “en”, “en-US”, “es”, etc). ISO 639 alpha-2 or alpha-3 language code string.                                                                                                                                                |
| validityPeriodStart | string                              | Optional     | The date when the content should become available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. E.g.: 2015-11-11T22:21:37+00:00                                                                  |
| validityPeriodEnd   | string                              | Optional     | The date when the content is no longer available in the [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format: \{YYYY}-\{MM}-\{DD}T\{hh}:\{mm}:\{ss}+\{TZ}. E.g.: 2015-11-11T22:21:37+00:00                                                                   |
| schedule            | [Schedule Object](#schedule-object) | Required     | A chronological listing of program start times and durations referencing objects in other content type sections (movies, series, shortFormVideos, tvSpecials)                                                                                                                |

Content Object Example:

```json
{ "dateAdded": "2015-11-11T22:21:37+00:00", "language": "es", "schedule": [...], "validityPeriodStart": "2020-03-13", "validityPeriodEnd": "2100-03-12"}
```

### Genres property

The following genres are supported:

<Table align={["left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        1. <br />
      </th>

      <th>
        2. <br />
      </th>

      <th>
        3. <br />
      </th>

      <th>
        4. <br />
      </th>

      <th>
        5. <br />
      </th>

      <th>
        6. <br />
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * action<br />- action sports<br />- adventure<br />- aerobics<br />- agriculture<br />- animals<br />- animated<br />- anime<br />- anthology<br />- archery<br />- arm wrestling<br />- art<br />- arts/crafts<br />- artistic gymnastics<br />- artistic swimming<br />- athletics<br />- auction<br />- auto<br />- auto racing<br />- aviation<br />- awards<br />- badminton<br />- ballet<br />- baseball<br />- basketball<br />- 3x3 basketball<br />- beach soccer<br />- beach volleyball<br />- biathlon<br />- bicycle<br />- bicycle racing<br />- billiards<br />- biography<br />- blackjack<br />- bmx racing<br />- boat<br />- boat racing<br />- bobsled
      </td>

      <td>
        * bodybuilding<br />- bowling<br />- boxing<br />- bullfighting<br />- bus./financial<br />- canoe<br />- card games<br />- ceremony<br />- cheerleading<br />- children<br />- children-music<br />- children-special<br />- children-talk<br />- collectibles<br />- comedy<br />- comedy drama<br />- community<br />- computers<br />- canoe/kayak<br />- consumer<br />- cooking<br />- cricket<br />- crime<br />- crime drama<br />- curling<br />- cycling<br />- dance<br />- dark comedy<br />- darts<br />- debate<br />- diving<br />- docudrama<br />- documentary<br />- dog racing<br />- dog show<br />- dog sled<br />- drag racing<br />- drama
      </td>

      <td>
        * educational<br />- entertainment<br />- environment<br />- equestrian<br />- erotic<br />- event<br />- exercise<br />- fantasy<br />- faith<br />- fashion<br />- fencing<br />- field hockey<br />- figure skating<br />- fishing<br />- football<br />- food<br />- fundraiser<br />- gaelic football<br />- game show<br />- gaming<br />- gay/lesbian<br />- golf<br />- gymnastics<br />- handball<br />- health<br />- historical drama<br />- history<br />- hockey<br />- holiday<br />- holiday music<br />- holiday music special<br />- holiday special<br />- holiday-children<br />- holiday-children special<br />- home improvement<br />- horror<br />- horse<br />- house/garden
      </td>

      <td>
        * how-to<br />- hunting<br />- hurling<br />- hydroplane racing<br />- indoor soccer<br />- interview<br />- intl soccer<br />- judo<br />- karate<br />- kayaking<br />- lacrosse<br />- law<br />- live<br />- luge<br />- martial arts<br />- medical<br />- military<br />- miniseries<br />- mixed martial arts<br />- modern pentathlon<br />- motorcycle<br />- motorcycle racing<br />- motorsports<br />- mountain biking<br />- music<br />- music special<br />- music talk<br />- musical<br />- musical comedy<br />- mystery<br />- nature<br />- news<br />- newsmagazine<br />- olympics<br />- opera<br />- outdoors<br />- parade<br />- paranormal
      </td>

      <td>
        * parenting<br />- performing arts<br />- playoff sports<br />- poker<br />- politics<br />- polo<br />- pool<br />- pro wrestling<br />- public affairs<br />- racquet<br />- reality<br />- religious<br />- ringuette<br />- road cycling<br />- rodeo<br />- roller derby<br />- romance<br />- romantic comedy<br />- rowing<br />- rugby<br />- running<br />- rhythmic gymnastics<br />- sailing<br />- science<br />- science fiction<br />- self improvement<br />- shooting<br />- shopping<br />- sitcom<br />- skateboarding<br />- skating<br />- skeleton<br />- skiing<br />- snooker<br />- snowboarding<br />- snowmobile<br />- soap<br />- soap special
      </td>

      <td>
        * soap talk<br />- soccer<br />- softball<br />- special<br />- speed skating<br />- sport climbing<br />- sports<br />- sports talk<br />- squash<br />- standup<br />- sumo wrestling<br />- surfing<br />- suspense<br />- swimming<br />- table tennis<br />- taekwondo<br />- talk<br />- technology<br />- tennis<br />- theater<br />- thriller<br />- track/field<br />- track cycling<br />- travel<br />- trampoline<br />- triathlon<br />- variety<br />- volleyball<br />- war<br />- water polo<br />- water skiing<br />- watersports<br />- weather<br />- weightlifting<br />- western<br />- wrestling<br />- yacht racing
      </td>
    </tr>
  </tbody>
</Table>

### ExternalIds property

Child object of property:

* `movie`
* `series`
* `series -> episodes -> episode`
* `series -> seasons -> episodes -> episode`
* `shortFormVideo`
* `tvSpecial`

This object represents a third-party metadata provider ID (such as TMS, Rovi, IMDB, EIDR) that can provide more information about a specific video content. This metadata optimizes the opportunity for your content to be discovered by Roku search and to provide more details to users.

| **Field** | **Type** | **Required** | **Description**                                                                                                                                                                                                                                                                                     |
| --------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | string   | Required     | The third-party metadata provider ID for your video content. For example, in the case of IMDB you would use the last part of the URL of a movie such as "[http://www.imdb.com/title/tt0371724](http://www.imdb.com/title/tt0371724)".                                                               |
| idType    | enum     | Required     | Must be one of the following:<br />- TMS – A Tribune Metadata Service ID for the content. Roku recommends using TMS and will associate these IDs for you.<br />- ROVI - A Rovi ID for the content<br />- IMDB – An Internet Movie Database ID<br />- EIDR – An Entertainment Identifier Registry ID |

External IDs Object Example:

```
{ "id": "123456789", "idType": "TMS" }, 

{ "id": "tt0371724", "idType": "IMDB" }, 

{ "id": "10.5240/48A5-E3C5-6B11-D874-FD2B-V", "idType": "EIDR" }
```

### AdvisoryRatings property

Child object of property:

* `movie`
* `series -> episodes -> episode`
* `shortFormVideo`
* `tvSpecial`
* `livefeed`

This object represents the ratings across multiple territories for the video content. You can define the parental rating, as well as the source (USA Parental Rating, UK Content Provider, etc). See Parental Ratings and Rating Sources for acceptable values.

| Field  | Type | Required | Description                                                                                                                                   |
| ------ | ---- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | enum | Required | Must be a value listed in [Parental Ratings](#accepted-parental-ratings) .<br />Do not include any content targeted specifically to children. |
| source | enum | Required | Must be one or more of the following:<br />- BBFC<br />- CHVRS<br />- CPR<br />- MPAA<br />- USA_PR<br />- RTC<br />- ACB<br />- CLASSIND     |

UK content - rating is required**. If there is no BBFC rating, please note a content rating of 'NR'

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

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Source
      </th>

      <th>
        USA_PR (USA Parental Rating)
      </th>

      <th>
        MPAA (Motion Picture Association of America)
      </th>

      <th>
        CHVRS (Canadian Home Video Rating System)
      </th>

      <th>
        CPR (Canadian Parental Rating)
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Rating
      </td>

      <td>
        * TV-Y<br />- TVY<br />- TV-Y7<br />- TVY7<br />- TV-G<br />- TVG<br />- TV-PG<br />- TVPG<br />- TV-14<br />- TV14<br />- TV-MA<br />- TVMA
      </td>

      <td>
        * G<br />- PG<br />- PG13<br />- PG-13<br />- R<br />- NC-17<br />- NC17<br />- UR
      </td>

      <td>
        * G<br />- PG<br />- 14A<br />- 14-A<br />- 18A<br />- 18-A<br />- R<br />- E
      </td>

      <td>
        * 14+<br />- 18+<br />- C<br />- C8<br />- C-8<br />- G<br />- PG<br />- E
      </td>
    </tr>

    <tr>
      <td>
        **Source**
      </td>

      <td>
        **RTC (General Directorate of Radio Television and Cinematography) - Mexico**
      </td>

      <td>
        **BBFC (British Board of Film Classification)**
      </td>

      <td>
        **ACB (Australian Classification Board)**
      </td>

      <td>
        **CLASSIND (Classificação Indicativa) - Brazil**
      </td>
    </tr>

    <tr>
      <td>
        Rating
      </td>

      <td>
        * AA<br />- A<br />- B<br />- B-15<br />- B15<br />- C<br />- D
      </td>

      <td>
        * U<br />- PG<br />- 12A<br />- 12-A<br />- 12<br />- 15<br />- 18<br />- R18<br />- R-18
      </td>

      <td>
        * E<br />- G<br />- PG<br />- M<br />- MA 15+<br />- R 18+<br />- X 18+<br />- AV 15+<br />- C<br />- NC<br />- RC
      </td>

      <td>
        * L<br />- 10<br />- 12<br />- 14<br />- 16<br />- 18<br />- AL<br />- A10<br />- A12<br />- A14<br />- A16<br />- A18
      </td>
    </tr>
  </tbody>
</Table>

### Rating source property

These are the accepted values for the `ratingSource` property:

* BBFC - British Board of Film Classification
* CHVRS - Canadian Home Video Rating System
* CPR - Canadian Parental Rating
* MPAA - Motion Picture Association of America
* USA_PR - USA Parental Rating
* RTC - General Directorate of Radio Television and Cinematography - Mexico
* ACB - Australian Classification Board
* CLASSIND - Classificação Indicativa - Brazil

### Credit property

Child object of property:

* `movie`
* `series`
* `series -> episodes -> episode`
* `shortFormVideo`
* `tvSpecial`

This object represents a single person in the credits of a video content.

| Field | Type   | Required | Description                                                                                                                                                                       |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name  | string | Required | name of the person                                                                                                                                                                |
| role  | enum   | Required | role of the person - must be one of the following values:<br />- actor<br />- anchor<br />- host<br />- narrator<br />- voice<br />- director<br />- producer<br />- screenwriter |

Credit Object Example:

```
{ "name": "Douglas N. Adams", "role": "screenwriter", "birthDate": "1952-03-11" }
```

<br />
