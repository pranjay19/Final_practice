#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run build

# Navigate into the build output directory
cd dist

# Place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# If you are deploying to a custom domain
# echo 'www.example.com'> CNAME

# Initialize git, add and commit files
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# Deploy to GitHub pages
# If you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# If you are deploying to https://<USERNAME>.github.io/<REPO>
# Replace roymansoor/pokemon.git with your own repository name
git push -f git@github.com:pranjay19/PORTFOLIO_GITHUB.git main:gh-pages

# Navigate back to previous directory
cd -
