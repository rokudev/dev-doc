---
title: Ifappinfo
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

# ifAppInfo


## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
| [roAppInfo](/docs/references/brightscript/components/roappinfo.md) | Returns information about the application |


## Supported methods

### GetID() As String

#### Description

Returns the app's channel ID.

#### Return Value

Channel ID; e.g., "12345" or "dev"

### IsDev() As Boolean

#### Description

Returns true if the application is sideloaded, i.e. the app ID is "dev".

#### Return Value

True/ False

### GetVersion() As String

#### Description

Returns the conglomerate version number from the manifest, as formatted major_version + minor_version + build_version.

#### Return Value

App version number. e.g. "1.2.3"

### GetTitle() As String

#### Description

Returns the title value from the manifest.

#### Return Value

Title of the app

### GetDevID() As String

#### Description

Returns the app's developer ID, or the keyed developer ID, if the application is sideloaded.

> If the device has not been keyed, this method returns "34c6fceca75e456f25e7e99531e2425c6c1de443" for sideloaded channels.

#### Return Value

App's Developer ID

### GetValue(key As String) As String

#### Description

Returns the named manifest value, or an empty string if the entry is does not exist.

#### Parameters

| Name | Type   | Description                        |
| ---- | ------ | ---------------------------------- |
| Key  | String | The manifest value to be returned. |

#### Return Value

Manifest value; empty string
