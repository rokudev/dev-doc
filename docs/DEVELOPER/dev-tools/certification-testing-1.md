---
title: Certification testing tool
excerpt: 'Verify app performance and deep linking requirements before submitting for publishing'
deprecated: false
hidden: false
metadata:
  title: 'Certification testing tool | Roku Developer Docs'
  description: 'Use the self-serve certification testing tool in the Developer Dashboard to verify that your apps meet performance and deep linking certification requirements.'
  robots: index
next:
  description: ''
---
Developers can use the self-serve certification testing tool in the [Developer Dashboard](https://developer.roku.com/developer) to verify that their apps meet [performance](doc:certification) and [deep linking](doc:certification) certification requirements. This enables developers to independently test their apps and update them before formally submitting them for publishing. By identifying any issues prior to submitting their apps, developers can avoid potential delays in the publishing of their apps.

## Using the certification testing tool

To use the certification testing tool, you upload a [package file](doc:packaging-channels), enter the deep linking parameters to be tested, and then run the tool. The results of the certification test are displayed in real-time on the page as testing progresses. When the testing has been completed, an email notification is sent to you with the results.

> In order for the tool to complete all the performance tests, your app must have the required [signal beacons](doc:measuring-channel-performance).

### Uploading a package file

To upload a package file to the certification testing tool, follow these steps:

1. Go to the [Developer Dashboard](https://developer.roku.com/developer), select **Manage My Apps**, and then click the app to be tested.
2. Select **Package Upload** from the list.
3. In the **Package Upload** page, select the **Minimum Firmware** version for devices running your app, click **Upload**, and then select the package file.

> You can also upload a package file from the **Deep Linking** and **Certification Testing** pages.

### Entering deep linking parameters

To validate that your app is handling deep link requests properly, provide at least one set of [deep linking parameters](doc:implementing-deep-linking##understanding-deep-linking-parameters) for each different [media type](doc:implementing-deep-linking#mediatype-behavior) in your app. For example, if your app contains movies and TV episodes, include deep linking parameters for at least one movie and one episode.

To enter deep linking parameters, follow these steps:

1. Select **Deep Linking** from the **Developer Dashboard > Manage My Apps** page list.

2. For each set of deep linking parameters to be included in the certification test, do the following:

   a. In the **Media Type** field, select the [media type](doc:implementing-deep-linking#mediatype-behavior) of the content item (for example, movie, television episode, or television series).

   b. In the **Content ID** field, enter the [content ID](doc:implementing-deep-linking##understanding-deep-linking-parameters) of the item.

   c. In the **Valid Until** field, enter the last date when the deep linking parameters will be used in your app.

   d. In the **Content Title** field, enter a descriptive name that makes it easy to identify the content associated with the deep link parameters.

   e. Click **Add**. Repeat these steps for each additional set of deep linking parameters to be tested.

3. Click **Save**.  The **Media Types and Parameters** section lists the content title for each set of deep linking parameters provided. You can expand a content title to view the media type, content ID, and valid until date associated with the content item.

### Viewing certification testing results

To run the certification test, select **Certification Testing** from the **Developer Dashboard > Manage My Apps** page list, and then click **Run**.

Once you start the certification testing tool, the **Status** field includes a spinner indicating that the testing is ongoing. To track the progress of the testing, the number of tests completed and total tests to be run are displayed. When testing has been completed, the **Status** field displays "DONE" and shows that all the tests have been completed. If the **Status** field, displays "CANCELLED", "ERROR", or "UNAVAILABLE", click **Run** to re-run the test.

The **Certification Tests** table lists the status of each individual test being executed. This table includes the following columns:

| Column                    | Description                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Status                    | The results of the test. Completed tests have a status of "Passed" or "Failed"; tests still to be performed have a status of "Queued". |
| Severity                  | Any info messages, warnings, or errors related to a completed test.                                                                    |
| Category                  | The type of test being performed: "Performance" or "Deep Linking".                                                                     |
| Certification Requirement | Provides a link to the requirement in the [Certification Criteria](doc:certification) document.                                        |
| More Info                 | Provides a detailed description of any error or warning, and a link to the related documentation.                                      |

You can sort the test results by toggling the **Status**, **Severity**, or **Category** column headers. You can filter test results based on the same fields.
