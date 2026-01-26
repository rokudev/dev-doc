<div class="markdown-body developer-content-body"><h1 id="standarddialog">StandardDialog</h1>
<p>Extends <a href="/docs/references/scenegraph/layout-group-nodes/group.md" title="**Group**">Group</a></p>
<p>The <strong>StandardDialog</strong> node is the base for Roku's pre-built standard message, keyboard, pinpad, and progress dialogs. It can also be used directly with a custom dialog structure built with the <strong>StdDialogItem</strong> nodes.</p>
<h2 id="fields">Fields</h2>
<div class="hscroll"><table>
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
<td class="short-line">width</td>
<td class="short-line">float</td>
<td class="short-line">0.0f</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Sets the width of the dialog:<br><ul>
<li>If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD).</li>
<li>If set to greater than 0, the specified width is used as the overall width of the dialog.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">height</td>
<td class="short-line">float</td>
<td class="short-line">0.0f</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Sets the height of the dialog.<br><br>If this field is set to greater than 0, and the layout of the dialog for the specified width results in a dialog with a height less than the value of this field, the dialog layout is increased so that the dialog height matches the value of this field. In this case, the button area is moved to the bottom of the dialog and a blank region exists between the content area and the button area.</td>
</tr>
<tr>
<td class="short-line">buttonSelected</td>
<td class="short-line">int</td>
<td class="short-line">0</td>
<td class="short-line">READ_ONLY</td>
<td class="long-line">Indicates the index of the selected button when the user selects one of the buttons in the button area.</td>
</tr>
<tr>
<td class="short-line">buttonFocused</td>
<td class="short-line">int</td>
<td class="short-line">0</td>
<td class="short-line">READ_ONLY</td>
<td class="long-line">Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area.</td>
</tr>
<tr>
<td class="short-line">palette</td>
<td class="short-line">RSGPalette node</td>
<td class="short-line">not set</td>
<td class="short-line">READ_WRITE</td>
<td class="long-line">Sets the color palette for the dialog's background, text, buttons, and other elements. <br><br>By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's <a href="/docs/references/scenegraph/scene.md">Scene</a> node, which has a <strong>palette</strong> field that can be used to consistently color the standard dialogs and keyboards in the app). <br><br>The RSGPalette color values used by the StandardDialog node are as follows:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Palette Color Name</th>
<th class="short-line">Usages</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">DialogBackgroundColor</td>
<td class="short-line">Blend color for dialog's background bitmap.</td>
</tr>
<tr>
<td class="short-line">DialogItemColor</td>
<td class="long-line">Blend color for the following items:<br><ul>
<li><a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md">StdDlgProgressItem's</a> spinner bitmap</li>
<li><a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md">StdDlgDeterminateProgressItem's</a> graphic</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogTextColor</td>
<td class="long-line">Color for the text in the following items:<br><ul>
<li><a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md">StdDlgTextItem</a> and <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "normal" or "bold".</li>
<li>All <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md">content area items</a>, except for <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md">StdDlgTextItem</a> and <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md">StdDlgGraphicItem</a>.</li>
<li><a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md#fields">Title area</a>. Unfocused button.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogFocusColor</td>
<td class="long-line">Blend color for the following:<br><ul>
<li>The <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md#fields">button area</a> focus bitmap.</li>
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
<li><a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md">StdDlgTextItem</a> and <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "secondary".</li>
<li>Disabled button.</li>
</ul></td>
</tr>
<tr>
<td class="short-line">DialogSecondaryItemColor</td>
<td class="long-line">Color for the following items:<br><ul>
<li>The divider displayed below the title area.</li>
<li>The unfilled portion of the <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md">StdDlgDeterminateProgressItem's</a> graphic.</li>
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
<li>The button focus footprint bitmap that is displayed when the <a href="/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md#fields">button area</a> does not have focus.</li>
<li>Unfocused scrollbar thumb and scrollbar track.</li>
</ul></td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">close</td>
<td class="short-line">boolean</td>
<td class="short-line">false</td>
<td class="short-line">WRITE_ONLY</td>
<td class="long-line">Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false.</td>
</tr>
<tr>
<td class="short-line">wasClosed</td>
<td class="short-line">event</td>
<td class="short-line">N/A</td>
<td class="short-line">READ_ONLY</td>
<td class="long-line">An event that indicates the dialog was dismissed. This event is triggered when one of the following occurs:<br><ul>
<li>The <strong>close</strong> field is set.</li>
<li>The Back, Home, or Options key is pressed.</li>
<li>Another dialog is displayed.</li>
</ul></td>
</tr>
</tbody>
</table></div></div>