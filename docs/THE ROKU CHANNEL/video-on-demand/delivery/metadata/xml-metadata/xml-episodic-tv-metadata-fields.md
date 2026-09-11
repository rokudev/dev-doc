---
title: XML - episodic TV metadata fields
excerpt: Field-by-field XML reference for TV series/season/episode delivery.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field XML reference for the **TV** content type, following Roku's `series > season > episode` hierarchy (see [Content Type Definitions](#content-type-definitions)). For the schema download and annotated sample, see the [Roku XML Metadata Overview](#roku-xml-metadata-overview).

**A note on structure:** because TV metadata is delivered as a nested hierarchy, several field names repeat at different levels — `title`, `short_synopsis`, `long_synopsis`, `cast`, `crew`, and `localizations` all exist once for the **episode** and again for the **series**. Each is labeled below with its level (e.g., "Episode Title" vs. "Series Title") to keep them distinct.

Fields are grouped into: **Package Info**, **Episode Content Descriptors**, **Ad Breaks & Cue Points**, **Episode Cast & Crew**, **Episode Localizations**, **Series Block**, **Season Block**, **Play Options / Availability**, and **Assets**.

***

## Package Info

### package

Defines the package version type.

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/@version` | `tv1.0`         | Required |

```xml
<package version="tv1.0">
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

