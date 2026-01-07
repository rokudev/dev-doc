---
title: Roku Search feed (JSON)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Channels participate in Roku Search by creating and submitting a search feed. The search feed is a single JSON file that includes the content metadata for an app's video catalog. Content meta data includes the unique ID, title, description, duration, rating, language, artwork, and so on. Once the feed has been configured following this spec, it can be submitted to [Roku's feed validation tool](https://developer.roku.com/apps/search/validator), and the integration into Roku Search can then be completed.

The Roku search feed includes the following key features:

* **One feed for all regions**. A single feed may contain region-specific content metadata and rating sources.

* **Content availabilty windows**. A feed may include availability windows for individual content items.

* **Variety of content**. The feed may contain the metadata for movies, television shows, and short-form content (for example, cooking videos, sports highlights, and so on).

* **Multiple source IDs**. A single feed can contain both app-specific and Gracenote content source IDs.

## Specifications

### Root

The root of the JSON file contains basic information such as the Roku feed specification version, the default language, default availability for different regions, and the list of content items.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>version</td>
      <td>String</td>
      <td>Roku JSON feed version (use "1").</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>defaultLanguage</td>
      <td>String</td>
      <td>The lowercase <a href="https://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1 two-letter language code</a> to be used when the language is not specified for an asset.</td>
      <td>Required (if you do not provide the language for each asset).<br /><br />If you do plan on providing the language for individual assets, the same language must be specified in the asset's title, description, and image.</td>
    </tr>

    <tr>
      <td>defaultAvailabilityCountries</td>
      <td>String\[]</td>
      <td>The list of lowercase <a href="https://www.iso.org/obp/ui/#search">ISO Alpha-2 two-letter country codes</a> to be used when <strong>availabilityInfo.country</strong> is not specified for an asset.<br /><br />Click <a href="/docs/developer-program/discovery/search/implementing-search.md#language-and-regional-support">here</a> for the list of regions where Roku Search is currently supported.</td>
      <td>Required (if you do not provide the available countries for each asset)</td>
    </tr>

    <tr>
      <td>assets</td>
      <td><a href="#asset">Asset\[]</a></td>
      <td>The list of content items in the app's catalog.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Asset

An asset represents a specific content item in the app's catalog. It contains all the metadata for displaying the content item in the Roku platform and deep linking directly into content when it is selected.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>A maximum 50-character immutable unique ID for the content item. <br /><br />Once an ID is created for a content item in Roku Search, it may not be changed. <br /><br />The id must be unique within the feed. If the feed contains duplicate IDs, only one of the items with the duplicated ID is preserved. <br /><br />If the <strong>type</strong> for the content item is "externalIdOnly" set this field to the ID of the external source (for example, the Gracenote TMS ID).</td>
      <td>Required, unless the  <strong>type</strong> for the content item is "season".</td>
    </tr>

    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>The media type of the content item: <br /><ul><li>movie: Movie or long-form film (over 15 minutes).</li><li>tvspecial: One-time TV program that is not part of a series, or content that does not fit into any other mediaType category (for example, music, artists, sporting events, non-episodic news specials).</li><li>series: Set of related serialized episodes and possibly seasons. Includes TV shows and daily/weekly ongoing shows.</li><li>season: As part of a series, single set of related TV episodes.</li><li>episode: Single content item (an episode of a TV show, for example).</li><li>shortform: Standalone content that is 15 minutes or less that is not a movie or TV show (for example, movie trailers, news clips, comedy clips, food reviews, or other clips).</li><li>externalIdOnly: Validates the <strong>id</strong>, <strong>externalIdSource</strong>, and <strong>playOptions</strong> fields only. For a linear feed, validates the <strong>id</strong> and <strong>externalIdSource</strong> fields only.</li></ul><br />This value is passed into <a href="/docs/developer-program/discovery/implementing-deep-linking.md#mediatype-behavior">deep links</a> that are sent to the app. The app uses the value to determine how to launch the content. For example, if the type is "movie", the app will launch it directly into playback.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>externalIds</td>
      <td><a href="#externalid">ExternalId</a>\[]</td>
      <td>The list of external sources and IDs to be used for assigning metadata. <br /><br />Include this field if provider metadata may be used in case the specified external source does not have certain metadata.</td>
      <td>Optional</td>
    </tr>

    <tr>
      <td>externalIdSource</td>
      <td>Enum</td>
      <td>The external source of the value specified for the content item in the ID field: <ul><li>TMS: Gracenote is the source for the value specified in the <strong>id</strong> field.</li><li>PARTNER\_TITLE\_ID.</li><li>PARTNER\_ASSET\_ID.</li></ul></td>
      <td>Only if the <strong>type</strong> for the content item is "externalIdOnly".</td>
    </tr>

    <tr>
      <td>titles</td>
      <td><a href="#title">Title</a>\[]</td>
      <td>A list of localized titles for the content item.<br /><br />Titles may be a maximum of 200 characters.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>shortDescriptions</td>
      <td><a href="#description">Description</a>\[]</td>
      <td>A list of localized short descriptions for the content item. <br /><br />Short descriptions may be a maximum of 200 characters.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>longDescriptions</td>
      <td><a href="#description">Description</a>\[]</td>
      <td>A list of localized long descriptions for the content item. <br /><br />Long descriptions may be a maximum of 500 characters.</td>
      <td>Optional</td>
    </tr>

    <tr>
      <td>releaseDate</td>
      <td>String</td>
      <td>The date the content item was initially released or first aired in <a href="http://www.iso.org/iso/home/standards/iso8601.htm">ISO 8601 format</a>: \{YYYY}-\{MM}-\{DD}. For example, "2022-11-11".<br /><br />This field is used to sort programs chronologically and to group related content in Roku Search.</td>
      <td>Required, unless the <strong>releaseYear</strong> field is provided.<br /><br />At least one of the <strong>releaseDate</strong> or <strong>releaseYear</strong> fields must be provided.</td>
    </tr>

    <tr>
      <td>releaseYear</td>
      <td>Number</td>
      <td>The year the content item was initially released or first aired in YYYY format. For example, 2022.<br /><br />This field is used to sort programs chronologically and to group related content in Roku Search.</td>
      <td>Required, unless the <strong>releaseDate</strong> field is provided.</td>
    </tr>

    <tr>
      <td>genres</td>
      <td>String\[]</td>
      <td>A list of one or more of the following genres associated with the content item: <ul><li>action</li><li>action sports</li><li>adventure</li><li>aerobics</li><li>agriculture</li><li>animals</li><li>animated</li><li>anime</li><li>anthology</li><li>archery</li><li>arm wrestling</li><li>art</li><li>arts/crafts</li><li>artistic gymnastics</li><li>artistic swimming</li><li>athletics</li><li>auction</li><li>auto</li><li>auto racing</li><li>aviation</li><li>awards</li><li>badminton</li><li>ballet</li><li>baseball</li><li>basketball</li><li>3x3 basketball</li><li>beach soccer</li><li>beach volleyball</li><li>biathlon</li><li>bicycle</li><li>bicycle racing</li><li>billiards</li><li>biography</li><li>blackjack</li><li>bmx racing</li><li>boat</li><li>boat racing</li><li>bobsled</li><li>bodybuilding</li><li>bowling</li><li>boxing</li><li>bullfighting</li><li>bus./financial</li><li>canoe</li><li>card games</li><li>ceremony</li><li>cheerleading</li><li>children</li><li>children-music</li><li>children-special</li><li>children-talk</li><li>collectibles</li><li>comedy</li><li>comedy drama</li><li>community</li><li>computers</li><li>canoe/kayak</li><li>consumer</li><li>cooking</li><li>cricket</li><li>crime</li><li>crime drama</li><li>curling</li><li>cycling</li><li>dance</li><li>dark comedy</li><li>darts</li><li>debate</li><li>diving</li><li>docudrama</li><li>documentary</li><li>dog racing</li><li>dog show</li><li>dog sled</li><li>drag racing</li><li>drama</li><li>educational</li><li>entertainment</li><li>environment</li><li>equestrian</li><li>erotic</li><li>event</li><li>exercise</li><li>fantasy</li><li>faith</li><li>fashion</li><li>fencing</li><li>field hockey</li><li>figure skating</li><li>fishing</li><li>football</li><li>food</li><li>fundraiser</li><li>gaelic football</li><li>game show</li><li>gaming</li><li>gay/lesbian</li><li>golf</li><li>gymnastics</li><li>handball</li><li>health</li><li>historical drama</li><li>history</li><li>hockey</li><li>holiday</li><li>holiday music</li><li>holiday music special</li><li>holiday special</li><li>holiday-children</li><li>holiday-children special</li><li>home improvement</li><li>horror</li><li>horse</li><li>house/garden</li><li>how-to</li><li>hunting</li><li>hurling</li><li>hydroplane racing</li><li>indoor soccer</li><li>interview</li><li>intl soccer</li><li>judo</li><li>karate</li><li>kayaking</li><li>lacrosse</li><li>law</li><li>live</li><li>luge</li><li>martial arts</li><li>medical</li><li>military</li><li>miniseries</li><li>mixed martial arts</li><li>modern pentathlon</li><li>motorcycle</li><li>motorcycle racing</li><li>motorsports</li><li>mountain biking</li><li>music</li><li>music special</li><li>music talk</li><li>musical</li><li>musical comedy</li><li>mystery</li><li>nature</li><li>news</li><li>newsmagazine</li><li>olympics</li><li>opera</li><li>outdoors</li><li>parade</li><li>paranormal</li><li>parenting</li><li>performing arts</li><li>playoff sports</li><li>poker</li><li>politics</li><li>polo</li><li>pool</li><li>pro wrestling</li><li>public affairs</li><li>racquet</li><li>reality</li><li>religious</li><li>ringuette</li><li>road cycling</li><li>rodeo</li><li>roller derby</li><li>romance</li><li>romantic comedy</li><li>rowing</li><li>rugby</li><li>running</li><li>rhythmic gymnastics</li><li>sailing</li><li>science</li><li>science fiction</li><li>self improvement</li><li>shooting</li><li>shopping</li><li>sitcom</li><li>skateboarding</li><li>skating</li><li>skeleton</li><li>skiing</li><li>snooker</li><li>snowboarding</li><li>snowmobile</li><li>soap</li><li>soap special</li><li>soap talk</li><li>soccer</li><li>softball</li><li>special</li><li>speed skating</li><li>sport climbing</li><li>sports</li><li>sports talk</li><li>squash</li><li>standup</li><li>sumo wrestling</li><li>surfing</li><li>suspense</li><li>swimming</li><li>table tennis</li><li>taekwondo</li><li>talk</li><li>technology</li><li>tennis</li><li>theater</li><li>thriller</li><li>track/field</li><li>track cycling</li><li>travel</li><li>trampoline</li><li>triathlon</li><li>variety</li><li>volleyball</li><li>war</li><li>water polo</li><li>water skiing</li><li>watersports</li><li>weather</li><li>weightlifting</li><li>western</li><li>wrestling</li><li>yacht racing</li></ul></td>
      <td>Required</td>
    </tr>

    <tr>
      <td>tags</td>
      <td>String\[]</td>
      <td>One or more tags (for example, “dramas”, “korean”, and so on). Each tag is a string and is limited to 20 characters.</td>
      <td>Optional</td>
    </tr>

    <tr>
      <td>credits</td>
      <td><a href="#credit">Credit</a>\[]</td>
      <td>A list of cast and crew members that may receive credit for the content item.</td>
      <td>Optional</td>
    </tr>

    <tr>
      <td>advisoryRatings</td>
      <td><a href="#advisoryrating">AdvisoryRating</a>\[]</td>
      <td>A list of parental advisory rating objects for the content item. <br /><br />Each parental advisory rating object includes the rating authority, rating, and advisory descriptor (for example, MPAA, PG-13, AL \[adult language]) for a movie in the United States).  <br /><br />A content item may have multiple advisoryRatings objects. For example, an item to be included in search results for USA and Germany would have at least two advisoryRatings objects in the list.</td>
      <td>Required. Omitting the <strong>advisoryRatings</strong> field for a content item in EU countries excludes it from Roku's search and discovery features in EU countries.</td>
    </tr>

    <tr>
      <td>images</td>
      <td><a href="#image">Image</a>\[]</td>
      <td>A list of main poster and background images to be displayed for the content item in the Roku Search results. <br /><br />Images may have an aspect ratio of 16:9 or 2:3.<br /><br />Roku determines the dimensions and aspect ratio to be used after downloading the image.</td>
      <td>A main 16:9 or 2:3 poster image is required.</td>
    </tr>

    <tr>
      <td>content</td>
      <td><a href="#content">Content</a></td>
      <td>Contains options for playing the content item. <br /><br />The Content object includes a <strong>playOptions</strong> field that specifies the availability, pricing, licensing, quality, and playId (for deep linking into content from Roku Search) for the content item.</td>
      <td>Required, unless the <strong>type</strong> field is "series" or "season".</td>
    </tr>

    <tr>
      <td>durationInMilliseconds</td>
      <td>Number</td>
      <td>The duration of content in milliseconds.<br /><br />If both the <strong>durationInSeconds</strong> and <strong>durationInMilliseconds</strong> field are provided, they must be equal. However, it is recommended that only one is provided. <br /><br />Use the <strong>durationInMilliseconds</strong> field to provide the duration with maximum precision.</td>
      <td>Required, unless the <strong>if durationInSeconds</strong> field is provided.<br /><br />At least one of the <strong>durationInSeconds</strong> or <strong>durationInMilliseconds</strong> fields must be provided.<br /><br />This field is not required if the <strong>type</strong> field is "series" or "season".</td>
    </tr>

    <tr>
      <td>durationInSeconds</td>
      <td>Number</td>
      <td>The duration of content in seconds.<br /><br />If both the <strong>durationInSeconds</strong> and <strong>durationInMilliseconds</strong> field are provided, they must be equal. However, it is recommended that only one is provided. <br /><br />Use the <strong>durationInMilliseconds</strong> field to provide the duration with maximum precision.</td>
      <td>Required, unless the <strong>if durationInMilliSeconds</strong> field is provided.<br /><br />This field is not required if the <strong>type</strong> field is "series" or "season".</td>
    </tr>

    <tr>
      <td>episodeInfo</td>
      <td><a href="#episodeinfo">EpisodeInfo</a></td>
      <td>Metadata related to a television episode. <br />The <strong>EpisodeInfo</strong> object  specifies the episode number, season number, and series ID of the episode.</td>
      <td>Required only if the <strong>type</strong> field is "episode".</td>
    </tr>

    <tr>
      <td>seasonInfo</td>
      <td><a href="#seasoninfo">SeasonInfo</a></td>
      <td>Metadata related to a television season. <br /><br />The <strong>SeasonInfo</strong> object  specifies the season number and series ID of the season.</td>
      <td>Required only if the <strong>type</strong> field is "season".</td>
    </tr>
  </tbody>
