---
title: "DynamicPinPad"
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




Extends [DynamicKeyboardBase](doc:dynamic-keyboard-base)

The **DynamicPinPad** node is similar to the [legacy **PinPad** node](doc:pinpad), but with additional voice entry functionality. It enables text and voice entry of numeric characters. It is typically used for entering short numeric PIN codes. 

The key layout is fixed based on the node's pre-built Key Definition File.

![roku815px - dynamic-pinpad-voice](https://image.roku.com/ZHZscHItMTc2/dynamic-pinpad-voice.jpg)

## Fields

The DynamicPinPad node inherits all its fields from its parent [DynamicKeyboardBase](doc:dynamic-keyboard-base) node class. See the [DynamicKeyboardBase](doc:dynamic-keyboard-base) and its base classes ([Group](doc:group) and [Node](doc:node)) for descriptions of the fields that can be configured.

## Default VoiceTextEditBox settings

| Field          | Type    | Default   | Description                                                  |
| :------------- | :------ | :-------- | :----------------------------------------------------------- |
| voiceEntryType | string  | "numeric" | The type of characters accepted via voice entry.             |
| voiceEnabled   | boolean | true      | Specifies whether voice entry is enabled for the text edit box of the dynamic PIN pad. |
| maxTextLength  | integer | 4         | The maximum number of characters that may be entered into the text edit box of the dynamic pinpad. |

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure a dynamic voice-enabled PIN pad.