---
title: "Roku JavaScript Library"
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

# Roku JavaScript Library

Roku's JavaScript Library enables keyword-driven testing of apps. The library resides in a JavaScript class that has methods that map directly to keyword names. The keywords take the same arguments as the methods implementing them. The keywords report failures with exceptions, create logs by writing to standard output, and return values using the `return` statement.

## Instantiating the library

To create an instance of the Roku JavaScript Library, provide the following three arguments:

| Argument   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| ip         | The IP address of the device to be used for testing.         |
| timeout    | The amount of time (in milliseconds) that commands are allowed to run. |
| pressDelay | The amount of time (in milliseconds) between keypress commands. This argument works with the **sendKeys** command. |

The following example demonstrates how to instantiate the Roku JavaScript Library:

```
library = new rokuLibrary.Library("192.168.2.121", 20000, 2000);
```

The following example demonstrates how to instantiate the Roku JavaScript Library and runs test case with Mocha and Chai:

```
//import library
const rokuLibrary = require("../library/rokuLibrary");
const expect = require("chai").expect;
const {
    spawn
} = require('child_process');

//start instance of webDriver
const childProcess = spawn('D:/projects/go/webDriver/src/main.exe');
let library;

//test suite
describe('test_3-Grid', () => {
    //this method is executed before all test cases
    before(() => {
        //create instance of jsLibrary
        library = new rokuLibrary.Library("192.168.2.121", 20000, 2000);
    });

    //test case
    it('should launch the app', async function() {
        this.timeout(25000);
        await library.sideLoad("../channels/3_Grid.zip", "rokudev", "your_channel_password");
        await library.verifyIsChannelLoaded('dev');
    });

    //this method executed after all tests
    after(async () => {
        //close session
        await library.close();
        //exit webDriver
        childProcess.kill();
    });
});
```

## Keywords

The Roku's JavaScript Library includes the following keywords:

- Sideload (*available since release 2.0*)
- Launch the app
- Input deep linking data (*available since release 2.0*)
- Get apps
- Send key
- Send keys
- Send word
- Mark timer (*available since release 2.0*)
- Get timer (*available since release 2.0*)
- Verify is playback started
- Verify is screen loaded
- Get child nodes (*available since release 2.1*)
- Get element
- Get elements
- Get focused element
- Verify is app loaded
- Get current app info
- Get device info
- Get player info
- Verify is channel exist
- Set timeout
- Set press delay
- Get attribute

> A keyword will fail if its respective WebDriver endpoint returns a 4xx or 500 error.

### sideLoad

(*available since release 2.0*)


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Argument</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>sideLoad</td>
<td><ul><li><strong>channel</strong>: The file path of a zipped package file.</li><li><strong>username</strong>: Enter <strong>rokudev</strong>, which is the user name for the Development Application Installer.</li><li><strong>password</strong>: The password for accessing the Development Application Installer on your Roku device.</li></ul></td>
<td>Sideloads an app that has been packaged into a zip file.<br /><br />If the <strong>sideLoad</strong> command fails, <a href="/docs/developer-program/getting-started/developer-setup.md#sideloading-channels">sideload</a> the app to be tested and use the <strong>launchTheChannel</strong> command.</td>
<td><code>await library.sideLoad("channel.zip", "rokudev", "your_device_password")</code></td>
</tr>
</tbody>
</table>



### launchTheChannel


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Argument</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>launchTheChannel</td>
<td><ul><li><strong>channel_code</strong>: The ID of the app to be launched.</li><li><strong>contentId</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li><li><strong>mediaType</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li></ul></td>
<td>Launches the app corresponding to the specified app ID.</td>
<td><code>await library.launchTheChannel("dev", "myMovie123", "movie")</code></td>
</tr>
</tbody>
</table>



### inputDeepLinkingData

