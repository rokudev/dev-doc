---
title: "Specifying display resolution"
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

# Specifying display resolution

SceneGraph applications allow you to specify an intended display screen
resolution for your user interface application. But SceneGraph
applications also automatically scale the screen elements for screen
displays and Roku players that do not support the intended screen
resolution. This gives you greater control of the appearance quality of
your application than in previous Roku firmware, and allows you to
design your application for full high-definition display resolution.

## SceneGraph display resolution scaling support

The following describes how SceneGraph applications support different
display screen resolutions.

### Supported screen resolutions

Roku players support up to three screen resolutions for the application
user interface, depending on the specific Roku player. Please note that
SD-only apps are not supported on Roku.


| Resolution           | Pixel Dimensions | Pixel Shape |
| -------------------- | ---------------- | ----------- |
| Full high-definition | 1920 x 1080      | square      |
| High-definition      | 1280 x 720       | square      |
| Standard definition  | 720 x 480        | non-square  |


### Automatic screen element scaling

SceneGraph applications can automatically scale screen elements, such as
fonts and rectangles, to any specified supported resolution. This
scaling is controlled by specifying the screen resolutions the
application is intended to support. If support is only specified for
high-definition, and not full high-definition, then the screen elements
are scaled from 720 resolution to 1080 resolution if needed for the
display resolution. If support is only specified for full
high-definition, and not high definition, then the screen elements are
scaled from 1080 resolution to 720 resolution if needed for the display
resolution.

#### Automatic selection of supported graphical image resolutions

SceneGraph applications can automatically select graphical images based
on the supported resolution. The Roku OS can modify a special URI
string with a variable that gets the correct graphical image for each
supported and specified resolution. If this special URI string is not
specified, the Roku OS will automatically scale graphical images to the
display resolution from the specified intended resolution.

#### Recommended intended resolution

For SceneGraph applications, Roku recommends you design and develop for
an intended 1080 screen resolution. But for performance reasons, for
Roku players and display screens that do not support full
high-definition resolution, you should supply both 1080 and 720
graphical images for your application. The SceneGraph application will
scale the design elements and the graphical images for the actual
supported resolution, but you can achieve the best appearance for all
supported resolutions if you provide both resolutions of graphical
images. If you can only provide one resolution of graphical images,
provide 720 graphical images.

### Manifest file screen resolution specification

You specify the intended support for various screen display resolutions
in special manifest file attributes for SceneGraph applications. The
following describes the manifest file attributes to specify the
supported screen resolutions for SceneGraph applications.


<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Attribute</strong></td>
<td><strong>Type</strong></td>
<td><strong>Description</strong></td>
<td><strong>Example</strong></td>
</tr>
<tr class="even">
<td><p>ui_resolutions</p></td>
<td><p>option list string</p></td>
<td><p>A comma-separated list of up to three strings that identify the UI resolutions the application has been designed to support. The string can include the following options:</p>
<div class="table-wrap">
<table>
<thead>
<tr class="header">
<th>Option</th>
<th>Support</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>sd</td>
<td>Applications designed for standard definition displays (480)</td>
</tr>
<tr class="even">
<td>hd</td>
<td>Applications designed for high-definition displays (720)</td>
</tr>
<tr class="odd">
<td>fhd</td>
<td>Applications designed for full high-definition displays (1080)</td>
</tr>
</tbody>
</table>
</div>
<p>The example shows how to specify that the application is intended for all three possible supported resolutions, and will automatically scale and select graphical images (if provided) for all three. The default value is <code>sd,hd</code>.</p></td>
<td><p><code>sd,hd,fhd</code></p>
<p> </p></td>
</tr>
<tr class="odd">
<td>uri_resolution_autosub</td>
<td>option list string</td>
<td><p>Provides a flexible way to specify graphical image URIs that are automatically modified to replace a specified string with a string that gets a resolution-specific graphical image.</p>
<p>The attribute value is a comma-separated list of four strings that specify the string to be replaced along with the replacement strings for SD, HD and FHD resolutions.</p>
<p>For example, suppose the manifest includes this line:</p>
<p><code>uri_resolution_autosub=$$RES$$,SD,720p,1080p</code></p>
<p>And the Roku player supports full high-definition resolution. Then if the application specifies a URI of:</p>
<p><code>http://www.roku.com/testChannel/assets/$$RES$$/rokuTV.jpg</code></p>
<p>At runtime that URI will be modified to:</p>
<p><code>http://www.roku.com/testChannel/assets/1080p/rokuTV.jpg</code></p>
<p>And the application will get the full-high definition version of the graphical image in the specified directory.</p></td>
<td><code>$$RES$$,SD,HD,FHD</code></td>
</tr>
<tr class="even">
<td>splash_screen_fhd</td>
<td>uri</td>
<td>URI of the FHD version of the splash screen.</td>
<td><code>&quot;pkg:/images/sge_fhd_splash.jpg&quot;</code></td>
</tr>
<tr class="odd">
<td>mm_icon_focus_fhd</td>
<td>uri</td>
<td>URI of the FHD application icon.</td>
<td><code>&quot;pkg:/images/sge_fhd_icon.jpg&quot;</code></td>
</tr>
</tbody>
</table>


### Autoscaling guidelines

When creating layouts of visual components that take advantage of the
Roku SceneGraph ability to autoscale layouts from one screen resolution
to another (such as, from FHD/1080p to HD/720p), the best results will
be obtained if you use the following simple rule.

When designing for FHD, positioning items on 3-pixel boundaries, and
specifying width, height, and spacing values that are divisible by three
will produce the best results. This allows each of those values to be
autoscaled to integer values in HD, since the FHD to HD scaling factor
is 2/3. This minimizes visual anomalies due to floating point rounding
errors.

Similarly, when designing for HD, positioning items on 2-pixel
boundaries, and specifying width, height, and spacing values that are
divisible by two will produce the best results. This allows each those
values to be autoscaled to integer values in FHD, since the HD to FHD
scaling factor is 1.5.

Failing to follow these rules may result in some minor visual artifacts
during animations when running at the autoscaled screen resolution. This
is most noticeable when a user scrolls through grids by holding down a
remote control direction pad key. The sizes and spacing between adjacent
items may vary by one pixel as the grid items scroll across the screen.

In general, these visual anomalies are minimal, but following these
simple guidelines will lead to better results. And of course, if you
want precise control of the screen layouts in both resolutions, you can
create separate layouts for HD and FHD, and set `ui_resolutions=HD,FHD`
in the application `manifest` file.