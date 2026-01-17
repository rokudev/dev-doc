---
title: "roAppMemoryMonitor"
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




The **roAppMemoryMonitor** component is used to subscribe apps to low-memory notifications. When an app is subscribed, it receives a [roAppMemoryNotificationEvent ](/docs/references/brightscript/events/roappmemorynotificationevent.md)when it reaches a specific percentage of the per-app memory limit (80%).

> The roAppMemoryMonitor functions are supported on all [current and updatable device models](/docs/specs/hardware.md), except for Liberty, Austin, Mustang and Littlefield.

## Supported interfaces

- [ifAppMemoryMonitor](/docs/references/brightscript/interfaces/ifappmemorymonitor.md)

## Supported events

- [roAppMemoryNotificationEvent](/docs/references/brightscript/events/roappmemorynotificationevent.md)
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")
