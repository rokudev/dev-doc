---
title: Metadata
deprecated: false
hidden: true
metadata:
  robots: index
---
Roku utilizes a transform engine that can “normalize” different metadata formats to fit Roku’s ingestion needs. Exact element or field names are not as important as consistent delivery of agreed upon element or field names. The data within any field must conform to Roku Channel Ingest Specification regardless of element or field name. If you use an XML format for delivery of your content to other platforms, you may be able to repurpose this for delivery to Roku. You may provide a sample of this existing metadata format during onboarding for Roku to evaluate validity for ingest into Roku Channel. Regardless of the format delivered, all required elements/fields must be provided in the metadata deliverable.

### Content type definitions

Roku Channel supports 3 content types: tv, film, and clip. All content must be delivered as one of these 3 content types. Titles must be delivered to Roku Channel in the same content type the program was originally available in. The below definitions can help guide how to classify content that is intended for Roku Channel.

**TV**

Content that is structured in a series > season > episode hierarchy should be delivered to the TV specification.

- **series** is defined as a collection of programs or episodes released under a common title with a consistent narrative and characters or theme. In North America, each year of a series is called a season. There can be several seasons attributed to one series
- **season** is defined as a group of programs or episodes of series that are released in one year. There can be several programs/episodes attributed to a season.
- **episode** is defined as a single self-contained narrative or informational segment of a television series. An episode can be attributed to only one season of only one series.

**Film**

Full length, long form, stand-alone titles should be delivered to the Film specification. Any program that is not intended to be nested in a series/season/episode hierarchy and exceeds roughly 15 minutes run time should be considered a film. This includes stand-alone TV Specials.

**Clip**

Short form, stand-alone titles that do not exceed roughly 15 minutes run time should be delivered to the Clip specification.

### Minimum required metadata by content type

<Table>
  <thead>
    <tr>
      <th>
        Film/Clip Requirements
      </th>

      <th>
        TV Requirements
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        - provider<br />- content type<br />- asset_id<br />- title<br />- release_date<br />- runtime<br />- genres<br />- rating<br />- rating system<br />- short_synopsis<br />- video file_name<br />- captions file_name (if captions are required)<br />- key art file_name
      </td>

      <td>
        - provider<br />- content type<br />- asset_id<br />- episode title<br />- episodeNumber<br />- episode release_date<br />- runtime<br />- rating<br />- rating system<br />- episode short_synopsis<br />- series_id<br />- series title<br />- series release_date<br />- series genres<br />- series short_synopsis<br />- season_id<br />- seasonNumber<br />- video file_name<br />- captions file_name (if captions are required)<br />- episode thumbnail file_name<br />- series key art file_name
      </td>
    </tr>
  </tbody>
</Table>

### ID requirements and expectations

Roku does not supply IDs for content. IDs are to be generated and supplied by the Partner for content that is delivered to Roku. Every clip and movie must be delivered with an asset_id. Every episode must be delivered with 3 IDs: an asset_id, a series_id, and a season_id. IDs need to be meaningful to your team as they are how we positively identify a title in our system. The asset ID in the ingest metadata should match the Title ID provided in the avail document. This will aid in tracking the content throughout Roku’s pipeline from Avails submission through publication on Roku Channel. Any updates to the title once it has been ingested into our system MUST be accompanied by the asset ID. Guidelines and definitions of IDs are below:

| **ID**    | Definitions                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asset_id  | Immutable, unique identifier for a clip, episode, or movie. Required for all content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION**                                                                                                                                                              |
| series_id | Immutable, unique identifier for a series. Cannot be the same as the season or unique episode ID. Must be delivered with all episodes of a series and must be consistent for all episodes of a series. Required for TV content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION**                    |
| season_id | Immutable, unique identifier for a season. Cannot be the same as the series or unique episode ID. Must be delivered with all episodes of a season of a series and must be consistent for all episodes within that season. Required for TV content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION** |

