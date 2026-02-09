---
title: "roAppMemoryMonitor"
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




The **roAppMemoryMonitor** component is used to subscribe apps to low-memory notifications. When an app is subscribed, it receives a [roAppMemoryNotificationEvent ](doc:roappmemorynotificationevent)when it reaches a specific percentage of the per-app memory limit (80%).

> The roAppMemoryMonitor functions are supported on all [current and updatable device models](doc:hardware), except for Liberty, Austin, Mustang and Littlefield.

## Supported interfaces

- [ifAppMemoryMonitor](doc:ifappmemorymonitor)

## Supported events

- [roAppMemoryNotificationEvent](doc:roappmemorynotificationevent)
- [ifSetMessagePort](doc:ifsetmessageport)
- [ifGetMessagePort](doc:ifgetmessageport)
