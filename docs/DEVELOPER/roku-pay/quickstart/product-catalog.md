---
title: Creating the product catalog
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
> This document covers the new version of the in-app products UI, which is referred to as Catalog 2.0.
>
> * If your developer account was created before April 30, 2025, Roku may upgrade your account to Catalog 2.0 to take advantage of the new complex products and improved workflow. If you are selected, you will receive a notification from Roku. If you have not been selected to upgrade to Catalog 2.0, continue to use the [legacy in-product catalog UI](doc:in-channel-products).
>
> * If your developer account was created after April 30, 2025, it uses Catalog 2.0. Continue reading this document for how to use Catalog 2.0.

## What's new in Catalog 2.0

###### New features

Roku has updated the product catalog feature with an improved, flexible structure that includes several key new features and supports more complex products:

* [**Cancellation offers:**](#creating-cancellation-offers) Create discount offers to retain customers when they try to cancel their subscription to your app.

* [**Price change scheduling**](#scheduling-a-price-change-for-a-purchase-option). Schedule price increases/decreases and apply them to new subscribers only or both new and existing subscribers.

* [**Purchase options**](#creating-purchase-options): Add a single product and then create multiple purchase options for it (a purchase option includes the pricing, billing, and offers for a product). This means that, for example, you can create a subscription product for the content you offer, and then add monthly and annual purchase options for it. This structure simplifies and streamlines the catalog workflow.

* [**Quarterly billing:**](#creating-purchase-options) Reduce churn by creating a purchase option that uses quarterly billing (requires [additional API work](doc:add-ons-integration)).

* [**Add-ons**](doc:add-ons-integration). Offer premium content, additional apps, and other upgrades and features on top of an existing base subscription products (requires [additional API work](doc:add-ons-integration)).

* [**Bundles**](#creating-purchase-options). Combine a base product with either another base product or one or more add-ons (requires [additional API work](doc:add-ons-integration)).

###### UI enhancements

The Product Catalog UI has been enhanced with a number of features that help developers manage the catalog:

* **Streamlined workflow:** The product catalog UI now features separate tabs for products, purchase options, and product groups that make it easy to build and manage the product catalog. Each tab includes sorting/filtering, search, and pagination, which makes it easy to find and organize items.

* **Rapid purchase option creation**. Quickly create new purchase options by copying an existing one. For example, you can copy a monthly purchase option for a subscription product to make an annual purchase option.

* **Draft purchase options**. Developers can configure a purchase option and then save it for publishing at a later time.

* **Enhanced localization support**. Developers can provide localized product names and localized purchase option names and descriptions. These localized names appear on-screen and in email notifications, making it easier for customers worldwide to purchase and manage subscriptions.

## Upgrading to Catalog 2.0

Once the Catalog 2.0 feature is enabled for your developer account, you can select the **Product Catalog** option from the Developer Dashboard. A dialog summarizes and illustrates the new features of Catalog 2.0. You can review the new features by tabbing through the dialog.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-overview-tutorial-ui.png)

Once you are ready to upgrade to Catalog 2.0, select the checkbox to acknowledge that you understand that the UI cannot be reverted to the previous version, and then click **Upgrade Now**. To continue using the older version, click **Later**.

> The migaton process may take a few minutes; **do not refresh your web browser duing the migration**. This may cause the migration to fail.

###### Upgrade results

Once you upgrade, each of your existing products will automatically use the new product/purchase options data structure. This means that each product will have a single purchase option. For example, if you have existing monthly and annual subscription products, upgrading will result in two products: one will have a monthly subscription purchase option; the other will have an annual purchase option. No action is needed for these migrated products; your in-app purchasing flow will continue using them without any interruption. For any new products you want to use in your app, you can create new products and purchase options for them.

###### Upgrade notes

**In Catalog 2.0, you cannot modify base offers** (unlike the legacy in-app products in Catalog 1.0). If you migrate an existing product that has a base offer (free trial or discount), the base offer is migrated to Catalog 2.0 as-is and cannot be edited.

If you do not want to migrate a product's base offer to Catalog 2.0, delete the base offer in Catalog 1.0 and replace it with a scheduled limited-time offer with a short duration that expires after the migration. After the migration, you can schedule a new limited-time offer in Catalog 2.0 without having to modify the base offer.

Scheduling limited-time offers instead of editing base offers is a more robust method for managing offers, enabling you to track the offer history for a purchase option.

**Limited-time offers originally created in Catalog 1.0 cannot be modified in Catalog 2.0**

Limited-time offers (active or scheduled) created in Catalog 1.0 cannot be updated in Catalog 2.0. The limited-time offers continue to work as expected in Catalog 2.0; however, they are not editable and must run for their full duration before you can set up another offer for the same purchase option SKU. Limited-time offers created and scheduled in Catalog 2.0 are editable.

**Price changes to existing customers in Catalog 1.0 are applied to both new and existing customers in Catalog 2.0**

In Catalog 2.0, when you schedule a price change for a purchase option, it is always applied to new subscribers (you can apply price changes to new subscribers only or both new and existing subscribers). As a result, price changes applied to only existing customers in Catalog 1.0 are applied to both existing and new customers after you upgrade to Catalog 2.0.

To maintain separate pricing for new and existing customers, schedule a price change for new customers at the new price (the earliest price changes can go into effect is the next calendar day after you upgrade to Catalog 2.0).

**30-day notice required for price increases to existing subscribers**

If you increase the price of a purchase option for existing subscribers, you must give them a 15-day notice.

**Purchase options for deleted products are in the Purchases>Ended tab**

The purchase options for products that were deleted before the migration are listed in the **Purchase Options>Ended** tab. Existing subscriptions associated with this purchase options will continue to renew. if you no longer want any subscribers to access the product via the given purchase option, you need to [archive the purchase option](https://roku.atlassian.net/wiki/spaces/DR/pages/148500544/Creating+the+product+catalog#Creatingtheproductcatalog-archive).

**SKUs for archived purchase options cannot be reused**

In Catalog 2.0, the sku for purchase options cannot be re-used after the purchase option is archived. Unlike Catalog 1.0, you cannot delete a product and re-use the sku.

## Adding products to the catalog

Creating the product catalog entails the following steps:

1. [Creating a new product](#creating-products). A product represents a package of content.

2. [Creating purchase options for the new product](#creating-purchase-options). A purchase option represents the pricing and billing terms of the product.

3. [Creating product groups for each set of mutually exclusive subscription products](#creating-product-exclusivity-groups). A product group prevents customers from being double-billed for the same content (for example, ad-supported and ad-free products for an app should be in the same product group).

> This document is intended for SVOD apps, which may offer subscriptions and one-time purchases (for example, movie rentals/purchases, sporting events, pay-per-views). If you are managing the catalog for a TVOD-exclusive app (an app offering only transactional content), see [Creating TVOD apps](doc:tvod-channel). TVOD-exclusive apps need to create a single in-app product for each different price point in the app; therefore, the workflow differs from what is specified herein.
>
> Only an administrator (root account or user with the administrator role) or a user with the **Monetization** role and **Products** permission can access the Product Catalog UI and create and manage products.

### Creating products

A product represents a set of video, audio, or other content offered by your app. If your app offers the same set of content to all customers, you may only need to create a single product. However, if your app offers different sets of content (for example, different packages in a vMVPD app), you may need to create multiple products for it.

To create a new product, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), select **Product Catalog** under **Monetization**. You can also select **Manage Product Catalog** from the drop-down list on the left side of the pages within the Developer Dashboard. The **Product Catalog** page opens.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-products-ui.png?version=1\&modificationDate=1733957755248\&cacheVersion=1\&api=v2\&width=600\&height=360)

2. Click **Add product**. The **Add Product** page opens.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-add-products-v2.png?)

3. Enter the following information for the product:

<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Product name</td>
      <td>Select a locale and then enter a unique product name. This name is used in Roku Pay reports, and it is displayed to customers only for product bundles. The list of available locales is based on the languages selected in the <a href="https://roku-ent.readme.io/dev/docs/channel-publishing-guide#channel-properties">Channel Properties window</a>. <br /><br />To provide additional localized product names, click <strong>Add product name in another language</strong>, select a locale, and then enter the localized product name. You can provide one product name per locale.</td>
    </tr>

    <tr>
      <td>Product Id</td>
      <td>The internal code for your product.</td>
    </tr>

    <tr>
      <td>Category</td>
      <td>Select one of the following categories:<br /><br /><ul><li>Video content</li><li>Audio content</li><li>Game token</li></ul></td>
    </tr>

    <tr>
      <td>Internet required</td>
      <td>Select 'Yes' for video and audio apps.</td>
    </tr>

    <tr>
      <td>It is add-on</td>
      <td>If the product is an add-on (a service purchased on top of a base subscription product), enable this setting, and then select the prerequisite base products. Add-ons are only accessible in the customer flow if the required base products have already been purchased or are being purchased at the same time as the add-on.<br /><br />Offering add-ons in your app requires additional API integration work. See [Integrating add-ons](doc:add-ons-integration) for more information on how to do this.</td>
    </tr>

    <tr>
      <td>Product exclusivity group</td>
      <td>Product groups are required for each set of mutually exclusive subscription products offered by your app. This enables customers to upgrade or downgrade their subscription products on-device, and avoid being double billed for access to the same content or service. If customers cannot purchase this product while being entitled to another product, enable this.</td>
    </tr>
  </tbody>
</table>

4. Click **Save product** to save the product without creating a purchase option (you can create purchase options for the product later), or click **Save and create purchase option** to create one or more purchase options for the product immediately after saving the product.

### Creating purchase options

Once you have created a product, you create one or more purchase options for a single product or a bundle of products. A purchase option specifies the product type (monthly, quarterly, or annual subscription, one-time purchase, or bundle), price, and any free trial or introductory price offers.

To create a purchase option for a product, follow these steps:

1. From the **Product catalog** page, click the **Purchase options** tab and then click **Create purchase option**.

2. Select the type of purchase option to be created, and then click Continue:

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-create-purchase-option.png?version=1\&modificationDate=1713426326000\&cacheVersion=1\&api=v2\&width=600\&height=394)

   * **Subscription**. A monthly, quarterly, or annual subscription for a single product.

   * **One-Time Purchase:** A movie rental/purchase, sporting event, pay-per-view, or other product that may only be purchased a single time from an SVOD app. The publisher controls entitlements (number of viewings and permitted viewing time) for one-time purchase products in their backend system.

   * **One-Time Purchase, Consumable - Quantity:** A set of identical items (such as game points, number of viewings permitted ). Enter the size of the packet in the **Quantity** field in the **Product and billing plan** settings. If you are creating a [TVOD-exclusive app](#tvod-app-catalog), select this option and select **1** for quantity. This is because you create a single generic in-app product per product type for a TVOD app (rather than a product per content item as in a SVOD app), and this setting allows that generic in-app product to be purchased multiple times. For example, if you plan on offering movie rentals, you only need to create a single one-time purchase consumable video product. See [Creating TVOD apps](#tvod-app-catalog) for more information.

   * **Subscription** **bundle**: A monthly, quarterly, or annual subscription that combines two base products or a single base product and one or more add-ons. See the [Catalog 2.0 API integration guide](doc:add-ons-integration) for more information.

3. Configure the following **Purchase option** detail settings:

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-purchase-option-details-v2.png?)

<table>
  <thead>
    <tr>
      <th>Purchase detail setting</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Channel</td>
      <td>Select one or more apps where this product will be available for sale. All the apps that belong to the logged-in administrator (root account) are listed.</td>
    </tr>

    <tr>
      <td>Product</td>
      <td>Select the product for which you are creating a purchase option. If you are creating a subscription bundle, select two or more products to be included in the bundle (the products may be two base products, or a base product and one or more add-ons). You may only select products that are not in the same product group. Click <strong>Add another product to bundle</strong> to include additional products in the bundle. Add-on products can only be bundled with prerequisite products.</td>
    </tr>

    <tr>
      <td>Display name</td>
      <td>A 50-character maximum name of the purchase option. This name will be displayed to customers in the app's on-device purchasing workflow and in subscription emails sent by Roku. The name can include letters, numbers, spaces, and punctuation marks (UTF-8 characters are not supported for product names in English).<br /><br />The display name should include the name of the app, and it should make it easy for customers to identify the product (for example, "Roku Developers - Ad-Free"). Do not include any billing information in the name (for example, billing frequency, price, or trial/discount); the Roku platform UI will automatically display this information to customers. You can include billing information in the <strong>SKU</strong> setting in order to identify different purchase options uniquely.<blockquote>Certification requirement: The purchase option display name must clearly identify the service being offered by the app. You must have full legal rights or consent for the purchase option name and the rights to all trademarks and copyright expressions associated with the names. The purchase option name may not include the name "Roku", text related to a trial or discount offer, or any profane, derogatory, or misleading language.</blockquote><br />Optionally, you can provide a localized product name. To do this, click <strong>Add display name in another language</strong>, select a language from the list (French, Spanish, or German), and then enter the localized product name. The localized product name can be a maximum of 50 characters and may include UTF-8 characters. Repeat this step to provide another localized product name; you can provide one per language.</td>
    </tr>

    <tr>
      <td>SKU</td>
      <td>The publisher-specific SKU (or other unique identifier) for the product. This code is used in the Roku Pay APIs and reporting. It cannot be changed after the purchase option is published. The SKU must be unique within the developer account. The SKU may include the product and billing information (for example, "roku-developers-ad-free-monthly").</td>
    </tr>
  </tbody>
</table>

4. Configure the following **Billing plan** settings:

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-purchase-option-billing-v2.png?version=1\&modificationDate=1713497567000\&cacheVersion=1\&api=v2\&width=600\&height=598)

<table>
  <thead>
    <tr>
      <th>Billing plan setting</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Billing frequency</td>
      <td>Select the billing period to be used for the subscription product: <strong>monthly</strong>, <strong>quarterly</strong>, or <strong>annual</strong>. Using quartely billing requires [additional API work](doc:add-ons-integration#appendix-a-add-on-api-reference).</td>
    </tr>

    <tr>
      <td>Regular price</td>
      <td>Select one of the predefined price tiers for the product. Tiers are used to enforce 99-cent or 49-cent pricing (in USD) on app products: <ul>
      <li>One to three-digit tier numbers are used for 99-cent pricing. Subtract 1 cent from a tier to get the corresponding price. For example, Tier 1 is 99 cents, Tier 2 is $1.99, Tier 10 is $9.99, Tier 100 is $99.99 and so on. The highest tier is 400 ($399.99).</li>
      <li>Four-digit tier numbers are used for 49-cent pricing. Append 49 cents to the last digit or last two digits in the tier to get the corresponding price. For example, Tier 1000 is 49 cents, Tier 1001 is $1.49, Tier 1010 is $10.49, Tier 1020 is $20.49, and so on. The highest tier is 1030 ($30.49).</li>
      </ul> See the [Price tier reference guide](doc:price-tiers) for the complete list of price tiers for each Roku Streaming Store.<br /><br />A chart displays the price, in the appropriate local currency, for each Roku Streaming Store where the product will be available:<ul>
      <li>The Currency code is the three-letter ISO-4217 code of the currency in which the customer will be billed.</li>
      <li>The Purchase price reflects the amount to be paid by the customer. The purchase price for EU Streaming Store countries includes VAT. Proceeds are based on pre-tax (net) prices.</li>
      <li>The Net price field displays the pre-tax price. The Proceeds field displays the amount that you receive from Roku for the sale of the product. Based on exchange rate fluctuations, the proceeds in one Channel Store may not equal the amount to be received in another.</li>
      </ul>If you are creating a <a href="https://roku-ent.readme.io/dev/docs/tvod-channel">TVOD-exclusive app</a>, select any price tier. The price passed in the <a href="https://roku-ent.readme.io/dev/docs/channelstore">ChannelStore APIs</a> overrides the price corresponding to the selected price tier. </td>
    </tr>

    <tr>
      <td>Base offer</td>
      <td>Create free trial and introductory price offers for base subscription and add-on products. Roku Pay automatically handles the auto-renewals of the trial or discounted offers to paid full-price subscriptions. Separate products do not need to be created for free trial or introductory price offers. A single product may include both a base offer (the standard base price) and a trial/discount offer. Select one of the following base offers:<ul>
      <li>None (default). The purchase option does not include an offer.</li>
      <li>Free trial. Include a free trial period with the purchase option. In the Trial length box, enter the number of days or months in the trial offer and then select the unit of time (Days or Months).</li>
      <li>Introductory price. Include a discount with the purchase option. In the Introductory period box, enter the number of days, months, or years the introductory price is valid, and then select the pricing tier corresponding to the discounted price to be offered from the Price list. Discounts cannot be specified using percentages or absolute currency units (for example, USD). Discounts may only be specified using the appropriate price tier. For example, the absolute discount from tier 9 to tier 6 is $3.00 ($8.99-5.99); the percentage discount is 33.4% ($(1-(5.99/8.99))x100).</li>
      </ul><br />$</td>
    </tr>
  </tbody>
</table>

5. Click **Save as Draft** to save the purchase option without publishing it. Click **Publish** to activate the purchase option on your app.

6. If you selected **Publish** in step 6, review the **Purchase details** and **Billing plan** settings, and then click **Confirm** to make the purchase option available to customers on your app.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-purchase-option-summary.png?version=3\&modificationDate=1721077270895\&cacheVersion=1\&api=v2\&width=600\&height=524)

### Creating product exclusivity groups

Each set of _mutually exclusive_ subscription products must be added to a product exclusivity group (mutually exclusive means subscription products that customers cannot be subscribed to simultaneously). This enables customers to upgrade or downgrade those subscription products on-device, and avoid being double-billed for access to the same content or service.

* **Upgrade/downgrade**. If an app offers monthly and annual subscriptions, a product group that includes both plans must be created. Similarly, if an app offers ad-supported and ad-free plans, or HD and 4K plans, those sets of products must be added to a product group. For more on how product groups are used to enable customers to easily switch between different service tiers, see the [On-device upgrade and downgrade](doc:on-device-upgrade-downgrade) implementation guide.

* **Double billing**. If an app has two in-app products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions.

From the customer's perspective, if they try to purchase a subscription product when they already have one in the same product group, Roky Pay displays a "You're already subscribed to this channel" dialog.

![roku815px - already-subscribed](https://image.roku.com/ZHZscHItMTc2/already-subscribed.jpg)

> **Certification requirement**: Subscription services must create product groups for all sets of subscription products that customers cannot be subscribed to simultaneously in order to pass [certification](doc:roku-pay-requirements#rp-3-payment-requirements).

To create a product exclusivity group, follow these steps:

1. From the **Product catalog** page, click the **Product exclusivity groups** tab, and then click **Create group**.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-groups.png?version=1\&modificationDate=1733959034858\&cacheVersion=1\&api=v2\&width=600\&height=360)

2. In the **New Group** page, click the **Add to group** icon (+) for each mutually exclusive product listed in the **All products** pane on the left to be included in the group. The product is added to the **Products in group** pane on the right. To remove a product from a group, select its check box under **Remove from group** on the left-hand side of the page and then click the remove from group icon (-).

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-product-group.png?version=1\&modificationDate=1713502955000\&cacheVersion=1\&api=v2\&width=600\&height=351)

3. In the **Product** **Group Name** box, enter a descriptive name for the group that makes it easy to identify. For example, if you are creating a product group containing ad-supported and ad-free plans, it could be named "\<product name> - Ad options group".

4. Click **Save**.

## Managing products

You can use the **Product catalog** index page to manage the individual products, purchase options, and product groups in your catalog. The **Product list** tab lists the name, ID, category, add-on flag, product group (if any), and the number of active purchase options (if any) for each product in the catalog.

You can filter the products by entering a product name in the search box. By default, the products are listed by name in alphabetical order, and you can sort the products by clicking the headers. You can click on an active purchase option link to view and edit it.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-sort-filter.png?version=1\&modificationDate=1721069876617\&cacheVersion=1\&api=v2\&width=600\&height=306)

### Editing products

You can edit a product listed in the **Product catalog** tab by clicking anywhere in its row. In the **Product** details page, you can add a localized product name, update the groups the product is in, and managed the required products if the product is an add-on.

### Deleting products

You can delete a product listed in the **Product catalog** tab provided that all of its purchase options have been archived, and the product is not in a product group. If a product has one or more active/scheduled purchase options, you must delete the purchase options first.

To delete a product, click the garbage can icon on the right side of the product row, and then click **Delete** in the confirmation dialog. The deleted product is permanently removed from all linked apps.

## Managing purchase options

You can use the **Purchase options** tab to manage the purchase options (active, drafted, ended, and archived) associated with the products in your catalog. The tab lists the name, associated products and apps, SKU number, type, regular price, and offers for each purchase option.

* **Sorting and filtering:** You can filter the purchase options by entering a name in the search box. By default, the purchase options are listed by name in alphabetical order, and you can sort the purchase options by clicking the headers.

* **Editing**: You can click on the products, regular price, and offers links to view and/or edit them.

* **Viewing details and performing actions**: You can click anywhere in a row to view the details of a purchase option. For active and drafted purchase options, you can use the details page to update the settings, add a limited-time offer, and schedule a price change. You can also accomplish these tasks by clicking on the action button on the right side of the purchase option's row.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-purchase-option-tab.png?version=2\&modificationDate=1713503044000\&cacheVersion=1\&api=v2\&width=600\&height=369)

> The **Unsupported** tab includes products migrated from the legacy In-app products UI that were deleted or not marked ready for sale.

You can perform the following actions on a purchase option from the **Purchase options** tab:

* **Edit**: Update the name, description, and apps linked to a purchase option.

* **Copy**: Create a new purchase option by cloning an existing one.

* **End**: Stop offering the purchase option in your app. Ending a purchase option permanently deactivates it. Ending a purchase option does not affect existing subscribers. if you no longer want any subscribers to access the product via a given purchase option, you need to archive the purchase option.

* **Archive**: For ended purchase options (no longer offered in your app), cancel all existing subscriptions at the end of their billing cycle. The purchase option may not have limited-time offers, cancellation offers, or scheduled price changes in order to be archived.

* **Create limited-time offers**: Offer customers a free trial or introductory pricing for a specific period of time.

* **Create cancellation offers**: Offer customers a discount when they try to cancel their subscription to your app.

* **Schedule price change**: Schedule a price increase/decrease for a purchase option.

### Editing purchase options

You can edit a purchase option's name, description, and associated apps. To do this, click the action button for the purchase option, click **Edit** on the shortcut menu, and then make the desired changes. Click **Save as Draft** to save the purchase option without publishing it. Click **Review and Publish** to activate the purchase option on your app.

### Creating purchase options from a copy

You can create new purchase options by cloning an existing one. For example, you can copy a monthly purchase option for a subscription product to make an annual purchase option. To create a new purchase option from a copy, follow these steps:

1. Click the action button for the purchase option, click **Create a similar purchase option** on the shortcut menu.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-clone-purchase-option-shortcut.png?version=2\&modificationDate=1713506636000\&cacheVersion=1\&api=v2\&width=600\&height=299)

2. Enter the name and SKU for the purchase option and then configure the billing plan as described in [Creating purchase options](https://roku.atlassian.net/wiki/pages/resumedraft.action?draftId=148500544#Creatingtheproductcatalog-add-purchase).

3. Save or publish the purchase option.

### Ending purchase options

You can end a purchase option to deactivate it permanently. Once a purchase option has been deactivated, your app no longer offer it, and it cannot be reactivated. Ending a purchase option does not affect existing subscribers. if you no longer want any subscribers to access the product via a given purchase option, you need to end and then archive the purchase option.

> Ending a purchase option for an add-on does not end the base product; the base product continues to renew.

To end a purchase option, follow these steps:

1. Click the action button for the purchase option, click **End** on the shortcut menu.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-end-purchase-option-shortcut.png?version=1\&modificationDate=1713504926000\&cacheVersion=1\&api=v2\&width=600\&height=364)

2. Click **Yes, End Purchase Option** in the confirmation dialog.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-end-purchase-option.png?version=1\&modificationDate=1713504994000\&cacheVersion=1\&api=v2\&width=500\&height=200)

