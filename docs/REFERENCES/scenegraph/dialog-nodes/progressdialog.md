---
title: ProgressDialog
excerpt: 'A Dialog node that displays a spinning icon as its body content'
deprecated: false
hidden: false
metadata:
  title: 'ProgressDialog'
  description: 'The ProgressDialog node class is a Dialog node that displays a title region and a spinning icon via a BusySpinner node as the dialog body.'
  robots: index
next:
  description: ''
---
> The [StandardProgressDialog node](doc:standard-progress-dialog) features enhanced graphics and color palette support. This enables developers to provide a consistent user experience across the progress dialogs in their app. Developers should replace the legacy ProgressDialog nodes in their app with the new [StandardProgressDialog nodes](doc:standard-progress-dialog).
>
> To upgrade a legacy progress dialog to the standard version, prepend "Standard" to the node type. For example, change:
>
> `progressdialog = createObject("roSGNode", "ProgressDialog")` 
>
> to
>
> `progressdialog = createObject("roSGNode", "StandardProgressDialog")`.

Extends [**Dialog**](doc:dialog)

The ProgressDialog node class is a special type of Dialog node that includes the dialog title region and a spinning icon as the body of the dialog. The ProgressDialog node class uses a BusySpinner node to display the spinning icon.

The message, bulleted text, graphic, and button regions of the dialog should all be empty. If those dialog regions are not empty, the layout of the dialog will likely not look correct.

> Not all Roku Player hardware supports arbitrary rotations. In particular, some hardware only supports 90 degree rotation increments. In those cases, the icon will step through 90 degree, 180 degree, 270 degree and back to 0 degree rotations, rather than spin smoothly.

## Fields

| Field       | Type        | Default        | Access Permission | Description                                                                                                                               |
| ----------- | ----------- | -------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| busySpinner | BusySpinner | system default | READ_WRITE        | Provides access to the BusySpinner node used by the ProgressDialog node so that the spinner icon and rotation direction can be customized |

## Sample app

[ProgressDialogExample](https://github.com/rokudev/samples/tree/master/ux%20components/dialogs/ProgressDialogExample) is a sample app demonstrating ProgressDialog in action.
