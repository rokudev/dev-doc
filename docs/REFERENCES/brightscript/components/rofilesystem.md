---
title: "roFileSystem"
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

# roFileSystem

The roFilesystem component implements common filesystem inspection and modificationroutines.

All paths are matched case-insensitively, regardless of the case-sensitivity of the underlying filesystem. The supported character set is limited to only those characters supported by vfat filesystems (valid Windows characters). The usbplayer sample application is a good example of roFileSystem usage. USB devices with NTFS, HFS+, FAT16/32, exFAT, and Ext2/3 filesystems are supported. The USB filesystems are currently mounted read only.

This object is created with no parameters:

``CreateObject("roFileSystem")``

## Supported interfaces

- [ifFileSystem](/docs/references/brightscript/interfaces/iffilesystem.md "ifFileSystem")
- [ifSetMessagePort](/docs/references/brightscript/interfaces/ifsetmessageport.md "ifSetMessagePort")
- [ifGetMessagePort](/docs/references/brightscript/interfaces/ifgetmessageport.md "ifGetMessagePort")


## Supported events

- [roFileSystemEvent](/docs/references/brightscript/events/rofilesystemevent.md "roFileSystemEvent")
