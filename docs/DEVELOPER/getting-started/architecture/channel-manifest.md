---
title: "Manifest file"
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

#  Manifest file

## Root level

The root level of all Roku apps must contain a `manifest` file
(`pkg:/manifest`) containing important attributes for the application.
These attributes include but are not limited to the following:

  - Name and version number of the application
  - App icon
  - Splash screen image

## Manifest guidelines

  - Each attribute is on a separate line, and has the form `name=value`
  - Each `name=value` pair must end with a newline character, or it may
    not be parsed by the Roku OS
  - The last line must end with a newline character
  - Empty lines are ignored
  - Lines beginning with a '\#' (number sign) are comment lines and are
    ignored
  - All graphics files specified in the manifest file should be included
    in the `images` directory
  - The URI to set the path to the files should use the `pkg:` resource
    prefix, such as `pkg:/images/splash-screen.png`

## Example manifest file

~~~~
# Channel Details
title=HeroGridChannel
major_version=1
minor_version=1
build_version=1

# Channel Assets
mm_icon_focus_hd=pkg:/images/channel-poster_hd.png
mm_icon_focus_sd=pkg:/images/channel-poster_sd.png

# Splash Screen + Loading Screen Artwork
splash_screen_sd=pkg:/images/splash-screen_sd.jpg
splash_screen_hd=pkg:/images/splash-screen_hd.jpg
splash_screen_fhd=pkg:/images/splash-screen_fhd.jpg
splash_color=#808080
splash_min_time=0
# Resolution
ui_resolutions=fhd

confirm_partner_button=1
~~~~


## Required attributes

These are the minimum attributes required for every Roku app:


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>title</code></td>
<td>string</td>
<td>name of the app</td>
<td><code>title=Roku Media Player</code></td>
<td></td>
</tr>
<tr>
<td><code>major_version</code></td>
<td>integer</td>
<td>major portion of the app version</td>
<td><code>major_version=1</code></td>
<td></td>
</tr>
<tr>
<td><code>minor_version</code></td>
<td>integer</td>
<td>minor portion of the app version</td>
<td><code>minor_version=2</code></td>
<td></td>
</tr>
<tr>
<td><code>build_version</code></td>
<td>integer</td>
<td>build number</td>
<td><code>build_version=00150</code></td>
<td></td>
</tr>
<tr>
<td><code>mm_icon_focus_fhd</code></td>
<td>string</td>
<td>local URI for the FHD app icon.<br /><br /><strong>NOTE:</strong> The app will not appear on devices or be accessible after publication without this attribute pointing to a valid image. The image's file name and file type must also match.</td>
<td><code>mm_icon_focus_fhd=pkg:/images/channel-icon_FHD.png</code></td>
<td>540x405</td>
</tr>
<tr>
<td><code>mm_icon_focus_hd</code></td>
<td>string</td>
<td>local URI for the HD app icon.<br /><br /><strong>NOTE:</strong> The app will not appear on devices or be accessible after publication without this attribute pointing to a valid image. The image's file name and file type must also match.</td>
<td><code>mm_icon_focus_hd=pkg:/images/channel-icon_HD.png</code></td>
<td>290x218</td>
</tr>
<tr>
<td><code>splash_screen_hd</code></td>
<td>string</td>
<td>local URI for the HD splash screen displayed when the app is launched</td>
<td><code>splash_screen_hd=pkg:/images/splash-screen_HD.jpg</code></td>
<td>1280x720</td>
</tr>
<tr>
<td><code>splash_screen_sd</code></td>
<td>string</td>
<td>local URI for the SD splash screen displayed when the app is launched</td>
<td><code>splash_screen_hd=pkg:/images/splash-screen_SD.jpg</code></td>
<td>720x480</td>
</tr>
</tbody>
</table>


## Optional attributes

The following categories of attributes are optional:

### Voice control attributes


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>supports_etc_seek</code></td>
<td>integer</td>
<td>Enables handling of "seek" and "start over" voice commands. <br /><br />If  this flag is not enabled, an error message is displayed when an app receives a "seek" or "start over" command.</td>
<td><code>supports_etc_seek=1</code></td>
</tr>
<tr>
<td><code>supports_etc_next</code></td>
<td>integer</td>
<td>Enables handling of "next" voice commands. <br /><br />If  this flag is not enabled, an error message is displayed when an app receives a "next" command.</td>
<td><code>supports_etc_next=1</code></td>
</tr>
<tr>
<td><code>supports_voice_roinput</code></td>
<td>integer</td>
<td>Specifies that the app supports voice controls.</td>
<td><code>supports_voice_roinput=1</code></td>
</tr>
<tr>
<td><code>voice_action_launch_screen</code></td>
<td>integer</td>
<td>Specifies that the app displays a hands-free voice profile selection screen upon launch.</td>
<td><code>voice_action_launch_screen=1</code></td>
</tr>
</tbody>
</table>


