---
title: Onkeyevent
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

# onKeyEvent()

The `onKeyEvent()` function receives remote control key events from the Roku OS, and allows the writing of event handlers for a node or component in response to the events. The function returns a message to the Roku OS to indicate that a particular event has been handled by the node or component, preventing the event from moving up the focus chain, to possibly be handled by parent nodes in the SceneGraph node tree, or by default firmware handlers.

> Several node classes handle certain remote control key events automatically, so the `onKeyEvent()` function is not required to handle those events, and should not be used for those events in those nodes. As an example of node classes that automatically handle certain remote control key events, grid node classes such as [PosterGrid](/docs/references/scenegraph/list-and-grid-nodes/postergrid.md) automatically handle **Up**, **Down**, **Right**, and **Left** key presses when the poster grid has focus. Typically, you should use the ifSGNodeField `observeField()` method to handle changes in the subject node fields caused by automatic key event handling of the node.

#### Syntax

```
function onKeyEvent(_key_ as String, _press_ as Boolean) as Boolean  
    ...  
end function
```

Key event handling is easy to set up in XML by including an `onKeyEvent()` function in the <script\> element. When the XML component or its children have the key focus, the `onKeyEvent()` function will be called whenever an unhandled key event bubbles up the focus chain to the XML component.

The `key` parameter contains a string, which is case-sensitive, that identifies which button was pressed. The `key` strings supported by the `onKeyEvent()` function, and the corresponding remote key, are as follows:

| String      | Key               | Appearance/Icon                                              |
| ----------- | ----------------- | ------------------------------------------------------------ |
| back        | **Back**          | left-pointing arrow at top of remote                         |
| up          | **Up**            | up-pointing caret of remote directional pad                  |
| down        | **Down**          | down-pointing caret of remote directional pad                |
| left        | **Left**          | left-pointing caret of remote directional pad                |
| right       | **Right**         | right-pointing caret of remote directional pad               |
| OK          | **OK**            | key usually labeled **OK** near or in the center of remote directional pad |
| replay      | **Replay**        | key usually labeled with a circular-pointing arrow           |
| play        | **Play/Stop**     | key usually labeled with a right-pointing triangle and two bars |
| playonly    | *No physical key* | sent instead of "play," in instances where media should strictly start playing (rather than toggle with play/stop) |
| rewind      | **Rewind**        | key usually labeled with two left-pointing triangles         |
| fastforward | **Fast Forward**  | key usually labeled with two right-pointing triangles        |
| options     | **Options**       | key labeled with an asterisk                                 |
| pause       | *No physical key* | Sent instead of "play," in instances where media should strictly pause (rather than toggle with play). <br /><br />Requires the `pause_aware` [manifest attribute](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) to be set to `1`. |
| channelup   | **Up**            | For use in the TimeGrid node. Up-pointing caret of remote directional pad. |
| channeldown | **Down**          | For use in the TimeGrid node. Down-pointing caret of remote directional pad. |


> There are one or more keys on any Roku remote control which are not handled by the `onKeyEvent()` function (or any Roku application event handler), such as the **Home** key. Presses of these keys are handled by the global Roku firmware event handler in a default manner that cannot be modified by application code.

The `press` parameter is a boolean value that is true if the key was pressed, and false if the key was released.

The `onKeyEvent()` function must return `true` if the XML component handled the event, or `false` if it did not handle the event. Returning `false` allows the event to continue bubbling up the focus chain so that ancestors of the XML component can handle the event. 

The behavior of the Roku Options overlay has been modified, such that the Options overlay now slides in whenever the **Options** button is pressed, the [Video node](/docs/references/scenegraph/media-playback-nodes/video.md) is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the Options overlay does not slide in and the OnKeyEvent() handler is fired.

> Starting from Roku OS version 8.1, literal key keypress events (such as keyboard letters, and so forth) that are sent to  via the mobile app or [ECP](/docs/developer-program/dev-tools/external-control-api.md) keydown/keyup commands, now go to the onKeyEvent() handler. Previously, only keys that corresponded to remote keys went to the onKeyEvent handler.

Such keys are now sent at "Lit_" followed by the actual keypress ("A," "B," "C," etc.).

#### Example

The following `onKeyEvent()` example handles supported remote control key presses other than the **Back** key by displaying a warning message until the **OK** key is pressed.

**onKeyEvent() event handling example**

~~~~
function onKeyEvent(key as String, press as Boolean) as Boolean
  handled = false
  if press then
    if (key = "back") then
      handled = false
    else
      if (m.warninglabel.visible = false)
        m.warninglabel.visible="true"
      else
        if (key = "OK") then
          m.warninglabel.visible="false"
        end if
      end if
      handled = true
    end if
  end if
  return handled
end function
~~~~

See Events and Observers Markup for more details and a downloadable sample showing how to add key event support to an app.