### Archiving purchase options

Once you end a purchase option, you can archive it to cancel all existing subscriptions at the end of their billing cycle. To archive a purchase option, it may not have limited-time offers, cancellation offers, or scheduled price changes.

Before you archive a purchase option, notify existing subscribers that their subscription is being cancelled. To archive a purchase option, follow these steps:

1. Click the **Ended** tab, click the action button for the ended purchase option, and then click **Archive** on the shortcut menu.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-archive-purchase-option.png?version=1\&modificationDate=1733444399580\&cacheVersion=1\&api=v2\&width=600\&height=338)

2. Click **Yes, Archive Purchase Option** in the confirmation dialog.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-archive-purchase-option-confirmation.png?version=1\&modificationDate=1733444479248\&cacheVersion=1\&api=v2\&width=500\&height=145)

### Creating a limited-time offer

You can create limited-time offers to provide customers with a free trial or introductory pricing for a specific period of time (for example, a New Year's promotion for the first two weeks of January). When a new customer subscribes to a product during an active limited-time offer, the customer receives that offer (a limited-time offer takes precedence over the base offer). If no limited-time offer is active, the customer receives the base offer. Customers may only ever receive a single free trial or discount offer for a subscription product, and they may only receive an offer that was made and accepted.

To create a lmited-time offer, follow these steps:

1. From the **Purchase options** tab, click the action button for the purchase option, and then click **Add a limited-time offer** on the shortcut menu. Alternatively, click the purchase option row to open the purchase option's details page, and then click **Add limited-time offer** under the **Billing plan** section.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-limited-time-offer-shortcut.png?version=2\&modificationDate=1713503668000\&cacheVersion=1\&api=v2\&width=600\&height=328)

2. The **Add a limited-time offer** dialog opens. By default, the **Offer type** is set to that of the current base offer.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-limited-time-offer.png?version=1\&modificationDate=1713503130000\&cacheVersion=1\&api=v2\&width=600\&height=836)

