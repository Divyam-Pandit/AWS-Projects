Website Visitor Count Architecture

This document outlines the architecture for a website that dynamically tracks visitor count using Serverless tools on AWS.

Components:

* S3 Bucket: Hosts static website files.
* Lambda Function: Triggered by visitor, updates DynamoDB view count.
* DynamoDB Table: Stores the website view count.
* Cloudfront Distribution: Delivers website content with low latency.
* Route53 Hosted Zone: Maps domain name to Cloudfront distribution.

Deployment Steps:

1. S3 Bucket:*

* Create a bucket for your website files.
* Enable static website hosting for the bucket.
* Upload your website files to the bucket.

2. DynamoDB Table:

* Create a table named "view-count".
* Set "id" as a String primary key.
* Add a Number attribute named "views".

3. Lambda Function:

* Create a Python Lambda function named "update-view-count".
* Configure triggers for S3 Put Object events.
* Write code to:
    * Retrieve current view count from DynamoDB.
    * Increment the view count.
    * Update DynamoDB with the new count.
* Deploy the Lambda function.

4. Cloudfront Distribution:

* Create a distribution using your S3 bucket as origin.
* Set a custom domain name for your website.
* Configure caching and other options.
* Deploy the Cloudfront distribution.

5. Route53 Hosted Zone:

* Create a hosted zone for your domain name.
* Register your domain in the hosted zone.
* Create an alias record pointing your domain to the Cloudfront distribution.

6. Verification:

* Visit your website and test the view count update.
* Monitor Lambda function logs for trigger events.
* Check DynamoDB table for view count increments.



