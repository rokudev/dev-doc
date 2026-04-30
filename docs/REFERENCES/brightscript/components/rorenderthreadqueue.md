---
title: "roRenderThreadQueue"
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


*Available since Roku OS 15.0*


The **roRenderThreadQueue** node queues messages to be consumed by handlers on the render thread. This enables asynchronous communication between Task nodes and the render thread. Messages passed using this mechanism will not block the render thread like a rendezvous.


## Supported interfaces

- [ifRenderThreadQueue](doc:ifrenderthreadqueue)
