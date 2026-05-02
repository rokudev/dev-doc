---
title: "Runtime functions"
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


## CreateObject(classname as String, \[optional parameters\]) as Object

Creates a BrightScript Component of class *classname* specified. Return
invalid if the object creation fails. Some Objects have optional
parameters in their constructor that are passed
after *name*.

For example:

```
app_mgr = CreateObject("roAppManager")
section = CreateObject("roRegistrySection", "Data")
```

## Type(variable, \[optional version\]) as String

Returns the type of a variable and/or object. See the BrightScript
Component specification for a list of types.

For example:

```
Print type(5) 'returns a 2.1 compatible type
Print type("my string", 3) 'return a Roku OS 3.0 type
```

## GetGlobalAA() as Object

Each script has a global Associative Array. It can be fetched with this
function.   

**New in Roku OS 3.0**

## Box(x as Dynamic) as Object

Box() will return an object version of an intrinsic type, or pass
through an object if given one.

``` 
 bo = box("string")
 bo = box(bo) ' no change to bo
```

## Run(filename as String \[ , Args…\]) As dynamic

>  This function is deprecated. 

## Run(filenamearray as Object \[ , Args…\]) As dynamic

> This function is deprecated. 

The run command will run a script from a script. Args may be passed to
the scripts Main() function, and the called script may return
arguments.   

If a filename string is passed, that file compiled and run.   
If an array of files are passed instead of a single filename, then each file is compiled and they are linked together, than run.

For example:

```
Sub Main()
    Run("pkg:/test.brs")
    BreakIfRunError(LINE_NUM)
    Print Run("test2.brs", "arg 1", "arg 2")
    if Run(["pkg:/file1.brs","pkg:/file2.brs"])<>4 then stop
    BreakIfRunError(LINE_NUM)     stop
End Sub


Sub BreakIfRunError(ln)
    el=GetLastRunCompileError()
    if el=invalid then
        el=GetLastRunRuntimeError()
        if el=&hFC or el=&hE2 then return
        'FC==ERR_NORMAL_END, E2=ERR_VALUE_RETURN
        print "Runtime Error (line ";ln;"): ";el
        stop
    else
        print "compile error (line ";ln;")"
        for each e in el
            for each i in e
                print i;": ";e[i]
            end for
        end for
        stop
   end if
End Sub
```

## Eval(code as String) as Dynamic

> Eval is deprecated effective immediately. Use of Eval() will cause compilation or runtime errors, see [Roku Manifest](doc:channel-manifest). Use [roXMLElement.parse()](doc:roxmlelement) or [parseJSON()](doc:global-utility-functions) instead of Eval() when initializing data. 
>
> To test whether a function exists, you can use this alternative method: 
>
> ```
> if getInterface(myAA.maybeFunc, "ifFunction") <> invalid then myAA.maybeFunc() 
> ```

Eval can be used to run a code snippet in the context of the current
function. It performs a compile, and then the bytecode execution.

If a compilation error occurs, no byte execution is performed, and Eval
returns an roList with one or more compile errors. Each list entry is an
roAssociativeArray with ERRNO and ERRSTR keys describing the error.

If compilation succeeds, bytecode execution is performed and the integer
runtime error code is returned. These are the same error codes as
returned by GetLastRunRuntimeError().

Eval() can be usefully in two cases. The first is when you need to
dynamically generate code at runtime.

The other is if you need to execute a statement that could result in a
runtime error, but you don't want code execution to stop. 

Example:

```
Print Eval("n=1/0")
```

Outputs:

```
20
```

That 20 = &h14 = ERR\_DIV\_ZERO = Divide by Zero error.

**Do not** use Eval() outside of the main() function as it can cause
unexpected bugs and crashes. Use parse XML or parseJSON instead when
initializing data. You can also use a downloadable component library to
get the dynamic code. 

## GetLastRunCompileError() as Object

Returns an roList of compile errors, or invalid if no errors. Each list
entry is an roAssociativeArray with the keys: ERRNO, ERRSTR, FILESPEC,
and LINENO.

## GetLastRunRuntimeError() as Integer

Returns an error code result after the last script Run().   

These two are normal:  

```
&hFC==ERR_NORMAL_END
&hE2==ERR_VALUE_RETURN
```

**Example: Assign variables to common runtime errors**

```
ERR_USE_OF_UNINIT_VAR = &hE9
ERR_DIV_ZERO = &h14
ERR_TM = &h18
ERR_USE_OF_UNINIT_VAR = &hE9
ERR_RO2 = &hF4
ERR_RO4 = &hEC
ERR_SYNTAX = 2
ERR_WRONG_NUM_PARAM = &hF1
```