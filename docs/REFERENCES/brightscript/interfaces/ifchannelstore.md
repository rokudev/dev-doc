---
title: ifChannelStore
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

## Implemented by

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| [roChannelStore](doc:rochannelstore) | allows the application to perform a purchase of an in-app product or upgrade an app |


## Supported methods

### GetIdentity() as Integer

#### Description

Returns a unique number for this object that can be used to identify whether a roChannelStoreEvent event originated from this object, by comparing with the roChannelStoreEvent object's GetSourceIdentity() value.

>  The value can be any arbitrary value as assigned by the Roku OS, and should only be used for comparison purposes. For example, the value should not be used as an array index.<br /><br />For use as a look-up key, you can use GetIdentity().ToStr() as an associative array key.

#### Return Value

The unique number generated for the object.

### GetCatalog() as Void

#### Description

Requests the list of in-app products that are linked to the running app.

If successful, a subsequent [roChannelStoreEvent](doc:rochannelstoreevent) will be received that contains an roList of roAssociativeArray items. Each associative array will contain the following parameter names with specified value type:

| Parameter         | Type    | Description                                                  |
| ----------------- | ------- | ------------------------------------------------------------ |
| code              | string  | The **Product Identifier** that was entered in the [In-App Products page in the Developer Dashboard](doc:in-channel-products). |
| name              | string  | The item name (this name will also be set as the description). |
| quantity          | Integer | For one-time purchase/consumable products only. The number of the product purchased (for example "1000" game points, "3" viewings of a movie rental). |
| productType       | string  | The product type (ex. "MonthlySub")                          |
| cost              | string  | Localized cost of the product with local currency symbol     |
| freeTrialQuantity | integer | If the product has a free trial offer, the length of the trial period. For example, **1** for a 1-month free trial or **7** for a 7-day free trial. |
| freeTrialType     | string  | If the product has a free trial offer, the unit of time used by the trial ("Days" or "Months") |
| trialCost         | integer | If the product uses introductory pricing, the discounted price. |
| trialQuantity     | integer | If the product uses introductory pricing, the number of months the discounted pricing is applicable. |
| trialType         | string  | Set to "months" for all products. All products using introductory pricing use "months" as the unit of time for the trial. |
| status            | string  | Indicates whether the product has been "saved" or "approved for sale". |
| purchaseDate      | String  | The subscription purchase date                               |

### GetStoreCatalog() as Void

#### Description

Requests the list of globally available in-app products, which are available to all apps.

If successful, a subsequent [roChannelStoreEvent](doc:rochannelstoreevent) will be received that contains an roList of roAssociativeArray items. Each associative array will contain the following parameter names with specified value type:

| Parameter   | Type   | Description                                                |
| ----------- | ------ | ---------------------------------------------------------- |
| code        | string | The product identifier                                     |
| cost        | String | The localized cost of the item with local currency symbol. |
| name        | string | The item name                                              |
| description | String | The product description.                                   |
| SDPosterUrl | string | The URL for the standard definition image of the product.  |
| HDPosterUrl | string | The URL for the high definition image of the product.      |

### GetPurchases() as Void

#### Description

Requests the list of purchases associated with the current user account.

If successful, a subsequent [roChannelStoreEvent](doc:rochannelstoreevent) will be received that contains an roList of roAssociativeArray items. Each associative array will contain the following parameter names with specified value type:


