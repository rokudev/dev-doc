---
title: Fast video start
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Fast video start is a user interface design technique for apps
that reduces the amount of time apparent to the user that the video
stream buffers before actual playback begins.

All digital video requires some time after a video is selected to begin
playback, and video files streamed over HTTP add network transfer rates
to this buffering time. Typically, to play back a video, the content
meta-data for a video is set, and an roSpringboardScreen component (or
equivalent) is shown to the user with descriptive details about the
video. When the user actually selects the video for playback, calling
play() on the roVideoScreen or roVideoPlayer object shows a "loading"
screen before actual playback, while the video stream is buffering.
**"Fast start"** allows this video stream buffering to take place
_before_ the user has actually selected a video for playback, by
initiating the buffering process while the user is deciding whether to
play a certain video.

To implement fast video start, you create a roVideoScreen or
roVideoPlayer component prior to showing a roSpringboardScreen (or
equivalent) for a video, and call Prebuffer(). The video stream will
buffer for as long as the user is reading the description of the video
on the screen. Then when the user actually selects the video for
playback, call play(). Depending on how much time the user spent reading
the video description, the video may begin actual playback immediately,
or with a much reduced amount of time that the "loading" screen is
shown.

Calling Prebuffer() starts buffering the video specified by a previous
SetContentList() (for roVideoPlayer) or SetContent() (for roVideoScreen)
call. If the video has not been specified in one of these ways, calling
Prebuffer() has no
effect.

> SceneGraph apps use the [Video node](doc:video) control field prebuffer option to implement Fast Video Start. See [Fast start media playback](doc:playing-videos) for information on implementing Fast Video Start in a SceneGraph app.

## roVideoPlayer use cases

### Prebuffer before playback

The following code demonstrates this use case.

```
port = CreateObject( "roMessagePort" )

content = {
  Stream: { url : "http://play.this.url.com/video.m3u8" }
  StreamFormat: "hls"
}

' First   create the player and set content list
player = CreateObject( "roVideoPlayer" )
player.setMessagePort( port )
player.setContentList( content )
' Prebuffer the data
player.Prebuffer()

' Show the content springboard screen and wait for an event
' from user asking to playback the content
while true
  msg = wait( 0, port)
  ' break out if correct message is received
end while

' Start   playback now
player.play()

' Handle user requests here
while true
  msg = wait( 0, port )
  ' process msg here
end while
```

For this use case, the video player event handling has to occur in two
event loops, one while prebuffering from a content springboard screen, and one during playback. This is necessary since the
firmware may encounter errors during prebuffer that should be handled by
the app.

### Playback canceled after/while prebuffering

If the app calls Stop() while prebuffering, prebuffered video data
is discarded. The app can subsequently call SetContentList(),
Prebuffer() and Play() to play back a new video.

## Additional considerations

To make use of the "fast start" feature, when an app enters the
springboard (or movie details) screen, it must create a roVideoPlayer or
roVideoScreen, and prebuffer the video. There are a few things to
consider.

### Prebuffer position

Apps may have multiple play options on the springboard screen,
including resuming playback and playback from start. A bookmarked
position may be set in content meta-data to indicate the playback start
position. Each play option will have a different play position
associated with it. The bookmark position will have to default to one of
the play positions and prebuffer the content from here. If the user
selects the other play option, the data must be buffered again.

### Resuming playback

A user may exit playback to go back to the springboard screen, and then
resume playback of the same video. Since the roVideoPlayer will have
buffered the data, the app will ideally just resume playback. When
going back to the springboard screen, Roku recommends that playback
should be paused on roVideoPlayer. A user request to resume playback
will take effect instantaneously. If the user starts playback from the
beginning, then the roVideoPlayer must be stopped first, the
BOOKMARKPOSITION modified in content meta-data, and a new playback
session started.
