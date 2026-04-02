---
title: Title Tracking
excerpt: Title Tracking Status Overview
deprecated: false
hidden: true
metadata:
  robots: index
---
Monitor where your titles are in The Roku Channel publishing pipeline and identify which titles need action.

<ContentPartnerAvailability />

<br />

## Who this is for

Use the **Title Status** view if you are responsible for delivering or managing Video On Demand content on **The Roku Channel**.

This view is most useful for:

### Operations Managers (Asset Delivery)

Use this view to:

* Track asset delivery and processing progress
* Identify ingestion or processing failures
* Monitor titles blocked by asset-related issues

Focus on these statuses:

* **Unfulfilled**: missing or unmatched assets
* **Failed**: processing or QC issues
* **Processing**: assets are actively being prepared

### Business Managers (Rights Delivery)

Use this view to:

* Track rights submission and approval status
* Monitor availability windows across territories
* Identify titles blocked by rights issues

Focus on these statuses:

* **Unfulfilled**: missing or unmatched rights
* **Rights under review**: pending approval
* **Expired**: rights windows need updating

<br />

## Getting access

To use this feature, get the appropriate role assigned to your account.

1. Request **Business Manager** or **Operations Manager** access from your company’s account administrator.
2. Ask your administrator to grant access based on your responsibilities, such as rights management or asset delivery.
3. Contact your internal team if you are not sure who your administrator is.

<br />

## Page layout

[IMAGE PLACEHOLDER: Title Status page overview]

Show the full page including: licensor dropdown (if present), metric cards row, search + filters, and the title table. Highlight the relationship between cards and table filtering.

<Image align="center" border={true} width="100% " src="https://files.readme.io/1d7fe41041e2a73777f31c4d73b309ae0db5f67110b6bf7fa0832ba95e24ca2c-walkthrough-gif-test-ezgif.com-video-to-gif-converter_1.gif" className="border" />

<br />

## How to use this page

### 1. Select a licensor

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

[IMAGE PLACEHOLDER: Metric cards with one selected]

Show a selected card state (for example, **Failed**) and how the table updates to reflect only those titles.

<br />

## How status is determined

### How the **All titles** card works

The **All titles** card shows every title in your catalog.

For each title, the **Status** column reflects the **most restrictive condition** across all territories and components.

This means:

* A single blocking issue, such as **Failed** or **Unfulfilled**, overrides all other states.
* The status shown here represents the overall health of the title.

#### Status priority

From most restrictive to least restrictive:

1. Failed
2. Unfulfilled
3. Rights under review
4. Processing
5. Scheduled
6. Live
7. Expired

##### Examples

| Scenario                                | Result      |
| --------------------------------------- | ----------- |
| Some territories Live, some Failed      | Failed      |
| Some territories Live, some Unfulfilled | Unfulfilled |
| Some territories Live, some Expired     | Live        |
| All territories Expired                 | Expired     |

#### Why a title may show a restrictive status

Even if most of a title is **Live**, a single **Failed** or **Unfulfilled** component overrides the overall status.

Use the **Territories** panel to identify where the issue exists.

### How the other status cards work

Each status-specific card, such as **Failed** or **Expired**, highlights titles that are actively in that state.

A title appears in a status card if:

* at least one territory matches that status, or
* at least one component matches that status

#### Example

* The **Expired** card shows any title that has at least one territory where availability has expired.
* The **Live** card shows any title that is live in at least one territory.

<br />

<Callout icon="fa-info-circle" theme="info">
  A single title can appear in multiple status cards because status is evaluated at the territory level. Use **All titles** to see the rolled-up overall status.
</Callout>

Because status is evaluated at the territory level, a single title can appear under multiple cards.

#### Example

* **US** → Live
* **CA** → Scheduled
* **MX** → Expired

This title appears in:

* Live
* Scheduled
* Expired

But in the **All titles** view, the **Status** column shows the most restrictive status. In this case, that status is **Scheduled**.

### Why this matters

* Use **All titles** to understand overall readiness.
* Use individual status cards to find and act on specific conditions.
* Do not assume a title belongs to only one status.
* Expand the title to see where issues exist.

<br />

## What requires your attention

Focus on these two statuses first:

### Unfulfilled

> Waiting for ordered rights, assets, or a match between the two. Requires your attention.

This means required inputs are missing or not linked by the same **Title ID**.

**Action:**

* Deliver rights and assets.
* Make sure the **Rights ID** and **Asset ID** match the same **Title ID**.

### Failed

> One or more issues occurred while processing your files and are preventing this title from going live. Requires your attention.

This means blocking errors occurred during processing.

**Action:**

* Resolve the errors before the title can proceed.

<br />

## Understanding the title status table

Each row represents a single title and its current status across territories.

[IMAGE PLACEHOLDER: Full table with column labels]

Show the full table header row and 2–3 example rows. Visually call out each column from left to right.

