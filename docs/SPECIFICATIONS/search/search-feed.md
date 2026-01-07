# Roku Search feed (JSON)

Channels participate in Roku Search by creating and submitting a search feed. The search feed is a single JSON file that includes the content metadata for an app's video catalog. Content meta data includes the unique ID, title, description, duration, rating, language, artwork, and so on. Once the feed has been configured following this spec, it can be submitted to [Roku's feed validation tool](https://developer.roku.com/apps/search/validator), and the integration into Roku Search can then be completed.

The Roku search feed includes the following key features:

- **One feed for all regions**. A single feed may contain region-specific content metadata and rating sources.



- **Content availabilty windows**. A feed may include availability windows for individual content items.



- **Variety of content**. The feed may contain the metadata for movies, television shows, and short-form content (for example, cooking videos, sports highlights, and so on).



- **Multiple source IDs**. A single feed can contain both app-specific and Gracenote content source IDs.

## Specifications

### Root

The root of the JSON file contains basic information such as the Roku feed specification version, the default language, default availability for different regions, and the list of content items.

| Field                        | Type              | Description                                                  | Required/Optional                                            |
| :--------------------------- | :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| version                      | String            | Roku JSON feed version (use "1").                            | Required                                                     |
| defaultLanguage              | String            | The lowercase [ISO 639-1 two-letter language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) to be used when the language is not specified for an asset. | Required (if you do not provide the language for each asset).<br /><br />If you do plan on providing the language for individual assets, the same language must be specified in the asset's title, description, and image. |
| defaultAvailabilityCountries | String[]          | The list of lowercase [ISO Alpha-2 two-letter country codes](https://www.iso.org/obp/ui/#search) to be used when **availabilityInfo.country** is not specified for an asset.<br /><br />Click [here](/docs/developer-program/discovery/search/implementing-search.md#language-and-regional-support) for the list of regions where Roku Search is currently supported. | Required (if you do not provide the available countries for each asset) |
| assets                       | [Asset[]](#asset) | The list of content items in the app's catalog.          | Required                                                     |

### Asset

An asset represents a specific content item in the app's catalog. It contains all the metadata for displaying the content item in the Roku platform and deep linking directly into content when it is selected.  

| Field                  | Type                                | Description                                                  | Required/Optional                                            |
| :--------------------- | :---------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| id                     | String                              | A maximum 50-character immutable unique ID for the content item. <br /><br />Once an ID is created for a content item in Roku Search, it may not be changed. <br /><br />The id must be unique within the feed. If the feed contains duplicate IDs, only one of the items with the duplicated ID is preserved. <br /><br />If the **type** for the content item is "externalIdOnly" set this field to the ID of the external source (for example, the Gracenote TMS ID). | Required, unless the  **type** for the content item is "season". |
| type                   | Enum                                | The media type of the content item: <br />${type}<br />This value is passed into [deep links](/docs/developer-program/discovery/implementing-deep-linking.md#mediatype-behavior) that are sent to the app. The app uses the value to determine how to launch the content. For example, if the type is "movie", the app will launch it directly into playback. | Required                                                     |
| externalIds            | [ExternalId](#externalid)[]         | The list of external sources and IDs to be used for assigning metadata. <br /><br />Include this field if provider metadata may be used in case the specified external source does not have certain metadata. | Optional                                                     |
| externalIdSource       | Enum                                | The external source of the value specified for the content item in the ID field: ${externalIdSource} | Only if the **type** for the content item is "externalIdOnly". |
| titles                 | [Title](#title)[]                   | A list of localized titles for the content item.<br /><br />Titles may be a maximum of 200 characters. | Required                                                     |
| shortDescriptions      | [Description](#description)[]       | A list of localized short descriptions for the content item. <br /><br />Short descriptions may be a maximum of 200 characters. | Required                                                     |
| longDescriptions       | [Description](#description)[]       | A list of localized long descriptions for the content item. <br /><br />Long descriptions may be a maximum of 500 characters. | Optional                                                     |
| releaseDate            | String                              | The date the content item was initially released or first aired in [ISO 8601 format](http://www.iso.org/iso/home/standards/iso8601.htm): {YYYY}-{MM}-{DD}. For example, "2022-11-11".<br /><br />This field is used to sort programs chronologically and to group related content in Roku Search. | Required, unless the **releaseYear** field is provided.<br /><br />At least one of the **releaseDate** or **releaseYear** fields must be provided. |
| releaseYear            | Number                              | The year the content item was initially released or first aired in YYYY format. For example, 2022.<br /><br />This field is used to sort programs chronologically and to group related content in Roku Search. | Required, unless the **releaseDate** field is provided.      |
| genres                 | String[]                            | A list of one or more of the following genres associated with the content item: ${genres} | Required                                                     |
| tags                   | String[]                            | One or more tags (for example, “dramas”, “korean”, and so on). Each tag is a string and is limited to 20 characters. | Optional                                                     |
| credits                | [Credit](#credit)[]                 | A list of cast and crew members that may receive credit for the content item. | Optional                                                     |
| advisoryRatings        | [AdvisoryRating](#advisoryrating)[] | A list of parental advisory rating objects for the content item. <br /><br />Each parental advisory rating object includes the rating authority, rating, and advisory descriptor (for example, MPAA, PG-13, AL [adult language]) for a movie in the United States).  <br /><br />A content item may have multiple advisoryRatings objects. For example, an item to be included in search results for USA and Germany would have at least two advisoryRatings objects in the list. | Required. Omitting the **advisoryRatings** field for a content item in EU countries excludes it from Roku's search and discovery features in EU countries. |
| images                 | [Image](#image)[]                   | A list of main poster and background images to be displayed for the content item in the Roku Search results. <br /><br />Images may have an aspect ratio of 16:9 or 2:3.<br /><br />Roku determines the dimensions and aspect ratio to be used after downloading the image. | A main 16:9 or 2:3 poster image is required.                 |
| content                | [Content](#content)                 | Contains options for playing the content item. <br /><br />The Content object includes a **playOptions** field that specifies the availability, pricing, licensing, quality, and playId (for deep linking into content from Roku Search) for the content item. | Required, unless the **type** field is "series" or "season". |
| durationInMilliseconds | Number                              | The duration of content in milliseconds.<br /><br />If both the **durationInSeconds** and **durationInMilliseconds** field are provided, they must be equal. However, it is recommended that only one is provided. <br /><br />Use the **durationInMilliseconds** field to provide the duration with maximum precision. | Required, unless the **if durationInSeconds** field is provided.<br /><br />At least one of the **durationInSeconds** or **durationInMilliseconds** fields must be provided.<br /><br />This field is not required if the **type** field is "series" or "season". |
| durationInSeconds      | Number                              | The duration of content in seconds.<br /><br />If both the **durationInSeconds** and **durationInMilliseconds** field are provided, they must be equal. However, it is recommended that only one is provided. <br /><br />Use the **durationInMilliseconds** field to provide the duration with maximum precision. | Required, unless the **if durationInMilliSeconds** field is provided.<br /><br />This field is not required if the **type** field is "series" or "season". |
| episodeInfo            | [EpisodeInfo](#episodeinfo)         | Metadata related to a television episode. <br />The **EpisodeInfo** object  specifies the episode number, season number, and series ID of the episode. | Required only if the **type** field is "episode".            |
| seasonInfo             | [SeasonInfo](#seasoninfo)           | Metadata related to a television season. <br /><br />The **SeasonInfo** object  specifies the season number and series ID of the season. | Required only if the **type** field is "season".             |

{#type}

- movie: Movie or long-form film (over 15 minutes).
- tvspecial: One-time TV program that is not part of a series, or content that does not fit into any other mediaType category (for example, music, artists, sporting events, non-episodic news specials).
- series: Set of related serialized episodes and possibly seasons. Includes TV shows and daily/weekly ongoing shows.
- season: As part of a series, single set of related TV episodes.
- episode: Single content item (an episode of a TV show, for example).
- shortform: Standalone content that is 15 minutes or less that is not a movie or TV show (for example, movie trailers, news clips, comedy clips, food reviews, or other clips).
- externalIdOnly: Validates the **id**, **externalIdSource**, and **playOptions** fields only. For a linear feed, validates the **id** and **externalIdSource** fields only.

{#externalIdSource}

- TMS: Gracenote is the source for the value specified in the **id** field.
- PARTNER_TITLE_ID.
- PARTNER_ASSET_ID.

{#genres}

- action
- action sports
- adventure
- aerobics
- agriculture
- animals
- animated
- anime
- anthology
- archery
- arm wrestling
- art
- arts/crafts
- artistic gymnastics
- artistic swimming
- athletics
- auction
- auto
- auto racing
- aviation
- awards
- badminton
- ballet
- baseball
- basketball
- 3x3 basketball
- beach soccer
- beach volleyball
- biathlon
- bicycle
- bicycle racing
- billiards
- biography
- blackjack
- bmx racing
- boat
- boat racing
- bobsled
- bodybuilding
- bowling
- boxing
- bullfighting
- bus./financial
- canoe
- card games
- ceremony
- cheerleading
- children
- children-music
- children-special
- children-talk
- collectibles
- comedy
- comedy drama
- community
- computers
- canoe/kayak
- consumer
- cooking
- cricket
- crime
- crime drama
- curling
- cycling
- dance
- dark comedy
- darts
- debate
- diving
- docudrama
- documentary
- dog racing
- dog show
- dog sled
- drag racing
- drama
- educational
- entertainment
- environment
- equestrian
- erotic
- event
- exercise
- fantasy
- faith
- fashion
- fencing
- field hockey
- figure skating
- fishing
- football
- food
- fundraiser
- gaelic football
- game show
- gaming
- gay/lesbian
- golf
- gymnastics
- handball
- health
- historical drama
- history
- hockey
- holiday
- holiday music
- holiday music special
- holiday special
- holiday-children
- holiday-children special
- home improvement
- horror
- horse
- house/garden
- how-to
- hunting
- hurling
- hydroplane racing
- indoor soccer
- interview
- intl soccer
- judo
- karate
- kayaking
- lacrosse
- law
- live
- luge
- martial arts
- medical
- military
- miniseries
- mixed martial arts
- modern pentathlon
- motorcycle
- motorcycle racing
- motorsports
- mountain biking
- music
- music special
- music talk
- musical
- musical comedy
- mystery
- nature
- news
- newsmagazine
- olympics
- opera
- outdoors
- parade
- paranormal
- parenting
- performing arts
- playoff sports
- poker
- politics
- polo
- pool
- pro wrestling
- public affairs
- racquet
- reality
- religious
- ringuette
- road cycling
- rodeo
- roller derby
- romance
- romantic comedy
- rowing
- rugby
- running
- rhythmic gymnastics
- sailing
- science
- science fiction
- self improvement
- shooting
- shopping
- sitcom
- skateboarding
- skating
- skeleton
- skiing
- snooker
- snowboarding
- snowmobile
- soap
- soap special
- soap talk
- soccer
- softball
- special
- speed skating
- sport climbing
- sports
- sports talk
- squash
- standup
- sumo wrestling
- surfing
- suspense
- swimming
- table tennis
- taekwondo
- talk
- technology
- tennis
- theater
- thriller
- track/field
- track cycling
- travel
- trampoline
- triathlon
- variety
- volleyball
- war
- water polo
- water skiing
- watersports
- weather
- weightlifting
- western
- wrestling
- yacht racing

### Title

Provide a localized title of the content item.

| Field     | Type     | Description                                                  | Required                                                     |
| :-------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| value     | String   | A maximum 200-character title for the content item in human readable text.<br /><br />This field is used for matching in Roku Search. Do not include extra information such as year, version label, and so on. | Required                                                     |
| languages | String[] | A list of languages in [ISO 639-1 two-letter language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) (lowercased) format for which the title is applicable.<br />${bq-title-language-note} | Required, if the **defaultLanguage** field is not specified.<br /><br />If the languages for a localized title are provided, localized descriptions and images with the same languages must also be provided. |

{#bq-title-language-note}

> The previously listed **language** field (a String) has been deprecated and replaced by the **languages** field (a String[]) in order to reduce feed sizes.

### Description

Provide a localized description of the content item.

| Field     | Type     | Description                                                  | Required                                                     |
| :-------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| value     | String   | A description of the content item. A short description may be a maximum of 200 characters. A long description may be a maximum of 500 characters. | Required                                                     |
| languages | String[] | A list of languages in [ISO 639-1 two-letter language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) (lowercased) format for which the description is applicable.<br />${bq-title-language-note} | Required, if the **defaultLanguage** field is not specified.<br /><br />If the languages for a localized title are provided, localized descriptions and images with the same languages must also be provided. |

### Credit

Provide the names and roles of cast and crew members that may receive credit for the content item.

| Field | Type   | Description                     | Required |
| :---- | :----- | :------------------------------ | :------- |
| name  | String | Full name of the person         | Required |
| role  | String | The role of the person: ${role} | Required |

{#role}

- actor
- anchor
- host
- narrator
- voice
- director
- producer
- screenwriter

### AdvisoryRating

Provide the list of parental advisory rating objects for the content item. Each parental advisory rating object includes the rating source (the rating system or authority responsible for the ratings), the rating value (for example, a "G" rating from the MPAA in the United States), and rating descriptor (for example, MPAA adult language [AL] or mild violence [MV]).

| Field       | Type                  | Description                                                  | Required |
| :---------- | :-------------------- | :----------------------------------------------------------- | :------- |
| source      | Enum                  | The rating system or authority responsible for the ratings.<br /><br />See the **Rating authority** column in the [Ratings](#ratings) table for the list of supported values. | Required |
| value       | Enum                  | The rating received by the content item from the rating source (for example, a "G" rating from the MPAA in the United States). <br /><br />See the **Ratings** column in the [Ratings](#ratings) table for the complete list of possible values per rating source. | Required |
| descriptors | Enum[] (String enums) | The list of advisory ratings received by the content item (for example, adult language ["AL"] or mild violence ["MV"] from the MPAA in the United States).<br /><br />See the **Ratings descriptors** column in the [Ratings](#ratings) table for the complete list of possible values per rating source. . | Optional |

#### Ratings

For each country supported by Roku Search, the rating authorities, ratings, and advisory ratings are as follows:

| Country | Rating authority<br />(source)                               | Ratings<br />(value)                                         | Advisory ratings<br />(descriptors) |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- | :---------------------------------- |
| au | ACB (Australian Classification Board) | ${acb-rating} |  |
| br | CLASSIND (Classificação Indicativa)                          | ${classind-rating}  | ${classind-advisory-rating-descriptors} |
| ca    | CHVRS (Canadian Home Video Rating System)                    | ${chvrs-rating}     | ${chvrs-rating-descriptors}            |
| ca     | CPR (Canadian Parental Rating)                               | ${cpr-rating}                                                |                                     |
| de   | FSF (Freiwillige Selbstkontrolle Fernsehen [German Association for Voluntary Self-Regulation of Television]) | ${fsf-rating}       |     |
| de  | FSK (Freiwillige Selbstkontrolle der Filmwirtschaft [German Self-Regulatory Body of the Movie Industry]) | ${fsk-rating}       |     |
| gb | BBFC (British Board of Film Classification) | ${bbfc-rating} | ${bbfc-advisory-rating-descriptors} |
| mx     | RTC (General Directorate of Radio Television and Cinematography) | ${rtc-rating}       | ${rtc-advisory-rating-descriptors}     |
| us     | MPAA (Motion Picture Association of America)                 | ${mpaa-rating}      | ${mpaa-advisory-rating-descriptors}    |
| us     | USA_PR (USA Parental Rating)                                 | ${usa-pr-rating}    | ${usa-pr-advisory-rating-descriptors}  |

{#acb-rating}

- NR
- E
- G
- PG
- M
- MA 15+
- R 18+
- X 18+
- C
- RC
- P

{#classind-rating}

- L
- 10
- 12
- 14
- 16
- 18

{#classind-advisory-rating-descriptors}

- Violência
- Violência Extrema
- Conteúdo Sexual
- Nudez
- Sexo
- Sexo Explícito
- Drogas
- Drogas Lícitas
- Drogas Ilícitas
- Linguagem Imprópria
- Atos Criminosos
- onteúdo Impactante

{#chvrs-rating}

- G
- PG
- 14-A (also 14A)
- 18-A (also 18A)
- R
- E

{#chvrs-rating-descriptors}

- Not Recommended For Young Children
- Not Recommended For Children
- Frightening Scenes
- Mature Theme
- Coarse Language
- Crude Content
- Nudity
- Sexual Content
- Violence
- Disturbing Content
- Substance Abuse
- Gory Scenes
- Explicit Sexual Content
- Brutal Violence
- Sexual Violence
- Language May Offend

{#cpr-rating}

- 14+
- 18+
- C
- C-8 (also C8)
- G
- PG
- E

{#bbfc-rating}

- U
- PG
- 12-A (also 12A)
- 12
- 15
- 18
- R18
- R-1

{#bbfc-advisory-rating-descriptors}

- Theme
- Behaviour
- Horror
- Nudity
- Discrimination
- Language
- Violence
- Drugs
- Sex

{#fsf-rating}

- 0
- 6
- 12
- 16
- 18

{#fsk-rating}

- 0
- 6
- 12
- 16
- 18

{#rtc-rating}

- AA
- A
- B
- B-15 (also B15)
- C
- D

{#rtc-advisory-rating-descriptors}

- Violence
- Sex
- Language
- Drugs

{#mpaa-rating}

- G
- PG
- PG-13 (also PG13)
- R
- NC-17 (also NC17)
- UR

{#mpaa-advisory-rating-descriptors}

- AC
- AL
- GL
- MV
- V
- GV
- BN
- N
- SSC
- RP

{#usa-pr-rating}

- TV-Y (also TVY)
- TV-Y7 (also TVY7)
- TV-G (also TVG)
- TV-PG (also TVPG)
- TV-14 (also TV14)
- TV-MA (also TVMA)

{#usa-pr-advisory-rating-descriptors}

- D
- L
- S
- V
- FV

### Image

Provide the poster and background images to be displayed for the content item in the Roku Search results. Provide localized images for each region in which the item is to be made available to Roku Search. The supported image formats and aspect ratios are as follows:

- **format**: JPEG (.jpg file extension), GIF (.gif file extension) or PNG (.png file extension)
- **aspect ratio**: 16:9 or 2:3 required.
- **maximum resolution**: 1920 X 1080

| Field     | Type     | Description                                                  | Required                                                     |
| :-------- | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| type      | Enum     | The image type: ${image-type}                                | Required                                                     |
| url       | String   | The source url for the image.                                | Required                                                     |
| languages | String[] | A list of languages in [ISO 639-1 two-letter language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) format for which the image is applicable. | Required, if the **defaultLanguage** field is not specified.<br /><br />If the language for a localized image is provided, a localized title and description with the same language must also be provided. |

{#image-type}

- main: A poster image with title treatment. The aspect ratio of the poster may be 16:9 or 2:3.
- background: A textless image displayed in the background. The aspect ratio of the background image may be 16:9 or 2:3.

### Content

| Field       | Type                         | Description                                       | Required |
| :---------- | :--------------------------- | :------------------------------------------------ | :------- |
| playOptions | [PlayOption](#playoptions)[] | The list of options for playing the content item. | Required |

#### playOptions

In the **playOptions** field, specify the availability, pricing, licensing, quality, and playId (for [deep linking](/docs/developer-program/discovery/implementing-deep-linking.md) into content from Roku Search) for the content item.

| Field                      | Type                | Description                                                  | Required                                                     |
| :------------------------- | :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| license                    | Enum                | The type of licensing terms for the content: ${license}      | Required                                                     |
| price                      | Float               | The price of the content in decimal format (for example, 1.90, 1.99, or 2.00).<br /><br />If the price is 0.00, set the **license** field to "subscription" or "free" instead of setting this field. This automatically sets the **price** field to 0.00 by default. | Required, if the **license** field is set to "purchase" or "rental". |
| quality                    | Enum                | The playback resolution of the content item: ${resolution}   | Required                                                     |
| currency                   | String              | The [ISO 4217 three-letter currency code](https://www.iso.org/iso-4217-currency-codes.html#:~:text=The%20first%20two%20letters%20of,and%20the%20D%20for%20dollar) for the value specified in the **price** field: ${currency} | Required, if the **license** field is set to "purchase" or "rental". |
| playId                     | String              | A unique, immutable ID for the content item. When customers search for this content item and select your app to watch it, the **playId** is passed in a [deep link](/docs/developer-program/discovery/implementing-deep-linking.md) back to your app.<br /><br />The **playId** must map to the **contentid** in your app for the same content. It is therefore important to keep the Roku Search feed synchronized with the app's content feed. | Required                                                     |
| availabilityStartTimeStamp | Number              | The time (in epoch milliseconds) when the content item is to be made available to Roku Search. | Optional <br /><br />If you are not providing an availability start time, omit this field from your search feed. |
| availabilityEndTimeStamp   | Number              | The time (in epoch milliseconds) when the content item is to stop being made available to Roku Search. | Optional<br /><br />If you are not providing an availability end time or if the content is available indefinitely, omit this field from your search feed. |
| availabilityStartTime      | String              | The time (as an ISO timestamp) when the content item is to be made available to Roku Search. | Optional <br /><br />If you are not providing an availability start time, omit this field from your search feed. |
| availabilityEndTime        | String              | The time (as an ISO timestamp) when the content item is to stop being made available to Roku Search. | Optional<br /><br />If you are not providing an availability end time or if the content is available indefinitely, omit this field from your search feed. |
| availabilityInfo           | Map<Enum, String[]> | The list of [ISO Alpha-2 two-letter country codes](https://www.iso.org/obp/ui/#search/code/) in which the content item is to be made available to Roku Search. | Required, if the **defaultAvailabilityCountries** field is not specified. |

{#license}

- free: Content is directly playable upon being deep linked.
- subscription: Content is only playable upon being deep linked if the customer has a subscription. For customers that do not have a subscription, the app typically displays a subscription sign-up page when receiving deep links into content that is behind a paywall.
- rental
- purchase

{#resolution}

- sd
- hd
- hd+
- fhd
- uhd

{#currency}

- usd (or USD) (default)
- gbp (or GBP)
- cad (or CAD)
- eur (or EUR)

{#audio-format}

- mono
- stereo
- dolby digital
- dolby atmos
- dolby digital plus

### SeasonInfo

If the **asset.type** field is set to "season" for a content item, provide metadata about the season.

| Field        | Type   | Description                               | Required |
| :----------- | :----- | :---------------------------------------- | :------- |
| seriesId     | String | The series ID associated with the season. | Required |
| seasonNumber | Number | The number used to identify the season.   | Required |

### EpisodeInfo

If the **asset.type** field is set to "episode" for a content item, provide metadata about the episode.

| Field         | Type   | Description                                                | Required |
| :------------ | :----- | :--------------------------------------------------------- | :------- |
| seriesId      | String | The ID of the series containing the episode.               | Required |
| seasonNumber  | Number | The season number in which the episode occurs.             | Optional |
| episodeNumber | Number | The number used to identify the episode within the season. | Required |

### ExternalId

Provide a list of IDs and sources to be used for linking external metadata to the content item.

| Field  | Type   | Description                                                  | Required |
| :----- | :----- | :----------------------------------------------------------- | :------- |
| id     | String | The third-party metadata provider ID that uniquely identifies the content item. <br /><br />For Gracenote/TMS, the ID is a 14-character string (for example, MV123456780000). The first 2 characters in the ID represent the unique ID domain applied to the program record: ${external-id-tms-ids} | Required |
| source | String | The source of the specified external ID. This must be one of the following values: ${external-id-source} | Required |

{#external-id-tms-ids}

- MV: Movie (theatrical, made-for-television, direct-to-video).
- EP: Television episode.
- SH: Television show

{#external-id-source}

- TMS

## Pagination

Pagination can be used to separate a single search feed into multiple discrete pages of smaller size (250MB maximum). This reduces the payload of the feed, which improves the performance of the publisher's and Roku's servers and optimizes the download frequency.

> If the search feed is 20MB or larger, pagination should be used.  

If a page within the search feed has not changed, Roku attempts to skip the downloading of it and use the previous download instead. To force a new download, update the **ETag** or **Last-Modified** header.

To use pagination in your search feed, follow these steps:

1. Separate the search feed into multiple pages (the maximum size for each page is 250MB).
2. In the paged response, set the **nextPageUrl** to the URL of the next page.
3. On the last page, do not set the **nextPageUrl**.
4. Roku downloads the pages in the search feed as long as **nextPageUrl** is in the paged response.

## Schema

Developers can use the Roku Search feed schema to validate the format of their search feed (it, however, does not guarantee that a feed will be validated by Roku). This schema may occasionally be updated by Roku.

> Some fields in the schema are for use by content providers onboarding content into The Roku Channel only.

> Click [here](https://github.com/rokudev/search-feed-json) to download Roku's Search feed schema.

```
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"properties": {
		"version": {
			"type": "string"
		},
		"defaultLanguage": {
			"$ref": "#/definitions/language_type"
		},
		"defaultAvailabilityCountries": {
			"type": "array",
			"items": [{
				"$ref": "#/definitions/country_type"
			}]
		},
		"nextPageUrl": {
			"type": "string",
			"pattern": "^http(s)?://.+$"
		},
		"assets": {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"type": {
						"$ref": "#/definitions/asset_type"
					},
					"titles": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/title"
						}
					},
					"shortDescriptions": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/short_description"
						}
					},
					"longDescriptions": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/long_description"
						}
					},
					"externalIdSource": {
						"$ref": "#/definitions/external_id_source_type"
					},
					"externalIds": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/external_id"
						}
					},
					"releaseDate": {
						"description": "ISO-8601",
						"type": "string",
						"pattern": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
					},
					"releaseYear": {
						"type": "integer"
					},
					"genres": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/genre_type"
						}
					},
					"tags": {
						"type": "array",
						"items": {
							"type": "string"
						}
					},
					"credits": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"type": "string"
								},
								"role": {
									"type": "string"
								},
								"birthDate": {
									"type": "string"
								},
								"deathDate": {
									"type": "string"
								},
								"imageUrl": {
									"type": "string"
								}
							}
						}
					},
					"advisoryRatings": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/advisory_rating"
						}
					},
					"images": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/image"
						}
					},
					"durationInMilliseconds": {
						"type": "number"
					},
					"durationInSeconds": {
						"type": "integer"
					},
					"episodeInfo": {
						"type": "object",
						"properties": {
							"seriesId": {
								"type": "string"
							},
							"seasonNumber": {
								"type": "integer"
							},
							"episodeNumber": {
								"type": "integer"
							}
						},
						"required": [
							"seriesId",
							"episodeNumber"
						]
					},
					"seasonInfo": {
						"type": "object",
						"properties": {
							"seasonNumber": {
								"type": "integer"
							},
							"seriesId": {
								"type": "string"
							}
						},
						"required": [
							"seasonNumber",
							"seriesId"
						]
					},
					"content": {
						"type": "object",
						"properties": {
							"media": {
								"$ref": "#/definitions/media"
							},
							"linearEvents": {
								"type": "array",
								"items": {
									"$ref": "#/definitions/linear_event"
								}
							},
							"playOptions": {
								"type": "array",
								"items": {
									"$ref": "#/definitions/play_option"
								}
							}
						},
						"oneOf": [{
								"required": [
									"media"
								]
							},
							{
								"required": [
									"playOptions"
								]
							}
						]
					},
					"isOriginal": {
						"type": "boolean"
					}
				},
				"if": {
					"properties": {
						"type": {
							"const": "externalIdOnly"
						}
					},
					"required": [
						"type"
					]
				},
				"then": {
					"required": [
						"id",
						"type",
						"externalIdSource"
					]
				},
				"else": {
					"if": {
						"properties": {
							"type": {
								"const": "season"
							}
						},
						"required": [
							"type"
						]
					},
					"then": {
						"required": [
							"type",
							"seasonInfo"
						]
					},
					"else": {
						"required": [
							"id",
							"titles",
							"type"
						]
					}
				}
			}
		}
	},
	"required": [
		"version",
		"assets"
	],
	"definitions": {
		"image": {
			"type": "object",
			"properties": {
				"type": {
					"$ref": "#/definitions/image_type"
				},
				"url": {
					"type": "string",
					"pattern": "^http(s)?://.+$"
				},
				"languages": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/language_type"
					}
				}
			},
			"required": [
				"type",
				"url"
			]
		},
		"short_description": {
			"type": "object",
			"properties": {
				"value": {
					"type": "string",
					"maxLength": 200
				},
				"languages": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/language_type"
					}
				}
			},
			"required": [
				"value"
			]
		},
		"long_description": {
			"type": "object",
			"properties": {
				"value": {
					"type": "string",
					"maxLength": 500
				},
				"languages": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/language_type"
					}
				}
			},
			"required": [
				"value"
			]
		},
		"title": {
			"type": "object",
			"properties": {
				"value": {
					"type": "string",
					"maxLength": 200
				},
				"languages": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/language_type"
					}
				}
			},
			"required": [
				"value"
			]
		},
		"advisory_rating": {
			"type": "object",
			"properties": {
				"source": {
					"$ref": "#/definitions/advisory_ratings_source_type"
				},
				"value": {
					"type": "string"
				},
				"descriptors": {
					"type": "array"
				}
			},
			"allOf": [{
					"if": {
						"properties": {
							"source": {
								"const": "ACB"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/ACB_values"
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "BBFC"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/BBFC_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/BBFC_descriptors"
								}
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "CLASSIND"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/CLASSIND_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/CLASSIND_descriptors"
								}
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "CHVRS"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/CHVRS_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/CHVRS_descriptors"
								}
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "CPR"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/CPR_values"
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "FSF"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/FSF_values"
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "FSK"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/FSK_values"
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "MPAA"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/MPAA_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/MPAA_descriptors"
								}
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "RTC"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/RTC_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/RTC_descriptors"
								}
							}
						}
					}
				},
				{
					"if": {
						"properties": {
							"source": {
								"const": "USA_PR"
							}
						}
					},
					"then": {
						"properties": {
							"value": {
								"$ref": "#/definitions/USA_PR_values"
							},
							"descriptors": {
								"items": {
									"$ref": "#/definitions/USA_PR_descriptors"
								}
							}
						}
					}
				}
			],
			"required": [
				"source",
				"value"
			]
		},
		"asset_type": {
			"type": "string",
			"enum": [
				"movie",
				"tvspecial",
				"series",
				"season",
				"episode",
				"shortform",
				"externalIdOnly"
			]
		},
		"external_id_source_type": {
			"type": "string",
			"enum": [
				"tms",
				"ref",
				"gsd",
				"partner_title_id",
				"partner_asset_id",
				"gracenote_station_id"
			]
		},
		"externalIdRelationTypes": {
			"type": "string",
			"enum": [
				"parent",
				"child",
				"sibling"
			]
		},
		"image_type": {
			"type": "string",
			"enum": [
				"main",
				"background",
				"keyart",
				"logo",
				"dark_logo",
				"hud_logo"
			]
		},
		"genre_type": {
			"type": "string",
			"enum": [
				"action",
				"action sports",
				"adventure",
				"aerobics",
				"agriculture",
				"animals",
				"animated",
				"anime",
				"anthology",
				"archery",
				"arm wrestling",
				"art",
				"arts/crafts",
				"artistic gymnastics",
				"artistic swimming",
				"athletics",
				"auction",
				"auto",
				"auto racing",
				"aviation",
				"awards",
				"badminton",
				"ballet",
				"baseball",
				"basketball",
				"3x3 basketball",
				"beach soccer",
				"beach volleyball",
				"biathlon",
				"bicycle",
				"bicycle racing",
				"billiards",
				"biography",
				"blackjack",
				"bmx racing",
				"boat",
				"boat racing",
				"bobsled",
				"bodybuilding",
				"bowling",
				"boxing",
				"bullfighting",
				"bus./financial",
				"canoe",
				"card games",
				"ceremony",
				"cheerleading",
				"children",
				"children-music",
				"children-special",
				"children-talk",
				"collectibles",
				"comedy",
				"comedy drama",
				"community",
				"computers",
				"canoe/kayak",
				"consumer",
				"cooking",
				"cricket",
				"crime",
				"crime drama",
				"curling",
				"cycling",
				"dance",
				"dark comedy",
				"darts",
				"debate",
				"diving",
				"docudrama",
				"documentary",
				"dog racing",
				"dog show",
				"dog sled",
				"drag racing",
				"drama",
				"educational",
				"entertainment",
				"environment",
				"equestrian",
				"erotic",
				"event",
				"exercise",
				"fantasy",
				"faith",
				"fashion",
				"fencing",
				"field hockey",
				"figure skating",
				"fishing",
				"football",
				"food",
				"fundraiser",
				"gaelic football",
				"game show",
				"gaming",
				"gay/lesbian",
				"golf",
				"gymnastics",
				"handball",
				"health",
				"historical drama",
				"history",
				"hockey",
				"holiday",
				"holiday music",
				"holiday music special",
				"holiday special",
				"holiday-children",
				"holiday-children special",
				"home improvement",
				"horror",
				"horse",
				"house/garden",
				"how-to",
				"hunting",
				"hurling",
				"hydroplane racing",
				"indoor soccer",
				"interview",
				"intl soccer",
				"judo",
				"karate",
				"kayaking",
				"lacrosse",
				"law",
				"live",
				"luge",
				"martial arts",
				"medical",
				"military",
				"miniseries",
				"mixed martial arts",
				"modern pentathlon",
				"motorcycle",
				"motorcycle racing",
				"motorsports",
				"mountain biking",
				"music",
				"music special",
				"music talk",
				"musical",
				"musical comedy",
				"mystery",
				"nature",
				"news",
				"newsmagazine",
				"olympics",
				"opera",
				"outdoors",
				"parade",
				"paranormal",
				"parenting",
				"performing arts",
				"playoff sports",
				"poker",
				"politics",
				"polo",
				"pool",
				"pro wrestling",
				"public affairs",
				"racquet",
				"reality",
				"religious",
				"ringuette",
				"road cycling",
				"rodeo",
				"roller derby",
				"romance",
				"romantic comedy",
				"rowing",
				"rugby",
				"running",
				"rhythmic gymnastics",
				"sailing",
				"science",
				"science fiction",
				"self improvement",
				"shooting",
				"shopping",
				"sitcom",
				"skateboarding",
				"skating",
				"skeleton",
				"skiing",
				"snooker",
				"snowboarding",
				"snowmobile",
				"soap",
				"soap special",
				"soap talk",
				"soccer",
				"softball",
				"special",
				"speed skating",
				"sport climbing",
				"sports",
				"sports talk",
				"squash",
				"standup",
				"sumo wrestling",
				"surfing",
				"suspense",
				"swimming",
				"table tennis",
				"taekwondo",
				"talk",
				"technology",
				"tennis",
				"theater",
				"thriller",
				"track/field",
				"track cycling",
				"travel",
				"trampoline",
				"triathlon",
				"variety",
				"volleyball",
				"war",
				"water polo",
				"water skiing",
				"watersports",
				"weather",
				"weightlifting",
				"western",
				"wrestling",
				"yacht racing"
			]
		},
		"advisory_ratings_source_type": {
			"type": "string",
			"enum": [
				"ACB",
				"BBFC",
				"CLASSIND",
				"CHVRS",
				"CPR",
				"FSF",
				"FSK",
				"MPAA",
				"RTC",
				"USA_PR"
			]
		},
		"language_type": {
			"type": "string",
			"enum": [
				"af",
				"am",
				"ar",
				"ar-dz",
				"ar-bh",
				"ar-eg",
				"ar-iq",
				"ar-jo",
				"ar-kw",
				"ar-lb",
				"ar-ly",
				"ar-ma",
				"ar-om",
				"ar-qa",
				"ar-sa",
				"ar-sy",
				"ar-tn",
				"ar-ae",
				"ar-ye",
				"as",
				"az",
				"be",
				"bg",
				"bh",
				"bn",
				"bo",
				"bs",
				"ca",
				"cs",
				"cy",
				"da",
				"de",
				"de-at",
				"de-de",
				"de-li",
				"de-lu",
				"de-ch",
				"dv",
				"dz",
				"el",
				"en",
				"en-at",
				"en-au",
				"en-bz",
				"en-ca",
				"en-ie",
				"en-jm",
				"en-nz",
				"en-za",
				"en-tt",
				"en-gb",
				"en-us",
				"es",
				"es-ar",
				"es-bo",
				"es-cl",
				"es-co",
				"es-cr",
				"es-do",
				"es-ec",
				"es-es",
				"es-sv",
				"es-gt",
				"es-hn",
				"es-mx",
				"es-ni",
				"es-pa",
				"es-py",
				"es-pe",
				"es-pr",
				"es-us",
				"es-uy",
				"es-ve",
				"eu",
				"et",
				"fa",
				"ff",
				"fi",
				"fo",
				"fr",
				"fr-be",
				"fr-ca",
				"fr-lu",
				"fr-ch",
				"fy",
				"ga",
				"gd",
				"gl",
				"gn",
				"gu",
				"ha",
				"he",
				"hi",
				"hr",
				"ht",
				"hu",
				"hy",
				"id",
				"ig",
				"ii",
				"ik",
				"is",
				"it",
				"it-ch",
				"iu",
				"ja",
				"ka",
				"kk",
				"km",
				"kn",
				"ko",
				"kr",
				"ks",
				"ku",
				"ky",
				"la",
				"lo",
				"lt",
				"lv",
				"mg",
				"mk",
				"ml",
				"mn",
				"mr",
				"ms",
				"mt",
				"my",
				"nd",
				"ne",
				"nl",
				"nl-be",
				"no",
				"om",
				"or",
				"pa",
				"pl",
				"ps",
				"pt",
				"pt-br",
				"qu",
				"ro",
				"ro-md",
				"rm",
				"rn",
				"ru",
				"ru-md",
				"rw",
				"sa",
				"sd",
				"se",
				"si",
				"sk",
				"sl",
				"sn",
				"so",
				"sq",
				"sr",
				"st",
				"sv",
				"sv-fi",
				"sw",
				"ta",
				"te",
				"tg",
				"th",
				"ti",
				"tk",
				"tn",
				"tr",
				"ts",
				"tt",
				"ty",
				"uk",
				"ur",
				"uz",
				"ve",
				"vi",
				"xh",
				"yi",
				"yo",
				"zh",
				"zh-hk",
				"zh-cn",
				"zh-sg",
				"zh-tw",
				"zu"
			]
		},
		"country_type": {
			"type": "string",
			"enum": [
				"ar",
				"at",
				"au",
				"bo",
				"br",
				"ca",
				"cl",
				"co",
				"cr",
				"de",
				"ec",
				"es",
				"fr",
				"gb",
				"gt",
				"hn",
				"ie",
				"mx",
				"ni",
				"pa",
				"pe",
				"sv",
				"us"
			]
		},
		"ACB_values": {
			"type": "string",
			"enum": [
				"NR",
				"E",
				"G",
				"PG",
				"M",
				"MA 15+",
				"R 18+",
				"X 18+",
				"AV 15+",
				"C",
				"NC",
				"RC",
				"P"
			]
		},
		"BBFC_descriptors": {
			"type": "string",
			"description": "Descriptors for BBFC ratings",
			"enum": [
				"theme",
				"behaviour",
				"horror",
				"nudity",
				"discrimination",
				"language",
				"violence",
				"drugs",
				"sex"
			]
		},
		"BBFC_values": {
			"type": "string",
			"enum": [
				"NR",
				"U",
				"PG",
				"12A",
				"12-A",
				"12",
				"15",
				"18",
				"R18",
				"R-18"
			]
		},
		"CHVRS_descriptors": {
			"type": "string",
			"description": "Descriptors for CHVRS ratings",
			"enum": [
				"not recommended for young children",
				"not recommended for children",
				"frightening scenes",
				"mature theme",
				"coarse language",
				"crude content",
				"nudity",
				"sexual content",
				"violence",
				"disturbing content",
				"substance abuse",
				"gory scenes",
				"explicit sexual content",
				"brutal violence",
				"sexual violence",
				"language may offend"
			]
		},
		"CHVRS_values": {
			"type": "string",
			"enum": [
				"NR",
				"G",
				"PG",
				"14A",
				"14-A",
				"18A",
				"18-A",
				"R",
				"E"
			]
		},
		"CLASSIND_descriptors": {
			"type": "string",
			"description": "Descriptors for CLASSIND ratings",
			"enum": [
				"violência",
				"violência extrema",
				"conteúdo sexual",
				"nudez",
				"sexo",
				"sexo explícito",
				"drogas",
				"drogas lícitas",
				"drogas ilícitas",
				"linguagem imprópria",
				"atos criminosos",
				"onteúdo impactante"
			]
		},
		"CLASSIND_values": {
			"type": "string",
			"enum": [
				"NR",
				"L",
				"10",
				"12",
				"14",
				"16",
				"18"
			]
		},
		"CPR_values": {
			"type": "string",
			"enum": [
				"NR",
				"14+",
				"18+",
				"C",
				"C8",
				"C-8",
				"G",
				"PG",
				"E"
			]
		},
		"FSF_values": {
			"type": "string",
			"enum": [
				"NR",
				"0",
				"6",
				"12",
				"16",
				"18"
			]
		},
		"FSK_values": {
			"type": "string",
			"enum": [
				"NR",
				"0",
				"6",
				"12",
				"16",
				"18"
			]
		},
		"MPAA_descriptors": {
			"type": "string",
			"description": "Descriptors for MPAA ratings",
			"enum": [
				"AC",
				"AL",
				"GL",
				"MV",
				"V",
				"GV",
				"BN",
				"N",
				"SSC",
				"RP"
			]
		},
		"MPAA_values": {
			"type": "string",
			"enum": [
				"NR",
				"G",
				"PG",
				"PG13",
				"PG-13",
				"R",
				"NC-17",
				"NC17",
				"UR"
			]
		},
		"RTC_descriptors": {
			"type": "string",
			"description": "Descriptors for RTC ratings",
			"enum": [
				"violence",
				"sex",
				"language",
				"drugs"
			]
		},
		"RTC_values": {
			"type": "string",
			"enum": [
				"NR",
				"AA",
				"A",
				"B",
				"B-15",
				"B15",
				"C",
				"D"
			]
		},
		"USA_PR_descriptors": {
			"type": "string",
			"description": "Descriptors used for USA_PR ratings",
			"enum": [
				"D",
				"L",
				"S",
				"V",
				"FV"
			]
		},
		"USA_PR_values": {
			"type": "string",
			"enum": [
				"NR",
				"TV-Y",
				"TVY",
				"TV-Y7",
				"TVY7",
				"TV-G",
				"TVG",
				"TV-PG",
				"TVPG",
				"TV-14",
				"TV14",
				"TV-MA",
				"TVMA"
			]
		},
		"media": {
			"type": "object",
			"properties": {
				"originalProductionLanguage": {
					"$ref": "#/definitions/language_type"
				},
				"secondaryAudioLanguages": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/language_type"
					}
				},
				"audioTracks": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"label": {
								"type": "string"
							},
							"type": {
								"enum": [
									"original",
									"audio description",
									"other"
								]
							},
							"language": {
								"$ref": "#/definitions/language_type"
							}
						},
						"required": [
							"language"
						]
					}
				},
				"audioFormats": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/audio_format_type"
					}
				},
				"videos": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"url": {
								"type": "string"
							},
							"quality": {
								"$ref": "#/definitions/video_type"
							},
							"videoType": {
								"$ref": "#/definitions/video_quality_type"
							},
							"bitRate": {
								"description": "must be greater than or equal to 0",
								"type": "integer"
							},
							"drmAuthentication": {
								"type": "object",
								"properties": {
									"drmContentProvider": {
										"type": "string"
									}
								}
							}
						},
						"required": [
							"url",
							"quality",
							"videoType"
						]
					}
				},
				"captions": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"url": {
								"type": "string"
							},
							"captionType": {
								"enum": [
									"closed_caption",
									"subtitle"
								]
							},
							"language": {
								"$ref": "#/definitions/language_type"
							}
						},
						"required": [
							"url",
							"captionType",
							"language"
						]
					}
				},
				"trickPlayFiles": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"url": {
								"type": "string"
							},
							"quality": {
								"$ref": "#/definitions/video_quality_type"
							}
						},
						"required": [
							"url",
							"quality"
						]
					}
				},
				"creditCuePoints": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"url": {
								"type": "string"
							},
							"creditType": {
								"enum": [
									"intro",
									"end",
									"recap",
									"behindthescenes"
								]
							},
							"start": {
								"type": "number"
							},
							"end": {
								"type": "number"
							}
						},
						"required": [
							"creditType"
						]
					}
				},
				"dateAddedTimeStamp": {
					"duration": "must be before now",
					"type": "number"
				},
				"adBreaks": {
					"type": "array",
					"items": {
						"description": "offset from start, must be less than program duration",
						"type": "number"
					}
				}
			},
			"required": [
				"videos"
			]
		},
		"play_option": {
			"type": "object",
			"properties": {
				"license": {
					"$ref": "#/definitions/license_type"
				},
				"price": {
					"type": "number"
				},
				"quality": {
					"$ref": "#/definitions/video_quality_type"
				},
				"audioFormats": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/audio_format_type"
					}
				},
				"currency": {
					"type": "string"
				},
				"playId": {
					"type": "string"
				},
				"availabilityStartTimeStamp": {
					"description": "millis since epoch",
					"type": "number"
				},
				"availabilityEndTimeStamp": {
					"description": "millis since epoch",
					"type": "number"
				},
				"availabilityStartTime": {
					"description": "ISO-8601",
					"type": "string"
				},
				"availabilityEndTime": {
					"description": "ISO-8601",
					"type": "string"
				},
				"discreteLiveEvent": {
					"$ref": "#/definitions/live_event"
				},
				"availabilityInfo": {
					"$ref": "#/definitions/availability_info"
				}
			},
			"allOf": [{
					"if": {
						"properties": {
							"license": {
								"enum": [
									"rental",
									"purchase"
								]
							}
						}
					},
					"then": {
						"required": [
							"price"
						]
					}
				},
				{
					"if": {
						"properties": {
							"license": {
								"enum": [
									"free",
									"subscription"
								]
							}
						}
					},
					"then": {
						"not": {
							"required": [
								"price"
							]
						}
					}
				}
			],
			"required": [
				"license",
				"quality",
				"playId"
			]
		},
		"license_type": {
			"type": "string",
			"enum": [
				"free",
				"subscription",
				"rental",
				"purchase"
			]
		},
		"video_type": {
			"type": "string",
			"enum": [
				"hls",
				"smooth",
				"dash",
				"mp4",
				"mov",
				"m4v"
			]
		},
		"video_quality_type": {
			"type": "string",
			"enum": [
				"sd",
				"hd",
				"hd+",
				"uhd",
				"fhd"
			]
		},
		"audio_format_type": {
			"type": "string",
			"enum": [
				"mono",
				"stereo",
				"dolby digital",
				"dolby atmos",
				"dolby digital plus"
			]
		},
		"linear_event": {
			"type": "object",
			"properties": {
				"stationId": {
					"type": "string"
				},
				"referenceId": {
					"type": "string"
				},
				"durationInSeconds": {
					"type": "integer"
				},
				"isLive": {
					"type": "boolean"
				},
				"date": {
					"type": "string"
				},
				"times": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"attributes": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"title": {
					"type": "string"
				},
				"externalId": {
					"$ref": "#/definitions/external_id"
				},
				"startTime": {
					"type": "integer"
				},
				"endTime": {
					"type": "integer"
				}
			}
		},
		"external_id": {
			"type": "object",
			"properties": {
				"id": {
					"type": "string"
				},
				"source": {
					"$ref": "#/definitions/external_id_source_type"
				}
			},
			"required": [
				"id",
				"source"
			]
		},
		"live_event": {
			"type": "object",
			"properties": {
				"streamStart": {
					"type": "integer"
				},
				"streamEnd": {
					"type": "integer"
				},
				"streamViewable": {
					"type": "integer"
				},
				"streamUnviewable": {
					"type": "integer"
				},
				"eventStart": {
					"type": "integer"
				},
				"eventEnd": {
					"type": "integer"
				},
				"timeChangeReason": {
					"type": "string"
				}
			}
		},
		"availability_info": {
			"type": "object",
			"properties": {
				"country": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"license": {
					"type": "array",
					"items": {
						"type": "string"
					}
				},
				"platform": {
					"type": "array",
					"items": {
						"type": "string"
					}
				}
			}
		}
	}
}

```

## Sample feeds

The following examples, which pass Roku's schema validation, demonstrate the proper implementation of the various feed segments and fields. They are, however, not intended to address any particular production requirement or scenario. These examples can be used as templates for adding entries to a feed.

### Simple feed example (single content item)

> Click [here](https://github.com/rokudev/search-feed-json/archive/refs/heads/main.zip) to download this sample feed.

```
{
  "version": "1",
  "defaultLanguage": "en",
  "defaultAvailabilityCountries": [
    "us",
    "mx"
  ],
  "assets": [
    {
      "id": "shortform-voice-control",
      "type": "shortform",
      "titles": [
        {
          "value": "Voice Features",
          "language": "en"
        },
        {
          "value": "Funciones de Voz",
          "languages": ["es"]
        }
      ],
      "shortDescriptions": [
        {
          "value": "A video highlighting Direct to Play and Enhanced Voice Control features",
          "languages": ["en"]
        },
        {
          "value": "Un video que destaca las funciones Direct to Play y Enhanced Voice Control",
          "languages": ["es"]
        }
      ],
      "longDescriptions": [
        {
          "value": "A video highlighting Direct to Play and Enhanced Voice Control features on Roku",
          "languages": ["en"]
        },
        {
          "value": "Un video que destaca las funciones Direct to Play y Enhanced Voice Control en Roku",
          "languages": ["es"]
        }
      ],
      "releaseDate": "2020-01-17",
      "genres": [
        "educational"
      ],
      "advisoryRatings": [
        {
          "source": "USA_PR",
          "value": "TVG"
        },
        {
          "source": "RTC",
          "value": "A"
        }
      ],
      "images": [
        {
          "type": "main",
          "url": "https://images.sr.roku.com/test/simple-shortform.png",
          "languages": [
            "en",
            "es"
          ]
        }
      ],
      "durationInSeconds": 98,
      "content": {
        "playOptions": [
          {
            "license": "free",
            "quality": "uhd",
            "playId": "shortform-voice-control",
            "availabilityStartTimeStamp": 1565085600000,
            "availabilityEndTimeStamp": 2524546800000,
            "availabilityInfo": {
              "country": [
                "us",
                "mx"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### Advanced feed example (series, season, episode)

> Click [here](https://github.com/rokudev/search-feed-json/archive/refs/heads/main.zip) to download this sample feed.

```
{
  "version": "1",
  "defaultLanguage": "en",
  "defaultAvailabilityCountries": [
    "us",
    "mx"
  ],
  "assets": [
    {
      "id": "roku-demos-series",
      "type": "series",
      "titles": [
        {
          "value": "Roku Demo Videos",
          "languages": ["en"]
        },
        {
          "value": "Vídeos de demostración de Roku",
          "languages": ["es"]
        }
      ],
      "shortDescriptions": [
        {
          "value": "Roku regularly hosts webinars to provide the Roku development community with detailed coverage of key tools and features",
          "languages": ["en"]
        },
        {
          "value": "Roku organiza regularmente seminarios web para brindar a la comunidad de desarrollo de Roku una cobertura detallada de las herramientas y características clave.",
          "languages": ["es"]
        }
      ],
      "longDescriptions": [
        {
          "value": "Roku regularly hosts webinars to provide the Roku development community with detailed coverage of key Roku development tools and features. The webinars are usually led by Roku engineers or other subject matter experts, and they typically include a presentation explaining the importance of the feature, a demo showing how it works, and Q&A session for addressing questions from the Roku developer community. Webinars also include Roku's annual developer summit.",
          "languages": ["en"]
        },
        {
          "value": "Roku organiza seminarios web con regularidad para brindar a la comunidad de desarrollo de Roku una cobertura detallada de las herramientas y funciones clave de desarrollo de Roku. Los seminarios web generalmente están dirigidos por ingenieros de Roku u otros expertos en la materia, y generalmente incluyen una presentación que explica la importancia de la función, una demostración que muestra cómo funciona.",
          "languages": ["es"]
        }
      ],
      "releaseDate": "2020-01-17",
      "genres": [
        "educational"
      ],
      "advisoryRatings": [
        {
          "source": "USA_PR",
          "value": "TVG"
        },
        {
          "source": "RTC",
          "value": "A"
        }
      ],
      "images": [
        {
          "type": "main",
          "url": "https://images.sr.roku.com/test/advanced-series.png",
          "languages": [
            "en",
            "es"
          ]
        }
      ]
    },
    {
      "type": "season",
      "titles": [
        {
          "value": "Demos Season 1",
          "languages": ["en"]
        },
        {
          "value": "Demostración temporada 1",
          "languages": ["es"]
        }
      ],
      "shortDescriptions": [
        {
          "value": "Season 1 of the Roku Demo and Webinars series",
          "languages": ["en"]
        },
        {
          "value": "Temporada 1 de la serie Roku Demo and Webinars",
          "languages": ["es"]
        }
      ],
      "longDescriptions": [
        {
          "value": "Season 1 of the Roku Demo and Webinars series",
          "languages": ["en"]
        },
        {
          "value": "Temporada 1 de la serie Roku Demo and Webinars",
          "languages": ["es"]
        }
      ],
      "seasonInfo": {
        "seriesId": "roku-demos-series",
        "seasonNumber": 1
      },
      "releaseDate": "2020-01-17",
      "genres": [
        "educational"
      ],
      "advisoryRatings": [
        {
          "source": "USA_PR",
          "value": "TVG"
        },
        {
          "source": "RTC",
          "value": "A"
        }
      ],
      "images": [
        {
          "type": "main",
          "url": "https://images.sr.roku.com/test/advanced-season.png",
          "languages": [
            "en",
            "es"
          ]
        }
      ]
    },
    {
      "id": "voice-control-demo-episode",
      "type": "episode",
      "titles": [
        {
          "value": "Voice Features",
          "languages": ["en"]
        },
        {
          "value": "Funciones de Voz",
          "languages": ["es"]
        }
      ],
      "shortDescriptions": [
        {
          "value": "A video highlighting Direct to Play and Enhanced Voice Control features",
          "languages": ["en"]
        },
        {
          "value": "Un video que destaca las funciones Direct to Play y Enhanced Voice Control",
          "languages": ["es"]
        }
      ],
      "longDescriptions": [
        {
          "value": "A video highlighting Direct to Play and Enhanced Voice Control features. This helps developers understand how this enhances the user experience",
          "languages": ["en"]
        },
        {
          "value": "Un video que destaca las funciones Direct to Play y Enhanced Voice Control. Esto ayuda a los desarrolladores a comprender cómo mejora la experiencia del usuario.",
          "languages": ["es"]
        }
      ],
      "episodeInfo": {
        "seriesId": "roku-demos-series",
        "episodeNumber": 1
      },
      "releaseDate": "2020-01-17",
      "genres": [
        "educational"
      ],
      "advisoryRatings": [
        {
          "source": "USA_PR",
          "value": "TVG"
        },
        {
          "source": "RTC",
          "value": "A"
        }
      ],
      "images": [
        {
          "type": "main",
          "url": "https://images.sr.roku.com/test/advanced-episode.png",
          "languages": [
            "en",
            "es"
          ]
        }
      ],
      "durationInSeconds": 98,
      "content": {
        "playOptions": [
          {
            "license": "free",
            "quality": "uhd",
            "playId": "shortform-voice-control",
            "availabilityStartTimeStamp": 1565085600000,
            "availabilityEndTimeStamp": 2524546800000,
            "availabilityInfo": {
              "country": [
                "us",
                "mx"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### TMS feed example (movies, series, episode)

> Click [here](https://github.com/rokudev/search-feed-json/archive/refs/heads/main.zip) to download this sample feed. The prefixes in the IDs indicate the content type (MV=movie, SH=series, EP=episode).

```
{
  "version": "1.0",
  "defaultLanguage": "en",
  "defaultAvailabilityCountries": [
    "US"
  ],
  "assets": [
    {
      "id": "MV000833410000",
      "type": "externalIdOnly",
      "externalIdSource": "TMS",
      "content": {
        "playOptions": [
          {
            "playId": "11213123",
            "license": "subscription",
            "quality": "FHD",
            "availabilityInfo": {
              "country": [
                "MX"
              ]
            }
          }
        ]
      }
    },
    {
      "id": "SH000833410000",
      "type": "externalIdOnly",
      "externalIdSource": "TMS"
    },
    {
      "id": "EP000833410000",
      "type": "externalIdOnly",
      "externalIdSource": "TMS",
      "content": {
        "playOptions": [
          {
            "playId": "11213123",
            "license": "subscription",
            "quality": "FHD"
          }
        ]
      }
    }
  ]
}
```
