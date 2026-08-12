---
title: Video
excerpt: Node class that provides controlled playback of live or VOD video
deprecated: false
hidden: false
metadata:
  title: Video
  description: >-
    Documents the Video node, which provides controlled playback of live or VOD
    video, with fields for trickplay, closed captions, and audio tracks.
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The Video node class provides a controlled play of live or VOD video.

The Video node includes a wide variety of internal nodes to support trick play, playback buffering indicators, and so forth. Playback buffering indicators, to indicate buffering before initial playback as well as re-buffering, use an internal instance of a ProgressBar node. For trick play, an internal instance of a TrickPlayBar node is provided. For display of BIF images for DVD-like chapter selection, an internal instance of a BIFDisplay node is provided.

Starting from [Roku OS 8](doc:release-notes#roku-os-8), the behavior of the Roku system overlay is such that the system overlay now slides in whenever the * button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.

## Fields

### Playback fields

To set the specific video playback parameters for a particular video, set the [Content Meta-Data](doc:content-metadata) attributes for the video in a [ContentNode](doc:contentnode) node, and assign the ContentNode to the `content` field of the Video node.

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
      <td>READ\_WRITE</td>
      <td>The ContentNode with the [Content Meta-Data](doc:content-metadata) for the video, or a video playlist (a sequence of videos) to be played.<br /><br />If a video playlist is to be played, the children of this ContentNode comprise the playlist, and each ContentNode child must have all attributes required to play that video. For example, if the videos "A" and "B" are to be played, three ContentNodes must be created: the parent ContentNode (which is largely ignored), one ContentNode child for "A," and one ContentNode child for "B." The parent node is set into this content field, and when video playback is started, all of its children will be played in sequence. Any changes made to the playlist after playback has started are ignored. See the <code>contentIsPlaylist</code> and <code>contentIndex</code> fields, for more information on playlists.</td>
    </tr>
    <tr>
      <td>playStartInfo</td>
      <td>roAssociativeArray</td>
      <td />
      <td>READ\_ONLY</td>
      <td>Provides timing measurements related to the start of video playback. All measurements are in seconds. <br /><br />The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Access Permission</th><th>Description</th></tr></thead><tbody><tr><td>total\_dur</td><td>float</td><td>READ\_ONLY</td><td>Total video start duration.</td></tr><tr><td>manifest\_dur</td><td>float</td><td>READ\_ONLY</td><td>Manifest download and parsing.</td></tr><tr><td>drm\_load\_dur</td><td>float</td><td>READ\_ONLY</td><td>DRM system initialization.</td></tr><tr><td>drm\_lic\_acq\_dur</td><td>float</td><td>READ\_ONLY</td><td>License acquisition. This typically includes interactions with the license server.</td></tr><tr><td>prebuf\_dur</td><td>float</td><td>READ\_ONLY</td><td>Prebuffer content.</td></tr><tr><td>manifest\_start</td><td>Float</td><td>READ\_ONLY</td><td>Point at which manifest download and parsing begins.</td></tr><tr><td>drm\_load\_start</td><td>Float</td><td>READ\_ONLY</td><td>Point at which DRM system initialization begins.</td></tr><tr><td>drm\_lic\_acq\_start</td><td>Float</td><td>READ\_ONLY</td><td>Point at which license acquisition begins.</td></tr><tr><td>prebuf\_start</td><td>Float</td><td>READ\_ONLY</td><td>Point at which content pre-buffering begins.</td></tr></tbody></table><br /><blockquote><p>The \_start fields correspond to the similarly named \_dur (duration) fields in this structure. In each case, the \_start point is the number of milliseconds elapsed from the initialization of the media player (t=0.000). If required, ending points for each interval can be derived from its associated starting-point and duration.</p></blockquote></td>
    </tr>
    <tr>
      <td>licenseStatus</td>
      <td>roAssociativeArray</td>

      <td />
    
      <td>READ\_ONL</td>
      <td>Indicates whether the DRM license was acquired. If a failure occurs, this field provides additional details about the error. The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>response</td><td>string</td><td>The server response. If a license is not retrieved, the response is empty and the HTTP response code is returned instead.</td></tr><tr><td>status</td><td>string</td><td>The HTTP response code.</td></tr><tr><td>keysystem</td><td>string</td><td>The DRM technology used.</td></tr><tr><td>duration</td><td>string</td><td>The total time elapsed in sending a request to the license server and receiving a response (in milliseconds).</td></tr></tbody></table><br /></td>
    </tr>
    <tr>
      <td>contentIsPlaylist</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>If set to true, enables video playlists (a sequence of videos to be played). See the <code>content</code> and <code>contentIndex</code> field for more information on playlists.</td>
    </tr>
    <tr>
      <td>contentIndex</td>
      <td>integer</td>
      <td>-1</td>
      <td>READ\_ONLY</td>
      <td>The index of the video in the video playlist that is currently playing. Generally, you would only want to check this field if video playlists are enabled (by setting the <code>contentIsPlaylist</code> field to true), but it is set to 0 when a single video is playing, and video playlists are not enabled.</td>
    </tr>
    <tr>
      <td>nextContentIndex</td>
      <td>integer</td>
      <td>-1</td>
      <td>READ\_WRITE</td>
      <td>If the <code>contentIsPlaylist</code> field is set to true to enable video playlists, sets the index of the next video in the playlist to be played. Setting this field does not immediately change the video being played, but takes effect when the current video is completed or skipped. By default, this value is -1, which performs the default index increment operation. After the video specified by the index in this field begins playing, the field is set to the default -1 again, so the next video played will be set by the default index increment operation unless the field is set again to a different index.</td>
    </tr>
    <tr>
      <td>control</td>
      <td>option string</td>
      <td>none</td>
      <td>READ\_WRITE</td>
      <td>Sets the desired play state for the video, such as starting or stopping the video play. Getting the value of this field returns the most recent value set, or none if no value has been set. To dynamically monitor the actual state of the video, see the <code>state</code> field.<br /><br />The play and stop commands to commence and discontinue playback should not be used to implement trick modes like rewind, or replay. For that use the <code>seek</code> field.<br /><br /><table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>none</td><td>No play state set</td></tr><tr><td>play</td><td>Start video play</td></tr><tr><td>stop</td><td>Stop video play</td></tr><tr><td>pause</td><td>Pause video play</td></tr><tr><td>resume</td><td>Resume video play after a pause</td></tr><tr><td>replay</td><td>Replay video</td></tr><tr><td>prebuffer</td><td>Starts buffering the video stream before the Video node actually begins playback. Only one video stream can be buffering in the application at any time. Setting the <code>control</code> field to <code>prebuffer</code> for another video stream after setting <code>prebuffer</code> for a previous video stream stops the buffering of the previous video stream.</td></tr><tr><td>skipcontent</td><td>Skip the currently-playing content and begin playing the next content in the playlist. If the content is not a playlist, or if the current content is the end of the playlist, this will end playback.</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>asyncStopSemantics<br /><br /><em>Available since [Roku OS 12.5](doc:release-notes#roku-os-125)</em></td>
      <td>boolean</td>
      <td>false</td>
      <td>WRITE</td>
      <td>Indicates whether the "STOP" command is executed asynchronously (true) or synchronously (false). <br /><br />By default, the STOP command is executed synchronously, which blocks the UI thread. Enabling this field makes the STOP command non-blocking, which enables the video to be switched faster. <br /><br />When this field is enabled, the <code>state</code> field is set to "stopping" when the asynchronous stop begins. The <code>state</code> field then changes to "stopped" once the stop has been completed.<br /><br />Any other media player component calls on the UI thread that require the Video node to be re-instantiated should be blocked until the asynchronous stop has been completed (for example, updating the <code>control</code> field to "Play" or "Prebuffer" or updating the <code>seek</code> field). This is because a video node in the "stopping" state is still using the underlying media player, which is not available at that time. As a result, performing these types of operations on a different video while in the "stopping" state may result in a playback failure.</td>
    </tr>
    <tr>
      <td>state</td>
      <td>value string</td>
      <td>none</td>
      <td>READ\_ONLY</td>
      <td>Describes the current video play state, such as if the video play has been paused.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>none</td><td>No current play state</td></tr><tr><td>buffering</td><td>Video stream is currently buffering</td></tr><tr><td>playing</td><td>Video is currently playing</td></tr><tr><td>paused</td><td>Video is currently paused</td></tr><tr><td>stopping<br /><br /><em>Available since [Roku OS 12.5](doc:release-notes#roku-os-125)</em></td><td>Video is in the process of being stopped. This value is only returned if the <code>asyncStopSemantics</code> field is enabled.</td></tr><tr><td>stopped</td><td>Video is currently stopped</td></tr><tr><td>finished</td><td>Video has successfully completed playback</td></tr><tr><td>error</td><td>An error has occurred in the video play. The error code, message, and diagnostics can be found in the <code>errorCode</code>, <code>errorMsg</code>, and <code>errorStr</code> fields respectively.</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>errorCode</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The error code associated with the video play error set in the <code>state</code> field: <pre><code>-  0    no error                                                     <br />- -1    network error (server down or unresponsive, server is unreachable, network setup problem on the client).<br />- -2    connection timed out                                         <br />- -3    unknown/unspecified or generic Error                         <br />- -4    empty list; no streams were specified to play                <br />- -5    media error; the media format is unknown or unsupported      <br />- -6    DRM error</code></pre><br />Use the <strong>errorStr</strong> and and <strong>errorInfo</strong> fields for more descriptive diagnostic information to help identify and resolve the cause of the error.</td>
    </tr>
    <tr>
      <td>errorMsg</td>
      <td>string</td>
      <td />
      <td>READ\_ONLY</td>
      <td>An error message describing the video play error set in the <code>state</code> field.<br /><br />Use the <strong>errorStr</strong> and and <strong>errorInfo</strong> fields for more descriptive diagnostic information to help identify and resolve the cause of the error.</td>
    </tr>
    <tr>
      <td>errorStr</td>
      <td>string</td>
      <td />
      <td>READ\_ONLY</td>
      <td>A diagnostic message to help resolve the video play error set in the <code>state</code> field.<br /><br />The format of the errorStr is as follows:<br /><br /><table><thead><tr><th>errorStr Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>category\_name</td><td>string</td><td>The type of error, which includes: "http", "drm", "mediaerror", or "mediaplayer".</td></tr><tr><td>error\_code</td><td>integer</td><td>The unique code associated with the error.</td></tr><tr><td>ignored</td><td>integer</td><td>Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1).</td></tr><tr><td>source</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>source\_name</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>additional catcher comment</td><td>string</td><td>Typically, the comment added when the exception is caught.</td></tr><tr><td>error\_string</td><td>string</td><td>A text message describing the video play error.</td></tr><tr><td>error\_attributes</td><td>string</td><td>The error attribute, which includes the clipId (the unique ID of the clip that failed to play).</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>errorInfo</td>
      <td>roAssociativeArray</td>
    
      <td />
    
      <td>READ\_ONLY</td>
      <td>A diagnostic message to help resolve the video play error set in the <code>state</code> field.<br /><br />The roAssociativeArray contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>clipId</td><td>integer</td><td>The unique ID for the clip</td></tr><tr><td>ignored</td><td>integer</td><td>Indicates whether the error generated an exception (0) or was ignored resulting in the next item in the content list being played (1).</td></tr><tr><td>source</td><td>string</td><td>The module that generated the error.</td></tr><tr><td>category</td><td>String</td><td>The type of error, which includes: "http", "drm", "mediaerror", or "mediaplayer".</td></tr><tr><td>errcode</td><td>integer</td><td>The internal Roku code associated with the error.  Use the <strong>dbgmsg</strong> field for debugging.</td></tr><tr><td>dbgmsg</td><td>string</td><td>A verbose debug message that can help identify the root cause of the error.</td></tr><tr><td>drmerrcode</td><td>integer</td><td>The error code returned by the DRM system, if any, when a video player error occurs</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>decoderStats</td>
      <td>roAssociativeArray</td>
      <td>
        {}
      </td>
      <td>READ\_ONLY</td>
      <td>Provides video decoder statistics related to playback.</td>
    </tr>
    <tr>
      <td>enableDecoderStats</td>
      <td>boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Enables updates to the <strong>decoderStats</strong> field.</td>
    </tr>
    <tr>
      <td>playbackActionButtons</td>
      <td>roArray of roAssociativeArrays</td>
      <td>\[]</td>
      <td>READ\_WRITE</td>
      <td>Component that shows the buttons and other specified UI elements on the pause screen at the start of playback. Each element in the array has following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>system default</td><td>Text for the button label</td></tr><tr><td>icon</td><td>uri</td><td>""</td><td>A 9-patch or PNG of the icon to be displayed when the button does not have.</td></tr><tr><td>focusIcon</td><td>uri</td><td>""</td><td>A 9-patch or PNG of the icon to be displayed when the button has focus.</td></tr><tr><td>buttonIsDisabled</td><td>Boolean</td><td>false</td><td>Controls whether the button is disabled (true) or enabled (false). A disabled button is skipped and does not have focus while the user navigates the different playback action buttons with the directional pad on the Roku remote control.</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>playbackActionButtonSelected</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_WRITE</td>
      <td>The index of the button that is selected in the <strong>playbackActionButtons</strong> field.</td>
    </tr>
    <tr>
      <td>playbackActionButtonFocused</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_WRITE</td>
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
      <td>subtitleSelectionPreferences<br /><br />(<em>Available since [Roku OS 12.5](doc:release-notes#roku-os-125)</em>)</td>
      <td>oAssociativeArray</td>
      <td>\{ }</td>
      <td>WRITE\_ONLY</td>
      <td>The significance and priority order of the attributes and values for the subtitle tracks available in the video stream.<br /><br /> Provide the attribute fields from highest to lowest significance (for example, if <strong>language</strong> should take precedence over all other attributes, list it first). For the subtitle track languages, provide the language codes from highest to lowest priority (for example, if Spanish for Latin America and the Caribbean \["es-419"] has precedence over Spanish \["es"], list the language codes in the following order: \["es-419", "es"].<br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>values</td><td>roArray of roAssociativeArrays</td><td>Specify values for the following subtitle track attributes. List the attributes from highest to lowest significance.<br />$\{subtitle-selection-values-table}</td></tr><tr><td>overrideSystem</td><td>boolean</td><td>Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false.</td></tr></tbody></table><br /><br /><strong>Example</strong><br /><pre><code><code>\<br />video.subtitleSelectionPreferences = \\\{ values: \[\<br />    \\\{ language: \["es-419", "es", "es-\*", "fr", "en-US", "en-UK", "en"] \\},\<br />    \\\{ caption: "true" \\},\<br />    \\\{ descriptive: \["false"] \\},\<br />    \\\{ easyReader: "true" \\} ],\<br />    overrideSystem: true \\}\<br /></code></code></pre><br /><strong>Explanation</strong><br /><br />The subititle language with the highest priority is "es" with a country code of "419". The next highest priority language is "es" with no country code, and then "es" with any country code.</td>
    </tr>
    <tr>
      <td>audioSelectionPreferences<br /><br />(<em>Available since [Roku OS 12.5](doc:release-notes#roku-os-125)</em>)</td>
      <td>roAssociativeArray</td>
      <td>\{ }</td>
      <td>WRITE\_ONLY</td>
      <td>The significance and priority order of the attributes and values for the audio tracks available in the video stream.<br /><br /><blockquote><p>A language matching any country code does not match a track that specifies the same language but with no country code.</p></blockquote><br />Provide the attribute fields from highest to lowest significance (for example, if the <strong>language</strong> should take precedence over the <strong>description</strong>, list <strong>language</strong> first. For the audio track languages, provide the language code values from highest to lowest priority (for example, if English for the United States \["en-US"] has precedence over English for the United Kingdom \["en-UK"], list the language codes in the following order: \["en-US", "en-UK"].<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>values</td><td>roArray of roAssociativeArrays</td><td>Specify values for the following audio track attributes. List the attributes from highest to lowest significance.<br />$\{audio-track-selection-values-table}</td></tr><tr><td>overrideSystem</td><td>boolean</td><td>Specify whether to use the app's preferences over the system preferences (true) or use the app's preferences only when the system preferences do not match any of the available tracks (false), which allows the app to provide additional rules in this case. The default value is false.</td></tr></tbody></table><br /><br /><strong>Example</strong><br /><pre><code><code>\<br />video.audioSelectionPreferences = \\\{ values: \[\<br />    \\\{ language: \["en-US", "en-UK", "en", "en-\*"] \\},\<br />    \\\{ descriptive: "false" \\} ],\<br />    overrideSystem: true \\}\<br /></code></code></pre><br /><strong>Explanation</strong><br /><br />The audio language with the highest priority is "en-US". The next highest priority language is "en-UK", then "en" with no country code, and finally "en" with any country code.</td>
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
      <td>READ\_ONLY</td>
      <td>The duration of the video being played, specified in seconds. This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td>
    </tr>
    <tr>
      <td>loop</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>If set to true, the video or video playlist (if the <code>contentIsPlaylist</code> field is set to true to enable video playlists) will be restarted from the beginning after the end is reached.</td>
    </tr>
    <tr>
      <td>position</td>
      <td>time</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Time of the current position in the stream. Either UTC time or elapsed since start of stream depending on content type. <br /><br />As of [Roku OS 9.3](doc:release-notes#roku-os-93), when the video is paused, the position is recorded for that pause event. This means that playing, pausing, and resuming a video generates three separate positions.</td>
    </tr>
    <tr>
      <td>positionInfo</td>
      <td>roAssociativeArray</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Contains the following fields that provide information about the last rendered video and audio samples.<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Access Permission</th><th>Description</th></tr></thead><tbody><tr><td>audio</td><td>double</td><td>invalid</td><td>READ\_ONLY</td><td>Position of the last rendered audio sample, specified in seconds</td></tr><tr><td>clip\_id</td><td>integer</td><td>invalid</td><td>READ\_ONLY</td><td>The unique ID of the clip</td></tr><tr><td>epoch</td><td>integer</td><td>invalid</td><td>READ\_ONLY</td><td>0 means positions are relative to videoStart; 1 means that positions are utc</td></tr><tr><td>video</td><td>double</td><td>invalid</td><td>READ\_ONLY</td><td>The value of this field is double/float, in seconds since epoch.Position of the last rendered video sample, specified in seconds</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>clipId</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The clip ID of the currently playing track.</td>
    </tr>
    <tr>
      <td>notificationInterval</td>
      <td>time</td>
      <td>0.5</td>
      <td>READ\_WRITE</td>
      <td>The interval between notifications to observers of the position field, specified as the number of seconds. If the value is 0, no notifications are delivered. This value may be read or modified at any time.</td>
    </tr>
    <tr>
      <td>seek</td>
      <td>time</td>
      <td>invalid</td>
      <td>WRITE\_ONLY</td>
      <td>Sets the current position in the video. The value is the number seconds from the beginning of the stream, specified as a double.</td>
    </tr>
    <tr>
      <td>seekMode</td>
      <td>string</td>
      <td>"default"</td>
      <td>READ\_WRITE</td>
      <td>Determines the desired level of accuracy for seek behavior:<br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>default</td><td>Seek to the closest sync frame (segment, or I-frame of a multi-frame segment) that is earlier than the requested seek time.</td></tr><tr><td>accurate</td><td>Seek to the exact time requested if platform support (video decoder step function) is available.</td></tr></tbody></table><br /></td>
    </tr>
    <tr>
      <td>autoplayAfterSeek</td>
      <td>boolean</td>
      <td>true</td>
      <td>READ\_WRITE</td>
      <td>Enables video content to automatically play after rebuffering. Setting this flag to false disables this default behavior.</td>
    </tr>
    <tr>
      <td>timedMetaData</td>
      <td>associative array</td>
      <td>\{ }</td>
      <td>READ\_ONLY</td>
      <td>The most recent timed meta data that has been decoded from the video stream. Only meta data with a key that matches an entry in timedMetaDataSelectionKeys will be set into this field. The value of this field is an associative array which contains arbitrary keys and values, as found in the video stream.</td>
    </tr>
    <tr>
      <td>timedMetaData2</td>
      <td>associative array</td>
      <td>\{ }</td>
      <td>READ\_ONLY</td>
      <td>This field contains all the same information included in the <strong>timedMetaData</strong> field and the following additional fields:<br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>data</td><td>associative array</td><td>The values from the stream's metadata tag, as defined by video provider.</td></tr><tr><td>position</td><td>time</td><td>The Presentation Time Stamp (PTS) when the tag was seen.</td></tr><tr><td>source</td><td>enum</td><td>This may be one of the following string values: $\{source-enum-list}</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>timedMetaDataSelectionKeys</td>
      <td>array of strings</td>
      <td>\[ ]</td>
      <td>READ\_WRITE</td>
      <td>If the video stream contains timed meta data such as ID3 tags, any meta data with a key matching an entry in this array is set into the timedMetaData field.<br /><br />For EMSG data, if any entry in this array is "\*", then all timed meta data is selected.<br /><br />HLS tags must be defined separately.</td>
    </tr>
    <tr>
      <td>streamInfo</td>
      <td>associative array</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Information about the video stream that is currently playing or buffering.<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>isUnderrun</td><td>Boolean</td><td>If true, the stream was downloaded due to an underrun</td></tr><tr><td>isResume</td><td>Boolean</td><td>If true, playback was resumed after trickplay</td></tr><tr><td>measuredBItrate</td><td>Integer</td><td>The measured bitrate (bps) of the network when the stream was selected</td></tr><tr><td>streamBitrate</td><td>Integer</td><td>The bitrate of the stream</td></tr><tr><td>streamUrl</td><td>URI</td><td>The URL of the stream</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>completedStreamInfo</td>
      <td>associative array</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Information about the video stream that most recently completed playing, due to an error, user action, or end of the stream. The associative array consists of the same keys as for the <code>streaminfo</code> field, with one additional key, <code>isFullResult</code>, a Boolean type that, if true indicates the <code>stream</code> played to completion, or if false, was interrupted by an error or user action. This field is set prior to the <code>state</code> field being changed, so <code>state</code> field observer callback functions can assume that the associative array values are valid when the state field changes.</td>
    </tr>
    <tr>
      <td>timeToStartStreaming</td>
      <td>time</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The time in seconds from playback being started until the video actually began playing. The minimum valid value is 1 millisecond, and this is only valid if the current value of the <code>state</code> field is <code>playing</code>. When the state field value is not <code>playing</code>, the value will be 0. This field is updated prior to the <code>state</code> field changing, so <code>state</code> field observer callback functions can assume this field is valid after the <code>state</code> field value changes to <code>playing</code>.</td>
    </tr>
    <tr>
      <td>bufferingStatus</td>
      <td>associative array</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Contains information about stream buffering progress and status. This field is valid only while buffering is in progress, both at stream startup or when re-buffering is required. Observers will be notified when any element of the array changes, and also when buffering is complete and the field itself becomes invalid. The array contains the following name - value pairs.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>percentage</td><td>Percent buffering complete as an integer.</td></tr><tr><td>isUnderrun</td><td>Boolean value indicating if a stream underrun occurred.</td></tr><tr><td>prebufferDone</td><td>A boolean value that indicates whether the player has buffered enough data to allow the player to begin playing immediately should "control" be set to "play."</td></tr><tr><td>actualStart</td><td>A time value that is automatically set when prebufferDone becomes true, specifying the actual time from which playback will resume. This may vary from the time requested in the content node's playStart field, depending on the capabilities of the player and the seekMode setting.</td></tr></tbody></table><br /><blockquote><p>While it is possible to use the Video node seek field to specify the seek time, it is recommended that apps do the following:</p><ol><li>Set the content node field playStart in seek-to-pause scenarios.</li><li>In the video node, set "control" to "prebuffer".</li><li>Wait for "prebufferDone" to become "true".</li><li>Check "actualStart" (if desired).</li><li>Set "control" to "play".</li></ol></blockquote></td>
    </tr>
    <tr>
      <td>videoFormat</td>
      <td>string</td>

      <td />
    
      <td>READ\_ONLY</td>
      <td>Contains the format of the currently playing video stream.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>""</td><td>No stream playing</td></tr><tr><td>none</td><td>Stream contains no playable video</td></tr><tr><td>unknown</td><td>Stream contains unknown video</td></tr><tr><td>hevc</td><td>ISO/IEC 23008-2, H.265, HEVC</td></tr><tr><td>hevc\_b</td><td>ISO/IEC 23008-2 Annex-B, H.265, HEVC</td></tr><tr><td>mpeg1</td><td>ISO/IEC 11172-2, MPEG-1 part 2, H.261</td></tr><tr><td>mpeg2</td><td>ISO/IEC 13818-2, MPEG-2 part 2, H.262</td></tr><tr><td>mpeg4\_2</td><td>ISO/IEC 14496-2, MPEG-4 part 2, H.263</td></tr><tr><td>mpeg4\_10b</td><td>ISO/IEC 14496-10, MPEG-4 part 10 Annex-B, H.264, vc-1</td></tr><tr><td>mpeg4\_15</td><td>ISO/IEC 14496-15, MPEG-4 part 15, H.264, vc-1</td></tr><tr><td>AVC vc1</td><td>vc-1</td></tr><tr><td>wmv</td><td>Microsoft Windows Media Video</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>pauseBufferStart</td>
      <td>time</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The beginning position of the video buffered when paused. This field is only valid for live video.</td>
    </tr>
    <tr>
      <td>pauseBufferEnd</td>
      <td>time</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The ending position of the video buffered when paused. This field is only valid for live video.</td>
    </tr>
    <tr>
      <td>pauseBufferPosition</td>
      <td>time</td>
      <td>0</td>
      <td>READ\_ONLY</td>
      <td>The current presentation position of the video buffered when paused. This field is only valid for live video.</td>
    </tr>
    <tr>
      <td>pauseBufferOverflow</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_ONLY</td>
      <td>Indicates that the video buffer was not able to save all video since being paused. This field is only valid for live video.</td>
    </tr>
    <tr>
      <td>pauseBufferEpochOffset</td>
      <td>double</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Enables apps to translate the relative time provided in the <strong>pauseBuffer</strong> fields to UTC time based on the wall-clock timing provided in live manifests/playlists.</td>
    </tr>
    <tr>
      <td>streamingSegment</td>
      <td>associative array</td>
      <td>\{ }</td>
      <td>READ\_ONLY</td>
      <td>Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>hdrModeStr</td><td>string</td><td>HDR format of the content, which may be one of the following values: "invalid", "unknown", "none", "hdr10", "dolby\_vision", "hlg10", "hdr10", "sl-hdr2".</td></tr><tr><td>segBitrateBps</td><td>integer</td><td>Bitrate of the segment in bits per second</td></tr><tr><td>segSequence</td><td>integer</td><td>The sequence number of the segment in the video</td></tr><tr><td>segStart</td><td>time</td><td>The start time of the segment from the start of the video, specified in seconds</td></tr><tr><td>segUrl</td><td>string</td><td>URL of the segment</td></tr><tr><td>segType</td><td>integer</td><td>Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux</td></tr><tr><td>segTypeStr</td><td>String</td><td>Type of data in the segment:  "audio", "video", "captions",  "mux"</td></tr><tr><td>latency</td><td>integer</td><td>The time, in milliseconds, between the current live edge (or most recent available media segment on the CDN) and the segment currently being played.</td></tr><tr><td>path</td><td>string</td><td>A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: \<period>/\<adaptset>/\<repr>/\<segment></td></tr><tr><td>width</td><td>integer</td><td>For video segments, the width of the encoded video picture</td></tr><tr><td>height</td><td>integer</td><td>For video segments, the height of the encoded video picture</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>downloadedSegment</td>
      <td>associative array</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>Information about the video segment that was just downloaded. This is only meaningful for segmented video transports, such as DASH and HLS. The associative array has the following entries:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>Status</td><td>integer</td><td>Status of the download: 0 = success, nonzero = error</td></tr><tr><td>SegSequence</td><td>integer</td><td>Stream segment sequence number</td></tr><tr><td>SegUrl</td><td>string</td><td>Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth)</td></tr><tr><td>DownloadDuration</td><td>integer</td><td>Amount of time spent downloading the segment, in milliseconds</td></tr><tr><td>SegSize</td><td>integer</td><td>Segment size, in bytes</td></tr><tr><td>SegType</td><td>integer</td><td>Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux</td></tr><tr><td>BitrateBPS</td><td>integer</td><td>Bitrate of the segment, in bits per second</td></tr><tr><td>SegStart</td><td>time</td><td>The start time of the segment from the start of the video, specified in seconds</td></tr><tr><td>SegDuration</td><td>string</td><td>The duration of the segment in milliseconds.</td></tr><tr><td>Path</td><td>string</td><td>A path indicating the Period, AdaptationSet and Representation that is played. This is in UNIX directory notation as: \<period>/\<adaptset>/\<repr>/\<segment></td></tr><tr><td>Width</td><td>integer</td><td>For video segments, the width of the encoded video picture</td></tr><tr><td>Height</td><td>integer</td><td>For video segments, the height of the encoded video picture</td></tr><tr><td>HdrMode</td><td /><td>Indicates the HDR format of the content, which may be one of the following values:</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>enableLiveAvailabilityWindow</td>
      <td>Boolean</td>
      <td>False</td>
      <td>READ\_WRITE</td>
      <td>Enables the scrubbing of the trickplay bar during the availability window of live linear streams.</td>
    </tr>
    <tr>
      <td>enableThumbnailTilesDuringLive</td>
      <td>Boolean</td>
      <td>False</td>
      <td>READ\_WRITE</td>
      <td>Enables the <strong>thumbnailTiles</strong> field to be set and updated in the case of live HLS and DASH streams, which contain thumbnails as the thumbnails become available.<br /><br />By default and when this is set to false, the <strong>thumbnailTiles</strong> field is not written during live streams to maintain backwards compatibility with older applications and to avoid performance or memory issues. This is becuase they might not be expecting constant updates to the <strong>thumbnailTiles</strong> field if they were written to handle VOD streams, which rarely update the <strong>thumbnailTiles</strong> field.</td>
    </tr>
    <tr>
      <td>thumbnailTiles</td>
      <td>roAssociativeArray</td>
      <td>\[]</td>
      <td>READ\_WRITE</td>
      <td>Contains the information about HLS and DASH standard thumbnail tiles as they are discovered within the manifest for streams which contain them.<br /><br />This field was first introduced (for VOD only) starting in [Roku OS 9.1](doc:release-notes#roku-os-91). Starting with [Roku OS 11.0](doc:release-notes#roku-os-110), the app can enable this field for HLS and DASH live streams containing standard thumbnails by setting enableThumbnailTilesDuringLive to true.<br /><br /><blockquote><p>For Roku OS releases before 9.4, the <strong>thumbnailTiles</strong> associative array has the following structure: \{tile\_id: tile\_set}(string to associative array)</p><p>For [Roku OS 9.4](doc:release-notes#roku-os-94) and later,  the <strong>thumbnailTiles</strong> associative array has the following structure: \{tile\_id: \[tile\_set, tile\_set, tile\_set,...]}(string to array of associative arrays). This format allows discontinuous tile\_sets of the same resolution to be grouped together as a "choice" for display.</p></blockquote><br /><br />The <strong>tile\_id</strong> field is a unique string identifier for the <strong>tile\_set</strong>, which is an associative array containing the attributes of the tile set as well as information about the thumbnails.<br /><br />The <strong>tile\_set</strong> field contains the following fields:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>htiles</td><td>integer</td><td>0</td><td>Horizontal number of thumbnails in a tile (columns.)</td></tr><tr><td>vtiles</td><td>integer</td><td>0</td><td>Vertical number of thumbnails in a tile (rows.)</td></tr><tr><td>width</td><td>integer</td><td>0</td><td>Number of horizontal pixels in a thumbnail (this is not the tile as the one in the DASH spec).</td></tr><tr><td>height</td><td>integer</td><td>0</td><td>Number of vertical pixels in a thumbnail (this is not the same tile as the one in the DASH spec).</td></tr><tr><td>bandwidth</td><td>integer</td><td>0</td><td>Max tile size in bits / duration.</td></tr><tr><td>duration</td><td>float</td><td>0.0</td><td>Duration of one tile in seconds (assuming a full tile).</td></tr><tr><td>initial\_time<br /></td><td>float</td><td>0.0</td><td>Presentation start time of current <strong>tile\_set</strong> in seconds. Thumbnails in tiles beginning before this time should be skipped, and the first relevant thumbnail duration should be updated accordingly.</td></tr><tr><td>final\_time</td><td>float</td><td>0.0</td><td>End time of current tile\_set in seconds.</td></tr><tr><td>tiles</td><td>roArray</td><td>\[]</td><td>Contains information about each tile in the <strong>tile\_set</strong>. This contains the following fields: <br />$\{tiles-list}</td></tr></tbody></table></td>
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

### UI fields

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
<td>width</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Sets the width of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the width of the entire display screen.</td>
</tr>
<tr>
<td>height</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Sets the height of the video play window in pixels. If set to 0.0 (the default), the video play window is set to the height of the entire display screen.</td>
</tr>
<tr>
<td>enableUI</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If set to true (the default), the entire Video node user interface (such as ProgressBar and TrickPlayBar nodes, and BIF navigation) appear in response to stream events and remote control key presses.<br /><br />If set to false, most of the Video node user interface will not be shown, and the application is expected to implement the UI. The one exception is the closed-caption dialog, which always appears when the video is playing fullscreen (either full height or full width) and the user presses the Options (*) button.<br /><br />When using the [Roku Advertising Framework (RAF)](doc:advertising), the RAF library may temporarily set this field to false while playing ads.</td>
</tr>
<tr>
<td>enableTrickPlay</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td><strong>Controls whether trickplay is allowed during playback. When set to false the user trickplay buttons on the remote will have no effect. This only applies when enableUI is set to true.</strong></td>
</tr>
<tr>
<td>bifDisplay</td>
<td>BifDisplay node</td>
<td>internal instance default</td>
<td>READ_WRITE</td>
<td>Component that displays BIFs and allows navigation. The fields of this internal node are as follows:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Use</th></tr></thead><tbody><tr><td>frameBgBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>A color to be blended with the image displayed behind individual BIF images displayed on the screen. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>frameBgImageUri</td><td>uri</td><td>""</td><td>The URI of an image to be displayed behind individual frames on the screen. The actual frame image is displayed opaquely on top of this background, so only the outer edges of this image are visible. Because of that, this background image typically appears as a border around the video frame. If the frameBgBlendColor field is set to a value other than the default, that color will be blended with the background image.</td></tr><tr><td>getNearestFrame</td><td>time</td><td>invalid</td><td><strong>Write-Only</strong><br />Requests the nearest BIF to the time specified. This would normally be an offset from the current playback position. The getNearestFrame request is passed to the BifCache which uses the getNearestFrame() method implemented on all BIF storage classes. Existing BifCache functionality is then used to retrieve the bitmap data and load it into the texture manager.</td></tr><tr><td>nearestFrame</td><td>string</td><td>""</td><td><strong>Read-Only</strong><br />Contains the URI of the requested BIF. The returned URIs will be of the form 'memory://BIF_%d_%d'. These URIs can then be used directly in the 'uri' field of a Poster SGN (or similar).</td></tr></tbody></table></td>
</tr>
<tr>
<td>trickPlayBar</td>
<td>TrickPlayBar node</td>
<td>internal instance default</td>
<td>READ_WRITE</td>
<td>The visible TrickPlayBar node. The fields of this internal node are as follows:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Use</th></tr></thead><tbody><tr><td>currentTimeMarkerBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>This is blended with the marker for the current playback position. This is typically a small vertical bar displayed in the TrickPlayBar node when the user is fast-forwarding or rewinding through the video.</td></tr><tr><td>textColor</td><td>color</td><td>system default</td><td>Sets the color of the text next to the trickPlayBar node indicating the time elapsed/remaining.</td></tr><tr><td>thumbBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>Sets the blend color of the square image in the trickPlayBar node that shows the current position, with the current direction arrows or pause icon on top. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>filledBarBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>This color will be blended with the graphical image specified in the <code>filledBarImageUri</code> field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>liveFilledBarBlendColor</td><td>Color</td><td>0xFFFFFFFF</td><td>The color of the trickplay progress bar to be blended with the <strong>filledBarImageUri</strong> for live linear streams.</td></tr><tr><td>filledBarImageUri</td><td>uri</td><td>""</td><td>A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the <code>filledBarBlendColor</code> field, if set to a non-default value.</td></tr><tr><td>trackBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>This color is blended with the graphical image specified by <code>trackImageUri</code> field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>trackImageUri</td><td>uri</td><td>""</td><td>A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the <code>trackBlendColor</code> field, if set to a non-default value.</td></tr></tbody></table></td>
</tr>
<tr>
<td>bufferingBar</td>
<td>ProgressBar node</td>
<td>internal instance default</td>
<td>READ_WRITE</td>
<td>Component that shows the progress of re-buffering, after video playback has started. The fields of this internal node are as follows:<br /><br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Use</th></tr></thead><tbody><tr><td>width</td><td>float</td><td>system default</td><td>Sets a custom width for an instance of the ProgressBar node</td></tr><tr><td>height</td><td>float</td><td>system default</td><td>Sets a custom height for an instance of the ProgressBar node</td></tr><tr><td>emptyBarBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>A color to be blended with the graphical image specified in the <code>emptyBarImageUri</code> field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>emptyBarImageUri</td><td>uri</td><td>""</td><td>A 9-patch or ordinary PNG of the bar presenting the remaining work to be done. This is typically displayed on the right side of the track, and is blended with the color specified in the <code>emptyBarBlendColor</code> field, if set to a non-default value.</td></tr><tr><td>filledBarBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>This color will be blended with the graphical image specified in the <code>filledBarImageUri</code> field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>filledBarImageUri</td><td>uri</td><td>""</td><td>A 9-patch or ordinary PNG of the bar that represents the completed portion of the work represented by this ProgressBar node. This is typically displayed on the left side of the track. This will be blended with the color specified by the <code>filledBarBlendColor</code> field, if set to a non-default value.</td></tr><tr><td>trackBlendColor</td><td>color</td><td>0xFFFFFFFF</td><td>This color is blended with the graphical image specified by <code>trackImageUri</code> field. The blending is performed by multiplying this value with each pixel in the image. If not changed from the default value, no blending will take place.</td></tr><tr><td>trackImageUri</td><td>uri</td><td>""</td><td>A 9-patch or ordinary PNG of the track of the progress bar, which surrounds the filled and empty bars. This will be blended with the color specified by the <code>trackBlendColor</code> field, if set to a non-default value.</td></tr><tr><td>percentage</td><td>integer</td><td>top</td><td>The percentage of the work that is done. Setting this field controls the visual appearance of the ProgressBar node.</td></tr></tbody></table></td>
</tr>
<tr>
<td>bufferingTextColor</td>
<td>color</td>
<td>system default</td>
<td>READ_WRITE</td>
<td>The color of the text displayed near the buffering bar defined by the <code>bufferingBar</code> field, when the buffering bar is visible. If this is 0, the system default color is used. To set a custom color, set this field to a value other than 0x0.</td>
</tr>
<tr>
<td>retrievingBar</td>
<td>ProgressBar node</td>
<td>internal instance default</td>
<td>READ_WRITE</td>
<td>Component that shows the progress of initial retrieving of the video, prior to starting playback. The fields of this internal node are the same as for the <code>bufferingBar</code> field, which are the fields of the internal ProgressBar node.</td>
</tr>
<tr>
<td>retrievingTextColor</td>
<td>color</td>
<td>system default</td>
<td>READ_WRITE</td>
<td>The color of the text displayed near the retrieving bar, when the retrieving bar defined in the <code>retrievingBar</code> field is visible. If this is 0, the system default color is used. To set a custom color, set this field to a value other than 0x0.</td>
</tr>
<tr>
<td>pivotNode</td>
<td>renderable node</td>
<td>-</td>
<td>READ_WRITE</td>
<td>The visible pivot node. This is a generic renderable node that can be used to display any component. This node is only displayed when video is paused.</td>
</tr>
</tbody></table>

### Closed caption fields

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
<td>globalCaptionMode</td>
<td>option string</td>
<td>Off</td>
<td>READ\_WRITE</td>
<td>Sets the value of the global Roku closed-caption mode. This can be used to allow the user or the application to change the closed-caption mode in an application just before or during video playback. The possible options are:<br /><br />
<table>
<thead>
<tr>
<th>Option</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td>"Off"</td>
<td>Turns the global Roku closed-caption mode off.</td>
</tr>
<tr>
<td>"On"</td>
<td>Turns the global Roku closed-caption mode on.</td>
</tr>
<tr>
<td>"Instant replay"</td>
<td>Sets the global Roku closed-caption setting to display captions only during instant replay.</td>
</tr>
<tr>
<td>"When mute"</td>
<td>Sets the global Roku closed-caption setting to display captions only when the volume is muted. (This only applies to Roku TVs.)</td>
</tr>
</tbody>
</table>
<br /><br />The app should set the <code>subtitleTrack</code> field regardless of the selected Caption Mode.</td>
</tr>
<tr>
<td>suppressCaptions</td>
<td>boolean</td>
<td>false</td>
<td>READ\_WRITE</td>
<td>Suppresses the closed caption for the purpose of resolving conflicts in cases where UI elements are drawn.<br /><br />Note that most of the disabling/enabling of the captions are done by the Roku OS, including enabling closed caption for Instant Replay.</td>
</tr>
<tr>
<td>subtitleTrack</td>
<td>string</td>
<td>&nbsp;</td>
<td>READ\_WRITE</td>
<td>The identifier of the selected subtitle track. Subtitles may or may not be visible on the screen, depending upon the user's caption mode setting. <br /><br />Reading this field will return the identifier of the subtitle track selected by the user. Writing this the field will change the track.<br /><br />See also: <a href="#closed-caption-fields">globalCaptionMode</a></td>
</tr>
<tr>
<td>currentSubtitleTrack</td>
<td>string</td>
<td>&nbsp;</td>
<td>READ\_ONLY</td>
<td>The identifier of the selected subtitle track. Subtitles may or may not be visible on the screen, depending upon the user's caption mode setting. <br /><br />Reading this field will return the identifier of the subtitle track that is playing. When the user has not selected a track, the Roku media player will select a track based on the preferred caption language system setting.</td>
</tr>
<tr>
<td>availableSubtitleTracks</td>
<td>array of associative arrays</td>
<td>\[ ] empty array</td>
<td>READ\_ONLY</td>
<td>The list of subtitle tracks available in the video stream. The array is initially populated with the tracks specified in the Content Meta-Data, and additional tracks are added if they are detected by the digital video player. Each associative array has the following entries:<br /><br />
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Description</td>
<td>string</td>
<td>Descriptive name of the subtitle track</td>
</tr>
<tr>
<td>Language</td>
<td>string</td>
<td>ISO 639-2 three-letter language code</td>
</tr>
<tr>
<td>TrackName</td>
<td>string</td>
<td>The track identifier. The value of this field may be used to select the subtitle track.</td>
</tr>
<tr>
<td>HasAccessibilityDescription<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td>
<td>boolean</td>
<td>HLS: represents "public.accessibility.describes-music-and-sound."</td>
</tr>
<tr>
<td>HasAccessibilityCaption<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td>
<td>boolean</td>
<td>HLS: represents "public.accessibility.transcribes-spoken-dialog." <br /><br />DASH: Subtitle track contains captions</td>
</tr>
<tr>
<td>HasAccessibilitySign<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td>
<td>boolean</td>
<td>DASH: Subtitle track contains a sign-language interpretation of an audio component info.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>captionStyle</td>
<td>associative array</td>
<td>system default</td>
<td>READ\_WRITE</td>
<td>Allows apps to style closed captions. For any keys that are absent from the associative array, or for unexpected values, the Default value is assumed for that property. Following are the possible key names and values for this field:<br /><br />
<table>
<thead>
<tr>
<th>Property</th>
<th>Possible Values</th>
</tr>
</thead>
<tbody>
<tr>
<td>Text/Font</td>
<td>Default<br />Serif Fixed Width<br />Serif Proportional<br />Sans Serif Fixed Width<br />Sans Serif Proportional<br />Casual<br />Cursive<br />Small Caps</td>
</tr>
<tr>
<td>Text/Effect</td>
<td>Default<br />None<br />Raised<br />Depressed<br />Uniform<br />Drop shadow (left)<br />Drop shadow (right)</td>
</tr>
<tr>
<td>Text/Size</td>
<td>Default<br />Large<br />Medium<br />Small</td>
</tr>
<tr>
<td>Text/Color</td>
<td>Default<br />White<br />Black<br />Red<br />Green<br />Blue<br />Yellow<br />Magenta<br />Cyan</td>
</tr>
<tr>
<td>Text/Opacity</td>
<td>Default<br />25%<br />50%<br />75%<br />100%</td>
</tr>
<tr>
<td>Background/Color</td>
<td>Default<br />White<br />Black<br />Red<br />Green<br />Blue<br />Yellow<br />Magenta<br />Cyan</td>
</tr>
<tr>
<td>Background/Opacity</td>
<td>Default<br />Off<br />25%<br />50%<br />75%<br />100%</td>
</tr>
<tr>
<td>Window/Color</td>
<td>Default<br />White<br />Black<br />Red<br />Green<br />Blue<br />Yellow<br />Magenta<br />Cyan</td>
</tr>
<tr>
<td>Window/Opacity</td>
<td>Default<br />Off<br />25%<br />50%<br />75%<br />100%</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
<p data-local-id="a695026f2536" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true" data-pm-slice="1 1 [&quot;table&quot;,{&quot;displayMode&quot;:null,&quot;isNumberColumnEnabled&quot;:false,&quot;layout&quot;:&quot;center&quot;,&quot;localId&quot;:&quot;88252759-35bc-4dad-8da5-dbb7001a6870&quot;,&quot;width&quot;:1088,&quot;__autoSize&quot;:false},&quot;tableRow&quot;,{&quot;localId&quot;:&quot;a92db8f8-a762-4d63-ae1a-547fdaacf623&quot;},&quot;tableCell&quot;,{&quot;colspan&quot;:1,&quot;rowspan&quot;:1,&quot;colwidth&quot;:[172],&quot;background&quot;:null,&quot;localId&quot;:&quot;af890671-7f2b-4ce9-be79-274ca4941038&quot;,&quot;valign&quot;:null}]">captionRenderArea</p>
</td>
<td>&nbsp;
<p data-local-id="a2c59b0a04d5" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true" data-pm-slice="1 1 [&quot;table&quot;,{&quot;displayMode&quot;:null,&quot;isNumberColumnEnabled&quot;:false,&quot;layout&quot;:&quot;center&quot;,&quot;localId&quot;:&quot;88252759-35bc-4dad-8da5-dbb7001a6870&quot;,&quot;width&quot;:1088,&quot;__autoSize&quot;:false},&quot;tableRow&quot;,{&quot;localId&quot;:&quot;a92db8f8-a762-4d63-ae1a-547fdaacf623&quot;},&quot;tableCell&quot;,{&quot;colspan&quot;:1,&quot;rowspan&quot;:1,&quot;colwidth&quot;:[114],&quot;background&quot;:null,&quot;localId&quot;:&quot;62a07f94-f52e-4479-ba7c-de0b51006dd1&quot;,&quot;valign&quot;:null}]">associative array</p>
</td>
<td>system default&nbsp;</td>
<td>READ\_WRITE&nbsp;</td>
<td>
<p>Renders captions in specific areas on a screen. You can use this function to display captions in custom positions for some PreView and other non-full-screen scenarios.</p>
<div class="tableView-content-wrap" data-prosemirror-initial-todom-render="true" data-prosemirror-content-type="node" data-prosemirror-node-name="table" data-prosemirror-node-block="true" data-pm-slice="1 1 []">
<div data-testid="table-alignment-container">
<div class="pm-table-resizer-container">
<div class="resizer-item display-handle">
<div class="pm-table-container" data-number-column="false" data-layout="default" data-testid="table-container">
<div class="pm-table-wrapper">
<table data-number-column="false" data-layout="default" data-autosize="false" data-table-local-id="e4b488a9-6cbd-4846-9373-08aa2f9f7f0f" data-table-width="760" data-ssr-placeholder="table-e4b488a9-6cbd-4846-9373-08aa2f9f7f0f" data-ssr-placeholder-replace="table-e4b488a9-6cbd-4846-9373-08aa2f9f7f0f"><colgroup><col /><col /><col /></colgroup>
<tbody>
<tr data-local-id="b0148b9f4e6b" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<th class="pm-table-header-content-wrap" data-colwidth="175" data-local-id="4bb314f6-3aae-4c94-93fa-f22f060c77de" data-prosemirror-content-type="node" data-prosemirror-node-name="tableHeader" data-prosemirror-node-block="true">
<p data-local-id="7a70612ea955" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Key</strong></p>
</th>
<th class="pm-table-header-content-wrap" data-colwidth="54" data-local-id="df856d21-403d-4a82-b349-81d90ab9454e" data-prosemirror-content-type="node" data-prosemirror-node-name="tableHeader" data-prosemirror-node-block="true">
<p data-local-id="4cf39d2b91de" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Type</strong></p>
</th>
<th class="pm-table-header-content-wrap" data-colwidth="437" data-local-id="06be89ea-d396-4178-b399-449d9fb05a47" data-prosemirror-content-type="node" data-prosemirror-node-name="tableHeader" data-prosemirror-node-block="true">
<p data-local-id="5efc1f7b0c8c" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true"><strong data-prosemirror-content-type="mark" data-prosemirror-mark-name="strong">Description</strong></p>
</th>
</tr>
<tr data-local-id="687aeff84a03" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="ee270114-bca6-4a9f-9cb5-af2fb464ef4a" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="204f81fe15a4" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">mode</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="5d3be50f-46fc-45dd-b11d-8d7bfb5d95e9" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="196b706c1592" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">string</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="11b02faa-5950-4d22-9b78-889ca2cdcb79" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<ul class="ak-ul" data-local-id="04ac3919-d2e9-4bb5-8c5b-492e77428cd9" data-prosemirror-content-type="node" data-prosemirror-node-name="bulletList" data-prosemirror-node-block="true">
<li data-local-id="31e0b411-5545-43b1-9f3a-1d7699db7378" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="6adda6a05942" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">fullscreen (default): Keeps existing behavior and captions are shown only in "full screen" video playback and in the position that indicated by the content. The rest of attributes are ignored in this mode.</p>
</li>
<li data-local-id="f8d791e7-cb64-48a6-b1c7-38ba43d46d01" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="8488cbf0e88f" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">auto: Roku OS uses current video boundaries to render captions. X, Y, Width, Height attributes will be ignored in this mode.</p>
</li>
<li data-local-id="a21d0f8e-ca38-45f8-b4a0-2b6b47db4334" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="ee6ced834147" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">override: Roku OS uses the area provided by X, Y, Width, Height attributes to render captions. The caption render area is not required to match height/width of captions. As captions can be a single word to multiple lines, channel can provide a much bigger area that is safe and there is no conflict with channel UI elements. In this mode the channel is responsible for any conflicts between captions and its own UI elements; Roku OS might disable smart caption adjustment to avoid interfering with the channel positioning choices.</p>
</li>
</ul>
</td>
</tr>
<tr data-local-id="54b4420ff8dd" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="bdadf249-9820-420f-be04-ad30780e98c6" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="c2561265b42c" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">overridePlacement</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="f77ee1b2-1958-4439-b207-377ec0c5e4b0" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="4a89a546b544" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">bool</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="40c22897-410e-411c-8ec1-3b130323afe3" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<ul class="ak-ul" data-local-id="1e1984fc-a333-4a4f-8cee-2a6fc5e55320" data-prosemirror-content-type="node" data-prosemirror-node-name="bulletList" data-prosemirror-node-block="true">
<li data-local-id="76d1d010-954f-4ad1-828c-c6239e5d8085" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="09657a2063fc" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">true (default for override mode): Caption position adjusted and shown in the "center-bottom" of the provided render boundary (either by X, Y, Width, Height attributes in override mode or video rect in auto mode) regardless of any positioning/sizing info in caption content.</p>
</li>
<li data-local-id="ea7010f1-89b9-4e23-989b-209a54f2abaf" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="c5e15f114e62" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">false (default for auto/fullscreen mode): Caption shown based on positioning/sizing information in caption content interpreted based on new render area. It is recommended when auto mode, but it could cause some unknown behavior (like caption fit, caption visibility or caption overlap with other GUI elements).</p>
</li>
</ul>
</td>
</tr>
<tr data-local-id="99b72a8b2444" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="c2981b21-a1fb-4131-84ac-63aa10583e90" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="18adac8e56bc" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">scaleFonts</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="fca78468-8579-4470-9e76-5646d3f2e359" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="3c2776ea4bc8" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">string</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="a4f2bbbb-391a-4b55-93ff-2715b2855f15" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<ul class="ak-ul" data-local-id="357204df-67b3-4fb8-afa5-e520dd156fe0" data-prosemirror-content-type="node" data-prosemirror-node-name="bulletList" data-prosemirror-node-block="true">
<li data-local-id="10fa0b49-9553-4cae-9273-3027121c6fd1" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="ff8173c62e4b" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">off: Fonts will shown based on full-screen and font sizes inside caption content calculations. No any scaling to be done!</p>
</li>
<li data-local-id="4f929a01-164f-4b79-a994-039d9289bc3a" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="55408d40834a" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">by-width (default): The original calculated font size will be scaled based on renderArea width to fullScreen width ratio.</p>
</li>
<li data-local-id="3ffca37c-fba9-4f22-aa45-7e17ebd889b7" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="32aa07dd09c4" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">by-height: The original font size will be scaled based on renderArea height to fullScreen height ratio.</p>
</li>
</ul>
</td>
</tr>
<tr data-local-id="a3291ef54f55" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="02784e0f-21d6-49e3-a043-4967f6d767a0" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="e33f96983f54" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">keepSafeMargins</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="34bb95b3-7e30-448d-9ff5-ddadbc15628e" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="a01d473b07cf" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">bool</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="661aeaf9-f301-4ea6-b3e8-a1f9f35f9c40" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<ul class="ak-ul" data-local-id="1ec3430a-6331-4148-a695-2fad5408b88a" data-prosemirror-content-type="node" data-prosemirror-node-name="bulletList" data-prosemirror-node-block="true">
<li data-local-id="aa6c39ae-c497-452f-9f68-7baf4bf5aace" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="21d2eae611d5" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">true (default for auto/fullscreen mode): OS preserves 10% on each side of new renderArea as non renderable. This is recommended option if "auto"/"fullscreen" mode selected.</p>
</li>
<li data-local-id="9d3f94d4-b50d-4e61-86ea-59da9f95afa0" data-prosemirror-content-type="node" data-prosemirror-node-name="listItem" data-prosemirror-node-block="true">
<p data-local-id="5d51cf624010" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">false (default for override mode): All defined area can be used for caption rendering without any safe margin observation.</p>
</li>
</ul>
</td>
</tr>
<tr data-local-id="681a2fe8e1cc" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="6eef3cd6-8f9c-4236-90e5-83f8cbbd99f7" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="32bffa10892c" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">x</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="b6b53adc-f680-49c2-8866-9329953fa9b1" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="df8a57d48380" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">integer</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="23f126b3-8de2-4907-83b2-98b646e347ef" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="0faba36187c6" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">Horizontal starting offset (left edge) of the caption custom render area (in pixels relative to the video show position in UI).</p>
</td>
</tr>
<tr data-local-id="e9e3a1eba70d" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="eff9ed95-d502-47d7-b1ec-57b336ad8653" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="05365d263ae8" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">y</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="7c61e8ca-bce9-48dd-a939-a399284a4d66" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="b2c00fef3009" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">integer</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="656e5d1f-1e33-4b33-a10d-3773a8e6a6cd" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="3ac2a8d0f1ef" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">Vertical starting offset (top edge) of the caption custom render area (in pixels relative to the video show position in UI).</p>
</td>
</tr>
<tr data-local-id="63fea047786a" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="f1515e1b-375d-4465-8ce4-1ee0efa8842d" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="74e2dc223ec5" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">width</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="ea2c809d-e310-4b73-ba3d-511f55b1915a" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="fb5cbfac118e" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">integer</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="7a153dcc-6a43-42c7-94e7-d3b97ca29215" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="8ea311ed1f18" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">Width of the caption custom render area, in pixels. Recommended to use as big as channel UI allows without conflict to provide a flexible safe area that can fit long captions without need to justify them.</p>
</td>
</tr>
<tr data-local-id="dda9bc71b9a7" data-prosemirror-content-type="node" data-prosemirror-node-name="tableRow" data-prosemirror-node-block="true">
<td class="pm-table-cell-content-wrap" data-colwidth="175" data-local-id="4ffa51b9-a9cb-4aa2-a4c1-4a8a2b9c76d0" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="b0857696edac" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">height</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="54" data-local-id="49dce36a-fc61-4bf7-8f0b-8f523adafbe1" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="6914ac2d5fab" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">integer</p>
</td>
<td class="pm-table-cell-content-wrap" data-colwidth="437" data-local-id="1c224f05-8686-4c96-86b2-d4dbbb913f9d" data-prosemirror-content-type="node" data-prosemirror-node-name="tableCell" data-prosemirror-node-block="true">
<p data-local-id="e931ea979059" data-prosemirror-content-type="node" data-prosemirror-node-name="paragraph" data-prosemirror-node-block="true">Height of the caption custom render area, in pixels. Recommended to use as big as channel UI allows without conflict to provide a flexible safe area that can fit long captions without need to justify them.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

### Audio fields

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
      <td>mute</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Set to true to mute the audio of the video currently playing in the Video node. Set to false to restore audio.</td>
    </tr>
    <tr>
      <td>audioTrack</td>
      <td>string</td>
      <td />
      <td>READ\_WRITE</td>
      <td>The track identifier of the selected audio track. <br /><br />Reading this field will return the track identifier of the audio selected by the user.<br /><br />Writing this value will change the audio track. However,  apps should not do this unless they are implementing  their own track selection menu that users control. This is because the Roku OS selects the best track automatically based on preferred language setting on the device. See <a href="#automatic-audio-track-selection">Automatic audio track selection</a> for more information.</td>
    </tr>
    <tr>
      <td>currentAudioTrack</td>
      <td>String</td>
      <td />
      <td>READ\_ONLY</td>
      <td>The track identifier of the audio being played. Reading this field will return the track that is being played, which may be different than the track being selected (for example, when the Roku media player cannot play a certain format). <br /><br />When the user has not selected an audio track, the platform will select a track based on the preferred audio language setting.</td>
    </tr>
    <tr>
      <td>availableAudioTracks</td>
      <td>array of associative arrays</td>
      <td>\[ ] empty array</td>
      <td>READ\_ONLY</td>
      <td>Each associative array has the following entries:<br /><br /><table><thead><tr><th>Key</th><th>Type</th><th>Value</th></tr></thead><tbody><tr><td>Language</td><td>string</td><td>ISO 639-2 three-letter language code</td></tr><tr><td>Name</td><td>string</td><td>Descriptive name of the audio track</td></tr><tr><td>Track</td><td>string</td><td>The track identifier. The value of this field may be used to select the audio track.</td></tr><tr><td>HasAccessibilityDescription<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td><td>boolean</td><td>HLS: represents "public.accessibility.describes-video." <br /><br />DASH: Audio track contains a textual description (intended for audio synthesis) or an audio description describing a visual component.</td></tr><tr><td>HasAccessibilityEAI<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td><td>boolean</td><td>DASH: Audio track contains an element for improved intelligibility of the dialogue \[Enhanced Audio Intelligibility].</td></tr></tbody></table><br /><br />The field also retrieves audio description tracks which are typically seen on broadcast TV. An audio description track is mixed with the main audio track.</td>
    </tr>
    <tr>
      <td>seamlessAudioTrackSelection<br /><br /><em>Available since [Roku OS 13.0](doc:release-notes#roku-os-130)</em></td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Enables apps to continuously play video when the audio track is switched. This feature currently supports HLS only.<br /><br /><ul><li><strong>true</strong>: Continues video playback when the audio track changes (provided that HLS is being used and the audio format of the new audio track is the same as the original one). In this case, a brief period of no audio may occur while the audio tracks are switched.</li><li><strong>false</strong>: Pauses video playback for approximately 1 second when the audio track changes (default behavior). In this case, a black screen and/or buffering appears while the audio tracks are switched.</li></ul><br />To enable this feature, you must set this field before sending any command to the Video node. This field may not be changed during video playback.</td></tr>
<tr>
<td>audioFormat</td>
<td>string</td>
<td>&nbsp;</td>
<td>READ\_ONLY</td>
<td>Contains the format of the currently playing audio.</br><table>
<thead>
<tr>
<th>Value</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>""</td>
<td>No stream playing</td>
</tr>
<tr>
<td>none</td>
<td>Stream contains no playable audio</td>
</tr>
<tr>
<td>unknown</td>
<td>Stream contains unknown audio</td>
</tr>
<tr>
<td>aac</td>
<td>ISO/IEC 14496-3, Advanced Audio Coding</td>
</tr>
<tr>
<td>aac\_adif</td>
<td>ISO/IEC 14496-3, Advanced Audio Coding, ADIF container</td>
</tr>
<tr>
<td>aac\_adts</td>
<td>ISO/IEC 14496-3, Advanced Audio Coding, ADTS container</td>
</tr>
<tr>
<td>aac\_latm</td>
<td>ISO/IEC 14496-3, Advanced Audio Coding, LATM container</td>
</tr>
<tr>
<td>ac3</td>
<td>Dolby Digital</td>
</tr>
<tr>
<td>ac4</td>
<td>Dolby Audio - AC-4</td>
</tr>
<tr>
<td>alac</td>
<td>Apple Lossless</td>
</tr>
<tr>
<td>dts</td>
<td>DTS Coherent Acoustics</td>
</tr>
<tr>
<td>eac3</td>
<td>Dolby Digital Plus</td>
</tr>
<tr>
<td>flac</td>
<td>Free Lossless Audio Codec</td>
</tr>
<tr>
<td>flac</td>
<td>Free Lossless Audio Codec</td>
</tr>
<tr>
<td>mat</td>
<td>Dolby Audio - TrueHD</td>
</tr>
<tr>
<td>mp3</td>
<td>ISO/IEC 11172-3, MPEG Audio Layer III</td>
</tr>
<tr>
<td>pcm</td>
<td>linear PCM</td>
</tr>
<tr>
<td>vorbis</td>
<td>Ogg Vorbis</td>
</tr>
<tr>
<td>wma</td>
<td>Microsoft Windows Media Audio (sunset as of [Roku OS 12.5](doc:release-notes#roku-os-125))</td>
</tr>
<tr>
<td>wmapro</td>
<td>Microsoft Windows Media Pro Audio (sunset as of [Roku OS 12.5](doc:release-notes#roku-os-125))</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<td>supplementaryAudioVolume</td>
<td>int</td>
<td>50</td>
<td>READ\_WRITE</td>
<td>Sets the volume of the description tracks separately from the main audio track. The field value can range from 0 to 100.</td>
</tr>
  </tbody></table>

#### Automatic audio track selection

If multiple audio tracks are available for video content, the Roku OS automatically selects the best track based on the preferred audio track settings on the device (language, country code, and descriptive setting) and the quality of the audio track (bitrate/format).

The user can manually set their preferred language in the **Settings > Audio > Audio preferred language** menu, and the country code and descriptive setting are automatically set when the user selects an audio track. The preferred language setting is also automatically updated when the user selects an audio track (the preferred language is set to the language of the selected track).

For example, if the user chooses Portuguese as their preferred language, the Roku OS will by default select the Portuguese audio track the next time they watch content (if available). If the selected audio track is in Portuguese (Brazil), the user's preferred country is set to Brazil, and the Portuguese (Brazil) audio track is selected by default the next time the user watches content.

> It is recommended that apps use the audio track selection logic provided by the Roku OS instead of implementing their own.

Overall, the Roku OS uses the following criteria (listed in order of priority) to determine which audio track to play:

1. Preferred audio track settings:

   a. The track explicitly selected by the user.

   b. The track with the user's preferred language, country code and descriptive setting.

   c. The track with the preferred language and the country code.

   d. The track with the preferred language that is marked as the default audio track.

   e. The track with the preferred language.

   f. The first track.

2. Highest quality audio track (based on bitrate/format)

> Any language not included in the provided list of common languages is added to the list as the last entry. The common languages list may only have a single unlisted language. For example, if the user selects Korean as the audio track for a movie, the last entry in the common languages list is Korean, which is used as the preferred language from thereon. If the user then selects a Chinese audio track, Chinese overwrites Korean as the last entry in the common language list and is used as the preferred language.

### CDN fields

Developers can receive event-based notifications when the CDN is switched during content playback.

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cdnSwitch</td>
      <td>roArray of roAssociativeArrays</td>
      <td><table><thead><tr><th>Key</th><th>Required/ Optional</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>URLFilter</td><td>Required</td><td>String</td><td>A substring that identifies the (base)URL to which these CDN settings apply. <br /><br />The Roku media player matches this string against all (base)URLs listed in the manifest and applies the setting to all (base)URLs that contain this substring.</td></tr><tr><td>ContentFilter</td><td>Optional</td><td>String</td><td>For DASH streams, a substring that filters the period or asset ID to which these CDN settings apply.<br /><br /> The Roku player only applies these CDN setting to periods with a period ID or asset ID that contains this substring. <br /><br />This match is used in addition to the URL filter.</td></tr><tr><td>Priority</td><td>Required</td><td>Integer</td><td>For configuring failovers, sets the priority for this (base)URL from 1 to x (a priority of 0 or less is invalid). <br /><br />A lower value indicates a higher priority. For example, a (base)URL with a priority of 1 is higher than another with a priority of 10. <br /><br />If the highest priority server fails, traffic is routed to the server with the next highest priority. If all servers are configured with the same priority, and one fails, no failover will happen.</td></tr><tr><td>Weight</td><td>Required</td><td>Integer</td><td>For configuring load balancing, sets the relative weight for all (base)URLs with the same priority. This must be a value of 1 or greater (a weight of 0 disables a CDN). <br /><br />The weight of a given BaseURL is its weight value divided by the sum of all weight values. This means that to spread the load equally across multiple CDNs with the same priority, set the weight for each to the same value. To configure the weights for two servers to 80% and a third server to 20%, for example, set servers one and two to 8 and server three to 4.</td></tr><tr><td>ServiceLocation</td><td>Optional</td><td>String</td><td>A blacklist of failed BaseURL locations.</td></tr></tbody></table></td>
      <td>Indicates that a CDN switching event has occurred.<br /><br />Apps can monitor this field in the background. When the Video player detects a CDN change, it automatically updates this field.</td>
    </tr>
  </tbody>
</table>

### Miscellaneous fields

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
      <td>MaxVideoDecodeResolution</td>
      <td>vector2d (width, height)</td>
      <td>\[0,0]</td>
      <td>READ\_WRITE</td>
      <td>Sets the max resolution required by your video.<br /><br />Video decode memory is a shared resource with OpenGL texture memory. The Brightscript 2D APIs are implemented using OpenGL texture memory on Roku models that support the Open GL APIs (see [Hardware specifications](doc:hardware) for a list of these models).<br /><br />On models that do not support Open GL APIs, this field exists for API compatibility but has no effect on actual memory allocations.<br /><br />Video decode memory allocation is based on a resolution of 1920x1080 or 1280x720 as the maximum supported resolution for a particular Roku model (see [Hardware specifications](doc:hardware) for a list of these models).<br /><br />This field enables applications that want to use both the 2D APIs and video playback with a lower resolution than 1080p. Without this field, these applications are likely to not have enough memory for either video playback or UI rendering.<br /><br />If width is 0 (the default), it is unlimited. If height is 0 (the default), it is unlimited.</td>
    </tr>
    <tr>
      <td>cgms</td>
      <td>integer</td>
      <td>0</td>
      <td>READ\_WRITE</td>
      <td>Sets the CGMS (Copy Guard Management System) on analog outputs to the desired level. The valid values are:<br /><br /><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>0</td><td>No copy restriction</td></tr><tr><td>1</td><td>Copy no more</td></tr><tr><td>2</td><td>Copy once allowed</td></tr><tr><td>3</td><td>No copying permitted</td></tr></tbody></table></td>
    </tr>
    <tr>
      <td>enableScreenSaverWhilePlaying</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Set this to true to allow the screensaver to activate even if video is playing, as long as that video does not cover 50% or more of the screen. Set to false to block the screensaver activating if any video is playing. Note that this field has no effect when the video node plays audio only streams. For screensaver control with audio only streams, use the disableScreenSaver field.</td>
    </tr>
    <tr>
      <td>disableScreenSaver</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Set this to true to suppress the screensaver. This is typically used to suppress the screensaver when playing audio-only streams.</td>
    </tr>
    <tr>
      <td>contentBlocked</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_ONLY</td>
      <td><em>Available since [Roku OS 8](doc:release-notes#roku-os-8).</em><br /><br />Determines whether the current content is blocked.</td>
    </tr>
  </tbody>
</table>

## Data bindings

See [Content Meta-Data](doc:content-metadata) for the required and optional play parameters, and descriptive information for video playback. Set these parameters in a [ContentNode](doc:contentnode) node, and assign the ContentNode to the content field of the Video node to apply the parameters to a particular video content item.

For HTTPS access, note the following Content Meta-Data attributes:

* `HttpCertificatesFile`
* `HttpCookies`
* `HttpHeaders`
* `HttpSendClientCertificates`

These attributes must be set to handle secure HTTP transfers of video files. Note that this is a different HTTPS mechanism than used for other SceneGraph nodes as described in [roHttpAgent](doc:rohttpagent).

> Prior to [Roku OS 7.2](doc:release-notes#roku-os-72), each Audio and Video node created and configured an `HttpAgent` only when the first content was played in a given Audio or Video node instance. This sometimes meant that additional content would fail to play in the same node because headers, cookies, and certificates were not updated or correctly replaced from the new content record. Apps that are dependent upon this behavior will need to be updated to set the required data into the Content Meta-Data for each piece of content, or to programmatically set those values into the `HttpAgent` before playing each piece of content.

## Example

To play video in an application, you first need to create a Video node, either in BrightScript using the roSGNode [ifSGNodeChildren](doc:ifsgnodechildren) interface, or in XML markup. For example, in XML markup:

```xml
<Video
  id="musicvideos"
  width="1280"
  height="720"
  translation="[0,0]" />
```

The Video node is then scripted to specify the URL of the video stream, streaming format, video title, and any other [Content Meta-Data](doc:content-metadata) attributes needed for the particular playback. Once the video properties are specified, the video can be played by setting the Video node `control` field value to `play`.

```xml
<script type="text/brightscript">
  <![CDATA[
    sub init()
      m.top.setFocus(true)
      setVideo()
    end sub

    function setVideo() as void
      videoContent = createObject("RoSGNode", "ContentNode")
      videoContent.url = "https://roku.s.cpl.delvenetworks.com/media/59021fabe3b645968e382ac726cd6c7b/60b4a471ffb74809beb2f7d5a15b3193/roku_ep_111_segment_1_final-cc_mix_033015-a7ec8a288c4bcec001c118181c668de321108861.m3u8"
      videoContent.title = "Test Video"
      videoContent.streamformat = "hls"

      m.video = m.top.findNode("musicvideos")
      m.video.content = videoContent
      m.video.control = "play"
    end function
  ]]>
</script>
```