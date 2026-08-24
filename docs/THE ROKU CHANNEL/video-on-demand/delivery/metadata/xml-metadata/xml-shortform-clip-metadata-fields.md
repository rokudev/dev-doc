---
title: XML - shortForm clip metadata fields
deprecated: false
hidden: true
metadata:
  robots: index
---
## package

Defines the package version type

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/@version` | clip1.0         | Required |

```xml
<package version="clip1.0">
```

## provider

Name of content owner/studio/network

| XML XPath           | Accepted Values        | Required |
| ------------------- | ---------------------- | -------- |
| `/package/provider` | Example:Roku Originals | Required |

```xml
<provider>Roku Originals</provider>
```

## language

Primary language of the package metadata. At a minimum, the value must conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath           | Accepted Values                        | Required |
| ------------------- | -------------------------------------- | -------- |
| `/package/language` | [Valid language code](#language-codes) | Required |

```xml
<language>en</language>
```

## type

Defines the content type of the package

| XML XPath             | Accepted Values | Required |
| --------------------- | --------------- | -------- |
| `/package/video/type` | clip            | Required |

```xml
<type>clip</type>
```

## subType

Defines the content subType of the package. Roku does not currently support parent/child connections natively. Ancillary or related content can be delivered and identified using one of the below subTypes. _There is no link between the parent and child asset_

<Table>
  <thead>
    <tr>
      <th>
        XML XPath
      </th>

      <th>
        Accepted Values
      </th>

      <th>
        Required
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `/package/video/subType`
      </td>

      <td>
        - trailer<br />- highlight<br />- making_of<br />- behind_scenes<br />- interview<br />- related<br />- recap<br />- extra
      </td>

      <td>
        Optional
      </td>
    </tr>
  </tbody>
</Table>

```xml
<subType>trailer</subType>
```

## asset_id

Immutable, unique identifier for a shortForm clip. IDs are to be generated and supplied by the Partner for content that is delivered to Roku. The ID in the ingest metadata should match the ID provided in the avail document. This will aid in tracking the content throughout Roku’s pipeline from Avails submission through publication on Roku Channel. 50 character limit

| XML XPath                 | Accepted Values                                                               | Required |
| ------------------------- | ----------------------------------------------------------------------------- | -------- |
| `/package/video/asset_id` | alphanumeric characters, hyphens, and underscores only. 50 characters maximum | Required |

```xml
<asset_id>clipAssetIdHere</asset_id>
```

## eidr

EIDR ID if one exists

| XML XPath             | Accepted Values   | Required |
| --------------------- | ----------------- | -------- |
| `/package/video/eidr` | Any valid EIDR ID | Optional |

```xml
<eidr></eidr>
```

## tmsId

Gracenote ID if one exists

| XML XPath              | Accepted Values  | Required |
| ---------------------- | ---------------- | -------- |
| `/package/video/tmsId` | Any valid TMS ID | Optional |

```xml
<tmsId></tmsId>
```

## title

Title of shortForm clip. Include only the name of the content as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, season, or video format, for example: (Classic), (1987), (Season 1), or (HD)

| XML XPath              | Example    | Required |
| ---------------------- | ---------- | -------- |
| `/package/video/title` | Clip Title | Required |

```xml
<title><![CDATA[Clip Title. Required.]]></title>
```

## short_synopsis

A short synopsis of the content. CDATA section supported. 250-character limit.

| XML XPath                       | Accepted Values        | Required |
| ------------------------------- | ---------------------- | -------- |
| `/package/video/short_synopsis` | 250-character synopsis | Required |

```xml
<short_synopsis><![CDATA[Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

## long_synopsis

A long synopsis of the content. CDATA section supported. 500-character limit.

| XML XPath                      | Accepted Values        | Required |
| ------------------------------ | ---------------------- | -------- |
| `/package/video/long_synopsis` | 500-character synopsis | Optional |

```xml
<long_synopsis><![CDATA[Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

## original_spoken_language

Defines the original production language of the title being delivered. At a minimum, the value must conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath                                 | Accepted Values                                                                                               | Required |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/original_spoken_language` | Valid [language code](#language-codes) (en, es, etc.)<br />May also include region codes (en-US, es-MX, etc.) | Required |

```xml
<original_spoken_language>en</original_spoken_language>
```

## country_of_origin

Defines the primary country where the film was produced and where the main creators, crew, and producers are established. Value must conform to one of the supported country codes as defined in the [ISO 3166-1 alpha 2](https://www.iso.org/iso-3166-country-codes.html) list of 2-character country codes.

| XML XPath                          | Accepted Values                                                                                          | Required  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| `/package/video/country_of_origin` | Valid 2-character country code per [ISO 3166-1 alpha 2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

```xml
<country_of_origin>US</country_of_origin>
```

## closedCaptions

Indicates whether the title delivered contains closed captions. Accepted values are Y or N. This field is required for all content intended for Roku Channel in the US

| XML XPath                       | Accepted Values | Required                       |
| ------------------------------- | --------------- | ------------------------------ |
| `/package/video/closedCaptions` | Y or N          | Required for content in the US |

```xml
<closedCaptions>Y</closedCaptions>
```

## closedCaptionsExemption

FCC exemption code for closed caption requirement. This node is required if the `closedCaptions` value = “N”

Allowable value and their definitions:
1 - The content has never aired on television in the United States.
2 - The content has only aired on television in the United States without captions.
3 - The content has not aired on television in the United States with captions since September 30, 2012.
4 - The content does not consist of full-length video programming.
5 - The content does not fall within a category of online programming that requires captions under FCC regulations (49 C.F.R. § 79.4(b)).
6 - The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.

| XML XPath                                | Accepted Values  | Required                       |
| ---------------------------------------- | ---------------- | ------------------------------ |
| `/package/video/closedCaptionsExemption` | 1, 2, 3, 4, 5, 6 | Required if closedCaptions = N |

```xml
<closedCaptionsExemption>1</closedCaptionsExemption>
```

## release_date

Original date content was first made available in any presentation. Must include accurate year of release at a minimum

| XML XPath                     | Accepted Values                         | Required |
| ----------------------------- | --------------------------------------- | -------- |
| `/package/video/release_date` | Conforms to ISO 8601 format: YYYY-MM-DD | Required |

```xml
<release_date>YYYY-MM-DD</release_date>
```

## runtime

Total run time of content in whole minutes

| XML XPath                | Accepted Values | Required |
| ------------------------ | --------------- | -------- |
| `/package/video/runtime` | Integers only   | Required |

```xml
<runtime>120</runtime>
```

## genre

Genre classification of the content. Roku requires each shortForm clip to be delivered with at least one supported genre. Please see [enumerated list](#genres) of genres that Roku supports.

| XML XPath                     | Accepted Values                                                                                  | Required |
| ----------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `/package/video/genres/genre` | See [enumerated list](#genres) below. No more than 10 genres may be submitted for a single title | Required |

```xml
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

## rating

Parental or content advisory rating for the shortForm clip by a rating source. A valid movie or TV rating from the rating authority (ratingSystem) of the Territory the content will be available in shall be provided for each shortForm clip. If the title has not been rated by that Territory’s official rating authority, please include a valid rating from the USA_PR ratingSystem. There is no official body that assigns ratings for the USA_PR ratingSystem. Please use the guidelines listed at [http://tvguidelines.org/](http://tvguidelines.org/) to assign the appropriate rating.

| XML XPath                                                           | Accepted Values                                                                                                                                        | Required |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `/package/video/ratings/rating` `must include the system attribute` | See [below](#rating-values-by-rating-system-and-country) for allowable ratings by rating system. <br />Multiple rating/rating system pairs are allowed | Required |

```xml
<ratings>
  <rating system="MPAA" reason="For drug content, some sensuality and war violence.">PG-13</rating>
  <rating system="BBFC">12A</rating>
  <rating system="CHVRS">14A</rating>
</ratings>
```

## tag

Tag is a freeform field that can be used to further categorize content aside from the limited number of supported Genre values. Roku Channel editorial team and recommendations engine will utilize the provided Tags to help surface content on Roku Channel Platform UI. The more tags that are included to a clip, episode, or movie, the more ways the content can be curated/surfaced to the end user. There is no limit to the number of tags that can be delivered with a title and there is no defined set of Tags. Tags are case sensitive. For example, a Tags “Rom-Com” and “rom-com” would be considered two unique tags. Please ensure Tags are all delivered consistently.

| XML XPath                 | Accepted Values                          | Required                         |
| ------------------------- | ---------------------------------------- | -------------------------------- |
| `/package/video/tags/tag` | any string under 50 characters in length | Optional, but HIGHLY recommended |

```xml
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

## cast display_name

Name of cast member. CDATA section supported.

| XML XPath                                      | Accepted Values         | Required |
| ---------------------------------------------- | ----------------------- | -------- |
| `/package/video/cast/cast_member/display_name` | Firstname<br />Lastname | Optional |

```xml
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

## crew display_name

Name of crew member. CDATA section supported.

_NOTE: Director is the only crew_member supported for Excel ingest at this time_

| XML XPath                                      | Accepted Values         | Required                          |
| ---------------------------------------------- | ----------------------- | --------------------------------- |
| `/package/video/crew/crew_member/display_name` | Firstname<br />Lastname | Required if providing crew_member |

```xml
<display_name><![CDATA[George Lucas]]></display_name>
```

## role

Role of the crew member listed in the display_name. Roku requires each crew member included in the metadata to also include that crew member’s role. Please see the [enumerated list](#crew-roles) of crew roles that Roku supports. Roles are case sensitive.

_NOTE: Director is the only crew_member supported for Excel ingest at this time_

| XML XPath                                    | Accepted Values                          | Required                          |
| -------------------------------------------- | ---------------------------------------- | --------------------------------- |
| `/package/video/crew/crew_member/roles/role` | See [enumerated list](#crew-roles) below | Required if providing crew_member |

```xml
<role>Director</role>
```

## localizations

Begins the asset block that provides localized metadata for multi-language packages. localizations define the language and provide the translated title, short_synopsis, and long_synopsis of the package.

| XML XPath                      | Accepted Values | Required |
| ------------------------------ | --------------- | -------- |
| `/package/video/localizations` |                 | Required |

```xml
<localizations>
```

## localization name attribute

Defines the language of the localized title, short_synopsis, and long_synopsis provided within the localization block. The localization tag's attribute must be name and the value provided in the name must at a minimum conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath                                   | Accepted Values                                                                                               | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/localizations/localization` | Valid [language code](#language-codes) (en, es, etc.)<br />May also include region codes (en-US, es-MX, etc.) | Required |

```xml
<localization name="es">
```

## localized title

Localized title of shortForm clip in the language specified in the localization tag’s name attribute. Include only the name of the content as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, season, or video format, for example: (Classic), (1987), (Season 1), or (HD)

| XML XPath                                         | Example              | Required |
| ------------------------------------------------- | -------------------- | -------- |
| `/package/video/localizations/localization/title` | Localized Clip Title | Required |

```xml
<title><![CDATA[Localized Clip Title. Required.]]></title>
```

## localized short_synopsis

A localized short synopsis of the content in the language specified in the localization tag’s name attribute. CDATA section supported. 250-character limit.

| XML XPath                                                  | Accepted Values | Required |
| ---------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/short_synopsis` | 250 characters  | Required |

```xml
<short_synopsis><![CDATA[Localized Short summary of clip. 250 characters maximum. Required]]></short_synopsis>
```

## localized long_synopsis

A localized long synopsis of the content in the language specified in the localization tag’s name attribute. CDATA section supported. 500-character limit.

| XML XPath                                                 | Accepted Values | Required |
| --------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/long_synopsis` | 500 characters  | Optional |

```xml
<long_synopsis><![CDATA[Localized Long summary of clip. 500 characters maximum. Optional.]]></long_synopsis>
```

## playOptions

Begins the asset block that provides the availability information of the package. playOptions consist of the country/territory availability, monetization type, availability start, and availability end dates of the title in the package.

| XML XPath                    | Accepted Values | Required |
| ---------------------------- | --------------- | -------- |
| `/package/video/playOptions` |                 | Required |

```xml
<playOptions>
```

## country

Country code of the territory in which the content is available. Multiple country nodes can be provided assuming vodType, licensePeriodStart, and licensePeriodEnd dates are identical across countries.

| XML XPath                                       | Accepted Values            | Required  |
| ----------------------------------------------- | -------------------------- | --------- |
| `/package/video/playOptions/playOption/country` | US<br />CA<br />GB<br />MX | Preferred |

```xml
<playOption>
  <country>US</country>
  <!-- Additional country nodes here -->
</playOption>
```

## vodType

Monetization Type of the shortForm clip. Multiple vodType nodes can be provided assuming country, licensePeriodStart, and licensePeriodEnd dates are identical across vodType.

| XML XPath                                       | Accepted Values | Required  |
| ----------------------------------------------- | --------------- | --------- |
| `/package/video/playOptions/playOption/vodType` | AVOD<br />SVOD  | Preferred |

```xml
<playOption>
  <vodType>AVOD</vodType>
  <!-- Additional vodType nodes here -->
</playOption>
```

## licensePeriodStart

Start date of content availability to users on Roku Channel. One `licensePeriodStart` date is allowed per playOption. licensePeriodStart dates must be chronologically before licensePeriodEnd dates. licensePeriodStart and licensePeriodEnd must not be identical

| XML XPath                                                  | Accepted Values                                  | Required |
| ---------------------------------------------------------- | ------------------------------------------------ | -------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Conforms to ISO 8601 format: YYYY-MM-DDTHH:MM:SS | Optional |

```xml
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

## licensePeriodEnd

End date of content availability to users on Roku Channel. One `licensePeriodEnd` date allowed per playOption. licensePeriodEnd dates must be chronologically after licensePeriodStart dates. licensePeriodStart and licensePeriodEnd must not be identical

| XML XPath                                                | Accepted Values                                  | Required |
| -------------------------------------------------------- | ------------------------------------------------ | -------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | Conforms to ISO 8601 format: YYYY-MM-DDTHH:MM:SS | Optional |

```xml
<playOption>
  <licensePeriodEnd>YYYY-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

## assets

Begins the asset block that references the files delivered in the package

| XML XPath               | Accepted Values    | Required |
| ----------------------- | ------------------ | -------- |
| `/package/video/assets` | media_type="video" | Required |

```xml
<assets media_type="video">
```

## data_file

## full source

The block that describes the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="source". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                           | Required |
| --------------------------------------- | ------------------------------------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="source"` | Required |

```xml
<asset type="full">
  <data_file role="source">
```

## full captions

The block that describes the closed captions for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="captions". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                             | Required       |
| --------------------------------------- | --------------------------------------------------------------------------- | -------------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="captions"` | Required in US |

```xml
<asset type="full">
  <data_file role="captions">
```

## full audio

The block that describes sidecar audio for the source video file. The audio file will either be a full audio dub for language translation purposes or a descriptive audio track for the accessibility purposes. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="audio" for translation dubs or role=”audio description” for accessibility purposes. The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                                                                    | Required                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="audio"`<br />`data_file role="audio description"` | Optional<br />\*audio description is strongly preferred |

**sidecar audio may be required if localized assets are needed when the original audio of the source file is not native to the territory of distribution or when complying with FCC regulations**

```xml
<asset type="full">
  <data_file role="audio">
```

## full subtitles

The block that describes sidecar subtitles for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="subtitles". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                              | Required   |
| --------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="subtitles"` | Optional\* |

**sidecar subtitles may be required if localized assets are needed when the original audio of the source file is not native to the territory of distribution.**

```xml
<asset type="full">
  <data_file role="subtitles">
```

## forced subtitles

The block that describes sidecar forced narrative subtitles for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="forced subtitles". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                                     | Required   |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="forced subtitles"` | Optional\* |

```xml
<asset type="full">
  <data_file role="forced subtitles">
```

## artwork

The block that describes the artwork file(s). The asset tag's attribute must be type="artwork". The <locale> and \<file_name> nodes are also required. Please see [Artwork](#artwork) for full image delivery specifications.

| XML XPath                               | Accepted Values                               | Required |
| --------------------------------------- | --------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="artwork"` | Required |

```xml
<asset type="artwork">
  <data_file>
```

## locale

Identifies the language of the data_file. At a minimum, the value must conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

Applicable to data_file roles: source, captions, audio, and subtitles and asset type: artwork.

| XML XPath                                      | Accepted Values                            | Required |
| ---------------------------------------------- | ------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/locale` | [Supported language code](#language-codes) | Required |

```xml
<locale name="en"/>
```

## file_name

Filename of the asset indicated in the data_file role or type attribute. All file_name values are case-sensitive and must contain the proper file extension.

| XML XPath                                         | Accepted Values                                        | Required                          |
| ------------------------------------------------- | ------------------------------------------------------ | --------------------------------- |
| `/package/video/assets/asset/data_file/file_name` | See guidelines below for asset delivery specifications | Required for each asset delivered |

```xml
<file_name>VideoFilename.mxf</file_name>
```

## audio

[Audio Layout Descriptor](#audio-channel-layout-hints) for the video file delivered. See guidelines below

| XML XPath                                     | Accepted Values                                                                                   | Required |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file/audio` | Allowed values:<br />stereoOnly<br />surroundOnly<br />stereoPlusSurround<br />surroundPlusStereo | Optional |

```xml
<audio>stereoOnly</audio>
```

## parentInfo

Begins the asset block that provides the parent information of the package. parentInfo consists of the parent content's contentType, episode/movie title, episode/movie runtime, releaseDate, TMS ID, seriesTitle, seasonNumber, and episodeNumber. Used in combination with a valid subType

| XML XPath                   | Accepted Values | Required |
| --------------------------- | --------------- | -------- |
| `/package/video/parentInfo` |                 | Optional |

```xml
<parentInfo>
```

## contentType

Content Type of the parent the clip is derived from or describes

| XML XPath                               | Accepted Values                | Required |
| --------------------------------------- | ------------------------------ | -------- |
| `/package/video/parentInfo/contentType` | episode<br />movie<br />series | Optional |

```xml
<parentInfo>
  <contentType>episode</contentType>
</parentInfo>
```

## title

Title of the parent program if the parent is a movie or episode

| XML XPath                         | Accepted Values                 | Required |
| --------------------------------- | ------------------------------- | -------- |
| `/package/video/parentInfo/title` | Title of Parent Movie or Series | Optional |

```xml
<parentInfo>
  <title>Title of Parent Movie or Series</title>
</parentInfo>
```

## runtime

Runtime of the parent program if the parent is a movie or episode

| XML XPath                           | Accepted Values | Required |
| ----------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/runtime` | Integer         | Optional |

```xml
<parentInfo>
  <runtime>45</runtime>
</parentInfo>
```

## releaseDate

Release date of the parent movie, episode, or series

| XML XPath                               | Accepted Values                         | Required |
| --------------------------------------- | --------------------------------------- | -------- |
| `/package/video/parentInfo/releaseDate` | Conforms to ISO 8601 format: YYYY-MM-DD | Optional |

```xml
<parentInfo>
  <releaseDate>YYYY-MM-DD</releaseDate>
</parentInfo>
```

## tmsId

TMS ID of the parent movie, episode, or series

| XML XPath                         | Accepted Values | Required |
| --------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/tmsId` | Valid TMS ID    | Optional |

```xml
<parentInfo>
  <tmsId>TMSID</tmsId>
</parentInfo>
```

## seriesTitle

Series Title of the parent program if the parent is an episode

| XML XPath                               | Accepted Values     | Required |
| --------------------------------------- | ------------------- | -------- |
| `/package/video/parentInfo/seriesTitle` | Parent Series Title | Optional |

```xml
<parentInfo>
  <seriesTitle>Parent Series Title</seriesTitle>
</parentInfo>
```

## seasonNumber

Season number of the parent program if the parent is an episode

| XML XPath                                | Accepted Values        | Required |
| ---------------------------------------- | ---------------------- | -------- |
| `/package/video/parentInfo/seasonNumber` | Integer greater than 0 | Optional |

```xml
<parentInfo>
  <seasonNumber>2</seasonNumber>
</parentInfo>
```

## episodeNumber

Episode number of the parent program if the parent is an episode

| XML XPath                                 | Accepted Values | Required |
| ----------------------------------------- | --------------- | -------- |
| `/package/video/parentInfo/episodeNumber` | Integer         | Optional |

```xml
<parentInfo>
  <episodeNumber>14</episodeNumber>
</parentInfo>
```

## sportType

Name of the sport featured in the clip/highlight

| XML XPath                  | Accepted Values   | Required                       |
| -------------------------- | ----------------- | ------------------------------ |
| `/package/video/sportType` | Name of the sport | Required for<br />sports clips |

```xml
<sportType>Baseball</sportType>
```

## sportLeague

Name of the sport league featured in the clip/highlight

| XML XPath                    | Accepted Values          | Required                       |
| ---------------------------- | ------------------------ | ------------------------------ |
| `/package/video/sportLeague` | Name of the sport league | Required for<br />sports clips |

```xml
<sportLeague>MLB</sportLeague>
```

## teams

Teams featured in the sport clip/highlight. Home and Away teams to be defined in the Location attribute

_At this time Roku only supports team-based participant metadata. Individual sports will be supported at a later date_

| XML XPath                   | Accepted Values                                                           | Required                       |
| --------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| `/package/video/teams/team` | Attribute values:<br />`team location="away"`<br />`team location="home"` | Required for<br />sports clips |

```xml
<teams>
	<team location="away">Chicago Cubs</team>
	<team location="home">St. Louis Cardinals</team>
</teams>
```