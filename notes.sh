#!/bin/bash

# Function to display success message in green color
success_message() {
    echo -e "\033[32m>>> $1\033[0m"
}

# Function to display error message in red color
error_message() {
    echo -e "\033[31m>>> $1\033[0m"
}

# Function to display error message in red color
info_message() {
    echo ">>> $1"
}

temp_file=$(mktemp)

info_message "Creating release notes..."
node ./scripts/notes.js > "$temp_file" 2>&1
notes=$?
if [ $notes -ne 0 ]; then
    # Echo the message in red color
    error_message "Generating notes failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Generating notes succeeded."
fi

cp ./CHANGELOG.json ./../vueform.com/apps/sdk/releases.json
cp_response=$?
if [ $cp_response -ne 0 ]; then
    # Echo the message in red color
    error_message "Copying notes failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Copying notes succeeded."
fi
    
cd ./../vueform.com

git add apps/sdk/releases.json
git commit -m  '$new_version'
git push

info_message "Publishing release notes..."

# Define the URL
url="https://forge.laravel.com/servers/681079/sites/2056602/deploy/http?token=gTbJpYLM7MhxprrI4m5WkceH8vA16AHkW2P4Q4ig"

# Make the GET request using curl
response=$(curl -sS $url)

# Check if the request was successful (HTTP status code 200)
if [[ $? -eq 0 ]]; then
  success_message "https://sdk.vueform.com deploy script ran successfully! You should see the release notes in a few minutes."
else
  error_message "https://sdk.vueform.com deploy script failed. Exiting..."
  exit 1
fi