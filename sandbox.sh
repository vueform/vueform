#!/bin/bash

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

info_message "Generating release notes..."
node ./scripts/notes.js

info_message "Copying release notes to vueform.com/apps/sdk/release.json..."
cp ./CHANGELOG.json ./../vueform.com/apps/sdk/releases.json

info_message "Comitting release notes..."
    
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