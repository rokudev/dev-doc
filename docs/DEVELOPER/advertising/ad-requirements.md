---
title: Ad Requirements
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

# Roku advertising requirements

This document lists the requirements for displaying video and interactive ads in a channel. These requirements are applicable for both client-side and server-side ad requests. Apps must adhere to these requirements to pass certification, including those related to the Roku Advertising Framework (RAF).

## Roku advertising framework (RAF) requirements

<!--- ||ccCatBegin "e716fe42-52c0-41da-b694-5db84a7edada" -->

### RAF 1 Integration requirements

<!--- ||ccCatEnd -->

Apps must integrate the following RAF-related requirements to pass certification:

<!--- ||ccRuleBegin "68880550-3447-47ad-bf49-aeaecb1db9e2" -->
<!--- ||ccName "RAF 1.1 RAF integration" -->
<!--- ||ccDescriptionBegin "Channels must integrate RAF for all ads without modifying, obstructing, or disabling RAF functionality in any way. Replays of live broadcast streams are exempt from this requirement, unless dynamic ad insertion is used to insert new ads." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#raf-1-integration-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "be56cc7c-7ced-4059-8e1d-a0deb857bb84" -->
<!--- ||ccName "RAF 1.2 Measurement beacons" -->
<!--- ||ccDescriptionBegin "Channels must fire all measurement beacons client-side via RAF." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2022-10-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/roku-advertising-framework.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#raf-1-integration-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "1d0feeed-c939-4c3e-96f2-ee0bc69cd244" -->
<!--- ||ccName "RAF 1.3 Audience measurement" -->
<!--- ||ccDescriptionBegin "Channels in the U.S. Channel Store only that are not child-directed must support Roku ad tracking by calling the [enableAdMeasurements()](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method and passing the required content metadata within the following methods: [setContentGenre()](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), [setContentId()](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), and [setContentLength()](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setcontentlengthlength-as-integer).<br /><br />Optionally, apps may use the [setNielsenGenre API](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setnielsengenregenre-as-string) to pass specific Nielsen Genre granularity and the [setNielsenAppId API](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setnielsenappidid-as-string) for those who specify a custom Nielsen App ID. <br /><br />The [enableAdMeasurements](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method deprecates the [enableNielsenDAR](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#nielsen-dar) API; therefore, do not use the [enableNielsenDAR](https://developer.roku.com/docs/developer-program/advertising/raf-api.md#nielsen-dar) API." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#IntegratingtheRokuAdvertisingFramework-GeneralAudienceMeasurement"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#IntegratingtheRokuAdvertisingFramework-set-nielsen-genre"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setnielsenappidid-as-string"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#nielsen-dar"]	-->
<!--- ||ccRegion ["US"]	-->
<!--- WARNING: This rule potentially has complex region logic. It may need to be broken apart into two or more rules, to adequately cover the situation with the region specification ability currently provided by the meta-data syntax	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#raf-1-integration-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "2874f63f-add7-47ea-9183-b671818c0462" -->
<!--- ||ccName "RAF 1.4 Ad break - numbering" -->
<!--- ||ccDescriptionBegin "For ads inserted client-side, apps must display the number of ads during ad breaks using the standard Roku-branded label applied by RAF." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#raf-1-integration-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Description          | Documentation                                                |                                                              |
| :---------- | :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| RAF 1.1     | RAF integration      | Apps must integrate RAF for all ads without modifying, obstructing, or disabling RAF functionality in any way. Replays of live broadcast streams are exempt from this requirement, unless ad insertion is used to insert new ads. | [RAF integration guide](/docs/developer-program/advertising/roku-advertising-framework.md) |
| RAF 1.2     | Measurement beacons  | Apps must fire all measurement beacons client-side via RAF.  This requirement is applicable for both client-side and server-side ad insertion. | [Roku Advertising Watermark integration guide](/docs/developer-program/advertising/ad-watermark.md) |
| RAF 1.3     | Audience measurement | Apps in the U.S. Streaming Store only that are not child-directed must support Roku ad tracking by calling the [enableAdMeasurements()](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method and passing the required content metadata within the following methods: [setContentGenre()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), [setContentId()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), and [setContentLength()](/docs/developer-program/advertising/raf-api.md#setcontentlengthlength-as-integer).  Optionally, apps may use the [setNielsenGenre API](/docs/developer-program/advertising/raf-api.md#setnielsengenregenre-as-string) to pass specific Nielsen Genre granularity and the [setNielsenAppId API](/docs/developer-program/advertising/raf-api.md#setnielsenappidid-as-string) for those who specify a custom Nielsen App ID.  The [enableAdMeasurements](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method deprecates the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API; therefore, do not use the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API. | [General Audience Measurement](/docs/developer-program/advertising/raf-api.md#general-audience-measurement) |
| RAF 1.4     | Ad break - numbering | For ads inserted client-side, apps must display the number of ads during ad breaks using the standard Roku-branded label applied by RAF. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |

## General advertising requirements

<!--- ||ccCatBegin "a8b153ed-a9d1-4ecd-9576-d5f65bdfe966" -->

### ADS 1 General integration requirements

<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "7d3aaf19-3fa4-494f-8fa7-f0188edc8db8" -->
<!--- ||ccName "ADS 1.1 SDKs and libraries" -->
<!--- ||ccDescriptionBegin "Partners must disclose integration/use of all non-Roku SDKs, libraries, or other software systems and external advertising partners (for example, DSPs) that enable video, audio, or banner ad insertion, and Roku has the right to approve or deny such non-Roku SDKs, libraries, or other software systems." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
<!--- ||ccRegion ["Global"] -->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-1-general-integration-requirements"  -->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "ba0a1269-2627-4a39-8e81-ccf25f78546e" -->
<!--- ||ccName "ADS 1.2 Channels with inventory relationship" -->
<!--- ||ccDescriptionBegin "Channels that have an inventory relationship with Roku must meet the advertising terms specified in all applicable agreements." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/features/monetization/video-advertisements.md"]    -->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros"] -->
<!--- ||ccRegion ["Global"] -->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-1-general-integration-requirements"  -->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "7a3bbd6b-01d2-493b-9355-0df5daed93ac" -->
<!--- ||ccName "ADS 1.3 Ad load, frequency requirements" -->
<!--- ||ccDescriptionBegin "Channels selling ads exclusively and/or with Roku must comply with ad load, ad frequency, and acceptable ad requirements." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
<!--- ||ccRelatedResources ["http://www.roku.com/adguidelines"] -->
<!--- ||ccRegion ["Global"] -->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-1-general-integration-requirements"  -->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "81dedd38-f809-44ff-97dc-9d4e6b39e034" -->
<!--- ||ccName "ADS 1.4 Demand API" -->
<!--- ||ccDescriptionBegin "Channels in the U.S. Channel Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months may be required to implement the Demand API as part of their integration (this requirement is also applicable to new apps projected to reach the specified thresholds shortly after launch).<br /><br />Channels outside the U.S. Channel Store that have streamed more than an average of 200,000 hours per month over the last three months, and new apps outside the U.S. Channel Store that are projected to reach this threshold, may also be required to implement the Demand API." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2021-04-01T12:00:00.000"	-->
<!--- ||ccEngagementThreshold "Channels in the U.S. Channel Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months, or new apps that are projected to reach those thresholds shortly after launch. Channels outside the U.S. Channel Store that have streamed more than an average of 200,000 hours per month over the last three months, or new apps that are projected to reach those thresholds shortly after launch"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/demand-api.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-1-general-integration-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "34e1b582-f4ad-4d34-8564-f78b2a70394b" -->
<!--- ||ccName "ADS 1.5 RFI screen for authenticated ad-monetized apps" -->
<!--- ||ccDescriptionBegin "For all authenticated ad-monetized apps: Channels must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request may apps require the customer to manually enter their information." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2021-10-01T12:00:00.000"	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-1-general-integration-requirements"	-->
<!--- ||ccRuleEnd -->


| Requirement | Name                                           | Description                                                  | Documentation                                                |
| :---------- | :--------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 1.1     | SDKs and libraries                             | Partners must disclose integration/use of all non-Roku SDKs, libraries, or other software systems and external advertising partners (for example, DSPs) that enable video, audio, or banner ad insertion, and Roku has the right to approve or deny such non-Roku SDKs, libraries, or other software systems. | [Roku Advertising Framework overview](/docs/developer-program/advertising/roku-advertising-framework.md) |
| ADS 1.2     | Ad terms                                       | Apps that have an inventory relationship with Roku must meet the advertising terms specified in all applicable agreements. | [Video Advertising](/docs/features/monetization/video-advertisements.md) |
| ADS 1.3     | Ad experience                                  | Apps selling ads exclusively and/or with Roku must comply with ad load, ad frequency, and acceptable ad requirements. | [Roku Advertising Guidelines](http://www.roku.com/adguidelines) |
| ADS 1.4     | Demand API                                     | Apps in the U.S. Streaming Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months may be required to implement the Demand API as part of their integration (this requirement may also be applicable to new apps projected to reach the specified thresholds shortly after launch).<br /><br />Apps outside the U.S. Streaming Store that have streamed more than an average of 200,000 hours per month over the last three months, and new apps outside the U.S. Streaming Store that are projected to reach this threshold, may also be required to implement the Demand API. | [Implementing the Demand API](/docs/developer-program/advertising/demand-api.md) |
| ADS 1.5     | RFI screen for authenticated ad-monetized apps | Authenticated ad-monetized apps must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request may apps require the customer to manually enter their information. | [Signup requirements and best practices](/docs/developer-program/roku-pay/signup-best-practices.md)<br /><br />[Sign-in requirements and best practices](/docs/developer-program/roku-pay/signin-best-practices.md) |

<!--- ||ccCatBegin "75a523a7-65bf-4712-a2e9-49d32e75e9ba" -->

### ADS 2 Privacy requirements

<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "060c3d3a-b0cf-47dd-a369-c1e6d39c22ae" -->
<!--- ||ccName "ADS 2.1 Roku ID for Advertisers (RIDA) identifier<br/>Limit Ad Tracking (LAT) flag" -->
<!--- ||ccDescriptionBegin "Channels must pass Roku's ID for Advertisers (RIDA) and "limit ad tracking" (LAT) value on ad server requests. If the user has opted out, channels must still pass the temporary ID returned by the [rodeviceInfo.GetRida()](https://developer.roku.com/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string) function to support frequency capping (this temporary ID is different than the UUID returned if the user has not opted out; it expires after 30 days)." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string", "https://developer.roku.com/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean", "https://developer.roku.com/docs/developer-program/advertising/raf-api.md#IntegratingtheRokuAdvertisingFramework-URLParameterMacros"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-2-privacy-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "1dffc485-b460-4342-b0d7-79df06457d25" -->
<!--- ||ccName "ADS 2.2 Child-directed content" -->
<!--- ||ccDescriptionBegin "For channels with child-directed content: If ads are served during child-directed content, the ad requests must indicate that the content is child-directed." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2020-10-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean", "https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-2-privacy-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Name                                                         | Description                                                  | Documentation                                                |
| :---------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 2.1     | Roku ID for Advertisers (RIDA) identifier  Limit Ad Tracking (LAT) flag | Apps must pass Roku's ID for Advertisers (RIDA) and "limit ad tracking" (LAT) value on ad server requests. If the user has opted out, apps must still pass the temporary ID returned by the [rodeviceInfo.GetRida()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string) function to support frequency capping (this temporary ID is different than the UUID returned if the user has not opted out; it expires after 30 days). | [GetRida()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string)<br /><br /> [IsRIDADisabled()asBoolean](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean) <br /><br />[URL parameter macros](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) |
| ADS 2.2     | Child-directed content                                       | Apps with child-directed content must make ad requests that indicate that content is child-directed when serving ads during child-directed content. | [kidsContent parameter in the setContentGenre() method](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean) <br /><br />[ROKU_ADS_KIDS_CONTENT URL parameter macro](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) |



<!--- ||ccCatBegin "392410cb-87b8-4e9f-94a9-894165f13f7b" -->

### ADS 3 Ad request requirements

<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "e2f61537-429a-416c-8bd0-a0bba626e2aa" -->
<!--- ||ccName "ADS 3.1 Channel ID" -->
<!--- ||ccDescriptionBegin "Channels must pass their Roku channel ID in ad server requests to Roku." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/features/monetization/video-advertisements.md"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-3-ad-request-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "d9a80b8b-ee39-4307-8b94-ccb722d69e76" -->
<!--- ||ccName "ADS 3.2 User agent" -->
<!--- ||ccDescriptionBegin "Channels must use the Roku-generated device user agent in all server-side ad requests" -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2022-10-01T12:00:00.000"-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md#user-agent"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-3-ad-request-requirements"	-->
<!--- ||ccRuleEnd -->


| Requirement | Name       | Description                                                  | Documentation                                                |
| :---------- | :--------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 3.1     | Channel ID | Apps must pass their Roku channel ID in ad server requests to Roku. | [roChannelInfo.getId() function](/docs/references/brightscript/interfaces/ifappinfo.md#getid-as-string)<br /><br />[ROKU_ADS_APP_ID URL parameter macro populated by RAF](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) |
| ADS 3.2     | User agent | Apps must use the Roku-generated device user agent in all server-side ad requests. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#3-user-agent-requirements) |

<!--- ||ccCatBegin "21d1516c-b39e-4c86-8999-f54744f40c95" -->

### ADS 4 Ad break playback requirements

<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "58e371bf-4f5f-4c00-89bf-f8f5d298e5f6" -->
<!--- ||ccName "ADS 4.1 Ad break - back button behavior" -->
<!--- ||ccDescriptionBegin "For all channels except those streaming live content or replaying live broadcast streams, when the back button is pressed during an ad break, the channel returns to the previous screen (if the channel can't return to the previous screen, the channel displays an exit confirmation dialog).<br/>When playback resumes (with the same or different content), channels must attempt to initiate an ad break to preserve the previously exited ad experience." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-4-ad-break-playback-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "d98b171d-ff75-4efa-b884-6f69d2e472ed" -->
<!--- ||ccName "ADS 4.2 Ad break - FF/REW commands" -->
<!--- ||ccDescriptionBegin "For all channels (except those streaming live content or replaying live broadcast streams): The channel ignores FF/REW commands received during an ad break (via either key presses or voice commands)" -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/advertising/integrating-roku-advertising-framework.md"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/advertising/ad-requirements.md#ads-4-ad-break-playback-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Name                            | Description                                                  | Documentation                                                |
| :---------- | :------------------------------ | :----------------------------------------------------------- | ------------------------------------------------------------ |
| ADS 4.1     | Ad break - back button behavior | All apps must return to the previous screen when the back button is pressed during an ad break (if the app can't return to the previous screen, the app must display an exit confirmation dialog).<br /><br />All apps must attempt to initiate an ad break to preserve the previously exited ad experience when playback resumes. Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |
| ADS 4.2     | Ad break - FF/REW commands      | All apps must ignore FF/REW commands received during an ad break (via either key presses or voice commands). Exemptions from this requirement include (1) live streams and (2) replays of broadcast streams, unless ad insertion is used to insert new ads in the replay. | [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md) |
