---
title: User access management
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
You can use the [**Roles and access** page in the Roku Launchpad](https://developer.roku.com/account/user-access-list) to enable team members to manage your  account or specific apps within it. A _**role**_ gives a user a set of one or more _**permissions**_ to complete specific tasks in your account. Each role has an _**access level**_, which determines whether the user can complete tasks for all the apps in your account or just one or more selected apps.

For example, the _app management_ role lets users manage and publish one or more apps, the _financial reports_ role lets users view transaction and sales activity reports for one or more apps in the account, and the _administrative_ role lets users complete all tasks for all apps in the account.

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-roles-access.png)

## Adding users

To add a user to your account and assign them roles and permissions, follow these steps:

1. From the Roku Developer Dashboard, click **User access** on the left sidebar; from the Roku Launchpad, click **Roles and access**.

2. Click **Invite a user**.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-invite-user-button.png)

3. In the **Invite a user** page, enter the following information: <a id="user-roles" />
   <HTMLBlock>{`
   <table>
   <thead>
   <tr>
   <th class="short-line"><strong>Field</strong></th>
   <th class="short-line"><strong>Description</strong></th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td class="short-line">Email</td>
   <td class="long-line">The email address of the user to be added to your developer account.</td>
   </tr>
   <tr>
   <td class="short-line">Organization</td>
   <td class="long-line">The name of the company associated with the Roku developer.</td>
   </tr>
   <tr>
   <td class="short-line">Roles</td>
   <td class="long-line">Select the checkboxes for one or more roles and permissions: <div class="hscroll"></div></td>
   </tr>
   </tbody>
   </table>
   `}</HTMLBlock>

