---
title: "ifRegistrySection"
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


## Implemented by

| Name              | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| [roRegistrySection](/docs/references/brightscript/components/roregistrysection.md "roRegistrySection") | A Registry Section enables the organization of settings within the registry |


## Supported methods

### Read(key as String) as String

#### Description

Reads and returns the value of the specified key.

#### Parameters

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| key  | String | The key name to be read. |

#### Return Value

The value of the key.


<table>
<thead>
<tr>
<th>Name</th>
<th>Return Type</th>
<th>Parameters</th>
<th>Return Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Read</td>
<td>String</td>
<td>$&#123;readparamTable&#125;</td>
<td>Value of the key - String</td>
<td></td>
</tr>
</tbody>
</table>


### ReadMulti(keysArray as Object) as Object

#### Description

Reads multiple values from the registry.

#### Parameters

| Name      | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| keysArray | Object | An array of strings containing the key names to be read. |

#### Return Value

An associative array containing the keys and corresponding values read from the registry.

### Write(key as String, value as String) as Boolean

#### Description

Replaces the value of the specified key. Does not guarantee a commit to non-volatile storage until an explicit [Flush()](#flush-as-boolean) is done.

#### Parameters

| Name  | Type   | Description                                           |
| ----- | ------ | ----------------------------------------------------- |
| key   | String | The name of the key to be updated.                    |
| value | String | The updated value to be written to the specified key. |

#### Return Value

A flag indicating whether the value of the key was successfully updated.

### WriteMulti(roAssociativeArray as Object) as Boolean

#### Description

Writes multiple values to the registry.

#### Parameters

| Name               | Type   | Description                                              |
| ------------------ | ------ | -------------------------------------------------------- |
| roAssociativeArray | Object | An associative array with key-value pairs to be updated. |

#### Return Value

A flag indicating whether the values were successfully updated.

### Delete(key as String) as Boolean

Deletes the specified key.

#### Parameters

| Name | Type   | Description            |
| ---- | ------ | ---------------------- |
| key  | String | The key to be deleted. |

#### Return Value

A flag indicating whether the key was successfully deleted.

### Exists(key as String) as Boolean

#### Description

Checks if the specified key resides in the registry.

#### Parameters

| Name | Type   | Description            |
| ---- | ------ | ---------------------- |
| key  | String | The key to be checked. |

#### Return Value

A flag indicating whether the key is in the registry.

### Flush() as Boolean

#### Description

Flushes the contents of the registry out to persistent storage in order to permanently store a token or other setting on the device. Developers should explicitly this method after performing a write or series of writes. This method is transactional and all writes between calls to it are atomic.

#### Return Value

A flag indicating whether the registry was successfully flushed.

### GetKeyList() as Object

#### Description

Gets a list of the keys in the registry.

#### Return Value

An roList containing one entry per registry key in this section.