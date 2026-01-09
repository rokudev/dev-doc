---
title: "Component initialization order"
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

# Component initialization order

Instances of components defined in an XML file follow a well-defined
initialization order when they are created.

1.  The [**\<children\>**](children_1608551.html) element nodes defined
    in XML markup are created, and their fields are set to their initial
    values, either to a default value, or to the value specified in the
    XML markup.

2.  The **[\<interface\>](interface_1608549.html)** element fields of
    the XML component are created, and their initial values are set,
    either to a default value, or to the value specified by the `value`
    attribute.

3.  The [**\<script\>**](script_1608550.html) element `init()` function
    is called, and all initializations contained in the function are
    performed.

Note the following implications of this initialization order.

## Initial XML Markup Node Field Values May Be Overridden

The field values defined in XML markup in the **\<children\>** nodes may
be overridden as many as two times, depending on the definitions of the
**\<interface\>** element field attributes, and the initializations
contained in the **\<script\>** element **`init()`** function.

## Observer Functions

Observer functions of fields that are set up in the **`init()`**
function do not get called when those fields are initialized. This is
because the initialization of interface fields, or of fields of the
component **\<children\>** element nodes, is done before the
**`init()`** function that sets up the observers is called. Thus, in
some cases, it may be necessary to explicitly call the field observer
functions in **`init()`** if they need to be executed for the initial
field setting.

Also note that field observer callback functions set up in **`init()`**
cannot be guaranteed to have returned when the component is created
using **`createObject()`** or **`createChild()`**. This means that a
component object may not have been completely constructed immediately
after those calls. For certain nodes that may rely on
dynamically-downloaded content to construct the node, such as
[**PosterGrid**](PosterGrid_1607203.html), subsequent object function
calls may return an object reference to an unconstructed object.

## Parenting and the Focus Chain

For nodes that are defined in the **\<children\>** XML markup of the
component file, the parent node is set after the node is created, and
**`init()`** is called. This has implications for the focus chain (see
[**Remote Control Events**](Remote-Control-Events_1607636.html)), which
must end at a node derived from **[Scene](Scene_1607315.html)**. Until
the newly-created node is parented to a node that is either derived from
**Scene**, or parented to a node in a focus chain that ends on a node
derived from **Scene**, you will not be able to set remote control focus
on the node.

## Program Action Fields

Certain fields should not be set in XML markup of the SceneGraph nodes,
specifically any control fields that initiate a program action, such as
starting a video to play, or an animation. These fields should be set in
BrightScript as part of scripting the program flow of the component.