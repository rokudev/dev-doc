---
title: Trailer delivery
deprecated: false
hidden: true
metadata:
  robots: index
---
Roku accepts trailers exclusively via MovieLabs delivery. Trailers are treated as separate entities from their parent content and are displayed on platform at the movie or series level. Each trailer must be delivered with its own MEC, MMC, and avails.

#### MEC

A valid MEC per MovieLabs schema is required for each trailer. The `WorkType` must be delivered as `promotion` and the `Parent` element must be present to link the trailer to its parent program (movie or series). The `@relationshipType` attribute is expected to be `ispromotionfor` and the `ParentContentID` must be the exact `ContentID` of the movie or series. IDs are case sensitive and must match exactly for the trailer to accurately link to the program.

```xml
    <md:WorkType>promotion</md:WorkType>
...
    <md:Parent relationshipType="ispromotionfor">
      <md:ParentContentID>md:cid:org:roku:1234567_89_00</md:ParentContentID>
    </md:Parent>
```

#### MMC

A valid MMC per MovieLabs schema is required for each trailer. Roku prefers that the `CardsetList` element be included to further identify the promotional video as a trailer, with the `Cardset` `Type` value set to `Trailer`. This is not strictly required. Trailers will still display on platform if omitted.

```xml
<md:CardsetList>
  <md:Cardset>
    <md:Type>Trailer</md:Type>
  </md:Cardset>
</md:CardsetList>
```

#### Video

- Trailers must accurately represent the main program
- Trailer content must be suitable for a general audience. "Red Band" trailers are not accepted:
  - trailers must not contain nudity or graphic sexual content
  - trailers must not contain profanity or objectionable language
  - trailers must not contain graphic violence
- Trailer videos must be **full program only**:
  - no bars/tone or slates at the start
  - no textless video after the end
  - no FBI warnings or MPAA cards
  - no promotional material including references to theatrical, home video, or streaming release dates
  - calls to action (CTAs) or links to external platforms or sites (including QR codes) are not permissible and must be removed from the video prior to delivery to Roku
- HD video content must be delivered in a 16:9 container
- Full-Frame presentation (1.78 aspect ratio) is preferred whenever available
- Letterboxed 16:9 is allowed but should be minimized
- SD 16:9 content must not be delivered in a 4:3 container with letterboxing
- High-quality mezzanine level files are preferred with the highest bitrate and highest resolution possible

#### Audio

- Audio of trailers must match an audio language present in the main program

#### Artwork

- Each trailer thumbnail image must be a clear, textless 16:9 image sourced from the trailer video

**Movie trailer experience**

Highlighted example of the clickable trailer button on a movie details page

![movie-trailer-button](https://image.roku.com/ZHZscHItMTc2/movie-trailer-button.png)

**TV trailer experience**

Highlighted example of the clickable trailer button on a series details page

![tv-trailer-button](https://image.roku.com/ZHZscHItMTc2/tv-trailer-button.png)

**Premium Subscriptions page trailer experience**

Highlighted example of the auto-play trailer experience in the branded Premium Subscriptions publisher page. Auto-play trailers will apply to Premium Subscriptions content within the branded publsiher page only

![ps-auto-play-trailer](https://image.roku.com/ZHZscHItMTc2/trailer-glow-up-small.gif)