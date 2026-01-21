---
title: "Roku Resource Monitor"
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


The Roku Resource Monitor tracks and visualizes several key metrics, including system and graphics memory usage, CPU consumption, memory allocation for BrightScript objects, counts for SceneGraph nodes, the number of rendezvous events, and the graphics rendering frame rate. This enables developers to test the different screens in their app and identify resource consumption trends and patterns. 

The Roku Resource Monitor is intended to be used in conjunction with the [BrightScript Profiler](doc:brightscript-profiler) to improve app performance. For example, if the Roku Resource Monitor consistently shows increased consumption with a specific action on a screen, developers can use the [BrightScript Profiler](doc:brightscript-profiler) to further drill down into the app and pinpoint where to optimize the code.

> **Roku Resource Monitor 4.2**: The latest version of the tool features a new **Data Collection Mode** that enables developers to integrate a headless version of the tool into their CI/CD pipelines. This provides developers with automated data collection and performance monitoring without having to use the RRM UI. The collected data is saved as a JSON file and it can be attached to bug tickets, opened in the RRM UI for visualization, or post-processed to detect memory leaks and other trends.
>
> Click [here](doc:rrm-data-collection-mode) to learn how to use RRM in Data Collection Mode. 


## Prerequisites

To run the Roku Resource Monitor, you need the following:

- A Roku device with [developer mode enabled](doc:developer-setup). The Roku Resource Monitor does not support Littlefield or Liberty device models. The compatible Roku OS for the different versions of the tool are as follows:
  - RRM 4.x: Roku OS 14.5 (or higher) or Roku OS 14.1.
  - RRM 3.1: Roku OS 13.5 or Roku OS 13.0.

  > As of Roku OS 14.1, the **Settings > System > Advanced system settings > Control by mobile apps** feature must be set to "Enabled" or "Permissive" for RRM to get data from your device.

- Roku app (the Roku Resource Monitor works with apps running in [sideloaded](doc:developer-setup), beta, or production environments).
  - To use the Roku Resource Monitor on an app running in a [beta](doc:channel-publishing-guide) or [production](doc:channel-publishing-guide) environment, the developer must own the app.
  - The Roku Resource Monitor is compatible with apps that use the [Instant Resume feature](doc:instant-resume) and will show background memory consumption.

## Getting started

To run the Roku Resource Monitor, follow these steps:

