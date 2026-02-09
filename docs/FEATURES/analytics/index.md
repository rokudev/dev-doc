---
title: Analytics Reports
deprecated: false
hidden: false
link:
  new_tab: false
metadata:
  title: ''
  description: ''
  robots: index
---
Apps have access to web-based app analytics and sales reports through Roku's Developer Dashboard. This allows you to analyze your app's health, viewership trends, and metrics for specific titles and devices. The following video highlights the different app analytics available to you.

<video title="Roku Channel Analytic Reports" poster="https://image.roku.com/ZHZscHItMTc2/channel-analytics-poster.png" src="https://image.roku.com/ZHZscHItMTc2/channel-analytics.mp4" width="720" height="480" controls />

As a service to our partners, Roku provides some basic analytics for all apps on the platform in the form of standardized dashboards with metrics on app health, viewership and engagement, and so forth. Dashboards are read-only - meaning users cannot modify the dashboards themselves (apart from applying filters), create new dashboards, or change any of the underlying data.

Also, the app data displayed are restricted to app owners. You will never see data pertaining to apps other than your own, and Roku will never share your app data with other app owners. Roku evaluates making changes to the available dashboards on an ongoing basis, based on feedback from our app partners. Access to some dashboards may be restricted based on the size of the business relationship.

In-app data Roku often differentiates between unique accounts and unique devices. Roku generally considers unique accounts to be a better measure of audience size and engagement metrics, while unique devices can be a more meaningful measure of app health metrics such as crashes and buffering. The reason for this is that once a user installs an app, that installation will synchronize across all devices associated with that user's account, potentially inflating installation counts relative to the actual number of households with the app installed.

Reports also distinguish between "visitors" and "viewers" according to the following definitions:

* A visitor is a user who has opened or started an app, but may not have streamed any content. Visitors are measured at the account level (a single account can be associated with multiple devices).

* A viewer is a user who has streamed content in the app. A visitor can also be counted as a viewer, but not all visitors will be counted as viewers. Viewers are also measured at the account level.

* Unique visitor and unique viewer counts depend on the time period of measurement, so adding up daily visitors over the course of the week will differ from taking a weekly visitor measurement because some accounts may visit an app multiple times per week.

## Available reports in Developer Dashboard

