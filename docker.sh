docker pull --platform linux/amd64 mysql:latest

docker run --platform linux/amd64 \
--name mysql \
--restart unless-stopped -d \
-p 3306:3306 \
-e "MYSQL_ROOT_PASSWORD=1234" \
-e "MYSQL_DATABASE=DRK" \
-e "MYSQL_USER=sy" \
-e "MYSQL_PASSWORD=qwer" \
    mysql:latest