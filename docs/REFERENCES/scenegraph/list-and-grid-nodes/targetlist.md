---
title: TargetList
excerpt: 'TargetGroup extension with focus transitions and key handling'
deprecated: false
hidden: false
metadata:
  title: 'TargetList'
  description: 'Extends the TargetGroup node with built-in focused and unfocused transitions, focus management policies, and default key handling for lists and rows.'
  robots: index
next:
  description: ''
---
Extends [**TargetGroup**](doc:targetgroup)

The TargetList node class adds useful functionality to the TargetGroup node by making is easy to set up lists and rows of items with limited amounts of scripting required. In particular, TargetList provides a built-in focused/unfocused transition, as well as a simple way to implement various focus management policies (i.e. fixed focus, floating focus, etc.). It also provides default key handling for navigating the list or row.

### Fixed Focus Set-up

To set up a fixed focus list or grid, set the focusedTargetSet field to a TargetSet that describes a set of rectangular target regions where each item will be rendered. If you want to have a transition between the layouts for when the TargetList is focused and when it is unfocused, set the unfocusedTargetSet field to a TargetSet that describes a set of rectangular target regions for the unfocused case. Make sure to specify which of the target regions should contain the focused item either by setting the targetIndex field of the focusedTargetSet or by setting the TargetGroup's defaultTargetSetFocusIndex field.

**focusedTargetSet1**

```
focusedTargetSet1 = createObject("roSGNode", "TargetSet")
m.tList1.focusedTargetSet = [ focusedTargetSet1 ]

focusedTargetSet1.targetRects = [
    { x:-178, y:-64, height:134, width:240 },
    { x:72, y:-96, height:202, width:360 }, ' rectangle in focus (Item 1)
    { x:442, y:-64, height:134, width:240 },
    { x:692, y:-64, height:134, width:240 },
    { x:942, y:-64, height:134, width:240 },
    { x:1192, y:-64, height:134, width:240 }
]
focusedTargetSet1.color = "0x00202020AA"
focusedTargetSet1.focusIndex = 1
```

**unfocusedTargetSet**

```
unfocusedTargetSet.targetRects = [
    { x:-100, y:-64, height:134, width:240 },
    { x:150, y:-64, height:134, width:240 },
    { x:400, y:-64, height:134, width:240 },
    { x:650, y:-64, height:134, width:240 },
    { x:900, y:-64, height:134, width:240 },
    { x:1150, y:-64, height:134, width:240 }
]
unfocusedTargetSet.color = "0x00202020AA"

```

### Floating Focus Set-up

To set up a floating focus list or grid, set the focusedTargetSet field to a TargetSet that describes a set of rectangular target regions where each item will be rendered. For each possible layout of focused items, specify a TargetSet node that shows the layout of all the target regions, then set the focusedTargetSet field to an array containing those TargetSet nodes.

In the graphic below, the first row contains 4 fully visible rectangles (excluding the two partially visible items on each end). In order to create a floating focus effect, each fully visible rectangle is defined by its own TargetSet that describes a set of rectangles, their sizes, their positioning, and which rectangle is in focus within the TargetSet. In the first TargetSet (when Item 1 is in focus), we define the size and positioning of all the rectangles within the first row. The focusIndex ("1") is also set to the index within the array of targetRects we want to be in focus.

When the focus moves to Item 2, the layout of the first row is defined by another TargetSet defining the size and positioning of Item 2 and the positioning and sizes of the adjacent rectangles. The same is also true when Item 3 is in focus and when Item 4 is in focus. An unfocusedTargetSet can also be defined for unfocused rows like the 2 rows below the row in focus seen below.

**focusedTargetSet array**

```
focusedTargetSet1 = createObject("roSGNode", "TargetSet")
focusedTargetSet2 = createObject("roSGNode", "TargetSet")
focusedTargetSet3 = createObject("roSGNode", "TargetSet")
focusedTargetSet4 = createObject("roSGNode", "TargetSet")
m.tList1.focusedTargetSet = [ focusedTargetSet1, focusedTargetSet2, focusedTargetSet3, focusedTargetSet4 ]
```

**Additional TargetSets for floating focus**

