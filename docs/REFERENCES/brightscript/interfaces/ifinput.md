---
title: Ifinput
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

# ifInput


## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
| [roInput](/docs/references/brightscript/components/roinput.md "roInput")   | An roInput object can be used to receive events sent from a network client using the External Control Protocol (ECP), as described in External Control API |


## Supported methods

### GetMessagePort() as Object

#### Description

Returns the message port (if any) currently associated with the object.

#### Return Value

The message port value.

### SetMessagePort(port as Object) as Void

#### Description

Sets the roMessagePort to be used to receive events.

#### Parameters

| Name | Type   | Description                            |
| ---- | ------ | -------------------------------------- |
| port | Object | The port to be used to receive events. |

### EnableTransportEvents() as Boolean

#### Description

Registers an app to receive `roInput transport` events, which are voice commands sent via the Roku remote control, Roku mobile app, or a virtual assistant such as Amazon Alexa or Google Assistant. 

Voice commands include the following: "fast forward", "next, "play", "pause", "replay", "rewind", "seek", and "startover". Once you register your app to receive transport events, your app must call the `EventResponse()` method to handle them.

See [Implementing Voice Controls](/docs/developer-program/media-playback/voice-controls/transport-controls.md) for more information.

#### Return Value

A flag indicating whether transport event notifications were successfully registered.  

### EventResponse(roAssociativeArray aa) as Boolean

#### Description

Marks a transport command as handled, unhandled, or handled with an error. 

If your app has registered for handling transport events (by calling the `EnableTransportEvents()`function on an `roInput` object), it must call this method within 5 seconds of receiving a transport event. This is because the Roku OS needs to know whether a transport command has been handled, unhandled, or handled with an error. If a transport event is marked as unhandled, the Roku OS can provide the default behavior. If a transport event is marked as handled with an error, the Roku OS can provide on-screen feedback.

If your app has registered for transport events, but does not call this method within 5 seconds of receiving a transport event, the event is considered unhandled.

#### Parameters

This method takes an AssociativeArray with two fields: **id** and **status**. The **id** field specifies the transport ID event; the **status** specifies whether the event was handled, handled with an error, or unhandled.

| Parameter | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| Id        | String | The unique ID of the transport event.                        |
| status    | String | Indicates whether the event was handled successfully, handled with an error, or unhandled. This may be one of the following values: <br/><br/>${eventResponseStatusList} |

{#eventResponseStatusList}

* "error.generic". No active media is available to fulfill the voice command. Passing this status displays "That is not available" in the Roku Voice heads-up display. This can be used in cases, for example, when an app receives a "forward" or "next" command, but there is no content to fast forward or play next, respectively.
* "unhandled". The app is not handling the event. The default behavior is executed by the Roku OS, if defined.
* "error".  The app failed to handle the event in that instance.
* "error.ad". The transport command failed because an ad is playing.
* "error.channel". The app does not support this command in any context.
* "error.live". The transport command failed because the content is live. 
* "error.no-media". There is no media active.
* "error.redundant". The transport command does not change the current state ("pause" command sent when the content is already paused)
* "success". The app handled the event successfully.
* "success.seek-start".  A seek command was handled successfully, but the seek duration was before the beginning.
* "success.seek-end". A seek command was handled successfully but the seek location was past the end.

#### Return Value

A flag indicating whether the event response operation was successful.  