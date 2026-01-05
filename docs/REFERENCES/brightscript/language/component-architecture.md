---
title: "Component architecture"
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

# Component architecture

The BrightScript Component architecture and library are separate from
BrightScript, but BrightScript requires them.

  - All APIs exposed to BrightScript are exposed as BrightScript
    components. In other words, if a platform wants to expose APIs to be
    scripted, the platform must register a new BrightScript component.
  - BrightScript has language features that are designed to work with
    BrightScript component Interfaces. These include: for each, print,
    the array operator, dot operator, and intrinsic objects.
  - Fundamental BrightScript building blocks are implemented as
    BrightScript components. For example: Lists, Vector Arrays,
    Associative Arrays, and Objects.

-----

## Brief summary of BrightScript Components


BrightScript Components are robust against version changes. In other
words, scripts are generally backwards compatible with Objects that have
undergone version improvements.

BrightScript Components keep a reference count and delete themselves
when the reference count goes to zero.

A key BrightScript Component concept is the Interface. The term
Interface is used here as it is in Java or Microsoft COM. An Interface
is a known set of member functions that implement a set of logic. In
some ways an Interface is like a virtual base class in C++. Any script
or C-compatible program can use an object's interface without regard to
what type of object it is a part of, as long as it is familiar with a
particular interface. For example, the roUrlTransfer component
implements four interfaces: ifUrlTransfer, ifHttpAgent, ifSetMessagePort
and ifGetMessagePort.

## BrightScript statements that work with BrightScript Component Interfaces

**For each**  
The for-each statement works on any object that has an
[ifEnum](/docs/references/brightscript/interfaces/ifenum.md) interface. These include: Array,
Associative Array, List, ByteArray, and MessagePort.

**Print**  
If the expression being printed evaluates to an object that has an
[ifEnum](/docs/references/brightscript/interfaces/ifenum.md) interface, print will print every item
that can be enumerated.  
In addition to printing the values of intrinsic types, PRINT will also
print any object that exposes one of these interfaces:
[ifString](/docs/references/brightscript/interfaces/ifstring.md), [ifInt](/docs/references/brightscript/interfaces/ifint.md),
[ifFloat](/docs/references/brightscript/interfaces/iffloat.md).

**Wait**  
The wait function will work on any object that has an
[ifMessagePort](/docs/references/brightscript/interfaces/ifmessageport.md) interface.

**Array operator –"\[\]"**  
The array operator works on any object that has an
[ifArrayGet](/docs/references/brightscript/interfaces/ifarrayget.md) or
[ifArraySet](/docs/references/brightscript/interfaces/ifarrayset.md) interface. This includes Array,
AssociativeArray, ByteArray, and Lists.

**Member access operator "."**  
The "." Operator works on any object that has an
[ifAssociativeArray](/docs/references/brightscript/interfaces/ifassociativearray.md) interface (as well
as on any BrightScript Component (when calling a member function)). It
also has special meaning when used on
[roXMLElement](/docs/references/brightscript/components/roxmlelement.md) or
[roXMLList](/docs/references/brightscript/components/roxmllist.md).

**Expression parsing**  
Any expression that is expecting an Integer, Float, Double, Boolean or
String, can take an object with the [ifInt](/docs/references/brightscript/interfaces/ifint.md),
[ifFloat](/docs/references/brightscript/interfaces/iffloat.md), [ifDouble](/docs/references/brightscript/interfaces/ifdouble.md),
[ifBoolean](/docs/references/brightscript/interfaces/ifboolean.md), or
[ifString](/docs/references/brightscript/interfaces/ifstring.md) interface.

## Intrinsic types and object types

A variable may hold either an "intrinsic type" or an "object type". An
intrinsic type is one of Integer, Float, Double, String, Invalid,
Boolean or Function. An object type is one of Array, Associative Array
or BrightScript Component. The most important difference is a variable
containing an intrinsic type contains the value itself; that is, the
Integer, Float, Double, etc. is contained within the variable.  On the
other hand, a variable containing an object type contains merely a
pointer or reference to the actual object. Assigning an object type
results in two pointers to the same object, while assigning an intrinsic
type results in two copies of the same value, which can be modified
independently of each other.


