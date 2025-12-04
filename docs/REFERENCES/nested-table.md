---
title: Nested table
deprecated: false
hidden: false
metadata:
  robots: index
---
# API Reference

The following table summarizes the basic information for the Continue Watching RESTful web services:

Item	Description
Endpoint	The base URLs for the Continue Watching APIs are as follows:
[https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)
[https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching) (use this endpoint if your app has a profile selection screen and the content being passed is specific to the provided profileId (the unique user ID [UUID] of the user profile). The profileId is passed back to the app in a deep link request from the Continue Watching feature.

> Do not send kids profile data to Roku when calling these endpoints.

<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell2</td>
  </tr>

  <tr>
    <td>Cell 1</td>
    <td><table><tr><td>Cell 1</td><td>Cell2</td></tr></table></td>
  </tr>
</table>

## Words are very unneccessary
