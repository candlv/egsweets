eb init dessert --platform node.js --region us-east-1 && eb use dessert-env &&
eb setenv RDS_HOSTNAME=$RDS_HOSTNAME RDS_DATABASE=$RDS_DATABASE RDS_USERNAME=$RDS_USERNAME RDS_PASSWORD=$RDS_PASSWORD RDS_PORT=$RDS_PORT SECRET=$SECRET SALT=$SALT ENV=$ENV  && 
eb deploy