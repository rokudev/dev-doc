---
title: "ifSetMessagePort"
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


## Implemented by

| Name           | Description                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [roHdmiStatus](doc:rohdmistatus)  | The HDMI status component provides an interface to the current HDMI operational status                                                    |
| [roScreen](doc:roscreen)      | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from              |
| [roUrlTransfer](doc:rourltransfer) | A roUrlTransfer object transfers data to or from remote servers specified by URLs. It can perform mutual authentication with a web server |
| [roTextToSpeech](doc:rotexttospeech) | The roTextToSpeech component provides text to speech capabilities to applications                                                         |

## Supported methods

### SetMessagePort(port as Object ) as Void

#### Description

Sets the [roMessagePort](doc:romessageport) to be used for all events from the screen.

#### Parameters

| Name           | Type | Description           |
| -------------- | ---- | --------------------- |
| Port | Object | The roMessagePort to be used for screen events. |

