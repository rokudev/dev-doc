---
title: "ifRSA"
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

# ifRSA

## Implemented by

| Name  | Description                                                                              |
| ----- | ---------------------------------------------------------------------------------------- |
| [roRSA](/docs/references/brightscript/components/rorsa.md "roRSA") | The RSA component provides an interface to the OpenSSL RSA library of signing algorithms |


## Supported methods

### SetPrivateKey(keyFileName as String) as Integer

#### Description

Specifies the private key to use for signing. 

#### Parameters

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| keyFileName | String | Specifies the private key to be used for signing. The file name should specify a path, either in the package or a temp path. |

#### Return Value

- 1 = The key is valid.
- 0 = The file does not contain a valid key.
- -1 = The file was not found.

### SetPublicKey(keyFileName as String) as Integer

Specifies the public key to be used for verification. 

#### Parameters

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| keyFileName | String | Specifies the public key to be used for signing. The file name should specify a path, either in the package or a temp path. |

#### Return Value

- 1 = The key is valid.
- 0 = The file does not contain a valid key.
- -1 = The file was not found.

### SetDigestAlgorithm(digestAlgorithm as String) as Boolean

Specifies the digest algorithm to use for signing and verification. 

| Name            | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| digestAlgorithm | String | An openssl string with the digest to be used. Common digest algorithms are "sha1", "ripemd160", and "md5". |

#### Return Value

A flag indicating whether the algorithm was successfully set (true) or the string was not recognized (false).

### Sign(digest as Object) as Object

#### Description

Generates a signature based on the specified digest.

#### Parameters

| Name   | Type               | Description                                                  |
| ------ | ------------------ | ------------------------------------------------------------ |
| digest | roByteArray Object | The roByteArray to be signed. Errors will be printed in the BrightScript console. If the digest algorithm is not set (using SetDigestAlgorithm) before calling Sign(), the digest is not encapsulated. This would be equivalent to simply calling the openssl function RSA_private_encrypt() |

#### Return Value

An roByteArray containing the signature, or invalid if an error occurred. Typical values include the following: 

- digest is empty
- SetPrivateKey() was not yet called
- out of memory
- the digest could not be signed

### Verify(digest as Object, signature as Object) as Integer

#### Description

Verifies the given digest and signature. Both digest and signature should be roByteArrays. If the digest algorithm is not set (using the [SetDigestAlgorithm](#setdigestalgorithmdigestalgorithm-as-string-as-boolean) method) before calling Verify(), the digest associated with the signature is not expected to be encapsulated. This would be equivalent to simply calling the openssl function RSA_public_decrypt(signature) and then comparing the result with the digest

#### Parameters

| Name      | Type   | Description |
| --------- | ------ | ------ |
| digest    | roByteArray Object | The digest to be verified. |
| signature | roByteArray Object | The signature to be verified. |

#### Return Value

Indicates the result of the validation. This may be one of the following values:

- 1 = The signature matches.
- -1 = The SetPublicKey() method was not yet called.
- -2 = The digest is empty.
- -3 = There is not enough memory.
- 0 = The signature does not match.