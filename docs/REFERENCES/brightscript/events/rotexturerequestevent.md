---
title: "roTextureRequestEvent"
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


The [roTextureManager](/docs/references/brightscript/components/rotexturemanager.md "roTextureManager") sends the roTextureRequestEvent after completing a request.

## Supported methods

### GetId() as Integer

Returns the unique id of the request.

### GetState() as Integer

Returns the state of the request. See [ifTextureRequest](/docs/references/brightscript/interfaces/iftexturerequest.md "ifTextureRequest").GetState() for the list of states.

### GetURI() as String

Returns the URI of the request.

### GetBitmap() as Object

Returns an roBitmap from the request if the state is ready.