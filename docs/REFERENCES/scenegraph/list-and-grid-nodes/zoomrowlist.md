---
title: "ZoomRowList"
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


The ZoomRowList node allows a row of the Row-Row Grid to smoothly zoom up to a larger size when that row has focus. Rows in this node are capable of gaining the focus while scrolling, and smoothly zooming up by the specified amount. The amount to zoom can be specified on a per row basis so that some rows can zoom up by a larger amount than others.

## Anatomy of a ZoomRowList node

ZoomRowList is a vertically scrolling list of ZoomRowItem's. ZoomRowItem refers to a horizontally scrolling row or items plus any annotations such as title or counter. In the diagram below, the light blue rectangle identifies what's included in a ZoomRowItem.

![roku815px - partsLabelled](https://image.roku.com/ZHZscHItMTc2/partsLabelled.jpg "partsLabelled")

#### ZoomRowItem's consist of four parts:

- **Row Title** - This is a built-in Label used to display a title for the row. The string that is displayed comes from the _title _field of the Row's ContentNode. The Row Title supports turning its display on or off, changing its position relative to the ZoomRowItem's coordinate system and modifying its color and font. This is identified by the **green** box in the diagram above.
- **Row Counter** - This is a built-in Label used to display a counter for the row (i.e. 3 of 14). The string that is displayed is automatically generating by the ZoomRowList. In addition to supporting the display attributes listed above for the Row Title, the Row Counter also supports the option of only displaying it when there are enough items in the row to fill up the entire width of the ZoomRowList. By default, the Row Counter is only displayed for the focused row. This is identified by the **orange** box in the diagram above.
- **Row Decoration** - Row Decoration refers to an optional custom RSG component that is used to supplement or replace the Row Title and Row Counter displayed by each ZoomRowItem. The Row Decoration supports several fields that can be used to control its appearances, such as the current height of the ZoomRowItem and the current focus percentage of the row. Some examples where this could be useful include:
  - Replacing the built-in Row Title with a more complex title that includes both text and icons
  - Adding a Bob to the ZoomRowItem that becomes visible as the row enters the focus position and displays details about the currently focused item in the row.In the picture above, the ZoomRowItem does not include a custom Row Decoration.
- **Row** - Row refers to the part of the ZoomRowItem that displays the horizontally scrolling set of Item nodes. Each Item uses a custom RSG component to render the associated data. The Row is identified by the **yellow** box in the diagram above. An Item is identified by the **magenta** box in the diagram above.

In some cases, Decoration is used to refer to all the parts of the ZoomRowItem other than the Row (i.e. the Row Title, Row Counter and Row Decoration).

ZoomRowList uses the same data model as RowList nodes. There is a single ContentNode, the root ContentNode, that is assigned to be the content of the entire ZoomRowList. The root ContentNode contains zero or more child ContentNode's that contain the data for each row of the ZoomRowList. These are referred to as row ContentNodes. Each of the row ContentNode's contain zero or more child ContentNode's that contain the data for each item in the row. These are referred to as item ContentNodes.

## Layout and coordinate systems

### Overall coordinate system and layout parameters

The illustration below shows the overall coordinate system used by the ZoomRowList (the green X-Y axis). The origin of the coordinate system defines the top/left point of the fixed focus location.

The heights of each ZoomRowItem is defined by the `rowZoomHeight` field if the row is focused and the `rowHeight` field if the row is not focused. As the row enters or leaves the focus position, the ZoomRowItem's height is smoothly interpolated between the two values. Each ZoomRowItem is separated from the next by the value specified in the `spacingAfterRow` field, shown in bright blue in the diagram.

The ZoomRowList's `itemClippingRect` field is used to specify the region where the items in each Row can appear. In this case, the itemClippingRect, shown in yellow in the diagram, is set so that no partial items to the left of ZoomRowList's origin are visible. Generally, setting the itemClippingRect to the smallest value that contains the item's that should be displayed provides optimal performance, so in this case, the width/height of the itemClippingRect is set to the distance between the origin of the ZoomRowList's coordinate system and the right/bottom edge of the screen. Note that the itemClippingRect does not clip the focus feedback indicator.

The `rowWidth` field specifies the maximum width of items in each Row before the item's wrap. If the total width of the items in the row is less than rowWidth, the focus will float left and right as the user navigates the row. If the total width of the items in the row exceeds rowWidth, the focus will stay fixed on the left and the items will animate left and right as the use navigates the row. In this case, the value of the rowWidth field has also been used to specify the position of the Row Counter.

![roku815px - overallCoordinateSystem](https://image.roku.com/ZHZscHItMTc2/overallCoordinateSystem.jpg "overallCoordinateSystem")

### Zoomed and unzoomed row layout parameters

The diagram below shows how the various `rowItem` fields are used to layout zoomed and not zoomed ZoomRowItem's. Each ZoomRowItem has its own coordinate system. The X coordinate of the origin the coordinate system is equal to the X coordinate of the overall ZoomRowList's coordinate system. The Y coordinate of the origin of the each ZoomRowItem's coordinate system is position at the top of each ZoomRowItem. The ZoomRowItem coordinate system is shown as green axes in the diagram.

The focused ZoomRowItem at the top uses the `rowItemZoomOffset` field to position its Row relative to the top of the ZoomRowItem's coordinate system. Similarly, the `rowItemZoomHeight` field is used to specify the height of the items in the Row. The width of the items in the Row is computed using the item's height and aspect ratio, which either comes from the `rowItemAspectRatio` field (if the `useDefaultAspectRatio` field is true) or from the `aspectRatio` field of each item's ContentNode if useDefaultAspectRatio is false.

Similarly, the unfocused ZoomRowItem occupying the second row uses the `rowItemOffset` field to position its Row relative to the top of the ZoomRowItem's coordinate system. Similarly, the `rowItemHeight` field is used to specify the height of the items in the Row. The aspect ratio is used to compute the width of each item the height as above. The `spacingAfterRowItem` field is used to specify the horizontal distance between items in the Row. This spacing is zoomed up by the same percentage as the rowHeight as the row gains focus.

In this illustration, there is no custom Row Decoration. The positions of Row Title and the Row Counter are specified relative to the origin of each ZoomRowItem by the `rowTitleOffset` and the `rowCounterOffset` fields, respectively. The Row Counter is right-aligned, so its right edge is located at the X coordinate of the rowCounterOffset.

![roku815px - rowLayout](https://image.roku.com/ZHZscHItMTc2/rowLayout.jpg "rowLayout")

### Custom row decoration

The illustration below is similar to the one above, but in this case, a custom Row Decoration component is used to display album details for the ZoomRowItem in the focused position. Observe in this case that the rowItemZoomYOffset for the zoomed row is much larger than the rowItemYOffset for the un-zoomed row. This causes the space between the top of the ZoomRowItem and it's horizontally scrolling Row of items to increase as the ZoomRowItem gains focus, allowing room for the album details to smoothly transition onscreen to fill that extra space.

Also, notice that the ratio of the focused/unfocused ZoomRowItem's overall height (rowZoom Height/row Height) is significantly larger than the ratio of the focus/unfocused heights of the ZoomRowItem's Row's (rowItemZoomHeight / rowItemHeight). To allow for the extra space occupied by the album details, the Row of items zooms up less than the overall ZoomRowItem does.

Also note that in this case, the itemClippingRect is set to reveal partial items to the left of the origin of the ZoomRowList. Since the first row contains enough items to wrap, the partial items are shown. In the second row, there are not enough items to wrap, so all the items are fully visible and no duplicate partial items are shown.

![roku815px - rowDecorationLayout](https://image.roku.com/ZHZscHItMTc2/rowDecorationLayout.jpg "rowDecorationLayout")

## ZoomRowList fields

ZoomRowList extends Group so has all the fields of Group as well its parent class Node.

Many ZoomRowList fields have an array of values as their type. Unless otherwise noted, the values in these arrays specify a value for each row in the ZoomRowList's data model. If no values are specified, a default value is used. If there are fewer items in the array than rows in the ZoomRowList's data model, the last value in the array is repeated as needed for the unspecified rows. If there are more items in the array than rows in the ZoomRowList's data model, the extra values are ignored.

One common use case for these array fields is to specify a special value for the first row in the array (a Hero row) and a second value for all other rows. In that case, the field would be set to `[ <Hero Row Value>, <Regular Row Value> ]` so that the Hero Row Value is used for the first row and the Regular Row Value is used for the remaining rows.

This table documents all the fields in ZoomRowList:


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Use</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>ContentNode</td>
<td>invalid</td>
<td>READ_WRITE</td>
<td>Specifies the content for the list. The content should be a single ContentNode that has one child ContentNode for each row. These child ContentNodes for each row should themselves contains child ContentNodes for each item in the row. See [ZoomRowList data model](doc:zoomrowlist#zoomrowlist-data-model) below for more details.</td>
</tr>
<tr>
<td>itemComponentName</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the name of an XML component for the items in each row. An instance of this component is created on demand for each visible item of each row. The XML component must define a specific interface as detailed [Item component fields](doc:zoomrowlist#item-component-fields) below.</td>
</tr>
<tr>
<td>rowWidth</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>This specifies a "safe" width for the row. Currently, it's only used if the displayed width of the zoomed Item's exceeds this width. If that occurs, the items in the row will wrap horizontally.  <br /><br />Once full floating focus functionality is added in a subsequent release, this will be used to specify the rightmost limit that the focus can reach as focus floats from left to right.</td>
</tr>
<tr>
<td>rowHeight</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the height of the ZoomRowItem when the row is not zoomed. Note that this includes the height of the Row and its Decorations. At least one value must be specified.</td>
</tr>
<tr>
<td>rowZoomHeight</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the height of the ZoomRowItem when the row is zoomed. As the row gains focus, the height of its ZoomRowItem will smoothly change from the row's itemHeight to the row's rowZoomHeight.  <br /><br />If no values are specified, none of the rows zoom.</td>
</tr>
<tr>
<td>spacingAfterRow</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Specifies the spacing between rows of the ZoomRowList. Note that this spacing value is not scaled by the zoomPercent.</td>
</tr>
<tr>
<td>itemClippingRect</td>
<td>Rect2D</td>
<td>AA with x, y, width, height set to zero</td>
<td>READ_WRITE</td>
<td>Specifies a clipping region for the ZoomRowItem's rendered. This provides control over which items are visible. For example, if the left value is set to a negative number, items to the left of the grid's item origin will be visible.  <br /><br />For best performance, this should be set so that the itemClippingRect exactly matches what's visible onscreen.  <br /><br />If this field is not set, heuristics are used to determine an acceptable clipping rectangle for the items in the ZoomRowList.This field will have the same value as rowFocusPercent unless the remainZoomedAboveFocus field is set to "never" or if the zoomed and un-zoomed height of a row are equal.</td>
</tr>
<tr>
<td>rowItemYOffset</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the vertical position of the Row relative to the top of its ZoomRowItem when the row is unfocused.  <br /><br />Combined with rowZoomYOffset, this allows the vertical position of the ZoomRowItem's Row to smoothly change relative to the top of the ZoomRowItem as the ZoomRowItem gains or loses focus.</td>
</tr>
<tr>
<td>rowItemZoomYOffset</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the vertical position of the Row relative to the top of its ZoomRowItem when the row is focused (i.e. zoomed).  <br /><br />Combined with rowYOffset, this allows the vertical position of the ZoomRowItem's Row to smoothly change relative to the top of the ZoomRowItem as the ZoomRowItem gains or loses focus.</td>
</tr>
<tr>
<td>rowItemHeight</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the height of each Item in a Row when the row is unfocused.  <br /><br />Combined with rowZoomItemHeight, this allows the height of each Item in a Row to be scaled differently than the height of the Row's ZoomRowItem. As the ZoomRowItem gains or loses focus, the height of each Item in the Row smoothly interpolated between the rowItemHeight and rowZoomItemHeight for that row.</td>
</tr>
<tr>
<td>rowItemZoomHeight</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the height of each Item in a Row when the row is focused (i.e. zoomed).  <br /><br />Combined with rowZoomItemHeight, this allows the height of each Item in a Row to be scaled differently than the height of the Row's ZoomRowItem. As the ZoomRowItem gains or loses focus, the height of each Item in the Row smoothly interpolated between the rowItemHeight and rowZoomItemHeight for that row.</td>
</tr>
<tr>
<td>rowItemAspectRatio</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the aspect ratio of the Items in a Row. This is used to compute the width of the Item's based on the interpolated row item height (see the rowItemHeight and rowZoomItemHeight fields above).  <br /><br />If useDefaultAspectRatio is true for that row, then the rowItemAspectRatio value is used to compute the width of each Item in the Row. If false, then if the ContentNode for the Item includes an aspectRatio field, that value is used. This allows different items in a Row to have different aspect ratios.  <br /><br />The rowItemAspectRatio values should be a floating point values that represent the ratio of the Item's width to height. For example, if the Item should have a 16 x 9 aspect ratio, this value specified would by 1.7777778 ( = 16 / 9).</td>
</tr>
<tr>
<td>spacingAfterRowItem</td>
<td>array of float</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>This specifies the horizontal spacing between Items in a Row. When the row is unfocused, this spacing is set to this value. As the row gains focus, this value scales by the same percentage as the row item height increases as it's interpolated between the rowItemHeight and the rowItemZoomHeight for the row.</td>
</tr>
<tr>
<td>useDefaultAspectRatio</td>
<td>array of Boolean</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>If set to false, rowItemAspectRatio is used to specify the aspect ratio for items in a Row. If set to true and if the ContentNode for an Item in the row includes an aspectRatio field, that value is used instead of the rowItemAspectRatio value. This allows different items in a Row to have different aspect ratios.</td>
</tr>
<tr>
<td>wrap</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If true, the items wrap from bottom to top. If false, the items do not wrap.</td>
</tr>
<tr>
<td>drawFocusFeedbackOnTop</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If true, the focus feedback indicator is drawn on top of (after) the items. If false, it is drawn below (before) the items.</td>
</tr>
<tr>
<td>drawFocusFeedback</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If true, the focus feedback indicator is drawn. If false, it is not drawn.</td>
</tr>
<tr>
<td>fadeFocusFeedbackWhenLongPressScrolling</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If true, when long press scrolling begins, the focus indicator will fade out and reappear when long press scrolling ends. If false, the focus indicator remains visible during long press scrolling.</td>
</tr>
<tr>
<td>focusBitmapUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the bitmap file used for the focus feedback indicator when the ZoomRowList has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.</td>
</tr>
<tr>
<td>focusBitmapBlendColor</td>
<td>color</td>
<td>0xFFFFFFFF</td>
<td>READ_WRITE</td>
<td>Blend the graphic image specified by <code>focusBitmapUri</code> with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by <code>focusBitmapUri</code>.</td>
</tr>
<tr>
<td>wrapDividerBitmapUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the bitmap file to use as a visual separator between the last and first list items when the list wraps. In most case, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap.</td>
</tr>
<tr>
<td>wrapDividerBitmapBlendColor</td>
<td>color</td>
<td>0xFFFFFFFF</td>
<td>READ_WRITE</td>
<td>Blend the graphic image specified by wrapDivider <code>BitmapUri</code> with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by wrapDivider<code>BitmapUri</code>.</td>
</tr>
<tr>
<td>wrapDividerHeight</td>
<td>float</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the height of the divider. The wrap divider bitmap will be scaled to this height. This height is also added to the row spacing after the last row to allow more space between the first and last rows when the divider is drawn.</td>
</tr>
<tr>
<td>wrapDividerWidth</td>
<td>float</td>
<td>0</td>
<td>READ_WRITE</td>
<td>Specifies the width of the divider. The wrap divider bitmap will be scaled to this width. If not specified, the width is set to the value of the <code>rowWidth</code> field.</td>
</tr>
<tr>
<td>wrapDividerOffset</td>
<td>Vector2D</td>
<td>0</td>
<td>READ_WRITE</td>
<td>By default, the wrap divider is drawn with its X-position set to 0 in the ZoomRowList's coordinate system and vertically centered in the space between the first and last rows (This space equals the spacing after the last row plus the row divider height). This field allows the position of the wrap divider to be adjusted relative to its default position.</td>
</tr>
<tr>
<td>showRowTitle</td>
<td>array of Boolean</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies whether the row title displayed.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "showRowLabel". The name was changed to "showRowTitle" for the ZoomRowList to indicate that the text for the label comes from the Row ContentNode's title field.</td>
</tr>
<tr>
<td>rowTitleOffset</td>
<td>array of Vector2D</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the offset of the Row Title for each row. The x-coordinate specifies the horizontal offset of the label from the left edge of the row. The y-coordinate specifies the vertical spacing of the top of the Row Title from the top of the row's coordinate system. If the array specified contains no values, a default offset value of <code>[0,0]</code> is used.</td>
</tr>
<tr>
<td>rowTitleFont</td>
<td>Font</td>
<td>invalid</td>
<td>READ_WRITE</td>
<td>Specifies the font for the Row Title's text.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "rowLabelFont" (see showRowTitle's description above for more details).</td>
</tr>
<tr>
<td>rowTitleColor</td>
<td>array of color</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the color of the Row Title's text.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "rowLabelColor" (see showRowTitle's description above for more details).</td>
</tr>
<tr>
<td>showRowCounter</td>
<td>array of Boolean</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies whether each row's Row Counter is displayed. Note that the Row Counter is displayed for the focused row even if the <code>showRowTitle</code> field value for that row is set to true.</td>
</tr>
<tr>
<td>rowCounterOffset</td>
<td>array of Vector2D</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the offset of the Row Counter for each row. The x-coordinate specifies the horizontal offset of the label from the left edge of the row. The y-coordinate specifies the vertical spacing of the top of the Row Counter from the top of the row's coordinate system. If the array contains fewer elements than the number of rows in the data model, the last value in the array is used as the offset for the labels of the extra rows. If the array specified contains no values, a default offset value of <code>[0,0]</code> is used.  <br /><br />Note that the Row Counter is right-aligned, so the x-coordinate of its rowCounterOffset is used to position the right edge of the Row Counter's Label node.</td>
</tr>
<tr>
<td>rowCounterFont</td>
<td>Font</td>
<td>invalid</td>
<td>READ_WRITE</td>
<td>Specifies the font for the Row Counter's text.  <br /><br /><strong>NOTE:</strong> RowList did not allow a different font for the Row Counter to be used. It always used the same font as the Row Title.</td>
</tr>
<tr>
<td>rowCounterColor</td>
<td>array of color</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>Specifies the font for the Row Counter's text.  <br /><br /><strong>NOTE:</strong> RowList did not allow a different color for the Row Counter to be used. It always used the same color as the Row Title.</td>
</tr>
<tr>
<td>showRowCounterForShortRows</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>When set to true, the Row Counter is shown for all rows. When set to false, the Row Counter is not shown if the total zoomed width of the items in the room is less than the value of the <code>rowWidth</code> field.</td>
</tr>
<tr>
<td>rowDecorationComponentName</td>
<td>array of strings</td>
<td>[]</td>
<td>READ_WRITE</td>
<td>Specifies the name of an XML component to decorate each row. An instance of this component is created on demand for each visible item of each row. The XML component must define a specific interface as detailed in the [Row decoration component fields](doc:zoomrowlist#row-decoration-component-fields) section below.</td>
</tr>
<tr>
<td>rowSelected</td>
<td>integer</td>
<td>-1</td>
<td>READ_ONLY</td>
<td>When an item is selected, set to the index of the selected row.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "itemSelected". This new name better reflects the field's purpose.</td>
</tr>
<tr>
<td>rowFocused</td>
<td>integer</td>
<td>-1</td>
<td>READ_ONLY</td>
<td>When a row gains the key focus, set to the index of the focused row.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "itemFocused". This new name better reflects the field's purpose.</td>
</tr>
<tr>
<td>rowUnfocused</td>
<td>integer</td>
<td>-1</td>
<td>READ_ONLY</td>
<td>When a row loses the key focus, set to the index of the unfocused row.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "itemUnfocused". This new name better reflects the field's purpose.</td>
</tr>
<tr>
<td>rowItemSelected</td>
<td>array of integer</td>
<td>[ ]</td>
<td>READ_ONLY</td>
<td>When an item is selected, set to a 2-element array, where element 0 contains the index of the row containing the selected item, and element 1 contains the index of the selected item in that row.</td>
</tr>
<tr>
<td>rowItemFocused</td>
<td>array of integer</td>
<td>[ ]</td>
<td>READ_ONLY</td>
<td>When an item gains the key focus, set to a 2-element array, where element 0 contains the index of the focused row, and element 1 contains the index of the focused item in that row.</td>
</tr>
<tr>
<td>scrollingStatus</td>
<td>Boolean</td>
<td>false</td>
<td>READ_ONLY</td>
<td>Set to true whenever the ZoomRowList is scrolling the focus horizontally or vertically.</td>
</tr>
<tr>
<td>rowsRendered</td>
<td>array of integer</td>
<td>[ ]</td>
<td>READ_ONLY</td>
<td>Contains a pair of indices that indicate the first and last Row ContentNode's that were rendered during the previous render. It is set at the end of each render.  <br /><br />For example, if rows 2, 3 and 4 were rendered, the field is set to <code>[2, 4]</code>  <br /><br />Note if the rows have wrapped vertically, the first value will be less than the second. So if there are 7 Row ContentNode's and itemsRendered is set to [ 6, 1] that indicates that Row ContentNode's 6, 0 and 1 were rendered.</td>
</tr>
<tr>
<td>rowItemsRendered</td>
<td>array of integer</td>
<td>[ ]</td>
<td>READ_ONLY</td>
<td>Contains an array of values that indicate what Row ContentNode's and what Item ContentNode's were rendered during the previous render. It is set at the end of each render.  <br /><br />The values in the arrays are triples of integers with each triple containing the index of the Row ContentNode, followed by the first and last index of the Item ContentNode's in that row that was rendered.  <br /><br />For example if rowItemsRender is set to [ 0, 4, 7, 1, 0, 2, 2, 0, 3 ] that indicates that Item ContentNode children 4 to 7 of Row ContentNode 0 were rendered, Item ContentNode children 0 to 2 of Row ContentNode 1 were rendered and Item ContentNode children 0 to 3 of Row ContentNode 2 were rendered.  <br /><br />The triples will appear in the order in which the rows were rendered and will contain one triple of values for each rendered row.  <br /><br />If the Item's in a row have wrapped horizontally, the first item index for that row will be greater than the second. For example, if row 3 has 8 Item ContentNode's and rowItemsRendered is set to [ 3, 6, 2], that indicates that Item ContentNode's 6, 7, 0, 1 and 2 of row 3 were rendered.</td>
</tr>
<tr>
<td>currFocusRow</td>
<td>float</td>
<td>-1.0</td>
<td>READ_ONLY</td>
<td>Set to the index of the row that currently overlaps the ZoomRowList's fixed focus position (i.e. y=0 in the ZoomRowList's coordinate system). Let's refer to that position as yFocusTop. The value is a floating point value where the integer part represents the row that overlaps yFocusTOp and the fractional part represents the percentage of the item that overlaps the fixed focus position. For example, a value of 2.3 indicates that the focus is 30% of the way between row's 2 and 3.  <br /><br />If currFocusRow is greater than the number of rows' in the content minus 1, that indicates that the focus is between the last row and the first row. For example, if the ZoomRowList's content has 8 rows, currFocusRow = 7.65 would indicate that the focus is 65% of the way between row 7 and row 0.</td>
</tr>
<tr>
<td>jumpToRow</td>
<td>integer</td>
<td>-1</td>
<td>WRITE_ONLY</td>
<td>When set to a valid item index, causes the list to immediately update so that the specified row moves into the focus position.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "jumpToItem". This new name better reflects the field's purpose.</td>
</tr>
<tr>
<td>jumpToRowItem</td>
<td>array of integer</td>
<td>[ ]</td>
<td>WRITE_ONLY</td>
<td>When set to a valid [ row, col ] index pair, causes the list to immediately update so that the specified row, col item moves into the focus position.</td>
</tr>
<tr>
<td>animateToRow</td>
<td>integer</td>
<td>-1</td>
<td>WRITE_ONLY</td>
<td><strong>Write-Only</strong>   <br />When set to a valid item index, causes the list to quickly scroll so that the specified row moves into the focus position.  <br /><br /><strong>NOTE:</strong> RowList has an identical field named "animateToItem". This new name better reflects the field's purpose.</td>
</tr>
<tr>
<td>remainZoomedAboveFocus</td>
<td>string</td>
<td>focusIsAtTop</td>
<td>READ_WRITE</td>
<td>This field controls whether the rows that appear above the focus row are shown in their zoomed size or un-zoomed size as they move in/out of the focus position.  <br /><br />If set to "focusIsAtTop" and the ZoomRowList's itemClippingRect's top is set 0.0, then rows will remain at their zoomed size as they enter/exit the focus region from above. The UX team has decided that this looks better as it minimizes the number of items simultaneously changing sizes as the user scrolls vertically.  <br /><br />If set to "never", then rows will zoom up/down as they enter/exit the focus region from above.  <br /><br />If set to "always", then rows will always remain at their zoomed size as they enter/exit the focus region from above regardless of the itemClippingRect's top value.</td>
</tr>
<tr>
<td>fadeOutAboveFocus</td>
<td>string</td>
<td>focusIsAtTop</td>
<td>READ_WRITE</td>
<td>This field controls whether the rows that appear above the focus row fade in/out as they move in/out of the focus position.  <br /><br />If set to "focusIsAtTop" and the ZoomRowList's itemClippingRect's top is set 0.0, then rows will fade in/out as they enter/exit the focus region from above.  <br /><br />If set to "never", then rows will not fade in/out as they enter/exit the focus region from above.  <br /><br />If set to "always", then rows will always fade in/out as they enter/exit the focus region from above regardless of the itemClippingRect's top value.</td>
</tr>
</tbody>
</table>


## ZoomRowList data model

A ZoomRowList node should have a single ContentNode as the root node stored in its content field. One child ContentNode should be added to the root node for each row in the list (these nodes can be thought of as `row nodes`). Each row node should contain one child ContentNode for each item in the row (these nodes can be thought of as `item nodes`).

#### Row ContentNode data bindings

| Attribute | Type   | Description                                         |
|-----------|--------|-----------------------------------------------------|
| title     | string | This is used as the string display in the Row Title |

#### Item ContentNode data bindings


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>aspectRatio</td>
<td>float</td>
<td>This specifies the aspectRatio for the item. It is used to compute the width from the interpolated row item height for row's where the useDefaultAspectRatio is set to false.<br /><br />The value should be a floating point value representing the ratio of the Item's width to height. For example, if the Item should have a 16 x 9 aspect ratio, this value specified would by 1.7777778 ( = 16/9).</td>
</tr>
</tbody>
</table>


## Item component fields

Each Item in the ZoomRowList is rendered using a custom XML component specified by the `itemComponentName` field value. An instance of this component is created for each visible Item in each Row of the ZoomRowList.

If the XML component contains interface fields that match the names shown in the table below, those fields will be updated by the ZoomRoowList node. This allows the XML component to dynamically alter the item's appearance by observing changes to these interface fields.

Note that the fields are updated in the order presented in the table below. Most notably, when the itemContent field is set initially, the other fields will have valid values. This allows the script to be made more efficient by delaying computations until the itemContent field is set in some cases.


<table>
<thead>
<tr>
<th>Field Name</th>
<th>Field Type</th>
<th>Access  Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>float</td>
<td>READ_ONLY</td>
<td>Set to the width of the Item.<br /><br />Note this is computed from the interpolated row item height scaled by the item's aspect ratio. The aspect ratio comes from either the rowItemAspectRatio field (if useDefaultAspectRatio for the row if true) or from the Item's ContentNode (if useDefaultAspectRatio for the row is false).</td>
</tr>
<tr>
<td>height</td>
<td>float</td>
<td>READ_ONLY</td>
<td>Set to the height of the Item.<br /><br />Note this is computed by interpolating the rowItemHeight and rowZoomItemHeight field values for the row.</td>
</tr>
<tr>
<td>index</td>
<td>integer</td>
<td>READ_ONLY</td>
<td>Set to the index of the Item ContentNode in the row's Row ContentNode associated with this item. For example, if the index is set to 2, that indicates that this item is associated with child 2 of the Row's ContentNode. Note that the index of the RowContent node is available via the rowIndex field.</td>
</tr>
<tr>
<td>rowIndex</td>
<td>integer</td>
<td>READ_ONLY</td>
<td>Set to the index of the Row ContentNode associated with this item. For example, if the index is set to 2, that indicates that this Item is part of row 2.</td>
</tr>
<tr>
<td>itemHasFocus</td>
<td>Boolean</td>
<td>READ_ONLY</td>
<td>Indicates whether the Item is currently the RowList's focused item. When scrolling starts, the itemHasFocus field for the currently focused Item is set to false. When scrolling ends, the itemHasFocus field for the newly focused Item is set to true. During the scrolling animation, all itemHasFocus fields are set to false.<br /><br />Only one Item's of the ZoomRowList will ever have itemHasFocus set to true. If the ZoomRowList does not have focus, all itemHasFocus fields of all Item's will be set to false.</td>
</tr>
<tr>
<td>rowHasFocus</td>
<td>Boolean</td>
<td>READ_ONLY</td>
<td>Set to true if the Row that contains this Item has focus, false otherwise. When scrolling starts, the rowHasFocus field for all Item's in the Row in the currently focused Row is set to false. When scrolling ends, the rowHasFocus field for all Item's the newly focused Row are set to true. During the scrolling animation, all rowHasFocus fields are set to false.<br /><br />Only the Item's in one Row of the ZoomRowList will ever have rowHasFocus set to true. If the ZoomRowList does not have focus, all rowHasFocus fields of all Item's will be set to false.</td>
</tr>
<tr>
<td>rowListHasFocus</td>
<td>Boolean</td>
<td>READ_ONLY</td>
<td>Set to true if the ZoomRowList that contains this Item has focus, false otherwise. The rowListHasFocus field of all Item's of the ZoomRowList will always have the same value.</td>
</tr>
<tr>
<td>itemContent</td>
<td>ContentNode</td>
<td>READ_ONLY</td>
<td>Contains the data to be displayed by the row list item. The relationship between data in the ContentNode node and the visual elements of the row list item is determined by the markup and scripts' of the item's XML component. Typically, an observer callback function of the itemContent field is used to update the row list item when the content changes.</td>
</tr>
<tr>
<td>focusPercent</td>
<td>float</td>
<td>READ_ONLY</td>
<td>A fractional value that smoothly changes from 0.0 to 1.0 as the Item gains focus and from 1.0 to 0.0 as the item loses focus. This value is typically used in the item's XML component to smoothly change some aspect of the Item's appearance as it moves horizontally in and out of the focus position.</td>
</tr>
<tr>
<td>rowFocusPercent</td>
<td>float</td>
<td>READ_ONLY</td>
<td>A fractional value that smoothly changes from 0.0 to 1.0 as the Item's Row gains focus and from 1.0 to 0.0 as the Item's Row loses focus. This value is typically used in the item's XML component to smoothly change some aspect of the Item's appearance as it's Row moves vertically in and out of the focus position.</td>
</tr>
<tr>
<td>rowHeightPercent</td>
<td>float</td>
<td>READ_ONLY</td>
<td>A fractional value that smoothly changes from 0.0 to 1.0 as the height of item's in the row animate between their unfocused height (rowHeightPercent=0.0) and focused height (rowHeightPercent=1.0) while gaining/losing focus. This value is typically used in the item's XML component to smoothly change some aspect of the Item's appearance as it's Row moves vertically in and out of the focus position.<br /><br />This field will have the same value as rowFocusPercent unless the remainZoomedAboveFocus field is set to "never" or if the zoomed and un-zoomed height of a row are equal.</td>
</tr>
</tbody>
</table>


## Row decoration component fields

If a `RowDecorationComponentName` is specified, an instance of this component is created as a child of each visible row's ZoomRowItem.

If the XML component contains interface fields that match the names shown in the table below, those fields will be updated by the ZoomRoowList node. This allows the XML component to dynamically alter the row decoration's appearance by observing changes to these interface fields.

Note that the fields are updated in the order presented in the table below. Most notably, when the itemContent field is set initially, the other fields will have valid values. This allows the script to be made more efficient by delaying computations until the itemContent field is set in some cases.


<table>
<thead>
<tr>
<th>Field Name</th>
<th>Field Type</th>
<th>Access Permisson</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>float</td>
<td>READ_ONLY</td>
<td>Set to the width of the row as specified in the ZoomRowList's rowWidth field.</td>
</tr>
<tr>
<td>height</td>
<td>float</td>
<td>READ_ONLY</td>
<td>Set to the height of the ZoomRowItem.</td>
</tr>
<tr>
<td>rowFocused</td>
<td>integer</td>
<td>READ_ONLY</td>
<td>Set to the index of the currently focused Item when the ZoomRowList's rowFocused field is set.</td>
</tr>
<tr>
<td>rowCounterText</td>
<td>string</td>
<td>READ_ONLY</td>
<td>Set to the text that is displayed by the Row Counter. This would typically be used if the default Row Counter is not shown and the row decoration component displays that information in another way.</td>
</tr>
<tr>
<td>rowContent</td>
<td>ContentNode</td>
<td>READ_ONLY</td>
<td>Contains the ContentNode associated with the Row.</td>
</tr>
<tr>
<td>rowFocusPercent</td>
<td>float</td>
<td>READ_ONLY</td>
<td>A fractional value that smoothly changes from 0.0 to 1.0 as the Item's Row gains focus and from 1.0 to 0.0 as the Item's Row loses focus. This value is typically used in the item's XML component to smoothly change some aspect of the Item's appearance as it's Row moves vertically in and out of the focus position.</td>
</tr>
<tr>
<td>rowHeightPercent</td>
<td>float</td>
<td>READ_ONLY</td>
<td>A fractional value that smoothly changes from 0.0 to 1.0 as the height of item's in the row animate between their unfocused height (rowHeightPercent=0.0) and focused height (rowHeightPercent=1.0) while gaining/losing focus. This value is typically used in the item's XML component to smoothly change some aspect of the Item's appearance as it's Row moves vertically in and out of the focus position.<br /><br />This field will have the same value as rowFocusPercent unless the remainZoomedAboveFocus field is set to "never" or if the zoomed and unzoomed height of a row are equal.</td>
</tr>
<tr>
<td>drawBeforeItems</td>
<td>Boolean</td>
<td>false</td>
<td><strong>Write-only</strong>. Controls whether the row decoration component is drawn before (true) or after the items (false) in a row. This allows a background image to be drawn behind the tiles in a row.</td>
</tr>
</tbody>
</table>


## Sample app

[zoomRowListDefaultLayoutTest](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/zoomRowListDefaultLayoutTest) is a sample app demonstrating the ZoomRowList in action.