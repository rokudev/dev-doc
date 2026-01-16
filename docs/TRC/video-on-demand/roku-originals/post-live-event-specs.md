---
title: "Live event VOD delivery specifications"
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

# Live event VOD delivery specifications

*Version 2.0 - September 2023*

## 1. General overview

The Roku Channel is committed to providing the highest quality content and values its Partners for helping to achieve this goal. The Roku Originals Post Production Delivery Specifications outline the best practices for the Partner at this time. This document and the requirements are subject to change at Roku’s sole discretion. 

The specifications below encompass deliverables for Roku Originals Post Production, as they relate to VOD delivery of Live Events/Series. It is not comprehensive of all deliverables that may be required as part of your agreement. Please continue to utilize the [The Roku Channel Ingest Specifications](/trc-docs/video-on-demand/ingest-specifications.md) document for all other areas noted below: 

- Ad Policy
- Kids Directed Content Policy 
- External Branding and Calls to Action 
- Artwork and Marketing Deliverables 
- File Delivery Setup

## 2. Post kick-off

Post Producer resumes should be sent to Roku for prior approval. One week prior to Production start, please reach out to Roku Post Production to set up a kick-off call. In prep for this call, please review this full specification document so that we can address any follow up questions you may have. 

### 2.1 Startup documents

Additionally, please make sure to send the preliminary versions of all documents noted below to Roku Post Production prior to the first day of Production. Available templates have been provided in the Post Kickoff zip file. 

1. Post Production Contact List 
2. Preliminary Vendor List 

#### 2.1.1 Episode numbering

- **Production Number**: 3-digit number that reflects season number and sequencing of shot material (101, 102, etc.)
  - One-off Specials should contain the prefix “SP” and begin with 100. (SP100, SP200, etc.).
  
- **Air Order**: 1-digit number that reflects the order in which each episode will air. 

### 2.2 Notifications workflow

- Once in production, any changes to the post schedule/calendar must be communicated to Roku Post Production immediately (within 24 hours) 
- **QC Delivery and Final Delivery dates cannot shift without written approval by Roku Post Production** 

### 2.3 Misc

- Please be sure to include the full name of the show in the subject line of all email correspondence.
- Do not include the Roku name or logo on any documents (including contact sheets, call sheets, PR’s, casting notices etc.) without written permission from Roku Production.
- The Roku Contact sheet is for Studio use and should not be distributed widely 

### 2.4 Roku marketing

Please reach out to the Roku Creative Studio ([dlrokuoriginalmarketingcreative@roku.com](mailto:dlrokuoriginalmarketingcreative@roku.com)) to determine what marketing deliverables will be required for your show. Marketing will be directly involved in the Main Title treatment creative process. 

### 2.5 Roku localization

Roku’s Localization Team may handle the creation of foreign language subtitles and audio descriptions, dependent on the series. At the beginning of production, please reach out to Localization ([Localizationoperations@roku.com](mailto:Localizationoperations@roku.com)) to verify what deliverables will be required for your project. 

## 3. Production

Each production will be required to submit a Dailies Memo prior to the commencement of principal photography. The memo should confirm camera(s) being utilized as well as the workflow for processing all captured video and audio. 

### 3.1 Capture specifications

- Unless otherwise approved by Roku production prior to the commencement of principal photography, you will be required to capture at a minimum resolution of HD (1920x1080) and an aspect ratio of 16:9 to match final deliverables specs. Any changes to the required resolution or aspect ratio must be approved by Roku. 
- All material should be captured, transferred, and mastered in a progressive frame rate. Please do not apply any cross-conversions to content. 
- Please do not apply in-camera upscaling or de-squeezing to any camera masters. If your desire is to work with cameras that do not natively capture in HD, please reach out to Roku Post Production to discuss workflow options. 

## 4. Deliverables

The specifications below detail all deliverables required for each Roku production. A production will not be considered wrapped until all assets below are delivered and confirmed by the Roku Post Production team. If you have any questions, please do not hesitate to reach out to Roku Post Production. 

