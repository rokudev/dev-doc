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
> - keypress
> - keydown
> - keyup
> - query/icon
> - query/tv-channels
> - query/tv-active-channel
>
> In addition, the following ECP commands require the Roku device to be in [developer mode](/docs/developer-program/getting-started/developer-setup.md) and the **Control by mobile apps** setting to be "Enabled":
>
> - query/chanperf
> - query/r2d2-bitmaps
> - query/sgnodes
> - query/sgrendezvous and sgrendezvous
> - query/registry
> - query/graphics-frame-rate
> - query/fwbeacons and fwbeacons
> - query/app-object-counts
> - query/app-state
> - exit-app

> As of Roku OS 12.0, the "search" command is no longer available.
>
> Support for sending ECP commands from within a Roku app has been discontinued. Apps may no longer include code in their app that is designed to issue any type of ECP command. [Static Analysis testing](/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md) has been updated to check apps for ECP commands. Apps that include ECP commands in their code will automatically be blocked from publishing to the Streaming Store.
>
> In addition, ECP commands may not be sent from 3rd-party platforms (for example, mobile applications).
>
> Apps may still include code for handling incoming ECP commands sent by the Roku OS for [deep links](/docs/developer-program/discovery/implementing-deep-linking.md), [voice controls](/docs/developer-program/media-playback/voice-controls/transport-controls.md), and so on.
>
> To further leverage ECP commands for testing an app's performance and behavior, it is recommended that developers integrate **[Roku's automation test software](/docs/developer-program/dev-tools/automated-channel-testing/automated-testing-overview.md)** in their test suite.

-----

## Simple Service Discovery Protocol (SSDP)

SSDP is an industry IETF standard network protocol for discovery of
local area network services. Roku devices advertise their external
control services using the multicast SSDP so that programs can discover
the IP address of Roku devices in the area. There is a standard SSDP
multicast address and port (239.255.255.250:1900) used for local area
network communication. The Roku device responds to M-SEARCH queries on
this IP address and port.

