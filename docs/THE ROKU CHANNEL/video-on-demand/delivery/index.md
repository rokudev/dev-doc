---
title: Content delivery
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
## Ingest specifications

Below is a comprehensive list of formatting requirements for partner media assets and metadata, including file templates and delivery guidelines. Roku's ingest platform is fully automated and full compliance with this specification will ensure timely and error-free processing of content for distribution to Roku Channel. Should any changes need to be made to the workflow established during onboarding, please inform a Roku representative as early as possible to arrange for any new testing or configuration. Roku expects content and metadata to be delivered in a manner that was agreed upon during the onboarding and testing phase. Please ensure delivery knowledge is transferred to new personnel in the event that teams are updated or changed.

### MovieLabs

As an alternative to this specification, Roku Channel supports content delivery via MovieLabs specification.

* **MMC and MEC** - Roku Channel MovieLabs service was built on MEC v2.9 and MMC v1.10 as defined on MovieLabs’ site: [https://www.movielabs.com/md/](https://www.movielabs.com/md/)
* **EMA avails** - Roku Channel supports the latest version of the [EMA specification](https://movielabs.com/md/avails/) via the xlsx deliverable

Roku prefers MovieLabs deliverables from all Premium Subscription (SVOD) Partners. Please see additional Roku Channel-specific MovieLabs delivery details [here](#movielabs-content-delivery)

## Roku content policies

### Ad policy

Roku will serve up to 8 minutes of advertisements per viewing hour. Roku’s ad policy is subject to change.

#### Ad-supported content on Roku Channel

Roku Channel is looking for ad-supported content that is appropriate for our users and advertisers – for example, Roku Channel does not want ad-supported content that contains excessive nudity or extreme/graphic violence.Please use your best judgement when sharing content. If an asset is questionable, please find an alternative to share. We reserve the right to remove or reject any content that we deem inappropriate.

#### Ad breaks

Ad break timecodes shall be delivered according to the Roku Ad Policy in the adBreak nodes of the movie/episode/clip metadata to trigger ad breaks during playback on the platform. adBreaks should be accurately provided to the millisecond. Please convert any frame rate value to a millisecond equivalent. Providing adBreaks in the ingest metadata is highly recommended and will speed up the QC process. All adBreak data must be supplied as HH:MM:SS.sss (e.g., 01:23:45.678)

##### Movie ad policy

* No adBreaks should be listed during the first 10 minutes of playback
* No pre-roll adBreak should be listed – 00:00:00.000
* adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
* There should be no less than 10 minutes between each adBreak
* No adBreaks within 10 minutes of end credits

##### Series episode ad policy

Content length longer than 15 minutes:

* No adBreaks should be listed during the first 5 mins of playback
* No pre-roll adBreak should be listed - 00:00:00
* adBreak cue points should be provided at naturally occurring scene breaks and/or fades to black
* There should be no less than 7 mins between each adBreak
* No adBreaks within the last 5 minutes of end credits

### Kids directed content policy

“Kids-Directed Content” is content that either: (i) is directed to children as defined by the applicable law of the jurisdiction in which the content is shown (e.g., [The Children's Online Privacy Protection Act](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa)); or (ii) was made for viewing primarily by children within the jurisdiction in which the content is shown.

* Roku must be made aware of the intent to submit or distribute content that is directed at children
* DO NOT submit or distribute kids directed content without Roku’s express written approval
* When given approval by Roku to submit or distribute content directed at children, all content metadata must include the following:
* For Movie content:
* The `<tag>` “kidsdirected” (all lowercase) must be included as one of the tags for every movie
* A valid MPAA, USA_PR, or TV parental [rating](#rating-values-by-rating-system-and-country) must be included. “UNRATED” and “Not Rated” are not acceptable ratings for kids directed content
* For Episodic Series content:
* The `<tag>` “kidsdirected” (all lowercase) must be included as one of the series and episodic tags for every series and episode
* A valid TV parental [rating](#rating-values-by-rating-system-and-country) must be included. “UNRATED” and “Not Rated” are not acceptable ratings for kids directed content

Please see [here](https://docs.roku.com/published/madeforkids) for more information and guidance on content "made for kids"

### External branding and calls to action (CTAs)

Roku Channel does not allow branding or external URL links/calls to action on key art or within the video and closed captioning. Calls to action are creatives and/or content segments that direct users outside of the Roku Channel ecosystem to consume content on external services. Video must be edited to remove links or directions for users to visit external sites. This includes:

* Brand logos
* Web urls
* QR codes
* Verbally or textually calling viewers to "click", "subscribe", "buy now", "go to", etc

Please contact your Roku representative for more details.

### Music cue sheets

Music cue sheets may be submitted to Roku for content distributed to Roku Channel via the below link:

[https://go.roku.com/music-cue-sheet-submission](https://go.roku.com/music-cue-sheet-submission)

Please do not submit music cue sheets with the video package deliverables via Aspera. Cue sheets delivered with the video package will be subject to deletion.

## User experience on Roku Channel

Roku augments metadata and artwork that appears in Roku Channel on Roku devices, web browsers, mobile applications, and other off-platform players with data supplied from Gracenote’s database where available. The Gracenote data aids in a unified experience of a title across platforms as well as on the greater Roku ecosystem. Roku will attempt to match all content delivered by our Partners to a corresponding record in Gracenote’s database. _At this time all metadata and artwork that appears on Roku Channel is sourced from Gracenote if that content is found in Gracenote’s database._

Gracenote leverages "Artwork Personalization" where they supply alternate imagery to diversify title artwork for different users based on several factors (demographics, popularity, etc.); which has led to an increase in user engagement. Gracenote does accept official key art from Partners, but not all users will see official art unless the algorithm serves it to them. Gracenote supplies ~3 unique images, and create alternative versions of artwork sourced from a variety of places (ex. original broadcaster, production studio, creative agency). Gracenote has stated to Roku that all images are under a fair use license, and they apply the same quality standards to Personalized Images as they do to partner supplied Key Art, e.g., no major spoilers, no dark/blurry/grainy images, no violent/suggestive imagery, avoidance of smoking.

Our systems use a combination of methods to match a title its correct Gracenote record. Partners can aid in the matching to a Gracenote record by providing accurate metadata including:

* Exact title of a series, movie, TV special, or short form video
* Release dates that are accurate to the year the title was originally released on any platform
* Accurate season and episode numbers according to the original release order
* Accurate TMS (Gracenote) IDs by content type
* Content classified as an episode with Gracenote must be delivered as an Episode to Roku
* Content classified as a movie with Gracenote must be delivered as a movie to Roku
* Content classified as a TV Special with Gracenote can be delivered as a movie to Roku

Partners can aid in the curation of their content on Roku Channel by providing Tags with each movie, episode, or clip. Roku Channel editorial team and recommendations engine will utilize the provided Tags and Genres to help surface content on Roku Channel Platform UI. The more tags that are included, the more ways the content can be curated/surfaced to the end user. Please see [Best practices: content tags and metadata](doc:content-tags-and-metadata) for more details.

## Media asset guidelines

### Video requirements

* All video content must be **full program only**:

* no bars/tone or slates at program start

* no textless video after program end

* no more than 2 seconds of black at program start

* no more than 2 seconds of black after program end

* Video files should be semi-textless (also known as "texted with no subtitles" or "textless with main, ends, and graphic text"). Video can include opening and end credit text but all subtitles for foreign dialogue must be removed.

* Do not include advertisements within the video. All ad insertion points for ad supported content will be provided in the metadata file based on the [Roku Ad Policy guidelines](#ad-policy)

* Commercial blacks may be included within the video so long as they are no longer than 2 seconds

* Commercial blacks are acceptable for episodic TV content but not expected for movie content

* Video files must be delivered as a single, seamless video file

* Do not deliver hard parted (broken into segments at the ad break points) video files

* Calls to action (CTAs) or links to external platforms or sites are not permissible and must be removed from the video prior to delivery to Roku

* HD video content must be delivered in a 16:9 container

* Full-Frame presentation (1.78 aspect ratio) is preferred whenever available

* Letterboxed 16:9 is allowed but should be minimized

* SD 16:9 content must not be delivered in a 4:3 container with letterboxing

* High-quality mezzanine level files are preferred with the highest bitrate and highest resolution possible.

#### Video frame rate

Roku supports a variety of frame rates and scan types. All video files should be delivered in their original native frame rate and scan type

#### Video resolution

| Type  | Width | Height | Pixel Aspect Ratio              |
| ----- | ----- | ------ | ------------------------------- |
| SD    | 720   | 480    | 4:3 or 16:9 (anamorphic pixels) |
| SD    | 640   | 480    | 1:1 (square pixels)             |
| SD    | 853   | 480    | 1:1 (square pixels)             |
| SD    | 720   | 576    | 4:3 or 16:9 (anamorphic pixels) |
| SD    | 768   | 576    | 1:1 (square pixels)             |
| SD    | 1024  | 576    | 1:1 (square pixels)             |
| HD    | 1280  | 720    | 1:1 (square pixels)             |
| FHD   | 1920  | 1080   | 1:1 (square pixels)             |
| UHD** | 3840  | 2160   | 1:1 (square pixels)             |

_**UHD is supported as an input resolution only. Roku does not currently encode to or display 4K UHD video on Roku Channel_

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
      <td />
      <td>.mxf</td>
      <td>50 Mbps or greater</td>
    </tr>
    <tr>
      <td>MPEG-2</td>
      <td />
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

_Files must have industry standard audio configurations with all channels clearly labeled for position and language_ (depending on file format)

* PCM 16-Bit or 24-Bit 48kHz audio at highest bitrate preferred
* Dolby AC3 Audio is supported

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

* Sidecar audio must be delivered as a single interleaved file. Roku does not support discrete single-channel files
* Sidecar audio must sync to the video source file delivered to Roku
* Roku supports one sidecar audio dub file per language

Below are the supported sidecar audio formats. Deliver sidecar audio with highest bitrate and sampling rate available.

| Container       | Codecs       | Extension |
| --------------- | ------------ | --------- |
| WAV (preferred) | PCM          | .wav      |
| MPEG-1 Layer 3  | MP3          | .mp3      |
| OGA             | Opus, Vorbis | .ogg      |

#### Descriptive audio

Descriptive audio is an alternate audio track for the visually impaired. The official FCC Audio Description documentation can be found at the below link:

[https://www.fcc.gov/audio-description](https://www.fcc.gov/audio-description)

Roku strongly prefers to receive descriptive audio tracks wherever available. Descriptive audio deliveries will follow the deliverables outlined in the [Secondary Audio Deliverables](#secondary-audio-deliverables) section above

#### Audio channel layout hints

In the event video files cannot be created to include proper audio channel labels, an audio layout hint must be provided in the metadata for the video files that are delivered. The available hints are defined below.

##### Audio layout hints

| Descriptor         | Definition                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| stereoOnly         | 2 channel stereo audio only. Can be delivered on a single track or on 2 discrete tracks          |
| surroundOnly       | 6 channel 5.1 surround audio only. Can be delivered on a single track or on 6 discrete tracks    |
| stereoPlusSurround | 8 channel audio with stereo on channels 1 and 2 followed by 5.1 surround on channels 3 through 8 |
| surroundPlusStereo | 8 channel audio with 5.1 on channels 1 through 6 followed by stereo on channels 7 and 8          |

### Closed captions and subtitles

Closed captions (also known as subtitles for the deaf or hard of hearing or SDH subtitles) and subtitles, while similar, serve separate distinct functions:

**Closed captions/SDH subtitles/subtitles for the deaf or hard of hearing**

* Transcribes the spoken dialogue and the sounds heard in an audio track
* Intended as an accessibility device for the deaf or hard of hearing
* Can be enabled/disabled (toggled on/off) by the viewer during playback
* Includes text that describes sound effects and/or music cues and lyrics
* Must include a full transcription of all spoken dialogue and narrative text that needs to be understood by the viewer, including forced narratives as the Roku player will only display a single text track at a time
* Are companions to an audio track and must be provided in the same language and locale as that audio track
* Will not be made available to the viewer if a companion audio track in the same language is not provided
* May be required per regulatory agencies in certain territories

**Full subtitles**

* Translates all narratively important spoken dialogue and on-screen text from one language to another
* Intended as a localization device when an audio track is in a language that the viewer does not understand
* Must include a full translation of all spoken dialogue and narrative text that needs to be understood by the viewer, including forced narratives as the Roku player will only display a single text track at a time
* Can be enabled/disabled (toggled on/off) by the viewer during playback
* Does not include text that describes sound effects or music cues, but may translate song lyrics if narratively important to the viewer or as a creative choice
* Can be made available to the viewer regardless of the audio track language(s) delivered

**Forced narrative subtitles**

* Translates narratively important spoken dialogue and/or on-screen text for the purpose of conveying information that may not be understood by the viewer. This information could include:
  * Spoken dialogue in a language different from the audio track language selected by the viewer
  * On-screen text in a language different from the audio track selected by the viewer
  * Inaudible or difficult to hear audio (such as an overly noisy scene or poor-quality audio recordings)
* Intended as a localization device when a portion of a program is presented in a language different from the main audio track language selected by the viewer or is otherwise unintelligible
* Can NOT be enabled/disabled (toggled on/off) by the viewer during playback
  * _Forced narrative playback WILL be disabled when the viewer enables a CC/SDH/Subtitle track as the Roku player will only display a single text track at a time. For this reason, it is required that CC/SDH and full subtitles contain all forced narrative elements_
* Are companions to an audio track and must be provided in the same language and locale as that audio track
* Will automatically display based on the audio language track selected by the viewer

### Closed captions

Roku prefers to receive closed captioning for all content to provide the best user experience possible.

For content intended for the US, Roku adheres to FCC closed captioning rules regarding Internet Video Programming. Those rules can be found at the below link:

[https://www.fcc.gov/consumers/guides/captioning-internet-video-programming](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming)

All content required by the FCC to have closed captioning must be delivered to Roku with closed captions and those captions must be conformed and synced to program. For content that is exempt from the closed caption requirement per FCC rules, a valid exemption code number must be included in the metadata. Allowable exemption code numbers and their definitions:

1 - The content has never aired on television in the United States.
2 - The content has only aired on television in the United States without captions.
3 - The content has not aired on television in the United States with captions since September 30, 2012.
4 - The content does not consist of full-length video programming.
5 - The content does not fall within a category of online programming that requires captions under FCC regulations (49 C.F.R. § 79.4(b)).
6 - The FCC and/or U.S. Congress has granted an exemption from caption requirements for this content.

For content intended for territories outside of the US, Roku will adhere to the requirements in that territory.

Captions may be provided in one of two ways:

* EIA-608/CEA-708 embedded in-stream in the video file
* Sidecar caption file
* Roku prefers a human-readable sidecar subtitle file such as .ttml, .dfxp, .vtt, or .srt
* See below for a full listing of supported sidecar caption files
* Sidecar captions must begin at timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file
* Do not provide an empty file (a file without text) for sidecar captions
* TTML and WebVTT positional data supported
* Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

_Closed caption text styling support is limited to:_

* _bold \<b> and italic \<i> tags_
* _text color_
* _text positioning_

_Quicktime video files must be accompanied by a sidecar closed caption file. Roku does not support the Quicktime text track._

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

* Full subtitles must NOT be burned into the video
* Roku prefers a human-readable sidecar subtitle file such as .ttml, .dfxp, .vtt, or .srt
* See below for a full listing of supported sidecar subtitle files
* Sidecar subtitles must begin at timecode hour 00:00:00:00 as the Roku encoder does not honor the timecode embedded in the video file
* Do not provide an empty file (a file without text) for sidecar subtitles
* TTML and WebVTT positional data supported
* Positional data provided in TTML and WebVTT captions will be honored as defined in the file provided

_Subtitle text styling support is limited to:_

* _bold \<b> and italic \<i> tags_
* _text color_
* _text positioning_

| **Format Name**                             | Supports Positional Data | **File Extension** | Encoding | **Delivery Type** | **Languages**                                                                                                |
| ------------------------------------------- | ------------------------ | ------------------ | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| Timed Text Markup Language (TTML)           | Y                        | .ttml              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Web Video Text Track (WebVTT)               | Y                        | .vtt or .webvtt    | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| Distribution Format Exchange Profile (DFXP) | N                        | .dfxp              | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| EBU Subtitle Data Exchange Format (STL)     | N                        | .stl               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |
| SubRip Text (SRT)                           | N                        | .srt               | UTF-8    | sidecar           | must conform to a supported [language code](#language-codes). Please also include region code where possible |

### Artwork

Roku supports three image types for each piece of content. Each image type will be used in a different location within Roku Channel. Roku prefers to receive all three art sizes whenever possible. Each image must be delivered in JPEG or PNG format. Please provide images in Roku's preferred image resolution to avoid delays in publishing. Images _must_ meet or exceed the minimum resolution and _must_ be delivered in the _exact_ aspect ratio defined for each image type.

#### Image type definitions

<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Extension</th>
      <th>Image Type</th>
      <th>Minimum<br />Resolution</th>
      <th>Preferred<br />Resolution</th>
      <th>Aspect Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><ul><li>JPEG or PNG</li><li>RGB</li><li>72ppi</li></ul></td>
      <td>.jpg<br />.jpeg<br />.png</td>
      <td>Key Art<br />Image with title treatment</td>
      <td>800x450</td>
      <td>1920x1080</td>
      <td>16:9</td>
    </tr>
    <tr>
      <td><ul><li>JPEG or PNG</li><li>RGB</li><li>72ppi</li></ul></td>
      <td>.jpg<br />.jpeg<br />.png</td>
      <td>Background<br />Textless image used in background of program page</td>
      <td>800x450</td>
      <td>1920x1080</td>
      <td>16:9</td>
    </tr>
    <tr>
      <td><ul><li>JPEG or PNG</li><li>RGB</li><li>72ppi</li></ul></td>
      <td>.jpg<br />.jpeg<br />.png</td>
      <td>Box Cover<br />Vertical poster image with title treatment</td>
      <td>534x801</td>
      <td>2000x3000</td>
      <td>2:3</td>
    </tr>
  </tbody>
</table>

#### Minimum art requirements by content type

**Clip content type art requirements**

| Art          | Required/Preferred | Notes                                            |
| ------------ | ------------------ | ------------------------------------------------ |
| 16:9 Key Art | Required           | Only the 16:9 texted image is required for Clips |

**Movie content type art requirements**

| Art             | Required/Preferred | Notes                                                                                          |
| --------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| 16:9 Key Art    | Required           | At a minimum, Roku requires the 16:9 Key Art for all Movie assets. All 3 images are preferred. |
| 2:3 Box Cover   | Preferred          | At a minimum, Roku requires the 16:9 Key Art for all Movie assets. All 3 images are preferred. |
| 16:9 Background | Preferred          | At a minimum, Roku requires the 16:9 Key Art for all Movie assets. All 3 images are preferred. |

**TV content type art requirements**

<table>
  <thead>
    <tr>
      <th><strong><em>Series Content Type</em></strong></th>
      <th />
      <th />
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Art</strong></td>
      <td><strong>Required/Preferred</strong></td>
      <td><strong>Notes</strong></td>
    </tr>
    <tr>
      <td>16:9 Key Art</td>
      <td>Required</td>
      <td>At a minimum, Roku requires the 16:9 Key Art for all Series assets. All 3 images are preferred.</td>
    </tr>
    <tr>
      <td>2:3 Box Cover</td>
      <td>Preferred</td>
      <td>At a minimum, Roku requires the 16:9 Key Art for all Series assets. All 3 images are preferred.</td>
    </tr>
    <tr>
      <td>16:9 Background</td>
      <td>Preferred</td>
      <td>At a minimum, Roku requires the 16:9 Key Art for all Series assets. All 3 images are preferred.</td>
    </tr>
    <tr>
      <td><strong><em>Episode Content Type</em></strong></td>
      <td />
      <td />
    </tr>
    <tr>
      <td><strong>Art</strong></td>
      <td><strong>Required/Preferred</strong></td>
      <td><strong>Notes</strong></td>
    </tr>
    <tr>
      <td>16:9 Background</td>
      <td>Required</td>
      <td>Episodic image may be letterboxed or pillarboxed depending upon the source video. Windowboxed images will be rejected.<br />Episodic images should be unique for each episode and represent the content of the episode</td>
    </tr>
  </tbody>
</table>

#### Artwork content guidelines

* Key Art (graphic with the full title of the asset visible)
* No sexually explicit or graphically violent artwork
* Artwork should be post-theatrical and not include language such as _In Theaters Now_ or _Coming Soon_
* Artwork designed specifically for digital delivery is preferred
* Artwork for international territories should be localized for each territory
* For content on Roku Channel, Roku will not accept branded artwork without prior approval for any individual video asset nor for season/series entities.
* Calls to action (CTAs) or links to external platforms or sites are not permissible and must be removed from the image file prior to delivery to Roku

#### Artwork placement on platform examples

**Movie artwork -browse experience**

Highlighted example of the 16:9 texted image with title treatment

![roku400px - movieGrid](https://image.roku.com/ZHZscHItMTc2/movieBrowse.jpg)

**Movie artwork -details experience**

Highlighted example of the 16:9 textless image

![roku400px - movieDetails](https://image.roku.com/ZHZscHItMTc2/movieDetail.jpg)

**Series artwork - browse experience**

Highlighted example of the 16:9 texted series image with title treatment

![roku400px - seriesGrid](https://image.roku.com/ZHZscHItMTc2/seriesBrowse.jpg)

**Series artwork - details experience**

Highlighted example of the 16:9 textless series image

![roku400px - seriesDetail](https://image.roku.com/ZHZscHItMTc2/seriesDetails.jpg)

**Episode artwork - episode picker experience**

Highlighted example of the 16:9 textless episode images

![roku400px - episodePicker](https://image.roku.com/ZHZscHItMTc2/episodePicker.jpg)

**Episode artwork - episode details experience**

Highlighted example of the 16:9 textless episode image

![roku400px - episodeDetail](https://image.roku.com/ZHZscHItMTc2/episodeDetail.jpg)

**Clip artwork - browse experience**

Highlighted example of the 16:9 texted image with title treatment

![roku400px - clipGrid](https://image.roku.com/ZHZscHItMTc2/clipBrowse.jpg)

**Poster artwork - search experience**

Highlighted example of the 2:3 texted image with title treatment from the Search experience. 2:3 images are preferred for series and movie content types

![posterSearch](https://image.roku.com/ZHZscHItMTc2/posterSearch.jpg)

## Delivery guidelines

Roku accepts content via Aspera which can be configured as either an Aspera Shares (using the Aspera Connect Browser plugin) or as an Aspera P2P/Enterprise connection (using Aspera Client or Console).

Alternate file transfer or physical delivery methods may be evaluated on a case-by-case basis and must be approved by Roku. Any physical media/hard drives Roku may accept will not be returned.

### Aspera shares delivery

Provide the name(s) and email address(es) for users that will be transmitting content to Roku for Roku Channel.

Roku’s Aspera Shares URL: [https://aspera.sr.roku.com](https://aspera.sr.roku.com)

You will need to install the Aspera Connect browser plugin to upload content via Aspera Shares.

Invitations to create an Aspera Shares account will come from Roku’s Aspera Shares server. These automated invitation emails can be flagged as spam or junk emails or can be blocked by an organization’s email filtering system or firewall. Please check the spam/junk folder for the invitation and move it from the spam/junk folder before trying to access the link provided.

### Aspera enterprise/P2P/HSTS delivery

Roku authenticates through RSA Public/Private key exchange. To complete this configuration, please provide a Public RSA-SSH key.

Steps to create SSH keys can be found in [Aspera’s official documentation](https://download.asperasoft.com/download/docs/ascp/3.5.2/html/dita/creating_public_key.html)

Roku will provide host and username information during onboarding.

**Aspera Client**

[Aspera Client Download](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software\&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client\&release=All\&platform=All\&function=all)

#### Transfer Bandwidth

Roku recommends verifying or updating the global and user preferences of the Aspera Client to align with your preferred upload bandwidth. Please note Roku applies a global bandwidth cap of 300Mbps.

![asperaPreferences](https://image.roku.com/ZHZscHItMTc2/asperaPreferences.jpg)

Depending on what client is being used, there are different settings that can affect transfer speeds.

* If using the Desktop Client GUI, global settings can be set
  [https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings)
* Transfer speeds can also be set on a per-Connection level (the "Speed" setting in step 7):
  [https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections)
* If connecting via command line, there is a specific switch: `-l 100m` would set the transfer rate at 100Mbps
* If connecting via Aspera Shares, target rates can be set both system-wide or per-user in the Shares web interface
  [https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings)
  [https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings)

### File delivery

* Video, closed captions, and artwork files must be _completely delivered prior to the delivery of metadata_
* Production files MUST be delivered to the **`/prod`** folder. Automation is dependent on proper file delivery location. Failure to deliver files to the correct folder will result in processing delays or content not processing at all
* Test files may be delivered to the **`/testing`** folder
* It is preferred that content not be delivered to subfolders. If subfolders are necessary, follow the below guidelines:
* Subfolders must **not** begin with an underscore
* Do **not** separate files into subfolders by file type
* All media files for a single title (episode, movie, or shortForm) must be delivered to the same directory
* The ingest platform assumes media files referenced in the metadata are in the same directory as the metadata file. As such, metadata must be delivered to the same directory as the media files contained within the metadata
* Delivery notifications can be sent to [deliverynotifications@roku.com](mailto:deliverynotifications@roku.com)

#### File retention

The delivery location is a temporary location for our Partners to upload files for ingestion into Roku Channel content library. Automation will move files from the delivery location upon successful ingest to an archive location to be stored indefinitely. All files uploaded to the delivery location are expected to be ingested within a reasonable time frame not to exceed 30 days. Valid and complete metadata must be delivered shortly after files are delivered to ensure timely ingest. Files in the delivery location that have not ingested after 30 days are subject to deletion.

_Exceptions to the file retention policy may be made to files in the **`/testing`** folder_

#### File naming

Source video, closed captions, and artwork files delivered for ingest must adhere to the following guidelines:

* File names must not exceed 125 characters in length
* File names must match the reference to the file name in the metadata supplied for the title delivered
* File names are case-sensitive
* File names must end with a proper file extension. File extensions are expected to be lowercase
* Whitespace and special characters !@#$%^&*()\{}|[];:\’\”?/>,\< must not be included in any file name
* The same image can be used for every episode of a series, but it is not ideal. If the same image is used for every episode, that image must be delivered multiple times and uniquely named for each episode. For example, “episode.jpg” should be delivered as “episode_01.jpg”, “episode_02.jpg”, etc.…

<br />

##### Characters allowed in file names

<table>
  <thead>
    <tr>
      <th>Character sets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><ul><li>0-9</li><li>a-z</li><li>A-Z</li></ul><p><em>Correct file delivery location, proper file delivery cadence, and proper file naming is the responsibility of our Partners as the Partner is the expert in their own content and we do not always have insight into individual Partner delivery schedules.</em></p></td>
    </tr>
  </tbody>
</table>

<br />

| Character name | Character |
| -------------- | --------- |
| Hyphen         | -         |
| Period         | .         |
| Underscore     | _         |

##### Characters forbidden in file names

<table>
  <thead>
    <tr>
      <th>Character Name</th>
      <th>Character</th>
      <th>Character Name</th>
      <th>Character</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"At" symbol</td>
      <td>@</td>
      <td>Left square bracket</td>
      <td>\[</td>
    </tr>
    <tr>
      <td>Ampersand</td>
      <td>&</td>
      <td>Less than</td>
      <td>\<</td>
    </tr>
    <tr>
      <td>Asterisk</td>
      <td>\*</td>
      <td>Percent</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Backslash</td>
      <td>\\</td>
      <td>Plus</td>
      <td>+</td>
    </tr>
    <tr>
      <td>Caret</td>
      <td>^</td>
      <td>Pound/hashtag</td>
      <td>#</td>
    </tr>
    <tr>
      <td>Colon</td>
      <td>:</td>
      <td>Question mark</td>
      <td>?</td>
    </tr>
    <tr>
      <td>Comma</td>
      <td>,</td>
      <td>Quotation marks/double quote</td>
      <td>"</td>
    </tr>
    <tr>
      <td>Dollar</td>
      <td>$</td>
      <td>Right curly brace</td>
      <td>}</td>
    </tr>
    <tr>
      <td>Equals</td>
      <td>=</td>
      <td>Right square bracket</td>
      <td>]</td>
    </tr>
    <tr>
      <td>Forward slash</td>
      <td>/</td>
      <td>Semicolon</td>
      <td>;</td>
    </tr>
    <tr>
      <td>Grave accent</td>
      <td>\`</td>
      <td>Space</td>
      <td>
        <code />
      </td>
    </tr>
    <tr>
      <td>Greater than</td>
      <td>></td>
      <td>Tilde</td>
      <td>\~</td>
    </tr>
    <tr>
      <td>Left curly brace</td>
      <td>\{</td>
      <td>Vertical pipe</td>
      <td>|</td>
    </tr>
  </tbody>
</table>

## MovieLabs content delivery

Order of delivery is important. The Roku MovieLabs service will require that the MMC XML file be delivered after all media files referenced within have completed delivery. Roku cannot process content without successful delivery of both the MMC and MEC XMLs. Please see examples below:

* For each MMC, all files referenced in the MMC should be delivered prior to the delivery of the MMC XML to be considered a successful delivery
* For each MEC, all files referenced in the MEC should be delivered prior to the delivery of the MEC XML to be considered a successful delivery
* Movies, Series, Seasons, and Episodes require successful delivery of both MMC and MEC to ingest
* Episodes cannot ingest without successful delivery and ingest of MMC and MEC of the Season to which the Episode belongs
* Seasons cannot ingest without successful delivery and ingest of MMC and MEC of the Series to which the Season belongs
* Episodes processed by Roku’s system before the Series and/or Season to which the Episode belongs will be held in an uningested state until the Series and/or Season has been successfully delivered
* Seasons processed by Roku’s system before the Series to which the Season belongs and/or an Episode belonging to that Season will be held in an uningested state until the Series and/or an Episode has been successfully delivered
* Series processed by Roku’s system before a Season and an Episode belonging to that Series will be held in an uningested state until a Season and Episode has been successfully delivered

### Roku specific metadata and media files

[Video files](#video-requirements), [audio files](#audio-requirements), [closed caption files](#closed-captions), [subtitle files](#subtitles), [image files](#artwork), [minimum metadata requirements](#minimum-required-metadata-by-content-type), [genres](#genres), and [ratings and rating sources](#rating-values-by-rating-system-and-country), must adhere to the supported formats and requirements defined in this specification

#### Tags

Tags for merchandising/curation can be delivered via the Keyword node supported in the MovieLabs MEC XML. Please see the [MovieLabs MEC Schema](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link116) for proper placement of the Keyword node

<u>Example:</u>

```xml
<md:LocalizedInfo language="en">
  <md:TitleDisplayUnlimited>Great Title of My Show</md:TitleDisplayUnlimited>
  <md:Summary190>Short summary of my show.</md:Summary190>
  <md:Summary400>Longer summary of my show.</md:Summary400>
  <md:Genre id="genre"/>
  <md:Keyword>keyword</md:Keyword>
</md:LocalizedInfo>
```

#### TMS IDs

Gracenote TMS IDs can be delivered via the MovieLabs MEC XML as an Identifier with Namespace TMSID in the AltIdentifier node. Please see the [MovieLabs MEC Schema](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link121) for proper structure of the AltIdentifier node

<u>Example:</u>

```xml
<md:AltIdentifier>
  <md:Namespace>TMSID</md:Namespace>
  <md:Identifier>EP012345678910</md:Identifier>
</md:AltIdentifier>
```

#### MMC XML ad breaks and cue points

Ad break, intro credit, and end credit cue points can be supplied in the MovieLabs MMC XML in the Markers node. Please see the [MovieLabs MMC Schema](https://movielabs.com/md/manifest/v1.10/manifest-v1.10/manifest-v1.10.html#Link184) for proper structure of the Markers node

<u>Example:</u>

```xml
<manifest:Markers>

  <!--Opening credit cuepoint start and end-->
  <manifest:Marker>
    <manifest:Timecode format="seconds">155.071</manifest:Timecode>
    <manifest:DisplayLabel>FIRST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
    <manifest:Label>FFEI</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">200.867</manifest:Timecode>
    <manifest:DisplayLabel>LAST_FRAME_EPISODE_INTRO</manifest:DisplayLabel>
    <manifest:Label>LFEI</manifest:Label>
  </manifest:Marker>

  <!--End credit cuepoint start and end-->

  <manifest:Marker>
    <manifest:Timecode format="seconds">3669.207</manifest:Timecode>
    <manifest:DisplayLabel>FIRST_FRAME_UP_NEXT</manifest:DisplayLabel>
    <manifest:Label>FFUN</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">3812.517</manifest:Timecode>
    <manifest:DisplayLabel>LAST_FRAME_UP_NEXT</manifest:DisplayLabel>
    <manifest:Label>LFUN</manifest:Label>
  </manifest:Marker>

  <!--Ad Break cuepoints (Roku only needs a start point. Our player will effectively pause video playback at this point, play the ad pod, and resume from this same point)-->

  <manifest:Marker>
    <manifest:Timecode format="seconds">737.111</manifest:Timecode>
    <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
    <manifest:Label>FPCI</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">1361.276</manifest:Timecode>
    <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
    <manifest:Label>FPCI</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">1948.821</manifest:Timecode>
    <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
    <manifest:Label>FPCI</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">2841.421</manifest:Timecode>
    <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
    <manifest:Label>FPCI</manifest:Label>
  </manifest:Marker>
  <manifest:Marker>
    <manifest:Timecode format="seconds">3270.100</manifest:Timecode>
    <manifest:DisplayLabel>FIXED_POINT_CANDIDATE_INSERTION</manifest:DisplayLabel>
    <manifest:Label>FPCI</manifest:Label>
  </manifest:Marker>
</manifest:Markers>
```

### MovieLabs schema validation

Roku is using Apache [xmlbeans](https://xmlbeans.apache.org/download/index.html) for parsing & validating the MEC MMC XML files. You can use the command line tool provided in xmlbeans to validate.

1. Download & extract xmlbeans to local
2. From command line, cd to the xmlbeans bin directory
3. Inside bin directory you will find the validate tool
4. Also download the official MovieLab schema xsd files to local ( [https://movielabs.com/schema/manifest/v1.10/manifest-v1.10.xsd](https://movielabs.com/schema/manifest/v1.10/manifest-v1.10.xsd) [https://movielabs.com/schema/mdmec/v2.9/mdmec-v2.9.xsd](https://movielabs.com/schema/mdmec/v2.9/mdmec-v2.9.xsd) )
5. Usage: validate schema.xsd instance.xml ( be sure to point schema.xsd to mdmec-v2.9.xsd for MEC, and manifest-v1.10.xsd for MMC )
6. From the command line output you can tell if the given xml is valid or not

**Example usage**

```bash
./validate ~/dev/movielabsSpec/schema/mdmec-v2.9.xsd /path/to/file/directory/MEC_SAMPLE_123456789.xml
```

**Example response**

```text
XMLBEANS_LIB=./../lib
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...
/path/to/file/directory /MEC_SAMPLE_123456789.xml valid
```

## Metadata requirements

Roku utilizes a transform engine that can “normalize” different metadata formats to fit Roku’s ingestion needs. Exact element or field names are not as important as consistent delivery of agreed upon element or field names. The data within any field must conform to Roku Channel Ingest Specification regardless of element or field name. If you use an XML format for delivery of your content to other platforms, you may be able to repurpose this for delivery to Roku. You may provide a sample of this existing metadata format during onboarding for Roku to evaluate validity for ingest into Roku Channel. Regardless of the format delivered, all required elements/fields must be provided in the metadata deliverable.

### Minimum required metadata by content type

<table>
  <thead>
    <tr>
      <th>Film/Clip Requirements</th>
      <th>TV Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><ul><li>provider</li><li>content type</li><li>asset\_id</li><li>title</li><li>release\_date</li><li>runtime</li><li>genres</li><li>rating</li><li>rating system</li><li>short\_synopsis</li><li>video file\_name</li><li>captions file\_name (if captions are required)</li><li>key art file\_name</li></ul></td>
      <td><ul><li>provider</li><li>content type</li><li>asset\_id</li><li>episode title</li><li>episodeNumber</li><li>episode release\_date</li><li>runtime</li><li>rating</li><li>rating system</li><li>episode short\_synopsis</li><li>series\_id</li><li>series title</li><li>series release\_date</li><li>series genres</li><li>series short\_synopsis</li><li>season\_id</li><li>seasonNumber</li><li>video file\_name</li><li>captions file\_name (if captions are required)</li><li>episode thumbnail file\_name</li><li>series key art file\_name</li></ul></td>
    </tr>
  </tbody>
</table>

### Content type definitions

Roku Channel supports 3 content types: tv, film, and clip. All content must be delivered as one of these 3 content types. Titles must be delivered to Roku Channel in the same content type the program was originally available in. The below definitions can help guide how to classify content that is intended for Roku Channel.

**TV**

Episodic content that is structured in a series --> season --> episode hierarchy should be delivered to the TV specification.

**Film**

Full length, long form, stand-alone titles should be delivered to the Film specification. Any program that is not intended to be nested in a series/season/episode hierarchy and exceeds roughly 15 minutes run time should be considered a film. This includes stand-alone TV Specials.

**Clip**

Short form, stand-alone titles that do not exceed roughly 15 minutes run time should be delivered to the Clip specification.

### ID requirements and expectations

Roku does not supply IDs for content. IDs are to be generated and supplied by the Partner for content that is delivered to Roku. Every clip and movie must be delivered with an asset_id. Every episode must be delivered with 3 IDs: an asset_id, a series_id, and a season_id. IDs need to be meaningful to your team as they are how we positively identify a title in our system. The asset ID in the ingest metadata should match the Title ID provided in the avail document. This will aid in tracking the content throughout Roku’s pipeline from Avails submission through publication on Roku Channel. Any updates to the title once it has been ingested into our system MUST be accompanied by the asset ID. Guidelines and definitions of IDs are below:

| **ID **   | Definitions                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asset_id  | Immutable, unique identifier for a clip, episode, or movie. Required for all content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION**                                                                                                                                                              |
| series_id | Immutable, unique identifier for a series. Cannot be the same as the season or unique episode ID. Must be delivered with all episodes of a series and must be consistent for all episodes of a series. Required for TV content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION**                    |
| season_id | Immutable, unique identifier for a season. Cannot be the same as the series or unique episode ID. Must be delivered with all episodes of a season of a series and must be consistent for all episodes within that season. Required for TV content. 50 characters maximum. Alphanumeric characters, hyphens, and underscores only – **SPACES OR SPECIAL CHARACTERS IN ANY ID WILL FAIL INGESTION** |

### Availability sheets/planners

Roku requests an initial launch list of titles/episodes/clips in current library that are available to Roku at the time of onboarding and a schedule when the content will be refreshed. For ongoing production, Roku requests that Avails be provided 60 days prior to licensing window start and the content be delivered at least 30 days before curation onto the channel. This will allow ample time for processing and QC of the content before it goes live on Roku Channel. Delivery capacity to be coordinated after signing

| Documents           |                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------- |
| Roku Avail Spec     | Check out the avail specifications page [here](https://go.roku.com/trc-avail-spec) |
| Roku Avail Template | Download Roku's avail template [here](https://go.roku.com/trc-avail-template)      |

### Availability windows

Roku has the ability for content to display on-device and for user playback at a specific starting time. By default, content will go into window at 12:00 am (midnight) and expire at 11:59:59 pm in the users’ time zone.

If content is to go live at a time other than midnight or expire at a time other than 11:59:59 pm, the license window start or end values in the inbound metadata must include the desired times.

There are two types of specific time designations – relative and absolute.

* Relative Time – a Saturday night premiere of a movie goes into window at 9pm local time for all users. A user in the Eastern Time Zone watches at 9pm but a user in the Pacific Time Zone, at the exact same moment (6pm PT), cannot watch that content.
* Absolute Time – a new episode of a series goes into window at 9pm Eastern and becomes immediately available across all time zones. A user in the Pacific Time Zone can watch the content at 6 pm local time.

While time settings are dictated by the content owner, Roku will need the metadata as follows:

* If the content has a relative start time, that time must be indicated in the ingest metadata and formatted as “yyyy-mm-ddThh:mm:ss” (2019-11-01T21:00:00)
* If the content has an absolute start time, that time must be indicated in the ingest metadata. The time must be presented as UTC time and formatted as “yyyy-mm-ddThh:mm:ssZ” (2019-11-02T01:00:00Z).
* In this example, 9 pm Eastern Time on November 1 is 1 am UTC ([https://www.thetimezoneconverter.com](https://www.thetimezoneconverter.com))
* If the ingest metadata arrives without a time, Roku will assume a relative start time of midnight and a relative end time of 11:59:59 pm

### Special characters

<p>Roku utilizes CDATA sections to allow special characters (e.g. !@#$%^&*()\{}|[];:\’\”?/>\<, as well as foreign character sets) within certain node values of the ingest XML. Roku highly recommends wrapping data in CDATA sections to ensure proper ingest of content. The below nodes are the <em>only</em> nodes that support CDATA sections:</p>

* title
* long_synopsis
* short_synopsis
* display_name

Certain characters in an XML will render the document unreadable by the Roku ingest platform unless handled (escaped) properly. The below characters must be provided in their Escaped Form for all node values that do not support CDATA sections:

| Character Name | Character | Escaped Form |
| -------------- | --------- | ------------ |
| Ampersand      | \&        | `&amp;`      |
| Less-than      | \<        | `&lt;`       |
| Greater-than   | \>        | `&gt;`       |
| Quotes         | \"        | `&quot;`     |
| Apostrophe     | \'        | `&apos;`     |

Special characters should never be used in file names or file name references within the XML or Excel metadata. [See File Naming Guidelines](#file-naming) for more on this.

### Supported metadata formats

XML format preferred. One complete XML shall be delivered for each movie, clip, or TV episode video file delivered. Metadata shall be delivered via Aspera to the same folder location as the video, captions, and artwork files.

**Supported metadata formats**

<table>
  <thead>
    <tr>
      <th>Format Name</th>
      <th>Format Extension</th>
      <th>Encoding</th>
      <th>Package Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XML (preferred)</td>
      <td>.xml</td>
      <td>UTF-8</td>
      <td>clip1.0<br />film5.0<br />tv1.0<br />Cablelabs ADI 1.1<br /><br /><strong><em>Additional XML schemas supported on a case-by-case basis</em></strong></td>
    </tr>
    <tr>
      <td>Excel</td>
      <td>.xlsx</td>
      <td>See below for <a href="#roku-excel-metadata-guildelines">Roku Excel Metadata Templates</a> and <a href="#roku-excel-metadata-guidelines-and-templates">Excel Metadata Guidelines</a></td>
      <td />
    </tr>
  </tbody>
</table>

### Metadata updates (MDU) and file replacements

Updates are automated and can be sent if there is a need to change metadata or asset files for any program that has previously been delivered to Roku Channel. All metadata and/or file replacement updates must include **Provider**, **Asset ID**, and **Content Type** of the program as it was originally delivered to Roku for the update to succeed. Version control will be handled by Roku's system, there is no need to provide versioning information in the metadata.

Roku currently supports updating the below metadata fields via automated MDU:

* TMS ID
* EIDR ID
* Titles (primary and localized)
* Short Descriptions (primary and localized)
* Long Descriptions (primary and localized)
* Release Date
* Series Titles
* Season Number
* Episode Number
* Language (and localized languages)
* Availability Windows
* License Types
* Countries
* Genres
* Provider Tags
* Content Ratings (system & rating)
* Credits
* Ad Breaks
* Cue Points

**Metadata update (MDU)**

Metadata updates (MDUs) are automated and will be processed in the same manner as content that needs to be ingested into Roku Channel's content library. Please follow the procedure outlined below to update metadata only.

Metadata updates must be delivered in the same format as the ingest metadata

Metadata updates must include **the exact same asset ID** that was included when the content was originally ingested

_Please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com) if you need a complete listing of asset IDs as they exist in Roku Channel's system_

All file name references must be removed from a metadata only update. This includes:

* source video file name
* closed captions file name
* subtitle file name
* audio dub file name
* key, background, and/or poster art file names

Some fields need to be updated in "groups". All required fields in a group must be provided for the update to process successfully. Below are the current groups:

* Metadata group (all of the required fields must be present in order to update one of these)

* Language (required)

* Title (required)

* Short description (required)

* Long description (optional)

* Availability group (all of the required fields must be present in order to update one of these)

* License Type (required)

* Country (required)

* Start Date (required)

* End Date (required)

Upload the metadata update to the "prod" folder in Aspera

_If you do not see the update reflected on Roku Channel within 24 hours, please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com)_

**File replacements and additions**

File replacements and additions are automated and will be processed in the same manner as content that needs to be ingested into Roku Channel's content library. A file replacement will replace a file that currently exists in Roku Channel's library. A file addition will add a new file to an existing record in Roku Channel's library. A file addition would be used to add localized subtitles or dubs to an existing record. Please follow the procedure outlined below to replace one or more files.

1. File replacements and additions must be delivered in the same format as the ingest metadata
2. File replacements and additions must include **the exact same asset ID** that was included when the content was originally ingested

* _Please reach out to [contentoperations@roku.com](mailto:contentoperations@roku.com) if you need a complete listing of asset IDs as they exist in Roku Channel's system_

3. Only the file name references of the files that are being replaced or added should be included in the metadata file. Any file that is not being replaced or added should not be delivered or referenced in the metadata file.
4. If the source video file is being replaced and there is a change in the duration of the source, any related files (captions, subtitles, audio dubs) should also be replaced.
5. File replacements require language values in order to update properly
6. Upload the file replacement or addition metadata to the "prod" folder in Aspera

_As a best practice, please provide replacement files with a unique name both in the metadata and on the file itself. Simply adding a versionnumber (_v2, _v3, etc.) would suffice. For example:_ `movie_title_v2.mov`

**Content takedown**

If rights change from when the content was originally delivered to Roku and content needs to be removed from Roku Channel either immediately or scheduled, the availability end date can be changed by providing ametadata update as defined [below](#metadata-updates-mdu-and-file-replacements). Explicit updates should be provided for all territories from which thecontent should be removed. Please be aware that end dates providedwithout time values specified will expire at 11:59:59pm on that date.

### Roku XML metadata requirements, samples, and schemas

| Roku XML Schema                   | Download Link                                             |
| --------------------------------- | --------------------------------------------------------- |
| Film XML Schema                   | [Download here](https://go.roku.com/film-xml-schema)      |
| TV XML Schema                     | [Download here](https://go.roku.com/tv-xml-schema)        |
| Clip XML Schema                   | [Download here](https://go.roku.com/clip-xml-schema)      |
| **Roku XML Samples**              | **Download Link**                                         |
| Annotated Roku Film XML           | [Download here](https://go.roku.com/film-xml-example)     |
| Annotated Roku TV XML             | [Download here](https://go.roku.com/tv-xml-example)       |
| Annotated Roku Clip XML           | [Download here](https://go.roku.com/clip-xml-example)     |
| **Sample Cablelabs ADI Metadata** | **Download Link**                                         |
| Cablelabs Film ADI XML Example    | [Download here](https://go.roku.com/film-adi-xml-example) |
| Cablelabs TV ADI XML Example      | [Download here](https://go.roku.com/tv-adi-xml-example)   |
| Cablelabs Clip ADI XML Example    | [Download here](https://go.roku.com/clip-adi-xml-example) |

**NOTE:** Cablelabs ADI samples are intended for illustrative purposes and not necessarily as templates. The required data must be supplied in a static node in each XML.

***
