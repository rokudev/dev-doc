---
title: "Content metadata"
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

# Content metadata

Content metadata describes a viewable title that will be shown to the
user. Content may be any supported type of video and the metadata is
used by the UI to format and display the title to the user. Some
attributes (e.g. ContentType) affect how the title is displayed on
screen, other attributes (e.g. SDPosterURL) specify where to fetch
artwork to display with the content and other attributes (e.g. Title)
are just rendered as text.


## Overview

The content metadata is stored in an associative array by the script
and provided to the various screen objects as needed for display. In
some cases an array of content metadata may be provided so that the
screen can render multiple items as a list. The attribute names are
critical and used as the key to look up the attribute at run time. The
following table details the attributes in use. Certain attributes are
recognized by particular screens, while others are more globally
applicable. If the attribute is not a generally recognized attribute,
the table below specifies where the attributes are recognized.

Keep in mind that there are two ways to specify stream content metadata,
**data.Stream** and **data.Streams**:

  - **data.Stream**: This is used when there is one stream URL,
    typically an HLS or smooth streaming manifest URL.  
  - **data.Streams**: This is used when you have a set of fixed bitrate
    streams.  This is typically the case for non-adaptive MP4 streams,
    in which case multiple variants are specified to simulate true
    adaptation.

## Descriptive attributes

Descriptive metadata attributes can be used to describe the content
item to the user, in a user interface element that allows the user to
select the item.



<table>
<thead>
<tr>
<th>Attributes</th>
<th>Type</th>
<th>Values</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>ContentType</td>
<td>String</td>
<td>Although ContentType accepts type String, the return value is of type <a href="/docs/references/brightscript/components/roint.md">roInt</a>. See table below. <table><thead><tr><th>Content Type</th><th>Return Value</th></tr></thead><tbody><tr><td>audio</td><td>5</td></tr><tr><td>episode</td><td>4</td></tr><tr><td>movie</td><td>1</td></tr><tr><td>not set or not supported</td><td>0</td></tr><tr><td>season</td><td>3</td></tr><tr><td>series</td><td>2</td></tr></tbody></table></td>
<td>"movie"</td>
</tr>
<tr>
<td>Title</td>
<td>String</td>
<td>Content title: movie title for films; episode title for TV series</td>
<td>"The Dark Knight"</td>
</tr>
<tr>
<td>TitleSeason</td>
<td>String</td>
<td>Season title for TV series</td>
<td>"Battlestar Galactica Season 5"</td>
</tr>
<tr>
<td>SecondaryTitle</td>
<td>String</td>
<td>Secondary title for the video content</td>
<td>"2022" (release year of the movie)</td>
</tr>
<tr>
<td>ProgramID</td>
<td>String</td>
<td>An opaque, unique identifier for the content the app is playing. Each movie, episode, or other content in the app should have a different program ID value.<br /><br />This identifier is used to debug content-specific playback issues. Roku will reference this programID in playback error reports, allowing developers to identify the content that failed to play.</td>
<td>"54b2f1ae-a0e9-46e0-a4d7-47b4e00e9c15"</td>
</tr>
<tr>
<td>Description</td>
<td>String</td>
<td>Description of content</td>
<td>"Batman, Gordon and Harvey Dent are forced…"</td>
</tr>
<tr>
<td>SDPosterUrl</td>
<td>String</td>
<td>URL for SD content artwork</td>
<td>mysite.com/img/sd1932.jpg</td>
</tr>
<tr>
<td>HDPosterUrl</td>
<td>String</td>
<td>URL for HD content artwork</td>
<td>mysite.com/img/hd1932.jpg</td>
</tr>
<tr>
<td>FHDPosterUrl</td>
<td>String</td>
<td>YesterdayURL for FHD content artwork</td>
<td>mysite.com/img/fhd1932.jpg</td>
</tr>
<tr>
<td>ReleaseDate</td>
<td>String</td>
<td>Formatted Date String</td>
<td>"3/31/2009"</td>
</tr>
<tr>
<td>Rating</td>
<td>String</td>
<td>Selects an icon to be displayed for the corresponding MPAA or TV rating, that is, the value will display as an icon artwork. See <a href="/docs/developer-program/getting-started/architecture/content-metadata.md#rating-attribute-icons">Rating Attribute Icons</a> for a list of the acceptable values and the corresponding icon.</td>
<td>"PG-13"</td>
</tr>
<tr>
<td>StarRating</td>
<td>Integer</td>
<td>Specifies the star rating to display as red star icon artwork, as a number from 1 to 100: <ul><li>20 displays one star</li><li>40 displays two stars</li><li>60 displays three stars</li><li>80 displays four stars</li><li>100 displays five stars</li></ul> Numbers not divisible by 20 are displayed as a fractional star (A number of 30 will display one and a half stars)</td>
<td>80</td>
</tr>
<tr>
<td>UserStarRating</td>
<td>Integer</td>
<td>Specifies the user star rating to display as yellow star icon artwork, as a number from 1 to 100: <ul><li>20 displays one star</li><li>40 displays two stars</li><li>60 displays three stars</li><li>80 displays four stars</li><li>100 displays five stars</li></ul> Does not display fractional stars for numbers not divisible by 20</td>
<td>80</td>
</tr>
<tr>
<td>ShortDescriptionLine1</td>
<td>String</td>
<td>Line 1 of Poster Screen Description</td>
<td>"The Dark Knight"</td>
</tr>
<tr>
<td>ShortDescriptionLine2</td>
<td>String</td>
<td>Line 2 of Poster Screen Description</td>
<td>"Rent $1.99, Buy $14.99"</td>
</tr>
<tr>
<td>EpisodeNumber</td>
<td>String</td>
<td>Episode Number</td>
<td>"1"</td>
</tr>
<tr>
<td>NumEpisodes</td>
<td>Integer</td>
<td>Number of episodes for a "season" or "series" contentType</td>
<td>40</td>
</tr>
<tr>
<td>Actors</td>
<td>roArray</td>
<td>List of Actor Names</td>
<td>["Brad Pitt", "Angelina Jolie"]</td>
</tr>
<tr>
<td>Actors</td>
<td>String</td>
<td>Individual Actor Name</td>
<td>"Brad Pitt"</td>
</tr>
<tr>
<td>Directors</td>
<td>roArray</td>
<td>List of Director Names</td>
<td>["Joel Coen", "Clint Eastwood"]</td>
</tr>
<tr>
<td>Categories</td>
<td>roArray</td>
<td>List of Category/Genre Names</td>
<td>["Comedy", "Drama"]</td>
</tr>
<tr>
<td>Categories</td>
<td>String</td>
<td>Individual Category/Genre Name</td>
<td>"Comedy"</td>
</tr>
<tr>
<td>Album</td>
<td>String</td>
<td>roSpringboard audio style uses this to display the album</td>
<td>"Achtung"</td>
</tr>
<tr>
<td>Artist</td>
<td>String</td>
<td>roSpringboard audio style uses to show artist</td>
<td>"U2"</td>
</tr>
<tr>
<td>TextOverlayUL</td>
<td>String</td>
<td>roSlideShow displays this string in Upper Left corner of slide</td>
<td>"Joe's Photos"</td>
</tr>
<tr>
<td>TextOverlayUR</td>
<td>String</td>
<td>roSlideShow displays this string in Upper Right corner of slide</td>
<td>"3 of 20"</td>
</tr>
<tr>
<td>TextOverlayBody</td>
<td>String</td>
<td>roSlideShow displays this string on the bottom part of slide</td>
<td>"Wanda's 40'th Birthday"</td>
</tr>
</tbody>
</table>





