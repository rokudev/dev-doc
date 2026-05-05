---
title: ifAppManager
hidden: false
---
## Implemented by

| Name                             | Description                               |
| -------------------------------- | ----------------------------------------- |
| [roAppManager](doc:roappmanager) | Returns information about the application |

## Supported methods

### GetUptime() as Object

#### Description

Returns an [roTimespan](doc:rotimespan) object, which is "marked" when the user clicked on the application button on the home screen.<br /><br />Calling the TotalMilliseconds() method on the returned roTimespan object returns the total number of milliseconds since the application started. ddd

#### Return Value

An [roTimespan](doc:rotimespan) object.

### GetScreensaverTimeout() as Integer

#### Description

Returns the user's screensaver wait time setting in number of minutes, or zero if the screensaver is disabled.

#### Return Value

The number of minutes set for the screensaver wait time.

### SetUserSignedIn(signedIn as Boolean) as Void

#### Description

This method allows an app to tell Roku when the user is signed in or signed out of the app<br /><br />If the app is removed, the Roku OS will call SetUserSignedIn(false) on the app's behalf.

#### Parameters

| Name     | Type    | Description                                                                                          |
| -------- | ------- | ---------------------------------------------------------------------------------------------------- |
| signedIn | Boolean | Set to true to indicate that the user is signed in; set to false to indicate the user is signed out. |

### SetAutomaticAudioGuideEnabled(enabled as Boolean) as Void

#### Description

Enables or disables the automatic screen reader and override any manifest setting.<br /><br />This is useful for apps that want to temporarily turn off the automatic screen reader for specific screens.

#### Parameters

| Name    | Type    | Description                                                                 |
| ------- | ------- | --------------------------------------------------------------------------- |
| enabled | Boolean | A flag indicating whether to enable or disable the automatic screen reader. |

### IsAppInstalled(channelID as String, version As String) as Boolean

#### Description

This method returns true if an app with the specified channelID and the minimum version required is installed.

#### Parameters

| Name      | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| channelID | String | The unique id of the app.                                       |
| version   | String | The minimum version number of the app to be used for the query. |

#### Return Value

A boolean indicating whether the specified BrightScript app is installed.

### SetNowPlayingContentMetaData(contentMetaData as Object) as Void

#### Description

Updates video or audio [content metadata](doc:content-metadata) during playback. This method takes a subset of content metadata parameters to be updated. These values override any previously ones sent to the Roku Media Player, and they are used until this function is called again or until the [**roAppManager**](doc:roappmanager) instance is deleted.

#### Parameters

| Name            | Type               | Description                                                                                                                   |
| --------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| contentMetaData | roAssociativeArray | The video or audio [content metadata](doc:content-metadata) parameters to be updated (for example, the title and contentType) |

#### Example

```
appmgr = CreateObject("roAppManager")
appmgr.SetNowPlayingContentMetaData({
 title: "The Gambler",
 contentType: "movie"
})
```

To revert an update, pass `invalid` in this method:

```
appmgr.SetNowPlayingContentMetaData(invalid)
```

### StartVoiceActionSelectionRequest() as Void

#### Description

Triggers a voice request for the viewer to select a user profile if the device is paired with a hands-free Roku Voice remote control. This function should be called by apps that support voice commands and display a user profile selection screen upon launch, which is when this method should be called.

For example, when the user launches an app and the profile selection screen is displayed, calling this function will trigger Roku Voice to say and display "Which of these would you like" or "Who's watching?" (if a hands-free Roku Voice remote control is paired with the device).

Apps can check the launch parameters to determine whether the app was launched via a voice command before calling this method. Additionally, apps can call the [roDeviceInfo.HasFeature("handsfree_voice")](doc:ifdeviceinfo) function to check whether a hands-free Roku Voice remote control is paired with the device. If a hands-free remote is not paired with the device or is not active, calling this function has no effect.

### SetVoiceActionStrings(actions as Object) as Void

#### Description

Specifies a list of text strings, such as user profile names, that can be matched to voice requests.

When there is a match (the name uttered by the user matches the registered text string), it is provided to the app via an roInput voice command handler. Specifically, the **command** key in the associative array returned by the [**roInputEvent.GetInfo()**](doc:roinputevent) method is set to "action", and the **text** key is set to the matched name or other text string.

**Parameters**

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>actions</td>
      <td>array of associative arrays</td>
      <td>The list of text strings to be regsitered. Once a text string is registered, it can be matched to voice requests received by the app.  Each text string is defined with the following attributes:<ul><li>a <strong>text</strong> key for storing the name or word to be matched.</li><li>an optional <strong>link</strong> key for storing a deep link.</li></ul></td>
    </tr>
  </tbody>