<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>code</td>
<td>string</td>
<td>The <strong>Product Identifier</strong> that was entered in the [In-app Products page in the Developer Dashboard](doc:in-channel-products#product-basics).</td>
</tr>
<tr>
<td>cost</td>
<td>string</td>
<td>Localized cost of the item (prior to purchase) with local currency symbol</td>
</tr>
<tr>
<td>expirationDate</td>
<td>string</td>
<td>The subscription expiration date (<a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format)</td>
</tr>
<tr>
<td>freeTrialQuantity</td>
<td>integer</td>
<td>The free trial amount associated with the freeTrialType. For example, <strong>1</strong> for a 1-month free trial or <strong>7</strong> for a 7-day free trial.</td>
</tr>
<tr>
<td>freeTrialType</td>
<td>string</td>
<td>The free trial type ("Days" or "Months")</td>
</tr>
<tr>
<td>inDunning</td>
<td>string</td>
<td>A flag that indicates whether the purchased subscription is past due state because of an invalid method of payment.<br /><br />This flag is set to "true" if the subscription is in the dunning state. In this case, check the <strong>status</strong> field to determine whether to grant the customer access to content:<br /><ul><li>If the <strong>status</strong> field is set to "Valid", the subscription is in a grace period and the viewer can access content.  </li><li>If the <strong>status</strong> field is set to "Invalid", the subscription is on hold and the viewer cannot access content. If the viewer adds a valid method of payment, the subscription will be automatically renewed and the status will become "Valid".</li></ul></td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>The item name (this name will also be set as the description).</td>
</tr>
<tr>
<td>productType</td>
<td>string</td>
<td>The product type (ex. "MonthlySub")</td>
</tr>
<tr>
<td>purchaseChannel</td>
<td>string</td>
<td>Indicates where the Roku Pay subscription purchase was made:<br /><ul><li><strong>web</strong>. Subscription was purchased from <a href="http://roku.com/">Roku.com</a> (for example, through [Instant Signup](doc:instant-signup) during the device activation).</li><li><strong>device</strong>. Subscription was purchased on the Roku device (through the on-device sign-up flow).</li></ul></td>
</tr>
<tr>
<td>purchaseContext</td>
<td>string</td>
<td>Indicates how the subscription purchase was made:<br /><ul><li><strong>isu</strong>. Subscription was purchased via [Instant Signup](doc:instant-signup).</li><li><strong>iap</strong>. Subscription was purchased via an in-application purchase.</li></ul></td>
</tr>
<tr>
<td>purchaseDate</td>
<td>string</td>
<td>The purchase date (<a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format)</td>
</tr>
<tr>
<td>purchaseId</td>
<td>string</td>
<td>The transaction ID</td>
</tr>
<tr>
<td>qty</td>
<td>integer</td>
<td>The quantity purchased</td>
</tr>
<tr>
<td>renewalDate</td>
<td>string</td>
<td>The subscription renewal date (<a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format)</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>Indicates whether the purchase is for a current subscription ("Valid") or for a subscription that has been canceled, expired, or terminated ("Invalid")</td>
</tr>
<tr>
<td>trialCost</td>
<td>integer</td>
<td>If the product uses introductory pricing, the discounted price.</td>
</tr>
<tr>
<td>trialQuantity</td>
<td>integer</td>
<td>If the product uses introductory pricing, the number of months the discounted pricing is applicable.</td>
</tr>
<tr>
<td>trialType</td>
<td>string</td>
<td>Set to "months" for all products. All products using introductory pricing use "months" as the unit of time for the trial.</td>
</tr>
</tbody>
</table>





### GetAllPurchases() as Void

#### Description

The **getAllPurchases** function is similar to the [**getPurchases** function](#getpurchases-as-void) except that it requests the historical list of all canceled, expired, and terminated subscriptions over the lifetime of the current user account—in addition to the active subscriptions. You can use this method to leverage purchase history in order to implement subscription renewal flows and more easily determine if subscriptions have expired.

If successful, a subsequent [roChannelStoreEvent](doc:rochannelstoreevent) will be received that contains an roList of roAssociativeArray items.

### SetOrder(order as Object, orderInfo as Object) as Void

#### Description

Sets the current Order (shopping cart) to the elements specified in the parameter, which must be an roList of roAssociativeArray items.<br /><br />Passing an empty roList clears the Order, like calling ClearOrder().

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>order</td>
<td>roList of roAssociativeArray items</td>
<td>Each roAssociativeArray in the roList contains the following fields: <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>code</td><td>String</td><td>The product identifier</td></tr><tr><td>qty</td><td>Integer</td><td>The quantity purchased</td></tr></tbody></table></td>
</tr>
<tr>
<td>orderInfo</td>
<td>roAssociativeArray</td>
<td>This parameter is used for subscription upgrades and downgrades. If it is not specified, the action is a product purchase. It contains the following fields: <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>action</td><td>String</td><td>The action to be performed, which may be one of the following: $\}action-list\}</td></tr></tbody></table><br /><strong>Example</strong> <pre><code><code>&lt;br&gt;m.store = CreateObject("roChannelStore")​&lt;br&gt;' Populate myOrderItems&lt;br&gt;myOrderInfo.action = "Upgrade"&lt;br&gt;m.store.setOrder(myOrderItems, myOrderInfo)&lt;br&gt;</code></code></pre><br />See [On-device upgrade and downgrade](doc:on-device-upgrade-downgrade#calling-the-roku-web-service-validate-transaction-api) for how to implement Roku Pay web services for upgrades/downgrades.</td>
</tr>
</tbody>
</table>






