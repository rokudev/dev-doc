---
title: "Signup requirements and best practices"
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

# Signup requirements and best practices

SVOD and TVOD apps (and other subscription services) participating in Roku Pay can maximize subscription revenue by minimizing the number of screens and keypresses in the on-device sign-up workflow. Otherwise, customers may abandon the sign-up workflow if prompted to enter their email address or other personal information in an account creation screen because it requires too many keypresses.

The following graphic demonstrates the standard Roku on-device sign-up workflow, which includes just a maximum of four screens: the landing page, the request for information (RFI) screen, the plan selection screen (if your app has multiple subscription products such as monthly and annual plans), and the order confirmation screen. Using this workflow requires as few as three or four keypresses.

![roku815px - img](https://image.roku.com/ZHZscHItMTc2/sign-up-flow-optimal.gif)

> **Certification requirement**: For SVOD and TVOD apps (and other subscription services) to pass certification, they must use an on-device Roku Pay billing flow. The Request for Information (RFI) screen must be displayed during the on-device sign-up flow to enable customers to share their Roku customer account information with apps. Only if the user declines the request, may apps require the customer to manually enter their information.

Implementing this streamlined user experience involves two different aspects: the on-device sign-up UI and the integrations that support it. This document explains both of these areas.

## On-device sign-up UI

The on-device sign-up workflow should adhere to the standards and best practices specified in this section. This includes the order of the screens, the copy used in the screens, and when customer information is sent to the app's backend system in order to check for an existing account and create a new one.

For standards and best practices for designing the sign-in UI, see [Sign-in requirements and best practices](/docs/developer-program/roku-pay/signin-best-practices.md).

### Screen order

As explained in the introduction, the on-device sign-up workflow should typically have a maximum of four screens (listed in the recommended order):

1. **Landing page**. Provides call-to-action for subscribing. Includes entry to the sign-up and sign-in flows.


2. **RFI screen** (Roku Pay built-in). Enables customers to grant the app access to their Roku account information (name, email address, street address, zip code, phone number, and so on). This makes it so apps can (1) check whether the user has an existing account before the purchase and (2) create a user account in their backend system on the behalf of the customer after the purchase has been completed. Only request the minimum information needed to create a user account in your system.

   > **Certification requirement**: Apps must display the RFI screen in the sign-up flow to pass certification.


3. **Plan selection screen**. Provides the pricing and features of subscription products offered by . If a plan has additional features that the customer can purchase (for example, an MVPD app may offer sports or movie add-ons for a base package), a separate screen may be used to list the features available for purchase.


4. **Order confirmation screen** (Roku Pay built-in).  Enables customers to confirm their method of payment, review the terms of the subscription, enter a PIN code (if required), and complete the purchase. Once the customer has completed the purchase, access to content should be granted without any additional steps. In addition, the app can then create a user account for the customer in their system.

   The order of the RFI and plan selection screens can be reversed; however, it is recommended that the RFI screen is displayed first to check whether the user already has an existing account before selecting a subscription plan.

### Screen copy

The RFI and order confirmation screens are provided by Roku Pay. The text displayed in these screens is controlled by the Roku OS and cannot be modified.

The publisher provides the copy used for the landing page and the plan selection screen. The language in these pages should be clear, concise, and persuasive. Specifically, apps should adhere to the following best practices for the text in these pages:

- **Landing page**. The landing page should have a clear call-to-action to subscribe. It should be clear about any price points, and highlight any free trial or promotional pricing offers.


- **Plan selection screen**. The plan selection screen should disclose all material terms and provide a summary of services and charges (apps are responsible for disclosing obligations about their service and fees). This screen should clearly articulate the benefits of each plan. For example, if an app offers monthly and annual plans, this screen can highlight the percentage savings of the annual plan compared to the monthly one. For apps that do have monthly and annual plans, default to the monthly plan to reduce potential refund requests.

### Checking and creating user accounts

As previously described, the RFI screen enables customers to grant the app access to their Roku account information. Apps can use this information to check whether the user has an existing account before the purchase and create a user account in their backend system after the purchase. The specific timing to be used and information to be sent for checking and creating user accounts is as follows:

- **When to check for an existing user account.** Once the customer clicks **Continue** in the RFI screen, the app can get the user's email address and send it to their backend system to check whether that email address is already linked to an active subscription for which the publisher is already handling billing.


- **When to create a new user account**.  Only once the customer has completed the order confirmation screen and purchased a subscription may the app use the customer's information (name, email address, street address, zip code, phone number, and so on) to create a new user account in their backend system. Apps can then auto-generate a temporary password and then email customers with instructions to reset it.

## Integrations

Roku offers a number of integrations that enable apps to provide customers with a seamless on-device sign-up experience. Implementing these integrations helps apps increase the number of successful subscriptions and purchases, and it ensures that your app complies with Roku's [app certification requirements related to purchasing](/docs/developer-program/certification/certification.md#2-purchases).

Some integrations are required only if your app meets the stated streaming thresholds; however, implementing all of these integrations is recommended for all apps.

| Integration                                                | Streaming threshold                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| [On-device authentication](#on-device-authentication)      | Required for all SVOD and TVOD apps.                     |
| [On-device upgrade/downgrade](#on-device-upgradedowngrade) | Required for all SVOD and TVOD apps.                     |
| [Automatic Account Link](#automatic-account-link)          | Required for all apps with user accounts that have streamed more than an average of **1 million hours** per month over the last three months. |
| [Abandonment tracking](#abandonment-tracking)              | Required for SVOD apps that have streamed more than an average of **5 million hours** per month over the last three months. |

### On-device authentication

On-device authentication enables customers to start a subscription from your on-device app UI. This integration uses the [ChannelStore APIs](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) to manage the on-device user experience of the purchase flow through Roku Pay. It includes a complete suite of APIs for implementing the on-device purchasing, entitlement, and authentication workflows.

![on-device-auth-schematic](https://image.roku.com/ZHZscHItMTc2/on-device-auth-schematic-v2.jpg)

For more information, click [here](/docs/developer-program/authentication/on-device-authentication.md#creating-new-roku-subscriptions-through-roku-pay).

> **Certification requirement**: All SVOD and TVOD apps (and other subscription services) must implement On-device authentication.

### On-device upgrade/downgrade

On-device upgrade/downgrade enables customers to seamlessly switch plans directly from their devices, while making sure they are billed properly. Your app can then target different audiences with the best plan in order to maximize content monetization. This integration uses the [ChannelStore](/docs/references/scenegraph/control-nodes/channelstore.md#doorder) and [Roku Pay web service](/docs/developer-program/roku-pay/implementation/roku-web-service.md) APIs to handle upgrades/downgrades.

![roku815px - subscription-plans](https://image.roku.com/ZHZscHItMTc2/subscription-plans-v4.jpg)

For more information, see [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md).

> **Certification requirement**: All SVOD and TVOD apps (and other subscription services) must implement On-device upgrade/downgrade.

### Automatic Account Link

Automatic account link automatically signs customers into your app when they activate additional Roku devices linked to their same Roku account.

![roku815px - automatic account link flow chart](https://image.roku.com/ZHZscHItMTc2/AAL.jpg)

For more information, click [here](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md).

> **Certification requirement**: All apps requiring a user account to login and that have streamed more than an average of 5 million hours per month over the last three months must implement Automatic Account Link.  
>
> This requirement is also applicable to new subscription services projected to reach the specified streaming hour threshold shortly after launch.


### Abandonment tracking

With abandonment tracking, your apps fires events upon loading each page within your app's signup flow to help track where users may be abandoning the process.

![roku815px - abandonment-tracking](https://image.roku.com/ZHZscHItMTc2/tracking-abandonment-v5.png)

For more information, click [here](/docs/developer-program/roku-pay/implementation/tracking-signup-abandonment.md).

> **Certification requirement**: All subscription services that have streamed more than an average of 5 million hours per month over the last three months must implement abandonment tracking in their signup workflow. This requirement is also applicable to new subscription services projected to reach the specified streaming hour threshold shortly after launch.
