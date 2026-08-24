---
title: Metadata
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Roku uses a **transform engine** that normalizes different metadata formats to fit Roku's ingestion needs. The exact element or field names you use matter less than **consistent delivery** of agreed-upon element/field names — but regardless of naming, the _data_ within any field **must** conform to the Roku Channel Ingest Specification.

- If you already use an XML format to deliver content to other platforms, you **may** be able to repurpose it for Roku delivery.
- You **may** provide a sample of your existing metadata format during onboarding for Roku to evaluate its validity for ingest.
- Regardless of which format is delivered, **all required elements/fields must be provided** in the metadata deliverable.

### Related Documentation

This page covers concepts that apply across all metadata delivery formats. Format-specific field-level detail lives in dedicated sub-pages:

- **MovieLabs**: MEC/MMC delivery (see the MovieLabs Migration Playbook / MovieLabs guide)
- **Roku XML**: three sub-pages, one per content type: **Film**, **TV**, **Clip**
- **Roku Excel**: three sub-pages, one per content type: **Film**, **TV**, **Clip**

***

## Content Type Definitions

Roku Channel supports **three content types**: `tv`, `film`, and `clip`. All content **must** be delivered as one of these three types, and titles **must** be delivered under the same content type in which the program was originally released.

### TV

Content structured in a **series > season > episode** hierarchy should be delivered under the TV specification.

- **Series** — a collection of programs/episodes released under a common title with a consistent narrative, characters, or theme. In North America, each year of a series is called a season; a series can span several seasons.
- **Season** — a group of programs/episodes released in one year, attributed to one series.
- **Episode** — a single self-contained narrative or informational segment of a series. An episode belongs to exactly one season of exactly one series.

### Film

Full-length, long-form, stand-alone titles should be delivered under the Film specification — any program **not** intended to nest in a series/season/episode hierarchy, and exceeding **roughly 15 minutes** runtime. This includes stand-alone TV specials.

### Clip

Short-form, stand-alone titles **not exceeding roughly 15 minutes** runtime should be delivered under the Clip specification.

> **Open question flagged for review:** both Film and Clip definitions use "roughly 15 minutes" as the dividing line, but neither defines what happens at exactly 15:00, or how much tolerance "roughly" allows (14:30–15:30? 14:45–15:15?). **Recommend confirming an exact boundary rule** (e.g., "15:00 and under = Clip; over 15:00 = Film") with the content classification team before publishing, so partners aren't left guessing on borderline titles.

***

## Minimum Required Metadata by Content Type

### Film / Clip — Required Fields

- `provider`
- `content_type`
- `asset_id`
- `title`
- `release_date`
- `runtime`
- `genres`
- `rating`
- `rating_system`
- `short_synopsis`
- `video file_name`
- `captions file_name` _(if captions are required)_
- `key_art file_name`

### TV — Required Fields

**Episode-level:**

- `provider`
- `content_type`
- `asset_id`
- `episode title`
- `episodeNumber`
- `episode release_date`
- `runtime`
- `rating`
- `rating_system`
- `episode short_synopsis`
- `video file_name`
- `captions file_name` _(if captions are required)_
- `episode thumbnail file_name`

**Series-level:**

- `series_id`
- `series title`
- `series release_date`
- `series genres`
- `series short_synopsis`
- `series key_art file_name`

**Season-level:**

- `season_id`
- `seasonNumber`

> Film/Clip and TV field lists are shown separately (rather than side-by-side) because they don't correspond 1:1 — TV carries substantially more required fields due to its series/season/episode hierarchy.

***

## ID Requirements and Expectations

- Roku does **not** supply IDs — all IDs are generated and supplied **by the partner**.
- Every **clip and movie** must be delivered with an `asset_id`.
- Every **episode** must be delivered with **three IDs**: `asset_id`, `series_id`, and `season_id`.
- IDs should be **meaningful to your team**, since they are how Roku positively identifies a title in its system.
- The `asset_id` in the ingest metadata **must match** the Title ID provided in the Avails document — this links the content across Roku's pipeline, from Avails submission through publication.
- Any update to a title already ingested into Roku's system **MUST** be accompanied by its `asset_id`.

**All ID types share these rules:**

- **Maximum 50 characters**
- **Alphanumeric characters, hyphens, and underscores only**
- **⚠️ Spaces or special characters in any ID will fail ingestion**

| ID          | Identifies                       | Uniqueness / Consistency Rule                                                                                   | Required For |
| ----------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `asset_id`  | A single clip, episode, or movie | Immutable, unique per asset                                                                                     | All content  |
| `series_id` | A series                         | Immutable; must be consistent across **all** episodes of that series; cannot equal the season or episode ID     | TV content   |
| `season_id` | A season of a series             | Immutable; must be consistent across all episodes **within that season**; cannot equal the series or episode ID | TV content   |

***

## Availability Sheets / Planners