1.  [Download the Roku Resource Monitor](https://devtools.web.roku.com/#rrm-tool) and install it on your desktop.



2. In the **Device Manager > Online** panel, select your test device that is running Roku OS 11.5 (or higher) by toggling the On/Off button and then clicking **Select device**. You can also manually add your device by clicking **Add a Device**, entering its IP address, entering a name to be used to identify it, and then clicking **Add**. To test sideloaded apps, click the settings icon under **Options**, enter the user name (rokudev) and password for your device, and then click **Save**.

   ![roku400px - rrmselectdevice](https://image.roku.com/ZHZscHItMTc2/rrm-device-manager-v2.png)



3. Select the app to be monitored and then click **Select channel**. For production apps, the Roku device must be keyed with the same developer key that was used to sign the app for publishing to the Streaming Store.

   ![roku400px - rrmselectchannel](https://image.roku.com/ZHZscHItMTc2/rrm-select-channel.png)



4. The left side of the tool displays the device's IP address, app name, and session start time (you can click the links on the device and app values to change them).

   The tool also lists the device model number, serial number, Roku OS version, app version, and the app's registry usage. You can click the link on the registry usage value to open a dialog that lists the registry sections and the key and values in each of them (you can click the copy icon in the upper right-hand corner of the dialog and paste the registry section data to a text file or other document).

   ![roku600px - rrm3-ui-session-not-started](https://image.roku.com/ZHZscHItMTc2/rrm4-ui-session-not-started.png)

   The tool then lists the following settings for configuring the tool's graphs and panels:

   - **Graph configuration**:

     - **Zoom**: Increase and decrease the time range used for the x-axis on the graphs. For example, you can zoom in for a more granular analysis; zoom out for a more broad view of the metrics.

     - **Interval:** Before starting a session, set how frequently data is collected (by default **1**-second intervals are used).

   - **Marks and events**:

     - **Show channel events**: Show or hide channel events (for example, app compiles and exits) on the graphs. Channel events are displayed by default.

     - **Show media events:** Show or hide media events (for example, video playback starts and ends) on the graphs. Media events are displayed by default.

     - **Synchronize all scroll bars**: Synchronize the graphs to scroll down and analyze all the metrics in the graphs collected at the same specific time.

   - **Panel configuration**: Enable/disable individual panels. In live mode. Disabling a panel stops data collection and hides it. In file mode, only panels that were enabled during the session are displayed. 

     ![roku600px - rrm4-panel-config-v2.png](https://image.roku.com/ZHZscHItMTc2/rrm4-panel-config-v2.png)

5. Click **New Session**. The Roku Resource Monitor launches in **Live mode** and begins tracking the app's resource usage in real-time in a series of graphs. To import and then analyze the metrics collected from a previous session, click **[File mode](#using-file-mode)**.

   ![roku600px - rrm3-ui-session-started](https://image.roku.com/ZHZscHItMTc2/rrm4-ui-session-started.png)


6. When you have finished monitoring your app, click **Stop**. By default, the **End session configuration** dialog opens. Optionally, you can select the **Download this session** check box to download the session file to your computer. The last five sessions are automatically stored by the tool, and the session files can be selected and viewed from the [**File Mode** panel](#using-file-mode). To prevent newer sessions from overwriting an older one you want to preserve, download the session file to your computer. You can select the **Don't warn me again** check box to skip this dialog when ending future sessions (you can also disable this dialog from the [**File mode**](#using-file-mode)).

   ![roku600px - rrm-stop-session](https://image.roku.com/ZHZscHItMTc2/end-session-config-v2.png)

### Saving graph and session settings

As of RRM 4.0, the tool automatically saves the graph and session settings and uses them the next time the tool is launched. The settings that are persisted include:

- Graph configuration settings
  - Enabled/disabled panels
  - Order of the panels
  - Metric values displayed in the panels
  - Expanded/collpased state
- Session configuration settings
  - Zoom
  - Interval
  - Synchronize all scroll bars
  - Channel and media events

### Displaying app and media events

The Roku Resource Monitor displays app events (red) and media events (blue) on the x-axis of the graphs. An event is represented by a bar indicating the duration of the event and a pair of *initiate* and *complete* [beacons](doc:measuring-channel-performance) that denote the start and end of the event (for example, the compiling of the app, the playback of video content, and so on). You can hover your mouse pointer over an event to display an information box with the name and timestamp of the event, and the metrics at the time the event occurred.

![roku815px - rrm-beacons](https://image.roku.com/ZHZscHItMTc2/rrm4-beacons.png)

The following app and media events are displayed:


<table>
<thead>
<tr>
<th>App events/beacons</th>
<th>Media events</th>
</tr>
</thead>
<tbody>
<tr>
<td>splash screen display (AppSplashInitiate/AppSplashComplete)</td>
<td>video playback (VODStartInitiate/VODStartComplete)</td>
</tr>
<tr>
<td>compilation (AppCompileInitiate/AppCompileComplete)</td>
<td>channel change (LiveChannelChangeInitiate/LiveChannelChangeComplete)</td>
</tr>
<tr>
<td>suspension (AppSuspendInitiate/AppSuspendComplete)</td>
<td>time grid (EPG) launch (EPGLaunchInitiate/EPGLaunchComplete)</td>
</tr>
<tr>
<td>resumption (AppResumeInitiate/AppResumeComplete<em>) <br /></em>The appResumeComplete beacon must be fired by the app*</td>
<td></td>
</tr>
<tr>
<td>exit (AppExitInitiated/AppExitComplete)</td>
<td></td>
</tr>
</tbody>
</table>


## Monitoring resource usage

The Roku Resource Monitor tracks the following metrics, which are displayed in individual panels:

- **System memory usage**: The amount of resident and swap memory used by the app.
- **CPU usage**: The percentage of CPU used by the app in the user and kernel space.
- **Frame rate**: The number of rendered graphics frames per second.
- **BrightScript objects**: The top 10 and total number of BrightScript objects used by the app.
- **SceneGraph rendezvous**: The number of rendezvous events that have occurred on the app.
- **SceneGraph nodes**: The number of nodes created by the app.
- **Graphics memory usage**: The amount of texture and system memory used by the app.
- **Registry usage**: The amount of registry space used by the app.

You can change the order of the panels by dragging and dropping them; you can click the arrow on a panel to hide and display it.

The left pane of a panel lists the current values associated with metrics in it. You can select which values are listed and displayed by selecting their checkboxes from the filter on the right. You can hover over any point on the graph to display the values recorded at a specific time.

You can save the currently visible portion of a graph to an image file. To do this, press and hold CONTROL on your keyboard and click, and then click **Save visible part as PNG**. The image is saved as a PNG file in your **Downloads** folder. The name of the file has the following syntax: `<graph-name>_<timestamp>` (for example, sgrendezvous_1689136979932.png).

![roku815px - rrm-save-graph-image](https://image.roku.com/ZHZscHItMTc2/save-graph-image.png)

### System memory usage

The System memory usage graph tracks the amount of **resident** and **swap** memory used by the app (in MB). The **used** value is the sum of these two values.

![roku815px - rrm3-system-memory](https://image.roku.com/ZHZscHItMTc2/rrm4-system-memory.png)

Each of the values listed in the graph is described as follows:


<table>
<thead>
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Used</td>
<td>The total amount of memory used by the app process; this is the sum of the <strong>resident</strong> and <strong>swap</strong> values.</td>
</tr>
<tr>
<td>Resident</td>
<td>The total amount of memory that is mapped into the address space of the app process; this is the sum of the <strong>anonymous</strong>, <strong>file-backed</strong>, and <strong>shared</strong> values.</td>
</tr>
<tr>
<td>Swap</td>
<td>The total amount of app process memory swapped out to 'disk' (RokuOS uses ZRAM 'disk'). This value varies for different Roku device models.</td>
</tr>
<tr>
<td>Anonymous</td>
<td>The total amount of anonymous memory (for example, the stack and heap); this value also includes the demux allocation during media playback. Developers can control the amount of anonymous memory used by their app.</td>
</tr>
<tr>
<td>File backed</td>
<td>The amount of file-backed memory used by the app (for example, BrightScript code). Developers cannot directly control the amount of the file-backed memory used by their app; however, high anonymous memory consumption results in more swapping and paging.</td>
</tr>
<tr>
<td>Shared</td>
<td>The amount of shared memory used by the app process (for example, media player buffers and IPC channels). Developers cannot control the amount of shared memory used by their app.</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>Foreground limit</td>
<td>The maximum amount of DRAM that may be used by the app when browsing and selecting content in the app UI and during playback. If an app exceeds the limit displayed in the app system memory usage pane while running in the foreground, the Roku OS terminates the app. The foreground limit varies by device, and it is subject to change.<br /><br />On devices that do not support per-app memory limits, the Roku Resource Monitor displays "N/A". The Roku OS, however, does terminate apps running in the foreground when specific system memory levels are reached on those devices.<br /><blockquote><p>The foreground limit may be decreased in the near future; therefore, apps should consume only 75% of the displayed limit. The reduced limit will be enforced by the Roku OS in the near future.</p></blockquote></td>
</tr>
<tr>
<td>Background limit</td>
<td>The maximum amount of DRAM that may be used by the app while running in the background (this limit is also applicable for apps that have integrated Instant Resume). If an app exceeds the limit displayed in the app system memory usage pane while running in the background, the Roku OS terminates the app. The Roku OS also terminates apps running in the background when specific system memory levels are reached. <br /><br />On devices that do not support per-app memory limits, the Roku Resource Monitor displays "N/A". The Roku OS, however, does terminate apps running in the background when specific system memory levels are reached on those devices. <br /><blockquote><p>The background limit may be decreased in the near future; therefore, apps should consume a maximum of 100 MB of DRAM while running in the background. The reduced limit will be enforced by the Roku OS in the near future. See <a href="/docs/developer-program/performance-guide/data-management.md">Data management</a> and <a href="/docs/developer-program/performance-guide/memory-management.md">Memory management</a> for best practices on allocating resources.</p></blockquote></td>
</tr>
</tbody>
</table>




### CPU usage

The CPU memory usage graph tracks the percentage of total CPU processing (across all device cores) used by the app in the user and kernel spaces.

![roku815px - rrmcpu](https://image.roku.com/ZHZscHItMTc2/rrm4-cpu-usage.png)

Each of the values listed in the graph is described as follows:

| Value  | Description                                                  |
| :----- | :----------------------------------------------------------- |
| Total  | The sum of user and kernel CPU usage.                        |
| User   | The percentage of CPU used by the app process in the user space. |
| Kernel | The percentage of CPU used by the app process in the kernel space. |

### Frame rate

The Frame rate graph tracks the number of graphics frames rendered by the app per second.

![roku815px - rrm-frame-rate](https://image.roku.com/ZHZscHItMTc2/rrm4-frame-rate.png)

### BrightScript objects

The BrightScript objects count graph tracks the **Top 10** BrightScript objects used by the app, the total number of objects, and the memory used by each object (in kB). By default, the graph tracks the number of each object type, and you can click **Memory** to view the amount of megabytes (MB) used by each one. You can view the BrightScript objects in a vertical bar chart (default) or a line graph; the total number of objects is always displayed as a line chart. You can hover over a bar to see the names and counts of the top objects and the total object count.

You can click the **Thread/Object configuration** setting, manually select up to 10 objects to track, and then click **Custom objects selection** from the **Show** drop-down list to plot the selected objects on the graph. 

![roku815px - rrm4-brs-objects](https://image.roku.com/ZHZscHItMTc2/rrm4-brs-objects.png)

#### Filtering objects by threads

You can select the **Thread/Object configuration** setting to monitor the memory consumption of the task threads in your app. When you select this setting, the **Threads** tab lists the various task threads in your app, the number of objectinstances in each thread or the amount of memory consumed by each one, and the percentage of the count/memory to the total group (the **Count**/**Memory** option selected in the graph determines which metric is used in the table). Select one or more check boxes for the task threads to be plotted on the graph and then click **Save**. This enables you to prioritize which threads to optimize and helps you identify how consumptive any 3rd-party libraries in your app are. 

![roku600px - rrm4-brs-objects-filtering-threads](https://image.roku.com/ZHZscHItMTc2/rrm4-brs-objects-filtering-threads.png)

#### Selecting BrightScript objects to be monitored

You can click the **Objects** tab to list all the BrightScript objects used by the app and their counts/memory usage. You can sort the table alphabetically or by count. You can click the copy icon in the upper right-hand corner of the dialog and paste the data to a text file or other document.

You can select the check boxes for up to 10 objects to plot and track on the graph, and then click **Save**. To plot the selected objects on the graph, click **Custom objects selection** from the **Show** drop-down list. 

![roku600px - rrm4-brs-objects-selection](https://image.roku.com/ZHZscHItMTc2/rrm4-brs-objects-selection.png)

### SceneGraph rendezvous

The SceneGraph rendezvous graph tracks the number of rendezvous events that have occurred on the app, the total time spent in rendezvous events, and the number of dropped events (displayed on the graph only).

![roku600px - rrm-rendezvous](https://image.roku.com/ZHZscHItMTc2/rrm4-rendezvous.png)

Each of the values listed in the graph is described as follows:

| Value            | Description                                                  |
| :--------------- | :----------------------------------------------------------- |
| Total time spent | The total amount of time spent executing and completing thread rendezvous on the app. |
| Count            | The number of thread rendezvous events on the app.           |
| Drop-count       | The number of rendezvous events that were dropped because the event queue was full. This value is only displayed on the graph; it is not listed in the metrics pane on the left. |

#### Viewing rendezvous details

You can click on a rendezvous (denoted with a red dot on the graph) to view the timestamp of the event and the following details:

![roku600px - rrm-rendezvous](https://image.roku.com/ZHZscHItMTc2/rrm4-rendezvous-details.png)

| **Field**                  | **Description**                                              |
| :------------------------- | :----------------------------------------------------------- |
| Source file                | The file where the rendezvous event was generated.           |
| Line                       | The line of code in the source file where the rendezvous event was generated. |
| Events                     | The number of rendezvous events during the sampling period.  |
| Duration in current sample | The total time spent in the rendezvous event (in milliseconds). |
| Cumulative events          | The total number of all instances of the events from the start, including all the instances in the current time sample. |
| Cumulative duration        | The total time spent across all instances of the rendezvous events, including all the instances in the current time sample (in milliseconds). |

You can click the copy icon in the upper right-hand corner of the dialog and paste the rendezvous data to a text file or other document.

#### Viewing rendezvous timestamps

You can click on a row in the rendezvous dialog to view the start and end times of an event (unix timestamps) and the duration of the event (in milliseconds). You can click the copy icon in the upper right-hand corner of the dialog and paste the rendezvous data to a text file or other document.

![roku600px - rrm-rendezvous](https://image.roku.com/ZHZscHItMTc2/rrm4-1-rendezvous-timestamps.png)

#### Viewing the source code associated with an event (sideloaded apps)

If you are monitoring a sideloaded app in live mode, you can drill down into the source code associated with a rendezvous event. When you view the details of an event, you can click on the source file/line number and the tool will show the code associated with that event. This feature is not available for production apps.

![roku600px - rrm4-rendezvous-source-code.png](https://image.roku.com/ZHZscHItMTc2/rrm4-1-rendezvous-code-v2.png)

### SceneGraph nodes

The SceneGraph nodes graph tracks the **Top 10 nodes** used by the app and the total number of objects used. You can view the SceneGraph nodes in a vertical bar chart (default) or a line graph; the total number of total objects is always displayed as a line chart. You can hover over a bar to see the names and counts of the top objects and the total object count.

You can click the **Node configuration** setting, manually select up to 10 objects to track, and then click **Custom objects selection** from the **Show** drop-down list to plot the selected objects on the graph. 

![roku815px - rrm4-rsg-nodes](https://image.roku.com/ZHZscHItMTc2/rrm4-1-rsg-count.png)

![roku815px - rrm4-rsg-nodes](https://image.roku.com/ZHZscHItMTc2/rrm4-1-rsg-memory.png)

#### Selecting SceneGraph nodes to be monitored

You can click the **Node configuration** setting to view the count/memory usage of the SceneGraph nodes in your app, manually select up to 10 nodes to track, and then click **Save** to plot the selected nodes on the graph. The **Count**/**Memory** option selected in the graph determines which metric is used in the table. 

![roku815px - rrm4-rsg-nodes](https://image.roku.com/ZHZscHItMTc2/rrm4-1-rsg-nodes-selected.png)

### Graphics memory usage

The Graphics memory usage graph tracks the amount of **texture** and **system** memory (in MB) used by the app and the bitmaps. You can select the bitmap collection interval, which is set to **1** minute by default.

![roku815px - rrmgraphics](https://image.roku.com/ZHZscHItMTc2/rrm4-graphics-memory.png)

Each of the values listed in the graph is described as follows:

| Value   | Description                                                  |
| :------ | :----------------------------------------------------------- |
| Texture | The total amount of r2d2 (graphical asset) memory in the GPU domain. These bitmaps have been used by the GPU. |
| System  | The total amount of rd2d memory in the system domain. These bitmaps have not been used by the GPU, which indicates potentially wasted memory. |

You can click on a bitmap icon on the graph to open the **Bitmaps details** dialog, which lists the dimensions, bits per pixel (bpp),  and size (KB) of the assets being used by the app. You can click on truncated file names (indicated with ellipsis) to display the full path. You can click the copy icon in the upper right-hand corner of the dialog and paste the bitmap data to a text file or other document.

![roku600px - rrmbitmaps](https://image.roku.com/ZHZscHItMTc2/rrm4-bitmaps-stats.png)

### Registry usage

The Registry usage graph tracks the amount of registry space used by the app.

![roku815px - rrm-registry-usage](https://image.roku.com/ZHZscHItMTc2/rrm-registry-usage.png)

Each of the values listed in the graph is described as follows:

| Value          | Description                                                  |
| :------------- | :----------------------------------------------------------- |
| Registry used  | The amount of data stored by the app in the device registry. |
| Registry limit | The maximum amount of data that the app may store in the device registry, which is 32KB. |

You can click a blue bar in the graph, which denotes a change in the registry, to view the registry sections and their keys and values at the time of the change. You can click the copy icon in the upper right-hand corner of the dialog and paste the registry section data to a text file or other document.

![roku600px - rrm-registry-details](https://image.roku.com/ZHZscHItMTc2/rrm-registry-details.png)

## Using File mode

You can view the metrics collected from one or more of the previous five sessions. In addition, you can export the metrics to a JSON file and share it with a teammate. The teammate can switch the Roku Resource Monitor into file mode, import the file, and then collaborate with you on the observed resource consumption.

> Developers can build a custom resource monitoring tool using [ECP commands](doc:external-control-api).
>
> Developers that want to build a custom tool that is interoperable with the Roku Resource Monitor can follow the [Roku Resource Monitor session file specification](doc:rrm-file-format). This specification describes the data types and structure of a monitoring session file (.JSON) that has been exported from the Roku Resource Monitor.

To use **File mode** follow these steps:

1. To view one or more of your previous five sessions, click **File mode** and then click **Open History**.

   ![roku400px - rrm-file-mode-selected](https://image.roku.com/ZHZscHItMTc2/rrm3-file-mode-selected.png)



2. In the **Sessions history** dialog, select the session to be viewed, and then click **Open Session**.

   To export a session, click the download icon of the session to be exported. The name of the exported file has the following syntax: `<channel-name>_<device-name>_<unix-timestamp>.json`.

   > To automatically export sessions as soon as you end them, go the tool's settings, click **Session**, and then toggle **Sessions Download** to "ON".

   ![roku400px - rrm-session-history](https://image.roku.com/ZHZscHItMTc2/rrm-session-history-v3.png)



3. To upload a session file from your computer, click **File mode**, click **Upload file**, and then select the session file to be imported.

   ![roku400px - rrm-import-file.png](https://image.roku.com/ZHZscHItMTc2/rrm3-import-file.png)

4. To upload a different session, click the **Upload from history** icon, and then select the session file. To upload a different session file from your computer, click the **Upload from file** icon, and then select the session file.

   ![roku400px - rrm-file-mode-switch-session](https://image.roku.com/ZHZscHItMTc2/rrm3-file-mode-new-session.png)

## Setting tool preferences

In the tool preferences, you can modify the following **General** and **Session** settings of the Roku Resource Monitor:

- whether the device manager or tutorial is displayed upon launch.
- whether warnings are displayed when the device or app changes, when live/file mode changes, when the tool is closed, and when sessions are stopped.
- whether completed sessions are automatically downloaded to your computer.

![roku600px - rrm-import-file.png](https://image.roku.com/ZHZscHItMTc2/rrm3-tool-preferences-general.png)

## Change log

- v4.2 (September 10, 2025)
  - Added [Data Collection Mode (CLI support for RRM)]((doc:rrm-data-collection-mode)) for macOS, Linux, and Windows.
  - Added Linux-specific build optimized for Docker environments.
  - Updated font for improved consistency with Roku platform.
  - Introduced a native Apple Silicon version.
- v4.1 (June 16. 2025)
  - Memory usage added to SceneGraph nodes panel.
  - Per-thread memory usage added to BrightScript objects panel.
  - Improved scrollbar behavior. 
  - Additional support for large session files.
- v4.0 (March 12, 2025)
  - Added **Panel Configuration** setting that lets users enable/disable individual panels. 
  - Implemented automatic view saving for live mode. Removed option for manually configuring view settings. 
  - Consolidated BrightScript objects panel and added memory tracking option.
  - Added object list and counts to SceneGraph nodes panel. 
  - Added source code annotation to SceneGraph rendezvous panel. 
  - Optimized performance and bug fixes. 
- v3.1 (September 24, 2024)
  - Added total number of rendezvous instances and total time spent in the rendezvous across all instances to rendezvous table.
  - Merged data from BrightScript objects memory allocation graph into **Top BrightScript objects count** graph.
  - Added thread filtering to BrightScript object count graphs.
  - Improve scrollbar synchronization.
  - Added background throttling setting.
  - Optimized performance and bug fixes.
- v3.0 (April 11, 2024)
  - Added memory allocation tracking charts.

  - Added scroll bar synchronization.
  - Added toggle to each graph for enabling/disabling data collection.
- v2.1 (July 24, 2023)
  - Moved Session settings and configuration to a left pane in UI so the settings are always visible.
  - Improved performance and enhanced indicators for saving and loading session files.
  - Capture and export of graph images.
  - Auto-disabling of unsupported devices.
  - Dialogs include complete file paths and copy-to-clipboard feature. Dialogs with these features include the graphics memory usage > bitmap details, rendezvous, and device registry.
  - Auto-save of sessions with recovery in case the application fails.
  - Improved scrolling and zooming in the graphs.
  - Additional bug-fixes, performance enhancements, and UX/UI improvements.
- v2.0 (March 28, 2023):
  - Added graphs for tracking rendezvous events, device registry usage, and graphics frame rendering rate.
  - Added app and media events to the x-axis of graphs, and settings to hide/display events.
  - Improvements to View settings.
  - Support for longer sessions.
  - Faster startup times on MacOS.
- v1.1 (November 21, 2022):
  - Added View settings feature that saves the tool's current configuration.
  - Support for multiple instances of the tool open at the same time.
  - Optimized/reduced app bundle size.
  - Signing for the macOS version (enables the tool to be launched with the first click).
  - Simplified file mode UI (the **History** option has been removed when the tool is running in live mode).
- v1.0 (September 11, 2022):
  - Initial release.
  - Includes graphs for tracking system memory, graphics memory, CPU, and SceneGraph node usage.
  - Includes Live and File modes.

## Related resources

[BrightScript Profiler documentation](doc:brightscript-profiler)

[BrightScript Profiler webinar](https://www.youtube.com/watch?v=nHfMrLypwfQ&list=PLXLCv18IEHshN1eGAOEVcNjZkfW1_lm0S)