---
title: Brightscript Support
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

# BrightScript support

Several BrightScript functions and components cannot be used in
SceneGraph component scripts. Many of the BrightScript components that
cannot be used provide duplicate rendering functionality as SceneGraph
nodes, and cannot be used for that reason. You should use the equivalent
SceneGraph nodes instead, if available. Other BrightScript functions and
components can only be used in SceneGraph applications in a
[Task](/docs/references/scenegraph/control-nodes/task.md) node.

The following are the BrightScript functions and components that cannot or should not
be used in the component scripts of a SceneGraph application, with
additional information for many, such as:

  - SceneGraph nodes to use instead, if available
  - a function or component that can only be used in a Task node

| BrightScript             | Notes                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| ParseJson()              | Should only be used in a **Task** node                                                                            |
| parseXml()               | Should only be used in a **Task** node                                                                            |
| ReadAsciiFile()          | Should only be used in a **Task** node.                                                                            |
| roAppManager             | User interface component, cannot be used in a SceneGraph application                                           |
| roAudioMetadata          | Should only be used in a **Task** node.                                                                    |
| roAudioPlayer            | Cannot be used in a SceneGraph application                                                                     |
| roAudioResource          | Cannot be used in a SceneGraph application                                                                     |
| roChannelStore           | Can only be used in a **Task** node or in the main BrightScript thread                                         |
| roCompositor             | User interface component, cannot be used in a SceneGraph application                                           |
| roDatagramSocket         | Can only be used in a **Task** node                                                                            |
| roFileSystem             | Can only be used in a **Task** application                                                                     |
| roFont                   | Use the SceneGraph **Font** node instead                                                                       |
| roFontRegistry           | Cannot be used in a SceneGraph application                                                                     |
| roImageMetadata          | Should only be used in a **Task** node.                                                                   |
| roMessagePort            | This can be used when the SceneGraph application is launched, but not within the application component scripts |
| roPinEntryScreen         | Use a SceneGraph PinPad instead                                                                                |
| roRegion                 | User interface component, cannot be used in a SceneGraph application                                           |
| roScreen                 | User interface component, cannot be used in a SceneGraph application                                           |
| roSocketAddress          | Can only be used in a **Task** node                                                                            |
| roSprite                 | User interface component, cannot be used in a SceneGraph application                                           |
| roStreamSocket           | Can only be used in a **Task** node                                                                            |
| roSystemLog              | Cannot be used in a SceneGraph application                                                                     |
| roTextureManager         | User interface component, cannot be used in a SceneGraph application                                           |
| roTextureRequest         | User interface component, cannot be used in a SceneGraph application                                           |
| roUrlTransfer            | Can only be used in a **Task** node                                                                            |
| roVideoPlayer            | Use the SceneGraph **Video** node instead                                                                      |
