---
title: "BrightScript debug protocol"
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
<td>packet_length</td>
<td>uint32</td>
<td>The size of the packet to be sent.<br />Example: (4 + 4 + 4 + sizeof(ARGUMENTS))</td>
</tr>
<tr>
<td>request_id</td>
<td>uint32</td>
<td>The ID of the debugger request (must be &gt;=1). This ID is included in the debugger response.</td>
</tr>
<tr>
<td>command_code</td>
<td>uint32</td>
<td>An enum representing the debugging command being sent, which may be one of the following values:<br /><pre><code></td>
</tr>
<tr>
<td>command_arguments (optional)</td>
<td>uint8</td>
<td>Command-specific arguments (these may not be present for some commands)</td>
</tr>
</tbody>
</table>



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
<td>packet_length</td>
<td>Unit32</td>
<td>The length of the packet in bytes, including this field. Client must read this many bytes.</td>
</tr>
<tr>
<td>request_id</td>
<td>uint32</td>
<td>The ID of the debugger request (must be &gt;=1). This ID is included in the debugger response.</td>
</tr>
<tr>
<td>error_code</td>
<td>uint32</td>
<td>An enum indicating the status of the request. If the debugger request was successful, a value of <strong>0</strong> is returned. This may be one of the following values:<br /> <pre><code></td>
</tr>
<tr>
<td>error_flags</td>
<td>unit32</td>
<td>If the value returned to the <strong>error_code</strong> field is not "OK" (error code 0), an <strong>error_flags</strong> bitmap is returned. The bitmap contains the following flags (the associated data follows the flags; their order is based on the order of the flags themselves): <pre><code><code>&lt;br /&gt;enum ErrorFlags \\{&lt;br /&gt;    INVALID_VALUE_IN_PATH = 0x0001,&lt;br /&gt;    MISSING_KEY_IN_PATH = 0x0002&lt;br /&gt;\\};&lt;br /&gt;</code></code></pre><br /><table><thead><tr><th>Field</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>INVALID_VALUE_IN_PATH</td><td>uint32</td><td>invalid_path_index. The index of the element in the requested path that exists, but has invalid or unknown value.</td></tr><tr><td>MISSING_KEY_IN_PATH</td><td>uint32</td><td>missing_key_index. The index of the element in path that was not found.</td></tr></tbody></table><br />If the <strong>error_code</strong> is set to "OK", the <strong>error_flags</strong> and <strong>error_data</strong> fields are not included in the debugger response.</td>
</tr>
<tr>
<td>error_data</td>
<td>uint8[]</td>
<td>This field is included If the value returned to the <strong>error_code</strong> field is not "OK" (error code 0) and the <strong>error_flags</strong> bitmap is not set to 0.</td>
</tr>
<tr>
<td>data</td>
<td>uint8</td>
<td>The command response returned based on the request type.</td>
</tr>
</tbody>
</table>





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
<td>packet_length</td>
<td>uint32</td>
<td>The length of the packet in bytes, including this field</td>
</tr>
<tr>
<td>request_id</td>
<td>uint32</td>
<td>The ID of the debugger request, which must be <strong>0</strong>. This ID is included in the debugger response. <br /><br /><strong>0</strong> is a reserved value for the <strong>request_id</strong> in DebuggerUpdate messages; therefore, a debugging client may not send a DebuggerRequest with a <strong>request_id</strong> of 0.</td>
</tr>
<tr>
<td>error_code</td>
<td>uint32</td>
<td>An enum indicating the status of the request. If the debugger request was successful, a value of <strong>0</strong> is returned. This may be one of the following values: <br /><pre><code></td>
</tr>
<tr>
<td>update_type</td>
<td>uint32</td>
<td>An enum representing the update being sent by the debugger, which may be one of the following values:<br /><pre><code></td>
</tr>
<tr>
<td>data</td>
<td>uint8</td>
<td>The update data returned based on the <strong>update_type</strong>. This may be one of the following values:<br /><ul><li>If the <strong>update_type</strong> is IO_PORT_OPENED, the <strong>data</strong> field contains the port number (uint32) to which the debugging client should connect to read the script's output.</li><li>If the <strong>update_type</strong> is ALL_THREADS_STOPPED, the <strong>data</strong> field contains a structure named <strong>AllThreadsStoppedUpdateData</strong>. See <a href="#allthreadsstopped">AllThreadsStopped</a> for more information.</li><li>If the <strong>update_type</strong> is THREAD_ATTACHED, the <strong>data</strong> field contains a structure named <strong>ThreadAttachedUpdateData</strong>. See <a href="#threadattached">ThreadAttached</a> for more information.</li></ul></td>
</tr>
</tbody>
</table>




### AllThreadsStopped

If the **update_type** in a DebuggerUpdate message is set to ALL_THREADS_STOPPED, the **data** field contains a structure named **AllThreadsStoppedUpdateData** that provides the reason for the stop. The **AllThreadsStoppedUpdateData** structure has the following syntax:

