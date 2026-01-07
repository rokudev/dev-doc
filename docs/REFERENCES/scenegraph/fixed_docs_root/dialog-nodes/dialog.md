---
title: "Dialog"
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

# Dialog

> Roku OS 10.0 introduced a new [StandardDialog node](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md "**Standard Dialog**"), which features updated graphics and color palette support. This enables developers to provide a consistent user experience across the dialogs in their app. Developers should replace the legacy Dialog nodes in their app with the new [StandardDialog nodes](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md "**Standard Dialog**").

Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The Dialog node class defines a modal pop-up dialog used to present the user with information requiring their immediate attention.

Setting the dialog field of the current Scene node to a Dialog node causes the dialog to be displayed.

The Dialog node is configured to have up to five regions: the title, message, bullet text, graphic, and button regions. All of these are optional except for the title.

- The title region consists of a an icon and a title label, along with a horizontal divider that visually separates the title from the rest of the dialog.

- The message region consist of a string that is displayed below the title divider.

- The bullet  text region contains a set of zero or more bullet points. It is displayed below the message.

- The graphic region consists of a single bitmap displayed center-aligned below the message and bullet text and above the button region.

- The button region contains a ButtonGroup node that contains zero or more Button nodes, arranged vertically.


Dialogs are modal and intercept all key events except pressing the Home key. Dialogs are closed automatically when the user presses the Home key or the Back key. If the optionsDialog field is set to true, pressing the Options key also closes the dialog.

Only a single dialog may appear at any time. If a second dialog is shown, the previous dialog is closed automatically.

## Fields


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Default</th>
<th>Access Permission</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Title of the dialog box</td>
</tr>
<tr>
<td>titleColor</td>
<td>color</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the color of the title</td>
</tr>
<tr>
<td>titleFont</td>
<td>Font</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the font of the title</td>
</tr>
<tr>
<td>message</td>
<td>string</td>
<td>""</td>
<td>READ_WRITE</td>
<td>The string to be displayed in the message region of the dialog. Newline and carriage return characters in the string result in the message being displayed as several lines of text. In BrightScript, to include a newline in a string, use chr(10). For example: <code>message = "First line" + chr(10) + "Second line"</code></td>
</tr>
<tr>
<td>messageColor</td>
<td>color</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the color of the message text</td>
</tr>
<tr>
<td>messageFont</td>
<td>Font</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the font of the message text</td>
</tr>
<tr>
<td>numberedBullets</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If set to true, the bulletText will be displayed with numbers rather than bullets</td>
</tr>
<tr>
<td>bulletText</td>
<td>array of strings</td>
<td>[ ]</td>
<td>READ_WRITE</td>
<td>An array of strings to be displayed as a list of bullet points</td>
</tr>
<tr>
<td>bulletTextColor</td>
<td>color</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the color of the bullet point text</td>
</tr>
<tr>
<td>bulletTextFont</td>
<td>Font</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>When set, the font of the bullet point text</td>
</tr>
<tr>
<td>buttons</td>
<td>array of strings</td>
<td>[ ]</td>
<td>WRITE_ONLY</td>
<td>Allows a set of Button nodes to be easily created by providing an array of Button labels. Each string in the array will result in a Button node to be added to the ButtonGroup, using the string as the Button label</td>
</tr>
<tr>
<td>buttonGroup</td>
<td>ButtonGroup</td>
<td></td>
<td>READ_WRITE</td>
<td>The dialog internal ButtonGroup node. This allows the appearance attributes of all the Button nodes in the dialog to be easily modified. Since the ButtonGroup node class is derived from the LayoutGroup node class, additional non-Button node children can also be added</td>
</tr>
<tr>
<td>graphicUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies a bitmap to be displayed in the dialog. The bitmap is displayed below the bullet text region and above the buttons. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap</td>
</tr>
<tr>
<td>graphicWidth</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Specifies the width of the bitmap graphic in local coordinates. If set to 0.0, the width of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that width.<br /><br />The graphicWidth and graphicHeight fields both must be set in order to be applied, and both fields must be set before the graphicURI field.</td>
</tr>
<tr>
<td>graphicHeight</td>
<td>float</td>
<td>0.0</td>
<td>READ_WRITE</td>
<td>Specifies the height of the bitmap graphic in local coordinates. If set to 0.0, the height of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that height.<br /><br />The graphicWidth and graphicHeight fields both must be set in order to be applied, and both fields must be set before the graphicURI field.</td>
</tr>
<tr>
<td>buttonSelected</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>Set to the index of the selected button whenever the user selects a button in the group</td>
</tr>
<tr>
<td>buttonFocused</td>
<td>integer</td>
<td>0</td>
<td>READ_ONLY</td>
<td>Set to the index of the focused button whenever a button in the group receives the key focus</td>
</tr>
<tr>
<td>focusButton</td>
<td>integer</td>
<td>0</td>
<td>WRITE_ONLY</td>
<td>Causes the button with the specified index to receive the focus when the ButtonGroup node has the key focus. Note that if the ButtonGroup node does not have the key focus when the focusButton field is set, the specified button will display the focus footprint as its background</td>
</tr>
<tr>
<td>optionsDialog</td>
<td>Boolean</td>
<td>false</td>
<td>READ_WRITE</td>
<td>If set to true, the dialog is automatically dismissed when the Options key is pressed</td>
</tr>
<tr>
<td>backgroundUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies the bitmap to be displayed as the dialog background. Usually this is a 9-patch image to support dynamic resizing. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap</td>
</tr>
<tr>
<td>iconUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies a bitmap to be displayed as a small icon next to the dialog title. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap</td>
</tr>
<tr>
<td>dividerUri</td>
<td>uri</td>
<td>""</td>
<td>READ_WRITE</td>
<td>Specifies a bitmap to be displayed as the divider between the title region and the remainder of the dialog. Usually this is a 9-patch image to support dynamic resizing. Only set this field to specify a custom bitmap that differs in appearance from the default bitmap</td>
</tr>
<tr>
<td>close</td>
<td>Boolean</td>
<td>false</td>
<td>WRITE_ONLY</td>
<td>Causes the dialog to be dismissed. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false</td>
</tr>
<tr>
<td>wasClosed</td>
<td>Event</td>
<td>N/A</td>
<td>READ_WRITE</td>
<td>Set when the dialog has been closed. The field is set when the dialog close field is set, when the Back or Home key has been pressed, when the Options key has been pressed if the optionsDialog field is set to true, and when the dialog is dismissed because another dialog was displayed</td>
</tr>
<tr>
<td>width</td>
<td>float</td>
<td>-1.0</td>
<td>READ_WRITE</td>
<td>Specifies the width of the dialog. By default, this value is pulled from the system theme</td>
</tr>
<tr>
<td>maxHeight</td>
<td>float</td>
<td>-1.0</td>
<td>READ_WRITE</td>
<td>Sets the maximum height of the dialog. By default, the Dialog will scale the height based on the contents but never larger than the height of the display resolution. Setting maxHeight smaller than the contents will switch to a scrollable text region</td>
</tr>
</tbody>
</table>


## Sample app
[DialogExample](https://github.com/rokudev/samples/tree/master/ux%20components/dialogs/DialogExample) is a sample app demonstrating Dialog in action.