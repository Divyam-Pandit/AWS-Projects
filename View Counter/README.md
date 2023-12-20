# Website Visitor Count Architecture

This document outlines the architecture for a website that dynamically tracks visitor count using Serverless tools on AWS.

![View-Counter drawio](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/d2f68d22-f042-4f00-9db1-e00785c7bca9)

## Components

- **S3 Bucket:** Hosts static website files.
- **Lambda Function:** Triggered by a visitor, updates DynamoDB view count.
- **DynamoDB Table:** Stores the website view count.
- **Cloudfront Distribution:** Delivers website content with low latency.
- **Route53 Hosted Zone:** Maps the domain name to Cloudfront distribution.

## Deployment Steps

### 1. S3 Bucket:

- Create a bucket for your website files.
- Enable static website hosting for the bucket.
- Upload your website files to the bucket.

### 2. DynamoDB Table:

- Create a table named "view-count".
- Set "id" as a String primary key.
- Add a Number attribute named "views".

### 3. Lambda Function:

- Create a Python Lambda function named "update-view-count".
- Configure triggers for S3 Put Object events.
- Write code to:
  - Retrieve the current view count from DynamoDB.
  - Increment the view count.
  - Update DynamoDB with the new count.
- Deploy the Lambda function.

### 4. Cloudfront Distribution:

- Create a distribution using your S3 bucket as the origin.
- Set a custom domain name for your website.
- Configure caching and other options.
- Deploy the Cloudfront distribution.

### 5. Route53 Hosted Zone:

- Create a hosted zone for your domain name.
- Register your domain in the hosted zone.
- Create an alias record pointing your domain to the Cloudfront distribution.

### 6. Verification:

- Visit your website and test the view count update.

## Usage

Follow these steps to deploy the architecture for tracking website visitor count. Customize as needed for your specific requirements.

## Contribution

We welcome contributions to enhance and improve the Website Visitor Count Architecture. Feel free to join the community and contribute to the development of this solution.

**Happy Tracking!**

I hope this helps! Let me know if you have any other questions.
* Monitor Lambda function logs for trigger events.
* Check DynamoDB table for view count increments.



