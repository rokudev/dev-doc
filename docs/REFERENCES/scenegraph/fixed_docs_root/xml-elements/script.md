---
title: "<script\>"
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

# <script\>

The <script\> element allows the definition of functions to initialize the component, and to respond to events (including key events) and field value changes. The BrightScript interfaces for the SceneGraph nodes used by BrightScript are the same interfaces defined for [roSGNode](/docs/references/brightscript/components/rosgnode.md) objects.

You can include any type of BrightScript object declarations, definitions, and creation, and the related functions to operate on the BrightScript objects, in a <script\> element, except for certain objects and functions that must be used asynchronously in a [Task](/docs/references/scenegraph/control-nodes/task.md) node (see [BrightScript support](/docs/developer-program/core-concepts/scenegraph-brightscript/brightscript-support.md)). In addition, there are two functions that are declared specifically for use in SceneGraph component <script\> elements:

- [init()](/docs/references/scenegraph/component-functions/init.md) 
- [onKeyEvent()](/docs/references/scenegraph/component-functions/onkeyevent.md)

## Relative URIs

BrightScript files can be imported using relative URIs. If the uri does not specify a complete `pkg:` file path, the uri will be interpreted as a file path relative to the XML file.

For example, given an XML file called MainScene.xml located at:

~~~~
pkg:/components/framework/MainScene.xml
~~~~

A `.brs` file can have the following uri:

~~~~
<script type="text/brightscript" uri="Task.brs" />
~~~~

and resolve to:

~~~~
pkg:/components/framework/Task.brs
~~~~

## Attributes

The <script\> element has two attributes:

| Attribute | Required | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| type      | required | A string defining the type of the script. This should be set to `"text/brightscript"` for BrightScript code. |
| uri       | optional | A string specifying an external file that contains script code associated with the component. This file must be located in the `pkg:/components` directory of the application, and have the `.brs` extension for BrightScript code. |

## Examples

Here's an example of a BrightScript function that creates a component named StopWatch parented to the root node of the component, and sets its `translation` field to x=100, y=200:

**BrightScript component creation**

~~~~
function createStopwatch(parent as object) as object
  stopWatch = m.top.createChild("StopWatch")
  stopWatch.translation = [100, 200]
  return stopWatch
end function
~~~~

The <script\> element contains zero or more BrightScript functions. Because BrightScript can contain special characters reserved for XML, the body of the <script\> element must be enclosed in an XML `CDATA` section. For example:

**Embedding BrightScript code in XML**
~~~~
<script type = "text/brightscript" >
 
  <![CDATA[
 
  function createStopwatch(parent as object) as object
    stopWatch = m.top.createChild("StopWatch")
    stopWatch.translation = [100, 200]
    return stopwatch
  end function
 
  ]]>
 
</script>
~~~~

The `CDATA` section can contain any valid BrightScript code, including any BrightScript library.

BrightScript code can also be included from an external file using the uri attribute of the <script\> element:

~~~~
<script type = "text/brightscript" uri = "pkg:/components/VideoTheater.brs" />
~~~~

XML component files may include more than one <script\> element. This allows for the dividing the BrightScript code into logical groupings, as well as including BrightScript source from more than one external file.