---
title: Ifaudiometadata
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

# ifAudioMetadata

## Implemented by 

| Name            | Description                               |
| --------------- | ----------------------------------------- |
| [roAudioMetadata](/docs/references/brightscript/components/roaudiometadata.md "roAudioMetadata") | This component provides developers access to audio file metadata included in many audio files |


## Supported methods

### SetUrl(url as String) as Void

#### Description

Sets the URL to the audio file. Only file URLs are initially supported

#### Parameters

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| url  | String | The URL of the audio file. |

### GetTags() as Object

#### Description

Returns an associative array that contains a simple set of tags that are common to most audio formats.

#### Return Value

An associative array that may be set to one of the following values:

| Name     | Type        | Notes                                                                            |
| -------- | ----------- | -------------------------------------------------------------------------------- |
| title    | String      |                                                                                  |
| artist   | String      | Returns the first artist found even though many titles have multiple artists     |
| album    | String      |                                                                                  |
| composer | String      | Returns the first composer found even though many titles have multiple composers |
| comment  | String      |                                                                                  |
| genre    | String      |                                                                                  |
| year     | Integer     |                                                                                  |
| track    | Integer     |                                                                                  |

### GetAudioProperties() as Object

#### Description

Returns an associative array with a simple set of audio properties.

#### Return Value

An associative array that may be set to one of the following values (these are values that may involve reading a larger portion of the file and thus may take longer to retrieve than tags):

| Name       | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| length     | Integer | Duration in seconds                                       |
| bitrate    | Integer | In kilobytes per second                                   |
| samplerate | Integer | Samples per second. For example: 44100 for CD sample rate |
| channels   | Integer | Number of channels. For example: 2 for stereo             |

### GetCoverArt() as Object

#### Description

Returns the cover art, if available.

#### Return Value

An associative array with two entries: "bytes" and "type".

