---
title: "ifGetMessagePort"
excerpt: 'Interface providing GetMessagePort() to retrieve an object''s associated message port'
deprecated: false
hidden: false
metadata:
  title: 'ifGetMessagePort'
  description: 'Documents the ifGetMessagePort interface, which exposes GetMessagePort() to return the message port currently associated with an object.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name           | Description |
| -------------- | ----------- |
| [roHdmiStatus](doc:rohdmistatus)   | The HDMI status component provides an interface to the current HDMI operational status |
| [roScreen](doc:roscreen)      | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from |
| [roUrlTransfer](doc:rourltransfer)  | A roUrlTransfer object transfers data to or from remote servers specified by URLs |
| [roTextToSpeech](doc:rotexttospeech) | The roTextToSpeech component provides text to speech capabilities to applications |


## Supported methods

### GetMessagePort() as Object

#### Description

Returns the message port (if any) currently associated with the object

#### Return Value

The message port.