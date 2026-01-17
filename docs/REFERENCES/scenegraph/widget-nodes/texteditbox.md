---
title: "TextEditBox"
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


Extends [**Group**](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**") 

The **TextEditBox** node class is intended to display a string of characters as they are typed. When focused, it displays a flashing cursor to indicate the text insertion position.

**TextEditBox** nodes are automatically included in the [**Keyboard**](/docs/references/scenegraph/widget-nodes/keyboard.md "**Keyboard**") and [**MiniKeyboard**](/docs/references/scenegraph/widget-nodes/minikeyboard.md "**MiniKeyboard**") node classes.

The default appearance of the **TextEditBox** is very transparent, allowing it to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the backgroundUri and other fields.

## Fields

| Field                                                     | Type    | Default    | Access Permission | Description                                                  |
| --------------------------------------------------------- | ------- | ---------- | ----------------- | ------------------------------------------------------------ |
| text                                                      | string  | ""         | Read-Write        | Contains the string of characters being displayed.           |
| hintText                                                  | string  | ""         | Read-Write        | Specifies a string to be displayed if the length of the text field string is zero. The typical usage of this field is to prompt the user about what to enter (such as, "Enter your WiFi password"). |
| maxTextLength                                             | integer | 15         | Read-Write        | Specifies the maximum length of the string that can be displayed. When used internal to the **Keyboard** node, maxTextLength is initialized to 75. When used in the **MiniKeyboard** node, maxTextLength is initialized to 25. |
| cursorPosition                                            | integer | 0          | Read-Write        | By default, this is set to the length of the text field, indicating that the next character to be entered should be appended at the end of the string. When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes use this field to move the text insertion point. |
| clearOnDownKey                                            | boolean | true       | Read-Write        | When clearOnDownKey is set to true, the textEditBox erases all the characters when down key is pressed (focus does not move down). When set to false, the characters are not erased and focus moves down. |
| active                                                    | boolean | false      | Read-Write        | When active is set to true, the cursor is displayed. When set to false, the cursor is hidden. When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes set this field to true when the keyboard has focus, and false when it does not. |
| secureMode                                                | boolean | false      | Read-Write        | When set to true, the characters entered are briefly displayed, then replaced with an asterisk. When set to false, the characters entered are always displayed. When used internal to the **Keyboard** and **MiniKeyboard** nodes, you can access the keyboard **textEditBox** field to set its secureMode field. For example: ```myKeyboard.textEditBox.secureMode = true``` |
| textColor                                                 | color   | 0xffffffff | Read-Write        | Specifies the color of the text string displayed.            |
| hintTextColor                                             | color   | 0xffffffff | Read-Write        | Specifies the color of the hint text string.                 |
| width                                                     | float   | -1.0       | Read-Write        | Specifies the width of the **TextEditBox** node. When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes set this field to match the width of the keyboard. |
| backgroundUri                                             | string  | ""         | Read-Write        | Specifies the URI of the image rendered as the background of the **TextEditBox** node. |
| leadingEllipsis | Boolean | false      | READ_WRITE        | Specifies whether to display the end or beginning of text that overflows its available width:<br />${leading-ellipsis-list} |

{#leading-ellipsis-list}

- **true**. The end of the text is shown. For example, "the quick brown fox jumps over the lazy dog" would be truncated to "...jumps over the lazy dog". 
- **false**. The start of the text is shown (for example, "the quick brown fox jumps...").

## Sample app	

[TextEditBoxExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/TextEditBoxExample) is a sample app demonstrating TextEditBox in action.