---
title: "GridPanel"
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

# GridPanel

Extends [**Panel**](/docs/references/scenegraph/sliding-panels-nodes/panel.md)

The GridPanel node class allows you to easily create a Panel that adheres to the Roku layout and behavior for panels that contain a PosterGrid or MarkupGrid node. The GridPanel node class provides the following functionality:

- Resolution appropriate positioning and sizing of the grid node
- Automatic key focus handling (i.e. the grid node is set to receive key events when the GridPanel is given the key focus by the PanelSet)
- Left-justified and right-justified labels that can be used to provide descriptive information about the grid (e.g. "1 of N", etc.). These labels are automatically positioned and sized appropriately.
- Simple mechanism for setting up the case where focusing any item in the grid triggers the creation of a new panel to add to the PanelSet
- Default fade in/out animation of the next panel when the simple mechanism is used
- Default fade out mask effect applied to the grid items at the bottom of the panel

#### Automatic Create Next Panel Functionality

One key feature of the GridPanel node is providing a simple mechanism for setting up the common use case where each time a new item in the list receives the focus, a new "next" panel is added to the PanelSet. This mechanism is enabled or disabled by setting the createNextPanelOnItemFocus field to true or false.

createNextPanelOnItemFocus should be set to true when a new right panel should be displayed each time the grid's focused item changes. For example, in the Roku Homescreen, when you navigate up/down/left/right in the grid, a new right panel is displayed that contains information about the currently focused grid item. createNextPanelOnItemFocus should be set to false when the right panel should not change in response to the grid's focus changes. For example, when focus is on the installed apps grid in the Roku Homescreen, the right panel always displays an ad panel, regardless of which item is focused in the grid.

When the create next panel mechanism is enabled and the user presses a navigation arrow key, the panel to the right of the GridPanel smoothly fades out, then when the user releases the arrow key, a new right panel is created, added to the PanelSet and smoothly faded in. To implement this, the GridPanel automatically triggers the fade out of the right panel when the navigation arrow key is pressed. When the arrow key is released, the GridPanel will set the createNextPanelIndex field to the index into the grid's content that corresponds to the newly focused grid item. In response to the createNextPanelIndex field being set, the GridPanel's control logic must be written to immediately create the Panel node for the new right panel and set the nextPanel field to that Panel. The Panel creation must occur in the main SceneGraph render thread.

The createNextPanelIndex field is guaranteed to be set exactly once whenever a new right panel needs to be created and populated with the data that corresponds to the specified index. This may happen when the GridPanel's data is changed, in response to up or down arrow key releases, or when the PanelSet's moves the focus onto the GridPanel from the left.

For efficiency, sometimes the control logic for the GridPanel may create and hold onto Panel pointers internally so that the next Panel does not have to be newly created each the createNextPanelIndex field is set. If this is done, it is important to never reuse the current Panel node, as that Panel may still be fading out when the new next Panel needs to be created. A typical use case, where all the right Panels are identical other than the data they display, is to create a single pair of Panel nodes and alternate between them each time the createNextPanelIndex field is set, updating the panel data based on the specified list index.

## Fields

| Field                      | Type    | Default    | Access Permission | Description                                                  |
| -------------------------- | ------- | ---------- | ----------------- | ------------------------------------------------------------ |
| grid                       | Node    | NULL       | READ_WRITE        | The grid field should be set to either a PosterGrid or MarkupGrid node to be displayed in the Panel. In general, because the layout of any grid is usually custom, you will generally need to set the grid's itemSize, itemSpacing, numRows and numColumns fields. The GridPanel will position the grid appropriately. |
| leftLabel                  | Node    | Label node | READ_WRITE        | The leftLabel field is set to a Label node that is positioned just above the left/top corner of the grid. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes. |
| rightLabel                 | Node    | Label node | READ_WRITE        | The rightLabel field is set to a Label node that is positioned just above the right/top corner of the grid. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes.<br/><br/>The rightLabel is often used to display a "1 of N" message that reflects the index of the grid's focused item. |
| showSectionLabels          | Boolean | false      | READ_WRITE        | If showSectionLabels is set to true and the data for the grid node is divided into sections, the Title attribute of the current section will be displayed as the leftLabel of the grid. As the grid items scroll, the leftLabel will smoothly transition as each section of the grid reaches the focus position. |
| createNextPanelIndex       | integer | N/A        | READ_ONLY         | When the createNextPanelOnItemFocus field is true, createNextPanel is set when a new panel needs to be created and added to the PanelSet. The value of the field is the index of the grid's content that should be used to create and populate the new panel.<br/><br/>The createNextPanelIndex field is guaranteed to be set exactly once whenever the next panel for the focused grid item needs to be created. |
| nextPanel                  | Node    | false      | WRITE_ONLY        | When the createNextPanelOnItemFocus field is true, the nextPanel field should be set to a Panel node to the next panel to add to the PanelSet in response to the createNextPanelIndex field being set. It must be set immediately in repsonse to the createNextPanelIndex field being set. |
| createNextPanelOnItemFocus | Boolean | true       | READ_WRITE        | When set to true, the Create Next Panel mechanism is enabled (i.e. the createNextPanelIndex field will be set when a new grid item receives the focus). When set to false, the Create Next Panel mechanism is disabled (i.e. the createNextPanelIndex field will not be set when a new grid item receives the focus). |

>  If you are creating the grid field (either a PosterGrid or MarkupGrid) associated with a GridPanel in script of a component that extends GridPanel, you also need to add the grid as a child of the GridPanel. For example, in a component that extends GridPanel, where m.top is that component, you would associate the grid field with a PosterGrid as follows:

~~~~
grid = m.top.createChild("PosterGrid")
m.top.grid = grid
~~~~

## Data bindings

If the grid's data includes sections and the GridPanel's showSectionLabel's field is set to true, the title field of the section's ContentNode will be used as the text for the left label of the GridPanel.

## Sample app
[GridPanelExample](https://github.com/rokudev/samples/tree/master/ux%20components/sliding%20panels/GridPanelExample) is a sample app demonstrating GridPanel in action.
