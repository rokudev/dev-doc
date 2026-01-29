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

Returns the model name of the Roku device. See the [Hardware Specification](doc:hardware) for the list of the current, updatable, and legacy Roku models.

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
> Developers must update their apps to use [GetOSVersion()](doc:ifdeviceinfo) method to get the current Roku OS version running on a device.

#### Description

Returns the version number of the device.

#### Return Values

A 13-character string (for example "034.08E01185A"). The third through sixth characters are the major/minor version number ("4.08") and the ninth through twelfth are the build number ("1185")

### GetDeviceUniqueId() as String

> **This method is deprecated**.
>
> Developers must update their apps to use the 32-character alphanumeric unique identifier returned by [GetChannelClientId()](doc:ifdeviceinfo).

#### Description

Returns a string of 12 zeroes (it no longer returns the unique identifier for the app on a device).

#### Return Values

A string of 12 zeros ("000000000000")

### GetAdvertisingId() as String

> **This method is deprecated**.
>
> Developers must update their apps to use the [GetRIDA()](doc:ifdeviceinfo) method to get the unique identifier.

#### Description

Returns a unique identifier for the device. This identifier is persistent but can be reset by the user from the device's Settings menu or by performing a factory reset on the device.

If the user has disabled Ad ID tracking from the settings menu, then this identifier should not be used for targeted advertising. IsAdIdTrackingDisabled() should be called to check if the user has disabled Ad ID tracking

#### Return Values

A Universally Unique Identifier (UUID) as specified in IETF-RFC 4122 with 36 characters (32 alphanumeric characters and four hyphens). The characters are grouped in the form 8-4-4-4-12, for example "123e4567-e89b-12d3-a456-426655440000"

### GetRIDA() as String

#### Description

Returns a unique identifier for the device.

If the user has set "Limit ad tracking" from the **Settings** menu (the user has opted out of targeted advertising), the RIDA is set to a temporary ID. This temporary ID is different than the UUID returned if the user has not opted out, and it expires after 30 days. Apps must still pass this temporary ID on ad server requests to support frequency capping.

> If the user’s country is an EU member country, any data collection must be compliant with the [EU General Data Protection Regulation (GDPR)](doc:compliance).

#### Return Values

A Universally Unique Identifier (UUID). This identifier is persistent, but it can be reset by the user from the device's **Settings** menu or by performing a factory reset on the device

### IsAdIdTrackingDisabled() as Boolean

> **This method is deprecated**.
>
> Developers must update their apps to use [IsRIDADisabled()](doc:ifdeviceinfo) to get the Ad Id tracking status.

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
> Developers must update their apps to use the [GetChannelClientId](doc:ifdeviceinfo) method to get the unique identifier.

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

> Click [here](doc:time-zones) for the complete list of time zones returned by this method.

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
> Developers must update their apps to use the replacement API [GetDrmInfoEx()](doc:ifdeviceinfo) to return the supported DRM system and features.

#### Description

Checks for the supported DRM system and its features.

#### Return Values

An associative array with the supported DRM system and features. For example, a device that supports PlayReady inside a trusted environment with secure stop returns:

`\{"playready": "tee;ss"\}`

The values for the PlayReady key above are:

* **tee** indicates the core DRM system runs in a Trusted Execution Environment
* **ss** indicates the DRM system supports secure stop

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

* On
* Off
* Instant replay

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
      <td>The global setting property to be checked, which may be one of the following values: <ul><li>Mode</li><li>Text/Font</li><li>Text/Effect</li><li>Text/Size</li><li>Text/Color</li><li>Text/Opacity</li><li>Background/Color</li><li>Background/Opacity</li><li>Window/Color</li><li>Window/Opacity</li><li>Track</li><li>Track\_Composite</li><li>Track\_Analog</li><li>Muted</li></ul></td>
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

```
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
```

### GetClockFormat() as String

#### Description

Checks whether the system settings for Time (**Setting > System > Time**) is set to a 12 or 24-hour format.

