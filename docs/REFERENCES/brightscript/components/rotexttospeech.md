---
title: "roTextToSpeech"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---



> To implement CVAA/screen reader support in your app, use the [roAudioGuide](doc:roaudioguide) component object. The roTextToSpeech component object is typically used for book readers and other special-purpose applications.
>
> Please note this component is only available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running [Roku OS version 7.2](doc:release-notes#roku-os-7-2) and later.


The roTextToSpeech component provides text to speech capabilities to applications.

An roTextToSpeech component object is created with no parameters:

``CreateObject("roTextToSpeech")``


## Supported interfaces

- [ifTextToSpeech](doc:iftexttospeech)                 
- [ifSetMessagePort](doc:ifsetmessageport)               
- [ifGetMessagePort](doc:ifgetmessageport)               

## Supported events

- [roTextToSpeechEvent](doc:rotexttospeechevent)  

