---
title: "ifSprite"
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

| Name     | Description |
| -------- | ----------- |
| [roSprite](doc:rosprite) | This component is associated with a managing roCompositor object |


## Supported methods

### MoveTo(x as Integer, y as Integer) as Void

#### Description

Move the sprite to a new set of coordinates. 

#### Parameters

| Name | Type    | Description                                          |
| ---- | ------- | ---------------------------------------------------- |
| x    | Integer | The x-coordinate to which the sprite is to be moved. |
| y    | Integer | The y-coordinate to which the sprite is to be moved. |

### MoveOffset(xOffset as Integer, yOffset as Integer) as Void

#### Description

Move the sprite to a new position based on offsets to the current position.

#### Parameters

| Name    | Type    | Description                                          |
| ------- | ------- | ---------------------------------------------------- |
| xOffset | Integer | The offset from the current x-coordinate to be used. |
| yOffset | Integer | The offset from the current y-coordinate to be used. |

### GetX() as Integer

#### Description

Returns the x-coordinate of the sprite.

#### Return Value

The x-coordinate of the sprite.

### GetY() as Integer

#### Description

Returns the y-coordinate of the sprite.

#### Return Value

The y-coordinate of the sprite.

### SetZ(z as Integer) as Void

#### Description

Sets the z value of the sprite. The z value defines the order in which sprites are drawn. Sprites with higher z values are drawn after (in front of) sprites with lower z values. The default z value is 0.

#### Parameters

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| z    | Integer | The z value to be used for the sprite. |

### GetZ() as Integer

#### Description

Returns the z value of the sprite.

#### Return Value

The z value of the sprite.

### SetDrawableFlag(enable as Boolean) as Void

#### Description

Sets whether this sprite is drawable or just used for collision tests. An undrawable sprite can be used to define a region in the background that needs collision testing. It can also be used as an auxiliary collision region for a more complex sprite defined in another sprite. 

The default value is true, and it is set when a sprite is created.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>enable</td>
<td>Boolean</td>
<td>A flag specifying whether the sprite is drawable:<br /><br />True = The sprite is drawable. <br /><br />False = The sprite may only be used for collision tests.</td>
</tr>
</tbody>
</table>


### GetDrawableFlag() as Boolean

#### Description

Checks whether the sprite is drawable. 

#### Return Value

A flag indicating whether the sprite is drawable. 

### SetMemberFlags(flags as Integer) as Void

#### Description

Defines the sprite membership though flags. The  flags are used with CollidableFlags to define which sprites are allowed to collide.

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| flags | Integer | Enables "levels" of collision detection, as only sprites with a member flag bit that matches a collidable flag bit will be checked for collisions. The default value is 1. |

### GetMemberFlags() as Integer

#### Description

Returns the value of member flags variable.

#### Return Value

The value of the member flag variable.

### SetCollidableFlags(flags as Integer) as Void

#### Description

Sets bits to determine which sprites will be checked for collisions. The sprites that are checked must have the corresponding bits sets in their MemberFlags. 

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| flags | Integer | The bits to be set for determining which sprites to check for collisions. The default value is 1. |

### GetCollidableFlags() as Integer

#### Description

Returns the value of collidable flags variable.

#### Return Value

The value of the flag variable.

### SetRegion(region as Object) as Void

#### Description

Sets the region of the sprite to the passed roRegion object. If one already is set, it is replaced.

#### Parameters

| Name      | Type  | Description                                                                                                 |
| --------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| region | Object | The roRegion object to be used as the region for the sprite. |

### GetRegion() as Object

#### Description

Returns an roRegion object that specifies the region of a bitmap that is the sprite's display graphic.

#### Return Value

roRegion object.

### OffsetRegion(x as Integer, y as Integer, width as Integer, height as Integer) as Void

#### Description

Adjusts the part of an [roRegion](doc:roregion)'s bitmap that is being displayed as the sprite. Wrap is taken into consideration.

#### Parameters

| Name   | Type    | Description                      |
| ------ | ------- | -------------------------------- |
| x      | Integer | The x-coordinate for the bitmap. |
| y      | Integer | The y-coordinate for the bitmap. |
| width  | Integer | The width of the bitmap.         |
| height | Integer | The height of the bitmap.        |

### SetData(data as Dynamic) as Void

#### Description

Associates user-defined data with the sprite. The data can be any type including intrinsic types or objects.

#### Parameters

| Name   | Type    | Description |
| ----   | ------- | ------- |
| data      | Dynamic | The user-defined data to be associated with the sprite. |

### GetData() as Dynamic

#### Description

Returns any user data associated with the sprite previously set via the [SetData()](#setdatadata-as-dynamic-as-void) method.

#### Return Value

Any user-defined data associated with the sprite. Returns invalid if there is no user data associated with this sprite.

### CheckCollision() as Object

#### Description

Returns the first [roSprite](doc:rosprite) that this sprite collides with. 

#### Return Value

An roSprite object. If there are no collisions, this method returns invalid.

### CheckMultipleCollisions() as Object

#### Description

Returns an roArray of all roSprite objects this sprite collides sprites. The collision area is the entire sprite's bounding box, and the sprites must actually be overlapped to detect a collision. That is, if a fast moving sprite moves "through" another sprite without actually overlapping when this call is made, no collision is detected.

#### Return Value

roArray of colliding sprites. If there are no collisions, this method returns invalid.

### Remove() as Void

#### Description

Removes the sprite from the managing roComposite object and deletes the sprite.
