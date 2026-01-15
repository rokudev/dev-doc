---
title: External Control Protocol (ECP)
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
# External Control Protocol (ECP)

The External Control Protocol (ECP) enables a Roku device to be controlled over a local area network by providing a number of external control services. The Roku devices offering these external control services are discoverable using SSDP (Simple Service Discovery Protocol). ECP is a simple RESTful API that can be accessed by programs in virtually any programming environment.

> As of Roku OS 14.1, the **Settings > System > Advanced system settings > Control by mobile apps** feature must be set to "Enabled" for a Roku device to receive the following ECP commands:
>
> * keypress
> * keydown
> * keyup
> * query/icon
> * query/tv-channels
> * query/tv-active-channel
>
> In addition, the following ECP commands require the Roku device to be in [developer mode](/docs/developer-program/getting-started/developer-setup.md) and the **Control by mobile apps** setting to be "Enabled":
>
> * query/chanperf
> * query/r2d2-bitmaps
> * query/sgnodes
> * query/sgrendezvous and sgrendezvous
> * query/registry
> * query/graphics-frame-rate
> * query/fwbeacons and fwbeacons
> * query/app-object-counts
> * query/app-state
> * exit-app
>
> As of Roku OS 12.0, the "search" command is no longer available.
>
> Support for sending ECP commands from within a Roku app has been discontinued. Apps may no longer include code in their app that is designed to issue any type of ECP command. [Static Analysis testing](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md) has been updated to check apps for ECP commands. Apps that include ECP commands in their code will automatically be blocked from publishing to the Streaming Store.
>
> In addition, ECP commands may not be sent from 3rd-party platforms (for example, mobile applications).
>
> Apps may still include code for handling incoming ECP commands sent by the Roku OS for [deep links](/docs/developer-program/discovery/implementing-deep-linking.md), [voice controls](/docs/developer-program/media-playback/voice-controls/transport-controls.md), and so on.
>
> To further leverage ECP commands for testing an app's performance and behavior, it is recommended that developers integrate **[Roku's automation test software](/docs/developer-program/dev-tools/automated-channel-testing/automated-testing-overview.md)** in their test suite.

***

## Simple Service Discovery Protocol (SSDP)

SSDP is an industry IETF standard network protocol for discovery of
local area network services. Roku devices advertise their external
control services using the multicast SSDP so that programs can discover
the IP address of Roku devices in the area. There is a standard SSDP
multicast address and port (239.255.255.250:1900) used for local area
network communication. The Roku device responds to M-SEARCH queries on
this IP address and port.

To query for a Roku device IP address, send the following HTTP request
to 239.255.255.250 port 1900:

```
M-SEARCH * HTTP/1.1
Host: 239.255.255.250:1900
Man: "ssdp:discover"
ST: roku:ecp

```

There _must_ be a blank line at the end of the file above. If you
put the above request into a file such as roku_ecp_req.txt, you can
issue the following command on most Linux machines to test the request:

```
$ ncat -u 239.255.255.250 1900 < roku_ecp_req.txt
```

If you view the response using Wireshark, and filter on port 1900, you
can see the Roku device response (Ncat has trouble receiving multicast
traffic, so viewing the response using Ncat does not work). The response
has the following format:

```
HTTP/1.1 200 OK
Cache-Control: max-age=3600
ST: roku:ecp
Location: http://192.168.1.134:8060/
USN: uuid:roku:ecp:P0A070000007
```

If you get a 200 status response, the Location header is valid. You can
parse out the URL for the Roku device external control services from the
Location header. The Roku device serial number is contained in the USN
line after uuid:roku:ecp. Note that if there are multiple Roku devices
in your local area network, you will get multiple responses. Your
program could keep a map of USNs to location URLs, and allow the user to
select which Roku device on the network to control. We recommend you let
the user assign names to the USNs.

When parsing headers in the response, in accordance with the UPnP Device
Architecture specification, field names should not be treated as case
sensitive. That means that, for example, the Location header may begin
with either "Location:" or "LOCATION:" or "location:", and so forth.

Please note the Cache-Control header. Roku devices multicast NOTIFY
messages periodically (approximately every 20 minutes). It is safe to
assume the unit is no longer available if you have not received a new
NOTIFY message before the Cache-Control max-age time expires.

## External control service commands

The external control services provided by ECP are included in a simple
RESTful API accessed using HTTP on port 8060. Once you have the Roku
device IP address, you can issue the following external control service
commands to the Roku device.

