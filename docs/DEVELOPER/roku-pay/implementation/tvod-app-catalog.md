---
title: Creating TVOD apps (Catalog 2.0)
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
Publishers participating in Roku Pay can monetize content by making it available for rental or purchase. Implementing the transactional video on demand (TVOD) model in a Roku app allows publishers to generate revenue from sporting events, pay-per-views, recent movie releases, and other popular content in their catalog. This enables viewers to enjoy the convenience of consuming a publisher's must-see content on-demand.

![roku815px - tvod-sample-UI](https://image.roku.com/ZHZscHItMTc2/tvod-buy-1.jpg)

## Overview

Offering transactional content in an app entails [creating products and purchase options](doc:product-catalog) for the content in the Developer Dashboard and using the [ChannelStore node](doc:channelstore) to [check the user's billing status](doc:channelstore#requestpartnerorder) and [complete the rental or purchase transaction](doc:channelstore#confirmpartnerorder).

> This workflow is intended for:
>
> 1. Publishers creating a TVOD-exclusive app (an app containing only transactional content such as movie rentals or purchases).
> 2. Publishers with subscription video on demand (SVOD) apps that also offer transactional content.

## Creating products for TVOD

To link transactional content with Roku Pay, you create products and purchase options in the Developer Dashboard. With the TVOD model, products only need to be created for each [product category](doc:product-catalog) (video content, audio content, or game token). For example, if you plan on offering movie rentals, you only need to create a single product that has the video category.

To manage multiple transactional content items using the same product, your app can leverage your product feed or publisher-specific API to retrieve the item's metadata from your catalog at runtime. When a user selects the content to be purchased, your app can use the runtime metadata to display the item's title, price, and poster image and pass the item's SKU through the ChannelStore functions in order to identify for which item to grant the user access.

### Product guidelines

When creating a product for transactional content, make sure to do the following:

* **Product Name**. Enter a name that generically describes the rental or purchase product (for example, "movie rental", "movie purchase", and so on).

  ![roku600px - tvod-product](https://image.roku.com/ZHZscHItMTc2/tvod-product-edit.jpg)

### Purchase option guidelines

When creating a purchase option for a TVOD product, make sure to do the following:

* **Purchase Type**. You must select **One-Time Purchase. consumable**.

  ![roku600px - tvod-purchase-option-consumable-create](https://image.roku.com/ZHZscHItMTc2/tvod-purchase-option-consumable-create.jpg)

* **Quantity** (TVOD-exclusive app only): Select **1**.

* **Price Tier**: Select any price tier. The price passed in the ChannelStore APIs overrides the price corresponding to the selected price tier.

  ![roku600px - tvod-purchase-option-billing](https://image.roku.com/ZHZscHItMTc2/tvod-purchase-option-billing.jpg)

## Handling transactional purchases

Publishers need to update their app's code to leverage the new **DoOrder** ChannelStore API, which displays the Roku Pay order confirmation screen where customers complete their purchase of your transactional content.

To update your app with the new **DoOrder** API, follow these steps:

1. Initialize the ChannelStore API generic request framework. The following code monitors the **channelStore.requestStatus** field and fires the **onRequestStatus()** callback function when changes to the **requestStatus** field occur. The **onRequestStatus()** function determines which command was sent and sends the results to the dedicated parser for the command.

   ```
   function init()
       m.store = m.parent.FindNode("channelStore")
       m.store.observeField("requestStatus", "onRequestStatus")
   end function

   ' Generic SDK API request callback
   function onRequestStatus()
       requestStatus = m.store.requestStatus

       if requestStatus = invalid
           print "Invalid requestStatus"
       else
           print "requestStatus", requestStatus
           print "requestStatus.command", requestStatus.command
           print "requestStatus.status", requestStatus.status
           print "requestStatus.statusMessage", requestStatus.statusMessage
           print "requestStatus.context", requestStatus.context

           ' requestStatus.status:
           ' 2: Interrupted
           ' 1: Success
           ' 0: Network error
           ' -1: HTTP Error/Timeout
           ' -2: Timeout
           ' -3: Unknown error
           ' -4: Invalid request

           ' Generic request succeeded
           if requestStatus.status = 1 then
               if requestStatus.command = "DoOrder" then
                   onOrderStatus(requestStatus.result)
               end if
           end if
       end if
   end function
   ```

2. Send the **DoOrder** command to purchase the transactional content, and then check the order status.

   ```
   sub makeTVODPurchase(requestData as dynamic)
     print  "calling makeTVODPurchase"
     'myOrder = { "code": request.productCode, "name": request.productName, "qty": 1}
     'myOrder = CreateObject("roSGNode", "ContentNode")

     print "request.sku: "; requestData.productCode
     newOrder = []
     order = {
       "orderType": "TVOD",
       "sku": requestData.productCode,
       "contentKey": requestData.contentKey,
       "title": requestData.title,
       "price": requestData.price,
       "originalPrice": requestData.originalPrice,
       "qty": 1
     }
     newOrder.push(order)

     request = {}
     request.params = {
       "orderItems": newOrder,
       "version": 2
     }
     request.command = "DoOrder"
     m.store.request = request
     m.orderType = "purchaseTVOD"
   end sub

   ' DoOrder response parser/helpers
   ' ==================================
   function onOrderStatus(requestResult as object) as void
     print chr(10) + "onOrderStatus"
     message = ""
     if requestResult.status <> 1
         message = "status: " + str(requestResult.status) + chr(10)
         message += "statusMessage: " + requestResult.statusMessage
         purchases = []
     else
         message = "Your Purchase completed successfully" + chr(10)
         message += "statusMessage: " + requestResult.statusMessage + chr(10)
         if type(requestResult.result) = "roAssociativeArray" then
             purchases = requestResult.result.purchases
             ' roArray
             if type(purchases) = "roArray" then
                 for i = 0 to purchases.Count() - 1
                     message += chr(10) + "Product " + AnyToString(i+1) + ":" + chr(10)
                     item = purchases[i]
                     ' roAssociativeArray
                     print type(item)
                     print "item", item
                     if item.replacedPurchase <> invalid then
                         print "item.replacedPurchase", item.replacedPurchase
                     end if
                     keys = item.Keys()
                     for each key in keys
                         strField = AnyToString(item[key])
                         if strField <> invalid
                             if strField.len() > 0
                                 message += key + " = " + strField + chr(10)
                             else
                                 message += key + " = " + chr(10)
                             end if
                         else
                             message += key + " = " + chr(10)
                         end if
                     end for
                 end for
             end if
         end if
     end if
     print "message", message

     status = {"status": requestResult.status, "statusMessage": requestResult.statusMessage}
     if m.orderType =  "purchase" or m.orderType = "purchaseTVOD"
       m.top.purchaseResult = {"status": status, "purchases": purchases}
     else
       print "Error - can't happen, orderType= "; m.orderType
     end if
     m.orderType = ""

   end function
   ```

   ## Sample app

   You can download and install a [sample app](https://github.com/rokudev/samples/tree/master/roku%20paytvod-catalog-2) that demonstrates how to handle transactional purchases using the new the new **DoOrder** ChannelStore API.

   ## Appendix A: TVOD API Reference (Catalog 2.0)

   The new version of the **DoOrder** API uses Roku's generic request framework, which enables developers to pass the ChannelStore command, parameters, and context into a single **request** object (an associative array). The result of the request is encapsulated in a **requestStatus** object (also an associative array), which includes the status of the request and the data returned by it. Channels must observe the **requestStatus** field to be notified of changes and fire a callback function to parse and process the Channel Store API commands.

   ### Generic Framework Request Status

   The **requestStatus** object returned by the ChannelStore generic request framework is an **roAssociativeArray** that has the following hierarchy. Observe that the products, purchase options, and entitlements returned by the ChannelStore commands are encapsulated in a nested **result.result** associative array.

   ```
   "requestStatus": {
       "command": "DoOrder",
       "status": 1,
       "statusMessage": "Success",
       "context": {...},
       "result": {
           "status": 1,
           "statusMessage": "Order Received",
           "purchases": [
               {
                   "amount": "$2.99",
                   "description": "Movie 2",
                   "externalCode": "TVOD-Movie-2",
                   "freeTrialQuantity": 0,
                   "freeTrialType": "None",
                   "name": "One Time Buy",
                   "originalAmount": "$3.99",
                   "promotionApplied": false,
                   "purchaseId": "34210b52-c666-11f0-95ed-7e5be645437d",
                   "qty": 1,
                   "replacedSubscriptionId": "",
                   "rokuCustomerId": "3d6ab75bf9435f748104ee06e9412960",
                   "sku": "TVOD-Buy",
                   "total": "$2.99",
                   "trialCost": "$0.00",
                   "trialQuantity": 0,
                   "trialType": "None",
                   "type": "Consumable"
               }
           ]
       }
   }

   ```

   <HTMLBlock>{`
   <table>
   <thead>
   <tr>
   <th class="short-line">Field</th>
   <th class="short-line">Type</th>
   <th class="short-line">Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">requestStatus</td>
   <td class="short-line">associative array</td>
   <td class="long-line">Returns the request's command and parameters: <div class="hscroll"><table>
   <thead>
   <tr>
   <th class="short-line">Field</th>
   <th class="short-line">Type</th>
   <th class="short-line">Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">command</td>
   <td class="short-line">string</td>
   <td class="long-line">Set to the name of the command, which is "DoOrder".</td>
   </tr>
   <tr>
   <td class="short-line">status</td>
   <td class="short-line">associative array</td>
   <td class="long-line">The command completion status, which may be one of the following values: <br><ul>
   <li><strong>2</strong>  Interrupted</li>
   <li><strong>1</strong>  Success</li>
   <li><strong>0</strong>  Network error</li>
   <li><strong>-1</strong> HTTP Error/Timeout</li>
   <li><strong>-2</strong> Timeout</li>
   <li><strong>-3</strong> Unknown Error</li>
   <li><strong>-4</strong> Invalid </li>
   </ul></td>
   </tr>
   <tr>
   <td class="short-line">statusMessage</td>
   <td class="short-line">string</td>
   <td class="long-line">A text description of the command completion status.</td>
   </tr>
   <tr>
   <td class="short-line">context</td>
   <td class="short-line">associative array</td>
   <td class="long-line">Used to match the <strong>requestStatus</strong> with <strong>request</strong>. For example, you can set this to {"id: DoOrder_1"}.</td>
   </tr>
   <tr>
   <td class="short-line">result</td>
   <td class="short-line">associative array</td>
   <td class="long-line">Includes the product, purchase option, purchase, and/or entitlement data returned by the command.</td>
   </tr>
   </tbody>
   </table></div></td>
   </tr>
   </tbody>
   </table>
   `}</HTMLBlock>

   ### DoOrder

   Displays the Roku Pay order confirmation screen, which is populated with information about the current order (product, name, and price). The customer can then either approve and complete the purchase, or cancel the purchase.

   ![roku815px - tvod-sample-UI](https://image.roku.com/ZHZscHItMTc2/tvod-buy-2.jpg)

   #### request

   <HTMLBlock>{`
   <table>
   <thead>
   <tr>
   <th class="short-line">Field</th>
   <th class="short-line">Type</th>
   <th class="short-line">Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">request</td>
   <td class="short-line">associative array</td>
   <td class="long-line">Includes the request's command and parameters: <div class="hscroll"><table>
   <thead>
   <tr>
   <th class="short-line">Field</th>
   <th class="short-line">Type</th>
   <th class="short-line">Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">command</td>
   <td class="short-line">string</td>
   <td class="short-line">Set to "DoOrder".</td>
   </tr>
   <tr>
   <td class="short-line">params</td>
   <td class="short-line">associative array</td>
   <td class="long-line">Include the following key-value pairs:<br><div class="hscroll"><table>
   <thead>
   <tr>
   <th class="short-line">Field</th>
   <th class="short-line">Type</th>
   <th class="short-line">Description</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">version</td>
   <td class="short-line">integer</td>
   <td class="short-line">Set to 2</td>
   </tr>
   <tr>
   <td class="short-line">orderItems</td>
   <td class="short-line">roArray of roAssociativeArray</td>
   <td class="long-line">The list of purchase options the customer has selected. For TVOD transactions, each orderItem must have the following fields (optional fields are denoted):<br><ul>
   <li><strong>sku</strong> (string): The developer-specified SKU for the selected purchase option. For TVOD purchases, a single consumable purchase option is used for all order items.</li>
   <li><strong>orderType</strong> (string): Must be set to "TVOD".</li>
   <li><strong>price</strong> (string): The final price of the product, including any discounts. Do not include a currency symbol (for example, set this to "2.99" instead of "$2.99").</li>
   <li><strong>originalPrice</strong> (string): The final original price of the product, including any discounts. Do not include a currency symbol (for example, set this to "3.99" instead of "$3.99"). This field is optional.</li>
   <li><strong>total</strong> (string): Localized total of the item purchased (including tax if applicable; with local currency symbol).</li>
   <li><strong>title</strong> (string): A description of the TVOD order items (for example, the name of a rental movie).</li>
   <li><strong>contentKey</strong> (string): The publisher-specific SKU (or other unique identifier) for the TVOD order items.</li>
   <li><strong>couponCode</strong> (string): An alphanumeric string entered by the customer to receive a discounted price on the TVOD order items.</li>
   <li><strong>qty</strong> (integer): The quantity of the item to be purchased, which should be 1 for most TVOD transactions.</li>
   </ul></td>
   </tr>
   </tbody>
   </table></div></td>
   </tr>
   </tbody>
   </table></div></td>
   </tr>
   </tbody>
   </table>
   `}</HTMLBlock>

   <br />