3. In the **Limited-time offer ID** box, enter an internal label that makes it easy to identify the offer (for example, "new-years-14-days-free").

4. Select the type of offer you are creating: **Free Trial** or **Introductory Pricing**.

5. If you are creating a **Free** **trial** offer, enter the number of days or months in the trial offer and then select the unit of time (**Days** or **Months**).

6. If you are creating an **Introductory** **price** offer, enter the number of days, months, or years the introductory price is valid, and then select the pricing tier corresponding to the discounted price to be offered.  Discounts cannot be specified using percentages or absolute currency units (for example, USD). Discounts may only be specified using the appropriate price tier. For example, the absolute discount from tier 9 to tier 6 is $3.00 ($8.99-5.99); the percentage discount is 33.4% ($(1-(5.99/8.99))x100).

7. In the **Start time** and **End time** boxes under **Schedule the offer**, enter when the free trial or introductory price offer begins and ends (your local time). The **End time** is inclusive. For example, if the state date is Nov 11, 2021, and the end date is Dec 26, 2021, the offer begins on November 11th at 12:00AM, and it ends December 26th at 11:59PM. The **End time** may not be in the past. Scheduled offers may not overlap—only one scheduled offer may be active on any given date.

   When a new customer subscribes to a product during an active limited-time offer, the customer receives that offer (a limited-time offer takes precedence over the base offer). If no limited-time offer is active, the customer receives the base offer. Customers may only ever receive a single free trial or discount offer for a subscription product, and they may only receive an offer that was made and accepted.

   Consider a monthly subscription product with a two-month free trial limited-time offer and a three-month 50% discount base offer. A customer accepts the two-month free trial. When the trial period ends, the customer is billed at the full monthly subscription rate for the next month (they do not receive the 50% discount included in the base offer because a customer may only ever receive a single free trial or discount offer). If no limited-time offer was scheduled when the customer initially purchased their subscription, the customer would be billed for the first three months at 50%, and would then pay the full subscription rate starting with the fourth month.

