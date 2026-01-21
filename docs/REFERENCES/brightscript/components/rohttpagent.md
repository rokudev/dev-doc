---
title: "roHttpAgent"
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




All SceneGraph nodes can use the roHttpAgent component to support cookies, custom HTTP headers, and support secure HTTP file transfer protocols, such as passing certificates to the server as part of a URL transfer. An roHttpAgent component object is created by default for all SceneGraph nodes for this purpose. The roHttpAgent object supports the [ifHttpAgent](doc:ifhttpagent) interface used by many BrightScript components to allow secure HTTP file transfer protocols. Child nodes of a SceneGraph node automatically inherit the parent roHttpAgent object, unless a new roHttpAgent object is created, or an existing roHttpAgent is set for a child node. There are two roSGNode [ifSGNodeHttpAgentAccess](doc:ifsgnodehttpagentaccess) interface methods that allow a specific roHttpAgent object to be selected and set for a specific SceneGraph node.

An roHttpAgent object is created automatically for all SceneGraph nodes, or can be created with no parameters:

``CreateObject("roHttpAgent")``


> SceneGraph Audio and Video nodes always create a new roHttpAgent object and do not share it, and can use a different mechanism for HTTPS and cookie support, that involves setting certificates and cookies as Content Meta-Data attributes for the node ContentNode.


## Supported interfaces

- [ifHttpAgent](doc:ifhttpagent)