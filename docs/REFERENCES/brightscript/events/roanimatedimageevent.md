---
title: "roAnimatedImageEvent"
excerpt: 'Event reporting when roAnimatedImage instance has finished loading'
deprecated: false
hidden: false
metadata:
  title: 'roAnimatedImageEvent'
  description: 'roAnimatedImageEvent is sent by roAnimatedImage and reports when an animated image has finished loading.'
  robots: index
next:
  description: ''
---

## Supported methods

### GetMessage() as String

Returns the string "ready" if the animation was loaded successfully; otherwise returns "failed".

### GetInfo() as Object

Returns an associative array with the following key/value pair:

| Name | Description                          |
| ---- | ------------------------------------ |
| Id   | The unique ID of the animated image. |
