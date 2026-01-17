---
title: Roku advertising requirements
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


This document lists the requirements for displaying video and interactive ads in a channel. These requirements are applicable for both client-side and server-side ad requests. Apps must adhere to these requirements to pass certification, including those related to the Roku Advertising Framework (RAF).

## Roku advertising framework (RAF) requirements


### RAF 1 Integration requirements


| Requirement | Description          | Documentation                                                |                                                              |
| :---------- | :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| RAF 1.1     | RAF integration      | Apps must integrate RAF for all ads without modifying, obstructing, or disabling RAF functionality in any way. Replays of live broadcast streams are exempt from this requirement, unless ad insertion is used to insert new ads. | [RAF integration guide](/docs/developer-program/advertising/roku-advertising-framework.md) |
| RAF 1.2     | Measurement beacons  | Apps must fire all measurement beacons client-side via RAF.  This requirement is applicable for both client-side and server-side ad insertion. | [Roku Advertising Watermark integration guide](/docs/developer-program/advertising/ad-watermark.md) |
| RAF 1.3     | Audience measurement | Apps in the U.S. Streaming Store only that are not child-directed must support Roku ad tracking by calling the [enableAdMeasurements()](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method and passing the required content metadata within the following methods: [setContentGenre()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), [setContentId()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), and [setContentLength()](/docs/developer-program/advertising/raf-api.md#setcontentlengthlength-as-integer).  Optionally, apps may use the [setNielsenGenre API](/docs/developer-program/advertising/raf-api.md#setnielsengenregenre-as-string) to pass specific Nielsen Genre granularity and the [setNielsenAppId API](/docs/developer-program/advertising/raf-api.md#setnielsenappidid-as-string) for those who specify a custom Nielsen App ID.  The [enableAdMeasurements](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method deprecates the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API; therefore, do not use the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API. | [General Audience Measurement](/docs/developer-program/advertising/raf-api.md#general-audience-measurement) |
| RAF 1.4     | Ad break - numbering | For ads inserted client-side, apps must display the number of ads during ad breaks using the standard Roku-branded label applied by RAF. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |

## General advertising requirements


### ADS 1 General integration requirements

<table>
<thead>
<tr>
<th>Requirement</th>
<th>Name</th>
<th>Description</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ADS 1.1</td>
<td>SDKs and libraries</td>
<td>Partners must disclose integration/use of all non-Roku SDKs, libraries, or other software systems and external advertising partners (for example, DSPs) that enable video, audio, or banner ad insertion, and Roku has the right to approve or deny such non-Roku SDKs, libraries, or other software systems.</td>
<td><a href="/docs/developer-program/advertising/roku-advertising-framework.md">Roku Advertising Framework overview</a></td>
</tr>
<tr>
<td>ADS 1.2</td>
<td>Ad terms</td>
<td>Apps that have an inventory relationship with Roku must meet the advertising terms specified in all applicable agreements.</td>
<td><a href="/docs/features/monetization/video-advertisements.md">Video Advertising</a></td>
</tr>
<tr>
<td>ADS 1.3</td>
<td>Ad experience</td>
<td>Apps selling ads exclusively and/or with Roku must comply with ad load, ad frequency, and acceptable ad requirements.</td>
<td><a href="http://www.roku.com/adguidelines">Roku Advertising Guidelines</a></td>
</tr>
<tr>
<td>ADS 1.4</td>
<td>Demand API</td>
<td>Apps in the U.S. Streaming Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months may be required to implement the Demand API as part of their integration (this requirement may also be applicable to new apps projected to reach the specified thresholds shortly after launch).<br /><br />Apps outside the U.S. Streaming Store that have streamed more than an average of 200,000 hours per month over the last three months, and new apps outside the U.S. Streaming Store that are projected to reach this threshold, may also be required to implement the Demand API.</td>
<td><a href="/docs/developer-program/advertising/demand-api.md">Implementing the Demand API</a></td>
</tr>
<tr>
<td>ADS 1.5</td>
<td>RFI screen for authenticated ad-monetized apps</td>
<td>Authenticated ad-monetized apps must use the <a href="/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata">getUserData</a> command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request may apps require the customer to manually enter their information.</td>
<td><a href="/docs/developer-program/roku-pay/signup-best-practices.md">Signup requirements and best practices</a><br /><br /><a href="/docs/developer-program/roku-pay/signin-best-practices.md">Sign-in requirements and best practices</a></td>
</tr>
</tbody>
</table>

### ADS 2 Privacy requirements

<table>
<thead>
<tr>
<th>Requirement</th>
<th>Name</th>
<th>Description</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ADS 2.1</td>
<td>Roku ID for Advertisers (RIDA) identifier  Limit Ad Tracking (LAT) flag</td>
<td>Apps must pass Roku's ID for Advertisers (RIDA) and "limit ad tracking" (LAT) value on ad server requests. If the user has opted out, apps must still pass the temporary ID returned by the <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string">rodeviceInfo.GetRida()</a> function to support frequency capping (this temporary ID is different than the UUID returned if the user has not opted out; it expires after 30 days).</td>
<td><a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string">GetRida()</a><br /><br /> <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean">IsRIDADisabled()asBoolean</a> <br /><br /><a href="/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros">URL parameter macros</a></td>
</tr>
<tr>
<td>ADS 2.2</td>
<td>Child-directed content</td>
<td>Apps with child-directed content must make ad requests that indicate that content is child-directed when serving ads during child-directed content.</td>
<td><a href="/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean">kidsContent parameter in the setContentGenre() method</a> <br /><br /><a href="/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros">ROKU_ADS_KIDS_CONTENT URL parameter macro</a></td>
</tr>
</tbody>
</table>

### ADS 3 Ad request requirements

<table>
<thead>
<tr>
<th>Requirement</th>
<th>Name</th>
<th>Description</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ADS 3.1</td>
<td>Channel ID</td>
<td>Apps must pass their Roku channel ID in ad server requests to Roku.</td>
<td><a href="/docs/references/brightscript/interfaces/ifappinfo.md#getid-as-string">roChannelInfo.getId() function</a><br /><br /><a href="/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros">ROKU_ADS_APP_ID URL parameter macro populated by RAF</a></td>
</tr>
<tr>
<td>ADS 3.2</td>
<td>User agent</td>
<td>Apps must use the Roku-generated device user agent in all server-side ad requests.</td>
<td><a href="/docs/developer-program/advertising/integrating-roku-advertising-framework.md#3-user-agent-requirements">RAF integration guide</a></td>
</tr>
</tbody>
</table>

### ADS 4 Ad break playback requirements

| Requirement | Name                            | Description                                                  | Documentation                                                |
| :---------- | :------------------------------ | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 4.1     | Ad break - back button behavior | All apps must return to the previous screen when the back button is pressed during an ad break (if the app can't return to the previous screen, the app must display an exit confirmation dialog).<br /><br />All apps must attempt to initiate an ad break to preserve the previously exited ad experience when playback resumes. Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |
| ADS 4.2     | Ad break - FF/REW commands      | All apps must ignore FF/REW commands received during an ad break (via either key presses or voice commands). Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |
