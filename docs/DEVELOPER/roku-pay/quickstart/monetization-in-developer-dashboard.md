---
title: Setting the monetization method
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
To add products to a subscription video on demand (SVOD) or transactional video on demand (TVOD) app that is implementing Roku Pay, you must specify which monetization methods your app will use: **subscriptions** and/or **one-time purchases**. This step is required when publishing apps to the Streaming Store; however, it is a best practice to set the monetization method directly after creating an app. This ensures that you can create in-app products without encountering any error messages in the Developer Dashboard.

> **Certification requirement**: Apps offering subscriptions and one-time purchases must [implement Roku Pay](doc:roku-pay) and adhere to all [Roku Pay certification requirements](doc:roku-pay-requirements). Per the [Roku Distribution Agreement](https://docs.roku.com/published/developerdistribution/en/us), paid applications must use Roku Pay; they  may not use any alternate billing service, direct customers to any alternative billing service(s), or encourage customers to purchase access to content other than through the Roku platform.
>
> To pass certification, SVOD and TVOD apps (and other subscription services) must complete sign-ups and sign-ins on-device, without having customers visit an external webpage. The sign-up and sign-in workflows may not include links to off-device promotional or marketing materials, nor may it utilize off-device sign-in mechanisms such as rendezvous linking.
>
> Apps must display the Request for Information (RFI) screen during the on-device sign-up and sign-in flows to enable customers to share their Roku customer account information with apps. Only if the user declines the request, may apps require the customer to manually enter their information.

## Monetization methods

To select the monetization methods for an app, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), select **Manage My Channels**, click **Preview and** **Update** on your test app, and then select **Monetization** from the drop-down list.

   If you have not created a test app yet, click **Add Channel**, select **Developer SDK**, mark the app as **public** or **beta**, enter an app name, and then select **Monetization** from the drop-down list.

2. Select one or more of the following options:

   ![roku815px - monetization-method.jpg](https://image.roku.com/ZHZscHItMTc2/monetization-method-v4c.png)

   * **Customers will pay before installing my channel (pay-to-install)**. Pay-to-install apps are typically only used on the Roku platform for games and screensavers. Pay-to-install apps are not typically used for SVOD apps—they do not enable customers to browse the content before installing the app, and they do not support free trial offers. See [In-app products](doc:in-channel-products) for more information on configuring these fields.

   * **My channel contains in-channel subscriptions (SVOD)**. The app includes a monthly or annual subscription offering. Select this option for SVOD apps. See **In-app products** for more information on creating subscription products.

     > If you select this check box, you must [implement Roku Pay](doc:roku-pay) in your app and adhere to all [Roku Pay certification requirements](doc:roku-pay-requirements).

   * **My channel contains in-channel one-time purchases (TVOD)**. The app offers transactional content such as movie rentals, sporting events, and pay-per-views. Select this option for TVOD-exclusive apps (app contains only transactional content) and SVOD apps that additionally offer one-time purchase products. See [Creating TVOD apps](doc:tvod-app-catalog) for more information on creating one-time purchase products in the **In-App Products** page.

     > If you select this check box, you must [implement Roku Pay](doc:roku-pay) in your app and adhere to all [Roku Pay certification requirements](doc:roku-pay-requirements).

3. Click **Save**. See [Publishing apps](doc:channel-publishing-guide) for more information on configuring additional app monetization methods.
