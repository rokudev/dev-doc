---
title: Typographic nodes
---
The SceneGraph API includes the **Font** node class for specifying the
font characteristics to be used by your application. Each node class
that renders text on the screen display includes a `font` field to set
the font characteristics for the node.

There is a default font supplied with the Roku OS. To use a
different font, you must include it in the application package, such as
in `pkg:/fonts/`. Then you can specify that this font be used as the
font for a node class that renders text on the screen display in a
couple of ways:

* by setting the `role` field for a child **Font** node to be used in
  the node
* by setting the `font` field of the node to a **Font** node that
  specifies the font

The `font` field can also be used to specify custom settings in the
default or specified font. For the default font, there is a set of
standard names that allow you to select the size and weight of the font
for a node. The default font standard names range from smallest to large
sizes, and are:

* `LargeSystemFont`
* `MediumSystemFont`
* `SmallSystemFont`
* `SmallestSystemFont`
* `LargeBoldSystemFont`
* `MediumBoldSystemFont`
* `SmallBoldSystemFont`
* `SmallestBoldSystemFont`

For example, to specify the bolded small default font for a **Label**
node in XML markup:

```
<Label id="mySmallLabel"
    width="200" height="200"
    text="Can you read this?"
    font="font:SmallBoldSystemFont" />
```

And you can also set sizes explicitly using BrightScript:

`m.mylargerlabel.font.size = m.mylargerlabel.font.size+5`