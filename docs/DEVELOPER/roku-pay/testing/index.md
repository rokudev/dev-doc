---
title: Testing Roku Pay
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Testing the purchase and entitlement workflows in your Roku Pay workflow entails three major steps:

1. Verifying that content cannot be accessed without a subscription.
2. A subscription can be purchased.
3. Access to content is granted with a valid subscription.

These steps are based on the Roku Pay workflows specified in the [On-device authentication guide](doc:on-device-authentication).

> Before running any Roku Pay tests on an app, make sure to add one or more in-app products to the app, enable the app for billing testing, add yourself as a Test User to the app, and then [sideload the app](doc:developer-setup).
>
> * **In-app products**: Developers must [add one or more in-app products](doc:in-channel-products) to the app being tested. If the app has one or more sets of mutually exclusive products, [create product groups ](doc:in-channel-products)for each set. To test entitlements after a free trial expires, create a product that includes a 1-day [free trial](doc:in-channel-products).
>
> * **Billing Testing**: Developers can [designate an app for "billing testing"](doc:billing-testing) to observe output from the SceneGraph ChannelStore node in the debug console when the app is sideloaded. The billing testing feature provides developers with visibility into the confirmations, error codes, and other transactional metadata related to purchases made with Roku Pay.
>
> * **Test Users**. Developers can [add themselves as a Test User](doc:test-users) to the app being tested in order to execute ChannelStore purchases without being billed for the transactions.
