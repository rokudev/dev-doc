---
title: Video
excerpt: Video file, format, resolution, and editorial requirements for all deliveries.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Language & Version Policy

Roku supports **one video file per title**. Where a title requires additional language support, that support **must** be delivered as:

- Sidecar subtitle files, and/or
- Additional audio tracks

associated with the single video asset — **not** as separate video files.

**Discrete video versions produced in alternate languages** (e.g., dubbed or regionally re-cut video files) are **not supported** as separate deliverable assets for a given title, regardless of territory. Only one video per title will be ingested across all territories. Any additional-language requirements must be expressed through sidecar audio or subtitle elements mapped to that single video file.

> **Exception:** Partners requiring delivery of alternate-language video versions (e.g., open-captioned or hardcoded-subtitle versions) should coordinate directly with Roku Content Operations. These deliveries fall outside standard EMA Avails/MovieLabs MEC-MMC ingest support and may require a separate title record or delivery arrangement outside this specification.

***

## Program Content & Editorial

All video delivered to Roku **must** contain the **full program only**:

- No bars/tone or slates at program start
- No textless video after program end
- No more than 2 seconds of black at program start (**head black**)
- No more than 2 seconds of black after program end (**tail black**)
- No FBI warnings or MPAA cards
- No promotional material referencing theatrical, home video, or streaming release dates

Video files **should** be **semi-textless** — meaning opening and end credit text may remain, but all subtitles for foreign dialogue must be removed. _(Also referred to as "texted with no subtitles" or "textless with main, ends, and graphic text.")_

***

## Advertising & Commercial Blacks

- Do **not** include advertisements within the video. All ad insertion points for ad-supported content are provided separately in the metadata file, per [Roku Ad Policy guidelines](#ad-policy).
- **Commercial blacks** (black frames at internal ad-break points, distinct from head/tail black above) **may** be included, provided each is no longer than 2 seconds.
- Commercial blacks are acceptable for episodic TV content but not expected for movie content.

***

## File Delivery Format

- Video **must** be delivered as a **single, seamless file**.
- Do **not** deliver hard-parted files (i.e., broken into segments at ad-break points).
- Calls to action (CTAs) or links to external platforms/sites (including QR codes) are **not permissible** and must be removed prior to delivery.
- **High-quality mezzanine-level files are preferred** — the highest bitrate and resolution available should be used.

***

## Aspect Ratio & Frame

- **Full-frame presentation (1.78 aspect ratio) is preferred** whenever available.
- Letterboxed 16:9 is allowed but **should be minimized**.
- HD video content **must** be delivered in a 16:9 container.
- SD 16:9 content **must not** be delivered in a 4:3 container with letterboxing (i.e., do not pillarbox 16:9 content into a 4:3 frame).

***

## Video Frame Rate

Roku supports a variety of frame rates and scan types. All video files **must** be delivered in their **original native frame rate and scan type** — no frame rate conversion.

***

## Video Resolution

| Type  | Width | Height | Pixel Aspect Ratio              |
| ----- | ----- | ------ | ------------------------------- |
| SD    | 720   | 480    | 4:3 or 16:9 (anamorphic pixels) |
| SD    | 640   | 480    | 1:1 (square pixels)             |
| SD    | 853   | 480    | 1:1 (square pixels)             |
| SD    | 720   | 576    | 4:3 or 16:9 (anamorphic pixels) |
| SD    | 768   | 576    | 1:1 (square pixels)             |
| SD    | 1024  | 576    | 1:1 (square pixels)             |
| HD    | 1280  | 720    | 1:1 (square pixels)             |
| FHD   | 1920  | 1080   | 1:1 (square pixels)             |
| UHD\* | 3840  | 2160   | 1:1 (square pixels)             |

<HeaderThingyComponent />

<HeaderThingyComponent Tacos />

\* UHD is supported as an **input resolution only**. Roku does not currently encode to or display 4K UHD video on Roku Channel.

***

## Video Formats

| Name          | Codecs                                                                                   | Extension | Bitrate                                                |
| ------------- | ---------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------ |
| Apple® ProRes | ProRes 444 (all profiles)<br />ProRes 4444 (all profiles)<br />ProRes 422 (all profiles) | .mov      | 50 Mbps or greater                                     |
| XDCam         |                                                                                          | .mxf      | 50 Mbps or greater                                     |
| MPEG-2        | MPEG-2                                                                                   | .ts, .mpg | HD = 15 Mbps or greater<br />SD = 3.75 Mbps or greater |
| MPEG-4        | H.264                                                                                    | .mp4      | 5 Mbps or greater                                      |

***

## Glossary

| Term                  | Definition                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Sidecar file**      | A subtitle or audio file delivered alongside (not embedded in) the video file, mapped to it via metadata.              |
| **Mezzanine file**    | A high-quality, typically near-lossless master file used as the source for further encoding.                           |
| **Anamorphic pixels** | Non-square pixels used to fit a widescreen image into a standard frame size.                                           |
| **Square pixels**     | Pixels with a 1:1 aspect ratio, common in modern digital video.                                                        |
| **Hard-parted**       | A video file physically split into multiple segments at ad-break points, rather than delivered as one continuous file. |
| **Semi-textless**     | Video with opening/end credit text intact but with foreign-dialogue subtitles removed.                                 |
