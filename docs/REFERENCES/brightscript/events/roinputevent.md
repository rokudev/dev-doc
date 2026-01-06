---
title: roInputEvent
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

<Table>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Type
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        type
      </td>

      <td>
        string
      </td>

      <td>
        The type of event, which may be one of the following values:- **transport**. The app received a voice request to control the playback of content or select a user from a profile selection screen.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        LongInteger
      </td>

      <td>
        The unique ID associated with the generated transport event
      </td>
    </tr>

    <tr>
      <td>
        command
      </td>

      <td>
        string
      </td>

      <td>
        The type of command:   

        * "action()". Indicates that the app has received an utterance matching a name or word previously registered with the [roAppManager.SetVoiceActionStrings()](/docs/references/brightscript/interfaces/ifappmanager.md#setvoiceactionstringsactions-as-object-as-void)   
        * "select()". Indicates that the app has received a command for selecting an item via an ordinal number. 
        * "forward" 
        * "next" 
        * "pause" 
        * "play" 
        * "replay"
        * "resume"
        * "rewind"
        * "seek"
        * "stop"
        * "startover"
        * "nowplaying"
        * "skip"
        * "shuffle"
        * "loop"
        * "like"
        * "dislike"
      </td>
    </tr>

    <tr>
      <td>
        direction
      </td>

      <td>
        string
      </td>

      <td>
        For the "seek" transport command only. Specifies the direction of the seek command, which may be "forward" or "backward".
      </td>
    </tr>

    <tr>
      <td>
        duration
      </td>

      <td>
        string
      </td>

      <td>
        For the "seek" transport command only. Specifies the number of seconds to skip forward or backward.
      </td>
    </tr>

    <tr>
      <td>
        text
      </td>

      <td>
        string
      </td>

      <td>
        If the **type** is set to "transport" and the **command** is set to "action", this field contains the utterance matching the name or word previously registered for the app with the [roAppManager.SetVoiceActionStrings()](/docs/references/brightscript/interfaces/ifappmanager.md#setvoiceactionstringsactions-as-object-as-void) method.
      </td>
    </tr>

    <tr>
      <td>
        ordinal
      </td>

      <td>
        string
      </td>

      <td>
        If the **type** is "transport" and the **command** is "select", this field includes a numerical value that corresponds to the ordinal number spoken by the user. Values may range between 1–6 (one-base indexing is used).
      </td>
    </tr>
  </tbody>
</Table>
