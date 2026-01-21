---
title: Sliding panels
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
Sliding panels allow the creation of sets of other elements, such as
lists or grids, that are grouped into *panels* that can be moved left
and right on and off the display screen. The panels can also be created
(and removed) dynamically in response to user input and program
behavior.

## Sliding panel nodes

The following are the panel node classes supplied by Roku as part of the
SceneGraph API:

  - OverhangPanelSetScene
  - Overhang
  - PanelSet
  - Panel
  - ListPanel
  - GridPanel

## Panel nodes, panel sets, and panel set scenes

The **Panel**, **ListPanel**, and **GridPanel** node classes are the
panel node classes that can be extended to create a custom panel
component design in XML markup. The **Panel** node class is a generic
panel node that can include any type of content, while the **ListPanel**
and **GridPanel** node classes are specifically intended to contain list
or grid content respectively, with special features that can
automatically create new panels based on item selection in the panel
list or grid.

These panel node classes are designed to be used as part of a *panel
set*. Panel sets are groups of child panel nodes that can be dynamically
created and moved into view automatically after being created. The
**PanelSet** node class is the parent node class of the child panel
nodes in the panel set.

A special **Scene** node class is provided for panel sets:
**OverhangPanelSetScene**. The **OverhangPanelSetScene** node class by
default includes a child **Overhang** node, and a child **PanelSet**
node. The **Overhang** node class provides a region at the top of the
screen that is the full width of the screen, with default poster and
label elements that can be automatically targeted with content by the
focused panel in the **PanelSet** node. As part of an
**OverhangPanelSetScene** scene, the child **PanelSet** node is
automatically positioned below the **Overhang** node. The **PanelSet**
node class includes areas on the left and right side of the panel set
designed for automatic arrow indicators, to prompt the user to press the
<span>**Right**</span>,
<span>**Left**</span>, or
<span>**Back**</span> keys to select and
slide the
panels.

![roku815px - sliding-panels](https://image.roku.com/ZHZscHItMTc2/sliding-panels.jpg "sliding-panels")