---
title: "Static Analysis tests"
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

# Static Analysis tests

> Apps must pass Static Analysis testing in order to published to the Streaming Store. Apps cannot be submitted for publishing without passing static analysis testing.

The [Static Analysis tool](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md), which is a part of the app builder flow in the Developer Dashboard, enables developers to verify that their app's BrightScript source code complies with Roku certification criteria. The tool checks whether the app's code contains any of the following certification-related errors:

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
| App name in manifest is different from app metadata in Streaming Store                         | May 2019      |
| App version in manifest is different from app metadata in Streaming Store                      | May 2019      |
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
| roTuner node detection |September 2020|
| Check for "Roku" within app name or names of in-app products, including names with localized characters |November 2020|
| Check for usage of roAppManager.LaunchApp() function, which is prohibited |December 2020|
| Check that SGDEX billing apps have implemented upgrade/downgrade |December 2020|
| Extraneous packages file detection. |December 2020|
| Third-party oAuth provider detection |January 2021|
| Third-party ad library detection |January 2021|
| Check for deprecated [AudioLanguageSelected](/docs/developer-program/getting-started/architecture/content-metadata.md) content metadata track ID attribute selected |March 2021|
| Check for deprecated **mac** field of [ifDeviceInfo.GetConnectionInfo()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getconnectioninfo-as-object) method for getting the MAC address of a device. |March 2021|
| Check for deprecated [SteadyMaxMemPoints](/docs/references/deprecated-apis.md#signal-beacon-steadymaxmempoints) signal beacon metric. |Match 2021|
| Check for deprecated [Adobe and Verimatrix DRMs](/docs/specs/media/content-protection.md) |March 2021|
| Check for usage of deprecated [roDeviceInfo.getVersion()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getversion-as-string) function |March 2021|
| Check for usage of deprecated Video node [manifestData fields: mpd and periods](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) |March 2021|
| Check for file:// protocol usage from [roUrlTransfer](/docs/references/brightscript/interfaces/ifurltransfer.md) |April 2021|
| Check that [in-app product names](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-basics) do not include "Roku" |May 2021|
| Check that [in-app products](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-basics) are not priced over $300 |May 2021|
| Check that authenticated apps integrate the Request for Information (RFI) screen (via a call to the ChannelStore [getUserData API](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata)) |September 2021|
| Check that authenticated apps integrate a voice keyboard for email and PIN entry (via calls to the [Voice Keyboard APIs](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md)) |September 2021|
| Check for [Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md) integration (via calls to the ChannelStore [StoreChannelCredData](/docs/references/scenegraph/control-nodes/channelstore.md#storechannelcreddata) and [GetChannelCred](/docs/references/scenegraph/control-nodes/channelstore.md#getchannelcred) APIs) |September 2021|
| Check whether app is firing [ad measurement beacons](/docs/developer-program/advertising/ad-watermark.md) via RAF |December 2022|
| Check whether app is a Theme                             |November 2023|
| For apps meeting the streaming hours threshold, check that [Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md) has been implemented (error if not) | January 2024   |
| For apps meeting the streaming hours threshold, check that [Continue Watching](/docs/developer-program/discovery/continue-watching.md) has been implemented |January 2024|
| For apps offering subscription products, check that product groups have been created for any set of products to which customer cannot be simultaneously subscribed. |February 2024|
| Check that manifest entries are less than 255 characters |February 2024|
| Check whether app is using the [roAppMemoryMonitor](/docs/references/brightscript/interfaces/ifappmemorymonitor.md) node to track prior exit information. | February 2024  |

{#feb20-deprecations-list}

- roDeviceInfo.GetVideoDecodeInfo()
- roDeviceInfo.GetAudioDecodeInfo()
- roDeviceInfo.isHDMIConnected()
- roDeviceInfo.GetConnectionInfo()
