---
title: "ifSourceIdentity"
excerpt: 'Interface providing GetSourceIdentity() to retrieve the source or event object ID'
deprecated: false
hidden: false
metadata:
  title: 'ifSourceIdentity'
  description: 'Documents the ifSourceIdentity interface, which provides GetSourceIdentity() to return the ID associated with a source or event object.'
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