```
struct AllThreadsStoppedUpdateData{
		int32 primary_thread_index;
		uint8 stop_reason;
		utf8z stop_reason_detail;
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
<td>primary_thread_index</td>
<td>int32</td>
<td>The index of the primary thread that initiated the stop. This is -1 if the thread is unknown.</td>
</tr>
<tr>
<td>stop_reason</td>
<td>uint8</td>
<td>An enum describing why the thread was stopped. This may be one of the following values:<br /><table><thead><tr><th>Value</th><th>Reason</th><th>Summary</th></tr></thead><tbody><tr><td>0</td><td>UNDEFINED</td><td>Uninitialized stopReason.</td></tr><tr><td>1</td><td>NOT_STOPPED</td><td>Thread is running.</td></tr><tr><td>2</td><td>NORMAL_EXIT</td><td>Thread exited.</td></tr><tr><td>3</td><td>STOP_STATEMENT</td><td>Stop statement executed.</td></tr><tr><td>4</td><td>BREAK</td><td>Another thread in the group encountered an error or other reason outside this thread.</td></tr><tr><td>5</td><td>RUNTIME_ERROR</td><td>Thread stopped because of an error during execution.</td></tr><tr><td>6</td><td>CAUGHT_RUNTIME_ERROR</td><td>Thread stopped due to a caught runtime error. This only occurs if exception breakpoints are configured to stop on caught exceptions.</td></tr></tbody></table></td>
</tr>
<tr>
<td>stop_reason_detail</td>
<td>utf8z</td>
<td>Provides extra details (for example, "Divide by Zero", "STOP", "BREAK")</td>
</tr>
</tbody>
</table>



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

| Field              | Type                      | Summary                                                      |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| flags              | bool                      | This field is always set to 0. It is reserved for future use. |
| breakpoint_id      | uint8                     | The unique ID of the breakpoint (values greater than 0 are valid; a value of 0 denotes an error). |
| num_compile_errors | uint32                    | The number of compile-time errors.                           |
| compile_errors     | utf8z[num_compile_errors] | The list of compile-time errors.                             |
| num_runtime_errors | uint32                    | The number of runtime errors.                                |
| runtime_errors     | utf8z[num_runtime_errors] | The list of runtime errors.                                  |
| num_other_errors   | uint32                    | The number of other errors (for example, permission errors). |
| other_errors       | utf8z[num_other_errors]   | The list of other errors.                                    |

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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>flags</td>
<td>bool</td>
<td>This field is always set to 0 (reserved for future use).</td>
</tr>
<tr>
<td>utf8z</td>
<td>error_string</td>
<td>A text message describing the compiler error.</td>
</tr>
<tr>
<td>utf8z</td>
<td>file_spec</td>
<td>A simple file path indicating where the compiler error occurred. It maps to all matching file paths in the app or its libraries <br /><br />"pkg:/<filepath>" specifies a file in the app<br /><br />"lib:/<library_name>//<filepath>" specifies a file in a library.</td>
</tr>
<tr>
<td>uint32</td>
<td>line_number</td>
<td>The line number where the compile error occurred.</td>
</tr>
<tr>
<td>utf8z</td>
<td>library_name</td>
<td>The name of the library where the compile error occurred.</td>
</tr>
</tbody>
</table>


### BreakpointVerified

*Available since Roku OS 12.0*

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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>flags</td>
<td>bool</td>
<td>This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td>VerifiedBreakpointInfo</td>
<td>array</td>
<td>A list of verified breakpoints. Each verified breakpoint has the following syntax:<br /><table><thead><tr><th>Field</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>breakpoint_id</td><td>utf8z</td><td>The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>



### ProtocolError

*Available since Roku OS 12.0*

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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>flags</td>
<td>bool</td>
<td>This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td>protocol_error_code</td>
<td>uint32</td>
<td>An enum indicating the type of protocol error that has occurred. This may be one of the following values:<br /><pre><code></td>
</tr>
</tbody>
</table>



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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>flags</td>
<td>bool</td>
<td>This field is always set to 0. It is reserved for future use.</td>
</tr>
<tr>
<td>filter_id</td>
<td>uint32</td>
<td>The filter ID of the breakpoint <table><thead><tr><th>Value</th><th>Filter ID</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>CAUGHT</td><td>Stop on all caught exceptions.</td></tr><tr><td>2</td><td>UNCAUGHT</td><td>Stop on all uncaught exceptions.</td></tr></tbody></table></td>
</tr>
<tr>
<td>num_compile_errors</td>
<td>uint32</td>
<td>The number of compile-time errors.</td>
</tr>
<tr>
<td>compile_errors</td>
<td>utf8z[num_compile_errors]</td>
<td>The list of compile-time errors.</td>
</tr>
<tr>
<td>num_runtime_errors</td>
<td>uint32</td>
<td>The number of runtime errors.</td>
</tr>
<tr>
<td>runtime_errors</td>
<td>utf8z[num_runtime_errors]</td>
<td>The list of runtime errors.</td>
</tr>
<tr>
<td>num_other_errors</td>
<td>uint32</td>
<td>The number of other errors (for example, permission errors).</td>
</tr>
<tr>
<td>other_errors</td>
<td>utf8z[num_other_errors]</td>
<td>The list of other errors.</td>
</tr>
<tr>
<td>line_number</td>
<td>uint32</td>
<td>The line number where the condition failed to evaluate.</td>
</tr>
<tr>
<td>file_path</td>
<td>utf8z</td>
<td>the file path where the condition failed to evaluate.</td>
</tr>
</tbody>
</table>


## Debugging Commands

The BrightScript debugger supports the following debug commands:


<table>
<thead>
<tr>
<th>Debug Command</th>
<th>Description</th>
<th>Access Scope</th>
<th>Arguments</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td>STOP</td>
<td>Stop all threads in application. Enter into debugger.<br /><br />Individual threads can not be stopped/started.</td>
<td>Application is running</td>
<td>none</td>
<td>No response (OK or Error if successful).</td>
</tr>
<tr>
<td>CONTINUE</td>
<td>Exit from debugger and continue execution of all threads.</td>
<td>Debugger is active. All threads are stopped</td>
<td>none</td>
<td><a href="#debugger-response-format">DebuggerResponse</a> with no payload (OK or Error if successful).</td>
</tr>
<tr>
<td>THREADS</td>
<td>Application threads info</td>
<td>Debugger is active. All threads are stopped.</td>
<td>none</td>
<td>A <a href="#threadsresponse">ThreadsResponse</a> struct.</td>
</tr>
<tr>
<td>STACKTRACE</td>
<td>Get the stack trace of a specific thread.</td>
<td>Debugger is active. All threads are stopped.</td>
<td>uint32 thread_index</td>
<td>A <a href="#stacktraceresponse">StackTraceResponse</a> struct.</td>
</tr>
<tr>
<td>VARIABLES</td>
<td>Listing of variables accessible from selected thread and stack frame.</td>
<td>Debugger is active, all thread</td>
<td><a href="#variables-arguments">variables arguments</a></td>
<td>A <a href="#variablesresponse">VariablesResponse</a> struct.</td>
</tr>
<tr>
<td>STEP</td>
<td>Execute one step on a specified thread.</td>
<td>Debugger is active. All threads are stopped.<br /><br />As of Roku OS 14.6, you can use the STEP command to step over and out of SceneGraph observer callbacks and functions called via <a href="/docs/developer-program/core-concepts/handling-application-events.md#functional-fields">CallFunc</a>.</td>
<td><a href="#step-arguments">step arguments</a></td>
<td><a href="#debugger-response-format">DebuggerResponse</a> with no payload (OK or Error if successful).<br /><br />If the STEP command is valid, the debugging target responds immediately with an OK response. The specified thread will then detach from the debugger, execute briefly as specified by the <strong>step_type</strong> parameter, and then re-attach to the debugger.<br /><br />The re-attachment causes another <a href="#threadattached">THREAD_ATTACHED</a> update message to be sent to the debugger client.</td>
</tr>
<tr>
<td>ADD_BREAKPOINTS</td>
<td>Add a dynamic breakpoint.</td>
<td>Debugger is active. Application is active (may be stopped or running).</td>
<td>An <a href="#addbreakpointsrequestargs">AddBreakpointsRequestArgs</a> struct.</td>
<td>An <a href="#addbreakpointsresponsedata">AddBreakpointsResponseData</a> struct.<br /><br />If a redundant breakpoint is attempted to be added, the ID of the previous breakpoint is returned and the debugging target is not affected.</td>
</tr>
<tr>
<td>LIST_BREAKPOINTS</td>
<td>Lists existing dynamic and conditional breakpoints and their status.</td>
<td>Debugger is active. All threads in script group are stopped.</td>
<td>none</td>
<td>A <a href="#listbreakpointsresponsedata">ListBreakpointsResponseData</a> struct.</td>
</tr>
<tr>
<td>REMOVE_BREAKPOINTS</td>
<td>Removes dynamic breakpoints.</td>
<td>Debugger is active. All threads in script group are stopped.</td>
<td>A <a href="#removebreakpointsrequestargs">RemoveBreakpointsRequestArgs</a> struct.</td>
<td>A <a href="#removebreakpointsrequestargs">RemoveBreakpointsResponseData</a> struct.</td>
</tr>
<tr>
<td>EXECUTE</td>
<td>Executes code in a specific stack frame.</td>
<td>Debugger is active</td>
<td><a href="#execute-arguments">execute arguments</a></td>
<td><a href="#executeresponsedata">ExecuteResponseData</a></td>
</tr>
<tr>
<td>ADD_CONDITIONAL_BREAKPOINTS</td>
<td>Adds a conditional breakpoint.</td>
<td>Debugger is active. App is active (may be stopped). The app or script must be stopped for an ADD_CONDITIONAL_BREAKPOINTS request to be accepted.</td>
<td>An <a href="#addconditonalbreakpointsrequestargs">AddConditionalBreakpointsRequestArgs</a> struct.</td>
<td>An <a href="#addconditonalbreakpointsresponsedata">AddConditionalBreakpointsResponseData</a> struct.</td>
</tr>
<tr>
<td>SET_EXCEPTION_BREAKPOINTS</td>
<td>Configure exception breakpoints.</td>
<td>Debugger is active</td>
<td>A <a href="#setexceptionbreakpointsrequestargs">SetExceptionBreakpointsRequestArgs</a> struct.</td>
<td>A <a href="#setexceptionbreakpointsresponsedata">SetExceptionBreakpointsResponseData</a> struct.</td>
</tr>
</tbody>
</table>


### ThreadsResponse

The **ThreadsResponse** struct has the following syntax:

```
struct ThreadsResponse{
    uint32 threads_count;
    ThreadInfo[] threads;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>threads_count</td>
<td>uint32</td>
<td>The number of threads in the response.</td>
</tr>
<tr>
<td>threads</td>
<td>ThreadInfo[]</td>
<td>An array of ThreadInfo structs. A ThreadInfo struct has the following syntax: <br /><pre><code>struct ThreadInfo\{    uint8 flags;            uint8 stop_reason;      utf8z stop_reason_detail;    uint32 line_number;    utf8z function_name;    utf8z file_path;    utf8z code_snippet;\};</code></pre><br /><table><thead><tr><th>Field</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>flags</td><td>uint8</td><td>Contains a <strong>ThreadInfoFlags</strong> enum, IS_PRIMARY, which indicates whether this thread likely caused the stop or failure. IS_PRIMARY is set to 0x01 if true. <br /><br />This enum uses a bitwise mask that enables it to fit into 8 bits.</td></tr><tr><td>stop_reason</td><td>uint32</td><td>An enum describing why the thread was stopped. This may be one of the following values:<br />${stop_reason_table2}<br />${bq-stop-reason-data-type}</td></tr><tr><td>stop_reason_detail</td><td>utf8z</td><td>Provides extra details about the stop (for example, "Divide by Zero", "STOP", "BREAK")</td></tr><tr><td>line_number</td><td>uint32</td><td>The line number where the stop or failure occurred.</td></tr><tr><td>function_name</td><td>utf8z</td><td>The function where the stop or failure occurred.</td></tr><tr><td>file_path</td><td>utf8z</td><td>The file where the stop or failure occurred.</td></tr><tr><td>code_snippet</td><td>utf8z</td><td>The code causing the stop or failure.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>





### StackTraceResponse

The **StackTraceReponse** struct has the following syntax:

```
struct StackTraceResponse{
    uint32 stack_size;
    StackEntry[] entries;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>stack_size</td>
<td>uint32</td>
<td>The number of stack entries in the <strong>entires</strong> array.</td>
</tr>
<tr>
<td>entries</td>
<td>StackEntry[]</td>
<td>An array of StrackEntry structs. entries[0] contains the last function called; entries[stack_size-1]  contains the first function called. Debugging clients may reverse the entries to match developer expectations.<br /><br />A StrackEntry struct has the following syntax: <br /><pre><code>struct StackEntry\{    uint32 line_number;    utf8z function_name;    utf8z file_name;\};</code></pre><br /><table><thead><tr><th>Field</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>line_number</td><td>uint32</td><td>The line number where the stop or failure occurred.</td></tr><tr><td>function_name</td><td>utf8z</td><td>The function where the stop or failure occurred.</td></tr><tr><td>file_name</td><td>utf8z</td><td>The file where the stop or failure occurred.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>




### Variables arguments


<table>
<thead>
<tr>
<th>Argument</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>variable_request_flags</td>
<td>uint8</td>
<td>Contains one the following <strong>VariableRequestFlags</strong> enums: ${variable-request-flags-table}<br /><br />This enum uses a bitwise mask that enables it to fit into 8 bits.</td>
</tr>
<tr>
<td>thread_index</td>
<td>uint32</td>
<td>The index of the thread containing the variable.</td>
</tr>
<tr>
<td>stack_frame_index</td>
<td>uint32</td>
<td>The index of the frame returned from the STACKTRACE command.<br />The 0 index contains the first function called; nframes-1 contains the last. This indexing does not match the order of the frames returned from the STACKTRACE command</td>
</tr>
<tr>
<td>variable_path_len</td>
<td>uint32</td>
<td>The number of <strong>variable_path</strong> entries. If this is set to 0, the variables that are accessible from the specified stack frame are returned.</td>
</tr>
<tr>
<td>variable_path_entries</td>
<td>utf8z[]</td>
<td>A set of one or more path entries to the variable to be inspected. For example, <code>m.top.myarray[6]</code> can be accessed with <code>["m","top","myarray","6"]</code>. <br /><br />If no path is specified, the variables accessible from the specified stack frame are returned.</td>
</tr>
<tr>
<td>path_force_case_insensitive</td>
<td>bool</td>
<td>Forces a case-insensitive lookup of the corresponding path entry when enabled.<br /><br />Enabling this flag also requires the <strong>variable_request_flags</strong> argument to be set to CASE_SENSITIVITY_OPTIONS. This is useful for debugging scripts using "." notation for associative arrays, which is always case insensitive for all object types.</td>
</tr>
<tr>
<td>path_is_virtual  <br /><br /><em>Available since Roku OS 14.1</em></td>
<td>bool[]</td>
<td>Indicates that the path entry is virtual and does not correspond to a real variable. <br /><br />Enabling this flag also requires <strong>variable_request_flags</strong> to be set to VIRTUAL_PATH_INCLUDED.</td>
</tr>
</tbody>
</table>



<table>
<thead>
<tr>
<th>Value</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET_CHILD_KEYS</td>
<td>Indicates whether the VARIABLES response includes the child keys for container types like lists and associative arrays. If this is set to true (0x01), the VARIABLES response include the child keys.</td>
</tr>
<tr>
<td>CASE_SENSITIVITY_OPTIONS</td>
<td>Enables the client application to send <strong>path_force_case_insensitive</strong> data</td>
</tr>
<tr>
<td>GET_VIRTUAL_KEYS</td>
<td>Indicates whether the VARIABLES response includes virtual keys for the requested paths. See <a href="#virtual-variables">Virtual Variables</a></td>
</tr>
<tr>
<td>VIRTUAL_PATH_INCLUDED <br /> <br /><em>Available since Roku OS 14.1</em></td>
<td>Enable the client application to sent <strong>path_is_virtual</strong> data.</td>
</tr>
</tbody>
</table>


### VariablesResponse

The **VariablesResponse** struct has the following syntax:

```
struct VariablesResponse{
    uint32 num_variables;
    VariableInfo[] variables;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_variables</td>
<td>uint32</td>
<td>The number of variables in the <strong>variables</strong> array.</td>
</tr>
<tr>
<td>variables</td>
<td>VariableInfo[]</td>
<td>An array of VariableInfo structs. A VariableInfo struct has the following syntax: <br /><pre><code>struct VariableInfo\{    uint8 flags;               uint8 variable_type;       utf8z name;               uint32 ref_count;    uint8 key_type;    uint32 element_count;    void<em> value;\};</code></pre><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>flags</td><td>uint8</td><td>The flags that determine which fields are included in the <strong>VariableInfo</strong> struct. This field is always listed, and it may be set to one of the following values: <br />${flags_list}</td></tr><tr><td>variable_type</td><td>Uint8</td><td>Contains an enum, <strong>ValueType</strong>, which indicates the type of variable/value. This field is always listed, and it may be set to one of the following values:<br />${variable_type_list}</td></tr><tr><td>name</td><td>utf8z</td><td>The variable name. The field is only listed if the <strong>flags</strong> field includes the  IS_NAME_HERE flag.</td></tr><tr><td>ref_count</td><td>uint32</td><td>The number of references this variable has. The field is only listed if the <strong>flags</strong> field includes the  IS_REF_COUNTED flag.</td></tr><tr><td>key_type</td><td>uint8</td><td>The type of keys in the container. The field is only listed if the <strong>flags</strong> field includes the IS_CONTAINER flag.<br /><br />This field contains an enum, <strong>ValueType</strong>, which indicates the type of variable/value (see the <strong>variable_type</strong> field for more information).</td></tr><tr><td>element_count</td><td>uint32</td><td>The number of elements in the container. The field is only listed if the <strong>flags</strong> field includes the IS_CONTAINER flag</td></tr><tr><td>value</td><td>void</em></td><td>A type-dependent value based on the <strong>variable_type</strong> field. It is not present for all types.</td></tr></tbody></table><br />The data segment of a VariableInfo byte stream contains one of the following data sets : <br /><br /><ul><li>Value_AA {no data}  (use GET_CHILD_KEYS in request to get contents)</li><li>Value_Array {no data}</li><li>Value_Boolean {uint8 value;}        // 0 = false, otherwise true</li><li>Value_Double {binary64float value;}</li><li>Value_Float {binary32float value;}</li><li>Value_Function {uint8 function_name;}</li><li>Value_Integer {int32 value;}</li><li>Value_Interface {utf8z interface_name;}</li><li>Value_Invalid {no data}</li><li>Value_List {no data}</li><li>Value_LongInteger {int64 value;}</li><li>Value_Object {utf8z class_name;}</li><li>Value_String {utf8z value;}</li><li>Value_Subroutine {utf8z subroutine_name;}</li><li>Value_SubtypedObject {utf8z class_name; utf8z subtype_name;}</li><li>Value_Uninitialized {no data}</li><li>Value_Unknown {no data}</li></ul></td>
</tr>
</tbody>
</table>










### Step arguments


<table>
<thead>
<tr>
<th>Argument</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>thread_index</td>
<td>uint32</td>
<td>The index of the thread to step through.</td>
</tr>
<tr>
<td>step_type</td>
<td>uint8</td>
<td>Contains an a <strong>StepType</strong> enum, indicating the type of step action to be executed. This may be on the following values:<br /><ul><li>0 = STEP_TYPE_NONE</li><li>1 = STEP_TYPE_LINE</li><li>2 = STEP_TYPE_OUT</li><li>3 = STEP_TYPE_OVER</li></ul></td>
</tr>
</tbody>
</table>



### Execute arguments

| Argument    | Type   | Summary                                               |
| ----------- | ------ | ----------------------------------------------------- |
| thread_idx  | uint32 | The index of the thread to be executed.               |
| stack_id    | uint32 | The stack frame containing the thread to be executed. |
| source_code | utf8z  | The source code to be executed.                       |

### ExecuteResponseData

- **Success**: ErrorCode::OK. The code snippet was legal BrightScript and no compile-time errors occurred. However, the code itself may still generate a runtime error. For example, the code snippet "x = 5 / 0" will compile but generate a "divide by zero" runtime error. This error would be sent as text to the output stream of the debugging connection.