### ClearOrder() as Void

| Name    | Return Type    | Description                                                                   |
| ---------- | ---- | ----------------------------------------------------------------------------- |
| ClearOrder | Void | Clears the current Order (shopping cart). After this call, the Order is empty |

### DeltaOrder(code as Object, qty as Integer) as Integer

#### Description

Applies a change in quantity to one item in the current Order (shopping cart).

- If the item identified by code is not in the **Order**, it is added with the specified **qty**.
- If the item already exists in the **Order**, **qty** is added to the quantity of this item in the **Order**.

#### Parameters

| Name           | Type   | Description |
| -------------- | ------ | ----------------- |
| code |String | The product identifier. |
| qty | Integer | The quantity purchased. This may be a negative number. |

#### Return Type

The quantity of the item remaining in the Order after applying the change. If the returned value is zero or negative, the item is deleted from the Order.

### GetOrder() as Object

#### Description

Retrieves the current Order.

#### Return Value

The returned object is an roList of roAssociativeArray items, where each item contains the following parameter names with specified value type:

| Name           | Type   | Description |
| -------------- | ------ | ----------------- |
| code |String | The product identifier. |
| qty | Integer | The quantity purchased. |

### DoOrder() as Boolean

#### Description

Displays the Streaming Store Product Purchase Screen populated with information from the current Order.

The user can then either approve and complete the purchase, or cancel the purchase. In the case that the user approves, the app should wait for and respond to the roChannelStoreEvent.isRequestSucceeded event to get the details of the completed transaction.

#### Return Value

A flag indicating whether the user approved the order (true if the order was approved; false otherwise).

### FakeServer(enable as Boolean) as Void

It is recommended that developers use [billing testing](doc:billing-testing) instead of this method.

#### Description

This test mode short circuits communication to the Streaming Store. It makes other methods get their responses to async queries and operations from configuration files, rather than actual server communication.

> Do not call this method in a production app.

#### Parameters

| Name           | Type   | Description |
| -------------- | ------ | ----------------- |
| enable |Boolean | If enable is true, enables a test mode for the roChannelStore component. |

To use this test method, create a **csFake** folder and add the following XML files to it in order to simulate web service request and response data:

- **csfake/GetCatalog.xml**: Simulates the list of products available for purchase in the app.
- **csfake/GetPurchases.xml**: Simulates the list of products already purchased by the user.
- **csfake/PlaceOrder.xml**: Contains information about the product to be ordered.
- **csfake/CheckOrder.xml**: Verifies the validity of the order placed. For example, if the **order** and **id** values in the PlaceOrder and CheckOrder XML files do not match, the fake server will report an error in the order processing.

