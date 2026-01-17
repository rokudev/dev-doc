---
title: "roAudioGuide"
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


> This component is only available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.5 and later.

The roAudioGuide component provides screen reader support for applications that require custom speech beyond what is provided by the automatic screen reader in SDK and Scene Graph components.

Though some of the roAudioGuide API is similar to [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md "roTextToSpeech"), roAudioGuide provides support specific to screen reader, including:

- Speaks when the screen reader is enabled, and doesn't speak if it isn't.
- Automatically splits up text to reduce lag.
- Uses the correct voice, language, volume, and speech rate for the screen reader.
- Tries to be "smart" by pre-processing the text for correct pronunciation of things like currency, email addresses, acronyms, media-related names and titles, etc.

Usually, roAudioGuide would be used on its own, but it can be used in conjunction with [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md "roTextToSpeech").


## Supported interfaces

- [ifAudioGuide](/docs/references/brightscript/interfaces/ifaudioguide.md "ifAudioGuide")
