---
title: "Publisher payouts"
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


Roku’s Partner Payouts Program is the vehicle through which partners receive payments for apps, games, content, and ads served to millions of active Roku users.

To sign up for Roku Partner Payouts Program, see the [Enrolling in the Roku Partner Payouts Program](/docs/developer-program/roku-pay/quickstart/partner-payouts.md) guide.

## Publisher payouts

Partners can select between three payout methods when enrolling in the Roku Partner Payouts Program:

- PayPal
- Direct deposit / ACH
- Wire transfer

**Please note that for partners outside the United States, only PayPal and wire transfers are available (direct deposit/ACH is not available).**

For all partners, wire transfer and ACH payments are made in USD only. If there are transactions received that are non-USD, they are converted to USD using the average foreign exchange rate for the month the payment is for.

With PayPal there is no payment fee. With wire transfers and ACH payments, your bank will charge you bank fees.

## Receiving payouts

Once Roku verifies a publisher's bank information and tax documents, the publisher's account will be enrolled in the Roku Partner Payouts Program. The publisher can then publish a monetized app and begin recognizing revenue immediately.

Roku will pay the publisher 80% of all amounts actually received by Roku from your end users in respect of your Application(s) through Roku Pay, after deducting any applicable taxes, credits, refunds and chargebacks, and Roku will retain the remaining 20%.

Payouts from Roku are made no later than 60 days after the end of each month in which Roku received payments through Roku Pay. For subscriptions that are longer than one month, payouts are made on a pro-rata monthly basis (for example, 1/12 of the revenues per month for an annual subscription) no later than 60 days after the end of each month in which Roku receives payments through Roku Pay.

No minimum sum is required to receive payouts from purchases made through Roku Pay. Payouts are made based on the specified interval regardless of the amount of accrued revenue.

For more information on payout terms, see the [Roku Distribution Agreement](https://docs.roku.com/doc/developerdistribution/en-us).

## FAQs

**Can I publish an app that monetizes without enrolling in the Roku Partner Payouts Program?**

All partners with monetized apps are required to enroll in the Roku Partner Payouts Program. In fact, our system will prevent you from publishing a monetized app until your account has been enrolled in the program.

**When does the payment process start?**

As soon as our system verifies your bank information and tax documents, your account will be enrolled in the Roku Partner Payouts Program. You will immediately be able to publish a monetized app and revenue earned in your app will be recognized from the very first day it's published.

Please note the importance of entering accurate and correct information when enrolling in the Roku Partner Payouts Program. If, for example, the wrong bank account number information is added, our system will not notify you of the error until our payment to you fails to clear. Of course, you will be notified to update your bank account information, but this will delay the amount of time until you're paid.

**When can I expect to receive my first payment?**

Transactional apps are paid no later than 60 days after the end of each month in which Roku received payments through Roku Pay. There are no minimum revenue requirements for billing disbursements.

Ad-supported apps are paid no later than 60 days after the end of each quarter. Note that ad-supported partners will not be paid until 1) the aggregate sums due are equal to or exceed $100.00, or 2) the Agreement expires or is terminated.

Detailed payout terms are found in the Commercial Terms Exhibit of the [Roku Distribution Agreement](https://docs.roku.com/doc/developerdistribution/en-us).

**Why wasn’t I paid?**

Roku does not verify bank account information. Our system only verifies the routing number and tax documents. If any of the bank account information you initially entered is incorrect, it will not be possible to pay you. In this case, you will receive a notification that a payment to you failed, and you will be asked to update your payment information in then Developer Dashboard.

**What is the requirement for redirecting ad traffic to Roku if my tag returns empty or fails?**

The Roku Ad Framework automatically redirects empty or failed ad calls to Roku's ad server. Should Roku's ad server ever be used to serve ads in your app, we will share 60% of net revenue earned on those ads with you. This is why all monetized app partners are required to enroll in the Roku Partner Payouts Program, even if they plan on managing 100% of their ad inventory.

## Chargeback FAQs

**What is a chargeback?**

A chargeback is a dispute raised by a cardholder against any transaction, through their issuing bank. As per card network rules, the merchant (Roku) can either dispute the chargeback to prove it is legitimate or return the transaction amount to the issuer.

**When a chargeback occurs, how does Roku notify the publisher?**

When a customer disputes a transaction made through Roku Pay that results in a chargeback, Roku will send a [refund push notification message](/docs/developer-program/roku-pay/implementation/push-notifications.md#refund) to the developer. The **transactionType** field in the [n](/docs/developer-program/roku-pay/implementation/push-notifications.md#refund)otification will be set to "Chargeback", "ChargebackReversed", or "SecondChargeback". Each of these values is described as follows:

- "Chargeback": The customer has initiated a transaction dispute. Roku will dispute the chargeback if it is $8.99 or more. If the chargeback is reversed, Roku will send a subsequent refund notification with the **transactionType** set to "ChargebackReversed". If the chargeback is not reversed, no further notifications are sent.


- "ChargebackReversed": Roku successfully reversed the chargeback claim.



- "SecondChargeback": The customer's bank has disputed the chargeback reversal on the transaction (this may occur if the customer provided new information, the chargeback reason changed, or the bank determined that the information provided by Roku was not sufficient to refute the chargeback). Roku will not dispute the second chargeback.

**Does Roku dispute all chargebacks?**

No. Roku only disputes chargebacks that are $8.99 or more. Any chargeback less than $8.99 is not disputed because the cost of disputing the chargeback is greater than the transaction amount. If the cardholder files a second chargeback, Roku will not dispute it—Roku relies on the issuer doing their due diligence, which allows the cardholder to file a second chargeback on a transaction on which they lost the original dispute.

**How long does it take to receive the ChargebackReversed and SecondChargeback notifications?**

Upon receiving a "Chargeback" notification, it may take up to 60 days to receive a "ChargebackReversed" notification if Roku successfully gets the chargeback claim reversed. The time it takes to receive a "SecondChargeback" notification depends on how long the issuer allows the cardholder to file a second dispute.   

**Does Roku pass the Fraud/Non-Fraud indicator to publishers?**

No. Roku does not receive the Fraud/Non-Fraud indicator from all networks; therefore, Roku does not pass it to publishers.

**Upon receiving chargeback, does the customer still have access to content or do they lose their access immediately?**

Upon receiving a chargeback from the processor, Roku cancels the subscription; however, the entitlement remains valid until the end of the billing cycle. This means that the customer can continue accessing content until the next billing date. Roku will no longer attempt to auto-renew the subscription upon the end of the billing cycle. The customer must re-subscribe to access content.

**Once Roku cancels the subscription because of a chargeback, can the customer make additional changes to the service such as an upgrade or downgrade?**

No. Although the customer has access to content, they actually do not have a valid entitlement. The customer, therefore, does not have an active subscription that can be upgraded/downgraded.

**When Roku cancels a subscription because of a chargeback, how is the publisher notified?**

Roku sends a [cancel push notification message](/docs/developer-program/roku-pay/implementation/push-notifications.md#cancellation) with the **transactionType** field set to "Chargeback". This is similar to how the push notification is sent for an active cancellation (when the customer explicitly cancels the subscription). The publisher should handle the cancel notification to determine if the customer is still entitled to content.
