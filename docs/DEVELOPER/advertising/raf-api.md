---
title: API reference
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
## Construction

### Roku_Ads() as Object

This is the main entry point for instantiating the ad interface. This object manages ad server requests, parses ad structure, schedules and renders ads, and triggers tracking beacons.

The Roku ad parser/renderer object returned has global scope because it is meant to represent interaction with external resources (the ad server and any tracking services) that have persistence and state independent of the ad rendering within a client application.

## Control

### fireTrackingEvents(adStructure as Object, ctx as Object) as Boolean

#### Description

Triggers event tracking, including parameter substitution for Nielsen DAR, when library client code handles the ad rendering. This method can be used in scenarios where the RAF ad renderer is not used (for example, custom ad rendering or server-stitched ads).

#### Parameters

| Name        | Type   | Description                                                                                                                                                                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| adStructure | Object | Can refer to a pod (array) of ads or a single ad. Must at least contain a Tracking array member (see [Ad Structure example](doc:integrating-roku-advertising-framework)), and may optionally contain an ‘adServer’ member string. |
| ctx         | Object | Structure to capture context-specific trigger conditions. ‘type’ key-value pair used to trigger events of a specific type. ‘time’ key-value pair used to trigger time-dependent events at or prior to this time                   |

#### Return Value

A flag indicating whether all beacons of the requested type were successfully fired.

### getAds(msg as string) as Object

#### Description

Gets the set of ads to be rendered now. This method may be called with no parameters or with a **msg** parameter.