</table>

### Title

Provide a localized title of the content item.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>A maximum 200-character title for the content item in human readable text.<br /><br />This field is used for matching in Roku Search. Do not include extra information such as year, version label, and so on.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>languages</td>
      <td>String\[]</td>
      <td>A list of languages in <a href="https://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1 two-letter language code</a> (lowercased) format for which the title is applicable.<br /><blockquote><p>The previously listed <strong>language</strong> field (a String) has been deprecated and replaced by the <strong>languages</strong> field (a String\[]) in order to reduce feed sizes.</p></blockquote></td>
      <td>Required, if the <strong>defaultLanguage</strong> field is not specified.<br /><br />If the languages for a localized title are provided, localized descriptions and images with the same languages must also be provided.</td>
    </tr>
  </tbody>
</table>

### Description

Provide a localized description of the content item.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>A description of the content item. A short description may be a maximum of 200 characters. A long description may be a maximum of 500 characters.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>languages</td>
      <td>String\[]</td>
      <td>A list of languages in <a href="https://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1 two-letter language code</a> (lowercased) format for which the description is applicable.<br /><blockquote><p>The previously listed <strong>language</strong> field (a String) has been deprecated and replaced by the <strong>languages</strong> field (a String\[]) in order to reduce feed sizes.</p></blockquote></td>
      <td>Required, if the <strong>defaultLanguage</strong> field is not specified.<br /><br />If the languages for a localized title are provided, localized descriptions and images with the same languages must also be provided.</td>
    </tr>
  </tbody>
</table>

### Credit

Provide the names and roles of cast and crew members that may receive credit for the content item.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Full name of the person</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>role</td>
      <td>String</td>
      <td>The role of the person: <ul><li>actor</li><li>anchor</li><li>host</li><li>narrator</li><li>voice</li><li>director</li><li>producer</li><li>screenwriter</li></ul></td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### AdvisoryRating

Provide the list of parental advisory rating objects for the content item. Each parental advisory rating object includes the rating source (the rating system or authority responsible for the ratings), the rating value (for example, a "G" rating from the MPAA in the United States), and rating descriptor (for example, MPAA adult language [AL] or mild violence [MV]).

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>source</td>
      <td>Enum</td>
      <td>The rating system or authority responsible for the ratings.<br /><br />See the <strong>Rating authority</strong> column in the <a href="#ratings">Ratings</a> table for the list of supported values.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>value</td>
      <td>Enum</td>
      <td>The rating received by the content item from the rating source (for example, a "G" rating from the MPAA in the United States). <br /><br />See the <strong>Ratings</strong> column in the <a href="#ratings">Ratings</a> table for the complete list of possible values per rating source.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>descriptors</td>
      <td>Enum\[] (String enums)</td>
      <td>The list of advisory ratings received by the content item (for example, adult language \["AL"] or mild violence \["MV"] from the MPAA in the United States).<br /><br />See the <strong>Ratings descriptors</strong> column in the <a href="#ratings">Ratings</a> table for the complete list of possible values per rating source. .</td>
      <td>Optional</td>
    </tr>
  </tbody>
