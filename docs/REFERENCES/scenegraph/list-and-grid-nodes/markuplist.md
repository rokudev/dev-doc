---
title: "MarkupList"
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

# MarkupList

Extends [**ArrayGrid**](/docs/references/scenegraph/abstract-nodes/arraygrid.md)

The MarkupList node class is a generic list class that can be used to display a list of items.

The contents of each list item is an instance of an XML component specified by the `itemComponentName` field value. An instance of the XML component is used to display the data for each item in the list data model. The appearance of the list item as it enters/exits the list focus position can be customized using BrightScript.  

[SimpleMarkupList](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids) is a sample app containing a MarkupList where each item is an instance of an XML component. See the [MarkupList XML component](#markuplist-xml-component) section for details.

**Example**

The following example displays the use of the MarkupList node.

![roku815px - markuplist-node](https://image.roku.com/ZHZscHItMTc2/markuplist-node.png "markuplist-node")

## Fields

| Field                    | Type        | Default                | Access Permission | Description                                                  |
| ------------------------ | ----------- | ---------------------- | ----------------- | ------------------------------------------------------------ |
| itemComponentName        | string      |                        | READ_WRITE        | Specifies the name of a XML component for the list items. An instance of this component is created on demand for each visible item of the list. The XML component must define a specific interface as detailed in [MarkupList XML component](/docs/references/scenegraph/list-and-grid-nodes/markuplist.md#MarkupList-XML-Component) below. |
| content                  | ContentNode | none                   | READ_WRITE        | Specifies the content for the list. See [Data bindings](/docs/references/scenegraph/list-and-grid-nodes/markuplist.md#Data-Bindings) below for more details.<br/>If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string. |
| itemSize                 | vector2d    | [0,0]                  | READ_WRITE        | Specifies the width and height of each item in the list      |
| itemSpacing              | vector2d    | [0,0]                  | READ_WRITE        | The second value of the vector specifies the vertical spacing between items in the list. The first value of the vector is ignored. |
| numRows                  | integer     | 12                     | READ_WRITE        | Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content. |
| drawFocusFeedback        | Boolean     | true                   | READ_WRITE        | Specifies whether or not the focus indicator bitmap is displayed |
| drawFocusFeedbackOnTop   | Boolean     | true                   | READ_WRITE        | Specifies whether the focus indicator bitmap is drawn below or on top of the list items |
| focusBitmapUri           | uri         |                        | READ_WRITE        | Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| focusFootprintBitmapUri  | uri         |                        | READ_WRITE        | Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| focusBitmapBlendColor    | color       | 0xFFFFFFFF             | READ_WRITE        | Blend the graphic image specified by `focusBitmapUri` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by `focusBitmapUri.` |
| focusFootprintBlendColor | color       | 0xFFFFFFFF             | READ_WRITE        | Blend the graphic image specified by `focusFootprintBitmapUri` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by `focusFootprintBitmapUri`. |
| wrapDividerBitmapUri     | uri         |                        | READ_WRITE        | Specifies the bitmap file to use as a wrap divider, the visual separator between the last and first list items when the list wraps. In most cases, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| wrapDividerHeight        | float       | 0.0                    | READ_WRITE        | Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the `itemSize` field width value. |
| sectionDividerBitmapUri  | uri         |                        | READ_WRITE        | If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the `wrapDividerBitmapUri` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default. |
| sectionDividerFont       | font        | system default         | READ_WRITE        | Specifies the font for section divider labels                |
| sectionDividerTextColor  | color       | 0xddddddff             | READ_WRITE        | Specifies the text color for section divider labels          |
| sectionDividerSpacing    | float       | 10                     | READ_WRITE        | If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap. |
| sectionDividerHeight     | float       | 40                     | READ_WRITE        | Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value. |
| sectionDividerMinWidth   | float       | 117                    | READ_WRITE        | Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width. |
| sectionDividerLeftOffset | float       | 0                      | READ_WRITE        | Number of pixels to offset the left edge of the section divider relative to the left edge of the list items. |
| itemSelected             | integer     | 0                      | READ_ONLY         | When a list item is selected, itemSelected is set to the index of the selected item. |
| itemFocused              | integer     | 0                      | READ_ONLY         | When a list item gains the key focus, set to the index of the focused item. |
| itemUnfocused            | integer     | 0                      | READ_ONLY         | When a list item loses the key focus, set to the index of the unfocused item. |
| jumpToItem               | integer     | 0                      | WRITE_ONLY        | When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position. |
| animateToItem            | integer     | 0                      | WRITE_ONLY        | When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position. |
| itemClippingRect         | rect2d      | [ 0.0, 0.0, 0.0, 0.0 ] | READ_WRITE        | Specifies a clipping region for the list or grid items       |

### MarkupList XML Component

The **MarkupList** node `itemComponentName` field value should be set to the name of an XML component used to display each item in the list. An instance of this component is created for each visible item in the list.

If the XML component contains interface fields that match the names shown in the table below, those fields will be updated by the **MarkupList** node. This allows the XML component to alter the item appearance based on changes to these interface fields.

Note that the fields are updated in the order presented in the table below. Any layout scripting you write based on these fields should be done in that order to avoid updating your layout based on a field that has not been updated yet.

| Field Name   | Field Type      | Access Permission | Description                                                  |
| :----------- | :-------------- | ----------------- | :----------------------------------------------------------- |
| width        | float           | READ_ONLY         | Set to the width of the list item.                           |
| height       | float           | READ_ONLY         | Set to the height of the list item                           |
| index        | integer         | READ_ONLY         | Set to the index of this item in the data model.             |
| listHasFocus | Boolean         | READ_ONLY         | Set to true if the **MarkupList** node has focus, false otherwise. |
| itemContent  | **ContentNode** | READ_WRITE        | Contains the data to be displayed by the list item. The relationship between data in the **ContentNode** node and the visual elements of the list item is determined by the scripts in the item XML component. Typically, an observer of the `itemContent` field is used to update the list item when the content changes. |
| focusPercent | float           | READ_ONLY         | The fractional value, from 0.0 to 1.0, of a time delay after focus has moved from one item to the next. The fractional value increases incrementally from 0.0 to 1.0 for the newly-focused item, while simultaneously decreasing from 1.0 to 0.0 for the previously-focused item. This value can be used as a timing key to smoothly animate the appearance of the focused item as well as the previously-focused item, to indicate the movement of focus to the user. |
| itemHasFocus | Boolean         | READ_ONLY         | Indicates whether the item component currently is the MarkupList's focused item. When scrolling starts, the itemHasFocus field for the currently focused item is set to false. When scrolling ends, the itemHasFocus field for the newly focused item is set to true. During the scrolling animation, all itemHasFocus fields are set to false.Only one item component of any MarkupList should have itemHasFocus set to true. If the MarkupList does not focus, all itemHasFocus fields of their item components should be set to false. |

### Example MarkupList XML Component

The following shows an example **MarkupList** node XML component. The XML markup defines a component named `SimpleListItem` that displays a poster as an icon, and two labels on the right for each list item. The labels are arranged vertically, with the top label having a larger font than the bottom one.

To use this component, set the value of the `itemComponentName` field of a **MarkupList** node to `SimpleListItem`.

Note that the `index` interface field is not used by the component, so it is not included in the component interface.

Also note how the `focusPercent` interface field has an `onChange` function defined that changes the color of the label text as the item enters/leaves the focus region of the list.

**Markup List XML Component Example**

```
<?xml version="1.0" encoding="utf-8" ?>

<component name="SimpleListItem" extends="Group">

<interface> 
  <field id="width" type="float" onChange="widthChanged"/> 
  <field id="height" type="float" onChange="heightChanged"/> 
  <field id="itemContent" type="node" onChange="itemContentChanged"/> 
  <field id="focusPercent" type="float" onChange="focusPercentChanged"/> 
  <field id="listHasFocus" type="bool" onChange="focusPercentChanged"/> 
</interface>

<script type="text/brightscript" >
<![CDATA[ 
  function itemContentChanged() 
    m.itemImage.uri = m.top.itemContent.HDPOSTERURL
    m.itemText.text = m.top.itemContent.TITLE
    m.itemArtist.text = m.top.itemContent.ARTISTS[0] 
    updateLayout()
  end function

  function widthChanged() 
    updateLayout()
  end function

  function heightChanged() 
    updateLayout()
  end function

  function focusPercentChanged() 
    if m.top.listHasFocus and m.top.focusPercent > 0.5 
      m.itemText.color = "0x000000FF" 
    else 
      m.itemText.color = "0xFFFFFFFF" 
    end if 
    m.itemArtist.color = m.itemText.color
  end function

  function updateLayout() 
    if m.top.height > 0 and m.top.width > 0 
      posterSize = m.top.height
      m.itemImage.width = m.top.height - 20 ' make the posters square 
      m.itemImage.height = m.top.height - 20
      m.itemText.width = m.top.width - m.itemImage.width - 20 
      m.itemArtist.width = m.top.width - m.itemImage.width - 20 
    end if
  end function

  function init() 
    m.itemText = m.top.findNode("itemText") 
    m.itemArtist = m.top.findNode("itemArtist") 
    m.itemImage = m.top.findNode("itemImage")
    m.playIcon = m.top.findNode("playIcon")
  end function
]]>
</script>

<children>

<LayoutGroup layoutDirection="horizontal" vertAlignment="center" itemSpacings="20" translation="[0,34]" > 
  <Poster id="itemImage" /> 
  <LayoutGroup layoutDirection="vertical" horizAlignment="left" itemSpacings="0" > 
     <Label id="itemText" font="theme:MediumSystemFont" /> 
     <Label id="itemArtist" font="theme:SmallestSystemFont" /> 
   </LayoutGroup>
</LayoutGroup>

</children>
</component>
```

### Data Bindings

A **MarkupList** node should have a single **ContentNode** node as the root node in its content field. The structure of the rest of the data model depends on whether or not the list items are to be grouped into sections.

#### List Items Not Grouped Into Sections

If the list items are not to be grouped into sections, one child **ContentNode** node should be added to the root node for each item in the list (these child nodes can be thought of as *item nodes*). Item nodes should contain the data required by the **MarkupList** node XML component.

#### List Items Grouped Into Sections

If the list items are to be grouped into sections, one child **ContentNode** node should be added to the root node for each section in the list (these child nodes can be thought of as *section roots*). Each section root should contain one child **ContentNode** node for each item in the section (that is, item nodes). The item nodes should contain the data required by the **MarkupList** node XML component.

The section root **ContentNode** nodes use the following attributes:

| Attribute       | Type   | Description                                                  |
| :-------------- | :----- | :----------------------------------------------------------- |
| CONTENTTYPE     | string | Must be set to `SECTION`                                     |
| TITLE           | string | Label for the section divider                                |
| HDGRIDPOSTERURL | uri    | The image file for the icon to be displayed to the left of the section label when the screen resolution is set to HD. |
| SDGRIDPOSTERURL | uri    | The image file for the icon to be displayed to the left of the section label when the screen resolution is set to SD. |

## Sample app	

[MarkupListExample](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/MarkupListExample) is a sample app demonstrating MarkupList in action.
