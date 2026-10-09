---
title: "Static Analysis tests"
excerpt: 'Verify app BrightScript code against Roku certification criteria'
deprecated: false
hidden: false
metadata:
  title: 'Static Analysis tests | Roku Developer Docs'
  description: 'Apps must pass Static Analysis testing to be published to the Streaming Store; the tool verifies BrightScript code against certification criteria.'
  robots: index
next:
  description: ''
---


> Apps must pass Static Analysis testing in order to publish to the Streaming Store. Apps cannot be submitted for publishing without passing static analysis testing.

The [Static Analysis tool](doc:static-analysis-tool), which is a part of the app builder flow in the Developer Dashboard, enables developers to verify that their app's BrightScript source code complies with Roku certification criteria. The tool checks whether the app's code contains any of the following certification-related errors. Errors block the app from publishing; fix all of them to pass Static Analysis.

### Analytics

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| RED constructor call is present but manifest entry is missing. | 4.3, RP 4.4 | Jan 24, 2022 |
| RED constructor call is present but library import is missing. | 4.3, RP 4.4 | Jan 24, 2022 |
| Roku Analytics Library usage found in BrightScript code but manifest entry 'sg_component_libs_required=Roku_Analytics' not found. | 4.3, RP 4.4 | Feb 27, 2020 |

### Authentication

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Proper Automatic Account Link implementation requires verifying user sign-in status using "json.channel_data" from ChannelStore "getChannelCred". This step is missing. Please use "channelCred" field of "ChannelStore" node or in case of using "roChannelStore" component, handle "roChannelStoreEvent". | 4.2 | Nov 13, 2024 |
| ChannelStore "getChannelCred" required for Automatic Account Link is missing | 4.2 | Nov 4, 2024 |
| ChannelStore "storeChannelCredData" required for Automatic Account Link is missing. For "ChannelStore" node, "channelCredData" field must be set with user account access token. | 4.2 | Nov 4, 2024 |
| To enable Automatic Account Link, On-Device Authentication needs to be correctly implemented. Please review the On-Device Authentication Warnings in the Static Analysis report for more details. | 4.2 | Nov 13, 2024 |
| We have found a proper integration of an On-Device Authentication in your channel code, but you have not selected Customer Account Requirement in channel submission properties via Developer Portal. | 2.2 | Oct 13, 2023 |
| Voice keyboards are required for entering email addresses, PIN codes and passwords. | 4.12 | Sep 9, 2022 |
| All authenticated channels must use the Request for Information (getUserData) API call to obtain a user's email address during the sign-up or sign-in flow. | RP 2.1, RP 4.1 | Jan 24, 2022 |

### Billing

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Channels with subscriptions must implement Roku's Enhanced Subscription Recovery feature to pass certification. ChannelStore "doRecovery" is missing. | RP 4.5 | Nov 13, 2024 |
| Channels with subscriptions must implement Roku's Enhanced Subscription Recovery feature to pass certification. Enhanced Subscription Recovery was not specified on the Subscription Recovery page. | RP 4.5 | Nov 13, 2024 |
| According to the Monetization channel properties page, your channel is offering in-channel purchases, but no Roku Pay API usage was found in your channel. | 2.1 | Jan 24, 2022 |
| Channels with subscriptions must implement Roku's Enhanced Subscription Recovery feature to pass certification. ChannelStore "getAllPurchases" is missing. | RP 4.5 | Nov 13, 2024 |

### Channel Store

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Developer ID of submitted package does not match the developer ID of the previously published version. | 4.1 | Jan 24, 2022 |
| Subscription services must create product groups in the Developer Dashboard for any set of subscription products that the consumer should not be able to be subscribed to simultaneously. | RP 3.1, RP 3.2 | Oct 16, 2023 |

### Deep linking

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Channels are required to support roInput events. Please ensure your manifest includes the supports_input_launch=1 entry and your channel properly handles roInput events. | 5.2 | Jan 24, 2022 |

### Deprecated APIs

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Usage of the roAppManager.LaunchApp() API is prohibited. | 2.4, 4.6, 5.3 | Jan 24, 2022 |
| Usage of the roAppManager.ShowChannelStoreSpringboard() API is deprecated. | 2.4 | Mar 26, 2025 |

### Manifest

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| All version-related attributes in manifest have values "0". Version cannot be "0.0.0". | 6.1 | Jan 24, 2022 |
| "`{0}`" attribute in manifest has invalid value: "`{1}`". | 6.4 | May 2, 2018 |
| "`{0}`" attribute in manifest has an empty value. | 6.4 | Jan 24, 2022 |
| "`{1}`" file used for "`{0}`" attribute is missing. | 6.4 | Jan 24, 2022 |
| Manifest is missing a required attribute: "mm_icon_focus_hd". | 6.4 | Jan 24, 2022 |

### Package

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Package size exceeds `{0}` megabytes. See Memory management for tips on how to optimize channel memory. | 3.7 | Jan 24, 2022 |

### Performance

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| "AppLaunchComplete" beacon is missing. | 3.2 | Jan 24, 2022 |

### Roku Advertising Framework (RAF)

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| RAF constructor call is present but library import is missing. | 1.1 | Jan 24, 2022 |
| General Audience Measurements must be enabled for a non-child-directed channel in U.S. Channel Store. | RAF 1.3 | Jan 24, 2022 |
| Method StitchedAdsInit() was found but related method StitchedAdHandledEvent() is missing. | 1.1 | Jun 1, 2023 |
| RAF constructor call is present but manifest entry is missing. | 1.1 | Jan 24, 2022 |

### Uncategorized

| Error message | Certification requirement | Date added |
| --- | --- | --- |
| Your channel appears to be using a prohibited authentication method from Amazon. | ADS 1.1 | Jan 24, 2022 |
| The use of ECP from within a channel is now prohibited. | 2.4, 4.6, 5.3 | Jan 24, 2022 |
| Channels that have streamed more than an average of 5 million hours per month over the last three months or you have a new channel projected to reach the specified streaming hour threshold shortly after launch, you must participate in Roku's Continue Watching program. See Continue Watching for more detail. TVOD, live linear, and made-for-kids channels are excluded from this requirement. | 4.13 | Nov 22, 2023 |
| Your channel appears to be using a prohibited authentication method from Facebook. | ADS 1.1 | Jan 19, 2021 |
| Your channel appears to be using a prohibited ad library from Amazon. | ADS 1.1 | Aug 21, 2019 |
| Your channel appears to be using a prohibited ad library from TruOptik. | ADS 1.1 | Aug 19, 2019 |
| Your channel appears to be using a prohibited ad library from Facebook. | ADS 1.1 | Aug 14, 2019 |
| Usage of the UpdateLastKeypressTime() API is no longer permitted. | 2.4, 4.6, 5.3 | Dec 8, 2020 |
| Your channel appears to be using a prohibited authentication method from Google. | ADS 1.1 | Jan 24, 2022 |
| Channels are prohibited from offering in-channel screensavers or any feature that overrides the Roku system screensaver. | 4.5 | Oct 7, 2022 |

The tool also reports warnings and info messages, which do not block publishing. Some warnings will become errors on a published date. For the complete list of tests, including warnings and info messages, and the checks that will become errors, see [Static Analysis Tool](doc:static-analysis-tool#static-analysis-test-details).
