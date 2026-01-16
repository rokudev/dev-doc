---
title: "Direct S3 connection for content delivery"
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

# Direct S3 connection for content delivery

Roku supports a direct S3 to S3 method for content delivery. The Roku delivery bucket for S3 direct connect uses a customer-managed KMS key. Since we are performing cross-account transfers, a KMS key and policy which grants external accounts permissions will be required.

## What Roku need from Partners

IAM role ARN, which will be used (assumed) for multipart upload/s3 copy. Once we receive the ARN, we will add it into our KMS/policy allow list. 
Typically, the ARN will be in the form of:

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

## What Partners need from Roku

1. Roku’s production environment bucket name for direct ingest

   ```
   ingest-direct1-886239521314
   ```

2. Partner-specific prefix within the bucket. This will be supplied by Roku during the onboarding cycle and will follow the convention below:
   <u>Convention</u>

   ```
   ingest/<partner_name>/
   ```

   <u>Full bucket path example</u>

   ```
   ingest-direct1-886239521314/ingest/<partner_name>/
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