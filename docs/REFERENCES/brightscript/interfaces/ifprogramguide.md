---
title: Ifprogramguide
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

# ifProgramGuide

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roProgramGuide](/docs/references/brightscript/components/roprogramguide.md) | Represents Electronic Program Guide (EPG) information from the tuner. |

## Supported methods

### GetChannels(id as Integer) as Object

#### Description

Returns the list of logical channel numbers on which the given program ID can be found.

#### Parameters

| Name | Type    | Description           |
| ---- | ------- | --------------------- |
| id   | Integer | The program ID containing  to be returned. |

### GetNowNextPrograms(channel as String) as Dynamic

#### Description

Returns details about the current and next program on an app. 

#### Parameters

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| channel | String | The app number for which programs are to be retrieved. |

#### Return Value

An roAssociativeArray containing two roArray components: one for the current program and another for the next program on the app. Each roArray contains the following key/value pairs detailing the program:   

| **Key**              | **Type**                   | **Value**                                                    |
| -------------------- | -------------------------- | ------------------------------------------------------------ |
| name                 | String                     | Descriptive name for the program.                            |
| id                   | String                     | ID for the program, not guaranteed to be unique,   suitable for passing to GetChannels. |
| description          | String                     | Longer description for the program.                          |
| category             | String                     | Genre of the program, such as Drama, Sport, and so forth.    |
| start_time           | roDateTime                 | Starting time of this program.                               |
| duration             | Integer                    | Length of this program in seconds.                           |
| subtitles            | String                     | (Optional) If present indicates this program has subtitles.  |
| format               | roAssociativeArray         | Indicates the media format, with the following keys, all of which are optional. The value for each key is the Boolean string   "true" to indicate the format option. |
| Rating               | roAssociativeArray         | (Optional) Rating and parental guidance information.         |
| link                 | roAssociativeArray         | (Optional) Links to other related programs.                  |
| content_metadata     | Content Meta­ Data  object | Name, description, start_time, duration and format of   this program. |
| Rating Region UK DTT | String                     | **UK digital terrestrial TV only**<br/><br/>(Optional) A JSON object encoded as string representing viewer guidance type and description. |
| Link HD   simulcast  | String                     | **UK digital terrestrial TV only****<br/><br/>(Optional) A JSON object encoded as string representing a list of other service_id and event_id pairs   on which this program is simultaneously broadcast in HD. |

### GetVersion() as Integer

#### Description

Returns an integer which is incremented each time the underlying data in the guide changes.

#### Return Value

The version number of the program guide.

### GetPrograms(startTime as roDateTime, channel as String, endTime as roDateTime) as Object

#### Description

Returns the programs falling within the given time range. 

#### Parameters

| Name      | Type       | Description                                                |
| --------- | ---------- | ---------------------------------------------------------- |
| startTime | roDateTime | The start time programs must fall within to be retrieved.  |
| channel   | String     | The app number for which programs are to be retrieved. |
| endTime   | roDateTime | The end time programs must fall within to be retrieved.    |

#### Return Value

An roArray of programs falling within the given time range (returns invalid if the given channel is unknown). Each entry in the array contains an roAssociativeArray containing the following details of a program: 

| **Key**              | **Type**                   | **Value**                                                    |
| -------------------- | -------------------------- | ------------------------------------------------------------ |
| name                 | String                     | Descriptive name for the program.                            |
| id                   | String                     | ID for the program, not guaranteed to be unique,   suitable for passing to GetChannels. |
| description          | String                     | Longer description for the program.                          |
| category             | String                     | Genre of the program, such as Drama, Sport, and so forth.    |
| start_time           | roDateTime                 | Starting time of this program.                               |
| duration             | Integer                    | Length of this program in seconds.                           |
| subtitles            | String                     | (Optional) If present indicates this program has subtitles.  |
| format               | roAssociativeArray         | Indicates the media format, with the following keys, all of which are optional. The value for each key is the Boolean string   "true" to indicate the format option. |
| Rating               | roAssociativeArray         | (Optional) Rating and parental guidance information.         |
| link                 | roAssociativeArray         | (Optional) Links to other related programs.                  |
| content_metadata     | Content Meta­ Data  object | Name, description, start_time, duration and format of   this program. |
| Rating Region UK DTT | String                     | **UK digital terrestrial TV only**<br/><br/>(Optional) A JSON object encoded as string representing viewer guidance type and description. |
| Link HD   simulcast  | String                     | **UK digital terrestrial TV only****<br/><br/>(Optional) A JSON object encoded as string representing a list of other service_id and event_id pairs   on which this program is simultaneously broadcast in HD. |