---
title: "roAppMemoryNotificationEvent"
excerpt: 'Event reporting app memory usage as a percentage of the per-app limit'
deprecated: false
hidden: false
metadata:
  title: 'roAppMemoryNotificationEvent'
  description: 'roAppMemoryNotificationEvent is sent by roAppMemoryMonitor and reports the percentage of memory consumed by the app compared to the per-app memory limit.'
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