</table>

#### Ratings

For each country supported by Roku Search, the rating authorities, ratings, and advisory ratings are as follows:

<table>
  <thead>
    <tr>
      <th>Country</th>
      <th>Rating authority<br />(source)</th>
      <th>Ratings<br />(value)</th>
      <th>Advisory ratings<br />(descriptors)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>au</td>
      <td>ACB (Australian Classification Board)</td>
      <td><ul><li>NR</li><li>E</li><li>G</li><li>PG</li><li>M</li><li>MA 15+</li><li>R 18+</li><li>X 18+</li><li>C</li><li>RC</li><li>P</li></ul></td>

      <td />
    </tr>

    <tr>
      <td>br</td>
      <td>CLASSIND (Classificação Indicativa)</td>
      <td><ul><li>L</li><li>10</li><li>12</li><li>14</li><li>16</li><li>18</li></ul></td>
      <td><ul><li>Violência</li><li>Violência Extrema</li><li>Conteúdo Sexual</li><li>Nudez</li><li>Sexo</li><li>Sexo Explícito</li><li>Drogas</li><li>Drogas Lícitas</li><li>Drogas Ilícitas</li><li>Linguagem Imprópria</li><li>Atos Criminosos</li><li>onteúdo Impactante</li></ul></td>
    </tr>

    <tr>
      <td>ca</td>
      <td>CHVRS (Canadian Home Video Rating System)</td>
      <td><ul><li>G</li><li>PG</li><li>14-A (also 14A)</li><li>18-A (also 18A)</li><li>R</li><li>E</li></ul></td>
      <td><ul><li>Not Recommended For Young Children</li><li>Not Recommended For Children</li><li>Frightening Scenes</li><li>Mature Theme</li><li>Coarse Language</li><li>Crude Content</li><li>Nudity</li><li>Sexual Content</li><li>Violence</li><li>Disturbing Content</li><li>Substance Abuse</li><li>Gory Scenes</li><li>Explicit Sexual Content</li><li>Brutal Violence</li><li>Sexual Violence</li><li>Language May Offend</li></ul></td>
    </tr>

    <tr>
      <td>ca</td>
      <td>CPR (Canadian Parental Rating)</td>
      <td><ul><li>14+</li><li>18+</li><li>C</li><li>C-8 (also C8)</li><li>G</li><li>PG</li><li>E</li></ul></td>

      <td />
    </tr>

    <tr>
      <td>de</td>
      <td>FSF (Freiwillige Selbstkontrolle Fernsehen \[German Association for Voluntary Self-Regulation of Television])</td>
      <td><ul><li>0</li><li>6</li><li>12</li><li>16</li><li>18</li></ul></td>

      <td />
    </tr>

    <tr>
      <td>de</td>
      <td>FSK (Freiwillige Selbstkontrolle der Filmwirtschaft \[German Self-Regulatory Body of the Movie Industry])</td>
      <td><ul><li>0</li><li>6</li><li>12</li><li>16</li><li>18</li></ul></td>

      <td />
    </tr>

    <tr>
      <td>gb</td>
      <td>BBFC (British Board of Film Classification)</td>
      <td><ul><li>U</li><li>PG</li><li>12-A (also 12A)</li><li>12</li><li>15</li><li>18</li><li>R18</li><li>R-1</li></ul></td>
      <td><ul><li>Theme</li><li>Behaviour</li><li>Horror</li><li>Nudity</li><li>Discrimination</li><li>Language</li><li>Violence</li><li>Drugs</li><li>Sex</li></ul></td>
    </tr>

    <tr>
      <td>mx</td>
      <td>RTC (General Directorate of Radio Television and Cinematography)</td>
      <td><ul><li>AA</li><li>A</li><li>B</li><li>B-15 (also B15)</li><li>C</li><li>D</li></ul></td>
      <td><ul><li>Violence</li><li>Sex</li><li>Language</li><li>Drugs</li></ul></td>
    </tr>

    <tr>
      <td>us</td>
      <td>MPAA (Motion Picture Association of America)</td>
      <td><ul><li>G</li><li>PG</li><li>PG-13 (also PG13)</li><li>R</li><li>NC-17 (also NC17)</li><li>UR</li></ul></td>
      <td><ul><li>AC</li><li>AL</li><li>GL</li><li>MV</li><li>V</li><li>GV</li><li>BN</li><li>N</li><li>SSC</li><li>RP</li></ul></td>
    </tr>

    <tr>
      <td>us</td>
      <td>USA\_PR (USA Parental Rating)</td>
      <td><ul><li>TV-Y (also TVY)</li><li>TV-Y7 (also TVY7)</li><li>TV-G (also TVG)</li><li>TV-PG (also TVPG)</li><li>TV-14 (also TV14)</li><li>TV-MA (also TVMA)</li></ul></td>
      <td><ul><li>D</li><li>L</li><li>S</li><li>V</li><li>FV</li></ul></td>
    </tr>
  </tbody>
