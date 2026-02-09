---
title: TextEditBox
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Extends <Anchor label="**Group**" title="**Group**" href="https://roku-ent.readme.io/dev/docs/group">**Group**</Anchor>

The **TextEditBox** node class is intended to display a string of characters as they are typed. When focused, it displays a flashing cursor to indicate the text insertion position.

**TextEditBox** nodes are automatically included in the <Anchor label="**Keyboard**" title="**Keyboard**" href="https://roku-ent.readme.io/dev/docs/keyboard">**Keyboard**</Anchor> and <Anchor label="**MiniKeyboard**" title="**MiniKeyboard**" href="https://roku-ent.readme.io/dev/docs/minikeyboard">**MiniKeyboard**</Anchor> node classes.

The default appearance of the **TextEditBox** is very transparent, allowing it to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the backgroundUri and other fields.

## Fields

<Table>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Default
      </th>

      <th>
        Access Permission
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        text
      </td>

      <td>
        string
      </td>

      <td>
        ""
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Contains the string of characters being displayed.
      </td>
    </tr>

    <tr>
      <td>
        hintText
      </td>

      <td>
        string
      </td>

      <td>
        ""
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies a string to be displayed if the length of the text field string is zero. The typical usage of this field is to prompt the user about what to enter (such as, "Enter your WiFi password").
      </td>
    </tr>

    <tr>
      <td>
        maxTextLength
      </td>

      <td>
        integer
      </td>

      <td>
        15
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies the maximum length of the string that can be displayed. When used internal to the **Keyboard** node, maxTextLength is initialized to 75. When used in the **MiniKeyboard** node, maxTextLength is initialized to 25.
      </td>
    </tr>

    <tr>
      <td>
        cursorPosition
      </td>

      <td>
        integer
      </td>

      <td>
        0
      </td>

      <td>
        Read-Write
      </td>

      <td>
        By default, this is set to the length of the text field, indicating that the next character to be entered should be appended at the end of the string. When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes use this field to move the text insertion point.
      </td>
    </tr>

    <tr>
      <td>
        clearOnDownKey
      </td>

      <td>
        boolean
      </td>

      <td>
        true
      </td>

      <td>
        Read-Write
      </td>

      <td>
        When clearOnDownKey is set to true, the textEditBox erases all the characters when down key is pressed (focus does not move down). When set to false, the characters are not erased and focus moves down.
      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        boolean
      </td>

      <td>
        false
      </td>

      <td>
        Read-Write
      </td>

      <td>
        When active is set to true, the cursor is displayed.   

        When set to false, the cursor is hidden.   

        When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes set this field to true when the keyboard has focus, and false when it does not.
      </td>
    </tr>

    <tr>
      <td>
        secureMode
      </td>

      <td>
        boolean
      </td>

      <td>
        false
      </td>

      <td>
        Read-Write
      </td>

      <td>
        When set to true, the characters entered are briefly displayed, then replaced with an asterisk. When set to false, the characters entered are always displayed.   

        When used internal to the **Keyboard** and **MiniKeyboard** nodes, you can access the keyboard **textEditBox** field to set its secureMode field. For example: `myKeyboard.textEditBox.secureMode = true`
      </td>
    </tr>

    <tr>
      <td>
        textColor
      </td>

      <td>
        color
      </td>

      <td>
        0xffffffff
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies the color of the text string displayed.
      </td>
    </tr>

    <tr>
      <td>
        hintTextColor
      </td>

      <td>
        color
      </td>

      <td>
        0xffffffff
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies the color of the hint text string.
      </td>
    </tr>

    <tr>
      <td>
        width
      </td>

      <td>
        float
      </td>

      <td>
        -1.0
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies the width of the **TextEditBox** node. When used internal to the **Keyboard** and **MiniKeyboard** nodes, those nodes set this field to match the width of the keyboard.
      </td>
    </tr>

    <tr>
      <td>
        backgroundUri
      </td>

      <td>
        string
      </td>

      <td>
        ""
      </td>

      <td>
        Read-Write
      </td>

      <td>
        Specifies the URI of the image rendered as the background of the **TextEditBox** node.
      </td>
    </tr>

    <tr>
      <td>
        leadingEllipsis
      </td>

      <td>
        Boolean
      </td>

      <td>
        false
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        Specifies whether to display the end or beginning of text that overflows its available width:<br />  

        * **true**. The end of the text is shown. For example, "the quick brown fox jumps over the lazy dog" would be truncated to "...jumps over the lazy dog".
        * **false**. The start of the text is shown (for example, "the quick brown fox jumps...").
      </td>
    </tr>
  </tbody>
</Table>

## Sample app

[TextEditBoxExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/TextEditBoxExample) is a sample app demonstrating TextEditBox in action.
