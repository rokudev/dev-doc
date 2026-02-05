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
The Roku WebDriver is required to control an app. It can be used in conjunction with the [Roku Robot Framework Library](/docs/developer-program/dev-tools/automated-channel-testing/robot-framework-library.md), [Roku JavaScript library](/docs/developer-program/dev-tools/automated-channel-testing/javascript-library.md), another test framework, or a programming language or a programming language such as Python, Java, or Go to execute test cases.

## Roku WebDriver APIs

Roku's WebDriver includes a set of Selenium-based REST APIs for sending commands to a Roku device. These APIs conform to the [WebDriver standards](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) specified by the World Wide Web Consortium (W3C). Specifically, the Roku WebDriver provides an HTTP-compliant JSON wire protocol with endpoints that map to their respective commands.

Path segments that are prefixed with a colon (:) represent variables.  For example, the `:sessionId` variable is included in most command paths. This variable represents the ID of the session to be retrieved or the session where a command is to be sent.

The following table lists the available commands:

| **HTTP Method** | **Path**                                                         | **Summary**                                                                                                         |
| :-------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| GET             | /status                                                          | Queries the server's current status.                                                                                |
| POST            | v1/session                                                       | Creates a new session.                                                                                              |
| GET             | v1/sessions                                                      | Returns a list of the currently active sessions.                                                                    |
| GET             | v1/session/:sessionId                                            | Retrieves information about the specified session.                                                                  |
| DELETE          | v1/session/:sessionId                                            | Deletes the session.                                                                                                |
| POST            | v1/session/:sessionId/input<br />(_available since release 2.0_) | Deep links into content while the app is already running.                                                           |
| POST            | v1/session/:sessionId/install                                    | Installs the specified app.                                                                                         |
| POST            | v1/session/:sessionId/launch                                     | Launches the specified app.                                                                                         |
| POST            | v1/session/:sessionId/load<br />(_available since release 2.0_)  | Sideloads the specified app.                                                                                        |
| POST            | v1/session/:sessionId/press                                      | Simulates a keypress on a Roku remote control.                                                                      |
| POST            | v1/session/:sessionId/timeouts                                   | Configures the amount of time that a specific operation can be executed  before it is aborted.                      |
| POST            | v1/session/:sessionId/timeouts/press_wait                        | Configures the amount of time between press cmd execution (if a button_sequence is used in the **/press** endpoint) |
| POST            | v1/session/:sessionId/timeouts/implicit_wait                     | Configures the amount of time that a command can be executed before it is aborted.                                  |
| POST            | v1/session/:sessionId/element                                    | Searches for an element on the screen.                                                                              |
| POST            | v1/session/:sessionId/elements                                   | Searches for multiple elements on the page, starting from the screen root.                                          |
| POST            | v1/session/:sessionId/element/active                             | Gets the element on the page that currently has focus.                                                              |
| GET             | v1/session/:sessionId/apps                                       | Returns a list of apps installed on the device.                                                                     |
| GET             | v1/session/:sessionId/current_app                                | Returns information about the app currently loaded on the device.                                                   |
| GET             | v1/session/:sessionId/source                                     | Gets the current screen source.                                                                                     |

### Command requests

All command requests and POST/PUT message bodies are sent with a content-type of `application/json;charset=UTF-8`.

### Command responses

Command responses are sent as [HTTP/1.1 response messages](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6). The following sections describe how the successful, invalid, and failed commands responses are sent.

#### Success

For successful requests, a 2xx HTTP response is returned. Successful command responses and the included message body are sent with a Content-Type of `application/json;charset=UTF-8`. The JSON message  body includes the following properties:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Key**
      </th>

      <th>
        **Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        number
      </td>

      <td>
        A status code summarizing the result of the command:  

        <table>
          <tr>
            <td>**Code**</td>
            <td>**Summary**</td>
            <td>**Detail**</td>
          </tr>

          <tr>
            <td>0</td>
            <td>`Success`</td>
            <td>The command executed successfully.</td>
          </tr>

          <tr>
            <td>6</td>
            <td>`NoSuchDriver`</td>
            <td>A session is either terminated or not started</td>
          </tr>

          <tr>
            <td>7</td>
            <td>`NoSuchElement`</td>
            <td>An element could not be located on the page using the given search parameters.</td>
          </tr>

          <tr>
            <td>9</td>
            <td>`UnknownCommand`</td>
            <td>The requested resource could not be found, or a request was received using an HTTP method that is not supported by the mapped resource.</td>
          </tr>

          <tr>
            <td>13</td>
            <td>`UnknownError`</td>
            <td>An unknown server-side error occurred while processing the command.</td>
          </tr>

          <tr>
            <td>21</td>
            <td>`Timeout`</td>
            <td>An operation did not complete before its timeout expired.</td>
          </tr>

          <tr>
            <td>32</td>
            <td>`InvalidSelector`</td>
            <td>Argument was an invalid selector.</td>
          </tr>

          <tr>
            <td>33</td>
            <td>`SessionNotCreatedException`</td>
            <td>A new session could not be created.</td>
          </tr>
        </table>

        <br />
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        `*`
      </td>

      <td>
        The response JSON value.
      </td>
    </tr>
  </tbody>
