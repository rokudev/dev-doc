---
title: DynamicCustomKeyboard
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
Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md)

The Video node class provides a controlled play of live or VOD video.

The Video node includes a wide variety of internal nodes to support trick play, playback buffering indicators, and so forth. Playback buffering indicators, to indicate buffering before initial playback as well as re-buffering, use an internal instance of a ProgressBar node. For trick play, an internal instance of a TrickPlayBar node is provided. For display of BIF images for DVD-like chapter selection, an internal instance of a BIFDisplay node is provided.

Starting from Roku OS 8, the behavior of the Roku system overlay is such that the system overlay now slides in whenever the * button is pressed, the Video node is in focus, and the app does not have its OnKeyEvent() handler fired. When the Video node is not in focus, the system overlay does not slide in and the OnKeyEvent() handler is fired.

## Fields

### Playback fields

To set the specific video playback parameters for a particular video, set the [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md) attributes for the video in a [ContentNode](/docs/references/scenegraph/control-nodes/contentnode.md) node, and assign the ContentNode to the `content` field of the Video node.

Video playback can then be controlled by setting the value of the `control` field, such as setting the field value to `play` to begin playback.

The `control` field includes a `prebuffer` option, which allows the video to begin buffering without showing the video. You can use this option to begin buffering of a video before a user has actually selected and started the video, such as when the user is looking at information about various video offerings in a list or grid or another type of UI element. This can eliminate much or all of the apparent delay in starting the video due to buffering the video for the user. For example, you could set the `control` field value to `prebuffer` in a callback function triggered by the `itemFocused` events that occur as a user scrolls down a list of video offerings that also display information about each video. When the user makes the selection, you can begin the actual video playback by setting the `control` field value to `play` in a callback function triggered by the `itemSelected` event for the list.

