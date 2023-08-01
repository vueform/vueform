success_message() {
    echo -e "\033[32m>>> $1\033[0m"
}

# Function to display error message in red color
error_message() {
    echo -e "\033[31m>>> $1\033[0m"
}

new_version=1.3.5

info_message "Commiting main repo..."
git add --all
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

    # Push the changes
    git push origin main
    push_result=$?
    if [ $push_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git push failed. Exiting..."
        exit 1
    else
        # Echo the success message in green color
        success_message "Git push successful."

        # Create a git tag with the new version
        git tag "v$new_version"
        tag_result=$?
        if [ $tag_result -ne 0 ]; then
            # Echo the message in red color
            error_message "Git tag creation failed. Exiting..."
            exit 1
        else
            # Echo the success message in green color
            success_message "Git tag created successfully."

            # Push git tags
            git push origin --tags
            push_tags_result=$?
            if [ $push_tags_result -ne 0 ]; then
                # Echo the message in red color
                error_message "Git push tags failed. Exiting..."
                exit 1
            else
                # Echo the success message in green color
                success_message "Git push tags successful."
            fi
        fi
    fi
fi