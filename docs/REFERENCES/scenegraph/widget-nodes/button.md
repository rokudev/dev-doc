---
title: "Button"
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

# Button

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The Button node is a simple widget that generates a buttonSelected event when the user selects it. The button can display a label and/or an icon, as well as a background image. Fields are provided to customize the label text and color depending on whether or not the button has the key focus. Similarly, the bitmaps used for the icon and background can be specified for both focused and unfocused button states.

By default, the background of the button is only shown when the button has the key focus. Buttons are typically used in a ButtonGroup node that manages which button in the group will have the key focus when the ButtonGroup node receives the focus. When the ButtonGroup node has the focus, the button in the group that has the focus will display the focusBitmapUri bitmap as its background. When the ButtonGroup node does not have the focus, it remembers which button in the group had the focus and sets that button showFocusFootprint field to true, causing it to a render a "footprint" bitmap as a visual indicator that it will be the focused button when the ButtonGroup node receives the focus again. All other buttons in the ButtonGroup node do not display a background image.

When a Button node is created that is not a child of a ButtonGroup node, typically the showFootprintfield field should be set to true, so that the button always displays a background image.

## Fields

| Field                   | Type              | Default                                   | Access Permission | Description           |
| ----------------------- | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| text | string | "" | READ_WRITE | Specifies the text to be displayed as the button label |
| textColor | color | 0xddddddff | READ_WRITE | Specifies the color of the button label when the button does not have the key focus |
| focusedTextColor | color | 0x262626ff | READ_WRITE | Specifies the color of the button label when the button has the key focus |
| textFont | Font |  | READ_WRITE | Specifies the font of the button label when the button does not have the key focus |
| focusedTextFont | Font |  | READ_WRITE | Specifies the font of the button label when the button has the key focus |
| focusFootprintBitmapUri | uri | "" | READ_WRITE | Specifies the button focus "footprint" bitmap file to display when the button does not have key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. By default the "footprint" bitmap is not displayed when the button does not have the key focus. To display the background when the button is unfocused, the showFocusFootprint field must be set to true |
| focusBitmapUri          | uri               | ""                                        | READ_WRITE        | Specifies the button background bitmap file to display when the button has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap |
| iconUri                 | uri     | ""         | READ_WRITE        | Specifies a bitmap file for the button icon when the button does not have the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. For a button with no icon, set this field to an empty string (iconUri="") |
| focusedIconUri          | uri     | ""         | READ_WRITE        | Specifies a bitmap file for the button icon when the button has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. For a button with no icon, set this field to an empty string (iconUri="") |
| minWidth                | float   | 0          | READ_WRITE        | Specifies the minimum width of the button. The minWidth field must be less than or equal to the maxWidth field |
| maxWidth                | float   | 32767      | READ_WRITE        | Specifies the maximum width of the button. The maxWidth field must be greater than or equal to the minWidth field |
| height                  | float   | 64         | READ_WRITE        | Specifies the height of the button                           |
| showFocusFootprint      | boolean           | false                                     | READ_WRITE        | Controls whether the focus "footprint" bitmap is displayed when the button does not have the key focus. Since the default value of the showFocusFootprint field is false, the "footprint" bitmap is not displayed by default |
| scrollable | boolean | false | READ_WRITE | Enables auto-scrolling to ensure text that is larger than initially expected fits within the button (for example, when the text is translated to other languages). |
| buttonSelected          | Event   | N/A        | READ_ONLY       | The buttonSelected field is set whenever the button is selected. The field should be used to call observer callback functions when the button is selected |

## Sample app	
[ButtonExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/ButtonExample) is a sample app demonstrating Button in action.