</table>

#### Example

```
appMgr = CreateObject("roAppManager")

profile1 = { text: "kids", link: "d46ge-i8Y5-192" }
profile2 = { text: "Jane", link: "2a2Nu-u1D4-555" }
profile3 = { text: "John", link: "6Nu70-N37x-901" }

actions = [profile1, profile2, profile3]
appMgr.SetVoiceActionStrings(actions)
```

### GetLastExitInfo() as Object

_Available since [Roku OS 13.0](doc:release-notes#roku-os-130)_

**Description**

Returns a roAssociativeArray that includes an exit code indicating why an app was terminated, a timestamp, the state of the app and Roku media player at the time the app was exited, and the memory limit exceeded (if applicable). This helps developers monitor and debug memory issues with their apps.

**Return Values**

An roAssociativeArray the following information about the most recent app exits. Invalid is returned if no app exits are recorded.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>timestamp</td>
      <td>String</td>
      <td>An ISO 8601 date string that specifies the time of the app exit.</td>
    </tr>
    <tr>
      <td>exit\_code</td>
      <td>String</td>
      <td>The exit code, which denotes the cause of the app termination. See <a href="https://roku-ent.readme.io/dev/docs/dev-environment#lastexitorterminationreason-parameter">lastExitOrTerminationReason</a> for the list of possible exit codes. For memory-related app exits, this value will be one of the following: <ul><li><strong>EXIT\_CHANNEL\_MEM\_LIMIT\_FG</strong>: The app exceeded the per-app memory limit while running in the foreground.</li><li><strong>EXIT\_CHANNEL\_MEM\_LIMIT\_BG</strong>: The app exceeded the per-app memory limit while running in the background.</li><li><strong>EXIT\_OUT\_OF\_MEMORY</strong>: The device was running under low-memory conditions.</li><li><strong>EXIT\_AM\_LOWRESOURCE</strong>: System resources were low.</li><li><strong>EXIT\_SYSTEM\_KILL</strong>: The app was preemptively closed by the Roku OS.</li><li><strong>EXIT\_UNKNOWN:</strong> This is the default exit code if there was no prior exit (for example, the inital app launch after system boot) or no unusual exit reason noted (for example, a scenario other than a BrightScript crash or system resources issue).</li></ul></td>
    </tr>
    <tr>
      <td>mem\_limit</td>
      <td>Integer</td>
      <td>The applicable per-app memory limit that was exceeded (in Mb). This attribute is only included If the <strong>exitCode</strong> is EXIT\_CHANNEL\_MEM\_LIMIT\_FG or EXIT\_CHANNEL\_MEM\_LIMIT\_BG.</td>
    </tr>
    <tr>
      <td>app\_state</td>
      <td>String</td>
      <td>The state of the app when it was terminated: <ul><li><strong>foreground</strong>: The application was running in the foreground.</li><li><strong>background</strong>: The application was running in the background.</li></ul></td>
    </tr>
    <tr>
      <td>console\_log</td>
      <td>String</td>
      <td>The last 20 lines of text written to the BrightScript console before termination. The console output includes BrightScript print statements, BrightScript errors and warnings, and any system messages. The availability of this attribute depends on the platform and app configuration.</td>
    </tr>
    <tr>
      <td>media\_player\_state</td>
      <td>String</td>
      <td>The state of the media player before the app was terminated. This attribute is included for all <strong>exitCode</strong> values except EXIT\_CHANNEL\_MEM\_LIMIT\_FG and EXIT\_CHANNEL\_MEM\_LIMIT\_BG: <ul><li><strong>playing</strong>: The media player was playing.</li><li><strong>stopped</strong>: The media player was stopped.</li></ul></td>
    </tr>
  </tbody>
</table>

##### Example

The following sample demonstrates how to use the **GetLastExitInfo()** function.

```
appManager = CreateObject("roAppManager")
closureDump = appManager.GetLastExitInfo()

if closureDump <> invalid then
    print "Timestamp: ", closureDump.timestamp
    print "exitCode: ", closureDump.exit_code
    print "limit: ", closureDump.mem_limit
    print "mediaPlayerState: ", closureDump.media_player_state
    print "------------------------------ " + "Console Log" + " ------------------------------"
    print closureDump.console_log
    print "------------------------------ " + "BrightScript Memory" + " ------------------------------"
else
    print "No recorded closure for active plugin"
end if
```