#### Return Values

The time format:

* "12h": 12-hour AM/PM format
* "24h": 24-hour format
* "": error

### IsClockValid() as Dynamic

#### Description

Checks if the device's system clock is valid.

#### Return Values

A flag indicating whether the system clock on the device is valid.

### EnableValidClockEvent(enable as Boolean) as Dynamic

_Available since Roku OS 13.0_

#### Description

Notifies the app when the device's system clock becomes valid.

#### Parameters

| Name   | Type    | Description                                                    |
| ------ | ------- | -------------------------------------------------------------- |
| enable | Boolean | A flag specifying whether to enable valid system clock events. |

#### Return Values

A flag indicating whether valid system clock events are enabled (true) or disabled (false).

### EnableAppFocusEvent(enable as Boolean) as Dynamic

#### Description

Notifies the app when a system overlay event (such as the [confirm partner button HUD](doc:channel-manifest) or the caption control overlay) is displayed. This notification gives the app the opportunity to do any processing they may want to when the app loses or regains focus.

#### Parameters

| Name   | Type    | Description                                                                     |
| ------ | ------- | ------------------------------------------------------------------------------- |
| enable | Boolean | A flag specifying whether to enable/disable system overlay event notifications. |

#### Return Values

A flag indicating whether the system overlay event notifications are enabled (true) or disabled (false).

### EnableScreensaverExitedEvent(enable as Boolean) as Dynamic

#### Description

Notifies the app when a screensaver exit event occurs. This function enables the sending of an [roDeviceInfoEvent](doc:rodeviceinfoevent) when a user has exited the screensaver.

To receive events, you must have first called [SetMessagePort](doc:ifsetmessageport) on the roDeviceInfo object specifying the message port that is to receive the events

#### Parameters

| Name   | Type    | Description                                                                       |
| ------ | ------- | --------------------------------------------------------------------------------- |
| enable | Boolean | A flag specifying whether to enable/disable screensaver exit event notifications. |

#### Return Values

A flag indicating whether screensaver exit event notifications are enabled (true) or disabled (false).

### IsHDMIConnected() as Boolean

> **This method is deprecated**.
>
> Developers must use the [ifHdmiStatus](doc:ifhdmistatus) interface functions instead.

#### Description

Checks for an HDMI connection.

#### Return Values

A flag indicating whether an HDMI connection to a TV has been detected.

### EnableLowGeneralMemoryEvent(enabled as Boolean) as Dynamic

#### Description

#### Parameters

| Name   | Type    | Description                                                                            |
| ------ | ------- | -------------------------------------------------------------------------------------- |
| enable | Boolean | A flag specifying whether to enable/disable lowGeneralMemoryLevel event notifications. |

#### Return Values

A flag indicating whether lowGeneralMemoryLevel event notifications are enabled (true) or disabled (false).

### GetGeneralMemoryLevel() as String

#### Description

Checks the general memory levels of the device.

#### Return Values

Returns the general memory levels of the app, which may be one of the following values:

* "normal"
* "low"
* "critical"

### IsStoreDemoMode() as Boolean

#### Description

Checks whether the device is in demo mode.

#### Return Values

A flag indicating whether the device is in demo mode.

#### Network info

### GetLinkStatus() as Boolean

#### Description

Checks if the device has an active connection.

#### Return Values

A flag indicating whether the device has an active connection.

### EnableLinkStatusEvent(enable as Boolean) as Boolean

#### Description

Notifies the app when a network connection status event occurs. This function enables the sending of an [roDeviceInfoEvent](doc:rodeviceinfoevent) when the network connection status changes. To receive events, you must have first called [SetMessagePort](doc:ifsetmessageport) on the roDeviceInfo object specifying the message port that is to receive the events

#### Parameters

| Name   | Type    | Description                                                                                |
| ------ | ------- | ------------------------------------------------------------------------------------------ |
| enable | Boolean | A flag specifying whether to enable/disable network connection status event notifications. |

