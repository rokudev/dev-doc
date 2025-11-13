---
title: Continue Watching
deprecated: false
hidden: false
metadata:
  robots: index
---

# Continue Watching

Continue Watching is a content category row within the **What to Watch** home screen navigation on Roku devices and on the Home screen of the Roku mobile app. It displays content from participating apps that customers have already started watching, which empowers customers with the speed and convenience of a single location from which they can resume content from different apps on any Roku device linked to their account. Publishers can integrate into this feature to make their content more accessible to customers, drive users to their apps, and increase engagement. Overall, this helps publishers promote their content in order to retain customers and reduce churn.

![roku815px - continue watching row](https://image.roku.com/ZHZscHItMTc2/continue-watching-ui-v2.png)

> The Continue Watching feature is available on all Roku devices running Roku OS 11.0 or higher in the United States, Canda, United Kingdom, Germany, Mexico, Chile, Argentina, and Colombia.

> Apps in the U.S. Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must participate in Roku’s Continue Watching program to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation). This requirement also applies to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.

> Continue Watching only supports long-form content such as movies and television episodes. Short-form content (standalone content that is 15 minutes or less that is not a movie or TV show) is not supported.  

## Overview

From the Roku home screen, customers can scroll down to the **What to Watch** screen. This screen features a **Continue Watching** row with content from participating apps, including movies and TV shows that the customer needs to finish, live linear apps that the customer was watching, and the next episodes in a television series. The Continue Watching row contains a maximum of 40 tiles, which are ordered based on Roku-proprietary algorithms that use various signals, including recency.

> The Continue Watching row is also available on the Home screen of the Roku mobile app.

As customers browse content, metadata for the item with focus is displayed. This includes the publisher's logo, title, release date, rating, and duration. In addition, if the app supports user profiles, a label indicates the user that was watching that content item. A progress bar indicates the approximate playback position of the content item.

When the customer selects a movie, TV show, or TV episode, it launches directly into playback (apps may not launch into a profile selection screen, content details screen, or any other screen when content is selected from the Continue Watching row). For customers with multiple Roku devices linked to their account, Continue Watching resumes playback at the bookmarked position on any of their devices.

## Prerequisites

Apps must have completed the following integrations to participate in Roku Continue Watching:

1. [Roku Search](/docs/developer-program/discovery/search/implementing-search.md). Enables customers to find content on your app.
2. [Deep linking](/docs/developer-program/discovery/implementing-deep-linking.md). Enables the requested content to be launched directly into playback on your app.
3. [Bookmarking](/docs/developer-program/media-playback/bookmarking.md). Resumes playback of the requested content at its last watched position.

## Getting started

To get started with the Continue Watching integration, follow these steps:

1. Verify that your app meets the listed [prerequisites](#prerequisites).



2. Contact the [Roku Partner Success team](https://developer.roku.com/contact). They will determine whether your app is eligible for Continue Watching and enable your app to access the Continue Watching service endpoints.



3. Request device tokens for testing the Continue Watching integration in a sideloaded environment. Provide Roku Partner Engineering with the serial numbers of the Roku devices to be used for testing during development. Upon receiving the device tokens, install them on their respective test devices by entering the following cURL command in a terminal application:

   `curl --data-binary @<token-file> http://<Roku_IP>:8060/token/install`

   The response from the terminal application should be as follows:

```
    <?xml version="1.0" encoding="UTF-8" ?>
        <TokenCmdResponse>
            <Command>Install</Command>
            <Response>Success</Response>
        </TokenCmdResponse>
```

4. Once development has been completed, request authentication tokens for testing the Continue Watching integration in a beta environment. This enables you to complete QA testing before releasing your updated app to production. Provide Roku Partner Engineering with the list of the app IDs to be used for QA testing. Upon receiving the app token, add it to the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md) (channel_token=\token\). The **channel authentication token** will also be used in your production application.

