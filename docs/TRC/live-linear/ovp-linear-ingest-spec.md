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


<table>
<thead>
<tr>
<th><strong>Description</strong></th>
<th><strong>Specification</strong></th>
<th><strong>Preferred</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Delivery Method</td>
<td><ul><li>AWS Media Connect Entitlement<em></li><li>Zixi Push</em></li><li>SRT<em></li><li>Push IP and Port number will be provided to LCP/partner</li><li>RTP w/FEC Push</li><li>RTMP Push</li><li>Push URL will be provided to LCP/partner</li></ul><br /></em><em>Support AES Decryption</em></td>
<td>AWS Media Connect Entitlement</td>
</tr>
<tr>
<td>Container</td>
<td>TS over IP</td>
<td>TS over IP</td>
</tr>
<tr>
<td>Video Codec</td>
<td><pre><code>- MPEG-2<br />- H.264<br />- H.265</code></pre></td>
<td>H.264</td>
</tr>
<tr>
<td>Audio Codec</td>
<td><pre><code>- AAC<br />- MPEG Audio<br />- Dolby Digital (AC3 2.0 + 5.1)<br />- PCM</code></pre></td>
<td>AAC</td>
</tr>
<tr>
<td>Video Resolution</td>
<td><ul><li>HD - 1920 x 1080</li><li>SD 720 x 480</li></ul></td>
<td>HD - 1920 x 1080</td>
</tr>
<tr>
<td>Video Frame Rate</td>
<td><ul><li>23.97</li><li>24</li><li>25</li><li>29.97</li><li>30 </li><li>59.94</li><li>60</li></ul></td>
<td>any</td>
</tr>
<tr>
<td>Audio Bitrate</td>
<td><ul><li>128 Kbps (min)</li><li>320 Kbps (max)</li></ul></td>
<td>within range</td>
</tr>
<tr>
<td>Overall Bitrate</td>
<td><ul><li>HD - 12 Mbps (min)</li><li>SD - 6 Mbps (min)</li></ul></td>
<td>Above 12 Mbps</td>
</tr>
<tr>
<td>Bitrate Mode</td>
<td>CBR</td>
<td>CBR</td>
</tr>
<tr>
<td>Video Interlacing</td>
<td>Progressive Scan</td>
<td>Progressive Scan</td>
</tr>
<tr>
<td>Audio Sampling Rate</td>
<td>48 kHz</td>
<td>48 kHz</td>
</tr>
<tr>
<td>Audio Channels</td>
<td>Stereo</td>
<td>Stereo</td>
</tr>
<tr>
<td>Closed Captions</td>
<td>CEA 608/708 (embedded)</td>
<td>CEA 608/708 (embedded)</td>
</tr>
<tr>
<td>Aspect Ratio</td>
<td><ul><li>HD - 16:9</li><li>SD - 4:3</li></ul></td>
<td>HD - 16:9</td>
</tr>
<tr>
<td>Ad Insertion Points (if applicable)</td>
<td>SCTE-35 Markers In Stream via any of the following:<br /><ul><li><strong>Splice_Insertion</strong></li><li>Start and Duration is required</li><li>If scte35:SpliceInsert, outOfNetworkIndicator must be set to <strong>true</strong></li><li><strong>Time Signal</strong></li><li>Start and Duration is required</li><li>If scte35:TimeSignal, then accompany by scte35:SegmentationDescriptor scte35:SegmentationUpid with segmentationTypeId set to <strong>one</strong> of the following cue-out numbers:<ul><li>0x22 (start break)</li><li>0x30 (provider advertisement start)</li><li>0x32 (distributor advertisement start)</li><li>0x34 (provider placement opportunity start)</li><li>0x36 (distributor placement opportunity start)</li></ul></li></ul></td>
<td>Splice_Insertion</td>
</tr>
<tr>
<td>Special ad support</td>
<td>Squeezebacks<em> (coming soon) <br /></em><strong>Requires Roku approval</strong></td>
<td></td>
</tr>
<tr>
<td>Ad policy</td>
<td><ul><li><p>Partners should not serve any ads in the channel other than the ones returned by the Roku SSAI, unless explicitly agreed in the contract.</p></li><li><p>Partners should adhere to the below ad length requirements:</p></li><li>General Audience<ul><li>8 minutes of ads per hour</li><li>Minimum 4 ads and maximum of 6 ads per pod</li><li>Ad pod length of 2 minutes</li><li>Duration between ad breaks of at least 10 minutes</li></ul></li><li>Kids<ul><li>6 minutes of ads per hour</li><li>Minimum 3 ads and maximum of 6 ads per pods</li><li>Ad pod length of 90 seconds</li><li>Duration between ad breaks of at least 10 minutes</li><li>Bumper/lead-in identifying ad break before AND after ad pods occur (6 second maximum)</li><li>Example: "We'll be right back after this break", "Now back to the show"</li></ul></li><li>Flexibility around the ad policy is provided during live events. Please discuss this with your Roku rep.</li></ul><p>{#adqueuepoints}</p><ul><li>Avoid placing ad breaks that interrupt dialogue</li><li>Avoid ad breaks that interrupt a major action/dramatic scene</li><li>Ad breaks should be placed with frame accuracy in logical ad break points (ex. fades to black, scene transitions, etc)</li></ul><br />**<em> Do not include pixels, third-party tags, or Software Development Kits of any kind without express prior written approval and certification by Roku.</em></td>
<td></td>
</tr>
<tr>
<td>Ad queue points quality</td>
<td>${adqueuepoints}</td>
<td></td>
</tr>
</tbody>
</table>












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


<table>
<thead>
<tr>
<th><strong>Field/Root Property</strong></th>
<th><strong>Content Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>providerName</td>
<td>string</td>
<td>Required</td>
<td>The name of the feed provider. For instance, “Acme Productions” as shown in the template below.</td>
</tr>
<tr>
<td>lastUpdated</td>
<td>string</td>
<td>Required</td>
<td>The date that the feed was last modified in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 </a>format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. For instance, "2015-11-11T22:21:37+00:00" as shown in the template below.</td>
</tr>
<tr>
<td>language</td>
<td>string</td>
<td>Required</td>
<td>The language the channel uses for all its information and descriptions in an ISO 639 alpha-2 or alpha-3 language code string. For instance, “en-US” as shown in the template below.</td>
</tr>
<tr>
<td>liveFeeds</td>
<td><a href="#livefeed-content-type">LiveFeed Object</a></td>
<td>Required</td>
<td>A list of one or more live linear schedules.<br /><strong><em>Generally, only one liveFeed schedule per channel delivery should be present in the JSON. For bulk channel deliveries, please consult your Roku rep.</em></strong></td>
</tr>
<tr>
<td>movies</td>
<td><a href="#movie-content-type">Movie Object</a></td>
<td>Required*</td>
<td>A list of one or more movies.</td>
</tr>
<tr>
<td>series</td>
<td><a href="#series-content-type">Series Object</a></td>
<td>Required*</td>
<td>A list of one or more series. Series are episodic in nature and would include TV shows and daily or weekly ongoing shows.</td>
</tr>
<tr>
<td>shortFormVideos</td>
<td><a href="#shortformvideo-content-type">ShortFormVideo Object</a></td>
<td>Required*</td>
<td>A list of one or more short-form videos. Short-form videos are usually less than 20 minutes long and are not TV shows or movies.</td>
</tr>
<tr>
<td>tvSpecials</td>
<td><a href="#tvspecial-content-type">TV Special Object</a></td>
<td>Required*</td>
<td>A list of one or more TV specials. TV specials are one-time TV programs that are not part of a series.</td>
</tr>
</tbody>
</table>


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


<table>
<thead>
<tr>
<th><strong>Image Type</strong></th>
<th><strong>Description</strong></th>
<th><strong>Resolution</strong></th>
<th><strong>Aspect Ratio</strong></th>
<th><strong>Required/Optional</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>key art</td>
<td>Image with title treatment</td>
<td>1920x1080</td>
<td>16:9</td>
<td>Movie: Required<br />Series: Required</td>
</tr>
</tbody>
</table>


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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the live linear stream. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. <strong>Note</strong>: The ID for an asset must not exceed 50 characters.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>The live stream's title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc.</td>
</tr>
<tr>
<td>content</td>
<td><a href="#content-properties">Content Object</a></td>
<td>Required</td>
<td>Additional details about the livefeed, including the <strong>program schedule</strong>.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><p>Live Feed Object Example:</p><p>{ "id": "1509428502953", "title": "Sample Stream", "content": { ... }, "language": { "en" }, "thumbnail": "<a href="https://example.org/cdn/thumbnails/1509428502952/2">https://example.org/cdn/thumbnails/1509428502952/1</a>", "shortDescription": "A live description", "longDescription": "A longer description of a live stream","genres": [ "drama", "comedy", "horror" ],"tags": [ "kidsdirected" ] }</td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>A live stream description that does not exceed 200 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>longDescription</td>
<td>string</td>
<td>Required</td>
<td>A longer live stream description that does not exceed 500 characters. The text will be clipped if longer. Must be different from shortDescription. No emojis.</td>
</tr>
<tr>
<td>validityPeriodStart</td>
<td>string</td>
<td>Optional</td>
<td>The date when the content should become available in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2018-11-11T22:21:37+00:00</td>
</tr>
<tr>
<td>validityPeriodEnd</td>
<td>string</td>
<td>Optional</td>
<td>The date when the content is no longer available in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2018-11-11T22:21:37+00:00 (set to a perpetuity date if possible)</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings object</a></td>
<td>Required*</td>
<td>An array of parental ratings for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content</a> for rating requirements</td>
</tr>
<tr>
<td>genres</td>
<td>string</td>
<td>Required</td>
<td>Array of genre strings for the channel. Must be one or more of the values listed in <a href="#genres-property">genres</a>.</td>
</tr>
<tr>
<td>tags</td>
<td>string</td>
<td>Optional</td>
<td>One or more optional tags. Each tag is a string and is limited to 20 characters.*See <a href="#kids-directed-content">Kids-Directed content</a> for tag requirements</td>
</tr>
</tbody>
</table>



### Movie content type

Child object of root property `movies`.

This object represents a movie.

#### Movie ad policy

- No adBreaks should be listed during the first 10 minutes of program start
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 10 minutes between each adBreak
- No adBreaks within 10 minutes of end credits.


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the movie. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br /><strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>Movie title. Roku uses this value for matching in Roku Search. Please use plain text and do not include extra information like year, version label, etc. No Emojis. Mixed case.</td>
</tr>
<tr>
<td>genres</td>
<td>string</td>
<td>Required</td>
<td>Array of genre strings for the movie. Must be one or more of the values listed in <a href="#genres-property">genres</a>.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><p>Movie Object Example:</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;Sample Movie&quot;, &quot;content&quot;: \{ ... \}, &quot;genres&quot;: [ &quot;drama&quot;, &quot;comedy&quot;, &quot;horror&quot; ], &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;releaseDate&quot;: &quot;2016-01-01&quot;, &quot;shortDescription&quot;: &quot;Incredible movie description&quot;, &quot;longDescription&quot;: &quot;Even more incredible and longer movie description&quot;, &quot;tags&quot;: [ &quot;amazing&quot;, &quot;drama&quot;, &quot;comedy&quot;, &quot;horror&quot; ] \}</code></pre></td>
</tr>
<tr>
<td>releaseDate</td>
<td>string</td>
<td>Required</td>
<td>The date the movie was initially released or first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 </a>format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11</td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>A movie description that does not exceed 110 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>credits</td>
<td><a href="#credit-property">Credit Object</a></td>
<td>Optional</td>
<td>One or more credits. The cast and crew of the movie.</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required*</td>
<td>An array of parental ratings for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content</a> for rating requirements</td>
</tr>
<tr>
<td>externalIds</td>
<td><a href="#externalids-property">External IDs Object</a></td>
<td>Optional</td>
<td>One or more third-party metadata provider IDs.</td>
</tr>
</tbody>
</table>



### Series content type

Child object of root property `series`.

This object represents a series, such as a season of a TV show or a mini-series.


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the series. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br /><strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>The title of the series. Roku uses this field for matching in Roku Search. No Emojis. Mixed case.</td>
</tr>
<tr>
<td>seasons</td>
<td><a href="#season-content-type">Season Object</a></td>
<td>Required*</td>
<td>One or more seasons of the series. Seasons should be used if episodes are grouped by seasons.</td>
</tr>
<tr>
<td>episodes</td>
<td><a href="#episode-content-type">Episode Object</a></td>
<td>Required*</td>
<td>One or more episodes of the series. Episodes should be used if they are not grouped by seasons (e.g., a mini-series).</td>
</tr>
<tr>
<td>genres</td>
<td>string</td>
<td>Required</td>
<td>Array of genre strings for the series. Must be one or more of the values listed in <a href="#genres-property">genres</a>.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><blockquote><p><em><em>Must have either</em> </em><code>seasons</code><em> </em>or<em> </em><code>episodes</code>*</p></blockquote><p>Series Object Example (seasons):</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;The Amazing Series with Seasons!&quot;, &quot;seasons&quot;: [ ... ], &quot;genres&quot;: [ &quot;educational&quot;, &quot;science fiction&quot;, &quot;thriller&quot;, ], &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;shortDescription&quot;: &quot;Wondrous series seasons.&quot; \}</code></pre><p>Series Object Example (mini-series):</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;The Amazing Series with Episodes Only!&quot;, &quot;episodes&quot;: [ ... ], &quot;genres&quot;: [ &quot;fashion&quot;, &quot;romance&quot;, &quot;technology&quot;, ], &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;shortDescription&quot;: &quot;Unbelievables series episodes.&quot; \}</code></pre></td>
</tr>
<tr>
<td>releaseDate</td>
<td>string</td>
<td>Required</td>
<td>The date the series first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11</td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>A description of the series that does not exceed 110 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required*</td>
<td>An array of parental ratings for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content</a> for rating requirements</td>
</tr>
<tr>
<td>credits</td>
<td><a href="#credit-property">Credit Object</a></td>
<td>Optional</td>
<td>One or more credits. The cast and crew of the series.</td>
</tr>
<tr>
<td>externalIds</td>
<td><a href="#externalids-property">External IDs Object</a></td>
<td>Optional</td>
<td>One or more third-party metadata provider IDs.</td>
</tr>
</tbody>
</table>



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


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the episode. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br /><strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the thumbnail for the episode. This is used within your channel as a backup to series artwork and in search results where applicable.<br /><br />Landscape untitled key art in a JPEG file. Recommended image dimensions: 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><p>Episode Object Example:</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;The Amazing First Episode Title&quot;, &quot;content&quot;: \{ ... \}, &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;episodeNumber&quot;: 1, &quot;shortDescription&quot;: &quot;Marvelous episode description&quot; \}</code></pre></td>
</tr>
<tr>
<td>releaseDate</td>
<td>string</td>
<td>Required</td>
<td>The date the episode first aired. Used to match program data to Gracenote counterpart. Conforms to the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11</td>
</tr>
<tr>
<td>episodeNumber</td>
<td>integer</td>
<td>Required</td>
<td>Sequential episode number. e.g.: 3</td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>An episode description that does not exceed 110 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>credits</td>
<td><a href="#credit-property">Credit Object</a></td>
<td>Optional</td>
<td>One or more credits. The cast and crew of the episode.</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required*</td>
<td>An array of parental ratings for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content</a> for rating requirements</td>
</tr>
<tr>
<td>externalIds</td>
<td><a href="#externalids-property">External Property</a></td>
<td>Optional</td>
<td>One or more third-party metadata provider IDs.</td>
</tr>
</tbody>
</table>



