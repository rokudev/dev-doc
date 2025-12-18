---
title: Javascript Library
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

| Keyword  | Argument        | Description                                                  | Example                                                      |
| -------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| sideLoad | ${sideload-arg} | Sideloads an app that has been packaged into a zip file.<br /><br />If the **sideLoad** command fails, [sideload](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) the app to be tested and use the **launchTheChannel** command. | `await library.sideLoad("channel.zip", "rokudev", "your_device_password")` |

{#sideload-arg}

* **channel**: The file path of a zipped package file.
* **username**: Enter **rokudev**, which is the user name for the Development Application Installer.
* **password**: The password for accessing the Development Application Installer on your Roku device.

### launchTheChannel

| Keyword          | Argument                  | Description                                                  | Example                                                      |
| ---------------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| launchTheChannel | ${launch-the-channel-arg} | Launches the app corresponding to the specified app ID. | `await library.launchTheChannel("dev", "myMovie123", "movie")` |

{#launch-the-channel-arg}

* **channel_code**: The ID of the app to be launched.
* **contentId**: The [contentId](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentType** to execute deep linking tests.
* **mediaType**: The [mediaType](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentId** to execute deep linking tests.

### inputDeepLinkingData

(*available since release 2.0*)

| Keyword              | Argument                  | Description                                                  | Example                                                      |
| -------------------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| inputDeepLinkingData | ${input-deep-linking-arg} | Launches the app corresponding to the specified app ID. | `await library.inputDeepLinkingData("dev", "myMovie123", "movie")` |

{#input-deep-linking-arg}

* **channelId**: The ID of the app to be launched.
* **contentId**: The [contentId](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentType** to execute deep linking tests.
* **mediaType**: The [mediaType](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentId** to execute deep linking tests.

### getApps

| Keyword | Description                                                  | Example          |
| :------ | :----------------------------------------------------------- | ---------------- |
| getApps | Returns a list of installed apps as an array of objects. Each app object contains the following fields: ${get-apps-list} | ${get-apps-code} |

{#get-apps-list}

* title
* id
* type
* version
* subtype

{#get-apps-code}

```
expect(apps[0].ID).to.equal('some_id')
const apps = await library.getApps()
```

### sendKey

| Keyword | Arguments        | Description                                           | Example                              |
| :------ | :--------------- | :---------------------------------------------------- | ------------------------------------ |
| sendKey | ${send-key-args} | Simulates the press and release of the specified key. | `await library.sendKey('select', 4)` |

{#send-key-args}

- **key_press**: The key to be pressed and released, which may be one of the following: "up", "down", "right", "left", "back, "select", "instantreplay", "play", "stop", "rev", "fwd", and "info".
- **delay**: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.

### sendKeys

| Keyword  | Arguments         | Description                                        | Example                                                      |
| :------- | :---------------- | :------------------------------------------------- | ------------------------------------------------------------ |
| sendKeys | ${send-keys-args} | Simulates the sequence of keypresses and releases. | `await library.sendKeys(['down', 'down', 'down', 'down', 'select'])` |

{#send-keys-args}

- **sequence**: An array containing the sequence of keys to be pressed and released (for example, down, down, down, down, select).
- **delay**: The delay (in seconds) before the keypresses are executed. This argument is optional, and it defaults to 2 seconds if not specified.

### sendWord

| Keyword  | Arguments         | Description                                               | Example                          |
| :------- | :---------------- | :-------------------------------------------------------- | -------------------------------- |
| sendWord | ${send-word-args} | Simulates the press and release of each letter in a word. | `await library.sendWord('user')` |

{#send-word-args}

- **word**: The specified word to be entered.
- **delay**: The delay (in seconds) before the entry of each letter in the specified word. This argument is optional, and it defaults to 2 seconds if not specified.

### markTimer

(*available since release 2.0*)

| Keyword   | Description       | Example                |
| :-------- | :---------------- | ---------------------- |
| markTimer | Starts the timer. | `library.markTimer();` |

### getTimer

(*available since release 2.0*)

| Keyword  | Description                                                  | Example         |
| :------- | :----------------------------------------------------------- | --------------- |
| getTimer | Returns the number of milliseconds elapsed since the timer was last started. | ${getTimerCode} |

{#getTimerCode}

```
let res = await library.verifyIsPlaybackStarted(25, 1);
expect(res).to.equal(true);   
let time = library.getTimer();
expect(14000).greaterThan(time);
```

### verifyIsPlaybackStarted

| Keyword                 | Arguments               | Description                                                  | Example                          |
| :---------------------- | :---------------------- | :----------------------------------------------------------- | -------------------------------- |
| verifyIsPlaybackStarted | ${verify-playback-args} | Verify playback has started on the Roku media player. <br /><br />This keyword fails if player state is not "play". | `verifyIsPlaybackStarted(25, 2)` |

{#verify-playback-args}

- **retries**: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.
- **delay**: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.

### verifyIsScreenLoaded

| Keyword                 | Arguments                    | Description                                                  | Example                                                      |
| :---------------------- | :--------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| Verify is screen loaded | ${verify-screen-loaded-args} | Verify that the screen is loaded based on the provided element data. | `verifyIsScreenLoaded({'elementData': [{'using': 'text', 'value': 'Barack Gates, Bill Obama'}]})` |

{#verify-screen-loaded-args}

- **data**: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements) command for more information.
- **retries**: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.
- **delay**: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.

### getChildNodes

| Keyword       | Arguments              | Description                                          | Example                |
| :------------ | :--------------------- | :--------------------------------------------------- | ---------------------- |
| getChildNodes | ${get-child-node-args} | Retrieves the child component of the specified node. | ${get-child-node-code} |

{#get-child-node-args}

- **parentNode**: The parent node for which the child nodes are to be retrieved.

- **locator** (optional): An array containing search criteria for the child nodes to be retrieved. The locator has the following syntax:

        "using" ("attr", "tag", "text") : specify locator type
        "value": tag or attribute value
        "attribute"(only for "attr" type): specify attribute

{#get-child-node-code}

```
const rowList = await library.getElement({"elementData" :[{"using": "tag", "value": "ZoomRowList"}]});
const searchData = [{"using": "tag", "value": "RenderableNode"}, {"using": "attr", "attribute": "focused", "value": "true"}];
const result = library.getChildNodes(rowList, searchData);
```

### getElement

| Keyword     | Arguments           | Description                                                  | Example             |
| :---------- | :------------------ | :----------------------------------------------------------- | ------------------- |
| Get element | ${get-element-args} | Searches for an element on the page based on the specified locator starting from the screen root.  Returns information on the first matching element. | ${get-element-code} |

{#get-element-args}

- **data**: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements) for more information.
- **delay**: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.

{#get-element-code}

```
const element = await library.getElement({'elementData': [{'using': 'attr', 'attribute': 'name', 'value': 'poster'}]}, 4);

const poster = library.getAttribute(element, 'uri');
expect(poster).to.equal('poster.png');
```

### getElements

| Keyword     | Arguments            | Description                                                  | Example              |
| :---------- | :------------------- | :----------------------------------------------------------- | -------------------- |
| getElements | ${get-elements-args} | Searches for elements on the page based on the specified locators starting from the screen root. Returns information on the matching elements. | ${get-elements-code} |

{#get-elements-args}

- **data**: An object with locators for elementData and parentData (parentData is optional). See the [WebDriver element command](/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#POST-v1/session/:sessionId/elements) for more information.
- **delay**: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.

{#get-elements-code}

```
const elements= await library.getElements({'elementData': [{'using': 'attr', 'attribute': 'name', 'value': 'poster'}]}, 4);

const poster = library.getAttribute(elements[0], 'uri');
expect(poster).to.equal('poster.png');
```

### getFocusedElement

| Keyword           | Description                                                  | Example                     |
| :---------------- | :----------------------------------------------------------- | --------------------------- |
| getFocusedElement | Return the element on the screen that currently has focus. See the [WebDriver active element command](/docs/developer-program/dev-tools/automated-channel-testing/web-driver.md#get-v1/session/:sessionId/element/active) for more information. | ${get-focused-element-code} |

{#get-focused-element-code}

```
const element = await library.getFocusedElement()

const poster = library.getAttribute(element, 'uri');
expect(poster).to.equal('poster.png');
```

### verifyIsChannelLoaded

| Keyword               | Arguments                  | Description                                                  | Example                                      |
| :-------------------- | :------------------------- | :----------------------------------------------------------- | -------------------------------------------- |
| verifyIsChannelLoaded | ${get-verify-channel-args} | Verify that the specified app has been launched.<br /><br />This keyword fails if the provided app ID does not match a valid app. | `await library.verifyIsChannelLoaded('dev')` |

{#get-verify-channel-args}

- **id**: The ID of the app to be launched. Use `dev` to verify a sideloaded app.
- **retries**: The number of requests that can be made before returning false. This argument is optional, and it defaults to 10 if not specified.
- **delay**: The delay (in seconds) between retries. This argument is optional, and it defaults to 1 second if not specified.

###getCurrentChannelInfo

| Keyword               | Description                                                  | Example                  |
| :-------------------- | :----------------------------------------------------------- | ------------------------ |
| getCurrentChannelInfo | Returns an object containing information about the app currently loaded. This object has the following fields:<br />${current-app-response} | ${get-channel-info-code} |

{#current-app-response}

| **Key**          | **Type** | **Description**                                      |
| :--------------- | :------- | :--------------------------------------------------- |
| sessionId        | string   | The advertising ID of the device                     |
| status           | int      | A status code summarizing the result of the command. |
| value            | array    |                                                      |
| value[i].Title   | string   | The title of the app.                            |
| value[i].ID      | string   | The ID of the app.                               |
| value[i].Version | string   | The build version of the app.                    |
| value[i].Subtype | string   | "ndka"/"rsga"                                        |
| value[i].Type    | string   | "menu"/"appl"                                        |

{#get-channel-info-code}

```
const data = await library.getPlayerInfo();
expect(data.Position).greaterThan(9000);
```

### getDeviceInfo

| Keyword       | Description                                                  | Example                 |
| :------------ | :----------------------------------------------------------- | ----------------------- |
| getDeviceInfo | Returns an object containing the information about the device. This object has the following fields:<br />${session-response} | ${get-device-info-code} |

{#get-device-info-code}

```
const info = await library.getDeviceInfo()
expect(info.language).to.equal('en')
```

{#session-response}

| **Key**          | **Type** | **Description**                                      |
| :--------------- | :------- | :--------------------------------------------------- |
| sessionId        | string   | The advertisement ID of the device.                  |
| status           | int      | A status code summarizing the result of the command. |
| value            | object   |                                                      |
| value.vendorName | string   | The vendor of the device.                            |
| value.modelName  | string   | The model of the device.                             |
| value.language   | string   | The language of the device.                          |
| value.country    | string   | The country of the device.                           |
| value.ip         | string   | The IP address of the device.                        |
| value.timeout    | int      | The specified timeout for WebDriver client requests. |
| value.pressDelay | int      | The specified delay between key presses.             |

### getPlayerInfo

| Keyword       | Description                                                  | Example                 |
| :------------ | :----------------------------------------------------------- | ----------------------- |
| getPlayerInfo | Returns an object containing information about the Roku media player. This object has the following fields:<br />${player-response} | ${get-player-info-code} |

{#player-response}

| **Key**                           | **Type** | **Description**                                              |
| :-------------------------------- | :------- | :----------------------------------------------------------- |
| sessionId                         | string   | The advertising ID of the device                             |
| status                            | int      | A status code summarizing the result of the command          |
| value                             | object   |                                                              |
| value.error                       | string   | Indicates whether there was a playback error. If no error occurred, this is set to "false" |
| value.state                       | string   | Indicates the current playback state ("play", "pause", "resume", and so on) |
| value.format                      | object   | The **format** element contains the following attributes: *audio*, *caption*, *container*, *drm*, *video*, and *res*. |
| value.format.audio                | string   | The audio compression method ("aac", "aac_adts", and so on.) |
| value.format.caption              | string   | The closed caption format ("608_708", for example). This value is set to "none" if there are no captions. |
| value.format.container            | string   | The container format ("hls", for example)                    |
| value.format.drm                  | string   | The encoding type. If no encoding is used, this us set to "none". |
| value.format.video                | string   | The format of the currently playing video stream ("mpeg4-15", for example) |
| value.format.res                  | string   | The resolution of the currently playing video stream ("1280X720", for example). |
| value.buffering                   | object   | The **buffering** element contains the following attributes: *current*, *max*, *target*. |
| value.buffering.current           | string   | The current buffering speed (in kbps).                       |
| value.buffering.max               | string   | The maximum possible buffering speed (in kbps).              |
| value.buffering.target            | string   | The target buffering speed (in kbps).                        |
| value.newStream                   | object   | The **newStream** element contains the following attribute: *speed*. |
| value.newStream.speed             | string   | The current playback speed (in bps)                          |
| value.position                    | string   | The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content. |
| value.duration                    | string   | The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event. |
| value.isLive                      | string   | A flag indicating whether the video being played is a live stream. |
| value.runtime                     | string   | The runtime of the video being played (in seconds).          |
| value.streamSegment               | object   | The **streamSegment** attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS  This element contains the following attributes: *bitrate*, *mediaSequence*, *segmentType*, and *time*. |
| value.streamSegment.bitrate       | string   | The bitrate of the video segment (in bps).                   |
| value.streamSegment.mediaSequence | string   | The HLS media sequence ID of the segment in the video.       |
| value.streamSegment.segmentType   | string   | The type of data in the segment, which may be one of the following values: "audio", "video", "captions", "mux". |
| value.streamSegment.time          | string   | The chunk start time.                                        |

{#get-player-info-code}

```
const data = await library.getPlayerInfo();
expect(data.Position).greaterThan(9000);
```



### verifyIsChannelExist

| Keyword              | Arguments                    | Description                                                  | Example                      |
| :------------------- | ---------------------------- | :----------------------------------------------------------- | ---------------------------- |
| verifyIsChannelExist | ${verify-channel-exist-args} | Verifies the specified app is installed on the device. This keyword fails if the **apps** array does not contain the app specified in the **id** argument. | ${verify-channel-exist-code} |

{#verify-channel-exist-args}

* **apps**: An array containing  currently installed on the device.
* **id**: The ID of the app to be verified. Use `dev` to verify a sideloaded app.

{#verify-channel-exist-code}

```
const apps = await library.getApps();
const res = library.verifyIsChannelExist(apps, 'dev');
expect(res).equal(true);
```

### setTimeout

| Keyword    | Arguments           | Description                                      | Example                           |
| :--------- | ------------------- | :----------------------------------------------- | --------------------------------- |
| setTimeout | ${set-timeout-args} | Sets the timeout for Web driver client requests. | `await library.setTimeout(10000)` |

{#set-timeout-args}

**timeout**: The amount of time (in milliseconds) that Web driver client requests are allowed to run.

### setDelay

| Keyword  | Arguments         | Description                                                  | Example                        |
| :------- | ----------------- | :----------------------------------------------------------- | ------------------------------ |
| setDelay | ${set-delay-args} | Sets the delay between key presses. This keyword works with the **Send keys** keyword. | `await library.setDelay(1000)` |

{#set-delay-args}

**delay**: The interval (in milliseconds) to be used between key presses.

### getAttribute

| Keyword      | Arguments             | Description                                                  | Example               |
| :----------- | --------------------- | :----------------------------------------------------------- | --------------------- |
| getAttribute | ${get-attribute-args} | Get attribute value. This keyword fails if an element does not contain the specified attribute. | ${get-attribute-code} |

{#get-attribute-args}

* **element**: An object that contains element information (attributes, child nodes).<br/>
* **attr**: The name of the attribute to be retrieved.

{#get-attribute-code}

```
const elements= await library.getElements({'elementData': [{'using': 'attr', 'attribute': 'name', 'value': 'poster'}]}, 4);

const poster = library.getAttribute(elements[0], 'uri');
expect(poster).to.equal('poster.png')
```

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
