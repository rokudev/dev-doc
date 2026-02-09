---
title: Advertising
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Roku Advertising Framework (RAF) enables the seamless integration of video advertising into your apps. The RAF library, which is built directly into the Roku SDK, includes the following features that make it easy to provide a consistent ad experience across apps:

* Parsing of ads in [VAST2](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-2-0/), [VAST3](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-3-0/), [VMAP](https://www.iab.com/guidelines/digital-video-multiple-ad-playlist-vmap-1-0-1/), and FreeWheel's SmartXML formats (see the table [below](#supported-features-of-popular-ad-formats) for details).

* Built-in solution for displaying client-side (CSAI) video ads that works with Google Ad Manager (formerly known as DFP), FreeWheel, SpotX, and other 3rd-party servers.

* Playback control for server-stitched ads.

* Client-side handling of tracking events that is aligned with the IAB/MRC's [impression measurement guidelines](https://mediaratingcouncil.org/sites/default/files/Standards/Digital%20Video%20Served%20Impression%20Measurement%20Guidelines%20%28MMTF%20June%202018%29.pdf).

* Audience measurement via [Nielsen DAR](https://www.nielsen.com/hk/en/solutions/capabilities/digital-ad-ratings/)/[DCR](doc:nielsen-dcr), [Comscore vCE](https://www.comscore.com/Products/Ratings-and-Planning/Campaign-Ratings), and other platforms.

  > Per [Roku's certification requirements](doc:ad-requirements), all ad measurement beacons must be fired directly by RAF client-side (they may not be wrapped). This is required to apply the [Roku Advertising Watermark](doc:ad-watermark) to the beacons.

* Interactive ads through Innovid, BrightLine, and Roku.

* Client-side solutions to minimize buffering between ads and content.

* Samples for implementing server-side ad insertion (SSAI) with Verizon Media Services, Adobe, Brightcove, Yospace, AWS Elemental MediaTailor servers, and Google Ad Manager Dynamic Ad Insertion (DAI).

## Certification requirement

Per [Roku's certification criteria](doc:certification), all apps that monetize advertising must integrate RAF to pass certification.

## Getting started

To get started with your RAF integration, do the following:

* If you don't have an ad server, contact [adsupport@roku.com](mailto:adsupport@roku.com) for recommendations or alternative ad serving solutions.

* Read [monetizing an app with video advertisements](doc:video-advertisements) for monetization options.

* Read the [certification requirements for ad-supported apps](doc:certification).

* Review the [RAF integration guide](doc:integrating-roku-advertising-framework).

## Supported features of popular ad formats

<table>
  <thead>
    <tr>
      <th>VAST 2.0 Feature</th>
      <th>Supported</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Linear Ads</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Wrapper and Inline Ads</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Tracking Events</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>ClickThrough (interactive ads)</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Companion Ads</td>
      <td><em>apiFramework</em> handled: <ul><li>"innovid"</li><li>"brightline"</li><li>"brightline\_RSG"</li></ul></td>
    </tr>

    <tr>
      <td>MediaFile type</td>
      <td><ul><li>"video/mp4"</li><li>"video/x-mp4"</li><li>"video/mp4-h264"</li><li>"application/x-mpegurl"</li><li>"application/vnd.apple.mpegurl"</li><li>"application/json"</li></ul></td>
    </tr>

    <tr>
      <td>Extension elements</td>
      <td><ul><li>DFP waterfall</li><li>TrueX</li></ul></td>
    </tr>

    <tr>
      <td>Non-Linear Ads</td>
      <td>No</td>
    </tr>

    <tr>
      <td>VAST 3.0 Feature</td>
      <td>Supported</td>
    </tr>

    <tr>
      <td>Ad pods via sequence attribute</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Extended error tracking</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>VAST tracking macros</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Ad “buffet” selection</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Skippable linear ads</td>
      <td>No</td>
    </tr>

    <tr>
      <td>OBA industry icon</td>
      <td>No</td>
    </tr>

    <tr>
      <td>VMAP Feature</td>
      <td>Supported</td>
    </tr>

    <tr>
      <td>Ad pods playlists</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>Tracking events</td>
      <td>Yes</td>
    </tr>

    <tr>
      <td>‘repeatAfter’ AdBreak attribute</td>
      <td>No</td>
    </tr>

    <tr>
      <td>Extension elements</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## RAF video lesson

You can learn how to implement RAF in order to display video ads in your app by watching the [Displaying video ads](doc:video-ads) video lesson in Roku's [SceneGraph: Build a channel online video course](doc:rsg).

This lesson describes how to implement RAF in order to seamlessly insert video ads into content. It highlights the different client and server-side ad insertion and stitching solutions provided by RAF, and explains how to get started with RAF in order to display video ads in your app.