(*available since release 2.0*)


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Argument</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>inputDeepLinkingData</td>
<td><ul><li><strong>channelId</strong>: The ID of the app to be launched.</li><li><strong>contentId</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">contentId</a> of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li><li><strong>mediaType</strong>: The <a href="/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters">mediaType</a> of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li></ul></td>
<td>Launches the app corresponding to the specified app ID.</td>
<td><code>await library.inputDeepLinkingData("dev", "myMovie123", "movie")</code></td>
</tr>
</tbody>
</table>



### getApps


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getApps</td>
<td>Returns a list of installed apps as an array of objects. Each app object contains the following fields: <ul><li>title</li><li>id</li><li>type</li><li>version</li><li>subtype</li></ul></td>
<td><pre><code><code>&lt;br /&gt;expect(apps[0].ID).to.equal('some_id')&lt;br /&gt;const apps = await library.getApps()&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### sendKey


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>sendKey</td>
<td><ul><li><strong>key_press</strong>: The key to be pressed and released, which may be one of the following: "up", "down", "right", "left", "back, "select", "instantreplay", "play", "stop", "rev", "fwd", and "info".</li><li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li></ul></td>
<td>Simulates the press and release of the specified key.</td>
<td><code>await library.sendKey('select', 4)</code></td>
</tr>
</tbody>
</table>



### sendKeys


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>sendKeys</td>
<td><ul><li><strong>sequence</strong>: An array containing the sequence of keys to be pressed and released (for example, down, down, down, down, select).</li><li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li></ul></td>
<td>Simulates the sequence of keypresses and releases.</td>
<td><code>await library.sendKeys(['down', 'down', 'down', 'down', 'select'])</code></td>
</tr>
</tbody>
</table>



### sendWord


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>sendWord</td>
<td><ul><li><strong>word</strong>: The specified word to be entered.</li><li><strong>delay</strong>: The delay (in seconds) before the entry of each letter in the specified word. This argument is optional, and it defaults to 2 seconds if not specified.</li></ul></td>
<td>Simulates the press and release of each letter in a word.</td>
<td><code>await library.sendWord('user')</code></td>
</tr>
</tbody>
</table>



### markTimer

(*available since release 2.0*)

| Keyword   | Description       | Example                |
| :-------- | :---------------- | ---------------------- |
| markTimer | Starts the timer. | `library.markTimer();` |

### getTimer

(*available since release 2.0*)


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getTimer</td>
<td>Returns the number of milliseconds elapsed since the timer was last started.</td>
<td><pre><code><code>&lt;br /&gt;let res = await library.verifyIsPlaybackStarted(25, 1);&lt;br /&gt;expect(res).to.equal(true);   &lt;br /&gt;let time = library.getTimer();&lt;br /&gt;expect(14000).greaterThan(time);&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>



### verifyIsPlaybackStarted


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>verifyIsPlaybackStarted</td>
<td><ul><li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li><li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li></ul></td>
<td>Verify playback has started on the Roku media player. <br /><br />This keyword fails if player state is not "play".</td>
<td><code>verifyIsPlaybackStarted(25, 2)</code></td>
</tr>
</tbody>
</table>



### verifyIsScreenLoaded


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Verify is screen loaded</td>
<td><ul><li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> command for more information.</li><li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li><li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li></ul></td>
<td>Verify that the screen is loaded based on the provided element data.</td>
<td><code>verifyIsScreenLoaded(\{'elementData': [\{'using': 'text', 'value': 'Barack Gates, Bill Obama'\}]\})</code></td>
</tr>
</tbody>
</table>



