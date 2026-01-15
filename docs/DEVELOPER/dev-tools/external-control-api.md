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

| Command               | Description                                                                                                                                                                                                                                                                                                                                                                    | Required Device Settings                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| query/media-player    | Returns a child element named 'player' that identifies the media player state. The information returned includes the current stream segment and position of the content being played, the running time of the content, audio format, and buffering. This command is accessed using an HTTP GET.                                                                                |                                              |
| keydown/\<KEY>        | Equivalent to pressing the remote control key identified after the slash. This command is sent using an HTTP POST with no body.                                                                                                                                                                                                                                                | **Control by mobile apps** setting “Enabled” |
| keyup/\<KEY>          | Equivalent to releasing the remote control key identified after the slash. This command is sent using an HTTP POST with no body.                                                                                                                                                                                                                                               | **Control by mobile apps** setting “Enabled” |
| keypress/\<KEY>       | Equivalent to pressing down and releasing the remote control key identified after the slash. You can also use this command, and the keydown and keyup commands, to send keyboard alphanumeric characters when a keyboard screen is active, as described in                                                                                                                     |                                              |
| query/device-info     | Retrieves device information similar to that returned by roDeviceInfo. This command is accessed using an HTTP GET.<br /><br />As of Roku OS 15.0, this command returns the following fields that indicate whether TV power and audio volume control have been enabled on a Roku streaming player: <br /><br />- supports-tv-power-control<br />- supports-audio-volume-control |                                              |
| query/icon/\<APP_ID\> | Returns an icon corresponding to the application identified by appID. The binary data with an identifying MIME-type header is returned. This command is accessed using an HTTP GET. Example: GET /query/icon/1**Control by mobile apps** setting “Enabled”                                                                                                                     | **Control by mobile apps** setting “Enabled” |
|                       |                                                                                                                                                                                                                                                                                                                                                                                |                                              |
