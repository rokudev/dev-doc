---
title: "roTimespan"
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



The Timespan object provides an interface to a simple timer for tracking the duration of activities. It's useful for tracking how an action has taken or if a specified time has elapsed from some starting event.


**Example: Timing an activity**

```
' ******************************************************
' Compute the number of millisecs to perform a task
' ******************************************************
timer = CreateObject("roTimespan")
timer.Mark()
DoTimeConsumingTask()
print "Task took: " + timer.TotalMilliseconds().ToStr()

' ******************************************************
' Compute how many seconds until rental expires
' ******************************************************
function secondsLeft(String expirationDate) as Integer
    str = expirationDate
    if str = invalid return -1
    ts = CreateObject("roTimespan")
    seconds = ts.GetSecondsToISO8601Date(str)
    print "Expires: " + str + " secs: " + Stri(seconds)
    return seconds
end function
```


## Supported interfaces

- [ifTimespan](doc:iftimespan)             
