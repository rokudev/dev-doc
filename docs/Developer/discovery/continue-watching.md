---
title: Continue Watching
deprecated: false
hidden: false
metadata:
  robots: index
---
<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Continue Watching Documentation</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }
        h1, h2, h3, h4 { color: #2c3e50; }
        h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        h2 { border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; margin-top: 30px; }
        code { background-color: #ecf0f1; padding: 2px 4px; border-radius: 3px; font-size: 90%; }
        pre { background-color: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 5px; overflow-x: auto; }
        blockquote { border-left: 5px solid #3498db; padding: 10px 20px; margin: 15px 0; background-color: #f4f7f6; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top;}
        th { background-color: #f2f2f2; }
        .code-block { margin-top: 10px; }
    </style>
</head>
<body>

    <h1 id="continue-watching">Continue Watching</h1>

    <p>Continue Watching is a content category row within the <strong>What to Watch</strong> home screen navigation on Roku devices and on the Home screen of the Roku mobile app. It displays content from participating apps that customers have already started watching, which empowers customers with the speed and convenience of a single location from which they can resume content from different apps on any Roku device linked to their account. Publishers can integrate into this feature to make their content more accessible to customers, drive users to their apps, and increase engagement. Overall, this helps publishers promote their content in order to retain customers and reduce churn.</p>

    <p><img src="https://image.roku.com/ZHZscHItMTc2/continue-watching-ui-v2.png" alt="roku815px - continue watching row" /></p>

    <blockquote>
        <p>The Continue Watching feature is available on all Roku devices running Roku OS 11.0 or higher in the United States, Canda, United Kingdom, Germany, Mexico, Chile, Argentina, and Colombia.</p>
    </blockquote>

    <blockquote>
        <p>Apps in the U.S. Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must participate in Roku’s Continue Watching program to pass <a href="/docs/developer-program/certification/certification.md#4-channel-operation">certification</a>. This requirement also applies to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.</p>
        <p>Continue Watching only supports long-form content such as movies and television episodes. Short-form content (standalone content that is 15 minutes or less that is not a movie or TV show) is not supported.</p>
    </blockquote>

    <h2 id="overview">Overview</h2>

    <p>From the Roku home screen, customers can scroll down to the <strong>What to Watch</strong> screen. This screen features a <strong>Continue Watching</strong> row with content from participating apps, including movies and TV shows that the customer needs to finish, live linear apps that the customer was watching, and the next episodes in a television series. The Continue Watching row contains a maximum of 40 tiles, which are ordered based on Roku-proprietary algorithms that use various signals, including recency.</p>

    <blockquote>
        <p>The Continue Watching row is also available on the Home screen of the Roku mobile app.</p>
    </blockquote>

    <p>As customers browse content, metadata for the item with focus is displayed. This includes the publisher's logo, title, release date, rating, and duration. In addition, if the app supports user profiles, a label indicates the user that was watching that content item. A progress bar indicates the approximate playback position of the content item.</p>

    <p>When the customer selects a movie, TV show, or TV episode, it launches directly into playback (apps may not launch into a profile selection screen, content details screen, or any other screen when content is selected from the Continue Watching row). For customers with multiple Roku devices linked to their account, Continue Watching resumes playback at the bookmarked position on any of their devices.</p>

    <h2 id="prerequisites">Prerequisites</h2>

    <p>Apps must have completed the following integrations to participate in Roku Continue Watching:</p>

    <ol>
        <li><a href="/docs/developer-program/discovery/search/implementing-search.md"><strong>Roku Search</strong></a>. Enables customers to find content on your app.</li>
        <li><a href="/docs/developer-program/discovery/implementing-deep-linking.md"><strong>Deep linking</strong></a>. Enables the requested content to be launched directly into playback on your app.</li>
        <li><a href="/docs/developer-program/media-playback/bookmarking.md"><strong>Bookmarking</strong></a>. Resumes playback of the requested content at its last watched position.</li>
    </ol>

    <h2 id="getting-started">Getting started</h2>

    <p>To get started with the Continue Watching integration, follow these steps:</p>

    <ol>
        <li>Verify that your app meets the listed <a href="#prerequisites">prerequisites</a>.</li>
        <li>Contact the <a href="https://developer.roku.com/contact">Roku Partner Success team</a>. They will determine whether your app is eligible for Continue Watching and enable your app to access the Continue Watching service endpoints.</li>
        <li>Request device tokens for testing the Continue Watching integration in a sideloaded environment. Provide Roku Partner Engineering with the serial numbers of the Roku devices to be used for testing during development. Upon receiving the device tokens, install them on their respective test devices by entering the following cURL command in a terminal application:</li>
    </ol>

    <pre><code>curl --data-binary @&lt;token-file&gt; http://&lt;Roku_IP&gt;:8060/token/install</code></pre>

    <p>The response from the terminal application should be as follows:</p>

    <pre class="code-block"><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
        &lt;TokenCmdResponse&gt;
            &lt;Command&gt;Install&lt;/Command&gt;
            &lt;Response&gt;Success&lt;/Response&gt;
        &lt;/TokenCmdResponse&gt;</code></pre>

    <ol start="4">
        <li>Once development has been completed, request authentication tokens for testing the Continue Watching integration in a beta environment. This enables you to complete QA testing before releasing your updated app to production. Provide Roku Partner Engineering with the list of the app IDs to be used for QA testing. Upon receiving the app token, add it to the <a href="/docs/developer-program/getting-started/architecture/channel-manifest.md">manifest</a> (channel_token=&lt;token&gt;). The <strong>channel authentication token</strong> will also be used in your production application.</li>
    </ol>

    <h2 id="integrating-into-continue-watching">Integrating into Continue Watching</h2>

    <p>Integrating into Continue Watching entails calling the Roku Continue Watching APIs when a playback event occurs. Playback events occur when the customer exits the video player or finishes watching content. Sending events identifies which content the customers can keep watching and where to resume playback. Publishers can use the Roku Continue Watching APIs to add, update, and remove content items. The workflow is illustrated and summarized as follows:</p>

    <p><img src="https://image.roku.com/ZHZscHItMTc2/continue-watching-api-flow-v1.jpeg" alt="roku815px - cw-api-flow" /></p>

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
                <td>
                    <p>The publisher controls how long content has been watched (for example, one minute) before it is added to the Continue Watching row. Once the publisher-configured interval has been reached, the app makes a POST request to add the content to the Continue Watching row.</p>
                    <blockquote>
                        <p>During playback, do not make Continue Watching API calls to update the playback position. The main purpose of the Continue Watching user experience is to aggregate in-progress content and streamline resumption. The progress bar used to reflect the current bookmark in the Continue Watching row is an approximation. If the customer presses the Home button after the POST request has been sent, the content will still be listed in the Continue Watching row, which is the primary goal of the feature.</p>
                    </blockquote>
                </td>
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

    <h3 id="api-reference">API Reference</h3>

    <p>The following table summarizes the basic information for the Continue Watching RESTful web services:</p>

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
                <td>
                    <p>The base URLs for the Continue Watching APIs are as follows:</p>
                    <ul>
                        <li>https://userdata.sr.roku.com/user-data/v1/content/continueWatching</li>
                        <li>https://userdata.sr.roku.com/user-data/v1/profile/{<strong>profileId</strong>}/content/continueWatching (use this endpoint if your app has a profile selection screen and the content being passed is specific to the provided <strong>profileId</strong> (the unique user ID [UUID] of the user profile). The <strong>profileId</strong> is passed back to the app in a deep link request from the Continue Watching feature.</li>
                    </ul>
                    <blockquote>
                        <p>Do not send kids profile data to Roku when calling these endpoints.</p>
                    </blockquote>
                </td>
            </tr>
            <tr>
                <td><strong>Protocol</strong></td>
                <td>Continue Watching API calls may only be sent using HTTPS.</td>
            </tr>
            <tr>
                <td><strong>Methods</strong></td>
                <td>
                    <p>The Continue Watching APIs support the following REST methods for adding, retrieving, updating, and deleting content items:</p>
                    <ul>
                        <li><strong>POST</strong>. Add one or more new content items; update existing items.</li>
                        <li><strong>GET</strong>. Retrieve the existing list of content items.</li>
                        <li><strong>PUT</strong>. Replace the entire existing list of content items. When making this request, include all the content that should remain in the Continue Watching row (for example, a PUT request with a single item replaces the current list with that one item). Passing an empty body removes all content from the list.</li>
                        <li><strong>DELETE</strong>. Remove one or more content items.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>Header</strong></td>
                <td>
                    <p>Requests to the Continue Watching APIs require the following headers (the Roku OS automatically populates the headers with empty string values):</p>
                    <ul>
                        <li><strong>Content-Type:</strong> application/json</li>
                        <li><strong>x-roku-reserved-jwt</strong>: ""</li>
                        <li><strong>x-roku-reserved-channel-id</strong>: "&lt;channelId&gt;" (the production app ID is required to sideload and test the app during development because it is linked to the search feed. In production, the Roku OS will override this value, which means you can continue passing it after development has been completed).</li>
                        <li><strong>x-roku-reserved-channel-store-code</strong>: ""</li>
                        <li><strong>x-roku-reserved-virtual-user-id</strong>: ""</li>
                        <li><strong>x-roku-reserved-device-id</strong>: ""</li>
                        <li><strong>x-roku-reserved-serial-number</strong>: ""</li>
                    </ul>
                    <blockquote>
                        <p>See <a href="#appendix-a-sample-brightscript-code-for-adding-http-headers">Appendix A</a> for sample BrightScript code that demonstrates how to add these headers to your app. Do not use the <a href="/docs/references/brightscript/interfaces/ifhttpagent.md#setheadersnamevaluemap-as-object-as-boolean">roHttpAgent.setHeaders()</a> function to pass the headers.</p>
                    </blockquote>
                </td>
            </tr>
            <tr>
                <td><strong>Response</strong></td>
                <td>
                    <p>The Continue Watching APIs return one of the following response codes:</p>
                    <ul>
                        <li><strong>200</strong>: OK</li>
                        <li><strong>204</strong>: No content (DELETE requests only)</li>
                        <li><strong>400</strong>: Bad request (required fields are missing from the payload; a description of the error is returned)</li>
                        <li><strong>401</strong>: Unauthorized (DELETE requests only)</li>
                        <li><strong>403</strong>: Forbidden (if an invalid partner)</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <h3 id="add-api">Add API</h3>

    <p>To add new content items and update existing ones to the Continue Watching row, send a <strong>POST</strong> request to the Continue Watching API with the following parameters in the JSON body:</p>

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
                <td>
                    <p>The ASCII string (maximum 255 characters) used to uniquely identify the content in your app. </p>
                    <p>This maps directly to the playID (contentId) field in the <a href="/docs/specs/search/search-feed.md">Roku Search feed specification</a> or contentId for any search implementations using externalId providers.</p>
                    <p>For a TV series, the seriesId maps to the corresponding seriesId field in Search feed spec. </p>
                    <blockquote>
                        <p>For a TV series, you must pass (1) the seriesId (the ID of series asset) in the <strong>contentId</strong> field and (2) the playID of the episode in the <strong>episodeId</strong> field.</p>
                    </blockquote>
                </td>
            </tr>
            <tr>
                <td>episodeId</td>
                <td>String</td>
                <td>Optional</td>
                <td>
                    <p>If the content is a TV episode that is part of a series, pass the following:</p>
                    <ul>
                        <li>contentId: Pass the <strong>seriesId</strong> in this field. This should be the same as the seriesId in the app's Roku Search feed.</li>
                        <li>episodeId: Pass the <strong>episodeId</strong> in this field. This should be the same as the "playId" in the app's Roku Search Feed, or "contentId" in externalID implementations</li>
                    </ul>
                    <p>This enables Roku to enhance the UX presentation of the series resume point.</p>
                    <p>If the <strong>waitForNextEpisodeAvailability</strong> field is set to true, the series will only be shown in the Continue Watching row after the subsequent episode is available in the app's search feed.</p>
                </td>
            </tr>
            <tr>
                <td>waitForNextEpisodeAvailability</td>
                <td>Boolean</td>
                <td>Optional</td>
                <td>
                    <p>This field is used for episodic content. Set it to <strong>true</strong> when an episode has been completed and the next episode has not been released yet; otherwise, set it to <strong>false</strong>.</p>
                    <p>Roku can use this information to show the content in the Continue Watching row whenever the next episode becomes available.</p>
                    <p>This feature requires a <a href="https://developer.roku.com/docs/specs/search/search-feed.md">search feed</a> that lists "serial" and "episode" assets.</p>
                    <p>The following matrix demonstrates how to use this field. In this example, E1 and E2 are available, but E3 has not been released yet.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>episodeId value</th>
                                <th>waitForNextEpisodeAvailability flag</th>
                                <th>Episode shown in Continue Watching row</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Start E1</td>
                                <td>E1</td>
                                <td>false</td>
                                <td>E1</td>
                            </tr>
                            <tr>
                                <td>Complete E1</td>
                                <td>E1</td>
                                <td>true</td>
                                <td>E2</td>
                            </tr>
                            <tr>
                                <td>Start E2</td>
                                <td>E2</td>
                                <td>false</td>
                                <td>E2</td>
                            </tr>
                            <tr>
                                <td>Complete E2</td>
                                <td>E2</td>
                                <td>true</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>E3 becomes available later</td>
                                <td>-</td>
                                <td>-</td>
                                <td>E3</td>
                            </tr>
                            <tr>
                                <td>Start E3</td>
                                <td>E3</td>
                                <td>false</td>
                                <td>E3</td>
                            </tr>
                            <tr>
                                <td>Complete E3</td>
                                <td>E3</td>
                                <td>true</td>
                                <td>none</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
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

    <h4 id="example">Example</h4>

    <p><strong>URL</strong>:</p>
    <ul>
        <li>POST https://userdata.sr.roku.com/user-data/v1/content/continueWatching</li>
        <li>POST https://userdata.sr.roku.com/user-data/v1/profile/{profileId}/content/continueWatching (app has a profile selection screen)</li>
    </ul>

    <p><strong>JSON body</strong>:</p>

    <pre class="code-block"><code>{
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
}</code></pre>

    <h3 id="retrieve-api">Retrieve API</h3>

    <p>To retrieve the list of content items in the Continue Watching row, send a <strong>GET</strong> request to the Continue Watching API:</p>

    <p><strong>URL</strong>:</p>
    <ul>
        <li>GET <a href="https://userdata.sr.roku.com/">https://userdata.sr.roku.com/</a>user-data/v1/content/continueWatching</li>
        <li>GET <a href="https://userdata.sr.roku.com/">https://userdata.sr.roku.com/</a>user-data/v1/profile/{profileId}/content/continueWatching (app has a profile selection screen)</li>
    </ul>

    <h3 id="update-api">Update API</h3>

    <p>To replace the list of content items in the Continue Watching row with a new list, send a <strong>PUT</strong> request to the Continue Watching API with a JSON body containing the same parameters listed in the <a href="#add-api">Add API section</a>:</p>

    <h3 id="delete-api">Delete API</h3>

    <p>To remove content items from the Continue Watching row, send a <strong>DELETE</strong> request to the Continue Watching API with a JSON body containing the <strong>contentId</strong> of the item to be removed.</p>

    <h4 id="example-1">Example</h4>

    <p><strong>URL</strong>:</p>
    <ul>
        <li>DELETE https://userdata.sr.roku.com/user-data/v1/content/continueWatching</li>
        <li>DELETE https://userdata.sr.roku.com/user-data/v1/profile/{profileId}/content/continueWatching (app has a profile selection screen)</li>
    </ul>

    <p><strong>JSON body</strong>:</p>

    <pre class="code-block"><code>{
  "items": [
    {
      "contentId": "abc123"
    }
  ]
}</code></pre>

    <h2 id="managing-user-consent">Managing user consent</h2>

    <p>If publishers require explicit consent from customers before adding their watched content to the Continue Watching row, it is the publisher's responsibility to implement this. Roku does not provide any mechanisms or APIs for handling user consent for the Continue Watching integration.</p>

    <h2 id="handling-deep-links-from-continue-watching">Handling deep links from Continue Watching</h2>

    <p>Handling deep links sent to your app from the Continue Watching row is essentially the same as documented <a href="/docs/developer-program/discovery/implementing-deep-linking.md">here</a>. The deep links sent to your app include a <strong>contentId</strong> field with your unique ID for the content to be played, the <strong>mediaType</strong>, which dictates the playback experience, and the user's <strong>profileId</strong> (if your app has a profile selection screen).</p>

    <p><strong>Syntax:</strong></p>

    <pre><code>http://&lt;roku-device-ip-address&gt;:8060/launch|input/&lt;channelId&gt;?contentId=&lt;contentIdValue&gt;&amp;mediaType=&lt;mediaTypeValue&gt;&amp;profileId=&lt;profileIdValue&gt;</code></pre>

    <p><strong>Example:</strong></p>

    <pre><code>http://192.168.1.4:8060/input/581251?contentId=dev-summit-21-keynote&amp;mediaType=movie&amp;profileId=12345</code></pre>

    <h2 id="appendix-a-sample-brightscript-code-for-adding-http-headers">Appendix A: Sample BrightScript code for adding HTTP headers</h2>

    <p>To call the Continue Watching APIs, the app must include BrightScript code that adds the following HTTP headers (see the <a href="/docs/references/brightscript/interfaces/ifhttpagent.md#addheadername-as-string-value-as-string-as-boolean"><strong>ifHttpAgent.addHeader()</strong> function</a> for more information). You must set the endpoint first before providing the headers.</p>

    <pre class="code-block"><code>'SetUrl needs to be called first
request.SetUrl("https://userdata.sr.roku.com/user-data/v1/content/continueWatching");
request.AddHeader("Content-Type","application/json")
request.AddHeader("x-roku-reserved-jwt", "")
request.AddHeader("x-roku-reserved-channel-id", "&lt;production app ID&gt;") 'pass the production app ID
request.AddHeader("x-roku-reserved-channel-store-code", "")
request.AddHeader("x-roku-reserved-virtual-user-id", "")
request.AddHeader("x-roku-reserved-device-id", "")
request.AddHeader("x-roku-reserved-serial-number", "")</code></pre>

    <h2 id="appendix-b-integration-testing-notes">Appendix B: Integration testing notes</h2>

    <p>Developers can test the Continue Watching integration in both sideloaded and beta environments. Testing should verify that each step in the <a href="#integrating-into-continue-watching">integration workflow</a> is completed successfully.</p>

    <h4 id="end-to-end-testing">End-to-end testing</h4>

    <p>When doing end-to-end testing, launching content from the Continue Watching row will always launch the production app instead of the sideloaded or beta version—even if the production version is not currently integrated with Continue Watching. This is because the app's search feed, which is used by Roku to load content into the Continue Watching row, is always associated with the production app. Testing therefore should focus on adding content to the Continue Watching row when playback starts, updating bookmarks as users stop and resume watching, and removing content when it has been completed.</p>

    <h4 id="activating-the-continue-watching-row-on-new-test-devices">Activating the Continue Watching row on new test devices</h4>

    <p>When using a Roku device that has not previously been used for testing the Continue Watching integration, the Continue Watching row is not displayed on the <strong>What to Watch</strong> screen until content on the app has been watched. The required watch time for adding the first content item to the Continue Watching row and therefore activating the feature on a new test device is as follows:</p>

    <ul>
        <li>If the app has a pixel-sharing agreement with Roku, you can watch a few minutes of content. The Continue Watching row should be active after 24 hours.</li>
        <li>If the app does not have a pixel-sharing agreement with Roku, you should watch two hours of content. The Continue Watching row should be active after 24 hours.</li>
    </ul>

    <p>Once the Continue Watching row has displayed the first content item on that device, it will subsequently be updated as different content is watched.</p>

</body>
</html>
`}</HTMLBlock>

<br />
