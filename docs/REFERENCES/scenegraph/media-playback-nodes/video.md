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