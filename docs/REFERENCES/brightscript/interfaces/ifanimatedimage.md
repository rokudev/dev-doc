---
title: "ifAnimatedImage"
excerpt: 'Render animated GIFs, stickers, and small videos'
deprecated: false
hidden: false
metadata:
  title: 'ifAnimatedImage'
  description: 'The roAnimatedImage component enables developers to render animated GIFs, “stickers”, and small videos'
  robots: index
next:
  description: ''
---



## Implemented by

| Name                                   | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [roAnimatedImage](doc:roanimatedimage) | Provides software-decoded playback of an animated image, such as an animated WebP, a Lottie animation, or a small VP9-encoded MP4 via the [ifDraw2D](doc:ifdraw2d) drawing model. |

**roAnimatedImage** enables you to render animated GIFs, stickers, and small videos. It is designed for low-frame-rate, simple animations that reside in a small area.

Only use a single, small animated image at a time to minimize CPU load and memory usage (large animations may consume CPU and memory resources; using too many animated images may cause choppy animations).

The roAnimatedImage component downloads the entire resource asynchronously before decoding. Playback begins only after the download has been completed.

> The roAnimatedImage component is not supported on older Roku device models (Liberty, Littlefield, Austin, Briscoe, Ft. Worth, Gilbert, Amarillo).

## Supported methods

### SetContent(aa as Object) as Void

#### Description

Initializes the animated image from an associative array of properties. Loading occurs asynchronously; therefore, use **roAnimatedImageEvent** to determine when loading is complete. Calling **SetContent()** again re-initializes the animated image with the new properties. If an asynchronous **SetContent()** call is still in progress, the new call fails.

After you call **SetContent()**, the component posts an [**roAnimatedImageEvent**](doc: roanimatedimageevent) to the message port when loading finishes. Call [**GetMessage()**]( doc:roanimatedimageevent#getmessage)) on the event to check the result, which may be "ready" on success or "failed". Call [**GetInfo()**](doc:roanimatedimageevent##getinfo-as-object) on the event to get an associative array whose **id** field matches [**GetID()**](doc:#getid-as-string); on failure, its **error** field may contain additional detail. Set the message port with [**SetMessagePort()**](doc:#setmessageportport-as-object--as-void) before calling **SetContent()**.

#### Parameter

| Name | Type   | Description                                                  |
| :--- | :----- | :----------------------------------------------------------- |
| aa   | Object | An associative array ([**roAssociativeArray**](doc:roassociativearray)) containing the properties below. |

| Property          | Type   | Default         | Description                                                  |
| :---------------- | :----- | :-------------- | :----------------------------------------------------------- |
| uri               | String | (required)      | File path or URL to the animated image.                      |
| mimeType          | String | (Auto-detected) | Optionally, specify one of the following file type hints:<br /><br />- **video/mp4** (VP9 in an MP4 container)<br />- **video/webp** (animated WebP)<br />- **video/lottie+json** (Lottie or compressed dotLottie). <br /><br />If omitted, the file type is auto-detected. |
| loadWidth         | Int    | 0               | Decode width in pixels (0 = original). Scales to fit, preserving aspect ratio. |
| loadHeight        | Int    | 0               | Decode height in pixels (0 = original).                      |
| animationStrategy | String | automatic       | Set to **automatic** or **manual**. In manual mode, drive playback by calling **Update()**. |

### GetID() as String

#### Description

Returns the unique ID of the animated image. This is the same ID returned in the **id** field of the associative array from **roAnimatedImageEvent.GetInfo()**.

#### Return Value

The unique ID of the animated image.

### IsValid() as Boolean

#### Description

Indicates whether the animated image loaded successfully.

#### Return Value

A flag that indicates whether the animation file loaded successfully.  This is set to **true** only after an **roAnimatedImageEvent** with the message **ready** is received, which indicates that the file loaded successfully; otherwise this is **false**.

### GetWidth() as Int

#### Description

Returns the width of the animated image, in pixels.

#### Return Value

The width of the animated image, in pixels.

### GetHeight() as Int

#### Description

Returns the height of the animated image, in pixels.

#### Return Value

The height of the animated image, in pixels.

### GetState() as String

#### Description

Returns the current playback state ("init", "first", "decode", "stop", or "error").

#### Return Value

The current playback state, which may be one of the following values:

- **init**: Initializing. Nothing is drawn.
- **first**: The first frame is ready and displayed.
- **decode**: Actively rendering the animation.
- **stop**: Playback is halted. The last frame remains displayed.
- **error**: An error occurred. Nothing is drawn.

### SetTargetState(state as String) as Boolean

#### Description

Sets the desired playback state: "play" (start or resume), "pause", "loop" (play continuously), or "rewind".

#### Parameter

| Name  | Type   | Description                                                  |
| :---- | :----- | :----------------------------------------------------------- |
| state | String | The desired playback state: <br /><br />- "play" (start or resume)<br />- "pause"<br />- "loop" (play continuously)<br />- "rewind" |

#### Return Value

A flag inidcated whether the requested state was accepted.

### SetMessagePort(port as Object) as Void

#### Description

Sets the message port that receives asynchronous **roAnimatedImageEvent** events.

#### Parameter

| Name | Type   | Description                                                  |
| :--- | :----- | :----------------------------------------------------------- |
| port | Object | The message port ([roMessagePort](doc: romessageport)) for asynchronous events. |

### GetMessagePort() as Object

#### Description

Returns the message port currently set on the animated image.

#### Return Value

The current message port ([roMessagePort](doc: romessageport)) ).

