---
title: Roku WebDriver
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<HTMLBlock>{`
<div class="markdown-body developer-content-body">
<p>The Roku WebDriver is required to control an app. It can be used in conjunction with the <a href="/docs/developer-program/dev-tools/automated-channel-testing/robot-framework-library.md">Roku Robot Framework Library</a>, <a href="/docs/developer-program/dev-tools/automated-channel-testing/javascript-library.md">Roku JavaScript library</a>, another test framework, or a programming language or a programming language such as Python, Java, or Go to execute test cases.</p>
<h2 id="roku-webdriver-apis">Roku WebDriver APIs</h2>
<p>Roku's WebDriver includes a set of Selenium-based REST APIs for sending commands to a Roku device. These APIs conform to the <a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol">WebDriver standards</a> specified by the World Wide Web Consortium (W3C). Specifically, the Roku WebDriver provides an HTTP-compliant JSON wire protocol with endpoints that map to their respective commands.</p>
<p>Path segments that are prefixed with a colon (:) represent variables.  For example, the <code>:sessionId</code> variable is included in most command paths. This variable represents the ID of the session to be retrieved or the session where a command is to be sent.</p>
<p>The following table lists the available commands:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>HTTP Method</strong></th>
<th class="short-line"><strong>Path</strong></th>
<th class="short-line"><strong>Summary</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">/status</td>
<td class="short-line">Queries the server's current status.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session</td>
<td class="short-line">Creates a new session.</td>
</tr>
<tr>
<td class="short-line">GET</td>
<td class="short-line">v1/sessions</td>
<td class="short-line">Returns a list of the currently active sessions.</td>
</tr>
<tr>
<td class="short-line">GET</td>
<td class="short-line">v1/session/:sessionId</td>
<td class="short-line">Retrieves information about the specified session.</td>
</tr>
<tr>
<td class="short-line">DELETE</td>
<td class="short-line">v1/session/:sessionId</td>
<td class="short-line">Deletes the session.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="long-line">v1/session/:sessionId/input<br>(<em>available since release 2.0</em>)</td>
<td class="long-line">Deep links into content while the app is already running.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/install</td>
<td class="short-line">Installs the specified app.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/launch</td>
<td class="short-line">Launches the specified app.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="long-line">v1/session/:sessionId/load<br>(<em>available since release 2.0</em>)</td>
<td class="short-line">Sideloads the specified app.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/press</td>
<td class="short-line">Simulates a keypress on a Roku remote control.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/timeouts</td>
<td class="long-line">Configures the amount of time that a specific operation can be executed  before it is aborted.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/timeouts/press_wait</td>
<td class="long-line">Configures the amount of time between press cmd execution (if a button_sequence is used in the <strong>/press</strong> endpoint)</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/timeouts/implicit_wait</td>
<td class="long-line">Configures the amount of time that a command can be executed before it is aborted.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/element</td>
<td class="short-line">Searches for an element on the screen.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/elements</td>
<td class="long-line">Searches for multiple elements on the page, starting from the screen root.</td>
</tr>
<tr>
<td class="short-line">POST</td>
<td class="short-line">v1/session/:sessionId/element/active</td>
<td class="long-line">Gets the element on the page that currently has focus.</td>
</tr>
<tr>
<td class="short-line">GET</td>
<td class="short-line">v1/session/:sessionId/apps</td>
<td class="short-line">Returns a list of apps installed on the device.</td>
</tr>
<tr>
<td class="short-line">GET</td>
<td class="short-line">v1/session/:sessionId/current_app</td>
<td class="long-line">Returns information about the app currently loaded on the device.</td>
</tr>
<tr>
<td class="short-line">GET</td>
<td class="short-line">v1/session/:sessionId/source</td>
<td class="short-line">Gets the current screen source.</td>
</tr>
</tbody>
</table></div>
<h3 id="command-requests">Command requests</h3>
<p>All command requests and POST/PUT message bodies are sent with a content-type of <code>application/json;charset=UTF-8</code>.</p>
<h3 id="command-responses">Command responses</h3>
<p>Command responses are sent as <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6">HTTP/1.1 response messages</a>. The following sections describe how the successful, invalid, and failed commands responses are sent.</p>
<h4 id="success">Success</h4>
<p>For successful requests, a 2xx HTTP response is returned. Successful command responses and the included message body are sent with a Content-Type of <code>application/json;charset=UTF-8</code>. The JSON message  body includes the following properties:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">number</td>
<td class="long-line">A status code summarizing the result of the command: <br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Code</strong></th>
<th class="short-line"><strong>Summary</strong></th>
<th class="short-line"><strong>Detail</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">0</td>
<td class="short-line"><code>Success</code></td>
<td class="short-line">The command executed successfully.</td>
</tr>
<tr>
<td class="short-line">6</td>
<td class="short-line"><code>NoSuchDriver</code></td>
<td class="short-line">A session is either terminated or not started</td>
</tr>
<tr>
<td class="short-line">7</td>
<td class="short-line"><code>NoSuchElement</code></td>
<td class="long-line">An element could not be located on the page using the given search parameters.</td>
</tr>
<tr>
<td class="short-line">9</td>
<td class="short-line"><code>UnknownCommand</code></td>
<td class="long-line">The requested resource could not be found, or a request was received using an HTTP method that is not supported by the mapped resource.</td>
</tr>
<tr>
<td class="short-line">13</td>
<td class="short-line"><code>UnknownError</code></td>
<td class="long-line">An unknown server-side error occurred while processing the command.</td>
</tr>
<tr>
<td class="short-line">21</td>
<td class="short-line"><code>Timeout</code></td>
<td class="long-line">An operation did not complete before its timeout expired.</td>
</tr>
<tr>
<td class="short-line">32</td>
<td class="short-line"><code>InvalidSelector</code></td>
<td class="short-line">Argument was an invalid selector.</td>
</tr>
<tr>
<td class="short-line">33</td>
<td class="short-line"><code>SessionNotCreatedException</code></td>
<td class="short-line">A new session could not be created.</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line"><code>*</code></td>
<td class="short-line">The response JSON value.</td>
</tr>
</tbody>
</table></div>
<h4 id="invalid">Invalid</h4>
<p>For invalid requests (unknown command or resource not found), a 4xx HTTP response is returned. Invalid command responses are sent with a content-type of <code>text-plain</code>, and include a message body with a descriptive error message.</p>
<h4 id="failed">Failed</h4>
<p>If a request maps to a valid command and contains all of the expected parameters in the request body, but fails to execute successfully, a 500 Internal Server Error is returned. The response and included message body have a Content-Type of <code>application/json;charset=UTF-8</code>.  The message body includes two JSON objects—one with the applicable command response status, and the other with a description of the failure:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">status</td>
<td class="short-line">number</td>
<td class="long-line">A status code summarizing the result of the command. See the <a href="#success">success</a> section for the possible values.</td>
</tr>
<tr>
<td class="short-line">message</td>
<td class="short-line">string</td>
<td class="short-line">A descriptive message for the command failure.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-status">GET /status</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">status</td>
<td class="long-line">A JSON object with the server's platform and build date. This object contains the following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising The advertising ID of the device</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">number</td>
<td class="long-line">The <a href="#success">status code</a> summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.build</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>build</strong> element contains the following attributes: <em>version</em> and <em>time</em>.</td>
</tr>
<tr>
<td class="short-line">value.build.version</td>
<td class="short-line">string</td>
<td class="short-line">A generic release label.</td>
</tr>
<tr>
<td class="short-line">value.build.time</td>
<td class="short-line">string</td>
<td class="short-line">A timestamp specifying when the server was built.</td>
</tr>
<tr>
<td class="short-line">value.os</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>os</strong> element contains the following attributes: <em>arch</em> and <em>name</em>.</td>
</tr>
<tr>
<td class="short-line">value.os.arch</td>
<td class="short-line">string</td>
<td class="short-line">The current system architecture.</td>
</tr>
<tr>
<td class="short-line">value.os.name</td>
<td class="short-line">string</td>
<td class="long-line">The name of the operating system the server is currently running on (for example, "windows", "linux", and so on).</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Queries the server's current status and returns the general state of the server. A 200 OK response is returned if the server is alive and accepting commands. <br><br>This method returns The server should respond with a general "HTTP 200 OK" response if it . The response body should be a JSON object describing.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1session">POST v1/session</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session</td>
<td class="long-line"><strong>ip</strong> - {string}: The IP address of the device.  <br><br><strong>Example</strong>:<br><p>{
"ip": "117.1.1.1"
}</p></td>
<td class="long-line">A JSON object with the device's advertisement ID, which is used as the sessionId. This object has the following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertisement ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.vendorName</td>
<td class="short-line">string</td>
<td class="short-line">The vendor of the device.</td>
</tr>
<tr>
<td class="short-line">value.modelName</td>
<td class="short-line">string</td>
<td class="short-line">The model of the device.</td>
</tr>
<tr>
<td class="short-line">value.language</td>
<td class="short-line">string</td>
<td class="short-line">The language of the device.</td>
</tr>
<tr>
<td class="short-line">value.country</td>
<td class="short-line">string</td>
<td class="short-line">The country of the device.</td>
</tr>
<tr>
<td class="short-line">value.ip</td>
<td class="short-line">string</td>
<td class="short-line">The IP address of the device.</td>
</tr>
<tr>
<td class="short-line">value.timeout</td>
<td class="short-line">int</td>
<td class="long-line">The specified timeout for WebDriver client requests.</td>
</tr>
<tr>
<td class="short-line">value.pressDelay</td>
<td class="short-line">int</td>
<td class="short-line">The specified delay between key presses.</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Creates a new session.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessions">GET v1/sessions</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">sessions</td>
<td class="long-line">A JSON object with an array of sessions. This object has the following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertisement ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value[i].vendorName</td>
<td class="short-line">string</td>
<td class="short-line">The vendor of the device.</td>
</tr>
<tr>
<td class="short-line">value[i].modelName</td>
<td class="short-line">string</td>
<td class="short-line">The model of the device.</td>
</tr>
<tr>
<td class="short-line">value[i].language</td>
<td class="short-line">string</td>
<td class="short-line">The language of the device.</td>
</tr>
<tr>
<td class="short-line">value[i].country</td>
<td class="short-line">string</td>
<td class="short-line">The country of the device.</td>
</tr>
<tr>
<td class="short-line">value[i].ip</td>
<td class="short-line">string</td>
<td class="short-line">The IP address of the device.</td>
</tr>
<tr>
<td class="short-line">value[i].timeout</td>
<td class="short-line">int</td>
<td class="short-line">The specified timeout for ECP client requests.</td>
</tr>
<tr>
<td class="short-line">value[i].pressDelay</td>
<td class="short-line">int</td>
<td class="short-line">The specified delay between key presses.</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Returns a list of the currently active sessions.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionid">GET v1/session/:sessionId</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId</td>
<td class="long-line">A JSON object with device information. This object has the following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertisement ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.vendorName</td>
<td class="short-line">string</td>
<td class="short-line">The vendor of the device.</td>
</tr>
<tr>
<td class="short-line">value.modelName</td>
<td class="short-line">string</td>
<td class="short-line">The model of the device.</td>
</tr>
<tr>
<td class="short-line">value.language</td>
<td class="short-line">string</td>
<td class="short-line">The language of the device.</td>
</tr>
<tr>
<td class="short-line">value.country</td>
<td class="short-line">string</td>
<td class="short-line">The country of the device.</td>
</tr>
<tr>
<td class="short-line">value.ip</td>
<td class="short-line">string</td>
<td class="short-line">The IP address of the device.</td>
</tr>
<tr>
<td class="short-line">value.timeout</td>
<td class="short-line">int</td>
<td class="long-line">The specified timeout for WebDriver client requests.</td>
</tr>
<tr>
<td class="short-line">value.pressDelay</td>
<td class="short-line">int</td>
<td class="short-line">The specified delay between key presses.</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Returns device information based on the session specified in the URL path.</td>
</tr>
</tbody>
</table></div>
<h2 id="delete-v1sessionsessionid">DELETE v1/session/:sessionId</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">DELETE</td>
<td class="short-line">session/:sessionId</td>
<td class="long-line">A JSON object that has the following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Deletes the session specified in the URL path.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidinput">POST v1/session/:sessionId/input</h2>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/input</td>
<td class="long-line"><strong>channelId</strong> - {number}: The ID of the app to be launched.<br><br><strong>contentId</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.<br><br><strong>contentType</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.<br><br><strong>Example:</strong><br><pre><code>{
  "channelId": "dev",
  "contentId": "myMovie123",
  "contentType": "movie"
}
</code></pre></td>
<td class="long-line">A JSON object with the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Deep links into content while the app is already running.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidinstall">POST v1/session/:sessionId/install</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/install</td>
<td class="long-line"><strong>channelId</strong> - {number}: The ID of the app to be installed.<br><br><strong>Example:</strong><br><pre><code>{
    "channelId": "dev"
}
</code></pre></td>
<td class="long-line">A JSON object with the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Installs the specified the app.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidlaunch">POST v1/session/:sessionId/launch</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/launch</td>
<td class="long-line"><strong>channelId</strong> - {number}: The ID of the app to be launched.<br><br><strong>contentId</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.<br><br><strong>contentType</strong> - {string} (optional): The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.<br><br><strong>Example:</strong><br><pre><code>{
  "channelId": "dev",
  "contentId": "myMovie123",
  "contentType": "movie"
}
</code></pre></td>
<td class="long-line">A JSON object with the  following fields:<br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Launches the specified  app.<br><br>You can use this method to launch an app into playback or an episodic picker screen in order to test deep linking.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidload">POST v1/session/:sessionId/load</h2>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/load</td>
<td class="long-line"><strong>channel</strong> - {file}: A zipped package file.<br><br><strong>username</strong> - {file}: Enter <strong>rokudev</strong>, which is the user name for the Development Application Installer.<br><br><strong>password</strong> - {file}: The password for accessing the Development Application Installer on your Roku device.<br><br><strong>Example:</strong><br><pre><code>{
    "channel": "myChannel.zip",
    "username": "rokudev",
    "password": "your_device_password",
}
</code></pre></td>
<td class="long-line">A JSON object with the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Sideloads an app.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidpress">POST v1/session/:sessionId/press</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/press</td>
<td class="long-line"><strong>button</strong> - {string}: The name of the key to be pressed ("home", "up", "down", "left", "right").<br><br><strong>button_sequence</strong> - {array: string}: An array of keys to be pressed in the specified sequence. <br><br><strong>button_delays</strong> - {array: string} (optional): An array of delays (in ms) between buttons executions. The default value is 1000ms.<br><br><strong>Example:</strong> <pre><code>{
   "button_sequence": ["up", "down", "left"],
   "buttons_delays": ["1000", "2000"]
}
</code></pre><br><br>In this example, the delay after the "up" keypress is 1000ms and 2000ms after the "down" keypress.</td>
<td class="long-line">A JSON object with the  following fields:<br> <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Simulates the press and release of the specified key.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidtimeouts">POST v1/session/:sessionId/timeouts</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/timeouts</td>
<td class="long-line"><strong>type</strong> - {string}: Either "implicit" (ECP commands) or "pressDelay"  (delay between press cmd execution)<br><br><strong>ms</strong> - {number}: The amount of time, in milliseconds, that time-limited commands are permitted to run.<br><br> <strong>Example</strong>: <br><pre><code>{
  "type": "implicit",
  "ms": 2000
}
</code></pre></td>
<td class="long-line">A JSON object with the specified session. This object has the following fields:<br> <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Configure the amount of time that an operation can be executed before it is aborted.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidtimeoutsimplicit_wait">POST v1/session/:sessionId/timeouts/implicit_wait</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/timeouts/implicit_wait</td>
<td class="long-line"><strong>ms</strong> - {number}: The amount of time (in milliseconds) that commands are allowed to run.<br><br><strong>Example:</strong> <br><pre><code>{
    "ms": 2000
}
</code></pre></td>
<td class="long-line">A JSON object with the following fields:<br> <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Specify the amount of time that commands can be executed  before being aborted.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidtimeoutspress_wait">POST v1/session/:sessionId/timeouts/press_wait</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/timeouts/press_wait</td>
<td class="long-line"><strong>ms</strong> - {number}: The amount of time (in milliseconds) between keypress commands.<br><br><strong>Example:</strong><br> <pre><code>{
    "ms": 2000
}
</code></pre></td>
<td class="long-line">A JSON object with the following fields: <br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line">null</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Specify the amount of time to wait between key presses.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidelements">POST v1/session/:sessionId/elements</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/elements</td>
<td class="long-line">An array of the following objects, which can be used to located an element: <br><br><strong>using</strong> - {string}: The locator strategy to use. This may be one of the following values: <ul>
<li><strong>text</strong>: Returns an element whose text matches the search value.</li>
<li><strong>attr</strong>: Returns an element whose specified attributes matches the search value.</li>
<li><strong>tag</strong>: Returns an element whose tag name matches the search value.</li>
</ul><br><br><strong>attribute</strong> - {string}:  The attribute name (used only for "attr" strategy) <br><br><strong>value</strong> - {string}: The search target.<br><br><strong>Example</strong>:<br><pre><code>{
  "elementData": [{
    "using": "tag",
    "value": "Label"
  },
  {
    "using": "text",
    "value": "series"
  },
  {
    "using": "attr",
    "attribute": "index"
    "value": "0"
  }
 ]
  "parentData": [{
    "using": "tag",
    "value": "Grid"
  }
 ]
}
</code></pre></td>
<td class="long-line">A WebElement JSON object representing the retrieved elements. This object has the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of the retrieved element</td>
</tr>
<tr>
<td class="short-line">value.XMLName.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier for the element.</td>
</tr>
<tr>
<td class="short-line">value.Attr</td>
<td class="short-line">array</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier for the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Value</td>
<td class="short-line">string</td>
<td class="short-line">The value of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Nodes</td>
<td class="short-line">array</td>
<td class="short-line">The child elements.</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Searches for elements on the page matching the search criteria, starting from the screen root. All the matching elements will be returned in a WebElement JSON object.</td>
</tr>
</tbody>
</table></div>
<h2 id="post-v1sessionsessionidelement">POST v1/session/:sessionId/element</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">JSON Parameters</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">POST</td>
<td class="short-line">session/:sessionId/element</td>
<td class="long-line">An <strong>elementData</strong> array and optional <strong>parentData</strong> array with the following objects that can be used to locate an element: <br><br><strong>using</strong> - {string}: The locator strategy to use. This may be one of the following values: <ul>
<li><strong>text</strong>: Returns an element whose text matches the search value.</li>
<li><strong>attr</strong>: Returns an element whose specified attributes matches the search value.</li>
<li><strong>tag</strong>: Returns an element whose tag name matches the search value.</li>
</ul><br><br><strong>attribute</strong> - {string}:  The attribute name (used only for "attr" strategy) <br><br><strong>value</strong> - {string}: The search target.<br><br><strong>Example</strong>:<br><pre><code>{
  "elementData": [{
    "using": "tag",
    "value": "Label"
  },
  {
    "using": "text",
    "value": "series"
  },
  {
    "using": "attr",
    "attribute": "index"
    "value": "0"
  }
 ]
  "parentData": [{
    "using": "tag",
    "value": "Grid"
  }
 ]
}
</code></pre></td>
<td class="long-line">A WebElement JSON object representing the retrieved element. This object has the following fields:<br> <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of the retrieved element.</td>
</tr>
<tr>
<td class="short-line">value.XMLName.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier for the element.</td>
</tr>
<tr>
<td class="short-line">value.Attr</td>
<td class="short-line">array</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr.Name</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr.Name.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr.Name.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier for the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr.Value</td>
<td class="short-line">string</td>
<td class="short-line">The value of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Nodes</td>
<td class="short-line">array</td>
<td class="short-line">The child elements.</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Searches for an element on the page, starting from the screen root. The first located element will be returned as a WebElement JSON object.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionidelementactive">GET v1/session/:sessionId/element/active</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId/element/active</td>
<td class="long-line">A JSON object with the element that currently has focus. This object has the following fields: <br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.XMLName.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of the element retrieved.</td>
</tr>
<tr>
<td class="short-line">value.XMLName.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier of the element retrieved.</td>
</tr>
<tr>
<td class="short-line">value.Attr</td>
<td class="short-line">array</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name.Local</td>
<td class="short-line">string</td>
<td class="short-line">The name of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Name.Space</td>
<td class="short-line">string</td>
<td class="short-line">The namespace identifier of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Attr[i].Value</td>
<td class="short-line">string</td>
<td class="short-line">The value of the attribute.</td>
</tr>
<tr>
<td class="short-line">value.Nodes</td>
<td class="short-line">array</td>
<td class="short-line">The child elements of the retrieved item.</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Retrieves the element on the page that currently has focus.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionidsource">GET v1/session/:sessionId/source</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId/source</td>
<td class="long-line">A JSON object with the current page source. This object has the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device.</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">string</td>
<td class="short-line">A base64 string that can be decoded to XML.</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Retrieves the current page source.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionidapps">GET v1/session/:sessionId/apps</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId/apps</td>
<td class="long-line">A JSON object with an array of installed apps. This object has the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">array</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value[i].Title</td>
<td class="short-line">string</td>
<td class="short-line">The title of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].ID</td>
<td class="short-line">string</td>
<td class="short-line">The ID of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].Version</td>
<td class="short-line">string</td>
<td class="short-line">The build version of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].Subtype</td>
<td class="short-line">string</td>
<td class="short-line">"ndka"/"rsga"</td>
</tr>
<tr>
<td class="short-line">value[i].Type</td>
<td class="short-line">string</td>
<td class="short-line">"menu"/"appl"</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Retrieves a list of apps currently  installed on the device.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionidcurrent_app">GET v1/session/:sessionId/current_app</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId/current_app</td>
<td class="long-line">A JSON object with the app currently loaded on the device. This object has the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command.</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">array</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value[i].Title</td>
<td class="short-line">string</td>
<td class="short-line">The title of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].ID</td>
<td class="short-line">string</td>
<td class="short-line">The ID of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].Version</td>
<td class="short-line">string</td>
<td class="short-line">The build version of the app.</td>
</tr>
<tr>
<td class="short-line">value[i].Subtype</td>
<td class="short-line">string</td>
<td class="short-line">"ndka"/"rsga"</td>
</tr>
<tr>
<td class="short-line">value[i].Type</td>
<td class="short-line">string</td>
<td class="short-line">"menu"/"appl"</td>
</tr>
</tbody>
</table></div></td>
<td class="long-line">Retrieves the app currently  running on the device.</td>
</tr>
</tbody>
</table></div>
<h2 id="get-v1sessionsessionidplayer">GET v1/session/:sessionId/player</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Method Type</th>
<th class="short-line">Path</th>
<th class="short-line">Return Value</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">GET</td>
<td class="short-line">session/:sessionId/player</td>
<td class="long-line">A JSON object with the information about the Roku media player. This object has the following fields: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">sessionId</td>
<td class="short-line">string</td>
<td class="short-line">The advertising ID of the device</td>
</tr>
<tr>
<td class="short-line">status</td>
<td class="short-line">int</td>
<td class="long-line">A status code summarizing the result of the command</td>
</tr>
<tr>
<td class="short-line">value</td>
<td class="short-line">object</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">value.error</td>
<td class="short-line">string</td>
<td class="long-line">Indicates whether there was a playback error.  If no error occurred, this is set to "false"</td>
</tr>
<tr>
<td class="short-line">value.state</td>
<td class="short-line">string</td>
<td class="long-line">Indicates the current playback state ("play", "pause", "resume", and so on)</td>
</tr>
<tr>
<td class="short-line">value.format</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>format</strong> element contains the following attributes: <em>audio</em>, <em>caption</em>, <em>container</em>, <em>drm</em>, <em>video</em>, and <em>res</em>.</td>
</tr>
<tr>
<td class="short-line">value.format.audio</td>
<td class="short-line">string</td>
<td class="long-line">The audio compression method ("aac", "aac_adts", and so on.)</td>
</tr>
<tr>
<td class="short-line">value.format.caption</td>
<td class="short-line">string</td>
<td class="long-line">The closed caption format ("608_708", for example).   This value is set to "none" if there are no captions.</td>
</tr>
<tr>
<td class="short-line">value.format.container</td>
<td class="short-line">string</td>
<td class="short-line">The container format ("hls", for example)</td>
</tr>
<tr>
<td class="short-line">value.format.drm</td>
<td class="short-line">string</td>
<td class="long-line">The encoding type. If no encoding is used, this us set to "none".</td>
</tr>
<tr>
<td class="short-line">value.format.video</td>
<td class="short-line">string</td>
<td class="long-line">The format of the currently playing video stream ("mpeg4-15", for example)</td>
</tr>
<tr>
<td class="short-line">value.format.res</td>
<td class="short-line">string</td>
<td class="long-line">The resolution of the currently playing video stream ("1280X720", for example).</td>
</tr>
<tr>
<td class="short-line">value.buffering</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>buffering</strong> element contains the following attributes: <em>current</em>, <em>max</em>, <em>target</em>.</td>
</tr>
<tr>
<td class="short-line">value.buffering.current</td>
<td class="short-line">string</td>
<td class="short-line">The current buffering speed (in kbps).</td>
</tr>
<tr>
<td class="short-line">value.buffering.max</td>
<td class="short-line">string</td>
<td class="short-line">The maximum possible buffering speed (in kbps).</td>
</tr>
<tr>
<td class="short-line">value.buffering.target</td>
<td class="short-line">string</td>
<td class="short-line">The target buffering speed (in kbps).</td>
</tr>
<tr>
<td class="short-line">value.newStream</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>newStream</strong> element contains the following attribute: <em>speed</em>.</td>
</tr>
<tr>
<td class="short-line">value.newStream.speed</td>
<td class="short-line">string</td>
<td class="short-line">The current playback speed (in bps)</td>
</tr>
<tr>
<td class="short-line">value.position</td>
<td class="short-line">string</td>
<td class="long-line">The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.</td>
</tr>
<tr>
<td class="short-line">value.duration</td>
<td class="short-line">string</td>
<td class="long-line">The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td>
</tr>
<tr>
<td class="short-line">value.isLive</td>
<td class="short-line">string</td>
<td class="long-line">A flag indicating whether the video being played is a live stream.</td>
</tr>
<tr>
<td class="short-line">value.runtime</td>
<td class="short-line">string</td>
<td class="long-line">The runtime of the video being played (in seconds).</td>
</tr>
<tr>
<td class="short-line">value.streamSegment</td>
<td class="short-line">object</td>
<td class="long-line">The <strong>streamSegment</strong> attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS<br><br>This element contains the following attributes: <em>bitrate</em>, <em>mediaSequence</em>, <em>segmentType</em>, and <em>time</em>.</td>
</tr>
<tr>
<td class="short-line">value.streamSegment.bitrate</td>
<td class="short-line">string</td>
<td class="short-line">The bitrate of the video segment (in bps).</td>
</tr>
<tr>
<td class="short-line">value.streamSegment.mediaSequence</td>
<td class="short-line">string</td>
<td class="long-line">The HLS media sequence ID of the segment in the video.</td>
</tr>
<tr>
<td class="short-line">value.streamSegment.segmentType</td>
<td class="short-line">string</td>
<td class="long-line">The type of data in the segment, which may be one of the following values: "audio", "video", "captions",  "mux".</td>
</tr>
<tr>
<td class="short-line">value.streamSegment.time</td>
<td class="short-line">string</td>
<td class="short-line">The chunk start time.</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Retrieves information about the Roku media player.</td>
</tr>
</tbody>
</table></div>
<h2 id="testing-production-apps">Testing production apps</h2>
<p>To test production apps with the Roku Web Driver APIs, <a href="/docs/developer-program/publishing/packaging-channels.md#rekeying">package the app</a> on your Roku device using the same Roku developer account linked to the production version of the app.</p></div>
`}</HTMLBlock>

<br />