### Splash screen attributes


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>splash_color</code></td>
<td>hex value</td>
<td>background color to use if the splash screen image is not full screen</td>
<td><code>splash_color=#121212</code></td>
<td></td>
</tr>
<tr>
<td><code>splash_min_time</code></td>
<td>integer</td>
<td>minimum amount of time (in milliseconds) to display the splash screen<br /><br />If no value is specified, then 1600 (1.6 seconds) is used. If 0 is specified, then there is no default time, so the splash screen disappears as soon as the application displays its first screen. (This may result in the appearance of flashing, if your application shows its first screen quickly).</td>
<td><code>splash_min_time=1500</code></td>
<td></td>
</tr>
<tr>
<td><code>splash_screen_fhd</code></td>
<td>string</td>
<td>local URI for the FHD splash screen<br /><br />The FHD splash screen image is scaled down for HD display mode but this attribute can be used to specify a resolution-specific splash screen image.</td>
<td><code>splash_screen_fhd=pkg:/images/splash-screen_FHD.png</code></td>
<td>1920x1080</td>
</tr>
<tr>
<td><code>splash_rsg_optimization</code></td>
<td>integer</td>
<td>Roku recommends that you do not use this attribute at this time as it may deplete your app's available memory resources. Set this attribute to remove the black screen flash in SceneGraph apps. This is only applicable for SceneGraph apps and only if the first screen is a SceneGraph component.</td>
<td><code>splash_rsg_optimization=1</code></td>
<td></td>
</tr>
</tbody>
</table>



### Graphics scaling attributes



<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ui_resolutions</code></td>
<td>comma separated values</td>
<td>A comma-separated list of up to three strings that identify the UI resolutions the application has been designed to support.</td>
<td><code>ui_resolutions=sd,hd,fhd</code></td>
</tr>
<tr>
<td><code>uri_resolution_autosub</code></td>
<td>comma separated values</td>
<td>Provides a flexible way to specify graphical image URIs that are automatically modified to replace a specified string with a string that gets a resolution-specific graphical image.<br /><br />The attribute value is a comma-separated list of four strings that specify the string to be replaced along with the replacement strings for SD, HD and FHD resolutions. For example, suppose the manifest includes this line: <code>uri_resolution_autosub=$$RES$$,SD,720p,1080p</code> And the Roku player supports full high-definition resolution. Then if the application specifies a URI of: http://www.roku.com/testChannel/assets/$$RES$$/rokuTV.jpg. At runtime that URI will be modified to: http://www.roku.com/testChannel/assets/1080p/rokuTV.jpg and the application will get the full-high definition version of the graphical image in the specified directory.</td>
<td><code>uri_resolution_autosub=$$RES$$,SD,720p,1080p</code></td>
</tr>
</tbody>
</table>



1. The default setting for `ui_resolutions` is `ui_resolutions=sd,hd`
    - `sd` Applications designed for standard definition 720x480  
    - `hd` Applications designed for high definition 1280x720  
    - `fhd`Applications designed for full high definition 1920x1080

### Launch requirement attributes

| Attribute                | Type    | Description                                                                                                                                                                                                                                                                                                               | Sample manifest entry             |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `supports_input_launch`    | integer | The [roInputEvent](/docs/references/brightscript/events/roinputevent.md) is used to check whether a deep link has been passed into the application while your app is running. This enables your application to deep link into content without re-launching your app. This attribute must be added to the manifest for this functionality to work. | `supports_input_launch=1`           |
| `requires_gaming_remote`   | integer | Specifies that a gaming remote must be linked to the Roku Player to launch the application. If not, a dialog box is presented to the user.                                                                                                                                                                                | `requires_gaming_remote=1`          |
| `requires_mkv`             | integer | Playing MKV files requires the use of a dynamically loaded library that is not part of the initially booted image. Therefore, an entry must be added to the manifest of any applications that require MKV support so that support is enabled when the app is launched.                                                | `requires_mkv=1`                    |
| `network_not_required`     | integer | Set to 1 to specify the application does not require the network (such as the USB Media Player). This lets the user launch an application even if there is no network connection.                                                                                                                                         | `network_not_required=1`            |
| `bs_libs_required`       | string  | Specifies the BrightScript libraries required for the application.                                                                                                                                                                                                                                                        | `bs_libs_required=roku_ads_lib`     |
| `usb_media_handler`        | integer | Set to 1 to specify if the app can be auto-launched when a USB device is inserted.                                                                                                                                                                                                                                    | `usb_media_handler=1`               |


