---
title: "ifMessagePort"
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

| Name          | Description                               |
| ------------- | ----------------------------------------- |
| [roMessagePort](doc:romessageport) | A Message Port is the place messages (events) are sent |


## Supported methods

### WaitMessage(timeout as Integer) as Dynamic

#### Description

Waits until an event object is available or timeout milliseconds have passed.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>Integer</td>
<td>The number of milliseconds to wait for a message. If this parameter is set to 0, this method waits indefinitely for a message, with no timeout.<br /><br />The native <a href="/docs/references/brightscript/language/global-utility-functions.md#waittimeout-as-integer-port-as-object-as-object">wait()</a> function can also be used to get the event object which WaitMessage() would return.  This means that the following two statements have the same effect:<br /><pre><code>~~~<br />msg = port.WaitMessage(timeout)<br />msg = wait(timeout, port)<br />~~~</code></pre></td>
</tr>
</tbody>
</table>




#### Return Value

 If an event is available, it is returned. If the timeout expires, invalid is returned. 

### GetMessage() as Dynamic

#### Description

If an event object is available, it is returned.  Otherwise invalid is returned.  The method returns immediately in either case and does not wait.

#### Return Value

An event object.

### PeekMessage() as Dynamic

#### Description

This method is similar to the [GetMessage()](#getmessage-as-dynamic) method, but the returned object (if not invalid) remains in the message queue.  A later call to [WaitMessage()](#waitmessagetimeout-as-integer-as-dynamic), [GetMessage()](#getmessage-as-dynamic) or PeekMessage() will return the same message.

#### Return Value

An event object.