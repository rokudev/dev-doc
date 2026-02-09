---
title: User access management in the Developer Dashboard
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
You can use the [**Roles and access** page in the Developer Dashboard](https://developer.roku.com/account/user-access-list) to enable team members to manage your developer account or specific apps within it. A _**role**_ gives a user a set of one or more _**permissions**_ to complete specific tasks in your account. Each role has an _**access level**_, which determines whether the user can complete tasks for all the apps in your account or just one or more selected apps.

For example, the _app management_ role lets users manage and publish one or more apps, the _financial reports_ role lets users view transaction and sales activity reports for one or more apps in the account, and the _administrative_ role lets users complete all tasks for all apps in the account.

<Image alt="roku815px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-roles-access.png" />

## Adding users

To add a user to your developer account and assign them roles and permissions, follow these steps:

1. In the Developer Dashboard, click **User Access** from the left sidebar, and then click **Invite a user**.

   <Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-invite-user-button.png" />

2. In the **Invite a user** page, enter the following information: <a id="user-roles" />
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
   <td class="long-line">Select the checkboxes for one or more of the following roles and permissions: <div class="hscroll"><table>
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
   <li>Channel Health</li>
   <li>Channel Engagement</li>
   <li>Channel Stability</li>
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
   <tr>
   <td class="short-line"><strong>Payout admin</strong></td>
   <td class="long-line"><ul>
   <li>Enter and edit payout settings, which include contact information, entity and payout method, and tax forms. This role (or Admin) is needed for enrolling a Roku developer account in the <a href="https://developer.roku.com/payments/">Roku Partner Payouts Program</a> in order to monetize content in a Roku app. </li>
   </ul></td>
   <td class="short-line">Account</td>
   </tr>
   </tbody>
   </table></div></td>
   </tr>
   </tbody>
   </table>
   `}</HTMLBlock>
   <br />

<Image border={false} src="https://image.roku.com/ZHZscHItMTc2/mua-invite-user.png" />
<Image border={false} src="https://image.roku.com/ZHZscHItMTc2/mua-admin.png" />
<Image border={false} src="https://image.roku.com/ZHZscHItMTc2/mua-app-management.png" />
<Image border={false} src="https://image.roku.com/ZHZscHItMTc2/mua-monetization.png" />

3. Click **Invite**.

4. If the user already has a Roku developer account, they are immediately granted access to your account with their specified role.

   If the user does not have a Roku developer account, they receive an email notification from Roku informing them that they have been granted access to your account.

   <Image alt="roku600px - mua_app_mgmt" border={false} src="https://image.roku.com/ZHZscHItMTc2/roku-user-access-invite.png" />

   Once the user clicks the accept invite link in the email, they are taken to the Roku Launchpad, where they accept the invite and then select your account. The user can access your account and take actions permitted by their specified role.

   <Image alt="roku600px - mua_app_mgmt" border={false} src="https://image.roku.com/ZHZscHItMTc2/roku-user-access-accept-invite.png" />

## Managing user accounts

You can use the **Roles and access** page to edit, re-invite, and remove users and view their activity logs.

The page lists the email, name, and organization of each user who has been invited to your developer account, their roles, and their current status.

You can search the listed user accounts by email address or user name.

<Image alt="roku815px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-search.png" />

### Editing users

You can edit the organization and roles of existing users. To edit a user, click anywhere in the user’s row, update the properties, and then click **Save**.

### Re-sending users invites

If you have the Admin role (or are the root account owner), you can re-send an invite to a user. To do this, click the menu icon on the right-hand side of the user’s row, and then click **Resend invite** in the shortcut menu.

### Removing users

If you have the Admin role (or are the root account owner), you can remove a user from the developer account. To do this, click the menu icon on the right-hand side of the user’s row, click **Remove user** in the shortcut menu, and then click **Yes** in the confirmation dialog.

<Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-remove-user.png" />

Removing a user does not affect the user's own Roku developer account. If you need to add the removed user in the future, you must re-invite them.

## Viewing user activity logs

If you have the Admin role (or are the root account owner), you can access the user activity log, which tracks the actions taken by each user in the developer account.

The log lists the user’s email address, page they accessed, action taken, subject app, and the date and time of the action.

You can search log entries by email address, page name, action, or app name, and you can sort the entries by clicking the **Email**, **Page**, and **Channel**, and **Date** headers.

<Image alt="roku815px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-page.png" />

* To view the activity log for all users, click **Activity logs** at the top of the page.

  <Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-link-v2.png" />
* To view the activity log for a specific user, click the menu icon on the right-hand side of the user’s row, and then click **View user activity** in the shortcut menu.

  <Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-shortcut.png" />

## Switching developer accounts

If you have been granted access to another developer account, you can change the developer account you are currently managing. To do this, follow these steps:

1. Click the **Switch account** option from the left sidebar.

   <Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account.png" />
2. In the **Choose an account** page, select the desired developer account from the list. Your root account is listed at the top, and the accounts shared with you are listed below.

   <Image alt="roku600px - multi-user-access-2-roles-access" border={false} src="https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account-list.png" />
