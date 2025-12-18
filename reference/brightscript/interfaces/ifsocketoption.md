---
title: Ifsocketoption
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

# ifSocketOption

## Implemented by

| Name             | Description                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roDataGramSocket](/docs/references/brightscript/components/rodatagramsocket.md "roDataGramSocket") | The roDataGramSocket component enables Brightscript apps to send and receive UDP packets                                               |
| [roStreamSocket](/docs/references/brightscript/components/rostreamsocket.md "roStreamSocket")   | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |


## Supported methods

### GetTTL() as Integer

#### Description

Returns the TTL (Time To Live) value for all IP packets on the socket.

#### Return Value

The TTL value.

### SetTTL(ttl as Integer) as Boolean

#### Description

Sets the TTL value for all IP packets on the socket. 

#### Parameters

| Name | Type    | Description                                            |
| ---- | ------- | ------------------------------------------------------ |
| ttl  | Integer | The TTL value to be used for IP packets on the socket. |

#### Return Value

A flag indicating whether the TTL was successfully set. 

### GetReuseAddr() as Boolean

#### Description

Checks whether an address that has been previously assigned can be immediately reassigned.

#### Return Value

A flag indicating whether the previously assigned address can be reassigned.

### SetReuseAddr(reuse as Boolean) as Dynamic

#### Description

Enables a previously assigned address to be immediately reassigned. 

#### Parameters

| Name  | Type    | Description                                          |
| ----- | ------- | ---------------------------------------------------- |
| Reuse | Boolean | A flag specifying whether the address can be reused. |

#### Return Value

A flag indicating whether the reuse address feature was successfully set. 

### GetOOBInline() as Boolean

#### Description

Checks whether Out Of Bounds (OOB) data is read inline with regular data.

#### Return Value

A flag indicating whether OOB data is read inline with regular data.

### SetOOBInline(inline as Boolean) as Boolean

#### Description

Enables Out Of Bounds (OOB) data to be read inline with regular data.

#### Parameters

| Name   | Type    | Description                                        |
| ------ | ------- | -------------------------------------------------- |
| inline | Boolean | A flag specifying whether OOB data is read inline. |

#### Return Value

A flag indicating whether the OOB inline data feature was successfully set. 

### GetSendBuf() as Integer

#### Description

Returns the current send buffer size.

#### Return Value

The buffer size.

### SetSendBuf(size as Integer) as Boolean

#### Description

Sets the current send buffer size. 

#### Parameters

| Name | Type    | Description                      |
| ---- | ------- | -------------------------------- |
| size | Integer | The send buffer size to be used. |

#### Description

A flag indicating whether the send buffer size was successfully set.

### GetRcvBuf() as Integer

#### Description

Returns the current receive buffer size.

#### Return Value

The buffer size.


### SetRcvBuf(size as Integer) as Boolean

#### Description

Sets the current receive buffer size. 

#### Parameters

| Name | Type    | Description                         |
| ---- | ------- | ----------------------------------- |
| size | Integer | The receive buffer size to be used. |

#### Description

A flag indicating whether the receive buffer size was successfully set.

### GetSendTimeout() as Integer

#### Description

Returns the current send timeout.

#### Return Value

The number of seconds for the send timeout.

### SetSendTimeout(timeout as Integer) as Boolean

#### Description

Sets the current send timeout (in seconds).

#### Parameters

| Name    | Type    | Description                                 |
| ------- | ------- | ------------------------------------------- |
| timeout | Integer | The number of seconds for the send timeout. |

#### Return Value

A flag indicating whether the send timeout was successfully set.

### GetReceiveTimeout() as Integer

#### Description

Returns the current receive timeout.

#### Return Value

The number of seconds for the receive timeout.


### SetReceiveTimeout(timeout as Integer) as Boolean

#### Description

Sets the current receive timeout (in seconds).

#### Parameters

| Name    | Type    | Description                                    |
| ------- | ------- | ---------------------------------------------- |
| timeout | Integer | The number of seconds for the receive timeout. |

#### Return Value

A flag indicating whether the receive timeout was successfully set.

