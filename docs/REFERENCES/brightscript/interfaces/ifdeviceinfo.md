---
title: ifDeviceInfo
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
## Implemented by

| Name                             | Description                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| [roDeviceInfo](doc:rodeviceinfo) | The roDeviceInfo component provides an interface to obtain attributes about the device |

## Supported methods

#### Device properties

### GetModel() as String

#### Description

Returns the model name of the Roku device. See the [Hardware Specification](/docs/specs/hardware.md) for the list of the current, updatable, and legacy Roku models.

#### Return Values

A five-character alphanumeric string (for example, "3050X") .

### GetModelDisplayName() as String

#### Description

Returns the model display name of the Roku device.

#### Return Values

The model display name (for example, "Roku 2 XD")

### GetModelType() as String

#### Description

Returns a string describing the type of device. For future compatibility, the caller should by default assume "STB" when anything other than described value is returned

#### Return Values

The device type, which may be one of the following values:

* "STB": Set-top box.
* "TV": Roku TV.

### GetModelDetails() as Object

#### Description

Returns detailed information about the device model.

#### Return Values

An associative array containing the following information about the device model:

| Name          | Type   | Description               |
| ------------- | ------ | ------------------------- |
| VendorName    | String | The model vendor.         |
| ModelNumber   | String | The model number.         |
| VendorUSBName | String | The USB vendor.           |
| ScreenSize    | String | The size of the Roku TV.  |
| Manufacturer  | String | Manufacturer information. |

### GetFriendlyName() as String

#### Description

Returns a string describing the device that may be used for network device selection.  The string is subject to change and should not be used as a persistent key or ID

#### Return Values

A user-assigned device name or a description of the device such as model name and/or serial number.

### GetOSVersion() As Object

#### Description

Returns an roAssociativeArray containing the **major**, **minor**, **revision**, and **build** numbers of the Roku OS running on the device.

#### Return Values

An roAssociativeArray containing the following fields:

| Name     | Type   | Description                                   |
| -------- | ------ | --------------------------------------------- |
| major    | string | The major version number (for example, 9)     |
| minor    | string | The minor version number (for example, 2)     |
| revision | string | The firmware revision number (for example, 6) |
| build    | string | The build number (for example, 4127)          |

### GetVersion() as String

> **This method is deprecated**.
>
> Developers must update their apps to use [GetOSVersion()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getosversion-as-object) method to get the current Roku OS version running on a device.

#### Description

Returns the version number of the device.

#### Return Values

A 13-character string (for example "034.08E01185A"). The third through sixth characters are the major/minor version number ("4.08") and the ninth through twelfth are the build number ("1185")

### GetDeviceUniqueId() as String

> **This method is deprecated**.
>
> Developers must update their apps to use the 32-character alphanumeric unique identifier returned by [GetChannelClientId()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string).

#### Description

Returns a string of 12 zeroes (it no longer returns the unique identifier for the app on a device).

#### Return Values

A string of 12 zeros ("000000000000")

### GetAdvertisingId() as String

> **This method is deprecated**.
>
> Developers must update their apps to use the [GetRIDA()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string) method to get the unique identifier.

#### Description

Returns a unique identifier for the device. This identifier is persistent but can be reset by the user from the device's Settings menu or by performing a factory reset on the device.

If the user has disabled Ad ID tracking from the settings menu, then this identifier should not be used for targeted advertising. IsAdIdTrackingDisabled() should be called to check if the user has disabled Ad ID tracking

#### Return Values

A Universally Unique Identifier (UUID) as specified in IETF-RFC 4122 with 36 characters (32 alphanumeric characters and four hyphens). The characters are grouped in the form 8-4-4-4-12, for example "123e4567-e89b-12d3-a456-426655440000"

### GetRIDA() as String

#### Description

Returns a unique identifier for the device.

If the user has set "Limit ad tracking" from the **Settings** menu (the user has opted out of targeted advertising), the RIDA is set to a temporary ID. This temporary ID is different than the UUID returned if the user has not opted out, and it expires after 30 days. Apps must still pass this temporary ID on ad server requests to support frequency capping.