The following table explains each column in the title table.

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

        **Important notes:**
        TV episodes are the actual playable titles. TV seasons and TV series are organizational levels used to group and structure episodes. Status, Territories, Expected start date, and Expected end date for seasons and series are rolled up from their underlying episodes.
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

        #### Unfulfilled

        Waiting for ordered rights, assets, or a match between the two. **Requires your attention.**

        #### Failed

        One or more issues occurred while processing your files and are preventing this title from going live. **Requires your attention.**

        #### Rights under review

        Rights are being reviewed for approval by the Roku team. Turnaround time may vary based on catalog volume.

        #### Processing

        The Roku pipeline is preparing your assets for publishing.

        #### Scheduled

        Ready for go-live as scheduled.

        #### Live

        The title is available to viewers.

        #### Expired

        Update windows to reactivate.

        For multi-territory titles, you may see values like **1 of 3 unfulfilled**, which means only some territories are impacted.
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

When reviewing a title:

1. Start with **Status** to understand overall readiness.
2. Check **Error** and **Warning** counts, if present, to understand severity.
3. Review **Territories** to understand regional coverage.
4. Use **Expected** dates to understand timing.

[IMAGE PLACEHOLDER: Annotated row walkthrough]

Highlight a single row and visually walk through how to interpret it step-by-step (license → service → status → territories → dates).

<Callout icon="fa-exclamation-triangle" theme="warning">
  A title can appear ready in one territory but blocked in another. The **Status** column shows the most restrictive condition across all territories.
</Callout>

To investigate territory-level differences, expand the row.

<br />

## Default sorting

By default, titles are sorted by the date they were added, with the most recently added titles shown first.

For TV content, additional sorting rules apply:

* TV seasons are ordered by **Season number**.
* TV episodes are ordered by **Episode number** within each season.

This ensures that:

* episodes appear in the correct chronological sequence
* seasons and episodes display in a logical viewing order

[IMAGE PLACEHOLDER: TV series expanded with sorted seasons and episodes]

Show a TV series with multiple seasons and episodes expanded, highlighting correct chronological ordering (for example, Season 1 → Season 2, Episode 1 → Episode N).

**Important notes**

* Sorting by added date applies at the top-level title list.
* Chronological ordering applies within TV hierarchies: **Series → Season → Episode**.
* This behavior keeps episodic content consistent and easier to review.

<br />

## Viewing status by territory

Some titles have different statuses across regions.

To view details:

1. Click the expand arrow next to a title.
2. The **Territories** panel appears.

[IMAGE PLACEHOLDER: Expanded row with Territories panel]

Show a title expanded with 2–3 territory cards, including mixed statuses (for example, **Live** + **Unfulfilled**).

### How to read the Territories panel

Each card shows:

* Territory
* Status
* License type
* Availability window

### Understanding mixed status

Example:

**1 of 3 unfulfilled**

This means:

* some territories are ready or live
* others require action

Use the panel to:

* identify affected territories
* focus only where action is needed

<br />

## How issue counts work

Issue counts are aggregated across all parts of a title.

* Errors and warnings originate at the lowest level.
* Counts roll up across territories and content hierarchy.

This means a title or series may show higher counts if issues exist in multiple areas.

<br />

## Using search and filters

Use search to find titles by:

* Title name
* Series name
* Title ID

Use filters to narrow results by:

* Content type
* License type
* Service
* Territory
* Expected start period
* Expected end period

### Expected start period

This filter shows titles whose **Expected start date** falls within a selected timeframe.

Available options:

* Tomorrow
* This week
* This month
* Next week
* Next month

Use this filter to:

* identify titles launching soon
* prepare for upcoming releases
* monitor near-term availability

### Expected end period

This filter shows titles whose **Expected end date** falls within a selected timeframe.

Available options:

* Tomorrow
* This week
* This month
* Next week
* Next month

Use this filter to:

* identify titles that are expiring soon
* take action to extend availability
* monitor upcoming expirations across your catalog

[IMAGE PLACEHOLDER: Filters panel with Expected Start Period and Expected End Period highlighted]

Show the filter UI expanded, with both period filters visible and one selected (for example, **This week**), and the table results updated accordingly.

**Important notes**

* These filters use the rolled-up **Expected start** and **Expected end** dates shown in the table.
* Filters apply to the full title list and update results immediately.
* A title appears if its date falls within the selected period.

<br />

## Common scenarios

### Which titles need attention?

Click **Unfulfilled** or **Failed**.

Prioritize titles with **Errors**.

### Why isn’t my title live?

Check the status:

* **Unfulfilled**: missing or unmatched inputs
* **Failed**: blocking errors
* **Processing** or **Rights under review**: still in progress

<br />

<Callout icon="fa-info-circle" theme="info">
  If rights are missing, fields such as territory, service, or dates may display as blank or `-`. This is expected until the required data is provided.
</Callout>

<br />

## Notes

* This view provides summary-level visibility only.
* Issue details are not shown here.
* A dedicated **Title Tracking Issues** view will be provided in the future for detailed diagnostics.
* Some fields may display `-` when data is unavailable.
