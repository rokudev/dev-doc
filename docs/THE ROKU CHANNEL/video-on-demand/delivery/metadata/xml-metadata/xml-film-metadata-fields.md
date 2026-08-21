---
title: XML - film metadata fields
deprecated: false
hidden: true
metadata:
  robots: index
---
**package**

Defines the package version type

| XML XPath           | Accepted Values | Required |
| ------------------- | --------------- | -------- |
| `/package/@version` | film5.0         | Required |

<u>Example:</u>

```xml Package
<package version="film5.0">
```

**provider**

Name of content owner/studio/network

| XML XPath           | Example        | Required |
| ------------------- | -------------- | -------- |
| `/package/provider` | Roku Originals | Required |

<u>Example:</u>

```xml
<provider>Roku Originals</provider>
```

**language**

Primary language of the package metadata. At a minimum, the value must conform to a supported [language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath           | Accepted Values                                                                                                | Required |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `/package/language` | Valid [language value](#language-codes) (en, es, etc.)<br />May also include region codes (en-US, es-MX, etc.) | Required |

<u>Example:</u>

```xml
<language>en</language>
```

**type**

Defines the content type of the package

| XML XPath             | Accepted Values | Required |
| --------------------- | --------------- | -------- |
| `/package/video/type` | film            | Required |

<u>Example:</u>

```
<type>film</type>
```

**asset_id**

Immutable, unique identifier for a movie. IDs are to be generated and supplied by the Partner for content that is delivered to Roku. The ID in the ingest metadata should match the ID provided in the avail document. This will aid in tracking the content throughout Roku’s pipeline from Avails submission through publication on Roku Channel. 50 character limit

| XML XPath                 | Accepted Values                                                               | Required |
| ------------------------- | ----------------------------------------------------------------------------- | -------- |
| `/package/video/asset_id` | alphanumeric characters, hyphens, and underscores only. 50 characters maximum | Required |

<u>Example:</u>

```
<asset_id>movieAssetIdHere</asset_id>
```

**eidr**

EIDR ID if one exists

| XML XPath             | Accepted Values   | Required |
| --------------------- | ----------------- | -------- |
| `/package/video/eidr` | Any valid EIDR ID | Optional |

<u>Example:</u>

```
<eidr></eidr>
```

**tmsId**

Gracenote ID if one exists

| XML XPath              | Accepted Values  | Required |
| ---------------------- | ---------------- | -------- |
| `/package/video/tmsId` | Any valid TMS ID | Optional |

<u>Example:</u>

```
<tmsId></tmsId>
```

**title**

Title of movie. Include only the name of the content as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, season, or video format, for example: (Classic), (1987), (Season 1), or (HD)

| XML XPath              | Example     | Required |
| ---------------------- | ----------- | -------- |
| `/package/video/title` | Movie Title | Required |

<u>Example:</u>

```
<title><![CDATA[Movie Title. Required.]]></title>
```

**short_synopsis**

A short synopsis of the content. CDATA section supported. 250-character limit.

| XML XPath                       | Accepted Values        | Required |
| ------------------------------- | ---------------------- | -------- |
| `/package/video/short_synopsis` | 250-character synopsis | Required |

<u>Example:</u>

```
<short_synopsis><![CDATA[Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

**long_synopsis**

A long synopsis of the content. CDATA section supported. 500-character limit.

| XML XPath                      | Accepted Values        | Required |
| ------------------------------ | ---------------------- | -------- |
| `/package/video/long_synopsis` | 500-character synopsis | Optional |

<u>Example:</u>

```
<long_synopsis><![CDATA[Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

**original_spoken_language**

Defines the original production language of the title being delivered. At a minimum, the value must conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath                                 | Accepted Values                                                                                                | Required |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/original_spoken_language` | Valid [language value](#language-codes) (en, es, etc.)<br />May also include region codes (en-US, es-MX, etc.) | Required |

<u>Example:</u>

```
<original_spoken_language>en</original_spoken_language>
```

**country_of_origin**

Defines the primary country where the film was produced and where the main creators, crew, and producers are established. Value must conform to one of the supported country codes as defined in the [ISO 3166-1 alpha 2](https://www.iso.org/iso-3166-country-codes.html) list of 2-character country codes.

| XML XPath                          | Accepted Values                                                                                          | Required  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | --------- |
| `/package/video/country_of_origin` | Valid 2-character country code per [ISO 3166-1 alpha 2](https://www.iso.org/iso-3166-country-codes.html) | Preferred |

<u>Example:</u>

```
<country_of_origin>US</country_of_origin>
```

**closedCaptions**

Indicates whether the title delivered contains closed captions. Accepted values are Y or N. This field is required for all content intended for Roku Channel in the US

| XML XPath                       | Accepted Values | Required                       |
| ------------------------------- | --------------- | ------------------------------ |
| `/package/video/closedCaptions` | Y or N          | Required for content in the US |

<u>Example:</u>

```
<closedCaptions>Y</closedCaptions>
```

**closedCaptionsExemption**

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

<u>Example:</u>

```
<closedCaptionsExemption>1</closedCaptionsExemption>
```

**release_date**

Original date content was first made available in any presentation. Must include accurate year of release at a minimum

| XML XPath                     | Accepted Values                         | Required |
| ----------------------------- | --------------------------------------- | -------- |
| `/package/video/release_date` | Conforms to ISO 8601 format: YYYY-MM-DD | Required |

<u>Example:</u>

```
<release_date>YYYY-MM-DD</release_date>
```

**runtime**

Total run time of content in whole minutes

| XML XPath                | Accepted Values | Required |
| ------------------------ | --------------- | -------- |
| `/package/video/runtime` | Integers only   | Required |

<u>Example:</u>

```
<runtime>120</runtime>
```

**genre**

Genre classification of the content. Roku requires each movie to be delivered with at least one supported genre. Please see [enumerated list](#genres) of genres that Roku supports.

| XML XPath                     | Accepted Values                                                                                  | Required |
| ----------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `/package/video/genres/genre` | See [enumerated list](#genres) below. No more than 10 genres may be submitted for a single title | Required |

<u>Example:</u>

```
<genres>
  <genre>drama</genre>
  <!-- Additional genres here-->
</genres>
```

**rating**

Parental or content advisory rating for the movie by a rating source. A valid movie or TV rating from the rating authority (ratingSystem) of the Territory the content will be available in shall be provided for each movie. If the title has not been rated by that Territory’s official rating authority, please include a valid rating from the USA_PR ratingSystem. There is no official body that assigns ratings for the USA_PR ratingSystem. Please use the guidelines listed at [http://tvguidelines.org/](http://tvguidelines.org/) to assign the appropriate rating.

| XML XPath                                                           | Accepted Values                                                                                                                                        | Required |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `/package/video/ratings/rating` `must include the system attribute` | See [below](#rating-values-by-rating-system-and-country) for allowable ratings by rating system.<br /> Multiple rating/rating system pairs are allowed | Required |

<u>Example:</u>

```
<ratings>
  <rating system="MPAA" reason="For drug content, some sensuality and war violence.">PG-13</rating>
  <rating system="BBFC">12A</rating>
  <rating system="CHVRS">14A</rating>
</ratings>
```

**tag**

Tag is a freeform field that can be used to further categorize content aside from the limited number of supported Genre values. Roku Channel editorial team and recommendations engine will utilize the provided Tags to help surface content on Roku Channel Platform UI. The more tags that are included to a clip, episode, or movie, the more ways the content can be curated/surfaced to the end user. There is no limit to the number of tags that can be delivered with a title and there is no defined set of Tags. Tags are case sensitive. For example, a Tags “Rom-Com” and “rom-com” would be considered two unique tags. Please ensure Tags are all delivered consistently.

| XML XPath                 | Accepted Values                          | Required                         |
| ------------------------- | ---------------------------------------- | -------------------------------- |
| `/package/video/tags/tag` | any string under 50 characters in length | Optional, but HIGHLY recommended |

<u>Example:</u>

```
<tags>
  <tag>energy</tag>
  <tag>dance</tag>
  <!-- Additional tags here-->
</tags>
```

**adBreak** **start_time**

Used to determine[ Ad Breaks for Ad Supported Content](#ad-breaks). adBreak values must be accurate to the millisecond. If the video provided includes commercial blacks, please provide the timecode equal to the midpoint of the commercial black. While not required for SVOD content, frame accurate adBreak data can be ingested if available.

| XML XPath                                    | Accepted Values | Required                   |
| -------------------------------------------- | --------------- | -------------------------- |
| `/package/video/adBreaks/adBreak/start_time` | HH:MM:SS.sss    | Preferred for AVOD content |

<u>Example:</u>

```
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

**cuePoint start_time and end_time**

Used to identify the in and out points of opening credits, content recaps, end credits, and behind the scenes footage. cuePoint tags must include the type attribute cuePoint start_time and end_time values must be accurate to the millisecond.

| XML XPath                                      | Accepted Values | Required  |
| ---------------------------------------------- | --------------- | --------- |
| `/package/video/cuePoints/cuePoint/start_time` | HH:MM:SS.sss    | Preferred |
| `/package/video/cuePoints/cuePoint/end_time`   | HH:MM:SS.sss    | Preferred |

<u>Example:</u>

```
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

**cuePoint type attribute**

Defines the cuePoint type of the cuePoint provided within the cuePoints block. The cuePoint tag's attribute must be type and the value provided must be one of the below:

| Type Value          | Description                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ad overlay`        | Identifies the cuePoint as the point within the video for in-program product placement advertisements. If providing, start_time and end_time required |
| `behind the scenes` | Identifies the cuePoint as behind the scenes footage typically at the tail of a video. If providing, start_time and end_time required                 |
| `intro`             | Identifies the cuePoint as the opening credits of the program. If providing, start_time and end_time required                                         |
| `recap`             | Identifies the cuePoint as a recap of previous content typically for episodic television. If providing, start_time and end_time required              |
| `end`               | Identifies the cuePoint as the end credits of the program. If providing, start_time and end_time is required                                          |

| XML XPath                           | Accepted Values                                | Required                        |
| ----------------------------------- | ---------------------------------------------- | ------------------------------- |
| `/package/video/cuePoints/cuePoint` | One of the values in the enumerated list above | Required if providing cuePoints |

<u>Example:</u>

```
<cuePoint type="intro">
```

**cast display_name**

Name of cast member. CDATA section supported.

| XML XPath                                      | Accepted Values    | Required |
| ---------------------------------------------- | ------------------ | -------- |
| `/package/video/cast/cast_member/display_name` | Firstname Lastname | Optional |

<u>Example:</u>

```
<cast>
  <cast_member>
    <display_name><![CDATA[Harrison Ford]]></display_name>
  </cast_member>
<!-- Additional cast members here-->
</cast>
```

**crew display_name**

Name of crew member. CDATA section supported.

_NOTE: Director is the only crew_member supported for Excel ingest at this time_

| XML XPath                                      | Accepted Values    | Required                          |
| ---------------------------------------------- | ------------------ | --------------------------------- |
| `/package/video/crew/crew_member/display_name` | Firstname Lastname | Required if providing crew_member |

<u>Example:</u>

```
<display_name><![CDATA[George Lucas]]></display_name>
```

**role**

Role of the crew member listed in the display_name. Roku requires each crew member included in the metadata to also include that crew member’s role. Please see the [enumerated list](#crew-roles) of crew roles that Roku supports. Roles are case sensitive.

_NOTE: Director is the only crew_member supported for Excel ingest at this time_

| XML XPath                                    | Accepted Values                          | Required                          |
| -------------------------------------------- | ---------------------------------------- | --------------------------------- |
| `/package/video/crew/crew_member/roles/role` | See [enumerated list](#crew-roles) below | Required if providing crew_member |

<u>Example:</u>

```
<role>Director</role>
```

**localizations**

Begins the asset block that provides localized metadata for multi-language packages. localizations define the language and provide the translated title, short_synopsis, and long_synopsis of the package.

| XML XPath                      | Accepted Values | Required |
| ------------------------------ | --------------- | -------- |
| `/package/video/localizations` |                 | Required |

<u>Example:</u>

```
<localizations>
```

**localization name attribute**

Defines the language of the localized title, short_synopsis, and long_synopsis provided within the localization block. The localization tag's attribute must be name and the value provided in the name must at a minimum conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

| XML XPath                                   | Accepted Values                                                                                               | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/localizations/localization` | Valid [language code](#language-codes) (en, es, etc.)<br />May also include region codes (en-US, es-MX, etc.) | Required |

<u>Example:</u>

```
<localization name="es">
```

**localized title**

Localized title of movie in the language specified in the localization tag’s name attribute. Include only the name of the content as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, season, or video format, for example: (Classic), (1987), (Season 1), or (HD). Localized `title` must be accompanied by a localized `short_synopsis` and localized `long_synopsis`

| XML XPath                                         | Accepted Values       | Required |
| ------------------------------------------------- | --------------------- | -------- |
| `/package/video/localizations/localization/title` | Localized Movie Title | Required |

<u>Example:</u>

```
<title><![CDATA[Localized Movie Title. Required.]]></title>
```

**localized short_synopsis**

A localized short synopsis of the content in the language specified in the localization tag’s name attribute. CDATA section supported. 250-character limit. Localized `short_synopsis` must be accompanied by a localized `title` and localized `long_synopsis`

| XML XPath                                                  | Accepted Values | Required |
| ---------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/short_synopsis` | 250 characters  | Required |

<u>Example:</u>

```
<short_synopsis><![CDATA[Localized Short summary of movie. 250 characters maximum. Required]]></short_synopsis>
```

**localized long_synopsis**

A localized long synopsis of the content in the language specified in the localization tag’s name attribute. CDATA section supported. 500-character limit. Localized `long_synopsis` must be accompanied by a localized `title` and localized `short_synopsis`

| XML XPath                                                 | Accepted Values | Required |
| --------------------------------------------------------- | --------------- | -------- |
| `/package/video/localizations/localization/long_synopsis` | 500 characters  | Optional |

<u>Example:</u>

```
<long_synopsis><![CDATA[Localized Long summary of movie. 500 characters maximum. Optional.]]></long_synopsis>
```

**playOptions**

Begins the asset block that provides the availability information of the package. playOptions consist of the country/territory availability, monetization type, availability start, and availability end dates of the title in the package.

| XML XPath                    | Accepted Values | Required |
| ---------------------------- | --------------- | -------- |
| `/package/video/playOptions` |                 | Required |

<u>Example:</u>

```
<playOptions>
```

**country**

Country code of the territory in which the content is available. Multiple country nodes can be provided assuming vodType, licensePeriodStart, and licensePeriodEnd dates are identical across countries.

| XML XPath                                       | Accepted Values            | Required  |
| ----------------------------------------------- | -------------------------- | --------- |
| `/package/video/playOptions/playOption/country` | US<br />CA<br />GB<br />MX | Preferred |

<u>Example:</u>

```
<playOption>
  <country>US</country>
  <!-- Additional country nodes here -->
</playOption>
```

**vodType**

Monetization Type of the movie. Multiple vodType nodes can be provided assuming country, licensePeriodStart, and licensePeriodEnd dates are identical across vodType.

| XML XPath                                       | Accepted Values | Required  |
| ----------------------------------------------- | --------------- | --------- |
| `/package/video/playOptions/playOption/vodType` | AVOD<br />SVOD  | Preferred |

<u>Example:</u>

```
<playOption>
  <vodType>AVOD</vodType>
  <!-- Additional vodType nodes here -->
</playOption>
```

**licensePeriodStart**

Start date of content availability to users on Roku Channel. One licensePeriodStart date is allowed per playOption. licensePeriodStart dates must be chronologically before licensePeriodEnd dates. licensePeriodStart and licensePeriodEnd must not be identical

| XML XPath                                                  | Accepted Values                                  | Required |
| ---------------------------------------------------------- | ------------------------------------------------ | -------- |
| `/package/video/playOptions/playOption/licensePeriodStart` | Conforms to ISO 8601 format: YYYY-MM-DDTHH:MM:SS | Optional |

<u>Example:</u>

```
<playOption>
  <licensePeriodStart>YYYY-MM-DDTHH:MM:SS</licensePeriodStart>
</playOption>
```

**licensePeriodEnd**

End date of content availability to users on Roku Channel. One licensePeriodEnd date allowed per playOption. licensePeriodEnd dates must be chronologically after licensePeriodStart dates. licensePeriodStart and licensePeriodEnd must not be identical

| XML XPath                                                | Accepted Values                                  | Required |
| -------------------------------------------------------- | ------------------------------------------------ | -------- |
| `/package/video/playOptions/playOption/licensePeriodEnd` | Conforms to ISO 8601 format: YYYY-MM-DDTHH:MM:SS | Optional |

<u>Example:</u>

```
<playOption>
  <licensePeriodEnd>YYYY-MM-DDTHH:MM:SS</licensePeriodEnd>
</playOption>
```

**assets**

Begins the asset block that references the files delivered in the package

| XML XPath               | Accepted Values    | Required |
| ----------------------- | ------------------ | -------- |
| `/package/video/assets` | media_type="video" | Required |

<u>Example:</u>

```
<assets media_type="video">
```

**data_file**

**full source**

The block that describes the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="source". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                            | Required |
| --------------------------------------- | -------------------------------------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"` <br />`data_file role="source"` | Required |

<u>Example:</u>

```
<asset type="full">
  <data_file role="source">
```

**full captions**

The block that describes the closed captions for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="captions". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                             | Required       |
| --------------------------------------- | --------------------------------------------------------------------------- | -------------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="captions"` | Required in US |

<u>Example:</u>

```
<asset type="full">
  <data_file role="captions">
```

**full audio**

The block that describes sidecar audio for the source video file. The audio file will either be a full audio dub for language translation purposes or a descriptive audio track for the accessibility purposes. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="audio" for translation dubs or role=”audio description” for accessibility purposes. The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                                                                    | Required                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="audio"`<br />`data_file role="audio description"` | Optional\*<br />audio description is strongly preferred |

**sidecar audio may be required if localized assets are needed when the original audio of the source file is not native to the territory of distribution or when complying with FCC regulations**

<u>Example:</u>

```
<asset type="full">
  <data_file role="audio">
```

**full subtitles**

The block that describes sidecar subtitles for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="subtitles". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                              | Required   |
| --------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="subtitles"` | Optional\* |

**sidecar subtitles may be required if localized assets are needed when the original audio of the source file is not native to the territory of distribution.**

<u>Example:</u>

```
<asset type="full">
  <data_file role="subtitles">
```

**forced subtitles**

The block that describes sidecar forced narrative subtitles for the source video file. The asset tag's attribute must be type="full" and the data_file tag's attribute must be role="forced subtitles". The <locale> and \<file_name> nodes are also required

| XML XPath                               | Accepted Values                                                                     | Required   |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="full"`<br />`data_file role="forced subtitles"` | Optional\* |

<u>Example:</u>

```
<asset type="full">
  <data_file role="forced subtitles">
```

**artwork**

The block that describes the artwork file(s). The asset tag's attribute must be type="artwork". The <locale> and \<file_name> nodes are also required. Please see [Artwork](#artwork) for full image delivery specifications.

| XML XPath                               | Accepted Values                               | Required |
| --------------------------------------- | --------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file` | Attribute values:<br />`asset type="artwork"` | Required |

<u>Examples:</u>

```
<asset type="artwork">
  <file_name>

<asset type="artwork">
  <file_name type="background_image">

<asset type="artwork">
  <file_name type="boxcover">
  
<asset type="artwork">
  <file_name type="poster">
```

**locale**

Identifies the language of the data_file. At a minimum, the value must conform to a [supported language code](#language-codes). As a best practice when providing language, please also include a region code to convey helpful information such as the distinction between Spanish spoken in Mexico (es-MX) and Spanish spoken in Spain (es-ES).

Applicable to data_file roles: source, captions, audio, subtitles, and asset type: artwork.

| XML XPath                                      | Accepted Values                            | Required |
| ---------------------------------------------- | ------------------------------------------ | -------- |
| `/package/video/assets/asset/data_file/locale` | [Supported language code](#language-codes) | Required |

<u>Example:</u>

```
<locale name="en"/>
```

**file_name**

Filename of the asset indicated in the data_file role or type attribute. All file_name values are case-sensitive and must contain the proper file extension.

| XML XPath                                         | Accepted Values                                        | Required                          |
| ------------------------------------------------- | ------------------------------------------------------ | --------------------------------- |
| `/package/video/assets/asset/data_file/file_name` | See guidelines below for asset delivery specifications | Required for each asset delivered |
| `/package/video/assets/asset/data_file/file_name` |                                                        | Required                          |
| `/package/video/assets/asset/data_file/file_name` | Attribute values:<br />`type="background_image"`       | Preferred                         |
| `/package/video/assets/asset/data_file/file_name` | Attribute values:<br />`type="boxcover"`               | Preferred                         |
| `/package/video/assets/asset/data_file/file_name` | Attribute values:<br />`type="poster"`                 | Preferred                         |

<u>Example:</u>

```
<file_name>VideoFilename.mxf</file_name>
```

**audio**

[Audio Layout Descriptor](#audio-channel-layout-hints) for the video file delivered. See guidelines below

| XML XPath                                     | Accepted Values                                                                                   | Required |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------- |
| `/package/video/assets/asset/data_file/audio` | Allowed values:<br />stereoOnly<br />surroundOnly<br />stereoPlusSurround<br />surroundPlusStereo | Optional |

<u>Example:</u>

```
<audio>stereoOnly</audio>
```
