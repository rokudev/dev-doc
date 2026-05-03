---
title: "ifRegex"
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




> See the PCRE documentation (http://www.pcre.org/) for documentation on the PCRE library used for regular expression matching.  See the [Perlre main page](http://perldoc.perl.org/perlre.html "Perlre main page") for complete documentation of the possible regular expressions this library can parse and match. In general, most Perl compatible regular expressions are supported.

## Implemented by

| Name    | Description                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| [roRegex](doc:roregex) | The roRegex component provides the powerful regular expression processing of the PCRE library to Brightscript strings |


## Supported methods

### IsMatch(str as String) as Boolean

#### Description

Checks if a string matches the matching pattern.

#### Parameters

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| str  | String | The string to be checked. |

#### Return Value

A flag indicating whether the string matches the matching pattern.

### Match(str as String) as Object

#### Description

If the matching pattern contains N parenthetical substrings, the relevant substrings are returned as an array of length N+1, where array[0] is again the entire match and each additional entry in the array is the match for the corresponding parenthetical expression.

#### Parameters

| Name | Type   | Description                                        |
| ---- | ------ | -------------------------------------------------- |
| str  | String | The string to be searched for matching substrings. |

#### Return Value

An roArray of matched substrings from str. If no match was made, an empty array is returned. If a match was made, the entire match is returned in array[0]. If there are no parenthetical substrings this is the only entry in the array

#### Example (from Brightscript Debugger Interactive Shell)

```
 r = CreateObject("roRegex", "(a|(z))(bc)","")
 print r.Match("abcd")
 abc
 a

 bc
```

### MatchAll(str as String) as Object

#### Description

Returns all matches of the specific regular expression pattern in the target string.

#### Parameters

| Name | Type   | Description                                        |
| ---- | ------ | -------------------------------------------------- |
| str  | String | The string to be searched for matching substrings. |

#### Return Value

An roArray where the first element is the full matched string and if there are any capture groups those are returned in subsequent array elements

#### Example

```
  r = CreateObject("roRegex", "\d+", "")
  arr = r.MatchAll("123 456 789")
  print FormatJSON(arr)

 [["123"],["456"],["789"]]
```

### Replace(str as String, replacement as String) as String

#### Description

Replaces the first occurrence of a matching pattern in str with replacement and returns the result. The replacement may contain numbered back-references to parenthetical substrings.

#### Parameters

| Name        | Type   | Description                                                |
| ----------- | ------ | ---------------------------------------------------------- |
| str         | String | The string to be searched.                                 |
| replacement | String | The string to be used to replace matches in source string. |

#### Example (from Brightscript Debugger Interactive Shell)

```
 r = CreateObject("roRegex", "(\d+)\s+(\w+)", "")
 print r.Replace("123 abc", "word:\2 number:\1")
 word:abc number:123
```

#### Return Value

A string with the result of the replace operation.

### ReplaceAll(str as String, replacement as String) as String

#### Description

Replaces all occurrences of a matching pattern in str with replacement and returns the result. The replacement may contain numbered back-references to parenthetical substrings.

#### Parameters

| Name        | Type   | Description                                                |
| ----------- | ------ | ---------------------------------------------------------- |
| str         | String | The string to be searched.                                 |
| replacement | String | The string to be used to replace matches in source string. |

#### Return Value

A string with the result of the replace all operation.

#### Example (from Brightscript Debugger Interactive Shell)

```
  r = CreateObject("roRegex", "a", "i")
  print r.ReplaceAll("Abracadabra", "x")
 xbrxcxdxbrx

  r = CreateObject("roRegex", "a", "")
  print r.ReplaceAll("Abracadabra", "x")
 Abrxcxdxbrx
```

### Split(str as String) as Object

#### Description

Uses the matching pattern as a separator and splits the string on the separator boundaries.

#### Parameters

| Name | Type   | Description             |
| ---- | ------ | ----------------------- |
| str  | String | The string to be split. |

#### Return Value

An roList of substrings of str that were separated by strings which match the pattern in the CreateObject call. The separator strings are not returned. If no matches were found, the returned list contains a single item with the string unchanged.

**Examples from Brightscript Debugger Interactive Shell**

```
 r = CreateObject("roRegex", ",", "") ' split on comma
 print r.Split("first, second, third and fourth")
 first
  second
  third and fourth
 r = CreateObject("roRegex", "/+", "") ' split on one or more slashes
 print r.Split("example.com/images///2012/cat.jpg")
  example.com
  images
  2012
  cat.jpg
```