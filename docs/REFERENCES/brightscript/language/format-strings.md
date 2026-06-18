---
title: "Format strings"
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


A BrightScript Format string is a [printf-like](https://en.wikipedia.org/wiki/Printf) format string that is similar to that provided by C, C++, and other languages.

Format strings can be used by BrightScript calls [`<formatStr>.Format(args....)`](doc:ifstringops) and for certain BrightScript data type calls [`<value>.ToStr(formatStr)`](doc:iftostr).

The format string consists of ordinary characters (other than '%'), which are directly copied to the output string, and conversion specifications (which start with '%').

A conversion specification has the following syntax:

`%[flags][width][.precision]type`

The `flags`, `width`, and `precision` fields are optional, and they may control the conversion format.

##### Example

```brightscript
"%02x%02x%02x".Format(255, 0, 128) ' returns "ff0080"
```

See the [ifToStr interface](doc:iftostr) for more examples.

## type

The required type field specifies the type of conversion.

| Type Character | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| %              | Use '%%' to encode a literal percent character.              |
| d              | Signed decimal integer.                                      |
| x, X           | Unsigned hexadecimal integer. 'x' uses lowercase letters, 'X' uses uppercase. |
| o              | Unsigned octal integer                                       |
| e, E           | Floating point rounded and displayed as exponential format: [-]d.ddd(e/E)(+/-)dd. One digit is placed before the decimal point, and the 'precision' digits are placed after the decimal point.<br /><br />The default precision is 6. If the precision is 0, no decimal point character appears. |
| f, F           | Floating point rounded and displayed in decimal format: [-].ddd.ddd: The number of digits after the decimal point is specified by 'precision'.<br /><br />The default precision is 6. If the precision is 0, no decimal point character appears. |
| g, G           | Floating point rounded and displayed as either 'e'/'f' or 'E'/'F' corresponding to 'g'/'G'.<br /><br />The number of digits after the decimal point is specified by 'precision'.<br /><br />Precision defaults to 6 if not specified.Trailing zeros are removed from the fractional part. |
| s              | String. If precision is specified, a maximum number of that many characters is displayed. |
| c              | Character. This is specified as integer Unicode value.       |

## flags

| Flag        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | Zero-pads the value. For integer and floating point number conversions (d, o, x, X, e, E, f, F, g, and G), the converted value is padded on the left with zeros rather than blanks.<br /><br />If a precision is given with a numeric conversion (d, o, x, and X), the 0 flag is ignored. |
| +           | Inserts a sign ('+' or '-') before signed numbers. By default a sign is only placed before negative numbers. |
| -           | Left adjusts the converted value on the field boundary (the default is right justification). |
| ' ' (space) | Inserts a blank before positive signed numbers. The '+' sign overrides a (space) if both are specified. |

## width

The width field is a decimal digit string (with non-zero first digit) that is used to specify a minimum field width.

If the formatted value has fewer characters than the field width, the value is padded according to the `type` and other flags.

## precision

Precision is a '.' (period) followed by an optional decimal digit string. This may also be specified as a '*', in which case, the precision is read from the next integer parameter to the format call.