---
title: "roRegex"
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



The roRegex component provides the powerful regular expression processing of the PCRE library to Brightscript strings.

> Please see the PCRE documentation (http://www.pcre.org/) for documentation on the PCRE library used for regular expression matching.  See the [perlre documentation](http://perldoc.perl.org/perlre.html) for complete documentation of the possible regular expressions this library can parse and match. In general, most Perl compatible regular expressions are supported.

This object is created with a string that represents the matching-pattern and a string to indicate flags that modify the behavior of the matching operation(s):

``CreateObject("roRegex", "[a-z]+", "i")``

The match string ("[a-z]+" in the example above, which matches all lowercase letters) can include most Perl compatible regular expressions documented in the PCRE documentation (http://www.pcre.org/).

Any combination of the following behavior flags ("i" in the example above which modifies to match upper and lowercase letters) is supported:

- "i" Case insensitive match
- "m" Multiline mode. The start of line "^" and end of line "$" constructs match immediately following or before any newline in the subject string as well as the very start and end of the string. Normally, just the start and end of the string would match.
- "s" Sets dot-all mode that includes newline in the ".*" regular expression. This modifier is equivalent to Perl's /s modifier.
- "x" Sets extended mode that ignores whitespace characters except when escaped or inside a character class. Characters between an unescaped # outside a character a character class and the next newline character, inclusive, are also ignored. This modifier is equivalent to Perl's /x modifier.


## Supported interfaces

- [ifRegex](doc:ifregex)