---
title: Ifimagemetadata
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

# ifImageMetadata

## Implemented by

| Name            | Description                               |
| --------------- | ----------------------------------------- |
| [roImageMetadata](/docs/references/brightscript/components/roimagemetadata.md "roImageMetadata") | The roImageMetadata component provides developers access to image file metadata included in many .jpg EXIF headers |


## Supported methods

### SetUrl(url as String) as Void

#### Description

Sets the URL to the image. Only file URLs are supported

#### Parameters

| Name | Type   | Description           |
| ---- | ------ | --------------------- |
| url  | String | The URL of the image. |

### GetMetadata() as Object

#### Description

Returns a set of simple and common image metadata

#### Return Value

An associative array containing the following key-value pairs with image metadata:

| Name        | Type       | Description                                                  |
| ----------- | ---------- | ------------------------------------------------------------ |
| width       | Integer    | Width of the image in pixels                                 |
| height      | Integer    | Height of the image in pixels                                |
| orientation | String     | ${orientation-list}                                          |
| datetime    | roDateTime | The creation time of the image such as the time a photo was taken |
| comment     | String     | User specified comment string. This is often referred to as a caption |

{#orientation-list}

- "Top-left"
- "Top-right"
- "Bottom-right"
- "Bottom-left"
- "Left-top"
- "Right-top"
- "Right-bottom"
- "Left-bottom"

### GetThumbnail() as Object

#### Description

Returns a thumbnail image if one is embedded in the image metadata and the corresponding associative array with image data.  This only generates a thumbnail if one exists. 

#### Return Value

An associative array that with **bytes** and **type** keys with the image data: 

| Name  | Type        | Description                                                  |
| ----- | ----------- | ------------------------------------------------------------ |
| bytes | roByteArray | The image data                                               |
| Type  | Integer     | The type of image, which is most likely "image/jpeg", but could also be  "image/png". |

### GetRawExif() as Object

#### Description

Returns all of the raw EXIF metadata.

#### Return Value

An associative array with all of the raw EXIF metadata. See the [EXIF section](/docs/references/brightscript/components/roimagemetadata.md#exif-background) for details about EXIF metadata.

### GetRawExifTag(ifd as Integer, tagnum as Integer) as Dynamic

#### Description

Returns the raw data for an Exif tag. The method provides direct access to a specific raw EXIF tag

#### Parameters

| Name   | Type    | Description                     |
| ------ | ------- | ------------------------------- |
| ifd    | Integer | The ifd of the Exif tag.        |
| tagnum | Integer | The tag number of the Exif tag. |

#### Return Value

The raw data of an Exif tag. It the Exif tag doesn't exist it returns invalid.

