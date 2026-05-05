---
title: ifSocket
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

| Name                                     | Description                                                                                                                            |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roDataGramSocket](doc:rodatagramsocket) | The roDataGramSocket component enables Brightscript apps to send and receive UDP packets                                               |
| [roStreamSocket](doc:rostreamsocket)     | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

## Supported methods

These are the basic binding and data transfer operations used on both [roStreamSocket](doc:rostreamsocket) and [roDataGramSocket](doc:rodatagramsocket). They are synchronous or asynchronous as determined by the socket's blocking behavior. If there is a valid assigned [roMessagePort](doc:romessageport), the blocking behavior is considered asynchronous (non-blocking). Otherwise, the blocking behavior is considered synchronous.

### Send(data as Object, startIndex as Integer, length as Integer) as Integer

#### Description

Sends up to length bytes of data to the socket.

#### Parameters

| Name       | Type    | Description                                                      |
| ---------- | ------- | ---------------------------------------------------------------- |
| data       | Object  | A [roByteArray](doc:robytearray) containing the data to be sent. |
| startIndex | Integer | The index of the byte array from which to start sending data.    |
| length     | Integer | The amount of data to be sent to the socket.                     |

#### Return Value

The number of bytes sent.

### SendStr(data as String) as Integer

#### Description

Sends the whole string to the socket, if possible.

#### Parameters

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| data | String | A string containing the data to be sent. |

#### Return Value

The number of bytes sent.

### Receive(data as Object, startIndex as Integer, length as Integer) as Integer

#### Description

Reads data from the socket.

#### Parameters

| Name       | Type    | Description                                                        |
| ---------- | ------- | ------------------------------------------------------------------ |
| data       | Object  | A [roByteArray](doc:robytearray) containing the data to be stored. |
| startIndex | Integer | The index of the byte array from which to start reading data.      |
| length     | Integer | The amount of data to be read from the socket.                     |

#### Return Value

The number of bytes read.

### ReceiveStr(length as Integer) as String

Reads data from the socket and stores the result in a string.

#### Parameters

| Name   | Type    | Description                                    |
| ------ | ------- | ---------------------------------------------- |
| length | Integer | The amount of data to be read from the socket. |

#### Return Value

The received byte length string.  If no bytes are received, the string is empty.

### Close() as Void

Performs an orderly close of socket. After a close, most operations on the socket will return invalid.

On blocking sockets, this clears the receive buffer and blocks until the send buffer is emptied. Neither buffer may be read or written afterward.

On non-blocking sockets, both the send and the receive buffer may be read but not written.

### SetAddress(sockAddr as Object) as Boolean

#### Description

Sets the address using a BSD bind() call

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Return Type</th>
      <th>Parameters</th>
      <th>Return Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SetAddress</td>
      <td>Boolean</td>
      <td>
        <table>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>sockAddr</td>
            <td>Object</td>
            <td>An roSocketAddress.</td>
          </tr>
        </table>
      </td>

      <td>True/False</td>

      <td />
    </tr>
  </tbody>
</table>

<br />

#### Return Value

A flag indicating whether the address was successfully set.

### GetAddress() as Object

#### Description

Returns the roSocketAddress object bound to this socket.

#### Return Value

roSocketAddress Object.

### SetSendToAddress(sockAddr as Object) as Boolean

#### Description

Sets the remote address for next message to be sent.

#### Parameters

| Name     | Type   | Description         |
| -------- | ------ | ------------------- |
| sockAddr | Object | An roSocketAddress. |

#### Return Value

A flag indicating whether the address was successfully stored as the first half of underlying BSD sendto() call.

### GetSendToAddress() as Object

#### Description

Returns the roSocketAddress for the remote address of the next message to be sent. This method can also be used to return the remote address on newly accepted sockets.

#### Return Value

The roSocketAddress for the remote address of the next message to be sent.

### GetReceivedFromAddress() as Object

#### Description

Returns the roSocketAddress for the remote address of the last message received via the [receive()](#receivedata-as-object-startindex-as-integer-length-as-integer-as-integer) method. This method can also be used to return the remote address on newly accepted sockets.

#### Return Value

The roSocketAddress for the remote address of the last message received.

### GetCountRcvBuf() as Integer

#### Description

Returns the number of bytes in the receive buffer.

#### Return Value

Number of bytes.

### GetCountSendBuf() as Integer

#### Description

Returns the number of bytes in the send buffer.

#### Return Value

Number of bytes.

### Status() as Integer

#### Description

Indicates whether the last operation was successful.

#### Return Value

This method returns 0 if the last operation was successful or an error number if it failed.
