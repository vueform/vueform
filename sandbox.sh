success_message() {
    echo -e "\033[32m>>> $1\033[0m"
}

# Function to display error message in red color
error_message() {
    echo -e "\033[31m>>> $1\033[0m"
}

new_version=1.3.5

# Undo any unpushed commits
unpushed_commits=$(git log origin/next..HEAD --oneline)
if [ -n "$unpushed_commits" ]; then
    git reset origin/main --hard
    success_message "Unpushed commits undone in $repo."
fi