---
title: "Reference overview"
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


The reference materials in this section provide developers with detailed
syntactic and semantic information about the Roku platform's key development
facilities – chiefly, the BrightScript scripting language and
the SceneGraph framework.
This section serves as a sort of encyclopedia for developers,
who will frequently refer to it for information specific to different nodes,
components, interfaces, events, or methods.

## New developers

Developers new to Roku development are encouraged to read the following two
sections before consulting the reference materials:

- [BrightScript language reference](doc:brightscript-language-reference) — This
section explains the fundamentals of Roku's scripting language, BrightScript,
which is used to power all Roku apps.
Here you'll find information about the BrightScript component architecture,
global functions, reserved words, etc.
- [SceneGraph core concepts](doc:core-concepts) — SceneGraph
is the UI framework used to style all Roku apps. The core concepts section
explains how to handle critical app operations such as data scoping,
event handling, node and field observers, multi-thread operations, and much more.

## Experienced developers

For developers already acquainted with BrightScript and SceneGraph, information in the reference section helps answer such questions as:

- Is this keyword or function/subroutine name spelled correctly?
- Does a particular statement include all necessary clauses?
Are there any optional clauses?
- Does a given function/subroutine/method call include the proper number
and type of arguments?
What is the correct order of arguments?
Which variant signatures are available?
- Which default values are assumed in the absence of optional clauses or arguments?
- What are the initial states of data structures?
- How does a given statement or function/subroutine/method call affect
its parameters or its environment?
What can a programmer or troubleshooter expect after this entity's execution?
- Does the feature depend on environmental preconditions for proper operation?
- Does a particular interface include a method or attribute that serves purpose x?
Which purpose(s) does method or attribute y serve?
- What are typical error conditions that may occur when using a particular
statement or function/subroutine/method, and how are those error situations indicated?
- What is a typical or illustrative example of code to safely and properly use
statement x, make call y, or access node z?
- Which other aspects of the system are typically used in conjunction
with – or are especially relevant to – a particular feature?
- (How) Does the existence, behavior or structure of statement x, call y,
or object/component z vary significantly with system version?

Aspects of the last question are specially covered in the separate [Deprecated APIs](doc:deprecated-apis) document,
which developers should revisit periodically, or whenever notified by Roku,
in order to keep their channels current for certification purposes.
