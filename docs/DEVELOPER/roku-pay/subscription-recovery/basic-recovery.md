---
title: "Basic Subscription Recovery"
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

# Basic Subscription Recovery

When payment for a subscription auto-renewal fails, Roku's basic subscription recovery feature gives customers a 3-day grace period where they can continue accessing content, while Roku Pay notifies them daily via email to update their method of payment (MOP). Once the 3-day grace period expires, the subscription is canceled. This solution helps the publisher improve the chance of recovering payments and thereby reduce passive cancelations.

> Effective October 1, 2024, all apps using Roku Pay must implement Enhanced Subscription Recovery to pass [certification](/docs/developer-program/certification/certification.md#4-channel-operation). As a result, apps using basic subscription recovery solution must migrate to [Enhanced Subscription Recovery](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md).
>

## Overview

When the auto-renewal of a customer's subscription fails, Roku Pay automatically places the subscription in recovery. When a subscription is in recovery, the customer is given a grace period where they may continue accessing content for 3 days. During this 3-day grace period, the customer is notified daily via email to update their MOP.

If Roku receives a payment during the 3-day grace period, it is processed and entitlement is maintained (the billing period also remains the same). If no payment is received by the end of the 3-day grace period, the subscription is canceled.

## Email renewal notifications

Roku sends email notifications prompting the customer to update their MOP or manage their subscription online at [my.roku.com](http://my.roku.com/).

![roku600px - email-hold-notification](https://image.roku.com/ZHZscHItMTc2/email-hold-notification.jpg)

## Entitlement checks

Publishers can use the Roku Pay APIs to check whether a subscription is current, on hold, or canceled. The [ChannelStore API](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) can be used to check the subscription status client-side upon app launch and then block access to content based on the results; the [Roku Pay web service APIs](/docs/developer-program/roku-pay/implementation/roku-web-service.md) can be used server-side for regular nightly syncs to update the publisher's entitlement service.

### ChannelStore API

When customers launch an app, the app should call the ChannelStore [getAllPurchases](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) API, as part of the required on-device authentication, to determine whether to block access to content. The [getAllPurchases](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) API returns an **inDunning** flag that can be used along with the **status** field to get the status of a subscription:

| Subscription state               | **"inDunning"** | **"status"** |
| :------------------------------- | :-------------- | :----------- |
| Current                          | false           | Valid        |
| In recovery (3-day grace period) | true            | Valid        |
| Canceled                         | false           | Invalid      |

### Roku Pay web service APIs

The publisher should routinely synchronize their entitlement service with the Roku Pay web services to make sure their system has up-to-date entitlement data. Publishers can call the [validate-transaction API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#managing-subscription-recovery) as part of a nightly batch routine to get the updated status of customers' subscriptions. This API returns an **isEntitled** flag that can be used along with the **expirationDate** field and **cancelled** flag to get the status of a subscription:

| Subscription state               | **"isEntitled"** | **"expirationDate"** | **"cancelled"** |
| :------------------------------- | :--------------- | :------------------- | :-------------- |
| Current                          | true             | future date          | false           |
| In recovery (3-day grace period) | true             | current or past date | false           |
| Canceled                         | false            | past date            | true            |

> **Free trials:** When a free trial ends and the customer's method of payment fails, the `is_entitled` flag is set to "false", and the subscription is automatically cancelled (there is no grace period in this case).

## Push notifications

Roku Pay sends a [GraceInitiated push notification](/docs/developer-program/roku-pay/implementation/push-notifications.md#in-grace-period) when a subscription is put on hold, it sends a [GraceRecovered](/docs/developer-program/roku-pay/implementation/push-notifications.md#in-grace-period) notification when the subscription is recovered (renewed after being put in a grace period):

### GraceInitiated

```
{
    "customerId": "9aa37bd6f970578294cea4783af08560",
    "transactionType": "GraceInitiated",
    "transactionId": "024d4e1fc7b611eeafbe0a58a9feaca8",
    "channelId": "3605562",
    "productCode": "0fCsu09EGS5C6OHlEUnz_MonthlySub",
    "productName": "0fCsu09EGS5C6OHlEUnz_MonthlySub",
    "originalTransactionId": "024d4e1fc7b611eeafbe0a58a9feaca8",
    "originalPurchaseDate": "2024-01-12T01:45:36Z",
    "eventDate": "2024-02-10T01:45:39Z",
    "expirationDate": "2024-02-10T01:45:36Z",
    "comments": "Subscription is in dunning state",
    "responseKey": "163792dbc7b611eeafbe0a58a9feaca8",
    "isFreeTrial": false
}
```

### GraceRecovered

```
    "customerId": "9d425957549250dcba71e03dacf426b5",
    "transactionType": "GraceRecovered",
    "transactionId": "f0864331c7b611eea3c40a58a9fead9c",
    "channelId": "3193830",
    "productCode": "PPfCfuZMf3TOXBBl3Ttu_MonthlySub",
    "productName": "PPfCfuZMf3TOXBBl3Ttu_MonthlySub",
    "originalTransactionId": "d4c4da85c7b611eea3c40a58a9fead9c",
    "originalPurchaseDate": "2024-01-12T01:51:39Z",
    "eventDate": "2024-02-10T01:51:46Z",
    "expirationDate": "2024-03-10T01:51:39Z",  
    "comments": "Subscription recovered from dunning state.",
    "responseKey": "d915ab762a3752e7bf112e7903958f52",
    "isFreeTrial": false
}
```