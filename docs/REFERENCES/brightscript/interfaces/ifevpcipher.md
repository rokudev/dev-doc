---
title: "ifEVPCipher"
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

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roEVPCipher](doc:roevpcipher) | The EVP Cipher component provides an interface to the OpenSSL EVP library of symmetric cipher commands |


## Supported methods

### Setup(encrypt as Boolean, format as String, key as String, iv as String, padding as Integer) as Integer

#### Description

Configures and initializes a new cipher context.

#### Parameters

| Name    | Type    | Description                                                  |
| ------- | ------- | ------------------------------------------------------------ |
| encrypt | Boolean | True for encryption; false for decryption                    |
| format  | String  | Cipher format string, from openssl, listed at roEVPCipher    |
| key     | String  | A hex-encoded key                                            |
| iv      | String  | A hex-encoded initialization vector, which can be an empty string |
| padding | Integer | 1 to use standard padding; 0 for no padding)                 |

#### Return Value

Returns 0 on success or non-zero on failure.

### Reinit() as Integer

#### Description

Reinitializes an existing cipher context. This can be called to reuse an existing [roEVPCipher](doc:roevpdigest) object to encrypt new data

#### Return Value

Returns 0 on success or non-zero on failure.


### Process(bytes as Object) as Object

#### Description

Processes the included [roByteArray](doc:robytearray) containing encrypted/decrypted data.

#### Parameters

| Name  | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| bytes | Object | An [roByteArray](doc:robytearray) containing data that is encrypted or decrypted. |

#### Return Value

An [roByteArray](doc:robytearray) containing the result.

#### Example

~~~
  x = evp.Process(bytes)
~~~

is equivalent to

~~~
  evp.Reinit()
  x = evp.Update(bytes)
  x = x + evp.Final()
~~~

### Update(bytes as Object) as Object

#### Description

Updates the included [roByteArray](doc:robytearray) containing encrypted/decrypted data.

#### Parameters

| Name  | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| bytes | Object | An [roByteArray](doc:robytearray) containing data that is encrypted or decrypted. |

#### Return Value

An [roByteArray](doc:robytearray) containing a subset of the result. Some or all of the result may not be returned until the next call to Update().

### Final() as Object

#### Description

Signals that all data has been submitted by previous calls to Update().

#### Return Value

The last remaining encrypted or decrypted bytes.