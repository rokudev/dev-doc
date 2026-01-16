---
title: "Offering subscriptions"
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

# Offering subscriptions

<video src="https://image.roku.com/ZHZscHItMTc2/rsg-unit11-subscriptions-v3.mp4" poster="https://image.roku.com/ZHZscHItMTc2/rsg-unit11-subscriptions-v3.png" width="720" height="480" controls />

## About this lesson

This lesson describes how to monetize content by offering subscriptions, directly on-device, through Roku Pay. It explains how to get started with Roku Pay, including how to create an app, in-app products, and test users. It details the Roku Pay workflow from checking entitlements to completing purchases and granting access to content. It also summarizes how to integrate the Roku Web Service RESTful APIs into your backend system for validating, refunding, and canceling subscriptions.

The lesson then covers how to offer subscriptions in an app by integrating the Roku SceneGraph ChannelStore component. It explains how to use the ChannelStore APIs to get subscription products from the app's catalog, purchase products, and confirm purchases.  

This lesson also summarizes some of the app certification requirements for offering transactional content in an app.

> Channels offering subscriptions and one-time purchases must [implement Roku Pay](/docs/developer-program/roku-pay/implementation/overview.md) and adhere to all [Roku Pay certification requirements](/docs/developer-program/certification/certification.md#2-purchases). Channels must integrate Roku Pay in all scenarios in which recurring or one-time payments are received.

## Sample app notes

### Steps required to play content

To play the videos in the [Subscriptions sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/Subscriptions), you need to use the [Roku Developer Dashboard](https://developer.roku.com/developer) to create an app and then configure the app and your developer account for testing. This entails the following steps:

1. [Create a test app](/docs/developer-program/publishing/channel-publishing-guide.md#create-a-public-channel).
2. [Enable the app for billing testing](/docs/developer-program/roku-pay/testing/billing-testing.md).
3. [Create in-app products](/docs/developer-program/roku-pay/quickstart/in-channel-products.md). You must create at least one in-app product that has a [free trial offer](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#trials-and-offers).
4. [Add a test user](/docs/developer-program/roku-pay/quickstart/test-users.md).

### Voiding test user transactions

To reset the purchasing workflow so that no in-app products are associated with your test user, go to the [Developer Dashboard](https://developer.roku.com/users), select **Manage Test Users**, click **View** under the **Transactions** column, and then click **Void Transactions** to void the previous product transactions. This enables you to observe and re-test the app behavior when a user does not have an existing Roku subscription to access content.

### Video ads

This sample app builds upon the previous lesson, where video ads were inserted into the app content. For continuity in the sample app, the video ads implementation remains in the app code; however, if you are developing a subscription video on demand (SVOD) app, you may want to consider whether to display video ads in it.

In addition, to keep the app demonstration segments in this lesson concise and make them more comprehensible, the pre-roll ads that you will see when running the app have been edited out.

## Resources

| Item                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Subscriptions sample app](https://github.com/rokudev/scenegraph-master-sample/tree/master/Subscriptions) | Download and review the code used in this lesson to implement Roku Pay in an app. |
| [Sideloading apps](/docs/developer-program/getting-started/developer-setup.md#sideloading-channels) | Sideload and test the Subscriptions app created in this lesson. |
| [SceneGraph ChannelStore node](/docs/references/scenegraph/control-nodes/channelstore.md) | Read about the SceneGraph ChannelStore APIs, which are used to get subscription products from the app's catalog, pre-populate dialogs with customers' user information, purchase products, and store and retrieve user credentials. |
| [Roku Web Service API](/docs/developer-program/roku-pay/implementation/roku-web-service.md) | Read about the Roku Web Service RESTful API, which you can integrate into your backend system to pull transaction data in order to validate, refund, and cancel subscriptions.  Learn how to subscribe to push notifications to deliver transaction data to your service endpoint. |
| [Certification criteria for purchases](/docs/developer-program/certification/certification.md#2-purchases) | Read the certification criteria for transactional apps (SVOD apps, TVOD apps, and other subscription services). |
| [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md#sample-channel) | Read how to validate subscriptions and purchases before granting access to content. Learn how to enable customers to sign-in to an app directly on their Roku devices—without having to visit an external webpage. |
| [On-device authentication sample app](https://github.com/rokudev/on-device-authentication) | Download and test a sample app demonstrating the on-device authentication workflow. |
| [In-app purchasing](/docs/developer-program/roku-pay/quickstart/in-channel-products.md) | Read how to create in-app products for the subscription and transactional services offered by your app. |
| [Billing testing](/docs/developer-program/roku-pay/testing/billing-testing.md) | Read how to enable your app for billing testing.         |

## Related

[Device registry](/docs/references/brightscript/components/roregistry.md)

[Registry section](/docs/references/brightscript/components/roregistrysection.md)

[Dialog node](/docs/references/scenegraph/dialog-nodes/dialog.md)

[roDateTime](/docs/references/brightscript/interfaces/ifdatetime.md)

[Handing application events](/docs/developer-program/core-concepts/handling-application-events.md)

[Event loops](/docs/developer-program/core-concepts/event-loops.md)

[OnKeyEvent()](/docs/references/scenegraph/component-functions/onkeyevent.md)

[ifSGNodeChildren interface](/docs/references/brightscript/interfaces/ifsgnodechildren.md)

## How to watch

Play the embedded video above or go to [SceneGraph: Offering subscriptions](https://youtu.be/sZ3kpGoxKSM) on the [Roku Developers YouTube channel](https://www.youtube.com/@rokudevelopers) or access the [Roku Developers channel](https://channelstore.roku.com/details/5bd649ba7940dc875cc4f61c20ef5b92/roku-developers) on the Roku platform.
