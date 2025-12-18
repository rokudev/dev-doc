---
title: Static Analysis Tool
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

# Static Analysis Tool

> Apps must pass Static Analysis with no **Errors** before they can be published to the Streaming Store.

## Overview

The app publishing flow includes a Static Analysis Tool used to analyze the app's BrightScript source code and detect common issues without having to submit for certification. This arms developers with the information they need to optimize their apps and ensure the app passes certification quickly. These common issues include, but are not limited to, simple app runtime issues, such as crashes on launch, and media playback errors (automated testing).

## Developer Dashboard

The Static Analysis Tool is available from the [Developer Dashboard](https://developer.roku.com/developer).

1. From the **Developer Dashboard > Manage My Channels** tool, [upload a package file](/docs/developer-program/publishing/channel-publishing-guide.md#package-upload-window).


2. Select **Static Analysis** from the drop-down menu.  This option is only available after a package file has been uploaded.

    ![roku815px - static-analysis-dropdown](https://image.roku.com/ZHZscHItMTc2/static-analysis-dropdown-v2.png "static-analysis-dropdown")



3. Click **Analyze** to begin the Static Analysis testing of your app. Click **Refresh** to check whether the Static Analysis test results are ready and display them.

    ![roku815px - static-analysis-analyze-button](https://image.roku.com/ZHZscHItMTc2/static-analysis-analyze-button-v2.png "static-analysis-analyze-button")


4. The **Static Analysis Results** table lists error, warning, and info messages returned by the test. For each message, the following information is provided:

    ![roku815px - static-analysis-test-results](https://image.roku.com/ZHZscHItMTc2/static-analysis-test-results-v2.png "static-analysis-test-results")

    | Column                    | Description                                                  |
    | ------------------------- | ------------------------------------------------------------ |
    | Message                   | A description of the issue related to the app.           |
    | Severity                  | The type of message: error, warning, or info.<br /><br />${severity-list} |
    | Category                  | The type of issue (for example, package, performance, billing, manifest, and so on). |
    | Certification Requirement | Provides a link to any related certification requirements in the [Certification Criteria](/docs/developer-program/certification/certification.md) document. |

    You can filter the test results based on the **Severity** or **Category**.



5. Alternatively, you can wait to receive the test results via an email notification. The test results are sent to the email address associated with the developer account. This email contains a link to the Static Analysis test results for the app (you can also download the test results as a plain text JSON file).


{#severity-list}

- **Error**.  Errors block the app from passing certification. All errors must be resolved to pass static analysis testing and schedule the app for publishing.
- **Warning**. Warnings do not currently block the app from passing certification; however, they should be resolved to ensure the app can pass static analysis testing in the future. In addition, resolving warnings helps optimize app performance.
- **Info**. Info messages provide tips that may be helpful in the development of the app.

## Static Analysis test details

Following are the tests that Static Analysis performs on the package file. More tests will be added on a monthly basis.

| Test case                                                                                                     | Date added    |
|---------------------------------------------------------------------------------------------------------------|---------------|
| Manifest attributes validation                                                                                | February 2018 |
| Deprecated components detection                                                                               | February 2018 |
| Deprecated APIs detection                                                                                     | February 2018 |
| Existence of required package files                                                                           | February 2018 |
| Check for UTF-8 Manifest encoding                                                                             | February 2018 |
| Extraneous directories detection                                                                              | February 2018 |
| Extraneous files detection                                                                                    | February 2018 |
| Check for package size                                                                                        | February 2018 |
| STOP commands detection                                                                                       | February 2018 |
| RSG app identification                                                                                    | February 2018 |
| Check for TimeGrid usage                                                                                      | February 2018 |
| Check for roProgramGuide usage                                                                                | February 2018 |
| Proper RAF integration tests                                                                                  | May 2019      |
| Proper Roku Pay integration tests                                                                             | May 2019      |
| Proper RED integration tests                                                                                  | May 2019      |
| Proper Automatic Account Link integration                                                                     | May 2019      |
| Proper Deep Linking integration                                                                               | May 2019      |
| Proper General Audience Measurements integration                                                              | May 2019      |
| Application nesting tests                                                                                     | May 2019      |
| App/screensaver entry point detection                                                                     | May 2019      |
| Manifest libs detection                                                                                       | May 2019      |
| Eval usage                                                                                          | May 2019      |
| App name in manifest is different from metadata in Streaming Store                         | May 2019      |
| App version in manifest is different from metadata in Streaming Store                      | May 2019      |
| App version was updated for submitted package                                                    | May 2019      |
| Developer ID of submitted package matches Developer ID of previously-submitted package               | May 2019      |
| Roku Pay usage was found in BrightScript code but was not specified during app publishing        | May 2019      |
| Roku Pay usage was specified during app publishing but was not found in BrightScript code        | May 2019      |
| Ads revenue usage was specified during app publishing but RAF was not found in BrightScript code | May 2019      |
| RAF usage was found in BrightScript code but ads revenue was not specified during app publishing | May 2019      |
| Proper Server-Side Ad Insertion (SSAI) RAF integration.|May 2019|
| Check whether contentId and mediaType parameters in deep link requests are being handled.|May 2019|
| Check for the supports_input_launch attribute in the manifest (required for handling deep link requests while your app is running)|May 2019|
| Check whether the setAdUrl() method is called in RAF implementations, and whether the ad server URL is specified in the method. |June 2019|
| Check for usage of deprecated methods:<br />${feb20-deprecations-list} |February 2020|
| Check for usage of deprecated content metadata attribute: AudioLanguageSelected |February 2020|
| Check app type (for example, SDK, screensaver, and so on). |February 2020|
| Deprecated rsg_version (older than 1.2) detection |March 2020|
| ECP or roAppManager command detection |March 2020|
| Check for missing entry point ("sub RunUserInterface(args as Object)" or "sub Main()" for apps; "sub RunScreenSaver(args as Object)" for screensavers). |April 2020|
| Check for Roku Pay upgrade/downgrade implementation |May 2020|
| Check that apps using SGDEX have implemented Billing and RAF |September 2020|
| Check for components that cannot be used in a screensaver |July 2020|
| Remind apps with RAF implementation to pass kidsContent flag in calls to setContentGenre() method. |September 2020|
| Check whether apps are firing AppDialog signal beacons from log-in or user selection dialogs. |September 2020|
| Check for "Roku" within app name or names of in-app products, including names with localized characters |November 2020|
| Check for usage of roAppManager.LaunchApp() function, which is prohibited |December 2020|
| Check that SGDEX billing apps have implemented upgrade/downgrade |December 2020|
| Extraneous packages file detection. |December 2020|
| Third-party oAuth provider detection |January 2021|
| Third-party ad library detection |January 2021|
| Check for deprecated Adobe and Verimatrix DRMs |March 2021|
| Check for usage of deprecated roDeviceInfo.getVersion() function. |March 2021|
| Check for usage of deprecated Video node manifestData fields: mpd and periods |March 2021|
| Check for file:// protocol usage from roUrlTransfer |April 2021|
| Check for Roku brand name in Roku Pay in-app product descriptions |May 2021|
| Check for getUserData API (RFI screen) in apps with authentication |September  2021|
| Check for SetChannelCredData() and GetChannelCred() APIs in apps with authentication |September  2021|
| Check for Voice Keyboard APIs in apps with authentication |September  2021|
| Check for in-app screensavers (or any feature that overrides Roku system screensaver) |November 2021|
| Check if app is a Theme |April 2023|
| For apps in the U.S. Streaming Store meeting the streaming hours threshold (average of 5 million hours per month over the last three months), check that apps have implemented Continue Watching |July 2023|
| Check app source code for nested libraries |July 2023|
| Check for deprecated run_as_process manifest entry |November 2023|
| Check that SVOD apps have product groups for all sets of mutually exclusive subscription products |February 2024|
| Check if app is using roAppMemoryMonitor node to track prior exit information |February 2024|

{#feb20-deprecations-list}

- roDeviceInfo.GetVideoDecodeInfo()
- roDeviceInfo.GetAudioDecodeInfo()
- roDeviceInfo.isHDMIConnected()
- roDeviceInfo.GetConnectionInfo()
