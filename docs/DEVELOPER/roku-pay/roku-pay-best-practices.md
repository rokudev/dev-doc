---
title: Roku Pay best practices
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
## Do

Review the following checklist to make sure your app is adhering to best practices for implementing Roku Pay. Following these tips will help optimize your user acquisition funnel, provide better feedback to customers, prevent customers from being billed twice for the same product, and improve the precision of entitlements.

### In-app products

<table>
  <thead>
    <tr>
      <th>Tip</th>
      <th>Explanation</th>
      <th>Documentation</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Use the <strong>getUserRegionData</strong> command to implement country-specific or multicountry products</td>
      <td>You may want certain products to only be available in specific countries. In the app, you can call the [<strong>getUserRegionData</strong>](doc:channelstore#getuserregiondata) command to determine the country associated with the user's Roku account. You can then implement business logic to filter the results of the ChannelStore [<strong>getCatalog</strong> command](doc:channelstore#getcatalog) to only display products that should be available for that country. <br /><br />If you want to offer a specific in-app product in multiple countries, create in-app products for each country and filter out the product by the country in the app using the [<strong>ifDeviceInfo.GetCountryCode()</strong>](doc:ifdeviceinfo#getcountrycode-as-string) method. In this scenario, you must handle currency conversion.</td>
      <td>[ChannelStore](doc:channelstore#getuserregionaldata)</td>
    </tr>

    <tr>
      <td>Add free trials and discount offers to subscription products instead of creating separate products</td>
      <td>The [In-App Products page](doc:product-catalog) in the Developer Dashboard enables publishers to offer free trials and discount offers on in-app subscription products for a specific number of days or months.<br /><br />Roku Pay then automatically renews the subscription at the regular base price once the free trial or discount period ends. This makes it easy to provide customers with introductory pricing incentives. <br /><br />Separate products do not need to be created for free-trial or discounted subscription products.</td>
      <td>[Adding in-app products](doc:product-catalog#creating-purchase-options)</td>
    </tr>
  </tbody>
</table>

### Sign-in and sign-ups

<table>
  <thead>
    <tr>
      <th>Tip</th>
      <th>Explanation</th>
      <th>Documentation</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Only use a single ChannelStore node in the app</td>
      <td>Only one ChannelStore node should ever be used in the purchase workflow. <br /><br />In the app, create a ChannelStore node, and then use its [<strong>getCatalog</strong> command](doc:channelstore#getcatalog) to retrieve the subscription and one-time purchase products offered by the app.<br /><br />You can then create orders using the products returned by the <code>getCatalog</code> command.</td>
      <td>[ChannelStore](doc:channelstore#getcatalog)</td>
    </tr>
  </tbody>
</table>

### On-device upgrades/downgrades

<table>
  <thead>
    <tr>
      <th>Tip</th>
      <th>Explanation</th>
      <th>Documentation</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Block upgrade/downgrade flow if the subscription was created through the publisher's system and the customer's sign-in does not match the Roku account linked to their device</td>
      <td>On-device upgrades/downgrades are automatically billed to the Roku account linked to the device, regardless of the authentication mechanism.<br /><br />Therefore, if the customer signs in to a subscription service using an account created through the publisher's services (and not through Roku Pay) and the email address they enter differs from the one used for the Roku account currently linked to their Roku device, the app should implement business logic to prevent the users from upgrading or downgrading their plan.<br /><br />This prevents the Roku Pay and the publisher services from becoming out of sync on the customer's current subscription plan.</td>
      <td>[On-device upgrade and downgrade](doc:on-device-upgrade-downgrade)</td>
    </tr>

    <tr>
      <td>Provide simple base package options</td>
      <td>Apps that offer multiple base packages with varying content need to make it easy for customers to select the best one for them.<br /><br /> To do this, adhere to the following best practices: <ul><li>Minimize the number of choices to reduce friction.</li><li>Offer monthly and annual plans.</li><li>Organize packages so customers can easily compare and contrast them. For example:</li><li>Highlight the “Best Deal” or “Most Popular”</li><li>Highlight the "Best for Cord Cutters", "Best for Sports", "Best for Entertainment", and so on</li></ul></td>
      <td>[On-device upgrade and downgrade](doc:on-device-upgrade-downgrade)</td>
    </tr>

    <tr>
      <td>Make package add-ons easy to upgrade/downgrade without friction</td>
      <td>Apps that offer add-on packages such as premium movie apps, sports passes, and so on need to make it easy for customers to purchase them on-device—without generating friction in the initial signup flow. <br /><br />To do this, adhere to the following best practices: <ul><li>Limit add-on selections in the initial signup flow to the most popular packages. The initial signup flow should enable customers to select just the base package and the top add-ons. Once the customer has purchased their subscription, you can funnel them into a complete add-on selection flow.</li><li>Place complete add-on selection flow in a separate section within the on-device account management page (add-ons can still be promoted from any place in the app).</li><li>Group add-ons into categories (for example, sports, movies, family, and so on).</li><li>Minimize the number of choices to maximize purchases (too many options may cause overload customers and cause funnel friction).</li><li>Provide links to the on-device account management page to ensure customers know they can upgrade/downgrade base packages and add-ons anytime.</li></ul></td>
      <td>[On-device upgrade and downgrade](doc:on-device-upgrade-downgrade)</td>
    </tr>

    <tr>
      <td>Bill upgrades/downgrades correctly</td>
      <td>When upgrading/downgrading subscriptions, apps must bill customer using the correct timing: <ul><li><strong>Upgrades</strong>. Bill customers immediately for the upgraded subscription. Correspondingly, make new apps available immediately.</li><li><strong>Downgrades</strong>. Bill customers after the current period ends for the downgraded subscription.</li></ul></td>
      <td>[On-device upgrade and downgrade](doc:on-device-upgrade-downgrade)</td>
    </tr>

    <tr>
      <td>Use the <strong>rokuCustomerId</strong> as the primary key for tracking upgrades/downgrades in backend</td>
      <td>The <strong>rokuCustomerId</strong> is a persistent identifier that can be used to track a customer's transactions, including their original subscription purchase and any upgrades/downgrades, in the publisher's backend system. <br /><br />After the initial subscription purchase, get the <strong>purchaseId</strong> from the ChannelStore node's <strong>[doOrder](doc:channelstore#doorder)</strong> command and pass it into a call to the <strong>validate-transaction</strong> API.<br /><br />Record the <strong>rokuCustomerId</strong> included in the response in the backend. Use the <strong>rokuCustomerId</strong> to identify the customer associated with any subsequent upgrades/downgrades.</td>
      <td>[On-device upgrade and downgrade](doc:on-device-upgrade-downgrade)</td>
    </tr>
  </tbody>
</table>

### Payment retry checks

<table>
  <thead>
    <tr>
      <th>Tip</th>
      <th>Explanation</th>
      <th>Documentation</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Implement nightly payment retry checks</td>
      <td>When Roku Pay cannot renew a subscription because the customer's method of payment on file cannot be charged, the subscription is placed in recovery.<br /><br />When this occurs, Roku Pay notifies the customer once a day for multiple consecutive days (typically three) to update their method of payment in order to renew the subscription, and it attempts to charge the customer's method of payment to ensure collection of payment and continuation of service.<br /><br />While Roku Pay attempts to collect payment, the publisher's entitlement service should sync with Roku Pay's [<strong>validate-transaction</strong> API ](doc:roku-web-service#validate-transaction)nightly to manage subscriptions in the dunning state. <br /><br />This ensures that subscriptions without entitlements are canceled promptly, but subscriptions that are successfully renewed or are currently in the dunning state are still accessible on the app and across all platforms.</td>
      <td>[Roku Pay web services reference](doc:roku-web-service#managing-subscription-recovery)</td>
    </tr>
  </tbody>
</table>

## Don't

The following list provides examples of common mistakes publisher should avoid when implementing Roku Pay. This list is continuously updated as Roku identifies additional errors to be avoided:
