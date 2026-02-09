---
title: Implementing Server-Side Ad Insertion Using Roku Adapters
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
## Overview

The Roku Ad Framework (RAF) is responsible for a consistent ad experience across the Roku platform. For apps that implement ads using server-side ad insertion (SSAI), this can prove challenging due to the various steps involved. To simplify this process, developers can leverage the Roku-approved approaches via the adapter samples provided by Roku [below](doc:ssai-adapters).

> Before using the adapters, please refer to [Requirements for Server Side Ad Insertion](doc:integrating-roku-advertising-framework).

## Roku Ad Framework requirements

All apps including video advertisements are required to meet [Roku's certification requirements for RAF](doc:ad-requirements). Notably, the app must always use client-side firing (all SSAI providers support client-side firing) through RAF.

The Roku adapters provide two options:

* Firing off all metrics through the adapter and RAF
* The app is responsible to fire metrics through RAF with the adapter callbacks (See examples for using callback below)

It is encouraged that the developer uses the first option, but with either option, the metrics must be fired using RAF APIs.

The APIs used are different depending on the approach, but audience measurement is always required to be dispatched client side at Roku. We recommend apps [adopt the comScore VCE-inclusive audience measurement API](doc:raf-api).

## RAFX SSAI Adapters

In general, the RAFX SSAI Adapters provide interfaces to both SSAI manifest servers (stitchers) and RAF, including:

* Parsing of the masterURL response, and extraction of playURL, AdURL, and ad metadata
* Transforming SSAI ad metadata into RAF-usable ad metadata and configuring RAF for playback
* Observing stream events and timed metadata
* Matching the stream events and ad metadata and firing event pixels on time
* Pinging/Polling AdURL as required by the SSAI manifest server, parsing, and reconfiguring RAF

## Server-Side Ad Insertion playback

To playback an SSAI stream, the developer would typically follow these steps:

1. Initialize a playback Task
2. Make a request to the masterURL
3. Enable the client-side ad tracking and get the playURL, AdURL and/or ad metadata
4. Configure playback content and observe stream events
5. Start playing stream and fire event pixels on time as responding to observed events and ping/poll ad metadata

## How to playback SSAI content using the adapters

These are the high level instructions on how to playback server-side ads content using the adapters:

> For detailed working instructions, refer to the adapter samples [below](doc:ssai-adapters).

### 1. Loading the adapter

The following entry loads the adapter into your task:

> At the beginning of the playback Task, instantiate the adapter with proper parameters and then initialize it. The valid values of the parameter name are uplynk, adobe, onceux, yospace, awsemt, and ggldai.

```
adapter = RAFX_SSAI({name:"uplynk"})  ' Supported: uplynk, adobeonceux, yospace, awsemt, ggldai
adapter.init()
```

### 2. Make an initial request to SSAI manifest server getting Ad metadata: Request Ad Metadata

```
request = {

    type: adapter.SreamType.VOD  ' Required, VOD or LIVE

    url:  "http://admanifest.ssai.com/api?assetid=abcdefg"' Ad metadata URL, provided by SSAI

}

result = adapter.requestStream(request)
The value of the parameter URL depends on which SSAI manifest servers to integrate and which type of stream it is. (The app may query the initial request to SSAI manifest server by itself rather than using the adapter.requestStream() call). Valid values of the parameter type are VOD or LIVE. VOD is when Ad metadata is fetched before the playback starts, LIVE is when Ad metadata is provided as ping/poll/in-stream (such as X-MARKER) content playback.
```

### 3. Read stream info

The initial request to SSAI manifest servers returns content URL (like Adobe and Verizon Media Services). The following entry gets the content URL:

```
streamInfo = adapter.getStreamInfo()
url = streamInfo["playURL"]
```

### 4. Enable ads

Once the content playback URL is known, the adapter is ready to track Ads. Pass the adapter player object and observe the position event on the video node.
The value of params.player is given to RAF internally as the second parameter of RAF.stitchedAdHandledEvent(). adapter.enableAds() parses Ad metadata and/or configure additional settings such as observing timedMetadata2 of given video node. It then calls RAF.stitchedAdsInit() when valid Ad metadata was found in the initial response from the SSAI manifest servers.

```
port = CreateObject("roMessagePort")
params = {player: {sgnode:m.top.video, port:port}}
adapter.enableAds(params)
m.top.video.observeField("position", port)
```

The app can provide an optional parameter, params.useStitched = false. If the parameter is set to false, the app is required to:

* Set the callback functions to proper AdEvents
* Fire pixels by using RAF.fireTrackingEvents()
* Run and manage Interactive Ads

By default, params.useStitched is set to true. In this case:

* Setting callback functions is optional
* Pixels are fired internally by the adapter and RAF
* Interactive Ads are running and managed by the adapter and RAF

#### **a) Optional: enable ads without stitchedAdHandledEvent**

```
 params = {  
     player: {sgnode:m.top.video, port:port},
     useStitched: false
 }

 adapter.enableAds(params) ' adapter will not call RAF.stitchedAdHandledEvent() and RAF will not play Interactive Ad
```

#### **b) Optional: set callbacks**

A callback parameter is an object with keys, event, and position.

When using PODS, the object has an additional key, adPods, and the value of the parameter is an array of the adPod metadata.

When using POD_START, the object has an additional key, adPod, and the value of the parameter is the current adPod metadata.

Supported callbacks are:

* PODS
* POD_START
* POD_END
* IMPRESSION
* FIRST_QUARTILE
* MIDPOINT
* THIRD_QUARTILE
* COMPLETE

Note: When params.useStiched = true or, not provided in the param (this is the default), setting callbacks is optional and for informational purposes only. The app MUST NOT call RAF.fireTrackingEvents() in such a case.

When params.useStitched = false, it is required to set callbacks and the app MUST call RAF.fireTrackingEvents().

**Setting the callback functions to the Adapter:**

```
' Set adapter callback functions

adapter.addEventListener(adapter.AdEvent.POD_START, rafxCallback)

adapter.addEventListener(adapter.AdEvent.POD_END, rafxCallback)

adapter.addEventListener(adapter.AdEvent.IMPRESSION, rafxCallback)

...

...

function rafxCallback(eventInfo as object) as void

    if adapter.AdEvent.POD_START = eventInfo.event

        m.top.adPlaying = true

    else if adapter.AdEvent.POD_COMPLETE = eventInfo.event

        m.top.adPlaying = false

    end if

    print "Callback at : ";eventInfo.position

end function

```

### 5) Enable ad measurements

When you are ready to start playback, you need to configure RAF by enabling ad measurements:

Note: It is recommended to use [enableAdMeasurements](doc:raf-api).

```

adIface = Roku_Ads()

adIface.enableAdMeasurements(true) ' Required

adIface.setContentGenre(...) ' Set app/content genre info

adIface.setContentLength(...) ' Set app/content length info

adIface.setContentId(...) ' Set app/content specific info


```

### 6) Playback Loop

The developer can now start the playback and run the message loop:

```

video.control = "play"  ' start playback

while true

   msg = wait(1000, port)

   curAd = adapter.onMessage(msg)

   if invalid = curAd

       video.setFocus(true)  ' recommended

   end if

   '  exit while loop when condition met

   ...

end while

```

adapter.onMessage() calls RAF.stitchedAdHandledEvent() and returns the object as it is. It is thus recommended to evaluate the returned value and call setFocus() on the video node in case the interactive ad changes focus while playing.

When not using RAF.stitchedAdHandledEvent(), the app must fire AdEvent pixels in the callback functions.

Once the playback is completed, discard the adapter. Do not reference the adapter outside of the Task or re-use the same adapter instance.

## Roku Ad Framework APIs

For apps playing SSAI streams, it is required to call RAF APIs using the guidelines below.

It is required for apps to call the following every time the content is played back in the Task:

Enable ad measurement: **enableAdMeasurements**(true)
Set content/app info: [setContentGenre()](doc:raf-api), [setContentId()](doc:raf-api), and [setContentLength()](doc:raf-api).

When the useStitched:true, the adapter itself will:

Generate RAF ad metadata from SSAI specific format and call **stitchedAdsInit()**, **stitchedAdHandledEvent()** to fire ad events and measurement pixels

When the useStitched:false, the developer should make sure that the app:

Sets callback functions to the adapter
Fires event pixels via: **fireTrackingEvents()** when called back

## RAFX SSAI Adapter samples

The following RAFX SSAI Adapter samples are built to provide client-side integration with SSAI, for both VOD and LIVE.

Note that VOD mode means ad metadata is fed from the SSAI server before content playback.

LIVE mode means ad metadata is given as a part of the content stream such as ID3 (HLS) and emsg (DASH), and/or periodic ping/poll request to SSAI server.

Before using the adapter samples, the developer must be familiar with the SSAI providers’ documentation:

* [Verizon Media Services](https://docs.vdms.com/video/index.html)
* [Adobe](https://help.adobe.com/en_US/primetime/ad_insertion/msapi/index.html#msapi_topics-Manifest_Server_API_for_Ad_Insertion)
* [OTTera](https://www.ottera.tv/)
* [Brightcove](https://support.brightcove.com/brightcove-once-ux-implementation-guide)
* [Yospace](http://developer.yospace.com/)
* [Amazon](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-reporting-client-side.html)
* [Google Ad Manager](https://developers.google.com/interactive-media-ads/docs/sdks/roku)
* [Amagi](https://www.amagi.com/products/thunderstorm-dynamic-ad-insertion)

**Note:** The SSAI providers may have undocumented formats, parameters and API behaviors.

### Verizon Media Services Adapter

<table>
  <thead>
    <tr>
      <th><strong>Verizon Media Services</strong></th>
      <th><strong>File</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>RAFX SSAI Adapter for Verizon Media Services Preplay and Ping mode, showing ad rendering via stitchedAdsInit()/stitchedAdHandledEvent(). <br /><br />The Verizon Media Services Adapter provides the following services: <br /><br /> When Live-Ping <br /> - Request preplay and parse ads object <br /> - Ping and parse JSON, track with timestamps <br /> - Track ID3 tags and match ad objects <br /> - Configure RAF stitchedAdsInit() as ID3 tags <br /> - Track all ad events through stitchedAdHandledEvent() <br /> - Halt or append ads to current adPods as ID3 tags indicate <br /><br /> When VOD-Preplay <br /> - Request preplay and parse ads object <br /> - Configure RAF stitchedAdsInit() <br /> - Track all ad events through stitchedAdHandledEvent()</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgupl">rsgupl</a>  <br /><br />   See UplynkTask.brs to find out how to use the adapter. Copy rafxssai.brs to your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### Adobe Adapter

<table>
  <thead>
    <tr>
      <th>Adobe Adapter</th>
      <th>File</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>RAFX SSAI Adapter for Adobe Manifest Server simple and x-marker mode, showing ad rendering via stitchedAdsInit()/stitchedAdHandledEvent().  <br /><br /> Adobe Adapter provides the following services:  <br /><br /> When Live-x-markerObserve    <br /> - Observe ID3 tag: #EXT-X-MARKER <br /> - Parse ad metadata and configure RAF stitchedAdsInit() <br /> - Track ad events through stitchedAdHandledEvent() <br /><br />  When VOD-simple <br /> - Request master URL and select stream<br /> - Request ad metadata with pttrackingposition=1, pttrackingmode=simple <br /> - Supported pttrackingversion=vmap and v2 JSON <br /> - Parse ad metadata and configure RAF stitchedAdsInit() <br /> - Track ad events through stitchedAdHandledEvent()</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgadb/">rsgadb</a> <br /><br /> See AdobeTask.brs to find out how to use the adapter. Copy rafxssai.brs  to your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### OTTera AdNet+ Adapter

<table>
  <thead>
    <tr>
      <th>OTTera AdNet+ Adapter</th>
      <th>File</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>- RAFX SSAI Adapter for OTTera AdNet+ x-marker, showing ad rendering via stitchedAdsInit()/stitchedAdHandledEvent().<br /><br />OTTera AdNet+ Adapter provides the following services: <br />-  Observe ID3 tag: #EXT-X-MARKER<br />- Parse ad metadata and configure RAF stitchedAdsInit()<br /> - Track ad events through stitchedAdHandledEvent()</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgottera">rsgottera</a> <br /><br />See OTTeraTask.brs to find out how to use the adapter. Copy rafxssai.brs to your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### Brightcove/OnceUX Adapter

<table>
  <thead>
    <tr>
      <th>Brightcove/OnceUX Adapter</th>
      <th>File</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>RAFX SSAI Adapter for OnceUX VOD mode, showing ad rendering via stitchedAdInit()/stitchedAdHandledEvent().  <br /><br /> OnceUX Adapter provides the following services: <br /><br /> When VOD <br /> - Request ad metadata and parse XML <br /> - Configure RAF stitchedAdsInit() <br /> - Track ad events through RAF stitchedAdHandledEvent() <br /><br />  When reading stream info, "playURL" field is not available because OnceUX provides a pair of video contentURL and metadata URL. <br /><br /> <strong>Read Stream Info:</strong> <br /><br /> <br />\~\~\~\~ <br />...  <br />streamInfo = adapter.getStreamInfo()  <br />'  url = streamInfo\["playURL"]        This field is NOT available when OnceUX adapter. <br />... <br />\~\~\~\~ <br /><br /> However, the returned value of getStreamInfo() includes a field called <strong>tracking</strong>. This returns a list of event info generated from XML element:  \<uo:contentImpressions>\<uo:Impression>. The app is  responsible for sending those pixels when playback starts. <br /><br /> For example: <br /><br />  \<strong>Sending Content Start Beacon:\</strong> <br />\~\~\~\~ <br />... <br />m.top.video.control = "PLAY" ' Start video content <br />... <br />... <br />adIface = Roku\_Ads() <br />for each evt in streamInfo.tracking <br />    if "Impression" = evt.event <br />        adIface.util.getNoResponseFromUrl(evt.url) ' send beacon to OnceUX <br />    end if <br />end for  <br />\~\~\~\~</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgoux/">rsgoux</a>  <br /><br />See OnceUXTask.brs to find how to use the adapter. Copy rafxssai.brs to  your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### Yospace Adapter

<table>
  <thead>
    <tr>
      <th>Yospace Adapter</th>
      <th>File</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>RAFX SSAI Adapter for Yospace server, showing ad rendering via stitchedAdInit()/stitchedAdHandledEvent().  <br /><br /> Yospace Adapter provides the following services:    <br /><br /> - When VOD <br /> - Request masterURL, parse XML(DASH) or manifest(HLS), extract playbackURL and analyticsURL<br /> -Request ad metadata, parse XML and configure RAF stitchedAdsInit() <br /> -Track ad events through RAF stitchedAdHandledEvent() <br /><br />  <br /> - When LIVE <br /> - Request masterURL, parse XML(DASH) or manifest(HLS), extract playbackURL and analyticsURL<br /> - Observe timed metadata <br /> - As playback stream, ping Yospace server and parse XML <br /> - Match timed metadata YMID and ad metadata, configure RAF stitchedAdsInit() and stitchedAdHandledEvent()</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgyspc/">rsgyspc</a> <br /><br /> See YospaceTask.brs to find how to use the adapter. Copy rafxssai.brs to  your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### AWS Adapter

<table>
  <thead>
    <tr>
      <th>AWS Elemental MediaTailor Adapter</th>
      <th>File</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>RAFX SSAI Adapter for AWS Elemental MediaTailor(AWSEMT), showing ad rendering via stitchedAdInit()/stitchedAdHandledEvent() .  <br /><br /> AWSEMT Adapter provides following services:   <br /><br />- Request masterURL, parse JSON, extract hls\_url and tracking\_url. For apps with  known hls\_url, use setStreamInfo() instead of requestStream() and   getStreamInfo()  <br /><br />  <strong>Using setStreamInfo()</strong>  <br /><br />  <br />\~\~\~\~ <br />if makingIntialRequest <br />    result = adapter.requestStream(...) <br />    streamInfo = adapter.getStreamInfo() <br />else <br />    streamInfo = \{ <br />        type: m.top.testConfig.type, 'Required <br />        tracking\_url: m.top.tracking\_url, 'Required. App must provide valid URL <br />        hls\_url: m.top.hls\_url 'Required. App must provide valid URL <br />    } <br />    adapter.setStreamInfo(streamInfo) <br />end if  <br />\~\~\~\~   <br /><br />  <br /> - Poll ad metadata, parse JSON and configure RAF stitchedAdsInit() <br /> - Track ad events through RAF stitchedAdHandledEvent() masterURL may require GET or POST. When POST request is required, fill request.body with \{"adParams":\{}} <br /> - See AEMTTask.brs, function loadStream().</td>
      <td><a href="https://github.com/rokudev/samples/tree/master/advertising/rsgemt/">rsgemt</a> <br /><br /> See AEMTTask.brs to find how to use the adapter. Copy rafxssai.brs to  your project and integrate it with the content playback Task.</td>
    </tr>
  </tbody>
</table>

### Google Dynamic Ad Insertion (DAI)

You can use the Google's Interactive Media Ads (IMA) SDK for Roku to integrate multimedia ads into your app. This DAI solution combines ad and content video on the Ad Manager servers, and then returns a single video stream to your app for playback.

See the [IMA DAI SDK for Roku](https://developers.google.com/interactive-media-ads/docs/sdks/roku) guide for instructions on integrating Google DAI.
