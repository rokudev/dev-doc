---
title: XML - shortForm clip metadata fields
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page is the field-by-field XML reference for the **Clip** content type — short-form, stand-alone or ancillary titles (see [Content Type Definitions](#content-type-definitions)). For the schema download and annotated sample, see the [Roku XML Metadata Overview](#roku-xml-metadata-overview).

Clips support two optional feature sets not present in Film/TV: `subType`**/**`parentInfo` (identifying a clip as ancillary to a parent program) and **sports metadata** (`sportType`, `sportLeague`, `teams`).

Fields are grouped into: **Package Info**, **Content Descriptors**, **Cast & Crew**, **Localizations**, **Play Options / Availability**, **Assets**, **Parent Info**, and **Sports Metadata**.

***

## Package Info

### package

Defines the package version type.

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/@version` | `clip1.0`       | Required |

```xml
<package version="clip1.0">
```

### provider

Name of the content owner/studio/network.

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/provider` | Roku Originals  | Required |

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
| `/package/video/type` | `clip`          | Required |

```xml
<type>clip</type>
```

### subType

Defines the content sub-type of the package. Roku does **not** currently support native parent/child connections — ancillary or related content can be identified using one of the sub-types below, but **there is no system-level link created between the parent and child asset**. (See [Parent Info](#parent-info) below for how descriptive, non-linking context about a parent program can still be provided.)

| XML XPath                | Accepted Values                                                                                | Required |
| ------------------------ | ---------------------------------------------------------------------------------------------- | -------- |
| `/package/video/subType` | `trailer`, `highlight`, `making_of`, `behind_scenes`, `interview`, `related`, `recap`, `extra` | Optional |

```xml
<subType>trailer</subType>
```

### asset_id

Immutable, unique identifier for a shortForm clip. Generated/supplied by the partner; should match the Avails document ID, to aid tracking across Roku's pipeline. **50-character limit.**

| XML XPath                 | Accepted Values                                                                | Required |
| ------------------------- | ------------------------------------------------------------------------------ | -------- |
| `/package/video/asset_id` | Alphanumeric characters, hyphens, and underscores only. 50 characters maximum. | Required |

```xml
<asset_id>clipAssetIdHere</asset_id>
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

Title of the shortForm clip. Include **only** the name as it should appear on platform — no non-title parentheticals (e.g., `(Classic)`, `(1987)`, `(Season 1)`, `(HD)`).

| XML XPath              | Example    | Required |
| ---------------------- | ---------- | -------- |
| `/package/video/title` | Clip Title | Required |

```xml
<title><![CDATA[Clip Title. Required.]]></title>
```

### short_synopsis

A short synopsis of the content. CDATA supported. **250-character limit.**

| XML XPath                       | Accepted Values        | Required |
| ------------------------------- | ---------------------- | -------- |
| `/package/video/short_synopsis` | 250-character synopsis | Required |

```xml
<short_synopsis><![CDATA[Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

### long_synopsis

A long synopsis of the content. CDATA supported. **500-character limit.**

| XML XPath                      | Accepted Values        | Required |
| ------------------------------ | ---------------------- | -------- |
| `/package/video/long_synopsis` | 500-character synopsis | Optional |

```xml
<long_synopsis><![CDATA[Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

### original_spoken_language

Original production language of the title. At minimum, must conform to a [supported language code](#language-codes) (region code recommended).

| XML XPath                                 | Accepted Values                                                 | Required |
| ----------------------------------------- | --------------------------------------------------------------- | -------- |
| `/package/video/original_spoken_language` | Valid [language code](#language-codes); may include region code | Required |

```xml
<original_spoken_language>en</original_spoken_language>
```

### country_of_origin

The primary country where the clip was produced, and where the main creators, crew, and producers are established. Must conform to a supported [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) code.

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
<runtime>3</runtime>
```

### genre

Genre classification of the content. Each shortForm clip **must** be delivered with **at least one** supported genre. See the [enumerated genre list](#genres).

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

Parental/content advisory rating from a rating source. A valid movie or TV rating from the rating authority (`ratingSystem`) of the territory where the content will be available **must** be provided for each shortForm clip. If not rated by that territory's official authority, use a valid `USA_PR` rating instead, per [tvguidelines.org](http://tvguidelines.org/) guidelines (there is no official ratings body for `USA_PR`).

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

> **Cross-format note:** Director is currently the **only** `crew_member` role supported for **Excel** ingest (this XML reference supports the full crew role list; the limitation is specific to the Excel delivery format).

| XML XPath                                      | Accepted Values    | Required                              |
| ---------------------------------------------- | ------------------ | ------------------------------------- |
| `/package/video/crew/crew_member/display_name` | Firstname Lastname | Required if providing a `crew_member` |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

### role

Role of the crew member named in `display_name`. Every crew member **must** also include their role. See the [enumerated crew roles list](#crew-roles). **Roles are case-sensitive.**

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

Defines the language of the localized fields within a `localization` block. Attribute name **must** be `name`; value must, at minimum, conform to a [supported language code](#language-codes) (region code recommended).

| XML XPath                                   | Accepted Values                                                 | Required |
| ------------------------------------------- | --------------------------------------------------------------- | -------- |
| `/package/video/localizations/localization` | Valid [language code](#language-codes); may include region code | Required |

```xml
<localization name="es">
```

### localized title

Localized title of the shortForm clip. Same non-title-parenthetical restrictions as [title](#title) above.

| XML XPath                                         | Example              | Required |
| ------------------------------------------------- | -------------------- | -------- |
| `/package/video/localizations/localization/title` | Localized Clip Title | Required |

```xml
<title><![CDATA[Localized Clip Title. Required.]]></title>
```

### localized short_synopsis

CDATA supported. **250-character limit.**

| XML XPath                                                  | Accepted Values | Required |
| ---------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/short_synopsis` | 250 characters  | Required |

```xml
<short_synopsis><![CDATA[Localized Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

### localized long_synopsis

CDATA supported. **500-character limit.**

| XML XPath                                                 | Accepted Values | Required |
| --------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/long_synopsis` | 500 characters  | Optional |

```xml
<long_synopsis><![CDATA[Localized Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

***

## Play Options / Availability

### playOptions

Begins the block providing availability information: country/territory availability, monetization type, and availability start/end dates.

| XML XPath                    | Accepted Values | Required |
| ---------------------------- | --------------- | -------- |
| `/package/video/playOptions` | —               | Required |

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

Monetization type of the shortForm clip. Multiple `vodType` nodes allowed if `country`, `licensePeriodStart`, and `licensePeriodEnd` are identical across them.

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

The `assets` block references every file delivered as part of the package (video, captions, audio, subtitles, artwork), each described by an `asset`/`data_file` pair.

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

Describes the artwork file(s). `asset type="artwork"`. `<locale>` and `<file_name>` also required. See [Artwork](#artwork) for full image delivery specifications.

> **Note:** unlike Film and TV, Clip artwork does not break out into `background_image`/`boxcover`/`poster` variants here — this is consistent with the [Artwork Specification](#), where Clips require only a single 16:9 Key Art image type.

| XML XPath                               | Accepted Values        | Required |
| --------------------------------------- | ---------------------- | -------- |
| `/package/video/assets/asset/data_file` | `asset type="artwork"` | Required |

```xml
<asset type="artwork">
  <data_file>
```

### locale

Identifies the language of the `data_file`. At minimum, must conform to a [supported language code](#language-codes) (region code recommended). Applicable to `data_file` roles `source`, `captions`, `audio`, and `subtitles`, and asset type `artwork`.

| XML XPath                                      | Accepted Values                            | Required |
| ---------------------------------------------- | ------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/locale` | [Supported language code](#language-codes) | Required |

```xml
<locale name="en"/>
```

### file_name

Filename of the asset indicated by the enclosing `data_file`'s `role` or `type` attribute. All values are **case-sensitive** and **must** include the proper file extension.

| XML XPath                                         | Accepted Values                                        | Required                          |
| ------------------------------------------------- | ------------------------------------------------------ | --------------------------------- |
| `/package/video/assets/asset/data_file/file_name` | See guidelines above for asset delivery specifications | Required for each asset delivered |

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

***

## Parent Info

`parentInfo` provides **descriptive, contextual** metadata about the program a clip is derived from or related to — used in combination with a valid [`subType`](#subtype) value above. **This is descriptive metadata only; it does not create a navigable link or on-platform relationship** between the clip and its parent (consistent with the `subType` note above that Roku does not natively support parent/child connections).

### parentInfo

Begins the block providing parent information for the package.

| XML XPath                   | Accepted Values | Required |
| --------------------------- | --------------- | -------- |
| `/package/video/parentInfo` | —               | Optional |

```xml
<parentInfo>
```

### parent contentType

Content type of the parent the clip is derived from or describes.

| XML XPath                               | Accepted Values              | Required |
| --------------------------------------- | ---------------------------- | -------- |
| `/package/video/parentInfo/contentType` | `episode`, `movie`, `series` | Optional |

```xml
<parentInfo>
  <contentType>episode</contentType>
</parentInfo>
```

### parent title

Title of the parent program, if the parent is a movie or episode.

| XML XPath                         | Accepted Values                 | Required |
| --------------------------------- | ------------------------------- | -------- |
| `/package/video/parentInfo/title` | Title of Parent Movie or Series | Optional |

```xml
<parentInfo>
  <title>Title of Parent Movie or Series</title>
</parentInfo>
```

### parent runtime

Runtime of the parent program, if the parent is a movie or episode.

| XML XPath                           | Accepted Values | Required |
| ----------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/runtime` | Integer         | Optional |

```xml
<parentInfo>
  <runtime>45</runtime>
</parentInfo>
```

### parent releaseDate

Release date of the parent movie, episode, or series.

| XML XPath                               | Accepted Values               | Required |
| --------------------------------------- | ----------------------------- | -------- |
| `/package/video/parentInfo/releaseDate` | ISO 8601 format: `YYYY-MM-DD` | Optional |

```xml
<parentInfo>
  <releaseDate>YYYY-MM-DD</releaseDate>
</parentInfo>
```

### parent tmsId

TMS ID of the parent movie, episode, or series.

| XML XPath                         | Accepted Values | Required |
| --------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/tmsId` | Valid TMS ID    | Optional |

```xml
<parentInfo>
  <tmsId>TMSID</tmsId>
</parentInfo>
```

### parent seriesTitle

Series title of the parent program, if the parent is an episode.

| XML XPath                               | Accepted Values     | Required |
| --------------------------------------- | ------------------- | -------- |
| `/package/video/parentInfo/seriesTitle` | Parent Series Title | Optional |

```xml
<parentInfo>
  <seriesTitle>Parent Series Title</seriesTitle>
</parentInfo>
```

### parent seasonNumber

Season number of the parent program, if the parent is an episode.

| XML XPath                                | Accepted Values        | Required |
| ---------------------------------------- | ---------------------- | -------- |
| `/package/video/parentInfo/seasonNumber` | Integer greater than 0 | Optional |

```xml
<parentInfo>
  <seasonNumber>2</seasonNumber>
</parentInfo>
```

### parent episodeNumber

Episode number of the parent program, if the parent is an episode.

| XML XPath                                 | Accepted Values | Required |
| ----------------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/episodeNumber` | Integer         | Optional |

```xml
<parentInfo>
  <episodeNumber>14</episodeNumber>
</parentInfo>
```

***

## Sports Metadata

The following fields are **required specifically for sports clips**.

### sportType

Name of the sport featured in the clip/highlight.

| XML XPath                  | Accepted Values   | Required                  |
| -------------------------- | ----------------- | ------------------------- |
| `/package/video/sportType` | Name of the sport | Required for sports clips |

```xml
<sportType>Baseball</sportType>
```

### sportLeague

Name of the sport league featured in the clip/highlight.

| XML XPath                    | Accepted Values          | Required                  |
| ---------------------------- | ------------------------ | ------------------------- |
| `/package/video/sportLeague` | Name of the sport league | Required for sports clips |

```xml
<sportLeague>MLB</sportLeague>
```

### teams

Teams featured in the sport clip/highlight. Home and away teams are defined via the `location` attribute.

> **Note:** at this time, Roku only supports **team-based** participant metadata. Individual/solo sports (e.g., tennis, golf) will be supported at a later date.

| XML XPath                   | Accepted Values                                | Required                  |
| --------------------------- | ---------------------------------------------- | ------------------------- |
| `/package/video/teams/team` | `team location="away"`; `team location="home"` | Required for sports clips |

```xml
<teams>
	<team location="away">Chicago Cubs</team>
	<team location="home">St. Louis Cardinals</team>
</teams>
```
