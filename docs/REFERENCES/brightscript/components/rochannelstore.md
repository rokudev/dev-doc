---
title: "roChannelStore"
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


The roChannelStore component allows the application to perform a purchase of an In-App Product or upgrade an app. Most of the purchase flow, screens and messaging associated with the financial transaction are handled by the Roku OS outside of control or monitoring by BrightScript code. The BrightScript code merely initiates the purchase and receives a final result. This will engender trust with users and give them confidence that they are dealing with the Streaming Store.

The roChannelStore component allows purchasing only those In-App Products which are associated with the running app. Please see [Adding in-app products](/docs/developer-program/roku-pay/quickstart/in-channel-products.md "Adding in-app products") for details on how to create an In-App Product and associate it with an app. After one or Products are created, GetCatalog() can be used to retrieve a list of Products and their attributes. DoOrder() can be called to initiate a purchase of one or more of the Products.

This object is created without any arguments:

``CreateObject("roChannelStore")``

> Because [ifChannelStore.DoOrder\(\)](/docs/references/brightscript/interfaces/ifchannelstore.md#doorder-as-boolean "ifChannelStore.DoOrder\(\)") needs to read the product type returned by GetCatalog(), only one instance of roChannelStore should ever be used for a complete purchase flow - you should never create a separate roChannelStore object to complete a purchase that was initiated by a different instance of roChannelStore.


## Supported interfaces

- [ifChannelStore](/docs/references/brightscript/interfaces/ifchannelstore.md "ifChannelStore")
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort ](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort ")


## Supported events

- [roChannelStoreEvent](/docs/references/brightscript/events/rochannelstoreevent.md "roChannelStoreEvento")
