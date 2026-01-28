---
title: Implementing voice controls
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
Voice controls enable your app to handle commands from the Roku voice remote and Roku mobile app. This makes it easy for your customers to control the playback of your content with the convenience of voice commands, which enhances the overall user experience of your app.

With voice controls, your app can respond to:

* [Basic commands](#basic-voice-controls) such as "play", pause", "ok", fast forward", "rewind", "resume",  and "replay".

* [Enhanced commands](#enhanced-voice-controls) such as "rewind 30 seconds" and "forward 10 minutes" (referred to as "seek" commands), "start over", and "next" (for playing the next video clip in a playlist).

* [Additional enhanced commands](#additional-enhanced-voice-controls) such as "what's playing" to display the title of the content currently in playback (referred to as "nowplaying"), "skip intro"/"skip recap" to skip the current section being played (referred to as "skip"), "shuffle" to randomly select content in a playlist, "loop" to repeat the content in a playlist, and "like"/"dislike" to rate content.

> Implementing the [basic](#basic-voice-controls), [enhanced](#enhanced-voice-controls), and [additional enhanced](#additional-enhanced-voice-controls)  voice controls is required for apps that have streamed more than an average of 5 million hours per month over the last three months to pass [certification](doc:certification) (it is also required for new apps expected to reach this threshold shortly after launch).

By default, the Roku OS handles supports for the basic commands. However, apps must still implement [error handling](#error-handling) for any unsupported basic commands.

In order for your app to support the enhanced voice controls, which include "seek", "start over", and "next", you must update the [manifest](doc:channel-manifest) and implement the [roInput](doc:roinput) object to listen for and handle voice commands.

## Updating the manifest

To support the voice controls, add the following flags in the [manifest](doc:channel-manifest):

| Feature                                                 | Manifest Entry           |
| ------------------------------------------------------- | ------------------------ |
| App supports voice controls.                            | supports_voice_roinput=1 |
| App handles the "seek" and "start over" voice commands. | supports_etc_seek=1      |
| App handles the "next" voice command.                   | supports_etc_next=1      |

If you do not enable the **supports_etc_seek** and **supports_etc_next** manifest flags, an error message will be displayed when users try to use the "seek", "start over", and "next" voice commands on your app.

## Handling voice commands

To handle voice commands in your app, your application needs to use
the [**roInput**](doc:roinput) object to listen for transport control events and process them. To do this, follow
these steps:

1. Create an **roInput** object, and set the [**roMessagePort**](doc:romessageport) for receiving events.

   ```
   input = CreateObject("roInput")
   port = CreateObject("roMessagePort")
   input.SetMessagePort(port)
   ```

2. Register the **roInput** component for voice commands by calling
   its  [**EnableTransportEvents()**](docs/references/brightscript/interfaces/ifinput.md#enabletransportevents-as-boolean) function. This tells the Roku OS that your app can handle voice commands sent to the **roInput** object. Once this is set, your app will receive **roInput** events for every voice command on this **roInput** object.

   ```
   input.enableTransportEvents()
   ```

3. Use a message loop to listen for the voice commands. In the message loop, do the following:  
   1. Use the [**roInputEvent.GetInfo()**](doc:roinputevent) method to check for voice control commands sent to your app. This method returns an AssociativeArray with the following fields: **type**, **id, command**.
      1. You can use the **type** key to verify that the event received is a voice command (transport event), and the **command** key to identify the specific command.
      2. For the "seek" command, the AssociativeArray will contain two additional fields: **direction** and **duration**. The **direction** field indicates whether the seek command is for skipping "forward" or "backward"; the **duration** field specifies how many seconds to skip forward or backward.
      3. Seek functionality can also be implemented via trickplay using the [**Video.seek**](doc:video) field. In this case, the app must implement the [Roku Advertising Framework](doc:advertising) (or not include ads). The seek voice control attribute must also be enabled in the [Roku manifest](doc:channel-manifest) (**supports_etc_seek=1**).
   2.  Call the [**roInput.EventResponse()**](doc:ifinput) method to indicate that you have handled the voice command.
      1. This method takes an AssociativeArray with two fields: **id** and **status**. The **id** field specifies the transport ID event; the **status** specifies whether the event was handled, handled with an error, or unhandled.
      2. This method should be called immediately after a voice command is received. If your application does not handle a transport event (or the command is unknown or not implemented in your app), mark it as "error.generic" or "unhandled". See [Error handling](#error-handling) for the complete list of error messages to which the **status** field can be set.
         c.  Optionally, for better modularization, you can pass the captured voice command to a function for handing.  
         ```
         while m.isPlaying
               msg = wait(0, port)
               if type(msg) = "roInputEvent" then
                   info = msg.GetInfo()
                   if info.type = "transport" then
                       eventRet = {status: "unhandled"}
                       player = m.top.getScene().findNode("myVideoPlayer")
                       if player <> invalid then
                           eventRet = player.callFunc("handleTransport", info)
                       end if
                       eventRet.id = info.id
                       input.EventResponse(eventRet)
                   end if
                   'else if ...
                   ' ... handling of other events
              end if
           end while
         ```

4. Add business logic for handling each voice command. In this example, a function is used to receive the voice command and implement the required behavior. As a best practice, set the **ret.status** field to "unhandled" by default, and then update it to "success" if your app handles the command, or "error.generic" if the app cannot fulfill it. Setting the status to "error.generic" displays "That is not available" in the Roku Voice heads-up display. The default "unhandled" status results in the Roku OS executing the default behavior.

   ```
   function handleTransport(evt)
       cmd = evt.command
       ret = {status: "unhandled"}

       if cmd = "play"
           'handle "play" command
           ret.status = "success"

       else if cmd = "pause"
           'handle "pause" command
           ret.status = "success"

       else if cmd = "stop"
           'handle "stop" command
           ret.status = "success"

       else if cmd = "forward"
           'handle "forward" command
           ret.status = "success"

       else if cmd = "rewind"
           'handle "rewind" command
           ret.status = "success"

       else if cmd = "replay"
           'handle "replay" command
           ret.status = "success"

       else if cmd = "seek"
           duration = evt.duration.toInt()
           if evt.direction = "backward" then
               duration = -duration
               seekPosition = m.videoplayer.position + duration
               if seekPosition > m.videoplayer.duration then
                   ret.status = "success.seek-end"
                   seekPosition = m.videoplayer.duration - 30
               else if seekPosition < 0
                   then ret.status = "success.seek-start"
                   seekPosition = 0
               end if
           m.seekPosition = seekPosition playVideoFrom()
           ret.status = "success"

       else if cmd = "next"
           'skip to next content item in playlist'
           ret.status = "success"
       end if

       else if cmd = "nowplaying"
           'handle nowplaying command
           appmgr = CreateObject("roAppManager")
           appmgr.SetNowPlayingContentMetaData({
               title: "<title>",
               contentType: "<contentType>"
           })
           ret.status = "success"
       end if

       else if cmd = "loop"
           'handle "loop" command
            ret.status = "success"
       end if

       else if cmd = "shuffle"
           'handle "shuffle" command
           ret.status = "success"
       end if

       else if cmd = "skip"
           'handle "skip intro" command OR handle same as "next" if channel have no into/recap to skip
           ret.status = "success"
       end if

       else if cmd = "like"
           'handle "like" command
           'optionally display a song's artist, genre, or track, or playlist title in the Roku heads-up display
           ret.music_track = "Messages"
           ret.status = "success"
       end if

       return ret
   end function
   ```

## Error handling

As described in [Handling voice commands](#handling-voice-commands), apps must immediately call the [**roInput.EventResponse()**](doc:ifinput) method upon receiving a voice command to indicate that the voice command has been handled.  If your application does not handle a transport event (or the command is unknown or not implemented in your app), mark it as "error.generic" or "unhandled".

For convenience, the list of possible values for the **status** field of the associative array taken by the [**roInput.EventResponse()**](doc:ifinput) method is as follows:

* "error.generic" (_Available since Roku OS 10.0_). No active media is available to fulfill the voice command. Passing this status displays "That is not available" in the Roku Voice heads-up display. This can be used in cases, for example, when an app receives a "forward" or "next" command, but there is no content to fast forward or play next, respectively.

* "unhandled". The app is not handling the event. The default behavior is executed by the Roku OS, if defined.

* "error". The app failed to handle the event in that instance.

* "error.ad". The transport command failed because an ad is playing.

* "error.channel". The app does not support this command in any context.

* "error.live". The transport command failed because the content is live.

* "error.no-media". There is no media active.

* "error.redundant". The transport command does not change the current state ("pause" command sent when the content is already paused)

* "success". The app handled the event successfully.

* "success.seek-start". A seek command was handled successfully, but the seek duration was before the beginning.

* "success.seek-end". A seek command was handled successfully but the seek location was past the end.

## Ad breaks

During ad breaks, apps may only handle “pause” and “play” voice commands. Apps must acknowledge all other voice commands received during ad breaks as "error.ad" or "error.generic".

## Custom trick mode and SSAI

If your app is using a custom trick mode or it is using a server-side ad insertion (SSAI) implementation of the Roku Advertising Framework (RAF), it must explicitly [handle enhanced voice commands](#handling-voice-commands) in order for customers to use "seek", "start over", and "next" commands when watching content.

If your app has content organized in a playlist, and it is using standard trick mode and a client-side RAF implementation, it only must handle the "next" command to play the next clip in the list.

The following table summarizes which apps need to implement handling for enhanced voice commands:

| App implementation          | Handling "seek" and "start over" commands required? | Handling "next" command required (content is in a playlist)? |
| --------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Standard trick mode         | no                                                  | yes                                                          |
| Custom trick mode           | yes                                                 | yes                                                          |
| Client-side RAF integration | no                                                  | yes                                                          |
| SSAI RAF integration        | yes                                                 | Yes                                                          |

## Using ECP commands for testing voice controls

You can test voice controls in an app by sending [External Control Protocol (ECP)](doc:external-control-api) commands via cURL to your Roku device. Specifically, send an HTTP POST request to port 8060 on your Roku device using the following syntax:

```
curl -d '' 'http://<roku-device-ip-address>:8060/input/<channelId>?id=<longInteger>&type=transport&command=<commandValue>
```

The following examples show how to send ECP commands via cURL HTTP POST requests. The examples are based on a sideloaded app handling forward and seek commands.

```
curl -d '' ' http://192.168.1.114:8060/input/dev?id=5&type=transport&command=forward
```

```
curl -d '' 'http://192.168.1.114:8060/input/dev?id=8&type=transport&command=seek&direction=backward&duration=10
```

## Sample app

You can download and install a [sample app](https://github.com/rokudev/transport-control) that demonstrates how to implement voice controls. It demonstrates how to handle voice commands in your app, and it shows you how to use the [**roInputEvent**](doc:roinputevent) to listen for transport events and then process them. This sample includes standard and custom video player apps, a live app, and an app implementing server-side ad insertion [SSAI](doc:ssai-adapters) via the [Roku Advertising Framework (RAF)](doc:advertising):

* The standard UI app shows how the native Roku Media Player handles voice controls. You can run this app and use the [debug console](doc:debugging-channels) to view output related to transport events.
* The custom UI, live, and SSAI apps shows how your application can receive and process voice controls. This is especially important if your app uses custom [trick mode](doc:trick-mode) or it is using a RAF SSAI implementation because your app must explicitly handle "seek" and "start over" transport commands in these cases.

## Video demo

For a video demonstration of voice controls, see the [Voice overview guide](doc:overview).

## Voice control required behavior

The following table summarizes the different voice controls, how they may be invoked, and their required behavior:

> If your app does not handle one of the listed voice controls (or it is unknown or not implemented in your app), [mark it as "error.generic" or "unhandled"](#errror-handling).

### Basic voice controls

<HTMLBlock>{`
<table>
<thead>
<tr>
<th>Voice control</th>
<th>Voice command examples</th>
<th>Required behavior  (in menu)</th>
<th>Required behavior (VOD/Music)</th>
<th>Required behavior (live linear)</th>
</tr>
</thead>
<tbody>
<tr>
<td>play</td>
<td>"play"<br /> "resume" (if paused)</td>
<td><ul><li>Content in focus: start playback.</li><li>Unable to start playback: show details screen.</li></ul></td>
<td><ul><li>Video paused: resume media.</li><li>Video fast forwarding or rewinding: resume media.</li><li>Video playing: acknowledge command as handled; the Roku OS will display "Playing".</li></ul></td>
<td><ul><li>App supports command: display appropriate message.</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
<tr>
<td>ok</td>
<td>"OK"<br />"yes"</td>
<td><ul><li>Content in focus: show details screen.</li><li>In profile section screen: select profile.</li></ul></td>
<td>Take one of the following actions:<br /><ul><li>show title</li><li>pause playback</li><li>display timeline (a second “ok” command typically pauses content while the timeline is shown)</li><li>ignore command</li></ul></td>
<td><ul><li>App supports command: display appropriate message.</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
<tr>
<td>pause</td>
<td>"pause"<br />"stop"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td><ul><li>Video playing: pause media.</li><li>Video fast forwarding or rewinding: pause media.</li><li>Video paused: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
<td><ul><li>App supports command: display appropriate message.</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
<tr>
<td>replay</td>
<td>"replay"<br />"instant replay"<br /></td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Rewind media 10 to 25 seconds (actual rewind time depends on your application's implementation of Roku instant replay feature).</td>
<td><ul><li>App supports command: display appropriate message.</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
<tr>
<td>rewind</td>
<td>"rewind"<br />"start rewinding"<br />"can you rewind?"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Rewind media until another command is received and processed. Alternatively, app can revert playback position by a fixed number of seconds.</td>
<td><ul><li>App supports command: display appropriate message (for example, display "cannot rewind" if at end of buffer).</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
<tr>
<td>forward</td>
<td>"fast forward"<br />"forward"<br />"start forwarding"<br />"can you forward?"<br />"can you fast forward?"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td><ul><li>Fast forward media until another command is received and processed. Alternatively, app can advance playback a fixed number of seconds.</li><li>If media is already fast forwarding, speed up the fast forwarding or acknowledge command as unhandled (the Roku OS will display “Fast forwarding...)”.</li></ul></td>
<td><ul><li>App supports command: display appropriate message (for example, display "cannot fast forward any further").</li><li>App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.</li></ul></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

### Enhanced voice controls

<HTMLBlock>{`
<table>
<thead>
<tr>
<th>Voice control</th>
<th>Voice command examples</th>
<th>Required behavior  (in menu)</th>
<th>Required behavior (VOD/Music)</th>
<th>Required behavior (live linear)</th>
</tr>
</thead>
<tbody>
<tr>
<td>start over</td>
<td>"start over"<br />"go to beginning"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Play media from the beginning.</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>seek</td>
<td><strong>Forwards</strong> <br />"Forward 10 minutes" <br />"Fast forward half an hour"<br />"Skip 30 seconds"<br />"Go forward 1 minute"<br /><br /><strong>Backwards</strong><br />"Rewind 10 minutes"<br />"Go back 30 minutes"<br />"Go backward 15 seconds"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Skip media forwards or backwards by the specified time.</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>next</td>
<td>"next"</td>
<td>If in profile selection screen, advance focus to next profile. Otherwise, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td><ul><li>Video: If in an episode of a series, play the next video clip or acknowledge as unhandled (the Roku OS will display message “Command not available).</li><li>Music: If in a playlist, play the next song.</li></ul></td>
<td>Unless unsupported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

### Additional enhanced voice controls

<HTMLBlock>{`
<table>
<thead>
<tr>
<th>Voice control</th>
<th>Voice command examples</th>
<th>Required behavior (in menu)</th>
<th>Required behavior (VOD/Music)</th>
<th>Required behavior (live linear)</th>
</tr>
</thead>
<tbody>
<tr>
<td>nowplaying</td>
<td>"what's playing?"<br />"what am I watching?"</td>
<td>Acknowledge command as success; the Roku OS will display app name as playing.</td>
<td><ul><li>Content playing is known to the app: Create an <a href="/docs/references/brightscript/components/roappmanager.md"><strong>roAppManager</strong></a> node, and then pass the item's title and contentType into a call to the <a href="/docs/references/brightscript/interfaces/ifappmanager.md#setnowplayingcontentmetadatacontentmetadata-as-object-as-void"><strong>roAppManager.SetNowPlayingContentMetaData()</strong></a> method. Mark the event as successfully handled.</li><li>No content playing or content playing is unknown to the app: Pass <code>invalid</code> into a call to the <a href="/docs/references/brightscript/interfaces/ifappmanager.md#setnowplayingcontentmetadatacontentmetadata-as-object-as-void"><strong>roAppManager.SetNowPlayingContentMetaData()</strong></a> method, and mark the event as "error.generic" or "unhandled".</li></ul></td>
<td>Use content metadata to display title of content.</td>
</tr>
<tr>
<td>skip</td>
<td>"skip intro" <br />"skip recap"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>If the content has an introduction or recap, handle the "skip" command; otherwise, handle it like a "next" command.</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>shuffle</td>
<td>"shuffle"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Shuffle the content in a playlist.</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>loop</td>
<td>"loop this video"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Repeat playback. Start playback over when finished (for example, loop song, album, playlist).</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>like</td>
<td>"I like this song"<br />"I like this video"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Execute app-specific action.<br /><br />When handling the "like" and "unlike" commands, you can optionally set one of the following variables to display a song's artist, genre, or track, or playlist title in the Roku heads-up display:<ul><li>"music_artist"</li><li>"music_genre"</li><li>"music_track"</li><li>"playlist_title"</li></ul></td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
<tr>
<td>dislike</td>
<td>"I hate this"<br />"never play this again"</td>
<td>Acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
<td>Execute app-specific action.</td>
<td>Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”.</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />
