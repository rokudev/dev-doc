---
title: Roku JavaScript Library
excerpt: 'Keyword-driven testing library for automating app test cases on Roku devices'
deprecated: false
hidden: false
metadata:
  title: 'Roku JavaScript Library | Roku Developer Docs'
  description: 'Use the Roku JavaScript Library to write keyword-driven tests that sideload apps, send key sequences, verify playback, and retrieve device and player info.'
  robots: index
next:
  description: ''
---
Roku's JavaScript Library enables keyword-driven testing of apps. The library resides in a JavaScript class that has methods that map directly to keyword names. The keywords take the same arguments as the methods implementing them. The keywords report failures with exceptions, create logs by writing to standard output, and return values using the `return` statement.

## Instantiating the library

To create an instance of the Roku JavaScript Library, provide the following three arguments:

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
        <td class="short-line">timeout</td>
        <td class="long-line">The amount of time (in milliseconds) that commands are allowed to run.</td>
      </tr>
      <tr>
        <td class="short-line">pressDelay</td>
        <td class="long-line">The amount of time (in milliseconds) between keypress commands. This argument works with the <strong>sendKeys</strong> command.</td>
      </tr>
    </tbody>
</table></div>

The following example demonstrates how to instantiate the Roku JavaScript Library:

```javascript
library = new rokuLibrary.Library("192.168.2.121", 20000, 2000);
```

The following example demonstrates how to instantiate the Roku JavaScript Library and runs test case with Mocha and Chai:

