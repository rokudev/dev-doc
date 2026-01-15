---
title: "Roku WebDriver"
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

# Roku WebDriver

The Roku WebDriver is required to control an app. It can be used in conjunction with the [Roku Robot Framework Library](/docs/developer-program/dev-tools/automated-channel-testing/robot-framework-library.md), [Roku JavaScript library](/docs/developer-program/dev-tools/automated-channel-testing/javascript-library.md), another test framework, or a programming language or a programming language such as Python, Java, or Go to execute test cases.

## Roku WebDriver APIs

Roku's WebDriver includes a set of Selenium-based REST APIs for sending commands to a Roku device. These APIs conform to the [WebDriver standards](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) specified by the World Wide Web Consortium (W3C). Specifically, the Roku WebDriver provides an HTTP-compliant JSON wire protocol with endpoints that map to their respective commands.

Path segments that are prefixed with a colon (:) represent variables.  For example, the `:sessionId` variable is included in most command paths. This variable represents the ID of the session to be retrieved or the session where a command is to be sent.

The following table lists the available commands:


<table>
<thead>
<tr>
<th><strong>HTTP Method</strong></th>
<th><strong>Path</strong></th>
<th><strong>Summary</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/status</td>
<td>Queries the server's current status.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session</td>
<td>Creates a new session.</td>
</tr>
<tr>
<td>GET</td>
<td>v1/sessions</td>
<td>Returns a list of the currently active sessions.</td>
</tr>
<tr>
<td>GET</td>
<td>v1/session/:sessionId</td>
<td>Retrieves information about the specified session.</td>
</tr>
<tr>
<td>DELETE</td>
<td>v1/session/:sessionId</td>
<td>Deletes the session.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/input<br />(<em>available since release 2.0</em>)</td>
<td>Deep links into content while the app is already running.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/install</td>
<td>Installs the specified app.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/launch</td>
<td>Launches the specified app.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/load<br />(<em>available since release 2.0</em>)</td>
<td>Sideloads the specified app.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/press</td>
<td>Simulates a keypress on a Roku remote control.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/timeouts</td>
<td>Configures the amount of time that a specific operation can be executed  before it is aborted.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/timeouts/press_wait</td>
<td>Configures the amount of time between press cmd execution (if a button_sequence is used in the <strong>/press</strong> endpoint)</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/timeouts/implicit_wait</td>
<td>Configures the amount of time that a command can be executed before it is aborted.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/element</td>
<td>Searches for an element on the screen.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/elements</td>
<td>Searches for multiple elements on the page, starting from the screen root.</td>
</tr>
<tr>
<td>POST</td>
<td>v1/session/:sessionId/element/active</td>
<td>Gets the element on the page that currently has focus.</td>
</tr>
<tr>
<td>GET</td>
<td>v1/session/:sessionId/apps</td>
<td>Returns a list of apps installed on the device.</td>
</tr>
<tr>
<td>GET</td>
<td>v1/session/:sessionId/current_app</td>
<td>Returns information about the app currently loaded on the device.</td>
</tr>
<tr>
<td>GET</td>
<td>v1/session/:sessionId/source</td>
<td>Gets the current screen source.</td>
</tr>
</tbody>
</table>


### Command requests

All command requests and POST/PUT message bodies are sent with a content-type of `application/json;charset=UTF-8`.

### Command responses

Command responses are sent as [HTTP/1.1 response messages](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6). The following sections describe how the successful, invalid, and failed commands responses are sent.

#### Success

For successful requests, a 2xx HTTP response is returned. Successful command responses and the included message body are sent with a Content-Type of `application/json;charset=UTF-8`. The JSON message  body includes the following properties:


<table>
<thead>
<tr>
<th><strong>Key</strong></th>
<th><strong>Type</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>sessionId</td>
<td>string</td>
<td>The advertising ID of the device.</td>
</tr>
<tr>
<td>status</td>
<td>number</td>
<td>A status code summarizing the result of the command: <br /><pre><code></td>
</tr>
<tr>
<td>value</td>
<td><code>*</code></td>
<td>The response JSON value.</td>
</tr>
</tbody>
</table>



