---
title: Instant Resume
excerpt: 'Save app state on exit and restore live or VOD playback on relaunch'
deprecated: false
hidden: false
metadata:
  title: 'Instant Resume | Roku Developer Docs'
  description: 'Implement Instant Resume to save app state on exit and restore live or VOD playback within seconds when users relaunch the app on their Roku device.'
  robots: index
next:
  description: ''
---
Instant Resume enables apps to save their current state upon exit and then continue playback upon relaunch. This improves the user experience by letting viewers quickly get back to the content they were watching without having to find it first. Consider how Instant Resume can help speed up playback upon the relaunch of live and VOD content:

* **Live**. A user is watching a live linear stream and then exits the app by pressing the Home or Back key on their Roku remote control. When they re-launch the app later, it can resume directly into playback of the live video in approximately 1 second.

* **VOD**. A user is watching a movie and then exits the app (by saying "Home" on their Roku Voice remote). When they re-launch the app later, it can display a Details Screen in just a few seconds The Details Screen gives the user the choice to either resume the video or play it from the beginning.

The following video demonstrates how Instant Resume works for live linear and VOD apps:

<video src="https://image.roku.com/ZHZscHItMTc2/instant-resume-tubi-demo.mp4" poster="https://image.roku.com/ZHZscHItMTc2/instant-resume-demo-v2.jpg" width="720" height="480" controls />

## Pre-requisites

To integrate Instant Resume, you must have a Roku test device that meets the following prerequisites:

* **Multi-core ARM processor**. Instant Resume is supported only on Roku devices with multi-core, ARM processors. Although Instant Resume will be enabled on other devices, its effectiveness will vary by platform memory profile. See the [Hardware specifications](doc:hardware) for processor and memory capabilities of all Roku devices.

