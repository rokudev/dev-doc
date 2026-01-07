---
title: "DynamicMiniKeyboard"
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

# DynamicMiniKeyboard



Extends [DynamicKeyboardBase](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md "**DynamicKeyboardBase**")

The **DynamicMiniKeyboard** node is similar to the [legacy **MiniKeyboard** node](/docs/references/scenegraph/widget-nodes/minikeyboard.md), but with additional voice entry functionality. It enables text and voice entry of letters A-Z and digits 0-9. It is typically used for entering a search query. 

The key layout is fixed based on the node's pre-built Key Definition File.

![roku815px - dynamic-mini-keyboard](https://image.roku.com/ZHZscHItMTc2/dynamic-mini-keyboard.jpg)

## Fields

The DynamicMiniKeyboard node inherits all its fields from its parent [DynamicKeyboardBase](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md) node class. See the [DynamicKeyboardBase](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md) and its base classes ([Group](/docs/references/scenegraph/layout-group-nodes/group.md) and [Node](/docs/references/scenegraph/node.md)) for descriptions of the fields that can be configured.

## Default VoiceTextEditBox settings

| Field          | Type    | Default        | Description                                                  |
| :------------- | :------ | :------------- | :----------------------------------------------------------- |
| voiceEntryType | string  | "alphanumeric" | The type of characters accepted via voice entry.             |
| voiceEnabled   | boolean | true           | Specifies whether voice entry is enabled for the text edit box of the **DynamicMiniKeyboard**. |
| maxTextLength  | integer | 75             | The maximum number of characters that may be entered into the text edit box of the **DynamicMiniKeyboard**. |

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure a dynamic voice-enabled mini-keyboard.