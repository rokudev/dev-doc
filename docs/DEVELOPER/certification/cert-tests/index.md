---
title: Certification testing
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

# Pre-certification tests

These tests describe the specific behavior and attributes an app must demonstrate to pass Roku's certification process. Use this list to create tests for your channel during development. See [Certification](/docs/developer-program/certification/certification.md#preparing-for-certification) for more information on policies and processes as you prepare for certification.

To help developers test their channels, Roku provides a suite of tools to ensure your channel complies with the certification criteria. The test suite includes the following tools:

- [Static Analysis tool](): Checks the channel's code for certification-related errors.
- [Channel Behavior Analysis tool](/developer-program/publishing/channel-publishing-guide.md#channel-behavior-analysis-window): For SVOD, AVOD, and free channels, verifies channel performance and deep linking meets certification requirements.
- [Test automation software](): Enables developers to write and execute automated test cases, including channel purchasing, performance, deep linking, and other certification criteria.

Developers are expected to use these tools, the [certification criteria](/docs/developer-program/certification/certification.md##certification-criteria-1), and the list of certification tests in this document to guide internal quality assurance testing before [submitting an app to Roku for review](/docs/developer-program/certification/certification.md#publishing-your-channel).

## **1. Advertising**

**1.1**  Apps that include video advertising must comply with all the integration requirements listed in [Roku advertising requirements](/docs/developer-program/advertising/ad-requirements.md) document.

**Tests**: App is meeting the criteria specified in 1.1.  

**Expected Result**: All ads are served via the [Roku Advertising Framework (RAF)](/docs/developer-program/advertising/roku-advertising-framework.md) whether the channel is using the Roku default ad server or a third-party ad server (for example, Google DoubleClick for Publishers [DFP]. Freewheel, and so on). Ads render as expected on all Roku devices.

**RAF 1.1** Apps must integrate the [Roku Advertising Framework (RAF)](/docs/developer-program/advertising/roku-advertising-framework.md)  for all ads without modifying, obstructing, or disabling RAF functionality in any way. Replays of live broadcast streams are exempt from this requirement, unless dynamic ad insertion is used to insert new ads.

**RAF 1.2** All measurement beacons must be fired client-side via RAF. See the [Roku Advertising Watermark integration guide](https://developer.roku.com/docs/developer-program/advertising/ad-watermark.md) for more information.

**RAF 1.3** Apps in the U.S. Roku Streaming Store only that are not child-directed must support Roku ad tracking by calling the [enableAdMeasurements()](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method and passing the required content metadata within the following methods: [setContentGenre()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), [setContentId()](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean), and [setContentLength()](/docs/developer-program/advertising/raf-api.md#setcontentlengthlength-as-integer). Optionally, channels may use the [setNielsenGenre API](/docs/developer-program/advertising/raf-api.md#IntegratingtheRokuAdvertisingFramework-set-nielsen-genre) to pass specific Nielsen Genre granularity and the [setNielsenChannelId API](/docs/developer-program/advertising/raf-api.md#setnielsenchannelidid-as-string) for those who specify a custom Nielsen Channel ID. The [enableAdMeasurements](/docs/developer-program/advertising/raf-api.md#enableadmeasurementsenabled) method deprecates the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API; therefore, do not use the [enableNielsenDAR](/docs/developer-program/advertising/raf-api.md#nielsen-dar) API.

**Tests**:

1. Get a test ad that contains trackers for Nielsen DAR and Comscore vCE. The method for getting the test ad varies based on whether you are implementing ads client-side via RAF or server-side:
   - Client-side: Call the [setAdUrl](/docs/developer-program/advertising/raf-api.md#setadurlurl-as-string) method with no parameters.
   - Server-side: Email [adsupport@roku.com](mailto:adsupport@roku.com) with a request for an ad request URL, and then traffic the ad request URL on your ad server.
2. Generate a debug console log as described in Debugging Your application.
3. Confirm the correct word appears in the log.

**Expected Result**:

- Nielsen DAR contains **imrworldwide** in the subdomain, and the following content metadata and Nielsen data that you passed:
  - c45 = \<Content Duration\>
  - c13 = \<Nielsen Channel ID\>
  - c43 = \<Nielsen Program ID\>
  - c44 = \<Nielsen Genre\>



- Comscore vCE Contains **scorecardresearch** in the subdomain and the following content metadata that you passed**:**
  - ns_st_ge = \<Content Genre\>
  - ns_st_pr = \<Content ID\>
  - ns_st_cd = \<Content Length\>

**RAF 1.4** Apps must display the number of ads during ad breaks using the standard Roku-branded label channellied by RAF for all ads inserted client-side.

**Tests**:

1. Play any video from the beginning to invoke the pre-roll ads.
2. When an ad break appears, verify that the number of ads in the ad break is displayed in the upper left/right corner of the screen.
3. Play the same video until the mid-roll ads are invoked. Verify again that the number of ads in the ad break are displayed on the screen.

**Expected Result**:
The number of ads in the ad break are displayed during the ad break using the standard Roku-branded label channellied by RAF.

**ADS 1.1** Apps must disclose integration/use of all non-Roku SDKs, libraries, or other software systems and external advertising partners (e.g., DSPs) that enable video, audio, or banner ad insertion. Roku has the right to approve or deny such non-Roku SDKs, libraries, or other software systems.

**Tests**: App is meeting the criteria specified in 1.2.

**Expected Result**: App does not contain any undisclosed third-party SDKs, libraries, or other software systems that enable video, audio, or banner ad insertion.

**ADS 1.2** Apps that have an inventory relationship with Roku must meet the advertising terms specified in all applicbale agreements. See [Video Advertisements](/docs/features/monetization/video-advertisements.md) for more information.

**Tests**: App is meeting the criteria specified in 1.3.

**Expected Result**: App is meeting the contactually-specified terms for ad requests and performance. You can review your contract with [publisheradservices@roku.com](mailto:publisheradservices@roku.com?Subject=New%20application%20Request%20for%20Admittance%20to%20Roku%20Ad%20Revenue%20Share) to ensure the channel is meeting the specified terms.

**ADS 1.3** Apps selling ads must comply with Roku's ad load, ad frequency, and acceptable ad requirements. See [Roku Advertising Guidelines](http://www.roku.com/adguidelines) for more information.

**Tests**: Apps can obtain the user agent from the client-side call made to their ad stitcher or ad server, and then pass it into the User-Agent header in the server-side ad request, without any modifications.

**Expected Result**: Per the [Roku Advertising Guidelines](http://www.roku.com/adguidelines), ad breaks are at least 7 minutes apart and contain no more than 2 minutes of ads. This helps ensure a positive viewing experience of content that is being monitized with ads (regardless if the ads are supplied by Roku or a third-party provider).

**ADS 1.4** Apps in the U.S. Roku Streaming Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months may be required to implement the Demand API as part of their integration (this requirement may also be applicbale to new channels projected to reach the specified thresholds shortly after launch).

Apps outside the U.S. Roku Streaming Store that have streamed more than an average of 200,000 hours per month over the last three months, and new channels outside the U.S. Roku Streaming Store that are projected to reach this threshold, may also be required to implement the Demand API. See [Implementing the Demand API](/docs/developer-program/advertising/demand-api.md).

**Tests**: App is meeting the criteria specified in ADS 1.1.

**Expected Result**: Apps meeting the streaming hours threshold have integrated the Demand API.

**ADS 1.5**  Authenticated ad-monetized channels must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request may channels require the customer to manually enter their information.

**Tests**:

1. Follow the instructions within the channel on how to sign up and sign in.
2. Verify whether the Request For Information (RFI) screen appears during the sign-up and sign-in flows.

**Expected Result**: The RFI screen is displayed on the channel, prompting the user to grant Roku access to share their information with the channel. A form for customers to manually enter their information is only displayed if the user declines to share their information.  

**ADS 2.1** App must pass Roku's ID for Advertisers (RIDA) and "limit ad tracking" (LAT) value on ad server requests. If the user has opted out, channels must still pass the temporary ID returned by the rodeviceInfo.GetRida() function to support frequency cchanneling (this temporary ID is different than the UUID returned if the user has not opted out; it expires after 30 days). See [GetRida()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string),  [IsRIDADisabled()asBoolean](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean), and the [URL parameter macros populated by RAF](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros)

**Tests**: RIDA and LAT values may be passed on ad server requests client-side via RAF or server-side. Use one of the following tests corresponding to how you pass RIDA and LAT values in ad server requests:

- Client-side via RAF:
  - Place [the URL parameter macros populated by RAF](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) in ad request urls to populate the RIDA and LAT in the appropriate spot.
  - [Sideload the channel](/docs/developer-program/publishing/packaging-channels.md#step-1-install-or-sideload-channel-on-a-roku-device), [Telnet into the Roku device](/docs/developer-program/debugging/debugging-channels.md), and then [enable RAF debug mode](/docs/developer-program/advertising/raf-api.md#setdebugoutputenabled-as-boolean).
  - Observe that RAF requests a test url and dispatches trackers on sideloaded channels when [setAdUrl](/docs/developer-program/advertising/raf-api.md#setadurlurl-as-string) is passed an empty value.
- Server-side: For server-side ad requests, the ad server's runtime macros are typically used to pass the RIDA and LAT values in the ad requests instead of the RAF macros. In this case, the RIDA and LAT values are usually passed to the ad server via Roku API calls.
  - Check your ad server for the runtime macros to be used to pass the RIDA and LAT values. Email [adsupport@roku.com](mailto:adsupport@roku.com) for help with this process.
  - Call the [GetRida()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string) and [IsRidaDisabled()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean) methods to pass the RIDA and LAT values to your ad server, respectively.

**Expected Result**: The RIDA and LAT are passed on all client-side and server-side ad requests.

> The RIDA is Roku's [Identifier for Advertising (IFA)](https://iabtechlab.com/standards/guidelines-identifier-advertising-over-the-top-platforms/), similar to the Google Advertising ID (ADID) or Apple Identifier for Advertising (IDFA).
>
> LAT is often referred to as the Do Not Track (DNT) or the User Opt Out (UOO).  
>
> The RIDA and LAT are used together to ensure that the users' privacy settings are respected.

**ADS 2.2** Apps with child-directed content must make ad requests that indicate that content is child-directed when serving ads during child-directed content. See the [kidsContent parameter in the setContentGenre() method](/docs/developer-program/advertising/raf-api.md#setcontentgenregenres-as-string-kidscontent-as-boolean) and the [ROKU_ADS_KIDS_CONTENT URL parameter macro](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros).

**Tests**: App is meeting the criteria specified in ADS 2.2.

**Expected Result**: Ad requests include flag indicating whether content is child-directed.

**ADS 3.1** Apps must pass their Roku channel ID in ad server requests to Roku. See the [roChannelInfo.getId() function](/docs/references/brightscript/interfaces/ifchannelinfo.md#getid-as-string) and the [ROKU_ADS_APP_ID URL parameter macro populated by RAF](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros).

**Tests**: The Roku channel ID may be passed on ad server requests client-side via RAF or server-side. Use one of the following tests corresponding to how you pass Roku channel ID values in ad server requests:

- Client-side via RAF:
  - Place the [ROKU_ADS_APP_ID URL parameter macro populated by RAF](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) in ad request urls to populate the Roku channel ID in the appropriate spot.
  - [Sideload the channel](/docs/developer-program/publishing/packaging-channels.md#step-1-install-or-sideload-channel-on-a-roku-device), [Telnet into the roku device](/docs/developer-program/debugging/debugging-channels.md), and then [enable RAF debug mode](/docs/developer-program/advertising/raf-api.md#setdebugoutputenabled-as-boolean).
  - Observe that RAF requests a test url and dispatches trackers on sideloaded channels when [setAdUrl](/docs/developer-program/advertising/raf-api.md#setadurlurl-as-string) is passed an empty value.
- Server-side: For server-side ad requests, the ad server's runtime macros are typically used to pass the Roku channel ID in the ad requests instead of the RAF macros. In this case, the Roku channel ID is usually passed to the ad server via Roku API calls.
  - Check your ad server for the runtime macros to be used to pass the Roku channel ID. Email [adsupport@roku.com](mailto:adsupport@roku.com) for help with this process.
  - Call the [roChannelInfo.getId() method](/docs/references/brightscript/interfaces/ifchannelinfo.md#getid-as-string) methods to pass the Roku channel ID to your ad server.

**Expected Result**: The Roku channel ID ("dev") is passed on all client-side and server-side ad requests to Roku when testing your sideloaded channel.

**ADS 3.2** Apps must use the Roku-generated device user agent in all server-side ad requests. See the [RAF integration guide](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#3-user-agent-requirements) for more details.

**Tests**:

1. Obtain the user agent from a client-side call made to your ad stitcher or ad server.
2. Pass the user agent into the User-Agent header in the server-side ad request, without any modifications.
3. Verify that the User-Agent header in the server-side ad request includes the same Roku-generated device user agent obtained via the client-side call made to your ad stitcher or ad server.

**Expected Result**: All server-side ad requests include the Roku-generated device user agent, without any modification.

**ADS 4.1** All channels (except those streaming live content or replaying live broadcast streams) must return to the previous screen when the back button is pressed during an ad break (if the channel can't return to the previous screen, the channel displays an exit confirmation dialog). Apps must attempt to initiate an ad break to preserve the previously exited ad experience when playback resumes (with the same or different content).

**Tests**: Verify ads in the channel cannot be skipped by any mechanism, such as pressing the back button to exit a video and then resuming it.

**Expected Result**: Ads may not be skipped by pressing the back button or any other mechanism.

**ADS 4.2** All channels (except those streaming live content or replaying live broadcast streams) must ignore FF/REW commands received during an ad break (via either key presses or voice commands).

**Tests**: Verify ads in the channel cannot be skipped by any mechanism, such as pressing the FF/REW buttons or sending a FF/REW voice command.

**Expected Result**: Ads may not be skipped by pressing the FF/REW buttons, sending a FF/REW voice command, or any other mechansim.

## **2. Purchases**

**2.1** Apps offering transactional content or services must integrate and enable Roku Pay services including, but not limited to, signup/sign-in, payment, and entitlements/transactions within their channel. Apps must comply with all requirements listed in the [Roku Pay integration requirements document](/docs/developer-program/roku-pay/roku-pay-requirements.md). Apps must disclose integration/use of all non-Roku SDKs and libraries, and channel features that enable, facilitate, or link to monetary transactions or external webpages related to such transactions. Roku has the right to approve or deny such non-Roku SDKs, libraries, and channel features. Apps may not facilitate or direct customers to use any method of payment and/or method of payment interface in connection with their channel other than Roku Pay.

**Tests**

To verify the monetization model for the channel:

1. If the channel has been monetized for in-channel purchasing, login to the channel with a valid account that allows you to make purchases.
2. From within the channel, purchase any form of content.
3. Verify the billing flow works properly for the entire purchase.
4. From the channel, rent any form of content.
5. Wait until rental expires.
6. Verify that the content is no longer available for playing, but can be re-rented or bought.

**Expected Result** Roku Pay works properly for in-channel purchases, such as subscriptions and rentals.

**2.2** Apps that include authentication must complete account sign-ups and sign-ins on the device using [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md). Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms.

Apps must complete upgrades and downgrades on the device using [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md). The upgrade/downgrade workflows are prohibited from including external webpages.   

**Tests**:

1. Confirm you can successfully log in to your channel on your device, without visiting an external webpage.
2. Confirm you can successfully complete a purchase in your channel on the device, without visiting an external webpage.
3. Confirm you can successfully upgrade and downgrade product on the device, without visiting an external webpage.

**Expected Result**:
A purchase is successfully made and content can be played.

**2.3** SVOD channels that have streamed more than an average of 10 million hours per month over the last three months must implement Roku's [Instant Signup (ISU)](/docs/developer-program/discovery/instant-signup.md) feature. This requirement is also applicbale to new SVOD channels projected to reach the specified streaming hours threshold shortly after launch. Apps offering Premium Subscriptions on The Roku Channel are exempt from this requirement.

Apps' ISU integration must include offers for lapsed and canceled subscribers. This requirement is applicbale to channels with existing ISU integrations.

Apps must return a product offer to Roku for all current non-subscribers. This ensures that all non-subscribed customers receive a product offer on all touchpoints. This helps drive subscription sign-ups, particularly for lapsed and cancelled customers.

**Tests**: App is meeting the criteria specified in 2.3.  

**Expected Result**: Apps that have integrated Instant Signup are performing in accordance with the [implementation document](/docs/developer-program/discovery/instant-signup.md).

**2.4** Apps are prohibited from including nested content or applications, additional content via browsers or embedded screens, deep links to other applications, or any cross-channel functionality.

**Tests**:

1. Navigate through the menus within the channel.
2. Verify no content is being made available to outside channels.
3. Verify no outside, third-party channel's content is available within the channel.

**Expected Result**:

* You have not shared access to your channel with outside parties.
* Your channel offers no 3rd-party channel, content, applications or browsers.

**RP1.1** Apps must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by the channel. The channel name must clearly identify the company associated with the service, and the publisher must have full legal rights or consent for their channel names and the rights to all trademarks and copyright expressions associated with the name. The channel name may not include the name "Roku", and it may not contain any profanity, or derogatory or misleading language.

**Expected Result**: App is meeting the criteria specified in RP1.1.  

**RP2.1** All authenticated transactional channels (SVOD, TVOD, and other subscription services) must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel. Only if the user declines the request, may channels require the customer to manually enter information other than a password.

**Tests**:

1. Follow the instructions within the channel on how to sign in.
2. Verify whether the Request For Information (RFI) screen appears during sign-in flow.

**Expected Result**: The RFI screen is displayed on the channel, prompting the user to grant Roku access to share their information with the channel. A form for customers to manually enter their information is only displayed if the user declines to share their information.  

**RP3.1** Subscription services must create product groups in the [Developer Dashboard](https://developer.roku.com/developer) for any set of subscription products that the consumer should not be able to be subscribed to simultaneously. For example, if an app has two in-channel products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions.

**Tests**:

1. Create a test Roku customer account.
2. Activate and link Roku device to the account.
3. Create a product group with at least two mutually exclusive subscription products.
4. Purchase one product in the product group with your test user.
5. Attempt to purchase a second product in the product group.
6. Roku Pay displays a "You're already subscribed to the channel" dialog.

**Expected Result**:

* You cannot purchase an in-channel product when another product in the same product group has already been purchased.

**RP3.2** Apps must protect against multiple purchases of content or subscriptions through Roku Pay before passing new orders to the Roku Streaming Store service. The Roku Streaming Store service inherently protects against purchasing the same subscription code multiple times, but preventing, for example, the purchase of a free trial subscription and a non-free trial subscription must be done in the channel.

**Tests**:

1. Create a test Roku customer account.
2. Activate and link Roku device to the account.
3. Install and sign up to the channel
4. Purchase a subscription using test account and verify it works.
5. Attempt to make several purchases and verify it does not work.

**Expected Result**:
The channel handles multiple purchases properly.

**RP3.3** SVOD channels must provide 15-days notice to existing customers before changing the price of their service.

**Expected Result**: App is meeting the criteria specified in RP3.3.

**RP3.4** Apps must name in-channel products so that the service being offered is clearly identifiable. The publisher must have full legal rights or consent for their in-channel product names and the rights to all trademarks and copyright expressions associated with the names. The in-channel product names may not include the name "Roku", text related to a trial or discount offer**,** or any profane, derogatory, or misleading language.

**Expected Result**: App is meeting the criteria specified in RP3.4.  

**RP4.3** Apps must automatically entitle content or subscriptions purchased through Roku Pay across all devices tied to the purchasing Roku account. Apps can use the [getPurchases](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) API can upon launch to return the transactionID for an active subscription, and they can use an entitlement server to look up an account via a call to the [validate-transaction API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction).

**Tests**:

1. Select 'Subscribe' button or navigate to content that requires subscription.
2. Select 'Share'/'Don't share' option (if applicbale).
3. Navigate through email and password screens (if applicbale) to purchase.
4. Purchase available subscriptions.
5. Verify the purchase worked immediately on the Roku device.
6. Verify the subscription status of the channel on https://my.roku.com/account/subscriptions web page shows the purchase.
7. Verification on channel's web site:

  * Open channel's/provider's website.
  * Observe if any type of subscription is available.
  * Verify if the same subscription can be purchased on your Roku device.

**Expected Result**:
On channel launch a transactionID is returned for an active subscription.

**RP4.4** All subscription services that have streamed more than an average of 5 million hours per month over the last three months (and new subscription services projected to reach the specified streaming hour threshold shortly after launch) must implement Roku Event Dispatcher (RED) in the signup workflow.

Apps must fire a RED event upon loading each page within the signup flow and submission of the final page to help track where users are abandoning the process. This includes, but is not limited to, the following pages: landing, sign up, registration, device activation, subscription selection, payment, purchase confirmation, and cancellation.

If the channel's sign-up flow is contained within a form that covers one or more pages, Apps must fire a RED event when each element in the form is completed. Streaming hours per month information is available in the Developer Dashboard.

**Tests**:

1. Go through purchase and authentication process by opening every available pre-sign up pages (e.g. landing, sign in, registration, device activation)
2. Check port 8085 that you have a print statement that shows a successful firing of a RED event on every visited page.

**Expected Result**:
RED events are fired upon each page load and the submission of the final page, or RED events are fired upon each field in the form being completed.

**RP4.5**  Apps using Roku Pay that have streamed more than an average of 5 million hours per month over the last three months must implement Roku's [Enhanced Subscription Recovery](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md) feature to reduce involuntary churn. This requirement is also applicbale to new channels projected to reach the specified streaming hours threshold shortly after launch.

**Tests**: App is meeting the criteria specified in RP4.5.

**Expected Result:**

App has properly implemented the Enhanced Subscription Recovery feature per the integration guide.

## **3. Performance**

**3.1** Apps must be available on all Roku devices that receive the current Roku OS; responsive to user launch, navigation, browse, and playback of content at a reasonable speed on all supported Roku devices; and be free of frequent crashes, rebuffering, or other material performance that negatively impacts or limits the consumer experience.  

Apps must meet requirements 3.2–3.6 when measured specifically on the Roku Streaming Stick+ (Amarillo-2019 3810X) or the Roku Premiere+ (Gilbert 4K 3921X). If the performance requirement is not met on these specified devices, Roku reserves the right to block launch on all other Roku device types.

**Tests**:

1. Add the channel in testing to your Roku player.
2. Navigate to the channel on the home screen and launch it.

**Expected Result**:
App is responsive to user navigation, find, and playback of content at a reasonable speed.

**3.2** Apps must launch to a **fully rendered** home screen within 15 seconds. A signal beacon must be added to the channel to measure launch times. The debug console can then be used to verify that the channel's launch time is meeting this requirement. See [Measuring channel performance](/docs/developer-program/performance-guide/measuring-channel-performance.md) on how to measure channel launch times.

**Tests**:

1. Select your channel from the Roku home screen.
2. Use the [BrightScript console (port 8085)](/docs/developer-program/debugging/debugging-channels.md) to check the channel launch time.
3. To retest, reboot your device and wait 30 seconds before testing again.

**Expected Result**:
App is launched within 15 seconds of being selected from the Roku home screen. If you need to modify your application to meet this requirement, you can retest it by uninstalling your channel, rebooting your Roku device, and reinstalling the channel.

**3.3** Apps must have screen-to-screen (scene-to-scene) transitions that are within 3 seconds.

**Tests**:

1. Run metrics to identify transition time is within 3 seconds.

**Expected Result**:
Transition time is within 3 seconds.

**3.4** Apps must display a loading indicator during any process visible to users that takes longer than 3 seconds. Apps must respond to user requests within 10 seconds.

**Tests**:

1. Make a user request that requires  longer than 3 seconds.
2. Verify the appropriate "notification" is displayed.
3. Make user requests to determine how long response takes.

**Expected Result**:

* appropriate notifications are displayed when needed.
* User requests are completed in 10 seconds or less.

**3.5** Apps must respond to remote button presses and navigate between tiles within 250 milliseconds.

**Tests**:

1. Navigate channel UI with Roku remote button presses and time the response.
2. Navigate channel UI tile-to-tile and time the response.

**Expected Results**:
A response to a remote button press or tile-to-tile navigation do not exceed 250 milliseconds.

**3.6** Apps must start playing content within 8 seconds of initiation.

Apps with custom video players must fire video start beacons to measure video start times (if the channel is using the Roku video player, the Roku OS automatically fires beacons to measure and record the video start time).

The debug console can be used to verify that video start times are compliant. See [Measuring channel performance](/docs/developer-program/performance-guide/measuring-channel-performance.md) for more information.

Roku's [Fast Video Start](/docs/developer-program/media-playback/fast-video-start.md) is available to pre-buffer content and help improve playback performance.


**Tests**:

1. Start any content playback.
2. Use the BrightScript console (port 8085) to check the VOD launch time.

**Expected Result**:
Content will start playing within 8 seconds of initiation. If you need to modify your application to meet this requirement, you can retest it by uninstalling your channel, rebooting your Roku device, and reinstalling the channel.

**3.7** The channel's file size must be 4 MB or less.

**Tests**

1. The file size of your channel is 4MB or less.

**Expected Result**:
File size of the channel is no larger than 4MB.

## **4. App operation**

**4.1** App updates are prohibited from requiring reactivation/re-linking/re-login, and must persist saved data.

**Tests**:

1. Remove all versions of the channel from the Roku player.
2. Reboot Roku device.
3. Install the currently published version of the channel from the Roku Streaming Store.
4. Launch the channel and link to a valid production account.
5. Exit the channel.
6. Install the version of the channel under test using the channel code specified in the tracking ticket.
7. Launch the version of the channel under test.
8. After relaunching the channel and rebooting the device, verify the linking to the channel persists.
9. Verify this error is not present: "dev\_id of submitted package does not match dev\_id of previously submitted package".

**Expected Result**:

* If you are updating an existing channel, it will use existing data without requiring any re-activation or re-linking.
* The dev\_id of the channel under test matches the dev\_id of the existing published version of the channel.

**4.2** Apps that require a user to log in and that have streamed more than an average of 1 million hours per month over the last three months must integrate [Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md). This requirement is also applicbale to new channels projected to reach the specified streaming hours threshold shortly after launch.

**Tests**:

1. Create a test user Roku customer account.
2. Activate and link Roku device to the account.
3. Install and sign up to the channel.
4. Link another Roku device to the account.
5. Try to load the channel. It should sign the test user in automatically.

**Expected Result**:
User can be authenticated and sign in successfully from other devices.

**4.3**  Apps that require authentication (SVOD, TVE, and other subscription services) must use the [Roku Event Dispatcher](/docs/developer-program/discovery/search/prioritizing-authenticated-channels-in-roku-search.md) to communicate authentication status.

**Tests**:

1. Go through purchase and authentication process.
2. Check port 8085 that you have a print statement that shows a successful firing of the Event Dispatcher pixel on successful entitlement.

**Expected Result**:

The debug console displays a print statement showing a successful firing of the Event Dispatcher pixel upon entitlement.

**4.4** Roku [reserves use of the Options](/docs/developer-program/design/masterui.md) ("*") button during video playback for the sole purpose of Roku system displays. Apps may use the Options button for additional in-channel options while UI components are displayed on top of the video.

**Tests**:

1. Start playing a video.
2. Press "*" key on your remote control during playback.

**Expected Result**:
During video playback with no obscuring UI components, the "*" button is not used for any additional in-channel options.

**4.5** Apps are prohibited from overriding or interfering with Roku's system screensaver. See [Roku’s Screensaver Policy](/docs/developer-program/media-playback/screensavers.md).

**Tests**:

1. Launch the channel.
2. Do not use the Roku device until the duration of the screensaver time is met.
3. Verify the screensaver behaves properly.

**Expected Result** Screensaver works properly.

**4.6** Apps must directly return the user to the previous screen and/or state when the [back button](/docs/developer-program/design/remote-control-buttons.md) on the Roku remote is pressed. When the back button is pressed on the channel's home screen, channels must exit the channel and return the user to the Roku home screen. Apps may display a single confirmation dialog immediately before the user exits the channel—and then return the user to the Roku home screen upon receiving confirmation that they want to leave the channel.

**Tests**:

1. Launch the channel and navigate to content and menus.
2. Press back button on your remote.
3. Navigate to channel homescreen.
4. Press back button on your remote until you land on Roku's Home screen.

**Expected Result**:
All back buttons behave properly.

**4.7** Apps must display thumbnails during [trick play](/docs/developer-program/media-playback/trick-mode/trick-mode.md) for VOD content longer than 15 minutes.

**Tests**:

1. Begin playing a video that is at least 15 minutes long.
2. Trick play video and verify that thumbnails appear in accordance with playback.

**Expected Result**:
Thumbnails are displayed during VOD trick play.

**4.8** Apps must comply with [all applicbale accessibility laws](https://docs.roku.com/published/channelaccessibility/en/us) and global settings related to accessibility and user experience. Apps must provide [closed captions](/docs/developer-program/media-playback/closed-caption.md) and audio descriptions for content where required by law. If including closed captions, the channel must follow the user global settings for closed captioning, and support the following closed captioning settings in the Options menu: On, Off, On instant replay, and On mute (Roku TVs only). For VOD content, channels must synchronize the captions with the audio.

Apps must adhere to [Roku’s autoplay policy](/docs/developer-program/media-playback/autoplay.md).

**Tests**:

1. Start playing any video with closed captions.
2. Press * button to invoke Closed caption/audio configuration pop-up/sidebar.
3. Select captions mode On/Off/On instant Reply/On mute.
4. Close the pop-up/sidebar.
5. Press On Instant Replay/On mute for invoking the appropriate options.

**Expected Result**:

* Closed Captions are shown during video playback when set to On.
* Closed Captions are not shown during video playback when set to Off.
* Closed Captions are shown for 20 seconds after pressing Instant Replay.
* Closed Captions are shown during video playback when set to On mute after pressing Mute.

**4.9** Apps must rewind between 10 to 25 seconds when the [instant replay button](/docs/developer-program/design/remote-control-buttons.md#instant-replayskip-back) on the Roku remote is pressed.

**Tests**:
Instant replay should rewind between 10 to 25 seconds.

**Expected Result**:
Video rewinds between 10 to 25 seconds.

**4.10** Apps must implement [bookmarking](/docs/developer-program/media-playback/bookmarking.md) for all VOD content longer than 15 minutes. Apps must store bookmarks for a minimum of 30 days.

**Tests**:

1. Begin playing a video. Let it play for a few minutes, or fast forward to a new position in the video.
2. Press Back to exit playback. Verify that resume option appears.
3. Press the Home button on the remote to return to the Roku Home screen.
4. Navigate to the channel on the Home screen and launch it.
5. Navigate back to the video that was played in step #1.
6. Select the resume option. Verify that the clip begins to play at a close channelroximation of where it last played.

**Expected Result**:

* Longer form content (15 minutes or over) have bookmark functionality.
* Apps with video bookmarks functionality behave as expected and allow user to resume playback from a specific location.
* The resume option should work before and after relaunching the channel.

**4.11** Apps that have streamed more than an average of 5 million hours per month over the last three months must implement all [voice controls](/docs/developer-program/media-playback/voice-controls/transport-controls.md) that are supported on the Roku platform. Apps must implement proper [error handling](/docs/developer-program/media-playback/voice-controls/transport-controls.md#error-handling) for unsupported voice commands. These requirements are also applicbale to new channels projected to reach the specified streaming hours threshold shortly after launch.

**Tests**:

1. Launch the channel
2. Log in into the channel (if needed)
3. Verify that the channel can handle the following voice commands (transport events):
   - Skip/Fast Forward/Rewind
   - Play/Pause/OK
   - Replay
   - Start Over
   - Seek
   - Next
   - Nowplaying
   - Like/Dislike
   - Shuffle/Loop

**Expected Result:**
App successfully handles all voice commands.

**4.12** Apps must use [Roku voice keyboards](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md) for [email](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md), [PIN](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md), and [password](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md) entry.

**Tests**:

1. Launch the channel
2. If channel sign-in is required, a [dynamic voice keyboard](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md) or [dynamic custom voice keyboard](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md) is used for entering an email address and password.
3. If PIN entry is required (for example, when entering a parental access code), a [dynamic voice PinPad](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md) or [dynamic custom voice keyboard](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md) is used.

**Expected Result:**

App displays a voice keyboard when customers need to enter an email address, PIN, or password.

**4.13** Apps in the U.S. Roku Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must implement Roku’s [Continue Watching](/docs/developer-program/discovery/continue-watching.md) feature. This requirement is also applicbale to new channels projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids channels are excluded from this requirement.

**Tests**: App is meeting the criteria specified in 4.13.

**Expected Result:**

App has properly implemented the Continue Watching feature per the integration guide.

## **5. Deep linking**

**5.1** Apps must support deep linking for all media types, per Roku's [deep linking policy](/docs/developer-program/discovery/implementing-deep-linking.md). Live streams (and replays of live broadcast streams) may be exempt from this requirement.

**Tests**:

1. Your Roku device and PC must be connected to the same sub-network.
2. Do not login to the channel.
3. In your browser, launch [Roku Deep linking Tester tool](https://devtools.web.roku.com/DeepLinkingTester/). Follow the instructions to select the channel ID and channel name.
4. Do not enter any parameters and click "Send".
5. Verify content can be launched properly as defined in Roku's deep linking policy.

**Expected Result**:
Content can be launched through deep links properly based on mediaType.

**5.2**  Apps must implement [Direct to Play](/docs/developer-program/discovery/direct-to-play.md) to support direct voice playback commands for launching and playing content.

**Tests**:


1. Verify that the manifest includes the roInput flag (*supports_input_launch=1*).
2. Connect your Roku device and computer to the same sub-network.
3. Launch the channel.
4. Send an [External Control Protocol (ECP)](/docs/developer-program/dev-tools/external-control-api.md) **input** command via cURL to your Roku device using the following syntax: curl -d '' 'http://&lt;Roku Device IP Address&gt;:8060/input?contentId=&lt;*contentIdValue*&gt;&mediaType=&lt;*mediaTypeValue*&gt;'
5. Repeat test for unauthenticated and authenticated users.

**Expected Result**:
Content is launched as specified for the following conditions:

* **App Running**:  The video content item is launched, without re-launching the channel.
* **Unauthenticated**:  The video content item is launched after authentication has been completed.
* **Authenticated**:  The video content item is launched.

**5.3** Apps are prohibited from deep linking into other channels or directing users to exit the channel to purchase content, goods or other services.


**Tests**:

1. Navigate through the menus within the channel.
2. Ensure that within the channel there is no option to deep link into any third-party channels.

**Expected Result**:
Your channel does not deep link into any third-party channels.

## **6. UI and graphics**

**6.1** Apps must have a non-zero version number. This number must be incremented for each build submitted and updated in the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md).

**Tests**:

1. Navigate to the channel on the Roku device's Home screen and focus it.
2. Select * (star) key on your remote to invoke the pop-up with channel information.
3. Verify the version number is not zero.

**Expected Result**:
Version number is greater than zero.

**6.2** Apps in the Kids & Family category must only include content that is appropriate for children. Apps are prohibited from including ads that are targeted based on user activity (behavioral advertising) and may only include ads that are appropriate for children (for example, no graphic violence, no adult situations, and so on).

**Tests**:

1. Navigate through the channel and examine for inappropriate content.

**Expected Result**:
The Kids & Family category displays no inappropriate content.

**6.3** Public channels are prohibited from containing content deemed to be pornographic. With respect to channel information that may appear outside of the application (for example, in search results, in the platform user interface, or on Roku’s website), content and descriptions must be appropriate for all ages. This includes the channel name, artwork, and descriptions appearing in the Roku Streaming Store and web. This also pertains to content titles, artwork, and descriptions appearing in Roku Search.

**Tests**:

1. Navigate through the channel and examine content for pornography.

**Expected Result**:
Your public channel does not contain pornographic content.

**6.4** The Roku Streaming Store artwork and splash screen must clearly represent the name or identity of the channel using only broadcast-safe colors with proper sizing. The channel splash screen must support FHD (1920x1080p) and HD (1280x720p) resolutions. In addition, artwork must not be transparent. The splash screen's URI must be listed in the package manifest file.

**Tests**:

1. Verify splash screen resolutions are: FHD: 1920x1080px and HD: 1280x720px.
2. Verify none of the Roku Streaming Store artwork or splash screen is transparent.
3. Check that in the manifest the splash screen URI is present and correct.

**Expected Result**:
All Roku Streaming Store artwork and splash screens display correctly.

**6.5** Apps that are pre-checked for installation during the device activation flow must be [CVAA compliant](/docs/features/legal/compliance.md#cvaa).

**Tests**:

1. Device activation pre-check is CVAA compliant.

**Expected Result**:
Your channel complies with CVAA, if required.