---
title: ScrollingLabel
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
Extends [**Group**](doc:group)

The ScrollingLabel node class provides an automatic way to make a string scroll horizontally if it does not fit within the specified width. If the string can be drawn within the specified maximum width it is just drawn. If it does not fit within the specified maximum width, it is drawn with an ellipsis (...) at the end, then it transitions to the full string, clipped to the maximum width that scrolls left to right until the end of the string is visible, then transition back to the partial string with the ellipsis at the end. By default, this repeats continuously unless the repeatCount field is set to limit the number of times the scrolling occurs.

### Alignment

The ScrollingLabel node class uses the horizAlign and vertAlign fields to allow you to position the rendered text relative to a specified bounding rectangle.

#### Horizontal Alignment

The horizAlign field allows you to position text horizontally relative to the maximum width of the label as specified by the maxWidth field.

There are three possible values for the horizAlign field:

* **left**: The left edge of the text is drawn at the 0 x-coordinate position of the ScrollingLabel node's local coordinate system.

* **center**: The horizontal center of each line of text is positioned at the x-coordinate corresponding to half the computed width of the ScrollingLabel node's local coordinate system.

* **right**: The right edge of each line of text is positioned at x-coordinate position corresponding to the computed width of the ScrollingLabel node's local coordinate system.

#### Vertical Alignment

The vertAlign field allows you to position text vertically relative to the computed height of the label. The computed height is determined in one of two ways:

* If the height field is greater than zero, the computed height is the value of the height field.
* If the height field is zero, the computed height is the height of the line of rendered text, in which case the vertAlign field is ignored.

There are three possible values for the vertAlign field:

* **top**: The top edge of the text is drawn at 0 y-coordinate position of the ScrollingLabel node's local coordinate system.

* **center**: The vertical center of the rendered text is positioned at y-coordinate position corresponding to half the computed height of the ScrollingLabel node's local coordinate system.

* **bottom**: The text is drawn so that bottom edge of the rendered text is positioned at the y-coordinate position corresponding to the computed height of the ScrollingLabel node's local coordinate system.

## Fields

| Field       | Type          | Default        | Access Permission | Description                                                                                                                                                                                                                                                                                                          |
| ----------- | ------------- | -------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text        | string        | ""             | READ_WRITE        | Specifies the text to be displayed                                                                                                                                                                                                                                                                                   |
| color       | color         | 0xddddddff     | READ_WRITE        | Specifies the text color                                                                                                                                                                                                                                                                                             |
| font        | Font          | system default | READ_WRITE        | Specifies the Font node to be used                                                                                                                                                                                                                                                                                   |
| maxWidth    | float         | 500            | READ_WRITE        | Specifies the maximum width of the rendered text. If the rendered text exceeds the maximum width, the scrolling behavior is automatically triggered                                                                                                                                                                  |
| height      | float         | 0              | READ_WRITE        | Specifies the height of the label. If set to zero, the actual height is determined by the value of the numLines field if it is greater than zero. See [Vertical Alignment](#vertical-alignment)                                                                                                                      |
| scrollSpeed | float         | 100            | READ_WRITE        | Specifies the horizontal scrolling speed in pixels per second                                                                                                                                                                                                                                                        |
| repeatCount | float         | -1             | READ_WRITE        | If set to the default value of -1, the text scrolling behavior repeats continuously. If set to zero, the text will remain ellipsized and never scroll. If set to a value greater than zero, the text will scroll the specified number of times, at the end of which the text is rendered with an ellipsis at the end |
| horizAlign  | option string | left           | READ_WRITE        | See [Horizontal Alignment](#horizontal-alignment)                                                                                                                                                                                                                                                                    |
| vertAlign   | option string | top            | READ_WRITE        | See [Vertical Alignment](#vertical-alignment)                                                                                                                                                                                                                                                                        |

## Sample app

[ScrollingLabelExample](https://github.com/rokudev/samples/tree/master/ux%20components/text/ScrollingLabelExample) is a sample app demonstrating ScrollingLabel in action.
