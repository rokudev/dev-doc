---
title: "HLS and DASH"
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

# HLS and DASH

> Roku recommends that ad-supported apps employing [Server-Side Ad Insertion (SSAI)](/docs/developer-program/advertising/ssai-adapters.md) use *only* HLS or DASH "standard" thumbnails, as an incompatibility in the BIF-support mechanism can cause thumbnails and video to fall out of synch during SSAI operation. Developers should convert existing apps that use BIF and SSAI to use "standard" thumbnails instead, at the earliest opportunity.

As an alternative to the Roku proprietary BIF file format, Roku SceneGraph
supports (since OS version 9.3) the use of DASH and HLS thumbnail approaches for trick mode playback.
For developers who have already prepared thumbnail tiles for their content
(in order to offer trick mode functions on other streaming platforms, for instance),
this feature can save significant time and effort, during content migration to the Roku platform.
> Developers who want to create standard-thumbnail files
> can find instructions for doing so [here](#standard-thumbnail-file-creation).

## DASH considerations

### DASH-standard thumbnail tiles

The DASH Industry Forum describes standard thumbnail tiles in ["Guidelines for Implementation: DASH-IF Interoperability Points" (Version 4.3: November, 2018 ](https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf)– we refer to this publication as "DASH Interop Guidelines"). The tiles themselves (graphics files containing collections of thumbnail images arranged in an htiles x vtiles grid) are described in Section 6.2.6, and can be cited in MPD manifest files, in conjunction with `@contentType="image"` in Adaptation Sets.

> Roku's support for the DASH-IF is comprehensive, but not complete. For a list of known discrepancies between the full DASH standard and Roku's support for it, see [Roku OS support for DASH-IF](/docs/specs/media/dash-if.md).

> As specified in Section 6.2.6 of the DASH Interop Guidelines, the maximum tile width or height pixel limit is 1080 for high-end devices and 720 for low-end devices. Developers are cautioned to use the *minimum* dimensions necessary to retain the desired image quality. Roku will scale thumbnail images as necessary. Practical experience suggests that an original thumbnail image width at or near 308 pixels provides an optimal balance of performance vs. image quality in typical situations where scaling is employed.

### DASH manifest example

```
<MPD mediaPresentationDuration="PT634.566S" minBufferTime="PT2.00S" profiles="urn:hbbtv:dash:profile:isoff-live:2012,urn:mpeg:dash:profile:isoff-live:2011" type="static" xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 DASH-MPD.xsd">
 <BaseURL>.</BaseURL>
 <Period>
  <AdaptationSet id="1" mimeType="video/mp4" contentType="video" subsegmentAlignment="true" subsegmentStartsWithSAP="1" par="16:9">
   <SegmentTemplate duration="120" timescale="30" media="$RepresentationID$/$RepresentationID$_$Number$.m4v" startNumber="1" initialization="$RepresentationID$/$RepresentationID$_0.m4v"/>
   <Representation id="bbb_30fps_1024x576_2500k" codecs="avc1.64001f" bandwidth="3134488" width="1024" height="576" frameRate="30" sar="1:1" scanType="progressive"/>
   <Representation id="bbb_30fps_640x360_800k" codecs="avc1.64001e" bandwidth="1013310" width="640" height="360" frameRate="30" sar="1:1" scanType="progressive"/>
  </AdaptationSet>
  <AdaptationSet id="2" mimeType="audio/mp4" contentType="audio" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
   <Accessibility schemeIdUri="urn:tva:metadata:cs:AudioPurposeCS:2007" value="6"/>
   <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
   <SegmentTemplate duration="192512" timescale="48000" media="$RepresentationID$/$RepresentationID$_$Number$.m4a" startNumber="1" initialization="$RepresentationID$/$RepresentationID$_0.m4a"/>
   <Representation id="bbb_a64k" codecs="mp4a.40.5" bandwidth="67071" audioSamplingRate="48000">
    <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
   </Representation>
  </AdaptationSet>

  <AdaptationSet id="3" mimeType="image/jpeg" contentType="image">
    <SegmentTemplate media="$RepresentationID$/tile_$Number$.jpg" duration="100" startNumber="1"/>
      <Representation bandwidth="24000" id="thumbnails_256x144" width="2048" height="1024">
        <EssentialProperty schemeIdUri="http://dashif.org/guidelines/thumbnail_tile" value="5x2"/>
      </Representation>
  </AdaptationSet>

 </Period>
 </MPD>
```

## HLS considerations

### Image media playlists for HLS

In HTTP Live Streaming (HLS), the traditional I-Frame playlist provides a sparse track of video frames for a client to use during trick-play and seek operations. The format currently specified by HLS is a coded video I-frame. This approach is efficient because it references frame data directly from the video stream and has the added benefit of supporting digital rights management. However, additional video decoding resources are required to process these I-frames for display, which can be problematic in some cases. To make these images more accessible on a wider range of client devices, Roku supports a second playlist format, which it developed in collaboration with Disney and WarnerMedia. This alternative format uses image files that have been compressed (usually via commonly-employed encoding schemes, e.g., JPEG). It extends the standard RFC 8216-bis – HTTP Live Streaming 2nd Edition, draft-pantos-hlsrfc8216bis- 04 (https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04). Many questions about the meaning and usage of the format elements can be answered by consulting the standard.

The alternative format adds the following tags to master playlists and image media playlists, respectively:

### Tag for master playlist

#### EXT-X-IMAGE-STREAM-INF

The EXT-X-IMAGE-STREAM-INF tag identifies an Image Media Playlist file containing Images in a compressed graphic image format. It stands alone, in that it does not apply to a particular URI in the Master Playlist.

##### Format:

\#EXT-X-IMAGE-STREAM-INF:\<attribute-list\>

##### Attributes:

> All attributes defined for the EXT-X-I-FRAME-STREAM-INF tag are also defined for the EXT-XIMAGE-STREAM-INF tag, except for HDCP-LEVEL and VIDEO-RANGE, which are not applicable.

| Name       | Required? | Description/Notes                                            | Example                                                      |
| :--------- | :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| URI        | REQUIRED  | The URI attribute value of EXT-X-IMAGE-STREAM-INF is a quoted-string containing a resource URI that identifies the Image Media Playlist file. That Playlist file MUST contain an EXT-XIMAGES-ONLY tag. | `"hd-tn.m3u8"``"640x360_5x4/640x360_5x4.m3u8"`               |
| BANDWIDTH  | REQUIRED  |The value is a decimal-integer of bits per second. It represents the peak segment bit rate of the Variant Stream. If all the Media Segments in a Variant Stream have already been created, the BANDWIDTH value MUST be the largest sum of peak segment bit rates that is produced by any playable combination of Renditions.  (For a Variant Stream with a single Media Playlist, this is just the peak segment bit rate of that Media Playlist.) An inaccurate value can cause playback stalls or prevent clients from playing the variant. If the Master Playlist is to be made available before all Media Segments in the presentation have been encoded, the BANDWIDTH value SHOULD be the BANDWIDTH value of a representative period of similar content, encoded using the same settings. | `BANDWIDTH=29729`                                            |
| CODECS     | REQUIRED  | A quoted-string containing a comma-separated list of compressed graphic image formats present in the Image Media Playlist. Clients MUST ignore EXT-X-IMAGE-STREAM-INF tags that include unsupported CODECS attribute values. | `"jpeg``" `(if the Media Playlist file references JPEG images)`"ac-3,mp4a.40.2"`See https://tools.ietf.org/html/rfc6381 for a formal, detailed description of this attribute. |
| RESOLUTION | REQUIRED  | declares a Target Resolution for the Image Media Playlist, to assist clients with Playlist selection. The resolution of Images referenced in an Image Media Playlist MUST NOT exceed the respective horizontal or vertical pixel dimension specified by RESOLUTION; otherwise, display errors can occur. When using the EXT-X-TILES tag in the Image Media Playlist, Target Resolution refers to the size of individual Image Tiles in the Grid. | `RESOLUTION=240×135`                                         |
| VIDEO      | OPTIONAL  | The provisions in HLS Section 4.3.4.2.1 also apply to EXT-X-IMAGE-STREAM-INF tags with a VIDEO attribute. A Master Playlist that specifies alternative VIDEO Renditions and Image Media Playlists SHOULD include an alternative Image VIDEO Rendition for each regular VIDEO Rendition, with the same NAME and LANGUAGE attributes. |                                                              |

### Tags for image media playlist

#### EXT-X-IMAGES-ONLY

The EXT-X-IMAGES-ONLY tag indicates that each resource URI in an Image Media Playlist is an Image Resource. By default, each Image Resource describes a single Image in a compressed graphic image format. If an Image Archive tag is present in the Playlist, the next Image Resource MAY contain multiple Images and require additional information for timing and display. Therefore, the client MUST use processing logic specific to the Image Archive type to ensure proper display.

The EXT-X-IMAGES-ONLY tag applies to the entire Image Media Playlist.

##### Format:

\#EXT-X-IMAGES-ONLY

In a Playlist with the EXT-X-IMAGES-ONLY tag, the duration (EXTINF tag value) is the time between the presentation time of the Image Resource and the presentation time of the next Image Resource in the Playlist, or the end of the presentation if it is the last Image Resource in the Playlist. If the calculated duration of an Image Archive is greater than the EXTINF duration in the Playlist, the client MUST enforce the EXTINF Playlist duration and ignore Images that extend beyond the boundary.

When Image Media Playlists are present, all Media Playlists (audio, video, image, etc.) MUST contain synchronized EXT-X-DISCONTINUITY tags. In the case of a Live presentation, all Media Playlists MUST also contain synchronized EXT-X-PROGRAM-DATE-TIME and EXT-XDISCONTINUITY-SEQUENCE tags.

The requirement for declaring EXT-X-TARGETDURATION with a value greater-than or equal-to the largest EXTINF value in an Image Media Playlist MAY be ignored.

If an Image Resource is unavailable for the presentation, a placeholder Image Resource with an EXT-X-GAP tag and an EXTINF tag with appropriate duration SHOULD be used to signal the missing Image and preserve track alignment. The presence of an EXT-X-GAP tag on an Image Resource SHOULD NOT cause a client to look for another Variant Stream.

The File Signature (magic number) of an Image Resource, including Images referenced using EXT-X-BYTERANGE, MUST be a valid expected value for at least one entry in the CODECS attribute of the EXT-X-IMAGE-STREAM-INF tag referencing the Image Media Playlist. For example, the expected File Signature of a JPEG Image is 0xFFD8.

#### EXT-X-TILES

The EXT-X-TILES tag indicates the Image Resource is an Image Archive that contains one or more Images arranged in a Grid. A client processing the EXT-X-TILES tag MUST be capable of displaying individual Image Tiles using the Grid Sequence and Timing Model.

##### Format:

\#EXT-X-TILES:\<attributes\>



Attributes:

| Name       | Required? | Description/Notes                                            | Example              |
| :--------- | :-------- | :----------------------------------------------------------- | :------------------- |
| RESOLUTION | REQUIRED  | The value is a decimal-resolution describing the pixel dimensions of a single Image in the Grid. | `RESOLUTION=320x180` |
| LAYOUT     | REQUIRED  | The value is a grid-item-dimension consisting of two positive decimal integers in the format: column-x-row (“4x3”). It describes the arrangement of Images in a Grid. The minimum valid LAYOUT is “1x1”. The maximum valid LAYOUT will depend on RESOLUTION and the maximum valid pixel dimensions allowed by the compressed graphic image format. | `LAYOUT=5x4`         |
| DURATION   | REQUIRED  | The value is a decimal-floating-point or decimal-integer number of seconds indicating the display duration of a single Image Tile. | `DURATION=3.003`     |

The Time Remaining for an Image Resource is the EXTINF duration minus the Total Elapsed Time of the Image Archive. Tiles are selected from the Grid in a specific Sequence starting top-left, moving left-to-right and top-to-bottom, following the Grid Layout. Each Tile from the Sequence is displayed for DURATION seconds or Time Remaining seconds, whichever is less. If Time Remaining is greater than zero when the Sequence completes, the last Image is displayed until Time Remaining is zero.

> Experimental results suggest that durations of around 10 seconds offer good performance vs. viewer convenience. As a general rule, the duration of each thumbnail should be be as long as the I-Frame, which it represents.

## Standard-thumbnail file creation

Roku has developed resources for producing standard-thumbnail tile files and playlists for HLS. This section describes those resources and their use.

### Mac prerequisites and installation

The following utility applications are needed:

- ffmpeg: version 4.2.2
- ImageMagick 7.0.10-7 Q16 x86_64 2020-04-20, montage utility

### Linux (Centos 7) prerequisites and installation

The following utility applications are needed:

- ffmpeg: version 2.8.15
- ImageMagick 6.9.10-68 Q16 x86_64 2020-04-01, montage utility

### Mac and Linux usage

Three Roku-provided scripts each do one task to build playlists.

1. `gen_thumbs.sh`: uses ffmpeg to generate thumbnails from a stream `.mp4` or `.m3u8`, this script uses very simple ffmpeg options to generate thumbnails at fixed intervals.
2. `gen_tiles.sh`: uses thumbnails generated in `gen_thumbs.sh`, and "assembles" them into a tile using the montage command from ImageMagick, e.g. 5x4 tiles.
3. `gen_playlist.sh`: uses the tiles generated in `gen_tiles.sh` and outputs the thumbnail playlist, the output thumbnail playlist has to entered into the master playlist.

All three scripts must be run in sequence, which the `run_scripts_hls.sh` file does.

The following command generates 320x180 thumbnails and 5x4 tiles with 10 second intervals:

```
$ ./run_scripts_hls.sh master.m3u8 thumb-tile 320x180 5 4 10
```

Here is a command that generates 640x360 thumbnails and 5x4 tiles with 10 seconds intervals:

```
$ ./run_scripts_hls.sh master.m3u8 thumb-tile 640x360 5 4 10
```

Finally, the playlists generated by the two `run_scripts` commands should be entered into the master playlist, as so:

```
#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=16460,RESOLUTION=320x180,CODECS="jpeg",URI="5x4_320x180/320x180-5x4.m3u8"
#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=32920,RESOLUTION=640x360,CODECS="jpeg",URI="5x4_640x360/640x360-5x4.m3u8"
```

> All the materials mentioned in this article are available on GitHub, [here](https://github.com/rokudev/samples/tree/master/media/TrickPlayThumbnailsHLS).

## Standard-thumbnail file creation for DASH

Roku has also developed resources for producing standard-thumbnail tile files and playlists for DASH. This section describes those resources and their use.

### Mac prerequisites and installation

The following utility applications are needed:

- [ffmpeg: version 4.3.1-skyzyx](https://github.com/homebrew-ffmpeg/homebrew-ffmpeg)

  > This is a special version of ffmpeg that specifically supports DASH.

- ImageMagick 7.0.10-7 Q16 x86_64 2020-04-20, montage utility

- python v3.8.5 (optional)

### Linux (Ubuntu 20.04) prerequisites and installation

The following utility applications are needed:

- ffmpeg: version 4.2.4-1ubuntu0.1
- ImageMagick 6.9.10-23 Q16 x86_64 20190101, montage utility

### Mac and Linux usage

Three Roku-provided scripts each do one task to build playlists.

1. `gen_thumbs.sh`: uses ffmpeg to generate thumbnails from a stream .mp4 or .mpd, this script uses very simple ffmpeg options to generate thumbnails at fixed intervals
2. `gen_tiles.sh`: uses thumbnails generated in gen_thumbs.sh, and "assembles" them into a tile using the montage command from ImageMagick, e.g. 5x2 tiles
3. `gen_manifest.sh`: uses the tiles generated in gen_tiles.sh and outputs an image/thumbnail manifest snippet to be entered into the master DASH manifest.

All three scripts must be run in sequence, a process that is automated by the `run_scripts_dash.sh` file.

The following command generates 256x144 thumbnails and 5x2 tiles with 10-second intervals.

```
$ ./run_scripts_dash.sh master.mpd tile 256x144 5 2 10
```

After the thumbnails manifest snippet(s) are generated, they should be entered into the master manifest, as in the example below:

```
<AdaptationSet id="3" mimeType="image/jpeg" contentType="image">
    <SegmentTemplate media="$RepresentationID$/tile_$Number$.jpg" duration="100" startNumber="1"/>
      <Representation bandwidth="24000" id="thumbnails_256x144" width="2048" height="1024">
        <EssentialProperty schemeIdUri="http://dashif.org/guidelines/thumbnail_tile" value="5x2"/>
      </Representation>
</AdaptationSet>
```

> All the materials mentioned in this section are available on GitHub, [here](https://github.com/rokudev/samples/tree/master/media/TrickPlayThumbnailsDASH).

### Example Playlists

#### Master playlist sample 1

```
#EXTM3U
#EXT-X-VERSION:7
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="aac",NAME="English",LANGUAGE="en",AUTOSELECT=YES,\
DEFAULT=YES,URI="layer8.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=1499000,RESOLUTION=640x360,AUDIO="aac",\
CODECS="avc1.4d401e,mp4a.40.2"
layer1.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2885000,RESOLUTION=960x540,AUDIO="aac",\
CODECS="avc1.4d401f,mp4a.40.2"
layer2.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3964000,RESOLUTION=1280x720,AUDIO="aac",\
CODECS="avc1.4d401f,mp4a.40.2"
layer3.m3u8

#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=129010,RESOLUTION=640x360,CODECS="avc1.4d401e",\
URI="layer1-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=239655,RESOLUTION=960x540,CODECS="avc1.4d401f",\
URI="layer2-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=352167,RESOLUTION=1280x720,CODECS="avc1.4d401f",\
URI="layer3-iframe.m3u8"

#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=16460,RESOLUTION=240×135,CODECS="jpeg",\
URI="sd-tn.m3u8"
#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=29729,RESOLUTION=640×360,CODECS="jpeg",\
URI="hd-tn.m3u8"
```

#### Master playlist sample 2

```
#EXTM3U
#EXT-X-VERSION:5
#EXT-X-INDEPENDENT-SEGMENTS

#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="aac",NAME="English",LANGUAGE="en",AUTOSELECT=YES,DEFAULT=YES,URI="layer8/layer8_cl_0.m3u8"

#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=283000,AVERAGE-BANDWIDTH=267000,RESOLUTION=416x234,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d400d,mp4a.40.2",AUDIO="aac"
layer0/layer0_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=501000,AVERAGE-BANDWIDTH=465000,RESOLUTION=416x234,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d400d,mp4a.40.2",AUDIO="aac"
layer1/layer1_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=935000,AVERAGE-BANDWIDTH=859000,RESOLUTION=640x360,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401e,mp4a.40.2",AUDIO="aac"
layer2/layer2_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=1500000,AVERAGE-BANDWIDTH=1352000,RESOLUTION=640x360,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401e,mp4a.40.2",AUDIO="aac"
layer3/layer3_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=2047000,AVERAGE-BANDWIDTH=1842000,RESOLUTION=852x480,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f,mp4a.40.2",AUDIO="aac"
layer4/layer4_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=2891000,AVERAGE-BANDWIDTH=2597000,RESOLUTION=960x540,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f,mp4a.40.2",AUDIO="aac"
layer5/layer5_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=3971000,AVERAGE-BANDWIDTH=3577000,RESOLUTION=1280x720,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f,mp4a.40.2",AUDIO="aac"
layer6/layer6_cl.m3u8
#EXT-X-STREAM-INF:FRAME-RATE=29.970,BANDWIDTH=5594000,AVERAGE-BANDWIDTH=5043000,RESOLUTION=1920x1080,CLOSED-CAPTIONS="cc1",CODECS="avc1.640028,mp4a.40.2",AUDIO="aac"
layer7/layer7_cl.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=129000,AVERAGE-BANDWIDTH=129000,CLOSED-CAPTIONS="cc1",CODECS="mp4a.40.2",AUDIO="aac"
layer8/layer8_cl_0.m3u8


#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=40000,RESOLUTION=320x180,CODECS="jpeg",URI="320x180_5x4/320x180_5x4.m3u8"
#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=80000,RESOLUTION=640x360,CODECS="jpeg",URI="640x360_5x4/640x360_5x4.m3u8"
#EXT-X-IMAGE-STREAM-INF:BANDWIDTH=160000,RESOLUTION=960x540,CODECS="jpeg",URI="960x540_5x4/960x540_5x4.m3u8"

#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=49759,AVERAGE-BANDWIDTH=17947,RESOLUTION=416x234,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d400d",URI="layer1/layer1_cl-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=127115,AVERAGE-BANDWIDTH=46261,RESOLUTION=640x360,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401e",URI="layer3/layer3_cl-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=197846,AVERAGE-BANDWIDTH=67625,RESOLUTION=852x480,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f",URI="layer4/layer4_cl-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=234179,AVERAGE-BANDWIDTH=83870,RESOLUTION=960x540,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f",URI="layer5/layer5_cl-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=355410,AVERAGE-BANDWIDTH=122589,RESOLUTION=1280x720,CLOSED-CAPTIONS="cc1",CODECS="avc1.4d401f",URI="layer6/layer6_cl-iframe.m3u8"
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=506175,AVERAGE-BANDWIDTH=162353,RESOLUTION=1920x1080,CLOSED-CAPTIONS="cc1",CODECS="avc1.640028",URI="layer7/layer7_cl-iframe.m3u8"

#EXT-X-MEDIA:TYPE=CLOSED-CAPTIONS,GROUP-ID="cc1",LANGUAGE="en",NAME="English",DEFAULT=YES,AUTOSELECT=YES,INSTREAM-ID="CC1"
```

#### VOD image media playlist sample 1a

```
#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-IMAGES-ONLY

#EXTINF:6.006,
preroll-ad-1.jpg
#EXTINF:6.006,
preroll-ad-2.jpg
#EXTINF:3.003,
preroll-ad-3.jpg

#EXT-X-DISCONTINUITY

#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-0.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-1.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-2.jpg

. . .

#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-8.jpg
#EXTINF:54.054,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-9.jpg

#EXT-X-DISCONTINUITY

#EXTINF:6.006,
midroll-ad-1.jpg
#EXTINF:6.006,
midroll-ad-2.jpg
#EXTINF:3.003,
midroll-ad-3.jpg

#EXT-X-DISCONTINUITY

#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-10.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-11.jpg

. . .

#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x2,DURATION=6.006
content-39.jpg

#EXT-X-ENDLIST
```

#### VOD image media playlist sample 1b

```
#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-IMAGES-ONLY

# ~~ promo ~~

#EXTINF:6.006,
promo_1.jpg
#EXTINF:6.006,
promo_2.jpg
#EXTINF:3.003,
promo_3.jpg

#EXT-X-DISCONTINUITY

# ~~ movie ~~

#EXTINF:24.024,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
movie_001.jpg
#EXTINF:24.024,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
movie_002.jpg
#EXTINF:24.024,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
movie_003.jpg

. . .

#EXTINF:24.024,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
movie_275.jpg

#EXT-X-DISCONTINUITY

# ~~ translation credits ~~

#EXTINF:24.024,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
credits_2_0.jpg
#EXTINF:6.006,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=4x3,DURATION=2.002
credits_2_1.jpg

#EXT-X-ENDLIST
```

#### VOD image media playlist sample 2a

```
#EXTM3U
#EXT-X-TARGETDURATION:60
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-IMAGES-ONLY
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
0.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
1.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
2.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
3.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
4.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
5.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
6.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
7.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
8.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
9.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
10.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
11.jpg
#EXTINF:15.015,
#EXT-X-TILES:RESOLUTION=320x180,LAYOUT=5x4,DURATION=3.003
12.jpg
#EXT-X-ENDLIST
```

#### VOD image media playlist sample 2b

```
#EXTM3U
#EXT-X-TARGETDURATION:60
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-IMAGES-ONLY
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
0.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
1.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
2.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
3.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
4.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
5.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
6.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
7.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
8.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
9.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
10.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
11.jpg
#EXTINF:15.015,
#EXT-X-TILES:RESOLUTION=640x360,LAYOUT=5x4,DURATION=3.003
12.jpg
#EXT-X-ENDLIST
```

#### VOD image media playlist sample 2c

```
#EXTM3U
#EXT-X-TARGETDURATION:60
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-IMAGES-ONLY
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
0.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
1.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
2.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
3.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
4.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
5.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
6.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
7.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
8.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
9.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
10.jpg
#EXTINF:60.060,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
11.jpg
#EXTINF:15.015,
#EXT-X-TILES:RESOLUTION=960x540,LAYOUT=5x4,DURATION=3.003
12.jpg
#EXT-X-ENDLIST
```

#### Live image media playlist sample 1

```
#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:127228
#EXT-X-IMAGES-ONLY
#EXT-X-DISCONTINUITY-SEQUENCE:5

#EXT-X-PROGRAM-DATE-TIME:2019-04-17T19:28:12.046Z
#EXTINF:6.006,
content-123.jpg
#EXTINF:6.006,
content-124.jpg
#EXTINF:6.006,
content-125.jpg

#EXT-X-DISCONTINUITY

#EXT-X-PROGRAM-DATE-TIME:2019-04-17T19:28:30.064Z
#EXT-X-GAP
#EXTINF:6.006,
missing-midroll.jpg
#EXT-X-GAP
#EXTINF:6.006,
missing-midroll.jpg
#EXT-X-GAP
#EXTINF:3.003, missing-midroll.jpg

#EXT-X-DISCONTINUITY

#EXT-X-PROGRAM-DATE-TIME:2019-04-17T19:28:45.079Z
#EXTINF:6.006,
content-128.jpg
#EXTINF:6.006,
content-129.jpg
#EXTINF:6.006,
content-130.jpg
#EXTINF:6.006,
content-131.jpg
```

#### ASSOC-LANGUAGE audio rendition attribute

As of Roku OS 10.0, the HLS **ASSOC-LANGUAGE** audio rendition attribute is supported. This optional attribute is used, for example, to specify that a particular rendition's audio, provided in a given spoken language dialect, is represented in forced subtitles by a different but associated language.

In the following example manifest, Cantonese audio (language=yue) should use Traditional Chinese (LANGUAGE=zh_HANT) forced subtitles. This is indicated by an ASSOC-LANGUAGE=zh_HANT on the audio track.

```
#EXTM3U
#EXT-X-INDEPENDENT-SEGMENTS

#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="aac-96k",NAME="English",LANGUAGE="en",DEFAULT=YES,AUTOSELECT=YES,URI="aac_96k/vod.m3u8"
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="aac-96k",NAME="Cantonese (粵語)",LANGUAGE="yue",ASSOC-LANGUAGE="zh-HANT",DEFAULT=NO,AUTOSELECT=YES,URI="aac_96k/vod.m3u8"

#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="zh-ZANT--forced--",LANGUAGE="zh-HANT",DEFAULT=YES,FORCED=YES,URI="vtt-can/vod.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="繁體中文 [CC]",LANGUAGE="zh-HANT",DEFAULT=YES,FORCED=NO,CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog,public.accessibility.describes-music-and-sound",URI="vtt-can/vod.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=3520820,AVERAGE-BANDWIDTH=2515571,CODECS="mp4a.40.2,avc1.4d4020",RESOLUTION=960x408,AUDIO="aac-96k",SUBTITLES="subs"
2500k/vod.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=4803229,AVERAGE-BANDWIDTH=3510860,CODECS="mp4a.40.2,avc1.640028",RESOLUTION=1280x544,AUDIO="aac-96k",SUBTITLES="subs"
3500k/vod.m3u8

#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=218215,CODECS="avc1.4d4020",RESOLUTION=960x408,URI="2500k/vod-iframe.m3u8"
```

## Sample app

You can [download and install a sample app](https://github.com/rokudev/samples) that demonstrates how to produce standard thumbnail tile files and playlists for [DASH](https://github.com/rokudev/samples/tree/master/media/TrickPlayThumbnailsDASH) and [HLS](https://github.com/rokudev/samples/tree/master/media/TrickPlayThumbnailsDASH).