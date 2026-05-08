---
title: roAudioPlayerEvent
excerpt: 'Event type sent by roAudioPlayer to report audio playback state changes'
deprecated: false
hidden: false
metadata:
  title: 'roAudioPlayerEvent'
  description: 'Documents roAudioPlayerEvent, sent by roAudioPlayer to report playback state changes including paused, resumed, failed, and segment download events.'
  robots: index
next:
  description: ''
---

The roAudioPlayer sends the roAudioPlayerEvent with the following predicates that indicate its valid event types:

## Supported methods

### isListItemSelected() as Boolean

A stream has been selected to start playing.

### isStatusMessage() as Boolean

Status information is available.

### isFullResult() as Boolean

Audio playback completed at end of content.

### isPaused() as Boolean

Audio playback was paused by the user.

### isResumed() as Boolean

Audio playback has resumed

### isPartialResult() as Boolean

Audio playback was interrupted

### isRequestFailed() as Boolean

Audio playback failed due to an error

### isTimedMetaData() as Boolean

This event is fired when an ID3 timecode has passed with an event that includes key/value pairs for timed metadata that the Brightscript app is interested in.

All timed metadata is released after it is delivered to the Brightscript app. It is also released without delivery if the Brightscript app did not indicate it’s interest in the data with a SetTimedMetaDataForKeys() call.

### isRequestSucceeded() as Boolean

Stream playback has completed successfully.

#### GetMessage() as String

Returns the string "Timed Metadata"

#### GetInfo() as Object

Returns an associative array of key/value pairs of timedMetadata at the pts timecode specified in the index.

#### GetIndex() as Integer

Returns the index of the audio stream.

### isFormatDetected() as Boolean

Checks whether an event has been fired when the format of all tracks in the media stream have been identified.

Specific information about the event can be obtained by calling the GetMessages() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for exampe, "Format Detected").

#### GetInfo() as Object

Returns information about the video player event. This method returns an roAssociativeArray that contains the following keys:

| Key      | Value                                     |
| -------- | ----------------------------------------- |
| audio    | The format of the audio stream, if any    |
| captions | The format of the captioning data, if any |
| video    | The format of the video stream, if any    |

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

### isStreamSegmentInfo() as Boolean

Checks whether playback has begun of a segment in an HLS, DASH, or smooth stream. This method returns true if the playback of a segment in an HLS, DASH, or smooth stream has begun; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Stream segment info").

#### GetIndex() as Integer

Returns the segment start time in seconds.

#### GetInfo() as Object

Returns an associative array with the following information about the stream segment:

<Table>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        StreamBandwidth
      </td>

      <td>
        Bandwidth of the stream being played in kbps
      </td>
    </tr>

    <tr>
      <td>
        SegStartTime
      </td>

      <td>
        Segment start time (offset from start of stream) in milliseconds
      </td>
    </tr>

    <tr>
      <td>
        Sequence
      </td>

      <td>
        Stream segment sequence number
      </td>
    </tr>

    <tr>
      <td>
        SegUrl
      </td>

      <td>
        Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth)
      </td>
    </tr>

    <tr>
      <td>
        HdrMode
      </td>

      <td>
        Indicates the HDR format of the content, which may be one of the following values:  

        * 0: UNKNOWN
        * 1: NONE (SDR)
        * 2: HDR10
        * 3: DOLBY_VISION
        * 4: HLG10
        * 5: HDR10_PLUS
        * 6: SL_HDR2
      </td>
    </tr>
  </tbody>
</Table>

### isDownloadSegmentInfo() as Boolean

Checks whether a segment in an adaptive stream (HLS, Smooth, or DASH) has been downloaded. This method returns true if a segment in an adaptive stream (HLS, Smooth, or DASH) has been downloaded; otherwise, it returns false.  Specific information about the event can be obtained by calling the GetMessage(), GetIndex() and GetInfo() methods on the event.

#### GetMessage() as String

Returns a description of the message (for example, "Download segment info").

#### GetIndex() as Integer

Returns the segment sequence number.

#### GetInfo() as Object

Returns an associative array containing the following information about the segment download:

| Key              | Value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| Status           | Status of the download: 0 = success, nonzero = error                        |
| Sequence         | Stream segment sequence number (same as returned by GetIndex)               |
| SegUrl           | Stream segment URL (i.e., .ts file for HLS, stream fragment URL for smooth) |
| DownloadDuration | Amount of time spent downloading the segment, in milliseconds               |
| SegSize          | Segment size, in bytes                                                      |
| SegType          | Type of data in the segment: 1=audio, 2=video, 3=captions, 0=mux            |
| Bitrate          | Bitrate of the segment, in bits per second                                  |
| SegBitrate       | Bitrate of the segment, in kilobits per second (equal to Bitrate / 1000)    |
