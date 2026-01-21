---
title: "ifRegion"
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


## Implemented by

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| [roRegion](doc:roregion) | The roRegion component is used to represent a subsection of a bitmap |


## Supported methods

### GetBitmap() as Object

#### Description

Returns the roBitmap object of the bitmap to which this region refers. A region is always a section of a bitmap.

#### Return Value

An roBitmap object of the bitmap. 

### GetX() as Integer

#### Description

Returns the x coordinate of the region in its bitmap.

#### Return Value

The x coordinate value

### GetY() as Integer

#### Description

Returns the y coordinate of the region in its bitmap.

#### Return Value

The y coordinate value

### GetWidth() as Integer

#### Description

Returns the width of the region.

#### Return Value

The width of the region.

### GetHeight() as Integer

#### Description

Returns the height of the region.

#### Return Value

The height of the region.

### Offset(x as Dynamic, y as Dynamic, w as Dynamic, h as Dynamic) as Void

#### Description

Adds the passed parameters x,y, w, and h to the values of those roRegion fields. Respects the wrap setting when adjusting the fields by the offsets.

#### Parameters

| Name | Type    | Description                     |
| ---- | ------- | ------------------------------- |
| x    | Dynamic | The x-coordinate of the region. |
| y    | Dynamic | The y-coordinate of the region. |
| w    | Dynamic | The width of the region.        |
| h    | Dynamic | The height of the region.       |

### Set(srcRegion as Object) as Void

#### Description

Initializes the fields of this region to be the same as the values of the fields in the srcRegion.

#### Parameters

| Name      | Type   | Description         |
| --------- | ------ | ------------------- |
| srcRegion | Object | An roRegion object. |

### Copy() as Object

#### Description

Returns a newly created copy of the region as a new [roRegion](doc:roregion) object.

#### Return Value

An roRegion Object.

### SetWrap(wrap as Boolean) as Void

#### Description

Wraps any part of a region that extends beyond the bounds of its bitmap to the other side of the bitmap and renders it there.

#### Parameters

| Name | Type    | Description                                                  |
| ---- | ------- | ------------------------------------------------------------ |
| wrap | Boolean | A flag specifying whether wrapping of the region is enabled. If this flag is set to false, the part of the region beyond the bounds of its bitmap is not rendered. |

### GetWrap() as Boolean

#### Description

Returns if the region can be wrapped.

#### Parameters

A flag indicating whether wrapping of the region is enabled. 

### SetTime(time as Integer) as Void

#### Description

Sets the duration of each frame of any animated sprite that uses this region.

#### Parameters

A flag indicating whether wrapping of region is enabled. 

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| time | Integer | The "frame hold time" in milliseconds. |

### GetTime() as Integer

| Name    | Return Type    | Return Value        | Description           |
| ------- | ------- | ---------------------- | --------------------- |
| GetTime | Integer | Milliseconds - Integer | Returns the "frame hold time" in milliseconds |

### SetPretranslation(x as Integer, y as Integer) as Void

#### Description

Sets the pre-translation for DrawObject, DrawRotatedObject, and DrawScaledObject.

#### Parameters

| Name | Type    | Description                  |
| ---- | ------- | ---------------------------- |
| x    | Integer | The pre-translation x-value. |
| y    | Integer | The pre-translation y-value. |

### GetPretranslationX() as Integer

#### Description

Returns the pre-translation x value. 

#### Return Value

The pre-translation x value.

### GetPretranslationY() as Integer

#### Description

Returns the pre-translation y value. 

#### Return Value

The pre-translation y value.

### SetScaleMode(mode as Integer) as Void

#### Description

Sets the scaling mode used for DrawScaledObject.

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
<td>mode</td>
<td>Integer</td>
<td>The scaling mode, which may be one of the following values: <ul><li>0 = fast scaling operation (may have jaggies)</li><li>1 = smooth scaling operation (may be slow)</li></ul></td>
</tr>
</tbody>
</table>



### GetScaleMode() as Integer

#### Description

Returns the scaling mode.

#### Return Value

The scaling mode, which may be one of the following values:

- 0 = fast scaling operation (may have jaggies)
- 1 = smooth scaling operation (may be slow)

### SetCollisionType(collisiontype as Integer) as Void

#### Description

Sets the type of region to be used for collision tests with this sprite.

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
<td>collisiontype</td>
<td>Integer</td>
<td>The collision type, which may be one of the following values: <ul><li>Type 0– Use the entire defined region of the sprite. Type 0 is the default</li><li>Type 1 – Use the defined rectangular region specified by the SetCollisionRectangle() method</li><li>Type 2 – Use a circular region specified by the SetCollisionCircle() method</li></ul></td>
</tr>
</tbody>
</table>



### GetCollisionType() as Integer

#### Description

Returns the collision type.

#### Return Value

The collision type, which may be one of the following values:

- Type 0– Use the entire defined region of the sprite. Type 0 is the default
- Type 1 – Use the defined rectangular region specified by the SetCollisionRectangle() method
- Type 2 – Use a circular region specified by the SetCollisionCircle() method

### SetCollisionRectangle(xOffset as Integer, yOffset as Integer, width as Integer, height as Integer) as Void

#### Description

Sets the collision rectangle used for type-1 collision tests. The upper left corner of the rectangle is the (x,y) position of the sprite plus the specified offsets. The width and height specify the size of the rectangle.

#### Parameters

| Name    | Type    | Description                                   |
| ------- | ------- | --------------------------------------------- |
| xOffset | Integer | The  offset for the x position of the sprite. |
| yOffset | Integer | The  offset for the y position of the sprite. |
| width   | Integer | The width of the rectangle.                   |
| height  | Integer | The height of the rectangle.                  |

### SetCollisionCircle(xOffset as Integer, yOffset as Integer, Radius as Integer) as Void

#### Description

Sets the collision circle used for type-2 collision tests. The center of the circle is the  (x,y) position of the sprite plus the specified offsets. The radius specifies the size of the circle.

#### Parameters
