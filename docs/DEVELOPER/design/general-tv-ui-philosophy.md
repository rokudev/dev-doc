---
title: "UI philosophy"
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


Roku experience is designed for a mass market; it should be noted that television displays are communal and different from computers,
phones, and tablets. For example, people lean back and relax while
watching TV, which means they don't expect to use anything complicated
requiring training or mental acrobatics (i.e., minimize cognitive load).
This makes it important for a TV UI to be invisible.

Following these ten tips will help the viewer navigate through your
app better and find the content they are looking for quickly and with
minimal effort.

### 1.  Understand your audience

 - What are their goals and how do they want to access your content (E.g., By date/time, topic, person, rating, etc.)?
 - Create usage scenarios and design for them.
 - Review and test all of your TV UI designs with real users, on actual TV screens, viewed from 10 feet away in a moderately dark room.
 - Pay more attention to what users do rather than what they say.
 - Continually collect data and improve your design.  

### 2.  Leverage conventions  

 - Being unique is appealing for a brand, but it is better to differentiate with your content, features, and capabilities rather than with an unconventional and unfamiliar UI.
 - Consistency with Roku UI conventions means your users will learn how to use and navigate your UI faster and be able to pay more attention to what really matters.
 - Consistency with other Roku apps in UI controls, screen layouts, and general navigation will shift focus from how to use your UI to your unique features and content.
 - Play with many other Roku apps to see patterns, understand what works well, and what to leverage.  

### 3.  Minimize screen types

 - Your entire UI, whether it has 10 or 100 individual screens, should be built from as few screen types or templates as possible.
 - Fewer screen templates ensures a reduced learning curve and greater comfort.
 - However, make sure that your home screen is unique and distinct from all your other screens (When the user backs out from deep within your app, they should easily recognize arriving on the app home screen).  

### 4.  Make it remote friendly  

  - Roku's remote is intentionally minimal, appropriately pushing system functions and choices onto the TV UI.
  - Count on Roku users having muscle-memory and eyes-free operation of the following remote buttons: 4-way directional pad (dPad), OK, Back, and Home.
  - Optimize all primary UI interactions for these buttons accordingly.
  - Users should be able perform all critical functions without ever discovering any hidden menus or special remote button presses.  

### 5.  Make it performant

App should launch with a fully rendered homescreen within:

   - Recommended: 15 seconds on Roku Express (Litlefield)
   - Required: 20 seconds on Roku Express (Littlefield)

The app is responsive to user navigation, Roku Search, and the playback of
content at a reasonable speed expected on all targeted Roku platforms; specifically as measured on Littlefied:

   - Tile-to-tile navigation within 250 ms
   - App response to remote button press within 250 ms
   - Video starts playing within 5 seconds of initiation
   - If animations are present, they must be at least 30 fps
   - Scene-to-scene transitions are within 3 seconds
   - App works with Fast Video Start to allow for pre-buffering of content and improve playback performance where applicable (E.g., On a springboard page)

Actions requiring background progress longer than 3 seconds should display the appropriate 'loading' or 'retrieving' screens.

Always test your app on the low end platforms (Roku Express = Littlefield) to ensure acceptable performance (It will then run great on a high end platform).

[SceneGraph performance guide](/docs/developer-program/performance-guide/development-tips.md) provides more in-depth technical advice on how to build a smooth, lag-free experience for users across all Roku devices.  


### 6. Properly advertise your app

  - Within Roku's Streaming Store, be sure to offer a great summary,
    description, clear pricing, and a variety of screenshots.
  - Screenshots should show all aspects of your app: home screen,
    content browsing, content details page, as well as the video
    playback with voice controls visible.
  - When creating an ad, follow [Roku's ad guidelines](https://docs.roku.com/doc/advertisingguidelines/en-us) to
    make big beautiful content images with minimal text and standard
    call-to-action.
  - Expose your app as much as possible by offering as many doorways
    from Roku's main UI to your app (E.g., Roku Search, My Feed, Ads,
    etc.).
  - When running on-device promotional ads, ensure that you use relevant
    targeting to show the right promotional ad to the right user.
  - Once the app is ready to be promoted, the app can purchase their own ad
    campaigns at [https://admanager.roku.com/](https://admanager.roku.com/).  


### 7. Try before you buy

- For apps requiring payment or purchase, at minimum, let users browse your content in front of the paywall so that they can see or sample what they would be buying.
- Ideally, the app can offer a free trial, UI and content browsing, or some free content. The best way to convince users into a free trial is to let them explore, learn about the app and watch the content.   


### 8. Make app sign-up easy

- If installing your app also requires users to go through a sign up process, make it as short and easy as possible.
- [Roku Pay](/docs/developer-program/roku-pay/implementation/overview.md) increases successful sign-ups by letting users sign-up by a single button click.
- If you have to collect additional user information other than what is necessary for signing up, it is highly recommended to not ask that during the sign-up process. Collect additional information via a follow-up email.
- Most additional sign-up screen that ask for date of birth, gender, any screen with an on-screen keyboard, etc., result in significant user drop-out and is not recommended.  


### 9. Properly monetize your app

- If you are monetizing your app with video ads, be sure to integrate it with the Roku Advertising Framework (RAF). RAF is a certification requirement for ad-supported apps. You can refer to the [RAF documentation](/docs/developer-program/advertising/roku-advertising-framework.md) for more information.
- RAF ensures that all ads across your app have a consistent experience and hence can drive higher user engagement.
- RAF supports a privacy compliant Roku ID for advertisers that enables advanced targeting and frequency capping.
- RAF also supports advanced and immersive ad formats that many advertisers prefer to use.  


### 10. Offer diverse ads

- If your app shows advertisements intermixed with its content playback, ensure a healthy ad mix for a good user experience. Seeing the exact same ad repeatedly over the course of a long viewing session is not only incredibly frustrating for users, but the bad experience will drive them away from your app.