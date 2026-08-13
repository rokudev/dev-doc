---
title: AnimatedImage
excerpt: 'Render animated GIFs, “stickers”, and small videos'
deprecated: false
hidden: false
metadata:
  title: 'AnimatedImage'
  description: 'The AnimatedImage node enables developers to render animated GIFs, “stickers”, and small videos'
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The AnimatedImage node enables developers to render animated GIFs, stickers, and small videos. It is designed for low-frame-rate, simple animations that reside in a small area. 

Only use a single, small animated image at a time to minimize CPU load and memory usage (large animations may consume CPU and memory resources; using too many animated images may cause choppy animations). 

The AnimatedImage downloads the entire resource before decoding. Playback begins only after the download hasbeen completed. 

> This node is not supported on older Roku device models (Liberty, Littlefield, Austin, Briscoe, Ft. Worth, Gilbert, Amarillo). 

### Example

#### BrightScript

```brightscript
' main.brs
function init()
    m.top.setFocus(true)
    m.group = m.top.findNode("group")
    poster = CreateObject("roSGNode", "AnimatedImage")
    poster.uri = "pkg:/images/transform_demo.json"
    poster.mimeType = "video/lottie+json" ' optional hint
    poster.width = 200
    poster.height = 200
    poster.control = "loop"
    m.group.appendChild(poster)
end function
```

#### XML

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="HelloWorld" extends="Scene">
<children>
<group id="group" />
</children>
<!-- BrightScript Portion -->
<script type="text/brightscript" uri="main.brs">
</script>
<!-- End of BrightScript Portion -->
</component>
```

## Fields

| **Field**       | **Type** | **Default**    | Access Permission | **Description**                                              |
| :-------------- | :------- | :------------- | ----------------- | :----------------------------------------------------------- |
| width           | float    | 0.0f           | READ_WRITE        | Display width in pixels.                                     |
| height          | float    | 0.0f           | READ_WRITE        | Display height in pixels.                                    |
| loadWidth       | float    | 0.0f           | READ_WRITE        | Width for decoding animation (default is the original dimensions). |
| loadHeight      | float    | 0.0f           | READ_WRITE        | Height for decoding animation (default is original dimensions). |
| loadDisplayMode | string   | **scaleToFit** | READ_WRITE        | The scaling behavior to be used. Select one of the following:<br />- **scaleToFit**: Scale preserving aspect ratio. Fit within bounds. <br />- **scaleToZoom**: Scale preserving aspect ratio. Fill entire bounds (crop overflow). <br />- **scaleToFill:** Fill node. Does not preserve aspect ratio.<br />- **noScale**: Fill node. Does not preserve aspect ratio.<br />- **limitSize**: Only scale down, if needed. Does not scale up. |
| uri             | string   | -              | READ_WRITE        | Path/URL to animated image.                                  |
| mimeType        | string   | -              | READ_WRITE        | Optional MIME type hint, which may be one of the following values: <br /><br />- **video/mp4**: vp9 encoded video in mp4 video container<br />- **video/webp**: animated WebP<br />-**video/lottie+json**: json Lottie or compressed dotLottie |
| control         | string   | -              | READ_WRITE        | If not provided the system will attempt to automatically detect the file type. Playback control. `loop` `pause` `play` `rewind` |
| state           | string   | **stop**       | READ_WRITE        | Current playback state (read-only). This may be one of the following values:<br />- **downloading**<br />- **init**<br />- **first**<br />- **decode**<br />- **stop**<br />- **error** |
| error           | string   | -              | READ_ONLY         | Error message if failed.                                     |
| mediaWidth      | int      | 0              | READ_ONLY         | Decoded image width.                                         |
| mediaHeight     | int      | 0              | READ_ONLY         | Decoded image height.                                        |
