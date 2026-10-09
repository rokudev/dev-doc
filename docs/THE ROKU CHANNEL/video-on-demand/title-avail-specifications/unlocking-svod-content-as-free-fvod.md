---
title: FVOD submissions
excerpt: Offering free preview windows for Premium Subscriptions content
deprecated: false
hidden: false
metadata:
  robots: index
---
All content rights and availability on Roku Channel are managed by Roku’s Rights Management system. Rights include license type, start/end dates, territories, and languages. Partners can submit avails using one of two specifications:

- [EMA Avails Specification](https://movielabs.com/md/avails/)
- [Roku Channel Avails and Committed Title List Specification](https://go.roku.com/ingest-ovp-specs)

# Unlocking SVOD content as free (FVOD)

To temporarily make Premium Subscription content available for free on Roku Channel, submit an avail for the titles with the license type “FVOD” (Free Video on Demand). The title must have an active SVOD window, and the FVOD window must be fully contained within that active SVOD window. Roku does not support FVOD-only availability (FVOD without an overlapping SVOD window). For example, if Title A’s SVOD window is 2025-04-01 to 2025-10-31, the FVOD window cannot start before 2025-04-01 or extend past 2025-10-31.

## Key rules

- The title must have an active SVOD window.
- The FVOD window must be fully contained within the active SVOD window.
- Roku does not support FVOD-only availability (FVOD without an overlapping SVOD window).

### Valid vs. invalid window combinations

| Status  | SVOD Window                   | FVOD Window                   | Reason                                             |
| ------- | ----------------------------- | ----------------------------- | -------------------------------------------------- |
| Valid   | 2025-04-01 to<br />2025-10-31 | 2025-05-01 to<br />2025-06-15 | FVOD is entirely within the SVOD window.           |
| Valid   | 2025-04-01 to<br />2025-10-31 | 2025-04-01 to<br />2025-10-31 | FVOD matches the SVOD window exactly.              |
| Invalid | 2025-04-01 to<br />2025-10-31 | 2025-03-25 to<br />2025-05-01 | FVOD starts before the SVOD window.                |
| Invalid | 2025-04-01 to<br />2025-10-31 | 2025-09-01 to<br />2025-11-15 | FVOD ends after the SVOD window.                   |
| Invalid | none                          | 2025-06-01 to<br />2025-06-30 | FVOD-only is not supported; no active SVOD window. |

## Delivery method

- Submit avails to the “avails” folder in your configured delivery endpoint:
  - Aspera: Place files in the avails folder on your assigned Aspera workspace.
  - Amazon S3: Place files in the avails folder within the S3 bucket configured for your delivery.
- Access requests: if additional users need access to Aspera, email [rokuchannel_onboarding@roku.com](mailto:rokuchannel_onboarding@roku.com).

## Reference samples

Examples of SVOD and FVOD windows in Roku’s Avail specification: [https://go.roku.com/avail-ctl-samples](https://go.roku.com/avail-ctl-samples)
