---
title: Audio
excerpt: The following is an overview of the Audio requirements
deprecated: false
hidden: true
icon: fad fa-file-audio
metadata:
  robots: index
---
_Files must have industry standard audio configurations with all channels clearly labeled for position and language_ (depending on file format)

- PCM 16-Bit or 24-Bit 48kHz audio at highest bitrate preferred
- Dolby AC3 Audio is supported

**Roku prefers to receive 5.1 and Stereo audio whenever possible**

| 5.1 Surround + 2.0 Stereo | Channel Label       |
| ------------------------- | ------------------- |
| Channel 1                 | Left Front (L)      |
| Channel 2                 | Right Front (R)     |
| Channel 3                 | Center (C)          |
| Channel 4                 | LFE (Lfe)           |
| Channel 5                 | Left Surround (Ls)  |
| Channel 6                 | Right Surround (Rs) |
| Channel 7                 | Stereo Left (SL)    |
| Channel 8                 | Stereo Right (SR)   |

**5.1 Surround only is acceptable if 5.1 + Stereo is not available**

| 5.1 Surround Only | Channel Label       |
| ----------------- | ------------------- |
| Channel 1         | Left Front (L)      |
| Channel 2         | Right Front (R)     |
| Channel 3         | Center (C)          |
| Channel 4         | LFE (Lfe)           |
| Channel 5         | Left Surround (Ls)  |
| Channel 6         | Right Surround (Rs) |

**Stereo only is acceptable if 5.1 + Stereo and 5.1 Surround only are not available**

| 2.0 Stereo | Channel Label     |
| ---------- | ----------------- |
| Channel 1  | Stereo Left (SL)  |
| Channel 2  | Stereo Right (SR) |

### Sidecar audio deliverables

Content delivered with an audio language that is not primary to the territory of distribution must be delivered with an audio dub and/or subtitle file translating the content into that territory’s primary language. Localized audio tracks may be multiplexed in with the video file deliverable or delivered in a single interleaved sidecar audio file. All localized audio tracks, whether multiplexed in the video or delivered as an interleaved sidecar file, must be delivered as a full audio mix. Roku does not support dialogue-only dub tracks.

- Sidecar audio must be delivered as a single interleaved file. Roku does not support discrete single-channel files
- Sidecar audio must sync to the video source file delivered to Roku
- Roku supports one sidecar audio dub file per language
- Descriptive audio channels must be provided in the same language and locale as the full audio experience for a given language and locale

Below are the supported sidecar audio formats. Deliver sidecar audio with highest bitrate and sampling rate available.

| Container       | Codecs                     | Extension |
| --------------- | -------------------------- | --------- |
| WAV (preferred) | PCM<br />GSM               | .wav      |
| MP4 (MPEG-4)    | AAC<br />FLAC              | .mp4      |
| MPEG-1 Layer 3  | MP3                        | .mp3      |
| OGA             | FLAC<br />Opus<br />Vorbis | .ogg      |

#### Descriptive audio

Descriptive audio is an alternative audio track for the visually impaired. The official FCC Audio Description documentation can be found at the below link:

[https://www.fcc.gov/audio-description](https://www.fcc.gov/audio-description)

Roku strongly prefers to receive descriptive audio tracks wherever available. Descriptive audio deliveries will follow the deliverables outlined in the [Sidecar audio deliverables](#sidecar-audio-deliverables) section above

#### Audio channel layout hints

In the event video files cannot be created to include proper audio channel labels, an audio layout hint must be provided in the metadata for the video files that are delivered. The available hints are defined below.

##### Audio layout hints

| Descriptor         | Definition                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| stereoOnly         | 2 channel stereo audio only. Can be delivered on a single track or on 2 discrete tracks          |
| surroundOnly       | 6 channel 5.1 surround audio only. Can be delivered on a single track or on 6 discrete tracks    |
| stereoPlusSurround | 8 channel audio with stereo on channels 1 and 2 followed by 5.1 surround on channels 3 through 8 |
| surroundPlusStereo | 8 channel audio with 5.1 on channels 1 through 6 followed by stereo on channels 7 and 8          |