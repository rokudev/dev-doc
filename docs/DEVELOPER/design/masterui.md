---
title: "Roku's master UI"
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

# Roku's master UI

While developers have the ability to build and design their app to
meet nearly any aesthetics they prefer, users will still be experiencing
your app within the Roku UI experience. This Roku Master UI has its
own set of conventions and system controls. Creating a level of harmony
between these two linked spaces will benefit the user. Below is a list
of considerations.

## Pathways to the app

There are several ways users can launch into your app from the Roku
UI. Not all pathways lead users to your app's home page. This means
your app's overall navigation scheme must be flexible enough to
enable users to effectively start at any layer of your UI and move
around from there.

  - **If your app is not already installed:**
      - All pathways to your app will always lead to a sign-up/in
        flow first

  - **Ads:**
      - Can launch and [deep link](/docs/developer-program/discovery/implementing-deep-linking.md) to almost any level of your app
          - For example, launch and jump straight to a home page, a
            category or collection page, or a details page for a
            specific item

  - **Search and Follow:**
      - If launching the app takes the user to the sign-up/in flow
        first, then immediately afterward the app should still
        remember to take users to the specific content that was selected
        and kicked off this whole process.
      - Otherwise, Search and Follow can launch and deep-link to a
        specific piece of content.
          - For example, a movie or TV episode details page, or a TV
            show season/episode collection page

  - **Streaming Store:**
      - Can launch your app to its home page.

  - **Partner buttons:**
      - Can launch your app to its home page.

## Exiting the app

There are several ways users can exit the app. Some are immediate
and beyond your control, and a few are more controlled. All forms of
exit fall into one of two categories:

1.  Exit and take me to a new place (E.g., Home button).
2.  Exit and return me to where I was prior to launching your app
    (E.g., Back button).

-----

- RokuTVs may auto-power off after a certain amount of time of no
    user-activity.

- Roku will launch a screensaver when there is no video playing and
    there is no user-activity.

- Users can activate any of the following, which will immediately exit your app regardless of where the user was or what the user was doing:

  - Roku remote's Home button
  - Roku remote's Partner buttons (E.g., Netflix button)
  - Selection of any app from Roku mobile app's "My Apps"
  - Selection of any Roku mobile app function that will take over
        the TV screen (E.g., Miracast, Play on Roku, selection of a
        movie trailer, etc.)

- Users can take any explicit exits you offer through your app's
    own UI.

- Users must also be able to implicitly signal a desire to exit your
    app via the Roku remote's Back button:

  - While Back is also a mechanism to navigate within your UI, there
        are specific conditions in which Back should exit.
  - If users deep-link into your app, pressing Back could either
        exit your app back to the referring screen, or navigate them
        to your Home screen.
  - From your app's home screen, pressing Back should either
        exit or offer a menu/opportunity for users to explicitly confirm
        and choose to exit.

- On occasion, it's quite possible that users may accidentally exit
    your app. Hence, it's important for your app to save its
    state to make recovery easy for the returning user (E.g.,
    Video-playback resume, recently watched, watchlist, etc.).

## Settings

  - There are values within Roku's settings that should be queried and
    leveraged by your app.

      - **For example:**

          - Closed Captions
          - Language/Localization

## Star/Options button

Star/Options button is a great button to reveal menus and popup dialogs
with contextual options. However, there is a restriction for this
button:

  - Within your app, during full screen video playback, pressing the
    Roku remote's Star/Option button will reveal a Roku popup dialog
    offering users various standardized options (E.g, Closed captioning,
    audio tracks).

      - This is necessary in part to comply with various regulations.

  - Do not design your app to use the Star/Option button during
    video playback.
