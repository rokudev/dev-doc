---
title: ifSocketStatus
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

### eAgain() as Boolean

#### Description

Checks whether an EAGAIN error has occurred.

#### Return Value

A flag indicating whether an EAGAIN error has occurred.

### eAlready() as Boolean

#### Description

Checks whether an EALREADY error has occurred.

#### Return Value

A flag indicating whether an EALREADY error has occurred.

### eBadAddr() as Boolean

#### Description

Checks whether an EBADADDR error has occurred.

#### Return Value

A flag indicating whether an EBADADDR error has occurred.

### eDestAddrReq() as Boolean

#### Description

Checks whether an EDESTADDRREQ error has occurred.

#### Return Value

A flag indicating whether an EDESTADDRREQ error has occurred.

### eHostUnreach() as Boolean

#### Description

Checks whether an EHOSTUNREACH error has occurred.

#### Return Value

A flag indicating whether an EHOSTUNREACH error has occurred.

### eInvalid() as Boolean

#### Description

Checks whether an EINVALID error has occurred.

#### Return Value

A flag indicating whether an EINVALID error has occurred.

### eInProgress() as Boolean

#### Description

Checks whether an EINPROGRESS error has occurred.

#### Return Value

A flag indicating whether an EINPROGRESS error has occurred.

### eWouldBlock() as Boolean

#### Description

Checks whether an EWOULDBLOCK error has occurred.

#### Return Value

A flag indicating whether an EWOULDBLOCK error has occurred.

### eSuccess() as Boolean

Checks whether there are no errors (the error number is 0).

### eOK() as Boolean

#### Description

Checks whether there is no hard error, but possibly one of the following async conditions: 

* EAGAIN
* EALREADY
* EINPROGRESS
* EWOULDBLOCK.

#### Return Value

A flag indicating whether an EOK error has occurred.
