---
title: Monetization
excerpt: 'Explore monetization options including ads, subscriptions, and Roku Pay payouts'
deprecated: false
hidden: false
metadata:
  title: 'Monetization | Roku Developer Docs'
  description: 'Overview of monetization on the Roku platform for app developers and content publishers, including video advertisements, subscriptions, in-app purchases, and publisher payouts.'
  robots: index
next:
  description: ''
---
Whether you build a Roku app or distribute your content on The Roku Channel, there are many ways to monetize your content on the Roku platform, including video advertisements, subscriptions, and in-app purchases. A primary goal for the Roku Publishing Platform is to share this revenue with our partners.

## Monetization terms and options

Publishers can monetize their content in a variety of ways, depending on their business models and how they distribute.

* **Ad-supported content:** Content can be monetized with video advertisements. For apps, this is accomplished by entering an inventory split with Roku by default. On The Roku Channel, free ad-supported content is available through the ad-supported (AVOD) and free ad-supported streaming TV (FAST) models. For more information about Roku's ad monetization options, see our document on monetizing with [video advertisements](doc:video-advertisements).
* **Subscriptions and transactions:** Publishers can offer paid access to content through subscriptions or purchases.
  * **In your own app.** A transactional app is any app that requires payment to install, or that monetizes through subscriptions or in-app purchases. Apps can enter into a revenue share program with Roku, in which the app receives 80% of net revenue (net of credits, refunds, and so on), while Roku retains 20%.
  * **On The Roku Channel.** Publishers can offer premium subscriptions on The Roku Channel. See the [Roku Content Partner Portal](doc:roku-content-partner-portal) documentation.

For apps, Roku manages the billing, ad reports, and payment processing. Detailed terms of the monetization options outlined above are available in the Commercial Terms Exhibit of the [Roku Distribution Agreement](https://docs.roku.com/doc/developerdistribution/en-us).

## Aspects of monetization

Several important aspects of monetization are covered by separate articles in this section:

* **[Video advertisements](doc:video-advertisements)**: Publishers can run ads on their content, receiving revenue according to terms for which they are eligible and approved by Roku. This article discusses the available terms and revenue models. It also examines, at a high level, a publisher's obligations and responsibilities for implementing an ad-supported app.
* [**Subscriptions and one-time purchases**](doc:billing): Transactional apps use Roku Pay, Roku's proprietary billing platform, for offering viewers subscriptions and one-time purchases such as movie rentals, sporting events, and pay-per-views. This article provides an overview of Roku Pay and explains how it helps publishers drive content monetization.
* [**Publisher payouts**](doc:payouts): In order to receive payments from Roku, a publisher must sign up for the Roku Partner Payouts Program. This article covers the payout methods, payment schedules for apps and The Roku Channel, and the available options for payment method. It also includes a FAQ section, which answers miscellaneous questions about the Roku Partner Payouts Program and the payment process.
* [**Enrolling in the Roku Partner Payouts Program**](doc:partner-payouts): Step-by-step instructions for entering your payout method and tax information. If you have not yet created your account, start with [Set up your Roku account](doc:account-setup).

In addition, publishers can monitor their monetization activity in the tools for each distribution path:

* **Apps:** Use the [reports that are available through the Developer Dashboard](doc:analytics), including [Sales Activity](doc:sales-activity-report) and [Transaction details](doc:transaction-report).
* **The Roku Channel:** Use the [analytics in the Roku Content Partner Portal](doc:roku-content-partner-portal-analytics).

## Privacy law compliance

Regional privacy law can affect how or whether video advertisements can be served to viewers. When programming is aimed at children, for instance, Roku considers it to be a "children's app," subject to a variety of laws, most notably COPPA (the Children's Online Privacy Protection Act) in the United States. Similarly, _any_ content that is made available in European countries (whether aimed at children or not) is subject to the European Union's GDPR (General Data Protection Regulation).

Apps that have been custom built using Roku's SDK may serve ads through their own (or third-party) servers, subject to [Roku Certification Requirements](doc:certification-overview). This must always be done in a way, however, which complies with applicable regional law, including relevant privacy laws.

For more on custom built apps, see the overview of Roku's [two models for app development](doc:channel-development-models).

For additional information regarding compliance considerations, review Roku's [compliance](doc:legal) summary.
