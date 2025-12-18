---
title: Roinput
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

# roInput

An roInput object can be used to receive events sent from a network client using the External Control Protocol (ECP), as described in [External Control API](/docs/developer-program/dev-tools/external-control-api.md "External Control API").

> The [supports_input_launch manifest flag](/docs/developer-program/getting-started/architecture/channel-manifest.md#launch-requirement-attributes) must be set for channels to accept deep linking parameters when already running. This flag enables deep linking into content without relaunching the app. See the [Deep Linking sample app](https://github.com/rokudev/deep-Linking-samples) for how to use roInput to handle deep links into content while the app is already running. 

Refer to [External Control Service Commands](/docs/developer-program/dev-tools/external-control-api.md#external-control-service-commands "External Control Service Commands") for information about the ECP input command.

This object is created without any arguments:

``CreateObject("roInput")``

**Example**

The following prints information received from an external device in JSON format. If the external device sends the following input command:

~~~
curl -d '' '<roku_target_device>:8060/input?my_event=My%20Test&x=100&y=200&action=start'
~~~

The following will be printed:

~~~
{"action":"start","my_event":"My Test","x":"100","y":"200"}
~~~

**roInput Example**

~~~
msgPort = CreateObject("roMessagePort")
 
input = CreateObject("roInput")
input.SetMessagePort(msgPort)
 
print "Waiting for messages..."
while true
  msg = wait(0, msgPort)
  if type(msg) = "roInputEvent"
    if msg.IsInput()
      info = msg.GetInfo()
      print "Received input: "; FormatJSON(info)
    end if
  end if
end while
~~~


## Supported interfaces

- [ifInput](/docs/references/brightscript/interfaces/ifinput.md "ifInput")


## Supported events

- [roInputEvent](/docs/references/brightscript/events/roinputevent.md "roInputEvent")