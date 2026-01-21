---
title: "ifVideoPlayer"
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


## Implemented by

| Name         | Description                                                           |
|--------------|-----------------------------------------------------------------------|
|[roVideoPlayer](doc:rovideoplayer) |The roVideoPlayer component implements a video player with more programmatic control, but less user control than the roVideoScreen component  |


## Supported methods

### SetContentList(contentList as Object) as Void

#### Description

Sets the content to be played by the roVideoPlayer.

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
<td>contentList</td>
<td>Object</td>
<td>An <a href="/docs/references/brightscript/components/roarray.md" title="roArray">roArray</a> of <a href="/docs/references/brightscript/components/roassociativearray.md" title="roAssociativeArray">roAssociativeArray</a> (<a href="/docs/developer-program/getting-started/architecture/content-metadata.md" title="Content Meta-Data">Content Meta-Data</a> objects) representing the information for each stream to be played.<br /><br />If the player is currently playing the player will be stopped. Next, the current player position is reset so the next time Play() is called, playback will start at the first item of the content list (unless Seek() is called prior to Play()).<br /><br />roVideoPlayer prefetches the next item in the content list while the current item is playing. Given sufficient network throughput, there is no rebuffering when the player switches to the next item in the list. To signal the content transition, the player sends an isRequestSucceeded notification with the old content index and isListItemSelected notification with the new content index.</td>
</tr>
</tbody>
</table>


### AddContent(contentItem as Object) as Void

#### Description

Adds a new [Content Meta-Data](doc:content-metadata) item to the end of the content list for the roVideoPlayer. roVideoPlayer playback buffers on each Content item transition.

#### Parameters

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| contentItem | Object | The [content metadata](doc:content-metadata) item to be added to the content list. |

### ClearContent() as Void

#### Description

