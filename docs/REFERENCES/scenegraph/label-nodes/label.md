---
title: Label
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

# Label

Extends [**LabelBase**](/docs/references/scenegraph/label-nodes/label-base.md)

> As of Roku OS 10.5, the Label node inherits most of its functionality from [LabelBase](/docs/references/scenegraph/label-nodes/label-base.md) node class. Developers, however, do not need to update their app code to account for this refactoring. 

The Label node class is used to display a string of text.

### Example

The following example shows a text layout derived from the Label node.

![roku815px - label-node-sample](https://image.roku.com/ZHZscHItMTc2/label-node-sample.png "label-node-sample")

The following displays the text string "Application Development Made Easy!" in the medium bold system font near the left top of the display screen.

~~~
<?xml version="1.0" encoding="utf-8" ?>

<!--********** Copyright 2015 Roku Corp.  All Rights Reserved. **********-->

<component name="labeltest" extends="Group" >

<script type="text/brightscript" >
<![CDATA[

  sub init()
    m.top.setFocus(true)
  end sub

]]>
</script>

<Label
  id="testLabel"
  height="44"
  width="0"
  font="font:MediumBoldSystemFont"
  text = "Application Development Made Easy!"
  horizAlign = "left"
  vertAlign = "center"
  translation="[318,8]" />

</component>
~~~

## Fields

Fields derived from the [Group](/docs/references/scenegraph/layout-group-nodes/group.md#fields "Fields") and [LabelBase](/docs/references/scenegraph/label-nodes/label-base.md#fields) classes can be used.

| Field                  | Type              | Default                                   | Access Permission | Description           |
| ---------------------- | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| font | Font | system default | READ_WRITE | Specifies the Font node to be used |
| lineSpacing         | float   |                | READ_WRITE        | If the text is displayed on more than one line, specifies the amount of additional space added between lines |
| truncateOnDelimiter | string  |                | READ_WRITE        | If the width field value is greater than zero, provides a set of characters that are used to determine how to truncate the last line of text that is displayed if it extends beyond the specified width. If none of the characters in the last line of text are included in the truncateOnDelimiter field value string, the entire last line is not displayed. When the value is set to a non-empty string, the ellipsizeOnBoundary field value is ignored |
| leadingEllipsis | boolean | false | READ_WRITE | Specifies whether to display the end or beginning of text that overflows its available width:<br />${leading-ellipsis-list} |
| wrappedLines | Integer |  | READ_ONLY | indicates the number of wrapped lines in the label. |

{#leading-ellipsis-list}

- **true**. The end of the text is shown. For example, "the quick brown fox jumps over the lazy dog" would be truncated to "...jumps over the lazy dog". 
- **false**. The start of the text is shown (for example, "the quick brown fox jumps...").

## Sample app

You can download and install a [sample app](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/LabelExample) that demonstrates how to use the Label node.

