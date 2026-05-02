---
title: ifAppMemoryMonitor
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Implemented by

| Name                                         | Description                                                                                                                                                                                                                                                                |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [roAppMemoryMonitor](doc:roappmemorymonitor) | Subscribes apps to low-memory notifications. As of [Roku OS 15.2](doc:release-notes#roku-os-152), subscribed apps receive [roAppMemoryNotificationEvent](doc:roappmemorynotificationevent)  alerts when memory usage exceeds or falls below thresholds (currently 80%, 85%, 90%, 95% of the per-app limit). |

> The roAppMemoryMonitor functions are supported on all [current and updatable device models](doc:hardware), except for Liberty, Austin, Mustang and Littlefield.
>
> Starting October 1, 2026, all apps must integrate the ifAppMemoryMonitor functions to pass certification testing. If your app does not include these APIs, Static Analysis Testing will report an error and block the publishing of your app.

## Supported methods

### EnableMemoryWarningEvent(enable as Boolean) as Boolean

#### Description

Enables an app to be alerted when memory usage exceeds or falls below thresholds (currently 80%, 85%, 90%, 95% of the per-app limit). These thresholds may change in future releases. Notifications are throttled to prevent excessive events.

#### Parameter

| Name   | Type    | Description                                               |
| :----- | :------ | :-------------------------------------------------------- |
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

_Available since [Roku OS 12.5](doc:release-notes#roku-os-125)_

#### Description

Returns the estimated kilobytes (Kb) of memory available for the app. This can be used to determine when to release memory when an app receives low-memory warnings.

#### Return Value

An integer indicating the estimated available memory remaining for the app or the available memory for the device, whichever is lower.

### GetChannelMemoryLimit() as Object

_Available since [Roku OS 13.0](doc:release-notes#roku-os-130)_

**Description**

Returns the amount of foreground and background memory the app may use and the maximum amount of memory that the RokuOS may allocate on behalf of the app (the memory that shows up in the app's heap memory statistics). This helps developers debug memory issues and find out the maximum available memory for scenarios such as when their app has been suspended and is in the background, is playing a video, and so on.

**Return Value**

An roAssociativeArray that contains the following fields:

| Field                    | Kind    | Description                                                                                                                  |
| :----------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------- |
| maxForegroundMemory      | Integer | The maximum amount of memory that app could have when it is running in the foreground.                                       |
| maxBackgroundMemory      | Integer | The maximum amount of memory that app could have when it is running in the background.                                       |
| maxRokuManagedHeapMemory | Integer | The maximum amount of memory that the RokuOS may allocate on behalf of the app that shows up in the app's heap memory stats. |
