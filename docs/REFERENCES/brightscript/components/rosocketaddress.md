---
title: "roSocketAddress"
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



The roSocketAddress is used by the roStreamSocket and roDataGramSocket components for TCP and UDP traffic respectively.

This object is created without any arguments:

``CreateObject("roSocketAddress")``

Methods in [ifSocketAddress](doc:ifsocketaddress) are used to assign an IP address to the object. roSocketAddress currently supports only IPV4 addresses.


## Supported interfaces

- [ifSocketAddress](doc:ifsocketaddress)            