---
title: "ifInput"
excerpt: 'Interface for receiving transport events and voice commands via roInput'
deprecated: false
hidden: false
metadata:
  title: 'ifInput'
  description: 'Documents the ifInput interface, which enables apps to receive transport events from voice commands sent via the Roku remote control or a virtual assistant.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
| [roInput](doc:roinput)   | An roInput object can be used to receive events sent from a network client using the External Control Protocol (ECP), as described in External Control API |


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

See [Implementing Voice Controls](doc:transport-controls) for more information.

#### Return Value

A flag indicating whether transport event notifications were successfully registered.  

### EventResponse(aa as roAssociativeArray) as Boolean

#### Description

Marks a transport command as handled, unhandled, or handled with an error. 

If your app has registered for handling transport events (by calling the `EnableTransportEvents()`function on an `roInput` object), it must call this method within 5 seconds of receiving a transport event. This is because the Roku OS needs to know whether a transport command has been handled, unhandled, or handled with an error. If a transport event is marked as unhandled, the Roku OS can provide the default behavior. If a transport event is marked as handled with an error, the Roku OS can provide on-screen feedback.

If your app has registered for transport events, but does not call this method within 5 seconds of receiving a transport event, the event is considered unhandled.

#### Parameters

This method takes an AssociativeArray with two fields: **id** and **status**. The **id** field specifies the transport ID event; the **status** specifies whether the event was handled, handled with an error, or unhandled.


<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Id</td>
<td>String</td>
<td>The unique ID of the transport event.</td>
</tr>
<tr>
<td>status</td>
<td>String</td>
<td>Indicates whether the event was handled successfully, handled with an error, or unhandled. This may be one of the following values: <br /><br /><ul><li>"error.generic". No active media is available to fulfill the voice command. Passing this status displays "That is not available" in the Roku Voice heads-up display. This can be used in cases, for example, when an app receives a "forward" or "next" command, but there is no content to fast forward or play next, respectively.</li><li>"unhandled". The app is not handling the event. The default behavior is executed by the Roku OS, if defined.</li><li>"error".  The app failed to handle the event in that instance.</li><li>"error.ad". The transport command failed because an ad is playing.</li><li>"error.channel". The app does not support this command in any context.</li><li>"error.live". The transport command failed because the content is live. </li><li>"error.no-media". There is no media active.</li><li>"error.redundant". The transport command does not change the current state ("pause" command sent when the content is already paused)</li><li>"success". The app handled the event successfully.</li><li>"success.seek-start".  A seek command was handled successfully, but the seek duration was before the beginning.</li><li>"success.seek-end". A seek command was handled successfully but the seek location was past the end.</li></ul></td>
</tr>
</tbody>
</table>



#### Return Value

A flag indicating whether the event response operation was successful.  