### General ECP commands

<HTMLBlock>{`
<table><thead><tr><th class="short-line">Command</th><th class="short-line">Description</th><th class="short-line">Required Device Settings</th></tr></thead><tbody><tr><td class="short-line">query/media-player</td><td class="long-line">Returns a child element named 'player' that identifies the media player state. The information returned includes the current stream segment and position of the content being played, the running time of the content, audio format, and buffering. This command is accessed using an HTTP GET.</td><td class="short-line" /></tr><tr><td class="short-line">keydown/<KEY></td><td class="long-line">Equivalent to pressing the remote control key identified after the slash. This command is sent using an HTTP POST with no body.</td><td class="long-line"><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">keyup/<KEY></td><td class="long-line">Equivalent to releasing the remote control key identified after the slash. This command is sent using an HTTP POST with no body.</td><td class="long-line"><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">keypress/<KEY></td><td class="long-line">Equivalent to pressing down and releasing the remote control key identified after the slash. You can also use this command, and the keydown and keyup commands, to send keyboard alphanumeric characters when a keyboard screen is active, as described in <a href="#keypress-key-values">Keypress Key Values</a>. This command is sent using an HTTP POST with no body.</td><td class="long-line"><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">query/device-info</td><td class="long-line">Retrieves device information similar to that returned by roDeviceInfo. This command is accessed using an HTTP GET.<br /><br />As of Roku OS 15.0, this command returns the following fields that indicate whether TV power and audio volume control have been enabled on a Roku streaming player: <br /><br />- supports-tv-power-control<br />- supports-audio-volume-control</td><td class="short-line" /></tr><tr><td class="short-line">query/icon/<APP_ID></td><td class="long-line">supports-tv-power-control supports-audio-volume-controlReturns an icon corresponding to the application identified by appID. The binary data with an identifying MIME-type header is returned. This command is accessed using an HTTP GET. Example: GET /query/icon/1</td><td class="long-line"><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">query/chanperf<br /><br />query/chanperf/<<em>channelld</em>>?duration-seconds=<<em>seconds</em>></td><td class="long-line">Returns the current memory and CPU utilization of the app running in the foreground (RAM usage is reported bytes). The foreground app may either be a sideloaded app or an app from the Streaming Store. To output the results for an app in the app store, the device must be keyed with the same developer ID/key that was used to generate the package file. <br /><br /><ul><li>Including the <strong>channelId</strong> option in the path outputs statistics for a specific app from the Streaming Store. To use this command, the device must be keyed with the same developer ID/key that was used to generate the package file. The app's process ID (pid) is added to the output of this command.</li></ul></td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">query/r2d2-bitmaps</td><td class="long-line">Returns a list of the assets that have been loaded into texture memory and the amount of used, available, and maximum memory on your device (in bytes).<br /><br />As of Roku OS 11.5, this query returns all bitmaps in texture memory, including those that cannot be directly attributed to an app.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">query/sgnodes/all?count_only=true&sizes=true</td><td class="long-line">Returns all the nodes created by the currently running app. This includes the number of <strong>osref</strong> references to the node (held in the Roku platform) and <strong>bscref</strong> references (held in the app).<br /><br /><ul><li>The <strong>bcsref</strong> count includes references from "m." variable and local variables. Child references and field references do not increase <strong>bscref</strong> counts. The <strong>bscref</strong> count provides a more relevant and accurate indication of the resources that the app itself controls.  </li></ul> - The <strong>count_only</strong> parameter returns the total number of objects as a parameter in the <strong>All-Nodes</strong> field .<br />- The <strong>size</strong> parameter returns the memory used by the object (in kB).</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">query/sgnodes/roots?count_only=true&sizes=true</td><td class="long-line">Prints every existing node without a parent that has been created by the currently running app. The existence of these un-parented nodes means they are being kept alive by direct BrightScript references. These could be in variables local to a function, arrays, or associative arrays, including a component global m or an associative array field of a node.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">query/sgnodes/nodes?node-id=<em>nodeId</em>&count_only=true&sizes=true</td><td class="long-line">Prints nodes with an id field set to node_ID, except it, bypasses all the hierarchy and rules and just runs straight down the whole list in the order of node creation. It will list multiple nodes if there are several that match.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">sgrendezvous</td><td class="long-line">Lists the node rendezvous events for a sideloaded app or production/beta app linked to the Roku developer's account.<br /><br />Use the following commands to enable the logging of rendezvous events, log the events, and disable logging. To use these commands, the device must have developer mode enabled. <br /><br /><div class="hscroll"><table><thead><tr><th class="short-line">Command</th><th class="short-line">Argument</th><th class="short-line">Description</th></tr></thead><tbody><tr><td class="short-line">sgrendezvous/track<br />(POST request)</td><td class="short-line">channel_id (optional)</td><td class="long-line">Starts the logging of node rendezvous events node between threads. Only one app can be tracked at a time. Tracking a different app clears any queued rendezvous events.<br /><br />To track rendezvous events, send a POST command with no JSON body: <pre><code>POST http://[IP address]:8060/query/sgrendezvous/trackPOST http://[IP address]:8060/query/sgrendezvous/track/[channel_id]</code></pre>The response to this command is as follows: <pre><code><sgrendezvous>    <tracking-enabled>true</tracking-enabled>    <status>OK</status></sgrendezvous></code></pre></td></tr><tr><td class="short-line">query/sgrendezvous</td><td class="short-line" /><td class="long-line">Returns the rendezvous events that have occurred since tracking was enabled, or since the previous call to query/sgrendezvous. A maximum of 1,000 events are queued between calls; events beyond this limit are not logged. If events are dropped, the response includes the total count of those dropped events.<br /><br />To retrieve rendezvous events, send a GET command: <pre><code>GET http://[IP address]:8060/query/sgrendezvous</code></pre><br />See <a href="#querysgrendezvous-example">query/sgrendezvous example</a> for details on the command response.</td></tr><tr><td class="short-line">sgrendezvous/untrack</td><td class="short-line" /><td class="long-line">To stop the tracking of rendezvous events, send a POST command with no JSON body: <pre><code>POST http://[IP address]:8060/query/sgrendezvous/untrack</code></pre><br />The response to this command is as follows: <pre><code><sgrendezvous>    <tracking-enabled>false</tracking-enabled>    <status>OK</status></sgrendezvous></code></pre></td></tr></tbody></table></div></td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">query/registry/<<em>channelld</em>></td><td class="long-line">Lists the entries in the device registry for a sideloaded app or production/beta app linked to the Roku developer's account. The app ID must be provided; for sideloaded apps, use "dev" as the channelId.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">query/graphics-frame-rate<br /><br /><em>Available since Roku OS 12.0</em></td><td class="long-line">Returns the recent number of rendered graphics frames per seconds (this value is separate from the video frame rate). Developer mode must be enabled to use this command.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">fwbeacons<br /><br /><em>Available since Roku OS 12.0</em></td><td class="long-line">Tracks app and media lifecycle events for a specific app. To use these commands, the device must have developer mode enabled.<br /><div class="hscroll"><table><thead><tr><th class="short-line">Command</th><th class="short-line">Description</th></tr></thead><tbody><tr><td class="long-line">fwbeacons/track fwbeacons/track/<<em>channelId</em>><br />(POST request)</td><td class="long-line">Enables tracking of app and media lifecycle events for a specific app. When tracking is enabled, a maximum of 1,000 events may be queued for retrieval with the <strong>query/fwbeacons</strong> command; events may be lost if not queried. If tracking is enabled with a different channel ID, all queued events on the previous app are discarded.<br /><br />If the <em>channelId</em> path parameter is not specified, the query is run on the foreground UI app.<br /><br />All devices may monitor a sideloaded app. Devices that are keyed may monitor apps from the Streaming Store that are signed with the same developer key.</td></tr><tr><td class="short-line">query/fwbeacons</td><td class="long-line">Retrieves the app and media lifecycle events that have occurred since the previous query, or since tracking was enabled if no query has been done.</td></tr><tr><td class="short-line">fwbeacons/untrack</td><td class="long-line">Disables tracking of app and media lifecycle events (if enabled) and discards all queued events.</td></tr></tbody></table></div></td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">query/app-object-counts/<<em>channelId</em>><br /><br /><em>Available since Roku OS 13.0</em></td><td class="long-line">Returns the counts for the different BrightScript node objects in the app. This helps developers determine the counts of each type of object held by their Brightscript app.<br /><br />The app may either be a sideloaded app or an app from the Streaming Store. To output the results for an app in the app store, the device must be keyed with the same developer ID/key that was used to generate the package file.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">query/app-state/<<em>appId</em>><br /><br /><em>Available since Roku OS 13.0</em></td><td class="long-line">Returns the current app state: "active", "background" (suspended; running in the background), or "inactive". <br /><br />The app may either be a sideloaded app or an app from the Streaming Store. To output the results for an app in the app store, the device must be keyed with the same developer ID/key that was used to generate the package file.<br /><br />If the app is not installed, this command returns an error.</td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="long-line">exit-app<br /><br />(POST request)<br /><br /><em>Available since Roku OS 13.0</em></td><td class="long-line">Suspends or terminates an app that is running: <br /><ul><li>If the app supports Instant Resume and is running in the foreground, sending this command suspends the app (the app runs in the background).</li><li>If the app supports Instant Resume and is running in the background or the app does not support Instant Resume and is running, sending this command terminates the app.</li></ul></td><td class="long-line">Developer mode enabled<br /><br /><strong>Control by mobile apps</strong> setting “Enabled”</td></tr><tr><td class="short-line">input</td><td class="long-line">Sends custom events to the current application. It takes a user defined list of name-value pairs sent as query string URI parameters. The external control server places these name-value pairs into an associative array, and passes them directly through to the currently executing app script using a Message Port attached to a created roInput object.<br /><br /><a href="/docs/developer-program/dev-tools/external-control-api.md#input-command-conventions">Input Command Conventions</a> includes detailed recommendations on how to pass your data.<br /><br />Messages of type <a href="/docs/references/brightscript/events/roinputevent.md">roInputEvent</a> have a GetInfo() method that will obtain the associative array. The arguments must be URL-encoded. <br /><br />This command is sent using an HTTP POST with no body. Example: <code>POST /input?acceleration.x=0.0&acceleration.y=0.0&acceleration.z=9.8</code></td><td class="short-line" /></tr></tbody></table>
`}</HTMLBlock>

