---
title: "ifAudioResource"
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


## Implemented by 

| Name            | Description                               |
| --------------- | ----------------------------------------- |
| [roAudioResource](/docs/references/brightscript/components/roaudioresource.md "roAudioResource") | The roAudioResouce allows .wav files to be cached to memory and quickly played at any time |


## Supported methods

### Trigger(volume as Integer) as Void

#### Description

This method triggers the start of the audio resource sound playback. The effect of Trigger(volume) is identical to Trigger(volume, 0).

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| volume | Integer | The volume is a number between 0 and 100 (percentage of full volume). A value of 50 should be used for normal volume. |

### Trigger(volume as Integer, index as Integer) as Void

#### Description

Triggers the start of the audio resource sound playback. This method will interrupt any playing sound when the index is the same. It will mix with any playing sound if the index is different.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| volume | Integer | The volume is a number between 0 and 100 (percentage of full volume). 50 should be used for normal volume. |
| index  | Integer | The index is a value between 0  and [MaxSimulStreams()](#maxsimulstreams-as-integer) allowing for multiple sounds to be mixed. |

### IsPlaying() as Boolean

#### Description

Checks whether this audio resource is currently playing.

#### Return Value

A flag indicating whether the calling audio resource is playing. 

### Stop() as Void

#### Description

Stops playing the audio resource. If the resource is not currently playing, has no effect.

### MaxSimulStreams() as Integer

#### Description

Returns the device-dependent maximum number of audio streams that can be mixed together and presented simultaneously.

#### Return Value

Typically, 1-2. 

### GetMetaData() as Object

#### Description

Returns an [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md "roAssociativeArray") array containing the indicated metadata parameters about the audio resource.

#### Return Value

An associative array with the following integer values:

- Length (number of samples)
- SamplesPerSecond
- NumChannels
- BitsPerSample

