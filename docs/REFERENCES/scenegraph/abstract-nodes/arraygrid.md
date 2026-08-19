---
title: ArrayGrid
excerpt: Abstract base class providing shared fields for list and grid node classes
deprecated: false
hidden: false
metadata:
  title: ArrayGrid
  description: >-
    ArrayGrid is an abstract base class that provides shared functionality to
    list and grid node classes such as LabelList, PosterGrid, MarkupGrid, and
    RowList.
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The ArrayGrid node class is an abstract base class that provides functionality to the list and grid node classes that are extended from ArrayGrid. The field value settings and their effect in this abstract base class depend in many cases on whether a list, or a grid, node class is extended from ArrayGrid, and the specific type of list or grid.

The following node classes extended from ArrayGrid derive their basic functionality from the ArrayGrid abstract node class:

* [LabelList](doc:labellist)
* [MarkupList](doc:markuplist)
* [PosterGrid](doc:postergrid)
* [MarkupGrid](doc:markupgrid)
* [RowList](doc:rowlist)

> ArrayGrid is not meant to be instantiated directly by app code

### Data Bindings

Each node class extended from the ArrayGrid abstract node class will have custom data bindings.

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
<td>content</td>
<td>ContentNode</td>
<td>none</td>
<td>READ_WRITE</td>
<td>Specifies the content meta-data for the list or grid. This field must be set with a ContentNode that specifies the content meta-data for the list or grid in order for the list or grid to be displayed. See the Data Bindings section of each list or grid reference description for details on the content meta-data that must be specified in the ContentNode</td>
</tr>
<tr>
<td>itemSize</td>
<td>vector2d</td>
<td>[0,0]</td>
<td>READ_WRITE</td>
<td>Specifies the width and height of each item in the list or grid. For list or grid items that are posters, itemSize is the value of a basePosterSize field and any sub-elements included with the poster</td>
</tr>
<tr>
<td>itemSpacing</td>
<td>vector2d</td>
<td>[0,0]</td>
<td>READ_WRITE</td>
<td>Specifies the horizontal and vertical spacing between the list or grid items. For lists, the vector2d Y-value specifies the vertical spacing between items in the list, and the vector2d X-value is ignored</td>
</tr>
<tr>
<td>numRows</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the number of visible rows displayed. Note that the actual number of rows may be more or less than the number specified depending on the number of items in the list or grid content</td>
</tr>
<tr>
<td>numColumns</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the number of columns in a grid. This field is not used for lists</td>
</tr>
<tr>
<td>focusRow</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the row that will have fixed focus if the vertFocusAnimationStyle field value is set to fixedFocusWrap</td>
</tr>
<tr>
<td>focusColumn</td>
<td>integer</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the column that will have fixed focus for grids if the horizFocusAnimationStyle field value is set to fixedFocusWrap. This field is not used for lists</td>
</tr>
<tr>
<td>horizFocusAnimationStyle</td>
<td>option string</td>
<td>floatingFocus</td>
<td>READ_WRITE</td>
<td>Specifies how the focus indicator moves in a row of grid items in response to the remote direction pad Left and Right key presses. This field is not used for lists. The possible values are: <table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>floatingFocus</td><td>Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible.</td></tr><tr><td>fixedFocusWrap</td><td>Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right.</td></tr></tbody></table></td>
</tr>
<tr>
<td>vertFocusAnimationStyle</td>
<td>option string</td>
<td>floatingFocus</td>
<td>READ_WRITE</td>
<td>Specifies how the focus indicator moves in a list or a column of grid items in response to the remote direction pad Up and Down key presses. The possible values are: <table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>floatingFocus</td><td>Causes the focus indicator to float up or down until it reaches the end of the list or grid column, at which point the focus indicator will stay fixed on the first or last item in the list or grid column, and the items will scroll up or down if there are items that were not visible. Note that when this style is set, section dividers are not rendered.</td></tr><tr><td>fixedFocusWrap</td><td>Causes the column to wrap around when the focus indicator reaches the first or last item in the list or grid column, as long as the list or grid column contains enough items to fill the list or grid column. If the list or grid column does not contain enough items to fill the list or grid column, the focus indicator will float up and down.</td></tr><tr><td>fixedFocus</td><td>Causes the focus to stay fixed on the upper leftmost item. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached.</td></tr></tbody></table></td>
</tr>
<tr>
<td>drawFocusFeedbackOnTop</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If the drawFocusFeedback field value is set to true, specifies whether the specified focus indicator bitmap is drawn on top of the focused list or grid items. The default value draws the specified focus indicator bitmap below the focused list or grid item</td>
</tr>
<tr>
<td>drawFocusFeedback</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>Causes a specified bitmap to be drawn on list or grid items to indicate focus has moved to that item</td>
</tr>
<tr>
<td>fadeFocusFeedbackWhenAutoScrolling</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>When set to true, the focus feedback indicator will quickly fade out when scrolling multiple items and fade back in when the scrolling ends. The focus feedback indicator will also after in and out when using the FFW/Rewind keys to scroll a page at a time. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.</td>
</tr>
<tr>
<td>itemcurrFocusFeedbackOpacity</td>
<td>Float</td>
<td>0</td>
<td>READ_WRITE</td>
<td>This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.</td>
</tr>
<tr>
<td>currFocusFeedbackOpacity</td>
<td>float</td>
<td>0</td>
<td>READ_ONLY</td>
<td>This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out.</td>
</tr>
<tr>
<td>focusBitmapUri</td>
<td>uri</td>
<td></td>
<td>READ_WRITE</td>
<td>If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate the focus has moved to that item. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default</td>
</tr>
<tr>
<td>focusFootprintBitmapUri</td>
<td>uri</td>
<td></td>
<td>READ_WRITE</td>
<td>If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate focus on that item, when the list or grid itself does not have focus. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default</td>
</tr>
<tr>
<td>focusBitmapBlendColor</td>
<td>color</td>
<td>0xFFFFFFFF</td>
<td>READ_WRITE</td>
<td>Blend the graphic image specified by focusBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by focusBitmapUri</td>
</tr>
<tr>
<td>focusFootprintBlendColor</td>
<td>color</td>
<td>0xFFFFFFFF</td>
<td>READ_WRITE</td>
<td>Blend the graphic image specified by focusFootprintBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by focusFootprintBitmapUri</td>
</tr>
<tr>
<td>skipFocusAnimations</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Specifies whether changes in the focus item should be animated. If this field is set to true, any scrolling or repositioning/scaling of the focus indicator occurs without an animation. This causes fields reflecting the focus status (itemFocused, currFocusRow, currFocusColumn) to be updated instantly and not transition smoothly between old and new values.  For example, currFocusRow will go directly from 3.0 to 4.0 instead of taking on values between 3.0 and 4.0.</td>
</tr>
<tr>
<td>wrapDividerBitmapUri</td>
<td>uri</td>
<td></td>
<td>READ_WRITE</td>
<td>If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies a custom bitmap to use as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default</td>
</tr>
<tr>
<td>wrapDividerWidth</td>
<td>float</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the width of a bitmap used as a visual divider between the last and first list or grid items when the list or grid wraps. Only set this field to use a value with a different appearance than the system default</td>
</tr>
<tr>
<td>wrapDividerHeight</td>
<td>float</td>
<td>36</td>
<td>READ_WRITE</td>
<td>If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the height of a bitmap used as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a value with a different appearance than the system default</td>
</tr>
<tr>
<td>fixedLayout</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>Specifies that a grid will have a layout of items of different widths configured by parameters included in a ContentNode for the grid. This field is not used by lists</td>
</tr>
<tr>
<td>numRenderPasses</td>
<td>integer</td>
<td>1</td>
<td>READ_WRITE</td>
<td>Specifies the number of rendering operations to display a complex list or grid. This allows you to achieve a performance increase by specifying that individual sub-elements of the list or grid items occur on sequential rendering operations, rather than all of the item sub-elements being rendered in one rendering operation, which is the default. If you set this field to a value greater than 1, you must specify the rendering operation number for each of the item sub-elements as the renderPass field value for that sub-element. No sub-element that has a renderPass field value of 0 (the default), or has a renderPass field value greater than the value of the numRenderPasses field, will render</td>
</tr>
<tr>
<td>rowHeights</td>
<td>array of floats</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Specifies differing heights for each list or grid row, to allow the height of each row to vary from row to row. The specified values override the itemSize field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSize field vector2d Y-value is used for any unspecified rows</td>
</tr>
<tr>
<td>columnWidths</td>
<td>array of floats</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Specifies differing widths for each grid column, to allow the width of each column to vary from column to column. This field is not used by lists. The specified values override the itemSize field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSize field vector2d X-value is used for any unspecified columns</td>
</tr>
<tr>
<td>rowSpacings</td>
<td>array of floats</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Specifies differing spaces between each list or grid row, to allow the spacing between rows to vary from row to row. The specified values override the itemSpacing field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSpacing field vector2d Y-value is used for any unspecified rows</td>
</tr>
<tr>
<td>columnSpacings</td>
<td>array of floats</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Specifies differing spaces between each grid column, to allow the spacing between columns to vary from column to column. This field is not used by lists. The specified values override the itemSpacing field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSpacing field vector2d X-value is used for any unspecified columns</td>
</tr>
<tr>
<td>sectionDividerBitmapUri</td>
<td>uri</td>
<td></td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the wrapDividerBitmapUri field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default</td>
</tr>
<tr>
<td>sectionDividerFont</td>
<td>font</td>
<td>system default</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies a custom font to use for the section title text. Only set this field to use a different font than the system default</td>
</tr>
<tr>
<td>sectionDividerTextColor</td>
<td>color</td>
<td>system default</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies a custom color to use for the section title text. Only set this field to use a different text color than the system default</td>
</tr>
<tr>
<td>sectionDividerSpacing</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap</td>
</tr>
<tr>
<td>sectionDividerWidth</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies the width of the section divider bitmap</td>
</tr>
<tr>
<td>sectionDividerHeight</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies the height of the section divider bitmap</td>
</tr>
<tr>
<td>sectionDividerMinWidth</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies the minimum width of the section divider bitmap</td>
</tr>
<tr>
<td>sectionDividerLeftOffset</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>If the ContentNode specifies sections for a list or grid, specifies the left offset of the section divider from the list or grid</td>
</tr>
<tr>
<td>itemClippingRect</td>
<td>rect2d</td>
<td>[ 0.0, 0.0, 0.0, 0.0 ]</td>
<td>READ_WRITE</td>
<td>Specifies a clipping region for the list or grid items</td>
</tr>
<tr>
<td>itemSelected</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>When a list or grid item is selected, set to the index of the selected item</td>
</tr>
<tr>
<td>itemFocused</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>When focus moves to a list or grid item, set to the index of the focused item</td>
</tr>
<tr>
<td>itemUnfocused</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>When focus moves away from a list or grid item, set to the index of the unfocused item</td>
</tr>
<tr>
<td>jumpToItem</td>
<td>integer</td>
<td>0</td>
<td>WRITE_ONLY</td>
<td>When set to a valid item index, causes the list or grid to immediately update so that the item at the specified index moves into focus, or focus moves to the item</td>
</tr>
<tr>
<td>animateToItem</td>
<td>integer</td>
<td>0</td>
<td>WRITE_ONLY</td>
<td>When set to a valid item index, causes the list or grid to quickly scroll so that the item at the specified index moves into focus, or focus moves to the item</td>
</tr>
<tr>
<td>currFocusRow</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Gives access to which row of a grid is in the focus position as the items scrolling around. So, currFocusRow = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render</td>
</tr>
<tr>
<td>currFocusColumn</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Gives access to which column of a grid is in the focus position as the items scrolling around. So, currFocusColumn = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render</td>
</tr>
<tr>
<td>currFocusSection</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Gives access to which section of a grid is in the focus position as the items scrolling around. So, currFocusSection = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render</td>
</tr>
</tbody>
</table>
