---
title: BusySpinner
excerpt: 'Widget node that displays a continuously rotating bitmap with configurable spin controls'
deprecated: false
hidden: false
metadata:
  title: 'BusySpinner'
  description: 'Documents the BusySpinner node class, a widget that displays a continuously rotating bitmap, with fields for uri, control, clockwise, and spinInterval.'
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The BusySpinner node class is a simple widget that displays a continuously rotating bitmap. Since the BusySpinner node class uses an internal Poster node instance, the busy spinner bitmap can be specified by setting the internal Poster node uri field.

[SimpleBusySpinner](https://github.com/rokudev/samples/tree/master/ux%20components/widgets) is a sample app that demonstrates usage of the BusySpinner.

> Not all Roku Player hardware versions support arbitrary rotations. In particular, some hardware versions only support 90 degree rotation increments. In those cases, the icon will step through 90 degree, 180 degree, 270 degree and back to 0 degree rotations, rather than spin smoothly.

## Fields

<br />

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>
      <th>
        Type
      </th>
      <th>
        Default
      </th>
      <th>
        Access Permission
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        poster
      </td>
      <td>
        Poster node
      </td>
      <td>
        internal instance default
      </td>
      <td>
        READ_WRITE
      </td>
      <td>
        Set the uri field of the Poster node to select the bitmap for the busy spinner
      </td>
    </tr>
    <tr>
      <td>
        control
      </td>
      <td>
        option string
      </td>
      <td>
        none
      </td>
      <td>
        READ_WRITE
      </td>
      <td>
        Sets the operational state of the busy spinner:
        <br /><br />
        <ul>
          <li><strong>none</strong>: No operational state set. The busy spinner will run if not set to <code>"stop"</code>.</li>
          <li><strong>start</strong>: Starts the busy spinner if not running.</li>
          <li><strong>stop</strong>: Stops the busy spinner if running.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        clockwise
      </td>
      <td>
        Boolean
      </td>
      <td>
        true
      </td>
      <td>
        READ_WRITE
      </td>
      <td>
        Specifies whether the bitmap rotates in a clockwise or counterclockwise direction
      </td>
    </tr>
    <tr>
      <td>
        spinInterval
      </td>
      <td>
        time
      </td>
      <td>
        2
      </td>
      <td>
        READ_WRITE
      </td>
      <td>
        The number of seconds to complete a 360-degree rotation of the spinner image. A value of 0 will cause the spinner to remain stationary and not spin
      </td>
    </tr>
    <tr>
      <td>
        uri
      </td>
      <td>
        uri
      </td>
      <td>
        ""
      </td>
      <td>
        READ_WRITE
      </td>
      <td>
        The uri of the bitmap to be used for the busy spinner. This is an alias for the uri field of the internal Poster node instance, and setting this field is equivalent to setting the uri field of the internal Poster node instance.
      </td>
    </tr>
  </tbody>
</Table>

## Sample app

[BusySpinnerExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/BusySpinnerExample) is a sample app demonstrating BusySpinner in action.
