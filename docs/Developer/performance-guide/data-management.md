# Data management

## Thread ownership of Nodes

- Instances of Group or any component extended from it (renderable nodes) are owned by the render thread regardless of which thread created them. For this reason, it is not recommended to create renderable nodes from a Task thread because every access will require a rendezvous.
- The Global node is owned by the Render thread.
- Instances of Node, ContentNode, and components extended from them are owned by the thread that created them.
- Task nodes created from within a task thread are owned by the Render thread and accessed via rendezvous.
- If the Render thread interacts with a node, the Render thread will automatically take ownership of that node. When a node is set as a child or field of another node owned by the Render thread, the referenced node becomes owned by the Render thread. 
- This transfer of ownership is recursively performed on all nodes and fields referenced by a transferred node, and it is even performed on nodes referenced in AA or array fields.

## Use of m.global

- Since the global node (`m.global` in a Component) is owned by the SceneGraph Render thread, any operations on `m.global` from a Task thread are accomplished via rendezvous.
- If a Task thread creates a node and adds it to `m.global` via a field or as a child (or grandchild, etc.), it is best to have the Task thread perform operations on the node before it is added so that it may do so without rendezvous.

### Referencing subsections of m.global

Given the rendezvous penalties, don't repeatedly reference the same fields in `m.global` to get data subsections. Use temporaries to hold references to successive parts of the tree. For example, assume that you have a large set of app configuration data stored in `m.global.config`. This data is a large web with elements (AAs or node trees) for settings, analytics, etc.:

```
m.global
{
        config
        {
            settings
            {
            }
            analytics
            {
            }
        }
}
```

Getting some or all of this data into a Task node can be done as follows:

```
<component name="DataTask" extends="Task">
<interface>
    <field id="settings" ... />
    <field id="analytics" ... />
</interface>
...
function init() as void
    m.config = m.global.config
    m.settings = m.config.settings
    m.analytics= m.config.analytics
end function
...
</component>
```

The Task makes a local copy of the config global data which it then references via that local variable, avoiding a rendezvous and a copy for subsequent references. Generally speaking a Task should locally copy only what it needs from `m.global`, so there is a design trade-off in grouping data in subtrees versus spreading it all out at the top level. Each such copy will expand the memory footprint of your channel. 

## Task to render thread rendezvous