  If the error_code is `ErrorCode::OK`, the following fields are also included:

  | Field              | Type                      | Summary                                                      |
  | ------------------ | ------------------------- | ------------------------------------------------------------ |
  | execute_success    | bool                      | Indicates whether the code ran and completed without errors (true). |
  | runtime_stop_code  | uint8                     | A StopReason enum.                                           |
  | num_compile_errors | uint32                    | The number of compile-time errors.                           |
  | compile_errors     | utf8z[num_compile_errors] | The list of compile-time errors.                             |
  | num_runtime_errors | uint32                    | The number of runtime errors.                                |
  | runtime_errors     | utf8z[num_runtime_errors] | The list of runtime errors.                                  |
  | num_other_errors   | uint32                    | The number of other errors (for example, permission errors). |
  | other_errors       | utf8z[num_other_errors]   | The list of other errors.                                    |


- **Failure**: other ErrorCode.  No additional fields are included.

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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td>breakpoints</td>
<td>BreakpointSpec[]</td>
<td>An array of BreakpointSpec structs. A BreakpointSpec struct has the following syntax: <br /><pre><code>struct BreakpointSpec \{    utf8z file_spec;    uint32 line_number;    uint32 ignore_count;\};</code></pre><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>file_spec</td><td>utf8z</td><td>The simple path of the source file where the breakpoint is to be inserted.<br /><br />"pkg:/<filepath>" specifies a file in the app<br /><br />"lib:/<library_name>/<filepath>" specifies a file in a library.</td></tr><tr><td>line_number</td><td>uint32</td><td>The line number in the app code where the breakpoint is to be executed.</td></tr><tr><td>ignore_count</td><td>uint32</td><td>The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>




### AddBreakpointsResponseData

The **AddBreakpointsResponseData** struct has the following syntax:

```
struct AddBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoint_responses;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td>breakpoint_responses</td>
<td>BreakpointInfo[]</td>
<td>An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br /><pre><code>struct BreakpointInfo \{    uint32 breakpoint_id;    uint32 error_code;    uint32 ignore_count;\};</code></pre><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>breakpoint_id</td><td>utf8z</td><td>The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td></tr><tr><td>error_code</td><td>uint32</td><td>Indicates whether the breakpoint was successfully added. This may be one of the following values: ${add_breakpoint_errors_table}</td></tr><tr><td>ignore_count</td><td>uint32</td><td>The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.<br /><br />This argument is only present if the <strong>breakpoint_id</strong> is valid.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>





### ListBreakpointsResponseData

The **ListBreakpointsResponseData** struct has the following syntax:  

```
struct ListBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoints;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td>breakpoints</td>
<td>BreakpointInfo[]</td>
<td>An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br /><pre><code>struct BreakpointInfo \{    uint32 breakpoint_id;    uint32 error_code;    uint32 ignore_count;\};</code></pre><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>breakpoint_id</td><td>utf8z</td><td>The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td></tr><tr><td>error_code</td><td>uint32</td><td>Indicates whether the breakpoint was successfully returned. This may be one of the following values: ${list_breakpoint_errors_table}</td></tr><tr><td>ignore_count</td><td>uint32</td><td>Current state, decreases as breakpoint is executed. This argument is only present if the <strong>breakpoint_id</strong> is valid.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>





### RemoveBreakpointsRequestArgs

The **RemoveBreakpointsRequestArgs** struct has the following syntax:  

```
struct RemoveBreakpointsRequestArgs {
    uint32 num_breakpoints;
    uint32[] breakpoint_ids;
};
```

| Field           | Type     | Summary                                                      |
| --------------- | -------- | ------------------------------------------------------------ |
| num_breakpoints | uint32   | The number of breakpoints in the **breakpoint_ids** array.   |
| breakpoint_ids  | uint32[] | An array of breakpoint IDs representing the breakpoints to be removed. |

### RemoveBreakpointsResponseData

The **RemoveBreakpointsResponseData** struct has the following syntax:  

```
struct RemoveBreakpointsResponseData {
    uint32 num_breakpoints;
    BreakpointInfo[] breakpoint_infos;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoint_infos</strong> array.</td>
</tr>
<tr>
<td>breakpoint_infos</td>
<td>BreakpointInfo[]</td>
<td>An array of BreakpointInfo structs. A BreakpointInfo struct has the following syntax: <br /><pre><code>struct BreakpointInfo \{    uint32 breakpoint_id;    uint32 error_code;    uint32 ignore_count;\};</code></pre><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>breakpoint_id</td><td>utf8z</td><td>The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td></tr><tr><td>error_code</td><td>uint32</td><td>Indicates whether the breakpoint was successfully removed. This may be one the following values: ${remove_breakpoint_errors_table}</td></tr><tr><td>ignore_count</td><td>uint32</td><td>Current state, decreases as breakpoint is executed. This argument is only present if the <strong>breakpoint_id</strong> is valid.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>





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


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>flags</td>
<td>uint32</td>
<td>This field is always set to 0 (reserved for future use).</td>
</tr>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td>breakpoints</td>
<td>ConditionalBreakpointSpec[]</td>
<td>An array of ConditonalBreakpointSpec structs. A ConditonalBreakpointSpec struct has the following syntax: <pre><code><code>&lt;br /&gt;struct CondtionalBreakpointSpec \\{&lt;br /&gt;    utf8z file_spec;&lt;br /&gt;    uint32 line_number;&lt;br /&gt;    uint32 ignore_count;&lt;br /&gt;    utf8z cond_expr;  //available since Debug Protocol v3.1&lt;br /&gt;\\};&lt;br /&gt;</code></code></pre><br /><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>file_spec</td><td>utf8z</td><td>The path of the source file where the conditional breakpoint is to be inserted. <br /><br />"pkg://&lt;filepath&gt;" specifies a file in the app<br /><br />"lib:/<library_name>/&lt;filepath&gt;" specifies a file in a library.</td></tr><tr><td>line_number</td><td>uint32</td><td>The line number in the app code where the breakpoint is to be executed.</td></tr><tr><td>ignore_count</td><td>uint32</td><td>The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint. If <strong>cond_expr</strong> is specified, the <strong>ignore_count</strong> is only updated if it evaluates to true.</td></tr><tr><td>cond_expr</td><td>utf8z</td><td>BrightScript code that evaluates to a boolean value. The <strong>cond_expr</strong> is compiled and executed in the context where the breakpoint is located. If <strong>cond_expr</strong> is specified, the <strong>ignore_count</strong> is only be updated if this evaluates to true.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>


### AddConditonalBreakpointsResponseData

The **AddConditonalBreakpointsResponseData** struct has the following syntax:

```
struct AddConditonalBreakpointsResponseData {
    uint32 num_breakpoints;
    ConditionalBreakpointInfo[] breakpoint_responses;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td>breakpoint_responses</td>
<td>ConditonalBreakpointInfo[]</td>
<td>An array of ConditonalBreakpointInfo structs. A ConditonalBreakpointInfo struct has the following syntax: <pre><code><code>&lt;br /&gt;struct ConditionalBreakpointInfo \\{&lt;br /&gt;    uint32 breakpoint_id;&lt;br /&gt;    uint32 error_code;&lt;br /&gt;    uint32 ignore_count;&lt;br /&gt;\\};&lt;br /&gt;</code></code></pre><br /><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>breakpoint_id</td><td>utf8z</td><td>The ID assigned to the breakpoint. An ID greater than 0 indicates an active breakpoint. An ID of 0 denotes that the breakpoint has an error.</td></tr><tr><td>error_code</td><td>uint32</td><td>Indicates whether the breakpoint was successfully added. This may be one of the following values: ${breakpoints-response-error-code-table}</td></tr><tr><td>ignore_count</td><td>uint32</td><td>The number of times to ignore the breakpoint condition before executing the breakpoint. This number is decremented each time the app reaches the breakpoint.  This argument is only present if the <strong>breakpoint_id</strong> is valid.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>







## Exception Breakpoints

*Available since Roku OS 14.1*

Exception breakpoints enable developers to pause the debugger whenever a runtime error is encountered or an exception is thrown. Unlike other breakpoints, exception breakpoints do not have an associated source file and line number, and they can not be listed or removed using LIST_BREAKPOINTS or REMOVE_BREAKPOINTS. Clients must use SET_EXCEPTION_BREAKPOINTS to set or clear the active exception breakpoints.

### SetExceptionBreakpointsRequestArgs

The **SetExceptionBreakpointsRequestArgs** struct has the following syntax:

```
struct SetExceptionBreakpointsRequestArgs {
    uint32 num_breakpoints;
    ExceptionBreakpointSpec[] breakpoints;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoints</strong> array.</td>
</tr>
<tr>
<td>breakpoints</td>
<td>ExceptionBreakpointSpec[]</td>
<td>An array of ExceptionBreakpointSpec structs. A ExceptionBreakpointSpec struct has the following syntax: <pre><code><code>&lt;br /&gt;struct ExceptionBreakpointSpec \\{&lt;br /&gt;    uint32 filter_id;&lt;br /&gt;    utf8z cond_expr;&lt;br /&gt;\\};&lt;br /&gt;</code></code></pre> <br /><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>filter_id</td><td>uint32</td><td>The type of exceptions that should trigger a stop. Note this is not a bitfield. To specify multiple filters, the client must send multiple ExceptionBreakpointSpecs. ${exc-filters-table}</td></tr><tr><td>cond_expr</td><td>utf8z</td><td>BrightScript code that evaluates to a boolean value. The <strong>cond_expr</strong> is compiled and executed in the context where the breakpoint is located.</td></tr></tbody></table></td>
</tr>
</tbody>
</table>


### SetExceptionBreakpointsResponseData

The **SetExceptionBreakpointsResponseData** struct has the following syntax:

```
struct SetExceptionBreakpointsResponseData {
    uint32 num_breakpoints;
    ExceptionBreakpointInfo[] breakpoint_responses;
};
```


<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>num_breakpoints</td>
<td>uint32</td>
<td>The number of breakpoints in the <strong>breakpoint_responses</strong> array.</td>
</tr>
<tr>
<td>breakpoint_responses</td>
<td>ExceptionBreakpointInfo[]</td>
<td>An array of ExceptionBreakpointInfo structs. A ExceptionBreakpointInfo struct has the following syntax: <pre><code><code>&lt;br /&gt;struct ExceptionBreakpointInfo \\{&lt;br /&gt;    uint32 filter_id;&lt;br /&gt;    uint32 error_code;&lt;br /&gt;\\};&lt;br /&gt;</code></code></pre><br /><br /><table><thead><tr><th>Argument</th><th>Type</th><th>Summary</th></tr></thead><tbody><tr><td>filter_id</td><td>uint32</td><td>The filter_id of the exception breakpoint. ${exc-filters-table}</td></tr><tr><td>error_code</td><td>uint32</td><td>Indicates whether the breakpoint was successfully added. This may be one of the following values:  ${exc-breakpoints-response-error-code-table}</td></tr></tbody></table></td>
</tr>
</tbody>
</table>








## Virtual Variables

*Available since Roku OS 14.1*

Virtual variables are values that can be retrieved with a VARIABLES request but do not correspond to actual variables (for example, the length of a container). By convention, variables start with a `$` character.  The following virtual variables are supported:

| Object Type     | Name         | Type               | Description |
| :-------------- | :----------- | :----------------- | :----------|
| roSGNode        | $children    | roArray            | The SceneGraph children of the given node. This is equivalent to calling `node.getChildren(-1, 0)`. |
| roSGNode        | $parent      | roSGNode           | The SceneGraph parent of the given node. This is equivalent to calling `node.getParent()`.       |
| roSGNode        | $threadinfo  | roAssociativeArray | The threadInfo of the given node. This is equivalent to calling `node.threadInfo()`.             |
| Container types | $count       | Integer            | The number of elements in the container. This is equivalent to calling `var.Count()`.            |

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

   | Command                | Abbreviation | Description                                         |
   | ---------------------- | ------------ | --------------------------------------------------- |
   | addbreak               | break, ab    | Adds a breakpoint                                   |
   | backtrace              | bt           | Print stack backtrace of selected thread.           |
   | continue               | c            | Continue all threads.                               |
   | down                   | d            | Move one frame down the function call stack.        |
   | help                   | h            | Print the available commands.                       |
   | list                   | l            | List the currently running function.                |
   | listbreak              | Lb           | List all breakpoints                                |
   | out                    | o            | Step out of the current function                    |
   | over                   | v            | Step over one program statement                     |
   | print *var*            |              | Print the value of a specific variable.             |
   | rmbreak *breakpointid* | rb           | Clears the specified breakpoint                     |
   | quit                   | q            | Quit the Roku Remote Debugger and exit the app. |
   | status                 |              | Show the status of the Roku Remote Debugger.        |
   | step                   | S, t         | Step one program statement                          |
   | stop                   |              | Stop all threads.                                   |
   | thread                 | th           | Inspect a thread.                                   |
   | threads                | ths          | Show all threads.                                   |
   | up                     | u            | Move one frame up the function call stack.          |
   | vars                   | v            | Show the variables in the current scope.            |

## [BETA] Visual Studio Code extension

You can [download](https://github.com/rokudev/debug-protocol-vscode-ext-beta) the beta version of the Visual Studio Code extension for the Roku BrightScript debug protocol. After extracting and installing the extension, you can use it for debugging Roku apps in Visual Studio.

## Demo video

The following video demonstrates the [Roku Remote Debugger](https://github.com/rokudev/remote-debugger), and it shows how the BrightScript network debug protocol could be used in an integration with an IDE such as Visual Studio Code.

<video title="Roku BrightScript Network Debug Protocol" poster="https://image.roku.com/ZHZscHItMTc2/roku-brightscript-network-debug-protocol.jpg">
    <source src="https://image.roku.com/ZHZscHItMTc2/roku-brightscript-debug-protocol.mp4">
</video>

## Change log

- **12-28-2024**: Roku Remote debugger 3.3.0 release.
   - **DebuggerRequest** messages now support a SET_EXCEPTION_BREAKPOINTS debugging command (code 12).
   - **DebuggerUpdate** messages include the EXCEPTION_BREAKPOINT_ERROR (updat_type code 8) command.
   - The **Variables** debug command now supports requesting "virtual" variables using the GET_VIRTUAL_KEYS flag and VIRTUAL_PATH_INCLUDED keys.
- **03-06-2023**: Roku Remote debugger 3.2.0 release.
   - Support added for sending ADD_CONDITIONAL_BREAKPOINTS requests while the script is running.
   - **DebuggerUpdate** messages now include BREAKPOINT_VERIFIED (update_type code 6) and PROTOCOL_ERROR (update_type code 7) commands.
- **09-12-2022**: Roku Remote debugger 3.1.0 release.
   - **DebuggerRequest** messages now support an ADD_CONDITIONAL_BREAKPOINTS debugging command (code 11).  The LIST_BREAKPOINTS debugging command (code 7) now supports both conditional and non-conditional breakpoints.

   - **DebuggerResponse** messages now include **error_flags** and **error_data** fields if the value returned to the **error_code** field is not "OK" (error code 0).
   - **DebuggerUpdate** messages include the following new **update_type** codes:
     - BREAKPOINT_ERROR (update_type code 4). A compilation or runtime error occurred when evaluating the **cond_expr** of a conditional breakpoint
     - COMPILE_ERROR (update_type code 5). A compilation error occurred.
   - The **Variables** debug command now supports a new **path_force_case_insensitive** flag that forces a case-insensitive lookup of the corresponding path entry when enabled. Enabling this flag also requires the **VariablesRequestFlag** argument to be set to the new "CASE_SENSITIVITY_OPTIONS" value. This is useful for debugging scripts using "." notation for associative arrays, which is always case insensitive for all object types.  
- **03-22-2022**: Roku Remote debugger 3.0.0 release.
   - The **HandshakeFromDVP** object, which is sent by a Roku device to a debugger client as part of the initial handshake, includes a new **platform_revision_timestamp** field that is primarily used to identify the Roku OS version of the device being used for debugging.

   - **DebuggerResponse** messages include a new **packet_length** field that enables a debugger client to read past non-essential data that it does not understand.

   - **DebuggerUpdate** messages include the following new THREAD_DETACHED (error code 6) and EXECUTION_TIMEOUT (error code 7) **error_code** status and codes:
- **08-14-2020**: Beta release of Visual Studio Code extension. Updated debug command table.
- **03-29-2020**: Roku Remote debugger 2.0.0 release. Added breakpoint and step commands.
- **11-09-2019**: Roku Remote debugger 1.0.1 release.