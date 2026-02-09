---
title: "ifTextureRequest"
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
