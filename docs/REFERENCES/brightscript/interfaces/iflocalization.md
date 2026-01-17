---
title: "ifLocalization"
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

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| [roLocalization](/docs/references/brightscript/components/rolocalization.md "roLongInteger") | The roLocalization object provides functions to assist in localization |


## Supported methods

### GetPluralString(count as Integer, zeroString as String, oneString as String, pluralString as String) as String

#### Description

Replaces "^n" in pluralString with count and returns the result.

#### Parameters

| Name         | Type    |
| ------------ | ------- |
| count        | Integer |
| zeroString   | String  |
| oneString    | String  |
| pluralString | String  |

#### Return Value

The result of the operation. If count is 0, this returns zeroString. If count is 1, it returns oneString.

#### Examples

`GetPluralString(count, "0 books", "1 book", "^n books")`

### GetLocalizedAsset(dirName as String, fileName as String) as String

Returns an appropriate asset path based on the user's currently selected language.

If the user's current language setting is French (fr_CA), and the file exists, then this would return "pkg:/locale/fr_CA/images/MyImage.png".

If the file does not exist in the current locale directory, then this will search the directory locale/default/. If it exists there, it will return it; otherwise, it will check the directory locale/en_US/. If it still can't find the file, then it will return an empty string.

A list of currently supported locales can be found at [ifDeviceInfo.GetCurrentLocale](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getcurrentlocale-as-string "ifDeviceInfo.GetCurrentLocale").

#### Parameters

| Name     | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| dirName  | String | The name of a subdirectory in the directory pkg:/locale/XX_YY/ where XX_YY is the current language setting. |
| fileName | String | The name of the file.                                        |

#### Return Value

An asset path. 

#### Example

`GetLocalizedAsset("images", "MyImage.png")`.