### ShortFormVideo content type

Child object of root property `shortFormVideos`.

Short-form videos are generally less than 15 minutes long, and are not TV Shows or Movies. Must be included in a composite EPG block of 15 mins or greater.


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the video. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br /><strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>Video title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><p>Short-form Video Object Example:</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;The Amazing Short-form Video&quot;, &quot;content&quot;: \{ ... \}, &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;shortDescription&quot;: &quot;Astonishing short-form video&quot;, &quot;releaseDate&quot;: &quot;2016-01-01&quot; \}</code></pre></td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>A description of the video that does not exceed 110 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>releaseDate</td>
<td>string</td>
<td>Required</td>
<td>The date the video first became available. Used to sort programs chronologically and grouping related content in Roku Search.<br />Conforms to the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 </a>format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11</td>
</tr>
<tr>
<td>genres</td>
<td>string</td>
<td>Optional</td>
<td>Array of genre strings for the video. Must be one or more of the values listed in <a href="#genres-property">genres</a>.</td>
</tr>
<tr>
<td>credits</td>
<td><a href="#credit-property">Credit Object</a></td>
<td>Optional</td>
<td>One or more credits. The cast and crew of the video.</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required*</td>
<td>A parental rating for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content </a>for rating requirements</td>
</tr>
</tbody>
</table>



