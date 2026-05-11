---
title: "roDataGramSocket"
excerpt: 'Component for sending and receiving UDP packets via Berkeley-style sockets'
deprecated: false
hidden: false
metadata:
  title: 'roDataGramSocket'
  description: 'The roDataGramSocket component enables apps to send and receive UDP packets through an interface modeled on standard Berkeley sockets, with roSocketEvent.'
  robots: index
next:
  description: ''
---


The roDataGramSocket component enables Brightscript apps to send and receive UDP packets. The interface is modeled on and works much like standard Berkeley sockets.

This object is created without any arguments:

``CreateObject("roDataGramSocket")``

**Example**

```
' UDP 2-way peer-to-peer asynchronous comm on port 54321
' periodically sends out a message to a specific address and port
' prints any message it receives
function UDPPeer()
    msgPort = createobject("roMessagePort")
    udp = createobject("roDatagramSocket")
    udp.setMessagePort(msgPort) 'notifications for udp come to msgPort
    addr = createobject("roSocketAddress")
    addr.setPort(54321)
    udp.setAddress(addr) ' bind to all host addresses on port 54321
    addr.SetHostName("10.1.1.1")
    udp.setSendToAddress(addr) ' peer IP and port
    udp.notifyReadable(true)
    timeout = 1 * 10 * 1000 ' ten seconds in milliseconds
    deviceName = Createobject("roDeviceInfo").GetFriendlyName()
    message = "Datagram from " + deviceName
    udp.sendStr(message)
    continue = udp.eOK()
    while continue
        event = wait(timeout, msgPort)
        if type(event)="roSocketEvent"
        if event.getSocketID()=udp.getID()
                if udp.isReadable()
                    message = udp.receiveStr(512) ' max 512 characters
                    print "Received message: '"; message; "'"
                end if
            end if
        else if event=invalid
            print "Timeout"
            udp.sendStr(message) ' periodic send
        end if
    end while
    udp.close() ' would happen automatically as udp goes out of scope
end function
```

> GetDeviceUniqueId() was deprecated in Spring OS 2019.


## Supported interfaces

- [ifSocket](doc:ifsocket)
- [ifSocketAsync](doc:ifsocketasync)
- [ifSocketStatus](doc:ifsocketstatus)
- [ifSocketOption](doc:ifsocketoption)
- [ifSocketCastOption ](doc:ifsocketcastoption)

> Some legacy Roku OS versions may implement ifSocketCastOption as ifSocketCast.


## Supported events

- [roSocketEvent](doc:rosocketevent)
