---
title: Roinputevent
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

# roInputEvent

The roInput component sends the roInputEvent with the following predicates that indicate its valid event types:

## Supported methods

### isInput() as Boolean

Checks if an input event was received. This method returns true if an input event was received; otherwise, it returns false.

### GetInfo() as Object

Returns an roAssociativeArray describing the input event, which may be one of the following values:

| Key       | Type        | Value                                                        |
| ------   | ---------- | ----------------------------------------------------------- |
| type      | string      | The type of event, which may be one of the following values:${inputCommandList} |
| id        | LongInteger | The unique ID associated with the generated transport event  |
| command   | string      | The type of command: ${transportEventList} |
| direction | string      | For the "seek" transport command only. Specifies the direction of the seek command, which may be "forward" or "backward". |
| duration  | string      | For the "seek" transport command only. Specifies the number of seconds to skip forward or backward.  |
| text | string | If the **type** is set to "transport" and the **command** is set to "action", this field contains the utterance matching the name or word previously registered for the app with the [roAppManager.SetVoiceActionStrings()](/docs/references/brightscript/interfaces/ifappmanager.md#setvoiceactionstringsactions-as-object-as-void) method. |
| ordinal | string | If the **type** is "transport" and the **command** is "select", this field includes a numerical value that corresponds to the ordinal number spoken by the user. Values may range between 1–6 (one-base indexing is used). |

{#inputCommandList}

- **transport**. The app received a voice request to control the playback of content or select a user from a profile selection screen.

{#transportEventList}

- "action" (). Indicates that the app has received an utterance matching a name or word previously registered with the [roAppManager.SetVoiceActionStrings()](/docs/references/brightscript/interfaces/ifappmanager.md#setvoiceactionstringsactions-as-object-as-void) method.
- "select" ().  Indicates that the app has received a command for selecting an item via an ordinal number.
- "forward"
- "next"
- "pause"
- "play"
- "replay"
- "resume"
- "rewind"
- "seek"
- "stop"
- "startover"
- "nowplaying"
- "skip"
- "shuffle"
- "loop"
- "like"
- "dislike"
