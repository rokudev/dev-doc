---
title: "ifSocketAddress"
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

# ifSocketAddress

## Implemented by

| Name            | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [roSocketAddress](/docs/references/brightscript/components/rosocketaddress.md "roSocketAddress") | The roSocketAddress is used by the roStreamSocket and roDataGramSocket components for TCP and UDP traffic respectively |


## Supported methods

### SetAddress(address as String) as Boolean

#### Description

Sets the IPV4 address.

#### Parameters

| Name    | Type   | Description|
| ------- | ------ |------------|
| address | String |The string consists of a hostname, optionally followed by a colon and a decimal port number. The hostname may be either dotted quad (such as "192.168.1.120") or a DNS name (such as "roku.com"). If a name is given, a DNS lookup is performed to convert it to dotted quad. Use IsAddressValid() to determine the result of the DNS lookup. Example: "192.168.1.120:8888" or "roku.com".|

#### Return Value

A flag indicating whether the IPV4 address was successfully set.

### GetAddress() as String

Returns the IPV4 address in dotted quad format (for example, "192.168.1.120:8888").

#### Return Value

The IPV4 address.

### SetHostName(hostname as String) as Boolean

#### Description

Sets the hostname. The port number is unchanged.

#### Parameters

| Name     | Type   | Description              |
| -------- | ------ | ------------------------ |
| hostname | String | The hostname to be used. |

#### Return Value

A flag indicating whether the hostname was successfully set.

### GetHostName() as String

#### Description

Returns the hostname.

#### Return Value

The hostname.

### SetPort(port as Integer) as Boolean

> This function is deprecated and should not be used. Use the [setMessagePort()](/docs/references/brightscript/interfaces/ifsetmessageport.md#setmessageportport-as-object--as-void) function instead.

#### Description

Sets the port number. The hostname is unchanged.

#### Parameters

| Name | Type    | Description                 |
| ---- | ------- | --------------------------- |
| port | Integer | The port number to be used. |

#### Return Value

A flag indicating whether the port number was successfully set.

### GetPort() as Integer

#### Description

Returns the port number.

#### Return Value

The port number.

### IsAddressValid() as Boolean

#### Description

Checks whether the component contains a valid IP address.

#### Return Value

A flag indicating whether the component contains a valid IP address.