> If the user’s country is an EU member country, any data collection must be compliant with the [EU General Data Protection Regulation (GDPR)](/docs/features/legal/compliance.md#gdpr).

#### Return Values

A Universally Unique Identifier (UUID). This identifier is persistent, but it can be reset by the user from the device's **Settings** menu or by performing a factory reset on the device

### IsAdIdTrackingDisabled() as Boolean

> **This method is deprecated**.
>
> Developers must update their apps to use [IsRIDADisabled()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean) to get the Ad Id tracking status.

#### Description

If Ad Id tracking is disabled, the identifier returned by GetAdvertisingId() should not be used for Ad targeting

#### Return Values

Returns true if the user has disabled Ad Id tracking by selecting "Limit ad tracking" from the Roku Settings menu, false otherwise.

### IsRIDADisabled() as Boolean

#### Description

Indicates whether tracking via Roku's ID for Advertisers (RIDA) is disabled on the device.

#### Return Values

A flag indicating whether RIDA tracking is disabled on the device (RIDA tracking can be disabled by selecting "Limit ad tracking" from the **Settings>Privacy>Advertising** menu). If RIDA tracking is disabled, this returns true; false otherwise.

### GetClientTrackingId() as String

> **This method is deprecated**.
>
> Developers must update their apps to use the [GetChannelClientId](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string) method to get the unique identifier.

#### Description

Returns a unique identifier for the device.

#### Return Values

A unique identifier. This identifier is different across apps so each app will get a different identifier when calling this function

### GetChannelClientId() as String

#### Description

Returns a unique identifier for the device. The ID is persistent and cannot be reset. This value can be used to manage or identify devices linked to the app’s content services.

#### Return Values

A unique identifier. This identifier is different across apps so each app will get a different identifier when calling this function

### GetUserCountryCode() as String

Returns the ISO 3166-1 (2-letter) country code associated with the user's Roku account.

#### Return Values

An ISO 3166-1 (2-letter) country code.

> If the app owner entered into an additional agreement to have the app published to a curated [Roku Powered Streaming Store](https://www.roku.com/roku-powered) instead of the user country, a Roku Powered Streaming Store Identifier will instead be returned:

| Roku Powered Streaming Store | Roku Powered Streaming Store Identifier | Country |
| ---------------------------- | --------------------------------------- | ------- |
| Econet                       | Econet                                  | ZW      |
| Globe                        | globe                                   | PH      |
| PLDT                         | PLDT                                    | PH      |
| Sky Germany                  | skyde                                   | DE      |
| Sky Spain                    | skyes                                   | ES      |
| Sky Ireland                  | skyie                                   | IE      |
| Sky Italy                    | skyit                                   | IT      |
| Sky UK                       | skyuk                                   | UK      |
| Telstra                      | Telstra                                 | AU      |

> A future enhancement to GetUserCountryCode() will return the 2-letter country code instead of the Roku Powered Streaming Store Identifier. It is therefore recommended that apps use both to avoid having to update later.

### GetRandomUUID() as String

#### Description

Returns a randomly generated unique identifier. Each time this function is called, a different identifier is returned

#### Return Values

A Universally Unique Identifier (UUID) version 4 as specified in IETF-RFC 4122 with 36 characters (32 alphanumeric characters and four hyphens). The characters are grouped in the form 8-4-4-4-12, for example "123e4567-e89b-12d3-a456-426655440000"

### GetTimeZone() as String

#### Description

Checks for the user's current system time zone setting.

#### Return Values

A string representing the user's current system time zone setting. For example, this method may return values such as:

* "US/Puerto Rico-Virgin Islands"
* "US/Guam"
* "US/Samoa"
* "US/Hawaii"
* "US/Aleutian"
* "US/Alaska"
* "US/Pacific"
* "US/Arizona"
* "US/Mountain"
* "US/Central"
* "US/Eastern"
* "Canada/Pacific"
* "Canada/Mountain"
* "Canada/Central Standard"
* "Canada/Central"
* "Canada/Eastern"
* "Canada/Atlantic"
* "Canada/Newfoundland"
* "Europe/Germany"
* "Europe/Iceland"
* "Europe/Ireland"
* "Europe/United Kingdom"
* "Europe/Portugal"
* "Europe/Central European Time"
* "Europe/Greece/Finland"

> Click [here](/docs/references/brightscript/interfaces/time-zones.md) for the complete list of time zones returned by this method.

### HasFeature(feature as String) as Boolean

#### Description

Checks if the current device/firmware supports the passed in feature string.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>feature</td>
      <td>String</td>
      <td>The feature to be checked, which may be one of the following values: <ul><li>"5.1\_surround\_sound"</li><li>"can\_output\_5.1\_surround\_sound"</li><li>"sd\_only\_hardware"</li><li>"usb\_hardware"</li><li>"sdcard\_hardware"</li><li>"ethernet\_hardware"</li><li>"gaming\_hardware"</li><li>"energy\_star\_compliant"</li><li>"soundbar\_hardware". Check whether the device has soundbar hardware (for example, speakers).</li><li>"voice\_remote" (). Checks whether a Roku device is paired with a Roku voice remote. This enables developers to tailor the in-app user experience for viewers with Roku voice remote controls.</li><li>"handsfree\_voice" (). Checks whether a Roku device is paired with a hands-free Roku remote control such as the Roku Voice Remote Pro. This enables developers to tailor the in-app user experience for viewers with hands-free Roku remote controls (for example, displaying voice tips and tricks in the UI).</li></ul><blockquote><p>The "1080p\_hardware" argument is deprecated. Apps should use the GetVideoMode() and CanDecodeVideo() functions instead</p></blockquote></td>
    </tr>
  </tbody>
</table>

#### Return Values

A flag indicating whether the current device/firmware supports the passed in feature string.

### GetCurrentLocale() as String

#### Description

Gets the current locale value based on the user's language setting.

#### Return Values

A string representing the current locale based on the user's language setting. The string is an ISO 639-1 (2-letter) language code followed by an underscore and a ISO 3166-1 (2-letter) country code. This may be one of the following values:

| String  | Locale                |
| ------- | --------------------- |
| "en_US" | US English            |
| "en_GB" | British English       |
| "en_CA" | Canadian English      |
| "en_AU" | Australian English    |
| "fr_CA" | Canadian French       |
| "es_ES" | International Spanish |
| "es_MX" | Mexican Spanish       |
| "de_DE" | German                |
| "it_IT" | Italian               |
| "pt_BR" | Brazilian Portuguese  |

### GetCountryCode() as String

#### Description

Checks for the country code of the app.

#### Return Values

A value that indicates the Streaming Store associated with a user’s Roku account. Typically, the value returned will be an ISO 3166-1 (2-letter) country code representing the country. Alternatively, if the app owner entered into an additional agreement to have the app published to a curated [Roku Powered Streaming Store](https://www.roku.com/roku-powered) instead of the user country, then a Roku Powered Streaming Store Identifier will instead be returned. This may be one of the following values:

| Value     | Country                            | Roku Powered Streaming Store (if applicable) |
| --------- | ---------------------------------- | -------------------------------------------- |
| "AR"      | Argentina                          |                                              |
| "AU"      | Australia                          |                                              |
| "BR"      | Brazil                             |                                              |
| "CA"      | Canada                             |                                              |
| "CL"      | Chile                              |                                              |
| "CO"      | Colombia                           |                                              |
| "CR"      | Costa Rica                         |                                              |
| "DE"      | Germany                            |                                              |
| "Econet"  | Zimbabwe                           | Econet                                       |
| "FR"      | France                             |                                              |
| "GB"      | Great Britain and Northern Ireland |                                              |
| "globe"   | Philippines                        | Globe                                        |
| "GT"      | Guatemala                          |                                              |
| "HN"      | Honduras                           |                                              |
| "IE"      | Republic of Ireland                |                                              |
| "MX"      | Mexico                             |                                              |
| "OT"      | Rest of World                      |                                              |
| "PA"      | Panama                             |                                              |
| "PE"      | Peru                               |                                              |
| "PLDT"    | Philippines                        | PLDT                                         |
| "Telstra" | Australia                          | Telstra                                      |
| "skyde"   | Germany                            | Sky Germany                                  |
| "skyes"   | Spain                              | Sky Spain                                    |
| "skyie"   | Ireland                            | Sky Ireland                                  |
| "skyit"   | Italy                              | Sky Italy                                    |
| "skyuk"   | United Kingdom                     | Sky UK                                       |
| "SV"      | El Salvador                        |                                              |
| "US"      | United States                      |                                              |

> This does not necessarily match the physical location of the device, nor does it necessarily match the last two letters of the current locale string.

### GetPreferredCaptionLanguage() as String

#### Description

Checks the two-letter ISO 639-1 language terminology code of the preferred caption language set on the Roku device.

#### Return Values

The two-letter ISO 639-1 language terminology code, which may be one of the following values:

| Language   | Code |
| ---------- | ---- |
| English    | en   |
| Spanish    | sp   |
| French     | fr   |
| German     | de   |
| Italian    | it   |
| Portuguese | Pt   |
| Russian    | ru   |
| Turkish    | tr   |
| Polish     | Pl   |
| Ukranian   | uk   |
| Romanian   | Rm   |
| Dutch      | nl   |
| Croatian   | hr   |
| Hungarian  | hu   |
| Greek      | el   |
| Czech      | cs   |
| Swedish    | sv   |

### TimeSinceLastKeypress() as Integer

#### Description

Checks for the number of seconds passed since the last remote keypress.

#### Return Values

The number of seconds since the last remote keypress was received.

### GetDrmInfo() as Object

> **This method is deprecated**.
>
> Developers must update their apps to use the replacement API [GetDrmInfoEx()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdrminfoex-as-object) to return the supported DRM system and features.

#### Description

Checks for the supported DRM system and its features.

#### Return Values

An associative array with the supported DRM system and features. For example, a device that supports PlayReady inside a trusted environment with secure stop returns:

``\{"playready": "tee;ss"\}``

The values for the PlayReady key above are:

- **tee** indicates the core DRM system runs in a Trusted Execution Environment
- **ss** indicates the DRM system supports secure stop

### GetDrmInfoEx() as Object

**Description**

Checks for the DRM system used by the app.

**Return Values**

An associative array with the supported DRM system and features:

**Example**

```
PlayReady : {
    multikey: false
    securestop: true
    tee: false
    version: "2.5"
    securityLevel: "3000"
}
Widevine : {
    multikey: true
    securestop: false
    tee: false
    version: "widevine 16.4.0"
    securityLevel: "1"
}
```

> tee indicates the core DRM system runs in a Trusted Execution Environment.

### GetCaptionsMode() as String

#### Description

Determines whether global captions are turned on or off, or are in instant replay mode.

#### Return Values

The current global setting for the Mode property, which may be one of the following values:

- On
- Off
- Instant replay

> On a Roku TV, when the user selects "On Mute", this function will return "On" when the TV is muted and "Off" when it is not muted.

### SetCaptionsMode(mode as String) as Boolean

#### Description

Sets the current global setting for the Mode property.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>mode</td>
<td>String</td>
<td>The current global setting for the Mode property, which may be one of the following values: <ul><li>On</li><li>Off</li><li>Instant replay</li><li>When mute (Roku TVs only)</li></ul></td>
</tr>
</tbody>
</table>



#### Return Values

A flag indicating whether the Mode property was successfully set.

### GetCaptionsOption(option as String) as String

#### Description

Checks the current value of the specified global setting property.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Option</td>
<td>String</td>
<td>The global setting property to be checked, which may be one of the following values: <ul><li>Mode</li><li>Text/Font</li><li>Text/Effect</li><li>Text/Size</li><li>Text/Color</li><li>Text/Opacity</li><li>Background/Color</li><li>Background/Opacity</li><li>Window/Color</li><li>Window/Opacity</li><li>Track</li><li>Track_Composite</li><li>Track_Analog</li><li>Muted</li></ul></td>
</tr>
</tbody>
</table>



#### Return Values

The value of the specified global setting property, which may be as follows:


<table>
<thead>
<tr>
<th>Queried Property</th>
<th>Possible Values</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mode</td>
<td><ul><li>On</li><li>Off</li><li>Instant replay</li><li>When mute (Roku TVs only)</li></ul></td>
</tr>
<tr>
<td>Text style</td>
<td><ul><li>Default</li><li>Serif Fixed Width</li><li>Serif Proportional</li><li>Sans Serif Fixed Width</li><li>Sans Serif Proportional</li><li>Casual</li><li>Cursive</li><li>Small Caps</li></ul></td>
</tr>
<tr>
<td>Text edge effect</td>
<td><ul><li>Default</li><li>None</li><li>Raised</li><li>Depressed</li><li>Uniform</li><li>Drop shadow (left)</li><li>Drop shadow (right)</li></ul></td>
</tr>
<tr>
<td>Text size</td>
<td><ul><li>Default</li><li>Extra large</li><li>Large</li><li>Medium</li><li>Small</li><li>Extra small</li></ul></td>
</tr>
<tr>
<td>Text color</td>
<td><ul><li>Default</li><li>White</li><li>Black</li><li>Red</li><li>Green</li><li>Blue</li><li>Yellow</li><li>Magenta</li><li>Cyan</li></ul></td>
</tr>
<tr>
<td>Text opacity</td>
<td><ul><li>Default</li><li>25%</li><li>75%</li><li>100%</li></ul></td>
</tr>
<tr>
<td>Background Color</td>
<td><ul><li>Default</li><li>White</li><li>Black</li><li>Red</li><li>Green</li><li>Blue</li><li>Yellow</li><li>Magenta</li><li>Cyan</li></ul></td>
</tr>
<tr>
<td>Background Opacity</td>
<td><ul><li>Default</li><li>Off</li><li>25%</li><li>75%</li><li>100%</li></ul></td>
</tr>
<tr>
<td>Window Color</td>
<td><ul><li>Default</li><li>White</li><li>Black</li><li>Red</li><li>Green</li><li>Blue</li><li>Yellow</li><li>Magenta</li><li>Cyan</li></ul></td>
</tr>
<tr>
<td>Window Opacity</td>
<td><ul><li>Default</li><li>Off</li><li>25%</li><li>75%</li><li>100%</li></ul></td>
</tr>
</tbody>
</table>

#### Example

~~~
di = CreateObject("roDeviceInfo")
mode = di.GetCaptionsMode()

print "Font=";di.GetCaptionsOption("Text/Font")
print "Color=";di.GetCaptionsOption("Text/Color")
print "Size=";di.GetCaptionsOption("Text/Size")
print "Effect=";di.GetCaptionsOption("Text/Effect")
print "Opacity=";di.GetCaptionsOption("Text/Opacity")
print "Background Color=";di.GetCaptionsOption("Background/Color")
print "Background Opacity=";di.GetCaptionsOption("Background/Opacity")
print "Window Color=";di.GetCaptionsOption("Window/Color")
print "Window Opacity=";di.GetCaptionsOption("Window/Opacity")
~~~

### GetClockFormat() as String

#### Description

Checks whether the system settings for Time (**Setting > System > Time**) is set to a 12 or 24-hour format.

#### Return Values

The time format:

- "12h": 12-hour AM/PM format
- "24h": 24-hour format
- "": error

### IsClockValid() as Dynamic

#### Description

Checks if the device's system clock is valid.

#### Return Values

A flag indicating whether the system clock on the device is valid.

### EnableValidClockEvent(enable as Boolean) as Dynamic

*Available since Roku OS 13.0*

#### Description

Notifies the app when the device's system clock becomes valid.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether to enable valid system clock events. |

#### Return Values

A flag indicating whether valid system clock events are enabled (true) or disabled (false).

### EnableAppFocusEvent(enable as Boolean) as Dynamic

#### Description

Notifies the app when a system overlay event (such as the [confirm partner button HUD](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) or the caption control overlay) is displayed. This notification gives the app the opportunity to do any processing they may want to when the app loses or regains focus.

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether to enable/disable system overlay event notifications. |

#### Return Values

A flag indicating whether the system overlay event notifications are enabled (true) or disabled (false).


### EnableScreensaverExitedEvent(enable as Boolean) as Dynamic

#### Description

Notifies the app when a screensaver exit event occurs. This function enables the sending of an [roDeviceInfoEvent](/docs/references/brightscript/events/rodeviceinfoevent.md) when a user has exited the screensaver.

To receive events, you must have first called [SetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md) on the roDeviceInfo object specifying the message port that is to receive the events

#### Parameters

| Name   | Type    | Description                                                  |
| ------ | ------- | ------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether to enable/disable screensaver exit event notifications. |

#### Return Values

A flag indicating whether screensaver exit event notifications are enabled (true) or disabled (false).

### IsHDMIConnected() as Boolean

> **This method is deprecated**.
>
>  Developers must use the [ifHdmiStatus](/docs/references/brightscript/interfaces/ifhdmistatus.md) interface functions instead.

#### Description

Checks for an HDMI connection.

#### Return Values

A flag indicating whether an HDMI connection to a TV has been detected.