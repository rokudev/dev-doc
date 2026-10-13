---
title: "ifTextureManager"
excerpt: 'Interface for requesting and managing roBitmap textures via roTextureManager'
deprecated: false
hidden: false
metadata:
  title: 'ifTextureManager'
  description: 'Interface implemented by roTextureManager that exposes RequestTexture, CancelRequest, UnloadBitmap, and Cleanup methods for managing roBitmap requests.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name            | Description                                                           |
|:----------------|:----------------------------------------------------------------------|
|[roTextureManager](doc:rotexturemanager) | The Texture Manager provides a set of API's for managing an roBitmap cache   |

## Supported methods

### RequestTexture(req as Object) as Void

##### Description

Makes a request for an roBitmap with the attributes specified by the roTextureRequest. The roTextureManager will pass an roTextureRequestEvent to the message port when completed.

##### Parameters

| Name  | Type    | Description |
| :---  | :------ | :------------- |
| req | Object  | The roTextureRequest |

### CancelRequest(req as Object) as Void

##### Description

Cancels the request specified by req, which should be an roTextureRequest previously passed to the [RequestTexture()](#requesttexturereq-as-object-as-void) method.

##### Parameters

| Name  | Type    | Description |
| :---  | :------ | :------------- |
| req | Object  | The previously passed roTextureRequest to be cancelled. |

### UnloadBitmap(url as String) as Void

##### Description

Removes the bitmap with the specified URL from the roTextureManager cache.

The roTextureManager cache is shared across all instances of roTextureManager within the app. Calling UnloadBitmap() removes the cached entry for the given URL regardless of which instance originally requested it, and regardless of any request parameters (such as image size) that were used.


##### Parameters

| Name  | Type    | Description |
| :---  | :------ | :------------- |
| url | String  | The URL of the bitmap to be removed from the roTextureManager |

### Cleanup() as Void

##### Description

Removes all bitmaps from the roTextureManager cache.

The roTextureManager cache is shared across all instances of roTextureManager within the app. Calling Cleanup() removes all cached textures regardless of which instance originally requested them.
