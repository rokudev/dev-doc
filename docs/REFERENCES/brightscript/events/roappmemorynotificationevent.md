---
title: "roAppMemoryNotificationEvent"
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


The [roAppMemoryMonitor](doc:roappmemorymonitor) component sends the **roAppMemoryNotificationEvent** with the percentage of memory consumed by the app compared to per-app memory limit. 

## Supported methods

### GetInfo() as Object

Returns an associative array with the following key/value pair:

| Name               | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| memoryUsagePercent | The percentage of memory consumed by the app compared to per-app memory limit. |
