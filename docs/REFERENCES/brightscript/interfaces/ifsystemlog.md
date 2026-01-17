---
title: "ifSystemLog"
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


## Implemented by

| Name         | Description                                                           |
|--------------|-----------------------------------------------------------------------|
|[roSystemLog](/docs/references/brightscript/components/rosystemlog.md "roSystemLog")  | The roSystemLog component enables the application to receive events from the Roku Streaming Player that are intended for reporting errors and trends, rather than trigger a response to a user action   |


## Supported methods

### EnableType(logType as String) as Void

#### Description

Enables log message of type logType. When a log type is enabled, system log messages of that type are sent to the message port that was set using SetMessagePort().  

All system log events are disabled by default and must be explicitly enabled by the application.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>logType</td>
<td>String</td>
<td>The logType to be enabled, which may be one of the following values: <table><thead><tr><th>Valid logTypes</th><th>Description</th></tr></thead><tbody><tr><td>"http.connect"</td><td>Sent whenever a successful HTTP connection is made. This means that the server responded to the HTTP request with a success (2xx) status code. However, this does not necessarily mean that all of the body of the request has been received successfully</td></tr><tr><td>"http.error"</td><td>Sent whenever an error occurs while executing an HTTP request. This may be sent during the time of the initial connection for two possible reasons: $&#123;httperrorlist&#125;</td></tr><tr><td>"bandwidth.minute"</td><td>Sent every minute to report the current measured bandwidth</td></tr><tr><td>“http.complete”</td><td>$&#123;httpcompletedescription&#125;</td></tr></tbody></table></td>
</tr>
</tbody>
</table>



