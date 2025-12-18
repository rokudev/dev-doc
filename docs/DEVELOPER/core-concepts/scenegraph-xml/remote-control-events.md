---
title: Remote Control Events
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

# Remote control events

The SceneGraph architecture supports a notion of remote control key
focus. At any time, any node in the SceneGraph node tree can be assigned
the remote control key focus. The node with key focus is unique, so when
focus is assigned to a node, the currently focused node loses the key
focus.

![roku815px - remote-control-events-1](https://image.roku.com/ZHZscHItMTc2/remote-control-events-1-v2.png "remote-control-events-1")

The node with the key focus is given the first opportunity to handle a
key event. If that node does not handle the key event, the event is
passed up the SceneGraph node tree to the node parent. This continues
until a parent node handles the event, or the event moves up to the root
of the SceneGraph node tree (that is, a [**Scene**](/docs/references/scenegraph/scene.md)
node). The path from the node that has the remote control key focus up
to the root of the SceneGraph node tree is referred to as the *focus
chain*.

![roku815px - remote-control-events-2](https://image.roku.com/ZHZscHItMTc2/remote-control-events-2-v2.png "remote-control-events-2")

In many cases, there are default remote key event handlers built into
the node classes supplied by Roku, and there are default event handlers
that are not accessible by application developers as part of the Roku
player firmware. If these default event handlers are called at any time
as the event moves up the focus chain, the event is considered to have
been handled, and a message to that effect is returned to the Roku OS,
and no further action to handle the event will take place. For other
events that are not handled by default, you have the option of handling
the event, or allowing the event to move up the focus chain, and
possibly not be handled at all.

Since they are derived from [**roSGNode**](/docs/references/brightscript/components/rosgnode.md), each
node includes the [**ifSGNodeFocus**](/docs/references/brightscript/interfaces/ifsgnodefocus.md)
interface functions for querying and manipulating the current remote
control key focus status of the node. A special function is included in
the SceneGraph API, **`onKeyEvent()`**, that allows you handle events,
and return a message to the Roku OS that the event has been handled.
These two features of the SceneGraph API allow you to selectively
control the remote control key focus, and handle remote key press events, as needed for your application. See [**Handling Remote Control Key Presses**](/docs/developer-program/core-concepts/handling-application-events.md#handling-remote-control-key-presses) for complete information on using these features to handle remote
control key events.
