---
title: Roaudioplayer
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

# roAudioPlayer

The Audio Player object provides the ability to setup the playing of a series of audio streams. The object accepts an array of content meta-data objects, describing the audio and providing URLs for accessing each stream. The component understands the following streamformat values: "mp3", "mp4", "hls", "es.aac-adts", "flac."

This object does not provide an interface to a screen. In order to get events both from the screen you are using and the Audio Player, you should use the same Message Port for both objects. 

This object is created with no parameters:

``CreateObject("roAudioPlayer")``

**Example**

~~~
Sub Main()
    audioPlayer = CreateObject("roAudioPlayer")
    port = CreateObject("roMessagePort")
    audioPlayer.SetMessagePort(port)
    song = CreateObject("roAssociativeArray")
    song.url = "https://file-examples.com/storage/feb401d325641db2fa1dfe7/2017/11/file_example_MP3_700KB.mp3"
    audioplayer.addcontent(song)
    audioplayer.setloop(false)
    audioPlayer.play()
    while true
            msg = wait(0, port)
            if type(msg) = "roAudioPlayerEvent"
                    if msg.isStatusMessage() then
                        print "roAudioPlayerEvent: "; msg.getmessage()
                        if msg.getmessage() = "end of playlist" return
                    endif
            endif
        end while
End Sub
~~~


## Supported interfaces

- [ifAudioPlayer](/docs/references/brightscript/interfaces/ifaudioplayer.md "ifAudioPlayer")
- [ifHttpAgent](/docs/references/brightscript/interfaces/ifhttpagent.md "ifHttpAgent")
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")


## Supported events

- [roAudioPlayerEvent](/docs/references/brightscript/events/roaudioplayerevent.md "roAudioPlayerEvent")