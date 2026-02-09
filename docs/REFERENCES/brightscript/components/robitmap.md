---
title: "roBitmap"
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


The roBitmap component contains image data and provides an interface (ifDraw2D) for drawing. Bitmaps can be used for a variety of purposes, such as for sprites, compositing, or as double buffers.

It stores four color apps: red, green, blue, and alpha, with 32-bits per pixel. They can be any arbitrary size up to 2048x2048. However, the maximum size bitmap uses 16MB of memory, so there are practical memory limitations which would compel smaller bitmap sizes.  Coordinates (x,y) for 2D bitmaps have an origin (0,0) at the top left. roBitmap is always offscreen. The top roScreen is the only ifDraw2D surface which is displayed. roBitmap represents something that can be drawn onto, as well as something that can be drawn.

Drawing operations into a roBitmap (or other surface with ifDraw2D interface, such as an [roScreen](doc:roscreen)) are clipped so the only the part that is within its bounds is rendered. X,Y coordinates that specify a location in a bitmap to render to (for example, as used by DrawObject() or DrawText() ) may be positive or negative. Negative implies that the left and top of the rendered object will be clipped.The same bitmap cannot be used as a source and a destination in a single DrawObject() call.

There are limitations when using the onscreen bitmap as a source. For example, Alpha blending may not work.

An empty roBitmap object can be created with CreateObject():

``CreateObject("roBitmap", bitmapProps As Object)``

bitmapProps is an roAssociativeArray with Integers width (Integer), height (Integer), and AlphaEnable (Boolean), and name (String) parameters. The contents of an empty RoBitmap are initialized to zero (transparent black).

Example: ``CreateObject("roBitmap", {width:10, height:10, AlphaEnable:false, name:"MyBitmapName"})``

An roBitmap can also load its image data from a file:

``CreateObject("roBitmap", String filename)``

**Example**

~~~
' Draw three bitmaps as fast as we can
'
Screen=CreateObject("roScreen")
bm1=CreateObject("roBitmap", "pkg:/images/myphoto1.jpg")
bm2=CreateObject("roBitmap", "pkg:/images/myphoto2.jpg")
bm3=CreateObject("roBitmap", "pkg:/images/myphoto3.jpg")
bmarray=[bm1, bm2, bm3]
While true
    For each bitmap in bmarray
        Screen.DrawObject(0,0, bitmap)
        Screen.Finish()
    End for
End While
~~~

**Example: Double buffering with roBitmap**

~~~
screen1=CreateObject("roScreen")
off=CreateObject("roBitmap", {width:1280, height:720, AlphaEnable:false})
off.Clear(white)
dfDrawImage(off, "pkg:/images/myimage.png", 50, 50)
off.DrawRect(150, 150, 200, 200, &hFF) ' black, alpha: all source
screen1.DrawObject(0, 0, off)
Screen1.Finish()
~~~

## Supported image formats

See the [Roku streaming specification](doc:streaming-specifications) for the image formats supported by this component.

## Supported interfaces

- [ifDraw2D](doc:ifdraw2d)
