---
title: "User access management in the Developer Dashboard"
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

# User access management in the Developer Dashboard

You can use the [**Roles and access** page in the Developer Dashboard](https://developer.roku.com/account/user-access-list) to enable team members to manage your developer account or specific apps within it. A ***role*** gives a user a set of one or more ***permissions*** to complete specific tasks in your account. Each role has an ***access level***, which determines whether the user can complete tasks for all the apps in your account or just one or more selected apps.  

For example, the *app management* role lets users manage and publish one or more apps, the *financial reports* role lets users view transaction and sales activity reports for one or more apps in the account, and the *administrative* role lets users complete all tasks for all apps in the account. 

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-roles-access.png)

## Adding users

To add a user to your developer account and assign them roles and permissions, follow these steps:

1. In the Developer Dashboard, click **User Access** from the left sidebar, and then click **Invite a user**.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-invite-user-button.png)

2. In the **Invite a user** page, enter the following information: <a id="user-roles"></a>


<table>
<thead>
<tr>
<th><strong>Field</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Email</td>
<td>The email address of the user to be added to your developer account.</td>
</tr>
<tr>
<td>Organization</td>
<td>The name of the company associated with the Roku developer.</td>
</tr>
<tr>
<td>Roles</td>
<td>Select the checkboxes for one or more of the following roles and permissions: <table><thead><tr><th>Role</th><th>Permissions</th><th>Access-level</th></tr></thead><tbody><tr><td><strong>Administrator</strong></td><td>Same permissions as the root account holder. An administrator can perform all the tasks listed in this table, as well as: ${admin-permissions}</td><td>Account</td></tr><tr><td><strong>App Management</strong></td><td></td><td></td></tr><tr><td>App management</td><td>Access the app management and publishing features for one or more apps, including: ${channel-mgmt-permissions}<br /><br />Select one or more apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to the managment and publishing features for all existing apps (as you create new apps, you will need to manually add them to grant access).</td><td>App</td></tr><tr><td>Non-financial Reports</td><td>Access the following app analytics and health reports: ${non-financial-report-permissions}<br /><br />Select apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to view the financial reports for all existing apps (as you create new apps, you will need to manually add them to grant access to their financial reports).</td><td>App</td></tr><tr><td><strong>Monetization</strong></td><td></td><td></td></tr><tr><td>Products</td><td>${product-permissions}</td><td>Account</td></tr><tr><td>Financial Reports</td><td>Grant the developer access to the Roku Pay transaction, sales activity, and payout reports for one or more apps.<br /><br />Select apps from the drop-down list. You can filter the list of apps as you enter the app name. Click <strong>Select all</strong> to grant the user access to view the financial reports for all existing apps (as you create new apps, you will need to manually add them to grant access to their financial reports).</td><td>Account</td></tr><tr><td><strong>Payout admin</strong></td><td>${payout-admin-permissions}</td><td>Account</td></tr></tbody></table></td>
</tr>
</tbody>
</table>


   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/mua-invite-user.png)
   ![roku600px - mua_admin](https://image.roku.com/ZHZscHItMTc2/mua-admin.png)
   ![roku600px - mua_app_mgmt](https://image.roku.com/ZHZscHItMTc2/mua-app-management.png)
   ![roku600px - mua_app_mgmt](https://image.roku.com/ZHZscHItMTc2/mua-monetization.png)

3. Click **Invite**.

4. If the user already has a Roku developer account, they are immediately granted access to your account with their specified role.

   If the user does not have a Roku developer account, they receive an email notification from Roku informing them that they have been granted access to your account. 

   ![roku600px - mua_app_mgmt](https://image.roku.com/ZHZscHItMTc2/roku-user-access-invite.png)

   Once the user clicks the accept invite link in the email, they are taken to the Roku Launchpad, where they accept the invite and then select your account. The user can access your account and take actions permitted by their specified role.

   ![roku600px - mua_app_mgmt](https://image.roku.com/ZHZscHItMTc2/roku-user-access-accept-invite.png)







## Managing user accounts

You can use the **Roles and access** page to edit, re-invite, and remove users and view their activity logs.

The page lists the email, name, and organization of each user who has been invited to your developer account, their roles, and their current status.

You can search the listed user accounts by email address or user name.

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-search.png)

###  Editing users

You can edit the organization and roles of existing users. To edit a user, click anywhere in the user’s row, update the properties, and then click **Save**.

### Re-sending users invites

If you have the Admin role (or are the root account owner), you can re-send an invite to a user. To do this, click the menu icon on the right-hand side of the user’s row, and then click **Resend invite** in the shortcut menu.

### Removing users

If you have the Admin role (or are the root account owner), you can remove a user from the developer account. To do this, click the menu icon on the right-hand side of the user’s row, click **Remove user** in the shortcut menu, and then click **Yes** in the confirmation dialog.

![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-remove-user.png)

Removing a user does not affect the user's own Roku developer account. If you need to add the removed user in the future, you must re-invite them.

## Viewing user activity logs

If you have the Admin role (or are the root account owner), you can access the user activity log, which tracks the actions taken by each user in the developer account.

The log lists the user’s email address, page they accessed, action taken, subject app, and the date and time of the action.

You can search log entries by email address, page name, action, or app name, and you can sort the entries by clicking the **Email**, **Page**, and **Channel**, and **Date** headers.

![roku815px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-page.png)

- To view the activity log for all users, click **Activity logs** at the top of the page.

  ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-link-v2.png)
- To view the activity log for a specific user, click the menu icon on the right-hand side of the user’s row, and then click **View user activity** in the shortcut menu.

  ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-activity-logs-shortcut.png)

## Switching developer accounts

If you have been granted access to another developer account, you can change the developer account you are currently managing. To do this, follow these steps:

1. Click the **Switch account** option from the left sidebar.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account.png)
2. In the **Choose an account** page, select the desired developer account from the list. Your root account is listed at the top, and the accounts shared with you are listed below.

   ![roku600px - multi-user-access-2-roles-access](https://image.roku.com/ZHZscHItMTc2/multi-user-access-2-switch-account-list.png)