---
title: Avails and Committed Title List - Field Definitions
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field reference for the Avails and Committed Title List (CTL) Excel sheet. For process, policy, and submission rules, see [Avails and Committed Title Lists for The Roku Channel](#avails-and-committed-title-lists-for-the-roku-channel).

Fields are grouped into: **Availability Attribute Fields** (License Type, Territory, Language, dates) and **Title Metadata Fields** (descriptive and identifying information).

***

## Availability Attribute Fields

Each unique combination of these attributes, bound by a start and end date, represents **one availability window** and should occupy its own row.

### Content Partner

Name of the content owner/studio/network availing the content to The Roku Channel.

| Type   | Accepted Values         | Required |
| ------ | ----------------------- | -------- |
| string | Example: Roku Originals | Required |

### Content Type

The content type of the program:

| Value       | Definition                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `episode`   | TV program structured in a series/season/episode hierarchy.                                                                                                          |
| `movie`     | Full-length, stand-alone program not intended to nest in a series/season/episode hierarchy, exceeding roughly 15 minutes runtime — includes stand-alone TV specials. |
| `shortForm` | Short-duration, stand-alone program not exceeding roughly 15 minutes runtime, not intended to nest in a series/season/episode hierarchy.                             |

| Type | Accepted Values                 | Required |
| ---- | ------------------------------- | -------- |
| enum | `movie`, `episode`, `shortForm` | Required |

### License Type

Available distribution rights for the content. Multiple rights **may** be submitted on the same row, provided all other availability attributes are identical across them. The License Type **must** adhere to the distribution rights defined in the agreement signed with The Roku Channel.

| Value        | Definition                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AVOD`       | Ad-Supported Video on Demand — plays free for all users, with advertisements.                                                                                      |
| `SVOD`       | Subscription Video on Demand — plays for users with an active subscription. _Premium Subscriptions Partners only._                                                 |
| `FVOD`       | Free Video on Demand — plays free for all users, without monetization. FVOD windows must fall within an active SVOD window. _Premium Subscriptions Partners only._ |
| `Linear OTT` | Over-the-top linear streaming rights, for inclusion on Roku-built channels.                                                                                        |

| Type | Accepted Values                      | Required |
| ---- | ------------------------------------ | -------- |
| enum | `AVOD`, `SVOD`, `FVOD`, `Linear OTT` | Required |

### Excluded Rights

Distribution exclusions for the content, using the same value definitions as [License Type](#license-type) above. Multiple exclusions **may** be submitted on the same row, provided all other availability attributes are identical.

| Type | Accepted Values                      | Required |
| ---- | ------------------------------------ | -------- |
| enum | `AVOD`, `SVOD`, `FVOD`, `Linear OTT` | Optional |

### Start Date

Start of availability. If the content has no set start date, `"open"` is acceptable. Start dates without a time value assume a relative start of `12:00:00 AM` on the date listed.

| Type        | Accepted Values                                | Required |
| ----------- | ---------------------------------------------- | -------- |
| date string | `YYYY-MM-DD`, `YYYY-MM-DDTHH:MM:SS`, or `open` | Required |

### End Date

End of availability. If the content has no set end date, `"open"` or `"end of term"` are acceptable. End dates without a time value assume a relative end of `11:59:59 PM` on the date listed.

| Type        | Accepted Values                                               | Required |
| ----------- | ------------------------------------------------------------- | -------- |
| date string | `YYYY-MM-DD`, `YYYY-MM-DDTHH:MM:SS`, `open`, or `end of term` | Required |

### Language

The language(s) made available to users. Values **must** conform to a supported [language code](#language-codes). Multiple language/localization-type combinations **may** be provided on the same row, provided all other availability attributes are identical. When multiple languages are provided, each **must** include its localization type, appended with a colon:

| Localization Type | Meaning                                                                              |
| ----------------- | ------------------------------------------------------------------------------------ |
| `dub`             | The language property refers to an audio track (applicable to original voice audio). |
| `sub`             | The language property refers to a subtitle track.                                    |
| `subdub`          | Includes both subtitles and dubbed audio.                                            |
| `any`             | Includes any combination of subtitles or dubbed audio, whichever is available.       |

| Type | Accepted Values                                        | Required |
| ---- | ------------------------------------------------------ | -------- |
| enum | Examples: `en:dub`, `fr:sub`, `de:subdub`, `es-mx:any` | Required |

### Localization Type

Applies **only** when a single language code is provided in the [Language](#language) column (i.e., without an inline `:type` suffix) — this column then carries the localization type separately. Uses the same values as the inline suffix above (`dub`, `sub`, `subdub`, `any`).

> **Note:** the relationship between this column and the inline `language:type` syntax can be easy to miss — use the inline suffix when providing multiple languages on one row, and use this separate column only when providing a single language without a suffix.

| Type | Accepted Values               | Required                                                         |
| ---- | ----------------------------- | ---------------------------------------------------------------- |
| enum | `sub`, `dub`, `subdub`, `any` | Required when providing a single language in the Language column |

### Excluded Languages

The language(s) that must **not** be made available. Values **must** conform to a supported [language code](#language-codes). Multiple exclusions **may** be provided on the same row, provided all other availability attributes are identical.

| Type | Accepted Values     | Required |
| ---- | ------------------- | -------- |
| enum | Example: `en`, `de` | Optional |

### Territory

[ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/#search) country code for the territory where the content may be available. Multiple territories **may** be submitted on the same row, provided all other availability attributes are identical.

| Type | Accepted Values                                | Required |
| ---- | ---------------------------------------------- | -------- |
| enum | Example: `US`, `CA`, `GB`, `MX`, `LATAM`, `WW` | Required |

### Excluded Territories

[ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/#search) country code for territories where the content should **not** be available. Multiple territories **may** be excluded.

| Type | Accepted Values     | Required |
| ---- | ------------------- | -------- |
| enum | Example: `DE`, `FR` | Optional |

***

## Title Metadata Fields

### Series Title

Title of the series, for episodic TV content. Include **only** the name as it should appear on platform — no non-title parentheticals (e.g., `(Classic)`, `(1987)`, `(Season #)`).

| Type   | Accepted Values   | Required        |
| ------ | ----------------- | --------------- |
| string | Example: Die Hart | Required for TV |

### Series ID

Immutable, unique identifier for a TV series. Generated/supplied by the partner; **should** match the ID provided in the metadata at ingest.

- **Must not** be the same as the unique episode ID.
- **Must** be included with, and consistent across, all episodes of a series.
- **Must not** exceed 50 characters.
- Alphanumeric characters, hyphens, and underscores only.

| Type   | Accepted Values        | Required                                |
| ------ | ---------------------- | --------------------------------------- |
| string | Example: `diehartshow` | Required for TV. 50 characters maximum. |

### Title

Title of the movie, episode, or shortForm video. Include **only** the name as it should appear on platform — no non-title parentheticals.

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | Example: Pilot  | Required |

### Title ID

Immutable, unique identifier for a movie, episode, or shortForm video. Generated/supplied by the partner; **should** match the ID provided in the metadata at ingest, to aid tracking from Avails/CTL submission through publication.

- **Must not** exceed 50 characters.
- Alphanumeric characters, hyphens, and underscores only.

| Type   | Accepted Values        | Required                         |
| ------ | ---------------------- | -------------------------------- |
| string | Example: `dieharts1e1` | Required. 50 characters maximum. |

### Season Number

Season number for the episode. **Must** follow the original broadcast/distribution sequence and be a number — letters are not allowed.

| Type    | Accepted Values | Required        |
| ------- | --------------- | --------------- |
| integer | `#`, `##`, …    | Required for TV |

### Episode Number

Episode number. **Must** follow the original broadcast/distribution sequence within a season and be a number — letters are not allowed. **Do not** use production numbers (e.g., `201` for season 2, episode 1).

| Type    | Accepted Values | Required        |
| ------- | --------------- | --------------- |
| integer | `#`, `##`, …    | Required for TV |

### Country of Origin

The primary country where the content was produced, and where the main creators, crew, and producers are established. Must conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) code. **Include one country only.**

| Type | Accepted Values           | Required                    |
| ---- | ------------------------- | --------------------------- |
| enum | Example: `US`, `CA`, `DE` | Required. One country only. |

### Original Spoken Language

The language in which the content was produced — usually the primary language of the country of origin, and the language that synchronizes with performers' mouth movements. Must conform to a supported [language code](#language-codes). **May** include multiple languages, comma-separated.

| Type | Accepted Values           | Required |
| ---- | ------------------------- | -------- |
| enum | Example: `en-us`, `fr-ca` | Required |

### Run Time

Runtime of the content, in whole minutes. **Minimum runtime is 1.**

| Type    | Accepted Values | Required |
| ------- | --------------- | -------- |
| integer | Example: `22`   | Required |

### Format

Highest video resolution available for the content. All lower resolutions are assumed to also be available.

| Type | Accepted Values   | Required |
| ---- | ----------------- | -------- |
| enum | `SD`, `HD`, `UHD` | Required |

> Roku does not currently support playback of UHD/4K content, but can accept UHD/4K as a source for future playback availability.

### DBO (Domestic Box Office Gross)

| Type   | Accepted Values       | Required |
| ------ | --------------------- | -------- |
| string | Example: `$2,000,000` | Optional |

### Closed Captioning

Whether captions are included with the content, per [FCC guidelines](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming). If captions are **not** included, a Caption Exemption value **must** be provided.

| Type    | Accepted Values | Required |
| ------- | --------------- | -------- |
| Boolean | `true`, `false` | Required |

### Caption Exemption

**US avails only.** FCC exemption code for the closed caption requirement.

| Code | Definition                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The content has never aired on television in the United States.                                                                       |
| 2    | The content has only aired on television in the United States without captions.                                                       |
| 3    | The content has not aired on television in the United States with captions since September 30, 2012.                                  |
| 4    | The content does not consist of full-length video programming.                                                                        |
| 5    | The content does not fall within a category of online programming that requires captions under FCC regulations (47 C.F.R. § 79.4(b)). |
| 6    | The FCC and/or U.S. Congress has granted an exemption from captioning requirements for this content.                                  |

| Type | Accepted Values              | Required                                 |
| ---- | ---------------------------- | ---------------------------------------- |
| enum | `1`, `2`, `3`, `4`, `5`, `6` | Required if Closed Captioning is `false` |

### Audio Description

Whether an audio description track is included. [Audio description](https://www.fcc.gov/audio-description) (also called video description) is narrated description of a program's key visual elements, inserted into natural dialogue pauses — making content more accessible to blind/visually impaired viewers. If required for the content and not provided, an Audio Description Exemption **must** be included.

> Audio description is not currently required for all content by the FCC, but Roku prefers to make content as accessible as possible, and this may become a requirement in the future.

| Type    | Accepted Values | Required |
| ------- | --------------- | -------- |
| Boolean | `true`, `false` | Optional |

### Audio Description Exemption

Exemption reason for not providing an audio description track where required.

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | —               | Optional |

### Original Release Date

Original date the content was first made available in any presentation. **Must** include the year of release at minimum.

| Type        | Accepted Values        | Required |
| ----------- | ---------------------- | -------- |
| date string | `YYYY-MM-DD` or `YYYY` | Required |

### Genre

Genre classification of the content. **May** provide multiple genres, comma-separated.

| Type | Accepted Values       | Required |
| ---- | --------------------- | -------- |
| enum | See [Genres](#genres) | Required |

### Tags

Freeform field for keywords/tags/categories used to surface content on The Roku Channel UI. See the [Best Practices: Content Tags and Metadata](https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md) page for guidance.

| Type   | Accepted Values                            | Required |
| ------ | ------------------------------------------ | -------- |
| string | Example: `exciting`, `timely`, `political` | Optional |

### Rating Source

The rating system applied to this edit of the title within the territory of avail. **Must** be formatted and paired with Rating Value per [Ratings](#rating-values-by-rating-system-and-country).

| Type | Accepted Values                                            | Required |
| ---- | ---------------------------------------------------------- | -------- |
| enum | See [Ratings](#rating-values-by-rating-system-and-country) | Optional |

### Rating Value

The rating value within the specified Rating Source. **Must** be formatted and paired with Rating Source per [Ratings](#rating-values-by-rating-system-and-country).

| Type | Accepted Values                                            | Required |
| ---- | ---------------------------------------------------------- | -------- |
| enum | See [Ratings](#rating-values-by-rating-system-and-country) | Optional |

### Kids-Directed

Indicates the content is intended for young/family audiences. **Must** adhere to the [Kids-Directed Content Policy](#kids-directed-content-policy).

| Type    | Accepted Values | Required |
| ------- | --------------- | -------- |
| Boolean | `true`, `false` | Optional |

### Recommended Age Group

When Kids-Directed is `true`, a recommended age range **may** be supplied. **Only one** allowed.

| Value         | Definition             |
| ------------- | ---------------------- |
| `ages_1-3`    | Viewers ages 1–3       |
| `ages_4-6`    | Viewers ages 4–6       |
| `ages_7-9`    | Viewers ages 7–9       |
| `ages_10plus` | Viewers ages 10 and up |

| Type | Accepted Values                                   | Required                                     |
| ---- | ------------------------------------------------- | -------------------------------------------- |
| enum | `ages_1-3`, `ages_4-6`, `ages_7-9`, `ages_10plus` | Optional. Used when Kids-Directed is `true`. |

### Main Cast

Top-billed cast, comma-separated, in `Firstname Lastname` format.

| Type | Accepted Values                      | Required |
| ---- | ------------------------------------ | -------- |
| list | Example: `Kevin Hart, John Travolta` | Required |

### Synopsis

A short synopsis of the content, for selection purposes. **Not to exceed 250 characters.**

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | —               | Required |

### External ID Source

Source entity for the external ID provided. **May** include IDs from multiple sources, comma-separated, with the source indicated via a colon.

| Value  | Definition   |
| ------ | ------------ |
| `TMS`  | Gracenote ID |
| `IMDb` | IMDb ID      |
| `Wiki` | Wikipedia ID |

| Type   | Accepted Values                                                                                       | Required |
| ------ | ----------------------------------------------------------------------------------------------------- | -------- |
| string | Example: `TMS, IMDb, Wiki`. Multi-source example: `TMS:E12345678, IMDb:tt12345678, Wiki:benson_s1_e1` | Optional |

### Series External ID

Third-party identifier of the series.

| Type   | Accepted Values             | Required |
| ------ | --------------------------- | -------- |
| string | Example: `diehartshowExtId` | Optional |

### External ID

Third-party identifier of the content.

| Type   | Accepted Values             | Required |
| ------ | --------------------------- | -------- |
| string | Example: `dieharts1e1ExtId` | Optional |

### Screener Link

URL to stream or download a screener for the content, to aid content selection. Any required password should also be included.

| Type   | Accepted Values                                        | Required |
| ------ | ------------------------------------------------------ | -------- |
| string | Example: `https://urlLinkToScreener`, password: `1234` | Optional |

### Exclusive

Indicates the content is available **exclusively** on The Roku Channel.

| Type    | Accepted Values | Required |
| ------- | --------------- | -------- |
| Boolean | `true`, `false` | Optional |

### Notes

Freeform field for additional avail notes — for linear content, this includes run/telecast restrictions or any other specifics not captured elsewhere in the Avails/CTL.

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | —               | Optional |

### Merchant of Record

Name of the entity to which financial transactions should be attributed, if other than the listed Content Partner.

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | Example: Roku   | Optional |

### Day Parting

**Linear content only.** Any day-parting rules for the content.

| Type   | Accepted Values | Required |
| ------ | --------------- | -------- |
| string | —               | Optional |
