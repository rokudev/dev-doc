---
title: "ifTimeSpan"
excerpt: 'Interface for tracking elapsed time via Mark, TotalMilliseconds, and TotalSeconds methods'
deprecated: false
hidden: false
metadata:
  title: 'ifTimeSpan'
  description: 'Documents the ifTimeSpan interface, which provides methods to set a Mark point and measure elapsed microseconds, milliseconds, and seconds from that point.'
  robots: index
next:
  description: ''
---



## Implemented by

| Name         | Description                                                           |
|--------------|-----------------------------------------------------------------------|
|[roTimespan](doc:rotimespan)    | The Timespan object provides an interface to a simple timer for tracking the duration of activities                                                                      |


## Supported methods

### Mark() as Void

#### Description

Sets the "Mark" point to the current time. The Mark point is also automatically set to the current time when an roTimespan object is created.

### TotalMicroseconds() as Integer

#### Description

Returns the total number of microseconds from the "Mark" point to the current time.

#### Return Value

The number of microseconds. 

### TotalMilliseconds() as Integer

#### Description

Returns the total number of milliseconds from the "Mark" point to the current time.

#### Return Value

The number of milliseconds. 

### TotalSeconds() as Integer

#### Description

Returns the total number of seconds from the "Mark" point to the current time.

#### Return Value

The number of seconds.

#### Example

```
x = timespan.TotalSeconds()
```

is equivalent to

```
x = Int(timespan.TotalMilliseconds() / 1000)
```

### GetSecondsToISO8601Date(date as String) as Integer

#### Description

Parses the ISO8601 date (e.g. 2008-11-29T14:54:02.171) and returns the number of seconds from now (not the "Mark" point) until the specified date/time.

The date provided and the current time calculations are all done assuming UTC. The "Z" timezone part of the ISO8601 string is ignored.

#### Parameters

| Parameters                              | Type           | Description                                                                                                                                                          |
| --------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date    | String | The ISO8601date to be parsed. |

#### Return Value

The number of seconds. 