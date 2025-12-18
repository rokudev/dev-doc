---
title: Rochannelstoreevent
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

# roChannelStoreEvent

The roChannelStore sends an roChannelStoreEvent in response to a call to any of several Get* methods in [ifChannelStore](/docs/references/brightscript/interfaces/ifchannelstore.md "ifChannelStore"). The following predicates indicate its valid event types:

## Supported methods

### isRequestSucceeded() as Boolean

Checks whether the previous GET request has completed successfully.

#### GetSourceIdentity() as Integer

Returns a unique number that can be matched with the value returned by ifChannelStore.GetIdentity() to determine which roChannelStore object this event came from

#### GetResponse() as Object

Returns an roList of roAssociativeArray items for the previous GET method invocation. The format of each roAssociativeArray item depends on which GETmethod was invoked. See [ifChannelStore](/docs/references/brightscript/interfaces/ifchannelstore.md "ifChannelStore") for more details.

In the case of a successfully completed ifChannelStore.DoOrder() initiated purchase transaction, the object returned by GetResponse() is an associative array containing the following information:

| Name       | Description                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount     | Price of each purchased item                                                                                                                                     |
| code       | Product code. This corresponds to the product identifier that the developer assigns to the specific in-app purchase product                                      |
| purchaseID | Contains the unique transaction ID of the transaction. Apps often use this value to entitle users to purchased subscriptions, etc. in their back end systems |
| qty        | Quantity of the specific product purchased                                                                                                                       |
| total      | Total purchase amount (including taxes) in the local currency                                                                                                    |

### isRequestFailed() as Boolean

Checks whether the previous GET request has completed failed.

#### GetSourceIdentity() as Integer

Returns a unique number that can be matched with the value returned by ifChannelStore.GetIdentity() to determine which roChannelStore object this event came from.

#### GetStatus() as Integer

Checks for the reason for failure. This method returns one of the following codes that indicate the reason for failure:

| Integer code | Failure reason |
| ------------ | -------------- |
| 2            | Interrupted    |
| -1           | HTTP timeout   |
| -2           | Other timeouts |
| -3           | Unknown error  |
| -4           | Empty list     |

#### GetStatusMessage() as String

Describes the status of the completed request. This method returns a human-readable string describing the status of the completed request.

### isRequestInterrupted() as Boolean

Checks if the previous GET request did not complete. This method returns true if the request was not complete; otherwise, it returns false.

#### GetSourceIdentity() as Integer

Returns a unique number that can be matched with the value returned by ifChannelStore.GetIdentity() to determine which roChannelStore object this event came from.
