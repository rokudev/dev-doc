---
title: File delivery
excerpt: Details to ensure successful file delivery
deprecated: false
hidden: true
metadata:
  robots: index
---
- Video, closed captions, and artwork files must be _completely delivered prior to the delivery of metadata_

- Production files MUST be delivered to the `/prod` folder. Automation is dependent on proper file delivery location. Failure to deliver files to the correct folder will result in processing delays or content not processing at all

- Test files may be delivered to the `/testing` folder

- It is preferred that content not be delivered to subfolders. If subfolders are necessary, follow the below guidelines:
  - Subfolders must **not** begin with an underscore. Roku's system will ignore sufolders beginning with an underscore
  - Do **not** separate files into subfolders by file type
  - All media files for a single title (episode, movie, or shortForm) must be delivered to the same directory
  - The ingest platform assumes media files referenced in the metadata are in the same directory as the metadata file. As such, metadata must be delivered to the same directory as the media files contained within the metadata
  - When using subfolders, if a file replacement needs to be made, the replacement file and associated metadata must be delivered to a folder named identically to the original delivery

- Delivery notifications can be sent to [deliverynotifications@roku.com](mailto:deliverynotifications@roku.com)

## File retention

The delivery location is a temporary location for our Partners to upload files for ingestion into Roku Channel content library. Automation will move files from the delivery location upon successful ingest to an archive location to be stored indefinitely. All files uploaded to the delivery location are expected to be ingested within a reasonable time frame not to exceed 30 days. Valid and complete metadata must be delivered shortly after files are delivered to ensure timely ingest. Files in the delivery location that have not ingested after 30 days are subject to deletion.

_Exceptions to the file retention policy may be made to files in the&#x20;_`/testing`_&#x20;folder_

## File naming

Source video, closed captions, and artwork files delivered for ingest must adhere to the following guidelines:

- File names must not exceed 125 characters in length
- File names must match the reference to the file name in the metadata supplied for the title delivered
- File names are case-sensitive
- File names must end with a proper file extension. File extensions are expected to be lowercase
- File names must **not** begin with an underscore. Roku's system will ignore files beginning with an underscore
- Whitespace and special characters `!@#$%^&*(){}|[]\;:’”?/><,` must not be included in any file name (this includes video, subtitle, closed caption, sidecar audio, and metadata files)
- The same image can be used for every episode of a series, but it is not ideal. If the same image is used for every episode, that image must be delivered multiple times and uniquely named for each episode. For example, “episode.jpg” should be delivered as “episode_01.jpg”, “episode_02.jpg”, etc.…

### Characters allowed in file names

| Character sets        |
| --------------------- |
| 0-9<br />a-z<br />A-Z |

| Character name | Character |
| -------------- | --------- |
| Hyphen         | -         |
| Period         | .         |
| Underscore     | \_        |

### Characters forbidden in file names

| Character Name   | Character | Character Name               | Character |
| ---------------- | --------- | ---------------------------- | --------- |
| "At" symbol      | @         | Left square bracket          | \[        |
| Ampersand        | &         | Less than                    | \<        |
| Asterisk         | \*        | Percent                      | %         |
| Backslash        | \\        | Plus                         | +         |
| Caret            | ^         | Pound/hashtag                | #         |
| Colon            | :         | Question mark                | ?         |
| Comma            | ,         | Quotation marks/double quote | "         |
| Dollar           | $         | Right curly brace            | \}        |
| Equals           | =         | Right square bracket         | ]         |
| Forward slash    | /         | Semicolon                    | ;         |
| Grave accent     | \`        | Space                        | ` `       |
| Greater than     | >         | Tilde                        | \~        |
| Left curly brace | \{        | Vertical pipe                | \|        |

_Correct file delivery location, proper file delivery cadence, and proper file naming is the responsibility of our Partners as the Partner is the expert in their own content and we do not always have insight into individual Partner delivery schedules._
