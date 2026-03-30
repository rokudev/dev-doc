---
title: "PanelSet"
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

The PanelSet node provides the panel sliding behavior seen in the Roku home screen. The PanelSet node manages the position of a set of child Panel nodes, and implements the left and right panel sliding behavior. Once a Panel node has been added to a PanelSet node, it remains a child of the PanelSet node unless it is replaced by another Panel node, or slides completely off the right side of the screen.

The PanelSet node is designed to display two Panel nodes in most cases, one Panel node on the left and one on the right. When the PanelSet node has focus, and the user presses the **Left** (or **Back**) or **Right** remote control key, the panels slide to the left or right one position.

For example, suppose the PanelSet node has two Panel nodes as children, panel A and panel B. When the user presses the **Right** key, a new panel, panel C, should be created and added as a child of the PanelSet node. Adding a panel as a child of the PanelSet node causes all the panels to slide left one position, so that panel A is now offscreen to the left, panel B is in the left position, and panel C is in the right position. If the user presses the **Right** key again, a new panel, panel D, should be created and added as a child node of the PanelSet node. Adding panel D causes the panels to slide left again so that panels A and B are offscreen to the left, panel C is in the left position, and panel D is in the right position.

At this point, if the user presses the **Left** key (or **Back** key), the panels will slide one position to the *right*, *back* towards the original home position, so panel D will slide offscreen to the right, panel C will slide to the right position, and panel B will slide to the left position (panel A is still offscreen to the left). When the sliding animation ends, since panel D is offscreen to the right, it is automatically removed as a child node of the PanelSet node.

#### Panel Layout

For consistency, it is recommended that panels be set to the default height. Similarly, panels should be set to one of four default width sizes. For each panel width, the default defines a corresponding left position for the panel. This is summarized in the table below, along with the default values for each of these fields:

| Panel Field  | Panel Size | SD Value | HD Value |
|--------------|------------|----------|----------|
| height       | all        | 403      | 605      |
| width        | narrow     | 218      | 388      |
|              | medium     | 292      | 520      |
|              | wide       | 363      | 645      |
|              | full       | 520      | 940      |
| leftPosition | narrow     | 60       | 105      |
|              | medium     | 60       | 105      |
|              | wide       | 63       | 112      |
|              | full       | 100      | 170      |

Narrow panels should be paired with wide panels, so that both panels fit in the alloted region without overlapping the PanelSet node previous and next arrow indicators. Similarly, medium panels should be paired with medium panels. Only one full-screen width panel can be displayed at a time, so full-screen  cause both left and right panels to slide on/offscreen when they are added to the PanelSet node.

When two panels are onscreen, a default gap is added between the left and right panels. For SD, the spacing is set to 20 pixels. For HD, the spacing is 30 pixels. The PanelSet node positions the left panel so that the panel origin is at (`leftPosition, 0`) in the PanelSet node coordinate system, where `leftPosition` is the value of the left Panel node `leftPosition` field. The PanelSet node positions the right panel so that the panel origin is at (`leftPosition  leftWidth + spacing`), where `leftPosition` and `leftWidth` are the left panel `leftPosition` and `width` fields, and spacing is the default horizontal spacing attribute.

Note that the PanelSet node positions the origin of each Panel node coordinate system by setting the Panel node `translation` field, but it does not clip the panel to the rectangle defined by the Panel node `width` and `height` fields, so if the Panel node contains a child node with translation set to (`-10, -5`), that child will be rendered 10 pixels to the right and 5 pixels above the panel origin.

#### Child Management

The regular roSGNode child management interface, ifSGNodeChildren, is used for adding panels to the PanelSet node. Since adding children to the PanelSet node can trigger the panels to slide left, care must be taken to use those functions in the expected manner.

Typically, the first panel is created, the panel `focusedChild` field has an observer added, then the panel is added to the PanelSet node with `appendChild()`. Then focus is set on that panel, causing the `focusedChild` observer function to be called. The `focusedChild` observer function typically will create the second panel, add a `focusedChild` observer on that panel, then add the second panel to the PanelSet node with `appendChild()`, and so forth.

If any panel contains a list or grid, the typical usage is that when the list or grid panel is on the left, each list/grid item creates a different panel on the right. Typically, the list or grid `itemUnfocused` and `itemFocused` fields are observed. When the `itemUnfocused` field changes, the list or grid panel will hide the panel on the right, then when the `itemFocused` field changes, it will create a new panel for the newly focused list or grid item, and call `replaceChild()` to cause the old panel to be replaced by the new one.

The PanelSet node assumes that:

- Only Panel nodes are added as PanelSet node children
- Panels are added only using the `appendChild()` or `createChild()` roSGNode functions. The Panel node `leftPosition` field must be set prior to calling `appendChild()` or `createChild()`. Appending a child will trigger a PanelSet node slide action in most cases.
- Panels can be replaced using the `replaceChild()` roSGNode function.
- Panel children should never be removed from the PanelSet node using the `removeChild()` roSGNode function. The PanelSet node automatically removes Panel node children when they slide offscreen to the right.
- The `insertChild()` and `removeChild()` roSGNode functions are never used.

## Fields

| Field         | Type    | Default | Access Permission | Description                                                                                                                                                      |
|---------------|---------|---------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| width         | float   | 1280    | READ_WRITE        | Specifies the width of the PanelSet node. In most cases, this is set to the display width (such as 1280 for HD).                                         |
| height        | float   | 605     | READ_WRITE        | Specifies the height of the PanelSet node. In most cases, this is set to the display height minus the overhang height.                               |
| slideDuration | integer | 500     | READ_WRITE        | Milliseconds of the slide transition. The default is 1/2 second.                                                                                         |
| numPanels     | integer | 0       | READ_ONLY         | Contains the current number of Panel nodes that are children of the PanelSet node.                                                             |
| isGoingBack   | Boolean | false   | READ_ONLY         | Set to true when the PanelSet node panels are sliding right, *back* towards the original home position, as a result of a **Left** or **Back** key press. |

## Sample app	
[PanelSetExample](https://github.com/rokudev/samples/tree/master/ux%20components/sliding%20panels/PanelSetExample) is a sample app demonstrating PanelSet in action.