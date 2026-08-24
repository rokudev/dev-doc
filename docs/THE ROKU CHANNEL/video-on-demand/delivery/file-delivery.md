---
title: File delivery
excerpt: Details to ensure successful file delivery
deprecated: false
hidden: true
metadata:
  robots: index
---
## Delivery Sequence

Video, closed caption, and artwork files **must** be **completely delivered prior to** the delivery of metadata. Metadata references these files by name, so delivering metadata first (or before the referenced files finish transferring) can cause processing failures.

***

## Folder Structure

- Production files **MUST** be delivered to the `/prod` folder. Automation depends on proper file delivery location. Failure to deliver to the correct folder will result in processing delays, or content not processing at all.
- Test files **may** be delivered to the `/testing` folder.

### Subfolders

Content **should not** be delivered into subfolders. Deliver directly to `/prod` (or `/testing`) whenever possible. **If subfolders are necessary**, follow these guidelines:

- Subfolder names **must not** begin with an underscore. Roku's system will **ignore** any subfolder beginning with an underscore. _(Note: this is a separate rule from the file-naming underscore rule below. It applies to the folder name itself, not the files inside it.)_
- Do **not** separate files into subfolders by file type (e.g., don't put all video in one subfolder and all artwork in another).
- All media files for a single title (episode, movie, or short-form) **must** be delivered to the **same** directory.
- Metadata **must** be delivered to the **same** directory as the media files it references — the ingest platform assumes referenced media files are located alongside the metadata file.
- When replacing a file delivered via subfolder, the replacement file **and** its associated metadata **must** be delivered to a folder named **identically** to the original delivery folder.

## Delivery Notifications

Delivery notifications can be sent to: [deliverynotifications@roku.com](mailto:deliverynotifications@roku.com)

***

## File Retention

The delivery location is a **temporary** staging area for partners to upload files for ingestion into the Roku Channel content library.

- Upon successful ingest, automation moves files from the delivery location to an archive location, where they are stored **indefinitely**.
- Files uploaded to the delivery location are expected to be ingested within a **reasonable timeframe, not to exceed 30 days**.
- Valid and complete metadata **must** be delivered shortly after files are delivered, to ensure timely ingest.
- Files remaining in the delivery location **after 30 days without ingesting are subject to deletion.**

> **Exception:** files in the `/testing` folder may be exempted from the file retention policy.

***

## File Naming

Source video, closed caption, and artwork files delivered for ingest **must** adhere to the following:

- File names **must not** exceed **125 characters** in length.
- File names **must** match the file name referenced in the metadata supplied for the title.
- File names are **case-sensitive**.
- File names **must** end with a proper file extension, and extensions **must** be **lowercase**.
- File names **must not** begin with an underscore. Roku's system will **ignore** any file beginning with an underscore. _(This is a separate rule from the subfolder-naming rule above. It applies to individual file names, not folder names.)_
- Whitespace and special characters **must not** be included in any file name — this restriction applies to video, subtitle, closed caption, sidecar audio, and metadata files alike. See the forbidden character table below for the complete list with character names.
- Reusing the same image across every episode of a series is **discouraged.** A unique per-episode image is preferred. **If** the same image is reused, it **must** still be delivered as a separate, uniquely-named file for each episode (e.g., `episode.jpg` delivered as `episode_01.jpg`, `episode_02.jpg`, etc.) Identical image content does not exempt a file from unique naming.

### Characters Allowed in File Names

| Character Set |
| ------------- |
| `0-9`         |
| `a-z`         |
| `A-Z`         |

| Character Name | Character |
| -------------- | --------- |
| Hyphen         | `-`       |
| Period         | `.`       |
| Underscore     | `_`       |

### Characters Forbidden in File Names

| Character Name    | Character | Character Name               | Character |
| ----------------- | --------- | ---------------------------- | --------- |
| "At" symbol       | `@`       | Left square bracket          | `[`       |
| Ampersand         | `&`       | Less than                    | `<`       |
| Asterisk          | `*`       | Percent                      | `%`       |
| Backslash         | `\`       | Plus                         | `+`       |
| Caret             | `^`       | Pound/hashtag                | `#`       |
| Colon             | `:`       | Question mark                | `?`       |
| Comma             | `,`       | Quotation marks/double quote | `"`       |
| Dollar            | `$`       | Right curly brace            | `}`       |
| Equals            | `=`       | Right square bracket         | `]`       |
| Exclamation point | `!`       | Semicolon                    | `;`       |
| Forward slash     | `/`       | Single quote/apostrophe      | `'`       |
| Grave accent      | `` ` ``   | Space                        | ` `       |
| Greater than      | `>`       | Tilde                        | `~`       |
| Left curly brace  | `{`       | Vertical pipe                | `\|`      |
| Left parenthesis  | `(`       | Right parenthesis            | `)`       |

***

## Partner Responsibility

> Correct file delivery location, proper file delivery cadence, and proper file naming are the responsibility of Roku's partners, as the partner is the expert in their own content — Roku does not always have insight into individual partner delivery schedules.

***

## Glossary

| Term                  | Definition                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ingest**            | The automated process by which Roku pulls delivered files and metadata into the Roku Channel content library.                                                 |
| **Delivery location** | The temporary staging folder(s) (`/prod`, `/testing`) partners upload to; distinct from the permanent archive location files move to after successful ingest. |
| **Sidecar file**      | A subtitle, caption, or audio file delivered alongside (not embedded in) the video file, referenced by the metadata.                                          |
