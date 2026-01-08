---
title: "Direct to Play"
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

# Direct to Play

Apps participating in [Roku Search](/docs/developer-program/discovery/search/implementing-search.md) can further enhance their user experience and increase engagement by implementing Direct to Play. This feature allows customers to take advantage of the convenience and speed of voice commands to find and start watching content faster.

> Public apps must implement Direct to Play to pass [certification](/docs/developer-program/certification/certification.md#5-deep-linking).

## Overview

Direct to Play accelerates content delivery by supporting spoken commands to launch and play videos and audio. Customers can use their Roku voice remote, Roku Touch, or mobile app to tell their device to play a movie, TV show, song, or other content. Their Roku device will then directly launch the app where the customer is entitled to the requested content and begin playback.

For Direct to Play to directly launch content into playback on your app, the requested content must be in your app's catalog in Roku Search, your app must already be installed, your app must handle deep links to play the requested content, and your app must send the authentication status of customers to Roku.

If customers are entitled to the requested content on multiple apps, the app that is launched is based on the order specified in [Implementing Roku Search](/docs/developer-program/discovery/search/implementing-search.md). If the requested content is available on multiple apps of the same type (for example, the customer is entitled to content on two or more SVOD apps), the user selects on which app to watch the content.  

## Requirements

To participate in Direct to Play, your app must support the following integrations:

1. [Roku Search](/docs/developer-program/discovery/search/implementing-search.md). Enables customers to find content on your app.

2. [Deep linking](/docs/developer-program/discovery/implementing-deep-linking.md). Enables the requested content to be launched directly into playback on your app.

   > Deep linking requires that apps use [bookmarks](/docs/developer-program/media-playback/bookmarking.md) to identify the playback position of content. Therefore, apps participating in Direct to Play may not use resume/start over screens when handling voice commands to play content. When a customer tells their device to play content they have already started watching, playback must automatically resume at the stored playback position.

3. [roInput](/docs/developer-program/discovery/implementing-deep-linking.md#implementing-deep-linking). Prevents your app from re-launching when it is handling deep link requests and is already running.

4. [Authentication status events](/docs/developer-program/discovery/search/prioritizing-authenticated-channels-in-roku-search.md) (for SVOD and TVE apps). Communicates the authentication status of customers to prioritize your authenticated app above non-authenticated ones in Roku Search.

## Video demo

For a video demonstration of Direct to Play, see the [Voice overview guide](/docs/features/voice/overview.md).
