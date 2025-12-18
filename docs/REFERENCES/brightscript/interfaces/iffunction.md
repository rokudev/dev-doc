---
title: Iffunction
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

# ifFunction

Interface equivalent for intrinsic type Function.


## Implemented by

| Name       | Description                               |
| ---------- | ----------------------------------------- |
| [roFunction](/docs/references/brightscript/components/rofunction.md "roFunction") | Object equivalent for intrinsic type Function |


## Supported methods

### GetSub() As Function

You can get a plain (non-referenced) version of the value by calling the this method.

### SetSub(value As Function) As Void

This method can be used for in/out function parameters. If you have a boxed object, you can change the value in the object via this method, without changing the variable reference itself.

```
Function Main()
    f1 = Foo
    print "f1 "; Type(f1); "="; f1
 
    f2 = Box(Foo)
    print "f2 "; Type(f2); "="; f2
 
    print "adjusting f2"
    AdjustFun(f2)
 
    print "f2 "; Type(f2); "="; f2
    print "f2()"; "="; f2()
 
    f3 = f2.GetSub()
    print "f3 "; Type(f3); "="; f3
End Function
 
Function AdjustFun(f)
    f.SetSub(Bar)
End Function
 
Function Foo()
    return "--Foo--"
End Function
 
Function Bar()
    return "--Bar--"
End Function
==>
f1 Function=<Function: foo>
f2 roFunction=<Function: foo>
adjusting f2
f2 roFunction=<Function: bar>
f2()=--Bar--
f3 Function=<Function: bar>
```