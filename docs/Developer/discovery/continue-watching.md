---
title: Continue Watching
deprecated: false
hidden: false
metadata:
  robots: index
---
<HTMLBlock>{`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Instant Signup</title>
    <style>
        /* Basic styling for readability, mimicking a document format */
        body { font-family: sans-serif; line-height: 1.6; margin: 0 auto; max-width: 900px; padding: 20px; }
        h1, h2, h3, h4 { border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 25px; }
        blockquote { border-left: 5px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px; background-color: #f9f9f9; }
        pre, code { background-color: #eee; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
        pre { padding: 10px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
        th { background-color: #f2f2f2; }
        .image-container { text-align: center; margin: 20px 0; }
        /* Style for the fixed subscription terms text */
        .subscription-terms { white-space: pre-wrap; background-color: #fcf8e3; border: 1px solid #f0ad4e; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>

    <h1 id="instant-signup">Instant Signup</h1>

    <p>Apps using **Roku Pay** can participate in Roku's **Instant Signup** program to offer subscription services to customers when they activate their Roku devices. With Instant Signup, customers can subscribe to apps off-device with just a few clicks and then directly access content on the app without any additional steps.</p>

    <p>Offers may include **free trials**, **promotional pricing**, and **standard pricing** (the user experience is tailored for each offer type; see <a href="#appendix-a-instant-signup-user-experience">[Appendix A]</a> for examples):</p>
    <ul>
        <li>Free trials and promotions are automatically converted to full paid subscriptions by Roku Pay.</li>
        <li>Standard pricing may only be offered if the app does not offer free trials or promotional pricing on-device or across other comparable platforms.</li>
    </ul>

    <blockquote>
        <p>SVOD apps that have streamed more than an average of 10 million hours per month over the last three months (and new SVOD apps expected to meet the threshold shortly after launch) must participate in Roku’s Instant Signup program to pass <a href="/docs/developer-program/certification/certification.md#2-purchases">certification</a>.</p>
        <p>Apps' ISU integration must include offers for lapsed and canceled subscribers. This requirement is applicable to apps with existing ISU integrations. </p>
        <p>Apps must return a product offer to Roku for all current non-subscribers. This ensures that all non-subscribed customers receive a product offer on all touchpoints. This helps drive subscription sign-ups, particularly for lapsed and cancelled customers.</p>
    </blockquote>

    <hr>

    <h2 id="overview">Overview</h2>

    <p>When a customer activates their Roku device on my.roku.com, they add their method of payment and then answer survey questions. These questions include which subscriptions they already have and which types of content they are interested in watching.</p>

    <p>Roku checks for which offers the customer is eligible (customers that already have a subscription for a specific service are ineligible for free trial offers for that service). Apps leverage a <a href="#using-email-hashes-to-determine-offer-eligibility">SHA-512 hashed email address</a> included in <a href="#implementing-products-api">API</a> calls to the app's product endpoint to determine whether customers are eligible for their offers. Roku then retrieves the app's content images and trial products from the publishers' app images and products endpoints, respectively.</p>

    <p>Based on the answers to the survey questions, the customer's eligibility, and other signals, a list of offers from different apps is displayed to customers. For example, if a customer selects music as one of their interests, their offers will likely include a music streaming service (the inclusion of an app in the list, however, cannot be guaranteed; the recommended apps are derived solely from the survey responses). The customer can then select which apps they subscribe to and then select specific offers.</p>

    <div class="image-container">
        <img src="https://image.roku.com/ZHZscHItMTc2/streambox-free-trial.jpg" alt="roku400px - isu-sample-streambox">
    </div>

    <blockquote>
        <p>Once an offer is presented to a customer and they select it and confirm the transaction, apps must honor the terms of the offer, regardless if the customer is actually eligible for the offer. To determine customers' offer eligibility, you must use the <a href="#using-email-hashes-to-determine-offer-eligibility">SHA-512 email hash</a> passed in the <a href="#implementing-products-api">products API</a> calls.</p>
    </blockquote>

    <p>Once the customer confirms the transaction, the publisher's account endpoint receives the customer's information via a <a href="/docs/developer-program/roku-pay/implementation/push-notifications.md#sale">push notification</a> from the Roku Pay web services. This enables the publisher to create a user account in their backend system for the customer automatically.</p>

    <p>After the transaction is completed, the app is automatically added to the home screen of the customer's Roku devices. When the customer launches the app, they can directly access content without any additional steps—if the publisher has created a user account for them. If the publisher has not created a user account for the customer upon app launch, the app must use the alternative account creation method of calling the <a href="/docs/references/scenegraph/control-nodes/channelstore.md">ChannelStore</a> APIs to validate the customer's subscription, get their information, and store access tokens in the device registry and in the Roku cloud.</p>

    <div class="image-container">
        <img src="https://image.roku.com/ZHZscHItMTc2/instant-signup-workflow-v7a.jpg" alt="instant-signup-workflow">
    </div>

    <hr>

    <h2 id="prerequisites">Prerequisites</h2>

    <p>Apps must have completed the following integrations to participate in Roku Instant Signup:</p>
    <ul>
        <li><strong><a href="/docs/developer-program/roku-pay/implementation/overview.md">Roku Pay</a></strong>. Enable Roku to create trial subscriptions and handle billing for auto-renewals on app.</li>
        <li><a href="/docs/developer-program/roku-pay/implementation/push-notifications.md"><strong>Roku Pay Web Service API push notifications</strong></a>. Receive personal information granted by customers to create user accounts on their behalf automatically.</li>
        <li><a href="/docs/developer-program/authentication/on-device-authentication.md"><strong>On-device authentication</strong></a>. Validate subscriptions activated through Roku Pay before granting customers access to content.</li>
        <li><a href="/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md"><strong>Automatic Account Link</strong></a>. Automatically sign customers in when they activate additional Roku devices linked to their same Roku account.</li>
    </ul>

    <hr>

    <h2 id="getting-started">Getting started </h2>

    <p>To get started with the Instant Signup integration, follow these steps:</p>
    <ol>
        <li>Verify that your app meets the listed <a href="#prerequisities">prerequisites</a>.</li>
        <li>Contact the <a href="https://developer.roku.com/contact">Roku Partner Success team</a>. They will determine whether your app is eligible for Instant Signup.</li>
        <li>Build the required metadata and products APIs. See <a href="#integrating-instant-signup">Integrating Instant Signup</a> for more information on the requirements for these APIs.</li>
        <li>If you plan on using the SHA-512 email hashes included in the products API calls to determine customers' offer eligibility, verify that your user account lookup tables include the SHA-512 email hashes and implement logic to return offers based on the products (if any) already associated with the hash. See <a href="#using-email-hashes-to-determine-offer-eligibility">Using email hashes to determine offer eligibility</a> for more information.</li>
        <li>Provide Roku with the following:
            <ul>
                <li>The production image and product API endpoints (these production URLs are final and may not be changed once provided).</li>
                <li>The app ID for the beta version of the app.</li>
                <li>The app's <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a>, which is used to sign and verify API calls.</li>
                <li>The title, company name, privacy URL, and terms URL to be included in the legal disclaimer text that is displayed directly before the customer signs up for an offer.</li>
            </ul>
        </li>
    </ol>

    <hr>

    <h2 id="integrating-instant-signup">Integrating Instant Signup</h2>

    <p>Apps must complete the following steps (in addition to completing the <a href="#prerequisites">prerequisites</a>) to integrate into Roku Instant Signup:</p>
    <ul>
        <li><strong>Implement images and metadata API</strong>: Apps must provide an **images** endpoint that Roku can call to get the app image and any other metadata related to the content on the app.</li>
        <li><strong>Implement personalized product display API</strong>: Apps must provide a **products** endpoint that Roku can call to get the offer to be displayed to the customer.</li>
        <li><strong>Create user accounts</strong>: User accounts must be created before customers can access content; therefore, apps must implement additional account creation logic. User accounts can be created automatically after the customer activates a subscription and upon the user launching the app.</li>
    </ul>

    <blockquote>
        <p>It is recommended that both the **images** and **products** APIs use the same domain (for example, https://mychannel.com/api/offers/rsb/images and https://mychannel.com/api/offers/rsb/products).</p>
    </blockquote>

    <h3 id="implementing-images-api">Implementing images API</h3>

    <p>Apps must implement an API that retrieves the images and description of the app to be displayed to customers. The following table lists the requirements for implementing the Images API:</p>

    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Endpoint</strong></td>
                <td>/api/offers/rsb/images</td>
            </tr>
            <tr>
                <td><strong>Method</strong></td>
                <td>GET</td>
            </tr>
            <tr>
                <td><strong>Header</strong></td>
                <td>The HTTP header of the GET requests includes a JSON Web Token (JWT) for verifying that the API call is from Roku and the customer's locale for determining which offer image to display to the customer. <br/>
                    <strong>Header Table Details</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Authorization: Bearer</td>
                                <td>String</td>
                                <td>A JWT token that enables apps to verify that API calls are from Roku. The JWT is signed with the partner's <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a> using the <a href="https://tools.ietf.org/html/rfc7518#section-3.2">HS512 (HMAC using SHA-512)</a> algorithm. To generate the JWT, use the following algorithm, payload, and secret key:<br/><br/>- **Algorithm**: HS512. <br/><br/>- **Payload**:
<pre><code>{
"iss": "roku_instant_signup",
"sub": "instant_signup_metadata",
"exp": 1616010343,
"aud": "roku_developers",
"iat": 1616006743
}
</code></pre>
The \`exp\` field should be 1 hour from the current time (in epoch unix timestamp format), and the \`aud\` field is the app name.
<br/>- **Secret key**: <a href="https://developer.roku.com/api/settings">Roku Pay API Key</a> (see the following <a href="/docs/developer-program/roku-pay/quickstart/setting-up-web-services.md#roku-pay-api-key">document</a> for more information).<br/><br/>Apps can use <a href="https://jwt.io/">JWT debugger</a> or other online tool to verify generated JWTs.</td>
                            </tr>
                            <tr>
                                <td>locale</td>
                                <td>String</td>
                                <td>The location of the customer in language-country format (en-us or es-mx, for example).</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td><strong>Response</strong></td>
                <td>The API returns the following:<br/><br/>- An **images** array. This array contains between 5 to 15 image URLs specifying the app content posters to be displayed. The first image returned must be the app logo (a 160X120 JPG with 72ppi minimum resolution). Other images must be 213X120 JPG with 72ppi minimum resolution, per the <a href="#channel-image-specifications">Image specifications</a>.<br/><br/>- A **description** string. This is a maximum 200-character string summarizing the app. The description may not include any pricing information. <br/><br/>**Syntax**:<pre><code>  {
    "images": "Array.&lt;String&gt;",
    "description": "string"
  }
  </code></pre><br/>**Example**: <pre><code>  {
    "images": [ "https://myChannelImage/item1.jpg",  
                "https://myChannelContentPosterImages/item2.jpg",
                "https://myChannelContentPosterImages/item3.jpg"],
    "description": "Your favorite movies from your favorite decade"            
  }
  </code></pre>
                </td>
            </tr>
            <tr>
                <td><strong>Error</strong></td>
                <td>
                    <ul>
                        <li>200: OK</li>
                        <li>400: Bad request</li>
                        <li>500: Error</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <h4 id="channel-image-specifications">Image specifications</h4>

    <p>The images used for the app must meet the requirements for width, height, minimum resolution, and format.</p>
    <table>
        <thead>
            <tr>
                <th>Specification</th>
                <th>Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Width</td>
                <td>213px</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>120px</td>
            </tr>
            <tr>
                <td>Minimum resolution</td>
                <td>72ppi</td>
            </tr>
            <tr>
                <td>File format</td>
                <td>JPG</td>
            </tr>
        </tbody>
    </table>

    <h4 id="posterartwork-specifications">Poster/artwork specifications</h4>

    <p>The posters/artwork with the content or networks featured in the app are used to highlight the app's offerings. The posters/artwork must meet the following requirements:</p>
    <table>
        <thead>
            <tr>
                <th>Specification</th>
                <th>Requirements</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>File format</td>
                <td>JPG</td>
            </tr>
            <tr>
                <td>Aspect ratio</td>
                <td>4:3<br/>- **Content-oriented apps** (apps that promote movies, TV shows, music, and other content): A minimum of 10 posters must be included with an offer.<br/>- **vMVPD apps** (apps that promote multiple networks/channels): A minimum of 5 artwork images must be included with an offer.</td>
            </tr>
            <tr>
                <td>Licensing</td>
                <td>Posters/artwork must be licensed for usage. Dates that posters may be used must be specified</td>
            </tr>
`}</HTMLBlock>

<br />
