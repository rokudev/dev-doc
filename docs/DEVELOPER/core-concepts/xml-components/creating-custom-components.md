---
title: Creating custom components
excerpt: 'Define and extend custom SceneGraph components using XML markup'
deprecated: false
hidden: false
metadata:
  title: 'Creating custom components | Roku Developer Docs'
  description: 'Define custom SceneGraph components in XML by extending Scene, Group, or built-in node classes and adding interface fields, scripts, and child nodes.'
  robots: index
next:
  description: ''
---
A SceneGraph application consists of one or more custom SceneGraph
components defined in XML files. These component XML files define the
appearance and behavior of the component as needed for the application
design. Defining these custom components consists of selecting node
classes and previously-defined custom components that have the
appearance and behavior of the application design sub-elements that will
make up the component, and then defining custom attributes and scripting
for the component.

You can select the node classes for your component from the built-in
node classes (as described in
[SceneGraph API Reference](doc:scenegraph)),
and also from custom components that you have created yourself by
defining the custom component in an XML file. In both cases, you must
identify the node class or component to be defined for your component,
either in BrightScript using the `createObject()` or `createChild()` or
similar functions, or as child nodes of the **\<children>** element in
the XML file. In both cases, you begin the new XML file definition of
the component by identifying either the basic abstract node class the
component will be extended from, either a **Scene** node class or the
**Group** node class, or a built-in node class, or another custom
component defined in an XML file.

For example, you may want to use the built-in node classes **Rectangle**
and **Label** for a simple custom component that displays some text in
an on-screen box. You can define the box and the text as
follows:

**Defining Custom Components in XML Markup**

```xml
<children>
  <Rectangle
    id="infoRectangle"
    translation="[0,40]"
    height="460"
    width="520"
    color="0x00000099">
    <Label
      id="infoLabel"
      translation="[15,15]"
      height="430"
      width="490"
      wrap="true"
      font="font:MediumBoldSystemFont" />
  </Rectangle>
</children>
```

To use this custom component directly in a **Scene** node, add this XML
markup to an XML component file extended from one of the built-in
abstract **Scene** node classes. To use it as a custom component in as
many different custom components in your application where it would be
useful, add the XML markup to an XML component file extended from the
built-in abstract **Group** node class, with a descriptive name such as
`textbox`. After that, you can use the component in any other XML
component file by creating it using that name. For example, to use it by
declaring it in the XML markup in the **\<children>** element of an XML
component file:

```xml
<children>
  ...
  <textbox />
  ...
</children>
```

## Focus Handling in Custom Components

There has been some confusion about how to set focus to a specific RSG
element in custom components / views.

**Best Practices:**

Best practice is setting focus to view and allowing view to handle the
proper child focus.

Focus should be handled by observing **focusedchild** and then checking
if the required node does not have
focus.

**MainScene.brs file**

```brightscript
function init() as void
    customView = CreateObject("roSGNode", "CustomView")
    m.top.appendChild(customView)
    customView.setFocus(true)
end function
```

**What to Avoid:**

A common mistake is setting focus to an element in the custom
component's init() function.

A Node should never set focus to any of it’s children if not asked.
Creating additional objects of your node will create problems.

## Extending Custom Components

After you have created a custom component that contains one or more of
the built-in node classes, you can also extend that component into one
or more new custom components. There are some special considerations
concerning custom components extended from other custom components.

### Custom Component Initialization Order

The process by which custom components are initialized is similar to how
C++ object constructors work. First, the component being extended is
completely constructed, then the component or components extended from
it are constructed.

As each component being extended is constructed, the following sequence
of events occurs:

1. The **\<children>** nodes defined in the component being extended
   are created, and their fields are set to their initial values,
   either to a default value, or to the value specified in the XML
   markup.
2. The **\<interface>** fields in the component being extended are
   created, and their initial values are set, either to a default
   value, or to the value specified by the `value` attribute.
3. The **\<script>** element `init()` function of the component being
   extended is called, and all initializations contained in the
   function are performed.

At this point, the component being extended is completely initialized,
and the component or components to be extended from it are constructed,
following the same three steps as above. Note these are the same steps
described in [**Component initialization
order**](doc:component-initialization-order), and note the
implications of the initialization order described there.

### Characteristics of Components Extended from Custom Components

The following describes the characteristics of components extended from
custom components:

* Calling a function in an extended component with the same name as in
  the custom component from which it is extended will call the
  function in the _extended component_. This allows you to _override_
  (or _overload_) a function name to perform differently depending on
  the component from which it is called.
* **\<interface>** fields accumulate: the extended component includes
  all of the interface fields of the component from which it is
  extended in addition to its own. In the case where an extended
  component field name is the same as the component from which it is
  extended, the definition of the extended component field is used,
  similar to functions.
* Any component object declared with the `m` object reference (see
  [**SceneGraph Data Scoping**](doc:data-scoping)
  can be accessed in either the component that is extended or any
  components extended from it.
* All functions defined in a component that is extended can be called
  directly from any components extended from it.

#### Example

For an example of extending custom components, download the sample
app [ExtendingCustomComponents](https://github.com/rokudev/samples/tree/master/ux%20components).
This sample defines a custom component called CenteredRectangle. This
component creates a rectangle centered on the screen.  It also defines a
subroutine called **SetColor**, which sets the color property of the
rectangle.  The sample also defines a component that extends
**CenteredRectangle**, called **RedCenteredRectangle**.  This new
component overrides the **SetColor** subroutine to make the rectangle
red.
