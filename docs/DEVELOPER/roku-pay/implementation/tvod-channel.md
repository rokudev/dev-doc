---
title: Creating TVOD apps (Catalog 1.0)
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
> If your Roku Developer account was created after April 30, 2025, see [Creating TVOD Apps (Catalog 2.0)](doc:tvod-app-catalog) for how to create in-app products and call the ChannelStore APIs to handle purchases.

Publishers participating in Roku Pay can monetize content by making it available for rental or purchase. Implementing the transactional video on demand (TVOD) model in a Roku app allows publishers to generate revenue from sporting events, pay-per-views, recent movie releases, and other popular content in their catalog. This enables viewers to enjoy the convenience of consuming a publisher's must-see content on-demand.

<Image alt="roku815px - tvod-sample-UI" border={false} src="https://image.roku.com/ZHZscHItMTc2/tvod-movie-v2.png" />

## Overview

Offering transactional content in an app entails [creating in-app products](doc:in-channel-products) for the content in the Developer Dashboard and using the [ChannelStore node](doc:channelstore) to [check the user's billing status](doc:channelstore) and [complete the rental or purchase transaction](doc:channelstore).

> This workflow is intended for:
>
> 1. Publishers creating a TVOD-exclusive app (an app containing only transactional content such as movie rentals or purchases).
> 2. Publishers with subscription video on demand (SVOD) apps that also offer transactional content.

## Creating in-app products for TVOD

To link transactional content with Roku Pay, you create in-app products in the Developer Dashboard. With the TVOD model, in-app products only need to be created for each [product category](doc:in-channel-products) (video, audio, game, or app/utility). For example, if you plan on offering movie rentals, you only need to create a single product that has the video category.

To manage multiple transactional content items using the same in-app product, your app can leverage your product feed or publisher-specific API to retrieve the item's metadata from your catalog at runtime. When a user selects the content to be purchased, your app can use the runtime metadata to display the item's title, price, and poster image and pass the item's SKU through the ChannelStore functions in order to identify for which item to grant the user access.

When creating an in-app product for transactional content, make sure to do the following:

* **Product Name**. Enter a name that generically describes the rental or purchase product (for example, "movie rental", "movie purchase", and so on).
* **Purchase Type**. Select **One-Time Purchase, Consumable - Quantity** from the list.
* **Quantity**. Select **1**.
* **Price Tier**. Select any price tier. The price passed in the ChannelStore APIs overrides the price corresponding to the selected price tier.

<Image alt="roku400px -  - tvod-product-pricing" border={false} src="https://image.roku.com/ZHZscHItMTc2/tvod-product-pricing.jpg" />

## Handling transactional purchases

To handle purchases of transactional content in your app, your app must send the [ChannelStore node's](doc:channelstore) [requestPartnerOrder](doc:channelstore) and [confirmPartnerOrder](doc:channelstore) commands to check the user's billing status and complete the transaction.

To send the **requestPartnerOrder** and **confirmPartnerOrder** commands, follow these steps:

1. Create a **ContentNode** with the following fields:

   * **priceDisplay**. The original price of the product. Do not include a currency symbol (for example, set this to "5.99" instead of "$5.99").
   * **price**. The final price to be charged for the product, including any discounts. Do not include a currency symbol (for example, set this to "3.99" instead of "$3.99").
   * **couponCode** (optional). An alphanumeric string entered by the customer to receive a discounted price on the product.
   * **contentKey**. The publisher's SKU (or other unique identifier) for the product.
   * **code**. The uniqueID specified for the product in the **In-App Products** page. Use the **addField()** method to add the **code** field to the **ContentNode**.
   * **title** (optional). The title of the product being purchased (for example, the name of a movie rental).

   ```
   m.orderInfo = createObject("roSGNode", "contentNode")
   m.orderInfo.priceDisplay = "5.99"
   m.orderInfo.price = "3.99"
   m.orderInfo.couponCode = "FIRST-RENTAL"
   m.orderInfo.contentKey = "123456"

   'Add a code field to the ContentNode
   m.orderInfo.addField("code", "string", false)

   'Set the code to the product identifier of your generic TVOD product
   m.orderInfo.code = "ROKUTVODSTORETVSHOW"
   ```

2. Set the **ContentNode** to the ChannelStore node's **requestPartnerOrder** field.

   ```
   m.channelStore.requestPartnerOrder = m.orderInfo
   m.channelStore.command = "requestPartnerOrder"
   ```

3. Add an observer for the **requestPartnerOrderStatus** field and an associated callback function. Check that the **requestPartnerOrderStatus.status** field is set to **success** to confirm the customer's billing request and then proceed with the next steps to complete the transaction.

   If the **status** field is set to **failure**, display an error message.

   ```
   m.store.observeField("requestPartnerOrderStatus", "requestPartnerOrderStatusChanged")

   'callback function
   function requestPartnerOrderStatusChanged()
   	if m.store.requestPartnerOrderStatus.status = "Success"
      	'user's billing status is valid - prompt the user to purchase
      else
      	'display an appropriate error message
   	end if
   end function
   ```

4. Create a **ContentNode** with the following fields:

   * **orderId**. Set this to the **requestPartnerOrderStatus.orderID** field. This is the order ID generated by Roku for the transactional purchase.
   * **title**. The name to be shown on user's invoices for the purchased item.
   * **pin**. Enter an empty string ("") to trigger the Roku Pay user content payment workflow.
   * **priceDisplay**. The original price of the product. Do not include a currency symbol (for example, set this to "5.99" instead of "$5.99").
   * **price**. The final price to be charged for the product, including any discounts. Do not include a currency symbol (for example, set this to "3.99" instead of "$3.99").
   * **couponCode** (optional). An alphanumeric string entered by the customer to receive a discounted price on the product.
   * **contentKey**. The publisher's SKU (or other unique identifier) for the product.
   * **code**. The uniqueID specified for the product in the **In-Channel Products** page. Use the **addField()** method to add the **code** field to the **ContentNode**.

     ```
     m.confirmOrderInfo = CreateObject("roSGNode", "ContentNode")
     m.confirmOrderInfo.orderId = m.store.requestPartnerOrderStatus.orderID
     m.confirmOrderInfo.title = "TV Show 1"
     m.confirmOrderInfo.pin = ""
     m.confirmOrderInfo.priceDisplay = m.orderInfo.priceDisplay
     m.confirmOrderInfo.price = m.orderInfo.price
     m.confirmOrderInfo.couponCode = m.orderInfo.couponCode
     m.confirmOrderInfo.contentKey = m.orderInfo.contentKey

     'Add a code field to the ContentNode
     m.confirmOrderInfo.addField("code", "string", false)

     'Set the code to the product identifier of your generic tvod product
     m.confirmOrderInfo.code = "ROKUTVODSTORETVSHOW"
     ```

5. Set the **ContentNode** to the ChannelStore node's **confirmPartnerOrder** field. This will prompt the user to complete the transaction.

   ```
   'Set the ContentNode to the ChannelStore node
    m.store.confirmPartnerOrder = m.confirmOrderInfo

   'Prompt the user to complete the transaction
   m.store.command = "confirmPartnerOrder"
   ```

6. Add an observer for the **confirmPartnerOrderStatus** field and an associated callback function. Check that the **confirmPartnerOrderStatus.status** field is set to **success** to confirm the transaction and then display a confirmation dialog to the user with a purchase summary. Grant the customer access to the purchased content. You can pass the publisher-specific SKU in the **contentKey** field to your backend services to do this.

   If the **status** field is set to **failure**, display an error message explaining why the transaction could not be completed.

   ```
   m.store.observeField("confirmPartnerOrderStatus", "confirmPartnerOrderStatusChanged")

   'callback function
   function confirmPartnerOrderStatusChanged()
   		if m.store.confirmPartnerOrderStatus.status = "Success"
   				displayOrderStatusDialog(m.store.confirmPartnerOrderStatus	
   		else
   				'display an appropriate error message
   		end if
   end function
   ```

## Sample app

You can download and install a [sample app](https://github.com/rokudev/channelstore-node-tvod-sample) that demonstrates how to handle transactional purchases using the [ChannelStore](doc:channelstore) node. This sample shows how to link a single, generic in-app product to multiple transactional content items in an app's catalog. It also shows how to dynamically name and price transactional content items and process their purchases in the Roku Pay workflow.
