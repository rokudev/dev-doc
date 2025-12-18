---
title: Rotexttospeechevent
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

# roTextToSpeechEvent



> Please note this component is only available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.2 and later.


The [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md "roTextToSpeech") component sends the roTextToSpeechEvent with the following predicates that indicate its valid event types.

## Supported methods

### GetData() as Integer

Returns the description of the speech, which may be one of the following values:

| ID   | Interpretation                      |
| ---- | ----------------------------------- |
| 0    | Started speech                      |
| 1    | Speech has completed                |
| 2    | Speech has been interrupted/flushed |
| 4    | Current language has been changed   |
| 5    | Current voice has been changed      |
| 6    | Speech rate has been changed        |
| 7    | Speech volume has been changed      |

### GetInfo() as Object

Returns an associative array with the following key-value pairs, depending the value returned by the [GetData()](/docs/references/brightscript/events/rotexttospeechevent.md#getinfo-as-object "GetData()") method:

| Key      | Type    | Value                                                                            |
| -------- | ------- | -------------------------------------------------------------------------------- |
| Enabled  | Boolean | If GetData() returned 3, indicates the enabled/disabled status of text to speech |
| Language | String  | If GetData() returned 4, indicates the new language                              |
| Voice    | String  | If GetData() returned 5, indicates the new voice                                 |
| Rate     | Integer | If GetData() returned 6, indicates the new speech rate                           |
| Volume   | Integer | If GetData() returned 7, indicates the new speech volume                         |

### GetIndex() as Integer

The text to speech service may be shared among any number of clients; therefore, the IDs returned to a given client are not necessarily contiguous. The value is only meaningful if [GetData()](/docs/references/brightscript/events/rotexttospeechevent.md#getinfo-as-object "GetData()") returned 0, 1 or 2; it returns 0 otherwise.

This method returns the ID of the speech as returned by either the [Say()](/docs/references/brightscript/interfaces/iftexttospeech.md#saytext-as-string-as-integer "Say()")" or [Silence()](/docs/references/brightscript/interfaces/iftexttospeech.md#silenceduration-as-integer-as-integer "Silence()") methods of the [ifTextToSpeech](/docs/references/brightscript/interfaces/iftexttospeech.md "ifTextToSpeech") interface.