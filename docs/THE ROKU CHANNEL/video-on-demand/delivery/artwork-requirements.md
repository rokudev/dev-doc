---
title: Artwork
excerpt: Required image types, resolutions, and aspect ratios by content type.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Roku supports **six image types**, each used in a different location within Roku Channel. Roku **prefers** to receive all applicable image types whenever possible.

> **Note:** This spec previously described "three image types." That count is out of date — the table below reflects all six currently in use (Key Art, Box Cover \[Series], Box Cover \[Movies], Poster Art, Background Art, Episode Art).

**All image types share the following delivery requirements**, regardless of type:

- **Format:** JPEG or PNG
- **Color space:** RGB
- **Resolution (density):** 72ppi
- **File extension:** `.jpg`, `.jpeg`, or `.png`

Beyond these shared rules:

- Images **must** meet or exceed the **minimum** resolution defined for their image type.
- Images **must** be delivered in the **exact** aspect ratio defined for their image type — no cropping tolerance.
- Deliver at Roku's **preferred** resolution where possible, to avoid delays in publishing.

***

## Image Types

| Image Type         | Aspect Ratio | Preferred Resolution   | Min Resolution | Max Resolution | Metadata Field |
| ------------------ | ------------ | ---------------------- | -------------- | -------------- | -------------- |
| Key Art            | 16:9         | 1920×1080 or 3840×2160 | 1920×1080      | 3840×2160      | `keyart`       |
| Box Cover (Series) | 4:3          | 2560×1920              | 1600×1200      | 2560×1920      | `boxcover`     |
| Box Cover (Movies) | 3:4          | 1920×2560              | 1200×1600      | 1920×2560      | `boxcover`     |
| Poster Art         | 2:3          | 2000×3000              | 2000×3000      | 2000×3000      | `poster`       |
| Background Art     | 16:9         | 1920×1080 or 3840×2160 | 1920×1080      | 3840×2160      | `background`   |
| Episode Art        | 16:9         | 1920×1080 or 3840×2160 | 1920×1080      | 3840×2160      | `thumbnail`    |

_The Metadata Field column reflects the field name used to tag each image type in delivery metadata — not a separate description._

> **Note on Poster Art:** unlike other image types, Poster Art has no tolerance range — preferred, minimum, and maximum resolution are all identical (2000×3000). This is intentional, not a copy error: Poster Art must be delivered at this exact resolution.

### Key Art

16:9 artwork that appears when browsing Roku Channel. **Must** include the title treatment (a graphic showing the full title of the asset) and the title treatment text **must** be visible on the image.

### Box Cover (Series)

4:3 artwork for future Roku Channel browsing and/or third-party platforms. **Not currently required** for distribution to Roku Channel. Must include the title treatment. Used for **series only**.

### Box Cover (Movies)

3:4 artwork for future Roku Channel browsing and/or third-party platforms. **Not currently required** for distribution to Roku Channel. Must include the title treatment. Used for **movies only**.

### Poster Art

2:3 artwork that can appear when searching on Roku or Roku Channel. Must include the title treatment.

### Background Art

16:9 artwork used as the background of the details page for a series or movie. **Must NOT** contain any text.

### Episode Art

16:9 artwork representing an episode without spoilers — typically a still from the episode. **Must NOT** contain any text.

***

## Minimum Art Requirements by Content Type

| Image Type                   | Clip         | Movie        | Series       | Episode            |
| ---------------------------- | ------------ | ------------ | ------------ | ------------------ |
| 16:9 Key Art                 | **Required** | **Required** | **Required** | —                  |
| 2:3 Poster Art               | —            | **Required** | **Required** | —                  |
| 3:4 Box Cover                | —            | **Required** | —            | —                  |
| 4:3 Box Cover                | —            | —            | **Required** | —                  |
| 16:9 Background Art          | —            | **Required** | **Required** | **Required**       |
| 16:9 Episode Art (thumbnail) | —            | —            | —            | _(see note below)_ |

> **⚠️ Gap flagged for review:** Episode Art (`thumbnail`) is defined as one of the six core image types above, but it does not appear as a requirement in the original Episode content-type table — only Background Art is listed as required for Episodes. This may mean Episode Art has a requirement that was omitted from this doc, or that it's intentionally not required at the episode level (e.g., covered by Background Art alone). **Recommend confirming with the content ops/metadata team before publishing** and updating this row accordingly.

### Episode-Specific Notes

For Episode content, delivered Background Art:

- **May** be letterboxed or pillarboxed depending on the source video's aspect ratio.
- **Must NOT** be windowboxed — windowboxed images will be rejected.
- **Should** be unique per episode and representative of that episode's actual content.

***

## Artwork Content Guidelines

- **No** sexually explicit or graphically violent artwork.
- Artwork **should** be post-theatrical — do not include language such as _"In Theaters Now"_ or _"Coming Soon."_
- Artwork designed specifically for digital delivery is **preferred**.
- Artwork for international territories **should** be localized for each territory.
- Roku will **not** accept branded artwork without prior approval — this applies to individual video assets as well as season/series-level entities.
- Calls to action (CTAs) or links to external platforms/sites are **not permissible** and **must** be removed from the image file prior to delivery.

***

## Artwork Placement Examples

**Movie artwork — browse experience**
16:9 texted image with title treatment, as shown when browsing.

![Movie browse example](https://image.roku.com/ZHZscHItMTc2/movieBrowse.jpg)

**Movie artwork — details experience**
16:9 textless image, as shown on the movie details page.

![Movie details example](https://image.roku.com/ZHZscHItMTc2/movieDetail.jpg)

**Series artwork — browse experience**
16:9 texted series image with title treatment, as shown when browsing.

![Series browse example](https://image.roku.com/ZHZscHItMTc2/seriesBrowse.jpg)

**Series artwork — details experience**
16:9 textless series image, as shown on the series details page.

![Series details example](https://image.roku.com/ZHZscHItMTc2/seriesDetails.jpg)

**Episode artwork — episode picker experience**
16:9 textless episode images, as shown in the episode picker.

![Episode picker example](https://image.roku.com/ZHZscHItMTc2/episodePicker.jpg)

**Episode artwork — episode details experience**
16:9 textless episode image, as shown on the episode details page.

![Episode details example](https://image.roku.com/ZHZscHItMTc2/episodeDetail.jpg)

**Clip artwork — browse experience**
16:9 texted image with title treatment, as shown when browsing.

![Clip browse example](https://image.roku.com/ZHZscHItMTc2/clipBrowse.jpg)

**Poster artwork — search experience**
2:3 texted image with title treatment, as shown in the search experience. 2:3 images are **preferred** for series and movie content types.

![Poster search example](https://image.roku.com/ZHZscHItMTc2/posterSearch.jpg)

> **Note:** Image URLs above are preserved from the source document and point to Roku's CDN. Recommend verifying they still resolve before this spec is published externally.

***

## Glossary

| Term                | Definition                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Title treatment** | A stylized graphic rendering of a title's name, designed to appear directly on key art/poster/box cover images.   |
| **Texted image**    | An image that includes text (typically the title treatment).                                                      |
| **Textless image**  | An image with no text or title treatment overlaid.                                                                |
| **Letterboxed**     | Black bars added above and below the image to fit a wider source into a taller frame.                             |
| **Pillarboxed**     | Black bars added to the left and right of the image to fit a narrower source into a wider frame.                  |
| **Windowboxed**     | Black bars on all four sides of an image — combining letterboxing and pillarboxing. Not accepted for Episode Art. |