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

> The notation used in this specification is similar to C++; however, the protocol describes the network data stream format—it does not define in-memory data structures.

## Debugging target startup sequence

After an app is launched with a request to enable remote debugging, the firmware waits for a connection from the remote debugger client. Immediately after a connection is established, an initial handshake is then performed. The handshake consists of the following data being sent by each end of the connection:

```cpp
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