---
title: "ifDsa"
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

| Name                                                       | Description                                                  |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| [roDsa](doc:rodsa) | The **roDSA** component provides support for the ECDSA and EdDSA (with Ed25519 form) digital signature algorithms. It is used to provide cryptographically signed evidence that an ad request originated from an actual Roku device. |

## Supported methods

### SetPrivateKey(keyFileName as String) as Integer

#### Description

Specifies the private key to be used for signing.

#### Parameters

| Name        | Type   | Description                                                  |
| :---------- | :----- | :----------------------------------------------------------- |
| keyFileName | String | Specifies the ECDSA or Ed25519 private key to be used for signing. Provide the key as a path, either in the package or a temporary path. |

#### Return Value

An integer indicating whether the operation was successful:

- 1 = The key is valid.
- 0 = The file does not contain a valid key.
- -1 = The file was not found.

### SetPrivateKeyFromByteArray(key as Object) as Integer

#### Description

Specifies the private key to be used for signing.

#### Parameters

| Name |        Type        |                         Description                          |
| :--: | :----------------: | :----------------------------------------------------------: |
| key  | roByteArray Object | Specifies the ECDSA or Ed25519 private key to be used for signing. |

#### Return Value

An integer indicating whether the operation was successful:

- 1 = The key is valid.
- 0 = The key is not valid.

### SetPublicKey(keyFileName as String) as Integer

#### Description

Specifies the public key to be used for verification.

#### Parameters

| Name        | Type   | Description                                                  |
| :---------- | :----- | :----------------------------------------------------------- |
| keyFileName | String | Specifies the ECDSA or Ed25519 public key to be used for signing. Provide the key as a path, either in the package or a temporary path. |

#### Return Value

An integer indicating whether the operation was successful:

- 1 = The key is valid.
- 0 = The file does not contain a valid key.
- -1 = The file was not found.

### SetDigestAlgorithm(algorithm as String) as Boolean

#### Description

Specifies the digest algorithm to be used for signing and verification. 

| Name       | Type   | Description                                                  |
| :--------- | :----- | :----------------------------------------------------------- |
| algorithm | String | An OpenSSL string with the algorithm to be used: "sha1""sha224""sha256" (default)"sha384""sha512". When using Ed25519 signing, the only supported digest algorithm is "sha512". |

#### Return Value

A flag indicating whether the operation was successful:

- true = algorithm was successfully set
- false = string was not recognized

### SetSignAlgorithm(algorithm as String) as Boolean

Specifies the signing algorithm to be used for signing and verification. 

#### Parameters

| Name      | Type   | Description                                                  |
| :-------- | :----- | :----------------------------------------------------------- |
| algorithm | String | An OpenSSL string with the algorithm to be used:"ECDSA" (default)."Ed25519". |

#### Return Value

A flag indicating whether the operation was successful:

- true = algorithm was successfully set.
- false = string was not recognized.

### Sign(message as Object) as Object

#### Description

Generates a signature based on the specified message.

#### Parameters

| Name    | Type               | Description                   |
| :------ | :----------------- | :---------------------------- |
| message | roByteArray Object | The roByteArray to be signed. |

#### Return Value

An roByteArray containing the signature. If an error occurs, "invalid" is returned.

Errors are printed to the BrightScript Debug Console. Common errors include:

- digest is empty
- SetPrivateKey() was not yet called
- out of memory
- the digest could not be signed

### Verify(message as Object, signature as Object) as Integer

#### Description

Verifies the given message and signature. The message and the signature should both be roByteArrays.

#### Parameters

| Name      | Type               | Description                   |
| :-------- | :----------------- | :---------------------------- |
| message   | roByteArray Object | The message to be verified.   |
| signature | roByteArray Object | The signature to be verified. |

#### Return Value

Indicates the result of the validation. This may be one of the following values:

- 1 = The signature matches.
- -1 = The SetPublicKey() method was not yet called.
- -2 = The digest is empty.
- -3 = Internal error.
- -4 = Incorrect digest/sign algorithms
- 0 = The signature does not match.

## Examples

### Using ECDSA signing with SHA256 digest

#### Signing

```
msg_ba = CreateObject("roByteArray")
' ...populate bytearray with the message...

dsa = CreateObject("roDSA")
' ... save private key to tmp:/privateKey.txt

dsa.SetDigestAlgorithm("sha256")
dsa.SetSignAlgorithm("ECDSA")
dsa.SetPrivateKey("tmp:/privateKey.txt")

signature = dsa.Sign(msg_ba)
```

#### Verification

```
msg_ba = CreateObject("roByteArray")
' ...populate bytearray with the message...

sig_ba = CreateObject("roByteArray")
' ...populate bytearray with the signature...

dsa = CreateObject("roDSA")
' ... save public key to tmp:/publicKey.txt

dsa.SetDigestAlgorithm("sha256")
dsa.SetSignAlgorithm("ECDSA")
dsa.SetPublicKey("tmp:/publicKey.txt")

result = dsa.Verify(msg_ba, sig_ba)

if (result = 1)
    print "Verified"
else
    print "Not verified, result = " result
end if
```

### Using Ed25519 signing with SHA512 digest

#### Signing

```
msg_ba = CreateObject("roByteArray")
' ...populate bytearray with the message...

dsa = CreateObject("roDSA")
' ... save private key to tmp:/privateKey.txt

dsa.SetDigestAlgorithm("sha512")
dsa.SetSignAlgorithm("Ed25519")
dsa.SetPrivateKey("tmp:/privateKey.txt")

signature = dsa.Sign(msg_ba)
```

#### Verification

```
msg_ba = CreateObject("roByteArray")
' ...populate bytearray with the message...

sig_ba = CreateObject("roByteArray")
' ...populate bytearray with the signature...

dsa = CreateObject("roDSA")
' ... save public key to tmp:/publicKey.txt

dsa.SetDigestAlgorithm("sha512")
dsa.SetSignAlgorithm("Ed25519")
dsa.SetPublicKey("tmp:/publicKey.txt")

result = dsa.Verify(msg_ba, sig_ba)

if (result = 1)
    print "Verified"
else
    print "Not verified, result = " result
end if
```