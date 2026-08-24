---
title: Artwork
deprecated: false
hidden: true
metadata:
  robots: index
---
Roku supports three image types for each piece of content. Each image type will be used in a different location within Roku Channel. Roku prefers to receive all three art sizes whenever possible. Each image must be delivered in JPEG or PNG format. Please provide images in Roku's preferred image resolution to avoid delays in publishing. Images _must_ meet or exceed the minimum resolution and _must_ be delivered in the _exact_ aspect ratio defined for each image type.

## Image types

| **Image type**         | Aspect Ratio | **Preferred resolution**         | **Minimum resolution** | **Maximum resolution** | **Format**                      | **Extension**               | **Purpose** | **Description**                                                                                                                                                                                                                                   |
| ---------------------- | ------------ | -------------------------------- | ---------------------- | ---------------------- | ------------------------------- | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Key art**            | 16:9         | 1920x1080<br />or<br />3840x2160 | 1920x1080              | 3840x2160              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | keyart      | 16:9 artwork that appears when browsing Roku Channel.  The title treatment must be present on the Key art                                                                                                                                         |
| **Box cover (series)** | 4:3          | 2560x1920                        | 1600x1200              | 2560x1920              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | boxcover    | 4:3 artwork for future Roku Channel browsing and/or 3rd  party platforms. This image is not currently required for distribution to  Roku Channel. The title treatment must be present on the Box cover. 4:3  aspect ratio is used for series only |
| **Box cover (movies)** | 3:4          | 1920x2560                        | 1200x1600              | 1920x2560              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | boxcover    | 3:4 artwork for future Roku Channel browsing and/or 3rd  party platforms. This image is not currently required for distribution to  Roku Channel. The title treatment must be present on the Box cover. 3:4  aspect ratio is used for movies only |
| **Poster art**         | 2:3          | 2000x3000                        | 2000x3000              | 2000x3000              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | poster      | 2:3 artwork that can appear when searching on Roku or  Roku Channel. The title treatment must be present on the Poster art                                                                                                                        |
| **Background art**     | 16:9         | 1920x1080<br />or<br />3840x2160 | 1920x1080              | 3840x2160              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | background  | 16:9 artwork used as the background of the details page  of a series or movie. There must be no text on the Background art                                                                                                                        |
| **Episode art**        | 16:9         | 1920x1080<br />or<br />3840x2160 | 1920x1080              | 3840x2160              | JPEG or PNG<br />RGB<br />72ppi | .jpg<br />.jpeg  <br />.png | thumbnail   | 16:9 artwork representing the episode without spoilers.  This is usually a still from the episode and must not contain any text                                                                                                                   |

## Minimum art requirements by content type

### Clip content type art requirements

| Art          | Required/Preferred | Notes                                            |
| ------------ | ------------------ | ------------------------------------------------ |
| 16:9 Key Art | Required           | Only the 16:9 texted image is required for Clips |

### Movie content type art requirements

| Art             | Required/Preferred | Notes                         |
| --------------- | ------------------ | ----------------------------- |
| 16:9 Key Art    | Required           | All image types are required. |
| 2:3 Poster      | Required           | All image types are required. |
| 3:4 Box Cover   | Required           | All image types are required. |
| 16:9 Background | Required           | All image types are required. |

### TV art requirements

#### Series content type

| **Art**         | **Required/Preferred** | **Notes**                     |
| --------------- | ---------------------- | ----------------------------- |
| 16:9 Key Art    | Required               | All image types are required. |
| 2:3 Poster      | Required               | All image types are required. |
| 4:3 Box Cover   | Required               | All image types are required. |
| 16:9 Background | Required               | All image types are required. |

#### Episode content type

| **Art**         | **Required/Preferred** | **Notes**                                                                                                                                                                                                              |
| --------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16:9 Background | Required               | Episodic image may be letterboxed or pillarboxed depending upon the source video. Windowboxed images will be rejected.<br />Episodic images should be unique for each episode and represent the content of the episode |

### Artwork content guidelines

- Key Art (graphic with the full title of the asset visible)
- No sexually explicit or graphically violent artwork
- Artwork should be post-theatrical and not include language such as _In Theaters Now_ or _Coming Soon_
- Artwork designed specifically for digital delivery is preferred
- Artwork for international territories should be localized for each territory
- For content on Roku Channel, Roku will not accept branded artwork without prior approval for any individual video asset nor for season/series entities.
- Calls to action (CTAs) or links to external platforms or sites are not permissible and must be removed from the image file prior to delivery to Roku

## Artwork placement on platform examples

**Movie artwork - browse experience**

Highlighted example of the 16:9 texted image with title treatment

![roku400px - movieGrid](https://image.roku.com/ZHZscHItMTc2/movieBrowse.jpg)

**Movie artwork - details experience**

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
