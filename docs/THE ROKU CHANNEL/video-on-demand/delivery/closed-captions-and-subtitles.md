---
title: Closed captions and subtitles
deprecated: false
hidden: true
metadata:
  robots: index
---
Closed captions (also known as subtitles for the deaf or hard of hearing or SDH subtitles) and subtitles, while similar, serve separate distinct functions:

## **Closed captions/SDH subtitles/subtitles for the deaf or hard of hearing**

- Transcribes the spoken dialogue and the sounds heard in an audio track
- Intended as an accessibility device for the deaf or hard of hearing
- Can be enabled/disabled (toggled on/off) by the viewer during playback
- Includes text that describes sound effects and/or music cues and lyrics
- Must include a full transcription of all spoken dialogue and narrative text that needs to be understood by the viewer, including forced narratives as the Roku player will only display a single text track at a time
- Are companions to an audio track and must be provided in the same language and locale as that audio track
- Will not be made available to the viewer if a companion audio track in the same language is not provided
- May be required per regulatory agencies in certain territories

## **Full subtitles**

- Translates all narratively important spoken dialogue and on-screen text from one language to another
- Intended as a localization device when an audio track is in a language that the viewer does not understand
- Must include a full translation of all spoken dialogue and narrative text that needs to be understood by the viewer, including forced narratives as the Roku player will only display a single text track at a time
- Can be enabled/disabled (toggled on/off) by the viewer during playback
- Does not include text that describes sound effects or music cues, but may translate song lyrics if narratively important to the viewer or as a creative choice
- Can be made available to the viewer regardless of the audio track language(s) delivered

## **Forced narrative subtitles**

- Translates narratively important spoken dialogue and/or on-screen text for the purpose of conveying information that may not be understood by the viewer. This information could include:

- Spoken dialogue in a language different from the audio track language selected by the viewer

- On-screen text in a language different from the audio track selected by the viewer

- Inaudible or difficult to hear audio (such as an overly noisy scene or poor-quality audio recordings)

- Intended as a localization device when a portion of a program is presented in a language different from the main audio track language selected by the viewer or is otherwise unintelligible

- Can NOT be enabled/disabled (toggled on/off) by the viewer during playback

- _Forced narrative playback WILL be disabled when the viewer enables a CC/SDH/Subtitle track as the Roku player will only display a single text track at a time. For this reason, it is required that CC/SDH and full subtitles contain all forced narrative elements_

- Are companions to an audio track and must be provided in the same language and locale as that audio track

- Will automatically display based on the audio language track selected by the viewer

## Closed captions/SDH

Roku prefers to receive closed captions/SDH for all content to provide the best user experience possible.

For content intended for the US, Roku adheres to FCC closed captioning rules regarding Internet Video Programming. Those rules can be found at the below link:

[https://www.fcc.gov/consumers/guides/captioning-internet-video-programming](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming)

All content required by the FCC to have closed captioning must be delivered to Roku with closed captions/SDH and those captions/SDH must be conformed and synced to program. For content that is exempt from the closed caption requirement per FCC rules, a valid exemption code number must be included in the metadata. Allowable exemption code numbers and their definitions:

1. The content has never aired on television in the United States.
2. The content has only aired on television in the United States without captions.
3. The content has not aired on television in the United States with captions since September 30, 2012.
4. The content does not consist of full-length video programming.
5. The content does not fall within a category of online programming that requires captions under FCC regulations (49 C.F.R. § 79.4(b)).
6. The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.

For content intended for territories outside of the US, Roku will adhere to the requirements in that territory.

Captions/SDH may be provided in one of two ways:

- EIA-608/CEA-708 embedded in-stream in the video file
- Sidecar caption/SDH file

Roku prefers a human-readable sidecar caption/SDH file such as .ttml, .dfxp, .vtt, or .srt

See below for a full listing of supported sidecar caption/SDH files

Sidecar captions/SDH must be timed to timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file

Do not provide an empty file (a file without text) for sidecar captions/SDH

TTML and WebVTT positional data supported

Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

_Closed caption text styling support is limited to:_

- _bold_ `<b>` _and italic_ `<i>` _tags_
- _text color_
- _text positioning_

_Quicktime video files must be accompanied by a sidecar closed caption file. Roku does not support the Quicktime text track._

| **Format Name**                             | Support for Positional Data | Support for Style Data | **File Extension** | Encoding | **Delivery Type**       | **Languages**                                           |
| ------------------------------------------- | --------------------------- | ---------------------- | ------------------ | -------- | ----------------------- | ------------------------------------------------------- |
| Timed Text Markup Language (TTML)           | Y                           | Y                      | .ttml              | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| Web Video Text Track (WebVTT)               | Y                           | Y                      | .vtt or .webvtt    | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| Distribution Format Exchange Profile (DFXP) | N                           | N                      | .dfxp              | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| EBU Subtitle Data Exchange Format (STL)     | N                           | N                      | .stl               | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| SubRip Text (SRT)                           | N                           | N                      | .srt               | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| EIA-608/CEA-708                             | N                           | N                      | n/a                | n/a      | Embedded in MPEG stream | embedded in video file                                  |

_Roku supports, but does not prefer the below legacy closed caption format. When possible, please provide captions/SDH files in one of the formats in the table listed above_

| Legacy Format Name | Support for Positional Data | Support for Style Data | **File Extension** | Encoding | **Delivery Type** | **Languages**                                           |
| ------------------ | --------------------------- | ---------------------- | ------------------ | -------- | ----------------- | ------------------------------------------------------- |
| SCC                | N                           | N                      | .scc               | ASCII    | sidecar           | follows audio language of either video file or dub file |

## Subtitles

Content delivered with an audio language that is not primary to the territory of distribution must be delivered with an audio dub and/or subtitle file translating the content into that territory’s primary language.

- Subtitles must NOT be burned into the video
- Roku prefers a human-readable sidecar subtitle file such as .ttml, .dfxp, .vtt, or .srt
- See below for a full listing of supported sidecar subtitle files
- Sidecar subtitles must be timed to timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file
- Do not provide an empty file (a file without text) for sidecar subtitles
- TTML and WebVTT positional data supported
- Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

_Subtitle text styling support is limited to:_

- _bold&#x20;_`<b>`_&#x20;and italic&#x20;_`<i>`_&#x20;tags_
- _text color_
- _text positioning_

| **Format Name**                             | Support for Positional Data | Support for Style Data | **File Extension** | Encoding | **Delivery Type** | **Languages**                                                                                                |
| ------------------------------------------- | --------------------------- | ---------------------- | ------------------ | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | Y                           | Y                      | .ttml              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Web Video Text Track (WebVTT)               | Y                           | Y                      | .vtt or .webvtt    | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Distribution Format Exchange Profile (DFXP) | N                           | N                      | .dfxp              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| EBU Subtitle Data Exchange Format (STL)     | N                           | N                      | .stl               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| SubRip Text (SRT)                           | N                           | N                      | .srt               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
