---
title: "roTextureRequest"
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



An roTextureRequest is used to make requests to the roTextureManager.

An roTextureRequest object is created using the CreateObject() method and passing it a URI string:

``CreateObject("roTextureRequest", "pkg:/assets/comet.jpg")``


**Example: Requesting a URL from the roTextureManager**

```
Sub Main()
    mgr = CreateObject("roTextureManager")
    msgport = CreateObject("roMessagePort")
    mgr.SetMessagePort(msgport)

    request = CreateObject("roTextureRequest","http://192.168.1.10/ball.png")
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
```


**Example: Requesting a scaled image from the roTextureManager**

```
Sub Main()
    mgr = CreateObject("roTextureManager")
    msgport = CreateObject("roMessagePort")
    mgr.SetMessagePort(msgport)

    request = CreateObject("roTextureRequest","pkg:/assets/ball.png")
    request.SetSize(100, 100)
    request.SetScaleMode(1)
    mgr.RequestTexture(request)
End Sub
```


**Example: Making an HTTPS request from the roTextureManager**

```
Sub Main()
    mgr = CreateObject("roTextureManager")
    msgport = CreateObject("roMessagePort")
    mgr.SetMessagePort(msgport)

    request = CreateObject("roTextureRequest","https://192.168.1.10/ball.png")
    request.SetCertificatesFile("common:/certs/ca-bundle.crt")
    request.InitClientCertificates()

    mgr.RequestTexture(request)
End Sub
```


## Supported interfaces

- [ifTextureRequest](doc:iftexturerequest)                 
- [ifHttpAgent](doc:ifhttpagent)           

               