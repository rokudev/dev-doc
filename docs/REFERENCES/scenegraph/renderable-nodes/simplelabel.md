---
title: "SimpleLabel"
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


Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The SimpleLabel node class is used to display a single line of text. SimpleLabel is a lightweight complement to the Label node. It supports simplified font style specification and is more memory efficient than the Label node.

The SimpleLabel node class supports:

- Specifying either a built-in system font or a TrueType/OpenType font file
- Specifying the color of the font
- Customizable Horizontal and Vertical origin

The following shows a text layout derived from the SimpleLabel node:

![roku815px - simpleLabel node](https://image.roku.com/ZHZscHItMTc2/simplelabel.png "simplelabel")


With ui_resolutions=hd specified in the manifest, the following displays the text string "Application Development Made Easy!" using the medium bold system font, centered horizontally on display, and with the baseline of the text at the vertical center of the display.

~~~
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
~~~

### Text Origin

The SimpleLabel node uses the horizOrigin and vertOrigin fields to control the origin of the coordinate system for the node.

#### Horizontal Origin

The horizOrigin field allows controlling the x=0 position of the SimpleLabel node's local coordinate system.

There are three possible values for the horizOrigin field:

- left
  The left edge of the text is located at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

- center
  The horizontal center of the text is positioned at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

- right
  The right edge of the text is positioned at the 0 x-coordinate position of the SimpleLabel node's local coordinate system

#### Vertical Origin

The vertOrigin field allows controlling the y=0 position of the SimpleLabel node's local coordinate system.

There are four possible values for the vertOrigin field:

- top
  The top edge of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

- center
  The vertical center of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

- baseline
  The baseline of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

- bottom
  The bottom edge of the text is located at the 0 y-coordinate position of the SimpleLabel node's local coordinate system

#### SimpleLabel Origin Example

The following image illustrates the horizontal and vertical origin options supported by the SimpleLabel node. The manifest includes ui_resolutions=fhd, so all coordinate values are in the range 1920x1080.

- On the top left, in the image below, a Group node is displayed that has a 1-pixel wide Rectangle node and three SimpleLabel nodes as children. The Group node's x-translation is set to 200, and the x translation of the Rectangle and all three SimpleLabel nodes is set to 0.
  - The Rectangle serves as a visual reference of where x=0 is located in its parent Group's local coordinate system.
  - The three SimpleLabel nodes illustrate each option for the horizOrigin field (i.e., SimpleLabel horizontal origin at the left edge, center, and right edge of the text).
- In the bottom of the image, a Group node is displayed that has a 1-pixel tall Rectangle node and four SimpleLabel nodes as children.
  - The Group node's y-translation is set to 480, and the y translation of the Rectangle and all four SimpleLabel nodes is set to 0.
  - The Rectangle serves as a visual reference of where y=0 is located in its parent Group's local coordinate system.
  - The four SimpleLabel nodes illustrate each option for the vertOrigin field (i.e., SimpleLabel vertical origin at the top edge, center, baseline, and bottom edge of the text).

![roku815px - simple_label_origin](https://image.roku.com/ZHZscHItMTc2/simpleLabelOriginExample.jpg "simplelabel origin example")

### Rotation

Rotation of SimpleLabel nodes is supported. The center of rotation is determined by the origin point as determined by the horizOrigin and vertOrigin fields. On platforms that do not support OpenGL, only rotations divisible by 90 are supported (e.g., 0, 90, 180, and 270 degrees). For those platforms, other values are rendered using the nearest 90-degree value (e.g., 103 degrees is rendered as a 90-degree rotation, -262 degrees is rendered as a -270 rotation).

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>string</td>
<td>""</td>
<td>Specifies the text to be displayed</td>
</tr>
<tr>
<td>color</td>
<td>color</td>
<td>0xddddddff</td>
<td>Specifies the text color</td>
</tr>
<tr>
<td>fontUri</td>
<td>string</td>
<td>system default</td>
<td>Specifies either a path to a TrueType or OpenType font file or a built-in system font name.<br /><br />For TrueType or OpenType font files, the file must be included with the application (e.g. <code>pkg:/fonts/SomeFontFile.ttf</code>). If no fontUri is specified, the System Default font is used.<br /><br />The table below shows the options for using built-in system fonts. The "<strong>Fixed Size?"</strong> column indicates whether the <code>fontSize</code> field of the <strong>SimpleLabel</strong> is respected or not. For those where the size is fixed, the font size cannot be modified.<table><thead><tr><th>fontUri String</th><th>Fixed Size?</th></tr></thead><tbody><tr><td><code>font:SmallestSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:SmallSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:MediumSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:LargeSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:SmallestBoldSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:SmallBoldSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:MediumBoldSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:LargeBoldSystemFont</code></td><td>Yes</td></tr><tr><td><code>font:SystemFontFile</code></td><td>No</td></tr><tr><td><code>font:BoldSystemFontFile</code></td><td>No</td></tr><tr><td>System Default (field not set)</td><td>Yes</td></tr></tbody></table><p><br />The following <a href="/docs/references/scenegraph/layout-group-nodes/group.md#fields" title="Fields">Fields</a> derived from the Group base class can also be used:</p><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Access Permission</th><th>Description</th></tr></thead><tbody><tr><td>scaleRotateCenter</td><td>vector2d</td><td>[0.0,0.0]</td><td>READ_WRITE</td><td>Describes the location of a point in the node local coordinate that serves as the center of the scale and rotation operations</td></tr><tr><td>visible</td><td>Boolean</td><td>true</td><td>READ_WRITE</td><td>If true, the node and its children are rendered. If false, the node and its children do not render</td></tr><tr><td>inheritParentOpacity</td><td>Boolean</td><td>true</td><td>READ_WRITE</td><td>If true, the node opacity is determined by multiplying opacity attribute of the node by the opacity of the parent node, which may have been determined by multiplying the opacity of its ancestor nodes. If false, the node opacity is determined by the opacity attribute set for the node or the default opacity attribute value</td></tr><tr><td>rotation</td><td>float</td><td>0.0</td><td>READ_WRITE</td><td>Defines the rotation angle about the scaleRotateCenter point (in radians) of the node local coordinate system. Positive values specify a counterclockwise rotation, negative values specify a clockwise rotation. For some Roku Player hardware, specifically Roku Players without OpenGL graphics support, only rotations of 0, 90, 180 and 270 degrees (in equivalent radians) are supported. (See <a href="/docs/specs/hardware.md#current-models" title="Roku Models and Features">Roku Models and Features</a> for information on OpenGL support)</td></tr><tr><td>scale</td><td>vector2d</td><td>[1.0,1.0]</td><td>READ_WRITE</td><td>Defines the scale factor to be applied to the node local coordinate</td></tr><tr><td>renderTracking</td><td>option as string</td><td>disabled</td><td>READ_WRITE</td><td>renderTracking is set to "disabled" when enableRenderTracking is set to false. The following options are only available when enableRenderTracking is set to true: ${renderTracking}</td></tr><tr><td>inheritParentTransform</td><td>Boolean</td><td>true</td><td>READ_WRITE</td><td>If true, the node overall transformation is determined by combining the accumulated transformation matrix of all of its ancestors in the SceneGraph with the node local 2D transformation matrix described by its translation, rotation, scale and scaleRotateCenter fields. If false, the accumulated transformation of all of its ancestors in the SceneGraph is ignored and only the node local transformation matrix is used. This causes the node to be transformed relative to the root of the SceneGraph (that is, the Scene component)</td></tr><tr><td>renderPass</td><td>integer</td><td>0</td><td>READ_WRITE</td><td>Used in combination with the numRenderPasses field of nodes extended from the <a href="/docs/references/scenegraph/abstract-nodes/arraygrid.md" title="ArrayGrid">ArrayGrid</a> abstract node class, to optimize rendering of lists and grids. This should never be set to a non-zero value unless you are optimizing the performance of a list or grid rendering by specifying the sequence of rendering operations for sub-elements of the list or grid items, and have set the numRenderPasses field value for the list or grid to a value greater than 1. If the numRenderPasses field value for the list or grid is set to a value greater than 1, you must set this field to a value greater than 0 for all sub-elements of the list or grid items, and not greater than the numRenderPasses field value. If the numRenderPasses field is set to a value greater than 1, and you set this field for a list or grid item sub-element to 0 (the default), or a value greater than the numRenderPasses field value, the list or grid item sub-element will not render</td></tr><tr><td>childRenderOrder</td><td>option as string</td><td>renderLast</td><td>READ_WRITE</td><td>${childRenderOrder}</td></tr><tr><td>clippingRect</td><td>array of float</td><td>[ 0.0, 0.0, 0.0, 0.0 ]</td><td>READ_WRITE</td><td>Specifies a rectangle in the node local coordinate system that is used to limit the region where this node and its children can render. If a non-empty rectangle is specified, then all drawing by this node and its children will be limited to that rectangular area. ${clippingRectValues}</td></tr><tr><td>enableRenderTracking</td><td>Boolean</td><td>false</td><td>READ_WRITE</td><td>If true, renderTracking will be set to a string describing how much of the node is rendered on screen</td></tr><tr><td>translation</td><td>vector2d</td><td>[0.0,0.0]</td><td>READ_WRITE</td><td>Defines the origin of the node local coordinate system relative to its parent node</td></tr><tr><td>opacity</td><td>float</td><td>1.0</td><td>READ_WRITE</td><td>Sets the opacity of the node and its children. Opacity is the opposite of transparency. Opacity values range from 0.0 (fully transparent) to 1.0 (fully opaque). As the SceneGraph is traversed, the opacity values are combined by multiplying the current accumulated opacity with the node opacity, so that if the accumulated opacity of a node ancestors is 0.25 (75% transparent), the node will have opacity of 0.25 or less. This allows entire branches of the SceneGraph to fade in and out by animating the opacity of the node at the root of the branch</td></tr><tr><td>muteAudioGuide</td><td>Boolean</td><td>false</td><td>READ_WRITE</td><td>Set to true to suppress the default CVAA text to speech. This allows apps to provide their own custom implementation</td></tr></tbody></table></td>
</tr>
<tr>
<td>fontSize</td>
<td>integer</td>
<td>system default</td>
<td>Specifies the size of the font in points. As noted in the description of the <code>fontUri</code> field, the use of fixed size system fonts ignores the value of the <code>fontSize</code> field.</td>
</tr>
<tr>
<td>horizOrigin</td>
<td>string</td>
<td>left</td>
<td>See <a href="/docs/references/scenegraph/renderable-nodes/simplelabel.md#SimpleLabel-HorizontalOrigin"><strong>Horizontal Origin</strong></a></td>
</tr>
<tr>
<td>vertOrigin</td>
<td>string</td>
<td>top</td>
<td>See <a href="/docs/references/scenegraph/renderable-nodes/simplelabel.md#SimpleLabel-VerticalOrigin"><strong>Vertical Origin</strong></a></td>
</tr>
</tbody>
</table>






## Sample app

[LabelExample](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/LabelExample) is a sample app demonstrating Label in action.