</Table>

#### Invalid

For invalid requests (unknown command or resource not found), a 4xx HTTP response is returned. Invalid command responses are sent with a content-type of `text-plain`, and include a message body with a descriptive error message.

#### Failed

If a request maps to a valid command and contains all of the expected parameters in the request body, but fails to execute successfully, a 500 Internal Server Error is returned. The response and included message body have a Content-Type of `application/json;charset=UTF-8`.  The message body includes two JSON objects—one with the applicable command response status, and the other with a description of the failure:

| **Key** | **Type** | **Description**                                                                                                   |
| :------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| status  | number   | A status code summarizing the result of the command. See the [success](#success) section for the possible values. |
| message | string   | A descriptive message for the command failure.                                                                    |

## GET /status

<Table>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        status
      </td>

      <td>
        A JSON object with the server's platform and build date. This object contains the following fields:  

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising The advertising ID of the device</td>
          </tr>

          <tr>
            <td>status</td>
            <td>number</td>
            <td>The [status code](#success) summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.build</td>
            <td>object</td>
            <td>The **build** element contains the following attributes: *version* and *time*.</td>
          </tr>

          <tr>
            <td>value.build.version</td>
            <td>string</td>
            <td>A generic release label.</td>
          </tr>

          <tr>
            <td>value.build.time</td>
            <td>string</td>
            <td>A timestamp specifying when the server was built.</td>
          </tr>

          <tr>
            <td>value.os</td>
            <td>object</td>
            <td>The **os** element contains the following attributes: *arch* and *name*.</td>
          </tr>

          <tr>
            <td>value.os.arch</td>
            <td>string</td>
            <td>The current system architecture.</td>
          </tr>

          <tr>
            <td>value.os.name</td>
            <td>string</td>
            <td>The name of the operating system the server is currently running on (for example, "windows", "linux", and so on).</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        Queries the server's current status and returns the general state of the server. A 200 OK response is returned if the server is alive and accepting commands. <br /><br />This method returns The server should respond with a general "HTTP 200 OK" response if it . The response body should be a JSON object describing.
      </td>
    </tr>
  </tbody>
</Table>

## POST v1/session

| Method Type | Path    | Parameters                                                                                        | Return Value                                                                                                                                      | Description            |
| ----------- | ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| POST        | session | **ip** - \{string}: The IP address of the device.  <br /><br />**Example**:<br />$\{session-code} | A JSON object with the device's advertisement ID, which is used as the sessionId. This object has the following fields:<br />$\{session-response} | Creates a new session. |

\{#session-code}
\{
"ip": "117.1.1.1"
}

\{#session-response}

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

## GET v1/sessions

| Method Type | Path     | Return Value                                                                                                  | Description                                      |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| GET         | sessions | A JSON object with an array of sessions. This object has the following fields:<br />$\{get-sessions-response} | Returns a list of the currently active sessions. |

\{#get-sessions-response}

| **Key**             | **Type** | **Description**                                      |
| :------------------ | :------- | :--------------------------------------------------- |
| sessionId           | string   | The advertisement ID of the device.                  |
| status              | int      | A status code summarizing the result of the command. |
| value               | object   |                                                      |
| value[i].vendorName | string   | The vendor of the device.                            |
| value[i].modelName  | string   | The model of the device.                             |
| value[i].language   | string   | The language of the device.                          |
| value[i].country    | string   | The country of the device.                           |
| value[i].ip         | string   | The IP address of the device.                        |
| value[i].timeout    | int      | The specified timeout for ECP client requests.       |
| value[i].pressDelay | int      | The specified delay between key presses.             |

## GET v1/session/:sessionId

| Method Type | Path               | Return Value                                                                                           | Description                                                                |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| GET         | session/:sessionId | A JSON object with device information. This object has the following fields:<br />$\{session-response} | Returns device information based on the session specified in the URL path. |

## DELETE v1/session/:sessionId

| Method Type | Path               | Return Value                                                                    | Description                                    |
| ----------- | ------------------ | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| DELETE      | session/:sessionId | A JSON object that has the following fields:<br />$\{sessionId-delete-response} | Deletes the session specified in the URL path. |

\{#sessionId-delete-response}

| **Key**   | **Type** | **Description**                                      |
| :-------- | :------- | :--------------------------------------------------- |
| sessionId | string   | The advertising ID of the device.                    |
| status    | int      | A status code summarizing the result of the command. |
| value     | object   | null                                                 |

## POST v1/session/:sessionId/input

(_available since release 2.0_)

| Method Type | Path                     | JSON Parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Return Value                                                       | Description                                               |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| POST        | session/:sessionId/input | **channelId** - \{number}: The ID of the app to be launched.<br /><br />**contentId** - \{string} (optional): The [contentId](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentType** to execute deep linking tests.<br /><br />**contentType** - \{string} (optional): The [mediaType](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentId** to execute deep linking tests.<br /><br />**Example:**<br />$\{input-code} | A JSON object with the following fields: $\{generic-post-response} | Deep links into content while the app is already running. |

\{#input-code}

```
{
  "channelId": "dev",
  "contentId": "myMovie123",
  "contentType": "movie"
}
```

## POST v1/session/:sessionId/install

| Method Type | Path                       | JSON Parameters                                                                                             | Return Value                                                       | Description                     |
| ----------- | -------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------- |
| POST        | session/:sessionId/install | **channelId** - \{number}: The ID of the app to be installed.<br /><br />**Example:**<br />$\{install-code} | A JSON object with the following fields: $\{generic-post-response} | Installs the specified the app. |

\{#install-code}

```
{
	"channelId": "dev"
}
```

## POST v1/session/:sessionId/launch

| Method Type | Path                      | JSON Parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Return Value                                                             | Description                                                                                                                                                |
| ----------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST        | session/:sessionId/launch | **channelId** - \{number}: The ID of the app to be launched.<br /><br />**contentId** - \{string} (optional): The [contentId](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentType** to execute deep linking tests.<br /><br />**contentType** - \{string} (optional): The [mediaType](/docs/developer-program/discovery/implementing-deep-linking.md#understanding-deep-linking-parameters) of the content to be played. You can include this parameter and the **contentId** to execute deep linking tests.<br /><br />**Example:**<br />$\{launch-code} | A JSON object with the  following fields:<br />$\{generic-post-response} | Launches the specified  app.\<br/>\<br/>You can use this method to launch an app into playback or an episodic picker screen in order to test deep linking. |

\{#launch-code}

```
{
  "channelId": "dev",
  "contentId": "myMovie123",
  "contentType": "movie"
}
```

\{#generic-post-response}

| **Key**   | **Type** | **Description**                                      |
| :-------- | :------- | :--------------------------------------------------- |
| sessionId | string   | The advertising ID of the device.                    |
| status    | int      | A status code summarizing the result of the command. |
| value     | object   | null                                                 |

## POST v1/session/:sessionId/load

(_available since release 2.0_)

| Method Type | Path                    | JSON Parameters                                                                                                                                                                                                                                                                                                                           | Return Value                                                       | Description       |
| ----------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------- |
| POST        | session/:sessionId/load | **channel** - \{file}: A zipped package file.<br /><br />**username** - \{file}: Enter **rokudev**, which is the user name for the Development Application Installer.<br /><br />**password** - \{file}: The password for accessing the Development Application Installer on your Roku device.<br /><br />**Example:**<br />$\{load-code} | A JSON object with the following fields: $\{generic-post-response} | Sideloads an app. |

\{#load-code}

```
{
	"channel": "myChannel.zip",
	"username": "rokudev",
	"password": "your_device_password",
}
```

## POST v1/session/:sessionId/press

| Method Type | Path                     | JSON Parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Return Value                                                       | Description                                           |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| POST        | session/:sessionId/press | **button** - \{string}: The name of the key to be pressed ("home", "up", "down", "left", "right").<br /><br />**button_sequence** - \{array: string}: An array of keys to be pressed in the specified sequence. <br /><br />**button_delays** - \{array: string} (optional): An array of delays (in ms) between buttons executions. The default value is 1000ms.<br /><br />**Example:** $\{post-press-json}<br /><br />In this example, the delay after the "up" keypress is 1000ms and 2000ms after the "down" keypress. | A JSON object with the  following fields:<br /> $\{press-response} | Simulates the press and release of the specified key. |

\{#press-response}

| **Key**   | **Type** | **Description**                                     |
| :-------- | :------- | :-------------------------------------------------- |
| sessionId | string   | The advertising ID of the device                    |
| status    | int      | A status code summarizing the result of the command |
| value     | object   | null                                                |

\{#post-press-json}

```
{
   "button_sequence": ["up", "down", "left"],
   "buttons_delays": ["1000", "2000"]
}
```

## POST v1/session/:sessionId/timeouts

| Method Type | Path                        | JSON Parameters                                                                                                                                                                                                                                                                   | Return Value                                                                                                | Description                                                                          |
| ----------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| POST        | session/:sessionId/timeouts | **type** - \{string}: Either "implicit" (ECP commands) or "pressDelay"  (delay between press cmd execution)<br /><br />**ms** - \{number}: The amount of time, in milliseconds, that time-limited commands are permitted to run.<br /><br /> **Example**: <br />$\{timeouts-code} | A JSON object with the specified session. This object has the following fields:<br /> $\{timeouts-response} | Configure the amount of time that an operation can be executed before it is aborted. |

\{#timeouts-code}

```
{
  "type": "implicit",
  "ms": 2000
}
```

\{#timeouts-response}

| **Key**   | **Type** | **Description**                                     |
| :-------- | :------- | :-------------------------------------------------- |
| sessionId | string   | The advertising ID of the device.                   |
| status    | int      | A status code summarizing the result of the command |
| value     | object   | null                                                |

## POST v1/session/:sessionId/timeouts/implicit_wait

| Method Type | Path                                      | JSON Parameters                                                                                                                        | Return Value                                                             | Description                                                                     |
| ----------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| POST        | session/:sessionId/timeouts/implicit_wait | **ms** - \{number}: The amount of time (in milliseconds) that commands are allowed to run.<br /><br />**Example:** <br />$\{wait_code} | A JSON object with the following fields:<br /> $\{generic-post-response} | Specify the amount of time that commands can be executed  before being aborted. |

\{#wait_code}

```
{
	"ms": 2000
}
```

## POST v1/session/:sessionId/timeouts/press_wait

| Method Type | Path                                   | JSON Parameters                                                                                                                 | Return Value                                                             | Description                                             |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| POST        | session/:sessionId/timeouts/press_wait | **ms** - \{number}: The amount of time (in milliseconds) between keypress commands.<br /><br />**Example:**<br /> $\{wait_code} | A JSON object with the following fields: <br />$\{generic-post-response} | Specify the amount of time to wait between key presses. |

## POST v1/session/:sessionId/elements

| Method Type | Path                        | JSON Parameters                                                                                                                                                                                                                                                                                                                                                                                               | Return Value                                                                                                                   | Description                                                                                                                                                            |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST        | session/:sessionId/elements | An array of the following objects, which can be used to located an element: <br /><br />**using** - \{string}: The locator strategy to use. This may be one of the following values: $\{using-values-list}<br /><br />**attribute** - \{string}:  The attribute name (used only for "attr" strategy) <br /><br />**value** - \{string}: The search target.<br /><br />**Example**:<br />$\{post-element-json} | A WebElement JSON object representing the retrieved elements. This object has the following fields: $\{post-elements-response} | Searches for elements on the page matching the search criteria, starting from the screen root. All the matching elements will be returned in a WebElement JSON object. |

\{#post-elements-response}

| **Key**                  | **Type** | **Description**                                      |
| :----------------------- | :------- | :--------------------------------------------------- |
| sessionId                | string   | The advertising ID of the device.                    |
| status                   | int      | A status code summarizing the result of the command. |
| value                    | object   |                                                      |
| value.XMLName            | object   |                                                      |
| value.XMLName.Local      | string   | The name of the retrieved element                    |
| value.XMLName.Space      | string   | The namespace identifier for the element.            |
| value.Attr               | array    |                                                      |
| value.Attr[i].Name       | object   |                                                      |
| value.Attr[i].Name.Local | string   | The name of attribute.                               |
| value.Attr[i].Name.Space | string   | The namespace identifier for the attribute.          |
| value.Attr[i].Value      | string   | The value of the attribute.                          |
| value.Nodes              | array    | The child elements.                                  |

\{#using-values-list}

* **text**: Returns an element whose text matches the search value.
* **attr**: Returns an element whose specified attributes matches the search value.
* **tag**: Returns an element whose tag name matches the search value.

\{#post-element-json}

```
{
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
```

## POST v1/session/:sessionId/element

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        JSON Parameters
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        POST
      </td>

      <td>
        session/:sessionId/element
      </td>

      <td>
        An **elementData** array and optional **parentData** array with the following objects that can be used to locate an element: <br /><br />**using** - \{string}: The locator strategy to use. This may be one of the following values: $\{using-values-list}<br /><br />**attribute** - \{string}:  The attribute name (used only for "attr" strategy) <br /><br />**value** - \{string}: The search target.<br /><br />**Example**:<br />$\{post-element-json}
      </td>

      <td>
        A WebElement JSON object representing the retrieved element. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device.</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.XMLName</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.XMLName.Local</td>
            <td>string</td>
            <td>The name of the retrieved element.</td>
          </tr>

          <tr>
            <td>value.XMLName.Space</td>
            <td>string</td>
            <td>The namespace identifier for the element.</td>
          </tr>

          <tr>
            <td>value.Attr</td>
            <td>array</td>

            <td />
          </tr>

          <tr>
            <td>value.Attr.Name</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.Attr.Name.Local</td>
            <td>string</td>
            <td>The name of the attribute.</td>
          </tr>

          <tr>
            <td>value.Attr.Name.Space</td>
            <td>string</td>
            <td>The namespace identifier for the attribute.</td>
          </tr>

          <tr>
            <td>value.Attr.Value</td>
            <td>string</td>
            <td>The value of the attribute.</td>
          </tr>

          <tr>
            <td>value.Nodes</td>
            <td>array</td>
            <td>The child elements.</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.XMLName
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.XMLName.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the retrieved element.
      </td>

      <td>
        value.XMLName.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier for the element.
      </td>

      <td>
        value.Attr
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>
        value.Attr.Name
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.Attr.Name.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the attribute.
      </td>

      <td>
        value.Attr.Name.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier for the attribute.
      </td>

      <td>
        value.Attr.Value
      </td>

      <td>
        string
      </td>

      <td>
        The value of the attribute.
      </td>

      <td>
        value.Nodes
      </td>

      <td>
        array
      </td>

      <td>
        The child elements.
      </td>

      <td>
        Searches for an element on the page, starting from the screen root. The first located element will be returned as a WebElement JSON object.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the retrieved element.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier for the element.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr.Name
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr.Name.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr.Name.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier for the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr.Value
      </td>

      <td>
        string
      </td>

      <td>
        The value of the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Nodes
      </td>

      <td>
        array
      </td>

      <td>
        The child elements.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

\{#post-element-response}

## GET v1/session/:sessionId/element/active

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        session/:sessionId/element/active
      </td>

      <td>
        A JSON object with the element that currently has focus. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device.</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.XMLName</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.XMLName.Local</td>
            <td>string</td>
            <td>The name of the element retrieved.</td>
          </tr>

          <tr>
            <td>value.XMLName.Space</td>
            <td>string</td>
            <td>The namespace identifier of the element retrieved.</td>
          </tr>

          <tr>
            <td>value.Attr</td>
            <td>array</td>

            <td />
          </tr>

          <tr>
            <td>value.Attr\[i].Name</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.Attr\[i].Name.Local</td>
            <td>string</td>
            <td>The name of the attribute.</td>
          </tr>

          <tr>
            <td>value.Attr\[i].Name.Space</td>
            <td>string</td>
            <td>The namespace identifier of the attribute.</td>
          </tr>

          <tr>
            <td>value.Attr\[i].Value</td>
            <td>string</td>
            <td>The value of the attribute.</td>
          </tr>

          <tr>
            <td>value.Nodes</td>
            <td>array</td>
            <td>The child elements of the retrieved item.</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.XMLName
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.XMLName.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the element retrieved.
      </td>

      <td>
        value.XMLName.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier of the element retrieved.
      </td>

      <td>
        value.Attr
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>
        value.Attr[i].Name
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.Attr[i].Name.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the attribute.
      </td>

      <td>
        value.Attr[i].Name.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier of the attribute.
      </td>

      <td>
        value.Attr[i].Value
      </td>

      <td>
        string
      </td>

      <td>
        The value of the attribute.
      </td>

      <td>
        value.Nodes
      </td>

      <td>
        array
      </td>

      <td>
        The child elements of the retrieved item.
      </td>

      <td>
        Retrieves the element on the page that currently has focus.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the element retrieved.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.XMLName.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier of the element retrieved.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr[i].Name
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr[i].Name.Local
      </td>

      <td>
        string
      </td>

      <td>
        The name of the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr[i].Name.Space
      </td>

      <td>
        string
      </td>

      <td>
        The namespace identifier of the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Attr[i].Value
      </td>

      <td>
        string
      </td>

      <td>
        The value of the attribute.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Nodes
      </td>

      <td>
        array
      </td>

      <td>
        The child elements of the retrieved item.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## GET v1/session/:sessionId/source

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        session/:sessionId/source
      </td>

      <td>
        A JSON object with the current page source. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device.</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>string</td>
            <td>A base64 string that can be decoded to XML.</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        A base64 string that can be decoded to XML.
      </td>

      <td>
        Retrieves the current page source.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        A base64 string that can be decoded to XML.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## GET v1/session/:sessionId/apps

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        session/:sessionId/apps
      </td>

      <td>
        A JSON object with an array of installed apps. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>array</td>

            <td />
          </tr>

          <tr>
            <td>value\[i].Title</td>
            <td>string</td>
            <td>The title of the app.</td>
          </tr>

          <tr>
            <td>value\[i].ID</td>
            <td>string</td>
            <td>The ID of the app.</td>
          </tr>

          <tr>
            <td>value\[i].Version</td>
            <td>string</td>
            <td>The build version of the app.</td>
          </tr>

          <tr>
            <td>value\[i].Subtype</td>
            <td>string</td>
            <td>"ndka"/"rsga"</td>
          </tr>

          <tr>
            <td>value\[i].Type</td>
            <td>string</td>
            <td>"menu"/"appl"</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>
        value
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>
        value[i].Title
      </td>

      <td>
        string
      </td>

      <td>
        The title of the app.
      </td>

      <td>
        value[i].ID
      </td>

      <td>
        string
      </td>

      <td>
        The ID of the app.
      </td>

      <td>
        value[i].Version
      </td>

      <td>
        string
      </td>

      <td>
        The build version of the app.
      </td>

      <td>
        value[i].Subtype
      </td>

      <td>
        string
      </td>

      <td>
        "ndka"/"rsga"
      </td>

      <td>
        value[i].Type
      </td>

      <td>
        string
      </td>

      <td>
        "menu"/"appl"
      </td>

      <td>
        Retrieves a list of apps currently  installed on the device.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value[i].Title
      </td>

      <td>
        string
      </td>

      <td>
        The title of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value[i].ID
      </td>

      <td>
        string
      </td>

      <td>
        The ID of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value[i].Version
      </td>

      <td>
        string
      </td>

      <td>
        The build version of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value[i].Subtype
      </td>

      <td>
        string
      </td>

      <td>
        "ndka"/"rsga"
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value[i].Type
      </td>

      <td>
        string
      </td>

      <td>
        "menu"/"appl"
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## GET v1/session/:sessionId/current_app

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        session/:sessionId/current_app
      </td>

      <td>
        A JSON object with the app currently loaded on the device. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command.</td>
          </tr>

          <tr>
            <td>value</td>
            <td>array</td>

            <td />
          </tr>

          <tr>
            <td>value.Title</td>
            <td>string</td>
            <td>The title of the app.</td>
          </tr>

          <tr>
            <td>value.ID</td>
            <td>string</td>
            <td>The ID of the app.</td>
          </tr>

          <tr>
            <td>value.Version</td>
            <td>string</td>
            <td>The build version of the app.</td>
          </tr>

          <tr>
            <td>value.Subtype</td>
            <td>string</td>
            <td>"ndka"/"rsga"</td>
          </tr>

          <tr>
            <td>value.Type</td>
            <td>string</td>
            <td>"menu"/"appl"</td>
          </tr>
        </table>
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>
        value
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>
        value.Title
      </td>

      <td>
        string
      </td>

      <td>
        The title of the app.
      </td>

      <td>
        value.ID
      </td>

      <td>
        string
      </td>

      <td>
        The ID of the app.
      </td>

      <td>
        value.Version
      </td>

      <td>
        string
      </td>

      <td>
        The build version of the app.
      </td>

      <td>
        value.Subtype
      </td>

      <td>
        string
      </td>

      <td>
        "ndka"/"rsga"
      </td>

      <td>
        value.Type
      </td>

      <td>
        string
      </td>

      <td>
        "menu"/"appl"
      </td>

      <td>
        Retrieves the app currently  running on the device.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        array
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Title
      </td>

      <td>
        string
      </td>

      <td>
        The title of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.ID
      </td>

      <td>
        string
      </td>

      <td>
        The ID of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Version
      </td>

      <td>
        string
      </td>

      <td>
        The build version of the app.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Subtype
      </td>

      <td>
        string
      </td>

      <td>
        "ndka"/"rsga"
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.Type
      </td>

      <td>
        string
      </td>

      <td>
        "menu"/"appl"
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## GET v1/session/:sessionId/player

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method Type
      </th>

      <th>
        Path
      </th>

      <th>
        Return Value
      </th>

      <th>
        Description
      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        GET
      </td>

      <td>
        session/:sessionId/player
      </td>

      <td>
        A JSON object with the information about the Roku media player. This object has the following fields:

        <table>
          <tr>
            <td>**Key**</td>
            <td>**Type**</td>
            <td>**Description**</td>
          </tr>

          <tr>
            <td>sessionId</td>
            <td>string</td>
            <td>The advertising ID of the device</td>
          </tr>

          <tr>
            <td>status</td>
            <td>int</td>
            <td>A status code summarizing the result of the command</td>
          </tr>

          <tr>
            <td>value</td>
            <td>object</td>

            <td />
          </tr>

          <tr>
            <td>value.error</td>
            <td>string</td>
            <td>Indicates whether there was a playback error.  If no error occurred, this is set to "false"</td>
          </tr>

          <tr>
            <td>value.state</td>
            <td>string</td>
            <td>Indicates the current playback state ("play", "pause", "resume", and so on)</td>
          </tr>

          <tr>
            <td>value.format</td>
            <td>object</td>
            <td>The **format** element contains the following attributes: *audio*, *caption*, *container*, *drm*, *video*, and *res*.</td>
          </tr>

          <tr>
            <td>value.format.audio</td>
            <td>string</td>
            <td>The audio compression method ("aac", "aac\_adts", and so on.)</td>
          </tr>

          <tr>
            <td>value.format.caption</td>
            <td>string</td>
            <td>The closed caption format ("608\_708", for example).   This value is set to "none" if there are no captions.</td>
          </tr>

          <tr>
            <td>value.format.container</td>
            <td>string</td>
            <td>The container format ("hls", for example)</td>
          </tr>

          <tr>
            <td>value.format.drm</td>
            <td>string</td>
            <td>The encoding type. If no encoding is used, this us set to "none".</td>
          </tr>

          <tr>
            <td>value.format.video</td>
            <td>string</td>
            <td>The format of the currently playing video stream ("mpeg4-15", for example)</td>
          </tr>

          <tr>
            <td>value.format.res</td>
            <td>string</td>
            <td>The resolution of the currently playing video stream ("1280X720", for example).</td>
          </tr>

          <tr>
            <td>value.buffering</td>
            <td>object</td>
            <td>The **buffering** element contains the following attributes: *current*, *max*, *target*.</td>
          </tr>

          <tr>
            <td>value.buffering.current</td>
            <td>string</td>
            <td>The current buffering speed (in kbps).</td>
          </tr>

          <tr>
            <td>value.buffering.max</td>
            <td>string</td>
            <td>The maximum possible buffering speed (in kbps).</td>
          </tr>

          <tr>
            <td>value.buffering.target</td>
            <td>string</td>
            <td>The target buffering speed (in kbps).</td>
          </tr>

          <tr>
            <td>value.newStream</td>
            <td>object</td>
            <td>The **newStream** element contains the following attribute: *speed*.</td>
          </tr>

          <tr>
            <td>value.newStream.speed</td>
            <td>string</td>
            <td>The current playback speed (in bps)</td>
          </tr>

          <tr>
            <td>value.position</td>
            <td>string</td>
            <td>The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.</td>
          </tr>

          <tr>
            <td>value.duration</td>
            <td>string</td>
            <td>The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.</td>
          </tr>

          <tr>
            <td>value.isLive</td>
            <td>string</td>
            <td>A flag indicating whether the video being played is a live stream.</td>
          </tr>

          <tr>
            <td>value.runtime</td>
            <td>string</td>
            <td>The runtime of the video being played (in seconds).</td>
          </tr>

          <tr>
            <td>value.streamSegment</td>
            <td>object</td>
            <td>The **streamSegment** attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS\<br />\<br />This element contains the following attributes: *bitrate*, *mediaSequence*, *segmentType*, and *time*.</td>
          </tr>

          <tr>
            <td>value.streamSegment.bitrate</td>
            <td>string</td>
            <td>The bitrate of the video segment (in bps).</td>
          </tr>

          <tr>
            <td>value.streamSegment.mediaSequence</td>
            <td>string</td>
            <td>The HLS media sequence ID of the segment in the video.</td>
          </tr>

          <tr>
            <td>value.streamSegment.segmentType</td>
            <td>string</td>
            <td>The type of data in the segment, which may be one of the following values: "audio", "video", "captions",  "mux".</td>
          </tr>

          <tr>
            <td>value.streamSegment.time</td>
            <td>string</td>
            <td>The chunk start time.</td>
          </tr>
        </table>

        <br />
      </td>

      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command
      </td>

      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>
        value.error
      </td>

      <td>
        string
      </td>

      <td>
        Indicates whether there was a playback error.  If no error occurred, this is set to "false"
      </td>

      <td>
        value.state
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the current playback state ("play", "pause", "resume", and so on)
      </td>

      <td>
        value.format
      </td>

      <td>
        object
      </td>

      <td>
        The **format** element contains the following attributes: _audio_, _caption_, _container_, _drm_, _video_, and _res_.
      </td>

      <td>
        value.format.audio
      </td>

      <td>
        string
      </td>

      <td>
        The audio compression method ("aac", "aac_adts", and so on.)
      </td>

      <td>
        value.format.caption
      </td>

      <td>
        string
      </td>

      <td>
        The closed caption format ("608_708", for example).   This value is set to "none" if there are no captions.
      </td>

      <td>
        value.format.container
      </td>

      <td>
        string
      </td>

      <td>
        The container format ("hls", for example)
      </td>

      <td>
        value.format.drm
      </td>

      <td>
        string
      </td>

      <td>
        The encoding type. If no encoding is used, this us set to "none".
      </td>

      <td>
        value.format.video
      </td>

      <td>
        string
      </td>

      <td>
        The format of the currently playing video stream ("mpeg4-15", for example)
      </td>

      <td>
        value.format.res
      </td>

      <td>
        string
      </td>

      <td>
        The resolution of the currently playing video stream ("1280X720", for example).
      </td>

      <td>
        value.buffering
      </td>

      <td>
        object
      </td>

      <td>
        The **buffering** element contains the following attributes: _current_, _max_, _target_.
      </td>

      <td>
        value.buffering.current
      </td>

      <td>
        string
      </td>

      <td>
        The current buffering speed (in kbps).
      </td>

      <td>
        value.buffering.max
      </td>

      <td>
        string
      </td>

      <td>
        The maximum possible buffering speed (in kbps).
      </td>

      <td>
        value.buffering.target
      </td>

      <td>
        string
      </td>

      <td>
        The target buffering speed (in kbps).
      </td>

      <td>
        value.newStream
      </td>

      <td>
        object
      </td>

      <td>
        The **newStream** element contains the following attribute: _speed_.
      </td>

      <td>
        value.newStream.speed
      </td>

      <td>
        string
      </td>

      <td>
        The current playback speed (in bps)
      </td>

      <td>
        value.position
      </td>

      <td>
        string
      </td>

      <td>
        The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.
      </td>

      <td>
        value.duration
      </td>

      <td>
        string
      </td>

      <td>
        The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.
      </td>

      <td>
        value.isLive
      </td>

      <td>
        string
      </td>

      <td>
        A flag indicating whether the video being played is a live stream.
      </td>

      <td>
        value.runtime
      </td>

      <td>
        string
      </td>

      <td>
        The runtime of the video being played (in seconds).
      </td>

      <td>
        value.streamSegment
      </td>

      <td>
        object
      </td>

      <td>
        The **streamSegment** attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS\<br />\<br />This element contains the following attributes: _bitrate_, _mediaSequence_, _segmentType_, and _time_.
      </td>

      <td>
        value.streamSegment.bitrate
      </td>

      <td>
        string
      </td>

      <td>
        The bitrate of the video segment (in bps).
      </td>

      <td>
        value.streamSegment.mediaSequence
      </td>

      <td>
        string
      </td>

      <td>
        The HLS media sequence ID of the segment in the video.
      </td>

      <td>
        value.streamSegment.segmentType
      </td>

      <td>
        string
      </td>

      <td>
        The type of data in the segment, which may be one of the following values: "audio", "video", "captions",  "mux".
      </td>

      <td>
        value.streamSegment.time
      </td>

      <td>
        string
      </td>

      <td>
        The chunk start time.
      </td>

      <td>
        Retrieves information about the Roku media player.
      </td>
    </tr>

    <tr>
      <td>
        **Key**
      </td>

      <td>
        **Type**
      </td>

      <td>
        **Description**
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        sessionId
      </td>

      <td>
        string
      </td>

      <td>
        The advertising ID of the device
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        int
      </td>

      <td>
        A status code summarizing the result of the command
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        object
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.error
      </td>

      <td>
        string
      </td>

      <td>
        Indicates whether there was a playback error.  If no error occurred, this is set to "false"
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.state
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the current playback state ("play", "pause", "resume", and so on)
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format
      </td>

      <td>
        object
      </td>

      <td>
        The **format** element contains the following attributes: _audio_, _caption_, _container_, _drm_, _video_, and _res_.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.audio
      </td>

      <td>
        string
      </td>

      <td>
        The audio compression method ("aac", "aac_adts", and so on.)
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.caption
      </td>

      <td>
        string
      </td>

      <td>
        The closed caption format ("608_708", for example).   This value is set to "none" if there are no captions.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.container
      </td>

      <td>
        string
      </td>

      <td>
        The container format ("hls", for example)
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.drm
      </td>

      <td>
        string
      </td>

      <td>
        The encoding type. If no encoding is used, this us set to "none".
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.video
      </td>

      <td>
        string
      </td>

      <td>
        The format of the currently playing video stream ("mpeg4-15", for example)
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.format.res
      </td>

      <td>
        string
      </td>

      <td>
        The resolution of the currently playing video stream ("1280X720", for example).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.buffering
      </td>

      <td>
        object
      </td>

      <td>
        The **buffering** element contains the following attributes: _current_, _max_, _target_.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.buffering.current
      </td>

      <td>
        string
      </td>

      <td>
        The current buffering speed (in kbps).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.buffering.max
      </td>

      <td>
        string
      </td>

      <td>
        The maximum possible buffering speed (in kbps).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.buffering.target
      </td>

      <td>
        string
      </td>

      <td>
        The target buffering speed (in kbps).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.newStream
      </td>

      <td>
        object
      </td>

      <td>
        The **newStream** element contains the following attribute: _speed_.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.newStream.speed
      </td>

      <td>
        string
      </td>

      <td>
        The current playback speed (in bps)
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.position
      </td>

      <td>
        string
      </td>

      <td>
        The time of the current position in the stream, expressed as the elapsed time (in ms) since the start of stream or UTC time, depending on the content.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.duration
      </td>

      <td>
        string
      </td>

      <td>
        The duration of the video being played (in seconds). This becomes valid when playback begins and may change if the video is dynamic content, such as a live event.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.isLive
      </td>

      <td>
        string
      </td>

      <td>
        A flag indicating whether the video being played is a live stream.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.runtime
      </td>

      <td>
        string
      </td>

      <td>
        The runtime of the video being played (in seconds).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.streamSegment
      </td>

      <td>
        object
      </td>

      <td>
        The **streamSegment** attribute contains Information about the video segment that is currently streaming. This is only meaningful for segmented video transports, such as DASH and HLS\<br />\<br />This element contains the following attributes: _bitrate_, _mediaSequence_, _segmentType_, and _time_.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.streamSegment.bitrate
      </td>

      <td>
        string
      </td>

      <td>
        The bitrate of the video segment (in bps).
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.streamSegment.mediaSequence
      </td>

      <td>
        string
      </td>

      <td>
        The HLS media sequence ID of the segment in the video.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.streamSegment.segmentType
      </td>

      <td>
        string
      </td>

      <td>
        The type of data in the segment, which may be one of the following values: "audio", "video", "captions",  "mux".
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        value.streamSegment.time
      </td>

      <td>
        string
      </td>

      <td>
        The chunk start time.
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## Testing production apps

To test production apps with the Roku Web Driver APIs, [package the app](/docs/developer-program/publishing/packaging-channels.md#rekeying) on your Roku device using the same Roku developer account linked to the production version of the app.
