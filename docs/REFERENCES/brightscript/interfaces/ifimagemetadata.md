---
title: "ifImageMetadata"
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


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>Integer</td>
<td>Width of the image in pixels</td>
</tr>
<tr>
<td>height</td>
<td>Integer</td>
<td>Height of the image in pixels</td>
</tr>
<tr>
<td>orientation</td>
<td>String</td>
<td><ul><li>"Top-left"</li><li>"Top-right"</li><li>"Bottom-right"</li><li>"Bottom-left"</li><li>"Left-top"</li><li>"Right-top"</li><li>"Right-bottom"</li><li>"Left-bottom"</li></ul></td>
</tr>
<tr>
<td>datetime</td>
<td>roDateTime</td>
<td>The creation time of the image such as the time a photo was taken</td>
</tr>
<tr>
<td>comment</td>
<td>String</td>
<td>User specified comment string. This is often referred to as a caption</td>
</tr>
</tbody>
</table>



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