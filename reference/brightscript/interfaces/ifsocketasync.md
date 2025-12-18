---
title: Ifsocketasync
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

# ifSocketAsync

The ifSocketAsync interface provides asynchronous socket features that utilize a full-featured select loop in the Roku OS that communicates to the application using a BrightScript [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort"). This interface is valid on roStreamSocket and roDataGramSocket objects that were assigned a BrightScript port via [SetMessagePort()](/docs/references/brightscript/interfaces/ifsetmessageport.md).

## Implemented by

| Name             | Description                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roDataGramSocket](/docs/references/brightscript/components/rodatagramsocket.md "roDataGramSocket") | The roDataGramSocket component enables Brightscript apps to send and receive UDP packets                                               |
| [roStreamSocket](/docs/references/brightscript/components/rostreamsocket.md "roStreamSocket")   | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

## Supported methods

### IsReadable() as Boolean

#### Description

Checks whether underlying select determines non-blocking read is possible.

#### Return Value

A flag indicating whether underlying select determines non-blocking read is possible.

### IsWritable() as Boolean

#### Description

Checks whether underlying select determines non-blocking write is possible.

#### Return Value

A flag indicating whether underlying select determines non-blocking write is possible.

### IsException() as Boolean

#### Description

Checks whether underlying select determines non-blocking read of OOB data is possible.

#### Return Value

A flag indicating whether underlying select determines non-blocking read of OOB data is possible.

### NotifyReadable(enable as Boolean) as Void

#### Description

Enables roSocketEvent events to be sent via the message port when the underlying socket becomes readable.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether roSocketEvent events are to be sent when the underlying socket becomes readable. |

### NotifyWritable(enable as Boolean) as Void

#### Description

Enables roSocketEvent events to be sent via the message port when the underlying socket becomes writable.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether roSocketEvent events are to be sent when the underlying socket becomes writable. |

### NotifyException(enable as Boolean) as Void

#### Description

Enables roSocketEvent events to be sent via the message port when the underlying socket gets an exception or OOB data.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether roSocketEvent events are to be sent when the underlying socket gets an exception or OOB data. |

### GetID() as Integer

#### Description

Returns a unique identifier that can be compared to the value returned by the [roSocketEvent.getSocketID()](/docs/references/brightscript/events/rosocketevent.md#getsocketid-as-integer) method to match the underlying socket to receive the event.

#### Return Paramters

A unique ID. 