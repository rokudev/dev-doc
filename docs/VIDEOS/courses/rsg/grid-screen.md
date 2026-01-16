---
title: "Creating a Grid Screen"
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

# Creating a Grid Screen

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit5-gridscreen-v4.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit5-gridScreen.png" width="720" height="480" controls />


## About this lesson

This lesson explains how to create a basic app that gets the videos from a content feed and displays them in a grid, which contains rows of posters (thumbnail images). It demonstrates how when you scroll to a poster, it is highlighted and its name, duration, and description are displayed above the row.

This lesson describes how to create the directory structure and manifest required by Roku apps. It shows how to create SceneGraph components, set their attributes, and create their interfaces. It details how to parse the metadata in the content feed, add the metadata to content nodes, and then add the content nodes to SceneGraph components.

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Grid Screen sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/GridScreen) | Download and review the code used in this lesson to create a grid screen. |
| [Sideloading  Roku apps](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) | Sideload and test the Grid Screen app created in this lesson. |
| [Channel directory](/docs/developer-program/core-concepts/developing-scenegraph-applications.md) | Learn to how to create the directory structure required by Roku apps. |
| [Channel manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md) | Read how to create the manifest required by Roku apps (every app must have a manifest so the Roku OS knows which features your app supports). Learn about all the mandatory attributes that must be included in the manifest,  and the different optional features can be enabled in it. |

## Related

[Scene node](/docs/references/scenegraph/abstract-nodes/scene.md)

[Overhang node](/docs/references/scenegraph/sliding-panels-nodes/overhang.md)

[Label node](/docs/references/scenegraph/renderable-nodes/label.md)

[RowList node](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md)

[Poster node](/docs/references/scenegraph/renderable-nodes/poster.md)

[Event loops](/docs/developer-program/core-concepts/event-loops.md)

[Content node](/docs/references/scenegraph/control-nodes/contentnode.md)  

[Content meta data](/docs/developer-program/getting-started/architecture/content-metadata.md)

[OnKeyEvent()](/docs/references/scenegraph/component-functions/onkeyevent.md)

[ifSGNodeChildren interface](/docs/references/brightscript/interfaces/ifsgnodechildren.md)

[Handing application events](/docs/developer-program/core-concepts/handling-application-events.md)

[Runtime functions](/docs/references/brightscript/language/runtime-functions.md)

[BrightScript expressions, variables, and types](/docs/references/brightscript/language/expressions-variables-types.md)

## How to watch

Play the embedded video above or go to [SceneGraph: Creating a Grid Screen](https://youtu.be/ZxHA8AY9xD8) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.