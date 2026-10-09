---
title: "Statement summary"
excerpt: 'Overview of supported statement types including If, For, While, and Function'
deprecated: false
hidden: false
metadata:
  title: 'Statement summary | Roku Developer Docs'
  description: 'Reference page for Statement summary. Lists supported statement types such as If, For, While, Try, Function, Print, and Goto.'
  robots: index
next:
  description: ''
---


BrightScript supports the following familiar looking statement types:

```brightscript
If / Then / Else If / Else / End If
For / To / End For / Step / Exit For
For Each / In / End For / Exit For
While / End While / Exit While
Try / Catch / End Try
Throw
Function / End Function / As / Return
Print (or ?)
Rem (or ')
Goto
Dim
End
Stop
```

BrightScript is not case sensitive.  

Each statement's syntax is documented precisely later in the manual.

For example:

```brightscript
function Main() as Void
    dim cavemen[10]
    cavemen.push("fred")
    cavemen.push("barney")
    cavemen.push("wilma")
    cavemen.push("betty")
    for each caveman in cavemen
        print caveman
    end for
end function
```


Each line may contain a single statement, or a colon ( : ) may be used
to separate multiple statements on a single line.  

```brightscript
myname = "fred"
if myname="fred" then yourname = "barney" : ? yourname
```
