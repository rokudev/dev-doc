---
title: "roProgramGuide"
excerpt: 'Electronic Program Guide data from the Roku device tuner'
deprecated: false
hidden: false
metadata:
  title: 'roProgramGuide'
  description: 'roProgramGuide represents Electronic Program Guide (EPG) data from the tuner, providing access to currently-broadcasting and upcoming programs.'
  robots: index
next:
  description: ''
---


Represents Electronic Program Guide (EPG) information from the tuner. 

Some Roku devices incorporate a tuner giving access to broadcast TV and radio received over an antenna or cable. In addition to the video and audio data from the tuner, the Roku Player receives electronic program guide (EPG) data about the currently-broadcasting program, and the next few programs to be broadcast. The roProgramGuide object provides access to that guide data.

This object can be created with no parameters:

```createObject("roProgramGuide")```

## Supported Interfaces

* [ifProgramGuide](doc:ifprogramguide)
