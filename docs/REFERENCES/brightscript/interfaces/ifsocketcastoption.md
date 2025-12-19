---
title: Ifsocketcastoption
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

# ifSocketCastOption

## Implemented by

| Name             | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| [roDataGramSocket](/docs/references/brightscript/components/rodatagramsocket.md "roDataGramSocket") | The roDataGramSocket component enables Brightscript apps to send and receive UDP packets |

## Supported methods

Only the [roDataGramSocket](/docs/references/brightscript/components/rodatagramsocket.md "roDataGramSocket") component supports the ifSocketCastOption multicast interface. The [roStreamSocket](/docs/references/brightscript/components/rostreamsocket.md "roStreamSocket") component does not support multicast.

### GetBroadcast() as Boolean

#### Description

Checks whether broadcast messages may be sent or received.

#### Return Value

A flag indicating whether broadcast messages may be sent or received.

### SetBroadcast(enable as Boolean) as Boolean

#### Description

Enables broadcast messages to be sent or received. 

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether broadcast messages may be sent or received. |

#### Return Value

A flag indicating whether this operation succeeded.

### JoinGroup(ipAddress as Object) as Boolean

#### Description

Joins a specific multicast group.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| ipAddress | Object | An [roSocketAddress](/docs/references/brightscript/components/rostreamsocket.md "roSocketAddress") representing the group to be joined. IPV4 multicast addresses are in the range of 224.0.0.0 through 239.255.255.255. |

#### Return Value

A flag indicating whether this operation was successful.

### DropGroup(ipAddress as Object) as Boolean

#### Description

Drops out of a specific multicast group.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| ipAddress | Object | An [roSocketAddress](/docs/references/brightscript/components/rostreamsocket.md "roSocketAddress") representing the group to leave. IPV4 multicast addresses are in the range of 224.0.0.0 through 239.255.255.255. |

#### Return Value

A flag indicating whether this operation was successful.

### GetMulticastLoop() as Boolean

#### Description

Checks whether multicast messages are enabled for local loopback.

#### Return Value

A flag indicating whether multicast messages are enabled for local loopback. If this flag is true, multicast message sent locally are to be received locally.

### SetMulticastLoop(enable as Boolean) as Boolean

#### Description

Enables local loopback of multicast messages.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether local loopback of multicast messages; otherwise do not send or receive broadcast messages. |

#### Return Value

A flag indicating whether this operation was successful.

### GetMulticastTTL() as Integer

#### Description

Returns the TTL integer value for multicast messages. This is the number of hops a packet is allowed before a router drops the packet.

#### Return Value

The multicast messages value.

### SetMulticastTTL(ttl as Integer) as Boolean

#### Description

Sets the TTL integer value for multicast messages. 

#### Parameters

| Name | Type    | Description                                                  |
| ---- | ------- | ------------------------------------------------------------ |
| ttl  | Integer | The number of hops a packet is allowed before a router drops the packet |

#### Return Value

A flag indicating whether the TTL value was successfully set.