---
title: "ifUrlTransfer"
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



## Implemented by

| Name         | Description                                                           |
|--------------|-----------------------------------------------------------------------|
|[roUrlTransfer](doc:rourltransfer) | A roUrlTransfer object transfers data to or from remote servers specified by URLs. It can perform mutual authentication with a web server |


## Supported methods

> Each roUrlTransfer object can perform only one asynchronous operation at one time. After starting an asynchronous operation, you cannot perform any other data transfer operations using that object until the asynchronous operation has completed, as indicated by receiving an roUrlEvent message whose GetSourceIdentity value matches the GetIdentity value of the roUrlTransfer.  
>
> Furthermore, the roUrlTransfer object must remain referenced until the transfer has completed. That means that there must be at least one variable containing a reference to the object during the transfer.  Allowing the variable to go out of scope (for example, by returning from a function where the variable is declared, or reusing the variable to hold a different value) will stop the asynchronous transfer.

### GetIdentity() as Integer

#### Description

Returns a unique number for this object that can be used to identify whether events originated from this object. The value can be any arbitrary value as assigned by the Roku OS, and should only be used for comparison purposes. For example, the value should not be used as an array index. For use as a look-up key, one option would be to use `GetIdentity().ToStr()` as an associative array key.

#### Return Value

A unique number for the object.

#### Example

```
Function Setup()
    m.pendingXfers = &#123;&#125;
End Function

Function GetAsync(url as String)
    newXfer = CreateObject("roUrlTransfer")
    newXfer.SetUrl(url)
    newXfer.AsyncGetToString()
    requestId = newXfer.GetIdentity().ToStr()
    m.pendingXfers[requestId] = newXfer
End Function

Function HandleUrlEvent(event as Object)
    requestId = event.GetSourceIdentity().ToStr()
    xfer = m.pendingXfers[requestId]
    if xfer <> invalid then
        ' process it
        m.pendingXfers.Delete(requestId)
    end if
End Function
```

### SetUrl(url as String) as Void

#### Description

Sets the URL to use for the transfer request.

#### Parameters

| Name  | Type   | Description |
| ----- | -----  | -------------- |
| url   | String | The URL to be used for the transfer request |

### GetUrl() as String

#### Description

Returns the current URL.

#### Return Value

The URL.

### SetRequest(req as String)

#### Description

Changes the request method from the normal GET, HEAD or POST to the value passed as a string.

>  Use this function cautiously because it can generate invalid HTTP requests.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| req   | String  | The request method to be used |

### GetRequest() as String

#### Description

Returns the current request method.

#### Return Value

The request method.

### GetToString() as String

#### Description

