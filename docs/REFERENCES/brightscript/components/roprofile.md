---
title: roProfile
excerpt: 'Represents a Roku user profile and returns its profile type'
deprecated: false
hidden: false
metadata:
  title: 'roProfile'
  description: 'The roProfile component represents the user profile returned by roUserInfo.GetCurrentProfile() and provides the profile type: kids, teen, adult, or none.'
  robots: index
next:
  description: ''
---
*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

The **roProfile** component represents a Roku user profile. Apps do not create this object directly; it is returned by the [roUserInfo.GetCurrentProfile()](doc:ifuserinfo#getcurrentprofile-as-object) function.

Use the profile type to determine the appropriate in-app experience and data handling for the customer. See [Kid & Teen Mode](doc:kid-teen-mode) for the full integration.

> When a customer switches profiles, apps running in the background are terminated, so your app is relaunched under the new profile. Query the profile on each launch rather than caching the values it returns.

**Example**

```brightscript
userInfo = CreateObject("roUserInfo")

if userInfo <> invalid
    profile = userInfo.GetCurrentProfile()

    if profile.GetProfileType() = "kids"
        ' The app was launched by a kid profile. Determine the appropriate
        ' in-app experience and data handling.
    end if
end if
```

## Supported interfaces

* [ifProfile](doc:ifprofile)
