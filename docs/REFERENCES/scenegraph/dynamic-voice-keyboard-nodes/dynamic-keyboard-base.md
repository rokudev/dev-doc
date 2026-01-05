---
title: "DynamicKeyboardBase"
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

# DynamicKeyboardBase

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

> Apps must use Roku voice keyboards for [email](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md), [PIN](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-pinpad.md), [password](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard.md) entry to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation).

The DynamicKeyboardBase is an abstract class that provides the functionality for dynamic voice-enabled keyboards. It combines [**DynamicKeyGrid**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md) and [**VoiceTextEditBox**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) nodes to provide a single node that supports text entry in multiple languages and voice entry in English and Spanish.

- The [**DynamicKeyGrid**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md) provides keyboard functionality. The layout of the keyboard is based on a JSON-formatted Key Definition File.

  The classes derived from DynamicKeyboardBase (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) have built-in Key Definition Files. For example, the DynamicKeyboard node uses a Key Definition File that matches the key layout of the [legacy Keyboard node](/docs/references/scenegraph/widget-nodes/keyboard.md).

  The [**DynamicCustomKeyboard** node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-custom-keyboard.md) enables developers to define a custom Key Definition File in order to configure the key layout. In the Key Definition File, the developer specifies the keys in each section and row of the keyboard. The keys support the characters in the Basic Latin, Latin 1 Supplement, Latin Extended-A, and Latin Extended-B blocks. This provides support for most Western European languages, including English, French, German, Italian, Portuguese, and Spanish.


- The [**VoiceTextEditBox**](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) displays the text that has been entered or spoken. This node supports multiple voice entry modes for entering email addresses, passwords, street addresses, and PINs. This node currently supports voice entry in English and Spanish.

> Developers should upgrade the [legacy keyboards](/docs/references/scenegraph/widget-nodes/keyboard.md) in their apps to dynamic voice-enabled keyboards in order to leverage the following benefits:
>
> - **Faster on-device sign-ups and sign-ins.** Enable customers to use voice entry to provide their information when subscribing to apps and logging in.
>
> - **Localized in-app search**: Enable customers to search for content in their native language.
>
> - **Localized customer information entry**: Enable customers to enter their personal information in their native language.

## Fields

| Field                                           | Type                                                         | Default                                           | Access Permission | Description                                                  |
| :---------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------ | :---------------- | :----------------------------------------------------------- |
| text                                            | string                                                       | ""                                                | READ_WRITE        | Contains the string of characters that has been entered. The text written to this field may also be displayed in the VoiceTextEditBox. |
| textEditBox                                     | [**VoiceTextEditBox** node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) | The VoiceTextEditBox associated with the keyboard | READ              | The internal [VoiceTextEditBox node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) used by this DynamicKeyboardBase node.<br /><br />Do not set this field to null or to a different VoiceTextEditBox node; this field should be used only to access the fields of this node's internal VoiceTextEditBox node. |
| hideTextBox | boolean                                                      | false                                             | READ_WRITE        | Hides the keyboard's internal **VoiceTextEditBox**, and renders the keyboard's **DynamicKeyGrid** at the top of the node. |
| keyGrid                                         | **[DynamicKeyGrid node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md)** | The DynamicKeyGrid associated with the keyboard   | READ              | The internal [DynamicKeyGrid node](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md) used by this DynamicKeyboardBase node.<br /><br />Do not set this field to null or to a different DynamicKeyGrid node; this field should be only used to access the fields of this node's internal DynamicKeyGrid node, such as the mode or horizWrapping fields. |
| domain                                          | string                                                       | "generic"                                         | READ_WRITE        | The keyboard mode, which may be one of the following:<br />${domain-mode-list}<br />The domain may be used to:<br />${domain-use-list} |

## UX recommendations

1. Do not show hint text in the [VoiceTextEditBox](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md).
2. Display secondary text under the title.
3. Show the horizontal blinking cursor when the focus is on the [VoiceTextEditBox](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/voice-text-edit-box.md) and vertical blinking cursor when the focus is on the keyboard buttons.

![roku815px - email-keyboard](https://image.roku.com/ZHZscHItMTc2/email-keyboard.png)

![roku815px - email-keyboard](https://image.roku.com/ZHZscHItMTc2/email-keyboard-2.png)

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure dynamic voice-enabled keyboards. The sample app includes a voice-enabled keyboard, PIN pad, mini-keyboard, and custom keyboard (an address keyboard form).

{#domain-mode-list}

- "email": letter-by-letter dictation for emails.
- "numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.
- "alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.
- "generic": Full word input for search queries or other sequences of numbers, letters and symbols.
- "password": letter-by-letter dication for passwords.

{#domain-use-list}

- Set options for the speech recognition system.
- Identify when a complete string has been entered (for example, an email address).
- Specify whether the entered string is displayed as a single string or a discrete sequence of characters (for example, a PIN code).
- Enable key suggestions (for example, a pop-up for the ampersand key (&) to provide common email choices).
