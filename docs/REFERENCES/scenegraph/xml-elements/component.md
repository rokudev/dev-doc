---
title: 'component'
excerpt: 'Defines the root XML element that declares a SceneGraph component''s structure'
deprecated: false
hidden: false
metadata:
  title: 'component'
  description: 'The <component> element defines all aspects of a component in an XML file, specifying its name, extends, initialFocus, and version attributes.'
  robots: index
next:
  description: ''
---
The \<component\> element defines all aspects of the component defined in a SceneGraph XML component file. Every SceneGraph XML component file must have exactly one \<component\> element that contains all other XML elements in the file, which may include:

- an [\<interface\>](doc:interface) element that defines the interface fields of the component
- zero or more [\<script\>](doc:script) elements that define the BrightScript code used by the component
- a [\<children\>](doc:children) element that contains the child \<node\> elements (either the built-in node classes or node classes extended from them) for the component, declared in XML markup

## Attributes

The following attributes define a \<component\> XML element:

| Attribute    | Required | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| name         | required | Specifies the name of the component, that allows you to create the component in your application. For example, if the name of the component is `CastMemberInfo`, you could create instances of the component declaratively in a child node element of a component \<children\> element (`<CastMemberInfo/>`), or using BrightScript in a \<script\> element (`createObject("roSGNode","CastMemberInfo")`). <br/><br/> The name attribute is case-sensitive. You cannot successfully create or declare a component unless the component name exactly matches the name attribute, including case. Also be aware that two components with the exact same name in the same application components directory will have undefined and generally undesirable results if you attempt to create a component object with that name in the application. |
| extends      | optional | Specifies the name of the built-in or extended SceneGraph scene or node class whose functionality is extended by this component. <br /><br />For example, `extends="Group"` specifies that the component has all of the functionality of the [Group](doc:group) node class (it can have child nodes, has translation/scale/rotation fields, and so forth).<br /><br />By default, a component extends the [Group](doc:group) node class. |
| initialFocus | optional | Specifies the ID of a node declared in the XML file to have the initial remote control focus when the component is instantiated. |
| version      | optional | Specifies the version of the SceneGraph API. The default is 1.0 if not specified. |



## Example

The following \<component\> element defines a component named `GridPanelExample`, that contains \<interface\>, \<script\>, and \<children\> elements.

**\<component\> element example**
```xml
<component name="GridPanelExample" extends="GridPanel" initialFocus="examplePosterGrid">
  <interface>
    <field id="gridcontenturi" type="uri" onChange="readpostergrid" />
  </interface>

  <script type="text/brightscript">
    <![CDATA[
      sub init()
        m.top.panelSize = "full"
        m.top.isFullScreen = true
        m.top.leftPosition = 130
        m.top.focusable = true
        m.top.hasNextPanel = false
        m.top.createNextPanelOnItemFocus = false
        m.top.grid = m.top.findNode("examplePosterGrid")
      end sub

      sub readpostergrid()
        m.readPosterGridTask = createObject("roSGNode", "ContentReader")
        m.readPosterGridTask.contenturi = m.top.gridcontenturi
        m.readPosterGridTask.observeField("content", "showpostergrid")
        m.readPosterGridTask.control = "RUN"
      end sub

      sub showpostergrid()
        m.top.grid.content = m.readPosterGridTask.content
      end sub
    ]]>
  </script>

  <children>
    <PosterGrid
      id="examplePosterGrid"
      basePosterSize="[ 512, 288 ]"
      caption1NumLines="1"
      numColumns="2"
      numRows="2"
      itemSpacing="[ 20, 20 ]" />
  </children>
</component>
```