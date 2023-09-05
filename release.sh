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

temp_file=$(mktemp)

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

info_message "Generating notes files"
node ./scripts/notes.js > "$temp_file" 2>&1
notes=$?
if [ $notes -ne 0 ]; then
    # Echo the message in red color
    error_message "Generating notes failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Generating notes succeeded."
fi

# Ask whether to run unit tests
echo "Do you want to run unit tests?"
options=("Yes" "No")
select_option "${options[@]}"
test_choice=$?

echo "Do you want to publish release notes?"
options=("Yes" "No")
select_option "${options[@]}"
publish_notes_choice=$?

# Generate api files
info_message "Generating API files"
npm run generate > "$temp_file" 2>&1
generate_result=$?
if [ $generate_result -ne 0 ]; then
    # Echo the message in red color
    error_message "API generation failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "API generation succeeded."
fi

info_message "Publishing API files..."
node ./scripts/apiToSdk.js > "$temp_file" 2>&1
publish_result=$?
if [ $publish_result -ne 0 ]; then
    # Echo the message in red color
    error_message "API publishing failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "API publishing succeeded."
fi

# Run npm run build
info_message "Building main files..."
npm run build > "$temp_file" 2>&1
build_result=$?
if [ $build_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build succeeded."
fi

if [ "$test_choice" -eq 0 ]; then
    # User chose to run unit tests
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
    success_message "Skipping unit tests."
    # Update package.json with the new version since tests are skipped
    update_version "$new_version"
    success_message "Updated version in package.json to $new_version"
fi

# Run npm run build
info_message "Building @vueform/vueform (dev) files..."
npm run to:dev > "$temp_file" 2>&1
dev_result=$?
if [ $dev_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/vueform (dev) failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/vueform (dev) succeeded."
fi

# Run npm run build
info_message "Building @vueform/vueform (prod) files..."
npm run to:prod > "$temp_file" 2>&1
prod_result=$?
if [ $prod_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/vueform (prod) failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/vueform (prod) succeeded."
fi

# Run npm run build
info_message "Building @vueform/vueform (internal) files..."
npm run to:internal > "$temp_file" 2>&1
internal_result=$?
if [ $internal_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/vueform (internal) failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/vueform (internal) succeeded."
fi

# Run npm run build
info_message "Building @vueform/vueform (wildcard) files..."
npm run to:wildcard > "$temp_file" 2>&1
source_result=$?
if [ $source_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/vueform (wildcar) failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/vueform (wildcar) succeeded."
fi

# Run npm run build
info_message "Building @vueform/vueform (source) files..."
npm run to:source > "$temp_file" 2>&1
source_result=$?
if [ $source_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Build @vueform/vueform (source) failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Build @vueform/vueform (source) succeeded."
fi

# Adding files in main repo
git add --all > "$temp_file" 2>&1

# Commit the changes with the new version and build
git commit -m "chore: version, build $new_version" > "$temp_file" 2>&1
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
        cat "$temp_file"
        exit 1
    fi
else
    # Echo the success message in green color
    success_message "Git commit successful."
fi

# Push the changes
git push > "$temp_file" 2>&1
push_result=$?
if [ $push_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git push failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Git push successful."
fi

# Remove existing git tag with the new version
git push --delete origin v$new_version > "$temp_file" 2>&1
git tag -d "v$new_version" > "$temp_file" 2>&1

# Create a git tag with the new version
git tag "v$new_version" > "$temp_file" 2>&1
tag_result=$?
if [ $tag_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git tag creation failed."
    cat "$temp_file"
else
    # Echo the success message in green color
    success_message "Git tag created successfully."
fi

# Push git tags
git push --tags > "$temp_file" 2>&1
push_tags_result=$?
if [ $push_tags_result -ne 0 ]; then
    # Echo the message in red color
    error_message "Git push tags failed. Exiting..."
    cat "$temp_file"
    exit 1
else
    # Echo the success message in green color
    success_message "Git push tags successful."
fi

# Additional git and npm operations for @vueform-vueform-dev, @vueform-vueform, and @vueform-vueform-source folders
repos=("@vueform-vueform-dev" "@vueform-vueform" "@vueform-vueform-internal" "@vueform-vueform-wildcard" "@vueform-vueform-source")
# repos=("@vueform-vueform")

for repo in "${repos[@]}"; do
    cd "./../$repo"

    # git add --all
    git add --all > "$temp_file" 2>&1
    git_add_result=$?
    if [ $git_add_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git add failed in $repo. Cleaning up..."
        cat "$temp_file"
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
        git commit -m "$new_version" > "$temp_file" 2>&1
        git_commit_result=$?
        if [ $git_commit_result -ne 0 ]; then
            # Check if the error is due to "Nothing to commit. Working tree clean."
            if [[ "$git_commit_result" == *"nothing to commit, working tree clean"* ]]; then
                # Echo the message in green color
                success_message "Nothing to commit. Working tree clean in $repo."
            else
                # Echo the message in red color
                error_message "Git commit failed in $repo. Cleaning up..."
                cat "$temp_file"
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
            git push > "$temp_file" 2>&1
            push_result=$?
            if [ $push_result -ne 0 ]; then
                # Echo the message in red color
                error_message "Git push failed in $repo. Cleaning up..."
                cat "$temp_file"
                # Undo the previous git add --all
                git reset HEAD . &> /dev/null
                # Reset the repository back to the state of the main branch on the remote repository
                git reset --hard origin/main &> /dev/null
                exit 1
            else
                # Echo the success message in green color
                success_message "Git push successful in $repo."

                # git tag "v$new_version"
                git push --delete origin v$new_version > "$temp_file" 2>&1
                git tag -d "v$new_version" > "$temp_file" 2>&1
                
                git tag "v$new_version" > "$temp_file" 2>&1
                git_tag_result=$?
                if [ $git_tag_result -ne 0 ]; then
                    # Echo the message in red color
                    error_message "Git tag creation failed in $repo. Cleaning up..."
                    cat "$temp_file"
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
                    git push --tags > "$temp_file" 2>&1
                    push_tags_result=$?
                    if [ $push_tags_result -ne 0 ]; then
                        # Echo the message in red color
                        error_message "Git push tags failed in $repo. Cleaning up..."
                        cat "$temp_file"
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
                        npm unpublish --force > "$temp_file" 2>&1
                        npm publish > "$temp_file" 2>&1
                        npm_publish_result=$?
                        if [ $npm_publish_result -ne 0 ]; then
                            # Echo the message in red color
                            error_message "npm publish failed in $repo. Cleaning up..."
                            cat "$temp_file"
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
done

if [ "$publish_notes_choice" -eq 0 ]; then
    cd ./../vueform
   ./notes.sh
   notes=$?

   if [ $notes -ne 0 ]; then
      error_message "Failed publishing notes. Exiting..."
      cat "$temp_file"
      exit 1
  else
      success_message "Publishing notes succeeded."
  fi
fi

success_message "Released $new_version <<<"