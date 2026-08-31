---
title: Excel - film metadata fields
excerpt: Field-by-field reference for the Film Excel template.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field reference for the **Film** Excel metadata template. For template downloads and workbook-level rules (formatting, structure, row limits, file format), see the [Excel Metadata Overview](#roku-excel-metadata-overview).

**Each row represents one language experience of a single movie** — the `language` column defines which language applies to the title, synopses, video, captions, subtitles, audio dub, and artwork referenced in that row (see [Excel Metadata Overview](#multiple-entries-and-volume-limits)).

Fields are grouped below into: **Package Info**, **Content Descriptors**, **Ad Breaks & Cue Points**, **Cast & Crew**, **Assets**, **Artwork**, and **Availability**.

***

## Package Info

### provider

Name of the content owner/studio/network.

| Excel Column | Accepted Values         | Required |
| ------------ | ----------------------- | -------- |
| `provider`   | Example: Roku Originals | Required |

### contentType

Defines the content type of the package.

| Excel Column  | Accepted Values | Required |
| ------------- | --------------- | -------- |
| `contentType` | `film`          | Required |

### language

Language of the title, synopses, video, captions, subtitles, audio dubs, and/or artwork listed on the row. Must conform to a supported [language code](#language-codes). Best practice: include a region code (e.g., `es-MX` vs. `es-ES`). **Only one language allowed per row.**

| Excel Column | Accepted Values                         | Required |
| ------------ | --------------------------------------- | -------- |
| `language`   | Valid [language value](#language-codes) | Required |

### original_spoken_language

Original production language of the title. At minimum, must conform to a [supported language code](#language-codes) (region code recommended).

| Excel Column               | Accepted Values                         | Required |
| -------------------------- | --------------------------------------- | -------- |
| `original_spoken_language` | Valid [language value](#language-codes) | Required |

### country_of_origin

The primary country where the film was produced, and where the main creators, crew, and producers are established. Must conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) code.

| Excel Column        | Accepted Values                                                                                          | Required  |
| ------------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| `country_of_origin` | Valid 2-character country code per [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

### asset_id

Immutable, unique identifier for a movie. Generated/supplied by the partner; should match the Title ID provided in the Avails document, to aid tracking across Roku's pipeline. **50-character limit.**

| Excel Column | Accepted Values                                                                | Required |
| ------------ | ------------------------------------------------------------------------------ | -------- |
| `asset_id`   | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

### eidr

EIDR ID, if one exists.

| Excel Column | Accepted Values   | Required |
| ------------ | ----------------- | -------- |
| `eidr`       | Any valid EIDR ID | Optional |

### tms_id

Gracenote ID, if one exists.

| Excel Column | Accepted Values  | Required |
| ------------ | ---------------- | -------- |
| `tms_id`     | Any valid TMS ID | Optional |

***

## Content Descriptors

### title

Title of the movie, in the language defined in the `language` column. Include **only** the name as it should appear on platform — no non-title parentheticals (e.g., `(Classic)`, `(1987)`, `(Season 1)`, `(HD)`).

| Excel Column | Accepted Values      | Required |
| ------------ | -------------------- | -------- |
| `title`      | Example: Movie Title | Required |

### genres

Genre classification of the content. Each movie **must** be delivered with **at least one** supported genre. See the [enumerated genre list](#genres).

| Excel Column | Accepted Values                                                   | Required |
| ------------ | ----------------------------------------------------------------- | -------- |
| `genres`     | See [enumerated list](#genres). No more than 10 genres per title. | Required |

### tags

Freeform categorization field beyond Genre. Used by Roku's editorial team and recommendations engine to surface content. No limit on count; no defined tag set. **Case-sensitive** — deliver consistently (e.g., `"Rom-Com"` and `"rom-com"` are two distinct tags).

| Excel Column | Accepted Values                | Required               |
| ------------ | ------------------------------ | ---------------------- |
| `tags`       | Any string under 50 characters | **Highly recommended** |

### runtime

Total runtime of the content, in **whole minutes**.

| Excel Column | Accepted Values              | Required |
| ------------ | ---------------------------- | -------- |
| `runtime`    | Integers only. Example: `90` | Required |

### release_date

Original date the content was first made available in any presentation. Must include an accurate **year of release** at minimum.

| Excel Column   | Accepted Values               | Required |
| -------------- | ----------------------------- | -------- |
| `release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

### rating_system and ratings

A valid movie or TV rating from the rating authority (`ratingSystem`) of the territory where the content will be available **must** be provided for each movie. If not rated by that territory's official authority, use a valid `USA_PR` rating instead, per [tvguidelines.org](http://tvguidelines.org/) guidelines (there is no official ratings body for `USA_PR`).

| Excel Column    | Accepted Values                                                                        | Required |
| --------------- | -------------------------------------------------------------------------------------- | -------- |
| `rating_system` | See [rating values by system and country](#rating-values-by-rating-system-and-country) | Required |
| `ratings`       | See [rating values by system and country](#rating-values-by-rating-system-and-country) | Required |

### short_synopsis

A short synopsis of the content, in the language defined in the `language` column. **250-character limit.**

| Excel Column     | Accepted Values        | Required |
| ---------------- | ---------------------- | -------- |
| `short_synopsis` | 250-character synopsis | Required |

### long_synopsis

A long synopsis of the content, in the language defined in the `language` column. **500-character limit.**

| Excel Column    | Accepted Values        | Required |
| --------------- | ---------------------- | -------- |
| `long_synopsis` | 500-character synopsis | Optional |

### closed_captions

Indicates whether the delivered title contains closed captions. **Required for all content intended for Roku Channel in the US.**

| Excel Column      | Accepted Values | Required |
| ----------------- | --------------- | -------- |
| `closed_captions` | `Y` or `N`      | Required |

### closed_captions_exemption

FCC exemption code for the closed caption requirement. **Required in the US if&#x20;**`closed_captions`**&#x20;=&#x20;**`N`**.**

| Code | Definition                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The content has never aired on television in the United States.                                                                       |
| 2    | The content has only aired on television in the United States without captions.                                                       |
| 3    | The content has not aired on television in the United States with captions since September 30, 2012.                                  |
| 4    | The content does not consist of full-length video programming.                                                                        |
| 5    | The content does not fall within a category of online programming that requires captions under FCC regulations (47 C.F.R. § 79.4(b)). |
| 6    | The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.                                     |

| Excel Column                | Accepted Values              | Required                                  |
| --------------------------- | ---------------------------- | ----------------------------------------- |
| `closed_captions_exemption` | `1`, `2`, `3`, `4`, `5`, `6` | Required in US if `closed_captions` = `N` |

> _Note: the Accepted Values for this field were missing from the source table (only the code definitions appeared in the Description column) — restored above as&#x20;_`1`_–_`6`_, consistent with the [Film XML Reference](#)._

***

## Ad Breaks & Cue Points

### ad_breaks

Used to determine [Ad Breaks for Ad Supported Content](#ad-breaks). Values **must** be accurate to the millisecond. If commercial blacks are present, provide the timecode at the **midpoint**. Not required for SVOD, but frame-accurate data can be ingested if available.

| Excel Column | Accepted Values | Required  |
| ------------ | --------------- | --------- |
| `ad_breaks`  | `HH:MM:SS.sss`  | Preferred |

### cue_points

Identifies start/end times of opening credits, recaps, end credits, and behind-the-scenes footage. Values **must** be accurate to the millisecond.

> **Note:** unlike the XML format's nested `cuePoint` elements, Excel expresses this as a **single comma-separated text string** in one cell — this is an Excel-specific encoding of the same underlying concept described in the [Film XML Reference](#cuepoint-start_time-and-end_time), not a different data model.

**Format:** a comma-separated list of `type=startTime>endTime` pairs.

**Example:**

```
intro=00:05:10.253>00:07:15.123,recap=00:01:12.456>00:03:12.052
```

| Excel Column | Accepted Values                                                                                                               | Required |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------- |
| `cue_points` | Format: `type=HH:MM:SS.sss>HH:MM:SS.sss`. Allowable `type` values: `ad overlay`, `behind the scenes`, `intro`, `recap`, `end` | Optional |

***

## Cast & Crew

### cast

Names of cast members.

| Excel Column | Accepted Values                              | Required  |
| ------------ | -------------------------------------------- | --------- |
| `cast`       | Comma-separated list of `Firstname Lastname` | Preferred |

### director

Name(s) of the movie's director.

> **Cross-format note:** Director is currently the **only** crew member role supported for **Excel** metadata ingest — the full crew role list supported in XML (see the [Film XML Reference](#cast--crew)) is not available here.

| Excel Column | Accepted Values                              | Required  |
| ------------ | -------------------------------------------- | --------- |
| `director`   | Comma-separated list of `Firstname Lastname` | Preferred |

***

## Assets

### video_file_name

File name of the video, in the language defined in the `language` column, delivered via Aspera. **Only one video allowed per&#x20;**`asset_id`**.** Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column      | Accepted Values               | Required |
| ----------------- | ----------------------------- | -------- |
| `video_file_name` | Example: `movieVideoFile.mov` | Required |

### video_file_language

Primary language of the video file's spoken dialogue and/or visible text. If there is no dialogue or visible text, use the language spoken by the intended audience. **Also applies to** `caption_file_name` and `forced_subtitle_file_name`. **Only one language allowed.**

| Excel Column          | Accepted Values                             | Required |
| --------------------- | ------------------------------------------- | -------- |
| `video_file_language` | One valid [language value](#language-codes) | Required |

### audio_layout

[Audio layout descriptor](#audio-channel-layout-hints) for the delivered video file.

| Excel Column   | Accepted Values                                                          | Required |
| -------------- | ------------------------------------------------------------------------ | -------- |
| `audio_layout` | `stereoOnly`, `surroundOnly`, `stereoPlusSurround`, `surroundPlusStereo` | Optional |

### descriptive_audio_file_name

For audio description files only. File name of the descriptive audio file, in the language defined in `descriptive_audio_language`, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column                  | Accepted Values             | Required                                                                            |
| ----------------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| `descriptive_audio_file_name` | Example: `movieDubFile.wav` | Required when providing a sidecar descriptive audio file for accessibility purposes |

### descriptive_audio_language

For audio description files only. Primary language of the audio file's spoken dialogue track. **Only one language allowed.**

| Excel Column                 | Accepted Values                             | Required                                        |
| ---------------------------- | ------------------------------------------- | ----------------------------------------------- |
| `descriptive_audio_language` | One valid [language value](#language-codes) | Required when providing descriptive audio files |

### caption_file_name

File name of the closed captions, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters. Its language is derived from `video_file_language`.

| Excel Column        | Accepted Values              | Required |
| ------------------- | ---------------------------- | -------- |
| `caption_file_name` | Example: `movieCaptions.srt` | Required |

### forced_subtitle_file_name

File name of the forced narrative subtitle, in the language defined in `video_file_language`, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters. Its language is derived from `video_file_language`.

| Excel Column                | Accepted Values                    | Required                                           |
| --------------------------- | ---------------------------------- | -------------------------------------------------- |
| `forced_subtitle_file_name` | Example: `movieForcedSubtitle.srt` | Required when providing forced narrative subtitles |

***

## Artwork

### keyart_file_name

File name of the texted key art image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column       | Accepted Values            | Required |
| ------------------ | -------------------------- | -------- |
| `keyart_file_name` | Example: `movieKeyArt.jpg` | Required |

### background_file_name

File name of the textless background image, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column           | Accepted Values             | Required  |
| ---------------------- | --------------------------- | --------- |
| `background_file_name` | Example: `movieBGimage.jpg` | Preferred |

### boxcover_file_name

File name of the texted boxcover image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column         | Accepted Values            | Required  |
| -------------------- | -------------------------- | --------- |
| `boxcover_file_name` | Example: `movieBoxArt.jpg` | Preferred |

### poster_file_name

File name of the texted poster image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column       | Accepted Values            | Required  |
| ------------------ | -------------------------- | --------- |
| `poster_file_name` | Example: `moviePoster.jpg` | Preferred |

***

## Availability

> **Note:** as in the [Film XML Reference](#play-options--availability), none of the four fields below are marked Required. Unlike XML — where a wrapper element (`playOptions`) at least made the container itself Required or Optional as a unit — Excel has no equivalent wrapper, so there's no parallel "block-level" requirement to point to here at all. This is presented as expected/consistent with the confirmed XML behavior, not re-flagged as a new gap.

### territory

Country code(s) of the territory where the content is available. Multiple comma-separated country codes allowed, provided `vod_type`, `license_start_date`, and `license_end_date` are identical across them.

| Excel Column | Accepted Values        | Required  |
| ------------ | ---------------------- | --------- |
| `territory`  | `US`, `CA`, `GB`, `MX` | Preferred |

### vod_type

Monetization type of the movie. Multiple comma-separated values allowed, provided `territory`, `license_start_date`, and `license_end_date` are identical across them.

| Excel Column | Accepted Values                      | Required  |
| ------------ | ------------------------------------ | --------- |
| `vod_type`   | Example: `avod`, `svod`, `avod,svod` | Preferred |

### license_start_date

Start date of content availability. Must be chronologically **before** `license_end_date`; the two **must not** be identical.

| Excel Column         | Accepted Values                        | Required  |
| -------------------- | -------------------------------------- | --------- |
| `license_start_date` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Preferred |

### license_end_date

End date of content availability. Must be chronologically **after** `license_start_date`; the two **must not** be identical.

| Excel Column       | Accepted Values                        | Required  |
| ------------------ | -------------------------------------- | --------- |
| `license_end_date` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Preferred |