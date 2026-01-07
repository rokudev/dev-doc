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

# ParentalControlPinPad

ParentalControlPinPad is a variant of the [PinPad component](/docs/references/scenegraph/widget-nodes/pinpad.md "PinPad component"), although it does have a few key differences: The pin, pinLength, and secureMode fields are made private (i.e., not accessible to BrightScript, and secureMode set to true).

There are two use cases for the ParentalControlPinPad node:

- If the user enters the correct pin, a 2-hour override of content blocking starts, similar to the system behavior on RokuTV
- If the user enters an incorrect PIN, the text fields are cleared automatically

## Fields

ParentalControlPinPad includes a new field, pinSuccess for blocking content:
