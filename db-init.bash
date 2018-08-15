#!/bin/bash
dbName=test
dbUser=test
dbPass=test

mysql -uroot <<MYSQL_SCRIPT
DROP DATABASE IF EXISTS $dbName;
CREATE DATABASE $dbName;
CREATE USER '$dbUser'@'localhost' IDENTIFIED BY '$dbPass';
ALTER USER '$dbUser'@'localhost' IDENTIFIED WITH mysql_native_password BY '$dbPass';
GRANT ALL PRIVILEGES ON $dbPass.* TO '$dbUser'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT

echo "MySQL user created."
echo "Database:   $dbName"
echo "Username:   $dbUser"
echo "Password:   $dbPass"