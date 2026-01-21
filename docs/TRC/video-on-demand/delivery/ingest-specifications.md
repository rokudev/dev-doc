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