## Digital rights management (DRM) control attributes

Digital rights management (DRM) content meta-data control attributes are available in the Roku OS through the drmParams parameter of type [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md). The table below enumerates all usable attributes of drmParams.

**Note:** Not all attributes are required, and may not have the same semantic meaning when applied to different DRM systems.


<table>
<thead>
<tr>
<th>Attribute</th>
<th>DRM System</th>
<th>Type</th>
<th>Value</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>appData</td>
<td>Playready, Widevine, Verimatrix: Optional</td>
<td>String</td>
<td>Special meaning per DRM system. If supplied, expected to be a base64 encoded string.</td>
<td>"SGF2ZSB0byBkZWFsIHdpdGggQmFzZTY0IGZ..."</td>
</tr>
<tr>
<td>encodingKey</td>
<td>Playready: Optional</td>
<td>String</td>
<td>This field is deprecated; use the <strong>licenseServerURL</strong> field.<br /><br />Specifies the PlayReady license acquisition data, in format depending on the EncodingType attribute value specified:<br /><ul><li><p>when encodingType="PlayReadyLicenseAcquisitionUrl", the EncodingKey attribute contains the PlayReady license acquisition URL</p></li><li><p>when encodingType="PlayReadyLicenseAcquisitionAndChallenge", the EncodingKey attribute contains the PlayReady license acquisition URL plus additional custom license acquisition request data in format "URL%%%"  Note, this is the same value that used to be specified directly in Content Metadata structure   The app just needs to set drmParams.licenseSererUrl.</p></li></ul></td>
<td>"http://serverName/</td>
</tr>
<tr>
<td>encodingType</td>
<td>Playready: Optional</td>
<td>String</td>
<td>This field is deprecated; use the <strong>licenseServerURL</strong> field.<br /><br />Specifies the encoding scheme for PlayReady DRM, by setting to one of the following values:<br /><ul><li>"PlayReadyLicenseAcquisitionUrl"</li><li>"PlayReadyLicenseAcquisitionAndChallenge"  Note, this is the same value that used to be specified directly in Content Metadata structure</li></ul></td>
<td>"PlayReadyLicenseAcquisitionAndChallenge"</td>
</tr>
<tr>
<td>KeySystem</td>
<td>Required for all</td>
<td>String</td>
<td>"playready" or "widevine". This value is case-insensitive. The default is an empty string.<br /><br /><blockquote><p>As of Roku OS 9.3, support for Verimatrix DRM has been removed from the firmware. Make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click <a href="/docs/specs/media/content-protection.md">here</a> for more information on implementing these DRMs.</p></blockquote></td>
<td>"widevine"</td>
</tr>
<tr>
<td>licenseRenewURL</td>
<td>Widevine: Optional</td>
<td>String</td>
<td>A URL location for sending license renewal requests. If not specified, the Roku OS would send renewal requests to the URL specified in the licenseServerURL.</td>
<td>" https://host.com/license/wideivne/renew?licenseid=090495867002 "</td>
</tr>
<tr>
<td>licenseServerURL</td>
<td>Playready: Required Widevine: Required</td>
<td>String</td>
<td>A URL location of a license server. This URL may include CGI parameters.<br /><br />If this field contains the PlayReady license acquisition URL plus additional custom license acquisition request data in format "URL%%%",  the “PlayReadyLicenseAcquisitionAndChallenge" type is used.</td>
<td>"https://host.com/license/playready?contentid=090495867002 "</td>
</tr>
<tr>
<td>serializationURL</td>
<td>Playready, Widevine: Optional</td>
<td>String</td>
<td>A server address used for device provisioning</td>
<td>"https://host.com/provision/device?esn=090495867002 "</td>
</tr>
<tr>
<td>serviceCert</td>
<td>Widevine: Optional Others: N/R (leave unset)</td>
<td>String</td>
<td>The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the app. Leave this unset unless Widevine is used for DRM.</td>
<td>Certificate strings are too long to display here. Examples can be fetched from such sources as the Widevine test license server at "https://proxy.uat.widevine.com/proxy. "</td>
</tr>
<tr>
<td>lic_acq_window</td>
<td>Widevine: Optional</td>
<td>String</td>
<td>The maximum amount of time (in milliseconds) that an app waits before rotating its Widevine DRM keys. The app can generate a random wait time between 0 and the value specified in the <strong>lic_acq_window</strong> field, and use the random wait time to instruct when the Video node should make its next Widevine license request.</td>
<td>1000</td>
</tr>
<tr>
<td>ignoreInitDataPssh<br /><br /><em>Available since Roku OS 14.5</em></td>
<td>Widevine: Optional</td>
<td>String</td>
<td>Ignores the PSSH in the initialization segment. This enables support for Harmonic/DTV-GO DASH-IOP v5.0.0 streams with In-Band Key-Rotation Signaling without breaking legacy streams/apps that do not provide the <code>&lt;ContentProtection&gt;</code> element with PSSH info in the DASH manifest. <br /><br />The default value is <code>"false"</code>.</td>
<td>"true"</td>
</tr>
<tr>
<td>licReqTemplate<br /><br /><em>Available since Roku OS 14.6</em></td>
<td>Widevine</td>
<td></td>
<td>Contains the license request "template, which is the entire license request without the license challenge filled-in<br /><br />JSON or XML formats are supported.<br /><br />Use this parameter and the <strong>templateType</strong>, <strong>requestField</strong>, and <strong>responseField</strong> parameters to wrap the Widevine license challenge payload in the request format (JSON or XML) required by your license server proxy. <br /><br />See <a href="#example-of-wrapping-the-widevine-license-challenge-payload">Example of wrapping the Widevine license challenge payload</a> for more information.</td>
<td>"JSON"</td>
</tr>
<tr>
<td>templateType<br /><br /><em>Available since Roku OS 14.6</em></td>
<td>Widevine</td>
<td>String</td>
<td>Set to "JSON", "XML" or "BASE64"<br />-  JSON: licReqTemplate is in json format<br />- XML: licReqTemplate is in XML format<br />- BASE64 - Does not use licReqTemplate Instead, base64 encode the challenge and send it in POST body<br /> If no value is specified, the license template is not used</td>
<td>"JSON"</td>
</tr>
<tr>
<td>requestField<br /><br /><em>Available since Roku OS 14.6</em></td>
<td>Widevine</td>
<td>String</td>
<td>jsonpath or xpath to the element whose value must contain the fixed token LICENSE_CHALLENGE<br />- jsonpath if templateType is "JSON" <br />- xpath if templateType is "XML"<br /><br />The Roku OS Roku replaces the  LICENSE_CHALLENGE token with the base64 encoded license challenge.<br /><br />As of Roku OS 15.0, the LICENSE_CHALLENGE token can be provided as a URL (in addition to a text string).  The Roku OS automatically follows the challenge URLs properly.</td>
<td>".parameters[0].body"</td>
</tr>
<tr>
<td>responseField<br /><br /><em>Available since Roku OS 14.6</em></td>
<td>Widevine</td>
<td>String</td>
<td>json-path or xpath to the element that         contains the base64 encoded license response<br />- jsonpath if templateType is "JSON" <br />- xpath if templateType is "XML"<br /><br />The Roku OS extracts the license response, base64 decodes it, and provides it to the DRM client in the Roku firmware.<br /><br />After setting the license response in the DRM agent , the license response is made available in the <strong>licenseStatus</strong> Playback field, which is an associative array. The <strong>response</strong> field in the associative array contains the entire license response.</td>
<td>".output.widevine2License.license"</td>
</tr>
</tbody>
</table>





