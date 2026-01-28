---
title: DynamicKeyGrid
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

The **DynamicKeyGrid** node implements a grid of keys that are defined and organized in a [Key Definition File](doc:key-definition-file). It is typically used in a subclass of the [DynamicKeyboardBase](doc:dynamic-keyboard-base) node (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) to display the string of characters entered via text or voice entry. It may also be used as an individual node.

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
      <td>keyDefinitionUri</td>
      <td>uri</td>
      <td>""</td>
      <td>READ\_WRITE</td>
      <td>Specifies the <a href="https://roku-ent.readme.io/dev/docs/key-definition-file">Key Definition File</a> to use to define the key layout metadata.</td>
    </tr>

    <tr>
      <td>mode</td>
      <td>string</td>
      <td>""</td>
      <td>READ\_WRITE</td>
      <td>Specifies the keyboard mode. When set, the value is used to select which Grid of each Section is used, based on the grid's mode as specified in the Key Definition File.</td>
    </tr>

    <tr>
      <td>focusVisible</td>
      <td>boolean</td>
      <td>true</td>
      <td>READ\_WRITE</td>
      <td>Enables the grid's focus indicator to be hidden. This option is typically used in PinPads to hide the entered characters.</td>
    </tr>

    <tr>
      <td>horizWrap</td>
      <td>boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Specifies whether the key grid uses horizontal wrapping.<br /><ul><li><strong>true</strong>: A horizontal arrow keypress causes the focus to wrap from the key at the left (or right) edge of the grid to the key at the right (or left) edge.</li><li><strong>false</strong>: The horizontal arrow keypress is not handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.</li></ul></td>
    </tr>

    <tr>
      <td>vertWrap</td>
      <td>boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Specifies whether the key grid uses vertical wrapping.<br /><ul><li><strong>true</strong>: A vertical arrow keypress causes the focus to wrap from the key at the top (or bottom) edge of the grid to the key at the bottom (or top) edge.</li><li><strong>false</strong>: The vertical arrow key press is not be handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.</li></ul></td>
    </tr>

    <tr>
      <td>palette</td>
      <td>RSGPalette node</td>
      <td>not set</td>
      <td>READ\_WRITE</td>
      <td>The <a href="https://roku-ent.readme.io/dev/docs/scene.md">RSGPalette node</a> contains the set of color values used by this DynamicKeyGrid node. By default, no RSGPalette is specified; therefore, the RSGPalette colors are inherited from the ancestor nodes in the scene graph.<br /><br />If the DynamicKeyboardBase node is used within a StandardDialog node, the following rules determine the color palette used by the keyboard:<br /><ul><li>If the <strong>palette</strong> field is set, the key grid uses it.</li><li>If the <strong>palette</strong> field is not set, the key grid looks up the scene graph until it finds a <strong>PaletteGroup</strong> node with its <strong>palette</strong> field set. This may be found in a <strong>DynamicKeyboard</strong> node, a <strong>StandardDialog</strong> node, or the <strong>Scene</strong> itself.</li><li>If no node has its <strong>palette</strong> field set, the key grid uses the default palette (gray background/white text).</li></ul><br />The RSGPalette color values used by the DynamicKeyboardBase are as follows:<br /><table><thead><tr><th>Palette Color Name</th><th>Usages</th></tr></thead><tbody><tr><td>KeyboardColor</td><td>Blend color for key background bitmap.</td></tr><tr><td>PrimaryTextColor</td><td>Text color used for non-focused keys.<br />Blend color for the icons of non-focused keys.<br />Text color for the label of focused key suggestion items.</td></tr><tr><td>SecondaryItemColor</td><td>Text color for disabled keys.<br />Blend color for the icons of disabled keys.</td></tr><tr><td>FocusColor</td><td>Blend color for the focus indicator.<br />Blend color for the background of key suggestion pop-us.</td></tr><tr><td>FocusItemColor</td><td>Text color for the label of the focused key.<br />Blend color for the icons of the focused key and the focus indicator in key suggestion pop-ups.<br />Text color for the labels of non-focused key suggestion items.</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>keyFocused</td>
      <td>string</td>
      <td>""</td>
      <td>READ</td>
      <td>Specifies the appearance of a key when it receives focus, based on the key's <strong>strOut</strong> value.<br /><ul><li>If the key's <strong>strOut</strong> value (as specified in the Key Definition File) is non-empty, this field is set to the <strong>strOut</strong> value.</li><li>If <strong>strOut</strong> is an empty string, this field is set to the key's label string.</li></ul></td>
    </tr>

    <tr>
      <td>keySelected</td>
      <td>string</td>
      <td>""</td>
      <td>READ</td>
      <td>Specifies the appearance of a key when it is selected, based on the key's <strong>strOut</strong> value.<br /><ul><li>If the key's <strong>strOut</strong> value (as specified in the Key Definition File) is non-empty, this field is set to the <strong>strOut</strong> value.</li><li>If <strong>strOut</strong> is an empty string, this field is set to the key's label string.</li></ul></td>
    </tr>

    <tr>
      <td>jumpToKey</td>
      <td>array of integers</td>
      <td>N/A</td>
      <td>WRITE</td>
      <td>Jumps the grid to the key to the coordinates specified in the provided array. The array must contain a valid section, row and key index for the current keyboard mode. If the array specifies an invalid key, no jump occurs.</td>
    </tr>

    <tr>
      <td>disableKey</td>
      <td>string</td>
      <td>""</td>
      <td>WRITE-ONLY</td>
      <td>Draws the key's label or icon with a disabled appearance and prevents the key from gaining focus.<br /><br />If the key has focus when it becomes disabled, the focus is automatically moved to an adjacent key that is not disabled (the key above the disabled key is checked first, then the key below, to the right, and then to the left).<br /><br />To disable/enable a key, set the respective field to the key's <strong>label</strong> or <strong>StrOut</strong> value as defined in the Key Definition File. For example, to disable the "backspace" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.disableKey = "backspace".<br /><br />Multiple keys may be disabled at any time by setting the write-only <strong>disableKey</strong> field once for each key to be disabled.</td>
    </tr>

    <tr>
      <td>enableKey</td>
      <td>string</td>
      <td>""</td>
      <td>WRITE-ONLY</td>
      <td>Draws the key's label or icon with an enabled appearance and allows the key to gain focus.<br /><br />To disable/enable a key, set the respective field to the key's <strong>label</strong> or <strong>StrOut</strong> value as defined in the KDF file. For example, to enable the "backspace" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.enableKey = "backspace".<br /><br />Multiple disabled keys may be re-enabled at any time by setting the write-only <strong>enableKey</strong> field once for each key to be enabled.</td>
    </tr>
  </tbody>
</table>
