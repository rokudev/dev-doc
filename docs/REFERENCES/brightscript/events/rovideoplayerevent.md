---
title: roVideoPlayerEvent
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
The roVideoPlayer sends the roVideoPlayerEvent with the following predicates that indicate its valid event types:

## Supported methods

### isPaused() as Boolean

Checks whether video playback was paused by the user. This method returns true if video playback was paused; otherwise, it returns false.

### isListItemSelected() as Boolean

Checks whether the video player is about to start playing a new item in the content list. This method returns true if a new item in the content list was selected; otherwise, it returns false.

#### GetIndex() as Integer

Returns the index of the item that is about to start playing.

### isFormatDetected() as Boolean

Checks whether an event has been fired when the format of all tracks in the media stream have been identified.

Specific information about the event can be obtained by calling the GetMessages() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Format Detected").

#### GetInfo() as Object

Returns information about the video player event. This method returns an roAssociativeArray that contains the following keys:

| Key      | Value                                     |
| -------- | ----------------------------------------- |
| audio    | The format of the audio stream, if any    |
| captions | The format of the captioning data, if any |
| video    | The format of the video stream, if any    |

### isRequestFailed() as Boolean

Checks whether video playback has failed. This method returns true if video playback failed; otherwise, it returns false.

Specific information about the event can be obtained by calling the GetMessage(), GetIndex(), and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Segment download started").

#### GetIndex() as Integer

Returns the error ID, which may be one of the following values:

| Value | Description                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------- |
| 0     | Network error : server down or unresponsive, server is unreachable, network setup problem on the client. |
| -1    | HTTP error: malformed headers or HTTP error result.                                                      |
| -2    | Connection timed out                                                                                     |
| -3    | Unknown error                                                                                            |
| -4    | Empty list; no streams were specified to play                                                            |
| -5    | Media error; the media format is unknown or unsupported                                                  |
| -6    | DRM error                                                                                                |

#### GetInfo() as Object

Returns an associative array containing information about the event failure. The associative array contains the following key-value pairs:

| Key     | Type    | Value                                                                                      |
| ------- | ------- | ------------------------------------------------------------------------------------------ |
| ClipIdx | Integer | The zero starting index of the item in the content list this event is related to.          |
| Ignored | Boolean | True if the error was ignored and the player skipped to the next item in the content list. |

### isSegmentDownloadStarted() as Boolean

Checks whether the individual segments in an HLS or smooth stream are about to be downloaded. This method returns true if segments in the stream are going to be downloaded; otherwise, it returns false.

Specific information about the event can be obtained by calling the GetMessages() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Segment download started").

#### GetInfo() as Object

Returns an associative array containing the following information about the segment download event:

| Key        | Value                                          |
| ---------- | ---------------------------------------------- |
| Sequence   | Stream segment sequence number                 |
| SegBitrate | Bitrate of the segment, in kilobits per second |
| StartTime  | Timestamp of the start of the segment data     |
| EndTime    | Timestamp of the end of the segment data       |

### isStreamStarted() as Boolean

Checks whether the video stream has started playing. This method returns true if the video stream has started playing; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetIndex() and GetInfo() methods on the event.

#### GetIndex() as Integer

Returns the segment sequence number.

#### GetInfo() as Object

Returns an associative array containing the following information about the stream started event:

| Key             | Type    | Value                                                                    |
| --------------- | ------- | ------------------------------------------------------------------------ |
| Url             | String  | URL of video stream                                                      |
| StreamBitrate   | Integer | average bitrate of stream, in bits per second                            |
| MeasuredBitrate | Integer | measured network bandwidth in kibibits per second, used to select stream |
| IsUnderrun      | Boolean | true if this is a rebuffer due to an underrun                            |

### isStatusMessage() as Boolean

Checks whether status information or other diagnostic message is available. This method returns true if status information or  diagnostic message is available; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage() method on the event.

#### GetMessage() as String

Returns status information or other diagnostic message, which may be one of the following:

* "startup progress"
* "start of play"
* "playback stopped"
* "end of stream" (deprecated)
* "end of playlist" (deprecated)

### isFullResult() as Boolean

Checks whether video playback has completed at the end of the content list. This method returns true if video playback has completed at the end of the content list; otherwise, it returns false.

### isResumed() as Boolean

Checks whether video playback has resumed. This method returns true if video playback has resumed; otherwise, it returns false.

### isCaptionModeChanged() as Boolean

Checks whether closed caption mode or track has been changed by the user. This method returns true if closed caption mode or track has been changed by the user; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex(), and GetInfo() methods on the event.

#### GetMessage() as String

Returns a caption track name, such as: "eia608/1" ,"eia608/3", and so on.

#### GetIndex() as Integer

Returns the index of the captions mode, which may be one of the following values:

| Index | Mode           |
| ----- | -------------- |
| 0     | Off            |
| 1     | On             |
| 2     | Instant replay |

#### GetInfo() as Object

| Name    | Return Type | Return Value | Description                         |
| ------- | ----------- | ------------ | ----------------------------------- |
| GetInfo | Object      | Invalid      | This method always returns invalid. |

#### Example: isCaptionModeChanged() Event

```
Function showVideoScreen(episode As Object)
  port = CreateObject("roMessagePort")
  screen = CreateObject("roVideoScreen")
  'some video stream
  '...
  'etc...
  episode.SubtitleConfig = {
    TrackName : "eia608/1"
  }
  screen.SetContent(episode)
  screen.SetMessagePort(port)
  screen.Show()
  while true
    msg = wait(0, port)
    if type(msg) = "roVideoScreenEvent" then
      if msg.isCaptionModeChanged()
        print "Caption Mode Changed"
        print "Caption Mode: "; msg.GetIndex()
        print "Caption track: "; msg.GetMessage()
      end if
    end if
  end while
End Function
```

### isTimedMetaData() as Boolean

Checks whether an ID3 timecode has passed with an event that includes key-value pairs for timed metadata that the BrightScript app is interested in.

All timed metadata is released after it is delivered to the BrightScript app.  It is also released without delivery if the BrightScript app did not indicate its interest in the data with a [SetTimedMetaDataForKeys()](doc:ifvideoplayer) method call.

This method returns true if an ID3 timecode has passed; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex(), and GetInfo() methods on the event.

#### GetMessage() as String

Returns the string "Timed Metadata".

#### GetIndex() as Integer

Returns the PTS timecode.

| Name     | Return Type | Return Value  | Description |
| -------- | ----------- | ------------- | ----------- |
| GetIndex | Integer     | PTS timecode. |             |

#### GetInfo() as Object

Returns an associative array with timedMetadata at the PTS timecode specified in the index.

### isPlaybackPosition() as Boolean

Checks whether the current position in the video stream has changed. This event is sent periodically while playing, as determined by the last call to [ifVideoPlayer.SetPositionNotificationPeriod](ifvideoplayer#setpositionnotificationperiodperiod-as-integer-as-void). This method returns true if the current position in the video stream has changed; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetIndex() and GetInfo() methods on the event.

### GetIndex() as Integer

Returns current position in the stream (in seconds) from the beginning.

### GetInfo() as Object

Returns an roAssociativeArray array with the following key-value pairs:

| Member  | Type    | Value                                                                            |
| ------- | ------- | -------------------------------------------------------------------------------- |
| ClipIdx | Integer | The zero starting index of the item in the content list this event is related to |
| ClipPos | Integer | The player position relative to the start of the clip in milliseconds            |

### isStreamSegmentInfo() as Boolean

Checks whether playback has begun of a segment in an HLS, DASH, or smooth stream. This method returns true if the playback of a segment in an HLS, DASH, or smooth stream has begun; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Stream segment info").

#### GetIndex() as Integer

Returns the segment start time in seconds.

#### GetInfo() as Object

Returns an associative array with the following information about the stream segment:

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>StreamBandwidth</td>
      <td>Bandwidth of the stream being played in kbps</td>
    </tr>

    <tr>
      <td>SegStartTime</td>
      <td>Segment start time (offset from start of stream) in milliseconds</td>
    </tr>

    <tr>
      <td>Sequence</td>
      <td>Stream segment sequence number</td>
    </tr>

    <tr>
      <td>SegUrl</td>
      <td>Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth)</td>
    </tr>

    <tr>
      <td>HdrMode</td>
      <td>Indicates the HDR format of the content, which may be one of the following values:<ul><li>0: UNKNOWN</li><li>1: NONE (SDR)</li><li>2: HDR10</li><li>3: DOLBY\_VISION</li><li>4: HLG10</li><li>5: HDR10\_PLUS</li><li>6: SL\_HDR2</li></ul><h3>isDownloadSegmentInfo() as Boolean</h3><p>Checks whether a segment in an adaptive stream (HLS, Smooth, or DASH) has been downloaded. This method returns true if a segment in an adaptive stream (HLS, Smooth, or DASH) has been downloaded; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex() and GetInfo() methods on the event.</p><h4>GetMessage() as String</h4><p>Returns a description of the message (for example, "Download segment info").</p><h4>GetIndex() as Integer</h4><p>Returns the segment sequence number.</p><h4>GetInfo() as Object</h4><p>Returns an associative array containing the following information about the segment download:</p></td>
    </tr>
  </tbody>
</table>
