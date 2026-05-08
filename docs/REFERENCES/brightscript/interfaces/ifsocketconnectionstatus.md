---
title: "ifSocketConnectionStatus"
excerpt: 'Interface for checking socket connection error states on roStreamSocket'
deprecated: false
hidden: false
metadata:
  title: 'ifSocketConnectionStatus'
  description: 'Documents the ifSocketConnectionStatus interface, which provides methods to check socket connection errors including ECONNABORTED, ECONNRESET, and EISCONN.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name           | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roStreamSocket](doc:rostreamsocket) | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

## Supported methods

### eConnAborted() as Boolean

#### Description

Checks whether a connection aborted error (ECONNABORTED) has occurred. 

#### Return Value

A flag indicating whether an ECONNABORTED error has occurred. 

### eConnRefused() as Boolean

#### Description

Checks whether a connection refused (ECONNREFUSED) has occurred. 

#### Return Value

A flag indicating whether an ECONNREFUSED error has occurred. 

### eConnReset() as Boolean

#### Description

Checks whether a connection reset error (ECONNRESET) has occurred. 

#### Return Value

A flag indicating whether an ECONNRESET error has occurred. 

### eIsConn() as Boolean

#### Description

Checks whether an is connected error (EISCONN) has occurred. 

#### Return Value

A flag indicating whether an EISCONN error has occurred. 

### eNotConn() as Boolean

#### Description

Checks whether a not connected error (ENOTCONN) has occurred. 

#### Return Value

A flag indicating whether an ENOTCONN error has occurred. 