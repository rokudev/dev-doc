---
title: Data Transfer Apis
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

# Optimized data transfer and reference handling

Roku OS 15.0 includes new APIs for populating node fields by *moving* rather than *copying* associative arrays. These new APIs overcome the traditional performance issues posed by setting or getting the large associative array fields of nodes. On the render thread, data can now be efficiently accessed by *reference* rather than copying. In addition, rendezvous blocking in task node threads can now be avoided by passing messages asynchronously to the queue of the render thread.

The following list breaks down these new data transfer and reference handling APIs introduced in Roku OS 15.0:

- **Moving data**
  - roSGNode.MoveIntoField(field_name as String, data as Object) as Integer
  - roSGNode.MoveFromField(field_name as String) as Object
- **Referencing data**
  - roSGNode.SetRef(field_name as String, data as Object)
  - roSGNode.CanGetRef(field_name as String) as Boolean
  - roSGNode.GetRef(field_name as String) as Object
- **Using data utilities**
  - roUtils.DeepCopy(data as Object) as Object
  - roUtils.IsSameObject(data1 as Object, data2 as Object) as Boolean
- **Queueing data**
  - message handlers
  - roRenderThreadQueue.AddMessageHandler(message_id as String, handler as String) as Object
  - roRenderThreadQueue.PostMessage(message_id as String, data as Object)
  - roRenderThreadQueue.CopyMessage(message_id as String, data as Object)
  - roRenderThreadQueue.NumCopies() as Integer

## Moving data

### roSGNode.MoveIntoField(field_name as String, data as Object) as Integer

#### Description

Moves an object into an **roSGNode** field, which must be an associative array. If the destinaton field is not an associative array, the call fails. When the move succeeds, the source object is empty after the call. This function may be called from any thread.

If the source object has any nested objects with external references, those nested objects are copied instead of moved.

> If this function is called on a task node thread for an object that is not owned by the task thread, a rendezvous occurs.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| field_name | String   | The target field (an associativeArray) of the node where you want to move the source object. |
| data       | Object   | The source object to be moved.                               |

#### Return Value

The number of nested objects within an object that were copied, rather than moved, because of external references.

#### Example

```
' Can be on Task thread or render thread
  n = CreateObject("roSGNode", "Node")
  n.AddField("aa_field", "assocarray", true)
  my_aa = { key: "value" }
  n.MoveIntoField("aa_field", my_aa)
  ? n.aa_field
  ? my_aa
```

This code will output the following on the port 8085 console:

```
<Component: roAssociativeArray> =
{
    key: "value"
}
<Component: roAssociativeArray> =
{
}
```

#### Performance improvement

Using the **MoveIntoField()** and **MoveFromField()** functions is significantly faster than standard field copy operations (`node.field = value`, `Update`, `AddFields`, and so on). This is because the data is *moved* and no copies are used (unless external references are present).

### roSGNode.MoveFromField(field_name as String) as Object

Moves data *out* of a field. The field must be of type *assocarray*. 

Moves an object out of an **roSGNode** field (an associative array). If the source field is not an associative array, the call fails. When the move succeeds, the source field is empty after the call. This function may be called from any thread.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| field_name | String   | The source field that contains the associative array to be moved. |

#### Return Value

The associative array that was moved from the source field.

#### Example

```
n = CreateObject("roSGNode", "ContentNode")
n.AddField("aa_field", "assocarray", true)
n.aa_field = { key: "value"}' or use moveIntoField()
my_aa = n.MoveFromField("aa_field") 
? n.aa_field ' invalid
? my_aa ' contents of aa_field
```

