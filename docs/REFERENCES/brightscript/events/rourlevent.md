---
title: "roUrlEvent"
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


The roUrlTransfer component sends the roUrlEvent with the following methods:

## Supported methods

### GetInt() as Integer

Returns the type of event, which may be one of the following values:

| Event Type | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| 1          | transfer complete                                                                           |
| 2          | transfer started. Headers are available for suitable protocols. (Not currently implemented) |

### GetResponseCode() as Integer

Returns the protocol response code associated with this event. For a successful HTTP request this will be the HTTP status code 200. For unexpected errors the return value is negative. There are lots of possible negative errors from the CURL library but it's often best just to look at the text version via GetFailureReason(). 

The following table lists some of the potential errors (not all of them can be generated):

| Status | Name                           | Description                                                  |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| -1     | CURLE_UNSUPPORTED_PROTOCOL     |                                                              |
| -2     | CURLE_FAILED_INIT              |                                                              |
| -3     | CURLE_URL_MALFORMAT            |                                                              |
| -4     | CURLE_NOT_BUILT_IN             |                                                              |
| -5     | CURLE_COULDNT_RESOLVE_PROXY    |                                                              |
| -6     | CURLE_COULDNT_RESOLVE_HOST     |                                                              |
| -7     | CURLE_COULDNT_CONNECT          |                                                              |
| -8     | CURLE_FTP_WEIRD_SERVER_REPLY   |                                                              |
| -9     | CURLE_REMOTE_ACCESS_DENIED     | A service was denied by the server due to lack of access - when login fails this is not returned |
| -11    | CURLE_FTP_WEIRD_PASS_REPLY     |                                                              |
| -13    | CURLE_FTP_WEIRD_PASV_REPLY     |                                                              |
| -14    | CURLE_FTP_WEIRD_227_FORMAT     |                                                              |
| -15    | CURLE_FTP_CANT_GET_HOST        |                                                              |
| -16    | CURLE_HTTP2                    |                                                              |
| -17    | CURLE_FTP_COULDNT_SET_TYPE     |                                                              |
| -18    | CURLE_PARTIAL_FILE             |                                                              |
| -19    | CURLE_FTP_COULDNT_RETR_FILE    |                                                              |
| -21    | CURLE_QUOTE_ERROR              | Quote command failure                                        |
| -22    | CURLE_HTTP_RETURNED_ERROR      |                                                              |
| -23    | CURLE_WRITE_ERROR              |                                                              |
| -25    | CURLE_UPLOAD_FAILED            | Failed upload "command"                                      |
| -26    | CURLE_READ_ERROR               | Could open/read from file                                    |
| -27    | CURLE_OUT_OF_MEMORY            |                                                              |
| -28    | CURLE_OPERATION_TIMEDOUT       | The timeout time was reached                                 |
| -30    | CURLE_FTP_PORT_FAILED          | FTP PORT operation failed                                    |
| -31    | CURLE_FTP_COULDNT_USE_REST     | The REST command failed                                      |
| -33    | CURLE_RANGE_ERROR              | RANGE "command" didn't work                                  |
| -34    | CURLE_HTTP_POST_ERROR          |                                                              |
| -35    | CURLE_SSL_CONNECT_ERROR        | Wrong when connecting with SSL                               |
| -36    | CURLE_BAD_DOWNLOAD_RESUME      | Couldn't resume download                                     |
| -37    | CURLE_FILE_COULDNT_READ_FILE   |                                                              |
| -38    | CURLE_LDAP_CANNOT_BIND         |                                                              |
| -39    | CURLE_LDAP_SEARCH_FAILED       |                                                              |
| -41    | CURLE_FUNCTION_NOT_FOUND       |                                                              |
| -42    | CURLE_ABORTED_BY_CALLBACK      |                                                              |
| -43    | CURLE_BAD_FUNCTION_ARGUMENT    |                                                              |
| -45    | CURLE_INTERFACE_FAILED         | CURLOPT_INTERFACE failed                                     |
| -47    | CURLE_TOO_MANY_REDIRECTS       | Catch endless re-direct loops                                |
| -48    | CURLE_UNKNOWN_TELNET_OPTION    | User specified an unknown option                             |
| -49    | CURLE_TELNET_OPTION_SYNTAX     | Malformed telnet option                                      |
| -51    | CURLE_PEER_FAILED_VERIFICATION | Peer's certificate or fingerprint wasn't verified fine       |
| -52    | CURLE_GOT_NOTHING              | When this is a specific error                                |
| -53    | CURLE_SSL_ENGINE_NOTFOUND      | SSL crypto engine not found                                  |
| -54    | CURLE_SSL_ENGINE_SETFAILED     | Can not set SSL crypto engine as default                     |
| -55    | CURLE_SEND_ERROR               | Failed sending network data                                  |
| -56    | CURLE_RECV_ERROR               | Failure in receiving network data                            |
| -58    | CURLE_SSL_CERTPROBLEM          | Problem with the local certificate                           |
| -59    | CURLE_SSL_CIPHER               | Couldn't use specified cipher                                |
| -60    | CURLE_SSL_CACERT               | Problem with the CA cert (path?)                             |
| -61    | CURLE_BAD_CONTENT_ENCODING     | Unrecognized transfer encoding                               |
| -62    | CURLE_LDAP_INVALID_URL         | Invalid LDAP URL                                             |
| -63    | CURLE_FILESIZE_EXCEEDED        | Maximum file size exceeded                                   |
| -64    | CURLE_USE_SSL_FAILED           | Requested FTP SSL level failed                               |
| -65    | CURLE_SEND_FAIL_REWIND         | Sending the data requires a rewind that failed               |
| -66    | CURLE_SSL_ENGINE_INITFAILED    | Failed to initialize ENGINE                                  |
| -67    | CURLE_LOGIN_DENIED             | User, password or similar was not accepted and we failed to login |
| -68    | CURLE_TFTP_NOTFOUND            | File not found on server                                     |
| -69    | CURLE_TFTP_PERM                | Permission problem on server                                 |
| -70    | CURLE_REMOTE_DISK_FULL         | Out of disk space on server                                  |
| -71    | CURLE_TFTP_ILLEGAL             | Illegal TFTP operation                                       |
| -72    | CURLE_TFTP_UNKNOWNID           | Unknown transfer ID                                          |
| -73    | CURLE_REMOTE_FILE_EXISTS       | File already exists                                          |
| -74    | CURLE_TFTP_NOSUCHUSER          | No such user                                                 |
| -75    | CURLE_CONV_FAILED              | Conversion failed                                            |
| -76    | CURLE_CONV_REQD                | Caller must register conversion callbacks using curl_easy_setopt options CURLOPT_CONV_FROM_NETWORK_FUNCTION, CURLOPT_CONV_TO_NETWORK_FUNCTION, and CURLOPT_CONV_FROM_UTF8_FUNCTION |
| -77    | CURLE_SSL_CACERT_BADFILE       | Could not load CACERT file, missing or wrong format          |
| -78    | CURLE_REMOTE_FILE_NOT_FOUND    | Remote file not found                                        |
| -79    | CURLE_SSH                      | Error from the SSH layer, somewhat generic so the error message will be of interest when this has happened |
| -80    | CURLE_SSL_SHUTDOWN_FAILED      | Failed to shut down the SSL connection                       |

### GetFailureReason() as String

Returns a description of the failure that occurred.

### GetString() as String

For transfer complete AsyncGetToString, AsyncPostFromString and AsnycPostFromFile requests this will be the actual response body from the server. This method returns the string associated with the event.

### GetSourceIdentity() as Integer

Returns a magic number that can be matched with the value returned by the [roUrlTransfer.GetIdentity()](doc:ifurltransfer) method to determine the source of the roUrlTransfer event.

### GetResponseHeaders() as Object

Returns an [roAssociativeArray ](doc:roassociativearray)containing all the headers returned by the server for appropriate protocols (such as HTTP). Headers are only returned when the status code is greater than or equal to 200 and less than 300

### GetTargetIpAddress() as String

Returns the IP address of the destination. 

### GetResponseHeadersArray() as Object

This method returns an [roArray](doc:roarray) of [roAssociativeArrays](doc:roassociativearray), where each associative array contains a single header name/value pair. Use this function if you need access to duplicate headers, since GetResponseHeaders() returns only the last name/value pair for a given name. All headers are returned regardless of the status code