See the [SimpleChannelStore sample app](https://github.com/rokudev/samples/tree/master/roku%20pay/SimpleChannelStore) for how to use this testing method.

### GetUserData() as Object

#### Description

The GetUserData() function provides a way to request user authorization to share the user’s account information with the calling app.

The primary use case of this method is to facilitate partner account creation/updating within apps that have a customer billing relationship with Roku.

For example, a developer may have a Roku app that offers a VOD subscription to users. This subscription may require an account with the content provider. The GetUserData() method could be called to read the user’s account information in order to prepopulate an account registration screen.

#### Return Value

When called, the method presents a dialog screen containing the user’s account information, along with two buttons labeled Share and Don’t Share.

- If the user presses the **Cancel** button, GetUserData() returns invalid.
- If the user presses the **Continue** button, GetUserData() returns an roAssociativeArray containing the following Roku account information for the app user (all values are Strings):
  - firstname
  - lastname
  - email
  - street
  - city
  - state
  - zip
  - country
  - phone
  - birth ("YYYY-MM")
  - gender ("Male", "Female", or unspecified)

  > For authenticated free and AVOD apps that are not enrolled in the [Roku Partner Payouts Program](doc:partner-payouts), a limited set of account information is returned:
  >
  > - **Sign-up RFI screen**: email, phone, and zip.
  > - **Sign-in RFI screen**: email and phone.

### GetPartialUserData(properties as String, requestInfo as Object) as Object

#### Description

This function works like GetUserData(), but allows the caller to specify which user data elements to return. The specified values are also displayed in the user data dialog screen.

#### Parameters


<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>properties</td>
<td>String</td>
<td>A comma-separated list of the attribute names to be returned. For example, to return only the email address and first name of the user's account, you would call GetPartialUserData("email, firstname"). The full set of user account properties that can be queried with the function is:<br /><ul><li>firstname</li><li>lastname</li><li>email</li><li>street</li><li>city</li><li>state</li><li>zip</li><li>country</li><li>phone</li><li>birth</li><li>gender</li></ul></td>
</tr>
<tr>
<td>requestInfo<br /></td>
<td>roAssociativeArray</td>
<td>Specifies whether the RFI screen is used for customer sign-ups or sign-ins. This may be one of the following values:<br /><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>context</td><td>string</td><td>"signup"</td><td>Specifies the context of the RFI screen, which may be one of the following values:<br />$\}context-list\}<br />See the <a href="#sign-in-example">Sign-in example</a> for how to use this field.</td></tr></tbody></table></td>
</tr>
<tr>
<td>forceShowData</td>
<td>Boolean</td>
<td>If true, the RFI screen displays the values of the requested customer information to be shared with the app (for example, Jone Doe, <a href="mailto:bmsith@roku.com">j</a><a href="mailto:on.doe@emailaddress.com">on.doe@emailaddress.com</a>). <br /><br />By default, this flag is set to false, which means that the default RFI screen for the region is used. For example, in the US, the RFI screen displays the type of customer information being requested (email address, name, and so on).<br /><br />This flag has no effect if the context field is set to "signin" (the RFI sign-in screen always displays the customer information values). <br /><br /><strong>Example</strong>:<br /><pre><code><code>&lt;br&gt;&lt;br&gt;store = CreateObject("roChannelStore")&lt;br&gt;&lt;br&gt;' Doesn't show user data in dialog unless necessary in he user's region.&lt;br&gt;userData = store.GetPartialUserData("email,firstname,lastname,gender,birth")&lt;br&gt;' Show user data values in dialog.&lt;br&gt;userData = store.GetPartialUserData("email,firstname,lastname,gender,birth", \}context: "signup", forceShowData: true\})&lt;br&gt;' forceShowData currently has no effect in signin context, as the shared data is always shown.&lt;br&gt;userData = store.GetPartialUserData("email", \}context: "signin", forceShowData: false\})&lt;br&gt;</code></code></pre></td>
</tr>
</tbody>
</table>






