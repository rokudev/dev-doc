# Introduction to the Roku search feed specification


Apps can participate in Roku Search to make their content more discoverable to customers looking for content to watch. This gives publishers an opportunity to convert searches into subscriptions and rentals, drive users to their apps, and increase engagement.

To integrate into Roku Search, apps must provide the URL of their [search feed](/docs/specs/search/search-feed.md), which is a [JSON](/docs/specs/search/search-feed.md) file that contains a unique ID and metadata for each video in the app's catalog. The search feed must conform to Roku's schemas and be validated by Roku. Once the feed passes validation,  content metadata is added to the Roku Search master database.

When a customer uses their Roku remote control or Roku mobile app to enter or say their search, Roku Search automatically lists content from participating apps that matches the query.

## Feed spec versions

As of July 1, 2025, Roku supports only the JSON version of the Roku Search feed specification. Support for the legacy XML version has been sunset. 

## JSON feed specification highlights

The following table highlights the benefits of the JSON feed spec:

| **Format**                                            | JSON                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| **Multi-region support**                              | One feed for all regions. <br /><br />A single feed may include different  languages, content availability windows, and rating systems for different regions. |
| **Availability windows**                              | Supported                                                    |
| **Multi-source support**                              | One feed for all content metadata sources                    |
| **Content types supported**                           | ${json-feed-types}                                           |
| **Aspect ratios for content posters and backgrounds** | ${json-aspect-ratios}                                        |

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
