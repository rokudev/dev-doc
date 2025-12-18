---
title: Global Utility Functions
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

# Global utility functions

BrightScript has a set of standard, module scope, functions. These
functions are stored in the global object. If the compiler sees a
reference to one of the global functions, it directs the runtime to call
the appropriate global object member.

----

## Sleep(milliseconds as Integer) as Void

This function causes the script to pause for the specified time, without
wasting CPU cycles. There are 1000 milliseconds in one
second.

~~~
sleep(1000) ' sleep for 1 second
sleep(200) ' sleep 2/10 of a second
sleep(3000) ' sleep three seconds
~~~

## Wait(timeout as Integer, port as Object) as Object

This function waits on objects that are "waitable" (those that have a
MessagePort interface). Wait() returns the event object that was posted
to the message port. If timeout is zero, "wait" will wait for ever.
Otherwise, Wait will return after timeout milliseconds if no messages
are received. In this case, Wait returns a type "invalid".

**Example**

~~~
p = CreateObject("roMessagePort")
s = CreateObject("roScreen")
s.SetPort(p)
msg = Wait(0, p) 
print Type(msg) ' e.g. roUniversalControlEvent
print msg.GetInt() ' button number
~~~


## GetInterface(object as Object, ifname as String) as Interface

Each BrightScript Component has one or more interfaces. This function
returns a value of type "Interface". Note that generally BrightScript Components allow you to skip the
interface specification. In which case, the appropriate interface within
the object is used. This works as long as the function names within the
interfaces are unique.

## FindMemberFunction(object as Object, funName as String) As Interface

Returns the interface from the object that provides the specified
function, or invalid if not found.

For example:

~~~ 
print FindMemberFunction({}, "Count") '= <Interface: ifAssociativeArray>
~~~

## UpTime(dummy as Integer) as Float

Returns the uptime of the system since the last reboot in seconds.

## RebootSystem() as Void

Requests the system to perform a soft reboot. The Roku platform has
disabled this feature.

## ListDir(path as String) as Object

Returns a List object containing the contents of the directory path
specified.

For example:

~~~ 
 BrightScript> l=ListDir("pkg:/movies")
 BrightScript> print l
 test_movie_3.vob
 test_movie_4.vob
 test_movie_1.vob
 test_movie_2.vob
~~~

## ReadAsciiFile(filepath as String) as String

This function reads the specified file and returns the data as a string.

The file can be encoded as either UTF-8 (which includes the 7-bit ASCII
subset) or UTF-16.

An empty string is returned if the file can not be read.

For example:

~~~
text=ReadAsciiFile("tmp:/config.txt")
~~~

## WriteAsciiFile(filepath as String, text as String) as Boolean

This function writes the specified string data to a file at the
specified location.

The string data is written as UTF-8 encoded (which includes the 7-bit
ASCII subset).

The function returns true if the file was successfully written.

For example:

~~~
WriteAsciiFile("tmp:/config.txt", "the text to write")
~~~

## CopyFile(source as String, destination as String) as Boolean

Make a copy of a file.

## MoveFile(source as String, destination as String) as Boolean

Rename a file.

## MatchFiles(path as String, pattern\_in as String) as Object

Search a directory for filenames that match a certain
pattern. *Pattern* is a wildmat expression. Returns a List object.  
This function checks all the files in the directory specified against
the pattern specified and places any matches in the returned roList.

The returned list contains only the part of the filename that is matched
against the pattern not the full path.   
The pattern may contain certain special characters:

  - A '?' matches any single character.
  - A '\*' matches zero or more arbitrary characters.
  - The character class '\[...\]' matches any single character specified
    within the brackets. The closing bracket is treated as a member of
    the character class if it immediately follows the opening bracket.
    i.e. '\[\]\]' matches a single close bracket. Within the class '-'
    can be used to specify a range unless it is the first or last
    character. e.g. '\[A-Cf-h\]' is equivalent to '\[ABCfgh\]'.
  - A character class can be negated by specifying '^' as the first
    character. To match a literal '^' place it elsewhere within the
    class.
  - The characters '?', '\*' and '\[' lose their special meaning if
    preceded by a single '\\'. A single '\\' can be matched as '\\\\'.

For example:

~~~
files = MatchFiles(".", "*.mpg")
~~~

## DeleteFile(file as String) as Boolean

Delete the specified file.

## DeleteDirectory(dir as String) as Boolean

Deletes the specified directory. It is only possible to delete an empty
directory.

## CreateDirectory(dir as String) as Boolean

Creates the specified Directory. Only one directory can be created at a
time

## FormatDrive(drive as String , fs\_type as String) as Boolean

Formats a specified drive using the specified filesystem.

## StrToI(str as String) as Dynamic

Return the integer value of the string, or 0 if nothing is parsed.

## RunGarbageCollector() as Object

