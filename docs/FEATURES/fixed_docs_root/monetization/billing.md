---
title: "Subscriptions and one-time purchases"
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

# Subscriptions and one-time purchases

Roku Pay gives publishers a robust payment platform for increasing conversions and maximizing subscription revenue. Roku Pay features a low-friction signup flow that makes it safe and easy for customers to signup for free trial subscriptions, subscribe to apps, and purchase movie rentals, sporting events, and pay-per-views. After adding a payment method, customers can make purchases right from their TV with just a few presses on their Roku remote control, while managing their subscriptions both online and on-device.

![roku815px - roku-pay-feature-v4](https://image.roku.com/ZHZscHItMTc2/roku-pay-feature.jpg)

## Demonstrated results

With the reduced friction in the purchase funnel provided by Roku Pay, publishers can:

- **Acquire new customers:** Publishers using Roku Pay can participate in [Instant Signup](/docs/developer-program/discovery/instant-signup.md) (Roku's program for offering customers free trial subscriptions when activating their devices) to increase free trial starts.



- **Increase conversions**: Most Roku customers have a method of payment (MOP) linked to their account, which means they complete more purchases on-device. Publishers using Roku Pay can leverage Roku's user experience, which enables customers to subscribe to apps with just a few keypresses, to increase their conversion rates and decrease funnel drop-off.



- **Retain customers**: Roku Pay actively notifies customers when their MOP expires and makes it easy to update it online, on-device, and even via mobile, which decreases passive cancellations.

## Complete payment management system

In addition to maximizing subscription and transactional content revenue, Roku Pay eliminates the complexities of the payments industry for publishers. With Roku Pay, the complete end-to-end payment experience, from authorization to [disbursement](/docs/features/monetization/payouts.md), is managed for you. Processing costs, international currency conversions, and tax withholdings are all automatically handled. [Analytics and sales and transactional reporting](/docs/developer-program/roku-pay/roku-pay-reports.md) are provided to help manage and track payouts, which are distributed seamlessly and on time.

![roku815px - roku-pay-sales-activity-report](https://image.roku.com/ZHZscHItMTc2/roku-pay-sales-activity-report-v2.jpg)

**Active customer retention**

Most Roku customers have a method of payment (MOP) on file, and if it expires, Roku makes it easy for them to update it online, on-device, and even mobile via SMS. In addition, to further reduce passive cancellation, the Roku home page prompts customers to update their payment method in case it expires and their subscription cannot be renewed. Customers can click this notification, update their payment method directly on-device, and then continue their subscriptions.

![roku815px - mop-expired](https://image.roku.com/ZHZscHItMTc2/mop-expired.jpg)

## Simple integration

Implementing Roku Pay entails designing a low-friction purchase funnel with the SceneGraph ChannelStore component and integrating Roku Pay web services. The ChannelStore component includes a complete suite of APIs for getting subscription products from the app's catalog, pre-populating dialogs with customers' user information, purchasing products, and granting access to content. These APIs make it so customers only need as few as two clicks to select and purchase a subscription. The Roku Pay web services are integrated into the publisher's backend system for validating, refunding, and canceling subscriptions. The Roku Pay documentation includes [best practices](/docs/developer-program/roku-pay/roku-pay-best-practices.md) for creating a low-friction purchase funnel.

![roku815px - roku-pay-flow](https://image.roku.com/ZHZscHItMTc2/roku-pay-flow.jpg)

> Apps offering transactional content (SVOD, TVOD, and other subscription services) must include an on-device [Roku Pay billing flow](/docs/developer-program/roku-pay/implementation/overview.md) to pass certification and be published to the Streaming Store.

## Customer acquisition and retention solutions

Roku provides a number of free, easy-to-implement solutions for acquiring and retaining customers in order to maximize subscription revenue:

- **[Instant Signup](/docs/developer-program/discovery/instant-signup.md)**: Offer customers a free trial subscription of your app when activating their Roku devices.

  ![roku815px - isu-example](https://image.roku.com/ZHZscHItMTc2/isu-example.jpg)



- **[On-device authentication](/docs/developer-program/authentication/on-device-authentication.md)**: Enable customers to start subscriptions right from your on-device app UI.



- **[On-device upgrade/downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md)**: Enable customers to seamlessly switch plans directly from their devices, while avoiding accidentally being double-billed for access to the same content or service. Target different customers with the best plan in order to maximize content monetization.



- **[Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md)**: Automatically sign customers into your app when they activate additional Roku devices linked to their same Roku account.



- **[Abandonment tracking](/docs/developer-program/roku-pay/implementation/tracking-signup-abandonment.md)**: See where users may be abandoning the process by firing events upon loading each page within the app's signup flow.