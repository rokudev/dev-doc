---
title: Soundeffect
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

# SoundEffect

Extends [**Node**](/docs/references/scenegraph/node.md)

The SoundEffect node class is used to play audio sound effects that can be triggered from events that occur in the UI. Typically, these sound effects are short audio clips, but there is no inherent limit on their length. Currently, up to four simultaneous sounds can be playing at any time, in addition to audio from streaming content and TextToSpeech audio.

Files can be installed locally as part of the package file or dynamically downloaded from the network. All files must be WAV (i.e. PCM) format.

For local files, the convention is to include the WAV files in a directory named "sounds".

For downloaded files, a least-recently-used (LRU) mechanism is used to keep the most recently downloaded/played sounds in temporary storage on the device. If the limits on the maximum number/size of downloaded sounds is exceeded, the least recently used sounds are removed from temporary storage. They will be automatically reloaded the next time the control field is set to "play".

A sample demonstrating how to use the SoundEffect node can be found here: [SimpleSoundEffect](https://github.com/rokudev/samples/blob/master/media/SimpleSoundEffect)

## Fields

| Field        | Type              | Default                                   | Access Permission | Description           |
| ------------ | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| uri          | uri               |                                           | READ_WRITE        | Specifies the URI of the WAV file. Sounds included as part of the application package can be referenced using the `pkg:/sounds` prefix. This may also specify the location of a WAV file on a remote server. |
| control      | option string     | none                                      | READ_WRITE        | Set to control the audio playback. Getting the value of this field returns the most recent value set, or none if no value has been set.<br/><br/>${control} |
| state        | value string      | none                                      | READ_ONLY         | Can be used to track the progress of current state of local and networked sound files When the field value changes to ready, the sound is ready to be played. The possible values are:<br/><br/>${state} |
| loadStatus   | value string      | none                                      | READ_ONLY         | Indicates the status of the sound file.<br/><br/>${loadStatusTable} |
| volume       | integer           | 50                                        | READ_WRITE        | The volume is a number between 0 and 100 (percentage of full volume).  50 should be used for normal volume. |


{#control}

| Option | Effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| none   | No effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| play   | Start playing the audio. If the audio is already playing, it will be restarted.<br/><br/>If the `loadStatus` field is not "ready", the sound will not be played and the `state` field will be set to "notready".<br/><br/>For networked files with the `loadStatus` field set to "flushed", setting `control` to "play" will automatically trigger a reload of the network file, but will not result in the sound being played, due to the time it takes to download the file again. In this case, the sound can be played once the `loadStatus` field changes from "flushed" to "ready" |
| stop   | If the audio is playing, stop playing the audio. If the audio is not playing, no effect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

{#state}

|Value|Meaning|
|--- |--- |
|none|No current playback state|
|playing|Audio is currently playing.|
|stopped|The audio playback was stopped by setting control to "stop". The state will also be set to "stopped" if audio was playing and the uri is changed.|
|finished|The audio playback reached the end of the audio|
|toomanysounds|Control was to "play" while there were already the maximum number of SoundEffect sounds playing. Currently, this limit is 4.|
|notready|The sound file is not on the device. This is set in response to the control field being set to "play".<br/><br/>For local WAV files included in a package file, it will be occur if the path to the file is not correct, or if the file is not a valid WAV file.<br/><br/>For network-accessed WAV files, this indicates one of these three conditions is true:<br/><br/>${notready}

{#notready}
- The file has been requested, but is not finished downloading. In this case, the `loadStatus` field will be set to "loading".
- The file request has completed, but the URL is incorrect or the downloaded file is not a valid WAV filed. In this case, the `loadStatus` field will be set to "failed"
- The file has previously been downloaded, but has been flushed from the LRU cache. In this case, the `loadStatus` field will be set to "flushed".

{#loadStatusTable}

| Value   | Meaning                                                                                                                                                                                                  |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| none    | No file has been requested.                                                                                                                                                                              |
| loading | (network files only) The file has been requested and is being downloaded.                                                                                                                                |
| ready   | The file is ready to be played (i.e. it is on the device and is a valid WAV file).                                                                                                                       |
| failed  | The file path or URI is incorrect or refers to a file that is not a valid WAV file.                                                                                                                      |
| flushed | (network files only) The file was ready, but has been deleted from the LRU cache. Setting the `control` field to play will cause the file to be automatically reloaded, but not be played upon completion. |
