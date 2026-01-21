---
title: "ParentalControlPinPad"
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


ParentalControlPinPad is a variant of the [PinPad component](doc:pinpad), although it does have a few key differences: The pin, pinLength, and secureMode fields are made private (i.e., not accessible to BrightScript, and secureMode set to true).

There are two use cases for the ParentalControlPinPad node:

- If the user enters the correct pin, a 2-hour override of content blocking starts, similar to the system behavior on RokuTV
- If the user enters an incorrect PIN, the text fields are cleared automatically

## Fields

ParentalControlPinPad includes a new field, pinSuccess for blocking content:

| Field               | Type    | Default    | Description                                                  |
| ------------------- | ------- | ---------- | ------------------------------------------------------------ |
| pin                 | string  | ""         | Contains the string of numbers that have been entered.       |
| pinLength           | integer | 4          | Contains the maximum number of digits that can be entered    |
| pinSuccess          | string  | incomplete | **Read-only**<br/>"true": Content is now unblocked<br/>"false": Pin incorrect, "incomplete": a full pin is not entered |
| secureMode          | boolean | true       | When set to true, each digit entered is displayed briefly, then replaced with an asterisk. When false, the entered digits always remain visible. |
| keyColor            | color   | 0xffffffff | Specifies the color of the key labels and icons when the keyboard does not have the focus |
| focusedKeyColor     | color   | 0xffffffff | Specifies the color of the key labels and icons when the keyboard has the focus |
| pinDisplayTextColor | color   | 0xffffffff | Specifies the color of the numbers displayed in the pin display boxes |
| keyboardBitmapUri   | string  | ""         | Specifies the URI of an image file to be loaded to replace the default keyboard image drawn underneath the numeric keys and icons. Note that this image must be carefully designed so that the key positions match the default image. Template images for SD, HD and FHD resolutions are provided below. |
| pinDisplayBitmapUri | string  | ""         | Specifed the URI of an image file to be loaded to replace the default box drawn underneath each entered digit in the pin display. This should be a 9-patch image so that it can be stretched to appropriate size depending on the pinLength field. |
| focusBitmapUri      | string  | ""         | Specifies the URI of an image file to be loaded to replace the keyboard focus indicator. This should be a 9-patch image so that it can be stretched to the appropriate size for the double width keys. |
| showPinDisplay      | boolean | true       | Specifies whether or not the pin display that shows the entered digits is visible. In most cases, it is desirable to display the entered digits so that the user can see the string as it is entered. In some cases though, you might want to only show the keyboard part of the PinPad node.<br/><br/>In those cases, the pinfield of the node will still contain the string entered by the user, so that it can displayed in some different manner. |