#!/bin/bash

# Script to create GitHub repository and deploy code
# Usage: ./deploy-to-github.sh <repository-name>

REPO_NAME=$1

if [ -z "$REPO_NAME" ]; then
  echo "Usage: ./deploy-to-github.sh <repository-name>"
  echo "Please provide a repository name"
  exit 1
fi

echo "Creating GitHub repository: $REPO_NAME"

# Create GitHub repository using GitHub CLI (if installed)
if command -v gh &> /dev/null; then
  echo "GitHub CLI found. Creating repository..."
  gh repo create $REPO_NAME --public --source=. --remote=origin
else
  echo "GitHub CLI not found. Please install it or create the repository manually:"
  echo "1. Go to https://github.com/new"
  echo "2. Create a new repository named: $REPO_NAME"
  echo "3. Follow the instructions below to push the code manually"
  echo ""
  echo "To push code manually:"
  echo "  git remote add origin https://github.com/<your-username>/$REPO_NAME.git"
  echo "  git branch -M main"
  echo "  git push -u origin main"
  exit 1
fi

# Set branch to main (modern GitHub default)
git branch -M main

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

echo "Deployment complete!"
echo "Your repository is now available at: https://github.com/$(git config user.name)/$REPO_NAME"