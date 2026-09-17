---
title: "roSSEvent"
excerpt: 'Event sent for each server-sent event received by roUrlTransfer'
deprecated: false
hidden: false
metadata:
  title: 'roSSEvent'
  description: 'The roUrlTransfer component sends an roSSEvent to its message port for each server-sent event (SSE) it receives, carrying the event, id, data, and retry fields.'
  robots: index
next:
  description: ''
---

*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

The [roUrlTransfer](doc:rourltransfer) component sends an roSSEvent to its message port for each [server-sent event](doc:ifurltransfer#asyncgetssevents-as-boolean) (SSE) it receives. You can enable SSE handling by calling **AsyncGetSSEvents()** on the transfer.

During an SSE transfer, the message port receives the following events:

| Event                          | When                                          |
| ------------------------------ | --------------------------------------------- |
| [roUrlEvent](doc:rourlevent) with event type 2 | The first server-sent event is received. Response headers and other transfer information are available at this point |
| roSSEvent                      | Each server-sent event is received            |
| [roUrlEvent](doc:rourlevent) with event type 1 | The transfer completes                        |

## Supported methods

### GetSourceIdentity() as Integer

Returns a magic number that can be matched with the value returned by the [roUrlTransfer.GetIdentity()](doc:ifurltransfer#getidentity-as-integer) method to determine the source of the event.

### GetEvent() as String

Returns the "event" field of the server-sent event, or an empty string if the field is not present.

### GetId() as String

Returns the "id" field of the server-sent event, or an empty string if the field is not present.

### GetData() as String

Returns the "data" field of the server-sent event, or an empty string if the field is not present.

### GetRetry() as Integer

Returns the reconnection interval in milliseconds from the "retry" field of the server-sent event, or 0 if the field is not present.

## Example

The following opens an SSE stream and prints each server-sent event as it arrives.

```brightscript
sub sseEventsExample()
    transfer = CreateObject("roUrlTransfer")
    port = CreateObject("roMessagePort")
    transfer.SetMessagePort(port)
    transfer.SetUrl("https://example.com/api/story")

    ' roUrlEvent types received during an SSE transfer.
    completed = 1
    started = 2

    transfer.AsyncGetSSEvents()

    while true
        msg = wait(0, port)

        if type(msg) = "roUrlEvent"
            event = msg.GetInt()

            if event = started
                print "SSE transfer started, response code: "; msg.GetResponseCode()
            end if

            if event = completed
                print "SSE transfer completed, response code: "; msg.GetResponseCode()
                exit while
            end if
        end if

        if type(msg) = "roSSEvent"
            print "event="; msg.GetEvent()
            print "id="; msg.GetId()
            print "data="; msg.GetData()
            print "retry="; msg.GetRetry()
        end if
    end while

    print "Last event ID: "; transfer.SSELastEventId()
end sub
```
