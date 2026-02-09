---
title: "SceneGraph compilation"
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


SceneGraph components are compiled as the application is started. All
SceneGraph component files (with the extension `*.xml)`, and any related
BrightScript files (with the extension `*.brs)`, in the
`pkg:/components` directory, are compiled.

BrightScript files in the `pkg:/components` directory are compiled in
the same way as BrightScript files in the `pkg:/source` directory. The
SceneGraph component files are compiled by creating a list of component
names for the application, based on the `name` attribute of
the [**\<component\>**](component_1608292.html) element of each file.
These component names are checked for validity as instances of the
components are created in the application. This check is
*case-sensitive*: the component name to be created must *exactly* match
a name in the component name list, *including* case. The application
begins to create instances of SceneGraph components starting with a
component extended from a scene node class (either
[**Scene**](Scene_1607315.html) or
[**OverhangPanelSetScene**](OverhangPanelSetScene_1613108.html)). See
[**Component Initialization
Order**](Component-Initialization-Order_1611697.html) for a description
of the process that creates component
instances.

> There *must* be only *one* SceneGraph component extended from a scene
node class in the `pkg:/components` directory. All component names in an
application should be unique to avoid the possibility of creating an
instance of an unwanted component definition.