---
title: Roku Pay
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

# How Roku Pay works

Roku Pay is Roku's proprietary payment platform. It provides a robust payment experience featuring a low-friction signup flow and an end-to-end payment process. By integrating Roku Pay in an app, publishers can provide simple, streamlined workflows that enable customers to purchase and access content with minimal interaction. Once customers add a method of payment to their Roku customer account, they can subscribe to apps, rent movies, and purchase sporting events and pay-per-views all directly on-device with just a few key presses from their Roku remote control.

<video src="https://image.roku.com/ZHZscHItMTc2/roku-pay-how-it-works.mp4" poster="https://image.roku.com/ZHZscHItMTc2/roku-pay-how-it-works-v3.png" width="720" height="480" controls />

This document uses the example of a customer signing up for a subscription video on demand (SVOD) app to highlight the streamlined purchasing experience provided by Roku Pay. This purchasing workflow is similar for customers renting movies, ordering pay-per-views and sporting events, or making other one-time purchases in a [transactional video on demand (TVOD) app](/docs/developer-program/roku-pay/implementation/tvod-channel.md).

## Customer adds payment method

When a customer activates their Roku device, they create their Roku account and link a payment method to it. This allows them to subscribe to apps directly from their Roku device via Roku Pay. In addition to adding a payment method upon device activation, customers can set a 4-digit PIN that is required for making any on-device purchase through Roku Pay. Customers can also update their payment method anytime online or on-device (see [Customer updates payment method](#customer-updates-payment-method) for more information).

![roku400px - img](https://image.roku.com/ZHZscHItMTc2/customer-account-MOP-v2.png?)

> Apps can participate in [Instant Signup](/docs/developer-program/discovery/instant-signup.md) to offer free trial subscriptions to customers when they activate their device.

## Customer selects subscription product

Once a customer installs an SVOD app, they can select a subscription product. Apps can offer free trial periods and discounted offers, and Roku Pay automatically handles the auto-renewals of the trial or discounted offers to paid full-price subscriptions. Apps can also offer monthly and annual subscriptions and allow customers to [upgrade their plan directly on-device](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md).

![roku815px - mtv-hits-subscription](https://image.roku.com/ZHZscHItMTc2/mtv-hits-subscription-v2a.png)

## Customer shares Roku account information

When the customer selects a product, the app displays a "Request for information" screen. It guides the customer to create an account using their existing Roku account information such as their name, email address, and phone number. The RFI screen eliminates the need for the customer to enter any account information, which minimizes keypresses and reduces friction.

![roku400px - rfi-create-account](https://image.roku.com/ZHZscHItMTc2/rfi-create-account-v3.png)

## Customer confirms order

An order confirmation dialog opens prompting the customer to review the subscription terms and then start the subscription. The dialog displays the app's logo, the trial/discounted offer (if any), subscription price and billing period, and payment method or PIN dialog.

![roku815px - mtv-hits-confirm-subscription](https://image.roku.com/ZHZscHItMTc2/mtv-hits-confirm-subscription-v2.png)

> The customer experience depicted in this confirmation dialog is for service available in The Roku Channel. For Direct-to-Consumer apps, the app's logo is displayed in the left pane rather than app artwork.

## Account automatically created for customer

The app uses the customer's information to create a user account in their backend system. The app generates a secure temporary password and stores it in the customer's account, and then sends the customer a "Welcome" email with information on how to reset the temporary password.

## Customer manages subscriptions

Customers can view their active and expired subscriptions from their account's **Subscriptions** page. This page lets customers cancel existing subscriptions, keep canceled subscriptions, or resubscribe to expired ones with just two clicks.

![roku815px - online-subscription-management](https://image.roku.com/ZHZscHItMTc2/online-subscription-management-v2.png)

## Customer updates payment method

If the customer's payment method expires, Roku makes it easy for customers to update it in order to continue their subscriptions. Customers can update their payment online from their account's **Update Payment Method** page, on-device by pressing **Settings>Payment method**, and even on their phone via SMS.

In addition, to further reduce passive cancellation, the Roku home page will display payment method expiration notifications once a day for multiple consecutive days (typically three). Customers can click this notification, update their payment method directly on-device, and then continue their subscriptions.

![roku815px - mop-expired](https://image.roku.com/ZHZscHItMTc2/mop-expired-v2.png)