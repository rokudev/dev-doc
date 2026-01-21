---
title: "roRegion"
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



The roRegion component is used to represent a subsection of a bitmap.

The region is specified with an x,y, width, and height as well as a time field for use with animated sprites and a wrap field which causes the region to wrap during scrolling. The roRegion is a common parameter used by the drawing functions of [roBitmap](doc:robitmap). Wrap and Time are used by [roCompositor](doc:roCompositor). roRegion is also used to specify a pretranslation (x,y) for the draw, rotate, and scale operation. The pretranslation is normally used to specify the center of the region. The scaling operation is controlled by the scalemode specified in the region.

This object is created with parameters to initialize the x,y coordinates, width, height. If time and wrap are desired, use the SetTime() and SetWrap().

``CreateObject("roRegion", Object bitmap, Integer x, Integer y, Integer width, Integer height)``


## Supported interfaces

- [ifRegion](doc:ifregion)
