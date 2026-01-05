---
title: "ifSGNodeField"
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

# ifSGNodeField

The ifSGNodeField interface allows querying, getting, setting, and performing other similar manipulation operations on Scene Graph node fields. This interface also allows you to set and unset event observers on a subject node field.

## Implemented by

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| [roSGNode](/docs/references/brightscript/components/rosgnode.md "roSGNode") | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |


## Supported methods

### hasField(fieldName as String) as Boolean

#### Description

Checks whether a field exists in the node.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| fieldName | String | The name of the field to be checked for whether it exists in the node. |

#### Return Value

A flag indicating whether the subject node has a field whose name exactly matches fieldName, or whose fully lowercase analog is identical to that of fieldName.

### getFieldType(fieldName as String) as String

#### Description

Returns the type of a specific field of the subject node.

#### Parameters

| Name      | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| fieldName | String | The name of the field to have its type retrieved. |

#### Return Value

The field type.

### getFieldTypes() as Object

#### Description

Returns the names and types of all the fields in the node.

#### Return Value

An roAssociativeArray containing key-value pairs with the element names and types.

| Name          | Return Type | Return Value       | Description                                                  |
| ------------- | ----------- | ------------------ | ------------------------------------------------------------ |
| getFieldTypes | Object      | roAssociatve Array | Returns an roAssociativeArray for the subject node containing key-value pairs with the field names and field types, respectively. |

### getField(fieldName as String) as Object

#### Description

Returns the appropriately-typed value from the specified field of the subject node.

You can also use the node.field syntax to get the same result as getField(). Specifically, `rectpos = rect.getField("translation")` is equivalent to `rectpos = rect.translation`. You can also use the syntax node[fieldName].

#### Parameters

| Name      | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| fieldName | String | The name of the field to be retrieved. |

#### Return Value

A typed value.

### getFields() as Object

#### Description

Returns the names and values of all the fields in the node.

#### Return Value

An roAssociativeArray containing key-value pairs with the element names and values.

### setField(fieldName as String, value as Object) as Boolean

#### Description

Sets the value of a subject node field. This will fail and stop script execution if the value is not of the appropriate type.

You can also use the node.field syntax to get the same result as setField(). Specifically, rect.setField("opacity", 0.5) is equivalent to rect.opacity = 0.5.

#### Parameters

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| fieldName | String | The name of the field to be updated. |
| value     | Object | The updated value for the field.     |

#### Return Value

A flag indicating whether the field was successfully updated.

*Since Roku OS 9.3*, `observeField()` and `observeFieldScoped()` methods include an optional `infoFields` parameter, which is an array of field names.  Generally, these should be relevant fields in the same object being observed, which are necessary to give context to the field that triggered the field change event. The triggered event object itself will provide a `getInfo()` method, which returns an AA that contains the names and instantaneous values of the requested "context" fields at the point when the observed field changed. For example, use of `videoNode.observeField("position", m.port, ["clipId", "programId"])` to set up an observer for `position` would later allow the call `extraInfo = msg.GetInfo()` to retrieve requested "context" information, given that `msg` is the relevant roSGNodeEvent indicating that `position` has changed. The contents of `extraInfo` would resemble `{"clipid": 1, "programid": 0}`.

### setFields(fields as Object) as Boolean

#### Description

Sets the values for one or more fields.

> This function does not set the fields according to their index position within an associative array. Do not use it if setting fields in a specific order is critical to your app.

#### Parameters

| Name   | Type   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ |
| fields | Object | An roAssociativeArray containing key-value pairs for the fields to be updated. |

#### Return Value

A flag indicating whether the fields have been successfully updated.

### addField(fieldName as String, type as String, alwayNotify as Boolean) as Boolean

#### Description

Adds a field with the specified name and type to the subject node. The added field is initialized to the default value for the type.

#### Parameters

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| fieldName   | String  | The name of the field to be added.                           |
| type        | String  | The type of the field to be added.<br/><br/>Type declarations must be lowercase or the field will not be added to the node. For example, declaring "Boolean" as the type will prevent the field from being added. |
| alwayNotify | Boolean | Specifies whether observers of the field are triggered when the field value is updated to the same or new value (true), or only when the field changes to a new value (false). |

