---
title: "Implementing voice controls"
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

# Implementing voice controls

Voice controls enable your app to handle commands from the Roku voice remote and Roku mobile app. This makes it easy for your customers to control the playback of your content with the convenience of voice commands, which enhances the overall user experience of your app.

With voice controls, your app can respond to:

- [Basic commands](#basic-voice-controls) such as "play", pause", "ok", fast forward", "rewind", "resume",  and "replay".


- [Enhanced commands](#enhanced-voice-controls) such as "rewind 30 seconds" and "forward 10 minutes" (referred to as "seek" commands), "start over", and "next" (for playing the next video clip in a playlist).


- [Additional enhanced commands](#additional-enhanced-voice-controls) such as "what's playing" to display the title of the content currently in playback (referred to as "nowplaying"), "skip intro"/"skip recap" to skip the current section being played (referred to as "skip"), "shuffle" to randomly select content in a playlist, "loop" to repeat the content in a playlist, and "like"/"dislike" to rate content.

> Implementing the [basic](#basic-voice-controls), [enhanced](#enhanced-voice-controls), and [additional enhanced](#additional-enhanced-voice-controls)  voice controls is required for apps that have streamed more than an average of 5 million hours per month over the last three months to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation) (it is also required for new apps expected to reach this threshold shortly after launch).

By default, the Roku OS handles supports for the basic commands. However, apps must still implement [error handling](#error-handling) for any unsupported basic commands.

In order for your app to support the enhanced voice controls, which include "seek", "start over", and "next", you must update the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md) and implement the [roInput](/docs/references/brightscript/components/roinput.md) object to listen for and handle voice commands.

## Updating the manifest

To support the voice controls, add the following flags in the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md):

| Feature                                                      | Manifest Entry           |
| ------------------------------------------------------------ | ------------------------ |
| App supports voice controls. | supports_voice_roinput=1 |
| App handles the "seek" and "start over" voice commands.  | supports_etc_seek=1      |
| App handles the "next" voice command.                    | supports_etc_next=1      |

If you do not enable the **supports_etc_seek** and **supports_etc_next** manifest flags, an error message will be displayed when users try to use the "seek", "start over", and "next" voice commands on your app.

## Handling voice commands

To handle voice commands in your app, your application needs to use
the [**roInput**](/docs/references/brightscript/components/roinput.md) object to listen for transport control events and process them. To do this, follow
these steps:

1.  Create an **roInput** object, and set the [**roMessagePort**](/docs/references/brightscript/components/romessageport.md) for receiving events.

        input = CreateObject("roInput")
        port = CreateObject("roMessagePort")
        input.SetMessagePort(port)


2.  Register the **roInput** component for voice commands by calling
    its  [**EnableTransportEvents()**](docs/references/brightscript/interfaces/ifinput.md#enabletransportevents-as-boolean) function. This tells the Roku OS that your app can handle voice commands sent to the **roInput** object. Once this is set, your app will receive **roInput** events for every voice command on this **roInput** object.

        input.enableTransportEvents()


3.  Use a message loop to listen for the voice commands. In the message loop, do the following:

   a.  Use the [**roInputEvent.GetInfo()**](/docs/references/brightscript/events/roinputevent.md#getinfo-as-object) method to check for voice control commands sent to your app. This method returns an AssociativeArray with the following fields: **type**, **id, command**.

    - You can use the **type** key to verify that the event received is a voice command (transport event), and the **command** key to identify the specific command.

    - For the "seek" command, the AssociativeArray will contain two additional fields: **direction** and **duration**. The **direction** field indicates whether the seek command is for skipping "forward" or "backward"; the **duration** field specifies how many seconds to skip forward or backward.

    - Seek functionality can also be implemented via trickplay using the [**Video.seek**](/docs/references/scenegraph/media-playback-nodes/video.md#trickplay-fields) field. In this case, the app must implement the [Roku Advertising Framework](/docs/developer-program/advertising/roku-advertising-framework.md) (or not include ads). The seek voice control attribute must also be enabled in the [Roku manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md) (**supports_etc_seek=1**).

   b.  Call the [**roInput.EventResponse()**](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean) method to indicate that you have handled the voice command.

    - This method takes an AssociativeArray with two fields: **id** and **status**. The **id** field specifies the transport ID event; the **status** specifies whether the event was handled, handled with an error, or unhandled.

    - This method should be called immediately after a voice command is received. If your application does not handle a transport event (or the command is unknown or not implemented in your app), mark it as "error.generic" or "unhandled". See [Error handling](#error-handling) for the complete list of error messages to which the **status** field can be set.

   c.  Optionally, for better modularization, you can pass the captured voice command to a function for handing.

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


4.  Add business logic for handling each voice command. In this example, a function is used to receive the voice command and implement the required behavior. As a best practice, set the **ret.status** field to "unhandled" by default, and then update it to "success" if your app handles the command, or "error.generic" if the app cannot fulfill it. Setting the status to "error.generic" displays "That is not available" in the Roku Voice heads-up display. The default "unhandled" status results in the Roku OS executing the default behavior.

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

## Error handling

As described in [Handling voice commands](#handling-voice-commands), apps must immediately call the [**roInput.EventResponse()**](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean) method upon receiving a voice command to indicate that the voice command has been handled.  If your application does not handle a transport event (or the command is unknown or not implemented in your app), mark it as "error.generic" or "unhandled".

For convenience, the list of possible values for the **status** field of the associative array taken by the [**roInput.EventResponse()**](/docs/references/brightscript/interfaces/ifinput.md#eventresponseroassociativearray-aa-as-boolean) method is as follows:

- "error.generic" (*Available since Roku OS 10.0*). No active media is available to fulfill the voice command. Passing this status displays "That is not available" in the Roku Voice heads-up display. This can be used in cases, for example, when an app receives a "forward" or "next" command, but there is no content to fast forward or play next, respectively.

- "unhandled". The app is not handling the event. The default behavior is executed by the Roku OS, if defined.


- "error". The app failed to handle the event in that instance.


- "error.ad". The transport command failed because an ad is playing.


- "error.channel". The app does not support this command in any context.


- "error.live". The transport command failed because the content is live.


- "error.no-media". There is no media active.


- "error.redundant". The transport command does not change the current state ("pause" command sent when the content is already paused)


- "success". The app handled the event successfully.


- "success.seek-start". A seek command was handled successfully, but the seek duration was before the beginning.


- "success.seek-end". A seek command was handled successfully but the seek location was past the end.

## Ad breaks

During ad breaks, apps may only handle “pause” and “play” voice commands. Apps must acknowledge all other voice commands received during ad breaks as "error.ad" or "error.generic".

## Custom trick mode and SSAI

If your app is using a custom trick mode or it is using a server-side ad insertion (SSAI) implementation of the Roku Advertising Framework (RAF), it must explicitly [handle enhanced voice commands](#handling-voice-commands) in order for customers to use "seek", "start over", and "next" commands when watching content.

If your app has content organized in a playlist, and it is using standard trick mode and a client-side RAF implementation, it only must handle the "next" command to play the next clip in the list.

The following table summarizes which apps need to implement handling for enhanced voice commands:

| App implementation      | Handling "seek" and "start over" commands required? | Handling "next" command required (content is in a playlist)? |
| --------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Standard trick mode         | no                                                  | yes                                                          |
| Custom trick mode           | yes                                                 | yes                                                          |
| Client-side RAF integration | no                                                  | yes                                                          |
| SSAI RAF integration        | yes                                                 | Yes                                                          |

## Using ECP commands for testing voice controls

You can test voice controls in an app by sending [External Control Protocol (ECP)](/docs/developer-program/dev-tools/external-control-api.md) commands via cURL to your Roku device. Specifically, send an HTTP POST request to port 8060 on your Roku device using the following syntax:

```
curl -d '' 'http://<roku-device-ip-address>:8060/input/<channelId>?id=<longInteger>&type=transport&command=<commandValue>'
```

| Parameter | Description                                                  | Example     |
| :-------- | :----------------------------------------------------------- | :---------- |
| input     | Use the **input** command for passing transport events.      |             |
| channelId | Enter one of the following: ${channelTypesList}              | dev         |
| id        | Assign a unique ID (as a LongInteger) to the transport event. | 5           |
| type      | Enter "transport" to specify that you are sending a transport event. | "transport" |
| command   | Enter the type of transport event.<br/><br/>If you are sending a "seek" command, you must pass two additional fields: **direction** and **duration**. | "seek"      |
| direction | For the "seek" command only. Enter "forward" or "backward".  | "backward"  |
| duration  | For the "seek" command only. Enter how many seconds to skip forward or backward. | "10"        |

The following examples show how to send ECP commands via cURL HTTP POST requests. The examples are based on a sideloaded app handling forward and seek commands.

```
curl -d '' 'http://192.168.1.114:8060/input/dev?id=5&type=transport&command=forward'
```
```
curl -d '' 'http://192.168.1.114:8060/input/dev?id=8&type=transport&command=seek&direction=backward&duration=10'
```
{#channelTypesList}
* **dev**. Sideloaded app.
* <**id**>. Public or [beta](/docs/developer-program/publishing/channel-publishing-guide.md#beta-channel-guidelines) apps. To find your app ID, use the preview page on the [Developer Dashboard](https://developer.roku.com/developer).

## Sample app

You can download and install a [sample app](https://github.com/rokudev/transport-control) that demonstrates how to implement voice controls. It demonstrates how to handle voice commands in your app, and it shows you how to use the [**roInputEvent**](/docs/references/brightscript/events/roinputevent.md) to listen for transport events and then process them. This sample includes standard and custom video player apps, a live app, and an app implementing server-side ad insertion [SSAI](/docs/developer-program/advertising/ssai-adapters.md) via the [Roku Advertising Framework (RAF)](/docs/developer-program/advertising/roku-advertising-framework.md):

- The standard UI app shows how the native Roku Media Player handles voice controls. You can run this app and use the [debug console](/docs/developer-program/debugging/debugging-channels.md) to view output related to transport events.
- The custom UI, live, and SSAI apps shows how your application can receive and process voice controls. This is especially important if your app uses custom [trick mode](/docs/developer-program/media-playback/trick-mode.md) or it is using a RAF SSAI implementation because your app must explicitly handle "seek" and "start over" transport commands in these cases.

## Video demo

For a video demonstration of voice controls, see the [Voice overview guide](/docs/features/voice/overview.md).

## Voice control required behavior

The following table summarizes the different voice controls, how they may be invoked, and their required behavior: 

> If your app does not handle one of the listed voice controls (or it is unknown or not implemented in your app), [mark it as "error.generic" or "unhandled"](#errror-handling).  

### Basic voice controls

Voice control|Voice command examples|Required behavior  (in menu)|Required behavior (VOD/Music)|Required behavior (live linear)
-----|-----|-----|-----|-----
play|"play"<br/> "resume" (if paused) |${play-menu}|${play-vod}|${play-live}
ok|"OK"<br />"yes" |${ok-menu}|Take one of the following actions:<br />${ok-vod}|${ok-live}
pause|"pause"<br/>"stop"|Acknowledge command as unhandled; the Roku OS will display “Command not available”.|${pause-vod}|${pause-live}
replay|"replay"<br/>"instant replay"<br/> |Acknowledge command as unhandled; the Roku OS will display “Command not available”.|Rewind media 10 to 25 seconds (actual rewind time depends on your application's implementation of Roku instant replay feature).|${replay-live}
rewind|"rewind"<br/>"start rewinding"<br/>"can you rewind?"|Acknowledge command as unhandled; the Roku OS will display “Command not available”.|${rewind-vod}|${rewind-live}
forward|"fast forward"<br/>"forward"<br/>"start forwarding"<br/>"can you forward?"<br/>"can you fast forward?" |Acknowledge command as unhandled; the Roku OS will display “Command not available”.|${fast-forward-vod}|${fast-forward-live}

### Enhanced voice controls

| Voice control | Voice command examples                                       | Required behavior  (in menu)                                 | Required behavior (VOD/Music)                           | Required behavior (live linear)                              |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| start over    | "start over"<br />"go to beginning"                          | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Play media from the beginning.                          | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| seek          | **Forwards** <br />"Forward 10 minutes" <br />"Fast forward half an hour"<br />"Skip 30 seconds"<br />"Go forward 1 minute"<br /><br />**Backwards**<br />"Rewind 10 minutes"<br />"Go back 30 minutes"<br />"Go backward 15 seconds" | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Skip media forwards or backwards by the specified time. | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| next          | "next"                                                       | If in profile selection screen, advance focus to next profile. Otherwise, acknowledge command as unhandled; the Roku OS will display “Command not available”. | ${next-vod}                                             | Unless unsupported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |

### Additional enhanced voice controls

| Voice control | Voice command examples                       | Required behavior (in menu)                                  | Required behavior (VOD/Music)                                | Required behavior (live linear)                              |
| :------------ | :------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| nowplaying    | "what's playing?"<br />"what am I watching?" | Acknowledge command as success; the Roku OS will display app name as playing. | ${now-playing}                                               | Use content metadata to display title of content.            |
| skip          | "skip intro" <br />"skip recap"              | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | If the content has an introduction or recap, handle the "skip" command; otherwise, handle it like a "next" command. | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| shuffle       | "shuffle"                                    | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Shuffle the content in a playlist.                           | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| loop          | "loop this video"                            | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Repeat playback. Start playback over when finished (for example, loop song, album, playlist). | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| like          | "I like this song"<br />"I like this video"  | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Execute app-specific action.<br /><br />When handling the "like" and "unlike" commands, you can optionally set one of the following variables to display a song's artist, genre, or track, or playlist title in the Roku heads-up display:${like-music-list} | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |
| dislike       | "I hate this"<br />"never play this again"   | Acknowledge command as unhandled; the Roku OS will display “Command not available”. | Execute app-specific action.                             | Unless supported, acknowledge command as unhandled; the Roku OS will display “Command not available”. |

{#play-menu}

- Content in focus: start playback.
- Unable to start playback: show details screen.

{#play-vod}

- Video paused: resume media.
- Video fast forwarding or rewinding: resume media.
- Video playing: acknowledge command as handled; the Roku OS will display "Playing".

{#play-live}

- App supports command: display appropriate message.
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#ok-menu}

- Content in focus: show details screen.
- In profile section screen: select profile.

{#ok-vod}

- show title
- pause playback
- display timeline (a second “ok” command typically pauses content while the timeline is shown)
- ignore command

{#ok-live}

- App supports command: display appropriate message.
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#pause-vod}

- Video playing: pause media.
- Video fast forwarding or rewinding: pause media.
- Video paused: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#pause-live}

- App supports command: display appropriate message.
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#replay-live}

- App supports command: display appropriate message.
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#rewind-vod}

Rewind media until another command is received and processed. Alternatively, app can revert playback position by a fixed number of seconds.

{#rewind-live}

- App supports command: display appropriate message (for example, display "cannot rewind" if at end of buffer).
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#fast-forward-vod}

- Fast forward media until another command is received and processed. Alternatively, app can advance playback a fixed number of seconds.
- If media is already fast forwarding, speed up the fast forwarding or acknowledge command as unhandled (the Roku OS will display “Fast forwarding...)”.

{#fast-forward-live}

- App supports command: display appropriate message (for example, display "cannot fast forward any further").
- App does not support command: acknowledge command as unhandled; the Roku OS will display “Command not available”.

{#next-vod}

- Video: If in an episode of a series, play the next video clip or acknowledge as unhandled (the Roku OS will display message “Command not available).
- Music: If in a playlist, play the next song.

{#now-playing}

- Content playing is known to the app: Create an [**roAppManager**](/docs/references/brightscript/components/roappmanager.md) node, and then pass the item's title and contentType into a call to the [**roAppManager.SetNowPlayingContentMetaData()**](/docs/references/brightscript/interfaces/ifappmanager.md#setnowplayingcontentmetadatacontentmetadata-as-object-as-void) method. Mark the event as successfully handled.
- No content playing or content playing is unknown to the app: Pass `invalid` into a call to the [**roAppManager.SetNowPlayingContentMetaData()**](/docs/references/brightscript/interfaces/ifappmanager.md#setnowplayingcontentmetadatacontentmetadata-as-object-as-void) method, and mark the event as "error.generic" or "unhandled".

{#like-music-list}

- "music_artist"
- "music_genre"
- "music_track"
- "playlist_title"
