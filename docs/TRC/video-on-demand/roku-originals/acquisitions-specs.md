---
title: Acquired content - scripted media delivery specifications
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
_Version 3.0_ - _August 2025_

## 1. General overview

The Roku Channel is committed to providing the highest quality content and values its Partners for helping to achieve this goal. The Roku Originals Post Production Delivery Specifications outline the best practices for the Partner at this time. This document and the requirements are subject to change at Roku’s sole discretion.

The specifications below encompass deliverables for Roku Originals Post Production, as they relate to previously completed, acquired series. It is not comprehensive of all deliverables that may be required as part of your agreement. Please continue to utilize the [The Roku Channel Ingest Specifications](https://go.roku.com/rokuchannel-ingest-vod) document for all other areas noted below:

* Ad Policy
* Kids Directed Content Policy
* External Branding and Calls to Action
* Artwork and Marketing Deliverables
* File Delivery Setup

If the Roku Originals Content Development teams will be a part of the creative, editorial process, please reach out to Roku Post Production to obtain the correct specifications.

## 2. Deliverables

The specifications below detail all deliverables required for each Roku production. A production will not be considered wrapped until all assets below are delivered and confirmed by the Roku Post Production team. If you have any questions, please do not hesitate to reach out to Roku Post Production.

### 2.1 Roku originals logo

All acquired content that will be branded as a Roku Original series will be required to add the Roku Originals Logo to their end credits. The Roku Originals Logo should be placed last in the end credits. **Please reach out directly to Roku Post for access to the most current Roku Original Logo at: [dlropost@roku.com](mailto:dlropost@roku.com)**

### 2.2 Quality control (QC)

Each Production is responsible for covering the cost of and delivering 100% Quality Control approved content.

All masters noted below will be required to be submitted to Quality Control:

* Texted Master – Inclusive of Roku Originals End Logo addition
* Textless Master – Inclusive of Roku Originals End Logo addition

All required versions for each episode should be delivered to the Quality Control facility on the same day. This will ensure the Quality Control operator is able to verify that there is no variation between the texted/textless timings.

Please be sure to build time into your delivery schedule to account for the Roku Quality Control process. Roku advises that you set aside three weeks for each episode to complete the Quality Control of all horizontal masters. Delivery will not be considered ‘Final’ unless all masters have received a passing report from one of Roku’s approved vendors. A list of these vendors will be provided in the Post Kickoff Packet.

If an episode has passed Quality Control but a revision is necessary (incorrect titles, production card modification, etc.) you **must** reach out to Roku Post before any redelivery is made. Please send an email with a detailed and time coded breakdown of what fixes are being requested so that Roku can review and determine the impact it will have on each team and the show premiere itself.

#### 2.2.1 Text spotting list (TSL)

You will be required to deliver a Text Spotting List file for each episode when it is submitted for Quality Control. This list will help Quality Control vendors verify that creatively intended text is included in the final file. A Roku Text Spotting List template was provided in your Post Kickoff zip file. This single file should be updated as episodes are sent to Quality Control so that all information for the series is included in the same master spreadsheet.

The Text Spotting List should contain any and all text that is burned into picture, and the corresponding timecodes for each. If an episode has no burned-in text, you will still be required to deliver this file, but will specify the lack of text by checking the box at the top of the template.

### 2.3 Filename specifications

#### 2.3.1 Paper deliverables

Paper deliverables should all be uploaded to the “Hub” platform noted above. Please adhere to the following naming conventions when delivering documents to the Hub:

* ShowCode_ ProdNumber_AirOrder_Version_LangCode_Date_FINAL
* GABH_ 301_Air_1_PostVendorList_enUS_20250303_FINAL

#### 2.3.2 Master video deliverables

All master* video files should be labeled as follows:

ShowCode_ProdNumber_AirOrder_Version_LangCode_Resolution_ColorSpace_FN_Audio_FrameRate_Date-v#.mov

Example:

NION_101_AIR_1_TXTD_enUS_UHD_SDR_FN_2CH_23976p_20190701-v2.mov

Production Number = As listed on Post Grids

Air Order = Please list even if the Air Order is the same as the Production Number

| File Name Segment | File Name Abbreviation                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Version           | TXTD (Texted), TXLS (Textless), or PROXY                                                        |
| Language          | enUS (American English) or esMX (Neutral Latin American Spanish)                                |
| Resolution        | UHD or HD + Color Space = SDR or HDR                                                            |
| Forced Narratives | FN (Present), NC (none present)                                                                 |
| Audio             | 2CH (Interleaved) or 8CH (5.1 and Stereo) – 7.1 audio not permitted on any masters at this time |
| Frame Rate        | 23976p, 24p, 25p, 2997p, 30p, 50p, 5994p, 60p                                                   |
| Revision Date     | Please list in the following format: YYYYMMDD                                                   |
| Version Number    | To indicate the current or previous passes of QC and track the latest version for delivery      |

*See 2.4.5 for Proxy file naming.

#### 2.3.3 Master audio deliverables

Audio materials should be named to include all appropriate information:

ShowCode_ProdNumber_Vers_Date_LangCode_MaterialType_Channel#_SampleRate_BitRate_TC_Channel.wav

**Examples:**

MAMA_102_v04_20220919_enUS_PM_Nearfield_2ch_48k_24b_23976.L.wav

MAMA_102_v03_20220919_esMX_FXSTEM_6ch_48k_24b_23976.R.wav

MAMA_102_v02_20220919_esMX_ME_Nearfield_6ch_48k_24b_23976.C.wav

| Material Type                                 | Abbreviation                      |
| --------------------------------------------- | --------------------------------- |
| Printmaster                                   | PM                                |
| Music & Effects                               | ME                                |
| Audio Stem                                    | FXStem, MXStem, DIAStem, FFFXStem |
| Optional Tracks                               | OPT, OPTA, OPTB, GRP              |
| Add’l Detail (Dialogue Guide Track, ADR, etc) | GUIDE, ADR                        |

| Channel Type | Abbreviation |
| ------------ | ------------ |
| Mono         | Mono         |
| Stereo       | 2CH          |
| 5.1 Surround | 6CH          |

| Track Assignment | Abbreviation         |
| ---------------- | -------------------- |
| Mono             | N/A                  |
| Stereo           | LT, RT               |
| 5.1 Surround     | L, R, C, LFE, LS, RS |

### 2.4 Video deliverables

All video should be delivered at specification unless agreed to with the Roku production team ahead of production.

If your image capture settings are not at the same data rate or higher of the export settings mentioned in 2.4.3, please reach out to Roku Post or let your Post Manager know. In order to prevent up-sampling, your final export should match the data rate that was captured (for example, if the camera captured ProRes 422, then final export should be ProRes 422 or equivalent instead of 4444 XQ).

_Roku Best Practices_

If your capture workflow is different than specified above, please contact Roku Post Production before final mastering begins. It is important to keep master sequences (VAM/CTM) and final deliverables in alignment with dailies capture specifications (i.e. free of any up-scaling, cross-conversions, or up-conversions).

#### 2.4.1 Video formatting

All files should be formatted to start at 00:00:00:00.

Files should begin with program and end on the last frame of the Roku Originals Logo end card.

All video files **<u>MUST NOT</u>** contain any of the following: bars and tone, bumpers, segment recaps or previews, Vertical Interval time code, advertisements, slates, rating cards, FBI warning cards, placards, overlay branding, promotional bugs, informational bugs, watermarks, or website link callouts.

If promotional bugs or watermarks are required by a 3rd party, Roku Content Legal should be notified.

#### 2.4.2 Audio formatting

For the Final Texted Masters, all audio should be contained within the delivered mezzanine file. See the audio settings listed in 2.4.3 for specifications based on delivery codec.

Mixing Specifications:

**The audio channel mapping and tagging of metadata must be verified via a program like QuickTime 7, QuickTime Pro, Telestream Switch or Adobe Media Encoder for all texted and textless masters.**

* If the audio is not labeled with the correct metadata (for instance if all channels are labeled as “C” or “Mono”) this will prevent ingest on Roku’s end and will need to be corrected and re-delivered.
* Incorrectly labeled audio can be manually adjusted in QuickTime Pro without a re-export.

Mixing Specifications:

* Target - 24 LKFS +/- 2 (any average between -22 & -26). Based on ITU-R 1170-3 measurement.
* Audio should not peak above -2 dBfs (True Peak)

#### 2.4.3 Texted video masters

The formatting requested below is a subset of the [Roku Channel Ingest Specifications](https://go.roku.com/rokuchannel-ingest-vod).

<table>
  <thead>
    <tr>
      <th><strong>Video Codec</strong></th>
      <th><strong>ProRes</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Container</td>
      <td>MOV</td>
    </tr>

    <tr>
      <td>Profile</td>
      <td>4444XQ Preferred (If available)<br />ProRes 422 HQ</td>
    </tr>

    <tr>
      <td>Minimum Bitrate</td>
      <td>175-400 mbit/s (based on Profile)</td>
    </tr>

    <tr>
      <td>Landscape aspect ratio</td>
      <td>16:9 (1.77:1) - (no black bars)<br />W3840 x H2160 (UHD)</td>
    </tr>

    <tr>
      <td>Pixel aspect ratio</td>
      <td>Square pixels (1:1)</td>
    </tr>

    <tr>
      <td>Scan type</td>
      <td>Progressive scan type</td>
    </tr>

    <tr>
      <td>Chroma Subsampling</td>
      <td>4:4:4</td>
    </tr>

    <tr>
      <td>Color Space</td>
      <td>BT.709 Legal Video Range (16 to 940)</td>
    </tr>

    <tr>
      <td>Bit depth</td>
      <td>10-bit or 12-bit</td>
    </tr>

    <tr>
      <td>Constant Frame Rate</td>
      <td>23.976p, 24p, 25p, 29.97p, 30p, 50p, 59.94p, 60p</td>
    </tr>

    <tr>
      <td>Native frame rate</td>
      <td>No 3:2 pulldown flags</td>
    </tr>

    <tr>
      <td>Text Track/Captions</td>
      <td>Omit empty embedded text tracks<br />Captions should be delivered as sidecar assets</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th><strong>Audio Codec</strong></th>
      <th><strong>PCM</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Format</td>
      <td>2 Interleaved Tracks or 8 Mono Tracks</td>
    </tr>

    <tr>
      <td>Track Layout</td>
      <td><u>Interleaved</u>: Track 1: 5.1, L-R-C-LFE-Ls-Rs  Track 2: Stereo, LT/RT<br /><u>Mono</u>:   L, R, C, LFE, Ls, Rs, Stereo LT, Stereo RT<br /><strong>7.1 audio is not permitted on any masters at this time</strong></td>
    </tr>

    <tr>
      <td>Sample Rate/Bit Depth</td>
      <td>48000Hz/24-bit</td>
    </tr>

    <tr>
      <td>Channel Mapping & Metadata Tagging</td>
      <td>See 2.4.2 - Verify correct audio channel mapping and metadata tagging.</td>
    </tr>
  </tbody>
</table>

#### 2.4.4 Textless delivery

Textless Masters are a Roku Original-specific deliverable. They protect for any potential distribution outside of the United States.

If your content includes burned-in on screen text, you will be required to deliver a separate Textless Reel or Full Episode. This reel should include clean, text-free versions of any shots that contain burned-in subtitles or graphic text elements. If the show contains a comprehensive graphics package, please strip all graphics and supply the graphics package or elements in Archival. Video and Audio specs should mirror the Texted Masters noted above.

Audio mapping label verification as noted in 2.4.2 must be verified in textless master.

Additionally, if foreign language subtitles cover 30% or more of a given episode, you will be required to deliver a fully textless version of that episode. All episodes should be delivered with the same formatting; if one episode requires a textless master, versus a reel, then all remaining episodes should also be delivered as textless masters.

#### 2.4.5 Final proxy files (clean & visible timecode)

Proxy files are a Roku Original-specific deliverable. They are utilized by multiple internal teams both pre and post launch.

From each Texted Master created, please export following proxy files:

<table>
  <thead>
    <tr>
      <th>Video Codec</th>
      <th>H.264</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Container</td>
      <td>MOV or MP4</td>
    </tr>

    <tr>
      <td>Picture</td>
      <td>(1) Clean & (1) w/Vis.TC UR (1) Series Opener Only</td>
    </tr>

    <tr>
      <td>Bitrate</td>
      <td>5mbit/s (total file size \< 1gb to 2gb)</td>
    </tr>

    <tr>
      <td>Dimensions</td>
      <td>W1920 x H1080 (HD)</td>
    </tr>

    <tr>
      <td>Scan Type</td>
      <td>Progressive scan type</td>
    </tr>

    <tr>
      <td>Color Space</td>
      <td>BT.709 Legal Video Range</td>
    </tr>

    <tr>
      <td>Bit Depth</td>
      <td>10-bit or 12-bit</td>
    </tr>

    <tr>
      <td>Constant Frame Rate</td>
      <td>Should Match Master</td>
    </tr>

    <tr>
      <td>Native Frame Rate</td>
      <td>Should Match Master</td>
    </tr>

    <tr>
      <td>Audio</td>
      <td>Ch.1 Stereo Left, Ch.2 Stereo Right</td>
    </tr>

    <tr>
      <td>Filename</td>
      <td>ShowCode\_ProdNumber\_AirOrder\_Language\_Proxy\_HD\_<br />FN(if applicable)\_Audio\_Timecode(Clean or VisTC)*RevisionDate-v#*(Final or Pre-QC).mov<br /><br />THAM\_101\_AIR\_1\_PROXY\_enUS\_HD\_FN\_2CH\_CLEAN\_20200916\_V4\_FINAL.mov</td>
    </tr>
  </tbody>
</table>

### 2.5 Audio delivery

Audio stems are a Roku Original-specific deliverable. Full audio stem delivery may not be required for each series. Please reach out to Roku Post Production to determine if your series will be required to delivery these materials. As content, formatting, and style will differ from one series to the next, Roku understands that stem delivery may also vary.

#### 2.5.1 Domestic episodic stems

Provided below are the stems required for delivery of each episode/project:

* Mono Dialogue, Music, and Special Effects stems
* Stereo & 5.1 Printmasters
* Stereo & 5.1 M&E - Fully Filled (Scripted Series)
* Stereo & 5.1 Music
* Stereo & 5.1 Dialogue
* Stereo & 5.1 Sound Effects
* Pro Tools Session Files (.ptx)

Provided below are the stems Roku would like to receive, if available (and applicable):

* Stereo & 5.1 Mix minus narration
* Score or Original Composition (pending rights)
* Mono M&E Stems - Opticals, Backgrounds, etc.

All audio should be archived as 24-bit, 48kHz WAV files.

Please see section 2.3.3 for full guidelines on labeling audio files.

ShowCode_ProdNumber_Vers_LangCode_MaterialType_Channel#_SampleRate_BitRate_TC_Channel.wav

**Examples:**

MAMA_102_v04_enUS_PM_Nearfield_2ch_48k_24b_23976.L.wav

_Roku Best Practices_

* Roku requires that all music be cleared for both domestic and international use across all media on all devices.
* Optional tracks (foreign language, grunts, breathing, etc.) are preferred, if applicable
* If budget permits, please create Fully Filled FX stems as part of delivery

### 2.6 Timed text file delivery

Roku Originals content should be delivered in each of the following timed-text formats in order to support the hearing impaired:

* Subtitles: Language solely (no inclusion of sound descriptors)
  * Foreign subtitle files should also include any translated forced narratives that are currently burned into picture in English

* SDH: Language in addition to sound descriptors (no forced narratives)

* FN: Forced Narratives solely

Roku requires closed captions and subtitles in **2** of the [Roku Ingest Specification](https://go.roku.com/rokuchannel-ingest-vod) formats: SRT and WebVTT. The files have to have the same timecode and frame rate as the video and audio delivered. Character encoding MUST be UTF-8.

**Languages & Formats Required:**

English (American, Code: enUS): Subtitles, SDH, & FN

**All files should be labeled as follows:**

ShowCode-ProdNumber-LanguageCode_Format-RevisionDate.srt

**Filename Examples:**

NION-101-enUS_SDH-20190701

NION-101-enUS_FN-20190701

### 2.7 Paper deliverables

Roku’s External Deliverables Hub (“Hub”) is a centralized location for all wrap deliverables documents. If you have not been granted access and will be handling this portion of delivery, please reach out to your Post Manager.

#### 2.7.1 Roku metadata ingest template

Metadata allows Roku to ingest and display all series related information for our customers. Marketing and/or the Roku Content Executive may tweak the information to ensure it’s as effective as possible on the Roku platform.

Please find the most recent Roku metadata templates and guidelines [HERE](https://go.roku.com/rokuchannel-ingest-vod#roku-excel-metadata-guidelines-and-templates).

The required details will include, but are not limited to, the following:

* Show - Title, Description, Primary Spoken Language, Production Companies
* Season - Title, Description (leave blank if not applicable)
* Episode - Title, Production Number, Air Order, Total Run Time (TRT)

Please note that air order and episode titles must be a decision made with your Content Executive. The episode titles must be creatively driven (e.g. not “Episode 1”) and should be written with the show writers or receive writer approval. <u>Episode Titles should be locked after Rough Cut 1s.</u>

#### 2.7.2 Credits documents

Please deliver all of the following items as part of Final Delivery:

1. PNG files relating to the Title Logo and any other logos submitted should be uploaded to [Frame.io](http://frame.io/).

2. *Cast & Crew Metadata Template - Required in .xlsx format should be uploaded to the Hub.
   1. Please label the Cast & Crew document as “Production Final.”

3. Please ensure the Series and all necessary Episodic tabs are included within the same master spreadsheet. Episodes should not be delivered as separate files.

4. Traditional Episodic Credits Lists that detail the specific credits tied to each episode should be uploaded to the Hub. This can either be Excel or Word formatted in a standard traditional scrolling or end-card format.

*Please note that the Cast & Crew Template is for direct ingest into the Roku Channel - please check spelling before submitting. If you need to resubmit the Cast & Crew Template (due to adding/removing credits, spell change, position change, etc.) please email the updated .xlsx to Roku Post upload to the Hub with the changes highlighted. **For cast/crew with multiple credits**, place each on a separate line repeating the cast/crew member name.

#### 2.7.3 Segment rundowns

You will be required to deliver a detailed breakdown of the timecodes pertaining to all segments in each episode. Please utilize the Roku Segment Rundown Template provided in your Kick-Off Delivery Packet.

Roku requires that the timecodes within this document be delivered in HH:MM:SS:FF format. Any spreadsheets submitted without this formatting will not be accepted by Roku.

#### 2.7.4 As Broadcast scripts

Please deliver one set of As Broadcast Scripts for each series to the Hub. As Broadcast Transcript files should have a timecode-based breakdown of each line of dialogue. You are approved to submit the ABS’s in any format that a Roku approved vendor utilizes.

#### 2.7.5 Final font memo

Please deliver one document that details the font name and size utilized for opening credits, identifiers and/or other on-screen text added to each episode (where applicable) to the Hub. If applicable, please also note which vendor created the show logo.

#### 2.7.6 Final vendor list

Please deliver your final version of the Roku Vendor List that you received in the Kick-Off Delivery Packet to the Hub.

#### 2.7.7 Final text spotting list

Please deliver the Text Spotting List that was used to Quality Control the final episodes to the Hub. Please ensure that any changes made during Quality Control are reflected in the final document that is delivered to Roku via The Hub. Please deliver a single excel, via Roku’s template, with episodes separated onto their own tabs.

#### 2.7.8 Episodic delivery checklist

Please deliver the final version of the Roku Delivery Checklist that you received in the Kick-Off Delivery Packet to the Hub. All of the following must be completed:

* All applicable file version dates and delivery locations for each asset
* All Quality Control Start and End/Approval dates for Texted and Textless Masters
* Any assets not being delivered to Roku, as approved by Roku Post, should be identified as such within the “Delivery Destination/Notes” section of each deliverable
* If archival delivery will trail wrap, please indicate when it will be completed and who the primary point person will be to confirm for Roku Post

#### 2.7.9 Music cue sheets

Music Cue Sheets are required for all projects. Please use the cue sheet template found on the American Society of Composers, Authors and Publishers (ASCAP) website linked [here](https://www.ascap.com/help/royalties-and-payment/cue-sheets) or similar cue sheet template when submitting to Roku. The ASCAP template is also available via the Hub in the Production Legal – Scripted folder. Upload completed cue sheets to the Hub. If you have specific questions about Roku requirements for Music Cue Sheets, please contact Sydnee Grossberg at [sgrossberg@roku.com](mailto:sgrossberg@roku.com).

#### 2.7.10 Not applicable form

In cases where a paper deliverable is non-applicable to the project, please upload the Roku Not Applicable Form to the Hub with a written explanation of why this deliverable does not apply.

## 3. Archival

Archival delivery is not required for all acquired content. Please reach out to Roku Post Production to determine if your series will be required to delivery these materials.

### 3.1 High resolution masters & source material

Reach out to Roku Post if you do not see a pre-existing folder structure on [Frame.io](http://frame.io/) for Final Archive. It is required that you utilize the [Frame.io Transfer App](https://support.frame.io/en/articles/3978929-frame-io-transfer-download-and-upload-files-folders-and-projects) for your uploads.

When adding video assets to [Frame.io](http://frame.io/), do not create additional sub-folders. Keep all media (proxies, texted/textless masters) only in the folders provided. Audio files should be grouped by episode (where applicable).

The following are required deliverables that must be uploaded to the Final Archive folder on [Frame.io](http://frame.io/):

Required:

* Final Texted Masters
* Final Textless Masters
* H.264 Proxies
* Final Audio Stems
* Graphic Elements – Main title card, credit PNGs, end credit PNGs, on-screen graphics, interstitials, etc.

Any and all series that are wholly owned by Roku will require delivery of Video Asset Management (VAM), Color Timed Masters (CTM), and final Visual Effects shots (where applicable) via LTO9 or greater. LTOs should be formatted LTFs and include a digital manifest for each tape. For all licensed or co-produced content, please reach out to your Roku Post Production Manager to discuss the specific requirements and expectations for each series. These manifests should be uploaded to The Hub.

For all licensed or co-produced content, please reach out to your Roku Post Production Manager to discuss the specific requirements and expectations for each series.

* VAMs – Un-color-corrected, textless, DPX or TIFF format (**Compress** to .ZIP or .TAR)
  * Associated Avid bins or Edit Decision Lists

* CTM – Color-corrected, textless, DPX or TIFF format (**Compress** to .ZIP or .TAR)
  * Associated Look-up Tables or color-grading files

* Final Visual Effects Shots – Un-color-corrected preferred (if applicable)

## 4. Change log

### V3.0

* 2.1 - Roku Originals end card updated
* 2.3.1 - Paper deliverable labeling revised
* 2.4.3 - ProRes 422 HQ added as Profile option for Texted Video Master
* 2.4.4 - If one episode in a series requires a full textless asset delivery, now all episodes in that series will require a fully textless master
* 2.7.1 - Link to current metadata templates and guidelines added
* 2.7.10 -'Not Applicable' Form added
* 3.1 - LTO9 is the newest version of the Linear Tape-Open and this is the version that should always be used

### V2.0

* Multiple Sections - 5.1 & Stereo Mix required. 7.1 mix no longer being requested.
* 2.3.2 - Replaced Mexican Spanish (esMX) labeling with Neutral Latin American Spanish (esMX)
* 2.4.3 - Text Track/Captions formatting updated
* 2.4.5 - Final Proxy file size changed to a maximum of 2gb
* 2.6 - Replaced Mexican Spanish (esMX) labeling with Neutral Latin American Spanish (esMX); Removed SCC file requirement
* 2.6.1 - Audio Deliverables updated
* 2.7.1 - Roku Ingest Specs Link added for access most updated Metadata Template
* 3.1 - Frame.io Transfer App required for all uploads to the app

[v1.9 intentionally skipped)

### V1.8

* 2.1 – Roku Originals Logo must be placed last in end credits; download link provided
* 2.3.2 – Master Video Deliverables file naming modified
* 2.3.3 – Master Audio Deliverables file naming modified
* 2.4.2 – Audio Channel mapping and tagging of metadata must be verified
* 2.4.3 – Texted Video Masters audio track layout updated
* 2.5.4 – Audio mapping label verification as noted in 8.4.2 must be verified in Textless Master
* 3.1 – [Frame.io](http://frame.io/) & High Resolution Masters instructions revised

### V1.7

* 2.2.1 – Text Spotting List updated
* 2.3 – File naming format for both paper and media deliverables modified.
* 2.5.5 – Additional proxy deliverable added.
* 2.7 – Replaced Latin American (LAS) labeling with Mexican Spanish (esMX).
* 2.8 – Further clarification provided across paper deliverables.

### V1.6 (Skipped to line up with April 2022 update to all specs)

### V1.5 – December 2021

* 2.6.2 – Audio Description files added as a new deliverable
