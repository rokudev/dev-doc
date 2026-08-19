---
title: Payout Audit Report
excerpt: 'Reconcile app revenue activity with Roku payments using transaction and payout data'
deprecated: false
hidden: false
metadata:
  title: 'Payout Audit Report | Roku Developer Docs'
  description: 'The Payout Audit Report displays monthly transaction amounts and deferred payouts, enabling partners to reconcile app revenue activity with receipts from Roku.'
  robots: index
next:
  description: ''
---
The Payout Audit Report displays information, including monthly transaction amounts and deferred payouts, which partners can use to reconcile their apps' revenue activity with receipts from Roku Accounts Payable. Revenue events are expressed using the currencies originally involved. Both net revenue share and original amounts collected by Roku are reported.

## Opening the Payout Audit Report

To open the Payout Audit Report, go to the [Developer Dashboard](https://developer.roku.com/developer), click **Sales reports** in the left sidebar, click the **Payout Audit** tab, and then select the app for which you want to view the transactions and payouts.

## Running the Payout Audit Report

Whenever the user chooses an app from the drop-down list of apps (see "Transaction Channel ID," below), the report begins running for that app, using default **Filters**. Click **Run** to produce another report for the same app, after changing the **Filters**.

## Filters

* **Channel ID** – Indicates the app, for which earnings are shown in the report.
* **Currency** – Restricts the display to reflect only transactions that are denominated in the specified currencies.
* **Payout Month** – Determines the interval for which earnings are reported. In the screenshot below, the user has specified that the report must include all transactions with a date that contains "2019-01" (in other words, transactions for the month of January, 2019).

## Screenshots

The Payout Audit Report displays only a tabular grid, in which each row represents an individual transaction. Each row includes the following columns:

* **Event Date** – The date of the transaction (in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format).

* **Invoice Number** –The Roku-generated unique ID for the transaction. This invoice number is included in purchase confirmation emails sent to customers. It can be used as a lookup key for customer queries or requests.

* **Transaction Type** – The nature of the transaction, as explained in the table below:

  | Type               | Meaning                                                                                                                                                                                                                                                                                                                                      |
  | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Cancellation       | Either an end user actively canceled a subscription ("active" cancellation), or Roku is unable to successfully capture the end user's subscription event ("passive" cancellation).                                                                                                                                                           |
  | Charge             | A successful purchase transaction (historically used to indicate purchases under Roku as Payment Method: RPM).                                                                                                                                                                                                                               |
  | DowngradeCancel    | A successful downgrade transaction's cancellation of the outgoing (base) subscription.                                                                                                                                                                                                                                                       |
  | DowngradeSale      | A successful downgrade transaction's sale of a new (downgraded) subscription, to replace the outgoing (base) plan.                                                                                                                                                                                                                           |
  | Purchase           | A successful purchase transaction (historically used to indicate purchases under Roku Standard Billing: RSB). Such transactions include 1) one-time purchases. and 2) initial and recurring subscription charges.                                                                                                                            |
  | Refund             | A successful refund transaction (historically used to indicate refunds under Roku as Payment Method: RPM).                                                                                                                                                                                                                                   |
  | Renewal            | An end user, who actively canceled a subscription, successfully signed up again before the previously scheduled expiration of the subscription.                                                                                                                                                                                             |
  | Reversal           | A successful refund transaction (historically used to indicate refunds under Roku Standard Billing: RSB).                                                                                                                                                                                                                                    |
  | UpgradeCancel      | A successful upgrade transaction's cancellation of the outgoing (base) subscription.                                                                                                                                                                                                                                                         |
  | UpgradeSale        | A successful upgrade transaction's sale of a new (upgraded) subscription, replacing the outgoing (base) subscription.                                                                                                                                                                                                                        |
  | Chargeback         | The customer has initiated a transaction dispute. The transaction will be deducted from the partner's payout.<br /><br />For apps in the Germany Streaming Store only, a SEPA chargeback may occur when the customer disputes a transaction made through Roku Pay that results in a chargeback or their bank account has insufficient funds. |
  | ChargebackReversed | Roku successfully reversed the chargeback claim. The revenue share will be returned to the partner payout.                                                                                                                                                                                                                                   |
  | SecondChargeback   | The customer's bank has disputed the chargeback reversal on the transaction (this may occur if the customer provided new information, the chargeback reason changed, or the bank determined that the information provided by Roku was not sufficient to refute the chargeback). The transaction will be deducted from the partner's payout.  |

* **Developer Transaction ID** – The partner-specific unique ID for the transaction.

* **User Transaction ID** – The user-based ID for the transaction. If this transaction is a purchase, it will be the same as the **Original Transaction ID** (see below). If this transaction is a renewal, it will be different.

* **User ID** – The unique ID of the customer.

* **Zip Code** – The zip code of the customer.

* **Channel Name** – The name of the app.

