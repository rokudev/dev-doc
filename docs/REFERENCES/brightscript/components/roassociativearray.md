---
title: "roAssociativeArray"
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


An associative array (also known as a map, dictionary or hash table) allows objects to be associated with string keys. Associative arrays are built into the language. They can be accessed implicitly by using the dot or bracket operators, or by calling functions from the [ifAssociativeArray](doc:ifassociativearray) interface. For example, the last three lines in this example are equivalent:

```
aa = { one : 1, two : 2, three : 3 }
x = aa["two"]
x = aa.two
x = aa.Lookup("two")
```

This object is created with no parameters:

```
CreateObject("roAssociativeArray")
```

It can also be created implicitly by using an Associative Array literal.

Starting from Roku OS 8, the quoted keys in Associative Array literals are now case-preserving. This change improves the readability of your code and is compatible with JSON usage.

**Example**

```
' Creation of associative arrays
aa1 = CreateObject("roAssociativeArray")   ' Explicitly
aa2 = {}                                   ' Implicitly
aa3 = {                                    ' With some initial values
    foo : 12,
    bar : 13
}

' Assigning values
aa1.AddReplace("Bright", "Script")  ' With explicit function calls
aa1.AddReplace("TMOL", 42)
aa1.boo = 112                       ' With dot operator
aa1["baz"] = "abcdefg"              ' With bracket operator

' Accessing values
print aa1.Bright           ' With dot operator (will print 'Script')
print aa1.Lookup("TMOL")   ' With function call (will print 42)
print aa1["boo"]           ' With bracket operator (will print 112)

' Using ifEnum interface to walk through keys in an associative array
for each key in aa1
    print "  " key "=" aa1[key]
end for
```

## Supported interfaces

- [ifAssociativeArray](doc:ifassociativearray)
- [ifEnum](doc:ifenum)             