Connects to the remote service as specified in the URL and returns the response body as a string. This function waits for the transfer to complete and it may block for a long time. This calls discards the headers and response codes. If that information is required, use the [AsyncGetToString()](#asyncgettostring-as-boolean) method.

#### Return Value

The response body.

### GetToFile(filename as String) as Integer

#### Description

Connect to the remote service as specified in the URL and write the response body to a file on the Roku device's filesystem. This function does not return until the exchange is complete and may block for a long time. The HTTP response code from the server is returned. It is not possible to access any of the response headers. If this information is required use the [AsyncGetToFile()](#asyncgettofilefilename-as-string-as-boolean) method instead.

#### Parameters

| Name     | Type    | Description |
| ----     | ------- | -------------- |
| filename | String  | The file on the Roku device's filesystem to which the response body is to be written |

#### Return Value

The HTTP response code.

### AsyncGetToString() as Boolean

#### Description

Starts a GET request to a server, but does not wait for the transfer to complete.

When the GET request completes, a [roUrlEvent](doc:rourlevent) will be sent to the message port associated with the object. The event will contain a roString with the body of the response. If false is returned then the request could not be issued and no events will be delivered.

#### Return Value

A flag indicating whether the request was issued.

### AsyncGetToFile(filename as String) as Boolean

#### Description

Starts a transfer without waiting for it to complete, similar to the [AsyncGetToString()](#asyncgettostring-as-boolean) method. However, the response body will be written to a file on the device's filesystem instead of being returned in a String object.

When the GET request completes, an [roUrlEvent](doc:rourlevent) will be sent to the message port associated with the object. If false is returned then the request could not be issued and no events will be delivered.

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| filename | String  | The file on the Roku device's filesystem to which the response body is to be written |

#### Return Value

A flag indicating whether the request was issued.

### Head() as Dynamic

#### Description

Synchronously performs an HTTP HEAD request and returns an [roUrlTransfer](doc:ifurltransfer) object.

#### Return Value

An [roUrlTransfer](doc:ifurltransfer) object.  If a catastrophic failure occurs (for example, an asynchronous operation is already active), invalid is returned

### AsyncHead() as Boolean

#### Description

Begins an HTTP HEAD request without waiting for it to complete. When the HEAD completes, an [roUrlEvent](doc:rourlevent) will be sent to the message port associated with the object. If false is returned then the request could not be issued and no events will be delivered.

#### Return Value

A flag indicating whether the request was issued.

### PostFromString(request as String) as Integer

#### Description

Uses the HTTP POST method to send the supplied string to the current URL. The HTTP response code is returned. Any response body is discarded

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| request | String  | The POST request to be sent |

#### Return Value

The HTTP response code.

### PostFromFile(filename as String) as Integer

#### Description

Uses the HTTP POST method to send the contents of the specified file to the current URL. The HTTP response code is returned. Any response body is discarded

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| filename | String  | The file containing the POST request to be sent |

#### Return Value

The HTTP response code.

### AsyncPostFromString(request as String) as Boolean

#### Description

Uses the HTTP POST method to send the supplied string to the current URL. When the POST request completes, an [roUrlTransfer](doc:ifurltransfer) will be sent to the message port associated with the object. If false is returned then the request could not be issued and no events will be delivered.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| request | String  | The POST request to be sent asynchronously|

#### Return Value

A flag indicating whether the request was issued.

### AsyncPostFromFile(filename as String) as Boolean

#### Description

Uses the HTTP POST method to send the contents of the specified file to the current URL. When the POST request completes, an [roUrlTransfer](doc:ifurltransfer) will be sent to the message port associated with the object. If false is returned then the request could not be issued and no events will be delivered.

#### Parameters

| Name     | Type    | Description |
| ----     | ------- | -------------- |
| filename | String  | The file containing the POST request to be sent asynchronously|

#### Return Value

A flag indicating whether the request was issued.

### AsyncPostFromFileToFile(fromFile as String, toFile as String) as Boolean

#### Description

Uses the HTTP POST method to send the contents of the specified file (fromFile) to the current URL. When the POST request completes successfully, an [roUrlTransfer](doc:ifurltransfer) will be sent to the message port associated with the object. If false is returned then the request could not be issued and no events will be delivered.  This function is the same as AsyncPostFromFile, except that the HTTP response is written to the file specified by the toFile parameter.

#### Parameters

| Name     | Type    | Description |
| ----     | ------- | -------------- |
| fromFile | String  | The file containing the POST request to be sent asynchronously |
| toFile   | String  | The file on the Roku device's filesystem to which the response body is to be written |

#### Return Value

A flag indicating whether the request was issued.

### AsyncCancel() as Boolean

| Name        | Type    | Possible Value | Description                                                       |
| ----------- | ------- | -------------- |------------------------------------------------------------------ |
| AsyncCancel | Boolean | True/False     | Cancel any outstanding async requests on the roUrlEvent object |

### RetainBodyOnError(retain as Boolean) as Boolean

#### Description

Returns the body of the response even if the HTTP status code indicates that an error occurred.

#### Parameters

| Name   | Type     | Description |
| ----   | -------  | -------------- |
| retain | Boolean  | A flag specifying whether to return the response body when there is an HTTP error response code. |

#### Return Value

A flag indicating whether the operation was successful.

### SetUserAndPassword(user as String, password as String) as Boolean

#### Description

Enables HTTP authentication using the specified user name and password.

> HTTP basic authentication is intentionally disabled because it is inherently insecure. [HTTP digest authentication](https://tools.ietf.org/html/rfc2617 "HTTP digest authentication") is supported.

#### Parameters

| Name     | Type    | Description |
| ----     | ------- | -------------- |
| user     | String  | The user name to be authenticated|
| password | String  | The password to be authenticated|

#### Return Value

A flag indicating whether the operation was successful.

### SetMinimumTransferRate(bytes_per_second as Integer, period_in_seconds as Integer) as Boolean

#### Description

Terminates the transfer automatically if the transfer rate drops below the specified rate (bytes_per_second) over a specific interval (period_in_seconds).  

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
<td>bytes_per_second</td>
<td>Integer</td>
<td>The minimum transfer rate required to transfer data.</td>
</tr>
<tr>
<td>period_in_seconds</td>
<td>Integer</td>
<td>The interval to be used for averaging bytes_per_second.<br /><br />For large file transfers and a small bytes_per_second, averaging over fifteen minutes or even longer might be appropriate.<br /><br />If the transfer is being done over the internet, setting this to a small number because it may cause temporary drops in performance if network problems occur.</td>
</tr>
</tbody>
</table>


#### Return Value

A flag indicating whether the operation was successful.

### GetFailureReason() as String

#### Description

If any of the `roUrlEvent` functions indicate failure then this function may provide more information regarding the failure.

#### Return Value

Failure reason.

### EnableEncodings(enable as Boolean) as Boolean

#### Description

Enables gzip encoding of transfers

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| retain | Boolean  | A flag specifying whether to enable gzip encoding of transfers |

#### Return Value

A flag indicating whether this operation was successful.

### Escape(text as String) as String

#### Description

URL encodes the specified string per [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt "RFC 3986") and return the encoded string

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| text | String  | The string to be URL-encoded|

#### Return Value

The URL-encoded string.

### Unescape(text as String) as String

#### Description

Decodes the specified string per [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt "RFC 3986") and returns the unencoded string.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| text  | String  | The string to be URL-decoded|

#### Return Value

The decoded string.

### UrlEncode(url as String) as String

> This method is deprecated. Use the [Escape()](doc:ifurltransfer) method.

#### Description

URL encodes the specified string per RFC 3986 and return the encoded string


<table>
<thead>
<tr>
<th>Name</th>
<th>Return Type</th>
<th>Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>UrlEncode</td>
<td>String</td>
<td>$&#123;UrlEncodeParameters&#125;</td>
<td>URL-encoded String</td>
<td></td>
</tr>
</tbody>
</table>


#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| text | String  | The string to be URL-encoded|

#### Return Value

The encoded string.

### EnableResume(enable as Boolean) as Boolean

#### Description

Enables automatic resumption of `AsyncGetToFile` and `GetToFile` requests

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| enable | Boolean  | A flag specifying whether to automatically resume `AsyncGetToFile` and `GetToFile` requests |

#### Return Value

A flag indicating whether the operation was successful.

### EnablePeerVerification(enable as Boolean) as Boolean

#### Description

Verifies that the certificate has a chain of trust up to a valid root certificate using CURLOPT_SSL_VERIFYPEER.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| enable | Boolean  | A flag specifying whether to verify a certificate has a chain-of-trust up to a valid root certificate |

#### Return Value

A flag indicating whether the operation was successful.

### EnableHostVerification(enable as Boolean) as Boolean

#### Description

Verifies that the certificate belongs to the host using CURLOPT_SSL_VERIFYHOST.

#### Parameters

| Name  | Type    | Description |
| ----  | ------- | -------------- |
| enable | Boolean  | A flag specifying whether to verify a certificate belonging to the host. |

#### Return Value

A flag indicating whether the operation was successful.

### EnableFreshConnection(enable as Boolean) as Boolean

> The Roku OS no longer supports this function. Apps should always reuse connections because it is more efficient (new connections impact app performance by increasing latency and consuming more CPU). 

#### Description

Enables a fresh connection using CURLOPT_FRESH_CONNECT.

#### Parameters

| Name   | Type    | Description |
| ----   | ------- | -------------- |
| enable | Boolean | A flag specifying whether to enable fresh connections. |

#### Return Value

A flag indicating whether the operation was successful.

### SetHttpVersion(version as String) as Void

#### Description

An optional function that enables HTTP/2 support. If version is set to `"http2"`, HTTP/2 will be used for all underlying transfers.

This must be set on a roUrlTransfer instance prior to any data transfer. The HTTP version used by an instance cannot be changed  after the instance's first use.

For the HTTP/2 connection sharing feature, all roUrlTransfers should be made from the same thread.


#### Parameters

| Name    | Type    | Description |
| ----    | ------- | -------------- |
| version | String  | The http version to be used (for example, "http2" for HTTP/2). `"AUTO"` is the default value, which causes the roUrlTransfer connection to auto-negotiate HTTP/1.x or HTTP/2, depending on the agreement reached by client and server. |

> SetHttpVersion does not impact the connection made by the Roku Media player, which will always use HTTP/1.x.

### GetUserAgent() as String

*Available since Roku OS 12.5*

#### Description

Returns the user agent of the device, which can then be passed into server-side ad requests.

#### Return Value

The device user agent, which has the following syntax: "Roku/DVP-major.minor (major.minor.revision.build-plid)". For example, Roku/DVP‑12.0 (12.0.0.4171‑29).
