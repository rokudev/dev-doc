---
title: Reformat
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

## Reformatting Test

##  Sections: CanDecodeAudio

### CanDecodeAudio(audio_format as Object) as Object

#### Description

Checks if the Roku Player can decode and play an audio format specified as an associative array. The general format of the associative arrays for CanDecodeAudio() is similar to the parameter and return associative arrays used in [CanDecodeVideo()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#candecodevideovideo_format-as-object-as-object)

#### Return Value

Returns an associative array that includes a Boolean value indicating if the audio format can be played, and the closest audio format supported by the Roku Player. The following are the keys of the requested audio format and supported audio format associative arrays:

| Key        | Type    | Value                                                        | Required? |
| :--------- | :------ | :----------------------------------------------------------- | :-------- |
| Codec      | string  | Specifies the audio codec: “aac”, “ac3”, “eac3”, "alac", "flac", “mp2”, “mp3”, “vorbis”, “wma” (sunset as of Roku OS 12.5), “wma pro” (sunset as of Roku OS 12.5), “dts” | Required  |
| Profile    | string  | Specifies the profile                                        | Optional  |
| ChCnt      | integer | Specifies the number of audio channels                       | Optional  |
| SampleRate | integer | Specifies the sample rate                                    | Optional  |
| BitRate    | integer | Specifies the bit rate in Kbit/sec                           | Optional  |
| Container  | string  | Specifies the container format                               | Optional  |

#### Parameters

| Name         | Type   |
| :----------- | :----- |
| audio_format | Object |

## Vertical Table: CanDecodeAudio

### CanDecodeAudio(audio_format as Object) as Object

| Description                                                  |
| :----------------------------------------------------------- |
| Checks if the Roku Player can decode and play an audio format specified as an associative array. The general format of the associative arrays for CanDecodeAudio() is similar to the parameter and return associative arrays used in [CanDecodeVideo()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#candecodevideovideo_format-as-object-as-object) |
| **Return Value**                                            |
| ${can_decode_audio_return_values}                            |
| **Parameters**                                               |
| ${can_decode_audio_parameters}                               |


{#can_decode_audio_return_values}
| Key        | Type    | Value                                                        | Required? |
| :--------- | :------ | :----------------------------------------------------------- | :-------- |
| Codec      | string  | Specifies the audio codec: “aac”, “ac3”, “eac3”, "alac", "flac", “mp2”, “mp3”, “vorbis”, “wma”, “wma pro”, “dts” | Required  |
| Profile    | string  | Specifies the profile                                        | Optional  |
| ChCnt      | integer | Specifies the number of audio channels                       | Optional  |
| SampleRate | integer | Specifies the sample rate                                    | Optional  |
| BitRate    | integer | Specifies the bit rate in Kbit/sec                           | Optional  |
| Container  | string  | Specifies the container format                               | Optional  |

{#can_decode_audio_parameters}

| Name         | Type   |
| ------------ | ------ |
| audio_format | Object |

##  Sections: GetChannelCred

### CanDecodeAudio(audio_format as Object) as Object

#### Description

Retrieves a Roku Partner Unique Customer Identifier (roku_pucid). The PUCID can be used in place of requiring the user to enter their email address or username again (ex. when setting up a new device on the same Roku account).

#### Return Value

Returns an roAssociativeArray containing the following values:

| Key       | Type   | Description                                       |
| :-------- | :----- | :------------------------------------------------ |
| channelID | string | The app ID (ex. "2213" for Roku Media Player) |
| json      | string | ${get_channel_cred_json_field}                    |

{#get_channel_cred_json_field}

| Key          | Type   | Description                                                  |
| :----------- | :----- | :----------------------------------------------------------- |
| error        | string | A string containing an error message (if any). This value will be `null` (uninitialized) for a successful request. |
| roku_pucid   | string | This is an agnostic ID (in UUID format) representing the user. This value will be identical when retrieved in the same app across devices linked to the same Roku account. |
| token_type   | string | Type of the returned token, e.g. `"urn:roku:pucid:token_type:pucid_token"` |
| channel_data | string | The access token, oAuth token, or other authentication artifact stored in the Roku cloud. |

## Vertical Table: GetChannelCred

### CanDecodeAudio(audio_format as Object) as Object

| Description                                                  |
| :----------------------------------------------------------- |
| Retrieves a Roku Partner Unique Customer Identifier (roku_pucid). The PUCID can be used in place of requiring the user to enter their email address or username again (ex. when setting up a new device on the same Roku account). |
| **Return Value**                                            |
| Returns an roAssociativeArray containing the following values: ${get_channel_return_values} |

{#get_channel_return_values}

| Key       | Type   | Description                                       |
| :-------- | :----- | :------------------------------------------------ |
| channelID | string | The app ID (ex. "2213" for Roku Media Player) |
| json      | string | ${get_channel_cred_json_field2}                   |

{#get_channel_cred_json_field2}

| Key          | Type   | Description                                                  |
| :----------- | :----- | :----------------------------------------------------------- |
| error        | string | A string containing an error message (if any). This value will be `null` (uninitialized) for a successful request. |
| roku_pucid   | string | This is an agnostic ID (in UUID format) representing the user. This value will be identical when retrieved in the same app across devices linked to the same Roku account. |
| token_type   | string | Type of the returned token, e.g. `"urn:roku:pucid:token_type:pucid_token"` |
| channel_data | string | The access token, oAuth token, or other authentication artifact stored in the Roku cloud. |