* **Product Code** –The product identifier as entered on the Developer Dashboard when the product was created.

* **Product Name** – The name of the product as entered on the Developer Dashboard when the product was created.

* **Quantity** – The number of items purchased.

* **Original Transaction Amount** – For transactions that are billed in full, in advance, but only partially fulfilled during the reporting window, the Original Amount is the full amount of the original transaction in the local currency. For example, the Transaction Original Amount for a yearly subscription at ten dollars per month would be $120.00. The Applied Transaction amount during any single month would be ten dollars.

* **Service Credits** – Any credits applied to the transaction, in local currency. If the **Transaction Type** is UpgradeSale, this field will contain the prorated amount of the current subscription that is still unused.

* **Net Amount** –Total amount, expressed in local currency, of the item purchased (including tax and reflecting **Service Credits**, as applicable).

* **Applied Transaction Amount** – The amount of a transaction ascribed to the Publisher during the reporting period (which will be the full amount for a one-time item that is delivered within the reporting period, but will be a monthly pro-rated amount otherwise).

* **Partner Rev Share** – The Publisher's (Partner's) share of the Transaction Amount, given in units of the indicated currency.

* **Currency** – The local currency, in which this row's transaction amounts are denominated (e.g., usd, cad, gbp, eur, etc.).

* **Expiration Date** – The subscription end date (in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

* **Original Transaction ID** – The ID of the original subscription purchase.

* **Original Purchase Date** – The date of the original subscription purchase (in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format).

* **Partner Reference ID** – The partner-specific internal ID for an in-app product.

* **Refund Description** – Roku-specified explanation for refund transactions.

* **Comments** – Any Roku-entered comments for the transaction.

* **New or Deferred** – If "new," the transaction (including all monthly transactions and new annual subscriptions) happened in the selected payout month. If "deferred," the transaction (on an annual subscription) happened in previous months but is payable in the selected payout month.

* **Payout Month** – The month that the partner was paid by Roku.

<Image alt="roku815px - img" border={false} src="https://image.roku.com/ZHZscHItMTc2/01aScreen-Shot-2020-04-01-at-4-50-25-PM.png" />

> **$0 ammounts**: If the amount is $0 and the transaction type is “Purchase”, the transaction is for a free trial or is a test transaction. All cancellation and downgrade transaction types should have a $0 amount.

## Availability

The Payout Audit  report is available to all apps that conduct transactions through Roku, regardless of region.

## Using the Payout Audit Report to reconcile app activity with Roku payments

When reconciling the amount paid by Roku for a given month with the app transactions for that month, we recommend the steps below:

1. Run the report for your chosen **Payout Month.**
2. Export the data to a spreadsheet file. (See "Exporting report data," below.) Then open the file in your spreadsheet program.
3. In a freestanding blank cell, compute the total of the **Partner Rev Share** column. This should match Roku's payment (after accounting for exceptional circumstances, such as a withholding obligation).
4. Remember that the **Partner Rev Share** is always reported in the local **Currency**, but Roku pays in usd. So the final step of payment reconciliation is to convert the total from the local currency to usd.

To determine the portion of the month's payment which is caused by _deferred_ amounts, only include in the total those **Partner Rev Share** amounts where the **New or Deferred** column contains "deferred". Similarly, the portion of the month's payment that results from _new_ transactions will be the total of **Partner Rev Share** amounts where the **New or Deferred** column contains "new".

> **Withholding:** Non-US developers please note: Once you have followed the above procedure, should the total of new revenue plus deferred revenue for the selected interval be significantly greater than the Roku payments made for that period, check to see if there is a locally imposed or other kind of external tax, which Roku is obliged to withhold. If so, adding that amount to the corresponding payment from Roku should yield the total of new and deferred revenue, as shown in the Payout Audit  report.

## Exporting report data

To export data from the Payout Audit Report,  follow the steps below:

1. Set **Filters** properly and run the report, as described above.

2. Click the "three-dot" (**...**) button in the upper-right portion of the generated report's table-heading. Choose **Download Data...**

   <Image alt="roku815px - img" border={false} src="https://image.roku.com/ZHZscHItMTc2/02aScreen-Shot-2020-04-01-at-4-51-12-PM.png" />

3. The Download dialog appears. The **File Format** field provides several output options, some of which include Excel worksheet (Excel 2007 or later), and CSV. For example, choose CSV:

   <Image alt="roku815px - img" border={false} src="https://image.roku.com/ZHZscHItMTc2/03PayoutAuditDownloadDlg-2020-02-21-at-10-27-16-AMFixed.png" />

4. Make sure that **All Results** is the selection in the **Limit** field, as shown above, _or the full range of data may **not** be exported._

5. If desired, change the default **Filename** to something else.

6. Click **Download**.

## Sample report

You can view and download a sample report in Excel format here: [https://go.roku.com/payout-audit-report-sample](https://go.roku.com/payout-audit-report-sample).
