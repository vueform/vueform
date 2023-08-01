success_message() {
    echo -e "\033[32m>>> $1\033[0m"
}

# Function to display error message in red color
error_message() {
    echo -e "\033[31m>>> $1\033[0m"
}

new_version=1.3.5

# Check if there are any uncommitted changes
git_status=$(git status --porcelain)
if [ -n "$git_status" ]; then
    # Save the changes in the working directory to a temporary stash
    git stash save --include-untracked --quiet
    stash_result=$?
    if [ $stash_result -ne 0 ]; then
        # Echo the message in red color
        error_message "Git stash failed in $repo. Exiting..."
        exit 1
    fi

    # Revert the changes from the temporary stash (to effectively undo unpushed commits)
    git stash drop --quiet

    success_message "Unpushed commits undone in $repo."
fi