### TvSpecial content type

Child object of root property `tvSpecials`.

#### TvSpecial ad policy

Content length longer than 15 minutes:

- No adBreaks should be listed during the first 4 mins of program start
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 6 mins between each adBreak
- No adBreaks within the last 4 minutes of end credits


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID for the TV Special. THIS CANNOT CHANGE. This should serve as a unique identifier for the movie across different locales.<br /><strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>Required</td>
<td>Episode title. Roku uses this value for matching in Roku Search. Please don’t include extra information like year, version label, etc. No Emojis. Mixed case.</td>
</tr>
<tr>
<td>thumbnail</td>
<td>string</td>
<td>Required</td>
<td>The URL of the primary thumbnail for the live stream. This is used within your channel and in search results.<br /><br />Landscape key art with the full title of the asset visible in a JPEG file. Image dimensions must be 1920x1080 (width x height, 16x9 aspect ratio)<br /><br /><strong>Make sure your CDN is using the following ContentType headers</strong><br /><ul><li>image/jpeg</li><li>image/jpg</li></ul><p>TV Special Object Example:</p><pre><code>\{ &quot;id&quot;: &quot;1509428502952&quot;, &quot;title&quot;: &quot;The Amazing First Episode Title&quot;, &quot;content&quot;: \{ ... \}, &quot;genres&quot;: [ &quot;animals&quot;, &quot;animated&quot;, &quot;fantasy&quot;, ], &quot;thumbnail&quot;: &quot;https://example.org/cdn/thumbnails/1509428502952/1&quot;, &quot;shortDescription&quot;: &quot;Unusual episode description&quot; \}</code></pre></td>
</tr>
<tr>
<td>genres</td>
<td>string</td>
<td>Required</td>
<td>Array of genre strings for the special. Must be one or more of the values listed in <a href="#genres-property">genres</a>.</td>
</tr>
<tr>
<td>releaseDate</td>
<td>string</td>
<td>Required</td>
<td>The date the TV Special first aired. Used to sort programs chronologically and grouping related content in Roku Search. Conforms to the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}. E.g.: 2015-11-11</td>
</tr>
<tr>
<td>shortDescription</td>
<td>string</td>
<td>Required</td>
<td>A description of the special that does not exceed 110 characters. The text will be clipped if longer. No emojis.</td>
</tr>
<tr>
<td>credits</td>
<td><a href="#credit-property">Credit Object</a></td>
<td>Optional</td>
<td>One or more credits. The cast and crew of the TV special.</td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required*</td>
<td>A parental rating for the content.<br />*See <a href="#kids-directed-content">Kids-Directed content </a>for rating requirements</td>
</tr>
<tr>
<td>externalIds</td>
<td><a href="#externalids-property">External IDs Property</a></td>
<td>Optional</td>
<td>One or more third-party metadata provider IDs.</td>
</tr>
</tbody>
</table>



