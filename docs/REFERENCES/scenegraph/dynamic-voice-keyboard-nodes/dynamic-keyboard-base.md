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


Extends [**Group**](doc:group)

> Apps must use Roku voice keyboards for [email](doc:dynamic-keyboard), [PIN](doc:dynamic-pinpad), [password](doc:dynamic-keyboard) entry to pass [certification](doc:certification).

The DynamicKeyboardBase is an abstract class that provides the functionality for dynamic voice-enabled keyboards. It combines [**DynamicKeyGrid**](doc:dynamic-key-grid) and [**VoiceTextEditBox**](doc:voice-text-edit-box) nodes to provide a single node that supports text entry in multiple languages and voice entry in English and Spanish.

- The [**DynamicKeyGrid**](doc:dynamic-key-grid) provides keyboard functionality. The layout of the keyboard is based on a JSON-formatted Key Definition File.

  The classes derived from DynamicKeyboardBase (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) have built-in Key Definition Files. For example, the DynamicKeyboard node uses a Key Definition File that matches the key layout of the [legacy Keyboard node](doc:keyboard).

  The [**DynamicCustomKeyboard** node](doc:dynamic-custom-keyboard) enables developers to define a custom Key Definition File in order to configure the key layout. In the Key Definition File, the developer specifies the keys in each section and row of the keyboard. The keys support the characters in the Basic Latin, Latin 1 Supplement, Latin Extended-A, and Latin Extended-B blocks. This provides support for most Western European languages, including English, French, German, Italian, Portuguese, and Spanish.


- The [**VoiceTextEditBox**](doc:voice-text-edit-box) displays the text that has been entered or spoken. This node supports multiple voice entry modes for entering email addresses, passwords, street addresses, and PINs. This node currently supports voice entry in English and Spanish.

> Developers should upgrade the [legacy keyboards](doc:keyboard) in their apps to dynamic voice-enabled keyboards in order to leverage the following benefits:
>
> - **Faster on-device sign-ups and sign-ins.** Enable customers to use voice entry to provide their information when subscribing to apps and logging in.
>
> - **Localized in-app search**: Enable customers to search for content in their native language.
>
> - **Localized customer information entry**: Enable customers to enter their personal information in their native language.

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
<td>text</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Contains the string of characters that has been entered. The text written to this field may also be displayed in the VoiceTextEditBox.</td>
</tr>
<tr>
<td>textEditBox</td>
<td>[<strong>VoiceTextEditBox</strong> node](doc:voice-text-edit-box)</td>
<td>The VoiceTextEditBox associated with the keyboard</td>
<td>READ</td>
<td>The internal [VoiceTextEditBox node](doc:voice-text-edit-box) used by this DynamicKeyboardBase node.<br /><br />Do not set this field to null or to a different VoiceTextEditBox node; this field should be used only to access the fields of this node's internal VoiceTextEditBox node.</td>
</tr>
<tr>
<td>hideTextBox</td>
<td>boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Hides the keyboard's internal <strong>VoiceTextEditBox</strong>, and renders the keyboard's <strong>DynamicKeyGrid</strong> at the top of the node.</td>
</tr>
<tr>
<td>keyGrid</td>
<td><strong>[DynamicKeyGrid node](doc:dynamic-key-grid)</strong></td>
<td>The DynamicKeyGrid associated with the keyboard</td>
<td>READ</td>
<td>The internal [DynamicKeyGrid node](doc:dynamic-key-grid) used by this DynamicKeyboardBase node.<br /><br />Do not set this field to null or to a different DynamicKeyGrid node; this field should be only used to access the fields of this node's internal DynamicKeyGrid node, such as the mode or horizWrapping fields.</td>
</tr>
<tr>
<td>domain</td>
<td>string</td>
<td>"generic"</td>
<td>READ_WRITE</td>
<td>The keyboard mode, which may be one of the following:<br /><ul><li>"email": letter-by-letter dictation for emails.</li><li>"numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.</li><li>"alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.</li><li>"generic": Full word input for search queries or other sequences of numbers, letters and symbols.</li><li>"password": letter-by-letter dication for passwords.</li></ul><br />The domain may be used to:<br /><ul><li>Set options for the speech recognition system.</li><li>Identify when a complete string has been entered (for example, an email address).</li><li>Specify whether the entered string is displayed as a single string or a discrete sequence of characters (for example, a PIN code).</li><li>Enable key suggestions (for example, a pop-up for the ampersand key (&amp;) to provide common email choices).</li></ul></td>
</tr>
</tbody>
</table>


## UX recommendations

1. Do not show hint text in the [VoiceTextEditBox](doc:voice-text-edit-box).
2. Display secondary text under the title.
3. Show the horizontal blinking cursor when the focus is on the [VoiceTextEditBox](doc:voice-text-edit-box) and vertical blinking cursor when the focus is on the keyboard buttons.

![roku815px - email-keyboard](https://image.roku.com/ZHZscHItMTc2/email-keyboard.png)

![roku815px - email-keyboard](https://image.roku.com/ZHZscHItMTc2/email-keyboard-2.png)

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure dynamic voice-enabled keyboards. The sample app includes a voice-enabled keyboard, PIN pad, mini-keyboard, and custom keyboard (an address keyboard form).
