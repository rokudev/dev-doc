---
title: Audio
excerpt: The following is an overview of the Audio requirements
deprecated: false
hidden: true
metadata:
  robots: index
---
## Scope

The audio requirements in this document — including channel configuration, channel labeling, and language/locale matching — apply **regardless of delivery method**:

- Audio **multiplexed (muxed) into the video file** container, and
- Audio delivered as a **sidecar file** separate from the video

Both delivery paths **must** conform to the same channel configuration and labeling rules described below.

***

## Audio Codec & Sample Rate

- **PCM 16-Bit or 24-Bit, 48kHz** audio at the highest available bitrate is **preferred**.
- **Dolby AC3** audio is supported.

Roku **prefers to receive 5.1 Surround and Stereo audio whenever possible.**

***

## Channel Configuration & Labeling

All channels **must** be clearly labeled for position and language (label format depends on file format). This applies to both muxed and sidecar audio — see [Scope](#scope).

### 5.1 Surround + 2.0 Stereo (preferred)

| Channel   | Label               |
| --------- | ------------------- |
| Channel 1 | Left Front (L)      |
| Channel 2 | Right Front (R)     |
| Channel 3 | Center (C)          |
| Channel 4 | LFE (Lfe)           |
| Channel 5 | Left Surround (Ls)  |
| Channel 6 | Right Surround (Rs) |
| Channel 7 | Stereo Left (SL)    |
| Channel 8 | Stereo Right (SR)   |

### 5.1 Surround only

_Acceptable if 5.1 + Stereo is not available._

| Channel   | Label               |
| --------- | ------------------- |
| Channel 1 | Left Front (L)      |
| Channel 2 | Right Front (R)     |
| Channel 3 | Center (C)          |
| Channel 4 | LFE (Lfe)           |
| Channel 5 | Left Surround (Ls)  |
| Channel 6 | Right Surround (Rs) |

### 2.0 Stereo only

_Acceptable if 5.1 + Stereo and 5.1 Surround only are not available._

| Channel   | Label             |
| --------- | ----------------- |
| Channel 1 | Stereo Left (SL)  |
| Channel 2 | Stereo Right (SR) |

***

## Sidecar Audio Deliverables

Content delivered with an audio language that is **not primary to the territory of distribution** must be delivered with an audio dub and/or subtitle file translating the content into that territory's primary language.

- Localized audio tracks **may** be multiplexed into the video file, or delivered as a single interleaved sidecar audio file.
- Regardless of delivery method, all localized audio tracks **must** be delivered as a **full audio mix**. Roku does **not** support dialogue-only dub tracks.
- Sidecar audio **must** be delivered as a **single interleaved file**. Roku does **not** support discrete single-channel files.
- Sidecar audio **must** sync to the video source file delivered to Roku.
- Roku supports **one sidecar audio dub file per language**.
- Sidecar audio **must** follow the same channel configuration and labeling rules defined in [Channel Configuration & Labeling](#channel-configuration--labeling) above.

Deliver sidecar audio at the highest bitrate and sampling rate available.

### Supported Sidecar Audio Formats

| Container         | Codecs                     | Extension |
| ----------------- | -------------------------- | --------- |
| WAV _(preferred)_ | PCM<br />GSM               | .wav      |
| MP4 (MPEG-4)      | AAC<br />FLAC              | .mp4      |
| MPEG-1 Layer 3    | MP3                        | .mp3      |
| OGA               | FLAC<br />Opus<br />Vorbis | .ogg      |

***

## Descriptive Audio

Descriptive audio is an alternative audio track for the visually impaired, per [FCC Audio Description requirements](https://www.fcc.gov/audio-description).

- Roku **strongly prefers** to receive descriptive audio tracks wherever available.
- Descriptive audio deliveries **must** follow the same requirements outlined in [Sidecar Audio Deliverables](#sidecar-audio-deliverables) above.
- Descriptive audio **must** be provided in the same language and locale as its companion standard (non-descriptive) audio track for that language.
- **The audio language code of the descriptive audio track must exactly match the audio language code of its companion standard audio track.** For example, a descriptive track paired with a standard track coded `en-US` must also be coded `en-US` — not `en`, `en-GB`, or any other variant.

***

## Audio Channel Layout Hints

If video files cannot be created with proper audio channel labels embedded, an **audio layout hint must be provided in the metadata** for the delivered video file. This applies to muxed audio only where in-file labeling is not possible; it does not replace the labeling requirement for sidecar files.

| Descriptor           | Definition                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `stereoOnly`         | 2-channel stereo audio only. May be delivered on a single track or 2 discrete tracks.       |
| `surroundOnly`       | 6-channel 5.1 surround audio only. May be delivered on a single track or 6 discrete tracks. |
| `stereoPlusSurround` | 8-channel audio with stereo on channels 1–2, followed by 5.1 surround on channels 3–8.      |
| `surroundPlusStereo` | 8-channel audio with 5.1 surround on channels 1–6, followed by stereo on channels 7–8.      |

***

## Glossary

| Term                    | Definition                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Muxed / Multiplexed** | Audio combined into the same file container as the video, rather than delivered separately.                |
| **Sidecar file**        | An audio or subtitle file delivered alongside (not embedded in) the video file, mapped to it via metadata. |
| **Interleaved**         | Multiple audio channels combined into a single file, as opposed to separate discrete files per channel.    |
| **Discrete channel**    | An individual audio channel delivered as its own separate file/track rather than combined with others.     |
| **LFE**                 | Low-Frequency Effects channel — the ".1" in 5.1 surround, typically routed to a subwoofer.                 |
| **Full audio mix**      | A complete mixed audio track (dialogue, music, effects), as opposed to a dialogue-only or partial track.   |
| **Language code**       | A standardized code identifying language and, optionally, regional locale (e.g., `en-US`, `es-MX`).        |
