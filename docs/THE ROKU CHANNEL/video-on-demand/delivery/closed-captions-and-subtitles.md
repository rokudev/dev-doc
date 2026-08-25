---
title: Closed captions and subtitles
excerpt: >-
  Requirements for Closed Captions/SDH, Full Subtitles, and Forced Narrative
  Subtitles.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Roku supports three distinct text-track types: **Closed Captions/SDH**, **Full Subtitles**, and **Forced Narrative Subtitles**. Though visually similar to a viewer, they serve different purposes and follow different rules.

**Critical constraint:** the Roku player displays **only one text track at a time**. This has two direct consequences that shape the rest of this document:

- Any CC/SDH or Full Subtitle track **must** contain a complete transcription/translation of all narratively important dialogue and on-screen text. A viewer will never see two tracks layered together.
- Forced Narrative content **must also be duplicated inside** any CC/SDH or Full Subtitle track, because enabling one of those tracks will suppress the Forced Narrative track entirely.

***

## Track Types Compared

|                            | Closed Captions / SDH                                                                                                         | Full Subtitles                                                                                                                                                | Forced Narrative Subtitles                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**                | Accessibility for deaf/hard-of-hearing viewers                                                                                | Localization — translates dialogue/text for viewers who don't understand the audio language                                                                   | Localization for specific moments unintelligible to the viewer (foreign-language snippets, unreadable on-screen text, inaudible audio) |
| **Viewer toggle**          | Can be turned on/off                                                                                                          | Can be turned on/off                                                                                                                                          | **Cannot** be turned on/off — displays automatically                                                                                   |
| **Language/audio pairing** | Must match the language and locale of its companion audio track; unavailable if no matching-language audio track is delivered | Available regardless of which audio track(s) are delivered                                                                                                    | Tied to whichever audio track the viewer has selected; automatically displays when that track includes unintelligible content          |
| **Content included**       | Full transcription of dialogue + sound effects/music cues/lyrics + all forced narrative content                               | Full translation of narratively important dialogue/text; does not describe sound effects or music cues (song lyrics translated only if narratively important) | Only the specific unintelligible moments — not a full transcription                                                                    |
| **Regulatory**             | May be required by regulatory agencies in certain territories                                                                 | —                                                                                                                                                             | —                                                                                                                                      |

***

## Forced Narrative Subtitles

Forced narratives translate or convey information the viewer would otherwise miss, including:

- Spoken dialogue in a language different from the viewer's selected audio track
- On-screen text in a language different from the viewer's selected audio track
- Inaudible or difficult-to-hear audio (e.g., noisy scenes, poor-quality recordings)

**Important:** the forced narrative _track_ travels with whichever audio track the viewer selects — it is not a separate audio-language option in its own right. Its _content_, however, specifically covers the moments within that audio track where dialogue or text appears in a different language, or is otherwise unintelligible.

Because the Roku player shows only one text track at a time, enabling a CC/SDH or Full Subtitle track will suppress the Forced Narrative track. For this reason, **CC/SDH and Full Subtitle tracks must include all forced narrative content** so the viewer never loses that information by enabling captions or subtitles.

***

## Closed Captions / SDH

_Also known as: subtitles for the deaf or hard of hearing (SDH), subtitles for the deaf and hard of hearing._

Roku **prefers** to receive closed captions/SDH for all content.

### Regulatory Requirements (US)

