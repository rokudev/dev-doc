---
title: "ifHMAC"
excerpt: 'Interface exposing OpenSSL HMAC methods for generating message authentication codes'
deprecated: false
hidden: false
metadata:
  title: 'ifHMAC'
  description: 'Documents the ifHMAC interface, which provides Setup, Reinit, Process, Update, and Final methods for generating a MAC using OpenSSL HMAC functions.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name      | Description                               |
| --------- | ----------------------------------------- |
| [roHMAC](doc:rohmac)    | The HMAC component provides an interface to the OpenSSL HMAC functions |


## Supported methods

### Setup(digestType as String, key as Object) as Integer

#### Description

Initializes new HMAC context. 

#### Parameters

| Name       | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| digestType | String | Selects one of the supported digest algorithms, as documented in [roEVPDigest](doc:roevpdigest). |
| key        | Object | An roByteArray containing the key for the MAC.               |

#### Return Value

An integer indicating whether the function succeeded (0) or failed (1).

### Reinit() as Integer

#### Description

Re-initializes an existing HMAC context. This can be called to reuse an existing roHMAC object to authenticate new data. 

#### Return Value

An integer indicating whether the function succeeded (0) or failed (1).

### Process(message as Object) as Object

#### Description

Digests the data in an array generates a MAC. Calling this method is the same as making the following calls:

```
hmac.Reinit()
hmac.Update(message)
mac = hmac.Final()
```

#### Parameters

| Name    | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| message | Object | An [roByteArray](doc:robytearray) with the data to be digested. |

#### Return Value

An [roByteArray](doc:robytearray) containing the generated MAC.

### Update(partialMesssage as Object) as Void

#### Description

Adds more data to be digested. The data in the array is added to the current digest.

#### Parameters

| Name            | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| partialMesssage | Object | An [roByteArray](doc:robytearray) with the additional data to be digested. |

### Final() as Object

#### Description

Returns an [roByteArray](doc:robytearray) containing the final MAC.

#### Return Value

The final MAC.