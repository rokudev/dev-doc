---
title: Defining Scenegraph Components
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

# Defining SceneGraph components

A Roku SceneGraph application consists of one or more SceneGraph
components. These SceneGraph components are defined in XML files, which
consist of a required **<component\>** XML element, that contains the
other possible XML elements to fully define the component. The Roku
SceneGraph application can then create an object instance of any defined
SceneGraph component as needed.

## <component\> XML element

The component XML files consist of a
[**<component\>**](/docs/references/scenegraph/xml-elements/component.md) XML element, which contains
the other XML elements that can further define the component. The
**<component\>** element has two required attributes:

  - `name`  
    A unique name for the component
  - `extends`  
    The name of the built-in node class, or extended component, that the
    component *extends*

All components in a SceneGraph application are defined by extending the
component from a built-in node class or extended component, and setting
the field values of the nodes included in the component, which may be
built-in node classes or extended components. When you extend a
component, the extended component includes all of the previously
declared or defined characteristics of the original component, plus the
new characteristics you declare and define for the new component.

## <interface\> XML Element

Roku SceneGraph components allow (but do not enforce), encapsulation of
internal component behavior, by providing an
[**<interface\>**](/docs/references/scenegraph/xml-elements/interface.md) XML element. The **<interface\>** element can contain several **<field\>** elements,
which define custom fields for the components. These custom fields can
be written and read by the application in the same way as the fields of
the built-in node classes. This allows the application to set a field
value to control the component operation, and read a field value to get
the results of the component operation, without writing and reading the
internal fields of the component.

## <script\> XML Element

Component behavior is controlled using
BrightScript in a
[**<script\>**](/docs/references/scenegraph/xml-elements/script.md) XML element. The **<script\>**
element provides two methods of including BrightScript code in the
component:

  - directly, using a `CDATA` element section
  - by reference, using the `uri` attribute of the **<script\>**
    element to specify the location of the BrightScript code to be
    included

## <children\> XML Element

You can create the component SceneGraph nodes entirely in BrightScript
in the [**<script\>**](/docs/references/scenegraph/xml-elements/script.md) element. But Roku SceneGraph also supplies a
[**<children\>**](/docs/references/scenegraph/xml-elements/children.md) XML element to allow nodes to
be defined in XML markup. These SceneGraph nodes are then created
automatically when the component is created (see [**Component
Initialization Order**](/docs/developer-program/core-concepts/xml-components/component-initialization-order.md) for
important details on this process).

Defining SceneGraph nodes in the **<children\>** element is
particularly useful when the component will have a relatively fixed
number and types of nodes, rather than a number of different node types
that may be created (and removed) dynamically as part of component
operation. Field values of the nodes declared and defined in the
**<children\>** element can still be set dynamically in the
[**<script\>**](/docs/references/scenegraph/xml-elements/script.md) element, by first using the
**ifSGNodeDict** **`findNode()`** method to find the object reference.

There are some limitations in defining node field values in the
**<children\>** element. You cannot use expressions and otherwise
manipulate variables and object references in the XML markup to set
field values. You are restricted to fixed values that can be expressed
only as strings assigned to the field. And you should not start or stop
or otherwise control the operation of certain nodes, such as media
playback or animation nodes, by setting the values of those types of
fields in the XML markup definition of the node in the **<children\>**
element. Rather you should find the object reference using the
**ifSGNodeDict** **`findNode()`** method in the [**<script\>**](/docs/references/scenegraph/xml-elements/script.md) element,
then set those fields there, as part of your scripting to control
component behavior.

## Node Definition Examples

A typical XML file will include one or more SceneGraph node elements
inside the [**<component\>**](/docs/references/scenegraph/xml-elements/component.md) element. These nodes are instantiated when
the XML is parsed, and added as children of the XML
**<component\> **element top-level node.

Nodes are defined using an XML element that matches the node type.
 Field values of the node are specified as attributes of the node
element. The following example shows how to define a
[**<Poster\>**](/docs/references/scenegraph/renderable-nodes/poster.md) node, and set its `id`, `uri` and `translation`
fields.

**Defining a Node in XML**

```
<Poster 
  id = "myPoster" 
  uri = "pkg:/images/myPoster.jpg" 
  translation = "[ 200, 100 ]" />
```

Nodes can include children by simply including them in the body of a
node XML element. The follow example shows how to declare a **Poster**
node that includes a **Label** draw on top of
it.

**Adding a Child Node in XML**

```
<Poster 
  id = "myPoster" 
  uri = "pkg:/images/myPoster.jpg" 
  translation = "[ 200, 100 ]" >

  <Label 
    id = "FirstName" 
    text = "John" />

</Poster>
```

