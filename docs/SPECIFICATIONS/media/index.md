---
title: "Streaming specifications"
excerpt: 'Container formats, codecs, adaptive protocols, and encoding ladders for Roku'
deprecated: false
hidden: false
metadata:
  title: 'Streaming specifications | Roku Developer Docs'
  description: 'Lists supported container formats, adaptive streaming protocols (DASH, HLS, Smooth), video codecs, audio codecs, and encoding guidelines for Roku devices.'
  robots: index
next:
  description: ''
---


Roku supports specific encoding methods and formats for streaming content on Roku devices. The following information details the best options for distributing content based on quality and availability.

## Container Formats

Roku devices support several audio/video container formats. These formats encapsulate one or several tracks into one file and include meta-data about each track:

- Flac
- Ogg with Vorbis audio
- MP3
- MP4, MOV, M4V
  - supported video codecs: AVC, HEVC
  - supported audio codecs: AAC, AC3, EAC3, AC4, ALAC, MP3, PCM
- MKV, WebM
  - supported video codecs: AVC, HEVC, VP9
  - supported audio codecs: AAC, AC3, EAC3, Dolby Atmos, ALAC, DTS, DTSE, FLAC, MP3, OPUS, PCM, VORBIS

**Additional Notes:**

- In case the content includes a video track, it's important to provide multiple container files of the same title with different video quality levels. The player will pick the quality level that matches the current network conditions at the start of playback. The lowest video quality should start around 400 Kbps to avoid buffering.
- Depending on how the tracks are muxed together, it may not be efficient to provide multiple audio or caption tracks. If all tracks are interleaved, the player will end up downloading all audio/caption tracks but only play one.
- Please consider one of the adaptive streaming formats for titles with video tracks. Those formats allow the player to switch quality levels on the fly and avoid buffering in fluctuating network conditions.

## Elementary Stream Formats

Some elementary stream formats can be streamed directly without encapsulating the track inside a container. Roku supports the following elementary format streams:

- AAC with ADTS framing
- AC3, EAC3
- PCM

## Adaptive streaming protocols

Network speeds can vary over time; therefore, it is important to provide multiple
video streams of varying quality to provide the best experience to your viewers is. Roku devices can then automatically select the best streaming quality based on the viewer's network connection.

Roku supports the following widely-used standard formats for adaptive bit rate switching:


<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">DASH</th>
      <th scope="col">HLS</th>
      <th scope="col">Smooth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Audio Codecs</th>
      <td>AAC, DTS, DD, DD+</td>
      <td>AAC, MP3, DTS, DD, DD+</td>
      <td>AAC, MP3, DTS, DD, DD+</td>
    </tr>
    <tr>
      <th scope="row">Video Codecs</th>
      <td>AVC, HEVC</td>
      <td>AVC, HEVC, VP9</td>
      <td>AVC, HEVC</td>
    </tr>
    <tr>
      <th scope="row">Subtitle formats</th>
      <td>TTML, fragmented ISMT<br />TTML, unfragmented TTML text<br />TTML, side-loaded TTML text<br /><br />WebVTT, fragmented WebVTT text<br />WebVTT, unfragmented WebVTT text<br />WebVTT, side-loaded WebVTT text<br /><br />SRT, side-loaded SRT text</td>
      <td>TTML, side-loaded TTML text<br /><br />WebVTT, fragmented WebVTT text<br />WebVTT, unfragmented WebVTT text<br />WebVTT, side-loaded WebVTT text<br /><br />SRT, side-loaded SRT text</td>
      <td>TTML, fragmented ISMT<br />TTML, side-loaded TTML text<br /><br />WebVTT, side-loaded WebVTT text<br /><br />SRT, side-loaded SRT text</td>
    </tr>
    <tr>
      <th scope="row">Audio/video chunk format</th>
      <td>Fragmented MP4, CMAF (muxing audio and video not supported for CMAF)</td>
      <td>video: TS, CMAF (muxing audio and video not supported for CMAF)<br />audio: aac, ac3, eac3</td>
      <td>PIFF</td>
    </tr>
    <tr>
      <th scope="row">DRM</th>
      <td>PlayReady, Widevine</td>
      <td>AES-128, Widevine, Verimatrix</td>
      <td>PlayReady</td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>Dolby Vision, HDR10</td>
      <td>Dolby Vision, HDR10</td>
      <td></td>
    </tr>
  </tbody>
</table>


### Best practices

