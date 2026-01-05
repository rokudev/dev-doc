---
title: "roDataGramSocket"
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

# roDataGramSocket

The roDataGramSocket component enables Brightscript apps to send and receive UDP packets. The interface is modeled on and works much like standard Berkeley sockets.

This object is created without any arguments:

``CreateObject("roDataGramSocket")``

**Example**

~~~
' UDP 2-way peer-to-peer asynchronous comm on port 54321
' periodically sends out a message to a specific address and port
' prints any message it receives
Function UDPPeer()
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
    While continue
        event = wait(timeout, msgPort)
        If type(event)="roSocketEvent"
        If event.getSocketID()=udp.getID()
                If udp.isReadable()
                    message = udp.receiveStr(512) ' max 512 characters
                    print "Received message: '"; message; "'"
                End If
            End If
        Else If event=invalid
            print "Timeout"
            udp.sendStr(message) ' periodic send
        End If
    End While
    udp.close() ' would happen automatically as udp goes out of scope

End Function
~~~

> GetDeviceUniqueId() was deprecated in Spring OS 2019.


## Supported interfaces

- [ifSocket](/docs/references/brightscript/interfaces/ifsocket.md "ifSocket")
- [ifSocketAsync](/docs/references/brightscript/interfaces/ifsocketasync.md "ifSocketAsync")
- [ifSocketStatus](/docs/references/brightscript/interfaces/ifsocketstatus.md "ifSocketStatus")
- [ifSocketOption](/docs/references/brightscript/interfaces/ifsocketoption.md "ifSocketOption")
- [ifSocketCastOption ](/docs/references/brightscript/interfaces/ifsocketcastoption.md "ifSocketCastOption ")

> Some legacy Roku OS versions may implement ifSocketCastOption as ifSocketCast.


## Supported events

- [roSocketEvent](/docs/references/brightscript/events/rosocketevent.md "roSocketEvent ")
