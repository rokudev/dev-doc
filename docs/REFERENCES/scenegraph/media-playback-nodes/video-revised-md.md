---
title: Video (revised md)
deprecated: false
hidden: true
metadata:
  robots: index
---
# Video

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md)

The Video node class provides a controlled play of live or VOD video.

The Video node includes a wide variety of internal nodes to support trick play, playback buffering indicators, and so forth. Playback buffering indicators, to indicate buffering before initial playback as well as re-buffering, use an internal instance of a ProgressBar node. For trick play, an internal instance of a TrickPlayBar node is provided. For display of BIF images for DVD-like chapter selection, an internal instance of a BIFDisplay node is provided.

Starting from Roku OS 8, the behavior of the Roku system overlay is such that the system overlay now slides in whenever the * button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.

## Fields

### Playback fields

To set the specific video playback parameters for a particular video, set the [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md) attributes for the video in a [ContentNode](/docs/references/scenegraph/control-nodes/contentnode.md) node, and assign the ContentNode to the **content** field of the Video node.

Video playback can then be controlled by setting the value of the **control** field, such as setting the field value to play to begin playback.

The **control** field includes a prebuffer option, which allows the video to begin buffering without showing the video. You can use this option to begin buffering of a video before a user has actually selected and started the video, such as when the user is looking at information about various video offerings in a list or grid or another type of UI element. This can eliminate much or all of the apparent delay in starting the video due to buffering the video for the user.

