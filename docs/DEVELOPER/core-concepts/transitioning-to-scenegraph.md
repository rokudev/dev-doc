---
title: "Transitioning to SceneGraph"
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


The following summarizes how to transition from the older Roku API to
SceneGraph applications. In general, SceneGraph handles events without
requiring you to write custom event loops, and allows you easily add
custom event handlers by observing virtually any of the fields used in
your SceneGraph application. Also, SceneGraph supplies built-in node
classes that are very similar to some BrightScript UI screen components,
but also gives you much greater flexibility to build your own custom
screens. Because SceneGraph is more dynamic, flexible, and
object-oriented than the older Roku API for building UI elements, you
cannot write an equivalent SceneGraph application by simply substituting
different function names and argument lists for UI elements.

However, much of your existing BrightScript code that handles other
aspects of your application can probably be used in the new context of a
SceneGraph application. For example, calls to your existing BrightScript
functions can be added to any SceneGraph XML component file, by
specifying the location of the BrightScript file in the package
components directory in the **\<script\>** element. For example, if you
had a set of functions to manipulate URLs, you could add the following
**\<script\>** element to allow a SceneGraph component to call the
functions:

~~~
<script type = "text/brightscript" uri = "pkg:/components/uriutils.brs"/>
~~~

If these calls relied on application global data, you would have to set
up a *global node* as described in [Data scoping](doc:data-scoping)
for this data.

There is a simplifying assumption you can make when transitioning an
older Roku API application to SceneGraph. In many cases, SceneGraph
replaces a series of BrightScript component interface function calls
with setting and reading of node class fields of the equivalent
parameters. For example, the SetNumPinEntryFields() interface function
call for the roPinEntryDialog component is replaced by setting the
`pinLength` field of the internal **PinPad** node object of a
[PinDialog](doc:standard-pinpad-dialog) node. But note that for many of
the older Roku API screen components, you must develop your own custom
screen component equivalent from more fundamental SceneGraph node
classes. For example, you must develop an equivalent of the
roSearchScreen component using the
[MiniKeyboard](doc:minikeyboard) node class as the user
input basis of a custom SceneGraph search screen component. You must
then write additional BrightScript code to replicate the function of the
roSearchScreen component.