### Update(elapsedMicroseconds as Int) as Void

#### Description

Advances the animation by the elapsed time. This method applies to manual mode only (when the **animationStrategy** property is set to "manual"). You can obtain the elapsed time from the [**roTimeSpan** component](doc:rotimespan), for example `time.TotalMicroseconds()`.

#### Parameter

| Name                | Type | Description                                                  |
| :------------------ | :--- | :----------------------------------------------------------- |
| elapsedMicroseconds | Int  | The elapsed time since the previous update, in microseconds. |

### SetPretranslation(x as Int, y as Int) as Void

*Available since Roku OS 15.3*

#### Description

Sets the pretranslation for draw, rotate, and scale operations. The pretranslation is applied before rotation and scaling, effectively specifying an offset from the origin of the image that becomes the center of rotation and scaling.

This function is normally used to specify the center of the image so that rotation and scaling occur around the image center instead of the top-left corner. For example, to rotate around the center of a 200x100 image, call SetPretranslation(-100, -50).

The default pretranslation is (0, 0), which preserves the existing behavior of rotating about the top-left corner.

#### Parameter

| Name | Type | Description                                                  |
| :--- | :--- | :----------------------------------------------------------- |
| x    | Int  | The horizontal offset from the image origin, in pixels, that becomes the center of rotation and scaling. |
| y    | Int  | The vertical offset from the image origin, in pixels, that becomes the center of rotation and scaling. |

### GetPretranslationX() as Int

*Available since Roku OS 15.3*

#### Description

Returns the x component of the pretranslation value.

#### Return Value

The x component of the pretranslation value.

### GetPretranslationY() as Int

*Available since Roku OS 15.3*

#### Description

Returns the y component of the pretranslation value.

#### Return Value

The y component of the pretranslation value.

## Example

The following example loads an animated image in manual mode, waits for it to become ready, then drives playback frame by frame using an **roTimeSpan** component.

```
animg = CreateObject("roAnimatedImage")
animg.SetMessagePort(port)
animg.SetContent({ uri: uri, mimeType: "video/webp", loadWidth: 480, loadHeight: 480, animationStrategy: "manual" })

time = CreateObject("roTimeSpan")
time.Mark()
scale = 1
while true
    msg = port.GetMessage()
    if type(msg) = "roAnimatedImageEvent" and msg.GetInfo()["id"] = animg.GetID() then
        animg.SetTargetState("loop")
    end if
    elapsed = time.TotalMicroseconds()
    animg.Update(elapsed)   ' in microseconds
    time.Mark()
    screen.Clear(&hFFFFFFFF)
    screen.DrawScaledObject((screen.GetWidth() - animg.GetWidth() * scale) / 2, (screen.GetHeight() - animg.GetHeight() * scale) / 2, scale, scale, animg)
    screen.SwapBuffers()
end while
```

To rotate or scale about the center of the image rather than its top-left corner, set the pretranslation to half the image size before drawing:

```
animg = CreateObject("roAnimatedImage")
animg.SetContent({ uri: "pkg:/images/spinner.json", mimeType: "video/lottie+json" })
' ... wait for the ready event, then start playback ...
animg.SetTargetState("loop")

' Pivot rotation and scaling about the image center
animg.SetPretranslation(-animg.GetWidth() / 2, -animg.GetHeight() / 2)

' Draw rotated about screen position (cx, cy)
screen.DrawRotatedObject(cx, cy, angle, animg)

' Scaling pivots about the same point
screen.DrawScaledObject(cx, cy, 1.5, 1.5, animg)
```