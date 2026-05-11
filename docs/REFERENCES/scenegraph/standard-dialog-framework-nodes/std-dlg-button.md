---
title: StdDlgButton
excerpt: 'Node class for individual dialog buttons with text and focus control'
deprecated: false
hidden: false
metadata:
  title: 'StdDlgButton'
  description: 'StdDlgButton represents each button in the button area of a dialog, with fields for button text and a disabled state that prevents focus.'
  robots: index
next:
  description: ''
---
Extends [Group](doc:group)

**StdDlgButton** is the class used for each button in the [button area](doc:standard-dialog-framework-nodes#structure). The buttons are displayed in the order in which they are listed as children of the [**StdDlgButtonArea** node](doc:std-dlg-button-area). The size and layout of each button are controlled by the StandardDialog layout algorithm. **StdDlgButton** nodes should only be used as children of a **StdDlgButtonArea** node.

<Image alt="roku815px - std-dlg-button" border={false} src="https://image.roku.com/ZHZscHItMTc2/std-dlg-button-3.jpg" />

## Fields

| Field    | Type    | Default | Access Permission | Description                                                                                                                                         |
| :------- | :------ | :------ | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| text     | string  | ""      | READ_WRITE        | The text to be displayed on the button                                                                                                              |
| disabled | boolean | false   | READ_WRITE        | Specifies whether the button can receive focus. If this field is set to true, the button has an inactive appearance and is unable to receive focus. |
