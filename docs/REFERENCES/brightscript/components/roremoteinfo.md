---
title: "roRemoteInfo"
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


The roRemoteInfo component provides an interface to obtain attributes about the Roku remote control that is currently connected to the Roku device. Note that a Roku remote control device that is paired with a device, may not be the one that is currently connected (a single remote is typically connected to a device at a time). 

This object is created with no parameters:

``CreateObject("roRemoteInfo")``

**Example**

```
remoteInfo = CreateObject("roRemoteInfo")
print remoteInfo.GetModel(0)
print remoteInfo.IsAwake(0)
print remoteInfo.hasFeature("voicecapture", 0)
```

**Output**

The output from the above code could be as follows:

```
538
false
true
```



## Supported interfaces

- [ifRemoteInfo](doc:ifremoteinfo)
