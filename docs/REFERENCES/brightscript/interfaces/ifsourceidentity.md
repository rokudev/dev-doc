---
title: "ifSourceIdentity"
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

| Name                | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [roChannelStoreEvent](doc:rochannelstoreevent) | The roChannelStore sends an roChannelStoreEvent in response to a call to any of several Get* methods in ifChannelStore |
| [roUrlEvent](doc:rourlevent)      | The roUrlTransfer component sends the roUrlEvent                                                                       |

## Supported methods

### GetSourceIdentity() as Integer

#### Description

Returns the ID currently associated with this source (event generating) or event object

#### Return Value

The ID value of the source or event object.