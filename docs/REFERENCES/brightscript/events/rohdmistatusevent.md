---
title: "roHdmiStatusEvent"
excerpt: 'Event fired when an HDMI device is plugged or unplugged on a port'
deprecated: false
hidden: false
metadata:
  title: 'roHdmiStatusEvent'
  description: 'roHdmiStatusEvent is sent by roHdmiStatus to report HDMI plug and unplug occurrences, providing port type, port number, and plug state via GetInfo().'
  robots: index
next:
  description: ''
---


The roHdmiStatus sends the roHdmiStatusEvent with the following predicates that indicate its valid event types:

## Supported methods

### isHdmiStatus() as Boolean

Checks if an HDMI status event has occurred. This method returns true if an HDMI status event has occurred; otherwise, it returns false. 

#### GetMessage() as String

Returns the string "HdmiHotPlug".

#### GetInfo() as Object

Retrieves the HDMI information. This method returns an associative array with the following key/value pairs:

| Key        | Type    | Value                                                                    |
| ---------- | ------- | ------------------------------------------------------------------------ |
| PortType   | string  | “Rx” for input ports and “Tx” for output ports                           |
| PortNumber | integer | The HDMI input or output port number starting from 0                     |
| Plugged    | Boolean | True if an HDMI device is plugged in, and false of the port is unplugged |

#### GetIndex() as Integer

The index value of this event is not used and is always set to 0.