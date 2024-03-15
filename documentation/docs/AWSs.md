# AWS - infrustructures
Amazon provides a lot of services for hosting applications regardless of the languages used to create them. For example, to host a Node application that uses a relational database like Postgres, you can use Elastek beanstalk for hosting the back end, S3 bucket for hosting the front end, and use RDS postgresSQL for saving data.
## Elastic Beanstalk
Environment create and consume some other services instances to host backend code for example, s3 bucket to save code version, load balancer for routing requestes, EC2, and more. EB uses virtual machine like amazon linux2.  
## S3
s3 bucket is a storage for saving file based on object the key is the file name and value is the file content it is not a hard drive so it can not run operating systems.
## RDS
RDS is a relational database there is many types like postgreSQL, mariaDB, SQLserver, and others
## 
You will need to configure each service to match your requirements but the most important properties you need to pay attention to are as follow:
- in RDS connection properties username, password, database name, host name, port. after create your data base these properties will be availabe and you can save them in environment variables or in s3 bucket and gives ec2 permission to access them to download them when required.
- in elastic beanstalk environment and application name. url that will your front end connect to. plateform and health.
- in s3 bucket name, avilability, permissions, and url that will end user will use to consume your application.
## AWS AND EB CLI
these CLI programs provide commands to do everything you can do with services console. they are good because fast and easy.you can also use them with pipeline to automate everything youneed to perform on aws platforms.
