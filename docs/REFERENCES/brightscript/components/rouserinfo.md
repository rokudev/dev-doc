---
title: roUserInfo
excerpt: 'Provides access to the currently active user profile'
deprecated: false
hidden: false
metadata:
  title: 'roUserInfo'
  description: 'The roUserInfo component provides access to the current active profile snapshot, returning an roProfile object for the currently active Roku user profile.'
  robots: index
next:
  description: ''
---
*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

The **roUserInfo** component provides access to the current active profile snapshot. Apps use it with the [roProfile](doc:roprofile) object it returns to determine the profile type that launched the app, and to deliver an appropriate in-app experience and data handling. See [Kid & Teen Mode](doc:kid-teen-mode) for the full integration.

This object is created with no parameters:

``CreateObject("roUserInfo")``

> On devices running a Roku OS version earlier than 16.0, `CreateObject("roUserInfo")` returns `invalid`. Check the result before calling any function on it.

**Example**

```brightscript
userInfo = CreateObject("roUserInfo")

if userInfo <> invalid
    profile = userInfo.GetCurrentProfile()
    profileType = profile.GetProfileType()
end if
```

## Supported interfaces

* [ifUserInfo](doc:ifuserinfo)
