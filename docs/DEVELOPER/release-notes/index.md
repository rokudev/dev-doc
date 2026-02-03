---
title: Release notes
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
<h2 id="roku-os-15-0">Roku OS 15.0</h2>
<p>Roku OS 15.0 features major BrightScript updates, including new APIs for transferring node data and handling references, improved JSON parsing with reduced memory overhead, and more robust functions for getting the system uptime and date/time.</p>
<p>In addition, this release includes new media playback and content metadata features and enhancements to the Roku Resource Monitor. </p>
<p>Here is the list of key developer-facing Roku OS 15.0 updates:</p>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<h5 id="optimized-data-transfer-and-reference-handling-apis">Optimized data transfer and reference handling APIs</h5>
<p>This release features a set of new APIs for transferring node data more efficiently than copying. These APIs let you move data in and out of fields, access data by reference, and queue the messages to be consumed by handlers on the render thread. This improves app performance by minimizing memory consumption, especially for handling larger objects. </p>
<blockquote>
<p>Click [here](doc:data-transfer-apis) for detailed information on using these APIs.</p>
</blockquote>
<h5 id="roarray-ifarraysizeinfo-">roArray.ifArraySizeInfo()</h5>
<p>The new <strong>ifArraySizeInfo()</strong> interface includes set of functions that provide developers with more control over array capacities. These functions reduce the memory overhead when using the [<strong>ParseJSON()</strong> function](doc:global-utility-functions#parsejsonjsonstring-as-string-flags---as-string-as-object) on large JSON body data sets. </p>
<h6 id="isresizable-as-boolean">IsResizable() As Boolean</h6>
<p>Returns a flag indicating whether the array will automatically expand to store new items.</p>
<h6 id="capacity-as-integer">Capacity() As Integer</h6>
<p>Returns the current storage capacity of the array (specifically, how many items could be
stored without allocating additional storage).</p>
<p>The return value may be 0 if the array is empty and no storage has been allocated yet.</p>
<h6 id="reserve-minsize-as-integer-">Reserve(minSize As Integer)</h6>
<p>Sends a request to allocate or increase storage capacity of the array to hold at least the specified
number of items. </p>
<p>Returns true if the potential capacity update can hold the specified number of items. Otherwise, returns false if the array is not resizable or storage allocation fails.</p>
<blockquote>
<p> The updated capacity of the array may be more than was requested if the extra capacity already existed or how storage was implemented.</p>
</blockquote>
<h6 id="shrinktofit-as-boolean">ShrinkToFit() As Boolean</h6>
<p>Request to free or decrease storage to the minimum needed to store the current number of items.</p>
<p>Returns true unless the array is not resizable or storage reallocation fails.</p>
<blockquote>
<p>The updated capacity of the array may be more than the exact number of items in it based on the storage implementation.</p>
</blockquote>
<h5 id="rodeviceinfo-getuptimemillisecondsaslong-as-long">roDeviceInfo.GetUptimeMillisecondsAsLong() as Long</h5>
<p>The <strong>GetUptimeMillisecondsAsLong()</strong> function returns the system&#39;s uptime since the last reboot (in milliseconds as a Long). This function is similar to the [global utility Uptime function](doc:global-utility-functions#uptimedummy-as-integer-as-float), but makes it easier for developers to handle monotonic milliseconds.</p>
<h5 id="rodatetime-asmillisecondslong-as-long">roDateTime.AsMillisecondsLong() as Long</h5>
<p>The <strong>roDateTime.AsMillisecondsLong()</strong> function returns a Long representing the date/time as the number of milliseconds from the Unix epoch (00:00:00 1/1/1970 GMT).</p>
<h4 id="media-playback-and-content-metadata">Media playback and content metadata</h4>
<h5 id="widevine-license-wrapping-license-challenge-url-support">Widevine license wrapping - license challenge URL support</h5>
<p>The [<strong>contentNode.drmParams.requestField</strong>](doc:content-metadata#digital-rights-management-drm-control-attributes), which was introduced in Roku OS 14.6, now supports the LICENSE_CHALLENGE field being provided as a URL (in addition to a text string).  The Roku OS automatically follows the challenge URLs properly.  </p>
<h5 id="rodeviceinfo-isautoadjustrefreshrateenabled-">roDeviceInfo.IsAutoAdjustRefreshRateEnabled()</h5>
<p>The <strong>roDeviceInfo.IsAutoAdjustRefreshRateEnabled()</strong> function checks whether the Auto Adjust Display Refresh Rate setting is enabled on a device. </p>
<h4 id="developer-and-debugging-tools">Developer and debugging tools</h4>
<h5 id="ecp-commands-for-checking-cec-settings-on-roku-streaming-players">ECP commands for checking CEC settings on Roku streaming players</h5>
<p>Developers can now use [ECP](doc:external-control-api) to check whether CEC settings (TV power and volume control) have been enabled on a Roku streaming player. </p>
<p>The [<strong>query-device-info</strong> command](doc:external-control-api#querydevice-info-example) now returns the following fields that indicate whether TV power and audio volume control have been enabled on a player: </p>
<ul>
<li>supports-tv-power-control</li>
<li>supports-audio-volume-control</li>
</ul>
<h5 id="roku-resource-monitor-4-2">Roku Resource Monitor 4.2</h5>
<p>[Roku Resource Monitor 4.2](doc:resource-monitor) features a new <strong>Data Collection Mode</strong> that enables developers to integrate a headless version of the tool into their CLI pipelines. This provides developers with automated data collection and performance monitoring without having to use the RRM UI. The collected data can be used to detect memory leaks, analyze resource utilization trends, and debug issues.</p>
<ul>
<li>To download the tool, click <a href="https://devtools.web.roku.com/#rrm-tool">here</a>.</li>
<li>For more information, read the [Roku Resource Monitor documentation](doc:resource-monitor).</li>
</ul>
<h2 id="roku-os-14-6">Roku OS 14.6</h2>
<p>Roku OS 14.6 includes BrightScript updates, new media playback and content metadata features, and enhancements to the Roku Resource Monitor and debugging tools. Here is the list of key developer-facing Roku OS 14.6 updates:</p>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<h5 id="parsejson-support-for-double-precision-numbers">ParseJson() support for double precision numbers</h5>
<p>The [parseJson() function](doc:global-utility-functions#parsejsonjsonstring-as-string-flags---as-string-as-object) includes a new “<strong>d”</strong> flag that changes floating point number parsing to use double-precision floating point values (roDouble), when needed, to improve the precision of the parsed numbers. This helps developers handle JSON payloads from server-side ad insertion (SSAI) providers that use floating-point values to represent time values.</p>
<h4 id="media-playback-and-content-metadata">Media playback and content metadata</h4>
<h5 id="widevine-license-wrapping">Widevine license wrapping</h5>
<p>The [contentNode.drmParams field](doc:content-metadata#digital-rights-management-drm-control-attributes) includes four new parameters that enable developers to wrap the Widevine license challenge payload in the request format (JSON or XML) required by their license server proxy:</p>
<h4 id="developer-and-debugging-tools">Developer and debugging tools</h4>
<h5 id="roku-resource-monitor-4-1">Roku Resource Monitor 4.1</h5>
<p><a href="https://devtools.web.roku.com/#rrm-tool">Roku Resource Monitor 4.1 (RRM 4.1)</a> improves scrollbar behavior and provides additional support for large session files. The <strong>SceneGraph nodes</strong> panel now includes shallow memory usage summaries, and the <strong>BrightScript objects</strong> panel now includes object counts and memory usage per thread.</p>
<ul>
<li>To download the tool, click <a href="https://devtools.web.roku.com/#rrm-tool">here</a>.</li>
<li>For more information, read the [Roku Resource Monitor documentation](doc:resource-monitor).</li>
</ul>
<h5 id="cross-component-backtrace-in-debug-console-and-debug-protocol">Cross-component backtrace in debug console and debug protocol</h5>
<p>The debug console and debug protocol both now include cross-component backtraces. This means that you can now navigate and inspect function context frames from different SceneGraph components, instead of just from the active component, if the call chain includes observer callbacks or functions called via <code>callFunc</code></p>
<p>For example, if roSgNode A calls into roSgNode B on the same thread (for example, via [CallFunc](doc:handling-application-events#functional-fields)) and then B breaks into the call, you can now view the calls belonging to both A and B in the backtrace of the thread.</p>
<h6 id="debug-console">Debug console</h6>
<p>You can use the existing <code>backtrace</code>, <code>up</code>, <code>down</code>, <code>over</code>, and <code>out</code> commands in the [debug console](doc:debugging-channels) on stack frames entered via <code>callFunc</code> or an observer callback, in addition to a normal BrightScript function call.</p>
<h6 id="debug-protocol">Debug protocol</h6>
<p>You can now use the STEP command in the [BrightScript debug protocol](doc:socket-based-debugger) to step over and out of SceneGraph observer callbacks and functions called via <code>callFunc</code>.</p>
<h4 id="deprecations">Deprecations</h4>
<h5 id="blowfish-ciphers">Blowfish ciphers</h5>
<p>Blowfish (bf*) ciphers are now marked as obsolete in the [roEVPCipher document](doc:roevpcipher). Support for these ciphers may be removed in future Roku OS releases.</p>
<h2 id="roku-os-14-5">Roku OS 14.5</h2>
<p>Roku OS 14.5 includes major updates to Roku Developer Tools, including the Roku Resource Monitor and BrightScript Profiler. Here is the list of key developer-facing Roku OS 14.5 updates:</p>
<h4 id="roku-developer-tools">Roku Developer Tools</h4>
<p>Essential updates have been made to the following Roku Developer Tools to ensure compatibility and reliability across modern platforms:</p>
<ul>
<li>Roku Advanced Layout Editor</li>
<li>Roku Remote Tool</li>
<li>Roku DeepLinking Tester</li>
<li>Roku Stream Tester</li>
</ul>
<p>This release provides the following improvements, critical bug fixes, and updates to the dependency stack to improve support for current and upcoming operating systems:</p>
<ul>
<li><strong>Updated dependencies</strong>: All major libraries and components have been upgraded to support the latest macOS (incl. Sequoia), Linux, and Windows 11 environments.</li>
<li><strong>Signed macOS build</strong>: Package signing has been updated so tools now launch without warnings on MacOS systems.</li>
<li><strong>Improved cross-platform support</strong>: Enhanced performance and system integration across macOS, Linux distributions, and Windows.</li>
<li><strong>Bug fixes</strong>: Resolved various issues and improved user experience.</li>
</ul>
<h5 id="roku-resource-monitor-4-0">Roku Resource Monitor 4.0</h5>
<p><a href="https://devtools.web.roku.com/#rrm-tool">Roku Resource Monitor 4.0 (RRM 4.0)</a> introduces several UI enhancements, including the ability to disable specific metric panels for your channel. This feature stops monitoring and hides the selected metric, allowing for a more streamlined and customized monitoring experience.  Additionally, RRM 4.0 automatically saves your view configuration, ensuring your preferred layout is retained the next time you launch the tool.</p>
<p>RRM 4.0 also consolidates the BrightScript Objects panels into one graph and adds an option for displaying the memory used by different objects, breaks out the SceneGraph metrics into the different node types (similar to the BrightScript Objects panel), and lets you drill down into the source code associated with a rendezvous event.</p>
<ul>
<li>To download the tool, click <a href="https://devtools.web.roku.com/#rrm-tool">here</a>. </li>
<li>For more information, read the [Roku Resource Monitor documentation](doc:resource-monitor). </li>
</ul>
<h5 id="brightscript-profiler">BrightScript Profiler</h5>
<p>The BrightScript Profiler features improved performance and stability. The tool uses less CPU and memory resources; therefore, it stays performant as you use it for longer sessions or switch tabs during a session.</p>
<ul>
<li>To download the tool, click <a href="https://devtools.web.roku.com/#brs-profiler-tool">here</a>. </li>
<li>For more information, read the [BrightScript profiler documentation](doc:brightscript-profiler). </li>
</ul>
<h4 id="media-playback-and-content-metadata">Media playback and content metadata</h4>
<p>The [<strong>drmParams</strong> parameter](doc:content-metadata#digital-rights-management-drm-control-attributes) now includes an <strong>ignoreInitDataPssh</strong> control attribute that ignores the PSSH in the initialization segment. This enables support for Harmonic/DTV-GO DASH-IOP v5.0.0 streams with In-Band Key-Rotation Signaling without breaking legacy streams/apps that do not provide the <code>&lt;ContentProtection&gt;</code> element with PSSH info in the DASH manifest.</p>
<h4 id="roku-scenegraph-rsg-1-1-apps-sunset">Roku SceneGraph (RSG) 1.1 apps sunset</h4>
<p>Support for apps using SceneGraph 1.1 (RSG 1.1) has ended on Roku OS 14.5. Apps claiming &quot;rsg_version=1.1&quot; in the manifest file will execute as if rsg_version=1.2 was specified and therefore may stop functioning properly on Roku OS 14.5. Developers must migrate their RSG 1.1 apps to RSG 1.2 to ensure they run on Roku OS 14.5.</p>
<p>In the Roku OS 9.0 release, the <strong>eval()</strong> function was deprecated and developers were instructed to use RSG 1.2 by setting the <strong>rsg_version</strong> flag in their manifest file to “rsg_version=1.2” in order to optimize load time performance and memory usage. In the Roku OS 9.3 release, the <strong>eval()</strong> function was sunset and it was noted that developers had to either remove all usage of the <strong>eval()</strong> function or update the <strong>rsg_version</strong> flag to “rsgversion=1.1”. With the release of Roku OS 14.5, the &quot;rsg_version=1.1&quot; manifest value is no longer an option and will be ignored.</p>
<h2 id="roku-os-14-0">Roku OS 14.0</h2>
<p><strong>Initial rollout date</strong>: September 24, 2024</p>
<p>Roku OS 14.0 includes new SceneGraph features for displaying monospaced text in your apps. Developers can use the new [<strong>MonospaceLabel</strong> node](doc:monospace-label) to draw a single line of text with all characters spaced at a fixed distance from each other. This functions as an alternative to using a monospace font with the <strong>Label</strong> node. In addition, the [<strong>LabelBase</strong> node](doc:label-base) includes a new [<strong>monospacedDigits</strong> field](doc:label-base#fields) that enables the rendering of tabular digits in overhang time values and countdowns.</p>
<p>In addition, Roku OS 14.0 includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.</p>
<p>Here is the list of key developer-facing Roku OS 14.0 updates:</p>
<ul>
<li>[<strong>MonospaceLabel</strong>](doc:monospace-label) — The [<strong>MonospaceLabel</strong> node](doc:monospace-label) is used to draw a single line of text with all characters spaced at a fixed distance from each other. It transforms proportional fonts into monospaced fonts. It is a substitute for using a monospace font with the <strong>Label</strong> node.</li>
<li>[<strong>LabelBase.monospacedDigits</strong>](doc:label-base#fields) — The LabelBase.monospacedDigits field is used to render monospaced digits.</li>
</ul>
<h2 id="roku-os-13-0">Roku OS 13.0</h2>
<p><strong>Initial rollout date</strong>: April 10, 2024</p>
<p>Roku OS 13.0 includes a new [<strong>contentClassifier</strong> content metadata attribute](doc:content-metadata#content-classification-attributes) that lets developers optimize the sound and picture on Roku TVs based on different content genres. This helps developers increase app engagement by giving customers a simple, convenient way to optimize their playback experience. Other media enhancements include new <strong>Video</strong> node attributes that provide developers with accessibility information about audio and subtitle tracks.</p>
<p>New BrightScript APIs help developers monitor and debug memory issues. The [<strong>roAppMemoryMontor</strong> node](doc:ifappmemorymonitor#getchannelmemorylimit-as-object) includes a new function that returns the maximum amount of background and foreground memory an app may use, and the [<strong>roAppManager</strong> node](doc:ifappmanager#getlastexitinfo-as-object) includes a function that lists the reason an app was terminated. In addition, this release includes new APIs that let developers check whether autoplay is enabled on a device and whether the system clock is valid.</p>
<p>For tools, ECP includes new [<strong>exit-app</strong>](doc:external-control-api#exit-app-example) and [<strong>query-app-state</strong>](doc:external-control-api#queryapp-state-example) commands that help developers automate the testing of apps that support Instant Resume and a new [<strong>query/app-object-counts</strong> command](doc:external-control-api#queryapp-object-counts-example) that helps developers associate memory and CPU usage with changes in BrightScript node object counts in their apps.</p>
<p>Here is the list of key developer-facing Roku OS 13.0 updates:</p>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<ul>
<li>[<strong>Maximum available memory query</strong>](doc:ifappmemorymonitor#getchannelmemorylimit-as-object) —  The <strong>roAppMemoryMonitor</strong> component includes a new [<strong>GetChannelMemoryLimit</strong> () function](doc:ifappmemorymonitor#getchannelmemorylimit-as-object) that returns how much foreground and background memory the app may use and the maximum amount of memory that the RokuOS may allocate on behalf of the app (the memory that shows up in the app&#39;s heap memory statistics ). This helps developers debug memory issues and find out the maximum available memory for scenarios such as when their app has been suspended and is in the background, is playing a video, and so on.</li>
</ul>
<ul>
<li>[<strong>App exit query</strong>](doc:ifappmanager#getlastexitinfo-as-object) — The <strong>roAppManager</strong> component includes a new [<strong>GetLastExitInfo</strong>() function](doc:ifappmanager#getlastexitinfo-as-object) that returns an exit code indicating why an app was terminated. This helps developers monitor and debug memory issues with their apps. The last exit information is provided for only the 10 most recent exits across all apps, and exit information does not persist across device reboots.</li>
</ul>
<ul>
<li>[<strong>Autoplay-enabled query</strong>](doc:ifdeviceinfo#isautoplayenabled-as-boolean) — The <strong>roDeviceInfo</strong> component includes a new [<strong>IsAutoplayEnabled</strong>() function](doc:ifdeviceinfo#isautoplayenabled-as-boolean) that lets developers check whether autoplay is enabled on a device. This lets developers ensure that their apps respect this device setting when customers browse content in their app.</li>
</ul>
<ul>
<li>[<strong>Hands-free voice remote check</strong>](doc:ifremoteinfo#hasfeaturefeature-as-string-remoteindex-as-integer-as-boolean) — The [<strong>roRemoteInfo.hasFeature()</strong> function](doc:ifremoteinfo#hasfeaturefeature-as-string-remoteindex-as-integer-as-boolean) now takes a &quot;hasMuteSwitch&quot; parameter, which enables developers to check whether a Roku remote control includes a hands-free voice switch.</li>
</ul>
<h4 id="media-drm-and-content-metadata-updates">Media, DRM, and content metadata updates</h4>
<ul>
<li>[<strong>Optimized sound and picture for Roku TVs based on content genre</strong>](doc:content-metadata#content-classification-attributes) — Developers can use the new [<strong>contentClassifier</strong> content metadata attribute](doc:content-metadata#content-classification-attributes) to specify the genre of their content (for example, action, sports, or comedy), and the Roku OS will use this attribute to automatically adjust the sound and picture on Roku TVs (if auto mode is selected for the picture or sound settings).</li>
</ul>
<ul>
<li>[<strong>Accessibility information for audio and subtitle tracks</strong>](doc:video#closed-caption-fields) —  The <strong>Video</strong> node&#39;s [<strong>availableAudioTracks</strong>](doc:video#closed-caption-fields) and [<strong>availableSubtitleTracks</strong>](doc:video#audio-fields) fields include new key-value pairs that provide accessibility information for audio and subtitle tracks. This helps developers identify whether a given track is an audio description.</li>
</ul>
<ul>
<li>[<strong>Seamless audio track selection</strong>](doc:video#audio-fields) — The <strong>Video</strong> node includes a new [<strong>seamlessAudioTrackSelection</strong> field](doc:video#audio-fields) that enables apps to continuously play video content when the audio track is switched (provided that the audio format remains the same). This gives developers the choice when the audio track is changed to either pause the video for approximately 1 second (current default behavior) or continue video playback. This feature currently supports HLS only.</li>
</ul>
<h4 id="tools">Tools</h4>
<p><strong>New ECP commands</strong></p>
<p>Developers can leverage the following ECP new commands in their tools and web services:</p>
<ul>
<li>[<strong>Suspend/terminate app command and app state query</strong>](doc:external-control-api#general-ecp-commands) — A new [<strong>exit-app</strong> command](doc:external-control-api#exit-app-example) enables developers to suspend or terminate their running app, and a new [<strong>query-app-state</strong> command](doc:external-control-api#querychannel-state-example) lets developers check whether their app is active, suspended (background), or inactive. These two commands help developers automate the testing of apps that support [Instant Resume](doc:instant-resume).</li>
</ul>
<ul>
<li>[<strong>BrightScript object counts query</strong>](doc:external-control-api#general-ecp-commands) — ECP includes a new [<strong>query/app-object-counts</strong> command](doc:external-control-api#queryapp-object-counts-example) that helps developers determine counts of each type of object held by their BrightScript app.</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<ul>
<li>The [<strong>roAppInfo.getSubtitle()</strong> function has been deprecated](doc:deprecated-apis#roappinfogetsubtitle).</li>
</ul>
<h2 id="roku-os-12-5">Roku OS 12.5</h2>
<p><strong>Initial rollout date</strong>: September 12, 2023</p>
<p>Roku OS 12.5 includes new APIs for monitoring the current amount of available memory for an app and getting the device user agent. This release also includes features that generally enhance the performance of media playback such as prebuffering for live content, improved closed captioning through ad breaks, and pre-playback audio and subtitle track selection.</p>
<p>Here is the list of key developer-facing Roku OS 12.5 updates:</p>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<ul>
<li>[<strong>Available memory query</strong>](doc:ifurltransfer#getuseragent-as-string) — The [<strong>roAppMemoryMonitor</strong> node](doc:roappmemorymonitor) includes a new <strong>GetChannelAvailableMemory()</strong> function that provides developers with the estimated kilobytes (Kb) of memory available for their app. This helps developers identify when to release memory when their app receives low-memory warnings.</li>
</ul>
<ul>
<li>[<strong>Device user agent</strong>](doc:ifurltransfer#getuseragent-as-string) — The [<strong>roUrlTransfer</strong> node](doc:rourltransfer) includes a new <strong>GetUserAgent()</strong> function that returns the device user agent. This provides developers with a direct method for getting the user agent in order to pass it into server-side ad requests.</li>
</ul>
<h4 id="media-drm-and-content-metadata-updates">Media, DRM, and content metadata updates</h4>
<ul>
<li><strong>Prebuffering for live content </strong>— Roku&#39;s media player now includes support for prebuffering live content. For video-on-demand (VOD) content, the media player now requires less data to be prebuffered.</li>
</ul>
<ul>
<li><strong>Improved support for maintaining closed captioning through ad breaks </strong>— If the start-time of a video ad occurs between the buffering and closed captioning start times, Roku&#39;s media player now maintains the closed captioning information. This helps recover any close caption sentences that may be missed after an ad break finishes. This is particularly useful for CEA 608/708 caption formatting because caption data is received from video content before ad breaks.</li>
</ul>
<ul>
<li><strong>Representation filtering based on HDCP level</strong> — When a 4K-capable Roku device is connected to an HD display, the Roku media player now filters out 4K representations to prevent DRM-based decryption failures.</li>
</ul>
<ul>
<li>[<strong>Pre-playback audio and closed captioning track selection </strong>](doc:video#playback-fields)— The [<strong>Video</strong> node](doc:video) includes new fields for specifying the priority order of different audio track and subtitle track selections.</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<ul>
<li>[<strong>run_as_process</strong> manifest attribute](doc:deprecated-apis#run_as_process-channel-manifest-attribute) has been deprecated — All apps now run in a separate process, regardless if the <strong>run_as_process</strong> attribute has been specified in the manifest.</li>
</ul>
<ul>
<li>[Support for the Windows Media Audio (wma) file format on the Roku platform has been sunset](doc:deprecated-apis#audio-node-windows-media-audio). The WMA audio format was originally deprecated in the Roku OS 10.5 release.</li>
</ul>
<h2 id="roku-os-12-0">Roku OS 12.0</h2>
<p><strong>Initial rollout date</strong>: March 8, 2023</p>
<p>Roku OS 12.0 includes a new BrightScript API for getting localized times and Instant Resume support for apps that do not have exit confirmation dialogs. For tools, this release features new External Control Protocol (ECP) query commands, and it enables developers using the BrightScript Debug Protocol to add breakpoints while the script is running.</p>
<p>Here is the list of key developer-facing Roku OS 12.0 updates:</p>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<ul>
<li><p>[<strong>Localized date and time formats</strong>](doc:ifdatetime#asdatestringlocformat-as-string-as-string) — The <a href="https://roku-ent.readme.io/dev/docs/rodatetime">roDateTime</a> component includes new <strong>asDateStringLoc()</strong> and <strong>asTimeStringLoc()</strong> methods that developers can use to get the localized date and time of a device. These new methods also enable developers to construct their own custom date and time formats.</p>
</li>
<li><p>[<strong>IPv6 addresses returned by roDeviceInfo.getConnectionInfo() method</strong>](doc:ifdeviceinfo#getconnectioninfo-as-object) — The [roDeviceInfo.getConnectionInfo() method](doc:ifdeviceinfo#getconnectioninfo-as-object) now returns an <strong>ipv6</strong> field, which is an array listing the IPv6 addresses used for the device connection.</p>
</li>
</ul>
<h4 id="integrations">Integrations</h4>
<ul>
<li>[<strong>Extended Instant Resume support for apps without exit confirmation dialogs</strong>](doc:instant-resume) — For apps implementing [Instant Resume](doc:instant-resume), an interruption event is now generated when the customer exits the app by pressing the back button. For apps that do not have an exit confirmation dialog, developers can now call the <strong>customSuspend</strong> handler when this occurs to save the current app state.</li>
</ul>
<h4 id="tools">Tools</h4>
<ul>
<li><p>[<strong>New ECP commands</strong>](doc:external-control-api) — [ECP](doc:external-control-api) includes a new <strong>query/graphic-frame-rate</strong> command that gets the graphics rendering frame rate, and app and media events can now be now tracked via a set of new <strong>query/fwbeacons</strong> commands (fwbeacons/track, fwbeacons/untrack and query/fwbeacons).</p>
<p> In addition, calling the <strong>query/registry</strong> ECP command now returns a new <strong>space-available</strong> field that provides developers with the amount of storage currently available in the device&#39;s registry, and the <strong>query/sgnodes</strong> command now returns a tree structure representing the app&#39;s UI, rather than a flat list of nodes.</p>
<p> Developers can leverage these commands in their tools and web services.</p>
</li>
</ul>
<ul>
<li>[<strong>BrightScript debug protocol (version 3.2)</strong>](doc:socket-based-debugger) — The [BrightScript debug protocol](doc:socket-based-debugger) now supports <strong>ADD_CONDITIONAL_BREAKPOINTS</strong> requests while the script is running. When this occurs, the breakpoints are registered, queued, and then applied as soon as processing allows. This eliminates the need to wait for the script to be paused in order to apply breakpoints. Instead, the breakpoints can now be applied based on the current device state. Developers should now use the <strong>ADD_CONDITIONAL_BREAKPOINTS</strong> command instead of <strong>ADD_BREAKPOINTS</strong> because ADD_CONDITIONAL_BREAKPOINTS is a strict superset of ADD_BREAKPOINTS.</li>
</ul>
<h2 id="roku-os-11-5">Roku OS 11.5</h2>
<p><strong>Initial rollout date</strong>: September 12, 2022</p>
<p>Roku OS 11.5 includes new SceneGraph [Video](doc:video) and [Content](doc:content-metadata) node fields that enhance the trickplay and pause screen experiences during video playback. This release also adds [device attestation tokens](doc:channelstore#getdeviceattestationtoken) that developers can incorporate in their web services to verify that messages originated from authentic Roku devices.</p>
<p>In addition, Roku OS 11.5 includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.</p>
<p>For tools, this release features the [Roku Resource Monitor](doc:resource-monitor): a new developer tool that tracks and visualizes the system memory, graphics memory, CPU, and SceneGraph nodes used by an app. Developers can use this tool to test the different screens in their app and identify consumption trends and patterns. In addition, this release includes new [External Control Protocol (ECP) query commands](doc:external-control-api#general-ecp-commands) that return rendezvous events and the entries in the device registry. Developers can incorporate these new queries in their test labs for debugging and performance monitoring. The [BrightScript Debug Protocol](doc:socket-based-debugger) now includes events for conditional breakpoints, compile errors in the main application and in component libraries, and improved breakpoint support for component libraries.</p>
<p>It is important to note that Roku OS 11.5 sunsets the <a href="https://blog.roku.com/developer/legacy-sdk">SDK1 visual screen components that were originally deprecated in 2017</a>; these components have been completely removed from the Roku OS. In addition, the <strong>roUrlTransfer.enableFreshConnection()</strong> function has been deprecated—apps should always reuse connections.</p>
<p>Here is the list of key developer-facing Roku OS 11.5 updates:</p>
<h4 id="scenegraph-apis">SceneGraph APIs</h4>
<ul>
<li><strong>Playback UX</strong> — Roku&#39;s SceneGraph [Video](doc:video) and [Content](doc:content-metadata) nodes include new fields that enable developers to integrate playback features for the trickplay and pause screen experiences such as audio and subtitle selection, playlist features such as skip, next, and queues, and autoplay recommendation features such &quot;More like this&quot;/&quot;Because you watched&quot;. Customers have become accustomed to this playback experience on The Roku Channel, and it is now available to apps across the platform.</li>
<li><p><strong>[Content.secondaryTitle](doc:content-metadata#descriptive-attributes)</strong>. Adds a secondary title for the video content. This field can be used to display the release year of movies, for example.</p>
</li>
<li><p>[<strong>Video.playbackActionButtons</strong>](doc:video#playback-fields). Shows the buttons and other specified UI elements on the pause screen at the start of playback. This field includes properties for the button text, icon, and status (enabled/disabled). Related fields identify which pause screen button is selected and has key focus, and sets the button color, text color, and background color based on whether the button has key focus.</p>
</li>
<li><p>[<strong>Video.pivotNode</strong>](doc:video#ui-fields). Adds a generic renderable node that can be used to display any SceneGraph component.</p>
</li>
<li><p>[<strong>Video.trickPlayBackgroundOverlay</strong>](doc:video#trickplay-fields). Specifies the background overlay to be displayed whenever the playback UI is visible during the video playback experience.</p>
</li>
</ul>
<ul>
<li>[<strong>Option to disable focus animations in ArrayGrid nodes</strong>](doc:arraygrid) — Developers can use the new <strong>ArrayGrid.skipFocusAnimations</strong> field to completely disable animations on ArrayGrid child nodes such as the <strong>MarkupGrid</strong> and <strong>MarkupList</strong> components. For apps implementing custom focus logic, this field can be used to eliminate the reported ~300ms period in which no component has focus after a keypress.</li>
</ul>
<ul>
<li>[<strong>Device attestation token</strong>](doc:channelstore#getdeviceattestationtoken) — Developers can use the new [<strong>ChannelStore</strong> <strong>getDeviceAttestationToken</strong> command](doc:channelstore#getdeviceattestationtoken) to generate a signed JSON web token (JWT) in the Roku cloud and return it to the application. This token can then be passed to the publisher&#39;s web services to verify that messages originated from genuine Roku devices. A [<strong>getDeviceAttestation()</strong> function](doc:ifchannelstore#getdeviceattestationtokennonce-as-string-as-object) has also been added to <strong>roChannelStore</strong> component. This token is meant to replace the functionality previously provided by the device client certificates.</li>
</ul>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<ul>
<li>[<strong>Continue statements</strong>](doc:program-statements#continue-for--continue-while) — Developers can now insert <code>continue</code> statements in <code>for</code> and <code>while</code> loops. This terminates the execution of the statements in the current iteration of the loop, and then continues execution of the loop with the next iteration.</li>
</ul>
<h4 id="tools">Tools</h4>
<ul>
<li>[<strong>Roku Resource Monitor</strong>](doc:resource-monitor) — The Roku Resource Monitor tracks and visualizes the system memory, graphics memory, CPU, and SceneGraph nodes used by an app. This enables developers to test the different screens in their app and identify consumption trends and patterns. This new developer tool is intended to be used in conjunction with the BrightScript Profiler to improve app performance. For example, if the Roku Resource Monitor consistently shows increased consumption with a specific action on a screen, developers can use the BrightScript Profiler to further drill down into the application and pinpoint where to optimize the code.</li>
</ul>
<ul>
<li>[<strong>New ECP query commands for performance monitoring and debugging apps</strong>](doc:external-control-api#general-ecp-commands) — Developers can use the following new ECP query commands to monitor the performance of their apps and debug the apps: <strong>query/sgrendezvous</strong> and <strong>query/registry</strong>. These queries return rendezvous events and the entries in the device registry, respectively. Developers can leverage these commands, which were previously only available via the debug console, in their tools and web services.</li>
</ul>
<ul>
<li><p>[<strong>Enhanced ECP query commands</strong>](doc:external-control-api#general-ecp-commands) — The following ECP commands have been improved for the Roku OS 11.5 release:</p>
<ul>
<li><p><strong>query/r2d2-bitmaps</strong>. This command now returns the file name for any asset in texture memory that cannot be attributed directly to a plug-in. In Roku OS 11.0, assets that could not be associated with a plug-in were omitted from the response.</p>
</li>
<li><p><strong>query/sgnodes</strong>. This command can now be called with a specific <strong>channel-id</strong>, which enables it to be used on background apps. The response now includes a <strong>node-count</strong> field.</p>
</li>
</ul>
</li>
</ul>
<ul>
<li>[<strong>BrightScript debug protocol updates</strong>](doc:socket-based-debugger) — The BrightScript debug protocol (version 3.1) now includes events for compile errors in the main application and in component libraries, conditional breakpoints, and improved breakpoint support for component libraries.</li>
</ul>
<ul>
<li>[<strong>Improved app compression from</strong> <strong>Development Application Installer</strong>](doc:packaging-channels#packaging-with-the-development-application-installer) — The default compression algorithm in the Development Application installer has been changed to <strong>squashfs (zstd)</strong> from <strong>gzip</strong> for sideloaded apps. In addition, the conversion option <strong>squashfs (gzip)</strong> has been changed to <strong>gzip</strong>. This generally reduces the package file size.</li>
</ul>
<h4 id="architecture">Architecture</h4>
<ul>
<li><strong>Fonts</strong> — The system fonts have been updated to provide better support for monospaced numerals. As a result, the width of characters may have changed slightly. Developers should make sure to leave space for text to expand or collapse some percentage in their app UI. Developers should not rely on exact font metrics to avoid Label nodes from being truncated or multi-line labels having varied line wrapping.</li>
</ul>
<h4 id="deprecated-sunset-apis">Deprecated/Sunset APIs</h4>
<ul>
<li><p>[<strong>SDK1 visual screen components sunset</strong>](doc:deprecated-apis#deprecated-components-january-1-2018) — The <a href="https://blog.roku.com/developer/legacy-sdk">SDK1 visual screen components that were deprecated in 2017</a> have been completely removed from the Roku OS. As a result, apps that still had these <a href="https://roku-ent.readme.io/dev/docs/deprecated-apis#deprecated-components-january-1-2018">sunset components</a> as of August 22nd were disabled and removed from the Streaming Store. These apps can no longer be installed or launched unless they were migrated to SDK2 (SceneGraph).</p>
</li>
<li><p><strong>[roUrlTransfer.enableFreshConnection()](doc:deprecated-apis#rourltransferenablefreshconnection)</strong> — The Roku OS no longer supports the [<strong>roUrlTransfer.enableFreshConnection()</strong> function](doc:ifurltransfer#enablefreshconnectionenable-as-boolean-as-boolean). Apps should always reuse connections because it is more efficient (new connections impact app performance by increasing latency and consuming more CPU).</p>
</li>
</ul>
<h2 id="roku-os-11-0">Roku OS 11.0</h2>
<p><strong>Initial rollout date</strong>: March 22, 2022</p>
<p>Roku OS 11.0 features new SceneGraph standard dialog framework components for adding multi-style text, images/notes, and button and checkbox icons to custom dialogs; BrightScript optional chaining operators for efficiently accessing possible undefined values; and ChannelStore APIs for displaying a customer&#39;s information in the Request for Information (RFI) sign-up screen. Developers of authenticated free and advertising-based video on demand (AVOD) apps can now display the RFI screen without having to first enroll in the Roku Partner Payouts Program.</p>
<p>In addition, Roku OS 11.0 improves trick play for live linear streams, and it includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.</p>
<p>For tools, this release adds new External Control Protocol (ECP) query commands for debugging apps that developers can incorporate in their web services and then leverage in their test suite, and minor updates to the BrightScript debug protocol.</p>
<p>Below is a list of key developer-facing Roku OS 11.0 updates:</p>
<h4 id="scenegraph-apis">SceneGraph APIs</h4>
<ul>
<li><p><strong>New standard dialog framework nodes</strong> — Roku&#39;s Standard Dialog Framework includes the following new nodes that enable developers to decorate or annotate custom dialogs and highlight the grouping of radio button and checkbox options in them:</p>
<ul>
<li><p><strong>[StdDlgMultiStyleTextItem](doc:std-dlg-multi-style-text-item)</strong>. A line of text with multiple styles in the content area of a custom dialog. The text may include, for example, plain and bold characters, different fonts, multiple colors, and/or emojis.</p>
</li>
<li><p>[<strong>StdDlgSideCardArea</strong>](doc:std-dlg-side-card-area).  A freeform area on the right or left side of a custom dialog that developers can use to display images or notes.</p>
</li>
<li><p><strong>[StdDlgActionCardItem](doc:std-dlg-action-card-item)</strong>. Highlighting for the child items in the content area of a custom dialog. This node enables developers to add a &quot;more info&quot; arrow icon, radio button icon, or check box icon to the items in the content area.</p>
</li>
<li><p>[<strong>StdDlgItemGroup</strong>](doc:std-dlg-item-group). Visual grouping for a set of StdDlgAreaBase child nodes in a custom dialog. Developers can use this node to reduce the vertical spacing between the StdDlgItemBase child nodes in the dialog.</p>
</li>
</ul>
</li>
<li><p><strong>[Option for Label and TextEditBox nodes to display the end of overflowing text](doc:label#fields)</strong> — The [<strong>Label</strong>](doc:label#fields) and <a href="docs/references/scenegraph/widget-nodes/texteditbox"><strong>TextEditBox</strong></a> nodes now include a <strong>leadingEllipsis</strong> flag that enables developers to specify whether to show the end or beginning of text that overflows its available width. When this flag is set to true, the end of the text is shown. For example, &quot;the quick brown fox jumps over the lazy dog&quot; would be truncated to &quot;...jumps over the lazy dog&quot;. When the flag is false, the start of the text is shown (&quot;the quick brown fox jumps...&quot;).</p>
</li>
</ul>
<ul>
<li>[<strong>Voice keyboard enhancements</strong>](doc:dynamic-keyboard-base#fields) — The SceneGraph [<strong>DynamicKeyboardBase</strong>](doc:dynamic-keyboard-base#fields)) node class now includes a <strong>hideTextBox</strong> flag that enables developers to hide a voice keyboard&#39;s VoiceTextEditBox.</li>
</ul>
<h4 id="brightscript-apis">BrightScript APIs</h4>
<ul>
<li>[<strong>BrightScript optional chaining operators</strong>](doc:expressions-variables-types#optional-chaining-operators) — Developers can use optional chaining operators, &quot;?.&quot;, &quot;?@&quot;, &quot;?[&quot;, and &quot;?(&quot;, in their BrightScript code to access possibly invalid values. This enables developers to execute more concise, higher-performing code. The optional chaining operators are used to read the value of a property nested within a chain of connected objects without having to first check whether each reference in the chain does not return the BrightScript value of &quot;invalid&quot;. If testing a reference results in &quot;invalid&quot;, the expression short-circuits and returns &quot;invalid&quot;.</li>
</ul>
<ul>
<li>[<strong>Tagging of unused variables</strong>](doc:expressions-variables-types#types) — Developers can now explicitly mark variables as unused in their BrightScript code by prepending an underscore to the value (for example, sub myTask(<em>_x</em>)). This enables developers to avoid compilation errors when the unused variable has a valid purpose.</li>
</ul>
<h4 id="roku-pay-apis">Roku Pay APIs</h4>
<ul>
<li>[<strong>RFI sign-up screen option to display requested customer information</strong>](doc:channelstore#requesteduserdatainfo) — The [<strong>ChannelStore.requestedUserDataInfo</strong>](doc:channelstore#requesteduserdatainfo) associative array now includes an optional <strong>forceShowData</strong> flag. When this flag is enabled, the RFI sign-up screen displays the actual customer information values to be shared with the app instead of just the types of information. For example, if the email address, first name, and last name are requested for sign-ups and the <strong>forceShowData</strong> flag is enabled, the &quot;Let&#39;s create your account&quot; RFI screen explicitly lists the customer&#39;s actual email address and name in bold text (for example, <strong>Bob</strong> <strong>Smith</strong>, <strong>bsmith@roku.com</strong>). If this flag is disabled and the customer is in the United States, the RFI screen displays &quot;share your name and email address&quot;.</li>
</ul>
<ul>
<li><strong>Direct access to RFI screen for authenticated free and AVOD apps</strong> — Developers of authenticated free and AVOD apps can now use the ChannelStore [<strong>getUserData</strong>](doc:channelstore#getuserdata) and [<strong>getPartialUserData</strong>](doc:ifchannelstore#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object) APIs to display an RFI screen when customers sign up or sign in to the app—without having to first enroll in the [Roku Partner Payouts Program](doc:partner-payouts). In this case, the RFI sign-up screen can request or display the customer&#39;s email address, phone number, and zip code; the RFI sign-in screen can request or display the customer&#39;s email address and phone number.</li>
</ul>
<h4 id="media-drm-and-content-metadata-updates">Media, DRM, and content metadata updates</h4>
<ul>
<li><p><strong>Improved trick play for live linear streams</strong> — The [<strong>Video</strong>](doc:video) node includes the following new fields to help developers improve the user experience for trick play during live linear streams:</p>
<ul>
<li><p>A [<strong>trickplay.liveFilledBarBlendColor</strong>](doc:video#playback-fields) field that lets developers specify the color for the trick play progress bar during live linear streams. This color is blended with the <strong>filledBarImageUri</strong>.</p>
</li>
<li><p>An [<strong>enableLiveAvailabilityWindow</strong>](doc:video#trickplay-fields) field that lets developers enable scrubbing of the trick play bar during the availability window of live linear streams.</p>
</li>
<li><p>An [<strong>enableThumbnailTilesDuringLive</strong>](doc:video#trickplay-fields) flag that lets developers specify whether the <strong>Video</strong> node should report the thumbnail tiles in the <strong>thumbnailTiles</strong> field for live linear streams (the <strong>thumbnailTiles</strong> field will be added to the Video node documentation as part of the Roku OS 11.0 release).</p>
</li>
</ul>
</li>
</ul>
<ul>
<li>[<strong>Video decoder statistics</strong>](doc:video#playback-fields) — The [<strong>Video</strong>](doc:video) node includes a new <strong>decoderStats</strong> field that provides developers with additional video playback information such as the number of frames rendered, repeated, and dropped, and the number of bit stream errors since playback started. Also included is a new <strong>enableDecoderStats</strong> field that allows the <strong>decoderStats</strong> field to receive updates.</li>
</ul>
<ul>
<li>[<strong>Muting of audio during video playback</strong>](doc:ifvideoplayer#setenableaudioenable-as-boolean-as-void) — The [<strong>roVideoPlayer</strong>](doc:ifvideoplayer#setenableaudioenable-as-boolean-as-void) component now includes a <strong>SetEnableAudio()</strong> function that enables developers to mute the audio during video playback. This is useful, for example, for implementing a video preview feature in an app.</li>
</ul>
<ul>
<li>[<strong>Check whether the TV screen is on/off</strong>](doc:ifdeviceinfo#getdisplayproperties-as-object) — The [<strong>ifDeviceInfo.GetDisplayProperties()</strong>](doc:ifdeviceinfo#getdisplayproperties-as-object) function now returns a new <strong>visible</strong> field that enables developers to check whether the TV screen is on/off. Customers can turn off their TV display while streaming an app in order to continue listening to the audio (for example, when playing music videos, conferences, or podcasts).  </li>
</ul>
<ul>
<li><strong>ttp:timebase support added for DASH/TTML</strong> — The Roku OS now supports ttp:timebase for activating subtitles.</li>
</ul>
<h4 id="tools">Tools</h4>
<ul>
<li>[<strong>ECP query commands for debugging channels</strong>](doc:external-control-api#general-ecp-commands) — Developers can use the following new ECP query commands to help debug their apps: [<strong>query/chanperf</strong>](doc:external-control-api#querychanperf-example), [<strong>query/r2d2-bitmaps</strong>](doc:external-control-api#queryr2d2-bitmaps-example), <strong>and [query/sgnodes/[all | root | nodes?node-id=*nodeId*]](doc:external-control-api#querysgnodesall-example)</strong>. Developers can leverage these debugging commands, which were previously only available via the debug console, in their web services.</li>
</ul>
<ul>
<li>[<strong>BrightScript debug protocol updates</strong>](doc:socket-based-debugger#debugging-target-startup-sequence) — The BrightScript debug protocol includes the following new features: a <strong>platform_revision_timestamp</strong> field for the initial handshake, a <strong>packet_length</strong> field that is included with all packets from the debugger, and runtime errors for the [EXECUTE debug response format](doc:socket-based-debugger#debugger-response-format).</li>
</ul>
<h2 id="roku-os-10-5">Roku OS 10.5</h2>
<p><strong>Initial rollout date</strong>: September 20, 2021</p>
<p>Roku OS 10.5 includes a SceneGraph component for creating lines of text with different fonts, colors, and sizes; a SceneGraph component for displaying help with app settings; and ChannelStore APIs for checking whether a subscription should be placed on hold because it is in recovery.</p>
<p>This release includes several enhancements to Roku Voice. For apps that include a profile selection screen, Roku Voice can be used to ask the viewer to select a profile and handle a voice command with the name or position of the profile. Voice keyboards include improved dictation that lets developers determine when a user has finished talking and specify which characters the keyboard accepts or blocks. The individual keys on voice keyboards can now be enabled only once the user has entered complete information (for example, all five digits in a zip code).  </p>
<p>In addition, this release includes features that enhance the performance of media playback and Roku devices in general and expand platform support for industry standards covering content metadata.</p>
<p>For tools, this release adds more detailed &quot;type mismatch&quot; reporting to the BrightScript Debug Console and an <strong>Execute</strong> command to the BrightScript Debug Protocol that lets developers execute code in a specific stack frame and therefore evaluate and run expressions.</p>
<p>Below is a list of key developer-facing Roku OS 10.5 updates:</p>
<h4 id="roku-os-apis">Roku OS APIs</h4>
<ul>
<li><p>[<strong>MultiStyleLabel SceneGraph component for styling lines of text with different fonts, colors, sizes</strong>](doc:multi-style-label) — Developers can use the new <strong>MultiStyleLabel</strong> node class to create labels with multiple fonts, colors, and sizes. This enables developers to, for example, bold and/or color important text within a label and display emojis.</p>
<blockquote>
<p>As part of the Roku OS 10.5 release, a LabelBase node has been introduced to provide a single base class for the [Label](doc:label) node and the MultiStyleLabel node. The Label node now inherits most of its functionality from LabelBase node class. Developers, however, do not need to update their code to account for this refactoring.</p>
</blockquote>
</li>
</ul>
<ul>
<li>[<strong>InfoPane SceneGraph component for displaying context-sensitive help with app settings</strong>](doc:info-pane) — Developers can use the new <strong>InfoPane</strong> node class to display an opaque, white-bordered, rounded rectangular label with text providing help for a specific setting. This component can be used to help customers successfully configure settings related to their account profile, closed captioning, parental controls, and so on.</li>
</ul>
<ul>
<li>[<strong>RowList.currFocusColumn field for implementing horizontal pagination</strong>](doc:rowlist#fields) — A new <strong>currFocusColumn</strong> field has been added to the <strong>RowList</strong> node to indicate which column of the currently-focused row in a RowList component currently has focus. Developers can use this field to implement a horizontal pagination mechanism for the currently focused row.</li>
</ul>
<ul>
<li>[<strong>Elliptic-curve cryptography for generating digital signatures</strong>](doc:rodsa) — Developers can use the new <strong>roDSA</strong> component, which provides support for the ECDSA and EdDSA (with Ed25519 form) digital signature algorithms, to provide cryptographically signed evidence that an ad request originated from an actual Roku device.</li>
</ul>
<h4 id="roku-pay-apis">Roku Pay APIs</h4>
<ul>
<li>[<strong>ChannelStore subscription recovery</strong>](doc:channelstore#getpurchases) (also available in Roku OS 10.0) — Developers can now directly use the ChannelStore API to check whether a subscription is in recovery. When a subscritpion is in recovery, Roku Pay notifies the customer once a day for multiple consecutive days (typically three) to update their method of payment in order to renew the subscription, and it attempts to charge the customer&#39;s method of payment to ensure collection of payment and continuation of service. The [<strong>ChannelStore.getAllPurchases</strong>](doc:channelstore#getallpurchases) and [<strong>getPurchases</strong>](doc:channelstore#getpurchases) commands now return a <strong>status</strong> field and an <strong>inDunning</strong> flag to determine whether a subscription is in the dunning state and therefore should be placed on hold. Previously, developers had to pass the <strong>transactionId</strong> returned by the <strong>getAllPurchases</strong> and <strong>getPurchases</strong> commands into a Roku Pay <strong>validate-transaction</strong> API call to determine whether a subscription was in recovery.</li>
</ul>
<ul>
<li>[<strong>Instant Signup purchase flag for Roku Pay APIs</strong>](doc:channelstore#getpurchases) (also available in Roku OS 10.0) — Developers can now identify whether Roku Pay subscription purchases originated from Instant Signup. The ChannelStore node [<strong>getPurchases</strong>](doc:channelstore#getpurchases) and [<strong>getAllPurchases</strong>](doc:channelstore#getallpurchases)) commands, [<strong>roChannelStore.getPurchases</strong>](doc:ifchannelstore#getpurchases-as-void) function, [Roku Pay <strong>validate-transaction</strong> web service](doc:roku-web-service#validate-transaction), and [Roku Pay <strong>Sale</strong> push notification](doc:push-notifications#sale) all include a new <strong>purchaseChannel</strong> field that is set to &quot;web&quot; and a <strong>purchaseContext</strong> field that is set to &quot;isu&quot; to indicate that a purchase was made via Instant Signup (for on-device purchases, these fields would be set to &quot;device&quot; and &quot;iap&quot;, respectively).</li>
</ul>
<h4 id="roku-voice-apis">Roku Voice APIs</h4>
<ul>
<li><p>[<strong>Voice support for profile selection screens</strong>](doc:voice-profile-selector) — Apps with a profile selection screen can audibly and visually prompt the viewer to select a user profile and then handle a voice request with the name or position of the selected profile. This entails integrating the following APIs included in this release:</p>
<ul>
<li>The [<strong>roAppManager.StartVoiceActionSelectionRequest()</strong>](doc:ifappmanager#startvoiceactionselectionrequest-as-void) function can be called upon app launch to trigger a voice request for the viewer to select a user profile on devices that are paired with a hands-free Roku Voice remote control.</li>
<li>The [<strong>roAppManager.SetVoiceActionStrings()</strong>](doc:ifappmanager#setvoiceactionstringsactions-as-object-as-void) function can be used by the app to register a list of text strings, such as user profile names, that can be matched to voice requests. When the name uttered by the user matches the registered text string, the matched text string is provided to the app via an roInput voice command handler (via a new <strong>text</strong> field included in the associative array returned by the [<strong>roInputEvent.GetInfo()</strong>](doc:roinputevent#getinfo-as-object) method).</li>
<li>The [roInput voice command handler](doc:ifinput#eventresponseroassociativearray-aa-as-boolean) has also been enhanced to support profile selection via ordinal numbers. For example, when a user says &quot;first&quot;, &quot;number one&quot;, &quot;pick the first&quot;, &quot;select the first&quot;, &quot;choose the first&quot;, and so on to select a user profile within a row, the app will receive a value of &quot;1&quot; (via a new <strong>ordinal</strong> field included in the associative array returned by the [<strong>roInputEvent.GetInfo()</strong>](doc:roinputevent#getinfo-as-object) method) that can be used to select the corresponding profile. Ordinal numbers between 1–6 are supported.</li>
</ul>
</li>
<li><p>[<strong>Device paired with hands-free remote flag</strong>](doc:ifdeviceinfo#hasfeaturefeature-as-string-as-boolean) — Developers can call the roDeviceInfo.HasFeature(&quot;handsfree_voice&quot;) function to check whether a Roku device is paired with a hands-free Roku remote control such as the Roku Voice Remote Pro. Developers can call this function before calling the [<strong>roAppManager.StartVoiceActionSelectionRequest()</strong>](doc:ifappmanager#startvoiceactionselectionrequest-as-void) function and having Roku Voice prompt the viewer to select a user profile. In addition, this function enables developers to tailor the in-app user experience for viewers with hands-free Roku remote controls (for example, displaying voice tips and tricks in the UI).</p>
</li>
</ul>
<ul>
<li>[<strong>Enhanced dictation for voice keyboards</strong>](doc:voice-text-edit-box) — Developers can use the new <strong>isDictating</strong> field of the [VoiceTextEditBox node](doc:voice-text-edit-box) to check whether the user is currently dictating to the keyboard. This enables developers, for example, to determine whether users are done dictating and therefore can advance to the next step/screen in the UI. In addition, developers can use the new <strong>voiceInputRegexFilter</strong> field of the <strong>VoiceTextEditBox</strong> node to specify which characters may or may not be entered on the keyboard via dictation. For example, setting this field to &quot;^[A-Za-z0-9_-]*$&quot; prevents any special characters from being entered.</li>
</ul>
<ul>
<li>[<strong>Disabling and enabling of individual keys on voice keyboards</strong>](doc:dynamic-key-grid) — Developers can use the new <strong>disableKey</strong> and <strong>enableKey</strong> fields of the [DynamicKeyGrid node](doc:dynamic-key-grid) to control the availability of specific keys in the node&#39;s underlying [Key Definition File](doc:key-definition-file). For example, if the user is entering their zip code in an address keyboard, the &quot;Next&quot; key could be disabled (m.keyboard.keyGrid.disableKey = &quot;Next&quot;) until all five digits have been entered. Once all five digits have been entered, the &quot;Next&quot; key could be enabled (m.keyboard.keyGrid.enableKey = &quot;Next&quot;). This eliminates the need to use [multiple grid modes in a Key Definition File](doc:key-definition-file#grid) to provide this functionality.</li>
</ul>
<ul>
<li>[<strong>New Voice control manifest flags</strong>](doc:channel-manifest) — Developers can now declare whether their app supports voice controls (<strong>supports_voice_roinput=1</strong>) and whether it displays a hands-free voice profile selection screen upon launch (<strong>voice_action_launch_screen=1</strong>).</li>
</ul>
<h4 id="media-drm-and-content-metadata-updates">Media, DRM, and content metadata updates</h4>
<ul>
<li>[<strong>CDN switch event notifications</strong>](doc:video#cdn-fields) — The [SceneGraph Video node](doc:video#cdn-fields) includes a new <strong>cdnSwitch</strong> field that enables developers to receive event-based notifications when the CDN is switched during content playback.</li>
</ul>
<ul>
<li>[<strong>DRM error code now provided when a video player error occurs</strong>](doc:video#playback-fields) — The [SceneGraph Video node&#39;s <strong>error_info</strong> associative array](doc:video#playback-fields) includes a new <strong>drmerrcode</strong> field that contains any error code returned by the DRM system when a video player error occurs.</li>
</ul>
<ul>
<li>[<strong>Randomizing of Widevine DRM license renewal time</strong>](doc:content-metadata#digital-rights-management-drm-control-attributes) — A new <strong>lic_acq_window</strong> field has been added to the [Content metadata DRM control attributes](doc:content-metadata#digital-rights-management-drm-control-attributes) to help developers prevent their app&#39;s Widevine license server from being flooded with simultaneous requests. This <strong>lic_acq_window</strong> field is used to set the maximum amount of time (in milliseconds) that an app waits before rotating its Widevine DRM keys. The app can generate a random wait time between 0 and the value specified in the <strong>lic_acq_window</strong> field, and use the random wait time to instruct when the Video node should make its next Widevine license request.</li>
</ul>
<ul>
<li>The [<strong>Video.timedMetaData</strong>](doc:video#trickplay-fields) field can now be used to read ID3 tags embedded in an audio stream.</li>
</ul>
<ul>
<li>[<strong>New hdrMode field for getting the HDR playback state of content</strong>](doc:rovideoplayerevent#isstreamsegmentinfo-as-boolean) — The [roVideoPlayerEvent.isStreamSegmentInfo](doc:rovideoplayerevent#isstreamsegmentinfo-as-boolean) function now provides the HDR playback state. An <strong>hdrMode</strong> field is now returned by the event&#39;s <strong>GetInfo()</strong> method. This field indicates whether playback is in SDR, HDR10, Dolby Vision, HLG10, HDR10+, or advanced HDR.</li>
</ul>
<ul>
<li>[<strong>Initial segment format for multi-period server-stitched DASH manifest</strong>](doc:dash-if#updates) — Support for DASH-IF in the Roku OS has been expanded to include the initial segment format for server-stitched manifests formatted with multi-periods.</li>
</ul>
<ul>
<li>[<strong>SegmentTimeline for calculating time/duration in a DASH stream</strong>](doc:dash-if#updates) — Support for DASH-IF in the Roku OS now includes using the SegmentTimeline to precisely identify segment availability. This supports the in-progress playback of content while it is being recorded. Specifically, the Roku OS DASH implementation now supports:</li>
</ul>
<ul>
<li>Initialization element with sourceURL attribute in under SegmentBase element.</li>
<li>RepresentationIndex element.</li>
<li>Index segments in a different file than the media segments.</li>
<li>Index segments from multiple representations in the same file.</li>
<li>Media segments from multiple representations in the same file.</li>
<li>Non-standard AudioChannelConfiguration schema: &quot;urn:dolby:dash:audio_channel_configuration:2011&quot;.</li>
</ul>
<h4 id="architecture">Architecture</h4>
<ul>
<li>[<strong>New &quot;screensaver&quot; and &quot;homelist&quot; ad source parameters</strong>](doc:dev-environment#source-parameter) — The Roku OS now includes &quot;ad:screensaver&quot; and &quot;ad:homelist&quot; source parameters, which enable developers to attribute app launches to these specific ad types. Previously, a single &quot;ad&quot; source parameter was used for all the different ad types (homelist [mini], screensaver, and home screen banner ads). The &quot;ad&quot; source parameter now denotes an app launch from a home screen banner ad only.</li>
</ul>
<ul>
<li>[<strong>Memory exceeded lastExitOrTerminationReasons parameters</strong>](doc:dev-environment#lastexitorterminationreason-parameter) — Developers can now check whether an app was exited because it exceeded per-channel memory limits while running in the foreground (EXIT_CHANNEL_MEM_LIMIT_FG) or background (EXIT_CHANNEL_MEM_LIMIT_BG).</li>
</ul>
<ul>
<li>[<strong>Memory usage event notifications</strong>](doc:roappmemorymonitor) — Developers can now receive an event notification if their app is approaching the per-app memory usage threshold. A new [<strong>roAppMemoryMonitor</strong>](doc:roappmemorymonitor) component has been added to support this feature. It has an [<strong>EnableMemoryWarningEvent()</strong>](doc:ifappmemorymonitor#enablememorywarningeventenable-as-boolean-as-boolean) function that notifies an app when it has reached 80% of its memory usage limit, and a [<strong>GetMemoryLimitPercent()</strong>](doc:ifappmemorymonitor#getmemorylimitpercent-as-int) function returns the memory limit for the app. Developers can then use the new [<strong>roAppMemoryMonitorEvent</strong>](doc:roappmemorynotificationevent) to get the percentage of the allocated per-app memory that has been used.</li>
</ul>
<h4 id="tools">Tools</h4>
<ul>
<li>[<strong>Detailed &quot;type mismatch&quot; error reporting in BrightScript debug console</strong>](doc:debugging-channels#accessing-the-debug-console) — The BrightScript debug console now provides more specific reporting of &quot;type mismatch&quot; errors to help developers identify and resolve these types of bugs in their code. For example, attempting to evaluate whether an integer value equals a string in an expression (for example, if 12 = &quot;number&quot;) now results in the following error message: <code>Type mismatch. Operator &quot;=&quot; cannot be applied to &quot;Integer&quot; and &quot;String&quot;</code>.</li>
</ul>
<ul>
<li>[<strong>Execute debugging command added to BrightScript debug protocol</strong>](doc:socket-based-debugger#debugging-commands) — The <strong>Execute</strong> debugging command (command_code = 10) enables developers to execute code in a specific stack frame and therefore evaluate and run expressions.</li>
</ul>
<h4 id="deprecations">Deprecations</h4>
<ul>
<li>[<strong>wma and wmapro</strong>](doc:deprecated-apis#audio-node-windows-media-audio). The Roku platform no longer supports the Windows Media Audio (<strong>wma</strong>) and <strong>WMApro</strong> audio formats. See the [Audio node](doc:audio) for the current list of audio formats supported by the Roku platform.</li>
</ul>
<h2 id="roku-os-10-0">Roku OS 10.0</h2>
<p><strong>Initial rollout date</strong>: April 13, 2021</p>
<p>Roku OS 10.0 adds a new [<strong>chanperf</strong> command](doc:debugging-channels#scenegraph-debug-server-port-8080-commands) to the debug console that displays the memory and CPU usage of a sideloaded app. This provides developers with a quick, convenient way to find performance issues in different parts of their application.</p>
<p>In addition, developers can now upgrade the keyboards, mini keyboards, PIN pads in their apps to the new <a href="">dynamic voice-enabled keyboards</a>, which allow customers to use their voice to enter information. This release also makes Roku&#39;s <a href="">standard dialog framework</a> available to developers, which provides enhanced pre-built dialogs and the flexibility to design custom dialogs.</p>
<p>Other highlights include an enhancement to the [ChannelStore API](doc:channelstore#requesteduserdatainfo) that optimizes the text displayed in the [Request for Information (RFI) screen](doc:channel-store#getuserdata) based on whether the customer is signing up for a subscription or signing in to their account, updates to the [ChannelStore API](doc:channelstore#requesteduserdata) for getting additional customer information such as their birth, gender, and location (country, state, zip code), and new functions for checking the internet connectivity status on a Roku device.</p>
<p>This release also includes features that enhance the performance of media playback, app installation, and Roku devices in general, and it provides expanded platform support for industry standards covering content and meta-data, as well as additional and improved facilities to expedite the monitoring of app performance and memory usage.</p>
<p>Below is a list of key developer-facing Roku OS 10.0 updates:</p>
<h4 id="api">API</h4>
<ul>
<li><strong>[Request for Information (RFI) screen enhanced with optimized displays for sign-ins and sign-ups](doc:channelstore#requesteduserdatainfo)</strong> — Developers can now specify whether the Roku Pay RFI screen displays sign-up or sign-in-related information. For example, if the RFI screen is configured for sign-ins, it displays a &quot;Sign in&quot; title and lists only the customer&#39;s email address and/or phone number. Apps using SceneGraph ChannelStore node can use the <strong>[requestedUserDataInfo](doc:channelstore#requesteduserdatainfo)</strong> field when sending the [<strong>getUserData</strong> command](doc:channelstore#getuserdata) to configure the RFI screen for sign-ins; apps using the roChannelStore component can set the new “requestInfo” parameter in the [<strong>GetPartialUserData()</strong> method](doc:ifchannelstore#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object). No additional steps are required for displaying sign-up information on the RFI screen.</li>
</ul>
<ul>
<li><strong>[New &quot;birth&quot; and &quot;gender&quot; return values added to ChannelStore](doc:channelstore#requesteduserdata)</strong> — The <strong>[ChannelStore.requestedUserData](doc:channelstore#requesteduserdata)</strong> field now lets developers request the birthdate (MM/YY) and gender associated with the customer&#39;s Roku account, and return these values in the <strong>[userData](doc:channelstore#userdata)</strong> field. Similarly, the roChannelStore <strong>[GetUserData()](doc:ifchannelstore#getuserdata-as-object) and [GetPartialUserData()](doc:ifchannelstore#getpartialuserdataproperties-as-string-requestinfo-as-object-as-object)</strong> methods can now be used to retrieve the customer&#39;s birthdate and gender.</li>
</ul>
<ul>
<li><strong>[roChannelStore.getUserRegionData() method for getting customer&#39;s location](doc:ifchannelstore#getuserregiondata-as-object)</strong> — The <strong>[roChannelStore.getUserRegionData()](doc:ifchannelstore#getuserregiondata-as-object)</strong> method can be used to retrieve the state, zip code, and country associated with the customer&#39;s Roku account. (Also available in Roku OS 9.4)</li>
</ul>
<ul>
<li><strong>[New &quot;error.generic&quot; status added to roInput.EventResponse() method for unhandled voice commands](doc:ifinput#eventresponseroassociativearray-aa-as-boolean)</strong>. The [roInput.EventResponse()](doc:ifinput#eventresponseroassociativearray-aa-as-boolean) method now takes an &quot;error.generic&quot; status that can be used when an app does not have any media to fulfill a voice command (for example, if the app receives a &quot;forward&quot; or &quot;next&quot; command, but there is no content to fast forward or play next, respectively). Passing this status displays &quot;That is not available&quot; in the Roku Voice heads-up display.</li>
</ul>
<ul>
<li><strong>[roDeviceInfo internet connectivity status methods](doc:ifdeviceinfo#enableinternetstatuseventenable-as-boolean-as-boolean)</strong> — <strong>[EnableInternetStatusEvent()](doc:ifdeviceinfo#enableinternetstatuseventenable-as-boolean-as-boolean)</strong>, <strong>[GetInternetStatus()](doc:ifdeviceinfo#getinternetstatus-as-boolean)</strong>, and <strong>[ForceInternetStatusCheck()](doc:ifdeviceinfo#forceinternetstatuscheck-as-boolean)</strong> can all be used to retrieve the connectivity status of the device.</li>
</ul>
<ul>
<li>[<strong>The time reported by ifDateTime.toISOString() now resolves to milliseconds</strong>](doc:ifdatetime#toisostring-as-string)<strong>.</strong> (Also available in Roku OS 9.4)</li>
</ul>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li><strong>Media Player performance enhancements</strong> — Video start times have been shortened, re-buffering reduced, and picture quality improved.</li>
</ul>
<ul>
<li><strong>Roku SceneGraph (RSG) performance enhancements</strong> — Various RSG data structures have been optimized, and off-screen content nodes are now being managed on an app&#39;s behalf. This reduces app memory consumption, allowing internal cache mechanisms to be more effective in improving performance.</li>
</ul>
<ul>
<li><strong>[Support for UTCTiming in DASH](doc:dash-if#utctiming)</strong> — The UTCTiming element is used in DASH manifests to allow the clocks employed by the server and player to remain in close synchronization. Without this, when there is a timing discrepancy of even as little as 100ms between the local and server clocks live video play can freeze, and audio and video can fall out of sync, as the player requests unavailable, out-of-window segments.</li>
</ul>
<ul>
<li>[<strong>ForwardDashQueryStringParams content metadata field</strong>](doc:content-metadata#playback-configuration-attributes) — This field enables apps to forward DASH manifest query parameters to segment URLS.</li>
</ul>
<ul>
<li><strong>[Video node seekMode field allows apps to specify maximum available seek accuracy](doc:video#trickplay-fields).</strong> The app can set this field to &quot;accurate,&quot; in order to achieve accuracy to the exact requested time, if supported by the player; otherwise seek is accurate to the nearest sync frame. (Also available in Roku OS 9.4)</li>
</ul>
<ul>
<li><strong>[Seek-to-pause is now supported through Video node enhancements](doc:video#trickplay-fields).</strong> The bufferingStatus field now includes boolean prebufferDone and time element actualStart, which are used in conjunction with seekMode and playStart to facilitate pausing at a particular point, and resuming playback from that point. (Also available in Roku OS 9.4)</li>
</ul>
<ul>
<li><strong>[SceneGraph Video node PlayStartInfo field now contains additional timestamp information](doc:video#playback-fields)</strong> for start of manifest and DRM loading, DRM license acquisition, and pre-buffering, which supplements already available duration information for those processes.</li>
</ul>
<ul>
<li><strong>[New SceneGraph Animation node field willBeSkipped](doc:animation#fields)</strong>. This field indicates whether an animation runs or jumps to the end (effectively skipping the animation and rendering it in its final state).</li>
</ul>
<ul>
<li><strong>[DRM is no longer required for AES-128 key exchange using HLS and DASH](doc:content-protection).</strong></li>
</ul>
<ul>
<li><strong>[The HLS ASSOC-LANGUAGE audio rendition attribute is now supported](doc:hls-and-dash#assoc-language-audio-rendition-attribute).</strong> This <strong>optional</strong> attribute is used, for example, to specify that a particular rendition&#39;s audio, provided in a given spoken language dialect (e.g., Cantonese/&quot;yue&quot;), is represented in forced subtitles by a different but associated language (e.g., Traditional Chinese/&quot;zh_HANT&quot;).</li>
</ul>
<ul>
<li><strong>The DASH Role and Accessibility attributes may now be used in Adaptation Sets to make various audio tracks available for viewer selection.</strong> This brings Roku OS into closer conformance with the DASH-IF specification.</li>
</ul>
<ul>
<li><strong>[UI graphics resolution available through External Control Protocol (ECP)](doc:external-control-api#general-ecp-commands)</strong> —The [<code>query/device-info</code> ECP command](doc:external-control-api#querydevice-info-example) now provides a UI-resolution field. (Also available in Roku OS 9.4)</li>
</ul>
<h4 id="architecture">Architecture</h4>
<ul>
<li><strong>[Dynamic voice-enabled keyboards](doc:dynamic-keyboard-base)</strong> — Developers can create keyboards, mini keyboards, and pin pads that can be controlled by voice. This helps speed up on-device sign-ups and sign-ins by enabling customers to speak their PIN codes when subscribing to apps and their passwords when logging in. A sample app demonstrating this feature is available <a href="https://github.com/rokudev/dynamic-voice-enabled-keyboards">here</a>.</li>
</ul>
<ul>
<li><p><strong>[Standard dialog framework](doc:standard-dialog-framework-overview)</strong> — Developers can use new pre-built modal pop-up dialogs and build custom ones. A sample app demonstrating this feature is available <a href="https://github.com/rokudev/standard-dialog-framework">here</a>.</p>
<p>These new pre-built and custom standard keyboards are summarized as follows:</p>
<ul>
<li><p><strong>New pre-built message, keyboard, pin pad, and progress dialogs</strong>. These new dialogs feature updated graphics and color palette support that enable developers to provide a consistent user experience across the dialogs in their app and across the Roku platform (developers can easily adopt the new design of Roku OS system dialogs). In addition, the keyboard and pin pad dialogs include voice entry support for faster and more convenient information entry. These new dialog nodes deprecate the [legacy versions](doc:dialog).</p>
</li>
<li><p><strong>Developer-defined custom dialogs</strong>. Developers can design custom dialogs that may include a combination of text, buttons, bulleted lists, keyboards, loading indicators, and other building blocks. Custom dialogs also include all the features provided by the pre-built dialogs (voice, custom layout, and graphics). This provides developers with the flexibility to build and configure dialogs to meet their app&#39;s requirements.</p>
<p>Some fields used to set options on the Dynamic voice-enabled keyboards and the StandardDialog nodes always print their value as “invalid” in BrightScript. Equality comparisons of these field values will also not work correctly. Setting the value of these fields from either BrightScript or XML does work correctly. These fields include:</p>
<p>The <strong>voiceEntryType</strong> field of the [VoiceTextEditBox](doc:voice-text-edit-box) node.<br/>
The <strong>domain</strong> field of the [DynamicKeyboardBase](doc:dynamic-keyboard-base) node.<br/>
The <strong>keyboardDomain</strong> field of the [StandardKeyboardDialog](doc:standard-keyboard-dialog) node.<br/>
The <strong>bulletType</strong> field of the [StdDlgBulletTextItem](doc:std-dlg-bullet-text-item) node.<br/>
The <strong>graphicAlign</strong> field of the [StdDlgGraphicItem](doc:std-dlg-graphic-item) node.<br/>
The <strong>keyLayout</strong> field of the [StdDlgKeyboardItem](doc:std-dlg-keyboard-item) node.<br/>
The <strong>namedTextStyle</strong> field of the [StdDlgTextItem](doc:std-dlg-text-item) node.</p>
</li>
</ul>
</li>
</ul>
<ul>
<li><strong>[Enhanced Visual Search Results for Roku Voice](doc:implementing-search#visual-search-results-for-roku-voice)</strong> - When users ask for content while in an app, the Roku UI displays a partial overlay with content matching the search request. Content from within the active app is listed in the first row of the display if the active app participates in Roku Search. The rows below include matches from other apps.</li>
</ul>
<ul>
<li>[<strong>Instant Resume</strong>](doc:instant-resume) — Developers can implement Instant Resume in their app to save their current state upon exit and then continue playback upon relaunch. This improves the user experience by letting viewers quickly get back to the content they were watching without having to find it first.</li>
</ul>
<ul>
<li><strong>[The number of concurrent threads per running instance of an app is now limited to 100](doc:threads#thread-limits)</strong> — When the instance exceeds 50 concurrent threads, Roku displays a warning on the port 8085 console. When the instance exceeds 100 threads, a “too many threads” error exception (&amp;h29) is raised; if the app does not catch this exception, app operation is terminated, along with a corresponding stack trace. Task threads that have properly terminated and are no longer running will not count towards the limit, even if the task object itself is still valid (e.g., the state is stopped or done). As a best practice, developers should take steps to ensure that their apps always remain well under the 50-thread &quot;warning&quot; limit.</li>
</ul>
<ul>
<li>[<strong>New manifest attribute pause_aware</strong>](doc:channel-manifest#special-purpose-attributes) <strong>and corresponding [pause button event](doc:onkeyevent)</strong>— Use the new key event when the app strictly needs to pause, and not toggle between play and pause (as might happen, for example, during trickplay, in situations where the proper behavior is to leave fast-forward or rewind mode but <em>not</em> immediately begin playing).</li>
</ul>
<h4 id="tools">Tools</h4>
<p>This release includes three new or updated port 8080 commands:</p>
<ul>
<li><strong>[New chanperf command](doc:debugging-channels#scenegraph-debug-server-port-8080-commands)</strong> displays memory and CPU utilization of a side-loaded app.</li>
</ul>
<ul>
<li><strong>[New remove_plugin command](doc:debugging-channels#scenegraph-debug-server-port-8080-commands)</strong> that deletes a particular app from the local device <em>as well as from other devices</em> on the same Roku account. The local device, on which the remove_plugin command is executed, must be linked to a Roku account, and deletions elsewhere don&#39;t take effect until a device synchronizes with the Streaming Store. Some system capabilities, such as RAF, can be implemented/augmented by the installation of special apps. Especially in beta-test situations, the developer can delete old versions of such channels before installing more recent (or production) versions.</li>
</ul>
<ul>
<li><strong>[&quot;sgnodes all&quot; command extended to detail whether reference counts are held by the OS or the app&#39;s scripts](doc:debugging-channels#scenegraph-debug-server-port-8080-commands)</strong> — A sample app demonstrating this feature is available <a href="https://github.com/rokudev/sgnodes-all-demo">here</a>.</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<ul>
<li><strong>[SteadyMaxMemPoints removed from signal beacon performance measurements](doc:deprecated-apis#signal-beacon-steadymaxmempoints)</strong> — As the <strong>chanperf</strong> command now reports actual memory figures, the <strong>SteadyMaxMemPoints</strong> app performance metric is no longer reported in the debugging logs when an app is exited.</li>
</ul>
<ul>
<li><strong>[roDeviceInfo.GetVersion()](doc:ifdeviceinfo#getversion-as-string)</strong> — Use the [<strong>roDeviceInfo.GetOsVersion()</strong> function](doc:ifdeviceinfo#getosversion-as-object) instead, which was introduced in Roku 9.2 OS, to get the <strong>major</strong>, <strong>minor</strong>, <strong>revision</strong>, and <strong>build</strong> numbers of the Roku OS running on a device.</li>
</ul>
<ul>
<li>Apps must replace all <strong>file://</strong> URLs with <strong>pkg:/</strong> URLs.</li>
</ul>
<h2 id="roku-os-9-4">Roku OS 9.4</h2>
<p><strong>Initial rollout date</strong>: September 29, 2020</p>
<p>Roku OS 9.4 introduces formal BrightScript exception handling via TRY/CATCH/THROW statements, and it adds a number of media playback features such as whitelisting/blacklisting of audio and caption tracks for different countries; support for OpenSSL 1.1.1, Widevine v16 DRM, and the WebP image format; and enhancements to DASH thumbnails for trick mode.</p>
<p>Below is a list of key developer-facing Roku OS 9.4 updates:</p>
<h4 id="api">API</h4>
<ul>
<li><strong>[BrightScript now supports exception handling](doc:error-handling)</strong> — Developers can use TRY/CATCH blocks and THROW expressions for handling exceptions in their apps. Developers can define code that may potentially generate errors within a TRY statement, and then provide error handling, such as printing out the error type and message, in a CATCH statement. Developers can also create custom errors with the THROW expression.</li>
</ul>
<ul>
<li>[<strong>New getUserRegionData command added to SceneGraph ChannelStore node</strong>](doc:channelstore#getuserregiondata) — The ChannelStore node now includes a <strong>getUserRegionData</strong> command for retrieving the state, zip code, and country associated with the customer&#39;s Roku account. Developers can use the location information returned by this command to determine a customer&#39;s eligibility for regional-specific subscription products and content.</li>
</ul>
<ul>
<li><strong>[doOrder command status fixed](doc:channelstore#doorder)</strong> — The SceneGraph ChannelStore <strong>doOrder</strong> command now only returns a status of 2 (&quot;interrupted&quot;) if the back button is pressed from a &quot;Confirm Purchase&quot; dialog.</li>
</ul>
<ul>
<li><strong>[ParseJson and FormatJson now accept &quot;flags&quot; parameter as a String](doc:global-utility-functions#parsejsonjsonstring-as-string-flags---as-string-as-object)</strong> — The BrightScript ParseJson and FormatJson global utility functions now accept a String parameter, flags, for specifying the functions&#39; options. (Note that FormatJson already accepted flags as an Integer and now accepts the String version as well.)</li>
</ul>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li><strong>Enhanced media player performance</strong> — Numerous improvements in media player performance to minimize video start time, re-buffering, and playback failure rates.</li>
</ul>
<ul>
<li><strong>[Content-specific whitelisting/blacklisting of audio and caption tracks for different languages](doc:content-metadata#playback-configuration-attributes)</strong> —  Audio and captioning tracks can now be blacklisted or whitelisted dynamically for individual content items. The new metadata attributes, <strong>audioBlacklist</strong>, <strong>audioWhitelist</strong>, <strong>captionBlacklist</strong>, and <strong>captionWhitelist</strong>, can be used to make resources in various languages available or unavailable dynamically, under app control, affecting the options that a viewer sees in the UI.</li>
</ul>
<ul>
<li><strong>Open SSL 1.1.1</strong> — Roku OS now supports Open SSL 1.1.1. The OpenSSL version that was previously supported by Roku (1.0.2h) has reached end of life. OpenSSL 1.1.1 offers better performance and greater security, among other benefits.</li>
</ul>
<ul>
<li><strong>[Widevine v16](doc:content-protection#widevine)</strong> — Roku OS now supports Widevine v16 DRM, including on older supported platforms.</li>
</ul>
<ul>
<li><strong>[WebP image format](doc:streaming-specifications#supported-image-formats)</strong> — The Roku platform now supports the WebP image format, which provides smaller compressed image files and faster decoding and rendering.</li>
</ul>
<ul>
<li><strong>[DRM security level reporting](doc:ifdeviceinfo#getdrminfoex-as-object)</strong> — The <strong>ifDeviceInfo.GetDrmInfoEx()</strong> method now returns the security levels of Widevine and PlayReady DRMs.</li>
</ul>
<ul>
<li><strong>[DASH thumbnail improvements](doc:hls-and-dash#dash-standard-thumbnail-tiles)</strong> — The DASH manifest information is now provided more efficiently to the Roku Media Player, especially benefiting low-end devices.</li>
</ul>
<ul>
<li><strong>HLS and DASH trickplay thumbnails in SSAI apps now remain in sync</strong> — A bug in the handling of discontinuities (insertion breaks) for trickplay thumbnails in apps with ads inserted server-side (SSAI) previously caused thumbnails to fall out of synch with the video content over time during playback, as more discontinuities were processed. This bug is resolved in Roku OS 9.4 for HLS and DASH streaming with standard thumbnails, but it remains a problem for apps that use BIF thumbnails. Roku recommends that developers who can switch to standard thumbnails in the context of HLS or DASH streaming should do so.</li>
</ul>
<ul>
<li><strong>[Video node includes DASH manifest information](doc:video#trickplay-fields)</strong> — The DASH manifest is exposed through the SceneGraph Video node and is updated efficiently during live-streams, especially benefitting low-end devices.</li>
</ul>
<ul>
<li>[<strong>HDCP status reporting for HDMI connections improved</strong>](doc:ifhdmistatus#gethdcpversion-as-string) — The <strong>roHdmiStatus.getHdcpVersion()</strong> method now returns an empty string if HDCP is disabled.  </li>
</ul>
<blockquote>
<p>Adobe has discontinued support for Adobe DRM. Roku OS 9.4 is the last firmware release that will support it. apps should switch to one of the following [Roku-supported DRMs](doc:content-protection) to protect content: Widevine, PlayReady, or AES-128.</p>
</blockquote>
<h4 id="tools">Tools</h4>
<ul>
<li><strong>[Component library compilation errors on port 8085](doc:componentlibrary#loading-component-libraries)</strong> — Compilation info/failure messages for Roku SceneGraph component libraries when running side-loaded apps now appear on port 8085 of the debug console.</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<ul>
<li>The following keys in the [<strong>manifestData</strong> field of the SceneGraph Video node](doc:video#trickplay-fields) are deprecated as of Roku OS 9.4: <strong>mpd</strong> and <strong>periods</strong>. Developers can use the <strong>xml</strong> key to acquire information that was provided via the deprecated fields.</li>
</ul>
<h2 id="roku-os-9-3">Roku OS 9.3</h2>
<p><strong>Initial rollout date</strong>: April 7, 2020</p>
<p>Roku OS 9.3 includes features to enhance the performance of media playback and Roku devices in general, and expand platform support for industry standards covering content and meta-data. This release also features additional and improved facilities to expedite troubleshooting, performance monitoring, automated testing, and debugging of apps.</p>
<p>Finally, the Roku SceneGraph version defaults to version 1.2 as of Roku OS 9.3. As a result, <strong>use of eval() will result in a compilation error.</strong></p>
<blockquote>
<p>Apps using eval() will not run on Roku OS 9.3 (unless rsg_version has been set to 1.1, which is <strong>not</strong> recommended).</p>
<p>Developers <strong>must</strong> take immediate action to ensure that their apps do not use the eval() function, if at all possible. See &quot;Architecture,&quot; below, for more details.</p>
</blockquote>
<p>Here is a list of key developer-facing Roku OS 9.3 updates:</p>
<h4 id="api">API</h4>
<ul>
<li><strong>[New signal beacon for login and user selection dialogs](doc:measuring-channel-performance#measuring-channel-launch-times)</strong> — Developers can now measure loading times for dialogs and screens that are displayed before the app&#39;s home page (for example, login, user selection, and network error dialogs/screens).</li>
</ul>
<ul>
<li><p><strong>[HasFeature() now allows checking for soundbar hardware](doc:ifdeviceinfo#hasfeaturefeature-as-string-as-boolean)</strong> — ifDeviceInfo.HasFeature() now accepts the feature string &quot;soundbar_hardware&quot;. HasFeature() will return <strong>true</strong> if the device has soundbar hardware (i.e., speakers, the master volume of which can be changed directly by program control) but is <em>not</em> a Roku TV.</p>
</li>
<li><p><strong>[ifDeviceInfo.GetOSVersion() now includes a &quot;revision&quot; field](doc:ifdeviceinfo#getosversion-as-object)</strong> in the associative array returned by the method. This field corresponds to the third octet in the return value of the legacy GetVersion() method.</p>
</li>
</ul>
<ul>
<li><strong>[The SceneGraph RowList node now supports a fixedFocus option](doc:rowlist#fields)</strong> for the rowFocusAnimationStyle field. This option is similar to the existing fixedFocusWrap option, but <em>without</em> the latter&#39;s wrapping behavior during navigation.</li>
</ul>
<ul>
<li><strong>[Single-field observers can capture multiple-field &quot;snapshots&quot;](doc:ifsgnodefield#setfieldfieldname-as-string-value-as-object-as-boolean)</strong> — The observeField() and observeFieldScoped() methods of SceneGraph nodes can now specify a list of additional fields (that are located in the same node as the primary field), the values of which will be captured when the state of the primary field changes. The corresponding roSGNodeEvent will provide those additional values via its GetInfo() method.</li>
</ul>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li><strong>Performance enhancements</strong> — These include an increase in effective video bitrate, and reductions in the rates of video start time, re-buffering, and playback failure.</li>
</ul>
<ul>
<li><strong>[Get media-player state information using ECP query/media-player](doc:external-control-api#querymedia-player-example)</strong> — This External Control Protocol query returns a collection of information about the state of the media player, which can be useful in debugging and general troubleshooting.</li>
</ul>
<ul>
<li><strong>[Support for industry standard thumbnail tiles](doc:hls-and-dash)</strong> — For Roku SceneGraph apps, Roku OS now supports the &quot;<a href="https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf">DASH Interop spec v4.3</a>, Section 6.2.6. Tiles of thumbnail images.&quot; VideoNode now has a standard Roku OS rendered UI for DASH or HLS trickplay on VOD content.</li>
</ul>
<ul>
<li><strong>[HTTP header control for DRM key/license requests](doc:content-metadata#drmhttpagent-for-handling-drm-keylicense-requests-separately)</strong> — Apps now have the ability to set HTTP headers on DRM key/license requests, independently of other HTTP headers.</li>
</ul>
<ul>
<li><strong>[SceneGraph Video node trickplay fields now include positionInfo](doc:video#trickplay-fields)</strong> — This read-only Associative Array contains the positions of the last-rendered video and audio samples, respectively. Both positions are expressed as double(-floats), and the unit is one second.</li>
</ul>
<ul>
<li><strong>[New content meta-data drmParams attribute to support Widevine](doc:content-metadata#digital-rights-management-drm-control-attributes)</strong> — The serviceCert attribute allows setting the Widevine service certificate.</li>
</ul>
<ul>
<li><strong>More granular DASH MPD Manifest data now accessible</strong> — Apps can now obtain all relevant data from the DASH MPD Manifest.</li>
</ul>
<ul>
<li><strong>[Verimatrix DRM is deprecated](doc:content-protection)</strong> — As of Roku OS 9.3, support for Verimatrix DRM has been removed from the firmware. Make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click [here](doc:content-protection) for more information on implementing these DRMs.</li>
</ul>
<ul>
<li><strong>[Adobe DRM is deprecated](doc:content-protection)</strong> — As of Roku OS 9.3, support for Adobe DRM is deprecated.  The plugin will be removed from Roku OS in our Fall firmware update. Please make sure that content in your app is protected using one of the following Roku-supported DRMs: Microsoft PlayReady or Widevine. Click [here](doc:content-protection) for more information on implementing these DRMs.</li>
</ul>
<h4 id="architecture">Architecture</h4>
<ul>
<li><strong>[rsg_version manifest flag defaults to 1.2](doc:channel-manifest#special-purpose-attributes)</strong> — The <strong>rsg_version</strong> attribute in the [manifest](doc:channel-manifest#special-purpose-attributes) now defaults to 1.2 (<strong>rsg_version=1.2</strong>). As of Roku OS 9.0, setting the <strong>rsg_version</strong> attribute to 1.2 enables an internal mechanism for processing component <script\> tags that optimizes the resulting compiled script code. This results in a reduced initial startup time and lesser memory usage while preserving compatibility.<br/><br/>The deprecated <strong>eval()</strong> function is not compatible with <strong>rsg_version 1.2</strong>; therefore, developers must do one of the following to keep their apps running if their apps use this function:<br/><br/>1. (Recommended) Remove all usage of the deprecated <strong>eval()</strong> function. If you are using the <strong>eval()</strong> function to initialize data, use the [parseJSON()](doc:global-utility-functions#parsejsonjsonstring-as-string-as-object) function instead.<br/><br/>2. Update the <strong>rsg_version</strong> attribute in the manifest to <strong>1.1</strong> (<strong>rsgversion=1.1</strong>).</li>
</ul>
<h4 id="tools">Tools</h4>
<ul>
<li><strong>[Dynamic breakpoints and step commands added to BrightScript Debug Protocol](doc:socket-based-debugger)</strong> — The socket-based BrightScript debug protocol now includes dynamic breakpoints and step commands. Integrated Development Environments (IDEs) tightly integrated with the BrightScript debug protocol can be enhanced with these features, which enable developers to navigate through and inspect the state of the application and view its execution flow.</li>
</ul>
<h4 id="miscellaneous">Miscellaneous</h4>
<ul>
<li><strong>[Visual Search Results for Roku Voice](doc:implementing-search#roku-voice-search-results)</strong> (U.S. only) — This new aspect of Roku Voice provides developers who participate in Roku Search with enhanced discovery opportunities. When using Roku Voice to search for movies, shows or popular genres, users will now see a more visual, easy to browse display of movie and TV show artwork rather than a text-based list of options. This new search results screen orders the results in categorized rows that include relevant movies, shows, short-form content and more for simple navigation and quick discovery of entertainment. Once a user selects the specific movie or show they want to watch, they&#39;ll see an unbiased list of apps that offer that title, ordered by price (including free when available), so they can choose the viewing option that&#39;s best for them.</li>
</ul>
<h2 id="roku-os-9-2">Roku OS 9.2</h2>
<p><strong>Initial rollout date</strong>: September 24, 2019</p>
<p>Roku OS 9.2 includes a variety of media updates that allow developers to optimize playback and further secure their protected content. This firmware update also introduces APIs that enable developers to further customize app UIs.</p>
<p>A list of key developer-facing Roku OS 9.2 updates is included below.</p>
<h4 id="api">API</h4>
<ul>
<li><strong>[ZoomRowList enhancement](doc:zoomrowlist#row-decoration-component-fields)</strong> — Developers can draw a custom row decoration under the items in a ZoomRowList.</li>
<li><strong>[File System last mounted times](doc:iffilesystem#getvolumeinfopath-as-string-as-object)</strong> — Developers can get the time when a USB drive was last mounted on a Roku device.</li>
<li>[<strong>New API for getting Roku OS version</strong>](doc:ifdeviceinfo#getosversion-as-object) — Developers can call the <strong>roDeviceInfo.GetOSVersion()</strong> method to get the Roku OS running on a device.</li>
</ul>
<h4 id="media-playback">Media playback</h4>
<ul>
<li><strong>[CDN switching](doc:content-metadata#cdn-switching)</strong> — Developers can switch Content Delivery Networks (CDNs) during playback to load balance traffic and failover to different servers in order to help optimize performance.</li>
<li><strong>Forced narrative subtitles</strong> — The Roku OS now supports the display of forced narrative subtitles on the video player. This enables a dialog or on-screen text (for example, newspaper headlines, street signs, and so on) to be translated into alternate languages to help viewers understand the words being spoken or displayed.</li>
<li><strong>Support for templated DASH streams that have Widevine</strong> — The Roku media player now supports playback of DASH streams that have both templated representation and Widevines licenses.</li>
<li><strong>DASH/HLS multi-license support</strong> — Developers can protect content with resolution-specific licenses. This means developers can, for example, secure the 4K version of content with a Widevine level 1 license, and the FHD and lower versions with a Widevine level 2 license.</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<ul>
<li><strong>Roku device MAC Address via roDeviceInfo.GetConnectionInfo</strong> — The [roDeviceInfo.GetConnectionInfo() ](doc:ifdeviceinfo#getconnectioninfo-as-object)method no longer returns a device&#39;s MAC address. Developers can use the [roDeviceInfo.GetChannelClientId ](doc:ifdeviceinfo#getchannelclientid-as-string)method to uniquely identify devices.</li>
<li><strong>AudioLanguageSelected attribute</strong> — The [AudioLanguageSelected](doc:content-metadata#track-id-attributesUsers) content metadata attribute no longer  can be used to specify the language track to be used when content has multiple language tracks. Users can select their preferred audio language on-device in the <strong>Settings &gt; Audio &gt; Audio Preferred Language</strong> screen.</li>
</ul>
<h2 id="roku-os-9-1">Roku OS 9.1</h2>
<p><strong>Initial rollout date:</strong> April 9, 2019</p>
<p>Roku OS 9.1 adds new line-level debugging to the BrightScript Profiler tool, which enables developers to better pinpoint high memory and CPU usage. In addition, this update adds signal beacons to measure video start time, app change time, and app exit times, which helps developers verify that their app&#39;s performance meets certification requirements.</p>
<p>Below is a list of new APIs, media updates, and tools for developers. Changes to deprecated APIs are listed as well.</p>
<blockquote>
<p>The <code>roDeviceInfo.GetDeviceUniqueId()</code> function now returns all zeros instead of a device ID.  Apps that are still using this function in an authentication flow will fail until an app update is published. Developers should migrate to the [<code>roDeviceInfo.GetChannelClientId()</code>](doc:ifdeviceinfo#GetChannelClientId) function to get a device ID for their app.
Key Roku OS 9.1 features:</p>
</blockquote>
<h4 id="apis">APIs</h4>
<ul>
<li><p>[<strong>Encryption/decryption API</strong>](doc:rodevicecrypto) – Developers can now encrypt and decrypt data on a device using a key that is unique per app, device, or model. Using an app key, for example, developers can encrypt data for an app so that it may only be decrypted by that same app. In this case, a developer could provision credentials or an API key from the cloud to devices securely. With a device key, for example, a developer could implement a secure-storage algorithm.</p>
</li>
<li><p>[<strong>Performance testing</strong>](doc:measuring-channel-performance) – Developers can now measure the performance of user-initiated actions on their apps to validate that their apps meet certification requirements. The Roku OS automatically records key app performance metrics such as video start time, app change time, and app exit times via signal beacons (markers for the start and stop points of user-initiated actions). In addition, developers can manually add signal beacons to their applications to measure and record app launch times, which cannot be detected automatically by the Roku OS.  Developers can then use the debug console to view log entries for these app performance metrics.</p>
</li>
<li><p>[<strong>Voice command handling</strong>](doc:transport-controls) – Developers can implement voice controls to respond to voice commands such as &quot;fast forward&quot;, &quot;rewind&quot;, &quot;pause&quot;, &quot;resume&quot;, &quot;start over&quot;, &quot;replay&quot;, and so on. These voice commands may be sent from the Roku voice remote, Roku mobile app, or a virtual assistant such as Amazon Alexa or Google Assistant.</p>
</li>
<li><p>[<strong>Purchase history API</strong>](doc:channelstore#getAllPurchases) – Developers can now get a customer&#39;s purchase history, which makes it easier to determine free-trial eligibility in subscription renewal flows.</p>
</li>
<li><p>[<strong>Enhanced partner account creation</strong>](doc:channelstore#storechannelcreddata) – Developers can now use the ChannelNode to store an OAuth token, custom token, or other custom data and then retrieve the credential during authentication. This is the same functionality that has been available with the roChannelStore SDK1 component since firmware release 8.1.</p>
</li>
<li><p>[<strong>Audio/video codec change detection</strong>](doc:rodeviceinfoevent) – Developers can now detect when the audio or video codec has changed (for example, the Roku is plugged into a different A/V receiver or TV)  and then check the current audio/video playback capability.</p>
</li>
</ul>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li>[<strong>Media player error and diagnostics reporting</strong>](doc:video) – Developers now have access to more detailed error reporting to help diagnose video play errors. When an error occurs, the new reporting will explain why media playback failed and, if applicable, which syntax or feature in the content is incompatible.</li>
</ul>
<h4 id="brightscript-profiler-features">BrightScript Profiler features</h4>
<ul>
<li>[<strong>Line-level memory and CPU usage diagnostics</strong>](doc:brightscript-doc#line-level-profiling) — Developers can now collect profile data for each line of BrightScript source code to more clearly identify where memory or CPU usage is high.</li>
</ul>
<h4 id="changes-to-deprecated-apis">Changes to Deprecated APIs</h4>
<ul>
<li>[<strong>roDeviceInfo.GetDeviceUniqueId()</strong>](doc:ifdeviceinfo#getdeviceuniqueid-as-string) – The <code>roDeviceInfo.GetDeviceUniqueId()</code> method now returns a string of zeroes instead of the 12-character alphanumeric string for the device serial number. Developers should use the [<code>roDeviceInfo.GetChannelClientId()</code>](doc:ifdeviceinfo#getchannelclientid-as-string) method to get a 12-character device ID for their app.
For an overview of the consumer features added in Roku OS 9.1, visit the Roku Blog.</li>
</ul>
<h2 id="roku-os-9">Roku OS 9</h2>
<p><strong>Initial rollout date:</strong> October 23, 2018</p>
<p>Roku OS 9 introduces a new manifest flag which adds drastic improvements to the memory footprint and launch times of Roku SceneGraph (RSG) apps. All RSG apps should set the &quot;rsg_version=1.2&quot; manifest entry to run the new, higher performing SceneGraph update. This update also adds memory profiling capabilities to the BrightScript Profiler tool, enabling developers to better identify memory leaks in their apps.</p>
<p>Below is a list of new APIs, tools, performance enhancements, and media updates for developers.</p>
<h4 id="scenegraph-enhancements">SceneGraph enhancements</h4>
<ul>
<li><strong>New manifest flag for &quot;rsg_version=1.2&quot;</strong> — By adding this new manifest entry, developers enable tremendous memory savings and app launch time improvements in RSG apps. [The &quot;rsg_version=1.2&quot; manifest entry](doc:channel-manifest#special-purpose-attributes) enables a new internal mechanism for processing component <script\> tags that optimizes the resulting compiled script code. This results in a major reduction in the app&#39;s initial startup time and uses dramatically less memory while preserving total compatibility. Initial startup time is typically reduced by approximately 30% when this manifest flag is set. Memory savings range from 10 - 20MiB in a moderately complex app, with up to 40MiB saved in a complex app with extensive component hierarchies.</li>
<li><strong>eval() is no longer supported for &quot;rsg_version=1.2&quot;</strong> — In order to realize the load time performance and memory benefits enabled by the &quot;rsg_version=1.2&quot; entry, eval() can no longer be supported. Any use of eval() will cause compilation and runtime errors if &quot;rsg_version=1.2&quot; is in the app’s manifest.</li>
<li><strong>Faster AssociativeArray access</strong> — Read and write access into and out of AssociativeArray fields on nodes, and retrieval of AssociativeArrays using roSGNodeEvent.getData() has been made 5x faster. The semantics of AssociativeArray fields are copy on read and write, and copy on roSGNodeEvent.getData(). Apps that heavily use AAs can expect dramatic speed increases that directly translate to user-perceivable operations.</li>
<li><strong>Faster rendezvous</strong> — This change enables an auxiliary thread to handle rendezvous operations when the render thread is occupied with tasks that don&#39;t need rendezvous protection. The result is dramatic speed-ups for rendezvous operations, particularly on Roku devices with lesser processing power.</li>
<li><strong>Faster component creation</strong> — Node creation times have been improved in Roku OS 9.</li>
<li><strong>ZoomRowList component</strong> — [ZoomRowList](doc:zoomrowlist), a RowList component where the focused item is zoomed in, is now available for developers.</li>
<li><strong>roSGNode.threadInfo() method</strong> — A new diagnostic function, [threadInfo()](doc:ifsgnodefield), has been added to the [ifSGNodeField](doc:ifsgnodefield) interface. With few exceptions, this function may be called from any component, on any thread, in any function, at any time.</li>
</ul>
<h4 id="new-brightscript-profiler-features">New BrightScript Profiler features</h4>
<p>The [BrightScript Profiler](doc:brightscript-profiler) now includes a memory profiling tool that can be used to help developers identify memory leaks or memory that is allocated during app operation without ever being freed. Roku OS 9 also adds support for streaming of profiling data to a local network host.</p>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li><strong>Dash EventStream</strong> - Dash EventStream elements are supported in Roku OS 9.</li>
<li><strong>[BETA] Opening Widevine DRM CBCS decryption mode</strong> — Roku OS 9 adds CBCS decryption support for [Widevine DRM](doc:content-protection#widevine) in DASH and HLS streams. At this stage, Widevine support is considered in beta on the Roku platform.</li>
<li><strong>[BETA] DASH XLink support</strong> -  Roku OS 9 adds DASH XLink support, including EventStream events that are surfaced to the app through the [timedMetaData](doc:video#fields) field.</li>
<li><strong>Widevine key rotation</strong> - Roku OS 9 also adds support for Widevine key rotation and license renewal for Dash and HLS content.</li>
</ul>
<h4 id="miscellaneous">Miscellaneous</h4>
<ul>
<li>New manifest entry for a &quot;game&quot; app — Developers can now set the [&quot;game&quot; manifest entry](doc:channel-manifest#special-purpose-attributes) (game=1) to avoid audio delays in their game apps.</li>
<li>roList indexing is no longer disturbed by array index access — The behavior of roList indexing has been modified to yield more intuitive results and resolve bugs. As of Roku OS 9, when implementing roList, ifEnum enumeration and ifList enumeration will use a separate and independent internal &#39;pointers&#39; to the current element, instead of a &quot;current integer index&quot; variable. This has been done to ensure the ifList index position does not corrupt the roList index when the array read/write operators are used.</li>
<li>Programmatic access to BIFs through BrightScript — Two new fields, getNearestFrame and nearestFrame, have been added to the [BifDisplay](doc:video#fields) component so that developers can now access BIFs programmatically in their apps. Previously a BrightScript app had to use the built-in trickplay UI to access these BIFs.</li>
</ul>
<p>For an overview of the consumer features added in Roku OS 9, visit the <a href="https://blog.roku.com/os-9-release-notes">Roku Blog</a>.</p>
<h2 id="roku-os-8-2">Roku OS 8.2</h2>
<p><strong>Initial rollout date:</strong> September 26, 2018</p>
<p>Roku OS 8.2 is a firmware update focused primarily on firmware optimizations and bug fixes, along with new features that will enable Roku TV models to work seamlessly with the upcoming Roku TV Wireless Speakers. This update introduces no new features, APIs, console logs, or tooling about which developers should be mindful.</p>
<p>For our consumer release notes, <a href="https://support.roku.com/article/228844467-roku-os-software-release-notes">see here</a>.</p>
<h2 id="roku-os-8-1">Roku OS 8.1</h2>
<p><strong>Initial rollout date:</strong> May 1, 2018</p>
<h4 id="media-drm-and-content-meta-data-updates">Media, DRM, and content meta-data updates</h4>
<ul>
<li><strong>PlayReady 3 Update</strong> — All Roku devices with MStar chips update to the [PlayReady 3](doc:content-protection#playready) library with Roku OS 8.1. Previously they included PlayReady 2.5.</li>
<li><strong>[BETA] Opening Access to Widevine DRM</strong> — Roku OS 8.1 adds support for [Widevine DRM](doc:content-protection#widevine) for DASH streams. At this stage, Widevine support is considered in beta on the Roku platform.</li>
<li><strong>Digital Rights Management (DRM) control attributes</strong> — <a href="">Content metadata control attributes</a> for DRM have been added to the Roku OS.<ul>
<li><strong>Passing custom HTTP headers to licensing requests</strong> — Developers looking to pass custom HTTP headers with a licensing request can now set those headers using the [ifHttpAgent](doc:ifhttpagent) interface methods on the [Video](doc:video) node.</li>
</ul>
</li>
<li><strong>Media Player content metadata updates</strong> — Two content metadata attributes of the Media Player have been updated and three new attributes have been added:<ul>
<li>[PlayDuration](doc:content-metadata#playback-configuration-attributes) is no longer used by the media player.</li>
<li>[BookmarkPosition](doc:content-metadata#playback-configuration-attributes) is being deprecated.<ul>
<li>The existing PlayStart attribute should be used instead as it has been modified to allow apps to seek to positions prior to PlayStart. the Roku OS will continue to support BookmarkPosition to maintain the backward compatibility, but apps should plan a migration to use PlayStart.</li>
</ul>
</li>
<li>A new content meta-data attribute, [ClipStart](doc:content-metadata#playback-configuration-attributes), sets the clip start position.</li>
<li>A new content meta-data attribute, [ClipEnd](doc:content-metadata#playback-configuration-attributes), sets the clip end position.</li>
<li>A new content meta-data attribute, [LiveBoundsPauseBehavior](doc:content-metadata#playback-configuration-attributes), allows an app to customize Media Player behavior on live streams when playing in the earliest part of a DVR buffer.</li>
</ul>
</li>
</ul>
<h4 id="deprecated-apis">Deprecated APIs</h4>
<p>Five [roDeviceInfo](doc:rodeviceinfo) methods are being deprecated and replaced with similar APIs (as seen in the chart below).</p>
<p>The deprecated APIs will remain in the Roku OS and continue to work for one year; they will be removed from the Roku OS in the Spring 2019 OS update. <strong>Developers must update their apps to use the new APIs within the next year.</strong></p>
<p>Below is a complete list of the APIs deprecated as of Roku OS 8.1.</p>
<table>
<thead>
<tr>
<th>Deprecated API</th>
<th>Replacement API</th>
</tr>
</thead>
<tbody>
<tr>
<td>GetDrmInfo()</td>
<td>[GetDrmInfoEx()](doc:ifdeviceinfo#getdrminfoex-as-object)</td>
</tr>
<tr>
<td>GetAdvertisingId()</td>
<td>[GetRIDA()](doc:ifdeviceinfo#getrida-as-string)</td>
</tr>
<tr>
<td>IsAdIdTrackingDisabled()</td>
<td>[IsRIDADisabled()](doc:ifdeviceinfo#isridadisabled-as-boolean)</td>
</tr>
<tr>
<td>GetClientTrackingId()</td>
<td>[GetChannelClientId()](doc:ifdeviceinfo#getchannelclientid-as-string)</td>
</tr>
<tr>
<td>GetDeviceUniqueId()</td>
<td>N/A — Use [GetChannelClientId()](doc:ifdeviceinfo#getchannelclientid-as-string)</td>
</tr>
</tbody>
</table>
<h4 id="general-api-enhancements">General API Enhancements</h4>
<ul>
<li><strong>Memory-level notification</strong> — This release adds a memory-level notification API ([generalMemoryLevel](doc:rodeviceinfo)) to roDeviceInfoEvent to fire notifications to the app. Apps can also query the memory level directly using [two new methods](doc:ifdeviceinfo#enablelowgeneralmemoryeventenabled-as-boolean-as-dynamic) of the [roDeviceInfo](doc:rodeviceinfo) component.</li>
<li><strong>GetUserCountryCode() API</strong> — To determine the country associated with a user’s Roku account, a new method [GetUserCountryCode()](doc:ifdeviceinfo#getusercountrycode-as-string) as String was added to [roDeviceInfo](doc:rodeviceinfo).</li>
<li><strong>roRegex.MatchAll()</strong> — A new method [MatchAll()](doc:ifregex#matchallstr-as-string-as-object), has been added to [roRegex](doc:roregex). This adds the ability to return all matches of a specific regular expression pattern in the target string.</li>
<li><strong>Getting captions mode from device event</strong> — The developer can now call GetInfo() on a device event to know the current global setting for closed caption mode property using [isCaptionModeChanged()](doc:rodeviceinfoevent).</li>
<li><strong>API to determine if a Roku TV is Energy Star Compliant</strong> — Developers can determine if a Roku powered TV is Energy Star Compliant by using the [roDeviceInfo.HasFeature(&quot;energy_star_compliant&quot;)](doc:ifdeviceinfo#getusercountrycode-as-string) API.</li>
<li><strong>storeChannelCredData API</strong> — This OS update introduces a new roChannelStore method, [StoreChannelCredData()](doc:universal-authentication-protocol-for-single-sign-on), that allows apps to store information in our backend which they can retrieve later using GetChannelCred(). Calling this new API allows developers to store OAuth tokens for a signed-in user so that when the app is launched on a new Roku device, the app can request the stored information, identify their customer, and automatically sign them in.</li>
</ul>
<h4 id="scenegraph-updates">SceneGraph Updates</h4>
<ul>
<li><strong>ReplaceChildren() ignores extra items in the replace list</strong> — When using <a href="">replaceChildren()</a> to update the content of each item in a [markupGrid](doc:markupgrid), if the developer supplies more items than there are in the original list (going from 4 items to 5), the &#39;extra&#39; items are ignored and not added as children.</li>
<li><strong>Mobile or ECP keypress events now appear in onKeyEvent()</strong> — Literal key keypress events (such as keyboard letters, and so forth) that are sent to  via the mobile app or [ECP](doc:external-control-api) keydown/keyup commands, now go to the <a href="">onKeyEvent()</a> handler. Previously, only keys that corresponded to remote keys went to the onKeyEvent handler.</li>
<li><strong>SimpleLabel</strong> - Roku OS version 8.1 introduces [SimpleLabel](doc:simplelabel) which is a lightweight complement node to the [Label](doc:label) node. It supports simplified font style specification and is more memory efficient than the Label node.</li>
</ul>
<h2 id="roku-os-8">Roku OS 8</h2>
<p><strong>Initial rollout date:</strong> October 2, 2017</p>
<h4 id="performance-optimization">Performance &amp; optimization</h4>
<ul>
<li><strong>fps_display command</strong> — A new
command, [fps_display](doc:debugging-channels),
has been added to Telnet port 8080 to display frames-per-second and
free memory on-screen. Developers can leverage this tool to optimize
their app UI.</li>
<li><strong>Registry ReadMulti and WriteMulti
APIs</strong> — [roRegistrySection](doc:roregistrysection) adds
two new APIs, <strong>WriteMulti</strong> and <strong>ReadMulti</strong> — to allow apps
to read/write multiple keys at a time.</li>
<li><strong>[BETA] New file system for data caching</strong> — A new file
system, [cachefs:](doc:file-system),
has been introduced to allow applications to cache data to volatile
or persistent storage. Users who extend the persistent storage
available on their device by adding an SD card will see the biggest
benefit as application data will survive reboots and benefit from
additional cache space to improve performance. Users without
extended storage will also benefit from the use of a shared
in-memory cache that is automatically managed by the system to
optimize for the most recently used assets.</li>
<li><strong>RSG platform performance improvements</strong> — Many improvements have
been built into the Roku OS itself, enabling better support for
low-end devices. All apps automatically inherit these benefits,
with no action required from the developer.<ul>
<li><script\> include files no longer incur an expensive copy for
each component that includes it.</li>
<li>The time penalty for rendezvous has been reduced.</li>
<li>The per-node memory penalty has been significantly reduced.</li>
<li>Image caching has been added for all apps.</li>
</ul>
</li>
</ul>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li><strong>Support for RSG 1.0 functionality is deprecated</strong> — Starting with
Roku OS 8, support for the
“[rsg_version=1.0](doc:channel-manifest#special-purpose-attributes)”
manifest flag is deprecated. This deprecation means that the 1.0
features continue to work in Roku OS 8, but will no longer be
supported (and thus should not be expected to work) starting with
our next major firmware release. Apps affected by the change in
Roku’s [observer callback model](doc:handling-application-events) introduced
in Roku OS 7.5 should be updated accordingly.</li>
<li><strong>Video node updates</strong> — Many new fields have been added to
the [Video](doc:video) node:<ul>
<li><strong>captionStyle</strong> allows apps to style closed captions.</li>
<li><strong>contentBlocked</strong> determines whether the current content is
blocked.</li>
<li><strong>supplementaryAudioVolume</strong> sets the volume of the description
tracks separately from the main audio track.</li>
<li><strong>availableAudioTracks</strong> has been updated to return/include
audio description tracks, which are typically seen on broadcast
TV.</li>
</ul>
</li>
<li><strong>itemHasFocus field for item components</strong> — A new optional field
&quot;itemHasFocus&quot; has been added for RSG item components:
[MarkupList](doc:markuplist),
[MarkupGrid](doc:markupgrid),
[RowList](doc:rowlist) and
[TargetGroup](doc:targetgroup).
It stores a boolean value that indicates whether the item component
currently is the focused item. Only one item component of any of the
nodes should have itemHasFocus set to true.</li>
<li><strong>ParentalControlPinPad</strong> — Roku OS 8 contains a new
node, [ParentalControlPinPad](doc:rectangle).
It is a variant of the PinPad component, but with a few key
differences:<ul>
<li>The pin, pinLength, and secureModefields are made private.</li>
<li>If the user enters the correct pin, a 2-hour override of content
blocking begins, similar to the system behavior on Roku TV.</li>
<li>If the user enters an incorrect PIN, the text fields are cleared
automatically.</li>
<li>A new field, pinSuccess, exists for blocking content.</li>
</ul>
</li>
<li><strong>Rectangle node blendingEnabled support</strong> — A blendingEnabled field
has been added to the
RSG [Rectangle](doc:rectangle) component
that specifies if the rectangle should be alpha blended with the
nodes behind it.</li>
</ul>
<h4 id="system-overlay-closed-caption-updates">System overlay &amp; closed caption updates</h4>
<ul>
<li><strong>Improvements to the system overlay</strong> — The behavior of the Roku
system overlay has been modified, such that the system overlay now
slides in whenever the * button is pressed, the Video node is in
focus, and the app does not have its OnKeyEvent() handler
fired. When the Video node is not in focus, the system overlay does
not slide in and the OnKeyEvent() handler is fired.</li>
<li><strong>System overlay notification event</strong> — A new notification has been
added
to [roDeviceInfo](doc:rodeviceinfo).
Apps can get notified when a system overlay is displayed.</li>
<li><strong>roDeviceInfoEvent update</strong> — A new event,
isCaptionModeChangedEvent, has been added
to [roDeviceInfoEvent](doc:rodeviceinfoevent) to
enable developers to check if the user changes the closed caption
mode or track.</li>
<li><strong>Closed caption track selection</strong> — It is no longer necessary for a
app to partake in the CC track selection, apart from adding any
tracks to the list of available tracks. the Roku OS now selects a
CC track based on the preferred caption language selection in the
system preferences. When the selected language is not available, it
defaults to the system&#39;s UI language.</li>
</ul>
<h4 id="miscellaneous">Miscellaneous</h4>
<ul>
<li><p><strong>Case-preserving quoted keys in Associative Arrays</strong> — The quoted
keys in [Associative Array](doc:roassociativearray)
literals are now case-preserving. This change improves the
readability of your code and is compatible with JSON usage.</p>
</li>
<li><p><strong>CEC status events</strong> — A [roCECStatusEvent](doc:rocecstatusevent) has
been added for set-top-boxes to determine their active display
source status. Apps subscribing to the event will be notified
when the active-source status of the device changes per the CEC
message traffic.</p>
</li>
</ul>
<h2 id="roku-os-7-7">Roku OS 7.7</h2>
<p><strong>Initial rollout date:</strong> June 20, 2017</p>
<p>Roku OS 7.7 focuses mainly on bug fixes and firmware optimizations to
increase performance of Roku SceneGraph (RSG) apps.</p>
<h4 id="scenegraph-additions-and-modifications">SceneGraph additions and modifications</h4>
<ul>
<li><p><strong>New event added for DASH manifest updates</strong> — A new
field, <code>manifestData</code>, has been added to the [Video node](doc:video) to detect the
periods in a DASH manifest before they are played back. One major
use case for this is to display ad markers in the trickplay progress
bar.</p>
</li>
<li><p><strong>New field to reflect current design resolution</strong> — A read-only
field, [<code>currentDesignResolution</code>](doc:scene), has been added to Scene nodes to
determine which of the supported design resolutions is currently
being used by RSG.</p>
</li>
<li><p><strong>UI changes to the RowList &amp; ArrayGrid components</strong> — Two new
fields have been added to
the [RowList](doc:rowlist) and [ArrayGrid](doc:arraygrid) components
to provide greater control over the UX:</p>
<ul>
<li><strong>RowList</strong> — <code>rowCounterRightOffset</code><br>Used to specify the location of the right edge of the row
counter relative to right edge of the RowList&#39;s clipping
rectangle.</li>
<li><strong>RowList</strong> — <code>showRowCounterForShortRows</code><br>Determines whether the row counter is shown for all rows.</li>
<li><strong>ArrayGrid</strong> — <code>fadeFocusFeedbackWhenAutoScrolling</code><br>Determines whether to fade the focus feedback indicator while
scrolling multiple items.</li>
<li><strong>ArrayGrid</strong> — <code>currFocusFeedbackOpacity</code>
Provides access to the current opacity of the focus feedback
indicator.</li>
</ul>
</li>
<li><p><strong>New field to play animations in reverse</strong> — A &quot;reverse&quot; boolean
field has been added to
the [<code>FloatFieldInterpolator</code>](doc:floatfieldinterpolator), [<code>ColorFieldInterpolator</code>](doc:colorfieldinterpolator), and [<code>Vector2DFieldInterpolator</code>](doc:vector2Dfieldinterpolator) RSG
nodes to allow for interpolated values to be computed in reverse.</p>
</li>
<li><p><strong>Component compile time optimizations</strong> — Roku OS 7.7 includes
several BrightScript compile time optimizations that significantly
improve app launch times. In particular, RSG apps defining
many components with the same script files will benefit from the
largest app launch time
enhancements.</p>
<blockquote>
<p>These optimizations are in the Roku OS and require no action from the developer.</p>
</blockquote>
</li>
</ul>
<h4 id="additional-updates">Additional updates</h4>
<ul>
<li><p><strong>Manifest addition for confirming app launches</strong> — An optional
field, &quot;[confirm_partner_button](doc:channel-manifest#launch-requirement-attributes)&quot;,
has been added to the manifest to confirm app launches before
leaving the current app after a partner button was pressed on
the Roku remote. Use this feature to minimize the number of
unintended app launches after a user accidentally hits a partner
button while fast forwarding or rewinding content.</p>
</li>
<li><p><strong>Manifest entry for overriding network connectivity HUD</strong> — Roku OS
7.7 introduces a system-level display for indicating when media
playback is interrupted due to network connection failures. However,
apps that have designed their own error dialogue for these
interruptions can suppress this pop-up HUD by including a new flag
in their manifest. The manifest entry to override the HUD is
“[suppress_unconnected_hud=1](doc:channel-manifest#special-purpose-attributes)”.</p>
<blockquote>
<p>For more information on the <strong>connectivity HUD</strong>, please read the
related <a href="https://support.roku.com/article/208755728-what-to-do-if-you-can">support article.</a></p>
</blockquote>
</li>
</ul>
<ul>
<li><p><strong>New logTypes added to ifSystemLog</strong> —
[<code>ifSystemLog</code>](doc:ifsystemlog) now
supports a new logType: &quot;http.complete&quot;. When enabled, the
“http.complete” events will be sent to Roku after an http transfer
is completed for adaptive streams. This event consolidates
information related to a cURL transfer such as:</p>
<ul>
<li>DNS look up time,</li>
<li>connection latency,</li>
<li>transfer speed</li>
<li>and number of bytes.</li>
</ul>
</li>
</ul>
<p>While Roku OS 7.7 is focused almost entirely on bug fixes and developer
optimizations, it does include a few new consumer features.</p>
<p>For our consumer release notes, visit the <a href="https://blog.roku.com/roku-os-7-7-release-notes/">Roku Blog</a>.</p>
<h2 id="roku-os-7-6">Roku OS 7.6</h2>
<p><strong>Initial rollout date:</strong> April 11, 2017</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li><strong>TVOD APIs</strong> — New APIs have been added to the RSG
[ChannelStore](doc:channelstore)
component to support in-app purchases.
([roChannelStore](doc:rochannelstore))</li>
<li><strong>New function for cloning an entire node tree</strong> — The clone()
function has been added to
[ifSGNodeDict](doc:ifsgnodedict)
to clone an entire node tree, or just the node depending on the
boolean value passed.</li>
<li><strong>Convert structures containing arrays into an RSG node tree</strong> — An
“update” function has been added to
[ifSGNodeChildren](doc:ifsgnodechildren).
Use ifSGNodeChildren.update() to convert objects with arrays and/or
associative arrays into node trees.</li>
<li><strong>Improved rotation animation</strong> — Fixed a rotation
[animation](doc:animation)
issue for the following device model groups: 2450X, 2500X, 27XXX,
37XXX, and 5000X.
([FloatFieldInterpolator](doc:floatfieldinterpolator))</li>
</ul>
<h4 id="brightscript-updates">BrightScript updates</h4>
<ul>
<li><strong>Microphone APIs</strong> — Added a
[roMicrophone](doc:romicrophone)
component and
[roMicrophoneEvent](doc:romicrophoneevent)
for capturing voice input from the user. Note that apps in the
Kids &amp; Family category can not use these APIs.</li>
<li><strong>HTTP/2 support</strong> - [roUrlTransfer](doc:rourltransfer)
objects now support HTTP/2. Among the benefits, HTTP/2 support
allows for connection sharing, which is accomplished by establishing
all roUrlTransfers that could share a connection from the same Task
thread.</li>
<li><strong>Conditional compilation</strong> — BrightScript now supports [conditional compilation](doc:conditional-compilation),
which allows blocks of code to be run only while set to true.</li>
<li><strong>API to count node impressions</strong> — Two new fields —
enableRenderTracking and renderTracking — have been added to
RenderableNode to check whether a node is fully or partially
rendered within the bounding rectangle of the screen. Developers can
use this information to track node impressions.</li>
<li><strong>Import BrightScript files using relative URIs</strong> — Developers can
now specify URIs relative to the XML component’s file for the
/&lt;[script](doc:script)/&gt;
element’s “uri” attribute.</li>
<li><strong>New functions added to [ifDeviceInfo](doc:ifdeviceinfo)</strong> -<ul>
<li>GetGraphicsPlatform queries the device to see if it supports
OpenGL or DirectFB. The function takes no arguments. The return
is either “opengl” or “directfb” as a string.</li>
<li>GetClientTrackingId is an alias for the existing GetPublisherId
function. The alternative function name is meant to help
developers remember to use publisher ID instead of the device
ESN.</li>
</ul>
</li>
</ul>
<h4 id="brightscript-debugger-updates">BrightScript debugger updates</h4>
<ul>
<li><strong>BrightScript profiler tool</strong> — A BrightScript profiler tool has
been added to Roku OS to gather important metrics such as CPU usage
and function “wall-clock” times. Use this tool to analyze
performance and increase code efficiency. ([BrightScript profiler documentation](doc:brightscript-profiler);<a href="https://devtools.web.roku.com/profiler/viewer/">visualization tool</a>)</li>
<li><strong>Rendezvous logging</strong> — Information on the thread rendezvous can
now be accessed from within the developer console. To toggle this
log setting, telnet to the device port 8080 and enter
“enhanced_dev_log rendezvous [on|off]”. ([Testing and debugging Roku apps](doc:debugging-channels))</li>
<li><strong>Node operation performance metrics</strong> — Debug command “sgperf” has
been added to port 8080 to track roSGNode operations by thread,
whether it’s a create- or a subsequent-operation on an existing
node, and whether it involved a rendezvous. ([Testing and debugging Roku apps](doc:debugging-channels))</li>
<li><strong>Shorthand debugger commands</strong> — Shorthand alternatives can now be
used to replace many debugger commands. ([Testing and debugging Roku apps](doc:debugging-channels))</li>
</ul>
<h4 id="new-manifest-https-github-com-rokudev-docs-blob-master-develop-specifications-manifest-md-entry">New <a href="https://github.com/rokudev/docs/blob/master/develop/specifications/manifest">manifest</a> entry</h4>
<ul>
<li>splash_rsg_optimization=1: Remove flicker between the splash
screen and initial screen during app launch of SceneGraph
apps</li>
</ul>
<h4 id="ui-watchdog">UI watchdog</h4>
<p>UI watchdog was re-enabled in version 7.6.</p>
<p>The UI Watchdog is a timer that runs on the Roku system and ensures
overall stability of the platform by forcing a reboot of the system if
it appears to be hung. During normal system operation the timer
(watchdog timeout value) is periodically reset to ensure that a reboot
is not triggered. In the case of the UI Watchdog, the Roku OS will give
a 3 second grace period for a sideloaded app locking/over-taxing
the Render thread before a system reboot is triggered (for a
Streaming Store installed app, the Roku OS gives a 10 second grace
period).</p>
<h2 id="roku-os-7-5">Roku OS 7.5</h2>
<p><strong>Initial rollout date:</strong> November 1, 2016</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li><p>[Thread rendezvous](doc:threads#task-node-thread-rendezvous-timeout)
no longer timeout and will wait indefinitely.  </p>
</li>
<li><p>New components:</p>
<ul>
<li>[TargetGroup](doc:targetgroup)</li>
<li>[TargetList](doc:targetlist)</li>
<li>[TargetSet](doc:targetset)</li>
<li>[SoundEffect](doc:soundeffect) node  </li>
</ul>
</li>
<li><p>New and updated fields:</p>
<ul>
<li>[<interface\>](doc:interface):
added roArray, rect2D, and rect2DArray
types</li>
<li>[LayoutGroup](doc:layoutgroup):
&quot;custom&quot; alignment value for horizAlignment and vertAlignment to
explicitly set translation values for each child layout</li>
<li>[Poster](doc:poster) node:
bitmapMargins - set to an associative array containing margin
information for 9-patch images</li>
<li>[Animation](doc:animation):
optional - set to true to skip animations on lower performing
devices</li>
<li>[Functional Fields](doc:handling-application-events#HandlingApplicationEvents-FunctionalFields)<ul>
<li>procedural functions that can be called on components directly</li>
</ul>
</li>
<li>[Overhang](doc:overhang) -
added optionsText and optionsMaxWidth to customize the text next
to the options (<img src="images/icons/emoticons/star_yellow.png" alt="roku815px - (star)">) symbol</li>
<li>[RowList](doc:rowlist):
rowTitleComponentName - specify an XML component to render text
in place of the row label</li>
<li>findNode() arguments and nodeType fields are now case
insensitive</li>
<li>ChannelStore node commands have been serialized to ensure that
one command finishes before the next begins</li>
<li>Components in [Component Libraries](doc:componentlibrary)
can be extended</li>
<li>Component Libraries can be unsigned if delivered over HTTPS</li>
<li>New [Dialog](doc:dialog)
fields: titleColor, titleFont, numberedBullets, bulletText,
graphicWidth, graphicHeight, width, maxHeight</li>
<li>New [ifSGNodeField](doc:ifsgnodefield) methods:
observeFieldScoped(), unobserveFieldScoped()</li>
</ul>
</li>
</ul>
<h4 id="brightscript-updates">BrightScript updates</h4>
<ul>
<li>New components:<ul>
<li>[roAudioGuide](doc:roaudioguide)
[ifAudioGuide](doc:ifaudioguide)</li>
</ul>
</li>
</ul>
<ul>
<li>Updated components:<ul>
<li>ifChannelStore: [GetIdentity()](doc:ifchannelstore#getidentity-as-integer) -
returns a unique number for this object that can be used to
identify whether events originated from this object by comparing
with [roChannelStoreEvent](doc:rochannelstoreevent).GetSourceIdentity().</li>
<li>[ifTuner](doc:iftuner#getchannelinfo-channel_id-as-string-asobject):
GetChannelInfo().delivery_system, source_data.network_id,
source_data.transport_stream_id</li>
<li>ifAppManager: [SetAutomaticAudioGuideEnabled(enabled as Boolean)](doc:ifappmanager#setautomaticaudioguideenabledenabled-as-boolean-as-void)<ul>
<li>enable/disable automatic Audio Guide and override any manifest
setting</li>
</ul>
</li>
<li>Content Meta-Data - [Playback Configuration Attributes](doc:content-metadata#playback-configuration-attributes):<ul>
<li>ForwardQueryStringParams - controls whether query string
parameters from initial HLS stream manifest requests are
forwarded to subsequent segment download requests</li>
<li>IgnoreStreamErrors - continue playback when encountering any
streaming related errors</li>
<li>AdaptiveMinStartBitrate - minimum startup bitrate to start
streaming with a variant equal to or greater than the value
specified</li>
<li>AdaptiveMaxStartBitrate - maximum startup bitrate to start
streaming with a variant less than or equal to the value
specified</li>
<li>PlayStart - cannot be overridden by a seek operation</li>
<li>BookmarkPosition - can be overridden by a seek operation;
this value takes precedence over PlayStart</li>
</ul>
</li>
<li>[roVideoPlayerEvent](doc:rovideoplayerevent):<ul>
<li>isStreamSegmentInfo.GetMessage() - supports segment
information for HLS, DASH, and Smooth streams</li>
<li>isRequestFailed().GetInfo():<ul>
<li>ClipIdx - The zero starting index of the item in the
content list this event is related to</li>
<li>Ignored - true if the error was ignored and the player
skipped to the next item in the content list</li>
</ul>
</li>
<li>isPlaybackPosition().GetInfo():<ul>
<li>ClipIdx - The zero starting index of the item in the
content list this event is related to</li>
<li>ClipPos - player position relative to the start of the
clip in milliseconds</li>
</ul>
</li>
</ul>
</li>
<li>[ifVideoPlayer](doc:ifvideoplayer):<ul>
<li>[Play()](doc:ifvideoplayer#play-as-boolean)<ul>
<li>starts playback at the seek position if seek was
called prior to play. If seek was not called, the player
advances its current position to the next item in the
content list and starts playing that item</li>
</ul>
</li>
<li>[Stop()](doc:ifvideoplayer#stop-as-boolean)<ul>
<li>stops playback and resets the seek position, keeping the player’s current position unchanged</li>
</ul>
</li>
<li>[SetContentList()](doc:ifvideoplayer#setcontentlistcontentlist-as-object-as-void)<ul>
<li>Resets the current player position, the next time Play()
is called playback will start at the first item of the
content list (Unless Seek() is called prior); prefetching
updates</li>
</ul>
</li>
</ul>
</li>
<li>[ifDeviceInfo](doc:ifdeviceinfo):<ul>
<li>[EnableScreensaverExitedEvent()](doc:ifdeviceinfo#enablescreensaverexitedeventenable-as-boolean-as-dynamic) -
set to true to enable events to indicate when the user has exited the screensaver</li>
<li>[IsAudioGuideEnabled()](doc:ifdeviceinfo#isaudioguideenabled-as-dynamic)-
returns true if Audio Guide is enabled on a supported device</li>
<li>[EnableAudioGuideChangedEvent()](doc:ifdeviceinfo#enableaudioguidechangedeventenable-as-boolean-as-dynamic)-
set to true to receive Audio Guide events</li>
</ul>
</li>
<li>[roDeviceInfoEvent](doc:rodeviceinfoevent):<ul>
<li>GetInfo().audioGuideEnabled</li>
<li>GetInfo().exitedScreensaver</li>
</ul>
</li>
<li>[ifStringOps](doc:ifstringops):
Escape(), Unescape(), EncodeUri(), DecodeUri(),
EncodeUriComponent(),
DecodeUriComponent()</li>
<li>[ifTextToSpeech](doc:iftexttospeech):
GetRate(), SetRate(), GetPitch(), SetPitch()</li>
<li>[ifAssociativeArray](doc:ifassociativearray): Items()<ul>
<li>Returns an array containing the associative array key/value
pairs in lexicographical order of key. Each item is in the
returned array is an associative array with &#39;key&#39; and &#39;value&#39;
fields.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="new-manifest-https-github-com-rokudev-docs-blob-master-develop-specifications-manifest-md-entries">New <a href="https://github.com/rokudev/docs/blob/master/develop/specifications/manifest.md">manifest</a> entries</h4>
<ul>
<li>automatic_audio_guide_disabled: disable Audio Guide within an app</li>
<li>usb_media_handler: auto launch apps when a USB device is inserted</li>
<li>rsg_version: change the type of [observer callback model](doc:handling-application-events#HandlingApplicationEvents-ObserverCallbackModels)
used</li>
</ul>
<h4 id="brightscript-debugger-updates">BrightScript debugger updates</h4>
<ul>
<li>Port 8085 now provides context for all threads and port 8089-8093 will no longer be used.<ul>
<li>STOP, breaks, and continue will stop/resume all threads. Prior to 7.5, only one thread would stop/resume.</li>
<li>See the overview on <a href="https://github.com/rokudev/docs/blob/master/develop/guides/debugging.md#scenegraph-applications">Debugging SceneGraph applications</a> for more details.</li>
</ul>
</li>
<li>New 8085 commands:<ul>
<li>threads: list all current executed suspended threads</li>
<li>thread <id\>: select a suspended thread to debug</li>
</ul>
</li>
<li>New 8080 commands:<ul>
<li>loaded_textures: display the current set of images loaded into
texture memory</li>
<li>sgversion: change the [observer callback model](doc:handling-application-events#HandlingApplicationEvents-ObserverCallbackModels)</li>
</ul>
</li>
</ul>
<h4 id="external-control-protocol-additions">External Control Protocol additions</h4>
<ul>
<li>[Roku TV commands](doc:external-control-api): query/tv-channels, query/tv-active-channel, launch/tvinput.dtv</li>
<li>[search commands](doc:external-control-api): query and launch Roku Search-driven content</li>
</ul>
<h4 id="media-player-updates">Media Player updates</h4>
<ul>
<li>Fast Video Start can now prebuffer from non-zero positions, allowing
for prebuffering of content in “Continue Watching” lists</li>
<li>Live DASH streaming support</li>
<li>The Roku MediaPlayer now automatically detects and plays a video
even if the file type is not specified. All major file types — HLS,
DASH, Smooth and MP4 — are detected</li>
<li>Video player automatically scales when changing to a different
stream with different aspect ratios</li>
</ul>
<h2 id="roku-os-7-2">Roku OS 7.2</h2>
<p><strong>Initial rollout date:</strong> June 21, 2016</p>
<p>This release adds two notable features. A text to speech feature has
been added to allow all Roku applications to provide audible spoken
versions of the user interface. Also, an option to buffer a video stream
without actually playing it is now included, to provide a &quot;fast start&quot;
video playback capability to your applications. You can use this option
to begin buffering the video stream while a user is reading a
description of the video, and then start the actual playback when the
user selects it. Roku SceneGraph also supports this new option, as well
as built-in support for Audio and Video node playlists, improved HTTPS
support, improved debugging, and several other new features.</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li>A prebuffer option has been added to the control field of the Audio
and Video nodes to allow buffering of media playback prior to the
user starting the media item ([Audio](doc:audio),
[Video](doc:video), <a href="Playing-Videos_1608528.html">Playing
Videos</a>).</li>
<li>Screensavers can now be created in SceneGraph
([Screensavers](doc:screensavers)).</li>
<li>New debugging commands are available (<a href="Debugging-SceneGraph-Applications_3736509.html">Debugging SceneGraph
Applications</a>,
[ifSGNodeChildren](doc:ifsgnodechildren)).</li>
<li>The ChannelStore node class has been added for in-app purchase
support in SceneGraph applications
([ChannelStore](doc:channelstore)).</li>
<li>The Task node has been modified ([Task](doc:task),
[SceneGraph Threads](doc:threads)).</li>
<li>A bufferingStatus field has been added to the Audio node
([Audio](doc:audio)).</li>
<li>Timed meta-data is now supported for both Audio and Video node
playback ([Audio](doc:audio), [Video](doc:video)).</li>
<li>Audio and Video nodes now have built-in support for playlists that
can play several media items in sequence
([Audio](doc:audio), [Video](doc:video)).</li>
<li>HTTPS support is now available for all SceneGraph nodes
([roHttpAgent](doc:rohttpagent)).</li>
<li>A MaxVideoDecodeResolution field has been added to the Video node
([Video](doc:video)).</li>
<li>New fields have been added to the Video node to allow customizing
the internal ProgressBar node ([Video](doc:video)).</li>
<li>New fields have been added to the Video node to allow customizing
the internal TrickPlayBar node ([Video](doc:video)).</li>
<li>The order of field setting of component-based lists and grids has
changed ([MarkupList](doc:markuplist),
[MarkupGrid](doc:markupgrid),
[RowList](doc:rowlist)).</li>
<li>Several new methods have been added to the ifSGNodeChildren
interface ([ifSGNodeChildren](doc:ifsgnodechildren)).</li>
</ul>
<h4 id="component-updates">Component updates</h4>
<ul>
<li>roVideoPlayer and roVideoScreen interface Prebuffer() method
added to allow buffering of video playback prior to the user
starting the video ([ifVideoPlayer](doc:ifvideoplayer),
[ifVideoScreen](doc:ifvideoscreen), <a href="Fast-Video-Start_4262645.html">Fast Video
Start</a>).</li>
<li>A text-to-speech component has been added to support audible spoken
versions of the user interface
([roTextToSpeech](doc:rotexttospeech),
[ifTextToSpeech](doc:iftexttospeech),
[roTextToSpeechEvent](doc:rotexttospeechevent), [Text to Speech](doc:text-to-speech)).</li>
<li>New methods have been added to roUniversalControlEvent that improve
distinguishing between remote control and keyboard key presses, and
the key press and release events ([roUniversalControlEvent](doc:rouniversalcontrolevent)).</li>
</ul>
<h4 id="brightscript-debugger-updates">BrightScript debugger updates</h4>
<ul>
<li>Commands to step over and out of functions have been added
([Debugging Your Application](doc:debugging-channels)).</li>
<li>Special commands to debug SceneGraph applications have been added
(<a href="Debugging-SceneGraph-Applications_3736509.html">Debugging SceneGraph Applications</a>).</li>
</ul>
<h2 id="roku-os-7-1">Roku OS 7.1</h2>
<p><strong>Initial rollout date:</strong> April 5, 2016</p>
<p>The 7.1 firmware release incorporates several BrightScript and
BrightScript component improvements. There is now support for playing
broadcast and cable content on a Roku TV which includes a tuner.
SceneGraph has numerous improvements to the Video node, and new
capabilities such as passing global data between components, passing
parameters to callback functions, localization, and downloading
libraries of SceneGraph components.</p>
<h4 id="scenegraph-updates">SceneGraph updates</h4>
<ul>
<li>Libraries of SceneGraph components can now be loaded and used at the
start of a SceneGraph application
([<strong>ComponentLibrary</strong>](doc:componentlibrary))</li>
<li>SceneGraph components can now be extended from other custom
components (<a href="Creating-Custom-Components_4260778.html"><strong>Creating Custom Components</strong></a>).</li>
<li>A <code>uri</code> field type has been added to better support URL resolution
and features like certificates and cookies ([<strong>Content Meta-Data</strong>](doc:content-metadata)).</li>
<li>Support for localization/internationalization string translations
and automatic localized graphic image insertion ([<strong>SceneGraph Localization</strong>](doc:localization)).</li>
<li>Automatic scaling of image files to a specified size on download,
with aspect ratio preserving
options ([<strong>Poster</strong>](doc:poster),
[<strong>PosterGrid</strong>](doc:postergrid)).</li>
<li>Parameters can now be passed to observer callback
functions ([<strong>ifSGNodeField</strong>](doc:ifsgnodefield)).</li>
<li>Global application data can now be more easily shared between
components, using an <code>m.global</code> object reference ([<strong>SceneGraph Data Scoping</strong>](doc:data-scoping)).</li>
<li>Support for node identity
comparison ([<strong>ifSGNodeDict</strong>](doc:ifsgnodedict)).</li>
<li>Support for dynamic additions to interface fields for all nodes,
allowing all node fields to be
observed ([<strong>ifSGNodeField</strong>](doc:ifsgnodefield),
[<strong>Node</strong>](doc:node)).</li>
<li>Video node class includes several new fields to configure trick play
and other playback features ([<strong>Video</strong>](doc:video)).</li>
<li>Focus indicators for list and grids can now be customized by
blending the indicator colors
([<strong>ArrayGrid</strong>](doc:arraygrid)).</li>
<li>New XML markup component interfaces:<ul>
<li>onChange takes an associative array and a function
name (<strong><a href="interface_1608549.html"><interface\></a></strong>)</li>
<li>calling functions from an associative array is now
supported (<strong><a href="interface_1608549.html"><interface\></a></strong>)</li>
</ul>
</li>
</ul>
<h4 id="brightscript-language-updates">BrightScript language updates</h4>
<p>added increment (<code>++</code>) and decrement (<code>–</code>) operators to allow integer
increment and decrement operations to have effect on a variable
([<strong>Expressions, Variables, and Types</strong>](doc:expressions-variables-types))</p>
<p>added the following assignment operators to support mathematical and
bitshift operations with numeric operands ([<strong>Expressions, Variables, and Types</strong>](doc:expressions-variables-types)):</p>
<ul>
<li>+=</li>
<li>-=</li>
<li>*=</li>
<li>/=</li>
<li>\=</li>
<li>&lt;&lt;=</li>
<li>>>=<span style="color: rgb(255,0,0);"><br></span></li>
</ul>
<p>ReadAsciiFile() now supports UTF-16 files ([<strong>Global Utility Functions</strong>](doc:global-utility-functions))</p>
<h4 id="brightscript-language-fixes">BrightScript language fixes</h4>
<ul>
<li>Print now always explicitly prints the component type for enumerable
objects. Previously, it would just print the contents of enumerable
objects, and did not identify the container object itself, which
could lead to confusion ([<strong>Program Statements</strong>](doc:program-statements)).</li>
<li><p>Print and FormatJSON no longer have side effects on enumation state
when accessing enumerable objects (associative array, array, list,
and so forth) ([<strong>Program Statements</strong>](doc:program-statements), [<strong>Global Utility Functions</strong>](doc:global-utility-functions))  </p>
<p>Example:  </p>
<p>aa={a:2,b:1,c:3} : for each x in aa : print x;&quot; from &quot;;aa : end
for  </p>
<p>Previously:</p>
<p>a from &#39; ...  </p>
<p>Now:  </p>
<p>a from &#39; ...<br>c from &#39; ...<br>b from &#39; ...</p>
</li>
</ul>
<h4 id="component-changes">Component changes</h4>
<ul>
<li>roTuner and associated interfaces have been added to support playing
broadcast and cable content from a tuner
(<strong><a href="/pages/createpage.action?spaceKey=sdkdoc&amp;title=roTuner&amp;linkCreation=true&amp;fromPageId=1611545">roTuner</a></strong>)</li>
<li>roProgramGuide and associated interfaces have been added to support
broadcast content program guide data
(<strong><a href="/pages/createpage.action?spaceKey=sdkdoc&amp;title=roProgramGuide&amp;linkCreation=true&amp;fromPageId=1611545">roProgramGuide</a></strong>)</li>
<li>roSlideShow SetLoop
added (<strong>[roSlideShow](doc:roslideshow)</strong>)</li>
<li>roTextureManager ifHttpAgent
added (<strong>[roTextureManager](doc:rotexturemanager)</strong>)</li>
<li>roUrlTransfer GetToString(), AsyncGetToString() now support UTF-16
files (<strong>[roUrlTransfer](doc:rourltransfer)</strong>)</li>
<li>roAppManager/ifAppManager SetUserSignedIn() method added to indicate
that a user has signed into the app
(<strong>[roAppManager](doc:roappmanager)</strong>)</li>
<li>roArray/ifArraySort Sort() method was
added (<strong>[roArray](doc:roarray)</strong>)</li>
<li>roArray/ifArraySort SortBy() method was
added (<strong>[roArray](doc:roarray)</strong>)</li>
<li>roArray/ifArraySort Reverse() method was
added (<strong>[roArray](doc:roarray)</strong></li>
<li>roString/ifStringOps Split() method was
added (<strong>[roString](doc:rostring)</strong>)</li>
</ul>
<h2 id="roku-os-7-0">Roku OS 7.0</h2>
<p><strong>Initial rollout date:</strong> November 6, 2015</p>
<h5 id="scenegraph-xml-api">SceneGraph XML API</h5>
<p>A new user interface programming API has been added. Information on this
new API can be found in:</p>
<ul>
<li>[SceneGraph XML Guide](doc:overview)</li>
<li>[SceneGraph Reference](doc:core-concepts)</li>
<li>[SceneGraph XML Tutorial](doc:overview)</li>
</ul>
<h4 id="roku-search-and-follow">Roku Search and follow</h4>
<p>Users can now follow content from the Roku homescreen <strong>Search</strong> in
addition to <strong>My Feed</strong>. This allows you to have users who choose to
follow a particular search term (a movie, director, or an actor) to
receive automatic updates when your latest content includes that term.</p>
<h4 id="roku-4-support">Roku 4 support</h4>
<p>Support is now included for the Roku 4 Streaming Media Player. This Roku
Player features greatly enhanced video resolution output up to
2160p (ultra-high definition, or UHD). This Roku Player also allows
the creation and use of user interfaces with 1080p (full
high-definition, or FHD) resolution. The Roku 4 Streaming Media Player
includes a much more powerful quad core ARM processor and decoding
support for the HEVC (high-efficiency video code) codec to allow
efficient streaming of 2160p video content.</p>
<h4 id="ecp-install-command">ECP install command</h4>
<p>An install command has been added to the ECP to allow deep-linking to
uninstalled apps.</p>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>Associative array literals can now specify key names as string
literals (quoted strings).</li>
<li>added aa.Keys to return the keys for an associative array</li>
<li>added a 64-bit LongInteger type</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<p><strong>roAssociativeArray</strong></p>
<ul>
<li>added Function Keys() As Object</li>
</ul>
<p><strong>roDeviceInfo</strong></p>
<ul>
<li>added Functions [CanDecodeVideo()](doc:ifdeviceinfo#candecodevideovideo_format-as-object-as-object),
[CanDecodeAudio()](doc:ifdeviceinfo#candecodeaudioaudio_format-as-object-as-object),
and [GetDrmInfo()](doc:ifdeviceinfo#getdrminfo-as-object)
to [ifDeviceInfo](doc:ifdeviceinfo) interface.</li>
</ul>
<h2 id="roku-os-6-2">Roku OS 6.2</h2>
<p><strong>Initial rollout date:</strong> April 9, 2015</p>
<h4 id="roku-advertising-framework">Roku Advertising Framework</h4>
<ul>
<li>Added the [Roku Advertising Framework](doc:advertising) to natively integrate advertising capabilities</li>
</ul>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>Now supports embedded quotation mark characters in string literals</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<h5 id="ifdatetime-changes">ifDateTime changes</h5>
<ul>
<li>Added [GetDayOfWeek()](doc:ifdatetime#getdayofweek-as-integer) as Integer</li>
<li>Added [GetTimeZoneOffset()](doc:ifdatetime#gettimezoneoffset-as-integer) as Integer</li>
<li>Added [ToISOString()](doc:ifdatetime#toisostring-as-string) as String</li>
</ul>
<h5 id="ifdraw2d-changes">ifDraw2D changes</h5>
<ul>
<li>Added [DrawPoint(x as Integer, y as Integer, size as Float, rgba as Integer) as Void](doc:ifdraw2d#drawpointrgba-as-integer-size-as-float-x-as-integer-y-as-integer-as-void)</li>
</ul>
<h2 id="roku-os-6-1">Roku OS 6.1</h2>
<p><strong>Initial rollout date:</strong> December 4, 2014</p>
<h4 id="brightscript-language">BrightScript language</h4>
<ul>
<li>now supports integer division operator &#39;\&#39;</li>
<li>now supports integer bitshift operators &#39;&lt;&lt;&#39; and &#39;>>&#39;</li>
<li>roAssociativeArray Count function was added</li>
<li>parameter validation diagnostics have been added to core components</li>
<li>roString Replace method was added.</li>
<li>ParseJSON bug fixes</li>
<li>FormatJSON bug fixes</li>
<li>global function FindMemberFunction was added.</li>
<li>floats are now auto-boxed for method calls</li>
<li>global function Val has a new overload for parsing from hexadecimal
strings etc.</li>
<li>global function StrI has a new overload for formatting hexadecimal
strings etc.</li>
</ul>
<h4 id="brightscript-debugger">BrightScript debugger</h4>
<ul>
<li>bscs &#39;Summarize BrightScript Component instances&#39; command was added</li>
<li>brkd &#39;Break on BrightScript diagnostics&#39; command was added</li>
</ul>
<h4 id="brightscript-components">BrightScript components</h4>
<h5 id="rodeviceinfo-changes">roDeviceInfo changes</h5>
<ul>
<li>Added Function GetModelDetails() As Object</li>
<li>Added Function GetFriendlyName() As String</li>
<li>Added Function GetCreationTime(Void) As String</li>
<li>Added Function GetAudioDecodeInfo(Void) As Object</li>
<li>Added Function GetVideoDecodeInfo(Void) As Object</li>
<li>Added Function GetAdvertisingId(Void) As String</li>
<li>Added Function IsAdIdTrackingDisabled(Void) As Boolean</li>
<li>Added Function GetPublisherId(Void) As String</li>
<li>Added Function GetRandomUUID(Void) As String</li>
</ul>
<h5 id="romessagedialog-changes">roMessageDialog changes</h5>
<ul>
<li>Added Function UpdateButton(id As Integer, title As String) As Boolean</li>
</ul>
<h2 id="roku-os-5-4">Roku OS 5.4</h2>
<p><strong>Initial rollout date:</strong> April 14, 2014</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Two new content metadata structures for controlling closed captions:
SubtitleConfig and SubtitleTracks. Details of how to use these to
control captions [can be found here](doc:closed-caption).</li>
<li>Two new caption renderer functions for retrieving all caption tracks
in a stream and for setting the current track:
ifCaptionRenderer.GetSubtitleTracks() and ChangeSubtitleTrack().
Details about these two new functions [can be found here](doc:ifcaptionrenderer#getsubtitletracks-as-object).</li>
<li>Bug fix: On the 2450X and 2500X platforms, the
ifChannelStore.DoOrder() function was always returning false even if
the corresponding purchase was successful.</li>
</ul>
<h2 id="roku-os-5-3">Roku OS 5.3</h2>
<p><strong>Initial rollout date:</strong> December 17, 2013</p>
<p>Version 5.3 introduced user configurable closed caption settings. The
Roku settings UI now includes controls for turning captions on or off at
the system level. These settings control closed caption behavior for
all apps. Closed captions on instant replay are also controlled
from these settings.</p>
<h2 id="roku-os-5-2">Roku OS 5.2</h2>
<p><strong>Initial rollout date:</strong> October 8, 2013</p>
<p>Version 5.2 introduced a new security model for sideloading apps.
Accessing the web interface for the device now requires a userid and
password to log in. Please see the article here for more details:
<a href="http://blog.roku.com/developer/2013/10/08/security-enhancements-added-to-channel-development">http://blog.roku.com/developer/2013/10/08/security-enhancements-added-to-channel-development</a></p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Security enhancements to app sideloading</p>
</li>
<li><p>roListScreen.SetUpBehaviorAtTopRow()</p>
</li>
<li><p><span>Closed Captioning support added to </span>roVideoPlayer,
roCaptionRenderer added</p>
</li>
<li><p>HLS ID3 events added to BrightScript</p>
</li>
</ul>
<h2 id="roku-os-5-1">Roku OS 5.1</h2>
<p><strong>Initial rollout date:</strong> August 5, 2013</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>In-stream 608 captions support</p>
</li>
<li><p>updates to roVideoScreen events</p>
</li>
<li><p>FLAC container support (local playback)</p>
</li>
</ul>
<h2 id="roku-os-5-0">Roku OS 5.0</h2>
<p><strong>Initial rollout date:</strong> June 5, 2013</p>
<p>Version 5.0 of the Roku OS was released to all second and later
generation devices. The home screen introduces a completely new look
and feel for navigating my apps, the app store, and settings.
This release does not introduce any new screens or templates to the SDK.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Updated home screen user interface</p>
</li>
<li><p>Increase Brightscript function limit beyond 1024</p>
</li>
<li><p>Miscellaneous fixes for gaming remotes</p>
</li>
<li><p>Memory improvements to the OS</p>
</li>
<li><p>Improved ECP security</p>
</li>
</ul>
<h2 id="roku-os-4-9">Roku OS 4.9</h2>
<p><strong>Initial rollout date:</strong> November 12, 2012</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li><p>Roku billing - in-app subscription support in BrightScript</p>
</li>
<li><p>SMPTE TT CC (MP4, HLS, Smooth Streaming)</p>
</li>
<li><p>RoTextureManager 2D component</p>
</li>
</ul>
<h2 id="roku-os-4-8">Roku OS 4.8</h2>
<p><strong>Initial rollout date:</strong> July 3, 2011</p>
<p>We&#39;ve had our heads down working diligently on new firmware features and
supporting new hardware. Hello Streaming Stick! In v4.8, we have some
new developer SDK features to share with you. We are continuing our
Roku OS version numbering scheme with v3.1 currently released to all
&quot;Classic&quot; or &quot;Roku1&quot; models and major version 4.8 coming soon to all
Roku2 models.</p>
<p>We are maturing as a company, and with that comes new legal
requirements. In v4.8, we are asking our development community to agree
to the development terms directly on the box before it can sideload and
apps. As soon as your developer mode box updates to v4.8, you may
find you are unable to sideload apps. You will need to re-enable
developer mode by entering the following remote control sequence: 3x
Home, 2x Up, Right, Left, Right, Left, Right. After entering &quot;Enable
Installer&quot; on the secret screen, it will present you with the developer
terms that you must read and scroll through and then click down to &quot;I
Agree&quot;. The box will then reboot with the sideloading installer
enabled.</p>
<p>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Internationalization and Localization support. (Currently
localizing to en_US, fr_CA, es_ES, de_DE)</span></li>
<li>Smooth Streaming with PlayReady Support</li>
<li>In-app purchasing of new content, upgrades, features.</li>
<li>Native, fast [ParseJSON()](doc:global-utility-functions#parsejsonjsonstring-as-string-as-object)
function.  </li>
</ul>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>Remember to re-enable developer mode in v4.8!</p>
<h2 id="roku-os-4-1">Roku OS 4.1</h2>
<p><strong>Initial rollout date:</strong> December 21, 2011</p>
<p>With v4.1, Roku is now supporting the “Roku 2” generation of boxes.
We’ve tried to keep the Roku SDK compatible across all the different
models and have highlighted hardware and SDK differences in a new
Section 1.4 of the Developer Guide. Our Roku OS version
numbering requires a little explanation as major version 3 is currently
released to all “Classic” models and major version 4 is release to all
“Currently Selling” models. We continue to have minor releases planned
on both of these major release branches. All features from the v3.0 beta
have made it into the final v3.0 and 4.1.</p>
<p>We understand that we haven’t exposed all the functionality the Roku 2
platform has to offer to the entire Roku Developer Community. Roku has a
good track record of taking security issues seriously. There are many
such issues to work through before we can expose low level OpenGL
interfaces in a secure manner that the content owners in our community
are also comfortable with. We are working diligently toward that end.</p>
<p>We appreciate all the hard work the Roku Developer Community has put
into developing some great applications on the Roku platform. We are
happy that the Roku 2 has been well received by the market and are
looking forward to continued shared success with the Roku Developer
Community and all the great new apps you can create.</p>
<h4 id="new-in-this-release">New in this release</h4>
<p>• Roku 2 platform support.<br>• Brightscript Plugin for Eclipse<br>• Updated videoPlayer sample application<br>• All v3.0 beta features are now fully supported on classic models running v3.0 and Roku 2 models running v4.1:</p>
<ul>
<li>BrightScript v3.0 that includes:<ul>
<li>performance improvements</li>
<li>typed values in function parameters and returns</li>
<li>improved auto-boxing and type promotion</li>
<li>explicit programmer controlled garbage collection</li>
<li>better statement stepping in source level debugger</li>
<li>collections can include intrinsic values rather than only
objects</li>
<li>2D Graphics APIs:<br>• roScreen<br>• roBitmap<br>• roRegion<br>• roCompositor<br>• roSprite<br>• roAudioResource<br>• roFont<br>• roFontRegistry<br>• roFontMetrics</li>
</ul>
</li>
<li>New Platform Components<ul>
<li>roSocketAddress</li>
<li>roStreamSocket</li>
<li>roDataGramSocket</li>
</ul>
</li>
<li>New ECP “input” command to pass user defined input parameters to
your app.</li>
</ul>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>Please note that we have deprecated support for Macrovision and WMV
video. We still have support for CGMS (Copy Guard Management System)
protection for analog outputs and HDCP protection for digital output.
There has been very little use of WMV video, and if anyone has content
out there it can be converted to MP4 with several transcoding
applications, including ffmeg (please see our encoding guide for example
usage).</p>
<h2 id="roku-os-3-0">Roku OS 3.0</h2>
<p><strong>Initial rollout date:</strong> April 18, 2011</p>
<p>We’re making the 3.0 Beta firmware available to all developers who
request it. If your box isn’t already part of the developer beta group,
send a private developer forum message to RokuKevin. Include the serial
number of the Roku units you would like to run the 3.0 beta on.<br>It is very important that all developers regression test their
applications on version 3.0 and note any incompatibilities. You may need
to publish an update to your application to make it compatible with
v3.0.</p>
<p>There are some exciting new features in the v3.0 SDK that will support
developers building 2D games for the Roku box. We encourage all game
developers to support both HD and SD modes. About half of the Roku’s out
there still run in SD mode. We’ve added screen level scaling to support
developers using one set of graphics assets and a single game engine
running in both HD and SD modes. Although v3.0 has not been released to
end users yet, we are now encouraging discussion about v3.0 features on
the developer forum.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>BrightScript v3.0 that includes:<ul>
<li>performance improvements</li>
<li>typed values in function parameters and returns</li>
<li>improved auto-boxing and type promotion</li>
<li>explicit programmer controlled garbage collection </li>
<li>better statement stepping in source level debugger</li>
<li>collections can include intrinsic values rather than only
objects</li>
<li>2D Graphics APIs:<ul>
<li>roScreen</li>
<li>roBitmap</li>
<li>roRegion</li>
<li>roCompositor</li>
<li>roSprite</li>
<li>roAudioResource</li>
<li>roFont</li>
<li>roFontRegistry</li>
<li>roFontMetrics</li>
</ul>
</li>
</ul>
</li>
<li>New Platform Components<ul>
<li>roSocketAddress</li>
<li>roStreamSocket</li>
<li>roDataGramSocket</li>
</ul>
</li>
<li>New ECP “input” command to pass user defined input parameters to
your app.</li>
</ul>
<p>The new 2D Graphics components are considered part of the core
BrightScript language and are documented in the BrightScript Reference.
The new platform components are documented in the Component Reference.
New v3.0 components have their own sections and new methods on
previously existing components are called out with their own “Since
v3.0” sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>BrightScript v3.0 is stricter in some ways than BrightScript v2.0. Areas
in your app with variables that are used before initialized, or return
statements that return a different type than specified in the function
declaration may cause runtime errors in v.30 that may have run
successfully in v2.0.</p>
<p>It is very important that all developers regression test their
applications on version 3.0 and note any incompatibilities. You may need
to publish an update to your application to make it compatible with
v3.0.</p>
<h2 id="roku-os-2-9">Roku OS 2.9</h2>
<p><strong>Initial rollout date:</strong> March 31, 2011</p>
<p>With the release of firmware v2.9 build 1553, we are excited to share
our latest Developer documentation. We have added several new features that
developers can take advantage of. Many of you have already seen the new
Premium Developer Program. With a premium developer account you can
charge for applications in the Roku app store and Roku will handle
the billing for you. To sign up for a premium developer account you
simply need to provide your tax id and agree to the new terms and
conditions. Our new v2.9 SDK helps support paid applications with the
ability to launch the app store to purchase your application. You
can create a free “Lite” app that includes a banner ad that up-sells to
a premium app. When the user clicks on the ad, the “Buy” page is
launched in the app store. There is an example of this in the
roPosterScreen section of the component reference.</p>
<p>Please refer to the Component Reference Section 7 for an introduction to
the two new components in v2.9. The roAudioMetadata component gives you
access to metadata included in many audio files. It recognizes ID3 tags
and supports cover art. The roImageMetadata component gives you access
to metadata in image files.</p>
<p>Version 2.9 updates the grid component by letting the developer control
the “Up” button behavior and giving developers the ability to stack grid
screens without a lot of extraneous code.</p>
<p>Thanks for all  you’ve developed so far. We’re looking
forward to all the new ones you’re busy working on.</p>
<p>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>MKV playback on local USB devices.</li>
<li>Developer control of the Up button behavior on the top row of the
Grid Screen.</li>
<li>Stackable Grid Screens.</li>
<li>Streaming Store can be launched to purchase “Premium” app from
within “Lite” app</li>
<li>Get ID3 tags and other metadata from your audio files</li>
<li>Get EXIF and other metadata from your image files</li>
</ul>
<p>New v2.9 components have their own section in the reference and new
methods on previously existing components are called out with their own
“Since v2.9” sections.</p>
<h2 id="roku-os-2-8">Roku OS 2.8</h2>
<p><strong>Initial rollout date:</strong> November 18, 2010</p>
<p>It’s been a short time since we last updated you, but we still have a
few things worth sharing in this release of the SDK. We’ve added
developer specified HLS stream switching strategies, new commands in the
External Control API, and customizable GridScreen layouts.</p>
<p>We appreciate your support of the Roku platform and always welcome your
feedback.<br>The Roku Team</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Developer controlled HLS stream switching strategies for improved
playback ability.</li>
<li>Multiple Grid layouts: flat-movie, flat-portrait, flat-landscape,
flat-square, and flat-16x9</li>
<li>Developer customized Grid Focused Border image, and Grid Descripton
callout box image.</li>
<li>Use .png and .gif images as Grid posters.</li>
<li>Ability to get the Roku’s IPAddress within your app. This will
enable the External Control API to be utilized directly within your
app.</li>
</ul>
<p>New v2.8 components have their own section in the reference and new
methods on previously existing components are called out with their own
“Since v2.8” sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>We have maintained backward compatibility with the v2.7 SDK. Some have
experienced video playback issues with their HLS streams. The number one
issue was incorrect aspect ratios and resolutions. We’ve addressed most
of these issues with a new v2.8 build (1158), but we have requested that
any other HLS playback regression issues from v2.7 be posted to a sticky
thread on our forum. We will attempt to address them all in a timely
manner.</p>
<h2 id="roku-os-2-7">Roku OS 2.7</h2>
<p><strong>Initial rollout date:</strong> November 7, 2010</p>
<p>This release brings several new features to the Roku SDK, as well as
support for the additional hardware capabilities of the new Roku models.
The new models add 1080p playback capability and a new 12 button remote
control. The new remote control will come with the Roku XD and Roku XDS.
The Roku HD will continue to ship a 9 button remote. However, the 12
button remote will be available for purchase separately. The 12 button
remote will also work on the older Roku models, providing the installed
base access to the new button capabilities with only a remote control
purchase. While not all users will have the 12 button remote, we are
strongly encouraging developers to add support for the three new remote
control buttons.</p>
<p>The “Instant Replay”, is implemented entirely in the Roku OS and will
work on all apps during video playback without any changes to
developer apps. The “Back” button works by default on most screens,
but needs to be enabled on dialogs if the screen close behavior is
desired. The “Info” button is intended to provide additional contextual
information at various points within apps. It is up to developers to
use the new features in the roMessageDialog and support the “Info”
button usage pattern of launching context menus and dialogs. We have
included a simpleinfo sample app in this release that illustrates the
info button usage.</p>
<p>We are also introducing 1080p video playback support on the Roku XD and
XDS models. Updated Information on supported encoding resolutions is
included in the new Encoding Guide. We encourage developers to add 1080p
streaming content at bitrates below 4.0Mbps.</p>
<p>A much anticipated addition to the SDK is the new roGridScreen component
which presents the user with a scrolling grid as an alternative to the
poster screen interface. The simplegrid sample app demonstrates how to
use this new feature.</p>
<p>Below is the complete list of new features in this release.</p>
<p>We appreciate your support of the Roku platform and welcome your
feedback.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Support for new Remote Buttons - “Back”, “Instant Replay”, and
“Info” buttons support ease of use, better trick play, and
contextual menus.</li>
<li>1080p playback support – When the user sets his display to 1080p,
any content with meta data parameters for FullHD and a FrameRate of
24 or 30 will playback at 1080p 24 fps or 1080p 30 fps.</li>
<li>Grid Component – The grid screen enables users to easily navigate
large collections of content.</li>
<li>External Control Protocol – The ability to control the Roku over the
network. It’s now possible to create sophisticated iPhone, Android,
and Blackberry apps.</li>
<li>Paragraph Screen Default Menu Item – You can now control the button
that is highlighted on the paragraph screen so that selection
dialogs work as expected.</li>
<li>Message Dialog Overlay Support – Expected to be popular when used in
conjunction with the “Info” button to display contextual
information.</li>
<li>Content Meta-Data parameters – New parameters provide more control
over video playback: min/max bandwidth, and audio stream selection.</li>
<li>New Documentation Guides – The External Control Guide illustrates
how to create remote control apps that work over the network. The
Encoding Guide gives useful guidelines for encoding video content
that is compatible with the Roku Streaming Player.</li>
<li>Simpleinfo sample application - shows how to use the roMessageDialog
with overlay on top of a roPosterScreen when the “Info” button is
pressed.</li>
<li>SimpleGrid sample application – shows how to use the roGridScreen
component to display many rows of items.</li>
<li>AudioApp sample application – adds an application screensaver.</li>
</ul>
<p>New v2.7 components have their own section in the reference and new
methods on v2.4 components are called out with their own “Since v2.7”
sections.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>We have maintained backward compatibility with the v2.7 SDK. However,
developers need to be aware of the new hardware models and update their
apps to take advantage of the new features. If your back end
services do any type of authentication based on model numbers, or you
have any code that is based on model numbers you will need to update
your code.  </p>
<p>If any of your BrightScript code is enabling certain features based on
model number, we have a new roDeviceInfo.HasFeature() method that will
enable you to code this logic in a more forward-looking manner.If you
don’t account for the new “Back” and “Info” buttons in your code, users
may think your app does not behave correctly.</p>
<p>On most screens, the back button will automatically send an event that
matches the isScreenClosed() predicate. However, this behavior would
break many modal dialogs that do not expect to receive an
isScreenClosed()event because they are waiting for a state change or
reacting to user input that must be answered. We chose not to break
these apps and instead did not enable the back button by default on
the roMessageDialog component. We did provide a method to enable the
back button on roMessageDialogs that can successfully
handle an isScreenClosed() event. You should survey your app for any
roMessageDialog components that should enable the back button with
EnableBackButton(true). The “Info” button will enable you to pop-up any
screen of your choosing. There are two new events added to support this
new button. Events matching isButtonInfo()return the button focus of any
on screen buttons in when the Info remote key is pressed. Events
matching isListItemInfo()return the index of the focused poster when the
Info remote key is pressed. The simpleinfo sample application shows
basic support for the “Info” button that also demonstrates an overlay
dialog on a poster screen. When isRemoteKey()events are propogated to
your script, the event.GetIndex() for the Info key is 10.</p>
<h2 id="roku-os-2-6">Roku OS 2.6</h2>
<p><strong>Initial rollout date:</strong> June 28, 2010</p>
<p>The 2.6 SDK release adds a number of new components to the Roku Platform
SDK and introduces a new user interface for developers on the Streaming
Store for managing your apps.</p>
<p>The Streaming Store Developer Site now provides support for managing
application dependencies based on minimum required Roku OS version or
hardware capabilities. For example, if your application requires the
features of a specific firmware release or a hardware feature, you can
specify this dependency and ensure your application is only published to
the correct systems. We recommend studying the App Packaging and
Publishing Guide for more information about the Streaming Store versioning
support.</p>
<p>We have added a number of new components to the SDK and expanded the
API’s for some of our existing components. Be sure to check out the
new roImageCanvas component, which allows much greater freedom for
laying out custom types of screens. We’ve also added API’s to open up
the USB port on the Roku XR for developers, support for HTTP Live
Streaming, plus many other new features.</p>
<p>We hope you enjoy these new features and we’re anxious to see the new
types of applications that you develop with these capabilities. Thanks
again for your support.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>The 2.6 SDK release adds additional events. Please be sure your event
loops ignore unknown events. If your code is exiting event loops rather
than just ignoring unknown events your application may have undefined
behavior.</p>
<p>Important Notes</p>
<ul>
<li>Please review the App Packaging and Publishing guide for more
information about the new versioning support and how it impacts your
application deployments in the Streaming Store.</li>
<li>We have changed the behavior of the Home remote control key. In
v2.6, it now immediately kills your application and returns to the
home screen. If your app was previously relying on a graceful
application exit to do cleanup and bookkeeping, you will need to
modify your application. You will want to modify your app to
periodically update playback positions, positions in poster screens,
search results, etc. This should not wait until application exit, as
that could happen to you at any time.  </li>
</ul>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>HTTP Live Streaming (HLS) – This is Roku’s implementation of Apple’s
adaptive bitrate streaming solution. This feature provides support
for both windowed, “live” and adaptive bit-rate VOD streaming
capabilities.</li>
<li>Image Canvas Screen – A clean slate for creating custom screens.
This object will allow you to place text and graphics wherever on
the screen you desire. You can see an example in the SDK clock
sample app.</li>
<li>Custom Font Support – Include your own TrueType (TTF) or Open Type
(OTF) fonts in your application for use on the Image Canvas.</li>
<li>CA-Cert Bundle – For applications that refer to many different
feeds, we’ve included a collection of CA-Certs that is the trusted
set from the Firefox browser in a common filesystem. Any application
can now easily trust this same set without increasing the size
of its package.</li>
<li>Customizable Video Player – A video player that allows you play a
video in a region on the screen and/or programmatically control
playback. When used in conjunction with Image Canvas, you can
combine video, images and text on a single screen.</li>
<li>USB support – For those of you that have Roku XR boxes or want to
develop applications that make use of USB storage. Basic support for
USB hotplug events and automounting of USB volumes is included in
v2.6. Support for a variety of USB devices and the VFAT, NTFS, HFS
and HFS Plus file systems.</li>
<li>File System access – You will be able to enumerate available file
systems and access the content stored on them.</li>
<li>SRT subtitle support – If the content you are playing has an
available SRT file for subtitles, enabling subtitle display will be
as simple as specifying a path to the SRT file.</li>
<li>ScreenSavers – Create standalone screen saver applications that can
run whenever the Roku Streaming Player is idle or create a custom
screen saver for your app.</li>
<li>Perl-Compatible Regular Expressions – String manipulation just got a
whole lot easier!</li>
<li>Application Logging Support – It’s now easier to gather statistics
in your application and send them back to your own logging server.</li>
</ul>
<p>There are lots of other changes in this release and these are just some
highlights that we wanted to specifically mention. Please check the
Component Reference for additional details. New v2.6 components have
their own section in the reference and new methods on v2.4 components
are called out with their own “Since v2.6” sections.</p>
<h2 id="roku-os-2-4">Roku OS 2.4</h2>
<p><strong>Initial rollout date:</strong> December 17, 2009</p>
<p>This release unites our Streaming Store development activities with the
SDK. There are a few implications for developers during the transition
that we’d like to highlight. Our legacy applications will not appear on
the player until it syncs to our Streaming Store. The Streaming Store is not
yet deployed in Production, so Netflix and Amazon will not appear on
your player after the upgrade. These apps will eventually reappear on
your players as the backend services are upgraded.</p>
<p>We’ve provided this firmware update early so that you have an
opportunity to develop with this release before the Streaming Store beta
is available. After you update your software build, the only features
that will be visible on the home screen will be Settings and any
developer application that you’ve installed manually. We plan to
distribute at least one more SDK release before we get to feature
complete for the
launch, so we’re still adding more features and fixes on your behalf. We
think that most of these enhancements are things that will be useful to
a wide variety of developers.</p>
<h4 id="compatibility-issues">Compatibility issues</h4>
<p>There have been significant changes to our file system APIs. We’ve
implemented these changes so that they are backward compatible for a
limited time. Any deprecated API calls will be displayed in the debugger
with a warning message. The samples applications were updated to use the
new file specification format. Please refer to the BrightScript and
Component Reference manuals for more information. Backward compatibility
will be removed in the next release, so please update as soon as
possible.</p>
<h4 id="update-instructions">Update instructions</h4>
<p>The Roku player will automatically update to the new version within the
next 1-2 days.</p>
<p>We hope you force your player to download the new version immediately by
following these steps<br>1) Press the HOME button on the remote control.<br>2) Use the arrow keys to highlight the “settings” icon and press the
SELECT button.<br>3) Press the right arrow several times until you see “player info” and
press SELECT.<br>4) Highlight “check for update” and press SELECT.<br>5) SELECT “yes”.<br>5) Wait for the software to download, and then SELECT “ok” to
restart.<br>Note: If you already have the new version, a message will appear letting
you know your version is current.</p>
<h4 id="important-notes">Important notes</h4>
<ul>
<li>This release includes new tools for packaging your application for
deployment. Included in the SDK is the ChannelPackagingAndPublishing
document. This document provides a step-by-step guide to the
packaging process. Please be sure to review this document, since it
will answer many questions about how applications will be deployed
onto the Streaming Store.</li>
<li>The Streaming Store linking screen is included in this release and
there are a few situations you could encounter it and get stuck. If
you reset your box to factory defaults or change your network
settings, this could occur. We don’t want you to link your box
at this time, so we’ve provided the following instructions to help
you bypass this screen if necessary.</li>
</ul>
<p>Display the secret screen using the following key sequence:</p>
<p>Home 5x, FastForward 3x, Rewind 2x</p>
<p>After pressing this key sequence, the “secret screen” will appear.
Select the “cycle channel store server” option until the text “<bypass
account linking\>” is displayed and then press the “back” button to exit
the screen.</p>
<p>The software update options on this screen are controlled via the server
and are not functional for developers. Just ignore these options, since
they won’t work anyway.</p>
<h4 id="new-in-this-release">New in this release</h4>
<ul>
<li>Documentation: There continue to be lots of changes to the
documentation set, mostly to the Component Reference manual. The
documentation has been reformatted with section numbers to make
cross-referencing easier. New features have been added
and additional details were provided on some video playback topics.
The new file system changes are included as well as lots of API
updates. There are several new docs in the set, such as the Channel
Packaging and Publishing document mentioned above.</li>
<li>More Theme Attributes – We added quite a few more attributes
changing colors within the UI. The paragraph and registration
screens now support color attributes, as well as font color changes
to the buttons and filter banners. These still work the same way
as they have in the past and allow you to set an HTML Hex color
value to override the default color scheme.</li>
<li>Flexible Image Scaling – We’ve added new scaling options for artwork
that’s used in the Poster Screen, Slide Show or Banner Ads. The new
options allow you to specify how you’d like odd-sized artwork scaled
to file the destination area.</li>
<li>Image Styles – We’ve added additional styles to several screens for
16x9 and square aspect ratio artwork. There are more changes in the
works in this area, which will be coming soon. Many of you have
different size and aspect ratio artwork and providing more types of
frames, plus better scaling capabilities will help to take advantage
of all the existing artwork out there.</li>
<li>Display Mode API – Many developers have asked how they can find out
the current display mode for the device. Check out the roDeviceInfo
component for new APIs to access info about the users display
settings.</li>
</ul>
<p>There are lots of other changes in this release and these are just some
highlights that we wanted to specifically mention. Please check the
documentation for additional details.</p>
`}</HTMLBlock>

<br />