#### Return Values

A flag indicating whether network connection status event notifications are enabled (true) or disabled (false).

### GetConnectionType() as String

#### Description

Checks whether the device has a WiFi or wired connection, or if it is not connected through any type of network.

#### Return Values

The type of internet connection the device is using. This may be one of the following values:

* "WiFiConnection"
* "WiredConnection"
* "" (the device does not have an Internet connection)

### EnableInternetStatusEvent(enable as Boolean) as Boolean

#### Description

Notifies the app when an internet connection status event occurs. This function enables the sending of an [roDeviceInfoEvent](doc:rodeviceinfoevent) when the network connection status changes, as indicated by `roDeviceInfoEvent.internetStatus`. To receive events, the app must have first called [SetMessagePort](doc:ifsetmessageport) on the roDeviceInfo object specifying the message port that is to receive the events.

#### Parameters

| Name   | Type    | Description                                                                                |
| :----- | :------ | :----------------------------------------------------------------------------------------- |
| enable | Boolean | A flag specifying whether to enable/disable network connection status event notifications. |

#### Return Values

A flag indicating whether network connection status event notifications are enabled (true) or disabled (false).

### GetUptimeMillisecondsAsLong() as Long

_Available since Roku OS 15.0_

#### Description

Returns the system's uptime since the last reboot (in milliseconds as a Long). This function is similar to the [global utility Uptime function](doc:global-utility-functions), but makes it easier for developers to handle monotonic milliseconds.

#### Return Value

A Long indicating the the system's uptime since the last reboot (in milliseconds).

### GetInternetStatus() as Boolean

#### Description

Checks the internet connection status of the device.

#### Return Value

True if the cached internet status shows a connection; false, otherwise.

### ForceInternetStatusCheck() as Boolean

#### Description

Forces a new internet connection check. A new check will only be initiated if the cached internet status is older than 10 seconds.

#### Return Value

True indicates only that a new internet check has been initiated; otherwise, false. To get the actual internet connection status, use the [**GetInternetStatus()**](getinternetstatus-as-boolean) method.

### GetExternalIp() as String

#### Description

Checks the IP address assigned to the device by your internet service provider (ISP). This IP address is visible to the internet and all other computers outside your local network.

#### Return Values

The external IP address assigned to the device.

### GetIPAddrs() as Object

#### Description

Checks the local IP address of the device.

#### Return Values

An associative array, where each key is the name of a network interface and the value is the IP-address of the interface. Typically, the associative array only contains a single interface.

### GetConnectionInfo() as Object

#### Description

Checks for the information associated with the hardware's connection

#### Return Values