> **Moving data - when it copies instead** 
>
> The *move* operations (`PostMessage` and `MoveIntoField`) remove the contents from the source object and move them across to the destination. This clears out the source object. For example:
>
> ```
> aa = {foo: "hello", bar: [1, 2, 3]}
> node.moveIntoField("myfield", aa)
> ? aa           ' Prints an empty AA
> ```
>
> However, if nested objects within the source object contain external references, those nested objects are not moved, and they are preserved by copying them instead.
>
> The following example is the same as the above, except a nested object contains an external reference. As a result, the nested object is **copied** to the destination rather than being moved.
>
> ```
>sub_array = [1, 2, 3]
> aa = {foo: "hello", bar: sub_array}
> ' At this point, there is an external reference into aa
> node.moveIntoField("myfield", aa)
> ? aa           ' Prints an empty AA
> ? sub_array    ' Prints [1,2,3] - this was preserved
> ```

## Accessing fields by reference

You can access fields by reference instead of copying their values. This is significantly faster than copying; however, you can only do this on the render thread for fields with an associative array type. Access by reference cannot be used when queuing fields, and you must explicity set references before getting them. 

> **Function references**
>
> You can store a function reference in a field and then access it by reference. The function reference can then be passed to other components. As a result of a SceneGraph component namespacing, however, the function that is called is not the one that was referenced in the original component.
> 
> The behavior of passing function references in this manner may change in a future release; therefore, developers should not build any dependencies on it.

### roSGNode.SetRef(field_name as String, data as Object)

#### Description

Assigns an associative array to the field of a **roSGNode** via reference. This avoids the expense of copying when directly assigning a field to the value.  

This function may only be called on the render thread. 

Field observers are not notified when this function is called.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| field_name | String   | The name of the node's field to be assigned the associative array. |
| data       | Object   | The associative array to be referenced by the field.         |

#### Return Value

This function returns true if successful; otherwise it return false, indicating that the reference could not be set.

### roSGNode.CanGetRef(field_name as String) as Boolean

#### Description

Indicates whether the **GetRef()** function will succeed in the current context. The **GetRef()** call will only succeed if is called on the render thread and the **SetRef()** function had previoulsy been called on the **field_name**. 

The specified **field_name** must be an associative array, and it must have previously been given a value via **SetRef()**.