### DRM attributes



<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>requires_verimatrix_drm</code></td>
<td>integer</td>
<td>Downloads the required library to use Verimatrix DRM.</td>
<td><code>requires_verimatrix_drm=1</code></td>
</tr>
<tr>
<td><code>requires_verimatrix_version</code></td>
<td>value</td>
<td>Specifies the version of Verimatrix DRM to use. Roku currently supports version 1.0.</td>
<td><code>requires_verimatrix_version=1.0&lt;br /&gt;</code><br /><br /><blockquote><p>As of Roku OS 9.3, support for Verimatrix DRM has been removed from the firmware. Make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click <a href="/docs/specs/media/content-protection.md">here</a> for more information on implementing these DRMs.</p></blockquote></td>
</tr>
</tbody>
</table>



> See [Content Protection](/docs/specs/media/content-protection.md) for implementation details.


### Special purpose attributes


<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Sample manifest entry</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>hidden</code></td>
<td>integer</td>
<td>The hidden property tells the Roku OS to not display the app on the home screen. Hidden apps can still be launched over the network via the <a href="/docs/developer-program/dev-tools/external-control-api.md">External Control API</a>.</td>
<td><code>hidden=1</code></td>
</tr>
<tr>
<td><code>playonly_aware</code></td>
<td>integer</td>
<td>Attribute to specify the application responds to the PlayOnly remote control button event. If not set, the application will receive the Play event instead when the user selects the button.</td>
<td><code>playonly_aware=1</code></td>
</tr>
<tr>
<td><code>pause_aware</code></td>
<td>integer</td>
<td>Attribute to specify the application responds to the pause remote control button event.<br /><br />When this attribute is not set (the default), the application will not respond to the pause event and will toggle between "play" and "pause" modes when it receives the play event.<br /><br />When the attribute is set to <code>1</code>, the play event strictly indicates play-mode (no toggling), and a pause event is necessary to invoke pause-mode.</td>
<td><code>pause_aware=1</code></td>
</tr>
<tr>
<td><code>channel_token</code></td>
<td></td>
<td>Token string used to grant access for specific Roku platform features (for example, Continue Watching)</td>
<td><code>ewogICJpc3MiOiAidXJuOnJva3UuY29tOnRva2VubWludDpjaGFubmVsdG9rZW4iLAogICJhdWQiOiAidXJuOnJva3UuY29tOnN0Yi9jaGFubmVsIiwKICAic3ViIjogInVybjpyb2t1LmNvbTpzdGIvNzAzMDM0IiwKICAianRpIjogInVybjo4ZjNhN2FiNi1mMWJkLTQ1MTYtOTRiNS0wYTc3ZjNmMDY2OGEiLAogICJpYXQiOiAxNzA1NTI3NzE4LAogICJleHAiOiAyMDIwODg3NzE4LAogICJuYmYiOiAxNDU2NzkwNDAwLAogICJyb2t1LXRmdiI6ICIxIiwKICAicm9rdS1wZXJtIjogWwogICAgImp3dF9oZWFkZXIiCiAgXSwKICAicm9rdS1jaGFubmVsLWlkIjogWwogICAgIjEiCiAgXQp9</code></td>
</tr>
<tr>
<td><code>run_as_process</code></td>
<td>Integer</td>
<td>Required for integrating <a href="/docs/developer-program/media-playback/instant-resume.md#updating-the-channel-manifest">Instant Resume</a> and using the <a href="/docs/developer-program/debugging/debugging-channels.md#scenegraph-debug-server-port-8080-commands">chanperf debug command</a>, <a href="/docs/developer-program/dev-tools/resource-monitor.md">Roku Resource Monitor</a>, and <a href="/docs/developer-program/release-notes/app-tracing.md">Perfetto</a>.</td>
<td><code>run_as_process=1</code></td>
</tr>
<tr>
<td><code>rsg_version</code></td>
<td>value</td>
<td>Sets the SceneGraph <a href="/docs/developer-program/core-concepts/handling-application-events.md">observer callback model</a>.<br /><br />If using Roku OS 9.0 or above, use <code>rsg_version=1.2</code>. This enables a new internal mechanism for processing component &lt;script&gt; tags that optimizes the resulting compiled script code resulting in a reduced initial startup time and lesser memory usage while preserving compatibility.<br /><br />If using a <a href="/docs/references/scenegraph/control-nodes/componentlibrary.md">Roku component library node</a>, the <code>rsg_version</code> flag needs to be declared in the component library's manifest as well.<br /><br /><a href="/docs/references/brightscript/language/runtime-functions.md#evalcode-as-string-as-dynamic">Eval()</a> is deprecated. Eval() cannot be used with <code>rsg_version=1.2</code>.<br /><br />The manifest entry defaults to 1.2 as of Roku OS 9.3 if it's not specified in the manifest.<br /><br />Note that support for the “rsg_version=1.0” manifest flag is deprecated as of Roku OS 8.</td>
<td><code>rsg_version=1.2</code></td>
</tr>
<tr>
<td><code>automatic_audio_guide_disabled</code></td>
<td>integer</td>
<td>Set to 1 to disable screen reader within an app.</td>
<td><code>automatic_audio_guide_disabled=1</code></td>
</tr>
<tr>
<td><code>disable_audio_guide_shortcut</code></td>
<td>integer</td>
<td>Disables the shortcut for activating the screen reader (pressing the options key [*] four times ).</td>
<td><code>`disable_audio_guide_shortcut=1</code></td>
</tr>
<tr>
<td><code>bs_prof_enabled</code></td>
<td>boolean</td>
<td>Enable <a href="/docs/developer-program/dev-tools/brightscript-profiler.md">BrightScript profiling</a></td>
<td><code>bs_prof_enabled=true</code></td>
</tr>
<tr>
<td><code>confirm_partner_button</code></td>
<td>integer</td>
<td>This new feature has been added that launches a confirmation dialogue before launching an app when the user presses one of the four app-specific buttons on the Roku remote. This minimizes the number of unintended app launches after accidentally hitting a button while fast forwarding or rewinding content in a different app. When this manifest flag is set to “1” (confirm_partner_button=1), the OS will display a confirmation HUD (Head Up Display) any time the user presses a partner app button while in that app. By default, the OS will always display this confirmation HUD when a partner button is pressed during video playback, regardless of if the manifest flag has been set. <img alt="roku815px - confirm partner button" src="https://image.roku.com/ZHZscHItMTc2/confirmpartnerbutton.jpg" /></td>
<td><code>confirm_partner_button=1</code></td>
</tr>
<tr>
<td><code>suppress_unconnected_hud</code></td>
<td>integer</td>
<td>Manifest entry for overriding network connectivity HUD. This attribute is used to override the system level display that indicates when media playback is interrupted due to network connection failures. <em>For more information on the connectivity HUD, please read the related <a href="https://support.roku.com/article/208755728-what-to-do-if-you-can">support article</a></em></td>
<td><code>suppress_unconnected_hud=[1|0]</code><br /><br />(1 suppresses, 0 enables).</td>
</tr>
<tr>
<td><code>dial_title</code></td>
<td>string</td>
<td>The name of the title used by the Roku <a href="/docs/developer-program/dev-tools/external-control-api.md#dial-discovery-and-launch">DIAL</a> server to identify the app.</td>
<td><code>dial_title=2Dvideo</code></td>
</tr>
<tr>
<td><code>game</code></td>
<td>integer</td>
<td>All game apps must add the game manifest entry to their manifest file. This flag prevents the app from having audio/sound effects delays in the game.</td>
<td><code>game=1</code></td>
</tr>
</tbody>
</table>



## Screensaver attributes

For an overview and guide on screensavers, see [Screensavers on Roku](/docs/developer-program/media-playback/screensavers.md).

### Required screensaver attributes

For stand-alone screensavers, only the following attributes are required:

| Attribute           | Type    | Description                                   | Sample manifest entry               |
| ------------------- | ------- | --------------------------------------------- | ----------------------------------- |
| `screensaver_title` | string  | name of the screensaver displayed in Settings | `screensaver_title=Dog Screensaver` |
| `major_version`     | integer | major portion of the screensaver version      | `major_version=1`                   |
| `minor_version`     | integer | minor portion of the screensaver version      | `minor_version=2`                   |
| `build_version`     | integer | build number                                  | `build_version=150`                 |

## Legacy attributes (Deprecated)

The following attributes are no longer required or used by Roku devices:

