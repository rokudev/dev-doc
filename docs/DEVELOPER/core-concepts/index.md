---
title: "SceneGraph core concepts"
excerpt: 'Core concepts of the SceneGraph framework for Roku app development'
deprecated: false
hidden: false
metadata:
  title: 'SceneGraph core concepts | Roku Developer Docs'
  description: 'Learn the SceneGraph framework''s core concepts, including XML configuration of screens, threading, event handling, data scoping, and graceful degradation.'
  robots: index
next:
  description: ''
---


The SceneGraph framework is used for developing apps. This framework incorporates two key concepts:

  - SceneGraph rendering of the app screens
  - XML configuration of the SceneGraph screens

The goal of this programming framework is to speed app development time by reducing the amount of procedural code that must be written to render a screen display. Instead, the appearance of the screen can be configured as screen component attributes set in XML files. Much of the appearance and behavior of screen components has been coded into the SceneGraph components that Roku provides, allowing you to quickly select and set the attributes of each component to match the design of your app, and allowing easier development of more complex screen displays than were possible in previous Roku firmware.

In addition, the SceneGraph XML programming framework includes a new capability to design your app's user interface for specific screen display resolutions, but also with the flexibility to allow the user interface to render correctly on Roku players that do not support the intended display resolution.

## Video lesson

You can learn more about the SceneGraph development framework by watching the [Core concepts](doc:debugging) video lesson in Roku's [SceneGraph: Build an App online video course](https://developer.roku.com/videos/courses/rsg/overview).

This lesson reviews core concepts for Roku app app development. It explains the basic design principles and key concepts for developing on the Roku platform, outlines the contents and structure of Roku apps, and compares the programming languages used to build Roku apps: SceneGraph and BrightScript. It highlights the different types of SceneGraph components you can use to build the app UI.

The lesson continues by providing a high-level overview of several key topics such as threading, event handling, and data scoping. It concludes by explaining the importance of factoring graceful degradation in the app design.
