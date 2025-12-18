---
title: Billing Testing
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

# Enabling billing testing

Developers can designate one public or beta app for "billing testing" to observe output from the SceneGraph ChannelStore node in the debug console when the app is sideloaded. The billing testing feature provides developers with visibility into the confirmations, error codes, and other transactional metadata related to purchases made with Roku Pay.

When an app enabled for "billing testing" is sideloaded, calls to the ChannelStore node will use the product catalog associated with that app. Developers should therefore upload a package file that reflects the actual app being tested. This is because the product catalog of the app designated for "billing testing" is always returned regardless of the actual UI or behavior the package that is sideloaded.

> Sideloaded "billing testing" apps make live calls to the ChannelStore node and thus generate actual billing transactions. Developers must therefore add themselves as Test Users to the "billing testing" app to avoid incurring any billing charges while testing the app.

> To use an app for billing testing:
>
> - The app must be the only one in the developer's account designated for billing testing.
> - The "billing testing" app may only be used by the [root account user](/docs/features/dashboard/user-access-management.md).
> - The [root account user](/docs/features/dashboard/user-access-management.md) must be designated as a Test User.
> - The Test User's Roku account must be linked to the Roku device on which the app is sideloaded.
> - The app must be sideloaded on the Roku device.

## Enabling billing testing with new app publishing workflow

To enable billing testing on an app with the new app builder UI, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), click **Public apps** or **Beta apps** for whichever app type you want to use for billing testing. You can only use one public or beta app at a time for billing testing.


2. Confirm that no other app is currently being used for billing testing. An app designated for billing testing is a tagged with a "Billing Test" label and it is listed at the top.

   ![roku815px - stop-billing-testing](https://image.roku.com/ZHZscHItMTc2/billing-testing-enabled-label.png)


3. If another app is being used for billing testing, click the shortcut menu for the app to the right, and then click **Stop using for billing testing**.

   ![roku815px - stop-billing-testing](https://image.roku.com/ZHZscHItMTc2/billing-testing-stop-blilling-testing.png)


4. Click the shortcut menu for the app to be used for billing testing and then click **Use for billing testing**.

   ![roku815px - stop-billing-testing](https://image.roku.com/ZHZscHItMTc2/billing-testing-enable.png)


5. The selected app is tagged with the "Billing Test" label and is ready to be used for testing.

   ![roku815px - stop-billing-testing](https://image.roku.com/ZHZscHItMTc2/billing-testing-enable-label.png)

## Enabling billing testing with legacy app publishing workflow

To enable billing testing on an app with the legacy app builder UI, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), select **My Channels**.

   ![roku815px - manage-my-channels](https://image.roku.com/ZHZscHItMTc2/manage-my-channels-v2a.png)


2. Confirm that no other apps are currently being used for billing testing ("designated for billing testing" is displayed in the app summary if billing testing is enabled on an app). If another app is being used for billing testing, click **Options** to the right of the app summary, and then click **Stop using for billing testing**.

   ![roku815px - stop-billing-testing](https://image.roku.com/ZHZscHItMTc2/stop-billing-testing-v4b.png)


3. On the app to be used for billing testing, click **Options**, and then click **Use for billing testing**.

   ![roku815px - use-billing-testing](https://image.roku.com/ZHZscHItMTc2/use-billing-testing-v2a.png)