An associative array with the following key-value pairs:

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>type</td>
      <td>Same as the value returned from GetConnectionType(). Indicated whether the device is using a WiFiConnection or WiredConnection.</td>
    </tr>

    <tr>
      <td>name</td>
      <td>Name of the connection interface.</td>
    </tr>

    <tr>
      <td>ip</td>
      <td>IP address used by the connection.</td>
    </tr>

    <tr>
      <td>ipv6<br /><br /><em>Available since Roku OS 12.0</em></td>
      <td>A list of IPv6 addresses used by the connection.</td>
    </tr>

    <tr>
      <td>mac</td>
      <td><em>This field is deprecated</em><br /><br />The device's MAC address is no longer returned (a string of zeros is returned in this field). Developers can use the [roDeviceInfo.GetChannelClientId ](doc:ifdeviceinfo#getchannelclientid-as-string)method to uniquely identify devices.</td>
    </tr>

    <tr>
      <td>ssid</td>
      <td>The SSID of the Access Point (present only if type = "WiFiConnection").</td>
    </tr>

    <tr>
      <td>gateway</td>
      <td>IP Address of the connection gateway (usually the router).</td>
    </tr>

    <tr>
      <td>dns.0</td>
      <td>IP Address of first DNS server associated with the connection.</td>
    </tr>

    <tr>
      <td>dns.1</td>
      <td>IP Address of the second DNS server, if any (Similarly for any subsequent DNS servers).</td>
    </tr>

    <tr>
      <td>dns.2</td>
      <td>IP Address of the third DNS server, if any (Similarly for any subsequent DNS servers).</td>
    </tr>

    <tr>
      <td>dns.3</td>
      <td>IP Address of the fourth DNS server, if any (Similarly for any subsequent DNS servers).</td>
    </tr>

    <tr>
      <td>active</td>
      <td>A flag indicating the network status.</td>
    </tr>

    <tr>
      <td>default</td>
      <td>A flag indicating whether the default WiFi connection is being used.</td>
    </tr>

    <tr>
      <td>expectedThroughput</td>
      <td>The actual speed of the connection.  This rate may be significantly lower than the theoretical maximum because of interference, distance, network overhead, and other factors. In ideal conditions, a single client might achieve approximately 65-70% of the physical rate.</td>
    </tr>

    <tr>
      <td>protocol</td>
      <td>The Wifi protocol name (IEEE 802.11g).</td>
    </tr>

    <tr>
      <td>signal</td>
      <td>The received signal strength indicator (RSSI) on a logarithmic scale. Values closer to 0 indicate a stronger signal; values closer to -100 indicate a weaker signal.</td>
    </tr>

    <tr>
      <td>ssid</td>
      <td>The service set identifier (SSID). The name of the WiFi network to which the device is connected.</td>
    </tr>

    <tr>
      <td>txFailed</td>
      <td>The number of dropped frames.</td>
    </tr>

    <tr>
      <td>txRetries</td>
      <td>The number of retries to send frames.</td>
    </tr>
  </tbody>
</table>

#### Video info

### GetDisplayType() as String

#### Description

Gets the text corresponding to the button selection in the Player Info Settings/Display Type page.

#### Return Values

The display type, which may be one of the following values:

* "HDTV"
* "4:3 standard"
* "16:9 anamorphic"

### GetDisplayMode() as String

#### Description

Checks the UI resolution of the device.

#### Return Values

The configured graphics layer resolution, which may be one of the following values:

* "480i" or "480p" (the **ui_resolutions** manifest entry includes **sd** as a supported resolution).
* "720p"
* "1080p" (the **ui_resolutions** manifest file entry includes **fhd** as a supported resolution)

### GetDisplayAspectRatio() as String

#### Description

Checks the aspect ratio for the display screen.

#### Return Values

The aspect ratio, which may be one of the following values:

* "4x3"
* "16x9"

### GetDisplaySize() as Object

#### Description

Checks the display size of a screen.

#### Return Values

An associative array with the screen width and height. Specifically, the keys "w" and "h" contain the values for the screen width and height respectively. This may be one of the following:

* 720 and 480
* 1280 and 720
* 1920 and 1080

### GetVideoMode() as String

#### Description

Checks the video playback resolution.

#### Return Values

The video playback resolution, which maybe one of the following values:

