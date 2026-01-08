---
title: "File system"
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

# File system

## Application storage

Several means are available for an application to store data:


<table>
<thead>
<tr>
<th>Storage</th>
<th>Advantages</th>
<th>Disadvantages</th>
</tr>
</thead>
<tbody>
<tr>
<td>file in tmp:</td>
<td>Files are read/write</td>
<td>Contents are not retained when application exits.<br /><br />Unmanaged. Does not automatically delete data unless the application actively manages the directory. This increases app's memory usage, which could result in an app failures.</td>
</tr>
<tr>
<td>file in cachefs:</td>
<td>Files are read/write; an arbitrary amount of data can be written. <br /><br />cachefs use is per developer ID. Files in cachefs are stored in RAM; therefore, a reboot will evict them from cachefs.<br /><br />Does not count towards app’s total memory usage</td>
<td>Data is evicted when more space is required for another app</td>
</tr>
<tr>
<td>file in pkg:</td>
<td>Accesses any files included in app package</td>
<td>Files are read-only</td>
</tr>
<tr>
<td>file on USB device</td>
<td>Accesses files on removable USB media</td>
<td>Files are read-only; not all Roku models support USB</td>
</tr>
<tr>
<td>Registry</td>
<td>Data is read/write; data is retained when the application exits and when the system reboots</td>
<td>Data size is limited. Each app has access to only 32kb of registry space.</td>
</tr>
</tbody>
</table>


### Cachefs

Developers can use the cachefs: file system to allow applications to
cache data to volatile or persistent storage instead of tmp:. End-users
can add an external SD card to their device which will preserve the data
even after a system reboot and improve performance. Users without
extended storage also benefit from the use of a shared in-memory cache
that is automatically managed by the system to optimize for the most
recently used assets.

Note that the OS can evict the data at any time, such as when another
app decides to write so much data that space is required. Thus, a
app should always check for the existence of the file they wrote to
before relying on the data cache.

Depending on your application's requirements, you can choose one of
these options. Interfaces to the registry are documented
at [roRegistry](/docs/references/brightscript/components/roregistry.md).
Interfaces to files are described below.

## Pathnames

A Roku Streaming Player Pathname identifies a file. Pathnames are used
in [ifFileSystem](/docs/references/brightscript/interfaces/iffilesystem.md) methods,
as well as in other components which use files. A Pathname is a string
with the following format:

~~~~
device:/dir1/dir2/…/filename
~~~~

The device field (sometimes called PHY) identifies the location of the
file and can be one of:

  - **tmp** - Temporary file storage device for the application
  - **pkg** - The root of the application directory that provides read-only
    access to files provided in the pkg
  - **common** – A common read-only filesystem that all plugins have access
    to. Currently, it only contains a CA certificate bundle that
    contains CA certs trusted by Firefox
    ([common:/certs/ca-bundle.crt](http://common/certs/ca-bundle.crt)). You
    are encouraged to use this file in your apps, especially if you are
    aggregating many different feeds. Please see the twitterOAuth sample
    application for a usage example.
  - **ext1, ext2, …,ext9** – Storage devices recognized on the USB bus.
    Please see the USB player sample application for a usage example.

There is no concept of a current working directory or relative paths.
All path names **must** use the absolute Roku Streaming Player Pathname
format above.

The filename components in a pathname may not contain any of these
characters:

~~~~
  <  >  :  "  /  |  ?  *
~~~~

nor any whitespace or non-printable character.

## Example

**Example of path names used from BrightScript**

~~~~
theme.OverhangSliceSD = "pkg:/images/Overhang_Slice_SD43.png"

http.Http.GetToFile("tmp:/categorylist")

DeleteFile("tmp:/categorylist")

obj.SetCertificatesFile("common:/certs/ca-bundle.crt")
~~~~