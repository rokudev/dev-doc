---
title: "ifUserInfo"
excerpt: 'Interface for retrieving the currently active user profile'
deprecated: false
hidden: false
metadata:
  title: 'ifUserInfo'
  description: 'Documents the ifUserInfo interface, which provides the GetCurrentProfile() method for retrieving a snapshot of the currently active Roku user profile.'
  robots: index
next:
  description: ''
---


*Available since [Roku OS 16.0](doc:release-notes#roku-os-160).*

## Implemented by

| Name                          | Description                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| [roUserInfo](doc:rouserinfo)  | The roUserInfo component provides access to the current active profile snapshot |

## Supported methods

### GetCurrentProfile() as Object

##### Description

Returns an [roProfile](doc:roprofile) object representing a snapshot of the currently active profile.

Because the object is a snapshot, query it again rather than caching the values it returns; a customer can switch profiles between queries.

##### Return Value

An [roProfile](doc:roprofile) object. This function does not return `invalid`.

##### Example

```brightscript
userInfo = CreateObject("roUserInfo")

if userInfo <> invalid
    profile = userInfo.GetCurrentProfile()
end if
```