- Dash and HLS are the preferred formats. These protocols will be the first to receive new features and offer the best playback performance.
- For best performance, the [manifest](doc:channel-manifest) should indicate the resolution and frame rate of each representation. This allows the player to filter out encodings that cannot be played in advance, without the need to fetch the actual media.
- Roku recommends media chunk durations between 4 and 6 seconds for DASH and HLS streams, and 2 seconds for Smooth.
- Caption data can be provided in three different ways:
  - sideloaded as a separate url specified in content metadata.
  - un-fragmented as a single resource with url information embedded in the manifest.
  - fragmented as chunks with url information embedded in the manifest.

#### DASH streams

- All video chunks must start with an IDR frame.
- Chunks of the same media type (audio or video) must be aligned across representations.
- For best video start performance, manifest should specify the DRM system and PSSH.

#### HLS streams

- For best performance, all segments should start with an IDR frame and segments.
- For best performance, all segments of the same media type (audio or video) should be aligned across variants.

#### Playing and seeking to the live edge

For live streams, apps must be a minimum of 30 seconds away from the live edge.

For trickplay of live streams, apps should seek to a position of 999,999 seconds (for both DASH and HLS streams). The Roku media player clips that position to the current availability window and provides a robust buffer.

## Supported video codecs

Videos can be encoded using `H.264`, `HEVC (H.265)`, `VP9`, or `AV1` (DASH only) codecs.



<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">AVC (H.264)</th>
      <th scope="col">HEVC (H.265)[^1]</th>
      <th scope="col">VP9[^2]</th>
      <th scope="col">AV1 (DASH only)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Aspect Ratio 2[^3]</th>
      <td>Various</td>
      <td>Various</td>
      <td>Various</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Dimension</th>
      <td>Various up to 1920x1080</td>
      <td>Various up to 3840x2160</td>
      <td>Various up to 3840x2160</td>
      <td>Various up to 7680 x 4320</td>
    </tr>
    <tr>
      <th scope="row">Input Frame Rate[^4]</th>
      <td>24p, 25p, 30p, 50p, 60p</td>
      <td>24p, 25p, 30p, 50p, 60p</td>
      <td>24p, 25p, 30p, 60p[^6]</td>
      <td>24p,25p,30p,50p,60p</td>
    </tr>
    <tr>
      <th scope="row">Color Space</th>
      <td>Rec.709</td>
      <td>Rec.709, Rec.2020</td>
      <td>Rec.709, Rec.2020</td>
      <td>Rec.709, Rec.2020</td>
    </tr>
    <tr>
      <th scope="row">Profile</th>
      <td>main, high</td>
      <td>main, main 10</td>
      <td>profile 0, profile 2</td>
      <td>main, main 10</td>
    </tr>
    <tr>
      <th scope="row">Level</th>
      <td>4.1, 4.2</td>
      <td>4.1, 5.0, 5.1</td>
      <td></td>
      <td>4.1, 5.0, 5.1</td>
    </tr>
    <tr>
      <th scope="row">Video Mode</th>
      <td>Constrained VBR</td>
      <td>Constrained VBR</td>
      <td>Constrained VBR</td>
      <td>Constrained VBR</td>
    </tr>
    <tr>
      <th scope="row">Video Bitrate</th>
      <td>Up to 10Mbps</td>
      <td>Up to 40Mbps</td>
      <td>Up to 40Mbps</td>
      <td>Up to 40Mbps</td>
    </tr>
    <tr>
      <th scope="row">Peak Video Bit rate</th>
      <td>1.5x average</td>
      <td>1.5x average</td>
      <td>1.5x average</td>
      <td>1.5x average</td>
    </tr>
    <tr>
      <th scope="row">Key Frame Interval [^5]</th>
      <td>&lt; 10s</td>
      <td>&lt; 10s</td>
      <td>&lt; 10s</td>
      <td>&lt; 10s</td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>Dolby Vision: dvav.09</td>
      <td>Dolby Vision: dvhe.05<br />HDR10 (HEVC profile Main 10)<br />HLG</td>
      <td>HDR10</td>
      <td>Dolby Vision<br />HDR10 <br />HDR10+</td>
    </tr>
  </tbody>
</table>


Some decoder and security features are device specific. For details, see [Roku Models and Features](doc:hardware).