### Availability sheets/planners

Roku requests an initial launch list of titles/episodes/clips in current library that are available to Roku at the time of onboarding and a schedule when the content will be refreshed. For ongoing production, Roku requests that Avails be provided 60 days prior to licensing window start and the content be delivered at least 30 days before curation onto the channel. This will allow ample time for processing and QC of the content before it goes live on Roku Channel. Delivery capacity to be coordinated after signing

| Documents           |                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------- |
| Roku Avail Spec     | Check out the avail specifications page [here](https://go.roku.com/trc-avail-spec) |
| Roku Avail Template | Download Roku's avail template [here](https://go.roku.com/trc-avail-template)      |

### Availability windows

By default, content becomes available at 12:00 am (midnight) and expires at 11:59:59 pm in the user’s local time zone. If a title needs to go live or expire at a specific time, that time must be included in the license window start or end values in the ingest metadata.

Roku supports two types of time designations:

- **Relative time**:  the content goes into window at the specified time in each user’s local time zone. For example, a Saturday night premiere set for 9:00 pm will be available at 9:00 pm for Eastern time zone users, but a Pacific time zone user cannot watch until 9:00 pm Pacific — three hours later.
- **Absolute time**: the content goes into window at a single fixed moment worldwide. For example, a new episode set for 9:00 pm Eastern becomes immediately available to Pacific users at 6:00 pm their local time.

Time values must be formatted and submitted as follows:

| Time Type      | Format                 | Example                |
| -------------- | ---------------------- | ---------------------- |
| Relative       | `yyyy-mm-ddThh:mm:ss`  | `2019-11-01T21:00:00`  |
| Absolute (UTC) | `yyyy-mm-ddThh:mm:ssZ` | `2019-11-02T01:00:00Z` |

Absolute times must be expressed in UTC. In the example above, 9:00 pm Eastern on November 1 is 1:00 am UTC on November 2. If no time is provided, Roku will assume a relative start of 12:00:00 am and a relative end of 11:59:59 pm.

### Special characters

Roku utilizes CDATA sections to allow special characters (e.g. !@#$%^&\*(){}|\[];:’”?/>\<, as well as foreign character sets) within certain node values of the ingest XML. Roku highly recommends wrapping data in CDATA sections to ensure proper ingest of content. The below nodes are the **only** nodes that support CDATA sections:

- title
- long_synopsis
- short_synopsis
- display_name

Certain characters in an XML will render the document unreadable by the Roku ingest platform unless handled (escaped) properly. The below characters must be provided in their Escaped Form for all node values that do not support CDATA sections:

| Character Name | Character | Escaped Form |
| -------------- | --------- | ------------ |
| Ampersand      | &         | `&amp;`      |
| Less-than      | \<        | `&lt;`       |
| Greater-than   | >         | `&gt;`       |
| Quotes         | "         | `&quot;`     |
| Apostrophe     | '         | `&apos;`     |

Special characters should never be used in file names or file name references within the XML or Excel metadata. [See File Naming Guidelines](#file-naming) for more on this.

### Supported metadata formats

XML format preferred. One complete XML shall be delivered for each movie, clip, or TV episode video file delivered. Metadata shall be delivered via Aspera to the same folder location as the video, captions, and artwork files.

**Supported metadata formats**

| Format Name     | Format Extension | Encoding                                                                                                                                                      | Package Version                                                                                                                  |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| XML (preferred) | .xml             | UTF-8                                                                                                                                                         | clip1.0<br />film5.0<br />tv1.0<br />Cablelabs ADI 1.1<br /><br />**_Additional XML schemas supported on a case-by-case basis_** |
| Excel           | .xlsx            | See below for [Roku Excel Metadata Templates](#roku-excel-metadata-guidelines) and [Excel Metadata Guidelines](#roku-excel-metadata-guidelines-and-templates) |                                                                                                                                  |

###
