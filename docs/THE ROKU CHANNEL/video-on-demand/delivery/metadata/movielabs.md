---
title: MovieLabs
excerpt: Roku-specific MovieLabs delivery order, tags, markers, and schema validation.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

This page covers **Roku-specific** implementation details for MovieLabs metadata delivery — schema versions in use, Roku-specific field mappings (tags, TMS IDs, artwork), ad-break markers, and schema validation. It assumes familiarity with MovieLabs MEC/MMC concepts generally; for foundational MovieLabs concepts, see the MovieLabs guide.

***

## Delivery Order

Order of delivery is **critical**. Roku cannot process content without successful delivery of **both** the MMC and MEC XMLs, and there are two distinct ordering dependencies to satisfy.

### 1. Media Files Must Precede Their XML

- For each **MMC**, all files referenced within it **must** be delivered before the MMC XML itself, for the delivery to be considered successful.
- For each **MEC**, all files referenced within it **must** be delivered before the MEC XML itself, for the delivery to be considered successful.

### 2. Hierarchy Ingest Order (Series > Season > Episode)

- **Movies and Episodes** require successful delivery of **both** MMC and MEC to ingest.
- **Series and Seasons** require successful delivery of **at least the MEC** to ingest. (Series and Season MMCs are supported if artwork references are delivered via MMC.)
- An **Episode** cannot ingest until the **MEC of its Season** has been successfully delivered and ingested.
- A **Season** cannot ingest until the **MEC of its Series** has been successfully delivered and ingested.

**If content arrives out of order:**

- An Episode processed before its Series and/or Season is held in an **un-ingested state** until the Series and/or Season has been successfully delivered.
- A Season processed before its Series and/or an Episode belonging to it is held in an **un-ingested state** until the Series and/or an Episode has been successfully delivered.
- A Series processed before a Season and an Episode belonging to it is held in an **un-ingested state** until a Season and Episode have been successfully delivered.

***

## Roku-Specific Metadata and Media Files

Roku Channel supports metadata delivery via the MovieLabs specification, using the following schemas:

