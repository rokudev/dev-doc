---
title: Roku Partner Success
fullscreen: false
hidden: false
metadata:
  title: ''
  description: ''
---
# Support for PlayReady DRM ending in some regions

* ![](https://blog-admin.web.roku.com/developer/files/2024/12/PlayReady-DRM@2x.png)

  * **Updates and security**: Widevine certifies Roku's implementations and Roku has wider test coverage for it. Widevine is a robust DRM solution updated frequently with new features and security updates.
    * **New Roku platform features**: Roku is optimizing its test infrastructure and future development efforts assuming Widevine as the primary DRM; therefore, migrating to Widevine DRM enables developers to leverage these features.
      * **Well-established DRM solution**: Widevine is a well-established DRM solution in general and has been integrated within the Roku platform since 2016. The streaming industry is generally shifting towards using Widevine due to its favorable royalty-free approach. Many Roku developers already use Widevine exclusively or a combination of PlayReady and Widevine.\ <br />\
        Apps in the UK Streaming Store may continue using  PlayReady DRM, though a transition to Widevine is highly encouraged. Please look for additional communications on updating your app application for PlayReady support. For more information on DRM and content protection, see [Roku’s specification](https://developer.roku.com/docs/specs/media/content-protection.md#widevine) . If you have any technical questions about this migration, contact [Roku Partner Success](https://developer.roku.com/contact)  and select the **Video Streaming** topic under Technical Issues.
        ***
        <br />

## Updating your app to use Widevine DRM

<br />

if you are currently using PlayReady DRM in your app, update the **drmParams** field for content objects so that they use Widevine DRM. The following example demonstrates how to do this: **PlayReady example**

<br />

videocontent.drmParams =\
\{\
keySystem: "PlayReady"\
name: "PlayReady"\
licenseServerURL: "SomeURL"\
}

<br />

**Widevine example**

<br />

videocontent.drmParams =\
\{\
keySystem: "Widevine"\
name: "Widevine"\
licenseServerURL: "SomeURL"\
}

<br />

## Updating your manifest file

<br />

In addition to updating your app to support Widevine DRM, you need to add the following attributes to the app's manifest file:

<br />

requires\_widevine\_drm=1\
requires\_widevine\_version=1.0

# 24/7 updates now available for self-published apps

<br />

*Update your apps on weeknights and weekends*

*[![](https://blog-admin.web.roku.com/developer/files/2024/10/channel-publishing-24-7.png)](https://blog-admin.web.roku.com/developer/files/2024/10/channel-publishing-24-7.png)*

During the [Roku 2024 Developer Summit keynote](https://www.youtube.com/watch?v=xFzXw_up4xI#t=14m45s), Roku announced 24/7 publishing for apps that use the Developer Dashboard's self-serve publishing workflow. This means you can release updates for self-published apps anytime during the day, any day of the week, including evenings and weekends. Updates just need to be scheduled at least one complete business day before the target release date.

A couple of exceptions to 24/7 publishing do exist:

* New apps may only be published from Monday to Thursday during business hours.
* New and existing apps may still not be published during the [previously announced holiday blackout period](https://blog.roku.com/developer/channel-store-blackouts-2024 "https://blog.roku.com/developer/channel-store-blackouts-2024").

The recently released [self-serve channel rollback feature](https://blog.roku.com/developer/channel-rollback "https://blog.roku.com/developer/channel-rollback") made it possible for Roku to remove the previous restrictions on off-business hour publishing. If an app update causes a disruption, you can use the Developer Dashboard to roll back the update in a self-serve manner. Partner Success and Partner Engineering are still only available during business hours if you need additional help reverting your channel to a previous release.