~~~~
a = 42  ' a contains an intrinsic Integer
b = a   ' b contains a copy of a
a = 43  ' does not modify b
b = 44  ' does not modify a

a = [ 1,2,3 ]   ' a contains a reference to an array
b = a           ' b contains another reference to the same array
a[0] = 5        ' now both a[0] and b[0] equal 5
b[1] = 6        ' now both a[1] and b[1] equal 6
~~~~


The same thing holds true when variables are passed as function
parameters. If the variable is intrinsic, the function parameter is a
copy of the original. But if the variable is object, the function
parameter is merely an additional reference to the same object. That is,
intrinsic variables are "passed by value", while object variables are
"passed by reference".


**Example**

~~~~
function Modify(a as Integer, b as Object) as Void
    a = 43
    b.first = 6
end function

.....

    x = 42
    y = { first: 1, second: 2 }
    Modify(x, y)
    ' now x is still 42 but y.first is 6
~~~~


Each object maintains a "reference count", which is the number of
variables which refer to the object. The reference count is set to 1
when the object is created and a reference to it is saved in a
variable. When an object's reference count drops to zero, the object
is destroyed.


**Example**

~~~~
a = CreateObject("roArray")   ' array has a ref count of 1
b = a                         ' array has a ref count of 2
a = invalid                   ' array has a ref count of 1 (a no longer refers to it)
c = b                         ' array has a ref count of 2
b = 100                       ' array has a ref count of 1 (b no longer refers to it)
c = invalid                   ' array has a ref count of 0 and is destroyed
~~~~


Note that after the last statement, since no variables refer to the
object any longer, it would be impossible to use the object even if it
were not destroyed.

## Use of wrapper functions on intrinsic types

If an intrinsic types is passed to a function that expects an Object, a
"wrapper" object will be created, assigned the correct value, and passed
to the function. Wrapper objects are objects which behave like the
intrinsic entities that they represent. For example, an integer may be
converted to an roInt object, which can be used much like an ordinary
integer, but it has object semantics. This automatic conversion to an
object is sometimes referred to as "autoboxing".


**Example**

~~~~
Function Main()
    MyFunA(4)
    MyFunB(4)
End Function

Function MyFunA(p as Object) as Void
    print "A",p,type(p)
End Function

Function MyFunB(p as Integer) as Void
    print "B",p,type(p)
End Function
~~~~

**Will Print:**

~~~~
  A 4 roInt  
  B 4
Integer
~~~~


**Example**

~~~~
Print 5.tostr()+"th"   ' prints 5th
Print "5".toint()+5    ' prints 10
If type(5.tostr())<> "String" Then Stop
If (-5).tostr()<>"-5" Then Stop
If (1+2).tostr()<>"3" Then Stop
If 5.tostr()<>"5" Then Stop
i=-55
If i.tostr()<>"-55" Then Stop
If 100%.tostr()<>"100" Then Stop
If (-100%).tostr()<>"-100" Then Stop
y%=10
If y%.tostr()<>"10" Then Stop
If "5".toint()<>5 Or type("5".toint())<>"Integer" Then Stop
If "5".tofloat()<>5.0 Or type("5".tofloat())<>"Float" Then Stop
fs="-1.1"
If fs.tofloat()<>-1.1 Or fs.toint()<>-1 Then Stop
If "01234567".left(3)<>"012" Then Stop
If "01234567".right(4)<>"4567" Then Stop
If "01234567".mid(3)<>"34567" Then Stop
If "01234567".mid(3,1)<>"3" Then Stop
If "01234567".instr("56")<>5 Then Stop
If "01234567".instr(6,"56")<>-1 Then Stop
If "01234567".instr(0,"0")<>0 Then Stop
~~~~

Note that ```-5.tostr()``` will cause an error since the dot operator binds tighter than unary
negation.  

Use: ```(-5).tostr()```


## BrightScript XML support

BrightScript supports XML via two BrightScript Components, and some
dedicated language features. The BrightScript Component roXMLElement
provides support for parsing, generating, and containing XML. In
addition, the roXMLList object is often used to hold lists of
roXMLElement, and implements the BrightScript standard ifList interface
as well as the ifXMLList interface. Language features are provided via
the dot operator, and the @ operator. BrightScript XML support is
limited to UTF-8 encoded content.

