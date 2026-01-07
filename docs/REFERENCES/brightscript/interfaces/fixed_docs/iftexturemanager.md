---
title: "ifTextureManager"
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

# ifTextureManager


## Implemented by

| Name            | Description                                                           |
|-----------------|-----------------------------------------------------------------------|
|[roTextureManager](/docs/references/brightscript/components/rotexturemanager.md "roTextureManager") | The Texture Manager provides a set of API's for managing an roBitmap cache   |

## Supported methods

### RequestTexture(req as Object) as Void

#### Description

Makes a request for an roBitmap with the attributes specified by the roTextureRequest. The roTextureManager will pass an roTextureRequestEvent to the message port when completed.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| req | Object  | The roTextureRequest |

### CancelRequest(req as Object) as Void

#### Description

Cancels the request specified by req, which should be an roTextureRequest previously passed to the [RequestTexture()](#requesttexturereq-as-object-as-void) method.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| req | Object  | The previoulsy passed roTextureRequest to be cancelled. |

### UnloadBitmap(url as String) as Void

#### Description

Removes a bitmap from the roTextureManager with the specified URL.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| url | String  | The URL of the bitmap to be removed from the roTextureManager |

### Cleanup() as Void

#### Description

Removes all bitmaps from the roTextureManager.