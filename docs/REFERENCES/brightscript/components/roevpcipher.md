---
title: roEVPCipher
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

The EVP Cipher component provides an interface to the OpenSSL EVP library of symmetric cipher commands. The EVP library provides a high-level interface to cryptographic functions to implement digital "envelopes".

These commands allow data to be encrypted or decrypted using various block and stream ciphers using keys based on passwords or explicitly provided.

Some of the ciphers do not have large keys and others have security implications if not used correctly. A beginner is advised to just use a strong block cipher in CBC mode such as aes-128-cbc. All the block ciphers normally use PKCS#5 padding also known as standard block padding. If padding is disabled then the input data must be a multiple of the cipher block length.

> For additional information on the OpenSSL library of symmetric ciphers see: [https://www.openssl.org/docs/manmaster/man1/enc.html](https://www.openssl.org/docs/manmaster/man1/enc.html).

**List of supported ciphers**

<Table>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Cipher
      </th>

      <th>
        Key size (bits)
      </th>

      <th>
        Block size (bits)
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        aes-[128/192/256]-cbc
      </td>

      <td>
        128/192/256 bit AES in CBC mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]
      </td>

      <td>
        Alias for aes-[128/192/256]-cbc
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]-cfb
      </td>

      <td>
        128/192/256 bit AES in 128 bit CFB mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]-cfb1
      </td>

      <td>
        128/192/256 bit AES in 1 bit CFB mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]-cfb8
      </td>

      <td>
        128/192/256 bit AES in 8 bit CFB mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]-ecb
      </td>

      <td>
        128/192/256 bit AES in ECB mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        aes-[128/192/256]-ofb
      </td>

      <td>
        128/192/256 bit AES in OFB mode
      </td>

      <td>
        128,192,256
      </td>

      <td>
        128
      </td>
    </tr>

    <tr>
      <td>
        bf-cbc
      </td>

      <td>
        Blowfish in CBC mode   

        > Blowfish (bf*) ciphers are obsolete. Support for these ciphers may be removed in future Roku OS releases.
      </td>

      <td>
        128
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        bf
      </td>

      <td>
        Alias for bf-cbc
      </td>

      <td>
        128
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        bf-cfb
      </td>

      <td>
        Blowfish in CFB mode
      </td>

      <td>
        128
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        bf-ecb
      </td>

      <td>
        Blowfish in ECB mode
      </td>

      <td>
        128
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        bf-ofb
      </td>

      <td>
        Blowfish in OFB mode
      </td>

      <td>
        128
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-cbc
      </td>

      <td>
        DES in CBC mode
      </td>

      <td>
        56
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des
      </td>

      <td>
        Alias for des-cbc
      </td>

      <td>
        56
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-cfb
      </td>

      <td>
        DES in CBC mode
      </td>

      <td>
        56
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ecb
      </td>

      <td>
        DES in ECB mode
      </td>

      <td>
        56
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ofb
      </td>

      <td>
        DES in OFB mode
      </td>

      <td>
        56
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede-cbc
      </td>

      <td>
        Two key triple DES EDE in CBC mode
      </td>

      <td>
        80
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede
      </td>

      <td>
        Two key triple DES EDE in ECB mode
      </td>

      <td>
        80
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede-cfb
      </td>

      <td>
        Two key triple DES EDE in CFB mode
      </td>

      <td>
        80
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede-ofb
      </td>

      <td>
        Two key triple DES EDE in OFB mode
      </td>

      <td>
        80
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede3-cbc
      </td>

      <td>
        Three key triple DES EDE in CBC mode
      </td>

      <td>
        112
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede3
      </td>

      <td>
        Three key triple DES EDE in ECB mode
      </td>

      <td>
        112
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des3
      </td>

      <td>
        Alias for des-ede3-cbc
      </td>

      <td>
        112
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede3-cfb
      </td>

      <td>
        Three key triple DES EDE in CFB mode
      </td>

      <td>
        112
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        des-ede3-ofb
      </td>

      <td>
        Three key triple DES EDE in OFB mode
      </td>

      <td>
        112
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        desx
      </td>

      <td>
        DESX algorithm
      </td>

      <td>
        approx. 119
      </td>

      <td>
        64
      </td>
    </tr>

    <tr>
      <td>
        desx-cbc
      </td>

      <td>
        DESX in CBC mode
      </td>

      <td>
        approx. 119
      </td>

      <td>
        64
      </td>
    </tr>
  </tbody>
</Table>

## Supported interfaces

* <Anchor label="ifEVPCipher" title="ifEVPCipher" href="/docs/references/brightscript/interfaces/ifevpcipher.md">ifEVPCipher</Anchor>