![](https://image.roku.com/ZHZscHItMTc2/mua-invite-user.png)

4. Click **Invite**.

5. If the user already has a Roku account, they are immediately granted access to your account with their specified role.

   If the user does not have a Roku account, they receive an email notification from Roku informing them that they have been granted access to your account.

   ![roku600px - mua\_app\_mgmt](https://image.roku.com/ZHZscHItMTc2/roku-user-access-invite.png)

   Once the user clicks the accept invite link in the email, they are taken to the Roku Launchpad, where they accept the invite and then select your account. The user can access your account and take actions permitted by their specified role.

   ![roku600px - mua\_app\_mgmt](https://image.roku.com/ZHZscHItMTc2/roku-user-access-accept-invite.png)

### Roles and permissions for Roku developers

Roku developer accounts can have the following roles and permissions:

<HTMLBlock>{`
<table>
<thead>
<tr>
<th class="short-line">Role</th>
<th class="short-line">Permissions</th>
<th class="short-line">Access-level</th>
</tr>
</thead>
<tbody>
<tr>
<td class="short-line"><strong>Administrator</strong></td>
<td class="long-line">Same permissions as the root account holder. An administrator can perform all the tasks listed in this table, as well as: <ul>
<li>Create and delete apps</li>
<li>Electronically approve agreements (such as the Roku Distribution Agreement)</li>
<li>Enroll in the Roku Partner Payouts Program and view information used for enrollment or eligibility determination</li>
  <li>Manage users and test users</li>
  <li>View and void test transactions.</li>
  <li>Update developer information.</li>
</ul></td>
<td class="short-line">Account</td>
</tr>
<tr>
<td class="short-line"><strong>App Management</strong></td>
<td class="short-line"></td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">App management</td>
<td class="long-line">Access the app management and publishing features for one or more apps, including: <ul>
<li>App properties and metadata</li>
<li>Package Upload</li>
<li>Static Analysis</li>
<li>Submit for publishing</li>
<li>Search feeds (validate, submit, and manage)</li>
</ul><br><br>Select one or more apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to the managment and publishing features for all existing apps (as you create new apps, you will need to manually add them to grant access).</td>
<td class="short-line">App</td>
</tr>
<tr>
<td class="short-line">Non-financial Reports</td>
<td class="long-line">Access the following app analytics and health reports: <ul>
<li>App Health</li>
<li>App Engagement</li>
<li>App Stability</li>
<li>Viewership Summary</li>
</ul><br><br>Select apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to view the financial reports for all existing apps (as you create new apps, you will need to manually add them to grant access to their financial reports).</td>
<td class="short-line">App</td>
</tr>
<tr>
<td class="short-line"><strong>Monetization</strong></td>
<td class="short-line"></td>
<td class="short-line"></td>
</tr>
<tr>
<td class="short-line">Products</td>
<td class="long-line"><ul>
<li>Enable the developer to create and manage in-app products (for example, subscriptions, movie rentals, special events).</li>
  <li>Add, view, edit, and delete test users.</li>
  <li>View and void test transactions.</li>

</ul></td>
<td class="short-line">Account</td>
</tr>
<tr>
<td class="short-line">Financial Reports</td>
<td class="long-line">Grant the developer access to the Roku Pay transaction, sales activity, and payout reports for one or more apps.<br><br>Select apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to view the financial reports for all existing apps (as you create new apps, you will need to manually add them to grant access to their financial reports).</td>
<td class="short-line">Account</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

### Roles and permissions for Roku content partners

Roku Content Partner accounts can have the following roles and permissions:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Role
      </th>

      <th>
        Permissions
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Administrator
      </td>

      <td>
        Maintain administrative control over the Roku Content Partner Portal. This user can:

        * Manage company account information.
        * Manage users, roles, and permissions
        * Manage featured rows, brand assets, and promotional creatives
        * Access audience, engagement, and performance analytics
      </td>
    </tr>

    <tr>
      <td>
        Marketing Manager
      </td>

      <td>
        Manage merchandising and creative assets. This user can:

        * Manage featured rows, brand assets, and promotional creatives.
        * Pin titles to featured rows
        * Upload and manage brand assets (tiles, banners, CTA images)
        * Manage subscription offer creatives (side cards)
      </td>
    </tr>

    <tr>
      <td>
        Operations Manager
      </td>

      <td>
        Manage title assets and operational reports. This user can:

        * Access title status and issue reports for assets.
      </td>
    </tr>

    <tr>
      <td>
        Business Manager
      </td>

      <td>
        Manage title rights, partner deals, and business performance reporting. This user can:

        * Access title status and issue reports for rights.
      </td>
    </tr>

    <tr>
      <td>
        Analytics
      </td>

      <td>
        View Roku analytics reports. This user can:

        * Access audience, engagement, and performance analytics.
      </td>
    </tr>
  </tbody>
</Table>

### Roles and permissions for Roku partner payouts

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Role
      </th>

      <th>
        Permissions
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Payout admin
      </td>

      <td>
        * Enter and edit payout settings, which include contact information, entity and payout method, and tax forms. This role (or Admin) is needed for enrolling a Roku developer account in the [Roku Partner Payouts Program](https://developer.roku.com/payments/) in order to monetize content in a Roku app.
        * Access the Roku Pay transaction, sales activity, and payout financial reports.
      </td>
    </tr>
  </tbody>
</Table>

## Managing user accounts

You can use the **Roles and access** page to edit, re-invite, and remove users and view their activity logs.

The page lists the email, name, and organization of each user who has been invited to your account, their roles, and their current status.

You can search the listed user accounts by email address or user name.

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-search.png)

### Editing users

You can edit the organization and roles of existing users. To edit a user, click anywhere in the user’s row, update the properties, and then click **Save**.

### Re-sending users invites

If you have the Admin role (or are the root account owner), you can re-send an invite to a user. To do this, click the menu icon on the right-hand side of the user’s row, and then click **Resend invite** in the shortcut menu.

### Removing users

If you have the Admin role (or are the root account owner), you can remove a user from the account. To do this, click the menu icon on the right-hand side of the user’s row, click **Remove user** in the shortcut menu, and then click **Yes** in the confirmation dialog.

![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-remove-user.png)

Removing a user does not affect the user's own Roku account. If you need to add the removed user in the future, you must re-invite them.

## Viewing user activity logs

If you have the Admin role (or are the root account owner), you can access the user activity log, which tracks the actions taken by each user in the account.

The log lists the user’s email address, page they accessed, action taken, subject app, and the date and time of the action.

You can search log entries by email address, page name, action, or app name, and you can sort the entries by clicking the **Email**, **Page**, and **Channel**, and **Date** headers.

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-page.png)

* To view the activity log for all users, click **Activity logs** at the top of the page.

  ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-link-v2.png)
* To view the activity log for a specific user, click the menu icon on the right-hand side of the user’s row, and then click **View user activity** in the shortcut menu.

  ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-shortcut.png)

## Switching accounts

If you have been granted access to another account, you can change the account you are currently managing. To do this, follow these steps:

1. Click the **Switch account** option from the left sidebar.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account.png)
2. In the **Choose an account** page, select the desired account from the list. Your root account is listed at the top, and the accounts shared with you are listed below.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account-list.png)
