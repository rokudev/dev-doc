---
title: "roRegistrySection"
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---



A Registry Section enables the organization of settings within the registry. Different registry sections may have their own keys with the same name. In other words, key names are scoped within the registry section to which they belong.

This object must be supplied with a "section" name on creation. If no such section exists, it will be created. Section names are case sensitive, so sections named "Settings" and "settings" are two different sections.

``CreateObject("roRegistrySection", section as String)``


**Example: Get and set some user authentication in the registry**

```
Function GetAuthData() As Dynamic
     sec = CreateObject("roRegistrySection", "Authentication")
     if sec.Exists("UserRegistrationToken")
         return sec.Read("UserRegistrationToken")
     endif
     return invalid
End Function

Function SetAuthData(userToken As String) As Void
    sec = CreateObject("roRegistrySection", "Authentication")
    sec.Write("UserRegistrationToken", userToken)
    sec.Flush()
End Function
```


## Supported interfaces

- [ifRegistrySection](doc:ifregistrysection)