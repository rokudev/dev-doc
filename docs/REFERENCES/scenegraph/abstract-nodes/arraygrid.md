---
title: ArrayGrid
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

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>
      <th style={{ textAlign: "left" }}>
        Type
      </th>
      <th style={{ textAlign: "left" }}>
        Default
      </th>
      <th style={{ textAlign: "left" }}>
        Access Permission
      </th>
      <th style={{ textAlign: "left" }}>
        Description
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
      <th style={{ textAlign: "left" }}>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        content
      </td>
      <td style={{ textAlign: "left" }}>
        ContentNode
      </td>
      <td style={{ textAlign: "left" }}>
        none
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the content meta-data for the list or grid. This field must be set with a ContentNode that specifies the content meta-data for the list or grid in order for the list or grid to be displayed. See the Data Bindings section of each list or grid reference description for details on the content meta-data that must be specified in the ContentNode
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemSize
      </td>
      <td style={{ textAlign: "left" }}>
        vector2d
      </td>
      <td style={{ textAlign: "left" }}>
        [0,0]
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the width and height of each item in the list or grid. For list or grid items that are posters, itemSize is the value of a basePosterSize field and any sub-elements included with the poster
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemSpacing
      </td>
      <td style={{ textAlign: "left" }}>
        vector2d
      </td>
      <td style={{ textAlign: "left" }}>
        [0,0]
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the horizontal and vertical spacing between the list or grid items. For lists, the vector2d Y-value specifies the vertical spacing between items in the list, and the vector2d X-value is ignored
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        numRows
      </td>
      <td style={{ textAlign: "left" }}>
        integer
      </td>
      <td style={{ textAlign: "left" }}>
        0
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the number of visible rows displayed. Note that the actual number of rows may be more or less than the number specified depending on the number of items in the list or grid content
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        numColumns
      </td>
      <td style={{ textAlign: "left" }}>
        integer
      </td>
      <td style={{ textAlign: "left" }}>
        0
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the number of columns in a grid. This field is not used for lists
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusRow
      </td>
      <td style={{ textAlign: "left" }}>
        integer
      </td>
      <td style={{ textAlign: "left" }}>
        0
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the row that will have fixed focus if the vertFocusAnimationStyle field value is set to fixedFocusWrap
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusColumn
      </td>
      <td style={{ textAlign: "left" }}>
        integer
      </td>
      <td style={{ textAlign: "left" }}>
        0
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        Specifies the column that will have fixed focus for grids if the horizFocusAnimationStyle field value is set to fixedFocusWrap. This field is not used for lists
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
      <td style={{ textAlign: "left" }}>
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        horizFocusAnimationStyle
      </td>
      <td style={{ textAlign: "left" }}>
        option string
      </td>
      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>
      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>
      <td style={{ textAlign: "left" }}>
        <table>
          <tr>
            <td>Option</td>
            <td>Effect</td>
          </tr>
          <tr>
            <td>floatingFocus</td>
            <td>Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible.</td>
          </tr>
          <tr>
            <td>fixedFocusWrap</td>
            <td>Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right.</td>
          </tr>
        </table>
      </td>

      <td style={{ textAlign: "left" }}>
        Option
      </td>

      <td style={{ textAlign: "left" }}>
        Effect
      </td>

      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible.
      </td>

      <td style={{ textAlign: "left" }}>
        fixedFocusWrap
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        Option
      </td>

      <td style={{ textAlign: "left" }}>
        Effect
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus indicator to float left or right until it reaches the end of the row, at which point the focus indicator will stay fixed on the first or last item in the row, and the items will scroll left or right if there were items that were not visible.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        fixedFocusWrap
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the row to wrap around when the focus indicator reaches the first or last item in the row, as long as the row contains enough items to fill the row. If the row does not contain enough items to fill the row, the focus indicator will float left and right.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        vertFocusAnimationStyle
      </td>

      <td style={{ textAlign: "left" }}>
        option string
      </td>

      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        <table>
          <tr>
            <td>Option</td>
            <td>Effect</td>
          </tr>
          <tr>
            <td>floatingFocus</td>
            <td>Causes the focus indicator to float up or down until it reaches the end of the list or grid column, at which point the focus indicator will stay fixed on the first or last item in the list or grid column, and the items will scroll up or down if there are items that were not visible. Note that when this style is set, section dividers are not rendered.</td>
          </tr>
          <tr>
            <td>fixedFocusWrap</td>
            <td>Causes the column to wrap around when the focus indicator reaches the first or last item in the list or grid column, as long as the list or grid column contains enough items to fill the list or grid column. If the list or grid column does not contain enough items to fill the list or grid column, the focus indicator will float up and down.</td>
          </tr>
          <tr>
            <td>fixedFocus</td>
            <td>Causes the focus to stay fixed on the upper leftmost item. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached.</td>
          </tr>
        </table>
      </td>

      <td style={{ textAlign: "left" }}>
        Option
      </td>

      <td style={{ textAlign: "left" }}>
        Effect
      </td>

      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus indicator to float up or down until it reaches the end of the list or grid column, at which point the focus indicator will stay fixed on the first or last item in the list or grid column, and the items will scroll up or down if there are items that were not visible. Note that when this style is set, section dividers are not rendered.
      </td>

      <td style={{ textAlign: "left" }}>
        fixedFocusWrap
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the column to wrap around when the focus indicator reaches the first or last item in the list or grid column, as long as the list or grid column contains enough items to fill the list or grid column. If the list or grid column does not contain enough items to fill the list or grid column, the focus indicator will float up and down.
      </td>

      <td style={{ textAlign: "left" }}>
        fixedFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus to stay fixed on the upper leftmost item. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached.
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        Option
      </td>

      <td style={{ textAlign: "left" }}>
        Effect
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        floatingFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus indicator to float up or down until it reaches the end of the list or grid column, at which point the focus indicator will stay fixed on the first or last item in the list or grid column, and the items will scroll up or down if there are items that were not visible. Note that when this style is set, section dividers are not rendered.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        fixedFocusWrap
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the column to wrap around when the focus indicator reaches the first or last item in the list or grid column, as long as the list or grid column contains enough items to fill the list or grid column. If the list or grid column does not contain enough items to fill the list or grid column, the focus indicator will float up and down.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        fixedFocus
      </td>

      <td style={{ textAlign: "left" }}>
        Causes the focus to stay fixed on the upper leftmost item. As the user scrolls down, the row containing the previously selected item scrolls up off screen. Scrolling continues until the last row is reached.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        drawFocusFeedbackOnTop
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        false
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the drawFocusFeedback field value is set to true, specifies whether the specified focus indicator bitmap is drawn on top of the focused list or grid items. The default value draws the specified focus indicator bitmap below the focused list or grid item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        drawFocusFeedback
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        true
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Causes a specified bitmap to be drawn on list or grid items to indicate focus has moved to that item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        fadeFocusFeedbackWhenAutoScrolling
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        false
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        When set to true, the focus feedback indicator will quickly fade out when scrolling multiple items and fade back in when the scrolling ends. The focus feedback indicator will also after in and out when using the FFW/Rewind keys to scroll a page at a time. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemcurrFocusFeedbackOpacity
      </td>

      <td style={{ textAlign: "left" }}>
        Float
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out. Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        currFocusFeedbackOpacity
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        This field provides access to the current opacity of the focus feedback indicator. It can be used to have other items on the screen fade in/out when the focus feedback indicator fades in/out.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>
        uri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate the focus has moved to that item. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusFootprintBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>
        uri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the drawFocusFeedback field value is set to true, specifies a custom bitmap to be drawn on list or grid items to indicate focus on that item, when the list or grid itself does not have focus. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions as well as margins to fit around the item, which is the type of bitmap used as the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusBitmapBlendColor
      </td>

      <td style={{ textAlign: "left" }}>
        color
      </td>

      <td style={{ textAlign: "left" }}>
        0xFFFFFFFF
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Blend the graphic image specified by focusBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus indicator graphic image with a different color than the image specified by focusBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        focusFootprintBlendColor
      </td>

      <td style={{ textAlign: "left" }}>
        color
      </td>

      <td style={{ textAlign: "left" }}>
        0xFFFFFFFF
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Blend the graphic image specified by focusFootprintBitmapUri with the specified color. If set to the default, 0xFFFFFFFF, no color blending will occur. Set this field to show a focus footprint indicator graphic image with a different color than the image specified by focusFootprintBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        skipFocusAnimations
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        false
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies whether changes in the focus item should be animated. If this field is set to true, any scrolling or repositioning/scaling of the focus indicator occurs without an animation. This causes fields reflecting the focus status (itemFocused, currFocusRow, currFocusColumn) to be updated instantly and not transition smoothly between old and new values.  For example, currFocusRow will go directly from 3.0 to 4.0 instead of taking on values between 3.0 and 4.0.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        wrapDividerBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>
        uri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies a custom bitmap to use as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a bitmap with a different appearance than the system default. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        wrapDividerWidth
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Additionally, the focus behavior has been modified for situations where all the items in a RowList row are visible on screen at once. In the past, the focus would step once, then begin to scroll smoothly. Now, the focus steps one-by-one through each item.If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the width of a bitmap used as a visual divider between the last and first list or grid items when the list or grid wraps. Only set this field to use a value with a different appearance than the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        wrapDividerHeight
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        36
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the vertFocusAnimationStyle field value is set to fixedFocusWrap, specifies the height of a bitmap used as a visual divider between the last and first list or grid items, when the list or grid wraps. Only set this field to use a value with a different appearance than the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        fixedLayout
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        false
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies that a grid will have a layout of items of different widths configured by parameters included in a ContentNode for the grid. This field is not used by lists
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        numRenderPasses
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        1
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the number of rendering operations to display a complex list or grid. This allows you to achieve a performance increase by specifying that individual sub-elements of the list or grid items occur on sequential rendering operations, rather than all of the item sub-elements being rendered in one rendering operation, which is the default. If you set this field to a value greater than 1, you must specify the rendering operation number for each of the item sub-elements as the renderPass field value for that sub-element. No sub-element that has a renderPass field value of 0 (the default), or has a renderPass field value greater than the value of the numRenderPasses field, will render
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        rowHeights
      </td>

      <td style={{ textAlign: "left" }}>
        array of floats
      </td>

      <td style={{ textAlign: "left" }}>
        []
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies differing heights for each list or grid row, to allow the height of each row to vary from row to row. The specified values override the itemSize field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSize field vector2d Y-value is used for any unspecified rows
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        columnWidths
      </td>

      <td style={{ textAlign: "left" }}>
        array of floats
      </td>

      <td style={{ textAlign: "left" }}>
        []
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies differing widths for each grid column, to allow the width of each column to vary from column to column. This field is not used by lists. The specified values override the itemSize field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSize field vector2d X-value is used for any unspecified columns
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        rowSpacings
      </td>

      <td style={{ textAlign: "left" }}>
        array of floats
      </td>

      <td style={{ textAlign: "left" }}>
        []
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies differing spaces between each list or grid row, to allow the spacing between rows to vary from row to row. The specified values override the itemSpacing field vector2d Y-value for each list or grid row corresponding to its position in the array, in top to bottom order. If the array contains fewer elements than the number of rows needed to display all the items in the list or grid, the itemSpacing field vector2d Y-value is used for any unspecified rows
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        columnSpacings
      </td>

      <td style={{ textAlign: "left" }}>
        array of floats
      </td>

      <td style={{ textAlign: "left" }}>
        []
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies differing spaces between each grid column, to allow the spacing between columns to vary from column to column. This field is not used by lists. The specified values override the itemSpacing field vector2d X-value for each grid column corresponding to its position in the array, in left to right order. If the array contains fewer elements than the number of columns needed to display all the items in the grid, the itemSpacing field vector2d X-value is used for any unspecified columns
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerBitmapUri
      </td>

      <td style={{ textAlign: "left" }}>
        uri
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies a custom bitmap to use as a visual divider between the sections of the list or grid. Only set this field to use a bitmap with a different appearance than the system default. For sections that do not include an icon or a title, the system default or custom bitmap specified as the wrapDividerBitmapUri field value is used for the section dividers. In most cases, you will want to use a 9-patch PNG bitmap with both expandable regions, which is the type of bitmap used as the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerFont
      </td>

      <td style={{ textAlign: "left" }}>
        font
      </td>

      <td style={{ textAlign: "left" }}>
        system default
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies a custom font to use for the section title text. Only set this field to use a different font than the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerTextColor
      </td>

      <td style={{ textAlign: "left" }}>
        color
      </td>

      <td style={{ textAlign: "left" }}>
        system default
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies a custom color to use for the section title text. Only set this field to use a different text color than the system default
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerSpacing
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, and the section dividers are specified to include an icon and/or a label, specifies the spacing between the icon, label, and section divider bitmap
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerWidth
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies the width of the section divider bitmap
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerHeight
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies the height of the section divider bitmap
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerMinWidth
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies the minimum width of the section divider bitmap
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        sectionDividerLeftOffset
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        If the ContentNode specifies sections for a list or grid, specifies the left offset of the section divider from the list or grid
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemClippingRect
      </td>

      <td style={{ textAlign: "left" }}>
        rect2d
      </td>

      <td style={{ textAlign: "left" }}>
        [ 0.0, 0.0, 0.0, 0.0 ]
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies a clipping region for the list or grid items
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemSelected
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        When a list or grid item is selected, set to the index of the selected item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemFocused
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        When focus moves to a list or grid item, set to the index of the focused item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        itemUnfocused
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        When focus moves away from a list or grid item, set to the index of the unfocused item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        jumpToItem
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        WRITE_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        When set to a valid item index, causes the list or grid to immediately update so that the item at the specified index moves into focus, or focus moves to the item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        animateToItem
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        WRITE_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        When set to a valid item index, causes the list or grid to quickly scroll so that the item at the specified index moves into focus, or focus moves to the item
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        currFocusRow
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Gives access to which row of a grid is in the focus position as the items scrolling around. So, currFocusRow = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        currFocusColumn
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Gives access to which column of a grid is in the focus position as the items scrolling around. So, currFocusColumn = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        currFocusSection
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Gives access to which section of a grid is in the focus position as the items scrolling around. So, currFocusSection = 3.7 would mean that item 3 occupies 30% of the focus position while item 4 occupies 70% of the focus position. To maximize performance, the field should be kept to a minimum, as these scripts will run once during each render
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
  </tbody>
</Table>
