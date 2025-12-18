---
title: Rosgscreenevent
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

# roSGScreenEvent

**roSGScreenEvents** are events sent to a scene graph **roSGScreen** by the framework.  Other than when notifying the app's main BrightScript thread that the screen is being closed, and thus that the app should be terminated, apps do not generally handle these events.

## Supported methods

### isScreenClosed() as Boolean

Checks whether the screen has been closed and is no longer displayed to the user. This method returns true if the screen was closed; otherwise, it returns false.

Apps respond to this event by exiting the main BrightScript thread to exit the application.

#### Example: Handling the isScreenClosed event to terminate an app in source/main.brs

~~~~
sub Main()
    showChannelSGScreen()
end sub

sub showChannelSGScreen()
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    screen.setMessagePort(m.port)
    m.scene = screen.CreateScene("SimpleCaptionsScene")
    screen.show()
    while(true)
        msg = wait(0, m.port)
        msgType = type(msg)
        if msgType = "roSGScreenEvent"
            if msg.isScreenClosed() then return
        end if
    end while
end sub
~~~~
