---
title: Rosystemlogevent
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

# roSystemLogEvent


roSystemLogEvents are sent when enabled via [roSystemLog](/docs/references/brightscript/components/rosystemlog.md "roSystemLog"). roSystemLogEvent has the following method:

## Supported methods

### GetInfo() as Object

Returns an AssociativeArray containing information describing the event, which may be one of the following values:

| Key      | Type       | Description                                                  |
| -------- | ---------- | ------------------------------------------------------------ |
| LogType  | String     | Identifies the specific type of event. Valid types are listed at [roSystemLog](/docs/references/brightscript/components/rosystemlog.md "roSystemLog"). |
| DateTime | roDateTime | The GMT time of the event, with a resolution of one second.  |

If LogType is "http.connect" or "http.error", the event AA contains the base keys and the following additional keys:

| Key      | Type    | Description                                                                                                                                                                                                                |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Url      | String  | The URL that was requested                                                                                                                                                                                                 |
| OrigUrl  | String  | The original URL. If the original URL was redirected, then Url represents the new redirected URL and OrigURL the original. OrigURL is included so that it's easy to correlate between events and URLs passed to components |
| Method   | String  | The HTTP method. "GET", "POST", or "HEAD"                                                                                                                                                                                  |
| Status   | String  | If LogType is "http.connect", this will be "ok". Otherwise, it will be one of the following: ${pvstatus}                                                                                                                   |
| TargetIp | String  | The IP address of the target server                                                                                                                                                                                        |
| HttpCode | Integer | The IP address of the target server                                                                                                                                                                                        |

{#pvstatus}

- unknownerror
- dnsfailure
- dnstimeout
- noroutetohost
- connectiontimeout
- connectionrefused
- untrustedcert
- expiredcert
- nocipher
- handshakefailed
- generalsocketerror
- httperror

If LogType is "bandwidth.minute", the event AA contains the base keys and the following additional key:

| Key       | Type    | Description                |
| --------- | ------- | -------------------------- |
| Bandwidth | Integer | Measured bandwidth in kbps |