| String       | Resolution  | Aspect Ratio | Refresh Rate | Bit Depth |
| ------------ | ----------- | ------------ | ------------ | --------- |
| "480i"       | 720x480     | 4:3          | 60 Hz        | 8 Bit     |
| "480p"       | 720x480     | 4:3          | 60 Hz        | 8 Bit     |
| "576i25"     | 720x576     | 4:3          | 25 Hz        | 8 Bit     |
| "576p50"     | 720x576     | 4:3          | 50 Hz        | 8 Bit     |
| "576p60"     | 720x576     | 4:3          | 60 Hz        | 8 Bit     |
| "720p50"     | 1280x720    | 16:9         | 50 Hz        | 8 Bit     |
| "720p"       | 1280x720    | 16:9         | 60 Hz        | 8 Bit     |
| "1080i50"    | 1920x1080   | 16:9         | 50 Hz        | 8 Bit     |
| "1080i"      | 1920x1080   | 16:9         | 60 Hz        | 8 Bit     |
| "1080p24"    | 1920x1080   | 16:9         | 24 Hz        | 8 Bit     |
| "1080p25"    | 1920x1080   | 16:9         | 25 Hz        | 8 Bit     |
| "1080p30"    | 1920x1080   | 16:9         | 30 Hz        | 8 Bit     |
| "1080p50"    | 1920x1080   | 16:9         | 50 Hz        | 8 Bit     |
| "1080p60b10" | 1920x1080   | 16:9         | 60 Hz        | 8 Bit     |
| "1080p60Dv"  | 1920x1080   | 16:9         | 60 Hz        | 8 Bit     |
| "1080p"      | 1920x1080   | 16:9         | 60 Hz        | 8 Bit     |
| "2160p24"    | 3840x2160   | 16:9         | 24 Hz        | 8 Bit     |
| "2160p25"    | 3840x2160   | 16:9         | 25 Hz        | 8 Bit     |
| "2160p30"    | 3840x2160   | 16:9         | 30 Hz        | 8 Bit     |
| "2160p30Dv"  | 3840x2160   | 16:9         | 30 Hz        | 8 Bit     |
| "2160p50"    | 3840x2160   | 16:9         | 50 Hz        | 8 Bit     |
| "2160p60"    | 3840x2160   | 16:9         | 60 Hz        | 8 Bit     |
| "2160p60Dv"  | 3840x2160   | 16:9         | 60 Hz        | 8 Bit     |
| "2160p24b10" | 3840x2160   | 16:9         | 24 Hz        | 10 Bit    |
| "2160p25b10" | 3840x2160   | 16:9         | 25 Hz        | 10 Bit    |
| "2160p30b10" | 3840x2160   | 16:9         | 30 Hz        | 10 Bit    |
| "2160p50b10" | 3840x2160   | 16:9         | 50 Hz        | 10 Bit    |
| "2160p60b10" | 3840x2160   | 16:9         | 60 Hz        | 10 Bit    |
| "4320p60"    | 7680 x 4320 | 16:9         | 60 Hz        | 12 Bit    |
| "4320p60b10" | 7680 x 4320 | 16:9         | 60 Hz        | 12 Bit    |

### GetDisplayProperties() as Object

#### Description

Checks for the display properties of the screen.

#### Return Values

An associative array with the following key/value pairs for the display properties of the screen:

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Type</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Width</td>
      <td>Integer</td>
      <td>Physical width of the attached display in centimeters</td>
    </tr>

    <tr>
      <td>Height</td>
      <td>Integer</td>
      <td>Physical height of the attached display in centimeters</td>
    </tr>

    <tr>
      <td>Internal</td>
      <td>Boolean</td>
      <td>Set to true if the display is part of the Roku Player (such as a Roku TV), false otherwise</td>
    </tr>

    <tr>
      <td>Hdr10</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports HDR10, false otherwise</td>
    </tr>

    <tr>
      <td>Hdr10Plus</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports HDR10+, false otherwise</td>
    </tr>

    <tr>
      <td>HdrSeamless</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports any type of HDR, such as HDR10, HLG, or<br />Dolby Vision, false otherwise.</td>
    </tr>

    <tr>
      <td>Headless</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports being powered off while audio continues to play</td>
    </tr>

    <tr>
      <td>HLG</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports HLG, false otherwise</td>
    </tr>

    <tr>
      <td>DolbyVision</td>
      <td>Boolean</td>
      <td>Set to true if the attached display supports Dolby Vision, false otherwise</td>
    </tr>

    <tr>
      <td>visible</td>
      <td>boolean</td>
      <td>For Roku TVs only. Indicates whether the TV screen is on/off while the Roku device is actively streaming content. This is useful for checking whether customers have muted their TV screen while streaming video in order to continue listening to the audio (for example, when playing music videos, conferences, or podcasts).</td>
    </tr>
  </tbody>
