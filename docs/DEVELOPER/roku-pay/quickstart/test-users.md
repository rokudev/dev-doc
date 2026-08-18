---
title: Creating test users
excerpt: Set up test users to make free in-app purchases and manage their transactions
deprecated: false
hidden: false
metadata:
  title: Creating test users | Roku Developer Docs
  description: >-
    Create test users in the Developer Dashboard to make free in-app purchases,
    then view or void transactions to re-test purchase workflows in your app.
  robots: index
next:
  description: ''
---
Test users can make in-app purchases free of charge via Roku Pay and view confirmations, error codes, and other transactional metadata. This is useful for testing the Roku Pay integration in an app.

> For a test user to make free in-app purchases, the test user must be the root account owner or have the Admin or App Management role. &#x20;

## Adding a test user

To create a test user and add apps to it, follow these steps:

1. In the [Developer Dashboard](https://developer.roku.com/developer), select **Test Users** under **Monetization**.

   ![roku600px -  - test users](https://image.roku.com/ZHZscHItMTc2/test-user-dashboard-2-v3.jpg)

2. The **Manage test users** index page lists the email addresses and apps for each test user. Click **Add New Test User**.

   ![roku600px - manage-test-user-index](https://image.roku.com/ZHZscHItMTc2/manage-test-user-index-v2.png)

3. In the **Test User Email** box, enter the email address of the test user. The test user must be the app's [root account user](doc:user-access-management).

4. From the **Channels** list, select one or more apps on which the test user can make free purchases.

   ![roku600px - add-test-user](https://image.roku.com/ZHZscHItMTc2/add-test-user-v2.png)

5. Click **Add**. The test user is listed in the **Manage test users** index page.

6. To edit the email address or apps of the test user, click **Edit**, make changes, and then click **Update**.

## Viewing and voiding transactions

You can view all the transactions made by test users on your apps. You can also void all the transactions made by the test user on a specific to re-test the purchase workflows on that app with that test user. To view and void the transactions of a test user, follow these steps:

1. Under the **Transactions** column in the test user's row, click **View**.

2. The **Test user transaction** page lists each transaction made by the test user per app, including the purchase date, app name, transaction ID (used by the Roku Pay Web Service API for validating, refunding, and canceling purchases), and product name.

   ![roku815px - void-test-user-transaction](https://image.roku.com/ZHZscHItMTc2/void-test-user-transaction-v2a.png)

3. To void the transactions made by the test user on a specific app, click **Void transactions**. All transactions made by the test user on that app are permanently deleted. The transaction IDs of the voided transactions are not accessible via the Roku Pay Web Service API.
