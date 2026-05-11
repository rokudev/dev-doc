---
title: roFont
excerpt: 'Font object with family, pixel size, and boldness created via roFontRegistry'
deprecated: false
hidden: false
metadata:
  title: 'roFont'
  description: 'roFont represents a particular font from a font-family such as Arial, with a particular pixel size and boldness or italicness, created via roFontRegistry.'
  robots: index
next:
  description: ''
---
roFont represents a particular font, from a font-family (eg. Arial), with a particular pixel size (e.g 20), and a particular boldness or italicness.

It is used in conjunction with [roFontRegistry](doc:rofontregistry) to create and manage fonts. Font files are registered with roFontRegistry and then various methods in roFontRegistry can be used to create roFont objects.  Applications should not create roFonts with CreateObject() but should always use roFontRegistry to create them. roFont objects in turn can be used with [ifDraw2D.DrawText](doc:ifdraw2d#drawtexttext-as-string-x-as-integer-y-as-integer-rgba-as-integer-font-as-object-as-boolean) to draw text on the screen or into bitmaps.

**Example**

```
screen = CreateObject("roScreen")
white = &hFFFFFFFF
blue = &h0000FFFF
font_registry = CreateObject("roFontRegistry")
font = font_registry.GetDefaultFont()

' Draw white text in a blue rectangle
text = "Hello world"
w = font.GetOneLineWidth(text, screen.GetWidth())
h = font.GetOneLineHeight()
x = 200
y = 100
border = 8
screen.DrawRect(x, y, w + 2*border, h + 2*border, blue)
screen.DrawText(text, x+border, y+border, white, font)
```

## Supported interfaces

* [ifFont](doc:iffont)
