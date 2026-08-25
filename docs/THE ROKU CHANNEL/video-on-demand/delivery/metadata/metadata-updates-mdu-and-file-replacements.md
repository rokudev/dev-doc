---
title: Metadata updates (MDU) and file replacements
excerpt: How to update metadata or replace/add files post-delivery.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Updates are **automated** and can be sent whenever metadata or asset files need to change for a program **already delivered** to Roku Channel.

Every metadata and/or file-replacement update **must** include the following, exactly as originally delivered, for the update to succeed:

- **Provider**
- **Asset ID**
- **Content Type**

**Version control is handled entirely by Roku's system** — there is no need to provide versioning information in the metadata itself.

> **Note — two different meanings of "versioning":** this rule refers to Roku's internal _record_ versioning (you don't need to tell Roku "this is version 3 of the metadata"). It is separate from the file-naming rule under [File Replacements and Additions](#file-replacements-and-additions) below, which requires giving a **replacement file itself** a unique name (e.g., a `_v2` suffix). Both are true at once and don't conflict — one is about metadata records, the other is about file names.

### Supported Fields for Automated Metadata Update (MDU)

Roku currently supports updating the following fields via automated MDU:

- TMS ID
- EIDR ID
- Titles (primary and localized)
- Short Descriptions (primary and localized)
- Long Descriptions (primary and localized)
- Release Date
- Series Titles
- Season Number
- Episode Number
- Language (and localized languages)
- Availability Windows
- License Types
- Countries
- Genres
- Provider Tags
- Content Ratings (system & rating)
- Credits
- Ad Breaks
- Cue Points

***

## Metadata Update (MDU)

Metadata updates are processed the same way as new ingest content. To update metadata **only** (no file changes), follow the requirements below.

### Requirements

- Metadata updates **must** be delivered in the **same format** as the original ingest metadata.
- Metadata updates **must** include the **exact same Asset ID** used at original ingest. _(Need a full listing of asset IDs as they exist in Roku's system? Contact [contentoperations@roku.com](mailto:contentoperations@roku.com).)_
- **All file name references must be removed** from a metadata-only update. This includes:
  - Source video file name
  - Closed captions file name
  - Subtitle file name
  - Audio dub file name
  - Key, background, and/or poster art file names

### Field Groups

Some fields must be updated together, in complete groups — **all required fields in a group must be provided**, or the update will not process.

**Metadata group:**

| Field             | Required?    |
| ----------------- | ------------ |
| Language          | Required     |
| Title             | Required     |
| Short description | Required     |
| Long description  | **Optional** |

**Availability group:**

| Field        | Required? |
| ------------ | --------- |
| License Type | Required  |
| Country      | Required  |
| Start Date   | Required  |
| End Date     | Required  |

### Procedure

1. Upload the metadata update to the `/prod` folder in Aspera.

> If the update isn't reflected on Roku Channel within **24 hours**, contact [contentoperations@roku.com](mailto:contentoperations@roku.com).

***

## File Replacements and Additions

File replacements and additions are processed the same way as new ingest content.

- A **file replacement** replaces a file that currently exists in Roku Channel's library.
- A **file addition** adds a new file to an existing record — for example, adding localized subtitles or dubs to a title that didn't previously have them.

### Requirements

- File replacements/additions **must** be delivered in the **same format** as the original ingest metadata.
- File replacements/additions **must** include the **exact same Asset ID** used at original ingest. _(Need a full asset ID listing? Contact [contentoperations@roku.com](mailto:contentoperations@roku.com).)_
- Replacement files **must** be delivered with a **unique name**, both in the metadata and on the file itself, for the update to succeed. Adding a version suffix (`_v2`, `_v3`, etc.) is sufficient — e.g., `movie_title_v2.mov`.
  - _MovieLabs file replacements may use the&#x20;_`md5`_&#x20;node instead of a versioned file name._
- Replacement files **must** be delivered to the **exact same folder** as the original delivery.
- **Only** the file name references for files actually being replaced or added should appear in the metadata file. Files not being replaced or added should **not** be delivered or referenced.
- If the source video file is replaced **and** its duration changes, any related files (captions, subtitles, audio dubs) **should** also be replaced to stay in sync.
- File replacements **require language values** to be provided in order to update properly.

### Files Supported for Automated Replacement/Addition

- Video file
- Series key art file
- Series poster art file
- Series background image file
- Episode image file
- Movie key art file
- Movie poster art file
- Movie background image file
- Shortform key art file
- Closed caption file
- Full subtitle file
- Forced narrative subtitle file
- Sidecar audio file (audio dubs and descriptive audio)

### Procedure

1. Upload the file replacement/addition metadata to the `/prod` folder in Aspera.

***

## Content Takedown

If rights change after content has been delivered to Roku, and content needs to be removed from Roku Channel — either immediately or on a scheduled future date — the **availability end date** can be changed via a metadata update, following the [Metadata Update (MDU)](#metadata-update-mdu) process above.

- **Explicit updates must be provided for every territory** from which the content should be removed — a takedown in one territory does not automatically apply elsewhere.
- **Be aware:** end dates provided without an explicit time value will expire at **11:59:59 PM** on that date (local time), per the default behavior described in the Metadata Overview's [Availability Windows](#availability-windows) section.

***

## Glossary

| Term            | Definition                                                                                                                                          |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MDU**         | Metadata Update — an automated update to a title's metadata fields without changing any delivered files.                                            |
| **Asset ID**    | The immutable, partner-assigned identifier for a piece of content; required, unchanged, on every update to that content.                            |
| **Field group** | A set of fields that must all be supplied together for an update to that group to succeed — providing only some fields in a group will not process. |
| **md5 node**    | A MovieLabs MMC/MEC element that can identify a replacement file by checksum instead of relying on a versioned file name.                           |