---
title: Roku Search overview
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
# Implementing Roku Search

Roku Search aggregates content from participating apps into a single, indexed search feed. It helps users find content quickly by entering or saying the name of a movie, TV show,  actor/actress, and so on. By participating in Roku Search, any content in your app that matches a query is automatically listed in the search results. This provides opportunities to convert searches into subscriptions and rentals, drive users to your app, and increase engagement.

> This document covers the step to prepare and submit your app to participate in Roku Search. To review the Roku Search feed schema itself, see the [Search feed](/docs/specs/search/search-feed.md) specification.

## Overview

Roku Search is listed in the main menu of the Roku home screen. Users can use their Roku remote control or Roku mobile app to enter or say their search, and then Roku Search displays content matching the query. If the search is for an actor, actress, or director, users can select content related to the person or view their filmography and then select content. The search results also include [Roku Zones](#roku-zones), which users can select to view a curated selection of content related to the query from apps across the Roku platform.

![roku815px - search results](https://image.roku.com/ZHZscHItMTc2/search-young-rock-query.jpg "searchresults")

When users select a content item, the content details screen provides options for watching the item (from free or subscription). It also provides information about the item such as the title, star rating, release year, parental rating, run time, genre, description, cast, and director.

![roku815px - search channels](https://image.roku.com/ZHZscHItMTc2/search-young-rock-channels.jpg "searchchannels")

Users can then select an app, which launches it and takes them directly to the selected content or a content springboard (via [deep linking)](/docs/developer-program/discovery/implementing-deep-linking.md).  If the app is not already installed, it is first added upon being selected.

After completing a search, users can add the results to My Feed, which provides updates on previous searches (for example, a newly added movie starring a previously searched actress).