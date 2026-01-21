---
title: "roSocketEvent"
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



An roStreamSocket or roDataGramSocket object sends the roSocketEvent to indicate a change in the status of the socket. The socket must enable specific event notifications via the notify methods of ifSocketAsync.

## Supported methods

### GetSocketID() as Integer

Returns the ID of the socket this event is for. The ID of a socket can be obtained from ifSocketAsync.GetID(). Use [ifSocketStatus](doc:ifsocketstatus) or [ifSocketConnectionStatus](doc:ifsocketconnectionstatus) on the indicated socket to query the new status for the socket.



