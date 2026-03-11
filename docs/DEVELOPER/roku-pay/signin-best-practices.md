---
title: Sign-in requirements and best practices
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
SVOD and TVOD apps (and other subscription services) participating in Roku Pay can streamline subscriber logins by minimizing the number of screens and keypresses in the on-device sign-in workflow. For example, customers may abandon the sign-in workflow when prompted to enter their email address because it requires too many keypresses.

The following graphic demonstrates the standard Roku on-device sign-in workflow, which includes just a maximum of three screens: the landing page, the request for information (RFI) screen, and the password keyboard dialog/log-in screen.

![roku815px - sign-in-flow-optimal.gif](https://image.roku.com/ZHZscHItMTc2/sign-in-flow-optimal.gif)

> **Certification requirement**: For SVOD and TVOD apps (and other subscription services) to pass certification, they must use an on-device Roku Pay billing flow. The Request for Information (RFI) screen must be displayed during the on-device sign-in flow to enable customers to share the email address and/or phone number in their Roku customer account with apps. Only if the user declines the request, may apps require the customer to manually enter this information.

Implementing this streamlined user experience involves two different aspects: the on-device sign-in UI and the on-device authentication integration, which provides the APIs for the sign-in user experience. This document explains both of these areas.

## On-device sign-in UI

The on-device sign-in workflow should  typically have a maximum of three screens (listed in the recommended order):

1. **Landing page**. Provides call-to-action for subscribing. Includes entry to the sign-up and sign-in flows.

2. **RFI screen** (Roku Pay built-in). Enables customers to grant the app access to their Roku account information (email address and/or phone number). This eliminates the need for customers to enter their information in a separate keyboard dialog, which speeds up sign-ins and helps ensure that customers complete the process. The RFI screen is typically overlaid on top of the landing page.

   > **Certification requirement**: Apps must display the RFI screen in the sign-in flow to pass certification.

3. **Password keyboard/log-in screen**. Enables the customer to enter their password. Publishers can display a StandardKeyboardDialog for entering the password via text entry or a voice-enabled keyboard for entering the password via text or voice entry. The password keyboard dialog is typically overlaid on top of the log-in screen. The log-in screen enables customers who didn't grant the app access to their personal information to manually enter their email/phone and navigate to the password keyboard dialog.

## On-device authentication

For customers who already have a valid subscription for an app, [on-device authentication](doc:on-device-authentication) enables them to sign in to the app directly on-device. This integration uses the [ChannelStore APIs](doc:channelstore) to manage the on-device sign-in experience through Roku Pay. It includes a complete suite of APIs for implementing the entitlement and authentication workflows.

> **Certification requirement**: All authenticated apps must implement on-device authentication to pass [certification](doc:certification#2-purchases). Account sign-ins must be completed on-device, without visiting an external webpage. The sign-in workflow may not include links to off-device promotional or marketing materials, nor may it utilize off-device sign-in mechanisms such as rendezvous linking.
