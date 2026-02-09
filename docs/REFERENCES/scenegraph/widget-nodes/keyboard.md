---
title: "Keyboard"
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


Extends [**Group**](doc:group)

The Keyboard node class allows a user to enter a string of alphanumeric characters. The string entered is displayed in a [TextEditBox](doc:texteditbox) node that is part of the Keyboard node.

The Keyboard node must have the key focus in order to work properly. By default, a Keyboard node toggles between uppercase and lowercase letters when the Options remote key is pressed, to speed the entry of mixed-case strings by the user. It is important not to override this behavior, particularly if a Keyboard node is used as an internal node for a [KeyboardDialog](doc:keyboarddialog) node.

The default appearance of a Keyboard node is very transparent, allowing the keyboard to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the keyboardBitmapUri and other fields.

## Fields

| Field             | Type             | Default        | Access Permission | Description                                                  |
| ----------------- | ---------------- | -------------- | ----------------- | ------------------------------------------------------------ |
| text              | string           | ""             | READ_WRITE        | Contains the string of characters that has been entered      |
| keyColor          | color            | 0xffffffff     | READ_WRITE        | Specifies the color of the key labels and icons when the Keyboard node does not have the focus |
| focusedKeyColor   | color            | 0xffffffff     | READ_WRITE        | Specifies the color of the key labels and icons when the Keyboard node has the focus |
| keyboardBitmapUri | string           | ""             | READ_WRITE        | Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the key label and icons.<br/><blockquote>This image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.</blockquote> |
| focusBitmapUri    | string           | ""             | READ_WRITE        | Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys |
| textEditBox       | TextEditBox node | system default | READ_ONLY         | This provides access to the Keyboard node internal TextEditBox node so that its appearance can be modified. You should not set this field, but you can set the fields of the TextEditBox node (such as, myKeyboard.textEditBox.textColor = "0xFF0000FF") |
| showTextEditBox   | boolean          | true           | READ_WRITE        | Specifies whether or not the Keyboard node internal TextEditBox node is displayed. In most cases, it is desirable to display the TextEditBox node so that the user can see the string as it is entered. In some cases though, you might want to show only the keyboard part of the Keyboard node. In those cases, the text field of the node will still contain the string entered by the user, so it can displayed in some different manner |

#### Keyboard Bitmap Templates

You can use the following bitmap templates to design your own keyboard background artwork.  These templates have opaque white lines that show the key outlines with the rest of the images fully transparent. Looking at the files in some image viewers that do not support transparency will result in the images looking all white.

When creating your own keyboard background artwork, you must maintain the size of the image and the position of the keys in order for it to align properly with the rendered key labels and icons.

- [SD Keyboard Template](https://image.roku.com/ZHZscHItMTc2/SDKeyboardTemplate.png "SD Keyboard Template")
- [HD Keyboard Template](https://image.roku.com/ZHZscHItMTc2/HDKeyboardTemplate.png "HD Keyboard Template")
- [FHD Keyboard Template](https://image.roku.com/ZHZscHItMTc2/FHDKeyboardTemplate.png "FHD Keyboard Template")

## Sample app	
[KeyboardExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/KeyboardExample) is a sample app demonstrating Keyboard in action.