[^1]: Only supported on **Roku 4K capable** devices.
[^2]: Only supported on **Roku 4K capable** devices.
[^3]: The dimensions vary on a title-by-title basis depending on the source material and the target aspect ratio for the encoding (such as 4:3 or 16:9). Content should always be encoded at full width, and the height is adjusted. For example, a 1.66 aspect ratio source is encoded as a 720x432 video and displayed as letterboxed for a 4:3 display.
[^4]: All segments should start with an IDR frame and align across all bit rate variants. The recommended segment size is < 10 seconds for VOD and < 5 seconds for live content, and the segment size should be constant.
[^5]: All segments should start with an IDR frame and align across all bit rate variants. The recommended segment size is < 10 seconds for VOD and < 5 seconds for live content, and the segment size should be constant.
[^6]: Only supported on HDR10 capable Roku devices.

## Supported audio codecs

Roku devices support the following audio file types:

  - AAC: HE-AACv2, AAC-LC (CBR)
  - MP3
  - WAV (PCM)
  - AIFF
  - FLAC
  - ALAC
  - Dolby Audio: Dolby Digital (AC3), Dolby Digital Plus (E-AC3)
  - Passthrough: DTS

The most common audio codecs for video content are AAC, AC3, E-AC3, and DTS. It is strongly recommended that content with multichannel audio (i.e., 5.1, 7.1 channels) be made available in Dolby Digital Plus (E-AC3). This is the preferred multichannel format for streaming on Roku's Dolby Digital Plus-enabled devices.


|                    | AAC                   | AC3/E-AC3            | DTS         |
| ------------------ | --------------------- | -------------------- | ----------- |
| Decode/Passthrough | Decode on all devices | Device specific      | Passthrough |
| Sampling Rate      | 44.1 Khz, 48 Khz      | 48 Khz               | Passthrough |
| Sample Size        | 16-bit                | 16-bit               | Passthrough |
| Bit rate           | 32-256 Kbps           | 96-768 Kbps          | Passthrough |
| Number of Channels | 2.0                   | 2.0, 5.1, 7.1, Atmos | Passthrough |

