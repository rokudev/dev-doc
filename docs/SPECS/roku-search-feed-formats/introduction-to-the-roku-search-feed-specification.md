---
title: Introduction to the Roku search feed specification
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
Apps can participate in Roku Search to make their content more discoverable to customers looking for content to watch. This gives publishers an opportunity to convert searches into subscriptions and rentals, drive users to their apps, and increase engagement.

To integrate into Roku Search, apps must provide the URL of their [search feed](/docs/specs/search/search-feed.md), which is a [JSON](/docs/specs/search/search-feed.md) or [XML document](/docs/specs/search/search-feed-legacy.md) that contains a unique ID and metadata for each video in the app's catalog. The search feed must conform to Roku's schemas and be validated by Roku. Once the feed passes validation,  content metadata is added to the Roku Search master database.

When a customer uses their Roku remote control or Roku mobile app to enter or say their search, Roku Search automatically lists content from participating apps that matches the query.

## Feed spec versions

Roku currently supports two versions of the Roku Search feed specification: the current JSON version, which was made available to all apps on March 1, 2022, and the legacy XML version.

- **JSON spec (current; recommended)**. Apps should use the [current JSON specification](/docs/specs/search/search-feed.md) to integrate into Roku Search. The JSON specification enables developers to manage a single feed for all regions, which minimizes feed maintenance time for developers, and it supports short-form content.

  - New apps created on or after March 1, 2022 must use the JSON specification to integrate into Roku Search.

  - Existing apps created before March 1, 2022 that have not completed the Roku Search integration by May 1, 2022 must use the JSON specification to integrate into Roku Search.

- **XML spec (legacy)**. The [legacy XML specification](/docs/specs/search/search-feed-legacy.md) may be used by existing apps currently integrated into Roku Search. Apps, however, are encouraged to adopt the JSON specification in order to simplify their Roku Search integration. 

  For example, if an app wants to provide localized metadata for Roku Search, they should use the new JSON specification because it supports multiple languages within a single feed. Similarly, if an app has short-form content such as cookie videos or sports highlights, they should use the JSON specification because the legacy XML specification does not support short-form content, which therefore makes it undiscoverable in Roku Search.

  ## Feed specification comparison

  The following table summarizes the key differences between the current JSON feed spec and the legacy XML feed spec:

  [block:parameters]{"data":{"h-0":"","h-1":"[Current feed specification](/docs/specs/search/search-feed.md)","h-2":"[Legacy feed specification](/docs/specs/search/search-feed-legacy.md)","0-0":"**Format**","0-1":"JSON","0-2":"XML","1-0":"**Multi-region support**","1-1":"One feed for all regions. <br /><br />A single feed may include different  languages, content availability windows, and rating systems for different regions.","1-2":"One feed per region","2-0":"**Availability windows**","2-1":"Supported","2-2":"Not supported","3-0":"**Multi-source support**","3-1":"One feed for all content metadata sources","3-2":"One feed per source (content metadata from in the Gracenote/TMS schema must be provided in a separate feed)","4-0":"**Content types supported**","4-1":"${json-feed-types}","4-2":"${xml-feed-types}","5-0":"**Aspect ratios for content posters and backgrounds**","5-1":"${json-aspect-ratios}","5-2":"${xml-aspect-ratios}"},"cols":3,"rows":6,"align":[null,null,null]}[/block]

{#json-feed-types}

- movies
- television episodes
- short-form content

{#xml-feed-types}

- movies
- television episodes

{#json-aspect-ratios}

- 16:9 (a 16:9 or 2:3 image for the content poster is required)
- 2:3
- 4:3

{#xml-aspect-ratios}

- 2:3