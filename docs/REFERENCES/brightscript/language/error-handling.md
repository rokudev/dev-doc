---
title: "Error handling in BrightScript"
excerpt: 'Exception trapping in BrightScript using TRY, CATCH, and THROW'
deprecated: false
hidden: false
metadata:
  title: 'Error handling in BrightScript | Roku Developer Docs'
  description: 'Describes error handling in BrightScript, covering the TRY/CATCH/THROW model, exception objects with number, message, and backtrace fields, and re-throws.'
  robots: index
next:
  description: ''
---


Formal support for error handling  came to BrightScript in [Roku OS 9.4](doc:release-notes#roku-os-94), with the introduction of exception trapping. BrightScript's `TRY`/`CATCH`/`THROW` model may be familiar to developers who have worked with other popular programming languages, such as Java or Python. This article provides an overview of error handling under BrightScript, especially as achieved through the exception trapping feature. Detailed statement syntax is discussed in the Reference article about [Program statements](doc:program-statements).

## Proper usage of exceptions

Exceptions are the *rare* deviations from expected app behavior that are not easily handled (or which, for various reasons, cannot be handled at all) in regular code. Apps should be engineered to handle all foreseeable circumstances in regular code, proactively avoiding errors whenever possible. But some situations that can be anticipated, and certainly those that cannot be predicted, may best be handled by an approach of, "let the error happen and then recover from it." BrightScript's `TRY`/`CATCH`/`THROW` facilities exist to address such cases.

It is important for the developer to view BrightScript's exception trapping features as a last-recourse alternative to allow the app to recover and continue operating in the face of anomalous conditions. Use of exception trapping is ill-advised to deal with normal cases, where careful programming can prevent error. This is because, for example, the exception trapping process is not as efficient as regular code (the execution of which is optimized for performance). Furthermore, the performance of `TRY`/`CATCH` itself is optimized for the "no error" case. Thus, when a particular exception occurs more frequently than, say, once in a thousand attempts, an app may be more efficient if it deals with the problem directly, through "normal" code, rather than by relying on the "backstop" that is provided by the exception trapping mechanism.

*Catching* an exception – providing a sequence of code that the system executes when something goes wrong – means an app *can* safely recover and continue running when it would otherwise have crashed. *Throwing* an exception – passing notification of an error condition to calling code (or to the system) – allows a problem to be handled, or reported clearly, instead of being silently ignored or resulting in more undesirable misbehavior, perhaps further along in execution, once information about the original anomaly is lost. The bulk of this article examines the catch and throw processes and associated mechanisms.

> When speaking of exceptions, "catching" and "trapping" are equivalent expressions. So are "throwing" and "raising."

## Catching and handling exceptions

The code that handles an exceptional situation resides in a `TRY`/`CATCH` block. Here is an example:

```brightscript
print "I'm about to try something that might not work"
try
    do_something_that_might_throw_an_exception()
    print "It worked!"
catch e
    print "It went wrong:",e.message
end try

print "I've finished the attempt. (This is printed whether or not an exception was caught.)"
```

BrightScript will treat the block as follows:

- Run the code which appears between the `TRY` and the `CATCH e.`
- If no (system-recognized) error condition occurs, skip the code between `CATCH e` and `END TRY`. Continue at the line after the `END TRY.`
- If a system-recognized error condition occurs, stop executing the code between `TRY` and the `CATCH e`. In that case, assign an exception object to `e`, and then execute the code between `CATCH e` and `END TRY`.

## The exception object

When an exception is caught, information concerning the circumstances is collected within an exception object, which is then assigned to the variable named in the relevant CATCH clause. The table here lists publicly available fields of an exception object, which are further explained below.

| Name      | Type    | Meaning                       |
| :-------- | :------ | :---------------------------- |
| number    | Integer | The BrightScript error number |
| message   | String  | The error message text        |
| backtrace | roArray | The location of the error     |

### The error number

The number is the same as printed when a program crashes. For example, consider this code:

```brightscript
sub main()
    x = 1
    print x.foo
end sub
```

Execution produces the following output, due to an exception that is *not* caught:

```brightscript
Syntax Error. (runtime error &h02) in /tmp/dev/example.brs(3)
```

Note that the system's standard error reporting format may not provide information that is most meaningful to the user, or present it in the most useful format. The following version of `main()` is written to catch exceptions and report them to the user in a form that the programmer has defined:

```brightscript
sub main()
    x = 1
    try
        print x.foo
    catch e
        print e.number,e.message
    end try
end sub
```

Here is the "programmer-approved" output produced by the enhanced `main()`:

```brightscript
2              Syntax Error.
```

### The backtrace

The backtrace associative array contains information concerning the location of the code being executed when an exception occurred; it is primarily useful during diagnosis of problems in an app. The table below lists the keys of data items, which may be found in a backtrace array.

| Name        | Type    | Meaning                                                 |
| :---------- | :------ | :------------------------------------------------------ |
| function    | String  | The full prototype of the function containing the error |
| filename    | String  | The source file containing the error                    |
| line_number | Integer | The line number within the source file                  |

Element 0 of the array is the outermost function; element `count()-1` is the innermost (i.e., the function that was directly executing when the exception occurred). This ordering corresponds to that used in a debugger or crash dump backtrace display.

The `function` prototype text ("signature") will be something like `"main() As Void"` or `"foo(x As Float, y As Float) As Float"`. Here is an example of custom error display code that extracts the function name for a more concise display:

```brightscript
CATCH e
    prototype = e.backtrace[e.backtrace.count()-1].function
    name = LEFT(prototype,INSTR(prototype,"(")-1)
    print "Error in function ";name
END TRY
```

The collection of keys present in the backtrace array may vary. The function prototype will always be present (but, depending on the dynamic execution situation, the name may be a placeholder, e.g., the anonymous function name "`$anon_1`", which does not correspond to a programmer-chosen method name in app source code). Filename and line number will either both be present, or neither. Other items may be present, or could someday be added to this structure, but developers should only count on and use the ones documented here; others are for internal use only and their contents, meaning, and even continued existence are never guaranteed.

## Throwing exceptions

The app may *throw* an exception to indicate something unexpected has gone wrong in app code. The simplest form is:

```brightscript
THROW "One of the cross beams has gone out of skew on the treadle."
```

This causes an exception with error number `ERR_USER` (`&h28`) as the number, and the supplied string as the message. If not caught, it will reach the crash dump or debugger, as with any other error:

```brightscript
Current Function:
001:  SUB demo()
002:*     THROW "One of the cross beams has gone out of skew on the treadle"
003:  END SUB
One of the cross beams has gone out of skew on the treadle (runtime error &h28) in /tmp/dev/example.brs(2)
Backtrace:
#1  Function demo() As Void
   file/line: /tmp/dev/example.brs(3)
#0  Function main() As Void
   file/line: /tmp/dev/example.brs(6)
Local Variables:
global           &h0020 Interface:ifGlobal
m                &h0010 roAssociativeArray refcnt=3 count:0

Brightscript Debugger>
```

A `roAssociativeArray` that describes the exception is also an acceptable argument to `THROW`. Any missing fields will will be set with default values as shown in the table below:

| Name      | Default                                           |
| :-------- | :------------------------------------------------ |
| number    | `ERR_USER` (`&h28`)                               |
| message   | Look up the standard error message for the number |
| backtrace | The location of the `THROW`.                      |

Consider this example, which produces a division by zero error, along with a message that helpfully directs the user to the assumed source of fault:

```brightscript
THROW {number: ERR_DIV_ZERO, message: "Division by zero in complex number library"}
```

The ability to `THROW` an associative array, coupled with the system's default assumptions about the values of missing elements in such arrays, implies that the two following `THROW` statements are equivalent:

```brightscript
THROW "My error message"
THROW {message: "My error message"}
```

In the second case, the system assumes that the value of `number` is `ERR_USER` (`&h28`), and supplies the appropriate `backtrace`, just as if it would have in the "string-only" case.

In constructing the `roAssociativeArray` to be used a `THROW` argument, one normally omits the `backtrace`, allowing BrightScript to supply accurate information automatically. Supplying a modified or constructed `backtrace` is not recommended, as malformed information may cause the system to treat a `THROW` as "invalid," while incorrect or (permissibly) omitted information may hamper the efforts of those charged with diagnosing problems in the code.

> BrightScript directly modifies the thrown exception object, rather than copying it. This should pose no difficulty in normal circumstances.

### Invalid throws

Attempts to `THROW` anything other than the acceptable arguments as defined here (including modified exception objects, which the system identifies as being improperly formed) will produce an `ERR_BAD_THROW` (`&h26`) error condition. This error is recoverable, however, and thoughtfully written code could deal intelligently with it.

Note that execution will *never* continue past a `THROW`; the statement will either `THROW` what it is given or `ERR_BAD_THROW`.

The following are just a few examples of invalid throws:

```brightscript
THROW 1
THROW []
THROW { number: "I am not a number!" }
THROW { message: ["Two","Messages"] }
THROW { backtrace: [ {} ] }   ' The function member in a backtrace entry is mandatory
THROW { backtrace: [ {function: "main()", line_number: "Five"} ] }
```

### Custom fields in exception objects

Custom information fields can be added to an exception without invalidating the `THROW`, so long as system-defined fields are left undisturbed. The custom fields can then be read by the `CATCH`-block that handles the exception. Roku recommends that any custom fields have names that begin with "`custom`"; fields with such names will not accidentally overwrite either existing system-defined fields, or any fields that Roku may eventually add to exception objects.

```brightscript
try
    fetch_web_page()
catch e
    if e.custom_http_response_code = 404 then
        print "The page didn't exist"
    else
        throw e      ' a re-throw – see relevant documentation for explanation
    end if
end try
```

### Re-throwing an exception

An exception object that has been caught is a valid argument to `THROW`. This is useful in some circumstances, for example:

#### Reacting to an error without handling it

```brightscript
try
    if m.already_failed_once <> true then do_something_which_might_fail()
catch e
    m.already_failed_once = true
    throw e
end try
```

#### Handling only some errors

```brightscript
LIBRARY "v30/bslCore.brs"

sub main()
    err = bslbrightscripterrorcodes()
    try
        do_something_which_might_fail()
    catch e
        if e.number = err.ERR_DIV_ZERO then
            print "Divided by zero. A pity, but let's proceed."
        else
            throw e
        end if
    end try
end sub
```

The above snippet handles only division by zero in `do_something_which_might_fail()`; all other errors are handled as though that `TRY`...`CATCH` were not there - either being handled by another `TRY`...`CATCH`, or terminating the program.

An exception is regarded as re-thrown if (and only if) the thrown exception object already contains a backtrace.

When an exception object with no backtrace is thrown:

- `rethrown` is set false; and
- `backtrace` is set to the location of the `THROW`.

When an exception object that contains a backtrace is thrown:

- `rethrown` is set true;
- `backtrace` is checked for validity, *but not modified;* and
- `rethrow_backtrace` is set to the location of the re-throw.

The `rethrown` field is *always* overwritten, so can be relied upon as an authoritative indication of which backtrace was created by the runtime. In particular, if `rethrown` is true, then `rethrow_backtrace` has been freshly set (as of the time of most recent modification of the exception object) with the location of the re-throw.

## Miscellaneous examples

Following are several code snippets that illustrate interesting aspects of BrightScript error-handling.

For example, `TRY`/`CATCH` blocks can be nested arbitrarily to provide multiple layers of error protection and recovery.

Below, although calling `reciprocal(0)` causes a division by zero, the function handles that exception itself, so the `TRY`/`CATCH` block in `main` *never* catches anything:

```brightscript
function reciprocal(x)
    try
        return 1/x
    catch e
        return 1e1000000  'This is so big it will be infinity
    end try
end function

sub main()
    print "Starting"
    try
        for i = -10 to +10
            print "1/";i;"=";reciprocal(i)
        end for
    catch e
        print "This never happens"
    end try
    print "Ending"
end sub
```

Here is an alternative that calculates the reciprocal directly in `main`:

```brightscript
sub main()
    print "Starting"
    try
        for i = -10 to +10
            try
                print "1/";i;"=";1/i
            catch e
                print "1/";i;" gives ";e.message
            end try
        end for
    catch e
        print "This never happens"
    end try
    print "Ending"
end sub
```

An outer `TRY`/`CATCH` block can handle errors caused in an inner `CATCH`:

```brightscript
sub main()
    print "Starting"
    x = "I'm not an array"
    try
        try
            print "x[0]*2=";x[0]*2
        catch e
            ' Spoiler: evaluating x[0] is about to cause an error
            print "I think that failed because ";x[0];" isn't a number"
    end try
    catch e
        print "Nope, I guessed wrong: ";e.message
    end try
    print "Ending"
end sub
```

Here is a variation, in which a `CATCH` itself contains a `TRY`/`CATCH` block, which, in turn catches any errors that *it* produces:

```brightscript
sub main()
    print "Starting"
    x = "I'm not an array"
    try
        print "x[0]*2=";x[0]*2
    catch e
        try
            print "I think that failed because ";x[0];" isn't a number"
        catch e
            print "Nope, I guessed wrong: ";e.message
        end try
    end try
    print "Ending"
end sub
```

Extracting the diagnostic portion into a separate subroutine yields the same results:

```brightscript
sub diagnose(x)
    try
        print "I think that failed because ";x[0];" isn't a number"
    catch e
        print "Nope, I guessed wrong: ";e.message
    end try
end sub

sub main()
    print "Starting"
    x = "I'm not an array"
    try
        print "x[0]*2=";x[0]*2
    catch e
        diagnose(x)
    end try
    print "Ending"
end sub
```
