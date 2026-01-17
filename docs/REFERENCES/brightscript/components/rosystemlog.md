---
title: "roSystemLog"
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



The roSystemLog component enables the application to receive events from the Roku Streaming Player that are intended for reporting errors and trends, rather than trigger a response to a user action.

All of the log event messages are sent to the roMessagePort that is registered on the [roSystemLogEvent](/docs/references/brightscript/events/rosystemlogevent.md "roSystemLogEvent") object. See roSystemLogEvent for details on the messages.

This object is created with no parameters:

``CreateObject("roSystemLog")``

The roSystemLog component requires specific Design Patterns in your BrightScript Application. Take care to:

- Use one roMessagePort throughout the application (instead of creating a new roMessagePort for each screen).
- Create one roSystemLog instance at startup that remains for the entire lifetime of the application.
- Create the roSystemLog instance on the main thread (it cannot be created on a task thread).
- Pass the global roMessagePort referenced in the first bullet point to SetMessagePort() on the roSystemLog component.
- Enable the desired log types using EnableType().
- Handle the [roSystemLogEvents](/docs/references/brightscript/events/rosystemlogevent.md "roSystemLogEvents") in all message loops.


## Supported interfaces

- [ifSystemLog](/docs/references/brightscript/interfaces/ifsystemlog.md "ifSystemLog")            