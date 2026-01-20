---
title: Roku Robot Framework Library
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
<HTMLBlock>{`
<div class="markdown-body developer-content-body"><h1 id="roku-robot-framework-library">Roku Robot Framework Library</h1>
<p>Roku's Robot Framework Library enables keyword-driven testing of apps. The library resides in a Python class that has methods that map directly to keyword names. The keywords take the same arguments as the methods implementing them. The keywords report failures with exceptions, create logs by writing to standard output, and return values using the <code>return</code> statement.</p>
<h2 id="instantiating-the-library">Instantiating the library</h2>
<p>To create an instance of the Roku Framework Robot Library, provide the following four arguments:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Argument</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">ip</td>
<td class="long-line">The IP address of the device to be used for testing.</td>
</tr>
<tr>
<td class="short-line">path</td>
<td class="short-line">The path to the Roku WebDriver.</td>
</tr>
<tr>
<td class="short-line">timeout</td>
<td class="long-line">The amount of time (in milliseconds) that commands are allowed to run.</td>
</tr>
<tr>
<td class="short-line">pressDelay</td>
<td class="long-line">The amount of time (in milliseconds) between keypress commands. This argument works with the <strong>Send keys</strong> command.</td>
</tr>
</tbody>
</table></div>
<p>The following example demonstrates how to instantiate the Roku Robot Framework Library:</p>
<pre><code>*** Settings ***
Library ./../Library/RobotLibrary.py  $\{ip_address}  $\{timeout}  $\{pressDelay}   $\{server_path}

*** Variables ***
$\{ip_address} 127.0.0.1
$\{server_path} D:/path/to/webDriver/main.exe
$\{timeout} 20000
$\{pressDelay} 2000

.py file:
class RobotLibrary:

    def __init__(self, ip, timeout = 0, pressDelay = 0,  path = ""):
        &lt;some code&gt;
</code></pre>
<h2 id="keywords">Keywords</h2>
<p>The Roku's Robot Framework Library includes the following keywords:</p>
<ul>
<li>Sideload (<em>available since release 2.0</em>)</li>
<li>Launch the app</li>
<li>Input deep linking data  (<em>available since release 2.0</em>)</li>
<li>Get apps</li>
<li>Send key</li>
<li>Send keys</li>
<li>Send word</li>
<li>Mark timer</li>
<li>Get timer</li>
<li>Verify is playback started  (<em>available since release 2.0</em>)</li>
<li>Verify is screen loaded  (<em>available since release 2.0</em>)</li>
<li>Get child nodes  (<em>available since release 2.1</em>)</li>
<li>Get element</li>
<li>Get elements</li>
<li>Get focused element</li>
<li>Verify is app loaded</li>
<li>Get current app info</li>
<li>Get device info</li>
<li>Get player info</li>
<li>Verify app exists</li>
<li>Set timeout</li>
<li>Set press delay</li>
<li>Get attribute</li>
</ul>
<blockquote>
<p>A keyword will fail if its respective WebDriver endpoint returns a 4xx or 500 error.</p>
</blockquote>
<h3 id="sideload">Sideload</h3>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Argument</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Sideload</td>
<td class="long-line"><ul>
<li><strong>channel</strong>: A zipped package file.</li>
<li><strong>username</strong>: Enter <strong>rokudev</strong>, which is the user name for the Development Application Installer.</li>
<li><strong>password</strong>: The password for accessing the Development Application Installer on your Roku device.</li>
</ul></td>
<td class="long-line">Sideloads an app that has been packaged into a zip file.<br><br>If the <strong>Sideload</strong> command fails, <a href="/docs/developer-program/getting-started/developer-setup.md#sideloading-channels">sideload</a> the app to be tested and use the <strong>Launch the app</strong> command.</td>
<td class="long-line"><code>Sideload myChannel.zip rokudev your_device_password</code></td>
</tr>
</tbody>
</table></div>
<h3 id="launch-the-app">Launch the app</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Argument</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Launch the app</td>
<td class="long-line"><ul>
<li><strong>channel_code</strong>: The ID of the app to be launched.</li>
<li><strong>contentId</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li>
<li><strong>mediaType</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li>
</ul></td>
<td class="long-line">Launches the app corresponding to the specified channel ID.</td>
<td class="short-line"><code>Launch the app dev myMovie123 movie</code></td>
</tr>
</tbody>
</table></div>
<h3 id="input-deep-linking-data">Input deep linking data</h3>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Argument</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Input deep linking data</td>
<td class="long-line"><ul>
<li><strong>channelId</strong>: The ID of the app to be launched.</li>
<li><strong>contentId</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li>
<li><strong>mediaType</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li>
</ul></td>
<td class="long-line">Launches the app corresponding to the specified app ID.</td>
<td class="long-line"><code>Input deep linking data dev myMovie123 movie</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-apps">Get apps</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get apps</td>
<td class="long-line">Returns a list of installed apps as an array of objects. Each app object contains the following fields: <ul>
<li>title</li>
<li>id</li>
<li>type</li>
<li>version</li>
<li>subtype</li>
</ul></td>
<td class="short-line"><code>@{apps}=Get Apps</code></td>
</tr>
</tbody>
</table></div>
<h3 id="send-key">Send key</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Send key</td>
<td class="long-line"><ul>
<li><strong>key_press</strong>: The key to be pressed and released, which may be one of the following: "up", "down", "right", "left", "back, "select", "instantreplay", "play", "stop", "rev", "fwd", and "info".</li>
<li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li>
</ul></td>
<td class="long-line">Simulates the press and release of the specified key.</td>
<td class="short-line"><code>Send key up 2</code></td>
</tr>
</tbody>
</table></div>
<h3 id="send-keys">Send keys</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Send keys</td>
<td class="long-line"><ul>
<li><strong>sequence</strong>: An array containing the sequence of keys to be pressed and released (for example, down, down, down, down, select).</li>
<li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li>
</ul></td>
<td class="short-line">Simulates the sequence of keypresses and releases.</td>
<td class="long-line"><pre><code>**Variables***
@{keys}=    down down down down select

***Test cases***
Send keys   $\{keys} 1
</code></pre></td>
</tr>
</tbody>
</table></div>
<h3 id="send-word">Send word</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Send word</td>
<td class="long-line"><ul>
<li><strong>word</strong>: The specified word to be entered.</li>
<li><strong>delay</strong>: The delay (in seconds) before the entry of each letter in the specified word. This argument is optional, and it defaults to 2 seconds if not specified.</li>
</ul></td>
<td class="long-line">Simulates the press and release of each letter in a word.</td>
<td class="short-line"><code>Send word Hello</code></td>
</tr>
</tbody>
</table></div>
<h3 id="mark-timer">Mark timer</h3>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Mark timer</td>
<td class="short-line">Starts the timer.</td>
<td class="short-line"><code>Mark timer</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-timer">Get timer</h3>
<p>(<em>available since release 2.0</em>)</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get timer</td>
<td class="long-line">Returns the number of milliseconds elapsed since the timer was last started.</td>
<td class="short-line"><code>$\{time} = Get timer</code></td>
</tr>
</tbody>
</table></div>
<h3 id="verify-is-playback-started">Verify is playback started</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Verify is playback started</td>
<td class="long-line"><ul>
<li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
<li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
</ul></td>
<td class="long-line">Verify playback has started on the Roku media player. <br><br>This keyword fails if player state is not "play".</td>
<td class="short-line"><code>Verify is playback started 10 1</code></td>
</tr>
</tbody>
</table></div>
<h3 id="verify-is-screen-loaded">Verify is screen loaded</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Verify is screen loaded</td>
<td class="long-line"><ul>
<li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> command for more information.</li>
<li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
<li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
</ul></td>
<td class="long-line">Verify that the screen is loaded based on the provided element data.</td>
<td class="long-line"><pre><code>***Variables***
&amp;{ElementData}=   using=text  value=some text
@{ElementArray}=    &amp;{ElementData}
&amp;{ElementParams}    elementData=$\{ElementArray}

*** Test Cases ***
Verify is screen loaded     $\{ElementParams}
</code></pre></td>
</tr>
</tbody>
</table></div>
<h3 id="get-child-nodes">Get child nodes</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get child nodes</td>
<td class="long-line"><ul>
<li><strong>parentNode</strong>: The parent node for which the child nodes are to be retrieved.</li>
</ul></td>
<td class="long-line">Retrieves the child component of the specified node.</td>
<td class="long-line"><pre><code>***Variables***
&amp;{LabelData}=
using=text  value=Live Gaming
&amp;{IndexData}=   using=attr  attribute=index value=1
@{LabelArray}=  &amp;{LabelData}    &amp;{IndexData}
@{ParamArray}=  &amp;{PosterData}

***Test Cases***
&amp;{focusedEl}=
get focusedElement

@{Nodes}=
Get child nodes
$\{focusedEl}
$\{ParamArray}
</code></pre></td>
</tr>
</tbody>
</table></div>
<ul>
<li>
<p><strong>locator</strong>: An array containing search criteria for the child nodes to be retrieved. The locator has the following syntax:</p>
<pre><code>  using=attribute, tag, or text  attribute=specific attribute  value=tag or attribute value
</code></pre>
</li>
</ul>
<h3 id="get-element">Get element</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get element</td>
<td class="long-line"><ul>
<li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> for more information.</li>
<li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
</ul></td>
<td class="long-line">Searches for an element on the page based on the specified locator starting from the screen root.  Returns information on the first matching element.</td>
<td class="long-line"><pre><code>***Variables***
&amp;{ElementData}=     using=text  value=some text
@{ElementArray}=    &amp;{ElementData}
&amp;{ElementParams}    elementData=$\{ElementArray}

***Test Cases***
&amp;{element}= Get element $\{ElementParams}
</code></pre></td>
</tr>
</tbody>
</table></div>
<h3 id="get-elements">Get elements</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get elements</td>
<td class="long-line"><ul>
<li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> for more information.</li>
<li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
</ul></td>
<td class="long-line">Searches for elements on the page based on the specified locators starting from the screen root. Returns information on the matching elements.</td>
<td class="long-line"><pre><code>***Variables***
&amp;{ElementData}=     using=text  value=some text
@{ElementArray}=    &amp;{ElementData}
&amp;{ElementParams}    elementData=$\{ElementArray}

***Test Cases***
@{elements}=    Get elements    $\{locators}
</code></pre></td>
</tr>
</tbody>
</table></div>
<h3 id="get-focused-element">Get focused element</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get focused element</td>
<td class="long-line">Return the element on the screen that currently has focus. See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#get-v1/session/:sessionId/element/active">WebDriver active element command</a> for more information.</td>
<td class="short-line"><code>&amp;{element}= Get focused element</code></td>
</tr>
</tbody>
</table></div>
<h3 id="verify-is-channel-loaded">Verify is channel loaded</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Verify is channel loaded</td>
<td class="long-line"><ul>
<li><strong>id</strong>: The ID of the app to be launched. Use <code>dev</code> to verify a sideloaded app.</li>
<li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
<li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
</ul></td>
<td class="long-line">Verify that the specified app has been launched.<br><br>This keyword fails if the provided app ID does not match a valid channel.</td>
<td class="short-line"><code>Verify is channel loaded dev</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-current-channel-info">Get current channel info</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get current channel info</td>
<td class="long-line">Returns an object containing information about the app currently loaded. This object has the following fields:<br><div class="hscroll"><table>
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
<td class="long-line"><code>&amp;{channel}=Get current channel info</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-device-info">Get device info</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get device info</td>
<td class="long-line">Returns an object containing the information about the device. This object has the following fields:<br><div class="hscroll"><table>
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
<td class="short-line"><code>&amp;{info}=Get device info</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-player-info">Get player info</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get player info</td>
<td class="long-line">Returns an object containing information about the Roku media player. This object has the following fields:<br><div class="hscroll"><table>
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
<td class="long-line">Indicates whether there was a playback error. If no error occurred, this is set to "false"</td>
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
<td class="long-line">The closed caption format ("608_708", for example). This value is set to "none" if there are no captions.</td>
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
<td class="long-line">The <strong>streamSegment</strong> attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS  This element contains the following attributes: <em>bitrate</em>, <em>mediaSequence</em>, <em>segmentType</em>, and <em>time</em>.</td>
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
<td class="long-line">The type of data in the segment, which may be one of the following values: "audio", "video", "captions", "mux".</td>
</tr>
<tr>
<td class="short-line">value.streamSegment.time</td>
<td class="short-line">string</td>
<td class="short-line">The chunk start time.</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line"><code>&amp;{player}=Get player info</code></td>
</tr>
</tbody>
</table></div>
<h3 id="verify-is-channel-exist">Verify is channel exist</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Verify is channel exist</td>
<td class="long-line"><ul>
<li><strong>apps</strong>: An array containing  currently installed on the device.</li>
<li><strong>id</strong>: The ID of the app to be verified. Use <code>dev</code> to verify a sideloaded app.</li>
</ul></td>
<td class="long-line">Verifies the specified app is installed on the device. This keyword fails if the <strong>apps</strong> array does not contain the app specified in the <strong>id</strong> argument.</td>
<td class="long-line"><pre><code>@{apps}=    Get apps
Verify is channel exist @{apps} dev
</code></pre></td>
</tr>
</tbody>
</table></div>
<h3 id="set-timeout">Set timeout</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Set timeout</td>
<td class="long-line"><ul>
<li><strong>timeout</strong>: The amount of time (in milliseconds) that Web driver client requests are allowed to run.</li>
</ul></td>
<td class="short-line">Sets the timeout for Web driver client requests.</td>
<td class="short-line"><code>Set timeout 5000</code></td>
</tr>
</tbody>
</table></div>
<h3 id="set-press-delay">Set press delay</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Set press delay</td>
<td class="long-line"><ul>
<li><strong>delay</strong>: The interval (in milliseconds) to be used between key presses.</li>
</ul></td>
<td class="long-line">Sets the delay between key presses. This keyword works with the <strong>Send keys</strong> keyword.</td>
<td class="short-line"><code>Set press delay 2000</code></td>
</tr>
</tbody>
</table></div>
<h3 id="get-attribute">Get attribute</h3>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Keyword</th>
<th class="short-line">Arguments</th>
<th class="short-line">Description</th>
<th class="short-line">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Get attribute</td>
<td class="long-line"><ul>
<li><strong>element</strong>: An object that contains element information (attributes, child nodes).</li>
<li><strong>attr</strong>: The name of the attribute to be retrieved.</li>
</ul></td>
<td class="long-line">Get attribute value. This keyword fails if an element does not contain the specified attribute.</td>
<td class="long-line"><pre><code>***Variables***
&amp;{ElementData}=     using=text  value=some text
@{ElementArray}=    &amp;{ElementData}
&amp;{ElementParams}    elementData=$\{ElementArray}

***Test Cases***
&amp;{element}= Get element $\{ElementParams}
$\{attrValue}=   Get attribute   $\{element}  text
</code></pre></td>
</tr>
</tbody>
</table></div>
<h2 id="sample-test-cases">Sample test cases</h2>
<p>The <a href="https://github.com/rokudev/automated-channel-testing">Roku automated app testing repository</a> includes a set of sample Robot Framework test cases that can be executed on their corresponding <a href="https://github.com/rokudev/SceneGraphDeveloperExtensions/tree/master/samples">SceneGraph Developer Extensions (SGDEX) sample apps</a>. For example, you can execute the SGDEX GridView test case (<strong>test_3_Grid.robot</strong>), which will sideload the corresponding sample app (<strong>3_Grid</strong>) on your device, and then view the test output. You can reference these samples when developing test scripts for the automated testing of your development apps.</p>
<blockquote>
<p>Before running a sample test case, you need to update the <strong>sideload</strong> command in the test case with the Roku device password.</p>
</blockquote>
<p>The <a href="https://github.com/rokudev/automated-channel-testing/blob/master/RobotLibrary/Tests/Basic_tests.robot"><strong>Basic_tests.robot</strong> sample</a> demonstrates how to create a simple test case that checks whether a user is authenticated before playing content using the Roku Robot Framework Library:</p>
<pre><code>*** Settings ***
Documentation  Basic smoke tests
Variables  ./../Library/variables.py
Library  ./../Library/RobotLibrary.py  $\{ip_address}  $\{timeout}  $\{pressDelay}  $\{server_path}
Library  Collections

*** Variables ***
$\{channel_code}  dev
&amp;{DATA2}=  using=text  value=Barack Gates, Bill Obama
@{DATA2Array}=  &amp;{DATA2}
&amp;{Params2}=  elementData=$\{DATA2Array}
&amp;{DATA3}=  using=text  value=Please enter your username
@{DATA3Array}=  &amp;{DATA3}
&amp;{Params3}=  elementData=$\{DATA3Array}
&amp;{DATA4}=  using=text  value=Please enter your password
@{DATA4Array}=  &amp;{DATA4}
&amp;{Params4}=  elementData=$\{DATA4Array}
@{KEYS}=   down  down  down  down  select
&amp;{DATA5}=  using=text  value=Authenticate to watch
@{DATA5Array}=  &amp;{DATA5}
&amp;{Params5}=  elementData=$\{DATA5Array}

*** Test Cases ***
Channel should be launched
    Side load  ../sample/channel.zip   rokudev   aaaa
    Verify is channel loaded    $\{channel_code}

Check if details screen showed
    Send key  select  4
    Verify is screen loaded    $\{Params2}

Check if playback started
    $\{status}  $\{value}=  Run Keyword And Ignore Error  Verify is screen loaded  $\{Params5}  2
    Run keyword if   "$\{status}"=="PASS"  Do auth
    ...  ELSE  Send key  select
    Verify is playback started  20  2

*** Keywords ***
Do auth
    Send key  select
    Verify is screen loaded   $\{Params3}
    Send word  user
    Send keys  $\{KEYS}
    Verify is screen loaded   $\{Params4}
    Send word  pass
    Send keys  $\{KEYS}
</code></pre>
<h2 id="viewing-the-test-case-report-and-log">Viewing the test case report and log</h2>
<p>After you run a test case that uses the Roku Robot Framework Library, you can view the generated report and log files in the specified output directory. The report summarizes the test case and provides statistics on the percentage of individual tests that passed/failed. The log details the success/failure of the individual keywords used in each test case.</p>
<p><img src="https://image.roku.com/ZHZscHItMTc2/basic-robot-test-report-keywords-v2.png" alt="roku815px - robot-test-log-keywords" title="robot-test-log-keywords"></p></div>
`}</HTMLBlock>

<br />
