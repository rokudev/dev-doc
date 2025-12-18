---
title: Ifhdmistatus
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

# ifHdmiStatus

## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roHdmiStatus](/docs/references/brightscript/components/rohdmistatus.md "roHdmiStatus") | The HDMI status component provides an interface to the current HDMI operational status of Roku streaming players (or set-top boxes [STBs]). This interface is not applicable for Roku TVs. |

## Supported methods

### IsConnected() as Boolean

#### Description

Checks whether the HDMI or MHL output is connected to an HDMI device.

#### Return Value

A flag indicating whether the HDMI or MHL output is connected to an HDMI device.

### GetHdcpVersion() as String

#### Description

Returns the version number of the currently established HDCP link.

#### Return Value

The version number of the HDCP link: 1.4 or 2.2.

If an empty string is returned, HDCP is disabled. In this case, videos that require HDCP encryption cannot be played. Videos not requiring encryption should still be playable.

> For code demonstrating how to check whether a Roku device (STB or TV) can play 4K content, see the [streaming specification](/docs/specs/media/streaming-specifications.md#4k-uhd-video-streaming-requirements).

### IsHdcpActive(version as String) as Boolean

#### Description

Checks if the current established HDCP link is the specified version or higher

#### Parameters

| Name    | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| version | String | The HDCP link version to be checked (for example, "1.4" or "2.2"). |

#### Return Value

A flag indicating whether the current established HDCP link is the specified `version`.
