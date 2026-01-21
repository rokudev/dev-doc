---
title: Ingest specifications
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
Below is a comprehensive list of formatting requirements for partner media assets and metadata, including file templates and delivery guidelines. Roku's ingest platform is fully automated and full compliance with this specification will ensure timely and error-free processing of content for distribution to Roku Channel. Should any changes need to be made to the workflow established during onboarding, please inform a Roku representative as early as possible to arrange for any new testing or configuration. Roku expects content and metadata to be delivered in a manner that was agreed upon during the onboarding and testing phase. Please ensure delivery knowledge is transferred to new personnel in the event that teams are updated or changed.

### MovieLabs

As an alternative to this specification, Roku Channel supports content delivery via MovieLabs specification.

- **MMC and MEC** - Roku Channel MovieLabs service was built on MEC v2.9 and MMC v1.10 as defined on MovieLabs’ site: https://www.movielabs.com/md/
- **EMA avails** - Roku Channel supports the latest version of the [EMA specification](https://movielabs.com/md/avails/) via the xlsx deliverable

Roku prefers MovieLabs deliverables from all Premium Subscription (SVOD) Partners. Please see additional Roku Channel-specific MovieLabs delivery details [here](#movielabs-content-delivery)

## Roku content policies

### Ad policy

Roku will serve up to 8 minutes of advertisements per viewing hour. Roku’s ad policy is subject to change.

#### Ad-supported content on Roku Channel

Roku Channel is looking for ad-supported content that is appropriate for our users and advertisers – for example, Roku Channel does not want ad-supported content that contains excessive nudity or extreme/graphic violence.Please use your best judgement when sharing content. If an asset is questionable, please find an alternative to share. We reserve the right to remove or reject any content that we deem inappropriate.

#### Ad breaks

Ad break timecodes shall be delivered according to the Roku Ad Policy in the adBreak nodes of the movie/episode/clip metadata to trigger ad breaks during playback on the platform. adBreaks should be accurately provided to the millisecond. Please convert any frame rate value to a millisecond equivalent. Providing adBreaks in the ingest metadata is highly recommended and will speed up the QC process. All adBreak data must be supplied as HH:MM:SS.sss (e.g., 01:23:45.678)

##### Movie ad policy

- No adBreaks should be listed during the first 10 minutes of playback
- No pre-roll adBreak should be listed – 00:00:00.000
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 10 minutes between each adBreak
- No adBreaks within 10 minutes of end credits

##### Series episode ad policy

Content length longer than 15 minutes:

- No adBreaks should be listed during the first 5 mins of playback
- No pre-roll adBreak should be listed - 00:00:00
- adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
- There should be no less than 7 mins between each adBreak
- No adBreaks within the last 5 minutes of end credits

### Kids directed content policy

“Kids-Directed Content” is content that either: (i) is directed to children as defined by the applicable law of the jurisdiction in which the content is shown (e.g., [The Children's Online Privacy Protection Act](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa)); or (ii) was made for viewing primarily by children within the jurisdiction in which the content is shown.

- Roku must be made aware of the intent to submit or distribute content that is directed at children
- DO NOT submit or distribute kids directed content without Roku’s express written approval
- When given approval by Roku to submit or distribute content directed at children, all content metadata must include the following:
- For Movie content:
- The `<tag>` “kidsdirected” (all lowercase) must be included as one of the tags for every movie
- A valid MPAA, USA_PR, or TV parental [rating](#rating-values-by-rating-system-and-country) must be included. “UNRATED” and “Not Rated” are not acceptable ratings for kids directed content
- For Episodic Series content:
- The `<tag>` “kidsdirected” (all lowercase) must be included as one of the series and episodic tags for every series and episode
- A valid TV parental [rating](#rating-values-by-rating-system-and-country) must be included. “UNRATED” and “Not Rated” are not acceptable ratings for kids directed content

Please see [here](https://docs.roku.com/published/madeforkids) for more information and guidance on content "made for kids"

### External branding and calls to action (CTAs)

Roku Channel does not allow branding or external URL links/calls to action on key art or within the video and closed captioning. Calls to action are creatives and/or content segments that direct users outside of the Roku Channel ecosystem to consume content on external services. Video must be edited to remove links or directions for users to visit external sites. This includes:

- Brand logos
- Web urls
- QR codes
- Verbally or textually calling viewers to "click", "subscribe", "buy now", "go to", etc

Please contact your Roku representative for more details.

### Music cue sheets

Music cue sheets may be submitted to Roku for content distributed to Roku Channel via the below link:

https://go.roku.com/music-cue-sheet-submission

Please do not submit music cue sheets with the video package deliverables via Aspera. Cue sheets delivered with the video package will be subject to deletion.

## User experience on Roku Channel

Roku augments metadata and artwork that appears in Roku Channel on Roku devices, web browsers, mobile applications, and other off-platform players with data supplied from Gracenote’s database where available. The Gracenote data aids in a unified experience of a title across platforms as well as on the greater Roku ecosystem. Roku will attempt to match all content delivered by our Partners to a corresponding record in Gracenote’s database. *At this time all metadata and artwork that appears on Roku Channel is sourced from Gracenote if that content is found in Gracenote’s database.*

Gracenote leverages "Artwork Personalization" where they supply alternate imagery to diversify title artwork for different users based on several factors (demographics, popularity, etc.); which has led to an increase in user engagement. Gracenote does accept official key art from Partners, but not all users will see official art unless the algorithm serves it to them. Gracenote supplies ~3 unique images, and create alternative versions of artwork sourced from a variety of places (ex. original broadcaster, production studio, creative agency). Gracenote has stated to Roku that all images are under a fair use license, and they apply the same quality standards to Personalized Images as they do to partner supplied Key Art, e.g., no major spoilers, no dark/blurry/grainy images, no violent/suggestive imagery, avoidance of smoking. 

Our systems use a combination of methods to match a title its correct Gracenote record. Partners can aid in the matching to a Gracenote record by providing accurate metadata including:

- Exact title of a series, movie, TV special, or short form video
- Release dates that are accurate to the year the title was originally released on any platform
- Accurate season and episode numbers according to the original release order
- Accurate TMS (Gracenote) IDs by content type
- Content classified as an episode with Gracenote must be delivered as an Episode to Roku
- Content classified as a movie with Gracenote must be delivered as a movie to Roku
- Content classified as a TV Special with Gracenote can be delivered as a movie to Roku

Partners can aid in the curation of their content on Roku Channel by providing Tags with each movie, episode, or clip. Roku Channel editorial team and recommendations engine will utilize the provided Tags and Genres to help surface content on Roku Channel Platform UI. The more tags that are included, the more ways the content can be curated/surfaced to the end user. Please see [Best practices: content tags and metadata](https://developer.roku.com/trc-docs/video-on-demand/content-tags-and-metadata.md) for more details.

## Media asset guidelines

### Video requirements

- All video content must be **full program only**:

- no bars/tone or slates at program start
- no textless video after program end
- no more than 2 seconds of black at program start
- no more than 2 seconds of black after program end


- Video files should be semi-textless (also known as "texted with no subtitles" or "textless with main, ends, and graphic text"). Video can include opening and end credit text but all subtitles for foreign dialogue must be removed.
- Do not include advertisements within the video. All ad insertion points for ad supported content will be provided in the metadata file based on the [Roku Ad Policy guidelines](#ad-policy)
- Commercial blacks may be included within the video so long as they are no longer than 2 seconds
- Commercial blacks are acceptable for episodic TV content but not expected for movie content
- Video files must be delivered as a single, seamless video file
- Do not deliver hard parted (broken into segments at the ad break points) video files
- Calls to action (CTAs) or links to external platforms or sites are not permissible and must be removed from the video prior to delivery to Roku
- HD video content must be delivered in a 16:9 container
- Full-Frame presentation (1.78 aspect ratio) is preferred whenever available
- Letterboxed 16:9 is allowed but should be minimized
- SD 16:9 content must not be delivered in a 4:3 container with letterboxing
- High-quality mezzanine level files are preferred with the highest bitrate and highest resolution possible.

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

*\*\*UHD is supported as an input resolution only. Roku does not currently encode to or display 4K UHD video on Roku Channel*

#### Video formats

<table>
<thead>
<tr>
<th>Name</th>
<th>Codecs</th>
<th>Extension</th>
<th>Bitrate</th>
</tr>
</thead>
<tbody>
<tr>
<td>Apple® ProRes</td>
<td>ProRes 444 (all profiles)<br />ProRes 4444 (all profiles)<br />ProRes 422 (all profiles)</td>
<td>.mov</td>
<td>50 Mbps or greater</td>
</tr>
<tr>
<td>XDCam</td>
<td></td>
<td>.mxf</td>
<td>50 Mbps or greater</td>
</tr>
<tr>
<td>MPEG-2</td>
<td></td>
<td>.ts.mpg</td>
<td>HD = 15Mbps or greaterSD = 3.75Mbps or greater</td>
</tr>
<tr>
<td>MPEG-4</td>
<td>H.264</td>
<td>.mp4</td>
<td>5Mbps or greater</td>
</tr>
</tbody>
</table>

### Audio requirements

*Files must have industry standard audio configurations with all channels clearly labeled for position and language* (depending on file format)

- PCM 16-Bit or 24-Bit 48kHz audio at highest bitrate preferred
- Dolby AC3 Audio is supported

**Roku prefers to receive 5.1 and Stereo audio whenever possible**

| 5.1 Surround + 2.0 Stereo | Channel Label       |
| ------------------------- | ------------------- |
| Channel 1                 | Left Front (L)      |
| Channel 2                 | Right Front (R)     |
| Channel 3                 | Center (C)          |
| Channel 4                 | LFE (Lfe)           |
| Channel 5                 | Left Surround (Ls)  |
| Channel 6                 | Right Surround (Rs) |
| Channel 7                 | Stereo Left (SL)    |
| Channel 8                 | Stereo Right (SR)   |

**5.1 Surround only is acceptable if 5.1 + Stereo is not available**

| 5.1 Surround Only | Channel Label       |
| ----------------- | ------------------- |
| Channel 1         | Left Front (L)      |
| Channel 2         | Right Front (R)     |
| Channel 3         | Center (C)          |
| Channel 4         | LFE (Lfe)           |
| Channel 5         | Left Surround (Ls)  |
| Channel 6         | Right Surround (Rs) |

**Stereo only is acceptable if 5.1 + Stereo and 5.1 Surround only are not available**

| 2.0 Stereo | Channel Label     |
| ---------- | ----------------- |
| Channel 1  | Stereo Left (SL)  |
| Channel 2  | Stereo Right (SR) |

### Secondary audio deliverables

Content delivered with an audio language that is not primary to the territory of distribution must be delivered with an audio dub and/or subtitle file translating the content into that territory’s primary language. Secondary audio tracks may be multiplexed in with the video file deliverable or delivered in a single interleaved sidecar audio file. All secondary audio tracks, whether multiplexed in the video or delivered as an interleaved sidecar file, must be delivered as a full audio mix. Roku does not support dialogue only dub tracks.

#### Sidecar secondary audio

- Sidecar audio must be delivered as a single interleaved file. Roku does not support discrete single-channel files
- Sidecar audio must sync to the video source file delivered to Roku
- Roku supports one sidecar audio dub file per language

Below are the supported sidecar audio formats. Deliver sidecar audio with highest bitrate and sampling rate available.

| Container       | Codecs       | Extension |
| --------------- | ------------ | --------- |
| WAV (preferred) | PCM          | .wav      |
| MPEG-1 Layer 3  | MP3          | .mp3      |
| OGA             | Opus, Vorbis | .ogg      |

#### Descriptive audio

Descriptive audio is an alternate audio track for the visually impaired. The official FCC Audio Description documentation can be found at the below link:

https://www.fcc.gov/audio-description

Roku strongly prefers to receive descriptive audio tracks wherever available. Descriptive audio deliveries will follow the deliverables outlined in the [Secondary Audio Deliverables](#secondary-audio-deliverables) section above 

#### Audio channel layout hints

In the event video files cannot be created to include proper audio channel labels, an audio layout hint must be provided in the metadata for the video files that are delivered. The available hints are defined below.

##### Audio layout hints

| Descriptor         | Definition                                                   |
| ------------------ | ------------------------------------------------------------ |
| stereoOnly         | 2 channel stereo audio only. Can be delivered on a single track or on 2 discrete tracks |
| surroundOnly       | 6 channel 5.1 surround audio only. Can be delivered on a single track or on 6 discrete tracks |
| stereoPlusSurround | 8 channel audio with stereo on channels 1 and 2 followed by 5.1 surround on channels 3 through 8 |
| surroundPlusStereo | 8 channel audio with 5.1 on channels 1 through 6 followed by stereo on channels 7 and 8 |

### Closed captions

Roku prefers to receive closed captioning for all content to provide the best user experience possible.

For content intended for the US, Roku adheres to FCC closed captioning rules regarding Internet Video Programming. Those rules can be found at the below link:

https://www.fcc.gov/consumers/guides/captioning-internet-video-programming

All content required by the FCC to have closed captioning must be delivered to Roku with closed captions and those captions must be conformed and synced to program. For content that is exempt from the closed caption requirement per FCC rules, a valid exemption code number must be included in the metadata. Allowable exemption code numbers and their definitions:

1 - The content has never aired on television in the United States.
2 - The content has only aired on television in the United States without captions.
3 - The content has not aired on television in the United States with captions since September 30, 2012.
4 - The content does not consist of full-length video programming.
5 - The content does not fall within a category of online programming that requires captions under FCC regulations (49 C.F.R. § 79.4(b)).
6 - The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.

For content intended for territories outside of the US, Roku will adhere to the requirements in that territory.

Captions may be provided in one of two ways:

- EIA-608/CEA-708 embedded in-stream in the video file
- Sidecar caption file
- Roku prefers a human-readable sidecar subtitle file such as .ttml, .dfxp, .vtt, or .srt
- See below for a full listing of supported sidecar caption files
- Sidecar captions must begin at timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file
- Do not provide an empty file (a file without text) for sidecar captions
- TTML and WebVTT positional data supported
- Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

*Closed caption text styling support is limited to:*

- *bold \<b\> and italic \<i\> tags*
- *text color*
- *text positioning*

*Quicktime video files must be accompanied by a sidecar closed caption file. Roku does not support the Quicktime text track.*

| **Format Name**                             | Supports Positional Data | **File Extension** | Encoding | **Delivery Type**       | **Languages**                                           |
| ------------------------------------------- | ------------------------ | ------------------ | -------- | ----------------------- | ------------------------------------------------------- |
| Timed Text Markup Language (TTML)           | Y                        | .ttml              | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| Web Video Text Track (WebVTT)               | Y                        | .vtt or .webvtt    | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| Distribution Format Exchange Profile (DFXP) | N                        | .dfxp              | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| EBU Subtitle Data Exchange Format (STL)     | N                        | .stl               | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| SubRip Text (SRT)                           | N                        | .srt               | UTF-8    | sidecar                 | follows audio language of either video file or dub file |
| EIA-608/CEA-708                             | N                        | n/a                | n/a      | Embedded in MPEG stream | embedded in video file                                  |
| SCC                                         | N                        | .scc               | ASCII    | sidecar                 | follows audio language of either video file or dub file |

### Subtitles

Content delivered with an audio language that is not primary to the territory of distribution must be delivered with an audio dub and/or subtitle file translating the content into that territory’s primary language.

- Full subtitles must NOT be burned into the video
- Roku prefers a human-readable sidecar subtitle file such as .ttml, .dfxp, .vtt, or .srt
- See below for a full listing of supported sidecar subtitle files
- Sidecar subtitles must begin at timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file
- Do not provide an empty file (a file without text) for sidecar subtitles
- TTML and WebVTT positional data supported
- Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

*Subtitle text styling support is limited to:*

- *bold \<b\> and italic \<i\> tags*
- *text color*
- *text positioning*


| **Format Name**                             | Supports Positional Data | **File Extension** | Encoding | **Delivery Type** | **Languages**                                                |
| ------------------------------------------- | ------------------------ | ------------------ | -------- | ----------------- | ------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | Y                        | .ttml              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Web Video Text Track (WebVTT)               | Y                        | .vtt or .webvtt    | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Distribution Format Exchange Profile (DFXP) | N                        | .dfxp              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| EBU Subtitle Data Exchange Format (STL)     | N                        | .stl               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| SubRip Text (SRT)                           | N                        | .srt               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |

### Artwork

Roku supports three image types for each piece of content. Each image type will be used in a different location within Roku Channel. Roku prefers to receive all three art sizes whenever possible. Each image must be delivered in JPEG or PNG format. Please provide images in Roku's preferred image resolution to avoid delays in publishing. Images *must* meet or exceed the minimum resolution and *must* be delivered in the *exact* aspect ratio defined for each image type.

#### Image type definitions

