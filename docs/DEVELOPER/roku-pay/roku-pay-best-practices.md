---
title: "Roku Pay best practices"
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

# Roku Pay best practices

## Do

Review the following checklist to make sure your app is adhering to best practices for implementing Roku Pay. Following these tips will help optimize your user acquisition funnel, provide better feedback to customers, prevent customers from being billed twice for the same product, and improve the precision of entitlements.

### In-app products

| Tip                                                          | Explanation                                                  | Documentation                                                |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Use the **getUserRegionData** command to implement country-specific or multicountry products | You may want certain products to only be available in specific countries. In the app, you can call the [**getUserRegionData**](/docs/references/scenegraph/control-nodes/channelstore.md#getuserregiondata) command to determine the country associated with the user's Roku account. You can then implement business logic to filter the results of the ChannelStore [**getCatalog** command](/docs/references/scenegraph/control-nodes/channelstore.md#getcatalog) to only display products that should be available for that country. <br /><br />If you want to offer a specific in-app product in multiple countries, currency conversion can be handled by Roku or the publisher: ${multicountry-product-list} | [ChannelStore](/docs/references/scenegraph/control-nodes/channelstore.md#getuserregionaldata) |
| Add free trials and discount offers to subscription products instead of creating separate products | The [In-App Products page](/docs/developer-program/roku-pay/quickstart/in-channel-products.md) in the Developer Dashboard enables publishers to offer free trials and discount offers on in-app subscription products for a specific number of days or months.<br /><br />Roku Pay then automatically renews the subscription at the regular base price once the free trial or discount period ends. This makes it easy to provide customers with introductory pricing incentives. <br /><br />Separate products do not need to be created for free-trial or discounted subscription products. | [Adding in-app products](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#trials-and-offers) |

{#multicountry-product-list}

- **Roku handles currency conversion**: Create a single in-app product.
- **Publisher handles currency conversion**: Create in-app products for each country and filter out the product by the country in the app using the [**ifDeviceInfo.GetCountryCode()**](/docs/references/brightscript/interfaces/ifdeviceinfo.md#getcountrycode-as-string) method.

### Sign-in and sign-ups

| Tip                                                          | Explanation                                                  | Documentation                                                |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Only use a single ChannelStore node in the app | Only one ChannelStore node should ever be used in the purchase workflow. <br /><br />In the app, create a ChannelStore node, and then use its [**getCatalog** command](/docs/references/scenegraph/control-nodes/channelstore.md#getcatalog) to retrieve the subscription and one-time purchase products offered by the app.<br /><br />You can then create orders using the products returned by the `getCatalog` command. | [ChannelStore](/docs/references/scenegraph/control-nodes/channelstore.md#getcatalog) |

### On-device upgrades/downgrades

| Tip                                                          | Explanation                                                  | Documentation                                                |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Block upgrade/downgrade flow if the subscription was created through the publisher's system and the customer's sign-in does not match the Roku account linked to their device | On-device upgrades/downgrades are automatically billed to the Roku account linked to the device, regardless of the authentication mechanism.<br /><br />Therefore, if the customer signs in to a subscription service using an account created through the publisher's services (and not through Roku Pay) and the email address they enter differs from the one used for the Roku account currently linked to their Roku device, the app should implement business logic to prevent the users from upgrading or downgrading their plan.<br /><br />This prevents the Roku Pay and the publisher services from becoming out of sync on the customer's current subscription plan. | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
| Provide simple base package options                          | Apps that offer multiple base packages with varying content need to make it easy for customers to select the best one for them.<br /><br /> To do this, adhere to the following best practices: ${simple-base-packages-list} | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
| Make package add-ons easy to upgrade/downgrade without friction | Apps that offer add-on packages such as premium movie apps, sports passes, and so on need to make it easy for customers to purchase them on-device—without generating friction in the initial signup flow. <br /><br />To do this, adhere to the following best practices: ${package-add-on-list} | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
| Bill upgrades/downgrades correctly                           | When upgrading/downgrading subscriptions, apps must bill customer using the correct timing: ${bill-correctly-list} | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
| Use the **rokuCustomerId** as the primary key for tracking upgrades/downgrades in backend | The **rokuCustomerId** is a persistent identifier that can be used to track a customer's transactions, including their original subscription purchase and any upgrades/downgrades, in the publisher's backend system. <br /><br />After the initial subscription purchase, get the **purchaseId** from the ChannelStore node's **[doOrder](/docs/references/scenegraph/control-nodes/channelstore.md#doorder)** command and pass it into a call to the **validate-transaction** API.<br /><br />Record the **rokuCustomerId** included in the response in the backend. Use the **rokuCustomerId** to identify the customer associated with any subsequent upgrades/downgrades. | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |

{#simple-base-packages-list}

- Minimize the number of choices to reduce friction.
- Offer monthly and annual plans.
- Organize packages so customers can easily compare and contrast them. For example:
  - Highlight the “Best Deal” or “Most Popular”
  - Highlight the "Best for Cord Cutters", "Best for Sports", "Best for Entertainment", and so on

{#package-add-on-list}

- Limit add-on selections in the initial signup flow to the most popular packages. The initial signup flow should enable customers to select just the base package and the top add-ons. Once the customer has purchased their subscription, you can funnel them into a complete add-on selection flow.
- Place complete add-on selection flow in a separate section within the on-device account management page (add-ons can still be promoted from any place in the app).
- Group add-ons into categories (for example, sports, movies, family, and so on).
- Minimize the number of choices to maximize purchases (too many options may cause overload customers and cause funnel friction).
- Provide links to the on-device account management page to ensure customers know they can upgrade/downgrade base packages and add-ons anytime.

{#bill-correctly-list}

- **Upgrades**. Bill customers immediately for the upgraded subscription. Correspondingly, make new apps available immediately.
- **Downgrades**. Bill customers after the current period ends for the downgraded subscription.

### Payment retry checks

| Tip                             | Explanation                                                  | Documentation                                                |
| :------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Implement nightly payment retry checks | When Roku Pay cannot renew a subscription because the customer's method of payment on file cannot be charged, the subscription is placed in recovery.<br /><br />When this occurs, Roku Pay notifies the customer once a day for multiple consecutive days (typically three) to update their method of payment in order to renew the subscription, and it attempts to charge the customer's method of payment to ensure collection of payment and continuation of service.<br /><br />While Roku Pay attempts to collect payment, the publisher's entitlement service should sync with Roku Pay's [**validate-transaction** API ](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction)nightly to manage subscriptions in the dunning state. <br /><br />This ensures that subscriptions without entitlements are canceled promptly, but subscriptions that are successfully renewed or are currently in the dunning state are still accessible on the app and across all platforms. | [Roku Pay web services reference](/docs/developer-program/roku-pay/implementation/roku-web-service.md#managing-subscription-recovery) |

## Don't

The following list provides examples of common mistakes publisher should avoid when implementing Roku Pay. This list is continuously updated as Roku identifies additional errors to be avoided:

| Tip                                  | Explanation                                                  | Documentation                                                |
| :----------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Do not offer on-device cancellations | Apps can offer a downgrade on-device, or customers can cancel Roku Pay subscriptions online from their [Roku account](https://my.roku.com/account/subscriptions). | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
