---
title: SimpleLabel
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
Extends [**Group**](doc:group)

The SimpleLabel node class is used to display a single line of text. SimpleLabel is a lightweight complement to the Label node. It supports simplified font style specification and is more memory efficient than the Label node.

The SimpleLabel node class supports:

* Specifying either a built-in system font or a TrueType/OpenType font file
* Specifying the color of the font
* Customizable Horizontal and Vertical origin

The following shows a text layout derived from the SimpleLabel node:

<Image alt="roku815px - simpleLabel node" border={false} src="https://image.roku.com/ZHZscHItMTc2/simplelabel.png" title="simplelabel" />

With ui_resolutions=hd specified in the manifest, the following displays the text string "Application Development Made Easy!" using the medium bold system font, centered horizontally on display, and with the baseline of the text at the vertical center of the display.

```
<?xml version="1.0" encoding="utf-8" ?>

<!--********** Copyright 2018 Roku Corp.  All Rights Reserved. **********-->

<component name="simpleLabeltest" extends="Group" >

<script type="text/brightscript" >
<![CDATA[

  sub init()
    m.top.setFocus(true)
  end sub

]]>
</script>

<SimpleLabel
  id="testLabel"
  font="fontUri:MediumBoldSystemFont"
  text = "Application Development Made Easy!"
  horizOrigin = "left"
  vertOrigin = "baseline"
  translation="[640,360]" />

</component>
```

### Text Origin

The SimpleLabel node uses the horizOrigin and vertOrigin fields to control the origin of the coordinate system for the node.

#### Horizontal Origin

The horizOrigin field allows controlling the x=0 position of the SimpleLabel node's local coordinate system.

There are three possible values for the horizOrigin field:

* left
  The left edge of the text is located at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

* center
  The horizontal center of the text is positioned at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

* right
  The right edge of the text is positioned at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

#### Vertical Origin

The vertOrigin field allows controlling the y=0 position of the SimpleLabel node's local coordinate system.

There are four possible values for the vertOrigin field:

* top
  The top edge of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

* center
  The vertical center of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

* baseline
  The baseline of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

* bottom
  The bottom edge of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

#### SimpleLabel Origin Example

The following image illustrates the horizontal and vertical origin options supported by the SimpleLabel node. The manifest includes ui_resolutions=fhd, so all coordinate values are in the range 1920x1080.

* On the top left, in the image below, a Group node is displayed that has a 1-pixel wide Rectangle node and three SimpleLabel nodes as children. The Group node's x-translation is set to 200, and the x translation of the Rectangle and all three SimpleLabel nodes is set to 0.
  * The Rectangle serves as a visual reference of where x=0 is located in its parent Group's local coordinate system.
  * The three SimpleLabel nodes illustrate each option for the horizOrigin field (i.e., SimpleLabel horizontal origin at the left edge, center, and right edge of the text).
* In the bottom of the image, a Group node is displayed that has a 1-pixel tall Rectangle node and four SimpleLabel nodes as children.
  * The Group node's y-translation is set to 480, and the y translation of the Rectangle and all four SimpleLabel nodes is set to 0.
  * The Rectangle serves as a visual reference of where y=0 is located in its parent Group's local coordinate system.
  * The four SimpleLabel nodes illustrate each option for the vertOrigin field (i.e., SimpleLabel vertical origin at the top edge, center, baseline, and bottom edge of the text).

<Image alt="roku815px - simple_label_origin" border={false} src="https://image.roku.com/ZHZscHItMTc2/simpleLabelOriginExample.jpg" title="simplelabel origin example" />

### Rotation

Rotation of SimpleLabel nodes is supported. The center of rotation is determined by the origin point as determined by the horizOrigin and vertOrigin fields. On platforms that do not support OpenGL, only rotations divisible by 90 are supported (e.g., 0, 90, 180, and 270 degrees). For those platforms, other values are rendered using the nearest 90-degree value (e.g., 103 degrees is rendered as a 90-degree rotation, -262 degrees is rendered as a -270 rotation).

## Fields

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Default</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">text</td>
<td class="short-line">string</td>
<td class="short-line">""</td>
<td class="short-line">Specifies the text to be displayed</td>
</tr>
<tr>
<td class="short-line">color</td>
<td class="short-line">color</td>
<td class="short-line">0xddddddff</td>
<td class="short-line">Specifies the text color</td>
</tr>
<tr>
<td class="short-line">fontUri</td>
<td class="short-line">string</td>
<td class="short-line">system default</td>
<td class="long-line">Specifies either a path to a TrueType or OpenType font file or a built-in system font name.<br><br>For TrueType or OpenType font files, the file must be included with the application (e.g. <code>pkg:/fonts/SomeFontFile.ttf</code>). If no fontUri is specified, the System Default font is used.<br><br>The table below shows the options for using built-in system fonts. The "<strong>Fixed Size?"</strong> column indicates whether the <code>fontSize</code> field of the <strong>SimpleLabel</strong> is respected or not. For those where the size is fixed, the font size cannot be modified.<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">fontUri String</th>
<th class="short-line">Fixed Size?</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line"><code>font:SmallestSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:SmallSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:MediumSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:LargeSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:SmallestBoldSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:SmallBoldSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:MediumBoldSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:LargeBoldSystemFont</code></td>
<td class="short-line">Yes</td>
</tr>
<tr>
<td class="short-line"><code>font:SystemFontFile</code></td>
<td class="short-line">No</td>
</tr>
<tr>
<td class="short-line"><code>font:BoldSystemFontFile</code></td>
<td class="short-line">No</td>
</tr>
<tr>
<td class="short-line">System Default (field not set)</td>
<td class="short-line">Yes</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">fontSize</td>
<td class="short-line">integer</td>
<td class="short-line">system default</td>
<td class="long-line">Specifies the size of the font in points. As noted in the description of the <code>fontUri</code> field, the use of fixed size system fonts ignores the value of the <code>fontSize</code> field.</td>
</tr>
<tr>
<td class="short-line">horizOrigin</td>
<td class="short-line">string</td>
<td class="short-line">left</td>
<td class="long-line">See <a href="https://roku-ent.readme.io/dev/docs/simplelabel.md#SimpleLabel-HorizontalOrigin"><strong>Horizontal Origin</strong></a></td>
</tr>
<tr>
<td class="short-line">vertOrigin</td>
<td class="short-line">string</td>
<td class="short-line">top</td>
<td class="long-line">See <a href="https://roku-ent.readme.io/dev/docs/simplelabel.md#SimpleLabel-VerticalOrigin"><strong>Vertical Origin</strong></a></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

## Sample app

[LabelExample](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/LabelExample) is a sample app demonstrating Label in action.
