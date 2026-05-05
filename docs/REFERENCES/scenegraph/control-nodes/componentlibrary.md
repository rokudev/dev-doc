---
title: ComponentLibrary
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
Extends [**Node**](doc:node)

The ComponentLibrary node class downloads a library of custom SceneGraph components to be used in an application. The ComponentLibrary node should be used in a Scene node, such as Scene or OverhangPanelSetScene. One way to ensure that the library downloads before the SceneGraph application begins to compile the components for the application is to begin the download in the main.brs file that creates the Scene node, by adding an \<interface> field to the Scene node that can be used to monitor the download, and starts the application when the download is complete.

## Loading Component Libraries

In addition to the custom components you create specifically for your application, you can also create custom component libraries that you can download as part of your application.

To do this, define a ComponentLibrary node in the Scene node for your application. Set the id field of the node to a unique library ID for your application, and specify the URL to download the library from in the uri field of the node. As the SceneGraph scene is constructed, the library will be downloaded from the specified URL, and component instances will be created as needed for the application.

> _Since [Roku OS 9.4](doc:release-notes#roku-os-94)_, compilation info/failure messages for Roku SceneGraph component libraries when running side-loaded apps appear on the developer console, port 8085. (Previously, such messages were sent to port 8885.)

Component libraries can be packaged and signed the same way that apps are packaged and signed. You sideload your library, package it using the packaging tool, and then host it on the server of your choosing.

> Component libraries cannot be published to the Streaming Store for distribution.
>
> Component libraries cannot be used to load the [Roku Advertising Framework (RAF) library](doc:integrating-roku-advertising-framework).

### Manifest

A component library must include a separate [manifest file](doc:channel-manifest) in addition to the one for the app. The component library's manifest must include the [**rsg_version** flag](doc:channel-manifest) (`rsg_version=1.3`) to optimize app performance.

## Using Library Components

Components declared in a component library can be used inside the app just like custom components. Make sure to specify it in format _libraryName_:_componentName_. So say if a component named LoadingIndicator is defined in the SampleComponentLib library, then it may be used like this:

```xml
<SampleComponentLib:LoadingIndicator imageUri="pkg:/images/loader.png" translation="[700, 200]"/>
```

## Unsigned Component Libraries

Component libraries do not need to be packaged or signed with the same devid as the app. However, unsigned component libraries are required to be served over HTTPS before they can be accessed by published apps. See additional cases below:

* Sideloaded apps can access unsigned component libraries over HTTP or HTTPS.
* Published apps can only access unsigned component libraries over HTTPS.
* Published apps can access signed component libraries over HTTP if the app and the library share the same devid.

## Example

[ComponentLibraryTestChannel](https://github.com/rokudev/samples/tree/master/utilities) is a test app that downloads the component library implemented from the source code in [ComponentLibrary](https://github.com/rokudev/samples/tree/master/utilities). The test app then creates an instance of the \<LoadingIndicator> component implemented in the library.

## Fields

<Table align={["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>
      <th>
        Type
      </th>
      <th>
        Default
      </th>
      <th>
        Access Permission
      </th>
      <th>
        Description
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        loadStatus
      </td>
      <td>
        value string
      </td>
      <td>
        "none"
      </td>
      <td>
        READ_ONLY
      </td>
      <td>
        Indicates the progress of the library download. The possible values are:

        <table>
          <tr>
            <td>Value</td>
            <td>Meaning</td>
          </tr>
          <tr>
            <td>none</td>
            <td>The default if the library is not being downloaded</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>Library is downloading</td>
          </tr>
          <tr>
            <td>ready</td>
            <td>Library has downloaded successfully</td>
          </tr>
          <tr>
            <td>failed</td>
            <td>Download of the library has failed</td>
          </tr>
        </table>
      </td>

      <td>
        Value
      </td>

      <td>
        Meaning
      </td>

      <td>
        none
      </td>

      <td>
        The default if the library is not being downloaded
      </td>

      <td>
        loading
      </td>

      <td>
        Library is downloading
      </td>

      <td>
        ready
      </td>

      <td>
        Library has downloaded successfully
      </td>

      <td>
        failed
      </td>

      <td>
        Download of the library has failed
      </td>
    </tr>
    <tr>
      <td>
        Value
      </td>

      <td>
        Meaning
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        none
      </td>

      <td>
        The default if the library is not being downloaded
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        loading
      </td>

      <td>
        Library is downloading
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        ready
      </td>

      <td>
        Library has downloaded successfully
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        failed
      </td>

      <td>
        Download of the library has failed
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        id
      </td>

      <td>
        string
      </td>

      <td>
        no default
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        Set to a unique ID for the library for the application
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
    <tr>
      <td>
        uri
      </td>

      <td>
        uri
      </td>

      <td>
        no default
      </td>

      <td>
        READ_WRITE
      </td>

      <td>
        The URL of the library to be downloaded
      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>
