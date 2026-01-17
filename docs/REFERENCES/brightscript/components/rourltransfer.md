---
title: "roUrlTransfer"
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



A roUrlTransfer object transfers data to or from remote servers specified by URLs. It can perform mutual authentication with a web server.

This object is created with no parameters:

``CreateObject("roUrlTransfer")``

If using HTTPS, the developer must specify a certificate file by calling SetCertificatesFile() with a .pem file that includes the certificate authority cert (like Verisign, Thawte, etc., or your own with OpenSSL) that signed the web server certificate. This must be called before making a request. The developer can also use the Roku standard cert bundle (which contains certificates for most common signing authorities) stored in common:/certs/ca-bundle.crt; or download the CA certificate [here](https://github.com/rokudev/ca-certificate/blob/master/ca-bundle.crt).

The web server can authenticate that the requested connection is from a Roku Streaming Player and that the request is from your application by taking the following actions:

- Add the Roku CA certificate to the web server's certificate authorities keychain, download the CA certificate.  
- Configure your web server to reject any connection that does not have a valid client certificate.
- Check the X-Roku-Reserved-Dev-Id header in the request. It should contain the Developer ID of your application. If it does not, another application on the Roku is attempting to access the server, and the request is rejected.


**Example**

In order for your web server to perform the steps above to authenticate your Roku Streaming Player, your application needs to call the following functions before performing any https requests:

~~~
object.SetCertificatesFile("common:/certs/ca-bundle.crt")
object.AddHeader("X-Roku-Reserved-Dev-Id", "")
object.InitClientCertificates()
~~~


## Supported interfaces

- [ifUrlTransfer](/docs/references/brightscript/interfaces/ifurltransfer.md "ifUrlTransfer")                 
- [ifHttpAgent](/docs/references/brightscript/interfaces/ifhttpagent.md "ifHttpAgent")                    
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")               
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")               


## Supported events

- [roUrlEvent](/docs/references/brightscript/events/rourlevent.md "roUrlEvent")  

          