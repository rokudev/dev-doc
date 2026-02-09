---
title: "ifSocketConnection"
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

| Name           | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roStreamSocket](doc:rostreamsocket) | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

## Supported methods

Each of these operations except listen() is either synchronous or asynchronous as determined by the socket's blocking behavior. If there is a valid assigned roMessagePort, the blocking behavior is considered asynchronous (non-blocking). Otherwise, the blocking behavior is considered synchronous.

### Listen(backlog as Integer) as Boolean

#### Description

Puts the socket into the listen state. 

#### Parameters

| Name    | Type    | Description                                     |
| ------- | ------- | ----------------------------------------------- |
| backlog | Integer | The limit for the queue of incoming connections |

#### Return Value

A flag indicating whether listening can be done (generally, if bound address is valid).

### IsListening() as Boolean

Checks whether if the [listen()](#listenbacklog-as-integer-as-boolean) method has been successfully called on this socket.

#### Return Value

A flag indicating whether the [listen()](#listenbacklog-as-integer-as-boolean) method has been successfully called on this socket.

### Connect() as Boolean

#### Description

Establishes a connection. 

#### Return Value

A flag indicating whether a socket connection has successfully been created. The connection might still not be complete if the socket is non-blocking

### Accept() as Object

#### Description

Accepts incoming requests.

#### Return Value

An roStreamSocket if the connection is pending; invalid otherwise. Use status to distinguish among success (eSuccess() or isConnected()), not ready (eOK()), and error.

### IsConnected() as Boolean

#### Description

Checks whether a [connect](#connect-as-boolean) or [accept](#accept-as-object) function has been completed on this socket. 

#### Return Value

A flag indicating whether a connection has been established or accepted on this socket.