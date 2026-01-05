---
title: "StandardDialog"
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

# StandardDialog



Extends [Group](/docs/references/scenegraph/layout-group-nodes/group.md "**Group**")

The **StandardDialog** node is the base for Roku's pre-built standard message, keyboard, pinpad, and progress dialogs. It can also be used directly with a custom dialog structure built with the **StdDialogItem** nodes.

## Fields

| Field          | Type            | Default | Access Permission | Description                                                  |
| :------------- | :-------------- | :------ | :---------------- | :----------------------------------------------------------- |
| width          | float           | 0.0f    | READ_WRITE        | Sets the width of the dialog:<br />${width-options-list}     |
| height         | float           | 0.0f    | READ_WRITE        | Sets the height of the dialog.<br /><br />If this field is set to greater than 0, and the layout of the dialog for the specified width results in a dialog with a height less than the value of this field, the dialog layout is increased so that the dialog height matches the value of this field. In this case, the button area is moved to the bottom of the dialog and a blank region exists between the content area and the button area. |
| buttonSelected | int             | 0       | READ_ONLY         | Indicates the index of the selected button when the user selects one of the buttons in the button area. |
| buttonFocused  | int             | 0       | READ_ONLY         | Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area. |
| palette        | RSGPalette node | not set | READ_WRITE        | Sets the color palette for the dialog's background, text, buttons, and other elements. <br /><br />By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's [Scene](/docs/references/scenegraph/scene.md) node, which has a **palette** field that can be used to consistently color the standard dialogs and keyboards in the app). <br /><br />The RSGPalette color values used by the StandardDialog node are as follows:<br />${rsg-palette-table} |
| close          | boolean         | false   | WRITE_ONLY        | Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false. |
| wasClosed      | event           | N/A     | READ_ONLY         | An event that indicates the dialog was dismissed. This event is triggered when one of the following occurs:<br />${was-closed-list} |

{#width-options-list}

- If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD).
- If set to greater than 0, the specified width is used as the overall width of the dialog.

{#rsg-palette-table}

| Palette Color Name       | Usages                                                       |
| :----------------------- | :----------------------------------------------------------- |
| DialogBackgroundColor    | Blend color for dialog's background bitmap.                  |
| DialogItemColor          | Blend color for the following items:<br />${dialog-item-color-list} |
| DialogTextColor          | Color for the text in the following items:<br />${dialog-text-color-list} |
| DialogFocusColor         | Blend color for the following:<br />${dialog-focus-color-list} |
| DialogFocusItemColor     | Color for the text of the focused button.                    |
| DialogSecondaryTextColor | Color for the text of in the following items:<br />${dialog-secondary-text-color-list} |
| DialogSecondaryItemColor | Color for the following items:<br />${dialog-secondary-item-color-list} |
| DialogInputFieldColor    | The blend color for the text edit box background bitmap for keyboards used inside dialogs. |
| DialogKeyboardColor      | The blend color for the keyboard background bitmap for keyboards used inside dialogs |
| DialogFootprintColor     | The blend color for the following items:<br />${dialog-footprint-color-list} |

{#dialog-item-color-list}

- [StdDlgProgressItem's](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-progress-item.md) spinner bitmap
-  [StdDlgDeterminateProgressItem's](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md) graphic

{#dialog-text-color-list}

- [StdDlgTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md) and [StdDlgGraphicItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md) if the **namedTextStyle** field is set to "normal" or "bold".
- All [content area items](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-item-base.md), except for [StdDlgTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md) and [StdDlgGraphicItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md).
- [Title area](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-title-area.md#fields). Unfocused button.

{#dialog-focus-color-list}

- The [button area](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md#fields) focus bitmap.
- The focused scrollbar thumb.

{#dialog-secondary-text-color-list}

- [StdDlgTextItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-text-item.md) and [StdDlgGraphicItem](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-graphic-item.md) if the **namedTextStyle** field is set to "secondary".
- Disabled button.

{#dialog-secondary-item-color-list}

- The divider displayed below the title area.
- The unfilled portion of the [StdDlgDeterminateProgressItem's](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-determinate-progress-item.md) graphic.

{#dialog-footprint-color-list}

- The button focus footprint bitmap that is displayed when the [button area](/docs/references/scenegraph/standard-dialog-framework-nodes/std-dlg-button-area.md#fields) does not have focus.
- Unfocused scrollbar thumb and scrollbar track.

{#was-closed-list}

- The **close** field is set.
- The Back, Home, or Options key is pressed.
- Another dialog is displayed.