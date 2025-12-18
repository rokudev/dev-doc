---
title: Standard Progress Dialog
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

# StandardProgressDialog



Extends [StandardDialog](/docs/references/scenegraph/standard-dialog-framework-nodes/standard-dialog.md "**Standard Dialog**")

The StandardProgressDialog node displays a spinning progress indicator that includes a short progress message to the user. It is similar to the legacy [ProgressDialog](/docs/references/scenegraph/dialog-nodes/progressdialog.md) node. 

![roku815px - progress-dialog-title](https://image.roku.com/ZHZscHItMTc2/progress-dialog-title-v2.jpg)

## Structure

The StandardProgressDialog is comprised of the following areas and building block nodes:

- Zero or one StdDlgTitleArea.
- StdDlgContentArea, which contains the following item:
  - One StdDlgProgressItem

## Fields

| Field   | Type   | Default | Access Permission | Description                                                  |
| :------ | :----- | :------ | :---------------- | :----------------------------------------------------------- |
| title   | string | ""      | READ_WRITE        | The title to be displayed at the top of the dialog.If no title is specified, the progress dialog will be displayed without a title area and will use the minimum width needed to show the spinning progress indicator and message |
| message | string | ""      | READ_WRITE        | A string to be displayed next to the spinning progress indicator. It typically tells the user why they are waiting.<br />${bq-message-note} |

{#bq-message-note}

> Minimize the message length.
