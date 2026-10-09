---
title: Roku Pay integration requirements
excerpt: 'Requirements for integrating Roku Pay in apps with in-app purchases or subscriptions'
deprecated: false
hidden: false
metadata:
  title: 'Roku Pay integration requirements | Roku Developer Docs'
  description: 'Review the Roku Pay integration requirements that apps with in-app purchases or subscriptions must meet to pass certification on the Roku platform.'
  robots: index
next:
  description: ''
---
All apps with transactional content or in-app purchases (SVOD, TVOD, and other subscription services) must integrate and enable Roku Pay services. This document lists the requirements for integrating Roku Pay services in an app. Apps must adhere to all of these requirements to pass certification.

## RP 1 Channel setup requirements

<table>
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Name</th>
      <th>Description</th>
      <th>Documentation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RP 1.1</td>
      <td>Channel name</td>
      <td>Apps must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by the channel.<br /><br />The app name must clearly identify the company associated with the service, and the publisher must have full legal rights or consent for their app names and the rights to all trademarks and copyright expressions associated with the name.<br /><br />The app name may not include the name "Roku", and it may not contain any profanity, or derogatory or misleading language.</td>
      <td><a href="https://developer.roku.com/dev/docs/channel-publishing-guide#create-an-app">App publishing</a></td>
    </tr>
  </tbody>
</table>

## RP 2 Sign-up and sign-in requirements

<table>
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Name</th>
      <th>Description</th>
      <th>Documentation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RP 2.1</td>
      <td>RFI screen</td>
      <td>All authenticated transactional apps (SVOD, TVOD, and other subscription services) must use the <a href="https://developer.roku.com/dev/docs/channelstore#getuserdata">getUserData</a> command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the app.<br /><br />Only if the user declines the request, may apps require the customer to manually enter information other than a password.</td>
      <td><ul><li><a href="https://developer.roku.com/dev/docs/signup-best-practices">Signup requirements and best practices</a></li><li><a href="https://developer.roku.com/dev/docs/signin-best-practices">Sign-in requirements and best practices</a></li></ul></td>
    </tr>
  </tbody>
</table>

## RP 3 Payment requirements

<table>
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Name</th>
      <th>Description</th>
      <th>Documentation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RP 3.1</td>
      <td>Product groups</td>
      <td>Subscription services must create product groups in the <a href="https://developer.roku.com/developer">Developer Dashboard</a> for any set of subscription products that the consumer should not be able to be subscribed to simultaneously.<br /><br />For example, if an app has two in-channel products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions</td>
      <td><a href="https://developer.roku.com/dev/docs/product-catalog#creating-product-exclusivity-groups">In-app purchases - Product groups</a></td>
    </tr>
    <tr>
      <td>RP 3.2</td>
      <td>Multiple purchase protection</td>
      <td>Apps must protect against multiple purchases of content or subscriptions through Roku Pay before passing new orders to the Streaming Store service.<br /><br />The Streaming Store service inherently protects against purchasing the same subscription code multiple times, but preventing, for example, the purchase of a free trial subscription and a non-free trial subscription must be done in the channel.</td>
      <td><a href="https://developer.roku.com/dev/docs/product-catalog#creating-product-exclusivity-groups">In-app purchases -Product Groups</a></td>
    </tr>
    <tr>
      <td>RP 3.3</td>
      <td>Price changes</td>
      <td>SVOD apps must provide notice and otherwise comply with all applicable laws before changing the price of their service. <br /><br />In all cases, Roku requires that SVOD apps provide at least 15 days notice to all existing customers before a price increase.</td>
      <td><a href="https://developer.roku.com/dev/docs/product-catalog#scheduling-a-price-change-for-a-purchase-option">In-app purchases - Product pricing</a></td>
    </tr>
    <tr>
      <td>RP 3.4</td>
      <td>In-channel product naming</td>
      <td>Apps must name in-app products so that the service being offered is clearly identifiable. The publisher must have full legal rights or consent for their in-app product names and the rights to all trademarks and copyright expressions associated with the names. The in-app product names may not include the name "Roku", text related to a trial or discount offer<strong>,</strong> or any profane, derogatory, or misleading language.</td>
      <td><a href="https://developer.roku.com/dev/docs/product-catalog##creating-products">In-app purchases - Product basics</a></td>
    </tr>
  </tbody>
