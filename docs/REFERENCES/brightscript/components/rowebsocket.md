---
title: "roWebSocket"
excerpt: 'Establish and manage secure WebSocket connections from BrightScript'
deprecated: false
hidden: false
metadata:
  title: 'roWebSocket | Roku Developer Docs'
  description: 'The roWebSocket BrightScript component establishes secure WebSocket connections and performs bi-directional communication using the ifWebSocket interface.'
  robots: index
next:
  description: ''
---

The **roWebSocket** component enables apps to establish WebSocket connections to remote WebSocket server URLs and perform bi-directional communication according to the [WebSocket protocol](https://datatracker.ietf.org/doc/html/rfc6455). This enables apps, for example, to receive real-time entitlement notifications that grant customers immediate access to content they have purchased, update the app UI based on real-time data received from a backend system, and send real-time analytics and other data to a backend system without repeatedly creating and terminating network connections.

An instance of the **roWebSocket** component maintains an open connection unless the app closes it explicitly with the **Close()** method, the server closes it, or a transport or protocol error occurs. During an open connection, the **roWebSocket** object generates multiple asynchronous WebSocket events that are delivered as **roWebSocketEvent** objects via the object's message port. If the object is dereferenced and goes out of scope, it closes the WebSocket connection and stops delivering WebSocket events.

The opening handshake for WebSocket connections is done over HTTP. The **roWebSocket** interface therefore includes several methods ([ifHttpAgent](doc:ifhttpagent), [ifSetMessagePort](doc:ifsetmessageport), [ifGetMessagePort](doc:ifgetmessageport)) that set up the HTTP-related parameters of the handshake, similar to the **roUrlTransfer** interface.

To create a secure WebSocket connection, you may need to perform the actions described in the [**roUrlTransfer** documentation](doc:rourltransfer) for configuring HTTPS parameters.

An **roWebSocket** object is created with no parameters:

```
CreateObject("roWebSocket")
```

## WebSocket examples

### Asynchronous event-driven execution

Use an event-driven approach and perform WebSocket operations asynchronously. To do this, set a message port on an **roWebSocket** instance and handle WebSocket events with **roWebSocketEvent** objects.

```
' Test execution routine using asynchronous event driven logic.
function TextEchoTest(ws_url as String)as Boolean
    'Sets event constants like: m.OpenEvent = 1, m.ClosedEvent = 2, …
	SetWSEventConstants(m)
	m.port = createObject("roMessagePort")
    m.websocket = createObject("roWebSocket")
    m.websocket.setMessagePort(m.port)    
    
    m.websocket.SetUrl(ws_url)
	m.echoText = "Test echo message. Please reply!"
	m.echoReceived = False
	m.replyTimeout = 5000 ' we will wait for 5s for echo reply.
    print "Opening connection..."
    m.websocket.Open()
    ' Run the event loop to handle WebSocket events.
    runWSEventLoop(m.port, handleWebSocketEvent)
    
    ' Reporting the test result.
    return m.echoReceived
end function

' Event loop helper receiving WS events and passing them to the
' provided WS event handler.
' The WS event handler should return True for the last event to let the loop
' finish.
sub runWSEventLoop(port as Object, eventHandler as Dynamic)
    while(true)
        msg = wait(0, port)
        msgType = type(msg)
        if msgType = "roWebSocketEvent"
            if eventHandler(msg)
                return
            end if
        end if
    end while
end sub

' Dispatching WS events to specific event handlers.
function handleWebSocketEvent(msg as Object) as Boolean
    TraceWSEvent(msg)
    event = msg.GetType()
    if event = m.OpenedEvent ' =1
        return OnOpened(msg)
    else if event = m.ClosedEvent ' =2
        return OnClosed(msg)
    else if event = m.TimerEvent ' =9
        return OnTimer(msg)
    else if event = m.TextReceivedEvent ' =5
        return OnTextReceived(msg)
    end if
    return false
end function

function OnOpened(msg as Object) as Boolean    
    'Sending our Echo text message    
    m.websocket.Send(m.echoText)
    ' Setting one-shot timer for max reply time.
    m.websocket.SetTimer("Echo reply timer", m.replyTimeout, true)
    return false 'Not the last event for our event loop.
end function 
   
function OnTimer(msg as Object) as Boolean
    print "Echo reply timeout ocurred." 
    ' Closing our WebSocket.
    print "Closing connection..."
    m.websocket.Close()
    return false 'Not the last event for our event loop.
end function

function OnClosed(msg as Object) as Boolean
    print "Connection closed."    
    return true 'Finally, it is the last event for our event loop!
end function

function OnTextReceived(msg as Object) as Boolean
    print "Text received."
    if msg.GetInfo().Text = m.echoText
        m.echoReceived = True
    end if    
    ' Closing our WebSocket.
    print "Closing connection..."
    m.websocket.Close()
    return false 'Not the last event for our event loop.
end function
```

### Synchronous execution

Although an asynchronous event-driven approach is recommended for WebSocket operations, a synchronous step-by-step method is sometimes easier — especially when the WebSocket client knows how the server behaves. In this case, run the synchronous operations in a task that runs in parallel with the main UI task. Waiting for WebSocket events in a blocking, step-by-step manner then does not block the UI task.

A mixed approach can also be useful, where some WebSocket operations are done in a blocking, step-by-step synchronous way (for example, a setup step) and the remaining operations are done in an asynchronous, event-driven, non-blocking manner.

The **roWebSocket** interface provides methods (for example, **Open()**, **Send()**, and **Close()**) that block for client-initiated operations. You can implement waiting for server messages using WebSocket events and helper functions.

```
' Test execution routine using synchronous event driven logic.
function TextEchoTestSync(ws_url as String)as Boolean
	'Sets event constants like: m.OpenEvent = 1, m.ClosedEvent = 2, …
	SetWSEventConstants(m)

	m.port = createObject("roMessagePort")
    m.websocket = createObject("roWebSocket")
    m.websocket.setMessagePort(m.port)    
    m.websocket.SetUrl(ws_url)
	m.echoText = "Test echo message. Please reply!"
	m.echoReceived = False
	m.replyTimeout = 5000 ' we will wait for 5s for echo reply.
	
	'Opening WebSocket connection will wait for 2s for opening.
    print "Opening connection..."
    if !m.websocket.Open(2000)
		print "Failed to open connection."
		return False
	end if
    print "Websocket is ready."
    ' print Open info.
    print "open_info="; m.websocket.GetOpenInfo()
    
    ' Sending our Echo text message.
    m.websocket.Send(m.echoText)    
    ' Waiting for the 'text received' event up to the reply timeout.
    msg = waitForWSEvent(m.port, m.TextReceivedEvent, m.replyTimeout)
    if msg <> invalid
        m.echoReceived = msg.GetInfo().Text = m.echoText
    end if
    
    ' Closing our WebSocket
    print "Closing connection..."
    m.websocket.Close()
    print "Connection closed."
    ' Reporting the test result.
    return m.echoReceived
end function

' Helper function waiting for a certain WS event.
function waitForWSEvent(port as Object, event as Integer, timeout = 0 as Integer, socket_id = -1 as Integer) as Object
    while(true)
        msg = wait(timeout, port)
        if msg = invalid
            return msg
        end if
        msgType = type(msg)
        if msgType = "roWebSocketEvent"
            e = msg.GetType()
            socket_match = True
            if socket_id > 0 and socket_id <> msg.GetSocketId()
                ' Not event from the socket we want.
                socket_match = false
            end if
            if socket_match
                if e = event
                    return msg
                else if e = 2 ' Close event
                    ' if WebSocket was closed we will not get our event, so we need to stop waiting.
                    exit while
                end if
            end if
        end if
    end while
    return Invalid
end function
```

## Supported interfaces

- [ifWebSocket](doc:ifwebsocket). The core WebSocket methods.
- [ifHttpAgent](doc:ifhttpagent). Configures the HTTP part of the WebSocket handshake (see the [**roUrlTransfer** documentation](doc:rourltransfer) for more information).
- [ifSetMessagePort](doc:ifsetmessageport). Configures a message port for receiving asynchronous WebSocket events.
- [ifGetMessagePort](doc:ifgetmessageport). Gets the message port used to receive asynchronous WebSocket events.

## Supported events

- [roWebSocketEvent](doc:rowebsocketevent). Delivers asynchronous WebSocket event notifications to your app.
