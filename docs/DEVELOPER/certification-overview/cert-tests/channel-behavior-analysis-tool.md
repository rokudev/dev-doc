---
title: "App Behavior Analysis tests"
excerpt: 'Run automated certification tests on your app using the App Behavior Analysis tool'
deprecated: false
hidden: false
metadata:
  title: 'App Behavior Analysis tests | Roku Developer Docs'
  description: 'The App Behavior Analysis tool lets developers run self-serve automated certification tests to verify performance and deep linking requirements for their apps.'
  robots: index
next:
  description: ''
---


> Subscription (SVOD), ad-supported (AVOD), and free apps must pass automated certification testing in order to publish to the Streaming Store. Apps cannot be submitted for publishing without passing automated certification testing.

The [App Behavior Analysis tool](doc:channel-publishing-guide), which is a part of the app builder flow in the Developer Dashboard, enables developers to run self-serve automated certification tests on their apps. The tool verifies whether apps meet the following [performance](doc:certification) and [deep linking](doc:certification) certification requirements:

| Test | What it verifies | Certification criterion |
| --- | --- | --- |
| App launch performance | The app launches to a fully rendered home screen within 15 seconds. The app must fire the `AppLaunchComplete` signal beacon so the tool can measure launch time. See [Measuring app performance](doc:measuring-channel-performance). | [3.2](doc:cert-tests) |
| App content play performance | Content starts playing within 8 seconds of initiation. Apps that use the Roku video player need no extra work. Apps with a custom video player must fire the video start beacons. | [3.6](doc:cert-tests) |
| App deep linking | The app supports deep linking for all media types, including `series`, per the [deep linking policy](doc:implementing-deep-linking). When the app is already running, direct playback commands deep link to content without a launch delay, using [roInputEvent](doc:roinputevent). | [5.1](doc:cert-tests) |

## Tests for authenticated apps

For apps that require customers to sign in, the tool runs the same tests after signing in with the [sign-in and sign-out scripts](doc:authenticated-cert-testing) you upload. The tool runs the following tests:

| Test | Category | Certification criterion |
| --- | --- | --- |
| Sign In Flow | Setup | N/A |
| App Launch Performance | Performance | [3.2](doc:cert-tests) |
| App Content Play Performance | Performance | [3.6](doc:cert-tests) |
| App Deep Linking Basic | Deep Linking | [5.1](doc:cert-tests) |
| Sign Out Flow | Teardown | N/A |

The tool runs the sign-in script to sign in to the app, runs the performance and deep linking tests, and then runs the sign-out script to return the app to its signed-out state. Content play and deep linking tests can run more than once, for example once for each media type.

If the sign-in and sign-out scripts are missing, the tests fail with the error "Required RASP scripts for sign-in/sign-out flow not provided."
