---
title: Channel Stability
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

# Channel Stability Report

You can use the Channel Stability Report to analyze your app's performance based on BrightScript crashes and memory closures. This report includes a graph for each currently supported Roku device model, and each graph plots these two stability metrics for each device model in weekly intervals over the last 30 days (you can change the default reporting period and the data interval).

This lets you view aggregated memory closure data to identify whether you need to resolve resource consumption issues with your app. If you observe an elevated number of memory closures, you can further pinpoint the problem using the [Roku Resource Monitor](https://developer.roku.com/en-ca/docs/developer-program/dev-tools/resource-monitor.md) and the [BrightScript Profiler](/docs/developer-program/dev-tools/brightscript-profiler.md).

The report also lets you observe whether crashes occur disproportionality on lower-end devices. In this case, it may indicate that you need to improve the graceful degradation aspects of your app to ensure it is performant across all current/updateable device models.

![roku815px - channel-stability-report](https://image.roku.com/ZHZscHItMTc2/channel-stability-report-v3.png)

> When a new Roku OS version is being deployed, there is a period of time when some devices will start receiving the new OS version while others remain on the current one. During this time, the graphs will include two sets of line plots for both the current and new Roku OS versions until the new OS has been rolled out to all devices.
>
> You should monitor the Channel Stability Report during this time to ensure your app's performance remains consistent on the new Roku OS.
