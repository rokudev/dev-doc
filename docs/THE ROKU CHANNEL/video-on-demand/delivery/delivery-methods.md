---
title: Delivery methods
excerpt: Details of the delivery methods supported by Roku
deprecated: false
hidden: false
metadata:
  robots: index
---
## Aspera

Roku accepts content via Aspera which can be configured as either an Aspera Shares (using the IBM Aspera for Desktop application) or as an Aspera P2P/Enterprise connection (using Aspera Client or Console).

Alternate file transfer or physical delivery methods may be evaluated on a case-by-case basis and must be approved by Roku. Any physical media/hard drives Roku may accept will not be returned.

### Aspera shares delivery

Provide the name(s) and email address(es) for users that will be transmitting content to Roku for Roku Channel.

Roku’s Aspera Shares URL: [https://aspera.sr.roku.com](https://aspera.sr.roku.com)

**IBM Aspera for Desktop**

[IBM Aspera for Desktop Download](https://ibmaspera.com/help/downloads/desktop)

You will need to install the IBM Aspera for Desktop application to upload content via Aspera Shares.

Invitations to create an Aspera Shares account will come from Roku’s Aspera Shares server. These automated invitation emails can be flagged as spam or junk emails or can be blocked by an organization’s email filtering system or firewall. Please check the spam/junk folder for the invitation and move it from the spam/junk folder before trying to access the link provided.

### Aspera enterprise/P2P/HSTS delivery

Roku authenticates through RSA Public/Private key exchange. To complete this configuration, please provide a Public RSA-SSH key.

Steps to create SSH keys can be found in [Aspera’s official documentation](https://download.asperasoft.com/download/docs/ascp/3.5.2/html/dita/creating_public_key.html)

Roku will provide host and username information during onboarding.

**Aspera Client**

[Aspera Client Download](https://www.ibm.com/support/fixcentral/swg/selectFixes?parent=ibm~Other%20software\&product=ibm/Other%20software/IBM%20Aspera%20Desktop%20Client\&release=All\&platform=All\&function=all)

#### Transfer Bandwidth

Roku recommends verifying or updating the global and user preferences of the Aspera Client to align with your preferred upload bandwidth. Please note Roku applies a global bandwidth cap of 300Mbps.

![asperaPreferences](https://image.roku.com/ZHZscHItMTc2/asperaPreferences.jpg)

Depending on what client is being used, there are different settings that can affect transfer speeds.

- If using the Desktop Client GUI, global settings can be set
  [https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-global-bandwidth-settings)
- Transfer speeds can also be set on a per-Connection level (the "Speed" setting in step 7):
  [https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections](https://www.ibm.com/docs/en/asdc/4.4.x?topic=gui-adding-editing-connections)
- If connecting via command line, there is a specific switch: `-l 100m` would set the transfer rate at 100Mbps
- If connecting via Aspera Shares, target rates can be set both system-wide or per-user in the Shares web interface<br />[https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=options-configuring-transfer-settings)<br />[https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings](https://www.ibm.com/docs/en/aspera-shares/1.10?topic=accounts-configure-user-settings)

## Direct S3 connection

Roku supports a direct S3 to S3 method for content delivery. The Roku delivery bucket for S3 direct connect uses a customer-managed KMS key. Since we are performing cross-account transfers, a KMS key and policy which grants external accounts permissions will be required.

### What Roku need from Partners

IAM role ARN, which will be used (assumed) for multipart upload/s3 copy. Once we receive the ARN, we will add it into our KMS/policy allow list.<br />Typically, the ARN will be in the form of:

```
arn:aws:iam::<AWS_ACCOUNT>:role/<ROLE_NAME>
```

The IAM role will need to allow KMS related actions:

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

### What Partners need from Roku

1. Roku’s production environment bucket name for direct ingest

   ```
   ingest-direct1-886239521314
   ```

2. Partner-specific prefix within the bucket. This will be supplied by Roku during the onboarding cycle and will follow the convention below: <u>Convention</u>

   ```
   ingest/<partner_name>/prod/
   ```

   <u>Full bucket path example</u>

   ```
   ingest-direct1-886239521314/ingest/<partner_name>/prod/
   ```

### Best practices/optimization

Roku’s S3 bucket is located in the **us-east-1** region. Cross region transfers are expected to be slower. Transfers can be optimized by configuring multipart upload/copy settings:

```
 aws configure set default.s3.multipart_chunksize 128MB
 aws configure set default.s3.max_concurrent_requests 30** 
```

### Testing

To validate the configuration, perform the following test

1. Test upload file to Roku S3 bucket and the designated partner prefix
2. Test copy file from Partner S3 bucket to Roku S3 bucket and the designated partner prefix