### Dot operator

  - When applied to an roXMLElement, the dot operator returns an
    roXMLList of children that match the dot operand. If no tags match,
    an empty list is returned.
  - When applied to an roXMLList, the dot operator aggregates the
    results of performing the dot operator on each roXMLElement in the
    list.
  - When used on XML, which is technically case sensitive, the dot
    operator is still case insensitive. If you wish to do a case
    sensitive XML operation, don't use the dot operator. Use the XML
    member functions.

### Attribute operator

The @ operator can be used on an roXMLElement to return a named
attribute. It is always case insensitive (despite the fact that XML is
technically case sensitive). When used on an roXMLList, the @ operator
will return a value only if the list contains exactly one element.

For example, if the file "example.xml" contains the following:

~~~~
<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="ok">
  <photos page="1" pages="5" perpage="100" total="500">
    <photo id="3131875696" owner="21963906@N06" secret="f248c84625" server="3125" farm="4" title="VNY 16R" ispublic="1" isfriend="0" isfamily="0" />
    <photo id="3131137552" owner="8979045@N07" secret="b22cfde7c4" server="3078" farm="4" title="hoot" ispublic="1" isfriend="0" isfamily="0" />
    <photo id="3131040291" owner="27651538@N06" secret="ae25ff3942" server="3286" farm="4" title="172 • 365 :: Someone once told me..." ispublic="1" isfriend="0"
  </photos>
</rsp>
~~~~

Then

~~~~
 rsp=CreateObject("roXMLElement")
 rsp.Parse(ReadAsciiFile("tmp:/example.xml"))
~~~~

? rsp.photos.photo will return an roXMLList with three entries.

? rsp.photos.photo\[0\] will return an roXMLElement reference to the first photo (id="3131875696").

? rsp.photos will return an roXMLList reference containing the photos tag.

rsp.photos@perpage will return the string 100.

Use the GetText() method to return an element's text.  
For example, if the variable booklist contains this roXMLElement:

~~~~
 <booklist>
 <book lang=eng>The Dawn of Man</book>
 </booklist>
~~~~

then

~~~~
 print booklist.book.gettext()
~~~~

Will print "The Dawn of Man", and

~~~~
 print booklist.book@lang
~~~~

will print

~~~~
"eng"
~~~~


**Example: flikr**

~~~~
REM
REM Interestingness
REM pass an (optional) page of value 1 - 5 to get 100 photos
REM starting at 0/100/200/300/400
REM
REM returns a list of "Interestingness" photos with 100 entries
REM
Function GetInterestingnessPhotoList(http as Object, page=1 as Integer) as Object
    print "page=";page
    http.SetUrl("http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=YOURKEYGOESHERE&page="+mid(stri(page),2))
    xml=http.GetToString()
    rsp=CreateObject("roXMLElement")
    If Not rsp.Parse(xml) Then Stop
    Return helperPhotoListFromXML(http, rsp.photos.photo) 'rsp.GetBody().Peek().GetBody())  
End Function

Function helperPhotoListFromXML(http as Object, xmllist as Object,
    owner=invalid as dynamic) as Object
    photolist=CreateObject("roList")
    For Each photo In xmllist
        photolist.Push(newPhotoFromXML(http, photo, owner))
    End For
    Return photolist
End Function

REM
REM newPhotoFromXML
REM
REM Takes an roXMLElement Object that is an <photo> ... </photo>
REM Returns an brs object of type Photo
REM photo.GetTitle()
REM photo.GetID()
REM photo.GetURL()
REM photo.GetOwner()
REM
Function newPhotoFromXML(http as Object, xml as Object, owner as dynamic) as Object
    photo = CreateObject("roAssociativeArray")
    photo.http=http
    photo.xml=xml
    photo.owner=owner
    photo.GetTitle=function():return m.xml@title:end function
    photo.GetID=function():return m.xml@id:end function
    photo.GetOwner=pGetOwner
    photo.GetURL=pGetURL
    Return photo
End Function


Function pGetOwner() as String
    If m.owner <> Invalid Return m.owner
        Return m.xml@owner
End Function