| Field | Type | Default | Access Permission | Description |
| --- | --- | --- | --- | --- |
| content | ContentNode | NULL | READ_WRITE | The ContentNode with the [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md) for the video, or a video playlist (a sequence of videos) to be played.<br /><br />If a video playlist is to be played, the children of this ContentNode comprise the playlist, and each ContentNode child must have all attributes required to play that video. See the **contentIsPlaylist** and **contentIndex** fields for more information on playlists. |
| playStartInfo | roAssociativeArray | | READ_ONLY | Provides timing measurements related to the start of video playback. All measurements are in seconds. See [**playStartInfo**](#playstartinfo). |
| licenseStatus | roAssociativeArray | | READ_ONLY | Indicates whether the DRM license was acquired. If a failure occurs, this field provides additional details about the error. Contains:<br /><br />• **response** (string): The server response. If a license is not retrieved, the response is empty and the HTTP response code is returned instead.<br />• **status** (string): The HTTP response code.<br />• **keysystem** (string): The DRM technology used.<br />• **duration** (string): The total time elapsed in sending a request to the license server and receiving a response, in milliseconds. |
| contentIsPlaylist | Boolean | false | READ_WRITE | If set to true, enables video playlists (a sequence of videos to be played). See the **content** and **contentIndex** fields for more information on playlists. |
| contentIndex | integer | -1 | READ_ONLY | The index of the video in the video playlist that is currently playing. Generally, you would only want to check this field if video playlists are enabled, but it is set to 0 when a single video is playing and video playlists are not enabled. |
| nextContentIndex | integer | -1 | READ_WRITE | If the **contentIsPlaylist** field is set to true, sets the index of the next video in the playlist to be played. Setting this field does not immediately change the video being played, but takes effect when the current video is completed or skipped. |
| control | option string | none | READ_WRITE | Sets the desired play state for the video, such as starting or stopping the video play. Getting the value of this field returns the most recent value set, or none if no value has been set. To dynamically monitor the actual state of the video, see the **state** field.<br /><br />The play and stop commands to commence and discontinue playback should not be used to implement trick modes like rewind or replay. For that, use the **seek** field.<br /><br />• **none**: No play state set<br />• **play**: Start video play<br />• **stop**: Stop video play<br />• **pause**: Pause video play<br />• **resume**: Resume video play after a pause<br />• **replay**: Replay video<br />• **prebuffer**: Starts buffering the video stream before the Video node actually begins playback. Only one video stream can be buffering in the application at any time.<br />• **skipcontent**: Skip the currently-playing content and begin playing the next content in the playlist. If the content is not a playlist, or if the current content is the end of the playlist, this will end playback. |
| asyncStopSemantics<br /><br />*Available since Roku OS 12.5* | boolean | false | WRITE | Indicates whether the STOP command is executed asynchronously (true) or synchronously (false).<br /><br />By default, the STOP command is executed synchronously, which blocks the UI thread. Enabling this field makes the STOP command non-blocking, which enables the video to be switched faster.<br /><br />When this field is enabled, the **state** field is set to stopping when the asynchronous stop begins, then changes to stopped once the stop has completed. |
| state | value string | none | READ_ONLY | Describes the current video play state, such as if the video play has been paused.<br /><br />• **none**: No current play state<br />• **buffering**: Video stream is currently buffering<br />• **playing**: Video is currently playing<br />• **paused**: Video is currently paused<br />• **stopping** *(available since Roku OS 12.5)*: Video is in the process of being stopped. This value is only returned if the **asyncStopSemantics** field is enabled.<br />• **stopped**: Video is currently stopped<br />• **finished**: Video has successfully completed playback<br />• **error**: An error has occurred in the video play. The error code, message, and diagnostics can be found in the **errorCode**, **errorMsg**, and **errorStr** fields respectively. |
| errorCode | integer | 0 | READ_ONLY | The error code associated with the video play error set in the **state** field:<br /><br />• **0**: no error<br />• **-1**: network error (server down or unresponsive, server is unreachable, network setup problem on the client)<br />• **-2**: connection timed out<br />• **-3**: unknown/unspecified or generic error<br />• **-4**: empty list; no streams were specified to play<br />• **-5**: media error; the media format is unknown or unsupported<br />• **-6**: DRM error<br /><br />Use the **errorStr** and **errorInfo** fields for more descriptive diagnostic information. |
| errorMsg | string | | READ_ONLY | An error message describing the video play error set in the **state** field. Use the **errorStr** and **errorInfo** fields for more descriptive diagnostic information. |
| errorStr | string | | READ_ONLY | A diagnostic message to help resolve the video play error set in the **state** field. See [**errorStr**](#errorstr). |
| errorInfo | roAssociativeArray | | READ_ONLY | A diagnostic message to help resolve the video play error set in the **state** field. See [**errorInfo**](#errorinfo). |
| decoderStats | roAssociativeArray | { } | READ_ONLY | Provides video decoder statistics related to the start of video playback. Set the **enableDecoderStats** field to true to enable updates to this field.<br /><br />• **renderCount** (integer): The number of frames rendered since playback started. Incremented each time a new frame is rendered.<br />• **repeatCount** (integer): The number of frames repeated since playback started. Incremented each time a new frame is not available in time and the current frame is rendered for an additional frame period.<br />• **frameDropCount** (integer): The number of frames dropped since playback started. Incremented each time the presentation time of a decoded frame is too old to be rendered and the next frame is rendered instead.<br />• **streamErrorCount** (integer): The number of bitstream errors since playback started. Incremented each time the decoder detects a bitstream error. |
| enableDecoderStats | boolean | false | READ_WRITE | Enables updates to the **decoderStats** field. |
| playbackActionButtons | roArray of roAssociativeArrays | [ ] | READ_WRITE | Component that shows the buttons and other specified UI elements on the pause screen at the start of playback. Each element in the array has the following fields:<br /><br />• **text** (string): Text for the button label. Defaults to the system default.<br />• **icon** (uri): A 9-patch or PNG of the icon to be displayed when the button does not have focus. Defaults to an empty string.<br />• **focusIcon** (uri): A 9-patch or PNG of the icon to be displayed when the button has focus. Defaults to an empty string.<br />• **buttonIsDisabled** (Boolean): Controls whether the button is disabled (true) or enabled (false). A disabled button is skipped and does not have focus while the user navigates the playback action buttons with the directional pad. Defaults to false. |
| playbackActionButtonSelected | integer | 0 | READ_WRITE | The index of the button that is selected in the **playbackActionButtons** field. |
| playbackActionButtonFocused | integer | 0 | READ_WRITE | The index of the button that has focus in the **playbackActionButtons** field. |
| playbackActionButtonFocusedTextFont | Font | SmallBoldSystemFont | WRITE | Specifies the font of the button label when the button has key focus. |
| playbackActionButtonUnfocusedTextFont | Font | SmallSystemFont | WRITE | Specifies the font of the button label when the button does not have key focus. |
| playbackActionButtonFocusedTextColor | Color | 0x121212FF | WRITE | Specifies the color of the button label text when the button has key focus. |
| playbackActionButtonUnfocusedTextColor | Color | 0xEFEFEFFF | WRITE | Specifies the color of the button label text when the button does not have key focus. |
| playbackActionButtonFocusIndicatorBlendColor | Color | - | WRITE | Specifies the button background color when the button has key focus. |
| subtitleSelectionPreferences<br /><br />*Available since Roku OS 12.5* | roAssociativeArray | { } | WRITE_ONLY | The significance and priority order of the attributes and values for the subtitle tracks available in the video stream. See [**subtitleSelectionPreferences**](#subtitleselectionpreferences). |
| audioSelectionPreferences<br /><br />*Available since Roku OS 12.5* | roAssociativeArray | { } | WRITE_ONLY | The significance and priority order of the attributes and values for the audio tracks available in the video stream. See [**audioSelectionPreferences**](#audioselectionpreferences). |

#### playStartInfo

Provides timing measurements related to the start of video playback. All measurements are in seconds.

| Key | Type | Access Permission | Description |
| --- | --- | --- | --- |
| total_dur | float | READ_ONLY | Total video start duration. |
| manifest_dur | float | READ_ONLY | Manifest download and parsing. |
| drm_load_dur | float | READ_ONLY | DRM system initialization. |
| drm_lic_acq_dur | float | READ_ONLY | License acquisition. This typically includes interactions with the license server. |
| prebuf_dur | float | READ_ONLY | Prebuffer content. |
| manifest_start | float | READ_ONLY | Point at which manifest download and parsing begins. |
| drm_load_start | float | READ_ONLY | Point at which DRM system initialization begins. |
| drm_lic_acq_start | float | READ_ONLY | Point at which license acquisition begins. |
| prebuf_start | float | READ_ONLY | Point at which content pre-buffering begins. |

> The **\*_start** fields correspond to the similarly named **\*_dur** (duration) fields in this structure. In each case, the **_start** point is the number of milliseconds elapsed from the initialization of the media player (t=0.000). If required, ending points for each interval can be derived from its associated starting point and duration.

#### errorStr

A diagnostic message to help resolve the video play error set in the **state** field. The format of **errorStr** is as follows:

```
category:{category_name}:error:{error_code}:ignored:{0|1}:{source}:{source_name}:{additional catcher comment}:{error_string}:extra:{error_attributes}
```

| Key | Type | Description |
| --- | --- | --- |
| category_name | string | The type of error, which includes: http, drm, mediaerror, or mediaplayer. |
| error_code | integer | The unique code associated with the error. |
| ignored | integer | Indicates whether the error generated an exception (0) or was ignored, resulting in the next item in the content list being played (1). |
| source | string | The module that generated the error. |
| source_name | string | The module that generated the error. |
| additional catcher comment | string | Typically, the comment added when the exception is caught. |
| error_string | string | A text message describing the video play error. |
| error_attributes | string | The error attribute, which includes the **clipId** (the unique ID of the clip that failed to play). |

#### errorInfo

A diagnostic message to help resolve the video play error set in the **state** field.

| Key | Type | Description |
| --- | --- | --- |
| clipId | integer | The unique ID for the clip. |
| ignored | integer | Indicates whether the error generated an exception (0) or was ignored, resulting in the next item in the content list being played (1). |
| source | string | The module that generated the error. |
| category | string | The type of error, which includes: http, drm, mediaerror, or mediaplayer. |
| errcode | integer | The internal Roku code associated with the error. Use the **dbgmsg** field for debugging. |
| dbgmsg | string | A verbose debug message that can help identify the root cause of the error. |
| drmerrcode | integer | The error code returned by the DRM system, if any, when a video player error occurs. |

#### subtitleSelectionPreferences

*Available since Roku OS 12.5*

The significance and priority order of the attributes and values for the subtitle tracks available in the video stream.

Provide the attribute fields from highest to lowest significance (for example, if **language** should take precedence over all other attributes, list it first). For the subtitle track languages, provide the language codes from highest to lowest priority (for example, if Spanish for Latin America and the Caribbean ["es-419"] has precedence over Spanish ["es"], list the language codes in the following order: ["es-419", "es"]).

| Key | Type | Description |
| --- | --- | --- |
| values | roArray of roAssociativeArrays | Specify values for the following subtitle track attributes. List the attributes from highest to lowest significance.<br /><br />• **language** (array of Strings): A list of language (ISO-639) / country (ISO-3166) codes for the subtitles. List the language codes in priority order, highest to lowest.<br />• **caption** (string): A flag indicating whether captions exist for the video stream. Equivalent to the HLS "public.accessibility.transcribes-spoken-dialog" characteristic.<br />• **descriptive** (string): A flag indicating whether descriptives exist for the music and sounds in the video stream. Equivalent to the HLS "public.accessibility.describes-music-and-sound" characteristic.<br />• **easyReader** (string): A flag indicating whether subtitles are easy to read. |
| overrideSystem | boolean | Whether to use the app's preferences over the system preferences (true), or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. Defaults to false. |

**Example**

```brightscript
video.subtitleSelectionPreferences = { values: [
    { language: ["es-419", "es", "es-*", "fr", "en-US", "en-UK", "en"] },
    { caption: "true" },
    { descriptive: ["false"] },
    { easyReader: "true" } ],
    overrideSystem: true }
```

**Explanation**

The subtitle language with the highest priority is "es" with a country code of "419". The next highest priority language is "es" with no country code, and then "es" with any country code.

#### audioSelectionPreferences

*Available since Roku OS 12.5*

The significance and priority order of the attributes and values for the audio tracks available in the video stream.

> A language matching any country code does not match a track that specifies the same language but with no country code.

Provide the attribute fields from highest to lowest significance (for example, if **language** should take precedence over **descriptive**, list **language** first). For the audio track languages, provide the language code values from highest to lowest priority (for example, if English for the United States ["en-US"] has precedence over English for the United Kingdom ["en-UK"], list the language codes in the following order: ["en-US", "en-UK"]).

| Key | Type | Description |
| --- | --- | --- |
| values | roArray of roAssociativeArrays | Specify values for the following audio track attributes. List the attributes from highest to lowest significance.<br /><br />• **language** (array of Strings): A list of language (ISO-639) / country (ISO-3166) codes for the audio track. List the languages in priority order, highest to lowest.<br />• **descriptive** (array of Strings): A flag indicating whether descriptives exist for the video playing in the stream. Equivalent to the HLS "public.accessibility.describes-video" characteristic. |
| overrideSystem | boolean | Whether to use the app's preferences over the system preferences (true), or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. Defaults to false. |

**Example**

```brightscript
video.audioSelectionPreferences = { values: [
    { language: ["en-US", "en-UK", "en", "en-*"] },
    { descriptive: "false" } ],
    overrideSystem: true }
```

**Explanation**

The audio language with the highest priority is "en-US". The next highest priority language is "en-UK", then "en" with no country code, and finally "en" with any country code.

---

### Trickplay fields

| Field | Type | Default | Access Permission | Description |
| --- | --- | --- | --- | --- |
| duration | time | 0 | READ_ONLY | The duration of the video being played, specified in seconds. This becomes valid when playback begins and may change if the video is dynamic content, such as a live event. |
| loop | Boolean | false | READ_WRITE | If set to true, the video or video playlist will be restarted from the beginning after the end is reached. |
| position | time | invalid | READ_ONLY | Time of the current position in the stream. Either UTC time or elapsed since start of stream depending on content type.<br /><br />As of Roku OS 9.3, when the video is paused, the position is recorded for that pause event. This means that playing, pausing, and resuming a video generates three separate positions. |
| positionInfo | roAssociativeArray | invalid | READ_ONLY | Information about the last rendered video and audio samples. All keys are READ_ONLY and default to invalid.<br /><br />• **audio** (double): Position of the last rendered audio sample, in seconds.<br />• **clip_id** (integer): The unique ID of the clip.<br />• **epoch** (integer): 0 means positions are relative to **videoStart**; 1 means positions are UTC.<br />• **video** (double): Position of the last rendered video sample, in seconds since epoch. |
| clipId | integer | 0 | READ_ONLY | The clip ID of the currently playing track. |
| notificationInterval | time | 0.5 | READ_WRITE | The interval between notifications to observers of the **position** field, specified as the number of seconds. If the value is 0, no notifications are delivered. This value may be read or modified at any time. |
| seek | time | invalid | WRITE_ONLY | Sets the current position in the video. The value is the number of seconds from the beginning of the stream, specified as a double. |
| seekMode | string | default | READ_WRITE | Determines the desired level of accuracy for seek behavior:<br /><br />• **default**: Seek to the closest sync frame (segment, or I-frame of a multi-frame segment) that is earlier than the requested seek time.<br />• **accurate**: Seek to the exact time requested if platform support (video decoder step function) is available. |
| autoplayAfterSeek | boolean | true | READ_WRITE | Enables video content to automatically play after rebuffering. Setting this flag to false disables this default behavior. |
| timedMetaData | roAssociativeArray | { } | READ_ONLY | The most recent timed metadata that has been decoded from the video stream. Only metadata with a key that matches an entry in **timedMetaDataSelectionKeys** will be set into this field. The value of this field is an associative array which contains arbitrary keys and values, as found in the video stream. |
| timedMetaData2 | roAssociativeArray | { } | READ_ONLY | Contains all the same information included in the **timedMetaData** field, plus additional fields. See [**timedMetaData2**](#timedmetadata2). |
| timedMetaDataSelectionKeys | array of strings | [ ] | READ_WRITE | If the video stream contains timed metadata such as ID3 tags, any metadata with a key matching an entry in this array is set into the **timedMetaData** field.<br /><br />For EMSG data, if any entry in this array is an asterisk, then all timed metadata is selected.<br /><br />HLS tags must be defined separately. |
| streamInfo | roAssociativeArray | invalid | READ_ONLY | Information about the video stream that is currently playing or buffering. See [**streamInfo**](#streaminfo). |
| completedStreamInfo | roAssociativeArray | invalid | READ_ONLY | Information about the video stream that most recently completed playing, due to an error, user action, or end of the stream. Consists of the same keys as [**streamInfo**](#streaminfo), plus **isFullResult**, a Boolean that, if true, indicates the stream played to completion, or if false, was interrupted by an error or user action. This field is set prior to the **state** field being changed, so **state** field observer callback functions can assume the associative array values are valid when the state field changes. |
| timeToStartStreaming | time | 0 | READ_ONLY | The time in seconds from playback being started until the video actually began playing. The minimum valid value is 1 millisecond, and this is only valid if the current value of the **state** field is playing. |
| bufferingStatus | roAssociativeArray | invalid | READ_ONLY | Information about stream buffering progress and status. Valid only while buffering is in progress, either at stream startup or when re-buffering is required. Observers are notified when any element changes, and also when buffering completes and the field itself becomes invalid.<br /><br />• **percentage** (integer): Percent buffering complete.<br />• **isUnderrun** (Boolean): Whether a stream underrun occurred.<br />• **prebufferDone** (Boolean): Whether the player has buffered enough data to begin playing immediately should **control** be set to play.<br />• **actualStart** (time): Automatically set when **prebufferDone** becomes true, specifying the actual time from which playback will resume. This may vary from the time requested in the content node's **playStart** field, depending on the capabilities of the player and the **seekMode** setting. |
| videoFormat | string | | READ_ONLY | Contains the format of the currently playing video stream. See [**videoFormat**](#videoformat). |
| pauseBufferStart | time | 0 | READ_ONLY | The beginning position of the video buffered when paused. This field is only valid for live video. |
| pauseBufferEnd | time | 0 | READ_ONLY | The ending position of the video buffered when paused. This field is only valid for live video. |
| pauseBufferPosition | time | 0 | READ_ONLY | The current presentation position of the video buffered when paused. This field is only valid for live video. |
| pauseBufferOverflow | Boolean | false | READ_ONLY | Indicates that the video buffer was not able to save all video since being paused. This field is only valid for live video. |
| pauseBufferEpochOffset | double | invalid | READ_ONLY | Enables apps to translate the relative time provided in the **pauseBuffer** fields to UTC time based on the wall-clock timing provided in live manifests/playlists. |
| streamingSegment | roAssociativeArray | { } | READ_ONLY | Information about the video segment that is currently streaming. Only meaningful for segmented video transports, such as DASH and HLS. See [**streamingSegment**](#streamingsegment). |
| downloadedSegment | roAssociativeArray | invalid | READ_ONLY | Information about the video segment that was just downloaded. Only meaningful for segmented video transports, such as DASH and HLS. See [**downloadedSegment**](#downloadedsegment). |
| enableLiveAvailabilityWindow | Boolean | false | READ_WRITE | Enables the scrubbing of the trickplay bar during the availability window of live linear streams. |
| enableThumbnailTilesDuringLive | Boolean | false | READ_WRITE | Enables the **thumbnailTiles** field to be set and updated in the case of live HLS and DASH streams which contain thumbnails, as the thumbnails become available.<br /><br />By default and when this is set to false, the **thumbnailTiles** field is not written during live streams to maintain backwards compatibility with older applications and to avoid performance or memory issues. |
| thumbnailTiles | roAssociativeArray | [ ] | READ_WRITE | Information about HLS and DASH standard thumbnail tiles as they are discovered within the manifest. See [**thumbnailTiles**](#thumbnailtiles). |
| trickPlayBackgroundOverlay | uri | | WRITE | The background overlay to be displayed whenever the playback UI is visible during the video playback experience. |

#### timedMetaData2

Contains all the same information included in the **timedMetaData** field, plus the following:

| Key | Type | Description |
| --- | --- | --- |
| data | roAssociativeArray | The values from the stream's metadata tag, as defined by the video provider. Keys are stream-defined and therefore not enumerated. |
| position | time | The Presentation Time Stamp (PTS) when the tag was seen. |
| source | enum | The metadata source. This may be one of the following string values: "emsg", "id3", "hls", or "unk". |

#### streamInfo

Information about the video stream that is currently playing or buffering.

| Key | Type | Description |
| --- | --- | --- |
| isUnderrun | Boolean | If true, the stream was downloaded due to an underrun. |
| isResume | Boolean | If true, playback was resumed after trickplay. |
| measuredBitrate | integer | The measured bitrate (bps) of the network when the stream was selected. |
| streamBitrate | integer | The bitrate of the stream. |
| streamUrl | URI | The URL of the stream. |

#### videoFormat

Contains the format of the currently playing video stream.

| Value | Type | Description |
| --- | --- | --- |
| "" | string | No stream playing. |
| none | string | Stream contains no playable video. |
| unknown | string | Stream contains unknown video. |
| hevc | string | ISO/IEC 23008-2, H.265, HEVC. |
| hevc_b | string | ISO/IEC 23008-2 Annex-B, H.265, HEVC. |
| mpeg1 | string | ISO/IEC 11172-2, MPEG-1 part 2, H.261. |
| mpeg2 | string | ISO/IEC 13818-2, MPEG-2 part 2, H.262. |
| mpeg4_2 | string | ISO/IEC 14496-2, MPEG-4 part 2, H.263. |
| mpeg4_10b | string | ISO/IEC 14496-10, MPEG-4 part 10 Annex-B, H.264, vc-1. |
| mpeg4_15 | string | ISO/IEC 14496-15, MPEG-4 part 15, H.264, vc-1. |
| AVC vc1 | string | vc-1. |
| wmv | string | Microsoft Windows Media Video. |

#### streamingSegment

Information about the video segment that is currently streaming. Only meaningful for segmented video transports, such as DASH and HLS.

| Key | Type | Description |
| --- | --- | --- |
| hdrModeStr | string | HDR format of the content, which may be one of the following values: invalid, unknown, none, hdr10, dolby_vision, hlg10, or sl-hdr2. |
| segBitrateBps | integer | Bitrate of the segment, in bits per second. |
| segSequence | integer | The sequence number of the segment in the video. |
| segStart | time | The start time of the segment from the start of the video, in seconds. |
| segUrl | string | URL of the segment. |
| segType | integer | Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux. |
| segTypeStr | string | Type of data in the segment: audio, video, captions, mux. |
| latency | integer | The time, in milliseconds, between the current live edge (or most recent available media segment on the CDN) and the segment currently being played. |
| path | string | A path indicating the Period, AdaptationSet, and Representation that is played. This is in UNIX directory notation as: &lt;period&gt;/&lt;adaptset&gt;/&lt;repr&gt;/&lt;segment&gt; |
| width | integer | For video segments, the width of the encoded video picture. |
| height | integer | For video segments, the height of the encoded video picture. |

#### downloadedSegment

Information about the video segment that was just downloaded. Only meaningful for segmented video transports, such as DASH and HLS.

| Key | Type | Description |
| --- | --- | --- |
| Status | integer | Status of the download: 0 = success, nonzero = error. |
| SegSequence | integer | Stream segment sequence number. |
| SegUrl | string | Stream segment URL (for example, a .ts file for HLS, or a stream fragment URL for smooth streaming). |
| DownloadDuration | integer | Amount of time spent downloading the segment, in milliseconds. |
| SegSize | integer | Segment size, in bytes. |
| SegType | integer | Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux. |
| BitrateBPS | integer | Bitrate of the segment, in bits per second. |
| SegStart | time | The start time of the segment from the start of the video, in seconds. |
| SegDuration | integer | The duration of the segment, in milliseconds. |
| Path | string | A path indicating the Period, AdaptationSet, and Representation that is played. This is in UNIX directory notation as: &lt;period&gt;/&lt;adaptset&gt;/&lt;repr&gt;/&lt;segment&gt; |
| Width | integer | For video segments, the width of the encoded video picture. |
| Height | integer | For video segments, the height of the encoded video picture. |
| HdrMode | integer | Indicates the HDR format of the content, which may be one of the following values: 0 (UNKNOWN), 1 (NONE/SDR), 2 (HDR10), 3 (DOLBY_VISION), 4 (HLG10), 5 (HDR10_PLUS), or 6 (SL_HDR2). |

#### thumbnailTiles

Information about HLS and DASH standard thumbnail tiles as they are discovered within the manifest for streams that contain them.

First introduced for VOD only in Roku OS 9.1. Starting with Roku OS 11.0, apps can enable this field for HLS and DASH live streams containing standard thumbnails by setting **enableThumbnailTilesDuringLive** to true.

> For Roku OS releases before 9.4, the **thumbnailTiles** associative array has the following structure: {tile_id: tile_set} (string to associative array).
>
> For Roku OS 9.4 and later, the **thumbnailTiles** associative array has the following structure: {tile_id: [tile_set, tile_set, tile_set, ...]} (string to array of associative arrays). This format allows discontinuous tile_sets of the same resolution to be grouped together as a "choice" for display.

The **tile_id** field is a unique string identifier for the **tile_set**, which is an associative array containing the attributes of the tile set as well as information about the thumbnails. The **tile_set** field contains the following fields:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| htiles | integer | 0 | Horizontal number of thumbnails in a tile (columns). |
| vtiles | integer | 0 | Vertical number of thumbnails in a tile (rows). |
| width | integer | 0 | Number of horizontal pixels in a thumbnail (this is not the same tile as the one in the DASH spec). |
| height | integer | 0 | Number of vertical pixels in a thumbnail (this is not the same tile as the one in the DASH spec). |
| bandwidth | integer | 0 | Max tile size in bits / duration. |
| duration | float | 0.0 | Duration of one tile in seconds (assuming a full tile). |
| initial_time | float | 0.0 | Presentation start time of the current **tile_set** in seconds. Thumbnails in tiles beginning before this time should be skipped, and the first relevant thumbnail duration should be updated accordingly. |
| final_time | float | 0.0 | End time of the current **tile_set** in seconds. |
| tiles | roArray | [ ] | Information about each tile in the **tile_set**. Each entry in the array is positional:<br /><br />• **url** (index 0, string): The URL of the tile.<br />• **start_time** (index 1, float): The start time of the tile, in seconds.<br />• **format** (index 2, string): Typically an empty string, but it may contain the tile format — jpeg, png, and so on. |

---

### UI fields

| Field | Type | Default | Access Permission | Description |
| --- | --- | --- | --- | --- |
| width | float | 0.0 | READ_WRITE | Sets the width of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the width of the entire display screen. |
| height | float | 0.0 | READ_WRITE | Sets the height of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the height of the entire display screen. |
| enableUI | Boolean | true | READ_WRITE | If set to true (the default), the entire Video node user interface (such as ProgressBar and TrickPlayBar nodes, and BIF navigation) appears in response to stream events and remote control key presses.<br /><br />If set to false, most of the Video node user interface will not be shown, and the application is expected to implement the UI. The one exception is the closed-caption dialog, which always appears when the video is playing fullscreen and the user presses the Options (*) button.<br /><br />When using the [Roku Advertising Framework (RAF)](/docs/developer-program/advertising/roku-advertising-framework.md), the RAF library may temporarily set this field to false while playing ads. |
| enableTrickPlay | Boolean | true | READ_WRITE | Controls whether trickplay is allowed during playback. When set to false, the user trickplay buttons on the remote will have no effect. This only applies when **enableUI** is set to true. |
| bifDisplay | BifDisplay node | internal instance default | READ_WRITE | Component that displays BIFs and allows navigation. See [**bifDisplay**](#bifdisplay). |
| trickPlayBar | TrickPlayBar node | internal instance default | READ_WRITE | The visible TrickPlayBar node. See [**trickPlayBar**](#trickplaybar). |
| bufferingBar | ProgressBar node | internal instance default | READ_WRITE | Component that shows the progress of re-buffering, after video playback has started. See [**bufferingBar**](#bufferingbar). |
| bufferingTextColor | color | system default | READ_WRITE | The color of the text displayed near the buffering bar defined by the **bufferingBar** field, when the buffering bar is visible. If this is 0, the system default color is used. |
| retrievingBar | ProgressBar node | internal instance default | READ_WRITE | Component that shows the progress of initial retrieving of the video, prior to starting playback. Its fields are the same as [**bufferingBar**](#bufferingbar). |
| retrievingTextColor | color | system default | READ_WRITE | The color of the text displayed near the retrieving bar, when the retrieving bar defined in the **retrievingBar** field is visible. If this is 0, the system default color is used. |
| pivotNode | renderable node | - | READ_WRITE | The visible pivot node. This is a generic renderable node that can be used to display any component. This node is only displayed when video is paused. |

#### bifDisplay

Component that displays BIFs and allows navigation. The fields of this internal node are as follows:

| Key | Type | Default | Access Permission | Description |
| --- | --- | --- | --- | --- |
| frameBgBlendColor | color | 0xFFFFFFFF | READ_WRITE | A color to be blended with the image displayed behind individual BIF images displayed on the screen. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place. |
| frameBgImageUri | uri | | READ_WRITE | The URI of an image to be displayed behind individual frames on the screen. The actual frame image is displayed opaquely on top of this background, so only the outer edges of this image are visible. Because of that, this background image typically appears as a border around the video frame. If the **frameBgBlendColor** field is set to a value other than the default, that color will be blended with the background image. |
| getNearestFrame | time | invalid | WRITE_ONLY | Requests the nearest BIF to the time specified. This would normally be an offset from the current playback position. The request is passed to the BifCache, which uses the getNearestFrame() method implemented on all BIF storage classes. Existing BifCache functionality is then used to retrieve the bitmap data and load it into the texture manager. |
| nearestFrame | string | | READ_ONLY | Contains the URI of the requested BIF. The returned URIs are of the form memory://BIF_%d_%d. These URIs can then be used directly in the **uri** field of a Poster node or similar. |

#### trickPlayBar

The visible TrickPlayBar node. The fields of this internal node are as follows:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| currentTimeMarkerBlendColor | color | 0xFFFFFFFF | Blended with the marker for the current playback position. This is typically a small vertical bar displayed in the TrickPlayBar node when the user is fast-forwarding or rewinding through the video. |
| textColor | color | system default | Sets the color of the text next to the TrickPlayBar node indicating the time elapsed or remaining. |
| thumbBlendColor | color | 0xFFFFFFFF | Sets the blend color of the square image in the TrickPlayBar node that shows the current position, with the current direction arrows or pause icon on top. |
| filledBarBlendColor | color | 0xFFFFFFFF | Blended with the graphical image specified in the **filledBarImageUri** field. |
| liveFilledBarBlendColor | color | 0xFFFFFFFF | The color of the trickplay progress bar to be blended with the **filledBarImageUri** field for live linear streams. |
| filledBarImageUri | uri | | A 9-patch or ordinary PNG of the bar that represents the completed portion of the work. This is typically displayed on the left side of the track. |
| trackBlendColor | color | 0xFFFFFFFF | Blended with the graphical image specified by the **trackImageUri** field. |
| trackImageUri | uri | | A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. |

#### bufferingBar

Component that shows the progress of re-buffering, after video playback has started. The fields of this internal node are as follows:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| width | float | system default | Sets a custom width for an instance of the ProgressBar node. |
| height | float | system default | Sets a custom height for an instance of the ProgressBar node. |
| emptyBarBlendColor | color | 0xFFFFFFFF | Blended with the graphical image specified in the **emptyBarImageUri** field. |
| emptyBarImageUri | uri | | A 9-patch or ordinary PNG of the bar presenting the remaining work to be done. This is typically displayed on the right side of the track. |
| filledBarBlendColor | color | 0xFFFFFFFF | Blended with the graphical image specified in the **filledBarImageUri** field. |
| filledBarImageUri | uri | | A 9-patch or ordinary PNG of the bar that represents the completed portion of the work. This is typically displayed on the left side of the track. |
| trackBlendColor | color | 0xFFFFFFFF | Blended with the graphical image specified by the **trackImageUri** field. |
| trackImageUri | uri | | A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. |
| percentage | integer | 0 | The percentage of the work that is done. Setting this field controls the visual appearance of the ProgressBar node. |

---

### Closed caption fields

| Field | Type | Default | Access Permission | Description |
| --- | --- | --- | --- | --- |
| globalCaptionMode | option string | Off | READ_WRITE | Sets the value of the global Roku closed-caption mode. This can be used to allow the user or the application to change the closed-caption mode in an application just before or during video playback. The possible options are:<br /><br />• **"Off"**: Turns the global Roku closed-caption mode off.<br />• **"On"**: Turns the global Roku closed-caption mode on.<br />• **"Instant replay"**: Sets the global Roku closed-caption setting to display captions only during instant replay.<br />• **"When mute"**: Sets the global Roku closed-caption setting to display captions only when the volume is muted. This only applies to Roku TVs.<br /><br />The app should set the **subtitleTrack** field regardless of the selected caption mode. |
| suppressCaptions | boolean | false | READ_WRITE | Suppresses the closed caption for the purpose of resolving conflicts in cases where UI elements are drawn.<br /><br />Note that most of the disabling and enabling of the captions is done by the Roku OS, including enabling closed caption for Instant Replay. |
| subtitleTrack | string | | READ_WRITE | The identifier of the selected subtitle track. Subtitles may or may not be visible on the screen, depending upon the user's caption mode setting.<br /><br />Reading this field returns the identifier of the subtitle track selected by the user. Writing the field changes the track.<br /><br />See also **globalCaptionMode**. |
| currentSubtitleTrack | string | | READ_ONLY | The identifier of the selected subtitle track. Reading this field returns the identifier of the subtitle track that is playing. When the user has not selected a track, the Roku media player selects a track based on the preferred caption language system setting. |
| availableSubtitleTracks | roArray of roAssociativeArrays | [ ] empty array | READ_ONLY | The list of subtitle tracks available in the video stream. See [**availableSubtitleTracks**](#availablesubtitletracks). |
| captionStyle | roAssociativeArray | system default | READ_WRITE | Allows apps to style closed captions. See [**captionStyle**](#captionstyle). |

#### availableSubtitleTracks

The list of subtitle tracks available in the video stream. The array is initially populated with the tracks specified in the Content Meta-Data, and additional tracks are added if they are detected by the digital video player. Each associative array has the following entries:

| Key | Type | Description |
| --- | --- | --- |
| Description | string | Descriptive name of the subtitle track. |
| Language | string | ISO 639-2 three-letter language code. |
| TrackName | string | The track identifier. The value of this field may be used to select the subtitle track. |
| HasAccessibilityDescription | boolean | *Available since Roku OS 13.0.* HLS: represents "public.accessibility.describes-music-and-sound". |
| HasAccessibilityCaption | boolean | *Available since Roku OS 13.0.* HLS: represents "public.accessibility.transcribes-spoken-dialog". DASH: subtitle track contains captions. |
| HasAccessibilitySign | boolean | *Available since Roku OS 13.0.* DASH: subtitle track contains a sign-language interpretation of an audio component. |

#### captionStyle

Allows apps to style closed captions. For any keys absent from the associative array, or for unexpected values, the default value is assumed for that property.

| Property | Type | Possible values |
| --- | --- | --- |
| Text/Font | string | Default, Serif Fixed Width, Serif Proportional, Sans Serif Fixed Width, Sans Serif Proportional, Casual, Cursive, Small Caps |
| Text/Effect | string | Default, None, Raised, Depressed, Uniform, Drop shadow (left), Drop shadow (right) |
| Text/Size | string | Default, Large, Medium, Small |
| Text/Color | string | Default, White, Black, Red, Green, Blue, Yellow, Magenta, Cyan |
| Text/Opacity | string | Default, 25%, 50%, 75%, 100% |
| Background/Color | string | Default, White, Black, Red, Green, Blue, Yellow, Magenta, Cyan |
| Background/Opacity | string | Default, Off, 25%, 50%, 75%, 100% |
| Window/Color | string | Default, White, Black, Red, Green, Blue, Yellow, Magenta, Cyan |
| Window/Opacity | string | Default, Off, 25%, 50%, 75%, 100% |

---

## Sample app

[VideoExample](https://github.com/rokudev/samples/tree/master/media/VideoExample) is a sample app demonstrating Video in action.
