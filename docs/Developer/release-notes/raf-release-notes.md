# Roku Advertising Framework release notes

### Version 3.1 – 7/2022

- For apps that collect explicit in-app consent for ad targeting (for example, to adhere to GDPR), a new [**setLimitAdTracking()**](/docs/developer-program/advertising/raf-api.md#setlimitadtrackingenabled-as-boolean) function that specifies the value of the ROKU_ADS_LIMIT_TRACKING URL parameter macro to be passed into beacons and ad requests
- Improved interactive ads capabilities
- Deployed to devices on Roku OS 11.0 and above

### Version 2.18 – 2/2022

- Support for new interactive ad experiences, improvements to existing templates
- Improvements to [Roku ad watermark](/docs/developer-program/advertising/ad-watermark.md) feature
- Multiple bug fixes and feature enhancements
- Deployed to devices on Roku OS 10.5 and above

### Version 2.17 – 11/2021

- Improvements to interactive ad rendering and operation
- Multiple enhancements and bug fixes
- Deployed to devices on Roku OS 10.5 and above

### Version 2.16 – 08/2021

- Extended [Roku ad watermark](/docs/developer-program/advertising/ad-watermark.md) to support [Demand API](/docs/developer-program/advertising/demand-api.md) calls
- Assorted bug fixes and enhancements to existing features
- Deployed to devices on Roku OS 10.0 and above

### Version 2.15 – 05/2021

- New Feature: Methods for accessing [Roku Demand API](/docs/developer-program/advertising/demand-api.md). Provides more efficient monetization by connecting to real-time ad demand, while preserving control of inventory allocation with publisher's ad server
- New Feature: Initial implementation of watermarking for ad requests and impression pixels to combat ad fraud
- Added Portuguese localization of the ad UI texts
- Multitude of bug fixes and enhancements, notably [stitchedAdsInit()](/docs/developer-program/advertising/raf-api.md#stitchedadsinitadpodarray-as-roarray) now clears the ad badge if called mid-ad break (*early cue-in* use case)
- Deployed to devices on Roku OS 9.4 and above

### Version 2.14 – 12/2020

- Added support for the characters **{|}"<>\^`** (which are neither reserved nor unreserved by [RFC-3986](https://tools.ietf.org/html/rfc3986)) by percent-encoding them in ad request and beacon URLs
- New [`enableInPodStitching(isIPS as Boolean)`](/docs/developer-program/advertising/raf-api.md#enableinpodstitchingisips-as-boolean) method brings benefits from [CSAS API](/docs/developer-program/advertising/csas.md) to apps using the classic CSAI [showAds()](/docs/developer-program/advertising/raf-api.md#showadsads-as-object-ctx-as-object-view-as-object-as-boolean) by stitching together multiple video clips within a single ad break (no buffering between ads)
- When parsing VAST, preserve the `id` attribute of `<MediaFile/>`
- Added support for [getAds()](/docs/developer-program/advertising/raf-api.md#getadsmsg-as-string-as-object) parsing a local file from tmp:/ via e.g. [setAdURL("tmp:/myVASTorVMAPorSMRX.xml")](/docs/developer-program/advertising/raf-api.md#setadurlurl-as-string)
- Multitude of bug fixes and enhancements
- Deployed to devices on Roku OS 9.4 and above

### Version 2.13 – 7/2020

- Multitude of bug fixes and enhancements, including
  - Reduce [JIT pre-fetching](/docs/developer-program/advertising/raf-api.md#enablejitpodsenabled-as-boolean) to improve playback start time for [client-stitched](/docs/developer-program/advertising/csas.md) use case
  - Fix regression of [fireRokuMarketingPixel()](/docs/developer-program/roku-pay/implementation/tracking-signup-abandonment.md#integrating-the-raf-firerokumarketingpixel-method-in-the-signup-workflow) not URL-encoding its arguments
  - Fix errors on bad metadata (e.g. when parsing VAST, getting a single ad with <Extension type="waterfall"/> yet having fallback_index>0)
- Improvements to interactive ads
- Deployed to devices on Roku OS 9.2 and above

### Version 2.12 – 3/2020

- New Voting Ad
- Multitude of bug fixes and enhancements
- Deployed to devices on Roku OS 9.2 and above

### Version 2.11 – 11/2019

- New interactive ad features
- Multitude of bug fixes and enhancements
- Deployed to devices with Roku OS 9.2 or above

### Version 2.10 – 08/2019

- Added handling of [voice ETC](/docs/developer-program/media-playback/voice-controls/transport-controls.md) for ads
- Interactive ads improvements
- Bug fixes and performance improvements
- Deployed to devices with Roku OS 9.1 and above

### Version 2.9 – 06/2019

- Added a [ROKU_ADS_LOCALE macro](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) which returns current locale in same format
as [roDeviceInfo.getCurrentLocale()](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getcurrentlocale-as-string)
(e.g. "en_US", "es_ES")
- Library manifests
internally [rsg_version=1.2](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes),
which decreases memory use when RAF is included in complex apps. Note this is
independent from the application-level *manifest* file, where you may separately
declare *rsg_version=1.2* (or assume the default 1.1 [the default is now 1.2 as of Roku OS 9.3])
- New interactive ad features
- Improved diagnostics. Of note, when detected a URL with invalid characters,
RAF would print
a warning:
~~~~
[RAF.err] roUrlTransfer.setURL("some invalid URL") rejected argument - invalid chars? (space and "<>\^`{|} must be %-encoded)
~~~~
- Bug fixes and performance improvements
- Deployed to devices with Roku OS 9.1 and above

### Version 2.8 – 04/2019

- New interactive ad units
- Added support for expanding multiple RAF macros per single URL query
parameter value. Consequently, now composite query parameters like
FreeWheel's `flag` are supported in generic manner
- Bug fixes and performance improvements
- Deployed to devices with Roku OS 9.0 and above

### Version 2.7 – 01/2019

- Release with a primary focus on Roku OS 9.0 compatibility
- New interactive ad features
- Bug fixes and performance improvements
- Deployed to devices with Roku OS 9.0 and above

### Version 2.6 – 10/2018

- RAF now shows test ads *only* in side-loaded ("dev") and unpublished apps.
- Added "In-Pod Stitching" capability for client-side ad-inserted (CSAI)
apps, which provides an improved
user experience that can eliminate buffering between multiple ads in an ad break.
This can be enabled by developers for evaluation, and can by enabled in eligible
production apps without the need for
re-publishing.
- Improved RAF diagnostic messages
- Bug fixes and performance improvements
- Deployed to devices with Roku OS 8.1 and above

### Version 2.5 – 05/2018

- Major rework of RAF's diagnostic output to [BrightScript console](/docs/developer-program/debugging/debugging-channels.md#accessing-the-debug-console)
    - Warning messages (prefixed with "[RAF.err]") are always printed for known potential problems. Note that these are just additional diagnostics - they do not change the library's behavior, as compared to previous versions.
    - Substantially more information is printed when in setDebugOutput(true) mode: method call arguments and return values, [URL macros](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#url-parameter-macros) expansion, ad XML/parsed, etc.
- New interactive templates by BrightLine/Innovid
- Deployed to devices with Roku OS 8.0 and above

### Version 2.4 – 03/2018

- New feature: JIT ("Just In Time") ad resolution for VMAP, SmartXML to reduce overhead incurred by prefetching all ad pods before content playback starts
- New feature: RIA ("Roku Interactive Ads") to allow rendering of Roku interactive ad overlays for OTT content (previously only available for ACR on linear content)
- BrightLine bug fixes and performance improvements
- Innovid bug fixes and new templates ("User Satisfaction Survey" and "Skippable" interactive ads)

### Version 2.3 – 10/2017

- Add support for BrightLine interactive ads in SSAI+RSG use case
- New interactive ad templates (Innovid)
- Implement ad buffering limit
- Add support for tracking beacons with HTTP → HTTPS redirects
- General performance improvements and bug fixes
- RAF 2.3 available in Roku OS 7.7 and above

### Version 2.2 – 07/2017

- Added a native RSG renderer for Brightline interactive ads
- Enabled the firing of tracking events on empty ad breaks (SmartXML
and VMAP; relevant to FreeWheel forecasting)
- Fixed the autoscaling of interactive ads for FHD-only RSG apps on a
HD UI device
- Fixed an error when the ad response is invalid XML
- Improved the RIDA hashing when "limit ad tracking" is set
- Improved the draining of pending beacons cache, to benefit low
memory devices
- Enhanced the handling of non-standard view sizes (RSG)
- Fixed various minor issues

### Version 2.1 – 05/2017

- Added support for comScore vCE campaign measurement service
- Introducing a generalized audience measurement API
(see [enableAdMeasurements()](/docs/developer-program/advertising/raf-api.md#general-audience-measurement) for
details)
- Support for a new TrueX SAB interactive ad template
- Fix for a display resolution issue when a FHD-only RSG app was
playing ad video on a HD UI device
- Miscellaneous other fixes

### Version 2.0 – 03/2017

- Support for RSG apps to use RAF from Task
node
- SceneGraph ad rendering support (video ads and
  Innovid interactive ads)
  - New `view` parameter for [showAds()](/docs/developer-program/advertising/raf-api.md#client-ad-insertion), which is required for all SceneGraph applications
- VAST 3.0 "ad buffet" support
- Extended companion ad tag parsing from VAST to
allow multiple ad renderers for different companion creatives
- New interactive ad template support
- New `adCompleted` return value for
[`stitchedAdHandledEvent()`](/docs/developer-program/advertising/raf-api.md#server-stitched-ads)
- New `provider` member for `companionAds` metadata
in [Ad Structure](/docs/developer-program/advertising/integrating-roku-advertising-framework.md#ad-structure)
- Fix in VAST parser to address problem with DFP
waterfall containing invalid ads
- Multiple bug fixes to address ad rendering in both SDK1 and RSG apps
built with different combinations of supported `ui_resolutions`

### Version 1.9 – 11/2016

- Freewheel SmartXML adReplica changes
  - Improve forecasting by only resolving ad requests for wrapped
    creative renditions that are placed into ad slots
  - Respect replicaId if specified in the adReference tag and a matching
    replica exists in the creativeRenditions, otherwise treat unwrapped
    renditions as alternate streams
- When Limit Ad Tracking is set by the user, use a new time-scoped ID that
is cycled every 30 days to provide the benefits of frequency capping
while still respecting the user’s desire to avoid ad tracking
- Added an optional new parameter to the setContentGenre() API to indicate
whether content is targeted for kids
- Added a new content macro, ROKU\_ADS\_KIDS\_CONTENT, and modified
default/backfill URLs to use this new macro
- Added a new API, getNielsenContentData(), that will return an encrypted
N-RIDA parameter string for apps wishing to use Nielsen SDK for DCR
measurements
- New BrightLine template
- Eclipse plugin compatibility fixes
- Exit key handling fixes
- TrueX and BrightLine bug fixes and enhancements
- Added a fix for BrightLine ads to use cached ad position
- Fixed 3rd-party tags that used improperly-encoded URL fragments by
URL-encoding fragment contents
- Modified garbage collection after interactive ad rendering to fix
display issue with BrightLine ads

### Version 1.8 – 10/2016

- Add missing tracking events for plain video ads in server-stitched
streams: Impression, Pause, Resume  
- Add contextual info for complete tracking event
- Add companion tracking metadata to Innovid ads, which do not
explicitly have a CompanionAd tag to distinguish video ad tracking
from microsite tracking
- Add 303 error tracking when wrapped VAST returns no ads
- New BrightLine templates
- Merged Innovid renderer changes, including modifications to tracking
pixel logic
- New creativeAdId metadata field for ads
- Fix crash when replacing RAF macros in URL containing query
parameter values without a name
- Correct pod-specific tracking for ad pods in server-stitched
streams: PodComplete, PodStart
- Disallow re-rendering of ad pod when pod cache has been updated
while rendering the pod (e.g., for TrueX ads)
- Re-purpose "Expand" and "Collapse" ad tracking to refer to microsite
interactions for Innovid ads, which do not generally have a separate
CompanionAd tag in the VAST representation for these additional
tracking events
- Ignore replicaId values when specified in SmartXML ad slots, since
these always refer to the first replica
- Treat multiple renditions of wrapped ads in SmartXML as replicas
- Override any creative ID set from a wrapped ad with the creativeId
attribute in SmartXML, since this is likely more meaningful to the
app than the wrapped ID
- Numerous TrueX/BrightLine bug fixes and feature changes
- Track ad render position values to prevent spurious
Complete/PodComplete events when exiting microsites (playback of
stitched video can resume across ad boundary, resulting in extra
tracking pixels being fired)

### Version 1.7 – 06/2016

- New API: setContentMetaData(metaData): allows app to set information
about the current content
- Added new HLS MIME type: "application/vnd.apple.mpegurl"
- Added "ai=ROKU\_ADS\_APP\_ID" to default and backfill ad URLs'
cust\_params
- Changed macro value of ROKU\_ADS\_LIMIT\_TRACKING to "1" or "0"
instead of "true" or "false," to accommodate DFP's special LAT
values
- Changed handling of invalid messages passed to the event handler for
stitched ads to return either the cached ad data if an ad is
currently being rendered, or Invalid if no ad is being rendered to
accommodate apps that erroneously pass Invalid messages to the
handler
- Prioritize MP4 over HLS ad creatives as HLS can take longer than the
length of an ad to settle on an acceptable playback bitrate
- Add support for TrueX ad experience and parse new TrueX VAST
extensions
- Invalidate rendering of current ad pod if pod cache has been updated
- Parse "special" wrapped URLs inside <asset\> tag in SmartXML
- Numerous BrightLine changes to support rendering of choice cards,
skip cards, managing ad pod cache when pods are skipped
- Modified backfill URLs slotname parameter to use ROKU\_ADS\_APP\_ID
as it was in v1.6
- Merged Innovid's latest code containing important tracking fixes
- Fix to the BrightLine code to address crashes on some devices still
running 7.0 FW
- Fix bug that caused lower ad fill rates for SmartXML responses that
included erroneous or empty ad tags in a given ad pod
- Fix construction of generic tracking events for SmartXML when
quartile events are not specified

### Version 1.6 – 03/2016

- Interactive ads on Server Stitched Ads
- Support for DFP Waterfall
- Customize Buffer Screens - static image only
- Update LR tags to DFP tags
- Innovid- Extender
- New URL parameter macros: ROKU\_ADS\_LIMIT\_TRACKING,
ROKU\_ADS\_APP\_VERSION, ROKU\_ADS\_LIB\_VERSION,
ROKU\_ADS\_DEVICE\_MODEL
- Loading message was not updating correctly for
preroll/midroll/postroll ads
- Pass the raw unchanged value in the ROKU\_ADS\_TRACKING\_ID macro
- Macros were not expanded when held in the URL encoded section of the
key/values
- Pre-roll ad in 1080p HD TV didn’t display full screen
- BrightScript log is displaying "ERROR: Runtime: FOR EACH value is
"Invalid" when ad is playing fine

### Version 1.5 – 12/2015

- Max URL transfer count bumped up from 40 to 300
- If Nielsen impressions contained prior values for parameters that
should not be substituted due to whitelisting or ad server
blacklisting, remove those values from the URL
- set maximum decode resolution on all rendered video ads to avoid
memory issue due to buffering algorithm on lower end devices
- Ensure that a properly-handled exit key exits the main video render
loop
- Add support for Freewheel "eventCallback"-style impression tracking
- Issue with pressing "back" remote button on image canvas screen
- Fixed VMAP Bug where ad breaks with the same offset were ignored
- Ad Framework unable to parse response - Freewheel Promos
- Fix edge case bug in URL regularization with path parameters
- Fix "PodComplete" tracking sent when interactive ads are exited

### Version 1.4 – 10/2015

- Ability for cross-promotion of apps/content
- Ability to install an app from a video ad
- Ability to follow content on an app from a video ad
- Integration of BrightLine Interactive Ads
- Integrate BrightLine Interactive ads to RAF
- Updates to Innovid library (Use “Up” key instead of “\*" everywhere)
- SmartXML parser changes
- Support “slotImpression” beacon types
- Enhanced Support for quartile tracking events in all scenarios
- Additional attributes such as ad.Title, ad.CreativeId, ad.advertiser
for VAST and FreeWheel ads
- String Localization for core UI strings
- SetContentLength API for Nielsen beacons
- Midroll/postroll video playback issues on Roku TVs
