---
title: "SoundEffect"
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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>uri</td>
<td>uri</td>
<td></td>
<td>READ_WRITE</td>
<td>Specifies the URI of the WAV file. Sounds included as part of the application package can be referenced using the <code>pkg:/sounds</code> prefix. This may also specify the location of a WAV file on a remote server.</td>
</tr>
<tr>
<td>control</td>
<td>option string</td>
<td>none</td>
<td>READ_WRITE</td>
<td>Set to control the audio playback. Getting the value of this field returns the most recent value set, or none if no value has been set.<br /><br /><table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>none</td><td>No effect</td></tr><tr><td>play</td><td>Start playing the audio. If the audio is already playing, it will be restarted.<br /><br />If the <code>loadStatus</code> field is not "ready", the sound will not be played and the <code>state</code> field will be set to "notready".<br /><br />For networked files with the <code>loadStatus</code> field set to "flushed", setting <code>control</code> to "play" will automatically trigger a reload of the network file, but will not result in the sound being played, due to the time it takes to download the file again. In this case, the sound can be played once the <code>loadStatus</code> field changes from "flushed" to "ready"</td></tr><tr><td>stop</td><td>If the audio is playing, stop playing the audio. If the audio is not playing, no effect.</td></tr></tbody></table></td>
</tr>
<tr>
<td>state</td>
<td>value string</td>
<td>none</td>
<td>READ_ONLY</td>
<td>Can be used to track the progress of current state of local and networked sound files When the field value changes to ready, the sound is ready to be played. The possible values are:<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>none</td><td>No current playback state</td></tr><tr><td>playing</td><td>Audio is currently playing.</td></tr><tr><td>stopped</td><td>The audio playback was stopped by setting control to "stop". The state will also be set to "stopped" if audio was playing and the uri is changed.</td></tr><tr><td>finished</td><td>The audio playback reached the end of the audio</td></tr><tr><td>toomanysounds</td><td>Control was to "play" while there were already the maximum number of SoundEffect sounds playing. Currently, this limit is 4.</td></tr><tr><td>notready</td><td>The sound file is not on the device. This is set in response to the control field being set to "play".<br /><br />For local WAV files included in a package file, it will be occur if the path to the file is not correct, or if the file is not a valid WAV file.<br /><br />For network-accessed WAV files, this indicates one of these three conditions is true:<br /><br />${notready}</td></tr></tbody></table></td>
</tr>
<tr>
<td>loadStatus</td>
<td>value string</td>
<td>none</td>
<td>READ_ONLY</td>
<td>Indicates the status of the sound file.<br /><br /><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>none</td><td>No file has been requested.</td></tr><tr><td>loading</td><td>(network files only) The file has been requested and is being downloaded.</td></tr><tr><td>ready</td><td>The file is ready to be played (i.e. it is on the device and is a valid WAV file).</td></tr><tr><td>failed</td><td>The file path or URI is incorrect or refers to a file that is not a valid WAV file.</td></tr><tr><td>flushed</td><td>(network files only) The file was ready, but has been deleted from the LRU cache. Setting the <code>control</code> field to play will cause the file to be automatically reloaded, but not be played upon completion.</td></tr></tbody></table></td>
</tr>
<tr>
<td>volume</td>
<td>integer</td>
<td>50</td>
<td>READ_WRITE</td>
<td>The volume is a number between 0 and 100 (percentage of full volume).  50 should be used for normal volume.</td>
</tr>
</tbody>
</table>




