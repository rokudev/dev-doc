---
title: "ifAudioPlayer"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---




## Implemented by

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| [roAudioMetadata](doc:roaudiometadata)| The Audio Player object provides the ability to setup the playing of a series of audio streams |


## Supported methods

### SetContentList(contentList as Object) as Void

#### Description

Sets the content list to be played by the Audio Player.

#### Parameters

An array of associative arrays (Content Meta-Data objects) representing the information for each stream to be played. See [Content Meta-Data](doc:content-metadata) for details on the attributes for each element in the array.

### AddContent(contentItem as Object) as Void

#### Description

Adds a new ContentMetaData item to the end of the content list for the Audio Player. 

#### Parameters

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| contentItem | Object | The new ContentMetaData item to be added to the content list. |

### ClearContent() as Void

#### Description

Clears the content list.

### Play() as Boolean

#### Description

Puts the Audio Player into play mode starting at the current item in the Content List. This will stop any currently playing content.

#### Return Value

A flag indicating whether the Audio Player was successfully set to play mode. 

### Stop() as Boolean

#### Description

Stops the Audio Player from playing or pausing and cleanup.

#### Return Value

A flag indicating whether the Audio Player was successfully stopped. 

### Pause() as Boolean

#### Description

Puts the Audio Player into pause mode. It is an error to Pause if player is not in play mode.

#### Return Value

A flag indicating whether the Audio Player was successfully set to pause mode.

### Resume() as Boolean

#### Description

Puts the Audio Player into play mode starting from the pause point. It is an error to Resume if the player is not in pause mode.

#### Return Value

A flag indicating whether the Audio Player was successfully set to play mode.

### SetLoop(enable as Boolean) as Void

#### Description

Enables/disables the automatic replaying of the Content List.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | Set to true to have the Audio Player automatically begin playing the first item in the content list after playing the last item.<br /><br />Set to false to have the Audio Player stop after playing the last item in the content list. |

### SetNext(item as Integer) as Void

#### Description

Sets the next item in the Content List to be played.

#### Parameters

| Name | Type    | Description                                                  |
| ---- | ------- | ------------------------------------------------------------ |
| item | Integer | Item is the zero-based index of the item in the content list. This item will be played after the currently playing item finishes. |

### Seek(offsetMs as Integer) as Boolean

#### Description

Set the start point of playback for the current item to offsetMs milliseconds. 

- If the item is currently playing, playback will be interrupted and will restart at the specified offset. 
- If the item is not currently playing, playback will begin at the specified offset when Play() is called.

#### Parameters

| Type    | Name     | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| Integer | offsetMs | The offset to be used to determine the start point of the current content item. |

#### Return Value

A flag indicating whether the Audio Player was successfully set to the specified offset.

### SetTimedMetaDataForKeys(keys[] as Dynamic) as Void

#### Description

Specifies the timedMetaData keys that the app is interested in receiving from the timedMetaData event.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| keys[] | Dynamic | The set of keys to be received from the timedMetaData event.<br /><br />If the keys array is empty, all the timed metadata associated with the current stream is sent with the isTimedMetaData event.<br /><br />If the keys array is invalid, then do not return any keys to the BrightScript app.<br /><br />Any keys not specified with this method are deleted by the Roku OS and never returned to the BrightScript application. |




