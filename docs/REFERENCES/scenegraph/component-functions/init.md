---
title: init()
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


Allows initialization and other scripted control of a SceneGraph XML component.

If the \<script\> element contains the definition of a function named init() that has no parameters, that function will be invoked after the XML file has been parsed, and the nodes contained in the file have been created and had their fields set to the values in the XML. Typical uses of the init() function are to cache roSGNode values in the script global variable that will be frequently used in other functions in the script, and to set up field observers that will call other BrightScript functions when the observed field changes value. See [Component initialization order](doc:component-initialization-order) for complete information on the initialization order for components defined in XML, and the implications of that initialization order for field settings and observer functions.

#### Syntax

```
sub init()
  ...
end sub
```

#### Example

If the XML file contains a Poster node element with id="MyPoster", the XML file below will be parsed, creating the Poster node, then the init() function will be called to cache a pointer to that node, set up an observer of the Poster node translation field, and print the value of the Poster node translation field in the console whenever it changes.

**Using the init() function in XML**

~~~~
<?xml version="1.0" encoding="utf-8" ?>

<component>

<script type="text/brightscript" >
<![CDATA[

function posterTranslationChanged()
    print "MyPoster's translation field changed to "; m.poster.GetField("translation")
end function

function init()
    m.poster = m.top.FindNode("MyPoster")
    m.poster.ObserveField("translation", "posterTranslationChanged")
end function

]]>
</script>

<children>

<Poster id = "MyPoster" />

</children>

</component>
~~~~