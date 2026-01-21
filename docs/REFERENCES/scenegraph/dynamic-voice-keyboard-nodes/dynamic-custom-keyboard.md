---
title: DynamicCustomKeyboard
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
#### Custom key handlers that modify the entered text string

In most cases, the default key selection handlers can be used for modifying the entered text string. However, if a custom key handler is used to do this, it must update the **cursorPosition** of the **DynamicCustomKeyboard**. The following example demonstrates a custom key handler that changes the text string:

1. The Key Definition File includes a key definition with an action intended to duplicate the character to the left of the cursor position, positioning the cursor after the duplicated character:
   ```
   "keys": [
               \{ "icon": "pkg:/images/Duplicate.png", "strOut": "DuplicateCharacter" \},
               <OTHER KEYS>
           ]
   ```
2. The **keySelected()** function includes the following business logic:  
   ```
   <component name="MyCustomKeyboard" extends="DynamicCustomKeyboard>
   	<interface>
     	<function name="keySelected" />
   	</interface>
     <OTHER COMPONENT ELEMENTS>
   </component>

   ```
3. In the corresponding BrightScript file for the child **DynamicCustomKeyboard** component, the **keySelected()** function includes the following business logic:  
   ```
    function keySelected(key as string) as boolean
               if key = "ChangeCase"
                   if m.top.keyGrid.mode = "UpperCase"   ' m.top.keyGrid.mode would likely be initialized in the component's init()                                                
                       m.top.keyGrid.mode = "LowerCase"  ' function just after m.top.keyGrid.keyDefinitionUri is set to the Key Definition File to use
                   else
                       m.top.keyGrid.mode = "UpperCase"
                   end if
                   return true    ' key selection is handled, return true
               end if
               ' if not handled, return false to use default DynamicCustomKeyboard keySelected handlers
               return false
           end function
   ```
   <br />

<br />

## Fields

See the <Anchor label="DynamicKeyboardBase" title="DynamicKeyboardBase" href="/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-keyboard-base.md">DynamicKeyboardBase</Anchor> node and its base classes ([Group](/docs/references/scenegraph/layout-group-nodes/group.md) and [Node](/docs/references/scenegraph/node.md)) for configuring the fields inherited by the **DynamicCustomKeyboard** node.

