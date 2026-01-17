---
title: "ifSocketConnectionStatus"
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


## Implemented by

| Name           | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [roStreamSocket](/docs/references/brightscript/components/rostreamsocket.md "roStreamSocket") | The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them |

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