</table>

### GetSupportedGraphicsResolutions() as Object

#### Description

Checks the supported graphics resolutions.

#### Return Values

A list of associative arrays. Each associative array contains the following key/value pairs for the graphics resolutions:

| Key       | Type    | Value                                                                                               |
| --------- | ------- | --------------------------------------------------------------------------------------------------- |
| width     | integer | The pixel width of the supported resolution                                                         |
| height    | integer | The pixel height of the supported resolution                                                        |
| name      | string  | Either SD, HD, or FHD                                                                               |
| ui        | boolean | True if this resolution is the current Roku UI resolution                                           |
| preferred | boolean | True if this is the preferred UI resolution, i.e., if this is the optimal resolution for the device |

### CanDecodeVideo(video_format as Object) as Object

#### Description

Checks whether the device can decode and play the specified video format.

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
      <td>video\_format</td>
      <td>Object</td>
      <td>An associative array with the following key/value pairs specifying the video format to be checked.<br /><br />As of Roku OS 14.1, the keys in the associative array are fully case-insensitive. For older OS versions, use lower-case letters for the keys when specified within double quotes ("").<br /><br /></td>
    </tr>
  </tbody>
</table>

#### Return Values

An associative array that includes a flag indicating whether the video format can be played, and the closest video format supported by the device.

If the Roku Player cannot play that video format, it will return false, and return the closest video format it can play, with the changed fields, such as:

`{"codec":["hevc","mpeg1","mpeg2","h263","mpeg4 avc","vp9"],"result":false,"updated":"codec"}`

The return value shows the Roku Player cannot play requested video format, shows the updated keys of the requested video format (level and profile) that it can support, and the all the key values of the requested video format supported by the Roku Player.

### GetUIResolution() as Object

#### Description

Checks for the UI resolution of the screen.

#### Return Values

An associative array with the following key-value pairs describing the current UI resolution:

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>name</td>
      <td>The possible values are: <table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>SD</td><td>standard definition (720x480 screen pixel dimensions)</td></tr><tr><td>HD</td><td>high-definition (1280x720 screen pixel dimensions)</td></tr><tr><td>FHD</td><td>full high-definition (1920x1080 screen pixel dimensions)</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>width</td>
      <td>The possible values are: <table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>720</td><td>standard definition screen pixel width</td></tr><tr><td>1280</td><td>high-definition screen pixel width</td></tr><tr><td>1920</td><td>full high-definition screen pixel width</td></tr></tbody></table></td>
    </tr>

    <tr>
      <td>height</td>
      <td>The possible values are: <table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>480</td><td>standard definition screen pixel height</td></tr><tr><td>720</td><td>high-definition screen pixel height</td></tr><tr><td>1080</td><td>full high-definition screen pixel height</td></tr></tbody></table></td>
    </tr>
  </tbody>
</table>

### GetGraphicsFeatures() as Object

_Available since Roku OS 14.0_

#### Description

Checks the graphics features supported by the device.

#### Return Values

An associative array containing the following key/value pairs:

<table>
  <thead>
    <tr>
      <th><strong>Key</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Value</strong></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>full\_rotation</td>
      <td>boolean</td>
      <td><ul><li>true: The device supports an arbitrary rotation degree.</li><li>false: The device supports 90° rotations only (0, 90, 180, 270)</li></ul></td>
    </tr>

    <tr>
      <td>astc\_supported</td>
      <td>boolean</td>
      <td><ul><li>true: The device supports <a href="https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression">Adaptive Scalable Texture Compression(ASTC)</a> compressed textures and can load <a href="https://github.com/ARM-software/astc-encoder/blob/main/Docs/FileFormat.md">.astc</a> image files.</li><li>false: The device does not support ASTC.</li></ul></td>
    </tr>
  </tbody>
</table>

### GetGraphicsPlatform() as String

#### Description

Checks the graphics platform of the device.

#### Return Values

