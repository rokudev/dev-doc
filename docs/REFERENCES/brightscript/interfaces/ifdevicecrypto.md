---
title: ifDeviceCrypto
excerpt: 'Encrypt and decrypt data using device-, app-, or model-scoped keys'
deprecated: false
hidden: false
metadata:
  title: 'ifDeviceCrypto'
  description: 'ifDeviceCrypto provides Encrypt and Decrypt methods for securing data using a key scoped to a device, app, or model on a Roku device.'
  robots: index
next:
  description: ''
---
## Implemented By

| Name                                                                         | Description                                                                                  |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [roDeviceCrypto](/docs/references/brightscript/components/rodevicecrypto.md) | Encrypts and decrypts data on a device using a key that is unique per app, device, or model. |

## Supported Methods

### Encrypt (input as roByteArray, String as encType) as roByteArray

#### Description

Encrypts data on a device that is unique per device, app, or model.

#### Parameters

| Name    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input   | roByteArray | The data to be encrypted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| encType | String      | The encryption key type, which is a string that may be set to "channel", "device", or "model": <table><thead><tr><th>encType</th><th>Description</th></tr></thead><tbody><tr><td>device</td><td>Encrypt data with a device unique key. This can be used to implement a secure storage-like algorithm.</td></tr><tr><td>channel</td><td>Encrypt data with an app unique key This enables you to provision credentials, API tokens, or other data from the cloud to devices securely. Apps signed with same signing key will share the encryption key.</td></tr><tr><td>model</td><td>Encrypt app with a model unique key This is similar to the "channel" encryption type, but with the scope limited to a specific model.</td></tr></tbody></table> |

#### Return Value

An roByteArray containing the encrypted data.

### Decrypt (EncryptedData as roByteArray, String as encType) as roByteArray

#### Description

Decrypts data stored on a device that was previously encoded with the [**Encrypt()**](#encrypt-input-as-robytearray-string-as-enctype-as-robytearray) method.

#### Parameters

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
      <td>EncryptedData</td>
      <td>roByteArray</td>
      <td>The previously encoded data to be decrypted.</td>
    </tr>
    <tr>
      <td>encType</td>
      <td>String</td>
      <td>The encryption key type, which is a string that may be set to "channel", "device", or "model" (see table below for details).</td>
    </tr>
  </tbody>
</table>

#### Return Value

An roByteArray containing the decrypted data.

#### Example

You can use the `Encrypt()` and `Decrypt()` methods to encrypt plaintext on a Roku device
and then decode it, as demonstrated in the following example:

```brightscript
  ' store plaintext to be encrypted in an roByteArray
  ba = CreateObject("roByteArray")
  ba.FromAsciiString("plain text1")

  ' create roDeviceCrypto object and specify a device key
  dc = CreateObject("roDeviceCrypto")
  encType = "device"

  ' encrypt plaintext using the device key and store the encoded data in an roByteArray
  encrypted = dc.Encrypt(ba, encType)

  ' decode the encrypted data and store the decrypted data in an roByteArray
  if encrypted <> invalid then
      decrypted = dc.Decrypt(encrypted, encType)
  end if
```
