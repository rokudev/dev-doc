---
title: Set up your Roku account
excerpt: Create your account, give your team access, and enroll in payouts
deprecated: false
hidden: false
metadata:
  title: Set up your Roku account | Roku Developer Docs
  description: >-
    Step-by-step guide to creating and enrolling a Roku account for app
    developers and content publishers, including choosing a company or
    individual account, using an email alias, granting team access, and enrolling
    in payouts.
  robots: index
next:
  description: ''
---
Whether you build a Roku app or distribute your content on The Roku Channel, you work with Roku through a Roku account that is enrolled in the Roku Developer Program. This guide walks you through setting up that account in the order that avoids the most common problems.

> **Distributing only on The Roku Channel?**
>
> You still enroll in the Roku Developer Program. The Roku Launchpad, which is where you manage your account, is part of that program. You do not need to build an app, get a Roku device, or enable developer mode. After you set up your account, you manage your content in the [Roku Content Partner Portal](doc:roku-content-partner-portal).

## Setup at a glance

| Step | What you do | Who does it |
| :-- | :-- | :-- |
| [Plan](#planning-your-account) | Choose the account owner email and decide whether to enroll as a company or an individual. | Your team, together |
| [1. Create a Roku account](#step-1-create-a-roku-account) | Create a Roku account that uses the account owner email. | The person setting up the account |
| [2. Enroll in the Roku Developer Program](#step-2-enroll-in-the-roku-developer-program) | Enroll the account. This makes it your root account. | The person setting up the account |
| [3. Give your team access](#step-3-give-your-team-access) | Invite your teammates, including yourself, and assign roles. | The root account owner |
| [4. Enroll in payouts](#step-4-enroll-in-payouts) | Provide your payout method and tax information so Roku can pay you. | A user with the Payout admin or Administrator role |

## How accounts work

Understanding a few terms makes the steps easier to follow.

* **Roku account.** The sign-in that every Roku customer has. You sign in with an email address and a password. Every person who works in your Roku Launchpad account needs their own Roku account.
* **Developer account.** The account you create when you enroll in the Roku Developer Program. It holds your apps, your content partner access, your payout settings, and your list of users.
* **Root account owner.** The Roku account that completes enrollment. The root account owner has full control of the developer account, including inviting and removing users. Each developer account has one root account owner.
* **Roles.** A role gives a user permission to complete specific tasks in the developer account. The root account owner assigns roles. Only the root account owner enrolls in the Roku Developer Program. Everyone else is invited and does not enroll.

## Planning your account

Make these two decisions before you begin. They are difficult to change after the account exists.

### Choose an email alias for the account owner

The root account owner is a single Roku account, and that account is tied to an email address. If you use a personal work email address, such as `alex.rivera@example.com`, the account is tied to that person. When they change roles or leave the company, you can lose control of your apps, content, and payouts.

Instead, create a Roku account for the company that uses an email alias, such as `roku-partners@example.com`. An alias is a shared address, such as a group mailbox or distribution list, that forwards to the people who manage your Roku relationship.

When you choose the alias:

* Use an address that your company controls and will keep for as long as you work with Roku.
* Make sure that more than one person reads the mail it receives. Roku sends verification codes and account, payout, and compliance notices to this address, and some of them require you to take action.
* Keep the account password in a shared location that your team trusts, such as a team password manager, not in one person's head.
* Plan for the owner email to stay the same for the life of the account.

Because the alias is not a person, nobody signs in as the account owner in day-to-day work. Instead, you [give each person access](#step-3-give-your-team-access) with their own Roku account.

### Choose a company or individual account

When you enroll, Roku asks whether you are enrolling as a company or as an individual.

| | Company | Individual |
| :-- | :-- | :-- |
| **Choose this when** | You are enrolling on behalf of a business or organization, such as a studio, network, or media company. | You are enrolling in your own personal capacity, such as an independent creator. |
| **Information you provide** | Company name, address, contact email, and website. | Developer name, your first and last name, and address. Contact email and website are optional. |
| **Name shown to viewers** | The company name is shown as the publisher of your apps in the Roku Streaming Store. | The developer name is shown as the publisher of your apps in the Roku Streaming Store. |

Your selection also affects payout enrollment, where Roku verifies the legal entity that receives payment. The details you provide must match your tax documents.

**If your organization is distributing content on The Roku Channel, or building apps for a business, enroll as a company.** Do not enroll as an individual on behalf of a company, because payments and tax information must match the legal entity that receives them.

## Step 1: Create a Roku account

To create the Roku account that will own your developer account, follow these steps:

1. While signed out of any other Roku account, go to [my.roku.com/signup](https://my.roku.com/signup).
2. Enter the account owner email alias that you chose, and complete the rest of the form.
3. Check the mailbox for the alias, and enter the verification code that Roku sends.

> If you already have a Roku account for another purpose, such as a personal account for watching TV, do not use it as the account owner. Create a new account that uses the alias.

You now have a Roku account that you can enroll in the Roku Developer Program.

## Step 2: Enroll in the Roku Developer Program

To enroll the account, follow these steps:

1. Sign in to the Roku account that uses the alias, and go to the [Roku Developer Program enrollment page](https://developer.roku.com/enrollment/standard).
2. When prompted, select **Company** or **Individual**, as described in [Choose a company or individual account](#choose-a-company-or-individual-account).
3. Enter your company or developer details, including your address.
4. Review and accept the Roku Distribution Agreement and the privacy policy, and then submit the form.

The account is now enrolled, and the Roku account that you used is the root account owner. You can sign in to the [Roku Launchpad](https://developer.roku.com/dev/landing) to manage the account.

## Step 3: Give your team access

Right now, only the alias can sign in to the developer account. To give people access, you invite them and assign roles. This includes the person who is setting up the account.

> **Give yourself access**
>
> The person who creates the account typically signs in with the alias, not with their own Roku account. The alias is not you, so you do not automatically have access when you sign in as yourself later. Invite your own email address, and assign yourself the **Administrator** role.
>
> For example, Alex Rivera creates an account for Example Media by using the alias `roku-partners@example.com`. Alex signs in as the alias and invites `alex.rivera@example.com` with the **Administrator** role. Alex then accepts the invitation and signs in with their own Roku account from then on.

The **Administrator** role has the same permissions as the root account owner. Assign it to at least two trusted people, so that your account does not depend on a single person.

To invite a user, follow these steps:

1. Sign in as the root account owner, and open the [Roles and access page](https://developer.roku.com/account/user-access-list) in the Roku Launchpad.
2. Click **Invite a user**.
3. Enter the person's email address and your organization name, and select one or more roles.
4. Click **Invite**.

The person you invite needs a Roku account that uses the email address you entered. If they do not have one, Roku emails them with instructions. They do not enroll in the Roku Developer Program. They accept the invitation, and then select your account in the Roku Launchpad.

### Choosing roles

Assign each person only the roles that they need for their work. The roles that are available depend on how you use Roku.

| If you | Roles to consider |
| :-- | :-- |
| Distribute on The Roku Channel | **Administrator**, **Marketing Manager**, **Operations Manager**, **Business Manager**, and **Analytics**. People need one of these roles to see the Roku Content Partner Portal. |
| Build apps | **Administrator**, **App management**, **Non-financial reports**, **Products**, and **Financial reports**. |
| Do either, and need to enter payout information | **Payout admin**. |

For descriptions of what each role can do, see [User access management](doc:user-access-management).

### Switching between accounts

If you have access to more than one developer account, for example because you work with several brands, do not sign out and sign back in. Use **Switch account** in the left sidebar of the Roku Launchpad to choose the account that you want to manage. If you do not see an account in the list, the account owner has not invited you, or you have not yet accepted the invitation. See [User access management](doc:user-access-management) for details.

## Step 4: Enroll in payouts

To receive payments from Roku, such as revenue from ads, subscriptions, or content distributed on The Roku Channel, you must enroll in the Roku Partner Payouts Program. If you build a monetized app, Roku does not let you publish it until you complete enrollment.

To enroll, sign in with a user that has the **Payout admin** or **Administrator** role. Users without one of these roles cannot complete the payout forms, which is a common reason enrollment appears to be broken. If you are the person who set up the account, assign yourself one of these roles in [step 3](#step-3-give-your-team-access) first.

Gather the following information before you begin:

* The legal name and address of the company or person who will receive payment.
* The payout method that you will use: PayPal, ACH (United States only), or cross-border wire (outside the United States only).
* Your tax information and the matching tax form, such as a W-9 for a United States entity or the applicable W-8 form for an entity outside the United States.

Plan your payout setup before you create additional accounts. A developer account has one payout method. If you need to pay separate legal entities or deposit to separate bank accounts, contact your Roku representative before you create more accounts.

For the full steps, see [Enrolling in the Roku Partner Payouts Program](doc:partner-payouts). For payment schedules and terms, see [Publisher payouts](doc:payouts).

## Next steps

After your account is set up, continue based on how you distribute your content:

* **The Roku Channel.** Open the [Roku Content Partner Portal](doc:roku-content-partner-portal) to track your titles, view analytics, and manage your storefront. Learn about [delivering content](doc:overview) to The Roku Channel.
* **Roku apps.** Follow [Getting started](doc:first-steps) to set up a Roku device and begin building. Use the [Developer Dashboard](doc:dashboard) to manage your apps.

## Troubleshooting

**I do not see the Roku Content Partner Portal in the Roku Launchpad.**
You need a role that gives access to the portal. Ask an Administrator in your organization to invite you or update your roles. Check that you accepted the invitation and that you are signed in to the correct account.

**I cannot complete the payout forms.**
You need the **Payout admin** or **Administrator** role for the account. Ask an Administrator to assign it to you.

**I need to enroll my teammates in the Roku Developer Program.**
You do not. Only the root account owner enrolls. Invite your teammates on the **Roles and access** page. They need only a Roku account.

**I am not sure who the account owner is, or the owner has left the company.**
If your organization has a Roku partner manager, contact them. If you distribute on The Roku Channel, contact [trcpartnersupport@roku.com](mailto:trcpartnersupport@roku.com).

**Do I need to create an app?**
Not to distribute content on The Roku Channel. You create an app only if you want your own app in the Roku Streaming Store.
