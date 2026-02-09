---
title: Roku advertising requirements
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
---
title: Roku advertising requirements
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


This document lists the requirements for displaying video and interactive ads in a channel. These requirements are applicable for both client-side and server-side ad requests. Apps must adhere to these requirements to pass certification, including those related to the Roku Advertising Framework (RAF).

## Roku advertising framework (RAF) requirements


### RAF 1 Integration requirements


| Requirement | Description          | Documentation                                                |                                                              |
| :---------- | :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| RAF 1.1     | RAF integration      | Apps must integrate RAF for all ads without modifying, obstructing, or disabling RAF functionality in any way. Replays of live broadcast streams are exempt from this requirement, unless ad insertion is used to insert new ads. | [RAF integration guide](doc:advertising) |
| RAF 1.2     | Measurement beacons  | Apps must fire all measurement beacons client-side via RAF.  This requirement is applicable for both client-side and server-side ad insertion. | [Roku Advertising Watermark integration guide](doc:ad-watermark) |
| RAF 1.3     | Audience measurement | Apps in the U.S. Streaming Store only that are not child-directed must support Roku ad tracking by calling the [enableAdMeasurements()](doc:raf-api) method and passing the required content metadata within the following methods: [setContentGenre()](doc:raf-api), [setContentId()](doc:raf-api), and [setContentLength()](doc:raf-api).  Optionally, apps may use the [setNielsenGenre API](doc:raf-api) to pass specific Nielsen Genre granularity and the [setNielsenAppId API](doc:raf-api) for those who specify a custom Nielsen App ID.  The [enableAdMeasurements](doc:raf-api) method deprecates the [enableNielsenDAR](doc:raf-api) API; therefore, do not use the [enableNielsenDAR](doc:raf-api) API. | [General Audience Measurement](doc:raf-api) |
| RAF 1.4     | Ad break - numbering | For ads inserted client-side, apps must display the number of ads during ad breaks using the standard Roku-branded label applied by RAF. | [RAF integration guide](doc:integrating-roku-advertising-framework) |

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
<td>[Roku Advertising Framework overview](doc:advertising)</td>
</tr>
<tr>
<td>ADS 1.2</td>
<td>Ad terms</td>
<td>Apps that have an inventory relationship with Roku must meet the advertising terms specified in all applicable agreements.</td>
<td>[Video Advertising](doc:video-advertisements)</td>
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
<td>[Implementing the Demand API](doc:demand-api)</td>
</tr>
<tr>
<td>ADS 1.5</td>
<td>RFI screen for authenticated ad-monetized apps</td>
<td>Authenticated ad-monetized apps must use the [getUserData](doc:channelstore#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request may apps require the customer to manually enter their information.</td>
<td>[Signup requirements and best practices](doc:signup-best-practices)<br /><br />[Sign-in requirements and best practices](doc:signin-best-practices)</td>
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
<td>Apps must pass Roku's ID for Advertisers (RIDA) and "limit ad tracking" (LAT) value on ad server requests. If the user has opted out, apps must still pass the temporary ID returned by the [rodeviceInfo.GetRida()](doc:ifdeviceinfo#getrida-as-string) function to support frequency capping (this temporary ID is different than the UUID returned if the user has not opted out; it expires after 30 days).</td>
<td>[GetRida()](doc:ifdeviceinfo#getrida-as-string)<br /><br /> [IsRIDADisabled()asBoolean](doc:ifdeviceinfo#isridadisabled-as-boolean) <br /><br />[URL parameter macros](doc:integrating-roku-advertising-framework#url-parameter-macros)</td>
</tr>
<tr>
<td>ADS 2.2</td>
<td>Child-directed content</td>
<td>Apps with child-directed content must make ad requests that indicate that content is child-directed when serving ads during child-directed content.</td>
<td>[kidsContent parameter in the setContentGenre() method](doc:raf-api#setcontentgenregenres-as-string-kidscontent-as-boolean) <br /><br />[ROKU_ADS_KIDS_CONTENT URL parameter macro](doc:integrating-roku-advertising-framework#url-parameter-macros)</td>
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
<td>[roChannelInfo.getId() function](doc:ifappinfo#getid-as-string)<br /><br />[ROKU_ADS_APP_ID URL parameter macro populated by RAF](doc:integrating-roku-advertising-framework#url-parameter-macros)</td>
</tr>
<tr>
<td>ADS 3.2</td>
<td>User agent</td>
<td>Apps must use the Roku-generated device user agent in all server-side ad requests.</td>
<td>[RAF integration guide](doc:integrating-roku-advertising-framework#3-user-agent-requirements)</td>
</tr>
</tbody>
</table>

### ADS 4 Ad break playback requirements

| Requirement | Name                            | Description                                                  | Documentation                                                |
| :---------- | :------------------------------ | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 4.1     | Ad break - back button behavior | All apps must return to the previous screen when the back button is pressed during an ad break (if the app can't return to the previous screen, the app must display an exit confirmation dialog).<br /><br />All apps must attempt to initiate an ad break to preserve the previously exited ad experience when playback resumes. Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](doc:integrating-roku-advertising-framework) |
| ADS 4.2     | Ad break - FF/REW commands      | All apps must ignore FF/REW commands received during an ad break (via either key presses or voice commands). Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](doc:integrating-roku-advertising-framework) |