</table>

## RP 4 Authentication and entitlement requirements

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Requirement
      </th>
      <th>
        Name
      </th>
      <th>
        Description
      </th>
      <th>
        Documentation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        RP 4.1
      </td>
      <td>
        On-device authentication
      </td>
      <td>
        Apps that include authentication must complete account sign-ups and sign-ins on the device using <a href="https://developer.roku.com/dev/docs/on-device-authentication">On-device authentication</a>. <br /><br />Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms such as rendezvous linking.
      </td>
      <td>
        <a href="https://developer.roku.com/dev/docs/on-device-authentication">On-device authentication</a>
      </td>
    </tr>
    <tr>
      <td>
        RP 4.2
      </td>
      <td>
        On-device upgrades and downgrades
      </td>
      <td>
        Apps must complete upgrades and downgrades on the device using <a href="https://developer.roku.com/dev/docs/on-device-upgrade-downgrade">On-device upgrade and downgrade</a>. The upgrade/downgrade workflows are prohibited from including external webpages.
      </td>
      <td>
        <a href="https://developer.roku.com/dev/docs/on-device-upgrade-downgrade">On-device upgrade and downgrade</a>
      </td>
    </tr>
    <tr>
      <td>
        RP 4.3
      </td>
      <td>
        Account-based entitlements
      </td>
      <td>
        Apps must automatically entitle content or subscriptions purchased through Roku Pay across all devices tied to the purchasing Roku account.<br /><br />Apps can use the <a href="https://developer.roku.com/dev/docs/channelstore#getallpurchases">getAllPurchases</a> API can upon launch to return the transactionID for an active subscription, and they can use an entitlement server to look up an account via a call to the <a href="https://developer.roku.com/dev/docs/roku-web-service#validate-transaction">validate-transaction API</a>.
      </td>
      <td>
        * <a href="https://developer.roku.com/dev/docs/channelstore#getallpurchases">getAllPurchases ChannelStore API</a>
        * <a href="https://developer.roku.com/dev/docs/roku-web-service#validate-transaction">validate-transaction  Roku Pay Web service API</a>
      </td>
    </tr>
    <tr>
      <td>
        RP 4.4
      </td>
      <td>
        Abandonment tracking
      </td>
      <td>
        All subscription services that have streamed more than an average of 5 million hours per month over the last three months (and new subscription services projected to reach the specified streaming hour threshold shortly after launch) must implement Roku Event Dispatcher (RED) in the signup workflow.<br /><br />Apps must fire a RED event upon loading each page within the signup flow and submission of the final page to help track where users are abandoning the process. This includes, but is not limited to, the following pages: landing, sign up, registration, device activation, subscription selection, payment, purchase confirmation, and cancellation.<br /><br />If the app's sign-up flow is contained within a form that covers one or more pages, channels must fire a RED event when each element in the form is completed. Streaming hours per month information is available in the Developer Dashboard.
      </td>
      <td>
        <a href="https://developer.roku.com/dev/docs/tracking-signup-abandonment">Tracking signup abandonment</a>.
      </td>
    </tr>
    <tr>
      <td>
        RP 4.5
      </td>
      <td>
        Enhanced Subscription Recovery (churn mitigation)
      </td>
      <td>
        All apps offering subscriptions must implement Enhanced Subscription Recovery to pass certification
      </td>
      <td>
        <a href="https://developer.roku.com/dev/docs/subscription-on-hold">Enhanced Subscription Recovery</a>
      </td>
    </tr>
  </tbody>
</Table>
