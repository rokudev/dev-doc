---
title: "roEVPDigest"
excerpt: 'Interface to OpenSSL EVP message digest algorithms for cryptographic hashing'
deprecated: false
hidden: false
metadata:
  title: 'roEVPDigest'
  description: 'roEVPDigest provides an interface to the OpenSSL EVP library of message digest algorithms, processing arbitrary data to generate a cryptographic hash.'
  robots: index
next:
  description: ''
---


The EVP Digest component provides an interface to the OpenSSL EVP library of message digest algorithms. The EVP library provides a high-level interface to cryptographic hash functions.

roEVPDigest processes an arbitrary amount of data and generates a hash of the data, using a selected algorithm.

> For additional information on the OpenSSL library of message digest algorithms see: http://www.openssl.org/docs/apps/dgst.html

**List of Supported Digest Algorithms**

- md5 - MD5 message digest algorithm (default)
- sha1 - SHA-1 message digest algorithm
- sha224 - SHA-2, 224 bit variant
- sha256 - SHA-2, 256 bit variant
- sha384 - SHA-2, 384 bit variant
- sha512 - SHA-2, 512 bit variant

**Example: SHA1 Message Digest with roEVPDigest**

```brightscript
ba = CreateObject("roByteArray")
' ...populate bytearray...
digest = CreateObject("roEVPDigest")
digest.Setup("sha1")
result = digest.Process(ba)
print result
```

**Example: MD5 Message Digest with roEVPDigest**

```brightscript
ba1 = CreateOjbect("roByteArray")
' ...populate ba1...
ba2 = CreateObject("roByteArray")
ba2.FromAsciiString(somestring)
digest = CreateObject("roEVPDigest")
digest.Setup("md5")
digest.Update(ba1)
digest.Update(ba2)
result = digest.Final()
print result
```


## Supported interfaces

- [ifEVPDigest](doc:ifevpdigest)