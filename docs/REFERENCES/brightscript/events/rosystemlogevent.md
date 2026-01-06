---
title: roSystemLogEvent
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
<br />

<br />

# roSystemLogEvent

<br />


roSystemLogEvents are sent when enabled via <Anchor label="roSystemLog" title="roSystemLog" href="/docs/references/brightscript/components/rosystemlog.md">roSystemLog</Anchor> . roSystemLogEvent has the following method:

<br />

## Supported methods

<br />

<br />

### GetInfo() as Object

Returns an AssociativeArray containing information describing the event, which may be one of the following values:

| Key     | Type   | Description                                                      |
| ------- | ------ | ---------------------------------------------------------------- |
| LogType | String | Identifies the specific type of event. Valid types are listed at |

<br />

If LogType is "http.connect" or "http.error", the event AA contains the base keys and the following additional keys:

<br />

<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Url</td>
<td>String</td>
<td>The URL that was requested</td>
</tr>
<tr>
<td>OrigUrl</td>
<td>String</td>
<td>The original URL. If the original URL was redirected, then Url represents the new redirected URL and OrigURL the original. OrigURL is included so that it's easy to correlate between events and URLs passed to components</td>
</tr>
<tr>
<td>Method</td>
<td>String</td>
<td>The HTTP method. "GET", "POST", or "HEAD"</td>
</tr>
<tr>
<td>Status</td>
<td>String</td>
<td>If LogType is "http.connect", this will be "ok". Otherwise, it will be one of the following: <ul><li>unknownerror</li><li>dnsfailure</li><li>dnstimeout</li><li>noroutetohost</li><li>connectiontimeout</li><li>connectionrefused</li><li>untrustedcert</li><li>expiredcert</li><li>nocipher</li><li>handshakefailed</li><li>generalsocketerror</li><li>httperror</li></ul><p>If LogType is "bandwidth.minute", the event AA contains the base keys and the following additional key:</p></td>
</tr>
<tr>
<td>TargetIp</td>
<td>String</td>
<td>The IP address of the target server</td>
</tr>
<tr>
<td>HttpCode</td>
<td>Integer</td>
<td>The IP address of the target server</td>
</tr>
</tbody>
</table>

<br />
