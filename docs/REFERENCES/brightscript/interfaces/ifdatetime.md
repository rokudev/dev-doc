---
title: Ifdatetime
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

# ifDateTime

## Implemented by

| Name       | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| [roDateTime](/docs/references/brightscript/components/rodatetime.md "roDateTime") | The roDateTime provides an interface to obtain the current date/time for the player and manipulate date/times |


## Supported methods

### Mark() as Void

#### Description

Sets the date/time value to the current UTC date and time.

> roDateTime objects are automatically marked on creation.

### ToLocalTime() as Void

#### Description

Offsets the date/time value from an assumed UTC date/time to a local date/time using the system time zone setting. This function is not idempotent, and multiple calls will do multiple timezone adjustments to the time yielding an incorrect result.

### GetTimeZoneOffset() as Integer

#### Description

Returns the offset in minutes from the system time zone to UTC. For example, if the system time zone is in PDT / UTC-7 the value returned would be 420.

> The time zone offset is returned for the current date/time, regardless of the object's date/time value.

#### Return Value

Minutes of offset as Integer.

### AsSeconds() as Integer

#### Description

Returns an Integer representing the date/time as the number of seconds from the Unix epoch (00:00:00 1/1/1970 GMT).

#### Return Value

Number of seconds as Integer.

### AsSecondsLong() as Object

#### Description

Returns a LongInteger representing the date/time as the number of seconds from the Unix epoch (00:00:00 1/1/1970 GMT).

#### Return Value

Number of seconds as a LongInteger.

### FromSeconds(numSeconds as Integer) as Void

#### Description

Sets the date/time value using the number of seconds from the Unix epoch.

#### Parameters

| Name       | Type    | Description                                |
| ---------- | ------- | ------------------------------------------ |
| numSeconds | Integer | The number of seconds from the Unix epoch. |

### FromSecondsLong(numSeconds as LongInteger) as Void

#### Description

Sets the date/time value using the number of seconds from the Unix epoch.

#### Parameters

| Name    | Type                   | Description                                |
| ------- | ---------------------- | ------------------------------------------ |
| seconds | Integer or LongInteger | The number of seconds from the Unix epoch. |

### ToISOString() as String

#### Description

Returns an ISO 8601 representation of the date/time value.

#### Return Value

ISO 8601 as String, e.g. "2021-03-25T18:53:03+0000"

### ToISOString(format as String) as String



#### Description

Returns an ISO 8601 representation of the date/time value with milliseconds precision.

#### Parameters

| Name   | Type   | Format      |
| ------ | ------ | ----------- |
| format | String | The format of the date string to be returned, which is "milliseconds" |

#### Return Value

ISO 8601 as String with milliseconds precision, e.g. "2021-03-25T18:53:03.220+0000"

### FromISO8601String(dateString as String) as Void

#### Description

Sets the date/time using a string in the ISO 8601 format. For example "YYYY-MM-DD HH:MM:SS" e.g "2009-01-01 01:00:00.000" or "2009-01-01T01:00:00.000".

> This function is unaware of the local time zone, so these time formats are effectively UTC even though the ISO 8601 spec says they should be in local time. The above formats are also the only formats recognized by this function, even though the ISO 8601 spec contains other valid formats.

#### Parameters

| Name       | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| dateString | String | The ISO-8601 string to be used to set the date and time. |

### asDateStringLoc(format as String) as String

*Available since Roku OS 12.0*

#### Description

Returns the localized date of the device. 

#### Parameters

| Name   | Type   | Description                                                  |
| :----- | :----- | :----------------------------------------------------------- |
| format | String | Specify the format of the date string to be returned: ${date-string-format} |

