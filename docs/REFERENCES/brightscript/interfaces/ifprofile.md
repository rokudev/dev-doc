---
title: "ifProfile"
excerpt: 'Interface for retrieving the type of a Roku user profile'
deprecated: false
hidden: false
metadata:
  title: 'ifProfile'
  description: 'Documents the ifProfile interface, which provides the GetProfileType() method for determining whether the current profile is a kids, teen, or adult profile.'
  robots: index
next:
  description: ''
---


*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

## Implemented by

| Name                       | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| [roProfile](doc:roprofile) | The roProfile component represents the user profile returned by [roUserInfo.GetCurrentProfile()](doc:ifuserinfo#getcurrentprofile-as-object) |

## Supported methods

### GetProfileType() as String

#### Description

Returns the type of the current user profile.

#### Return Value

The type of the current user profile, which. may be one of the following values:

| Value   | Description                                                   |
| ------- | ------------------------------------------------------------- |
| "kids"  | The current profile is a kid profile                          |
| "teen"  | The current profile is a teen profile                         |
| "adult" | The current profile is an adult profile                       |
| "none"  | Kid & Teen Mode is not enabled or not supported on the device |

This function does not return `invalid`.

#### Example

```brightscript
profile = userInfo.GetCurrentProfile()
profileType = profile.GetProfileType()

if profileType = "kids"
    ' The app was launched by a kids profile. 
    ' Determine the appropriate in-app experience and data handling.
end if
```