By default, if a node includes one or more node elements in the body of
its XML definition, the nodes defined in the body are added as children
of the node. In a few cases, nodes defined in the body of another node
serve a special purpose, and should not be added as children. In that
case, the nodes defined in the body should have an XML `role` attribute
specified to indicate which field of the parent node should be set to
their value. For example, a [**<Label\>**](/docs/references/scenegraph/label-nodes/label.md) node could have a
[**<Font\>**](/docs/references/scenegraph/typographic-nodes/font.md) node defined in its body. If you specify the role
attribute as `font` for the **<Font\> **node, it causes the
parent **<Label\> **node `font` field to be set to the
**<Font\> **node.

**Defining the role Attribute of a Node**

```
<Label text = "John Doe" >
  <Font 
    id = "TypewriterFont" 
    role = "font" 
    uri = "pkg:/fonts/BohemianTypewriter.ttf" 
    size = "36" />
</Label>
```

An instance of a node can be used in more than place in the scene, using
a field attribute value that begins with `dictionary:`. For example, if
the **<Label\> **node is defined as above in an XML file, another
**<Label\> **node can be defined that uses the same **<Font\> **node
as
follows:

**Using dictionary to Set an Attribute Value**

```
<Label 
  text = "John Doe"
  font = "dictionary:TypewriterFont" />
```

## Extending Built-In Node Classes

Roku SceneGraph includes a wide variety of node classes that are built
into the SceneGraph API. These built-in node classes are described
in the [**SceneGraph XML
Reference**](/docs/developer-program/core-concepts/scenegraph-xml/overview.md).

But Roku SceneGraph allows you to extend these built-in node classes
with your own custom node classes, with unique fields, appearance,
behaviors, and interfaces. The key to writing SceneGraph applications is
to define your own custom node classes, then create and use them as
needed for your application.

For example, the starting point of any SceneGraph application is a
custom node class extended from one of the built-in **Scene** node
classes, such as [**Scene**](/docs/references/scenegraph/scene.md) or
[**OverhangPanelSetScene**](/docs/references/scenegraph/sliding-panels-nodes/overhangpanelsetscene.md). These
**Scene** node classes are *abstract* node classes, you *must* extend
them in order to use them. So every SceneGraph application *must*
include an XML component file in the following format:

~~~
<?xml version="1.0" encoding="utf-8" ?>
<component name = "MyApplicationScene" extends = "Scene" >

customized_scene_definitions

</component>
~~~

The built-in abstract **Scene** node is extended by setting the `name`
and `extends` attributes of the
[**<component\>**](/docs/references/scenegraph/xml-elements/component.md) XML element. After this
custom extended **Scene** node is defined in an XML component file in
the `pkg:/components` directory, you can then start the application by
creating the custom **Scene** node component in the `pkg:/source`
/`main.brs` file using the **Scene** node component name as the
`CreateScene()` argument for a BrightScript `roSGScreen` object:

`scene = screen.CreateScene("MyApplicationScene")`

Likewise, you define custom components for your entire application that
are created and added to your SceneGraph node tree as needed. For
example, you could add a custom scrollable row list component to your
application by extending the built-in
[**RowList**](/docs/references/scenegraph/list-and-grid-nodes/rowlist.md) node class component in an XML
component file:

~~~
<?xml version = "1.0" encoding = "utf-8" ?>

<component name = "MyCustomRowList" extends = "RowList" >
customized_rowlist_definitions
</component>
~~~

Once this XML component file is created, you can now add the custom row
list component to your **Scene** component, or any other SceneGraph
component in your application. For example, the following adds the
custom row list to the application **Scene** component using the
`createChild()` function using BrightScript in a
**<script\>** element:

~~~
<?xml version = "1.0" encoding = "utf-8" ?>

<component name = "MyApplicationScene" extends = "Scene" >

    <script type="text/brightscript" >
      <![CDATA[
      
      sub init()
        rowlist = m.top.createChild("MyCustomRowList")
      end sub
      
      ]]>
    </script>
    
</component>
~~~

Or you can add the custom component using XML markup in the
[**<children\>**](/docs/references/scenegraph/xml-elements/children.md) element of the XML component
file:

~~~
<?xml version = "1.0" encoding = "utf-8" ?>

<component name = "MyApplicationScene" extends = "Scene" >
  <children>   

    <MyCustomRowList/>
  </children>
</component>
~~~

In either case, you have added your custom component to the SceneGraph
node tree as a child node of the Scene node, by specifying the component
name from your custom XML component file.