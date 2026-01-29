---
title: Roku OS support for DASH-IF
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
The support for DASH-IF in Roku OS is based on ["Guidelines for Implementation: DASH-IF Interoperability Points" (Version 4.3: November, 2018](https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf) – we refer to this publication as "DASH Interop Guidelines," and the specific interoperability points as IOPs). While extensive, Roku's support for this comprehensive specification is not yet complete. This article covers known discrepancies between the full DASH standard and Roku's support for it in the runtime content player and other facilities. Discrepancies will be added to this list as they are discovered; developers should alert Roku to any discrepancies not mentioned here, so that proper attention can be paid to them, toward the goal of improving Roku's support for the DASH standard.

| IOP     | IOP Name                                         | Issue                                                                                                                                                                                                                     | Workaround/disposition                                                                    |
| :------ | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| IOP     | IOP Name                                         | Issue                                                                                                                                                                                                                     | Workaround/disposition                                                                    |
| 3.2.2.1 | Definition according to ISO/IEC 23009-1          | "Representations with @mimeType attribute application/xml+ttml shall not be ignored" is not supported.                                                                                                                    | Unsupported                                                                               |
| 3.2.2.1 | Definition according to ISO/IEC 23009-1          | "Representation elements with a @subsegmentStartsWithSAP value set to 3 may be ignored," are not properly ignored.                                                                                                        | Unsupported                                                                               |
| 3.2.2.1 | Definition according to ISO/IEC 23009-1          | "Representation elements with a @startsWithSAP value set to 3 may be ignored," are not properly ignored.                                                                                                                  | Unsupported                                                                               |
| 3.2.4   | Presence of Attributes and Elements              | Roku does not use the @audioSamplingRate attribute or the AudioChannelConfiguration element.                                                                                                                              | Unsupported                                                                               |
| 3.2.10  | Adaptation Set Constraints                       | Roku assumes bitstreamSwitching is always true. The player reads the initialization segment once for each Representation and doesn't re-read the initialization segment.                                                  |                                                                                           |
| 3.2.10  | Adaptation Set Constraints                       | Roku can switch between Representations that use different @timescale values.                                                                                                                                             |                                                                                           |
| 3.3.3   | Seamless switching                               | Roku does not support seamless switching across Representations.                                                                                                                                                          | Unsupported                                                                               |
| 3.9.2   | Adaptation Set Labeling Options for Selection    | Accessibility attribute not used in audio selection and should be.Accessibility_description and Accessibility_enhanced do not work, and should.                                                                           | To be addressed in future OS release                                                      |
| 3.9.2   | Adaptation Set Labeling Options for Selection    | Role_commentary does not work and should.                                                                                                                                                                                 | To be addressed in future OS release                                                      |
| 3.9.4.  | Alternative or Associated Content Signalling     | None.                                                                                                                                                                                                                     | Unsupported                                                                               |
| 3.9.5.1 | Client Processing Reference Model/Introduction   | The DASH client is supposed to look for main content, i.e. any Adaptation Set with annotation Role@schemeIdURI="urn:mpeg:dash:role:2011" and Role@value="alternative" is supposed to be excluded initially for selection. | Unsupported                                                                               |
| 6.2.6   | Tiles of thumbnail images                        | The maximum tile width or height pixel limit is 1080 for high-end devices and 720 for low-end devices, instead of 64K.                                                                                                    | Hardware limit. Make sure at least one tileset is within these limits to show thumbnails. |
| 6.2.6   | Tiles of thumbnail images                        | No support yet for **live** DASH thumbnails.                                                                                                                                                                              | To be addressed in future OS release                                                      |
| 6.2.6   | Tiles of thumbnail images                        | Recommend against use of presentationTimeOffset.                                                                                                                                                                          | To be addressed in future OS release                                                      |
| 6.4.5   | Guidelines for side-loaded TTML and WebVTT Files | Caption/subtitle tracks for livestreams must be in ISO BMFF containers; Roku player is incompatible with mp4 containers (child-format of BMFF). Player seems to accept the tracks, but not render them on-screen.         | To be addressed in future OS release                                                      |

## Updates

### UTCTiming

As of Roku OS 10.0, the Roku OS supports the use of **UTCTiming** elements in DASH MPDs (manifests), as described in Section 4.7.2 of ["Guidelines for Implementation: DASH-IF Interoperability Points" (Version 4.3: November, 2018](https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf). A **UTCTiming** element declares a mechanism that the player can use to keep its clock in synchronization with that of the streaming server. Here is an example:

```
<UTCTiming schemeIDUri=“ urn:mpeg:dash:utc:ntp:2014” value=“time.nist.gov”/>
```

The `schemeIDUri` parameter indicates the mechanism selected (one of several available options given in Section 4.7.2), while the `value` parameter indicates the standard time source to be employed.

### Initialization segment format for multi-period server-stitched manifests

As of Roku OS 10.5, the Roku OS supports the use of the initialization segment format for server-stitched DASH manifests formatted with multi-periods.

### SegmentTimeline

As of Roku OS 10.5, the Roku OS supports the use of the SegmentTimeline to precisely identify segment availability. This supports the in-progress playback of content while it is being recorded.

Specifically, the Roku OS DASH implementation now supports:

* Initialization element with sourceURL attribute in under SegmentBase element.
* RepresentationIndex element.
* Index segments in a different file than the media segments.
* Index segments from multiple representations in the same file.
* Media segments from multiple representations in the same file.
* Non-standard AudioChannelConfiguration schema: `urn:dolby:dash:audio_channel_configuration:2011`.
