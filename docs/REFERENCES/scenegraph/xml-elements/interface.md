---
hidden: false
---
The \<interface> element defines a set of fields to be exposed by a component, to allow instances of the component to be manipulated externally to the component, while hiding details of the component implementation, in much the same way that C++ classes provide a public interface to objects. For example, a XML component might define a sprite object, and have an integer interface field that specifies which sprite bitmap to be displayed.

The \<interface> element may include one or more \<field> XML elements. Each \<field> XML element defines a top-level field for the XML component. These top-level fields define an interface that allow users of the component to read, write, and observe the fields.

As of the 7.5 Roku OS release, the \<interface> element may also include one or more \<function> elements. This provides a mechanism for Roku apps to call functions synchronously, directly from a component. See [Functional Fields](doc:handling-application-events) for more details.

## Attributes

The following attributes define each \<field> XML element:

<Table>
  <thead>
    <tr>
      <th>
        Attribute
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        required
      </td>

      <td>
        A string containing the name of the field
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        required
      </td>

      <td>
        A case-insensitive string containing the type of the field. The allowable types are BrightScript fundamental types, a SceneGraph node object reference, and a URL identifier type, as follows:

        <table>
          <tr>
            <td>Type</td>
            <td>Description</td>
          </tr>

          <tr>
            <td>integer, int</td>
            <td>BrightScript integer type</td>
          </tr>

          <tr>
            <td>longinteger</td>
            <td>BrightScript longinteger type</td>
          </tr>

          <tr>
            <td>float</td>
            <td>BrightScript float type</td>
          </tr>

          <tr>
            <td>string, str</td>
            <td>BrightScript string type</td>
          </tr>

          <tr>
            <td>Boolean, bool</td>
            <td>BrightScript Boolean type</td>
          </tr>

          <tr>
            <td>vector2d</td>
            <td>X/Y coordinate array</td>
          </tr>

          <tr>
            <td>color</td>
            <td>Color type</td>
          </tr>

          <tr>
            <td>time</td>
            <td>Time type</td>
          </tr>

          <tr>
            <td>uri</td>
            <td>A URL identifier</td>
          </tr>

          <tr>
            <td>node</td>
            <td>SceneGraph node object reference</td>
          </tr>

          <tr>
            <td>floatarray</td>
            <td>Array of float</td>
          </tr>

          <tr>
            <td>intarray</td>
            <td>Array of integer</td>
          </tr>

          <tr>
            <td>boolarray</td>
            <td>Array of Boolean</td>
          </tr>

          <tr>
            <td>stringarray</td>
            <td>array of strings</td>
          </tr>

          <tr>
            <td>vector2darray</td>
            <td>Array of vector2d</td>
          </tr>

          <tr>
            <td>colorarray</td>
            <td>Array of color</td>
          </tr>

          <tr>
            <td>timearray</td>
            <td>Array of time</td>
          </tr>

          <tr>
            <td>nodearray</td>
            <td>Array of SceneGraph node object reference</td>
          </tr>

          <tr>
            <td>assocarray</td>
            <td>Associative array</td>
          </tr>

          <tr>
            <td>array</td>
            <td>Array of objects - type specifier can be either array or roArray</td>
          </tr>

          <tr>
            <td>rect2D</td>
            <td>An associative array with 4 float values: (x, y, width, height)\<br/>\<br/>x and y represent the coordinates of the top left corner of the rectangle</td>
          </tr>

          <tr>
            <td>rect2DArray</td>
            <td>Array of rect2D associative arrays</td>
          </tr>
        </table>

        > The type for an \<field\> XML element is case insensitive. For example, "Boolean" or "boolean" may be used in a type declaration.

      </td>
    </tr>

    <tr>
      <td>
        alias
      </td>

      <td>
        optional
      </td>

      <td>
        Allows a top-level component field to be declared as an alias of a field in one of the component child nodes. This allows a field of an internal component node to be exposed to users of the component. The attribute is set to a string with format `_node_._field_`, where _`node`_ is the ID of a SceneGraph node element, and _`field`_ is the name of one of the node fields. The type of the component child node field must match the `type` attribute.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        optional
      </td>

      <td>
        A string representing the initial value of the top-level field. If not specified, the default value for the field type is used (such as, zero for numeric fields, an empty string to string fields, and so forth).
      </td>
    </tr>

    <tr>
      <td>
        onChange
      </td>

      <td>
        optional
      </td>

      <td>
        Sets an observer call-back function to be added for the top-level field. The value of the attribute is a call-back function name in BrightScript code associated with the component. This attribute is provided as a quick way to set up an observer call-back function for top-level fields. It is equivalent to calling the ifSGNodeField `observeField()` method in BrightScript code associated with the component as follows: <br /><br /> `m.top.ObserveField(fieldName, functionName)`
      </td>
    </tr>

    <tr>
      <td>
        alwaysNotify
      </td>

      <td>
        optional
      </td>

      <td>
        A string with the value true or false that indicates whether the field observer functions should be notified every time the field value is set, or only when the field value changes. By default, the attribute is false, so the observer functions are only notified when the field value changes. Set this attribute to true if the observer function should be notified every time the field value is set even though it doesn't necessarily change.
      </td>
    </tr>
  </tbody>
</Table>

The following attributes define each \<function> XML element:

| Attribute | Required | Description                                                                                                                                                          |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | required | A string containing the name of the function which can be called using the [callFunc() function](doc:ifsgnodedict). |

## Examples

The following adds two fields as the interface to a component: a `uri` field, and a SceneGraph node object reference.

**\<interface> element example**

```xml
<interface>
    <field id="contenturi" type="uri" />
    <field id="content" type="node" />
</interface>
```

The following defines a function named 'doSomething' on the corresponding component interface.

```xml
<interface>
    <function name="doSomething" />
</interface>
```