---
title: Metadata updates (MDU) and file replacements
deprecated: false
hidden: true
metadata:
  robots: index
---
Updates are automated and can be sent if there is a need to change metadata or asset files for any program that has previously been delivered to Roku Channel. All metadata and/or file replacement updates must include **Provider**, **Asset ID**, and **Content Type** of the program as it was originally delivered to Roku for the update to succeed. Version control will be handled by Roku's system, there is no need to provide versioning information in the metadata.

Roku currently supports updating the below metadata fields via automated MDU:

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

## Metadata update (MDU)

Metadata updates (MDUs) are automated and will be processed in the same manner as content that needs to be ingested into Roku Channel's content library. Please follow the procedure outlined below to update metadata only.

Metadata updates must be delivered in the same format as the ingest metadata

Metadata updates must include **the exact same asset ID** that was included when the content was originally ingested

_Please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com) if you need a complete listing of asset IDs as they exist in Roku Channel's system_

All file name references must be removed from a metadata only update. This includes:

- source video file name
- closed captions file name
- subtitle file name
- audio dub file name
- key, background, and/or poster art file names

Some fields need to be updated in "groups". All required fields in a group must be provided for the update to process successfully. Below are the current groups:

### Metadata group<br />(all of the required fields must be present in order to update one of these)

- Language (required)
- Title (required)
- Short description (required)
- Long description (optional)

### Availability group<br />(all of the required fields must be present in order to update one of these)

- License Type (required)
- Country (required)
- Start Date (required)
- End Date (required)

Upload the metadata update to the "prod" folder in Aspera

_If you do not see the update reflected on Roku Channel within 24 hours, please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com)_

## File replacements and additions

File replacements and additions are automated and will be processed in the same manner as content that needs to be ingested into Roku Channel's content library. A file replacement will replace a file that currently exists in Roku Channel's library. A file addition will add a new file to an existing record in Roku Channel's library. A file addition would be used to add localized subtitles or dubs to an existing record. Please follow the procedure outlined below to replace one or more files.

1. File replacements and additions must be delivered in the same format as the ingest metadata

2. File replacements and additions must include **the exact same asset ID** that was included when the content was originally ingested
   - _Please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com) if you need a complete listing of asset IDs as they exist in Roku Channel's system_

3. Replacement files must be delivered with a unique name both in the metadata and on the file itself in order for the update to be successful. Simply adding a version number (_v2,_ v3, etc.) would suffice. For example: `movie_title_v2.mov` \\

   - _MovieLabs file replacements may utilize the&#x20;_`md5`_&#x20;node in lieu of versioning file names_

4. Replacement files must be delivered to the exact same folder as the original delivery

5. Only the file name references of the files that are being replaced or added should be included in the metadata file. Any file that is not being replaced or added should not be delivered or referenced in the metadata file.

6. If the source video file is being replaced and there is a change in the duration of the source, any related files (captions, subtitles, audio dubs) should also be replaced.

7. File replacements require language values in order to update properly

8. Upload the file replacement or addition metadata to the "prod" folder in Aspera

Files that can be replaced via this automated method:

- video file
- series key art file
- series poster art file
- series background image file
- episode image file
- movie key art file
- movie poster art file
- movie background image file
- shortform key art file
- closed caption file
- full subtitle file
- forced narrative subtitle file
- sidecar audio file (audio dubs and descriptive audio)

## Content takedown

If rights change from when the content was originally delivered to Roku and content needs to be removed from Roku Channel either immediately or scheduled, the availability end date can be changed by providing a metadata update as defined [below](#metadata-updates-mdu-and-file-replacements). Explicit updates should be provided for all territories from which the content should be removed. Please be aware that end dates provided without time values specified will expire at 11:59:59pm on that date.

###
