---
title: XML - film metadata fields
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field XML reference for the **Film** content type. For the schema download and annotated sample, see the [Roku XML Metadata Overview](#roku-xml-metadata-overview). For general metadata concepts (content type definitions, ID rules, availability windows) that apply across all content types, see the [Metadata Overview](#roku-metadata-overview).

Fields are grouped below into: **Package Info**, **Content Descriptors**, **Ad Breaks & Cue Points**, **Cast & Crew**, **Localizations**, **Play Options / Availability**, and **Assets**.

***

## Package Info

### package

Defines the package version type.

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/@version` | `film5.0`       | Required |

```xml
<package version="film5.0">
```

### provider

Name of the content owner/studio/network.

| XML XPath           | Example        | Required |
| ------------------- | -------------- | -------- |
| `/package/provider` | Roku Originals | Required |

```xml
<provider>Roku Originals</provider>
```

### language

Primary language of the package metadata. At minimum, the value **must** conform to a supported [language code](#language-codes). As a best practice, **include a region code** as well — e.g., to distinguish Spanish spoken in Mexico (`es-MX`) from Spanish spoken in Spain (`es-ES`).

| XML XPath           | Accepted Values                                                                                              | Required |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| `/package/language` | Valid [language value](#language-codes) (`en`, `es`, etc.); may include region code (`en-US`, `es-MX`, etc.) | Required |

```xml
<language>en</language>
```

### type

Defines the content type of the package.

| XML XPath             | Accepted Values | Required |
| --------------------- | --------------- | -------- |
| `/package/video/type` | `film`          | Required |

```xml
<type>film</type>
```

### asset_id

Immutable, unique identifier for a movie. IDs are generated and supplied **by the partner**. The ID in the ingest metadata **should** match the ID provided in the Avails document — this aids tracking across Roku's pipeline, from Avails submission through publication. **50-character limit.**

| XML XPath                 | Accepted Values                                                                | Required |
| ------------------------- | ------------------------------------------------------------------------------ | -------- |
| `/package/video/asset_id` | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

```xml
<asset_id>movieAssetIdHere</asset_id>
```

### eidr

EIDR ID, if one exists.

| XML XPath             | Accepted Values   | Required |
| --------------------- | ----------------- | -------- |
| `/package/video/eidr` | Any valid EIDR ID | Optional |

```xml
<eidr></eidr>
```

### tmsId

Gracenote ID, if one exists.

| XML XPath              | Accepted Values  | Required |
| ---------------------- | ---------------- | -------- |
| `/package/video/tmsId` | Any valid TMS ID | Optional |

```xml
<tmsId></tmsId>
```

***

## Content Descriptors

### title

Title of the movie. Include **only** the name of the content as it should appear on platform — do **not** include non-title parentheticals such as an original/remake indicator, year of release, season, or video format (e.g., `(Classic)`, `(1987)`, `(Season 1)`, `(HD)`).

| XML XPath              | Example     | Required |
| ---------------------- | ----------- | -------- |
| `/package/video/title` | Movie Title | Required |

```xml
<title><![CDATA[Movie Title. Required.]]></title>
```

### short_synopsis

A short synopsis of the content. CDATA supported. **250-character limit.**

| XML XPath                       | Accepted Values        | Required |
| ------------------------------- | ---------------------- | -------- |
| `/package/video/short_synopsis` | 250-character synopsis | Required |

```xml
<short_synopsis><![CDATA[Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis

A long synopsis of the content. CDATA supported. **500-character limit.**

| XML XPath                      | Accepted Values        | Required |
| ------------------------------ | ---------------------- | -------- |
| `/package/video/long_synopsis` | 500-character synopsis | Optional |

```xml
<long_synopsis><![CDATA[Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

The original production language of the title. At minimum, the value **must** conform to a [supported language code](#language-codes). As a best practice, **include a region code** as well (see [language](#language) above for the `es-MX` / `es-ES` example).

| XML XPath                                 | Accepted Values                                                                     | Required |
| ----------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `/package/video/original_spoken_language` | Valid [language value](#language-codes) (`en`, `es`, etc.); may include region code | Required |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

The primary country where the film was produced and where the main creators, crew, and producers are established. Value **must** conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) 2-character country code.

| XML XPath                          | Accepted Values                                                                                          | Required  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| `/package/video/country_of_origin` | Valid 2-character country code per [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

```xml
<country_of_origin>US</country_of_origin>
```

### closedCaptions

Indicates whether the delivered title contains closed captions. **Required for all content intended for Roku Channel in the US.**

| XML XPath                       | Accepted Values | Required                |
| ------------------------------- | --------------- | ----------------------- |
| `/package/video/closedCaptions` | `Y` or `N`      | Required for US content |

```xml
<closedCaptions>Y</closedCaptions>
```

### closedCaptionsExemption

FCC exemption code for the closed caption requirement. **Required if&#x20;**`closedCaptions`**&#x20;=&#x20;**`N`**.**

| Code | Definition                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The content has never aired on television in the United States.                                                                       |
| 2    | The content has only aired on television in the United States without captions.                                                       |
| 3    | The content has not aired on television in the United States with captions since September 30, 2012.                                  |
| 4    | The content does not consist of full-length video programming.                                                                        |
| 5    | The content does not fall within a category of online programming that requires captions under FCC regulations (47 C.F.R. § 79.4(b)). |
| 6    | The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.                                     |

| XML XPath                                | Accepted Values              | Required                           |
| ---------------------------------------- | ---------------------------- | ---------------------------------- |
| `/package/video/closedCaptionsExemption` | `1`, `2`, `3`, `4`, `5`, `6` | Required if `closedCaptions` = `N` |

```xml
<closedCaptionsExemption>1</closedCaptionsExemption>
```

### release_date

Original date the content was first made available in any presentation. Must include an accurate **year of release** at minimum.

| XML XPath                     | Accepted Values               | Required |
| ----------------------------- | ----------------------------- | -------- |
| `/package/video/release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### runtime

Total runtime of the content, in **whole minutes**.

| XML XPath                | Accepted Values | Required |
| ------------------------ | --------------- | -------- |
| `/package/video/runtime` | Integers only   | Required |

```xml
<runtime>120</runtime>
```

### genre

Genre classification of the content. Each movie **must** be delivered with **at least one** supported genre. See the [enumerated genre list](#genres).

| XML XPath                     | Accepted Values                                                   | Required |
| ----------------------------- | ----------------------------------------------------------------- | -------- |
| `/package/video/genres/genre` | See [enumerated list](#genres). No more than 10 genres per title. | Required |

```xml
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

### rating

Parental/content advisory rating from a rating source. A valid movie or TV rating from the rating authority (`ratingSystem`) of the territory where the content will be available **must** be provided for each movie. If the title hasn't been rated by that territory's official authority, include a valid rating from the `USA_PR` rating system instead — there is no official ratings body for `USA_PR`; use the guidelines at [tvguidelines.org](http://tvguidelines.org/) to assign the appropriate rating.

| XML XPath                                                             | Accepted Values                                                                                                                      | Required |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `/package/video/ratings/rating` (must include the `system` attribute) | See [rating values by system and country](#rating-values-by-rating-system-and-country). Multiple rating/rating-system pairs allowed. | Required |

```xml
<ratings>
  <rating system="MPAA" reason="For drug content, some sensuality and war violence.">PG-13</rating>
  <rating system="BBFC">12A</rating>
  <rating system="CHVRS">14A</rating>
</ratings>
```

### tag

A freeform field for categorizing content beyond the limited set of supported Genre values. Roku's editorial team and recommendations engine use Tags to help surface content in the platform UI — more tags generally means more ways content can be curated/surfaced. There is **no limit** on the number of tags and **no defined/enumerated tag set**.

- Tags are **case-sensitive** — `"Rom-Com"` and `"rom-com"` are two distinct tags. Deliver tags **consistently**.

| XML XPath                 | Accepted Values                | Required                             |
| ------------------------- | ------------------------------ | ------------------------------------ |
| `/package/video/tags/tag` | Any string under 50 characters | Optional, but **highly recommended** |

```xml
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

***

## Ad Breaks & Cue Points

### adBreak start_time

Used to determine [Ad Breaks for Ad Supported Content](#ad-breaks). Values **must** be accurate to the millisecond. If the video includes commercial blacks, provide the timecode at the **midpoint** of the commercial black. Not required for SVOD content, but frame-accurate adBreak data can be ingested if available.

| XML XPath                                    | Accepted Values | Required                   |
| -------------------------------------------- | --------------- | -------------------------- |
| `/package/video/adBreaks/adBreak/start_time` | `HH:MM:SS.sss`  | Preferred for AVOD content |

```xml
<adBreaks>
  <adBreak>
    <start_time>00:03:15.000</start_time>
  </adBreak>
  <adBreak>
    <start_time>00:07:45.425</start_time>
  </adBreak>
<!-- Additional adBreaks here-->
</adBreaks>
```

### cuePoint start_time and end_time

Used to identify the in/out points of opening credits, content recaps, end credits, and behind-the-scenes footage. `cuePoint` tags **must** include the `type` attribute. Values **must** be accurate to the millisecond.

| XML XPath                                      | Accepted Values | Required  |
| ---------------------------------------------- | --------------- | --------- |
| `/package/video/cuePoints/cuePoint/start_time` | `HH:MM:SS.sss`  | Preferred |
| `/package/video/cuePoints/cuePoint/end_time`   | `HH:MM:SS.sss`  | Preferred |

```xml
<cuePoints>
	<cuePoint type="ad overlay">
		<start_time>00:09:10.456</start_time>
		<end_time>00:09:12.678</end_time>
	</cuePoint>
	<cuePoint type="behind the scenes">
		<start_time>00:07:08.123</start_time>
		<end_time>00:07:59.123</end_time>
	</cuePoint>
	<cuePoint type="intro">
		<start_time>00:01:08.123</start_time>
		<end_time>00:01:59.123</end_time>
	</cuePoint>
	<cuePoint type="recap">
		<start_time>00:21:08.123</start_time>
		<end_time>00:21:59.123</end_time>
	</cuePoint>
	<cuePoint type="end">
		<start_time>00:41:08.123</start_time>
		<end_time>00:41:59.123</end_time>
	</cuePoint>
</cuePoints>
```

### cuePoint type attribute

Defines the type of a given `cuePoint`. The attribute name **must** be `type`, with one of the following values. **For every type below: if providing that cuePoint,&#x20;**`start_time`**&#x20;and&#x20;**`end_time`**&#x20;are both required.**

| Type Value          | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `ad overlay`        | The point within the video for in-program product placement advertisements. |
| `behind the scenes` | Behind-the-scenes footage, typically at the tail of a video.                |
| `intro`             | The opening credits of the program.                                         |
| `recap`             | A recap of previous content, typically for episodic television.             |
| `end`               | The end credits of the program.                                             |

| XML XPath                           | Accepted Values         | Required                        |
| ----------------------------------- | ----------------------- | ------------------------------- |
| `/package/video/cuePoints/cuePoint` | One of the values above | Required if providing cuePoints |

```xml
<cuePoint type="intro">
```

***

## Cast & Crew

### cast display_name

Name of a cast member. CDATA supported.

| XML XPath                                      | Accepted Values    | Required |
| ---------------------------------------------- | ------------------ | -------- |
| `/package/video/cast/cast_member/display_name` | Firstname Lastname | Optional |

```xml
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

### crew display_name

Name of a crew member. CDATA supported.

| XML XPath                                      | Accepted Values    | Required                              |
| ---------------------------------------------- | ------------------ | ------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Firstname Lastname | Required if providing a `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

> **Cross-format note:** Director is currently the **only** `crew_member` role supported for **Excel** ingest (this XML reference supports the full crew role list below; the limitation is specific to the Excel delivery format).

### role

Role of the crew member named in `display_name`. Every crew member included **must** also include their role. See the [enumerated crew roles list](#crew-roles). **Roles are case-sensitive.**

> **Cross-format note:** as above, Director is currently the only `crew_member` role supported for Excel ingest.

| XML XPath                                    | Accepted Values                    | Required                              |
| -------------------------------------------- | ---------------------------------- | ------------------------------------- |
| `/package/video/crew/crew_member/roles/role` | See [enumerated list](#crew-roles) | Required if providing a `crew_member` |

```xml
<role>Director</role>
```

***

## Localizations

### localizations

Begins the block providing localized metadata for multi-language packages — language, translated title, `short_synopsis`, and `long_synopsis`.

| XML XPath                      | Accepted Values | Required |
| ------------------------------ | --------------- | -------- |
| `/package/video/localizations` | —               | Required |

```xml
<localizations>
```

### localization name attribute

Defines the language of the localized fields within a `localization` block. The attribute name **must** be `name`, and its value **must**, at minimum, conform to a [supported language code](#language-codes) — include a region code as a best practice (see [language](#language) above).

| XML XPath                                   | Accepted Values                                                 | Required |
| ------------------------------------------- | --------------------------------------------------------------- | -------- |
| `/package/video/localizations/localization` | Valid [language code](#language-codes); may include region code | Required |

```xml
<localization name="es">
```

### localized title

Localized title of the movie, in the language specified by the enclosing `localization` block's `name` attribute. Same non-title-parenthetical restrictions as [title](#title) above. **Must be accompanied by** a localized `short_synopsis` and `long_synopsis`.

| XML XPath                                         | Accepted Values       | Required |
| ------------------------------------------------- | --------------------- | -------- |
| `/package/video/localizations/localization/title` | Localized Movie Title | Required |

```xml
<title><![CDATA[Localized Movie Title. Required.]]></title>
```

### localized short_synopsis

Localized short synopsis, in the language specified by the enclosing `localization` block. CDATA supported. **250-character limit.** Must be accompanied by localized `title` and `long_synopsis`.

| XML XPath                                                  | Accepted Values | Required |
| ---------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/short_synopsis` | 250 characters  | Required |

```xml
<short_synopsis><![CDATA[Localized Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

### localized long_synopsis

Localized long synopsis, in the language specified by the enclosing `localization` block. CDATA supported. **500-character limit.** Must be accompanied by localized `title` and `short_synopsis`.

| XML XPath                                                 | Accepted Values | Required |
| --------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/long_synopsis` | 500 characters  | Optional |

```xml
<long_synopsis><![CDATA[Localized Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Play Options / Availability

### playOptions

Begins the block providing availability information for the package: country/territory availability, monetization type, and availability start/end dates.

| XML XPath                    | Accepted Values | Required |
| ---------------------------- | --------------- | -------- |
| `/package/video/playOptions` | —               | Optional |

```xml
<playOptions>
```

### country

Country code of the territory where the content is available. Multiple `country` nodes are allowed, provided `vodType`, `licensePeriodStart`, and `licensePeriodEnd` are identical across them.

| XML XPath                                       | Accepted Values        | Required  |
| ----------------------------------------------- | ---------------------- | --------- |
| `/package/video/playOptions/playOption/country` | `US`, `CA`, `GB`, `MX` | Preferred |

```xml
<playOption>
  <country>US</country>
  <!-- Additional country nodes here -->
</playOption>
```

### vodType

Monetization type of the movie. Multiple `vodType` nodes are allowed, provided `country`, `licensePeriodStart`, and `licensePeriodEnd` are identical across them.

| XML XPath                                       | Accepted Values | Required  |
| ----------------------------------------------- | --------------- | --------- |
| `/package/video/playOptions/playOption/vodType` | `AVOD`, `SVOD`  | Preferred |

```xml
<playOption>
  <vodType>AVOD</vodType>
  <!-- Additional vodType nodes here -->
</playOption>
```

### licensePeriodStart

Start date of content availability to Roku Channel users. **One** `licensePeriodStart` per `playOption`. Must be chronologically **before** `licensePeriodEnd`; the two **must not** be identical.

| XML XPath                                                  | Accepted Values                        | Required |
| ---------------------------------------------------------- | -------------------------------------- | -------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Optional |

```xml
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

### licensePeriodEnd

End date of content availability to Roku Channel users. **One** `licensePeriodEnd` per `playOption`. Must be chronologically **after** `licensePeriodStart`; the two **must not** be identical.

| XML XPath                                                | Accepted Values                        | Required |
| -------------------------------------------------------- | -------------------------------------- | -------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Optional |

```xml
<playOption>
  <licensePeriodEnd>YYYY-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

***

## Assets

The `assets` block references every file delivered as part of the package (video, captions, audio, subtitles, artwork). Each individual file is described by an `asset`/`data_file` pair, with attributes identifying the asset's type and role.

### assets

Begins the asset block.

| XML XPath               | Accepted Values      | Required |
| ----------------------- | -------------------- | -------- |
| `/package/video/assets` | `media_type="video"` | Required |

```xml
<assets media_type="video">
```

### Full Source (Video)

Describes the source video file. The `asset` tag's attribute must be `type="full"`, and the `data_file` tag's attribute must be `role="source"`. `<locale>` and `<file_name>` are also required.

| XML XPath                               | Accepted Values                                | Required |
| --------------------------------------- | ---------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="source"` | Required |

```xml
<asset type="full">
  <data_file role="source">
```

### Full Captions

Describes closed captions for the source video file. `asset type="full"`; `data_file role="captions"`. `<locale>` and `<file_name>` are also required.

| XML XPath                               | Accepted Values                                  | Required       |
| --------------------------------------- | ------------------------------------------------ | -------------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="captions"` | Required in US |

```xml
<asset type="full">
  <data_file role="captions">
```

### Full Audio

Describes sidecar audio for the source video file — either a full audio dub for language translation, or a descriptive audio track for accessibility. `asset type="full"`; `data_file role="audio"` (translation dub) or `role="audio description"` (accessibility). `<locale>` and `<file_name>` are also required.

**Sidecar audio may be required** when localized assets are needed (i.e., the source's original audio is not native to the distribution territory) or when complying with FCC regulations.

| XML XPath                               | Accepted Values                                                             | Required                                          |
| --------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="audio"` or `role="audio description"` | Optional\* — audio description strongly preferred |

```xml
<asset type="full">
  <data_file role="audio">
```

### Full Subtitles

Describes sidecar subtitles for the source video file. `asset type="full"`; `data_file role="subtitles"`. `<locale>` and `<file_name>` are also required.

**Sidecar subtitles may be required** when localized assets are needed (i.e., the source's original audio is not native to the distribution territory).

| XML XPath                               | Accepted Values                                   | Required   |
| --------------------------------------- | ------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="subtitles"` | Optional\* |

```xml
<asset type="full">
  <data_file role="subtitles">
```

### Forced Subtitles

Describes sidecar forced narrative subtitles for the source video file. `asset type="full"`; `data_file role="forced subtitles"`. `<locale>` and `<file_name>` are also required.

| XML XPath                               | Accepted Values                                          | Required   |
| --------------------------------------- | -------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="forced subtitles"` | Optional\* |

```xml
<asset type="full">
  <data_file role="forced subtitles">
```

### Artwork

Describes artwork file(s). `asset type="artwork"`. `<locale>` and `<file_name>` are also required. See [Artwork](#artwork) for full image delivery specifications.

| XML XPath                               | Accepted Values        | Required |
| --------------------------------------- | ---------------------- | -------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"` | Required |

```xml
<asset type="artwork">
  <file_name>

<asset type="artwork">
  <file_name type="background_image">

<asset type="artwork">
  <file_name type="boxcover">

<asset type="artwork">
  <file_name type="poster">
```

> **Confirmed:** the unlabeled/default `file_name` (no `type` attribute) is understood to represent **key art** — this is expected behavior, not a gap. Explicit `type` values are only needed for `background_image`, `boxcover`, and `poster`.

### locale

Identifies the language of the `data_file`. At minimum, the value **must** conform to a [supported language code](#language-codes); include a region code as a best practice. Applicable to `data_file` roles `source`, `captions`, `audio`, `subtitles`, and asset type `artwork`.

| XML XPath                                      | Accepted Values                            | Required |
| ---------------------------------------------- | ------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/locale` | [Supported language code](#language-codes) | Required |

```xml
<locale name="en"/>
```

### file_name

Filename of the asset indicated by the enclosing `data_file`'s `role` or `type` attribute. All `file_name` values are **case-sensitive** and **must** include the proper file extension.

| Asset Type                                                                        | Required                          |
| --------------------------------------------------------------------------------- | --------------------------------- |
| Video / captions / audio / subtitles / forced subtitles (source assets generally) | Required for each asset delivered |
| Artwork — default/unlabeled                                                       | Required                          |
| Artwork — `type="background_image"`                                               | Preferred                         |
| Artwork — `type="boxcover"`                                                       | Preferred                         |
| Artwork — `type="poster"`                                                         | Preferred                         |

```xml
<file_name>VideoFilename.mxf</file_name>
```

### audio

[Audio layout descriptor](#audio-channel-layout-hints) for the delivered video file.

| XML XPath                                     | Accepted Values                                                          | Required |
| --------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/audio` | `stereoOnly`, `surroundOnly`, `stereoPlusSurround`, `surroundPlusStereo` | Optional |

```xml
<audio>stereoOnly</audio>
```
