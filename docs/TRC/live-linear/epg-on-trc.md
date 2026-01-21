---
title: "EPG on The Roku Channel"
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


## Summary

The Roku Channel employs a Programming Guide for linear channels similar to that of a traditional TV Guide. This can be accessed by launching an EPG compatible live channel and using the left arrow on the remote, or by clicking the “Live TV” bookend tile in the live channel row.

**For the best user experience**, there are several required and highly recommended metadata guidelines which will be outlined below.

***Note:*** *Some items below will require a linear partner to implement. Consult with your linear partner if you have any questions.*

## Schedule & programming

Any live channel to be considered for placement in the EPG is required to have a **minimum** of **seven (7) days** of scheduled programming, with at least **one (1) day** of historical data.

- All programs must be **15 mins** or longer in duration and no more than **4 hours.** 
- Partners should not make programming updates to content scheduled to air within **48 hours** of live broadcast.

## Logos

Each channel is required to have clearly legible logos which are displayed on the channel spine in the EPG grid as well as in the info HUD for each program. The requirements are as follows:

- *Logos to be delivered via **zip file** to Linear Certified Partner (LCP)*
- *No additional branding or text beyond the Channel’s title and iconography*
- <u>For EPG spine</u>: 1x light logo, 1x dark logo (can be same if image reads well on both white and black backgrounds).
  - Logos **must** be transparent PNGs
  - Center aligned on the horizontal and vertical axis 
  - 3 pixel spacing from top and bottom border
  - <u>Dimensions</u>: 114x60 pixels (width x height)
  - *Note: EPG spine logos should be free of any additional parent branding, distributor branding, "presented by" and be simply the name or logo of the channel.*
- <u>For Info HUD</u>: 1x logo aligned to center on vertical/horizontal axis
  - Logos **must** be transparent PNGs 
  - Logos **must** be monochromatic hex #efefef
  - <u>Dimensions</u>: 260x147 pixels (width x height)


![roku600px - epg1](https://image.roku.com/ZHZscHItMTc2/EPG-on-TRC-Pic--1.jpg)

## Metadata by content type

**Tip**: Including Gracenote TMS ids or IMDB ids in your program metadata generally provides all the required metadata for any content type (see [A note about deduplication of metadata](#a-note-about-deduplication-of-metadata)). TRC also supports channel level Gracenote TMS ids (aka ProgSrvIDs) but only for channels with live sports at this time. Ask your Roku rep for details.

**Required** for all content types:

1. Titles (35 characters max per line)
   1. No emojis
   1. Mixed case
   
2. Program Art with title treatments (16x9 for all content types)
   1. Title treatment should match program title 
   1. CTAs, website URLs, social media icons, etc are not permitted on program artwork. 
   1. Episodes as part of a series do not require title treatments 

3. Short Description (**maximum 110 characters**)
   1. Descriptions longer than 110 characters will get truncated and cannot be expanded.
      1. Do not truncate your own descriptions or add ellipses.
   2. Do not repeat/reuse program title in the description
   3. No emojis

4. Closed Captioning (where legally required, usually included in video stream)
5. Closed Caption Attribute field
   1. Added to each item in <u>schedule</u>
   2. Denotes "CC" in info HUD for each airing of program.

6. Program specific Content Rating
   1. [Territory specific rating systems](doc:ovp-linear-ingest-spec)
   1. TVY and TVY7 are reserved for kidsDirected channels only (ask your Roku rep for details)

7. Air dates/release dates for movies & TV episodes
8. [Genre/s](doc:ovp-linear-ingest-spec)

### Series

Additional Required Metadata:

1. 16x9 Series art w/ title treatments
   1. Title treatment should match series title

   2. CTAs, website URLs, social media icons, etc are not permitted on series artwork. 

   3. Episode art does not require title treatment
   
2. Season/Episode numbers
   1. Do NOT include season/episode numbers in titles
   2. Do NOT use industry episode numbers (Ep 101, 201, etc)

3. Series Title
4. Episode Title
   1. Do NOT include Series title in Episode title


### TV specials

Recommended content type for one-off specials, News programs, and some sporting events.

### Short form videos

Catch-all for content that doesn’t fit any above content type. Useful for composite content such as blocks of short form videos, music videos, etc.

## Additional tips

### Sports programs

- For most sporting events, use Series content type and **YEAR** for Season number.
- Use League or Event for name of Series
- Use team names, competitors, or specific event (in the case of when series name is Olympics, X-games, etc) in episode name.
- Additional info can be included in description.
- For one-off sporting events/coverage such as “UFC 249” or “Dew Tour 2019 Recap”, use tvSpecials content type.

***Feel free to ask your Roku rep if you have any questions on formatting sports programs for EPG.*

### A note about deduplication of metadata: 

Roku augments metadata and artwork that appears in The Roku Channel on Roku devices, web browsers, mobile applications, and other off-platform players with data supplied from Gracenote’s database where available. The Gracenote data aids in a unified experience of a title across platforms as well as on the greater Roku ecosystem. Roku will attempt to match all content delivered by our Partners to a corresponding record in Gracenote’s database. At this time all metadata and artwork that appears on The Roku Channel is sourced from Gracenote if that content is found in Gracenote’s database. 

Our systems use a combination of methods to match a title its correct Gracenote record. Partners can aid in the matching to a Gracenote record by providing accurate metadata including: 

- Exact title of a series, movie, TV special, or short form video 
- Release dates that are accurate to the year the title was originally released on any platform 
- Accurate season and episode numbers according to the original release order 
- Accurate TMS (Gracenote) IDs or IMDB IDs for each associate content type 

## Sample series in EPG

![roku600px - epg1](https://image.roku.com/ZHZscHItMTc2/EPG-on-TRC-Pic--2.jpg)

1. Series Titles
2. Episode Title
3. Rating
4. Closed Captioning Badge
5. Channel Number
6. EPG Logo
7. Description
8. Season / Episode Number
9. Program Art

![roku600px - epg1](https://image.roku.com/ZHZscHItMTc2/EPG-on-TRC-Pic--3.jpg)

1. Series Title
2. Episode Title
3. Rating
4. Closed Captioning Badge
5. Channel Number
6. HUD Logo
7. Description
8. Season / Episode Number