Primary language of the package metadata. At minimum, must conform to a [supported language code](#language-codes). Best practice: include a region code (e.g., `es-MX` vs. `es-ES`).

| XML XPath           | Accepted Values                        | Required |
| ------------------- | -------------------------------------- | -------- |
| `/package/language` | [Valid language code](#language-codes) | Required |

```xml
<language>en</language>
```

### type

Defines the content type of the package.

| XML XPath             | Accepted Values | Required |
| --------------------- | --------------- | -------- |
| `/package/video/type` | `tv`            | Required |

```xml
<type>tv</type>
```

### asset_id (Episode)

Immutable, unique identifier for an **episode**. IDs are generated and supplied by the partner. Should match the ID provided in the Avails document, to aid tracking across Roku's pipeline. **50-character limit.**

| XML XPath                 | Accepted Values                                                                | Required |
| ------------------------- | ------------------------------------------------------------------------------ | -------- |
| `/package/video/asset_id` | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

```xml
<asset_id>episodeAssetIdHere</asset_id>
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

## Episode Content Descriptors

### Episode Title

Title of the episode. Include **only** the name as it should appear on platform — no non-title parentheticals (e.g., `(Classic)`, `(1987)`, `(Season 1)`, `(HD)`).

| XML XPath              | Example       | Required |
| ---------------------- | ------------- | -------- |
| `/package/video/title` | Episode Title | Required |

```xml
<title><![CDATA[Episode Title. Required.]]></title>
```

### episodeNumber

Numerical position of the episode within its season — determines viewing order on platform. Values **must** reflect original broadcast/exhibition order; production numbers **must not** be used. Integers only.

| XML XPath                      | Accepted Values | Required |
| ------------------------------ | --------------- | -------- |
| `/package/video/episodeNumber` | Integers only   | Required |

```xml
<episodeNumber>2</episodeNumber>
```

### Episode short_synopsis

A short synopsis of the episode. CDATA supported. **250-character limit.**

| XML XPath                       | Accepted Values        | Required |
| ------------------------------- | ---------------------- | -------- |
| `/package/video/short_synopsis` | 250-character synopsis | Required |

```xml
<short_synopsis><![CDATA[Short summary of episode. 250 characters maximum. Required]]></short_synopsis>
```

### Episode long_synopsis

A long synopsis of the episode. CDATA supported. **500-character limit.**

| XML XPath                      | Accepted Values        | Required |
| ------------------------------ | ---------------------- | -------- |
| `/package/video/long_synopsis` | 500-character synopsis | Optional |

```xml
<long_synopsis><![CDATA[Long summary of episode. 500 characters maximum. Optional.]]></long_synopsis>
```

### closedCaptions

Indicates whether the episode contains closed captions. **Required for all content intended for Roku Channel in the US.**

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

### release_date (Episode)

Original date the episode was first made available in any presentation. Must include an accurate **year of release** at minimum.

| XML XPath                     | Accepted Values               | Required |
| ----------------------------- | ----------------------------- | -------- |
| `/package/video/release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### runtime

Total runtime of the episode, in **whole minutes**.

| XML XPath                | Accepted Values | Required |
| ------------------------ | --------------- | -------- |
| `/package/video/runtime` | Integers only   | Required |

```xml
<runtime>45</runtime>
```

### rating (Episode)

Parental/content advisory rating from a rating source. A valid TV rating from the rating authority (`ratingSystem`) of the territory where the content will be available **must** be provided for each episode. If not rated by that territory's official authority, use a valid `USA_PR` rating instead, per [tvguidelines.org](http://tvguidelines.org/) guidelines (there is no official ratings body for `USA_PR`).

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

### tag (Episode)

Freeform categorization field beyond Genre. Used by Roku's editorial team and recommendations engine to surface content. No limit on count; no defined tag set. **Case-sensitive** — deliver consistently.

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

Used to determine [Ad Breaks for Ad Supported Content](#ad-breaks). Values **must** be accurate to the millisecond. If commercial blacks are present, provide the timecode at the **midpoint**. Not required for SVOD, but frame-accurate data can be ingested if available.

| XML XPath                         | Accepted Values | Required                   |
| --------------------------------- | --------------- | -------------------------- |
| `/package/video/adBreaks/adBreak` | `HH:MM:SS.sss`  | Preferred for AVOD content |

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

Identifies in/out points of opening credits, recaps, end credits, and behind-the-scenes footage. `cuePoint` tags **must** include the `type` attribute. Values **must** be accurate to the millisecond.

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

Defines the type of a given `cuePoint`. Attribute name **must** be `type`. **For every type below: if providing that cuePoint,&#x20;**`start_time`**&#x20;and&#x20;**`end_time`**&#x20;are both required.**

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

## Episode Cast & Crew

### Episode cast display_name

Name of a cast member for the episode. CDATA supported.

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

### Episode crew display_name

Name of a crew member for the episode. CDATA supported.

> **Cross-format note:** Director is currently the **only** `crew_member` role supported for **Excel** ingest (this XML reference supports the full crew role list; the limitation is specific to the Excel delivery format).

| XML XPath                                      | Accepted Values    | Required                              |
| ---------------------------------------------- | ------------------ | ------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Firstname Lastname | Required if providing a `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### Episode crew role

Role of the crew member named in `display_name`. Every crew member **must** also include their role. See the [enumerated crew roles list](#crew-roles). **Roles are case-sensitive.**

> **Cross-format note:** as above, Director is currently the only `crew_member` role supported for Excel ingest.

| XML XPath                                    | Accepted Values                    | Required                              |
| -------------------------------------------- | ---------------------------------- | ------------------------------------- |
| `/package/video/crew/crew_member/roles/role` | See [enumerated list](#crew-roles) | Required if providing a `crew_member` |

```xml
<role>Director</role>
```

***

## Episode Localizations

### Episode localizations

Begins the block providing localized episode metadata — language, translated title, `short_synopsis`, and `long_synopsis`.

| XML XPath                      | Accepted Values | Required |
| ------------------------------ | --------------- | -------- |
| `/package/video/localizations` | —               | Required |

```xml
<localizations>
```

### Episode localization name attribute

Defines the language of the localized fields within an episode `localization` block. Attribute name **must** be `name`; value must, at minimum, conform to a [supported language code](#language-codes) (region code recommended, e.g. `es-MX` vs. `es-ES`).

| XML XPath                                   | Accepted Values                                                 | Required |
| ------------------------------------------- | --------------------------------------------------------------- | -------- |
| `/package/video/localizations/localization` | Valid [language code](#language-codes); may include region code | Required |

```xml
<localization name="es">
```

### Localized Episode Title

Localized episode title. Same non-title-parenthetical restrictions as [Episode Title](#episode-title) above. **Must be accompanied by** localized `short_synopsis` and `long_synopsis`.

| XML XPath                                         | Accepted Values         | Required |
| ------------------------------------------------- | ----------------------- | -------- |
| `/package/video/localizations/localization/title` | Localized Episode Title | Required |

```xml
<title><![CDATA[Localized Episode Title. Required.]]></title>
```

### Localized Episode short_synopsis

CDATA supported. **250-character limit.** Must be accompanied by localized `title` and `long_synopsis`.

| XML XPath                                                  | Accepted Values | Required |
| ---------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/short_synopsis` | 250 characters  | Required |

```xml
<short_synopsis><![CDATA[Localized Short summary of episode. 250 characters maximum. Required]]></short_synopsis>
```

### Localized Episode long_synopsis

CDATA supported. **500-character limit.** Must be accompanied by localized `title` and `short_synopsis`.

| XML XPath                                                 | Accepted Values | Required |
| --------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/long_synopsis` | 500 characters  | Optional |

```xml
<long_synopsis><![CDATA[Localized Long summary of episode. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Series Block

### series

Begins the block referencing metadata for the show to which the episode belongs. Roku follows the US definition of a series. Episodes nest as `series > season > episode`.

| XML XPath               | Example | Required |
| ----------------------- | ------- | -------- |
| `/package/video/series` | —       | Required |

```xml
<series>
```

### series_id

Immutable, unique identifier for a series. Generated/supplied by the partner; should match the Avails document ID. **50-character limit.**

| XML XPath                         | Accepted Values                                                                | Required |
| --------------------------------- | ------------------------------------------------------------------------------ | -------- |
| `/package/video/series/series_id` | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

```xml
<series_id>seriesIdHere</series_id>
```

### Series Title

Title of the series. Include **only** the name as it should appear on platform — no non-title parentheticals.

| XML XPath                     | Example      | Required |
| ----------------------------- | ------------ | -------- |
| `/package/video/series/title` | Series Title | Required |

```xml
<title><![CDATA[Series Title. Required.]]></title>
```

### Series short_synopsis

CDATA supported. **250-character limit.**

| XML XPath                              | Accepted Values        | Required |
| -------------------------------------- | ---------------------- | -------- |
| `/package/video/series/short_synopsis` | 250-character synopsis | Required |

```xml
<short_synopsis><![CDATA[Short summary of series. 250 characters maximum. Required]]></short_synopsis>
```

### Series long_synopsis

CDATA supported. **500-character limit.**

| XML XPath                             | Accepted Values        | Required |
| ------------------------------------- | ---------------------- | -------- |
| `/package/video/series/long_synopsis` | 500-character synopsis | Optional |

```xml
<long_synopsis><![CDATA[Long summary of series. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

Original production language of the series. At minimum, must conform to a [supported language code](#language-codes) (region code recommended).

| XML XPath                                        | Accepted Values                                                 | Required |
| ------------------------------------------------ | --------------------------------------------------------------- | -------- |
| `/package/video/series/original_spoken_language` | Valid [language code](#language-codes); may include region code | Required |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

The primary country where the **series** was produced, and where the main creators, crew, and producers are established. Must conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) code.

> _Corrected from the source, which referred to "the film" here — this field applies to the series, consistent with the rest of this block._

| XML XPath                                 | Accepted Values                                                                                          | Required  |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| `/package/video/series/country_of_origin` | Valid 2-character country code per [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

```xml
<country_of_origin>US</country_of_origin>
```

### release_date (Series)

Original date the series was first made available — typically the same date as the first episode. Must include an accurate **year of release** at minimum.

| XML XPath                            | Accepted Values               | Required |
| ------------------------------------ | ----------------------------- | -------- |
| `/package/video/series/release_date` | ISO 8601 format: `YYYY-MM-DD` | Required |

```xml
<release_date>YYYY-MM-DD</release_date>
```

### genre

Genre classification. Each episode **must** be delivered with **at least one** supported genre via its series record. See the [enumerated genre list](#genres).

| XML XPath                            | Accepted Values                                                   | Required |
| ------------------------------------ | ----------------------------------------------------------------- | -------- |
| `/package/video/series/genres/genre` | See [enumerated list](#genres). No more than 10 genres per title. | Required |

```xml
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

### tag (Series)

Freeform categorization field beyond Genre, same rules as [Episode tag](#tag-episode) above — case-sensitive, no limit, no defined set.

| XML XPath                        | Accepted Values                | Required                             |
| -------------------------------- | ------------------------------ | ------------------------------------ |
| `/package/video/series/tags/tag` | Any string under 50 characters | Optional, but **highly recommended** |

```xml
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

### Series cast display_name

Name of a cast member of the series. CDATA supported.

| XML XPath                                             | Accepted Values    | Required |
| ----------------------------------------------------- | ------------------ | -------- |
| `/package/video/series/cast/cast_member/display_name` | Firstname Lastname | Optional |

```xml
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

### Series crew display_name

Name of a crew member of the series. CDATA supported.

> **Cross-format note:** Director is currently the only `crew_member` role supported for Excel ingest.

| XML XPath                                             | Accepted Values    | Required                              |
| ----------------------------------------------------- | ------------------ | ------------------------------------- |
| `/package/video/series/crew/crew_member/display_name` | Firstname Lastname | Required if providing a `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### Series crew role

Role of the crew member named in `display_name`. See the [enumerated crew roles list](#crew-roles). **Case-sensitive.**

> **Cross-format note:** as above, Director is currently the only `crew_member` role supported for Excel ingest.

| XML XPath                                           | Accepted Values                    | Required                              |
| --------------------------------------------------- | ---------------------------------- | ------------------------------------- |
| `/package/video/series/crew/crew_member/roles/role` | See [enumerated list](#crew-roles) | Required if providing a `crew_member` |

```xml
<role>Director</role>
```

### Series localizations

Begins the block providing localized series metadata for multi-language packages.

| XML XPath                             | Accepted Values | Required |
| ------------------------------------- | --------------- | -------- |
| `/package/video/series/localizations` | —               | Required |

```xml
<localizations>
```

### Series localization name attribute

Defines the language of localized fields within a series `localization` block. Attribute name **must** be `name`; value must, at minimum, conform to a [supported language code](#language-codes) (region code recommended).

| XML XPath                                          | Accepted Values                                                 | Required |
| -------------------------------------------------- | --------------------------------------------------------------- | -------- |
| `/package/video/series/localizations/localization` | Valid [language code](#language-codes); may include region code | Required |

```xml
<localization name="es">
```

### Localized Series Title

Localized series title. Same non-title-parenthetical restrictions as [Series Title](#series-title) above. **Must be accompanied by** localized `short_synopsis` and `long_synopsis`.

| XML XPath                                                | Accepted Values        | Required |
| -------------------------------------------------------- | ---------------------- | -------- |
| `/package/video/series/localizations/localization/title` | Localized Series Title | Required |

```xml
<title><![CDATA[Localized Series Title. Required.]]></title>
```

### Localized Series short_synopsis

CDATA supported. **250-character limit.** Must be accompanied by localized `title` and `long_synopsis`.

| XML XPath                                                         | Accepted Values | Required |
| ----------------------------------------------------------------- | --------------- | -------- |
| `/package/video/series/localizations/localization/short_synopsis` | 250 characters  | Required |

```xml
<short_synopsis><![CDATA[Localized Short summary of series. 250 characters maximum. Required]]></short_synopsis>
```

### Localized Series long_synopsis

CDATA supported. **500-character limit.** Must be accompanied by localized `title` and `short_synopsis`.

| XML XPath                                                        | Accepted Values | Required |
| ---------------------------------------------------------------- | --------------- | -------- |
| `/package/video/series/localizations/localization/long_synopsis` | 500 characters  | Optional |

```xml
<long_synopsis><![CDATA[Localized Long summary of series. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Season Block

### season

Begins the block referencing metadata for the season of the series to which the episode belongs. Episodes nest as `series > season > episode`.

| XML XPath               | Example | Required |
| ----------------------- | ------- | -------- |
| `/package/video/season` | —       | Required |

```xml
<season>
```

### season_id

Immutable, unique identifier for a season. Generated/supplied by the partner; should match the Avails document ID. **50-character limit.**

| XML XPath                         | Accepted Values                                                                | Required |
| --------------------------------- | ------------------------------------------------------------------------------ | -------- |
| `/package/video/season/season_id` | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

```xml
<season_id>seasonIdHere</season_id>
```

### seasonNumber

Numerical position of the season within the series — determines viewing order of underlying episodes. Values **must** reflect original broadcast/exhibition order. Integers only; **must not be 0.**

| XML XPath                            | Accepted Values              | Required |
| ------------------------------------ | ---------------------------- | -------- |
| `/package/video/season/seasonNumber` | Integers greater than 0 only | Required |

```xml
<seasonNumber>2</seasonNumber>
```

***

## Play Options / Availability

### playOptions

Begins the block providing availability information: country/territory availability, monetization type, and availability start/end dates.

| XML XPath                    | Accepted Values | Required |
| ---------------------------- | --------------- | -------- |
| `/package/video/playOptions` | —               | Optional |

```xml
<playOptions>
```

### country

Country code of the territory where the content is available. Multiple `country` nodes allowed if `vodType`, `licensePeriodStart`, and `licensePeriodEnd` are identical across them.

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

Monetization type of the episode. Multiple `vodType` nodes allowed if `country`, `licensePeriodStart`, and `licensePeriodEnd` are identical across them.

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

Start date of content availability. **One** per `playOption`. Must be chronologically **before** `licensePeriodEnd`; the two **must not** be identical.

| XML XPath                                                  | Accepted Values                        | Required |
| ---------------------------------------------------------- | -------------------------------------- | -------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | ISO 8601 format: `YYYY-MM-DDTHH:MM:SS` | Optional |

```xml
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

### licensePeriodEnd

End date of content availability. **One** per `playOption`. Must be chronologically **after** `licensePeriodStart`; the two **must not** be identical.

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

The `assets` block references every file delivered with the package (video, captions, audio, subtitles, artwork), described via `asset`/`data_file` pairs with attributes identifying type and role.

### assets

Begins the asset block.

| XML XPath               | Accepted Values      | Required |
| ----------------------- | -------------------- | -------- |
| `/package/video/assets` | `media_type="video"` | Required |

```xml
<assets media_type="video">
```

### Full Source (Video)

Describes the source video file. `asset type="full"`; `data_file role="source"`. `<locale>` and `<file_name>` also required.

| XML XPath                               | Accepted Values                                | Required |
| --------------------------------------- | ---------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="source"` | Required |

```xml
<asset type="full">
  <data_file role="source">
```

### Full Captions

Describes closed captions for the source video file. `asset type="full"`; `data_file role="captions"`. `<locale>` and `<file_name>` also required.

| XML XPath                               | Accepted Values                                  | Required       |
| --------------------------------------- | ------------------------------------------------ | -------------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="captions"` | Required in US |

```xml
<asset type="full">
  <data_file role="captions">
```

### Full Audio

Describes sidecar audio for the source video file — either a full audio dub for language translation, or a descriptive audio track for accessibility. `asset type="full"`; `data_file role="audio"` (translation dub) or `role="audio description"` (accessibility). `<locale>` and `<file_name>` also required.

**Sidecar audio may be required** when localized assets are needed (source audio not native to the distribution territory) or to comply with FCC regulations.

| XML XPath                               | Accepted Values                                                             | Required                                          |
| --------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="audio"` or `role="audio description"` | Optional\* — audio description strongly preferred |

```xml
<asset type="full">
  <data_file role="audio">
```

### Full Subtitles

Describes sidecar subtitles for the source video file. `asset type="full"`; `data_file role="subtitles"`. `<locale>` and `<file_name>` also required.

**Sidecar subtitles may be required** when localized assets are needed (source audio not native to the distribution territory).

| XML XPath                               | Accepted Values                                   | Required   |
| --------------------------------------- | ------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="subtitles"` | Optional\* |

```xml
<asset type="full">
  <data_file role="subtitles">
```

### Forced Subtitles

Describes sidecar forced narrative subtitles for the source video file. `asset type="full"`; `data_file role="forced subtitles"`. `<locale>` and `<file_name>` also required.

| XML XPath                               | Accepted Values                                          | Required   |
| --------------------------------------- | -------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | `asset type="full"`; `data_file role="forced subtitles"` | Optional\* |

```xml
<asset type="full">
  <data_file role="forced subtitles">
```

### Artwork

Describes artwork file(s) at either the episode or series level. `asset type="artwork"`. `<locale>` and `<file_name>` also required. See [Artwork](#artwork) for full image delivery specifications.

**Confirmed:** the distinguishing attribute is `role` (`role="episode"` / `role="series"`), not `type`. The source document's prose describing this as a `type` attribute was inaccurate and has been corrected below.

| XML XPath                               | Accepted Values                                    | Required  |
| --------------------------------------- | -------------------------------------------------- | --------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"`; `data_file role="episode"` | Preferred |
| `/package/video/assets/asset/data_file` | `asset type="artwork"`; `data_file role="series"`  | Preferred |

```xml
<asset type="artwork">
  <data_file role="episode">
```

```xml
<asset type="artwork">
  <data_file role="series">
```

### locale

Identifies the language of the `data_file`. At minimum, must conform to a [supported language code](#language-codes) (region code recommended). Applicable to `data_file` roles `source`, `captions`, `audio`, `subtitles`, and asset type `artwork`.

| XML XPath                                      | Accepted Values                            | Required |
| ---------------------------------------------- | ------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/locale` | [Supported language code](#language-codes) | Required |

```xml
<locale name="en"/>
```

### file_name

Filename of the asset indicated by the enclosing `data_file`'s `role` or `type` attribute. All values are **case-sensitive** and **must** include the proper file extension.

For artwork files specifically, the `file_name` tag's `type` attribute can be **omitted** (indicating **key art**), or set to `type="background_image"`, `type="boxcover"`, or `type="poster"`.

| Asset Type                                                                        | Required                          |
| --------------------------------------------------------------------------------- | --------------------------------- |
| Video / captions / audio / subtitles / forced subtitles (source assets generally) | Required for each asset delivered |
| Artwork — omitted attribute (key art)                                             | Required                          |
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