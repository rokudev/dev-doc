---
title: "Certification testing"
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


<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit13-cert-testing-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit13-cert-testing.jpg" width="720" height="480" controls />
## About this lesson

This lesson describes how to prepare your app to be published to the Roku Streaming Store. It explains how to use Roku's test automation software and tools to verify that your app's design and performance meet all of Roku's certification criteria.

This lesson highlights how your Roku device test suite should not only include the current devices used by Roku for certification testing, but also contain as many supported devices as possible to optimize app performance for users across all Roku devices.

It explains how you can write state-driven UI test cases for app purchasing, performance, deep linking, and other certification-related criteria using the [Roku Robot Framework Library](doc:robot-framework-library), [Roku JavaScript library](doc:javascript-library), another test framework, or a programming language such as Python, Java, or Go.  

It provides a quick demo of Roku's Static Analysis tool, which detects certification-related issues with your app's code and must be passed in order for your app to be published to the Streamimg Store. It also summarizes the Channel Behavior Analysis tool, which can be used for free and ad-based apps to verify that they meet certification criteria related to performance and deep linking. It briefly covers the BrightScript Profiler, which you can use to identify parts of your app's code where you can improve performance and memory usage.

This lesson concludes by reviewing key tips for optimizing an app's performance.

##  Notes

In the demo of the Channel Behavior Analysis tool, the video uses the SceneGraph Developer's sample app, which includes subscriptions. However, the Channel Behavior Analysis tool is only intended for free and ad-based apps. As a result, the tool will report failures when trying to verify the app's video launch times and deep links. This is because the playback of video requires the test device to be linked to the developer's in-app products.

## Resources


<table>
<thead>
<tr>
<th>Item</th>
<th>Location</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/docs/developer-program/certification/certification.md">Certification criteria</a></td>
<td>Review the Roku app certification criteria before beginning development of your Roku app. Understand requirements for advertising, purchases, performance, fundamental app operation features, deep linking and the app UI.</td>
</tr>
<tr>
<td><a href="/docs/specs/hardware.md">Hardware specifications</a></td>
<td>View the specs for the current and updatable Roku devices that you can include in your hardware test suite. This document lists the performance capabilities, including CPU and RAM, for Roku streaming players, TVs, and smart soundbars.</td>
</tr>
<tr>
<td><a href="https://www.roku.com/products/players">Roku Streaming Players</a></td>
<td>Purchase Roku devices for your hardware test suite.</td>
</tr>
<tr>
<td><a href="https://github.com/rokudev/automated-channel-testing">Roku test automation software</a></td>
<td>Download Roku's test automation</td>
</tr>
<tr>
<td><a href="/docs/developer-program/dev-tools/automated-channel-testing/automated-testing-overview.md">Automated app testing guide</a></td>
<td>Read how to use Roku's test automation software tools to write and execute test cases, including app purchasing, performance, deep linking, and other certification-related testing.</td>
</tr>
<tr>
<td><a href="https://stb-tester.com/roku">stb-tester</a></td>
<td>Get more information about the stb-tester, which is a small hardware device that you connect to your Roku device and use for executing automated test scripts. <br /><br />Note that the stb-tester is not a Roku product or in any way affiliated with Roku; however, many Roku developers do use it for automating their test processes.</td>
</tr>
<tr>
<td><a href="/docs/developer-program/dev-tools/static-analysis-tool/static-analysis-tool.md">Static Analysis Tool guide</a></td>
<td>Read how to use the Static Analysis tool to check the structure and syntax of your app's code for common problems related to RAF, Roku Pay, deep linking, and other certification requirements. Channels must pass Static Analysis testing in order to be published to the Roku Streaming Store.</td>
</tr>
<tr>
<td><a href="http://devtools.web.roku.com/profiler/viewer/">BrightScript Profiler Visualization Tool</a></td>
<td>Use the BrightScript profiler to find where the performance and memory usage of your app code can be improved.</td>
</tr>
<tr>
<td><a href="/docs/developer-program/dev-tools/brightscript-profiler.md">BrightScript Profiler guide</a></td>
<td>Read how to use the BrightScript profiler and learn about the different performance and memory usage metrics it collects and analyzes.</td>
</tr>
<tr>
<td><a href="https://community.roku.com/t5/Roku-Developer-Program/bd-p/roku-developer-program">Roku Developer Forums</a></td>
<td>Interact with the Roku developer community. Participate in discussions on wide range of development topics from using the SceneGraph and BrightScript APIs to using certification testing tools.</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>


## Related

[Task node](doc:task)

[SceneGraph threads](doc:threads)

[SceneGraph development tips for performance](doc:development-tips)

[SceneGraph development tips for data management](doc:data-management)

[TimeGrid node](doc:timegrid)

[Designing for devices](doc:designing-for-device-capabilities)

## How to watch

Play the embedded video above or go to [SceneGraph: Certification testing](https://youtu.be/tOrkAbgtpsY) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.