</table>

### Image

Provide the poster and background images to be displayed for the content item in the Roku Search results. Provide localized images for each region in which the item is to be made available to Roku Search. The supported image formats and aspect ratios are as follows:

* **format**: JPEG (.jpg file extension), GIF (.gif file extension) or PNG (.png file extension)
* **aspect ratio**: 16:9 or 2:3 required.
* **maximum resolution**: 1920 X 1080

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>The image type: <ul><li>main: A poster image with title treatment. The aspect ratio of the poster may be 16:9 or 2:3.</li><li>background: A textless image displayed in the background. The aspect ratio of the background image may be 16:9 or 2:3.</li></ul></td>
      <td>Required</td>
    </tr>

    <tr>
      <td>url</td>
      <td>String</td>
      <td>The source url for the image.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>languages</td>
      <td>String\[]</td>
      <td>A list of languages in <a href="https://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1 two-letter language code</a> format for which the image is applicable.</td>
      <td>Required, if the <strong>defaultLanguage</strong> field is not specified.<br /><br />If the language for a localized image is provided, a localized title and description with the same language must also be provided.</td>
    </tr>
  </tbody>
</table>

### Content

| Field       | Type           | Description                                       | Required |
| :---------- | :------------- | :------------------------------------------------ | :------- |
| playOptions | [PlayOption][] | The list of options for playing the content item. | Required |

