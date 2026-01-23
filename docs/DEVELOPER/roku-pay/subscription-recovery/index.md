---
title: Introduction to Subscription Recovery
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
Roku Pay includes basic and enhanced subscription recovery solutions to help publishers reduce passive cancellations. When payment for a subscription auto-renewal fails, Roku Pay continuously notifies the customer to update their method of payment (MOP). In addition, Roku Pay provides options for controlling whether customers remain entitled to content while Roku attempts to collect their payment.

## Subscription Recovery solutions overview

While both the basic and enhanced subscription recovery solutions include renewal notifications and entitlement controls, they vary in several aspects, including availability, recovery period, and on-screen notifications.

| **Feature**                       | **Basic Subscription Recovery**                                                                                                                                                                                             | **Enhanced Subscription Recovery**                                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Availability**                  | Apps streaming \< 5M hours/month already using this solution. It is recommended to migrate to Enhanced Recovery. <br /><br /> **Note:** Effective Oct 1, 2024, all apps must implement Enhanced Recovery for certification. | Apps streaming > 5M hours/month must implement this solution. All new apps, regardless of hours, must use this to pass certification.1  |
| **Recovery period2**              | 3 days3                                                                                                                                                                                                                     | 60 days4                                                                                                                                |
| **Grace period5**                 | Yes (3 days). Access remains while Roku notifies the user. Subscription is canceled after 3 days if payment fails.                                                                                                          | Yes (3 days). After 3 days, subscription is placed on **hold**. Access is blocked during hold. Canceled after 60 days if payment fails. |
| **On-screen notifications**       | No                                                                                                                                                                                                                          | Yes                                                                                                                                     |
| **Push notifications**            | Yes                                                                                                                                                                                                                         | Yes                                                                                                                                     |
| **Billing period (if recovered)** | Remains the same                                                                                                                                                                                                            | Resets to the actual payment date                                                                                                       |
| **Documentation**                 | [Basic recovery guide](doc:basic-recovery)                                                                                                                                                                                  | [Enhanced recovery guide](doc:subscription-on-hold)                                                                                     |

### Basic subscription recovery

> **Migration Notice:** Effective October 1, 2024, all apps using Roku Pay must implement Enhanced Subscription Recovery to pass [certification](doc:certification). Apps currently using the basic solution must migrate to the [Enhanced Recovery](doc:subscription-on-hold) solution.

When the auto-renewal of a customer's subscription fails, Roku Pay automatically places the subscription in recovery. The customer is given a grace period where they may continue accessing content for **3 days**. During this window, the customer is notified daily via email to update their MOP.

If payment is received during the 3-day grace period, entitlement is maintained. If no payment is received by the end of the 3 days, the subscription is canceled immediately.

**For more information:** [Basic subscription recovery integration guide](doc:basic-recovery)

### Enhanced subscription recovery

When auto-renewal fails, the customer enters a **3-day grace period** with full content access. Once that expires, the subscription is placed **on hold** for up to **57 days** (totaling 60 days of recovery).

* **Hold State:** Customers are blocked from accessing content.
* **Notifications:** Users see prompts on the Roku home screen, upon app launch, and via email.
* **In-App Recovery:** Publishers should use the [ChannelStore DoRecovery API](#in-channel-subscription-renewal-dialog) to trigger a renewal dialog when a user attempts to play content.

If payment is recovered, entitlement is restored. If recovered during grace, the billing cycle remains unchanged; if recovered while on hold, the billing cycle resets to the payment date.

**For more information:** [Enhanced subscription recovery integration guide](doc:subscription-on-hold)

## Subscription recovery settings

Use the **Subscription recovery** page in the Developer Dashboard to configure these settings. This page allows you to:

* View the current recovery solution for both **beta** and **public** versions of your app.
* Toggle between Basic and Enhanced solutions.
* Manage self-serve migration.

**For more information:** [Subscription recovery settings](doc:settings)

## Subscription recovery testing

Use the `subscription-recovery` test API to manually force subscriptions into specific states (Active, In-Grace, On-Hold, Canceled, or Recovered). This allows you to verify your app's UI and backend logic without waiting for real billing cycles.

**For more information:** [Subscription recovery testing](doc:testing-1)