## Input command conventions

As the Roku OS simply marshals the arguments to the **input** command
and passes them to the app script, the forms below compose a
conventional way to communicate input from several common input device
types.

### Sensor input values

There are four sensor input values to report: accelerometer,
orientation, gyroscope (rotation), and magnetometer (magnetic). All
except orientation are vectors in a cartesian coordinate system relative
to the device in its default orientation:

* +x = to the right of the front face of the device (usually the
  short side)
* +y = to the top of the front face of the device (usually the long
  side)
* +z = out of the front face of the device (toward the viewer)

The orientation coordinate system is relative to the point on the
surface of the Earth between the device and the center of the Earth:

* +x = east
* +y = north
* +z = towards the center of the Earth (down)

The type in all such cases is a string representation of a signed
floating point number, with or without an explicit decimal, and with or
without a signed integer exponent following the letter E. A missing
decimal will be presumed after the rightmost present digit, and a
missing exponent will be presumed 0.

### Accelerometer

indicates: acceleration in each dimension relative to free fall
units: meters/sec^2
names: acceleration.x, acceleration.y, acceleration.z

### Orientation

indicates: angular displacement from flat/level and true (or magnetic?)
north.
units: radians
names: orientation.x, orientation.y, orientation.z
notes: Accurate indication of this is not generally possible without
correlation with other sensors or assumptions. Devices make assumptions
to flip the display, for example, that assume that the device is usually
not moving (much) so that all force is simply opposed to gravity, and
that can be assumed to be the "up" direction. Deviation from magnetic
north depends on a magnetometer, and deviation from true north also
depends on geolocation.

### Gyroscope

indicates: angular rotation rate about each axis using the right hand
rule for sign
units: radians/sec
names: rotation.x, rotation.y, rotation.z

### Magnetometer

indicates: magnetic field strength
units: micro-Tesla
names: magnetic.x, magnetic.y, magnetic.z

### Touch and multi-touch

Touch and multi-touch commands take the same form. The resource is the
same "input" as all other generic input commands.

Each action is decomposed to an argument in each dimension (of 2, x and
y with the same orientation as for the sensor inputs, with origin in
lower left). There is an additional "op" argument which can specify
down, up, press (down and up), move, or cancel. Each input is also
qualified with a pointer id that indicates the initial order of down
touches in a multi-touch gesture.

Several such points can be specified in a single POST, especially a
move, but a full triad of x, y, and op arguments should be sent, and
expected for each point, within a POST that contains any of them.

### Additional input values

Other information you might want to pass using the **input** command may
include:

* sensor accuracy
* geolocation (from GPS)
* device-provided derivations of above sensor readings, for example
  "shake" from accelerometer, or "pinch" from multi-touch
