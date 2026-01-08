---
title: "Introduction to Subscription Recovery"
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

# Introduction to Subscription Recovery

Roku Pay includes basic and enhanced subscription recovery solutions to help publishers reduce passive cancelations. When payment for a subscription auto-renewal fails, Roku Pay continuously notifies the customer to update their method of payment (MOP). In addition, Roku Pay provides options for controlling whether customers remain entitled to content while Roku attempts to collect their payment.

## Subscription Recovery solutions overview

While both the basic and enhanced subscription recovery solutions include renewal notifications and entitlement controls, they do vary in a number of aspects, including availability, recovery period, and on-screen notifications. The following table breaks down the differences between the basic and enhanced subscription recovery solutions:


<table>
<thead>
<tr>
<th></th>
<th>Basic Subscription Recovery</th>
<th>Enhanced Subscription Recovery</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Availability</strong></td>
<td>Apps that have streamed <strong>less than</strong> an average of 5 million hours per month over the last three months that are already using the <a href="/docs/developer-program/roku-pay/subscription-recovery/basic-recovery.md">basic subscription recovery solution</a> may continue using it. It is recommended, however, that these apps migrate to <a href="/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md">Enhanced Subscription Recovery</a>.<br /><br />Apps below the streaming hours threshold that have not yet implemented a recovery solution must implement Enhanced Subscription Recovery.<br /><br />Effective October 1, 2024, all apps using Roku Pay must implement Enhanced Subscription Recovery to pass <a href="/docs/developer-program/certification/certification.md#4-channel-operation">certification</a>, regardless of the streaming hours.</td>
<td>Apps that have streamed <strong>more than</strong> an average of 5 million hours per month over the last three months must implement <a href="/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md">Enhanced Subscription Recovery</a> to pass certification.</td>
</tr>
<tr>
<td><strong>Recovery period</strong></td>
<td>3 days</td>
<td>60 days</td>
</tr>
<tr>
<td><strong>Grace period offered</strong></td>
<td>yes<br /><br />Customers have a 3-day grace period where they may continue accessing content while Roku notifies the customer to update their MOP.<br /><br />After the 3-day grace period, the subscription is canceled.</td>
<td>yes<br /><br />Customers have a 3-day grace period where they may continue accessing content while Roku notifies the customer to update their MOP. After the 3-day grace period, the subscription is placed on hold. <br /><br />When a subscription is on hold, customers may not access content while Roku notifies the customer to update their MOP.<br /><br />After the 60-day recovery period, the subscription is canceled.</td>
</tr>
<tr>
<td><strong>On-screen notifications</strong></td>
<td>no</td>
<td>yes</td>
</tr>
<tr>
<td><strong>Push notifications when renewal fails/payment is received</strong></td>
<td>Yes</td>
<td>yes</td>
</tr>
<tr>
<td><strong>Billing period if payment is received</strong></td>
<td>same</td>
<td>payment date</td>
</tr>
<tr>
<td><strong>Documentation</strong></td>
<td><a href="/docs/developer-program/roku-pay/subscription-recovery/basic-recovery.md">Basic subscription recovery</a></td>
<td><a href="/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md">Enhanced Subscription Recovery</a></td>
</tr>
</tbody>
</table>


### Basic subscription recovery

> Effective October 1, 2024, all apps using Roku Pay must implement Enhanced subscription recovery to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation), regardless of the streaming hours. As a result, apps using basic subscription recovery solution must migrate to [Enhanced Subscription Recovery](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md).

When the auto-renewal of a customer's subscription fails, Roku Pay automatically places the subscription in recovery. When a subscription is in recovery, the customer is given a grace period where they may continue accessing content for 3 days. During this 3-day grace period, the customer is notified daily via email to update their MOP.

If Roku receives a payment during the 3-day grace period, it is processed and entitlement is maintained, and the billing period adjusts to the time that the payment was collected. If no payment is received by the end of the 3-day grace period, the subscription is canceled.

**For more information**: [Basic subscription recovery integration guide](/docs/developer-program/roku-pay/subscription-recovery/basic-recovery.md)

### Enhanced subscription recovery

When the auto-renewal of a customer's subscription fails, the customer is given a 3-day grace period where they can continue accessing content, while Roku Pay notifies them daily via email to update their method of payment (MOP). Once the 3-day grace period expires, the subscription is placed on hold for a maximum of 57 days. When a subscription is on hold, customers may no longer access content, and they are notified on the Roku home screen, upon app launch, in-app, and via email to update their MOP.

When a subscription is in the grace period or on hold, the publisher can use the [ChannelStore DoRecovery API](#in-channel-subscription-renewal-dialog) to display an in-app renewal dialog when customers select a content item. The dialog prompts the customer to update their MOP, while either granting access to content if the subscription is in grace or blocking access if it is on hold.

If Roku receives a payment, it is processed and entitlement is automatically granted again, and the billing period either remains the same (if the account is recovered during the grace period) or adjusts to the time that the payment was collected (if the account is recovered while on hold). If no payment is received by the end of the 60-day notification cycle, the subscription is canceled.

For more information: [Enhanced subscription recovery integration guide](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md)

## Subscription recovery settings

You can use the **Subscription recovery** page in the Developer Dashboard to view and configure the recovery settings for your apps. The page lists the subscription recovery solution ([basic](/docs/developer-program/roku-pay/subscription-recovery/basic-recovery.md) or [enhanced](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md)) used for each public and beta app in your developer account and lets you select the subscription recovery solution used by your apps in a self-serve manner.

For more information: [Subscription recovery settings](/docs/developer-program/roku-pay/subscription-recovery/settings.md)

## Subscription recovery testing

You can use the **subscription-recovery** test API to manually force subscriptions into different states (active, in-grace period, on-hold, passively canceled, and recovered), which helps expedite the testing of your [subscription recovery](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md) integration.

For more information: [Subscription recovery testing](/docs/developer-program/roku-pay/subscription-recovery/testing.md)