```javascript
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
        <td class="short-line">sideLoad</td>
        <td class="long-line"><ul>
            <li><strong>channel</strong>: The file path of a zipped package file.</li>
            <li><strong>username</strong>: Enter <strong>rokudev</strong>, which is the user name for the Development Application Installer.</li>
            <li><strong>password</strong>: The password for accessing the Development Application Installer on your Roku device.</li>
        </ul></td>
        <td class="long-line">Sideloads an app that has been packaged into a zip file.<br /><br />If the <strong>sideLoad</strong> command fails, [sideload](doc:developer-setup#sideloading-channels) the app to be tested and use the <strong>launchTheChannel</strong> command.</td>
        <td class="long-line"><code>await library.sideLoad("channel.zip", "rokudev", "your_device_password")</code></td>
      </tr>
    </tbody>
</table></div>

### launchTheChannel

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
        <td class="short-line">launchTheChannel</td>
        <td class="long-line"><ul>
            <li><strong>channel_code</strong>: The ID of the app to be launched.</li>
            <li><strong>contentId</strong>: The [contentId](doc:implementing-deep-linking#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li>
            <li><strong>mediaType</strong>: The [mediaType](doc:implementing-deep-linking#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li>
        </ul></td>
        <td class="long-line">Launches the app corresponding to the specified app ID.</td>
        <td class="long-line"><code>await library.launchTheChannel("dev", "myMovie123", "movie")</code></td>
      </tr>
    </tbody>
</table></div>

### inputDeepLinkingData

(*available since release 2.0*)

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
        <td class="short-line">inputDeepLinkingData</td>
        <td class="long-line"><ul>
            <li><strong>channelId</strong>: The ID of the app to be launched.</li>
            <li><strong>contentId</strong>: The [contentId](doc:implementing-deep-linking#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the <strong>contentType</strong> to execute deep linking tests.</li>
            <li><strong>mediaType</strong>: The [mediaType](doc:implementing-deep-linking#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the <strong>contentId</strong> to execute deep linking tests.</li>
        </ul></td>
        <td class="long-line">Launches the app corresponding to the specified app ID.</td>
        <td class="long-line"><code>await library.inputDeepLinkingData("dev", "myMovie123", "movie")</code></td>
      </tr>
    </tbody>
</table></div>

### getApps

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
        <td class="short-line">getApps</td>
        <td class="long-line">Returns a list of installed apps as an array of objects. Each app object contains the following fields: <ul>
            <li>title</li>
            <li>id</li>
            <li>type</li>
            <li>version</li>
            <li>subtype</li>
        </ul></td>
        <td class="long-line"><pre><code class="language-javascript">expect(apps[0].ID).to.equal('some_id')
const apps = await library.getApps()
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### sendKey

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
        <td class="short-line">sendKey</td>
        <td class="long-line"><ul>
            <li><strong>key_press</strong>: The key to be pressed and released, which may be one of the following: "up", "down", "right", "left", "back, "select", "instantreplay", "play", "stop", "rev", "fwd", and "info".</li>
            <li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li>
        </ul></td>
        <td class="long-line">Simulates the press and release of the specified key.</td>
        <td class="short-line"><code>await library.sendKey('select', 4)</code></td>
      </tr>
    </tbody>
</table></div>

### sendKeys

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
        <td class="short-line">sendKeys</td>
        <td class="long-line"><ul>
            <li><strong>sequence</strong>: An array containing the sequence of keys to be pressed and released (for example, down, down, down, down, select).</li>
            <li><strong>delay</strong>: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.</li>
        </ul></td>
        <td class="short-line">Simulates the sequence of keypresses and releases.</td>
        <td class="long-line"><code>await library.sendKeys(['down', 'down', 'down', 'down', 'select'])</code></td>
      </tr>
    </tbody>
</table></div>

### sendWord

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
        <td class="short-line">sendWord</td>
        <td class="long-line"><ul>
            <li><strong>word</strong>: The specified word to be entered.</li>
            <li><strong>delay</strong>: The delay (in seconds) before the entry of each letter in the specified word. This argument is optional, and it defaults to 2 seconds if not specified.</li>
        </ul></td>
        <td class="long-line">Simulates the press and release of each letter in a word.</td>
        <td class="short-line"><code>await library.sendWord('user')</code></td>
      </tr>
    </tbody>
</table></div>

### markTimer

(*available since release 2.0*)

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
        <td class="short-line">markTimer</td>
        <td class="short-line">Starts the timer.</td>
        <td class="short-line"><code>library.markTimer();</code></td>
      </tr>
    </tbody>
</table></div>

### getTimer

(*available since release 2.0*)

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
        <td class="short-line">getTimer</td>
        <td class="long-line">Returns the number of milliseconds elapsed since the timer was last started.</td>
        <td class="long-line"><pre><code class="language-javascript">let res = await library.verifyIsPlaybackStarted(25, 1);
expect(res).to.equal(true);
let time = library.getTimer();
expect(14000).greaterThan(time);
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### verifyIsPlaybackStarted

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
        <td class="short-line">verifyIsPlaybackStarted</td>
        <td class="long-line"><ul>
            <li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
            <li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
        </ul></td>
        <td class="long-line">Verify playback has started on the Roku media player. <br /><br />This keyword fails if player state is not "play".</td>
        <td class="short-line"><code>verifyIsPlaybackStarted(25, 2)</code></td>
      </tr>
    </tbody>
</table></div>

### verifyIsScreenLoaded

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
            <li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](doc:web-driver#POST-v1/session/:sessionId/elements) command for more information.</li>
            <li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
            <li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
        </ul></td>
        <td class="long-line">Verify that the screen is loaded based on the provided element data.</td>
        <td class="long-line"><code>verifyIsScreenLoaded({'{'}'elementData': [{'{'}'using': 'text', 'value': 'Barack Gates, Bill Obama'{'}'}]{'}'})</code></td>
      </tr>
    </tbody>
</table></div>

### getChildNodes

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
        <td class="short-line">getChildNodes</td>
        <td class="long-line"><ul>
            <li><strong>parentNode</strong>: The parent node for which the child nodes are to be retrieved.</li>
        </ul></td>
        <td class="long-line">Retrieves the child component of the specified node.</td>
        <td class="long-line"><pre><code class="language-javascript">const rowList = await library.getElement({'{'}"elementData" :[{'{'}"using": "tag", "value": "ZoomRowList"{'}'}]{'}'});
const searchData = [{'{'}"using": "tag", "value": "RenderableNode"{'}'}, {'{'}"using": "attr", "attribute": "focused", "value": "true"{'}'}];
const result = library.getChildNodes(rowList, searchData);
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

- **locator** (optional): An array containing search criteria for the child nodes to be retrieved. The locator has the following syntax:

  ```brightscript
  "using" ("attr", "tag", "text") : specify locator type
  "value": tag or attribute value
  "attribute"(only for "attr" type): specify attribute
  ```

### getElement

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
            <li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](doc:web-driver#POST-v1/session/:sessionId/elements) for more information.</li>
            <li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
        </ul></td>
        <td class="long-line">Searches for an element on the page based on the specified locator starting from the screen root.  Returns information on the first matching element.</td>
        <td class="long-line"><pre><code class="language-javascript">const element = await library.getElement({'{'}'elementData': [{'{'}'using': 'attr', 'attribute': 'name', 'value': 'poster'{'}'}]{'}'}, 4);
const poster = library.getAttribute(element, 'uri');
expect(poster).to.equal('poster.png');
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### getElements

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
        <td class="short-line">getElements</td>
        <td class="long-line"><ul>
            <li><strong>data</strong>: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](doc:web-driver#POST-v1/session/:sessionId/elements) for more information.</li>
            <li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
        </ul></td>
        <td class="long-line">Searches for elements on the page based on the specified locators starting from the screen root. Returns information on the matching elements.</td>
        <td class="long-line"><pre><code class="language-javascript">const elements= await library.getElements({'{'}'elementData': [{'{'}'using': 'attr', 'attribute': 'name', 'value': 'poster'{'}'}]{'}'}, 4);
const poster = library.getAttribute(elements[0], 'uri');
expect(poster).to.equal('poster.png');
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### getFocusedElement

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
        <td class="short-line">getFocusedElement</td>
        <td class="long-line">Return the element on the screen that currently has focus. See the [WebDriver active element command](doc:web-driver#get-v1/session/:sessionId/element/active) for more information.</td>
        <td class="long-line"><pre><code class="language-javascript">const element = await library.getFocusedElement()
const poster = library.getAttribute(element, 'uri');
expect(poster).to.equal('poster.png');
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### verifyIsChannelLoaded

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
        <td class="short-line">verifyIsChannelLoaded</td>
        <td class="long-line"><ul>
            <li><strong>id</strong>: The ID of the app to be launched. Use <code>dev</code> to verify a sideloaded app.</li>
            <li><strong>retries</strong>: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.</li>
            <li><strong>delay</strong>: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.</li>
        </ul></td>
        <td class="long-line">Verify that the specified app has been launched.<br /><br />This keyword fails if the provided app ID does not match a valid app.</td>
        <td class="long-line"><code>await library.verifyIsChannelLoaded('dev')</code></td>
      </tr>
    </tbody>
</table></div>

###getCurrentChannelInfo

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
        <td class="short-line">getCurrentChannelInfo</td>
        <td class="long-line">
          Returns an object containing information about the app currently loaded. This object has the following fields:<br />
          <div class="hscroll">
            <table>
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
            </table>
          </div>
        </td>
        <td class="long-line"><pre><code class="language-javascript">const data = await library.getPlayerInfo();
expect(data.Position).greaterThan(9000);
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### getDeviceInfo

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
        <td class="short-line">getDeviceInfo</td>
        <td class="long-line">
          Returns an object containing the information about the device. This object has the following fields:<br />
          <div class="hscroll">
            <table>
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
            </table>
          </div>
        </td>
        <td class="long-line"><pre><code class="language-javascript">const info = await library.getDeviceInfo()
expect(info.language).to.equal('en')
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### getPlayerInfo

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
        <td class="short-line">getPlayerInfo</td>
        <td class="long-line">
          Returns an object containing information about the Roku media player. This object has the following fields:<br />
          <div class="hscroll">
            <table>
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
            </table>
          </div>
        </td>
        <td class="long-line"><pre><code class="language-javascript">const data = await library.getPlayerInfo();
expect(data.Position).greaterThan(9000);
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### verifyIsChannelExist

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
        <td class="short-line">verifyIsChannelExist</td>
        <td class="long-line"><ul>
            <li><strong>apps</strong>: An array containing  currently installed on the device.</li>
            <li><strong>id</strong>: The ID of the app to be verified. Use <code>dev</code> to verify a sideloaded app.</li>
        </ul></td>
        <td class="long-line">Verifies the specified app is installed on the device. This keyword fails if the <strong>apps</strong> array does not contain the app specified in the <strong>id</strong> argument.</td>
        <td class="long-line"><pre><code class="language-javascript">const apps = await library.getApps();
const res = library.verifyIsChannelExist(apps, 'dev');
expect(res).equal(true);
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

### setTimeout

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
        <td class="short-line">setTimeout</td>
        <td class="long-line"><p><strong>timeout</strong>: The amount of time (in milliseconds) that Web driver client requests are allowed to run.</p></td>
        <td class="short-line">Sets the timeout for Web driver client requests.</td>
        <td class="short-line"><code>await library.setTimeout(10000)</code></td>
      </tr>
    </tbody>
</table></div>

### setDelay

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
        <td class="short-line">setDelay</td>
        <td class="long-line"><p><strong>delay</strong>: The interval (in milliseconds) to be used between key presses.</p></td>
        <td class="long-line">Sets the delay between key presses. This keyword works with the <strong>Send keys</strong> keyword.</td>
        <td class="short-line"><code>await library.setDelay(1000)</code></td>
      </tr>
    </tbody>
</table></div>

### getAttribute

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
        <td class="short-line">getAttribute</td>
        <td class="long-line"><ul>
            <li><strong>element</strong>: An object that contains element information (attributes, child nodes).</li>
            <li><strong>attr</strong>: The name of the attribute to be retrieved.</li>
        </ul></td>
        <td class="long-line">Get attribute value. This keyword fails if an element does not contain the specified attribute.</td>
        <td class="long-line"><pre><code class="language-javascript">const elements= await library.getElements({'{'}'elementData': [{'{'}'using': 'attr', 'attribute': 'name', 'value': 'poster'{'}'}]{'}'}, 4);
const poster = library.getAttribute(elements[0], 'uri');
expect(poster).to.equal('poster.png')
        </code></pre></td>
      </tr>
    </tbody>
</table></div>

## Sample test cases

The [Roku automated app testing repository](https://github.com/rokudev/automated-channel-testing) includes a set of sample JavaScript test cases that can be executed on their corresponding [SceneGraph Developer Extensions (SGDEX) sample apps](https://github.com/rokudev/SceneGraphDeveloperExtensions/tree/master/samples). For example, you can execute the SGDEX GridView test case (**test_3_Grid.js**), which will sideload the corresponding sample app (**3_Grid**) on your device, and then view the test output. You can reference these samples when developing test scripts for the automated testing of your development apps.

> Before running a sample test case, you need to update the **sideload** command in the test case with the Roku device password.

The [**test_basic.js** sample](https://github.com/rokudev/automated-channel-testing/blob/master/jsLibrary/tests/test_basic.js) demonstrates how to create a simple test case that checks whether a user is authenticated before playing content using the Roku JavaScript Library:

```javascript
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

<br />
