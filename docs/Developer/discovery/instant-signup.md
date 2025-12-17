---
title: Instant Signup
deprecated: false
hidden: false
metadata:
  robots: index
---
Apps using Roku Pay can participate in Roku's Instant Signup program to offer subscription services to customers when they activate their Roku devices. With Instant Signup, customers can subscribe to apps off-device with just a few clicks and then directly access content on the app without any additional steps.

{/* Example Usage */}
<RokuTable
  columns={[
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' }
  ]}
  data={[
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ]}
/>

Offers may include free trials, promotional pricing, and standard pricing (the user experience is tailored for each offer type; see [Appendix A](#appendix-a-instant-signup-user-experience) for examples):

* Free trials and promotions are automatically converted to full paid subscriptions by Roku Pay.
* Standard pricing may only be offered if the app does not offer free trials or promotional pricing on-device or across other comparable platforms.

> SVOD apps that have streamed more than an average of 10 million hours per month over the last three months (and new SVOD apps expected to meet the threshold shortly after launch) must participate in Roku’s Instant Signup program to pass [certification](/docs/developer-program/certification/certification.md#2-purchases).
>
> Apps' ISU integration must include offers for lapsed and canceled subscribers. This requirement is applicable to apps with existing ISU integrations.
>
> Apps must return a product offer to Roku for all current non-subscribers. This ensures that all non-subscribed customers receive a product offer on all touchpoints. This helps drive subscription sign-ups, particularly for lapsed and cancelled customers.

## Overview

When a customer activates their Roku device on my.roku.com, they add their method of payment and then answer survey questions. These questions include which subscriptions they already have and which types of content they are interested in watching.

Roku checks for which offers the customer is eligible (customers that already have a subscription for a specific service are ineligible for free trial offers for that service). Apps leverage a [SHA-512 hashed email address](#using-email-hashes-to-determine-offer-eligibility) included in [API](#implementing-products-api) calls to the app's product endpoint to determine whether customers are eligible for their offers. Roku then retrieves the app's content images and trial products from the publishers' app images and products endpoints, respectively.

Based on the answers to the survey questions, the customer's eligibility, and other signals, a list of offers from different apps is displayed to customers. For example, if a customer selects music as one of their interests, their offers will likely include a music streaming service (the inclusion of an app in the list, however, cannot be guaranteed; the recommended apps are derived solely from the survey responses). The customer can then select which apps they subscribe to and then select specific offers.

<Image alt="roku400px - isu-sample-streambox" border={false} src="https://image.roku.com/ZHZscHItMTc2/streambox-free-trial.jpg" />

> Once an offer is presented to a customer and they select it and confirm the transaction, apps must honor the terms of the offer, regardless if the customer is actually eligible for the offer. To determine customers' offer eligibility, you must use the [SHA-512 email hash](#using-email-hashes-to-determine-offer-eligibility) passed in the [products API](#implementing-products-api) calls.

Once the customer confirms the transaction, the publisher's account endpoint receives the customer's information via a [push notification](/docs/developer-program/roku-pay/implementation/push-notifications.md#sale) from the Roku Pay web services. This enables the publisher to create a user account in their backend system for the customer automatically.

After the transaction is completed, the app is automatically added to the home screen of the customer's Roku devices. When the customer launches the app, they can directly access content without any additional steps—if the publisher has created a user account for them. If the publisher has not created a user account for the customer upon app launch, the app must use the alternative account creation method of calling the [ChannelStore](/docs/references/scenegraph/control-nodes/channelstore.md) APIs to validate the customer's subscription, get their information, and store access tokens in the device registry and in the Roku cloud.

<Image alt="instant-signup-workflow" border={false} src="https://image.roku.com/ZHZscHItMTc2/instant-signup-workflow-v7a.jpg" />

## Prerequisites

Apps must have completed the following integrations to participate in Roku Instant Signup:

* **[Roku Pay](/docs/developer-program/roku-pay/implementation/overview.md)**. Enable Roku to create trial subscriptions and handle billing for auto-renewals on app.

* [**Roku Pay Web Service API push notifications**](/docs/developer-program/roku-pay/implementation/push-notifications.md). Receive personal information granted by customers to create user accounts on their behalf automatically.

* **[On-device authentication](/docs/developer-program/authentication/on-device-authentication.md)**. Validate subscriptions activated through Roku Pay before granting customers access to content.

* **[Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md)**. Automatically sign customers in when they activate additional Roku devices linked to their same Roku account.

## Getting started

To get started with the Instant Signup integration, follow these steps:

1. Verify that your app meets the listed [prerequisites](#prerequisities).

2. Contact the <Anchor label="Roku Partner Success team" title="https://developer.roku.com/contact" href="https://developer.roku.com/contact">Roku Partner Success team</Anchor>. They will determine whether your app is eligible for Instant Signup.

3. Build the required metadata and products APIs.  See [Integrating Instant Signup](#integrating-instant-signup) for more information on the requirements for these APIs.

4. If you plan on using the SHA-512 email hashes included in the products API calls to determine customers' offer eligibility, verify that your user account lookup tables include the SHA-512 email hashes and implement logic to return offers based on the products (if any) already associated with the hash. See [Using email hashes to determine offer eligibility](#using-email-hashes-to-determine-offer-eligibility) for more information.

5. Provide Roku with the following:
   * The production image and product API endpoints (these production URLs are final and may not be changed once provided).
   * The app ID for the beta version of the app.
   * The app's [Roku Pay API Key](https://developer.roku.com/api/settings), which is used to sign and verify API calls.
   * The title, company name, privacy URL, and terms URL to be included in the legal disclaimer text that is displayed directly before the customer signs up for an offer.

## Integrating Instant Signup

Apps must complete the following steps (in addition to completing the [prerequisites](#prerequisites)) to integrate into Roku Instant Signup:

* **Implement images and metadata API**: Apps must provide an **images** endpoint that Roku can call to get the app image and any other metadata related to the content on the app.

* **Implement personalized product display API**: Apps must provide a **products** endpoint that Roku can call to get the offer to be displayed to the customer.

* **Create user accounts**: User accounts must be created before customers can access content; therefore, apps must implement additional account creation logic. User accounts can be created automatically after the customer activates a subscription and upon the user launching the app.

  > It is recommended that both the **images** and **products** APIs use the same domain (for example, [https://mychannel.com/api/offers/rsb/images](https://mychannel.com/api/offers/rsb/images) and [https://mychannel.com/api/offers/rsb/products](https://mychannel.com/api/offers/rsb/products)).

### Implementing images API

Apps must implement an API that retrieves the images and description of the app to be displayed to customers. The following table lists the requirements for implementing the Images API:

<HTMLBlock>{`
<td><strong>Response</strong></td>
<td>The API returns the following:<br/><br/>- An <strong>images</strong> array. This array contains between 5 to 15 image URLs specifying the app content posters to be displayed. The first image returned must be the app logo (a 160X120 JPG with 72ppi minimum resolution). Other images must be 213X120 JPG with 72ppi minimum resolution, per the <a href="#channel-image-specifications">Image specifications</a>.<br/><br/>- A <strong>description</strong> string. This is a maximum 200-character string summarizing the app. The description may not include any pricing information. <br/><br/><strong>Syntax</strong>:<br/><strong>Example</strong>: </td>
</tr>
<tr>
<td><strong>Error</strong></td>
<td></td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

<br />

#### Image specifications

The images used for the app must meet the requirements for width, height, minimum resolution, and format.

| Specification      | Requirement |
| ------------------ | ----------- |
| Width              | 213px       |
| Height             | 120px       |
| Minimum resolution | 72ppi       |
| File format        | JPG         |

#### Poster/artwork specifications

The posters/artwork with the content or networks featured in the app are used to highlight the app's offerings. The posters/artwork must meet the following requirements:

<Table>
  <thead>
    <tr>
      <th>
        Specification
      </th>

      <th>
        Requirements
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        File format
      </td>

      <td>
        JPG
      </td>
    </tr>

    <tr>
      <td>
        Aspect ratio
      </td>

      <td>
        4:3

        * **Content-oriented apps** (apps that promote movies, TV shows, music, and other content): A minimum of 10 posters must be included with an offer.
        * **vMVPD apps** (apps that promote multiple networks/channels): A minimum of 5 artwork images must be included with an offer.

        <BlockQuote>
          <div>Don't do whatever you're thinking about doing</div>
        </BlockQuote>

        <RokuTable
          columns={[
                            { header: 'Name', accessor: 'name' },
                            { header: 'Email', accessor: 'email' },
                            { header: 'Role', accessor: 'role' }
                          ]}
          data={[
                            { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
                            { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
                            { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
                          ]}
        />
      </td>
    </tr>

    <tr>
      <td>
        Licensing
      </td>

      <td>
        Posters/artwork must be licensed for usage. Dates that posters may be used must be specifi
      </td>
    </tr>
  </tbody>
</Table>

<br />

> The displaying of up-to-date content images in the device activation workflow may be delayed because of Roku's caching and approval policy.

### Implementing products API

Apps must implement an API that retrieves the product offers to be displayed to the customer when they click an app image. Apps may return offers for up to three unique products (for example, for example, an ad-supported plan, monthly limited-ads plan, and monthly premium ad-free plan). Apps may not return different offers for the same product (for example, returning 7-day and 30-day free trials for the same product is not allowed).

Each product will include its associated name and description, which were entered in the **Product Name** field on the [**Manage In-app Products** page](/docs/developer-program/roku-pay/quickstart/in-channel-products.md) within the Developer Dashboard.

> To change the product offers that are displayed to customers, apps must contact the <Anchor label="Roku Partner Success team" title="https://developer.roku.com/contact" href="https://developer.roku.com/contact">Roku Partner Success team</Anchor> before making any updates.
>
> ***
>
> Apps can use the [ChannelStore.GetCatalog](/docs/references/scenegraph/control-nodes/channelstore.md#getcatalog) command to get a list of products associated with the app, including whether a free trial period or introductory pricing is offered.

The following table lists the requirements for implementing the personalized product display API:

<br />