#### Return Value

A flag indicating whether the field have been successfully added.

### addFields(fields as Object) as Boolean

#### Description

Adds the field(s) and corresponding field value(s) defined as key-value pair(s) in the associative array fields to the subject node. The types of the added fields are determined by the values which correspond to the allowable types for an `<interface>` field.

#### Parameters

| Name   | Type   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ |
| fields | Object | An roAssociativeArray containing key-value pairs for the fields to be added. |

#### Return Value

A flag indicating whether the fields have been successfully added.

### removeField(fieldName as String) as Boolean

#### Description

Removes a field from the subject node. Fields defined in [content metadata](/docs/developer-program/getting-started/architecture/content-metadata.md " Content Meta-Data") and the related SceneGraph node class metadata bindings can be removed, but will be dynamically re-added at any time they are explicitly accessed.

#### Parameters

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| fieldName | String | The name of the field to be removed. |

#### Return Value

A flag indicating whether the field has been successfully removed.

### observeField(fieldName as String, functionName as String [, infoFields as Object]) as Boolean

#### Description

Calls a function when a field of the subject node changes. The function called must be in the scope of the current component.

Optionally, this form can pass an [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message to the callback function by specifying the message object as an argument to the callback function. The following sample demonstrates how to do this:

```
sub callback_function(message as Object)
  ...
end sub
```

From this message in the callback function, you can get the node ID, the field name, and the field value at the time it was set, using the same [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") methods described in the overloaded form observeField(fieldName as String, port as Object). The [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message also includes a pointer to the node that can be accessed using getRoSGNode(), to associate nodes without an ID in the callback function. Additional information can be accessed in the callback function by storing the information in a custom field of the node.

#### Parameters

| Name         | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| fieldName    | String | The name of the field to be monitored.                       |
| functionName | String | The name of the method to be executed when the value of the field   changes. |
| infoFields | Object (String array) | Optional. Names of "context" field values to be reported via getInfo() when the monitored field changes. |

#### Return Value

A flag indicating whether this operation was successful.

### observeField(fieldName as String, port as Object [, infoFields as Object]) as Boolean

#### Description

This overloaded form sends an [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message to the [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") identified by port when the subject node field identified by fieldName changes value.

- Running GetNode() on the message retrieves the ID of the node that changed.
- Running GetField() on the message gets the name of the field that changed.
- Running GetData() on the message gets the new field value at the time of the change.

This allows other threads to react to field changes, and avoids missing a value when the field changes twice before the message handler is able to receive the [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") messages.

#### Parameters

| Name      | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| fieldName | String | The name of the field to be monitored.                       |
| port      | Object | The [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") to receive a [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message when the value of the field changes. |
| infoFields | Object (String array) | Optional. Names of "context" field values to be reported via getInfo() when the monitored field changes. |

#### Return Value

A flag indicating whether this operation was successful.

### unobserveField(fieldName as String) as Boolean

#### Description

Removes the previously established connections between the subject node field identified by fieldName and any callback functions or message ports.

#### Parameters

| Name      | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| fieldName | String | The name of the field to no longer be monitored. |

#### Return Value

A flag indicating whether this operation was successful.

### observeFieldScoped(fieldName as String, functionName as String[, infoFields as Object]) as Boolean

#### Description

Sets up a connection between the observed node's field and the current component from which this call is made. This method is similar to the [observeField()](/docs/references/brightscript/interfaces/ifsgnodefield.md#observefieldfieldname-as-string-functionname-as-string-as-boolean "observeField(fieldName as String, functionName as String)") method.

While the connection exists, any change in the called/observed node's field specified by **fieldName** results in calling the function specified by functionName in the observing component.

The callback will be on the thread that owns the observed node. This is usually the render thread except in some narrowly defined scenarios. See [SceneGraph Threads](/docs/developer-program/core-concepts/threads.md "SceneGraph Threads") for further details.

#### Parameters

| Name         | Type                  | Description                                                  |
| ------------ | --------------------- | ------------------------------------------------------------ |
| fieldName    | String                | The name of the field to be monitored.                       |
| functionName | String                | The name of the method to be executed when the value of the field   changes. |
| infoFields   | Object (String array) | Optional. Names of "context" field values to be reported via getInfo() when the monitored field changes. |

#### Return Value

A flag indicating whether this operation was successful.

### observeFieldScoped(fieldName as String, port as Object[, infoFields as Object]) as Boolean

> This function is deprecated. Use the [ObserveFieldScopedEx()](#observefieldscopedexfieldname-as-string-port-as-object-infofields-as-object-as-boolean) function for improved memory usage as it correctly monitors the observing component.

#### Description

Sets up a connection between the observed node's field and the current component from which this call is made. This method is similar to the [observeField()](/docs/references/brightscript/interfaces/ifsgnodefield.md#observefieldfieldname-as-string-functionname-as-string-as-boolean "observeField(fieldName as String, functionName as String)") method.

While the connection exists, any change in the called/observed node's field specified by fieldName results in a message being sent to the [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") specified by port.

The message will be received on the thread that owns the port. This is either a task thread or the main BrightScript thread. See [SceneGraph Threads](/docs/developer-program/core-concepts/threads.md "SceneGraph Threads") for further details.

#### Parameters

| Name       | Type                  | Description                                                  |
| ---------- | --------------------- | ------------------------------------------------------------ |
| fieldName  | String                | The name of the field to be monitored.                       |
| port       | Object                | The [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") to receive a [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message when the value of the field changes. |
| infoFields | Object (String array) | Optional. Names of "context" field values to be reported via getInfo() when the monitored field changes. |

#### Return Value

A flag indicating whether this operation was successful.

### observeFieldScopedEx(fieldName as String, port as Object[, infoFields as Object]) as Boolean

*Available since Roku OS 12.0*

#### Description

Sets up a connection between the observed node's field and the current component from which this call is made. This method is similar to the [observeField()](/docs/references/brightscript/interfaces/ifsgnodefield.md#observefieldfieldname-as-string-functionname-as-string-as-boolean "observeField(fieldName as String, functionName as String)") method.

While the connection exists, any change in the called/observed node's field specified by fieldName results in a message being sent to the [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") specified by port.

The message will be received on the thread that owns the port. This is either a task thread or the main BrightScript thread. See [SceneGraph Threads](/docs/developer-program/core-concepts/threads.md "SceneGraph Threads") for further details.

#### Parameters

| Name       | Type                  | Description                                                  |
| ---------- | --------------------- | ------------------------------------------------------------ |
| fieldName  | String                | The name of the field to be monitored.                       |
| port       | Object                | The [roMessagePort](/docs/references/brightscript/components/romessageport.md "roMessagePort") to receive a [roSGNodeEvent](/docs/references/brightscript/components/rosgnode.md "roSGNodeEvent") message when the value of the field changes. |
| infoFields | Object (String array) | Optional. Names of "context" field values to be reported via getInfo() when the monitored field changes. |

#### Return Value

A flag indicating whether this operation was successful.

### unobserveFieldScoped(fieldName as String) as Boolean

#### Description

Removes the connection between the observing component and the observed node's field.

This is similar to the [unobserveField()](/docs/references/brightscript/interfaces/ifsgnodefield.md#unobservefieldfieldname-as-string-as-boolean "unobserveField(fieldName as String)") method, which undoes both forms of observeField() and thus undoes both forms of observeFieldScoped().

This method looks for and removes the implicit connection state stored in the observing object so that the calling component will no longer receive notification of changes in the specified node's field. Connections in other observing objects or even in the observed object are not affected

#### Parameters

| Name      | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| fieldName | String | The name of the field to no longer be monitored. |

#### Return Value

A flag indicating whether this operation was successful.

### queueFields(queueNode as Boolean) as Boolean

#### Description

Makes subsequent operations on the node fields to queue on the node itself rather than on the [Scene](/docs/references/scenegraph/scene.md "Scene") node render thread. This prevents the operations from being executed immediately.

Subsequently setting this method to false will then cause all of the operations to be transferred to the [Scene](/docs/references/scenegraph/scene.md "Scene") node render thread queue to be immediately executed in a single render cycle. This can be helpful when multiple fields of a node that affect the appearance of the user interface need to be changed at one time from another thread.

This method should not be used on a node that is not owned by the render thread, as the render thread will not be able to execute the operations when they are released to it. You can use it when a node owned by a [Task](/docs/references/scenegraph/control-nodes/task.md "Task") node thread is transferred to the render thread, by setting it to a child or a node field of a node already owned by the render thread, where the queue is then released.

#### Parameters

| Name      | Type    | Description                          |
| --------- | ------- | ------------------------------------ |
| queueNode | Boolean | A flag enabling queuing on the node. |

#### Return Value

A flag indicating the current state of **queueNode**.

### moveIntoField(field_name as String, data as Object) as Integer

*Available since Roku OS 15.0*

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

> **Performance improvement**
>
> Using the **MoveIntoField()** and **MoveFromField()** functions is significantly faster than standard field copy operations (`node.field = value`, `Update`, `AddFields`, and so on). This is because the data is *moved* and no copies are used (unless external references are present).

### moveFromField(field_name as String) as Object

*Available since Roku OS 15.0*

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
> The *move* operations (`PostMessage` and `MoveIntoField`) remove the contents from the source object and moves it across to the destination. This clears out the source object. For example:
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
> sub_array = [1, 2, 3]
> aa = {foo: "hello", bar: sub_array}
> ' At this point, there is an external reference into aa
> node.moveIntoField("myfield", aa)
> ? aa           ' Prints an empty AA
> ? sub_array    ' Prints [1,2,3] - this was preserved
> ```

### setRef(field_name as String, data as Object)

*Available since Roku OS 15.0*

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

### canGetRef(field_name as String) as Boolean

*Available since Roku OS 15.0*

#### Description

Indicates whether the **GetRef()** function will succeed in the current context. The **GetRef()** call will only succeed if is called on the render thread and the **SetRef()** function had previoulsy been called on the **field_name**. 

The specified **field_name** must be an associative array, and it must have previously been given a value via **SetRef()**.

The **CanGetRef()** function may only be called on the render thread. This function cannot be used if [queueFields](/docs/references/brightscript/interfaces/ifsgnodefield.md#queuefieldsqueuenode-as-boolean-as-boolean) has been enabled.

#### Return Value

This function returns true if the call to the **GetRef()** function will succeed in the current context.

### getRef(field_name as String) as Object

*Available since Roku OS 15.0*

#### Description

Returns a reference to the value of an **roSGNode** field, which must be an associative array.  If the field is not an associative array, the call fails. The specified field must have previously been given a value via **SetRef()**.

The **GetRef()** function may only be called on the render thread. This function cannot be used if [queueFields](/docs/references/brightscript/interfaces/ifsgnodefield.md#queuefieldsqueuenode-as-boolean-as-boolean) has been enabled.

#### Parameters

| **Name**   | **Type** | **Description**                                |
| :--------- | :------- | :--------------------------------------------- |
| field_name | String   | The name of the node's field to be referenced. |

#### Return Value

This function returns true a reference to the field’s value. This function returns  `<invalid>` if accessing the field via reference is not valid. 

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

### threadinfo() as Object

#### Description

A runtime debugging method for helping minimize Rendezvous spread.  This method can be called on any node from any thread.

The following example demonstrates the information returned by this method:

```
{   node: { type: "XXComponent",          
    id: "XXID",          
    address: 0x123XXX,          
    willRendezvousFromCurrentThread: "Yes",          
    owningThread: { type: "Render", name: "newMainScene", id:"123456" }        
},
    currentThread: { type: "Task",   name: "conviva",     id: "234567" },    
    renderThread: { type: "Render", name: "newMainScene", id: "123456" }
}
```

> Do not call this method from within function main() or any function called by function main()

#### Return Value

An roAssociativeArray with the following information:

- What is calling a thread function is being called from.
- On which component's behalf (what m.top) the current function is executing.
- The thread ownership of the node in question.
- Whether or not access to the node from the current thread would cause a rendezvous.

### signalBeacon(beacon As String) As Integer

#### Description

Signals start and/or stop points for measuring app launch and Electronic Program Grid (EPG) launch times.                                                                                                                     

To pass certification, an app must finish launching within the time specified in the [certification performance requirements](/docs/developer-program/certification/certification.md#3performance). The Roku OS automatically fires an **AppLaunchInitiate** event to mark when the user presses the OK button to launch an app from the Roku home screen. The app, however, must fire the corresponding `AppLaunchComplete` to mark when the app home page is fully rendered or when video playback starts after handling a [deep link](/docs/references/brightscript/interfaces/ifsgnodefield.md) and the app can respond to commands sent via the remote control.

Starting in Roku OS 9.3, if the app UI displays a login or user selection dialog before the home page, the app can fire **AppDialogInitiate** and **AppDialogComplete** beacons when the dialog loads and exits, respectively. These new beacons enable more accurate measurements of app launch times as the time spent on any dialogs requiring user input prior to rendering the home page are subtracted from the overall app launch time. If the app displays more that one dialog before the home page, multiple pairs of **AppDialogInitiate**/**AppDialogComplete** beacons may be fired. Do not fire AppDialog beacons on message dialogs that do not involve any user interaction (for example, a "please wait" or "loading" dialog).

To fire signal beacons within your application, call the `signalBeacon()` function on any node as demonstrated in the following examples:

```
myScene.signalBeacon(“AppLaunchComplete”)
myEPGComponent.signalBeacon(“EPGLaunchInitiate”)
m.top.signalBeacon(“EPGLaunchComplete”)`
```

>Only the first sequence of EPG launch beacons is recorded.  If a user launches the EPG more than once while the app is running, a warning message is output to the debug console. This warning message, which acknowledges the receipt of the beacon while notifying that subsequent ones will not be recorded, may be ignored.
>
>Only EPG launch sequences that start within 5 seconds of the `AppLaunchComplete` event being fired qualify as a valid measurements for certification. EPG launch sequences fired after the 5-second window are still recorded so that app performance can be compared against requirements.

The following table summarizes when to fire the `AppLaunchComplete`, `AppDialogInitiate/AppDialogComplete`,  and `EPGLauchInitiate`/`EPGLauchComplete` beacons and when their timestamps are recorded:

| Launch Event      | **Placement**                                                | **Timestamping**                                             |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| AppLaunchComplete | When the app home page is fully rendered, or when video playback starts and the app can responds to commands sent via the remote control (if your app is launched to direct playback).The system automatically fires an AppLaunchInitiated beacon to marks when your app is initially launched. | The first render pass completes after the stop point has been signaled. |
| AppDialogInitiate | Before signaling AppLaunchComplete, when the app enters a login dialog, user selection screen, network error dialog or any other dialog/screen where the app waits for user input. | The dialog is fully displayed and ready for user interaction. |
| AppDialogComplete | The app exits the last dialog before the home screen is rendered. | The user dismisses the dialog or a timeout occurs that forces the dialog to exit. |
| EPGLaunchInitiate | Where your app initiates the display of the app guide.   | The last keypress before the start beacon was signaled. If there was no prior keypress, the start beacon signal time. |
| EPGLaunchComplete | Where the app guide is fully rendered and operational.   | The first render pass completes after the stop point has been signaled. |

#### Return Value

When you fire a launch event, the system will return an integer indicating the result of its signaling:

| **Return Code** | **Description**  |                                                              |
| -------------- | --------------- | ------------------------------------------------------------ |
| 0               | Success          | The event was successfully signaled.                         |
| 1               | Not Ready        | The event cannot be fired until after the AppLaunchComplete beacon has been completed. |
| 2               | Invalid          | An invalid string was passed into the signalBeacon function. |
| 3               | Already Signaled | An event that can only be fired once (AppLaunchComplete) was signaled again. |
| 4               | Wrong Order      | The completion event was fired before the corresponding initiate event (for example, EPGLaunchComplete was signaled before EPGLaunchInitiate). |

>In addition to the app launch, dialog launch, and EPG launch times, the Roku OS automatically measures five other certification performance metrics: app compile time, video start time, live start time, channel change time, and channel exit time. You can use the [BrightScript console](/docs/developer-program/debugging/debugging-channels.md) (port 8085) to view a report detailing your app's performance. See [Measuring app performance](/docs/developer-program/debugging/debugging-channels.md) for more information.
