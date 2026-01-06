---
title: "ifAppManager"
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

# ifAppManager


## Implemented by

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| [roAppManager](/docs/references/brightscript/components/roappmanager.md "roAppManager") | Returns information about the application |


## Supported methods

### GetUptime() as Object

#### Description

Returns an [roTimespan](/docs/references/brightscript/components/rotimespan.md "roTimespan") object, which is "marked" when the user clicked on the application button on the home screen.<br/><br/>Calling the TotalMilliseconds() method on the returned roTimespan object returns the total number of milliseconds since the application started.

#### Return Value

An [roTimespan](/docs/references/brightscript/components/rotimespan.md "roTimespan") object.

### GetScreensaverTimeout() as Integer

#### Description

Returns the user's screensaver wait time setting in number of minutes, or zero if the screensaver is disabled.

#### Return Value

The number of minutes set for the screensaver wait time.

### SetUserSignedIn(signedIn as Boolean) as Void

#### Description

This method allows an app to tell Roku when the user is signed in or signed out of the app<br/><br/>If the app is removed, the Roku OS will call SetUserSignedIn(false) on the app's behalf.

#### Parameters

| Name     | Type    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| signedIn | Boolean | Set to true to indicate that the user is signed in; set to false to indicate the user is signed out. |

### SetAutomaticAudioGuideEnabled(enabled as Boolean) as Void

#### Description

Enables or disables the automatic screen reader and override any manifest setting.<br/><br/>This is useful for apps that want to temporarily turn off the automatic screen reader for specific screens.

#### Parameters

| Name    | Type    | Description                                                  |
| ------- | ------- | ------------------------------------------------------------ |
| enabled | Boolean | A flag indicating whether to enable or disable the automatic screen reader. |

### IsAppInstalled(channelID as String, version As String) as Boolean

#### Description

This method returns true if an app with the specified channelID and the minimum version required is installed.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| channelID | String | The unique id of the app.                                |
| version   | String | The minimum version number of the app to be used for the query.|

#### Return Value

A boolean indicating whether the specified BrightScript app is installed.

### SetNowPlayingContentMetaData(contentMetaData as Object) as Void

#### Description

Updates video or audio [content metadata](/docs/developer-program/getting-started/architecture/content-metadata.md) during playback. This method takes a subset of content metadata parameters to be updated. These values override any previously ones sent to the Roku Media Player, and they are used until this function is called again or until the [**roAppManager**](/docs/references/brightscript/components/roappmanager.md) instance is deleted.

#### Parameters

| Name            | Type               | Description                                                  |
| --------------- | ------------------ | ------------------------------------------------------------ |
| contentMetaData | roAssociativeArray | The video or audio [content metadata](/docs/developer-program/getting-started/architecture/content-metadata.md) parameters to be updated (for example, the title and contentType) |

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

Apps can check the launch parameters to determine whether the app was launched via a voice command before calling this method. Additionally, apps can call the [roDeviceInfo.HasFeature("handsfree_voice")](/docs/references/brightscript/interfaces/ifdeviceinfo.md#hasfeaturefeature-as-string-as-boolean) function to check whether a hands-free Roku Voice remote control is paired with the device. If a hands-free remote is not paired with the device or is not active, calling this function has no effect.

### SetVoiceActionStrings(actions as Object) as Void



#### Description

Specifies a list of text strings, such as user profile names, that can be matched to voice requests.

When there is a match (the name uttered by the user matches the registered text string), it is provided to the app via an roInput voice command handler. Specifically, the **command** key in the associative array returned by the [**roInputEvent.GetInfo()**](/docs/references/brightscript/events/roinputevent.md#getinfo-as-object) method is set to "action", and the **text** key is set to the matched name or other text string.

**Parameters**


<table>
<thead>
<tr>
<th style="text-align: left;">Name</th>
<th style="text-align: left;">Type</th>
<th style="text-align: left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">actions</td>
<td style="text-align: left;">array of associative arrays</td>
<td style="text-align: left;">The list of text strings to be regsitered. Once a text string is registered, it can be matched to voice requests received by the app.  Each text string is defined with the following attributes:<ul><li>a <strong>text</strong> key for storing the name or word to be matched.</li><li>an optional <strong>link</strong> key for storing a deep link.</li></ul><h4>Example</h4><p><code>appMgr = CreateObject("roAppManager")&lt;/p&gt;&lt;p&gt;profile1 = { text: "kids", link: "d46ge-i8Y5-192"}profile2 = { text: "Jane", link: "2a2Nu-u1D4-555"}profile3 = { text: "John", link: "6Nu70-N37x-901"}&lt;/p&gt;&lt;p&gt;actions = [profile1, profile2, profile3]&lt;/p&gt;&lt;p&gt;appMgr.SetVoiceActionStrings(actions)</code></p><h3>GetLastExitInfo() as Object</h3><p><em>Available since Roku OS 13.0</em></p><p><strong>Description</strong></p><p>Returns a roAssociativeArray that includes an exit code indicating why an app was terminated, a timestamp, the state of the app and Roku media player at the time the app was exited, and the memory limit exceeded (if applicable). This helps developers monitor and debug memory issues with their apps.</p><p><strong>Return Values</strong></p><p>An roAssociativeArray the following information about the most recent app exits. Invalid is returned if no app exits are recorded.</p><p></td>
</tr>
</tbody>
</table>