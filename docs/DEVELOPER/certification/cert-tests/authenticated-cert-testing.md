---
title: "Channel Behavior Analysis testing for authenticated apps"
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

# Channel Behavior Analysis testing for authenticated apps

Developers of authenticated subscription (SVOD), ad-supported (AVOD), and free apps can write automation scripts with the [Roku Remote Tool](http://devtools.web.roku.com/#remote-tool) that navigate the app's on-device sign-in and sign-out flows.

Once the scripts have been written, developers can upload them to the [Channel Behavior Analysis page in the Developer Dashboard](/developer-program/publishing/channel-publishing-guide.md#channel-behavior-analysis-window) and run Roku's automated performance and deep linking certification tests on the app. This enables developers to verify that their authenticated app passes the same tests that Roku executes – before submitting the app for certification.

<video title="Authenticated channel certification testing" poster="https://image.roku.com/ZHZscHItMTc2/auth-cert-testing-v2.jpg">
    <source src="https://image.roku.com/ZHZscHItMTc2/auth-cert-testing-v4.mp4">
  <img src='https://image.roku.com/ZHZscHItMTc2/auth-cert-testing-v2.jpg' alt='authenticated channel certification testing' />
</video>

## Prerequisites

To run Channel Behavior Analysis testing on authenticated apps, developers must first do the following:

- Create a **Public** app. The developer sign-in/out scripts cannot be used with [beta apps](/docs/developer-program/publishing/channel-publishing-guide.md#beta-channel-guidelines).
- [Upload a package file](/docs/developer-program/publishing/channel-publishing-guide.md#package-upload-window).
- [Pass static analysis testing](/docs/developer-program/publishing/channel-publishing-guide.md#static-analysis-window).
- [Provide test credentials](/docs/developer-program/publishing/channel-publishing-guide.md#test-credentials-window).
- [Provide deep link parameters](/docs/developer-program/publishing/channel-publishing-guide.md#deep-linking-window).
- [Write automated sign-in and sign-out scripts](#writing-automated-sign-in-and-sign-out-scripts).

This document demonstrates how to write these scripts with the [Roku Remote tool](http://devtools.web.roku.com/RokuRemote/) for signing in to the [on-device authentication sample app](https://github.com/rokudev/on-device-authentication) and signing out.

## Writing automated sign-in and sign-out scripts

Developers can write test scripts with the [Roku Remote Tool](http://devtools.web.roku.com/RokuRemote/) that automate sign-ins and sign-outs. This enables authenticated apps to be submitted for Channel Behavior Analysis as the Roku test devices in the cloud will use the provided scripts to log in to the app. Once signed in, the Roku test devices can run the suite of deep linking and performance tests on the app. When testing has been completed, the sign-out script is run on the app to return it to its logged-out state for any subsequent automation testing.

### Getting started with the Roku Remote Tool

To launch the Roku Remote Tool and add your device and development app to it, follow these steps:

1. [Sideload your development app](/docs/developer-program/getting-started/developer-setup.md#steps-to-set-up-the-development-environment) on your test Roku device.



2. Open the [Roku Remote Tool](http://devtools.web.roku.com/RokuRemote/). Optionally, you can [download the standalone app](http://devtools.web.roku.com/RokuRemote/electron.html) and run it from your desktop.



3. Add your test device to the Roku Remote Tool. In the Device Manager, enter the IP address of your test device, enter a name to be used to identify the device, and then click **Add**. Toggle the device on, and then close the dialog.

   ![roku600px - roku-remote-add-device-toggle-on](https://image.roku.com/ZHZscHItMTc2/roku-remote-add-device-toggle-on-v2.png)



4. Add your development app. Click **Add channel**, and then enter the name of the app that is specified in the **title** attribute of the [manifest](/docs/developer-program/getting-started/architecture/channel-manifest.md#required-attributes), enter the app ID, which is "dev" if you sideloaded the app, and then click **Add to table**. Click the add icon for the app under **Add to script** so the Roku OS can identify the app to be automated.

   ![roku600px - roku-remote-add-channel](https://image.roku.com/ZHZscHItMTc2/roku-remote-add-channel-v1.png)



### Creating the sign-in script

To create the automated sign-in script, follow these steps:

1. Click **Launch the app**. Select the app from the **Channel name** list, and then click **Add** (the deep linking **Content ID** and **Media type** parameters are not required; the actual deep linking parameters to be used should have already been provided in the [Deep Linking page](/docs/developer-program/publishing/channel-publishing-guide.md#deep-linking-page) as part of the [prerequisites](#prerequisites)). Click the add icon for the app under **Add to script** to add a "launch" step for the app to the script.

   ![roku600px - roku-remote-launch-channel](https://image.roku.com/ZHZscHItMTc2/roku-remote-launch-channel-v1.png)



2. Use the keypad on the left side to sign in to the app. As you click a button, a "press" step with the name of the button is added to the script. The complexity of the script varies based on the screens and required navigation in the sign-in flow. The following image demonstrates the initial sequence of keypresses used to sign in to the [on-device authentication sample app](https://github.com/rokudev/on-device-authentication):

    ![roku815px - roku-remote-steps](https://image.roku.com/ZHZscHItMTc2/roku-remote-steps-v2.png)



3. Upon opening a keyboard dialog for entering login credentials, enter the user name and password in the **Keyboard Input** box and then click the arrow button to the right of it. A "text" step with the credential is added to the script. Click the **Play** button to test the script. Edit the steps as needed until the script successfully signs the user in.

  > You may need to insert a "pause" step (by pressing the pause icon) for any action in the UI that takes time to be completed before another step in the script can be executed. For example, it may take a few seconds for the app UI to be populated after being launched. This ensures that the subsequent steps are actually navigating the UI. Do not include more than 10 pause steps in a script.

   > Do not include steps that exit the app or Channel Behavior Analysis will fail. For example, do not include a "home" step, and do not include a "back" step if it results in the app being exited.

4. When you have finished testing the script, replace the credentials with the following template variables (the actual credentials to be used should have already been provided in the Test Credentials page as part of the [prerequisites](#prerequisites)):

   - Change the entered user name to `script-login`.

   - Change the entered password to `script-password`.

   The steps in the script should therefore appear as follows:
      ${codeLogin}

5. Export the sign-in script to your desktop. Click the hamburger icon to the right of the New Script button, click **Export scripts**, select the check box for the script to be exported, and then click **Export scripts** again.

   ![roku815px - roku-remote-export-script](https://image.roku.com/ZHZscHItMTc2/roku-remote-export-script-v1.png)





   You can [download the sign-in script](https://github.com/rokudev/on-device-authentication) used for the on-device authentication sample and test it. This also provides a quick reference to help write your script. To import the script into the Roku Remote Tool, click **New Script**, click **Import from**, and then select the script. This sample app does not include a sign-out flow, so no sample sign-out script is incuded.

   ![roku815px - roku-remote-import](https://image.roku.com/ZHZscHItMTc2/roku-remote-import-v1.png)


{#codeLogin}
```
- text: script-login
- text: script-password
```



### Creating the sign-out script

To create the automated sign-out script, follow these steps:

1. In the Roku Remote Tool, click **Add new script**, enter a name for the script, and then click **Create**.



2. Use the keypad to enter the steps for signing out of the app.



3. Export the sign-out script to your desktop.

## Running Channel Behavior Analysis testing on authenticated apps

Developers can use the self-serve Channel Behavior Analysis tool to verify that their authenticated apps meet [performance](/docs/developer-program/certification/certification.md#3-performance) and [deep linking](/docs/developer-program/certification/certification.md#5-deep-linking) certification requirements before submitting them for certification. This allows developers to get instant feedback on whether their apps meet specific deep linking and performance requirements, which reduces the wait time between submitting and publishing apps.

To run Channel Behavior Analysis testing on an authenticated app, follow these steps:

1. Verify that all the [prerequisites](#prerequisites) have been completed.



2. In the "text" steps within your sign-in script, verify that you have replaced the user name and password with the "script-login" and "script-password" template variables, respectively. The Channel Behavior Analysis tool will replace the template variables with the actual credentials entered in the [Test Credentials page](/docs/developer-program/publishing/channel-publishing-guide.md#certification-testing-window). Channel Behavior Analysis testing will fail if the actual credentials are in the script.

3. Navigate to the [Channel Behavior Analysis page in the Developer Dashboard](/developer-program/publishing/channel-publishing-guide.md#channel-behavior-analysis-window).



4. In the **Sign In/Out Scripts**, click **Edit**.

   If you can't find the Sign In/Out Scripts button shown below for your Public app, make sure your app Customer Account Requirement field is accurate. For more information, follow the steps below:

      a. On the Developer Dashboard, click **Manage My Channels**.

      b. Navigate to the app you'd like to run Channel Behavior Analysis on.

      c. Click **Preview and Update** next to the app and click **Properties** in the dropdown.

      d. Scroll down to the **Customer Account Requirement** section.

      e. Ensure that "A customer account **is required** to access some or all app features" is selected.

      f. Click **Save**.

      g. Navigate to **Channel Behavior Analysis**. You should now see the option to upload your .rasp script file.

   ![roku815px - cert-test-home](https://image.roku.com/ZHZscHItMTc2/cert-test-home-cba.png)



5. Select the [test credentials](/docs/developer-program/publishing/channel-publishing-guide.md#test-credentials-window) title that contains the user name and password to be used to sign-in into the app. The Channel Behavior Analysis tool will automatically replace the "script-login" and "script-password" template variables in the script with the user name and password entered for the selected test credentials title.



6. In the **Upload Sign In/Sign Out Scripts** dialog, click **Upload** to upload the exported sign-in and sign-out scripts (**.rasp** files) on your desktop.

   ![roku815px - upload-scripts-home](https://image.roku.com/ZHZscHItMTc2/upload-scripts-home-v2a.jpg)



7. The **Script Body** pane on the right displays the steps in the script. The pane highlights the user name and password that have replaced the "script-login" and "script-password" template variables.

   ![roku815px - cert-test-script-highlight](https://image.roku.com/ZHZscHItMTc2/cert-test-script-highlight.jpg)



8. Click **Save** to return to the Channel Behavior Analysis page.



9. Click **Run Channel Behavior Analysis**.

## Sample app

You can [download the on-device authentication sample app ](https://github.com/rokudev/on-device-authentication)and [sideload it on your Roku device](/docs/developer-program/getting-started/developer-setup.md#steps-to-set-up-the-development-environment) to test the certification flow for authenticated apps. The sample app includes a **rasp** folder with sign-in and sign-out scripts that you can import and run in the Roku Remote tool. You can run certication testing on the app following these steps:

1. Open the [Developer Dashboard](https://developer.roku.com/developer), click **Manage My Channels**, click **Add Channel**, and then create a new SDK app.



2. Complete the **Properties** and **Channel store info** pages. There are no specific requirements for completing these pages in order to run the sample app.



3. In the **Monetization** page, select the **My channel contains in-channel subscriptions** check box.



4. [Package the sample app with the Packager tool in the Development Application Installer](/docs/developer-program/publishing/packaging-channels.md#packaging-with-the-development-application-installer), and then upload the package in the Developer Dashboard **Package** **Upload** page.



5. Run **Static Analysis** testing. The app should pass with no errors and a few warnings.



6. In the Deep Linking page, enter the following deep linking parameters:

   - mediaType = movie

   - contentId = 6c9d0951d6d74229afe4adf972b278dd



7. Complete the **Test Credentials** page. There are no specific requirements for completing this page in order to run the sample app; the sample app accepts any user name/password to grant access to content.



8. In the **Channel Behavior Analysis** page, upload the sign-in and sign-out scripts from the **rasp** folder in the sample app, and then run Channel Behavior Analysis. The app should pass all three tests.

> Do not schedule the app for publishing.
