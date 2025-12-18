---
title: Componentlibrary
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

# ComponentLibrary

Extends [**Node**](/docs/references/scenegraph/node.md)

The ComponentLibrary node class downloads a library of custom SceneGraph components to be used in an application. The ComponentLibrary node should be used in a Scene node, such as Scene or OverhangPanelSetScene. One way to ensure that the library downloads before the SceneGraph application begins to compile the components for the application, is to begin the download in the main.brs file that creates the Scene node, by adding an `<interface>` field to the Scene node that can be used to monitor the download, and starts the application when the download is complete.

## Loading Component Libraries

In addition to the custom components you create specifically for your application, you can also create custom component libraries that you can download as part of your application.

To do this, define a ComponentLibrary node in the Scene node for your application. Set the id field of the node to a unique library ID for your application, and specify the URL to download the library from in the uri field of the node. As the SceneGraph scene is constructed, the library will be downloaded from the specified URL, and component instances will be created as needed for the application.

> *Since Roku OS 9.4*, compilation info/failure messages for Roku SceneGraph component libraries when running side-loaded apps appear on the developer console, port 8085. (Previously, such messages were sent to port 8885.)

Component libraries can be packaged and signed the same way that apps are packaged and signed. You sideload your library, package it using the packaging tool, and then host it on the server of your choosing.

> Component libraries cannot be published to the Streaming Store for distribution.

> Component libraries cannot be used to load the [Roku Advertising Framework (RAF) library](/docs/developer-program/advertising/integrating-roku-advertising-framework.md).

### Manifest

A component library must include a separate [manifest file](/docs/developer-program/getting-started/architecture/channel-manifest.md) in addition to the one for the app. The component library's manifest must include the [**rsg_version** flag](/docs/developer-program/getting-started/architecture/channel-manifest.md#special-purpose-attributes) (`rsg_version=1.2`) to optimize app performance.

## Using Library Components

Components declared in a component library can be used inside the app just like custom components. Make sure to specify it in format *libraryName*:*componentName*. So say if a component named LoadingIndicator is defined in the SampleComponentLib library, then it may be used like this:

~~~
<SampleComponentLib:LoadingIndicator imageUri="pkg:/images/loader.png" translation="[700, 200]"/>
~~~

## Unsigned Component Libraries

Component libraries do not need to be packaged or signed with the same devid as the app. However, unsigned component libraries are required to be served over HTTPS before they can be accessed by published apps. See additional cases below:

- Sideloaded apps can access unsigned component libraries over HTTP or HTTPS.
- Published apps can only access unsigned component libraries over HTTPS.
- Published apps can access signed component libraries over HTTP if the app and the library share the same devid.

## Example

[ComponentLibraryTestChannel](https://github.com/rokudev/samples/tree/master/utilities) is a test app that downloads the component library implemented from the source code in [ComponentLibrary](https://github.com/rokudev/samples/tree/master/utilities). The test app then creates an instance of the <LoadingIndicator> component implemented in the library.

## Fields

| Field        | Type              | Default                                   | Access Permission | Description           |
| ------------ | ----------------- | ----------------------------------------- | ----------------- | --------------------- |
| loadStatus   | value string      | "none"                                    | READ_ONLY         | Indicates the progress of the library download. The possible values are: ${loadStatusValues} |
| id           | string            | no default                                | READ_WRITE        | Set to a unique ID for the library for the application |
| uri          | uri               | no default                                | READ_WRITE        | The URL of the library to be downloaded |

{#loadStatusValues}

| Value   | Meaning                                            |
| ------ | ------------------------------------------------- |
| none    | The default if the library is not being downloaded |
| loading | Library is downloading                             |
| ready   | Library has downloaded successfully                |
| failed  | Download of the library has failed                 |