<HTMLBlock>{`
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
      <td>keyGrid</td>
      <td>DynamicKeyGrid node</td>
      <td>The DynamicKeyGrid node associated with the keyboard</td>
      <td>READ</td>
      <td>Provides access to the internal <strong>DynamicKeyGrid</strong> node of this <strong>DynamicKeyboardBase</strong> component.<br /><br />Do not set this field to null or to a different DynamicKeyGrid node; this field should be used only to access the fields of this component's internal DynamicKeyGrid node.<br /><blockquote><p>The <strong>DynamicKeyGrid</strong>.<strong>keyDefinitionUri</strong> field must be set to the custom Key Definition File that defines the keyboard's layout.</p></blockquote></td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

<br />

## Default VoiceTextEditBox settings

| Field          | Type    | Default   | Description                                                                                          |
| :------------- | :------ | :-------- | :--------------------------------------------------------------------------------------------------- |
| voiceEntryType | string  | "generic" | The type of characters accepted via voice entry.                                                     |
| voiceEnabled   | boolean | true      | Specifies whether voice entry is enabled for the text edit box of the dynamic keyboard.              |
| maxTextLength  | integer | 75        | The maximum number of characters that may be entered into the text edit box of the dynamic keyboard. |

## Sample Key Definition File

The following sample demonstrates a Key Definition File that defines five grids for **DynamicCustomKeyboard** node. See the [Key Definition File specification](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/key-definition-file.md) for more information.

```
{
  "keyboardWidthFHD": 576,
  "keyboardHeightFHD": 432,

  "keyboardWidthHD": 384,
  "keyboardHeightHD": 288,
  "sections": [
    {
      "grids": [
        {
          "modes": "NameUpper",
          "rows": [
            {
              "keys": [
                { "label": "A" },
                { "label": "B" },
                { "label": "C" },
                { "label": "D" },
                { "label": "E" },
                { "label": "F" }
              ]
            },
            {
              "keys": [
                { "label": "G" },
                { "label": "H" },
                { "label": "I" },
                { "label": "J" },
                { "label": "K" },
                { "label": "L" }
              ]
            },
            {
              "keys": [
                { "label": "M" },
                { "label": "N" },
                { "label": "O" },
                { "label": "P" },
                { "label": "Q" },
                { "label": "R" }
              ]
            },
            {
              "keys": [
                { "label": "S" },
                { "label": "T" },
                { "label": "U" },
                { "label": "V" },
                { "label": "W" },
                { "label": "X" }
              ]
            },
            {
              "keys": [
                { "label": "Y" },
                { "label": "Z" },
                {
                  "icon": "theme:DKB_SpaceKeyBitmap",
                  "focusIcon": "theme:DKB_SpaceKeyFocusBitmap",
                  "strOut": "Space"
                },
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
                  "strOut": "Delete"
                },
                {
                  "icon": "theme:DKB_ClearKeyBitmap",
                  "focusIcon": "theme:DKB_ClearKeyFocusBitmap",
                  "strOut": "Clear"
                },
                {
                  "label": "Aa",
                  "strOut": "UpperLower"
                }
              ]
            },
            {
              "keys": [
                { "label": "Prev", "disabled": 1 },
                { "label": "Next" }
              ]
            }
          ]
        },
        {
          "modes": "NameLower",
          "rows": [
            {
              "keys": [
                { "label": "a" },
                { "label": "b" },
                { "label": "c" },
                { "label": "d" },
                { "label": "e" },
                { "label": "f" }
              ]
            },
            {
              "keys": [
                { "label": "g" },
                { "label": "h" },
                { "label": "i" },
                { "label": "j" },
                { "label": "k" },
                { "label": "l" }
              ]
            },
            {
              "keys": [
                { "label": "m" },
                { "label": "n" },
                { "label": "o" },
                { "label": "p" },
                { "label": "q" },
                { "label": "r" }
              ]
            },
            {
              "keys": [
                { "label": "s" },
                { "label": "t" },
                { "label": "u" },
                { "label": "v" },
                { "label": "w" },
                { "label": "x" }
              ]
            },
            {
              "keys": [
                { "label": "y" },
                { "label": "z" },
                {
                  "icon": "theme:KeyboardSpaceOnBitmap",
                  "focusIcon": "theme:KeyboardSpaceOffBitmap",
                  "strOut": "Space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "Delete"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "Clear"
                },
                {
                  "label": "Aa",
                  "strOut": "UpperLower"
                }
              ]
            },
            {
              "keys": [
                { "label": "Prev", "disabled": 1 },
                { "label": "Next" }
              ]
            }
          ]
        },
        {
          "modes": "Zip",
          "gridHeightFHD": 360,
          "gridHeightHD": 240,
          "rows": [
            {
              "keys": [
                { "label": "1" },
                { "label": "2" },
                { "label": "3" }
              ]
            },
            {
              "keys": [
                { "label": "4" },
                { "label": "5" },
                { "label": "6" }
              ]
            },
            {
              "keys": [
                { "label": "7" },
                { "label": "8" },
                { "label": "9" }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "Delete"
                },
                {
"label": "0"
},
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "Clear"
                }
              ]
            },
            {
              "keys": [
                { "label": "Prev" },
                { "label": "Next" }
              ]
            }
          ]
        },
        {
          "modes": "FullUpper",
          "rows": [
            {
              "keys": [
                { "label": "0" },
                { "label": "1" },
                { "label": "2" },
                { "label": "3" },
                { "label": "4" },
                { "label": "5" },
                { "label": "6" },
                { "label": "7" }
              ]
            },
            {
              "keys": [
                { "label": "8" },
                { "label": "9" },
                { "label": "A" },
                { "label": "B" },
                { "label": "C" },
                { "label": "D" },
                { "label": "E" },
                { "label": "F" }
              ]
            },
            {
              "keys": [
                { "label": "G" },
                { "label": "H" },
                { "label": "I" },
                { "label": "J" },
                { "label": "K" },
                { "label": "L" },
                { "label": "M" },
                { "label": "N" }
              ]
            },
            {
              "keys": [
                { "label": "O" },
                { "label": "P" },
                { "label": "Q" },
                { "label": "R" },
                { "label": "S" },
                { "label": "T" },
                { "label": "U" },
                { "label": "V" }
              ]
            },
            {
              "keys": [
                { "label": "W" },
                { "label": "X" },
                { "label": "Y" },
                { "label": "Z" },
                {
                  "icon": "theme:KeyboardSpaceOnBitmap",
                  "focusIcon": "theme:KeyboardSpaceOffBitmap",
                  "strOut": "Space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "Delete"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "Clear"
                },
                {
                  "label": "Aa",
                  "strOut": "UpperLower"
                }
              ]
            },
            {
              "keys": [
                { "label": "Prev" },
                { "label": "Next", "disabled": 1 }
              ]
            }
          ]
        },
        {
          "modes": "FullLower",
          "rows": [
            {
              "keys": [
                { "label": "0" },
                { "label": "1" },
                { "label": "2" },
                { "label": "3" },
                { "label": "4" },
                { "label": "5" },
                { "label": "6" },
                { "label": "7" }
              ]
            },
            {
              "keys": [
                { "label": "8" },
                { "label": "9" },
                { "label": "a" },
                { "label": "b" },
                { "label": "c" },
                { "label": "d" },
                { "label": "e" },
                { "label": "f" }
              ]
            },
            {
              "keys": [
                { "label": "g" },
                { "label": "h" },
                { "label": "i" },
                { "label": "j" },
                { "label": "k" },
                { "label": "l" },
                { "label": "m" },
                { "label": "n" }
              ]
            },
            {
              "keys": [
                { "label": "o" },
                { "label": "p" },
                { "label": "q" },
                { "label": "r" },
                { "label": "s" },
                { "label": "t" },
                { "label": "u" },
                { "label": "v" }
              ]
            },
            {
              "keys": [
                { "label": "w" },
                { "label": "x" },
                { "label": "y" },
                { "label": "z" },
                {
                  "icon": "theme:KeyboardSpaceOnBitmap",
                  "focusIcon": "theme:KeyboardSpaceOffBitmap",
                  "strOut": "Space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "Delete"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "Clear"
                },
                {
                  "label": "Aa",
                  "strOut": "UpperLower"
                }
              ]
            },
            {
              "keys": [
                { "label": "Prev" },
                { "label": "Next", "disabled": 1 }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Sample app

You can download and install a [sample app](https://github.com/rokudev/dynamic-voice-enabled-keyboards) that demonstrates how to create and configure a dynamic voice-enabled custom keyboard (an address keyboard form). This sample include an example KDF file that specifies the layout of this custom keyboard.
