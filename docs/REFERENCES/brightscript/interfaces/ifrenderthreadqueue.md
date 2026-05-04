---
title: Ifrenderthreadqueue
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

## ifRenderThreadQueue

*Available since [Roku OS 15.0](doc:release-notes#roku-os-150)*

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roRenderThreadQueue](doc:rorenderthreadqueue) | The **roRenderThreadQueue** node queues messages to be consumed by handlers on the render thread. This enables asynchronous communication between Task nodes and the render thread. Messages passed using this mechanism will not block the render thread like a rendezvous. |

### AddMessageHandler(message_id as String, handler as String) as Object

#### Description

Registers a handler for messages received on the async message channel with the given message ID. The handler is called on the render thread for each message received.

You can register multiple handlers for a single ID. In this case, the handlers are called in the order they were registered.

This function can only be called on the render thread.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| message_id | String   | The ID of the message channel to which this handler should be registered. |
| handler    | String   | The name of the handler function to be called for each message received. |

#### Return Value

Returns an object that can be used to unregister the handler, if required.

> **Defining message handlers**
>
> Use the following syntax to define message handlers:
>
> ```
> sub MyMessagehandler(data, msgInfo)
> ```
>
> - **data** contains the value that was passed into the **PostMessage()** or **CopyMessage()** functions.
> - **msgInfo** contains the metadata about the message, including the message ID and creation time
>
> In general, handlers should be written to be as fast as possible to avoid dropping frames.

### PostMessage(message_id as String, data as Object) as Void

#### Description

Posts a message to the queue. The data is *moved* and becomes unavailable to the calling thread. The call returns immediately and does not block the calling thread.

This function may be called from any thread.

#### Parameters


<table>
<thead>
<tr>
<th><strong>Name</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>message_id</td>
<td>String</td>
<td>The ID of the app to which this message should be posted.</td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>The contents of the message to be passed to any registered handlers. This must be recursively copyable. Non-copyable objects are ignored silently.<br />Copyable objects include:<ul><li>roAssociativeArray</li><li>roArray</li><li>integer, long integer</li><li>string</li><li>bool</li><li>float, double</li><li>invalid</li><li>roSGNode</li></ul></td>
</tr>
</tbody>
</table>



### CopyMessage(message_id as String, data as Object) as Void

#### Description

Posts a message to the queue. The call returns immediately and does not block the calling thread.

This function is similar to the **PostMessage()** function, but it copies data instead of moving it.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| message_id | String   | The ID of the channel to which this message should be posted. |
| data       | Object   | Contents of the message that will be passed to any registered handlers. |

### NumCopies() as Integer

#### Description

Returns the total number of objects for the channel that were copied by the **PostMessage()** function instead of being moved.

### Return Value

An integer indicating the total number of objects that were copied by the **PostMessage()** function