### **Schedule object**

All linear feeds require a schedule as part of the livefeed content object.


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>Your immutable string reference ID to the program's content ID from its respective content type section. THIS CANNOT CHANGE. This should serve as a unique identifier for the live stream across different locales. <strong>Note</strong>: The ID for an asset must not exceed 50 characters and must be alphanumeric.</td>
</tr>
<tr>
<td>durationInSeconds</td>
<td>integer</td>
<td>Required</td>
<td>the duration in seconds that the program will run.</td>
</tr>
<tr>
<td>isLive</td>
<td>boolean</td>
<td>Required</td>
<td>true OR false - Identifies a program as a true live event.</td>
</tr>
<tr>
<td>date</td>
<td>string</td>
<td>Required</td>
<td>Scheduled date for program to play. All times are UTC. Format: {YYYY}-{MM}-{DD}</td>
</tr>
<tr>
<td>times</td>
<td>string</td>
<td>Required</td>
<td>An array of start times in the particular day the program will start [ "HH:MM:SS" ]</td>
</tr>
<tr>
<td>attributes</td>
<td>enum</td>
<td>Recommended</td>
<td>May denote a number of badges to appear in the EPG UI next to a program's title. Currently, only "CC" for Closed Captions is supported.</td>
</tr>
</tbody>
</table>