Roku automatically generates the following app analytics and sales reports as [Looker](https://looker.com/guide) dashboards for your app (Looker is the business intelligence platform that Roku uses for providing app analytics):

**Analytics:**

* [Channel Engagement](doc:channel-engagement) - installs, visits and streaming data for all apps
* [Channel Health](doc:channel-health) - BrightScript crashes and buffering data for all apps
* [Viewership Summary](doc:viewership-summary) - small selection of app engagement and app health data.
* [Channel Stability](doc:channel-stability): BrightScript crashes and memory closures for all apps across all Roku device models.

**Sales reports:**

* [Transaction](doc:transaction-report) - records all in-app transactions for SVOD or TVOD apps, such as product purchases, free trial initiations, and returns

* [Sales Activity](doc:sales-activity-report) - displays daily transaction revenue totals by app, product, and currency within a window of up to one month

* [Payout Audit](doc:payout-audit-report) - assists with reconciliation between app revenue activity and payouts received from Roku

* [Tax Withholding](doc:tax-withholding-report) - Breaks down how net payouts are calculated after Roku's revenue share, tax withholding, and currency conversion are applied to app gross revenue.

  Because apps differ in both business model and technical implementation, the relevancy of specific report and availability of data therein will vary. If a report does not pertain to your app type, it will not be made available to you.

### App Analytics

To open an app analytics report in the Developer Dashboard, follow these steps:

1. Click **Analytics** in the left sidebar.

2. Click the tab for the report you want to view (the **Channel Health** report is selected by default).

3. Select the app you want to analyze from the drop-down list. Alternatively, you can click **Public channels** or **Beta app** and then click the analytics icon for the app or select an app and then click **View analytics**.

   <Image alt="roku815px - analytics-report-tabs" border={false} src="https://image.roku.com/ZHZscHItMTc2/channel-stability-report-v4.png" title="analytics-report-tabs" />

### Sales reports

To open a sales report in the Developer Dashboard, follow these steps:

1. Click **Sales reports** in the left sidebar.

2. Click the tab for the report you want to view (the **Transactions** report is selected by default).

3. Select the app you want to analyze from the drop-down list.

   <Image alt="roku815px - sales-reports-list" border={false} src="https://image.roku.com/ZHZscHItMTc2/sales-reports-left-nav.png" title="financial-reports-list" />

## Updating and saving reports

In each report's upper-right corner you have options for updating and saving the report.

* Click **Run** to refresh the report. Near Run the time since the last refresh is displayed. Reports must be refreshed after changing the filters.

* Click the gear icon in the upper-right corner to download the report to a PDF file or CSVs in a zip file.

## Filtering reports

All reports contain a FILTERS section at the top where you can select the app data to be displayed, such as specifying a particular Time Period. You cannot add new filters but you can set some filters to "null" or "blank" to include all available data.  A mismatch in filters can also return uninterpretable results, such as would be the case if you set the Time Period to be shorter than the Time Grain (e.g. a one week Time Period and month Time Grain).

Dashboards may contain several sections and changing filters will cause some sections to update the values displayed while others may not. This depends on what is being measured and how it relates to the changed filter. For instance, total installs is a point-in-time measurement, so changing the Time Grain filter will not change the value displayed for that metric while changing the Time Period will.  Users must click on the "Run" button to update values after changing a filter.

<Image alt="roku815px - analytics-2-filter-section" border={false} src="https://image.roku.com/ZHZscHItMTc2/analytics-report-filters.png" title="analytics-2" />

Information on available filters is also included in the discussion of individual dashboards, and not all of the same filters will be available on all reports.  The most common filters include:

* **Time Period** - Sets the data sample period for the entire report. Changing this filter changes measurements for the entire report.  By default, Time Period is set to "8 days ago for 7 days" in most reports to include the most recent 7 complete day period; the most recent day is always an incomplete day.
* **Time Grain** - Changing this filter changes the values of metrics with a time dimensions, such as visitors or viewers.  The "day" Time Grain equates to a daily aggregate measurement, "week" to a weekly aggregate and "month" to a monthly aggregate.  Any conflicts between Time Grain and Time Period (e.g. a Time Grain longer than the Time Period specified) will prevent data from displaying correctly.
* **Streaming Store Code** - Identifies the [code for a market](https://developer.roku.com/publish/analytics-metrics/analytics-index#usingchannelstorecodes), usually a country code, where your app can legally be distributed (i.e. made available for download to a Roku device). More than one code is allowed. Leave Streaming Store Code blank to include all markets where your app is currently published or enter one or more codes to display only data on specific markets.
* **Device Type** - Available in the Channel Health dashboard, this filters data to specific types of Roku devices.

## Exporting reports

To export data from a report, follow the steps below:

1. Set **Filters** properly and run the report, as described above.

2. Click the "three-dot" (**...**) button in the upper-right portion of the report's table-heading, and then click **Download**.

   <Image alt="roku815px - Trans Main showing three-dot" border={false} src="https://image.roku.com/ZHZscHItMTc2/download-analytics-report-1.png" />

3. The Download dialog appears. The **File Format** field provides PDF (default) and CSV output options. If you select PDF, optionally configure the report layout settings (paper size, table row visibility, and dashboard tiles arrangement).

   <Image alt="roku815px - Trans Download Dialog" border={false} src="https://image.roku.com/ZHZscHItMTc2/download-analytics-report-2.png" />

4. Click **Download** to export the report to your local machine. If you are downloading the report as a PDF, you can alternatively click **Open in Browser** to open the report in a new tab in your web browser.

## Scheduling reports

You can create a schedule to automatically email a report in a recurring daily, weekly, or monthly pattern. To create a schedule, follow these steps:

1. Click the "three-dot" (**...**) button in the upper-right portion of the generated report's table-heading, and then click **Schedule Delivery**.

   <Image alt="roku815px - roku_pay_transactions_schedule" border={false} src="https://image.roku.com/ZHZscHItMTc2/schedule-analytics-report-1.png" title="roku-pay-transactions-schedule" />

2. The **Schedule Delivery** dialog opens.

   <Image alt="roku600px - roku_pay_transactions_schedule" border={false} src="https://image.roku.com/ZHZscHItMTc2/engagement-report-destinations-s3.png" title="roku-pay-transactions-schedule" />

3. In the **Settings** tab, enter the following properties:

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Schedule name</td>
      <td>By default, the report name is based on the report type (for example, "Channel Engagement" or "Channel Health"). <br /><br />It is recommended that you enter a descriptive name for the schedule that makes it easy to identify in your list of schedules. For example, you can include the app name, format, frequency, time period or any other relevant information that distinguishes the schedule.</td>
    </tr>

    <tr>
      <td>Recurrence</td>
      <td>Configure the cadence used to email the report. You can send the report <strong>Daily</strong>, <strong>Weekly</strong>, <strong>Monthly</strong>, <strong>Hourly</strong>, or <strong>By Minute</strong>, or on specific months or days:<ul><li><strong>Daily</strong>. Email the report every day, every weekday, or one ore more specific days. The report is emailed every day at 8:00AM by default.</li><li><strong>Weekly</strong>. Email the report once a week on a specific day and time. The report is emailed every Monday at 8:00AM by default.</li><li><strong>Monthly</strong>. Email the report once a month on a specific date and time, every quarter (January, April, July, and October), or one or more specific months. The report is emailed on the 1st of each month at 6:00AM by default.</li><li><strong>Hourly</strong>. Email the report every 1, 2, 3, 4, 6, 8, or 12 hours within a specific time range. You can configure on which 5-minute interval the report is sent. The report is emailed every hour on the hour between 6:00AM and 6:00PM by default.</li><li><strong>By Minute</strong>. Email the report every 5, 10, 15, 20, 25, 30 minutes within a specific time range. The report is emailed every 5 minutes between 6:00AM and 6:00PM by default.</li></ul>Once you select a cadence, configure the <strong>Time</strong> to send the report.</td>
    </tr>

    <tr>
      <td>Destination</td>
      <td>Select one of the following destinations to send the report:<ul><li><strong>Email</strong>: Send the report to one on more recipients by entering their email address and then clicking <strong>Add</strong>. Optionally, select the <strong>Include a Custom Message</strong> check box to include any additional information in the body of the email message.</li><li><strong>Webhook</strong>: Enter the Webhook URL.</li><li><strong>Amazon S3</strong>: Enter the S3 bucket, path (optional), access key, secrey key, and region.</li><li><strong>SFTP</strong>: Enter the address, username, password, and preferred key exchange algorithm.</li></ul>The SFTP, S3, and Webhook options enable you to create automation pipelines for ingesting Roku analytics into your backend systems.</td>
    </tr>

    <tr>
      <td>Format</td>
      <td>Select whether to attach the Transaction Report as a <strong>PDF</strong> (tiled or single column), <strong>PNG Visualization</strong> (tiled or single-column chart in a PNG file), or CSV zip file.</td>
    </tr>
  </tbody>
</table>

4. Optionally, click the **Filters** tab to edit the currently configured time periods to include in the report.

   <Image alt="roku600px - roku_pay_transactions_schedule" border={false} src="https://image.roku.com/ZHZscHItMTc2/schedule-delivery-filters-tab.png" title="roku-pay-transactions-schedule" />

5. Optionally, expand **Advanced Options** to configure the visualizations, data formatting, and hyperlinks in the email and the attached report.

   <Image alt="roku600px - roku_pay_transactions_schedule" border={false} src="https://image.roku.com/ZHZscHItMTc2/schedule-delivery-adanced-tab.png" title="roku-pay-transactions-schedule" />

6. Optionally, click **Send Test** to send the report to the list of email recipients in the selected format.

7. Click **Save** to save the schedule.

8. To create another schedule, click **New** to and repeat steps 3-7 .

## Using Streaming Store codes

Streaming Store codes identify your app's market. Each code identifies a country or region where your app will be available for download. Be sure to only select a market where you have the legal right to distribute your app's content. For example, if your app can be downloaded only in the United States, choose US. If your app is available in more than one market, you can use more than one code. If no values are provided in the Streaming Store Code filter, then all markets will be included.

Each Streaming Store code consists of two or more letters, such as "US" for United States or "FR" for France. For example:

* AR - Argentina
* BR - Brazil
* CA - Canada
* CL - Chile
* CO - Colombia
* CR - Costa Rica
* DE - Germany
* FR - France
* GB - United Kingdom
* GT - Guatemala
* HN - Honduras
* IE - Ireland
* MX - Mexico
* NI - Nicaragua
* OT - Rest of the world
* PA - Panama
* PE - Peru
* SKYIE - Sky Ireland
* SKYUK - Sky United Kingdom
* SV - El Salvador
* US - United States

In Developer Dashboard you can find out which countries your app has been published in by navigating to **Manage My Channels** > **Preview and Publish** > **Properties**.

<Image alt="roku815px - analytics-6-published-countries" border={false} src="https://image.roku.com/ZHZscHItMTc2/analytics-6b.png" title="analytics-6" />