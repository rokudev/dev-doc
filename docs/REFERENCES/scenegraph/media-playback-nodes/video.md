---
title: Video
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


Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md)

The Video node class provides a controlled play of live or VOD video.

The Video node includes a wide variety of internal nodes to support trick play, playback buffering indicators, and so forth. Playback buffering indicators, to indicate buffering before initial playback as well as re-buffering, use an internal instance of a ProgressBar node. For trick play, an internal instance of a TrickPlayBar node is provided. For display of BIF images for DVD-like chapter selection, an internal instance of a BIFDisplay node is provided.

Starting from Roku OS 8, the behavior of the Roku system overlay is such that the system overlay now slides in whenever the * button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.

## Fields

### Playback fields

To set the specific video playback parameters for a particular video, set the [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md) attributes for the video in a [ContentNode](/docs/references/scenegraph/control-nodes/contentnode.md) node, and assign the ContentNode to the `content` field of the Video node.

Video playback can then be controlled by setting the value of the `control` field, such as setting the field value to `play` to begin playback.

The `control` field includes a `prebuffer` option, which allows the video to begin buffering without showing the video. You can use this option to begin buffering of a video before a user has actually selected and started the video, such as when the user is looking at information about various video offerings in a list or grid or another type of UI element. This can eliminate much or all of the apparent delay in starting the video due to buffering the video for the user. For example, you could set the `control` field value to `prebuffer` in a callback function triggered by the `itemFocused` events that occur as a user scrolls down a list of video offerings that also display information about each video. When the user makes the selection, you can begin the actual video playback by setting the `control` field value to `play` in a callback function triggered by the `itemSelected` event for the list.


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>ContentNode</td>
<td>NULL</td>
<td>READ_WRITE</td>
<td>The ContentNode with the <a href="/docs/developer-program/getting-started/architecture/content-metadata.md">Content Meta-Data</a> for the video, or a video playlist (a sequence of videos) to be played.<br /><br />If a video playlist is to be played, the children of this ContentNode comprise the playlist, and each ContentNode child must have all attributes required to play that video. For example, if the videos "A" and "B" are to be played, three ContentNodes must be created: the parent ContentNode (which is largely ignored), one ContentNode child for "A," and one ContentNode child for "B." The parent node is set into this content field, and when video playback is started, all of its children will be played in sequence. Any changes made to the playlist after playback has started are ignored. See the <code>contentIsPlaylist</code> and <code>contentIndex</code> fields, for more information on playlists.</td>
</tr>
<tr>
<td>playStartInfo</td>
<td>roAssociativeArray</td>
<td></td>
<td>READ_ONLY</td>
<td>Provides timing measurements related to the start of video playback. All measurements are in seconds. <br /><br />The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Access Permission</th><th>Description</th></tr></thead><tbody><tr><td>total_dur</td><td>float</td><td>READ_ONLY</td><td>Total video start duration.</td></tr><tr><td>manifest_dur</td><td>float</td><td>READ_ONLY</td><td>Manifest download and parsing.</td></tr><tr><td>drm_load_dur</td><td>float</td><td>READ_ONLY</td><td>DRM system initialization.</td></tr><tr><td>drm_lic_acq_dur</td><td>float</td><td>READ_ONLY</td><td>License acquisition. This typically includes interactions with the license server.</td></tr><tr><td>prebuf_dur</td><td>float</td><td>READ_ONLY</td><td>Prebuffer content.</td></tr><tr><td>manifest_start</td><td>Float</td><td>READ_ONLY</td><td>Point at which manifest download and parsing begins.</td></tr><tr><td>drm_load_start</td><td>Float</td><td>READ_ONLY</td><td>Point at which DRM system initialization begins.</td></tr><tr><td>drm_lic_acq_start</td><td>Float</td><td>READ_ONLY</td><td>Point at which license acquisition begins.</td></tr><tr><td>prebuf_start</td><td>Float</td><td>READ_ONLY</td><td>Point at which content pre-buffering begins.</td></tr></tbody></table><br /><blockquote><p>The _start fields correspond to the similarly named _dur (duration) fields in this structure. In each case, the _start point is the number of milliseconds elapsed from the initialization of the media player (t=0.000). If required, ending points for each interval can be derived from its associated starting-point and duration.</p></blockquote></td>
</tr>
<tr>
<td>licenseStatus</td>
<td>roAssociativeArray</td>
<td></td>
<td>READ_ONL</td>
<td>Indicates whether the DRM license was acquired. If a failure occurs, this field provides additional details about the error. The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>response</td><td>string</td><td>The server response. If a license is not retrieved, the response is empty and the HTTP response code is returned instead.</td></tr><tr><td>status</td><td>string</td><td>The HTTP response code.</td></tr><tr><td>keysystem</td><td>string</td><td>The DRM technology used.</td></tr><tr><td>duration</td><td>string</td><td>The total time elapsed in sending a request to the license server and receiving a response (in milliseconds).</td></tr></tbody></table><br /></td>
</tr>
<tr>
<td>contentIsPlaylist</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If set to true, enables video playlists (a sequence of videos to be played). See the <code>content</code> and <code>contentIndex</code> field for more information on playlists.</td>
</tr>
<tr>
<td>contentIndex</td>
<td>integer</td>
<td>-1</td>
<td>READ_ONLY</td>
<td>The index of the video in the video playlist that is currently playing. Generally, you would only want to check this field if video playlists are enabled (by setting the <code>contentIsPlaylist</code> field to true), but it is set to 0 when a single video is playing, and video playlists are not enabled.</td>
</tr>
<tr>
<td>nextContentIndex</td>
<td>integer</td>
<td>-1</td>
<td>READ_WRITE</td>
<td>If the <code>contentIsPlaylist</code> field is set to true to enable video playlists, sets the index of the next video in the playlist to be played. Setting this field does not immediately change the video being played, but takes effect when the current video is completed or skipped. By default, this value is -1, which performs the default index increment operation. After the video specified by the index in this field begins playing, the field is set to the default -1 again, so the next video played will be set by the default index increment operation unless the field is set again to a different index.</td>
</tr>
<tr>
<td>control</td>
<td>option string</td>
<td>none</td>
<td>READ_WRITE</td>
<td>Sets the desired play state for the video, such as starting or stopping the video play. Getting the value of this field returns the most recent value set, or none if no value has been set. To dynamically monitor the actual state of the video, see the <code>state</code> field.<br /><br />The play and stop commands to commence and discontinue playback should not be used to implement trick modes like rewind, or replay. For that use the <code>seek</code> field.<br /><br /><table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>none</td><td>No play state set</td></tr><tr><td>play</td><td>Start video play</td></tr><tr><td>stop</td><td>Stop video play</td></tr><tr><td>pause</td><td>Pause video play</td></tr><tr><td>resume</td><td>Resume video play after a pause</td></tr><tr><td>replay</td><td>Replay video</td></tr><tr><td>prebuffer</td><td>Starts buffering the video stream before the Video node actually begins playback. Only one video stream can be buffering in the application at any time. Setting the <code>control</code> field to <code>prebuffer</code> for another video stream after setting <code>prebuffer</code> for a previous video stream stops the buffering of the previous video stream.</td></tr><tr><td>skipcontent</td><td>Skip the currently-playing content and begin playing the next content in the playlist. If the content is not a playlist, or if the current content is the end of the playlist, this will end playback.</td></tr></tbody></table></td>
</tr>
<tr>
<td>asyncStopSemantics<br /><br /><em>Available since Roku OS 12.5</em></td>
<td>boolean</td>
<td>false</td>
<td>WRITE</td>
<td>Indicates whether the "STOP" command is executed asynchronously (true) or synchronously (false). <br /><br />By default, the STOP command is executed synchronously, which blocks the UI thread. Enabling this field makes the STOP command non-blocking, which enables the video to be switched faster. <br /><br />When this field is enabled, the <code>state</code> field is set to "stopping" when the asynnchronous stop begins. The <code>state</code> field then changes to "stopped" once the stop has been completed.<br /><br />Any other media player component calls on the UI thread that require the Video node to be re-instantiated should be blocked until the asynnchronous stop has been completed (for example, updating the <code>control</code> field to "Play" or "Prebuffer" or updating the <code>seek</code> field). This is because a video node in the "stopping" state is still using the underlying media player, which is not available at that time. As a result, performing these types of operations on a different video while in the "stopping" state may result in a playback failure.</td>
</tr>
<tr>
<td>state</td>
<td>value string</td>
<td>none</td>
<td>READ_ONLY</td>
<td>Describes the current video play state, such as if the video play has been paused.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>none</td><td>No current play state</td></tr><tr><td>buffering</td><td>Video stream is currently buffering</td></tr><tr><td>playing</td><td>Video is currently playing</td></tr><tr><td>paused</td><td>Video is currently paused</td></tr><tr><td>stopping<br /><br /><em>Available since Roku OS 12.5</em></td><td>Video is in the process of being stopped. This value is only returned if the <code>asyncStopSemantics</code> field is enabled.</td></tr><tr><td>stopped</td><td>Video is currently stopped</td></tr><tr><td>finished</td><td>Video has successfully completed playback</td></tr><tr><td>error</td><td>An error has occurred in the video play. The error code, message, and diagnostics can be found in the <code>errorCode</code>, <code>errorMsg</code>, and <code>errorStr</code> fields respectively.</td></tr></tbody></table></td>
</tr>
<tr>
<td>errorCode</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The error code associated with the video play error set in the <code>state</code> field: <pre><code>-  0    no error                                                     <br />- -1    network error (server down or unresponsive, server is unreachable, network setup problem on the client).<br />- -2    connection timed out                                         <br />- -3    unknown/unspecified or generic Error                         <br />- -4    empty list; no streams were specified to play                <br />- -5    media error; the media format is unknown or unsupported      <br />- -6    DRM error</code></pre><br />Use the <strong>errorStr</strong> and and <strong>errorInfo</strong> fields for more descriptive diagnostic information to help identify and resolve the cause of the error.</td>
</tr>
<tr>
<td>errorMsg</td>
<td>string</td>
<td></td>
<td>READ_ONLY</td>
<td>An error message describing the video play error set in the <code>state</code> field.<br /><br />Use the <strong>errorStr</strong> and and <strong>errorInfo</strong> fields for more descriptive diagnostic information to help identify and resolve the cause of the error.</td>
</tr>
<tr>
<td>errorStr</td>
<td>string</td>
<td></td>
<td>READ_ONLY</td>

