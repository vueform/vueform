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

# Function to display error message in red color
info_message() {
    echo ">>> $1"
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

# # Run npm run build
# info_message "Building dist..."
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
    info_message "Running unit tests..."
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
    info_message "Skipping unit tests."
    # Update package.json with the new version since tests are skipped
    update_version "$new_version"
    success_message "Updated version in package.json to $new_version"
fi

# Run npm run build
info_message "Building @vueform/sdk-dev..."
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

# Run npm run build
info_message "Building @vueform/sdk..."
npm run to:prod
prod_result=$?
if [ $prod_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/sdk failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/sdk succeeded."
fi

# Run npm run build
info_message "Building @vueform/sdk-source..."
npm run to:source
source_result=$?
if [ $source_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/sdk-source failed. Exiting..."
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/sdk-source succeeded."
fi

# Adding files in main repo
info_message "Adding files in main repo..."
git add --all

# Commit the changes with the new version and build
info_message "Comitting in main repo..."
git commit -m "chore: version, build $new_version"
commit_result=$?
if [ $commit_result -ne 0 ]; then
    # Check if the error is due to "nothing to commit, working tree clean"
    git_status=$(git status --porcelain)
    if [ -z "$git_status" ]; then
        # No changes to commit, so consider it successful
        success_message "Nothing to commit. Working tree clean."
    else
        # Echo the message in red color
        error_message "Git commit failed. Exiting..."
        exit 1
    fi
else
    # Echo the success message in green color
    success_message "Git commit successful."
fi

# Push the changes
info_message "Pushing main repo..."
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

# Remove existing git tag with the new version
info_message "Removing current version tag in main repo..."
git push --delete origin v$new_version
git tag -d "v$new_version"

# Create a git tag with the new version
info_message "Adding version tag in main repo..."
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
info_message "Pusing tags in main repo..."
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
#repos=("./../@vueform-sdk-dev" "./../@vueform-sdk" "./../@vueform-sdk-source")
repos=("@vueform-sdk-dev" "@vueform-sdk" "@vueform-sdk-source")

for repo in "${repos[@]}"; do
    cd "./../$repo"

    # git add --all
    info_message "Adding files in $repo..."
    git add --all
    git_add_result=$?
    if [ $git_add_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git add failed in $repo. Cleaning up..."
        # Undo the previous git add --all
        git reset HEAD . &> /dev/null
        # Reset the repository back to the state of the main branch on the remote repository
        git reset --hard origin/main &> /dev/null
        exit 1
    else
        # Echo the success message in green color
        success_message "Git add successful in $repo."
    fi

    # Check if there are any changes to commit
    git_status=$(git status --porcelain)
    if [ -n "$git_status" ]; then
        # git commit -m "$new_version"
        info_message "Commiting $repo..."
        git commit -m "$new_version"
        git_commit_result=$?
        if [ $git_commit_result -ne 0 ]; then
            # Check if the error is due to "Nothing to commit. Working tree clean."
            if [[ "$git_commit_result" == *"nothing to commit, working tree clean"* ]]; then
                # Echo the message in green color
                success_message "Nothing to commit. Working tree clean in $repo."
            else
                # Echo the message in red color
                error_message "Git commit failed in $repo. Cleaning up..."
                # Undo the previous git add --all
                git reset HEAD . &> /dev/null
                # Reset the repository back to the state of the main branch on the remote repository
                git reset --hard origin/main &> /dev/null
                exit 1
            fi
        else
            # Echo the success message in green color
            success_message "Git commit successful in $repo."

            # Push the changes
            info_message "Pusing $repo..."
            git push
            push_result=$?
            if [ $push_result -ne 0 ]; then
                # Echo the message in red color
                error_message "Git push failed in $repo. Cleaning up..."
                # Undo the previous git add --all
                git reset HEAD . &> /dev/null
                # Reset the repository back to the state of the main branch on the remote repository
                git reset --hard origin/main &> /dev/null
                exit 1
            else
                # Echo the success message in green color
                success_message "Git push successful in $repo."

                # git tag "v$new_version"
                info_message "Removing current version tag in $repo..."
                git push --delete origin v$new_version
                git tag -d "v$new_version"
                info_message "Creating version tag in $repo..."
                git tag "v$new_version"
                git_tag_result=$?
                if [ $git_tag_result -ne 0 ]; then
                    # Echo the message in red color
                    error_message "Git tag creation failed in $repo. Cleaning up..."
                    # Delete the local tag (if created)
                    git tag -d "v$new_version" &> /dev/null
                    # Delete the remote tag (if created)
                    git push --delete origin "v$new_version" &> /dev/null
                    # Undo the previous git add --all
                    git reset HEAD . &> /dev/null
                    # Reset the repository back to the state of the main branch on the remote repository
                    git reset --hard origin/main &> /dev/null
                    exit 1
                else
                    # Echo the success message in green color
                    success_message "Git tag created successfully in $repo."

                    # Push git tags
                    info_message "Pusing tags in $repo..."
                    git push --tags
                    push_tags_result=$?
                    if [ $push_tags_result -ne 0 ]; then
                        # Echo the message in red color
                        error_message "Git push tags failed in $repo. Cleaning up..."
                        # Delete the local tag (if created)
                        git tag -d "v$new_version" &> /dev/null
                        # Delete the remote tag (if created)
                        git push --delete origin "v$new_version" &> /dev/null
                        # Undo the previous git add --all
                        git reset HEAD . &> /dev/null
                        # Reset the repository back to the state of the main branch on the remote repository
                        git reset --hard origin/main &> /dev/null
                        exit 1
                    else
                        # Echo the success message in green color
                        success_message "Git push tags successful in $repo."

                        # npm publish
                        info_message "Unpublishing $repo..."
                        npm unpublish --force
                        info_message "Publishing $repo..."
                        npm publish
                        npm_publish_result=$?
                        if [ $npm_publish_result -ne 0 ]; then
                            # Echo the message in red color
                            error_message "npm publish failed in $repo. Cleaning up..."
                            # Delete the local tag (if created)
                            git tag -d "v$new_version" &> /dev/null
                            # Delete the remote tag (if created)
                            git push --delete origin "v$new_version" &> /dev/null
                            # Undo the previous git add --all
                            git reset HEAD . &> /dev/null
                            # Reset the repository back to the state of the main branch on the remote repository
                            git reset --hard origin/main &> /dev/null
                            exit 1
                        else
                            # Echo the success message in green color
                            success_message "npm publish successful in $repo."
                        fi
                    fi
                fi
            fi
        fi
    else
        # Echo the message in green color
        success_message "Nothing to commit. Working tree clean in $repo."
    fi

    success_message "Git and npm operations completed successfully in $repo."
done

success_message "Released $new_version <<<"