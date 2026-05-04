---
title: "ifAudioGuide"
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


> Please note this component is only available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running [Roku OS version 7.5](doc:release-notes#roku-os-7-5) and later.


## Implemented by

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| [roAudioGuide](doc:roaudioguide) | Returns information about the application |

## Supported methods

### Say(text as String, flushSpeech as Boolean, dontRepeat as Boolean) as Integer

#### Description

Returns an ID for the spoken string to notify observer callbacks about a specific spoken string. This ID can be used with the [roTextToSpeechEvent](doc:rotexttospeechevent).<br /><br />This method will automatically split up text to reduce lag. Due to this automatic splitting, the roTextToSpeechEvent 0 ("Started speech") event for the returned ID may not be sent until later than expected. The roTextToSpeechEvents 1 ("Speech has completed") and 2 ("Speech has been flushed") events are sent at the expected times.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| text        | String  | The string to be spoken.<br /><br />Punctuation such as commas and periods can be used to add pauses to the speech playback.<br/><br />Typically, special characters are generally not spoken; however, you can pass in the appropriate text such as "question mark" to have a special character be spoken (do not use the symbol). |
| flushSpeech | Boolean | Set to true to make the screen reader immediately stop speaking any other speech before speaking. <br /><br />Set to false to make the screen reader wait until any current speech is done before speaking. |
| dontRepeat  | Boolean | Set to true to ignore calls to the say() method with the same text.<br /><br />Set to false to speak when calls to the say() method are sent with the same text. |

#### Return Value

An ID associated with the spoken string to be used to notify observer callbacks.

### Flush()

#### Description

Interrupts and stops any current text to speech spoken string, to be used when the application does not want the text to speech to continue.

> This call is equivalent to the [roTextToSpeech.Flush()](doc:iftexttospeech) method, and stops speech started by the [roAudioGuide.Say()](#saytext-as-string-flushspeech-as-boolean-dontrepeat-as-boolean-as-integer) and [roTextToSpeech.Say()](doc:iftexttospeech) methods.

### Silence(duration as Integer) as Integer

#### Description

If the screen reader is enabled, causes text to speech to continue to suppress any application background sound for the amount of time specified by duration (in milliseconds).<br /><br />This can be used to add clarity for longer spoken text that may have pauses that might otherwise allow application background sound to be heard. This method does nothing if screen reader is currently disabled.

#### Parameters

| Name     | Type    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| duration | Integer | The number of milliseconds to suppress application background sounds. |

#### Return Value

The number of milliseconds that the background sound has been silenced.