<td>A diagnostic message to help resolve the video play error set in the <code>state</code> field.<br /><br />The format of the errorStr is as follows:<br /><br /><table><thead><tr><th>errorStr Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>category_name</td><td>string</td><td>The type of error, which includes: "http", "drm", "mediaerror", or "mediaplayer".</td></tr><tr><td>error_code</td><td>integer</td><td>The unique code associated with the error.</td></tr><tr><td>ignored</td><td>integer</td><td>Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1).</td></tr><tr><td>source</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>source_name</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>additional catcher comment</td><td>string</td><td>Typically, the comment added when the exception is caught.</td></tr><tr><td>error_string</td><td>string</td><td>A text message describing the video play error.</td></tr><tr><td>error_attributes</td><td>string</td><td>The error attribute, which includes the clipId (the unique ID of the clip that failed to play).</td></tr></tbody></table></td>

</tr>
<tr>
<td>errorInfo</td>
<td>roAssociativeArray</td>
<td></td>
<td>READ_ONLY</td>
<td>A diagnostic message to help resolve the video play error set in the <code>state</code> field.<br /><br />The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>clipId</td><td>integer</td><td>The unique ID for the clip</td></tr><tr><td>ignored</td><td>integer</td><td>Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1).</td></tr><tr><td>source</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>category</td><td>String</td><td>The type of error, which includes: "http", "drm", "mediaerror", or "mediaplayer".</td></tr><tr><td>errcode</td><td>integer</td><td>The internal Roku code associated with the error.  Use the <strong>dbgmsg</strong> field for debugging.</td></tr><tr><td>dbgmsg</td><td>string</td><td>A verbose debug message that can help identify the root cause of the error.</td></tr><tr><td>drmerrcode</td><td>integer</td><td>The error code returned by the DRM system, if any, when a video player error occurs</td></tr></tbody></table></td>
</tr>
<tr>
  <td>decoderStats</td>
  <td>roAssociativeArray</td>
  <td>{}</td>
  <td>READ_ONLY</td>
  <td>Provides video decoder statistics related to playback.</td>
