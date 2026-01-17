---
title: "Testing a Roku Pay app"
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


Testing the purchase and entitlement workflows in your Roku Pay workflow entails three major steps:

1. Verifying that content cannot be accessed without a subscription.
2. A subscription can be purchased.
3. Access to content is granted with a valid subscription.

These steps are based on the Roku Pay workflows specified in the [On-device authentication guide](/docs/developer-program/authentication/on-device-authentication.md).

> Before running any Roku Pay tests on an app, make sure to add one or more in-app products to the app, enable the app for billing testing, add yourself as a Test User to the app, and then [sideload the app](/docs/developer-program/getting-started/developer-setup.md).
>
> - **In-app products**: Developers must [add one or more in-app products](/docs/developer-program/roku-pay/quickstart/in-channel-products.md) to the app being tested. If the app has one or more sets of mutually exclusive products, [create product groups ](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups)for each set. To test entitlements after a free trial expires, create a product that includes a 1-day [free trial](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups#trials-and-offers).
>
> - **Billing Testing**: Developers can [designate an app for "billing testing"](/docs/developer-program/roku-pay/testing/billing-testing.md) to observe output from the SceneGraph ChannelStore node in the debug console when the app is sideloaded. The billing testing feature provides developers with visibility into the confirmations, error codes, and other transactional metadata related to purchases made with Roku Pay.    
>
> - **Test Users**. Developers can [add themselves as a Test User](/docs/developer-program/roku-pay/quickstart/test-users.md) to the app being tested in order to execute ChannelStore purchases without being billed for the transactions.

## Verifying no entitlement without a Roku Pay subscription

To verify that a customer cannot be entitled to content without a subscription purchased through Roku Pay, follow these steps:

1. Launch app and select content behind paywall.


2. Send the [**getAllPurchases** command](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases). Verify that it does not return any active subscription products.


3. Call the **[roRegistrySection.read()](/docs/references/brightscript/interfaces/ifregistrysection.md#readkey-as-string-as-string)** function on the device registry section for the app. Verify that it does not return an access token from device registry.


4. Send the [**getChannelCred** command](/docs/references/scenegraph/control-nodes/channelstore.md#getchannelcred). Verify that it does not return an access token from Roku cloud.

## Verifying Roku Pay purchase workflow

To verify that a customer can purchase a subscription product and upgrade/downgrade their plan through Roku Pay, follow these steps:

1. Send the [**getCatalog** command](/docs/references/scenegraph/control-nodes/channelstore.md#getcatalog). Verify that the SceneGraph components used to display in-app products are populated with product metadata.


2. Select a subscription product. Verify that the [**getUserData** command](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) is sent and the request for information (RFI) screen is displayed.


3. Press **Continue** on the RFI screen. Verify that the [order is created](/docs/references/scenegraph/control-nodes/channelstore.md#creating-an-order) and the [**doOrder** command](/docs/references/scenegraph/control-nodes/channelstore.md#doorder) is executed.


4. Verify that the order confirmation screen displays any free trial offers or discounts included with the subscription product.


5. Confirm the order of the subscription product. Verify that the `orderStatus` field confirms that the order was successfully completed.


6. Verify that an access token is generated in the publisher's backend system and passed into:

   a. The [**storeChannelCredData** command](/docs/references/scenegraph/control-nodes/channelstore.md#storechannelcreddata) to store the access token in the Roku cloud.

   b. The **[roRegistrySection.write()](/docs/references/brightscript/interfaces/ifregistrysection.md#writekey-as-string-value-as-string-as-boolean)** function to store the access token in the device registry.

7. If your app includes a [product group](/docs/developer-program/roku-pay/quickstart/monetization-in-developer-dashboard.md#product-groups), select another in-app product that is in the same product group as the previously ordered one. Verify that the "You're already subscribed" dialog is displayed.


8. Call the [**validate-transaction** API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction) with purchase ID included in the `orderStatus` field. Verify that the `isEntitled` flag is set to "true".


9. If your app includes multiple subscription plans, upgrade or downgrade the subscription plan, and then do the following:

   a. Verify that the `order.action` field is set to the correct string.

   b. Call the `validate-transaction` API with purchase ID included in the `orderStatus` field. Confirm the following:

      - The `purchase_type` is set to `UPGRADE` or `DOWNGRADE`.

      - The `cancelled_transaction_ids` field is set to the transaction ID of the original subscription purchase.

      - The `purchase_status` field is set to `active`.


10. Close the app.

## Verifying Roku Pay entitlement workflow

To verify that a customer is entitled to content after purchasing a subscription through Roku Pay, follow these steps:

1. Re-launch app.


2. Send the [**getAllPurchases** command](/docs/references/scenegraph/control-nodes/channelstore.md#getpurchases). Verify that it returns the purchased subscription product. 


3. Call the [**validate-transaction** API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction) with purchase ID included in the `purchases` field. Verify that the `isEntitled` flag is set to "true".


4. Call the **[roRegistrySection.read()](/docs/references/brightscript/interfaces/ifregistrysection.md#readkey-as-string-as-string)** function on the device registry section for the app. Verify that it returns an access token from the device registry.


5. Send the [**getChannelCred** command](/docs/references/scenegraph/control-nodes/channelstore.md#getchannelcred). Verify that it returns an access token from Roku cloud.


6. To test that customers are not entitled to subscription products after a free trial ends, do the following:

   a. Order a subscription product that has a 1-day free trial.

   b. After the trial expires the next day, cancel the subscription.

   c. Complete steps 1-3. Verify that the `isEntitled` flag is set to "false".