# Avails and Committed Title List specifications

## Avails and Committed Title Lists for The Roku Channel

Roku requests an initial launch list of titles/episodes/shortForm videos in the current library that are available to Roku at the time of onboarding and a schedule when the content will be refreshed. For ongoing production, Roku requests that a Committed Title List be provided **60** days prior to licensing window start and the content be delivered in accordance with [The Roku Channel Ingest Specification](https://go.roku.com/ingest-ovp-specs) at least 30 days before licensing window start to allow ample time for selection, ingest, processing, and QC of the content before it goes live on The Roku Channel.

### Roku content policies

#### Ad-supported content on The Roku Channel

The Roku Channel is looking for ad-supported content that is appropriate for our users and advertisers – for example, The Roku Channel does not want ad-supported content that contains excessive nudity or extreme/graphic violence.  Please use your best judgement when sharing content. If an asset is questionable, please find an alternative to share. We reserve the right to remove or reject any content that we deem inappropriate.

#### Kids directed content policy

“Kids-Directed Content” is content that either: (i) is directed to children as defined by the applicable law of the jurisdiction in which the content is shown (e.g., The Children's Online Privacy Protection Act); or (ii) was made for viewing primarily by children within the jurisdiction in which the content is shown.

- You may NOT submit or distribute Kids-Directed content without Roku’s express written approval.
- Roku must be made aware of the intent to submit or distribute Kids-Directed content via submission of the avails and Committed Title List document populating the columns outlined below:
  - Kids-Directed column must be populated with the value "true"
  - The Rating Source column must be populated with a valid Rating Source
  - The Rating Value column must be populated with a valid parental [Rating](#ratings) from that Rating Source
  - “UNRATED” and “Not Rated” are not acceptable ratings for kids directed content

##### Optional age demographics tags

Additional tags can be provided to help categorize kids-directed content around age demographics. Please use these tags to define different content directed age groups:

| Ages     | Tags        |
| -------- | ----------- |
| Ages 1-3 | ages_1-3    |
| Ages 4-6 | ages_4-6    |
| Ages 7-9 | ages_7-9    |
| Ages 10+ | ages_10plus |

### Avails

“Avails” is short for availability. It refers to the list of available content for licensing or distribution. The avails list is shared with Roku to aid in understanding what content is currently available for acquisition or distribution. Avails typically include information about the titles, such as the title name, genre, duration, rights availability (e.g., exclusive or non-exclusive rights), and any other relevant details about the content. Avails should be sent to the Content Partnerships team ([trcpartnersupport@roku.com](mailto:trcpartnersupport@roku.com)) for Selections review. Once the Content Partnerships team has reviewed the Avails, they will provide the Avails sheet back with Selections marked for review and any revisions. The agreed-upon list of Selected content becomes the Committed Title List

### Committed Title List:

A “Committed title list” (CTL) is a comprehensive list of all the titles that have been committed and made available to Roku as agreed upon through the Selections process. Similar to avails, a CTL includes information about each title, such as the title name, genre, duration, and any other relevant details. CTLs are used for content management purposes and provide an overview of the committed content catalog from the content Partner. CTLs should be finalized for ingestion into Roku's Rights Management system at least 60 days prior to the start date of the titles in the list. The data provided in the CTL will control the availability of titles on The Roku Channel.

*The descriptive metadata (Title, Synopsis, Genre, etc.) provided in the avails and/or title list will be used for selection purposes only. Descriptive metadata must be included at the time the content is delivered in accordance with [The Roku Channel ingest specifications](https://go.roku.com/ingest-ovp-specs).*

### Availability windows

An availability window is the length of time during which a title is viewable by a user on The Roku Channel. Availability windows can include several different attributes in a number of combinations. Each unique combination of attributes bound by a start and end time is considered its own availability window. Each availability window should be represented in the avails or Committed Title List on its own row. The availability attributes currently supported by Roku are:

- License Type
- Territory
- Language

#### Availability date and time

Roku has the ability for content to display on-device and for user playback at a specific starting time. By default, content will go into window at 12:00 am (midnight) and expire at 11:59:59 pm in the users’ time zone.

If content is to go live at a time other than midnight or expire at a time other than 11:59:59 pm, the license window start or end values in the inbound metadata must include the desired times.

There are two types of specific time designations – relative and absolute.

- Relative Time – a Saturday night premiere of a movie goes into window at 9pm local time for all users. A user in the Eastern Time Zone watches at 9pm but a user in the Pacific Time Zone, at the exact same moment (6pm PT), cannot watch that content.
- Absolute Time – a new episode of a series goes into window at 9pm Eastern and becomes immediately available across all time zones. A user in the Pacific Time Zone can watch the content at 6 pm local time.

 While time settings are dictated by the content owner, Roku will need the metadata as follows:

- If the content has a relative start time, that time must be indicated in the ingest metadata and formatted as “yyyy-mm-ddThh:mm:ss” (2019-11-01T21:00:00)
- If the content has an absolute start time, that time must be indicated in the ingest metadata. The time must be presented as UTC time and formatted as “yyyy-mm-ddThh:mm:ssZ” (2019-11-02T01:00:00Z).
- In this example, 9 pm Eastern Time on November 1 is 1 am UTC (https://www.thetimezoneconverter.com)
- If the metadata arrives without a time, Roku will assume a relative start time of 12:00:00 am and a relative end time of 11:59:59 pm

### Submitting Excel Avails/Committed Title Lists

Avails must be submitted via email to [trcpartnersupport@roku.com](mailto:trcpartnersupport@roku.com) for selection review. Committed Title Lists must be finalized at least 60 days prior to the intended licensing window start date of the titles within the list. In certain cases we may be able to accept avails and Committed Title Lists via Aspera. Please reach out to your Roku representative for current delivery options.

When submitting avails and Committed Title Lists via Excel workbook, all required fields must be populated. Roku has provided hints on row 2 of the Roku avails and Committed Title List template to highlight the required cells and any special formatting needed for each cell. Please refer to these hints when filling out the Roku avails and Committed Title List template. Other considerations when filling out the Roku Avails and Committed Title List Excel sheet include:

- All data MUST begin on row 3. DO NOT DELETE THE HINTS ON ROW 2
- Any formulas used must be converted to text prior to submission. Inclusion of a formula will result a rejection of the avails and Committed Title List sheet
- Do not link to external data or Excel workbooks. All data must be self contained within the Excel workbook delivered to Roku
- Do not add additional sheets to the workbook
- Do not add additional columns to the workbook
- Do not change any of the column header names
- Do not supply a value of “N/A” or “n/a”. Required cells should contain valid data and optional cells may be left blank
- Each row is considered a unique availability window for an episode/movie/shortForm video
- Do not leave a blank row between entries in a worksheet. The system will terminate processing at the first empty row
- Avails and Committed Title List sheets must be saved with .xlsx extension

## Avails and Committed Title List sheet field definitions

### Availability attribute fields


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Description</strong></th>
<th><strong>Type</strong></th>
<th><strong>Accepted Values</strong></th>
<th><strong>Required</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Partner</td>
<td>Name of content owner/studio/network availing the content to The Roku Channel</td>
<td>string</td>
<td>Example:<br />Roku Originals</td>
<td>required</td>
</tr>
<tr>
<td>Content Type</td>
<td>Describes the content type of the program as defined below:<br /><ul><li><strong>episode</strong> - TV program that is structured in a series/season/episode hierarchy</li><li><strong>movie</strong> - Full length, long form, stand-alone program that is not intended to be nested in a series/season/episode hierarchy and exceeds roughly 15 minutes run time including stand-alone TV Specials</li><li><strong>shortForm</strong> - Short duration, stand-alone program that does not exceed roughly 15 minutes run time and is not intended to be nested in a series/season/episode hierarchy</li></ul></td>
<td>enum</td>
<td>movie, episode, shortForm</td>
<td>required</td>
</tr>
<tr>
<td>License Type</td>
<td>Available distribution rights for the content. Multiple rights may be submitted on the same row so long as all availability attributes are identical across the rights listed. The License Type provided in the Avails or Committed Title List must adhere to the distribution rights for the content as it pertains to the agreement signed with The Roku Channel. <br /><ul><li><strong>AVOD</strong> – Ad-Supported Video on Demand. Video will play for free for all users and will contain advertisements</li><li><strong>SVOD</strong> – Subscription Video on Demand. Video will play for users with an active subscription. <em>Only to be used by Premium Subscriptions Partners on The Roku Channel</em></li><li><strong>FVOD</strong> – Free Video on Demand. Video will play for free for all users without monetization. FVOD windows must fall within an active SVOD window. <em>Only to be used by Premium Subscriptions Partners on The Roku Channel</em></li><li><strong>Linear OTT</strong> - Over-the-top linear streaming rights for inclusion on Roku-built channels</li></ul></td>
<td>enum</td>
<td>AVOD, SVOD, FVOD, Linear OTT</td>
<td>required</td>
</tr>
<tr>
<td>Excluded Rights</td>
<td>Distribution exclusions for the content. Multiple exclusions may be submitted on the same row so long as all availability attributes are identical across the rights listed.<br /><ul><li><strong>AVOD</strong> – Ad-Supported Video on Demand. Video will play for free for all users and will contain advertisements</li><li><strong>SVOD</strong> – Subscription Video on Demand. Video will play for users with an active subscription. <em>Only to be used by Premium Subscriptions Partners on The Roku Channel</em></li><li><strong>FVOD</strong> – Free Video on Demand. Video will play for free for all users without monetization. FVOD windows must fall within an active SVOD window. <em>Only to be used by Premium Subscriptions Partners on The Roku Channel</em></li><li><strong>Linear OTT</strong> - Over-the-top linear streaming rights for inclusion on Roku-built channels</li></ul></td>
<td>enum</td>
<td>AVOD, SVOD, FVOD, Linear OTT</td>
<td>optional</td>
</tr>
<tr>
<td>Start Date</td>
<td>Start of availability in YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS format. If the content has no set Start Date, “open” is an acceptable value. Start Dates without time values will assume a relative start time of 12:00:00 am on the Start Date listed</td>
<td>date string</td>
<td>YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or open</td>
<td>required</td>
</tr>
<tr>
<td>End Date</td>
<td>End of availability in YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS format. If the content has no set End Date, “open” or “end of term” are acceptable values. End Dates without time values will assume relative end times of 11:59:59 pm on the End Date listed</td>
<td>date string</td>
<td>YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, open, or end of term</td>
<td>required</td>
</tr>
<tr>
<td>Language</td>
<td>The language(s) that will be made available to users of The Roku Channel. Language values must conform to one of the enumerated <a href="#language-codes">supported language codes</a>. Multiple language/localizationType combinations may be provided on the same row so long as all availability attributes are identical across the languages listed. When multiple languages are provided, the localization type related to that language must be included by appending a colon (":") and the localization type as defined below. <br /><ul><li><strong>dub</strong> – indicates the language property refers to an audio track. Applicable to original voice audio</li><li><strong>sub</strong> – indicates the language property refers to subtitle</li><li><strong>subdub</strong> – includes both subtitles and dubbed audio</li><li><strong>any</strong> – includes any combination of subtitles or dubbed audio (whatever is available)</li></ul></td>
<td>enum</td>
<td>Examples:<br />en:dub, fr:sub, de:subdub, es-mx:any</td>
<td>required</td>
</tr>
<tr>
<td>Localization Type</td>
<td>Applies to the Language column when only a single language code is provided. Indicates that the language property refers to either an audio track or a text track (subtitle). Localization Type would be “dub” for original voice audio. Valid values defined below:<br /><ul><li><strong>dub</strong> – indicates the language property refers to an audio track. Applicable to original voice audio</li><li><strong>sub</strong> – indicates the language property refers to subtitle</li><li><strong>subdub</strong> – includes both subtitles and dubbed audio</li><li><strong>any</strong> – includes any combination of subtitles or dubbed audio (whatever is available)</li></ul></td>
<td>enum</td>
<td>sub, dub, subdub, any</td>
<td>required when providing a single language in the Language column</td>
</tr>
<tr>
<td>Excluded Languages</td>
<td>The language(s) that must not be made available to users of The Roku Channel. Language values must conform to one of the enumerated <a href="#language-codes">supported language codes</a>. Multiple language combinations may be provided on the same row so long as all availability attributes are identical across the languages listed.</td>
<td>enum</td>
<td>Example:<br />en, de</td>
<td>optional</td>
</tr>
<tr>
<td>Territory</td>
<td><a href="https://www.iso.org/obp/ui/#search">ISO 3166-1 alpha-2</a> country code for the country or territory in which the content may be made available. Multiple territories may be submitted on the same row so long as all availability attributes are identical across the territories listed.</td>
<td>enum</td>
<td>Example:<br />US, CA, GB, MX, LATAM, WW</td>
<td>required</td>
</tr>
<tr>
<td>Excluded Territories</td>
<td><a href="https://www.iso.org/obp/ui/#search">ISO 3166-1 alpha-2</a> country code for the country or territory for which the content should NOT be made available. Multiple territories may be excluded.</td>
<td>enum</td>
<td>Example:<br />DE, FR</td>
<td>optional</td>
</tr>
</tbody>
</table>


### Title metadata fields


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Description</strong></th>
<th><strong>Type</strong></th>
<th><strong>Accepted Values</strong></th>
<th><strong>Required</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Series Title</td>
<td>Title of series for episodic TV content.  Include only the name of the series as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, or video format. Examples: (Classic), (1987), or (Season #)</td>
<td>string</td>
<td>Example:<br />Die Hart</td>
<td>required for tv</td>
</tr>
<tr>
<td>Series ID</td>
<td>Immutable, unique identifier for a TV series. IDs are to be generated and supplied by the Partner for content that is availed and delivered to Roku. The IDs in the avails and Committed Title List document should match the IDs provided in the metadata at the time of ingest into The Roku Channel.<br /><ul><li>Must not be the same as the unique episode ID</li><li>Must be included with all episodes of a series</li><li>Must be consistent for all episodes of a series</li><li>Must not exceed 50 characters</li><li>Allowable characters:  alphanumeric characters, hyphens, and underscores only</li></ul></td>
<td>string</td>
<td>Example:<br />diehartshow</td>
<td>required for tv<br />50 characters maximum</td>
</tr>
<tr>
<td>Title</td>
<td>Title of the movie, episode, or shortForm video.  Include only the name of the content as it should appear on platform. Do not include non-title parentheticals such as indicator of original/remake, year of release, season, or video format. Examples: (Classic), (1987), (Season 1), or (HD)</td>
<td>string</td>
<td>Example:<br />Pilot</td>
<td>required</td>
</tr>
<tr>
<td>Title ID</td>
<td>Immutable, unique identifier for a movie, episode, or shortForm video. IDs are to be generated and supplied by the Partner for content that is availed and delivered to Roku. The IDs in the avails and Committed Title List document should match the IDs provided in the metadata at the time of ingest into The Roku Channel. This will aid in tracking the content throughout Roku’s pipeline from avails and Committed Title List submission through publication on The Roku Channel.<br /><ul><li>Must not exceed 50 characters</li><li>Allowable characters:<br />alphanumeric characters, hyphens, and underscores only</li></ul></td>
<td>string</td>
<td>Example:<br />dieharts1e1</td>
<td>required<br />50 characters maximum</td>
</tr>
<tr>
<td>Season Number</td>
<td>Season number for the episode. Must follow the original broadcast/distribution sequence of seasons and must be a number. Letters are not allowed</td>
<td>integer</td>
<td>#, ##, …</td>
<td>required for tv</td>
</tr>
<tr>
<td>Episode Number</td>
<td>Episode number. Must follow the original broadcast/distribution sequence of episodes within a season and must be a number. Letters are not allowed. <br />Do not use production numbers (e.g. 201 for season 2 episode 1)</td>
<td>integer</td>
<td>#, ##, …</td>
<td>required for tv</td>
</tr>
<tr>
<td>Country of Origin</td>
<td>Defines the primary country where the film was produced and where the main creators, crew, and producers are established. Value must conform to one of the supported country codes as defined in the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166-1 alpha 2</a> list of 2-character country codes. Please include 1 country only</td>
<td>enum</td>
<td>Example:<br />US, CA, DE</td>
<td>required<br />1 country only</td>
</tr>
<tr>
<td>Original Spoken Language</td>
<td>Language in which the content was produced. This is usually the primary language of the country of origin and the language that synchronizes exactly with the movements of the performers mouths as they speak. Must conform to one of the enumerated <a href="#language-codes">supported language codes</a>. May include multiple languages separated by commas.</td>
<td>enum</td>
<td>Example:<br />en-us, fr-ca<br /></td>
<td>required</td>
</tr>
<tr>
<td>Run Time</td>
<td>Runtime of the content in whole minutes. Minimum runtime is 1</td>
<td>integer</td>
<td>Example:<br />22</td>
<td>required</td>
</tr>
<tr>
<td>Format</td>
<td>Highest video resolution available for the content. All lower resolutions will be assumed*</td>
<td>enum</td>
<td>SD, HD, UHD</td>
<td>required</td>
</tr>
<tr>
<td>DBO</td>
<td>Domestic Box Office Gross</td>
<td>string</td>
<td>$2,000,000</td>
<td>optional</td>
</tr>
<tr>
<td>Closed Captioning</td>
<td>Communicating if captions are included with the content per <a href="https://www.fcc.gov/consumers/guides/captioning-internet-video-programming">FCC guidelines</a>. If captions are not included with the content, a Caption Exemption value must be provided</td>
<td>Boolean</td>
<td>true<br />false</td>
<td>required</td>
</tr>
<tr>
<td>Caption Exemption</td>
<td>US avails only. FCC exemption for closed caption requirement. Allowable value and their definitions:<br /><ol><li>The content has never aired on television in the United States.</li><li>The content has only aired on television in the United States without captions.</li><li>The content has not aired on television in the United States with captions since September 30, 2012.</li><li>The content does not consist of full-length video programming.</li><li>The content does not fall within a category of online programming that requires captions under FCC regulations (49 C.F.R. § 79.4(b)).</li><li>The FCC and/or U.S. Congress has granted an exemption from captioning requirements for this content.</li></ol></td>
<td>enum</td>
<td>1, 2, 3, 4, 5, 6</td>
<td>required if Caption Included is false</td>
</tr>
<tr>
<td>Audio Description** (see note below)</td>
<td>Communicating if an audio description track is included with the content. <a href="https://www.fcc.gov/audio-description">Audio description</a> (also referred to as video description) is audio-narrated descriptions of a television program's key visual elements. These descriptions are inserted into natural pauses in the program's dialogue. Audio description makes television programming more accessible to individuals who are blind or visually impaired. If Audio Description is required for content, and is not provided, an Audio Description Exemption must be included.</td>
<td>Boolean</td>
<td>true<br />false</td>
<td>optional</td>
</tr>
<tr>
<td>Audio Description Exemption** (see note below)</td>
<td>Exemption reason for not providing audio description track where required.</td>
<td>string</td>
<td></td>
<td>optional</td>
</tr>
<tr>
<td>Original Release Date</td>
<td>Original date content was first made available in any presentation. Must include year of release at a minimum</td>
<td>date string</td>
<td>YYYY-MM-DD or YYYY</td>
<td>required</td>
</tr>
<tr>
<td>Genre</td>
<td>Genre classification of the content. May provide multiple genres separated by comma</td>
<td>enum</td>
<td>See <a href="#genres">Genres</a> for allowed values</td>
<td>required</td>
</tr>
<tr>
<td>Tags</td>
<td>Free form field to provide keywords, tags, categories, or keywords to be used to surface content on The Roku Channel UI. Please see our <a href="https://roku-ent.readme.io/dev/docs/content-tags-and-metadata">Best Practices</a> page on how best to provide tags to The Roku Channel</td>
<td>string</td>
<td>exciting, timely, political</td>
<td>optional</td>
</tr>
<tr>
<td>Rating Source</td>
<td>Rating system applied to the edit of title within territory of avail. Rating systems should be formatted and paired with Rating Value as per <a href="#ratings">Ratings</a></td>
<td>enum</td>
<td>See <a href="#ratings">Ratings</a> for allowed values</td>
<td>optional</td>
</tr>
<tr>
<td>Rating Value</td>
<td>Value representing the rating within the specified Rating Source. Ratings should be formatted and paired with Rating Source as per <a href="#ratings">Ratings</a></td>
<td>enum</td>
<td>See <a href="#ratings">Ratings</a> for allowed values</td>
<td>optional</td>
</tr>
<tr>
<td>Kids-Directed</td>
<td>Indicator that the content is intended for young audiences/family audiences. Must adhere to guidelines defined in <a href="#kids-directed-content-policy">Kids Directed Content Policy</a></td>
<td>Boolean</td>
<td>true, false</td>
<td>optional</td>
</tr>
<tr>
<td>Recommended Age Group</td>
<td>When Kids Directed is True, a recommended age range for the content can be supplied. Only one Recommended Age Group allowed. Allowable values:<br /><ul><li><strong>ages_1-3</strong> - For viewers 1 to 3 years of age</li><li><strong>ages_4-6</strong> - For viewers 4 to 6 years of age</li><li><strong>ages_7-9</strong> - For viewers 7 to 9 years of age</li><li><strong>ages_10plus</strong> - For viewers ages 10 and up</li></ul></td>
<td>enum</td>
<td>ages_1-3, ages_4-6, ages_7-9, ages_10plus</td>
<td>optional Used when Kids-Directed is true</td>
</tr>
<tr>
<td>Main Cast</td>
<td>Top billed cast of content separated by comma in Firstname Lastname format</td>
<td>list</td>
<td>Example:<br />Kevin Hart, John Travolta</td>
<td>required</td>
</tr>
<tr>
<td>Synopsis</td>
<td>A short synopsis of the content being availed for the purposes of content selection. Not to exceed 250 characters</td>
<td>string</td>
<td></td>
<td>required</td>
</tr>
<tr>
<td>External ID Source</td>
<td>Source entity for external ID provided. Allowable values:<br /><ul><li><strong>TMS</strong> – Gracenote ID</li><li><strong>IMDb</strong> – IMDb ID</li><li><strong>Wiki</strong> – Wikipedia ID</li></ul><p><em><em>Roku does not support the playback of UHD/4K content at this time but can accept UHD/4K as a source to make available for playback in the future.</em></p><p></em>*<em>The Roku Channel prefers to make as much content accessible to as many users as possible. Audio Description, while not currently required for all content by the FCC at this time, may be in the future.</em><br />May include IDs from multiple sources, separated by commas. ID originating from that source is indicated by appending a colon (":") and the ID</td>
<td>string</td>
<td>Example:<br />TMS, IMDb, Wiki<br />IDs from multiple sources examples:<br />TMS:E12345678, IMDb:tt12345678, Wiki:benson_s1_e1</td>
<td>optional</td>
</tr>
<tr>
<td>Series External ID</td>
<td>3rd party identifier of the series</td>
<td>string</td>
<td>Example:<br />diehartshowExtId</td>
<td>optional</td>
</tr>
<tr>
<td>External ID</td>
<td>3rd party identifier of the content</td>
<td>string</td>
<td>Example:<br />dieharts1e1ExtId</td>
<td>optional</td>
</tr>
<tr>
<td>Screener Link</td>
<td>URL link to stream or download a screener for the content. Any passwords required should also be included. Inclusion of a screener is helpful for content selection</td>
<td>string</td>
<td>Example:<br />https://urlLinkToScreener<br />password: 1234</td>
<td>optional</td>
</tr>
<tr>
<td>Exclusive</td>
<td>Indicator that the content is available exclusively on The Roku Channel</td>
<td>Boolean</td>
<td>true, false</td>
<td>optional</td>
</tr>
<tr>
<td>Notes</td>
<td>Free form field for additional avail notes. For linear content, runs and telecast restrictions, or any other specifics not captured in the avails and Committed Title List document should be recorded here</td>
<td>string</td>
<td></td>
<td>optional</td>
</tr>
<tr>
<td>Merchant of Record</td>
<td>Name of the entity to which financial transactions should be attributed if other than the Content Partner listed</td>
<td>string</td>
<td>Example:<br />Roku</td>
<td>optional</td>
</tr>
<tr>
<td>Day Parting</td>
<td>For Linear content ONLY<br />Any dayparting rules for the content</td>
<td>string</td>
<td></td>
<td>optional</td>
</tr>
</tbody>
</table>











### Ratings

A valid film or TV rating from the rating authority (Rating Source) of the Territory the title will be available in shall be provided for each movie, episode, or shortForm video. If the title has not been rated by that Territory’s official rating authority, a rating of NR (Not Rated) may be provided, however please note that Roku strongly prefers an actual rating on all content. Titles with a rating of NR (Not Rated) will be subject to manual verification which can delay the selection process and publishing to The Roku Channel. Discoverability on The Roku Channel may also be impacted for titles with the NR (Not Rated) rating and placement within the Kids & Family experience will be prohibited. In lieu of the NR (Not Rated) rating, the title should be self rated using the USA_PR rating system. Guidelines pertaining to the USA_PR ratings can be found [here](http://tvguidelines.org/)

#### Rating values by rating system and country


<table>
<thead>
<tr>
<th><strong>Ratings Authority and Territory</strong></th>
<th><strong>Country</strong></th>
<th><strong>ratingSystem</strong></th>
<th><strong>Rating Value</strong></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>British Board of Film Classification<br />United Kingdom</td>
<td>GB</td>
<td>BBFC</td>
<td>U<br />PG<br />12A</td>
<td>12-A<br />12<br />15</td>
<td>18<br />NR<a href="#unrated-vs-not-rated">*</a><br />R18<br />R-1</td>
</tr>
<tr>
<td>Canadian Home Video Rating System<br />Canada</td>
<td>CA</td>
<td>CHVRS</td>
<td>G<br />PG<br />14A</td>
<td>14-A<br />18A<br />18-A</td>
<td>NR<br />RE</td>
</tr>
<tr>
<td>Motion Picture Associate of America<br />United States</td>
<td>US</td>
<td>MPAA</td>
<td>G<br />PG<br />PG13</td>
<td>PG-13<br />R<br />NC-17</td>
<td>NC17<br />NR</td>
</tr>
<tr>
<td>Canadian Parental Rating<br />Canada</td>
<td>CA</td>
<td>CPR</td>
<td>14+<br />18+<br />C</td>
<td>C8<br />C-8<br />G</td>
<td>NR<br />PG<br />E</td>
</tr>
<tr>
<td>Dirección General de Radio, Televisión y Cinematografía<br />Mexico</td>
<td>MX</td>
<td>RTC</td>
<td>AA<br />A<br />B</td>
<td>B-15<br />B15<br />C</td>
<td>DD<br />D<br />NR</td>
</tr>
<tr>
<td>USA Parental Rating (V-Chip)<br />United States</td>
<td>US</td>
<td>USA_PR</td>
<td>TV-Y<br />TVY<br />TV-Y7<br />TVY7</td>
<td>TV-G<br />TVG<br />TV-PG<br />TVPG</td>
<td>TV-14<br />TV14<br />TV-MA<br />TVMA<br />NR</td>
</tr>
</tbody>
</table>


### Genres

Below is the complete list of supported Genres for The Roku Channel


<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>action<br />action sports<br />adventure<br />aerobics<br />agriculture<br />animals<br />animated<br />anime<br />anthology<br />archery<br />arm wrestling<br />art<br />arts/crafts<br />auction<br />auto<br />auto racing<br />aviation<br />awards<br />badminton<br />ballet<br />baseball<br />basketball<br />beach soccer<br />beach volleyball<br />biathlon<br />bicycle<br />bicycle racing<br />billiards<br />biography<br />blackjack<br />boat<br />boat racing<br />bobsled<br />bodybuilding<br />bowling<br />boxing<br />bullfighting<br />bus./financial<br />canoe<br />card games<br />cheerleading<br />children<br />children-music<br />children-special<br />children-talk<br />collectibles<br />comedy<br />comedy drama<br />community<br />computers<br />consumer<br />cooking<br />cricket</td>
<td>crime<br />crime drama<br />curling<br />dance<br />dark comedy<br />darts<br />debate<br />diving<br />docudrama<br />documentary<br />dog racing<br />dog show<br />dog sled<br />drag racing<br />drama<br />educational<br />entertainment<br />environment<br />equestrian<br />erotic<br />event<br />exercise<br />fantasy<br />faith<br />fashion<br />fencing<br />field hockey<br />figure skating<br />fishing<br />football<br />food<br />fundraiser<br />gaelic football<br />game show<br />gaming<br />gay/lesbian<br />golf<br />gymnastics<br />handball<br />health<br />historical drama<br />history<br />hockey<br />holiday<br />holiday music<br />holiday music special<br />holiday special<br />holiday-children<br />holiday-children special<br />home improvement<br />horror<br />horse</td>
<td>house/garden<br />how-to<br />hunting<br />hurling<br />hydroplane racing<br />indoor soccer<br />interview<br />intl soccer<br />kayaking<br />lacrosse<br />law<br />luge<br />martial arts<br />medical<br />military<br />miniseries<br />mixed martial arts<br />motorcycle<br />motorcycle racing<br />motorsports<br />mountain biking<br />music<br />music special<br />music talk<br />musical<br />musical comedy<br />mystery<br />nature<br />news<br />newsmagazine<br />olympics<br />opera<br />outdoors<br />parade<br />paranormal<br />parenting<br />performing arts<br />playoff<br />sports<br />poker<br />politics<br />polo<br />pool<br />pro wrestling<br />public affairs<br />racquet<br />reality<br />religious<br />ringuette<br />rodeo<br />roller derby<br />romance<br />romance comedy</td>
<td>rowing<br />rugby<br />running<br />sailing<br />science<br />science fiction<br />self improvement<br />shooting<br />shopping<br />sitcom<br />skateboarding<br />skating<br />skeleton<br />skiing<br />snooker<br />snowboarding<br />snowmobile<br />soap<br />soap special<br />soap talk<br />soccer<br />softball<br />special<br />speed skating<br />sports<br />sports talk<br />squash<br />standup<br />sumo wrestling<br />surfing<br />suspense<br />swimming<br />table tennis<br />talk<br />technology<br />tennis<br />theater<br />thriller<br />track/field<br />travel<br />triathlon<br />variety<br />volleyball<br />war<br />water polo<br />water skiing<br />watersports<br />weather<br />weightlifting<br />western<br />wrestling<br />yacht racing</td>
</tr>
</tbody>
</table>


### Language codes

The below list is the full set of language codes Roku currently supports for content ingest. This list is a simplified version of the [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) specification.

| Language Code | Language                 | Language Code | Language                       |
| ------------- | ------------------------ | ------------- | ------------------------------ |
| af            | Afrikaans                | km            | Khmer                          |
| sq            | Albanian                 | rw            | Kinyarwanda                    |
| am            | Amharic                  | ko            | Korean                         |
| ar            | Arabic                   | ko-kr         | Korean (Korea)                 |
| ar-dz         | Arabic (Algeria)         | ku            | Kurdish                        |
| ar-bh         | Arabic (Bahrain)         | ky            | Kyrgyz                         |
| ar-eg         | Arabic (Egypt)           | lo            | Lao                            |
| ar-iq         | Arabic (Iraq)            | la            | Latin                          |
| ar-jo         | Arabic (Jordan)          | lv            | Latvian                        |
| ar-kw         | Arabic (Kuwait)          | lt            | Lithuanian                     |
| ar-lb         | Arabic (Lebanon)         | mk            | Macedonian                     |
| ar-ly         | Arabic (Libya)           | mg            | Malagasy                       |
| ar-ma         | Arabic (Morocco)         | ms            | Malay                          |
| ar-om         | Arabic (Oman)            | ms-my         | Malay (Malaysia)               |
| ar-qa         | Arabic (Qatar)           | ml            | Malayalam                      |
| ar-sa         | Arabic (Saudi Arabia)    | mt            | Maltese                        |
| ar-sy         | Arabic (Syria)           | mr            | Marathi                        |
| ar-tn         | Arabic (Tunisia)         | mn            | Mongolian                      |
| ar-ae         | Arabic (U.A.E.)          | nd            | Ndebele                        |
| ar-ye         | Arabic (Yemen)           | ne            | Nepali                         |
| hy            | Armenian                 | no            | Norwegian                      |
| as            | Assamese                 | no-no         | Norwegian (Norway)             |
| az            | Azerbaijani              | or            | Oriya                          |
| eu            | Basque                   | om            | Oromo                          |
| be            | Belarusian               | ps            | Pashto                         |
| bn            | Bengali                  | fa            | Persian (Farsi)                |
| bh            | Bihari                   | pl            | Polish                         |
| bs            | Bosnian                  | pl-pl         | Polish (Poland)                |
| bg            | Bulgarian                | pt            | Portuguese                     |
| bg-bg         | Bulgarian (Bulgary)      | pt-br         | Portuguese (Brazil)            |
| my            | Burmese                  | pt-pt         | Portuguese (Portugal)          |
| ca            | Catalan                  | pa            | Punjabi                        |
| zh            | Chinese                  | qu            | Quechua                        |
| zh-hk         | Chinese (Hong Kong)      | rm            | Rhaeto-Romanic                 |
| zh-cn         | Chinese (PRC)            | ro            | Romanian                       |
| zh-sg         | Chinese (Singapore)      | ro-md         | Romanian (Republic of Moldova) |
| zh-tw         | Chinese (Taiwan)         | ro-ro         | Romanian (Romania)             |
| zh-hans       | Chinese (Simplified)     | rn            | Rundi                          |
| zh-hant       | Chinese (Traditional)    | ru            | Russian                        |
| hr            | Croatian                 | ru-md         | Russian (Republic of Moldova)  |
| hr-hr         | Croatian (Croatia)       | ru-ru         | Russian (Russia)               |
| cs            | Czech                    | se            | Sami                           |
| cs-cz         | Czech (Czech Republic)   | sa            | Sanskrit                       |
| da            | Danish                   | gd            | Scottish (Gaelic)              |
| da-dk         | Danish (Denmark)         | sr            | Serbian                        |
| dv            | Divehi                   | sn            | Shona                          |
| nl            | Dutch                    | ii            | Sichuan Yi                     |
| nl-be         | Dutch (Belgium)          | sd            | Sindhi                         |
| nl-nl         | Dutch (Netherlands)      | si            | Sinhalese                      |
| dz            | Dzongkha                 | sk            | Slovak                         |
| en            | English                  | sl            | Slovenian                      |
| en-au         | English (Australia)      | sl-si         | Slovenian (Slovenia)           |
| en-bz         | English (Belize)         | so            | Somali                         |
| en-ca         | English (Canada)         | st            | Sotho                          |
| en-ie         | English (Ireland)        | es            | Spanish                        |
| en-jm         | English (Jamaica)        | es-ar         | Spanish (Argentina)            |
| en-nz         | English (New Zealand)    | es-bo         | Spanish (Bolivia)              |
| en-za         | English (South Africa)   | es-cl         | Spanish (Chile)                |
| en-tt         | English (Trinidad)       | es-co         | Spanish (Colombia)             |
| en-gb         | English (United Kingdom) | es-cr         | Spanish (Costa Rica)           |
| en-us         | English (United States)  | es-do         | Spanish (Dominican Republic)   |
| et            | Estonian                 | es-ec         | Spanish (Ecuador)              |
| fo            | Faeroese                 | es-sv         | Spanish (El Salvador)          |
| fi            | Finnish                  | es-gt         | Spanish (Guatemala)            |
| fr            | French                   | es-hn         | Spanish (Honduras)             |
| fr-be         | French (Belgium)         | es-mx         | Spanish (Mexico)               |
| fr-ca         | French (Canada)          | es-ni         | Spanish (Nicaragua)            |
| fr-lu         | French (Luxembourg)      | es-pa         | Spanish (Panama)               |
| fr-ch         | French (Switzerland)     | es-py         | Spanish (Paraguay)             |
| fy            | Frisian                  | es-pe         | Spanish (Peru)                 |
| ff            | Fulfulde (Fulah)         | es-pr         | Spanish (Puerto Rico)          |
| gl            | Galician                 | es-es         | Spanish (Spain)                |
| ka            | Georgian                 | es-uy         | Spanish (Uruguay)              |
| de            | German                   | es-ve         | Spanish (Venezuela)            |
| de-at         | German (Austria)         | sw            | Swahili                        |
| de-de         | German (Germany)         | sv            | Swedish                        |
| de-li         | German (Liechtenstein)   | sv-fi         | Swedish (Finland)              |
| de-lu         | German (Luxembourg)      | sv-se         | Swedish (Sweden)               |
| de-ch         | German (Switzerland)     | tl            | Tagalog                        |
| el            | Greek                    | ty            | Tahitian                       |
| el-gr         | Greek (Greece)           | tg            | Tajik                          |
| gn            | Guarani                  | ta            | Tamil                          |
| gu            | Gujarati                 | tt            | Tatar                          |
| ht            | Haitian (Creole)         | te            | Telugu                         |
| ha            | Hausa                    | th            | Thai                           |
| he            | Hebrew                   | th-th         | Thai (Thailand)                |
| hi            | Hindi                    | bo            | Tibetan                        |
| hu            | Hungarian                | ti            | Tigrigna                       |
| hu-hu         | Hungarian (Hungary)      | ts            | Tsonga                         |
| is            | Icelandic                | tn            | Tswana                         |
| ig            | Igbo                     | tr            | Turkish                        |
| id            | Indonesian               | tr-tr         | Turkish (Turkey)               |
| iu            | Inuktitut                | tk            | Turkmen                        |
| ik            | Inupiaq                  | uk            | Ukrainian                      |
| ga            | Irish                    | ur            | Urdu                           |
| it            | Italian                  | uz            | Uzbek                          |
| it-it         | Italian (Italy)          | ve            | Venda                          |
| it-ch         | Italian (Switzerland)    | vi            | Vietnamese                     |
| ja            | Japanese                 | vi-vn         | Vietnamese (Vietnam)           |
| ja-jp         | Japanese (Japan)         | cy            | Welsh                          |
| kn            | Kannada                  | xh            | Xhosa                          |
| kr            | Kanuri                   | yi            | Yiddish                        |
| ks            | Kashmiri                 | yo            | Yoruba                         |
| kk            | Kazakh                   | zu            | Zulu                           |

##  Resources

| Title                                               | Link                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| Roku Avails and Committed Title List Excel Template | [https://go.roku.com/trc-avail-template](https://go.roku.com/trc-avail-template) |
| US MPAA Ratings                                     | [https://www.filmratings.com/](https://www.filmratings.com/) |
| US TV Ratings                                       | [http://tvguidelines.org/](http://tvguidelines.org/)         |
| UK BBFC Ratings                                     | [https://bbfc.co.uk/](https://bbfc.co.uk/)                   |
| Canadian Film Ratings                               | [https://www.mpa-canada.org/film-ratings/](https://www.mpa-canada.org/film-ratings/) |
| Canadian TV Ratings                                 | [https://www.cbsc.ca/tools/for-english-ca-and-third-language-broadcasters/](https://www.cbsc.ca/tools/for-english-ca-and-third-language-broadcasters/) |
| FCC Closed Captioning Guide                         | [https://www.fcc.gov/consumers/guides/captioning-internet-video-programming](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming) |
| FCC Audio Description                               | [https://www.fcc.gov/audio-description](https://www.fcc.gov/audio-description) |
| Sample Avails/Committed Title Lists                 | [https://go.roku.com/avail-ctl-samples](https://go.roku.com/avail-ctl-samples) |

## Change Log

**v1.3 - 2024-04-22**

- Defined Avails and Committed Title List
- Added Ad-supported content guideline
- Renamed "Rights Available" to "License Type"
- Added availability windows section
- Added distribution lists for delivery of avail and Committed Title List sheets
- Clarified: Country of Origin, Language, Season Number, Episode Number fields
- Separated field definitions into sections
- Replaced Window Type with FVOD Right
- Defined License Types
- Clarified when and where to provide Localization Type
- Fixed Localization Type list of supported values
- Updated ratings table to the format used in the Ingest Specification
- Updated language codes table to align with the list used in the Ingest Specification
- Removed UR as a valid rating
- Added preference that not rated content be self rated using USA_PR system
- Removed Reference ID
- Added maximum character limit for Series and Title IDs
- Added Excluded Rights
- Added Excluded Languages
- Updated max character count for Synopsis to 250
- Added requirement to remove links to external data in Excel workbooks
- Updated example data
- Updated Tags to reference Best Practices page
- Updated template with Instructions and more hints on Row 2
- Added zip file contains sample documents
