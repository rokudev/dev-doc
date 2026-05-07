---
title: Title tracking status
excerpt: Overview
deprecated: false
hidden: true
metadata:
  robots: index
next:
  description: >-
    Title tracking issues for detailed diagnostics and resolution paths, coming
    soon!
---
Monitor where your titles are in The Roku Channel publishing pipeline and identify which titles need action.

<br />

<ContentPartnerAvailability />

<br />

# Who this is for

Use the **Title Status** view if you are responsible for delivering or managing Video on Demand (VOD) content on **The Roku Channel**.

This view is most useful for:

## Operations managers (asset delivery)

Use this view to:

* Track asset delivery and processing progress
* Identify ingestion or processing failures
* Monitor titles blocked by asset-related issues

Focus on these statuses:

* **Unfulfilled**: Missing or unmatched assets
* **Failed**: Processing or QC issues
* **Processing**: Assets are actively being prepared

## Business managers (rights delivery)

Use this view to:

* Track rights submission and approval status
* Monitor availability windows across territories
* Identify titles blocked by rights issues

Focus on these statuses:

* **Unfulfilled**: Missing or unmatched rights
* **Rights under review**: Pending approval
* **Expired**: Rights windows need updating

<br />

# Getting access

To use this feature, get the appropriate role assigned to your account.

1. Request **business manager** or **operations manager** access from one of your company’s account administrators.
2. Ask your administrator to grant access based on your responsibilities, such as rights management or asset delivery.
3. Contact your internal team if you are not sure who your administrator is.

<br />

# Page layout

<Image align="center" caption="Each labeled element corresponds to the components described in the table below." src="https://files.readme.io/562797f2fcdb83f59caa9de4f89dfa67647517fac5a93fa373e3ad8c9d6b1221-image.png" />

| Key   | Page component                                                                                                                                                                                                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A** | **Feature navigation:** Displays the available features within the portal and allows users to switch between them. Organizes functionality into sections so users can quickly access different areas such as Title Tracking, Storefront, Creatives, and more. |
| **B** | **Page header and feature description:** Displays the current page title and a brief description of the feature. Provides context on what the page is used for and what actions users can take.                                                               |
| **C** | **Title status cards:** Displays a summary of titles by status and acts as a primary filter for the table below.                                                                                                                                              |
| **D** | **Title status table:** Displays detailed information for each title, including status, territories, availability dates, and more.                                                                                                                            |
| **E** | **Title status search field:** Enables searching for titles by name, series, or title ID.                                                                                                                                                                     |
| **F** | **Title status filter panel:** Provides filtering options to refine the title list based on selected criteria.                                                                                                                                                |
| **G** | **Collapse left navigation:** Toggles the visibility of the left-hand navigation panel to expand workspace.                                                                                                                                                   |

<br />

## How to use this page

### 1. Select a licensor (if applicable)

If your organization includes multiple licensors, use the dropdown in the top-left to switch views.

* Only titles for the selected licensor are displayed.
* If you have a single licensor, this control is hidden.

### 2. Use status cards as a primary filter

At the top of the page, status cards let you quickly filter and assess your catalog.

Available cards:

* All titles
* Unfulfilled
* Failed
* Rights under review
* Processing
* Scheduled
* Live
* Expired

Click any card to filter the table.

<br />

<Image align="center" caption="Selecting the 'Failed' status card displays titles that are failed for at least one territory." src="https://files.readme.io/988d59541b4bd2223fe860108e1cfb73cd1b61d3f171121a123a714db2d973c9-image.png" />

<br />

<Image align="center" caption="Select the 'Live' status card to view titles currently live in at least one territory." src="https://files.readme.io/1edfc4c2e015726a41e8aa665c37cc48565b5f634091c54b2f5cb91aa1c77419-image.png" />

<br />

# How status is determined

## How the **'All titles'** card works

The **All titles** card shows every title in your catalog.

For each title, the **Status** column reflects the **most restrictive condition** across all territories and components.

This means:

* A single blocking issue, such as **Failed** or **Unfulfilled**, overrides all other states.
* The status shown here represents the overall health of the title.

### Status priority

From most restrictive to least restrictive:

1. Failed
2. Unfulfilled
3. Rights under review
4. Processing
5. Scheduled
6. Live
7. Expired

**Examples**

| Scenario                                | Result      |
| --------------------------------------- | ----------- |
| Some territories Live, some Failed      | Failed      |
| Some territories Live, some Unfulfilled | Unfulfilled |
| Some territories Live, some Expired     | Live        |
| All territories Expired                 | Expired     |

### Why a title may show a restrictive status

Even if most of a title is **Live**, a single **Failed** or **Unfulfilled** component overrides the overall status.

Use the **Territories** panel to identify where the issue exists.

<br />

## How the other status cards work

Each status-specific card, such as **Failed** or **Expired**, highlights titles that are actively in that state.

A title appears in a status card if:

