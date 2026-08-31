---
title: Kid & Teen Mode
excerpt: >-
  Detect when your app is launched from Kid & Teen Mode and determine
  appropriate in-app experience and data handling
deprecated: false
hidden: false
metadata:
  title: Kid & Teen Mode | Roku Developer Docs
  description: >-
    Integrate the profileType launch parameter and the roUserInfo and roProfile
    APIs to determine appropriate in-app experience and data handling.
  robots: index
next:
  description: ''
---
The Roku platform UX now includes a **Kid & Teen Mode** setting for customers in the U.S. and Brazil Streaming Stores. This setting enables Roku account owners to select which apps the child can access, choose whether the child can switch external inputs, and PIN-protect the child's ability to exit **Kid & Teen Mode**. Customers can add one or more installed apps that are participating in **Kid & Teen Mode** to this setting (to participate in **Kid & Teen Mode**, contact your Roku partner manager).

Once **Kid & Teen Mode** has been entered on a Roku device, the child can then only launch the selected apps, configure a limited number of settings (Network, Accessibility, System \[About]), and exit **Kid & Teen Mode** (if the account owner enters the PIN or disables the PIN-protected exit).

To support apps participating in **Kid & Teen Mode**, you can integrate the **profileType** launch parameter in your app. You can use this parameter to identify when your app has been launched from **Kid & Teen Mode** and help determine how to comply with content, ads, and data usage restrictions.

![roku815px - kid-teen-mode-ux](https://image.roku.com/ZHZscHItMTc2/kid-teen-mode-ux.png)

## Integrating Kid & Teen Mode in apps

Upon launch, your app receives a new **profileType** parameter with a value of "kids", "teen", "adult", or "none". When your app receives a "kids" or "teen" value, use the signal to determine the appropriate in-app experience and data handling for children.

> - You must read the **profileType** parameter upon each launch because the value may change.
> - Apps currently do not receive a "teen" value from **Kid & Teen Mode**; it is listed in this document for compatibility with future settings and features. When your app is launched from **Kid & Teen Mode**, it receives the "kids" **profileType**.

The following example demonstrates the updated list of launch parameters your app will receive when it is launched from Roku's **Kid & Teen Mode**:

```
<Component: roAssociativeArray> =
  {
      action: "display"
      instant_on_run_mode: "foreground"
      isexternal: true
      lastExitOrTerminationReason: "EXIT_UNKNOWN"
      profileType: "kids"
      source: "homescreen"
      splashTime: "0"
  }
```

When an app receives the "kids" **profileType**, the publisher is solely responsible for ensuring its in-app experience and data handling are child-appropriate.

## App launch behavior

If your app includes a dedicated kids experience, it is recommended that you do the following upon launching your app:

| Profile                                            | Recommendation                                                                                            |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Single Kids Profile already exists                 | Take user directly into existing Kids Profile in app                                                      |
| Multiple Kids Profiles already exist               | Take user directly into last used Kids Profile, OR show profile picker with only Kids Profiles as options |
| App supports a Kids Profile but no profile created | Show profile picker                                                                                       |
| App supports profiles but no Kids Profile option   | Take user directly into last used profile                                                                 |
| Profiles not supported in App                      | Launch directly into app as standard launch flow                                                          |

> **Kids-Directed Apps**: If your app is already designated as "Kids Directed" in the Roku Developer Portal, no changes to your app are currently anticipated. It is therefore recommended that you maintain your app's current launch flow.

## Additional APIs

To provide additional support for Roku's **Kid & Teen Mode**, the Roku OS includes the following new/updated APIs:

- BrightScript profile functions
- QueryDeviceInfo ECP command

### BrightScript profile functions

The **roUserInfo.GetCurrentProfile()** and **roProfile.GetProfileType()** functions enable you to get the current active profile and then get the profile type that launched the app (kids, teen, adult, or none).

#### roUserInfo

The `roUserInfo` component provides access to the current active profile snapshot. Its interface includes a `GetCurrentProfile()` function.

##### GetCurrentProfile() As Object

**Description**

Returns an `roProfile` object representing the currently active profile.

**Return value**

This function returns a `roProfile` object (it never returns `invalid`).

**Example**

```brightscript
userInfo = CreateObject("roUserInfo")
if userInfo <> invalid
   profile = userInfo.GetCurrentProfile()
end if
```

#### roProfile

The `roProfile` component represents the user profile object returned by the `roUserInfo.getCurrentProfile()` function. Its interface provides methods for retrieving the profile type.

##### GetProfileType() As String

**Description**

Returns the type of the current user profile, which may be one of the following values:

- `"kids"`: Current profile is a kid profile.
- `"teen"`: Current profile is a teen profile (apps will not receive a "teen" value from **Kid & Teen Mode**; it is listed in this document for compatibility with future settings and features).
- `"adult"`: Current profile is an adult profile.
- `"none"`: **Kid & Teen Mode** is not enabled or not supported on the device.

**Example**

```brightscript
profile = userInfo.GetCurrentProfile()
profileType = profile.GetProfileType()
if profileType = "kids" then
   ' app was launched by kid profile; determine appropriate in-app experience and data handling
end if
```

### QueryDeviceInfo ECP command

The ECP [QueryDeviceInfo command](doc:external-control-api#querydevice-info-example) response now includes a "user-profile-type" field that indicates the profile type for the current user: "kids", "teen", "adult", or "none" (**Kid & Teen Mode** is not enabled or not supported on the device).

Apps currently do not receive a "teen" value from **Kid & Teen Mode**; it is listed in this document for compatibility with future settings and features.
