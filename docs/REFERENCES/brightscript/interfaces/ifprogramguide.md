---
title: "ifProgramGuide"
excerpt: 'Interface for querying channels, programs, and version data from a program guide'
deprecated: false
hidden: false
metadata:
  title: 'ifProgramGuide'
  description: 'Documents the ifProgramGuide interface, which provides methods to retrieve channel lists, program details, and version information from the program guide.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roProgramGuide](doc:roprogramguide) | Represents Electronic Program Guide (EPG) information from the tuner. |

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


<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Value</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>Descriptive name for the program.</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>ID for the program, not guaranteed to be unique,   suitable for passing to GetChannels.</td>
</tr>
<tr>
<td>description</td>
<td>String</td>
<td>Longer description for the program.</td>
</tr>
<tr>
<td>category</td>
<td>String</td>
<td>Genre of the program, such as Drama, Sport, and so forth.</td>
</tr>
<tr>
<td>start_time</td>
<td>roDateTime</td>
<td>Starting time of this program.</td>
</tr>
<tr>
<td>duration</td>
<td>Integer</td>
<td>Length of this program in seconds.</td>
</tr>
<tr>
<td>subtitles</td>
<td>String</td>
<td>(Optional) If present indicates this program has subtitles.</td>
</tr>
<tr>
<td>format</td>
<td>roAssociativeArray</td>
<td>Indicates the media format, with the following keys, all of which are optional. The value for each key is the Boolean string   "true" to indicate the format option.</td>
</tr>
<tr>
<td>Rating</td>
<td>roAssociativeArray</td>
<td>(Optional) Rating and parental guidance information.</td>
</tr>
<tr>
<td>link</td>
<td>roAssociativeArray</td>
<td>(Optional) Links to other related programs.</td>
</tr>
<tr>
<td>content_metadata</td>
<td>Content Meta­ Data  object</td>
<td>Name, description, start_time, duration and format of   this program.</td>
</tr>
<tr>
<td>Rating Region UK DTT</td>
<td>String</td>
<td><strong>UK digital terrestrial TV only</strong><br /><br />(Optional) A JSON object encoded as string representing viewer guidance type and description.</td>
</tr>
<tr>
<td>Link HD   simulcast</td>
<td>String</td>
<td><strong>UK digital terrestrial TV only</strong>**<br /><br />(Optional) A JSON object encoded as string representing a list of other service_id and event_id pairs   on which this program is simultaneously broadcast in HD.</td>
</tr>
</tbody>
</table>


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
