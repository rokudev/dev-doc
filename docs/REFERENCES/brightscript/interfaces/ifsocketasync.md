---
title: "ifSocketAsync"
excerpt: 'Asynchronous socket interface using a select loop and message port'
deprecated: false
hidden: false
metadata:
  title: 'ifSocketAsync'
  description: 'The ifSocketAsync interface provides asynchronous socket features using a select loop that communicates with the app via a message port on socket objects.'
  robots: index
next:
  description: ''
---


The ifSocketAsync interface provides asynchronous socket features that utilize a full-featured select loop in the Roku OS that communicates to the application using a BrightScript [roMessagePort](doc:romessageport). This interface is valid on roStreamSocket and roDataGramSocket objects that were assigned a BrightScript port via [SetMessagePort()](doc:ifsetmessageport).

## Implemented by

| Name             | Description                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roDataGramSocket](doc:rodatagramsocket) | The roDataGramSocket component enables Brightscript apps to send and receive UDP packets                                               |
| [roStreamSocket](doc:rostreamsocket)   | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

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

Returns a unique identifier that can be compared to the value returned by the [roSocketEvent.getSocketID()](doc:rosocketevent) method to match the underlying socket to receive the event.

#### Return Paramters

A unique ID. 