---
title: "Implementing client-side ad stitching"
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


You can combine video content and ad pods into a single playlist and then render it. This optimizes the video playback experience by eliminating buffering between your content and ads. The Roku Advertising Framework (RAF) API includes [**constructStitchedStream**()](doc:raf-api) and [**renderStitchedStream()**](doc:raf-api) methods that enable you to seamlessly create and render stitched streams.

## Creating a stitched stream

Once you have [enabled the RAF library](doc:integrating-roku-advertising-framework) in the manifest and [instantiated it](doc:raf-api) in the app, you can create a stitched stream using the [**constructStitchedStream**()](doc:raf-api) method. This method takes two parameters: a ContentNode with the content metadata of the video to be played, and the ads in the ad pod to be rendered during playback (retrieved via the RAF [**GetAds()** method](doc:raf-api)). The method returns a single playlist, which you can then render as described in the next section.

The following code example demonstrates how to create a stitched stream:

```
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("MainScene")

'Specify content to be played
videoUrl = "http://pmd205604tn.download.theplatform.com.edgesuite.net/Demo_Sub_Account_2/411/535/ED_HD__571970.m3u8"

'Specify VAST template containing ads to be rendered
adUrl = "https://devtools.web.roku.com/samples/sample.xml"

'Initialize RAF
m.adIface = Roku_Ads()

'Enable and specify audience identifiers to be passed into impression measurement tags
m.adIface.enableAdMeasurements(true)
m.adIface.setContentGenre("Entertainment")
m.adIface.setContentId("CSASAdSample" )

'Set and get the ads to be rendered
m.adIface.SetAdURL(adUrl)
m.adPods = m.adIface.GetAds()

'Create and configure a ContentNode containing the metadata of the content to be played.
myContentNode = createObject("roSgNode", "ContentNode")
myContentNode.url = videoUrl
myContentNode.length = 600
myContentNode.streamFormat = "hls"

'Combine video and ads into a single playlist
csasStream = m.adIface.constructStitchedStream(myContentNode, m.adPods)
```

## Rendering a stitched stream

You can render a stitched stream using the  [**renderStitchedStream()**](doc:raf-api) method. This method takes the playlist created via the [**constructStitchedStream()**](doc:raf-api) method and a renderable node to which the stitched stream can be attached.

```
' render the stitched stream
m.adIface.renderStitchedStream(csasStream, scene)
```

## Firing ad measurement beacons without wrapping

Per [Roku's certification requirements](doc:ad-requirements), all ad measurement beacons must be fired directly by RAF client-side (they may not be wrapped). This is required to apply the [Roku Advertising Watermark](doc:ad-watermark) to the beacons.

## Sample app

You can download and install a [sample app](https://github.com/rokudev/samples/tree/master/advertising/CSASAdSample) that demonstrates how to create and render a client-side stitched stream. It shows you how you can create a stream by combining a video content item with the ads in a Video Ad Serving Template (VAST), and then render the stitched stream in a SceneGraph object.