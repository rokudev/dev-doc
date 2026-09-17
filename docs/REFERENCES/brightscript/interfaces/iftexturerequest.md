---
title: "ifTextureRequest"
excerpt: 'Interface for managing texture requests with async, size, and scaling options'
deprecated: false
hidden: false
metadata:
  title: 'ifTextureRequest'
  description: 'Documents the ifTextureRequest interface, which provides methods to get the ID and state of a request, and to set async mode, size, and scaling mode.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name            | Description                                                           |
|---------------- |-----------------------------------------------------------------------|
|[roTextureRequest](doc:rotexturerequest) | An roTextureRequest is used to make requests to the roTextureManager                                                                       |

## Supported methods

### GetId() as Integer

#### Description

Returns a unique id for the request.

#### Parameters

The unique ID.

### GetState() as Integer

#### Description

Returns the state of the request.

#### Return Value

The state value, which may be one of the following:

| Value | State       |
| ----- | ----------- |
| 0     | Requested   |
| 1     | Downloading |
| 2     | Downloaded  |
| 3     | Ready       |
| 4     | Failed      |
| 5     | Cancelled   |

### SetAsync(async as Boolean) as Void

#### Description

Sets the request to be either asynchronous (true) or synchronous (false). The default is asynchronous

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| async | Boolean  | The method used to send the request: asynchronous (true) or synchronous (false). |

### SetSize(width as Integer, height as Integer) as Void

#### Description

Sets the desired size of the roBitmap. The default is to return a bitmap in its native size.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| width | Integer  | The width of the roBitmap. |
| height | Integer  | The height of the roBitmap. |

### SetScaleMode(mode as Integer) as Void

#### Description

Sets the scaling mode to be used. 

#### Parameters

### SetDrawable(drawable as Boolean) as Void

*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

#### Description

Specifies whether the [**ifDraw2D**](doc:ifdraw2d) functions may draw to and modify the [roBitmap](doc:robitmap) returned by the request.

Bitmaps are not drawable by default. The **Clear()** and **Draw()** functions on the returned roBitmap return false, indicating failure, unless **SetDrawable(true)** has been called on the texture request.

Non-drawable bitmaps can be reused from the texture cache and are loaded into texture memory only once, even when multiple requests are made for the same bitmap. Each drawable bitmap gets its own unique copy of the bitmap in texture memory.

> Bitmaps created with `CreateObject("roBitmap", ...)` are always drawable and are unaffected by this function.

#### Parameters

| Name     | Type    | Description |
| ----     | ------- | -------------- |
| drawable | Boolean | Whether the ifDraw2D functions may draw to and modify the returned roBitmap. |