The **CanGetRef()** function may only be called on the render thread. This function cannot be used if [queueFields](/docs/references/brightscript/interfaces/ifsgnodefield.md#queuefieldsqueuenode-as-boolean-as-boolean) has been enabled.

#### Return Value

This function returns true if the call to the **GetRef()** function will succeed in the current context.

### roSGNode.GetRef(field_name as String) as Object

#### Description

Returns a reference to the value of an **roSGNode** field, which must be an associative array.  If the field is not an associative array, the call fails. The specified field must have previously been given a value via **SetRef()**.

The **GetRef()** function may only be called on the render thread. This function cannot be used if [queueFields](/docs/references/brightscript/interfaces/ifsgnodefield.md#queuefieldsqueuenode-as-boolean-as-boolean) has been enabled.

#### Parameters

| **Name**   | **Type** | **Description**                                |
| :--------- | :------- | :--------------------------------------------- |
| field_name | String   | The name of the node's field to be referenced. |

#### Return Value

This function returns a reference to the field’s value. This function returns  `<invalid>` if accessing the field via reference is not valid. 

#### Example

```
' on render thread:
    n = CreateObject("roSGNode", "Node")
    n.AddField("aa_field", "assocarray", true)
    my_aa = { key: "value" }
    n.setRef("aa_field", my_aa)
    ? n.aa_field
    ? my_aa
    ? n.GetRef("aa_field")

```

This code will output the following on the port 8085 console:

```
<Component: roAssociativeArray> =
{
    key: "value"
}
<Component: roAssociativeArray> =
{
    key: "value"
}
<Component: roAssociativeArray> =
{
    key: "value"
}

```

## Using utilities to copy data

The **roUtils** component provides a unique namespace for a library of global functions, including the **DeepCopy()** function for copying objects and their nested objects and the **isSameObject()** function for checking whether two BrightScript objects refer to the same instance.

### roUtils.DeepCopy(data as Object) as Object

#### Description

Performs a deep copy of the source node object (it copies the obejct and all of its nested objects). If the source object contains items that are not copyable, they are skipped.

#### Parameters

| **Name** | **Type** | **Description**         |
| :------- | :------- | :---------------------- |
| data     | Object   | The object to be copied |

#### Return Value

This function returns a copy of the specified object.

#### Example

```
utils = CreateObject("roUtils")
    di = CreateObject("roDeviceInfo")
    aa = { a: 1, b: { b1: 42 }, c: di }
    new_aa = utils.DeepCopy(aa)
    ? "IsSameObject", utils.IsSameObject(aa, new_aa)
    ? "new_aa.a", new_aa.a
    ? "new_aa.b", new_aa.b
    ? "new_aa.c", new_aa.c ' invalid, roDeviceInfo is not copyable
```

This code will output the following on the port 8085 console:

```
IsSameObject    false
new_aa.a         1
new_aa.b        <Component: roAssociativeArray> =
{
    b1: 42
}
new_aa.c        invalid
```

### roUtils.IsSameObject(data1 as Object, data2 as Object) as Boolean

#### Description

Checks whether two BrightScript objects refer to the same instance and returns a flag indicating the result. 

#### Parameters

| **Name** | **Type** | **Description** |
| :------- | :------- | :-------------- |
| data1    | Object   | First object    |
| data2    | Object   | Second object   |

#### Return Value

Returns true if **data1** and **data2** reference the same object; otherwise, this returns false. 

#### Example

```
shared = {}
    aa = {"a": shared, "b": shared}
    utils = CreateObject("roUtils")
    utils.isSameObject(aa, aa)   ' returns true
    utils.isSameObject(aa, {})   ' returns false
    utils.isSameObject(aa.a, aa.b)  ' returns true
```

## Queueing messages

Roku OS 15.0 provides a new **roRenderThreadQueue** node for queuing messages to be consumed by handlers on the render thread. This enables asynchronous communication between Task nodes and the render thread. Messages passed using this mechanism will not block the render thread like a rendezvous.

### Message Handlers

Use the following syntax to define message handlers:

```
sub MyMessagehandler(data, msgInfo)
```

- **data** contains the value that was passed into the **PostMessage()** or **CopyMessage()** functions. 
- **msgInfo** contains the metadata about the message, including the message ID and creation time

In general, handlers should be written to be as fast as possible to avoid dropping frames.

### roRenderThreadQueue.AddMessageHandler(message_id as String, handler as String) as Object

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

### roRenderThreadQueue.PostMessage(message_id as String, data as Object) as Void

#### Description

Posts a message to the queue. The data is *moved* and becomes unavailable to the calling thread. The call returns immediately and does not block the calling thread.

This function may be called from any thread.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| message_id | String   | The ID of the channel to which this message should be posted. |
| data       | Object   | The contents of the message to be passed to any registered handlers. This must be recursively copyable. Non-copyable objects are ignored silently.<br />Copyable objects include:${copyable-objects-list} |

{#copyable-objects-list}

- roAssociativeArray
- roArray
- integer, long integer
- string
- bool
- float, double
- invalid
- roSGNode

### roRenderThreadQueue.CopyMessage(message_id as String, data as Object) as Void

#### Description

Posts a message to the queue. The call returns immediately and does not block the calling thread.

This function is similar to the **PostMessage()** function, but it copies data instead of moving it.

#### Parameters

| **Name**   | **Type** | **Description**                                              |
| :--------- | :------- | :----------------------------------------------------------- |
| message_id | String   | The ID of the channel to which this message should be posted. |
| data       | Object   | Contents of the message that will be passed to any registered handlers. |

### roRenderThreadQueue.NumCopies() as Integer

#### Description

Returns the total number of objects for the channel that were copied by the **PostMessage()** function instead of being moved.