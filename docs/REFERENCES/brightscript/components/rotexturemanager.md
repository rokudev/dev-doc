---
title: "roTextureManager"
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



The Texture Manager provides a set of API's for managing an roBitmap cache.


**Example: Requesting an roBitmap from the roTextureManager**

~~~
Sub Main()
    mgr = CreateObject("roTextureManager")
    msgport = CreateObject("roMessagePort")
    mgr.SetMessagePort(msgport)
 
    request = CreateObject("roTextureRequest","pkg:/assets/comet.jpg")
    mgr.RequestTexture(request)
 
    msg=wait(0, msgport)
    if type(msg)="roTextureRequestEvent" then
        print "request id";msg.GetId()
        print "request state:";msg.GetState()
        print "request URI:";msg.GetURI()
        state = msg.GetState()
        if state = 3 then
            bitmap = msg.GetBitmap()
            if type(bitmap)<>"roBitmap" then
                print "Unable to create robitmap"
                stop   ' stop exits to the debugger
            end if
        end if
   end if
End Sub
~~~


## Supported interfaces

- [ifTextureManager](doc:iftexturemanager)                 
- [ifSetMessagePort](doc:ifsetmessageport)               
- [ifGetMessagePort](doc:ifgetmessageport)               
- [ifHttpAgent](doc:ifhttpagent)   

## Supported events

- [roTextureRequestEvent](doc:rotexturerequestevent)  
