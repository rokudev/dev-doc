---
title: DRM & content protection
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

> Supported DRM info can be queried using [ifDeviceInfo.getDRMInfo()](doc:ifdeviceinfo#getdrminfoex-as-object).
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
drmParams.serializationUrl = "hostname-url-from-streaming-provider"
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

<table>
  <thead>
    <tr>
      <th>L1 TVs</th>
      <th>L1 Players</th>
      <th>L2 Players</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><ul><li>FtWorth</li><li>Longview</li><li>Reno/Bandera</li><li>Liberty</li><li>Midland/El Paso</li><li>Malone/Camden</li><li>Roma</li><li>Athens</li><li>Miami</li><li>Trinidad</li><li>Roxton</li><li>Sandia</li><li>Damon</li><li>Shiner</li></ul></td>
      <td><ul><li>Dallas</li><li>Cooper 2/3/4</li><li>Bryan</li><li>Amarillo 1080/4K</li><li>Gilbert 1080/4K</li><li>Nemo</li><li>Littlefield</li><li>Fruitland/Chico</li><li>Benjamin</li><li>Marlin</li><li>Madison</li><li>Bailey</li><li>Rockett</li><li>Logan</li><li>Lockhart</li><li>Brewster</li></ul></td>
      <td><ul><li>Giga</li><li>Tyler</li><li>Paolo</li><li>Sugarland/Jackson</li><li>Austin/Mustang</li><li>Briscoe</li></ul><p><strong>Required Roku manifest entries:</strong></p><pre><code>requires\_widevine\_drm=1requires\_widevine\_version=1.0</code></pre><p><strong>Configure DRM parameters in an roAssociativeArray:</strong></p><pre><code>drmParams = \{keySystem: "Widevine"licenseServerURL: "\<http(s)://license-server-host/path?param=value>"}</code></pre><p><strong>Setup ContentNode and set to Video node:</strong></p><pre><code>contentNode = createObject("roSGNode", "contentNode")contentNode.streamFormat = "dash"contentNode.url = "wwww\.myvideo.com/content.mpd"contentNode.drmParams = drmParamsm.video.content = contentNode</code></pre><p>For the Digital Rights Management (DRM) Control Attributes, refer to the <a href="https://roku-ent.readme.io/dev/update/docs/content-metadata">Content Meta-Data</a> documentation.</p><p><strong>Supported schemes</strong></p><table><thead><tr><th>Scheme</th><th>Key Rotation?</th><th>Firmware dependency</th></tr></thead><tbody><tr><td>CTR</td><td>No</td><td>8.1.x</td></tr><tr><td>CTR</td><td>Yes</td><td>9.0.x</td></tr><tr><td>CBC/CBCS</td><td>Yes</td><td>9.0.x</td></tr></tbody></table></td>
    </tr>
  </tbody>
</table>

## Copy protection

Roku OS also supports HDCP for content copy protection between the
Roku player's HDMI port and the connected display. However, the HDCP
version depends on the Roku Model and the Display Type that it's
currently set to.

|      | Roku 4K capable devices | All other Roku devices |
| ---- | ----------------------- | ---------------------- |
| TEE  | Yes                     | No                     |
| HDCP | 2.2 <sup>1</sup>        | 1.4                    |

> <sup>1</sup> 4K devices set to a Display Type with a resolution
> smaller than 4K will default to HDCP 1.4.
>
> HDCP versioning can be queried
> using [ifHdmiStatus.getHDCPVersion()](doc:ifhdmistatus##gethdcpversion-as-string).
