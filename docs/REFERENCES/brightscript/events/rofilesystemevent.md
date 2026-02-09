---
title: "roFileSystemEvent"
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


The roFileSystem component sends the roFileSystemEvent with the following predicates that indicate its valid event types:

## Supported methods

### isStorageDeviceAdded() as Boolean

Checks if a storage device was inserted in the USB port. This method returns true if a storage device was inserted; otherwise, it returns false. 

#### GetMessage() as String

Returns the volume name of the device inserted into the USB port. 

### isStorageDeviceRemoved() as Boolean

Checks if a storage device was removed from the USB port. This method returns true if a storage device was removed; otherwise, it returns false. 

#### GetMessage() as String

Returns the volume name of the device removed from the USB port. 