8. Click **Publish**.

### Creating cancellation offers

You can create discount offers to retain customers when they try to cancel their subscription to your app. When a customer starts turning off the auto-renewal of their subscription online at [my.roku.com](http://my.roku.com/), a single cancellation offer is displayed in a dialog. If the customer accepts the cancellation offer, the subscription is switched to the terms of the offer at the next billing cycle. You can create multiple cancellation offers per purchase option.

To create a cancellation offer, follow these steps:

1. Click the action button for the purchase option, and then click **Add cancellation offer** on the shortcut menu.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/add-cancel-offer-shortcut.png)

2. The **Add cancellation offer** page opens.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/add-cancel-offer-page.png?version=1\&modificationDate=1744921464263\&cacheVersion=1\&api=v2\&width=800\&height=408)

3. Enter a **Cancellation offer ID**. This is an internal label that makes it easy to identify the cancellation offer. The cancellation offer ID is appended to the purchase option ID.

4. In the **Cancellation offer price** field, select the **Price duration** of the cancellation offer and the price tier for the **Discounted price**.

5. In the **Eligibility** setting, select which users can receive this cancellation offer. By default, all subscribers are eligible for the offer every time they cancel a subscription. Optionally, you can configure rules to target specific subscribers based on the current subscription length, the time since they last used a cancellation offer, and the Streaming Store country in which they are located.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/cancel-offer-eligibility.png)

