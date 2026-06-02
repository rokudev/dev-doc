---
title: "roAudioResource"
excerpt: 'Cache and play .wav files or system sound effects with low latency'
deprecated: false
hidden: false
metadata:
  title: 'roAudioResource'
  description: 'roAudioResource caches .wav files to memory for low-latency playback and supports system sound effects such as select, navsingle, navmulti, and deadend.'
  robots: index
next:
  description: ''
---


The roAudioResource allows .wav files to be cached to memory and quickly played at any time. roAudioResource is intended to support short audio clips which need to be played with very little latency. The system caches the entire wav file in memory so that playback can begin very quickly.

On Roku "Classic" models, roAudioResource does not support mixing of sounds. So when you play a sound effect, any background music is paused while the sound effect plays and then resumes after the sound effect ends. On later models, sound effects are mixed with background music. See the [Hardware specifications document](doc:hardware) for a list of Current and Classic models.

This object is created with a filename parameter that is a path to the sound resource file:

`` CreateObject("roAudioResource", filename)``

The filename must be the name of a local file and cannot be a URL. To use a URL, you may download the file to the application's "tmp:" file system using [roUrlTransfer](doc:rourltransfer) and pass a filename of the form "tmp:/file.wav" to CreateObject.

```brightscript
sound = CreateObject("roAudioResource", "pkg:/sounds/beep1.wav")
sound.Trigger(75)
```

An object can also be created using the name of a system sound effect:

- "select" - the sound effect to be played when a selection is made, e.g. when OK is pressed.
- "navsingle" - the sound effect to be played when navigating a list or grid, e.g. when left or right is pressed.
- "navmulti" - the sound effect to be played when paging through a list or grid, e.g. when rewind or fast-forward is pressed.
- "deadend" - the sound effect to be played when a button press could not be processed.

Note that system sound effects are played at the volume selected in the user's settings, or not played at all if the user has turned sound effects off, regardless of the volume value passed to Trigger.

```brightscript
sound = CreateObject("roAudioResource", "select")
sound.Trigger(50)
```

Mult
iple sounds can be mixed and played at the same time:

```brightscript
sound1 = CreateObject("roAudioResource", "pkg:/sounds/beep1.wav")
sound2 = CreateObject("roAudioResource", "select")
sound1.Trigger(50, 0)
if sound2.maxSimulStreams() > 1
  sound2.Trigger(50, 1)
end if
```



## Supported Interfaces

- [ifAudioResource](doc:ifaudioresource)
