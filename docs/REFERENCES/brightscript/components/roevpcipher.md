---
title: Roevpcipher
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

# roEVPCipher

The EVP Cipher component provides an interface to the OpenSSL EVP library of symmetric cipher commands. The EVP library provides a high-level interface to cryptographic functions to implement digital "envelopes".

These commands allow data to be encrypted or decrypted using various block and stream ciphers using keys based on passwords or explicitly provided. 

Some of the ciphers do not have large keys and others have security implications if not used correctly. A beginner is advised to just use a strong block cipher in CBC mode such as aes-128-cbc. All the block ciphers normally use PKCS#5 padding also known as standard block padding. If padding is disabled then the input data must be a multiple of the cipher block length.

>For additional information on the OpenSSL library of symmetric ciphers see: https://www.openssl.org/docs/manmaster/man1/enc.html.

**List of supported ciphers**

| Name                   | Cipher                                   | Key size (bits) | Block size (bits) |
| ---------------------- | ---------------------------------------- | --------------- | ----------------- |
| aes-[128/192/256]-cbc  | 128/192/256 bit AES in CBC mode          | 128,192,256     | 128               |
| aes-[128/192/256]      | Alias for aes-[128/192/256]-cbc          | 128,192,256     | 128               |
| aes-[128/192/256]-cfb  | 128/192/256 bit AES in 128 bit CFB mode  | 128,192,256     | 128               |
| aes-[128/192/256]-cfb1 | 128/192/256 bit AES in 1 bit CFB mode    | 128,192,256     | 128               |
| aes-[128/192/256]-cfb8 | 128/192/256 bit AES in 8 bit CFB mode    | 128,192,256     | 128               |
| aes-[128/192/256]-ecb  | 128/192/256 bit AES in ECB mode          | 128,192,256     | 128               |
| aes-[128/192/256]-ofb  | 128/192/256 bit AES in OFB mode          | 128,192,256     | 128               |
| bf-cbc                 | Blowfish in CBC mode<br />${bq-blowfish} | 128             | 64                |
| bf                     | Alias for bf-cbc                         | 128             | 64                |
| bf-cfb                 | Blowfish in CFB mode                     | 128             | 64                |
| bf-ecb                 | Blowfish in ECB mode                     | 128             | 64                |
| bf-ofb                 | Blowfish in OFB mode                     | 128             | 64                |
| des-cbc                | DES in CBC mode                          | 56              | 64                |
| des                    | Alias for des-cbc                        | 56              | 64                |
| des-cfb                | DES in CBC mode                          | 56              | 64                |
| des-ecb                | DES in ECB mode                          | 56              | 64                |
| des-ofb                | DES in OFB mode                          | 56              | 64                |
| des-ede-cbc            | Two key triple DES EDE in CBC mode       | 80              | 64                |
| des-ede                | Two key triple DES EDE in ECB mode       | 80              | 64                |
| des-ede-cfb            | Two key triple DES EDE in CFB mode       | 80              | 64                |
| des-ede-ofb            | Two key triple DES EDE in OFB mode       | 80              | 64                |
| des-ede3-cbc           | Three key triple DES EDE in CBC mode     | 112             | 64                |
| des-ede3               | Three key triple DES EDE in ECB mode     | 112             | 64                |
| des3                   | Alias for des-ede3-cbc                   | 112             | 64                |
| des-ede3-cfb           | Three key triple DES EDE in CFB mode     | 112             | 64                |
| des-ede3-ofb           | Three key triple DES EDE in OFB mode     | 112             | 64                |
| desx                   | DESX algorithm                           | approx. 119     | 64                |
| desx-cbc               | DESX in CBC mode                         | approx. 119     | 64                |

{#bq-blowfish}

> Blowfish (bf*) ciphers are obsolete. Support for these ciphers may be removed in future Roku OS releases.

## Supported interfaces

- [ifEVPCipher](/docs/references/brightscript/interfaces/ifevpcipher.md "ifEVPCipher")