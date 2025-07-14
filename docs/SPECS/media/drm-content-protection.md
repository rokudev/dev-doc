---
title: DRM & Content Protection
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## DRM

|        | PlayReady | AES-128 | Widevine |
| ------ | --------- | ------- | -------- |
| HLS    |           |         | Y        |
| Smooth | Y         |         |          |
| DASH   | Y         |         | Y        |

> Supported DRM info can be queried using [ifDeviceInfo.getDRMInfo()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdrminfo-as-object).
>
> If you receive a `BS lib provider not found: <DRM>` error when running a sideloaded app, you can install a production app that uses that DRM to load the missing library. For example, you can install YouTube to load Widevine, and you can install Netflix to load PlayReady.  

### PlayReady

> No Roku manifest entries are required for PlayReady.

**Setup ContentNode and set to Video node:**

```
contentNode = createObject("roSGNode", "contentNode")
contentNode.streamFormat = "smooth"
contentNode.url = "wwww.myvideo.com/content.ism"
contentNode.encodingType = "PlayReadyLicenseAcquisitionUrl"
contentNode.encodingKey = "PlayReadyLicenseServerUrl"

m.video.content = contentNode
```

If your PlayReady implementation requires custom request  
data, `encodingType` and `encodingKey` should be formatted like the  
following:

```
contentNode = createObject("roSGNode", "contentNode")
contentNode.streamFormat = "ism"
contentNode.url = "wwww.myvideo.com/content.ism"
contentNode.encodingType = "PlayReadyLicenseAcquisitionAndChallenge"
contentNode.encodingKey = "PlayReadyLicenseServerUrl" + "%%%" + customData

m.video.content = contentNode
```

#### PlayReady 3

Starting from Roku OS version 8.1, all Roku devices with MStar chips are updating to the PlayReady 3 library. Prior to this update, all platforms were using PlayReady 2.5.

While PlayReady 3 is expected to be backward compatible with PlayReady 2.5, we encourage all developers using PlayReady to test their streams on a range of MStar and non-MStar devices.

The following devices contain MStar chips:

| Product Name                                             | Device Code Name | Model Number        |
| -------------------------------------------------------- | ---------------- | ------------------- |
| 2016 Roku Premiere, 2016 Roku Premiere+, 2016 Roku Ultra | Cooper           | 4620X, 4630X, 4640X |
| 2017 Roku Express, 2017 Roku Express+                    | Gilbert          | 3900X, 3910X        |
| 2017 Roku Streaming Stick, 2017 Roku Streaming Stick+    | Amarillo         | 3800X, 3810X        |
| 2017 Roku Ultra                                          | Bryan            | 4660X               |
| Roku TV                                                  | Midland          | 8000X               |

#### Supported security levels

| Device Code Name                          | Security level supported |
| ----------------------------------------- | ------------------------ |
| Liberty, Austin, Briscoe, Sugarland, Giga | SL2000                   |
| Bryan, Amarillo 4K and Longview, Midland  | SL3000                   |

### Verimatrix

As of Roku OS 9.3, support for Verimatrix DRM has been removed from the firmware. Make sure that content in your app is protected using a Roku-supported DRM such as Widevine or PlayReady.

**Required Roku manifest entries:**

```
requires_verimatrix_drm=1
requires_verimatrix_version=1.0
```

**Configure DRM parameters in an roAssociativeArray:**

```
drmParams = createObject("roAssociativeArray")
drmParams.name = "Verimatrix"
drmParams.authDomain = "auth-value-from-streaming-provider"
drmParams.serializationUrl = "hostname-url-from-streaming-provider"`
```

**Setup ContentNode and set to Video node:**

```
contentNode = createObject("roSGNode", "contentNode")
contentNode.streamFormat = "hls"
contentNode.url = "wwww.myvideo.com/content.m3u8"
contentNode.drmParams = drmParams

m.video.content = contentNode
```

### Widevine

The Roku OS supports Widevine DRM for all Roku apps.

> Since Roku OS 9.4, Widevine version 16 is supported on devices that do not have "secure processors".

The Widevine support security levels for the different Roku devices is as follows:

| L1 TVs        | L1 Players        | L2 Players        |
| ------------- | ----------------- | ----------------- |
| ${l1-tv-list} | ${l1-player-list} | ${l2-player-list} |

{#l1-tv-list}

- FtWorth
- Longview
- Reno/Bandera
- Liberty
- Midland/El Paso
- Malone/Camden
- Roma
- Athens
- Miami
- Trinidad
- Roxton
- Sandia
- Damon
- Shiner

{#l1-player-list}

- Dallas
- Cooper 2/3/4
- Bryan
- Amarillo 1080/4K
- Gilbert 1080/4K
- Nemo
- Littlefield
- Fruitland/Chico
- Benjamin
- Marlin
- Madison
- Bailey
- Rockett
- Logan
- Lockhart
- Brewster

{#l2-player-list}

- Giga
- Tyler
- Paolo
- Sugarland/Jackson
- Austin/Mustang
- Briscoe

**Required Roku manifest entries:**

```
requires_widevine_drm=1
requires_widevine_version=1.0
```

**Configure DRM parameters in an roAssociativeArray:**

```
drmParams = {
keySystem: "Widevine"
licenseServerURL: "<http(s)://license-server-host/path?param=value>"
}
```

**Setup ContentNode and set to Video node:**

```
contentNode = createObject("roSGNode", "contentNode")
contentNode.streamFormat = "dash"
contentNode.url = "wwww.myvideo.com/content.mpd"
contentNode.drmParams = drmParams

m.video.content = contentNode
```

For the Digital Rights Management (DRM) Control Attributes, refer to the [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md#ContentMeta-Data-DigitalRightsManagement(DRM)ControlAttributes) documentation.

**Supported schemes**

| Scheme   | Key Rotation? | Firmware dependency |
| -------- | ------------- | ------------------- |
| CTR      | No            | 8.1.x               |
| CTR      | Yes           | 9.0.x               |
| CBC/CBCS | Yes           | 9.0.x               |

## Copy protection

Roku OS also supports HDCP for content copy protection between the  
Roku player's HDMI port and the connected display. However, the HDCP  
version depends on the Roku Model and the Display Type that it's  
currently set to.

[block:parameters]
{
  "data": {
    "h-0": "",
    "h-1": "Roku 4K capable devices",
    "h-2": "All other Roku devices",
    "0-0": "TEE",
    "0-1": "Yes",
    "0-2": "No",
    "1-0": "HDCP",
    "1-1": "2.2 <sup>1</sup>",
    "1-2": "1.4"
  },
  "cols": 3,
  "rows": 2,
  "align": [
    null,
    null,
    null
  ]
}
[/block]


> <sup>1</sup> 4K devices set to a Display Type with a resolution  
> smaller than 4K will default to HDCP 1.4.
>
> HDCP versioning can be queried  
> using [ifHdmiStatus.getHDCPVersion()](/docs/references/brightscript/interfaces/ifhdmistatus.md#gethdcpversion-as-string).