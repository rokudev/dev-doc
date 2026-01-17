---
title: "ifAppMemoryMonitor"
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


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roAppMemoryMonitor](/docs/references/brightscript/components/roappmemorymonitor.md "roAppMemoryMonitor") | Subscribes channels to low-memory notifications. When an app is subscribed, it receives a [roAppMemoryNotificationEvent](/docs/references/brightscript/events/roappmemorynotificationevent.md) when it reaches a specific percentage of the per-app memory limit (80%). |

> The roAppMemoryMonitor functions are supported on all [current and updatable device models](/docs/specs/hardware.md), except for Liberty, Austin, Mustang and Littlefield.



## Supported methods

### EnableMemoryWarningEvent(enable as Boolean) as Boolean

#### Description

Enables an app to be alerted when it has reached 80% of its memory usage limit.

#### Parameter

| Name   | Type    | Description                                                  |
| :----- | :------ | :----------------------------------------------------------- |
| enable | Boolean | A flag that enables or disables memory alerts on the app. |

#### Return Values

A flag indicating whether memory alerts have been enabled.

### GetMemoryLimitPercent() as Int

#### Description

Returns the usage percentage of memory limit for the app.

#### Return Values

The usage percentage of memory limit for the app.

#### Example

```
m.port = CreateObject("roMessagePort")
deviceInfo = CreateObject("roAppMemoryMonitor")
deviceInfo.setMessagePort(m.port)
ret = deviceInfo.EnableMemoryWarningEvent(true)
if ret = true
    m.global.forCgroup="true"
else
    m.global.forCgroup="false"
    deviceInfo = CreateObject("roDeviceInfo")
    deviceInfo.setMessagePort(m.port)
    deviceInfo.enableLowGeneralMemoryEvent(true)
end if
print "showChannelSGScreen forCgroup= " m.global.forCgroup
while(true)
    msg = wait(0, m.port)
    msgType = type(msg)
    if msgType = "roSGScreenEvent"
        if msg.isScreenClosed() then return
    else if msgType = "roAppMemoryNotificationEvent"
        print "Event MemoryUsagePercent = "            
        msg.getInfo().lookup("MemoryUsagePercent")
        m.global.getEvent="true"
    else if msgType = "roDeviceInfoEvent"
        print "Event generalMemoryLevel = " msg.getInfo().lookup("generalMemoryLevel")
        m.global.getEvent="true"
    end if
end while
```

### GetChannelAvailableMemory() as Int

*Available since Roku OS 12.5*

#### Description

Returns the estimated kilobytes (Kb) of memory available for the app. This can be used to determine when to release memory when an app receives low-memory warnings.

#### Return Value

An integer indicating the estimated available memory remaining for the app or the available memory for the device, whichever is lower.

### GetChannelMemoryLimit() as Object

*Available since Roku OS 13.0*

**Description**

Returns the amount of foreground and background memory the app may use and the maximum amount of memory that the RokuOS may allocate on behalf of the app (the memory that shows up in the app's heap memory statistics). This helps developers debug memory issues and find out the maximum available memory for scenarios such as when their app has been suspended and is in the background, is playing a video, and so on.

**Return Value**

An roAssociativeArray that contains the following fields:

| Field                    | Kind    | Description                                                  |
| :----------------------- | :------ | :----------------------------------------------------------- |
| maxForegroundMemory      | Integer | The maximum amount of memory that app could have when it is running in the foreground. |
| maxBackgroundMemory      | Integer | The maximum amount of memory that app could have when it is running in the background. |
| maxRokuManagedHeapMemory | Integer | The maximum amount of memory that the RokuOS may allocate on behalf of the app that shows up in the app's heap memory stats. |