Schedule object example

    \{
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
    \}

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


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>tags</td>
<td>string</td>
<td>Required</td>
<td>Include a "kidsdirected" tag into the tags string *<em>all lowercase</em><br /><ul><li>This is how you flag to Roku that the content is Kids-Directed Content</li><li>Do not include this tag in non-Kids-Directed Content</li></ul></td>
</tr>
<tr>
<td>advisoryRatings</td>
<td><a href="#advisoryratings-property">Advisory Ratings Object</a></td>
<td>Required</td>
<td>A parental rating for the content. (MPAA or TV Rating).<br /><ul><li>'Unrated' and "Not Rated" are not accepted ratings for Kids-Directed Content</li></ul><p>The following additional obligations apply to all live linear streams that include Kids-Directed Content:</p><ul><li><p>You will only include Kids-Directed Content in a live linear stream if that live linear stream is (and will always be) comprised exclusively of Kids-Directed Content. Do not mingle Kids-Directed Content and non-Kids-Directed Content in a live linear feed.</p></li><li><p>You will provide a single TV content rating in the <a href="#rating-property">Rating Object </a>reflecting the most restrictive rating of all Kids-Directed Content that will be available on the live linear feed.</p></li></ul><p><strong>Additional kidsdirected guidelines</strong></p><p>A <code>kidsdirected</code> tag should be inserted for any channel that is directed to children, based on a variety of factors, including the following:</p><ul><li>Ratings which designate the content as designed to be appropriate for children </li><li>Allowable ratings: Rating = TVPG, PG, TVY, TVY7, TVG, G</li><li>TVY and TVY7 are reserved for kidsDirected channels only</li><li>Content subject matter (e.g., teaching the alphabet)</li><li>Visual content (e.g., unicorns)</li><li>Use of animated characters (e.g., My Little Pony)</li><li>Child-oriented activities and incentives</li><li>Music or other audio content designed for children (e.g., nursery rhymes)</li><li>Young age of models (e.g., toddlers)</li><li>Presence of child celebrities or celebrities who appeal to children</li><li>Language or other characteristics of the content that target children</li><li>Whether advertising appearing with the content is directed to children</li><li>Whether your intended audience for the content is children</li><li>Whether you have competent and reliable empirical evidence that your audience composes primarily of children</li></ul></td>
</tr>
</tbody>
</table>