6. Optionally, in the **Promotional Image** field, upload up to four 16:9 promotional images per language.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/cancel-offer-image.png)

7. In the **Subscription terms for cancellation offer** field, enter the subscription terms for the cancellation offer in one or more languages. These terms are displayed to customers at the bottom of the offer.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/cancel-offer-terms.png)

8. In the Schedule the cancellation offer field, enter when the cancellation offer begins and ends (in your local time). The End time is inclusive. For example, if the start date is Nov 11, 2024, and the end date is Dec 26, 2024, the offer begins on November 11th at 12:00AM, and it ends December 26th at 11:59PM. The End time may not be in the past.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/cancel-offer-schedule.png)

9. Click **Save as Draft** to save the cancellation offer without activating it. Click **Publish** to activate the cancellation offer.

10. if you are publishing the cancellation offer, click Yes to confirm its publishing. If you are using offer variations, the confirmation dialog includes the variation ID, offer ID, and price for each one.

### Scheduling a price change for a purchase option

You can schedule a price increase/decrease of a purchase option. The price change may be applied to new subscribers only or both new and existing subscribers. If you increase the price for existing subscribers, you must give them 30-days notice.

> The price change goes into effect based on the the location associated with your developer account; therefore, you may need to consider time zones for when you want the price change to start.

