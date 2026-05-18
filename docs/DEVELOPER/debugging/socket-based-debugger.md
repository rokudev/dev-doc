---
title: BrightScript debug protocol
excerpt: Socket-based protocol for integrating Roku app debugging into IDEs
deprecated: false
hidden: false
metadata:
  title: BrightScript debug protocol | Roku Developer Docs
  description: >-
    Use the BrightScript debug protocol to integrate Roku app debugging into
    Visual Studio Code, Eclipse, and other IDEs, supporting breakpoints and
    stack traces.
  robots: index
next:
  description: ''
---
The Roku socket-based BrightScript debug protocol enables Roku app development to be tightly integrated into Visual Studio Code, Eclipse, and other Integrated Development Environments (IDEs). A tight integration helps expedite Roku app development as an IDE could be used to do the following:

* Write code using BrightScript syntax-directed editing and highlighting.
* Upload and run the app directly to the Roku media player.
* Communicate app stops and failures.
* Stop a running app.
* Inspect variables and stack traces of a stopped app.
* Step through a thread.
* Insert dynamic breakpoints.
* Resume a stopped app (if a fatal error has not occurred in the script).

> This protocol may be used in an interactive debugging session. Do not use it for storing data in a static file.

## Network Format

The network format of the protocol adheres to the following rules:

* Numeric values are sent in little-endian order.
* Data types are sent as a network byte stream in little-endian order.
* String values are encoded as UTF-8.

| Data Type     | Definition                                          |
| ------------- | --------------------------------------------------- |
| binary32float | IEEE-754 32-bit floating-point value                |
| binary64float | IEEE-754 64-bit floating-point value                |
| bool          | 8-bit unsigned integer (0 = false; nonzero = true)  |
| int8          | 8-bit signed integer                                |
| uint8         | 8-bit unsigned integer                              |
| int32         | 32-bit signed integer                               |
| uint32        | 32-bit unsigned integer                             |
| int64         | 64-bit signed integer                               |
| uint64        | 64-bit unsigned integer                             |
| utf8z         | utf-8-encoded character stream terminated with '\0' |

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

