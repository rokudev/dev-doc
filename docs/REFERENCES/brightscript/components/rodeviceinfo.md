---
title: Rodeviceinfo
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

# roDeviceInfo

The Device Info provides an interface to obtain attributes about the device.

These attributes are not changeable by the script, but may be queried to obtain values for the player. It is common for scripts to need access to the serial number and model info for negotiating with backend services.

This object is created with no parameters:

``CreateObject("roDeviceInfo")``

**Example**

~~~
di = CreateObject("roDeviceInfo")
print di.GetModel()
print di.GetVersion()
print di.GetChannelClientId()
~~~

**Output**

The output from the above code would like the following:

~~~
 N1000
 999.99E99999X
 20E825000036
~~~


## Supported interfaces

- [ifDeviceInfo](/docs/references/brightscript/interfaces/ifdeviceinfo.md "ifDeviceInfo ")
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")


## Supported events

- [roDeviceInfoEvent](/docs/references/brightscript/events/rodeviceinfoevent.md "roDeviceInfoEvent")
