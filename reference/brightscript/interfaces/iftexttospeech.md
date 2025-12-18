---
title: Iftexttospeech
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

# ifTextToSpeech


> To implement CVAA/screen reader support in your app, use the [roAudioGuide](/docs/references/brightscript/components/roaudioguide.md) component object. The roTextToSpeech component object is typically used for book readers and other special-purpose applications.
>


## Implemented by

| Name           | Description                                                           |
| -------------- |-----------------------------------------------------------------------|
| [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md "roTextToSpeech") | The roTextToSpeech component provides text to speech capabilities to applications  |


## Supported methods

### Say(text as String) as Integer

#### Description

Returns an ID for the spoken string to notify observer callbacks about a specific spoken string.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| text | String  | The UTF8 text to be spoken. <br /><br />Punctuation such as commas and periods can be used to add pauses to the speech playback.<br/><br />Typically, special characters are generally not spoken; however, you can pass in the appropriate text such as "question mark" to have a special character be spoken (do not use the symbol). |

#### Return Value

The ID for the spoken string.

### Silence(duration as Integer) as Integer

#### Description

Causes text to speech to continue to suppress any application background sound for the amount of time specified by `duration`.

This can be used to add clarity for longer spoken text that may have pauses that might otherwise allow application background sound to be heard.

#### Parameters

| Name     | Type    | Description                                                 |
| -------- | ------- | ----------------------------------------------------------- |
| duration | Integer | The amount of time to suppress application background sound |

#### Return Value

The duration for the speech suppression. 

### Flush() as Void

#### Description

Interrupts and stops any current text to speech spoken string, to be used when the app does not want to the text to speech to continue.

### IsEnabled() as Boolean

#### Description

Checks whether text-to-speech is enabled. Text-to-speech may be enabled or disabled for various technical reasons (for example, on some platforms, text-to-speech may only be enabled once in connected mode). This is not affected by the state of any of its clients. In particular, it does not depend on whether a CVAA compliant accessibility feature is enabled or not.

#### Return Value

A flag indicating whether text-to-speech is enabled. 

### GetAvailableLanguages() as Object

#### Description

Returns an array containing the current list of languages available for text-to-speech.

#### Return Value

A list of languages. 

### SetLanguage(name as String) as Void

#### Description

Sets the language specified by `name` for text to speech, from one of the available languages returned by the [GetAvailableLanguages()](#getavailablelanguages-as-object) method. 

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| name | String  | The text-to-speech language to be used. |

### GetLanguage() as String

#### Description

Returns the name of the currently-selected text-to-speech language.

#### Return Value

The language name. 

### GetAvailableVoices() as Object

#### Description

Returns an array containing the current list of voices available for text-to-speech.

#### Return Value

A list of voices.

### SetVoice(name as String) as Void

#### Description

Sets the voice specified by name for text to speech, from one of the available voices returned by the [GetAvailableVoices()](#getavailablevoices-as-object) method. 

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| name | String  | The available text-to-speech voice to be used  |

### GetVoice() as String

#### Description

Returns the currently-selected voice.

#### Return Value

The selected voice.

### GetVolume() as Integer

#### Description

Returns the volume at which text is spoken. The value ranges from 0 for muted to 1000 for the highest volume. The default value is 1000.

#### Return Value

The volume. 

### SetVolume(volume as Integer) as Void

#### Description

Sets the volume at which text is spoken.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| volume | Integer  | The volume at which text is spoken. The value ranges from 0 for muted to 1000 for the highest volume. The default value is 1000.   |

### GetRate() as Integer

#### Description

Returns the rate at which text is spoken. The value ranges from -40 to 200 with a default value of 0.

#### Return Value

The rate. 

### SetRate(rate as Integer) as Void

#### Description

Sets the rate at which text is spoken. 

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| rate | Integer  | The rate at which text is to be spoken. The possible values range from -40 to 200. |

### GetPitch() as Integer

#### Description

Returns the pitch at which text is spoken. The possible values range from -60 to +60.

#### Return Value

The pitch.

### SetPitch(pitch as Integer) as Void

#### Description

Sets the pitch at which text is spoken. 

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| pitch | Integer  | The pitch at which text is to be spoken. The possible values range from -60 to +60. |
