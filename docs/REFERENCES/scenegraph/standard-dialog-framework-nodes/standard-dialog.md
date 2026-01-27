---
title: 'StandardDialog '
hidden: true
---
Extends [Group](doc:group)

The **StandardDialog** node is the base for Roku's pre-built standard message, keyboard, pinpad, and progress dialogs. It can also be used directly with a custom dialog structure built with the **StdDialogItem** nodes.

## Fields

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Field
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Default
      </th>

      <th style={{ textAlign: "left" }}>
        Access Permission
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        width
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0f
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Sets the width of the dialog:

        * If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD).
        * If set to greater than 0, the specified width is used as the overall width of the dialog.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        height
      </td>

      <td style={{ textAlign: "left" }}>
        float
      </td>

      <td style={{ textAlign: "left" }}>
        0.0f
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Sets the height of the dialog.<br /><br />If this field is set to greater than 0, and the layout of the dialog for the specified width results in a dialog with a height less than the value of this field, the dialog layout is increased so that the dialog height matches the value of this field. In this case, the button area is moved to the bottom of the dialog and a blank region exists between the content area and the button area.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        buttonSelected
      </td>

      <td style={{ textAlign: "left" }}>
        int
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates the index of the selected button when the user selects one of the buttons in the button area.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        buttonFocused
      </td>

      <td style={{ textAlign: "left" }}>
        int
      </td>

      <td style={{ textAlign: "left" }}>
        0
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates the index of the button that gained focus when the user moved the focus onto one of the buttons in the button area.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        palette
      </td>

      <td style={{ textAlign: "left" }}>
        RSGPalette node
      </td>

      <td style={{ textAlign: "left" }}>
        not set
      </td>

      <td style={{ textAlign: "left" }}>
        READ_WRITE
      </td>

      <td style={{ textAlign: "left" }}>
        Sets the color palette for the dialog's background, text, buttons, and other elements. <br /><br />By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's [Scene](doc:scene) node, which has a **palette** field that can be used to consistently color the standard dialogs and keyboards in the app). <br /><br />The RSGPalette color values used by the StandardDialog node are listed in the RSGPalette color node fields section.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        close
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        false
      </td>

      <td style={{ textAlign: "left" }}>
        WRITE_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        Dismisses the dialog. The dialog is dismissed whenever the close field is set, regardless of whether the field is set to true or false.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        wasClosed
      </td>

      <td style={{ textAlign: "left" }}>
        event
      </td>

      <td style={{ textAlign: "left" }}>
        N/A
      </td>

      <td style={{ textAlign: "left" }}>
        READ_ONLY
      </td>

      <td style={{ textAlign: "left" }}>
        An event that indicates the dialog was dismissed. This event is triggered when one of the following occurs:

        * The **close** field is set.
        * The Back, Home, or Options key is pressed.
        * Another dialog is displayed.
      </td>
    </tr>
  </tbody>
</Table>

## RSG Palette Color Node fields

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Palette Color Name
      </th>

      <th>
        Usages
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        DialogBackgroundColor
      </td>

      <td>
        Blend color for dialog's background bitmap.
      </td>
    </tr>

    <tr>
      <td>
        DialogItemColor
      </td>

      <td>
        Blend color for the following items:

        * [StdDlgProgressItem's](doc:std-dlg-progress-item)
          spinner bitmap
        * [StdDlgDeterminateProgressItem's](doc:std-dlg-determinate-progress-item)
          graphic
      </td>
    </tr>

    <tr>
      <td>
        DialogTextColor
      </td>

      <td>
        Color for the text in the following items:

        * [StdDlgTextItem](doc:std-dlg-text-item)
          and
          [StdDlgGraphicItem](doc:std-dlg-graphic-item)
          if the **namedTextStyle** field is set to "normal" or "bold".
        * All
          [content area items](doc:std-dlg-item-base)
          , except for
          [StdDlgTextItem](doc:std-dlg-text-item)
          and
          [StdDlgGraphicItem](doc:std-dlg-graphic-item)
          .
        * [Title area](doc:std-dlg-title-area)
          . Unfocused button.
      </td>
    </tr>

    <tr>
      <td>
        DialogFocusColor
      </td>

      <td>
        Blend color for the following:

        * The
          [button area](doc:std-dlg-button-area)
          focus bitmap.
        * The focused scrollbar thumb.
      </td>
    </tr>

    <tr>
      <td>
        DialogFocusItemColor
      </td>

      <td>
        Color for the text of the focused button.
      </td>
    </tr>

    <tr>
      <td>
        DialogSecondaryTextColor
      </td>

      <td>
        Color for the text of in the following items:

        * [StdDlgTextItem](doc:std-dlg-text-item)
          and
          [StdDlgGraphicItem](doc:std-dlg-graphic-item)
          if the **namedTextStyle** field is set to "secondary".
        * Disabled button.
      </td>
    </tr>

    <tr>
      <td>
        DialogSecondaryItemColor
      </td>

      <td>
        Color for the following items:

        * The divider displayed below the title area.
        * The unfilled portion of the
          [StdDlgDeterminateProgressItem's](doc:std-dlg-determinate-progress-item)
          graphic.
      </td>
    </tr>

    <tr>
      <td>
        DialogInputFieldColor
      </td>

      <td>
        The blend color for the text edit box background bitmap for keyboards used inside dialogs.
      </td>
    </tr>

    <tr>
      <td>
        DialogKeyboardColor
      </td>

      <td>
        The blend color for the keyboard background bitmap for keyboards used inside dialogs
      </td>
    </tr>

    <tr>
      <td>
        DialogFootprintColor
      </td>

      <td>
        The blend color for the following items:

        * The button focus footprint bitmap that is displayed when the
          [button area](doc:std-dlg-button-area)
          does not have focus.
        * Unfocused scrollbar thumb and scrollbar track.
      </td>
    </tr>
  </tbody>
</Table>