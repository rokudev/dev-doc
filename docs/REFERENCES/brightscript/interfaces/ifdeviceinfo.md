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

<div class="markdown-body developer-content-body"><h1 id="ifdeviceinfo">ifDeviceInfo</h1>
<h2 id="implemented-by">Implemented by</h2>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="long-line"><a href="/docs/references/brightscript/components/rodeviceinfo.md">roDeviceInfo</a></td>
<td class="long-line">The roDeviceInfo component provides an interface to obtain attributes about the device</td>
</tr>
</tbody>
</table></div>
<h2 id="supported-methods">Supported methods</h2>
<h4 id="device-properties">Device properties</h4>
<h3 id="getmodel-as-string">GetModel() as String</h3>
<h4 id="description">Description</h4>
<p>Returns the model name of the Roku device. See the <a href="/docs/specs/hardware.md">Hardware Specification</a> for the list of the current, updatable, and legacy Roku models.</p>
<h4 id="return-values">Return Values</h4>
<p>A five-character alphanumeric string (for example, "3050X") .</p>
<h3 id="getmodeldisplayname-as-string">GetModelDisplayName() as String</h3>
<h4 id="description-1">Description</h4>
<p>Returns the model display name of the Roku device.</p>
<h4 id="return-values-1">Return Values</h4>
<p>The model display name (for example, "Roku 2 XD")</p>
<h3 id="getmodeltype-as-string">GetModelType() as String</h3>
<h4 id="description-2">Description</h4>
<p>Returns a string describing the type of device. For future compatibility, the caller should by default assume "STB" when anything other than described value is returned</p>
<h4 id="return-values-2">Return Values</h4>
<p>The device type, which may be one of the following values:</p>
<ul>
<li>"STB": Set-top box.</li>
<li>"TV": Roku TV.</li>
</ul>
<h3 id="getmodeldetails-as-object">GetModelDetails() as Object</h3>
<h4 id="description-3">Description</h4>
<p>Returns detailed information about the device model.</p>
<h4 id="return-values-3">Return Values</h4>
<p>An associative array containing the following information about the device model:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">VendorName</td>
<td class="short-line">String</td>
<td class="short-line">The model vendor.</td>
</tr>
<tr>
<td class="short-line">ModelNumber</td>
<td class="short-line">String</td>
<td class="short-line">The model number.</td>
</tr>
<tr>
<td class="short-line">VendorUSBName</td>
<td class="short-line">String</td>
<td class="short-line">The USB vendor.</td>
</tr>
<tr>
<td class="short-line">ScreenSize</td>
<td class="short-line">String</td>
<td class="short-line">The size of the Roku TV.</td>
</tr>
<tr>
<td class="short-line">Manufacturer</td>
<td class="short-line">String</td>
<td class="short-line">Manufacturer information.</td>
</tr>
</tbody>
</table></div>
<h3 id="getfriendlyname-as-string">GetFriendlyName() as String</h3>
<h4 id="description-4">Description</h4>
<p>Returns a string describing the device that may be used for network device selection.  The string is subject to change and should not be used as a persistent key or ID</p>
<h4 id="return-values-4">Return Values</h4>
<p>A user-assigned device name or a description of the device such as model name and/or serial number.</p>
<h3 id="getosversion-as-object">GetOSVersion() As Object</h3>
<h4 id="description-5">Description</h4>
<p>Returns an roAssociativeArray containing the <strong>major</strong>, <strong>minor</strong>, <strong>revision</strong>, and <strong>build</strong> numbers of the Roku OS running on the device.</p>
<h4 id="return-values-5">Return Values</h4>
<p>An roAssociativeArray containing the following fields:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">major</td>
<td class="short-line">string</td>
<td class="short-line">The major version number (for example, 9)</td>
</tr>
<tr>
<td class="short-line">minor</td>
<td class="short-line">string</td>
<td class="short-line">The minor version number (for example, 2)</td>
</tr>
<tr>
<td class="short-line">revision</td>
<td class="short-line">string</td>
<td class="short-line">The firmware revision number (for example, 6)</td>
</tr>
<tr>
<td class="short-line">build</td>
<td class="short-line">string</td>
<td class="short-line">The build number (for example, 4127)</td>
</tr>
</tbody>
</table></div>
<h3 id="getversion-as-string">GetVersion() as String</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getosversion-as-object">GetOSVersion()</a> method to get the current Roku OS version running on a device.</p>
</blockquote>
<h4 id="description-6">Description</h4>
<p>Returns the version number of the device.</p>
<h4 id="return-values-6">Return Values</h4>
<p>A 13-character string (for example "034.08E01185A"). The third through sixth characters are the major/minor version number ("4.08") and the ninth through twelfth are the build number ("1185")</p>
<h3 id="getdeviceuniqueid-as-string">GetDeviceUniqueId() as String</h3>
<blockquote>
<p> <strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use the 32-character alphanumeric unique identifier returned by <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string">GetChannelClientId()</a>.</p>
</blockquote>
<h4 id="description-7">Description</h4>
<p>Returns a string of 12 zeroes (it no longer returns the unique identifier for the app on a device).</p>
<h4 id="return-values-7">Return Values</h4>
<p>A string of 12 zeros ("000000000000")</p>
<h3 id="getadvertisingid-as-string">GetAdvertisingId() as String</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use the <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getrida-as-string">GetRIDA()</a> method to get the unique identifier.</p>
</blockquote>
<h4 id="description-8">Description</h4>
<p>Returns a unique identifier for the device. This identifier is persistent but can be reset by the user from the device's Settings menu or by performing a factory reset on the device.</p>
<p>If the user has disabled Ad ID tracking from the settings menu, then this identifier should not be used for targeted advertising. IsAdIdTrackingDisabled() should be called to check if the user has disabled Ad ID tracking</p>
<h4 id="return-values-8">Return Values</h4>
<p>A Universally Unique Identifier (UUID) as specified in IETF-RFC 4122 with 36 characters (32 alphanumeric characters and four hyphens). The characters are grouped in the form 8-4-4-4-12, for example "123e4567-e89b-12d3-a456-426655440000"</p>
<h3 id="getrida-as-string">GetRIDA() as String</h3>
<h4 id="description-9">Description</h4>
<p>Returns a unique identifier for the device.</p>
<p>If the user has set "Limit ad tracking" from the <strong>Settings</strong> menu (the user has opted out of targeted advertising), the RIDA is set to a temporary ID. This temporary ID is different than the UUID returned if the user has not opted out, and it expires after 30 days. Apps must still pass this temporary ID on ad server requests to support frequency capping.</p>
<blockquote>
<p> If the user’s country is an EU member country, any data collection must be compliant with the <a href="/docs/features/legal/compliance.md#gdpr">EU General Data Protection Regulation (GDPR)</a>.</p>
</blockquote>
<h4 id="return-values-9">Return Values</h4>
<p>A Universally Unique Identifier (UUID). This identifier is persistent, but it can be reset by the user from the device's <strong>Settings</strong> menu or by performing a factory reset on the device</p>
<h3 id="isadidtrackingdisabled-as-boolean">IsAdIdTrackingDisabled() as Boolean</h3>
<blockquote>
<p> <strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#isridadisabled-as-boolean">IsRIDADisabled()</a> to get the Ad Id tracking status.</p>
</blockquote>
<h4 id="description-10">Description</h4>
<p>If Ad Id tracking is disabled, the identifier returned by GetAdvertisingId() should not be used for Ad targeting</p>
<h4 id="return-values-10">Return Values</h4>
<p>Returns true if the user has disabled Ad Id tracking by selecting "Limit ad tracking" from the Roku Settings menu, false otherwise.</p>
<h3 id="isridadisabled-as-boolean">IsRIDADisabled() as Boolean</h3>
<h4 id="description-11">Description</h4>
<p>Indicates whether tracking via Roku's ID for Advertisers (RIDA) is disabled on the device.</p>
<h4 id="return-values-11">Return Values</h4>
<p>A flag indicating whether RIDA tracking is disabled on the device (RIDA tracking can be disabled by selecting "Limit ad tracking" from the <strong>Settings&gt;Privacy&gt;Advertising</strong> menu). If RIDA tracking is disabled, this returns true; false otherwise.</p>
<h3 id="getclienttrackingid-as-string">GetClientTrackingId() as String</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use the <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string">GetChannelClientId</a> method to get the unique identifier.</p>
</blockquote>
<h4 id="description-12">Description</h4>
<p>Returns a unique identifier for the device.</p>
<h4 id="return-values-12">Return Values</h4>
<p>A unique identifier. This identifier is different across apps so each app will get a different identifier when calling this function</p>
<h3 id="getchannelclientid-as-string">GetChannelClientId() as String</h3>
<h4 id="description-13">Description</h4>
<p>Returns a unique identifier for the device. The ID is persistent and cannot be reset. This value can be used to manage or identify devices linked to the app’s content services.</p>
<h4 id="return-values-13">Return Values</h4>
<p>A unique identifier. This identifier is different across apps so each app will get a different identifier when calling this function</p>
<h3 id="getusercountrycode-as-string">GetUserCountryCode() as String</h3>
<p>Returns the ISO 3166-1 (2-letter) country code associated with the user's Roku account.</p>
<h4 id="return-values-14">Return Values</h4>
<p>An ISO 3166-1 (2-letter) country code.</p>
<blockquote>
<p>If the app owner entered into an additional agreement to have the app published to a curated <a href="https://www.roku.com/roku-powered">Roku Powered Streaming Store</a> instead of the user country, a Roku Powered Streaming Store Identifier will instead be returned:</p>
</blockquote>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Roku Powered Streaming Store</th>
<th class="short-line">Roku Powered Streaming Store Identifier</th>
<th class="short-line">Country</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Econet</td>
<td class="short-line">Econet</td>
<td class="short-line">ZW</td>
</tr>
<tr>
<td class="short-line">Globe</td>
<td class="short-line">globe</td>
<td class="short-line">PH</td>
</tr>
<tr>
<td class="short-line">PLDT</td>
<td class="short-line">PLDT</td>
<td class="short-line">PH</td>
</tr>
<tr>
<td class="short-line">Sky Germany</td>
<td class="short-line">skyde</td>
<td class="short-line">DE</td>
</tr>
<tr>
<td class="short-line">Sky Spain</td>
<td class="short-line">skyes</td>
<td class="short-line">ES</td>
</tr>
<tr>
<td class="short-line">Sky Ireland</td>
<td class="short-line">skyie</td>
<td class="short-line">IE</td>
</tr>
<tr>
<td class="short-line">Sky Italy</td>
<td class="short-line">skyit</td>
<td class="short-line">IT</td>
</tr>
<tr>
<td class="short-line">Sky UK</td>
<td class="short-line">skyuk</td>
<td class="short-line">UK</td>
</tr>
<tr>
<td class="short-line">Telstra</td>
<td class="short-line">Telstra</td>
<td class="short-line">AU</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>A future enhancement to GetUserCountryCode() will return the 2-letter country code instead of the Roku Powered Streaming Store Identifier. It is therefore recommended that apps use both to avoid having to update later.</p>
</blockquote>
<h3 id="getrandomuuid-as-string">GetRandomUUID() as String</h3>
<h4 id="description-14">Description</h4>
<p>Returns a randomly generated unique identifier. Each time this function is called, a different identifier is returned</p>
<h4 id="return-values-15">Return Values</h4>
<p>A Universally Unique Identifier (UUID) version 4 as specified in IETF-RFC 4122 with 36 characters (32 alphanumeric characters and four hyphens). The characters are grouped in the form 8-4-4-4-12, for example "123e4567-e89b-12d3-a456-426655440000"</p>
<h3 id="gettimezone-as-string">GetTimeZone() as String</h3>
<h4 id="description-15">Description</h4>
<p>Checks for the user's current system time zone setting.</p>
<h4 id="return-values-16">Return Values</h4>
<p>A string representing the user's current system time zone setting. For example, this method may return values such as:</p>
<ul>
<li>"US/Puerto Rico-Virgin Islands"</li>
<li>"US/Guam"</li>
<li>"US/Samoa"</li>
<li>"US/Hawaii"</li>
<li>"US/Aleutian"</li>
<li>"US/Alaska"</li>
<li>"US/Pacific"</li>
<li>"US/Arizona"</li>
<li>"US/Mountain"</li>
<li>"US/Central"</li>
<li>"US/Eastern"</li>
<li>"Canada/Pacific"</li>
<li>"Canada/Mountain"</li>
<li>"Canada/Central Standard"</li>
<li>"Canada/Central"</li>
<li>"Canada/Eastern"</li>
<li>"Canada/Atlantic"</li>
<li>"Canada/Newfoundland"</li>
<li>"Europe/Germany"</li>
<li>"Europe/Iceland"</li>
<li>"Europe/Ireland"</li>
<li>"Europe/United Kingdom"</li>
<li>"Europe/Portugal"</li>
<li>"Europe/Central European Time"</li>
<li>"Europe/Greece/Finland"</li>
</ul>
<blockquote>
<p>Click <a href="/docs/references/brightscript/interfaces/time-zones.md">here</a> for the complete list of time zones returned by this method.</p>
</blockquote>
<h3 id="hasfeaturefeature-as-string-as-boolean">HasFeature(feature as String) as Boolean</h3>
<h4 id="description-16">Description</h4>
<p>Checks if the current device/firmware supports the passed in feature string.</p>
<h4 id="parameters">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">feature</td>
<td class="short-line">String</td>
<td class="long-line">The feature to be checked, which may be one of the following values: <ul>
<li>"5.1_surround_sound"</li>
<li>"can_output_5.1_surround_sound"</li>
<li>"sd_only_hardware"</li>
<li>"usb_hardware"</li>
<li>"sdcard_hardware"</li>
<li>"ethernet_hardware"</li>
<li>"gaming_hardware"</li>
<li>"energy_star_compliant"</li>
<li>"soundbar_hardware". Check whether the device has soundbar hardware (for example, speakers).</li>
<li>"voice_remote" (). Checks whether a Roku device is paired with a Roku voice remote. This enables developers to tailor the in-app user experience for viewers with Roku voice remote controls.</li>
<li>"handsfree_voice" (). Checks whether a Roku device is paired with a hands-free Roku remote control such as the Roku Voice Remote Pro. This enables developers to tailor the in-app user experience for viewers with hands-free Roku remote controls (for example, displaying voice tips and tricks in the UI).</li>
</ul></td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>The "1080p_hardware" argument is deprecated. Apps should use the GetVideoMode() and CanDecodeVideo() functions instead</p>
</blockquote>
<h4 id="return-values-17">Return Values</h4>
<p>A flag indicating whether the current device/firmware supports the passed in feature string.</p>
<h3 id="getcurrentlocale-as-string">GetCurrentLocale() as String</h3>
<h4 id="description-17">Description</h4>
<p>Gets the current locale value based on the user's language setting.</p>
<h4 id="return-values-18">Return Values</h4>
<p>A string representing the current locale based on the user's language setting. The string is an ISO 639-1 (2-letter) language code followed by an underscore and a ISO 3166-1 (2-letter) country code. This may be one of the following values:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">String</th>
<th class="short-line">Locale</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"en_US"</td>
<td class="short-line">US English</td>
</tr>
<tr>
<td class="short-line">"en_GB"</td>
<td class="short-line">British English</td>
</tr>
<tr>
<td class="short-line">"en_CA"</td>
<td class="short-line">Canadian English</td>
</tr>
<tr>
<td class="short-line">"en_AU"</td>
<td class="short-line">Australian English</td>
</tr>
<tr>
<td class="short-line">"fr_CA"</td>
<td class="short-line">Canadian French</td>
</tr>
<tr>
<td class="short-line">"es_ES"</td>
<td class="short-line">International Spanish</td>
</tr>
<tr>
<td class="short-line">"es_MX"</td>
<td class="short-line">Mexican Spanish</td>
</tr>
<tr>
<td class="short-line">"de_DE"</td>
<td class="short-line">German</td>
</tr>
<tr>
<td class="short-line">"it_IT"</td>
<td class="short-line">Italian</td>
</tr>
<tr>
<td class="short-line">"pt_BR"</td>
<td class="short-line">Brazilian Portuguese</td>
</tr>
</tbody>
</table></div>
<h3 id="getcountrycode-as-string">GetCountryCode() as String</h3>
<h4 id="description-18">Description</h4>
<p>Checks for the country code of the app.</p>
<h4 id="return-values-19">Return Values</h4>
<p>A value that indicates the Streaming Store associated with a user’s Roku account. Typically, the value returned will be an ISO 3166-1 (2-letter) country code representing the country. Alternatively, if the app owner entered into an additional agreement to have the app published to a curated <a href="https://www.roku.com/roku-powered">Roku Powered Streaming Store</a> instead of the user country, then a Roku Powered Streaming Store Identifier will instead be returned. This may be one of the following values:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Country</th>
<th class="short-line">Roku Powered Streaming Store (if applicable)</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"AR"</td>
<td class="short-line">Argentina</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"AU"</td>
<td class="short-line">Australia</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"BR"</td>
<td class="short-line">Brazil</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"CA"</td>
<td class="short-line">Canada</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"CL"</td>
<td class="short-line">Chile</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"CO"</td>
<td class="short-line">Colombia</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"CR"</td>
<td class="short-line">Costa Rica</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"DE"</td>
<td class="short-line">Germany</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"Econet"</td>
<td class="short-line">Zimbabwe</td>
<td class="short-line">Econet</td>
</tr>
<tr>
<td class="short-line">"FR"</td>
<td class="short-line">France</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"GB"</td>
<td class="short-line">Great Britain and Northern Ireland</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"globe"</td>
<td class="short-line">Philippines</td>
<td class="short-line">Globe</td>
</tr>
<tr>
<td class="short-line">"GT"</td>
<td class="short-line">Guatemala</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"HN"</td>
<td class="short-line">Honduras</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"IE"</td>
<td class="short-line">Republic of Ireland</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"MX"</td>
<td class="short-line">Mexico</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"OT"</td>
<td class="short-line">Rest of World</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"PA"</td>
<td class="short-line">Panama</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"PE"</td>
<td class="short-line">Peru</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"PLDT"</td>
<td class="short-line">Philippines</td>
<td class="short-line">PLDT</td>
</tr>
<tr>
<td class="short-line">"Telstra"</td>
<td class="short-line">Australia</td>
<td class="short-line">Telstra</td>
</tr>
<tr>
<td class="short-line">"skyde"</td>
<td class="short-line">Germany</td>
<td class="short-line">Sky Germany</td>
</tr>
<tr>
<td class="short-line">"skyes"</td>
<td class="short-line">Spain</td>
<td class="short-line">Sky Spain</td>
</tr>
<tr>
<td class="short-line">"skyie"</td>
<td class="short-line">Ireland</td>
<td class="short-line">Sky Ireland</td>
</tr>
<tr>
<td class="short-line">"skyit"</td>
<td class="short-line">Italy</td>
<td class="short-line">Sky Italy</td>
</tr>
<tr>
<td class="short-line">"skyuk"</td>
<td class="short-line">United Kingdom</td>
<td class="short-line">Sky UK</td>
</tr>
<tr>
<td class="short-line">"SV"</td>
<td class="short-line">El Salvador</td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">"US"</td>
<td class="short-line">United States</td>
<td class="short-line"></td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>This does not necessarily match the physical location of the device, nor does it necessarily match the last two letters of the current locale string.</p>
</blockquote>
<h3 id="getpreferredcaptionlanguage-as-string">GetPreferredCaptionLanguage() as String</h3>
<h4 id="description-19">Description</h4>
<p>Checks the two-letter ISO 639-1 language terminology code of the preferred caption language set on the Roku device.</p>
<h4 id="return-values-20">Return Values</h4>
<p>The two-letter ISO 639-1 language terminology code, which may be one of the following values:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Language</th>
<th class="short-line">Code</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">English</td>
<td class="short-line">en</td>
</tr>
<tr>
<td class="short-line">Spanish</td>
<td class="short-line">sp</td>
</tr>
<tr>
<td class="short-line">French</td>
<td class="short-line">fr</td>
</tr>
<tr>
<td class="short-line">German</td>
<td class="short-line">de</td>
</tr>
<tr>
<td class="short-line">Italian</td>
<td class="short-line">it</td>
</tr>
<tr>
<td class="short-line">Portuguese</td>
<td class="short-line">Pt</td>
</tr>
<tr>
<td class="short-line">Russian</td>
<td class="short-line">ru</td>
</tr>
<tr>
<td class="short-line">Turkish</td>
<td class="short-line">tr</td>
</tr>
<tr>
<td class="short-line">Polish</td>
<td class="short-line">Pl</td>
</tr>
<tr>
<td class="short-line">Ukranian</td>
<td class="short-line">uk</td>
</tr>
<tr>
<td class="short-line">Romanian</td>
<td class="short-line">Rm</td>
</tr>
<tr>
<td class="short-line">Dutch</td>
<td class="short-line">nl</td>
</tr>
<tr>
<td class="short-line">Croatian</td>
<td class="short-line">hr</td>
</tr>
<tr>
<td class="short-line">Hungarian</td>
<td class="short-line">hu</td>
</tr>
<tr>
<td class="short-line">Greek</td>
<td class="short-line">el</td>
</tr>
<tr>
<td class="short-line">Czech</td>
<td class="short-line">cs</td>
</tr>
<tr>
<td class="short-line">Swedish</td>
<td class="short-line">sv</td>
</tr>
</tbody>
</table></div>
<h3 id="timesincelastkeypress-as-integer">TimeSinceLastKeypress() as Integer</h3>
<h4 id="description-20">Description</h4>
<p>Checks for the number of seconds passed since the last remote keypress.</p>
<h4 id="return-values-21">Return Values</h4>
<p>The number of seconds since the last remote keypress was received.</p>
<h3 id="getdrminfo-as-object">GetDrmInfo() as Object</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers must update their apps to use the replacement API <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getdrminfoex-as-object">GetDrmInfoEx()</a> to return the supported DRM system and features.</p>
</blockquote>
<h4 id="description-21">Description</h4>
<p>Checks for the supported DRM system and its features.</p>
<h4 id="return-values-22">Return Values</h4>
<p>An associative array with the supported DRM system and features. For example, a device that supports PlayReady inside a trusted environment with secure stop returns:</p>
<p><code>{"playready": "tee;ss"}</code></p>
<p>The values for the PlayReady key above are:</p>
<ul>
<li><strong>tee</strong> indicates the core DRM system runs in a Trusted Execution Environment</li>
<li><strong>ss</strong> indicates the DRM system supports secure stop</li>
</ul>
<h3 id="getdrminfoex-as-object">GetDrmInfoEx() as Object</h3>
<p><strong>Description</strong></p>
<p>Checks for the DRM system used by the app.</p>
<p><strong>Return Values</strong></p>
<p>An associative array with the supported DRM system and features:</p>
<p><strong>Example</strong></p>
<pre><code>PlayReady : {
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
</code></pre>
<blockquote>
<p>tee indicates the core DRM system runs in a Trusted Execution Environment.</p>
</blockquote>
<h3 id="getcaptionsmode-as-string">GetCaptionsMode() as String</h3>
<h4 id="description-22">Description</h4>
<p>Determines whether global captions are turned on or off, or are in instant replay mode.</p>
<h4 id="return-values-23">Return Values</h4>
<p>The current global setting for the Mode property, which may be one of the following values:</p>
<ul>
<li>On</li>
<li>Off</li>
<li>Instant replay</li>
</ul>
<blockquote>
<p>On a Roku TV, when the user selects "On Mute", this function will return "On" when the TV is muted and "Off" when it is not muted.</p>
</blockquote>
<h3 id="setcaptionsmodemode-as-string-as-boolean">SetCaptionsMode(mode as String) as Boolean</h3>
<h4 id="description-23">Description</h4>
<p>Sets the current global setting for the Mode property.</p>
<h4 id="parameters-1">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">mode</td>
<td class="short-line">String</td>
<td class="long-line">The current global setting for the Mode property, which may be one of the following values: <ul>
<li>On</li>
<li>Off</li>
<li>Instant replay</li>
<li>When mute (Roku TVs only)</li>
</ul></td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-24">Return Values</h4>
<p>A flag indicating whether the Mode property was successfully set.</p>
<h3 id="getcaptionsoptionoption-as-string-as-string">GetCaptionsOption(option as String) as String</h3>
<h4 id="description-24">Description</h4>
<p>Checks the current value of the specified global setting property.</p>
<h4 id="parameters-2">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Option</td>
<td class="short-line">String</td>
<td class="long-line">The global setting property to be checked, which may be one of the following values: <ul>
<li>Mode</li>
<li>Text/Font</li>
<li>Text/Effect</li>
<li>Text/Size</li>
<li>Text/Color</li>
<li>Text/Opacity</li>
<li>Background/Color</li>
<li>Background/Opacity</li>
<li>Window/Color</li>
<li>Window/Opacity</li>
<li>Track</li>
<li>Track_Composite</li>
<li>Track_Analog</li>
<li>Muted</li>
</ul></td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-25">Return Values</h4>
<p>The value of the specified global setting property, which may be as follows:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Queried Property</th>
<th class="short-line">Possible Values</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Mode</td>
<td class="long-line"><ul>
<li>On</li>
<li>Off</li>
<li>Instant replay</li>
<li>When mute (Roku TVs only)</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Text style</td>
<td class="long-line"><ul>
<li>Default</li>
<li>Serif Fixed Width</li>
<li>Serif Proportional</li>
<li>Sans Serif Fixed Width</li>
<li>Sans Serif Proportional</li>
<li>Casual</li>
<li>Cursive</li>
<li>Small Caps</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Text edge effect</td>
<td class="long-line"><ul>
<li>Default</li>
<li>None</li>
<li>Raised</li>
<li>Depressed</li>
<li>Uniform</li>
<li>Drop shadow (left)</li>
<li>Drop shadow (right)</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Text size</td>
<td class="long-line"><ul>
<li>Default</li>
<li>Extra large</li>
<li>Large</li>
<li>Medium</li>
<li>Small</li>
<li>Extra small</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Text color</td>
<td class="long-line"><ul>
<li>Default</li>
<li>White</li>
<li>Black</li>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
<li>Yellow</li>
<li>Magenta</li>
<li>Cyan</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Text opacity</td>
<td class="long-line"><ul>
<li>Default</li>
<li>25%</li>
<li>75%</li>
<li>100%</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Background Color</td>
<td class="long-line"><ul>
<li>Default</li>
<li>White</li>
<li>Black</li>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
<li>Yellow</li>
<li>Magenta</li>
<li>Cyan</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Background Opacity</td>
<td class="long-line"><ul>
<li>Default</li>
<li>Off</li>
<li>25%</li>
<li>75%</li>
<li>100%</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Window Color</td>
<td class="long-line"><ul>
<li>Default</li>
<li>White</li>
<li>Black</li>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
<li>Yellow</li>
<li>Magenta</li>
<li>Cyan</li>
</ul></td>
</tr>
<tr>
<td class="short-line">Window Opacity</td>
<td class="long-line"><ul>
<li>Default</li>
<li>Off</li>
<li>25%</li>
<li>75%</li>
<li>100%</li>
</ul></td>
</tr>
</tbody>
</table></div>
<h4 id="example">Example</h4>
<pre><code>di = CreateObject("roDeviceInfo")
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
</code></pre>
<h3 id="getclockformat-as-string">GetClockFormat() as String</h3>
<h4 id="description-25">Description</h4>
<p>Checks whether the system settings for Time (<strong>Setting &gt; System &gt; Time</strong>) is set to a 12 or 24-hour format.</p>
<h4 id="return-values-26">Return Values</h4>
<p>The time format:</p>
<ul>
<li>"12h": 12-hour AM/PM format</li>
<li>"24h": 24-hour format</li>
<li>"": error</li>
</ul>
<h3 id="isclockvalid-as-dynamic">IsClockValid() as Dynamic</h3>
<h4 id="description-26">Description</h4>
<p>Checks if the device's system clock is valid.</p>
<h4 id="return-values-27">Return Values</h4>
<p>A flag indicating whether the system clock on the device is valid.</p>
<h3 id="enablevalidclockeventenable-as-boolean-as-dynamic">EnableValidClockEvent(enable as Boolean) as Dynamic</h3>
<p><em>Available since Roku OS 13.0</em></p>
<h4 id="description-27">Description</h4>
<p>Notifies the app when the device's system clock becomes valid.</p>
<h4 id="parameters-3">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable valid system clock events.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-28">Return Values</h4>
<p>A flag indicating whether valid system clock events are enabled (true) or disabled (false).</p>
<h3 id="enableappfocuseventenable-as-boolean-as-dynamic">EnableAppFocusEvent(enable as Boolean) as Dynamic</h3>
<h4 id="description-28">Description</h4>
<p>Notifies the app when a system overlay event (such as the <a href="/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes">confirm partner button HUD</a> or the caption control overlay) is displayed. This notification gives the app the opportunity to do any processing they may want to when the app loses or regains focus.</p>
<h4 id="parameters-4">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable/disable system overlay event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-29">Return Values</h4>
<p>A flag indicating whether the system overlay event notifications are enabled (true) or disabled (false).</p>
<h3 id="enablescreensaverexitedeventenable-as-boolean-as-dynamic">EnableScreensaverExitedEvent(enable as Boolean) as Dynamic</h3>
<h4 id="description-29">Description</h4>
<p>Notifies the app when a screensaver exit event occurs. This function enables the sending of an <a href="/docs/references/brightscript/events/rodeviceinfoevent.md">roDeviceInfoEvent</a> when a user has exited the screensaver.</p>
<p>To receive events, you must have first called <a href="/docs/references/brightscript/interfaces/ifsetmessageport.md">SetMessagePort</a> on the roDeviceInfo object specifying the message port that is to receive the events</p>
<h4 id="parameters-5">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable/disable screensaver exit event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-30">Return Values</h4>
<p>A flag indicating whether screensaver exit event notifications are enabled (true) or disabled (false).</p>
<h3 id="ishdmiconnected-as-boolean">IsHDMIConnected() as Boolean</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p> Developers must use the <a href="/docs/references/brightscript/interfaces/ifhdmistatus.md">ifHdmiStatus</a> interface functions instead.</p>
</blockquote>
<h4 id="description-30">Description</h4>
<p>Checks for an HDMI connection.</p>
<h4 id="return-values-31">Return Values</h4>
<p>A flag indicating whether an HDMI connection to a TV has been detected.</p>
<h3 id="enablelowgeneralmemoryeventenabled-as-boolean-as-dynamic">EnableLowGeneralMemoryEvent(enabled as Boolean) as Dynamic</h3>
<h4 id="description-31">Description</h4>
<h4 id="parameters-6">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable/disable lowGeneralMemoryLevel event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-32">Return Values</h4>
<p>A flag indicating whether lowGeneralMemoryLevel event notifications are enabled (true) or disabled (false).</p>
<h3 id="getgeneralmemorylevel-as-string">GetGeneralMemoryLevel() as String</h3>
<h4 id="description-32">Description</h4>
<p>Checks the general memory levels of the device.</p>
<h4 id="return-values-33">Return Values</h4>
<p>Returns the general memory levels of the app, which may be one of the following values:</p>
<ul>
<li>"normal"</li>
<li>"low"</li>
<li>"critical"</li>
</ul>
<h3 id="isstoredemomode-as-boolean">IsStoreDemoMode() as Boolean</h3>
<h4 id="description-33">Description</h4>
<p>Checks whether the device is in demo mode.</p>
<h4 id="return-values-34">Return Values</h4>
<p>A flag indicating whether the device is in demo mode.</p>
<h4 id="network-info">Network info</h4>
<h3 id="getlinkstatus-as-boolean">GetLinkStatus() as Boolean</h3>
<h4 id="description-34">Description</h4>
<p>Checks if the device has an active connection.</p>
<h4 id="return-values-35">Return Values</h4>
<p>A flag indicating whether the device has an active connection.</p>
<h3 id="enablelinkstatuseventenable-as-boolean-as-boolean">EnableLinkStatusEvent(enable as Boolean) as Boolean</h3>
<h4 id="description-35">Description</h4>
<p>Notifies the app when a network connection status event occurs. This function enables the sending of an <a href="/docs/references/brightscript/events/rodeviceinfoevent.md">roDeviceInfoEvent</a> when the network connection status changes. To receive events, you must have first called <a href="/docs/references/brightscript/interfaces/ifsetmessageport.md">SetMessagePort</a> on the roDeviceInfo object specifying the message port that is to receive the events</p>
<h4 id="parameters-7">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable/disable network connection status event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-36">Return Values</h4>
<p>A flag indicating whether network connection status event notifications are enabled (true) or disabled (false).</p>
<h3 id="getconnectiontype-as-string">GetConnectionType() as String</h3>
<h4 id="description-36">Description</h4>
<p>Checks whether the device has a WiFi or wired connection, or if it is not connected through any type of network.</p>
<h4 id="return-values-37">Return Values</h4>
<p>The type of internet connection the device is using. This may be one of the following values:</p>
<ul>
<li>"WiFiConnection"</li>
<li>"WiredConnection"</li>
<li>"" (the device does not have an Internet connection)</li>
</ul>
<h3 id="enableinternetstatuseventenable-as-boolean-as-boolean">EnableInternetStatusEvent(enable as Boolean) as Boolean</h3>
<h4 id="description-37">Description</h4>
<p>Notifies the app when an internet connection status event occurs. This function enables the sending of an <a href="/docs/references/brightscript/events/rodeviceinfoevent.md">roDeviceInfoEvent</a> when the network connection status changes, as indicated by <code>roDeviceInfoEvent.internetStatus</code>. To receive events, the app must have first called <a href="/docs/references/brightscript/interfaces/ifsetmessageport.md">SetMessagePort</a> on the roDeviceInfo object specifying the message port that is to receive the events.</p>
<h4 id="parameters-8">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag specifying whether to enable/disable network connection status event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-38">Return Values</h4>
<p>A flag indicating whether network connection status event notifications are enabled (true) or disabled (false).</p>
<h3 id="getuptimemillisecondsaslong-as-long">GetUptimeMillisecondsAsLong() as Long</h3>
<p><em>Available since Roku OS 15.0</em></p>
<h4 id="description-38">Description</h4>
<p>Returns the system's uptime since the last reboot (in milliseconds as a Long). This function is similar to the <a href="/docs/references/brightscript/language/global-utility-functions.md#uptimedummy-as-integer-as-float">global utility Uptime function</a>, but makes it easier for developers to handle monotonic milliseconds.</p>
<h4 id="return-value">Return Value</h4>
<p>A Long indicating the the system's uptime since the last reboot (in milliseconds).</p>
<h3 id="getinternetstatus-as-boolean">GetInternetStatus() as Boolean</h3>
<h4 id="description-39">Description</h4>
<p>Checks the internet connection status of the device.</p>
<h4 id="return-value-1">Return Value</h4>
<p>True if the cached internet status shows a connection; false, otherwise.</p>
<h3 id="forceinternetstatuscheck-as-boolean">ForceInternetStatusCheck() as Boolean</h3>
<h4 id="description-40">Description</h4>
<p>Forces a new internet connection check. A new check will only be initiated if the cached internet status is older than 10 seconds.</p>
<h4 id="return-value-2">Return Value</h4>
<p>True indicates only that a new internet check has been initiated; otherwise, false. To get the actual internet connection status, use the <a href="getinternetstatus-as-boolean"><strong>GetInternetStatus()</strong></a> method.</p>
<h3 id="getexternalip-as-string">GetExternalIp() as String</h3>
<h4 id="description-41">Description</h4>
<p>Checks the IP address assigned to the device by your internet service provider (ISP). This IP address is visible to the internet and all other computers outside your local network.</p>
<h4 id="return-values-39">Return Values</h4>
<p>The external IP address assigned to the device.</p>
<h3 id="getipaddrs-as-object">GetIPAddrs() as Object</h3>
<h4 id="description-42">Description</h4>
<p>Checks the local IP address of the device.</p>
<h4 id="return-values-40">Return Values</h4>
<p>An associative array, where each key is the name of a network interface and the value is the IP-address of the interface. Typically, the associative array only contains a single interface.</p>
<h3 id="getconnectioninfo-as-object">GetConnectionInfo() as Object</h3>
<h4 id="description-43">Description</h4>
<p>Checks for the information associated with the hardware's connection</p>
<h4 id="return-values-41">Return Values</h4>
<p>An associative array with the following key-value pairs:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">type</td>
<td class="long-line">Same as the value returned from GetConnectionType(). Indicated whether the device is using a WiFiConnection or WiredConnection.</td>
</tr>
<tr>
<td class="short-line">name</td>
<td class="short-line">Name of the connection interface.</td>
</tr>
<tr>
<td class="short-line">ip</td>
<td class="short-line">IP address used by the connection.</td>
</tr>
<tr>
<td class="short-line">ipv6<br><br><em>Available since Roku OS 12.0</em></td>
<td class="short-line">A list of IPv6 addresses used by the connection.</td>
</tr>
<tr>
<td class="short-line">mac</td>
<td class="long-line"><em>This field is deprecated</em><br><br>The device's MAC address is no longer returned (a string of zeros is returned in this field). Developers can use the <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#getchannelclientid-as-string">roDeviceInfo.GetChannelClientId </a>method to uniquely identify devices.</td>
</tr>
<tr>
<td class="short-line">ssid</td>
<td class="long-line">The SSID of the Access Point (present only if type = "WiFiConnection").</td>
</tr>
<tr>
<td class="short-line">gateway</td>
<td class="long-line">IP Address of the connection gateway (usually the router).</td>
</tr>
<tr>
<td class="short-line">dns.0</td>
<td class="long-line">IP Address of first DNS server associated with the connection.</td>
</tr>
<tr>
<td class="short-line">dns.1</td>
<td class="long-line">IP Address of the second DNS server, if any (Similarly for any subsequent DNS servers).</td>
</tr>
<tr>
<td class="short-line">dns.2</td>
<td class="long-line">IP Address of the third DNS server, if any (Similarly for any subsequent DNS servers).</td>
</tr>
<tr>
<td class="short-line">dns.3</td>
<td class="long-line">IP Address of the fourth DNS server, if any (Similarly for any subsequent DNS servers).</td>
</tr>
<tr>
<td class="short-line">active</td>
<td class="short-line">A flag indicating the network status.</td>
</tr>
<tr>
<td class="short-line">default</td>
<td class="long-line">A flag indicating whether the default WiFi connection is being used.</td>
</tr>
<tr>
<td class="short-line">expectedThroughput</td>
<td class="long-line">The actual speed of the connection.  This rate may be significantly lower than the theoretical maximum because of interference, distance, network overhead, and other factors. In ideal conditions, a single client might achieve approximately 65-70% of the physical rate.</td>
</tr>
<tr>
<td class="short-line">protocol</td>
<td class="short-line">The Wifi protocol name (IEEE 802.11g).</td>
</tr>
<tr>
<td class="short-line">signal</td>
<td class="long-line">The received signal strength indicator (RSSI) on a logarithmic scale. Values closer to 0 indicate a stronger signal; values closer to -100 indicate a weaker signal.</td>
</tr>
<tr>
<td class="short-line">ssid</td>
<td class="long-line">The service set identifier (SSID). The name of the WiFi network to which the device is connected.</td>
</tr>
<tr>
<td class="short-line">txFailed</td>
<td class="short-line">The number of dropped frames.</td>
</tr>
<tr>
<td class="short-line">txRetries</td>
<td class="short-line">The number of retries to send frames.</td>
</tr>
</tbody>
</table></div>
<h4 id="video-info">Video info</h4>
<h3 id="getdisplaytype-as-string">GetDisplayType() as String</h3>
<h4 id="description-44">Description</h4>
<p>Gets the text corresponding to the button selection in the Player Info Settings/Display Type page.</p>
<h4 id="return-values-42">Return Values</h4>
<p>The display type, which may be one of the following values:</p>
<ul>
<li>"HDTV"</li>
<li>"4:3 standard"</li>
<li>"16:9 anamorphic"</li>
</ul>
<h3 id="getdisplaymode-as-string">GetDisplayMode() as String</h3>
<h4 id="description-45">Description</h4>
<p>Checks the UI resolution of the device.</p>
<h4 id="return-values-43">Return Values</h4>
<p>The configured graphics layer resolution, which may be one of the following values:</p>
<ul>
<li>"480i" or "480p" (the <strong>ui_resolutions</strong> manifest entry includes <strong>sd</strong> as a supported resolution).</li>
<li>"720p"</li>
<li>"1080p" (the <strong>ui_resolutions</strong> manifest file entry includes <strong>fhd</strong> as a supported resolution)</li>
</ul>
<h3 id="getdisplayaspectratio-as-string">GetDisplayAspectRatio() as String</h3>
<h4 id="description-46">Description</h4>
<p>Checks the aspect ratio for the display screen.</p>
<h4 id="return-values-44">Return Values</h4>
<p>The aspect ratio, which may be one of the following values:</p>
<ul>
<li>"4x3"</li>
<li>"16x9"</li>
</ul>
<h3 id="getdisplaysize-as-object">GetDisplaySize() as Object</h3>
<h4 id="description-47">Description</h4>
<p>Checks the display size of a screen.</p>
<h4 id="return-values-45">Return Values</h4>
<p>An associative array with the screen width and height. Specifically, the keys "w" and "h" contain the values for the screen width and height respectively. This may be one of the following:</p>
<ul>
<li>720 and 480</li>
<li>1280 and 720</li>
<li>1920 and 1080</li>
</ul>
<h3 id="getvideomode-as-string">GetVideoMode() as String</h3>
<h4 id="description-48">Description</h4>
<p>Checks the video playback resolution.</p>
<h4 id="return-values-46">Return Values</h4>
<p>The video playback resolution, which maybe one of the following values:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">String</th>
<th class="short-line">Resolution</th>
<th class="short-line">Aspect Ratio</th>
<th class="short-line">Refresh Rate</th>
<th class="short-line">Bit Depth</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"480i"</td>
<td class="short-line">720x480</td>
<td class="short-line">4:3</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"480p"</td>
<td class="short-line">720x480</td>
<td class="short-line">4:3</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"576i25"</td>
<td class="short-line">720x576</td>
<td class="short-line">4:3</td>
<td class="short-line">25 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"576p50"</td>
<td class="short-line">720x576</td>
<td class="short-line">4:3</td>
<td class="short-line">50 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"576p60"</td>
<td class="short-line">720x576</td>
<td class="short-line">4:3</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"720p50"</td>
<td class="short-line">1280x720</td>
<td class="short-line">16:9</td>
<td class="short-line">50 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"720p"</td>
<td class="short-line">1280x720</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080i50"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">50 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080i"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p24"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">24 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p25"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">25 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p30"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">30 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p50"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">50 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p60b10"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p60Dv"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"1080p"</td>
<td class="short-line">1920x1080</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p24"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">24 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p25"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">25 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p30"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">30 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p30Dv"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">30 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p50"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">50 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p60"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p60Dv"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">8 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p24b10"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">24 Hz</td>
<td class="short-line">10 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p25b10"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">25 Hz</td>
<td class="short-line">10 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p30b10"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">30 Hz</td>
<td class="short-line">10 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p50b10"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">50 Hz</td>
<td class="short-line">10 Bit</td>
</tr>
<tr>
<td class="short-line">"2160p60b10"</td>
<td class="short-line">3840x2160</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">10 Bit</td>
</tr>
<tr>
<td class="short-line">"4320p60"</td>
<td class="short-line">7680 x 4320</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">12 Bit</td>
</tr>
<tr>
<td class="short-line">"4320p60b10"</td>
<td class="short-line">7680 x 4320</td>
<td class="short-line">16:9</td>
<td class="short-line">60 Hz</td>
<td class="short-line">12 Bit</td>
</tr>
</tbody>
</table></div>
<h3 id="getdisplayproperties-as-object">GetDisplayProperties() as Object</h3>
<h4 id="description-49">Description</h4>
<p>Checks for the display properties of the screen.</p>
<h4 id="return-values-47">Return Values</h4>
<p>An associative array with the following key/value pairs for the display properties of the screen:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Type</th>
<th class="short-line">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Width</td>
<td class="short-line">Integer</td>
<td class="long-line">Physical width of the attached display in centimeters</td>
</tr>
<tr>
<td class="short-line">Height</td>
<td class="short-line">Integer</td>
<td class="long-line">Physical height of the attached display in centimeters</td>
</tr>
<tr>
<td class="short-line">Internal</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the display is part of the Roku Player (such as a Roku TV), false otherwise</td>
</tr>
<tr>
<td class="short-line">Hdr10</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports HDR10, false otherwise</td>
</tr>
<tr>
<td class="short-line">Hdr10Plus</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports HDR10+, false otherwise</td>
</tr>
<tr>
<td class="short-line">HdrSeamless</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports any type of HDR, such as HDR10, HLG, or<br>Dolby Vision, false otherwise.</td>
</tr>
<tr>
<td class="short-line">Headless</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports being powered off while audio continues to play</td>
</tr>
<tr>
<td class="short-line">HLG</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports HLG, false otherwise</td>
</tr>
<tr>
<td class="short-line">DolbyVision</td>
<td class="short-line">Boolean</td>
<td class="long-line">Set to true if the attached display supports Dolby Vision, false otherwise</td>
</tr>
<tr>
<td class="short-line">visible</td>
<td class="short-line">boolean</td>
<td class="long-line">For Roku TVs only. Indicates whether the TV screen is on/off while the Roku device is actively streaming content. This is useful for checking whether customers have muted their TV screen while streaming video in order to continue listening to the audio (for example, when playing music videos, conferences, or podcasts).</td>
</tr>
</tbody>
</table></div>
<h3 id="getsupportedgraphicsresolutions-as-object">GetSupportedGraphicsResolutions() as Object</h3>
<h4 id="description-50">Description</h4>
<p>Checks the supported graphics resolutions.</p>
<h4 id="return-values-48">Return Values</h4>
<p>A list of associative arrays. Each associative array contains the following key/value pairs for the graphics resolutions:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Type</th>
<th class="short-line">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">width</td>
<td class="short-line">integer</td>
<td class="short-line">The pixel width of the supported resolution</td>
</tr>
<tr>
<td class="short-line">height</td>
<td class="short-line">integer</td>
<td class="short-line">The pixel height of the supported resolution</td>
</tr>
<tr>
<td class="short-line">name</td>
<td class="short-line">string</td>
<td class="short-line">Either SD, HD, or FHD</td>
</tr>
<tr>
<td class="short-line">ui</td>
<td class="short-line">boolean</td>
<td class="long-line">True if this resolution is the current Roku UI resolution</td>
</tr>
<tr>
<td class="short-line">preferred</td>
<td class="short-line">boolean</td>
<td class="long-line">True if this is the preferred UI resolution, i.e., if this is the optimal resolution for the device</td>
</tr>
</tbody>
</table></div>
<h3 id="candecodevideovideo_format-as-object-as-object">CanDecodeVideo(video_format as Object) as Object</h3>
<h4 id="description-51">Description</h4>
<p>Checks whether the device can decode and play the specified video format.</p>
<h4 id="parameters-9">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">video_format</td>
<td class="short-line">Object</td>
<td class="long-line">An associative array with the following key/value pairs specifying the video format to be checked.<br><br>As of Roku OS 14.1, the keys in the associative array are fully case-insensitive. For older OS versions, use lower-case letters for the keys when specified within double quotes ("").<br><br><div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Type</th>
<th class="short-line">Value</th>
<th class="short-line">Requirement</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Codec</td>
<td class="short-line">string</td>
<td class="long-line">Specifies the video codec: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Codec</th>
<th class="short-line">Profile</th>
<th class="short-line">Level</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"mpeg2"</td>
<td class="short-line">n/a</td>
<td class="short-line">"main", "high"</td>
</tr>
<tr>
<td class="short-line">"mpeg4 avc"  1</td>
<td class="short-line">"main", "high"</td>
<td class="short-line">"4.1", "4.2"</td>
</tr>
<tr>
<td class="short-line">"hevc" 1</td>
<td class="short-line">"main", "main 10"</td>
<td class="short-line">"4.1", "5.0", "5.1"</td>
</tr>
<tr>
<td class="short-line">"vp9" 1</td>
<td class="short-line">"profile 0", "profile 2"</td>
<td class="short-line">"4.1", "5.0", "5.1"</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Required</td>
</tr>
<tr>
<td class="short-line">Profile</td>
<td class="short-line">string</td>
<td class="short-line">Specifies the profile</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">Level</td>
<td class="short-line">string</td>
<td class="short-line">Specifies the level</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">Container</td>
<td class="short-line">string</td>
<td class="long-line">Specifies the container format: “mp4”, “hls”, “mkv”, “ism”, “dash”, “ts”</td>
<td class="short-line">Optional</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>All the codecs, except "mpeg2", can provide additional display info (bit depth, refresh rate, display width, display height) if the codec, profile, and level are passed as parameters.</p>
<p>For example, if the application wants to check if the Roku Player can play an AVC stream at high profile and level 4.2, it calls <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#candecodevideovideo_format-as-object-as-object">CanDecodeVideo()</a> with the following video_format:</p>
<p><code>{Codec: "mpeg4 avc", Profile: "high", Level: "4.2"}</code></p>
<p>Format keys that are not provided by the caller are not taken into account and not updated. For example, calling <a href="/docs/references/brightscript/interfaces/ifdeviceinfo.md#candecodevideovideo_format-as-object-as-object">CanDecodeVideo()</a> with a format description that has only a codec key (such as <code>{"codec": "vp9"}</code>) will return that same format if the device can decode and play that codec at all, even if the decode capability is limited to one specific container, profile, and level.</p>
<p>For Roku streaming players, an HDMI connection or television setting may affect whether the device actually supports a video format, regardless of the values returned by this function. It is therefore recommended that the application also call the <a href="#getvideomode-as-string">GetVideoMode() function</a>, which reports the current video playback resolution.</p>
</blockquote>
<h4 id="return-values-49">Return Values</h4>
<p>An associative array that includes a flag indicating whether the video format can be played, and the closest video format supported by the device.</p>
<p>If the Roku Player cannot play that video format, it will return false, and return the closest video format it can play, with the changed fields, such as:</p>
<p><code>{"codec":["hevc","mpeg1","mpeg2","h263","mpeg4 avc","vp9"],"result":false,"updated":"codec"}</code></p>
<p>The return value shows the Roku Player cannot play requested video format, shows the updated keys of the requested video format (level and profile) that it can support, and the all the key values of the requested video format supported by the Roku Player.</p>
<h3 id="getuiresolution-as-object">GetUIResolution() as Object</h3>
<h4 id="description-52">Description</h4>
<p>Checks for the UI resolution of the screen.</p>
<h4 id="return-values-50">Return Values</h4>
<p>An associative array with the following key-value pairs describing the current UI resolution:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">name</td>
<td class="long-line">The possible values are: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">SD</td>
<td class="long-line">standard definition (720x480 screen pixel dimensions)</td>
</tr>
<tr>
<td class="short-line">HD</td>
<td class="short-line">high-definition (1280x720 screen pixel dimensions)</td>
</tr>
<tr>
<td class="short-line">FHD</td>
<td class="long-line">full high-definition (1920x1080 screen pixel dimensions)</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">width</td>
<td class="long-line">The possible values are: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">720</td>
<td class="short-line">standard definition screen pixel width</td>
</tr>
<tr>
<td class="short-line">1280</td>
<td class="short-line">high-definition screen pixel width</td>
</tr>
<tr>
<td class="short-line">1920</td>
<td class="short-line">full high-definition screen pixel width</td>
</tr>
</tbody>
</table></div></td>
</tr>
<tr>
<td class="short-line">height</td>
<td class="long-line">The possible values are: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Value</th>
<th class="short-line">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">480</td>
<td class="short-line">standard definition screen pixel height</td>
</tr>
<tr>
<td class="short-line">720</td>
<td class="short-line">high-definition screen pixel height</td>
</tr>
<tr>
<td class="short-line">1080</td>
<td class="short-line">full high-definition screen pixel height</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table></div>
<h3 id="getgraphicsfeatures-as-object">GetGraphicsFeatures() as Object</h3>
<p><em>Available since Roku OS 14.0</em></p>
<h4 id="description-53">Description</h4>
<p>Checks the graphics features supported by the device.</p>
<h4 id="return-values-51">Return Values</h4>
<p>An associative array containing the following key/value pairs:</p>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line"><strong>Key</strong></th>
<th class="short-line"><strong>Type</strong></th>
<th class="short-line"><strong>Value</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">full_rotation</td>
<td class="short-line">boolean</td>
<td class="long-line"><ul>
<li>true: The device supports an arbitrary rotation degree.</li>
<li>false: The device supports 90° rotations only (0, 90, 180, 270)</li>
</ul></td>
</tr>
<tr>
<td class="short-line">astc_supported</td>
<td class="short-line">boolean</td>
<td class="long-line"><ul>
<li>true: The device supports <a href="https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression">Adaptive Scalable Texture Compression(ASTC)</a> compressed textures and can load <a href="https://github.com/ARM-software/astc-encoder/blob/main/Docs/FileFormat.md">.astc</a> image files.</li>
<li>false: The device does not support ASTC.</li>
</ul></td>
</tr>
</tbody>
</table></div>
<h3 id="getgraphicsplatform-as-string">GetGraphicsPlatform() as String</h3>
<h4 id="description-54">Description</h4>
<p>Checks the graphics platform of the device.</p>
<h4 id="return-values-52">Return Values</h4>
<p>The device's graphics platform, which may be one of the following values:</p>
<ul>
<li>"opengl"</li>
<li>"directfb"</li>
</ul>
<h3 id="getvideodecodeinfo-as-object">GetVideoDecodeInfo() as Object</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers  should use the <a href="#candecodevideovideo_format-as-object-as-object">CanDecodeVideo()</a> function instead.</p>
</blockquote>
<h4 id="description-55">Description</h4>
<p>See <a href="http://en.wikipedia.org/wiki/Extended_display_identification_data#EIA.2FCEA-861_extension_block">http://en.wikipedia.org/wiki/Extended_display_identification_data#EIA.2FCEA-861_extension_block</a> for an explanation of the information returned.</p>
<h4 id="return-values-53">Return Values</h4>
<p>An associative array with the EDID (EIA.2FCEA-861) information describing the video display</p>
<h3 id="enablecodeccapchangedeventenable-as-boolean">EnableCodecCapChangedEvent(enable As Boolean)</h3>
<h4 id="description-56">Description</h4>
<p>Notifies the app when the audio or video codec changes. This function enables the sending of an <a href="/docs/references/brightscript/events/rodeviceinfoevent.md">roDeviceInfoEvent</a> when the codec changes. To receive events, you must have first called <a href="/docs/references/brightscript/interfaces/ifsetmessageport.md">SetMessagePort</a> on the roDeviceInfo object specifying the message port that is to receive the events</p>
<h4 id="parameters-10">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag indicating whether to enable/disable codec change event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-54">Return Values</h4>
<p>A flag indicating whether codec change event notifications are enabled (true) or disabled (false).</p>
<h4 id="audio-info">Audio info</h4>
<h3 id="getaudiooutputchannel-as-string">GetAudioOutputChannel() as String</h3>
<h4 id="description-57">Description</h4>
<p>Checks for the type of audio output.</p>
<h4 id="return-values-55">Return Values</h4>
<p>The selected audio output, which may be one of the following values:</p>
<ul>
<li>"Stereo"</li>
<li>"5.1 surround"</li>
</ul>
<h3 id="getaudiodecodeinfo-as-object">GetAudioDecodeInfo() as Object</h3>
<blockquote>
<p><strong>This method is deprecated</strong>.</p>
<p>Developers  should use the <a href="#candecodeaudioaudio_format-as-object-as-object">CanDecodeAudio()</a> function instead.</p>
</blockquote>
<h4 id="description-58">Description</h4>
<p>Lists each audio decoder supported by the device, with up to four numbers describing the decoder from the EDID SAD (Short Audio Descriptor). Each value is of the form "::::"</p>
<h4 id="return-values-56">Return Values</h4>
<p>An associative array with EDID (EIA.2FCEA-861) audio decoder information for the device connected to the HDMI port (or the device itself for a Roku TV).</p>
<p>For example, the name "DD+" may have the value "8:6:0:1" where there are 8 independent audio tracks (7.1 audio), 6 is the SAD1 byte, 0 is the SAD2 byte, and 1 is the binary value that indicates this is a pass-through audio device (not a Roku TV). The SAD1 and SAD2 bytes are interpreted differently for different codecs and more information about their values can be found here: <a href="http://en.wikipedia.org/wiki/Extended_display_identification_data#CEA_EDID_Timing_Extension_Version_3_data_format">http://en.wikipedia.org/wiki/Extended_display_identification_data#CEA_EDID_Timing_Extension_Version_3_data_format</a></p>
<h4 id="example-1">Example</h4>
<p>The following example demonstrates how to determine if the attached device supports Dolby Digital Plus audio:</p>
<pre><code>di = CreateObject("roDeviceInfo")
audioDecoders = di.GetAudioDecodeInfo()

REM Check for surround sound codecs:
hasDolbyDigital = audioDecoders.doesexist("AC3")
hasDTS = audioDecoders.doesexist("DTS")
hasDDPlus = audioDecoders.doesexist("DD+")
</code></pre>
<blockquote>
<p>The definition of hasFeature (“5.1_surround_sound”) has changed in Roku OS 6.1. In previous firmware revisions it returned true when the user set the system audio format to "Surround Sound". In Roku OS6.1 and above, it returns true when any of the codecs in the GetAudioDecodeInfo() AA has more than 2 audio channels. Users devices will also be default to the "Auto Detect" system HDMI audio setting in v6.1.</p>
</blockquote>
<h3 id="candecodeaudioaudio_format-as-object-as-object">CanDecodeAudio(audio_format as Object) as Object</h3>
<h4 id="description-59">Description</h4>
<p>Checks if the device can decode and play the specified audio format.</p>
<blockquote>
<p>Use this method to query the codecs every time before starting playback on content (do not cache  and use the results from a previous call). In addition, use the <a href="/docs/references/brightscript/events/rodeviceinfoevent.md"><strong>roDeviceInfo.audioCodecCapabilityChanged()</strong></a> event to identify any codec changes that may occur when the audio output destination is switched. This will help your app to perform well with the Roku mobile app and and private listening.</p>
</blockquote>
<h4 id="parameters-11">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">audio_format</td>
<td class="short-line">Object</td>
<td class="long-line">An associative array with the audio format to be checked. The general format of the associative arrays for CanDecodeAudio() is similar to the parameter and return associative arrays used in <a href="#candecodevideovideo_format-as-object-as-object">CanDecodeVideo()</a>. <br><br>As of Roku OS 14.1, the keys in the associative array are fully case-insensitive. For older OS versions, use lower-case letters for the keys when specified within double quotes ("").<br><br> <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Key</th>
<th class="short-line">Type</th>
<th class="short-line">Value</th>
<th class="short-line">Requirement</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">Codec</td>
<td class="short-line">string</td>
<td class="long-line">Specifies the audio codec: “aac”, “ac3”, “eac3”, "alac", "flac", “mp2”, “mp3”, “vorbis”, “wma” (sunset as of Roku OS 12.5), “wma pro” (sunset as of Roku OS 12.5), “dts”, "ac4"</td>
<td class="short-line">Required</td>
</tr>
<tr>
<td class="short-line">Profile</td>
<td class="short-line">string</td>
<td class="long-line">Specifies the codec profile: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Codec</th>
<th class="short-line">Profile</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"h.265/h.265"</td>
<td class="short-line">"main", "high", "main 10"</td>
</tr>
<tr>
<td class="short-line">"vp9"</td>
<td class="short-line">"profile 0", "profile 2"</td>
</tr>
<tr>
<td class="short-line">"AAC codec profiles"</td>
<td class="short-line">"mp2 lc", "mp4 he"</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">Level</td>
<td class="short-line">String</td>
<td class="long-line">Specifies the codec level: <div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Codec</th>
<th class="short-line">Level</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">"h.265/h.265"</td>
<td class="short-line">4.1, 4.2, 5.0, 5.1</td>
</tr>
<tr>
<td class="short-line">"vp9"</td>
<td class="short-line">3.0, 3.1, 4.0, 4.1, 5.0, 5.1</td>
</tr>
</tbody>
</table></div></td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">ChCnt</td>
<td class="short-line">integer</td>
<td class="short-line">Specifies the required number of audio channels</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">PassThru</td>
<td class="short-line">integer</td>
<td class="long-line">Specifies whether the bitstream needs to be decoded on the device. By default, this reports the codec properties of both the Roku device and the attached           HDMI device. <br><br>You can filter the values returned by including one of the following options: <ul>
<li><strong>0</strong> - Reports only codecs that are supported on the Roku device itself.</li>
<li><strong>1</strong> - Reports only codecs of the attached HDMI device (for example, an audio receiver).</li>
</ul></td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">Atmos</td>
<td class="short-line">Integer</td>
<td class="long-line">Specifies whether Atmos presence is to be validated. Include 'atmos=1' to check for the presence of Atmos. Starting with Roku OS 14.1,'atmos=0' can be used to specifically check for the absence of Atmos.</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">SampleRate</td>
<td class="short-line">integer</td>
<td class="short-line">Specifies the sample rate</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">BitRate</td>
<td class="short-line">integer</td>
<td class="short-line">Specifies the bit rate in Kbit/sec</td>
<td class="short-line">Optional</td>
</tr>
<tr>
<td class="short-line">Container</td>
<td class="short-line">string</td>
<td class="short-line">Specifies the container format</td>
<td class="short-line">Optional</td>
</tr>
</tbody>
</table></div></td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-57">Return Values</h4>
<p>An associative array that includes a flag indicating whether the audio format can be played, and the closest audio format supported by the device.</p>
<h3 id="ispassthrucodecactive-as-boolean">IsPassthruCodecActive() as Boolean</h3>
<h4 id="description-60">Description</h4>
<p>Indicates whether a passthrough device that owns the codec (a TV, audio receiver, or soundbar connected to a Roku device via HDMI) is rendering audio.  </p>
<p>Apps can call the <a href="#candecodevideovideo_format-as-object-as-object">CanDecodeAudio()</a> function with the <strong>audioFormat.passthru</strong> field set to 1 to check whether the passthrough device can decode and play the specified audio format, and then call this function to determine whether the passthrough device  is actually rendering the audio.</p>
<p>If the app receives a <a href="/docs/references/brightscript/events/rodeviceinfoevent.md#isstatusmessage-as-boolean"><strong>roDeviceInfoEvent.audioCodecCapabilityChanged</strong></a> event, it can call this function again to determine whether the audio output has changed (for example, check whether a different set of codecs are now relevant). The app can also re-query the <a href="#candecodevideovideo_format-as-object-as-object">CanDecodeAudio()</a> function to determine whether the codecs themselves have changed (for example, an audio receiver has been disconnected).</p>
<h4 id="return-values-58">Return Values</h4>
<p>A flag indicating whether the passthrough device is rendering audio.  </p>
<h3 id="getsoundeffectsvolume-as-integer">GetSoundEffectsVolume() as Integer</h3>
<h4 id="description-61">Description</h4>
<p>Checks for the user interface sound effects volume level.</p>
<h4 id="return-values-59">Return Values</h4>
<p>The UI sounds effects volume as a percentage. A return value of 0 indicates that UI sound effects are muted, and a value of 100 indicates that they are set to the maximum volume level</p>
<h3 id="isaudioguideenabled-as-dynamic">IsAudioGuideEnabled() as Dynamic</h3>
<blockquote>
<p>The screen reader is available on the following devices: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.5 and later.</p>
</blockquote>
<h4 id="description-62">Description</h4>
<p>Checks if the screen reader is enabled.</p>
<h4 id="return-values-60">Return Values</h4>
<p>A flag indicating whether the screen reader is enabled.</p>
<h3 id="enableaudioguidechangedeventenable-as-boolean-as-dynamic">EnableAudioGuideChangedEvent(enable as Boolean) as Dynamic</h3>
<blockquote>
<p>The screen reader is available on: Roku Streaming Stick (3600X), Roku Express (3700X) and Express+ (3710X), Roku Premiere (4620X) and Premiere+ (4630X), Roku Ultra (4640X), and any Roku TV running Roku OS version 7.5 and above</p>
</blockquote>
<h4 id="description-63">Description</h4>
<p>Notifies the app when the screen reader changes. This function enables the sending of an <a href="/docs/references/brightscript/events/rodeviceinfoevent.md">roDeviceInfoEvent</a> when the screen reader changes. To receive events, you must have first called <a href="/docs/references/brightscript/interfaces/ifsetmessageport.md">SetMessagePort</a> on the roDeviceInfo object specifying the message port that is to receive the events</p>
<h4 id="parameters-12">Parameters</h4>
<div class="hscroll"><table>
<thead>
<tr>
<th class="short-line">Name</th>
<th class="short-line">Type</th>
<th class="short-line">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line">enable</td>
<td class="short-line">Boolean</td>
<td class="long-line">A flag indicating whether to enable/disable screen reader change event notifications.</td>
</tr>
</tbody>
</table></div>
<h4 id="return-values-61">Return Values</h4>
<p>A flag indicating whether screen reader change event notifications are enabled (true) or disabled (false).</p>
<h3 id="isautoplayenabled-as-boolean">IsAutoplayEnabled() as Boolean</h3>
<p><em>Available since Roku OS 13.0</em></p>
<p><strong>Description</strong></p>
<p>Returns a flag indicating whether autoplay is enabled on a device. Developers can use this function to ensure that the autoplay device setting is respected when customers browse content in their apps.</p>
<p>If autoplay is disabled on a device, apps may not begin any video playback until the customer expressly requests it. Once a user navigates to a video or otherwise explicitly requests the playback of the video to begin, the app may continue playing that video until the user navigates away from it, pauses it, turns the device off, or a screensaver starts.</p>
<p>Apps must adhere to <a href="/docs/developer-program/media-playback/autoplay.md">Roku’s autoplay policy</a> to pass certification (Effective after October 1, 2024).</p>
<p><strong>Return Value</strong></p>
<p>A boolean indicating whether autoplay is enabled on a device.</p>
<h3 id="isautoadjustrefreshrateenabled-as-boolean">isAutoAdjustRefreshRateEnabled() as Boolean</h3>
<p><em>Available since Roku OS 15.0</em></p>
<p><strong>Description</strong></p>
<p>Returns a flag indicating whether the Auto Adjust Display Refresh Rate setting is enabled on a device.</p>
<p><strong>Return Value</strong></p>
<p>A boolean indicating whether the Auto Adjust Display Refresh Rate setting is enabled on a device.</p></div>