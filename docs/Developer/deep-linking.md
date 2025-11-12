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

## Scoping deep linking requirements

Before programming your app to handle deep links, you need to understand the required behavior for launching content based on the different mediaTypes. In addition, there are general requirements that your app should follow when responding to deep link requests.

Understanding and adhering to these deep linking requirements provides a standard user experience across the Roku platform and helps ensure that your app passes certification.

### MediaType behavior

When a deep link is sent to your app, it will include contentId and a mediaType. The contentId specifies which content to play, and the mediaType tells your app how it must handle the launching of the content item. The following table summarizes the required launch behavior for each mediaType. For examples of the different mediaType behaviors, see [MediaType behavior examples](#mediatype-behavior-examples).

| mediaType in Deep Link | Description                                                                                                                                                                                    | Required Launch Behavior                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| movie                  | Movie or long-form film (over 15 minutes).                                                                                                                                                     | Play the movie identified by the contentId. Use [bookmarks](/docs/developer-program/media-playback/bookmarking.md) to determine the playback position.                                                                                                                                                                                                                                            |
| episode                | Single content item (an episode of a TV show, for example).                                                                                                                                    | Play the episode identified by the contentId. Use [bookmarks](/docs/developer-program/media-playback/bookmarking.md) to determine the playback position.                                                                                                                                                                                                                                          |
| season (optional)      | As part of a series, single set of related TV episodes.                                                                                                                                        | Optionally, launch a content springboard that displays episodes organized by season; highlight the episode mapped to the contentid.<br />                                                                                                                                                                                                                                                         |
| series                 | Set of related serialized episodes and possibly seasons. Includes TV shows and daily/weekly ongoing shows.                                                                                     | Launch an episode into direct playback using smart bookmarks. A smart bookmark determines the episode to be launched and the playback position based on the type of series, whether the user has previously watched the series, and whether they completed the last watched episode.<br /><br />The different types of series and their recommended smart bookmark behavior are as follows:<br /> |
| shortFormVideo         | Standalone content that is 15 minutes or less that is not a movie or TV show (for example, movie trailers, news clips, comedy clips, food reviews, or other clips).                            | Play the short-form item identified by the contentId.<br /><br />Apps containing only short-form items are exempt from deep linking certification requirements.                                                                                                                                                                                                                                   |
| tvSpecial              | One-time TV programs that are not part of a series, or content that does not fit into any other mediaType category (for example, music, artists, sporting events, non-episodic news specials). | Play the TV special identified by the contentId. Use [bookmarks](/docs/developer-program/media-playback/bookmarking.md) to determine the playback position.                                                                                                                                                                                                                                       |

<br />

> A deep link for a single content item will always have the same contentId; however, the mediaType may vary based on the Roku content discovery feature sending the deep link. Your app therefore must be designed to execute the specified behavior required by each mediaType that could be sent to your app.
>
> For example, if your app only includes short video clips, the app only needs to handle the "shortFormVideo" mediaType. Similarly, if your app only contains movies, the app only needs to handle the "movie" mediaType.
>
> But if your app includes the last three seasons of a television episode, your app needs to handle the "episode", "season", and "series" mediaTypes to be able to respond to deep links sent from Roku Search, Roku voice search, and on-device ads.
>
> You can use the ["source" parameter](/docs/developer-program/getting-started/architecture/dev-environment.md#source-parameter) to determine from where the deep linking request originated.

\{#series-bookmarks-list}

* Followed TV (a series that the user has already started watching in the past): Use bookmarks to determine whether the user completed the previously watched episode. If they completed the last episode, launch the next episode in the series. If they did not, launch the episode where the user stopped watching.
* Unwatched TV (a cataloged series that the user has not yet watched on your service): launch playback at the beginning of S1E1.
* Daily/weekly shows (a regularly-occurring show that does not necessarily need to be watched in chronological order; for example, news broadcasts, talk shows, sports podcasts, and religious sermons): Launch the most recent episode in the series.

\{#bq-season-dl}

Season deep links are no longer being sent from Roku Search.

### General app behavior

Your app should exhibit the following behaviors when responding to deep link requests:

* **Handle invalid deep links**: If a deep link has an invalid contentid or mediaType, launch the app's home screen.
* **Handle unauthenticated users:** If an unauthenticated user is launching or deep linking into your app for the first time, route the user to the appropriate authentication flow and then process the deep link request after the user has been authenticated. This can happen when a user deep links into your app via Roku Search or an on-device ad but the app is not installed. In this case, the Roku OS will prompt the user to install the app before continuing with the deep link. 
* **Display a paywall (if needed)**: If your app requires a purchase prior to launching, the app may display a purchase screen before the letting the user view deep linked content.
* **Support a default profile** If your app supports different profiles, set the last one used as the default for a movie, episode or series. An app may not display a profile selection screen, or any other screen other than one for purchases or authentication, between the selection and playback of a movie or episode. Do not use any profiles linked to children as the default. 
* **Avoid resume/start over screens**: Apps may not use resume/start over screens when handling deep links into movies, TV episodes, or TV series. Apps must use bookmarks or smart bookmarks to identify the playback position and resume at that spot.
* **Avoid deep linking into other apps**: An app may not deep link into third-party apps.

## Implementing deep linking

Deep linking is implemented by passing launch parameters to your app's Main() function. These launch parameters are passed in using an associative array similar to argv in C. Your app is responsible for parsing these parameters and taking the appropriate action, or in the case of an error, detecting it and going to the app's home screen. To integrate deep linking in your app, follow these steps:

1. Accept the deep linking parameters (contentId and mediaType) being passed to it. To do this, add an associativeArray argument to your app's main entry point, which is typically either the **main()** or **runuserinterface()** function. The name of the argument is arbitrary; for the example in this section, it is **args**.
   <br />
   ```
   ```
   <br />
   2. Verify that the contentId and mediaType have valid values. To do this, parse the associativeArray received by your app using the **contentid** and **mediatype** key names, and then check the values. 
      <br />
      ```
      ```
      <br />
      > Use a case-insensitive check when validating the **contentId** and **mediaType** key names.
      >
      > <br />
      3. If the contentId and mediaType are valid, launch the specified content item using the appropriate [launch behavior for the mediaType](/docs/developer-program/discovery/implementing-deep-linking.md#mediatype-behavior) . If either the contentId or mediaType are invalid, launch the app home page.  
         <br />
         ```
         ```
         <br />
         <br />
         4. Use [roInputEvent](/docs/references/brightscript/events/roinputevent.md)  to check whether a deep link has been passed into the app while your app is running. This enables your app to deep link into content without re-launching your app.<br/><br/>
            <br />
               a.  The [supports_input_launch](/docs/developer-program/getting-started/architecture/channel-manifest.md)  attribute (**supports\_input\_launch=1**) must be added to the manifest for this functionality to work.<br/><br/>For example, when a voice input request is received (for example, "Play Game of Thrones" while your app is in the foreground), your app can send the deep link parameters through the roInputEvent&mdash;instead of re-launching your app with the parameters.
            <br />
               b.  A message loop that listens for incoming events is typically used. If that event is an roInputEvent, an action is taken based on the input. If the input is content ID, the app typically finds the stream URL and metadata for that content ID, and then cues and plays the content.<br/><br/> See [Sample app](/docs/developer-program/discovery/implementing-deep-linking.md#sample-app)  to download and install a sample app that demonstrates how to use [roInputEvent](/docs/references/brightscript/events/roinputevent.md)  to handle deep links while your app is running.
            <br />
            ```
            ```
            <br />

####
