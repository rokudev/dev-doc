---
title: "Playing Videos"
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

# Playing Videos

Playing any type of video requires just one SceneGraph node
class: [Video](/docs/references/scenegraph/media-playback-nodes/video.md).

To play a video, you must first prepare the files to be served to the
Roku Player:

  - the video files must have been encoded in one of the formats
    supported by a Roku Player (see [Streaming
    specifications](/docs/specs/media/streaming-specifications.md))
  - if you want to use an adaptive bitrate switching scheme, the video
    files must be configured to use the supported adaptive bitrate
    scheme you want (see [Streaming
    specifications](/docs/specs/media/streaming-specifications.md))
  - you must also include any supporting files for special playback
    options you want, such as *trick
    play* (see [Trick mode](/docs/developer-program/media-playback/trick-mode/trick-mode.md))

Then, in your application, you must:

  - set the various playback configuration options for your video in
    a ContentNode using Content Meta-Data (see [Content
    Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md)) attributes
  - assign the ContentNode to the `content` field of
    the Video node
  - set other Video node fields for all other video playback
    appearance and function configuration you want for your particular
    video (or videos)

Then, when a user selects a video to play, you set
the Video node `control` field to `play`, in a callback function
triggered by the user selection event.

## Examples

Here are two example applications showing selecting and playing videos.
These examples demonstrate the use of the RowList node class to
create a custom content grid and Video node for video playback. The
second example also shows how to create a very simple details screen for
displaying more information about selected content before video
playback. They also show how to load and parse an MRSS feed so you can
see how to populate your apps with dynamic
    content.

  - [Simple\_Grid\_and\_Video](https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/Simple_Grid_with_Details_and_Video)
  - [Simple\_Grid\_with\_Details\_and\_Video](https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/Simple_Grid_with_Details_and_Video)