## Content properties

### Content property

Child object of property:

- `liveFeed`

This object represents the details about the liveFeed


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>dateAdded</td>
<td>string</td>
<td>Required</td>
<td>The date the liveFeed was added to the library in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a> format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00 This information is used to generate the “Recently Added” category.</td>
</tr>
<tr>
<td>language</td>
<td>string</td>
<td>Required</td>
<td>The language in which the feed is intended (e.g., “en”, “en-US”, “es”, etc). ISO 639 alpha-2 or alpha-3 language code string.</td>
</tr>
<tr>
<td>validityPeriodStart</td>
<td>string</td>
<td>Optional</td>
<td>The date when the content should become available in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a>format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00</td>
</tr>
<tr>
<td>validityPeriodEnd</td>
<td>string</td>
<td>Optional</td>
<td>The date when the content is no longer available in the <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601</a>format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2015-11-11T22:21:37+00:00</td>
</tr>
<tr>
<td>schedule</td>
<td><a href="#schedule-object">Schedule Object</a></td>
<td>Required</td>
<td>A chronological listing of program start times and durations referencing objects in other content type sections (movies, series, shortFormVideos, tvSpecials)</td>
</tr>
</tbody>
</table>


Content Object Example:

```
{ "dateAdded": "2015-11-11T22:21:37+00:00", "language": "es", "schedule": [...], "validityPeriodStart": "2020-03-13", "validityPeriodEnd": "2100-03-12"}
```

### Genres property

The following genres are supported:


