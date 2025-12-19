---
title: Statement Summary
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

# Statement summary

BrightScript supports the following familiar looking statement types:

~~~
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
~~~

BrightScript is not case sensitive.  

Each statement's syntax is documented precisely later in the manual.

For example:

~~~
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
~~~


Each line may contain a single statement, or a colon ( : ) may be used
to separate multiple statements on a single line.  

~~~
myname = "fred"
if myname="fred" then yourname = "barney" : ? yourname
~~~
