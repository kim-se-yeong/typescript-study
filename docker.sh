#!/bin/bash

export MYSQL_DATABASE=DRK
export MYSQL_ROOT_USER=root
export MYSQL_ROOT_PASSWORD=1234
export MYSQL_USER=sy
export MYSQL_PASSWORD=qwer
export LOCAL_MOUNT_PATH=/tmp/mysql/data

docker pull --platform linux/amd64 mysql:latest

docker run --platform linux/amd64 \
--name mysql \
--restart unless-stopped -d \
-p 3306:3306 \
-e "MYSQL_ROOT_USER=$MYSQL_ROOT_USER" \
-e "MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD" \
-e "MYSQL_DATABASE=$MYSQL_DATABASE" \
-e "MYSQL_USER=$MYSQL_USER" \
-e "MYSQL_PASSWORD=$MYSQL_PASSWORD" \
-v "$LOCAL_MOUNT_PATH:/var/lib/mysql" \
    mysql:latest