</tr>
<tr>
  <td>enableDecoderStats</td>
  <td>boolean</td>
  <td>false</td>
  <td>READ_WRITE</td>
  <td>Enables updates to the <strong>decoderStats</strong> field.</td>
</tr>
<tr>
<td>playbackActionButtons</td>
<td>roArray of roAssociativeArrays</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Component that shows the buttons and other specified UI elements on the pause screen at the start of playback. Each element in the array has following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>system default</td><td>Text for the button label</td></tr><tr><td>icon</td><td>uri</td><td>""</td><td>A 9-patch or PNG of the icon to be displayed when the button does not have.</td></tr><tr><td>focusIcon</td><td>uri</td><td>""</td><td>A 9-patch or PNG of the icon to be displayed when the button has focus.</td></tr><tr><td>buttonIsDisabled</td><td>Boolean</td><td>false</td><td>Controls whether the button is disabled (true) or enabled (false). A disabled button is skipped and does not have focus while the user navigates the different playback action buttons with the directional pad on the Roku remote control.</td></tr></tbody></table></td>
</tr>
<tr>
<td>playbackActionButtonSelected</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>The index of the button that is selected in the <strong>playbackActionButtons</strong> field.</td>
</tr>
<tr>
<td>playbackActionButtonFocused</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>The index of the button that has focus in the <strong>playbackActionButtons</strong> field.</td>
</tr>
<tr>
<td>playbackActionButtonFocusedTextFont</td>
<td>Font</td>
<td>SmallBoldSystemFont</td>
<td>WRITE</td>
<td>Specifies the font of the button label when the button has key focus.</td>
</tr>
<tr>
<td>playbackActionButtonUnfocusedTextFont</td>
<td>Font</td>
<td>SmallSystemFont</td>
<td>WRITE</td>
<td>Specifies the font of the button label when the button does not have key focus.</td>
</tr>
<tr>
<td>playbackActionButtonFocusedTextColor</td>
<td>Color</td>
<td>OX121212FF</td>
<td>WRITE</td>
<td>Specifies the color of the button label text when the button has key focus.</td>
</tr>
<tr>
<td>playbackActionButtonUnfocusedTextColor</td>
<td>Color</td>
<td>0xEFEFEFFF</td>
<td>WRITE</td>
<td>Specifies the color of the button label text when the button does not have key focus.</td>
</tr>
<tr>
<td>playbackActionButtonFocusIndicatorBlendColor</td>
<td>Color</td>
<td>-</td>
<td>WRITE</td>
<td>Specifies the button background color when the button has key focus.</td>
</tr>
<tr>
<td>subtitleSelectionPreferences<br /><br />(<em>Available since Roku OS 12.5</em>)</td>
<td>oAssociativeArray</td>
<td>\{ \}</td>
<td>WRITE_ONLY</td>
<td>The significance and priority order of the attributes and values for the subtitle tracks available in the video stream.<br /><br /> Provide the attribute fields from highest to lowest significance (for example, if <strong>language</strong> should take precedence over all other attributes, list it first). For the subtitle track languages, provide the language codes from highest to lowest priority (for example, if Spanish for Latin America and the Caribbean ["es-419"] has precedence over Spanish ["es"], list the language codes in the following order: ["es-419", "es"].<br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>values</td><td>roArray of roAssociativeArrays</td><td>Specify values for the following subtitle track attributes. List the attributes from highest to lowest significance.<br />$\{subtitle-selection-values-table\}</td></tr><tr><td>overrideSystem</td><td>boolean</td><td>Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false.</td></tr></tbody></table><br /><br /><strong>Example</strong><br /><pre><code><code>&lt;br /&gt;video.subtitleSelectionPreferences = \\\{ values: [&lt;br /&gt;    \\\{ language: ["es-419", "es", "es-*", "fr", "en-US", "en-UK", "en"] \\\},&lt;br /&gt;    \\\{ caption: "true" \\\},&lt;br /&gt;    \\\{ descriptive: ["false"] \\\},&lt;br /&gt;    \\\{ easyReader: "true" \\\} ],&lt;br /&gt;    overrideSystem: true \\\}&lt;br /&gt;</code></code></pre><br /><strong>Explanation</strong><br /><br />The subititle language with the highest priority is "es" with a country code of "419". The next highest priority language is "es" with no country code, and then "es" with any country code.</td>
</tr>
<tr>
<td>audioSelectionPreferences<br /><br />(<em>Available since Roku OS 12.5</em>)</td>
<td>roAssociativeArray</td>
<td>\{ \}</td>
<td>WRITE_ONLY</td>
<td>The significance and priority order of the attributes and values for the audio tracks available in the video stream.<br /><br /><blockquote><p>A language matching any country code does not match a track that specifies the same language but with no country code.</p></blockquote><br />Provide the attribute fields from highest to lowest significance (for example, if the <strong>language</strong> should take precedence over the <strong>description</strong>, list <strong>language</strong> first. For the audio track languages, provide the language code values from highest to lowest priority (for example, if English for the United States ["en-US"] has precedence over English for the United Kingdom ["en-UK"], list the language codes in the following order: ["en-US", "en-UK"].<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>values</td><td>roArray of roAssociativeArrays</td><td>Specify values for the following audio track attributes. List the attributes from highest to lowest significance.<br />$\{audio-track-selection-values-table\}</td></tr><tr><td>overrideSystem</td><td>boolean</td><td>Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false.</td></tr></tbody></table><br /><br /><strong>Example</strong><br /><pre><code><code>&lt;br /&gt;video.audioSelectionPreferences = \\\{ values: [&lt;br /&gt;    \\\{ language: ["en-US", "en-UK", "en", "en-*"] \\\},&lt;br /&gt;    \\\{ descriptive: "false" \\\} ],&lt;br /&gt;    overrideSystem: true \\\}&lt;br /&gt;</code></code></pre><br /><strong>Explanation</strong><br /><br />The audio language with the highest priority is "en-US". The next highest priority language is "en-UK", then "en" with no country code, and finally "en" with any country code.</td>
</tr>
</tbody>
</table>

### Trickplay fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>time</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The duration of the video being played, specified in seconds. This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td>
</tr>
<tr>
<td>loop</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If set to true, the video or video playlist (if the <code>contentIsPlaylist</code> field is set to true to enable video playlists) will be restarted from the beginning after the end is reached.</td>
</tr>
<tr>
<td>position</td>
<td>time</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Time of the current position in the stream. Either UTC time or elapsed since start of stream depending on content type. <br /><br />As of Roku OS 9.3, when the video is paused, the position is recorded for that pause event. This means that playing, pausing, and resuming a video generates three separate positions.</td>
</tr>
<tr>
<td>positionInfo</td>
<td>roAssociativeArray</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Contains the following fields that provide information about the last rendered video and audio samples.<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Access Permission</th><th>Description</th></tr></thead><tbody><tr><td>audio</td><td>double</td><td>invalid</td><td>READ_ONLY</td><td>Position of the last rendered audio sample, specified in seconds</td></tr><tr><td>clip_id</td><td>integer</td><td>invalid</td><td>READ_ONLY</td><td>The unique ID of the clip</td></tr><tr><td>epoch</td><td>integer</td><td>invalid</td><td>READ_ONLY</td><td>0 means positions are relative to videoStart; 1 means that positions are utc</td></tr><tr><td>video</td><td>double</td><td>invalid</td><td>READ_ONLY</td><td>The value of this field is double/float, in seconds since epoch.Position of the last rendered video sample, specified in seconds</td></tr></tbody></table></td>
</tr>
<tr>
<td>clipId</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The clip ID of the currently playing track.</td>
</tr>
<tr>
<td>notificationInterval</td>
<td>time</td>
<td>0.5</td>
<td>READ_WRITE</td>
<td>The interval between notifications to observers of the position field, specified as the number of seconds. If the value is 0, no notifications are delivered. This value may be read or modified at any time.</td>
</tr>
<tr>
<td>seek</td>
<td>time</td>
<td>invalid</td>
<td>WRITE_ONLY</td>
<td>Sets the current position in the video. The value is the number seconds from the beginning of the stream, specified as a double.</td>
</tr>
<tr>
<td>seekMode</td>
<td>string</td>
<td>"default"</td>
<td>READ_WRITE</td>
<td>Determines the desired level of accuracy for seek behavior:<br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>default</td><td>Seek to the closest sync frame (segment, or I-frame of a multi-frame segment) that is earlier than the requested seek time.</td></tr><tr><td>accurate</td><td>Seek to the exact time requested if platform support (video decoder step function) is available.</td></tr></tbody></table><br /></td>
</tr>
<tr>
<td>autoplayAfterSeek</td>
<td>boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>Enables video content to automatically play after rebuffering. Setting this flag to false disables this default behavior.</td>
</tr>
<tr>
<td>timedMetaData</td>
<td>associative array</td>
<td>\{ \}</td>
<td>READ_ONLY</td>
<td>The most recent timed meta data that has been decoded from the video stream. Only meta data with a key that matches an entry in timedMetaDataSelectionKeys will be set into this field. The value of this field is an associative array which contains arbitrary keys and values, as found in the video stream.</td>
</tr>
<tr>
<td>timedMetaData2</td>
<td>associative array</td>
<td>\{ \}</td>
<td>READ_ONLY</td>
<td>This field contains all the same information included in the <strong>timedMetaData</strong> field and the following additional fields:<br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>data</td><td>associative array</td><td>The values from the stream's metadata tag, as defined by video provider.</td></tr><tr><td>position</td><td>time</td><td>The Presentation Time Stamp (PTS) when the tag was seen.</td></tr><tr><td>source</td><td>enum</td><td>This may be one of the following string values: $\{source-enum-list\}</td></tr></tbody></table></td>
</tr>
<tr>
<td>timedMetaDataSelectionKeys</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>If the video stream contains timed meta data such as ID3 tags, any meta data with a key matching an entry in this array is set into the timedMetaData field.<br /><br />For EMSG data, if any entry in this array is "*", then all timed meta data is selected.<br /><br />HLS tags must be defined separately.</td>
</tr>
<tr>
<td>streamInfo</td>
<td>associative array</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Information about the video stream that is currently playing or buffering.<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>isUnderrun</td><td>Boolean</td><td>If true, the stream was downloaded due to an underrun</td></tr><tr><td>isResume</td><td>Boolean</td><td>If true, playback was resumed after trickplay</td></tr><tr><td>measuredBItrate</td><td>Integer</td><td>The measured bitrate (bps) of the network when the stream was selected</td></tr><tr><td>streamBitrate</td><td>Integer</td><td>The bitrate of the stream</td></tr><tr><td>streamUrl</td><td>URI</td><td>The URL of the stream</td></tr></tbody></table></td>
</tr>
<tr>
<td>completedStreamInfo</td>
<td>associative array</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Information about the video stream that most recently completed playing, due to an error, user action, or end of the stream. The associative array consists of the same keys as for the <code>streaminfo</code> field, with one additional key, <code>isFullResult</code>, a Boolean type that, if true indicates the <code>stream</code> played to completion, or if false, was interrupted by an error or user action. This field is set prior to the <code>state</code> field being changed, so <code>state</code> field observer callback functions can assume that the associative array values are valid when the state field changes.</td>
</tr>
<tr>
<td>timeToStartStreaming</td>
<td>time</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The time in seconds from playback being started until the video actually began playing. The minimum valid value is 1 millisecond, and this is only valid if the current value of the <code>state</code> field is <code>playing</code>. When the state field value is not <code>playing</code>, the value will be 0. This field is updated prior to the <code>state</code> field changing, so <code>state</code> field observer callback functions can assume this field is valid after the <code>state</code> field value changes to <code>playing</code>.</td>
</tr>
<tr>
<td>bufferingStatus</td>
<td>associative array</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Contains information about stream buffering progress and status. This field is valid only while buffering is in progress, both at stream startup or when re-buffering is required. Observers will be notified when any element of the array changes, and also when buffering is complete and the field itself becomes invalid. The array contains the following name - value pairs.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>percentage</td><td>Percent buffering complete as an integer.</td></tr><tr><td>isUnderrun</td><td>Boolean value indicating if a stream underrun occurred.</td></tr><tr><td>prebufferDone</td><td>A boolean value that indicates whether the player has buffered enough data to allow the player to begin playing immediately should "control" be set to "play."</td></tr><tr><td>actualStart</td><td>A time value that is automatically set when prebufferDone becomes true, specifying the actual time from which playback will resume. This may vary from the time requested in the content node's playStart field, depending on the capabilities of the player and the seekMode setting.</td></tr></tbody></table><br /><blockquote><p>While it is possible to use the Video node seek field to specify the seek time, it is recommended that apps do the following:</p><ol><li>Set the content node field playStart in seek-to-pause scenarios.</li><li>In the video node, set "control" to "prebuffer".</li><li>Wait for "prebufferDone" to become "true".</li><li>Check "actualStart" (if desired).</li><li>Set "control" to "play".</li></ol></blockquote></td>
</tr>
<tr>
<td>videoFormat</td>
<td>string</td>
<td></td>
<td>READ_ONLY</td>
<td>Contains the format of the currently playing video stream.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>""</td><td>No stream playing</td></tr><tr><td>none</td><td>Stream contains no playable video</td></tr><tr><td>unknown</td><td>Stream contains unknown video</td></tr><tr><td>hevc</td><td>ISO/IEC 23008-2, H.265, HEVC</td></tr><tr><td>hevc_b</td><td>ISO/IEC 23008-2 Annex-B, H.265, HEVC</td></tr><tr><td>mpeg1</td><td>ISO/IEC 11172-2, MPEG-1 part 2, H.261</td></tr><tr><td>mpeg2</td><td>ISO/IEC 13818-2, MPEG-2 part 2, H.262</td></tr><tr><td>mpeg4_2</td><td>ISO/IEC 14496-2, MPEG-4 part 2, H.263</td></tr><tr><td>mpeg4_10b</td><td>ISO/IEC 14496-10, MPEG-4 part 10 Annex-B, H.264, vc-1</td></tr><tr><td>mpeg4_15</td><td>ISO/IEC 14496-15, MPEG-4 part 15, H.264, vc-1</td></tr><tr><td>AVC vc1</td><td>vc-1</td></tr><tr><td>wmv</td><td>Microsoft Windows Media Video</td></tr><tr><td>vp8</td><td>VP8 codec</td></tr><tr><td>vp9</td><td>VP9 codec</td></tr></tbody></table></td>
</tr>
<tr>
<td>pauseBufferStart</td>
<td>time</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The beginning position of the video buffered when paused. This field is only valid for live video.</td>
</tr>
<tr>
<td>pauseBufferEnd</td>
<td>time</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The ending position of the video buffered when paused. This field is only valid for live video.</td>
</tr>
<tr>
<td>pauseBufferPosition</td>
<td>time</td>
<td>0</td>
<td>READ_ONLY</td>
<td>The current presentation position of the video buffered when paused. This field is only valid for live video.</td>
</tr>
<tr>
<td>pauseBufferOverflow</td>
<td>Boolean</td>
<td>false</td>
<td>READ_ONLY</td>
<td>Indicates that the video buffer was not able to save all video since being paused. This field is only valid for live video.</td>
</tr>
<tr>
<td>pauseBufferEpochOffset</td>
<td>double</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Enables apps to translate the relative time provided in the <strong>pauseBuffer</strong> fields to UTC time based on the wall-clock timing provided in live manifests/playlists.</td>
</tr>
<tr>
<td>streamingSegment</td>
<td>associative array</td>
<td>\{ \}</td>
<td>READ_ONLY</td>
<td>Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>hdrModeStr</td><td>string</td><td>HDR format of the content, which may be one of the following values: "invalid", "unknown", "none", "hdr10", "dolby_vision", "hlg10", "hdr10", "sl-hdr2".</td></tr><tr><td>segBitrateBps</td><td>integer</td><td>Bitrate of the segment in bits per second</td></tr><tr><td>segSequence</td><td>integer</td><td>The sequence number of the segment in the video</td></tr><tr><td>segStart</td><td>time</td><td>The start time of the segment from the start of the video, specified in seconds</td></tr><tr><td>segUrl</td><td>string</td><td>URL of the segment</td></tr><tr><td>segType</td><td>integer</td><td>Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux</td></tr><tr><td>segTypeStr</td><td>String</td><td>Type of data in the segment:  "audio", "video", "captions",  "mux"</td></tr><tr><td>latency</td><td>integer</td><td>The time, in milliseconds, between the current live edge (or most recent available media segment on the CDN) and the segment currently being played.</td></tr><tr><td>path</td><td>string</td><td>A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: \<period\>/\<adaptset\>/\<repr\>/\<segment\></td></tr><tr><td>width</td><td>integer</td><td>For video segments, the width of the encoded video picture</td></tr><tr><td>height</td><td>integer</td><td>For video segments, the height of the encoded video picture</td></tr></tbody></table></td>
</tr>
<tr>
<td>downloadedSegment</td>
<td>associative array</td>
<td>invalid</td>
<td>READ_ONLY</td>
<td>Information about the video segment that was just downloaded. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>Status</td><td>integer</td><td>Status of the download: 0 = success, nonzero = error</td></tr><tr><td>SegSequence</td><td>integer</td><td>Stream segment sequence number</td></tr><tr><td>SegUrl</td><td>string</td><td>Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth)</td></tr><tr><td>DownloadDuration</td><td>integer</td><td>Amount of time spent downloading the segment, in milliseconds</td></tr><tr><td>SegSize</td><td>integer</td><td>Segment size, in bytes</td></tr><tr><td>SegType</td><td>integer</td><td>Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux</td></tr><tr><td>BitrateBPS</td><td>integer</td><td>Bitrate of the segment, in bits per second</td></tr><tr><td>SegStart</td><td>time</td><td>The start time of the segment from the start of the video, specified in seconds</td></tr><tr><td>SegDuration</td><td>string</td><td>The duration of the segment in milliseconds.</td></tr><tr><td>Path</td><td>string</td><td>A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: \<period\>/\<adaptset\>/\<repr\>/\<segment\></td></tr><tr><td>Width</td><td>integer</td><td>For video segments, the width of the encoded video picture</td></tr><tr><td>Height</td><td>integer</td><td>For video segments, the height of the encoded video picture</td></tr><tr><td>HdrMode</td><td></td><td>Indicates the HDR format of the content, which may be one of the following values:</td></tr></tbody></table></td>
</tr>
<tr>
<td>enableLiveAvailabilityWindow</td>
<td>Boolean</td>
<td>False</td>
<td>READ_WRITE</td>
<td>Enables the scrubbing of the trickplay bar during the availability window of live linear streams.</td>
</tr>
<tr>
<td>enableThumbnailTilesDuringLive</td>
<td>Boolean</td>
<td>False</td>
<td>READ_WRITE</td>
<td>Enables the <strong>thumbnailTiles</strong> field to be set and updated in the case of live HLS and DASH streams, which contain thumbnails as the thumbnails become available.<br /><br />By default and when this is set to false, the <strong>thumbnailTiles</strong> field is not written during live streams to maintain backwards compatibility with older applications and to avoid performance or memory issues. This is becuase they might not be expecting constant updates to the <strong>thumbnailTiles</strong> field if they were written to handle VOD streams, which rarely update the <strong>thumbnailTiles</strong> field.</td>
</tr>
<tr>
<td>thumbnailTiles</td>
<td>roAssociativeArray</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Contains the information about HLS and DASH standard thumbnail tiles as they are discovered within the manifest for streams which contain them.<br /><br />This field was first introduced (for VOD only) starting in Roku OS 9.1. Starting with Roku OS 11.0, the app can enable this field for HLS and DASH live streams containing standard thumbnails by setting enableThumbnailTilesDuringLive to true.<br /><br /><blockquote><p>For Roku OS releases before 9.4, the <strong>thumbnailTiles</strong> associative array has the following structure: \{tile_id: tile_set\}(string to associative array)</p><p>For Roku OS 9.4 and later,  the <strong>thumbnailTiles</strong> associative array has the following structure: \{tile_id: [tile_set, tile_set, tile_set,...]\}(string to array of associative arrays). This format allows discontinuous tile_sets of the same resolution to be grouped together as a "choice" for display.</p></blockquote><br /><br />The <strong>tile_id</strong> field is a unique string identifier for the <strong>tile_set</strong>, which is an associative array containing the attributes of the tile set as well as information about the thumbnails.<br /><br />The <strong>tile_set</strong> field contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>htiles</td><td>integer</td><td>0</td><td>Horizontal number of thumbnails in a tile (columns.)</td></tr><tr><td>vtiles</td><td>integer</td><td>0</td><td>Vertical number of thumbnails in a tile (rows.)</td></tr><tr><td>width</td><td>integer</td><td>0</td><td>Number of horizontal pixels in a thumbnail (this is not the tile as the one in the DASH spec).</td></tr><tr><td>height</td><td>integer</td><td>0</td><td>Number of vertical pixels in a thumbnail (this is not the same tile as the one in the DASH spec).</td></tr><tr><td>bandwidth</td><td>integer</td><td>0</td><td>Max tile size in bits / duration.</td></tr><tr><td>duration</td><td>float</td><td>0.0</td><td>Duration of one tile in seconds (assuming a full tile).</td></tr><tr><td>initial_time<br /></td><td>float</td><td>0.0</td><td>Presentation start time of current <strong>tile_set</strong> in seconds. Thumbnails in tiles beginning before this time should be skipped, and the first relevant thumbnail duration should be updated accordingly.</td></tr><tr><td>final_time</td><td>float</td><td>0.0</td><td>End time of current tile_set in seconds.</td></tr><tr><td>tiles</td><td>roArray</td><td>[]</td><td>Contains information about each tile in the <strong>tile_set</strong>. This contains the following fields: <br />$\{tiles-list\}</td></tr></tbody></table></td>
</tr>
<tr>
<td>trickPlayBackgroundOverlay</td>
<td>uri</td>
<td>""</td>
<td>WRITE</td>
<td>The background overlay to be displayed whenever the playback UI is visible during the video playback experience.</td>
</tr>
</tbody>
</table>
