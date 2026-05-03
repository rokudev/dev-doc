---
title: "Event loops"
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


## Events

An event is a thing like an on-screen button press, a remote button press, a video that has finished playing back, etc. When an event occurs, a "message" describing the event is created.  In this documentation, we often refer to messages or events interchangably.

## Event loops

A script will normally interact with events via an event loop.  At a high level, an event loop is a piece of code with this structure:

```
while true
    ' wait for an event
    ' process the event
end while
```

## Message ports

Messages describing events are sent to and received from objects of type "roMessagePort". By calling ifSetMessagePort.SetMessagePort() in a particular component, you instruct that component to deliver messages to a particular roMessagePort.  Your script can then receive messages from that port to be notified of the events related to that component.

## Script structure

Normally a script will have a structure like this:

- The script creates a BrightScript Component of type "roMessagePort" .
- The script instructs one or more other BrightScript Components to send their events to this message port, by calling SetMessagePort().
- The script waits for an event to be delivered to the message port. The actual function to do this is [ifMessagePort.WaitMessage](doc:ifmessageport), but BrightScript also provides the built-in statement WAIT to make this easier.
- When the script receives a message, it determines what type of event occurred and handles the event.
- If a script receives an unknown type of event, it should ignore it; then just continue processing other events. Roku may occasionally add new events, and if your script is written to exit on unknown events, any future events that Roku may add will cause your application to misbehave.

Here is an example of a simple script that processes events.

```
port = CreateObject("roMessagePort")
screen = CreateObject("roSGScreen")
scene = screen.CreateScene("Scene")
screen.SetMessagePort(port) ' instruct screen to send events to port
screen.Show()
while true
	msg = wait(0, port) ' wait for a message
	if type(msg) = "roSGScreenEvent" then
		if msg.isScreenClosed() then
			return -1
		else if msg.isButtonPressed()
			print "button pressed: ";msg.GetIndex()
		else
			' ignore other unknown or uninteresting screen events
		end if
	else
		' ignore other events non-screen events
	end if
end while
```

## Game scripts

Real-time games which use the [ifDraw2D ](doc:ifdraw2d)interface typically cannot wait like this for a message in their event loop, because the screen may need to be updated with new animation frames even if no buttons are pressed or other events occur.  One way to deal with this is to use a timeout as the first parameter of the call to wait:

```
msg = wait(5, port)
```

This waits for a message, but if no message is received within 5 milliseconds, the wait returns and msg is set to 'invalid'.  When feasible, this is a simple approach.

However, an approach that usually offers more predictable performance is to use [ifMessagePort.GetMessage](doc:ifmessageport) instead of wait.  This is because GetMessage will return immediately if no message is available, while the actual amount of time before a timed wait returns can vary depending on various factors.  A game script is often structured like this.

```
port = CreateObject("roMessagePort")
screen = CreateObject("roScreen")
screen.SetMessagePort(port) ' instruct screen to send events to port
while true
	msg = port.GetMessage() ' get a message, if available
	if type(msg) = "roUniversalControlEvent" then
		print "button pressed: ";msg.GetInt()
	end if
	DrawOntoScreen(screen) ' call some ifDraw2D methods to draw on screen
	screen.SwapBuffers()
end while
```

Note that in this case, it is the call to SwapBuffers, not GetMessage, that causes the wait in each iteration of the loop.

## Timed events

Sometimes you may wish to have certain code executed periodically, or a certain amount of time after another event has occurred.  The best way to handle this is usually to incorporate the handling of the timed event into your main event loop, and use an roTimespan object as a clock to determine when it is time to perform the next action.  For example, this loop is similar to the Springboard screen event loop shown above, but it also calls the function DoSomething once every 5 seconds.

```
clock = CreateObject("roTimespan")
next_call = clock.TotalMilliseconds() + 5000
while true
	msg = wait(250, port) ' wait for a message
	if type(msg) = "roSpringboardScreenEvent" then
		if msg.isScreenClosed() then
			return -1
		else if msg.isButtonPressed()
			print "button pressed: ";msg.GetIndex()
		else
			' ignore other unknown or uninteresting roSpringBoardScreenEvents
		end if
	else
		' ignore other events, not type roSpringboardScreenEvent
	end if
	if clock.TotalMilliseconds() > next_call then
		DoSomething()
		next_call = clock.TotalMilliseconds() + 5000
	end if
end while
```

Notice that the first parameter of wait has been changed so that it returns after 250 milliseconds even if no event has occurred.  This ensures that DoSomething gets called even in the absence of other activity on the port.

## Types of messages

Different Brightscript components generate different types of messages. For example, the component "roSpringboardScreen" sends event messages of type "roSpringboardScreenEvent". In general, a Brightscript function dealing with a specific component should only react to events generated by that component.  For example, as in the example above, code that deals with events generated by an roSpringboardScreen should be inside an if statement like this:

```
    if type(message) = "roSpringboardScreenEvent"
```

When a message of the desired type is received, the code will process it.  For example, one might be looking for a "button pressed" event type. The example above shows that the way to test for this is to call the method isButtonPressed:

```
    if message.isButtonPressed()
```

An event loop needs to be aware of the possible event classes and types which it can receive and process them.


The following is the list of tests for event types. If new types are added, these tests will remain valid.

```
    isListItemSelected() as Boolean
    isScreenClosed() as Boolean
    isListFocused() as Boolean
    isListSelected() as Boolean
    isListItemFocused() as Boolean
    isButtonPressed() as Boolean
    isPlaybackPosition() as Boolean
    isRemoteKeyPressed() as Boolean
    isRequestSucceeded() as Boolean
    isRequestFailed() as Boolean
    isRequestInterrupted() as Boolean
    isStatusMessage() as Boolean
    isPaused() as Boolean
    isResumed() as Boolean
    isCleared() as Boolean
    isPartialResult() as Boolean
    isFullResult() as Boolean
    isAdSelected() as Boolean
    isStorageDeviceAdded() as Boolean
    isStorageDeviceRemoved() as Boolean
    isStreamStarted() as Boolean
    isListItemInfo() as Boolean
    isButtonInfo() as Boolean
```

- **Instant replay button**. Upon pressing this button, the video will skip back 7 seconds without re-buffering. Active only in video mode.  App developers do not need to do anything to support it.

- **Info button**. This button must be programmed by app developers, or it will do nothing.  Developers should provide contextually relevant information overlaid on video or other UI screens by using the predicates isListItemInfo() and isButtonInfo() listed above.

- **Back button**. Closes the current screen and pops the display stack in the UI. Active only in non-video mode. In most screens developers handle this by exiting the event loop when an isScreenClosed event is received.  On some screens like roMessageDialog and roPinEntryDialog, developers must explicitly enable the Back button by calling EnableBackButton.