- At onboarding, Roku requests an **initial launch list** of titles/episodes/clips currently available for licensing, plus a schedule for when content will be refreshed.
- For ongoing delivery, Roku requests:
  - **Avails** at least **60 days** prior to the licensing window start
  - **Content delivery** at least **30 days** before curation onto the channel

This lead time allows for processing and QC before the content goes live. Delivery capacity is coordinated after signing.

| Document            | Link                                                        |
| ------------------- | ----------------------------------------------------------- |
| Roku Avail Spec     | [View specification](https://go.roku.com/trc-avail-spec)    |
| Roku Avail Template | [Download template](https://go.roku.com/trc-avail-template) |

***

## Availability Windows

By default, content becomes available at **12:00 AM (midnight)** and expires at **11:59:59 PM** in each user's local time zone. If a title must go live or expire at a specific time, that time **must** be included in the license window start/end values in the ingest metadata.

Roku supports two time designations:

| Type         | Behavior                                                                              | Example                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Relative** | Content goes into window at the specified time in **each user's own local time zone** | A Saturday 9:00 PM premiere is available at 9:00 PM Eastern for Eastern-zone users, and separately at 9:00 PM Pacific for Pacific-zone users (i.e., three hours later in real time) |
| **Absolute** | Content goes into window at a **single fixed moment worldwide**                       | A new episode set for 9:00 PM Eastern (absolute) becomes available to Pacific users at 6:00 PM their local time — the same real-world instant                                       |

### Time Value Format

| Time Type      | Format                 | Example                |
| -------------- | ---------------------- | ---------------------- |
| Relative       | `yyyy-mm-ddThh:mm:ss`  | `2019-11-01T21:00:00`  |
| Absolute (UTC) | `yyyy-mm-ddThh:mm:ssZ` | `2019-11-02T01:00:00Z` |

- **Absolute times must be expressed in UTC.** In the example above, 9:00 PM Eastern on November 1 is 1:00 AM UTC on November 2.
- **If no time is provided**, Roku assumes a relative start of `12:00:00 AM` and a relative end of `11:59:59 PM`.

***

## Special Characters

Roku uses **CDATA sections** to allow special characters (e.g., `! @ # $ % ^ & * ( ) { } | [ ] ; : ' " ? / < >`, as well as foreign character sets) within **certain** node values in the ingest XML. Roku **highly recommends** wrapping such data in CDATA sections to ensure proper ingest.

> **This is a different context from file-naming rules.** The [File Delivery Specification](#) forbids most of these same characters in **file names**. Here, the rules apply to **metadata field values** (like title or synopsis text) — the two rule sets govern different things and are not in conflict.

**Only the following nodes support CDATA sections:**

- `title`
- `long_synopsis`
- `short_synopsis`
- `display_name`

**For every other node** (i.e., any field not in the list above), certain characters will render the XML document unreadable to Roku's ingest platform unless properly escaped. These characters **must** be provided in their escaped form:

| Character Name | Character | Escaped Form |
| -------------- | --------- | ------------ |
| Ampersand      | `&`       | `&amp;`      |
| Less-than      | `<`       | `&lt;`       |
| Greater-than   | `>`       | `&gt;`       |
| Quotes         | `"`       | `&quot;`     |
| Apostrophe     | `'`       | `&apos;`     |

**Special characters should never be used in file names** or file name references within XML or Excel metadata — see the [File Naming Guidelines](#file-naming) for the complete forbidden-character list for file names specifically.

***

## Supported Metadata Formats

- **XML** is the **preferred** format.
- **One complete XML file** must be delivered for **each** movie, clip, or TV episode video file delivered.
- Metadata **must** be delivered via Aspera to the **same folder location** as its associated video, captions, and artwork files.

| Format            | Extension | Encoding | Package Version(s)                                                                                   |
| ----------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------- |
| XML _(preferred)_ | `.xml`    | UTF-8    | `clip1.0`, `film5.0`, `tv1.0`, `Cablelabs ADI 1.1` _(additional XML schemas supported case-by-case)_ |
| Excel             | `.xlsx`   | —        | See [Roku Excel Metadata Guidelines](#roku-excel-metadata-guidelines-and-templates) and templates    |

***

## Glossary

| Term                 | Definition                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Transform engine** | Roku's internal system that normalizes differently-named metadata fields from partner formats into Roku's ingest schema.                                                 |
| **CDATA section**    | An XML construct (`<![CDATA[ ... ]]>`) that tells a parser to treat enclosed content as literal text, allowing special characters without requiring them to be escaped.  |
| **Avail / Title ID** | The identifier for a title as declared in the Avails (licensing/availability) document — this must match the `asset_id` used in ingest metadata to link the two records. |
| **Relative time**    | An availability time interpreted in each viewer's own local time zone, so the same title goes live at different real-world moments across time zones.                    |
| **Absolute time**    | An availability time fixed to a single real-world instant (expressed in UTC), so the title goes live simultaneously worldwide regardless of viewer time zone.            |
