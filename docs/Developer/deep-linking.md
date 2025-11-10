---
title: Deep linking
deprecated: false
hidden: false
metadata:
  robots: index
---
Deep linking enables users to get to your content faster from the Roku UI via [Roku's content discovery features](/docs/features/engagement/overview.md) (for example, [Roku Search](/docs/developer-program/discovery/search/implementing-search.md) and [Roku home screen banners](/docs/features/engagement/self-serve-promotions.md#display-ads-on-roku)). With deep linking, your app is launched into playback or content springboards directly from the Roku UI. For example, when a movie is selected from Roku Search, playback starts immediately without any app navigation. This functionality enables you to leverage Roku's content discovery features in order to drive users to your app and increase engagement.

> Public apps with video content must implement deep linking to pass [certification](/docs/developer-program/certification/certification.md#5-deep-linking).

## Overview

The following diagram demonstrates how deep linking from Roku Search works. When content is selected, the [contentId](#understanding-deep-linking-parameters) and [mediaType](#understanding-deep-linking-parameters) are passed as query string parameters to the app. The app accepts and validates the deep linking parameters and identifies the appropriate launch behavior, which is determined by the mediaType. In this example, contentId "loganLucky123" corresponds to the film "Logan Lucky", and the mediaType is "movie". The "movie" mediaType requires the app to launch directly into playback (see [MediaType behavior](#mediatype-behavior) for more information on the launch behavior required for different mediaTypes).

<Image alt="DeepLinkingDiagram" border={false} src="https://image.roku.com/ZHZscHItMTc2/DeepLinkingDiagram-rev3a.png" title="DeepLinkingDiagram" />

Implementing deep linking in an app entails the following steps:

1. **Understand deep linking parameters**. Identify the different content types in your app and map them to their corresponding Roku-supported mediaTypes.

2. **Scope required deep linking behavior**. Identify the work required for handling deep link requests based on content classifications.

3. **Update the app**. Program the app so it accepts and validates the deep linking parameters and launches into the required experience.

4. **Test deep linking in the app**. Verify that the app handles deep links correctly using the Roku Deep Linking Tester or [External Control Protocol](/docs/developer-program/dev-tools/external-control-api.md) (ECP) commands sent via cURL.

5. **Submit deep link samples for certification**. Submit sample
   deep link parameters in the Developer Dashboard for each mediaType in your app.

## Understanding deep linking parameters

Deep link requests contain two key parameters: **contentid** and **mediaType**.

* A <a href="contentid" />contentId is a URL-encoded ASCII string (maximum 255 characters) that uniquely identifies content in your app. The contentId may be an alphanumeric string, URL, or pipe-separated key-value pairs (for example, series=myAwesomeShow|Season=1|Episode=1).

* The <a href="mediatype" />mediaType specifies how an app should behave when receiving a deep link request. See [MediaType behavior](#mediatype-behavior) for more information.

The following example demonstrates a deep link request sent to an app.  The [**source** parameter](/docs/developer-program/getting-started/architecture/dev-environment.md#source-parameter) specifies the origin of the deep link request (in this case, it is from [Roku Search](/docs/developer-program/discovery/search/implementing-search.md)):

```
http://192.168.1.114:8060/launch/50000?contentId=myAwesomeShow|Season=1|Episode=1&mediaType=series&source=hs-search
```

The app receives the deep link parameters as an associative array as demonstrated in the following example (see [Implementing Deep Linking](/docs/developer-program/discovery/implementing-deep-linking.md#implementing-deep-linking) for more information on handling these parameters; see [Using the debug console for troubleshooting deep linking parameters](#using-the-debug-console-for-troubleshooting-deep-linking-parameters) for how to check the deep linking parameters being sent to your app):

```
<Component: roAssociativeArray> =
  {
      action: "display"
      contentid: "myAwesomeShow|Season=1|Episode=1"
      instant_on_run_mode: "foreground"
      isexternal: true
      lastExitOrTerminationReason: "EXIT_UNKNOWN"
      mediatype: "series"
      source: "hs-search"
      splashTime: "0"
  }
```

> If an app is participating in [Roku Search](/docs/features/engagement/roku-search.md), the contentid in the Roku Search feed (PlayID) must map to the contentid in your app for the same content. It is therefore important to keep the Roku Search feed synchronized with the app's content feed.
>
> For episodic content, Roku Search only recognizes the episode contentid. An episode's contentid therefore must remain consistent, regardless if a deep link launches the episode or an episodic picker screen. These different deep link behaviors are determined solely by the mediaType. Separate contentIDs used to identify the season and series of the same content item are therefore ignored.

##
