---
title: Excel - episodic TV metadata fields
excerpt: Field-by-field reference for the TV Excel template.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field reference for the **TV** Excel metadata template, following Roku's `series > season > episode` hierarchy. For template downloads and workbook-level rules (formatting, structure, row limits, file format), see the [Excel Metadata Overview](#roku-excel-metadata-overview).

**Each row represents one language experience of a single episode.** As in the Excel Film template, several fields repeat conceptually at different hierarchy levels — this reference groups them by level (**Series**, **Season**, **Episode**) to keep that distinction clear.

Fields are grouped into: **Package Info**, **Series Block**, **Season Block**, **Episode Content Descriptors**, **Ad Breaks & Cue Points**, **Episode Cast & Crew**, **Assets**, **Artwork**, and **Availability**.

***

## Package Info

### provider

Name of the content owner/studio/network.

| Excel Column | Accepted Values         | Required |
| ------------ | ----------------------- | -------- |
| `provider`   | Example: Roku Originals | Required |

### contentType

Defines the content type of the package. For the TV Excel template, this value is `episode` (distinct from the `tv` value used to identify the TV content type elsewhere, e.g., in the [TV XML Reference](#)'s `/package/video/type` field).

| Excel Column  | Accepted Values | Required |
| ------------- | --------------- | -------- |
| `contentType` | `episode`       | Required |

### language

Language of the title, synopses, video, captions, subtitles, audio dubs, and/or artwork listed on the row. Must conform to a supported [language code](#language-codes). Best practice: include a region code (e.g., `es-MX` vs. `es-ES`). **Only one language allowed per row.**

| Excel Column | Accepted Values                             | Required |
| ------------ | ------------------------------------------- | -------- |
| `language`   | One valid [language value](#language-codes) | Required |

### asset_id

Immutable, unique identifier for an **episode**. Generated/supplied by the partner; should match the Title ID provided in the Avails document, to aid tracking across Roku's pipeline. **50-character limit.**

| Excel Column | Accepted Values                                                                | Required |
| ------------ | ------------------------------------------------------------------------------ | -------- |
| `asset_id`   | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

### episode_eidr

EIDR ID for the episode, if one exists.

| Excel Column   | Accepted Values            | Required |
| -------------- | -------------------------- | -------- |
| `episode_eidr` | Any valid episodic EIDR ID | Optional |

### episode_tms_id

Gracenote ID for the episode, if one exists.

| Excel Column     | Accepted Values           | Required |
| ---------------- | ------------------------- | -------- |
| `episode_tms_id` | Any valid episodic TMS ID | Optional |

***

## Series Block

### series_id

Immutable, unique identifier for a series. Generated/supplied by the partner; should match the Series ID provided in the Avails document. **50-character limit.**

| Excel Column | Accepted Values                                                                | Required |
| ------------ | ------------------------------------------------------------------------------ | -------- |
| `series_id`  | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

### series_title

Title of the series, in the language defined in the `language` column. Include **only** the name as it should appear on platform — no non-title parentheticals.

| Excel Column   | Accepted Values       | Required |
| -------------- | --------------------- | -------- |
| `series_title` | Example: Series Title | Required |

### series_tms_id

Gracenote ID for the series, if one exists.

| Excel Column    | Accepted Values       | Required |
| --------------- | --------------------- | -------- |
| `series_tms_id` | Any valid Show TMS ID | Optional |

### series_release_date

Original date the series was first made available in any presentation. Must include an accurate **year of release** at minimum.

| Excel Column          | Accepted Values               | Required |
| --------------------- | ----------------------------- | -------- |
| `series_release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

### series_genres

Genre classification of the content. Each series **must** be delivered with **at least one** supported genre. See the [enumerated genre list](#genres).

> **Note:** Genre is a **series-level** field only — there is no separate episode-level genre field, consistent with the [TV XML Reference](#).

| Excel Column    | Accepted Values                                                   | Required |
| --------------- | ----------------------------------------------------------------- | -------- |
| `series_genres` | See [enumerated list](#genres). No more than 10 genres per title. | Required |

### series_tags

Freeform categorization field beyond Genre. Used by Roku's editorial team and recommendations engine to surface content. No limit on count; no defined tag set. **Case-sensitive** — deliver consistently.

| Excel Column  | Accepted Values                | Required               |
| ------------- | ------------------------------ | ---------------------- |
| `series_tags` | Any string under 50 characters | **Highly recommended** |

### series_cast

Names of series cast members.

| Excel Column  | Accepted Values                              | Required  |
| ------------- | -------------------------------------------- | --------- |
| `series_cast` | Comma-separated list of `Firstname Lastname` | Preferred |

### series_directors

Name(s) of the series director(s).

> **Cross-format note:** Director is currently the **only** crew member role supported for Excel metadata ingest.

| Excel Column       | Accepted Values                              | Required  |
| ------------------ | -------------------------------------------- | --------- |
| `series_directors` | Comma-separated list of `Firstname Lastname` | Preferred |

### series_short_synopsis

A short synopsis of the series, in the language defined in the `language` column. **250-character limit.**

| Excel Column            | Accepted Values        | Required |
| ----------------------- | ---------------------- | -------- |
| `series_short_synopsis` | 250-character synopsis | Required |

### series_long_synopsis

A long synopsis of the series, in the language defined in the `language` column. **500-character limit.**

| Excel Column           | Accepted Values        | Required |
| ---------------------- | ---------------------- | -------- |
| `series_long_synopsis` | 500-character synopsis | Optional |

***

## Season Block

### season_id

Immutable, unique identifier for a season. Generated/supplied by the partner. **50-character limit.**

| Excel Column | Accepted Values                                                                | Required |
| ------------ | ------------------------------------------------------------------------------ | -------- |
| `season_id`  | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

### season_number

Numerical position of the season within the series — determines viewing order of underlying episodes. Values **must** reflect original broadcast/exhibition order. Integers only; **must be greater than 0.**

| Excel Column    | Accepted Values              | Required |
| --------------- | ---------------------------- | -------- |
| `season_number` | Integers greater than 0 only | Required |

***

## Episode Content Descriptors

### episode_title

Title of the episode, in the language defined in the `language` column. Include **only** the name as it should appear on platform — no non-title parentheticals.

| Excel Column    | Accepted Values        | Required |
| --------------- | ---------------------- | -------- |
| `episode_title` | Example: Episode Title | Required |

### episode_number

Numerical position of the episode within its season — determines viewing order on platform. Values **must** reflect original broadcast/exhibition order; production numbers **must not** be used. Integers only.

| Excel Column     | Accepted Values | Required |
| ---------------- | --------------- | -------- |
| `episode_number` | Integers only   | Required |

### original_spoken_language

Original production language of the **episode**. At minimum, must conform to a [supported language code](#language-codes). Best practice: include a region code (e.g., `es-MX` vs. `es-ES`).

> **Note:** this field is not prefixed `episode_` in the template, but applies at the **episode level**, not the series level.

| Excel Column               | Accepted Values                             | Required |
| -------------------------- | ------------------------------------------- | -------- |
| `original_spoken_language` | One valid [language value](#language-codes) | Required |

### country_of_origin

The primary country where the **episode** was produced, and where the main creators, crew, and producers are established. Must conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) code.

> **Note:** this field is not prefixed `episode_` in the template, but applies at the **episode level**, not the series level.

| Excel Column        | Accepted Values                                                                                              | Required  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | --------- |
| `country_of_origin` | One valid 2-character country code per [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

### episode_release_date

Original date the episode was first made available in any presentation. Must include an accurate **year of release** at minimum.

| Excel Column           | Accepted Values               | Required |
| ---------------------- | ----------------------------- | -------- |
| `episode_release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

### episode_runtime

Total runtime of the episode, in **whole minutes**.

| Excel Column      | Accepted Values              | Required |
| ----------------- | ---------------------------- | -------- |
| `episode_runtime` | Integers only. Example: `22` | Required |

### rating_system and episode_ratings

`rating_system` holds the rating authority (e.g., `MPAA`), and `episode_ratings` holds the corresponding rating value (e.g., `TV-14`) for that authority — the same intentional two-column split confirmed for the [Excel Film Reference](#rating_system-and-ratings). A valid TV rating from the rating authority of the territory where the content will be available **must** be provided for each episode. If not rated by that territory's official authority, use a valid `USA_PR` rating instead, per [tvguidelines.org](http://tvguidelines.org/) guidelines.

> **Note:** Rating is an **episode-level** field only — there is no separate series-level rating field.

| Excel Column      | Accepted Values                                                                        | Required |
| ----------------- | -------------------------------------------------------------------------------------- | -------- |
| `rating_system`   | See [rating values by system and country](#rating-values-by-rating-system-and-country) | Required |
| `episode_ratings` | See [rating values by system and country](#rating-values-by-rating-system-and-country) | Required |

### episode_tags

Freeform categorization field beyond Genre, same rules as [series_tags](#series_tags) above.

| Excel Column   | Accepted Values                | Required               |
| -------------- | ------------------------------ | ---------------------- |
| `episode_tags` | Any string under 50 characters | **Highly recommended** |

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

> _Note: the Accepted Values for this field were missing from the source table — restored above as&#x20;_`1`_–_`6`_, consistent with the [TV XML Reference](#)._

***

## Ad Breaks & Cue Points

> **Note:** ad breaks and cue points are **episode-level** fields only — there are no separate series-level equivalents.

### episode_ad_breaks

Used to determine [Ad Breaks for Ad Supported Content](#ad-breaks). Values **must** be accurate to the millisecond. If commercial blacks are present, provide the timecode at the **midpoint**. Not required for SVOD, but frame-accurate data can be ingested if available.

| Excel Column        | Accepted Values | Required  |
| ------------------- | --------------- | --------- |
| `episode_ad_breaks` | `HH:MM:SS.sss`  | Preferred |

### episode_cue_points

Identifies start/end times of opening credits, recaps, end credits, and behind-the-scenes footage. Values **must** be accurate to the millisecond.

> **Note:** as in the Excel Film template, this is a **single comma-separated text string** in one cell, encoding the same concept described in the [TV XML Reference](#cuepoint-start_time-and-end_time)'s nested `cuePoint` elements.

**Format:** a comma-separated list of `type=startTime>endTime` pairs.

**Example:**

```
intro=00:05:10.253>00:07:15.123,recap=00:01:12.456>00:03:12.052
```

| Excel Column         | Accepted Values                                                                                                               | Required |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- |
| `episode_cue_points` | Format: `type=HH:MM:SS.sss>HH:MM:SS.sss`. Allowable `type` values: `ad overlay`, `behind the scenes`, `intro`, `recap`, `end` | Optional |

***

## Episode Cast & Crew

### episode_cast

Names of cast members for the episode.

| Excel Column   | Accepted Values                              | Required  |
| -------------- | -------------------------------------------- | --------- |
| `episode_cast` | Comma-separated list of `Firstname Lastname` | Preferred |

### episode_director

Name(s) of the episode's director.

> **Cross-format note:** Director is currently the only crew member role supported for Excel metadata ingest.

| Excel Column       | Accepted Values                              | Required  |
| ------------------ | -------------------------------------------- | --------- |
| `episode_director` | Comma-separated list of `Firstname Lastname` | Preferred |

***

## Assets

### video_file_name

File name of the video, in the language defined in the `language` column, delivered via Aspera. **Only one video allowed per&#x20;**`asset_id`**.** Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column      | Accepted Values                 | Required |
| ----------------- | ------------------------------- | -------- |
| `video_file_name` | Example: `episodeVideoFile.mov` | Required |

### video_file_language

Primary language of the video file's spoken dialogue and/or visible text. If there is no dialogue or visible text, use the language spoken by the intended audience. **Also applies to** `closed_caption_file_name` and `forced_subtitle_file_name`. **Only one language allowed.**

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

### closed_caption_file_name

File name of the closed captions, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters. Its language is derived from `video_file_language`.

| Excel Column               | Accepted Values                | Required |
| -------------------------- | ------------------------------ | -------- |
| `closed_caption_file_name` | Example: `episodeCaptions.srt` | Required |

### forced_subtitle_file_name

File name of the forced narrative subtitle, in the language defined in `video_file_language`, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters. Its language is derived from `video_file_language`.

| Excel Column                | Accepted Values                      | Required                                           |
| --------------------------- | ------------------------------------ | -------------------------------------------------- |
| `forced_subtitle_file_name` | Example: `episodeForcedSubtitle.srt` | Required when providing forced narrative subtitles |

***

## Artwork

### series_keyart_file_name

File name of the texted key art image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column              | Accepted Values              | Required |
| ------------------------- | ---------------------------- | -------- |
| `series_keyart_file_name` | Example: `episodeKeyArt.jpg` | Required |

### series_boxcover_file_name

File name of the texted boxcover image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column                | Accepted Values              | Required  |
| --------------------------- | ---------------------------- | --------- |
| `series_boxcover_file_name` | Example: `episodeBoxArt.jpg` | Preferred |

### series_poster_file_name

File name of the texted poster image, in the language defined in the `language` column, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column              | Accepted Values             | Required  |
| ------------------------- | --------------------------- | --------- |
| `series_poster_file_name` | Example: `seriesPoster.jpg` | Preferred |

### series_background_file_name

File name of the textless **series**-level background image, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

> _Corrected from the source, which showed the same example filename (_`episodeBGimage.jpg`_) for both&#x20;_`series_background_file_name`_&#x20;and&#x20;_`episode_background_file_name`_&#x20;— updated below to a series-specific example so the two are visually distinct._

| Excel Column                  | Accepted Values              | Required  |
| ----------------------------- | ---------------------------- | --------- |
| `series_background_file_name` | Example: `seriesBGimage.jpg` | Preferred |

### episode_background_file_name

File name of the textless **episode**-level background image, delivered via Aspera. Must exactly match the delivered file. **Case-sensitive**; no whitespace or special characters.

| Excel Column                   | Accepted Values               | Required  |
| ------------------------------ | ----------------------------- | --------- |
| `episode_background_file_name` | Example: `episodeBGimage.jpg` | Preferred |

***

## Availability

> **Note:** as in the [Excel Film Reference](#availability), none of these fields are marked Required — consistent with the confirmed XML behavior for `playOptions` and its children.

### vod_type

Monetization type of the episode. Multiple comma-separated values allowed, provided `territory`, `episode_start_date`, and `episode_end_date` are identical across them.

| Excel Column | Accepted Values                      | Required  |
| ------------ | ------------------------------------ | --------- |
| `vod_type`   | Example: `avod`, `svod`, `avod,svod` | Preferred |

### territory

Country code(s) of the territory where the content is available. Multiple comma-separated country codes allowed, provided `vod_type`, `episode_start_date`, and `episode_end_date` are identical across them.

| Excel Column | Accepted Values        | Required  |
| ------------ | ---------------------- | --------- |
| `territory`  | `US`, `CA`, `GB`, `MX` | Preferred |

### episode_start_date

Start date of content availability. Must be chronologically **before** `episode_end_date`; the two **must not** be identical.

| Excel Column         | Accepted Values                        | Required  |
| -------------------- | -------------------------------------- | --------- |
| `episode_start_date` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Preferred |

### episode_end_date

End date of content availability. Must be chronologically **after** `episode_start_date`; the two **must not** be identical.

| Excel Column       | Accepted Values                        | Required  |
| ------------------ | -------------------------------------- | --------- |
| `episode_end_date` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Preferred |