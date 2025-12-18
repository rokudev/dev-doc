---
title: Authentication Overview
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

# Authentication Overview

Roku provides mechanisms and protocols that streamline authentication for apps. These authentication methods allow customers to sign into apps with minimal input to ensure they can access and engage with content.  

SVOD, TVOD, and other authenticated transactional apps use [on-device authentication ](/docs/developer-program/authentication/on-device-authentication.md)with Automatic Account Link to validate subscriptions and purchases. With this mechanism, apps verify whether the customer has an active subscription through Roku Pay for the content, and then check whether there is a valid access token stored in the device registry and the Roku cloud. Based on these checks, apps either grant access to the content or do additional validations such as checking previous transactions or checking whether the customer's email address is linked to an existing subscription.

Using AAL further simplifies authentication for customers with multiple Roku devices: Once successfully authenticated on one device, customers are automatically signed in when they activate additional Roku devices linked to the same Roku account.

AVOD and non-monetized apps requiring a user account to log in can use [AAL](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md) to authenticate customers on all of the Roku devices linked to their Roku account.

TVE apps can use the ["rendezvous" linking ](/docs/developer-program/authentication/authentication-and-linking.md)to validate subscriptions. With this method, apps get a registration code and display it on the Roku device. When the customers enter the registration code on the provider's external website, the provider's authentication service links the customer's device to their Roku account via an access token that is downloaded and stored on the device.

For more information on implementing these authentication methods, see their respective integration documents:

| App                      | Authentication Method                                        |
| :--------------------------- | :----------------------------------------------------------- |
| SVOD, TVOD                   | [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md) |
| AVOD, non-monetized apps | [Automatic Account Link](/docs/developer-program/authentication/universal-authentication-protocol-for-single-sign-on.md) |
| TVE                          | [Rendezvous linking](/docs/developer-program/authentication/authentication-and-linking.md) |