- **MMC and MEC** — Roku Channel's MovieLabs service is built on **MEC v2.9** and **MMC v1.10**, as defined on [MovieLabs' site](https://www.movielabs.com/md/).
- **EMA Avails** — Roku Channel supports the latest version of the [EMA specification](https://movielabs.com/md/avails/), delivered via `.xlsx`.

All [video](#video-requirements), [audio](#audio-requirements), [closed caption](#closed-captions), [subtitle](#subtitles), and [image](#artwork) files, along with [minimum metadata requirements](#minimum-required-metadata-by-content-type), [genres](#genres), and [ratings/rating sources](#rating-values-by-rating-system-and-country), **must** adhere to the formats and requirements defined elsewhere in this specification — this page covers only the MovieLabs-specific delivery mechanics for that same content.

### Tags

Tags for merchandising/curation can be delivered via the `Keyword` node, supported in the MovieLabs MEC XML. See the [MovieLabs MEC Schema](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link116) for proper placement.

```xml
<md:LocalizedInfo language="en">
	<md:TitleDisplayUnlimited>Great Title of My Show</md:TitleDisplayUnlimited>
	<md:Summary190>Short summary of my show.</md:Summary190>
	<md:Summary400>Longer summary of my show.</md:Summary400>
	<md:Genre id="genre"/>
	<md:Keyword>keyword</md:Keyword>
</md:LocalizedInfo>
```

### TMS IDs

Gracenote TMS IDs can be delivered via the MovieLabs MEC XML, as an `Identifier` with `Namespace` `TMSID` inside the `AltIdentifier` node. See the [MovieLabs MEC Schema](https://movielabs.com/md/mec/v2.9/mdmec-v2.9/mdmec-v2.9.html#Link121) for proper structure.

```xml
<md:AltIdentifier>
	<md:Namespace>TMSID</md:Namespace>
	<md:Identifier>EP012345678910</md:Identifier>
</md:AltIdentifier>
```

### MMC XML Ad Breaks and Cue Points

Ad break, intro credit, and end credit cue points are supplied in the MovieLabs MMC XML via the `Markers` node. See the [MovieLabs MMC Schema](https://movielabs.com/md/manifest/v1.10/manifest-v1.10/manifest-v1.10.html#Link184) for proper structure.

**Note:** Roku only needs a single **start point** for ad-break markers — Roku's player pauses playback at that point, plays the ad pod, and resumes from the same point.

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

### MEC ArtReference for Roku Channel

Roku-specific image files are identified using the MovieLabs MEC `ArtReference` `purpose` attribute:

| `purpose` Attribute Value | Roku Artwork Type                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `keyart`                  | 16:9 texted key art with title treatment for movies/shortform/series **OR** 16:9 textless image for episodes |
| `boxcover`                | 4:3 or 3:4 texted box art with title treatment                                                               |
| `poster`                  | 2:3 texted poster art with title treatment                                                                   |
| `background`              | 16:9 textless background image                                                                               |

```xml
<md:LocalizedInfo language="en" default="true">
	<md:TitleDisplayUnlimited>Ahed's Knee</md:TitleDisplayUnlimited>

	<!--MEC image references-->
	<!--16:9 texted key art with title treatment for movies/shortform/series to be delivered with purpose="keyart"-->
	<md:ArtReference resolution="1920x1080" purpose="keyart">16x9_texted_image_with_title_treatment.jpg</md:ArtReference>

	<!--16:9 textless image for episodes to be delivered with purpose="keyart"-->
	<md:ArtReference resolution="1920x1080" purpose="keyart">16x9_textless_episode_image.jpg</md:ArtReference>

	<!--4:3 or 3:4 texted box image with title treatment to be delivered with purpose="boxcover". Aspect ratio is content type dependent-->
	<md:ArtReference resolution="2560x1920" purpose="boxcover">4x3_texted_image_with_title_treatment.jpg</md:ArtReference> <!--for content type of series-->
	<md:ArtReference resolution="1920x2560" purpose="boxcover">3x4_texted_image_with_title_treatment.jpg</md:ArtReference> <!--for content type of movie-->

	<!--2:3 texted poster/box image with title treatment to be delivered with purpose="poster"-->
	<md:ArtReference resolution="2000x3000" purpose="poster">2x3_texted_image_with_title_treatment.jpg</md:ArtReference>

	<!--16:9 textless background image to be delivered with purpose="background"-->
	<md:ArtReference resolution="1920x1080" purpose="background">16x9_textless_background_image.jpg</md:ArtReference>

	<md:Summary190>Short Summary of the program in the language specified</md:Summary190>
	<md:Summary400>Long Summary of the program in the language specified</md:Summary400>
	<md:Genre>Drama</md:Genre>
</md:LocalizedInfo>
```

***

## MovieLabs Schema Validation

Roku uses Apache [xmlbeans](https://xmlbeans.apache.org/download/index.html) to parse and validate MEC/MMC XML files. Its command-line validation tool can be used to pre-check files before delivery.

1. Download and extract xmlbeans locally.
2. From the command line, `cd` to the xmlbeans `bin` directory.
3. Inside `bin`, locate the `validate` tool.
4. Download the official MovieLabs schema XSD files locally:
   - [manifest-v1.10.xsd](https://movielabs.com/schema/manifest/v1.10/manifest-v1.10.xsd) (for MMC)
   - [mdmec-v2.9.xsd](https://movielabs.com/schema/mdmec/v2.9/mdmec-v2.9.xsd) (for MEC)
5. Run: `validate schema.xsd instance.xml` — point `schema.xsd` to `mdmec-v2.9.xsd` for MEC files, or `manifest-v1.10.xsd` for MMC files.
6. The command-line output will indicate whether the given XML is valid.

**Example usage:**

```bash
./validate ~/dev/movielabsSpec/schema/mdmec-v2.9.xsd /path/to/file/directory/MEC_SAMPLE_123456789.xml
```

**Example response:**

```text
XMLBEANS_LIB=./../lib
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...
/path/to/file/directory/MEC_SAMPLE_123456789.xml valid
```

> **📌 Note — expected validation behavior:** the official MovieLabs schema **may fail validation** when using Roku's supported genre values. **This is expected and not a problem** — submission of Roku's supported genre values will **not** fail validation in Roku's own ingest pipeline, even though the standalone xmlbeans tool may flag it. Don't treat a genre-related xmlbeans failure as a signal that your file is invalid for Roku delivery.

***

## Glossary

| Term             | Definition                                                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **MEC**          | Media Entertainment Core — the MovieLabs metadata schema describing the content itself.                                                 |
| **MMC**          | Media Manifest Core — the MovieLabs schema describing the manifest of deliverable assets (video, audio, images) tied to a title.        |
| **EMA Avails**   | The MovieLabs/EMA specification expressing licensing and availability terms for content.                                                |
| **Markers node** | The MMC XML element carrying cue-point timecodes for ad breaks, intro credits, and end credits.                                         |
| **ArtReference** | The MEC XML element that references an artwork file, tagged with a `purpose` attribute identifying which Roku image type it represents. |
| **TMS ID**       | A Gracenote-assigned identifier for a title, deliverable via the MEC `AltIdentifier` node.                                              |
| **xmlbeans**     | An Apache library/tool Roku uses to validate MEC/MMC XML files against the official MovieLabs schema.                                   |