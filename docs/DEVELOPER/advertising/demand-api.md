---
title: Demand Api
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

# Implementing the Demand API

Publishers integrate the Demand API to create a direct automated connection with demand partners that provides real-time demand across all of the publisher's inventory. This decreases inventory waste, unifies demand from Roku and third-parties, and enables the publisher to maintain full control of their inventory allocation with their ad server. The automated supply and demand matching provided by the Demand API helps publishers monetize video ad inventory more efficiently.

> Apps in the U.S. Streaming Store that have both streamed more than an average of 100,000 hours per month and averaged more than 10,000 new installs per month over the last three months must implement the Demand API as part of their integration (this requirement is also applicable to new apps projected to reach the specified thresholds shortly after launch).
>
> Apps outside the U.S. Streaming Store that have streamed more than an average of 200,000 hours per month over the last three months, and new apps outside the U.S. Streaming Store that are projected to reach this threshold, must also implement the Demand API.
>
> The following table summarizes which apps must implement the Demand API and when the implementation is required:
>
> | App criteria                                             | In U.S Streaming Store | Outside U.S Streaming Store |
> | ------------------------------------------------------------ | -------------------- | ------------------------- |
> | Inventory relationship with Roku?                            | YES                  | YES                       |
> | Streaming hours <br />(average hours per month over the last three months) | 100,000              | 200,000                   |
> | New installs<br />(average new installs per month over the last three months) | 10,000               | N/A                       |
> | Requirement effective date                                   | April 1, 2021        | April 1, 2022             |

## Integration steps

The Demand API integration is completed in two phases:

1. Publisher calls the Demand API following the instructions in the integration document that will be provided to them and then verifies that their system is receiving a response. By verifying that their system can send and receive Demand API calls, the publisher is placed in a queue for completing the integration.



2. Publisher contacts their Roku partner manager, who works with the publisher to configure the complete Demand API integration. For example, Roku Partner Management provides sample code and helps the publisher configure their ad server.