For content intended for the US, Roku adheres to **FCC closed captioning rules for Internet Video Programming**: [https://www.fcc.gov/consumers/guides/captioning-internet-video-programming](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming)

- Content **required** by the FCC to carry closed captions **must** be delivered with CC/SDH, conformed and synced to the program.
- Content **exempt** from the requirement **must** include a valid exemption code number in the metadata.

**Exemption codes:**

| Code | Definition                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The content has never aired on television in the United States.                                                                       |
| 2    | The content has only aired on television in the United States without captions.                                                       |
| 3    | The content has not aired on television in the United States with captions since September 30, 2012.                                  |
| 4    | The content does not consist of full-length video programming.                                                                        |
| 5    | The content does not fall within a category of online programming that requires captions under FCC regulations (47 C.F.R. § 79.4(b)). |
| 6    | The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.                                     |

For content intended for territories outside the US, Roku adheres to the requirements of that territory.

### Delivery Method

Captions/SDH **may** be provided as:

- **EIA-608/CEA-708** embedded in-stream in the video file, or
- A **sidecar** caption/SDH file

Roku **prefers** a human-readable sidecar file (`.ttml`, `.dfxp`, `.vtt`, or `.srt`).

### Delivery Rules

- Sidecar captions/SDH **must** be timed to timecode hour `00:00:00:00` — the Roku encoder does **not** honor timecode embedded in the video file.
- Do **not** provide an empty file (a file with no text) as a sidecar caption/SDH deliverable.
- TTML and WebVTT positional data **is** supported and will be honored as defined in the file.
- QuickTime video files **must** be accompanied by a sidecar closed caption file — Roku does **not** support the QuickTime text track.
- Text styling support is limited to: bold (`<b>`) and italic (`<i>`) tags, text color, and text positioning. _(This applies identically to Full Subtitles — see [Text Styling Support](#text-styling-support).)_

### Supported Formats

| Format Name                                 | Positional Data | Style Data | Extension           | Encoding | Delivery Type           | Languages                                        |
| ------------------------------------------- | --------------- | ---------- | ------------------- | -------- | ----------------------- | ------------------------------------------------ |
| Timed Text Markup Language (TTML)           | Y               | Y          | `.ttml`             | UTF-8    | Sidecar                 | Follows audio language of video file or dub file |
| Web Video Text Track (WebVTT)               | Y               | Y          | `.vtt` or `.webvtt` | UTF-8    | Sidecar                 | Follows audio language of video file or dub file |
| Distribution Format Exchange Profile (DFXP) | N               | N          | `.dfxp`             | UTF-8    | Sidecar                 | Follows audio language of video file or dub file |
| EBU Subtitle Data Exchange Format (STL)     | N               | N          | `.stl`              | UTF-8    | Sidecar                 | Follows audio language of video file or dub file |
| SubRip Text (SRT)                           | N               | N          | `.srt`              | UTF-8    | Sidecar                 | Follows audio language of video file or dub file |
| EIA-608/CEA-708                             | N               | N          | n/a                 | n/a      | Embedded in MPEG stream | Embedded in video file                           |

> **Note on CC/SDH language:** because CC/SDH is an accessibility companion to a _specific_ audio track, its language simply follows whichever audio track (main or dub) it accompanies — it does not require an independent language-code declaration the way Full Subtitles do (see below).

#### Legacy Format (supported, not preferred)

| Format Name                                           | Positional Data | Style Data | Extension | Encoding | Delivery Type | Languages                                        |
| ----------------------------------------------------- | --------------- | ---------- | --------- | -------- | ------------- | ------------------------------------------------ |
| ~~SCC~~ _(legacy — use a format above when possible)_ | N               | N          | `.scc`    | ASCII    | Sidecar       | Follows audio language of video file or dub file |

***

## Full Subtitles

Content delivered with an audio language that is not primary to the territory of distribution **must** be delivered with an audio dub and/or a subtitle file translating the content into that territory's primary language. (This is the same underlying concept described in [Track Types Compared](#track-types-compared) above.)

### Delivery Rules

- Subtitles **must NOT** be burned into (hardcoded onto) the video.
- Roku **prefers** a human-readable sidecar file (`.ttml`, `.dfxp`, `.vtt`, or `.srt`).
- Sidecar subtitles **must** be timed to timecode hour `00:00:00:00` — the Roku encoder does **not** honor timecode embedded in the video file.
- Do **not** provide an empty file (a file with no text) as a sidecar subtitle deliverable.
- TTML and WebVTT positional data **is** supported and will be honored as defined in the file.

### Text Styling Support

Both Closed Captions/SDH and Full Subtitles are limited to the same styling support:

- Bold (`<b>`) and italic (`<i>`) tags
- Text color
- Text positioning

### Supported Formats

| Format Name                                 | Positional Data | Style Data | Extension           | Encoding | Delivery Type | Languages                                                                                        |
| ------------------------------------------- | --------------- | ---------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | Y               | Y          | `.ttml`             | UTF-8    | Sidecar       | Must conform to a supported [language code](#language-codes); include region code where possible |
| Web Video Text Track (WebVTT)               | Y               | Y          | `.vtt` or `.webvtt` | UTF-8    | Sidecar       | Must conform to a supported [language code](#language-codes); include region code where possible |
| Distribution Format Exchange Profile (DFXP) | N               | N          | `.dfxp`             | UTF-8    | Sidecar       | Must conform to a supported [language code](#language-codes); include region code where possible |
| EBU Subtitle Data Exchange Format (STL)     | N               | N          | `.stl`              | UTF-8    | Sidecar       | Must conform to a supported [language code](#language-codes); include region code where possible |
| SubRip Text (SRT)                           | N               | N          | `.srt`              | UTF-8    | Sidecar       | Must conform to a supported [language code](#language-codes); include region code where possible |

> **Note on Subtitle language:** unlike CC/SDH (which simply follows its companion audio track), Full Subtitles are independently language-tagged, since a single title may carry subtitle tracks in many languages regardless of which audio tracks are delivered.

***

## Glossary

| Term                                | Definition                                                                                                                                                                        |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SDH**                             | Subtitles for the Deaf or Hard of hearing — functionally identical to closed captions in this spec.                                                                               |
| **EIA-608/CEA-708**                 | Broadcast caption standards embedded directly in the video stream (in-stream), as opposed to a sidecar file.                                                                      |
| **Forced narrative**                | A non-toggleable text track that displays only for specific unintelligible moments (foreign dialogue, unreadable text, inaudible audio) within the viewer's selected audio track. |
| **Burned-in / hardcoded subtitles** | Subtitle text permanently rendered into the video image itself, rather than delivered as a separate, toggleable track. Not permitted for Full Subtitles.                          |
| **Conformed and synced**            | Captions that have been time-aligned and verified to match the final program cut exactly.                                                                                         |
| **Positional data**                 | Information within a caption/subtitle file specifying where on screen the text should appear, rather than defaulting to a fixed position.                                         |