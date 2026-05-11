---
title: "roRegistrySection"
excerpt: 'Organizes registry keys into named, case-sensitive sections for scoped storage'
deprecated: false
hidden: false
metadata:
  title: 'roRegistrySection'
  description: 'roRegistrySection organizes registry settings into named sections, where key names are scoped to their section and section names are case sensitive.'
  robots: index
next:
  description: ''
---



A Registry Section enables the organization of settings within the registry. Different registry sections may have their own keys with the same name. In other words, key names are scoped within the registry section to which they belong.

This object must be supplied with a "section" name on creation. If no such section exists, it will be created. Section names are case sensitive, so sections named "Settings" and "settings" are two different sections.

``CreateObject("roRegistrySection", section as String)``


**Example: Get and set some user authentication in the registry**

```
function GetAuthData() as Dynamic
     sec = CreateObject("roRegistrySection", "Authentication")
     if sec.Exists("UserRegistrationToken")
         return sec.Read("UserRegistrationToken")
     end if
     return invalid
end function

function SetAuthData(userToken as String) as Void
    sec = CreateObject("roRegistrySection", "Authentication")
    sec.Write("UserRegistrationToken", userToken)
    sec.Flush()
end function
```


## Supported interfaces

- [ifRegistrySection](doc:ifregistrysection)