### Passing custom HTTP headers to licensing requests

Developers looking to pass custom HTTP headers with a licensing request can now set those headers using the [ifHttpAgent](/docs/references/brightscript/interfaces/ifhttpagent.md) interface methods on the [Video](/docs/references/scenegraph/media-playback-nodes/video.md) node.

### Example of configuring a dash stream with Widevine DRM

~~~~

contMeta = \{
    HDPosterUrl:"pkg:/images/BigBuckBunny.jpg"
    SDPosterUrl:"pkg:/images/BigBuckBunny.jpg"
    ShortDescriptionLine1:"Parking Wars(VOD)"
    ShortDescriptionLine2:"dash | widevine"
    Streamformat:"dash"
    SwitchingStrategy:""
    MinBandwidth:500
    VideoUrl: "http://dev.domain.com/mm/dash/vod/173850/85768039/TG_W_WIFI.mpd"
    drmParams: \{ ' setting up DRM config
        keySystem: "Widevine"
        licenseServerURL: "http://msfrn-ci-cp-dev.mobitv.com/widevine/get_license"
    \}
\}

~~~~

### Example of wrapping the Widevine license challenge payload

The following code demonstrates how you can wrap the Widevine license challenge payload in the request format (JSON or XML) required by your license server proxy. 

```
// set the content type
// for json it may be set to "application/json
// for xml it may be set to "text/xml" or "application/xml"
// if your license proxy cannot handle these content types,
// don't specify anything. The default content type
// used by Roku firmware is "text/plain", and most proxies
// seem to handle this content type
httpAgent = CreateObject("roHttpAgent")
httpAgent.AddHeader("Content-Type", "<contentType>")
m.video.drmHttpAgent = httpAgent   
videocontent = createObject("RoSGNode", "ContentNode")
videocontent.drmParams = {     
			keySystem: "Widevine"
			name: "Widevine"
			licenseServerURL: "https://proxy.uat.widevine.com/proxy?provider=widevine_test"
			licReqTemplate: "license request template"
			templateType: "JSON"
			requestField: ".parameters[0].body"
			responseField: ".output.widevine2License.license"
		}
...
m.video.content = videocontent   
```

## Content classification attributes

*Available since Roku OS 13.0*

Developers can use the **contentClassifier** content metadata attribute to specify the genre of their content (for example, action, sports, or comedy), and the Roku OS will use this attribute to automatically adjust the sound and picture on Roku TVs (if auto mode is selected for the picture or sound settings).

###### Content classifier value


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>contentClassifer</td>
<td>string</td>
<td><ul><li>" "</li><li>"action"</li><li>"animated"</li><li>"black+white" (black and white)</li><li>"comedy"</li><li>"drama"</li><li>"music"</li><li>"music:lyrics"</li><li>"nature"</li><li>"news"</li><li>"podcast" (audio only)</li><li>"reality"</li><li>"sports"</li></ul></td>
<td>"drama"</td>
</tr>
</tbody>
</table>



###### Content classifier sound and picture modes

The following table details how the different **contentClassifier** attribute values are mapped to sound and picture modes on Roku TVs.

| Content Classifier    | Sound Mode | Picture Mode |
| :-------------------- | :--------- | :----------- |
| " "                   | Standard   | Standard     |
| action                | Movie      | Movie        |
| sports                | Standard   | Sports       |
| comedy                | Movie      | Movie        |
| drama                 | Movie      | Movie        |
| music                 | Music      | Standard     |
| music:lyrics          | Music      | Low Power    |
| news                  | Dialog     | Vivid        |
| podcast (Audio Only ) | Dialog     | Low Power    |
| animated              | Movie      | Vivid        |
| black+white           | Movie      | Standard     |
| nature                | Standard   | Vivid        |
| reality               | Standard   | Standard     |

