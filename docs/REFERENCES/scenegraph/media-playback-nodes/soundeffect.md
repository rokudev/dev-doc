---
title: SoundEffect
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
Extends [**Node**](doc:node)

The SoundEffect node class is used to play audio sound effects that can be triggered from events that occur in the UI. Typically, these sound effects are short audio clips, but there is no inherent limit on their length. Currently, up to four simultaneous sounds can be playing at any time, in addition to audio from streaming content and TextToSpeech audio.

Files can be installed locally as part of the package file or dynamically downloaded from the network. All files must be WAV (i.e. PCM) format.

For local files, the convention is to include the WAV files in a directory named "sounds".

For downloaded files, a least-recently-used (LRU) mechanism is used to keep the most recently downloaded/played sounds in temporary storage on the device. If the limits on the maximum number/size of downloaded sounds is exceeded, the least recently used sounds are removed from temporary storage. They will be automatically reloaded the next time the control field is set to "play".

A sample demonstrating how to use the SoundEffect node can be found here: [SimpleSoundEffect](https://github.com/rokudev/samples/blob/master/media/SimpleSoundEffect)

## Fields

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Default</th>
<th class="short-line">Access Permission</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">uri</td>
<td class="short-line">uri</td>
<td class="short-line"></td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Specifies the URI of the WAV file. Sounds included as part of the application package can be referenced using the <code>pkg:/sounds</code> prefix. This may also specify the location of a WAV file on a remote server.</td>
</tr>
<tr>
<td class="short-line">control</td>
<td class="short-line">option string</td>
<td class="short-line">none</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Set to control the audio playback. Getting the value of this field returns the most recent value set, or none if no value has been set.<br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Option</th>
<th class="short-line">Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">none</td>
<td class="short-line">No effect</td>
</tr>
<tr>
<td class="short-line">play</td>
<td class="long-line">Start playing the audio. If the audio is already playing, it will be restarted.<br><br>If the <code>loadStatus</code> field is not "ready", the sound will not be played and the <code>state</code> field will be set to "notready".<br><br>For networked files with the <code>loadStatus</code> field set to "flushed", setting <code>control</code> to "play" will automatically trigger a reload of the network file, but will not result in the sound being played, due to the time it takes to download the file again. In this case, the sound can be played once the <code>loadStatus</code> field changes from "flushed" to "ready"</td>
</tr>
<tr>
<td class="short-line">stop</td>
<td class="long-line">If the audio is playing, stop playing the audio. If the audio is not playing, no effect.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">state</td>
<td class="short-line">value string</td>
<td class="short-line">none</td>
<td class="short-line">READ_ONLY</td>
<td class="long-line">Can be used to track the progress of current state of local and networked sound files When the field value changes to ready, the sound is ready to be played. The possible values are:<br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">none</td>
<td class="short-line">No current playback state</td>
</tr>
<tr>
<td class="short-line">playing</td>
<td class="short-line">Audio is currently playing.</td>
</tr>
<tr>
<td class="short-line">stopped</td>
<td class="long-line">The audio playback was stopped by setting control to "stop". The state will also be set to "stopped" if audio was playing and the uri is changed.</td>
</tr>
<tr>
<td class="short-line">finished</td>
<td class="short-line">The audio playback reached the end of the audio</td>
</tr>
<tr>
<td class="short-line">toomanysounds</td>
<td class="long-line">Control was to "play" while there were already the maximum number of SoundEffect sounds playing. Currently, this limit is 4.</td>
</tr>
<tr>
<td class="short-line">notready</td>
<td class="long-line">The sound file is not on the device. This is set in response to the control field being set to "play".<br><br>For local WAV files included in a package file, it will be occur if the path to the file is not correct, or if the file is not a valid WAV file.<br><br>For network-accessed WAV files, this indicates one of these three conditions is true:<br><br><ul>
<li>The file has been requested, but is not finished downloading. In this case, the <code>loadStatus</code> field will be set to "loading".</li>
<li>The file request has completed, but the URL is incorrect or the downloaded file is not a valid WAV filed. In this case, the <code>loadStatus</code> field will be set to "failed"</li>
<li>The file has previously been downloaded, but has been flushed from the LRU cache. In this case, the <code>loadStatus</code> field will be set to "flushed".</li>
</ul></td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">loadStatus</td>
<td class="short-line">value string</td>
<td class="short-line">none</td>
<td class="short-line">READ_ONLY</td>
<td class="long-line">Indicates the status of the sound file.<br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">none</td>
<td class="short-line">No file has been requested.</td>
</tr>
<tr>
<td class="short-line">loading</td>
<td class="long-line">(network files only) The file has been requested and is being downloaded.</td>
</tr>
<tr>
<td class="short-line">ready</td>
<td class="long-line">The file is ready to be played (i.e. it is on the device and is a valid WAV file).</td>
</tr>
<tr>
<td class="short-line">failed</td>
<td class="long-line">The file path or URI is incorrect or refers to a file that is not a valid WAV file.</td>
</tr>
<tr>
<td class="short-line">flushed</td>
<td class="long-line">(network files only) The file was ready, but has been deleted from the LRU cache. Setting the <code>control</code> field to play will cause the file to be automatically reloaded, but not be played upon completion.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">volume</td>
<td class="short-line">integer</td>
<td class="short-line">50</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">The volume is a number between 0 and 100 (percentage of full volume).  50 should be used for normal volume.</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />
