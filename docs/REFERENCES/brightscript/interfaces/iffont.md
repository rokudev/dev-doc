---
title: ifFont
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

| Name                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <Anchor label="roFont" title="roFont" href="/docs/references/brightscript/components/rofont.md">roFont</Anchor> | roFont represents a particular font, from a font-family (eg. Arial), with a particular pixel size (e.g 20), and a particular boldness or italicness |

## Supported methods

### GetOneLineHeight() as Integer

| Name             | Type    | Possible Values             | Description                                                                        |
| ---------------- | ------- | --------------------------- | ---------------------------------------------------------------------------------- |
| GetOneLineHeight | Integer | Number of pixels) as Intger | Returns the number of pixels from one line to the next when drawing with this font |

### GetOneLineWidth(text as String, MaxWidth as Integer) as Integer

| Name            | Type    | Parameters                                                                                                                                                      | Possible Values | Description                 |                                                                                                  |
| :-------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :-------------------------- | :----------------------------------------------------------------------------------------------- |
| GetOneLineWidth | Integer | <table><thead><tr><th>Name</th><th>Type</th></tr></thead><tbody><tr><td>MaxWidth</td><td>Integer</td></tr><tr><td>text</td><td>String</td></tr></tbody></table> |                 | Number of pixels as Integer | Returns the width in pixels occupied by the text (this is capped at the maximum provided value). |

Each glyph and the needed spacing between glyphs is measured. The returned number of pixels will be no larger than MaxWidth. MaxWidth is generally the number of pixels available for rendering on this line.

### GetAscent() as Integer

| Name      | Type    | Possible Values       | Description                       |
| --------- | ------- | --------------------- | --------------------------------- |
| GetAscent | Integer | Pixel value as Intger | Returns the font ascent in pixels |

### GetDescent() as Integer

| Name       | Type    | Possible Values        | Description                        |
| ---------- | ------- | ---------------------- | ---------------------------------- |
| GetDescent | Integer | Pixel value as Integer | Returns the font descent in pixels |

### GetMaxAdvance() as Integer

| Name          | Type    | Possible Values        | Description                                      |
| :------------ | :------ | :--------------------- | :----------------------------------------------- |
| GetMaxAdvance | Integer | Pixel value as Integer | Returns the font maximum advance width in pixels |
