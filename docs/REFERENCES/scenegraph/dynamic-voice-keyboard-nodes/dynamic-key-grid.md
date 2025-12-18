---
title: Dynamic Key Grid
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

# DynamicKeyGrid



Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The **DynamicKeyGrid** node implements a grid of keys that are defined and organized in a [Key Definition File](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md). It is typically used in a subclass of the [DynamicKeyboardBase](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md) node (DynamicKeyboard, DynamicPinPad, and DynamicMiniKeyboard) to display the string of characters entered via text or voice entry. It may also be used as an individual node.

## Fields

| Field                                          | Type              | Default | Access Permission | Description                                                  |
| :--------------------------------------------- | :---------------- | :------ | :---------------- | :----------------------------------------------------------- |
| keyDefinitionUri                               | uri               | ""      | READ_WRITE        | Specifies the [Key Definition File ](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md) to use to define the key layout metadata. |
| mode                                           | string            | ""      | READ_WRITE        | Specifies the keyboard mode. When set, the value is used to select which Grid of each Section is used, based on the grid's mode as specified in the Key Definition File. |
| focusVisible                                   | boolean           | true    | READ_WRITE        | Enables the grid's focus indicator to be hidden. This option is typically used in PinPads to hide the entered characters. |
| horizWrap                                      | boolean           | false   | READ_WRITE        | Specifies whether the key grid uses horizontal wrapping.<br />${horiz-wrap-list} |
| vertWrap                                       | boolean           | false   | READ_WRITE        | Specifies whether the key grid uses vertical wrapping.<br />${vert-wrap-list} |
| palette                                        | RSGPalette node   | not set | READ_WRITE        | The [RSGPalette node](/docs/references/scenegraph/scene.md) contains the set of color values used by this DynamicKeyGrid node. By default, no RSGPalette is specified; therefore, the RSGPalette colors are inherited from the ancestor nodes in the scene graph.<br /><br />If the DynamicKeyboardBase node is used within a StandardDialog node, the following rules determine the color palette used by the keyboard:<br />${palette-key-grid-dialog-rules}<br />The RSGPalette color values used by the DynamicKeyboardBase are as follows:<br />${palette-key-grid-colors-table} |
| keyFocused                                     | string            | ""      | READ              | Specifies the appearance of a key when it receives focus, based on the key's **strOut** value.<br />${key-focused-list} |
| keySelected                                    | string            | ""      | READ              | Specifies the appearance of a key when it is selected, based on the key's **strOut** value.<br />${key-selected-list} |
| jumpToKey                                      | array of integers | N/A     | WRITE             | Jumps the grid to the key to the coordinates specified in the provided array. The array must contain a valid section, row and key index for the current keyboard mode. If the array specifies an invalid key, no jump occurs. |
| disableKey | string            | ""      | WRITE-ONLY        | Draws the key's label or icon with a disabled appearance and prevents the key from gaining focus.<br /><br />If the key has focus when it becomes disabled, the focus is automatically moved to an adjacent key that is not disabled (the key above the disabled key is checked first, then the key below, to the right, and then to the left).<br /><br />To disable/enable a key, set the respective field to the key's **label** or **StrOut** value as defined in the Key Definition File. For example, to disable the "backspace" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.disableKey = "backspace".<br /><br />Multiple keys may be disabled at any time by setting the write-only **disableKey** field once for each key to be disabled. |
| enableKey  | string            | ""      | WRITE-ONLY        | Draws the key's label or icon with an enabled appearance and allows the key to gain focus.<br /><br />To disable/enable a key, set the respective field to the key's **label** or **StrOut** value as defined in the KDF file. For example, to enable the "backspace" key, which typically has a delete icon displayed on the keyboard, enter the following: m.keyboard.keyGrid.enableKey = "backspace".<br /><br />Multiple disabled keys may be re-enabled at any time by setting the write-only **enableKey** field once for each key to be enabled. |

{#horiz-wrap-list}

- **true**: A horizontal arrow keypress causes the focus to wrap from the key at the left (or right) edge of the grid to the key at the right (or left) edge.
- **false**: The horizontal arrow keypress is not handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.

{#vert-wrap-list}

- **true**: A vertical arrow keypress causes the focus to wrap from the key at the top (or bottom) edge of the grid to the key at the bottom (or top) edge.
- **false**: The vertical arrow key press is not be handled by the DynamicKeyGrid node; it is propagated up the scene graph so that it can be handled by one of its ancestor nodes.

{#palette-key-grid-dialog-rules}

- If the **palette** field is set, the key grid uses it.
- If the **palette** field is not set, the key grid looks up the scene graph until it finds a **PaletteGroup** node with its **palette** field set. This may be found in a **DynamicKeyboard** node, a **StandardDialog** node, or the **Scene** itself.
- If no node has its **palette** field set, the key grid uses the default palette (gray background/white text). 

{#palette-key-grid-colors-table}

| Palette Color Name | Usages                                                       |
| :----------------- | :----------------------------------------------------------- |
| KeyboardColor      | Blend color for key background bitmap.                       |
| PrimaryTextColor   | Text color used for non-focused keys.<br />Blend color for the icons of non-focused keys.<br />Text color for the label of focused key suggestion items. |
| SecondaryItemColor | Text color for disabled keys.<br />Blend color for the icons of disabled keys. |
| FocusColor         | Blend color for the focus indicator.<br />Blend color for the background of key suggestion pop-us. |
| FocusItemColor     | Text color for the label of the focused key.<br />Blend color for the icons of the focused key and the focus indicator in key suggestion pop-ups.<br />Text color for the labels of non-focused key suggestion items. |

{#key-focused-list}

- If the key's **strOut** value (as specified in the Key Definition File) is non-empty, this field is set to the **strOut** value.
- If **strOut** is an empty string, this field is set to the key's label string.

{#key-selected-list}

- If the key's **strOut** value (as specified in the Key Definition File) is non-empty, this field is set to the **strOut** value.
- If **strOut** is an empty string, this field is set to the key's label string.
