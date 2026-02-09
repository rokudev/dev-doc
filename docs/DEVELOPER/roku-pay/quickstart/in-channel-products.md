---
title: "Adding in-app products"
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


> If your Roku Developer account was created after April 30, 2025, see [Creating the product catalog](doc:product-catalog) for how to create in-app products.

Apps implementing Roku Pay can offer monthly and annual subscriptions and one-time purchases (for example, movie rentals/purchases, sporting events, pay-per-views). The **In-channel products** page lets you create the subscription and one-time purchase products for subscription video on demand (SVOD) and transactional video on demand (TVOD) apps linked to your Roku developer account.

- SVOD apps can create one or more monthly and annual subscription products, offer free-trials and discounts, and schedule limited-time offers. Monthly and annual subscriptions can further be organized into product groups to support on-device upgrades/downgrades and prevent customers from accidentally being double-billed for the same service. SVOD apps can also offer one-time purchase products such as pay-per-views, sporting events, premium movie releases, and so on. Continue reading this guide for creating in-app subscription and one-time purchase products for SVOD apps.



- TVOD-exclusive apps (apps offering only transactional content) create one in-app product for each different price point in the app. See [Creating TVOD apps](doc:tvod-channel) for how to create one-time purchase products.


> To test in-app products on an app, the app must:
>
> - be configured with subscription and/or one-time purchase monetization methods.
> - be enabled for billing testing.
> - have test users associated with it (the test users' Roku accounts must be linked to the Roku devices being used for testing).

## Adding in-app products

Creating an in-app product entails the following steps:

1. [Adding a new product](#adding-a-new-product).
2. [Entering product basics](#product-basics). Specify  offering the product, and enter the product category, name, language, and ID/code.
3. [Entering product pricing](#product-pricing). Specify the product type (monthly subscription, annual subscription, or one-time purchase) and the price of the product.
4. [Adding trials and offers](#trials-and-offers) (optional) . Configure any free-trials and discounts to be included with the product.
5. [Scheduling offers](#scheduling-offers) (optional). Create limited-time free trial and discount offers.
6. [Adding product groups](#adding-product-groups) for all sets of mutually exclusive subscription products.

### Adding a new product

To create a new product, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), select **Product Catalog**. You can also select **Manage In-Channel Products** from the drop-down list on the left side of the pages within the Developer Dashboard.

   ![roku815px - manage-in-channel-product roku600px](https://image.roku.com/ZHZscHItMTc2/manage-in-channel-products-v3.jpg)


2. In the **Manage In-Channel Products** index page, click **Add a new product**.

   ![roku815px - add-new-product](https://image.roku.com/ZHZscHItMTc2/add-new-product-v4.png)

### Product basics

To provide the basic information for an in-app product, follow these steps:

![roku600px - in-channel-products-basics](https://image.roku.com/ZHZscHItMTc2/in-channel-products-basics-v2.png)

1. From the **Channels** list, select one or more apps where this product will be available for sale. All  that belong to the logged-in administrator (root account) are listed.


2. From the **Product category** list, select one of the following classifications for the app:

   - **Video:** Primarily short- or long-form video content, including music videos.

   - **Audio:** Primarily audio content without accompanying video, such as streaming audio services or audio-only podcasts.

   - **Game:** Primarily functions as a game.

   - **App/Utility:** An application or utility. Examples include screensavers, weather apps, lottery results, etc.

3. In the **Product** **name** field, enter a 30-character maximum product name in English. The name can include letters, numbers, spaces, and punctuation marks (UTF-8 characters are not supported). The product name may be included in invoices emailed to your customers; therefore, enter a name that is logical and easy-to-read for customers. For example, you can include a distinctive phrase or brand that makes the name easy for customers to recognize.

   UTF-8 characters are not supported in this version of the product name. You can enter localized versions of the product name that may include these characters in the next step.

   > The product name is displayed to customers in the app's on-device purchasing workflow and in subscription emails sent by Roku. Make it easy for customers to identify subscription and one-time purchase products.
   >
   > ------
   >
   > **Certification requirement: **The in-app product names must clearly identify the service being offered by the app. The publisher must have full legal rights or consent for their in-app product names and the rights to all trademarks and copyright expressions associated with the names. The in-app product names may not include the name "Roku", text related to a trial or discount offer**,** or any profanity or derogatory or misleading language.
   >
   > **Do not include billing information in the product name such as pricing, billing cycle (for example, "monthly" or "annual"), or offers. Do not include text related to a trial or discount offer in the product name.**
   >
   > **Do not include "Roku" or any profanity/derogatory language in the product name.**
   >
   > ------
   >
   > You can use the following recommended syntax: ""*appName* **-** *planName*"". Product names on the "Roku Developers" app using this syntax could be, for example:
   >
   > - "Roku Developers - Ad-supported"
   >
   > - "Roku Developers - Premium Ad Free"
   >
   >
   >  ![roku815px - rsg-channelstore-doorder-product-name-highlighted](https://image.roku.com/ZHZscHItMTc2/rsg-channelstore-doorder-product-name-highlighted.jpg)



4. Optionally, you can provide a localized product name. To do this, click **Add product name in another language**, select a language from the list (French, Spanish, or German), and then enter the localized product name. The localized product name can be a maximum of 30 characters and may include UTF-8 characters. Repeat this step to provide another localized product name; you can provide one per language.

   ![roku815px - inCP-SpanishProductName](https://image.roku.com/ZHZscHItMTc2/inCP-SpanishProductName.jpg)



   > You may want certain products to only be available in specific countries. In the app, you can call the [**getUserRegionData**](doc:channelstore) command to determine the country associated with the user's Roku account. You can then implement business logic to filter the results of the ChannelStore [**getCatalog** command](doc:channelstore) to only display products that should be available for that country.
   >
   > If you want to offer a specific in-app product in multiple countries, currency conversion can be handled by Roku or the publisher:
   >
   > - **Roku handles currency conversion**: Create a single in-app product for all countries.
   > - **Publisher handles currency conversion**: Create in-app products for each country and filter out the product by the country in the app business logic.

5. In the **Product identifier** field, enter the internal code for your app. This identifier is used as the `code` field for retrieving catalog items, creating orders, and getting previous purchases with the [SceneGraph ChannelStore node](doc:channelstore).

### Product pricing

To enter the price of a product, follow these steps:

![roku600px - in-channel-products-pricing](https://image.roku.com/ZHZscHItMTc2/in-channel-products-pricing-v2.png)

1. From the **Purchase type** list, select one of the following types for the product being added:

   - **One-Time Purchase:** A movie rental/purchase, sporting event, pay-per-view, or other product that may only be purchased a single time from an SVOD app. The publisher controls entitlements (number of viewings and permitted viewing time) for one-time purchase products in their backend system.

   - **One-Time Purchase, Consumable - Quantity:** A "packet" of identical items (such as game points, number of viewings permitted ). Enter the size of the packet in the **Quantity** field.

     If you are creating a [TVOD-exclusive app](doc:tvod-channel), select this option and select **1** for quantity. This is because you create a single generic in-app product per product type for a TVOD app (rather than a product per content item as in a SVOD app), and this setting allows that generic in-app product to be purchased multiple times. For example, if you plan on offering movie rentals, you only need to create a single one-time purchase consumable video product. See [Creating TVOD apps](doc:tvod-channel) for more information.

   - **Monthly subscription:** A product requiring a monthly charge for continued access.

   - **Yearly subscription:** A product requiring an annual charge for continued access.


2. From the **Price tier** list, select one of the predefined prices for the product.

   - Tiers are used to enforce 99 cent or 49 cent pricing on app products.

     - One to three-digit tier numbers are used for 99 cent pricing. Subtract 1 cent from a tier to get the corresponding price. For example, Tier 1 is 99 cents, Tier 2 is $1.99, Tier 10 is $9.99, Tier 100 is $99.99 and so on. The highest tier is 400 ($399.99).

     - Four-digit tier numbers are used for 49 cent pricing. Append 49 cents to the last digit or last two digits in the tier to get the corresponding price. For example, Tier 1000 is 49 cents, Tier 1001 is $1.49, Tier 1010 is $10.49, Tier 1020 is $20.49 and so on. The highest tier is 1030 ($30.49).

     - See the [Price tier reference guide](doc:price-tiers) for the complete list of price tiers for each Roku Streaming Store.

       If you are creating a [TVOD-exclusive app](doc:tvod-channel), select any price tier. The price passed in the [ChannelStore APIs](doc:channelstore) overrides the price corresponding to the selected price tier.

       > Certification requirement: SVOD apps must provide 15-days notice to existing customers before changing the price of their service.


   - A chart under the **Price tier** field displays the price, in appropriate local currency, for each Streaming Store where the product will be available.

     - The **Purchase price** reflects the amount to be paid by the customer. The purchase price for EU Streaming Store countries include VAT. Proceeds are based on pre-tax (net) prices.

     - The **Your proceeds** field displays the amount that you receive from Roku for the sale of the product. Based on exchange rate fluctuations, the proceeds in one Streaming Store may not equal the amount to be received in another.

### Trials and offers

Apps can offer free trial periods and discounted offers, and Roku Pay automatically handles the auto-renewals of the trial or discounted offers to paid full-price subscriptions. Separate products do not need to be created for free trial or discounted offers. A single product may include both a base offer (the standard base price) and a trial/discount offer.

The administrator (root account) can create free-trials offers, discount pricing, and limited-time offers for a monthly or annual subscription following these steps:

1. Under **Base offer**, select one of the following offers (by default, **None** is selected, meaning the subscription product does not include an offer):

   - **Discounted Price**. Include a discount with the product. In the **Discounted Price Tier** box, select the pricing tier corresponding to the discounted price to be offered, and then enter the number of months the discount is included.

     Discounts cannot be specified using percentages or absolute currency units (for example, USD). Discounts may only be specified using the appropriate price tier. For example, the absolute discount from tier 9 to tier 6 is $3.00 ($8.99-5.99); the percentage discount is 33.4% ($(1-(5.99/8.99))x100)


   - **Free Trial**. Include a free trial period with the product. In the **Trial duration** box, enter the number of days or months in the trial offer and then select the unit of time (**Days** or **Months**).

     ![roku815px - inCP-TrialsAndOffers2](https://image.roku.com/ZHZscHItMTc2/inCP-TrialsAndOffers2.jpg)


2. If the product is ready to be made available to customers for purchase, select the **Cleared for Sale** check box. This makes the product visible to the ChanelStore node (specifically, the node's [**getCatalog** field](doc:channelstore) will return this product). Selecting this check box also enables you to schedule limited-time free trial and discount offers for the product.

   If the product is still being tested, keep the check box cleared (it is cleared by default). In this case, the **ChannelStore** node's [**getCatalog** field](doc:channelstore) will not return this product.


3. Click **Save** to add the in-app product to the **Manage In-Channel Products** index page.

   ![roku815px - in-channel-products-home](https://image.roku.com/ZHZscHItMTc2/in-channel-products-home-v2.png)


4. This page lists the name, identifier/code, type, and purchase price (in USD) for each product and whether the product was **Cleared for Sale** (yes or no). The initial **Status** is based on whether the product was cleared for sale. If yes, the status is "Approved"; if no, it is marked with a "Submit for Review" link. Clicking the "Submit for Review" link approves the product. To make it available for purchase, however, you still need to edit the product and select the **Cleared for sale** check box.

### Scheduling offers

You can schedule time-limited free trial and discount offers on monthly and annual subscription products that have been cleared for sale. When a new customer subscribes to a product during an active time-limited offer, the customer receives that offer (a time-limited offer takes precedence over the base offer). If no time-limited offer is active, the customer receives the base offer. Customers may only ever receive a single free trial or discount offer for a subscription product, and they may only receive an offer that was made and accepted.

------

**Example**

Consider a monthly subscription product with the following time-limited and base offers:

- **Time-limited offer**: Two-month free trial.
- **Base**: Three-month 50% discount.

A customer accepts a two-month free trial. When the trial period ends, the customer is billed at the full monthly subscription rate for the next month (they do not receive the 50% discount included in the base offer because a customer may only ever receive a single free trial or discount offer).

If no time-limited offer was scheduled when the customer initially purchased their subscription, the customer would be billed for the first three months at 50%, and would then pay the full subscription rate starting with the fourth month.

------

To schedule a time-limited offer for a monthly or annual subscription product, follow these steps:

1. In the **Manage In-Channel Products** index page, click the product name link to edit the product.


2. At the bottom of the **Manage In-Channel Products** page, verify that the **Cleared for Sale** check box is selected. If the check box is cleared, select it, click **Save**, and then click the **Product name** link from the index page again.

   ![roku600px - schedule-offer-start](https://image.roku.com/ZHZscHItMTc2/schedule-offer-start.jpg)


3. Click **Schedule offer**.

   ![roku600px - schedule-offer-button](https://image.roku.com/ZHZscHItMTc2/schedule-offer-button-v2.jpg)


4. In the **Product Offers** page, create an offer following these steps:

   a. Click **Create new offer**.

     ![roku600px - create-new-offer](https://image.roku.com/ZHZscHItMTc2/create-new-offer-v2.png)

   b. Select the type of time-limited offer to be created: **Free trial** or **discounted price**. If you select **Free trial**, enter the number of days or months in the trial offer and then select the unit of time (**Days** or **Months**). If you select **Discounted price,** select the pricing tier corresponding to the discounted price to be offered, and then enter the number of months the discount is included. The discounted offer price must be lower than the regular product price.

     ![roku815px - SchedOffSchedProdOff](https://image.roku.com/ZHZscHItMTc2/SchedOffSchedProdOff-v2.png)

   c. In the **Start Date** and **End Date** boxes, select when the time-limited offers begins and ends in Pacific Time Zone (PT). The **End date** is inclusive. For example, if the state date is Nov 11, 2021 and the end date is Dec 26, 2021, the offer begins on November 11th at 12:00AM PST (08:00 AM UTC), and it ends December 26th at 11:59PM PST (December 27th, 07:59 AM UTC).  The **End date** may not be in the past. Scheduled offers may not overlap—only one scheduled offer may be active on any given date.

     ![roku600px - SchedOffSchedProdOffDiscPr](https://image.roku.com/ZHZscHItMTc2/SchedOffSchedProdOffDiscPr-v2.png)

   d. Click **Save** and then click **Confirm** in the **Confirm new time-limited offer** dialog.

   ![roku600px - confirm-offer](https://image.roku.com/ZHZscHItMTc2/confirm-offer-v2.png)

   e. The new offer is listed in the **Product offers** index page.

5. The **Product offers** index page lists all the active and future scheduled time-limited offers.

   ![roku815px - time-limited-offers-index](https://image.roku.com/ZHZscHItMTc2/time-limited-offers-index-v2.png)

   - To edit a scheduled offer, click its **Offer name** link. Active and expired offers cannot be edited.

   - To delete a scheduled offer, click the check box to the left of the offer name and then click **Delete**. Active and expired offers cannot be deleted.

   - To view a list of historical offers, click **Expired** **offers**.

### Editing in-app products

You can edit a product listed in the **Manage In-Channel Products** index page by clicking its **Product name** link. Editing a product is necessary for changing its **Cleared for Sale** status and scheduling trial and discount offers.

### Deleting in-app products

> Deleted products cannot be recovered. If the subscription product could be made available for purchase again in the future, just edit the product and set its **Cleared for Sale** status to "No". This cancels all existing subscriptions of the product.

Deleting a product without first changing its **Cleared for Sale** status to "No" keeps the current subscriptions of the product active, but it prevents additional purchases of the product.

You can delete a product listed in the **Manage In-Channel Products** index page following these steps:

1. Verify that the product is "not cleared for sale". If it is, edit it and clear the **Cleared for Sale** check box. All existing product subscriptions will no longer be renewed on their expiration dates.

2. Select the checkbox to the left of the product name, and then click the **Delete** button that appears at the top of the column. You can delete multiple products at the same time. The selected products are permanently removed from all apps to which they are linked.

## Adding product groups

Subscription services must add any set of *mutually exclusive* subscription products to a product group (mutually exclusive means subscription products that customers cannot be subscribed to simultaneously). This enables customers to upgrade or downgrade those subscription products on-device, and avoid being double-billed for access to the same content or service.

- **Upgrade/downgrade**. If an app offers monthly and annual subscriptions, a product group that includes both plans must be created. Similarly, if an app offers ad-supported and ad-free plans, or HD and 4K plans, those sets of products must be added to a product group.


- **Double billing**. If an app has two in-app products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions.

From the customer perspective, if they try to purchase a subscription product when they already have one in the same product group, Roku Pay displays a "You're already subscribed to this app" dialog.

> For more on how product groups are used to enable customers to easily switch between different service tiers, see the [On-device upgrade and downgrade](doc:on-device-upgrade-downgrade) implementation guide.

![roku815px - already-subscribed](https://image.roku.com/ZHZscHItMTc2/already-subscribed.jpg)

> **Certification requirement**: Subscription services must create product groups for all sets of subscription products that customers cannot be subscribed to simultaneously in order to pass [certification](doc:certification).

To create a product group, follow these steps:

1. Click the **Product Groups** tab, and then click **Add a New Group**.

   ![roku815px - add-new-product-group](https://image.roku.com/ZHZscHItMTc2/add-new-product-group-v2.png)


2. In the **Group Name** box, enter a descriptive name for the group that makes it easy to identify. For example, if you are creating a product group containing monthly and annual plans, it could be named "Subscription Plans".


3. From the **Channel List**, select the app that uses the product group.


4. Under **Add to group** on the right-hand side of the page, select the checkbox for each mutually exclusive in-app product to be included in the product group, and then click the **Add to group** icon (+). To remove a product from a group, select its check box under **Remove from group** on the left-hand side of the page and then click the minus (-) icon.

   ![roku815px - product-group-selected-products](https://image.roku.com/ZHZscHItMTc2/product-group-selected-products-v2c.png)


5. Click **Save**.


6. The **Product group** index page lists the new product group. You can edit a product group by clicking its **Group name** link. You can delete a product group by selecting its check box and clicking **Delete**.

   ![roku600px - product-group](https://image.roku.com/ZHZscHItMTc2/product-group-v2.png)
