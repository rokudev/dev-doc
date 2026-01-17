---
title: "ifSetMessagePort"
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


## Implemented by

| Name           | Description                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [roHdmiStatus](/docs/references/brightscript/components/rohdmistatus.md "roHdmiStatus")  | The HDMI status component provides an interface to the current HDMI operational status                                                    |
| [roScreen](/docs/references/brightscript/components/roscreen.md "roScreen")      | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from              |
| [roUrlTransfer](/docs/references/brightscript/components/rourltransfer.md "roUrlTransfer") | A roUrlTransfer object transfers data to or from remote servers specified by URLs. It can perform mutual authentication with a web server |
| [roTextToSpeech](/docs/references/brightscript/components/rotexttospeech.md "roTextToSpeech") | The roTextToSpeech component provides text to speech capabilities to applications                                                         |

## Supported methods

### SetMessagePort(port as Object ) as Void

#### Description

Sets the [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") to be used for all events from the screen.

#### Parameters

| Name           | Type | Description           |
| -------------- | ---- | --------------------- |
| Port | Object | The roMessagePort to be used for screen events. |

