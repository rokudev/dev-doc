---
title: "roStreamSocket"
excerpt: 'Accept, connect, and exchange data over TCP streams using roStreamSocket'
deprecated: false
hidden: false
metadata:
  title: 'roStreamSocket'
  description: 'roStreamSocket enables apps to accept and connect to TCP streams, and send and receive data using an interface modeled on Berkeley sockets.'
  robots: index
next:
  description: ''
---



The roStreamSocket component enables BrightScript apps to accept and connect to TCP streams as well as send and receive data with them. The interface is modeled on and works much like standard Berkeley sockets.

This object is created without any arguments:

``CreateObject("roStreamSocket")``


**Example: Open TCP Connection to Server**

```
sendAddress = CreateObject("roSocketAddress")
sendAddress.SetAddress("www.google.com:80")
socket = CreateObject("roStreamSocket")
socket.setSendToAddress(sendAddress)
if socket.Connect()
    print "Connected Successfully"
end if
```

**Example: Echo Server**

```
function main()
    messagePort = CreateObject("roMessagePort")
    connections = {}
    buffer = CreateObject("roByteArray")
    buffer[512] = 0
    tcpListen = CreateObject("roStreamSocket")
    tcpListen.setMessagePort(messagePort)
    addr = CreateObject("roSocketAddress")
    addr.setPort(54321)
    tcpListen.setAddress(addr)
    tcpListen.notifyReadable(true)
    tcpListen.listen(4)
    if not tcpListen.eOK()
        print "Error creating listen socket"
        stop
    end if
    while true
        event = wait(0, messagePort)
        if type(event) = "roSocketEvent"
            changedID = event.getSocketID()
            if changedID = tcpListen.getID() and tcpListen.isReadable()
                ' New
                newConnection = tcpListen.accept()
                if newConnection = invalid
                    print "accept failed"
                else
                    print "accepted new connection " newConnection.getID()
                    newConnection.notifyReadable(true)
                    newConnection.setMessagePort(messagePort)
                    connections[Stri(newConnection.getID())] = newConnection
                end if
            else
                ' Activity on an open connection
                connection = connections[Stri(changedID)]
                closed = false
                if connection.isReadable()
                    received = connection.receive(buffer, 0, 512)
                    print "received is " received
                    if received > 0
                        print "Echo input: '"; buffer.ToAsciiString(); "'"
                        ' if we are unable to send, just drop data for now.
                        ' You could use notifywritable and buffer data, but that is
                        ' omitted for clarity.
                        connection.send(buffer, 0, received)
                    else if received=0 ' client closed
                        closed = true
                    end if
                end if
                if closed or not connection.eOK()
                    print "closing connection " changedID
                    connection.close()
                    connections.delete(Stri(changedID))
                end if
            end if
        end if
    end while

    print "Main loop exited"
    tcpListen.close()
    for each id in connections
        connections[id].close()
    end for
end function
```


## Supported interfaces

- [ifSocketConnection](doc:ifsocketconnection)                   
- [ifSocket](doc:ifsocket)                             
- [ifSocketAsync](doc:ifsocketasync)                   
- [ifSocketStatus](doc:ifsocketstatus)                        
- [ifSocketConnectionStatus](doc:ifsocketconnectionstatus)              
- [ifSocketConnectionOption](doc:ifsocketconnectionoption) 
- [ifSocketOption](doc:ifsocketoption)        


## Supported events

- [roSocketEvent](doc:rosocketevent)           