* At least one territory matches that status, or
* At least one component matches that status

**Example**

* The **Expired** card shows any title that has at least one territory where availability has expired.
* The **Live** card shows any title that is live in at least one territory.

<br />

<Callout icon="📘" theme="info">
  A single title can appear in multiple status cards because status is evaluated at the territory level. Use **All titles** to see the rolled-up overall status.
</Callout>

Because status is evaluated at the territory level, a single title can appear under multiple cards.

**Example**

* **US** → Live
* **CA** → Scheduled
* **MX** → Expired

This title appears in:

* Live
* Scheduled
* Expired

But in the **All titles** view, the **Status** column shows the most restrictive status. In this case, that status is **Scheduled**.

<br />

## Why this matters

* Use **All titles** to understand overall readiness.
* Use individual status cards to find and act on specific conditions.
* Do not assume a title belongs to only one status.
* Expand the title to see where issues exist.

<br />

# What requires your attention

<Image align="center" caption="Focus on these two statuses first." src="https://files.readme.io/e677410ccdca15e0983ce273c1444200d00e0cae5a3acd2ef03121c973395449-image.png" width="40% " />

## Unfulfilled

> Waiting for ordered rights, assets, or a match between the two. Requires your attention.

This means required inputs are missing or not linked by the same **Title ID**.

**Action:**

* Deliver rights and assets.
* Make sure the **Rights ID** and **Asset ID** match the same **Title ID**.

## Failed

> One or more issues occurred while processing your files and are preventing this title from going live. Requires your attention.

This means blocking errors occurred during processing.

**Action:**

* Resolve the errors before the title can proceed.

<br />

# Understanding the title status table

Each row represents a single title and its current status across territories.

<Image align="center" caption="The following table below explains each column in the title table illustrated above." src="https://files.readme.io/fe20faa7f6dabf5d966489bee56880a71d7f11618bacfc6ca727cea3194c9dbd-image.png" />

<br />

<Table>
  <thead>
    <tr>
      <th>
        Column
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Title**
      </td>

      <td>
        Displays the title name. Includes your **Title ID**, which can be copied on click. Use the Title ID for support, troubleshooting, and internal tracking.
      </td>
    </tr>

    <tr>
      <td>
        **Content type**
      </td>

      <td>
        Indicates the type of content. Each title has one type:

        * **Movie**
        * **Short-form clip**
        * **TV episode**
        * **TV season**
        * **TV series**

        <Callout icon="📘" theme="info">
          TV episodes are the actual playable titles. TV seasons and TV series are organizational levels used to group and structure episodes. Status, Territories, Expected start date, and Expected end date for seasons and series are rolled up from their underlying episodes.
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        **License types**
      </td>

      <td>
        A title may have one or more license types, including **Ad-supported**, **Linear O&O FAST**, and **Premium subscription**.
      </td>
    </tr>

    <tr>
      <td>
        **Services**
      </td>

      <td>
        A service represents how your content is distributed and monetized on The Roku Channel. Examples include **TRC AVOD**, **TRC O&O FAST**, or one of your own or participating Premium subscriptions such as **Howdy**. A single title may appear under multiple services depending on its rights.
      </td>
    </tr>

    <tr>
      <td>
        **Status**
      </td>

      <td>
        Displays the overall status of the title, such as:

        **Unfulfilled**

        Waiting for ordered rights, assets, or a match between the two. Requires your attention.

        **Failed**

        One or more issues occurred while processing your files and are preventing this title from going live. Requires your attention.

        **Rights under review**

        Rights are being reviewed for approval by the Roku team. Turnaround time may vary based on catalog volume.

        **Processing**

        The Roku pipeline is preparing your assets for publishing.

        **Scheduled**

        Ready for go-live as scheduled.

        **Live**

        The title is available to viewers.

        **Expired**

        Update windows to reactivate.

        <Callout icon="📘" theme="info">
          For multi-territory titles, you may see values like **1 of 3 unfulfilled**, which means only some territories are impacted.
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        **Territories**
      </td>

      <td>
        Displays the countries where the title is available or targeted. Territories appear as country flags and codes, such as **US**, **CA**, and **MX**. A title may be available in multiple territories, and status may vary by territory.
      </td>
    </tr>

    <tr>
      <td>
        **Expected start date**
      </td>

      <td>
        Shows when the title is expected to become available. It reflects the next upcoming start date across all territories. If all start dates are in the past, it shows the most recent start date. Dates are based on your local timezone.
      </td>
    </tr>

    <tr>
      <td>
        **Expected end date**
      </td>

      <td>
        Shows when the title is expected to expire. It reflects the next upcoming expiration date. If all dates are in the past, it shows the most recent expiration date. Dates are based on your local timezone.
      </td>
    </tr>
  </tbody>
</Table>

<br />

## How to read a row

