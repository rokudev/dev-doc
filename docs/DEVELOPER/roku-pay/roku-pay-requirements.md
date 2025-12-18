---
title: Roku Pay Requirements
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

# Roku Pay integration requirements 

All apps with transactional content or in-app purchases (SVOD, TVOD, and other subscription services) must integrate and enable Roku Pay services. This document lists the requirements for integrating Roku Pay services in an app. Apps must adhere to all of these requirements to pass certification.

<!--- ||ccCatBegin "734e8310-5fa8-4efe-97e2-a9f9b18511ac" -->
## RP 1 Channel setup requirements
<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "08a901a6-38b0-445a-9164-38138b706a6a" -->
<!--- ||ccName "RP 1.1 Channel name" -->
<!--- ||ccDescriptionBegin "Channels must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by the channel.<br /><br />The channel name must clearly identify the company associated with the service, and the publisher must have full legal rights or consent for their channel names and the rights to all trademarks and copyright expressions associated with the name.<br /><br />The channel name may not include the name "Roku", and it may not contain any profanity, or derogatory or misleading language." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/publishing/channel-publishing-guide.md#create-a-channel"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp1-channel-setup-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Name         | Description                                                  | Documentation                                                |
| ----------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RP 1.1      | Channel name | Apps must provide a name, description, and poster (a 540x405 JPEG or PNG image) in each language supported by the channel.<br /><br />The app name must clearly identify the company associated with the service, and the publisher must have full legal rights or consent for their app names and the rights to all trademarks and copyright expressions associated with the name.<br /><br />The app name may not include the name "Roku", and it may not contain any profanity, or derogatory or misleading language. | [App publishing](/docs/developer-program/publishing/channel-publishing-guide.md#create-a-channel) |

<!--- ||ccCatBegin "68b0e407-ddfe-4584-a1b4-20097a335bc2" -->
## RP 2 Sign-up and sign-in requirements
<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "38bfa992-d7aa-4eec-bf46-472ed25c7ff8" -->
<!--- ||ccName "RP 2.1 RFI screen" -->
<!--- ||ccDescriptionBegin "All authenticated transactional channels (SVOD, TVOD, and other subscription services) must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the channel.<br /><br />Only if the user declines the request, may channels require the customer to manually enter information other than a password." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2021-10-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/signup-best-practices.md", "https://developer.roku.com/docs/developer-program/roku-pay/sign-in-best-practices.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp2-sign-up-and-sign-in-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Name       | Description                                                  | Documentation      |
| ----------- | ---------- | ------------------------------------------------------------ | ------------------ |
| RP 2.1      | RFI screen | All authenticated transactional apps (SVOD, TVOD, and other subscription services) must use the [getUserData](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) command to display a Request For Information (RFI) screen during the sign-up and sign-in workflows to enable customers to share their Roku account information with the app.<br /><br />Only if the user declines the request, may apps require the customer to manually enter information other than a password. | ${rfi-screen-list} |

{#rfi-screen-list}

- [Signup requirements and best practices](/docs/developer-program/roku-pay/signup-best-practices.md)
- [Sign-in requirements and best practices](/docs/developer-program/roku-pay/signin-best-practices.md)

<!--- ||ccCatBegin "80bfd6cc-3b4d-4b64-b0db-b104abc3f1db" -->
## RP 3 Payment requirements
<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "e5bd26c1-fab6-4c02-8f69-db3bc0161777" -->
<!--- ||ccName "RP 3.1 Product groups" -->
<!--- ||ccDescriptionBegin "Subscription services must create product groups in the [Developer Dashboard](https://developer.roku.com/developer) for any set of subscription products that the consumer should not be able to be subscribed to simultaneously.<br /><br />For example, if an channel has two in-channel products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2021-04-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp3-payment-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "2ec3b581-5485-402b-9b85-431e67f4d00e" -->
<!--- ||ccName "RP 3.2 Multiple purchase protection" -->
<!--- ||ccDescriptionBegin "Multiple purchase protection | Content or subscriptions through Roku Pay must protect against multiple purchases before passing new orders to the Streaming Store service.<br /><br />The Streaming Store service inherently protects against purchasing the same subscription code multiple times, but preventing the purchase of a free trial subscription and a non-free trial subscription must be done in the channel." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp3-payment-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "291b3d87-93dc-48c8-b5df-87fc00bd115f" -->
<!--- ||ccName "RP 3.3 Price changes" -->
<!--- ||ccDescriptionBegin "SVOD channels must provide 30-days notice to existing customers before changing the price of their service." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-pricing"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp3-payment-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "3d5d0708-cf95-4806-ac6c-6d01a7460f83" -->
<!--- ||ccName "RP 3.4 In-channel product naming" -->
<!--- ||ccDescriptionBegin "In-channel product names must clearly identify the service being offered by the channel. The publisher must have full legal rights or consent for their in-channel product names and the rights to all trademarks and copyright expressions associated with the names. The in-channel product names may not include the name "Roku", text related to a trial or discount offer**,** or any profanity or derogatory or misleading language." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-basics"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp3-payment-requirements" -->
<!--- ||ccRuleEnd -->

| Requirement | Name                         | Description                                                  | Documentation                                                |
| ----------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RP 3.1      | Product groups               | Subscription services must create product groups in the [Developer Dashboard](https://developer.roku.com/developer) for any set of subscription products that the consumer should not be able to be subscribed to simultaneously.<br /><br />For example, if an app has two in-channel products for the same monthly subscription but with different free trial durations, these two products must be added to the same product group to prevent the customer from paying for two separate monthly subscriptions | [In-app purchases - Product groups](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups) |
| RP 3.2      | Multiple purchase protection | Apps must protect against multiple purchases of content or subscriptions through Roku Pay before passing new orders to the Streaming Store service.<br /><br />The Streaming Store service inherently protects against purchasing the same subscription code multiple times, but preventing, for example, the purchase of a free trial subscription and a non-free trial subscription must be done in the channel. | [In-app purchases -Product Groups](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#adding-product-groups) |
| RP 3.3      | Price changes                | SVOD apps must provide notice and otherwise comply with all applicable laws before changing the price of their service. <br /><br />In all cases, Roku requires that SVOD apps provide at least 15 days notice to all existing customers before a price increase. | [In-app purchases - Product pricing](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-pricing) |
| RP 3.4      | In-channel product naming    | Apps must name in-app products so that the service being offered is clearly identifiable. The publisher must have full legal rights or consent for their in-app product names and the rights to all trademarks and copyright expressions associated with the names. The in-app product names may not include the name "Roku", text related to a trial or discount offer**,** or any profane, derogatory, or misleading language. | [In-app purchases - Product basics](/docs/developer-program/roku-pay/quickstart/in-channel-products.md#product-basics) |

<!--- ||ccCatBegin "1e325399-05ca-49d8-8e2b-50763ed3517b" -->
## RP 4 Authentication and entitlement requirements
<!--- ||ccCatEnd -->

<!--- ||ccRuleBegin "93fa67f7-9b08-4e13-b304-74e957570110" -->
<!--- ||ccName "RP 4.1 On-device authentication" -->
<!--- ||ccDescriptionBegin "For all channels that include authentication: Channels must complete account sign-ups and sign-ins on the device using [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md), without visiting an external webpage.<br /><br />The sign-up and sign-in workflows may not include links to off-device promotional or marketing materials, nor may they utilize off-device sign-up or sign-in mechanisms such as rendezvous linking.<br /><br />TVE channels are excluded from this requirement." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/authentication/on-device-authentication.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp4-authentication-and-entitlement-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "07770018-8488-4f2d-81f4-a5908f8a98f6" -->
<!--- ||ccName "RP 4.2 On-device upgrades and downgrades" -->
<!--- ||ccDescriptionBegin "Channels must allow upgrades and downgrades to be completed on the device using Roku Pay, without visiting an external webpage." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2020-10-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp4-authentication-and-entitlement-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "660f53af-5cb2-4f36-a5b2-442744f312d9" -->
<!--- ||ccName "RP 4.3 Account-based entitlements" -->
<!--- ||ccDescriptionBegin "Content or subscriptions through Roku Pay must be automatically entitled across all devices tied to the purchasing Roku account.<br /><br />Upon channel launch, the [getPurchases](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata) API can be used to return the transactionID for an active subscription, and an entitlement server can be used to look up an account via a call to the [validate-transaction API](https://developer.roku.com/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction)." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccRelatedResources ["https://developer.roku.com/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata", "https://developer.roku.com/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp4-authentication-and-entitlement-requirements"	-->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "60c7147e-0667-40c0-b9b6-7d9b490eaee3" -->
<!--- ||ccName "RP 4.4 Abandonment tracking" -->
<!--- ||ccDescriptionBegin "For all subscription services that have streamed more than an average of 5 million hours per month over the last three months (and new subscription services projected to reach the specified streaming hour threshold shortly after launch): Channels must implement Roku Event Dispatcher (RED) in the signup workflow.<br /><br />A RED event must be fired upon loading each page within the signup flow and submission of the final page to help track where users are abandoning the process. This includes, but is not limited to, the following pages: landing, sign up, registration, device activation, subscription selection, payment, purchase confirmation, and cancellation.<br /><br />If the channel's sign-up flow is contained within a form that covers one or more pages, a RED event must be fired when each element in the form is completed. Streaming hours per month information is available in the Developer Dashboard." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "1970-01-01T12:00:00.000"	-->
<!--- ||ccEngagementThreshold "For all subscription services that have streamed more than an average of 5 million hours over the last three months and new subscription services projected to reach the specified streaming hour threshold shortly after launch"	-->

<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/implementation/tracking-signup-abandonment.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp4-authentication-and-entitlement-requirements" -->
<!--- ||ccRuleEnd -->

<!--- ||ccRuleBegin "617d9229-37e8-4341-9f20-c4305f1b1433" -->
<!--- ||ccName "RP 4.5 Subscription on hold" -->
<!--- ||ccDescriptionBegin "Channels using Roku Pay must implement Roku's Enhanced Subscription Recovery feature to reduce involuntary churn (effective October 1, 2024)." -->
<!--- ||ccDescriptionEnd -->
<!--- ||ccEffectiveDate "2024-10-01T12:00:00.000"	-->

<!--- ||ccRelatedResources ["https://developer.roku.com/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md"]	-->
<!--- ||ccRegion ["Global"]	-->
<!--- ||ccCertURL "https://developer.roku.com/docs/developer-program/roku-pay/roku-pay-requirements.md#rp4-authentication-and-entitlement-requirements"	-->
<!--- ||ccRuleEnd -->

| Requirement | Name                                              | Description                                                  | Documentation                                                |
| ----------- | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RP 4.1      | On-device authentication                          | Apps that include authentication must complete account sign-ups and sign-ins on the device using [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md). <br /><br />Sign-up and sign-in workflows are prohibited from including external webpages, links to off-device promotional or marketing materials, or utilizing off-device sign-up or sign-in mechanisms such as rendezvous linking. | [On-device authentication](/docs/developer-program/authentication/on-device-authentication.md) |
| RP 4.2      | On-device upgrades and downgrades                 | Apps must complete upgrades and downgrades on the device using [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md). The upgrade/downgrade workflows are prohibited from including external webpages. | [On-device upgrade and downgrade](/docs/developer-program/roku-pay/implementation/on-device-upgrade-downgrade.md) |
| RP 4.3      | Account-based entitlements                        | Apps must automatically entitle content or subscriptions purchased through Roku Pay across all devices tied to the purchasing Roku account.<br /><br />Apps can use the [getAllPurchases](/docs/references/scenegraph/control-nodes/channelstore.md#getallpurchases) API can upon launch to return the transactionID for an active subscription, and they can use an entitlement server to look up an account via a call to the [validate-transaction API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction). | ${account-based-entitlement-list}                            |
| RP 4.4      | Abandonment tracking                              | All subscription services that have streamed more than an average of 5 million hours per month over the last three months (and new subscription services projected to reach the specified streaming hour threshold shortly after launch) must implement Roku Event Dispatcher (RED) in the signup workflow.<br /><br />Apps must fire a RED event upon loading each page within the signup flow and submission of the final page to help track where users are abandoning the process. This includes, but is not limited to, the following pages: landing, sign up, registration, device activation, subscription selection, payment, purchase confirmation, and cancellation.<br /><br />If the app's sign-up flow is contained within a form that covers one or more pages, channels must fire a RED event when each element in the form is completed. Streaming hours per month information is available in the Developer Dashboard. | [Tracking signup abandonment](/docs/developer-program/roku-pay/implementation/tracking-signup-abandonment.md). |
| RP 4.5      | Enhanced Subscription Recovery (churn mitigation) | All apps offering subscriptions must implement Enhanced Subscription Recovery to pass [certification](/docs/developer-program/roku-pay/roku-pay-requirements.md#rp-4-authentication-and-entitlement-requirements) | [Enhanced Subscription Recovery](/docs/developer-program/roku-pay/subscription-recovery/subscription-on-hold.md) |

{#account-based-entitlement-list}

- [getPurchases ChannelStore API](/docs/references/scenegraph/control-nodes/channelstore.md#getuserdata)
- [validate-transaction  Roku Pay Web service API](/docs/developer-program/roku-pay/implementation/roku-web-service.md#validate-transaction)
