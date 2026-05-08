---
title: Optimization techniques
excerpt: 'Reduce SGNode copies, limit formatJSON, and manage memory for smoother frames'
deprecated: false
hidden: false
metadata:
  title: 'Optimization techniques | Roku Developer Docs'
  description: 'Apply techniques to improve channel performance by minimizing SGNode field access, limiting formatJSON use, and reducing memory to avoid frame drops.'
  robots: index
next:
  description: ''
---
## SGNode initialization

For offload initialization, keep `init()` in the main scene and its static children as minimal as possible. Having too much "upfront" initialization will cause the app to take a long time loading the main scene. Leave as much initialization as possible for the task thread function.

## Data flow

### Avoid fetching large amounts of data

Fetching and parsing large amounts of data may impact channel performance. Consider server side filtering, data optimization, or paging to reduce the amount of data that is fetched by the channel.

Fetching, parsing and storing large amounts of data can also cause excessive memory consumption which in turn can affect performance.

### Limit the use of formatJSON on large data structures

Using `formatJSON` can be expensive, especially when operating on a large associative array.

### Minimize SG node field access

When accessing fields on an SG node, either for read or write, the data will be _copied_ into or out of the node's field. This can impact channel performance and memory overhead if not managed carefully. Keep data small to reduce copy time.

For example, accessing a 5.6MB AA can take hundreds of milliseconds. If this copy happens inside a rendezvous observer, the render thread may skip frames during animation.

#### Copying Nodes

When copying nodes, do not simply call:

```
node2.setFields(node1.getFields())
```

Setting nonexistent fields in a node will invoke additional internal verification and warning outputs to the debug console, causing UI lag. Instead, do something like:

```
function cloneNode(oldNode as Object) as Object
  newNode = createObject("roSGNode",oldNode.subtype()) 'subtyped node should automatically have all the fields of the original node
  newNode.setFields(oldNode.getFields())
  return newNode
end function
```

#### ContentNode vs. associative arrays

Use [ContentNode](doc:contentnode) fields to represent complex trees of nested data that are expensive to copy, since they will be passed by reference. Use associative arrays to store small, shallow data structs. Associative arrays will be deep-copied through fields (pass-by-value) and has the advantage of keeping parallelization safer and more efficient.

#### Avoiding onChange in Task threads

If you'd like a Task node to execute a function in response to a field change, use the overloaded version of [**observeField()**](doc:ifsgnodedict) to send an roSGNodeEvent to your message port. Do this instead of setting **onChange** in the field you want to watch. While this is certainly not necessary, it might improve visual performance since onChange is usually executed on the render thread.

## Frame Rate

### Minimize the size and number of images being drawn

Drawing too many images can impact the frame rate of your channel.

* Draw smaller images when possible. For instance, to draw an FHD background image where half the background will be overlayed with a dark gradient, the image can be cropped to draw just half as many pixels.
* Compose multiple images server-side (e.g. applying gradients) into a single image delivered to the device.

### Limit code execution during animation

It is common for apps to fire analytics beacons while the user is scrolling a grid. However, this can impact application performance. Keep in mind that if the code executes in the main rendering thread or causes a rendezvous there, it can affect the application’s smoothness. To achieve a consistent 60 fps, _all BrightScript code executing on the render thread must execute within 16 milliseconds_.

### Don't scale images on device

An image that needs to be scaled takes more time to process by the GPU. Determine the appropriate size, then resize the image once outside the main render thread to save CPU cycles and draw more clearly.

## Memory

Roku OS shuts down channels that exceed memory usage limits. You can view these limits in [Roku Resource Monitor](doc:resource-monitor).

It is important to understand that well before these limits are reached, channel performance may degrade due to Roku OS starting to page and swap to meet memory demands. When this happens, you will see these symptoms in Roku Resource Monitor:

* Increase in the amount of channel memory pushed into swap
* Increase in the percentage of CPU cycles spent in the kernel
* Decrease in the amount of file-backed memory used by the channel

Using too much memory may also impact [cachefs](doc:file-system#cachefs). If the system memory reaches a specific threshold, data stored in cachefs will be dropped. These thresholds vary depending on the device.

### Minimize data passed to ParseJSON

`ParseJSON` takes a string and converts it into an AA which uses more memory than the original string. Together with the original string, this can start to become a problem with very large JSON strings. The recommendations outlined in the ‘Avoid fetching large amounts of metadata’ section will help reduce memory consumption

### Avoid circular references inside nodes

Typically, BrightScript objects are deleted when their reference count drops to zero. However, this will not happen there are circular references within an object.

Circular references can be detected by calling [RunGarbageCollector](doc:component-architecture#garbage-collection). This is relatively slow to run, and so should only be used as a debug strategy. It reports the number of objects that it found and cleaned up, and can be used during development to ensure that your channel is not creating circular references, and then turned off in production. Note that our garbage collection does not detect cycles where the cycle involves BrightScript objects in different domains (for example, owned by different threads) or involves both SceneGraph nodes and BrightScript objects.

## More development tips

* Processing Power: Developers should be conscious of CPU intensive tasks and their impact on older devices. Otherwise your app may suffer from low frame rate or laggy transitions.
* Know the remote control codes for special screens:
  * Channel Version Info: **Home 3x, Up 2x, Left, Right, Left, Right, Left**
  * Developer Settings Page: **Home 3x, Up 2x, Right, Left, Right, Left, Right**
* The Developer settings page is necessary for enabling developer mode on your box.
* All file paths are prefixed by the device name and a colon: `pkg:/filename.txt`. See [File System](doc:file-system) for more information.
* Display a facade screen when launching your application so that it appears to the user that your app launches immediately. When your scene is first rendered, display a channel level splash image while initial setup logic is happening. Hide it once you are ready to display content to the user.
* There are a limited number of video content and streaming formats supported on the Roku Streaming Player. See [Audio and Video Support](doc:streaming-specifications) for complete information on the supported formats.
* Be sure to use a unique key for each application you publish and reuse this key each time you update your application using the "rekey" option. This ensures that all versions of your application will have access to the same registry data and avoid causing users to re-link after an update.
* We require that your web servers support range requests. If they do not, you may run into content that is not playable, or large images that do not display. The data will appear as a corrupted file format to our components, as the first block may be resent by the web server when we expect data at a particular range or offset.
