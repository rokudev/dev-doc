---
title: "roRSA"
excerpt: 'RSA signing and verification component using the OpenSSL RSA library'
deprecated: false
hidden: false
metadata:
  title: 'roRSA'
  description: 'Reference page for roRSA. roRSA provides an interface to the OpenSSL RSA library for signing and verification.'
  robots: index
next:
  description: ''
---


The RSA component provides an interface to the OpenSSL RSA library of signing algorithms.

This component can be used to sign/verify using RSA.

Typically, you would use the roEVPDigest component to create a message digest, then use roRSA to sign it.


**Example: RSA signing using SHA1**

```brightscript
ba = CreateObject("roByteArray")
' ...populate bytearray...

digest = CreateObject("roEVPDigest")
digest.Setup("sha1")
hashString = digest.Process(ba)
hashBA = CreateObject("roByteArray")
hashBA.FromHexString(hashString)

rsa = CreateObject("roRSA")
' ... save private key to tmp:/privateKey.txt

rsa.SetPrivateKey("tmp:/privateKey.txt")
rsa.SetDigestAlgorithm("sha1")
signature = rsa.Sign(hashBA)
```

**Example: RSA verification using SHA1**

```brightscript
rsa = CreateObject("roRSA")
rsa.SetPublicKey("tmp:/publicKey.txt")
rsa.SetDigestAlgorithm("sha1")

' see hashBA and signature from above example

result = rsa.Verify(hashBA, signature)
if (result = 1)
    print "Verified"
else
    print "Not verified, result = " ; result
end if
```


## Supported interfaces

- [ifRSA](doc:ifrsa)
