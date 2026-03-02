---
title: Continue Watching (cloud-to-cloud integration)
deprecated: false
hidden: true
metadata:
  robots: index
---
> Publishers who have not implemented Continue Watching by April 1, 2026, must follow this document to complete their integration. If you completed the integration before April 1, 2026 (or were in progress at the time), refer to the [legacy documentation](doc:continue-watching).

Continue Watching is a content category row within the **What to Watch** home screen navigation on Roku devices and on the Home screen of the Roku mobile app. It displays content from participating apps that customers have already started watching, which empowers customers with the speed and convenience of a single location from which they can resume content from different apps on any Roku device linked to their account. Publishers can integrate into this feature to make their content more accessible to customers, drive users to their apps, and increase engagement. Overall, this helps publishers promote their content in order to retain customers and reduce churn.

<Image align="center" alt="roku815px - continue watching row" border={true} src="https://image.roku.com/ZHZscHItMTc2/continue-watching-ui-v2.png" className="border" />

> The Continue Watching feature is available on all Roku devices running Roku OS 11.0 or higher in the United States, Canda, United Kingdom, Germany, Mexico, Chile, Argentina, and Colombia.
>
> Apps in the U.S. Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must participate in Roku’s Continue Watching program to pass [certification](doc:certification#4-channel-operation). This requirement also applies to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.
>
> Continue Watching only supports long-form content such as movies and television episodes. Short-form content (standalone content that is 15 minutes or less that is not a movie or TV show) is not supported.

## Overview

From the Roku home screen, customers can scroll down to the **What to Watch** screen. This screen features a **Continue Watching** row with content from participating apps, including movies and TV shows that the customer needs to finish, live linear apps that the customer was watching, and the next episodes in a television series. The Continue Watching row contains a maximum of 40 tiles, which are ordered based on Roku-proprietary algorithms that use various signals, including recency.

> The Continue Watching row is also available on the Home screen of the Roku mobile app.

As customers browse content, metadata for the item with focus is displayed. This includes the publisher's logo, title, release date, rating, and duration. In addition, if the app supports user profiles, a label indicates the user that was watching that content item. A progress bar indicates the approximate playback position of the content item.

When the customer selects a movie, TV show, or TV episode, it launches directly into playback (apps may not launch into a profile selection screen, content details screen, or any other screen when content is selected from the Continue Watching row). For customers with multiple Roku devices linked to their account, Continue Watching resumes playback at the bookmarked position on any of their devices.

## Prerequisites

Apps must have completed the following integrations to participate in Roku Continue Watching:

1. [Roku Search](doc:implementing-search). Enables customers to find content on your app.
2. [Deep linking](doc:implementing-deep-linking). Enables the requested content to be launched directly into playback on your app.
3. [Bookmarking](doc:bookmarking). Resumes playback of the requested content at its last watched position.
4. [API key](#generating-an-api-key). App must generate an API key using the API key workflow in the Developer Dashboard.  The API key is used to send authenticated Continue Watching API calls to Roku when playback events occur.

## Generating an API key

Continue Watching API calls use the Bearer Authentication scheme, in which the bearer token is a JSON Web Token (JWT). The token must include the header, payload, and signature specified in Appendix A. To generate the signature, you must use a private API key from your developer account.

To generate an API key, follow these steps:

1. Verify that your Roku account has the "Admin' or "DevOps" user role. The "DevOps" user role controls access to API key management tasks in the Developer Dashboard. See User Access Management in the Developer Dashboard for more information on managing user roles.
2. In the Developer Dashboard, click API access under Account from the sidebar.

<Image align="left" alt="roku815px - cw-c2c-api-access" border={true} src="https://image.roku.com/ZHZscHItMTc2/cw-c2c-api-access.png" className="border" />

3. In the API access page, click Create API key to create a private/public key pair (collectively referred to as the "API key"). The private key is used for signing messages and encrypting data; the associated public key is used for verifying message signatures and decrypting data.
4. In the Create API key dialog, enter a Key name for your API key that makes it easy to identify (for example, you can enter the name of your Beta channel) and a Description, and then click Create & Download API key. The private key is only available for download upon being created; you can download the corresponding public key from the Developer Dashboard anytime.  The API key has a time-to-live (TTL) of 90 days.

   <br />

   <Image align="left" alt="roku815px - cw-c2c-create-key" border={true} src="https://image.roku.com/ZHZscHItMTc2/cw-c2c-create-key.png" className="border" />
5. Secure and/or encrypt the downloaded private API key per your company's policies. If you lose your private key, you will need to create and use a new one.
6. The generated API key is listed under Active keys in the API access page. This section lists the key ID, name, description, and expiration date (in UTC) for each API key you have generated. To download the public key, click the download icon under Public key.

   <br />

   <Image align="left" alt="roku815px - cw-c2c-create-key" border={true} src="https://image.roku.com/ZHZscHItMTc2/cw-c2c-key-generated.png" className="border" />
7. As part of your API key rotation practices, you can regenerate and deactivate your keys (keys have a 90-day TTL). You can do this programmatically via Roku's Key Rotation APIs as described in Appendix B (this is recommended to save time and mitigate the risk of your keys inadvertently lapsing), or you can manage your keys manually in the Developer Dashboard.

   To execute key rotation tasks in the Developer Dashboard, click the shortcut icon under Actions and select the desired command:

   1. Regenerate: Generates a new API key with the same configuration as the current one. The private key is downloaded to your local machine; the public key is saved in the Developer Dashboard.
   2. Deactivate: Disables the API key (the key can no longer be used to authenticate API calls). Once you regenerate a new API key based on an existing one, you can deactivate the original. You can also use this option if you believe your key has been compromised.

      ![cw-c2c-key-generated](https://image.roku.com/ZHZscHItMTc2/cw-c2c-key-deactivated.png)

      <br />

## Integrating into Continue Watching

Integrating into Continue Watching entails calling the Roku Continue Watching APIs when a playback event occurs. Playback events occur when the customer exits the video player or finishes watching content. Sending events identifies which content the customers can keep watching and where to resume playback. Publishers can use the Roku Continue Watching APIs to add, update, and remove content items. The workflow is illustrated and summarized as follows:

![roku815px - cw-api-flow](https://image.roku.com/ZHZscHItMTc2/continue-watching-api-flow-v1.jpeg)

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>API</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Retrieve bookmarks when app is launched</strong></td>
      <td>Publisher backend system</td>
      <td>The publisher maintains the playback position of content. Roku does not maintain bookmarks because content may be watched across multiple platforms (for example, web and Roku). This ensures that deep links from the Continue Watching row return the customer to the actual playback position.</td>
    </tr>

    <tr>
      <td><strong>Update bookmark</strong></td>
      <td>PUT request to Continue Watching API</td>
      <td>Once the publisher retrieves the current playback position from their backend system, the app makes a <strong>PUT</strong> request to update the Continue Watching row with that bookmark.</td>
    </tr>

    <tr>
      <td><strong>Add content to Continue Watching row when content playback starts</strong></td>
      <td>POST request to Continue Watching API</td>
      <td>The publisher controls how long content has been watched (for example, one minute) before it is added to the Continue Watching row. Once the publisher-configured interval has been reached, the app makes a POST request to add the content to the Continue Watching row.<br />During playback, do not make Continue Watching API calls to update the playback position. The main purpose of the Continue Watching user experience is to aggregate in-progress content and streamline resumption. The progress bar used to reflect the current bookmark in the Continue Watching row is an approximation. If the customer presses the Home button after the POST request has been sent, the content will still be listed in the Continue Watching row, which is the primary goal of the feature.</td>
    </tr>

    <tr>
      <td><strong>Update content playback position when content playback ends</strong></td>
      <td>POST request to Continue Watching API</td>
      <td>Once the customer stops content playback, the app makes a <strong>POST</strong> request to update the Continue Watching row the current bookmark for that content.</td>
    </tr>

    <tr>
      <td><strong>Remove content from Continue Watching row when content has been completed</strong></td>
      <td>DELETE request to Continue Watching API</td>
      <td>The publisher controls what constitutes the completion of content (for example, end credits are shown). Once content has been completed, the app makes a DELETE request to remove the content from the Continue Watching row.</td>
    </tr>
  </tbody>
</table>

### API Reference

The following table summarizes the basic information for the Continue Watching RESTful web services:

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Endpoint</strong></td>
      <td>The URL for the Continue Watching APIs is <code>https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching</code>. User profile data is sent as part of the encrypted payload included in the API call. A separate endpoint for receiving profile-specific continue-watching data is not used.</td>
    </tr>

    <tr>
      <td><strong>Protocol</strong></td>
      <td>Continue Watching API calls may only be sent using HTTPS.</td>
    </tr>

    <tr>
      <td><strong>Methods</strong></td>
      <td>The Continue Watching APIs support the following REST methods for adding, retrieving, updating, and deleting content items:<br /><ul><li><strong>POST</strong>. Add one or more new content items; update existing items.</li><li><strong>GET</strong>. Retrieve the existing list of content items.</li><li><strong>PUT</strong>. Replace the entire existing list of content items. When making this request, include all the content that should remain in the Continue Watching row (for example, a PUT request with a single item replaces the current list with that one item). Passing an empty body removes all content from the list.</li><li><strong>DELETE</strong>. Remove one or more content items.</li></ul></td>
    </tr>

    <tr>
      <td><strong>Header</strong></td>
      <td>Requests to the Continue Watching APIs require the following headers (the Roku OS automatically populates the headers with empty string values):<ul><li><strong>Content-Type:</strong> application/json</li><li><strong>x-roku-reserved-jwt</strong>: ""</li><li><strong>x-roku-reserved-channel-id</strong>: "\<channelId>" (the production app ID is required to sideload and test the app during development because it is linked to the search feed. In production, the Roku OS will override this value, which means you can continue passing it after development has been completed).</li><li><strong>x-roku-reserved-channel-store-code</strong>: ""</li><li><strong>x-roku-reserved-virtual-user-id</strong>: ""</li><li><strong>x-roku-reserved-device-id</strong>: ""</li><li><strong>x-roku-reserved-serial-number</strong>: ""</li></ul><blockquote>See <a href="#appendix-a-sample-brightscript-code-for-adding-http-headers">Appendix A</a> for sample BrightScript code that demonstrates how to add these headers to your app. Do not use the [roHttpAgent.setHeaders()](doc:ifhttpagent#setheadersnamevaluemap-as-object-as-boolean) function to pass the headers.</blockquote></td>
    </tr>

    <tr>
      <td><strong>Response</strong></td>
      <td>The Continue Watching APIs return one of the following response codes:<br /><pre><code>- <strong>200</strong>: OK<br />- <strong>204</strong>: No content (DELETE requests only)<br />- <strong>400</strong>: Bad request  (required fields are missing from the payload; a description of the error is returned)<br />- <strong>401</strong>: Unauthorized (DELETE requests only)<br />- <strong>403</strong>: Forbidden (if an invalid partner)</code></pre></td>
    </tr>
  </tbody>
</table>

### Add API

To add new content items and update existing ones to the Continue Watching row, send a **POST** request to the Continue Watching API with the following parameters in the JSON body:

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required/Optional</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>contentId</td>
      <td>String</td>
      <td>Required</td>
      <td>The ASCII string (maximum 255 characters) used to uniquely identify the content in your app. <br /><br />This maps directly to the playID (contentId) field in the [Roku Search feed specification](doc:search-feed) or contentId for any search implementations using externalId providers.<br /><br />For a TV series, the seriesId maps to the corresponding seriesId field in Search feed spec. <br /><blockquote><p>For a TV series, you must pass (1) the seriesId (the ID of series asset) in the <strong>contentId</strong> field and (2) the playID of the episode in the <strong>episodeId</strong> field.</p></blockquote></td>
    </tr>

    <tr>
      <td>episodeId</td>
      <td>String</td>
      <td>Optional</td>
      <td>If the content is a TV episode that is part of a series, pass the following:<br /><ul><li>contentId: Pass the <strong>seriesId</strong> in this field. This should be the same as the seriesId in the app's Roku Search feed.</li><li>episodeId: Pass the <strong>episodeId</strong> in this field. This should be the same as the "playId" in the app's Roku Search Feed, or "contentId" in externalID implementations</li></ul><br />This enables Roku to enhance the UX presentation of the series resume point.<br /><br />If the <strong>waitForNextEpisodeAvailability</strong> field is set to true, the series will only be shown in the Continue Watching row after the subsequent episode is available in the app's search feed.</td>
    </tr>

    <tr>
      <td>waitForNextEpisodeAvailability</td>
      <td>Boolean</td>
      <td>Optional</td>
      <td>This field is used for episodic content. Set it to <strong>true</strong> when an episode has been completed and the next episode has not been released yet; otherwise, set it to <strong>false</strong>.<br /><br />Roku can use this information to show the content in the Continue Watching row whenever the next episode becomes available. <br /><br />This feature requires a <a href="https://roku-ent.readme.io/dev/docs/search-feed">search feed</a> that lists "serial" and "episode" assets.<br /><br />The following matrix demonstrates how to use this field. In this example, E1 and E2 are available, but E3 has not been released yet.<br /><table><tr><td>Event</td><td>episodeId value</td><td>waitForNextEpisodeAvailability flag</td><td>Episode shown in Continue Watching row</td></tr><tr><td>Start E1</td><td>E1</td><td>false</td><td>E1</td></tr><tr><td>Complete E1</td><td>E1</td><td>true</td><td>E2</td></tr><tr><td>Start E2</td><td>E2</td><td>false</td><td>E2</td></tr><tr><td>Complete E2</td><td>E2</td><td>true</td><td>none</td></tr><tr><td>E3 becomes available later</td><td>-</td><td>-</td><td>E3</td></tr><tr><td>Start E3</td><td>E3</td><td>false</td><td>E3</td></tr><tr><td>Complete E3</td><td>E3</td><td>true</td><td>none</td></tr></table><h4>Example</h4><p><strong>URL</strong>:</p><ul><li>POST [https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)</li><li>POST [https://userdata.sr.roku.com/user-data/v1/profile/\\\{profileId\\}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\\\{profileId\\}/content/continueWatching) (app has a profile selection screen)</li></ul><p><strong>JSON body</strong>:</p><pre><code>\{  "items": \[    \{      "contentId": "abc123",      "episodeId": "def123",      "lastInteractionTime": 123456,      "position": 854,      "duration": 1678,      "waitForNextEpisodeAvailability": true    }  ]}</code></pre></td>
    </tr>

    <tr>
      <td>profileLabel</td>
      <td>String</td>
      <td>Optional</td>
      <td>Enables Roku to label content in the Continue Watching row to identify which profile was watching the content item (this is different than the profileId in the endpoint URL, which is the UUID of the profile used to watch the content).</td>
    </tr>

    <tr>
      <td>lastInteractionTime</td>
      <td>Integer</td>
      <td>Required</td>
      <td>The unix timestamp of the playback event. This is used to help determine the ordering of items in the Continue Watching row. If data is unavailable, use the current epoch time.</td>
    </tr>

    <tr>
      <td>position</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>The timestamp of the content item (in seconds) when the playback event occurred. <br /><br />Providing the <strong>position</strong> and <strong>duration</strong> enables a progress bar that approximates the playback position to be displayed on the content thumbnail in the Continue Watching row (as long as playback has started, but not completed).</td>
    </tr>

    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Total running time of the content (in seconds).</td>
    </tr>
  </tbody>
</table>

### Retrieve API

To retrieve the list of content items in the Continue Watching row, send a **GET** request to the Continue Watching API:

**URL**:

* GET [https://userdata.sr.roku.com](https://userdata.sr.roku.com/)/user-data/v1/content/continueWatching
* GET [https://userdata.sr.roku.com](https://userdata.sr.roku.com/)/user-data/v1/profile/\{profileId}/content/continueWatching (app has a profile selection screen)

### Update API

To replace the list of content items in the Continue Watching row with a new list, send a **PUT** request to the Continue Watching API with a JSON body containing the same parameters listed in the [Add API section](#add-api):

### Delete API

To remove content items from the Continue Watching row, send a **DELETE** request to the Continue Watching API with a JSON body containing the **contentId** of the item to be removed.

#### Example

**URL**:

* DELETE [https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)
* DELETE [https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching) (app has a profile selection screen)

**JSON body**:

```
{
  "items": [
    {
      "contentId": "abc123"
    }
  ]
}
```

## Adding a 24/7 live linear stream to Continue Watching

As of Apr 1, 2026, the Continue Watching integration supports 24/7 live linear streams (liveFeed mediaType). The live linear stream must be included in your search feed, and you must make the following adjustments to your Continue Watching integration:

Events: A live linear stream requires a single playback event that is sent via a POST request after 60 seconds of playback. Do not make any other API calls to send events.

ContentId: The contentId is the ID of the live linear stream itself, not the currently playing program.

Deep links: When your app receives a deep link from Continue Watching, the contentId is is the ID of the live linear stream (not the currently running program), and the mediaType is “liveFeed”.  The required playback behavior is to resume with the currently running program in the stream.

## Managing user consent

If publishers require explicit consent from customers before adding their watched content to the Continue Watching row, it is the publisher's responsibility to implement this. Roku does not provide any mechanisms or APIs for handling user consent for the Continue Watching integration.

## Handling deep links from Continue Watching

Handling deep links sent to your app from the Continue Watching row is essentially the same as documented [here](doc:implementing-deep-linking). The deep links sent to your app include a **contentId** field with your unique ID for the content to be played, the **mediaType**, which dictates the playback experience, and the user's **profileId** (if your app has a profile selection screen).

**Syntax:**

```
http://<roku-device-ip-address>:8060/launch|input/\<channelId\>?contentId=<contentIdValue>&mediaType=<mediaTypeValue>&profileId=<profileIdValue>
```

**Example:**

```
http://192.168.1.4:8060/input/581251?contentId=dev-summit-21-keynote&mediaType=movie&profileId=12345
```

## Appendix A: Sample BrightScript code for adding HTTP headers

To call the Continue Watching APIs, the app must include BrightScript code that adds the following HTTP headers (see the [**ifHttpAgent.addHeader()** function](doc:ifhttpagent) for more information). You must set the endpoint first before providing the headers.

```
'SetUrl needs to be called first
request.SetUrl("https://userdata.sr.roku.com/user-data/v1/content/continueWatching");
request.AddHeader("Content-Type","application/json")
request.AddHeader("x-roku-reserved-jwt", "")
request.AddHeader("x-roku-reserved-channel-id", "<production app ID>") 'pass the production app ID
request.AddHeader("x-roku-reserved-channel-store-code", "")
request.AddHeader("x-roku-reserved-virtual-user-id", "")
request.AddHeader("x-roku-reserved-device-id", "")
request.AddHeader("x-roku-reserved-serial-number", "")
```

## Appendix B: Integration testing notes

Developers can test the Continue Watching integration in both sideloaded and beta environments. Testing should verify that each step in the [integration workflow](#integrating-into-continue-watching) is completed successfully.

#### End-to-end testing

When doing end-to-end testing, launching content from the Continue Watching row will always launch the production app instead of the sideloaded or beta version—even if the production version is not currently integrated with Continue Watching. This is because the app's search feed, which is used by Roku to load content into the Continue Watching row, is always associated with the production app. Testing therefore should focus on adding content to the Continue Watching row when playback starts, updating bookmarks as users stop and resume watching, and removing content when it has been completed.

#### Activating the Continue Watching row on new test devices

When using a Roku device that has not previously been used for testing the Continue Watching integration, the Continue Watching row is not displayed on the **What to Watch** screen until content on the app has been watched. The required watch time for adding the first content item to the Continue Watching row and therefore activating the feature on a new test device is as follows:

* If the app has a pixel-sharing agreement with Roku, you can watch a few minutes of content. The Continue Watching row should be active after 24 hours.

* If the app does not have a pixel-sharing agreement with Roku, you should watch two hours of content. The Continue Watching row should be active after 24 hours.

Once the Continue Watching row has displayed the first content item on that device, it will subsequently be updated as different content is watched.
