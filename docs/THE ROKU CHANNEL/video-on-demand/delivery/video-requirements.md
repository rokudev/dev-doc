---
title: Video Requirements
excerpt: The following gives an overview of Video requirements
deprecated: false
hidden: true
metadata:
  robots: index
---
1. All video content must be **full program only**:
   1. no bars/tone or slates at program start
   2. no textless video after program end
   3. no more than 2 seconds of black at program start
   4. no more than 2 seconds of black after program end
   5. no FBI warnings or MPAA cards
   6. no promotional material including references to theatrical, home video, or streaming release dates
2. Video files should be semi-textless (also known as "texted with no subtitles" or "textless with main, ends, and graphic text"). Video can include opening and end credit text but all subtitles for foreign dialogue must be removed.
3. Do not include advertisements within the video. All ad insertion points for ad supported content will be provided in the metadata file based on the [Roku Ad Policy guidelines](#ad-policy)
4. Commercial blacks may be included within the video so long as they are no longer than 2 seconds
5. Commercial blacks are acceptable for episodic TV content but not expected for movie content
6. Video files must be delivered as a single, seamless video file
7. Do not deliver hard parted (broken into segments at the ad break points) video files
8. Calls to action (CTAs) or links to external platforms or sites (including QR codes) are not permissible and must be removed from the video prior to delivery to Roku
9. HD video content must be delivered in a 16:9 container
10. Full-Frame presentation (1.78 aspect ratio) is preferred whenever available
11. Letterboxed 16:9 is allowed but should be minimized
12. SD 16:9 content must not be delivered in a 4:3 container with letterboxing
13. High-quality mezzanine level files are preferred with the highest bitrate and highest resolution possible

#### Video frame rate

Roku supports a variety of frame rates and scan types. All video files should be delivered in their original native frame rate and scan type

#### Video resolution

| Type    | Width | Height | Pixel Aspect Ratio              |
| ------- | ----- | ------ | ------------------------------- |
| SD      | 720   | 480    | 4:3 or 16:9 (anamorphic pixels) |
| SD      | 640   | 480    | 1:1 (square pixels)             |
| SD      | 853   | 480    | 1:1 (square pixels)             |
| SD      | 720   | 576    | 4:3 or 16:9 (anamorphic pixels) |
| SD      | 768   | 576    | 1:1 (square pixels)             |
| SD      | 1024  | 576    | 1:1 (square pixels)             |
| HD      | 1280  | 720    | 1:1 (square pixels)             |
| FHD     | 1920  | 1080   | 1:1 (square pixels)             |
| UHD\*\* | 3840  | 2160   | 1:1 (square pixels)             |

_\*\*UHD is supported as an input resolution only. Roku does not currently encode to or display 4K UHD video on Roku Channel_

#### Video formats

| Name          | Codecs                                                                                   | Extension | Bitrate                                              |
| ------------- | ---------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------- |
| Apple® ProRes | ProRes 444 (all profiles)<br />ProRes 4444 (all profiles)<br />ProRes 422 (all profiles) | .mov      | 50 Mbps or greater                                   |
| XDCam         |                                                                                          | .mxf      | 50 Mbps or greater                                   |
| MPEG-2        |                                                                                          | .ts, .mpg | HD = 15Mbps or greater<br />SD = 3.75Mbps or greater |
| MPEG-4        | H.264                                                                                    | .mp4      | 5Mbps or greater                                     |

###