#### Return Value

An roAssociativeArray containing the Roku account information passed in the method.

> For authenticated free and AVOD apps that are not enrolled in the [Roku Partner Payouts Program](doc:partner-payouts), a limited set of account information may be requested and returned:

- **Sign-up RFI screen**: email, phone, and zip.
- **Sign-in RFI screen**: email and phone.



#### Sign-up example

```
store = CreateObject("roChannelStore")

' Request user's email, phone, first name, and last name for sign-up
userData = store.GetPartialUserData("email, phone, firstname, lastname")
```

#### Sign-in example

```
store = CreateObject("roChannelStore")

' Request user's email for sign-in
userData = store.GetPartialUserData("email", \}context: "signin"\})
```

### GetUserRegionData() as Object



#### Description

Retrieves the state, zip code, and country associated with the customer's Roku account. The location information returned by this command can be used to determine a customer's eligibility for regional-specific subscription products and content.

#### Return Value

An associative array that contains the following fields:

| Field   | Type   | Description                                               |
| :------ | :----- | :-------------------------------------------------------- |
| state   | string | The state associated with the customer's Roku account.    |
| zip     | string | The zip code associated with the customer's Roku account. |
| country | String | The country associated with the customer's Roku account.  |

### StoreChannelCredData(data as String) as Object

#### Description

Stores an access token, oAuth token, or other authentication artifact that can be retrieved by calling the [GetChannelCred()](doc:ifchannelstore)method. This data is stored securely in the Roku cloud and can be retrieved by other devices linked to the same Roku account. <br /><br />This method can be used to store an authentication artifact with Roku for a signed in user, associating that user with a particular Roku account. For more information, see [Automatic Account Link](doc:universal-authentication-protocol-for-single-sign-on).

#### Parameters

| Name | Type   | Description                                                  |
| ---- | ------ | ------------------------------------------------------------ |
| data | String | An OAuth token, custom token, or other custom data to be stored. |

#### Return Value

This command returns an roAssociativeArray with the following values:


<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>response</td>
<td>json</td>
<td>A string in JSON format, with the following key-value pairs: <br /><table><thead><tr><th>Key</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td>string</td><td>The request status, which may be "success" or "failure".</td></tr><tr><td>error</td><td>string</td><td>A description of the error (if any). This will be set to "none" for a successful request.</td></tr><tr><td>error_detail</td><td>string</td><td>A detailed description of the service error (if any). This value will be null (uninitialized) for a successful request.</td></tr></tbody></table><br /><br />if billing is not enabled for the app, this field will include a string with a service error message.</td>
</tr>
<tr>
<td>status</td>
<td>Integer</td>
<td>An integer representing the request status. A successful request will return a status of 0.</td>
</tr>
</tbody>
</table>



### GetChannelCred() as Object

#### Description

Retrieves a Roku Partner Unique Customer Identifier (roku_pucid), or retrieves an access token, oAuth token, or other authentication artifact (channel_data).

#### Return Value

An associative array that contains the following fields:


