---
title: Static Analysis Tool
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
> Apps must pass Static Analysis with no **Errors** before they can be published to the Streaming Store.

## Overview

The app publishing flow includes a Static Analysis Tool used to analyze the app's BrightScript source code and detect common issues without having to submit for certification. This arms developers with the information they need to optimize their apps and ensure the app passes certification quickly. These common issues include, but are not limited to, simple app runtime issues, such as crashes on launch, and media playback errors (automated testing).

## Developer Dashboard

The Static Analysis Tool is available from the [Developer Dashboard](https://developer.roku.com/developer).

1. From the **Developer Dashboard > Manage My Apps** tool, [upload a package file](doc:channel-publishing-guide#package-and-testing).

2. Select **Static Analysis** from the drop-down menu.  This option is only available after a package file has been uploaded.

   ![roku815px - static-analysis-dropdown](https://image.roku.com/ZHZscHItMTc2/static-analysis-dropdown-v2.png "static-analysis-dropdown")

3. Click **Analyze** to begin the Static Analysis testing of your app. Click **Refresh** to check whether the Static Analysis test results are ready and display them.

   ![roku815px - static-analysis-analyze-button](https://image.roku.com/ZHZscHItMTc2/static-analysis-analyze-button-v2.png "static-analysis-analyze-button")

4. The **Static Analysis Results** table lists error, warning, and info messages returned by the test. For each message, the following information is provided:

   ![roku815px - static-analysis-test-results](https://image.roku.com/ZHZscHItMTc2/static-analysis-test-results-v2.png "static-analysis-test-results")

| Column                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message                   | A description of the issue related to the app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Severity                  | The type of message: error, warning, or info.\<br />\<br />\<ul>\<li>\<strong>Error\</strong>.  Errors block the app from passing certification. All errors must be resolved to pass static analysis testing and schedule the app for publishing.\</li>\<li>\<strong>Warning\</strong>. Warnings do not currently block the app from passing certification; however, they should be resolved to ensure the app can pass static analysis testing in the future. In addition, resolving warnings helps optimize app performance.\</li>\<li>\<strong>Info\</strong>. Info messages provide tips that may be helpful in the development of the app.\</li>\</ul> |
| Category                  | The type of issue (for example, package, performance, billing, manifest, and so on).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Certification Requirement | Provides a link to any related certification requirements in the [Certification Criteria](doc:certification) document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

You can filter the test results based on the **Severity** or **Category**.

5. Alternatively, you can wait to receive the test results via an email notification. The test results are sent to the email address associated with the developer account. This email contains a link to the Static Analysis test results for the app (you can also download the test results as a plain text JSON file).

## Static Analysis test details

Following are the tests that Static Analysis performs on the package file. More tests will be added on a monthly basis.
