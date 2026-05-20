---
title: Measuring app performance
excerpt: 'Track app launch, video start, and EPG performance using signal beacons'
deprecated: false
hidden: false
metadata:
  title: 'Measuring app performance | Roku Developer Docs'
  description: 'Use signal beacons and the BrightScript console to measure app launch, video start, EPG launch, and other performance metrics required for certification.'
  robots: index
next:
  description: ''
---
The Roku OS records key app performance metrics such as app launch time, app change time, app exit time, and video start time via signal beacons. Signal beacons are markers for the start and stop points of user-initiated actions.

To measure app launch time, for example, beacons are fired when a user presses OK to select an app from the Roku home screen (marking the start point) and when the selected app is fully rendered (the stop point). The elapsed time between the start and stop points is recorded and can be viewed using the [BrightScript console](doc:debugging). You can then use the feedback from the console to update your application, if needed, to meet the certification requirements.

> App launch and video start times must meet the specified [certification performance
> requirements](doc:certification#3-performance).

## Measuring app launch times

For most app performance metrics, the Roku OS automatically fires the beacons for the start and stop points (referred to as "initiate" and "complete" beacons, respectively). Using video start time for example, the Roku OS automatically fires the video start beacons (**VODStartInitiate** and **VODStartComplete**). No additional implementation is therefore required for apps to measure video launch times.

For measuring app launch times, however, apps must implement the **AppLaunchComplete** signal beacon. In addition, apps must implement AppDialog signal beacons if the app UI displays a login or user selection dialog before the home page.

### AppLaunch signal beacons

Apps must fire an **AppLaunchComplete** beacon when the app home page is fully rendered. This beacon must also be fired when video playback starts after handling a [deep link](doc:implementing-deep-linking), and the app can respond to commands sent via the remote control.

To fire the **AppLaunchComplete** beacon from the app, call the **signalBeacon()** function on any node as demonstrated in the following example:

```brightscript
myScene.signalBeacon("AppLaunchComplete")
```

> For your app to pass certification, your application must fire the **AppLaunchComplete** beacon to measure app launch time.

### AppDialog signal beacons

If the app UI displays a login, user selection, or end-user license agreement (EULA) dialog before the home page, the app must fire **AppDialogInitiate** and **AppDialogComplete** beacons when the dialog loads and exits, respectively.

These beacons, which were introduced in [Roku OS 9.3](doc:release-notes#roku-os-93), enable more accurate measurements of app launch times as the time spent on any dialogs requiring user input prior to rendering the home page are subtracted from the overall app launch time. If the app displays more that one dialog before the home page, multiple pairs of **AppDialogInitiate**/**AppDialogComplete** beacons may be fired.  Do not fire AppDialog beacons on message dialogs that do not involve any user interaction (for example, a "please wait" or "loading" dialog).

To fire the **AppDialogInitiate**/**AppDialogComplete** beacons from the app, call the **signalBeacon()** function on any node as demonstrated in the following example:

```brightscript
myScene.signalBeacon("AppDialogInitiate")
myScene.signalBeacon("AppDialogComplete")
```

> For your app to pass certification, your application must fire the **AppDialogInitiate** and **AppDialogComplete** beacons if the app UI displays a login, user selection, EULA, or any other dialog before the home page.

## Measuring EPG launch times

If your app contains an EPG, the application must also fire beacons when the user initiates a keypress to display the EPG (**EPGLaunchInitiate**) and when the EPG is fully rendered and navigable (**EPGLaunchComplete**). The following example demonstrates how to do this:

```brightscript
myEPGComponent.signalBeacon("EPGLaunchInitiate")
m.top.signalBeacon("EPGLaunchComplete")
```

Only the first sequence of EPG launch beacons is recorded.  If a user launches the EPG more than once while the app is running, a warning message is output to the debug console. This warning message, which acknowledges the receipt of the beacon while notifying that subsequent ones will not be recorded, may be ignored.

Only EPG launch sequences that start within 5 seconds of the `AppLaunchComplete` event being fired qualify as a valid measurements for certification. EPG launch sequences fired after the 5-second window are still recorded so that app performance can be compared against requirements.

## Viewing app performance metrics

You can use the BrightScript console (port 8085) to view a log with your app's performance metrics. When a beacon is fired, the console immediately outputs statistics related to the initiate or complete
beacon. When you exit your app, the console displays a report summarizing the statistics for the just-concluded session, which are described as follows:

<table>
  <thead>
    <tr>
      <th><strong>Statistic</strong></th>
      <th><strong>Beacon Type</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TimeBase</td>
      <td>Initiate</td>
      <td>A timestamp for the beacon based on milliseconds elapsed since the initiate beacon for the app launch was recorded.</td>
    </tr>
    <tr>
      <td>Duration</td>
      <td>Complete</td>
      <td>Milliseconds between the initiate and complete beacons.</td>
    </tr>
    <tr>
      <td>Memory Points (MiP, KiP, or p)</td>
      <td>Complete</td>
      <td>Memory points provide a relative measurement for your app's memory performance that can be used for trend analysis. You can monitor the amount of memory points reported for any complete beacon to see if it goes up or down across builds of your application.  <br /><br />Memory points are measured in mebipoints (MiP), kibipoints (KiP), or points (p). This is similar to how units of information are expressed as mebibytes (MiB), kibibytes (Kib), and bytes.</td>
    </tr>
  </tbody>
</table>

<br />![](https://image.roku.com/ZHZscHItMTc2/signalBeaconReport-v2.jpg "signalBeaconReport")

## Performance metrics reference

The Roku OS can measure and record eight app performance metrics: app launch, app compile, dialog launch, Electronic Program Guide (EPG) launch, video start, live start,  change, and channel exit. For each app performance metric, the following table lists how they are measured and when their initiate and complete beacons are fired.

<table>
  <thead>
    <tr>
      <th><strong>Metric</strong></th>
      <th><strong>Start Point</strong></th>
      <th><strong>Stop Point</strong></th>
      <th><strong>Initiate Beacon</strong></th>
      <th><strong>Complete Beacon</strong></th>
      <th><strong>Fired by</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>App compile</td>
      <td>The app compilation starts.</td>
      <td>The app compilation finishes.</td>
      <td><strong>AppCompileInitiate</strong><br /><br />The app compilation starts after the app is launched.</td>
      <td><strong>AppCompileComplete</strong><br /><br />The app compilation finishes.</td>
      <td>Roku OS</td>
    </tr>
    <tr>
      <td>App launch</td>
      <td>The user presses the OK button to launch an app from the home screen.</td>
      <td>The app is fully rendered and operational on its initial UI screen, or it reaches user-operable video playback.</td>
      <td><strong>AppLaunchInitiate</strong><br /><br />The last keypress before the beacon was signaled. If there was no prior keypress, the Initiate beacon signal time.</td>
      <td><strong>AppLaunchComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled via the signalBeacon() method.</td>
      <td>Initiate: Roku OS<br /><br />Complete: Application</td>
    </tr>
    <tr>
      <td>Dialog launch</td>
      <td>A dialog (for example, a login, user selection, or network error screen that the user must dismiss) is loaded.</td>
      <td>The dialog exits.</td>
      <td><strong>AppDialogInitiate</strong><br /><br />The app enters a dialog before rendering the home screen where the app waits for user input.</td>
      <td><strong>AppDialogComplete</strong><br /><br />The user dismisses the dialog.</td>
      <td>Application</td>
    </tr>
    <tr>
      <td>EPG launch</td>
      <td>The user initiates a keypress to bring up the EPG.</td>
      <td>The EPG is fully rendered and navigable.</td>
      <td><strong>EPGLaunchInitiate</strong><br /><br />The last keypress before the initiate beacon was signaled. If there was no prior keypress, the Initiate beacon signal time.</td>
      <td><strong>EPGLaunchComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled via the signalBeacon() method.</td>
      <td>Application</td>
    </tr>
    <tr>
      <td>Video start</td>
      <td>The user initiates a keypress to play a video.</td>
      <td>Video playback has started and is visible to the user.</td>
      <td><strong>VODStartInitiate</strong><br /><br />The last keypress that occurred between play events. If there was no prior keypress, the Initiate beacon signal time.</td>
      <td><strong>VODStartComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled (when the video node receives the "firstFramePresented" event from the Media Player).</td>
      <td>Roku OS</td>
    </tr>
    <tr>
      <td>Live start</td>
      <td>After bringing up the EPG, the user initiates a keypress to play a video.</td>
      <td>Video playback has started and is visible to the user.</td>
      <td><strong>LiveStartInitiate</strong><br /><br />The last keypress that occurred between play events. If there was no prior keypress, the Initiate beacon signal time.</td>
      <td><strong>LiveStartComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled (when the video node receives the "firstFramePresented" event from the Media Player).</td>
      <td>Roku OS</td>
    </tr>
    <tr>
      <td>Channel change</td>
      <td>The user initiates a keypress to change the app.</td>
      <td>The new video playback has started and is visible to the user.</td>
      <td><strong>LiveChannelChangeInitiate</strong><br /><br />The time of the last keypress that occurred between play events, which must both be live streams as reported by the media player session object when the firstFramePresented event is received. In addition, the previous keypress must have happened before the video player was destroyed for a live channel change event to have occurred.</td>
      <td><strong>LiveChannelChangeComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled (when the video node receives the "firstFramePresented" event from the Media Player upon a live channel change occurring).</td>
      <td>Roku OS</td>
    </tr>
    <tr>
      <td>Channel exit</td>
      <td>The user presses the Home button to exit an app.</td>
      <td>The app has exited and the home screen is fully rendered and operational.</td>
      <td><strong>AppExitInitiated</strong><br /><br />The home key handler engages app shutdown.</td>
      <td><strong>AppExitComplete</strong><br /><br />The first render pass completes after the Complete beacon has been signaled (when the Roku OS completes application exit) and the Home screen is displayed.</td>
      <td>Roku OS</td>
    </tr>
  </tbody>
</table>
