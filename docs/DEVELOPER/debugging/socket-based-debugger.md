---
title: BrightScript debug protocol
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

# BrightScript debug protocol

The Roku socket-based BrightScript debug protocol enables Roku app development to be tightly integrated into Visual Studio Code, Eclipse, and other Integrated Development Environments (IDEs). A tight integration helps expedite Roku app development as an IDE could be used to do the following:

- Write code using BrightScript syntax-directed editing and highlighting.
- Upload and run the app directly to the Roku media player.
- Communicate app stops and failures.
- Stop a running app.
- Inspect variables and stack traces of a stopped app.
- Step through a thread.
- Insert dynamic breakpoints.
- Resume a stopped app (if a fatal error has not occurred in the script).

> This protocol may be used in an interactive debugging session. Do not use it for storing data in a static file.

## Network Format

The network format of the protocol adheres to the following rules:

- Numeric values are sent in little-endian order.
- Data types are sent as a network byte stream in little-endian order.
- String values are encoded as UTF-8.

| Data Type                                | Definition                                          |
| ---------------------------------------- | --------------------------------------------------- |
| binary32float                            | IEEE-754 32-bit floating-point value                |
| binary64float                            | IEEE-754 64-bit floating-point value                |
| bool | 8-bit unsigned integer (0 = false; nonzero = true)  |
| int8                                     | 8-bit signed integer                                |
| uint8                                    | 8-bit unsigned integer                              |
| int32                                    | 32-bit signed integer                               |
| uint32                                   | 32-bit unsigned integer                             |
| int64                                    | 64-bit signed integer                               |
| uint64                                   | 64-bit unsigned integer                             |
| utf8z                                    | utf-8-encoded character stream terminated with '\0' |

> The notation used in this specification is similar to C++; however, the protocol describes the network data stream format—it does not define in-memory data structures.

## Debugging target startup sequence

After an app is launched with a request to enable remote debugging, the firmware waits for a connection from the remote debugger client. Immediately after a connection is established, an initial handshake is then performed. The handshake consists of the following data being sent by each end of the connection:

```
struct HandshakeToDVP {    // DVP = Digital Video Player (Roku device)
    uint64 magic_number;   // 0x0067756265647362LU
};

struct HandshakeFromDVP {    
    uint64 magic_number  
    uint32 protocol_major_version;
    uint32 protocol_minor_version;
    uint32 protocol_patch_version;
    uint32 remaining_packet_length;
    int64  platform_revision_timestamp;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>magic_number</td>
<td>uint64</td>
<td>The Roku Brightscript debug protocol identifier, which is the following 64-bit value :<code>0x0067756265647362LU</code>. <br /><br />This is equal to <code>29120988069524322LU</code> or the following little-endian value: <code>b'bsdebug\0</code>.</td>
</tr>
<tr>
<td>protocol_major_version<br />protocol_minor_version<br />protocol_patch_version</td>
<td>uint32</td>
<td>Each Roku OS release supports only a single version of the Roku Brightscript debug protocol: <br /><table><thead><tr><th>Roku OS</th><th>Supported Debug Protocol Version</th></tr></thead><tbody><tr><td>Roku OS 14.1</td><td>3.3.0</td></tr><tr><td>Roku OS 12.0</td><td>3.2.0</td></tr><tr><td>Roku OS 11.5</td><td>3.1.0</td></tr><tr><td>Roku OS 11.0</td><td>3.0.0</td></tr><tr><td>Roku OS 9.3, 9.4, 10.0, 10.5</td><td>2.0.0</td></tr><tr><td>Roku OS 9.2</td><td>1.0.1</td></tr></tbody></table><br />The debugger client must be updated to the protocol version number or disconnect. A change in the major version number indicates that changes that are not backwards-compatible have been made since the previous release.</td>
</tr>
<tr>
<td>remaining_packet_length</td>
<td>uint32</td>
<td>The length in bytes of the remaining data, including the <strong>remaining_packet_length</strong> itself. The debugger client must read this number of bytes.<br /><br />As of BrightScript debug protocol 3.0.0 (Roku OS 11.0), all packets from the debugging target include a <strong>packet_length</strong>. The length is always in bytes, and includes the <strong>packet_length</strong> field, itself. <br /><br />This field avoids the need for changes to the major version of the protocol because it allows a debugger client to read past data it does not understand and is not critical to debugger operations.<br /><br />The debug target may intentionally send a <strong>packet_length</strong> longer than the actual data, with a small number of trailing padding bytes to complete the length. Clients must read the entire <strong>packet_length</strong> before expecting the next packet.</td>
</tr>
<tr>
<td>platform_revision_timestamp</td>
<td>int64</td>
<td>A platform-specific implementation timestamp (in milliseconds                                         since epoch [1970-01-01T00:00:00.000Z]). <br /><br />As of BrightScript debug protocol 3.0.0 (Roku OS 11.0), a timestamp is sent to the debugger client in the initial handshake.  This timestamp is platform-specific data that is included in the system software of the platform being debugged. It is changed by the platform's vendor when there is any change that affects the behavior of the debugger.<br /><br />The value can be used in manners similar to a build number, and is primarily used to differentiate between pre-release builds of the platform being debugged.</td>
</tr>
</tbody>
</table>


The behavior after the handshake has been executed, depends on the version of the BrightScript debug protocol being used:

- **2.0.0 (and later)**: The debug target will immediately stop on the first BrightScript statement in the script and send an ALL_THREADS_STOPPED message. The debugger client (for example, an IDE) may then set dynamic breakpoints in the target before its execution. In all cases, the debugger client must send a CONTINUE command to begin executing BrightScript code.
- **1.0.1**: The debug target runs immediately after the handshake.