This function runs the garbage collector on the current thread. It returns and Associative array with some statistics regarding the garbage collection.   
See the [Garbage collection](/docs/references/brightscript/language/component-architecture.md#garbage-collection) section of this manual for more detail. You don't normally need to call
this function.   

For example:

~~~
BrightScript Debugger> a=[]  
BrightScript Debugger> a[0]=a  
BrightScript Debugger> a=invalid  
BrightScript Debugger> print RunGarbageCollector()  
COUNT: 3  
ORPHANED: 1  
ROOT: 2
~~~

## ParseJson(jsonString as String, flags = "" as String) as Object

This function will parse a string formatted according to RFC4627 and
return an equivalent BrightScript object (consisting of booleans,
integer and floating point numbers, strings, roArray, and
roAssociativeArray objects). If the string is not syntactically
correct, **Invalid** will be returned. A few other things to note:

  - As of Roku OS 14.6, you can use the `d` option in order to use double-precision floating point values (roDouble) to improve the precision of the parsed numbers. This helps developers handle JSON payloads from server-side ad insertion (SSAI) providers that use floating-point values to represent time values.
    
  - By default, any roAssociativeArray objects in the returned objects will be
    **case sensitive**.  To return a **case-insensitive** structure, set the `flags` parameter to `"i"`.
    
    > If the `"i"` option is used, and the jsonString includes multiple keys that match case-insensitively, duplicates are overwritten and only the last matching values are preserved.
    
  - An error will be returned if arrays/associative arrays are nested
    more than 256 levels deep.

For example, lets say your service returns a JSON object that contains a
list of photo URLs:

~~~
{
      "photos" : [
           {  
                 "title" : "View from the hotel",
                 "url" : "http://example.com/images/00012.jpg" 
           },
           { 
                 "title" : "Relaxing at the beach",
                 "url" : "http://example.com/images/00222.jpg" 
           },
           { 
                 "title" : "Flat tire",
                 "url" : "http://example.com/images/00314.jpg" 
           }
      ]
}
~~~

~~~
searchRequest = CreateObject("roUrlTransfer")
searchRequest.SetURL("http://api.example.com/services/rest/getPhotos")
response = ParseJson(searchRequest.GetToString())
For Each photo In response.photos
    GetImage(photo.title, photo.url)
End For
~~~

## FormatJson(json as Object, flags = 0 as Integer) as String

Formats a supported data type as a JSON string.

Data types supported are booleans, integer and floating point numbers,
strings, roArray, and roAssociativeArray objects. 

Passing `invalid` into this function returns "null".

An error will be returned if arrays/associative arrays are nested more
than 256 levels deep.

If an error occurs an empty string will be returned.

Normally non-ASCII characters are escaped in the output string as
"\\uXXXX" where XXXX is the hexadecimal representation of the Unicode
character value. 

#### Output flags (optional)

| **Value** | **Description**                                              |
| :-------- | :----------------------------------------------------------- |
| &h0000    | Default: Non-ASCII characters are escaped in the output string as "\uHHHH" where HHHH is the hexadecimal representation of the Unicode character value. |
| &h0001    | DontEscape: Non-ASCII characters are **not** escaped.        |

##### Example

```
euroStr = Chr(&h20AC)

'* By default, non-ASCII Unicode characters are escaped in JSON style
? FormatJSON(euroStr)
' => "\u20AC"

'* If specified, non-ASCII Unicode characters are not escaped.
? FormatJSON(euroStr, &h0001)
' => "€"
```

#### Behavior flags (optional)

| **Flag** | **Description**                                              |
| :------- | :----------------------------------------------------------- |
| &h0000   | Default: If an unsupported value type is encounted, FormatJSON fails and returns an empty string. |
| &h0100   | Ignore: Unsupported value types are output as JSON null values. |
| &h0200   | Annotate: Unsupported value types are output as a descriptive string. |

##### Example

```
list = CreateObject("roList")
obj = {list:list, n:1}

'* By default, attempting to format with any unsupported type fails and returns an empty string.
? FormatJSON(obj)
' => BRIGHTSCRIPT: BRIGHTSCRIPT: ERROR: FormatJSON: list: Value type not supported: roList

'* If specified, unsupported values can be output as JSON 'null' values.
'* (In this case, no error diagnostics are printed to the console).
? FormatJSON(obj, &h0100) 
' => {"list":null,"n":1}

'* If specified, unsupported values can be output as diagnostic string values.
'* The diagnostic string is the component type in angle brackets.
'* (In this case, no error diagnostics are printed to the console).
? FormatJSON(obj, &h0200) 
' => {"list":"<roList>","n":1}
```

### FormatJson(json as Object, flags = "" as String) as String

The same as the previous [FormatJson method](#formatjsonjson-as-object-flags--0-as-integer-as-string), but accepts the **flags** parameter as a string.

## Tr(source as String) as String

Translates the source string into the language of the current locale.
The function looks for a translations.xml file in the XLIFF format in
the pkg:/locale subdirectory named for the current locale (see
[ifDeviceInfo.GetCurrentLocale](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getcurrentlocale-as-string) for the list
of currently-supported locales). If the translations.xml file exists for
the current locale, and contains the source string with a translated
string, the function returns the translated string. Otherwise, the
function returns the original source string.

In some cases you may want to include a placeholder marker in a
localizable string that gets dynamically substituted with a value at
runtime.  
One way to accomplish that is to use the Replace method on the string
value returned from the Tr() lookup.  

For example:

~~~
`text = Tr("Video will start in %1 seconds").Replace("%1",
numSeconds.ToStr())` 
~~~
