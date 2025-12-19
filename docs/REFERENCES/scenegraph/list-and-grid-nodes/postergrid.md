---
title: Postergrid
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

# PosterGrid

Extends [**ArrayGrid**](/docs/references/scenegraph/abstract-nodes/arraygrid.md)

The PosterGrid node is a simple grid class that can be used to display two-dimensional grids of posters. In addition to the poster, each item in the grid can include up to two lines of captions.

The number of columns in the PosterGrid is fixed and the number of rows varies. The items in the grid fill each row from left to right, then top to bottom in the following order:

![roku815px - Presentation1](https://image.roku.com/ZHZscHItMTc2/Presentation1.png "Presentation1")

The layout of rows and columns in the grid is very flexible. Possible layouts include:

- a simple layout with all posters in the grid having the same size
- a layout with the posters in some rows having varying heights and/or the posters in some columns having varying widths
- a layout with varying width rows and columns and items that occupy one or more rows and columns

The grid items can be organized into sections that are demarcated by labelled horizontal divider lines between the sections.

The PosterGrid node class includes the capability to automatically scale the loaded graphical images to fit within the target screen element area specified by the `basePosterSize` field value. To use this capability, select the scaling option you want as the value of the `posterDisplayMode` field.

### Example

The following screenshot is an example of the PosterGrid layout.

![roku815px - PosterGrid](https://image.roku.com/ZHZscHItMTc2/PosterGrid.png "PosterGrid")

## Grid Layouts

The PosterGrid class supports very flexible layouts. The philosophy is that simple layouts are easy to produce and complicated layouts are possible.

There are three general categories of layouts.

1. Simple layouts with all grid items and spacings between items equal.<br/><br/>To specify a simple layout:<br/><br/>Set the `basePosterSize` field to the width and height of each of the images in the grid and set the `itemSpacing` field to spacing between posters. For example, if basePosterSize is [300,100] and itemSpacing is [4, 8], then the posters will be 300 pixels wide and 100 pixels tall. There will be 4 pixels between the columns of the grid and 8 pixels between rows of the grid.

2. All the items are aligned in rows and columns, but the rows and columns (or the spacing between them) varies.<br/><br/> To specify this type of layout, use the columnWidths, columnSpacings, rowHeights, and rowSpacings fields. Each of these fields takes an array of values, specifying the values for each row width, column height or spacing between rows and columns. If there are more rows or columns in the grid than specified in the arrays for these fields., the corresponding simple layout field values are used for the missing values (e.g. basePosterSize[0] for missing columnWidth, etc.)<br/><br/>For example, suppose a grid is designed with 4 columns where each item was 80 pixels wide and had 4 pixels space between them. The grid data includes 10 rows, where the first 4 rows have items that are 120 pixel tall and the remaining 6 rows have items are 80 pixels tall. All the rows should have 6 pixels of space between them. To specify this layout, you'd set up the fields like this:

| Field          | Example                                        |
|----------------|------------------------------------------------|
| basePosterSize | [ 80, 80 ]                                     |
| itemSpacings   | [ 4, 6 ]                                       |
| rowHeights     | [ 120, 120, 120, 120, 80, 80, 80, 80, 80, 80 ] |

> Since the final 6 values in the rowHeights array equal basePosterSize[1], you can omit them, so in this case setting the rowHeights field to [ 120, 120, 120, 120 ]  would have the same result.

3. There are clear alignments in the row/column layout, but some items can span more than one one row or column (plus the space in between).<br/><br/>To specify this type of layout, set up the fields as in case 1 or 2 to define the sizes of the rows/columns. If any of the grid items will occupy more than one row or column, then the metadata for each grid item must contain extra metadata specifying the starting row, starting column, numbers of rows and number of columns that the item occupies. In addition, the fixedLayout field must be set to true. <br/><br/>For example, if a grid item is supposed to span columns 2 and 3 and rows 3 through 6, then in addition to the URL for the poster, the metadata for that item would include (X = 2, Y = 3, W = 2, H = 4). W is set to 2 because the item is 2 columns wide. Similarly H is set to 4 because the item is 4 columns tall.<br/><br/>The total pixel width of the item would be the (width of column 2) + (spacing between columns 2 & 3) + (width of column 3). Similarly, the height of the item would be the sum of the heights of columns 3, 4, 5 and 6, plus the spacings between columns 3 & 4, 4 & 5 and 5 & 6.<br/><br/>The X and Y indices start from 0 (i.e. the first columns is X = 0).

## Fields

| Field                          | Type              | Default                                   | Access Permission | Description           |
| ------------------------------ | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| content | ContentNode | none | READ_WRITE | Specifies the content for the list. See [Data bindings](/docs/references/scenegraph/list-and-grid-nodes/markuplist.md#data-bindings) below for more details.<br/>If the data contains section markers, section dividers will be drawn between each section. These section dividers may contain an icon and/or a string. |
| basePosterSize | vector2d | [0,0] | READ_WRITE | Specifies the width and height of the posters in the grid. |
| useAtlas | Boolean | true | READ_WRITE | Enables a performance optimization when most of the poster items displayed in the grid have the same size. The field value toggles the use of a texture atlas that stores the posters in the grid. The default is true, since in many cases, most of the posters in the grid have the same size as determined by the `basePosterSize` field value. In this case, using the texture atlas can provide a rendering performance benefit. For grids that have more complicated layouts, that include several posters that have sizes that differ from the value of `basePosterSize`, or for grids where there are only a few large posters (about five to eight, or posters that are about a quarter of the screen height or width) displayed at the same time, it is best for this field to be set to `false`. |
| posterDisplayMode | option string | noScale | READ_WRITE | Provides automatic scaling of posters, if `useAtlas` is set to false. If you intend to load very large graphical images, such as larger than the user interface resolution, you must set one of the scaling options other than `noScale`, otherwise the image may fail to load. The following are the possible field values:<br/><br/>${posterDisplayMode} |
| itemSpacing | vector2d | [0,0] | READ_WRITE | The second value of the vector specifies the vertical spacing between items in the list. The first value of the vector is ignored. |
| numColumns | integer | 0 | READ_WRITE | Specifies the number of columns in the grid |
| numRows | integer | 12 | READ_WRITE | Specifies the number of visible rows displayed. The actual number of rows may be more or less than the number of visible rows specified depending on the number of items in the list content. |
| rowHeights | array of floats | [ ] | READ_WRITE | When specified, the rowHeights field specifies the heights of the poster for each row of the grid. This allows the height of each row of the grid to vary from row to row.<br/><br/>The rowHeights values override the height specified in element 1 of the basePosterSize field. If the rowHeights array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the basePosterSize field is used as the height of the excess rows. |
| columnWidths | array of floats | [ ] | READ_WRITE | When specified, the columnWidths field specifies the widths of the poster for each column of the grid. This allows the width of each column of the grid to vary from column to column.<br/><br/>The columnWidths values override the width specified in element 0 of the basePosterSize field. If the columnWidths array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the basePosterSize field is used as the width of the excess columns. |
| rowSpacings | array of floats | [ ] | READ_WRITE | When specified, the rowSpacings field specifies the spacing after each row of the grid. This allows the spacing between rows to vary from row to row.<br/><br/>The rowSpacings values override the vertical spacing specified in element 1 of the itemSpacing field. If the rowSpacings array contains fewer elements than the number of rows needed to display all the items in the grid, element 1 of the itemSpacing field is used as the spacing after the excess rows. |
| columnSpacings | array of floats | [ ] | READ_WRITE | When specified, the columnSpacings field specifies the spacing after each column of the grid. This allows the spacing between columns to vary from column to column.<br/><br/>The columnSpacings values override the horizontal spacing specified in element 0 of the itemSpacing field. If the columnSpacings array contains fewer elements than the number of columns specified by the numColumns field, element 0 of the itemSpacing field is used as the spacing after the excess columns. |
| fixedLayout | Boolean | false | READ_WRITE | When fixedLayout is false, the PosterGrid assigns each item in the data model to sequential cells in the grid (or the section if the data model includes section information).<br /><br />When fixedLayout is true, the data models using the X, Y, W and H attributes to specify which cells of the grid each item should occupy, where X is the column number, Y is the row number, W is the number of columns the item occupies and H is the number of rows the item occupies.<br/><br/>Fixed layout should only be set to true for cases where one or more items in the grid should span multiple rows or columns. |
| imageWellBitmapUri | uri |  | READ_WRITE | Specifies the bitmap file to use to suggest where images would appear for empty grids and empty sections of grids. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| loadingBitmapUri | uri |  | READ_WRITE | Specifies a bitmap file to display while a grid item's poster is loading.<br /><br />To execute a seamless cross-fade transition between posters, set the **loadingBitmapUri** of the next poster to be shown to the uri of the currently displayed poster. |
| loadingBitmapOpacity | float | 1.0 | READ_WRITE | Specifies an opacity value used to render the loading bitmap |
| failedBitmapUri | uri |  | READ_WRITE | Specifies a bitmap file to display when a grid item poster fails to load |
| failedBitmapOpacity | float | 1.0 | READ_WRITE | Specifies an opacity value used to render the failed bitmap |
| caption1Font | font | system default | READ_WRITE | Specifies the font for the grid item first caption |
| caption1Color | color | 0xddddddff | READ_WRITE | Specifies the color for the grid item first caption |
| caption1NumLines | integer | 0 | READ_WRITE | Specifies the number of lines to render for the grid item first caption |
| caption2Font | font | system default | READ_WRITE | Specifies the font for the grid item second caption |
| caption2Color | color | 0xddddddff | READ_WRITE | Specifies the color for the grid item second caption |
| caption2NumLines | integer | 0 | READ_WRITE | Specifies the number of lines to render for the grid item second caption |
| captionBackgroundBitmapUri | uri |  | READ_WRITE | Specifies a bitmap file to render as a background for the grid item captions |
| captionHorizAlignment | string | center | READ_WRITE | Specifies the horizontal positioning of the grid item captions. Possible values are:<br/><br/>${captionHorizAlignment}<br/><br/>Set enableCaptionScrolling to false to use captionHorizAlignment |
| captionVertAlignment | string | below | READ_WRITE | Specifies the vertical positioning of the grid item captions. Possible values are:<br/><br/>${captionVertAlignment} |
| captionLineSpacing | float | 0 | READ_WRITE | Specifies the spacing in pixels between lines of the caption |
| showBackgroundForEmptyCaptions | Boolean | true | READ_WRITE | If a caption background is specified, this field specifies whether or not to display the caption background when the caption text is empty |
| enableCaptionScrolling | Boolean | true | READ_WRITE | Specifies whether or not to scroll single line captions when it is necessary to ellipsize the caption because it is wider the column containing the grid item |
| drawFocusFeedback | Boolean | true | READ_WRITE | Specifies whether or not the focus indicator bitmap is displayed |
| drawFocusFeedbackOnTop | Boolean | false | READ_WRITE | Specifies whether the focus indicator bitmap is drawn below or on top of the list items |
| focusBitmapUri | uri |  | READ_WRITE | Specifies the bitmap file used for the focus indicator when the list has focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| focusFootprintBitmapUri | uri |  | READ_WRITE | Specifies the bitmap file used for the focus indicator when the list does not have focus. In most cases, this should be a 9-patch image that specifies both expandable regions as well as margins. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| focusBitmapBlendColor          | color           | 0xFFFFFFFF     | READ_WRITE        | Blend the graphic image specified by `focusBitmapUri` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by `focusBitmapUri.` |
| focusFootprintBlendColor | color | 0xFFFFFFFF | READ_WRITE | Blend the graphic image specified by `focusFootprintBitmapUri` with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by `focusFootprintBitmapUri`. |
| wrapDividerBitmapUri           | uri             | ""             | READ_WRITE        | Specifies the bitmap file to use as a visual separator between the last and first list items when the list wraps. In most case, this should be a 9-patch image that specifies both expandable regions. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap. |
| wrapDividerHeight | float | 0.0 | READ_WRITE | Specifies the height of the wrap divider, the visual separator between the last and first list items when the list wraps. The bitmap for the wrap divider is scaled to this height. The width of the wrap divider is set to the width of the list items as specified by the `itemSize` field width value. |
| sectionDividerBitmapUri        | uri             |                | READ_WRITE        | If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the `wrapDividerBitmapUri` field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default. |
| sectionDividerFont             | font            | system default | READ_WRITE        | Specifies the font for section divider labels                |
| sectionDividerTextColor        | color           | 0xddddddff     | READ_WRITE        | Specifies the text color for section divider labels          |
| sectionDividerSpacing          | float           | 10             | READ_WRITE        | Specifies the spacing between the items appearing in the section divider (e.g. the spacing between the section divider icon, the section divider label, and the section divider bitmap). Note the section divider does not always include an icon and/or a title. |
| sectionDividerHeight           | float           | 40             | READ_WRITE        | Specifies the height of the section dividers. The width of the section dividers is determined by the width of the list items as specified by the itemSize field width value. |
| sectionDividerMinWidth         | float           | 117            | READ_WRITE        | Specifies the minimum width of the section divider bitmap. The section divider label will be ellipsized if necessary in order to ensure that the section divider bitmap meets the minimum width. |
| sectionDividerLeftOffset       | float           | 0              | READ_WRITE        | Number of pixels to offset the left edge of the section divider relative to the left edge of the list items. |
| itemSelected                   | integer         | 0              | READ_ONLY         | When a list item is selected, itemSelected is set to the index of the selected item. |
| itemFocused                    | integer         | 0              | READ_ONLY         | When a list item gains the key focus, set to the index of the focused item. |
| itemUnfocused                  | integer         | 0              | READ_ONLY         | When a list item loses the key focus, set to the index of the unfocused item. |
| jumpToItem                     | integer         | 0              | WRITE_ONLY        | When set to a valid item index, this causes the list to immediately update so that the specified index moves into the focus position. |
| animateToItem                  | integer         | 0              | WRITE_ONLY        | When set to a valid item index, this causes the list to quickly scroll so that the specified index moves into the focus position. |


## Data bindings

A PosterGrid node should have a single ContentNode as the root node in its content field to supply the required data. The structure of the rest of the data model depends on whether or not the grid items are to be grouped into sections.

**List items not grouped into sections**

If the grid items are not to be grouped into sections, one child ContentNode should be added to the root node for each item in the grid (these child nodes can be thought of as *item nodes*). Item nodes should have their ContentNode attributes set as shown in the table below.

| Attribute                     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HDGRIDPOSTERURL / HDPOSTERURL | uri     | The image file for the item poster when the screen resolution is set to HD. HDGRIDPOSTERURL is used if non-empty. HDPOSTERURL is used otherwise.                                                                                                                                                                                                                                                      |
| SDGRIDPOSTERURL / SDPOSTERURL | uri     | The image file for the item poster when the screen resolution is set to SD. SDGRIDPOSTERURL is used if non-empty. SDPOSTERURL is used otherwise.                                                                                                                                                                                                                                                      |
| SHORTDESCRIPTIONLINE1         | string  | The text for the first grid item caption.                                                                                                                                                                                                                                                                                                                                                             |
| SHORTDESCRIPTIONLINE2         | string  | The text for the second grid item caption.                                                                                                                                                                                                                                                                                                                                                            |
| X                             | integer | When the fixedLayout field is set to true, this specifies the first row of the grid occupied by this item, where 0 refers to the first row. Note that there can be more rows in the data than visible rows, where the number of visible rows is specified by the numRows field.<br/><br/>For example, if the data model contains enough data to fill 12 rows, X would be set to a value from 0 to 11. |
| Y                             | integer | When the fixedLayout field is set to true, this specifies the first column of the grid occupied by this item, where 0 refers to the first column. Note that the number of columns is always specified by the numColumns field, regardless of how many items are in the data model.<br/><br/>For example, if the numColumns field is set to 3, Y would be set to 0, 1 or 2.                            |
| W                             | integer | When the fixedLayout field is set to true, this specifies how many columns the grid item occupies. If not specified, the default value of 1 is used.<br/><br/>For example, if the numColumns field were set to 3 and a grid item is to occupy the rightmost two columns, X would be set to 1 and W would be set to 2.                                                                                 |
| H                             | integer | When the fixedLayout field is set to true, this specifies how many rows the grid item occupies. If not specified, the default value of 1 is used.<br/><br/>For example, if a grid item is to occupy the the third, fourth and fifth rows, Y would be set to 2 and W would be set to 3.                                                                                                                |

**List items grouped into sections**

If the grid items are to be grouped into sections, one child ContentNode should be added to the root node for each section in the grid (these child nodes can be thought of as *section roots*). Each section root should contain one child ContentNode for each item in the section (that is, *item nodes*). Each item ContentNode uses the same attributes as the item nodes when there are no sections, as shown in the table above.

The section root ContentNodes use the following attributes:

| Attribute            | Type    | Description                                                                                                                                                                                                 |
|----------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONTENTTYPE          | string  | Must be set to `SECTION`                                                                                                                                                                                    |
| TITLE                | string  | Label for the section divider                                                                                                                                                                               |
| HDGRIDPOSTERURL      | uri     | The image file for the icon to be displayed to the left of the section label when the screen resolution is set to HD.                                                                                       |
| SDGRIDPOSTERURL      | uri     | The image file for the icon to be displayed to the left of the section label when the screen resolution is set to SD.                                                                                       |
| GRIDCAPTION1NUMLINES | integer | Overrides the `caption1NumLines` field for this section of the grid, allowing different sections to display different caption layouts. If not specified, the value of the `caption1NumLines` field is used. |
| GRIDCAPTION2NUMLINES | integer | Overrides the `caption2NumLines` field for this section of the grid, allowing different sections to display different caption layouts. If not specified, the value of the `caption2NumLines` field is used. |

## Example

The following creates a grid of posters with two captions below each poster graphical image.

**PosterGrid Node class example**
~~~~
<?xml version="1.0" encoding="utf-8" ?>

<!--********** Copyright 2015 Roku Corp.  All Rights Reserved. **********-->

<component   name="postergridtest"   extends="Group"   initialFocus="testPosterGrid" >

<script type="text/brightscript" >
<![CDATA[
sub init()
  m.testlabel = m.top.FindNode("testLabel")
  m.testpostergrid = m.top.FindNode("testPosterGrid")
  m.testpostergridcontent = createObject("roSGNode","ContentNode")
  m.readPosterGridTask = createObject("roSGNode","postergridCR")
  m.readPosterGridTask.setField("postergriduri","pkg:/server/postergrid.xml")
  m.readPosterGridTask.observeField("gotitem","buildpostergrid")
  m.readPosterGridTask.observeField("gotcontent","showpostergrid")
  m.readPosterGridTask.control = "RUN"
  m.top.setFocus(true)
end sub

sub buildpostergrid()
  gridposter = createObject("roSGNode","ContentNode")
  gridposter.hdgridposterurl = m.readPosterGridTask.hdgridposterurl
  gridposter.hdposterurl = m.readPosterGridTask.hdposterurl
  gridposter.sdgridposterurl = m.readPosterGridTask.sdgridposterurl
  gridposter.sdposterurl = m.readPosterGridTask.sdposterurl
  gridposter.shortdescriptionline1 = m.readPosterGridTask.shortdescriptionline1
  gridposter.shortdescriptionline2 = m.readPosterGridTask.shortdescriptionline2
  gridposter.x = m.readPosterGridTask.xposterpos
  gridposter.y = m.readPosterGridTask.yposterpos
  gridposter.w = m.readPosterGridTask.wnumcols
  gridposter.h = m.readPosterGridTask.hnumrows
  m.testpostergridcontent.appendChild(gridposter)
end sub

sub showpostergrid()
  m.testlabel.text = "Here's the PosterGrid: "
  m.testpostergrid.content=m.testpostergridcontent
  m.testpostergrid.visible=true
  m.testpostergrid.setFocus(true)
end sub
]]>
</script>

<children>

<Label
  id="testLabel"
  translation="[100,32]"
  text="Building PosterGrid... "
  />

<PosterGrid
  id="testPosterGrid"
  translation="[100,100]"
  basePosterSize="[240,240]"
  itemSpacing="[32,32]"
  caption1NumLines="1"
  caption2NumLines="1"
  numColumns="4"
  numRows="3"
  />

</children>

</component>
~~~~

{#captionHorizAlignment}

| Value  | Meaning                                                     |
|--------|-------------------------------------------------------------|
| left   | Left-justify the caption relative to the grid item poster   |
| center | Center-justify the caption relative to the grid item poster |
| right  | Right-justify the caption relative to the grid item poster  |

{#captionVertAlignment}

| Value  | Meaning                                                                                          |
|--------|--------------------------------------------------------------------------------------------------|
| above  | Position the caption so the bottom of the caption lies just above the grid item poster           |
| top    | Align the top of the caption with the top edge of the grid item poster                           |
| center | Align the vertical center of the caption with the vertical center of the of the grid item poster |
| bottom | Align the bottom of the caption with the bottom edge of the grid item poster                     |
| below  | Position the caption so the top of the caption lies just below the grid item poster              |

{#posterDisplayMode}

| Option       | Effect                                                                                                                                                                                                      |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| noScale      | No scaling                                                                                                                                                                                                  |
| scaleToFit   | Scale the image to fit into the target screen element area, preserving the aspect ratio but "letterboxing" or "pillarboxing" the image (background-color bars at the top/bottom or left/right of the image) |
| scaleToFill  | Stretch the image width and height dimensions to fill the target screen element area, distorting the image if the target screen element area has a different aspect ratio than the image                    |
| scaleToZoom | Scale the image to fill the target screen element area, preserving the aspect ratio but not "letterboxing" or "pillarboxing" the image, with some of the image cropped out                                  |

## Sample app	
[PosterGridExample](https://github.com/rokudev/samples/tree/master/ux%20components/lists%20and%20grids/PosterGridExample) is a sample app demonstrating PosterGrid in action.
