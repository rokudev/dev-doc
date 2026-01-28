---
title: Roku Advertising Framework release notes
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
<HTMLBlock>{`
<h1 id="roku-advertising-framework-release-notes">Roku Advertising Framework release notes</h1>
<h3 id="version-3-1-7-2022">Version 3.1 – 7/2022</h3>
<ul>
<li>For apps that collect explicit in-app consent for ad targeting (for example, to adhere to GDPR), a new [<strong>setLimitAdTracking()</strong>](doc:raf-api#setlimitadtrackingenabled-as-boolean) function that specifies the value of the ROKU_ADS_LIMIT_TRACKING URL parameter macro to be passed into beacons and ad requests</li>
<li>Improved interactive ads capabilities</li>
<li>Deployed to devices on Roku OS 11.0 and above</li>
</ul>
<h3 id="version-2-18-2-2022">Version 2.18 – 2/2022</h3>
<ul>
<li>Support for new interactive ad experiences, improvements to existing templates</li>
<li>Improvements to [Roku ad watermark](doc:ad-watermark) feature</li>
<li>Multiple bug fixes and feature enhancements</li>
<li>Deployed to devices on Roku OS 10.5 and above</li>
</ul>
<h3 id="version-2-17-11-2021">Version 2.17 – 11/2021</h3>
<ul>
<li>Improvements to interactive ad rendering and operation</li>
<li>Multiple enhancements and bug fixes</li>
<li>Deployed to devices on Roku OS 10.5 and above</li>
</ul>
<h3 id="version-2-16-08-2021">Version 2.16 – 08/2021</h3>
<ul>
<li>Extended [Roku ad watermark](doc:ad-watermark) to support [Demand API](doc:demand-api) calls</li>
<li>Assorted bug fixes and enhancements to existing features</li>
<li>Deployed to devices on Roku OS 10.0 and above</li>
</ul>
<h3 id="version-2-15-05-2021">Version 2.15 – 05/2021</h3>
<ul>
<li>New Feature: Methods for accessing [Roku Demand API](doc:demand-api). Provides more efficient monetization by connecting to real-time ad demand, while preserving control of inventory allocation with publisher&#39;s ad server</li>
<li>New Feature: Initial implementation of watermarking for ad requests and impression pixels to combat ad fraud</li>
<li>Added Portuguese localization of the ad UI texts</li>
<li>Multitude of bug fixes and enhancements, notably [stitchedAdsInit()](doc:raf-api#stitchedadsinitadpodarray-as-roarray) now clears the ad badge if called mid-ad break (<em>early cue-in</em> use case)</li>
<li>Deployed to devices on Roku OS 9.4 and above</li>
</ul>
<h3 id="version-2-14-12-2020">Version 2.14 – 12/2020</h3>
<ul>
<li>Added support for the characters <strong>{|}&quot;&lt;&gt;\^\`</strong> (which are neither reserved nor unreserved by <a href="https://tools.ietf.org/html/rfc3986">RFC-3986</a>) by percent-encoding them in ad request and beacon URLs</li>
<li>New [<code>enableInPodStitching(isIPS as Boolean)</code>](doc:raf-api#enableinpodstitchingisips-as-boolean) method brings benefits from [CSAS API](doc:csas) to apps using the classic CSAI [showAds()](doc:raf-api#showadsads-as-object-ctx-as-object-view-as-object-as-boolean) by stitching together multiple video clips within a single ad break (no buffering between ads)</li>
<li>When parsing VAST, preserve the <code>id</code> attribute of <code>&lt;MediaFile/&gt;</code></li>
<li>Added support for [getAds()](doc:raf-api#getadsmsg-as-string-as-object) parsing a local file from tmp:/ via e.g. [setAdURL(&quot;tmp:/myVASTorVMAPorSMRX.xml&quot;)](doc:raf-api#setadurlurl-as-string)</li>
<li>Multitude of bug fixes and enhancements</li>
<li>Deployed to devices on Roku OS 9.4 and above</li>
</ul>
<h3 id="version-2-13-7-2020">Version 2.13 – 7/2020</h3>
<ul>
<li>Multitude of bug fixes and enhancements, including<ul>
<li>Reduce [JIT pre-fetching](doc:raf-api#enablejitpodsenabled-as-boolean) to improve playback start time for [client-stitched](doc:csas) use case</li>
<li>Fix regression of [fireRokuMarketingPixel()](doc:tracking-signup-abandonment#integrating-the-raf-firerokumarketingpixel-method-in-the-signup-workflow) not URL-encoding its arguments</li>
<li>Fix errors on bad metadata (e.g. when parsing VAST, getting a single ad with <Extension type="waterfall"/> yet having fallback_index&gt;0)</li>
</ul>
</li>
<li>Improvements to interactive ads</li>
<li>Deployed to devices on Roku OS 9.2 and above</li>
</ul>
<h3 id="version-2-12-3-2020">Version 2.12 – 3/2020</h3>
<ul>
<li>New Voting Ad</li>
<li>Multitude of bug fixes and enhancements</li>
<li>Deployed to devices on Roku OS 9.2 and above</li>
</ul>
<h3 id="version-2-11-11-2019">Version 2.11 – 11/2019</h3>
<ul>
<li>New interactive ad features</li>
<li>Multitude of bug fixes and enhancements</li>
<li>Deployed to devices with Roku OS 9.2 or above</li>
</ul>
<h3 id="version-2-10-08-2019">Version 2.10 – 08/2019</h3>
<ul>
<li>Added handling of [voice ETC](doc:transport-controls) for ads</li>
<li>Interactive ads improvements</li>
<li>Bug fixes and performance improvements</li>
<li>Deployed to devices with Roku OS 9.1 and above</li>
</ul>
<h3 id="version-2-9-06-2019">Version 2.9 – 06/2019</h3>
<ul>
<li>Added a [ROKU_ADS_LOCALE macro](doc:integrating-roku-advertising-framework#url-parameter-macros) which returns current locale in same format
as [roDeviceInfo.getCurrentLocale()](doc:ifdeviceinfo#getcurrentlocale-as-string)
(e.g. &quot;en_US&quot;, &quot;es_ES&quot;)</li>
<li>Library manifests
internally [rsg_version=1.2](doc:channel-manifest#special-purpose-attributes),
which decreases memory use when RAF is included in complex apps. Note this is
independent from the application-level <em>manifest</em> file, where you may separately
declare <em>rsg_version=1.2</em> (or assume the default 1.1 [the default is now 1.2 as of Roku OS 9.3])</li>
<li>New interactive ad features</li>
<li>Improved diagnostics. Of note, when detected a URL with invalid characters,
RAF would print
a warning:<pre><code><span class="hljs-selector-attr">[RAF.err]</span> <span class="hljs-selector-tag">roUrlTransfer</span><span class="hljs-selector-class">.setURL</span>(<span class="hljs-string">"some invalid URL"</span>) <span class="hljs-selector-tag">rejected</span> <span class="hljs-selector-tag">argument</span> <span class="hljs-selector-tag">-</span> <span class="hljs-selector-tag">invalid</span> <span class="hljs-selector-tag">chars</span>? (space and "&lt;&gt;\^\`{|} must be %-encoded)
</code></pre></li>
<li>Bug fixes and performance improvements</li>
<li>Deployed to devices with Roku OS 9.1 and above</li>
</ul>
<h3 id="version-2-8-04-2019">Version 2.8 – 04/2019</h3>
<ul>
<li>New interactive ad units</li>
<li>Added support for expanding multiple RAF macros per single URL query
parameter value. Consequently, now composite query parameters like
FreeWheel&#39;s <code>flag</code> are supported in generic manner</li>
<li>Bug fixes and performance improvements</li>
<li>Deployed to devices with Roku OS 9.0 and above</li>
</ul>
<h3 id="version-2-7-01-2019">Version 2.7 – 01/2019</h3>
<ul>
<li>Release with a primary focus on Roku OS 9.0 compatibility</li>
<li>New interactive ad features</li>
<li>Bug fixes and performance improvements</li>
<li>Deployed to devices with Roku OS 9.0 and above</li>
</ul>
<h3 id="version-2-6-10-2018">Version 2.6 – 10/2018</h3>
<ul>
<li>RAF now shows test ads <em>only</em> in side-loaded (&quot;dev&quot;) and unpublished apps.</li>
<li>Added &quot;In-Pod Stitching&quot; capability for client-side ad-inserted (CSAI)
apps, which provides an improved
user experience that can eliminate buffering between multiple ads in an ad break.
This can be enabled by developers for evaluation, and can by enabled in eligible
production apps without the need for
re-publishing.</li>
<li>Improved RAF diagnostic messages</li>
<li>Bug fixes and performance improvements</li>
<li>Deployed to devices with Roku OS 8.1 and above</li>
</ul>
<h3 id="version-2-5-05-2018">Version 2.5 – 05/2018</h3>
<ul>
<li>Major rework of RAF&#39;s diagnostic output to [BrightScript console](doc:debugging-channels#accessing-the-debug-console)<ul>
<li>Warning messages (prefixed with &quot;[RAF.err]&quot;) are always printed for known potential problems. Note that these are just additional diagnostics - they do not change the library&#39;s behavior, as compared to previous versions.</li>
<li>Substantially more information is printed when in setDebugOutput(true) mode: method call arguments and return values, [URL macros](doc:integrating-roku-advertising-framework#url-parameter-macros) expansion, ad XML/parsed, etc.</li>
</ul>
</li>
<li>New interactive templates by BrightLine/Innovid</li>
<li>Deployed to devices with Roku OS 8.0 and above</li>
</ul>
<h3 id="version-2-4-03-2018">Version 2.4 – 03/2018</h3>
<ul>
<li>New feature: JIT (&quot;Just In Time&quot;) ad resolution for VMAP, SmartXML to reduce overhead incurred by prefetching all ad pods before content playback starts</li>
<li>New feature: RIA (&quot;Roku Interactive Ads&quot;) to allow rendering of Roku interactive ad overlays for OTT content (previously only available for ACR on linear content)</li>
<li>BrightLine bug fixes and performance improvements</li>
<li>Innovid bug fixes and new templates (&quot;User Satisfaction Survey&quot; and &quot;Skippable&quot; interactive ads)</li>
</ul>
<h3 id="version-2-3-10-2017">Version 2.3 – 10/2017</h3>
<ul>
<li>Add support for BrightLine interactive ads in SSAI+RSG use case</li>
<li>New interactive ad templates (Innovid)</li>
<li>Implement ad buffering limit</li>
<li>Add support for tracking beacons with HTTP → HTTPS redirects</li>
<li>General performance improvements and bug fixes</li>
<li>RAF 2.3 available in Roku OS 7.7 and above</li>
</ul>
<h3 id="version-2-2-07-2017">Version 2.2 – 07/2017</h3>
<ul>
<li>Added a native RSG renderer for Brightline interactive ads</li>
<li>Enabled the firing of tracking events on empty ad breaks (SmartXML
and VMAP; relevant to FreeWheel forecasting)</li>
<li>Fixed the autoscaling of interactive ads for FHD-only RSG apps on a
HD UI device</li>
<li>Fixed an error when the ad response is invalid XML</li>
<li>Improved the RIDA hashing when &quot;limit ad tracking&quot; is set</li>
<li>Improved the draining of pending beacons cache, to benefit low
memory devices</li>
<li>Enhanced the handling of non-standard view sizes (RSG)</li>
<li>Fixed various minor issues</li>
</ul>
<h3 id="version-2-1-05-2017">Version 2.1 – 05/2017</h3>
<ul>
<li>Added support for comScore vCE campaign measurement service</li>
<li>Introducing a generalized audience measurement API
(see [enableAdMeasurements()](doc:raf-api#general-audience-measurement) for
details)</li>
<li>Support for a new TrueX SAB interactive ad template</li>
<li>Fix for a display resolution issue when a FHD-only RSG app was
playing ad video on a HD UI device</li>
<li>Miscellaneous other fixes</li>
</ul>
<h3 id="version-2-0-03-2017">Version 2.0 – 03/2017</h3>
<ul>
<li>Support for RSG apps to use RAF from Task
node</li>
<li>SceneGraph ad rendering support (video ads and
Innovid interactive ads)<ul>
<li>New <code>view</code> parameter for [showAds()](doc:raf-api#client-ad-insertion), which is required for all SceneGraph applications</li>
</ul>
</li>
<li>VAST 3.0 &quot;ad buffet&quot; support</li>
<li>Extended companion ad tag parsing from VAST to
allow multiple ad renderers for different companion creatives</li>
<li>New interactive ad template support</li>
<li>New <code>adCompleted</code> return value for
[<code>stitchedAdHandledEvent()</code>](doc:raf-api#server-stitched-ads)</li>
<li>New <code>provider</code> member for <code>companionAds</code> metadata
in [Ad Structure](doc:integrating-roku-advertising-framework#ad-structure)</li>
<li>Fix in VAST parser to address problem with DFP
waterfall containing invalid ads</li>
<li>Multiple bug fixes to address ad rendering in both SDK1 and RSG apps
built with different combinations of supported <code>ui_resolutions</code></li>
</ul>
<h3 id="version-1-9-11-2016">Version 1.9 – 11/2016</h3>
<ul>
<li>Freewheel SmartXML adReplica changes<ul>
<li>Improve forecasting by only resolving ad requests for wrapped
creative renditions that are placed into ad slots</li>
<li>Respect replicaId if specified in the adReference tag and a matching
replica exists in the creativeRenditions, otherwise treat unwrapped
renditions as alternate streams</li>
</ul>
</li>
<li>When Limit Ad Tracking is set by the user, use a new time-scoped ID that
is cycled every 30 days to provide the benefits of frequency capping
while still respecting the user’s desire to avoid ad tracking</li>
<li>Added an optional new parameter to the setContentGenre() API to indicate
whether content is targeted for kids</li>
<li>Added a new content macro, ROKU_ADS_KIDS_CONTENT, and modified
default/backfill URLs to use this new macro</li>
<li>Added a new API, getNielsenContentData(), that will return an encrypted
N-RIDA parameter string for apps wishing to use Nielsen SDK for DCR
measurements</li>
<li>New BrightLine template</li>
<li>Eclipse plugin compatibility fixes</li>
<li>Exit key handling fixes</li>
<li>TrueX and BrightLine bug fixes and enhancements</li>
<li>Added a fix for BrightLine ads to use cached ad position</li>
<li>Fixed 3rd-party tags that used improperly-encoded URL fragments by
URL-encoding fragment contents</li>
<li>Modified garbage collection after interactive ad rendering to fix
display issue with BrightLine ads</li>
</ul>
<h3 id="version-1-8-10-2016">Version 1.8 – 10/2016</h3>
<ul>
<li>Add missing tracking events for plain video ads in server-stitched
streams: Impression, Pause, Resume  </li>
<li>Add contextual info for complete tracking event</li>
<li>Add companion tracking metadata to Innovid ads, which do not
explicitly have a CompanionAd tag to distinguish video ad tracking
from microsite tracking</li>
<li>Add 303 error tracking when wrapped VAST returns no ads</li>
<li>New BrightLine templates</li>
<li>Merged Innovid renderer changes, including modifications to tracking
pixel logic</li>
<li>New creativeAdId metadata field for ads</li>
<li>Fix crash when replacing RAF macros in URL containing query
parameter values without a name</li>
<li>Correct pod-specific tracking for ad pods in server-stitched
streams: PodComplete, PodStart</li>
<li>Disallow re-rendering of ad pod when pod cache has been updated
while rendering the pod (e.g., for TrueX ads)</li>
<li>Re-purpose &quot;Expand&quot; and &quot;Collapse&quot; ad tracking to refer to microsite
interactions for Innovid ads, which do not generally have a separate
CompanionAd tag in the VAST representation for these additional
tracking events</li>
<li>Ignore replicaId values when specified in SmartXML ad slots, since
these always refer to the first replica</li>
<li>Treat multiple renditions of wrapped ads in SmartXML as replicas</li>
<li>Override any creative ID set from a wrapped ad with the creativeId
attribute in SmartXML, since this is likely more meaningful to the
app than the wrapped ID</li>
<li>Numerous TrueX/BrightLine bug fixes and feature changes</li>
<li>Track ad render position values to prevent spurious
Complete/PodComplete events when exiting microsites (playback of
stitched video can resume across ad boundary, resulting in extra
tracking pixels being fired)</li>
</ul>
<h3 id="version-1-7-06-2016">Version 1.7 – 06/2016</h3>
<ul>
<li>New API: setContentMetaData(metaData): allows app to set information
about the current content</li>
<li>Added new HLS MIME type: &quot;application/vnd.apple.mpegurl&quot;</li>
<li>Added &quot;ai=ROKU_ADS_APP_ID&quot; to default and backfill ad URLs&#39;
cust_params</li>
<li>Changed macro value of ROKU_ADS_LIMIT_TRACKING to &quot;1&quot; or &quot;0&quot;
instead of &quot;true&quot; or &quot;false,&quot; to accommodate DFP&#39;s special LAT
values</li>
<li>Changed handling of invalid messages passed to the event handler for
stitched ads to return either the cached ad data if an ad is
currently being rendered, or Invalid if no ad is being rendered to
accommodate apps that erroneously pass Invalid messages to the
handler</li>
<li>Prioritize MP4 over HLS ad creatives as HLS can take longer than the
length of an ad to settle on an acceptable playback bitrate</li>
<li>Add support for TrueX ad experience and parse new TrueX VAST
extensions</li>
<li>Invalidate rendering of current ad pod if pod cache has been updated</li>
<li>Parse &quot;special&quot; wrapped URLs inside <asset\> tag in SmartXML</li>
<li>Numerous BrightLine changes to support rendering of choice cards,
skip cards, managing ad pod cache when pods are skipped</li>
<li>Modified backfill URLs slotname parameter to use ROKU_ADS_APP_ID
as it was in v1.6</li>
<li>Merged Innovid&#39;s latest code containing important tracking fixes</li>
<li>Fix to the BrightLine code to address crashes on some devices still
running 7.0 FW</li>
<li>Fix bug that caused lower ad fill rates for SmartXML responses that
included erroneous or empty ad tags in a given ad pod</li>
<li>Fix construction of generic tracking events for SmartXML when
quartile events are not specified</li>
</ul>
<h3 id="version-1-6-03-2016">Version 1.6 – 03/2016</h3>
<ul>
<li>Interactive ads on Server Stitched Ads</li>
<li>Support for DFP Waterfall</li>
<li>Customize Buffer Screens - static image only</li>
<li>Update LR tags to DFP tags</li>
<li>Innovid- Extender</li>
<li>New URL parameter macros: ROKU_ADS_LIMIT_TRACKING,
ROKU_ADS_APP_VERSION, ROKU_ADS_LIB_VERSION,
ROKU_ADS_DEVICE_MODEL</li>
<li>Loading message was not updating correctly for
preroll/midroll/postroll ads</li>
<li>Pass the raw unchanged value in the ROKU_ADS_TRACKING_ID macro</li>
<li>Macros were not expanded when held in the URL encoded section of the
key/values</li>
<li>Pre-roll ad in 1080p HD TV didn’t display full screen</li>
<li>BrightScript log is displaying &quot;ERROR: Runtime: FOR EACH value is
&quot;Invalid&quot; when ad is playing fine</li>
</ul>
<h3 id="version-1-5-12-2015">Version 1.5 – 12/2015</h3>
<ul>
<li>Max URL transfer count bumped up from 40 to 300</li>
<li>If Nielsen impressions contained prior values for parameters that
should not be substituted due to whitelisting or ad server
blacklisting, remove those values from the URL</li>
<li>set maximum decode resolution on all rendered video ads to avoid
memory issue due to buffering algorithm on lower end devices</li>
<li>Ensure that a properly-handled exit key exits the main video render
loop</li>
<li>Add support for Freewheel &quot;eventCallback&quot;-style impression tracking</li>
<li>Issue with pressing &quot;back&quot; remote button on image canvas screen</li>
<li>Fixed VMAP Bug where ad breaks with the same offset were ignored</li>
<li>Ad Framework unable to parse response - Freewheel Promos</li>
<li>Fix edge case bug in URL regularization with path parameters</li>
<li>Fix &quot;PodComplete&quot; tracking sent when interactive ads are exited</li>
</ul>
<h3 id="version-1-4-10-2015">Version 1.4 – 10/2015</h3>
<ul>
<li>Ability for cross-promotion of apps/content</li>
<li>Ability to install an app from a video ad</li>
<li>Ability to follow content on an app from a video ad</li>
<li>Integration of BrightLine Interactive Ads</li>
<li>Integrate BrightLine Interactive ads to RAF</li>
<li>Updates to Innovid library (Use “Up” key instead of “*&quot; everywhere)</li>
<li>SmartXML parser changes</li>
<li>Support “slotImpression” beacon types</li>
<li>Enhanced Support for quartile tracking events in all scenarios</li>
<li>Additional attributes such as ad.Title, ad.CreativeId, ad.advertiser
for VAST and FreeWheel ads</li>
<li>String Localization for core UI strings</li>
<li>SetContentLength API for Nielsen beacons</li>
<li>Midroll/postroll video playback issues on Roku TVs</li>
</ul>
`}</HTMLBlock>

<br />