### getChildNodes


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getChildNodes</td>
<td><ul><li><p><strong>parentNode</strong>: The parent node for which the child nodes are to be retrieved.</p></li><li><p><strong>locator</strong> (optional): An array containing search criteria for the child nodes to be retrieved. The locator has the following syntax:</p><pre><code>"using" ("attr", "tag", "text") : specify locator type"value": tag or attribute value"attribute"(only for "attr" type): specify attribute</code></pre></li></ul></td>
<td>Retrieves the child component of the specified node.</td>
<td><pre><code><code>&lt;br /&gt;const rowList = await library.getElement(\\{"elementData" :[\\{"using": "tag", "value": "ZoomRowList"\\}]\\});&lt;br /&gt;const searchData = [\\{"using": "tag", "value": "RenderableNode"\\}, \\{"using": "attr", "attribute": "focused", "value": "true"\\}];&lt;br /&gt;const result = library.getChildNodes(rowList, searchData);&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### getElement


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Get element</td>
<td><ul><li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> for more information.</li><li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li></ul></td>
<td>Searches for an element on the page based on the specified locator starting from the screen root.  Returns information on the first matching element.</td>
<td><pre><code><code>&lt;br /&gt;const element = await library.getElement(\\{'elementData': [\\{'using': 'attr', 'attribute': 'name', 'value': 'poster'\\}]\\}, 4);&lt;br /&gt;&lt;br /&gt;const poster = library.getAttribute(element, 'uri');&lt;br /&gt;expect(poster).to.equal('poster.png');&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### getElements


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getElements</td>
<td><ul><li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements">WebDriver element command</a> for more information.</li><li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li></ul></td>
<td>Searches for elements on the page based on the specified locators starting from the screen root. Returns information on the matching elements.</td>
<td><pre><code><code>&lt;br /&gt;const elements= await library.getElements(\\{'elementData': [\\{'using': 'attr', 'attribute': 'name', 'value': 'poster'\\}]\\}, 4);&lt;br /&gt;&lt;br /&gt;const poster = library.getAttribute(elements[0], 'uri');&lt;br /&gt;expect(poster).to.equal('poster.png');&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### getFocusedElement


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getFocusedElement</td>
<td>Return the element on the screen that currently has focus. See the <a href="/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#get-v1/session/:sessionId/element/active">WebDriver active element command</a> for more information.</td>
<td><pre><code><code>&lt;br /&gt;const element = await library.getFocusedElement()&lt;br /&gt;&lt;br /&gt;const poster = library.getAttribute(element, 'uri');&lt;br /&gt;expect(poster).to.equal('poster.png');&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>



### verifyIsChannelLoaded


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>verifyIsChannelLoaded</td>
<td><ul><li><strong>id</strong>: The ID of the app to be launched. Use <code>dev</code> to verify a sideloaded app.</li><li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li><li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li></ul></td>
<td>Verify that the specified app has been launched.<br /><br />This keyword fails if the provided app ID does not match a valid app.</td>
<td><code>await library.verifyIsChannelLoaded('dev')</code></td>
</tr>
</tbody>
</table>