* When called with no parameters, this function returns the full list of all ad pods parsed from the ad server response.
* When called with the **msg** parameter, this function can be used as an event listener in the client application’s main video playback loop to check whether midroll or postroll ads should be shown or not.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>msg</td>
      <td>String</td>
      <td>Optional, depending on use case. Typically, this would be a message returned from a [WaitMessage()](doc:ifmessageport#waitmessagetimeout-as-integer-as-dynamic) call on the message port of the [roVideoPlayer](doc:rovideoplayer) object during content playback.<br /><br />This allows determination of which ads are scheduled for rendering based on playback position, user action, or other conditions.</td>
    </tr>
  </tbody>
</table>

#### Return Value

Available ad pod(s) scheduled for rendering or invalid, if none are available

### showAds(ads as Object, ctx as Object, view as Object) as Boolean

#### Description

Renders any ads scheduled for display.

When this method is called with an array of ad pods (for example, using the value returned from the initial call to the [getAds()](doc:raf-api) method), this is interpreted to mean that any preroll ad pod present should be rendered.

Client applications should always check the return value. If it is false, an application should exit content playback and return to the content selection screen. Typically, this occurs when the user presses the “Back” button during ad playback.

#### Parameters

<table>
  <thead>
    <tr>
      <th><strong>Argument</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Required</strong>?</th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>ads</td>
      <td>array of ad pods</td>
      <td>required</td>
      <td>Ads to be rendered. Can represent either a single pod of ads or an array of ad pods.</td>
    </tr>

    <tr>
      <td>ctx</td>
      <td>associative array</td>
      <td>optional</td>
      <td>An associative array that allows client code to provide new offset and total to ad counter to support use cases involving interleaving RAF rendering with custom rendering within a single pod of ads. When used, it should be in the form of:  <br /><br /><code>\{ start: Integer, total: Integer }</code> <br /><br />For example, <code>\{ start: 1, total: 4 }</code> would display as: "Ad 1 of 4"  in the top left corner during ad playback.</td>
    </tr>

    <tr>
      <td>view</td>
      <td>renderable node</td>
      <td>required (for SceneGraph applications)</td>
      <td>Parameter representing a renderable node to which the ad UI can be parented.<br /><br />The <strong>view</strong> parameter allows SceneGraph rendering of ads into an app that uses SceneGraph for content rendering. <br /><ul><li>For server-stitched use case, this should be the Video node of the content player.</li><li>For non-stitched use cases, this can be any renderable node in the scene whose lifetime is guaranteed during the duration of ad rendering. Render any ads scheduled for display.</li></ul><br />The dimensions of the view object will be used to position RAF's UI elements, so it must be properly sized. Having dimensions larger than the current video playback resolution can place RAF UI elements such as the progress bar off screen.</td>
    </tr>
  </tbody>
</table>

#### Return Value

A flag indicating whether the ad pod was rendered to completion. This will be false if the user exited before render completion.

## Configuration

### setAdUrl(url as String)

#### Description

Sets the ad URL to be used for a new [getAds()](doc:raf-api) request.

> You can only receive payment for ads shown in your application when the Roku Ad Framework is properly configured with a valid URL assigned by your ad service or by Roku.
>
> Please contact [adsupport@roku.com](mailto:adsupport@roku.com) to discuss monetization options and obtain an ad URL if you wish to use Roku to fill ad inventory in your application.

#### Parameters

| Argument | Type   | Description                                                                                                                                                                     |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url      | String | The URL to be set as the current ad service request. Since version 2.14, supports parsing ads from local xml files in tmp:/, e.g., raf.setAdURL("tmp:/myVASTorVMAPorSMRX.xml"). |

### getAdUrl() as String

#### Description

Gets the currently-configured ad server URL.

#### Return Value

The current ad server URL.

### setAdPrefs(useRokuAdsAsFallback as Boolean, maxRequests as Integer)

#### Description

Configures general ad request preferences.

The default is for Roku to backfill ads if this method is not called or **useRokuAdsAsFallback** is not set to false

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>useRokuAdsAsFallback<br /><br /><em>Deprecated</em></td>
      <td>Boolean</td>
      <td>Indicates whether the default Roku backfill ad service URL should be used in case the client-configured URL fails to return any renderable ads.<br /><br /><em>This parameter has been deprecated and will be ignored in future updates to the RAF library.</em></td>
    </tr>

    <tr>
      <td>maxRequests</td>
      <td>Integer</td>
      <td>The maximum number of attempts the <a href="#getadsmsg-as-string-as-object">getAds()</a> function is allowed to make. For example, if the first attempt to the client-configured URL fails to return any renderable ads and this field is set to 2, and the <strong>useRokuAdsAsFallback</strong> field is set to false, then a second attempt is made to the same client-configured URL.</td>
    </tr>
  </tbody>
</table>

### setAdConstraints(maxHeight as Integer, maxWidth as Integer, maxBitrate as Integer, supportedMimeTypes as Object)

#### Description

Configures media constraints to filter renderable video ads.

By default, the MIME types are configured for “video/mp4”, “video/mp4-h264”, “video/x-mp4”, “application/x-mpegurl”, and “application/json”.

Any additional known types can be mapped to their stream format by setting this parameter before calling [getAds()](doc:raf-api).

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>maxHeight</td>
      <td>Integer</td>
      <td>Maximum vertical dimension of renderable ad (in pixels).</td>
    </tr>

    <tr>
      <td>maxWidth</td>
      <td>Integer</td>
      <td>Maximum horizontal dimension of renderable ad (in pixels).</td>
    </tr>

    <tr>
      <td>maxBitrate</td>
      <td>Integer</td>
      <td>Maximum allowable bitrate for renderable ad streams (in Kbps)</td>
    </tr>

    <tr>
      <td>supportedMimeTypes</td>
      <td>Object</td>
      <td>Associative array with entries of the form: <br /><br /><code>\{“mimeType” : “stream- Format”}</code></td>
    </tr>
  </tbody>
</table>

### setAdBreaks(contentLength as Integer, adBreakTimes as Integer)

#### Description

Configures content playback parameters, which can be used for scheduling relative-positioned ad breaks in VMAP ad service responses.

* If your application uses VMAP ad URLs and they are configured to use “nn%” timeOffset values, then you must specify the contentLength prior to calling [getAds()](doc:raf-api).
* If VMAP is configured to use “#mm” timeOffset values, you must first specify a set of ad break times.
* Calling with empty parameters will reset these to invalid values.

The content length can also be set independently via [setContentLength()](doc:raf-api) if ad break times are not required.

#### Parameters

| Argument      | Type    | Description                                                                        |
| ------------- | ------- | ---------------------------------------------------------------------------------- |
| contentLength | Integer | Total length of video content (in seconds).                                        |
| adBreakTimes  | Integer | Array of suggested offsets into content playback to insert ad breaks (in seconds). |

### setAdExit(enabled as Boolean)

> setAdExit() is deprecated and disabled - check showAds() return value instead

### importAds(adPodArray as Object)

#### Description

Resets the internal ad pod cache to allow client code to import a set of ads from unsupported ad service response formats or when aggregating ads from multiple ad services.

The application is responsible for ensuring that the ad pods in the array contain all the required data members.

#### Parameters

| Argument   | Type   | Description                                                                                                             |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| adPodArray | Object | Array of ad pods structured in accordance with the required [Ad Structure](doc:integrating-roku-advertising-framework). |

### enableJITPods(enabled as Boolean)

_Available since version 2.4_

#### Description

For applications that use a VMAP or SmartXML ad response to structure multiple ad pods, including midrolls, the JIT (or “Just In Time”) feature can be used to avoid pre-fetching all ad metadata before the content playback begins.

When enabled, ad call redirects for midrolls are deferred until a certain time before the ad pod is rendered. This mechanism relies on the host app’s continuous use of the BrightScript **getAds()** API method with the content video position event to determine when to resolve the deferred ads.

> JIT is used as a global setting; if the app has mixed content streams, where some content should not use JIT (such as server-stitched ads), then the host app is responsible for disabling this functionality before any ad calls are made for such streams.

#### Parameters

| Argument | Type    | Description                                                                                                              |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| enabled  | Boolean | Enables “Just In Time” fetching of midroll ads. By default, JIT is disabled and must be explicitly enabled via this API. |

### enableInPodStitching(isIPS as Boolean)

_Available since version 2.14_

#### Description

"In-pod stitching" (IPS) mode brings some of the benefits from [CSAS API](doc:csas) to apps using the classic CSAI API [showAds()](doc:raf-api). When IPS mode is enabled and _showAds()_ is called for an ad break with multiple ads, it would stitch together the video clips for playback, prebuffering the next ad in the background while the current ad is finishing. The viewer experience is better because of the fast transitions between ads. Conversely, when IPS is disabled, each video plays individually and a few seconds are spent in a buffering screen between the ads.

#### Parameters

| Argument | Type    | Description                                            |
| :------- | :------ | :----------------------------------------------------- |
| isIPS    | Boolean | Whether to enable IPS (in-pod stitching) for showAds() |

### setLimitAdTracking(enabled as Boolean)

_Available since version 3.1_

For apps that collect explicit in-app consent for ad targeting (for example, to adhere to GDPR), this function specifies the value of the [ROKU_ADS_LIMIT_TRACKING URL parameter macro](doc:integrating-roku-advertising-framework) to be passed into beacons and ad requests.

This function cannot override the ROKU_ADS_LIMIT_TRACKING value if the customer has cleared the **Personalize ads** check box in the **Settings > Privacy** menu.

#### Parameters

| Argument | Type    | Description                                                                                                                                                                                                                                                         |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enabled  | Boolean | Sets the [ROKU_ADS_LIMIT_TRACKING URL parameter macro](doc:integrating-roku-advertising-framework) to be passed into beacons and ad requests to either 1 (true; ad targeting is disabled for the customer) or 0 (false; ad targeting is disabled for the customer). |

### setTrackingCallback(callback as Function, obj as Object)

#### Description

Allows library client to set a callback function to be called when ad tracking events are fired or checked.

Callback functions must have the following signature:

```
sub CallbackFunc(obj = invalid as Dynamic, eventType = invalid as Dynamic, ctx = invalid as Dynamic)
```

* The obj parameter is an opaque object always passed through to the callback.

* The eventType, if set, is a string specifying a tracking event that is fired. Event names correspond to [Tracking](doc:integrating-roku-advertising-framework).

* The ctx is an optional associative array that encapsulates metadata associated with VAST-specified macros or ad render progress. Each member of the ctx array should separately be considered optional (for example, client code should check for valid values before operating on these data members). Generally, if `ctx.eventType` is not set, then `ctx.time` should be set and indicate ad render progress:

  ```
  {
      errType: String,
      errCode: String,
      errMsg : String,
      time : Int | Float (playback position, in s),
      url : String (rendered asset URI),
      ad : Associative Array representing ad structure for current ad,
      adIndex: Int (logical index of current ad within ad pod)
  }
  ```

#### Parameters

| Argument | Type     | Description                                         |
| -------- | -------- | --------------------------------------------------- |
| callback | Function | Function matching the required function signature . |
| obj      | Object   | The object to be passed to the callback function.   |

### setDebugOutput(enabled as Boolean)

#### Description

Enables a library client to configure extended debug output, which is disabled by default.

#### Parameters

| Argument | Type    | Description                     |
| -------- | ------- | ------------------------------- |
| enabled  | Boolean | Enables extended debug logging. |

### getLibVersion() as String

#### Description

Gets the RAF library version.

#### Return Value

The library version in the following format: “`<major>.<minor>`”

## General audience measurement

### enableAdMeasurements(enabled)

_Available since version 2.1_

#### Description

Applications using audience measurement features must explicitly enable the framework to operate on the custom impression tag parameters. This function is used in conjunction with the [setContentGenre()](doc:raf-api), [setContentId()](doc:raf-api), and [setContentLength()](doc:raf-api) APIs to provide measurement data to third-party ad measurement platforms such as NielsenDAR, ComScore CCR, and ComScore VCE.

> Contact [adsupport@roku.com](mailto:adsupport@roku.com) for more information on how to use audience measurement features.

#### Parameters

| Argument | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| enabled  | Boolean | Enables audience identifiers in measurement tags. |

### setContentGenre(genres as String, kidsContent as Boolean)

#### Description

Enables potential ad targeting by specifying a set of genre tags to associate with the content or the ad request.

To clear genre tags, pass an empty string in the **genres** parameter or omit it.

The semantics and implementation of targeting based on genre values are dependent on the configured ad server, but for a list of currently-supported tags supported by the Roku ad server, see [Roku Genre Tags](doc:integrating-roku-advertising-framework).

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>genres</td>
      <td>String</td>
      <td>Comma-delimited string or array of genre tag strings.</td>
    </tr>

    <tr>
      <td>kidsContent</td>
      <td>Boolean</td>
      <td>Optional. Specify whether content is targeted towards children (true) or not (false).<br /><blockquote><p>Per Roku's <a href="https://roku-ent.readme.io/dev/docs/certification#1-advertising">certification requirements</a>, apps with child-directed content must set this flag to <strong>true</strong> if serving ads during child-directed content.</p></blockquote></td>
    </tr>
  </tbody>
</table>

### setContentId(id as String)

#### Description

Enables potential ad targeting on a video content item by specifying its identifier.

Passing an empty string or omitting the **id** parameter will clear the content ID.

#### Parameters

| Argument | Type   | Description                                                              |
| -------- | ------ | ------------------------------------------------------------------------ |
| id       | string | The content video item on which ad targeting may potentially be allowed. |

### setContentLength(length as Integer)

#### Description

Configures the content length to extend ad targeting properties for Nielsen DAR.

This method may also be used to determine VMAP relative ad break times.

Omitting the **length** parameter will clear any  content length that was previously set.

#### Parameters

| Argument | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| length   | integer | Total length of content (in seconds). |

## Nielsen DAR

> The Nielsen DAR APIs have been deprecated. Use the [general audience measurement APIs instead](#general-audience-measurement).

### setNielsenGenre(genre as String)

#### Description

Enables ad campaign measurement using Nielsen DAR tags by specifying a primary genre for the content being played, according to the Nielsen genres defined in [Nielsen DAR Genre Tags](doc:integrating-roku-advertising-framework).

**Examples**:

“CS” for a “Seinfeld” episode.
“N” for a “60 Minutes” episode.

#### Parameters

| Argument | Type   | Description                                                   |
| -------- | ------ | ------------------------------------------------------------- |
| genre    | String | The primary content genre to be passed into Nielsen DAR tags. |

### setNielsenAppId(id as String)

Enables ad campaign measurement using Nielsen DAR tags.

The value of this application ID is uniquely assigned to your application by Nielsen and must be configured before rendering any ads containing Nielsen beacons.

#### Parameters

| Argument | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| id       | String | The Nielsen-assigned application ID. |

## Nielsen DCR

### getNielsenContentData() as String

#### Description

Provides an encrypted Nielsen RIDA parameter string for apps using the Nielsen SDK for DCR measurements.

#### Return Value

Encrypted Nielsen RIDA parameter string.

## Client stitched ads

### constructStitchedStream(contentMetaData as Object, ads as Object) as Object

#### Description

Merges a video feed and a set of one or more ad pods into a single playlist for playback via the [renderStitchedStream()](#renderstitchedstreamcsasstream-as-object-view-as-object-as-boolean) function.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Required?</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>contentMetaData</td>
      <td>Content Node</td>
      <td>Required</td>
      <td>The content metadata of the video feed to be combined into the stitched stream.</td>
    </tr>

    <tr>
      <td>ads</td>
      <td>roArray</td>
      <td>Required</td>
      <td>Array of ad breaks to be combined into the stitched stream using RAF's <a href="https://roku-ent.readme.io/dev/docs/integrating-roku-advertising-framework#ad-structure">ad structure</a> format.<br /> <br />The object may been parsed earlier from VMAP/SMRX by calling <br /><code>raf.setAdURL(myAdTag): adBreaks = raf.getAds()</code>.</td>
    </tr>
  </tbody>
</table>

#### Return Value

A single video stream containing the specified video feed and ads.

### renderStitchedStream(csasStream as Object, view as Object) as Boolean

#### Description

Renders a video stream that uses client-side ad stitching.

Tracking events are triggered automatically during ad rendering by this method.<br />For client applications that perform their own ad rendering, the valid event types that must be handled are represented in the `tracking` array of the [Ad Structure](doc:integrating-roku-advertising-framework).

For client-side stitched streams, the app will also get tracking events during content playback in addition to those received during ad rendering.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>csasStream</td>
      <td>Object</td>
      <td>The video stream returned by <a href="#constructstitchedstreamcontentmetadata-as-object-ads-as-object-as-object">constructStitchedStream()</a> method.</td>
    </tr>

    <tr>
      <td>view</td>
      <td>Object</td>
      <td>A renderable node to which the ad UI can be attached. This enables the rendering of ads for apps that use SceneGraph for content rendering.<br /><br />The dimensions of the view object will be used to position RAF's UI elements, so it must be properly sized. Having dimensions larger than the current video playback resolution can place RAF UI elements such as the progress bar off screen.</td>
    </tr>
  </tbody>
</table>

#### Return Value

A flag indicating whether the stream played to completion. This is false if the user exited playback before the stream completed.

## Server stitched ads

### stitchedAdsInIt(adPodArray as roArray)

#### Description

Imports ad metadata to be used for server-stitched ad rendering and resets the internal state before handling events.

The application is responsible for ensuring that the ad pods in the array contain all the required data members. In particular, for server-stitched ads, all time-dependent tracking beacons (Impression and quartile beacons) must have a valid time data member set, with a value relative to the entire stitched stream. For example, if a 30-second ad starts at 10:00 within the stitched stream, its Impression beacons should have track.time = 600.0 and its Midpoint beacons should have track.time = 615.0, and so on.

This method is used in conjunction with [stitchedAdHandledEvent()](doc:raf-api) to implement ad rendering within server-stitched video streams.

#### Parameters

| Argument   | Type    | Description                                                                                                           |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| adPodArray | roArray | Set of ad pods structured in accordance with the required [Ad Structure](doc:integrating-roku-advertising-framework). |

### stitchedAdHandledEvent(msg as Object, player as Object) as roAssociativeArray

#### Description

Determines whether a stitched ad is being rendered, lets the ad renderer attempt to handle the event, and returns metadata about the ad and the event handled state.

This method is only intended for use in rendering server-stitched ads.

The advertising framework must first be initialized using the stitchedAdsInit() method before calling this method.

#### Parameters

<table>
  <thead>
    <tr>
      <th><strong>Argument</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>player</td>
      <td>Object</td>
      <td>Player interface to allow ad renderer to control stitched video stream. If invalid or not specified, only beacons will be fired, and no interaction will be allowed or additional UI rendered during ad display.<br /><br />This parameter may be either the <a href="">roVideoPlayer</a> instance used to play the stitched stream, or an roAssociativeArray that contains methods congruent to the ifVideoPlayer interface. The roAssociativeArray is used in case there is additional client code that should be executed when an ad renderer controls the stream (for example, analytics).<br /><br />If the player parameter is passed as an roAssociativeArray in an app where video is played with roVideoPlayer (non-RSG), the app must contain the following methods: <pre><code>\{  ' Returns message port for player  GetMessagePort : Function() as Object,  ' Pauses a stitched video stream  Pause : Function() as Boolean,  ' Resumes a paused stitched stream  Resume : Function() as Boolean,  ' Seeks to absolute position (in ms) within stream  Seek : Function(offsetMs as Integer) as Boolean,  ' Plays stitched video stream  Play : Function() as Boolean,  ' Stops stitched video stream  Stop : Function() as Boolean}</code></pre><br /><br />For SceneGraph apps that use a Video node for stitched ad playback, the <strong>player</strong> parameter should be an roAssociativeArray of the following form: <pre><code>\{  sgNode : video, ' the video node which will render the stitched stream  port : port ' the message port on which (at least) the "position" and "state" fields of  the above video node are observed}</code></pre></td>
    </tr>

    <tr>
      <td>msg</td>
      <td>Object</td>
      <td>Returned object from a Wait() call on the message port used by the stitched video player. May be consumed by the ad renderer to measure playback state or provide user interactivity with stitched ad.</td>
    </tr>
  </tbody>
</table>

#### Return Value

* If a stitched ad is being rendered, this method returns an roAssociativeArray that represents the current ad context and state. The return value is of the form:

  \{
  adIndex : Integer, 'Index of current ad within pod
  adPodIndex : Integer, 'Index of current pod
  evtHandled : Boolean, 'True if event was handled by ad renderer
  adExited : Boolean, 'True if user exited ad rendering
  adCompleted : Boolean, 'True if ad has completed rendering
  }

* If no stitched ad is being rendered, this method returns **Invalid**.

* If the return value indicates that there is a stitched ad being rendered and that the event was handled by the renderer, the client application must take no action on that event. If the ad was exited, the client app should stop playback and return to the content selection screen.

## Buffer screen customization

### setAdBufferScreenContent(contentMetaData as Object)

#### Description

Enables the client application to set metadata for the content populating the default ad buffer screen. contentMetaData conforms to the format defined in [Content Meta-Data](doc:content-metadata) and can contain any or all of the following:

```
{
  HDBackgroundImageUrl : String (URL for HD background image),
  SDBackgroundImageUrl : String (URL for SD background image),
  HDPosterUrl : String (URL for HD video poster),
  SDPosterUrl : String (URL for SD video poster),
  Title : String (Content title),
  Description : String (Content description)
}
```

#### Parameters

| Argument        | Type               | Description                                                                                 |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| contentMetaData | roAssociativeArray | Contains metadata representing information to be displayed in the default ad buffer screen. |

### enableAdBufferMessaging(enableMsg as Boolean, enableProgressBar as Boolean)

#### Description

Enables the client application to display messaging text and a progress bar on the default ad buffer screen.

#### Parameters

| Argument          | Type    | Description                                                                                      |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------ |
| enableMsg         | Boolean | Enables ad messaging text on the default ad buffer screen. The default value is true.            |
| enableProgressBar | Boolean | Enables an ad buffering progress bar on the default ad buffer screen. The default value is true. |

### setAdBufferScreenLayer(zOrder as Integer, contentMetaData as Object)

#### Description

Enables the client application to set individual layer metadata for the custom ad buffer UI. contentMetaData conforms to the format defined in [Content Meta-Data](doc:content-metadata).

The values that can be passed in the **zOrder** and **contentMetaData** parameters are specified by roImageCanvas.

#### Parameters

| Argument        | Type               | Description                                                |
| --------------- | ------------------ | ---------------------------------------------------------- |
| zOrder          | Integer            | Layer index to be used to display the **contentMetaData**. |
| contentMetaData | roAssociativeArray | The metadata for this UI layer.                            |

### clearAdBufferScreenLayers()

#### Description

Enables the client application to clear all metadata in all layers previously set for the custom buffer screen.

### setAdBufferRenderCallback(callback as Function, obj as Object, timeout as Integer)

#### Description

Enables the client application to set a callback function and timeout value for ad buffering events, to provide opportunity for analytics methods or animation of elements on custom buffer screen.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Argument</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>callback</td>
      <td>Function</td>
      <td>The callback function to receive ad buffer events. The default value is Invalid. This function must have the following signature: <br /><code>Function(obj as Dynamic, eventType as String, ctx as Dynamic) as Void</code><br /><br />The <strong>eventType</strong> parameter can take the following values:<br /><ul><li>BufferingStart</li><li>BufferingEnd</li><li>ReBufferingStart</li><li>ReBufferingEnd</li><li>Progress</li><li>Timeout</li></ul><br />The <strong>ctx</strong> parameter is an roAssociativeArray that can contain the following:<pre><code>\{    'array of content metadata set via setAdBufferScreenLayer, or Invalid     canvasLayers : roArray of roAssociativeArrays,    'progress percentage \[0-100]. Optional, only for "Progress" event type     progress : Integer    'ad metadata for currently buffering ad    ad : roAssociativeArray,    'index of current ad within pod    adIndex : Integer}</code></pre></td>
    </tr>

    <tr>
      <td>obj</td>
      <td>Object</td>
      <td>The object to be passed to the callback function. The default value is Invalid.</td>
    </tr>

    <tr>
      <td>timeout</td>
      <td>Integer</td>
      <td>The number of milliseconds to wait on buffer events before timing out. The default value is 0 (no timeout).</td>
    </tr>
  </tbody>
</table>
