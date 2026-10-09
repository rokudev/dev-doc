---
title: 'StandardDialog '
excerpt: 'Base node for standard and custom Roku dialog layouts'
hidden: false
metadata:
  title: 'StandardDialog'
  description: 'The StandardDialog node is the base for Roku''s pre-built message, keyboard, pinpad, and progress dialogs, or custom dialogs via StdDialogItem nodes.'
  robots: index
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
        <br /><br />
        <ul>
          <li>If set to 0, the standard system dialog width is used (1038 for FHD, 692 for HD). If the title or any button text is too wide to fit within the standard width, the dialog width will be automatically increased to show the full title or button text up to a preset maximum (1380 for FHD and 920 for HD).</li>
          <li>If set to greater than 0, the specified width is used as the overall width of the dialog.</li>
        </ul>
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
        Sets the color palette for the dialog's background, text, buttons, and other elements. <br /><br />By default, no palette is specified; therefore, the dialog inherits the color palette from the nodes higher in the scene graph (typically, from the dialog's <a href="https://developer.roku.com/dev/docs/scene">Scene</a> node, which has a **palette** field that can be used to consistently color the standard dialogs and keyboards in the app). <br /><br />The RSGPalette color values used by the StandardDialog node are listed in the RSGPalette color node fields section.
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
        <br /><br />
        <ul>
          <li>The <strong>close</strong> field is set.</li>
          <li>The Back, Home, or Options key is pressed.</li>
          <li>Another dialog is displayed.</li>
        </ul>
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
        <br /><br />
        <ul>
          <li><a href="https://developer.roku.com/dev/docs/std-dlg-progress-item">StdDlgProgressItem's</a> spinner bitmap</li>
          <li><a href="https://developer.roku.com/dev/docs/std-dlg-determinate-progress-item">StdDlgDeterminateProgressItem's</a> graphic</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        DialogTextColor
      </td>
      <td>
        Color for the text in the following items:
        <br /><br />
        <ul>
          <li><a href="https://developer.roku.com/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://developer.roku.com/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "normal" or "bold".</li>
          <li>All <a href="https://developer.roku.com/dev/docs/std-dlg-item-base">content area items</a>, except for <a href="https://developer.roku.com/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://developer.roku.com/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a>.</li>
          <li><a href="https://developer.roku.com/dev/docs/std-dlg-title-area">Title area</a>. Unfocused button.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        DialogFocusColor
      </td>
      <td>
        Blend color for the following:
        <br /><br />
        <ul>
          <li>The <a href="https://developer.roku.com/dev/docs/std-dlg-button-area">button area</a> focus bitmap.</li>
          <li>The focused scrollbar thumb.</li>
        </ul>
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
        Color for the text in the following items:
        <br /><br />
        <ul>
          <li><a href="https://developer.roku.com/dev/docs/std-dlg-text-item">StdDlgTextItem</a> and <a href="https://developer.roku.com/dev/docs/std-dlg-graphic-item">StdDlgGraphicItem</a> if the <strong>namedTextStyle</strong> field is set to "secondary".</li>
          <li>Disabled button.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        DialogSecondaryItemColor
      </td>
      <td>
        Color for the following items:
        <br /><br />
        <ul>
          <li>The divider displayed below the title area.</li>
          <li>The unfilled portion of the <a href="https://developer.roku.com/dev/docs/std-dlg-determinate-progress-item">StdDlgDeterminateProgressItem's</a> graphic.</li>
        </ul>
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
        <br /><br />
        <ul>
          <li>The button focus footprint bitmap that is displayed when the <a href="https://developer.roku.com/dev/docs/std-dlg-button-area">button area</a> does not have focus.</li>
          <li>Unfocused scrollbar thumb and scrollbar track.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</Table>