---
title: "Label nodes"
excerpt: 'SceneGraph nodes for rendering text on screen: Label, MultiStyleLabel, MonospaceLabel, and InfoPane'
deprecated: false
hidden: false
metadata:
  title: 'Label nodes'
  description: 'Label nodes let you render text on screen in your SceneGraph apps. This page covers Label, MultiStyleLabel, MonospaceLabel, and InfoPane, and points to related text-rendering nodes elsewhere in the SceneGraph docs.'
  robots: index
next:
  description: ''
---
Label nodes let you render text on screen in your SceneGraph apps. This page covers the label nodes packaged here and the abstract base class they share. For other text needs (scrolling, long passages, custom fonts, lighter-weight options), see [Looking for something else?](#looking-for-something-else) below.

## Hello, text

A simple Label example:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="HelloLabel" extends="Group">
  <Label
    text="Application Development Made Easy!"
    font="font:MediumBoldSystemFont"
    horizAlign="left"
    vertAlign="center"
    translation="[318,8]" />
</component>
```

![Label rendering of the sample above](https://image.roku.com/ZHZscHItMTc2/label-node-sample.png "Label rendering")

## Choosing a node

| Node | Best for |
| :--- | :--- |
| [Label](doc:label) | A line or short block of text in a single style. The starting point for most text rendering. |
| [MultiStyleLabel](doc:multi-style-label) | Mixing styles inside one string: bold/italic runs, multiple colors, multiple fonts. |
| [MonospaceLabel](doc:monospace-label) | A single line of text with all characters spaced at a fixed distance. |
| [InfoPane](doc:info-pane) | A pre-styled help-text panel with a white rounded border, used to explain a setting. |

MultiStyleLabel and InfoPane in action:

![MultiStyleLabel mixing emoji and styled text](https://image.roku.com/ZHZscHItMTc2/emoji-multistylelabel-v3.png "MultiStyleLabel")

![InfoPane help-text panel](https://image.roku.com/ZHZscHItMTc2/infopane.jpg "InfoPane")

## Looking for something else?

* **For custom fonts**, configure font URI, size, and style through a [Font](doc:font) node. See [Typographic nodes](doc:typographic-nodes).
* **For long passages of scrollable text** like license agreements, use [ScrollableText](doc:scrollabletext).
* **For lines that auto-scroll when they overflow**, use [ScrollingLabel](doc:scrollinglabel). It ellipsizes then scrolls horizontally on a loop.
* **For a lighter, more memory-efficient label**, use [SimpleLabel](doc:simplelabel) in [Renderable nodes](doc:renderable-nodes), a stripped-down single-line label with a simplified font model.
* **For alignment, wrapping, truncation, or rotation controls**, see [LabelBase](doc:label-base), the abstract base class shared by Label and MultiStyleLabel.

## Inheritance

Label and MultiStyleLabel both extend [**LabelBase**](doc:label-base), so most of their field reference (alignment, wrapping, ellipsis behavior, rotation) is documented on the LabelBase page rather than repeated on each. MonospaceLabel and InfoPane do not extend LabelBase and define their own fields directly.
