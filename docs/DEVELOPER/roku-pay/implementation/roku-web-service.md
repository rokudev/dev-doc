---
title: Roku Pay web services reference
excerpt: 'RESTful APIs for managing Roku Pay billing transactions and entitlements'
deprecated: false
hidden: false
metadata:
  title: 'Roku Pay web services reference | Roku Developer Docs'
  description: 'Use the Roku Pay APIs to validate transactions, cancel and refund subscriptions, update billing cycles, and issue service credits to Roku accounts.'
  robots: index
next:
  description: ''
---
The Roku Pay APIs are RESTful web services that use standard HTTP methods for transferring billing transaction data between the Roku platform and the publisher's backend system. The Roku Pay APIs enable publishers to validate entitlements to products; refund and cancel subscriptions; issue service credits; and update customer billing cycles.

## Getting started

The following table summarizes the basic information for the Roku Pay web services:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Item
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        URL
      </td>
      <td>
        The base URL for the Roku Pay APIs is **[https://apipub.roku.com/listen/transaction-service.svc](https://apipub.roku.com/listen/transaction-service.svc)**. The resource name for the API is then appended to the URL.<br /><br />For example, the URL for the `validate-transaction` API is **[https://apipub.roku.com/listen/transaction-service.svc/validate-transaction](https://apipub.roku.com/listen/transaction-service.svc/validate-transaction)**.
      </td>
    </tr>
    <tr>
      <td>
        Protocol
      </td>
      <td>
        Roku Pay API calls may be sent using either HTTP or HTTPS.
      </td>
    </tr>
    <tr>
      <td>
        Format
      </td>
      <td>
        Roku Pay APIs support both JSON and XML-formatted data. Format the <code>accept</code> header as follows:
        <br /><br />
        <ul>
          <li><strong>JSON</strong>: accept: application/json</li>
          <li><strong>XML</strong>: accept: application/xml</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        HTTP Methods
      </td>
      <td>
        Roku Pay APIs support GET and POST methods for retrieving and managing transaction data:
        <br /><br />
        <ul>
          <li><strong>GET</strong>: All GET requests must include the Roku Pay API key and the ID of the item being validated in the URL (transaction or refund ID).</li>
          <li><strong>POST</strong>: All POST requests require JSON or XML-formatted data in the body. The Roku Pay API key must be included in the body.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        API Key
      </td>
      <td>
        All Roku Pay API requests must include the developer's API key. See [Setting up Roku Pay web services](doc:setting-up-web-services) for more information about getting and managing the key. For all requests, the app associated with the transaction ID or refund ID passed into the call must be owned by the developer associated with the Roku Pay API Key.
      </td>
    </tr>
  </tbody>
</Table>

## APIs

The Roku Pay platform provides the following APIs for managing billing transaction data:

| Method | API                                           | Description                                                                                                                                                                                       |
| :----- | :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | [validate-transaction](#validate-transaction) | Check whether a customer is entitled to an in-app product such as a Roku Pay subscription or one-time purchase (for example, movie rental, sporting event, pay-per-view)                          |
| GET    | [validate-refund](#validate-refund)           | Check whether a refund has been issued.                                                                                                                                                           |
| POST   | [cancel-subscription](#cancel-subscription)   | Cancel a Roku Pay subscription.                                                                                                                                                                   |
| POST   | [refund-subscription](#refund-subscription)   | Refund a Roku Pay subscription.                                                                                                                                                                   |
| POST   | [update-bill-cycle](#update-billing-cycle)    | Change the billing cycle data for a Roku Pay subscription (for example, to provide a customer a free week of service due to a service outage, you can delay their next billing date by one week). |
| POST   | [issue-service-credit](#issue-service-credit) | Give a service credit to a Roku account. (More on service credits below.)                                                                                                                         |

> **transactionId** format: The transactionIds returned by the Roku Pay APIs are ASCII strings of variable length that may be up to 1024 bytes.

### Validate transaction

The `validate-transaction` API is used to validate purchases made with SceneGraph ChannelStore component. It returns an `isEntitled` flag that indicates whether a customer is entitled to an in-app product. If `isEntitled` is "true", grant the customer access to content; if it is "false", prompt them to subscribe to your app.

For TVOD apps,  the `isEntitled` flag is set to "false"; therefore, your entitlement system must use different logic to determine whether a customer is entitled to content.

> The `validate-transaction` API includes **purchaseChannel** and **purchaseContext** fields that identify whether a Roku Pay subscription purchase originated from Instant Signup. For purchases made via Instant Signup, the **purchaseChannel** field is set to "web" and  **purchaseContext** field is set to "isu". For on-device purchases, these fields are set to "device" and "iap", respectively.

#### Request example:

```
GET https://apipub.roku.com/listen/transaction-service.svc/validate-transaction/{partnerAPIKey}/{transactionid}
```

#### Response example:

**XML**:

```xml
<result xmlns="http://api.roku.com/transaction" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <errorCode i:nil="true" xmlns=""/>
    <errorDetails i:nil="true" xmlns=""/>
    <errorMessage xmlns=""/>
    <status xmlns="">Success</status>
    <OriginalTransactionId>6ccb40bfbd7a49dc9846aafd01890ba5</OriginalTransactionId>
    <amount>1.99</amount>
    <cancelled>false</cancelled>
    <channelId>251682</channelId>
    <channelName>Pizzazzy Channel</channelName>
    <couponCode i:nil="true"/>
    <currency>usd</currency>
    <expirationDate>2020-02-06T23:51:02</expirationDate>
    <isEntitled>true</isEntitled>
    <originalPurchaseDate>2019-11-06T23:51:02</originalPurchaseDate>
    <partnerReferenceId i:nil="true"/>
    <productId>CAkJPWMldSfISZbs2sE3_MonthlySub</productId>
    <purchaseChannel>web</purchaseChannel>
    <purchaseContext>isu</purchaseContext>
    <productName>Pizzazzy</productName>
    <purchaseDate>2019-11-06T23:53:14</purchaseDate>
    <purchaseStatus>Active</purchaseStatus>
    <quantity>1</quantity>
    <rokuCustomerId>1f529e15cb15426be4ddb23a4933be2d</rokuCustomerId>
    <tax>0.0000</tax>
    <total>0.1300</total>
    <transactionId>09898ffd7d2a49bc94b1aafd0189a6fa</transactionId>
</result>
```

**JSON**:

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0,
    "OriginalTransactionId": "6ccb40bfbd7a49dc9846aafd01890ba5",
    "amount": 1.99,
    "cancelled": false,
    "channelId": 251682,
    "channelName": "Pizzazzy Channel",
    "couponCode": null,
    "currency": "usd",
    "expirationDate": "/Date(1581033062000+0000)/",
    "isEntitled": true,
    "originalPurchaseDate": "/Date(1573084262000+0000)/",
    "partnerReferenceId": null,
    "purchaseChannel": "web",
    "purchaseContext": "isu",
    "productId": "CAkJPWMldSfISZbs2sE3_MonthlySub",
    "productName": "Pizzazzy",
    "purchaseDate": "/Date(1573084394000+0000)/",
    "purchaseStatus": "Active",
    "quantity": 1,
    "rokuCustomerId": "1f529e15cb15426be4ddb23a4933be2d",
    "tax": 0,
    "total": 0.13,
    "transactionId": "09898ffd7d2a49bc94b1aafd0189a6fa"
}
```

#### Managing subscription recovery

The `isEntitled` flag returned by the `validate-transaction` API is also critical for managing subscription recovery in the Roku platform. Subscription recovery is the process of handling expired Roku Pay subscriptions due to failed payments or declined credit cards. When a subscription is in recovery, Roku Pay notifies the customer once a day for multiple consecutive days (typically three) to update their method of payment in order to renew the subscription, and it attempts to charge the customer's method of payment to ensure collection of payment and continuation of service.

While Roku Pay attempts to collect payment, the publisher's entitlement service should sync with the `validate-transaction` API nightly to manage subscriptions in recovery. The API calls for this nightly sync should be spread out over an approximately 6-hour period.

A subscription is considered to be in recovery when its `expirationDate` is set to the current date or a past date but `isEntitled` is set to true. This ensures that subscriptions without entitlements are cancelled promptly, but subscriptions that are successfully renewed are still accessible on the app and across all platforms.

To execute the nightly recovery sync with the `validate-transaction` API, follow these steps:

1. Iterate over all subscriptions that expired that day or payment is attempting to be recovered (the `expirationDate` parameter is the current date or a past date).

2. For each subscription in recovery, call the `validate-transaction` API with the `transactionId` of the subscription.

3. Read the `isEntitled` flag and the `expirationDate` parameter.

   a. If the `isEntitled` flag is "true" and the `expirationDate` has been updated to a future date, the method of payment has been updated and the subscription has been renewed. Update the entitlement service with the new `expirationDate` for the subscription, and put the account into a "subscribed" state.

   b. If the `isEntitled` flag is "true" but the `expirationDate` has not changed, the subscription is still in recovery and Roku is continuing payment collection.

   c. If the `isEntitled` flag is "false", Roku has completed the payment retry cycle and canceled the subscription. Call the `cancel subscription` API and put the account in an "unsubscribed" state in your entitlement service so it can stop calling the `validate transaction` API for that subscription.

   **Free trials:** When a free trial ends and the customer's method of payment fails, the `is_entitled` flag is "false". For apps using [Enhanced Subscription Recovery](doc:subscription-on-hold), the subscription will automatically be placed on hold; for apps using [Basic Recovery](doc:basic-recovery), the subscription is automatically cancelled (there is no grace period in this case).

The following table summarizes the action to be taken after checking the `expirationDate`:

| **expirationDate**   | **isEntitled** | **Subscription state** | **Action to be taken by the app**     |
| :------------------- | :------------- | :--------------------- | :------------------------------------ |
| Future date          | true           | active                 | Entitle user                          |
| Current or past date | true           | recovery               | Entitle user and check again next day |
| Past date            | false          | canceled               | Cancel subscription                   |

#### Managing upgrades/downgrades

Roku Pay supports on-device upgrades and downgrades between subscription products. Once an upgrade/downgrade has been completed, apps should call the `validate-transaction` API with the transaction ID from the `purchaseid` field of the [**doOrder** command](doc:channelstore) to update their system. For subscription upgrades and downgrades, the `validate-transaction` API response includes the following fields to identify the transaction:

* `purchase_type:` Indicates whether the transaction is an `UPGRADE` or `DOWNGRADE`.

* `cancelled_transaction_ids`: The transaction ID of the original subscription purchase that was upgraded/downgraded.

* `purchase_status`: Indicates the current state of the subscription. The following table outlines how this field relates to the `isEntitled` and `cancelled` fields:

  | purchase_ status | isEntitled | cancelled | Description                                                                                                                                                                                                                                                                                                                                                                  |
  | :--------------- | :--------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Active           | true       | false     |                                                                                                                                                                                                                                                                                                                                                                              |
  | Inactive         | false      | true      |                                                                                                                                                                                                                                                                                                                                                                              |
  | Pending_Active   | false      | false     | The "downgrade" subscription will be activated sometime in the future (the expiration date of the original plan); therefore, the downgrade is set to `Pending_Active`. The status will be set to `valid` at the time of activation.                                                                                                                                          |
  | Pending_Inactive | true       | true      | When a free trial is offered with the upgrade subscription, the original subscription becomes `Pending_Inactive`. Should the user cancel the upgrade, the original subscription will be reinstated (but _will not renew_ after the entitlement period). Upon the first successful renewal of the upgraded subscription, the original subscription will be set to `Inactive`. |

**Upgrade Response Example (JSON)**:

```json
  {
     "errorCode": null,
     "errorDetails": null,
     "errorMessage": "",
     "status": 0,
     "OriginalTransactionId": "a800b90755be491d821aabad017d6674",
     "amount": 4.99,
     "cancelled": false,
     "cancelledTransactionIds": [
        "b0f7e477e89e48d0aa13abad017d4ee9"
     ],
     "channelId": "000000",
     "channelName": "ESPRIMU",
     "couponCode": null,
     "currency": "usd",
     "expirationDate": "\/Date(1588892919000+0000)\/",
     "isEntitled": true,
     "originalPurchaseDate": "\/Date(1588288117000+0000)\/",
     "partnerReferenceId": "1969",
     "productId": "Y6ZFym7Xl2agLakTcxMB_MonthlySubFreeTrial",
     "productName": "Y6ZFym7Xl2agLakTcxMB_MonthlySubFreeTrial",
     "purchaseDate": "\/Date(1588288117000+0000)\/",
     "purchaseStatus": "Active",
     "purchaseType": "UPGRADE",
     "quantity": 1,
     "rokuCustomerId": "99999999999999999999999999999999",
     "tax": 0.0000,
     "total": 0.0000,
     "transactionId": "a800b90755be491d821aabad017d6674"
  }
```

**Downgrade Response Example (JSON)**

```json
{
     "errorCode": null,
     "errorDetails": null,
     "errorMessage": "",
     "status": 0,
     "OriginalTransactionId": "e8515e538c2b4e9e9039abac0165b4e1",
     "amount": 2.99,
     "cancelled": false,
     "cancelledTransactionIds": [
        "03c3ac6f-50864601b87aabac0165abed"
     ],
     "channelId": "000000",
     "channelName": "ESPRIMU",
     "couponCode": null,
     "currency": "usd",
     "expirationDate": "\/Date(1588801334000+0000)\/",
     "isEntitled": true,
     "originalPurchaseDate": "\/Date(1588196542000+0000)\/",
     "partnerReferenceId": "1969",
     "productId": "ZTtL0DvuGNX1sO4tJGNp_MonthlySubFreeTrial",
     "productName": "ZTtL0DvuGNX1sO4tJGNp_MonthlySubFreeTrial",
     "purchaseDate": "\/Date(1588196542000+0000)\/",
     "purchaseStatus": "PendingActive",
     "purchaseType": "DOWNGRADE",
     "quantity": 1,
     "rokuCustomerId": "99999999999999999999999999999999",
     "tax": 0.0000,
     "total": 0.0000,
     "transactionId": "e8515e538c2b4e9e9039abac0165b4e1"
  }
```

### Validate refund

The `validate-refund` API is used to verify that a Roku Pay purchase has been refunded.

**Request syntax:**

```
GET https://apipub.roku.com/listen/transaction-service.svc/validate-refund/{partnerAPIKey}/{refundId}
```

**Response example:**

**XML**

```xml
<result xmlns="http://api.roku.com/transaction" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <errorCode i:nil="true" xmlns=""/>
    <errorDetails i:nil="true" xmlns=""/>
    <errorMessage xmlns=""/>
    <status xmlns="">Success</status>
    <OriginalTransactionId>6ccb40bfbd7a49dc9846aafd01890ba5</OriginalTransactionId>
    <amount>1.99</amount>
    <cancelled>false</cancelled>
    <channelId>251682</channelId>
    <channelName>Pizzazzy Channel</channelName>
    <couponCode i:nil="true"/>
    <creditsApplied i:nil="true"/>
    <currency>usd</currency>
    <expirationDate>2020-02-06T23:51:02</expirationDate>
    <isEntitled>true</isEntitled>
    <originalPurchaseDate>2019-11-06T23:51:02</originalPurchaseDate>
    <partnerReferenceId i:nil="true"/>
    <productId>CAkJPWMldSfISZbs2sE3_MonthlySub</productId>
    <productName>Pizzazzy</productName>
    <purchaseDate>2019-11-06T23:53:14</purchaseDate>
    <quantity>1</quantity>
    <rokuCustomerId>1f529e15cb15426be4ddb23a4933be2d</rokuCustomerId>
    <tax>0.0000</tax>
    <total>0.1300</total>
    <transactionId>09898ffd7d2a49bc94b1aafd0189a6fa</transactionId>
</result>
```

**JSON**

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0,
    "OriginalTransactionId": null,
    "amount": -1.99,
    "cancelled": false,
    "channelId": 0,
    "channelName": "Pizzazzy Channel",
    "couponCode": null,
    "creditsApplied": null,
    "currency": "usd",
    "expirationDate": null,
    "isEntitled": false,
    "originalPurchaseDate": "/Date(1578676645000+0000)/",
    "partnerReferenceId": null,
    "productId": "CAkJPWMldSfISZbs2sE3_MonthlySub",
    "productName": "Pizzazzy",
    "purchaseDate": "/Date(1578676712000+0000)/",
    "quantity": 1,
    "rokuCustomerId": "1f529e15cb15426be4ddb23a4933be2d",
    "tax": 0,
    "total": -1.99,
    "transactionId": "CBD09EA84C4D4E1B82BDAB3E011D3E68"
}
```

### Cancel subscription

The `cancel-subscription` API cancels the subscription corresponding to the specified `transactionId`.

**Request syntax:**

**Method/URL**

```
POST https://apipub.roku.com/listen/transaction-service.svc/cancel-subscription
```

**XML body**

```xml
<cancel>
   <cancellationDate>2020-01-10T18:34:51.380355</cancellationDate>
   <dontNotifyUser>false</dontNotifyUser>
   <partnerAPIKey>F05447A57F8DF275FC30EC835FCAD10A19B6</partnerAPIKey>
   <partnerReferenceId>3v2m4j4j9d</partnerReferenceId>
   <transactionId>c8f3e1314dd94dc48915ab3e013231ac</transactionId>
</cancel>
```

**JSON body**

```json
{
   "cancellationDate": "2020-01-10T18:44:01.034020",
   "dontNotifyUser": false,
   "partnerAPIKey": "F05447A57F8DF275FC30EC835FCAD10A19B6",
   "partnerReferenceId": "7s9d8w0n6z",
   "transactionId": "57f45cad113b4fcd8de8ab3e0134b5cb"
}
```

**Response example:**

**XML**

```xml
<result xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
   <errorCode i:nil="true" />
   <errorDetails i:nil="true" />
   <errorMessage />
   <status>Success</status>
</result>
```

**JSON**

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0
}
```

### Refund subscription

The `refund-subscription` API refunds the subscription corresponding to the specified `transactionId`.

The refund value must be:

* specified (cannot be omitted)
* greater than $0.00
* less than (or equal to) the pre-tax price of the original transaction
* tax-exclusive (must not include the tax portion of the refund).

Roku Pay automatically calculates and handles any tax that should be included in the refund.

For example, a publisher refunds 50% of a $10 subscription, for which the customer was charged $11 ($10 subscription and 10% tax [$1.00]). In this case, the refund amount should be $5.00 instead of $5.50. When issuing the refund, Roku adds the 10% tax ($0.50) to the $5.00 `amount` specified in the refund-subscription API call ($5.00) and refunds the customer $5.50.

The sum of all partial refunds applied against any given transaction cannot exceed the original transaction amount.

**Request syntax:**

**Method/URL**

```
POST https://apipub.roku.com/listen/transaction-service.svc/refund-subscription
```

**XML body**

```xml
<refund>
    <amount>0.99</amount>
    <comments>Customer was not impressed</comments>
    <partnerAPIKey>F05447A57F8DF275FC30EC835FCAD10A19B6</partnerAPIKey>
    <partnerReferenceId>4l2v9t0014</partnerReferenceId>
    <transactionId>35a66187abfc45b8bd1eab3e01404134</transactionId>
</refund>
```

**JSON body**

```json
{
    "amount": 0.99,
    "comments": "Customer was not impressed",
    "partnerAPIKey": "F05447A57F8DF275FC30EC835FCAD10A19B6",
    "partnerReferenceId": "4l2v9t0015",
    "transactionId": "56d72aaa07414509be69 ab3e01417803"
}
```

**Response example:**

**XML**

```xml
<RefundResponseData xmlns="http://schemas.datacontract.org/2004/07/ASConnect.MessageData.v2" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <errorCode i:nil="true" xmlns=""/>
    <errorDetails i:nil="true" xmlns=""/>
    <errorMessage xmlns=""/>
    <status xmlns="">Success</status>
    <RefundId>f2116f00181a46d6b5a3ab3e01410986</RefundId>
</RefundResponseData>
```

**JSON**

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0,
    "RefundId": "304be6b0ddd44f7badfcab3e01436cc6"
}
```

### Update billing cycle

The `update-bill-cycle` API updates the billing cycle of the subscription corresponding to the specified `transactionId`.

Set the `newBillCycleDate` to the updated date on which the user should be billed (for example, the user can be billed on the 6th instead of the 4th). The updated date should be within the next billing period (the current expiration date plus the billing interval year or month).

**Request syntax:**

**Method/URL**

```
POST https://apipub.roku.com/listen/transaction-service.svc/update-bill-cycle
```

**XML body**

```xml
<billCycleUpdate>
    <partnerAPIKey>F05447A57F8DF275FC30EC835FCAD10A19B6</partnerAPIKey>
    <newBillCycleDate>2020-02-12T08:17:09</newBillCycleDate>
    <transactionId>de054ad85a454db38800ab3e014687a6</transactionId>
</billCycleUpdate>
```

**JSON body**

```json
{
    "transactionId": "fc51c9b9ba324923ae6dab3e01449eb5",
    "newBillCycleDate": "2020-02-12T08:17:09",
    "partnerAPIKey": "F05447A57F8DF275FC30EC835FCAD10A19B6"

}
```

**Response example:**

**XML**:

```xml
<result xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <errorCode i:nil="true"/>
    <errorDetails i:nil="true"/>
    <errorMessage/>
    <status>Success</status>
</result>
```

**JSON**:

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0
}
```

### Issue service credit

The `issue-service-credit` API is used to issue a service credit to the specified Roku account. A service credit functions as the customer's method of payment until its balance reaches $0.00. Once this occurs, the method of payment on file is charged. For example, when a customer makes a purchase, the service credit is first subtracted from the product's price. Any remaining amount due is charged to the method of payment on file.

Service credits may be issued for:

* An app. In this case, the `channelID` must be included in the request body.
* An in-app product. In this case, the `channelID` and `productID` must be included in the request body.

The response will include a `partnerReferenceId` that can be used later to find the service credit in the Roku Pay system.

**Request example:**

```
POST https://apipub.roku.com/listen/transaction-service.svc/issue-service-credit
```

**Request example:**

**XML**:

```xml
<serviceCredit>
    <partnerAPIKey>F05447A57F8DF275FC30EC835FCAD10A19B6</partnerAPIKey>
    <amount>9.99</amount>
    <channelId>251682</channelId>
    <comments>Content Incorrect</comments>
    <partnerReferenceId>4l2v9t9104</partnerReferenceId>
    <productId>2365C2E9-D75B-D1B6-DFC0-837161653CC6</productId>
    <rokuCustomerId>1f529e15cb15426be4ddb23a4933be2d</rokuCustomerId>
</serviceCredit>
```

**JSON**:

```json
{
  "partnerAPIKey": "F05447A57F8DF275FC30EC835FCAD10A19B6",
  "amount": 5.00,
  "channelId": "251682",
  "comments": "Content Incorrect",
  "partnerReferenceId": "4l2v9t9101",
  "productId": "2365C2E9-D75B-D1B6-DFC0-837161653CC6",
  "rokuCustomerId": "1f529e15cb15426be4ddb23a4933be2d"
}
```

**Response example:**

**XML**:

```xml
<TransactionReferenceResponseData xmlns="http://schemas.datacontract.org/2004/07/ASConnect.MessageData.v2" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <errorCode i:nil="true" xmlns=""/>
    <errorDetails i:nil="true" xmlns=""/>
    <errorMessage xmlns=""/>
    <status xmlns="">Success</status>
    <ReferenceId>47674</ReferenceId>
</TransactionReferenceResponseData>
```

**JSON**:

```json
{
    "errorCode": null,
    "errorDetails": null,
    "errorMessage": "",
    "status": 0,
    "ReferenceId": "47674"
}
```
