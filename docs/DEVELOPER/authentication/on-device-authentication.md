---
title: On-device authentication
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
# On-device authentication

Apps implement on-device authentications so that customers can complete sign-ups and sign-ins entirely on their Roku devices—without having to visit an external webpage. Additionally, once a customer authenticates on one device, they can automatically be signed in when they activate additional Roku devices linked to their same Roku account.

> Apps that include authentication must complete account sign-ups and sign-ins on the device using on-device authentication to pass [certification](/docs/developer-program/certification/certification.md#2-purchases). Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms.
>
> Apps must complete upgrades and downgrades on the device using [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md). The upgrade/downgrade workflows are prohibited from including external webpages.

## Overview

To implement on-device authentication, you first verify whether a customer should have access to your content. To do this, you check whether the customer has an active Roku subscription for the content, and then check whether there is a valid access token stored in their device registry. If the device registry does not contain a valid access token, you check whether one is stored in the Roku cloud. The next steps depend on the results of these checks. The following table lists the next steps for each possible outcome; the subsequent flow chart illustrates the logic used in this authentication workflow.

<table>
  <thead>
    <tr>
      <th>Active  Subscription through Roku Pay?</th>
      <th>Valid Access Token in Device Registry and Entitlement?</th>
      <th>Valid Access Token in Roku Cloud?</th>
      <th>Next Steps</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>YES</td>
      <td>YES</td>
      <td>—</td>
      <td>Get a refresh token from your entitlement server and store it in the device registry and Roku cloud. Grant access to content.</td>
    </tr>

    <tr>
      <td>YES</td>
      <td>NO</td>
      <td>YES</td>
      <td>Store an access token in the device registry. Grant access to content.</td>
    </tr>

    <tr>
      <td>YES</td>
      <td>NO</td>
      <td>NO</td>
      <td>The next steps depend on whether the customer originally created their account through Roku Pay or your own service ("publisher service)":<br /> <ul><li><strong>Created through Roku Pay</strong>: Validate the previous transaction. Get a new access token from your entitlement server and store in device registry and Roku cloud. Grant access to content.<br /><br /></li><li><strong>Created through publisher service</strong>: Check whether the Roku cloud has an access token. If it does and the customer is signed in, store the access token in the device registry, and then grant access to content.</li></ul><p>If the customer is not signed up or is signed out, display your app UI, get the customer's email address, and have them sign up or sign back in. Once the customer has successfully authenticated, generate a new access token from your entitlement server and store it in the device registry and Roku cloud. Grant access to content.</p><p>If the Roku cloud does not have an access token, display your app UI and then get the customer's email address. Use the email address to check whether the customer is linked to an active subscription in your system. If there is already an active subscription, generate a new access token from your entitlement server and store it in the device registry and Roku cloud. Grant access to content.</p><p><img alt="roku815px - on-device-authenticaton with automatic account link flow chart" src="https://image.roku.com/ZHZscHItMTc2/on-device-authentication-aal-v11.jpeg" /></p><blockquote><p>For SVOD and TVOD apps (and other subscription services), on-device authentication deprecates the <a href="/docs/developer-program/authentication/authentication-and-linking.md">"rendezvous" registration method</a>. With this method, a customer was shown a registration code on their device and had to enter it on an external website. An authentication service then linked the customer's device to their account via an access token that was downloaded and stored on the device.</p><p>Authentication via a third-party oAuth provider such as Google or Facebook is not supported.</p></blockquote></td>
    </tr>

    <tr>
      <td>NO</td>
      <td>YES</td>
      <td>—</td>
      <td>Grant access to content.</td>
    </tr>

    <tr>
      <td>NO</td>
      <td>NO</td>
      <td>YES</td>
      <td>If the customer is signed in, store the access token in the device registry, and grant access to content. If the customer is signing up (or has signed out), have them re-authenticate.</td>
    </tr>

    <tr>
      <td>NO</td>
      <td>NO</td>
      <td>NO</td>
      <td>Create a new subscription through Roku Pay.</td>
    </tr>
  </tbody>
</table>

## Verifying access to content

The first step for implementing on-device authentication entails checking whether a customer has access to content. To do this, use the [**ChannelStore node**](/docs/references/scenegraph/control-nodes/channelstore.md) and [**Roku Pay Web Service API**](/docs/developer-program/roku-pay/implementation/roku-web-service.md) to check for an active subscription created through Roku Pay. Next, use the [**roRegistrySection()**](/docs/references/brightscript/components/roregistrysection.md) method to find an access token in the device registry and then check your entitlement server to see if it is still valid. If the device registry does not contain a valid access token, use the [**ChannelStore node**](/docs/references/scenegraph/control-nodes/channelstore.md#getchannelcred) to see if an access token is stored in the Roku cloud.

### Check for an active Roku subscription

To check for an active Roku subscription with the **ChannelStore API**, follow these steps:

1. Call the [**ChannelStore.getAllPurchases**](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) command. This command returns all of the historical subscription and one-time purchases made by the customer on the app. It causes the **purchases** field to be set to a **ContentNode** containing the results of the command. The **purchases** contentNode contains a child content node for each purchase.

   `myChannelStore.command = "getAllPurchases"`
2. Get the transaction ID from the **purchaseId** field of the child content node. Find the subscription to be validated using the **code** or **productType** fields of the child content node.
3. Pass the transaction ID into a [**validate-transaction**](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction) Roku Pay web service GET API call.