To schedule a price change for a purchase option, follow these steps:

1. Click the action button for the purchase option, and then click **Schedule** **price change** on the shortcut menu.

   ![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-price-change-shortcut.png)

2. The **Schedule a** **price change** dialog opens. For the purchase options, the dialog lists the names of the associated product and apps, the SKU, billing cycle (type), regular price, and base offer of the purchase option.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-price-change-dialog.png)

3. In the **New regular price** field, select the updated price tier for the purchase option.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-price-change-dialog-select-new-price.png)

4. If you are decreasing the price, schedule the effective date of the price change for all customers.

5. If you are increasing the price, do the following:

   a. Schedule the effective date of the price increase for new customers. The price change will be applied for new subscribers the next day, at the earliest.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/catalog-2-price-change-new-customers.png)

   b. To apply the price change to current subscribers, select the **Apply price increase to current customer** check box, and then schedule the effective date of the price increase. The selected date must be 15 days in advance of the listed date. You must give current subscribers 15-days notice per Roku's certification requirements.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/catalog-2-price-change-existing-customers.png)

6. Click **Review and publish** to review the price change before publishing it.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-price-change.png)

7. Review and select the acknowledge check box and then click **Confirm** to schedule the price change.

   ![img -  roku600px](https://image.roku.com/ZHZscHItMTc2/product-catalog-price-change-dialog-confirm.png)

## Managing product groups

You can use the **Product groups** tab to manage the product groups in your catalog. The tab lists the name and associated products for each purchase group. You can filter the product groups by entering a name in the search box. By default, the product groups are listed by name in alphabetical order, and you can sort the product groups by clicking the headers. You can click anywhere in a row to view the details of a product group and edit it.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-group-tab.png)

