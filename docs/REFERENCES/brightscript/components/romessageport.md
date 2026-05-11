---
title: "roMessagePort"
excerpt: 'Reference for roMessagePort, where messages and events are received'
deprecated: false
hidden: false
metadata:
  title: 'roMessagePort'
  description: 'Reference page for roMessagePort. roMessagePort is the place messages and events are sent, created via CreateObject.'
  robots: index
next:
  description: ''
---



A Message Port is the place messages ([events](doc:event-loops)) are sent. 

When using BrightScript, you would not call these functions directly. Instead, use the "Wait" BrightScript statement.  

This object is created with no parameters:

``CreateObject("roMessagePort")``


## Supported interfaces

- [ifMessagePort](doc:ifmessageport) 