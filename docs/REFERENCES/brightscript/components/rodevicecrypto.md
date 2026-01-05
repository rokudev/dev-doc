---
title: "roDeviceCrypto"
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

# roDeviceCrypto

The roDeviceCrypto component enables you to encrypt and decrypt data on a device using a key that is unique per app, device, or model. Using an app key for example, you can encrypt data for an app so that it may only be decrypted by that same app. In this case, you could provision credentials or an API key from the cloud to devices securely. With a device key for example, you could implement a secure-storage like algorithm.

## Supported interfaces

- [ifDeviceCrypto](/docs/references/brightscript/interfaces/ifdevicecrypto.md)

## Description

roDeviceCrypto has two methods: `Encrypt()` and `Decrypt()`. Both methods take a `roByteArray` and the encryption key type (`encType`), which is a string that may be set to "channel", "device", or "model".  

Both methods return a `roByteArray` so that you can encrypt plaintext on a Roku device
and then decode it, as demonstrated in the following example:  

```
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
  	decrypted = dc.Decrypt(encrypted,encType)
  end if
```
