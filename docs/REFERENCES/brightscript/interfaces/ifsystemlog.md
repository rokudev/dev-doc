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

# ifSystemLog

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

| Name    | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| logType | String | The logType to be enabled, which may be one of the following values: ${pvenabletype} |

{#pvenabletype}

| Valid logTypes                          | Description                                                                                                                                                                                                                                               |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "http.connect"                          | Sent whenever a successful HTTP connection is made. This means that the server responded to the HTTP request with a success (2xx) status code. However, this does not necessarily mean that all of the body of the request has been received successfully |
| "http.error"                            | Sent whenever an error occurs while executing an HTTP request. This may be sent during the time of the initial connection for two possible reasons: ${httperrorlist}                                                                                      |
| "bandwidth.minute"                      | Sent every minute to report the current measured bandwidth                                                                                                                                                                                                |
| “http.complete”   | ${httpcompletedescription}                                                                                                                                                                                                                                |

{#httperrorlist}

- because the server responded with an error code, or
- data is being read from the body after the initial connection takes place


{#httpcompletedescription}

| Property/Key    | Type       | Description                                                                                                                                                                                                                |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogType         | String     | When enabled, the “http.complete” events will be sent to Roku after an http transfer is completed for adaptive streams. This event consolidates information related to: ${logtypedescription}                              |
| DateTime        | roDateTime | The GMT time of the event, with a resolution of one millisecond                                                                                                                                                            |
| Url             | String     | The URL that was requested                                                                                                                                                                                                 |
| OrigUrl         | String     | The original URL. If the original URL was redirected, then Url represents the new redirected URL and OrigURL the original. OrigURL is included so that it's easy to correlate between events and URLs passed to components |
| Method          | String     | The HTTP method. "GET", "POST", or "HEAD"                                                                                                                                                                                  |
| Status          | String     | For LogType “http.complete”, this will be “ok”                                                                                                                                                                             |
| TargetIp        | String     | The IP address of the target server                                                                                                                                                                                        |
| HttpCode        | Integer    | The HTTP response code if available                                                                                                                                                                                        |
| ContentType     | String     | Content type or MIME type                                                                                                                                                                                                  |
| DNSLookupTime   | Double     | DNS name resolution time in seconds with double precision                                                                                                                                                                  |
| ConnectTime     | Double     | Time taken to connect to the server (seconds)                                                                                                                                                                              |
| FirstByteTime   | Double     | Time taken to receive the first byte from the server (seconds)                                                                                                                                                             |
| TransferTime    | Double     | Total data transfer time (seconds)                                                                                                                                                                                         |
| DownloadSpeed   | Double     | Transfer download speed in bytes per second                                                                                                                                                                                |
| BytesDownloaded | Integer    | Number of bytes downloaded from the server                                                                                                                                                                                 |
| UploadSpeed     | Double     | Transfer upload speed in bytes per second                                                                                                                                                                                  |
| BytesUploaded   | Integer    | Number of bytes uploaded to the server                                                                                                                                                                                     |

{#logtypedescription}

- a cURL transfer such as DNS look up time,
- connection latency,
- transfer speed,
- and number of bytes.

See [roSystemLogEvent](/docs/references/brightscript/events/rosystemlogevent.md "roSystemLogEvent") for details on the information reported for each log type.
