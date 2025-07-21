---
title: Test Page
excerpt: Description for the test page.
deprecated: false
hidden: true
metadata:
  title: Test Page
  description: This is a test page
  robots: index
next:
  pages:
    - slug: how-apps-work
      title: How apps work
      type: basic
---
# Building your first app

You can build your first Roku app by modifying Roku's Hello World sample. After you sideload the app, you can use the Roku debug console to view the app's runtime output.

<br />

## Viewing the directory structure

<br />

To get started, [download the Hello World sample app](https://github.com/rokudev/hello-world/archive/refs/heads/master.zip) and unzip it if you have not done so already. Expand the **/hello-world-master/dist/apps/hello-world** folder to view the app's directory structure. The directory of a Roku app typically contains the following folders and files:

* The **components** folder contains the SceneGraph XML files that define the app's layout.
* The **source** folder contains the main entry point for launching the app.
* The **images** folder contains the splash screen image and other artwork for the app.
* The **manifest** file defines the app attributes and versioning.
* The **makefile** is an optional utility for installing the app. See Using a makefile for more information.

> The maximum number of files inside a single directory should be less than 100 to avoid performance issues.

## Editing the Hello World app

To edit the text displayed on your television screen by the sample app, follow these steps:

1. Browse to the /**hello-world-master/dist/apps/hello-world.zip** file and extract the archive.

2. Expand the **/hello-world-master/dist/apps/hello-world/components** folder and then open the **helloworld.xml** file.

3. In the [SceneGraph **Label** node](/docs/references/scenegraph/label-nodes/label.md), update the **text** field (line 5) to the string you want displayed on your television screen (for example, "My first Roku app!").

4. In the [init() function](/docs/references/scenegraph/component-functions/init.md), you can also set the **label.color** field (line 27) to a different hex code (for example, white, which is 0xFFFFFF).

5. Save the file.