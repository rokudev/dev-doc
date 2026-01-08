---
title: Certification criteria
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
# Certification criteria

To ensure that the Roku platform provides a consistent, performant experience for customers, Roku reserves the right to review all new and updated public apps in the Roku Streaming Store for design and performance criteria. This certification process confirms that apps properly integrate applicable Roku platform requirements.

> Roku reserves the right to remove published apps from the Roku Streaming Store at any time if they do not maintain compliance with the requirements specified in this document, per the [Roku Distribution Agreement](https://docs.roku.com/doc/developerdistribution/en-us) (or other applicable distribution agreement).

## Preparing for certification

Use the following guidelines to develop, test, and submit your new or updated app for certification.

### Developing apps

#### Use current APIs

Using deprecated APIs may cause your app to fail certification testing. See the list of [deprecated APIs](/docs/references/deprecated-apis.md).

### Testing apps

#### Test apps before submission

Use the certification criteria and the [list of pre-certification tests](/docs/developer-program/certification/cert-tests/certification-testing.md) as tools to guide certification-compliance testing. Roku also provides a suite of tools to help developers verify that their apps comply with Roku's certification criteria before being submitting them for certification:

* [Static Analysis tool](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md): Checks the app's code for certification-related errors.

* [Channel Behavior Analysis tool](/docs/developer-program/publishing/channel-publishing-guide.md#channel-behavior-analysis-window): For SVOD, AVOD, and free apps, verifies whether app performance and deep linking meet applicable certification requirements.

* [Test automation software](/docs/developer-program/dev-tools/automated-channel-testing/automated-testing-overview.md): Enables developers to write and execute automated test cases, including app purchasing, performance, deep linking, and other certification criteria.

#### Test using beta apps

Roku provides developers with an access code for [distributing beta versions of apps](/docs/developer-program/publishing/channel-publishing-guide.md#beta-channel-guidelines) during development and testing. You can use beta apps to preview the most recently uploaded version of the app (app updates are not reviewed for certification until they have been submitted for certification).

#### Test across multiple device types

You must test the app on multiple Roku device models before submitting for certification. Your test suite should include a combination of Roku models with varying processing power and memory. This is because your apps must be performant on all Roku device models that currently receive OS updates. For more information on current and updatable Roku device models, see the [Hardware specifications](/docs/specs/hardware.md#current-roku-models).

### Submitting apps for certification

#### Provide required resources and information

As part of the app publishing flow, you must provide the following resources to submit an app for publishing:

* [Roku Streaming Store information](/docs/developer-program/publishing/channel-publishing-guide.md#channel-store-info-window): You must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by your app. The app name must clearly identify the company associated with the service. You must have full legal rights or consent for their app names and the rights to all trademarks and copyright expressions associated with the name. The app naming must not include or use the Roku name, nor may it contain any profane, derogatory, or misleading language.

* [Authorized ad seller information](/docs/developer-program/publishing/channel-publishing-guide.md#monetization-window): Ad-supported apps must provide the URL path to an **app-ads.txt** file to secure the app's ad inventory. The app-ads.txt file is an industry protocol maintained by the Interactive Advertising Bureau (IAB) that establishes a public record of digital sellers authorized to sell advertisements against your inventory.

  If requested, you must add Roku as an authorized seller to your app-ads.txt file, per provided instructions.

  If your app does not sell ads through third parties or does not run programmatic ads on its inventory, Roku recommends that you include the following line in the app-ads.txt file: `# [Channel Name] does not authorize programmatic sellers`.

* [Contact and support information](/docs/developer-program/publishing/channel-publishing-guide.md#support-information-window): You must provide the following contact information for your app:

  * Customer support (URL, email address, and phone number).

  * Administrative and technical leads (names, email addresses, and phone numbers [with country codes]).

#### Run certification tests

Once you’ve finished QA testing your app and have packaged it, you can begin the certification process by running [Static Analysis](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md) and [Channel Behavior Analysis Testing](/docs/developer-program/publishing/channel-publishing-guide.md#channel-behavior-analysis-window) on your app in the Developer Dashboard. The Static Analysis tool checks the structure and syntax of your app's code for common problems related to certification requirements. This tool lists any errors requiring resolution before the app can be scheduled for publishing. The Channel Behavior Analysis tool, which is only available to free, ad-supported, and subscription apps, launches the app and checks for state-driven results to verify compliance with Roku's certification criteria. TVE, TVOD, PVOD, and vMVPD apps must include login credentials with their app certification submission.

For self-published apps, once your app has passed Static Analysis and Channel Behavior Analysis Testing, you can schedule the publishing process start date.

Once your app is scheduled for publishing, it is submitted to Roku for final review. If Roku does not find any issues with your app, it will be published on the date and time you have scheduled. If issues are found, an email that lists them is forwarded to the developer account associated with the app.

If additional certification testing is required, you should expect to receive feedback on your app within a week following submission. Apps requiring additional testing are reviewed in the order they are received.

For step-by-step instructions on submitting an app, see [Publishing Roku Apps](/docs/developer-program/publishing/channel-publishing-guide.md).

### Updating apps

If you update the implementation code for an existing app, the app must be re-certified and re-published. Changing the content that the app streams does not require re-certification and re-publishing.

***

## Certification policy

### Platform and model constraints

The support requirements for the Roku platform and associated device models are:

* The app must be available on all Roku device models that receive the current Roku OS.
* All content from the app service must be available on all Roku device models.

A comprehensive list of Roku device models and platform code names can be found in the [Hardware specifications](/docs/specs/hardware.md).

### Streaming hour thresholds

All requirements with streaming hours thresholds are stated as an average number of hours per month over the past three months. For example, if a requirement states that it is applicable to apps that average 5 million streaming hours per month over the past three months, apps that have accumulated a total of 15 million streaming hours or more during the past three months must adhere to that requirement. In addition, all requirements with streaming hours thresholds are applicable to new apps projected to reach the specified thresholds shortly after launch.

### App definitions

#### App types

The term "app" is used throughout this document and may refer to the different app types on the Roku platform, which include but are not limited to the following:

* video apps.
* audio apps.
* screensavers.
* themes.
* games.
* utilities.

#### App model types

Certification criteria may be applicable to one or more app model types supported by Roku, These app model types, include, but are not limited to, the following:

* Free. Free access to content without displaying video advertisements or charging a recurring subscription fee.
* Live TV apps. Free access to linear content by displaying video advertisements.
* AVOD (Ad-supported Video On Demand). Free access to VOD content by displaying video advertisements.
* SVOD (Subscription Video On Demand). A monthly, annual, or seasonal recurring subscription fee to access content.
* TVOD (Transactional Video On Demand). A one-time fee to rent or purchase content such as movies, pay-per-view events, or premium offers for early access.
* TVE (Television Everywhere). Access to content via credentials from a cable, satellite, or Virtual Multichannel Video Programming Distributor (vMVPD) subscription.
* vMVPD (Virtual Multichannel Video Programming Distributors). Live and on-demand linear content is aggregated and delivered as a bundle over the internet. The app charges a monthly or annual recurring subscription fee to access different content packages.

> A single app can offer one or more monetization options. In this case, the app must comply with the requirements for each of the offered monetization options. For example, an SVOD app may charge a subscription fee while displaying video ads and/or offering premium or transactional content.

***

## Certification criteria

**Last updated**: October, 2025

Certification criteria are listed by functionality. <br />

### 1. Advertising

1.1 Apps that include video advertising must comply with all the integration requirements listed in the <a href="/docs/developer-program/advertising/ad-requirements.md">Roku advertising requirements</a>  document.

### 2. Purchases


**2.1** Apps offering transactional content or services must integrate and enable Roku Pay services including, but not limited to, signup/sign-in, payment, and entitlements/transactions within their app. Apps must comply with all requirements listed in the [Roku Pay integration requirements document](/docs/developer-program/roku-pay/roku-pay-requirements.md). Apps must disclose integration/use of all non-Roku SDKs and libraries, and app features that enable, facilitate, or link to monetary transactions or external webpages related to such transactions. Roku has the right to approve or deny such non-Roku SDKs, libraries, and app features. Apps may not facilitate or direct customers to use any method of payment and/or method of payment interface in connection with their app other than Roku Pay.

**2.2** Apps that include authentication must complete account sign-ups and sign-ins on the device using [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md). Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms.

Apps must complete upgrades and downgrades on the device using [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md). The upgrade/downgrade workflows are prohibited from including external webpages.


**2.3** SVOD apps that have streamed more than an average of 10 million hours per month over the last three months must implement Roku's [Instant Signup (ISU)](/docs/developer-program/discovery/instant-signup.md) feature. This requirement is also applicable to new SVOD apps projected to reach the specified streaming hours threshold shortly after launch. Apps offering Premium Subscriptions on The Roku Channel are exempt from this requirement.

Apps' ISU integration must include offers for lapsed and canceled subscribers. This requirement is applicable to apps with existing ISU integrations.

Apps must return a product offer to Roku for all current non-subscribers. This ensures that all non-subscribed customers receive a product offer on all touchpoints. This helps drive subscription sign-ups, particularly for lapsed and cancelled customers.

<br />

**2.4** Apps are prohibited from including nested content or applications, additional content via browsers or embedded screens, deep links to other applications, or any cross-app functionality.

### 3. Performance


**3.1** Apps must be available on all Roku devices that receive the current Roku OS; responsive to user launch, navigation, browse, and playback of content at a reasonable speed on all supported Roku devices; and be free of frequent crashes, rebuffering, or other material performance that negatively impacts or limits the consumer experience.

Apps must meet requirements 3.2–3.6 when measured specifically on the Roku Streaming Stick+ (Amarillo-2019 3810X) or the Roku Premiere+ (Gilbert 4K 3921X). If the performance requirement is not met on these specified devices, Roku reserves the right to block launch on all other Roku device types.

**3.2** Apps must launch to a **fully rendered** home screen within 15 seconds. A signal beacon must be added to the app to measure launch times. The debug console can then be used to verify that the app's launch time is meeting this requirement. See [Measuring channel performance](/docs/developer-program/performance-guide/measuring-channel-performance.md) on how to measure app launch times.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/performance-guide/measuring-channel-performance.md](https://developer.roku.com/docs/developer-program/performance-guide/measuring-channel-performance.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "f9c9991b-0abf-4fe5-9244-b3dc40e3c2d1" -->
\<!--- ||ccName "Screen-to-screen transition speed requirements" -->
\<!--- ||ccDescriptionBegin -->
**3.3** Apps must have screen-to-screen (scene-to-scene) transitions that are within 3 seconds.

\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "62b068a4-5dbf-4964-b0ee-1e38fb4c849e" -->
\<!--- ||ccName "Response speed to user requests" -->
\<!--- ||ccDescriptionBegin -->
**3.4** Apps must display a loading indicator during any process visible to users that takes longer than 3 seconds. Apps must respond to user requests within 10 seconds.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "60ee85aa-e547-4594-b7b0-309f09f2b512" -->
\<!--- ||ccName "Response speed for remote button press, tile navigation" -->
\<!--- ||ccDescriptionBegin -->
**3.5** Apps must respond to remote button presses and navigate between tiles within 250 milliseconds.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "557bd93b-05f8-435b-95c7-eec3b568912a" -->
\<!--- ||ccName "Speed of content playback start" -->
\<!--- ||ccDescriptionBegin -->
**3.6** Apps must start playing content within 8 seconds of initiation.

Apps with custom video players must fire video start beacons to measure video start times (if the app is using the Roku video player, the Roku OS automatically fires beacons to measure and record the video start time).

The debug console can be used to verify that video start times are compliant. See [Measuring app performance](/docs/developer-program/performance-guide/measuring-channel-performance.md) for more information.

Roku's [Fast Video Start](/docs/developer-program/media-playback/fast-video-start.md) is available to pre-buffer content and help improve playback performance.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/performance-guide/measuring-channel-performance.md](https://developer.roku.com/docs/developer-program/performance-guide/measuring-channel-performance.md)", "[https://developer.roku.com/docs/developer-program/media-playback/fast-video-start.md](https://developer.roku.com/docs/developer-program/media-playback/fast-video-start.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "b8d521b9-355c-4c36-a25a-67a5b63ebb53" -->
\<!--- ||ccName "Channel file size" -->
\<!--- ||ccDescriptionBegin -->
**3.7** The app's file size must be 4 MB or less.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance](https://developer.roku.com/docs/developer-program/certification/certification.md#3-performance)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccCatBegin "bd9b4bdb-d0c0-488c-8233-7fd708e02f10" -->

### 4. Channel operation

\<!--- ||ccCatEnd -->

\<!--- ||ccRuleBegin "3c9f4009-9a67-4c47-a59b-6cea639c1419" -->
\<!--- ||ccName "Channel updates non-disruptive to saved data" -->
\<!--- ||ccDescriptionBegin -->
**4.1** App updates are prohibited from requiring reactivation/re-linking/re-login, and must persist saved data.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "94c42ed8-32b0-4923-b5c8-9e536f69e34b" -->
\<!--- ||ccName "Automatic Account Link requirement" -->
\<!--- ||ccDescriptionBegin -->
**4.2** Apps that require a user to log in and that have streamed more than an average of 1 million hours per month over the last three months must integrate [Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md). This requirement is also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccEngagementThreshold "apps that require a user account to login and that have streamed more than an average of 1 million hours over the last three months" -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md](https://developer.roku.com/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "9c32dbd1-342a-42c9-b8ea-352edbd749ab" -->
\<!--- ||ccName "Roku Event Dispatcher requirement" -->
\<!--- ||ccDescriptionBegin -->
**4.3**  Apps that require authentication (SVOD, TVE, and other subscription services) must use the [Roku Event Dispatcher](/docs/developer-program/discovery/search/prioritizing-authenticated-channels-in-roku-search.md) to communicate authentication status.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/discovery/search/prioritizing-authenticated-apps-in-roku-search.md](https://developer.roku.com/docs/developer-program/discovery/search/prioritizing-authenticated-apps-in-roku-search.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "fca2177f-979b-45cc-8b2b-edf1c4907b90" -->
\<!--- ||ccName "Video and audio quality" -->
\<!--- ||ccDescriptionBegin -->
**4.4** Roku [reserves use of the Options](/docs/developer-program/design/masterui.md) ("*") button during video playback for the sole purpose of Roku system displays. Apps may use the Options button for additional in-app options while UI components are displayed on top of the video.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/design/masterui.md](https://developer.roku.com/docs/developer-program/design/masterui.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "9af5ff55-e2d5-4e23-a393-02486aa59972" -->
\<!--- ||ccName "Channel UI cannot block Roku screensaver" -->
\<!--- ||ccDescriptionBegin -->
**4.5** Apps are prohibited from overriding or interfering with Roku's system screensaver. See [Roku’s Screensaver Policy](/docs/developer-program/media-playback/screensavers.md).\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "c9698b8c-cfe2-466a-a816-e2fa39ad0395" -->
\<!--- ||ccName "Back button functional requirements" -->
\<!--- ||ccDescriptionBegin -->
**4.6** Apps must directly return the user to the previous screen and/or state when the [back button](/docs/developer-program/design/remote-control-buttons.md) on the Roku remote is pressed. When the back button is pressed on the app's home screen, apps must exit the app and return the user to the Roku home screen. Apps may display a single confirmation dialog immediately before the user exits the app—and then return the user to the Roku home screen upon receiving confirmation that they want to leave the app.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/design/remote-control-buttons.md](https://developer.roku.com/docs/developer-program/design/remote-control-buttons.md)"]   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "4173992c-0139-456a-bcfc-7ab8d9bbe4b0" -->
\<!--- ||ccName "Trick play thumbnail requirement" -->
\<!--- ||ccDescriptionBegin -->
**4.7** Apps must display thumbnails during [trick play](/docs/developer-program/media-playback/trick-mode/trick-mode.md) for VOD content longer than 15 minutes.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "2020-10-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/media-playback/trick-mode/trick-mode.md](https://developer.roku.com/docs/developer-program/media-playback/trick-mode/trick-mode.md)"]    -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "2a68c2b2-5bea-4f58-9682-fe9d06ab55aa" -->
\<!--- ||ccName "Closed captions" -->
\<!--- ||ccDescriptionBegin -->
**4.8**  Apps must comply with [all applicable accessibility laws](https://docs.roku.com/published/channelaccessibility/en/us) and global settings related to accessibility and user experience. Apps must provide [closed captions](/docs/developer-program/media-playback/closed-caption.md) and audio descriptions for content where required by law. If including closed captions, the app must follow the user global settings for closed captioning, and support the following closed captioning settings in the Options menu: On, Off, On instant replay, and On mute (Roku TVs only). For VOD content, apps must synchronize the captions with the audio.

Apps must adhere to [Roku’s autoplay policy](/docs/developer-program/media-playback/autoplay.md).

\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "2024-10-01T12:00:00.000"   -->
\<!--- WARNING! This criterion has multiple clauses. The effective date applies only to the last item (autoplay) but the rest was already in effect. -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/media-playback/closed-caption.md](https://developer.roku.com/docs/developer-program/media-playback/closed-caption.md)"]   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "51f2ca7c-8488-432b-a9a3-a9d6c565a937" -->
\<!--- ||ccName "Instant replay" -->
\<!--- ||ccDescriptionBegin -->
**4.9** Apps must rewind between 10 to 25 seconds when the [instant replay button](/docs/developer-program/design/remote-control-buttons.md#instant-replayskip-back) on the Roku remote is pressed.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "76eb9f65-cad9-48fe-9911-2631d5ad9fbe" -->
\<!--- ||ccName "Video bookmark threshold, persistence" -->
\<!--- ||ccDescriptionBegin -->
**4.10** Apps must implement [bookmarking](/docs/developer-program/media-playback/bookmarking.md) for all VOD content longer than 15 minutes. Apps must store bookmarks for a minimum of 30 days.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "f0ea9e6a-d639-437d-88e0-0cf9e17058dc" -->
\<!--- ||ccName "Voice control support" -->
\<!--- ||ccDescriptionBegin -->
**4.11** Apps that have streamed more than an average of 5 million hours per month over the last three months must implement all [voice controls](/docs/developer-program/media-playback/voice-controls/transport-controls.md) that are supported on the Roku platform. Apps must implement proper [error handling](/docs/developer-program/media-playback/voice-controls/transport-controls.md#error-handling) for unsupported voice commands. These requirements are also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->

\<!--- WARNING! This criterion has 3 clauses. The effective date applies to the 2nd and 3rd criteria items ("Additionally") but the rest was already in effect. -->
\<!--- ||ccEngagementThreshold "For all apps that have streamed more than an average of 5 million hours over the last three months"  -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/media-playback/voice-controls/transport-controls.md](https://developer.roku.com/docs/developer-program/media-playback/voice-controls/transport-controls.md)"]    -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "eb0c5e1a-e23d-401f-b17a-d26418032046" -->
\<!--- ||ccName "Voice keyboard support for email, PIN, and password entry" -->
\<!--- ||ccDescriptionBegin -->

**4.12** Apps must use [Roku voice keyboards](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md) for [email](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md), [PIN](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md), and [password](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md) entry.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "2022-10-01T12:00:00.000"   -->
\<!--- WARNING! This criterion has 3 aspects. The effective date applies to the 3rd criteria item ("password entry"), but the rest was already in effect for "email" and "PIN" starting April 1, 2022. -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md)"]  -->

\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md)"]   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md](https://developer.roku.com/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md)"] -->

\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "1d5064f9-ddc5-4db5-8b14-c2cb5a0875e2" -->
\<!--- ||ccName "Continue Watching integration for apps meeting streaming hours threshold" -->
\<!--- ||ccDescriptionBegin -->

**4.13** Apps in the U.S. Roku Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must implement Roku’s [Continue Watching](/docs/developer-program/discovery/continue-watching.md) feature. This requirement is also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "2023-04-01T12:00:00.000"   -->

\<!--- ||ccEngagementThreshold "For all apps (except TVOD, live linear, and made for kids apps)that have streamed more than an average of 5 million hours over the last three months"  -->

\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/discovery/continue-watching.md](https://developer.roku.com/docs/developer-program/discovery/continue-watching.md)"]   -->

\<!--- ||ccRegion ["US"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation](https://developer.roku.com/docs/developer-program/certification/certification.md#4-channel-operation)"    -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccCatBegin "1309e7f7-6799-44ca-8d89-bd162a771f4b" -->

### 5. Deep linking

\<!--- ||ccCatEnd -->

\<!--- ||ccRuleBegin "b0ef2b3c-f376-4f6a-8820-4ec5c14838be" -->
\<!--- ||ccName "Deep linking support requirement" -->
\<!--- ||ccDescriptionBegin -->
**5.1** Apps must support deep linking for all media types, per Roku's [deep linking policy](/docs/developer-program/discovery/implementing-deep-linking.md). Live streams (and replays of live broadcast streams) may be exempt from this requirement.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/discovery/implementing-deep-linking.md](https://developer.roku.com/docs/developer-program/discovery/implementing-deep-linking.md)"] -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking](https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "9c9d3b47-759a-4529-ac82-734ac0d0985d" -->
\<!--- ||ccName "Direct playback support in running app" -->
\<!--- ||ccDescriptionBegin -->
**5.2**  Apps must implement [Direct to Play](/docs/developer-program/discovery/direct-to-play.md) to support direct voice playback commands for launching and playing content.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/discovery/direct-to-play.md](https://developer.roku.com/docs/developer-program/discovery/direct-to-play.md)"]    -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/discovery/implementing-deep-linking.md](https://developer.roku.com/docs/developer-program/discovery/implementing-deep-linking.md)"] -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/references/brightscript/events/roinputevent.md](https://developer.roku.com/docs/references/brightscript/events/roinputevent.md)"]   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking](https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "4906bd53-85b0-424d-a4c1-565490e058a6" -->
\<!--- ||ccName "Deep-linking, commerce limited to within app" -->
\<!--- ||ccDescriptionBegin -->
**5.3** Apps are prohibited from deep linking into other apps or directing users to exit the app to purchase content, goods or other services.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking](https://developer.roku.com/docs/developer-program/certification/certification.md#5-deep-linking)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccCatBegin "b29cedbc-b3be-40ba-afd2-6abe15cb9f1e" -->

### 6. UI and Graphics

\<!--- ||ccCatEnd -->

\<!--- ||ccRuleBegin "27917dc2-2a01-463a-843b-aca408e458a8" -->
\<!--- ||ccName "Channel version number" -->
\<!--- ||ccDescriptionBegin -->
**6.1** Apps must have a non-zero version number. This number must be incremented for each build submitted and updated in the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md).\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRelatedResources ["[https://developer.roku.com/docs/developer-program/getting-started/architecture/channel-manifest.md](https://developer.roku.com/docs/developer-program/getting-started/architecture/channel-manifest.md)"]   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics](https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "83617eac-e30d-444c-bde8-243c871dc85a" -->
\<!--- ||ccName "Kids & Family category" -->
\<!--- ||ccDescriptionBegin -->
**6.2** Apps in the Kids & Family category must only include content that is appropriate for children. Apps are prohibited from including ads that are targeted based on user activity (behavioral advertising) and may only include ads that are appropriate for children (for example, no graphic violence, no adult situations, and so on).\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics](https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "01695ae8-2649-4f06-b699-19087f38caf1" -->
\<!--- ||ccName "Pornography and public app decorum" -->
\<!--- ||ccDescriptionBegin -->
**6.3** Public apps are prohibited from containing content deemed to be pornographic. With respect to app information that may appear outside of the application (for example, in search results, in the platform user interface, or on Roku’s website), content and descriptions must be appropriate for all ages. This includes the app name, artwork, and descriptions appearing in the Roku Streaming Store and web. This also pertains to content titles, artwork, and descriptions appearing in Roku Search.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics](https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "4b42afe5-b620-491a-82a3-04a3f675e3b8" -->
\<!--- ||ccName "Splash screen and streaming store artwork standards" -->
\<!--- ||ccDescriptionBegin -->
**6.4** The Roku Streaming Store artwork and splash screen must clearly represent the name or identity of the app using only broadcast-safe colors with proper sizing. The app splash screen must support FHD (1920x1080p) and HD (1280x720p) resolutions. In addition, artwork must not be transparent. The splash screen's URI must be listed in the package manifest file.\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics](https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "2ad0a67a-d677-498d-91d2-0372195dd9f9" -->
\<!--- ||ccName "CVAA compliance" -->
\<!--- ||ccDescriptionBegin -->
**6.5** Apps that are pre-checked for installation during the device activation flow must be [CVAA compliant](/docs/features/legal/compliance.md#cvaa).\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"   -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics](https://developer.roku.com/docs/developer-program/certification/certification.md#6-ui-and-graphics)"  -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccHiddenSectionBegin -->

\<!--- ||ccCatBegin "b68050ad-c0e1-4f09-85a0-3cf4eb558feb" -->
\<!--- ||ccCatName "### 100 - Internal Requirements" -->
\<!--- ||ccCatEnd -->

\<!--- ||ccRuleBegin "59e7a5ea-16b0-4c46-9b62-5852934b7f4a" -->
\<!--- ||ccName "Deprecations" -->
\<!--- ||ccDescriptionBegin "100.1 - BrightScript/RSG deprecated APIs, Components, fields, etc."-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "58d6cde6-8b9a-4b23-8011-3a8d1a69c814" -->
\<!--- ||ccName "Manifest" -->
\<!--- ||ccDescriptionBegin "100.2 - Manifest"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "f27db89b-7a14-4eb0-abca-f1c43ad90acf" -->
\<!--- ||ccName "Billing" -->
\<!--- ||ccDescriptionBegin "100.3 - Roku Streaming Store Billing integration"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "3e4b1af5-8134-4b7f-837e-2f0979844d72" -->
\<!--- ||ccName "Roku Streaming Store" -->
\<!--- ||ccDescriptionBegin "100.4 - Roku Streaming Store integration"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "e0649c02-e13b-47fc-9379-101b1919761f" -->
\<!--- ||ccName "Roku Advertising Framework" -->
\<!--- ||ccDescriptionBegin "100.5 - Roku Advertising Framework integration"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "87e552fb-7501-4b6b-9c59-e0aae8215831" -->
\<!--- ||ccName "Package" -->
\<!--- ||ccDescriptionBegin "100.6 - Roku Streaming Store Package"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "877334da-1a0a-41c0-92f4-7537ac3e4813" -->
\<!--- ||ccName "Uncharacterized" -->
\<!--- ||ccDescriptionBegin "100.7 - Uncharacterized Certification Checks"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "80dd9857-fc1d-4a2f-aa13-7008f8e6656b" -->
\<!--- ||ccName "Screensavers" -->
\<!--- ||ccDescriptionBegin "100.8 - Screensavers Compliance Checks"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->

\<!--- ||ccRuleBegin "1a40356c-493b-4994-b0e5-72c12be497b9" -->
\<!--- ||ccName "Monitoring" -->
\<!--- ||ccDescriptionBegin "100.9 - Various Code Monitoring"-->
\<!--- ||ccDescriptionEnd -->
\<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000" -->
\<!--- ||ccRegion ["Global"] -->
\<!--- ||ccCertURL "[https://developer.roku.com/docs/developer-program/certification/certification.md](https://developer.roku.com/docs/developer-program/certification/certification.md)" -->
\<!--- ||ccRuleEnd -->
