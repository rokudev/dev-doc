---
title: Voice Text Edit Box
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

# VoiceTextEditBox



Extends [TextEditBox](/docs/references/scenegraph/widget-nodes/texteditbox.md)

The **VoiceTextEditBox** node is similar to the [legacy **TextEditBox** node](/docs/references/scenegraph/widget-nodes/texteditbox.md), but with additional voice entry functionality. Only one voice-enabled **VoiceTextEditBox** node may be on the screen at a time. If another VoiceTextEditBox is rendered on the screen, its voice functionality is disabled implicitly. 

## Fields

| Field                                                     | Type    | Default         | Access Permission | Description                                                  |
| :-------------------------------------------------------- | :------ | :-------------- | :---------------- | :----------------------------------------------------------- |
| voiceEnabled                                              | boolean | false           | READ_WRITE        | Enables the text box to be voice-enabled. In this case, it will display a mic icon and have a voice UI with voice hints. |
| voiceToolTipWidth                                         | float   | FHD: 321HD: 214 | READ_WRITE        | The maximum width of the voice hint tootip. The height scales based on the specified width. |
| voiceEntryType                                            | string  | "generic"       | READ_WRITE        | The type of voice entry mode to be used: <br />${voice-entry-type-list} |
| isDictating           | boolean | false           | READ-ONLY         | Checks whether the user is currently dictating to the keyboard. |
| voiceInputRegexFilter | string  | ""              | WRITE-ONLY        | Specify which characters may or may not be entered on the keyboard via dictation. For example, setting this field to "^[A-Za-z0-9_-]*$" prevents any special characters from being entered. |

{#flip-voice-tooltip-list}

- true. The voice hint tooltip points right.
- false. The voice hint tooltip points left.

{#voice-entry-type-list}

- "email": letter-by-letter dictation for emails.
- "numeric": letter-by-letter dictation for PIN codes, zip codes, and other numeric input.
- "alphanumeric": letter-by-letter dication for street addresses or other sequences of numbers and letters.
- "generic": Full word input for search queries or other sequences of numbers, letters and symbols.
-  "password": letter-by-letter dication for passwords.