<HTMLBlock>{`
<table>
  <thead>
    <tr>
      <th class="short-line">Field</th>
      <th class="short-line">Type</th>
      <th class="short-line">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="short-line">magic_number</td>
      <td class="short-line">uint64</td>
      <td class="long-line">The Roku Brightscript debug protocol identifier, which is the following 64-bit value :<code>0x0067756265647362LU</code>. <br /><br />This is equal to <code>29120988069524322LU</code> or the following little-endian value: <code>b'bsdebug\0</code>.</td>
    </tr>
    <tr>
      <td class="long-line">protocol_major_version<br />protocol_minor_version<br />protocol_patch_version</td>
      <td class="short-line">uint32</td>
      <td class="long-line">
        Each Roku OS release supports only a single version of the Roku Brightscript debug protocol:
        <br />
        <div class="hscroll">
          <table>
            <thead>
              <tr>
                <th class="short-line">Roku OS</th>
                <th class="short-line">Supported Debug Protocol Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="short-line">Roku OS 14.1</td>
                <td class="short-line">3.3.0</td>
              </tr>
              <tr>
                <td class="short-line">[Roku OS 12.0](doc:release-notes#roku-os-120)</td>
                <td class="short-line">3.2.0</td>
              </tr>
              <tr>
                <td class="short-line">[Roku OS 11.5](doc:release-notes#roku-os-115)</td>
                <td class="short-line">3.1.0</td>
              </tr>
              <tr>
                <td class="short-line">[Roku OS 11.0](doc:release-notes#roku-os-110)</td>
                <td class="short-line">3.0.0</td>
              </tr>
              <tr>
                <td class="short-line">[Roku OS 9.3](doc:release-notes#roku-os-93), [9.4](doc:release-notes#roku-os-94), [10.0](doc:release-notes#roku-os-100), [10.5](doc:release-notes#roku-os-105)</td>
                <td class="short-line">2.0.0</td>
              </tr>
              <tr>
                <td class="short-line">[Roku OS 9.2](doc:release-notes#roku-os-92)</td>
                <td class="short-line">1.0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        The debugger client must be updated to the protocol version number or disconnect. A change in the major version number indicates that changes that are not backwards-compatible have been made since the previous release.
      </td>
    </tr>
    <tr>
      <td class="short-line">remaining_packet_length</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The length in bytes of the remaining data, including the <strong>remaining_packet_length</strong> itself. The debugger client must read this number of bytes.<br /><br />As of BrightScript debug protocol 3.0.0 ([Roku OS 11.0](doc:release-notes#roku-os-110)), all packets from the debugging target include a <strong>packet_length</strong>. The length is always in bytes, and includes the <strong>packet_length</strong> field, itself. <br /><br />This field avoids the need for changes to the major version of the protocol because it allows a debugger client to read past data it does not understand and is not critical to debugger operations.<br /><br />The debug target may intentionally send a <strong>packet_length</strong> longer than the actual data, with a small number of trailing padding bytes to complete the length. Clients must read the entire <strong>packet_length</strong> before expecting the next packet.</td>
    </tr>
    <tr>
      <td class="short-line">platform_revision_timestamp</td>
      <td class="short-line">int64</td>
      <td class="long-line">A platform-specific implementation timestamp (in milliseconds since epoch \[1970-01-01T00:00:00.000Z]). <br /><br />As of BrightScript debug protocol 3.0.0 ([Roku OS 11.0](doc:release-notes#roku-os-110)), a timestamp is sent to the debugger client in the initial handshake.  This timestamp is platform-specific data that is included in the system software of the platform being debugged. It is changed by the platform's vendor when there is any change that affects the behavior of the debugger.<br /><br />The value can be used in manners similar to a build number, and is primarily used to differentiate between pre-release builds of the platform being debugged.</td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

The behavior after the handshake has been executed, depends on the version of the BrightScript debug protocol being used:

* **2.0.0 (and later)**: The debug target will immediately stop on the first BrightScript statement in the script and send an ALL_THREADS_STOPPED message. The debugger client (for example, an IDE) may then set dynamic breakpoints in the target before its execution. In all cases, the debugger client must send a CONTINUE command to begin executing BrightScript code.
* **1.0.1**: The debug target runs immediately after the handshake.

## Debugger Request Format

Remote debugging clients can send a debugger request to the debugging target (for example, the script group) using the following packet structure for the network byte stream:

```
struct DebuggerRequest {
    uint32 packet_length;
    uint32 request_id;
    uint32 command_code;
    uint8 command_arguments;
};
```

<HTMLBlock>{`
<table>
  <thead>
    <tr>
      <th class="short-line">Field</th>
      <th class="short-line">Type</th>
      <th class="short-line">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="short-line">packet_length</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The size of the packet to be sent.<br />Example: (4 + 4 + 4 + sizeof(ARGUMENTS))</td>
    </tr>
    <tr>
      <td class="short-line">request_id</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The ID of the debugger request (must be &gt;=1). This ID is included in the debugger response.</td>
    </tr>
    <tr>
      <td class="short-line">command_code</td>
      <td class="short-line">uint32</td>
      <td class="long-line">
        An enum representing the debugging command being sent, which may be one of the following values:
        <br />
        <div class="hscroll">
          <table>
            <thead>
              <tr>
                <th class="short-line">Code</th>
                <th class="short-line">Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="short-line">1</td>
                <td class="short-line">STOP</td>
              </tr>
              <tr>
                <td class="short-line">2</td>
                <td class="short-line">CONTINUE</td>
              </tr>
              <tr>
                <td class="short-line">3</td>
                <td class="short-line">THREADS</td>
              </tr>
              <tr>
                <td class="short-line">4</td>
                <td class="short-line">STACKTRACE</td>
              </tr>
              <tr>
                <td class="short-line">5</td>
                <td class="short-line">VARIABLES</td>
              </tr>
              <tr>
                <td class="short-line">6</td>
                <td class="short-line">STEP</td>
              </tr>
              <tr>
                <td class="short-line">7</td>
                <td class="short-line">ADD_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">8</td>
                <td class="long-line">LIST_BREAKPOINTS<br /><br />(<em>As of [Roku OS 11.5](doc:release-notes#roku-os-115), this command supports both conditional and non-conditional breakpoints</em>)</td>
              </tr>
              <tr>
                <td class="short-line">9</td>
                <td class="short-line">REMOVE_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">10</td>
                <td class="short-line">EXECUTE</td>
              </tr>
              <tr>
                <td class="short-line">11</td>
                <td class="short-line">ADD_CONDITIONAL_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">12</td>
                <td class="short-line">SET_EXCEPTION_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">122</td>
                <td class="short-line">EXIT_CHANNEL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        See [Debugging Commands](#debugging-commands) for more information.
      </td>
    </tr>
    <tr>
      <td class="short-line">command_arguments (optional)</td>
      <td class="short-line">uint8</td>
      <td class="long-line">Command-specific arguments (these may not be present for some commands)</td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

## Debugger Response Format

The debugger sends responses to DebuggerRequest messages in the following format:

```
struct DebuggerResponse {
    uint32 packet_length;
    uint32 request_id;
    uint32 error_code;
    uint32 error_flags;
    uint8[] error_data;
    uint8 data;
};
```

<HTMLBlock>{`
<table>
  <thead>
    <tr>
      <th class="short-line">Field</th>
      <th class="short-line">Type</th>
      <th class="short-line">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="short-line">packet_length</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The size of the packet to be sent.<br />Example: (4 + 4 + 4 + sizeof(ARGUMENTS))</td>
    </tr>
    <tr>
      <td class="short-line">request_id</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The ID of the debugger request (must be &gt;=1). This ID is included in the debugger response.</td>
    </tr>
    <tr>
      <td class="short-line">command_code</td>
      <td class="short-line">uint32</td>
      <td class="long-line">
        An enum representing the debugging command being sent, which may be one of the following values:
        <br />
        <div class="hscroll">
          <table>
            <thead>
              <tr>
                <th class="short-line">Code</th>
                <th class="short-line">Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="short-line">1</td>
                <td class="short-line">STOP</td>
              </tr>
              <tr>
                <td class="short-line">2</td>
                <td class="short-line">CONTINUE</td>
              </tr>
              <tr>
                <td class="short-line">3</td>
                <td class="short-line">THREADS</td>
              </tr>
              <tr>
                <td class="short-line">4</td>
                <td class="short-line">STACKTRACE</td>
              </tr>
              <tr>
                <td class="short-line">5</td>
                <td class="short-line">VARIABLES</td>
              </tr>
              <tr>
                <td class="short-line">6</td>
                <td class="short-line">STEP</td>
              </tr>
              <tr>
                <td class="short-line">7</td>
                <td class="short-line">ADD_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">8</td>
                <td class="long-line">LIST_BREAKPOINTS<br /><br />(<em>As of [Roku OS 11.5](doc:release-notes#roku-os-115), this command supports both conditional and non-conditional breakpoints</em>)</td>
              </tr>
              <tr>
                <td class="short-line">9</td>
                <td class="short-line">REMOVE_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">10</td>
                <td class="short-line">EXECUTE</td>
              </tr>
              <tr>
                <td class="short-line">11</td>
                <td class="short-line">ADD_CONDITIONAL_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">12</td>
                <td class="short-line">SET_EXCEPTION_BREAKPOINTS</td>
              </tr>
              <tr>
                <td class="short-line">122</td>
                <td class="short-line">EXIT_CHANNEL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        See [Debugging Commands](#debugging-commands) for more information.
      </td>
    </tr>
    <tr>
      <td class="short-line">command_arguments (optional)</td>
      <td class="short-line">uint8</td>
      <td class="long-line">Command-specific arguments (these may not be present for some commands)</td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

<br />

## Debugger Update Format

The debugger sends an update message when a state change occurs in the application being debugged, which may or may not have been requested by the debugging client or user. DebuggerUpdate messages have a similar format as DebuggerResponse messages, except that the **request_id** is always **0**, and it includes an **update_type** field, which specifies the type of update being sent.

```
struct DebuggerUpdate {
		uint32 packet_length;
		uint32 request_id;
		uint32 error_code;
		uint32 update_type;
		uint8 data;
};
```

<HTMLBlock>{`
<table>
  <thead>
    <tr>
      <th class="short-line">Field</th>
      <th class="short-line">Type</th>
      <th class="short-line">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="short-line">packet_length</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The length of the packet in bytes, including this field</td>
    </tr>
    <tr>
      <td class="short-line">request_id</td>
      <td class="short-line">uint32</td>
      <td class="long-line">The ID of the debugger request, which must be <strong>0</strong>. This ID is included in the debugger response. <br /><br /><strong>0</strong> is a reserved value for the <strong>request_id</strong> in DebuggerUpdate messages; therefore, a debugging client may not send a DebuggerRequest with a <strong>request_id</strong> of 0.</td>
    </tr>
    <tr>
      <td class="short-line">error_code</td>
      <td class="short-line">uint32</td>
      <td class="long-line">
        An enum indicating the status of the request. If the debugger request was successful, a value of <strong>0</strong> is returned. This may be one of the following values:
        <br />
        <div class="hscroll">
          <table>
            <thead>
              <tr>
                <th class="short-line">Code</th>
                <th class="short-line">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="short-line">0</td>
                <td class="short-line">OK</td>
              </tr>
              <tr>
                <td class="short-line">1</td>
                <td class="short-line">OTHER_ERR</td>
              </tr>
              <tr>
                <td class="short-line">2</td>
                <td class="short-line">UNDEFINED_COMMAND</td>
              </tr>
              <tr>
                <td class="short-line">3</td>
                <td class="short-line">CANT_CONTINUE</td>
              </tr>
              <tr>
                <td class="short-line">4</td>
                <td class="short-line">NOT_STOPPED</td>
              </tr>
              <tr>
                <td class="short-line">5</td>
                <td class="short-line">INVALID_ARGS</td>
              </tr>
              <tr>
                <td class="short-line">6</td>
                <td class="short-line">THREAD_DETACHED</td>
              </tr>
              <tr>
                <td class="short-line">7</td>
                <td class="short-line">EXECUTION_TIMEOUT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr>
      <td class="short-line">update_type</td>
      <td class="short-line">uint32</td>
      <td class="long-line">
        An enum representing the update being sent by the debugger, which may be one of the following values:
        <br />
        <div class="hscroll">
          <table>
            <thead>
              <tr>
                <th class="short-line">Code</th>
                <th class="short-line">Update</th>
                <th class="short-line">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="short-line">0</td>
                <td class="short-line">UNDEF</td>
                <td class="short-line"></td>
              </tr>
              <tr>
                <td class="short-line">1</td>
                <td class="short-line">IO_PORT_OPENED</td>
                <td class="long-line">The remote debugging client should connect to the port included in the <strong>data</strong> field to retrieve the running script's output. Only reads are allowed on the I/O connection.</td>
              </tr>
              <tr>
                <td class="short-line">2</td>
                <td class="short-line">ALL_THREADS_STOPPED</td>
                <td class="long-line">All threads are stopped and an <a href="#allthreadsstopped">ALL_THREADS_STOPPED</a> message is sent to the debugging client. <br /><br />The <strong>data</strong> field includes information on why the threads were stopped.</td>
              </tr>
              <tr>
                <td class="short-line">3</td>
                <td class="short-line">THREAD_ATTACHED</td>
                <td class="long-line">A new thread attempts to execute a script when all threads have already been stopped. The new thread is immediately stopped and is "attached" to the debugger so that the debugger can inspect the thread, its stack frames, and local variables. <br /><br />Additionally, when a thread executes a step operation, that thread detaches from the debugger temporarily, and a <a href="#threadattached">THREAD_ATTACHED</a> message is sent to the debugging client when the thread has completed its step operation and has re-attached to the debugger.<br /><br />The <strong>data</strong> field includes information on why the threads were stopped.</td>
              </tr>
              <tr>
                <td class="short-line">4</td>
                <td class="short-line">BREAKPOINT_ERROR</td>
                <td class="long-line">A compilation or runtime error occurred when evaluating the <strong>cond_expr</strong> of a conditional breakpoint.</td>
              </tr>
              <tr>
                <td class="short-line">5</td>
                <td class="short-line">COMPILE_ERROR</td>
                <td class="short-line">A compilation error occurred.</td>
              </tr>
              <tr>
                <td class="short-line">6<br /><br /><em>Available since [Roku OS 12.0](doc:release-notes#roku-os-120)</em></td>
                <td class="short-line">BREAKPOINT_VERIFIED</td>
                <td class="long-line">A breakpoint has successfully been applied to an executable line of code.</td>
              </tr>
              <tr>
                <td class="short-line">7<br /><br /><em>Available since [Roku OS 12.0](doc:release-notes#roku-os-120)</em></td>
                <td class="short-line">PROTOCOL_ERROR</td>
                <td class="long-line">An unrecoverable error has occurred on the protocol stream. As a result, the debug target is terminated.</td>
              </tr>
              <tr>
                <td class="short-line">8<br /><br /><em>Available since Roku OS 14.1</em></td>
                <td class="short-line">EXCEPTION_BREAKPOINT_ERROR</td>
                <td class="long-line">A compilation or runtime error has occurred when evaluating the <strong>cond_expr</strong> of an exception breakpoint.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
    <tr>
      <td class="short-line">data</td>
      <td class="short-line">uint8</td>
      <td class="long-line">The update data returned based on the <strong>update_type</strong>. This may be one of the following values:<br /><ul>
          <li>If the <strong>update_type</strong> is IO_PORT_OPENED, the <strong>data</strong> field contains the port number (uint32) to which the debugging client should connect to read the script's output.</li>
          <li>If the <strong>update_type</strong> is ALL_THREADS_STOPPED, the <strong>data</strong> field contains a structure named <strong>AllThreadsStoppedUpdateData</strong>. See <a href="#allthreadsstopped">AllThreadsStopped</a> for more information.</li>
          <li>If the <strong>update_type</strong> is THREAD_ATTACHED, the <strong>data</strong> field contains a structure named <strong>ThreadAttachedUpdateData</strong>. See <a href="#threadattached">ThreadAttached</a> for more information.</li>
      </ul></td>
    </tr>
  </tbody>
</table>
`}</HTMLBlock>

### AllThreadsStopped

If the **update_type** in a DebuggerUpdate message is set to ALL_THREADS_STOPPED, the **data** field contains a structure named **AllThreadsStoppedUpdateData** that provides the reason for the stop. The **AllThreadsStoppedUpdateData** structure has the following syntax:

```
struct AllThreadsStoppedUpdateData{
		int32 primary_thread_index;
		uint8 stop_reason;
		utf8z stop_reason_detail;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">primary_thread_index</td>
<td class="short-line">int32</td>
<td class="long-line">The index of the primary thread that initiated the stop. This is -1 if the thread is unknown.</td>
</tr>
<tr>
<td class="short-line">stop_reason</td>
<td class="short-line">uint8</td>
<td class="long-line">An enum describing why the thread was stopped. This may be one of the following values:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Reason</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">UNDEFINED</td>
<td class="short-line">Uninitialized stopReason.</td>
</tr>
<tr>
<td class="short-line">1</td>
<td class="short-line">NOT_STOPPED</td>
<td class="short-line">Thread is running.</td>
</tr>
<tr>
<td class="short-line">2</td>
<td class="short-line">NORMAL_EXIT</td>
<td class="short-line">Thread exited.</td>
</tr>
<tr>
<td class="short-line">3</td>
<td class="short-line">STOP_STATEMENT</td>
<td class="short-line">Stop statement executed.</td>
</tr>
<tr>
<td class="short-line">4</td>
<td class="short-line">BREAK</td>
<td class="long-line">Another thread in the group encountered an error or other reason outside this thread.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">RUNTIME_ERROR</td>
<td class="long-line">Thread stopped because of an error during execution.</td>
</tr>
<tr>
<td class="short-line">6</td>
<td class="short-line">CAUGHT_RUNTIME_ERROR</td>
<td class="long-line">Thread stopped due to a caught runtime error. This only occurs if exception breakpoints are configured to stop on caught exceptions.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">stop_reason_detail</td>
<td class="short-line">utf8z</td>
<td class="long-line">Provides extra details (for example, "Divide by Zero", "STOP", "BREAK")</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### ThreadAttached

If the **update_type** in a DebuggerUpdate message is set to THREAD_ATTACHED, the **data** field contains a structure named **ThreadAttachedUpdateData** that provides the reason for the stop. The **ThreadAttachedUpdateData** structure has the following syntax (see [AllThreadsStopped](#allthreadsstopped) for the details of each field):

```
struct ThreadAttachedUpdateData{
     int32 thread_index;
     uint8 stop_reason;
     utf8z stop_reason_detail;
}
```

### BreakpointError

A BREAKPOINT_ERROR is sent if a compilation or runtime error occurs while evaluating the cond_expr of a conditional breakpoint. In this case, the **update_type** field in a DebuggerUpdate message is set to BREAKPOINT_ERROR, and the **data** field contains a structure named **BreakpointErrorUpdateData** that provides the reason for the error. The **BreakpointErrorUpdateData** structure has the following syntax:

```
struct BreakpointErrorUpdateData {
    uint32                    flags;
    uint32                    breakpoint_id;
    uint32                    num_compile_errors;
    utf8z[num_compile_errors] compile_errors;
    uint32                    num_runtime_errors;
    utf8z[num_runtime_errors] runtime_errors;
    uint32                    num_other_errors;
    utf8z[num_other_errors]   other_errors;
}
```

| Field              | Type                      | Summary                                                                                           |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------------------------- |
| flags              | bool                      | This field is always set to 0. It is reserved for future use.                                     |
| breakpoint_id      | uint8                     | The unique ID of the breakpoint (values greater than 0 are valid; a value of 0 denotes an error). |
| num_compile_errors | uint32                    | The number of compile-time errors.                                                                |
| compile_errors     | utf8z[num_compile_errors] | The list of compile-time errors.                                                                  |
| num_runtime_errors | uint32                    | The number of runtime errors.                                                                     |
| runtime_errors     | utf8z[num_runtime_errors] | The list of runtime errors.                                                                       |
| num_other_errors   | uint32                    | The number of other errors (for example, permission errors).                                      |
| other_errors       | utf8z[num_other_errors]   | The list of other errors.                                                                         |

### CompileError

A COMPILE_ERROR is sent if a compilation error occurs. In this case, the **update_type** field in a DebuggerUpdate message is set to COMPILE_ERROR, and the **data** field contains a structure named **CompileErrorUpdateData** that provides the reason for the error. The **CompileErrorUpdateData** structure has the following syntax:

```
struct CompileErrorUpdateData {
    uint32 flags;
    utf8z  error_string;
    utf8z  file_spec;
    uint32 line_number;
    utf8z  library_name;
}
```

| Field  | Type         | Summary                                                                                                                                                                                                                                                                  |
| ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| flags  | bool         | This field is always set to 0 (reserved for future use).                                                                                                                                                                                                                 |
| utf8z  | error_string | A text message describing the compiler error.                                                                                                                                                                                                                            |
| utf8z  | file_spec    | A simple file path indicating where the compiler error occurred. It maps to all matching file paths in the app or its libraries <br /><br />`"pkg:/<filepath>"` specifies a file in the app<br /><br />`"lib:/<library_name>/<filepath>"` specifies a file in a library. |
| uint32 | line_number  | The line number where the compile error occurred.                                                                                                                                                                                                                        |
| utf8z  | library_name | The name of the library where the compile error occurred.                                                                                                                                                                                                                |

### BreakpointVerified

_Available since [Roku OS 12.0](doc:release-notes#roku-os-120)_

A BREAKPOINT_VERIFIED message is sent when a breakpoint has successfully been applied to an executable line of code. Breakpoints may be added at any time; however, the changes may not be applied immediately if the debug target is running.  In this case, the **update_type** field in a DebuggerUpdate message is set to BREAKPOINT_VERIFIED, and the **data** field contains a structure named **BreakpointVerifiedUpdateData** that provides the ID assigned to the verified breakpoint. The **BreakpointVerifiedUpdateData** structure has the following syntax:

```
struct BreakpointVerifiedUpdateData {
    uint32 flags // Reserved for future use
    uint32 num_breakpoints
    VerifiedBreakpointInfo[num_breakpoints]
}
```

```
struct VerifiedBreakpointInfo {
    uint32 breakpoint_id
}
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">bool</td>
<td class="long-line">This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td class="short-line">VerifiedBreakpointInfo</td>
<td class="short-line">array</td>
<td class="long-line">A list of verified breakpoints. Each verified breakpoint has the following syntax:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">breakpoint_id</td>
<td class="short-line">utf8z</td>
<td class="long-line">The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### ProtocolError

_Available since [Roku OS 12.0](doc:release-notes#roku-os-120)_

A PROTOCOL_ERROR message is sent when an unrecoverable error has occurred on the protocol stream. As a result, the debug target is terminated. In this case, the **update_type** field in a DebuggerUpdate message is set to PROTOCOL_ERROR, and the **data** field contains a structure named **ProtocolErrorUpdateData** that provides the reason for the protocol error. The **ProtocolErrorUpdateData** structure has the following syntax:

```
struct ProtocolErrorUpdateData {
    uint32 flags // Reserved for future use
    uint32 protocol_error_code
}
```

```
enum ProtocolErrorCode {
    UNDEFINED = 0,
    IO_CONSOLE_FAIL = 1
}
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">bool</td>
<td class="long-line">This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td class="short-line">protocol_error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">An enum indicating the type of protocol error that has occurred. This may be one of the following values:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Error</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">UNDEFINED</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">1</td>
<td class="short-line">IO_CONSOLE_FAIL</td>
<td class="long-line">The connection on the I/O port failed (this typically means that the client did not connect within the timeout).</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### ExceptionBreakpointError

An EXCEPTION_BREAKPOINT_ERROR is sent if a compilation or runtime error occurs while evaluating the cond_expr of an exception breakpoint. In this case, the **update_type** field in a DebuggerUpdate message is set to EXCEPTION_BREAKPOINT_ERROR, and the **data** field contains a structure named **ExceptionBreakpointErrorUpdateData** that provides the reason for the error. The **ExceptionBreakpointErrorUpdateData** structure has the following syntax:

```
struct ExceptionBreakpointErrorUpdateData {
    uint32                    flags;
    uint32                    filter_id;
    uint32                    num_compile_errors;
    utf8z[num_compile_errors] compile_errors;
    uint32                    num_runtime_errors;
    utf8z[num_runtime_errors] runtime_errors;
    uint32                    num_other_errors;
    utf8z[num_other_errors]   other_errors;
    uint32                    line_number;
    utf8z                     file_path;
}
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">bool</td>
<td class="long-line">This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td class="short-line">filter_id</td>
<td class="short-line">uint32</td>
<td class="long-line">The filter ID of the breakpoint <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Filter ID</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">1</td>
<td class="short-line">CAUGHT</td>
<td class="short-line">Stop on all caught exceptions.</td>
</tr>
<tr>
<td class="short-line">2</td>
<td class="short-line">UNCAUGHT</td>
<td class="short-line">Stop on all uncaught exceptions.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">num_compile_errors</td>
<td class="short-line">uint32</td>
<td class="short-line">The number of compile-time errors.</td>
</tr>
<tr>
<td class="short-line">compile_errors</td>
<td class="short-line">utf8z[num_compile_errors]</td>
<td class="short-line">The list of compile-time errors.</td>
</tr>
<tr>
<td class="short-line">num_runtime_errors</td>
<td class="short-line">uint32</td>
<td class="short-line">The number of runtime errors.</td>
</tr>
<tr>
<td class="short-line">runtime_errors</td>
<td class="short-line">utf8z[num_runtime_errors]</td>
<td class="short-line">The list of runtime errors.</td>
</tr>
<tr>
<td class="short-line">num_other_errors</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of other errors (for example, permission errors).</td>
</tr>
<tr>
<td class="short-line">other_errors</td>
<td class="short-line">utf8z[num_other_errors]</td>
<td class="short-line">The list of other errors.</td>
</tr>
<tr>
<td class="short-line">line_number</td>
<td class="short-line">uint32</td>
<td class="long-line">The line number where the condition failed to evaluate.</td>
</tr>
<tr>
<td class="short-line">file_path</td>
<td class="short-line">utf8z</td>
<td class="long-line">the file path where the condition failed to evaluate.</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Debugging Commands

The BrightScript debugger supports the following debug commands:

| Debug Command               | Description                                                                                                     | Access Scope                                                                                                                                                                                                                                                                                | Arguments                                                                               | Response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STOP                        | Stop all threads in application. Enter into debugger.<br /><br />Individual threads can not be stopped/started. | Application is running                                                                                                                                                                                                                                                                      | none                                                                                    | No response (OK or Error if successful).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| CONTINUE                    | Exit from debugger and continue execution of all threads.                                                       | Debugger is active. All threads are stopped                                                                                                                                                                                                                                                 | none                                                                                    | [DebuggerResponse](#debugger-response-format) with no payload (OK or Error if successful).                                                                                                                                                                                                                                                                                                                                                                                                    |
| THREADS                     | Application threads info                                                                                        | Debugger is active. All threads are stopped.                                                                                                                                                                                                                                                | none                                                                                    | A [ThreadsResponse](#threadsresponse) struct.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| STACKTRACE                  | Get the stack trace of a specific thread.                                                                       | Debugger is active. All threads are stopped.                                                                                                                                                                                                                                                | uint32 thread_index                                                                     | A [StackTraceResponse](#stacktraceresponse) struct.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| VARIABLES                   | Listing of variables accessible from selected thread and stack frame.                                           | Debugger is active, all thread                                                                                                                                                                                                                                                              | [variables arguments](#variables-arguments)                                             | A [VariablesResponse](#variablesresponse) struct.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| STEP                        | Execute one step on a specified thread.                                                                         | Debugger is active. All threads are stopped.<br /><br />As of [Roku OS 14.6](doc:release-notes#roku-os-146), you can use the STEP command to step over and out of SceneGraph observer callbacks and functions called via [CallFunc](/docs/developer-program/core-concepts/handling-application-events.md#functional-fields). | [step arguments](#step-arguments)                                                       | [DebuggerResponse](#debugger-response-format) with no payload (OK or Error if successful).<br /><br />If the STEP command is valid, the debugging target responds immediately with an OK response. The specified thread will then detach from the debugger, execute briefly as specified by the **step_type** parameter, and then re-attach to the debugger.<br /><br />The re-attachment causes another [THREAD_ATTACHED](#threadattached) update message to be sent to the debugger client. |
| ADD_BREAKPOINTS             | Add a dynamic breakpoint.                                                                                       | Debugger is active. Application is active (may be stopped or running).                                                                                                                                                                                                                      | An [AddBreakpointsRequestArgs](#addbreakpointsrequestargs) struct.                      | An [AddBreakpointsResponseData](#addbreakpointsresponsedata) struct.<br /><br />If a redundant breakpoint is attempted to be added, the ID of the previous breakpoint is returned and the debugging target is not affected.                                                                                                                                                                                                                                                                   |
| LIST_BREAKPOINTS            | Lists existing dynamic and conditional breakpoints and their status.                                            | Debugger is active. All threads in script group are stopped.                                                                                                                                                                                                                                | none                                                                                    | A [ListBreakpointsResponseData](#listbreakpointsresponsedata) struct.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| REMOVE_BREAKPOINTS          | Removes dynamic breakpoints.                                                                                    | Debugger is active. All threads in script group are stopped.                                                                                                                                                                                                                                | A [RemoveBreakpointsRequestArgs](#removebreakpointsrequestargs) struct.                 | A [RemoveBreakpointsResponseData](#removebreakpointsrequestargs) struct.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| EXECUTE                     | Executes code in a specific stack frame.                                                                        | Debugger is active                                                                                                                                                                                                                                                                          | [execute arguments](#execute-arguments)                                                 | [ExecuteResponseData](#executeresponsedata)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ADD_CONDITIONAL_BREAKPOINTS | Adds a conditional breakpoint.                                                                                  | Debugger is active. App is active (may be stopped). The app or script must be stopped for an ADD_CONDITIONAL_BREAKPOINTS request to be accepted.                                                                                                                                            | An [AddConditionalBreakpointsRequestArgs](#addconditonalbreakpointsrequestargs) struct. | An [AddConditionalBreakpointsResponseData](#addconditonalbreakpointsresponsedata) struct.                                                                                                                                                                                                                                                                                                                                                                                                     |
| SET_EXCEPTION_BREAKPOINTS   | Configure exception breakpoints.                                                                                | Debugger is active                                                                                                                                                                                                                                                                          | A [SetExceptionBreakpointsRequestArgs](#setexceptionbreakpointsrequestargs) struct.     | A [SetExceptionBreakpointsResponseData](#setexceptionbreakpointsresponsedata) struct.                                                                                                                                                                                                                                                                                                                                                                                                         |

### ThreadsResponse

The **ThreadsResponse** struct has the following syntax:

```
struct ThreadsResponse{
    uint32 threads_count;
    ThreadInfo[] threads;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">threads_count</td>
<td class="short-line">uint32</td>
<td class="short-line">The number of threads in the response.</td>
</tr>
<tr>
<td class="short-line">threads</td>
<td class="short-line">ThreadInfo[]</td>
<td class="long-line">An array of ThreadInfo structs. A ThreadInfo struct has the following syntax: <br><pre><code>struct ThreadInfo{
    uint8 flags;
    uint8 stop_reason;
    utf8z stop_reason_detail;
    uint32 line_number;
    utf8z function_name;
    utf8z file_path;
    utf8z code_snippet;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">uint8</td>
<td class="long-line">Contains a <strong>ThreadInfoFlags</strong> enum, IS_PRIMARY, which indicates whether this thread likely caused the stop or failure. IS_PRIMARY is set to 0x01 if true. <br><br>This enum uses a bitwise mask that enables it to fit into 8 bits.</td>
</tr>
<tr>
<td class="short-line">stop_reason</td>
<td class="short-line">uint32</td>
<td class="long-line">An enum describing why the thread was stopped. This may be one of the following values:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Reason</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">UNDEFINED</td>
<td class="short-line">Uninitialized stopReason.</td>
</tr>
<tr>
<td class="short-line">1</td>
<td class="short-line">NOT_STOPPED</td>
<td class="short-line">Thread is running.</td>
</tr>
<tr>
<td class="short-line">2</td>
<td class="short-line">NORMAL_EXIT</td>
<td class="short-line">Thread exited.</td>
</tr>
<tr>
<td class="short-line">3</td>
<td class="short-line">STOP_STATEMENT</td>
<td class="short-line">Stop statement executed.</td>
</tr>
<tr>
<td class="short-line">4</td>
<td class="short-line">BREAK</td>
<td class="long-line">Another thread in the group encountered an error, this thread completed a step operation, or other reason outside this thread.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">RUNTIME_ERROR</td>
<td class="long-line">Thread stopped because of an error during execution.</td>
</tr>
</tbody>
</table></div><br><blockquote>
<p>The stop_reason is an 8-bit value (same as in other objects in this protocol); however, it is sent in the ThreadsResponse as a 32-bit value for historical purposes.</p>
</blockquote></td>
</tr>
<tr>
<td class="short-line">stop_reason_detail</td>
<td class="short-line">utf8z</td>
<td class="long-line">Provides extra details about the stop (for example, "Divide by Zero", "STOP", "BREAK")</td>
</tr>
<tr>
<td class="short-line">line_number</td>
<td class="short-line">uint32</td>
<td class="long-line">The line number where the stop or failure occurred.</td>
</tr>
<tr>
<td class="short-line">function_name</td>
<td class="short-line">utf8z</td>
<td class="short-line">The function where the stop or failure occurred.</td>
</tr>
<tr>
<td class="short-line">file_path</td>
<td class="short-line">utf8z</td>
<td class="short-line">The file where the stop or failure occurred.</td>
</tr>
<tr>
<td class="short-line">code_snippet</td>
<td class="short-line">utf8z</td>
<td class="short-line">The code causing the stop or failure.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### StackTraceResponse

The **StackTraceReponse** struct has the following syntax:

```
struct StackTraceResponse{
    uint32 stack_size;
    StackEntry[] entries;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">stack_size</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of stack entries in the <strong>entires</strong> array.</td>
</tr>
<tr>
<td class="short-line">entries</td>
<td class="short-line">StackEntry[]</td>
<td class="long-line">An array of StrackEntry structs. entries[0] contains the last function called; entries[stack_size-1]  contains the first function called. Debugging clients may reverse the entries to match developer expectations.<br><br>A StrackEntry struct has the following syntax: <br><pre><code>struct StackEntry{
    uint32 line_number;
    utf8z function_name;
    utf8z file_name;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">line_number</td>
<td class="short-line">uint32</td>
<td class="long-line">The line number where the stop or failure occurred.</td>
</tr>
<tr>
<td class="short-line">function_name</td>
<td class="short-line">utf8z</td>
<td class="short-line">The function where the stop or failure occurred.</td>
</tr>
<tr>
<td class="short-line">file_name</td>
<td class="short-line">utf8z</td>
<td class="short-line">The file where the stop or failure occurred.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### Variables arguments

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">variable_request_flags</td>
<td class="short-line">uint8</td>
<td class="long-line">Contains one the following <strong>VariableRequestFlags</strong> enums:<table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET_CHILD_KEYS</td>
<td class="long-line">Indicates whether the VARIABLES response includes the child keys for container types like lists and associative arrays. If this is set to true (0x01), the VARIABLES response include the child keys.</td>
</tr>
<tr>
<td class="short-line">CASE_SENSITIVITY_OPTIONS</td>
<td class="long-line">Enables the client application to send <strong>path_force_case_insensitive</strong> data</td>
</tr>
<tr>
<td class="short-line">GET_VIRTUAL_KEYS</td>
<td class="long-line">Indicates whether the VARIABLES response includes virtual keys for the requested paths. See <a href="#virtual-variables">Virtual Variables</a></td>
</tr>
<tr>
<td class="long-line">VIRTUAL_PATH_INCLUDED <br> <br><em>Available since Roku OS 14.1</em></td>
<td class="long-line">Enable the client application to sent <strong>path_is_virtual</strong> data.</td>
</tr>
</tbody>
</table><br><br>This enum uses a bitwise mask that enables it to fit into 8 bits.</td>
</tr>
<tr>
<td class="short-line">thread_index</td>
<td class="short-line">uint32</td>
<td class="short-line">The index of the thread containing the variable.</td>
</tr>
<tr>
<td class="short-line">stack_frame_index</td>
<td class="short-line">uint32</td>
<td class="long-line">The index of the frame returned from the STACKTRACE command.<br>The 0 index contains the first function called; nframes-1 contains the last. This indexing does not match the order of the frames returned from the STACKTRACE command</td>
</tr>
<tr>
<td class="short-line">variable_path_len</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of <strong>variable_path</strong> entries. If this is set to 0, the variables that are accessible from the specified stack frame are returned.</td>
</tr>
<tr>
<td class="short-line">variable_path_entries</td>
<td class="short-line">utf8z[]</td>
<td class="long-line">A set of one or more path entries to the variable to be inspected. For example, <code>m.top.myarray[6]</code> can be accessed with <code>["m","top","myarray","6"]</code>. <br><br>If no path is specified, the variables accessible from the specified stack frame are returned.</td>
</tr>
<tr>
<td class="short-line">path_force_case_insensitive</td>
<td class="short-line">bool</td>
<td class="long-line">Forces a case-insensitive lookup of the corresponding path entry when enabled.<br><br>Enabling this flag also requires the <strong>variable_request_flags</strong> argument to be set to CASE_SENSITIVITY_OPTIONS. This is useful for debugging scripts using "." notation for associative arrays, which is always case insensitive for all object types.</td>
</tr>
<tr>
<td class="long-line">path_is_virtual  <br><br><em>Available since Roku OS 14.1</em></td>
<td class="short-line">bool[]</td>
<td class="long-line">Indicates that the path entry is virtual and does not correspond to a real variable. <br><br>Enabling this flag also requires <strong>variable_request_flags</strong> to be set to VIRTUAL_PATH_INCLUDED.</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

### VariablesResponse

The **VariablesResponse** struct has the following syntax:

```
struct VariablesResponse{
    uint32 num_variables;
    VariableInfo[] variables;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_variables</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of variables in the <strong>variables</strong> array.</td>
</tr>
<tr>
<td class="short-line">variables</td>
<td class="short-line">VariableInfo[]</td>
<td class="long-line">An array of VariableInfo structs. A VariableInfo struct has the following syntax: <br><pre><code>struct VariableInfo{
    uint8 flags;
    uint8 variable_type;
    utf8z name;
    uint32 ref_count;
    uint8 key_type;
    uint32 element_count;
    void* value;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">uint8</td>
<td class="long-line">The flags that determine which fields are included in the <strong>VariableInfo</strong> struct. This field is always listed, and it may be set to one of the following values: <br><ul>
<li>0x01 = IS_CHILD_KEY (the value is a child of the requested variable; for example, an element of an array or field of an AA)</li>
<li>0x02 = IS_CONST (value is constant)</li>
<li>0x04 = IS_CONTAINER (the referenced value is a container; for example, a list or array)</li>
<li>0x08 = IS_NAME_HERE   (the name is included in this VariableInfo)</li>
<li>0x10 = IS_REF_COUNTED (the value is reference-counted).</li>
<li>0x20 = IS_VALUE_HERE  (the value is included in this VariableInfo)</li>
<li>0x40 = IS_KEYS_CASE_SENSITIVE (the value is a container with case-sensitive keys)</li>
<li>0x80 = IS_VIRTUAL (the value is virtual and does not correspond to a real variable)</li>
</ul></td>
</tr>
<tr>
<td class="short-line">variable_type</td>
<td class="short-line">Uint8</td>
<td class="long-line">Contains an enum, <strong>ValueType</strong>, which indicates the type of variable/value. This field is always listed, and it may be set to one of the following values:<br><ul>
<li>1 = AA</li>
<li>2 = ARRAY</li>
<li>3 = BOOLEAN</li>
<li>4 = DOUBLE</li>
<li>5 = FLOAT</li>
<li>6 = FUNCTION</li>
<li>7 = INTEGER</li>
<li>8 = INTERFACE</li>
<li>9 = INVALID = 9 (literal BrightScript Invalid value)</li>
<li>10 = LIST</li>
<li>11 = LONG_INTEGER</li>
<li>12 = OBJECT</li>
<li>13 = STRING</li>
<li>14 = SUBROUTINE</li>
<li>15 = SUBTYPED_OBJECT</li>
<li>16 = UNINITIALIZED (the variable exists, but it has no value or type)</li>
<li>17 = UNKNOWN (the variable is valid, but its type is unknown yet not undefined)</li>
</ul></td>
</tr>
<tr>
<td class="short-line">name</td>
<td class="short-line">utf8z</td>
<td class="long-line">The variable name. The field is only listed if the <strong>flags</strong> field includes the  IS_NAME_HERE flag.</td>
</tr>
<tr>
<td class="short-line">ref_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of references this variable has. The field is only listed if the <strong>flags</strong> field includes the  IS_REF_COUNTED flag.</td>
</tr>
<tr>
<td class="short-line">key_type</td>
<td class="short-line">uint8</td>
<td class="long-line">The type of keys in the container. The field is only listed if the <strong>flags</strong> field includes the IS_CONTAINER flag.<br><br>This field contains an enum, <strong>ValueType</strong>, which indicates the type of variable/value (see the <strong>variable_type</strong> field for more information).</td>
</tr>
<tr>
<td class="short-line">element_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of elements in the container. The field is only listed if the <strong>flags</strong> field includes the IS_CONTAINER flag</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">void*</td>
<td class="long-line">A type-dependent value based on the <strong>variable_type</strong> field. It is not present for all types.</td>
</tr>
</tbody>
</table></div><br>The data segment of a VariableInfo byte stream contains one of the following data sets : <br><br><ul>
<li>Value_AA {no data}  (use GET_CHILD_KEYS in request to get contents)</li>
<li>Value_Array {no data}</li>
<li>Value_Boolean {uint8 value;}        // 0 = false, otherwise true</li>
<li>Value_Double {binary64float value;}</li>
<li>Value_Float {binary32float value;}</li>
<li>Value_Function {uint8 function_name;}</li>
<li>Value_Integer {int32 value;}</li>
<li>Value_Interface {utf8z interface_name;}</li>
<li>Value_Invalid {no data}</li>
<li>Value_List {no data}</li>
<li>Value_LongInteger {int64 value;}</li>
<li>Value_Object {utf8z class_name;}</li>
<li>Value_String {utf8z value;}</li>
<li>Value_Subroutine {utf8z subroutine_name;}</li>
<li>Value_SubtypedObject {utf8z class_name; utf8z subtype_name;}</li>
<li>Value_Uninitialized {no data}</li>
<li>Value_Unknown {no data}</li>
</ul></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### Step arguments

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Argument
      </th>
      <th>
        Type
      </th>
      <th>
        Summary
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        thread_index
      </td>
      <td>
        uint32
      </td>
      <td>
        The index of the thread to step through.
      </td>
    </tr>
    <tr>
      <td>
        step_type
      </td>
      <td>
        uint8
      </td>
      <td>
        Contains a <strong>StepType</strong> enum, indicating the type of step action to be executed. This may be one of the following values:
        <br /><br />
        <ul>
          <li>0 = STEP_TYPE_NONE</li>
          <li>1 = STEP_TYPE_LINE</li>
          <li>2 = STEP_TYPE_OUT</li>
          <li>3 = STEP_TYPE_OVER</li>
        </ul>
      </td>
    </tr>
  </tbody>
</Table>

### Execute arguments

| Argument    | Type   | Summary                                               |
| ----------- | ------ | ----------------------------------------------------- |
| thread_idx  | uint32 | The index of the thread to be executed.               |
| stack_id    | uint32 | The stack frame containing the thread to be executed. |
| source_code | utf8z  | The source code to be executed.                       |

### ExecuteResponseData

* **Success**: ErrorCode::OK. The code snippet was legal BrightScript and no compile-time errors occurred. However, the code itself may still generate a runtime error. For example, the code snippet "x = 5 / 0" will compile but generate a "divide by zero" runtime error. This error would be sent as text to the output stream of the debugging connection.

  If the error_code is `ErrorCode::OK`, the following fields are also included:

  | Field              | Type                      | Summary                                                             |
  | ------------------ | ------------------------- | ------------------------------------------------------------------- |
  | execute_success    | bool                      | Indicates whether the code ran and completed without errors (true). |
  | runtime_stop_code  | uint8                     | A StopReason enum.                                                  |
  | num_compile_errors | uint32                    | The number of compile-time errors.                                  |
  | compile_errors     | utf8z[num_compile_errors] | The list of compile-time errors.                                    |
  | num_runtime_errors | uint32                    | The number of runtime errors.                                       |
  | runtime_errors     | utf8z[num_runtime_errors] | The list of runtime errors.                                         |
  | num_other_errors   | uint32                    | The number of other errors (for example, permission errors).        |
  | other_errors       | utf8z[num_other_errors]   | The list of other errors.                                           |

* **Failure**: other ErrorCode.  No additional fields are included.

## Dynamic Breakpoints

Dynamic breakpoints enable developers to navigate through the app, inspect its state, and view its execution flow when a specific runtime conditions occurs. The debug protocol includes commands for adding, listing, and removing breakpoints.

### AddBreakpointsRequestArgs

The **AddBreakpointsRequestArgs** struct has the following syntax:

```
struct AddBreakpointsRequestArgs {
    uint32 num_breakpoints;
    BreakpointSpec[] breakpoints;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoints</td>
<td class="short-line">BreakpointSpec[]</td>
<td class="long-line">An array of BreakpointSpec structs. A BreakpointSpec struct has the following syntax: <br><pre><code>struct BreakpointSpec {
    utf8z file_spec;
    uint32 line_number;
    uint32 ignore_count;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">file_spec</td>
<td class="short-line">utf8z</td>
<td class="long-line">The simple path of the source file where the breakpoint is to be inserted.<br><br>"pkg:/" specifies a file in the app<br><br>"lib:/&lt;library_name&gt;/" specifies a file in a library.</td>
</tr>
<tr>
<td class="short-line">line_number</td>
<td class="short-line">uint32</td>
<td class="long-line">The line number in the app code where the breakpoint is to be executed.</td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### AddBreakpointsResponseData

The **AddBreakpointsResponseData** struct has the following syntax:

```
struct AddBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoint_responses;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoint_responses</td>
<td class="short-line">BreakpointInfo[]</td>
<td class="long-line">An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br><pre><code>struct BreakpointInfo {
    uint32 breakpoint_id;
    uint32 error_code;
    uint32 ignore_count;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">breakpoint_id</td>
<td class="short-line">utf8z</td>
<td class="long-line">The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td>
</tr>
<tr>
<td class="short-line">error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">Indicates whether the breakpoint was successfully added. This may be one of the following values: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Status</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">OK</td>
<td class="short-line">The <strong>breakpoint_id</strong> is valid.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">INVALID_ARGS</td>
<td class="short-line">The breakpoint could not be returned.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.<br><br>This argument is only present if the <strong>breakpoint_id</strong> is valid.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### ListBreakpointsResponseData

The **ListBreakpointsResponseData** struct has the following syntax:

```
struct ListBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoints;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoints</td>
<td class="short-line">BreakpointInfo[]</td>
<td class="long-line">An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br><pre><code>struct BreakpointInfo {
    uint32 breakpoint_id;
    uint32 error_code;
    uint32 ignore_count;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">breakpoint_id</td>
<td class="short-line">utf8z</td>
<td class="long-line">The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td>
</tr>
<tr>
<td class="short-line">error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">Indicates whether the breakpoint was successfully returned. This may be one of the following values: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Status</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">OK</td>
<td class="short-line">The <strong>breakpoint_id</strong> is valid.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">INVALID_ARGS</td>
<td class="short-line">The breakpoint could not be returned.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">Current state, decreases as breakpoint is executed. This argument is only present if the <strong>breakpoint_id</strong> is valid.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

### RemoveBreakpointsRequestArgs

The **RemoveBreakpointsRequestArgs** struct has the following syntax:

```
struct RemoveBreakpointsRequestArgs {
    uint32 num_breakpoints;
    uint32[] breakpoint_ids;
};
```

| Field           | Type     | Summary                                                                |
| --------------- | -------- | ---------------------------------------------------------------------- |
| num_breakpoints | uint32   | The number of breakpoints in the **breakpoint_ids** array.             |
| breakpoint_ids  | uint32[] | An array of breakpoint IDs representing the breakpoints to be removed. |

### RemoveBreakpointsResponseData

The **RemoveBreakpointsResponseData** struct has the following syntax:

```
struct RemoveBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoint_infos;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoint_infos</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoint_infos</td>
<td class="short-line">BreakpointInfo[]</td>
<td class="long-line">An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br><pre><code>struct BreakpointInfo {
    uint32 breakpoint_id;
    uint32 error_code;
    uint32 ignore_count;
};
</code></pre><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">breakpoint_id</td>
<td class="short-line">utf8z</td>
<td class="long-line">The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td>
</tr>
<tr>
<td class="short-line">error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">Indicates whether the breakpoint was successfully removed. This may be one the following values: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Status</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">OK</td>
<td class="short-line">The <strong>breakpoint_id</strong> is valid.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">INVALID_ARGS</td>
<td class="short-line">The breakpoint could not be deleted.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">Current state, decreases as breakpoint is executed. This argument is only present if the <strong>breakpoint_id</strong> is valid.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Conditional Breakpoints

Conditional breakpoints enable developers to break inside a code block when a defined expression evaluates to true. Clients must use the ADD_CONDITIONAL_BREAKPOINTS debug command to add breakpoints that have conditional expressions (the ADD_BREAKPOINTS command must be used to add breakpoints without conditional expressions).

Use the LIST_BREAKPOINTS debugging command to get the existing conditional breakpoints and their status.

### AddConditonalBreakpointsRequestArgs

The **AddConditonalBreakpointsRequestArgs** struct has the following syntax:

```
struct AddBreakpointsRequestArgs {
    uint32 flags;
    uint32 num_breakpoints;
    ConditionalBreakpointSpec[] breakpoints;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">flags</td>
<td class="short-line">uint32</td>
<td class="long-line">This field is always set to 0 (reserved for future use).</td>
</tr>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoints</td>
<td class="short-line">ConditionalBreakpointSpec[]</td>
<td class="long-line">An array of ConditonalBreakpointSpec structs. A ConditonalBreakpointSpec struct has the following syntax: <pre><code>struct CondtionalBreakpointSpec {
    utf8z file_spec;
    uint32 line_number;
    uint32 ignore_count;
 &nbsp; &nbsp;utf8z cond_expr;  //available since Debug Protocol v3.1
};
</code></pre><br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">file_spec</td>
<td class="short-line">utf8z</td>
<td class="long-line">The path of the source file where the conditional breakpoint is to be inserted. <br><br>"pkg://&lt;filepath&gt;" specifies a file in the app<br><br>"lib:/&lt;library_name&gt;/&lt;filepath&gt;" specifies a file in a library.</td>
</tr>
<tr>
<td class="short-line">line_number</td>
<td class="short-line">uint32</td>
<td class="long-line">The line number in the app code where the breakpoint is to be executed.</td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint. If <strong>cond_expr</strong> is specified, the <strong>ignore_count</strong> is only updated if it evaluates to true.</td>
</tr>
<tr>
<td class="short-line">cond_expr</td>
<td class="short-line">utf8z</td>
<td class="long-line">BrightScript code that evaluates to a boolean value. The <strong>cond_expr</strong> is compiled and executed in the context where the breakpoint is located. If <strong>cond_expr</strong> is specified, the <strong>ignore_count</strong> is only be updated if this evaluates to true.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### AddConditonalBreakpointsResponseData

The **AddConditonalBreakpointsResponseData** struct has the following syntax:

```
struct AddConditonalBreakpointsResponseData {
    uint32 num_breakpoints;
    ConditionalBreakpointInfo[] breakpoint_responses;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoint_responses</td>
<td class="short-line">ConditonalBreakpointInfo[]</td>
<td class="long-line">An array of ConditonalBreakpointInfo structs. A ConditonalBreakpointInfo struct has the following syntax: <pre><code>struct ConditionalBreakpointInfo {
    uint32 breakpoint_id;
    uint32 error_code;
    uint32 ignore_count;
};
</code></pre><br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">breakpoint_id</td>
<td class="short-line">utf8z</td>
<td class="long-line">The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td>
</tr>
<tr>
<td class="short-line">error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">Indicates whether the breakpoint was successfully added. This may be one of the following values: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Status</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">OK</td>
<td class="short-line">The <strong>breakpoint_id</strong> is valid.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">INVALID_ARGS</td>
<td class="short-line">The breakpoint could not be returned.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">ignore_count</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.  This argument is only present if the <strong>breakpoint_id</strong> is valid.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Exception Breakpoints

_Available since Roku OS 14.1_

Exception breakpoints enable developers to pause the debugger whenever a runtime error is encountered or an exception is thrown. Unlike other breakpoints, exception breakpoints do not have an associated source file and line number, and they can not be listed or removed using LIST_BREAKPOINTS or REMOVE_BREAKPOINTS. Clients must use SET_EXCEPTION_BREAKPOINTS to set or clear the active exception breakpoints.

### SetExceptionBreakpointsRequestArgs

The **SetExceptionBreakpointsRequestArgs** struct has the following syntax:

```
struct SetExceptionBreakpointsRequestArgs {
    uint32 num_breakpoints;
    ExceptionBreakpointSpec[] breakpoints;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoints</td>
<td class="short-line">ExceptionBreakpointSpec[]</td>
<td class="long-line">An array of ExceptionBreakpointSpec structs. A ExceptionBreakpointSpec struct has the following syntax: <pre><code>struct ExceptionBreakpointSpec {
    uint32 filter_id;
    utf8z cond_expr;
};
</code></pre> <br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">filter_id</td>
<td class="short-line">uint32</td>
<td class="long-line">The type of exceptions that should trigger a stop. Note this is not a bitfield. To specify multiple filters, the client must send multiple ExceptionBreakpointSpecs. <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Filter ID</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">1</td>
<td class="short-line">CAUGHT</td>
<td class="short-line">Stop on all caught exceptions.</td>
</tr>
<tr>
<td class="short-line">2</td>
<td class="short-line">UNCAUGHT</td>
<td class="short-line">Stop on all uncaught exceptions.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">cond_expr</td>
<td class="short-line">utf8z</td>
<td class="long-line">BrightScript code that evaluates to a boolean value. The <strong>cond_expr</strong> is compiled and executed in the context where the breakpoint is located.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### SetExceptionBreakpointsResponseData

The **SetExceptionBreakpointsResponseData** struct has the following syntax:

```
struct SetExceptionBreakpointsResponseData {
    uint32 num_breakpoints;
    ExceptionBreakpointInfo[] breakpoint_responses;
};
```

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Field</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">num_breakpoints</td>
<td class="short-line">uint32</td>
<td class="long-line">The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td class="short-line">breakpoint_responses</td>
<td class="short-line">ExceptionBreakpointInfo[]</td>
<td class="long-line">An array of ExceptionBreakpointInfo structs. A ExceptionBreakpointInfo struct has the following syntax: <pre><code>struct ExceptionBreakpointInfo {
    uint32 filter_id;
    uint32 error_code;
};
</code></pre><br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Type</th>
<th class="short-line">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">filter_id</td>
<td class="short-line">uint32</td>
<td class="long-line">The filter_id of the exception breakpoint.<table>
    <tr>
        <td>Value</td>
        <td>Filter ID</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>1</td>
        <td>CAUGHT</td>
        <td>Stop on all caught exceptions.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>UNCAUGHT</td>
        <td>Stop on all uncaught exceptions.</td>
    </tr>
</table></td>
</tr>
<tr>
<td class="short-line">error_code</td>
<td class="short-line">uint32</td>
<td class="long-line">Indicates whether the breakpoint was successfully added. This may be one of the following values:  <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Code</th>
<th class="short-line">Status</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line">OK</td>
<td class="short-line">The exception breakpoint was set successfully.</td>
</tr>
<tr>
<td class="short-line">5</td>
<td class="short-line">INVALID_ARGS</td>
<td class="long-line">The exception breakpoint could not be set due to an unrecognized filter_id.</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

## Virtual Variables

_Available since Roku OS 14.1_

Virtual variables are values that can be retrieved with a VARIABLES request but do not correspond to actual variables (for example, the length of a container). By convention, variables start with a `$` character.

>  As of [Roku OS 15.2](doc:release-notes#roku-os-152), developers can use virtal variables to retrieve **roInputEvent**, **roUrlEvent**, and **roDateTime** values. This improves stepping performance when these virtual variables are expanded.

The following virtual variables are supported:

| Object Type     | Name                  | Type                       | Description                                                                                                                                                                                                                                                                                                            |
| :-------------- | :-------------------- | :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| roSGNode        | $children             | roArray                    | The SceneGraph children of the given node. This is equivalent to calling `node.getChildren(-1, 0)`.                                                                                                                                                                                                                    |
| roSGNode        | $parent               | roSGNode                   | The SceneGraph parent of the given node. This is equivalent to calling `node.getParent()`.                                                                                                                                                                                                                             |
| roSGNode        | $threadinfo           | roAssociativeArray         | The threadInfo of the given node. This is equivalent to calling `node.threadInfo()`.                                                                                                                                                                                                                                   |
| Container types | $count                | Integer                    | The number of elements in the container. This is equivalent to calling `var.Count()`.                                                                                                                                                                                                                                  |
| roInputEvent    | $isInput              | .IsInput()                 | Returns a flag indicating whether an input event was received                                                                                                                                                                                                                                                          |
| roInputEvent    | $info                 | .GetInfo()                 | Returns an roAssociativeArray describing the input event.                                                                                                                                                                                                                                                              |
| roUrlEvent      | $int                  | .GetInt()                  | Returns the type of event                                                                                                                                                                                                                                                                                              |
| roUrlEvent      | $responseCode         | .GetResponseCode()         | Returns the protocol response code associated with this event.                                                                                                                                                                                                                                                         |
| roUrlEvent      | $failureReason        | .GetFailureReason()        | Returns a description of the failure that occurred.                                                                                                                                                                                                                                                                    |
| roUrlEvent      | $string               | .GetString()               | For transfer complete AsyncGetToString, AsyncPostFromString and AsnycPostFromFile requests this will be the actual response body from the server. This method returns the string associated with the event.                                                                                                            |
| roUrlEvent      | $sourceIdentity       | .GetSourceIdentity()       | Returns a magic number that can be matched with the value returned by the [roUrlTransfer.GetIdentity()](https://developer.roku.com/docs/references/brightscript/interfaces/ifurltransfer.md#getidentity-as-integer) method to determine the source of the roUrlTransfer event.                                         |
| roUrlEvent      | $responseHeaders      | .GetResponseHeaders()      | Return an roAssociativeArray containing all the headers returned by the server for appropriate protocols (such as HTTP). Headers are only returned when the status code is greater than or equal to 200 and less than 300                                                                                              |
| roUrlEvent      | $targetIpAddress      | .GetTargetIpAddress()      | Returns the IP address of the destination.                                                                                                                                                                                                                                                                             |
| roUrlEvent      | $responseHeadersArray | .GetResponseHeadersArray() | Returns an roArray of roAssociativeArrays, where each associative array contains a single header name/value pair. Use this function if you need access to duplicate headers, since GetResponseHeaders() returns only the last name/value pair for a given name. All headers are returned regardless of the status code |
| roDateTime      | $asSecondLong         | .GetAsSecondLong()         | Returns a LongInteger representing the date/time as the number of seconds from the Unix epoch (00:00:00 1/1/1970 GMT).                                                                                                                                                                                                 |
| roDateTime      | $date                 | .GetDate()                 | Returns the localized date of the device.                                                                                                                                                                                                                                                                              |
| roDateTime      | $iso                  | .GetIso()                  | Returns an ISO 8601 representation of the date/time value with milliseconds precision.                                                                                                                                                                                                                                 |
| roDateTime      | $milliseconds         | .GetMilliseconds()         | Returns the date/time value's millisecond within the second.                                                                                                                                                                                                                                                           |
| roDateTime      | $lastDayOfMonth       | .GetLastDayOfMonth()       | Returns the date/time value's last day of the month.                                                                                                                                                                                                                                                                   |
| roDateTime      | $dayOfWeek            | .GetDayOfWeek()            | Returns the date/time value's day of week.                                                                                                                                                                                                                                                                             |

Virtual variables are only returned if both GET_VIRTUAL_KEYS and GET_CHILD_KEYS are set in the VARIABLES request.  Variable paths may include multiple virtual keys. For example, to get the first grandchild node's thread info, the client can send a request with the following path: `node.$children.0.$children.0.$threadinfo`.

## Sample remote debugger

You can [download the Roku Remote Debugger](https://github.com/rokudev/remote-debugger), which is a Python-based sample command-line remote debugger for testing and debugging Roku apps under development. The Roku Remote Debugger (**rokudebug.py**) provides the same functionality as the [BrightScript debug console](/docs/developer-program/debugging/debugging-channels.md#brightscript-console-port-8085-commands); however, it demonstrates how the BrightScript network debug protocol could be used to integrate a debug tool into an IDE.

To run the Roku Remote Debugger, follow these steps:

1. Verify that you have Python 3.5.3 (or greater) installed on your machine.

2. [Create a ZIP file](/docs/developer-program/getting-started/hello-world.md#compressing-the-contents-of-the-hello-world-directory) containing the development app to be tested. You can also [download sample apps](https://github.com/rokudev/samples) to test with the debugger.

3. Sideload an app by entering the following command in a terminal or command prompt:

   `python rokudebug.py --targetip <Roku device IP address> --targetpass <Roku device webserver password> <development app zip file>`

   The following example demonstrates a command for running the debugger

   `python3 rokudebug.py --targetip 192.168.1.10 --targetpass abcd VideoListExample/Archive.zip`

4. Enter **help** to view a list of the available debug commands, which are as follows:

   | Command                | Abbreviation | Description                                     |
   | ---------------------- | ------------ | ----------------------------------------------- |
   | addbreak               | break, ab    | Adds a breakpoint                               |
   | backtrace              | bt           | Print stack backtrace of selected thread.       |
   | continue               | c            | Continue all threads.                           |
   | down                   | d            | Move one frame down the function call stack.    |
   | help                   | h            | Print the available commands.                   |
   | list                   | l            | List the currently running function.            |
   | listbreak              | Lb           | List all breakpoints                            |
   | out                    | o            | Step out of the current function                |
   | over                   | v            | Step over one program statement                 |
   | print _var_            |              | Print the value of a specific variable.         |
   | rmbreak _breakpointid_ | rb           | Clears the specified breakpoint                 |
   | quit                   | q            | Quit the Roku Remote Debugger and exit the app. |
   | status                 |              | Show the status of the Roku Remote Debugger.    |
   | step                   | S, t         | Step one program statement                      |
   | stop                   |              | Stop all threads.                               |
   | thread                 | th           | Inspect a thread.                               |
   | threads                | ths          | Show all threads.                               |
   | up                     | u            | Move one frame up the function call stack.      |
   | vars                   | v            | Show the variables in the current scope.        |

## [BETA] Visual Studio Code extension

You can [download](https://github.com/rokudev/debug-protocol-vscode-ext-beta) the beta version of the Visual Studio Code extension for the Roku BrightScript debug protocol. After extracting and installing the extension, you can use it for debugging Roku apps in Visual Studio.

## Demo video

The following video demonstrates the [Roku Remote Debugger](https://github.com/rokudev/remote-debugger), and it shows how the BrightScript network debug protocol could be used in an integration with an IDE such as Visual Studio Code.

<video src="https://image.roku.com/ZHZscHItMTc2/roku-brightscript-debug-protocol.mp4" poster="https://image.roku.com/ZHZscHItMTc2/roku-brightscript-network-debug-protocol.jpg" width="720" height="480" controls />

## Change log

* **12-28-2024**: Roku Remote debugger 3.3.0 release.
  * **DebuggerRequest** messages now support a SET_EXCEPTION_BREAKPOINTS debugging command (code 12).
  * **DebuggerUpdate** messages include the EXCEPTION_BREAKPOINT_ERROR (updat_type code 8) command.
  * The **Variables** debug command now supports requesting "virtual" variables using the GET_VIRTUAL_KEYS flag and VIRTUAL_PATH_INCLUDED keys.
* **03-06-2023**: Roku Remote debugger 3.2.0 release.
  * Support added for sending ADD_CONDITIONAL_BREAKPOINTS requests while the script is running.
  * **DebuggerUpdate** messages now include BREAKPOINT_VERIFIED (update_type code 6) and PROTOCOL_ERROR (update_type code 7) commands.
* **09-12-2022**: Roku Remote debugger 3.1.0 release.
  * **DebuggerRequest** messages now support an ADD_CONDITIONAL_BREAKPOINTS debugging command (code 11).  The LIST_BREAKPOINTS debugging command (code 7) now supports both conditional and non-conditional breakpoints.

  * **DebuggerResponse** messages now include **error_flags** and **error_data** fields if the value returned to the **error_code** field is not "OK" (error code 0).

  * **DebuggerUpdate** messages include the following new **update_type** codes:
    * BREAKPOINT_ERROR (update_type code 4). A compilation or runtime error occurred when evaluating the **cond_expr** of a conditional breakpoint
    * COMPILE_ERROR (update_type code 5). A compilation error occurred.

  * The **Variables** debug command now supports a new **path_force_case_insensitive** flag that forces a case-insensitive lookup of the corresponding path entry when enabled. Enabling this flag also requires the **VariablesRequestFlag** argument to be set to the new "CASE_SENSITIVITY_OPTIONS" value. This is useful for debugging scripts using "." notation for associative arrays, which is always case insensitive for all object types.
* **03-22-2022**: Roku Remote debugger 3.0.0 release.
  * The **HandshakeFromDVP** object, which is sent by a Roku device to a debugger client as part of the initial handshake, includes a new **platform_revision_timestamp** field that is primarily used to identify the Roku OS version of the device being used for debugging.

  * **DebuggerResponse** messages include a new **packet_length** field that enables a debugger client to read past non-essential data that it does not understand.

  * **DebuggerUpdate** messages include the following new THREAD_DETACHED (error code 6) and EXECUTION_TIMEOUT (error code 7) **error_code** status and codes:
* **08-14-2020**: Beta release of Visual Studio Code extension. Updated debug command table.
* **03-29-2020**: Roku Remote debugger 2.0.0 release. Added breakpoint and step commands.
* **11-09-2019**: Roku Remote debugger 1.0.1 release.