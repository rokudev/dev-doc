---
title: "DynamicMiniKeyboard"
excerpt: 'A keyboard node supporting voice and text entry for search queries'
deprecated: false
hidden: false
metadata:
  title: 'DynamicMiniKeyboard'
  description: 'The DynamicMiniKeyboard node enables text and voice entry of letters A-Z and digits 0-9, and is typically used for entering a search query.'
  robots: index
next:
  description: ''
---




Extends [DynamicKeyboardBase](doc:dynamic-keyboard-base)

The **DynamicMiniKeyboard** node is similar to the [legacy **MiniKeyboard** node](doc:minikeyboard), but with additional voice entry functionality. It enables text and voice entry of letters A-Z and digits 0-9. It is typically used for entering a search query. 

The key layout is fixed based on the node's pre-built Key Definition File.

![roku815px - dynamic-mini-keyboard](https://image.roku.com/ZHZscHItMTc2/dynamic-mini-keyboard.jpg)

## Fields

The DynamicMiniKeyboard node inherits all its fields from its parent [DynamicKeyboardBase](doc:dynamic-keyboard-base) node class. See the [DynamicKeyboardBase](doc:dynamic-keyboard-base) and its base classes ([Group](doc:group) and [Node](doc:node)) for descriptions of the fields that can be configured.

## Default VoiceTextEditBox settings

| Field          | Type    | Default        | Description                                                  |
| :------------- | :------ | :------------- | :----------------------------------------------------------- |
| voiceEntryType | string  | "alphanumeric" | The type of characters accepted via voice entry.             |
| voiceEnabled   | boolean | true           | Specifies whether voice entry is enabled for the text edit box of the **DynamicMiniKeyboard**. |
| maxTextLength  | integer | 75             | The maximum number of characters that may be entered into the text edit box of the **DynamicMiniKeyboard**. |

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure a dynamic voice-enabled mini-keyboard.