### 4.1 Roku originals logo

All content that will be branded as a Roku Original series will be required to add the Roku Originals logo to their end credits. The Roku Originals Logo should be placed last in the end credits. The Roku Originals end logo is available [HERE.](https://f.io/jr_v0Z3C) 

### 4.2 Filename specifications

#### 4.2.1 Papers deliverables

Paper deliverables should all be uploaded to the “Hub” platform noted above. Please adhere to the following naming conventions when delivering documents to the Hub:

- ShowTitle_PTID_DocumentName_aoDate 

 Your PTID (Provider Title ID) will be found on the Hub in the name of your Show Deliverables Folder. If the document is a final document, it should be labeled with ‘Final’ instead of the date. 

- Example: TheBestRokuShow_SC00000_PostVendorList_FINAL 

 *For any redeliveries of post deliverables, please include the date in addition to “FINAL” 

#### 4.2.2 Master video deliverables

All master* video files should be labeled as follows: 

ShowCode_ProdNumber_AirOrder_Version_LangCode_Resolution_ColorSpace_FN_Audio_FrameRate_Date-v#.mov 

Example: 

NION_101_AIR_1_TXTD_enUS_UHD_SDR_FN_2CH_23976p_20190701-v2.mov 

Production Number = As listed on Post Grids 

Air Order = Please list even if the Air Order is the same as the Production Number 

| **File Name Segment** | **File Name Abbreviation**                                   |
| --------------------- | ------------------------------------------------------------ |
| Version               | TXTD (Texted), TXLS (Textless), or PROXY                     |
| Language              | enUS (American English) or esMX (Mexican Spanish)            |
| Resolution            | UHD or HD + Color Space = SDR or HDR                         |
| Forced Narratives     | FN (Present), NC (none present)                              |
| Audio                 | 2CH (Interleaved) or 8CH (5.1 and Stereo) - **7.1 audio not permitted on any masters at this time** |
| Frame Rate            | 23976p, 24p, 25p, 2997p, 30p, 50p, 5994p, 60p                |
| Revision Date         | Please list in the following format: YYYYMMDD                |
| Version Number        | To indicate the current or previous passes of QC and track the latest version for delivery |

 *See 4.3.6 for Proxy file naming. 

#### 4.2.3 Master audio deliverables

Audio materials should be named to include all appropriate information: 

ShowCode_ProdNumber_Vers_Date_LangCode_MaterialType_Channel#_SampleRate_BitRate_TC_Channel.mov

**Examples:** 

MAMA_102_v04_20220919_enUS_PM_Nearfield_2ch_48k_24b_23976.L.wav 

MAMA_102_v03_20220919_esMX_FXSTEM_6ch_48k_24b_23976.R.wav 

MAMA_102_v02_20220919_esMX_ME_Nearfield_6ch_48k_24b_23976.C.wav 

| **Material Type**                             | **Abbreviation**                  |
| --------------------------------------------- | --------------------------------- |
| Printmaster                                   | PM                                |
| Music & Effects                               | ME                                |
| Audio Stem                                    | FXStem, MXStem, DIAStem, FFFXStem |
| Optional Tracks                               | OPT, OPTA, OPTB, GRP              |
| Add’l Detail (Dialogue Guide Track, ADR, etc) | GUIDE, ADR                        |
|                                               |                                   |
| **Channel Type**                              | **Abbreviation**                  |
| Mono                                          | Mono                              |
| Stereo                                        | 2CH                               |
| 5.1 Surround                                  | 6CH                               |
| 7.1 Surround                                  | 8CH                               |
| Atmos                                         | Atmos                             |
|                                               |                                   |
| **Track Assignment**                          | **Abbreviation**                  |
| Mono                                          | N/A                               |
| Stereo                                        | LT, RT                            |
| 5.1 Surround                                  | L, R, C, LFE, LS, RS              |

### 4.3 VOD video deliverables

All video masters should be delivered at specification unless agreed to with the Roku production team ahead of production. 

If your image capture settings are not at the same data rate or higher of the export settings mentioned in 8.4.3, please reach out to Roku Post or let your Post Manager know. In order to prevent up-sampling, your final export should match the data rate that was captured (for example, if the camera captured ProRes 422, then final export should be ProRes 422 or equivalent). 

#### 4.3.1 VOD video formatting

All files should be formatted to start at 00:00:00:00. 

Files should begin with program and end on the last frame of the Roku Originals logo end card. 

All video files **MUST NOT** contain any of the following: bars and tone, bumpers, segment recaps or previews, VITC time code, advertisements, slates, rating cards, FBI warning cards, placards, overlay branding, promotional bugs, informational bugs, watermarks, or website link callouts. 

If promotional bugs or watermarks are required by a 3rd party, Roku Content Legal should be notified. 

#### 4.3.2 VOD ad breaks

Each project will be required to deliver the VOD video master follows: 

- All ads should be removed from the program. 

- Ad breaks should be formatted as one second of black (no text permitted). Fade outs/ins are permitted. 

The exact timecode of each ad break, in HH:MM:SS:FF format, will be required in both the Segment Rundown and Metadata deliverables. Both templates were provided in the Post Kickoff Deliverables Packet. Please reach out to Roku Post if you did not receive one. 

#### 4.3.3 VOD audio formatting

For the Final Texted Masters, all audio should be contained within the delivered mezzanine file. See the audio settings listed in 2.3.4 for specifications based on delivery codec. 

**The audio channel mapping and tagging of metadata must be verified via a program like QuickTime 7, QuickTime Pro, Telestream Switch or Adobe Media Encoder for all texted and textless masters.**

- If the audio is not labeled with the correct metadata (for instance if all channels are labeled as “C” or “Mono”) this will prevent ingest on Roku’s end and will need to be corrected and re-delivered. 
- Incorrectly labeled audio can be manually adjusted in QuickTime Pro without a re-export. 

 Mixing Specifications: 

- Target - 24 LKFS +/- 2 (any average between -22 & -26). Based on ITU-R 1170-3 measurement. 
- Audio should not peak above -2 dBfs (True Peak) 

#### 4.3.4 VOD texted video masters

The formatting requested below is a subset of [The Roku Channel Ingest Specifications](/trc-docs/video-on-demand/ingest-specifications.md). 


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
<td>422 HQ</td>
</tr>
<tr>
<td>Minimum Bitrate</td>
<td>175 mbit/s or higher</td>
</tr>
<tr>
<td>Landscape aspect ratio</td>
<td>16:9 (1.77:1) - (no black bars)<br />W1920 x H1080 (HD)</td>
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
<td>4:2:2</td>
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
<td><strong>Audio Codec</strong></td>
<td><strong>PCM</strong></td>
</tr>
<tr>
<td>Format</td>
<td>1 Interleaved Track or 2 Mono Tracks</td>
</tr>
<tr>
<td>Track Layout</td>
<td>Interleaved: Track 1: Stereo, LT/RT<br />Mono: Track 1: Stereo LT, Track 2: Stereo RT<br /><strong>7.1 audio is not permitted on any masters at this time</strong></td>
</tr>
<tr>
<td>Sample Rate/Bit Depth</td>
<td>48000Hz/24-bit</td>
</tr>
<tr>
<td>Channel Mapping &amp; Metadata Tagging</td>
<td>See 2.4.2 -Verify correct audio channel mapping and metadata tagging.</td>
</tr>
</tbody>
</table>


#### 4.3.5 Textless delivery

Textless Reels/Masters are a Roku Original-specific deliverable. They provide our Marketing team with clean assets to use in preparation for the VOD launch (where applicable). 

If your content includes burned-in on screen text, you will be required to deliver a separate Textless Reel or Full Episode. This reel should include clean, text-free versions of any shots that contain burned-in subtitles or graphic text elements. If the show contains a comprehensive graphics package, please strip all graphics and supply the graphics package or elements in Archival. Video and Audio specs should mirror the Texted Masters noted above. 

Audio mapping label verification as noted in 2.4.2 must be verified in textless master. 

Additionally, if foreign language subtitles cover 30% or more of a given episode, you will be required to deliver a fully textless version of that episode. 

#### 4.3.6 VOD final proxy files (clean & visible timecode)

Proxy files are a Roku Original-specific deliverable. They are utilized by multiple internal teams both pre and post launch. 

From each Texted Master created, please export following proxy files: 


<table>
<thead>
<tr>
<th><strong>Video Codec</strong></th>
<th><strong>H.264</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Container</td>
<td>MOV or MP4</td>
</tr>
<tr>
<td>Picture</td>
<td>(1) Clean &amp; (1) w/Vis.TC UR</td>
</tr>
<tr>
<td>Bitrate</td>
<td>5mbit/s (total file size &lt; 1gb to 2gb)</td>
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
<td>ShowCode_ProdNumber_AirOrder_Language_Proxy_HD_ FN(if applicable)_Audio_Timecode(Clean or VisTC)_RevisionDate-v#_(Final or Pre-QC).mov<br /><br /> THAM_101_AIR_1_PROXY_enUS_HD_FN_2CH_CLEAN_20200916_V4_FINAL.mov</td>
</tr>
</tbody>
</table>


### 4.4 VOD audio delivery

Audio stems are a Roku Original-specific deliverable. Full audio stem delivery may not be required for each series. Please reach out to Roku Post Production to determine if your series will be required to delivery these materials. As content, formatting, and style will differ from one series to the next, Roku understands that stem delivery may also vary. 

#### 4.4.1 Domestic episode stems

Provided below are the stems Roku would like to receive, if available (and applicable): 

- Mono Dialogue, Music, and SFX stems 
- Stereo Printmasters 
- Stereo Music & Effects 
- Stereo Music 
- Stereo Dialogue 
- Stereo Sound Effects 

All audio should be archived as 24-bit, 48kHz WAV files. If Final Mix was 7.1, stems should be delivered as 7.1 as well. However, stem and master delivery to Roku must be in 5.1 and/or Stereo ONLY. 

Please see section 4.2.3 for full guidelines on labeling audio files. 

ShowCode_ProdNumber_Vers_LangCode_MaterialType_Channel#_SampleRate_BitRate_TC_Channel.mov 

**Examples:**

MAMA_102_v04_enUS_PM_Nearfield_2ch_48k_24b_23976.L.wav 

*Roku Best Practices* 

- Roku requires that all music be cleared for both domestic and international use across all media on all devices. 

### 4.5 VOD timed text file delivery

Roku Originals Live Event content should be delivered in each of the following timed-text formats in order to support the hearing impaired: 

- Subtitles: Language solely (no inclusion of sound descriptors) 
  - Foreign subtitle files should also include any translated forced narratives that are currently burned into picture in English 

- SDH: Language in addition to sound descriptors (no forced narratives) 

All timed-text files should be formatted to match the final VOD Video Master, not the live broadcast master. The files must have the same timecode and frame rate as the video and audio delivered. 

Roku requires closed captions and subtitles in **SRT** formats. Character encoding MUST be UTF-8. 

**Languages & Formats Required:**

English (American, Code: enUS): Subtitles, SDH, & FN 

Spanish* (Neutral Latin American Spanish, Code: esMX): Subtitles (no SDH or FN necessary) 

*If applicable, and dependent on Roku’s distribution rights 

**All files should be labeled as follows:**

ShowCode-ProdNumber-LanguageCode_Format-RevisionDate 

**Filename Examples:**

NION-101-esMX_SUB-20190701 

NION-101-enUS_SDH-20190701 

NION-101-enUS_FN-20190701 

### 4.6 Paper deliverables

Roku’s External Deliverables Hub (“Hub”) is a centralized location for all wrap deliverables documents. If you have not been granted access and will be handling this portion of delivery, please reach out to your Post Manager. 

#### 4.6.1 Roku metadata ingest template

Metadata allows Roku to ingest and display all series related information for our customers. Marketing and/or the Roku Content Executive may tweak the information to ensure it’s as effective as possible on the Roku platform. 

The required details will include, but are not limited to, the following: 

- Show - Title, Description, Primary Spoken Language, Production Companies 
- Season - Title, Description (leave blank if not applicable) 
- Episode - Title, Production Number, Air Order, Total Run Time (TRT) 

Please note that air order and episode titles must be a decision made with your Content Executive. The episode titles must be creatively driven (e.g. not “Episode 1”) and should be written with the show writers or receive writer approval. <u>Episode Titles should be locked after Rough Cut 1s</u>.

Please ensure you have the most up to date template for Metadata which can be found here within the [Roku Ingest Specs site](/trc-docs/video-on-demand/ingest-specifications.md#roku-excel-metadata-guidelines-and-templates).

#### 4.6.2 Credits documents

Please deliver all of the following items as part of Final Delivery: 

1. PNG files relating to the Title Logo and any other logos submitted should be uploaded to [Frame.io](http://frame.io/). 
1. Traditional Episodic Credits Lists that detail the specific credits tied to each episode should be uploaded to the Hub. This can either be Excel or Word formatted in a standard traditional scrolling or end-card format. 

#### 4.6.3 Segment rundowns

You will be required to deliver a detailed breakdown of the timecodes pertaining to all segments in each episode. Please utilize the Roku Segment Rundown Template provided in your Kick-Off Delivery Packet. 

Roku requires that the timecodes within this document be delivered in HH:MM:SS:FF format. Any spreadsheets submitted without this formatting will not be accepted by Roku.  

#### 4.6.4 As broadcast scripts

Please deliver one set of As Broadcast Scripts for each series to the Hub. ABS files should reflect all changes made during the live broadcast, but do not need to be created by an outside vendor. 

#### 4.6.5 Final font memo

Please deliver one document that details the font name and size utilized for opening credits, identifiers and/or other on-screen text added to each episode (where applicable) to the Hub. If applicable, please also note which vendor created the show logo. 

#### 4.6.6 Episodic delivery checklist

Please deliver the final version of the Roku Delivery Checklist that you received in the Kick-Off Delivery Packet to the Hub. All of the following must be completed: 

- All applicable file version dates and delivery locations for each asset 
- Any assets not being delivered to Roku, as approved by Roku Post, should be identified as such within the “Delivery Destination/Notes” section of each deliverable 
- If archival delivery will trail wrap, please indicate when it will be completed and who the primary point person will be to confirm for Roku Post 

#### 4.6.7 Music cue sheets

Music Cue Sheets are required for all projects. Please use the cue sheet template found on the ASCAP website linked [here](https://www.ascap.com/help/royalties-and-payment/cue-sheets) or similar cue sheet template when submitting to Roku. The ASCAP template is also available via the Hub in the Production Legal – Scripted folder. Upload completed cue sheets to the Hub. If you have specific questions about Roku requirements for Music Cue Sheets, please contact Sydnee Grossberg at [sgrossberg@roku.com](mailto:sgrossberg@roku.com). 

## 5. Archival

Archival delivery is not required for all Live Event content. Please reach out to Roku Post Production to determine if your series will be required to deliver these materials. 

### 5.1 High resolution masters & source material

Any and all series that are wholly owned by Roku will require delivery of archival media (where applicable) via LTO7 or greater. LTOs should be formatted LTFs and include a digital manifest for each tape. 

When adding assets to [Frame.io](http://frame.io/) folders, do not create additional sub-folders for episodes. Keep all media (proxies, texted/textless masters) only in the specified folder. 

The following are required deliverables that must be uploaded to the Final Archive folder on [frame.io](http://frame.io/): 

Required: 

- Final Texted Masters 
- Final Textless Masters/Reels 
- Final Audio Stems 
- Graphic Elements – Main title card, credit PNGs, end credit PNGs, on-screen graphics, interstitials, etc.