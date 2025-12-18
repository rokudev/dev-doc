---
title: App Tracing
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

# Roku app tracing (with Perfetto)

Starting with Roku OS 15.1, you can use [Perfetto](https://perfetto.dev/docs/) to record, analyze, and visualize traces of your Roku apps to pinpoint where you can reduce resource consumption and optimize performance.  Tracing captures and visualizes the events in your app on a timeline, which provides you with a detailed graphical view of what your app is doing over time.

With Roku ECP and a Websocket client, you can launch your app, record and save a trace, and then open it in Perfetto. You can then explore the trace in Perfetto by using the WASD keys on your keyboard to zoom and pan, and your mouse to expand process tracks (rows) into their constituent thread tracks. You can also execute SQL-based queries in Perfetto. 

![perfetto-ui-overview](https://image.roku.com/ZHZscHItMTc2/perfetto-ui-overview.png)

## Prerequisites

To record a trace, developers need the following:

- Roku OS 15.1 (or later)
- A Roku device with [developer mode enabled](/docs/developer-program/getting-started/developer-setup.md). 
- Roku app (you can record a trace with an app running in a [sideloaded](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels), beta, or production environment).
  - For a sideloaded app, the manifest must enable the **run_as_process** attribute (run_as_process=1). 
  - For a [beta](https://developer.roku.com/docs/developer-program/publishing/channel-publishing-guide.md#beta-channel-guidelines) or [production](https://developer.roku.com/docs/developer-program/publishing/channel-publishing-guide.md#public-channel-guidelines) app, the developer must own the app (your [device must be keyed with key used to sign the app package](/docs/developer-program/publishing/packaging-channels.md#rekeying-from-an-existing-package)).  T
- Trace recording app. You can record an app trace via ECP and a websocket client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

## Using ECP to enable and record Perfetto traces 

You can enable and record a Perfetto trace with ECP following these steps:

### Enabling Perfetto

To enable tracing for an app, send the enable Perfetto command with the channel ID:

```
curl -X POST "http://192.168.1.86:8060/perfetto/enable/dev"
```

The ECP response will have the following syntax:

```
<?xml version="1.0" encoding="UTF-8" ?>
<perfetto-enable>
	<enabled-channels>
		<channel>dev</channel>
	</enabled-channels>
	<timestamp>1762473265350</timestamp>
	<timestamp-end>1762473265350</timestamp-end>
	<status>OK</status>
</perfetto-enable>
```

Once enabled, tracing starts automatically each time the app is launched

> ECP does not have a corresponding disable Perfetto command. The list of enabled apps is cleared on reboot.

### Recording a Perfetto trace

To record  trace data for a session, using a websocket client to connect to the device (for example, [websocat](https://github.com/vi/websocat)). The websocket emits a stream of bytes, which is the Protobuf-encoded Perfetto trace from the device.

```
websocat --binary ws://$ip:8060/perfetto-session > perfetto_data.trace
```

Data stops streaming when the client disconnects. If the client reconnects, the stream resumes.

> - Roku only supports a single websocket connection at a time.

## Adding custom trace data

You can use the roPerfetto BrightScript component to capture custom events in a Perfetto trace. The types of events you can record include instantaneous, duration, scoped, and flow events. 

| **Event**     | **Description**                                              | **Example**                         | **Snippet**           |
| ------------- | ------------------------------------------------------------ | ----------------------------------- | --------------------- |
| Instantaneous | Events without a duration                                    | keypress                            | ${instantaneous-code} |
| Duration      | Events with a beginning and an end                           | long function                       | ${duration-code}      |
| Scoped        | Similar to duration events, but the end-event is generated automatically when the object returned from the call is released. |                                     | ${scoped-code}        |
| Flow          | Creation of a “flow” of events from one piece of code to another. | A Task thread to the Render thread. | ${flow-code}          |

{#instantaneous-code}

```
tracer = CreateObject("roPerfetto")
tracer.instantEvent("my_instant_event")
tracer.instantEvent("my_instant_event", {debug_1: 42, debug_2: "hello"})
```

{#duration-code}

```
sub myfunc()
    tracer = CreateObject("roPerfetto")
    params = {debug_1: 42, debug_2: "hello"}
    tracer.beginEvent("my_duration_event", params)
    do_stuff()
    tracer.endEvent()
end sub
```

{#scoped-code}

```
sub myfunc()
    tracer = CreateObject("roPerfetto")
    params = {debug_1: 42, debug_2: "hello"}
    scoped_event = tracer.createScopedEvent("my_scoped_event", params)
    do_stuff()
    ' end event auto-created when scoped_event is released.
end sub
```

{#flow-code}

```
sub func1()
    flowId = 42   ' A user-selected unique unsigned integer identifier
    tracer = CreateObject("roPerfetto")
    tracer.flowEvent(flowId, "my_flow_event_1")
end sub
sub func2()
    flowId = 42
    tracer = CreateObject("roPerfetto")
    tracer.flowEvent(flowId, "my_flow_event_2")
end sub
sub func3()
    flowId = 42
    tracer = CreateObject("roPerfetto")
    tracer.terminateFlow(flowId, "my_flow_event_3")
end sub
```

## Visualizing trace files in Perfetto

You can open trace files with the [Perfetto UI](https://ui.perfetto.dev/) to anaylze them and pinpoint potential optimizations. Perfetto features a timeline view that provides a visual representation of the trace. 

You can use the W,A,S,D keys on your keyboard to zoom and pan, and your mouse to expand process tracks (rows) into their constituent thread tracks. 

![perfetto-visualize](https://image.roku.com/ZHZscHItMTc2/perfetto-visualize.png)

## Using PerfettoSQL to query traces

You can query the data in a trace using [PerfettoSQL](https://perfetto.dev/docs/analysis/perfetto-sql-getting-started) following these steps:

1. Click **Query (SQL)** in the left sidebar in the Perfetto UI.
2. Enter your query in the editor. 
3. Click **Run Query**.![perfetto-sql](https://image.roku.com/ZHZscHItMTc2/perfetto-sql.png)

The following examples demonstrate some of the use cases for querying your trace data:

| **Use case**                                                 | **Query**                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Find long executions of swapBuffers which indicate places where the channel may be dropping frames | `SELECT * FROM slice WHERE name = 'swapBuffers' ORDER BY dur DESC;` |
| Find places where the channel is handling a key press with OnKeyEvent() | `SELECT * FROM slice WHERE name = 'keyEvent' ORDER BY dur DESC;` |
| Find all of the observers being called in the app.           | `SELECT * FROM slice WHERE name = 'observer.callback' ORDER BY dur DESC;` |
| Find all of the places where the channel is calling setField. | `SELECT * FROM slice WHERE name = 'roSGNode.setField' ORDER BY dur DESC;` |