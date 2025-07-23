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

6. Zip the contents of the **hello-world** directory; do not zip the directory itself or the development application installer will report an error when you try to upload the app. Name the zip file something that makes it easy to find (for example, my-hello-world.zip).

## Sideloading the updated sample app

To sideload the updated Hello World sample app, follow these steps:

1. In your web browser, enter the URL of your Roku device, and then log in (the **User Name** is "rokudev"; the password is the one you created when you activated developer mode on your Roku device.

2. In the Development Application Installer, click **Upload**, and then select the **/hello-world-master/dist/apps/hello-world/my-hello-world.zip** file.

3. The updated Hello World app launches on your Roku device and displays "My first Roku app!" in white on the screen.

   ![roku600px my-first-roku-app](https://image.roku.com/ZHZscHItMTc2/my-first-roku-channel.jpg)

<br />

## Using the debug console

You can use the [Roku debug console](/docs/developer-program/debugging/debugging-channels.md) to view the output of a Roku app during runtime. If the app fails during runtime, the debug console displays the line number of the error, as well as the contents of variables at the time of the failure. If the app has compilation errors, the debug console displays them as well. It is recommended to have the debug console open whenever you are running a sideloaded app.

To open the debug console, follow these steps :bell:

<Image align="center" alt="Folders" border={false} caption="Some Folders" src="https://m.media-amazon.com/images/I/71YnVN9UC9L.jpg" width="300px" />

For more information, read the [Getting Started Guide](/roku-1/update/docs/introduction-to-roku-development)

<br />

<SimpleStepper>
  <SimpleStep header="Step 1 : Plan">
    Plan your documents and gather your resources
  </SimpleStep>

  <SimpleStep header="Step 2 : Write">
    Write effective documentation
  </SimpleStep>

  <SimpleStep header="Step 3 : Review">
    Review and refine your content
  </SimpleStep>
</SimpleStepper>

<br />

## Performance

<Table>
  <thead>
    <tr>
      <th>
        Best Practice
      </th>

      <th>
        Rationale/Benefits
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Minimize perceived latency by providing active feedback during all operations that may take longer than a second to complete.
      </td>

      <td>
        Keeping users entertained and informed during routine time-intensive operations like video buffering and app loading gives the illusion of added performance, and positively impacts users’ perception of app quality.

        <br />
      </td>
    </tr>

    <tr>
      <td>
        Optimize your app code to provide smooth transitions and animations.
      </td>

      <td>
        Jerky or blocky transitions erode the seamlessness of the Roku user experience and feel unfinished or “broken” to users.

        <ListComponent header="Sample list" items={["The first step", "The second step", "The third step"]} />
      </td>
    </tr>

    <tr>
      <td>
        Sample row
      </td>

      <td>
        \<SimpleTable &#x20;
        &#x20; columns=\{\['Name', 'Age', 'Country']}
        &#x20; data=\{\[
        &#x20;   \{ Name: 'Alice', Age: 25, Country: 'USA' },
        &#x20;   \{ Name: 'Bob', Age: 30, Country: 'UK' },

                <ListComponent header="Sample list" items={["Go to the Home Screen", "Navigate to Settings", "Check for updates"]} />

        ]}\
        />
      </td>
    </tr>
  </tbody>
</Table>