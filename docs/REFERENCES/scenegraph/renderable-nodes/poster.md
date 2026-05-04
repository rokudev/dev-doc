---
title: Poster
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Extends [**Group**](doc:group)

The Poster node class draws an image with the top/left corner located at the origin of the node local coordinate system. Because the Poster node class extends the Group node class, a Poster node can have child nodes. For example, a Poster node might have a Label node as a child that draws an annotation on top of the poster.

The Poster node class supports JPEG, PNG and (since [Roku OS 9.4](doc:release-notes#roku-os-94)) [WebP](https://developers.google.com/speed/webp/) image files. Please observe [Special WebP considerations](doc:streaming-specifications) when using the latter.

The Poster node class includes the capability to automatically scale graphical images to different sizes as they are loaded, by setting the loadWidth and loadHeight field values. After the graphical images are loaded, the images can be scaled to fit within the target screen element area specified by the width and height field values. To use this capability, select the scaling option you want as the value of the loadDisplayMode field.

See SceneGraph's [Texture Memory](doc:memory-management) feature for more information.

> In order for the load scaling options to work, the option fields must be set in XML markup before the uri field

### Best Practice when using this node

* Avoid loading either very large images (larger than the target screen dimensions), or very small images, with the intent of the Roku OS scaling to a certain design intention. These can cause an unsatisfactory appearance, or even application issues such as degraded performance.

* For the best appearance and application performance load images either identical to, or close to, the intended target screen dimensions of the Poster node in your application design.

* Set the dimensions of an image in your design by setting the Poster node width and height fields.
  If you do not set these fields, designs implemented in certain forms of XML markup may not render as intended, unless you use an explicit callback layout function triggered by the Poster node loadStatus field, to render the screen element after the image has loaded and the dimensions are known.

### Example

The following example is a poster image placed using Poster node:

<Image alt="roku815px - poster-node-sample" border={false} src="https://image.roku.com/ZHZscHItMTc2/poster-node-sample.png" title="poster-node-sample" />

The following displays a graphic image from the application images directory near the top left of the display screen.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="postertest" extends="Group">
  <script type="text/brightscript">
    <![CDATA[
      sub init()
        m.top.setFocus(true)
      end sub
    ]]>
  </script>

  <Poster
    id="testPoster"
    uri="pkg:/images/rokuowds.png"
    width="0.0"
    height="0.0"
    translation="[160,8]" />
</component>
```

### Autoscaling

When autoscaling between FHD/HD, there may be cases where using images with widths or heights that are not divisible by 2 (i.e. even numbers) do not work correctly.

### Rotation

Rotation of Posters is supported. On platforms that do not support OpenGL, only rotations of 0, 90, 180, and 270 degrees are supported.

## Fields

[Fields](doc:group)  derived from the Group base class can also be used.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Default</th>
      <th>Access Permission</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>uri</td>
      <td>string</td>

      <td />

      <td>READ\_WRITE</td>
      <td>Specifies the URI of the image file. Images included as part of the application package can be referenced using the pkg:/images prefix. Images included as part of the application package that are to be localized can be referenced using the pkg:/locale/images/ prefix (see <a href="https://roku-ent.readme.io/dev/docs/localization#localizing-graphical-images-in-the-application-package" title="Localizing Graphical Images in the Application Package">Localizing Graphical Images in the Application Package</a>)</td>
    </tr>

    <tr>
      <td>width</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_WRITE</td>
      <td>Specifies the width of the image in local coordinates. If set to 0.0, the width of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that width</td>
    </tr>

    <tr>
      <td>height</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_WRITE</td>
      <td>Specifies the height of the image in local coordinates. If set to 0.0, the height of the bitmap from the image file is used. If set to a value greater than 0.0, the bitmap is scaled to that height</td>
    </tr>

    <tr>
      <td>loadSync</td>
      <td>Boolean</td>
      <td>false</td>
      <td>READ\_WRITE</td>
      <td>Controls whether the image is loaded synchronously in the render thread, and appears immediately, or loaded asynchronously in a background thread, and may not appear immediately. If set to true, and the uri field specifies a local file (in the pkg:/images directory), the image is loaded synchronously, and appears immediately. If set to false, or if the uri field specifies a file from a remote server (a URL starting with http: or https:), the image is loaded asynchronously in a background thread, and may not appear immediately. Be careful when setting this field to true, as it might cause brief glitches in the rendering while the image is being fetched and loaded</td>
    </tr>

    <tr>
      <td>loadWidth</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_WRITE</td>
      <td>Scale the graphical image to the specified width when loaded, preserving aspect ratio. If set to the default, no load-time scaling occurs. If the width field is not set, the loadWidth field is used as the default width of the displayed image</td>
    </tr>

    <tr>
      <td>loadHeight</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_WRITE</td>
      <td>Scale the graphical image to the specified height when loaded, preserving aspect ratio. If set to the default, no load-time scaling occurs. If the height field is not set, the loadHeight field is used as the default height of the displayed image</td>
    </tr>

    <tr>
      <td>loadDisplayMode</td>
      <td>option string</td>
      <td>noScale</td>
      <td>READ\_WRITE</td>
      <td>Provides automatic scaling of graphical images after loading. If you intend to load very large graphical images, such as larger than the user interface resolution, you must set one of the scaling options other than noScale, otherwise the image may fail to load. The following are the possible field values: <table><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td>limitSize</td><td>Scale the image while loading it into texture memory so that the maximum width and height in either dimension does not exceed the specified loadWidth or loadHeight values. If the image is smaller in both dimensions than the specified values, the image is loaded at its regular size. Aspect ratio is preserved.</td></tr><tr><td>noScale</td><td>The bitmap will be loaded at the image's original resolution. If the Poster's width and height differ from the bitmap's resolution, it will be scaled to fill the Poster's dimensions. Aspect ratio is not preserved.</td></tr><tr><td>scaleToFit</td><td>Scale the image to fit into the target screen element area, preserving the aspect ratio but "letterboxing" or "pillarboxing" the image (background-color bars at the top/bottom or left/right of the image).<br /><blockquote>This field in not supported on Liberty and Littlefield devices for images that are both scaled and rotated. On these devices, scaled and rotated images appear as if the **scaleToFill** property was applied to them.</blockquote></td></tr><tr><td>scaleToFill</td><td>Stretch the image dimensions to fill the target screen element area, distorting the image if the target screen element area has a different aspect ratio than the image.</td></tr><tr><td>scaleToZoom</td><td>Scale the image to fill the target screen element area, preserving the aspect ratio but not "letterboxing" or "pillarboxing" the image, with some of the image cropped out.</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>loadStatus</td>
      <td>value string</td>
      <td>none</td>
      <td>READ\_ONLY</td>
      <td>Can be used to track the progress of loading the graphical image file. A typical use of this field is to set an observer so that when the field value changes to ready, an action can be triggered. The possible values are: <table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>none</td><td>No loading or decoding of the graphical image file is taking place</td></tr><tr><td>loading</td><td>Graphical image file is being fetched and decoded</td></tr><tr><td>ready</td><td>Graphical image file has been fetched and decoded and is ready to be drawn</td></tr><tr><td>failed</td><td>Graphical image file could not be loaded for some reason, such as the uri field value is set to a non-existent file location</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>bitmapWidth</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_ONLY</td>
      <td>After the graphical image file is loaded, contains the width of the graphical image in pixels</td>
    </tr>

    <tr>
      <td>bitmapHeight</td>
      <td>float</td>
      <td>0.0</td>
      <td>READ\_ONLY</td>
      <td>After the graphical image file is loaded, contains the height of the graphical image in pixels</td>
    </tr>

    <tr>
      <td>bitmapMargins</td>
      <td>associative array</td>
      <td>invalid</td>
      <td>READ\_ONLY</td>
      <td>This field is set to an associative array with four elements "left", "right", "top" and "bottom". If the Poster's bitmap is a 9-patch image, the associative array is set to margin info encoded along the right and bottom edges of the image. If the Poster's bitmap is not a 9-patch image, all values in the associative array are set to 0. The bitmapMargins field is set whenever the Poster's loadStatus field changes (e.g. when the bitmap has been loaded).</td>
    </tr>

    <tr>
      <td>blendColor</td>
      <td>color</td>
      <td>0xFFFFFFFF</td>
      <td>READ\_WRITE</td>
      <td>Can be used to tint the image by multiplying the color of each pixel by the specified value. If this value is not set to a value other than the default value, no color blending will be performed</td>
    </tr>

    <tr>
      <td>loadingBitmapUri</td>
      <td>string</td>

      <td />

      <td>READ\_WRITE</td>
      <td>Specifies a bitmap file to display while the poster image is loading.<br /><br />To execute a seamless cross-fade transition between posters, set the <strong>loadingBitmapUri</strong> of the next poster to be shown to the uri of the currently displayed poster.</td>
    </tr>

    <tr>
      <td>loadingBitmapOpacity</td>
      <td>float</td>
      <td>1.0</td>
      <td>READ\_WRITE</td>
      <td>Used to control the rendering opacity of the graphical image that indicates a bitmap is loading. This value multiplies the Poster node opacity</td>
    </tr>

    <tr>
      <td>failedBitmapUri</td>
      <td>string</td>

      <td />

      <td>READ\_WRITE</td>
      <td>Specifies a bitmap file to display when the poster image failed to load</td>
    </tr>

    <tr>
      <td>failedBitmapOpacity</td>
      <td>float</td>
      <td>1.0</td>
      <td>READ\_WRITE</td>
      <td>Used to control the rendering opacity of the graphical image that indicates a bitmap failed to load. This value multiplies the Poster node opacity</td>
    </tr>

    <tr>
      <td>audioGuideText</td>
      <td>string</td>

      <td />

      <td>READ\_WRITE</td>
      <td>If muteAudioGuide is false, this string will be spoken when the poster is focused</td>
    </tr>
  </tbody>
</table>

## Sample app

[PosterExample](https://github.com/rokudev/samples/tree/master/ux%20components/screen%20elements/renderable%20nodes/PosterExample) is a sample app demonstrating Poster in action.