#### playOptions

In the **playOptions** field, specify the availability, pricing, licensing, quality, and playId (for [deep linking](/docs/developer-program/discovery/implementing-deep-linking.md) into content from Roku Search) for the content item.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>license</td>
      <td>Enum</td>
      <td>The type of licensing terms for the content: <ul><li>free: Content is directly playable upon being deep linked.</li><li>subscription: Content is only playable upon being deep linked if the customer has a subscription. For customers that do not have a subscription, the app typically displays a subscription sign-up page when receiving deep links into content that is behind a paywall.</li><li>rental</li><li>purchase</li></ul></td>
      <td>Required</td>
    </tr>

    <tr>
      <td>price</td>
      <td>Float</td>
      <td>The price of the content in decimal format (for example, 1.90, 1.99, or 2.00).<br /><br />If the price is 0.00, set the <strong>license</strong> field to "subscription" or "free" instead of setting this field. This automatically sets the <strong>price</strong> field to 0.00 by default.</td>
      <td>Required, if the <strong>license</strong> field is set to "purchase" or "rental".</td>
    </tr>

    <tr>
      <td>quality</td>
      <td>Enum</td>
      <td>The playback resolution of the content item: <ul><li>sd</li><li>hd</li><li>hd+</li><li>fhd</li><li>uhd</li></ul></td>
      <td>Required</td>
    </tr>

    <tr>
      <td>currency</td>
      <td>String</td>
      <td>The <a href="https://www.iso.org/iso-4217-currency-codes.html#:~:text=The%20first%20two%20letters%20of,and%20the%20D%20for%20dollar">ISO 4217 three-letter currency code</a> for the value specified in the <strong>price</strong> field: <ul><li>usd (or USD) (default)</li><li>gbp (or GBP)</li><li>cad (or CAD)</li><li>eur (or EUR)</li></ul></td>
      <td>Required, if the <strong>license</strong> field is set to "purchase" or "rental".</td>
    </tr>

    <tr>
      <td>playId</td>
      <td>String</td>
      <td>A unique, immutable ID for the content item. When customers search for this content item and select your app to watch it, the <strong>playId</strong> is passed in a <a href="/docs/developer-program/discovery/implementing-deep-linking.md">deep link</a> back to your app.<br /><br />The <strong>playId</strong> must map to the <strong>contentid</strong> in your app for the same content. It is therefore important to keep the Roku Search feed synchronized with the app's content feed.</td>
      <td>Required</td>
    </tr>

    <tr>
      <td>availabilityStartTimeStamp</td>
      <td>Number</td>
      <td>The time (in epoch milliseconds) when the content item is to be made available to Roku Search.</td>
      <td>Optional <br /><br />If you are not providing an availability start time, omit this field from your search feed.</td>
    </tr>

    <tr>
      <td>availabilityEndTimeStamp</td>
      <td>Number</td>
      <td>The time (in epoch milliseconds) when the content item is to stop being made available to Roku Search.</td>
      <td>Optional<br /><br />If you are not providing an availability end time or if the content is available indefinitely, omit this field from your search feed.</td>
    </tr>

    <tr>
      <td>availabilityStartTime</td>
      <td>String</td>
      <td>The time (as an ISO timestamp) when the content item is to be made available to Roku Search.</td>
      <td>Optional <br /><br />If you are not providing an availability start time, omit this field from your search feed.</td>
    </tr>

    <tr>
      <td>availabilityEndTime</td>
      <td>String</td>
      <td>The time (as an ISO timestamp) when the content item is to stop being made available to Roku Search.</td>
      <td>Optional<br /><br />If you are not providing an availability end time or if the content is available indefinitely, omit this field from your search feed.</td>
    </tr>

    <tr>
      <td>availabilityInfo</td>
      <td>Map\<Enum, String\[]></td>
      <td>The list of <a href="https://www.iso.org/obp/ui/#search/code/">ISO Alpha-2 two-letter country codes</a> in which the content item is to be made available to Roku Search.</td>
      <td>Required, if the <strong>defaultAvailabilityCountries</strong> field is not specified.</td>
    </tr>
  </tbody>
</table>

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

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>The third-party metadata provider ID that uniquely identifies the content item. <br /><br />For Gracenote/TMS, the ID is a 14-character string (for example, MV123456780000). The first 2 characters in the ID represent the unique ID domain applied to the program record: <ul><li>MV: Movie (theatrical, made-for-television, direct-to-video).</li><li>EP: Television episode.</li><li>SH: Television show</li></ul></td>
      <td>Required</td>
    </tr>

    <tr>
      <td>source</td>
      <td>String</td>
      <td>The source of the specified external ID. This must be one of the following values: <ul><li>TMS</li></ul></td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

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
>
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
