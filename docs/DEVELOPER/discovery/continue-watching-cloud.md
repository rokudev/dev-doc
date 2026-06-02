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

> The Continue Watching feature is available on all Roku devices running [Roku OS 11.0](doc:release-notes#roku-os-110) or higher in the United States, Canada, United Kingdom, Germany, Mexico, Chile, Argentina, and Colombia.
>
> Apps in the U.S. Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must participate in Roku’s Continue Watching program to pass [certification](doc:certification#4-app-operation). This requirement also applies to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.
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
4. In the Create API key dialog, enter a Key name for your API key that makes it easy to identify (for example, you can enter the name of your Beta app) and a Description, and then click Create & Download API key. The private key is only available for download upon being created; you can download the corresponding public key from the Developer Dashboard anytime.  The API key has a time-to-live (TTL) of 90 days.

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
      <td>The URL for the Continue Watching APIs is <code>[https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching](https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching)</code>. User profile data is sent as part of the encrypted payload included in the API call. A separate endpoint for receiving profile-specific continue-watching data is not used.</td>
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
      <td>Requests to the Continue Watching APIs require the following headers (the Roku OS automatically populates the headers with empty string values):<ul>
      <li><p><strong>Authorization bearer</strong>: The JWT-encrypted payload, which includes the continue watching event data.</p></li><li><p><strong>Content-Type</strong>: application/json</p></li>
      <li><p><strong>Accept</strong>: application/json</p></li><li><p><strong>x-roku-reserved-federation-token</strong>: An encrypted payload that includes the channel ID and customer's unique user ID (UUID)</p>
      </li></ul><blockquote>See <a href="#appendix-a-sample-brightscript-code-for-adding-http-headers">Appendix A</a> for sample BrightScript code that demonstrates how to add these headers to your app. Do not use the [roHttpAgent.setHeaders()](doc:ifhttpagent#setheadersnamevaluemap-as-object-as-boolean) function to pass the headers.</blockquote></td>
    </tr>
    <tr>
      <td><strong>Response</strong></td>
      <td>The Continue Watching APIs return one of the following response codes:<ul><li><strong>200</strong>: OK</li><li><strong>204</strong>: No content (DELETE requests only)</li><li><strong>400</strong>: Bad request (required fields are missing from the payload; a description of the error is returned)</li><li><strong>401</strong>: Unauthorized (DELETE requests only)</li><li><strong>403</strong>: Forbidden (if an invalid partner)</li><li><strong>424</strong>: A Roku web service that the Continue Watching API depends on returned an error. </li><li><strong>500</strong>: An internal Roku web service error.</li></ul></td>
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
      <td>This field is used for episodic content. Set it to <strong>true</strong> when an episode has been completed and the next episode has not been released yet; otherwise, set it to <strong>false</strong>.<br /><br />Roku can use this information to show the content in the Continue Watching row whenever the next episode becomes available. <br /><br />This feature requires a <a href="/dev/docs/search-feed">search feed</a> that lists "serial" and "episode" assets.<br /><br />The following matrix demonstrates how to use this field. In this example, E1 and E2 are available, but E3 has not been released yet.<br /><table><tr><td>Event</td><td>episodeId value</td><td>waitForNextEpisodeAvailability flag</td><td>Episode shown in Continue Watching row</td></tr><tr><td>Start E1</td><td>E1</td><td>false</td><td>E1</td></tr><tr><td>Complete E1</td><td>E1</td><td>true</td><td>E2</td></tr><tr><td>Start E2</td><td>E2</td><td>false</td><td>E2</td></tr><tr><td>Complete E2</td><td>E2</td><td>true</td><td>none</td></tr><tr><td>E3 becomes available later</td><td>-</td><td>-</td><td>E3</td></tr><tr><td>Start E3</td><td>E3</td><td>false</td><td>E3</td></tr><tr><td>Complete E3</td><td>E3</td><td>true</td><td>none</td></tr></table></td>
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

#### Example

**URL**:

* POST [https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)
* POST [https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching) (app has a profile selection screen)

**JSON body**:

```json
{
  "items": [
    {
      "contentId": "abc123",
      "episodeId": "def123",
      "lastInteractionTime": 123456,
      "position": 854,
      "duration": 1678,
      "waitForNextEpisodeAvailability": true
    }
  ]
}
```

**Example (cURL):**

```bash
curl --location --reque
st POST 'https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching' \
--header 'Authorization: Bearer <encrypted payload with raw JSON data>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-roku-reserved-federation-token: 8adb6673-8cf0-5743-a797-70bbf7f654a6' \
--data-raw '{"items": [{"episodeId": "52bbbb5d-e6ec-483c-8df1-65e5393d610f", "waitForNextEpisodeAvailability": true, "contentId": "f933a73d-893e-4e58-82da-3eb290f5535d", "duration": 91, "position": 109, "kidsProfile": false, "lastInteractionTime": 1711697951, "profileId": "test-profile-1"]
```

### Retrieve API

To retrieve the list of content items in the Continue Watching row, send a **GET** request to the Continue Watching API:

**URL**:

* GET [https://userdata.sr.roku.com](https://userdata.sr.roku.com/)/user-data/v1/content/continueWatching
* GET [https://userdata.sr.roku.com](https://userdata.sr.roku.com/)/user-data/v1/profile/\{profileId}/content/continueWatching (app has a profile selection screen)

**Example (cURL):**

```bash
curl --location --request GET 'https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching' \
--header 'Authorization: Bearer <encrypted payload>'\
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-roku-reserved-federation-token: <payload with encrypted channel and user IDs>'
```

### Update API

To replace the list of content items in the Continue Watching row with a new list, send a **PUT** request to the Continue Watching API with a JSON body containing the same parameters listed in the [Add API section](https://developer.roku.com/docs/developer/discovery/continue-watching.md#add-api).

**Example (cURL):**

```bash
curl --location --request PUT 'https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching' \
--header 'Authorization: Bearer <encrypted payload with raw JSON data>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-roku-reserved-federation-token: <payload with encrypted channel and user IDs>' \
--data-raw '{"items": [{"episodeId": "52bbbb5d-e6ec-483c-8df1-65e5393d610f", "waitForNextEpisodeAvailability": true, "contentId": "f933a73d-893e-4e58-82da-3eb290f5535d", "duration": 115, "position": 120, "kidsProfile": false, "lastInteractionTime": 1711697951, "profileId": "test-profile-1"}]}'
```

### Delete API

To remove content items from the Continue Watching row, send a **DELETE** request to the Continue Watching API with a JSON body containing the **contentId** of the item to be removed.

#### Example

**URL**:

* DELETE [https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)
* DELETE [https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching) (app has a profile selection screen)

**JSON body**:

```json
{
  "items": [
    {
      "contentId": "abc123"
    }
  ]
}
```

**Example (cURL):**

```bash
curl --location --request DELETE 'https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching' \
--header 'Authorization: Bearer <encrypted payload with raw JSON data>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-roku-reserved-federation-token: 8adb6673-8cf0-5743-a797-70bbf7f654a6' \
--data-raw '{
    "items": [{"contentId": "f933a73d-893e-4e58-82da-3eb290f5535d"}]}'
```

## Adding a 24/7 live linear stream to Continue Watching

As of Apr 1, 2026, the Continue Watching integration supports 24/7 live linear streams (liveFeed mediaType). The live linear stream must be included in your search feed, and you must make the following adjustments to your Continue Watching integration:

* **Events**: A live linear stream requires a single playback event that is sent via a POST request after 60 seconds of playback. Do not make any other API calls to send events.
* **ContentId**: The contentId is the ID of the live linear stream itself, not the currently playing program.
* **Deep links**: When your app receives a deep link from Continue Watching, the contentId is is the ID of the live linear stream (not the currently running program), and the mediaType is “liveFeed”.  The required playback behavior is to resume with the currently running program in the stream.

## Managing user consent

If publishers require explicit consent from customers before adding their watched content to the Continue Watching row, it is the publisher's responsibility to implement this. Roku does not provide any mechanisms or APIs for handling user consent for the Continue Watching integration.

## Handling deep links from Continue Watching

Handling deep links sent to your app from the Continue Watching row is essentially the same as documented [here](doc:implementing-deep-linking). The deep links sent to your app include a **contentId** field with your unique ID for the content to be played, the **mediaType**, which dictates the playback experience, and the user's **profileId** (if your app has a profile selection screen).

**Syntax:**

```
http://<roku-device-ip-address>:8060/launch|input/<channelId>?contentId=<contentIdValue>&mediaType=<mediaTypeValue>&profileId=<profileIdValue>
```

**Example:**

```
http://192.168.1.4:8060/input/581251?contentId=dev-summit-21-keynote&mediaType=movie&profileId=12345
```

## Appendix A: Sample BrightScript code for adding HTTP headers

To call the Continue Watching APIs, the app must include BrightScript code that adds the following HTTP headers (see the [**ifHttpAgent.addHeader()** function](doc:ifhttpagent) for more information). You must set the endpoint first before providing the headers.

```
'SetUrl needs to be called first
request.SetUrl("https://userdata.sr.roku.com/user-data/v1/content/continueWatching")
request.AddHeader("Content-Type","application/json")
request.AddHeader("x-roku-reserved-jwt", "")
request.AddHeader("x-roku-reserved-channel-id", "<production app ID>") 'pass the production app ID
request.AddHeader("x-roku-reserved-channel-store-code", "")
request.AddHeader("x-roku-reserved-virtual-user-id", "")
request.AddHeader("x-roku-reserved-device-id", "")
request.AddHeader("x-roku-reserved-serial-number", "")
```

## Appendix B: Authenticating Continue Watching API calls

You can use Roku's external API service ([apipub.roku.com](http://apipub.roku.com/)) to send authenticated messages to Roku. The service authenticates HTTPS requests and ingests them into Roku’s cloud services.

### Request body

The HTTPS request body may be any arbitrary array of bytes. Roku's gateway calculates an SHA-256 hash and compares it with the digest in the JWT claim of the request. The PUT and PATCH methods require a request body.

### Authorization header

Inbound requests must use the Bearer Authentication scheme. The bearer token must be a [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519) with the following header, payload, and signature :

#### JWT header

The JWT header must have the following parameters (all other parameters are ignored):

```json
{
  "typ": "JWT",
  "alg": "RS256",
  "kid": "key-thumbprint"
}
```

| **Parameter** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                    |
| :------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| typ           | string   | Set to "JWT"                                                                                                                                                                                                                                                                                                                       |
| alg           | string   | Set to "[RS256](https://datatracker.ietf.org/doc/html/rfc7518#section-3.1)"                                                                                                                                                                                                                                                        |
| kid           | string   | The key ID (thumbprint) for the public key that is used to verify the message's signature. You can get the key ID from the API access page. It is also included in the public key that you can download from that page. The key ID is also included in the PUT and GET responses of the Key Rotation APIs described in Appendix B. |

**Generating the token:** The following Python3 code demonstrates how to create the JWT.

```python
# key is private key. Specify payload as per the specification.
token = jwt.encode(payload=payload, key=key, algorithm='RS256', headers=headers)
jwt_token = token.decode('utf-8')
```

#### JWT payload

The JWT payload must have the following claims:

```json
{
  "exp": 1639524781,
  "nbf": 1639524000,
  "x-roku-request-key": "some-unique-key-for-the-request",
  "x-roku-request-spec": {
      "serviceUrn": "urn:roku:group:service",
      "httpMethod": "POST",
      "path": "/user-data/v1/content/continueWatching",
      "bodySha256Base64": "AAAAB3NzaC1yc2EAAAADAQABAAABgQCsngzCcay+lQ+..."
    }
}
```

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Claim**
      </th>
      <th>
        **Type**
      </th>
      <th>
        **Description**
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        **Registered**
      </td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        exp
      </td>
      <td>
        number
      </td>
      <td>
        Required. The time (a unix timestamp) after which this message should be considered invalid and discarded[.](https://en.wikipedia.org/wiki/Unix_time#Encoding_time_as_a_number) Requests with a token that have an expiration time greater than 24 hours in the future are rejected.
      </td>
    </tr>
    <tr>
      <td>
        nbf
      </td>
      <td>
        number
      </td>
      <td>
        Optional. The time (a unix timestamp) before which this message should be considered invalid and discarded.
      </td>
    </tr>
    <tr>
      <td>
        **Private**
      </td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        x-roku-request-key
      </td>
      <td>
        string
      </td>
      <td>
        A string that uniquely identifies this request. This is used for request tracing when troubleshooting.
      </td>
    </tr>
    <tr>
      <td>
        x-roku-request-spec
      </td>
      <td>
        string
      </td>
      <td>
        A JSON object that specifies how to build the internal request. The spec is transformed into a URL with the following syntax: <code>https://apipub.roku.com/developer/v1/external?param1=param1Val&amp;param2=param2Val</code>. The object contains the following fields:
        <br /><br />
        <ul>
          <li><strong>serviceUrn</strong>: The serviceURN specifies the internal Roku service that should handle this request. This may be one of the following values:
            <ul>
              <li>urn:roku:cloud-services:publickey-service</li>
              <li>urn:roku:cloud-services:chanprovsvc</li>
            </ul>
          </li>
          <li><strong>httpMethod</strong>: The Continue Watching API supports the following methods: GET, PUT, POST, and DELETE (all other methods will result in an error response).</li>
          <li><strong>path</strong>: The service resource being called, which is <code>/user-data/v1/content/continueWatching</code>.</li>
          <li><strong>bodySha256Base64</strong>: The body is an SHA-256 hash calculated over the raw bytes of the HTTP request body that is encoded using Base 64. Do not include the body for GET and DELETE requests (Roku's inbound request service ignores the body for these requests).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</Table>

The HTTP method must match the method invoked on the internal service.

The path and parameters sent to Roku's inbound request service are ignored; however, they should still match the internal request for clarity.

#### JWT signature

The JWT must be signed with the private part of the public key specified in the JOSE header. The public key is used to verify the JWT signature and authenticate your API calls.

## Appendix C: Sample code for sending authenticated Continue Watching API calls

This section demonstrates how to send Continue Watching API calls to Roku using Python.

#### Prerequisites

The following packages must be installed to run this sample:

```bash
pip install requests
pip install pycryptodome
```

**Token generation**

```python
import json
import jwt
from datetime import datetime, timedelta, timezone
import uuid
class GenerateToken:
    """
    generate tokens for various paths and methods
    """
    def __init__(self, key_file, kid):
        """
        """
        self.key_file = key_file
        self.kid = kid
        with open(self.key_file) as f:
            private_key_jwk = f.read()
        self.existing_jwk_key = json.loads(private_key_jwk)
        self.existing_private_key = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(self.existing_jwk_key))
    def get_token(self, method="GET", path="/user-data/v1/content/continueWatching", hours=1, body=None):
        x_roku_request_key = str(uuid.uuid4())
        x_roku_request_spec = {}
        if method == "GET":
            x_roku_request_spec = {
                "serviceUrn": "urn:roku:sr:userdata",
                "httpMethod": method,
                "path": path
            }
        if method == "POST":
            x_roku_request_spec = {
                "serviceUrn": "urn:roku:sr:userdata",
                "httpMethod": method,
                "path": path,
                "bodySha256Base64": body
            }
        if method == "PUT":
            x_roku_request_spec = {
                "serviceUrn": "urn:roku:sr:userdata",
                "httpMethod": method,
                "path": path,
                "bodySha256Base64": body
            }
        if method == "DELETE":
            x_roku_request_spec = {
                "serviceUrn": "urn:roku:sr:userdata",
                "httpMethod": method,
                "path": path,
                "bodySha256Base64": body
            }
        payload = {
            "exp": datetime.now(timezone.utc) + timedelta(hours=hours),
            "x-roku-request-key": x_roku_request_key,
            "x-roku-request-spec": x_roku_request_spec
        }
        # JWT header
        headers = {
            "typ": "JWT",
            "alg": "RS256",
            "kid": self.kid
        }
        token = jwt.encode(payload=payload, key=self.existing_private_key, algorithm='RS256', headers=headers)
        return token
if __name__ == '__main__':
    g = GenerateToken("developer_key.json", "uiCEF9WIAS7_USadPZyX-CFLLcfPA1IXnrEp3sicV24")
    token = g.get_token(hours=20)
    jwt_get= token.decode('utf-8')
    # Generate headers.
    headers = {'Authorization': "Bearer %s" % jwt_get, 'Content-Type': 'application/json',
               'Accept': 'application/json',
               'x-roku-reserved-federation-token': '8adb6673-8cf0-5743-a797-70bbf7f654a6'}
    url = 'https://apipub.roku.com/developer/v1/user-data/v1/content/continueWatching'
    response = requests.get(url, headers=headers,
                              verify=False,
                              timeout=60)
```
