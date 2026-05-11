---
title: "PinPad"
excerpt: 'Widget node for entering a fixed length numeric string with a keyboard'
deprecated: false
hidden: false
metadata:
  title: 'PinPad'
  description: 'The PinPad node is a widget for entering a fixed length numeric string, displaying each digit in boxes above the keyboard with support for secureMode.'
  robots: index
next:
  description: ''
---


Extends [**Group**](doc:group) 

The PinPad node is a simple widget that allows you to enter a fixed length numeric string. The string that is entered is displayed in a set of boxes above the PinPad node keyboard, with each box displaying a single numeral of the entered string.

The PinPad node must have the key focus in order to work properly.

The default appearance of the PinPad node is very transparent, allowing the node to pick up most of its color from what is rendered underneath it. The appearance can be customized by changing the keyboardBitmapUri and other fields.

### PinPad Bitmap Templates

Use the links below to download the template files.

The files have opaque white lines that show the key outlines with the rest of the images fully transparent. Looking at the files in some image viewers that do not support transparency will result in the images looking all white.

When creating your own keyboard background artwork, you must maintain the size of the image and the position of the keys in order for it to align properly with the rendered key labels and icons.

#### Templates:

- [SD PinPad Template](https://image.roku.com/ZHZscHItMTc2/pinpad---SD.png)
- [HD PinPad Template](https://image.roku.com/ZHZscHItMTc2/pinpad---HD.png)
- [FHD PinPad Template](https://image.roku.com/ZHZscHItMTc2/pinpad---FHD.png)

## Fields

| Field               | Type    | Default    | Access Permission | Description                                                  |
| ------------------- | ------- | ---------- | ----------------- | ------------------------------------------------------------ |
| pin                 | string  | ""         | READ_WRITE        | Contains the string of numbers that have been entered        |
| pinLength           | integer | 4          | READ_WRITE        | Contains the maximum number of digits that can be entered    |
| secureMode          | boolean | true       | READ_WRITE        | When set to true, each digit entered is displayed briefly, then replaced with an asterisk. When false, the entered digits always remain visible |
| keyColor            | color   | 0xffffffff | READ_WRITE        | Specifies the color of the key labels and icons when the keyboard does not have the focus |
| focusedKeyColor     | color   | 0xffffffff | READ_WRITE        | Specifies the color of the key labels and icons when the keyboard has the focus |
| pinDisplayTextColor | color   | 0xffffffff | READ_WRITE        | Specifies the color of the numbers displayed in the pin display boxes |
| keyboardBitmapUri   | string  | ""         | READ_WRITE        | Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the numeric keys and icons<br/><blockquote>This image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below.</blockquote> |
| pinDisplayBitmapUri | string  | ""         | READ_WRITE        | Specifed the URI of an image file to be loaded to replace the default box drawn underneath each entered digit in the pin display. This should be a 9-patch image so that it can be stretched to appropriate size depending on the pinLength field |
| focusBitmapUri      | string  | ""         | READ_WRITE        | Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys |
| showPinDisplay      | boolean | true       | READ_WRITE        | Specifies whether or not the pin display that shows the entered digits is visible. In most cases, it is desirable to display the entered digits so that the user can see the string as it is entered.<br/><blockquote>You may want to only show the keyboard part of the PinPad node. In those cases, the pin field of the node will still contain the string entered by the user, so that it can displayed in some different manner.</blockquote> |
| itemFocused         | integer | 0          | READ_WRITE        | Specifies index of the key label that will be in focus when PinPad is created |
| focusVisible        | boolean | true       | READ_WRITE        | Specifies whether or not focused key is visible when PinPad is created |

## Sample app	
[PinpadExample](https://github.com/rokudev/samples/tree/master/ux%20components/widgets/PinPadExample) is a sample app demonstrating Pinpad in action.
