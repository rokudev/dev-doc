---
title: "onKeyEvent()"
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


<table>
<thead>
<tr>
<th>String</th>
<th>Key</th>
<th>Appearance/Icon</th>
</tr>
</thead>
<tbody>
<tr>
<td>back</td>
<td><strong>Back</strong></td>
<td>left-pointing arrow at top of remote</td>
</tr>
<tr>
<td>up</td>
<td><strong>Up</strong></td>
<td>up-pointing caret of remote directional pad</td>
</tr>
<tr>
<td>down</td>
<td><strong>Down</strong></td>
<td>down-pointing caret of remote directional pad</td>
</tr>
<tr>
<td>left</td>
<td><strong>Left</strong></td>
<td>left-pointing caret of remote directional pad</td>
</tr>
<tr>
<td>right</td>
<td><strong>Right</strong></td>
<td>right-pointing caret of remote directional pad</td>
</tr>
<tr>
<td>OK</td>
<td><strong>OK</strong></td>
<td>key usually labeled <strong>OK</strong> near or in the center of remote directional pad</td>
</tr>
<tr>
<td>replay</td>
<td><strong>Replay</strong></td>
<td>key usually labeled with a circular-pointing arrow</td>
</tr>
<tr>
<td>play</td>
<td><strong>Play/Stop</strong></td>
<td>key usually labeled with a right-pointing triangle and two bars</td>
</tr>
<tr>
<td>playonly</td>
<td><em>No physical key</em></td>
<td>sent instead of "play," in instances where media should strictly start playing (rather than toggle with play/stop)</td>
</tr>
<tr>
<td>rewind</td>
<td><strong>Rewind</strong></td>
<td>key usually labeled with two left-pointing triangles</td>
</tr>
<tr>
<td>fastforward</td>
<td><strong>Fast Forward</strong></td>
<td>key usually labeled with two right-pointing triangles</td>
</tr>
<tr>
<td>options</td>
<td><strong>Options</strong></td>
<td>key labeled with an asterisk</td>
</tr>
<tr>
<td>pause</td>
<td><em>No physical key</em></td>
<td>Sent instead of "play," in instances where media should strictly pause (rather than toggle with play). <br /><br />Requires the <code>pause_aware</code> <a href="/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes">manifest attribute</a> to be set to <code>1</code>.</td>
</tr>
<tr>
<td>channelup</td>
<td><strong>Up</strong></td>
<td>For use in the TimeGrid node. Up-pointing caret of remote directional pad.</td>
</tr>
<tr>
<td>channeldown</td>
<td><strong>Down</strong></td>
<td>For use in the TimeGrid node. Down-pointing caret of remote directional pad.</td>
</tr>
</tbody>
</table>



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