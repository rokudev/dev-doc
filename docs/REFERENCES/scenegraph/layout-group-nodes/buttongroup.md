---
title: Buttongroup
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

# ButtonGroup

Extends [**LayoutGroup**](/docs/references/scenegraph/layout-group-nodes/layoutgroup.md "**LayoutGroup**")

The ButtonGroup node class manages the layout, visual attributes, and focus management of a vertical list of Button nodes. When the ButtonGroup node has focus, it sets the key focus on a single one of its child Button nodes.

- The buttons can be easily created using default button appearances by setting the buttons field to an array of strings containing the labels for each button. 
- A single observer can watch for any of the Button nodes in the group to be selected by observing the buttonSelected field.
- By default, Button nodes added to the group will have the default button appearance. Several fields exist that allow you to change an attribute of the appearance of all Button nodes in the group.

## Fields

| Field                   | Type             | Default                      | Access Permission | Description                                                  |
| ----------------------- | ---------------- | ---------------------------- | ----------------- | ------------------------------------------------------------ |
| textColor               | color            | 0xffffffff                   | READ_WRITE        | Specifies the button label color for all unfocused Button nodes in the group. Only set to override the system default |
| focusedTextColor        | color            | 0xffffffff                   | READ_WRITE        | Specifies the button label color for the Button node that has focus, if any. Only set to override the system default |
| textFont                | Font             | system: MediumSystemFont     | READ_WRITE        | Specifies the [Font](/docs/references/scenegraph/typographic-nodes/font.md "Font") node for all unfocused Button nodes in the group. Only set to override the system default. See Font for a list of all system fonts available |
| focusedTextFont         | Font             | system: MediumBoldSystemFont | READ_WRITE        | Specifies the [Font](/docs/references/scenegraph/typographic-nodes/font.md "Font") node for the Button node that has focus, if any. Only set to override the system default. See Font  for a list of all system fonts available |
| focusBitmapUri          | uri              |                              | READ_WRITE        | Specifies the bitmap to be used as the background for the Button node that has focus. Only set to override the system default |
| focusFootprintBitmapUri | uri              |                              | READ_WRITE        | Specifies the bitmap to be used as the focus footprint background, when focus is not on the ButtonGroup node. The focus footprint is a visual indicator of the button that will take focus when focus moves back onto the ButtonGroup node. Only set to override the system default |
| iconUri                 | uri              |                              | READ_WRITE        | Specifies the bitmap for the button icon for all unfocused Button nodes in the group. Only set to override the system default |
| focusedIconUri          | uri              |                              | READ_WRITE        | Specifies the bitmap for the focused button icon. Only set to override the system default |
| minWidth                | float            | 0                            | READ_WRITE        | Specifies the minimum width for the Button nodes in the group. The minWidth field must be less than or equal to the maxWidth field. Only set to override the system default |
| maxWidth                | float            | 32767                        | READ_WRITE        | When set, specifies the maximum width for the Button nodes in the group. The maxWidth field must be greater than or equal to the minWidth field |
| buttonHeight            | float            | 0                            | READ_WRITE        | Specifies the height of each Button node in the group. Only set to override the system default |
| rightJustify            | Boolean          | false                        | READ_WRITE        | Specifies whether the button labels and icons should be right- or left-justified. When right-justified and there is an icon, it appears to the right of the button label |
| buttonSelected          | integer          | 0                            | READ_ONLY         | Set to the index of the selected button whenever the user selects a button in the group |
| buttonFocused           | integer          | 0                            | READ_ONLY         | Set to the index of the focused button whenever a button in the group receives the key focus |
| focusButton             | integer          | 0                            | WRITE_ONLY        | Causes the button with the specified index to receive the focus when the ButtonGroup node has the key focus. Note that if the ButtonGroup node does not have the key focus when the focusButton field is set, the specified button will display the focus "footprint" as its background |
| buttons                 | array of strings | [ ]                          | WRITE_ONLY        | Allows a set of Button nodes to be easily created by providing an array of button labels. Each string in the array will result in a Button node to be added to the ButtonGroup node, using the string as the button label |

## Sample app
[ButtonGroupExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/ButtonGroupExample) is a sample app demonstrating ButtonGroup in action.