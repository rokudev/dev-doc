---
title: "Dynamic voice keyboard nodes"
excerpt: 'SceneGraph nodes for text and voice entry: DynamicKeyboard, DynamicPinPad, DynamicMiniKeyboard, DynamicCustomKeyboard, and the components that back them'
deprecated: false
hidden: false
metadata:
  title: 'Dynamic voice keyboard nodes'
  description: 'Dynamic voice keyboard nodes provide text and voice entry in your SceneGraph apps, supporting email, PIN, password, and free-form input. This page covers the four keyboard variants and the underlying components they share.'
  robots: index
next:
  description: ''
---
Dynamic voice keyboard nodes let you collect text from the user with both on-screen typing and voice entry. They support email addresses, PIN codes, passwords, and free-form text.

> Apps must use these keyboards for [email](doc:dynamic-keyboard), [PIN](doc:dynamic-pinpad), and [password](doc:dynamic-keyboard) entry to pass [certification](doc:certification).

![DynamicKeyboard with voice prompt](https://image.roku.com/ZHZscHItMTc2/dynamic-keyboard-voice.jpg "DynamicKeyboard")

## Choosing a node

| Node | Use case |
| :--- | :--- |
| [DynamicKeyboard](doc:dynamic-keyboard) | A full alphanumeric keyboard for general text entry, email addresses, and passwords. |
| [DynamicPinPad](doc:dynamic-pinpad) | A numeric pin pad for PIN codes, zip codes, and similar short numeric input. |
| [DynamicMiniKeyboard](doc:dynamic-mini-keyboard) | A compact keyboard variant for tighter UI surfaces. |
| [DynamicCustomKeyboard](doc:dynamic-custom-keyboard) | A keyboard whose key layout you define in a custom Key Definition File. |

The four keyboard nodes share these underlying components:

| Component | Role |
| :--- | :--- |
| [DynamicKeyGrid](doc:dynamic-key-grid) | The grid of keys rendered inside each keyboard, laid out from a JSON Key Definition File. |
| [VoiceTextEditBox](doc:voice-text-edit-box) | The text-display box that shows the entered or spoken text above the key grid. |
| [Key Definition File](doc:key-definition-file) | The JSON file format that describes the keyboard layout used by DynamicKeyGrid. |

## Inheritance

DynamicKeyboard, DynamicPinPad, DynamicMiniKeyboard, and DynamicCustomKeyboard all extend [**DynamicKeyboardBase**](doc:dynamic-keyboard-base), an abstract base class that combines a DynamicKeyGrid and a VoiceTextEditBox into a single node. Most of the field reference for the four keyboard variants (`text`, `textEditBox`, `keyGrid`, `domain`, `hideTextBox`) is documented on the DynamicKeyboardBase page rather than repeated on each subclass.

## Voice entry

Voice entry currently supports English and Spanish. The `domain` field on DynamicKeyboardBase (and therefore on every subclass) controls the speech-recognition mode: `email`, `numeric`, `alphanumeric`, `generic`, or `password`. See the [DynamicKeyboardBase fields](doc:dynamic-keyboard-base#fields) for details.

## Looking for something else?

* **Migrating from the legacy keyboards?** Replace [Keyboard](doc:keyboard), [PinPad](doc:minikeyboard), and similar legacy nodes with their dynamic voice-enabled counterparts above to gain voice entry and broader language support.
* **Building a dialog with an embedded keyboard or pin pad?** The [Standard dialog framework](doc:standard-dialog-framework-nodes) provides [StandardKeyboardDialog](doc:standard-keyboard-dialog) and [StandardPinPadDialog](doc:standard-pinpad-dialog), pre-built modal dialogs that wrap these keyboards with a title, buttons, and consistent chrome.

## Sample app

A [voice-enabled keyboard sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) demonstrates how to create and configure each of the four keyboard variants, including a custom address keyboard built from a Key Definition File.
