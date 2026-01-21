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