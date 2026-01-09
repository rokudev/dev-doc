---
title: "BrightScript/XML markup equivalence"
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

# BrightScript/XML markup equivalence

Because the SceneGraph API includes BrightScript objects and interfaces,
you have the flexibility to create SceneGraph application screens using
a variety of methods. You can create the screens entirely in XML markup
in the **\<children\>** element of the SceneGraph XML **\<component\>**
element. This will create the SceneGraph node tree defined by the XML
markup when the component is initialized. But you can also create and
add nodes to the SceneGraph tree dynamically in BrightScript as needed
for your application (for example, in response to user input). You can
also configure existing or new nodes in the SceneGraph tree at any time
in BrightScript. When and how you create and configure the SceneGraph
node tree scene in your application XML files should depend on the
intended flow of your SceneGraph application.

To demonstrate the various methods of creating and configuration
SceneGraph node trees, the following SceneGraph components all display
the same blue rectangle near the top of the screen. The SceneGraph node
tree that is created is *exactly* the same for all the examples. You can
verify that all the examples have the exact same screen appearance by
downloading and "sideloading" the following application
files:

| **File**                                                                                                                           | **Application**                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [RectangleMU](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/BrightScript_XML_Equivalents)   | XML markup of node attributes                                                                      |
| [RectangleBRS](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/BrightScript_XML_Equivalents) | BrightScript setting of node attributes                                                            |
| [RectangleAA](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/BrightScript_XML_Equivalents)   | Node attributes set in BrightScript from an associative array                                      |
| [RectangleTN](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/BrightScript_XML_Equivalents)   | Node attributes set in BrightScript from attributes downloaded from a server using a **Task** node |

First, a component that uses XML markup exclusively:

**Rectangle XML markup**

~~~
<component name="rectangleexample" extends="Scene" >

<script type = "text/brightscript" >

<![CDATA[

sub init()

m.top.setFocus(true)

end sub

]]>

</script>

<children>

<Rectangle

id = "exampleRectangle"

color = "0x0000CCFF"

width = "886"

height = "44"

translation = "[290,34]" />

</children>

</component>
~~~

The blue rectangle is automatically created, and made a child of the
component, according the attributes set in the XML markup fields. But in
some cases, you might want to set the attributes of a node at a later
time, after the node is automatically created (for example, you might
want to change the color of a screen element node, or make it
invisible). So the following component example sets the attribute fields
of the same rectangle in BrightScript:

**Setting node attributes in BrightScript**

~~~
<component name="rectangleexample" extends="Scene" >

<script type = "text/brightscript" >

<![CDATA[

sub init()

m.examplerectangle = m.top.findNode("exampleRectangle")

m.examplerectangle.color = "0x0000CCFF"

m.examplerectangle.width = "886"

m.examplerectangle.height = "44"

m.examplerectangle.translation = "[290,34]"

m.top.setFocus(true)

end sub

]]>

</script>

<children>

<Rectangle id="exampleRectangle" />

</children>

</component>
~~~

In this example, the rectangle node is only declared in XML markup,
without any field attributes set. Rather, the attributes are set in the
init() function, and could be set anywhere at any time for any reason in
the component BrightScript code. Note the use of the findNode() function
to allow declaring the rectangle object to be part of the component
using the m object reference variable (m.examplerectangle). Then each
attribute of the rectangle is set in BrightScript.

But a node can be created in BrightScript at any time, using functions
like CreateObject() and createChild(); you don't have to use XML markup
at all if your application is easier to write by creating SceneGraph
nodes dynamically as needed. The following example shows how to create
the same blue rectangle completely in BrightScript, and also shows how
you might configure the rectangle attributes using an associative array:

**BrightScript creation of SceneGraph nodes**

~~~
<component name="rectangleexample" extends="Scene" >

<script type = "text/brightscript" >

<![CDATA[

sub init()

m.top.backgroundURI = "pkg:/images/purplebg.jpg"

rectattribs = CreateObject("roAssociativeArray")

rectattribs.color = "0x1998CFFF"

rectattribs.width = "886"

rectattribs.height = "44"

rectattribs.translation = "[290,34]"

m.examplerectangle = m.top.createChild("Rectangle")

m.examplerectangle.color = rectattribs.color

m.examplerectangle.width = rectattribs.width

m.examplerectangle.height = rectattribs.height

m.examplerectangle.translation = rectattribs.translation

m.top.setFocus(true)

end sub

]]>

</script>

</component>
~~~

In this example, setting up an associative array to configure a simple
rectangle at the time of component creation is a waste of time. But the
following example shows how you might configure the appearance or
behavior of a screen element node dynamically, by downloading the
configuration attributes from your server when needed. For this example,
you would need an XML (or JSON) file on your server containing the
configuration attributes, as follows:

**Server node configuration XML file**

~~~
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

<RectAttribs

color="0x0000CCFF"

width="886"

height="44"

translation="[290,34]" />
~~~

These are the same attributes set in all the other examples, only the
location of the XML attributes has changed to your server. Now you need
to set up a **Task** node to download the XML attributes file from your
server (see [**Downloading Server
Content**](/docs/developer-program/core-concepts/downloading-server-content.md)
and
[**Task**](/docs/references/scenegraph/control-nodes/task.md),
and convert the attributes to an associative array, as was set up
manually in the previous example:

**Task node to download server XML node configuration file**

~~~
<component name="getrectconfig" extends="Task" >

<interface>

  <field id = "uri" type = "string" />

  <field id = "rectconfig" type = "assocarray" />

</interface>

<script type = "text/brightscript" >

<![CDATA[

sub init()

  m.top.functionName = "getConfig"

end sub

sub getConfig()

  rectconfigxml = createObject("roXMLElement")

  readInternet = createObject("roUrlTransfer")

  readInternet.setUrl(m.top.uri)

  rectconfigxml.parse(readInternet.getToString())

  rectconfig = rectconfigxml.GetAttributes()

  m.top.rectconfig = rectconfig

end sub

]]>

</script>

</component>
~~~

And then you can assign the attributes from the associative array to the
rectangle node in BrightScript code in your component file:

**Configuring SceneGraph nodes using downloaded configuration file**

~~~
<component name="rectangleexample" extends="Scene" >

<script type = "text/brightscript" >

<![CDATA[

sub init()

m.examplerectangle = m.top.createChild("Rectangle")

m.readerTask =
createObject("roSGNode","getrectconfig")

m.readerTask.setField("uri","http://www.sdktestinglab.com/rectconfig.xml")

m.readerTask.observeField("rectconfig","configureRectangle")

m.readerTask.control = "RUN"

m.top.setFocus(true)

end sub

sub configureRectangle()

rectconfig = m.readerTask.rectconfig

m.examplerectangle.color = rectconfig.color

m.examplerectangle.width = rectconfig.width

m.examplerectangle.height = rectconfig.height

m.examplerectangle.translation = rectconfig.translation

end sub

]]>

</script>

</component>
~~~