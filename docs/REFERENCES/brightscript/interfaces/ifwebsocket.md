---
title: "roWebSocket"
excerpt: 'Establish and manage secure WebSocket connections from BrightScript'
deprecated: false
hidden: false
metadata:
  title: 'roWebSocket | Roku Developer Docs'
  description: 'The roWebSocket BrightScript component establishes secure WebSocket connections and performs bi-directional communication using the ifWebSocket interface.'
  robots: index
next:
  description: ''
---

The **roWebSocket** component enables apps to establish WebSocket connections to remote WebSocket server URLs and perform bi-directional communication according to the [WebSocket protocol](https://datatracker.ietf.org/doc/html/rfc6455).

An instance of the **roWebSocket** component maintains an open connection unless the app closes it explicitly with the **Close()** method, the server closes it, or a transport or protocol error occurs. During an open connection, the **roWebSocket** object generates multiple asynchronous WebSocket events that are delivered as **roWebSocketEvent** objects via the object's message port. If the object is dereferenced and goes out of scope, it closes the WebSocket connection and stops delivering WebSocket events.

The opening handshake for WebSocket connections is done over HTTP. The **roWebSocket** interface therefore includes several methods ([ifHttpAgent](doc:ifhttpagent), [ifSetMessagePort](doc:ifsetmessageport), [ifGetMessagePort](doc:ifgetmessageport)) that set up the HTTP-related parameters of the handshake, similar to the **roUrlTransfer** interface.

To create a secure WebSocket connection, you may need to perform the actions described in the [**roUrlTransfer** documentation](doc:rourltransfer) for configuring HTTPS parameters.

An **roWebSocket** object is created with no parameters:

```
CreateObject("roWebSocket")
```

## Supported interfaces

- **ifWebSocket**. The core WebSocket methods (see [Supported methods](#supported-methods)).
- [ifHttpAgent](doc:ifhttpagent). Configures the HTTP part of the WebSocket handshake (see the [**roUrlTransfer** documentation](doc:rourltransfer) for more information).
- [ifSetMessagePort](doc:ifsetmessageport). Configures a message port for receiving asynchronous WebSocket events.
- [ifGetMessagePort](doc:ifgetmessageport). Gets the message port used to receive asynchronous WebSocket events.

## Supported methods

The **roWebSocket** component implements the following **ifWebSocket** methods.

### GetSocketId() as Int

#### Description

Returns a unique identifier for this WebSocket instance. The same value is reported by [**roWebSocketEvent.GetSocketId()**](doc:rowebsocketevent), which lets you match an event to the WebSocket that generated it.

#### Return Value

The WebSocket identifier.

### SetUrl(url as String) as Boolean

#### Description

Sets the WebSocket server URL to connect to (for example, `wss://example.com/socket`).

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| url | String | The WebSocket server URL. |

#### Return Value

A flag that indicates whether the URL was accepted.

### GetUrl() as String

#### Description

Returns the WebSocket server URL currently set.

#### Return Value

The WebSocket server URL.

### SetData(data as Dynamic) as Void

#### Description

Stores an arbitrary "socket data" object on the WebSocket instance. This object is delivered with each event via [**roWebSocketEvent.GetSocketData()**](doc:rowebsocketevent). The socket data can be any object type.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| data | Dynamic | The socket data to associate with this WebSocket. |

### GetData() as String

#### Description

Returns the socket data previously set with **SetData()**.

#### Return Value

The socket data.

### SetUserAndPassword(user as String, password as String) as Boolean

#### Description

Sets the credentials used for HTTP basic authentication during the opening handshake.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| user | String | The user name. |
| password | String | The password. |

#### Return Value

A flag that indicates whether the credentials were accepted.

### EnablePeerVerification(enable as Boolean) as Boolean

#### Description

Enables or disables verification of the server's TLS certificate chain (peer verification).

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| enable | Boolean | Set to **true** to verify the server's certificate chain. |

#### Return Value

A flag that indicates whether the setting was applied.

### EnableHostVerification(enable as Boolean) as Boolean

#### Description

Enables or disables verification that the server's TLS certificate matches the host name in the URL.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| enable | Boolean | Set to **true** to verify that the certificate matches the host name. |

#### Return Value

A flag that indicates whether the setting was applied.

### Open(wait_time = 0 as Int) as Boolean

#### Description

Initiates the WebSocket opening handshake. If **wait_time** is greater than 0, the call blocks for up to **wait_time** milliseconds for the connection to open. If **wait_time** is 0, the call returns immediately and connection completion is reported asynchronously through an Opened event.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| wait_time | Int | The maximum time to wait for the connection to open, in milliseconds. The default is 0 (do not block). |

#### Return Value

A flag that indicates whether the connection opened. <!-- TODO: Confirm the return value when wait_time is 0 (asynchronous) versus greater than 0 (synchronous). -->

### GetOpenInfo() as Object

#### Description

Returns an associative array with information about the open connection. This is the same information reported by the Opened event's [**GetInfo()**](doc:rowebsocketevent) (**Protocol**, **TargetIPAddr**, and **EffectiveUrl**).

#### Return Value

An associative array with the open-connection information.

### Close(code = 1000 as Int, reason = "" as String) as Void

#### Description

Closes the WebSocket connection, optionally sending a close code and reason to the server.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| code | Int | The WebSocket close status code to send. The default is 1000 (normal closure). |
| reason | String | An optional human-readable reason for closing. |

### SetProtocols(protocols as String) as Boolean

#### Description

Sets the list of WebSocket subprotocols to request during the opening handshake.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| protocols | String | A comma-separated list of subprotocol names. |

#### Return Value

A flag that indicates whether the subprotocols were accepted.

### GetSelectedProtocol() as String

#### Description

Returns the subprotocol that the server selected during the opening handshake.

#### Return Value

The selected subprotocol name.

### Send(data as Object, wait_time = 0 as Int) as Object

#### Description

Sends a message to the server. Pass a String to send a text message or an **roByteArray** to send a binary message. If **wait_time** is greater than 0, the call blocks for up to **wait_time** milliseconds while the message is queued for sending.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| data | Object | The message to send, as a String (text) or **roByteArray** (binary). |
| wait_time | Int | The maximum time to block while queuing the message, in milliseconds. The default is 0. |

#### Return Value

An object with the result of the send operation. <!-- TODO: Confirm the exact structure returned by Send(); not specified in the source. -->

### SendPing(data as Object, wait_time = 0 as Int) as Object

#### Description

Sends a WebSocket Ping control frame with an optional payload.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| data | Object | The optional Ping payload, as a String or **roByteArray**. |
| wait_time | Int | The maximum time to block while queuing the frame, in milliseconds. The default is 0. |

#### Return Value

An object with the result of the send operation.

### SendPong(data as Object, wait_time = 0 as Int) as Object

#### Description

Sends a WebSocket Pong control frame with an optional payload. Use this to reply to a received Ping when automatic Pong replies are disabled (see **SetAutoPingReply()**).

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| data | Object | The optional Pong payload, as a String or **roByteArray**. |
| wait_time | Int | The maximum time to block while queuing the frame, in milliseconds. The default is 0. |

#### Return Value

An object with the result of the send operation.

### GetBuffered() as Int

#### Description

Returns the number of bytes that have been queued for sending but not yet sent.

#### Return Value

The number of buffered bytes.

### PingTest(timeout = 0 as Int, text as String = "") as Boolean

#### Description

Sends a Ping frame and waits for the matching Pong reply from the server.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| timeout | Int | The maximum time to wait for the Pong reply, in milliseconds. The default is 0. |
| text | String | An optional payload to include in the Ping. |

#### Return Value

A flag that indicates whether a matching Pong reply was received.

### SetTimer(timer_id as String, timeout as Int, one_shot as Boolean = False) as Void

#### Description

Schedules a timer that fires a Timer event after the specified interval. The timer is identified in the event's [**GetInfo()**](doc:rowebsocketevent) by its **timer_id**.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| timer_id | String | An identifier for the timer, reported in the Timer event. |
| timeout | Int | The time until the timer fires, in milliseconds. |
| one_shot | Boolean | Set to **true** to fire once; set to **false** to fire repeatedly. The default is **false**. |

### SetAutoPingReply(auto_reply as Boolean) as Void

#### Description

Sets whether the WebSocket automatically replies to incoming Ping frames with a Pong.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| auto_reply | Boolean | Set to **true** to reply to Ping frames automatically. |

### GetAutoPingReply() as Int

#### Description

Returns whether automatic Pong replies to incoming Ping frames are enabled.

#### Return Value

A non-zero value if automatic Ping replies are enabled; otherwise 0.

### SetFragmentSize(size as Int) as Void

#### Description

Sets the maximum size of an outgoing message fragment. Messages larger than this size are split into multiple WebSocket fragments.

#### Parameter

| Name | Type | Description |
| :--- | :--- | :--- |
| size | Int | The maximum outgoing fragment size, in bytes. |

### GetFragmentSize() as Int

#### Description

Returns the current maximum outgoing fragment size, in bytes.

#### Return Value

The outgoing fragment size, in bytes.

### GetMsgSendBufferSize() as Int

#### Description

Returns the size of the send message buffer, in bytes.

#### Return Value

The send buffer size, in bytes.

### GetMsgRecvBufferSize() as Int

#### Description

Returns the size of the receive message buffer, in bytes.

#### Return Value

The receive buffer size, in bytes.

## Supported events

- [**roWebSocketEvent**](doc:rowebsocketevent). Delivers asynchronous WebSocket event notifications to your app.
