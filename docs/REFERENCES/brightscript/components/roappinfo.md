---
title: "roAppInfo"
excerpt: 'Retrieves developer ID and manifest values like title and version number'
deprecated: false
hidden: false
metadata:
  title: 'roAppInfo'
  description: 'Reference page for roAppInfo. roAppInfo retrieves developer ID and manifest values such as title and version.'
  robots: index
next:
  description: ''
---


roAppInfo retrieves the developer ID, which can be useful during development. It also retrieves manifest values, such as the title and version number, avoiding the need to parse the manifest file from BrightScript. 
This object is created with no parameters.

#### Example

**Implementation**

```
brush: vb; gutter: false; theme: Confluence
appInfo = CreateObject("roAppInfo")

print "     ID: " ; appInfo.GetID()
print "  IsDev: " ; appInfo.IsDev()
print "  DevID: " ; appInfo.GetDevID()
print "  Title: " ; appInfo.GetTitle()
print "Version: " ; appInfo.GetVersion()
print "MajVers: " ; appInfo.GetValue("major_version")
```

**Output**

```
brush: plain; gutter: false; theme: Confluence
'      ID: 41089_bd3a
'   IsDev: false
'   DevID: 990df3584920876b7e74fe7b29e1f505f148373b
'   Title: BrightScript Test
' Version: 1.0.0
' MajVers: 1
```


## Supported interfaces

- [ifAppInfo](doc:ifappinfo)