- When a Task thread operates on nodes it owns, it does so directly, and it does not trigger a rendezvous.
- When a Task thread operates on a Render-thread-owned node, it triggers a rendezvous. 
- When a rendezvous happens:
  - The Task thread adds a requested operation to the Render thread's queue and blocks, waiting for completion of the operation. 
  - The Render thread eventually pulls the requested operation off of its queue, executes it, and returns the results. 
  - The Task thread sees the results of the operation and unblocks from the rendezvous. Thus, it appears as a synchronous call to the Task thread. 
  - From the Task thread's point of view, both the syntax and the semantics of the call are the same as if the Task thread owned the node itself.
  
    ![rendezvous-graph](https://image.roku.com/ZHZscHItMTc2/rendezvous-graph.png "Rendezvous Graph")
  
- While rendezvous are designed to be invisible to syntax and semantics, **a rendezvous is at least an order of magnitude more expensive than a direct access.** For this reason, rendezvous should be used sparingly.

## Data modeling

- Generally, data passed to and from fields is passed by copy.
- In particular, containers like associative arrays and plain arrays get passed to and from fields by deep copy. This is a complete recursive copy of all of the data in the container, including copies of all the containers in the container.
- Unlike traditional BrightScript, passing large webs of AAs or arrays through SceneGraph node fields is not efficient and should be avoided.
- On the other hand, using AAs to model small data structures is a reasonable way to consolidate related fields that are usually set or read as a whole. If the AA is being passed between the Render thread and a Task thread, this will incur a single rendezvous. This way, it is not required to trigger multiple rendezvous for each field access if separate data elements are modeled as separate fields.
- Each instance of a SceneGraph node is an exception to the copy rule through fields. **SceneGraph nodes get passed to and from fields by reference.** Using a node tree to model complex content means that a single field or child can accept a large change in the data model with one reference change.
- The result of the above considerations is that the data that needs to be accessible via nodes and fields fall into two categories:
  - The first category represents small, shallow data structures where each structure instance is usually treated as a single cohesive item. These are reasonable and efficient to model as **AA fields**.
  - The second represents large, deep data webs where copying would be prohibitive. It is reasonable to model these as **node trees**.
- Prune unneeded data in ContentNode AA fields. Limit the data to what is used by the node. As an example, when in a TimeGrid view, users won't see the show descriptions. Hence, when populating the Grid, parse what data is displayed before it gets to the ContentNode. This will prevent slow loading because of significant amounts of Meta-Data.

## Marshalling data

- Loading large amounts of server data should be done in the background using a Task node. The Task thread should try to keep ownership of the node while updating its fields, and should only pass the node into a field or as a child of a node owned by the Render thread after performing all the operations on the node that it must.

- Rendering content on the screen is done on the Render thread by setting a ContentNode to the content field of the appropriate SceneGraph UI component. This ContentNode should only be set into the UI node's content field after all of the data is loaded by the Task thread into the ContentNode. Since each dot operation on a renderable node requires a rendezvous, a Task thread should use a single dot reference at the end to set the entire ContentNode and its subtree rather than setting the node first and then operating on it with multiple dot operations.
- To get data structures (more than one scalar value for example) into a Task node at a time, it is best to create a single interface field on the Task node with type assocarray. The Render thread can then set that interface field with the data it wants to pass. Only one rendezvous is required for the whole copy, versus multiple if there are individual interface fields for each value.

## Threading and observer callbacks

- The observer callback function for a given field is executed in the thread that owns the node.
- Any callbacks set up on a Task node's fields will be executed by the Render thread if the node is owned by the Render Thread. For a Task thread to respond to the setting of such a node's fields, use the message port form of `observeField()` and wait for an [roSGNodeEvent](/docs/references/brightscript/events/rosgnodeevent.md) on that port. For nodes owned by the Task thread itself, the callback functions are set to call back directly to the Task thread.

## Task initialization

1. The initialization of a Task does a bit more work and has more nuances than for other node types. The differences are designed to be mostly invisible, much like a rendezvous operation versus a normal operation.
2. During the creation of the Task node, `init()` is executed by the Render thread because the Render thread owns the Task node.
3. The component `m` that is created before and modified during `init()` belongs to the Render thread. Function callbacks of Task node fields setup during `init()` execute in the Render thread and then access this `m`.
4. When the Task's control field is set to RUN, the Render thread's m is cloned (deep copied), the Render thread gets the clone, and the Task thread gets the original m. This ensures that a port created in init() is available to the Task thread, as it is the thread that needs to access the port
5. In `init()`, the newly created port can be immediately used to observe fields; these fields guarantee to generate events that will be received by the Task thread once it is started. Waiting to create a port and observe fields in the Task thread itself can create a race condition where settings of the field from the Render thread may occur before the Task thread has had a chance to set up observation.
6. If the same instance of a Task node stops and is started again, the Render thread's m is cloned; the Render thread gets this clone, and the Task thread gets the "original" (now a 1st generation clone created in step 4). If there is setup that must be done for m (like creating a new port), it must be done in a field callback of the Task node (executed by the render thread during task initialization), that can modify the appropriate m and set the Task node's control to `RUN`.

## Garbage Collector

- **SceneGraph Nodes** Nodes are reference counted. When the reference count goes to zero, the Roku OS automatically handles the clean up of SceneGraph nodes.
- **Brightscript Objects** Brightscript objects can be cleaned up using the built-in Garbage Collector if no other elements are referencing the Brightscript object. Generally, this is done once right before video playback.

  > There is no advantage to calling the Garbage Collector frequently. For more information refer to [RunGarbageCollector](/docs/references/brightscript/language/global-utility-functions.md#rungarbagecollector-as-object).

## Circular Dependencies in SceneGraph

A **circular reference** is a series of references where the last object references the first, resulting in a closed loop. Since all the nodes are reference counted, as soon as the reference count for the node is zero, Roku OS automatically clears out that node. Although, Roku OS won't be able to clean out circular dependent nodes, as they will always have a reference to one another. This, in turn, consumes memory indefinitely.

## Using getScene()

getScene() is a useful function to avoid having to store parent pointers. It gets the Node's root Scene, and from there you can search down for the Nodes you want to access without storing any pointers. More for information about getScene(), refer to [getScene() as roSGNode](/docs/references/brightscript/interfaces/ifsgnodechildren.md#getscene-as-rosgnode).

## Image Sizing

- Using properly sized images for various resolutions ensures that the quality of the UI is maintained. Failing to do so can result in images being scaled on device, which degrades performance.
- Smaller images can be added to the script using different URLs for different images. Moreover, [uri_resolution_autosub](/docs/developer-program/getting-started/architecture/channel-manifest.md#graphics-scaling-attributes) can be used to substitute the resolution type for a particular image URL, and the function regresses the URL automatically.
- If the developer cannot provide the images using the server, they can use the Poster node fields: LoadWidth, LoadHeight, and LoadDisplayMode, at minimum values to provide low-resolution images. For more information about these fields, refer to [Posters](/docs/references/scenegraph/renderable-nodes/poster.md#autoscaling).
