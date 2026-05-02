---
title: ifScreen
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
| Name                     | Description                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| [roScreen](doc:roscreen) | The roScreen component provides a full screen drawing surface that can be stacked and that you can receive input events from |

## Supported methods

### SwapBuffers() as Void

#### Description

This function first operates the same as a call to [ifDraw2D](doc:ifdraw2d), completing all queued drawing operations on the back buffer (draw surface).

The new back buffer should be assumed to be in a garbage state after this call is complete, which means you will need to re-render the entire frame before a subsequent call to SwapBuffers. This call will not return until the back buffer is ready to be drawn on to. Depending on the implementation, it may take up to a single video frame period for the new front buffer to become visible.

This operation is extremely fast (that is, it never copies a bitmap from one location to another), and is guaranteed not to "tear" the visible image.

If the screen is single buffered, this method returns immediately after this operation. If the screen is double buffered, this method swaps the back buffer with the front buffer, so the back buffer is now visible.

<br />

### GetGraphicsFeatures() as Object

_Available since [Roku OS 14.0](doc:release-notes#roku-os-140)_

#### Description

Checks the graphics features supported by the device.

#### Return Values

An associative array containing the following key/value pairs:

<table>
  <thead>
    <tr>
      <th><strong>Key</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Value</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>full\_rotation</td>
      <td>boolean</td>
      <td><ul><li>true: The device supports an arbitrary rotation degree.</li><li>false: The device supports 90° rotations only (0, 90, 180, 270)</li></ul></td>
    </tr>

    <tr>
      <td>astc\_supported</td>
      <td>boolean</td>
      <td><ul><li>true: The device supports <a href="https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression">Adaptive Scalable Texture Compression(ASTC)</a> compressed textures and can load <a href="https://github.com/ARM-software/astc-encoder/blob/main/Docs/FileFormat.md">.astc</a> image files.</li><li>false: The device does not support ASTC.</li></ul></td>
    </tr>
  </tbody>
</table>
