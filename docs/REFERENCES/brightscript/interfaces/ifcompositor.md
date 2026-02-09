---
title: "ifCompositor"
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

| Name         | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| [roCompositor](doc:rocompositor) | The roCompositor allows the composition and animation of multiple roBitmaps and roRegions |


## Supported methods

### SetDrawTo(destBitmap as Object, rgbaBackground as Integer) as Void

#### Description

Sets the destBitmap ([roBitmap](doc:robitmap) or [roScreen](doc:roscreen)) and the background color.

#### Parameters

| Name           | Type    | Description                      |
| -------------- | ------- | -------------------------------- |
| destBitmap     | Object  | The bitmap to be drawn.          |
| rgbaBackground | Integer | The background color to be used. |

### Draw() as Void

#### Description

Draws any dirty sprites (that is, whatever is new or has changed since the last Draw). No compositor or sprite operations will be reflected on the display until Draw() is called. After calling Draw(), you must call Finish() (if single buffered) or SwapBuffers() (if double buffered) before the changes will be user visible

### DrawAll() as Void

#### Description

Redraws all sprites even if not dirty. After calling Draw(), you must call Finish() (if single buffered) or SwapBuffers() (if double buffered) before the changes will be user visible

### NewSprite(x as Integer, y as Integer, region as Object, z as Integer) as Object

#### Description

Creates a new sprite, using an roRegion to define the sprite's bitmap. Position the sprite at coordinate x,y. If z is provided, position the sprite in front of all other sprites with equal or lower z value. Sprites with negative z values are not rendered or displayed on the screen.

#### Parameters

| Name   | Type    | Description                                          |
| ------ | ------- | ---------------------------------------------------- |
| x      | Integer | The x-coordinate of the sprite.                      |
| y      | Integer | The y-coordinate of the sprite.                      |
| region | Object  | The region to be used to define the sprite's bitmap. |
| z      | Integer | The z-coordinate of the sprite.                      |

#### Return Value

Returns an [roSprite](doc:rosprite) object.

### NewAnimatedSprite(x as Integer, y as Integer, regionArray as Object, z as Integer) as Object

#### Description

Creates a new sprite that consists of a sequence of frames to be animated. The frames are defined by the regionArray which is an [roArray](doc:roarray) of [roRegions](doc:roregion). Position the sprite at coordinate x,y. If z is provided, position the sprite in front of all other sprites with equal or lower z value

#### Parameters

| Name        | Type    | Description                     |
| ----------- | ------- | ------------------------------- |
| x           | Integer | The x-coordinate of the sprite. |
| y           | Integer | The y-coordinate of the sprite. |
| regionArray | Object  | The frames to be animated.      |
| z           | Integer | The z-coordinate of the sprite. |

#### Return Value

Returns an [roSprite](doc:rosprite) object.

### AnimationTick(duration as Integer) as Void

#### Description

Moves all animated sprites. Sprites will not animate unless you call this function regularly.

#### Parameters

| Name     | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| duration | Integer | The number of ms since the last call. |

### ChangeMatchingRegions(oldRegion as Object, newRegion as Object) as Void

#### Description

Provides a global search and replace of sprite [roRegions](doc:roregion). Replaces regions that match oldRegion with newRegion

#### Parameters

| Name      | Type   | Description                         |
| --------- | ------ | ----------------------------------- |
| oldRegion | Object | The sprite roRegion to be replaced. |
| newRegion | Object | The new sprite roRegion to be used. |

