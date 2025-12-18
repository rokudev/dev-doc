---
title: Ifsourceidentity
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

# ifSourceIdentity

## Implemented by

| Name                | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [roChannelStoreEvent](/docs/references/brightscript/events/rochannelstoreevent.md "roChannelStoreEvent") | The roChannelStore sends an roChannelStoreEvent in response to a call to any of several Get* methods in ifChannelStore |
| [roUrlEvent](/docs/references/brightscript/events/rourlevent.md "roUrlEvent")      | The roUrlTransfer component sends the roUrlEvent                                                                       |

## Supported methods

### GetSourceIdentity() as Integer

#### Description

Returns the ID currently associated with this source (event generating) or event object

#### Return Value

The ID value of the source or event object.