* **[Roku OS 10.0](doc:release-notes#roku-os-100) (or higher)**. Instant Resume is supported only on devices that can run [Roku OS 10.0](doc:release-notes#roku-os-100) or higher. See the [Hardware specifications](doc:hardware) for the list of current and updatable Roku devices.

> Implementing Instant Resume in an app does not guarantee that the Roku OS can relaunch it in its suspended state. The Roku OS stores as many suspended apps as possible in memory; however, it removes suspended apps when additional memory is needed by the active app. If a suspended app is removed from memory, re-launching the app is done without Instant Resume.

## Implementation

Instant Resume entails suspending the app state in the device RAM and then resuming the app upon relaunch. The app continues exactly where it was left off, without needing to execute tasks that would normally be required for a fresh launch.

To implement Instant Resume in an app, do the following:

1. [Update the manifest with required attributes](#updating-the-manifest).

2. [Implement the required suspend and resume handlers](#implementing-suspend-and-resume-handlers).

3. [(Optional) Execute background tasks](#background-tasks).

4. [Add signal beacons to measure suspend and resume times](#adding-signal-beacons).

### Updating the manifest

The [manifest](doc:channel-manifest) must include the following attributes for an app to leverage Instant Resume:

* **sdk_instant_resume=1**. Indicates the app's request to participate in Instant Resume. Acknowledges that the app has implemented all the requirements and protocols described in this document.

* **run_as_process=1**. Enables the Roku OS to preserve the app state in the device RAM when the app is suspended. If this attribute is not enabled, an app implementing Instant Resume still functions; however, app relaunches do not leverage this feature.

### Implementing suspend and resume handlers

Implementing Instant Resume involves programming two handlers: **customSuspend** and **customResume**. These handlers must be attached to any scene that may be active during app operation. They enable the app scene code to prepare for suspension and recover after resumption. In both handlers, code should solely focus on just the specific tasks needed to prepare the app for suspension and then update its state upon resumption.

When the Home key or labeled app key on the Roku remote control is pressed, the "Home" voice command is spoken, the app is exited by the press of the Back key or the "Back" voice command being spoken, or the Roku system screensaver is activated, an "interruption event" is generated. When this occurs, the Roku OS invokes the **customSuspend** handler for the active (in-focus) scene. In the **customSuspend** handler, apps free as many resources as possible to minimize the app's memory footprint and therefore maximize the chances that Instant Resume can be used upon relaunch.

When the user later returns to the app, the Roku OS invokes the matching **customResume** handler. In the **customResume** handler, apps implement logic to determine the playback experience upon re-launch. Using VOD content for example, the **customResume** handler can check whether a Video node is on the screen stack and remove it if it is in order to display the content's Details screen.

> As of [Roku OS 12.0](doc:release-notes#roku-os-120), pressing the "Back" key to exit an app generates an interruption. This means that apps without an Exit Confirmation dialog can support Instant Resume.
>
> ***
>
> Apps should minimize memory usage to increase the probability of their app being re-launched with Instant Resume. Apps can use the [BrightScript Profiler](doc:brightscript-profiler) or the [**chanperf** command in the debug console](doc:debugging) to monitor memory consumption.

#### Example

##### SceneGraph

In the SceneGraph XML file of the app's Scene node, insert `customization suspendhandler` and `customization resumehandler` tags and set them to `customSuspend` and `customResume`, respectively:

```xml
<customization suspendhandler="customSuspend" />
<customization resumehandler="customResume" />
```

##### BrightScript

The following BrightScript code demonstrates how to execute the `customSuspend` and `customResume` handlers in the Scene. The **customResume** handler includes logic for managing the playback experience, which includes handling any deep link requests sent to the app upon relaunch. Details for each of these handlers, including the tasks to be performed within them, are provided after.

```brightscript
function customSuspend(arg as dynamic)
     for each key in arg
       print " " key "=" arg[key]
     end for
end function

function customResume(arg as dynamic)
  for each key in arg
    print " " key "=" arg[key]
  end for

  if arg.launchParams <> invalid
    launchParams = arg.launchParams
     if(launchParams.mediaType <> invalid) and (launchParams.contentId <> invalid)
      print "Deep Link parameters: Media Type "; launchParams.mediaType " Content Id "; launchParams.contentId
    end if
  end if
end function
```

#### customSuspend(arg as dynamic) as Void

##### Tasks

When this handler is called, the app loses access to the video decoder, and it then has 5 seconds to complete all necessary [background tasks](#background-tasks) before being suspended. When the 5-second timeout elapses (or at the return from the **customSuspend()** method, whichever is first), the app loses access to the graphics context. Execution context is preserved during suspension.

To maximize the app's chances of remaining in memory while suspended, free as many resources as possible at suspension time to minimize the app's memory footprint (for example, graphics assets, content nodes and associated meta data, and anything else that is not visible). This reduces the chances that the app is removed from memory when the active app needs additional memory.

##### Parameters

The **arg** parameter is an associative array that provides the source of the interruption. It has a **lastSuspendOrResumeReason** field that may be set to one of the following values:

* **screensaver**. The Roku system screensaver was activated.

* **home**. The Home key or a labeled app key on the Roku remote control is pressed (or any other source).

#### customResume (arg as dynamic) as Void

##### Tasks

When this handler is called, the app needs to update its own internal data with respect to any relevant environmental changes that may have occurred since suspension. At this point, the app once again has access to graphics and the video decoder. Pre-suspension execution context is also restored.

##### Parameters

The **arg** parameter is an associative array that includes the following fields:

* **lastSuspendOrResumeReason**. The location from which the app is resumed: "screensaver" or "home".

* **launchParams**. [Deep linking](doc:implementing-deep-linking) fields "contentId" and "mediaType", which specify the selected content and required app behavior when receiving a deep link request upon relaunch.

> [roInputEvents](doc:roinputevent) are not passed to the **customResume** handler upon relaunch to avoid sending the deep linking parameters twice. The **launchParams** field provides access to the deep linking parameters.

### Background tasks

Once an Instant Resume app is suspended, it should return the user to the Roku home page within 1 to 2 seconds of a Home keypress. The app, however, may still need to execute specific network tasks after it has been suspended. In this case, the app can execute such tasks in the background. During background tasks, the render thread is still active for another 5 seconds after the app has been suspended, and tasks that require a rendezvous with the render thread can be executed during this 5-second period.

> Apps should only use background tasks for lightweight tasks that do not consume too many CPU resources (for example, network IO tasks or logging); otherwise, the app may be removed from memory.

#### Enabling background tasks

To enable an Instant Resume app to execute background tasks, set the **allowBackgroundTask** field of the **Scene** node. The following BrightScript code demonstrates how to do this:

```brightscript
scene = screen.CreateScene("BackgroundTaskTestScene")
scene.allowBackgroundTask = true
```

Optionally, once the background tasks have been completed, the app can set the **Scene.allowBackgroundTask** field to false in order to block the render thread and dependent background tasks. To enable background tasks to be executed after the next suspension, the app must toggle this field back to true once it has been resumed.

Background tasks are automatically **blocked after 5 seconds** of app suspension (or if the app sets the **Scene.allowBackgroundTask** field to false, whichever happens first).

#### Screensaver interrupts

Background tasks are not executed when an app is interrupted by a screensaver.

#### Debugging

The BrightScript debug console (port 8085) cannot be used by the app once it has been suspended. As a result, any logging statements execute during background tasks are not be visible to the app on 8085 port, and also the app cannot debug background tasks using STOP statements.

### Adding signal beacons

Apps must use signal beacons to measure and record how long it takes to be suspended and resumed.

#### AppSuspend beacons

The Roku OS automatically fires **AppSuspendInitiate**/**AppSuspendComplete** beacons to measure the time it takes for an app to be suspended after being interrupted. No additional implementation is therefore required for apps to measure suspend times.

#### AppResume beacons

The **AppResume** beacons are similar to the [**AppLaunch** signal beacons](doc:measuring-channel-performance), which are used to measure app launch times (normal launches done without Instant Resume). Beacons are fired when a user presses OK to select an app from the Roku home screen (marking the start point) and when the selected app is fully rendered (the stop point). The elapsed time between the start and stop points is recorded and can be viewed using the [BrightScript console](doc:debugging). You can then use the feedback from the console to update your application.

For Instant Resume, the Roku OS fires the **AppResumeInitiate** beacon when the app is re-launched. Apps, however, must implement the corresponding **AppResumeComplete** beacon. The **AppResumeComplete** beacon must be fired when the suspended scene is fully rendered during the resume process. This beacon must also be fired when video playback starts after handling a [deep link](doc:implementing-deep-linking), once the app can respond to commands sent via the Roku remote control.

> The **AppResumeComplete** beacon may only be fired at resume time; never fire it during a normal app launch.

To fire the **AppResumeComplete** beacon from the app, call the **signalBeacon()** function on any node as demonstrated in the following example:

`myScene.signalBeacon(“AppResumeComplete”)`

#### Instant Resume performance metrics

You can use the BrightScript console (port 8085) to view a log with your app's Instant Resume performance metrics. When a beacon is fired, the console immediately outputs statistics related to the initiate or complete beacon. When you exit your app, the console displays a report summarizing the statistics for the just-concluded session.

The following table lists how the resume and suspend beacons are measured and when their initiate and complete beacons are fired.

| Metric      | Start Point                                                                                                                                                                                             | Stop Point                                                                                                      | Initiate Beacon                                                                                                                                           | Complete Beacon                                                                                                                                                                                     |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Suspend** | An app interruption (for example, the user presses the Home button on the Roku remote control).  If the user exits the app using the back key or an exit confirmation dialog, this beacon is not fired. | The app has been suspended to background and the home screen is fully rendered and operational.                 | AppSuspendInitiate (fired by Roku OS).   The home key handler invokes app suspension.                                                                     | AppSuspendComplete (fired by Roku OS).  The first render pass completes after the complete beacon has been signaled (when the Roku OS completes application exit) and the Home screen is displayed. |
| **Resume**  | The user presses the **OK** button to launch an app that had previously been suspended to background from the home screen.                                                                              | The app is fully rendered and operational on its initial UI screen, or it reaches user-operable video playback. | AppResumeInitiate (fired by Roku OS).  The last keypress before the beacon was signaled. If there was no prior keypress, the initiate beacon signal time. | **AppResumeComplete** (fired by app).  The first render pass completes after the complete beacon has been signaled via the [**signalBeacon()** method](#appresume-beacons).                         |

## App behavior guidelines

Instant Resume provides developers with the flexibility to customize their app's integration of this feature. Roku cannot anticipate proper app behavior in all circumstances, and can only provide guidelines and best practices for UX design and app behavior. Ultimately, the developer must determine how an app should handle Instant Resume to best complement the overall app UX and meet the needs of their viewers.

> For the app UX, Instant Resume suspend/resume events should be handled as normal app exits/re-launches. Instant Resume will automatically accelerate the app re-launch.

### Live video playback

It is recommended that apps resume playback at the current point in the live linear feed (or report that the feed has ended and proceed from there).

### VOD playback

It is recommended that apps use a basic implementation for the playback of VOD content. In this case, the video player screen is closed, which stops playback, and the content's Details Screen is displayed. The customer can then choose to either resume the video at its bookmarked position or play it from the beginning. This approach optimizes the user experience, while reducing the development time of more complex approaches that may be more susceptible to bugs and errors.

The following code snippet illustrates logic that could be used to resume an app when a video node has already been created and is on the screen stack. In this case, it closes the video node, removes it from the screen stack, and switches focus on the previous screen, which is typically the Details Screen.

```brightscript
' Callback function when the app is suspended from an app exit.
' In this example, we are only printing to the brightscript console
' that the app is being suspended.
sub onMainSceneSuspend(arg as dynamic)
  print "***** Suspending App ***** CALLED FROM"; arg.lastSuspendOrResumeReason
end sub

' Callback function when the app resumes after an app exit. The
' sample will check if a video node has been created. If it has, then we
' remove the video node from the screen stack and will focus on the previous
' screen. Otherwise, it will resume with the last screen the user was previously
' on before the app was suspended.
sub onMainSceneResume(arg as dynamic) as boolean
  print "***** Resuming App ***** CALLED FROM"; arg.lastSuspendOrResumeReason
  if m.videoPlayer <> invalid and lcase(m.videoPlayer.subtype()) = "video"
      print "***** Closing video screen... *****"
      CloseScreen(m.videoPlayer)
  end if
end sub
```

> Apps may attempt to resume playback at the suspension point; however, the user may not have launched the app for some time and therefore may lack context, which may not be an ideal user experience. In addition, this approach requires the handling of a number of complexities:
>
> * preserving ad breaks (if an interruption occurs during an ad break, the app must re-start the ad roll).
> * maintaining authentication logic during signups (SVOD apps need to ensure their paywalls are not affected by users exiting the app when in the sign-up flow).
> * bookmarking ( must start the video at last played position).
> * managing any catalog changes that could affect how the app handles the content feed.

## Sample app

If your device is running [Roku OS 10.0](doc:release-notes#roku-os-100) (or later), you can download and install a [sample app](https://github.com/rokudev/instant-resume) that demonstrates how to implement Instant Resume in an app. You can customize the handling of suspend and resume events in the sample to meet your app's needs.

The `onMainSceneSuspend()` and `onMainSceneResume()` methods shown in the VOD playback code sample are taken from the **components/UILogic/VideoPlayerLogic.brs** file in the sample app. They are used as the controlling the `customSuspend()` and `customResume()` methods in the **components/MainScene.xml** file.
