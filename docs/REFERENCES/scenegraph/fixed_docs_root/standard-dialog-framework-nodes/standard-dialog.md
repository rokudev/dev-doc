---
title: "StandardDialog"
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

# StandardDialog



Extends [Group](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The **StandardDialog** node is the base for Roku's pre-built standard message, keyboard, pinpad, and progress dialogs. It can also be used directly with a custom dialog structure built with the **StdDialogItem** nodes.

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
<td>width</td>
<td>float</td>
<td>0.0f</td>
<td>READ_WRITE</td>
<td>Sets the width of the dialog:<br /><ul><li>If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD).</li><li>If set to greater than 0, the specified width is used as the overall width of the dialog.</li></ul></td>
</tr>
<tr>
<td>height</td>
<td>float</td>
<td>0.0f</td>
<td>READ_WRITE</td>
<td>Sets the height of the dialog.<br /><br />If this field is set to greater than 0, and the layout of the dialog for the specified width results in a dialog with a height less than the value of this field, the dialog layout is increased so that the dialog height matches the value of this field. In this case, the button area is moved to the bottom of the dialog and a blank region exists between the content area and the button area.</td>
</tr>
<tr>
<td>buttonSelected</td>
<td>int</td>
<td>0</td>
<td>READ_ONLY</td>
<td>Indicates the index of the selected button when the user selects one of the buttons in the button area.</td>
</tr>
<tr>
<td>buttonFocused</td>
<td>int</td>
<td>0</td>
<td>READ_ONLY</td>
<td>Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area.</td>
</tr>
<tr>
<td>palette</td>
<td>RSGPalette node</td>
<td>not set</td>
<td>READ_WRITE</td>
<td>Sets the color palette for the dialog's background, text, buttons, and other elements. <br /><br />By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's <a href="/docs/references/scenegraph/scene.md">Scene</a> node, which has a <strong>palette</strong> field that can be used to consistently color the standard dialogs and keyboards in the app). <br /><br />The RSGPalette color values used by the StandardDialog node are as follows:<br /><table><thead><tr><th>Palette Color Name</th><th>Usages</th></tr></thead><tbody><tr><td>DialogBackgroundColor</td><td>Blend color for dialog's background bitmap.</td></tr><tr><td>DialogItemColor</td><td>Blend color for the following items:<br />${dialog-item-color-list}</td></tr><tr><td>DialogTextColor</td><td>Color for the text in the following items:<br />${dialog-text-color-list}</td></tr><tr><td>DialogFocusColor</td><td>Blend color for the following:<br />${dialog-focus-color-list}</td></tr><tr><td>DialogFocusItemColor</td><td>Color for the text of the focused button.</td></tr><tr><td>DialogSecondaryTextColor</td><td>Color for the text of in the following items:<br />${dialog-secondary-text-color-list}</td></tr><tr><td>DialogSecondaryItemColor</td><td>Color for the following items:<br />${dialog-secondary-item-color-list}</td></tr><tr><td>DialogInputFieldColor</td><td>The blend color for the text edit box background bitmap for keyboards used inside dialogs.</td></tr><tr><td>DialogKeyboardColor</td><td>The blend color for the keyboard background bitmap for keyboards used inside dialogs</td></tr><tr><td>DialogFootprintColor</td><td>The blend color for the following items:<br />${dialog-footprint-color-list}</td></tr></tbody></table></td>
</tr>
<tr>
<td>close</td>
<td>boolean</td>
<td>false</td>
<td>WRITE_ONLY</td>
<td>Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false.</td>
</tr>
<tr>
<td>wasClosed</td>
<td>event</td>
<td>N/A</td>
<td>READ_ONLY</td>
<td>An event that indicates the dialog was dismissed. This event is triggered when one of the following occurs:<br /><ul><li>The <strong>close</strong> field is set.</li><li>The Back, Home, or Options key is pressed.</li><li>Another dialog is displayed.</li></ul></td>
</tr>
</tbody>
</table>








