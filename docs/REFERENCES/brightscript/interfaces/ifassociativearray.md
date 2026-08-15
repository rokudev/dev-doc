---
title: ifAssociativeArray
excerpt: Interface for managing key/value pairs in an associative array
deprecated: false
hidden: false
metadata:
  title: ifAssociativeArray
  description: >-
    Documents the ifAssociativeArray interface, which provides methods to add,
    look up, delete, and iterate over key/value pairs in an associative array.
  robots: index
next:
  description: ''
---
## Implemented by

| Name                                         | Description                                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| [roAssociativeArray](doc:roassociativearray) | An associative array allows objects to be associated with string keys                   |
| [roSGNode](doc:rosgnode)                     | The roSGNode object is the BrightScript equivalent of SceneGraph XML file node creation |

## Supported methods

### AddReplace(key as String, value as Dynamic) as Void

#### Description

Adds a new entry to the array associating the supplied value with the supplied key string. Only one value may be associated with a key. If the key is already associated with a value, the existing value is discarded.

#### Parameters

| Name  | Type    | Description                                                |
| ----- | ------- | ---------------------------------------------------------- |
| value | Dynamic | The value of the key to be added to the associative array. |
| key   | String  | The key to be added to the associative array.              |

### Lookup(key as String) as Dynamic

#### Description

Returns the value in the array associated with the specified key. The key comparison is case-insensitive, unless the **SetModeCaseSensitive()** method has been called.

#### Parameters

| Name | Type   | Description                                                                   |
| ---- | ------ | ----------------------------------------------------------------------------- |
| key  | String | The key associated with the value to be retrieved from the associative array. |

#### Return Value

Returns the value in the array associated with the specified key. If there is no value associated with the key,   the type "invalid" is returned.

### LookupCI(key as String) as Dynamic

#### Description

Same as the [Lookup()](#lookupkey-as-string-as-dynamic) method except that the key comparison is always case insensitive, regardless of the case mode.

#### Parameters

| Name | Type   | Description                                                                                      |
| ---- | ------ | ------------------------------------------------------------------------------------------------ |
| key  | String | The key (case-insensitive) associated with the value to be retrieved from the associative array. |

#### Return Value

Returns the value in the array associated with the specified key. If there is no value associated with the key,   the type "invalid" is returned.

### DoesExist(key as String) as Boolean

#### Description

Looks for an entry in the associative array associated with the specified key.

#### Parameters

| Name | Type   | Description                                      |
| ---- | ------ | ------------------------------------------------ |
| key  | String | The key associated with the entry to be checked. |

#### Return Value

A flag indicating whether an entry is associated with the specified key exists. If there is no associated object then false is returned. If there is such an object then true is returned.

### Delete(key as String) as Boolean

#### Description

Deletes an entry from an associative array based on the key.

#### Parameters

| Name | Type   | Description                                      |
| ---- | ------ | ------------------------------------------------ |
| key  | String | The key associated with the entry to be deleted. |

#### Return Value

A flag indicating whether an entry is associated with the specified key exists. If there is no associated object then false is returned. If there is such an object then true is returned.

### Clear() as Void

#### Description

Remove all key/values from the associative array.

### Keys() as Object

#### Description

Returns an array containing the associative array keys in lexicographical order.

#### Return Value

An array of associative array keys.

### Items() as Object

#### Description

Returns an array containing the associative array key/value pairs in lexicographical order of key.

#### Return Value

An array of associative array keys/value pairs.

#### Example

```brightscript
    aa = {one:1, two:2, three:3}
    for each item in aa.Items()
        print item.key, item.value
    end for
    ' prints "one  1", "three  3", "two  2"
```

### SetModeCaseSensitive() as Void

#### Description

Makes all subsequent associative array lookups case sensitive (by default, lookups are case insensitive).

### Append(aa as Object) as Void

#### Description

Appends an associative array to this calling object. If any key in the **aa** parameter is already associated with a value in the calling object, the current value is discarded and is replaced with the value provided in the **aa** parameter.

#### Parameters

| Name | Type   | Description                                                 |
| ---- | ------ | ----------------------------------------------------------- |
| aa   | Object | The associative array to be appended to the calling object. |

### Count() As Integer

#### Description

Returns the number of keys in the associative array.

#### Return Value

The number of keys in the associative array.

### Values() as Object

_Available since Roku OS 15.3_

#### Description

Returns the values within the associative array in key order.

#### Return Value

An array of associative array values, sorted in key order.
