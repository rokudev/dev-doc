---
title: Trailers
excerpt: MovieLabs-only trailer delivery requirements, including parent-title linking.
deprecated: false
hidden: true
metadata:
  robots: index
---
<Callout icon="far fa-bell-exclamation" theme="warn">
  ### Current trailer support is limited to a single trailer at a movie or series level only. Season and episode level trailers are not currently supported.
</Callout>

## Overview

Roku accepts trailers **exclusively via MovieLabs delivery.** Trailers are treated as **separate entities** from their parent content and are displayed on-platform at the movie or series level.

Much of the video, audio, and general delivery guidance in this document mirrors the [general Video Specification](https://developer.roku.com/dev/update/docs/video-requirements) and [Audio Specification](https://developer.roku.com/dev/update/docs/audio-requirements) — this doc calls out only trailer-specific requirements and deltas. Where a rule is copied inline below (e.g., "full program only" rules), it is intentionally kept in sync with those specs rather than a fork; if the two ever diverge, the general specs are authoritative for non-trailer-specific rules.

## Delivery Method

- Trailers **must** be delivered via **MovieLabs** (MEC/MMC/Avails) exclusively — no legacy delivery path is supported.
- Each trailer **must** be delivered with its **own** MEC, MMC, and Avails — a trailer does not inherit these from its parent title.

***

## Avails Requirements

**Avails are required to publish a trailer.** A trailer will not go live on Roku Channel without an associated avail — this is a publish-blocking requirement, not merely preferred. See [Avails and Committed Title Lists for The Roku Channel](https://developer.roku.com/dev/update/docs/title-avail-specifications) for the full submission process.

**Trailers intended to be viewable in front of the paywall** (i.e., accessible without an active subscription, even though tied to SVOD content) **require an FVOD availability window.** The FVOD window **must** be fully contained within an active SVOD window for the trailer's parent title — Roku does not support FVOD-only availability. See [FVOD submissions](https://developer.roku.com/dev/update/docs/unlocking-svod-content-as-free-fvod) for the complete FVOD window rules, valid/invalid examples, and delivery instructions.

***

## MEC (Media Entertainment Core)

A valid MEC per MovieLabs schema is **required** for each trailer.

- `WorkType` **must** be delivered as `promotion`.
- The `Parent` element **must** be present to link the trailer to its parent program (movie or series).
- The `@relationshipType` attribute is expected to be `ispromotionfor`.
- `ParentContentID` **must** be the **exact** `ContentID` of the movie or series. IDs are **case-sensitive** and must match exactly, or the trailer will fail to link to its parent program.

```xml
    <md:WorkType>promotion</md:WorkType>
...
    <md:Parent relationshipType="ispromotionfor">
      <md:ParentContentID>md:cid:org:roku:1234567_89_00</md:ParentContentID>
    </md:Parent>
```

***

## MMC (Media Manifest Core)

A valid MMC per MovieLabs schema is **required** for each trailer.

Roku **prefers** that the `CardsetList` element be included, with `Cardset` `Type` set to `Trailer`, to further identify the promotional video as a trailer.

- This is **not strictly required** — trailers will still display on-platform if `CardsetList` is omitted.

```xml
<md:CardsetList>
  <md:Cardset>
    <md:Type>Trailer</md:Type>
  </md:Cardset>
</md:CardsetList>
```

***

## Video

### Content Standards

- Trailers **must** accurately represent the main program.
- Trailer content **must** be suitable for a general audience. **"Red Band" trailers are not accepted:**
  - Trailers **must not** contain nudity or graphic sexual content.
  - Trailers **must not** contain profanity or objectionable language.
  - Trailers **must not** contain graphic violence.

### Program Content & Editorial

Trailer videos **must** be **full program only**:

- No bars/tone or slates at the start
- No textless video after the end
- No FBI warnings or MPAA cards
- No promotional material referencing theatrical, home video, or streaming release dates
- Calls to action (CTAs) or links to external platforms/sites (including QR codes) are **not permissible** and must be removed prior to delivery

### Aspect Ratio & Frame

- HD video content **must** be delivered in a 16:9 container.
- **Full-frame presentation (1.78 aspect ratio) is preferred** whenever available.
- Letterboxed 16:9 is allowed but **should be minimized**.
- SD 16:9 content **must not** be delivered in a 4:3 container with letterboxing.

### File Quality

- **High-quality mezzanine-level files are preferred** — the highest bitrate and resolution available should be used.

***

## Audio

- Trailer audio **must** be delivered in a language that is also present in the main program (i.e., at least one trailer audio language must match one of the main program's delivered audio languages). A trailer **is not required** to include a separate audio track for every language delivered on the main program.

***

## Artwork

- Each trailer **must** include a thumbnail image: a clear, **textless 16:9** image sourced directly from the trailer video.

**Note on scope:** unlike parent movie/series content — which requires up to six image types (Key Art, Box Cover, Poster, Background, etc. — see the [Artwork Specification](https://developer.roku.com/dev/update/docs/artwork-requirements)) — trailers require **only this single thumbnail image type**. No other trailer-specific artwork is needed.

***

## On-Platform Trailer Experience

### Movie Trailer Experience

Clickable trailer button on a movie details page.

![Movie trailer button](https://image.roku.com/ZHZscHItMTc2/movie-trailer-button.png)

### TV Trailer Experience

Clickable trailer button on a series details page.

![TV trailer button](https://image.roku.com/ZHZscHItMTc2/tv-trailer-button.png)

### Premium Subscriptions Page Trailer Experience

Auto-play trailer experience within the branded Premium Subscriptions publisher page. **Auto-play trailers apply only** to Premium Subscriptions content within the branded publisher page.

![Premium Subscriptions auto-play trailer](https://image.roku.com/ZHZscHItMTc2/trailer-glow-up-small.gif)

***

## Glossary

| Term                                   | Definition                                                                                                                                                                                                                                                        |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MEC**                                | Media Entertainment Core — the MovieLabs metadata schema describing the content itself (title, work type, parent/child relationships, etc.).                                                                                                                      |
| **MMC**                                | Media Manifest Core — the MovieLabs schema describing the manifest of deliverable assets (video, audio, images) associated with a title.                                                                                                                          |
| **Avails**                             | EMA Avails — the metadata format expressing licensing/availability terms (territory, window, rights) for a piece of content.                                                                                                                                      |
| **ParentContentID / relationshipType** | The mechanism by which a trailer's MEC links back to its parent movie or series: `relationshipType="ispromotionfor"` declares the relationship, and `ParentContentID` supplies the exact, case-sensitive ID of the parent title.                                  |
| **Cardset**                            | An MMC element used to categorize a promotional asset (e.g., tagging a video as a `Trailer`) beyond its base `WorkType`.                                                                                                                                          |
| **Red Band trailer**                   | Industry term for a trailer containing mature content (graphic violence, nudity, strong language) not suitable for general audiences. Not accepted by Roku.                                                                                                       |
| **Avails** _(publish requirement)_     | An availability submission required before a trailer can go live — distinct from the EMA Avails metadata format referenced above; see [Avails and Committed Title Lists](https://developer.roku.com/dev/update/docs/title-avail-specifications).                  |
| **FVOD**                               | Free Video on Demand — a license type allowing temporarily free access to otherwise-SVOD content; required for trailers viewable in front of the paywall. See [FVOD submissions](https://developer.roku.com/dev/update/docs/unlocking-svod-content-as-free-fvod). |