Clears all content from the roVideoPlayer. If the player is currently playing, it stops. Next, the current player position is reset so the next time the [Play()](#play-as-boolean) method is called, playback starts at the first item of the content list (unless the [Seek()](#seekoffsetms-as-integer-as-boolean) method is called prior to Play()).


### PreBuffer() as Boolean

#### Description

Begins downloading and buffering of a video that may be selected by a user. This method can be used to reduce buffering delays after a user has selected a video for playback. It is typically called when the user is in the roSpringboardScreen (or equivalent), anticipating that the user will select a video on the springboard screen for download.

#### Return Value

A flag indicating whether the operation was successful.

### Play() as Boolean

#### Description

Puts the roVideoPlayer object into play mode starting at the beginning of the content list. This will stop any currently playing Content List.

If the [Seek()](#seekoffsetms-as-integer-as-boolean) method was called prior to this method, the player will start playing at the seek position. If Seek() was not called, the player advances its current position to the next item in the content list and starts playing that item.

#### Return Value

A flag indicating whether the operation was successful.

### Stop() as Boolean

#### Description

Stops playback and resets the seek position; keeps the player’s current position unchanged.

#### Return Value

A flag indicating whether the operation was successful.

### Pause() as Boolean

#### Description

Puts the roVideoPlayer object into pause mode. If the player is already in pause mode, this will generate an error.

#### Return Value

A flag indicating whether the operation was successful.

### Resume() as Boolean

#### Description

Puts the roVideoPlayer object into play mode starting from the pause point. This method must be called when the roVideoPlayer object is in pause mode; otherwise, it will generate an error.

#### Return Value

A flag indicating whether the operation was successful.

### SetLoop(loop as Boolean) as Void

#### Description

Automatically replays the content list. This method buffers on every loop to the beginning of the content list.

#### Parameters

| Name | Type    | Description                                          |
| ---- | ------- | ---------------------------------------------------- |
| loop | Boolean | Enables the automatic replaying of the content list. |

### SetNext(item as Integer) as Void

#### Description

Sets the next item in the Content List to be played.

#### Parameters

| Name | Type    | Description                                          |
| ---- | ------- | ---------------------------------------------------- |
| item | Integer | The unique ID of the content item to be played next. |

### setEnableAudio(enable as Boolean) as Void



#### Description

Mutes the audio during video playback. This is useful, for example, for implementing a video preview feature in an app.

#### Parameters

| Name   | Type    | Description                            |
| ------ | ------- | -------------------------------------- |
| enable | Boolean | Mutes the audio during video playback. |

### Seek(offsetMs as Integer) as Boolean

#### Description

Sets the start point of playback for the current video to a specific offset.

#### Parameters

| Name     | Type    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| offsetMs | Integer | The number of milliseconds to offset the playback of the current content item. |

### SetPositionNotificationPeriod(period as Integer) as Void

#### Description

Sets the interval to receive playback position events from the roVideoPlayer.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| period | Integer | The notification period for receiving playback position events in seconds. Notification events sent to the script specify the position in seconds relative to the beginning of the stream. If the value is 0, position notifications are never sent. The default value is 0. |

### SetCGMS(level as Integer) as Void

#### Description

Sets CGMS (Copy Guard Management System) on analog outputs to the desired level.

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
<td>level</td>
<td>Integer</td>
<td>The level to which CGMS is set. This may be one of the following values: <ul><li>0 - No Copy Restriction</li><li>1 - Copy No More</li><li>2 - Copy Once Allowed</li><li>3 – No Copying Permitted</li></ul></td>
</tr>
</tbody>
</table>



### SetDestinationRect(rect as Object) as Void

#### Description

Sets the target display window for the video.

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
<td>rect</td>
<td>Object</td>
<td>The parameters of the target display window, which include the x and y coordinates, width, and height &#123;x:Integer, y:Integer, w:Integer, h:Integer&#125;<br /><br />The default value is: &#123;x:0, y:0, w:0, h:0&#125;, which is full screen.</td>
</tr>
</tbody>
</table>


###  SetDestinationRect(x as Integer, y as Integer, w as Integer, h as Integer) as Void

#### Description

Sets the target display window for the video. This is similar to the [SetDestinationRect()](#setdestinationrectrect-as-object-as-void) function except that the values are specified as separate parameters.

#### Parameters

| Name | Type    | Description                                         |
| ---- | ------- | --------------------------------------------------- |
| x    | Integer | The x coordinate of the target display window.      |
| y    | Integer | The y coordinate of the target display window.      |
| w    | Integer | The width of the target display window.             |
| h    | Integer | The height coordinate of the target display window. |

### SetMaxVideoDecodeResolution(width as Integer, height as Integer) as Void

#### Description

Sets the max resolution required by your video.

Video decode memory is a shared resource with OpenGL texture memory. The BrightScript 2D APIs are implemented using OpenGL texture memory on Roku models that support the OpenGL APIs (please see [Roku Models and Features](doc:hardware) for a list of these models). For models that do not support OpenGL APIs, this method exists for API compatibility but has no effect on actual memory allocations.

Video decode memory allocation is based on a resolution of 1920x1080 or 1280x720 as the maximum supported resolution for a particular Roku model (please see [Roku Models and Features](doc:hardware) for a list of these models).

This API enables applications that want to use both the 2D APIs and video playback with a lower resolution than 1080p. Without this call, these applications are likely to not have enough memory for either video playback or roScreen rendering.

#### Parameters

| Name   | Type    | Description                                |
| ------ | ------- | ------------------------------------------ |
| width  | Integer | The maximum height required by your video. |
| height | Integer | The maximum width required by your video.  |

### GetPlaybackDuration() as Integer

#### Description

Returns the duration of the video, in seconds. This information may not be available until after the video starts playing.

#### Return Value

The duration of the video. A value of 0 is returned if the duration is unknown.

### GetAudioTracks() as Object

#### Description

Returns the audio tracks contained in the current stream.

#### Return Value

An roArray, where each element in the array represents a single audio track that contains the following attributes: $&#123;getaudiotracksvalues&#125;


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Language</td>
<td>String</td>
<td>Language code ("eng" for English, etc.)</td>
</tr>
<tr>
<td>Track</td>
<td>String</td>
<td>Audio track identifier</td>
</tr>
<tr>
<td>Name</td>
<td>String</td>
<td>Track name</td>
</tr>
<tr>
<td>Format</td>
<td>String</td>
<td>Contains the format of the currently playing video stream.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>""</td><td>No stream playing</td></tr><tr><td>none</td><td>Stream contains no playable video</td></tr><tr><td>unknown</td><td>Stream contains unknown video</td></tr><tr><td>hevc</td><td>ISO/IEC 23008-2, H.265, HEVC</td></tr><tr><td>hevc_b</td><td>ISO/IEC 23008-2 Annex-B, H.265, HEVC</td></tr><tr><td>mpeg1</td><td>ISO/IEC 11172-2, MPEG-1 part 2, H.261</td></tr><tr><td>mpeg2</td><td>ISO/IEC 13818-2, MPEG-2 part 2, H.262</td></tr><tr><td>mpeg4_2</td><td>ISO/IEC 14496-2, MPEG-4 part 2, H.263</td></tr><tr><td>mpeg4_10b</td><td>ISO/IEC 14496-10, MPEG-4 part 10 Annex-B, H.264, vc-1</td></tr><tr><td>mpeg4_15</td><td>ISO/IEC 14496-15, MPEG-4 part 15, H.264, vc-1</td></tr><tr><td>AVC vc1</td><td>vc-1</td></tr><tr><td>wmv</td><td>Microsoft Windows Media Video</td></tr><tr><td>vp8</td><td>VP8 codec</td></tr><tr><td>vp9</td><td>VP9 codec</td></tr></tbody></table></td>
</tr>
<tr>
<td>HasAccessibi;ityDescription</td>
<td>String</td>
<td>Represents "public.accessibility.describes-music-and-sound.</td>
</tr>
<tr>
<td>HasAccessibilityEAI</td>
<td>String</td>
<td>DASH: Audio track contains an element for improved intelligibility of the dialogue [Enhanced Audio Intelligibility].</td>
</tr>
</tbody>
</table>



### ChangeAudioTrack(trackID as String) as Void

#### Description

Changes the currently playing audio track. For content with multiple audio tracks, the current track can be selected programmatically using this function.

#### Parameters

| Name    | Type   | Description                                              |
| ------- | ------ | -------------------------------------------------------- |
| trackID | String | The audio track identifier returned by GetAudioTracks(). |

### SetTimedMetaDataForKeys(keys[] as Dynamic) as Void

#### Description

Specifies the timedMetaData keys that the BrightScript app is interested in receiving from the timedMetaData event.

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
<td>keys[]</td>
<td>Dynamic</td>
<td>An array of timedMetaData keys for the app to receive from the timedMetaData event.<br /><br />If the keys array is empty, all the timed metadata associated with the current stream is sent with the isTimedMetaData event. If the keys array is invalid, then do not return any keys to the BrightScript app. Any keys not specified with this method are deleted by the Roku OS and never returned to the BrightScript application.</td>
</tr>
</tbody>
</table>


### GetCaptionRenderer() as Object

#### Description

This method returns the roCaptionRenderer instance associated with this roVideoPlayer.

Channels that render their own captions need to call this method to get the caption renderer for their video player. This is required for doing capture rendering. See roCaptionRenderer for details.

#### Return Value

The roCaptionRenderer instance associated with this roVideoPlayer.


### SetMacrovisionLevel(level as Integer) as Void

> This function is deprecated. Roku no longer supports Macrovision and this function exists as a no-op so that legacy scripts do not break.