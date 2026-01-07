---
title: "ifMicrophone"
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

# ifMicrophone

## Implemented by

| Name         | Description |
| ------------ | ----------- |
| [roMicrophone](/docs/references/brightscript/components/romicrophone.md "roMicrophone") | The roMicrophone API allows apps to receive audio data from the user’s microphone-supported remote control device or mobile phone            |


## Supported methods

### CanRecord() as Boolean

#### Description

Indicates whether the platform and paired remote control can be requested to open the microphone.

#### Return Value

A flag indicating whether the microphone can be opened.

### SetPrompt(prompt as String) as Void

#### Description

Sets the text to be displayed in the system microphone UI.

#### Parameters

| Name   | Type   | Description                                           |
| ------ | ------ | ----------------------------------------------------- |
| prompt | String | The text to be displayed in the system microphone UI. |

### RecordToFile(wavFilePath as String) as Boolean

#### Description

Opens the microphone and records to create a WAV file at the specified output file path. Only tmp:/ paths are supported.

#### Parameters

| Name        | Type   | Description                                       |
| ----------- | ------ | ------------------------------------------------- |
| wavFilePath | String | The file path where the WAV file is to be stored. |

#### Return Value

A flag indicating whether the recording was performed and saved successfully.

### StartRecording() as Boolean

#### Description

Opens the microphone and begins streaming microphone events to the app. The app must have called the [SetMessagePort()](/docs/references/brightscript/interfaces/ifsetmessageport.md#setmessageportport-as-object--as-void) method previously. 

While the microphone is open, [RecordingInfo](/docs/references/brightscript/events/romicrophoneevent.md#isrecordinginfo-as-boolean) events will be sent periodically with audio data. When the microphone is closed, a [RecordingDone](/docs/references/brightscript/events/romicrophoneevent.md#isrecordingdone-as-boolean) event will be sent. See [roMicrophoneEvent](/docs/references/brightscript/events/romicrophoneevent.md) for detailed information.

#### Return Value

A flag indicating whether the microphone was opened successfully.

### StopRecording() as Boolean

#### Description

Stops recording and closes the microphone. This method is useful if the microphone was previously opened via the [StartRecording()](#startrecording-as-boolean) method and the app needs to cancel the current recording prematurely, (for example, the duration limit was reached or an application error). 

#### Return Value

A flag indicating whether the microphone was opened and closed successfully.