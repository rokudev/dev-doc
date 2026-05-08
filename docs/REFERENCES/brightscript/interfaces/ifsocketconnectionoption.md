---
title: "ifSocketConnectionOption"
excerpt: 'Interface for getting and setting TCP socket connection options'
deprecated: false
hidden: false
metadata:
  title: 'ifSocketConnectionOption'
  description: 'Documents the ifSocketConnectionOption interface, which provides methods to get and set TCP socket options including keep alive, linger, and no delay.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name           | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roStreamSocket](doc:rostreamsocket) | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

## Supported methods

### GetKeepAlive() as Boolean

#### Description

Checks whether keep alive is set. If keep alive is set, occasional no-data packets are sent to keep the connection alive. 

#### Return Value

A flag indicating whether keep alive is set. 

### SetKeepAlive(enable as Boolean) as Boolean

#### Description

Sends no-data packets to keep the connection alive. 

#### Parameters

| Name   | Type    | Description                                      |
| ------ | ------- | ------------------------------------------------ |
| enable | Boolean | A flag specifying whether keep alive is enabled. |

#### Return Value

A flag indicating whether keep alive was successfully set.

### GetLinger() as Integer

#### Description

Returns the max time in seconds that the socket close() blocks to allow send data to be flushed in synchronous mode.

#### Return Value

The max time in seconds.

### SetLinger(time as Integer) as Boolean

#### Description

Sets the max time in seconds that the socket close() blocks to allow send data to be flushed in synchronous mode. 

#### Parameters

| Name | Type    | Description   |
| ---- | ------- | ------------- |
| time | Integer | The max time. |

#### Return Value

A flag indicating whether the linger was successfully set.

### GetMaxSeg() as Integer

#### Description

Returns the max TCP segment size.

#### Return Value

The segment size.

### SetMaxSeg(time as Integer) as Boolean

#### Description

Sets the max TCP segment size. 

#### Parameters

| Name | Type    | Description               |
| ---- | ------- | ------------------------- |
| time | Integer | The max TCP segment size. |

#### Return Value

A flag indicating whether the max TCP segment size was successfully set.

### GetNoDelay() as Boolean

#### Description

Checks whether the no delay property is enabled on the socket. This means that data is sent as soon as it is available rather than once there is enough data to fill a segment.

#### Return Value

A flag indicating whether the no delay property is enabled. 

### SetNoDelay(enable as Boolean) as Boolean

#### Description

Enables the no delay property on the socket. This means that data is sent as soon as it is available rather than once there is enough data to fill a segment.

#### Parameters

| Name   | Type    | Description                                                 |
| ------ | ------- | ----------------------------------------------------------- |
| enable | Boolean | A flag specifying whether the no delay property is enabled. |

#### Return Value

A flag indicating whether the no delay property was successfully set. 