> - Multichannel AAC is not supported on all Roku models. Roku TVs, Roku 4, and Roku Ultra set-top-boxes support multichannel decode to PCM stereo.
> - For AC3 and E-AC3, Roku devices will do passthrough to the receiving device. Roku Ultra streaming players (Benjamin [4800X] and Brewster [4850X] models only) support the latest Dolby technologies such as Dolby Atmos and System Sound Mixing [(MS12)](http://www.dolby.com/us/en/professional/broadcast/products/dolby-ms12.html). The Roku Ultra LT (4800X) does not include Dolby support.
>
>   Apps must always provide an AAC stereo audio track (in addition to the optional Dolby track) that players can use in case the receiving device does not support AC3 or E-AC3 decoding.
> - Encoding in Dolby Digital Plus instead of Dolby Digital is recommended.

## Supported image formats

The following image formats are currently supported. The use of PNG is recommended for UI graphics due to the use of an alpha channel within the UI.

- PNG
- JPG/JPEG
- GIF
- BMP
- [WebP](https://developers.google.com/speed/webp/) (since [Roku OS 9.4](doc:release-notes#roku-os-94))

### Special WebP considerations

Apps must check to be sure that Roku OS is version 9.4 or later before attempting to use WebP images.

SceneGraph [Poster nodes](doc:poster) can now accept URIs that provide WebP images, and those images can optionally have alpha channels for transparency (similar to the PNG approach).

For image assets delivered from a web server (or CDN), conditionally request WebP instead of JPEG/PNG if Roku OS version is first confirmed to be >= 9.4.

Although it is technically possible to bundle WebP image assets with JPEG/PNG assets containing the same images in the package file, doing so will increase the size of the package; best practice for WebP is to restrict its use to assets fetched from the web, while bundling only JPEG/PNG assets within the package file itself. Also, do not use WebP for any artwork that must be specified directly in the manifest, which will preserve compatibility with legacy hardware that cannot run [Roku OS 9.4](doc:release-notes#roku-os-94) or later.

## Encoding guidelines

### AVC 1080p encodings

For typical streaming video applications, we recommend a range of about 400Kbps to about 5.0Mbps. This provides a good balance between quality and support for a wide number of users. For best picture quality, the video bitrates could scale all the way up to 8.0 Mbps, but it's important to keep sufficient low bitrate encodings for users with slow networks. Including a low-quality encoding around 400 Kbps is a must to achieve low rebuffer rates.

> If the content contains a surround sound track, AAC 2-channel stereo must be provided as a backup audio track.

All devices do not support 1080p60 playback; therefore, include a high-quality 720p60 or 1080p24/30 encoding; otherwise, users with these devices may not get a good experience, even under excellent network conditions.

The ideal bitrate ladder is as follows:

| Resolution | Bitrate (kbps) |
| :--------- | :------------- |
| 1920x1080  | 5800           |
| 1920x1080  | 4300           |
| 1280x720   | 3500           |
| 1280x720   | 2750           |
| 720x404    | 1750           |
| 720x404    | 1100           |
| 512x288    | 700            |
| 384x216    | 400            |

The minimum bitrate ladder is as follows:

| Resolution | Bitrate (kbps) |
| :--------- | :------------- |
| 1920x1080  | 4300           |
| 1280x720   | 2650           |
| 720x404    | 1500           |
| 512x288    | 800            |
| 384x216    | 400            |

> In the case of muxed HLS transport streams, video must be present at all bitrates.

### HEVC 4K encodings

Roku recommends HEVC for UHD encodings. Roku 4K devices support HEVC up to level 5.1 and bitrates up to 25Mbps.

UHD encodings should provide the complete bitrate ladder with the same codec. This is because Roku devices do not support seamless codec changes when switching video bitrates.

### Dolby audio features and recommendations

Encoding in Dolby Digital Plus (instead of Dolby Digital) is recommended with the following bit rates:


| Channels          | Bit rate |
| ----------------- | -------- |
| Stereo 2.0        | 96 kbps  |
| Multi-channel 5.1 | 192 kbps |
| Multi-channel 7.1 | 384 kbps |


Developers can encode video content using services like Azure or [Encoding.com](http://Encoding.com). For more information, visit [developer.dolby.com](https://developer.dolby.com/)

### 4K UHD video streaming requirements


| Specification | Requirement |
| ------------- | ----------- |
| HDMI Version  | 2.0         |
| HDCP Version  | 2.2         |

#### Detecting 4K UHD compatibility

There are several conditions that must be checked to see if 4K UHD content can be played:

  - Video output mode must be 2160p
  - HDCP 2.2 must be enabled
  - The device must be able to decode the proper codecs and encoding
    profiles
  - (Optional) Check if the device decrypts within a trusted execution environment (TEE).


```
function CanPlay4K() as Boolean
  dev_info = CreateObject("roDeviceInfo")
  hdmi_status = CreateObject("roHdmiStatus")

  ' Check if the output mode is 2160p
  video_mode = dev_info.GetVideoMode()
  if (Left(video_mode, 5) <> "2160p")
    return false 'output mode is not set to 2160p
  end if

  ' Check if HDCP 2.2 is enabled, skip check for TVs
  if dev_info.GetModelType() = "STB" and hdmi_status.IsHdcpActive("2.2") <> true
      return false 'HDCP version is not 2.2
  end if

  ' Check if the Roku player can decode 4K 60fps HEVC streams or 4K 30fps vp9 streams
  hevc_video = { Codec: "hevc", Profile: "main", Level: "5.1" }
  vp9_video = { Codec: "vp9", Profile: "profile 0" }
  can_decode_hevc = dev_info.CanDecodeVideo(hevc_video)
  can_decode_vp9 = dev_info.CanDecodeVideo(vp9_video)
  if can_decode_hevc.result <> true OR can_decode_vp9.result <> true
    return false 'device cannot decode 4K HEVC AND VP9 streams
  end if

  ' (Optional) Check if the Roku player decrypts inside a TEE
  drm_info = dev_info.GetDrmInfo()
  if Instr(1, drm_info.playready, "tee") = 0
    return false 'device does not decrypt inside TEE
  end if

  return true
end function
```

>  This example returns true only if both 4K HEVC and 4K VP9 decoding is supported. If your 4K UHD content is only encoded in one of these codecs, modify the third conditional statement as necessary.

### HDR10 video streaming requirements

HDR10 playback requires HDMI version 2.0a. HDCP version 2.2, and an HDR10 capable player and display. Apps can check if the Roku device and connected display support HDR10 with **GetDisplayProperties().hdr10** field of the [roDeviceInfo](doc:ifdeviceinfo) component.

```
function canPlayHDR() as Boolean
  dev_info = createObject("roDeviceInfo")
  return dev_info.getDisplayProperties().hdr10
end function
```


This function should only be called after detecting 4K UHD Compatibility.

Adaptive bitrate streams should not have HDR and non-HDR variants in the same manifest.