The device's graphics platform, which may be one of the following values:

* "opengl"
* "directfb"

### GetVideoDecodeInfo() as Object

> **This method is deprecated**.
>
> Developers  should use the [CanDecodeVideo()](#candecodevideovideo_format-as-object-as-object) function instead.

#### Description

See [http://en.wikipedia.org/wiki/Extended_display_identification_data#EIA.2FCEA-861_extension_block](http://en.wikipedia.org/wiki/Extended_display_identification_data#EIA.2FCEA-861_extension_block) for an explanation of the information returned.

#### Return Values

An associative array with the EDID (EIA.2FCEA-861) information describing the video display

### EnableCodecCapChangedEvent(enable As Boolean)

#### Description

Notifies the app when the audio or video codec changes. This function enables the sending of an [roDeviceInfoEvent](doc:rodeviceinfoevent) when the codec changes. To receive events, you must have first called [SetMessagePort](doc:ifsetmessageport) on the roDeviceInfo object specifying the message port that is to receive the events

#### Parameters

| Name   | Type    | Description                                                                   |
| ------ | ------- | ----------------------------------------------------------------------------- |
| enable | Boolean | A flag indicating whether to enable/disable codec change event notifications. |

#### Return Values

A flag indicating whether codec change event notifications are enabled (true) or disabled (false).

#### Audio info

### GetAudioOutputChannel() as String

#### Description

Checks for the type of audio output.

#### Return Values

The selected audio output, which may be one of the following values:

* "Stereo"
* "5.1 surround"

### GetAudioDecodeInfo() as Object

> **This method is deprecated**.
>
> Developers  should use the [CanDecodeAudio()](#candecodeaudioaudio_format-as-object-as-object) function instead.

#### Description

Lists each audio decoder supported by the device, with up to four numbers describing the decoder from the EDID SAD (Short Audio Descriptor). Each value is of the form `"<number of channels>:<SAD1>:<SAD2>:<PassThru>:"`

#### Return Values

An associative array with EDID (EIA.2FCEA-861) audio decoder information for the device connected to the HDMI port (or the device itself for a Roku TV).

For example, the name "DD+" may have the value "8:6:0:1" where there are 8 independent audio tracks (7.1 audio), 6 is the SAD1 byte, 0 is the SAD2 byte, and 1 is the binary value that indicates this is a pass-through audio device (not a Roku TV). The SAD1 and SAD2 bytes are interpreted differently for different codecs and more information about their values can be found here: [http://en.wikipedia.org/wiki/Extended_display_identification_data#CEA_EDID_Timing_Extension_Version_3_data_format](http://en.wikipedia.org/wiki/Extended_display_identification_data#CEA_EDID_Timing_Extension_Version_3_data_format)

#### Example

The following example demonstrates how to determine if the attached device supports Dolby Digital Plus audio:

```
di = CreateObject("roDeviceInfo")
audioDecoders = di.GetAudioDecodeInfo()

REM Check for surround sound codecs:
hasDolbyDigital = audioDecoders.doesexist("AC3")
hasDTS = audioDecoders.doesexist("DTS")
hasDDPlus = audioDecoders.doesexist("DD+")
```

> The definition of hasFeature (“5.1_surround_sound”) has changed in Roku OS 6.1. In previous firmware revisions it returned true when the user set the system audio format to "Surround Sound". In Roku OS6.1 and above, it returns true when any of the codecs in the GetAudioDecodeInfo() AA has more than 2 audio channels. Users devices will also be default to the "Auto Detect" system HDMI audio setting in v6.1.

### CanDecodeAudio(audio_format as Object) as Object

#### Description

Checks if the device can decode and play the specified audio format.

> Use this method to query the codecs every time before starting playback on content (do not cache  and use the results from a previous call). In addition, use the [**roDeviceInfo.audioCodecCapabilityChanged()**](doc:rodeviceinfoevent) event to identify any codec changes that may occur when the audio output destination is switched. This will help your app to perform well with the Roku mobile app and and private listening.

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
      <td>audio\_format</td>
      <td>Object</td>
      <td>An associative array with the audio format to be checked. The general format of the associative arrays for CanDecodeAudio() is similar to the parameter and return associative arrays used in <a href="#candecodevideovideo_format-as-object-as-object">CanDecodeVideo()</a>. <br /><br />As of Roku OS 14.1, the keys in the associative array are fully case-insensitive. For older OS versions, use lower-case letters for the keys when specified within double quotes ("").<br /><br /></td>
    </tr>
  </tbody>
</table>

#### Return Values

An associative array that includes a flag indicating whether the audio format can be played, and the closest audio format supported by the device.

### IsPassthruCodecActive() as Boolean

#### Description

Indicates whether a passthrough device that owns the codec (a TV, audio receiver, or soundbar connected to a Roku device via HDMI) is rendering audio.

Apps can call the [CanDecodeAudio()](#candecodevideovideo_format-as-object-as-object) function with the **audioFormat.passthru** field set to 1 to check whether the passthrough device can decode and play the specified audio format, and then call this function to determine whether the passthrough device  is actually rendering the audio.

If the app receives a [**roDeviceInfoEvent.audioCodecCapabilityChanged**](doc:rodeviceinfoevent) event, it can call this function again to determine whether the audio output has changed (for example, check whether a different set of codecs are now relevant). The app can also re-query the [CanDecodeAudio()](#candecodevideovideo_format-as-object-as-object) function to determine whether the codecs themselves have changed (for example, an audio receiver has been disconnected).

#### Return Values

A flag indicating whether the passthrough device is rendering audio.

### GetSoundEffectsVolume() as Integer

#### Description

Checks for the user interface sound effects volume level.

#### Return Values

The UI sounds effects volume as a percentage. A return value of 0 indicates that UI sound effects are muted, and a value of 100 indicates that they are set to the maximum volume level

### IsAudioGuideEnabled() as Dynamic

> The screen reader is available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.5 and later.

#### Description

Checks if the screen reader is enabled.

#### Return Values

A flag indicating whether the screen reader is enabled.

### EnableAudioGuideChangedEvent(enable as Boolean) as Dynamic

> The screen reader is available on: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.5 and above

#### Description

Notifies the app when the screen reader changes. This function enables the sending of an [roDeviceInfoEvent](doc:rodeviceinfoevent) when the screen reader changes. To receive events, you must have first called [SetMessagePort](doc:ifsetmessageport) on the roDeviceInfo object specifying the message port that is to receive the events

#### Parameters

| Name   | Type    | Description                                                                           |
| ------ | ------- | ------------------------------------------------------------------------------------- |
| enable | Boolean | A flag indicating whether to enable/disable screen reader change event notifications. |

#### Return Values

A flag indicating whether screen reader change event notifications are enabled (true) or disabled (false).

### IsAutoplayEnabled() as Boolean

_Available since Roku OS 13.0_

**Description**

Returns a flag indicating whether autoplay is enabled on a device. Developers can use this function to ensure that the autoplay device setting is respected when customers browse content in their apps.

If autoplay is disabled on a device, apps may not begin any video playback until the customer expressly requests it. Once a user navigates to a video or otherwise explicitly requests the playback of the video to begin, the app may continue playing that video until the user navigates away from it, pauses it, turns the device off, or a screensaver starts.

Apps must adhere to [Roku’s autoplay policy](doc:autoplay) to pass certification (Effective after October 1, 2024).

**Return Value**

A boolean indicating whether autoplay is enabled on a device.

### isAutoAdjustRefreshRateEnabled() as Boolean

_Available since Roku OS 15.0_

**Description**

Returns a flag indicating whether the Auto Adjust Display Refresh Rate setting is enabled on a device.

**Return Value**

A boolean indicating whether the Auto Adjust Display Refresh Rate setting is enabled on a device.
