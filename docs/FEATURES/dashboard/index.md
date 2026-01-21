---
title: Developer Dashboard
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
The [Developer Dashboard](http://developer.roku.com/dev/dashboard) serves as the central control center from which a developer can manage apps, Roku Pay products, or search feeds, as well as view analytics and enroll in the partner payouts program.

## My channels

The **My channels** section provides easy access to recently updated apps, enabling developers to quickly click into their most high-touch projects.

<Image alt="roku815px - My channels screen shot" border={false} src="https://image.roku.com/ZHZscHItMTc2/My-Channels.png" />

Clicking on any of these apps will take the user to the Preview & Publish page for the app, from which they can edit the app metadata. Refer to [App publishing](doc:channel-publishing-guide) for information on managing app settings.

## Scheduled releases

The **Scheduled releases** section of the main panel lists app releases, product updates, or offers that were previously scheduled by the developer, ordered by date.

<Image alt="roku815px - Scheduled releases screen shot" border={false} src="https://image.roku.com/ZHZscHItMTc2/Scheduled-Releases.png" />

For an overview on in-app products, promotions, and product groups, see [Adding in-channel products](doc:in-channel-products).

## What's new

The **What's new** section highlights important Roku platform news such as platform policy changes, app certification updates, and app publishing blackout dates.

<Image alt="roku815px - What's new screen shot" border={false} src="https://image.roku.com/ZHZscHItMTc2/Whats-New.png" />

# Additional topics

In addition to the utilities found on the Developer Dashboard itself, developers can also navigate to several additional tools from the left-hand navigation menu of the Developer Dashboard.

### Channel

The app section allows developers to manage their apps, Streaming Store listings, and Roku Search feed configurations.

* **My channels –** This is where developers can create new apps or update existing apps. Here, developers can configure an app's settings, Streaming Store metadata listing, or update new application packages. Read the documentation on [App publishing](doc:channel-publishing-guide) for information.
* **Search feeds –** The search feed validator allows developers to submit a search feed URL to Roku, in order to begin the process of integrating their apps into Roku Search. Read the documentation on [Implementing Roku Search](doc:implementing-search) for more information.

### Monetization

The monetization section provides essential tools for Roku Pay, including the ability to configure your Roku Pay products, offers, web services, and test users.

* **Product catalog –** This is the primary page for creating new in-app products for purchases in apps using Roku Pay, as well as their corresponding offers and intro pricing deals. Read the documentation on [Adding in-channel products](doc:in-channel-products) for more information.

* **Test users –** Here, developers can manage any Roku accounts that should have "test user" permissions for their apps, meaning these users will not be charged for any products they purchase within the designated app using Roku Pay. A valid payment method is required but purchases will not be charged. Read the documentation on [Creating test users](doc:test-users) for more information.

* **Roku Pay Web Services –** Enables developers to configure:

  * the security key, and an allowed source IP address range, to be used when making Roku Pay billing API calls
  * the endpoint for an entitlement server to receive push notifications from Roku Pay related to transactions such as credits, sales, refunds, and cancellations.

  Read the documentation on [Setting up Roku Pay web services](doc:setting-up-web-services) for more information.

### Financial reports

The financial reports section makes available Roku Pay reports, containing information about the various transactions customers make within a developer's apps. The reports include information such as product purchases, free trial activations, and cancellations. Summarized payout reports are also provided.

* **Transaction Reporting –** This report generates a list of transactions in various spreadsheet formats, covering transactions across multiple apps. Refer to the [Transaction Report](doc:transaction-report) article for full information.
* **Sales activity –** This report allows report generation; use the filters to focus on particular time periods and data types of interest. Refer to the [Sales Activity Report](doc:sales-activity-report) article for details.
* **Payout reporting –** This report generates a Payout Audit Report in real time. Refer to the [Payout Audit Report](doc:payout-audit-report) article for more information.

### Engage

This section provides tools that enable developers to promote their apps to Roku end-users to help grow their audience and drive engagement.

* **Display ads –** Developers can use [Roku's self-serve promotion tool](https://admanager.roku.com/) to programmatically purchase Roku home screen banner ads, Roku screensaver ads, and video ads in order to reach users across the Roku platform. Refer to the [documentation](doc:self-serve-promotions) article for more information.

### Account

The Account section to is used to configure personal and business account information, share payout information with Roku so you can collect revenues due to you, and grant account access to other users.

* **Developer information –** Use this page to manage your basic developer account information, as the developer name displayed on apps you own in the Streaming Store, or your address and legal contact information.
* **Payment settings –** This is where developers can enroll in the Roku Partner Payouts Program, which enables your account for remittances and payments. Refer to the [Publisher Payouts](doc:payouts) article for more information.
* **User access –** Developers can grant additional users access to manage elements of their account from this page, as well as configure the exact access permissions these third-party enjoy. Refer to [User access management in the Developer Dashboard](doc:user-access-management) for instructions on user setup.
* **Switch accounts –** Developers that have been granted access to manage someone _else_'s account must use this page to switch between the various accounts. Refer to [User access management in the Developer Dashboard](doc:user-access-management) for details on how to switch accounts.
* **RokuTV CA –** The RokuTV Certification Authority page provides the RokuTV Certification Authority (CA) client-side certificate used in SSL/TLS-based secure transactions. The certificate can be copied and pasted as text, or downloaded as a text file.