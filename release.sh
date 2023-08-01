#!/bin/bash

# Function to get the current version from package.json
get_current_version() {
    jq -r '.version' package.json
}

# Function to update the version in package.json
update_version() {
    new_version=$1
    jq --arg v "$new_version" '.version = $v' package.json > tmp.json && mv tmp.json package.json
}

# Function to display success message in green color
success_message() {
    echo -e "\033[32m>>> $1\033[0m"
}

# Function to display error message in red color
error_message() {
    echo -e "\033[31m>>> $1\033[0m"
}

# Custom select_option function to replace dialog
select_option() {
    local options=("$@")
    local selected=0
    local num_options=${#options[@]}

    cursor_blink_off() { printf "\033[?25l"; }
    cursor_blink_on() { printf "\033[?25h"; }
    trap 'cursor_blink_on; stty echo; printf "\n"; exit 1' 2
    cursor_blink_off

    while true; do
        for ((i=0; i<num_options; i++)); do
            if [ $i -eq $selected ]; then
                echo -e "  \033[7m ${options[$i]} \033[0m"
            else
                echo "    ${options[$i]}"
            fi
        done

        read -rsn1 key
        case "$key" in
            "A") ((selected--));;
            "B") ((selected++));;
            "q") echo "Quitting..."; cursor_blink_on; stty echo; exit 1;;
            "") break;;
        esac

        if [ $selected -lt 0 ]; then
            selected=$((num_options - 1))
        elif [ $selected -ge $num_options ]; then
            selected=0
        fi

        tput cuu $num_options
    done

    cursor_blink_on
    echo ""
    return $selected
}

# Ask for the version update type
echo "Choose the version update type:"
options=("Don't change version" "Patch" "Minor" "Major")
select_option "${options[@]}"

version_choice=$?
case "$version_choice" in
    0)
        success_message "Keeping the current version: $(get_current_version)"
        new_version=$(get_current_version)  # Keep the current version
        ;;
    1)
        current_version=$(get_current_version)
        new_version=$(echo "$current_version" | awk -F. -v OFS=. '{$NF++;print}')
        ;;
    2)
        current_version=$(get_current_version)
        new_version=$(echo "$current_version" | awk -F. -v OFS=. '{++$(NF-1); $NF=0;print}')
        ;;
    3)
        current_version=$(get_current_version)
        new_version=$(echo "$current_version" | awk -F. -v OFS=. '{++$1; $(NF-1)=$NF=0;print}')
        ;;
    *)
        error_message "Invalid choice. No version update performed."
        exit 1
        ;;
esac

# Version update is complete. Now let's check the version in CHANGELOG.md
check_changelog_version() {
    local version=$1
    if grep -q "## v$version" CHANGELOG.md; then
        success_message "CHANGELOG.md contains the version $version."
    else
        error_message "Error: CHANGELOG.md does not contain the version $version."
        exit 1
    fi
}

# Call the function to check the version in CHANGELOG.md
check_changelog_version "$new_version"

# Ask whether to run unit tests
echo "Do you want to run unit tests?"
options=("Yes" "No")
select_option "${options[@]}"
test_choice=$?

# Run npm run build
echo "Building dist..."
# npm run build
# build_result=$?
# if [ $build_result -ne 0 ]; then
#     # Echo the message in red color
#     error_message "Build failed. Exiting..."
#     exit 1
# else
#     # Echo the success message in green color
#     success_message "Build succeeded."
# fi

if [ "$test_choice" -eq 0 ]; then
    # User chose to run unit tests
    echo ">>> Running unit tests..."
    npm run test
    test_result=$?
    if [ $test_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Unit tests failed. Skipping version update in package.json."
        exit 1
    else
        # Echo the success message in green color
        success_message "Unit tests passed successfully."
        # Update package.json with the new version since tests succeeded
        update_version "$new_version"
        success_message "Updated version in package.json to $new_version"
    fi
else
    echo "Skipping unit tests."
    # Update package.json with the new version since tests are skipped
    update_version "$new_version"
    success_message "Updated version in package.json to $new_version"
fi

# Run npm run build
echo ">>> Building @vueform/sdk-dev..."
npm run to:dev
dev_result=$?
if [ $dev_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/sdk-dev failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/sdk-dev succeeded."
fi

# # Run npm run build
# echo "Building @vueform/sdk..."
# npm run to:prod
# prod_result=$?
# if [ $prod_result -ne 0 ]; then
#     # Echo the message in red color
#     error_message "Build @vueform/sdk failed. Exiting..."
#     exit 1
# else
#     # Echo the success message in green color
#     success_message "Build @vueform/sdk succeeded."
# fi

# # Run npm run build
# echo "Building @vueform/sdk-source..."
# npm run to:source
# source_result=$?
# if [ $source_result -ne 0 ]; then
#     # Echo the message in red color
#     error_message "Build @vueform/sdk-source failed. Exiting..."
#     exit 1
# else
#     # Echo the success message in green color
#     success_message "Build @vueform/sdk-source succeeded."
# fi

# Commit the changes with the new version and builde
echo ">>> Commiting main repo..."
git add --all
git commit -m "chore: version, build $new_version"
commit_result=$?
if [ $commit_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git commit failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Git commit successful."
fi

# Push the changes
git push
push_result=$?
if [ $push_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git push failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Git push successful."
fi

# Create a git tag with the new version
git tag "v$new_version"
tag_result=$?
if [ $tag_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git tag creation failed."
else
    # Echo the success message in green color
    success_message "Git tag created successfully."
fi

# Push git tags
git push --tags
push_tags_result=$?
if [ $push_tags_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git push tags failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Git push tags successful."
fi

# Additional git and npm operations for @vueform-sdk-dev, @vueform-sdk, and @vueform-sdk-source folders
# repos=("./../@vueform-sdk-dev" "./../@vueform-sdk" "./../@vueform-sdk-source")
repos=("./../@vueform-sdk-dev")

for repo in "${repos[@]}"; do
    echo ">>> Current directory: $(pwd)" # Debugging output
    pushd "$repo" # Navigate to the repository directory
    echo ">>> Changed directory to: $(pwd)" # Debugging output

    # Ensure we are in the correct directory
    if [ ! -d ".git" ]; then
        # Echo the message in red color
        error_message "Error: Not in a git repository. Exiting..."
        exit 1
    fi

    # git add --all
    git add --all
    git_add_result=$?
    if [ $git_add_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git add failed in $repo. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "Git add successful in $repo."
    fi

    # git commit -m "$new_version"
    git commit -m "$new_version"
    git_commit_result=$?
    if [ $git_commit_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git commit failed in $repo. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "Git commit successful in $repo."
    fi

    # git tag "v$new_version"
    git tag "v$new_version"
    git_tag_result=$?
    if [ $git_tag_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git tag creation failed in $repo. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "Git tag created successfully in $repo."
    fi

    # git push --tags
    git push --tags
    git_push_tags_result=$?
    if [ $git_push_tags_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git push tags failed in $repo. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "Git push tags successful in $repo."
    fi

    # npm publish
    npm publish
    npm_publish_result=$?
    if [ $npm_publish_result -ne 0 ]; then
        # Echo the message in red color
        error_message "npm publish failed in $repo. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "npm publish successful in $repo."
    fi

    popd # Return to the original directory
    echo "Returned to the original directory: $(pwd)" # Debugging output
    success_message "Git and npm operations completed successfully in $repo."
done

success_message "Relesed $new_version"