#### Invalid

For invalid requests (unknown command or resource not found), a 4xx HTTP response is returned. Invalid command responses are sent with a content-type of `text-plain`, and include a message body with a descriptive error message.

#### Failed

If a request maps to a valid command and contains all of the expected parameters in the request body, but fails to execute successfully, a 500 Internal Server Error is returned. The response and included message body have a Content-Type of `application/json;charset=UTF-8`.  The message body includes two JSON objects—one with the applicable command response status, and the other with a description of the failure:

| **Key** | **Type** | **Description**                                              |
| :------ | :------- | :----------------------------------------------------------- |
| status  | number   | A status code summarizing the result of the command. See the [success](#success) section for the possible values. |
| message | string   | A descriptive message for the command failure.               |

## GET /status


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>status</td>
<td>A JSON object with the server's platform and build date. This object contains the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising The advertising ID of the device</td></tr><tr><td>status</td><td>number</td><td>The <a href="#success">status code</a> summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.build</td><td>object</td><td>The <strong>build</strong> element contains the following attributes: <em>version</em> and <em>time</em>.</td></tr><tr><td>value.build.version</td><td>string</td><td>A generic release label.</td></tr><tr><td>value.build.time</td><td>string</td><td>A timestamp specifying when the server was built.</td></tr><tr><td>value.os</td><td>object</td><td>The <strong>os</strong> element contains the following attributes: <em>arch</em> and <em>name</em>.</td></tr><tr><td>value.os.arch</td><td>string</td><td>The current system architecture.</td></tr><tr><td>value.os.name</td><td>string</td><td>The name of the operating system the server is currently running on (for example, "windows", "linux", and so on).</td></tr></tbody></table></td>
<td>Queries the server's current status and returns the general state of the server. A 200 OK response is returned if the server is alive and accepting commands. <br /><br />This method returns The server should respond with a general "HTTP 200 OK" response if it . The response body should be a JSON object describing.</td>
</tr>
</tbody>
</table>



## POST v1/session


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session</td>
<td><strong>ip</strong> - {string}: The IP address of the device.  <br /><br /><strong>Example</strong>:<br /><pre><code>\{<br />    "ip": "117.1.1.1"<br />\}</code></pre></td>
<td>A JSON object with the device's advertisement ID, which is used as the sessionId. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertisement ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.vendorName</td><td>string</td><td>The vendor of the device.</td></tr><tr><td>value.modelName</td><td>string</td><td>The model of the device.</td></tr><tr><td>value.language</td><td>string</td><td>The language of the device.</td></tr><tr><td>value.country</td><td>string</td><td>The country of the device.</td></tr><tr><td>value.ip</td><td>string</td><td>The IP address of the device.</td></tr><tr><td>value.timeout</td><td>int</td><td>The specified timeout for WebDriver client requests.</td></tr><tr><td>value.pressDelay</td><td>int</td><td>The specified delay between key presses.</td></tr></tbody></table></td>
<td>Creates a new session.</td>
</tr>
</tbody>
</table>




## GET v1/sessions


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>sessions</td>
<td>A JSON object with an array of sessions. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertisement ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value[i].vendorName</td><td>string</td><td>The vendor of the device.</td></tr><tr><td>value[i].modelName</td><td>string</td><td>The model of the device.</td></tr><tr><td>value[i].language</td><td>string</td><td>The language of the device.</td></tr><tr><td>value[i].country</td><td>string</td><td>The country of the device.</td></tr><tr><td>value[i].ip</td><td>string</td><td>The IP address of the device.</td></tr><tr><td>value[i].timeout</td><td>int</td><td>The specified timeout for ECP client requests.</td></tr><tr><td>value[i].pressDelay</td><td>int</td><td>The specified delay between key presses.</td></tr></tbody></table></td>
<td>Returns a list of the currently active sessions.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId</td>
<td>A JSON object with device information. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertisement ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.vendorName</td><td>string</td><td>The vendor of the device.</td></tr><tr><td>value.modelName</td><td>string</td><td>The model of the device.</td></tr><tr><td>value.language</td><td>string</td><td>The language of the device.</td></tr><tr><td>value.country</td><td>string</td><td>The country of the device.</td></tr><tr><td>value.ip</td><td>string</td><td>The IP address of the device.</td></tr><tr><td>value.timeout</td><td>int</td><td>The specified timeout for WebDriver client requests.</td></tr><tr><td>value.pressDelay</td><td>int</td><td>The specified delay between key presses.</td></tr></tbody></table></td>
<td>Returns device information based on the session specified in the URL path.</td>
</tr>
</tbody>
</table>


## DELETE v1/session/:sessionId


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>DELETE</td>
<td>session/:sessionId</td>
<td>A JSON object that has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Deletes the session specified in the URL path.</td>
</tr>
</tbody>
</table>



## POST v1/session/:sessionId/input

(*available since release 2.0*)


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/input</td>
<td><strong>channelId</strong> - {number}: The ID of the app to be launched.<br /><br /><strong>contentId</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.<br /><br /><strong>contentType</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.<br /><br /><strong>Example:</strong><br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;  "channelId": "dev",&lt;br /&gt;  "contentId": "myMovie123",&lt;br /&gt;  "contentType": "movie"&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Deep links into content while the app is already running.</td>
</tr>
</tbody>
</table>



## POST v1/session/:sessionId/install


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/install</td>
<td><strong>channelId</strong> - {number}: The ID of the app to be installed.<br /><br /><strong>Example:</strong><br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;  "channelId": "dev"&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Installs the specified the app.</td>
</tr>
</tbody>
</table>



## POST v1/session/:sessionId/launch


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/launch</td>
<td><strong>channelId</strong> - {number}: The ID of the app to be launched.<br /><br /><strong>contentId</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.<br /><br /><strong>contentType</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.<br /><br /><strong>Example:</strong><br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;  "channelId": "dev",&lt;br /&gt;  "contentId": "myMovie123",&lt;br /&gt;  "contentType": "movie"&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the  following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Launches the specified  app.<br /><br />You can use this method to launch an app into playback or an episodic picker screen in order to test deep linking.</td>
</tr>
</tbody>
</table>




## POST v1/session/:sessionId/load

(*available since release 2.0*)


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/load</td>
<td><strong>channel</strong> - {file}: A zipped package file.<br /><br /><strong>username</strong> - {file}: Enter <strong>rokudev</strong>, which is the user name for the Development Application Installer.<br /><br /><strong>password</strong> - {file}: The password for accessing the Development Application Installer on your Roku device.<br /><br /><strong>Example:</strong><br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;  "channel": "myChannel.zip",&lt;br /&gt;   "username": "rokudev",&lt;br /&gt;    "password": "your_device_password",&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Sideloads an app.</td>
</tr>
</tbody>
</table>



## POST v1/session/:sessionId/press


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/press</td>
<td><strong>button</strong> - {string}: The name of the key to be pressed ("home", "up", "down", "left", "right").<br /><br /><strong>button_sequence</strong> - {array: string}: An array of keys to be pressed in the specified sequence. <br /><br /><strong>button_delays</strong> - {array: string} (optional): An array of delays (in ms) between buttons executions. The default value is 1000ms.<br /><br /><strong>Example:</strong> <pre><code>\{   &quot;button_sequence&quot;: [&quot;up&quot;, &quot;down&quot;, &quot;left&quot;],   &quot;buttons_delays&quot;: [&quot;1000&quot;, &quot;2000&quot;]\}</code></pre><br /><br />In this example, the delay after the "up" keypress is 1000ms and 2000ms after the "down" keypress.</td>
<td>A JSON object with the  following fields:<br /> <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Simulates the press and release of the specified key.</td>
</tr>
</tbody>
</table>




## POST v1/session/:sessionId/timeouts


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/timeouts</td>
<td><strong>type</strong> - {string}: Either "implicit" (ECP commands) or "pressDelay"  (delay between press cmd execution)<br /><br /><strong>ms</strong> - {number}: The amount of time, in milliseconds, that time-limited commands are permitted to run.<br /><br /> <strong>Example</strong>: <br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;  "type": "implicit",&lt;br /&gt;  "ms": 2000&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the specified session. This object has the following fields:<br /> <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Configure the amount of time that an operation can be executed before it is aborted.</td>
</tr>
</tbody>
</table>




## POST v1/session/:sessionId/timeouts/implicit_wait


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/timeouts/implicit_wait</td>
<td><strong>ms</strong> - {number}: The amount of time (in milliseconds) that commands are allowed to run.<br /><br /><strong>Example:</strong> <br /><pre><code><code>&lt;br /&gt;\\{&lt;br /&gt; "ms": 2000&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the following fields:<br /> <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Specify the amount of time that commands can be executed  before being aborted.</td>
</tr>
</tbody>
</table>



## POST v1/session/:sessionId/timeouts/press_wait


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/timeouts/press_wait</td>
<td><strong>ms</strong> - {number}: The amount of time (in milliseconds) between keypress commands.<br /><br /><strong>Example:</strong><br /> <pre><code><code>&lt;br /&gt;\\{&lt;br /&gt;   "ms": 2000&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
<td>A JSON object with the following fields: <br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td>null</td></tr></tbody></table></td>
<td>Specify the amount of time to wait between key presses.</td>
</tr>
</tbody>
</table>


## POST v1/session/:sessionId/elements


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/elements</td>
<td>An array of the following objects, which can be used to located an element: <br /><br /><strong>using</strong> - {string}: The locator strategy to use. This may be one of the following values: <ul><li><strong>text</strong>: Returns an element whose text matches the search value.</li><li><strong>attr</strong>: Returns an element whose specified attributes matches the search value.</li><li><strong>tag</strong>: Returns an element whose tag name matches the search value.</li></ul><br /><br /><strong>attribute</strong> - {string}:  The attribute name (used only for "attr" strategy) <br /><br /><strong>value</strong> - {string}: The search target.<br /><br /><strong>Example</strong>:<br /><pre><code>\{  &quot;elementData&quot;: [\{    &quot;using&quot;: &quot;tag&quot;,    &quot;value&quot;: &quot;Label&quot;  \},  \{    &quot;using&quot;: &quot;text&quot;,    &quot;value&quot;: &quot;series&quot;  \},  \{    &quot;using&quot;: &quot;attr&quot;,    &quot;attribute&quot;: &quot;index&quot;    &quot;value&quot;: &quot;0&quot;  \} ]  &quot;parentData&quot;: [\{    &quot;using&quot;: &quot;tag&quot;,    &quot;value&quot;: &quot;Grid&quot;  \} ]\}</code></pre></td>
<td>A WebElement JSON object representing the retrieved elements. This object has the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.XMLName</td><td>object</td><td></td></tr><tr><td>value.XMLName.Local</td><td>string</td><td>The name of the retrieved element</td></tr><tr><td>value.XMLName.Space</td><td>string</td><td>The namespace identifier for the element.</td></tr><tr><td>value.Attr</td><td>array</td><td></td></tr><tr><td>value.Attr[i].Name</td><td>object</td><td></td></tr><tr><td>value.Attr[i].Name.Local</td><td>string</td><td>The name of attribute.</td></tr><tr><td>value.Attr[i].Name.Space</td><td>string</td><td>The namespace identifier for the attribute.</td></tr><tr><td>value.Attr[i].Value</td><td>string</td><td>The value of the attribute.</td></tr><tr><td>value.Nodes</td><td>array</td><td>The child elements.</td></tr></tbody></table></td>
<td>Searches for elements on the page matching the search criteria, starting from the screen root. All the matching elements will be returned in a WebElement JSON object.</td>
</tr>
</tbody>
</table>





## POST v1/session/:sessionId/element


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>JSON Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>session/:sessionId/element</td>
<td>An <strong>elementData</strong> array and optional <strong>parentData</strong> array with the following objects that can be used to locate an element: <br /><br /><strong>using</strong> - {string}: The locator strategy to use. This may be one of the following values: <ul><li><strong>text</strong>: Returns an element whose text matches the search value.</li><li><strong>attr</strong>: Returns an element whose specified attributes matches the search value.</li><li><strong>tag</strong>: Returns an element whose tag name matches the search value.</li></ul><br /><br /><strong>attribute</strong> - {string}:  The attribute name (used only for "attr" strategy) <br /><br /><strong>value</strong> - {string}: The search target.<br /><br /><strong>Example</strong>:<br /><pre><code>\{  &quot;elementData&quot;: [\{    &quot;using&quot;: &quot;tag&quot;,    &quot;value&quot;: &quot;Label&quot;  \},  \{    &quot;using&quot;: &quot;text&quot;,    &quot;value&quot;: &quot;series&quot;  \},  \{    &quot;using&quot;: &quot;attr&quot;,    &quot;attribute&quot;: &quot;index&quot;    &quot;value&quot;: &quot;0&quot;  \} ]  &quot;parentData&quot;: [\{    &quot;using&quot;: &quot;tag&quot;,    &quot;value&quot;: &quot;Grid&quot;  \} ]\}</code></pre></td>
<td>A WebElement JSON object representing the retrieved element. This object has the following fields:<br /> <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.XMLName</td><td>object</td><td></td></tr><tr><td>value.XMLName.Local</td><td>string</td><td>The name of the retrieved element.</td></tr><tr><td>value.XMLName.Space</td><td>string</td><td>The namespace identifier for the element.</td></tr><tr><td>value.Attr</td><td>array</td><td></td></tr><tr><td>value.Attr.Name</td><td>object</td><td></td></tr><tr><td>value.Attr.Name.Local</td><td>string</td><td>The name of the attribute.</td></tr><tr><td>value.Attr.Name.Space</td><td>string</td><td>The namespace identifier for the attribute.</td></tr><tr><td>value.Attr.Value</td><td>string</td><td>The value of the attribute.</td></tr><tr><td>value.Nodes</td><td>array</td><td>The child elements.</td></tr></tbody></table></td>
<td>Searches for an element on the page, starting from the screen root. The first located element will be returned as a WebElement JSON object.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId/element/active


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId/element/active</td>
<td>A JSON object with the element that currently has focus. This object has the following fields: <br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.XMLName</td><td>object</td><td></td></tr><tr><td>value.XMLName.Local</td><td>string</td><td>The name of the element retrieved.</td></tr><tr><td>value.XMLName.Space</td><td>string</td><td>The namespace identifier of the element retrieved.</td></tr><tr><td>value.Attr</td><td>array</td><td></td></tr><tr><td>value.Attr[i].Name</td><td>object</td><td></td></tr><tr><td>value.Attr[i].Name.Local</td><td>string</td><td>The name of the attribute.</td></tr><tr><td>value.Attr[i].Name.Space</td><td>string</td><td>The namespace identifier of the attribute.</td></tr><tr><td>value.Attr[i].Value</td><td>string</td><td>The value of the attribute.</td></tr><tr><td>value.Nodes</td><td>array</td><td>The child elements of the retrieved item.</td></tr></tbody></table></td>
<td>Retrieves the element on the page that currently has focus.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId/source


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId/source</td>
<td>A JSON object with the current page source. This object has the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>string</td><td>A base64 string that can be decoded to XML.</td></tr></tbody></table></td>
<td>Retrieves the current page source.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId/apps


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId/apps</td>
<td>A JSON object with an array of installed apps. This object has the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>array</td><td></td></tr><tr><td>value[i].Title</td><td>string</td><td>The title of the app.</td></tr><tr><td>value[i].ID</td><td>string</td><td>The ID of the app.</td></tr><tr><td>value[i].Version</td><td>string</td><td>The build version of the app.</td></tr><tr><td>value[i].Subtype</td><td>string</td><td>"ndka"/"rsga"</td></tr><tr><td>value[i].Type</td><td>string</td><td>"menu"/"appl"</td></tr></tbody></table></td>
<td>Retrieves a list of apps currently  installed on the device.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId/current_app


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId/current_app</td>
<td>A JSON object with the app currently loaded on the device. This object has the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>array</td><td></td></tr><tr><td>value[i].Title</td><td>string</td><td>The title of the app.</td></tr><tr><td>value[i].ID</td><td>string</td><td>The ID of the app.</td></tr><tr><td>value[i].Version</td><td>string</td><td>The build version of the app.</td></tr><tr><td>value[i].Subtype</td><td>string</td><td>"ndka"/"rsga"</td></tr><tr><td>value[i].Type</td><td>string</td><td>"menu"/"appl"</td></tr></tbody></table></td>
<td>Retrieves the app currently  running on the device.</td>
</tr>
</tbody>
</table>



## GET v1/session/:sessionId/player


<table>
<thead>
<tr>
<th>Method Type</th>
<th>Path</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>session/:sessionId/player</td>
<td>A JSON object with the information about the Roku media player. This object has the following fields: <table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.error</td><td>string</td><td>Indicates whether there was a playback error.  If no error occurred, this is set to "false"</td></tr><tr><td>value.state</td><td>string</td><td>Indicates the current playback state ("play", "pause", "resume", and so on)</td></tr><tr><td>value.format</td><td>object</td><td>The <strong>format</strong> element contains the following attributes: <em>audio</em>, <em>caption</em>, <em>container</em>, <em>drm</em>, <em>video</em>, and <em>res</em>.</td></tr><tr><td>value.format.audio</td><td>string</td><td>The audio compression method ("aac", "aac_adts", and so on.)</td></tr><tr><td>value.format.caption</td><td>string</td><td>The closed caption format ("608_708", for example).   This value is set to "none" if there are no captions.</td></tr><tr><td>value.format.container</td><td>string</td><td>The container format ("hls", for example)</td></tr><tr><td>value.format.drm</td><td>string</td><td>The encoding type. If no encoding is used, this us set to "none".</td></tr><tr><td>value.format.video</td><td>string</td><td>The format of the currently playing video stream ("mpeg4-15", for example)</td></tr><tr><td>value.format.res</td><td>string</td><td>The resolution of the currently playing video stream ("1280X720", for example).</td></tr><tr><td>value.buffering</td><td>object</td><td>The <strong>buffering</strong> element contains the following attributes: <em>current</em>, <em>max</em>, <em>target</em>.</td></tr><tr><td>value.buffering.current</td><td>string</td><td>The current buffering speed (in kbps).</td></tr><tr><td>value.buffering.max</td><td>string</td><td>The maximum possible buffering speed (in kbps).</td></tr><tr><td>value.buffering.target</td><td>string</td><td>The target buffering speed (in kbps).</td></tr><tr><td>value.newStream</td><td>object</td><td>The <strong>newStream</strong> element contains the following attribute: <em>speed</em>.</td></tr><tr><td>value.newStream.speed</td><td>string</td><td>The current playback speed (in bps)</td></tr><tr><td>value.position</td><td>string</td><td>The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.</td></tr><tr><td>value.duration</td><td>string</td><td>The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td></tr><tr><td>value.isLive</td><td>string</td><td>A flag indicating whether the video being played is a live stream.</td></tr><tr><td>value.runtime</td><td>string</td><td>The runtime of the video being played (in seconds).</td></tr><tr><td>value.streamSegment</td><td>object</td><td>The <strong>streamSegment</strong> attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS<br /><br />This element contains the following attributes: <em>bitrate</em>, <em>mediaSequence</em>, <em>segmentType</em>, and <em>time</em>.</td></tr><tr><td>value.streamSegment.bitrate</td><td>string</td><td>The bitrate of the video segment (in bps).</td></tr><tr><td>value.streamSegment.mediaSequence</td><td>string</td><td>The HLS media sequence ID of the segment in the video.</td></tr><tr><td>value.streamSegment.segmentType</td><td>string</td><td>The type of data in the segment, which may be one of the following values: "audio", "video", "captions",  "mux".</td></tr><tr><td>value.streamSegment.time</td><td>string</td><td>The chunk start time.</td></tr></tbody></table></td>
<td>Retrieves information about the Roku media player.</td>
</tr>
</tbody>
</table>



## Testing production apps

To test production apps with the Roku Web Driver APIs, [package the app](/docs/developer-program/publishing/packaging-channels.md#rekeying) on your Roku device using the same Roku developer account linked to the production version of the app.