{#date-string-format}

- full
- long
- medium
- short
- custom formatting string using date symbols (for example, "MMM d, y")

#### Custom date formatting values

| Date symbol |                       Description                       |
| :---------: | :-----------------------------------------------------: |
|     EEE     |                Day of week, abbreviated                 |
|    EEEE     |                  Day of week long name                  |
|      d      |          Day of month, numeric, minimum digits          |
|     dd      |   Day of month, numeric, 2 digits, zero pad if needed   |
|      M      |             Month, numeric, minimum digits              |
|     MM      |      Month, numeric, 2 digits, zero pad if needed       |
|     MMM     |                   Month - short name                    |
|    MMMM     |                    Month - long name                    |
|      y      |              Year, numeric, minimum digits              |
|     yy      | Year, numeric, two low-order digits, zero pad if needed |

#### Return Value

A date string corresponding to the specified format:

| Format                           | Example                  |
| :------------------------------- | :----------------------- |
| full                             | Friday, January 20, 2023 |
| long                             | January 20, 2023         |
| medium                           | Jan 20, 2023             |
| short                            | 1/20/23                  |
| custom (for example, "MM.EEE/y") | 01.Fri/2023              |

### asTimeStringLoc(format as String) as String

*Available since Roku OS 12.0*

#### Description

Returns the localized time of the device. 

#### Parameters

| Name   | Type   | Description                                                  |
| :----- | :----- | :----------------------------------------------------------- |
| format | String | Specify the format of the time string to be returned: ${time-string-format} |

{#time-string-format}

- short
- short-h12
- short-h24
- custom formatting string using time symbols (for example, "h:mm a")

#### Custom time formatting values

| Time symbol | Description                                  |
| :---------- | :------------------------------------------- |
| h           | hour (12-hour), minimum digits               |
| hh          | hour (12-hour), 2 digits, zero pad if needed |
| H           | hour (24-hour), minimum digits               |
| HH          | hour (24-hour), 2 digits, zero pad if needed |
| m           | minute, minimum digits                       |
| mm          | minute, 2 digits, zero pad if needed         |
| a           | AM PM, abbreviated                           |

#### Return Value

A time string corresponding to the specified format:

| Format                       | Example  |
| :--------------------------- | :------- |
| short                        | 11:25 pm |
| short-h12                    | 11:25pm  |
| short-h24                    | 23:25    |
| custom (for example, "h:mm") | 11:25    |

### AsDateString(format as String) as String

#### Description

Returns the date/time formatted string.

>  Day names, month names, separators, and order of fields may vary depending on the current locale.

#### Parameters

| Name   | Type   | Description                     |
| ------ | ------ | ------------------------------- |
| format | String | ${dateString-Format-Parameters} |

{#dateString-Format-Parameters}

| Format                    |
| ------------------------- |
| long-date                 |
| short-weekday             |
| no-weekday                |
| short-month               |
| short-month-short-weekday |
| short-month-no-weekday    |
| short-date                |
| short-date-dashes         |

#### Return Value

A dateString corresponding to the specified format.

| Format                    | Example dateString      |
| ------------------------- | ----------------------- |
| long-date                 | Tuesday October 9, 2012 |
| short-weekday             | Tue October 9, 2012     |
| no-weekday                | October 9, 2012         |
| short-month               | Tuesday Oct 9, 2012     |
| short-month-short-weekday | Tue Oct 9, 2012         |
| short-month-no-weekday    | Oct 9, 2012             |
| short-date                | 10/9/12                 |
| short-date-dashes         | 10-9-12                 |

> The order of the fields in both short-date formats is changed depending on the current locale:

| Locale               | Field Order |
| -------------------- | ----------- |
| Canada               | YYYY/MM/DD  |
| United States        | MM/DD/YY    |
| UK and rest of world | DD/MM/YY    |

### AsDateStringNoParam() as String

#### Description

Returns the date/time in long-date format.

#### Return Value

A date/time string in long-date format (for example, Tuesday October 9, 2012)

### AsMillisecondsLong() as Long

*Available since Roku OS 15.0*

#### Description

Returns a Long representing the date/time as the number of milliseconds from the Unix epoch (00:00:00 1/1/1970 GMT).

#### Return Value

A Long representing the date/time as the number of milliseconds from the Unix epoch.

### GetWeekday() as String

#### Description

Returns the day of the week.

> This function always returns the canonical English day of week names, regardless of the current locale.  For a locale-independent index, see the [GetDayOfWeek()](#getdayofweek-as-integer) function.

#### Return Value

Week value as a String (e.g. "Monday").

### GetYear() as Integer

#### Description

Returns the date/time value's year

#### Return Value

Returns the year value as an Integer, e.g. 2015

### GetMonth() as Integer

#### Description

Returns the date/time value's month.

#### Return Value

Month value as an Integer (1=Jan, 12=Dec).

### GetDayOfMonth() as Integer

#### Description

Returns the date/time value's day of the month.

#### Return Value

Date value as an Integer (1-31).

### GetHours() as Integer

#### Description

Returns the date/time value's hour within the day.

#### Return Value

Hour value as an Integer (0-23)

### GetMinutes() as Integer

#### Description

Returns the date/time value's minute within the hour.

#### Return Value

Minute value as an Integer (0-59)

### GetSeconds() as Integer

#### Description

Returns the date/time value's second within the minute.

#### Return Value

Second value as an Integer (0-59).

### GetMilliseconds() as Integer

#### Description

Returns the date/time value's millisecond within the second.

#### Return Value

Millisecond value as an Integer (0-999).

### GetLastDayOfMonth() as Integer

#### Description

Returns the date/time value's last day of the month.

#### Return Value

Day as an Integer (28-31)

### GetDayOfWeek() as Integer

#### Description

Returns the date/time value's day of week.

#### Return Value

Day value as an Integer (Sunday=0, Monday=1, ..., Saturday=6).
