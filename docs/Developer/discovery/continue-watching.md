---
title: Continue Watching
deprecated: false
hidden: false
metadata:
  robots: index
---
# Continue Watching

Continue Watching is a content category row within the **What to Watch** home screen navigation on Roku devices and on the Home screen of the Roku mobile app. It displays content from participating apps that customers have already started watching, which empowers customers with the speed and convenience of a single location from which they can resume content from different apps on any Roku device linked to their account. Publishers can integrate into this feature to make their content more accessible to customers, drive users to their apps, and increase engagement. Overall, this helps publishers promote their content in order to retain customers and reduce churn.

> Here's a test bi-directional note for testing purposes.

<Image alt="roku815px - continue watching row" border={false} src="https://image.roku.com/ZHZscHItMTc2/continue-watching-ui-v2.png" />

> The Continue Watching feature is available on all Roku devices running Roku OS 11.0 or higher in the United States, Canda, United Kingdom, Germany, Mexico, Chile, Argentina, and Colombia.
>
> Apps in the U.S. Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must participate in Roku’s Continue Watching program to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation). This requirement also applies to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.
>
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

4. Once development has been completed, request authentication tokens for testing the Continue Watching integration in a beta environment. This enables you to complete QA testing before releasing your updated app to production. Provide Roku Partner Engineering with the list of the app IDs to be used for QA testing. Upon receiving the app token, add it to the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md) (channel_token=\token). The **channel authentication token** will also be used in your production application.

## Integrating into Continue Watching

Integrating into Continue Watching entails calling the Roku Continue Watching APIs when a playback event occurs. Playback events occur when the customer exits the video player or finishes watching content. Sending events identifies which content the customers can keep watching and where to resume playback. Publishers can use the Roku Continue Watching APIs to add, update, and remove content items. The workflow is illustrated and summarized as follows:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Step
      </th>

      <th>
        API
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Retrieve bookmarks when app is launched**
      </td>

      <td>
        Publisher backend system
      </td>

      <td>
        The publisher maintains the playback position of content. Roku does not maintain bookmarks because content may be watched across multiple platforms (for example, web and Roku). This ensures that deep links from the Continue Watching row return the customer to the actual playback position.
      </td>
    </tr>

    <tr>
      <td>
        **Update bookmark**
      </td>

      <td>
        PUT request to Continue Watching API
      </td>

      <td>
        Once the publisher retrieves the current playback position from their backend system, the app makes a **PUT** request to update the Continue Watching row with that bookmark.
      </td>
    </tr>

    <tr>
      <td>
        **Add content to Continue Watching row when content playback starts**
      </td>

      <td>
        POST request to Continue Watching API
      </td>

      <td>
        The publisher controls how long content has been watched (for example, one minute) before it is added to the Continue Watching row. Once the publisher-configured interval has been reached, the app makes a POST request to add the content to the Continue Watching row.<br />

        > During playback, do not make Continue Watching API calls to update the playback position. The main purpose of the Continue Watching user experience is to aggregate in-progress content and streamline resumption. The progress bar used to reflect the current bookmark in the Continue Watching row is an approximation. If the customer presses the Home button after the POST request has been sent, the content will still be listed in the Continue Watching row, which is the primary goal of the feature.
      </td>
    </tr>

    <tr>
      <td>
        **Update content playback position when content playback ends**
      </td>

      <td>
        POST request to Continue Watching API
      </td>

      <td>
        Once the customer stops content playback, the app makes a **POST** request to update the Continue Watching row the current bookmark for that content.
      </td>
    </tr>

    <tr>
      <td>
        **Remove content from Continue Watching row when content has been completed**
      </td>

      <td>
        DELETE request to Continue Watching API
      </td>

      <td>
        The publisher controls what constitutes the completion of content (for example, end credits are shown). Once content has been completed, the app makes a DELETE request to remove the content from the Continue Watching row.
      </td>
    </tr>
  </tbody>
</Table>

### API Reference

The following table summarizes the basic information for the Continue Watching RESTful web services:

<Table align={["left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Item
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Endpoint**
      </td>

      <td>
        The base URLs for the Continue Watching APIs are as follows:<br />`{endpoints-list}` `${profile-bq}`
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        **Protocol**
      </td>

      <td>
        Continue Watching API calls may only be sent using HTTPS.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        **Methods**
      </td>

      <td>
        The Continue Watching APIs support the following REST methods for adding, retrieving, updating, and deleting content items:<br />`${rest-methods-list}`
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        **Header**
      </td>

      <td>
        Requests to the Continue Watching APIs require the following headers (the Roku OS automatically populates the headers with empty string values):

        <table>
          <tr>
            <td>Cell 3</td>
            <td>Cell 4</td>
          </tr>

          <tr>
            <td>Cell 1</td>
            <td><table><tr><td>Cell 1</td><td>Cell2</td></tr></table></td>
          </tr>
        </table>
      </td>

      <td>
        Cell 1
      </td>

      <td>
        Cell2
      </td>

      <td>
        Cell 1
      </td>

      <td>
        <table><tr><td>Cell 1</td><td>Cell2</td></tr></table>
      </td>

      <td>
        Cell 1
      </td>

      <td>
        Cell2
      </td>
    </tr>

    <tr>
      <td>
        Cell 1
      </td>

      <td>
        Cell2
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Cell 1
      </td>

      <td>
        <table><tr><td>Cell 1</td><td>Cell2</td></tr></table>
      </td>

      <td>
        Cell 1
      </td>

      <td>
        Cell2
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Cell 1
      </td>

      <td>
        Cell2
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        **Response**
      </td>

      <td>
        The Continue Watching APIs return one of the following response codes:<br />`${response-codes-list}`
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>
