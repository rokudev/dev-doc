---
title: "Font"
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

# Font

Extends [**Node**](/docs/references/scenegraph/node.md)

The Font node class specifies the font to be used by a Label node, or any other nodes that render text.

Nodes that use fonts include a field that stores a Font node. The font to use is specified by creating a Font node, and setting its uri and size fields.

The uri field can be set to any TrueType/OpenType font file. For example, to specify a font in XML markup:

~~~
<Label>
  <Font role = "font" uri = "pkg:/fonts/font.ttf" size = "24" />
</Label>
~~~

A default system font can also be specified, such as in the following:

~~~
<Label id = "myLabel"
  width = "200"
  height = "200"
  text = "Hello Label"
  font = "font:MediumBoldSystemFont" 
  />
~~~

Below is the list of all the possible system font values:

- TinySystemFont
- TinyBoldSystemFont
- SmallerSystemFont
- SmallerBoldSystemFont
- SmallestSystemFont
- SmallestBoldSystemFont
- SmallSystemFont
- SmallBoldSystemFont
- MediumSystemFont
- MediumBoldSystemFont
- LargeSystemFont
- LargeBoldSystemFont
- LargestSystemFont
- ExtraLargeSystemFont
- ExtraLargeBoldSystemFont
- BadgeSystemFont

The font can also be specified in BrightScript, for example:

~~~
label = CreateObject("roSGNode", "Label")
font  = CreateObject("roSGNode", "Font")
font.uri = "pkg:/fonts/font.ttf"
font.size = 24
label.font = font
~~~

## Fields