<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channelID</td>
<td>string</td>
<td>The app ID (ex. "2213" for Roku Media Player)</td>
</tr>
<tr>
<td>errorCode</td>
<td>string</td>
<td>A description of the service error (if any). This will be an empty string for a successful request.</td>
</tr>
<tr>
<td>json</td>
<td>string</td>
<td>A string in JSON format, with the following key-value pairs: <table><thead><tr><th>Key</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>error</td><td>string</td><td>A string containing an error message (if any). This value will be <code>null</code> (uninitialized) for a successful request.</td></tr><tr><td>roku_pucid</td><td>string</td><td>This is an agnostic ID (in UUID format) representing the user. This value will be identical when retrieved in the same app across devices linked to the same Roku account.<br /><br />The PUCID can be used in place of requiring the user to enter their email address or username again (for example, when setting up a new device on the same Roku account).</td></tr><tr><td>token_type</td><td>string</td><td>Type of the returned token, e.g. <code>"urn:roku:pucid:token_type:pucid_token"</code></td></tr><tr><td>channel_data</td><td>string</td><td>The access token, oAuth token, or other authentication artifact stored in the Roku cloud.<br /><br />This field is not returned if the <a href="#storechannelcreddata">StoreChannelCredData</a> command is not used to store an artifact in the Roku cloud.</td></tr></tbody></table> <br />If the request fails, this json string will be empty.</td>
</tr>
<tr>
<td>publisherDeviceID</td>
<td>string</td>
<td>A unique identifier of the device.</td>
</tr>
<tr>
<td>status</td>
<td>integer</td>
<td>An integer representing the request status. A successful request will return a status of 0.</td>
</tr>
</tbody>
</table>



### GetDeviceAttestation(nonce as String) as String



Generates a signed JSON web token (JWT) in the Roku cloud and returns it to the app. This token can then be used by the publisher's web services to verify that a message originated from a genuine Roku device. The following example demonstrates how to generate the device attestation token:

```
store  = CreateObject("roChannelStore")
nonce = GetRandomHexString(16)
token = store.GetDeviceAttestation(nonce)
```

#### Parameters

| Name  | Type   | Description                                                  |
| :---- | :----- | :----------------------------------------------------------- |
| nonce | String | A random number used to generate the JWT token. This can be, for example, a hash of the user's account ID that can be verified by the publisher's services. |

#### Return Value

