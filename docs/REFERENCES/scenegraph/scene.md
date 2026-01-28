---
title: Scene
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
---
title: "Scene"
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

# Scene

Extends [**Group**](doc:group)

The **Scene** node class serves as the root of a SceneGraph node tree. Every **roSGScreen** object must have a **Scene** node, or a node that derives from the **Scene** node class as its root, including an XML markup component that extends the Scene node class or subclass. That node must be created using the **roSGScreen** createScene() function, with an argument that is a string of the name of the **Scene** node object created. For example:

~~~
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("Scene")
~~~

While it is technically possible to have more than one scene per app, we recommend you only have one **roSGScreen** and one **Scene** node. Child nodes of the scene can be treated as different "scenes" where you can then implement transitions between them.

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
<td>backgroundURI</td>
<td>uri</td>
<td>invalid</td>
<td>READ_WRITE</td>
<td>Specifies a graphic image file to be used for the Scene node background.</td>
</tr>
<tr>
<td>limitBackgroundToUIResolution</td>
<td>boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If the scene background URI is overridden with a non-theme value and this field is set to true, the <strong>backgroundURI</strong> image is limited to the current screen size after being loaded.<br /><br />if this field is set to false, the  <strong>backgroundURI</strong> image is loaded without any scaling applied.</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>color</td>
<td>0x000000FF</td>
<td>READ_WRITE</td>
<td>Loads an image using the provided background URI as-is and does not apply any scaling whatsoever when "limitBackgroundToUIResolution" is false. Specifies a background color for the scene. This color is only used if the backgroundURI field is set to an empty string. For example:  <br /><br />scene.backgroundColor="0xEB1010FF"  <br />scene.backgroundUri = ""</td>
</tr>
<tr>
<td>backExitsScene</td>
<td>Boolean</td>
<td>true</td>
<td>READ_WRITE</td>
<td>If true, a Back key press causes the scene to exit, back to the last user-focused item. If false, a Back key press does not cause the scene to exit. In order for the Back key to cause the scene to exit, the remote control focus must be explicitly set on the scene, or a child of the scene, using the [ifSGNodeFocus](doc:ifSGNodeFocus) interface setFocus(true) function. A Home key press always causes the scene to exit.</td>
</tr>
<tr>
<td>dialog</td>
<td>Node</td>
<td>invalid</td>
<td></td>
<td>Setting this field to a node extended from a <strong>Dialog</strong> node causes the dialog to be displayed</td>
</tr>
<tr>
<td>currentDesignResolution</td>
<td>assocarray</td>
<td></td>
<td>READ_WRITE</td>
<td>This read-only field is set when the Scene is initialized. It indicates which of an app's design resolutions (per manifest's ui_resolutions value) is being used, based on the player model and connected display type. Previously, a developer could deduct the same information by using both [roDeviceInfo.GetUIResolution](ifdeviceinfo#getuiresolution-as-object) and [roAppInfo.getValue](doc:ifappinfo.md#getvaluekey-as-string-as-string)</a>("ui_resolutions"). This new field simplifies the process.  <br /><br />The field is set to an AA with two numeric-valued keys — width and height — as well as a string value indicating the current design resolution ("HD", "FHD" or "SD"). <br /><br /><pre><code><code>&lt;br /&gt;Brightscript Debugger&gt; ? myNode.getScene().currentDesignResolution&lt;br /&gt;&lt;Component: roAssociativeArray&gt; =&lt;br /&gt;\\\{&lt;br /&gt;    height: 720&lt;br /&gt;    resolution: "HD"&lt;br /&gt;    width: 1280&lt;br /&gt;\\\}&lt;br /&gt;</code></code></pre></td>
</tr>
<tr>
<td>palette</td>
<td>RSGPalette node</td>
<td>not set</td>
<td>READ_WRITE</td>
<td>Defines the default color palette used by those nodes that have a <strong>palette</strong> field (for example, the <strong>Scene</strong> node, [standard dialogs](doc:standard-dialog), [dynamic custom voice keyboards](doc:dynamic-keyboard-base), and so on).<br /><br />Apps typically set the <strong>Scene.palette</strong> field to consistently color the standard dialogs and keyboards in the app.<br /><br />Nodes that include a <strong>palette</strong> field can be set to an <strong>RSGPalette</strong> node to override the default colors specified in the <strong>Scene</strong> node.<br /><br />If a node that supports a palette does not set its <strong>palette</strong> filed, the node looks up the scene graph until it finds a node with its <strong>palette</strong> field set.<br /><br />If no ancestor node is found with its palette field set, the default color palette is used (grey with white text).<br /><br />The RSGPalette color values used by the Scene node are as follows:<br /><table><thead><tr><th>Palette Color Name</th><th>Usages</th></tr></thead><tbody><tr><td>PrimaryTextColor</td><td>The text color used for the entered text displayed in the VoiceTextEditBox node.</td></tr><tr><td>SecondaryTextColor</td><td>The text color used for the hints displayed in the VoiceTextEditBox.</td></tr><tr><td>InputFieldColor</td><td>The blend color applied to the VoiceTextEditBox background</td></tr><tr><td>DialogBackgroundColor</td><td>Blend color for dialog's background bitmap.</td></tr><tr><td>DialogItemColor</td><td>Blend color for the following items:<br />$\{dialog-item-color-list\}</td></tr><tr><td>DialogTextColor</td><td>Color for the text in the following items:<br />$\{dialog-text-color-list\}</td></tr><tr><td>DialogFocusColor</td><td>Blend color for the following:<br />$\{dialog-focus-color-list\}</td></tr><tr><td>DialogFocusItemColor</td><td>Color for the text of the focused button.</td></tr><tr><td>DialogSecondaryTextColor</td><td>Color for the text of in the following items:<br />$\{dialog-secondary-text-color-list\}</td></tr><tr><td>DialogSecondaryItemColor</td><td>Color for the following items:<br />$\{dialog-secondary-item-color-list\}</td></tr><tr><td>DialogInputFieldColor</td><td>The blend color for the text edit box background bitmap for keyboards used inside dialogs.</td></tr><tr><td>DialogKeyboardColor</td><td>The blend color for the keyboard background bitmap for keyboards used inside dialogs</td></tr><tr><td>DialogFootprintColor</td><td>The blend color for the following items:<br />$\{dialog-footprint-color-list\}</td></tr></tbody></table></td>
</tr>
</tbody>
</table>
