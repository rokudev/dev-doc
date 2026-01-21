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
To ensure that the Roku platform provides a consistent, performant experience for customers, Roku reserves the right to review all new and updated public apps in the Roku Streaming Store for design and performance criteria. This certification process confirms that apps properly integrate applicable Roku platform requirements.

> Roku reserves the right to remove published apps from the Roku Streaming Store at any time if they do not maintain compliance with the requirements specified in this document, per the [Roku Distribution Agreement](https://docs.roku.com/doc/developerdistribution/en-us) (or other applicable distribution agreement).

## Preparing for certification

Use the following guidelines to develop, test, and submit your new or updated app for certification.

### Developing apps

#### Use current APIs

Using deprecated APIs may cause your app to fail certification testing. See the list of [deprecated APIs](doc:deprecated-apis).

### Testing apps

#### Test apps before submission

Use the certification criteria and the [list of pre-certification tests](doc:certification-testing) as tools to guide certification-compliance testing. Roku also provides a suite of tools to help developers verify that their apps comply with Roku's certification criteria before being submitting them for certification:

* [Static Analysis tool](doc:static-analysis-tool): Checks the app's code for certification-related errors.

* [Channel Behavior Analysis tool](doc:channel-publishing-guide): For SVOD, AVOD, and free apps, verifies whether app performance and deep linking meet applicable certification requirements.

* [Test automation software](doc:automated-testing-overview): Enables developers to write and execute automated test cases, including app purchasing, performance, deep linking, and other certification criteria.

#### Test using beta apps

Roku provides developers with an access code for [distributing beta versions of apps](doc:channel-publishing-guide) during development and testing. You can use beta apps to preview the most recently uploaded version of the app (app updates are not reviewed for certification until they have been submitted for certification).

#### Test across multiple device types

You must test the app on multiple Roku device models before submitting for certification. Your test suite should include a combination of Roku models with varying processing power and memory. This is because your apps must be performant on all Roku device models that currently receive OS updates. For more information on current and updatable Roku device models, see the [Hardware specifications](doc:hardware).

### Submitting apps for certification

#### Provide required resources and information

As part of the app publishing flow, you must provide the following resources to submit an app for publishing:

* [Roku Streaming Store information](doc:channel-publishing-guide): You must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by your app. The app name must clearly identify the company associated with the service. You must have full legal rights or consent for their app names and the rights to all trademarks and copyright expressions associated with the name. The app naming must not include or use the Roku name, nor may it contain any profane, derogatory, or misleading language.

* [Authorized ad seller information](doc:channel-publishing-guide): Ad-supported apps must provide the URL path to an **app-ads.txt** file to secure the app's ad inventory. The app-ads.txt file is an industry protocol maintained by the Interactive Advertising Bureau (IAB) that establishes a public record of digital sellers authorized to sell advertisements against your inventory.

  If requested, you must add Roku as an authorized seller to your app-ads.txt file, per provided instructions.

  If your app does not sell ads through third parties or does not run programmatic ads on its inventory, Roku recommends that you include the following line in the app-ads.txt file: `# [Channel Name] does not authorize programmatic sellers`.

* [Contact and support information](doc:channel-publishing-guide): You must provide the following contact information for your app:

  * Customer support (URL, email address, and phone number).

  * Administrative and technical leads (names, email addresses, and phone numbers [with country codes]).

#### Run certification tests

Once you’ve finished QA testing your app and have packaged it, you can begin the certification process by running [Static Analysis](doc:static-analysis-tool) and [Channel Behavior Analysis Testing](doc:channel-publishing-guide) on your app in the Developer Dashboard. The Static Analysis tool checks the structure and syntax of your app's code for common problems related to certification requirements. This tool lists any errors requiring resolution before the app can be scheduled for publishing. The Channel Behavior Analysis tool, which is only available to free, ad-supported, and subscription apps, launches the app and checks for state-driven results to verify compliance with Roku's certification criteria. TVE, TVOD, PVOD, and vMVPD apps must include login credentials with their app certification submission.

For self-published apps, once your app has passed Static Analysis and Channel Behavior Analysis Testing, you can schedule the publishing process start date.

Once your app is scheduled for publishing, it is submitted to Roku for final review. If Roku does not find any issues with your app, it will be published on the date and time you have scheduled. If issues are found, an email that lists them is forwarded to the developer account associated with the app.

If additional certification testing is required, you should expect to receive feedback on your app within a week following submission. Apps requiring additional testing are reviewed in the order they are received.

For step-by-step instructions on submitting an app, see [Publishing Roku Apps](doc:channel-publishing-guide).

### Updating apps

If you update the implementation code for an existing app, the app must be re-certified and re-published. Changing the content that the app streams does not require re-certification and re-publishing.

***

## Certification policy

### Platform and model constraints

The support requirements for the Roku platform and associated device models are:

* The app must be available on all Roku device models that receive the current Roku OS.
* All content from the app service must be available on all Roku device models.

A comprehensive list of Roku device models and platform code names can be found in the [Hardware specifications](doc:hardware).

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

**2.1** Apps offering transactional content or services must integrate and enable Roku Pay services including, but not limited to, signup/sign-in, payment, and entitlements/transactions within their app. Apps must comply with all requirements listed in the [Roku Pay integration requirements document](doc:roku-pay-requirements). Apps must disclose integration/use of all non-Roku SDKs and libraries, and app features that enable, facilitate, or link to monetary transactions or external webpages related to such transactions. Roku has the right to approve or deny such non-Roku SDKs, libraries, and app features. Apps may not facilitate or direct customers to use any method of payment and/or method of payment interface in connection with their app other than Roku Pay.

**2.2** Apps that include authentication must complete account sign-ups and sign-ins on the device using [On-device authentication](doc:on-device-authentication). Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms.

Apps must complete upgrades and downgrades on the device using [On-device upgrade and downgrade](doc:on-device-upgrade-downgrade). The upgrade/downgrade workflows are prohibited from including external webpages.

**2.3** SVOD apps that have streamed more than an average of 10 million hours per month over the last three months must implement Roku's [Instant Signup (ISU)](doc:instant-signup) feature. This requirement is also applicable to new SVOD apps projected to reach the specified streaming hours threshold shortly after launch. Apps offering Premium Subscriptions on The Roku Channel are exempt from this requirement.

Apps' ISU integration must include offers for lapsed and canceled subscribers. This requirement is applicable to apps with existing ISU integrations.

Apps must return a product offer to Roku for all current non-subscribers. This ensures that all non-subscribed customers receive a product offer on all touchpoints. This helps drive subscription sign-ups, particularly for lapsed and cancelled customers.

<br />

**2.4** Apps are prohibited from including nested content or applications, additional content via browsers or embedded screens, deep links to other applications, or any cross-app functionality.

### 3. Performance

**3.1** Apps must be available on all Roku devices that receive the current Roku OS; responsive to user launch, navigation, browse, and playback of content at a reasonable speed on all supported Roku devices; and be free of frequent crashes, rebuffering, or other material performance that negatively impacts or limits the consumer experience.

Apps must meet requirements 3.2–3.6 when measured specifically on the Roku Streaming Stick+ (Amarillo-2019 3810X) or the Roku Premiere+ (Gilbert 4K 3921X). If the performance requirement is not met on these specified devices, Roku reserves the right to block launch on all other Roku device types.

**3.2** Apps must launch to a **fully rendered** home screen within 15 seconds. A signal beacon must be added to the app to measure launch times. The debug console can then be used to verify that the app's launch time is meeting this requirement. See [Measuring channel performance](doc:measuring-channel-performance) on how to measure app launch times.

**3.3** Apps must have screen-to-screen (scene-to-scene) transitions that are within 3 seconds.

**3.4** Apps must display a loading indicator during any process visible to users that takes longer than 3 seconds. Apps must respond to user requests within 10 seconds.

**3.5** Apps must respond to remote button presses and navigate between tiles within 250 milliseconds.

**3.6** Apps must start playing content within 8 seconds of initiation.

Apps with custom video players must fire video start beacons to measure video start times (if the app is using the Roku video player, the Roku OS automatically fires beacons to measure and record the video start time).

The debug console can be used to verify that video start times are compliant. See [Measuring app performance](doc:measuring-channel-performance) for more information.

Roku's [Fast Video Start](doc:fast-video-start) is available to pre-buffer content and help improve playback performance.

**3.7** The app's file size must be 4 MB or less.

### 4. Channel operation

**4.1** App updates are prohibited from requiring reactivation/re-linking/re-login, and must persist saved data.

**4.2** Apps that require a user to log in and that have streamed more than an average of 1 million hours per month over the last three months must integrate [Automatic Account Link](doc:universal-authentication-protocol-for-single-sign-on). This requirement is also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch.

**4.3**  Apps that require authentication (SVOD, TVE, and other subscription services) must use the [Roku Event Dispatcher](doc:prioritizing-authenticated-channels-in-roku-search) to communicate authentication status.

**4.4** Roku [reserves use of the Options](doc:masterui) ("*") button during video playback for the sole purpose of Roku system displays. Apps may use the Options button for additional in-app options while UI components are displayed on top of the video.

**4.5** Apps are prohibited from overriding or interfering with Roku's system screensaver. See [Roku’s Screensaver Policy](doc:screensavers).

**4.6** Apps must directly return the user to the previous screen and/or state when the [back button](doc:remote-control-buttons) on the Roku remote is pressed. When the back button is pressed on the app's home screen, apps must exit the app and return the user to the Roku home screen. Apps may display a single confirmation dialog immediately before the user exits the app—and then return the user to the Roku home screen upon receiving confirmation that they want to leave the app.

**4.7** Apps must display thumbnails during [trick play](doc:trick-mode) for VOD content longer than 15 minutes.

**4.8**  Apps must comply with [all applicable accessibility laws](https://docs.roku.com/published/channelaccessibility/en/us) and global settings related to accessibility and user experience. Apps must provide [closed captions](doc:closed-caption) and audio descriptions for content where required by law. If including closed captions, the app must follow the user global settings for closed captioning, and support the following closed captioning settings in the Options menu: On, Off, On instant replay, and On mute (Roku TVs only). For VOD content, apps must synchronize the captions with the audio.

Apps must adhere to [Roku’s autoplay policy](doc:autoplay).

**4.9** Apps must rewind between 10 to 25 seconds when the [instant replay button](doc:remote-control-buttons) on the Roku remote is pressed.

**4.10** Apps must implement [bookmarking](doc:bookmarking) for all VOD content longer than 15 minutes. Apps must store bookmarks for a minimum of 30 days.

**4.11** Apps that have streamed more than an average of 5 million hours per month over the last three months must implement all [voice controls](doc:transport-controls) that are supported on the Roku platform. Apps must implement proper [error handling](doc:transport-controls) for unsupported voice commands. These requirements are also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch.

**4.12** Apps must use [Roku voice keyboards](doc:dynamic-keyboard-base) for [email](doc:dynamic-keyboard), [PIN](doc:dynamic-pinpad), and [password](doc:dynamic-keyboard) entry.

**4.13** Apps in the U.S. Roku Streaming Store that have streamed more than an average of 5 million hours per month over the last three months must implement Roku’s [Continue Watching](doc:continue-watching) feature. This requirement is also applicable to new apps projected to reach the specified streaming hours threshold shortly after launch. TVOD, live linear, and made-for-kids apps are excluded from this requirement.

### 5. Deep linking

**5.1** Apps must support deep linking for all media types, per Roku's [deep linking policy](doc:implementing-deep-linking). Live streams (and replays of live broadcast streams) may be exempt from this requirement.

**5.2**  Apps must implement [Direct to Play](doc:direct-to-play) to support direct voice playback commands for launching and playing content.

**5.3** Apps are prohibited from deep linking into other apps or directing users to exit the app to purchase content, goods or other services.

### 6. UI and Graphics

**6.1** Apps must have a non-zero version number. This number must be incremented for each build submitted and updated in the [manifest](doc:channel-manifest).

**6.2** Apps in the Kids & Family category must only include content that is appropriate for children. Apps are prohibited from including ads that are targeted based on user activity (behavioral advertising) and may only include ads that are appropriate for children (for example, no graphic violence, no adult situations, and so on).

**6.3** Public apps are prohibited from containing content deemed to be pornographic. With respect to app information that may appear outside of the application (for example, in search results, in the platform user interface, or on Roku’s website), content and descriptions must be appropriate for all ages. This includes the app name, artwork, and descriptions appearing in the Roku Streaming Store and web. This also pertains to content titles, artwork, and descriptions appearing in Roku Search.

**6.4** The Roku Streaming Store artwork and splash screen must clearly represent the name or identity of the app using only broadcast-safe colors with proper sizing. The app splash screen must support FHD (1920x1080p) and HD (1280x720p) resolutions. In addition, artwork must not be transparent. The splash screen's URI must be listed in the package manifest file.

**6.5** Apps that are pre-checked for installation during the device activation flow must be [CVAA compliant](doc:legal).
