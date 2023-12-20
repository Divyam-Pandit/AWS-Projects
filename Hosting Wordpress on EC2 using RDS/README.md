# WordPress on AWS EC2 with RDS Overview

This project guides you through the process of hosting a WordPress website on an Amazon EC2 instance using Amazon RDS for database management. By leveraging the power of Amazon Web Services (AWS), you can create a scalable and reliable WordPress installation.

## Overview

WordPress is a popular content management system (CMS) that allows you to create and manage websites easily. Hosting it on AWS EC2 provides flexibility and control over the server environment, while RDS simplifies database management.

![Wordpress drawio](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/deca4f6b-7667-41fc-b007-44290cc0f00d)

## Features

* **Scalability:** EC2 instances can be scaled vertically or horizontally based on your website's needs.
* **Reliability:** RDS manages database backups, software patching, and automatic failover, ensuring a reliable database service.
* **Security:** AWS security groups and RDS security features help secure your WordPress installation.

## Technology Stack

* **Amazon EC2:** Virtual server hosting for running WordPress.
* **Amazon RDS:** Managed relational database service for MySQL (or other supported databases).
* **WordPress:** Open-source CMS for building websites.


## Steps to be followed to perform the project :
1. Creating VPC for hosting the EC2 and RDS instance
   
   ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/2b5bb30f-5b27-4249-81ff-4365468b3230)
   
   * Create two subnets after the VPC is ready
     * Public Subnet - for EC2
     * Private Subnet - for RDS
   * Create an internet gateway and attach it to the VPC
   * Create route table to add igw for the EC2 instance ans assosciate the public subnet to that route tabel.
   * Add private-subnet to default route table.
2. Create two security groups for EC2 and RDS respictively:
   * For EC2 add the following inbound rules:
     * Set both `ssh` & `HTTP` to anywhere IPV4
       
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/c9b787be-0813-4fab-99df-0d46346f1ca0)
     
   * For RDS add the follwing inbound rules:
     * Set My `SQL/Aurora` to security group of EC2
       
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/4062cda1-d74f-438b-9fd6-33f4fb72e45e)

3. Now create an RDS instance by going to the RDS:
   * Select appropriate name for your instance.
   * We will be working with MYSQL so we will go with the follwing configuration
     
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/d846a633-69a1-4258-88f0-95e00224daaf)

   * Go with Free Tier:
     
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/5ce147d2-b291-473c-ad72-715ae4a5c504)

   * Set appropriate passwords:
     
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/ec742a5d-99aa-4591-9699-827766a9a491)

   * Set the name for the database as it will only be used to setup the data base during accessing wordpress
   * Now mention the VPC you created and the security group you created for RDS databse, also choose the private subnet :
     
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/d524bc94-82af-4b2f-a179-721943ab55ff)

     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/943dd340-a634-4ab0-9a55-d6821a22a38b)

4. Now create EC2 instance in which you will be using LINUX 2 AMI and setup your EC2 instance:

   ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/e0eaba37-6647-4160-bae0-cfcb01294ec0)


5. After this being done SSH your EC@ linux instance and use the follwing commands in order to install mysql, appache server to host wordpress:

   ```
    sudo yum install -y mysql

    sudo yum install -y httpd

    cd /var/www/html

    sudo amazon-linux-extras install -y mariadb10.5 php8.2 	// as latest wordpress only suports latest php versions 

    sudo wget https://wordpress.org/latest.tar.gz  //installing the latest version of wordpress 

    sudo tar -xzf latest.tar.gz  //unzipping the wordpress file

    // We will copy all the files in the wordpress into the /var/www/html folder
    sudo cp -R wordpress/* /var/www/html

    // Now we will delete the unecessary files 
    sudo rm -rf wordpress
    sudo rm -rf latest.tar.gz

    sudo chmod -R 755 wp-content/   //changing access permissions of wp-content 

    sudo chown -R apache:apache wp-content/   //changing ownership from root to apache 
    // you can check new ownership by 'ls -lah' command

    sudo service httpd start
    sudo chkconfig httpd on
    
    //Now access the page and enter the necessary details, you require to login to rds instance you created 
    //use rds_endpoint instead of local_host 

    //after that you will be prompted to creat wp_config.php -- it can be created in the follwing way
    sudo vi wp-config.php
    //and paste wahtever is given on the page you get after logging in
    //You are ready to setup your wordpress page :)
    ```
6. Now comes the final step to set up your Wordpress srever:
   * You will connect to the wordpress configuration page via the `IP address` of your EC2:

     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/690255a2-d849-4c06-ab69-e852c90fc5ca)

   * Here on second page you will use the databse name you used and the password you set up for the database & in place of Database Host you will put ***enpoint*** of the RDS insstance you created.
     
     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/13dc39a2-b00e-4895-8e26-62b8cde854e4)

     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/7d649e9b-b28d-4fad-bff1-13b13103af58)

     ![image](https://github.com/Divyam-Pandit/AWS-Projects/assets/100858214/f4203151-79ff-4a1a-a2ec-51e1bf000d8d)

### Now you are good to go :)


 


## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

