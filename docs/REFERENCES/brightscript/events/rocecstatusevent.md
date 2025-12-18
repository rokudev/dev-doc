---
title: Rocecstatusevent
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

# roCECStatusEvent

The roCECStatusEvent determines the active source status for set boxes. Apps subscribing to the roCECStatusEvent are notified when the active-source status of the device changes per the CEC message traffic.

To use the roCECStatusEvent, follow the steps below:

1. Connect a Roku STB to a TV which transmits and receives CEC messages.

2. Select the HDMI input to which the STB is connected.
3. Switch away and then back to the STB's HDMI input.

## Supported methods

### GetMessage() as String
Returns the string "CECStatus".

### GetIndex() as Integer
The index value of this event is not used and is always set to 0.

### GetInfo() as Object
Returns an associative array with the following key/value pairs:

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| active | Boolean | Indicates whether the device is the active source (true if it is the active source; otherwise, false). |

## Subscription

A BrightScript app subscribes to roCECStatusEvent by creating an "roCECStatus" object. For example:

~~~
cecstatus = CreateObject("roCECStatus")
m.port = CreateObject("roMessagePort")
cecstatus.SetMessagePort(m.port)
...
msg = wait(0, m.port)
msgType = type(msg)
if msgType = "roCECStatusEvent"
    info = msg.GetInfo()
    active = info["Active"]
    ...
end if
~~~


## Expected Results

Apps subscribing to the event are notified when the active-source status of the device changes.
