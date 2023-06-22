#!/bin/bash

# Source the .env file
source .env

# Define container name, MySQL credentials
CONTAINER_NAME="task-manager-container"
MYSQL_ROOT_PASSWORD="$DB_PASSWORD"
DB_NAME="$DB_NAME"
DB_USER="$DB_USER"


echo $DB_USER
echo $MYSQL_ROOT_PASSWORD
echo $DB_NAME
# Check if the container is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "MySQL Docker container '$CONTAINER_NAME' is already running."
    exit 0
fi

# Check if the container exists but is stopped
if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
    echo "Starting existing stopped MySQL Docker container '$CONTAINER_NAME'..."
    docker start $CONTAINER_NAME
    exit 0
fi

# Create and start the MySQL container
echo "Creating and starting MySQL Docker container '$CONTAINER_NAME'..."
# mysql://root:rootpassword@127.0.0.1:3309/task_manager
docker run \
  --rm --name $CONTAINER_NAME -d \
  -e="MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD" \
  -e="MYSQL_DATABASE=$DB_NAME" \
  -p 3309:3306 \
  -v=$DIR:/var/lib/mysql \
  --platform linux/x86_64 \
  mysql:8.0.30 \
  --default-authentication-plugin=caching_sha2_password

echo "MySQL Docker container '$CONTAINER_NAME' has been started."