Function pGetURL() as String
    a=m.xml.GetAttributes()
    url="http://farm"a.farm".static.flickr.com/"a.server"/"a.id"_"a.secret".jpg"
    Return url
End Function
~~~~

#### Parsing colons in namespace element and attribute tags

For elements and attributes with namespaces, you can use the [roXMLElement interface](/docs/references/brightscript/interfaces/ifxmlelement.md#getattributes-as-object) to parse the colons in their tags. Consider the following XML:

```
<media:thumbnail xmlns:media='http://something.something.com/mrss/' url='http://blahblablah.com' width='72' height='72' />
```

To parse these tags, do the following

- Element with namespace: use `elementArray = GetNamedElements("media:thumbnail")`.
- Attributes with namespace: use `element.GetAttributes()["xmlns:media"]`.
- Attributes without namespace: use the @ operator (`element@url`).

## Garbage collection

BrightScript will automatically free strings when they are no longer
used, and it will free objects when their reference count goes to zero.
This is done at the time the object or string is no longer used; there
is no background garbage collection task. This results in very
predictable "garbage collection" – there are no unexpected stalls in
execution.

A "mark and sweep" garbage collection is run after a script executes, or
can be manually forced to run via the debug console. A script can force
the Garbage collector to run via the RunGarbageCollector() function. The
Garbage collector's purpose is to clean up objects that refer to
themselves or have other circular references (which are not managed by
the normal reference counting garbage
collection).


**Example**

~~~~
i=roCreateObject("roInt")
j=i ' reference incremented
i=invalid ' reference decremented
j=0 ' roInt just free'd.
~~~~


## Events

Events in BrightScript center around an event loop and the roMessagePort
BrightScript Component. Any BrightScript Component can be posted to a
message port. Typically these will be Objects that are designed to
represent an events. For example, the roFilesystem class posts events of
type roFilesystemEvent.


**Example**

~~~~
fs = CreateObject("roFilesystem")
port = CreateObject("roMessagePort")
fs.SetMessagePort(port)
while true
    msg = wait(0, port)
    if type(msg)="roFileSystemEvent" then
        if msg.isStorageDeviceAdded() then print "device added"
    end if
End While
~~~~


## Threading model

A BrightScript script runs in a single thread. Multiple threads cannot
be created in a BrightScript program. The general rule of thumb is that
BrightScript Component calls are synchronous if they return quickly, or
asynchronous if they take a long time to complete. For example, class
roArray methods are all synchronous. But if "roVideoPlayer" is used to
play a video, the Play() method returns immediately while video
continues to play (it is asynchronous). As the video plays, it will post
events to a message port. Typical events would be "media finished" or
"time x reached". Some components have a choice of synchronous or
asynchronous methods; for example roUrlTransfer has methods
GetToString() which is synchronous (returns only after the transfer is
complete) and AsyncGetToString() which is asynchronous (returns
immediately and the transfer continues in the background).

This threading model means that the script writer does not have to deal
with mutexes, condition variables, and other synchronization objects.
The script merely receives and processes messages to handle events
happening in the background.

## Scope

BrightScript uses the following scoping rules:

  - BrightScript does not support global variables. Except, there is one
    hard-coded global variable "global" that is an interface to the
    global BrightScript Component. The global component contains all
    global library functions. There is also a global context that can be
    accessed via the [GetGlobalAA()](/docs/references/brightscript/language/runtime-functions.md#getglobalaa-as-object). If in function scope and that function is not a method in an
    object, "m." also references the global associative array accessed
    with
    [GetGlobalAA()](/docs/references/brightscript/language/runtime-functions.md#getglobalaa-as-object).
  - Functions declared with the FUNCTION statement are at global scope,
    unless they are anonymous, in which case they are local scope.
  - Local variables exist with function Scope. If a function calls
    another function, that new function has its own scope.
  - Labels exist in function scope.
  - Block Statements (like FOR-END FOR or WHILE-END WHILE) do not create
    a separate scope.

## Creating and using intrinsic objects

In most of this manual we use the term "object" to refer to a
"BrightScript Component". These are C or C++ components with interfaces
and member functions that BrightScript uses directly. Other than a few
core objects that BrightScript relies upon (roArray, roAssociativeArray,
roInt, etc.) BrightScript Components are platform specific.

You can also create "intrinsic" objects in BrightScript itself to use in
your scripts. These act in some ways like Components; for example, the
syntax to invoke a method in a Component or in an intrinsic object is
identical: "object.function()". However, to be clear, these are not
BrightScript Components. There is currently no way to create a
BrightScript Component in BrightScript, or to create intrinsic objects
that have interfaces (they only contain member functions, properties, or
other objects).

An intrinsic object is simply an roAssociativeArray which contains
function references. When a function is called "from" an Associative
Array, a special pointer named "m" is accessible inside the function,
which refers to the Associative Array. A "constructor" in BrightScript
is a normal function at global scope that creates the Associative Array
and fills in its member functions and properties.

## "m" the BrightScript "this pointer"

A BrightScript object is an roAssociativeArray which contains function
pointers. When a member function is called "from" an AssociativeArray,
the special variable "m" is set to point to that AssociativeArray. "m"
is accessible inside the called function to access other data in the
AssociativeArray object.


**Example**

~~~~
function Main()
     obj = ConstructMyObject()
     obj.Set("hi!")
     print obj.Get()
     print "--------"
     print obj
     stop
end function

function ConstructMyObject()
     obj = {
         Set       : function(x) : m.Value = x : end function
         Get       : function() : return m.Value : end function
         Value     : 0
     }
     return obj
end function
~~~~


Output:

hi\!  
\--------  
value: hi\!  
get: <bsTypedValue: Function\>  
set: <bsTypedValue: Function\>

## Script libraries

In addition to the platform BrightScript components discussed in [Brief
summary of BrightScript
Components](/docs/references/brightscript/language/component-architecture.md#brief-summary-of-brightscript-components),
BrightScript enables platform BrightScript libraries to be used in your
scripts.  
BrightScript libraries are .brs files that are provided by the platform
and compiled into your application when directed via the "Library"
keyword to make additional functions available.  
The Roku OS provides some common libraries under the system library
directory "common:/LibCore".  
Additional libraries may be provided by the platform for specific usage
purposes.

**Example**  

Library "v30/bslCore.brs"

The common library file sources can be viewed from the debug console:

~~~~
BrightScript> bslCore =
ReadAsciiFile("common:/LibCore/v30/bslCore.brs")  
BrightScript> print bslCore
~~~~

### v30/bslCore.brs

This library provides platform constant definitions as well as some
common utility functions.

#### bslBrightScriptErrorCodes() as Object

  - Returns an roAssociativeArray with name value pairs of the error
    name and corresponding integer value, for example ERR\_OKAY = &hFF.

#### bslGeneralConstants() as Object

  - Returns an roAssociativeArray with name value pairs of system
    constants, for example MAX\_INT = 2147483647.

#### bslUniversalControlEventCodes() as Object

  - Returns an roAssociativeArray with name value pairs of the remote
    key code (buttons) constants, for example BUTTON\_SELECT\_PRESSED =
    6.

#### AsciiToHex(ascii as String) as String

  - Returns the hex encoded string, for example AsciiToHex("Hi\!") =
    "486921".

#### HexToAscii(hex as String) as String

  - Returns a string that is the hex decoded string, for example
    HexToAscii("486921") = "Hi\!".

#### HexToInteger(hex as String) as Integer

  - Returns the integer value of the passed in hex string.

This library includes 2D graphics helper functions on top of the native components.  

#### Object dfNewBitmapSet(String filename)

The goal is to enable simple xml descriptions of graphics resources like
bitmaps, regions, sprites, animations, and layouts to be used in your
games. The library handles parsing, loading, rendering, and animation of
sprites sheets (multiple images in a single png file).

  - Filename is the path to an XML file that contains info about bitmap
    regions, animation frames, and ExtraInfo metadata (any fields you
    would like) about resources used in 2d games.
  - Returns an roAssociativeArray with the following name value pairs:
      - ExtraInfo: roAssociativeArray
          - Contains any name value pairs the designer desires.
      - Regions: roAssociativeArray of name, roRegions pairs
          - The roAssociative array returns a set of Regions from Region
            tag information from the xml.
          - Used to describe regions of a bitmap
          - Bitmap contains parameters: name, filename where filename is
            a .png, .gif, or .jpg file
          - Region contains parameters: name, x, y, w, h and is a subtag
            of a bitmap
      - Animations: roAssociativeArray of name, roArray of roRegion
        pairs.
          - The top level roAssociativeArray is the animation name with
            a value of an array of frames that represent the animation
          - Each frame is an roRegion that is represented in the xml by
            the "use" parameter. The use parameter refers to a
            previously defined Bitmap.Region returned in the Regions
            info.
          - Animation frame descriptions can be used by the roSprite and
            roCompositor components.
      - Backgrounds: roAssociativeArray of name, path pairs.
          - Backgrounds do not create bitmaps at this point
          - Use in conjunction with dfSetBackground() to manage
            backgrounds

#### dfDrawMessage(dest as Object, region as Object) as Void

  - dest is an roScreen/roBitmap/roRegion and region is an roRegion
  - greys the entire dest region and draws it the region centered on the
    drawable
    dest.

#### dfDrawImage(dest as Object, path as String, x as Integer, y as Integer) as Boolean

  - Returns True if successful
  - Creates a bitmap out of the image stored in the filename "path" and
    draws it at position (x,y) of the drawable
    dest.

#### dfSetupDisplayRegions(screen as Object, topx as Integer, topy as Integer, width as Integer, height as Integer) as Object

  - Helper function to setup screen scaling with supplied pillar box or
    letterbox images to fill the entire screen.
  - screen is an roScreen
  - topx and topy are the coordinates of the upper left hand corner of
    the main drawing region
  - Width and height is the size of the main drawing region
  - Returns an associative array containing the following roRegions

    Main: main drawable region  
    Left: left region if there is pillar box area on the left  
    Right: right region if there is a pillar box area on the right  
    Upper: upper region if there is a letterbox area at thetop  
    Lower: lower region if there is a letterbox area at the bottom  
    When using these regions as drawables, your graphics will be translated and clipped to these regions.  

#### Object dfSetBackground(String backgroundName, Object backgrounds)

  - dfSetBackground helps manage the limited video memory. The video
    memory does not currently run a defragmenter, and is very limited.
    These constraints make it important that large bitmaps (like
    backgrounds that fill the entire screen) are only allocated when
    needed. It is also helpful if you set your first initial background
    very early in your program, and then immediately replace the
    background after it is no longer in use. This helper function
    supports this background management for your application.
  - backgroundName is a key for the Backgrounds roAssociative array of
    backgrounds.
  - Backgrounds is an roAssociative array of background name keys and
    file path string values
  - This function creates an roBitmap out of the background image file
    and returns a region the size of the entire roBitmap.


###### Example: bslDefender.brs


If spriteMap.xml contains the following:

~~~~
<DefenderBitmapSet>
<ExtraInfo cellsize="40"/>
<Bitmap name="Background" filespec="pkg:/images/background.png" />
<Bitmap name="game-over" filespec="pkg:/images/gameover.png" />
<Bitmap name="title-screen" filespec="pkg:/images/Splash.gif" />
<Bitmap name="water_strip" filespec="pkg:/images/water_sprite.png">
<Region name="a" x="0" y="" w="40" h="40" t="225" />
<Region name="b" x="40" y="0" w="40" h="40" t="225" />
</Bitmap>
<Animation name="water">
<frame use="water_strip.a" />
<frame use="water_strip.b" />
</Animation>
</DefenderBitmapSet>
~~~~

Then

~~~~
 BrightScript> xml = ReadAsciiFile("pkg:/images/map.xml")
 BrightScript> bitmapset = dfNewBitmapSet(xml)
 BrightScript> cellwidth=app.bitmapset.extrainfo.cellsize.toint()
 BrightScript> print bitmapset.regions
 Background: <Component: roRegion>
 game-over: <Component: roRegion>
 title-screen: <Component: roRegion>
 water_strip.a: <Component: roRegion>
 water_strip.b: <Component: roRegion>
 water_strip: <Component: roRegion>
 BrightScript> print bitmapset.animations.water
 <Component: roRegion>
 <Component: roRegion>
 BrightScript> dfDrawMessage(screen, bitmapset.regions["game-over"])
 BrightScript> REM screen now shows gameover.png image centered on screen
~~~~
