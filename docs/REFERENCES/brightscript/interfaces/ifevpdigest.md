---
title: Ifevpdigest
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

# ifEVPDigest

## Implemented by

| Name        | Description                               |
| ----------- | ----------------------------------------- |
| [roEVPDigest](/docs/references/brightscript/components/roevpdigest.md "roEVPDigest") | The EVP Digest component provides an interface to the OpenSSL EVP library of message digest algorithms |


## Supported methods

### Setup(digestType as String) as Integer

#### Descriptions

Initializes a new message digest context. 

#### Parameters

| Name       | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| digestType | String | The supported digest algorithm from openssl, listed at roEVPDigest. |

#### Return Value

Returns 0 on success or non-zero on failure.

### Reinit() as Integer

#### Description

Re-initializes an existing message digest context. This can be called to reuse an existing [roEVPDigest](/docs/references/brightscript/components/roevpdigest.md "roEVPDigest") object to digest new data.

#### Return Value

Returns 0 on success or non-zero on failure.

### Process(bytes as Object) as String

#### Description

Digests the provided data. 

#### Parameters

| Name  | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| bytes | Object | An [roByteArray](/docs/references/brightscript/components/robytearray.md) containing digested data |

#### Return Value

A Hex string (Digested array data).

#### Example

~~~
  x = evp.Process(bytes)
~~~

is equivalent to

~~~
  evp.Reinit()
  evp.Update(bytes)
  x = evp.Final()
~~~

### Update(bytes as Object) as Void

#### Description

Adds more data to be digested.

#### Parameters

| Name  | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| bytes | Object | An [roByteArray](/docs/references/brightscript/components/robytearray.md) containing data to be added to the current digest |

### Final() as String

#### Description

Returns the digest of data passed in by previous calls to [Update()](#updatebytes-as-object-as-void) as a hex string.

#### Return Value

Hex string (digest of data)