```
focusedTargetSet2.targetRects = [
    { x:-178, y:-64, height:134, width:240 },
    { x:72, y:-64, height:134, width:240 },
    { x:322, y:-96, height:202, width:360 }, ' rectangle in focus (Item 2)
    { x:692, y:-64, height:134, width:240 },
    { x:942, y:-64, height:134, width:240 },
    { x:1192, y:-64, height:134, width:240 }
]
focusedTargetSet2.color = "0x00202020AA"
focusedTargetSet2.focusIndex = 2

focusedTargetSet3.targetRects = [
    { x:-178, y:-64, height:134, width:240 },
    { x:72, y:-64, height:134, width:240 },
    { x:322, y:-64, height:134, width:240 },
    { x:572, y:-96, height:202, width:360 }, ' rectangle in focus (Item 3)
    { x:942, y:-64, height:134, width:240 },
    { x:1192, y:-64, height:134, width:240 }
]
focusedTargetSet3.color = "0x00202020AA"
focusedTargetSet3.focusIndex = 3

focusedTargetSet4.targetRects = [
    { x:-178, y:-64, height:134, width:240 },
    { x:72, y:-64, height:134, width:240 },
    { x:322, y:-64, height:134, width:240 },
    { x:572, y:-64, height:134, width:240 },
    { x:822, y:-96, height:202, width:360 }, ' rectangle in focus (Item 4)
    { x:1192, y:-64, height:134, width:240 }
]
focusedTargetSet4.color = "0x00202020AA"
focusedTargetSet4.focusIndex = 4
```

#### Notes

* To set up floating focus, it is important that all of the TargetSet's specify the same number of target rectangles and for the TargetSet's focusIndex fields to increase by 1 for each TargetSet in the focusedTargetSet field. In the example below, each TargetSet contains an array of 6 rectangles with the focus set to index 1 in focusedTargetSet1, index 2 in focusedTargetSet2, index 3 in focusedTargetSet3, and index 4 in focusedTargetSet4.
* Setting up an unfocused layout works the same as in the fixed focus case above. Make sure that you do not specify a focusIndex for the unfocusedTargetSet (or set it equal to the default value of -1). Doing this keeps the focus index unchanged when the list loses, then regains focus.

<Image alt="roku815px - floatingFocus" border={false} src="https://image.roku.com/ZHZscHItMTc2/floatingFocus.gif" title="floatingFocus" />

> Each unfocused TargetList is referencing the same unfocusedTargetSet

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
      <td>focusedTargetSet</td>
      <td>array of TargetSet nodes</td>
      <td>\[ ]</td>
      <td>READ\_WRITE</td>
      <td>Specifies one or more TargetSet's to be used when the TargetList has the focus. If a single TargetSet is specified, focus will stay fixed on the targetRect of that TargetSet that corresponds to the TargetGroup's focus index. The focus index will come from the TargetSet if explicitly specified or from the TargetGroup's defaultTargetSetFocusIndex field if not.<br /><br />If focusedTargetSet includes more than one TargetSet node, that defines a sequence of TargetSet's that will be advanced through as the user presses the advance or reverse key. When advancing, the focus floats from one TargetSet's to the next TargetSet in the array until the last element of the focusedTargetSet is reached, at which point the focus is fixed to the last element and the items begin to scroll.<br /><br />When reversing, the focus floats from one TargetSet to the previous TargetSet in the array until the first element of the focusedTargetSet is reached, at which point the focus is fixed to the first element and the items begin to scroll.<br /><br />See above for more discussion of setting up fixed and floating focus use cases.</td>
    </tr>

    <tr>
      <td>unfocusedTargetSet</td>
      <td>TargetSet</td>
      <td>invalid</td>
      <td>READ\_WRITE</td>
      <td>Specifies the TargetSet to be used when the TargetList does not have the focus.</td>
    </tr>

    <tr>
      <td>advanceKey</td>
      <td>string</td>
      <td>"down"</td>
      <td>READ\_WRITE</td>
      <td>Specifies which remote button will move the focus forward. For vertical lists, this will typically be set to "down". For horizontal rows, this will typically be set to "right".</td>
    </tr>

    <tr>
      <td>reverseKey</td>
      <td>string</td>
      <td>"up"</td>
      <td>READ\_WRITE</td>
      <td>Specifies which remote button will move the focus backward. For vertical lists, this will typically be set to "up". For horizontal rows, this will typically be set to "left".</td>
    </tr>
  </tbody>
</table>

## Sample app

[TwoRowFixedFocus](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/target_group/TwoRowFixedFocus) is a sample app demonstrating TargetList in action.
