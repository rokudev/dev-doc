---
title: Interface
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

# <interface\>

The <interface\> element defines a set of fields to be exposed by a component, to allow instances of the component to be manipulated externally to the component, while hiding details of the component implementation, in much the same way that C++ classes provide a public interface to objects. For example, a XML component might define a sprite object, and have an integer interface field that specifies which sprite bitmap to be displayed.

The <interface\> element may include one or more <field\> XML elements. Each <field\> XML element defines a top-level field for the XML component. These top-level fields define an interface that allow users of the component to read, write, and observe the fields.

As of the 7.5 Roku OS release, the <interface\> element may also include one or more <function\> elements. This provides a mechanism for Roku apps to call functions synchronously, directly from a component. See [Functional Fields](/docs/developer-program/core-concepts/handling-application-events.md#HandlingApplicationEvents-FunctionalFields) for more details.

## Attributes

The following attributes define each <field> XML element:

| Attribute    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id           | required | A string containing the name of the field                                                                                                                                                                                                                                                                                                                                                                                                                       |
| type         | required | A case-insensitive string containing the type of the field. The allowable types are BrightScript fundamental types, a SceneGraph node object reference, and a URL identifier type, as follows:<br/>${type}<br/><blockquote>The type for an <field> XML element is case insensitive. For example, "Boolean" or "boolean" may be used in a type declaration.</blockquote>                                                                                                                                                                                                                                          |
| alias        | optional | Allows a top-level component field to be declared as an alias of a field in one of the component child nodes. This allows a field of an internal component node to be exposed to users of the component. The attribute is set to a string with format `_node_._field_`, where _`node`_ is the ID of a SceneGraph node element, and _`field`_ is the name of one of the node fields. The type of the component child node field must match the `type` attribute. |
| value        | optional | A string representing the initial value of the top-level field. If not specified, the default value for the field type is used (such as, zero for numeric fields, an empty string to string fields, and so forth).                                                                                                                                                                                                                                              |
| onChange     | optional | Sets an observer call-back function to be added for the top-level field. The value of the attribute is a call-back function name in BrightScript code associated with the component. This attribute is provided as a quick way to set up an observer call-back function for top-level fields. It is equivalent to calling the ifSGNodeField `observeField()` method in BrightScript code associated with the component as follows: <br/><br/> `m.top.ObserveField(fieldName, functionName)`                      |
| alwaysNotify | optional | A string with the value true or false that indicates whether the field observer functions should be notified every time the field value is set, or only when the field value changes. By default, the attribute is false, so the observer functions are only notified when the field value changes. Set this attribute to true if the observer function should be notified every time the field value is set even though it doesn't necessarily change.         |


The following attributes define each <function\> XML element:

| Attribute | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| name      | required | A string containing the name of the function which can be called using the [callFunc() function](/docs/references/brightscript/interfaces/ifsgnodedict.md#callfunc). |


## Examples

The following adds two fields as the interface to a component: a `uri` field, and a SceneGraph node object reference.

**<interface\> element example**
~~~~
<interface>
    <field id="contenturi" type="uri" />
    <field id="content" type="node" />
</interface>
~~~~

The following defines a function named 'doSomething' on the corresponding component interface.

~~~~
<interface>
    <function name="doSomething" />
</interface>
~~~~

{#type}

| Type          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| integer, int  | BrightScript integer type                                    |
| longinteger   | BrightScript longinteger type                                |
| float         | BrightScript float type                                      |
| string, str   | BrightScript string type                                     |
| Boolean, bool | BrightScript Boolean type                                    |
| vector2d      | X/Y coordinate array                                         |
| color         | Color type                                                   |
| time          | Time type                                                    |
| uri           | A URL identifier                                             |
| node          | SceneGraph node object reference                             |
| floatarray    | Array of float                                               |
| intarray      | Array of integer                                             |
| boolarray     | Array of Boolean                                             |
| stringarray   | array of strings                                              |
| vector2darray | Array of vector2d                                            |
| colorarray    | Array of color                                               |
| timearray     | Array of time                                                |
| nodearray     | Array of SceneGraph node object reference                    |
| assocarray    | Associative array                                            |
| array         | Array of objects - type specifier can be either array or roArray |
| rect2D        | An associative array with 4 float values: (x, y, width, height)<br/><br/>x and y represent the coordinates of the top left corner of the rectangle |
| rect2DArray   | Array of rect2D associative arrays                           |