<table>
<thead>
<tr>
<th>1.</th>
<th>2.</th>
<th>3.</th>
<th>4.</th>
<th>5.</th>
<th>6.</th>
</tr>
</thead>
<tbody>
<tr>
<td><ul><li>action</li><li>action sports</li><li>adventure</li><li>aerobics</li><li>agriculture</li><li>animals</li><li>animated</li><li>anime</li><li>anthology</li><li>archery</li><li>arm wrestling</li><li>art</li><li>arts/crafts</li><li>artistic gymnastics</li><li>artistic swimming</li><li>athletics</li><li>auction</li><li>auto</li><li>auto racing</li><li>aviation</li><li>awards</li><li>badminton</li><li>ballet</li><li>baseball</li><li>basketball</li><li>3x3 basketball</li><li>beach soccer</li><li>beach volleyball</li><li>biathlon</li><li>bicycle</li><li>bicycle racing</li><li>billiards</li><li>biography</li><li>blackjack</li><li>bmx racing</li><li>boat</li><li>boat racing</li><li>bobsled</li></ul></td>
<td><ul><li>bodybuilding</li><li>bowling</li><li>boxing</li><li>bullfighting</li><li>bus./financial</li><li>canoe</li><li>card games</li><li>ceremony</li><li>cheerleading</li><li>children</li><li>children-music</li><li>children-special</li><li>children-talk</li><li>collectibles</li><li>comedy</li><li>comedy drama</li><li>community</li><li>computers</li><li>canoe/kayak</li><li>consumer</li><li>cooking</li><li>cricket</li><li>crime</li><li>crime drama</li><li>curling</li><li>cycling</li><li>dance</li><li>dark comedy</li><li>darts</li><li>debate</li><li>diving</li><li>docudrama</li><li>documentary</li><li>dog racing</li><li>dog show</li><li>dog sled</li><li>drag racing</li><li>drama</li></ul></td>
<td><ul><li>educational</li><li>entertainment</li><li>environment</li><li>equestrian</li><li>erotic</li><li>event</li><li>exercise</li><li>fantasy</li><li>faith</li><li>fashion</li><li>fencing</li><li>field hockey</li><li>figure skating</li><li>fishing</li><li>football</li><li>food</li><li>fundraiser</li><li>gaelic football</li><li>game show</li><li>gaming</li><li>gay/lesbian</li><li>golf</li><li>gymnastics</li><li>handball</li><li>health</li><li>historical drama</li><li>history</li><li>hockey</li><li>holiday</li><li>holiday music</li><li>holiday music special</li><li>holiday special</li><li>holiday-children</li><li>holiday-children special</li><li>home improvement</li><li>horror</li><li>horse</li><li>house/garden</li></ul></td>
<td><ul><li>how-to</li><li>hunting</li><li>hurling</li><li>hydroplane racing</li><li>indoor soccer</li><li>interview</li><li>intl soccer</li><li>judo</li><li>karate</li><li>kayaking</li><li>lacrosse</li><li>law</li><li>live</li><li>luge</li><li>martial arts</li><li>medical</li><li>military</li><li>miniseries</li><li>mixed martial arts</li><li>modern pentathlon</li><li>motorcycle</li><li>motorcycle racing</li><li>motorsports</li><li>mountain biking</li><li>music</li><li>music special</li><li>music talk</li><li>musical</li><li>musical comedy</li><li>mystery</li><li>nature</li><li>news</li><li>newsmagazine</li><li>olympics</li><li>opera</li><li>outdoors</li><li>parade</li><li>paranormal</li></ul></td>
<td><ul><li>parenting</li><li>performing arts</li><li>playoff sports</li><li>poker</li><li>politics</li><li>polo</li><li>pool</li><li>pro wrestling</li><li>public affairs</li><li>racquet</li><li>reality</li><li>religious</li><li>ringuette</li><li>road cycling</li><li>rodeo</li><li>roller derby</li><li>romance</li><li>romantic comedy</li><li>rowing</li><li>rugby</li><li>running</li><li>rhythmic gymnastics</li><li>sailing</li><li>science</li><li>science fiction</li><li>self improvement</li><li>shooting</li><li>shopping</li><li>sitcom</li><li>skateboarding</li><li>skating</li><li>skeleton</li><li>skiing</li><li>snooker</li><li>snowboarding</li><li>snowmobile</li><li>soap</li><li>soap special</li></ul></td>
<td><ul><li>soap talk</li><li>soccer</li><li>softball</li><li>special</li><li>speed skating</li><li>sport climbing</li><li>sports</li><li>sports talk</li><li>squash</li><li>standup</li><li>sumo wrestling</li><li>surfing</li><li>suspense</li><li>swimming</li><li>table tennis</li><li>taekwondo</li><li>talk</li><li>technology</li><li>tennis</li><li>theater</li><li>thriller</li><li>track/field</li><li>track cycling</li><li>travel</li><li>trampoline</li><li>triathlon</li><li>variety</li><li>volleyball</li><li>war</li><li>water polo</li><li>water skiing</li><li>watersports</li><li>weather</li><li>weightlifting</li><li>western</li><li>wrestling</li><li>yacht racing</li></ul></td>
</tr>
</tbody>
</table>








### ExternalIds property

Child object of property:

- `movie`
- `series`
- `series -> episodes -> episode`
- `series -> seasons -> episodes -> episode`
- `shortFormVideo`
- `tvSpecial`

This object represents a third-party metadata provider ID (such as TMS, Rovi, IMDB, EIDR) that can provide more information about a specific video content. This metadata optimizes the opportunity for your content to be discovered by Roku search and to provide more details to users.


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Type</strong></th>
<th><strong>Required</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Required</td>
<td>The third-party metadata provider ID for your video content. For example, in the case of IMDB you would use the last part of the URL of a movie such as "http://www.imdb.com/title/tt0371724".</td>
</tr>
<tr>
<td>idType</td>
<td>enum</td>
<td>Required</td>
<td>Must be one of the following:<br /><ul><li>TMS – A Tribune Metadata Service ID for the content. Roku recommends using TMS and will associate these IDs for you.</li><li>ROVI - A Rovi ID for the content</li><li>IMDB – An Internet Movie Database ID</li><li>EIDR – An Entertainment Identifier Registry ID</li></ul><p>External IDs Object Example:</p><pre><code>\{ &quot;id&quot;: &quot;123456789&quot;, &quot;idType&quot;: &quot;TMS&quot; \}, \{ &quot;id&quot;: &quot;tt0371724&quot;, &quot;idType&quot;: &quot;IMDB&quot; \}, \{ &quot;id&quot;: &quot;10.5240/48A5-E3C5-6B11-D874-FD2B-V&quot;, &quot;idType&quot;: &quot;EIDR&quot; \}</code></pre></td>
</tr>
</tbody>
</table>



