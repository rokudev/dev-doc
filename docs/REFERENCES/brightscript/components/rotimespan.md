---
title: Rotimespan
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

# roTimespan


The Timespan object provides an interface to a simple timer for tracking the duration of activities. It's useful for tracking how an action has taken or if a specified time has elapsed from some starting event.


**Example: Timing an activity**

~~~
REM ******************************************************
REM Compute the number of millisecs to perform a task
REM ******************************************************
timer = CreateObject("roTimespan")
timer.Mark()
DoTimeConsumingTask()
Print "Task took: " + timer.TotalMilliseconds().ToStr()

REM ******************************************************
REM Compute how many seconds until rental expires
REM ******************************************************
Function secondsLeft(String expirationDate) As Integer
    str = expirationDate
    if str = invalid return -1
    ts = CreateObject("roTimespan")
    seconds = ts.GetSecondsToISO8601Date(str)
    print "Expires: " + str + " secs: " + Stri(seconds)
    return seconds
End Function
~~~


## Supported interfaces

- [ifTimespan](/docs/references/brightscript/interfaces/iftimespan.md "ifTimespan")             
