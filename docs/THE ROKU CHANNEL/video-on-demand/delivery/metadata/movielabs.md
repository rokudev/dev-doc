---
title: MovieLabs
deprecated: false
hidden: true
metadata:
  robots: index
---
Order of delivery is important. The Roku MovieLabs service will require that the MMC XML file be delivered after all media files referenced within have completed delivery. Roku cannot process content without successful delivery of both the MMC and MEC XMLs. Please see examples below:

- For each MMC, all files referenced in the MMC should be delivered prior to the delivery of the MMC XML to be considered a successful delivery
- For each MEC, all files referenced in the MEC should be delivered prior to the delivery of the MEC XML to be considered a successful delivery
- Movies and Episodes require successful delivery of both MMC and MEC to ingest
- Series and Seasons require successful delivery of at least the MEC to ingest (Series and Season MMCs are supported if artwork references are to be delivered via MMC)
- Episodes cannot ingest without successful delivery and ingest of MEC of the Season to which the Episode belongs
- Seasons cannot ingest without successful delivery and ingest of MEC of the Series to which the Season belongs
- Episodes processed by Roku’s system before the Series and/or Season to which the Episode belongs will be held in an uningested state until the Series and/or Season has been successfully delivered
- Seasons processed by Roku’s system before the Series to which the Season belongs and/or an Episode belonging to that Season will be held in an uningested state until the Series and/or an Episode has been successfully delivered
- Series processed by Roku’s system before a Season and an Episode belonging to that Series will be held in an uningested state until a Season and Episode has been successfully delivered

### Roku specific metadata and media files

Roku Channel supports metadata delivery via MovieLabs specification utilizing the below schemas

- **MMC and MEC** - Roku Channel MovieLabs service was built on MEC v2.9 and MMC v1.10 as defined on MovieLabs’ site: [https://www.movielabs.com/md/](https://www.movielabs.com/md/)
- **EMA avails** - Roku Channel supports the latest version of the [EMA specification](https://movielabs.com/md/avails/) via the xlsx deliverable

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

#### MEC ArtReference for Roku Channel

The Roku-specific image files can be identified using the MovieLabs MEC ArtReference `purpose` attribute

| Purpose attribute value | Roku artwork type                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `keyart`                | 16:9 texted key art with title treatment for movies/shortform/series OR 16:9 textless image for episodes |
| `boxcover`              | 4:3 or 3:4 texted box art with title treatment                                                           |
| `poster`                | 2:3 texted poster art with title treatment                                                               |
| `background`            | 16:9 textless background image                                                                           |

<u>Example:</u>

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

```bash
XMLBEANS_LIB=./../lib
ERROR StatusLogger Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...
/path/to/file/directory /MEC_SAMPLE_123456789.xml valid
```

_NOTE: The MovieLabs schema may fail validation when using Roku's supported genre values. This is expected. Submission of Roku's supported genres will not fail validation in our pipeline_