###getCurrentChannelInfo


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getCurrentChannelInfo</td>
<td>Returns an object containing information about the app currently loaded. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>array</td><td></td></tr><tr><td>value[i].Title</td><td>string</td><td>The title of the app.</td></tr><tr><td>value[i].ID</td><td>string</td><td>The ID of the app.</td></tr><tr><td>value[i].Version</td><td>string</td><td>The build version of the app.</td></tr><tr><td>value[i].Subtype</td><td>string</td><td>"ndka"/"rsga"</td></tr><tr><td>value[i].Type</td><td>string</td><td>"menu"/"appl"</td></tr></tbody></table></td>
<td><pre><code><code>&lt;br /&gt;const data = await library.getPlayerInfo();&lt;br /&gt;expect(data.Position).greaterThan(9000);&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### getDeviceInfo


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getDeviceInfo</td>
<td>Returns an object containing the information about the device. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertisement ID of the device.</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command.</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.vendorName</td><td>string</td><td>The vendor of the device.</td></tr><tr><td>value.modelName</td><td>string</td><td>The model of the device.</td></tr><tr><td>value.language</td><td>string</td><td>The language of the device.</td></tr><tr><td>value.country</td><td>string</td><td>The country of the device.</td></tr><tr><td>value.ip</td><td>string</td><td>The IP address of the device.</td></tr><tr><td>value.timeout</td><td>int</td><td>The specified timeout for WebDriver client requests.</td></tr><tr><td>value.pressDelay</td><td>int</td><td>The specified delay between key presses.</td></tr></tbody></table></td>
<td><pre><code><code>&lt;br /&gt;const info = await library.getDeviceInfo()&lt;br /&gt;expect(info.language).to.equal('en')&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### getPlayerInfo


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getPlayerInfo</td>
<td>Returns an object containing information about the Roku media player. This object has the following fields:<br /><table><thead><tr><th><strong>Key</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sessionId</td><td>string</td><td>The advertising ID of the device</td></tr><tr><td>status</td><td>int</td><td>A status code summarizing the result of the command</td></tr><tr><td>value</td><td>object</td><td></td></tr><tr><td>value.error</td><td>string</td><td>Indicates whether there was a playback error. If no error occurred, this is set to "false"</td></tr><tr><td>value.state</td><td>string</td><td>Indicates the current playback state ("play", "pause", "resume", and so on)</td></tr><tr><td>value.format</td><td>object</td><td>The <strong>format</strong> element contains the following attributes: <em>audio</em>, <em>caption</em>, <em>container</em>, <em>drm</em>, <em>video</em>, and <em>res</em>.</td></tr><tr><td>value.format.audio</td><td>string</td><td>The audio compression method ("aac", "aac_adts", and so on.)</td></tr><tr><td>value.format.caption</td><td>string</td><td>The closed caption format ("608_708", for example). This value is set to "none" if there are no captions.</td></tr><tr><td>value.format.container</td><td>string</td><td>The container format ("hls", for example)</td></tr><tr><td>value.format.drm</td><td>string</td><td>The encoding type. If no encoding is used, this us set to "none".</td></tr><tr><td>value.format.video</td><td>string</td><td>The format of the currently playing video stream ("mpeg4-15", for example)</td></tr><tr><td>value.format.res</td><td>string</td><td>The resolution of the currently playing video stream ("1280X720", for example).</td></tr><tr><td>value.buffering</td><td>object</td><td>The <strong>buffering</strong> element contains the following attributes: <em>current</em>, <em>max</em>, <em>target</em>.</td></tr><tr><td>value.buffering.current</td><td>string</td><td>The current buffering speed (in kbps).</td></tr><tr><td>value.buffering.max</td><td>string</td><td>The maximum possible buffering speed (in kbps).</td></tr><tr><td>value.buffering.target</td><td>string</td><td>The target buffering speed (in kbps).</td></tr><tr><td>value.newStream</td><td>object</td><td>The <strong>newStream</strong> element contains the following attribute: <em>speed</em>.</td></tr><tr><td>value.newStream.speed</td><td>string</td><td>The current playback speed (in bps)</td></tr><tr><td>value.position</td><td>string</td><td>The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.</td></tr><tr><td>value.duration</td><td>string</td><td>The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td></tr><tr><td>value.isLive</td><td>string</td><td>A flag indicating whether the video being played is a live stream.</td></tr><tr><td>value.runtime</td><td>string</td><td>The runtime of the video being played (in seconds).</td></tr><tr><td>value.streamSegment</td><td>object</td><td>The <strong>streamSegment</strong> attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS  This element contains the following attributes: <em>bitrate</em>, <em>mediaSequence</em>, <em>segmentType</em>, and <em>time</em>.</td></tr><tr><td>value.streamSegment.bitrate</td><td>string</td><td>The bitrate of the video segment (in bps).</td></tr><tr><td>value.streamSegment.mediaSequence</td><td>string</td><td>The HLS media sequence ID of the segment in the video.</td></tr><tr><td>value.streamSegment.segmentType</td><td>string</td><td>The type of data in the segment, which may be one of the following values: "audio", "video", "captions", "mux".</td></tr><tr><td>value.streamSegment.time</td><td>string</td><td>The chunk start time.</td></tr></tbody></table></td>
<td><pre><code><code>&lt;br /&gt;const data = await library.getPlayerInfo();&lt;br /&gt;expect(data.Position).greaterThan(9000);&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### verifyIsChannelExist


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>verifyIsChannelExist</td>
<td><ul><li><strong>apps</strong>: An array containing  currently installed on the device.</li><li><strong>id</strong>: The ID of the app to be verified. Use <code>dev</code> to verify a sideloaded app.</li></ul></td>
<td>Verifies the specified app is installed on the device. This keyword fails if the <strong>apps</strong> array does not contain the app specified in the <strong>id</strong> argument.</td>
<td><pre><code><code>&lt;br /&gt;const apps = await library.getApps();&lt;br /&gt;const res = library.verifyIsChannelExist(apps, 'dev');&lt;br /&gt;expect(res).equal(true);&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