### AdvisoryRatings property

Child object of property:

- `movie`
- `series -> episodes -> episode`
- `shortFormVideo`
- `tvSpecial`
- `livefeed`

This object represents the ratings across multiple territories for the video content. You can define the parental rating, as well as the source (USA Parental Rating, UK Content Provider, etc). See Parental Ratings and Rating Sources for acceptable values.


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>enum</td>
<td>Required</td>
<td>Must be a value listed in <a href="#parental-ratings-property">Parental Ratings</a>.<br />Do not include any content targeted specifically to children.</td>
</tr>
<tr>
<td>source</td>
<td>enum</td>
<td>Required</td>
<td>Must be one or more of the following:<br /><ul><li>BBFC<strong></li><li>CHVRS</li><li>CPR</li><li>MPAA</li><li>USA_PR</li><li>RTC</li><li>ACB</li><li>CLASSIND</li></ul><p></strong> UK content - rating is <strong>required</strong>. If there is no BBFC rating, please note a content rating of 'NR'</p><p>Rating Object Example:</p><pre><code>&quot;advisoryRatings&quot;: [        \{          &quot;source&quot;: &quot;MPAA&quot;,          &quot;value&quot;: &quot;PG13&quot;        \},        \{          &quot;source&quot;: &quot;CPR&quot;,          &quot;value&quot;: &quot;14+&quot;        \}      ],</code></pre></td>
</tr>
</tbody>
</table>



### Accepted parental ratings

The following parental ratings can be used to better help your viewers find age-appropriate content.

Note: No content can be targeted specifically to children. No pornographic or porn industry-related content is allowed.


<table>
<thead>
<tr>
<th>Source</th>
<th>USA_PR (USA Parental Rating)</th>
<th>MPAA (Motion Picture Association of America)</th>
<th>CHVRS (Canadian Home Video Rating System)</th>
<th>CPR (Canadian Parental Rating)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rating</td>
<td><ul><li>TV-Y</li><li>TVY</li><li>TV-Y7</li><li>TVY7</li><li>TV-G</li><li>TVG</li><li>TV-PG</li><li>TVPG</li><li>TV-14</li><li>TV14</li><li>TV-MA</li><li>TVMA</li></ul></td>
<td><ul><li>G</li><li>PG</li><li>PG13</li><li>PG-13</li><li>R</li><li>NC-17</li><li>NC17</li><li>UR</li></ul></td>
<td><ul><li>G</li><li>PG</li><li>14A</li><li>14-A</li><li>18A</li><li>18-A</li><li>R</li><li>E</li></ul></td>
<td><ul><li>14+</li><li>18+</li><li>C</li><li>C8</li><li>C-8</li><li>G</li><li>PG</li><li>E</li></ul></td>
</tr>
<tr>
<td><strong>Source</strong></td>
<td><strong>RTC (General Directorate of Radio Television and Cinematography) - Mexico</strong></td>
<td><strong>BBFC (British Board of Film Classification)</strong></td>
<td><strong>ACB (Australian Classification Board)</strong></td>
<td><strong>CLASSIND (Classificação Indicativa) - Brazil</strong></td>
</tr>
<tr>
<td>Rating</td>
<td><ul><li>AA</li><li>A</li><li>B</li><li>B-15</li><li>B15</li><li>C</li><li>D</li></ul></td>
<td><ul><li>U</li><li>PG</li><li>12A</li><li>12-A</li><li>12</li><li>15</li><li>18</li><li>R18</li><li>R-18</li></ul></td>
<td><ul><li>E</li><li>G</li><li>PG</li><li>M</li><li>MA 15+</li><li>R 18+</li><li>X 18+</li><li>AV 15+</li><li>C</li><li>NC</li><li>RC</li></ul></td>
<td><ul><li>L</li><li>10</li><li>12</li><li>14</li><li>16</li><li>18</li><li>AL</li><li>A10</li><li>A12</li><li>A14</li><li>A16</li><li>A18</li></ul></td>
</tr>
</tbody>
</table>










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