![](https://files.readme.io/188a32cc62ee6f082b97470205b4753dae747e59eaac7bf0966cf4441df8d2c0-image.png)

When reviewing a title:

1. Start with **License types** by identifying how the title is licensed:

   * Ad-supported
   * Linear O&O FAST
   * Premium subscription

   This tells you what types of distribution the title is eligible for.
2. Next, review **Services** where the title will appear:

   * TRC AVOD
   * TRC O&O FAST
   * Premium Subscription services

   A title may be associated with multiple services depending on its rights.

   This helps you understand how and where the title will be surfaced to viewers.
3. Check the overall **Status** to understand overall readiness.
4. Review **Territories** to understand rights coverage.

   If the status shows something like “1 of 3 unfulfilled,” expand the row to identify which territories are impacted.
5. Finally, check the **Expected** timing:

   * **Expected start date** → When the title will become available
   * **Expected end date** → When availability will expire

   These dates reflect:

   * The next upcoming change across all territories
   * Your local time zone

   For TV content:

   * Expected start and end dates for a TV series (and seasons) are derived by rolling up dates from all associated TV episodes.
   * This means the dates represent the earliest upcoming availability or expiration across all episodes.

<Callout icon="🧐" theme="default">
  A title can appear ready in one territory but blocked in another. The **Status** column shows the most restrictive condition across all territories.  
  To investigate territory-level differences, expand the row.
</Callout>

<br />

## Default sorting

By default, titles are sorted by the date they were added, with the most recently added titles shown first.

For TV content, additional sorting rules apply:

* TV seasons are ordered by **season number**.
* TV episodes are ordered by **episode number** within each season.

This ensures that:

* Episodes appear in the correct chronological sequence

* Seasons and episodes display in a logical viewing order

<Image align="center" caption="Seasons and episodes appear in chronological sequence for a logical viewing order." src="https://files.readme.io/e925873200a455ce0cff81ae86a1549578e1e93c485eb527783d197bae1b2545-image.png" />

<br />

## Using search and filters

Use search and filtering to limit results and improve your focus.

<Image align="center" width="40% " src="https://files.readme.io/c39820813074ade679bbe992e58eb2c52e2312aa9c66a94255daa12fd39a154f-image.png" />

<br />

### Use search to find a specific title

* **Title name**
* **Series name**
* **Title ID**

<br />

### Use filters to narrow results

* **Content type**
* **License type**
* **Service**
* **Territory**
* **Expected start period**

  This filter shows titles whose **Expected start date** falls within a selected timeframe.

  Available options:

  * Tomorrow
  * This week
  * This month
  * Next week
  * Next month

  Use this filter to:

  * Identify titles launching soon
  * Prepare for upcoming releases
  * Monitor near-term availability
* **Expected end period**

  This filter shows titles whose **Expected end date** falls within a selected timeframe.

  Available options:

  * Tomorrow
  * This week
  * This month
  * Next week
  * Next month

  Use this filter to:

  * Identify titles that are expiring soon
  * Take action to extend availability
  * Monitor upcoming expirations across your catalog

<Image align="center" caption="Filter titles by 'This month' while viewing 'Failed' to prioritize fixes for titles that are scheduled to go live soon." src="https://files.readme.io/aa6fd085789b62b0ca8a75cab0f5e5e644e9fee0efb1f6db99b3390556dcca47-image.png" />

These filters use the rolled-up **Expected start** and **Expected end** dates shown in the table.

<Callout icon="🧐" theme="default">
  * Filters apply to the full title list and update results immediately.
  * A title appears if its date falls within the selected period.
</Callout>

<br />

## Viewing status by territory

Some titles have different statuses across channel store locations.

To view details:

1. Select the expand arrow next to a title.
2. The **Territories** panel appears.

![](https://files.readme.io/2e946945e0dda50df1ef2efa2f1ed3e25349a976d13bdbcf4e60ea1e3f976d8e-image.png)

### How to read the territories panel

Each card shows:

* Territory
* Status
* License type
* Availability window

### Understanding mixed status

**Example**

**1 of 3 unfulfilled**

This means:

* Some territories are ready or live
* Others require action

Use the panel to:

* Identify affected territories
* Focus only where action is needed

<br />

# Common scenarios

## Which titles need attention?

Select **Unfulfilled** or **Failed**.

Prioritize titles with **Errors**.

## Why isn’t my title live?

Check the status:

* **Unfulfilled:** Missing or unmatched inputs
* **Failed:** Blocking errors
* **Processing** or **Rights under review:** Still in progress

<Callout icon="🤔" theme="default">
  If rights are missing, fields such as license types, services, territories, or expected dates may display as blank or `'-'`. This is expected until the required data is provided and matched.
</Callout>

<br />

# Some final callouts

* This view provides summary-level visibility only.
* Issue details are not shown here.
* A dedicated **Title tracking issues** view will be provided in the future for detailed diagnostics and resolution paths.
* Some fields may display `'-'` when data is unavailable.