### setTimeout

| Keyword    | Arguments           | Description                                      | Example                           |
| :--------- | ------------------- | :----------------------------------------------- | --------------------------------- |
| setTimeout | <strong>timeout</strong>: The amount of time (in milliseconds) that Web driver client requests are allowed to run. | Sets the timeout for Web driver client requests. | `await library.setTimeout(10000)` |


### setDelay

| Keyword  | Arguments         | Description                                                  | Example                        |
| :------- | ----------------- | :----------------------------------------------------------- | ------------------------------ |
| setDelay | <strong>delay</strong>: The interval (in milliseconds) to be used between key presses. | Sets the delay between key presses. This keyword works with the **Send keys** keyword. | `await library.setDelay(1000)` |


### getAttribute


<table>
<thead>
<tr>
<th>Keyword</th>
<th>Arguments</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>getAttribute</td>
<td><ul><li><strong>element</strong>: An object that contains element information (attributes, child nodes).<br /></li><li><strong>attr</strong>: The name of the attribute to be retrieved.</li></ul></td>
<td>Get attribute value. This keyword fails if an element does not contain the specified attribute.</td>
<td><pre><code><code>&lt;br /&gt;const elements= await library.getElements(\\{'elementData': [\\{'using': 'attr', 'attribute': 'name', 'value': 'poster'\\}]\\}, 4);&lt;br /&gt;&lt;br /&gt;const poster = library.getAttribute(elements[0], 'uri');&lt;br /&gt;expect(poster).to.equal('poster.png')&lt;br /&gt;</code></code></pre></td>
</tr>
</tbody>
</table>




## Sample test cases

The [Roku automated app testing repository](https://github.com/rokudev/automated-channel-testing) includes a set of sample JavaScript test cases that can be executed on their corresponding [SceneGraph Developer Extensions (SGDEX) sample apps](https://github.com/rokudev/SceneGraphDeveloperExtensions/tree/master/samples). For example, you can execute the SGDEX GridView test case (**test_3_Grid.js**), which will sideload the corresponding sample app (**3_Grid**) on your device, and then view the test output. You can reference these samples when developing test scripts for the automated testing of your development apps.

> Before running a sample test case, you need to update the **sideload** command in the test case with the Roku device password.

The [**test_basic.js** sample](https://github.com/rokudev/automated-channel-testing/blob/master/jsLibrary/tests/test_basic.js) demonstrates how to create a simple test case that checks whether a user is authenticated before playing content using the Roku JavaScript Library:

```
const rokuLibrary = require("../library/rokuLibrary");
const expect = require("chai").expect;
const {
    spawn
} = require('child_process');
const childProcess = spawn('D:/projects/go/webDriver/src/main.exe');
let library;
describe('App should be launched', () => {
    before(() => {
        library = newrokuLibrary.Library("192.168.1.64");
    });

    it('Check if app exists on the device', asyncfunction() {
        this.timeout(5000);
        const apps = await library.getApps();
        const res = library.verifyIsChannelExist(apps, 'dev');
        expect(res).equal(true);
    });

    it('should launch the app', asyncfunction() {
        this.timeout(5000);
        await library.launchTheChannel('dev');
        await library.verifyIsChannelLoaded('dev');
    });

    after(async () => {
        await library.close();
        childProcess.kill();
    });

});
```

## Viewing the test case report and log

After you run a test case that uses the Roku JavaScript Library, you can view the generated report and log files in the specified output directory. The report summarizes the test case and provides statistics on the percentage of individual tests that passed/failed. The log details the success/failure of the individual keywords used in each test case.