---
title: "Key Definition File"
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

# Key Definition File

The Key Definition File is a JSON-formatted file that specifies the layout of a keyboard. The Key Definition Files for the classes derived from **DynamicKeyboardBase** (**DynamicKeyboard**, **DynamicPinPad**, and **DynamicMiniKeyboard**) are built-in and cannot be modified because the keyboard layout for these nodes is fixed. Conversely, the **DynamicCustomKeyboard** node requires developers to create the Key Definition File in order to implement a custom keyboard layout. 

The Key Definition File is a single JSON object with the following six hierarchal objects (listed in order from the top to the bottom of the hierarchy):

1. [KeyLayout](#keylayout)
2. [Section](#section)
3. [Grid](#grid)
4. [Row](#row)
5. [Key](#key)
6. [KeySuggestions](#keysuggestions)

Properties can be set at any level of the hierarchy and are used to determine the default values for the subparts at lower levels in the hierarchy. For example, setting the **keyboardHeight** property at the **KeyLayout** level will specify the default height of each **Row** in each **Grid** in each **Section** of the grid used. If a **Grid** specifies a **gridHeight** property, it is set as the default for each **Row** in that **Grid**. In both cases, if any **Row** in the **Grid** specifies a **rowHeight** property, that height will be used as the default for each **Key** in that **Row**.

## KeyLayout

The **KeyLayout** object specifies the key configuration for a keyboard instance. Each Key Definition File includes a single **KeyLayout**. The **KeyLayout** contains one or more Section arrays.

| Attribute         | Type                         | Description                                                  |
| :---------------- | :--------------------------- | :----------------------------------------------------------- |
| keyboardHeightFHD | unsigned                     | Overall height of the keyboard for FHD.                      |
| keyboardWidthFHD  | unsigned                     | Overall width of the keyboard for FHD.                       |
| keyboardHeightHD  | unsigned                     | Overall height of the keyboard for HD.                       |
| keyboardWidthHD   | unsigned                     | Overall width of the keyboard for HD.                        |
| sections          | array of **Section** objects | An array of **Section** objects in the **KeyLayout**. A **KeyLayout** object contains one or more **Section** objects (it must have at least one). Most have a single **Section** object (for example, a PIN pad). In some cases, however, a **KeyLayout** will have multiple **Section** objects (for example, Roku's WiFi keyboard has four sections). |

## Section

A **Section** contains one or more **Grid** objects. 

| Attribute       | Type                      | Description                                                  |
| :-------------- | :------------------------ | :----------------------------------------------------------- |
| sectionWidthFHD | unsigned                  | Width of the section for FHD. This attribute is only required if the **KeyLayout** includes multiple **Section** objects that have different widths. |
| sectionWidthHD  | unsigned                  | Width of the section for HD. This attribute is only required if the **KeyLayout** includes multiple **Section** objects that have different widths. |
| grids           | array of **Grid** objects | An array of Grid objects in the **Section**. A **Section** object contains one or more **Grid** objects (it must have at least one). |

## Grid

A **Section** may contain one or more **Grid** objects. A **Section** typically contains multiple **Grid** objects when defining different key layouts for a particular mode of the overall **KeyLayout**. For example, the "alpha key" section of Roku's current WiFi keyboard has six modes ("alphanumLowerCase", "alphanumUpperCase", "symbolsLowerCase", "symbolsUpperCase", "accentsLowerCase", "accentsUpperCase"). Each of the modes for these **Section** objects is specified using a different **Grid**.

| Attribute     | Type                     | Description                                                  |
| :------------ | :----------------------- | :----------------------------------------------------------- |
| gridHeightFHD | unsigned                 | Height of the grid for FHD.This attribute is only required if the **Section** includes multiple **Grid** objects and the grid's height is different from the overall KeyLayout height.The gridHeight must be less than or equal to the overall KeyLayout height. |
| gridHeightHD  | unsigned                 | Height of the grid for HD.This attribute is only required if the **Section** includes multiple **Grid** objects and the grid's height is different from the overall KeyLayout height.The gridHeight must be less than or equal to the overall KeyLayout height. |
| modes         | string/array of strings  | The keyboard mode when this grid is shown.If the **mode** field of a **[DynamicKeyGrid](/docs/references/scenegraph/dynamic-voice-keyboard-nodes/dynamic-key-grid.md)** node is set, the **Grid** object with the matching mode is displayed. In some cases, the same grid is shown for different keyboard modes. For example, Roku's WiFi keyboard shows the same numeric characters grid in both "alphaNumUpperCase" and "alphaNumLowerCase" modes. |
| rows          | array of **Row** objects | An array of **Row** objects in the **Grid**. A **Grid** object contains one or more **Row** objects (it must have at least one).If the *rows* array contains a null Row (for example, {} in the *rows* array), a blank space will be shown (no key background, label or icon is drawn) and focus cannot be set on that Row object. |

## Row

A **Row** is a container for a set of keys. A **Grid** may contain one or more **Row** objects.

| Attribute    | Type                     | Description                                                  |
| :----------- | :----------------------- | :----------------------------------------------------------- |
| rowHeightFHD | unsigned                 | Height of the row for FHD. This attribute is only required if the **Grid** includes multiple **Row** objects with different heights. |
| rowHeightHD  | unsigned                 | Height of the row for HD. This attribute is only required if the **Grid** includes multiple **R****ow** objects with different heights. |
| keys         | array of **Key** objects | An array of **Key** objects in the **Row**. A **Row** object contains one or more **Key** objects (it must have at least one).If the **Key** object does not include either a **label** field or an **icon***/***focusIcon** field, a blank key background will be drawn and focus cannot be set on that key. |

## Key

A **Key** specifies a single key within a **Row** object. The **Key** defines the string or icon that is displayed on the key and the string that is sent when the key is focused or selected. Keys may either have a label or an icon, but may not have both.

| Attribute   | Type           | Description                                                  |
| :---------- | :------------- | :----------------------------------------------------------- |
| keyWidthFHD | unsigned       | Width of the key for FHD. This attribute is only required if the **Row** includes multiple **Key** objects with different widths. |
| keyWidthHD  | unsigned       | Width of the key for HD. This attribute is only required if the **Row** includes multiple **Key** objects with different widths. |
| label       | string         | The string to be displayed on the key. Labels can be specified using the character itself or UTF-16 encoding. For example, the lowercase n tilde can be specified with "ñ" or "\u00F1".If the **strOut** field is not specified, this is also the string that is sent when the key is focused or selected. |
| icon        | uri            | The icon to be displayed on the key. If an icon is specified, the **strOut** field must be specified to send the appropriate string when the key is focused or selected. If an icon is specified, do not specify a label. |
| focusIcon   | uri            | The icon to be displayed when the key has focus. If an icon is specified, do not specify a label. |
| strOut      | string         | The string to be sent when the key is focused or selected.   |
| autoRepeat  | unsigned       | By default, this field is set to **0**, which means the action associated with the key occurs only once. If this field is not set to **0**, the action will continue until the key is released. |
| disabled    | unsigned       | If this field is set to **0**, the key's label or icon is drawn with a disabled appearance and the key cannot be focused. |
| suggestions | KeySuggestions | The alternate strings to be displayed in a pop-up when the key is triggered. |

## KeySuggestions

A **KeySuggestions** object specifies one or more optional values for the associated **Key** object. The optional values are displayed when one of the key's triggers occurs.

| Attribute | Type                    | Description                                                  |
| :-------- | :---------------------- | :----------------------------------------------------------- |
| options   | string/array of strings | The optional strings associated with the **Key** object (for example, the @ key may have options of @[gmail.com](http://gmail.com/), @[msn.com](http://msn.com/), and so on). |
| triggers  | string/array of strings | The actions that trigger the suggestions pop-up. This may be one or both of the following values:<br /><br />${triggers-table} |

{#triggers-table}

| string | description                                                  |
| :----- | :----------------------------------------------------------- |
| select | The suggestions pop-up appears when the key is selected.     |
| hover  | The suggestions pop-up appears if focus remains on the key for a short interval. |

## Computing Key Sizes

Key sizes are computed based on the various width and height properties specified by the hierarchy of parts. In general, default key widths and heights are computed using the width/height values from higher levels in the hierarchy, but can be overridden by values specified lower in the hierarchy.

### Key Height Computation

- The overall keyboard height is specified by the KeyLayout's **keyboardHeight** attribute.

  

- All **Section** objects have the same height.

  

- Key heights are computed based on the number of **Row** objects in a KeyGrid.

  

- For equal height rows, if there are *N* Rows in a KeyGrid, the height of each key for each row in a KeyGrid is computed as follows: `keyHeight = (keyboardHeight) / N`.

  

- To configure rows with varying heights, specify the **rowHeight** attribute for those rows. Those rows will use the explicitly specified heights and the heights of the remaining rows will be computed by equally dividing the remaining **keyboardHeight** evenly after subtracting the height of the rows with explicitly specified heights. For example, if there are *N* rows and Row 1 has its **rowHeight** explicitly specified as 75, the keys in Row 1 will have height 75, and the height of the keys in the other rows will be calculated as follows: `keyHeight = (keyboardHeight - 75) / (N - 1)`.

### Key Width Computation

- The overall keyboard width is specified by the KeyLayout's **keyboardWidth** attribute.

  

- If there are *S* sections, the width of each section by default would be as follows: `sectionWidth = (keyboardWidth) / N`.

- Individual sections can override the default section width by explicitly specifying a **sectionWidth** attribute. Those sections will use the explicitly specified widths, and the remaining **keyboardWidth** will be equally divided between the sections that do not specify explicit widths, similar to how the key height is computed above if the **rowHeight** is explicitly specified for some rows.

  

- Each Grid in a Section object has the same width. 

  

- For keys with equal width in a Row object, if there are *K* keys in the Row, the height of each key is computed as follows: `keyWidth = (sectionWidth) / K`.

  

- To configure keys with varying widths within in a Row, specify the **keyWidth** attribute for those keys. Those keys will use the explicitly specified widths, and the widths of the remaining keys will be computed by equally dividing the remaining **sectionWidth** evenly after subtracting the width of the keys with explicitly specified widths. For example, if there are *K* keys in a row and Key 1 has its **keyWidth** explicitly specified as 100, Key 1 will have width 100 and the other keys in the Row will be calculated as follows: `keyWidth = (sectionWidth - 100) / (K - 1)`.

## Examples

### PinPad

This example uses a Key Definition File to specify a simple numeric PIN pad. The KeyLayout includes a single Section with a single Grid that has four Rows with three Keys each.

![roku815px - pin-pad-kdf](https://image.roku.com/ZHZscHItMTc2/pin-pad-kdf.jpg)

```
{
  "keyboardWidthFHD": 495,
  "keyboardHeightFHD": 300,
  "keyboardWidthHD": 324,
  "keyboardHeightHD": 200,
  "sections": [
    {
      "grids": [
        {
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
                  "icon": "theme:DKB_ClearKeyBitmap",
                  "focusIcon": "theme:DKB_ClearKeyFocusBitmap",
                  "strOut": "clear"
                },
                { "label": "0" },
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
          "autoRepeat": 1,
                  "strOut": "backspace"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```



### MiniKeyboard

This example uses the Key Definition File for the Search "MiniKeyboard" used by the RokuOS. The KeyLayout has a single Section with a single Grid that has six rows, with six keys each for the characters a-z and 0-9. The seventh row of the grid has three double-width keys for **Clear**, **Space**, and **Backspace**.

![roku815px - mini-keyboard-kdf](https://image.roku.com/ZHZscHItMTc2/mini-keyboard-kdf-v2.jpg)

```
{
  "keyboardWidthFHD": 576,
  "keyboardHeightFHD": 630,
  "keyboardWidthHD": 384,
  "keyboardHeightHD": 420,
  "sections": [
    {
      "grids": [
        {
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
                { "label": "1" },
                { "label": "2" },
                { "label": "3" },
                { "label": "4" }
              ]
            },
            {
              "keys": [
                { "label": "5" },
                { "label": "6" },
                { "label": "7" },
                { "label": "8" },
                { "label": "9" },
                { "label": "0" }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ClearKeyBitmap",
                  "focusIcon": "theme:DKB_ClearKeyFocusBitmap",
                  "strOut": "clear"
                },
                {
                  "icon": "theme:DKB_SpaceKeyBitmap",
                  "focusIcon": "theme:DKB_SpaceKeyFocusBitmap",
          "strOut": "space"
                },
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
          "autoRepeat": 1,
                  "strOut": "backspace"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```



### Address Keyboard

This is an example of a keyboard with a single Section that supports five different modes used for entering a name, zip code and an address. The five modes are as follow:

- NameUpper
- NameLower
- Zip
- FullUpper
- FullLower

Each mode is associated with a different Grid layout.

The examples below show the Keyboard in the "NameLower", "Zip" and "FullLower" modes. These examples illustrate the following:

- For all of the modes, the same **KeyboardWidth** is used.
- The grid used for the "Zip" mode has fewer rows than the other two modes. The **SectionHeight** for that mode is set so that the height of each row stays the same as in the other modes that use **KeyboardHeight**.
- In the "NameLower" mode, the **Prev** key is disabled. Similarly, in the "FullUpper" mode, the **Next** key is disabled.

![roku815px - key-grid-1-lower-kdf](https://image.roku.com/ZHZscHItMTc2/key-grid-1-lower-kdf.jpg)

![roku815px - key-grid-2-full-lower](https://image.roku.com/ZHZscHItMTc2/key-grid-2-full-lower-kdf.jpg)

![roku815px - key-grid-3-zip](https://image.roku.com/ZHZscHItMTc2/key-grid-3-zip-kdf.jpg)

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
                  "strOut": "space"
                },
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
                  "strOut": "backspace"
                },
                {
                  "icon": "theme:DKB_ClearKeyBitmap",
                  "focusIcon": "theme:DKB_ClearKeyFocusBitmap",
                  "strOut": "clear"
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
                  "strOut": "space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "backspace"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "clear"
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
                  "strOut": "backspace"
                },
                { "label": "0"},
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "clear"
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
                  "strOut": "space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "backspace"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "clear"
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
                  "strOut": "space"
                },
                {
                  "icon": "theme:KeyboardDeleteOnBitmap",
                  "focusIcon": "theme:KeyboardDeleteOffBitmap",
                  "strOut": "backspace"
                },
                {
                  "icon": "theme:KeyboardClearOnBitmap",
                  "focusIcon": "theme:KeyboardClearOffBitmap",
                  "strOut": "clear"
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



### WiFi Keyboard

This example shows the Key Definition File for the WiFi keyboard used by the Roku OS. That keyboard has four Sections. Each Section supports one or more modes with the modes being associated with one or more Grid objects. Each Grid ha four Row's with varying numbers of keys.

The examples below show the keyboard in "ABC123Lower" mode as well as "AccentsUpper" mode. Note the following:

- The leftmost section does not change its Grid for different modes. In that case, the Section has a single Grid with its mode set to an array of all of the mode names.
- In the "SymbolsUpper" mode, the third Section has some blank keys in the bottom two rows.

![roku815px - wifi-keyboard-1-alphanum-kdf](https://image.roku.com/ZHZscHItMTc2/wifi-keyboard-1-alphanum-kdf.jpg)

![roku815px - wifi-keyboard-2-symbols-kdf](https://image.roku.com/ZHZscHItMTc2/wifi-keyboard-2-symbols-kdf.jpg)

```
{
  "keyboardWidthFHD": 1368,
  "keyboardHeightFHD": 336,
  "keyboardWidthHD": 912,
  "keyboardHeightHD": 224,
  "sections": [
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_ShiftKeyBitmap",
                  "focusIcon": "theme:DKB_ShiftKeyFocusBitmap",
                  "strOut": "shift"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SpaceKeyBitmap",
                  "focusIcon": "theme:DKB_SpaceKeyFocusBitmap",
          "strOut": "space"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
          "autoRepeat": 1,
                  "strOut": "backspace"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_LeftKeyBitmap",
                  "focusIcon": "theme:DKB_LeftKeyFocusBitmap",
                  "strOut": "left"
                },
                {
                  "icon": "theme:DKB_RightKeyBitmap",
                  "focusIcon": "theme:DKB_RightKeyFocusBitmap",
                  "strOut": "right"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 630,
      "sectionWidthHD": 420,
      "grids": [
        {
          "modes": "ABC123Lower",
          "rows": [
            {
              "keys": [
                { "label": "a" },
                { "label": "b" },
                { "label": "c" },
                { "label": "d" },
                { "label": "e" },
                { "label": "f" },
                { "label": "g" }
              ]
            },
            {
              "keys": [
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
                { "label": "u" }
              ]
            },
            {
              "keys": [
                { "label": "v" },
                { "label": "w" },
                { "label": "x" },
                { "label": "y" },
                { "label": "z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": ["ABC123Upper", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                { "label": "A" },
                { "label": "B" },
                { "label": "C" },
                { "label": "D" },
                { "label": "E" },
                { "label": "F" },
                { "label": "G" }
              ]
            },
            {
              "keys": [
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
                { "label": "U" }
              ]
            },
            {
              "keys": [
                { "label": "V" },
                { "label": "W" },
                { "label": "X" },
                { "label": "Y" },
                { "label": "Z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "!" },
                { "label": "?" },
                { "label": "\u002A" },
                { "label": "\u0023" },
                { "label": "\u0024" },
                { "label": "\u0025" },
                { "label": "\u005E" }
              ]
            },
            {
              "keys": [
                { "label": "\u0026" },
                { "label": "\u002c" },
                { "label": "\u003A" },
                { "label": "\u003B" },
                { "label": "\u0060" },
                { "label": "\u0027" },
                { "label": "\u0022" }
              ]
            },
            {
              "keys": [
                { "label": "\u0028" },
                { "label": "\u0029" },
                { "label": "\u007B" },
                { "label": "\u007D" },
                { "label": "\u005B" },
                { "label": "\u005D" },
                { "label": "\u007E" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A1" },
                { "label": "\u00BF" },
                { "label": "\u003C" },
                { "label": "\u003E" },
                { "label": "\u007C" },
                { "label": "\u005C" },
                { "label": "\u002F" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u2022" },
                { "label": "\u00B7" },
                { "label": "\u00A2" },
                { "label": "\u00A3" },
                { "label": "\u00A5" },
                { "label": "\u20AC" },
                { "label": "\u00A7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00AE" },
                { "label": "\u00A9" },
                { "label": "\u2122" },
                { "label": "\u00AB" },
                { "label": "\u00BB" },
                { "label": "\u2039" },
                { "label": "\u203A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2020" },
                { "label": "\u2021" },
                { "label": "\u0192" },
                { "label": "\u00B6" },
                { "label": "\u00B9" },
                { "label": "\u00B2" },
                { "label": "\u00B3" }
              ]
            },
            {
              "keys": [
                { "label": "\u00BA" },
                { "label": "\u00B0" },
                { "label": "\u00AA" },
                { "label": "\u2026" },
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00E0" },
                { "label": "\u00E1" },
                { "label": "\u00E2" },
                { "label": "\u00E3" },
                { "label": "\u00E4" },
                { "label": "\u00E5" },
                { "label": "\u00E6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00E8" },
                { "label": "\u00E9" },
                { "label": "\u00EA" },
                { "label": "\u00EB" },
                { "label": "\u00EC" },
                { "label": "\u00ED" },
                { "label": "\u00EE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00EF" },
                { "label": "\u00F2" },
                { "label": "\u00F3" },
                { "label": "\u00F4" },
                { "label": "\u00F5" },
                { "label": "\u00F6" },
                { "label": "\u00F8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0153" },
                { "label": "\u00F9" },
                { "label": "\u00FA" },
                { "label": "\u00FB" },
                { "label": "\u00FC" },
                { "label": "\u00E7" },
                { "label": "\u00F1" }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00C0" },
                { "label": "\u00C1" },
                { "label": "\u00C2" },
                { "label": "\u00C3" },
                { "label": "\u00C4" },
                { "label": "\u00C5" },
                { "label": "\u00C6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00C8" },
                { "label": "\u00C9" },
                { "label": "\u00CA" },
                { "label": "\u00CB" },
                { "label": "\u00CC" },
                { "label": "\u00CD" },
                { "label": "\u00CE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00CF" },
                { "label": "\u00D2" },
                { "label": "\u00D3" },
                { "label": "\u00D4" },
                { "label": "\u00D5" },
                { "label": "\u00D6" },
                { "label": "\u00D8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0152" },
                { "label": "\u00D9" },
                { "label": "\u00DA" },
                { "label": "\u00DB" },
                { "label": "\u00DC" },
                { "label": "\u00C7" },
                { "label": "\u00D1" }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 270,
      "sectionWidthHD": 180,
      "grids": [
        {
          "modes": ["ABC123Lower", "ABC123Upper", "ABC123Shift"],
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
                { "label": "@" },
                { "label": "." },
                { "label": "0" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00B4" },
                { "label": "\u02C6" },
                { "label": "\u02DC" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A8" },
                { "label": "\u00AF" },
                { "label": "\u00B8" }
              ]
            },
            {
              "keys": [
                { "label": "\u003D" },
                { "label": "\u002B" },
                { "label": "\u00D7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00F7" },
                { "label": "\u00B1" },
                { "label": "\u2030" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00BC" },
                { "label": "\u00BD" },
                { "label": "\u00BE" }
              ]
            },
            {
              "keys": [
                { "label": "\u201C" },
                { "label": "\u201D" },
                { "label": "\u201E" }
              ]
            },
            {
              "keys": [
                { "label": "\u2018" },
                { "label": "\u2019" },
                { "label": "\u201A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2013" },
                { "label": "\u2014" },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00FD" },
                { "label": "\u00FF" },
                { "label": "\u0161" }
              ]
            },
            {
              "keys": [
                { "label": "\u017E" },
                { "label": "\u00F0" },
                { "label": "\u00FE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00DF" },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00DD" },
                { "label": "\u0178" },
                { "label": "\u0160" }
              ]
            },
            {
              "keys": [
                { "label": "\u017D" },
                { "label": "\u00D0" },
                { "label": "\u00DE" }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
      "modes": ["ABC123Lower", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "ABC123Upper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["SymbolsLower", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "SymbolsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["AccentsLower", "AccentsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "AccentsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```



### Email Keyboard with pop-up suggestions

This example uses the same Key Definition File as the WiFi keyboard above, but with KeySuggestions added for the ampersand key. The suggestions pop-up is set to trigger when the key is focused for a short amount of time as well as when the key is selected.

![roku815px - email-keyboard-kdf](https://image.roku.com/ZHZscHItMTc2/email-keyboard-kdf.jpg)

```
{
  "keyboardWidthFHD": 1368,
  "keyboardHeightFHD": 336,
  "keyboardWidthHD": 912,
  "keyboardHeightHD": 224,
 "sections": [
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_ShiftKeyBitmap",
                  "focusIcon": "theme:DKB_ShiftKeyFocusBitmap",
                  "strOut": "shift"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SpaceKeyBitmap",
                  "focusIcon": "theme:DKB_SpaceKeyFocusBitmap",
          "strOut": "space"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
          "autoRepeat": 1,
                  "strOut": "backspace"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_LeftKeyBitmap",
                  "focusIcon": "theme:DKB_LeftKeyFocusBitmap",
                  "strOut": "left"
                },
                {
                  "icon": "theme:DKB_RightKeyBitmap",
                  "focusIcon": "theme:DKB_RightKeyFocusBitmap",
                  "strOut": "right"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 630,
      "sectionWidthHD": 420,
      "grids": [
        {
          "modes": "ABC123Lower",
          "rows": [
            {
              "keys": [
                { "label": "a" },
                { "label": "b" },
                { "label": "c" },
                { "label": "d" },
                { "label": "e" },
                { "label": "f" },
                { "label": "g" }
              ]
            },
            {
              "keys": [
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
                { "label": "u" }
              ]
            },
            {
              "keys": [
                { "label": "v" },
                { "label": "w" },
                { "label": "x" },
                { "label": "y" },
                { "label": "z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": ["ABC123Upper", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                { "label": "A" },
                { "label": "B" },
                { "label": "C" },
                { "label": "D" },
                { "label": "E" },
                { "label": "F" },
                { "label": "G" }
              ]
            },
            {
              "keys": [
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
                { "label": "U" }
              ]
            },
            {
              "keys": [
                { "label": "V" },
                { "label": "W" },
                { "label": "X" },
                { "label": "Y" },
                { "label": "Z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "!" },
                { "label": "?" },
                { "label": "\u002A" },
                { "label": "\u0023" },
                { "label": "\u0024" },
                { "label": "\u0025" },
                { "label": "\u005E" }
              ]
            },
            {
              "keys": [
                { "label": "\u0026" },
                { "label": "\u002c" },
                { "label": "\u003A" },
                { "label": "\u003B" },
                { "label": "\u0060" },
                { "label": "\u0027" },
                { "label": "\u0022" }
              ]
            },
            {
              "keys": [
                { "label": "\u0028" },
                { "label": "\u0029" },
                { "label": "\u007B" },
                { "label": "\u007D" },
                { "label": "\u005B" },
                { "label": "\u005D" },
                { "label": "\u007E" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A1" },
                { "label": "\u00BF" },
                { "label": "\u003C" },
                { "label": "\u003E" },
                { "label": "\u007C" },
                { "label": "\u005C" },
                { "label": "\u002F" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u2022" },
                { "label": "\u00B7" },
                { "label": "\u00A2" },
                { "label": "\u00A3" },
                { "label": "\u00A5" },
                { "label": "\u20AC" },
                { "label": "\u00A7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00AE" },
                { "label": "\u00A9" },
                { "label": "\u2122" },
                { "label": "\u00AB" },
                { "label": "\u00BB" },
                { "label": "\u2039" },
                { "label": "\u203A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2020" },
                { "label": "\u2021" },
                { "label": "\u0192" },
                { "label": "\u00B6" },
                { "label": "\u00B9" },
                { "label": "\u00B2" },
                { "label": "\u00B3" }
              ]
            },
            {
              "keys": [
                { "label": "\u00BA" },
                { "label": "\u00B0" },
                { "label": "\u00AA" },
                { "label": "\u2026" },
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00E0" },
                { "label": "\u00E1" },
                { "label": "\u00E2" },
                { "label": "\u00E3" },
                { "label": "\u00E4" },
                { "label": "\u00E5" },
                { "label": "\u00E6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00E8" },
                { "label": "\u00E9" },
                { "label": "\u00EA" },
                { "label": "\u00EB" },
                { "label": "\u00EC" },
                { "label": "\u00ED" },
                { "label": "\u00EE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00EF" },
                { "label": "\u00F2" },
                { "label": "\u00F3" },
                { "label": "\u00F4" },
                { "label": "\u00F5" },
                { "label": "\u00F6" },
                { "label": "\u00F8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0153" },
                { "label": "\u00F9" },
                { "label": "\u00FA" },
                { "label": "\u00FB" },
                { "label": "\u00FC" },
                { "label": "\u00E7" },
                { "label": "\u00F1" }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00C0" },
                { "label": "\u00C1" },
                { "label": "\u00C2" },
                { "label": "\u00C3" },
                { "label": "\u00C4" },
                { "label": "\u00C5" },
                { "label": "\u00C6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00C8" },
                { "label": "\u00C9" },
                { "label": "\u00CA" },
                { "label": "\u00CB" },
                { "label": "\u00CC" },
                { "label": "\u00CD" },
                { "label": "\u00CE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00CF" },
                { "label": "\u00D2" },
                { "label": "\u00D3" },
                { "label": "\u00D4" },
                { "label": "\u00D5" },
                { "label": "\u00D6" },
                { "label": "\u00D8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0152" },
                { "label": "\u00D9" },
                { "label": "\u00DA" },
                { "label": "\u00DB" },
                { "label": "\u00DC" },
                { "label": "\u00C7" },
                { "label": "\u00D1" }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 270,
      "sectionWidthHD": 180,
      "grids": [
        {
          "modes": ["ABC123Lower", "ABC123Upper", "ABC123Shift"],
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
                  "label": "@",
                  "suggestions": {
                      "options": [ "@aol.com", "@msn.com", "@yahoo.com", "@mac.com", "@gmail.com", "@roku.com" ],
              "triggers": [ "hover", "select" ]
                   }
                },
                { "label": "." },
                { "label": "0" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00B4" },
                { "label": "\u02C6" },
                { "label": "\u02DC" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A8" },
                { "label": "\u00AF" },
                { "label": "\u00B8" }
              ]
            },
            {
              "keys": [
                { "label": "\u003D" },
                { "label": "\u002B" },
                { "label": "\u00D7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00F7" },
                { "label": "\u00B1" },
                { "label": "\u2030" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00BC" },
                { "label": "\u00BD" },
                { "label": "\u00BE" }
              ]
            },
            {
              "keys": [
                { "label": "\u201C" },
                { "label": "\u201D" },
                { "label": "\u201E" }
              ]
            },
            {
              "keys": [
                { "label": "\u2018" },
                { "label": "\u2019" },
                { "label": "\u201A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2013" },
                { "label": "\u2014" },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00FD" },
                { "label": "\u00FF" },
                { "label": "\u0161" }
              ]
            },
            {
              "keys": [
                { "label": "\u017E" },
                { "label": "\u00F0" },
                { "label": "\u00FE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00DF" },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00DD" },
                { "label": "\u0178" },
                { "label": "\u0160" }
              ]
            },
            {
              "keys": [
                { "label": "\u017D" },
                { "label": "\u00D0" },
                { "label": "\u00DE" }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
      "modes": ["ABC123Lower", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "ABC123Upper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["SymbolsLower", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "SymbolsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["AccentsLower", "AccentsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "AccentsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```



### Full Keyboard with Extended Action Section

This example starts with the same Key Definition File used for the WiFi keyboard above, but adds a 5th Section that includes additional action keys. The *rows* array for that Section's Grid contains 4 elements. The 1st, 2nd and 4th Row's in that array contain a single Key (Close, Clear and Continue). The 3rd element of that array is a null Row. This causes a gap to be left between the 2nd and 4th rows of that Section. See the Section near of the bottom of the Key Definition File to see how a null Row is specified in the Grid's *rows* array.

![roku815px - extended-action-keyboard-kdf](https://image.roku.com/ZHZscHItMTc2/extended-action-keyboard-kdf.jpg)

```
{
  "keyboardWidthFHD": 1584,
  "keyboardHeightFHD": 336,
  "keyboardWidthHD": 1056,
  "keyboardHeightHD": 224,
  "sections": [
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_ShiftKeyBitmap",
                  "focusIcon": "theme:DKB_ShiftKeyFocusBitmap",
                  "strOut": "shift"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SpaceKeyBitmap",
                  "focusIcon": "theme:DKB_SpaceKeyFocusBitmap",
          "strOut": "space"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_DeleteKeyBitmap",
                  "focusIcon": "theme:DKB_DeleteKeyFocusBitmap",
          "autoRepeat": 1,
                  "strOut": "backspace"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_LeftKeyBitmap",
                  "focusIcon": "theme:DKB_LeftKeyFocusBitmap",
                  "strOut": "left"
                },
                {
                  "icon": "theme:DKB_RightKeyBitmap",
                  "focusIcon": "theme:DKB_RightKeyFocusBitmap",
                  "strOut": "right"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 630,
      "sectionWidthHD": 420,
      "grids": [
        {
          "modes": "ABC123Lower",
          "rows": [
            {
              "keys": [
                { "label": "a" },
                { "label": "b" },
                { "label": "c" },
                { "label": "d" },
                { "label": "e" },
                { "label": "f" },
                { "label": "g" }
              ]
            },
            {
              "keys": [
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
                { "label": "u" }
              ]
            },
            {
              "keys": [
                { "label": "v" },
                { "label": "w" },
                { "label": "x" },
                { "label": "y" },
                { "label": "z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": ["ABC123Upper", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                { "label": "A" },
                { "label": "B" },
                { "label": "C" },
                { "label": "D" },
                { "label": "E" },
                { "label": "F" },
                { "label": "G" }
              ]
            },
            {
              "keys": [
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
                { "label": "U" }
              ]
            },
            {
              "keys": [
                { "label": "V" },
                { "label": "W" },
                { "label": "X" },
                { "label": "Y" },
                { "label": "Z" },
                { "label": "-" },
                { "label": "_" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "!" },
                { "label": "?" },
                { "label": "\u002A" },
                { "label": "\u0023" },
                { "label": "\u0024" },
                { "label": "\u0025" },
                { "label": "\u005E" }
              ]
            },
            {
              "keys": [
                { "label": "\u0026" },
                { "label": "\u002c" },
                { "label": "\u003A" },
                { "label": "\u003B" },
                { "label": "\u0060" },
                { "label": "\u0027" },
                { "label": "\u0022" }
              ]
            },
            {
              "keys": [
                { "label": "\u0028" },
                { "label": "\u0029" },
                { "label": "\u007B" },
                { "label": "\u007D" },
                { "label": "\u005B" },
                { "label": "\u005D" },
                { "label": "\u007E" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A1" },
                { "label": "\u00BF" },
                { "label": "\u003C" },
                { "label": "\u003E" },
                { "label": "\u007C" },
                { "label": "\u005C" },
                { "label": "\u002F" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u2022" },
                { "label": "\u00B7" },
                { "label": "\u00A2" },
                { "label": "\u00A3" },
                { "label": "\u00A5" },
                { "label": "\u20AC" },
                { "label": "\u00A7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00AE" },
                { "label": "\u00A9" },
                { "label": "\u2122" },
                { "label": "\u00AB" },
                { "label": "\u00BB" },
                { "label": "\u2039" },
                { "label": "\u203A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2020" },
                { "label": "\u2021" },
                { "label": "\u0192" },
                { "label": "\u00B6" },
                { "label": "\u00B9" },
                { "label": "\u00B2" },
                { "label": "\u00B3" }
              ]
            },
            {
              "keys": [
                { "label": "\u00BA" },
                { "label": "\u00B0" },
                { "label": "\u00AA" },
                { "label": "\u2026" },
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00E0" },
                { "label": "\u00E1" },
                { "label": "\u00E2" },
                { "label": "\u00E3" },
                { "label": "\u00E4" },
                { "label": "\u00E5" },
                { "label": "\u00E6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00E8" },
                { "label": "\u00E9" },
                { "label": "\u00EA" },
                { "label": "\u00EB" },
                { "label": "\u00EC" },
                { "label": "\u00ED" },
                { "label": "\u00EE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00EF" },
                { "label": "\u00F2" },
                { "label": "\u00F3" },
                { "label": "\u00F4" },
                { "label": "\u00F5" },
                { "label": "\u00F6" },
                { "label": "\u00F8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0153" },
                { "label": "\u00F9" },
                { "label": "\u00FA" },
                { "label": "\u00FB" },
                { "label": "\u00FC" },
                { "label": "\u00E7" },
                { "label": "\u00F1" }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00C0" },
                { "label": "\u00C1" },
                { "label": "\u00C2" },
                { "label": "\u00C3" },
                { "label": "\u00C4" },
                { "label": "\u00C5" },
                { "label": "\u00C6" }
              ]
            },
            {
              "keys": [
                { "label": "\u00C8" },
                { "label": "\u00C9" },
                { "label": "\u00CA" },
                { "label": "\u00CB" },
                { "label": "\u00CC" },
                { "label": "\u00CD" },
                { "label": "\u00CE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00CF" },
                { "label": "\u00D2" },
                { "label": "\u00D3" },
                { "label": "\u00D4" },
                { "label": "\u00D5" },
                { "label": "\u00D6" },
                { "label": "\u00D8" }
              ]
            },
            {
              "keys": [
                { "label": "\u0152" },
                { "label": "\u00D9" },
                { "label": "\u00DA" },
                { "label": "\u00DB" },
                { "label": "\u00DC" },
                { "label": "\u00C7" },
                { "label": "\u00D1" }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 270,
      "sectionWidthHD": 180,
      "grids": [
        {
          "modes": ["ABC123Lower", "ABC123Upper", "ABC123Shift"],
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
                { "label": "@" },
                { "label": "." },
                { "label": "0" }
              ]
            }
          ]
        },
        {
          "modes": "SymbolsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00B4" },
                { "label": "\u02C6" },
                { "label": "\u02DC" }
              ]
            },
            {
              "keys": [
                { "label": "\u00A8" },
                { "label": "\u00AF" },
                { "label": "\u00B8" }
              ]
            },
            {
              "keys": [
                { "label": "\u003D" },
                { "label": "\u002B" },
                { "label": "\u00D7" }
              ]
            },
            {
              "keys": [
                { "label": "\u00F7" },
                { "label": "\u00B1" },
                { "label": "\u2030" }
              ]
            }
          ]
        },
        {
          "modes": ["SymbolsUpper", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00BC" },
                { "label": "\u00BD" },
                { "label": "\u00BE" }
              ]
            },
            {
              "keys": [
                { "label": "\u201C" },
                { "label": "\u201D" },
                { "label": "\u201E" }
              ]
            },
            {
              "keys": [
                { "label": "\u2018" },
                { "label": "\u2019" },
                { "label": "\u201A" }
              ]
            },
            {
              "keys": [
                { "label": "\u2013" },
                { "label": "\u2014" },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": "AccentsLower",
          "rows": [
            {
              "keys": [
                { "label": "\u00FD" },
                { "label": "\u00FF" },
                { "label": "\u0161" }
              ]
            },
            {
              "keys": [
                { "label": "\u017E" },
                { "label": "\u00F0" },
                { "label": "\u00FE" }
              ]
            },
            {
              "keys": [
                { "label": "\u00DF" },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        },
        {
          "modes": ["AccentsUpper", "AccentsShift"],
          "rows": [
            {
              "keys": [
                { "label": "\u00DD" },
                { "label": "\u0178" },
                { "label": "\u0160" }
              ]
            },
            {
              "keys": [
                { "label": "\u017D" },
                { "label": "\u00D0" },
                { "label": "\u00DE" }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            },
            {
              "keys": [
                {                   },
                {                   },
                {                   }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
      "modes": ["ABC123Lower", "ABC123Shift" ],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "ABC123Upper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOnKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOnKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["SymbolsLower", "SymbolsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "SymbolsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOnKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOffKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": ["AccentsLower", "AccentsShift"],
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOffKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        },
        {
      "modes": "AccentsUpper",
          "rows": [
            {
              "keys": [
                {
                  "icon": "theme:DKB_CapsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_CapsModOnKeyFocusBitmap",
                  "strOut": "capslock"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_ABC123ModOffKeyBitmap",
                  "focusIcon": "theme:DKB_ABC123ModOffKeyFocusBitmap",
          "strOut": "abc123"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_SymbolsModOffKeyBitmap",
                  "focusIcon": "theme:DKB_SymbolsModOffKeyFocusBitmap",
                  "strOut": "symbols"
                }
              ]
            },
            {
              "keys": [
                {
                  "icon": "theme:DKB_AccentsModOnKeyBitmap",
                  "focusIcon": "theme:DKB_AccentsModOnKeyFocusBitmap",
                  "strOut": "accents"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sectionWidthFHD": 180,
      "sectionWidthHD": 120,
      "grids": [
        {
          "rows": [
            {
              "keys": [
                {
                  "label": "Close",
                  "strOut": "close"
                }
              ]
            },
            {
              "keys": [
                {
                  "label": "Clear",
          "strOut": "clear"
                }
              ]
            },
            {
            },
            {
              "keys": [
                {
                  "label": "Continue",
                  "strOut": "continue"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```