Here is another example application that uses the same content feed, but
renders the UI as a PanelSet.

  - [PanelSet\_and\_Video](https://github.com/rokudev/samples/blob/master/media/PanelSet_and_Video)

And here is a simple example using the same basic content with
a LabelList node for selecting the video to play. The XML file
containing the Content Meta-Data is included and read from
the `pkg:/server/videocontent.xml` file. Since the entire application
including the Content Meta-Data is contained within the application
package, you can see how the Content Meta-Data is parsed and
translated into a ContentNode, which supplies the items
displayed in the LabelList node, and then how the video is played
when the user selects a video from the list.

  - [VideoList](https://github.com/rokudev/samples/blob/master/ux%20components/lists%20and%20grids/VideoList)

## Setting focus on the video node

You must set focus on the Video node while playback is occurring for
the trick play bar and some other user interface options to be used.
After playback has finished, you will generally want to set focus back
on the user interface element (usually a list or grid or custom video
"details" screen) from which the user selected the video.

## Setting up your server video content meta-data files

For your server content meta-data XML files, always ensure that all
attribute strings containing the ampersand (&) character is properly
escaped by replacing it with the HTML entity `&amp;`. (This is
particularly important because many video stream URLs include this
character.) Also remember to properly escape all XML special characters
in the attribute strings, and use the correct HTML entities to format
your descriptive content meta-data attributes.

## Media playlists



Both the Audio and Video nodes support the use of playlists,
which are lists of several media items to play in sequence rather than a
single media item. If a playlist is used, setting the `loop` field to
true causes the entire playlist to play again after the last item in the
playlist completes.

To set an Audio or Video node to play several media items in
sequence:

1.  Set the `content` field to a ContentNode containing a
    child ContentNode for each media item in the playlist.
2.  Set the `contentIsPlaylist` field to true.

After setting the `control` field to `play`, you can control the
playback as follows:

  - to stop playing the current media item in the playlist, or end
    playback if the current item is the last in the playlist,
    set the `skipcontent` option of the `control` field
  - set the `nextContentIndex` field to an index of another item in the
    playlist to be played after the current item finishes, rather than
    the next item in the sequence
  - for Audio nodes, you can observe and use
    the `contentIndex` field value to control the appearance of the
    screen while the audio item is playing, such as showing the title of
    a song when that song begins playing

## Configuring video stream buffering

*All* digital video players must buffer a certain amount of the video
data stream before video playback can occur. These buffering operations
appear to the user as a delay between the time the user selects the
video to play, and the time when the video begins to play.
The Video node class includes special internal node instances to
indicate to the user that the video data stream is buffering, whether
before initial playback, or after buffering must occur again because the
video playback is interrupted by an unexpected slowdown in the video
stream transfer rate. (Video playback interruptions are more likely to
occur if you do not take advantage of some type of adaptive bitrate
configuration of the video playback, such as using a segmented adaptive
video playback scheme such as HLS, as described in [Streaming specifications](/docs/specs/media/streaming-specifications.md).)

To indicate to the user that the video stream is buffering,
the Video node class includes two instances of an
internal ProgressBar node, which, if set to be visible, appear at
the bottom center of the video playback screen area automatically when
video buffering is
occurring.

![roku815px - bufferbar40crop](https://image.roku.com/ZHZscHItMTc2/bufferbar40crop.jpg "bufferbar40crop")

These progress bars are configured in BrightScript by setting the fields
of the internal ProgressBar nodes as follows:

  - `retrievingBar` for the progress bar that appears when the video
    stream is being buffered prior to initial playback
  - `bufferingBar` for the progress bar that appears when the video
    stream must be buffered again after an unexpected stream transfer
    rate slowdown

These internal ProgressBar nodes have fields for configuring their
appearance, such as setting the color of the portion of the bar that
indicates the amount of buffering that has been accomplished. These
fields must be set in BrightScript. Other Video node fields are
available for configuring other aspects of the
internal ProgressBar nodes, such as setting the color of the text
of the progress bar. These fields can be set in either BrightScript or
XML markup.

To set the internal node fields in BrightScript, the Video node
object must be available within the scope of the BrightScript function
that will set the fields. For example, if a Video node was declared
and partially defined in XML markup, you must use
the `findNode()` function to declare the node object and access the
internal retrieving bar node fields:

~~~~
m.video = m.top.findNode("channel_video_node_id")
...
m.video.retrievingBar.internal_node_field = internal_node_field_value
...
~~~~

> Since you should always set the `control` field of a Video node in
BrightScript, you should always declare a Video node object in
BrightScript anyway, either by creating the object in BrightScript, or
using the `findNode()` function.

## Fast start media playback



Both the Audio and Video node classes also include a special control option to reduce or eliminate the
apparent delay before media playback begins (*fast start*). All digital
video requires some time after a video is selected to begin playback,
and video (and audio) files streamed over HTTP add network transfer
rates to this buffering time. You can configure your application
to reduce or eliminate this apparent delay to the user by setting
the Video (or Audio) node `control` field to `prebuffer`, at a
time when the user has moved focus to a description of the media item,
but before the user actually starts the playback. The media stream will
buffer in the background while the user is reading the description of
the media item. Then, if and when the user actually selects the media
item to play, you can set the `control` field to `play` as usual.

For example, if you have designed your SceneGraph application to have a
screen that shows a description of a video, with a button to actually
begin playback, you can use the `prebuffer` option of
the `control` field in a callback function triggered by the
screen focus event as
follows:

~~~~
sub setDetailsScreenFocus()
  if m.top.isInFocusChain() and not m.buttons.hasFocus() and not m.videoPlayer.hasFocus() then
    m.buttons.setFocus(true)
    ' prebuffer video while user is reading the details screen
    m.videoPlayer.control = "prebuffer"
  end if
end sub
~~~~

Then write the callback function for the playback button press event
that includes:

~~~~
m.videoPlayer.control = "start"
~~~~

If the user has taken a few seconds to read the details screen, the
video will start immediately after the playback button is pressed.  An
sample app demonstrating Fast Video Start can be found
here: [FastVideoStart](https://github.com/rokudev/samples/blob/master/media/FastVideoStart).

## MPEG-4 playback

For MPEG-4 (mp4) video files without segmented adaptive
bitrate switching files, set
the ContentNode `streamformat` meta-data attribute
to `mp4`, and the `url` attribute to the URL of the MPEG-4 video file.

## Segmented video playback

For the most basic segmented video playback, you only need to set
the `URL` and `StreamFormat` field values in a ContentNode,
assign the ContentNode to the `content` field of
the Video node, then set the Video node `control` field value
to `play` to start the video. For example:

~~~~
videoContent = createObject("RoSGNode", "ContentNode")
videoContent.url = "video_URI"
videoContent.streamformat = "hls"
m.video = m.top.findNode("video_node_ID")
m.video.content = videoContent
m.video.control = "play"
~~~~

## Segmented video playback with PlayReady DRM

If you include PlayReady DRM in your DASH video stream, set the
following Content Meta-Data attributes in your ContentNode:

  - `encodingtype`
  - `encodingkey`
  - `streamformat`
  - `url`

## Configuring trick play

For more advanced video playback (for example, incorporating "trick
play" DVD-like scene indexing functionality), there are fields in
the Video node and the associated ContentNode to provide
this functionality.

Trick play can be supported for a video in two ways. One option is to generate and provide a set
of BIF files for the video. For this approach, see our documentation on [BIF file creation using the Roku BIF tool](/docs/developer-program/media-playback/trick-mode/bif-file-creation.md).

The second option is to provide trickplay images in DASH or HLS, using the respective industry standards. You can learn more about this approach in our trickplay implementation documentation for [HLS and DASH](/docs/developer-program/media-playback/trick-mode/hls-and-dash.md).

After you have created the trickplay files for a video, you must place the
files on a server, and then configure the Video node to access the
files by setting the associated ContentNode using the trick
play attributes described in Content Meta-Data (see [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md)).

### Configuring trick play appearance

The Video node class includes an internal TrickPlayBar node to
provide the user interface for trick play. You can customize the
appearance of this internal node by accessing its fields in BrightScript
in the same manner as the internal ProgressBar nodes
(see [Configuring video stream buffering](/docs/developer-program/core-concepts/playing-videos.md#PlayingVideos-Configuringvideostreambuffering)).

## Configuring closed captions

Adding closed caption support is a simple matter of configuring the
subtitleconfig video node content element.
See [SceneGraphCaptionsDemo](https://github.com/rokudev/samples/blob/master/media/SceneGraphCaptionsDemo) for
an example of using side loaded TTML captions in your
app.

## Reading and assigning video configuration Content Meta-Data from your server

Generally you will want to have all of your content meta-data
configuration of a particular video in an XML/JSON file on your server.
You can then read this file, convert it to a ContentNode, and
set up the related user interface and video configuration for your video
in your Roku application.

This XML/JSON file should contain the strings or links to all the
information you need to present the video to the user for selection, and
to configure the video playback. In almost all cases, you should be able
to use the attributes listed in Content Meta-Data (see [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md)) which are all recognized as field names for
a ContentNode. In the rare cases where you
require a custom attribute not found in Content Meta-Data, you can
create a custom ContentNode by adding \<interface\> fields,
or possibly by setting up a parallel associative array that can be
accessed using the same user interface element node indexing that you
use for accessing ContentNodes.

### Descriptive Content Meta-Data

Descriptive content meta-data attributes are used to communicate
information to allow the user to select a video for playback. Most of
the attributes are either optional, or are specific to a particular type
of video. Set these attributes as you want for your user interface
design, and the types of videos you offer. The descriptive meta-data
attributes are:

  - `contenttype`
  - `title`
  - `titleseason`
  - `description`
  - `watched`
  - `length`
  - `releasedate`
  - `rating`
  - `starrating`
  - `userstarrating`
  - `shortdescriptionline1`
  - `shortdescriptionline2`
  - `episodenumber`
  - `numepisodes`
  - `actors`
  - `actor`
  - `directors`
  - `director`
  - `categories`
  - `category`
  - `hdbranded`
  - `ishd`
  - MPAA and TV Ratings (icon identifiers)

> If you participate in the Roku Search program, you can use the
information in the XML feed you supply to Roku for many of the meta-data
attributes listed above. See [Roku Search](/docs/features/engagement/roku-search.md) for complete details.

### Video configuration Meta-Data

See [Content Meta-Data](/docs/developer-program/getting-started/architecture/content-metadata.md) for the complete list of
video configuration meta-data.

### Example video Meta-Data XML Task node file reader

The following is an example of
a Task node that reads an XML file from a server containing
descriptive and configuration meta-data for videos. The Task node
converts the XML file attributes for each video, and builds the
corresponding ContentNode with the attribute data.
The Task node should be created, have an observer callback set for
the `videocontent` \<interface\> field, configured with the URL of
the server XML file as the `metadatauri` \<interface\> field, then
run. When the ContentNode is complete, it is assigned to
the `videocontent` \<interface\> field of the Task node, which
then triggers the callback function to configure lists or grids for each
video item, and allow the configuration meta-data to be assigned to
a Video node that plays the video.

**Example video Content Meta-Data Task node**

~~~~
<component name = "MetaDataCR" extends = "Task" >

  <interface>
    <field id = "metadatauri" type = "uri" value = "" />
    <field id = "videocontent" type = "node" />
  </interface>

  <script type = "text/brightscript" >

    <![CDATA[

    sub init()
      m.top.functionName = "getContent"
    end sub

    sub getContent()
      videocontent = createObject("RoSGNode","ContentNode")
      metadataxml = createObject("roXMLElement")

      ' uncomment/conditionalize for development package XML transfers (pkg:/server/foo.xml)
      xmlstring = ReadAsciiFile(m.top.metadatauri)
      metadataxml.parse(xmlstring)

      ' uncomment/conditionalize for published channel Internet XML transfers (http://serverdomain/foo.xml)
      ' readInternet = createObject("roUrlTransfer")
      ' readInternet.setUrl(m.top.metadatauri)
      ' metadataxml.parse(readInternet.GetToString())

      if metadataxml.getName()="MetaData"
        for each video in metadataxml.GetNamedElements("video")
          videoitem = videocontent.createChild("ContentNode")
          videoItem.setFields(video.getAttributes())
        end for
      end if
      m.top.videocontent = videocontent
    end sub

    ]]>

  </script>

</component>
~~~~

## Sample Apps

The table below summarizes all of the downloadable samples demonstrating
the video playback features introduced in this
section.
