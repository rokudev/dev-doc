---
title: "roDateTime"
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


The roDateTime provides an interface to obtain the current date/time for the player and manipulate date/times.

This component provides several options for obtaining attributes about the date/time. All times are GMT unless they are converted to the system timezone with a call to the method: toLocalTime(). 

This object is created with no parameters:

``CreateObject("roDateTime")``

The date/time of the object is set to the current system time when the object is created.  The date/time represented by the object can be changed by calling Mark(), FromSeconds(), or FromISO8601String().

**Example**

~~~
date = CreateObject("roDateTime")
print "The date is now "; date.AsDateString("long-date")
~~~

## Supported interfaces

- [ifDateTime](/docs/references/brightscript/interfaces/ifdatetime.md "ifDateTime")

> Some Roku OS versions may implement ifDateTime as ifRoDateTime
