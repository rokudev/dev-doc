---
title: "ifRegistry"
excerpt: 'Interface for querying, managing, and flushing the device registry'
deprecated: false
hidden: false
metadata:
  title: 'ifRegistry'
  description: 'Documents the ifRegistry interface, which provides methods to query available storage space, list sections, delete a registry section, and flush to storage.'
  robots: index
next:
  description: ''
---


## Implemented by

| Name       | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| [roRegistry](doc:roregistry) | The Registry is an area of non-volatile storage where a small number of persistent settings can be stored |

## Supported methods



### GetSpaceAvailable() as Integer

#### Description

Returns the number of bytes available in the app's device registry (32K). This function can be used, for example, to check the remaining space and remove older entries before writing newer ones. The following code demonstrates how to do this:

``` 
registry = CreateObject("roRegistry")
buffer = 512 ' arbitrary limit based on the app
if (registry.GetSpaceAvailable() < buffer)
' remove some old registry entries before writing new ones
end if
```

#### Return Value

An integer representing the number of bytes available in the device registry.

### GetSectionList() as Object

#### Description

Returns the registry sections on the device. 

#### Return Value

An roList with one entry for each registry section. Each registry section is an roString containing the name of the section. The section itself can be accessed by creating an [roRegistrySection](doc:roregistrysection) object using that name.

### Delete(section as String) as Boolean

#### Description

Deletes the specified registry section.

#### Parameters

| Name    | Type   | Description                         |
| ------- | ------ | :---------------------------------- |
| section | String | The registry section to be deleted. |

#### Return Value

 A flag indicating whether the registry section was successfully deleted.

### Flush() as Boolean

#### Description

Flushes the contents of the registry out to persistent storage in order to permanently store a token or other setting on the device.

#### Return Value

A flag indicating whether the registry was successfully flushed.