### Editing product groups

You can add and remove products from a product group. Modifying a product group may affect the enforcement of mutual exclusivity between products; therefore, make sure changes do not make it possible to make multiple purchases for the same product.

To edit a product group, click anywhere in the row of a product group, update the product group as described in [Creating product groups](https://roku.atlassian.net/wiki/pages/resumedraft.action?draftId=148500544#Creatingtheproductcatalog-add-group), click **Save**, and then click **Confirm** in the confirmation dialog.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-edit-product-group.png)

### Deleting product groups

You can delete a product group listed in the **Product groups** tab. Deleting a product group may affect the enforcement of mutual exclusivity between products; therefore, make sure deletions do not make it possible to make multiple purchases for the same product.

To delete a product group, click the garbage can icon on the right side of the product group row, and then click **Delete** (or **Delete and Publish** if the products contain purchase options) in the confirmation dialog.

![img -  roku815px](https://image.roku.com/ZHZscHItMTc2/product-catalog-delete-product-group.png?version=1\&modificationDate=1713504485000\&cacheVersion=1\&api=v2\&width=500\&height=341)

## Testing in-app product purchases

To test in-app product purchases on a betan app, the app must:

* be configured with subscription and/or one-time purchase monetization methods.
* be enabled for billing testing.
* have test users associated with it (the test users' Roku accounts must be linked to the Roku devices being used for testing).
