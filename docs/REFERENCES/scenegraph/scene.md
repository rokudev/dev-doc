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
Extends [**Group**](doc:group)

The **Scene** node class serves as the root of a SceneGraph node tree. Every **roSGScreen** object must have a **Scene** node, or a node that derives from the **Scene** node class as its root, including an XML markup component that extends the Scene node class or subclass. That node must be created using the **roSGScreen** createScene() function, with an argument that is a string of the name of the **Scene** node object created. For example:

```
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("Scene")
```

While it is technically possible to have more than one scene per app, we recommend you only have one **roSGScreen** and one **Scene** node. Child nodes of the scene can be treated as different "scenes" where you can then implement transitions between them.

## Fields

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Default</th>
<th class="short-line">Access Permission</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">backgroundURI</td>
<td class="short-line">uri</td>
<td class="short-line">invalid</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Specifies a graphic image file to be used for the Scene node background.</td>
</tr>
<tr>
<td class="short-line">limitBackgroundToUIResolution</td>
<td class="short-line">boolean</td>
<td class="short-line">true</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">If the scene background URI is overridden with a non-theme value and this field is set to true, the <strong>backgroundURI</strong> image is limited to the current screen size after being loaded.<br><br>if this field is set to false, the  <strong>backgroundURI</strong> image is loaded without any scaling applied.</td>
</tr>
<tr>
<td class="short-line">backgroundColor</td>
<td class="short-line">color</td>
<td class="short-line">0x000000FF</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Loads an image using the provided background URI as-is and does not apply any scaling whatsoever when "limitBackgroundToUIResolution" is false. Specifies a background color for the scene. This color is only used if the backgroundURI field is set to an empty string. For example:  <br><br>scene.backgroundColor="0xEB1010FF"  <br>scene.backgroundUri = ""</td>
</tr>
<tr>
<td class="short-line">backExitsScene</td>
<td class="short-line">Boolean</td>
<td class="short-line">true</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">If true, a Back key press causes the scene to exit, back to the last user-focused item. If false, a Back key press does not cause the scene to exit. In order for the Back key to cause the scene to exit, the remote control focus must be explicitly set on the scene, or a child of the scene, using the [ifSGNodeFocus](doc:ifsgnodefocus) interface setFocus(true) function. A Home key press always causes the scene to exit.</td>
</tr>
<tr>
<td class="short-line">dialog</td>
<td class="short-line">Node</td>
<td class="short-line">invalid</td>
<td class="short-line"></td>
<td class="long-line">Setting this field to a node extended from a <strong>Dialog</strong> node causes the dialog to be displayed</td>
</tr>
<tr>
<td class="short-line">currentDesignResolution</td>
<td class="short-line">assocarray</td>
<td class="short-line"></td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">This read-only field is set when the Scene is initialized. It indicates which of an app's design resolutions (per manifest's ui_resolutions value) is being used, based on the player model and connected display type. Previously, a developer could deduct the same information by using both <a href="https://roku-ent.readme.io/dev/docs/ifdeviceinfo#getuiresolution-as-object()" title="roDeviceInfo.GetUIResolution">roDeviceInfo.GetUIResolution</a> and <a href="https://roku-ent.readme.io/dev/docs/ifappinfo#getvaluekey-as-string-as-string" title="roAppInfo.getValue">roAppInfo.getValue</a>("ui_resolutions"). This new field simplifies the process.  <br><br>The field is set to an AA with two numeric-valued keys — width and height — as well as a string value indicating the current design resolution ("HD", "FHD" or "SD"). <br><br><pre><code>Brightscript Debugger&gt; ? myNode.getScene().currentDesignResolution
&lt;Component: roAssociativeArray&gt; =
{
    height: 720
    resolution: "HD"
    width: 1280
}
</code></pre></td>
</tr>
<tr>
<td class="short-line">palette</td>
<td class="short-line">RSGPalette node</td>
<td class="short-line">not set</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Defines the default color palette used by those nodes that have a <strong>palette</strong> field (for example, the <strong>Scene</strong> node, <a href="https://roku-ent.readme.io/dev/docs/standard-dialog">standard dialogs</a>, <a href="https://roku-ent.readme.io/dev/docs/dynamic-keyboard-base">dynamic custom voice keyboards</a>, and so on).<br><br>Apps typically set the <strong>Scene.palette</strong> field to consistently color the standard dialogs and keyboards in the app.<br><br>Nodes that include a <strong>palette</strong> field can be set to an <strong>RSGPalette</strong> node to override the default colors specified in the <strong>Scene</strong> node.<br><br>If a node that supports a palette does not set its <strong>palette</strong> filed, the node looks up the scene graph until it finds a node with its <strong>palette</strong> field set.<br><br>If no ancestor node is found with its palette field set, the default color palette is used (grey with white text).<br><br>The RSGPalette color values used by the Scene node are as follows:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Palette Color Name</th>
<th class="short-line">Usages</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">PrimaryTextColor</td>
<td class="long-line">The text color used for the entered text displayed in the VoiceTextEditBox node.</td>
</tr>
<tr>
<td class="short-line">SecondaryTextColor</td>
<td class="long-line">The text color used for the hints displayed in the VoiceTextEditBox.</td>
</tr>
<tr>
<td class="short-line">InputFieldColor</td>
<td class="long-line">The blend color applied to the VoiceTextEditBox background</td>
</tr>
<tr>
<td class="short-line">DialogBackgroundColor</td>
<td class="short-line">Blend color for dialog's background bitmap.</td>
</tr>
<tr>
<td class="short-line">DialogItemColor</td>
<td class="long-line">Blend color for the following items:<br><ul>
<li><a href="https://roku-ent.readme.io/dev/docs/std-dlg-progress-item">StdDlgProgressItem's</a> spinner bitmap</li>
<li><a href="https://roku-ent.readme.io/dev/docs/std-dlg-determinate-progress-item">StdDlgDeterminateProgressItem's</a> graphic</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogTextColor</td>
<td class="long-line">Color for the text in the following items:<br><ul>
<li><a href="https://roku-ent.readme.io/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://roku-ent.readme.io/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "normal" or "bold".</li>
<li>All <a href="https://roku-ent.readme.io/dev/docs/std-dlg-item-base">content area items</a>, except for <a href="https://roku-ent.readme.io/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://roku-ent.readme.io/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a>.</li>
<li><a href="https://roku-ent.readme.io/dev/docs/std-dlg-title-area#fields">Title area</a>. Unfocused button.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogFocusColor</td>
<td class="long-line">Blend color for the following:<br><ul>
<li>The <a href="https://roku-ent.readme.io/dev/docs/std-dlg-button-area.#fields">button area</a> focus bitmap.</li>
<li>The focused scrollbar thumb.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogFocusItemColor</td>
<td class="short-line">Color for the text of the focused button.</td>
</tr>
<tr>
<td class="short-line">DialogSecondaryTextColor</td>
<td class="long-line">Color for the text of in the following items:<br><ul>
<li><a href="https://roku-ent.readme.io/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://roku-ent.readme.io/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "secondary".</li>
<li>Disabled button.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogSecondaryItemColor</td>
<td class="long-line">Color for the following items:<br><ul>
<li>The divider displayed below the title area.</li>
<li>The unfilled portion of the <a href="https://roku-ent.readme.io/dev/docs/std-dlg-determinate-progress-item">StdDlgDeterminateProgressItem's</a> graphic.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogInputFieldColor</td>
<td class="long-line">The blend color for the text edit box background bitmap for keyboards used inside dialogs.</td>
</tr>
<tr>
<td class="short-line">DialogKeyboardColor</td>
<td class="long-line">The blend color for the keyboard background bitmap for keyboards used inside dialogs</td>
</tr>
<tr>
<td class="short-line">DialogFootprintColor</td>
<td class="long-line">The blend color for the following items:<br><ul>
<li>The button focus footprint bitmap that is displayed when the <a href="https://roku-ent.readme.io/dev/docs/std-dlg-button-area#fields">button area</a> does not have focus.</li>
<li>Unfocused scrollbar thumb and scrollbar track.</li>
</ul></td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />
