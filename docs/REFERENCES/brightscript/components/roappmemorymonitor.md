---
title: roAppMemoryMonitor
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
The **roAppMemoryMonitor** component is used to subscribe apps to low-memory notifications. As of Roku OS 15.2, subscribed apps receive [roAppMemoryNotificationEvent](doc:roappmemorynotificationevent) alerts when memory usage exceeds or falls below thresholds (currently 80%, 85%, 90%, 95% of the per-app limit). These thresholds may change in future releases. Notifications are throttled to prevent excessive events.

> The roAppMemoryMonitor functions are supported on all [current and updatable device models](doc:hardware), except for Liberty, Austin, Mustang and Littlefield.
>
> Starting October 1, 2026, all apps must integrate the roAppMemoryMonitor interface and events to pass certification testing. If your app does not include these APIs, Static Analysis will report an error and block the publishing of your app.

## Supported interfaces

* [ifAppMemoryMonitor](doc:ifappmemorymonitor)

## Supported events

* [roAppMemoryNotificationEvent](doc:roappmemorynotificationevent)
* [ifSetMessagePort](doc:ifsetmessageport)
* [ifGetMessagePort](doc:ifgetmessageport)
