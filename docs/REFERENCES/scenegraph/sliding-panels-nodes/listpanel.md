---
title: "ListPanel"
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


Extends [**Panel**](/docs/references/scenegraph/sliding-panels-nodes/panel.md)

The ListPanel node class allows you to easily create a Panel that adheres to the Roku layout and behavior for panels that contain a LabelList or MarkupList node. The ListPanel provides the following functionality:

- Resolution appropriate positioning and sizing of the list node
- Automatic key focus handling (i.e. the list node is set to receive key events when the ListPanel is given the key focus by the PanelSet)
- Left-justified and right-justified labels that can be used to provide descriptive information about the list (e.g. "1 of N", etc.). These labels are automatically positioned and sized appropriately.
- Simple mechanism for setting up the case where focusing any item in the grid triggers the creation of a new panel to add to the PanelSet
- Default fade in/out animation of the next panel when the simple mechanism is used
- Default fade out mask effect applied to the list items at the bottom of the panel

#### Automatic Create Next Panel Functionality

One key feature of the ListPanel node is providing a simple mechanism for setting up the common use case where each time a new item in the grid receives the focus, a new "next" panel is added to the PanelSet. This mechanism is enabled or disabled by setting the createNextPanelOnItemFocus field to true or false.

createNextPanelOnItemFocus should be set to true when a new right panel should be displayed each time the list's focused item changes. For example, in the Roku Homescreen, when you navigate up/down the Settings list, a new right panel is displayed that contains information about the currently focused list item. createNextPanelOnItemFocus should be set to false when the right panel should not change in response to the list's focus changes. 

When the create next panel mechanism is enabled and the user presses the up or down arrow key, the panel to the right of the ListPanel smoothly fades out, then when the user releases the arrow key, a new right panel is created, added to the PanelSet and smoothly faded in. To implement this, the ListPanel automatically triggers the fade out of the right panel when the up or down arrow key is pressed. When the arrow key is released, the ListPanel will set the createNextPanelIndex field to the index into the list's content that corresponds to the newly focused list item. In response to the createNextPanelIndex field being set, the ListPanel's control logic must be written to mmediately create the Panel node for the new right panel and set the nextPanel field to that Panel. The Panel creation must occur in the main SceneGraph render thread.

The createNextPanelIndex field is guaranteed to be set exactly once whenever a new right panel needs to be created and populated with the data that corresponds to the specified index. This may happen when the ListPanel's data is changed, in response to up or down arrow key releases, or when the PanelSet's moves the focus onto the ListPanel from the left.

For efficiency, sometimes the control logic for the ListPanel may create and hold onto Panel pointers internally so that the next Panel does not have to be newly created each the createNextPanelIndex field is set. If this is done, it is important to never reuse the current Panel node, as that Panel may still be fading out when the new next Panel needs to be created. A typical use case, where all the right Panels are identical other than the data they display, is to create a single pair of Panel nodes and alternate between them each time the createNextPanelIndex field is set, updating the panel data based on the specified list index.

#### LabelList Specific UsageNotes

If you set the list field to a LabelList node, the default values for the itemSize, itemSpacing, numRows and translation fields for the LabelList will be automatically set to the recommended default values for Roku apps. By default, the panel will use the "narrow" panelSize. It is possible to override these default values, but in most cases, that will not be necessary.

#### MarkupList Specific Usage Notes

If you set the list field to a MarkupList node, because the MarkupList is by nature custom, you will generally need to set the MarkupList's itemSize, itemSpacing and numRows fields. The ListPanel will position the list appropriately.

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>list</td>
<td>Node</td>
<td>NULL</td>
<td>READ_WRITE</td>
<td>The list field should be set to either a LabelList or MarkupList node to be displayed in the Panel. See the LabelList and MarkupList notes above about setting up the list's layout.</td>
</tr>
<tr>
<td>leftLabel</td>
<td>Node</td>
<td>Label node</td>
<td>READ_WRITE</td>
<td>The leftLabel field is set to a Label node that is positioned just above the left/top corner of the list. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes.</td>
</tr>
<tr>
<td>rightLabel</td>
<td>Node</td>
<td>Label node</td>
<td>READ_WRITE</td>
<td>The rightLabel field is set to a Label node that is positioned just above the right/top corner of the list. Setting the Label node's text field will cause that text string to be displayed. Setting other fields of the Label node can be used to adjust the Label's text color and other visual attributes.<br /><br />The rightLabel is often used to display a "1 of N" message that reflects the index of the list's focused item.</td>
</tr>
<tr>
<td>showSectionLabels</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If showSectionLabels is set to true and the data for the list node is divided into sections, the Title attribute of the current section will be displayed as the leftLabel of the list. As the list items scroll, the leftLabel will smoothly transition as each section of the list reaches the focus position.</td>
</tr>
<tr>
<td>createNextPanelIndex</td>
<td>integer</td>
<td>N/A</td>
<td>READ_ONLY</td>
<td>When the createNextPanelOnItemFocus field is true, createNextPanel is set when a new panel needs to be created and added to the PanelSet. The value of the field is the index of the list's content that should be used to create and populate the new panel.<br /><br />The createNextPanelIndex field is guaranteed to be set exactly once whenever the next panel for the focused list item needs to be created.</td>
</tr>
<tr>
<td>nextPanel</td>
<td>Node</td>
<td>false</td>
<td>WRITE_ONLY</td>
<td>When the createNextPanelOnItemFocus field is true, the nextPanel field should be set to a Panel node to the next panel to add to the PanelSet in response to the createNextPanelIndex field being set. It must be set immediately in repsonse to the createNextPanelIndex field being set.</td>
</tr>
<tr>
<td>createNextPanelOnItemFocus</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>When set to true, the Create Next Panel mechanism is enabled (i.e. the createNextPanelIndex field will be set when a new list item receives the focus). When set to false, the Create Next Panel mechanism is disabled (i.e. the createNextPanelIndex field will not be set when a new list item receives the focus).</td>
</tr>
</tbody>
</table>



> If you are creating the list field(either a LabelList or MarkupList) associated with a ListPanel in script of a component that extends ListPanel, you also need to add the list as a child of the ListPanel. For example, in a component that extends ListPanel, where m.top is that component, you would associate the list field with a LabelList as follows:

~~~~
list = m.top.createChild("LabelList")
m.top.list = list
~~~~

## Data bindings

If the list's data includes sections and the ListPanel's showSectionLabel's field is set to true, the title field of the section's ContentNode will be used as the text for the left label of the ListPanel.

## Sample app	
[ListPanelExample](https://github.com/rokudev/samples/tree/master/ux%20components/sliding%20panels/ListPanelExample) is a sample app demonstrating ListPanel in action.