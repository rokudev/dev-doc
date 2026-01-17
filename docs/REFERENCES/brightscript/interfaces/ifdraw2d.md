---
title: "ifDraw2D"
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


Coordinates (x,y) for this interface are based on an origin (0,0) at the top, left. (This is common for 2D drawing APIs, but is different than OpenGL's default coordinate system).

Bitmap pixel values and color values are always represented as 32-bit integer RGBA color values.  That is, red is in the most significant byte and alpha is in the least significant byte.


## Implemented by

| Name     | Description                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") | The roBitmap component contains image data and provides an interface (ifDraw2D) for drawing                                  |
| [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") | The roRegion component is used to represent a subsection of a bitmap                                                         |
| [roScreen](/docs/references/brightscript/components/roscreen.md "roScreen") | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from |


## Supported methods

### Clear(rgba as Integer) as Void

#### Description

Clears the bitmap, and fills it with the specified RGBA color.

> The alpha channel will be filled into the bitmap, even when not used. Once AlphaEnable is set to true, the alpha channel will be taken into account when using this bitmap as a source. See SetAlphaEnable() for more information on alpha blending.

#### Parameters

| Name | Type    | Description                                   |
| ---- | ------- | --------------------------------------------- |
| rgba | Integer | The RGBA color to be used to fill the bitmap. |

> Clear() is not the same as a DrawRect() for the entire bitmap. Clear() fills the bitmap with the specified RGBA; it does not perform any alpha blending operations.

### GetWidth() as Integer

#### Description

Gets the width of the bitmap.

#### Return Value

The width of the bitmap in pixels.

### GetHeight() as Integer

#### Description

Gets the height of the bitmap in pixels.

#### Return Value

The height of the bitmap in pixels.

### GetByteArray(x as Integer, y as Integer, width as Integer, height as Integer) as Object

#### Description

Gets the RGBA pixel values for the specified rectangle.

#### Parameters

| Name   | Type    | Description                        |
| ------ | ------- | ---------------------------------- |
| x      | Integer | The x-coordinate of the rectangle. |
| y      | Integer | The y-coordinate of the rectangle. |
| width  | Integer | The width of the rectangle.        |
| height | Integer | The height of the rectangle.       |

#### Return Value

An roByteArray representing the RGBA pixel values for the specified rectangle.

### GetPng(x as Integer, y as Integer, width as Integer, height as Integer) as Object

#### Description

Gets PNG image data for the specified area of the bitmap. The PNG is in 32-bit RGBA format.

#### Parameters

| Name   | Type    | Description                        |
| ------ | ------- | ---------------------------------- |
| x      | Integer | The x-coordinate of the rectangle. |
| y      | Integer | The y-coordinate of the rectangle. |
| width  | Integer | The width of the rectangle.        |
| height | Integer | The height of the rectangle.       |

#### Return Value

An roByteArray object containing PNG image data for the specified area of the bitmap. If the coordinates are out of bounds, or the PNG conversion fails for any reason, then invalid is returned

#### Example

~~~
Function SaveTestPng()
    w = 200 : h = 100
    bm = CreateObject("roBitmap", &#123;width: w, height: h, AlphaEnable: true&#125;)
    bm.DrawRect(10, 10, w-20, h-20, &hFF0000FF)
    bm.Finish()
    ba = bm.GetPng(0, 0, w, h)
    ba.WriteFile("tmp:/test.png")
 End Function
~~~

### GetAlphaEnable() as Boolean

#### Description

Checks if the alpha blending is enabled.

#### Return Value

A flag indicating whether alpha blending is enabled.

### SetAlphaEnable(enable as Boolean) as Void

#### Description

Enables alpha blending when the source bitmap is the destination. The setting of the source bitmap's alpha enable is ignored.

When alpha blending is enabled, each pixel in the destination bitmap is set by combining the destination and source pixels according to the alpha value in the source bitmap (or rectangle). The destination alpha is not used. (In OpenGL this is referred to as GL_ONE_MINUS_SRC_ALPHA).

By default, alpha blending is off. Even when alpha blending is off, the alpha value is still present in the bitmap, and it must be passed when a function parameter is a color, which is always RGBA.

#### Parameters

| Name   | Type    | Description                                          |
| ------ | ------- | ---------------------------------------------------- |
| enable | Boolean | A flag specifying whether alpha blending is enabled. |

#### Example

~~~
Function Main()
    s=CreateObject("roScreen")
    ' Clear to White with alpha fully opaque
    ' but alpha not actually ever used since it is the bottom most plane
    ' alpha is only looked at on "source" planes, not "destination".
    s.Clear(&hFFFFFFFF)

    ' AlphaEnable must be enabled in the destination surface to have effect.
    s.SetAlphaEnable(true)
    bm=CreateObject("roBitmap", &#123;width:100, height: 100, alphaenable: false&#125; )
    bm.Clear(&h0000FFFF) 'blue, fully opaque alpha

    ' draw a blue rect in the upper left corner
    s.DrawObject(0,0, bm)
    s.Finish()
    Sleep(2000)
    s.Clear(&hFFFFFFFF)
    bm.Clear(&h0000FF00) 'blue, fully transparent alpha

    ' draw a blue rect in the upper left corner
    ' but, since it is transparent, nothing will appear on the screen.
    s.DrawObject(0, 0, bm)
    s.Finish()
    Sleep(2000)
 End Function
~~~

### DrawRect(x as Integer, y as Integer, width as Integer, height as Integer, rgba as Integer) as Void

#### Description

Fills the specified rectangle from left (x), top (y) to right (x + width), bottom (y + height) with the RGBA color.

#### Parameters

| Name   | Type    | Description                                      |
| ------ | ------- | ------------------------------------------------ |
| x      | Integer | The x-coordinate of the rectangle.               |
| y      | Integer | The y-coordinate of the rectangle.               |
| width  | Integer | The width of the rectangle.                      |
| height | Integer | The height of the rectangle.                     |
| rgba   | Integer | The RGBA color to be used to fill the rectangle. |

### DrawPoint(x as Integer, y as Integer, size as Float, rgba as Integer) as Void

#### Description

Draws a point at (x,y) with the given size and RGBA color.

#### Parameters

| Name | Type    | Description                    |
| ---- | ------- | ------------------------------ |
| x    | Integer | The x-coordinate of the point. |
| y    | Integer | The y-coordinate of the point. |
| size | Float   | The size of the point.         |
| rgba | Integer | The RGBA color of the point.   |

### DrawLine(xStart as Integer, yStart as Integer, xEnd as Integer,  yEnd as Integer, rgba as Integer) as Void

#### Description

Draws a line from (xStart, yStart) to (xEnd, yEnd) with RGBA color.

#### Parameters

| Name   | Type    | Description                                 |
| ------ | ------- | ------------------------------------------- |
| xStart | Integer | The x-coordinate of the line's start point. |
| yStart | Integer | The y-coordinate of the line's start point. |
| xEnd   | Integer | The x-coordinate of the line's end point.   |
| yEnd   | Integer | The y-coordinate of the line's end point.   |
| rgba   | Integer | The RGBA color of the line.                 |

### DrawObject(x as Integer, y as Integer, src as Object) as Boolean

#### Description

Draws the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object, at position x,y.

#### Parameters

| Name | Type    | Description                                                  |
| ---- | ------- | ------------------------------------------------------------ |
| x    | Integer | The x-coordinate of the source object.                       |
| y    | Integer | The y-coordinate of the source object.                       |
| src  | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawScaledObject(x as Integer, y as Integer, scaleX as Float, scaleY as Float, src as Object) as Boolean

#### Description

Draws the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object, at position x,y, scaled in the x direction by scaleX and in the y direction by scaleY. scaleX and scaleY should each be greater than zero and less than one to reduce the object size, or greater than one to increase the object size

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| x      | Integer | The x-coordinate of the source object.                       |
| y      | Integer | The y-coordinate of the source object.                       |
| scaleX | Float   | The x direction in which the source object is to be scaled.  |
| scaleY | Float   | The y direction in which the source object is to be scaled.  |
| src    | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawScaledObject(x as Integer, y as Integer, scaleX as Float, scaleY as Float, src as Object, rgba as Integer) as Boolean

#### Description

Draws the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object, at position x,y, scaled in the x direction by scaleX and in the y direction by scaleY. scaleX and scaleY should each be greater than zero and less than one to reduce the object size, or greater than one to increase the object size.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| x      | Integer | The x-coordinate of the source object.                       |
| y      | Integer | The y-coordinate of the source object.                       |
| scaleX | Float   | The x direction in which the source object is to be scaled.  |
| scaleY | Float   | The y direction in which the source object is to be scaled.  |
| src    | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |
| rgba   | Integer | The RGBA color of the source object.                         |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawRotatedObject(x as Integer, y as Integer, theta as Float, src as Object) as Boolean

#### Description

Draws the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object, at position x,y rotated by angle theta degrees.

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| x     | Integer | The x-coordinate of the source object.                       |
| y     | Integer | The y-coordinate of the source object.                       |
| Theta | Float   | The position which to rotate the source object. This may be 0, 90, 180, and 270 degrees. |
| src   | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawTransformedObject(x as Integer, y as Integer, theta as Float, scaleX as Float, scaleY as Float, src as Object) as Boolean

#### Description

Draws and then scales and rotates the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object;  at position x,y; scaled in the x direction by scaleX and in the y direction by scaleY; and rotated by angle theta degrees.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| x      | Integer | The x-coordinate of the source object.                       |
| y      | Integer | The y-coordinate of the source object.                       |
| Theta  | Float   | The position which to rotate the source object. This may be 0, 90, 180, and 270 degrees. |
| scaleX | Float   | The x direction in which the source object is to be scaled.  |
| scaleY | Float   | The y direction in which the source object is to be scaled.  |
| src    | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawTransformedObject(x as Integer, y as Integer, theta as Float, scaleX as Float, scaleY as Float, src as Object, rgba as Integer) as Boolean

#### Description

Draws and then scales and rotates the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object;  at position x,y; scaled in the x direction by scaleX and in the y direction by scaleY; and rotated by angle theta degrees.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| x      | Integer | The x-coordinate of the source object.                       |
| y      | Integer | The y-coordinate of the source object.                       |
| Theta  | Float   | The position which to rotate the source object. This may be 0, 90, 180, and 270 degrees. |
| scaleX | Float   | The x direction in which the source object is to be scaled.  |
| scaleY | Float   | The y direction in which the source object is to be scaled.  |
| src    | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |
| rgba   | Integer | The RGBA color of the source object.                         |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawRotatedObject(x as Integer, y as Integer, theta as Float, src as Object, rgba as Integer) as Boolean

#### Description

Draws and rotates the source object, where src is an [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object at position x,y, rotated by angle theta degrees.

#### Parameters

| Name  | Type    | Description                                                  |
| ----- | ------- | ------------------------------------------------------------ |
| x     | Integer | The x-coordinate of the source object.                       |
| y     | Integer | The y-coordinate of the source object.                       |
| Theta | Float   | The position which to rotate the source object. This may be 0, 90, 180, and 270 degrees. |
| src   | Object  | The [roBitmap](/docs/references/brightscript/components/robitmap.md "roBitmap") or an [roRegion](/docs/references/brightscript/components/roregion.md "roRegion") object to be drawn. |
| rgba  | Integer | The RGBA color of the source object.                         |

#### Return Value

A flag indicating whether the object was successfully drawn.

### DrawText(text as String, x as Integer, y as Integer, rgba as Integer, font as Object) as Boolean

#### Description

Draws the text at position (x,y) using the specified RGBA color and [roFont](/docs/references/brightscript/components/rofont.md "roFont") font object. Text is drawn anti-aliased. The background image/color behind the text will show through the spaces and holes in the text. To have the text erase the background, make a call to [DrawRect()](#drawrectx-as-integer-y-as-integer-width-as-integer-height-as-integer-rgba-as-integer-as-void) before calling DrawText(). The size, bold, and italic attributes are specified when creating the [roFont](/docs/references/brightscript/components/rofont.md "roFont").

#### Parameters

| Name | Type    | Description                                                  |
| ---- | ------- | ------------------------------------------------------------ |
| text | String  | The text to be drawn.                                        |
| x    | Integer | The x-coordinate of the source object.                       |
| y    | Integer | The y-coordinate of the source object.                       |
| rgba | Integer | The color of the text.                                       |
| font | Object  | The [roFont](/docs/references/brightscript/components/rofont.md "roFont") object to be used for the text. |

#### Return Value

A flag indicating whether the object was successfully drawn.

### Finish() as Void

#### Description

Realizes the bitmap by finishing all queued draw calls. Until Finish() is called, prior graphics operations may not be user visible. For example, they may be in the graphics display pipeline, or in a server queue.

> This method is synchronous; it does not return until all graphic operations are complete.

> When working with an [roScreen](/docs/references/brightscript/components/roscreen.md "roScreen") object, the [ifScreen.SwapBuffers()](/docs/references/brightscript/interfaces/ifscreen.md#swapbuffers-as-void) method should be used instead of this method.