The generated JWT token. The following demonstrates a sample JWT that is returned to the app. Developers can use a [JWT debugger](https://jwt.io/#debugger-io) to decode this token.

```
eyJ4NXUiOiJodHRwczovL2V4YW1wbGUucm9rdS5jb20vc2FtcGxlY2VydCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJuYmYiOjE2NTYzNzQyNzQsIngtcm9rdS1hdHRlc3RhdGlvbi1kYXRhIjp7Im5vbmNlIjoiNUUwNjkyRTBBMzg5RjRGNiIsImNoYW5uZWxJZCI6ImRldiIsImRldmVsb3BlcklkIjoiY2FhNzNmYmI1ZTc1YTQ2YTRiNjExNGRlNTFhNWFkYTdkNjE2ZTJlZCIsInRpbWVzdGFtcE1zIjoxNjU2Mzc3ODczOTkwfSwiaXNzIjoidXJuOnJva3U6Y2xvdWQtc2VydmljZXM6ZGV2aWNlLWF0dGVzdGF0aW9uIiwiZXhwIjoxNjU2NDY0Mjc0fQ.nywDvSUys27oeaQZ3yXwNBfOnXbO-TUDuekOPZYjSssfZhNhWwRXvPLbJKHcNMR5Z0vFOQLVDFeqEVGauIMxMEke5UFLuCRxhr3ayBJJPt_BPfrEFbAvYjFEGdKkxJqYUhuFE38R8lU2k7dhO0iFxDw1Qq7W4w8_7CjmDy4YFf7IfyhV7Vf2kGiOx5C94Niw5N2td3s21F3z77Rq_bofQ51DOKIwo_cDVuvPQnDyxG-CNEydZKCZZwGPYCKEHMPrIOOXJ-S9ZjArgaEpBUpMXWJibFxnkpVUVzbC22GEaqz_SjOJXFMQU7TaCKkDeCYVKylgKwCvbvHRDlgogf7kqg

```

##### Verifying the JWT

To verify the JWT, developers must [download the Roku device attestation token certificate](https://devtools.web.roku.com/device_attestation_token_cert/RokuDeviceAttestationIntermediateCA.cert.pem) and authenticate that the token is signed by that certificate (see https://jwt.io/introduction for more information on JWT verification methods). The decoded JWT contains the following fields

##### Decoded JWT

The decoded JWT contains the following fields:

```
"x-roku-attestation-data": \}
    "nonce": "5E0692E0A389F4F6",
    "channelId": "dev",
    "developerId": "caa73fbb5e75a46a4b6114de51a5ada7d616e2ed",
    "timestampMs": 1656377873990
 \}
```

### RequestPartnerOrder(orderInfo as roAssociativeArray, productID as String) as Object

#### Description

Checks the user's billing status and is a prerequisite for ConfirmPartnerOrder() when doing transactional purchases.

#### Parameters


<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>orderInfo</td>
<td>roAssociativeArray</td>
<td>Specifies the product to be ordered from a TVOD app. The order contains the following fields:<br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>priceDisplay</td><td>string</td><td>The original price of the product.</td></tr><tr><td>price</td><td>string</td><td>The final price of the product, including any discounts.</td></tr><tr><td>title</td><td>string</td><td>A description of the product (for example, the name of a rental movie).</td></tr><tr><td>couponCode</td><td>string</td><td>An alphanumeric string entered by the customer to receive a discounted price on the product.</td></tr><tr><td>contentKey</td><td>string</td><td>The publisher-specific SKU (or other unique identifier) for the product.</td></tr></tbody></table></td>
</tr>
<tr>
<td>productID</td>
<td>String</td>
<td>The product identifier as entered on the Developer Dashboard when the product was created</td>
</tr>
</tbody>
</table>



#### Return Value

If the order is successful, an roAssociativeArray is returned that contains the following keys with string values:

* **id**.  This ID must be passed in the confirmOrderInfo parameter in ConfirmPartnerOrder() method.
* **status**. Success.
* **tax**. Cost of tax (if applicable).
* **total**. Total cost of transaction.


If the order fails, an roAssociativeArray is returned that contains the following keys with string values:

* **errorCode**. An error code representing why the transaction failed.
* **errorMessage**. An error message explaining why the transaction failed.
* **failed**. Failure.

### ConfirmPartnerOrder(confirmOrderInfo as roAssociativeArray, productID as String) as Object

#### Description

This function is equivalent to doOrder() for transactional purchases. The user's billing status must first be confirmed with RequestPartnerOrder() prior to calling this function.

#### Parameters


<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>confirmOrderInfo</td>
<td>roAssociativeArray</td>
<td>Confirms the product being ordered from a TVOD app. The order contains the following fields:<br /><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>orderId</td><td>string</td><td>The orderID generated by Roku, which is included in the roAssociativeArray returned by the <a href="#requestpartnerorderorderinfo-as-roassociativearray-productid-as-string-as-object">RequestPartnerOrder()</a> method.</td></tr><tr><td>priceDisplay</td><td>string</td><td>The original price of the product.</td></tr><tr><td>price</td><td>string</td><td>The final price of the product, including any discounts.</td></tr><tr><td>title</td><td>string</td><td>The name of the product to be displayed on customers' invoices.</td></tr><tr><td>couponCode</td><td>string</td><td>An alphanumeric string entered by the customer to receive a discounted price on the product.</td></tr><tr><td>contentKey</td><td>string</td><td>The publisher-specific SKU (or other unique identifier) for the product.</td></tr></tbody></table><br /><blockquote>The currency symbol may not be included in the <strong>price</strong> or <strong>priceDisplay</strong> values</blockquote>.</td>
</tr>
<tr>
<td>productID</td>
<td>String</td>
<td>The product identifier as entered on the Developer Dashboard when the product was created</td>
</tr>
</tbody>
</table>



#### Return Value

If the order is successful, an roAssociativeArray is returned that contains the following keys with string values:

* **purchaseId**.  The transaction ID..
* **status**. Success.


If the order fails, an roAssociativeArray is returned that contains the following keys with string values:

* **errorCode**. An error code representing why the transaction failed.
* **errorMessage**. An error message explaining why the transaction failed.
* **status**. Failure.