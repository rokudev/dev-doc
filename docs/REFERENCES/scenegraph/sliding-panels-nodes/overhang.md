---
title: "Overhang"
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

# Overhang

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md)

The Overhang node provides a information bar that is displayed at the top of a screen in many Roku apps. The regions occupied by the overhang can be filled with either a solid color or a bitmap.

On the left side, a logo bitmap and/or a string can be displayed. If both are displayed, a vertical divider is drawn to separate them. The string is typically set to display a reminder to the user of their current location in the interface. For example, in the Roku homescreen, the string is set to "Search" while the user in the search entry portion of the user interface. Then when the user explores a search result, the string is changed to reflect the name of the content being explored.

On the right side, a clock and/or an indicator that the options key (*) is available can be displayed. If both are displayed, a vertical divider is drawn to separate them.

The appearance and contents of the Overhang can be customized by setting its fields to the desired values.

## Fields

| Field                  | Type    | Default                 | Access Permission | Use                                                          |
| ---------------------- | ------- | ----------------------- | ----------------- | ------------------------------------------------------------ |
| color                  | color   | 0x232323ff              | READ_WRITE        | Specifies that the area occupied by the Overhang should be filled with the specified color.<br/><br/>The color field and the backgroundUri field are "last one wins" fields. Whichever of these fields is set later overrides the other one. |
| backgroundUri          | uri     | ""                      | READ_WRITE        | Specifies the URI of a bitmap that is used to fill the area occupied by the overhang.<br/><br/>The color field and the backgroundUri field are "last one wins" fields. Whichever of these fields is set later overrides the other one. |
| logoUri                | uri     | ""                      | READ_WRITE        | Specifies the URI of a bitmap to be drawn on the left side of the overhang.<br/><br/>If both a logo and a title are specified, the logo will be displayed to the left of the title, separated by a vertical divider. |
| logoBaselineOffset     | float   | 0                       | READ_WRITE        | Specifies a vertical adjustment to be applied to the logo to adjust its alignment relative to the overall overhang. The logo is positioned so that its baseline (as specified by this field) aligns with the baseline of the options prompt on the right side of the overhang |
| title                  | string  | ""                      | READ_WRITE        | Specifies a string to be displayed on the left side of the overhang. It will be drawn to the right of the logo, if a logo is specified. <br/><br/>If both a logo and a title are specified, the logo will be displayed to the left of the title, separated by a vertical divider. |
| titleColor             | color   | 0xddddddff              | READ_WRITE        | Specifies the color of the title text                        |
| showClock              | Boolean | Based on device setting | READ_WRITE        | Specifies whether or not the Clock is displayed as part of the annotations that appear on the right side of the Overhang. If both the clock and the options prompt are shown, the clock will be displayed to the left of the options prompt, separated by a vertical divider.<br /><br />The default value is based on the device's clock format setting (Settings > System > Time > Clock format). If the clock format is set to off, the default value is false; otherwise, it is true. |
| clockColor             | color   | 0xddddddff              | READ_WRITE        | Specifies the color of the clock text                        |
| clockText              | string  | ""                      | READ_WRITE        | Specifies an alternate string to display in the clock location on the right side of the overhang. If the clockText field is set to a non-empty string, that string will replace the clock display. Setting the clockText field back to an empty string will restore the display of the clock. |
| showOptions            | Boolean | false                   | READ_WRITE        | Specifies whether the Options prompt is displayed in as part of the annotations that appear on the right side of the Overhang. The **optionsAvailable** field must also be set to true to display the options prompt.<br/><br/>If both the clock and the options prompt are shown, the clock will be displayed to the left of the options prompt, separated by a vertical divider. |
| optionsColor           | color   | 0xddddddff              | READ_WRITE        | Specifies the color of the options indicator when the options key is available (i.e. the showOptions field is set to true) |
| optionsDimColor        | color   | 0xdddddd44              | READ_WRITE        | Specifies the color of the options indicator when the options key is not available (i.e. the optionsAvailable field is set to false) |
| optionsIconColor       | color   | 0xffffffff              | READ_WRITE        | Specifies a color to tint the neutral colored options icon displayed in the overhang when the options key is available (i.e. the showOptions field is set to true). If no color is specified, the options icon will be white. |
| optionsIconDimColor    | color   | 0xffffffff              | READ_WRITE        | Specifies a color to tint the neutral colored options icon displayed in the overhang when the options key is not available (i.e. the showOptions field is set to false). If no color is specified, the options icon will be pale gray. |
| optionsAvailable       | Boolean | false                   | READ_WRITE        | Specifies whether the Options key is currently available.    |
| optionsText            | string  | ""                      | READ_WRITE        | Sets the text next to the Options (*) symbol in the overhang. |
| optionsMaxWidth        | float   | 0.0                     | READ_WRITE        | Set the max width (in pixels) to ellipsize optionsText. It has a default value of 0.0 meaning there is no max width restriction. This field does nothing if optionsText is not set. |
| leftDividerUri         | uri     | ""                      | READ_WRITE        | Specifies the URI of the bitmap to be used as the divider between the logo and the title on the left side of the overhang |
| leftDividerVertOffset  | float   | 0                       | READ_WRITE        | Specifies a vertical offset to add to the position of the divider between the logo and the title on the left side of the overhang. By default, the bottom of the divider bitmap is drawn at baseline offset of the logo bitmap, as specified by the logoBaselineOffset field. |
| rightDividerUri        | uri     | ""                      | READ_WRITE        | Specifies the URI of the bitmap to be used as the divider between the clock and the options prompt on the right side of the overhang |
| rightDividerVertOffset | float   | 0                       | READ_WRITE        | Specifies a vertical offset to add to the position of the divider between the clock and the options prompt on the left side of the overhang. By default, the vertical center of the divider bitmap is aligned to the vertical center of the options prompt. |
| height                 | float   | 115                     | READ_WRITE        | Specifies the height of the Overhang region. Typically this value is not overridden. |

## Sample app
[OverhangExample](https://github.com/rokudev/samples/tree/master/ux%20components/sliding%20panels/OverhangExample) is a sample app demonstrating Overhang in action.
