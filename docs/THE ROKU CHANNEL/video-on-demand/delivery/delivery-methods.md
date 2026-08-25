---
title: Delivery methods
excerpt: 'Supported transfer methods: Aspera (Shares/P2P) and direct S3 connection.'
deprecated: false
hidden: true
metadata:
  robots: index
---
## Overview

Roku supports two primary content delivery methods:

1. **Aspera**: via Aspera Shares (desktop app) or Aspera Enterprise/P2P (SSH-key authenticated)
2. **Direct S3 connection:** cross-account S3-to-S3 transfer

Roku will confirm which delivery method applies to a given partner during onboarding. Alternate file transfer or physical delivery methods **may** be evaluated on a case-by-case basis, but **must** be approved by Roku in advance. **If approved, any physical media/hard drives provided to Roku will not be returned.**

***

## Aspera

Roku accepts content via Aspera, configured as either:

- **Aspera Shares** (using the IBM Aspera for Desktop application), or
- **Aspera Enterprise/P2P** (using Aspera Client or Console)

**Choosing between them:** Aspera Shares is a simpler, desktop-app-based option well suited to occasional or smaller-scale transfers. Aspera Enterprise/P2P uses SSH-key authentication and is typically used for larger-volume or more frequent automated transfers. Roku will confirm which applies to your onboarding.

### Aspera Shares Delivery

Provide the name(s) and email address(es) of users who will be transmitting content to Roku for Roku Channel.

- **Roku's Aspera Shares URL:** [https://aspera.sr.roku.com](https://aspera.sr.roku.com)
- **Required application:** [IBM Aspera for Desktop](https://ibmaspera.com/help/downloads/desktop) — installation is required to upload content via Aspera Shares.

> **Invitation emails:** account invitations to Aspera Shares are sent from Roku's Aspera Shares server. These automated emails are commonly flagged as spam/junk, or blocked by an organization's email filtering or firewall. If you don't see the invitation, **check your spam/junk folder** and move it out before attempting to use the link.

### Aspera Enterprise/P2P/HSTS Delivery

Roku authenticates via **RSA public/private key exchange**. To complete configuration, provide a **public RSA-SSH key**.

- Steps to create SSH keys: [Aspera's official documentation](https://download.asperasoft.com/download/docs/ascp/3.5.2/html/dita/creating_public_key.html)
- Roku will provide **host and username information** during onboarding.
- **Required application:** [Aspera Client](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software\&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client\&release=All\&platform=All\&function=all)

#### Transfer Bandwidth

Roku applies a **global bandwidth cap of 300 Mbps**. Roku recommends verifying or updating your Aspera Client's global and user preferences to align with your preferred upload bandwidth.

![Aspera preferences example](https://image.roku.com/ZHZscHItMTc2/asperaPreferences.jpg)

Where you configure transfer speed depends on which client/connection type you're using:

| Connection Type                      | Where to Configure                                                                         | Reference                                                                                                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop Client GUI (global settings) | Global bandwidth preferences                                                               | [IBM docs: global bandwidth settings](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings)                                                                                                                              |
| Desktop Client GUI (per-connection)  | "Speed" setting when adding/editing a connection                                           | [IBM docs: adding/editing connections](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections)                                                                                                                            |
| Command line                         | `-l` switch on the transfer command, e.g. `ascp -l 100m ...` sets a 100 Mbps transfer rate | —                                                                                                                                                                                                                                              |
| Aspera Shares (web interface)        | System-wide or per-user target rate                                                        | [Configuring transfer settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings) / [Configure user settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings) |

> Pick the row matching your connection type — these are alternative configuration paths, not sequential steps.

***

## Direct S3 Connection

Roku supports direct S3-to-S3 transfer for content delivery. The Roku delivery bucket for S3 direct connect uses a **customer-managed KMS key**. Because this is a cross-account transfer, a KMS key and policy granting the partner's account permission is required.

### What Roku Needs From Partners

The partner's **IAM role ARN**, used (assumed) for multipart upload/S3 copy. Once received, Roku adds it to the KMS/policy allow list.

Typical ARN format:

```
arn:aws:iam::<AWS_ACCOUNT>:role/<ROLE_NAME>
```

The IAM policy below is presented in the source spec as the required permission set for the partner's assumed role:

```json
{
"Version": "2012-10-17",
"Statement": [
  {
    "Effect": "Allow",
    "Action": [
      "kms:\*",
      "s3:\*"
    ],
    "Resource": "\*"
  }
]
}
```

### What Partners Need From Roku

1. **Roku's production environment bucket name** for direct ingest:

   ```
   ingest-direct1-886239521314
   ```

2. **Partner-specific prefix** within the bucket, supplied by Roku during onboarding, following this convention:

   **Convention:**

   ```
   ingest/<partner_name>/prod/
   ```

   **Full bucket path example:**

   ```
   ingest-direct1-886239521314/ingest/<partner_name>/prod/
   ```

### Best Practices / Optimization

Roku's S3 bucket is located in the **us-east-1** region — cross-region transfers are expected to be slower. Transfers can be optimized via multipart upload/copy settings:

```
aws configure set default.s3.multipart_chunksize 128MB
aws configure set default.s3.max_concurrent_requests 30
```

### Testing

To validate configuration, perform the following:

1. Test uploading a file to the Roku S3 bucket, into the designated partner prefix.
2. Test copying a file from the partner's S3 bucket to the Roku S3 bucket, into the designated partner prefix.

***

## Glossary

| Term                           | Definition                                                                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aspera Shares**              | A browser/desktop-app-based Aspera delivery method using user invitations rather than SSH-key authentication.                                                    |
| **Aspera Enterprise/P2P/HSTS** | An SSH-key-authenticated Aspera delivery method, typically used for larger or automated transfers. _(HSTS here refers to Aspera's "High-Speed Transfer Server")_ |
| **KMS key**                    | AWS Key Management Service key — used here to encrypt/decrypt content in Roku's S3 delivery bucket.                                                              |
| **IAM role ARN**               | Amazon Resource Name identifying an AWS IAM role — the identity a partner's system assumes to perform the transfer.                                              |
| **Multipart upload**           | An S3 upload method that splits a large file into parts uploaded in parallel, improving transfer speed and reliability.                                          |
| **Cross-account transfer**     | A transfer between two separate AWS accounts (the partner's and Roku's), requiring explicit permission grants on both sides.                                     |