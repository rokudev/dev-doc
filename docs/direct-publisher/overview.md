---
title: Overview
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

# Direct Publisher to SDK Conversion Guide

You can convert your Direct Publisher app to an SDK app with minimal coding via the [SceneGraph app template](https://github.com/rokudev/rdp-to-scenegraph-channel-template). The template provides similar features offered by Direct Publisher, including the same dedicated grid, details, and episode screens in the app UI; automated feed processing to populate the app screens with your content; and the ability to customize the logos, colors, and backgrounds in the app to match your brand. Once you complete the conversion steps in this document, you can test your app and publish it to the Streaming Store.

> The SceneGraph app template does not support video ads or payments. In addition, the template only supports content feeds that are 500KB or less. If you want to monetize your app or have a feed that exceeds the 500 KB limit, you must convert your app using the Roku SDK.
>
> If you want to include video ads in your converted app, you can use the [SceneGraph Developer Extensions (SGDEX client-stitched ad sample)](https://github.com/rokudev/SceneGraphDeveloperExtensions) as a template for your app.

## Requirements

To convert your Direct Publisher app to an SDK app, you need the following:

- [Roku customer account](https://my.roku.com/signup) that is [enrolled in the Roku developer program](https://developer.roku.com/enrollment/standard).
- Roku device with [developer mode activated](/docs/developer-program/getting-started/developer-setup.md). You can purchase a Roku device from [Roku.com](http://roku.com/), your local electronics retailer, or a second-hand marketplace.
- App artwork.
- Text editor (for example, TextEdit [Mac] or Notepad [Windows]).
- Shell application such as [PuTTY](http://www.putty.org/) (Windows) or terminal (Mac and Linux).

## Template overview

The SceneGraph app template gets the videos from your content feed and displays them in a grid. The grid contains rows of thumbnail images for the videos, which are referred to as posters. When you scroll to a poster, it gains focus. When this occurs, the poster is highlighted and the name and short description of the video are displayed above the row using the metadata from your content feed.

![roku600px - rdp-migration-grid](https://image.roku.com/ZHZscHItMTc2/rdp-migration-grid.jpg)

When you select a poster, a details screen opens and displays the video's title, genre, and long description using the metadata from your app's content feed. The details screen also includes a Play button for launching content into playback.

![roku600px - rdp-migration-details](https://image.roku.com/ZHZscHItMTc2/rdp-migration-details.jpg)

## Conversion steps

Converting a Direct Publisher app to an SDK via the SceneGraph app template and publishing it to the Streaming Store entails the following steps:

1. Downloading the [SceneGraph app template](https://github.com/rokudev/rdp-to-scenegraph-channel-template).
2. Updating the manifest with the name of your app and the URL of your content feed.
3. Adding your app artwork to the **images** folder.
4. Testing your app.
5. Using the Developer Dashboard to switch your app to SDK, upload your package file, pass certification testing, and schedule the submission of your app.

### Downloading the SceneGraph app template

You can [download the SceneGraph app template](https://github.com/rokudev/rdp-to-scenegraph-channel-template) from Roku's GitHub repository.

![roku600px - GitHub download](https://image.roku.com/ZHZscHItMTc2/rdp-sdk-github-download-v2.png)

Once you have downloaded the template, extract (unzip) the archive and then expand the folder to display the app's directory structure.

![roku600px - sgdex-rdp-folder](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-folder.png)

### Updating the manifest

The **manifest** is a text file that defines the attributes and versioning of the app. One of the required attributes is the **title**, which is the name of your app that is displayed in the Roku UI. When customers browse apps on the Roku home screen or in the on-device streaming store, the **title** is displayed above the app tile when it has focus. In the manifest, you also need to provide the URL of your content feed.

To update the **title** attribute and enter your content feed URL in the manifest, follow these steps:

1. Use a text editor to open the manifest.



2. Change the **title** attribute (line 1) to the name of your app.



3. In the **FEED_URL** attribute (line 24), enter the URL of your content feed. To find the URL of your content feed, go to the [Developer Dashboard](https://developer.roku.com/dev/dashboard), click your app from the list under **My Channels**, and then click **Feed URL** under **Update your Public Channel** (or click **Preview and Publish** at the top of the page and then select **Feed URL** from the list).  

   ![roku400px - sgdex-rdp-manifest](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-manifest.png)



4. Save the updated manifest.



> Optionally, you can customize your app's appearance in the manifest by changing the logo, text, colors, and background. For steps on how to do this, see [Customizing the app theme](#customizing-the-channel-theme).

### Adding your app artwork

To configure the SceneGraph app template with your branding, provide the following artwork in the **images** folder:

| File name         | Description                                                  | Requirement    |
| :---------------- | :----------------------------------------------------------- | :------------- |
| **icon_focus_hd** | The artwork for your app's tile, which is displayed on the Roku home screen, Roku Search, and other platform experiences. | 290x218 (PNG)  |
| **splash_hd**     | The artwork that is displayed when your app is launched. | 1280x720 (JPG) |

### Testing your app

Once you have finished building your app, [sideload it on your device](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) using the Roku web plug-in to test its functionality. You should verify that all items in your content feed are in the app UI and that content launches into playback when selected. If you have [customized the app theme](#customizing-the-channel-theme), you can review your app's appearance and update it.

### Publishing your app

Once you have finished testing your app, you can publish the SDK version of your app to the Streaming Store following these steps:

1. [Log into the Developer Dashboard](https://developer.roku.com/dev/dashboard).



2. Switch your app from Direct Publisher to SDK. To do this, follow these steps:

   a. Click **My Channels** under **Channels**.

   ![roku400px - rdp-conversion-my-channels](https://image.roku.com/ZHZscHItMTc2/rdp-conversion-my-channels.png)

   b. Click the **Options** setting and then click **Convert to SDK Channel**.

   ![roku400px - rdp-conversion-convert-to-sdk](https://image.roku.com/ZHZscHItMTc2/rdp-conversion-convert-to-sdk.png)

   c. Click **Convert** to confirm the conversion.

   ![roku400px - rdp-conversion-convert-confirmation](https://image.roku.com/ZHZscHItMTc2/rdp-conversion-convert-confirmation.png)

   d. Once the conversion has been completed, click **Preview and Update**.


3. Verify that the monetization is disabled for your app because the template does not support video ads or purchases. To do this, click **Preview and Publish** at the top of the page, select **Monetization**, select the **None of the above, I will not be monetizing my channel** option if it is not already selected, and then click **Save**.

   ![roku400px - rdp-coversion-monetization](https://image.roku.com/ZHZscHItMTc2/rdp-coversion-monetization.png)



4. [Package your app](/docs/developer-program/publishing/packaging-channels.md). This will generate an encrypted package file (.pkg) for your app. You can refer to the linked document for how to do this, but the main steps are as follows:

   a. [Activate developer mode](/docs/developer-program/getting-started/developer-setup.md) on your device.

   b. [Sideload your app on your device](/docs/developer-program/getting-started/developer-setup.md#step-1-set-up-your-roku-device-to-enable-developer-settings) using the Roku web plug-in.

      ![roku400px - sgdex-rdp-sideload](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-sideload.png)

   c. Click **Convert to cramfs** (or **Convert to** **squashfs**) to make your package file smaller.

      ![roku400px - sgdex-rdp-sideload-compress](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-sideload-compress.png)

   d. [Generate a key](/docs/developer-program/publishing/packaging-channels.md#new-key-generation) for signing the package file using a shell application such as [PuTTY](http://www.putty.org/) (Windows) or terminal (Mac and Linux).

      ![roku400px - sgdex-rdp-telnet](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-telnet.png)

5. [Package your app](/docs/developer-program/publishing/packaging-channels.md#packaging-with-the-development-application-installer) using the Roku web plug-in and the password generated in the previous step.

      ![roku400px - sgdex-rdp-package](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-package.png)

6. Download the generated package file from the Roku web plug-in.

      ![roku400px - sgdex-rdp-download-package](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-download-package.png)

7. [Upload the package file (.pkg) file](/docs/developer-program/publishing/channel-publishing-guide.md#upload-a-package) that you created in the previous step. In the Developer Dashboard, click **Preview and Publish** at the top of the page, and then select **Package Upload**. Accept the default versioning and minimum firmware information, click **Upload a Package**, and then browse to and select the .**pkg** file for your app, and then click **Save**.

   ![roku400px - sgdex-rdp-package-upload](https://image.roku.com/ZHZscHItMTc2/sgdex-rdp-package-upload.png)

8. Run static analysis testing on your app.

   a. Click **Preview and Publish** at the top of the page, select **Static Analysis**, and then click **Analyze**.

      ![roku400px - tatic-analysis-anaylyze-button](https://image.roku.com/ZHZscHItMTc2/static-analysis-anaylyze-button.png)

   b. The window will update to indicate that analysis is underway and will then begin listing the test results. The test takes a few minutes to complete; you can click **Refresh** to get updated results. The results will include a few warnings that are not applicable to your app, but they should not contain any errors, which would block the publishing of your app.

      ![roku400px - static-analysis-complete](https://image.roku.com/ZHZscHItMTc2/static-analysis-complete.png?)

9. [Schedule your app for publishing](/docs/developer-program/publishing/channel-publishing-guide.md#publishing-a-channel). Click **Preview and Publish** at the top of the page, and then do the following:

   a. Read the items under the **I certify that** check box, and then select the check box to confirm that all the listed statements are true.

   b. Click **Schedule Publishing**.

   c. In the dialog that opens, pick a date and time for the automatic publication of your app, and then click **Schedule Publishing**, and then click **OK**.

## Customizing the app theme

You can customize the look and feel of your app (the "theme") to match your company's branding. For example, you can do the following:

- Add a logo and title to the overhang (the overhang is an information bar that is displayed at the top of each screen).
- Change the background from black to a different color or to an image.
- Change the colors of the text, the focus ring (the highlight around the currently selected content), the progress bar, and the busy spinner.

> You can use a free [online color picker](https://g.co/kgs/Rsd47M) to identify the hex code for the colors you want to use in your app's theme.

To edit your app's theme, follow these steps:

1. Use a text editor to open the **manifest**.



2. At the bottom of the file, you will see an "update theme elements" comment with a number of attributes that you can uncomment and enter values for.

   ![roku400px - rdp-manifest-theme](https://image.roku.com/ZHZscHItMTc2/rdp-manifest.png)



3. The following table summarizes the theme attributes you can update:

   | **Attribute**           | **Type** | **Description**                                              | **Default**      | **Example**                            |
   | :---------------------- | :------- | :----------------------------------------------------------- | :--------------- | :------------------------------------- |
   | OverhangLogoUri         | Uri      | The URL for the overhang logo. The logo is displayed on the left side of the overhang bar at the top of each screen in your app. | none (Roku Logo) | pkg:/images/overhang_logo_hd.png       |
   | OverhangTitle           | text     | The text displayed for the overhang title (for example, the name of your app). | none             | My App                             |
   | OverhangTitleColor      | color    | The color of the text in the overhang title.                 | #DDDDDD          | #DDDDDD                                |
   | OverhangBackgroundColor | color    | The background color of the overhang bar.                    | #232323          | #232323                                |
   | OverhangBackgroundUri   | Uri      | The URL for the overhang background. This takes precedence over the **OverhangBackgroundColor** if you set it. | none             | pkg:/images/overhang_background_hd.png |
   | textColor               | color    | The text color for all supported labels (for example, the title and descriptions of the videos). | #FFFFFFF         | #FFFFFFF                               |
   | focusRingColor          | color    | The ring color when the content item has focus (is currently selected). | #FFFFFFF         | #FFFFFFF                               |
   | progressBarColor        | color    | The color of the progress bars.                              | #FFFFFFF         | #FFFFFFF                               |
   | backgroundImageURI      | Uri      | Sets a URL for a background image. This takes precedence over the **backgroundColor** if you set it. | none             | pkg:/images/background_image_hd.png    |
   | backgroundColor         | color    | The background color of each screen.                         | #232323          | #232323                                |

   The following example demonstrates a manifest with updated **OverhangLogoUri** and **backgroundImageUri** theme elements:

   ![roku400px - rdp-manifest-udpated](https://image.roku.com/ZHZscHItMTc2/rdp-manifest-udpated.png)

4. Save the **manifest** file.

## Alternative conversion methods

If you cannot migrate your app using the SceneGraph app template (because of the restrictions on feed size or monetization, or your app requires more advanced customization), you can alternatively covert your Direct Publisher app to an SDK app using one of the following methods:

### Redesign your app in SceneGraph

You can use SceneGraph to implement a more customized app experience, which helps drive engagement and refresh your brand. Roku has a number of resources to help you migrate your app to SceneGraph:

- **Online Video Course**: You can take the [SceneGraph: Build a Channel online video course](/videos/courses/rsg/overview.md) to learn how to build a SceneGraph app. This course includes a comprehensive [sample app](https://github.com/rokudev/scenegraph-master-sample) that walks developers through each step in building a basic, high-performance Roku app that passes certification.
- **SGDEX**: You can use [SceneGraph Developer Extensions (SGDEX)](https://github.com/rokudev/SceneGraphDeveloperExtensions), which provide pre-built SceneGraph component templates that help expedite app development.

### Contact a third-party Roku developer

You can [contact an experienced third-party Roku developer](/docs/developer-program/third-party-devs.md) to get help migrating your app.
