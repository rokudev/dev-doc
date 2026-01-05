---
title: "ifFileSystem"
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

# ifFileSystem


## Implemented by

| Name                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [roFileSystem](/docs/references/brightscript/components/rofilesystem.md "roFile System") | The roFilesystem component implements common filesystem inspection and modification routines |


## Supported methods

The format of file and directory pathnames is described on the [File System](/docs/developer-program/getting-started/architecture/file-system.md "File System") page.

### GetVolumeList() as Object

#### Description

Returns the available volumes on the device.

#### Return Value

An [roList](/docs/references/brightscript/components/rolist.md "roList") containing strings representing the available volumes.

### GetDirectoryListing(dirPath as String) as Object

#### Description

Returns the file names in the specified directory path.

#### Parameters

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| dirPath | String | The directory path from which to get a list of file names. |

#### Return Value

An [roList](/docs/references/brightscript/components/rolist.md "roList") of strings representing the directory listing of names in dirPath.

### Find(dirPath as String, regEx as String) as Object

#### Description

Returns the file names in the specified directory path matching the provided regex.

#### Parameters

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| dirPath | String | The directory path from which to get a list of file names. |
| regex   | String | The regex to be used to search for files.                  |

#### Return Value

An [roList](/docs/references/brightscript/components/rolist.md "roList") of Strings representing the directory listing of names in dirPath that match the regex.

### FindRecurse(dirPath as String, regEx as String) as Object

#### Description

Returns the file names in the specified directory path and any sudirectories matching the provided regex.

#### Parameters

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| dirPath | String | The directory path from which to get a list of file names. |
| regex   | String | The regex to be used to search for files.                  |

#### Return Value

An [roList](/docs/references/brightscript/components/rolist.md "roList") of Strings representing the directory listing of names in dirPath that match the regex. Each item in the list is the name of the file relative to dirPath.

### Match(path as String, pattern as String) as Object

#### Description

Returns the file names in the specified directory path matching the provided shell-like pattern. This method is similar to the [Find()](#finddirpath-as-string-regex-as-string-as-object) method except that it uses shell-like pattern matching rather than regular expression matching.

#### Parameters

| Name    | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| path    | String | The directory path from which to get a list of file names.   |
| pattern | String | The shell-like pattern to be used to search for files. The pattern may contain wildcards such as `* `and `?`. |

#### Return Value

An [roList](/docs/references/brightscript/components/rolist.md "roList") of Strings representing the directory listing of names in dirPath that match the shell-like pattern.

### Exists(path as String) as Boolean

#### Description

Checks if the specified directory path exists on the device.

#### Parameters

| Name | Type   | Description                       |
| ---- | ------ | --------------------------------- |
| path | String | The directory path to be checked. |

#### Return Value

A flag indicating whether the specified path directory exists on the device.

### Stat(path as String) as Object

#### Description

Returns the keys in the specified directory path.

#### Parameters

| Name | Type   | Description                       |
| ---- | ------ | --------------------------------- |
| path | String | The directory path to be checked. |

#### Return Value

An [roAssociativeArray](/docs/references/brightscript/components/roassociativearray.md "roAssociativeArray") containing the following key-value pairs for the specified path:

| Name        | Type    | Values                                                      |
| ----------- | ------- | ----------------------------------------------------------- |
| type        | String  | ${stat-type-values}                                         |
| size        | Integer | Number of bytes in the file. Only relevant for type "file". |
| permissions | String  | ${stat-permissions-values}                                  |

{#stat-type-values}

- "file"
- "directory"

{#stat-permissions-values}

- "rw": read/write
- "r": read-only

### GetVolumeInfo(path as String) as Object

#### Description

Returns information about the specified volume. The function can only be called on external volumes; internal volumes do not return meaningful information.

#### Parameters

| Name | Type   | Description                                                  |
| ---- | ------ | ------------------------------------------------------------ |
| path | String | The external volume for which to get information. This should be specified as the volume name plus a directory separator (for example, "ext1:/"). |

#### Return Value

An roAssociativeArray containing the following key-value pairs about the specified external volume:

| Name        | Type    | Values                                                       |
| ----------- | ------- | ------------------------------------------------------------ |
| blocksize   | Integer | The size of the filesystem blocks in bytes.                  |
| blocks      | Integer | The number of blocks in the filesystem.                      |
| free-blocks | Integer | The number of unused blocks in the filesystem.               |
| usedblocks  | Integer | The number of used blocks in the filesystem.                 |
| label       | String  | The volume label, if any.                                    |
| mounttime   | Integer | The time (in UTC format) when the volume specified in the path was last mounted. This field will be set to 0 if the drive is unknown or unmounted.  |

### CreateDirectory(path as String) as Boolean

#### Description

Creates the directory specified by the path parameter. All directories in path except the last one must already exist; that is, only one directory can be created.

#### Parameters

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| path | String | The path of the directory to be created. |

#### Return Value

A flag indicating whether the path was successfully created.

### Delete(path as String) as Boolean

#### Description

Permanently removes the file or directory specified by the path parameter. If path is a directory, its contents are recursively removed.

#### Parameters

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| path | String | The path of the directory to be deleted. |

#### Return Value

A flag indicating whether the path was successfully deleted.

### CopyFile(fromPath as String, toPath as String) as Boolean

#### Description

Copies the files from one directory to another.

#### Parameters

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| fromPath | String | The source path containing the files to be copied. |
| toPath   | String | The target path to which files are to be copied.   |

#### Return Value

A flag indicating whether the files were successfully copied.

### Rename(fromPath as String, toPath as String) as Boolean

#### Description

Renames the directory.

#### Parameters

| Name     | Type   | Description                                 |
| -------- | ------ | ------------------------------------------- |
| fromPath | String | The current name of the path to be renamed. |
| toPath   | String | The new name of the path.                   |

#### Return Value

A flag indicating whether the directory was successfully renamed. If the provided target directory (**toPath**) exists, it is not overwritten; instead the operation fails and this method returns false





