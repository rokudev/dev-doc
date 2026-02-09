---
title: "RadioButtonList"
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


Extends [**LabelList**](doc:labellist)

The RadioButtonList node class is a simple list class that can be used to display a list of mutually exclusive radio buttons. Each item in the list displays a text string and an optional check mark icon positioned to the left of the text string that indicates which of the radio buttons is currently selected.

## Example

The following is an example screenshot showing the use of RadioButtonList:

![roku815px - radiobutton-screen](https://image.roku.com/ZHZscHItMTc2/radiobutton-screen.png "radiobutton-screen")

## Fields

| Field                 | Type    | Default | Access Permission | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------------|---------|---------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| checkedItem           | integer | -1      | READ_WRITE        | Specifies the index of the currently selected item in the list. The initial default value of -1 indicates that no radio button is currently selected. Setting the field changes the currently selected radio button list item to match the specified index.                                                                                                                                                                                |
| checkOnSelect         | Boolean | true    | READ_WRITE        | Controls whether or not pressing the remote control OK key causes the `checkedItem` field value to be automatically updated to the index of the currently focused list item. By default, the field value is set to true, but there are use cases where other behavior may be desired. In those cases, it is up to the developer to manage the currently selected radio button by setting the checkedItem field value to the desired index. |
| checkedIconUri        | uri     | ""      | READ_WRITE        | Specifies the check mark icon to use for the currently selected radio button list item when that list item does not have the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.                                                                                                                                                                                                 |
| focusedCheckedIconUri | uri     | ""      | READ_WRITE        | Specifies the check mark icon to use for the currently selected radio button list item when that list item has the key focus. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.                                                                                                                                                                                                           |

## Data bindings

The data model for the RadioButtonList node should have a single ContentNode as the root node, with one child ContentNode added to the root node for each item in the list (these child nodes can be thought of as `item nodes`). Item nodes should have their ContentNode attributes set as shown in the table below.

| Attribute | Type   | Description                 |
|-----------|--------|-----------------------------|
| TITLE     | string | The label for the list item |

## Sample app	
[RadioButtonListExample](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/RadioButtonListExample) is a sample app demonstrating RadioButtonList in action.