## Playback configuration attributes

Playback configuration meta-data attributes are used to configure the playback of the content item.



<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Live</td>
<td>Boolean</td>
<td>Optional flag indicating video is live. Replaces time remaining in progress bar to display "Live". Default is false</td>
<td>True</td>
</tr>
<tr>
<td>Url</td>
<td>String</td>
<td>Stream URL for Scene Graph Video node</td>
<td>mysite.com/img/vacation.jpg</td>
</tr>
<tr>
<td>SDBifUrl</td>
<td>String</td>
<td>BIF URL for SD trick mode</td>
<td>mysite.com/bif/sd1932.bif</td>
</tr>
<tr>
<td>HDBifUrl</td>
<td>String</td>
<td>BIF URL for HD trick mode</td>
<td>mysite.com/bif/hd1932.bif</td>
</tr>
<tr>
<td>FHDBifUrl</td>
<td>String</td>
<td>BIF URL for FHD trick mode</td>
<td>mysite.com/bif/fhd1932.bif</td>
</tr>
<tr>
<td>Stream</td>
<td>roAssociativeArray</td>
<td>Supported by roVideoPlayer and roVideoScreen, but not the Roku Scene Graph Video node.<br />For the Video node, use the top level url, streamformat, etc. attributes. <br /><br />The exception is cases where you don't have adaptive streams (typically MP4) and need to specify different bitrate variants separately. For this use case use the Streams attribute. roAssociativeArray that has parameters representing the stream settings that were set as individual roArrays in previous firmware revisions. <br /><br />The old method is still supported and descriptions of the parameters can be found under those content-meta data entries. <br /><br />For url please see StreamUrls, for quality it is now a Boolean that is true for HD quality. <br /><table><thead><tr><th>Key</th><th>Type</th></tr></thead><tbody><tr><td>url</td><td>String</td></tr><tr><td>stickyredirects</td><td>Boolean</td></tr><tr><td>quality</td><td>Boolean</td></tr><tr><td>contentid</td><td>String</td></tr><tr><td>bitrate</td><td>Integer</td></tr></tbody></table></td>
<td>{ url : "http://me.com/big.m3u8", quality : true, contentid : "big-hls" }</td>
</tr>
<tr>
<td>Streams</td>
<td>roArray of roAssociativeArrays</td>
<td>Used by roVideoPlayer and roVideoScreen to specify the content metadata for a set of fixed bitrate streams.<br /><br />Each array item specifies the URL, bitrate, etc. for one stream variant. <br /><br />Setting stream content metadata using the Streams value is recommended for non-adaptive video (such as MP4 progressive download) only.<br /><br />For adaptive streaming, use the Stream metadata value.<br /><table><thead><tr><th>Key</th><th>Type</th></tr></thead><tbody><tr><td>url</td><td>String</td></tr><tr><td>stickyredirects</td><td>Boolean</td></tr><tr><td>quality</td><td>Boolean</td></tr><tr><td>contentid</td><td>String</td></tr><tr><td>bitrate</td><td>Integer</td></tr></tbody></table></td>
<td>[ { url : "http://me.com/x-384.mp4",  bitrate : 384, quality : false, contentid : "x-384" },  { url : "http://me.com/x2500.mp4",  bitrate : 2500, quality : true, contentid : "x-1500" } ]</td>
</tr>
<tr>
<td>StreamBitrates</td>
<td>roArray</td>
<td>Array of bitrates in kbps for content streams used. <br /><br />Setting stream bitrates using this value is recommended for non-adaptive video (such as MP4 progressive download) only.<br /><br /><strong>Must be used in conjunction with StreamUrls and StreamQualities</strong></td>
<td>[ 384, 500, 1000, 1500 ]</td>
</tr>
<tr>
<td>StreamUrls</td>
<td>roArray</td>
<td>Array of URLs for content streams. <br /><br />Setting stream urls using this value is recommended for non-adaptive video (such as MP4 progressive download) only.<br /><br /> <strong>Must be used in conjunction with StreamBitrates and StreamQualities</strong></td>
<td>[ "mysite.com/vid/1932-1.mp4", "mysite.com/vid/1932-2.mp4", "mysite.com/vid/1932-3.mp4", "mysite.com/vid/1932-4.mp4" ]</td>
</tr>
<tr>
<td>StreamQualities</td>
<td>roArray</td>
<td>Array of Strings quality indicators identifying a stream as "SD" or "HD". <br /><br /> <strong>Must be used in conjunction with StreamBitrates and StreamUrls</strong></td>
<td>[ "SD", "SD", "SD", "HD" ]</td>
</tr>
<tr>
<td>StreamContentIDs</td>
<td>roArray</td>
<td>array of strings values logged in Roku logs to identify stream and bitrate played</td>
<td>[ "myco-19321-384.mp4", "myco-19321-500.mp4", "myco-19321-1000.mp4", "myco-19321-1500.mp4" ]</td>
</tr>
<tr>
<td>StreamStickyHttpRedirects</td>
<td>roArray</td>
<td>Array of Boolean values indicating if the HTTP endpoint should be sticky and not subject to change on subsequent requests. Default is false</td>
<td>[ false, false, false, false ]</td>
</tr>
<tr>
<td>StreamStartTimeOffset</td>
<td>Integer</td>
<td>Optional. Default is 0. The offset into the stream which is considered the beginning of playback. Time in seconds.</td>
<td>3600 (one hour)</td>
</tr>
<tr>
<td>StreamFormat</td>
<td>String</td>
<td>Type of content <ul><li>Type of content:<ul><li>Default: H.264/AAC in .mp4 Container</li></ul></li><li>Valid values:<ul><li>"mp4" (mp4 will also accept .mov and .m4v files)</li><li>"wma" (deprecated)</li><li>"mp3"  </li><li>"hls"-"ism" (smooth streaming)</li><li>"dash" (MPEG-DASH)</li><li>"mkv", "mka", "mks"</li></ul></li><li>Deprecated:<ul><li>"wmv"</li></ul></li></ul></td>
<td></td>
</tr>
<tr>
<td>Length</td>
<td>Float</td>
<td>Movie Length in Seconds; Length zero displays at 0m, Length not set will not display</td>
<td>3600 (one hour)</td>
</tr>
<tr>
<td>PlayStart</td>
<td>Float</td>
<td>PlayStart defines the start position of the content, in seconds.<br /><br />Starting from Roku OS 8.0, content metadata supports negative PlayStart values. This feature allows the media players to start playbacks distanced from the edge of the live stream</td>
<td>0</td>
</tr>
<tr>
<td>ClosedCaptions</td>
<td>Boolean</td>
<td>Boolean indicating if CC icon should be displayed</td>
<td>True</td>
</tr>
<tr>
<td>HDBranded</td>
<td>Boolean</td>
<td>Boolean indicating if HD branding should be displayed</td>
<td>True</td>
</tr>
<tr>
<td>IsHD</td>
<td>Boolean</td>
<td>Boolean indicating if content is HD</td>
<td>True</td>
</tr>
<tr>
<td>SubtitleColor</td>
<td>String</td>
<td>Theme metadata attribute that specifies the color to use when rendering subtitle text</td>
<td>"#FF0000"</td>
</tr>
<tr>
<td>SubtitleConfig</td>
<td>roAssociativeArray: {TrackName : String}</td>
<td>Specifies the caption settings for content playback.<br /><br />TrackName sets the name of the caption track to render. This string is a concatenation of the track source and track id, separated by a "/".<br /><br />Valid track sources are: "ism", "mkv", "eia608" and "dvb".<br /><br />The track id must match the track identifier in the smooth or mkvmanifest. For example, if an mkvfile has a caption track called “english1” the TrackName to select this track is “mkv/english1”.<br /><br />When the track source is "dvb", the track id is the three-letter language code, with "_sdh" appended for subtitles for the deaf and hard of hearing. For example, "dvb/eng_sdh" are English subtitles for the deaf and hard of hearing and "dvb/nor" are normal Norwegian subtitles.<br /><br />For sideloaded caption tracks, the TrackName is the url from where the caption track can be downloaded.Sideloaded caption formats can include srt,ttml, anddfxp. Specifying eia608/1 will trigger the Roku OS to search for embedded 608/708 captions in the stream. In the 8.0 Roku OS, automatic track selection based on a preferred caption language setting is introduced. Omit setting a URL here to avoid interfering with the automatic track selection. It is sufficient to add the URLs to SubtitleTracks</td>
<td>{ TrackName :  "mkv/english1" }</td>
</tr>
<tr>
<td>SubtitleTracks</td>
<td>roArray of roAssociativeArray: [{Language : String, Description : String, TrackName : String},...]</td>
<td>SubtitleTracks sets the list of available caption tracks available to the stream. This list is added to the track list in the closed caption configuration dialog that is displayed during video playback when the user presses the Roku remote control * button. The captions from the selected track are then displayed on the screen. Language specifies the ISO 639.2B 3 character language code. This string is used to match the proper caption track with the audio language. Description specifies the text that will be shown for the corresponding track in the closed caption configuration dialog. For sideloaded caption tracks the TrackName is the URL from where the caption track can be downloaded. Sideloaded caption formats can include srt, ttml, and dfxp. The SubtitleTracks metadata is generally only used for side loaded captions. the Roku OS detects in-stream captions and thus specifying SubtitleTracks in this case is not necessary</td>
<td></td>
</tr>
<tr>
<td>SubtitleUrl</td>
<td>String</td>
<td>Specifies the path to an SRT or TTML formatted file used to render subtitles or closed captions, respectively. This is supported on roVideoScreen only. See <a href="/docs/developer-program/media-playback/closed-caption.md">Closed Caption Support</a> for additional details</td>
<td>"mysite.com/vid/1932.srt"; "mysite.com/vid/1932.xml"</td>
</tr>
<tr>
<td>VideoDisableUI</td>
<td>Boolean</td>
<td>If set to true, hides the Scene Graph Video node trick play UI; If set to false (the default) shows the Scene Graph Video node trick play UI</td>
<td>video = createObject("roSGNode", "Video"); video.content.VideoDisableUI = true</td>
</tr>
<tr>
<td>EncodingType</td>
<td>String</td>
<td>Specifies the encoding scheme for PlayReady DRM, by setting to one of the following values: <ul><li>"PlayReadyLicenseAcquisitionUrl"</li><li>"PlayReadyLicenseAcquisitionAndChallenge"  Note, this is the same value that used to be specified directly in Content Metadata structure</li></ul></td>
<td></td>
</tr>
<tr>
<td>EncodingKey</td>
<td>String</td>
<td>Specifies the PlayReady license acquisition URL, and additional custom request data, determined by the EncodingType attribute value specified: <ul><li><p>when encodingType="PlayReadyLicenseAcquisitionUrl", the EncodingKey attribute contains the PlayReady license acquisition URL</p></li><li><p>when encodingType="PlayReadyLicenseAcquisitionAndChallenge", the EncodingKey attribute contains the PlayReady license acquisition URL plus additional custom license acquisition request data in format "URL%%%"  Note, this is the same value that used to be specified directly in Content Metadata structure   The app just needs to set drmParams.licenseSererUrl.</p></li></ul></td>
<td></td>
</tr>
<tr>
<td>SwitchingStrategy</td>
<td>String</td>
<td>roVideoPlayer or roVideoScreen.<br /><br />Specify different stream switching algorithms to be used in HLS adaptive streaming. <br />Only has an effect on HLS streams. "full-adaptation" uses measured bandwidth and buffer fullness to determine when to switch. This strategy requires that segments align across variants as the HLS spec requires. This is the new default</td>
<td>"full-adaptation"</td>
</tr>
<tr>
<td>Watched</td>
<td>Boolean</td>
<td>Flag indicating if content has been watched</td>
<td>True</td>
</tr>
<tr>
<td>ForwardQueryStringParams</td>
<td>Boolean</td>
<td>Controls whether query string parameters from initial HLS stream manifest requests are forward to subsequent segment download requests. The default value is set to true for backwards compatibility.</td>
<td>True</td>
</tr>
<tr>
<td>ForwardDashQueryStringParams</td>
<td>Boolean</td>
<td>Controls whether query string parameters from initial DASH stream manifest requests are forward to subsequent segment download requests. The default value is set to false for backwards compatibility.</td>
<td>False</td>
</tr>
<tr>
<td>IgnoreStreamErrors</td>
<td>Boolean</td>
<td>When set to true the media player will not stop playback when it runs into a streaming related error for this content. Instead, it will skip to the next item in the content list.<br /><br />If this was the last item in the content list the media player will send a regular completion event (like isFullResult). Apps are still notified of any errors via an isRequestFailed notification but a new attribute in the event’s GetInfo object tells the app the error was ignored.<br /><br />See the changes related to isRequestFailed for more information. The default value is false.</td>
<td><pre><code><code>json&lt;br /&gt;video_details = \\{&lt;br /&gt;    streamFormat: "mp4"&lt;br /&gt;    ignoreStreamErrors: true&lt;br /&gt;    streams: [\\{bitrate: 537, height: 360, width: 640, url: “https://..."\\}]&lt;br /&gt;\\}&lt;br /&gt;</code></code></pre></td>
</tr>
<tr>
<td>AdaptiveMinStartBitrate</td>
<td>Integer</td>
<td>Minimum startup bitrate specified in kbps. Streaming will start with a variant equal to or greater than this value. If this value is not set or if it's set to zero, any minimum start bitrate will be ignored.</td>
<td>5000</td>
</tr>
<tr>
<td>AdaptiveMaxStartBitrate</td>
<td>Integer</td>
<td>Maximum startup bitrate specified in kbps. Streaming will start with a variant less than or equal to this value. If this value is not set, it will default to 2500 kbps.</td>
<td>2000</td>
</tr>
<tr>
<td>filterCodecProfiles</td>
<td>Boolean</td>
<td>Filters out any video profile/codec level combinations that the specified hardware cannot play. The default value is false, in which case no filtering occurs. <strong>Note that this currently only works for DASH streams.</strong></td>
<td>True</td>
</tr>
<tr>
<td>LiveBoundsPauseBehavior</td>
<td>String</td>
<td>Allows an app to customize Media Player behavior on live streams when playing in the earliest part of a DVR buffer.<br /><br />The stream remains paused even though it is playing in the earliest part of the buffer of a live stream when the value of the attribute is set to "pause." This enables the Roku OS to distinguish between live streams and live streams that eventually transition to video on demand.<br /><br />The possible values of this attribute are "resume", "stop", "pause", with resume being the default value.<br /><br /><strong>Currently, this attribute will work only with Smooth and Dash streams.</strong>  (Available since Roku OS 8.1)</td>
<td>Resume</td>
</tr>
<tr>
<td>ClipStart</td>
<td>Float</td>
<td>ClipStart sets the clip start position of the playback. The unit of ClipStart is seconds (Available since Roku OS 8.1).</td>
<td>00.0</td>
</tr>
<tr>
<td>ClipEnd</td>
<td>Float</td>
<td>ClipEnd sets the clip end position. The unit of ClipEnd is seconds (Available since Roku OS 8.1).</td>
<td>00.0</td>
</tr>
<tr>
<td>PreferredAudioCodec</td>
<td>String</td>
<td>Specifies the audio codec that should be used during playback. The Media Player will select and report to the app only those audio renditions that are encoded with the specified codec. Renditions that are encoded with a different codec are ignored. Possible values of this attribute are "aac", "ac3" and "eac3".</td>
<td>"aac"</td>
</tr>
<tr>
<td>AudioWhitelist</td>
<td>String</td>
<td>Comma-separated list of audio tracks (based on ISO 639-1 or ISO 639-2 language code) that may be selected from the <strong>Audio track</strong> setting for the content.<br /><br /></td>
<td>"en, spa"</td>
</tr>
<tr>
<td>AudioBlacklist</td>
<td>String</td>
<td>Comma-separated list of audio tracks (based on ISO 639-1 or 639-2 language code) that may not be selected from the <strong>Audio track</strong> setting for the content. <br /><br />(Available since Roku OS 9.4)<br /><br />If a language is both blacklisted  and whitelisted, the blacklisting takes precedence.</td>
<td>"ita, fr"</td>
</tr>
<tr>
<td>CaptionWhitelist</td>
<td>String</td>
<td>Comma-separated list of captioning tracks (based on ISO 639-2 language code) that may be selected from the <strong>Accessibility&gt;Captioning track</strong> setting for the content.<br /><br /></td>
<td>"en, spa"</td>
</tr>
<tr>
<td>CaptionBlacklist</td>
<td>String</td>
<td>Comma-separated list of captioning tracks (based on ISO 639-2 language code) that may not be selected from the <strong>Accessibility&gt;Captioning track</strong> setting for the content.<br /><br />(Available since Roku OS 9.4)<br /><br />If a language is both blacklisted  and whitelisted, the blacklisting takes precedence.</td>
<td>"deu, dan"</td>
</tr>
</tbody>
</table>






## CDN switching

Content Delivery Networks (CDNs) can be switched during playback to load balance traffic and failover to different servers in order to help optimize performance.  The **CdnConfig** attribute can be used for managing load balancing and failovers.


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdnConfig</td>
<td>roArray of roAssociativeArrays</td>
<td><table><thead><tr><th>Key</th><th>Required/ Optional</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>URLFilter</td><td>Required</td><td>String</td><td>A substring that identifies the (base)URL to which these CDN settings apply. <br /><br />The Roku media player matches this string against all (base)URLs listed in the manifest and applies the setting to all (base)URLs that contain this substring.</td></tr><tr><td>ContentFilter</td><td>Optional</td><td>String</td><td>For DASH streams, a substring that filters the period or asset ID to which these CDN settings apply.<br /><br /> The Roku player only applies these CDN setting to periods with a period ID or asset ID that contains this substring. <br /><br />This match is used in addition to the URL filter.</td></tr><tr><td>Priority</td><td>Required</td><td>Integer</td><td>For configuring failovers, sets the priority for this (base)URL from 1 to x (a priority of 0 or less is invalid). <br /><br />A lower value indicates a higher priority. For example, a (base)URL with a priority of 1 is higher than another with a priority of 10. <br /><br />If the highest priority server fails, traffic is routed to the server with the next highest priority. If all servers are configured with the same priority, and one fails, no failover will happen.</td></tr><tr><td>Weight</td><td>Required</td><td>Integer</td><td>For configuring load balancing, sets the relative weight for all (base)URLs with the same priority. This must be a value of 1 or greater (a weight of 0 disables a CDN). <br /><br />The weight of a given BaseURL is its weight value divided by the sum of all weight values. This means that to spread the load equally across multiple CDNs with the same priority, set the weight for each to the same value. To configure the weights for two servers to 80% and a third server to 20%, for example, set servers one and two to 8 and server three to 4.</td></tr><tr><td>ServiceLocation</td><td>Optional</td><td>String</td><td>A blacklist of failed BaseURL locations.</td></tr></tbody></table></td>
<td>To use this field, create a child node and use a playlist (even though only one content item will be in the playlist). This field is updated only when <strong>contentIsPlayList</strong> is true.<br /><br />The <strong>URLFilter</strong>, <strong>Priority</strong>, and <strong>Weight</strong> attributes must be specified to apply these configurations.</td>
</tr>
</tbody>
</table>


**Example**

```
this.cur_clip.CDNConfig = [
	{URLFilter:"http://cdn1.xyz.com/abc/", ContentFilter, “testProgram”, priority: 1, weight: 50, serviceLocation: "west"},
	{URLFilter:"http://cdn2.xyz.com/abc/", ContentFilter, “testProgram”, priority: 1, weight: 50, serviceLocation: "east"},
	{URLFilter:"http://cdn1.xyz.com/abc/", ContentFilter, “testProgram”, priority: 2, weight: 50, serviceLocation: "west"},
	{URLFilter:"http://cdn2.xyz.com/abc/", ContentFilter, “testProgram”, priority: 2, weight: 50, serviceLocation: "east"},
]
```




## SceneGraph certificate attributes

The SceneGraph certificate meta-data attributes are used to configure
the use of HTTP certificates and cookies by the Audio and Video nodes.
Please note that when setting any of the following four attributes on
a Video or Audio node, you need to be careful that the values are set on
the correct HTTPAgent. If the node does not have its own HTTPAgent, set
by explicitly calling setHttpAgent() on the node, the Roku OS will
traverse up the scene graph hierarchy until it finds the first node in
the Video or Audio node's ancestry that has set an HTTPAgent. If none
is found, the values will be set on the global HTTPAgent which is always
guaranteed to exist. Therefore if you expect the header, etc. values
set to only apply to your Audio and Video nodes, create a unique
instance of roHttpAgent for them and assign it directly. For example,
for a Video node you should do the following:


~~~~
'Assume video is a valid Video node instance

httpAgent = CreateObject("roHttpAgent")
video.setHttpAgent(httpAgent)
~~~~



<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
</tr>
</thead>
<tbody>
<tr>
<td>HttpCertificatesFile</td>
<td>uri</td>
<td>If set, the Scene Graph Audio or Video node loads this public certificate bundle, to authenticate the server. The protocol must be https for this to have any effect. When used with a Scene Graph Audio or Video node, the node or global HttpAgent is found, as explained elsewhere in this documentation. When playing this content, the agent is updated in the following manner: <ul><li>If this attribute is defined, the file URI is set into the HttpAgent instance. However, if this attribute is specified and the value is the empty string (""), then no changes will be made to the HttpAgent.</li><li>If this attribute is not defined, the behavior depends upon whether the Content Meta-Data (CMD) contains secure (https) URLs:<ul><li>If no secure URLs exist in the meta-data, then no certificates file path is set into the agent.</li><li>If a secure URL does exist, the platform's default certificates are set into the agent.</li></ul></li></ul></td>
</tr>
<tr>
<td>HttpCookies</td>
<td>array of strings</td>
<td>If set, the Scene Graph Audio or Video node send the cookies to the server. Each cookie must have the following syntax: dom=domain;path=path;name=name;val=value; When used with a Scene Graph Audio or Video node, the node or global HttpAgent is found, as explained elsewhere in this documentation. When this Content Meta-Data is played and this attribute is set, all HTTP cookies in the agent are cleared and replaced with the cookies defined by this attribute</td>
</tr>
<tr>
<td>HttpHeaders</td>
<td>array of strings</td>
<td>If set, the Scene Graph Audio or Video node sends these headers to the server. Each string must be of the format "name:value". When used with a Scene Graph Audio or Video node, the node or global HttpAgent is found, as explained elsewhere in this documentation. When this Content Meta-Data is played and this attribute is set, all HTTP headers in the agent are cleared and replaced with the headers defined by this attribute</td>
</tr>
<tr>
<td>HttpSendClientCertificate</td>
<td>Boolean</td>
<td>If true, the Scene Graph Audio or Video node sends the client device certificate to the server, for client authentication. The protocol must be https for this to have any effect. When used with a Scene Graph Audio or Video node, the node or global HttpAgent is found, as explained elsewhere in this documentation. When this Content Meta-Data is played and this attribute exists, the value of this attribute (true or false) is set into the HttpAgent</td>
</tr>
</tbody>
</table>



### drmHttpAgent for handling DRM key/license requests separately

Since Roku OS 9.3, you can create a separate agent to handle DRM key and license requests, apart from other types
of requests.

Once you have created your agent, you can set the Video node's `drmHttpAgent` field directly to designate that the special
agent is to supersede any currently-set agent in the case of DRM key and license requests. The `drmHttpAgent` field must be configured before setting the content in the Video node.

~~~~
' Configure the DRM HttpAgent before setting content in the Video node
 httpAgent = CreateObject("roHttpAgent")
 httpAgent.AddHeader("DRM-Specific-1", "weqweqweqweqweqweqeqeqeqeqwe")
 httpAgent.AddHeader("DRM-Specific-2", "fgfgfgfgfgfgfgfgfg")
 httpAgent.AddHeader("DRM-Specific-3", "zxzxzxzxxzxzxzxzxzx")
 m.video.drmHttpAgent = httpAgent    
 m.video.content = videocontent
~~~~

If `drmHttpAgent` is not set (the default), uri fetches for video involving the DRM URLs
(`serializationURL`, `licenseServerURL`, `licenseRenewURL`) of ContentMetaData will
use the video's regular HttpAgent. However, if the `drmHttpAgent` is set, the agent
cited in the field will be used for those fetches instead.

> The "SceneGraph Certificate Attributes" mentioned above all have "Drm" versions,
> with names formed by the prefixing "Drm" to the "regular" names
> (e.g., `HttpCookies` becomes `DrmHttpCookies`, and so forth).
> These attributes take precedence over those of the drmHttpAgent.

## Playback control attributes

The playback control meta-data attributes are used to control
the playback parameters for the content item.  


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>MinBandwidth</td>
<td>Integer</td>
<td>roVideoPlayer or roVideoScreen: Will only select variant streams with a bandwidth higher than this minimum bandwidth. Units are kbps. By default Wowza servers set streams to 64 kbs, so you might want to set this parameter to something smaller than 64 when first testing Wowza streams. You will eventually want to specify the Wowza bitrates with a smil file (Please see the encoding guide)</td>
<td>48</td>
</tr>
<tr>
<td>MaxBandwidth</td>
<td>Integer</td>
<td>roVideoPlayer or roVideoScreen: Will only select variant streams with a bandwidth less than this maximum bandwidth. Units are kbps</td>
<td>2500</td>
</tr>
<tr>
<td>AudioPIDPref</td>
<td>Integer</td>
<td><strong>This attribute is deprecated</strong><br /><br />Users can select their preferred audio language on-device in the <strong>Settings &gt; Audio &gt; Audio Preferred Language</strong> screen.</td>
<td>483</td>
</tr>
<tr>
<td>FullHD</td>
<td>Boolean</td>
<td>roVideoPlayer or roVideoScreen: Specify that this stream was encoded at 1080p resolution</td>
<td>true</td>
</tr>
<tr>
<td>FrameRate</td>
<td>Integer</td>
<td>roVideoPlayer or roVideoScreen: Specify the 1080p stream was encoded at 24 or 30 fps</td>
<td>24</td>
</tr>
</tbody>
</table>



## Track ID attributes



<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Values</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>TrackIDAudio</td>
<td>String</td>
<td>roVideoPlayer or roVideoScreen: Used in SmoothStreaming (StreamFormat = "ISM") to specify. Set the TrackIDAudio field to the desired track's StreamIndex.Name attribute from the manifest file</td>
<td>"Spanish"</td>
</tr>
<tr>
<td>TrackIDVideo</td>
<td>String</td>
<td>roVideoPlayer or roVideoScreen: Used in SmoothStreaming (StreamFormat = "ISM") to specify. Set the TrackIDVideo field to the desired track's StreamIndex.Name attribute from the manifest file</td>
<td>"h264video"</td>
</tr>
<tr>
<td>TrackIDSubtitle</td>
<td>String</td>
<td>roVideoPlayer: Used to specify a closed caption track in a video stream that supports 608/708 captions</td>
<td>"eia608/1"</td>
</tr>
<tr>
<td>AudioFormat</td>
<td>String</td>
<td>roSpringboardScreen: If set to "dolby-digital", will display a "5.1 ))" icon in the lower left of a movie style springboard screen</td>
<td>"dolby-digital"</td>
</tr>
<tr>
<td>AudioLanguageSelected</td>
<td>String</td>
<td><strong>This attribute was deprecated as of the Roku 9.2 OS release.</strong> <br /><br />Users can select their preferred audio language on-device in the <strong>Settings &gt; Audio &gt; Audio Preferred Language</strong> screen.</td>
<td>"eng"</td>
</tr>
</tbody>
</table>


## roListScreen attributes


| Attribute            | Type   | Values                                        | Example                                |
| -------------------- | ------ | --------------------------------------------- | -------------------------------------- |
| SDBackgroundImageUrl | String | roListScreen: URL for the SD background image | mysite.com/images/bg1_sd.jpg  |
| HDBackgroundImageUrl | String | roListScreen: URL for the HD background image | mysite.com/images/bg1_hd.jpg  |


## Rating attribute icons

The Rating attribute contains the MPAA or TV rating stored as a string.
At runtime, the ratings are shown with an icon instead of rendering the
string as text. The following table shows the list of valid values for
the Rating attribute, and the resulting icon that will be displayed for
each value.


| Value    | Icon  |
| -------- | ----- |
| G        | ![roku815px - G rating](https://image.roku.com/ZHZscHItMTc2/g.png "g-rated") |
| NC-17    | ![roku815px - NC17 rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata2.png "nc17-rated") |
| PG       | ![roku815px - PG rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata3.png "pg-rated") |
| PG-13    | ![roku815px - PG-13 rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata4.png "pg13-rated") |
| R        | ![roku815px - R rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata5.png "r-rated") |
| UR       | ![roku815px - UR](https://image.roku.com/ZHZscHItMTc2/ur.png "ur-rated") |
| UNRATED  | ![roku815px - Unrated rating](https://image.roku.com/ZHZscHItMTc2/ur.png "ur-rated") |
| NR       | ![roku815px - Not rated](https://image.roku.com/ZHZscHItMTc2/contentmetadata7.png "nr-rated") |
| TV-Y     | ![roku815px - TV-Y rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata8.png "tv-y-rated") |
| TV-Y7    | ![roku815px - TV-Y7 rating](https://image.roku.com/ZHZscHItMTc2/tvy7.png "tv-y7-rated") |
| TV-Y7-FV | ![roku815px - TV-Y7-FV rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata10.png "tv-y7-fv-rated") |
| TV-G     | ![roku815px - TV-G rating](https://image.roku.com/ZHZscHItMTc2/tvg.png "tv-g-rated") |
| TV-PG    | ![roku815px - TV-PG rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata12.png "tv-pg-rated") |
| TV-14    | ![roku815px - TV-14 rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata13.png "tv-14-rated") |
| TV-MA    | ![roku815px - TV-MA rating](https://image.roku.com/ZHZscHItMTc2/contentmetadata14.png "tv-ma-rated") |

## Content feed video lesson

You can learn how to link the content metadata in your app's feed to a ContentNode by watching the [Creating the content feed](/videos/courses/rsg/content-feed.md) video lesson in Roku's [SceneGraph: Build a Channel online video course](https://developer.roku.com/videos/courses/rsg/overview.md).