---
title: "Introduction to the Roku search feed specification"
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

# Introduction to the Roku search feed specification


Apps can participate in Roku Search to make their content more discoverable to customers looking for content to watch. This gives publishers an opportunity to convert searches into subscriptions and rentals, drive users to their apps, and increase engagement.

To integrate into Roku Search, apps must provide the URL of their [search feed](/docs/specs/search/search-feed.md), which is a [JSON](/docs/specs/search/search-feed.md) file that contains a unique ID and metadata for each video in the app's catalog. The search feed must conform to Roku's schemas and be validated by Roku. Once the feed passes validation,  content metadata is added to the Roku Search master database.

When a customer uses their Roku remote control or Roku mobile app to enter or say their search, Roku Search automatically lists content from participating apps that matches the query.

## Feed spec versions

As of July 1, 2025, Roku supports only the JSON version of the Roku Search feed specification. Support for the legacy XML version has been sunset. 

## JSON feed specification highlights

The following table highlights the benefits of the JSON feed spec:


<table>
<thead>
<tr>
<th><strong>Format</strong></th>
<th>JSON</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Multi-region support</strong></td>
<td>One feed for all regions. <br /><br />A single feed may include different  languages, content availability windows, and rating systems for different regions.</td>
</tr>
<tr>
<td><strong>Availability windows</strong></td>
<td>Supported</td>
</tr>
<tr>
<td><strong>Multi-source support</strong></td>
<td>One feed for all content metadata sources</td>
</tr>
<tr>
<td><strong>Content types supported</strong></td>
<td><ul><li>movies</li><li>television episodes</li><li>short-form content</li></ul></td>
</tr>
<tr>
<td><strong>Aspect ratios for content posters and backgrounds</strong></td>
<td><ul><li>16:9 (a 16:9 or 2:3 image for the content poster is required)</li><li>2:3</li><li>4:3</li></ul></td>
</tr>
</tbody>
</table>



