---
title: "Creating an Episodes Screen"
excerpt: 'Learn to build an Episodes Screen with seasons, episodes, and MarkupList components'
deprecated: false
hidden: false
metadata:
  title: 'Creating an Episodes Screen | Roku Developer Docs'
  description: 'Video lesson on building an Episodes Screen that organizes television series into seasons and episodes, using MarkupList and layered components.'
  robots: index
next:
  description: ''
---


<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit9-episodePicker-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit9-episodesScreen.png" width="720" height="480" controls />

## About this lesson

This lesson explains how to build an Episodes Screen that organizes television series into seasons and episodes. The left side of the screen displays the seasons; the right side of the screen lists the episodes in the selected season. Each episode typically includes a thumbnail, title, description, and release date. When an episode is selected, its [Details Screen](doc:details-screen) opens and the content can then be launched into playback. This enables viewers to quickly browse through different episodes in a series to find the one they want to watch.  

This lesson shows how to use new components such as the [MarkupList](doc:markuplist) and further layer components to create more complex UIs. It shows how to parse the [content feed](doc:content-feed) to populate an episode screen with sequentially numbered seasons and the episodes that belong in those seasons. In addition, it explains how to create buttons for the different seasons in a series, and how to set the focus on an episode when a season is selected and switch the focus between the [grid](doc:grid-screen), episode, and [video](doc:video-player) screens.

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Episodes Screen sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/EpisodesScreen) | Download and review the code used in this lesson to create an episodes screen. |
| [Sideloading  Roku apps](doc:developer-setup) | Sideload and test the Episodes Screen app created in this lesson. |

## Related

[MarkupList node](doc:markuplist)

[LayoutGroup node](doc:layoutgroup)

[Group node](doc:group)

[Rectangle node](doc:rectangle)

[Label node](doc:label)

[Poster node](doc:poster)

[Content node](doc:contentnode)  

[Content meta data](doc:content-metadata)

[Handing application events](doc:handling-application-events)

[Event loops](doc:event-loops)

[OnKeyEvent()](doc:onkeyevent)

[ifSGNodeChildren interface](doc:ifsgnodechildren)

## How to watch

Play the embedded video above or go to [SceneGraph: Creating an Episodes Screen](https://youtu.be/spWGlzf5DXo) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers g](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.