---
title: Ifscreen
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

# ifScreen


| Name     | Description                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [roScreen](/docs/references/brightscript/components/roscreen.md "roScreen") | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from |

## Supported methods

### SwapBuffers() as Void

#### Description

This function first operates the same as a call to [ifDraw2D](/docs/references/brightscript/interfaces/ifdraw2d.md "ifDraw2D"), completing all queued drawing operations on the back buffer (draw surface).

The new back buffer should be assumed to be in a garbage state after this call is complete, which means you will need to re-render the entire frame before a subsequent call to SwapBuffers. This call will not return until the back buffer is ready to be drawn on to. Depending on the implementation, it may take up to a single video frame period for the new front buffer to become visible.

This operation is extremely fast (that is, it never copies a bitmap from one location to another), and is guaranteed not to "tear" the visible image.

If the screen is single buffered, this method returns immediately after this operation. If the screen is double buffered, this method swaps the back buffer with the front buffer, so the back buffer is now visible.

 